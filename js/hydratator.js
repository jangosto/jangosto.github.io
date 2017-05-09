var getJsonUrl = function (url) {
    removeQueryString(url);
}

var removeQueryString = function (url) {
    var response = url.replace(/(\?)([^=]+=[^&]+)+/g, "");
    return response; 
}

var updatePage = function (data) {
    var div = document.createElement('div');
    div.innerHTML = JSON.parse(data).content;
    var elements = div.childNodes;
    var container = document.getElementById("content");
//    container.innerHTML = data;
    container.parentNode.replaceChild(elements[0], container);

    MetadataParser.updateContentTags(JSON.parse(data).metadata["other-tags"],"data-ue-");
    MetadataParser.updateContentTags(JSON.parse(data).metadata["meta-tags"],"data-ue-");
    AnalyticsParser.updateAnalytics({content:{analytics:JSON.parse(data).analytics}});
    
}

var getAmpUrl = function (url) {
    var siteDomain = "http://localhost";
    var contentUrl = "/ue-nydus/nydus.php";
    // ... regex for portada
    var coverPattern =  new RegExp("^"+siteDomain+"(\/)?$", "i");
    // ... regex for portadillas
    var autocoverPattern =  new RegExp("^"+siteDomain+"\/([a-z0-9\-]+\/)?([a-z0-9\-]+\/)?([a-z0-9\-]+\/)?([a-z0-9\-]+.html)?$", "i");
    // ... regex for news
    var newPattern = new RegExp("^"+siteDomain+"\/([a-z0-9\-]+\/)?([a-z0-9\-]+\/)?([a-z0-9\-]+\/)?[0-9]{4}\/[0-1][0-9]\/[0-3][0-9]\/[0-9a-f]{24}.html$", "i");
    var currentUrl = removeQueryString(url);

    var ampUrl = "";
    var parser = document.createElement('a');
    parser.href = currentUrl;
    if (coverPattern.test(currentUrl)) {
        ampUrl = "index";
    } else if (newPattern.test(currentUrl) || autocoverPattern.test(currentUrl)) {
        ampUrl = parser.pathname.replace(".html", "");
    }

    ampUrl = contentUrl+"?content="+ampUrl;

    return ampUrl;
}

var transformContent = function () {
    var currentUrl = window.location.href;

    var ampUrl = getAmpUrl(currentUrl);

    if (ampUrl.length > 0) {
        fetch(ampUrl).then(function (response) {
            return response.text().then(function (data) {
                updatePage(data);
            });
        });
    }
}

transformContent();

//READ LATER FEATURE IMPLEMENTATION
var sendReadLaterMessage = function (e) {
    var id = e.target.getAttribute("id");
    var url = e.target.parentNode.getElementsByClassName("new-url")[0].getAttribute('href');
    var message = {"type": "cacheAddUrlRequest", "url": getAmpUrl(url)};
    return new Promise(function(resolve, reject) {
        var messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = function(ev) {
            if (ev.data) {
                e.target.setAttribute('style', 'background:#00FF00');
            }
        };
        navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
    });
}

var sendIsCachedMessage = function (url, element) {
    var message = {"type": "isUrlCachedRequest", "url": url};
    return new Promise(function(resolve, reject) {
        var messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = function(ev) {
            if (ev.data.cached == true) {
                element.setAttribute('style', 'background:#00FF00');
            }
        };
        navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
    });
}

var observer = new MutationObserver(function (mutations) {
    var readLaterButtons = document.getElementsByClassName("read-later");
    if (readLaterButtons.length > 0) {
        for (var i = 0; i < readLaterButtons.length; i++) {
            sendIsCachedMessage(getAmpUrl(readLaterButtons[i].parentNode.getElementsByClassName("new-url")[0].getAttribute('href')), readLaterButtons[i]);
            readLaterButtons[i].addEventListener("click", function(e) {
                sendReadLaterMessage(e);
            }, false);
        }
    }
});

var container = document.getElementById("content");
var config = { attributes: false, childList: true, characterData: false };
observer.observe(container, config);
