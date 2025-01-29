<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
class UserController extends Controller
{
    public function index()
    {
        return Inertia::render(component: 'Users/Index');
    }

    public function create()
    {
        return Inertia::render('Users/Create', [
            'genders' => User::genders(),
            'documentTypes' => User::typeDocument(),
            'statuses' => User::status(),
        ]);
    }

    public function store(Request $request)
    {
        dd($request);
        return Inertia::render('Users/Index');
    }

    public function edit(User $user,Request $request)
    {
        return Inertia::render(component: 'Users/Edit');
    }

    public function update(User $user,Request $request)
    {
        return Inertia::render('Users/Create');
    }

    public function destroy()
    {
        return Inertia::render('Users/Create');
    }
}
