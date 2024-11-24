<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Manufacturer;

class FilterController extends Controller
{
    public function showFilters()
    {
        $manufacturers = Manufacturer::all();
        return Inertia::render('Filters', ['filters' => ['manufacturers' => $manufacturers]]);
    }
}
