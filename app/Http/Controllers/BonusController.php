<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\User;
use App\Models\Klaim;
use App\Models\Setting;
use App\Models\Promotion;
use App\Http\API\softgaming;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;

class BonusController extends Controller
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
        $claimedPromotionIds = Klaim::where('user_id', Auth()->user()->id)->pluck('promo_id')->toArray();
        $promotion = Promotion::all();
        $setting = Setting::orderBY('created_at', 'DESC')->first();
        return view('bonus', compact('setting', 'balance', 'promotion', 'claimedPromotionIds'));
    }



    public function update($id)
    {
        $Promo = Promotion::find($id);
        $User =  Auth()->User()->id;
        $Klaim = Klaim::where('user_id', Auth()->User()->id)->where('used_promo', '1')->first();

        $SG = new fiver();
        $act = json_decode($SG->userbalance(Auth()->User()->extplayer));
        $agent = $act->user;

        $hiddenBalance = $agent->balance;

        if ($hiddenBalance < $Promo->min_deposite) {
            return back()->with('info', 'Saldo Anda Tidak  Mencukupi Untuk Mengambil Promo Ini');
        }

        if ($Klaim) {
            return back()->with('info', 'Promo  hanya bisa diklaim 1x');
        }

        $Percent = $Promo->bonus;
        $Bonus = $hiddenBalance * $Percent / 100;


        $SG4 = new fiver();
        $act4 = json_decode($SG4->deposit(Auth()->User()->extplayer, $Bonus));
        if ($act4->msg == 'SUCCESS') {
            Klaim::create([
                'user_id' => $User,
                'nominal' => $Bonus,
                'promo_id' => $Promo->id,
                'used_promo' => 1
            ]);

            $validateData['saldo'] = $Bonus;
            User::where('id', Auth()->User()->id)
                ->update($validateData);
        }
        return back()->with('success', 'Klaim Bonus Berhasil');
    }

    public function historyKlaim()
    {
        $SG4 = new fiver();
        $act = json_decode($SG4->userbalance(Auth()->user()->extplayer));
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
        return view('history_klaim', compact('setting', 'balance'));
    }


    public function historyKlaims()
    {

        $claimedPromotion = Klaim::where('user_id', Auth()->user()->id)
            ->with('promotion')
            ->first();

        if ($claimedPromotion) {
            $promotion = $claimedPromotion->promotion;

            $createdAt = Carbon::parse($claimedPromotion->created_at);
            $endDate = $createdAt->copy()->addHours(24)->format('Y-m-d H:i:s');

            $promotion->start_date = $createdAt->format('Y-m-d H:i:s');
            $promotion->end_date = $endDate;

            $promotion->amount = $claimedPromotion->nominal;
        } else {
            $promotion = null;
        }

        return response()->json(['promotion' => $promotion]);
    }
}
