@extends('layout.mobile.main')
@section('mobile')
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
        <div class="game-list-container active" data-game-category="Slots">
            <div class="game-list">
                <ul class="game_list_content" style="--visible-vendors-count:12; --maintenance-text: 'Pemeliharaan'">
                    <li class="game-item" data-maintenance-status="false">
                        <a href="/slots/pragmatic" data-vendor-name="Pragmatic Play">
                            <picture>
                                <source
                                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-7.webp?v=20240708-4"
                                    type="image/webp">
                                <source
                                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-7.webp?v=20240708-4"
                                    type="image/webp"><img alt="Pragmatic Play" height="130" loading="lazy"
                                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-7.webp?v=20240708-4"
                                    width="130">
                            </picture>
                        </a>
                        <span data-vendor-name="Pragmatic Play">Pragmatic Play</span>
                    </li>
                    <li class="game-item" data-maintenance-status="false">
                        <a href="/slots/pgsoft" data-vendor-name="PG Slots">
                            <picture>
                                <source
                                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-9.webp?v=20240708-4"
                                    type="image/webp">
                                <source
                                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-9.webp?v=20240708-4"
                                    type="image/webp"><img alt="PG Slots" height="130" loading="lazy"
                                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-9.webp?v=20240708-4"
                                    width="130">
                            </picture>
                        </a>
                        <span data-vendor-name="PG Slots">PG Slots</span>
                    </li>

                    <li class="game-item" data-maintenance-status="false">
                        <a href="/slots/habanero" data-vendor-name="Habanero">
                            <picture>
                                <source
                                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-16.webp?v=20240708-4"
                                    type="image/webp">
                                <source
                                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-16.webp?v=20240708-4"
                                    type="image/webp"><img alt="Habanero" height="130" loading="lazy"
                                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-16.webp?v=20240708-4"
                                    width="130">
                            </picture>
                        </a>
                        <span data-vendor-name="Habanero">Habanero</span>
                    </li>
                    <li class="game-item" data-maintenance-status="false">
                        <a href="/slots/cq9" data-vendor-name="CQ9">
                            <picture>
                                <source
                                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-13.webp?v=20240708-4"
                                    type="image/webp">
                                <source
                                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-13.webp?v=20240708-4"
                                    type="image/webp"><img alt="CQ9" height="130" loading="lazy"
                                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-13.webp?v=20240708-4"
                                    width="130">
                            </picture>
                        </a>
                        <span data-vendor-name="CQ9">CQ9</span>
                    </li>
                    <li class="game-item" data-maintenance-status="false">
                        <a href="/slots/toptrend" data-vendor-name="TOPTREND">
                            <picture>
                                <source
                                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-67.webp?v=20240813"
                                    type="image/webp">
                                <source
                                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-67.webp?v=20240813"
                                    type="image/webp"><img alt="toptrend" height="130" loading="lazy"
                                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/menu/mobile/home-menu-3/game-code-67.webp?v=20240813"
                                    width="130">
                            </picture>
                        </a>
                        <span data-vendor-name="TOPTREND">TOPTREND</span>
                    </li>
                    <li class="game-item" data-maintenance-status="false">
                        <a href="/slots/evoplay" data-vendor-name="EVOPLAY">
                            <picture>
                                <source srcset="../../../assets/image/evoplay.png">
                                <source srcset="../../../assets/image/evoplay.png" type="image/webp"><img alt="toptrend"
                                    height="130" loading="lazy" src="../../../assets/image/evoplay.png"
                                    width="130">
                            </picture>
                        </a>
                        <span data-vendor-name="EVOPLAY">EVOPLAY</span>
                    </li>
                    <li class="game-item" data-maintenance-status="false">
                        <a href="/slots/dreamtech" data-vendor-name="DREAMTECH">
                            <picture>
                                <source srcset="../../../assets/image/dreamtech.png">
                                <source srcset="../../../assets/image/dreamtech.png" type="image/webp"><img
                                    alt="dreamtech" height="130" loading="lazy"
                                    src="../../../assets/image/dreamtech.png" width="130">
                            </picture>
                        </a>
                        <span data-vendor-name="DREAMTECH">DREAMTECH</span>
                    </li>
                    <li class="game-item" data-maintenance-status="false">
                        <a href="/slots/booongo" data-vendor-name="DREAMTECH">
                            <picture>
                                <source srcset="../../../assets/image/booongo.png">
                                <source srcset="../../../assets/image/booongo.png" type="image/webp"><img alt="booongo"
                                    height="130" loading="lazy" src="../../../assets/image/booongo.png"
                                    width="130">
                            </picture>
                        </a>
                        <span data-vendor-name="BOOONGO">BOOONGO</span>
                    </li>
                    <li class="footer-row">
                        <a href="javascript:void(0)" class="standard-secondary-button view_all">
                            Lihat semua
                        </a>
                    </li>
                </ul>
            </div>
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

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.maintenance-link').forEach(function(link) {
                link.addEventListener('click', function(event) {
                    event.preventDefault(); // Mencegah aksi default dari link

                    Swal.fire({
                        icon: 'warning',
                        title: 'Peringatan',
                        text: 'Maaf Provider Sedang Maintenance',
                        confirmButtonText: 'OK'
                    });
                });
            });
        });
    </script>
@endsection
