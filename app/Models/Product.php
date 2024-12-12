<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use IndexZer0\EloquentFiltering\Contracts\IsFilterable;
use IndexZer0\EloquentFiltering\Filter\Contracts\AllowedFilterList;
use IndexZer0\EloquentFiltering\Filter\Filterable\Filter;
use IndexZer0\EloquentFiltering\Filter\FilterType;
use IndexZer0\EloquentFiltering\Filter\Traits\Filterable;

class Product extends Model implements IsFilterable
{
    use HasFactory, Filterable;

    protected $fillable = [
        'name',
        'description',
        'price',
        'manufacturer_id',
        'type',
        'memory_capacity',
        'has_lighting',
        'image',
    ];

    public function allowedFilters(): AllowedFilterList
    {
        return Filter::only(
            Filter::field('price', [FilterType::GREATER_THAN, FilterType::LESS_THAN]),
            Filter::field('manufacturer_id', [FilterType::EQUAL]),
            Filter::field('type', [FilterType::EQUAL]),
            Filter::relation('cpus', [FilterType::HAS])->includeRelationFields(),
            Filter::relation('motherboards', [FilterType::HAS])->includeRelationFields(),
            Filter::relation('gpus', [FilterType::HAS])->includeRelationFields(),
            Filter::relation('drives', [FilterType::HAS])->includeRelationFields(),
            Filter::field('memory_capacity', [FilterType::GREATER_THAN, FilterType::LESS_THAN]),
            Filter::field('has_lighting', [FilterType::EQUAL]),
        );
    }

    public function manufacturer()
    {
        return $this->belongsTo(Manufacturer::class);
    }

    public function cpus()
    {
        return $this->hasMany(Cpu::class);
    }

    public function motherboards()
    {
        return $this->hasMany(Motherboard::class);
    }

    public function gpus()
    {
        return $this->hasMany(Gpu::class);
    }

    public function drives()
    {
        return $this->hasMany(Drive::class);
    }
}
