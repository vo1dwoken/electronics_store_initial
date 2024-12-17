<?php

use App\Http\Controllers\ProfileController;

use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\GoogleLoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/products/{id}', [ProductController::class, 'show'])->where('id', '[0-9]+')->name('products.show');
Route::get('/category/{type}', [HomeController::class, 'category'])->name('category');
Route::get("/foo", function () {
    return "Hello";
})->name('foo');

Route::get('/google/redirect', [GoogleLoginController::class, 'redirectToGoogle'])->name('google.redirect');
Route::get('/google/callback', [GoogleLoginController::class, 'handleGoogleCallback'])->name('google.callback');
// Route::get('/products', [ProductController::class, 'index'])->name('products.index');
//
// Route::get('/', [HomeController::class, 'index'])->name('home');
// // Route::get('/', [HomeController::class, 'index']);  // Головна сторінка
// Route::get('/categories', [CategoryController::class, 'index']);
// Route::get('/cart', [CartController::class, 'index']);  // Кошик
// Route::get('/checkout', [CheckoutController::class, 'index']);  // Оформлення замовлення
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/about', function () {
//     return Inertia::render('About'); // This points to the About.jsx file
// })->name('about');


use App\Http\Controllers\AboutController;

Route::get('/about', [AboutController::class, 'index'])->name('about');


Route::get('/privacy', function () {
    return Inertia::render('Privacy'); // This points to the Privacy.jsx file
})->name('privacy');

Route::get('/product', function () {
    return Inertia::render('Product'); // This points to the Privacy.jsx file
})->name('product');

// Route::get('/products/{id}', [ProductController::class, 'show'])->name('products.show');

Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
Route::post('/cart/add', [CartController::class, 'add'])->name('cart.add');
Route::post('/cart/remove', [CartController::class, 'remove'])->name('cart.remove');
Route::post('/cart/update', [CartController::class, 'update'])->name('cart.update');


Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout.index');
Route::post('/checkout/process', [CheckoutController::class, 'process'])->name('checkout.process');
Route::get('/checkout/success', [CheckoutController::class, 'success'])->name('checkout.success');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
