var __wpo = {"assets":{"main":["./","./src/main.js","./src/main.css","./main.css","./widgets/styles/app.m.css","./widgets/styles/article.m.css","./widgets/styles/comment.m.css","./widgets/styles/content.m.css","./widgets/styles/menu.m.css","./widgets/styles/menuItem.m.css","./widgets/styles/comments.m.css","./widgets/styles/loading.m.css","./img/logo.svg","./img/hn.ico"],"additional":[],"optional":["./img/hn.png"]},"externals":[],"hashesMap":{"f50393cc1473bf1ec2f344a8e01ab7e69b32581a":"./src/main.js","a4dc6522858a3e7894bc2412071ef29e8529241c":"./src/main.css","4ba55ff27d0614d804f5e0c827ec3bf05392cb52":"./","6e47b0afca54a252b22edf5fbe809cd8d8749c2d":"./main.css","d130fd5b29db21e869b740597953017121ce7edb":"./widgets/styles/app.m.css","32be4f05cd2b88eee4f002ee7df0818c46b67d09":"./widgets/styles/article.m.css","2d301810a492f10a8f236eae12162ad478f54705":"./img/hn.png","cf32364497ecd6d6b9511a5282dc3a33fe205648":"./widgets/styles/comment.m.css","d4e2d1f1db2070d1fc11ea4fe8c352f2c49d55a6":"./img/hn.ico","29a2a9dfbd04d9b28b7fa2c3dbd595e732951ecb":"./img/logo.svg","2f20994d3db5fdc567a4eec4eab889ec9bb11772":"./widgets/styles/content.m.css","692da9820c73ad07fbcf207db39ab1f6156c29e2":"./widgets/styles/menu.m.css","383ea749e68b83474c09b76a512588142862040f":"./widgets/styles/menuItem.m.css","2f516f76d369752047476bd5b3b467a9605aba0d":"./widgets/styles/comments.m.css","f1ee90c752d45fc87e9dc057475aa63a33e13b04":"./widgets/styles/loading.m.css"},"strategy":"changed","responseStrategy":"cache-first","version":"11/21/2017, 6:06:13 PM","name":"webpack-offline","pluginVersion":"4.8.4","relativePaths":true};

