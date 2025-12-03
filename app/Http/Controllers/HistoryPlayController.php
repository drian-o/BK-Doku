<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\API\fiver;
use App\Models\Turnover;
use App\Http\API\softgaming;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class HistoryPlayController extends Controller
{
    public function index()
    {
        $SG = new fiver();
        $act = json_decode($SG->callPlayer());
        $data = $act->data;

        // Tambahkan ID auto increment, dimulai dari 1
        $dataWithIds = array_map(function ($item, $index) {
            $item->id = $index + 1; // Tambahkan ID auto increment, dimulai dari 1
            return $item;
        }, $data, array_keys($data));

        // Ubah urutan elemen sehingga 'id' berada di bagian atas
        $dataWithIds = array_map(function ($item) {
            return ['id' => $item->id] + (array) $item;
        }, $dataWithIds);

        return view(
            'backoffice.games.game_setting',
            [
                'x' => $dataWithIds
            ]
        );
    }
    // private $data_agent = [
    //     'agent' => '4z7BWPOUFc',
    //     'signature' => '2c6f03edfe3dfdb984b9c0be81501e4b',
    // ];

    // public function handleRequest(Request $request)
    // {
    //     // Ambil data JSON dari request
    //     $data = $request->json()->all();

    //     // Cek apakah data yang dikirim berisi kunci 'data'
    //     if (isset($data['data'])) {

    //         foreach ($data['data'] as $params) {
    //             // Ambil data dari params
    //             $username = $params['username'] ?? null;
    //             $session = $params['session'] ?? null;
    //             $game_code = $params['game_code'] ?? null;
    //             $game_provider = $params['game_provider'] ?? null;
    //             $bet = $params['bet'] ?? null;
    //             $win = $params['win'] ?? null;
    //             $turnover = $params['turnover'] ?? null;
    //             $betdate = $params['betdate'] ?? null;
    //             $vendor = $params['vendor'] ?? null;

    //             // Validasi apakah session sudah ada di database
    //             if ($session && Turnover::where('session', $session)->exists()) {
    //                 return response('Data sudah ada', 200);
    //             }

    //             // Insert data ke database
    //             try {
    //                 Turnover::create([
    //                     'username' => $username,
    //                     'session' => $session,
    //                     'game_code' => $game_code,
    //                     'game_provider' => $game_provider,
    //                     'bet' => $bet,
    //                     'win' => $win,
    //                     'turnover' => $turnover,
    //                     'vendor' => $vendor,
    //                 ]);

    //                 // Panggil fungsi untuk menandai history
    //                 $this->markHistory($session);

    //                 return response('Sukses menyimpan TO', 200);
    //             } catch (\Exception $e) {
    //                 Log::error('Error saving turnover: ' . $e->getMessage());
    //                 return response('Gagal menyimpan data', 500);
    //             }
    //         }
    //     }

    //     return response('Data tidak valid', 400);
    // }

    // private function markHistory($trxid)
    // {
    //     $endpoint = "https://api.noobqueen.site/v2/MarkHistoryArchive.aspx?agent_code=" . $this->data_agent['agent'] . "&trx_id=$trxid&signature=" . $this->data_agent['signature'];

    //     try {
    //         $response = Http::get($endpoint);
    //         $response->throw();
    //         return $response->json();
    //     } catch (\Exception $e) {
    //         Log::error('Error marking history: ' . $e->getMessage());
    //         return null;
    //     }
    // }

    public function callList(Request $request)
    {
        $provider = $request->provider;
        $gamecode = $request->game_code;
        $username = $request->username;

        $SG = new fiver();
        $act = json_decode($SG->callList($provider, $gamecode, $username));
        return $act;
    }
    public function callApply(Request $request)
    {
        $provider = $request->input('provider');
        $gamecode = $request->input('game_code');
        $username = $request->input('username');
        $rtp = $request->input('call_rtp');
        $type = $request->input('call_type');


        if (!is_numeric($rtp)) {
            return response()->json(['status' => 'error', 'msg' => 'RTP must be a number'], 400);
        }

        $rtp = (int) $rtp;

        $SG = new fiver();
        $act = $SG->callApply($provider, $gamecode, $username, $rtp, $type);

        return response()->json(['status' => 'success', 'data' => $act]);
    }

    public function getGameHistory(Request $request)
    {
        $game_type = 'slot';
        $page = 0;
        $perPage = 1000;

        $date_start = $request->input('date_start');
        $date_end = $request->input('date_end');
        $extplayer = $request->input('extplayer');


        $startDate = $date_start ? Carbon::parse($date_start)->startOfDay()->format('Y-m-d H:i:s') : Carbon::now('Asia/Jakarta')->startOfDay()->format('Y-m-d H:i:s');
        $endDate = $date_end ? Carbon::parse($date_end)->endOfDay()->format('Y-m-d H:i:s') : Carbon::now('UTC')->endOfDay()->format('Y-m-d H:i:s');

        $SG = new fiver();
        $act = json_decode($SG->historyPlay($extplayer, $game_type, $startDate, $endDate, $page, $perPage));

        $slot = $act->slot ?? [];
        return response()->json([
            'status' => 'success',
            'data' => $slot
        ]);
    }

    public function showForm()
    {
        $users = User::all();
        return view('backoffice.historyplay.historyplay', compact('users'));
    }
}
