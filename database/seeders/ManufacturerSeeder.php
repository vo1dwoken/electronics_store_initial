<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Manufacturer;

class ManufacturerSeeder extends Seeder
{
    public function run()
    {
        Manufacturer::create([
            'name' => 'Intel',
        ]);

        Manufacturer::create([
            'name' => 'AMD',
        ]);

        Manufacturer::create([
            'name' => 'NVIDIA',
        ]);

        Manufacturer::create([
            'name' => 'ASUS',
        ]);

        Manufacturer::create([
            'name' => 'Gigabyte',
        ]);
    }
}
