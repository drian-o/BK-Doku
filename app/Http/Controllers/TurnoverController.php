<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\Klaim;
use App\Http\API\softgaming;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;

class TurnoverController extends Controller
{
    public function getTurnovers()
    {
        $SG = new softgaming();
        $act = json_decode($SG->historyBetting(Auth()->user()->extplayer), true);
        $data = $act['data'] ?? null;

        $SG = new softgaming();
        $act = json_decode($SG->userbalance(Auth()->user()->extplayer));
        $balance = $act->user->balance;


        $claimedPromotion = Klaim::where('user_id', Auth()->user()->id)
            ->with('Promotion')
            ->first();


        $targetValue = 0;

        if ($claimedPromotion) {
            $promosi = $claimedPromotion->promotion;
            $bonus = $promosi->bonus;
            $turnover_promosi = $promosi->turnover;

            $targetValue = (Auth()->user()->saldo * $bonus / 100) * $turnover_promosi;
        }

        $responseData = [];

        if ($data !== null && is_array($data)) {
            $bet_money_values = array_map(function ($spin) {
                return $spin['bet_money'];
            }, $data);

            $spin = count($data);
            $turnover = array_sum($bet_money_values);

            $latest_entry = end($data);
            $latest_bet = $latest_entry['bet_money'];
            $latest_date = Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s');


            $responseData = [
                'tanggal' => $latest_date,
                'username' => Auth()->user()->username,
                'total_spin' => $spin,
                'turnover' => $turnover,
                'progressive_goal' => $targetValue,
                'bet' => $latest_bet, // Added 'bet'
            ];
        } else {
            $latest_date = Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s');
            $responseData = [
                'tanggal' => $latest_date,
                'username' => Auth()->user()->username,
                'total_spin' => 0,
                'turnover' => 0,
                'progressive_goal' => $targetValue,
                'bet' => 0,
            ];
        }

        return response()->json($responseData);
    }

    public function turnOver()
    {
        $game_type = 'slot';
        $page = 0;
        $perPage = 1000;

        $endDate = Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s');
        $startDate = Carbon::now('Asia/Jakarta')->subHours(24)->format('Y-m-d H:i:s');

        $SG = new fiver();
        $response = $SG->historyPlay(Auth()->user()->extplayer, $game_type, $startDate, $endDate, $page, $perPage, true);

        $act = json_decode($response, true);

        // Default values
        $spin = 0;
        $turnover = 0;
        $progressive = 0;
        $latest_bet = 0;
        $latest_date = null;
        $targetValue = 0;

        if (isset($act['slot']) && is_array($act['slot'])) {
            $bet_money_values = array_map(function ($spin) {
                return $spin['bet_money'];
            }, $act['slot']);

            $claimedPromotion = Klaim::where('user_id', Auth()->user()->id)
                ->with('Promotion')
                ->first();

            // Calculate target turnover
            if ($claimedPromotion) {
                $promosi = $claimedPromotion->promotion;
                $bonus = $promosi->bonus;
                $turnover_promosi = $promosi->turnover;

                $targetValue = (Auth()->user()->saldo * $bonus / 100) * $turnover_promosi;
            }

            $spin = $act['total_count'];
            $turnover = array_sum($bet_money_values);

            // Get the latest entry
            $latest_entry = end($act['slot']);
            $latest_bet = $latest_entry['bet_money'] ?? 0;
            $latest_date = Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s');

            // Avoid division by zero
            if ($targetValue > 0) {
                $progressive = ($turnover / $targetValue) * 100;
                if ($progressive > 100) {
                    $progressive = 100;
                }
            }
        }

        // Return response as JSON
        return response()->json([
            'tanggal' => $latest_date,
            'username' => Auth()->user()->username,
            'total_spin' => $spin,
            'turnover' => $turnover,
            'progressive_goal' => $targetValue,
            'bet' => $latest_bet,
        ]);
    }
}
