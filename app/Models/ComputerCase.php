<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ComputerCase extends Model
{
    use HasFactory;

    protected $table = 'computer_cases'; // Таблиця має назву cases
    protected $fillable = [
        'product_id',
        'case_type',
        'color',
        'supported_motherboard_standard',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
