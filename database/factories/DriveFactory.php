<?php

namespace Database\Factories;

use App\Models\Drive;
use Illuminate\Database\Eloquent\Factories\Factory;

class DriveFactory extends Factory
{
    protected $model = Drive::class;

    public function definition()
    {
        return [
            'product_id' => \App\Models\Product::factory(),
            'drive_type' => $this->faker->randomElement(['SSD', 'HDD']),
            'capacity' => $this->faker->randomElement([256, 512, 1024]),
            'interface' => $this->faker->randomElement(['SATA', 'NVMe']),
            'read_speed' => $this->faker->numberBetween(500, 3500),
            'write_speed' => $this->faker->numberBetween(300, 3000),
        ];
    }
}
