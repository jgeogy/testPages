const cacheName = "zestful-Color Paths-0.5";
const contentToCache = [
    "Build/ea153e321edf23b9a40b38d65ce41d01.loader.js",
    "Build/173ca2f7605f2222ca5f80312b3e787e.framework.js",
    "Build/8c33da6a6586ab7ae052dcc0cfc65158.data",
    "Build/87860e04775a65e839a8f01d294199ca.wasm",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
