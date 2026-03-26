# Kalkulator Karty Próby Hamulca (Wersja v3.5)

Profesjonalne narzędzie dla maszynistów i rewidentów taboru kolejowego, służące do szybkiego i precyzyjnego obliczania parametrów hamulcowych pociągu (MHW, Rzeczywisty % masy hamującej) oraz generowania danych do Karty Próby Hamulca.

Aplikacja jest w pełni responsywna (RWD), zgodna ze standardami dostępności (WCAG/EAA) i przystosowana do działania na urządzeniach z małymi ekranami.

### 🌐 [Uruchom aplikację online](https://piotrrgw.github.io/Kalkulator_PH/index.html)

## 🚀 Funkcjonalności

* **Aplikacja PWA (Progresywna Aplikacja Internetowa):**
    * Możliwość instalacji kalkulatora na ekranie głównym telefonu, tabletu lub komputera (opcja "Dodaj do ekranu głównego" / "Zainstaluj").
    * Obsługa trybu offline – po pierwszej wizycie kalkulator działa nawet bez dostępu do Internetu.
* **Obliczenia w czasie rzeczywistym:**
    * Automatyczne przeliczanie wyników natychmiast po wprowadzeniu danych (brak konieczności klikania przycisku "Oblicz").
    * Masa Hamująca Wymagana (MHW) – zaokrąglanie w górę (bezpieczna strona).
    * Rzeczywisty % masy hamującej (PR) – zaokrąglanie w dół.
    * Obliczanie długości składu.
* **Dynamiczne ostrzeżenia bezpieczeństwa:**
    * Pulsujący komunikat alarmowy, informujący o konieczności postępowania zgodnie z przepisami w sytuacji, gdy rzeczywista masa hamująca jest mniejsza od wymaganej (MHR < MHW) lub gdy rzeczywisty procent jest mniejszy od wymaganego (PR < PW).
* **Baza pojazdów (Presety):**
    * Szybki wybór składów zespolonych (PESA, STADLER, ALSTOM, SKPL).
    * Możliwość konfiguracji ładowności (Próżny/Ładowny) oraz nastawy hamulca (R, R+Mg, R+E+Mg).
    * Automatyczne sumowanie mas i długości wybranych pojazdów.
* **Dostępność i UX (Accessibility):**
    * Pełna obsługa czytników ekranowych (etykiety ARIA, `aria-live`).
    * Wysoki kontrast i wyraźna sygnalizacja fokusu (Focus Ring).
    * Przystosowanie do obsługi klawiaturą.
    * Czytelne jednostki miary (t, %, m) osadzone bezpośrednio przy polach wprowadzania danych.

## 🛠 Technologie

* **HTML5 / CSS3:** Nowoczesny, responsywny layout (Mobile First).
* **JavaScript (ES6+):** Logika obliczeń oraz weryfikacja poprawności wprowadzanych wartości (zabezpieczenia przed nierealistycznymi wpisami).
* **PWA (Service Worker, Manifest):** Mechanizmy instalacji i wsparcie trybu offline.
* **Google Analytics 4:** Monitorowanie ruchu.

## 📋 Jak używać

1.  **Instalacja (Opcjonalnie):** Wejdź na stronę w przeglądarce mobilnej (np. Chrome, Safari) lub desktopowej i z menu przeglądarki wybierz "Zainstaluj aplikację" lub "Dodaj do ekranu głównego".
2.  **Wybór pojazdów:** Kliknij na typ pojazdu z panelu bocznego "Predefiniowane składy", aby dodać go do listy.
3.  **Konfiguracja:** Dla każdego dodanego pojazdu ustaw stan ładowności oraz nastawę hamulca.
4.  **Dane ręczne:** Możesz ręcznie skorygować Masę Ogólną (MO) lub Masę Hamującą Rzeczywistą (MHR) w polach formularza. Kalkulator zapamięta Twoją zmianę, dopóki ręcznie nie wyczyścisz pola.
5.  **Wymagany procent:** Wpisz wartość procentową masy hamującej wymaganej (PW) z rozkładu jazdy.
6.  **Wynik:** Parametry przeliczane są samoczynnie na bieżąco. Jeśli parametry hamowania będą niewystarczające, pod wynikiem zapulsuje na czerwono odpowiedni komunikat ostrzegawczy.

## 🔄 Historia zmian

### v3.5 (Obecna)
* Wdrożenie standardu PWA (Progressive Web App).
* Dodanie pliku `manifest.json`, ikon oraz integracja Service Workera (`sw.js`).
* Możliwość instalacji aplikacji na ekranie urządzenia i pełne wsparcie dla trybu offline.

### v3.4
* Usunięcie obsługi LocalStorage – formularz każdorazowo ładuje się w pełni wyczyszczony.
* Dodanie ostrzeżeń bezpieczeństwa (pulsujący komunikat w przypadku PR < PW lub MHR < MHW).
* Zabezpieczenie skryptu przed skrajnie nierealistycznymi wartościami wpisanymi z klawiatury.
* Dodanie atrybutów `aria-live` do dynamicznie przeliczanych wyników, co znacząco poprawia standardy WCAG.

### v3.3
* Usunięcie nachodzenia elementów formularza na siebie w rozdzielczościach desktopowych.

### v3.2
* Usunięcie przycisku "Oblicz" na rzecz automatycznego przeliczania danych natychmiast po zmianach w formularzu.
* Wydzielenie jednostek po prawej stronie okienek do wpisywania parametrów.
* Zmiana działania przycisków resetujących formularz (teraz czyszczą wszystko jednakowo).

### v3.1
* Ustawienie domyślnej nastawy hamulca dla **ED160 STARY** na `R+Mg`.
* Drobne poprawki optymalizacyjne.

### v3.0
* **Nowy Layout:** Całkowite odświeżenie interfejsu użytkownika.
* **WCAG & EAA:** Pełne dostosowanie do wytycznych dostępności (poprawa kontrastu, focus ring, etykiety ARIA).
* Dodano stopkę z wersjonowaniem.

## 🚂 Autorzy

* **Piotr M 🚂** * **Gemini**
---
*Aplikacja tworzona hobbystycznie, wspomagająca pracę na kolei. Zawsze weryfikuj wyniki z obowiązującymi przepisami.*