<?php

namespace App\Models;

use App\Models\User;
use App\Models\Promotion;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Klaim extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function User()
    {
        return $this->belongsTo(User::class);
    }
    public function Promotion()
    {
        return $this->belongsTo(Promotion::class, 'promo_id');
    }
}
