// Wersja: v3.7
// Numer wersji musi być zmieniany przy każdej aktualizacji plików aplikacji
const CACHE_NAME = 'kalkulator-ph-v3.7';

// Najważniejsze pliki niezbędne do działania offline
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './zespoly_trakcyjne.json',
  './favicon.svg',
  './apple-touch-icon.png',
  './icon-192x192.png',
  './icon-512x512.png'
];

// 1. Instalacja i bezpieczne cache'owanie zasobów
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Zapisywanie plików do pamięci v3.7...');
      // Używamy mapowania z catch, aby brak jednego pliku (np. ikony) 
      // nie zablokował zapisania całego kalkulatora do działania offline.
      return Promise.all(
        ASSETS.map(asset => {
          return cache.add(asset).catch(error => {
            console.warn('[Service Worker] Nie udało się pobrać pliku do cache:', asset, error);
          });
        })
      );
    })
  );
  // UWAGA: Usunięto sztywne self.skipWaiting(), aby aktualizacja następowała po kliknięciu w baner
});

// Nasłuchiwanie na polecenie wymuszenia aktualizacji ze strony użytkownika (kliknięcie Aktualizuj)
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

// 2. Czyszczenie starego cache (niezbędne, aby użytkownicy widzieli nowe wersje)
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        // Jeśli nazwa cache w przeglądarce nie pasuje do aktualnego CACHE_NAME, usuwamy go
        if (key !== CACHE_NAME) {
          console.log('[Service Worker] Usuwanie starej wersji cache:', key);
          return caches.delete(key);
        }
      }));
    })
  );
  // Od razu po aktywacji Service Worker zaczyna kontrolować stronę
  self.clients.claim();
});

// 3. Obsługa żądań HTTP (serwowanie z cache lub sieci)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      // Zwróć plik z cache, a jeśli go tam nie ma, pobierz z Internetu
      return response || fetch(e.request).catch(() => {
        // Blok wyciszający błędy (np. niedostępność skryptu Google Tag Manager w trybie offline)
        console.log('[Service Worker] Brak dostępu do sieci. Ignorowanie żądania dla:', e.request.url);
      });
    })
  );
});