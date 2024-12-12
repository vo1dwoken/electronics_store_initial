@extends('layouts.app')

@section('content')

<style>
    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding: 20px;
    }

    .product-item {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 15px;
        text-align: center;
        width: 200px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s;
    }

    .product-item:hover {
        transform: scale(1.05);
    }

    .product-item img {
        max-width: 100%;
        border-radius: 8px;
        margin-bottom: 10px;
    }

    .product-item h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .product-item p {
        font-size: 14px;
        margin-bottom: 5px;
        color: #555;
    }

    .product-item a {
        display: inline-block;
        margin-top: 10px;
        padding: 8px 12px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.3s;
    }

    .product-item a:hover {
        background-color: #0056b3;
    }
</style>

<div class="product-list">
    @foreach ($products as $product)
        <div class="product-item">
            <img src="{{ $product->image }}" alt="{{ $product->name }}">
            <h3>{{ $product->name }}</h3>
            <p>{{ $product->description }}</p>
            <p>{{ $product->price }}₴</p>
            <a href="{{ route('products.show', $product->id) }}">Деталі</a>
        </div>
    @endforeach
</div>

@endsection
