<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\User;
use App\Models\Profile;
use App\Models\Setting;
use App\Models\Rekening;
use App\Models\Transaksi;
use App\Http\API\softgaming;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
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
        $deposit = Transaksi::orderBy('created_at', 'DESC')
            ->where('user_id', Auth()->user()->id)
            ->where('type', 1)
            ->whereIn('status_id', [1, 2, 3])
            ->first();
        if ($deposit) {
            $depositAmount = $deposit->amount;
            $x = number_format($depositAmount, 2, ',', '.');
            $damount = substr_replace($x, '', -4);
        } else {

            $damount = 'N/A';
        }


        $withdraw =
            Transaksi::orderBy('created_at', 'DESC')
            ->where('user_id', Auth()->user()->id)
            ->where('type', 2)
            ->whereIn('status_id', [1, 2, 3])
            ->first();

        if ($withdraw) {
            $withdrawAmount = $withdraw->amount;
            $skuy = number_format($withdrawAmount, 2, ',', '.');
            $wamount = substr_replace($skuy, '', -4);
        } else {

            $wamount = 'N/A';
        }

        $rekening = Rekening::orderBy('created_at', 'DESC')->where('user_id', Auth()->user()->id)->first();
        $setting = Setting::orderBY('created_at', 'DESC')->first();
        return view('profile', compact('setting', 'balance', 'rekening', 'deposit', 'withdraw', 'wamount', 'damount'));
    }

    public function ubahProfile()
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
        $profile = Profile::where('user_id', Auth()->user()->id)->first();
        $setting = Setting::orderBY('created_at', 'DESC')->first();
        return view('edit_profile', compact('setting', 'balance', 'profile'));
    }

    public function update(Request $request)
    {
        $request->validate([
            'FullName' => 'required|string|max:255',
            'Gender' => 'nullable|string|max:1',
            'Address' => 'nullable|string|max:1000',
            'Postcode' => 'nullable|string|max:10',
            'State' => 'nullable|string|max:255',
            'Country' => 'nullable|string|max:255',
            'ContactNo' => 'nullable|string|max:13',
            'Email' => 'nullable|email|max:255',
            'Telegram' => 'nullable|string|max:255',
            'WhatsApp' => 'nullable|string|max:255',
            'WeChat' => 'nullable|string|max:255',
            'Line' => 'nullable|string|max:255',
        ]);

        $profile = Profile::where('user_id', Auth::id())->first();

        if (!$profile) {
            $profile = new Profile();
            $profile->user_id = Auth::id();
        }

        $profile->FullName = $request->input('FullName');
        $profile->Gender = $request->input('Gender');
        $profile->Address = $request->input('Address');
        $profile->Postcode = $request->input('Postcode');
        $profile->State = $request->input('State');
        $profile->Country = $request->input('Country');
        $profile->ContactNo = $request->input('ContactNo');
        $profile->Email = $request->input('Email');
        $profile->Telegram = $request->input('Telegram');
        $profile->WhatsApp = $request->input('WhatsApp');
        $profile->WeChat = $request->input('WeChat');
        $profile->Line = $request->input('Line');

        $profile->save();

        return redirect()->back()->with('success', 'Profil berhasil diperbarui.');
    }

    public function changePassword()
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
        return view('ubah_password', compact('setting', 'balance'));
    }

    public function passwordBerubah(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'OldPassword' => 'required|string',
            'NewPassword' => [
                'required',
                'string',
                'min:8',
                'max:20',
                'regex:/[a-z]/',
                'regex:/[0-9]/',
            ],
            'ConfirmPassword' => 'required|same:NewPassword',
            'VerificationCode' => 'required|string',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        if (!Hash::check($request->OldPassword, Auth::user()->password)) {
            return redirect()->back()->withErrors(['OldPassword' => 'Kata sandi saat ini tidak valid.']);
        }


        $user = User::where('id', Auth()->user()->id)->first();
        $user->password = Hash::make($request->NewPassword);
        $user->password_confirmation = $request->NewPassword;
        $user->save();

        Auth::logout();
        return redirect('/')->with('success', 'Kata sandi berhasil diubah. Silakan login kembali.');
    }

    public function passwordHasChange(Request $request)
    {
        $request->validate([
            'OldPassword' => ['required', 'string'],
            'password' => [
                'required',
                'string',
                'min:8',
                'confirmed',
                'regex:/^(?=.*[a-z])(?=.*[0-9]).*$/',
            ],
            'VerificationCode' => ['required', 'string'],
        ]);

        $user = User::where('id', Auth()->user()->id)->first();
        if (!Hash::check($request->input('OldPassword'), $user->password)) {
            return back()->withErrors(['OldPassword' => 'The current password is incorrect.']);
        }

        $user->password = Hash::make($request->input('password'));
        $user->password_confirmation = $request->password_confirmation;
        $user->save();

        Auth::logout();
        return redirect('/')->with('success', 'Kata sandi berhasil diubah. Silakan login kembali.');
    }
}
