<?php

namespace App\Models;

use App\Models\Game;
use App\Models\User;
use App\Models\Deposite;
use App\Models\Withdraw;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Status extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function Deposite()
    {
        return $this->hasMany(Deposite::class);
    }

    public function Game()
    {
        return $this->hasMany(Game::class);
    }

    public function Withdraw()
    {
        return $this->hasMany(Withdraw::class);
    }

    public function User()
    {
        return $this->belongsTo(User::class);
    }
}
