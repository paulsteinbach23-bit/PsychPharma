const CACHE = 'psychpharma-v1';

const ASSETS = [
  './index.html',
  './app.js',
  './style.css',
  './data/medications.js',
  './data/receptors.js',
  './manifest.json',
  './icons/icon.png',
];

// Install: cache all local assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: remove old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for local assets, network-only for external (fonts etc.)
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Let external requests (Google Fonts etc.) pass through to network
  if (url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache new local resources on the fly
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
