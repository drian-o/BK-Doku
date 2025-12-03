<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\User;
use App\Models\Setting;
use App\Models\Voucher;
use App\Models\Freechip;
use App\Http\API\softgaming;
use App\Http\Controllers\Controller;

class LoyalitasController extends Controller
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


        $claimedVoucherIds = Freechip::where('user_id', Auth()->user()->id)
            ->pluck('voucher_id')->toArray();


        $voucher = Voucher::whereNotIn('id', $claimedVoucherIds)->get();

        $setting = Setting::orderBy('created_at', 'DESC')->first();

        return view('loyalitas', compact('setting', 'balance', 'voucher'));
    }

    public function claimVoucher($voucherId)
    {

        $user = User::where('id', Auth()->user()->id)->first();


        $existingClaim = Freechip::where('user_id', $user->id)
            ->where('voucher_id', $voucherId)
            ->where('used', 1)
            ->first();

        if ($existingClaim) {
            return redirect()->back()->with('info', 'Bonus ini sudah pernah diklaim');
        }


        $voucher = Voucher::find($voucherId);


        if ($user->exp_player < $voucher->exp) {
            return redirect()->back()->with('info', 'Maaf, Exp Kamu Tidak Memenuhi Persyaratan Klaim');
        }


        $user->point_player = $user->point_player - $voucher->exp;
        $user->save();

        $SG = new fiver();
        $act = json_decode($SG->deposit($user->extplayer, $voucher->nominal));


        if ($act->msg == 'SUCCESS') {

            Freechip::create([
                'user_id' => $user->id,
                'voucher_id' => $voucherId,
                'used' => 1,
                'exp' => $voucher->exp,
                'nominal' => $voucher->nominal,
            ]);
        }

        return redirect('/loyalitas')->with('info', 'Berhasil diklaim');
    }

    public function tarik()
    {
        $nominal = '50000';

        $SG = new softgaming();
        $act = json_decode($SG->transaksi(Auth()->user()->extplayer, 'withdraw', $nominal));
    }
}
