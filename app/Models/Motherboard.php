<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Motherboard extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'chipset',
        'format',
        'memory_type',
        'socket',
        'cpu_architecture',
        'internal_ports',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
