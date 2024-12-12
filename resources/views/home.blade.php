<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Computer Store</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
    @guest
    <header>
        <nav>
            <a href="{{route('login')}}">Login</a>
            <a href="{{route('register')}}">Register</a>
        </nav>
    </header>
    @endguest
        @auth
        <a href="{{ url("profile") }}">profile</a>
        @endauth
    <div class="container mt-5">
        <div class="row">
            <!-- Список категорій -->
            <div class="col-md-3">
                <h4>Categories</h4>
                <ul class="list-group">
                    @foreach ($categories as $category)
                        <li class="list-group-item">
                            <a href="{{ route('category', ['type' => $category]) }}">{{ ucfirst($category) }}</a>
                        </li>
                    @endforeach
                </ul>
            </div>

            <!-- Рекомендовані продукти -->
            <div class="col-md-9">
                <h4>Recommended Products</h4>
                <div class="row">
                    @foreach ($recommendedProducts as $product)
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <img src="{{ $product->image }}" class="card-img-top" alt="{{ $product->name }}">
                                <div class="card-body">
                                    <h5 class="card-title">{{ $product->name }}</h5>
                                    <p class="card-text">{{ $product->price }}₴</p>
                                    <a href="/products/{{ $product->id }}" class="btn btn-primary">View Product</a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</body>
</html>
