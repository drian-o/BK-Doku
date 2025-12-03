<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\User;
use App\Models\Network;
use App\Models\Deposite;
use App\Http\API\whitelabel;
use App\Http\API\softgaming;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;



class TambahController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');
        $users = User::where('username', 'like', '%' . $search . '%')->get();


        $userrefDeposite = Network::where('ref', Auth()->User()->ref)->get();

        return view('Dashboard.Tambah.index', [
            'users' => $users,
            'userrefDeposite' => $userrefDeposite,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

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
        $Deposite = Deposite::where('user_id', $id)->where('status_id', 1)->get();

        return view('Dashboard.Tambah.edit', [
            'User' => $User,
            'Deposite' => $Deposite
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $User = User::findorFail($id);


        $SG1 = new fiver();
        $act1 = json_decode($SG1->deposit($User->username, $request->saldo), true);


        if ($act1['msg'] == 'SUCCESS') {

            $SG2 = new fiver();
            $act2 = json_decode($SG2->userbalance(Auth()->User()->username, true));
            $agent2 = $act2->user;

            $balance2 = $agent2->balance;
            $validateData['saldo'] = $balance2;


            User::where('id', $User->id)
                ->update($validateData);
        }

        $validateData['saldo'] = $User->saldo + $request->saldo;


        User::where('id', $User->id)
            ->update($validateData);

        return redirect('/Admin/Dashboard/Tambah')->with('success', 'Saldo Berhasil ditambah!!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $User)
    {
        User::destroy($User->id);
        return redirect('/Admin/Dashboard/Kurang')->with('success', 'New Posts has been deleted!!');
    }
}
