<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\User;
use App\Models\Network;
use App\Models\Setting;
use App\Models\Transaksi;
use App\Models\Verifikasi;
use Endroid\QrCode\QrCode;
use App\Http\API\softgaming;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Endroid\QrCode\Writer\PngWriter;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class RefferalController extends Controller
{
    public function index()
    {

        $SG = new fiver();
        $act = json_decode($SG->userbalance(Auth()->user()->extplayer));
        $agent = $act->user;
        $hiddenBalance = $agent->balance;
        if ($hiddenBalance == 0) {
            $balance = '0,00';
        } else {
            if ($hiddenBalance < 1000 && $hiddenBalance > 0) {
                $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                $balance = '0' . '.' . substr_replace($formattedBalance, '', -4);
            } else {
                $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                $balance = substr_replace($formattedBalance, '', -4);
            }
        }
        $verifikasi = Verifikasi::where('user_id', Auth()->user()->id)
            ->where('status', 'verifikasi')
            ->first();
        $setting = Setting::orderBY('created_at', 'DESC')->first();
        return view('referral', compact('setting', 'balance', 'verifikasi'));
    }

    public function reffVerif()
    {

        $SG = new fiver();
        $act = json_decode($SG->userbalance(Auth()->user()->extplayer));
        $agent = $act->user;
        $hiddenBalance = $agent->balance;
        if ($hiddenBalance == 0) {
            $balance = '0,00';
        } else {
            if ($hiddenBalance < 1000 && $hiddenBalance > 0) {
                $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                $balance = '0' . '.' . substr_replace($formattedBalance, '', -4);
            } else {
                $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                $balance = substr_replace($formattedBalance, '', -4);
            }
        }
        $setting = Setting::orderBY('created_at', 'DESC')->first();
        return view('refferal_verif', compact('setting', 'balance'));
    }
    public function submitReferralVerification(Request $request)
    {
        $user = Auth::user();
        $qrCodeContent = strval($user->ref);

        $validateData = $request->validate([
            'fullName' => 'required|max:100|regex:/^[0-9a-zA-Z ]*$/',
            'img' => 'required|mimes:png,jpeg,jpg|max:5120',
            'terms' => 'required|accepted',
        ]);

        if ($request->file('img')) {
            $validateData['img'] = $request->file('img')->store('post-images');
        }

        $qrCode = new QrCode($qrCodeContent);
        $writer = new PngWriter();
        $qrCodeData = $writer->write($qrCode);

        $filename = 'qrcode_' . $user->id . '_' . time() . '.png';
        $barcodePath = 'post-images/' . $filename;

        $saved = Storage::put($barcodePath, $qrCodeData->getString());

        if ($saved) {
            $validateData['barcode'] = $barcodePath;
        } else {
            return redirect()->back()->withErrors(['msg' => 'Failed to save QR code image.']);
        }
        $validateData['user_id'] = $user->id;
        $validateData['status'] = 'menunggu';

        Verifikasi::create($validateData);

        return redirect()->back()->with('success', 'Verifikasi referral berhasil.');
    }


    public function getReferralData(Request $request)
    {

        $childReferrals = Network::where('parent_id', Auth()->user()->id)->count();

        $transactions = Transaksi::where('ref', Auth()->user()->ref)
            ->where('amount', '>=', 50000)
            ->where('type', 1)
            ->where('status_id', 2)
            ->get();

        if ($transactions->isEmpty()) {
            $totalEarnings = 0;
            $lastEarning = 0;
        } else {
            $totalEarnings = $transactions->sum(function ($transaction) {
                return $transaction->amount * 0.02;
            });

            $lastTransaction = $transactions->last();
            $lastEarning = $lastTransaction ? $lastTransaction->amount * 0.02 : 0;
        }

        $formattedTotalEarnings = number_format($totalEarnings, 2, ',', '.');
        $totalEarnings = substr_replace($formattedTotalEarnings, '', -3);

        $formattedLastEarning = number_format($lastEarning, 2, ',', '.');
        $lastEarning = substr_replace($formattedLastEarning, '', -3);

        return response()->json([
            'child_referrals' => $childReferrals,
            'total_earnings' => $totalEarnings,
            'last_earning' => $lastEarning,
        ]);
    }

    public function getReferralDetails()
    {
        $currentUserId = Auth()->user()->id;
        $networkChildren = Network::where('parent_id', $currentUserId)->get();

        $data = $networkChildren->map(function ($network) {
            $childUser = User::find($network->user_id);
            $totalDeposit = Transaksi::where('user_id', $network->user_id)->where('type', 1)->where('status_id', 2)->sum('amount');
            $lastTransaction = Transaksi::where('user_id', $network->user_id)
                ->where('type', 1)->where('status_id', 2)
                ->orderBy('created_at', 'desc')
                ->first();

            $bonus = $lastTransaction ? $lastTransaction->amount * 0.02 : 0;

            $joinDate = $childUser->created_at->format('d-m-Y');

            return [
                'name' => $childUser->username,
                'parent_ref' => $network->ref,
                'total_deposit' => number_format($totalDeposit, 2, ',', '.'),
                'bonus' => number_format($bonus, 2, ',', '.'),
                'join_date' => $joinDate,
            ];
        });

        return response()->json($data);
    }
}
