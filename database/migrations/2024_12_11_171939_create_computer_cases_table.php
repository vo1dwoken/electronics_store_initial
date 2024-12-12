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
        Schema::create('computer_cases', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->string('case_type');
            $table->string('color');
            $table->string('supported_motherboard_standard');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('computer_cases');
    }
};
