<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\User;
use App\Models\Deposite;
use App\Models\Withdraw;
use App\Models\Transaksi;
use App\Http\API\softgaming;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class DashboardWithdrawController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Tranksaksi = Transaksi::where('type', 2)
            ->where('status_id', 1)->get();
        return view('backoffice.withdraw.withdraw', [
            'Tranksaksi' => $Tranksaksi
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $Tranksaksi = Withdraw::findOrFail($id);
        return view('Dashboard.Withdraw.edit', [
            'Tranksaksi' => $Tranksaksi
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */


    public function update(Request $request, $id)
    {
        $transaksi = Transaksi::findOrFail($id);
        $user = User::findOrFail($transaksi->user_id);
        $amount = $transaksi->amount;

        $request->validate([
            'action' => 'required|in:tolak,acc',
        ]);

        $sg = new fiver();

        if ($request->input('action') === 'tolak') {
            $response = json_decode($sg->deposit($user->extplayer, $amount));

            if ($response->msg === 'SUCCESS') {
                $balanceResponse = json_decode($sg->userbalance($user->extplayer));
                $balance = $balanceResponse->user->balance ?? 0;

                $transaksi->update([
                    'status_id' => 3,
                    'notes' => 'unread',
                ]);

                $user->update([
                    'saldo' => $balance,
                ]);
            } else {
                return redirect('/Admin/Dashboard/Withdraw')->with('error', 'Transaksi gagal.');
            }
        } else {
            $transaksi->update([
                'status_id' => 2,
                'notes' => 'unread',
            ]);
        }

        return redirect('/Admin/Dashboard/Withdraw')->with('success', 'Post has been Updated!!');
    }

    // public function update(Request $request, $id)
    // {
    //     $Tranksaksi = Withdraw::findOrFail($id);
    //     $amount =  $Tranksaksi->amount * 1000;
    //     $request->validate([
    //         'action' => 'required|in:tolak,acc', // Hanya menerima nilai "tolak" atau "acc"
    //     ]);

    //     if ($request->input('action') === 'tolak') {
    //         Withdraw::where('id', $Tranksaksi->id)
    //             ->update([
    //                 'status_id' => 3
    //             ]);

    //         User::where('id', $Tranksaksi->user_id)
    //             ->update([
    //                 'saldo' => Auth()->User()->saldo + $amount
    //             ]);
    //     } else {

    //         Withdraw::where('id', $Tranksaksi->id)
    //             ->update([
    //                 'status_id' => 2
    //             ]);
    //     }

    //     return redirect('/Admin/Dashboard/Withdraw')->with('success', 'Post has been Updated!!');
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Tranksaksi = Withdraw::find($id);

        if ($Tranksaksi->img) {
            Storage::delete($Tranksaksi->img);
        }
        Withdraw::destroy($Tranksaksi->id);
        return redirect('/Admin/Dashboard/Tranksaksi')->with('success', 'New Posts has been deleted!!');
    }
}
