<?php

namespace App\Models;

use App\Models\BCA;
use App\Models\User;
use App\Models\Status;
use App\Models\Network;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Deposite extends Model
{

    use HasFactory;
    protected $guarded = ['id'];
    protected $table = 'deposites';
    public function User()
    {
        return $this->belongsTo(User::class);
    }
    public function Status()
    {
        return $this->belongsTo(Status::class);
    }
    public function Network()
    {
        return $this->hasMany(Network::class);
    }
}
