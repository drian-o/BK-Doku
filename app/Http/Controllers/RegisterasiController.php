<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\User;
use App\Models\Banner;
use App\Models\Setting;
use Illuminate\Support\Str;
use App\Http\API\softgaming;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;


class RegisterasiController extends Controller
{
    public function index()
    {
        $banner = Banner::all();
        $setting = Setting::orderBY('created_at', 'DESC')->first();
        return view('layout.mobile.registerasi', compact('setting', 'banner'));
    }

    public function loadReferral(Request $request)
    {
        $setting = Setting::orderBy('created_at', 'DESC')->first();

        if (isset($request->ref)) {
            $referral = $request->ref;
            $user = User::where('ref', $referral)->get();

            if ($user->count() > 0) {
                return view('layout.mobile.registerasi', compact('referral', 'setting'));
            } else {
                return view('404');
            }
        } else {
            return back()->with('info', 'Invalid referral code');
        }
    }

    public function registerasi(Request $request)
    {
        $refferalcode = Str::random(6);
        $domain = URL::to('/');
        $Url = $domain . '/referral-register?ref=' . $refferalcode;

        // Validasi input
        $request->validate([
            'username' => 'required|unique:users|regex:/^[0-9a-zA-Z]{3,12}$/',
            'password' => 'required|min:8|max:20|regex:/^(?=.*[a-z])(?=.*[0-9]).*$/|confirmed',
            'email' => 'required|email|unique:users',
            'phone' => 'required',
            'accNumber' => 'required',
            'accName' => 'required|regex:/^[0-9a-zA-Z ]*$/',
            'bank' => 'required',
            'country' => 'required',
            'informasi' => 'required',
            'whatsapp' => 'required',
        ], [
            'username.regex' => 'Nama pengguna harus terdiri dari 3-12 karakter alfanumerik tanpa spasi.',
            'password.regex' => 'Password harus terdiri dari 8-20 karakter, mengandung huruf dan angka.',
        ]);

        $SG = new fiver();
        $extplayer = $request->username . mt_rand(100, 1000);
        $act = json_decode($SG->create($extplayer));


        if ($act->msg == 'SUCCESS') {
            $user = new User();
            $user->username = $request->username;
            $user->password = Hash::make($request->password);
            $user->password_confirmation = $request->password;
            $user->email = $request->email;
            $user->phone = $request->phone;
            $user->whatsapp = $request->whatsapp;
            $user->bank = $request->bank;
            $user->accName = $request->accName;
            $user->accNumber = $request->accNumber;
            $user->informasi = $request->informasi;
            $user->pembayaran = $request->pembayaran;
            $user->country = $request->country;
            $user->extplayer = $extplayer;
            $user->saldo = 0;
            $user->level = 'New Player';
            $user->captcha = NULL;
            $user->ref = $refferalcode;
            $user->ref_link = $Url;
            $user->save();

            if ($request->ref) {
                $referrer = User::where('ref', $request->ref)->first();
                if ($referrer) {
                    DB::table('networks')->insert([
                        'ref' => $request->ref,
                        'user_id' => $user->id,
                        'parent_id' => $referrer->id,
                        'username' => $request->username,
                        'created_at' => now(),
                        'updated_at' => now()
                    ]);
                }
            }

            return redirect('/')->with('success', 'Registrasi Berhasil. Silahkan Login');
        }

        return back()->with('error', 'Registrasi Gagal. Silahkan coba lagi.')->withInput();
    }
}
