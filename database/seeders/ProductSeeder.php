<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        Product::create([
            'name' => 'NVIDIA GeForce RTX 3080',
            'description' => 'High-end gaming GPU.',
            'price' => 699.99,
            'manufacturer_id' => 1, // Replace with an actual manufacturer ID
            'type' => 'GPU',
        ]);

        Product::create([
            'name' => 'Intel Core i9-12900K',
            'description' => 'Flagship CPU for gaming and productivity.',
            'price' => 599.99,
            'manufacturer_id' => 2, // Replace with an actual manufacturer ID
            'type' => 'CPU',
        ]);
    }
}
