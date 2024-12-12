<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Manufacturer;

class ProductSeeder extends Seeder
{
    public function run()
    {
        // Отримуємо ідентифікатори виробників
        $intel = Manufacturer::where('name', 'Intel')->first();
        $amd = Manufacturer::where('name', 'AMD')->first();
        $nvidia = Manufacturer::where('name', 'NVIDIA')->first();
        $asus = Manufacturer::where('name', 'ASUS')->first();
        $gigabyte = Manufacturer::where('name', 'Gigabyte')->first();

        // Додаємо продукти
        Product::create([
            'name' => 'Intel Core i9-13900K',
            'description' => 'Процесор Intel Core i9-13900K з 24 ядрами та підтримкою технології Turbo Boost.',
            'price' => 9000.00,
            'manufacturer_id' => $intel->id,
            'type' => 'cpu',
            'image' => 'images/products/intel_i9_13900k.jpg',
        ]);

        Product::create([
            'name' => 'AMD Ryzen 9 7950X',
            'description' => 'Процесор AMD Ryzen 9 7950X з 16 ядрами для потужних робочих станцій.',
            'price' => 8500.00,
            'manufacturer_id' => $amd->id,
            'type' => 'cpu',
            'image' => 'images/products/amd_ryzen_7950x.jpg',
        ]);

        Product::create([
            'name' => 'NVIDIA GeForce RTX 4090',
            'description' => 'Відеокарта NVIDIA GeForce RTX 4090 для максимального ігрового досвіду.',
            'price' => 25000.00,
            'manufacturer_id' => $nvidia->id,
            'type' => 'gpu',
            'image' => 'images/products/nvidia_rtx_4090.jpg',
        ]);

        Product::create([
            'name' => 'ASUS ROG Strix B550-F',
            'description' => 'Материнська плата ASUS ROG Strix B550-F для платформ AMD Ryzen.',
            'price' => 3500.00,
            'manufacturer_id' => $asus->id,
            'type' => 'motherboard',
            'image' => 'images/products/asus_rog_b550f.jpg',
        ]);

        Product::create([
            'name' => 'Gigabyte Z690 AORUS ELITE',
            'description' => 'Материнська плата Gigabyte Z690 AORUS ELITE для процесорів Intel 12-го покоління.',
            'price' => 4500.00,
            'manufacturer_id' => $gigabyte->id,
            'type' => 'motherboard',
            'image' => 'images/products/gigabyte_z690_aorus.jpg',
        ]);
    }
}
