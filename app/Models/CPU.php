<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CPU extends Model
{
    use HasFactory;

    protected $table = 'cpus';

    protected $fillable = [
        'product_id',
        'socket',
        'series',
        'has_integrated_graphics',
        'core_count',
        'memory_type',
        'architecture',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
