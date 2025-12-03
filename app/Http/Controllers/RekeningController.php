<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Http\API\softgaming;
use App\Models\Setting;
use App\Models\Rekening;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class RekeningController extends Controller
{

    public function index()
    {
        $SG = new fiver();
        $act = json_decode($SG->userbalance(Auth()->user()->extplayer));
        $agent = $act->user;
        $hiddenBalance = $agent->balance;
        if ($hiddenBalance == 0) {
            $balance = '0,00';
        } else {
            if ($hiddenBalance < 1000 && $hiddenBalance > 0) {
                $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                $balance = '0' . '.' . substr_replace($formattedBalance, '', -4);
            } else {
                $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                $balance = substr_replace($formattedBalance, '', -4);
            }
        }
        $setting = Setting::orderBY('created_at', 'DESC')->first();
        $rekening = Rekening::where('user_id', Auth()->user()->id)->first();
        return view('bank_user', compact('rekening', 'balance', 'setting'));
    }

    public function store(Request $request)
    {
        $rekening = Rekening::orderBy('created_at', 'ASC')->where('user_id', Auth()->user()->id)->first();
        if ($rekening) {
            return back()->with('info', 'Bank lain sudah di daftarkan');
        }
        $validator = Validator::make($request->all(), [
            'Bank' => 'required|string',
            'accNumber' => 'required|string|regex:/^[0-9\-]+$/',
            'accName' => 'required|string|regex:/^[0-9a-zA-Z ]*$/',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        // Buat akun bank baru
        Rekening::create([
            'user_id' => Auth()->user()->id,
            'bank' => $request->Bank,
            'accNumber' => $request->accNumber,
            'accName' => $request->accName,
        ]);

        // Redirect dengan pesan sukses
        return redirect()->back()->with('info', 'Akun bank berhasil ditambahkan.');
    }
}
