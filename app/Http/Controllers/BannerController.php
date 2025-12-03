<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Banner = Banner::all();
        return view('backoffice.banner.banner', ['Banner' => $Banner]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('Dashboard.Banner.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([

            'img' => 'image|file|mimes:jpeg,png,webp,jpg|max:4048',
            'Judul' => 'required'

        ]);

        if ($request->file('img')) {
            $validateData['img'] = $request->file('img')->store('post-images');
        }
        $validateData['status'] = 1;

        Banner::create($validateData);

        return redirect('/Admin/Dashboard/Banner')->with('success', 'Banner has been added!!');
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
        $Banner = Banner::find($id);
        return view('Dashboard.Banner.edit', ['Banner' => $Banner]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $Banner = Banner::find($id);
        if ($request->status != null) {
            $Banner->status = $request->status;
        } else {
            $Banner->Judul = $request->Judul;
            if ($request->hasFile('img')) {
                $Banner->img = $request->file('img')->store('post-images');
            }
        }
        $Banner->save();

        return redirect('/Admin/Dashboard/Banner')->with('success', 'Banner has been Updated!!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $Banner = Banner::find($id);
        if ($Banner->img) {
            Storage::delete($Banner->img);
        }
        Banner::destroy($Banner->id);
        return redirect('/Admin/Dashboard/Banner')->with('success', 'Banner has been deleted!!');
    }
}
