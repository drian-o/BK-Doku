<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Http\API\softgaming;
use App\Models\User;
use App\Models\Saldo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::all();
        return view('backoffice.data_member.inject', compact('user'));
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'saldo' => 'required|numeric',
            'action' => 'required|in:deposit,withdraw',
            'deposit' => 'nullable|numeric',
            'withdraw' => 'nullable|numeric',
        ]);

        // Mengambil nilai saldo dari form
        $saldo = intval($request->input('saldo'));

        // Memproses tindakan sesuai dengan yang dipilih
        if ($request->input('action') == 'deposit') {
            $SG = new fiver();
            $act = json_decode($SG->deposit($user->extplayer, $saldo));
            if ($act->msg == 'SUCCESS') {
                $user->saldo = $user->saldo + $saldo;
                $user->save();
            } else {
                return redirect()->back()->with('error', 'Tindakan tidak valid.');
            }
        } elseif ($request->input('action') == 'withdraw') {
            $SG = new fiver();
            $act = json_decode($SG->withdraw($user->extplayer, $saldo));
            if ($act->msg == 'SUCCESS') {
                $user->saldo = $user->saldo - $saldo;
                $user->save();
            } else {
                return redirect()->back()->with('error', 'Tindakan tidak valid.');
            }
        } else {
            return redirect()->back()->with('error', 'Tindakan tidak valid.');
        }

        return redirect()->back()->with('success', 'Saldo berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
