<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ ucfirst($type) }} Products</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>

<body>
    <div class="container mt-5">
        <h4>Products in "{{ ucfirst($type) }}"</h4>

        <!-- Додано форму фільтрів -->
        <form method="GET" action="{{ route('category', ['type' => $type]) }}" class="mb-4">
            <div class="row">
                @foreach ($availableFilters as $filter)
                    <div class="col-md-3 mb-3">
                        <label for="{{ $filter }}" class="form-label">{{ ucfirst(str_replace('_', ' ', $filter)) }}</label>
                        <input type="text" name="{{ $filter }}" id="{{ $filter }}" class="form-control" value="{{ request($filter) }}">
                    </div>
                @endforeach
            </div>
            <button type="submit" class="btn btn-primary">Apply Filters</button>
        </form>

        <!-- Відображення продуктів -->
        <div class="row">
            @forelse ($products as $product)
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
            @empty
            <p>No products found in this category.</p>
            @endforelse
        </div>
    </div>
</body>

</html>
