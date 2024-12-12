<?php

namespace Database\Factories;

use App\Models\Motherboard;
use Illuminate\Database\Eloquent\Factories\Factory;

class MotherboardFactory extends Factory
{
    protected $model = Motherboard::class;

    public function definition()
    {
        return [
            'product_id' => \App\Models\Product::factory(),
            'chipset' => $this->faker->randomElement(['B550', 'Z690']),
            'format' => $this->faker->randomElement(['ATX', 'Micro-ATX']),
            'memory_type' => $this->faker->randomElement(['DDR4', 'DDR5']),
            'socket' => $this->faker->randomElement(['AM4', 'LGA1700']),
            'cpu_architecture' => $this->faker->randomElement(['Zen 3', 'Rocket Lake']),
            'internal_ports' => $this->faker->randomElement(['M.2, SATA', 'PCIe']),
        ];
    }
}
