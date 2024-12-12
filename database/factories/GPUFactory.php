<?php

namespace Database\Factories;

use App\Models\GPU;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class GPUFactory extends Factory
{
    protected $model = GPU::class;

    public function definition()
    {
        return [
            'product_id' => Product::factory(['type' => 'gpu']), // Генерація продукту типу GPU
            'memory_type' => $this->faker->randomElement(['GDDR5', 'GDDR6', 'HBM2']), // Тип пам'яті
            'bus_width' => $this->faker->numberBetween(128, 512), // Ширина шини
            'input_types' => 'HDMI, DisplayPort', // Типи входів
            'output_types' => 'HDMI, DisplayPort', // Типи виходів
        ];
    }
}
