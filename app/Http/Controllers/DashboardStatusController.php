<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Status = Status::all();
        return view('Dashboard.Status_Tranksaksi.index', [

            'Status' => $Status
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Dashboard.Status_Tranksaksi.create', []);
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

            'status' => 'required'
        ]);



        $validateData['user_id'] = auth()->User()->id;
        Status::create($validateData);

        return redirect('/Admin/Dashboard/Status')->with('success', 'Promotion has been added!!');
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

        $Status = Status::findOrFail($id);
        return view('Dashboard.Status_Tranksaksi.edit', [
            'Status' => $Status
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
        $rules = [

            'status' => 'required'
        ];

        $validateData = $request->validate($rules);



        Status::where('id', $id)
            ->update($validateData);

        return redirect('/Admin/Dashboard/Status')->with('success', 'Post has been Updated!!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Status $Status)
    {

        Status::destroy($Status->id);
        return redirect('/Admin/Dashboard/Status')->with('success', 'New Posts has been deleted!!');
    }
}
