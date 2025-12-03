<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\Setting;
use App\Models\Transaksi;
use App\Http\API\softgaming;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;

class MessageController extends Controller
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
        $transaksi = Transaksi::where('user_id', auth()->user()->id)
            ->whereDate('created_at', Carbon::today())
            ->whereIn('type', [1, 2])
            ->get();

        $deposit = Transaksi::orderBy('created_at', 'DESC')
            ->where('user_id', Auth()->user()->id)
            ->where('type', 1)
            ->whereIn('status_id', [1, 2, 3])
            ->first();
        if ($deposit) {
            $depositAmount = $deposit->amount;
            $x = number_format($depositAmount, 2, ',', '.');
            $damount = substr_replace($x, '', -4);
        } else {

            $damount = 'N/A';
        }


        $withdraw =
            Transaksi::orderBy('created_at', 'DESC')
            ->where('user_id', Auth()->user()->id)
            ->where('type', 2)
            ->whereIn('status_id', [1, 2, 3])
            ->first();

        if ($withdraw) {
            $withdrawAmount = $withdraw->amount;
            $skuy = number_format($withdrawAmount, 2, ',', '.');
            $wamount = substr_replace($skuy, '', -4);
        } else {

            $wamount = 'N/A';
        }

        $setting = Setting::orderBY('created_at', 'DESC')->first();
        return view('message', compact('transaksi', 'balance', 'setting', 'wamount', 'damount'));
    }

    public function show($id)
    {
        $transaksi = Transaksi::find($id);
        if ($transaksi) {
            $transaksi->notes = 'read';
            $transaksi->save();
        }

        $SG = new fiver();
        $act = json_decode($SG->userbalance(auth()->user()->extplayer));
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

        $deposit = Transaksi::orderBy('created_at', 'DESC')
            ->where('user_id', Auth()->user()->id)
            ->where('type', 1)
            ->whereIn('status_id', [1, 2, 3])
            ->first();
        if ($deposit) {
            $depositAmount = $deposit->amount;
            $x = number_format($depositAmount, 2, ',', '.');
            $damount = substr_replace($x, '', -4);
        } else {
            $damount = 'N/A';
        }

        $withdraw = Transaksi::orderBy('created_at', 'DESC')
            ->where('user_id', Auth()->user()->id)
            ->where('type', 2)
            ->whereIn('status_id', [1, 2, 3])
            ->first();

        if ($withdraw) {
            $withdrawAmount = $withdraw->amount;
            $skuy = number_format($withdrawAmount, 2, ',', '.');
            $wamount = substr_replace($skuy, '', -4);
        } else {
            $wamount = 'N/A';
        }

        $setting = Setting::orderBY('created_at', 'DESC')->first();
        return view('show_message', compact('transaksi', 'balance', 'setting', 'wamount', 'damount'));
    }
}
