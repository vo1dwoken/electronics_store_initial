<?php

namespace Database\Factories;

use App\Models\ComputerCase;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ComputerCaseFactory extends Factory
{
    protected $model = ComputerCase::class;

    public function definition()
    {
        return [
            'product_id' => Product::factory(),
            'case_type' => $this->faker->randomElement(['ATX', 'Micro-ATX', 'Mini-ITX']),
            'color' => $this->faker->safeColorName,
            'supported_motherboard_standard' => $this->faker->randomElement(['ATX', 'Micro-ATX', 'Mini-ITX']),
        ];
    }
}
