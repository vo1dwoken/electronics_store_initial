<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Drive extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'drive_type',
        'capacity',
        'interface',
        'read_speed',
        'write_speed',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
