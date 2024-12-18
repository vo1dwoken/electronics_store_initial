<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class CartController extends Controller
{
    public function index()
    {
        // Example: Retrieve cart data from the session or database
        $cart = session('cart', []);

        return Inertia::render('Cart/Index', [
            'cart' => $cart,
            'total' => array_sum(array_map(fn($item) => $item['price'] * $item['quantity'], $cart)),
        ]);
    }

    public function add(Request $request)
{
    try {
        $request->validate([
            'product_id' => 'required|integer|exists:products,id',
        ]);

        $product = Product::find($request->product_id);

        $cart = session('cart', []);

        if (isset($cart[$product->id])) {
            $cart[$product->id]['quantity'] += $request->quantity ?? 1;
        } else {
            $cart[$product->id] = [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'quantity' => $request->quantity ?? 1,
            ];
        }

        session(['cart' => $cart]);

        return back()->with('success', 'Product added to cart.');
    } catch (\Exception $e) {
        \Log::error("Error adding product to cart: " . $e->getMessage());
        return response()->json(['error' => $e->getMessage()], 500);
    }
}



    public function remove(Request $request)
    {
        $cart = session('cart', []);
        unset($cart[$request->product_id]);
        session(['cart' => $cart]);

        return back()->with('success', 'Product removed from cart.');
    }

    public function update(Request $request)
    {
        $cart = session('cart', []);
        if (isset($cart[$request->product_id])) {
            $cart[$request->product_id]['quantity'] = $request->quantity;
        }
        session(['cart' => $cart]);

        return back()->with('success', 'Cart updated.');
    }
}
