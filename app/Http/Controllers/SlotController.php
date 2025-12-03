<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\Game;
use App\Models\Banner;
use App\Models\Setting;
use App\Http\API\softgaming;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class SlotController extends Controller
{
    public function index()
    {
        if (Auth::check()) {
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
            $banner = Banner::all();
            $setting = Setting::orderBY('created_at', 'DESC')->first();
            return view('slot', compact('setting', 'banner', 'balance'));
        } else {
            $banner = Banner::all();
            $setting = Setting::orderBY('created_at', 'DESC')->first();
            return view('slot', compact('setting', 'banner'));
        }
    }

    public function gameHandler($id)
    {

        $SG = new fiver();

        $game = Game::findOrFail($id);
        return response()->json($game);

        if (!$game) {
            return redirect('/slots')->with('error', 'Game not found');
        }

        $act = json_decode($SG->opengame(Auth::user()->extplayer, $game->game_code));

        if ($act->status == 'success') {
            return redirect()->to($act->gameUrl);
        } else {
            return redirect('/slots')->with('error', 'Maaf Terjadi Kesalahan');
        }
    }
}
