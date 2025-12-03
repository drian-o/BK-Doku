<?php

use App\Models\Banner;
use App\Http\API\fiver;
use App\Models\Setting;
use App\Models\Voucher;
use App\Models\Freechip;
use App\Http\API\softgaming;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Cq9Controller;
use App\Http\Controllers\KycController;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\BankController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PlayController;
use App\Http\Controllers\SlotController;
use App\Http\Controllers\BonusController;
use App\Http\Controllers\JokerController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PokerController;
use App\Http\Controllers\ArcadeController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\BoongoController;
use App\Http\Controllers\CasinoController;
use App\Http\Controllers\InjectController;
use App\Http\Controllers\PgsoftController;
use App\Http\Controllers\TambahController;
use App\Http\Controllers\DepositController;
use App\Http\Controllers\GenesisController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PlayngoController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HabaneroController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\PlaystarController;
use App\Http\Controllers\RefferalController;
use App\Http\Controllers\RekeningController;
use App\Http\Controllers\ToptrendController;
use App\Http\Controllers\TurnoverController;
use App\Http\Controllers\WithdrawController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DreamtechController;
use App\Http\Controllers\FungamingController;
use App\Http\Controllers\LoyalitasController;
use App\Http\Controllers\PromotionController;
use App\Http\Controllers\AdvantplayController;
use App\Http\Controllers\SettingWebController;
use App\Http\Controllers\SportsbookController;
use App\Http\Controllers\AdminLogoutController;
use App\Http\Controllers\HistoryPlayController;
use App\Http\Controllers\MicrogamingController;
use App\Http\Controllers\RegisterasiController;
use App\Http\Controllers\SpadegamingController;
use App\Http\Controllers\AdminProfileController;
use App\Http\Controllers\DashboardUserController;
use App\Http\Controllers\PragmaticplayController;
use App\Http\Controllers\DashboardWarnaController;
use App\Http\Controllers\HistoryDepositController;
use App\Http\Controllers\DashboardKurangController;
use App\Http\Controllers\DashboardStatusController;
use App\Http\Controllers\DashboardSettingController;
use App\Http\Controllers\DashboardVoucherController;
use App\Http\Controllers\HistoryTransaksiController;
use App\Http\Controllers\DashboardDepositeController;
use App\Http\Controllers\DashboardPasswordController;
use App\Http\Controllers\DashboardWithdrawController;
use App\Http\Controllers\DashboardPromotionController;
use App\Http\Controllers\EvoplayController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/clear-cache', function () {
    $exitCode = Artisan::call('cache:clear');
    $exitCode = Artisan::call('config:cache');
    return 'DONE'; //Return anything
});

Route::get('/tarik', [LoyalitasController::class, 'tarik']);

