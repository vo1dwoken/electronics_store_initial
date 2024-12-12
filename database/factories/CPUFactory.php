<?php

namespace Database\Factories;

use App\Models\CPU;
use Illuminate\Database\Eloquent\Factories\Factory;

class CPUFactory extends Factory
{
    protected $model = CPU::class;

    public function definition()
    {
        return [
            'product_id' => \App\Models\Product::factory(),
            'socket' => $this->faker->randomElement(['AM4', 'LGA1200']),
            'series' => $this->faker->randomElement(['Ryzen 5', 'Intel i7']),
            'has_integrated_graphics' => $this->faker->boolean,
            'core_count' => $this->faker->randomElement([4, 6, 8, 12]),
            'memory_type' => $this->faker->randomElement(['DDR4', 'DDR5']),
            'architecture' => $this->faker->randomElement(['Zen 3', 'Alder Lake']),
        ];
    }
}
