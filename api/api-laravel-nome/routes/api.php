<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NomeController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// List nomes
Route::get('nomes', [nomeController::class, 'index']);

// List single nome
Route::get('nome/{id}', [nomeController::class, 'show']);

// Create new nome
Route::post('nome', [nomeController::class, 'store']);

// Update nome
Route::put('nome/{id}', [nomeController::class, 'update']);

// Delete nome
Route::delete('nome/{id}', [nomeController::class,'destroy']);