Route::middleware(['check.web'])->group(function () {

    Route::get('/promotion', [PromotionController::class, 'index']);
    Route::post('/ubah-bahasa', [LanguageController::class, 'ubahBahasa'])->name('change.language');
    Route::get('/', [HomeController::class, 'index']);
    Route::get('/login', [LoginController::class, 'index']);
    Route::post('/login', [LoginController::class, 'auth']);
    Route::post('/logout', [LoginController::class, 'logout']);
    Route::get('/registerasi', [RegisterasiController::class, 'index']);
    Route::get('/referral-register', [RegisterasiController::class, 'loadReferral']);
    Route::post('/registerasi', [RegisterasiController::class, 'registerasi']);
    Route::post('/forgot-password', [PasswordController::class, 'ubahPassword'])->name('password.update');
    Route::get('/download/{filename}', [FileController::class, 'download'])->name('download');

    Route::get('/slots', [SlotController::class, 'index']);
    Route::get('/casino', [CasinoController::class, 'index']);
    Route::get('/sports', [SportsbookController::class, 'index']);
    Route::get('/arcade', [ArcadeController::class, 'index']);
    Route::get('/poker', [PokerController::class, 'index']);

    Route::get('/slots/pragmatic', [PragmaticplayController::class, 'index']);
    Route::get('/slots/pgsoft', [PgsoftController::class, 'index']);
    Route::get('/slots/habanero', [HabaneroController::class, 'index']);
    Route::get('/slots/spadegaming', [SpadegamingController::class, 'index']);
    Route::get('/slots/microgaming', [MicrogamingController::class, 'index']);
    Route::get('/slots/genesis', [GenesisController::class, 'index']);
    Route::get('/slots/dreamtech', [DreamtechController::class, 'index']);
    Route::get('/slots/evoplay', [EvoplayController::class, 'index']);
    Route::get('/slots/cq9', [Cq9Controller::class, 'index']);
    Route::get('/slots/booongo', [BoongoController::class, 'index']);
    Route::get('/slots/toptrend', [ToptrendController::class, 'index']);
    Route::get('/slots/joker', [JokerController::class, 'index']);
    Route::get('/slots/playstar', [PlaystarController::class, 'index']);
    Route::get('/slots/playngo', [PlayngoController::class, 'index']);
    Route::get('/slots/fungaming', [FungamingController::class, 'index']);
    Route::get('/slots/advantplay', [AdvantplayController::class, 'index']);

    Route::get('/faq', function () {
        if (Auth::check()) {
            $SG = new fiver();
            $act = json_decode($SG->userbalance(Auth()->user()->extplayer));
            $agent = $act->user;
            $hiddenBalance = $agent->balance;
            if ($hiddenBalance == 0) {
                $balance = '0,00';
            } else {
                if ($hiddenBalance < 1000 && $hiddenBalance > 0) {
                    $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                    $balance = '0' . '.' . substr_replace($formattedBalance, '', -4);
                } else {
                    $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                    $balance = substr_replace($formattedBalance, '', -4);
                }
            }
            $setting = Setting::orderBY('created_at', 'DESC')->first();
            return view('faq', compact('setting', 'balance'));
        } else {
            $setting = Setting::orderBY('created_at', 'DESC')->first();
            return view('faq', compact('setting'));
        }
    });

    Route::get('/versi-mobile', function () {
        if (Auth::check()) {
            $SG = new fiver();
            $act = json_decode($SG->userbalance(Auth()->user()->extplayer, true));
            $agent = $act->user;
            $hiddenBalance = $agent->balance;
            if ($hiddenBalance == 0) {
                $balance = '0,00';
            } else {
                if ($hiddenBalance < 1000 && $hiddenBalance > 0) {
                    $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                    $balance = '0' . '.' . substr_replace($formattedBalance, '', -4);
                } else {
                    $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                    $balance = substr_replace($formattedBalance, '', -4);
                }
            }
            $banner = Banner::all();
            $setting = Setting::orderBY('created_at', 'DESC')->first();
            return view('layout.mobile.index', compact('banner', 'setting', 'balance'));
        } else {
            $banner = Banner::all();
            $setting = Setting::orderBY('created_at', 'DESC')->first();
            return view('layout.mobile.index', compact('banner', 'setting'));
        }
    });

    Route::get('/contact', function () {
        if (Auth::check()) {
            $SG = new fiver();
            $act = json_decode($SG->userbalance(Auth()->user()->extplayer));
            $agent = $act->user;
            $hiddenBalance = $agent->balance;
            if ($hiddenBalance == 0) {
                $balance = '0,00';
            } else {
                if ($hiddenBalance < 1000 && $hiddenBalance > 0) {
                    $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                    $balance = '0' . '.' . substr_replace($formattedBalance, '', -4);
                } else {
                    $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                    $balance = substr_replace($formattedBalance, '', -4);
                }
            }
            $setting = Setting::orderBY('created_at', 'DESC')->first();
            return view('layout.mobile.contact', compact('setting', 'balance'));
        } else {
            $setting = Setting::orderBY('created_at', 'DESC')->first();
            return view('layout.mobile.contact', compact('setting'));
        }
    });



    Route::middleware(['auth'])->group(function () {

        Route::get('/missions', function () {

            $SG = new fiver();
            $act = json_decode($SG->userbalance(Auth()->user()->extplayer));
            $agent = $act->user;
            $hiddenBalance = $agent->balance;
            if ($hiddenBalance == 0) {
                $balance = '0,00';
            } else {
                if ($hiddenBalance < 1000 && $hiddenBalance > 0) {
                    $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                    $balance = '0' . '.' . substr_replace($formattedBalance, '', -4);
                } else {
                    $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                    $balance = substr_replace($formattedBalance, '', -4);
                }
            }
            $setting = Setting::orderBY('created_at', 'DESC')->first();
            return view('layout.mobile.misi', compact('setting', 'balance'));
        });


        Route::get('/penukaran', function () {

            $SG = new fiver();
            $act = json_decode($SG->userbalance(Auth()->user()->extplayer));
            $agent = $act->user;
            $hiddenBalance = $agent->balance;
            if ($hiddenBalance == 0) {
                $balance = '0,00';
            } else {
                if ($hiddenBalance < 1000 && $hiddenBalance > 0) {
                    $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                    $balance = '0' . '.' . substr_replace($formattedBalance, '', -4);
                } else {
                    $formattedBalance = number_format($hiddenBalance, 2, ',', '.');
                    $balance = substr_replace($formattedBalance, '', -4);
                }
            }

            $claimedVoucherIds = Freechip::where('user_id', Auth()->user()->id)
                ->pluck('voucher_id')->toArray();


            $voucher = Voucher::whereNotIn('id', $claimedVoucherIds)->get();
            $setting = Setting::orderBY('created_at', 'DESC')->first();
            return view('layout.mobile.penukaran', compact('setting', 'balance', 'voucher'));
        });




        Route::post('/claim-voucher/{voucherId}', [LoyalitasController::class, 'claimVoucher'])->name('claim.voucher');
        Route::get('/user-badge', [HomeController::class, 'getUserBadge']);
        Route::post('/update-exp-player', [HomeController::class, 'updateExpPlayer']);
        Route::get('/player-progress', [HomeController::class, 'getPlayerProgress']);
        Route::post('/update-reward', [HomeController::class, 'updateReward']);
        Route::get('/gameplay/{game:id}/show', [PlayController::class, 'show']);
        Route::post('/claim-daily-reward', [HomeController::class, 'claimDailyReward'])->name('claim.daily.reward');
        Route::post('/update-daily-reward', [HomeController::class, 'resetReward']);
        Route::get('/deposit', [DepositController::class, 'index']);
        Route::post('/deposit', [DepositController::class, 'store']);
        Route::get('/history', [HistoryDepositController::class, 'index']);
        Route::POST('/transaction/getDepositHistory', [HistoryDepositController::class, 'getDepositHistory']);
        Route::GET('/getTodayDeposit', [HistoryDepositController::class, 'getTodayDeposit']);
        Route::GET('/getAllTransaksi', [HistoryDepositController::class, 'getAllTransaksi']);
        Route::get('/getUnreadTransactionsCount', [HistoryDepositController::class, 'getUnreadTransactionsCount']);
        Route::post('/markAllTransactionsAsRead', [HistoryDepositController::class, 'markAllTransactionsAsRead']);
        Route::get('/withdraw', [WithdrawController::class, 'index']);
        Route::post('/withdraw', [WithdrawController::class, 'store']);
        Route::POST('/transaction/getWithdrawHistory', [WithdrawController::class, 'getWithdrawHistory']);
        Route::GET('/getTodayWithdraw', [WithdrawController::class, 'getTodayWithdraw']);
        Route::get('/bank-member/account', [RekeningController::class, 'index']);
        Route::post('/add-bank', [RekeningController::class, 'store']);
        Route::get('/turnover', [TurnoverController::class, 'turnOver']);
        Route::get('/bonus', [BonusController::class, 'index']);
        Route::get('/history/bonus', [BonusController::class, 'historyKlaim']);
        Route::get('/history/bonuses', [BonusController::class, 'historyKlaims']);
        Route::post('/bonus/{id}/claim', [BonusController::class, 'update'])->name('promotion.claim');
        Route::get('/profile', [ProfileController::class, 'index']);
        Route::get('/ubah/profile', [ProfileController::class, 'ubahProfile']);
        Route::post('/update-profile', [ProfileController::class, 'update']);
        Route::get('/lupa-password', [ProfileController::class, 'changePassword']);
        Route::post('/change-password', [ProfileController::class, 'passwordBerubah']);
        Route::post('/change-password/user', [ProfileController::class, 'passwordHasChange']);
        Route::get('/loyalitas', [LoyalitasController::class, 'index']);
        Route::get('/message', [MessageController::class, 'index']);
        Route::get('/transaksi/{id}', [MessageController::class, 'show']);
        Route::post('/laporan', [LaporanController::class, 'store']);
        Route::get('/refferal', [RefferalController::class, 'index']);
        Route::get('/referral/verification', [RefferalController::class, 'reffVerif']);
        Route::post('/referral/submit-verification', [RefferalController::class, 'submitReferralVerification']);
        Route::get('/referral-data', [RefferalController::class, 'getReferralData']);
        Route::get('/referral-details', [RefferalController::class, 'getReferralDetails']);
    });
});

