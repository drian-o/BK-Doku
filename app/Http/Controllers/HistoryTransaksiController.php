<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use App\Models\Deposite;
use App\Models\Withdraw;
use App\Models\Transaksi;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HistoryTransaksiController extends Controller
{

    public function index()
    {
        $deposits = Transaksi::orderBy('created_at', 'DESC')
            ->whereIn('status_id', [2, 3])
            ->where('type', 1)
            ->get();
        return view('backoffice.histori_transaksi.histori_transaksi', compact('deposits'));
    }

    public function getDepositHistory()
    {
        // Fetch deposit transactions from the database
        $deposits = Transaksi::orderBy('created_at', 'DESC')
            ->whereIn('status_id', [2, 3])
            ->where('type', 1)
            ->get();

        // Return JSON response
        return response()->json($deposits);
    }

    public function getWithdrawHistory()
    {
        // Fetch withdraw transactions from the database
        $withdraws  = Transaksi::orderBy('created_at', 'DESC')
            ->whereIn('status_id', [2, 3])
            ->where('type', 2)
            ->get();

        // Return JSON response
        return response()->json($withdraws);
    }

    public function getBankName(Request $request)
    {
        $transaksi = Transaksi::where('status_id', 2)
            ->where('type', 2)
            ->get();
        $bankId = $transaksi->bank_id;
        $bank = Bank::find($bankId);
        if ($bank) {
            return response()->json(['bank_name' => $bank->nama_penerima]);
        } else {
            return response()->json(['bank_name' => null]);
        }
    }
}
