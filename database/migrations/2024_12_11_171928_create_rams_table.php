<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('rams', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->integer('frequency');
            $table->integer('module_count');
            $table->decimal('voltage', 4, 2);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('rams');
    }
};
