<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Manufacturer;

class ManufacturerSeeder extends Seeder
{
    public function run()
    {
        $manufacturers = [
            'Intel', 'AMD', 'NVIDIA', 'ASUS', 'Gigabyte',
        ];

        foreach ($manufacturers as $name) {
            Manufacturer::firstOrCreate(['name' => $name]);
        }
    }
}
