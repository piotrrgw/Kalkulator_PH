// Wersja aplikacji: v3.11.3
const CACHE_NAME = 'kalkulator-ph-v3.11.3';

// Najważniejsze pliki niezbędne do działania offline
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './zespoly_trakcyjne.json',
  './favicon.svg',
  './apple-touch-icon.png'
];

// 1. Instalacja i bezpieczne cache'owanie zasobów
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Zapisywanie plików do pamięci v3.11.3...');
      return Promise.all(
        ASSETS.map(asset => {
          return cache.add(asset).catch(error => {
            console.warn('[Service Worker] Nie udało się pobrać pliku do cache:', asset, error);
          });
        })
      );
    })
  );
});

// Nasłuchiwanie na polecenie wymuszenia aktualizacji ze strony użytkownika
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

// 2. Czyszczenie starego cache
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[Service Worker] Usuwanie starej wersji cache:', key);
          return caches.delete(key);
        }
      }));
    })
  );
  self.clients.claim();
});

// 3. Obsługa żądań HTTP
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request).catch(() => {
        console.log('[Service Worker] Brak dostępu do sieci. Ignorowanie żądania dla:', e.request.url);
      });
    })
  );
});