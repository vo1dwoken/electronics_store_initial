<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // Отримуємо дані для домашньої сторінки
        return Inertia::render('Home', [
            'categories' => Category::all(),
        ]);
    }

    public function categories()
    {
        // Отримуємо категорії
        return Inertia::render('Categories', [
            'categories' => Category::all(),
        ]);
    }
}
