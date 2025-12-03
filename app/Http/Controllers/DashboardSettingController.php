<?php

namespace App\Http\Controllers;

use App\Http\API\softgaming;
use App\Models\Game;
use App\Models\Type;
use App\Models\Gamer;
use App\Models\Provider;
use App\Http\API\whitelabel;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;

class DashboardSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        // $SG = new softgaming();
        // $act = json_decode($SG->gamelist('CQ'));
        // $Game = $act->gamelist;
        // return $act;
        // foreach ($Game as $Game) {
        //     Game::create([
        //         'game_code' => $Game->game_code,
        //         'game_name' => $Game->game_name,
        //         'game_provider' => $Game->game_provider,
        //         'game_category' => $Game->game_type,
        //         'game_image' => '../CQ9/' . $Game->game_vendor . '.png',
        //         'game_demo' => NULL,
        //         'game_device' => NULL,
        //         'rtp' => 0

        //     ]);
        // }
        $Game = Game::all();
        $provider = Provider::all();
        return view('backoffice.games.game_setting', [
            'Game' => $Game,
            'Provider' => $provider,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     $type = Type::all();
    //     return view('Dashboard.Game.create', [
    //         'Type' => $type
    //     ]);
    // }

    // /**
    //  * Store a newly created resource in storage.
    //  */
    public function store(Request $request, Game $Game)
    {

        $rules = [

            'type_id' => $request->type_id
        ];

        $validateData = $request->validate($rules);

        Game::where('provider', $Game->game_provider)
            ->updated($validateData);

        return redirect('/Admin/Dashboard/Tranksaksi')->with('success', 'Post has been Updated!!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $Game = Game::find($id);
        return view('Dashboard.Game.edit', [
            'Game' => $Game,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validateData = $request->validate([

            'img' => 'image|file|mimes:jpeg,png,gif|max:4048',

        ]);

        if ($request->file('img')) {
            $validateData['game_image'] = $request->file('img')->store('post-images');
        }


        Game::create($validateData);

        return redirect('/Admin/Dashboard/Game-Setting')->with('success', 'Banner has been added!!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function searchByProvider(Request $request)
    {
        // Ambil data game dari database berdasarkan provider
        $games = Game::where('game_provider', $request->provider_id)->get();

        // Kembalikan hasil dalam format JSON
        return response()->json($games);
    }
}
