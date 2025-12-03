<?php

namespace App\Http\Controllers;

use App\Models\Network;
use App\Models\Verifikasi;
use Illuminate\Http\Request;

class KycController extends Controller
{
    public function index()
    {
        $verifikasi = Verifikasi::orderBy('created_at', 'DESC')->where('status', 'menunggu')->get();
        // return response()->json($verifikasi);
        return view('backoffice.kyc.kyc', compact('verifikasi'));
    }

    public function updateStatus(Request $request, $id)
    {

        $verifikasi = Verifikasi::findOrFail($id);

        if ($request->action === 'acc') {
            $verifikasi->status = 'verifikasi';
        } elseif ($request->action === 'tolak') {
            $verifikasi->status = 'ditolak';
        }

        $verifikasi->save();
        return redirect()->back()->with('success', 'KYC status updated successfully.');
    }
}
