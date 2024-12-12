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
        Schema::create('gpus', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->string('memory_type');
            $table->integer('bus_width');
            $table->string('input_types');
            $table->string('output_types');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('gpus');
    }
};
