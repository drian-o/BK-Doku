<link rel="stylesheet" href="../../../assets/css/desktop/message.css">
<header class="site-header">
    <a href="/" class="logo">
        <picture>
            <img alt="Logo" loading="lazy" src="{{ asset('storage/' . $setting->logo) }}">
        </picture>
    </a>

    <div class="header-info">
        <div class="user-balance">
            <button title="Refresh" class="refresh_balance" data-loading="true">
                <i data-icon="refresh"
                    style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/refresh.png?v=20240708-4);"></i>
            </button>
            <span class="balance">
                <a href="#" data-toggle="dropdown">
                    IDR
                    <span class="total_balance">{{ $balance }}</span>
                    <span class="locked-balance locked_balance_container" hidden="">
                        <i class="glyphicon glyphicon-lock"></i>
                        <span class="total_locked_balance">{{ $balance }}</span>
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
                                        <span data-vendor-name="Pragmatic Play">Pragmatic Play</span>
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
                                        <span data-vendor-name="No Limit City">No Limit City</span>
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
                                        <span data-vendor-name="Spade Gaming">Spade Gaming</span>
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
                                        <span data-vendor-name="Top Trend Gaming">Top Trend Gaming</span>
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
                                        <span data-vendor-name="Big Time Gaming">Big Time Gaming</span>
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
                                        <span data-vendor-name="Real Time Gaming">Real Time Gaming</span>
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
                                        <span data-vendor-name="Sexy Baccarat">Sexy Baccarat</span>
                                    </div>
                                    <div data-vendor-game-code="27">0.00</div>
                                </div>
                                <div>
                                    <div>
                                        <span data-vendor-name="Pretty Gaming">Pretty Gaming</span>
                                    </div>
                                    <div data-vendor-game-code="39">0.00</div>
                                </div>
                                <div>
                                    <div>
                                        <span data-vendor-name="Oriental Gaming">Oriental Gaming</span>
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
                                        <span data-vendor-name="568Win Casino">568Win Casino</span>
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
                                        <span data-vendor-name="SBO Sportsbook">SBO Sportsbook</span>
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
                                        <span data-vendor-name="AdvantPlay Mini Game">AdvantPlay Mini Game</span>
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
                                        <span data-vendor-name="Spade Gaming">Spade Gaming</span>
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
                                        <span data-vendor-name="AdvantPlay Mini Game">AdvantPlay Mini Game</span>
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
            </span>
        </div>
        <div class="unread-announcements-button" data-announcement-count="0" id="mobile_unread_announcements">
            <a href="/message">
                <img loading="lazy"
                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/bell.svg?v=20240708-4">
            </a>
        </div>
    </div>

    <label class="site-menu-trigger" for="site_menu_trigger_input" data-new-notification="false">
        <i data-icon="menu"></i>
    </label>
</header>
<div id="mobile_notification_popup" class="modal popup-modal concise-transaction-popup" role="dialog"
    data-title="" aria-label="Popup Modal" aria-hidden="false">
    <div class="modal-dialog">
        <div class="modal-content"
            style="--desktop-popup-alert-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/popup/alert.png?v=20240708-4); --desktop-popup-notification-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/popup/notification.png?v=20240708-4); --mobile-popup-alert-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/popup/alert.png?v=20240708-4); --mobile-popup-notification-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/popup/notification.png?v=20240708-4); --event-giveaway-popper-src: url(//d33egg70nrp50s.cloudfront.net/Images/giveaway/popper.png?v=20240708-4);">
            <div class="modal-header">
                <button type="button" class="close" aria-label="Close" id="mobile_modal_close_button">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 class="modal-title" id="mobile_popup_modal_title">Notifikasi</h4>
            </div>
            <div class="modal-body" id="mobile_popup_modal_body">
                <div class="notification-popup-body" id="mobile_notification_popup_body"
                    style="background-color: #0c0b0b">
                    <h1 class="notification-popup-title">Notifikasi</h1>

                    <div class="notification-tabs">
                        <div class="notification-tab-item" data-tab="transaction" data-active="true" data-count="1">
                            Transaksi <span id="mobile_announcement_count">(0)</span>
                        </div>
                        <div class="notification-tab-item" data-tab="promo" data-active="false" data-count="0">
                            Promo <span>(0)</span>
                        </div>
                        <div class="notification-tab-item" data-tab="info" data-active="false" data-count="0">
                            Info <span>(0)</span>
                        </div>
                    </div>
                    <div class="notification-content">
                        <div class="notification-list" id="mobile_notification_list">
                            <!-- Daftar notifikasi akan diisi oleh JavaScript -->
                            <input id="mobile_request_verification_token" type="hidden"
                                value="k7bXnOXjNeISS20SF7R-iiR56yXxEZwSDkjMw0kRPnWZF6jeVajxWeYoUlz8s72vhHeeLIektFk56dSoD-aFPYME0va--xn1NGql4mwRuL01">
                        </div>
                        <div class="empty-notification-container" id="mobile_empty_notification_container"
                            style="display: none;">
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
                    <div class="notification-footer" style="background-color: #0c0b0b">
                        <a href="#" id="mobile_read_all_announcements_button">Tandai
                            Semua Dibaca</a>
                        <a href="/message" id="mobile_view_more_button">Lihat Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal"
                    id="mobile_popup_modal_dismiss_button">OK</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal"
                    id="mobile_popup_modal_cancel_button" style="display: none">Batal</button>
                <button type="button" class="btn btn-primary" id="mobile_popup_modal_confirm_button"
                    style="display: none">OK</button>
            </div>
        </div>
    </div>
</div>

<script>
    // Penanganan klik untuk membuka modal notifikasi
    document.getElementById('mobile_unread_announcements').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('mobile_notification_popup').style.display = 'block';
    });

    // Penanganan klik untuk menutup modal notifikasi
    document.getElementById('mobile_modal_close_button').addEventListener('click', function() {
        document.getElementById('mobile_notification_popup').style.display = 'none';
    });

    document.getElementById('mobile_popup_modal_dismiss_button').addEventListener('click', function() {
        document.getElementById('mobile_notification_popup').style.display = 'none';
    });

    // Fungsi untuk menghasilkan nomor tiket acak
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
                $('#mobile_unread_announcements').attr('data-announcement-count', unreadCount);
                $('#mobile_announcement_count').text('(' + unreadCount + ')');
                $('#transaction_in').text('(' + unreadCount + ')');
                $('a[data-target="#announcement-container"]').attr('data-count', unreadCount);
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
                var $notificationList = $('#mobile_notification_list');
                $notificationList.empty();

                response.forEach(function(deposit) {
                    var formattedDate = new Date(deposit.created_at).toLocaleString();
                    var ticketNumber = generateRandomTicketNumber();

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

                    var displayView = deposit.notes === 'read' ? 'true' : 'false';
                    var typeText = deposit.type === '1' ? 'Deposit' : 'Withdraw';

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
                    </a>`;

                    $notificationList.append(notificationHtml);
                });

                if (response.length === 0) {
                    $('#mobile_empty_notification_container').show();
                } else {
                    $('#mobile_empty_notification_container').hide();
                }
            },
            error: function(xhr, status, error) {
                console.error('Error fetching transactions:', error);
            }
        });
    }
    $(document).ready(function() {
        updateAnnouncementCount();
    });
</script>
