<?php

namespace App\Http\Controllers;

use App\Models\Product; // Підключення моделі для випадкових товарів
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        // Отримання 4 випадкових товарів
        $products = Product::inRandomOrder()->limit(4)->get();

        // Передаємо дані у компонент React (About.jsx)
        return Inertia::render('About', [
            'products' => $products
        ]);
    }
}
