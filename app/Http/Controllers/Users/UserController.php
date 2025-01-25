<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Users/Index');
    }
}
