<?php

namespace App\Http\Controllers;

use App\Http\API\fiver;
use App\Models\Game;
use App\Http\API\softgaming;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class PlayController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {

        $SG = new fiver();
        $game = DB::table('fiver_games')->find($id);
        $act = json_decode($SG->opengame(Auth()->user()->extplayer, $game->game_code, $game->game_provider));

        if ($act->msg == 'SUCCESS') {
            return redirect()->to($act->launch_url);
        } else {

            return redirect('/Slot')->with('error', 'Maaf Terjadi Kesalahan');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
