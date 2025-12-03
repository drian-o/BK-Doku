@if (Auth::check())
    <link rel="stylesheet" href="../../../assets/css/desktop/message.css">
    <div class="navbar navbar-fixed-top">
        <div class="topbar-container">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 topbar-inner-container">
                        <a href="/" class="logo">
                            <picture>
                                <img alt="Logo" loading="lazy" src="{{ asset('storage/' . $setting->logo) }}" />
                            </picture>
                        </a>
                        <div class="topbar-inner-group">
                            <div class="topbar-sub-section">
                                <div class="topbar-item language-selector-container"
                                    style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/flags.png?v=20240708-4);">
                                    <div id="language_selector_trigger" data-toggle="dropdown"
                                        class="language-selector-trigger" data-language="id">
                                        <i data-language="id"></i>
                                        BHS INDONESIA
                                    </div>
                                    <ul class="dropdown-menu language-selector">
                                        <li class="language_selector" data-language="en">
                                            <i data-language="en"></i>
                                            <div class="language-name">
                                                <div>ENGLISH</div>
                                                <div>ENGLISH</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="id">
                                            <i data-language="id"></i>
                                            <div class="language-name">
                                                <div>BHS INDONESIA</div>
                                                <div>INDONESIAN</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="kr">
                                            <i data-language="kr"></i>
                                            <div class="language-name">
                                                <div>한국어</div>
                                                <div>KOREAN</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="cn">
                                            <i data-language="cn"></i>
                                            <div class="language-name">
                                                <div>中文</div>
                                                <div>CHINESE</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="jp">
                                            <i data-language="jp"></i>
                                            <div class="language-name">
                                                <div>日本語</div>
                                                <div>JAPANESE</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="th">
                                            <i data-language="th"></i>
                                            <div class="language-name">
                                                <div>ไทย</div>
                                                <div>THAI</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="my">
                                            <i data-language="my"></i>
                                            <div class="language-name">
                                                <div>မြန်မာစာ</div>
                                                <div>BURMESE</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="kh">
                                            <i data-language="kh"></i>
                                            <div class="language-name">
                                                <div>ខេមរភាសា</div>
                                                <div>KHMER</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="hi">
                                            <i data-language="hi"></i>
                                            <div class="language-name">
                                                <div>हिन्दी</div>
                                                <div>HINDI</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="ta">
                                            <i data-language="ta"></i>
                                            <div class="language-name">
                                                <div>தமிழ்</div>
                                                <div>TAMIL</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="te">
                                            <i data-language="te"></i>
                                            <div class="language-name">
                                                <div>తెలుగు</div>
                                                <div>TELUGU</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="vi">
                                            <i data-language="vi"></i>
                                            <div class="language-name">
                                                <div>Tiếng Việt</div>
                                                <div>VIETNAMESE</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="bn">
                                            <i data-language="bn"></i>
                                            <div class="language-name">
                                                <div>বাংলাদেশী</div>
                                                <div>BENGALI</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="pt">
                                            <i data-language="pt"></i>
                                            <div class="language-name">
                                                <div>Português</div>
                                                <div>PORTUGESE</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="topbar-item">
                                    <a href="{{ $setting->livechat }}">
                                        <span class="js_live_chat_link live-chat">
                                            <i data-icon="live-chat"
                                                style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/live-chat.svg?v=20240708-4);"></i>
                                            Live Chat
                                        </span>
                                    </a>
                                </div>
                                <div class="topbar-item">
                                    <a href="/versi-mobile" rel="nofollow">
                                        <i data-icon="mobile"
                                            style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/mobile.svg?v=20240708-4);"></i>
                                        Versi Mobile
                                    </a>
                                </div>
                            </div>

                            <div class="user-info">
                                <div class="user-info-item" id="loyalty_level_container">
                                    <div class="user-info-loyalty-xp">
                                        <a href="#">
                                            <img id="loyalty_level" loading="lazy"
                                                src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/loyalty/badge/bronze.svg">
                                            <input type="hidden" id="loyalty_level_img_path"
                                                value="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/loyalty/badge/">
                                        </a>
                                        <div class="username-container">
                                            <span>{{ Auth()->user()->username }}</span>
                                            <div class="loyalty-xp-progress" id="loyalty_experience">
                                                <div class="progress" id="loyalty_experience_progress"
                                                    style="width: 0%">
                                                </div>
                                            </div>
                                            <div class="loyalty-xp-detail">
                                                <span id="loyalty_xp">{{ Auth()->user()->point_player }}</span> / <span
                                                    id="loyalty_next_level_xp">{{ Auth()->user()->exp_player }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <script>
                                    $(document).ready(function() {
                                        // Fetch player progress data when the page is loaded
                                        fetchPlayerProgress();

                                        function fetchPlayerProgress() {
                                            $.ajax({
                                                type: "GET",
                                                url: "/player-progress",
                                                data: {
                                                    _token: "{{ csrf_token() }}"
                                                },
                                                success: function(response) {
                                                    updateProgress(response);
                                                },
                                                error: function(error) {
                                                    console.error("Error fetching player progress:", error);
                                                }
                                            });
                                        }

                                        function updateProgress(data) {
                                            if (data.success) {
                                                // Get the user's current points and experience using Blade templating
                                                var pointPlayer = {{ Auth::user()->point_player }};
                                                var expPlayer = {{ Auth::user()->exp_player }};

                                                // Update the progress percentage text
                                                $("#loyalty_experience_percentage").text(
                                                    pointPlayer + " / " + expPlayer + " XP (" + data.progress.toFixed(2) + "%)"
                                                );

                                                // Update the progress bar directly
                                                $("#loyalty_experience_progress").css({
                                                    "background-color": "#20B2AA", // Teal color
                                                    "width": data.progress + "%" // Dynamic width based on progress
                                                });

                                                // Check if progress is 100% and update the badge image and exp_player value
                                                if (data.progress >= 100) {
                                                    var newExpPlayer = expPlayer < 100000 ? 100000 : expPlayer +
                                                        100000; // Increment to next level

                                                    // Update the user's exp_player value if needed
                                                    $.ajax({
                                                        type: "POST",
                                                        url: "/update-exp-player",
                                                        data: {
                                                            _token: "{{ csrf_token() }}",
                                                            exp_player: newExpPlayer
                                                        },
                                                        success: function(response) {
                                                            if (response.success) {
                                                                console.log("exp_player updated to " + newExpPlayer);

                                                                // Update the badge based on the new exp_player value
                                                                updateBadge(response.badge_level);

                                                                // Reset the progress bar to 0%
                                                                $("#loyalty_experience_progress").css({
                                                                    "width": "0%"
                                                                });

                                                                // Update the progress percentage text
                                                                $("#loyalty_experience_percentage").text(
                                                                    pointPlayer + " / " + newExpPlayer + " XP (0%)"
                                                                );

                                                            } else {
                                                                console.error("Failed to update exp_player");
                                                            }
                                                        },
                                                        error: function(error) {
                                                            console.error("Error updating exp_player:", error);
                                                        }
                                                    });
                                                } else {
                                                    // No need to update exp_player, check badge directly
                                                    updateBadgeBasedOnExp(expPlayer);
                                                }
                                            } else {
                                                console.error("Failed to fetch progress data");
                                            }
                                        }

                                        function updateBadge(badgeLevel) {
                                            var badgePath = $("#loyalty_level_img_path").val();
                                            var badgeImage = '';

                                            switch (badgeLevel) {
                                                case 'platinum':
                                                    badgeImage = "diamond.svg";
                                                    break;
                                                case 'gold':
                                                    badgeImage = "gold.svg";
                                                    break;
                                                case 'silver':
                                                    badgeImage = "silver.svg";
                                                    break;
                                                default:
                                                    badgeImage = "bronze.svg";
                                            }

                                            $("#loyalty_level").attr("src", badgePath + badgeImage);
                                        }

                                        function updateBadgeBasedOnExp(expPlayer) {
                                            var badgePath = $("#loyalty_level_img_path").val();
                                            var badgeImage = '';

                                            if (expPlayer >= 1000000) {
                                                badgeImage = "diamond.svg";
                                            } else if (expPlayer >= 500000) {
                                                badgeImage = "gold.svg";
                                            } else if (expPlayer >= 100000) {
                                                badgeImage = "silver.svg";
                                            } else {
                                                badgeImage = "bronze.svg";
                                            }

                                            $("#loyalty_level").attr("src", badgePath + badgeImage);
                                        }
                                    });
                                </script>
                                <div class="user-info-item">
                                    @if (Auth()->user()->reward == 1)
                                        <button type="button" id="after">
                                            <i class="daily-reward daily_reward_button" data-icon="daily-reward"
                                                data-platform="Desktop" data-daily-reward-available="false"
                                                style="--chest-claimed-background: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/loyalty/chest-claimed.webp?v=20240708-4);
                                            --chest-available-background: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/loyalty/chest-available.webp?v=20240708-4);"></i>
                                        </button>
                                    @else
                                        <button type="button" id="rewardButton">
                                            <i class="daily-reward daily_reward_button" data-icon="daily-reward"
                                                data-platform="Desktop" data-daily-reward-available="true"
                                                style="--chest-claimed-background: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/loyalty/chest-claimed.webp?v=20240708-4);
                                            --chest-available-background: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/loyalty/chest-available.webp?v=20240708-4);"></i>
                                        </button>
                                    @endif
                                </div>
                                <div class="user-info-item" id="loyalty_point_info">
                                    <a href="#" class="user-info-loyalty-point">
                                        <div class="lp-label">LP</div>
                                        <span id="loyalty_point">{{ Auth()->user()->point_player }}</span>
                                    </a>
                                </div>
                                <div class="user-info-item">
                                    <button title="Refresh" id="refresh_balance" data-loading="false">
                                        <picture>
                                            <source
                                                srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/refresh.webp?v=20240708-4"
                                                type="image/webp">
                                            <source
                                                srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/refresh.png?v=20240708-4"
                                                type="image/png"><img loading="lazy"
                                                src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/refresh.png?v=20240708-4">
                                        </picture>
                                    </button>
                                </div>
                                <div class="user-info-item wallet-container">
                                    <div class="balance">
                                        <a href="#" data-toggle="dropdown">
                                            IDR
                                            <span class="total_balance">{{ $balance }}</span>
                                            <span class="locked-balance locked_balance_container" hidden="">
                                                <i data-icon="locked-balance" class="glyphicon glyphicon-lock"></i>
                                                <span class="total_locked_balance"></span>
                                            </span>
                                        </a>
                                        <div class="dropdown-menu vendor-balances-container">
                                            <div class="vendor-balances-header">
                                                <div>SALDO KREDIT</div>
                                                <div>{{ $balance }}</div>
                                            </div>
                                            <div class="vendor-balances-content">
                                                <div>
                                                    <strong>Slots</strong>
                                                    <div class="vendor-balance-item">
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Pragmatic Play">Pragmatic
                                                                    Play</span>
                                                            </div>
                                                            <div data-vendor-game-code="7">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="PG Slots">PG Slots</span>
                                                            </div>
                                                            <div data-vendor-game-code="9">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="MicroGaming">MicroGaming</span>
                                                            </div>
                                                            <div data-vendor-game-code="17">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Habanero">Habanero</span>
                                                            </div>
                                                            <div data-vendor-game-code="16">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="No Limit City">No Limit
                                                                    City</span>
                                                            </div>
                                                            <div data-vendor-game-code="92">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Jili">Jili</span>
                                                            </div>
                                                            <div data-vendor-game-code="70">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Spade Gaming">Spade
                                                                    Gaming</span>
                                                            </div>
                                                            <div data-vendor-game-code="29">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Joker">Joker</span>
                                                            </div>
                                                            <div data-vendor-game-code="6">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="AdvantPlay">AdvantPlay</span>
                                                            </div>
                                                            <div data-vendor-game-code="54">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Funky Games">Funky Games</span>
                                                            </div>
                                                            <div data-vendor-game-code="35">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Live22">Live22</span>
                                                            </div>
                                                            <div data-vendor-game-code="45">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Playstar">Playstar</span>
                                                            </div>
                                                            <div data-vendor-game-code="65">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Spinix">Spinix</span>
                                                            </div>
                                                            <div data-vendor-game-code="91">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Crowd Play">Crowd Play</span>
                                                            </div>
                                                            <div data-vendor-game-code="73">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Bigpot">Bigpot</span>
                                                            </div>
                                                            <div data-vendor-game-code="75">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="VPower">VPower</span>
                                                            </div>
                                                            <div data-vendor-game-code="77">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Worldmatch">Worldmatch</span>
                                                            </div>
                                                            <div data-vendor-game-code="89">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Fachai">Fachai</span>
                                                            </div>
                                                            <div data-vendor-game-code="72">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Slot88">Slot88</span>
                                                            </div>
                                                            <div data-vendor-game-code="40">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="ION Slot">ION Slot</span>
                                                            </div>
                                                            <div data-vendor-game-code="50">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="AMB Slot">AMB Slot</span>
                                                            </div>
                                                            <div data-vendor-game-code="61">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Mario Club">Mario Club</span>
                                                            </div>
                                                            <div data-vendor-game-code="80">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Dragoonsoft">Dragoonsoft</span>
                                                            </div>
                                                            <div data-vendor-game-code="81">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Naga Games">Naga Games</span>
                                                            </div>
                                                            <div data-vendor-game-code="87">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="JDB">JDB</span>
                                                            </div>
                                                            <div data-vendor-game-code="51">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="CQ9">CQ9</span>
                                                            </div>
                                                            <div data-vendor-game-code="13">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Top Trend Gaming">Top Trend
                                                                    Gaming</span>
                                                            </div>
                                                            <div data-vendor-game-code="67">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Netent">Netent</span>
                                                            </div>
                                                            <div data-vendor-game-code="94">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Big Time Gaming">Big Time
                                                                    Gaming</span>
                                                            </div>
                                                            <div data-vendor-game-code="95">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Red Tiger">Red Tiger</span>
                                                            </div>
                                                            <div data-vendor-game-code="93">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Skywind">Skywind</span>
                                                            </div>
                                                            <div data-vendor-game-code="90">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Yggdrasil">Yggdrasil</span>
                                                            </div>
                                                            <div data-vendor-game-code="42">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Play'n Go">Play'n Go</span>
                                                            </div>
                                                            <div data-vendor-game-code="18">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Real Time Gaming">Real Time
                                                                    Gaming</span>
                                                            </div>
                                                            <div data-vendor-game-code="28">0.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <strong>Live Casino</strong>
                                                    <div class="vendor-balance-item">
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="ION Casino">ION Casino</span>
                                                            </div>
                                                            <div data-vendor-game-code="1">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="PP Casino">PP Casino</span>
                                                            </div>
                                                            <div data-vendor-game-code="41">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="MG Live">MG Live</span>
                                                            </div>
                                                            <div data-vendor-game-code="66">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Evo Gaming">Evo Gaming</span>
                                                            </div>
                                                            <div data-vendor-game-code="38">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Sexy Baccarat">Sexy
                                                                    Baccarat</span>
                                                            </div>
                                                            <div data-vendor-game-code="27">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Pretty Gaming">Pretty
                                                                    Gaming</span>
                                                            </div>
                                                            <div data-vendor-game-code="39">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Oriental Gaming">Oriental
                                                                    Gaming</span>
                                                            </div>
                                                            <div data-vendor-game-code="100">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="AllBet">AllBet</span>
                                                            </div>
                                                            <div data-vendor-game-code="44">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="SA Gaming">SA Gaming</span>
                                                            </div>
                                                            <div data-vendor-game-code="84">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Ebet">Ebet</span>
                                                            </div>
                                                            <div data-vendor-game-code="85">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="568Win Casino">568Win
                                                                    Casino</span>
                                                            </div>
                                                            <div data-vendor-game-code="10">0.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <strong>Olahraga</strong>
                                                    <div class="vendor-balance-item">
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="SBO Sportsbook">SBO
                                                                    Sportsbook</span>
                                                            </div>
                                                            <div data-vendor-game-code="5">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="WBet">WBet</span>
                                                            </div>
                                                            <div data-vendor-game-code="69">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Opus">Opus</span>
                                                            </div>
                                                            <div data-vendor-game-code="71">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="UMbet">UMbet</span>
                                                            </div>
                                                            <div data-vendor-game-code="102">0.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <strong>Crash Game</strong>
                                                    <div class="vendor-balance-item">
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="PP Casino">PP Casino</span>
                                                            </div>
                                                            <div data-vendor-game-code="41">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Spribe">Spribe</span>
                                                            </div>
                                                            <div data-vendor-game-code="82">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="MicroGaming">MicroGaming</span>
                                                            </div>
                                                            <div data-vendor-game-code="17">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Spinix">Spinix</span>
                                                            </div>
                                                            <div data-vendor-game-code="91">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span
                                                                    data-vendor-name="AdvantPlay Mini Game">AdvantPlay
                                                                    Mini Game</span>
                                                            </div>
                                                            <div data-vendor-game-code="62">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Joker">Joker</span>
                                                            </div>
                                                            <div data-vendor-game-code="6">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Dragoonsoft">Dragoonsoft</span>
                                                            </div>
                                                            <div data-vendor-game-code="81">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Funky Games">Funky Games</span>
                                                            </div>
                                                            <div data-vendor-game-code="35">0.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <strong>Arcade</strong>
                                                    <div class="vendor-balance-item">
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="MicroGaming">MicroGaming</span>
                                                            </div>
                                                            <div data-vendor-game-code="17">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Spinix">Spinix</span>
                                                            </div>
                                                            <div data-vendor-game-code="91">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Spribe">Spribe</span>
                                                            </div>
                                                            <div data-vendor-game-code="82">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Joker">Joker</span>
                                                            </div>
                                                            <div data-vendor-game-code="6">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Fachai">Fachai</span>
                                                            </div>
                                                            <div data-vendor-game-code="72">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Jili">Jili</span>
                                                            </div>
                                                            <div data-vendor-game-code="70">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="AMB Slot">AMB Slot</span>
                                                            </div>
                                                            <div data-vendor-game-code="61">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Crowd Play">Crowd Play</span>
                                                            </div>
                                                            <div data-vendor-game-code="73">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="VPower">VPower</span>
                                                            </div>
                                                            <div data-vendor-game-code="77">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Worldmatch">Worldmatch</span>
                                                            </div>
                                                            <div data-vendor-game-code="89">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Mario Club">Mario Club</span>
                                                            </div>
                                                            <div data-vendor-game-code="80">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Dragoonsoft">Dragoonsoft</span>
                                                            </div>
                                                            <div data-vendor-game-code="81">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Live22">Live22</span>
                                                            </div>
                                                            <div data-vendor-game-code="45">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="CQ9">CQ9</span>
                                                            </div>
                                                            <div data-vendor-game-code="13">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Spade Gaming">Spade
                                                                    Gaming</span>
                                                            </div>
                                                            <div data-vendor-game-code="29">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Arcadia">Arcadia</span>
                                                            </div>
                                                            <div data-vendor-game-code="63">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="MM Tangkas">MM Tangkas</span>
                                                            </div>
                                                            <div data-vendor-game-code="96">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Skywind">Skywind</span>
                                                            </div>
                                                            <div data-vendor-game-code="90">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Playstar">Playstar</span>
                                                            </div>
                                                            <div data-vendor-game-code="65">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span
                                                                    data-vendor-name="AdvantPlay Mini Game">AdvantPlay
                                                                    Mini Game</span>
                                                            </div>
                                                            <div data-vendor-game-code="62">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="JDB">JDB</span>
                                                            </div>
                                                            <div data-vendor-game-code="51">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Funky Games">Funky Games</span>
                                                            </div>
                                                            <div data-vendor-game-code="35">0.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <strong>Poker</strong>
                                                    <div class="vendor-balance-item">
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="Balak Play">Balak Play</span>
                                                            </div>
                                                            <div data-vendor-game-code="24">0.00</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="9Gaming">9Gaming</span>
                                                            </div>
                                                            <div data-vendor-game-code="32">0.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <strong>Sabung Ayam</strong>
                                                    <div class="vendor-balance-item">
                                                        <div>
                                                            <div>
                                                                <span data-vendor-name="SV388">SV388</span>
                                                            </div>
                                                            <div data-vendor-game-code="57">0.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-info-item">
                                    <a href="/deposit">
                                        <picture>
                                            <source
                                                srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/wallet.webp?v=20240708-4"
                                                type="image/webp">
                                            <source
                                                srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/wallet.png?v=20240708-4"
                                                type="image/png"><img loading="lazy"
                                                src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/wallet.png?v=20240708-4">
                                        </picture>
                                    </a>
                                </div>
                                <div class="user-info-item">
                                    <a href="/message">
                                        <picture>
                                            <source
                                                srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/inbox.webp?v=20240708-4"
                                                type="image/webp">
                                            <source
                                                srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/inbox.png?v=20240708-4"
                                                type="image/png"><img loading="lazy"
                                                src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/inbox.png?v=20240708-4">
                                        </picture>
                                    </a>
                                </div>
                                {{-- Unduh Apk --}}
                                <div class="user-info-item">
                                    <a href="#">
                                        <picture>
                                            <source
                                                srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/download.webp?v=20240708-4"
                                                type="image/webp">
                                            <source
                                                srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/download.png?v=20240708-4"
                                                type="image/png"><img loading="lazy"
                                                src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/download.png?v=20240708-4">
                                        </picture>
                                    </a>
                                </div>
                                <div class="user-info-item">
                                    <a href="/profile">
                                        <picture>
                                            <source
                                                srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/profile.webp?v=20240708-4"
                                                type="image/webp">
                                            <source
                                                srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/profile.png?v=20240708-4"
                                                type="image/png"><img loading="lazy"
                                                src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/profile.png?v=20240708-4">
                                        </picture>
                                    </a>
                                </div>
                                <div class="user-info-item" id="redemption_store_link">
                                    <a href="/loyalitas" target="_blank">
                                        <picture>
                                            <source
                                                srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/redemption-store.webp?v=20240708-4"
                                                type="image/webp">
                                            <source
                                                srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/redemption-store.png?v=20240708-4"
                                                type="image/png"><img loading="lazy"
                                                src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/redemption-store.png?v=20240708-4">
                                        </picture>
                                    </a>
                                </div>
                                <div class="user-info-item" style="margin-right: 10px">
                                    <a href="#" data-new-announcement="true" data-announcement-count="0"
                                        id="unread_announcements">
                                        <img loading="lazy"
                                            src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/bell.svg?v=20240708-4"
                                            alt="Announcements">
                                    </a>

                                </div>
                                <div id="notification_popup" class="modal popup-modal concise-transaction-popup"
                                    role="dialog" data-title="" aria-label="Popup Modal" aria-hidden="false">
                                    <div class="modal-dialog">
                                        <div class="modal-content"
                                            style="--desktop-popup-alert-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/popup/alert.png?v=20240708-4); --desktop-popup-notification-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/popup/notification.png?v=20240708-4); --mobile-popup-alert-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/popup/alert.png?v=20240708-4); --mobile-popup-notification-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/popup/notification.png?v=20240708-4); --event-giveaway-popper-src: url(//d33egg70nrp50s.cloudfront.net/Images/giveaway/popper.png?v=20240708-4);">
                                            <div class="modal-header">
                                                <button type="button" class="close" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                                <h4 class="modal-title" id="popup_modal_title">Notifikasi</h4>
                                            </div>
                                            <div class="modal-body" id="popup_modal_body">
                                                <div class="notification-popup-body" id="notification_popup_body">
                                                    <h1 class="notification-popup-title">Notifikasi</h1>

                                                    <div class="notification-tabs">
                                                        <div class="notification-tab-item" data-tab="transaction"
                                                            data-active="true" data-count="1">
                                                            Transaksi <span id="announcement_count">(0)</span>
                                                        </div>
                                                        <div class="notification-tab-item" data-tab="promo"
                                                            data-active="false" data-count="0">
                                                            Promo <span>(0)</span>
                                                        </div>
                                                        <div class="notification-tab-item" data-tab="info"
                                                            data-active="false" data-count="0">
                                                            Info <span>(0)</span>
                                                        </div>
                                                    </div>
                                                    <div class="notification-content">
                                                        <div class="notification-list" id="notification_list">
                                                            <a href="/desktop/messages/Announcement/04EE56E5-045B-4EF9-84FE-BD4199A351DB/Deposit/D15030853"
                                                                style="display: block;">
                                                                <div class="notification-item" data-seen="true"
                                                                    data-notification-type="transaction"
                                                                    data-rec-id="04EE56E5-045B-4EF9-84FE-BD4199A351DB"
                                                                    data-message-sub-category="Deposit">
                                                                    <div class="notification-image"
                                                                        data-transaction-status="REJ">
                                                                        <img loading="lazy"
                                                                            src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                                                    </div>
                                                                    <div class="notification-content">
                                                                        <div class="notification-header">
                                                                            <span>Deposit</span>
                                                                            <span>18-Jul-2024 11:40:39 PM</span>
                                                                        </div>
                                                                        <h3 class="notification-title">Deposit :
                                                                            Ditolak</h3>
                                                                        <p>Permintaan deposit IDR 50.00 anda telah
                                                                            ditolak. Nomor Tiket : D15030853</p>
                                                                    </div>
                                                                </div>
                                                            </a>

                                                            <input id="request_verification_token" type="hidden"
                                                                value="k7bXnOXjNeISS20SF7R-iiR56yXxEZwSDkjMw0kRPnWZF6jeVajxWeYoUlz8s72vhHeeLIektFk56dSoD-aFPYME0va--xn1NGql4mwRuL01">
                                                        </div>
                                                        <div class="empty-notification-container"
                                                            id="empty_notification_container" style="display: none;">
                                                            <div class="empty-notification-image">
                                                                <picture>
                                                                    <source
                                                                        srcset="//d33egg70nrp50s.cloudfront.net/Images/announcement/empty.webp?v=20240708-4"
                                                                        type="image/webp">
                                                                    <source
                                                                        srcset="//d33egg70nrp50s.cloudfront.net/Images/announcement/empty.png?v=20240708-4"
                                                                        type="image/png"><img loading="lazy"
                                                                        src="//d33egg70nrp50s.cloudfront.net/Images/announcement/empty.png?v=20240708-4">
                                                                </picture>
                                                            </div>
                                                            <div class="empty-notification-content">
                                                                <h3>Belum Ada Notifikasi</h3>
                                                                <p>Saat Anda mendapatkan notifikasi, mereka akan muncul
                                                                    di sini</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="notification-footer">
                                                        <a href="#" id="read_all_announcements_button">Tandai
                                                            Semua Dibaca</a>
                                                        <a href="/message" id="view_more_button">Lihat
                                                            Selengkapnya</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-primary" data-dismiss="modal"
                                                    id="popup_modal_dismiss_button">OK</button>
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal"
                                                    id="popup_modal_cancel_button"
                                                    style="display: none">Batal</button>
                                                <button type="button" class="btn btn-primary"
                                                    id="popup_modal_confirm_button" style="display: none">OK</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <script>
                                    document.getElementById('unread_announcements').addEventListener('click', function(event) {
                                        event.preventDefault();
                                        document.getElementById('notification_popup').style.display = 'block';
                                    });


                                    document.querySelector('.close').addEventListener('click', function() {
                                        document.getElementById('notification_popup').style.display = 'none';
                                    });

                                    document.getElementById('popup_modal_dismiss_button').addEventListener('click', function() {
                                        document.getElementById('notification_popup').style.display = 'none';
                                    });

                                    function generateRandomTicketNumber() {
                                        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                                        let ticketNumber = '';
                                        for (let i = 0; i < 6; i++) {
                                            const randomIndex = Math.floor(Math.random() * characters.length);
                                            ticketNumber += characters[randomIndex];
                                        }
                                        return ticketNumber;
                                    }

                                    function updateAnnouncementCount() {
                                        $.ajax({
                                            url: '/getUnreadTransactionsCount',
                                            type: 'GET',
                                            dataType: 'json',
                                            success: function(response) {
                                                var unreadCount = response.unreadCount;
                                                $('#unread_announcements').attr('data-announcement-count', unreadCount);
                                                $('#announcement_count').text('(' + unreadCount + ')');
                                                $('#incoming-message').text('[' + unreadCount + ']');
                                                $('#transaksi-masuk').text('[' + unreadCount + ']');
                                            },
                                            error: function(xhr, status, error) {
                                                console.error('Error fetching unread transactions count:', error);
                                            }
                                        });

                                        $.ajax({
                                            url: '/getAllTransaksi',
                                            type: 'GET',
                                            dataType: 'json',
                                            success: function(response) {
                                                var $notificationList = $('#notification_list');
                                                $notificationList.empty(); // Kosongkan list notifikasi sebelumnya

                                                response.forEach(function(deposit) {

                                                    var formattedDate = new Date(deposit.created_at).toLocaleString();

                                                    var ticketNumber =
                                                        generateRandomTicketNumber();

                                                    var statusText = '';
                                                    var statusMessage = '';
                                                    switch (deposit.status_id) {
                                                        case 1:
                                                            statusText = 'Menunggu';
                                                            statusMessage = 'NEW';
                                                            break;
                                                        case 2:
                                                            statusText = 'Disetujui';
                                                            statusMessage = 'ACC';
                                                            break;
                                                        case 3:
                                                            statusText = 'Ditolak';
                                                            statusMessage = 'REJ';
                                                            break;
                                                        default:
                                                            statusText = 'Tidak Diketahui';
                                                            statusMessage = 'UNKNOWN';
                                                    }

                                                    var displayView = '';
                                                    switch (deposit.notes) {
                                                        case 'read':
                                                            displayView = 'true';
                                                            break;
                                                        case 'unread':
                                                            displayView = 'false';
                                                            break;
                                                        default:
                                                            displayView = 'Unknown Type';
                                                            break;
                                                    }
                                                    var typeText = '';
                                                    switch (deposit.type) {
                                                        case '1':
                                                            typeText = 'Deposit';
                                                            break;
                                                        case '2':
                                                            typeText = 'Withdraw';
                                                            break;
                                                        default:
                                                            typeText = 'Unknown Type';
                                                            break;
                                                    }

                                                    var notificationHtml = `
                        <a href="/message" style="display: block;">
                            <div class="notification-item" data-seen="${displayView}" data-notification-type="${deposit.type}" data-rec-id="${deposit.id}" data-message-sub-category="Deposit">
                                <div class="notification-image" data-message-category="Transaction" data-message-subcategory="Deposit" data-transaction-status="${statusMessage}">
                                    <img loading="lazy" src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                </div>
                                <div class="notification-content">
                                    <div class="notification-header">
                                        <span>${typeText}</span>
                                        <span>${formattedDate}</span>
                                    </div>
                                    <h3 class="notification-title">${typeText} : ${statusText}</h3>
                                    <p>Permintaan deposit IDR ${deposit.amount} anda telah ${statusText}. Nomor Tiket : ${ticketNumber}</p>
                                </div>
                            </div>
                        </a>
                    `;
                                                    $notificationList.append(notificationHtml);
                                                });

                                                // Menyembunyikan kontainer notifikasi kosong jika ada
                                                if (response.length === 0) {
                                                    $('#empty_notification_container').show();
                                                } else {
                                                    $('#empty_notification_container').hide();
                                                }
                                            },
                                            error: function(xhr, status, error) {
                                                console.error('Error fetching notifications:', error);
                                            }
                                        });
                                    }

                                    $(document).ready(function() {
                                        updateAnnouncementCount();
                                    });
                                </script>
                                <script>
                                    $(document).ready(function() {
                                        updateAnnouncementCount();

                                        $('#read_all_announcements_button').on('click', function() {
                                            $.ajax({
                                                url: '/markAllTransactionsAsRead',
                                                type: 'POST',
                                                dataType: 'json',
                                                data: {
                                                    _token: '{{ csrf_token() }}'
                                                },
                                                success: function(response) {
                                                    updateAnnouncementCount();
                                                },
                                                error: function(xhr, status, error) {
                                                    console.error('Error marking transactions as read:', error);
                                                }
                                            });
                                        });
                                    });
                                </script>
                                <div class="user-info-item">
                                    <a href="#"
                                        onclick="window.closeWindows(); document.querySelector('#logout-form').submit()">
                                        <form action="/logout" id="logout-form" method="post">
                                            @csrf
                                            <picture>
                                                <source
                                                    srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/logout.webp?v=20240708-4"
                                                    type="image/webp">
                                                <source
                                                    srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/logout.png?v=20240708-4"
                                                    type="image/png"><img loading="lazy"
                                                    src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/logout.png?v=20240708-4">
                                            </picture>
                                        </form>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('layout.desktop.site-header-auth')
    </div>
