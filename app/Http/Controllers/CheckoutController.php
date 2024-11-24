<?php
// app/Http/Controllers/CheckoutController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;

class CheckoutController extends Controller
{
    public function index()
    {
        $cart = session('cart', []);

        if (empty($cart)) {
            return redirect()->route('cart.index')->with('error', 'Your cart is empty.');
        }

        return Inertia::render('Checkout/Index', [
            'cart' => $cart,
            'total' => array_sum(array_map(fn($item) => $item['price'] * $item['quantity'], $cart)),
        ]);
    }

    public function process(Request $request)
    {
        $cart = session('cart', []);
        if (empty($cart)) {
            return redirect()->route('cart.index')->with('error', 'Your cart is empty.');
        }

        // Example of order creation (you can integrate Stripe here)
        $order = Order::create([
            'user_id' => auth()->user->id(),
            'total' => array_sum(array_map(fn($item) => $item['price'] * $item['quantity'], $cart)),
            'status' => 'pending',
        ]);

        foreach ($cart as $item) {
            $order->items()->create([
                'product_id' => $item['id'],
                'quantity' => $item['quantity'],
                'price' => $item['price'],
            ]);
        }

        // Clear the cart
        session()->forget('cart');

        return redirect()->route('checkout.success')->with('success', 'Order placed successfully.');
    }

    public function success()
    {
        return Inertia::render('Checkout/Success', [
            'message' => 'Your order has been successfully placed!',
        ]);
    }
}
