<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\Game;
use App\Models\User;
use App\Models\Gamer;
use App\Models\Network;
use App\Models\Deposite;
use App\Models\Withdraw;
use App\Models\Transaksi;
use App\Http\API\softgaming;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Carbon;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    // private function searchUsers($users, $searchTerm)
    // {
    //     // Melakukan pencarian berdasarkan nama pengguna
    //     if ($searchTerm) {
    //         return array_filter($users, function ($user) use ($searchTerm) {
    //             return stripos($user->username, $searchTerm) !== false;
    //         });
    //     }

    //     // Jika tidak ada kata kunci pencarian, kembalikan semua pengguna
    //     return $users;
    // }

    public function index(Request $request)
    {
        $search = $request->input('search');
        $User = User::where('username', 'like', '%' . $search . '%')->paginate(10);
        $Deposite = Transaksi::all();
        $totalDeposit = Transaksi::where('status_id', 2)
            ->where('type', 1)
            ->sum('amount');
        $totalWithdraw = Transaksi::where('status_id', 2)
            ->where('type', 2)
            ->sum('amount');
        $totalPendapatan = $totalDeposit - $totalWithdraw;
        $totalUser = User::count();

        $totalref = Network::where('ref', Auth()->User()->ref)->count();
        $totalrefDeposite = Transaksi::where('status_id', 2)
            ->where('type', 1)
            ->where('ref', Auth()->User()->ref)
            ->sum('amount');
        $totalpendingrefDeposite = Transaksi::where('status_id', 1)
            ->where('ref', Auth()->User()->ref)
            ->count();
        $userrefDeposite = Network::where('ref', Auth()->User()->ref)->get();

        $jumlahDepositPending = Transaksi::latest()
            ->where('type', 1)
            ->where('status_id', 1)
            ->count();
        $jumlahWithdrawPending = Transaksi::latest()
            ->where('type', 2)
            ->where('status_id', 1)
            ->count();

        $SG = new fiver();
        $act = json_decode($SG->agentbalance());

        $agentBalance = $act->agent->balance;
        $Game = Game::where('game_category', 'SL')->count();
        return view('backoffice.backoffice', [
            'User' => $User,
            'Deposite' => $Deposite,
            'totalDeposite' => $totalDeposit,
            'totalWithdraw' => $totalWithdraw,
            'totalUser' => $totalUser,
            'pendingDeposite' => $jumlahDepositPending,
            'pendingWithdraw' => $jumlahWithdrawPending,
            'totalPendapatan' => $totalPendapatan,
            'totalref' => $totalref,
            'totalpendingrefDeposite' => $totalpendingrefDeposite,
            'userrefDeposite' => $userrefDeposite,
            'totalrefDeposite' => $totalrefDeposite,
            'agentBalance' => $agentBalance,
            'Game' => $Game

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $User = User::findOrFail($id);
        return view('Dashboard.edit', [
            'User' => $User,

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $User = User::find($id);
        $rules = [

            'bank' => 'required',
            'accNumber' => 'required',
            'accName' => 'required',

        ];

        $validateData = $request->validate($rules);

        User::where('id', $User->id)
            ->update($validateData);

        return redirect('/Admin/Dashboard')->with('success', 'User Bank has been Updated!!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function getDeposit()
    {
        $todayDeposits = Transaksi::whereDate('created_at', Carbon::today())
            ->where('type', 1)
            ->where('status_id', 1)
            ->get();

        return response()->json($todayDeposits);
    }
    
      public function getWithdawDashboard()
    {
        $todayWithdraw = Transaksi::whereDate('created_at', Carbon::today())
            ->where('type', 2)
            ->where('status_id', 1)
            ->get();

        return response()->json($todayWithdraw);
    }
}
