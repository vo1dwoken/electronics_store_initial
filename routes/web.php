<?php

use App\Http\Controllers\ProfileController;

use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\GoogleLoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;

use Illuminate\Http\Request;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/products/{id}', [ProductController::class, 'show'])->where('id', '[0-9]+')->name('products.show');
Route::get('/category/{type}', [HomeController::class, 'category'])->name('category');
Route::get("/foo", function () {
    return "Hello";
})->name('foo');

Route::get('/google/redirect', [GoogleLoginController::class, 'redirectToGoogle'])->name('google.redirect');
Route::get('/google/callback', [GoogleLoginController::class, 'handleGoogleCallback'])->name('google.callback');

use App\Http\Controllers\AboutController;

Route::get('/about', [AboutController::class, 'index'])->name('about');


Route::get('/privacy', function () {
    return Inertia::render('Privacy'); // This points to the Privacy.jsx file
})->name('privacy');

Route::get('/product', function () {
    return Inertia::render('Product'); // This points to the Privacy.jsx file
})->name('product');

// Route::get('/products/{id}', [ProductController::class, 'show'])->name('products.show');

Route::get('/cart', function () {
    return response()->json([
        'cartItems' => Cart::all() // Це може бути ваш модель Cart або дані з сесії
    ]);
});
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

// Route::post('/cart/add', function (Request $request) {
//     $productId = $request->input('productId');

//     // Додаємо товар до сесії
//     $cart = session()->get('cart', []);
//     $cart[$productId] = ($cart[$productId] ?? 0) + 1;
//     session()->put('cart', $cart);

//     dd(session('cart'));

//     return back(); // Повернення на попередню сторінку
// });

require __DIR__ . '/auth.php';
