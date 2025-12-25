# Kalkulator Karty Próby Hamulca (Wersja v3.1)

Profesjonalne narzędzie dla maszynistów i rewidentów taboru kolejowego, służące do szybkiego i precyzyjnego obliczania parametrów hamulcowych pociągu (MHW, Rzeczywisty % masy hamującej) oraz generowania danych do Karty Próby Hamulca.

Aplikacja jest w pełni responsywna (RWD), zgodna ze standardami dostępności (WCAG/EAA) i działa offline.

### 🌐 [Uruchom aplikację online](https://piotrrgw.github.io/Kalkulator_PH/index.html)

## 🚀 Funkcjonalności

* **Automatyczne obliczenia:**
    * Masy Hamującej Wymaganej (MHW) – zaokrąglanie w górę (bezpieczna strona).
    * Rzeczywistego % masy hamującej – zaokrąglanie w dół.
    * Długości składu.
* **Baza pojazdów (Presety):**
    * Szybki wybór składów zespolonych (PESA, STADLER, ALSTOM, SKPL).
    * Możliwość konfiguracji ładowności (Próżny/Ładowny) oraz nastawy hamulca (R, R+Mg, R+E+Mg).
    * Automatyczne sumowanie mas i długości wybranych pojazdów.
* **Zapisywanie stanu (Nowość w v3.0/v3.1):**
    * Aplikacja automatycznie zapamiętuje wprowadzone dane i wybrane pojazdy w pamięci przeglądarki (Local Storage). Po odświeżeniu strony lub powrocie do aplikacji, formularz jest wypełniony.
* **Dostępność (Accessibility):**
    * Pełna obsługa czytników ekranowych (ARIA labels).
    * Wysoki kontrast i wyraźna sygnalizacja fokusu (Focus Ring).
    * Przystosowanie do obsługi klawiaturą.

## 🛠 Technologie

* **HTML5 / CSS3:** Nowoczesny, responsywny layout (Mobile First).
* **JavaScript (ES6+):** Logika obliczeń i obsługa Local Storage.
* **Google Analytics 4:** Monitorowanie ruchu.

## 📋 Jak używać

1.  **Wybór pojazdów:** Kliknij na typ pojazdu z panelu bocznego "Predefiniowane składy", aby dodać go do listy.
2.  **Konfiguracja:** Dla każdego dodanego pojazdu ustaw stan ładowności oraz nastawę hamulca.
3.  **Dane ręczne:** Możesz ręcznie skorygować Masę Ogólną (MO) lub Masę Hamującą Rzeczywistą (MHR) w polach formularza.
4.  **Wymagany procent:** Wpisz wartość procentową masy hamującej wymaganej (PW) z rozkładu jazdy.
5.  **Wynik:** Kliknij "Oblicz", aby otrzymać gotowe dane do wpisania w Kartę Próby.

## 🔄 Historia zmian

### v3.1 (Obecna)
* Ustawienie domyślnej nastawy hamulca dla **ED160 STARY** na `R+Mg`.
* Drobne poprawki optymalizacyjne.

### v3.0
* **Nowy Layout:** Całkowite odświeżenie interfejsu użytkownika.
* **Local Storage:** Dodano zapamiętywanie stanu aplikacji.
* **WCAG & EAA:** Pełne dostosowanie do wytycznych dostępności (poprawa kontrastu, focus ring, etykiety ARIA).
* Dodano stopkę z wersjonowaniem.

## 🚂 Autorzy

* **Główny twórca:** Piotr M 🚂
* **Wsparcie AI:** ChatGPT 🚀

---
*Aplikacja tworzona hobbystycznie, wspomagająca pracę na kolei. Zawsze weryfikuj wyniki z obowiązującymi przepisami.*