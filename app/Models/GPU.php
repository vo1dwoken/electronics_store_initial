<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GPU extends Model
{
    use HasFactory;
    protected $table = 'gpus';

    protected $fillable = [
        'product_id',
        'memory_type',
        'bus_width',
        'input_types',
        'output_types',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
