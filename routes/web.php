<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Users\UserController;
use App\Http\Controllers\Users\DataTables\DataTableController as DtUser;
use Yajra\DataTables\Contracts\DataTable;

Route::get('/', function () {
    if(Auth::id()){
        return Inertia::render('Dashboard')->middleware(['auth', 'verified'])->name('dashboard');
    }else{
        return Inertia::render('Welcome', [
            'canLogin' => Route::has( 'login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix('users')
    ->name('users.')
    ->controller(UserController::class)
    ->group(function () {
        Route::get('index','index')->name('index');
        Route::get('create', 'create')->name('create');
        Route::post('store','store')->name('store');
        Route::get('edit/{user}','edit')->name('edit');
        Route::put('update/{user}','update')->name('update');
    });

    Route::prefix('datatables')
    ->name('datatable.')
    ->group(function () {
        Route::get('users', [DtUser::class, 'users'])->name('users');
    });
});


require __DIR__.'/auth.php';
