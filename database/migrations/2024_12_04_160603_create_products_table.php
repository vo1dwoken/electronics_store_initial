<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name'); // Назва продукту
            $table->text('description'); // Опис продукту
            $table->decimal('price', 10, 2); // Ціна
            $table->foreignId('manufacturer_id')->constrained('manufacturers')->onDelete('cascade'); // Foreign key
            $table->string('image')->nullable(); // Додати новий стовпець після 'has_lighting'
            $table->string('type'); // Тип продукту (наприклад, CPU, GPU)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
