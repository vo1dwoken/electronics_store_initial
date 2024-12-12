<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    // Масове призначення
    protected $fillable = [
        'user_id',
        'product_id',
        'quantity',
    ];

    // Зв’язки
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    // Кастинг
    protected $casts = [
        'quantity' => 'integer',
    ];

    // Логіка для загальної вартості
    public function totalPrice()
    {
        return $this->product->price * $this->quantity;
    }
}
