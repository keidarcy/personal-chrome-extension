<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth.shopify'])->group(function () {
    Route::view('/{path?}', 'app');
    Route::view('{query}', 'app')->where('query', '.*');
    Route::view('/', 'app');
});
