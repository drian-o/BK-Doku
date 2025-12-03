<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Http\API\softgaming;
use App\Models\User;
use App\Models\Setting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function index()
    {
        $setting = Setting::orderBY('created_at', 'DESC')->first();
        return view('layout.mobile.login', compact('setting'));
    }

    public function auth(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);
        $User = User::where('username', $request->username)->first();
        if (!$User) {
            return back()->with(['username' => 'User tidak ditemukan.']);
        }

        if (!Hash::check($request->password, $User->password)) {
            return back()->withErrors(['password' => 'Username dan Password tidak sesuai.']);
        }

        if (Auth::attempt($credentials)) {
            $SG = new fiver();
            $act = json_decode($SG->userbalance($User->extplayer));

            if ($act->msg == 'SUCCESS') {
                $request->session()->regenerate();
                return redirect('/');
            } else {
                return back()->with('info', 'Username dan Password Tidak Sesuai');
            }
        }
    }

    public function logout(Request $request)
    {

        Auth::logout();

        $request->session()->invalidate(session());

        $request->session()->regenerateToken();


        return redirect('/');
    }
}
