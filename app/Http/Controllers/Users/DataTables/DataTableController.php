<?php

namespace App\Http\Controllers\Users\DataTables;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\User;
use Yajra\DataTables\Facades\DataTables;


class DataTableController extends Controller
{
    public function users(Request $request)
    {
        $users = User::query();

        return DataTables::of($users)->make(true);
    }
}
