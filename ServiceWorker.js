const cacheName = "zestful-Color Paths-0.5";
const contentToCache = [
    "Build/7a2dbded24d57e056180125b1583e7c4.loader.js",
    "Build/173ca2f7605f2222ca5f80312b3e787e.framework.js.br",
    "Build/d8d47b0958d237790c07dd726c760c61.data.br",
    "Build/880fc1ea813cc53c5b5f2184e1205567.wasm.br",
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
