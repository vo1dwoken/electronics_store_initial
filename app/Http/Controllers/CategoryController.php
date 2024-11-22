<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        // Отримуємо всі категорії з бази даних
        $categories = Category::all();

        // Передаємо дані категорій в компонент через Inertia
        return Inertia::render('Categories/Index', [
            'categories' => $categories
        ]);
    }
}
