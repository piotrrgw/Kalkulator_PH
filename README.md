# Kalkulator Próby Hamulca (Brake Test Calculator)

Specjalistyczna aplikacja webowa służąca do obliczania wymaganej masy hamującej oraz rzeczywistej masy hamującej pociągu. Narzędzie zostało zaprojektowane w celu wsparcia personelu kolejowego w szybkim i bezbłędnym przygotowaniu karty próby hamulca, zgodnie z aktualnymi przepisami i normami obowiązującymi w Polsce (regulacje PKP PLK).

## 🚀 Kluczowe funkcjonalności

### 1. Zgodność z przepisami
Algorytm obliczeniowy został zaimplementowany w ścisłym oparciu o krajowe instrukcje i regulacje dotyczące hamulców kolejowych. Aplikacja automatyzuje proces doboru wymaganych wartości, minimalizując ryzyko błędu ludzkiego.

### 2. Dwa tryby wprowadzania danych
Aplikacja oferuje elastyczność w zależności od rodzaju taboru:
* **Tryb Manualny:** Pozwala na ręczne wprowadzenie wszystkich parametrów dla składów niestandardowych (np. składy wagonowe, lokomotywy luzem).
* **Szablony EZT (Predefiniowane):** Szybki wybór popularnych Elektrycznych Zespołów Trakcyjnych (EZT). Po wyborze serii pojazdu, system automatycznie uzupełnia stałe parametry techniczne (masę własną, długość, masę hamującą), co znacząco przyspiesza proces obliczeń.

### 3. Walidacja wyników
System weryfikuje poprawność wprowadzonych danych i oblicza wymagany procent ciężaru hamującego, informując użytkownika o spełnieniu (lub niespełnieniu) wymogów dla danej linii i prędkości rozkładowej.

## 🤖 AI-Assisted Development

Projekt został zrealizowany w modelu **AI-Assisted Development** przy wsparciu modelu językowego **ChatGPT**. Sztuczna inteligencja została wykorzystana do:
* Implementacji logiki matematycznej zgodnej z przepisami branżowymi.
* Stworzenia struktury danych dla predefiniowanych pojazdów (EZT).
* Optymalizacji interfejsu użytkownika (UI) pod kątem czytelności w warunkach pracy operacyjnej.

## 🛠️ Stack Technologiczny

* HTML5 / CSS3
* JavaScript (ES6+)
* Brak zewnętrznych zależności (No-Framework dependencies) - co zapewnia szybkość działania i łatwość uruchomienia na dowolnym urządzeniu (tablet, smartfon służbowy).

## ⚠️ Nota Prawna (Disclaimer)

Aplikacja ma charakter pomocniczy i edukacyjny. Mimo dołożenia wszelkich starań, aby algorytmy były zgodne z obowiązującymi instrukcjami, ostateczna odpowiedzialność za przygotowanie pociągu do drogi i wypełnienie dokumentacji (Karta Próby Hamulca) spoczywa na uprawnionym pracowniku kolejowym. Należy zawsze weryfikować wyniki z oficjalnymi dokumentami i tabelami.
