<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


Route::get('/{any}', function () {
    return view('app'); // or whatever blade file loads your SPA
})->where('any', '.*');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';


