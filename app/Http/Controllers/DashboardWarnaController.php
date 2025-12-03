<?php

namespace App\Http\Controllers;

use App\Models\Warna;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardWarnaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $warna = Warna::latest()->get();
        return view('Dashboard.Warna.index', [
            'warna' => $warna,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('Dashboard.Warna.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'style' => 'required|max:15',
        ]);

        $validateData['custom'] = $request->style;
        $validateData['global'] = $request->style;

        Warna::create($validateData);

        return redirect('/Admin/Dashboard/Warna')->with('success', 'Promotion has been added!!');
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $warna = Warna::find($id);
        Warna::destroy($warna->id);
        return redirect('/Admin/Dashboard/Warna')->with('success', 'New Posts has been deleted!!');
    }
}
