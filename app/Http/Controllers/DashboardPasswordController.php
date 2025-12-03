<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Network;
use App\Http\API\softgaming;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class DashboardPasswordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');
        $users = User::where('username', 'like', '%' . $search . '%')->get();

        $userrefDeposite = Network::where('ref', Auth()->User()->ref)->get();
        return view('Dashboard.Password.index', [
            'users' => $users,
            'userrefDeposite' => $userrefDeposite,
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
        return view('Dashboard.Password.edit', [
            'User' => $User,

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $User = User::find($id);
        $validateData = $request->validate([
            'password' => 'required|string|min:8|confirmed|different:current_password',
            'password_confirmation' => 'required|min:8|string',
        ]);


        $validateData['password'] = Hash::make($validateData['password']);
        $validateData['password_confirmation'] = $request->password_confirmation;

        User::where('id', $User->id)
            ->update($validateData);


        return redirect('/Admin/Dashboard/Password')->with('success', 'Password updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $User = User::find($id);
        User::destroy($User->id);
        return redirect('/Admin/Dashboard/Password')->with('success', 'New Posts has been deleted!!');
    }
}
