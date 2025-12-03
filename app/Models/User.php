<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\BCA;
use App\Models\Seo;
use App\Models\Bank;
use App\Models\Game;
use App\Models\Memo;
use App\Models\Type;
use App\Models\Gamer;
use App\Models\Klaim;
use App\Models\Banner;
use App\Models\Marque;
use App\Models\Status;
use App\Models\Balance;
use App\Models\Laporan;
use App\Models\Network;
use App\Models\Profile;
use App\Models\Setting;
use App\Models\Voucher;
use App\Models\Deposite;
use App\Models\Freechip;
use App\Models\Ppplayer;
use App\Models\Provider;
use App\Models\Turnover;
use App\Models\Withdraw;
use App\Models\Pragmatic;
use App\Models\Promotion;
use App\Models\Transaksi;
use App\Models\Tripayapi;
use App\Models\PragmaticPlayer;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [
        'id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function Setting()
    {
        return $this->hasMany(Setting::class);
    }

    public function Profile()
    {
        return $this->hasMany(Profile::class);
    }

    public function Turnover()
    {
        return $this->hasMany(Turnover::class);
    }

    public function Memo()
    {
        return $this->hasmany(Memo::class);
    }

    public function Laporan()
    {
        return $this->hasmany(Laporan::class);
    }



    public function Balance()
    {
        return $this->hasMany(Balance::class);
    }

    public function Game()
    {
        return $this->hasMany(Game::class);
    }

    public function Network()
    {
        return $this->hasMany(Network::class);
    }

    // public function Gamer()
    // {
    //     return $this->hasMany(Gamer::class);
    // }

    public function Bank()
    {
        return $this->hasOne(Bank::class);
    }

    public function Type()
    {
        return $this->hasOne(Type::class);
    }


    public function Tripay()
    {
        return $this->hasMany(Tripayapi::class);
    }

    public function Banner()
    {
        return $this->hasMany(Banner::class);
    }

    public function Marque()
    {
        return $this->hasMany(Marque::class);
    }
    public function Transaksi()
    {
        return $this->hasMany(Transaksi::class);
    }


    public function Deposite()
    {
        return $this->hasMany(Deposite::class);
    }

    public function Freechip()
    {
        return $this->hasMany(Freechip::class);
    }


    public function Voucher()
    {
        return $this->hasMany(Voucher::class);
    }

    public function Withdraw()
    {
        return $this->hasMany(Withdraw::class);
    }
    public function Klaim()
    {
        return $this->hasMany(Klaim::class);
    }

    public function Status()
    {
        return $this->hasMany(Status::class);
    }

    public function Promotion()
    {
        return $this->hasMany(Promotion::class);
    }

    public function BCA()
    {
        return $this->hasMany(BCA::class);
    }

    public function MANDIRI()
    {
        return $this->hasMany(MANDIRI::class);
    }
    public function BNI()
    {
        return $this->hasMany(BNI::class);
    }
    public function BRI()
    {
        return $this->hasMany(BRI::class);
    }
    public function DANA()
    {
        return $this->hasMany(DANA::class);
    }
    public function OVO()
    {
        return $this->hasMany(OVO::class);
    }
    public function Verifikasi()
    {
        return $this->hasMany(Verifikasi::class);
    }
}
