<?php

namespace Database\Factories;

use App\Models\RAM;
use Illuminate\Database\Eloquent\Factories\Factory;

class RAMFactory extends Factory
{
    protected $model = RAM::class;

    public function definition()
    {
        return [
            'product_id' => \App\Models\Product::factory(),
            'frequency' => $this->faker->randomElement([2400, 3200, 3600]),
            'module_count' => $this->faker->numberBetween(1, 4),
            'voltage' => $this->faker->randomFloat(2, 1.2, 1.5),
        ];
    }
}
