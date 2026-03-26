const CACHE_NAME = 'kalkulator-ph-v3.4.1'; // Zmień tę nazwę przy każdej większej aktualizacji plików!
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.svg',
  './apple-touch-icon.png',
  './icon-192x192.png',
  './icon-512x512.png'
];

// Instalacja i cache'owanie zasobów
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting(); // Zmusza nowy SW do natychmiastowej instalacji
});

// Usuwanie starego cache (niezbędne, by użytkownicy widzieli nową wersję HTML po aktualizacji)
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[Service Worker] Usuwanie starego cache:', key);
          return caches.delete(key);
        }
      }));
    })
  );
  self.clients.claim();
});

// Serwowanie plików z cache podczas braku sieci
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});