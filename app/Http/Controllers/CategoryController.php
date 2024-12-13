<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Inertia\Inertia;
use App\Models\Product;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Product::distinct()->pluck('type')->toArray();
        return Inertia::render('Home', [
            'categories' => $categories,
        ]);
        // // Отримуємо всі категорії з бази даних
        // $categories = Category::all();
        //
        // // Передаємо дані категорій в компонент через Inertia
        // return Inertia::render('Categories/Index', [
        //     'categories' => $categories
        // ]);
    }
}
