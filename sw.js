const CACHE = 'psychpharma-v5';

const ASSETS = [
  './index.html',
  './app.js',
  './quiz.js',
  './mini-quiz.js',
  './style.css',
  './data/medications.js',
  './data/antipsychotika.js',
  './data/receptors.js',
  './data/krankheitsbilder/depression.js',
  './data/krankheitsbilder/ptbs.js',
  './data/krankheitsbilder/schizophrenie.js',
  './data/krankheitsbilder/zwangsstoerung.js',
  './data/quiz-fakten.js',
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

// Fetch: network-first for local assets (immer aktuell), Fallback auf Cache
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Externe Requests (Google Fonts etc.) direkt ans Netz
  if (url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Aktuelle Version in Cache speichern
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
