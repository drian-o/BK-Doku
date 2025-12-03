<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BCA extends Model
{
    use HasFactory;
    protected $guarded = ['cuid'];

    public function User()
    {
        return $this->belongsTo(User::class);
    }
}
