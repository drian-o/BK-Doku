<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tripayapi extends Model
{
    use HasFactory;
    protected $guarded = ['cuid'];

    public function User()
    {
        return $this->belongsTo(User::class);
    }
}
