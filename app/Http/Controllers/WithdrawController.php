<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\User;
use App\Models\Klaim;
use App\Models\Network;
use App\Models\Setting;
use App\Models\Rekening;
use App\Models\Transaksi;
use App\Http\API\softgaming;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;

class WithdrawController extends Controller
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

        $rekening = Rekening::orderBy('created_at', 'DESC')->where('user_id', Auth()->user()->id)->first();
        $setting = Setting::orderBY('created_at', 'DESC')->first();
        return view('withdraw', compact('setting', 'balance', 'hiddenBalance', 'rekening'));
    }

    public function store(Request $request)
    {
        // Check for existing pending withdrawal
        $existingWithdraw = Transaksi::where('user_id', Auth()->user()->id)
            ->where('type', 2)
            ->where('status_id', 1)
            ->first();

        if ($existingWithdraw) {
            return back()->with('error', 'Tidak Bisa Melakukan Withdraw. Menunggu Withdraw Sebelumnya Diterima!');
        }

        // Check for ongoing claim
        $ongoingClaim = Klaim::where('user_id', Auth()->user()->id)
            ->where('used_promo', '1')
            ->first();

        if ($ongoingClaim) {
            return back()->with('info', 'Tidak bisa melakukan Withdraw. Turnover masih berjalan!');
        }

        // Get user balance
        $SG = new fiver();
        $balanceResponse = json_decode($SG->userbalance(Auth()->user()->extplayer));
        $userBalance = $balanceResponse->user->balance;

        $nominal = $request->amount * 1000;
        $minimalWithdraw = 50000;

        if ($nominal > $userBalance) {
            return back()->with('error', 'Saldo Anda Tidak Mencukupi');
        }

        if ($userBalance < $minimalWithdraw) {
            return back()->with('error', 'Minimal Withdraw RP 50.000,-');
        }


        $withdrawResponse = json_decode($SG->withdraw(Auth()->user()->extplayer, $nominal));

        if ($withdrawResponse->msg == 'SUCCESS') {
            $newBalanceResponse = json_decode($SG->userbalance(Auth()->user()->extplayer));
            $newBalance = $newBalanceResponse->user->balance;


            $validatedData = $request->validate([
                'amount' => 'required',
                'bankMember' => 'required|max:255',
            ]);

            $validatedData['user_id'] = Auth()->user()->id;
            $validatedData['type'] = 2;
            $validatedData['amount'] = $nominal;
            $validatedData['accName'] = Auth()->user()->accName;
            $validatedData['accNumber'] = Auth()->user()->accNumber;
            $validatedData['status_id'] = 1;
            $validatedData['notes'] = 'unread';


            // Check for user referral
            $networkUser = Network::where('user_id', Auth()->user()->id)->first();
            if ($networkUser) {
                $validatedData['ref'] = $networkUser->ref;
            } else {
                $validatedData['ref'] = 'NULL';
            }

            Transaksi::create($validatedData);

            User::where('id', Auth()->user()->id)->update(['saldo' => $newBalance]);

            return redirect('/withdraw')->with('success', 'Withdraw Berhasil. Menunggu Persetujuan Admin');
        }

        return back()->with('error', 'Terjadi kesalahan saat memproses withdraw.');
    }

    public function getWithdrawHistory(Request $request)
    {
        $startDate = $request->input('startDateWithdraw');
        $endDate = $request->input('endDateWithdraw');

        $withdraws = Transaksi::where('user_id', auth()->user()->id)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->where('type', 2)
            ->orderBy('created_at', 'DESC')
            ->get();

        return response()->json(['data' => $withdraws]);
    }

    public function getTodayWithdraw()
    {
        $todayWithdraws = Transaksi::where('user_id', auth()->user()->id)
            ->whereDate('created_at', Carbon::today())
            ->where('type', 2)
            ->orderBy('created_at', 'DESC')
            ->get();

        return response()->json($todayWithdraws);
    }
}
