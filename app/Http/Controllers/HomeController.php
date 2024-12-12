<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    // public function index()
    // {
    //     // Випадкові продукти для рекомендацій
    //     $recommendedProducts = Product::inRandomOrder()->take(8)->get();

    //     // Отримати унікальні категорії з таблиці продуктів
    //     $categories = Product::distinct()->pluck('type');

    //     return view('home', compact('recommendedProducts', 'categories'));
    // }

    public function index()
    {
        // Отримати випадкові продукти
        $recommendedProducts = Product::inRandomOrder()->take(8)->get();

        // Отримати унікальні категорії
        $categories = Product::distinct()->pluck('type');

        $products = Product::all();

        // Повернути дані у Home.jsx
        return Inertia::render('Home', [
            'recommendedProducts' => $recommendedProducts,
            'categories' => $categories,
            'products' => $products,
        ]);
    }


    private function getFiltersForType($type)
    {
        $filters = [
            'CPU' => ['socket', 'series', 'has_integrated_graphics', 'core_count', 'memory_type', 'architecture', 'has_lighting', 'memory_capacity'],
            'GPU' => ['memory_type', 'bus_width', 'input_types', 'output_types', 'has_lighting', 'memory_capacity'],
            'Motherboard' => ['chipset', 'format', 'memory_type', 'socket', 'cpu_architecture', 'has_lighting', 'memory_capacity'],
            'RAM' => ['frequency', 'module_count', 'voltage', 'has_lighting', 'memory_capacity'],
            'Drive' => ['drive_type', 'capacity', 'interface', 'read_speed', 'write_speed', 'has_lighting', 'memory_capacity'],
            'Computer Case' => ['case_type', 'color', 'supported_motherboard_standard', 'has_lighting', 'memory_capacity'],
        ];

        return $filters[$type] ?? [];
    }
    public function category($type, Request $request)
    {
        $filters = $request->only(['price_min', 'price_max', 'manufacturer_id', 'socket', 'core_count']);

        $queryFilters = [];

        if (isset($filters['price_min'])) {
            $queryFilters[] = [
                'target' => 'price',
                'type' => '$gt',
                'value' => $filters['price_min'],
            ];
        }

        if (isset($filters['price_max'])) {
            $queryFilters[] = [
                'target' => 'price',
                'type' => '$lt',
                'value' => $filters['price_max'],
            ];
        }

        if (isset($filters['manufacturer_id'])) {
            $queryFilters[] = [
                'target' => 'manufacturer_id',
                'type' => '$eq',
                'value' => $filters['manufacturer_id'],
            ];
        }

        if ($type === 'cpus' && isset($filters['socket'])) {
            $queryFilters[] = [
                'type' => '$has',
                'target' => 'cpus',
                'value' => [
                    [
                        'type' => '$eq',
                        'target' => 'socket',
                        'value' => $filters['socket'],
                    ],
                ],
            ];
        }

        //        $products = Product::where('type', $type)->filter($queryFilters)->get();
        $products = Product::where('type', $type)->get();

        //        $availableFilters = $this->getFiltersForType($type);
        return Inertia::render('Category', [
            'products' => $products,
            'type' => $type,
        ]);
        //        return view('category', compact('products', 'type', 'availableFilters'));
    }
}
