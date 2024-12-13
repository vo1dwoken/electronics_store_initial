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

        // Фільтрація по категоріям
        if ($request->has('category')) {
            $query->where('type', $request->category);
        }

        // Сортування
        if ($request->has('sort_by')) {
            $query->orderBy($request->sort_by, $request->direction ?? 'asc');
        }

        $products = $query->get();

        // return view('products.index', compact('products'));
           return Inertia::render('Products/Index', [
            'products' => $products,
            'filters' => [
                'category' => $request->category,
                'sort_by' => $request->sort_by,
                'direction' => $request->direction,
            ],
        ]);
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);
        // return view('products.show', compact('product'));
        return Inertia::render('Products/Show', [
            'product' => $product,
        ]);
    }
}
// <?php
// namespace App\Http\Controllers;
//
// use App\Models\Product;
// use Illuminate\Http\Request;
// use Inertia\Inertia;
//
// class ProductController extends Controller
// {
//     public function index(Request $request)
//     {
//         // Start a query for products
//         $query = Product::query();
//
//         // Apply filters from request parameters
//         if ($request->filled('type')) {
//             $query->where('type', $request->type);
//         }
//
//         if ($request->filled('price_min')) {
//             $query->where('price', '>=', $request->price_min);
//         }
//
//         if ($request->filled('price_max')) {
//             $query->where('price', '<=', $request->price_max);
//         }
//
//         if ($request->filled('manufacturer')) {
//             $query->where('manufacturer_id', $request->manufacturer);
//         }
//
//         // Paginate the results
//         $products = $query->paginate(10);
//
//         // Pass products and filters to the view or Inertia page
//         return Inertia::render('Products/Index', [
//             'products' => $products,
//             'filters' => $request->all(),
//         ]);
//     }
// }
