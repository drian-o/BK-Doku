<?php

namespace App\Models;

use App\Models\User;
use App\Models\Deposite;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Network extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function User()
    {
        return $this->belongsTo(User::class);
    }
    public function Deposite()
    {
        return $this->hasMany(Deposite::class);
    }
}
