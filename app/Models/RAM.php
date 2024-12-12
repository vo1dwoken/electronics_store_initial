<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RAM extends Model
{
    use HasFactory;

    protected $table = 'rams';

    protected $fillable = [
        'product_id',
        'frequency',
        'module_count',
        'voltage',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
