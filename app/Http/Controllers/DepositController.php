<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\Bank;
use App\Models\Banner;
use App\Models\Network;
use App\Models\Setting;
use App\Models\Rekening;
use App\Models\Transaksi;
use App\Http\API\softgaming;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class DepositController extends Controller
{
    public function index()
    {
        if (Auth::check()) {
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

            $bank_deposite = Bank::all();
            $rekening = Rekening::orderBy('created_at', 'DESC')->where('user_id', Auth()->user()->id)->first();
            $banner = Banner::all();
            $setting = Setting::orderBY('created_at', 'DESC')->first();
            return view('deposit', compact('banner', 'setting', 'balance', 'bank_deposite', 'rekening'));
        }
    }
    public function store(Request $request)
    {

        $user = Network::where('user_id', Auth()->user()->id)->first();


        $deposit = Transaksi::where('user_id', Auth()->user()->id)
            ->where('status_id', '1')
            ->where('type', 1)
            ->first();

        if ($deposit) {
            return back()->with('error', 'Tidak Bisa Melakukan Deposit. Menunggu Deposite Sebelumnya Diterima!');
        }


        $validateData = $request->validate([
            'bankMember' => 'required|max:255',
            'amount' => 'required',
            'img' => 'image|file|mimes:jpeg,png,jpg|max:2024',
        ]);


        if ($request->file('img')) {
            $validateData['img'] = $request->file('img')->store('post-images');
        } else {
            $validateData['img'] = NULL;
        }


        $validateData['amount'] = $request->amount * 1000;
        $validateData['user_id'] = Auth()->user()->id;
        $validateData['status_id'] = 1;
        $validateData['type'] = $request->type;
        $validateData['accName'] = Auth()->user()->accName;
        $validateData['notes'] = 'unread';


        if ($user) {
            $validateData['bank_id'] = $request->bank_id;
            $validateData['bank_penerima'] = $request->bank_penerima;
            $validateData['nama_penerima'] = $request->nama_penerima;
            $validateData['nomer_penerima'] = $request->nomer_penerima;
            $validateData['ref'] = $user->ref;
        } else {

            $validateData['bank_id'] = $request->bank_id;
            $validateData['bank_penerima'] = $request->bank_penerima;
            $validateData['nama_penerima'] = $request->nama_penerima;
            $validateData['nomer_penerima'] = $request->nomer_penerima;
            $validateData['ref'] = 'NULL';
        }


        Transaksi::create($validateData);


        return redirect('/deposit')->with('success', 'Deposit Berhasil');
    }
}
