<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\Setting;
use App\Models\Transaksi;
use App\Http\API\softgaming;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;

class HistoryDepositController extends Controller
{
    public function index()
    {
        $SG = new fiver();
        $act = json_decode($SG->userbalance(Auth()->user()->extplayer, true));
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
        return view('history_deposit', compact('setting', 'balance'));
    }


    public function getDepositHistory(Request $request)
    {
        $startDate = $request->input('startDate');
        $endDate = $request->input('endDate');

        $Deposits = Transaksi::where('user_id', auth()->user()->id)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->where('type', 1)
            ->orderBy('created_at', 'DESC')
            ->get();

        return response()->json(['data' => $Deposits]);
    }

    public function getTodayDeposit()
    {
        $todayDeposits = Transaksi::where('user_id', auth()->user()->id)
            ->whereDate('created_at', Carbon::today())
            ->where('type', 1)
            ->get();

        return response()->json($todayDeposits);
    }


    public function getUnreadTransactionsCount()
    {
        $userId = auth()->user()->id;


        $unreadDepositsCount = Transaksi::where('user_id', $userId)
            ->where('type', 1)
            ->where('notes', 'unread')
            ->whereIn('status_id', [1, 2, 3])
            ->count();


        $unreadWithdrawsCount = Transaksi::where('user_id', $userId)
            ->where('type', 2)
            ->where('notes', 'unread')
            ->whereIn('status_id', [1, 2, 3])
            ->count();


        $totalUnreadCount = $unreadDepositsCount + $unreadWithdrawsCount;

        return response()->json(['unreadCount' => $totalUnreadCount]);
    }

    public function markAllTransactionsAsRead()
    {
        $userId = auth()->user()->id;


        Transaksi::where('user_id', $userId)
            ->whereIn('type', [1, 2])
            ->whereIn('status_id', [1, 2, 3])
            ->update(['notes' => 'read']);

        return response()->json(['status' => 'success']);
    }

    public function getAllTransaksi()
    {
        $transaksi = Transaksi::where('user_id', auth()->user()->id)
            ->whereDate('created_at', Carbon::today())
            ->whereIn('type', [1, 2])
            ->get();

        return response()->json($transaksi);
    }
}
