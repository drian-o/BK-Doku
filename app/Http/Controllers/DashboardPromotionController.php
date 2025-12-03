<?php

namespace App\Http\Controllers;

use App\Models\Promotion;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class DashboardPromotionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Promotion = Promotion::latest()->get();
        return view('backoffice.promosi.promosi', [

            'promotions' => $Promotion
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Dashboard.Promotion.create', []);
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
            'title' => 'required|max:255',
            'keterangan' => 'required|max:255',
            'bonus' => 'required',
            'jenis_pemberian' => 'required|max:255',
            'jenis_promosi' => 'required|max:25',
            'min_deposite' => 'required',
            'max_deposite' => 'required',
            'tanggal_mulai' => 'required',
            'tanggal_akhir' => 'required',
            'turnover' => 'required',
            'img' => 'image|file|mimes:jpeg,png,webp,jpg|max:5050',
            'body' => 'required'
        ]);

        if ($request->file('img')) {
            $validateData['img'] = $request->file('img')->store('post-images');
        }

        $validateData['user_id'] = auth()->User()->id;
        $validateData['status'] = 'aktif';
        $validateData['tanggal_mulai'] = $request->tanggal_mulai;
        $validateData['tanggal_akhir'] = $request->tanggal_akhir;
        Promotion::create($validateData);

        return redirect('/Admin/Dashboard/Promotion')->with('success', 'Promotion has been added!!');
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
        $Promotion = Promotion::findOrFail($id);
        return view('Dashboard.Promotion.edit', [

            'Promotion' => $Promotion

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
       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Promotion $Promotion)
    {
        Promotion::destroy($Promotion->id);
        if ($Promotion->img) {
            Storage::delete($Promotion->img);
        }
        Promotion::destroy($Promotion->id);
        return redirect('/Admin/Dashboard/Promotion')->with('success', 'New Posts has been deleted!!');
    }

    public function getPromotions()
    {
        try {
            // Mengambil semua data promosi dari database
            $promotions = Promotion::all();

            // Mengembalikan data promosi dalam bentuk JSON
            return response()->json(['promotions' => $promotions], 200);
        } catch (\Exception $e) {
            // Jika terjadi kesalahan, mengembalikan pesan error
            return response()->json(['error' => 'Failed to fetch promotions.'], 500);
        }
    }
}
