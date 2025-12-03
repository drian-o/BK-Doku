 @if (Auth::check())
     <div class="site-menu">
         <label for="site_menu_trigger_input"></label>
         <ul>
             <li>
                 <div class="side-menu-user-info">
                     <img id="side_loyalty_level" loading="lazy"
                         src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/loyalty/badge/bronze.svg?v=20240708-4">
                     <input type="hidden" id="loyalty_level_img_path"
                         value="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/loyalty/badge/">

                     <div>
                         <div class="username">{{ Auth()->user()->username }}</div>
                         Selamat Datang!
                     </div>
                     <div class="side-menu-balance-field">
                         <div class="balance">
                             IDR
                             <span class="total_balance">{{ $balance }}</span>
                             <div class="locked-balance locked_balance_container" hidden="">
                                 <i class="glyphicon glyphicon-lock"></i>
                                 <span class="total_locked_balance">{{ $balance }}</span>
                             </div>
                         </div>
                     </div>
                     <div class="side-menu-balance-field">
                         <div class="lp-label">LP</div>
                         <span class="loyalty-point">{{ Auth()->user()->point_player }}</span>
                     </div>
                     <div class="buttons-container">

                         <form action="/logout" id="logout-form" method="post">
                             @csrf
                             <button class="logout-button">
                                 Keluar
                             </button>
                         </form>

                     </div>
                 </div>

             </li>
             <li>
                 <a href="/profile">
                     <i data-icon="my-account">
                         <img alt="MyAccount" height="18" loading="lazy"
                             src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/profile.svg?v=20240708-4"
                             width="18">
                     </i>
                     Akun Saya
                 </a>
             </li>
             <li>
                 <a href="/deposit">
                     <i data-icon="wallet">
                         <img alt="Wallet" height="18" loading="lazy"
                             src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/wallet.svg?v=20240708-4"
                             width="18">
                     </i>
                     Banking
                 </a>
             </li>
             <li>
                 <a href="/bonus">
                     <i data-icon="claims">
                         <img alt="Claims" height="18" loading="lazy"
                             src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/claims.svg?v=20240708-4"
                             width="18">
                     </i>
                     Bonus
                 </a>
             </li>
             <li>
                 <a href="/message">
                     <i data-icon="message" data-new-notification="false">
                         <img alt="Message" height="18" loading="lazy"
                             src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/message.svg?v=20240708-4"
                             width="18">
                     </i>
                     Pesan
                 </a>
             </li>
             <li>
                 <details>
                     <summary>
                         <section>
                             <span>
                                 <i data-icon="games">
                                     <img alt="Games" height="18" loading="lazy"
                                         src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/games.svg?v=20240708-4"
                                         width="18">
                                 </i>
                                 Permainan
                             </span>
                             <i class="fas fa-chevron-right"></i>
                         </section>
                     </summary>
                     <article>
                         <ul>
                             <li>
                                 <a href="/slots">Hot Games</a>
                             </li>
                             <li>
                                 <a href="/slots">Slots</a>
                             </li>
                             <li>
                                 <a href="/casino">Live Casino</a>
                             </li>
                             <li>
                                 <a href="/sports">Olahraga</a>
                             </li>
                             <li>
                                 <a href="/arcade">Arcade</a>
                             </li>
                             <li>
                                 <a href="/poker">Poker</a>
                             </li>
                             <li>
                                 <a href="/cockfight">Sabung Ayam</a>
                             </li>
                         </ul>
                     </article>
                 </details>
             </li>
             <li>
                 <a href="/loyalitas">
                     <i data-icon="loyalty-reward">
                         <img alt="Loyalty Reward" height="18" loading="lazy"
                             src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/loyalty-reward.svg?v=20240708-4"
                             width="18">
                     </i>
                     Hadiah Loyalitas
                 </a>
             </li>
             <li>
                 <a href="/history">
                     <i data-icon="reporting">
                         <img alt="Reporting" height="18" loading="lazy"
                             src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/reporting.svg?v=20240708-4"
                             width="18">
                     </i>
                     Riwayat Taruhan
                 </a>
             </li>
             <li>
                 <a href="/history/bonus">
                     <i data-icon="reporting">
                         <img alt="Reporting" height="18" loading="lazy"
                             src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/reporting.svg?v=20240708-4"
                             width="18">
                     </i>
                     Riwayat Klaim
                 </a>
             </li>
             <li>
                 <a href="/refferal">
                     <i data-icon="referral">
                         <img alt="Referral" height="18" loading="lazy"
                             src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/referral.svg?v=20240708-4"
                             width="18">
                     </i>
                     Referensi
                 </a>
             </li>
             <li>
                 <div class="topbar-item language-selector-container"
                     style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/flags.png?v=20240708-4);">
                     <details>
                         <summary>
                             <section>
                                 <span>
                                     <i data-icon="language">
                                         <img alt="Language" height="18" loading="lazy"
                                             src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/language.svg?v=20240708-4"
                                             width="18">
                                     </i>
                                     BHS INDONESIA
                                 </span>
                                 <i class="fas fa-chevron-right"></i>
                             </section>
                         </summary>
                         <article>
                             <ul class="language-selector">
                                 <li>
                                     <a href="javascript:changeLanguage('en')">
                                         <i data-language="en"></i>
                                         <div class="language-name">
                                             <div>ENGLISH</div>
                                             <div>ENGLISH</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('id')">
                                         <i data-language="id"></i>
                                         <div class="language-name">
                                             <div>BHS INDONESIA</div>
                                             <div>INDONESIAN</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('kr')">
                                         <i data-language="kr"></i>
                                         <div class="language-name">
                                             <div>한국어</div>
                                             <div>KOREAN</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('cn')">
                                         <i data-language="cn"></i>
                                         <div class="language-name">
                                             <div>中文</div>
                                             <div>CHINESE</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('jp')">
                                         <i data-language="jp"></i>
                                         <div class="language-name">
                                             <div>日本語</div>
                                             <div>JAPANESE</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('th')">
                                         <i data-language="th"></i>
                                         <div class="language-name">
                                             <div>ไทย</div>
                                             <div>THAI</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('my')">
                                         <i data-language="my"></i>
                                         <div class="language-name">
                                             <div>မြန်မာစာ</div>
                                             <div>BURMESE</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('kh')">
                                         <i data-language="kh"></i>
                                         <div class="language-name">
                                             <div>ខេមរភាសា</div>
                                             <div>KHMER</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('hi')">
                                         <i data-language="hi"></i>
                                         <div class="language-name">
                                             <div>हिन्दी</div>
                                             <div>HINDI</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('ta')">
                                         <i data-language="ta"></i>
                                         <div class="language-name">
                                             <div>தமிழ்</div>
                                             <div>TAMIL</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('te')">
                                         <i data-language="te"></i>
                                         <div class="language-name">
                                             <div>తెలుగు</div>
                                             <div>TELUGU</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('vi')">
                                         <i data-language="vi"></i>
                                         <div class="language-name">
                                             <div>Tiếng Việt</div>
                                             <div>VIETNAMESE</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('bn')">
                                         <i data-language="bn"></i>
                                         <div class="language-name">
                                             <div>বাংলাদেশী</div>
                                             <div>BENGALI</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('pt')">
                                         <i data-language="pt"></i>
                                         <div class="language-name">
                                             <div>Português</div>
                                             <div>PORTUGESE</div>
                                         </div>
                                     </a>
                                 </li>
                             </ul>
                         </article>
                     </details>
                 </div>
             </li>
             <li>
                 <a href="{{ route('download', ['filename' => 'one-heart.apk']) }}">
                     <i data-icon="download">
                         <img alt="Download" height="18" loading="lazy"
                             src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/download.svg?v=20240708-4"
                             width="18">
                     </i>
                     Unduh APK Permainan
                 </a>
             </li>
             <li>
                 <a href="/" rel="nofollow">
                     <i data-icon="desktop">
                         <img alt="Desktop" height="18" loading="lazy"
                             src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/desktop.svg?v=20240708-4"
                             width="18">
                     </i>
                     Versi Desktop
                 </a>
             </li>
         </ul>
     </div>
     <script>
         $(document).ready(function() {
             fetchUserBadge();

             function fetchUserBadge() {
                 $.ajax({
                     type: "GET",
                     url: "/user-badge",
                     success: function(response) {
                         if (response.success) {
                             updateBadge(response.badge_level);
                         } else {
                             console.error("Failed to fetch user badge data");
                         }
                     },
                     error: function(error) {
                         console.error("Error fetching user badge data:", error);
                     }
                 });
             }

             function updateBadge(badgeLevel) {
                 var badgePath = $("#loyalty_level_img_path").val();
                 var badgeImage = '';

                 switch (badgeLevel) {
                     case 'diamond':
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
         });
     </script>
 @else
     <div class="site-menu">
         <label for="site_menu_trigger_input"></label>
         <ul>
             <li>
                 <form action="/login" method="post">
                     @csrf
                     <div class="side-menu-login-panel">
                         <div class="login-panel-item">
                             <i data-icon="username"
                                 style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/login/username.svg?v=20240708-4);"></i>
                             <input type="text" name="username" placeholder="Nama Pengguna" />
                         </div>
                         <div class="login-panel-item">
                             <i data-icon="password"
                                 style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/login/password.svg?v=20240708-4);"></i>
                             <input type="password" name="password" placeholder="Kata Sandi" />
                         </div>
                         <div class="buttons-container">
                             <input type="submit" class="login-button" value="Masuk" />
                             <a href="/registerasi" class="register-button">
                                 Daftar
                             </a>
                         </div>
                     </div>
                 </form>
             </li>
             <li>
                 <details>
                     <summary>
                         <section>
                             <span>
                                 <i data-icon="games">
                                     <img alt="Games" height="18" loading="lazy"
                                         src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/games.svg?v=20240708-4"
                                         width="18" />
                                 </i>
                                 Permainan
                             </span>
                             <i class="fas fa-chevron-right"></i>
                         </section>
                     </summary>
                     <article>
                         <ul>
                             <li>
                                 <a href="/slots">Hot Games</a>
                             </li>
                             <li>
                                 <a href="/slots">Slots</a>
                             </li>
                             <li>
                                 <a href="/casino">Live Casino</a>
                             </li>
                             <li>
                                 <a href="/sports">Olahraga</a>
                             </li>
                             <li>
                                 <a href="/arcade">Arcade</a>
                             </li>
                             <li>
                                 <a href="/poker">Poker</a>
                             </li>
                             <li>
                                 <a href="/cockfight">Sabung Ayam</a>
                             </li>
                         </ul>
                     </article>
                 </details>
             </li>
             <li>
                 <div class="topbar-item language-selector-container"
                     style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/flags.png?v=20240708-4);">
                     <details>
                         <summary>
                             <section>
                                 <span>
                                     <i data-icon="language">
                                         <img alt="Language" height="18" loading="lazy"
                                             src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/language.svg?v=20240708-4"
                                             width="18" />
                                     </i>
                                     BHS INDONESIA
                                 </span>
                                 <i class="fas fa-chevron-right"></i>
                             </section>
                         </summary>
                         <article>
                             <ul class="language-selector">
                                 <li>
                                     <a href="javascript:changeLanguage('en')">
                                         <i data-language="en"></i>
                                         <div class="language-name">
                                             <div>ENGLISH</div>
                                             <div>ENGLISH</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('id')">
                                         <i data-language="id"></i>
                                         <div class="language-name">
                                             <div>BHS INDONESIA</div>
                                             <div>INDONESIAN</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('kr')">
                                         <i data-language="kr"></i>
                                         <div class="language-name">
                                             <div>한국어</div>
                                             <div>KOREAN</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('cn')">
                                         <i data-language="cn"></i>
                                         <div class="language-name">
                                             <div>中文</div>
                                             <div>CHINESE</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('jp')">
                                         <i data-language="jp"></i>
                                         <div class="language-name">
                                             <div>日本語</div>
                                             <div>JAPANESE</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('th')">
                                         <i data-language="th"></i>
                                         <div class="language-name">
                                             <div>ไทย</div>
                                             <div>THAI</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('my')">
                                         <i data-language="my"></i>
                                         <div class="language-name">
                                             <div>မြန်မာစာ</div>
                                             <div>BURMESE</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('kh')">
                                         <i data-language="kh"></i>
                                         <div class="language-name">
                                             <div>ខេមរភាសា</div>
                                             <div>KHMER</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('hi')">
                                         <i data-language="hi"></i>
                                         <div class="language-name">
                                             <div>हिन्दी</div>
                                             <div>HINDI</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('ta')">
                                         <i data-language="ta"></i>
                                         <div class="language-name">
                                             <div>தமிழ்</div>
                                             <div>TAMIL</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('te')">
                                         <i data-language="te"></i>
                                         <div class="language-name">
                                             <div>తెలుగు</div>
                                             <div>TELUGU</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('vi')">
                                         <i data-language="vi"></i>
                                         <div class="language-name">
                                             <div>Tiếng Việt</div>
                                             <div>VIETNAMESE</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('bn')">
                                         <i data-language="bn"></i>
                                         <div class="language-name">
                                             <div>বাংলাদেশী</div>
                                             <div>BENGALI</div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="javascript:changeLanguage('pt')">
                                         <i data-language="pt"></i>
                                         <div class="language-name">
                                             <div>Portugu&#234;s</div>
                                             <div>PORTUGESE</div>
                                         </div>
                                     </a>
                                 </li>
                             </ul>
                         </article>
                     </details>
                 </div>
             </li>
             <li>
                 <a href="/" rel="nofollow">
                     <i data-icon="desktop">
                         <img alt="Desktop" height="18" loading="lazy"
                             src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/menu/desktop.svg?v=20240708-4"
                             width="18" />
                     </i>
                     Versi Desktop
                 </a>
             </li>
         </ul>
     </div>
 @endif