/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function r(e,t){t=t||{},(t.debug||v.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||v.cache.name,caches.open(t)}function c(e,t){t=t||{};var n=t.successResponses||v.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||v.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&i(e,n,r)})}),r.clone()})}function i(e,t,n){var r=a.bind(null,e,t,n);d=d?d.then(r):r()}function a(e,t,n){var o=e.url,c=n.maxAgeSeconds,i=n.maxEntries,a=n.name,s=Date.now();return r("Updating LRU order for "+o+". Max entries is "+i+", max age is "+c),m.getDb(a).then(function(e){return m.setTimestampForUrl(e,o,s)}).then(function(e){return m.expireEntries(e,i,c,s)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function s(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||l(e),v.preCacheItems=v.preCacheItems.concat(e)}function l(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function p(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){if(new Date(r).getTime()+1e3*t<n)return!1}}return!0}var d,v=n(1),m=n(9);e.exports={debug:r,fetchAndCache:c,openCache:o,renameCache:s,cache:u,uncache:f,precache:h,validatePrecacheInput:l,isResponseFresh:p}},function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,e.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=n(7),c=n(0),i=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},a=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){a.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),a.prototype.add=function(e,t,n,i){i=i||{};var a;t instanceof RegExp?a=RegExp:(a=i.origin||self.location.origin,a=a instanceof RegExp?a.source:r(a)),e=e.toLowerCase();var s=new o(e,t,n,i);this.routes.has(a)||this.routes.set(a,new Map);var u=this.routes.get(a);u.has(e)||u.set(e,new Map);var f=u.get(e),h=s.regexp||s.fullUrlRegExp;f.has(h.source)&&c.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,s)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,i(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],c=o&&o.get(e.toLowerCase());if(c){var a=i(c,n);if(a.length>0)return a[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},e.exports=new a},function(e,t,n){"use strict";function r(e,t,n){return n=n||{},c.debug("Strategy: cache only ["+e.url+"]",n),c.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=n(1),c=n(0);e.exports=r},function(e,t,n){"use strict";function r(e,t){return caches.match(e,{cacheName:t}).then(function(n){return i()?n:a(n).then(function(n){return caches.open(t).then(function(t){return t.put(e,n)}).then(function(){return n})})}).catch(function(){})}function o(e,t){return e+(-1!==e.indexOf("?")?"&":"?")+"__uncache="+encodeURIComponent(t)}function c(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}function i(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function a(e){return i(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status})})}function s(e){return Object.keys(e).reduce(function(t,n){return t[n]=e[n],t},{})}function u(e,t){console.groupCollapsed("[SW]:",e),t.forEach(function(e){console.log("Asset:",e)}),console.groupEnd()}if(function(){var e=ExtendableEvent.prototype.waitUntil,t=FetchEvent.prototype.respondWith,n=new WeakMap;ExtendableEvent.prototype.waitUntil=function(t){var r=this,o=n.get(r);return o?void o.push(Promise.resolve(t)):(o=[Promise.resolve(t)],n.set(r,o),e.call(r,Promise.resolve().then(function e(){var t=o.length;return Promise.all(o.map(function(e){return e.catch(function(){})})).then(function(){return o.length!=t?e():(n.delete(r),Promise.all(o))})})))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),t.call(this,e)}}(),void 0===f)var f=!1;!function(e,t){function n(){if(!S.additional.length)return Promise.resolve();f&&console.log("[SW]:","Caching additional");var e=void 0;return e="changed"===k?h("additional"):i("additional"),e.catch(function(e){console.error("[SW]:","Cache section `additional` failed to load")})}function i(t){var n=S[t];return caches.open(q).then(function(t){return w(t,n,{bust:e.version,request:e.prefetchRequest})}).then(function(){u("Cached assets: "+t,n)}).catch(function(e){throw console.error(e),e})}function h(t){return p().then(function(n){if(!n)return i(t);var r=n[0],o=n[1],c=n[2],a=c.hashmap,s=c.version;if(!c.hashmap||s===e.version)return i(t);var f=Object.keys(a).map(function(e){return a[e]}),h=o.map(function(e){var t=new URL(e.url);return t.search="",t.hash="",t.toString()}),l=S[t],p=[],d=l.filter(function(e){return-1===h.indexOf(e)||-1===f.indexOf(e)});Object.keys(P).forEach(function(e){var t=P[e];if(-1!==l.indexOf(t)&&-1===d.indexOf(t)&&-1===p.indexOf(t)){var n=a[e];n&&-1!==h.indexOf(n)?p.push([n,t]):d.push(t)}}),u("Changed assets: "+t,d),u("Moved assets: "+t,p);var v=Promise.all(p.map(function(e){return r.match(e[0]).then(function(t){return[e[1],t]})}));return caches.open(q).then(function(t){var n=v.then(function(e){return Promise.all(e.map(function(e){return t.put(e[0],e[1])}))});return Promise.all([n,w(t,d,{bust:e.version,request:e.prefetchRequest})])})})}function l(){return caches.keys().then(function(e){var t=e.map(function(e){if(0===e.indexOf(U)&&0!==e.indexOf(q))return console.log("[SW]:","Delete cache:",e),caches.delete(e)});return Promise.all(t)})}function p(){return caches.keys().then(function(e){for(var t=e.length,n=void 0;t--&&(n=e[t],0!==n.indexOf(U)););if(n){var r=void 0;return caches.open(n).then(function(e){return r=e,e.match(new URL($,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}})}function d(){return caches.open(q).then(function(t){var n=new Response(JSON.stringify({version:e.version,hashmap:P}));return t.put(new URL($,location).toString(),n)})}function v(e,t,n){return r(n,q).then(function(r){return r?(f&&console.log("[SW]:","URL ["+n+"]("+t+") from cache"),r):fetch(e.request).then(function(r){return r.ok?(f&&console.log("[SW]:","URL ["+t+"] from network"),n===t&&function(){var n=r.clone(),o=caches.open(q).then(function(e){return e.put(t,n)}).then(function(){console.log("[SW]:","Cache asset: "+t)});e.waitUntil(o)}(),r):(f&&console.log("[SW]:","URL ["+t+"] wrong response: ["+r.status+"] "+r.type),r)})})}function m(e,t,n){return fetch(e.request).then(function(e){if(e.ok)return f&&console.log("[SW]:","URL ["+t+"] from network"),e;throw new Error("Response is not ok")}).catch(function(){return f&&console.log("[SW]:","URL ["+t+"] from cache if possible"),r(n,q)})}function g(e){return e.catch(function(){}).then(function(e){var t=e&&e.ok,n=e&&"opaqueredirect"===e.type;return t||n&&!A?e:(f&&console.log("[SW]:","Loading navigation fallback ["+F+"] from cache"),r(F,q))})}function w(e,t,n){var r=!1!==n.allowLoaders,c=n&&n.bust,i=n.request||{credentials:"omit",mode:"cors"};return Promise.all(t.map(function(e){return c&&(e=o(e,c)),fetch(e,i).then(a)})).then(function(o){if(o.some(function(e){return!e.ok}))return Promise.reject(new Error("Wrong response status"));var c=[],i=o.map(function(n,o){return r&&c.push(x(t[o],n)),e.put(t[o],n)});return c.length?function(){var r=s(n);r.allowLoaders=!1;var o=i;i=Promise.all(c).then(function(n){var c=[].concat.apply([],n);return t.length&&(o=o.concat(w(e,c,r))),Promise.all(o)})}():i=Promise.all(i),i})}function x(e,t){var n=Object.keys(O).map(function(n){if(-1!==O[n].indexOf(e)&&b[n])return b[n](t.clone())}).filter(function(e){return!!e});return Promise.all(n).then(function(e){return[].concat.apply([],e)})}function y(e){var t=e.url,n=new URL(t),r=void 0;r="navigate"===e.mode?"navigate":n.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<R.length;o++){var c=R[o];if(c&&(!c.requestTypes||-1!==c.requestTypes.indexOf(r))){var i=void 0;if((i="function"==typeof c.match?c.match(n,e):t.replace(c.match,c.to))&&i!==t)return i}}}var b=t.loaders,R=t.cacheMaps,k=e.strategy,E=e.responseStrategy,S=e.assets,O=e.loaders||{},P=e.hashesMap,L=e.externals,U=e.name,C=e.version,q=U+":"+C,$="__offline_webpack__data";!function(){Object.keys(S).forEach(function(e){S[e]=S[e].map(function(e){var t=new URL(e,location);return t.hash="",-1===L.indexOf(e)&&(t.search=""),t.toString()})}),Object.keys(O).forEach(function(e){O[e]=O[e].map(function(e){var t=new URL(e,location);return t.hash="",-1===L.indexOf(e)&&(t.search=""),t.toString()})}),P=Object.keys(P).reduce(function(e,t){var n=new URL(P[t],location);return n.search="",n.hash="",e[t]=n.toString(),e},{}),L=L.map(function(e){var t=new URL(e,location);return t.hash="",t.toString()})}();var W=[].concat(S.main,S.additional,S.optional),F=e.navigateFallbackURL,A=e.navigateFallbackForRedirects;self.addEventListener("install",function(e){console.log("[SW]:","Install event");var t=void 0;t="changed"===k?h("main"):i("main"),e.waitUntil(t)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var t=n();t=t.then(d),t=t.then(l),t=t.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),e.waitUntil(t)}),self.addEventListener("fetch",function(e){var t=new URL(e.request.url);t.hash="";var n=t.toString();-1===L.indexOf(n)&&(t.search="",n=t.toString());var r="GET"===e.request.method,o=-1!==W.indexOf(n),i=n;if(!o){var a=y(e.request);a&&(i=a,o=!0)}if(!o&&r&&F&&c(e.request))return void e.respondWith(g(fetch(e.request)));if(!o||!r)return void(t.origin!==location.origin&&-1!==navigator.userAgent.indexOf("Firefox/44.")&&e.respondWith(fetch(e.request)));var s=void 0;s="network-first"===E?m(e,n,i):v(e,n,i),F&&c(e.request)&&(s=g(s)),e.respondWith(s)}),self.addEventListener("message",function(e){var t=e.data;if(t)switch(t.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}(__wpo,{loaders:{},cacheMaps:[]}),e.exports=n(5)},function(e,t,n){var r=n(6),o=[{method:"get",path:"/*",origin:"https://api.hackerwebapp.com",strategy:"cacheFirst"}]||[],c={cacheFirst:r.cacheFirst,networkFirst:r.networkFirst,fastest:r.fastest,cacheOnly:r.cacheOnly,networkOnly:r.networkOnly};o.forEach(function(e){var t=e.method,n=e.path,o=e.strategy,i=e.origin,a={};i&&(a.origin=i),r.router[t](n,c[o],a)})},function(e,t,n){"use strict";var r=n(1),o=n(2),c=n(0),i=n(10),a=n(15);c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",a.installListener),self.addEventListener("activate",a.activateListener),self.addEventListener("fetch",a.fetchListener),e.exports={networkOnly:i.networkOnly,networkFirst:i.networkFirst,cacheOnly:i.cacheOnly,cacheFirst:i.cacheFirst,fastest:i.fastest,router:o,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,c=n(8),i=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n};i.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},e.exports=i},function(e,t){function n(e,t,o){o=o||{},t=t||[];var c,i=o.strict,a=!1!==o.end,s=o.sensitive?"":"i",u=0,f=t.length,h=0,l=0;if(e instanceof RegExp){for(;c=r.exec(e.source);)t.push({name:l++,optional:!1,offset:c.index});return e}if(Array.isArray(e))return e=e.map(function(e){return n(e,t,o).source}),new RegExp("(?:"+e.join("|")+")",s);for(e=("^"+e+(i?"":"/"===e[e.length-1]?"?":"/?")).replace(/\/\(/g,"/(?:").replace(/([\/\.])/g,"\\$1").replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g,function(e,n,r,o,c,i,a,s){n=n||"",r=r||"",c=c||"([^\\/"+r+"]+?)",a=a||"",t.push({name:o,optional:!!a,offset:s+u});var f=(a?"":n)+"(?:"+r+(a?n:"")+c+(i?"((?:[\\/"+r+"].+?)?)":"")+")"+a;return u+=f.length-e.length,f}).replace(/\*/g,function(e,n){for(var r=t.length;r-- >f&&t[r].offset>n;)t[r].offset+=3;return"(.*)"});c=r.exec(e);){for(var p=0,d=c.index;"\\"===e.charAt(--d);)p++;p%2!=1&&((f+h===t.length||t[f+h].offset>c.index)&&t.splice(f+h,0,{name:l++,optional:!1,offset:c.index}),h++)}return e+=a?"$":"/"===e[e.length-1]?"":"(?=\\/|$)",new RegExp(e,s)}e.exports=n;var r=/\((?!\?)/g},function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){r.result.createObjectStore(h,{keyPath:l}).createIndex(p,p,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function c(e,t,n){return new Promise(function(r,o){var c=e.transaction(h,"readwrite");c.objectStore(h).put({url:t,timestamp:n}),c.oncomplete=function(){r(e)},c.onabort=function(){o(c.error)}})}function i(e,t,n){return t?new Promise(function(r,o){var c=1e3*t,i=[],a=e.transaction(h,"readwrite"),s=a.objectStore(h);s.index(p).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-c>t.value[p]){var r=t.value[l];i.push(r),s.delete(r),t.continue()}},a.oncomplete=function(){r(i)},a.onabort=o}):Promise.resolve([])}function a(e,t){return t?new Promise(function(n,r){var o=[],c=e.transaction(h,"readwrite"),i=c.objectStore(h),a=i.index(p),s=a.count();a.count().onsuccess=function(){var e=s.result;e>t&&(a.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var c=r.value[l];o.push(c),i.delete(c),e-o.length>t&&r.continue()}})},c.oncomplete=function(){n(o)},c.onabort=r}):Promise.resolve([])}function s(e,t,n,r){return i(e,n,r).then(function(n){return a(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",l="url",p="timestamp",d={};e.exports={getDb:o,setTimestampForUrl:c,expireEntries:s}},function(e,t,n){e.exports={networkOnly:n(11),networkFirst:n(12),cacheOnly:n(3),cacheFirst:n(13),fastest:n(14)}},function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=n(0);e.exports=r},function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,i=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return c.debug("Strategy: network first ["+e.url+"]",n),c.openCache(n).then(function(t){var a,s,u=[];if(i){var f=new Promise(function(r){a=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,i=Date.now(),a=t.maxAgeSeconds;c.isResponseFresh(e,a,i)&&r(e)})},1e3*i)});u.push(f)}var h=c.fetchAndCache(e,n).then(function(e){if(a&&clearTimeout(a),r.test(e.status))return e;throw c.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return c.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return u.push(h),Promise.race(u)})}var o=n(1),c=n(0);e.exports=r},function(e,t,n){"use strict";function r(e,t,n){return n=n||{},c.debug("Strategy: cache first ["+e.url+"]",n),c.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,i=Date.now();return c.isResponseFresh(t,r.maxAgeSeconds,i)?t:c.fetchAndCache(e,n)})})}var o=n(1),c=n(0);e.exports=r},function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,i){var a=!1,s=[],u=function(e){s.push(e.toString()),a?i(new Error('Both cache and network failed: "'+s.join('", "')+'"')):a=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),c(e,t,n).then(f,u)})}var o=n(0),c=n(3);e.exports=r},function(e,t,n){"use strict";function r(e){var t=s.match(e.request);t?e.respondWith(t(e.request)):s.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(s.default(e.request))}function o(e){a.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,u.cache.name))}function c(e){return e.reduce(function(e,t){return e.concat(t)},[])}function i(e){var t=u.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(c).then(a.validatePrecacheInput).then(function(t){return a.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}n(16);var a=n(0),s=n(2),u=n(1);e.exports={fetchListener:r,activateListener:o,installListener:i}},function(e,t){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()}]);