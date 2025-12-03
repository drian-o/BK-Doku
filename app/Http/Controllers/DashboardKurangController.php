<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\API\whitelabel;
use App\Http\API\softgaming;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Network;

class DashboardKurangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->input('search');
        $users = User::where('username', 'like', '%' . $search . '%')->get();
        $userrefDeposite = Network::where('ref', Auth()->User()->ref)->get();

        return view('Dashboard.Kurang.index', [
            'users' => $users,
            'userrefDeposite' => $userrefDeposite,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id)
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
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

        $User = User::findOrFail($id);
        return view('Dashboard.Kurang.edit', [
            'User' => $User
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
        $User = User::findorFail($id);


        $SG1 = new softgaming();
        $act1 = json_decode($SG1->transaksi($User->extplayer, 'withdraw', $request->saldo), true);


        if ($act1['status'] == 'success') {

            $SG2 = new softgaming();
            $act2 = json_decode($SG2->userbalance(Auth()->User()->extplayer, true));
            $agent2 = $act2->user;

            $balance2 = $agent2->balance;
            $validateData['saldo'] = $balance2;


            User::where('id', $User->id)
                ->update($validateData);
        }

        $validateData['saldo'] = $User->saldo + $request->saldo;


        User::where('id', $User->id)
            ->update($validateData);

        return redirect('/Admin/Dashboard/Kurang')->with('success', 'Saldo Berhasil Dikurang!!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $User)
    {
        User::destroy($User->id);
        return redirect('/Admin/Dashboard/Kurang')->with('success', 'New Posts has been deleted!!');
    }
}
