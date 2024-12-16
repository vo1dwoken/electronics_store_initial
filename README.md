# Sklep z Częściami Komputerowymi

## Przegląd Biznesowy
Sklep z Częściami Komputerowymi to platforma internetowa, która upraszcza proces zakupu dla entuzjastów i profesjonalistów zajmujących się komputerami. Oferuje przyjazny interfejs do przeglądania, filtrowania i kupowania komponentów komputerowych, takich jak procesory, karty graficzne, płyty główne i inne. Platforma ma na celu uproszczenie zakupów poprzez zaawansowane filtry wyszukiwania i płynne uwierzytelnianie użytkowników.

### Kluczowe Funkcje:
- Kategorie Produktów: Komponenty są zorganizowane w kategorie dla łatwiejszej nawigacji.
- Zaawansowane Filtrowanie: Sortowanie i filtrowanie według ceny, typu i specyfikacji.
- Uwierzytelnianie Użytkowników: Rejestracja i logowanie za pomocą Google lub e-maila.
- Koszyk Zakupów: Dodawanie produktów do koszyka i składanie zamówień.
- Zarządzanie Kontem Klienta: Aktualizacja haseł, adresów e-mail i innych danych konta.
- Historia Zamówień: Przegląd wcześniejszych zamówień i śledzenie bieżących zakupów.

## Przegląd Techniczny

### Użyte Technologie
- Frontend: React.js
- Backend: Laravel
- Baza Danych: MariaDB
- Middleware: Inertia.js

### Schemat Bazy Danych
Baza danych została zaprojektowana do efektywnego zarządzania produktami, kategoriami, użytkownikami i zamówieniami. Poniżej przedstawiono główne tabele:

1. Users: Przechowuje informacje o użytkownikach, w tym dane OAuth dla uwierzytelniania Google.
2. Products: Zawiera szczegóły dotyczące komponentów, takie jak nazwa, opis, cena i obrazek.
3. Categories: Organizuje produkty w logiczne grupy.
4. Carts: Śledzi zamówienia po dodawaniu ich do koszyka.

### Zaimplementowane Funkcje
- Uwierzytelnianie:
  - Logowanie za pomocą Google/e-mail.
  - Standardowa rejestracja za pomocą e-maila/hasła.
  - Funkcjonalność resetowania hasła i aktualizacji adresu e-mail.
- Kategorie Produktów
- Wyszukiwanie i Filtrowanie:
  - Wielopoziomowe filtry oparte na różnych atrybutach produktów.
  - Opcje sortowania według ceny kategorii.

### Wyzwania Implementacyjne
- Integracja OAuth: Konfiguracja API Google dla płynnego uwierzytelniania wymagała właściwego obsługi przekierowań i bezpiecznego przechowywania tokenów.
  - Rozwiązanie: Wdrożono middleware Inertia.js, aby zapewnić płynne trasowanie.
- Optymalizacja Bazy Danych: Złożone zapytania do filtrowania i sortowania były początkowo wolne.
  - Rozwiązanie: Dodano indeksy do krytycznych kolumn i zoptymalizowano strukturę zapytań.
- Złożoność Frontendu: Dynamiczne filtrowanie i sortowanie produktów w czasie rzeczywistym wymagało zaawansowanego zarządzania stanem aplikacji.
  - Rozwiązanie: Wykorzystano hook useStatex do zarządzania stanem, co pozwoliło na płynną obsługę interfejsu użytkownika. Dodatkowo zoptymalizowano komponenty React, aby zmniejszyć zużycie zasobów.

### Testowanie
- Testy Automatyczne:
  - Testy jednostkowe logiki backendu przy użyciu PHPUnit.
  - Testy frontendu przy użyciu Jest i React Testing Library.
- Testy Manualne:
  - Przeprowadzono testy ręczne dla komponentów UI i przepływów płatności.
- Testy Bezpieczeństwa:
  - Zweryfikowano bezpieczeństwo przepływu OAuth i przeprowadzono podstawowe testy penetracyjne w celu wykrycia luk.

### Zrzuty Ekranu

## Wdrożenie







<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
