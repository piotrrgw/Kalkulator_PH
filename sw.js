const CACHE_NAME = 'kalkulator-ph-v3.4';
const ASSETS = [
  './',
  './index.html',
  './favicon.svg',
  './apple-touch-icon.png'
];

// Instalacja i cache'owanie zasobów
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serwowanie plików z cache podczas braku sieci
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});