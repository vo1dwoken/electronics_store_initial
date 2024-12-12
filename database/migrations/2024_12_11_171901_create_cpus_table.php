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
        Schema::create('cpus', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->string('socket');
            $table->string('series');
            $table->boolean('has_integrated_graphics');
            $table->integer('core_count');
            $table->string('memory_type');
            $table->string('architecture');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('cpus');
    }
};