Route::middleware(['admin'])->group(function () {

    Route::resource('/inject-saldo', InjectController::class);
    Route::put('/saldo/update/{id}', [InjectController::class, 'update'])->name('saldo.update');
    Route::get('/deposits/today', [DashboardController::class, 'getDeposit']);
    Route::get('/withdraw/today', [DashboardController::class, 'getWithdawDashboard']);
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    // Pencarian User
    Route::get('/users/search', [TambahController::class, 'index'])->name('users.search')->middleware('admin');
    Route::get('/users/searchs', [DashboardKurangController::class, 'index'])->name('search')->middleware('admin');
    Route::get('/users/searches', [DashboardUserController::class, 'index'])->name('searchs')->middleware('admin');
    Route::get('/users/searchus', [DashboardPasswordController::class, 'index'])->name('searchus')->middleware('admin');
    Route::get('/users/searchsss', [DashboardController::class, 'index'])->name('searchis')->middleware('admin');

    Route::resource('/game_setting', HistoryPlayController::class);
    Route::POST('/fetch-game-history', [HistoryPlayController::class, 'getGameHistory']);
    Route::get('/history-play/user', [HistoryPlayController::class, 'showForm']);
    Route::post('/call-list', [HistoryPlayController::class, 'callList']);
    Route::post('/call-apply', [HistoryPlayController::class, 'callApply']);
    Route::GET('/games/searchByProvider', [DashboardsettingController::class, 'searchByProvider']);

    // Route Dashboard

    Route::resource('/Admin/Dashboard/Voucher', DashboardVoucherController::class);
    Route::PUT('/Admin/Dashboard/Withdraw/{id}/update', [DashboardWithdrawController::class, 'update']);
    Route::PUT('/Admin/Dashboard/Tranksaksi/{id}/update', [DashboardDepositeController::class, 'update']);
    Route::get('/Admin/Dashboard', [DashboardController::class, 'index'])->middleware('admin');
    Route::resource('/Admin/Dashboard/User', DashboardUserController::class);
    Route::put('/Admin/Dashboard/User/{id}', [DashboardUserController::class, 'updateUser']);
    Route::resource('/Admin/Dashboard/Tranksaksi', DashboardDepositeController::class)->Middleware('admin');
    Route::resource('/Admin/Dashboard/Withdraw', DashboardWithdrawController::class)->Middleware('admin');
    Route::resource('/Admin/Dashboard/Promotion', DashboardPromotionController::class)->middleware('admin');
    Route::resource('/Admin/Dashboard/Banner', BannerController::class)->middleware('admin');
    Route::resource('/Admin/Dashboard/Password', DashboardPasswordController::class)->middleware('admin');
    Route::resource('/Admin/Dashboard/Status', DashboardStatusController::class)->middleware('admin');
    Route::resource('/Admin/Dashboard/Game-setting', DashboardSettingController::class)->Middleware('admin');
    Route::resource('/Admin/Dashboard/Warna', DashboardWarnaController::class)->middleware('admin');
    Route::get('/history/transaksi', [HistoryTransaksiController::class, 'index']);
    Route::get('/Admin/Profile', [AdminProfileController::class, 'index']);

    Route::get('/getDepositHistory', [HistoryTransaksiController::class, 'getDepositHistory'])->name('deposit.history');

    Route::get('/get-promotions', [DashboardPromotionController::class, 'getPromotions'])->name('get.promotions');
    Route::get('/getWithdrawHistory', [HistoryTransaksiController::class, 'getWithdrawHistory'])->name('withdraw.history');
    Route::get('/get-bank-name', [HistoryTransaksiController::class, 'getBankName']);
    // Route Manage Bank
    Route::GET('/Setting', [SettingWebController::class, 'index'])->middleware('admin');
    Route::POST('/Setting', [SettingWebController::class, 'store'])->middleware('admin');

    Route::resource('/Admin/Dashboard/Manage-Bank', BankController::class)->middleware('admin');
    // Logout
    Route::post('/Logout', [AdminLogoutController::class, 'Logout'])->name('Logout');
    Route::POST('/Admin/Logout', [AdminLogoutController::class, 'AdminLogout'])->name('Logouts')->middleware('admin');
    Route::put('/Admin/Dashboard/User/{id}', [DashboardUserController::class, 'update'])->name('user.update');
    Route::get('/Admin/Dashboard/Kyc', [KycController::class, 'index'])->middleware('admin');
    Route::put('/Admin/Dashboard/Kyc/{id}', [KycController::class, 'updateStatus'])->name('kyc.updateStatus');
});