@else
    <div class="navbar navbar-fixed-top">
        <div class="topbar-container">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 topbar-inner-container">
                        <a href="/" class="logo">
                            <picture>
                                <img alt="Logo" loading="lazy" src="{{ asset('storage/' . $setting->logo) }}" />
                            </picture>
                        </a>
                        <div class="topbar-inner-group">
                            <div class="topbar-sub-section">
                                <div class="topbar-item language-selector-container"
                                    style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/flags.png?v=20240708-4);">
                                    <div id="language_selector_trigger" data-toggle="dropdown"
                                        class="language-selector-trigger" data-language="id">
                                        <i data-language="id"></i>
                                        BHS INDONESIA
                                    </div>
                                    <ul class="dropdown-menu language-selector">
                                        <li class="language_selector" data-language="en">
                                            <i data-language="en"></i>
                                            <div class="language-name">
                                                <div>ENGLISH</div>
                                                <div>ENGLISH</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="id">
                                            <i data-language="id"></i>
                                            <div class="language-name">
                                                <div>BHS INDONESIA</div>
                                                <div>INDONESIAN</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="kr">
                                            <i data-language="kr"></i>
                                            <div class="language-name">
                                                <div>한국어</div>
                                                <div>KOREAN</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="cn">
                                            <i data-language="cn"></i>
                                            <div class="language-name">
                                                <div>中文</div>
                                                <div>CHINESE</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="jp">
                                            <i data-language="jp"></i>
                                            <div class="language-name">
                                                <div>日本語</div>
                                                <div>JAPANESE</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="th">
                                            <i data-language="th"></i>
                                            <div class="language-name">
                                                <div>ไทย</div>
                                                <div>THAI</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="my">
                                            <i data-language="my"></i>
                                            <div class="language-name">
                                                <div>မြန်မာစာ</div>
                                                <div>BURMESE</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="kh">
                                            <i data-language="kh"></i>
                                            <div class="language-name">
                                                <div>ខេមរភាសា</div>
                                                <div>KHMER</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="hi">
                                            <i data-language="hi"></i>
                                            <div class="language-name">
                                                <div>हिन्दी</div>
                                                <div>HINDI</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="ta">
                                            <i data-language="ta"></i>
                                            <div class="language-name">
                                                <div>தமிழ்</div>
                                                <div>TAMIL</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="te">
                                            <i data-language="te"></i>
                                            <div class="language-name">
                                                <div>తెలుగు</div>
                                                <div>TELUGU</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="vi">
                                            <i data-language="vi"></i>
                                            <div class="language-name">
                                                <div>Tiếng Việt</div>
                                                <div>VIETNAMESE</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="bn">
                                            <i data-language="bn"></i>
                                            <div class="language-name">
                                                <div>বাংলাদেশী</div>
                                                <div>BENGALI</div>
                                            </div>
                                        </li>
                                        <li class="language_selector" data-language="pt">
                                            <i data-language="pt"></i>
                                            <div class="language-name">
                                                <div>Portugu&#234;s</div>
                                                <div>PORTUGESE</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="topbar-item">
                                    <a href="{{ $setting->livechat }}">
                                        <span class="js_live_chat_link live-chat">
                                            <i data-icon="live-chat"
                                                style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/live-chat.svg?v=20240708-4);"></i>
                                            Live Chat
                                        </span>
                                    </a>
                                </div>
                                <div class="topbar-item">
                                    <a href="/versi-mobile" rel="nofollow">
                                        <i data-icon="mobile"
                                            style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/mobile.svg?v=20240708-4);"></i>
                                        Versi Mobile
                                    </a>
                                </div>
                            </div>


                            <form action="/login" method="post">
                                @csrf
                                <div class="login-panel">
                                    <div class="login-panel-item">
                                        <label>
                                            <input type="text" name="username" placeholder="Nama Pengguna" />
                                        </label>
                                    </div>
                                    <div class="login-panel-item">
                                        <label>
                                            <span class="standard-password-field">
                                                <input type="password" name="password" placeholder="Kata Sandi"
                                                    id="password_input" />
                                                <i class="fa-solid fa-eye-slash"
                                                    style="color: rgb(25, 205, 163); cursor: pointer;"
                                                    id="password_toggle"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <div class="login-panel-item">
                                        <input type="submit" class="login-button" value="Masuk" />
                                    </div>
                                    <div class="login-panel-item">
                                        <a href="#" class="register-button" data-toggle="modal"
                                            data-target="#register_modal">
                                            Daftar
                                        </a>
                                    </div>
                                    <a href="/lupa-sandi" class="forgot-password-link" data-toggle="modal"
                                        data-target="#forgot_password_modal">
                                        Lupa Kata Sandi
                                    </a>
                                </div>
                            </form>

                            <script>
                                window.addEventListener('DOMContentLoaded', () => {
                                    const passwordInputTrigger = document.querySelector(
                                        '#password_toggle');
                                    const passwordInput = document.querySelector('#password_input');

                                    passwordInputTrigger.onclick = () => {
                                        if (passwordInput.type === 'password') {
                                            passwordInput.type = 'text';
                                            passwordInputTrigger.classList.remove('fa-eye-slash');
                                            passwordInputTrigger.classList.add('fa-eye');
                                        } else {
                                            passwordInput.type = 'password';
                                            passwordInputTrigger.classList.remove('fa-eye');
                                            passwordInputTrigger.classList.add('fa-eye-slash');
                                        }
                                    };
                                });
                            </script>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('layout.desktop.site-header')
    </div>
@endif
