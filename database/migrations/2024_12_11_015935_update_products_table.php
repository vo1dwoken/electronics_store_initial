<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->string('memory_capacity')->nullable(); // Кількість пам'яті
            $table->boolean('has_lighting')->default(false); // Підсвітка
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('memory_capacity'); // Видалення стовпця 'memory_capacity'
            $table->dropColumn('has_lighting'); // Видалення стовпця 'has_lighting'
        });
    }
};
