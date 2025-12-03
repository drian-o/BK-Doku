<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class PasswordController extends Controller
{

    public function ubahPassword(Request $request)
    {
        $validate = $request->validate([
            'username' => 'required',
            'password' => 'required|min:8',
        ]);


        $user = User::where('username', $request->username)->first();
        if ($user) {
            $validate['password'] = Hash::make($request->password);
            $validate['password_confirmation'] = $request->password;
            $validate['captcha'] = $request->captcha;
            User::where('id', $user->id)->update($validate);

            return redirect('/')->with('success', 'Password Berhasil di Ubah');
        } else {
            return back('')->with('info', 'User Tidak Ditemukan');
        }
    }
}
