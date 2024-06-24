<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('archived_chats', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('archived_by');
            $table->uuidMorphs('from');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('archived_by')
                ->references('id')
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('archived_chats');
    }
};
