const CACHE_NAME = 'kanau-songlist-v2';

const ASSETS = [
  '/',
  '/index.html',
  '/css/theme.css',
  '/css/components.css',
  '/css/views.css',
  '/js/main.js',
  '/assets/site-icon.svg',
  '/data/meta.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
