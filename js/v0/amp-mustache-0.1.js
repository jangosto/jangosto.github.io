(self.AMP=self.AMP||[]).push({n:"amp-mustache",v:"1492569253368",f:(function(AMP){function ba(b,a){function f(){}f.prototype=a.prototype;b.prototype=new f;b.prototype.constructor=b;for(var c in a)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(a,c);e&&Object.defineProperty(b,c,e)}else b[c]=a[c]};Date.now();self.log=self.log||{user:null,dev:null};var ca=self.log;function t(){if(ca.user)return ca.user;throw Error("failed to call initLogConstructor");};function da(b,a){return a.length>b.length?!1:0==b.lastIndexOf(a,0)};var B=self.AMP_CONFIG||{},ea=B.cdnUrl||"https://cdn.ampproject.org",fa=("string"==typeof B.cdnProxyRegex?new RegExp(B.cdnProxyRegex):B.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org/;var G,ga,ha=/[?&]amp_js[^&]*/;
function J(b){var a;G||(G=self.document.createElement("a"),ga=self.UrlCache||(self.UrlCache=Object.create(null)));var f=ga[b];if(f)return f;G.href=b;G.protocol||(G.href=G.href);var c={href:G.href,protocol:G.protocol,host:G.host,hostname:G.hostname,port:"0"==G.port?"":G.port,pathname:G.pathname,search:G.search,hash:G.hash,origin:null};"/"!==c.pathname[0]&&(c.pathname="/"+c.pathname);if("http:"==c.protocol&&80==c.port||"https:"==c.protocol&&443==c.port)c.port="",c.host=c.hostname;c.origin=G.origin&&
"null"!=G.origin?G.origin:"data:"!=c.protocol&&c.host?c.protocol+"//"+c.host:c.href;var e=c;return a?e:ga[b]=e}function la(b){"string"==typeof b&&(b=J(b));return fa.test(b.origin)}function ma(b,a){"string"==typeof a&&(a=J(a));return"function"==typeof URL?(new URL(b,a.href)).toString():va(b,a)}
function va(b,a){"string"==typeof a&&(a=J(a));b=b.replace(/\\/g,"/");var f=J(b);if(0==b.toLowerCase().indexOf(f.protocol))return f.href;if(0==b.indexOf("//"))return a.protocol+b;if(0==b.indexOf("/"))return a.origin+b;var c=a.pathname.split("/");return a.origin+(1<c.length?c.slice(0,c.length-1).join("/"):"")+"/"+b};function Q(b){t().assert(0<b.length,"Srcset must have at least one source");this.f=b;var a=!1,f=!1;for(b=0;b<this.f.length;b++){var c=this.f[b];t().assert((c.width||c.dpr)&&(!c.width||!c.dpr),"Either dpr or width must be specified");a=a||!!c.width;f=f||!!c.dpr}t().assert(!a||!f,"Srcset cannot have both width and dpr sources");a?this.f.sort(wa):this.f.sort(xa);this.C=a;this.B=f}
Q.prototype.select=function(b,a){var f=-1;if(this.C)a:{for(var f=-Infinity,c=this.f.length-1;0<=c;c--){var e=this.f[c].width/a;if(e>=b){f=1.1*(b-f)<e-b&&1.2>=b/f?c+1:c;break a}f=e}f=0}else if(this.B){b=-1;f=1E6;for(c=0;c<this.f.length;c++)e=Math.abs((this.f[c].dpr||1)-a),e<f&&(f=e,b=c);f=b}return-1!=f?this.f[f]:this.getLast()};Q.prototype.getLast=function(){return this.f[this.f.length-1]};Q.prototype.getSources=function(){return this.f};
Q.prototype.stringify=function(){for(var b=[],a=0;a<this.f.length;a++){var f=this.f[a];f.width?b.push(f.url+" "+f.width+"w"):f.dpr?b.push(f.url+" "+f.dpr+"x"):b.push(""+f.url)}return b.join(", ")};function wa(b,a){t().assert(b.width!=a.width,"Duplicate width: %s",b.width);return a.width-b.width}function xa(b,a){t().assert(b.dpr!=a.dpr,"Duplicate dpr: %s",b.dpr);return a.dpr-b.dpr};var ya=function(){function b(b){var g=(""+b).match(w);return g?new d(k(g[1]),k(g[2]),k(g[3]),k(g[4]),k(g[5]),k(g[6]),k(g[7])):null}function a(g,b,a,k,h,l,m){g=new d(c(g,q),c(b,q),f(a),0<k?k.toString():null,c(h,C),null,f(m));l&&("string"===typeof l?g.setRawQuery(l.replace(/[^?&=0-9A-Za-z_\-~.%]/g,e)):g.setAllParameters(l));return g}function f(g){return"string"==typeof g?encodeURIComponent(g):null}function c(g,b){return"string"==typeof g?encodeURI(g).replace(b,e):null}function e(g){var b=g.charCodeAt(0);
return"%"+"0123456789ABCDEF".charAt(b>>4&15)+"0123456789ABCDEF".charAt(b&15)}function m(b){return b.replace(/(^|\/)\.(?:\/|$)/g,"$1").replace(/\/{2,}/g,"/")}function h(b){if(null===b)return null;b=m(b);for(var g=H,a;(a=b.replace(g,"$1"))!=b;b=a);return b}function l(b,a){var g=b.clone(),d=a.hasScheme();d?g.setRawScheme(a.getRawScheme()):d=a.hasCredentials();d?g.setRawCredentials(a.getRawCredentials()):d=a.hasDomain();d?g.setRawDomain(a.getRawDomain()):d=a.hasPort();var f=a.getRawPath(),c=h(f);if(d)g.setPort(a.getPort()),
c=c&&c.replace(z,"");else if(d=!!f){if(47!==c.charCodeAt(0))var e=h(g.getRawPath()||"").replace(z,""),k=e.lastIndexOf("/")+1,c=h((k?e.substring(0,k):"")+h(f)).replace(z,"")}else c=c&&c.replace(z,""),c!==f&&g.setRawPath(c);d?g.setRawPath(c):d=a.hasQuery();d?g.setRawQuery(a.getRawQuery()):d=a.hasFragment();d&&g.setRawFragment(a.getRawFragment());return g}function d(b,a,d,f,c,e,k){this.o=b;this.j=a;this.l=d;this.v=f;this.h=c;this.g=e;this.m=k;this.c=null}function k(b){return"string"==typeof b&&0<b.length?
b:null}var K=/(\/|^)(?:[^./][^/]*|\.{2,}(?:[^./][^/]*)|\.{3,}[^/]*)\/\.\.(?:\/|$)/,H=new RegExp(K),z=/^(?:\.\.\/)*(?:\.\.$)?/;d.prototype.toString=function(){var b=[];null!==this.o&&b.push(this.o,":");null!==this.l&&(b.push("//"),null!==this.j&&b.push(this.j,"@"),b.push(this.l),null!==this.v&&b.push(":",this.v.toString()));null!==this.h&&b.push(this.h);null!==this.g&&b.push("?",this.g);null!==this.m&&b.push("#",this.m);return b.join("")};d.prototype.clone=function(){return new d(this.o,this.j,this.l,
this.v,this.h,this.g,this.m)};d.prototype.getScheme=function(){return this.o&&decodeURIComponent(this.o).toLowerCase()};d.prototype.getRawScheme=function(){return this.o};d.prototype.setScheme=function(b){this.o=c(b,q);return this};d.prototype.setRawScheme=function(b){this.o=b?b:null;return this};d.prototype.hasScheme=function(){return null!==this.o};d.prototype.getCredentials=function(){return this.j&&decodeURIComponent(this.j)};d.prototype.getRawCredentials=function(){return this.j};d.prototype.setCredentials=
function(b){this.j=c(b,q);return this};d.prototype.setRawCredentials=function(b){this.j=b?b:null;return this};d.prototype.hasCredentials=function(){return null!==this.j};d.prototype.getDomain=function(){return this.l&&decodeURIComponent(this.l)};d.prototype.getRawDomain=function(){return this.l};d.prototype.setDomain=function(b){return this.setRawDomain(b&&encodeURIComponent(b))};d.prototype.setRawDomain=function(b){this.l=b?b:null;return this.setRawPath(this.h)};d.prototype.hasDomain=function(){return null!==
this.l};d.prototype.getPort=function(){return this.v&&decodeURIComponent(this.v)};d.prototype.setPort=function(b){if(b){b=Number(b);if(b!==(b&65535))throw Error("Bad port number "+b);this.v=""+b}else this.v=null;return this};d.prototype.hasPort=function(){return null!==this.v};d.prototype.getPath=function(){return this.h&&decodeURIComponent(this.h)};d.prototype.getRawPath=function(){return this.h};d.prototype.setPath=function(b){return this.setRawPath(c(b,C))};d.prototype.setRawPath=function(b){b?
(b=String(b),this.h=!this.l||/^\//.test(b)?b:"/"+b):this.h=null;return this};d.prototype.hasPath=function(){return null!==this.h};d.prototype.getQuery=function(){return this.g&&decodeURIComponent(this.g).replace(/\+/g," ")};d.prototype.getRawQuery=function(){return this.g};d.prototype.setQuery=function(b){this.c=null;this.g=f(b);return this};d.prototype.setRawQuery=function(b){this.c=null;this.g=b?b:null;return this};d.prototype.hasQuery=function(){return null!==this.g};d.prototype.setAllParameters=
function(b){if("object"===typeof b&&!(b instanceof Array)&&(b instanceof Object||"[object Array]"!==Object.prototype.toString.call(b))){var a=[],d=-1,g;for(g in b){var f=b[g];"string"===typeof f&&(a[++d]=g,a[++d]=f)}b=a}this.c=null;for(var c=[],e="",k=0;k<b.length;)g=b[k++],f=b[k++],c.push(e,encodeURIComponent(g.toString())),e="&",f&&c.push("=",encodeURIComponent(f.toString()));this.g=c.join("");return this};d.prototype.w=function(){if(!this.c){var b=this.g;if(b){for(var a=b.split(/[&\?]/),b=[],d=
-1,f=0;f<a.length;++f){var c=a[f].match(/^([^=]*)(?:=(.*))?$/);b[++d]=decodeURIComponent(c[1]).replace(/\+/g," ");b[++d]=decodeURIComponent(c[2]||"").replace(/\+/g," ")}this.c=b}else this.c=[]}};d.prototype.setParameterValues=function(b,a){"string"===typeof a&&(a=[a]);this.w();for(var d=0,f=this.c,c=[],g=0;g<f.length;g+=2)b===f[g]?d<a.length&&c.push(b,a[d++]):c.push(f[g],f[g+1]);for(;d<a.length;)c.push(b,a[d++]);this.setAllParameters(c);return this};d.prototype.removeParameter=function(b){return this.setParameterValues(b,
[])};d.prototype.getAllParameters=function(){this.w();return this.c.slice(0,this.c.length)};d.prototype.getParameterValues=function(b){this.w();for(var a=[],d=0;d<this.c.length;d+=2)b===this.c[d]&&a.push(this.c[d+1]);return a};d.prototype.getParameterMap=function(){this.w();for(var b={},a=0;a<this.c.length;a+=2){var d=this.c[a++],f=this.c[a++];d in b?b[d].push(f):b[d]=[f]}return b};d.prototype.getParameterValue=function(b){this.w();for(var a=0;a<this.c.length;a+=2)if(b===this.c[a])return this.c[a+
1];return null};d.prototype.getFragment=function(){return this.m&&decodeURIComponent(this.m)};d.prototype.getRawFragment=function(){return this.m};d.prototype.setFragment=function(b){this.m=b?encodeURIComponent(b):null;return this};d.prototype.setRawFragment=function(b){this.m=b?b:null;return this};d.prototype.hasFragment=function(){return null!==this.m};var w=/^(?:([^:/?#]+):)?(?:\/\/(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,q=/[#\/\?@]/g,C=/[\#\?]/g;d.parse=b;
d.create=a;d.resolve=l;d.collapse_dots=h;d.utils={mimeTypeOf:function(a){var d=b(a);return/\.html$/.test(d.getPath())?"text/html":"application/javascript"},resolve:function(a,d){return a?l(b(a),b(d)).toString():""+d}};return d}(),T={atype:{NONE:0,URI:1,URI_FRAGMENT:11,SCRIPT:2,STYLE:3,HTML:12,ID:4,IDREF:5,IDREFS:6,GLOBAL_NAME:7,LOCAL_NAME:8,CLASSES:9,FRAME_TARGET:10,MEDIA_QUERY:13}};T.atype=T.atype;
T.ATTRIBS={"*::class":9,"*::dir":0,"*::draggable":0,"*::hidden":0,"*::id":4,"*::inert":0,"*::itemprop":0,"*::itemref":6,"*::itemscope":0,"*::lang":0,"*::onblur":2,"*::onchange":2,"*::onclick":2,"*::ondblclick":2,"*::onerror":2,"*::onfocus":2,"*::onkeydown":2,"*::onkeypress":2,"*::onkeyup":2,"*::onload":2,"*::onmousedown":2,"*::onmousemove":2,"*::onmouseout":2,"*::onmouseover":2,"*::onmouseup":2,"*::onreset":2,"*::onscroll":2,"*::onselect":2,"*::onsubmit":2,"*::ontouchcancel":2,"*::ontouchend":2,"*::ontouchenter":2,
"*::ontouchleave":2,"*::ontouchmove":2,"*::ontouchstart":2,"*::onunload":2,"*::spellcheck":0,"*::style":3,"*::tabindex":0,"*::title":0,"*::translate":0,"a::accesskey":0,"a::coords":0,"a::href":1,"a::hreflang":0,"a::name":7,"a::onblur":2,"a::onfocus":2,"a::shape":0,"a::target":10,"a::type":0,"area::accesskey":0,"area::alt":0,"area::coords":0,"area::href":1,"area::nohref":0,"area::onblur":2,"area::onfocus":2,"area::shape":0,"area::target":10,"audio::controls":0,"audio::loop":0,"audio::mediagroup":5,
"audio::muted":0,"audio::preload":0,"audio::src":1,"bdo::dir":0,"blockquote::cite":1,"br::clear":0,"button::accesskey":0,"button::disabled":0,"button::name":8,"button::onblur":2,"button::onfocus":2,"button::type":0,"button::value":0,"canvas::height":0,"canvas::width":0,"caption::align":0,"col::align":0,"col::char":0,"col::charoff":0,"col::span":0,"col::valign":0,"col::width":0,"colgroup::align":0,"colgroup::char":0,"colgroup::charoff":0,"colgroup::span":0,"colgroup::valign":0,"colgroup::width":0,
"command::checked":0,"command::command":5,"command::disabled":0,"command::icon":1,"command::label":0,"command::radiogroup":0,"command::type":0,"data::value":0,"del::cite":1,"del::datetime":0,"details::open":0,"dir::compact":0,"div::align":0,"dl::compact":0,"fieldset::disabled":0,"font::color":0,"font::face":0,"font::size":0,"form::accept":0,"form::action":1,"form::autocomplete":0,"form::enctype":0,"form::method":0,"form::name":7,"form::novalidate":0,"form::onreset":2,"form::onsubmit":2,"form::target":10,
"h1::align":0,"h2::align":0,"h3::align":0,"h4::align":0,"h5::align":0,"h6::align":0,"hr::align":0,"hr::noshade":0,"hr::size":0,"hr::width":0,"iframe::align":0,"iframe::frameborder":0,"iframe::height":0,"iframe::marginheight":0,"iframe::marginwidth":0,"iframe::width":0,"img::align":0,"img::alt":0,"img::border":0,"img::height":0,"img::hspace":0,"img::ismap":0,"img::name":7,"img::src":1,"img::usemap":11,"img::vspace":0,"img::width":0,"input::accept":0,"input::accesskey":0,"input::align":0,"input::alt":0,
"input::autocomplete":0,"input::checked":0,"input::disabled":0,"input::inputmode":0,"input::ismap":0,"input::list":5,"input::max":0,"input::maxlength":0,"input::min":0,"input::multiple":0,"input::name":8,"input::onblur":2,"input::onchange":2,"input::onfocus":2,"input::onselect":2,"input::pattern":0,"input::placeholder":0,"input::readonly":0,"input::required":0,"input::size":0,"input::src":1,"input::step":0,"input::type":0,"input::usemap":11,"input::value":0,"ins::cite":1,"ins::datetime":0,"label::accesskey":0,
"label::for":5,"label::onblur":2,"label::onfocus":2,"legend::accesskey":0,"legend::align":0,"li::type":0,"li::value":0,"map::name":7,"menu::compact":0,"menu::label":0,"menu::type":0,"meter::high":0,"meter::low":0,"meter::max":0,"meter::min":0,"meter::optimum":0,"meter::value":0,"ol::compact":0,"ol::reversed":0,"ol::start":0,"ol::type":0,"optgroup::disabled":0,"optgroup::label":0,"option::disabled":0,"option::label":0,"option::selected":0,"option::value":0,"output::for":6,"output::name":8,"p::align":0,
"pre::width":0,"progress::max":0,"progress::min":0,"progress::value":0,"q::cite":1,"select::autocomplete":0,"select::disabled":0,"select::multiple":0,"select::name":8,"select::onblur":2,"select::onchange":2,"select::onfocus":2,"select::required":0,"select::size":0,"source::type":0,"table::align":0,"table::bgcolor":0,"table::border":0,"table::cellpadding":0,"table::cellspacing":0,"table::frame":0,"table::rules":0,"table::summary":0,"table::width":0,"tbody::align":0,"tbody::char":0,"tbody::charoff":0,
"tbody::valign":0,"td::abbr":0,"td::align":0,"td::axis":0,"td::bgcolor":0,"td::char":0,"td::charoff":0,"td::colspan":0,"td::headers":6,"td::height":0,"td::nowrap":0,"td::rowspan":0,"td::scope":0,"td::valign":0,"td::width":0,"textarea::accesskey":0,"textarea::autocomplete":0,"textarea::cols":0,"textarea::disabled":0,"textarea::inputmode":0,"textarea::name":8,"textarea::onblur":2,"textarea::onchange":2,"textarea::onfocus":2,"textarea::onselect":2,"textarea::placeholder":0,"textarea::readonly":0,"textarea::required":0,
"textarea::rows":0,"textarea::wrap":0,"tfoot::align":0,"tfoot::char":0,"tfoot::charoff":0,"tfoot::valign":0,"th::abbr":0,"th::align":0,"th::axis":0,"th::bgcolor":0,"th::char":0,"th::charoff":0,"th::colspan":0,"th::headers":6,"th::height":0,"th::nowrap":0,"th::rowspan":0,"th::scope":0,"th::valign":0,"th::width":0,"thead::align":0,"thead::char":0,"thead::charoff":0,"thead::valign":0,"tr::align":0,"tr::bgcolor":0,"tr::char":0,"tr::charoff":0,"tr::valign":0,"track::default":0,"track::kind":0,"track::label":0,
"track::srclang":0,"ul::compact":0,"ul::type":0,"video::controls":0,"video::height":0,"video::loop":0,"video::mediagroup":5,"video::muted":0,"video::poster":1,"video::preload":0,"video::src":1,"video::width":0};T.ATTRIBS=T.ATTRIBS;T.eflags={OPTIONAL_ENDTAG:1,EMPTY:2,CDATA:4,RCDATA:8,UNSAFE:16,FOLDABLE:32,SCRIPT:64,STYLE:128,VIRTUALIZED:256};T.eflags=T.eflags;
T.ELEMENTS={a:0,abbr:0,acronym:0,address:0,applet:272,area:2,article:0,aside:0,audio:0,b:0,base:274,basefont:274,bdi:0,bdo:0,big:0,blockquote:0,body:305,br:2,button:0,canvas:0,caption:0,center:0,cite:0,code:0,col:2,colgroup:1,command:2,data:0,datalist:0,dd:1,del:0,details:0,dfn:0,dialog:272,dir:0,div:0,dl:0,dt:1,em:0,fieldset:0,figcaption:0,figure:0,font:0,footer:0,form:0,frame:274,frameset:272,h1:0,h2:0,h3:0,h4:0,h5:0,h6:0,head:305,header:0,hgroup:0,hr:2,html:305,i:0,iframe:4,img:2,input:2,ins:0,
isindex:274,kbd:0,keygen:274,label:0,legend:0,li:1,link:274,map:0,mark:0,menu:0,meta:274,meter:0,nav:0,nobr:0,noembed:276,noframes:276,noscript:276,object:272,ol:0,optgroup:0,option:1,output:0,p:1,param:274,pre:0,progress:0,q:0,s:0,samp:0,script:84,section:0,select:0,small:0,source:2,span:0,strike:0,strong:0,style:148,sub:0,summary:0,sup:0,table:0,tbody:1,td:1,textarea:8,tfoot:1,th:1,thead:1,time:0,title:280,tr:1,track:2,tt:0,u:0,ul:0,"var":0,video:0,wbr:2};T.ELEMENTS=T.ELEMENTS;
T.ELEMENT_DOM_INTERFACES={a:"HTMLAnchorElement",abbr:"HTMLElement",acronym:"HTMLElement",address:"HTMLElement",applet:"HTMLAppletElement",area:"HTMLAreaElement",article:"HTMLElement",aside:"HTMLElement",audio:"HTMLAudioElement",b:"HTMLElement",base:"HTMLBaseElement",basefont:"HTMLBaseFontElement",bdi:"HTMLElement",bdo:"HTMLElement",big:"HTMLElement",blockquote:"HTMLQuoteElement",body:"HTMLBodyElement",br:"HTMLBRElement",button:"HTMLButtonElement",canvas:"HTMLCanvasElement",caption:"HTMLTableCaptionElement",
center:"HTMLElement",cite:"HTMLElement",code:"HTMLElement",col:"HTMLTableColElement",colgroup:"HTMLTableColElement",command:"HTMLCommandElement",data:"HTMLElement",datalist:"HTMLDataListElement",dd:"HTMLElement",del:"HTMLModElement",details:"HTMLDetailsElement",dfn:"HTMLElement",dialog:"HTMLDialogElement",dir:"HTMLDirectoryElement",div:"HTMLDivElement",dl:"HTMLDListElement",dt:"HTMLElement",em:"HTMLElement",fieldset:"HTMLFieldSetElement",figcaption:"HTMLElement",figure:"HTMLElement",font:"HTMLFontElement",
footer:"HTMLElement",form:"HTMLFormElement",frame:"HTMLFrameElement",frameset:"HTMLFrameSetElement",h1:"HTMLHeadingElement",h2:"HTMLHeadingElement",h3:"HTMLHeadingElement",h4:"HTMLHeadingElement",h5:"HTMLHeadingElement",h6:"HTMLHeadingElement",head:"HTMLHeadElement",header:"HTMLElement",hgroup:"HTMLElement",hr:"HTMLHRElement",html:"HTMLHtmlElement",i:"HTMLElement",iframe:"HTMLIFrameElement",img:"HTMLImageElement",input:"HTMLInputElement",ins:"HTMLModElement",isindex:"HTMLUnknownElement",kbd:"HTMLElement",
keygen:"HTMLKeygenElement",label:"HTMLLabelElement",legend:"HTMLLegendElement",li:"HTMLLIElement",link:"HTMLLinkElement",map:"HTMLMapElement",mark:"HTMLElement",menu:"HTMLMenuElement",meta:"HTMLMetaElement",meter:"HTMLMeterElement",nav:"HTMLElement",nobr:"HTMLElement",noembed:"HTMLElement",noframes:"HTMLElement",noscript:"HTMLElement",object:"HTMLObjectElement",ol:"HTMLOListElement",optgroup:"HTMLOptGroupElement",option:"HTMLOptionElement",output:"HTMLOutputElement",p:"HTMLParagraphElement",param:"HTMLParamElement",
pre:"HTMLPreElement",progress:"HTMLProgressElement",q:"HTMLQuoteElement",s:"HTMLElement",samp:"HTMLElement",script:"HTMLScriptElement",section:"HTMLElement",select:"HTMLSelectElement",small:"HTMLElement",source:"HTMLSourceElement",span:"HTMLSpanElement",strike:"HTMLElement",strong:"HTMLElement",style:"HTMLStyleElement",sub:"HTMLElement",summary:"HTMLElement",sup:"HTMLElement",table:"HTMLTableElement",tbody:"HTMLTableSectionElement",td:"HTMLTableDataCellElement",textarea:"HTMLTextAreaElement",tfoot:"HTMLTableSectionElement",
th:"HTMLTableHeaderCellElement",thead:"HTMLTableSectionElement",time:"HTMLTimeElement",title:"HTMLTitleElement",tr:"HTMLTableRowElement",track:"HTMLTrackElement",tt:"HTMLElement",u:"HTMLElement",ul:"HTMLUListElement","var":"HTMLElement",video:"HTMLVideoElement",wbr:"HTMLElement"};T.ELEMENT_DOM_INTERFACES=T.ELEMENT_DOM_INTERFACES;T.ueffects={NOT_LOADED:0,SAME_DOCUMENT:1,NEW_DOCUMENT:2};T.ueffects=T.ueffects;
T.URIEFFECTS={"a::href":2,"area::href":2,"audio::src":1,"blockquote::cite":0,"command::icon":1,"del::cite":0,"form::action":2,"img::src":1,"input::src":1,"ins::cite":0,"q::cite":0,"video::poster":1,"video::src":1};T.URIEFFECTS=T.URIEFFECTS;T.ltypes={UNSANDBOXED:2,SANDBOXED:1,DATA:0};T.ltypes=T.ltypes;
T.LOADERTYPES={"a::href":2,"area::href":2,"audio::src":2,"blockquote::cite":2,"command::icon":1,"del::cite":2,"form::action":2,"img::src":1,"input::src":1,"ins::cite":2,"q::cite":2,"video::poster":1,"video::src":2};T.LOADERTYPES=T.LOADERTYPES;
var za=function(b){function a(b){if(W.hasOwnProperty(b))return W[b];var a=b.match(oa);return a?String.fromCharCode(parseInt(a[1],10)):(a=b.match(pa))?String.fromCharCode(parseInt(a[1],16)):X&&qa.test(b)?(X.innerHTML="&"+b+";",a=X.textContent,W[b]=a):"&"+b+";"}function f(b,d){return a(d)}function c(b){return b.replace(N,"")}function e(b){return b.replace(L,f)}function m(b){return(""+b).replace(r,"&amp;").replace(E,"&lt;").replace(M,"&gt;").replace(O,"&#34;")}function h(b){return b.replace(y,"&amp;$1").replace(E,
"&lt;").replace(M,"&gt;")}function l(b){var a={cdata:b.cdata||b.cdata,comment:b.comment||b.comment,endDoc:b.endDoc||b.endDoc,endTag:b.endTag||b.endTag,pcdata:b.pcdata||b.pcdata,rcdata:b.rcdata||b.rcdata,startDoc:b.startDoc||b.startDoc,startTag:b.startTag||b.startTag};return function(b,u){var d=a,p=K(b);k(d,p,0,{noMoreGT:!1,noMoreEndComments:!1},u)}}function d(b,a,d,f,n){return function(){k(b,a,d,f,n)}}function k(a,p,f,c,n){try{a.startDoc&&0==f&&a.startDoc(n);for(var u,v,g,e=f,k=p.length;e<k;){var ra=
p[e++],h=p[e];switch(ra){case "&":S.test(h)?(a.pcdata&&a.pcdata("&"+h,n,D,d(a,p,e,c,n)),e++):a.pcdata&&a.pcdata("&amp;",n,D,d(a,p,e,c,n));break;case "</":(u=/^([-\w:]+)[^\'\"]*/.exec(h))?u[0].length===h.length&&">"===p[e+1]?(e+=2,g=u[1].toLowerCase(),a.endTag&&a.endTag(g,n,D,d(a,p,e,c,n))):e=H(p,e,a,n,D,c):a.pcdata&&a.pcdata("&lt;/",n,D,d(a,p,e,c,n));break;case "<":if(u=/^([-\w:]+)\s*\/?/.exec(h))if(u[0].length===h.length&&">"===p[e+1]){e+=2;g=u[1].toLowerCase();a.startTag&&a.startTag(g,[],n,D,d(a,
p,e,c,n));var l=b.ELEMENTS[g];l&sa&&(e=w(p,{name:g,next:e,eflags:l},a,n,D,c))}else e=z(p,e,a,n,D,c);else a.pcdata&&a.pcdata("&lt;",n,D,d(a,p,e,c,n));break;case "\x3c!--":if(!c.noMoreEndComments){for(v=e+1;v<k&&(">"!==p[v]||!/--$/.test(p[v-1]));v++);if(v<k){if(a.comment){var r=p.slice(e,v).join("");a.comment(r.substr(0,r.length-2),n,D,d(a,p,v+1,c,n))}e=v+1}else c.noMoreEndComments=!0}c.noMoreEndComments&&a.pcdata&&a.pcdata("&lt;!--",n,D,d(a,p,e,c,n));break;case "<!":if(/^\w/.test(h)){if(!c.noMoreGT){for(v=
e+1;v<k&&">"!==p[v];v++);v<k?e=v+1:c.noMoreGT=!0}c.noMoreGT&&a.pcdata&&a.pcdata("&lt;!",n,D,d(a,p,e,c,n))}else a.pcdata&&a.pcdata("&lt;!",n,D,d(a,p,e,c,n));break;case "<?":if(!c.noMoreGT){for(v=e+1;v<k&&">"!==p[v];v++);v<k?e=v+1:c.noMoreGT=!0}c.noMoreGT&&a.pcdata&&a.pcdata("&lt;?",n,D,d(a,p,e,c,n));break;case ">":a.pcdata&&a.pcdata("&gt;",n,D,d(a,p,e,c,n));break;case "":break;default:a.pcdata&&a.pcdata(ra,n,D,d(a,p,e,c,n))}}a.endDoc&&a.endDoc(n)}catch(ta){if(ta!==D)throw ta;}}function K(b){var a=
/(<\/|<\!--|<[!?]|[&<>])/g;b+="";if(ja)return b.split(a);for(var d=[],c=0,f;null!==(f=a.exec(b));)d.push(b.substring(c,f.index)),d.push(f[0]),c=f.index+f[0].length;d.push(b.substring(c));return d}function H(b,a,c,f,n,e){var p=q(b,a);if(!p)return b.length;c.endTag&&c.endTag(p.name,f,n,d(c,b,a,e,f));return p.next}function z(b,a,c,f,e,g){a=q(b,a);if(!a)return b.length;c.startTag&&c.startTag(a.name,a.attrs,f,e,d(c,b,a.next,g,f));return a.eflags&sa?w(b,a,c,f,e,g):a.next}function w(a,c,f,e,n,g){var p=a.length;
ka.hasOwnProperty(c.name)||(ka[c.name]=new RegExp("^"+c.name+"(?:[\\s\\/]|$)","i"));for(var v=ka[c.name],k=c.next,u=c.next+1;u<p&&("</"!==a[u-1]||!v.test(a[u]));u++);u<p&&--u;var l=a.slice(k,u).join("");if(c.eflags&b.eflags.CDATA)f.cdata&&f.cdata(l,e,n,d(f,a,u,g,e));else if(c.eflags&b.eflags.RCDATA)f.rcdata&&f.rcdata(h(l),e,n,d(f,a,u,g,e));else throw Error("bug");return u}function q(a,c){var d=/^([-\w:]+)/.exec(a[c]),f={};f.name=d[1].toLowerCase();f.eflags=b.ELEMENTS[f.name];var e=a[c].substr(d[0].length);
c+=1;for(var g=a.length;c<g&&">"!==a[c];c++)e+=a[c];if(!(g<=c)){for(var p=[];""!==e;)if(d=I.exec(e))if(d[4]&&!d[5]||d[6]&&!d[7]){for(var k=d[4]||d[6],u=!1,h=[e,a[c++]];c<g;c++){if(u){if(">"===a[c])break}else 0<=a[c].indexOf(k)&&(u=!0);h.push(a[c])}if(g<=c)break;e=h.join("")}else{var l=d[1].toLowerCase(),r=d[2]?C(d[3]):"";p.push(l,r);e=e.substr(d[0].length)}else e=e.replace(/^[\s\S][^a-z\s]*/,"");f.attrs=p;f.next=c+1;return f}}function C(b){var a=b.charCodeAt(0);if(34===a||39===a)b=b.substr(1,b.length-
2);return e(c(b))}function g(a){function c(b,a){f||a.push(b)}var d,f;return l({startDoc:function(){d=[];f=!1},startTag:function(c,e,g){if(!f&&b.ELEMENTS.hasOwnProperty(c)){var n=b.ELEMENTS[c];if(!(n&b.eflags.FOLDABLE)){var k=a(c,e);if(k){if("object"!==typeof k)throw Error("tagPolicy did not return object (old API?)");if("attribs"in k)e=k.attribs;else throw Error("tagPolicy gave no attribs");var p,h;"tagName"in k?(h=k.tagName,p=b.ELEMENTS[h]):(h=c,p=n);if(n&b.eflags.OPTIONAL_ENDTAG){var u=d[d.length-
1];!u||u.orig!==c||u.rep===h&&c===h||g.push("</",u.rep,">")}n&b.eflags.EMPTY||d.push({orig:c,rep:h});g.push("<",h);for(var l=0,r=e.length;l<r;l+=2){var v=e[l],y=e[l+1];null!==y&&void 0!==y&&g.push(" ",v,'="',m(y),'"')}g.push(">");n&b.eflags.EMPTY&&!(p&b.eflags.EMPTY)&&g.push("</",h,">")}else f=!(n&b.eflags.EMPTY)}}},endTag:function(a,c){if(f)f=!1;else if(b.ELEMENTS.hasOwnProperty(a)){var e=b.ELEMENTS[a];if(!(e&(b.eflags.EMPTY|b.eflags.FOLDABLE))){if(e&b.eflags.OPTIONAL_ENDTAG)for(e=d.length;0<=--e;){var g=
d[e].orig;if(g===a)break;if(!(b.ELEMENTS[g]&b.eflags.OPTIONAL_ENDTAG))return}else for(e=d.length;0<=--e&&d[e].orig!==a;);if(!(0>e)){for(var k=d.length;--k>e;){var n=d[k].rep;b.ELEMENTS[n]&b.eflags.OPTIONAL_ENDTAG||c.push("</",n,">")}e<d.length&&(a=d[e].rep);d.length=e;c.push("</",a,">")}}}},pcdata:c,rcdata:c,cdata:c,endDoc:function(b){for(;d.length;d.length--)b.push("</",d[d.length-1].rep,">")}})}function F(b,a,c,d,f){if(!f)return null;try{var e=ya.parse(""+b);if(e&&(!e.hasScheme()||Ga.test(e.getScheme()))){var g=
f(e,a,c,d);return g?g.toString():null}}catch(Ta){}return null}function x(b,a,c,d,f){c||b(a+" removed",{change:"removed",tagName:a});if(d!==f){var e="changed";d&&!f?e="removed":!d&&f&&(e="added");b(a+"."+c+" "+e,{change:e,tagName:a,attribName:c,oldValue:d,newValue:f})}}function R(b,a,c){var d;d=a+"::"+c;if(b.hasOwnProperty(d))return b[d];d="*::"+c;if(b.hasOwnProperty(d))return b[d]}function na(a,c){return R(b.ATTRIBS,a,c)}function ia(a,c){return R(b.LOADERTYPES,a,c)}function U(a,c){return R(b.URIEFFECTS,
a,c)}function V(a,c,d,f,e){for(var g=0;g<c.length;g+=2){var k=c[g],h=c[g+1],l=h,p=null,n;if((n=a+"::"+k,b.ATTRIBS.hasOwnProperty(n))||(n="*::"+k,b.ATTRIBS.hasOwnProperty(n)))p=b.ATTRIBS[n];if(null!==p)switch(p){case b.atype.NONE:break;case b.atype.SCRIPT:h=null;e&&x(e,a,k,l,h);break;case b.atype.STYLE:if("undefined"===typeof Y){h=null;e&&x(e,a,k,l,h);break}var r=[];Y(h,{declaration:function(a,c){var e=a.toLowerCase();Z(e,c,d?function(a){return F(a,b.ueffects.SAME_DOCUMENT,b.ltypes.SANDBOXED,{TYPE:"CSS",
CSS_PROP:e},d)}:null);c.length&&r.push(e+": "+c.join(" "))}});h=0<r.length?r.join(" ; "):null;e&&x(e,a,k,l,h);break;case b.atype.ID:case b.atype.IDREF:case b.atype.IDREFS:case b.atype.GLOBAL_NAME:case b.atype.LOCAL_NAME:case b.atype.CLASSES:h=f?f(h):h;e&&x(e,a,k,l,h);break;case b.atype.URI:h=F(h,U(a,k),ia(a,k),{TYPE:"MARKUP",XML_ATTR:k,XML_TAG:a},d);e&&x(e,a,k,l,h);break;case b.atype.URI_FRAGMENT:h&&"#"===h.charAt(0)?(h=h.substring(1),h=f?f(h):h,null!==h&&void 0!==h&&(h="#"+h)):h=null;e&&x(e,a,k,
l,h);break;default:h=null,e&&x(e,a,k,l,h)}else h=null,e&&x(e,a,k,l,h);c[g+1]=h}return c}function aa(a,c,d){return function(e,f){if(b.ELEMENTS[e]&b.eflags.UNSAFE)d&&x(d,e,void 0,void 0,void 0);else return{attribs:V(e,f,a,c,d)}}}function P(b,a){var c=[];g(a)(b,c);return c.join("")}function Ha(b,a,c,d){a=aa(a,c,d);return P(b,a)}var Y,Z,ua;"undefined"!==typeof window&&(Y=window.parseCssDeclarations,Z=window.sanitizeCssProperty,ua=window.cssSchema);var W={lt:"<",LT:"<",gt:">",GT:">",amp:"&",AMP:"&",quot:'"',
apos:"'",nbsp:"\u00a0"},oa=/^#(\d+)$/,pa=/^#x([0-9A-Fa-f]+)$/,qa=/^[A-Za-z][A-za-z0-9]+$/,X="undefined"!==typeof window&&window.document?window.document.createElement("textarea"):null,N=/\0/g,L=/&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,S=/^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/,r=/&/g,y=/&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,E=/[<]/g,M=/>/g,O=/\"/g,I=/^\s*(\[[-.:\w]+\]|[-.:\w]+)(?:\s*(=)\s*((")[^"]*("|$)|(')[^']*('|$)|(?=[a-z][-\w]*\s*=)|[^"'\s]*))?/i,ja=3==="a,b".split(/(,)/).length,sa=b.eflags.CDATA|
b.eflags.RCDATA,D={},ka={},Ga=/^(?:https?|mailto)$/i,A={};A.escapeAttrib=A.escapeAttrib=m;A.makeHtmlSanitizer=A.makeHtmlSanitizer=g;A.makeSaxParser=A.makeSaxParser=l;A.makeTagPolicy=A.makeTagPolicy=aa;A.normalizeRCData=A.normalizeRCData=h;A.sanitize=A.sanitize=Ha;A.sanitizeAttribs=A.sanitizeAttribs=V;A.sanitizeWithPolicy=A.sanitizeWithPolicy=P;A.unescapeEntities=A.unescapeEntities=e;return A}(T);var Aa={applet:!0,audio:!0,base:!0,embed:!0,form:!0,frame:!0,frameset:!0,iframe:!0,img:!0,link:!0,meta:!0,object:!0,script:!0,style:!0,svg:!0,template:!0,video:!0},Ba={br:!0,col:!0,hr:!0,img:!0,input:!0,source:!0,track:!0,wbr:!0,area:!0,base:!0,command:!0,embed:!0,keygen:!0,link:!0,meta:!0,param:!0},Ca="b br code del em i ins mark q s small strong sub sup time u".split(" "),Da=["fallback","href","on","placeholder","text"],Ea=/^data-/i,Fa=["_top","_blank"],Ia=["javascript:","vbscript:","data:","<script",
"\x3c/script"],Ja={input:{type:/(?:image|file|password|button)/i}},Ka="form formaction formmethod formtarget formnovalidate formenctype".split(" "),La={input:Ka,textarea:Ka,select:Ka};
function Ma(b){function a(b){0==e&&c.push(b)}var f=za.makeTagPolicy(),c=[],e=0,m=za.makeSaxParser({startTag:function(b,c){if(0<e)Ba[b]||e++;else{for(var d=Object.create(null),k=0;k<c.length;k+=2){var h=c[k];h&&"["==h[0]&&"]"==h[h.length-1]&&(d[k]=!0,c[k]=h.slice(1,-1))}if(Aa[b])e++;else if(!da(b,"amp-")){var l=c.slice(0),m=f(b,c);if(m)for(c=m.attribs,k=0;k<c.length;k+=2){var w=c[k];Da.includes(w)?c[k+1]=l[k+1]:0==w.search(Ea)&&(c[k+1]=l[k+1])}else e++;if("a"==b){for(var k=-1,q=!1,C=0;C<l.length;C+=
2)"target"==l[C]?k=C+1:"href"==l[C]&&(q=null!=c[C+1]);var g=-1!=k?l[k]:null;null!=g?(g=g.toLowerCase(),-1!=Fa.indexOf(g)?c[k]=g:c[k]="_top"):q&&(c.push("target"),c.push("_top"))}}if(0<e)Ba[b]&&e--;else{a("<");a(b);for(k=0;k<c.length;k+=2){var F=c[k],x=c[k+1];Na(b,F,x)&&(a(" "),d[k]?a("["+F+"]"):a(F),a('="'),x&&a(za.escapeAttrib(Oa(b,F,x))),a('"'))}a(">")}}},endTag:function(b){0<e?e--:(a("</"),a(b),a(">"))},pcdata:a,rcdata:a,cdata:a});m(b);return c.join("")}
function Na(b,a,f){if(da(a,"on")&&"on"!=a||"style"==a||"class"==a&&f&&/(^|\W)i-amphtml-/i.test(f))return!1;if(f)for(var c=f.toLowerCase().replace(/[\s,\u0000]+/g,""),e=0;e<Ia.length;e++)if(-1!=c.indexOf(Ia[e]))return!1;var m=La[b];if(m&&-1!=m.indexOf(a))return!1;var h=Ja[b];if(h){var l=h[a];if(l&&-1!=f.search(l))return!1}return!0}function Oa(b,a,f){return"src"==a||"href"==a||"srcset"==a?Pa(b,a,f):f}
function Pa(b,a,f){var c=self.location;var e=J(f).search,m=Object.create(null);if(e){if(0==e.indexOf("?")||0==e.indexOf("#"))e=e.substr(1);for(var e=e.split("&"),h=0;h<e.length;h++){var l=e[h],d=l.indexOf("="),k;-1!=d?(k=decodeURIComponent(l.substring(0,d)).trim(),l=decodeURIComponent(l.substring(d+1)).trim()):(k=decodeURIComponent(l).trim(),l="");k&&(m[k]=l)}}t().assert(!("__amp_source_origin"in m),"Source origin is not allowed in %s",f);var K=la(c);m=c;"string"==typeof m&&(m=J(m));la(m)?(e=m.pathname.split("/"),
h=e[1],t().assert("c"==h||"v"==h,"Unknown path prefix in url %s",m.href),h=e[2],k="s"==h?"https://"+decodeURIComponent(e[3]):"http://"+decodeURIComponent(h),t().assert(0<k.indexOf("."),"Expected a . in origin %s",k),e.splice(1,"s"==h?3:2),e=k+e.join("/"),h=(h=m.search)&&"?"!=h?(h=h.replace(ha,"").replace(/^[?&]/,""))?"?"+h:"":"",m=e+h+(m.hash||"")):m=m.href;m=J(m);if("href"==a&&!da(f,"#"))return ma(f,m);if("src"==a)return"amp-img"==b?Qa(f,m,K):ma(f,m);if("srcset"==a){var H;try{var z=f.match(/\s*(?:[\S]*)(?:\s+(?:-?(?:\d+(?:\.(?:\d+)?)?|\.\d+)[a-zA-Z]))?(?:\s*,)?/g);
t().assert(0<z.length,"srcset has to have at least one source: %s",void 0);b=[];for(a=0;a<z.length;a++){var w=z[a].trim();","==w.substr(-1)&&(w=w.substr(0,w.length-1).trim());var q=w.split(/\s+/,2);if(0!=q.length&&(1!=q.length||q[0])&&(2!=q.length||q[0]||q[1])){var C=q[0];if(1==q.length||2==q.length&&!q[1])b.push({url:C,width:void 0,dpr:1});else{var g=q[1].toLowerCase(),F=g.substring(g.length-1);"w"==F?b.push({url:C,width:parseFloat(g),dpr:void 0}):"x"==F&&b.push({url:C,width:void 0,dpr:parseFloat(g)})}}}H=
new Q(b)}catch(x){return t().error("sanitizer","Failed to parse srcset: ",x),f}f=H.getSources();for(z=0;z<f.length;z++)f[z].url=Qa(f[z].url,m,K);return H.stringify()}return f}function Qa(b,a,f){b=J(ma(b,a));return"data:"==b.protocol||la(b)||!f?b.href:ea+"/i/"+("https:"==b.protocol?"s/":"")+encodeURIComponent(b.host)+b.pathname+(b.search||"")+(b.hash||"")};var Ra={};
(function defineMustache(a,f){f(Ra)})(this,function mustacheFactory(a){function f(a){return"function"===typeof a}function c(a){return g(a)?"array":typeof a}function e(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function m(a,c){return null!=a&&"object"===typeof a&&Object.prototype.hasOwnProperty.call(a,c)}function h(a,c){return F.call(a,c)}function l(a){return!h(x,a)}function d(a){return String(a).replace(/[&<>"'`=\/]/g,function Z(a){return R[a]})}function k(c,d){function f(){if(w&&!x)for(;q.length;)delete m[q.pop()];
else q=[];x=w=!1}function k(a){"string"===typeof a&&(a=a.split(ia,2));if(!g(a)||2!==a.length)throw Error("Invalid tags: "+a);N=new RegExp(e(a[0])+"\\s*");L=new RegExp("\\s*"+e(a[1]));S=new RegExp("\\s*"+e("}"+a[1]))}if(!c)return[];var h=[],m=[],q=[],w=!1,x=!1,N,L,S;k(d||a.tags);for(var r=new z(c),y,E,M,O,I;!r.eos();){c=r.pos;if(E=r.scanUntil(N)){y=0;for(var ja=E.length;y<ja;++y)M=E.charAt(y),l(M)?q.push(m.length):x=!0,m.push(["text",M,c,c+1]),c+=1,"\n"===M&&f()}if(!r.scan(N))break;w=!0;y=r.scan(aa)||
"name";r.scan(na);"="===y?(E=r.scanUntil(U),r.scan(U),r.scanUntil(L)):"{"===y?(E=r.scanUntil(S),r.scan(V),r.scanUntil(L),y="&"):E=r.scanUntil(L);if(!r.scan(L))throw Error("Unclosed tag at "+r.pos);O=[y,E,c,r.pos];m.push(O);if("#"===y||"^"===y)h.push(O);else if("/"===y){I=h.pop();if(!I)throw Error('Unopened section "'+E+'" at '+c);if(I[1]!==E)throw Error('Unclosed section "'+I[1]+'" at '+c);}else if("name"===y||"{"===y||"&"===y)x=!0}if(I=h.pop())throw Error('Unclosed section "'+I[1]+'" at '+r.pos);
return H(K(m))}function K(a){for(var c=[],d,e,f=0,g=a.length;f<g;++f)if(d=a[f])"text"===d[0]&&e&&"text"===e[0]?(e[1]+=d[1],e[3]=d[3]):(c.push(d),e=d);return c}function H(a){for(var c=[],d=c,e=[],f,g,h=0,k=a.length;h<k;++h)switch(f=a[h],f[0]){case "#":case "^":d.push(f);e.push(f);d=f[4]=[];break;case "/":g=e.pop();g[5]=f[2];d=0<e.length?e[e.length-1][4]:c;break;default:d.push(f)}return c}function z(a){this.tail=this.string=a;this.pos=0}function w(a,c){this.view=a;this.cache={".":this.view};this.parent=
c}function q(){this.cache={}}var C=Object.prototype.toString,g=Array.isArray||function Y(a){return"[object Array]"===C.call(a)},F=RegExp.prototype.test,x=/\S/,R={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},na=/\s*/,ia=/\s+/,U=/\s*=/,V=/\s*\}/,aa=/#|\^|\/|>|\{|&|=|!/;z.prototype.eos=function Z(){return""===this.tail};z.prototype.scan=function ua(a){var c=this.tail.match(a);if(!c||0!==c.index)return"";a=c[0];this.tail=this.tail.substring(a.length);
this.pos+=a.length;return a};z.prototype.scanUntil=function W(a){a=this.tail.search(a);var c;switch(a){case -1:c=this.tail;this.tail="";break;case 0:c="";break;default:c=this.tail.substring(0,a),this.tail=this.tail.substring(a)}this.pos+=c.length;return c};w.prototype.push=function oa(a){return new w(a,this)};w.prototype.lookup=function pa(a){var c=this.cache,d;if(c.hasOwnProperty(a))d=c[a];else{for(var e=this,g,h,k=!1;e;){if(0<a.indexOf("."))for(d=e.view,g=a.split("."),h=0;null!=d&&h<g.length;){if(!m(d,
g[h])){d=null;break}h===g.length-1&&(k=!0);d=d[g[h++]]}else m(e.view,a)?(d=e.view[a],k=!0):d=null;if(k)break;e=e.parent}c[a]=d}f(d)&&(d=d.call(this.view));return d};q.prototype.clearCache=function qa(){this.cache={}};q.prototype.parse=function(a,c){var d=this.cache,e=d[a];null==e&&(e=d[a]=k(a,c));return e};q.prototype.render=function X(a,c,d){var e=this.parse(a);c=c instanceof w?c:new w(c);return this.renderTokens(e,c,d,a)};q.prototype.renderTokens=function N(a,c,d,e){for(var f="",g,h,k,l=0,m=a.length;l<
m;++l)k=void 0,g=a[l],h=g[0],"#"===h?k=this.renderSection(g,c,d,e):"^"===h?k=this.renderInverted(g,c,d,e):">"===h?k=this.renderPartial(g,c,d,e):"&"===h?k=this.unescapedValue(g,c):"name"===h?k=this.escapedValue(g,c):"text"===h&&(k=this.rawValue(g)),void 0!==k&&(f+=k);return f};q.prototype.renderSection=function L(a,c,d,e){function h(a){return k.render(a,c,d)}var k=this,l="",m=c.lookup(a[1]);if(m){if(g(m))for(var q=0,r=m.length;q<r;++q)l+=this.renderTokens(a[4],c.push(m[q]),d,e);else if("object"===
typeof m||"string"===typeof m||"number"===typeof m)l+=this.renderTokens(a[4],c.push(m),d,e);else if(f(m)){if("string"!==typeof e)throw Error("Cannot use higher-order sections without the original template");m=m.call(c.view,e.slice(a[3],a[5]),h);null!=m&&(l+=m)}else l+=this.renderTokens(a[4],c,d,e);return l}};q.prototype.renderInverted=function S(a,c,d,e){var f=c.lookup(a[1]);if(!f||g(f)&&0===f.length)return this.renderTokens(a[4],c,d,e)};q.prototype.renderPartial=function r(a,c,d){if(d&&(a=f(d)?d(a[1]):
d[a[1]],null!=a))return this.renderTokens(this.parse(a),c,d,a)};q.prototype.unescapedValue=function y(c,d){c=d.lookup(c[1]);if(null!=c)return a.sanitizeUnescaped?a.sanitizeUnescaped(c):c};q.prototype.escapedValue=function E(c,d){c=d.lookup(c[1]);if(null!=c)return a.escape(c)};q.prototype.rawValue=function M(a){return a[1]};a.name="mustache.js";a.version="2.2.0";a.tags=["{{","}}"];var P=new q;a.clearCache=function(){return P.clearCache()};a.parse=function(a,c){return P.parse(a,c)};a.render=function(a,
d,e){if("string"!==typeof a)throw new TypeError('Invalid template! Template should be a "string" but "'+c(a)+'" was given as the first argument for mustache#render(template, view, partials)');return P.render(a,d,e)};a.to_html=function O(c,d,e,g){var h=a.render(c,d,e);if(f(g))g(h);else return h};a.escape=d;a.sanitizeUnescaped=null;a.setUnescapedSanitizier=function I(c){a.sanitizeUnescaped=c};a.Scanner=z;a.Context=w;a.Writer=q});Ra.setUnescapedSanitizier(function(b){return za.sanitizeWithPolicy(b,function(a){return-1==Ca.indexOf(a)?null:{tagName:a,attribs:[]}})});function Sa(b){AMP.BaseTemplate.apply(this,arguments)}ba(Sa,AMP.BaseTemplate);Sa.prototype.compileCallback=function(){this.A=this.element.innerHTML;Ra.parse(this.A)};Sa.prototype.render=function(b){b=Ra.render(this.A,b);var a=Ma(b);b=this.win.document.createElement("div");b.innerHTML=a;return this.unwrap(b)};AMP.registerTemplate("amp-mustache",Sa);
})});
//# sourceMappingURL=amp-mustache-0.1.js.map
