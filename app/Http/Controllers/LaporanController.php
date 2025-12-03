<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LaporanController extends Controller
{
    public function store(Request $request)
    {
        $validate = $request->validate([
            'feedback' => 'required',
            'pesan' => 'required'
        ]);

        $validate['user_id'] = Auth()->user()->id;

        Laporan::create($validate);
        return back()->with('success', 'Pesan Berhasil Dikirim');
    }
}
