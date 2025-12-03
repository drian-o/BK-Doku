<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AdminLogoutController extends Controller
{
    public function AdminLogout(Request $request)
    {

        Auth::logout();

        $request->session()->invalidate(session());

        $request->session()->regenerateToken();



        return redirect('/');
    }
}
