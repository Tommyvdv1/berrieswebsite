"use strict";var precacheConfig=[["/berrieswebsite/index.html","c366c501463f5d0b825539afe2d86f56"],["/berrieswebsite/static/css/main.c3a5f12d.css","48e3ef649c174275da7a7b421e011a10"],["/berrieswebsite/static/js/0.9bbf6870.chunk.js","c120a06b5015fe5888ba3bfb20c45db1"],["/berrieswebsite/static/js/1.3fd53cf2.chunk.js","4b67a17ec33ed7418f500695d44d9295"],["/berrieswebsite/static/js/2.31bcb756.chunk.js","5d94eab72d7b5715e4c9dfe26b1f7503"],["/berrieswebsite/static/js/3.79312e06.chunk.js","b53407afecd02dc59d4e9c883dc6c465"],["/berrieswebsite/static/js/4.d1c524a9.chunk.js","408f399fb407f2a06ef30ec639ff4f62"],["/berrieswebsite/static/js/main.7524ff1c.js","ba876c6c503604dbba5edf0e5aa61b73"],["/berrieswebsite/static/media/ApotheekACmedium.89470423.png","89470423083e63d1d35e8f40b334dd97"],["/berrieswebsite/static/media/Apotheekvanwacht.7ab45d6b.webp","7ab45d6be0417c988e2da14d49bacb54"],["/berrieswebsite/static/media/LouisWidmerwebsite.616f03bd.webp","616f03bd2ce69a20c9f4d6811dcdca10"],["/berrieswebsite/static/media/Men.5fb5c333.webp","5fb5c333c138bd931fdd5624ee2804bc"],["/berrieswebsite/static/media/Sanas.6f5b81ae.webp","6f5b81aed88e40b3b59a292b421d79ea"],["/berrieswebsite/static/media/antirefluxbedje.9049879d.webp","9049879d6d060f4610ff8fd55604e37a"],["/berrieswebsite/static/media/apocrapslogo.b7fe414a.webp","b7fe414aecfeed823d06ef81ecdebb93"],["/berrieswebsite/static/media/griepcampagne.ceaf9d25.webp","ceaf9d2513c8bb5d7f54741c0d2f8694"],["/berrieswebsite/static/media/hoofdingwebsite.37f1105f.png","37f1105f6f66aa719ad2f813fc1712a6"],["/berrieswebsite/static/media/huisbereidingen.5e1369ad.webp","5e1369ad7462713d696afbd0e353a782"],["/berrieswebsite/static/media/medicatieschema.9b722669.webp","9b722669449545d43119d3540deba42c"],["/berrieswebsite/static/media/thuisgezondheidszorg.e530da61.webp","e530da61047069233032403e94a1fbc7"],["/berrieswebsite/static/media/transShowroom.a82edea7.webp","a82edea7704d2ca4cecdd09b6a067bbd"],["/berrieswebsite/static/media/zon.f86f49c8.webp","f86f49c85967b875226a7a802d426fcb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var s=new URL(e);return r&&s.pathname.match(r)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),s=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var s="/berrieswebsite/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});