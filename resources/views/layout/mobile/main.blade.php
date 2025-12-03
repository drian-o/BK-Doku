<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>{{ $setting->web }}: Situs Judi Online Terbaik dan Terpercaya Indonesia 2024</title>

    <meta
        content="{{ $setting->web }} menyediakan permainan slot online dan kasino berkualitas dengan dukungan pelanggan yang profesional. Rasakan keamanan transaksi dan layanan responsif untuk pengalaman bermain yang lancar dan menyenangkan."
        name="description" />
    <meta
        content="{{ $setting->web }},{{ $setting->web }} Slot,1500 Slot Online Bonus Tinggi,Slot Menarik,Bonus Member Baru 100%,Pragmatic Play,Spade Gaming,Micro Gaming,Playtech,Habanero,PG Soft,Play&#39;n Go,CQ9,Realtime Gaming, Joker,Flow Gaming,One Touch,Slot88,Terbaik &amp; Terpercaya"
        name="keywords" />
    <meta content="DarkGold" name="theme-color" />
    <meta content="id-ID" name="language" />
    <meta content="ID" name="geo.region" />
    <meta content="Indonesia" name="geo.placename" />
    <meta content="website" name="categories" />
    <meta content="google-site-verification=Maz-sQwVTS_Ae06LFWN67Mc84vQltkUnMKcZiiHp-hg"
        name="google-site-verification" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://linkpremiumajaib.com/" rel="canonical" />
    <link href="https://api2-aj8.imgzm.com/images/aj8/favicon_bd3b85f0-34c7-46c3-99e6-6cd56df732b9_1720551855117.png"
        rel="icon" type="image/x-icon" />

    <link rel="stylesheet" href="../../../assets/css/mobile/mobile.css">

    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>


    <link rel="stylesheet" href="../../../assets/css/mobile/theme.css">

</head>

