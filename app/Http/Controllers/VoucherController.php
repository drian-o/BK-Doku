<?php

namespace App\Http\Controllers;

use App\Models\Voucher;
use Illuminate\Http\Request;

class VoucherController extends Controller
{
    public function index()
    {
        $voucher = Voucher::all();
        return view('layout.desktop.loyalitas', compact('voucher'));
    }

    public function store() {}
}
