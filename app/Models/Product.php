<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'manufacturer_id',
        'type',
    ];

    // Relationship with Manufacturer
    public function manufacturer()
    {
        return $this->belongsTo(Manufacturer::class);
    }
}
