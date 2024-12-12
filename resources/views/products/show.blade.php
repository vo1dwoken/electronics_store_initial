@extends('layouts.app')

@section('title', $product->name)
<style>
    .product-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .product-details h1 {
        font-size: 24px;
        margin-bottom: 20px;
        color: #333;
    }

    .product-details img {
        max-width: 300px;
        border-radius: 8px;
        margin-bottom: 20px;
    }

    .product-details p {
        font-size: 16px;
        color: #555;
        text-align: center;
        margin-bottom: 10px;
    }

    .product-details p strong {
        color: #000;
    }
</style>


@section('content')
<div class="product-details">
    <h1>{{ $product->name }}</h1>
    <div>
        <img src="{{ $product->image }}" alt="{{ $product->name }}">
        <p>{{ $product->description }}</p>
        <p><strong>Ціна:</strong> {{ $product->price }}₴</p>
    </div>
</div>
@endsection
