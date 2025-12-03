<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use App\Models\Dana;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BankController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bank = Bank::all();
        return view('backoffice.deposit_bank.deposit_bank', [
            'bank' => $bank

        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Dashboard.DANA.create', []);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validateData = $request->validate([
            'nama_bank' => 'required|max:255',
            'no_rek' => 'required|max:255',
            'nama_penerima' => 'required|max:255',
            'image_qr' => 'image|file|max:2024',

        ]);

        if ($request->file('image_qr')) {
            $validateData['image_qr'] = $request->file('image_qr')->store('post-images');
        }

        $validateData['status'] = 1;
        Bank::create($validateData);

        return redirect('/Admin/Dashboard/Manage-Bank')->with('success', 'Bank has been added!!');
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, string $id)
    {
        $bank = Bank::find($id);
        if ($request->status != null) {
            $bank->status = $request->status;
        } else {
            $bank->nama_bank = $request->nama_bank;
            $bank->nama_penerima = $request->nama_penerima;
            $bank->no_rek = $request->no_rek;
        }

        if ($request->hasFile('image_qr')) {
            $bank->image_qr = $request->file('image_qr')->store('post-images');
        }
        $bank->save();
        return redirect()->back()->with('success', 'Data Berhasil Diubah');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dana $DANA)
    {
        Dana::destroy($DANA->id);
        return redirect('/Admin/Dashboard/Manage-Bank/Accounts/DANA')->with('success', 'Bank has been deleted!!');
    }
}
