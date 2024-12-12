<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Manufacturer;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word, // Назва продукту
            'description' => $this->faker->paragraph, // Опис продукту
            'price' => $this->faker->randomFloat(2, 10, 1000), // Ціна
            'manufacturer_id' => Manufacturer::factory(), // Генерація виробника
            'type' => $this->faker->randomElement(['cpu', 'gpu', 'motherboard', 'drive', 'ram', 'case']), // Тип продукту
            'image' => $this->faker->imageUrl(), // URL зображення
            'memory_capacity' => $this->faker->optional()->numberBetween(4, 64), // Об'єм пам'яті
            'has_lighting' => $this->faker->boolean, // Наявність підсвітки
        ];
    }
}
