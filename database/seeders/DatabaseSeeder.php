<?php

namespace Database\Seeders;

use App\Models\Manufacturer;
use App\Models\Product;
use App\Models\GPU;
use App\Models\CPU;
use App\Models\Motherboard;
use App\Models\Drive;
use App\Models\RAM;
use App\Models\ComputerCase;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Викликаємо сідер для фіксованих виробників
        $this->call(ManufacturerSeeder::class);

        // Генеруємо додаткових виробників фабрикою
        Manufacturer::factory(5)->create();

        // Створюємо продукти та відповідні деталі
        Manufacturer::all()->each(function ($manufacturer) {
            Product::factory(10)->create(['manufacturer_id' => $manufacturer->id])->each(function ($product) {
                switch ($product->type) {
                    case 'gpu':
                        GPU::factory()->create(['product_id' => $product->id]);
                        break;
                    case 'cpu':
                        CPU::factory()->create(['product_id' => $product->id]);
                        break;
                    case 'motherboard':
                        Motherboard::factory()->create(['product_id' => $product->id]);
                        break;
                    case 'drive':
                        Drive::factory()->create(['product_id' => $product->id]);
                        break;
                    case 'ram':
                        RAM::factory()->create(['product_id' => $product->id]);
                        break;
                    case 'case':
                        ComputerCase::factory()->create(['product_id' => $product->id]);
                        break;
                }
            });
        });

        // Створення користувачів
        User::factory(10)->create();
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