<body data-route="home"
    style="--expand-icon-src: url(https://d33egg70nrp50s.cloudfront.net/Images/icons/expand.gif?v=20240708-4);
      --collapse-icon-src: url(https://d33egg70nrp50s.cloudfront.net/Images/icons/collapse.gif?v=20240708-4);
      --play-icon-src: url(https://d33egg70nrp50s.cloudfront.net/Images/icons/play.png?v=20240708-4);
      --desktop-icon-src: url(https://d33egg70nrp50s.cloudfront.net/Images/icons/desktop-white.png?v=20240708-4);
      --jquery-ui-444444-src: url(https://d33egg70nrp50s.cloudfront.net/Images/jquery-ui/ui-icons_444444_256x240.png?v=20240708-4);
      --jquery-ui-555555-src: url(https://d33egg70nrp50s.cloudfront.net/Images/jquery-ui/ui-icons_555555_256x240.png?v=20240708-4);
      --jquery-ui-ffffff-src: url(https://d33egg70nrp50s.cloudfront.net/Images/jquery-ui/ui-icons_ffffff_256x240.png?v=20240708-4);
      --jquery-ui-777620-src: url(https://d33egg70nrp50s.cloudfront.net/Images/jquery-ui/ui-icons_777620_256x240.png?v=20240708-4);
      --jquery-ui-cc0000-src: url(https://d33egg70nrp50s.cloudfront.net/Images/jquery-ui/ui-icons_cc0000_256x240.png?v=20240708-4);
      --jquery-ui-777777-src: url(https://d33egg70nrp50s.cloudfront.net/Images/jquery-ui/ui-icons_777777_256x240.png?v=20240708-4);">
    <input type="checkbox" id="site_menu_trigger_input" class="site-menu-trigger-input" />
    <div class="inner-body-container" id="inner_body_container">
        <div class="inner-body" id="scroll_container">
            @if (Auth::check())
                @include('layout.mobile.header')
            @else
                <header class="site-header">
                    <a href="/" class="logo">
                        <picture>
                            <img alt="Logo" loading="lazy" src="{{ asset('storage/' . $setting->logo) }}" />
                        </picture>
                    </a>

                    <div class="header-info">
                    </div>

                    <label class="site-menu-trigger" for="site_menu_trigger_input" data-new-notification="false">
                        <i data-icon="menu"></i>
                    </label>
                </header>
            @endif


            @yield('mobile')
            @include('layout.mobile.footer')
        </div>
        @include('layout.mobile.navbar')
    </div>

    @include('sweetalert::alert')
    @include('sweetalert::alert', ['cdn' => 'https://cdn.jsdelivr.net/npm/sweetalert2@9'])

    <script src="../../../assets/js/mobile/mobile.js"></script>

    <script type="text/javascript">
        window.addEventListener('DOMContentLoaded', () => {
            initializeCopyAccountNumber({
                translations: {
                    copied: "Disalin"
                }
            });
        });
    </script>

    <div id="myModalMobile" class="modal popup-modal loyalty-daily-reward-modal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="daily_reward_popup_containerMobile">
                        <div class="daily-reward-container" id="daily_reward_containerMobile">
                            <img src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/loyalty/chest-close.webp?v=20240708-4"
                                alt="Chest Close">
                            <p id="daily_reward_descMobile">
                                Kembali setiap hari untuk mengambil bonus XP ganda
                            </p>
                            <button class="btn rounded-circle register-button" id="claim_rewardMobile"
                                data-already-claimed="Sudah Diklaim"
                                data-sound-effect-path="https://d33egg70nrp50s.cloudfront.net/Sounds/loyalty/opening-treasure-chest.mp3"
                                style="background-color: rgb(34, 130, 112); color: #ffffff;">
                                Klaim Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="afterClaimMobile" class="modal popup-modal loyalty-daily-reward-modal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="daily_reward_popup_containerMobile">
                        <div class="daily-reward-container" id="daily_reward_containerMobile">
                            <img src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/loyalty/chest-open.webp?v=20240708-4"
                                alt="Chest Close">
                            <div class="reward-title">
                                <h1 id="daily_reward_titleMobile" hidden="">
                                    Hadiah Harian
                                </h1>
                                <div id="claim_daily_reward_point_containerMobile" class="reward-point claimed">
                                    <span class="point" id="reward_pointMobile">+DOUBLE</span>
                                    <div class="xp-label">XP</div>
                                </div>
                            </div>
                            <div class="double-xp-countdown-container" id="double_xp_expiration_countdownMobile"
                                data-expiration-date="Tue Jul 16 2024 18:39:02 GMT+0700 (Western Indonesia Time)"
                                style="">
                                <span>XP ganda akan berakhir dalam:</span>
                                <div class="double-xp-countdown">
                                    <div data-section="hours">
                                        <div data-value="hours">
                                            <span data-time-fragment="">0</span>
                                            <span data-time-fragment="">0</span>
                                        </div>
                                        <span>JAM</span>
                                    </div>
                                    <div data-section="minutes">
                                        <div data-value="minutes">
                                            <span data-time-fragment="">5</span>
                                            <span data-time-fragment="">9</span>
                                        </div>
                                        <span>MENIT</span>
                                    </div>
                                    <div data-section="seconds">
                                        <div data-value="seconds">
                                            <span data-time-fragment="">4</span>
                                            <span data-time-fragment="">9</span>
                                        </div>
                                        <span>DETIK</span>
                                    </div>
                                </div>
                            </div>

                            <button class="standard-secondary-button" id="claim_daily_reward_buttonMobile"
                                data-already-claimed="Sudah Diklaim"
                                data-sound-effect-path="//d33egg70nrp50s.cloudfront.net/Sounds/loyalty/opening-treasure-chest.mp3"
                                disabled="">Sudah Diklaim</button>
                            <div class="claim-daily-reward-countdown-container"
                                id="daily_reward_expiration_countdownMobile" style="">
                                Klaim hadiah lagi dalam:
                                <img loading="lazy"
                                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/loyalty/icons/timer.svg?v=20240708-4">

                                <div class="expiration-countdown expiration_countdown" id="countdownTimerMobile">
                                    <div data-section="title">
                                        BERAKHIR PADA
                                    </div>
                                    <div data-section="days">
                                        <div data-value="days">00</div>
                                        <span>HARI</span>
                                    </div>
                                    <div data-section="hours">
                                        <div data-value="hours">08</div>
                                        <span>JAM</span>
                                    </div>
                                    <div data-section="minutes">
                                        <div data-value="minutes">00</div>
                                        <span>MENIT</span>
                                    </div>
                                    <div data-section="seconds">
                                        <div data-value="seconds">00</div>
                                        <span>DETIK</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @if (Auth::check())
        <div class="modal fade" id="payment_account_popup" tabindex="-1" role="dialog"
            aria-labelledby="paymentAccountModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="paymentAccountModalLabel">Tambah Akun Bank</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                            style="margin-top: -20px">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="/add-bank" method="POST">
                            @csrf
                            <input data-val="true" data-val-required="The PaymentType field is required."
                                id="PaymentType" name="PaymentType" type="hidden" value="BANK">
                            <div class="form-group">
                                <label for="Bank">Akun <span data-section="asterisk">*</span></label>
                                <select class="form-control" data-val="true"
                                    data-val-required="The Bank field is required." id="Bank" name="Bank">
                                    <option value="">-- Pilih Bank --</option>
                                    <option value="DANA">BANK DANA</option>
                                    <option value="GOPAY">BANK GOPAY</option>
                                    <option value="OVO">BANK OVO</option>
                                    <option value="BCA">BCA</option>
                                    <option value="BNI">BNI</option>
                                    <option value="BRI">BRI</option>
                                    <option value="MANDIRI">MANDIRI</option>
                                    <option value="BNI">NEXUSPAY DEPOSIT BANK
                                        BNI</option>
                                    <option value="BRI">NEXUSPAY DEPOSIT BANK
                                        BRI</option>
                                    <option value="DANAMON">NEXUSPAY DEPOSIT BANK
                                        DANAMON</option>
                                    <option value="MANDIRI">NEXUSPAY DEPOSIT BANK
                                        MANDIRI</option>
                                    <option value="PERMATA">NEXUSPAY DEPOSIT BANK
                                        PERMATA</option>
                                </select>
                                <span class="standard-required-message">Silakan pilih bank Anda.</span>
                            </div>
                            <div class="form-group">
                                <label for="AccountNo">Nomor Rekening <span data-section="asterisk">*</span></label>
                                <input maxlength="24" autocomplete="off" class="form-control" data-val="true"
                                    data-val-regex="The field AccountNo must match the regular expression '^[0-9\-]+$'."
                                    data-val-regex-pattern="^[0-9\-]+$"
                                    data-val-required="The AccountNo field is required."
                                    id="payment_account_number_input" name="accNumber"
                                    placeholder="Nomor rekening anda" type="text" value="">
                                <span class="standard-required-message">Nomor rekening bank diperlukan (hanya nomor
                                    yang
                                    diperbolehkan).</span>
                            </div>
                            <div class="form-group">
                                <label for="AccountName">Nama Lengkap <span data-section="asterisk">*</span></label>
                                <input class="form-control" data-val="true"
                                    data-val-regex="The field AccountName must match the regular expression '^[0-9a-zA-Z ]*$'."
                                    data-val-regex-pattern="^[0-9a-zA-Z ]*$"
                                    data-val-required="The AccountName field is required." id="AccountName"
                                    name="accName" placeholder="Nama Lengkap Anda" type="text"
                                    value="{{ Auth()->user()->accName }}">
                                <span class="standard-required-message">Silakan masukkan nama lengkap yang valid (hanya
                                    karakter alfanumerik yang diperbolehkan).</span>
                            </div>
                            <div class="standard-button-group">
                                <input type="submit" class="btn btn-primary" value="Tambah Akun">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    @endif

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Setup countdown for double_xp_expiration_countdownMobile
            var countdownContainerMobile = document.getElementById('double_xp_expiration_countdownMobile');
            var storedTargetTime = localStorage.getItem('countdownTargetTimeMobile');
            var targetTime;

            if (storedTargetTime) {
                targetTime = new Date(storedTargetTime);
            } else {
                var now = new Date();
                targetTime = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour countdown
                localStorage.setItem('countdownTargetTimeMobile', targetTime);
            }

            function updateCountdownMobile() {
                var currentTime = new Date();
                var timeDifference = targetTime - currentTime;

                if (timeDifference <= 0) {
                    clearInterval(intervalIdMobile);
                    countdownContainerMobile.style.display = 'none';
                    localStorage.removeItem('countdownTargetTimeMobile');
                    return;
                }

                var hours = Math.floor(timeDifference / (1000 * 60 * 60));
                var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                var hoursElement = countdownContainerMobile.querySelector(
                    '[data-section="hours"] [data-value="hours"]');
                var minutesElement = countdownContainerMobile.querySelector(
                    '[data-section="minutes"] [data-value="minutes"]');
                var secondsElement = countdownContainerMobile.querySelector(
                    '[data-section="seconds"] [data-value="seconds"]');

                hoursElement.innerHTML = '<span data-time-fragment="">' + ('0' + hours).slice(-2)[0] +
                    '</span><span data-time-fragment="">' + ('0' + hours).slice(-2)[1] + '</span>';
                minutesElement.innerHTML = '<span data-time-fragment="">' + ('0' + minutes).slice(-2)[0] +
                    '</span><span data-time-fragment="">' + ('0' + minutes).slice(-2)[1] + '</span>';
                secondsElement.innerHTML = '<span data-time-fragment="">' + ('0' + seconds).slice(-2)[0] +
                    '</span><span data-time-fragment="">' + ('0' + seconds).slice(-2)[1] + '</span>';
            }

            updateCountdownMobile();
            var intervalIdMobile = setInterval(updateCountdownMobile, 1000);

            // Setup countdown for countdownTimerMobile with an 8-hour countdown
            var countdownTimerMobile = document.getElementById('countdownTimerMobile');
            var storedCountdownEndDate = localStorage.getItem('countdownEndDateMobile');
            var countdownEndDate;

            if (storedCountdownEndDate) {
                countdownEndDate = new Date(storedCountdownEndDate);
            } else {
                countdownEndDate = new Date(new Date().getTime() + 8 * 60 * 60 * 1000); // 8 hours from now
                localStorage.setItem('countdownEndDateMobile', countdownEndDate);
            }

            function updateCountdownTimerMobile() {
                var now = new Date();
                var timeLeft = countdownEndDate - now;

                if (timeLeft <= 0) {
                    clearInterval(timerIntervalIdMobile);
                    countdownTimerMobile.innerHTML = "EXPIRED";
                    localStorage.removeItem('countdownEndDateMobile');

                    // Call the function to update data after countdown ends
                    updateRewardInBackendMobile(0);
                    return;
                }

                var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                countdownTimerMobile.querySelector('[data-section="days"] [data-value="days"]').innerText = ('0' +
                    days).slice(-2);
                countdownTimerMobile.querySelector('[data-section="hours"] [data-value="hours"]').innerText = ('0' +
                    hours).slice(-2);
                countdownTimerMobile.querySelector('[data-section="minutes"] [data-value="minutes"]').innerText = (
                    '0' + minutes).slice(-2);
                countdownTimerMobile.querySelector('[data-section="seconds"] [data-value="seconds"]').innerText = (
                    '0' + seconds).slice(-2);
            }

            updateCountdownTimerMobile();
            var timerIntervalIdMobile = setInterval(updateCountdownTimerMobile, 1000);

            // Function to update reward in backend
            function updateRewardInBackendMobile(newReward) {
                var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
                $.ajax({
                    url: '/update-reward',
                    type: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': csrfToken
                    },
                    data: {
                        reward: newReward
                    },
                    success: function(response) {
                        window.location.href = '/home'; // Redirect ke halaman home
                    },
                    error: function(xhr, status, error) {
                        console.error('Failed to update user reward:', error);
                    }
                });
            }
        });
    </script>

    <script>
        $(document).ready(function() {
            var modalMobile = $('#myModalMobile');
            var afterClaimModalMobile = $('#afterClaimMobile');
            var rewardButtonMobile = $('#rewardButtonMobile');

            if (rewardButtonMobile.length > 0) {
                rewardButtonMobile.click(function() {
                    var claimed = rewardButtonMobile.data('claimed');

                    if (claimed === 'false') {
                        modalMobile.modal('show');
                    } else {
                        modalMobile.modal('show');
                    }
                });
            }

            $('#claim_rewardMobile').click(function() {
                $.ajax({
                    url: '/claim-daily-reward',
                    type: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    dataType: 'json',
                    success: function(data) {
                        if (data.success) {
                            rewardButtonMobile.data('claimed', 'true');
                            rewardButtonMobile.html(
                                '<i class="daily-reward daily_reward_button" data-icon="daily-reward" data-platform="Desktop" data-daily-reward-available="false" style="--chest-claimed-icon: url(&quot;https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/loyalty/icons/chest-claimed.webp?v=20240708-4&quot;);"><div class="tooltip-wrapper"><span class="tooltip-label">Hadiah Harian</span></div></i>'
                            );
                            afterClaimModalMobile.modal('show');
                            modalMobile.modal('hide');

                            // Refresh halaman setelah klaim sukses
                            location.reload(); // Tambahkan ini untuk refresh halaman
                        } else {
                            console.log(data.message);
                        }
                    },
                    error: function(xhr, status, error) {
                        console.log('Error:', error);
                    }
                });
            });

            $(document).ready(function() {
                var afterClaimModal = $('#afterClaimMobile');
                var afterButton = $('#afterMobile');

                if (afterButton.length > 0) {
                    afterButton.click(function() {
                        afterClaimModal.modal('show');
                    });
                }
            });
        });
    </script>



    <div class="ard-sosmed">
        <div class="attention whore">
            Klik Saya !
        </div>
        <div class="hamburg" onclick="ardFunction()">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <ul>
            <li>
                <a href="#" target="_blank">
                    <img src="https://hayoloh.org/img/lgo188viplink1.gif" alt="Link Vip 1 RAJAWALI88">
                </a>
                <div>
                    Link Vip 1
                </div>
            </li>
            <li>
                <a href="https://rajawali88.online" target="_blank">
                    <img src="https://hayoloh.org/img/lgo188viplink2.gif" alt="Link Vip 2 RAJAWALI88">
                </a>
                <div>
                    Link Vip 2
                </div>
            </li>
            <li>
                <a href="https://rtp123.xyz" target="_blank">
                    <img src="https://hayoloh.org/img/rtplgo188vip.gif" alt="RTP Slot">
                </a>
                <div>
                    RTP SLOT
                </div>
            </li>
        </ul>
    </div>

    <script>
        const ard = document.querySelector('.ard-sosmed');
        const attention_whore = document.querySelector('.attention.whore');

        function ardFunction() {
            ard.classList.toggle("open");
            attention_whore.classList.remove("whore");
        }
    </script>
    <style type="text/css">
        @import url("https://fonts.googleapis.com/css?family=Raleway:900&display=swap");

        :root {
            --accent-color: #1130a5;
            --base-color: #1abc9c;
            /* Warna hijau tosca */
        }

        .hamburg {
            position: absolute;
            width: 40px;
            height: auto;
            padding: .6rem;
            background-color: var(--base-color);
            border-radius: 10px;
            z-index: 9999;
            box-shadow: 0px 0px 12px 1px rgba(233 228 222 / 70%);
        }

        .ard-sosmed {
            display: block;
            cursor: pointer;
            position: fixed;
            bottom: 15%;
            left: 10px;
            font-family: "Times New Roman", sans-serif;
            z-index: 99999;
        }

        .ard-sosmed ul {
            margin: 0;
            padding: 0;
        }

        .ard-sosmed ul li {
            position: absolute;
            text-decoration: none;
            list-style: none;
            transform: translate(0, 0) rotate(360deg);
            transition: all .5s ease;
            opacity: 0;
        }

        .ard-sosmed.open ul li:nth-child(1) {
            transform: translateY(-130px);
            transition-delay: .20s;
            opacity: 1;
        }

        .ard-sosmed.open ul li:nth-child(2) {
            transform: translate(0px, -65px);
            transition-delay: .16s;
            opacity: 1;
        }

        .ard-sosmed.open ul li:nth-child(3) {
            transform: translate(0px, -195px);
            transition-delay: .12s;
            opacity: 1;
        }

        .ard-sosmed.open ul li:nth-child(4) {
            transform: translate(0px, -260px);
            transition-delay: .08s;
            opacity: 1;
        }

        .ard-sosmed.open ul li:nth-child(5) {
            transform: translate(0px, -325px);
            transition-delay: .04s;
            opacity: 1;
        }

        .ard-sosmed.open ul li:nth-child(6) {
            transform: translate(0px, -390px);
            transition-delay: 0s;
            opacity: 1;
        }

        .ard-sosmed ul li a img {
            width: 100%;
            height: auto;
        }

        .ard-sosmed ul li a {
            display: flex;
            width: 55px;
            height: 55px;
            border: solid 2px var(--base-color);
            border-radius: 10px;
            justify-content: center;
            align-items: center;
            background-color: #000000;
        }

        .bar1,
        .bar2,
        .bar3 {
            width: 80%;
            height: 5px;
            background-color: #ffffff;
            margin: 6px auto;
            transition: .4s;
            position: relative;
            transform: translateY(-1px);
        }

        .open .bar1 {
            transform: translate(0, 10px) rotate(-225deg);
        }

        .open .bar2 {
            opacity: 0;
            transform: translate(0, -6px) rotate(-225deg);
        }

        .open .bar3 {
            transform: translate(0, -12px) rotate(-315deg);
        }


        .ard-sosmed ul li div {
            position: absolute;
            transition: all .3s ease;
            opacity: 0;
            scale: .1;
            font-family: "Times New Roman", sans-serif;
            font-size: large;
            background: rgba(0, 0, 0, 1);
            color: #ffffff;
            text-align: center;
            text-wrap: nowrap;
            border: 1px solid var(--base-color);
            padding: 5px;
            border-radius: 10px;
        }

        .ard-sosmed ul li:hover div {
            opacity: 1;
            scale: 1;
        }

        .ard-sosmed ul li:nth-child(1) div {
            transform: translateY(-130px);
        }

        .ard-sosmed ul li:nth-child(1):hover div {
            transform: translate(70px, -40px);
        }

        .ard-sosmed ul li:nth-child(2) div {
            transform: translateY(-130px);
        }

        .ard-sosmed ul li:nth-child(2):hover div {
            transform: translate(70px, -40px);
        }

        .ard-sosmed ul li:nth-child(3) div {
            transform: translateY(-130px);
        }

        .ard-sosmed ul li:nth-child(3):hover div {
            transform: translate(70px, -40px);
        }

        .ard-sosmed ul li:nth-child(4) div {
            transform: translateY(-130px);
        }

        .ard-sosmed ul li:nth-child(4):hover div {
            transform: translate(70px, -40px);
        }

        .ard-sosmed ul li:nth-child(5) div {
            transform: translateY(-130px);
        }

        .ard-sosmed ul li:nth-child(5):hover div {
            transform: translate(70px, -40px);
        }

        .ard-sosmed ul li:nth-child(6) div {
            transform: translateY(-130px);
        }

        .ard-sosmed ul li:nth-child(6):hover div {
            transform: translate(70px, -40px);
        }

        .attention {
            position: relative;
            -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 49% 75%, 22% 100%, 22% 75%, 0% 75%);
            clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 49% 75%, 22% 100%, 22% 75%, 0% 75%);
            width: 80px;
            text-wrap: nowrap;
            height: 30px;
            margin-bottom: 5px;
            left: 15px;
            background-color: var(--base-color);
            cursor: default;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-bottom: 10px;
            opacity: 0;
        }

        .whore {
            animation: flicker .6s infinite;

            &:hover {
                animation-duration: 10s;
            }
        }

        @keyframes flicker {
            0% {
                opacity: 1;
            }

            50% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        @media screen and (max-width: 600px) {
            .ard-sosmed {
                bottom: 150px;
                left: 5px;
            }
        }

        @media only screen and (max-width: 600px) {
            .LcButton {
                position: fixed;
                bottom: 85px;
                right: 14px;
                z-index: 9999;
                width: 50px;
                height: 50px;
            }
        }

        @media only screen and (min-width: 601px) {
            .LcButton {
                display: none;
            }
        }
    </style>

</body>

</html>
