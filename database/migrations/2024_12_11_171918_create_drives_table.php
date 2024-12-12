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
        Schema::create('drives', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->string('drive_type');
            $table->integer('capacity');
            $table->string('interface');
            $table->integer('read_speed');
            $table->integer('write_speed');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('drives');
    }
};
