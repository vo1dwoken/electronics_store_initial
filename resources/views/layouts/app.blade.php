<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Computer Store')</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <header>
        <nav>
            <a href="{{ url('/') }}">Головна</a>
            <a href="{{ url('/products') }}">Продукти</a>
            <a href="{{ url('/cart') }}">Кошик</a>
        </nav>
    </header>
    <main>
        @yield('content')
    </main>
    <footer>
        <p>&copy; {{ date('Y') }} Computer Store. Всі права захищено.</p>
    </footer>
</body>
</html>
