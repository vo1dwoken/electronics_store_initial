<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::query();

        // Фільтрація по категоріям (типам)
        if ($request->has('category')) {
            $query->where('type', $request->category);
        }

        // Сортування
        if ($request->has('sort_by')) {
            $query->orderBy($request->sort_by, $request->direction ?? 'asc');
        }

        // Завантажуємо продукти
        $products = $query->with('manufacturer')->get();

        // Отримуємо усі унікальні типи компонентів для фільтрів
        $partTypes = Product::select('type')->distinct()->get()->pluck('type');

        // Повертаємо дані через Inertia
        return Inertia::render('Products/Index', [
            'products' => $products,
            'filters' => [
                'category' => $request->category,
                'sort_by' => $request->sort_by,
                'direction' => $request->direction,
            ],
            'partTypes' => $partTypes, // Передаємо список типів для фільтрації
        ]);
    }

    public function show($id)
    {
        $product = Product::with('manufacturer')->findOrFail($id);

        return Inertia::render('Product', [
            'product' => [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'price' => $product->price,
                'type' => $product->type,
                'stock' => $product->stock,
                'image' => $product->image,
                'manufacturer' => $product->manufacturer->name ?? 'Unknown',
            ],
        ]);
    }
}
