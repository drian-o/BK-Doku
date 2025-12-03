<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use App\Models\User;
use App\Http\API\softgaming;

use App\Http\API\whitelabel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class DashboardUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    private function searchUsers($users, $searchTerm)
    {
        // Melakukan pencarian berdasarkan nama pengguna
        if ($searchTerm) {
            return array_filter($users, function ($user) use ($searchTerm) {
                return stripos($user->user_code, $searchTerm) !== false;
            });
        }

        // Jika tidak ada kata kunci pencarian, kembalikan semua pengguna
        return $users;
    }
    public function index(Request $request)
    {
        $users = User::all();

        $searchTerm = $request->input('search');
        $filteredUsers = $this->searchUsers($users, $searchTerm);
        $paginatedUsers = collect($filteredUsers);

        $rekening = Bank::all();
        return view('backoffice.data_member.data_member', [
            'users' => $paginatedUsers,
            'searchTerm' => $searchTerm,
            'rekening' => $rekening
        ]);
    }




    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id)
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return view('backoffice.data_member.update', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'username' => 'required|string|max:255',
            'password' => 'nullable|string|confirmed|min:8',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'ref' => 'nullable|string|max:50',
            'accName' => 'required|string|max:255',
            'bank' => 'required|string|max:255',
            'accNumber' => 'required|string|max:50',
        ]);

        // Cari user berdasarkan ID
        $user = User::findOrFail($id);

        // Update data user
        $user->username = $validated['username'];
        $user->email = $validated['email'];
        $user->phone = $validated['phone'];
        $user->ref = $validated['ref'];
        $user->accName = $validated['accName'];
        $user->bank = $validated['bank'];
        $user->accNumber = $validated['accNumber'];

        // Update password jika ada
        if ($request->filled('password')) {
            $user->password = bcrypt($validated['password']);
        }

        $user->save();

        return redirect()->back()->with('success', 'User updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $User)
    {
    }
}
