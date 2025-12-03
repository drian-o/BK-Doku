 <div class="announcement-container">
     <div data-section="date">
         <i data-icon="news"
             style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/home/news.svg?v=20240708-4);"></i>
     </div>
     <div data-section="announcements">
         <div id="ER_1720862066402">
             <div class="tickercontainer">
                 <div class="mask">
                     <ul class="announcement-list newsticker" id="announcement_list"
                         style="width: 4125px; left: -1250.58px;">
                         <li class="tick-clones">Pemeliharaan Terjadwal: Crowd Play pada 2023-11-30 dari 7.00 AM
                             sampai
                             2025-06-02 6.30 PM (GMT + 7). Selama waktu ini, Crowd Play permainan tidak akan
                             tersedia.
                             Kami memohon maaf atas ketidaknyamanan yang mungkin ditimbulkan.</li>
                         <li>Selamat Datang di {{ $setting->web }} - Situs Judi Online Terbesar &amp; Terpercaya
                             Indonesia.</li>
                      
                         <li>Pemeliharaan Terjadwal: Crowd Play pada 2023-11-30 dari 7.00 AM sampai 2025-06-02 6.30
                             PM
                             (GMT + 7). Selama waktu ini, Crowd Play permainan tidak akan tersedia. Kami memohon
                             maaf
                             atas ketidaknyamanan yang mungkin ditimbulkan.</li>
                         <li class="tick-clones">Selamat Datang di {{ $setting->web }} - Situs Judi Online Terbesar
                             &amp; Terpercaya
                             Indonesia.</li>
                         
                     </ul>
                 </div>
             </div>
         </div>
     </div>
 </div>
 <div class="loyalty-info-container" id="loyalty_info_container">
     <div class="loyalty-info">
         <div class="loyalty-info-item loyalty-point-section" id="loyalty_point_section">
             <div class="loyalty-point-badge">
                 <a href="/loyalitas">
                     <img id="loyalty_level" loading="lazy"
                         src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/loyalty/badge/bronze.svg">
                     <input type="hidden" id="loyalty_level_img_path"
                         value="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/loyalty/badge/">
                 </a>
             </div>
             <div class="loyalty-point-detail">
                 <span class="username">{{ Auth()->user()->username }}</span>
                 <div class="loyalty-point-info" id="loyalty_point_info">
                     <a href="#">
                         <div class="lp-label with-border">LP</div>
                         <div class="loyalty-point" id="loyalty_point">{{ Auth()->user()->point_player }}</div>
                     </a>
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
                         var pointPlayer = {{ Auth::user()->point_player }};
                         var expPlayer = {{ Auth::user()->exp_player }};

                         // Update the progress percentage text
                         $("#loyalty_experience_percentage").text(
                             pointPlayer + " / " + expPlayer + " XP (" + data.progress.toFixed(2) + "%)"
                         );

                         // Update the progress bar directly
                         $("#loyalty_experience_progress").css({
                             "background-color": "#20B2AA",
                             "width": data.progress + "%"
                         });

                         if (data.progress >= 100) {
                             var newExpPlayer = expPlayer < 100000 ? 100000 : expPlayer + 100000;

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
                                         updateBadge(response.badge_level);

                                         $("#loyalty_experience_progress").css({
                                             "width": "0%"
                                         });

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

                     // Update the badge image for both navbar and side menu
                     $("#loyalty_level").attr("src", badgePath + badgeImage); // Navbar badge
                     $("#side_loyalty_level").attr("src", badgePath + badgeImage); // Side menu badge
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

                     // Update the badge image for both navbar and side menu
                     $("#loyalty_level").attr("src", badgePath + badgeImage); // Navbar badge

                 }
             });
         </script>
         <div class="loyalty-info-item user-info">
             <div class="user-balance">
                 <div class="balance-container">
                     <div class="username">
                         <span>
                             Dompet Utama
                         </span>
                     </div>
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
                                                 <span data-vendor-name="AdvantPlay Mini Game">AdvantPlay Mini
                                                     Game</span>
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
                                                 <span data-vendor-name="AdvantPlay Mini Game">AdvantPlay Mini
                                                     Game</span>
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
                 <button title="Refresh" id="refresh_balance" data-loading="false">
                     <i data-icon="refresh"
                         style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/refresh.png?v=20240708-4);"></i>
                 </button>
             </div>
         </div>
     </div>
     <div class="loyalty-experience" id="loyalty_experience">
         <div class="xp-label with-border">XP</div>
         <div class="loyalty-experience-progress">
             <span id="loyalty_experience_percentage">{{ Auth()->user()->point_player }} /
                 {{ Auth()->user()->exp_player }} XP (0%)</span>
             <div class="progress" id="loyalty_experience_progress"></div>
         </div>

         @if (Auth()->user()->reward == 1)
             <div id="afterMobile" class="daily-reward daily_reward_button" data-platform="Mobile"
                 data-daily-reward-available="false"
                 style="--chest-claimed-background: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/loyalty/chest-claimed.webp?v=20240708-4);
            --chest-available-background: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/loyalty/chest-available.webp?v=20240708-4);">
                 <a id="mobileClaimButton" class="btn daily-reward-button" href="#"></a>
             </div>
         @else
             <div id="rewardButtonMobile" class="daily-reward daily_reward_button" data-platform="Mobile"
                 data-daily-reward-available="true"
                 style="--chest-claimed-background: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/loyalty/chest-claimed.webp?v=20240708-4);
            --chest-available-background: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/loyalty/chest-available.webp?v=20240708-4);">
                 <a id="mobileClaimButton" class="btn daily-reward-button" href="#"></a>
             </div>
         @endif
     </div>
 </div>
 <div class="banner">
     <div id="banner_carousel" class="banner-carousel">
         @foreach ($banner as $banners)
             <div class="">
                 <a href="/promotion" target="_blank">
                     <img alt="RAJA SLOT INDONESIA" height="600" loading="lazy"
                         src="{{ asset('storage/' . $banners->img) }}" title="{{ $banners->title }}"
                         width="1920" />
                 </a>
             </div>
         @endforeach
     </div>
 </div>
 <script type="text/javascript">
     $(document).ready(function() {
         $('#banner_carousel').slick({
             autoplay: true,
             autoplaySpeed: 3000,
             dots: true,
             arrows: true,
             infinite: true,
             speed: 500,
             fade: true,
             cssEase: 'linear'
         });
     });
 </script>
 <div data-section="jackpot">
     <a href="/">
         <div class="progressive-jackpot">
             <picture>
                 <source
                     srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/jackpot/jackpot-play-logo.webp?v=20240708-4"
                     type="image/webp" />
                 <source
                     srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/jackpot/jackpot-play-logo.png?v=20240708-4"
                     type="image/png" /><img alt="Jackpot Play" class="img-responsive jackpot-play" height="110"
                     loading="lazy"
                     src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/jackpot/jackpot-play-logo.png?v=20240708-4"
                     width="450" />
             </picture>
             <div class="jackpot-container"
                 style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/jackpot/jackpot-container.png?v=20240708-4);">
                 <div class="jackpot-amount">
                     <span class="jackpot-currency jackpot_currency" style="font-size: 2.3rem">IDR</span>
                     <span id="progressive_jackpot_mobile" data-progressive-jackpot-url="https://jp-api.zoomwlb.com"
                         style="font-size: 2.3rem"></span>
                 </div>
             </div>
         </div>
     </a>
 </div>
 <script>
     let jackpotValue = localStorage.getItem('jackpotValue');

     if (!jackpotValue) {
         jackpotValue = 9378170590;
     } else {
         jackpotValue = parseInt(jackpotValue);
     }

     function updateJackpotDisplay() {
         const formattedJackpotValue = jackpotValue.toLocaleString('en-US');
         document.getElementById('progressive_jackpot_mobile').textContent = formattedJackpotValue;
     }
     updateJackpotDisplay();
     setInterval(() => {
         const increment = 10;
         jackpotValue += increment;

         localStorage.setItem('jackpotValue', jackpotValue);

         updateJackpotDisplay();
     }, 1000);
 </script>
 <div class="main-menu-outer-container" id="main_menu_outer_container">
     <i class="fas fa-chevron-left left_trigger"></i>
     <main>
         <a href="/slots">
             <img alt="Hot Games" height="25" loading="lazy"
                 src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/menu/hot-games.svg?v=20240708-4"
                 style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/menu/hot-games-active.svg?v=20240708-4);"
                 width="25" />
             Hot Games
         </a>
         <a href="/slots">
             <img alt="Slots" height="25" loading="lazy"
                 src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/menu/slots.svg?v=20240708-4"
                 style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/menu/slots-active.svg?v=20240708-4);"
                 width="25" />
             Slots
         </a>
         <a href="/casino">
             <img alt="Live Casino" height="25" loading="lazy"
                 src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/menu/casino.svg?v=20240708-4"
                 style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/menu/casino-active.svg?v=20240708-4);"
                 width="25" />
             Live Casino
         </a>
         <a href="/sports">
             <img alt="Olahraga" height="25" loading="lazy"
                 src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/menu/sports.svg?v=20240708-4"
                 style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/menu/sports-active.svg?v=20240708-4);"
                 width="25" />
             Olahraga
         </a>
         <a href="/arcade">
             <img alt="Arcade" height="25" loading="lazy"
                 src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/menu/arcade.svg?v=20240708-4"
                 style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/menu/arcade-active.svg?v=20240708-4);"
                 width="25" />
             Arcade
         </a>
         <a href="/poker">
             <img alt="Poker" height="25" loading="lazy"
                 src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/menu/poker.svg?v=20240708-4"
                 style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/menu/poker-active.svg?v=20240708-4);"
                 width="25" />
             Poker
         </a>
         <a href="/cockfight">
             <img alt="Sabung Ayam" height="25" loading="lazy"
                 src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/menu/cockfight.svg?v=20240708-4"
                 style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/menu/cockfight-active.svg?v=20240708-4);"
                 width="25" />
             Sabung Ayam
         </a>
     </main>
     <i class="fas fa-chevron-right right_trigger"></i>
 </div>

 <div id="menu_preview_container" class="menu-preview-container">
     <div class="game-list-container" data-game-category="Unknown">
         <div class="game-list"></div>
     </div>
     <div class="game-list-container" data-game-category="Slots">
         <div class="game-list"></div>
     </div>
     <div class="game-list-container" data-game-category="Casino">
         <div class="game-list"></div>
     </div>
     <div class="game-list-container" data-game-category="Sports">
         <div class="game-list"></div>
     </div>
     <div class="game-list-container" data-game-category="CrashGame">
         <div class="game-list"></div>
     </div>
     <div class="game-list-container" data-game-category="Arcade">
         <div class="game-list"></div>
     </div>
     <div class="game-list-container" data-game-category="Poker">
         <div class="game-list"></div>
     </div>
     <div class="game-list-container" data-game-category="Cockfight">
         <div class="game-list"></div>
     </div>
 </div>

 <div class="popular-game-title-container">
     <div class="title">
         <i data-icon="popular-games"
             style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/popular-games.png?v=20240708-4);"></i>
         Game Populer
     </div>
 </div>
 <div class="scrollable-game-list" id="popular_game_container">
     <i class="left-chevron left_trigger"
         style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/icons/chevron-down.svg?v=20240708-4);"></i>
     <main class="game_list game-list">
         <div class="games-group">
             <div class="game-item game_item" data-game="Sweet Bonanza 1000™">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitswx.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitswx.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Sweet Bonanza 1000™" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitswx.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Sweet Bonanza 1000™">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Sweet Bonanza 1000™</span>
                 </label>
             </div>
             <div class="game-item game_item" data-game="Mahjong Ways">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Mahjong Ways" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Mahjong Ways">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Mahjong Ways</span>
                 </label>
             </div>
         </div>
         <div class="games-group">
             <div class="game-item game_item" data-game="Mahjong Wins 2">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vswaysmahwin2.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vswaysmahwin2.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Mahjong Wins 2" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vswaysmahwin2.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Mahjong Wins 2">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Mahjong Wins 2</span>
                 </label>
             </div>
             <div class="game-item game_item" data-game="Jajanan Pasar">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitjpas.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitjpas.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Jajanan Pasar" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitjpas.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Jajanan Pasar">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Jajanan Pasar</span>
                 </label>
             </div>
         </div>
         <div class="games-group">
             <div class="game-item game_item" data-game="SixSixSix">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1534.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1534.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="SixSixSix" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1534.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="SixSixSix">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">SixSixSix</span>
                 </label>
             </div>
             <div class="game-item game_item" data-game="Gates of Olympus 1000™">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympx.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympx.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Gates of Olympus 1000™" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympx.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Gates of Olympus 1000™">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Gates of Olympus 1000™</span>
                 </label>
             </div>
         </div>
         <div class="games-group">
             <div class="game-item game_item" data-game="Ze Zeus">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1508.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1508.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Ze Zeus" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1508.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Ze Zeus">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Ze Zeus</span>
                 </label>
             </div>
             <div class="game-item game_item" data-game="Way of Ninja">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympnin.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympnin.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Way of Ninja" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympnin.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Way of Ninja">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Way of Ninja</span>
                 </label>
             </div>
         </div>
         <div class="games-group">
             <div class="game-item game_item" data-game="Starlight Princess™">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20starlight.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20starlight.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Starlight Princess™" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20starlight.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Starlight Princess™">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Starlight Princess™</span>
                 </label>
             </div>
             <div class="game-item game_item" data-game="Mahjong Ways 2">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways2.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways2.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Mahjong Ways 2" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways2.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Mahjong Ways 2">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Mahjong Ways 2</span>
                 </label>
             </div>
         </div>
         <div class="games-group">
             <div class="game-item game_item" data-game="Nexus Gates of Olympus™">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20nexusgates.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20nexusgates.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Nexus Gates of Olympus™" height="100"
                                 loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20nexusgates.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Nexus Gates of Olympus™">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Nexus Gates of Olympus™</span>
                 </label>
             </div>
             <div class="game-item game_item" data-game="Wild Bounty Showdown">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_135.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_135.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Wild Bounty Showdown" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_135.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Wild Bounty Showdown">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Wild Bounty Showdown</span>
                 </label>
             </div>
         </div>
         <div class="games-group">
             <div class="game-item game_item" data-game="Lucky Twins Nexus">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsNexus.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsNexus.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Lucky Twins Nexus" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsNexus.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Lucky Twins Nexus">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Lucky Twins Nexus</span>
                 </label>
             </div>
             <div class="game-item game_item" data-game="Nexus Knockout Football Rush">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGKnockoutFootballRushNexus.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGKnockoutFootballRushNexus.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Nexus Knockout Football Rush" height="100"
                                 loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGKnockoutFootballRushNexus.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Nexus Knockout Football Rush">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Nexus Knockout Football Rush</span>
                 </label>
             </div>
         </div>
         <div class="games-group">
             <div class="game-item game_item" data-game="The Crypt">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/thecrypt00000000.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/thecrypt00000000.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="The Crypt" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/thecrypt00000000.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="The Crypt">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">The Crypt</span>
                 </label>
             </div>
             <div class="game-item game_item" data-game="Lucky Twins Wilds">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsWilds.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsWilds.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Lucky Twins Wilds" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsWilds.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Lucky Twins Wilds">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Lucky Twins Wilds</span>
                 </label>
             </div>
         </div>
         <div class="games-group">
             <div class="game-item game_item" data-game="Mental">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/mental0000000000.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/mental0000000000.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Mental" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/mental0000000000.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Mental">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Mental</span>
                 </label>
             </div>
             <div class="game-item game_item" data-game="Fortune Gems 2">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_223.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_223.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Fortune Gems 2" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_223.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Fortune Gems 2">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Fortune Gems 2</span>
                 </label>
             </div>
         </div>
         <div class="games-group">
             <div class="game-item game_item" data-game="Hot Hot Fruit">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/HB0160.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/HB0160.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Hot Hot Fruit" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/HB0160.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Hot Hot Fruit">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Hot Hot Fruit</span>
                 </label>
             </div>
             <div class="game-item game_item" data-game="Fortune Gems">
                 <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                         <picture>
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_109.webp?v=20240708-4"
                                 type="image/webp" />
                             <source
                                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_109.jpg?v=20240708-4"
                                 type="image/jpeg" /><img alt="Fortune Gems" height="100" loading="lazy"
                                 src="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_109.jpg?v=20240708-4"
                                 width="100" />
                         </picture>
                         <span class="link-container">
                             <a href="/slots" class="play-now" data-game="Fortune Gems">
                                 MAIN
                             </a>
                         </span>
                     </span>
                     <span class="game-name">Fortune Gems</span>
                 </label>
             </div>
         </div>
     </main>
     <i class="right-chevron right_trigger"
         style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/icons/chevron-down.svg?v=20240708-4);"></i>
 </div>

 <div class="download-apk-container" id="download_apk"
     style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/home/download-apk-background.webp?v=20240708-4);">
     <div>
         <div class="h2">
             <span>Unduh Gratis</span><br />
             {{ $setting->web }} App
         </div>
         <div class="h3">
             Tersedia dalam Android!
         </div>
         <div class="download-apk-info">
             <div class="download-apk-section">
                 <a href="{{ route('download', ['filename' => 'one-heart.apk']) }}">
                     <picture>
                         <source
                             srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/home/download-android-button.webp?v=20240708-4"
                             type="image/webp" />
                         <source
                             srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/home/download-android-button.png?v=20240708-4"
                             type="image/png" /><img alt="Download APK" class="img-responsive" height="125"
                             loading="lazy"
                             src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/home/download-android-button.png?v=20240708-4"
                             width="125" />
                     </picture>
                 </a>
             </div>
         </div>
         <div>
             <a class="download-apk-guide" href="{{ route('download', ['filename' => 'one-heart.apk']) }}"
                 data-toggle="modal" data-target="#apk_install_guide_modal">Panduan instalasi</a>
         </div>
     </div>
     <div>
         <picture>
             <source
                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/home/download-apk-phone.webp?v=20240708-4"
                 type="image/webp" />
             <source
                 srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/home/download-apk-phone.png?v=20240708-4"
                 type="image/png" /><img alt="Download APK" class="img-responsive" height="151" loading="lazy"
                 src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/home/download-apk-phone.png?v=20240708-4"
                 width="215" />
         </picture>
     </div>
 </div>
 <div id="apk_install_guide_modal" class="modal download-popup-modal" role="dialog" data-title="Panduan Instalasi"
     aria-hidden="false">
     <div class="modal-dialog">
         <div class="modal-content">
             <div class="modal-header">
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">×</span>
                 </button>
                 <div class="modal-title" id="apk_install_guide_modal_title">
                     Panduan Instalasi
                 </div>
             </div>
             <div class="modal-body" id="apk_install_guide_modal_body">
                 <span><img alt="Android" height="20" loading="lazy"
                         src="https://d33egg70nrp50s.cloudfront.net/Images/icons/android-logo.svg?v=20240708-4"
                         width="20" /> Instalasi Android</span>
                 <ol>
                     <li>
                         Pindai kode QR untuk Android
                     </li>
                     <li>
                         Pilih buka situs web
                     </li>
                     <li>
                         Pilih "UNDUH" untuk mengunduh {{ $setting->web }} App
                     </li>
                     <li>
                         Pilih "PENGATURAN"
                     </li>
                     <li>
                         Pilih "Mengizinkan" dari sumber kami
                     </li>
                     <li>
                         Pilih "Terima"
                     </li>
                     <li>
                         Pilih "INSTAL"
                     </li>
                 </ol>
             </div>
         </div>
     </div>
 </div>

 <div class="site-contacts">
     <div class="container">
         <div class="row">
             <div class="col-md-12">
                 <ul class="contact-list">
                     <li>
                         <a href="https://wa.me/{{ $setting->whatsapp }}" target="_blank" rel="noopener nofollow">
                             <i>
                                 <img alt="Contact" height="12" loading="lazy"
                                     src="https://d33egg70nrp50s.cloudfront.net/Images/communications/whatsapp.svg?v=20240708-4"
                                     width="12" />
                             </i>
                             -
                         </a>
                     </li>
                     <li>
                         <a href="https://t.me/{{ $setting->telegram }}" target="_blank" rel="noopener nofollow">
                             <i>
                                 <img alt="Contact" height="12" loading="lazy"
                                     src="https://d33egg70nrp50s.cloudfront.net/Images/communications/telegram.svg?v=20240708-4"
                                     width="12" />
                             </i>
                             {{ $setting->web }}GACORKU
                         </a>
                     </li>
                 </ul>
             </div>
         </div>
     </div>
 </div>

 <div class="container">
     <div class="row">
         <div class="col-md-12">
             <ul class="social-media-list">
                 <li>
                     <a href="{{ $setting->livechat }}" target="_blank" rel="nofollow">
                         <img src="https://api2-aj8.imgzm.com/images/aj8/Whatsapp_983f81b4-f547-4b83-b424-ccd0a64bcf00_1632410383380.png"
                             alt="Social Media" width="32" height="32" loading="lazy" />
                     </a>
                 </li>
                 <li>
                     <a href="https://t.me/{{ $setting->telegram }}" target="_blank" rel="nofollow">
                         <img src="https://api2-aj8.imgzm.com/images/aj8/TELE_48148997-82fe-4ce1-bc1e-2bc556b08bbe_1632410369453.png"
                             alt="Social Media" width="32" height="32" loading="lazy" />
                     </a>
                 </li>
             </ul>
             <ul class="bank-list">
                 <li>
                     <div data-online="true">
                         <img src="https://api2-aj8.imgzm.com/images/aj8//BCA_b322db22-8f6b-45b8-896d-0586197cb678_1720653851590.png"
                             width="80" height="40" alt="Bank" loading="lazy" />
                     </div>
                 </li>
                 <li>
                     <div data-online="true">
                         <img src="https://api2-aj8.imgzm.com/images/aj8//BNI_c1305cdb-b54c-4e31-b651-049ee8e34481_1720653851590.png"
                             width="80" height="40" alt="Bank" loading="lazy" />
                     </div>
                 </li>
                 <li>
                     <div data-online="true">
                         <img src="https://api2-aj8.imgzm.com/images/aj8//BRI_340f7073-6ffa-4a79-8afd-012a8c74eec2_1720653851590.png"
                             width="80" height="40" alt="Bank" loading="lazy" />
                     </div>
                 </li>
                 <li>
                     <div data-online="true">
                         <img src="https://api2-aj8.imgzm.com/images/aj8//MANDIRI_2ee9b623-a3f6-44be-88a5-056e41fc5f7e_1720653851590.png"
                             width="80" height="40" alt="Bank" loading="lazy" />
                     </div>
                 </li>
             </ul>
         </div>
     </div>
 </div>

 <div id="popup_modal" class="modal popup-modal" role="dialog" data-title="PERHATIAN" aria-label="Popup Modal">
     <div class="modal-dialog">
         <div class="modal-content"
             style="--desktop-popup-alert-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/popup/alert.png?v=20240708-4);;--desktop-popup-notification-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/popup/notification.png?v=20240708-4);;--mobile-popup-alert-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/popup/alert.png?v=20240708-4);;--mobile-popup-notification-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/popup/notification.png?v=20240708-4);;--event-giveaway-popper-src: url(//d33egg70nrp50s.cloudfront.net/Images/giveaway/popper.png?v=20240708-4);">
             <div class="modal-header">
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">×</span>
                 </button>
                 <h4 class="modal-title" id="popup_modal_title">
                     PERHATIAN
                 </h4>
             </div>
             <div class="modal-body" id="popup_modal_body">
                 <a href="https://xn--82ca2cdae2ab4dc5f8bdeee4z9f.com/" target="_self" class="popup-thumbnail">
                     <img loading="lazy" src="{{ asset('storage/' . $setting->logo) }}" />
                 </a>
                 <p><span style="color: #ffffff;"><strong>MOHON PERHATIAN
                             !!!</strong><strong><br /></strong><strong><br /></strong><strong>Jika ada pihak yang
                             mengatasnamakan {{ $setting->web }} meminta untuk melakukan transfer dengan iming-iming
                             BONUS/HADIAH
                             terutama melalui media sosial seperti TELEGRAM maka dapat dipastikan bahwa itu adalah
                             PENIPU dan segala kerugian yang terjadi BUKAN merupakan TANGGUNG JAWAB kami. Pihak
                             {{ $setting->web }} tidak pernah meminta member untuk transfer untuk mendapatkan
                             HADIAH/BONUS</strong></span></p>
                 <p><span style="color: #ffffff;"><strong>Mohon selalu cek nomor rekening yang aktif di halaman
                             deposit web kami sebelum transfer atau hubungi admin web kami melalui LiveChat jika ada
                             hal yang tidak dimengerti.</strong></span></p>
             </div>
             <div class="modal-footer">
                 <button type="button" class="btn btn-primary" data-dismiss="modal"
                     id="popup_modal_dismiss_button">
                     OK
                 </button>
                 <button type="button" class="btn btn-secondary" data-dismiss="modal"
                     id="popup_modal_cancel_button" style="display: none">
                     Batal
                 </button>
                 <button type="button" class="btn btn-primary" id="popup_modal_confirm_button"
                     style="display: none">
                     OK
                 </button>
             </div>
         </div>
     </div>
 </div>
