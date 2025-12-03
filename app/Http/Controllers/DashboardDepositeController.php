<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\User;
use App\Models\Network;
use App\Models\Deposite;
use App\Models\Transaksi;
use App\Http\API\softgaming;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;





class DashboardDepositeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $userrefDeposite = Transaksi::orderBy('created_at', 'DESC')->where('status_id', 1)->get();
        $Tranksaksi = Transaksi::orderBy('created_at', 'DESC')->where('status_id', 1)->where('type', 1)->get();
        return view('backoffice.deposit.deposit', [
            'userrefDeposite' => $userrefDeposite,
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
        $Tranksaksi = Deposite::findOrFail($id);
        return view('Dashboard.Deposite.edit', [
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
    //  SOFTGAMING INTEGRASi
    public function update(Request $request, $id)
    {
        $transaksi = Transaksi::findOrFail($id);
        $user = User::findOrFail($transaksi->user_id);
        $amount = $transaksi->amount;

        $request->validate([
            'action' => 'required|in:tolak,acc',
        ]);

        if ($request->input('action') === 'acc') {
            $sg = new fiver();
            $act = json_decode($sg->deposit($user->extplayer, $amount));

            if ($act->msg == 'SUCCESS') {
                $act = json_decode($sg->userbalance($user->extplayer));
                $balance = $act->user->balance;

                $transaksi->update([
                    'status_id' => 2,
                    'notes' => 'unread'
                ]);

                if ($amount >= 50000) {
                    $user->update([
                        'point_player' => $user->point_player + 2500,
                        'saldo' => $balance
                    ]);
                } else {
                    $user->update([
                        'saldo' => $balance
                    ]);
                }
            }
        } else {
            $transaksi->update([
                'status_id' => 3,
                'notes' => 'unread'
            ]);
        }

        return redirect('/Admin/Dashboard/Tranksaksi')->with('success', 'Post has been Updated!!');
    }

    // public function update(Request $request, $id)
    // {
    //     $Tranksaksi = Deposite::findOrFail($id);
    //     $amount =  $Tranksaksi->amount * 1000;
    //     $request->validate([
    //         'action' => 'required|in:tolak,acc',
    //     ]);

    //     if ($request->input('action') === 'acc') {

    //         Deposite::where('id', $Tranksaksi->id)
    //             ->update([
    //                 'status_id' => 2
    //             ]);

    //         User::where('id', $Tranksaksi->user_id)
    //             ->update([
    //                 'saldo' => Auth()->User()->saldo + $amount
    //             ]);
    //     } else {

    //         Deposite::where('id', $Tranksaksi->id)
    //             ->update([
    //                 'status_id' => 3
    //             ]);
    //     }


    //     return redirect('/Admin/Dashboard/Tranksaksi')->with('success', 'Post has been Updated!!');
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Tranksaksi = Deposite::find($id);

        if ($Tranksaksi->img) {
            Storage::delete($Tranksaksi->img);
        }
        Deposite::destroy($Tranksaksi->id);
        return redirect('/Admin/Dashboard/Tranksaksi')->with('success', 'New Posts has been deleted!!');
    }
}
