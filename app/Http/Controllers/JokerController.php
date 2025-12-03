<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Http\API\softgaming;
use App\Models\Game;
use App\Models\Setting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class JokerController extends Controller
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
            $title = 'JOKER';
            $gamelist = Game::where('game_provider', 'JK')->where('game_category', 'SL')->get();
            $setting = Setting::orderBY('created_at', 'DESC')->first();
            return view('gamelist', compact('gamelist', 'setting', 'title', 'balance'));
        } else {
            $title = 'JOKER';
            $gamelist = Game::where('game_provider', 'JK')->where('game_category', 'SL')->get();
            $setting = Setting::orderBY('created_at', 'DESC')->first();
            return view('gamelist', compact('gamelist', 'setting', 'title'));
        }
    }
}
