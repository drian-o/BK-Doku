@extends('layout.desktop.main')
@section('content')
 
    @if (Auth::check())
         <div class="banner">
            <div id="banner_carousel" class="banner-carousel">
                @foreach ($banner as $banner)
                    <div class="">
                        <a href="/promotion" target="_blank">
                            <img alt="RAJA SLOT INDONESIA" height="600" loading="lazy"
                                src="{{ asset('storage/' . $banner->img) }}" title="RAJA SLOT INDONESIA" width="1920" />
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
        <div class="announcement-outer-container">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="announcement-container">
                            <i data-icon="news"
                                style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/news.png?v=20240708-4);"></i>
                            <div data-section="announcements">
                                <ul class="announcement-list" id="announcement_list">
                                    <li>Selamat Datang di {{ $setting->web }} - Situs Judi Online Terbesar &amp; Terpercaya
                                        Indonesia.
                                    </li>
                                    <li>Link anti NAWALA ( Internet Sehat ) https://bit.ly/{{ $setting->web }}</li>
                                    <li>Pemeliharaan Terjadwal: Crowd Play pada 2023-11-30 dari 7.00 AM sampai 2025-06-02
                                        6.30 PM (GMT + 7). Selama waktu ini, Crowd Play permainan tidak akan tersedia. Kami
                                        memohon maaf atas ketidaknyamanan yang mungkin ditimbulkan.</li>
                                </ul>
                            </div>
                            <div data-section="date">
                                11/07/2024 (Kam) 16.31 (GMT+07)
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div data-container-background="home"
            style="background-image: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/backgrounds/home.jpg?v=20240708-4);">
            <div class="container home-outer-container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="home-inner-container">
                            <a href="/desktop/slots/pragmatic?PromotionCategory=Jackpot+Play+Games">
                                <div class="home-progressive-jackpot"
                                    style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/jackpot.png?v=20240708-4);">
                                    <div class="jackpot-container"
                                        style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/jackpot-amount-bg.png?v=20240708-4);">
                                        <span class="jackpot-currency jackpot_currency"></span>
                                        <span id="progressive_jackpot"
                                            data-progressive-jackpot-url="https://jp-api.zoomwlb.com"></span>
                                    </div>
                                </div>
                            </a>
                            <div class="popular-slots-outer-container">



                                <div class="popular-game-title-container">
                                    <div class="title">
                                        <i data-icon="popular-games"
                                            style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/popular-games.png?v=20240708-4);"></i>
                                        Game Populer
                                    </div>
                                    <i></i>
                                </div>
                                <div class="game-list-container">
                                    <div class="game-list">
                                        <div class="games-group">
                                            <div class="game-item" data-game="Sweet Bonanza 1000™">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitswx.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitswx.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Sweet Bonanza 1000™"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitswx.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Sweet Bonanza 1000™">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Sweet Bonanza 1000™</div>
                                            </div>
                                            <div class="game-item" data-game="Mahjong Ways">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Mahjong Ways" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Mahjong Ways">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Mahjong Ways</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="Mahjong Wins 2">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vswaysmahwin2.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vswaysmahwin2.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Mahjong Wins 2" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vswaysmahwin2.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Mahjong Wins 2">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Mahjong Wins 2</div>
                                            </div>
                                            <div class="game-item" data-game="Jajanan Pasar">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitjpas.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitjpas.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Jajanan Pasar" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitjpas.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Jajanan Pasar">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Jajanan Pasar</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="SixSixSix">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1534.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1534.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="SixSixSix" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1534.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="SixSixSix">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">SixSixSix</div>
                                            </div>
                                            <div class="game-item" data-game="Gates of Olympus 1000™">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympx.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympx.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Gates of Olympus 1000™"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympx.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Gates of Olympus 1000™">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Gates of Olympus 1000™</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="Ze Zeus">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1508.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1508.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Ze Zeus" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1508.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Ze Zeus">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Ze Zeus</div>
                                            </div>
                                            <div class="game-item" data-game="Way of Ninja">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympnin.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympnin.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Way of Ninja" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympnin.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Way of Ninja">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Way of Ninja</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="Starlight Princess™">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20starlight.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20starlight.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Starlight Princess™"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20starlight.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Starlight Princess™">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Starlight Princess™</div>
                                            </div>
                                            <div class="game-item" data-game="Mahjong Ways 2">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways2.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways2.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Mahjong Ways 2" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways2.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Mahjong Ways 2">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Mahjong Ways 2</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="Nexus Gates of Olympus™">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20nexusgates.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20nexusgates.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Nexus Gates of Olympus™"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20nexusgates.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Nexus Gates of Olympus™">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Nexus Gates of Olympus™</div>
                                            </div>
                                            <div class="game-item" data-game="Wild Bounty Showdown">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_135.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_135.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Wild Bounty Showdown"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_135.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Wild Bounty Showdown">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Wild Bounty Showdown</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="Lucky Twins Nexus">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsNexus.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsNexus.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Lucky Twins Nexus"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsNexus.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Lucky Twins Nexus">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Lucky Twins Nexus</div>
                                            </div>
                                            <div class="game-item" data-game="Nexus Knockout Football Rush">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGKnockoutFootballRushNexus.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGKnockoutFootballRushNexus.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Nexus Knockout Football Rush"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGKnockoutFootballRushNexus.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Nexus Knockout Football Rush">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Nexus Knockout Football Rush</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="The Crypt">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/thecrypt00000000.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/thecrypt00000000.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="The Crypt" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/thecrypt00000000.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="The Crypt">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">The Crypt</div>
                                            </div>
                                            <div class="game-item" data-game="Lucky Twins Wilds">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsWilds.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsWilds.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Lucky Twins Wilds"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsWilds.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Lucky Twins Wilds">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Lucky Twins Wilds</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="Mental">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/mental0000000000.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/mental0000000000.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Mental" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/mental0000000000.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Mental">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Mental</div>
                                            </div>
                                            <div class="game-item" data-game="Fortune Gems 2">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_223.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_223.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Fortune Gems 2" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_223.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Fortune Gems 2">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Fortune Gems 2</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="Hot Hot Fruit">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/HB0160.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/HB0160.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Hot Hot Fruit" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/HB0160.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Hot Hot Fruit">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Hot Hot Fruit</div>
                                            </div>
                                            <div class="game-item" data-game="Fortune Gems">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_109.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_109.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Fortune Gems" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_109.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Fortune Gems">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Fortune Gems</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="popular-game-title-container">
                                    <div class="title">
                                        <i data-icon="new-games"
                                            style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/new-games.png?v=20240708-4);"></i>
                                        New Games
                                    </div>
                                    <i></i>
                                </div>
                                <div class="game-list-container">
                                    <div class="game-list">
                                        <div class="game-item" data-game="Fortune Dragon™">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs243fdragon.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs243fdragon.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Fortune Dragon™" height="150"
                                                        loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs243fdragon.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Fortune Dragon™">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Fortune Dragon™</div>
                                            <div class="provider-name">Pragmatic Play</div>
                                        </div>
                                        <div class="game-item" data-game="Forge of Wealth">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_1555350.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_1555350.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Forge of Wealth" height="150"
                                                        loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_1555350.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Forge of Wealth">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Forge of Wealth</div>
                                            <div class="provider-name">PG Slots</div>
                                        </div>
                                        <div class="game-item" data-game="Pong Pong Mahjong">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_pongPongMahjong.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_pongPongMahjong.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Pong Pong Mahjong" height="150"
                                                        loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_pongPongMahjong.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Pong Pong Mahjong">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Pong Pong Mahjong</div>
                                            <div class="provider-name">MicroGaming</div>
                                        </div>
                                        <div class="game-item" data-game="Xiang Qi Ways 2">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/ADVANTPLAY/AdvantPlay_10042.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/ADVANTPLAY/AdvantPlay_10042.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Xiang Qi Ways 2" height="150"
                                                        loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/ADVANTPLAY/AdvantPlay_10042.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Xiang Qi Ways 2">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Xiang Qi Ways 2</div>
                                            <div class="provider-name">AdvantPlay</div>
                                        </div>
                                        <div class="game-item" data-game="Zeus Deluxe">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGZeusDeluxe.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGZeusDeluxe.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Zeus Deluxe" height="150"
                                                        loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGZeusDeluxe.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Zeus Deluxe">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Zeus Deluxe</div>
                                            <div class="provider-name">Habanero</div>
                                        </div>
                                        <div class="game-item" data-game="Evil Queen Cauldron">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/CROWDPLAY/EvilQueen.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/CROWDPLAY/EvilQueen.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Evil Queen Cauldron" height="150"
                                                        loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/CROWDPLAY/EvilQueen.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Evil Queen Cauldron">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Evil Queen Cauldron</div>
                                            <div class="provider-name">Crowd Play</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="popular-game-title-container">
                                    <div class="title">
                                        <i data-icon="jackpot-games"
                                            style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/jackpot-games.png?v=20240708-4);"></i>
                                        Jackpot Games
                                    </div>
                                    <i></i>
                                </div>
                                <div class="game-list-container">
                                    <div class="game-list">
                                        <div class="game-item" data-game="Gates of Olympus Jackpot Play">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20olympus.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20olympus.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Gates of Olympus Jackpot Play"
                                                        height="150" loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20olympus.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Gates of Olympus Jackpot Play">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Gates of Olympus Jackpot Play</div>
                                            <div class="provider-name">Pragmatic Play</div>
                                        </div>
                                        <div class="game-item" data-game="Sweet Bonanza Jackpot Play">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20fruitsw.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20fruitsw.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Sweet Bonanza Jackpot Play"
                                                        height="150" loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20fruitsw.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Sweet Bonanza Jackpot Play">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Sweet Bonanza Jackpot Play</div>
                                            <div class="provider-name">Pragmatic Play</div>
                                        </div>
                                        <div class="game-item" data-game="Starlight Princess Jackpot Play">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20starpr.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20starpr.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Starlight Princess Jackpot Play"
                                                        height="150" loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20starpr.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Starlight Princess Jackpot Play">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Starlight Princess Jackpot Play</div>
                                            <div class="provider-name">Pragmatic Play</div>
                                        </div>
                                        <div class="game-item" data-game="Squealin&#39; Riches">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_squealinRiches.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_squealinRiches.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Squealin&#39; Riches"
                                                        height="150" loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_squealinRiches.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Squealin&#39; Riches">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Squealin&#39; Riches</div>
                                            <div class="provider-name">MicroGaming</div>
                                        </div>
                                        <div class="game-item" data-game="9 Masks of Fire™ HyperSpins™">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_9masksOfFireHyperSpins.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_9masksOfFireHyperSpins.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="9 Masks of Fire™ HyperSpins™"
                                                        height="150" loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_9masksOfFireHyperSpins.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="9 Masks of Fire™ HyperSpins™">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">9 Masks of Fire™ HyperSpins™</div>
                                            <div class="provider-name">MicroGaming</div>
                                        </div>
                                        <div class="game-item" data-game="Break Away Lucky Wilds">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_breakAwayLuckyWilds.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_breakAwayLuckyWilds.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Break Away Lucky Wilds"
                                                        height="150" loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_breakAwayLuckyWilds.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Break Away Lucky Wilds">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Break Away Lucky Wilds</div>
                                            <div class="provider-name">MicroGaming</div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="download-apk-container container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="download-apk" id="download_apk"
                            style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/download-apk-background.webp?v=20240708-4);">
                            <div>
                                <div class="h2">
                                    Unduh Gratis
                                    <span>{{ $setting->web }} App</span>
                                </div>
                                <div class="h3">
                                    Nikmati performa terbaik dari Aplikasi kami <br />
                                    Tersedia dalam Android!
                                </div>
                                <div class="download-apk-info">
                                    <div class="download-apk-section">
                                        <div class="download-apk-qr-code">
                                            <a href="{{ route('download', ['filename' => 'one-heart.apk']) }}">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/apk-qrcodes/AJ8.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/apk-qrcodes/AJ8.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Unduh APK Permainan" height="94"
                                                        loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/apk-qrcodes/AJ8.jpg?v=20240708-4"
                                                        width="94" />
                                                </picture>
                                            </a>
                                        </div>
                                        <div class="download-apk-detail">
                                            <div>{{ $setting->web }} App</div>
                                            <a href="{{ route('download', ['filename' => 'one-heart.apk']) }}" data-toggle="modal" data-target="#apk_install_guide_modal">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/download-android-button.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/download-android-button.png?v=20240708-4"
                                                        type="image/png" /><img alt="Download APK" class="img-responsive"
                                                        height="35" loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/download-android-button.png?v=20240708-4"
                                                        width="146" />
                                                </picture>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <span>*Pindai kode QR untuk Unduh <i>Android APK</i></span>
                            </div>
                            <div>
                                <picture>
                                    <source
                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/download-apk-phone.webp?v=20240708-4"
                                        type="image/webp" />
                                    <source
                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/download-apk-phone.png?v=20240708-4"
                                        type="image/png" /><img alt="Download APK" class="img-responsive" height="345"
                                        loading="lazy"
                                        src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/download-apk-phone.png?v=20240708-4"
                                        width="490" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="apk_install_guide_modal" class="modal download-popup-modal" role="dialog"
                    data-title="Panduan Instalasi" aria-hidden="false">
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
                                        <img alt="Contact" height="18" loading="lazy"
                                            src="https://d33egg70nrp50s.cloudfront.net/Images/communications/whatsapp.svg?v=20240708-4"
                                            width="18" />
                                    </i>
                                    -
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/{{ $setting->telegram }}" target="_blank" rel="noopener nofollow">
                                    <i>
                                        <img alt="Contact" height="18" loading="lazy"
                                            src="https://d33egg70nrp50s.cloudfront.net/Images/communications/telegram.svg?v=20240708-4"
                                            width="18" />
                                    </i>
                                    {{ $setting->web }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    @else
        <div class="banner">
            <div id="banner_carousel" class="banner-carousel">
                @foreach ($banner as $banner)
                    <div class="">
                        <a href="/promotion" target="_blank">
                            <img alt="RAJA SLOT INDONESIA" height="600" loading="lazy"
                                src="{{ asset('storage/' . $banner->img) }}" title="RAJA SLOT INDONESIA" width="1920" />
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
        <div class="announcement-outer-container">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="announcement-container">
                            <i data-icon="news"
                                style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/news.png?v=20240708-4);"></i>
                            <div data-section="announcements">
                                <ul class="announcement-list" id="announcement_list">
                                    <li>Selamat Datang di {{ $setting->web }} - Situs Judi Online Terbesar &amp; Terpercaya
                                        Indonesia.
                                    </li>
                                    <li>Link anti NAWALA ( Internet Sehat ) https://bit.ly/{{ $setting->web }}</li>
                                    <li>Pemeliharaan Terjadwal: Crowd Play pada 2023-11-30 dari 7.00 AM sampai 2025-06-02
                                        6.30 PM (GMT + 7). Selama waktu ini, Crowd Play permainan tidak akan tersedia. Kami
                                        memohon maaf atas ketidaknyamanan yang mungkin ditimbulkan.</li>
                                </ul>
                            </div>
                            <div data-section="date">
                                11/07/2024 (Kam) 16.31 (GMT+07)
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div data-container-background="home"
            style="background-image: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/backgrounds/home.jpg?v=20240708-4);">
            <div class="container home-outer-container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="home-inner-container">
                            <a href="/desktop/slots/pragmatic?PromotionCategory=Jackpot+Play+Games">
                                <div class="home-progressive-jackpot"
                                    style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/jackpot.png?v=20240708-4);">
                                    <div class="jackpot-container"
                                        style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/jackpot-amount-bg.png?v=20240708-4);">
                                        <span class="jackpot-currency jackpot_currency"></span>
                                        <span id="progressive_jackpot"
                                            data-progressive-jackpot-url="https://jp-api.zoomwlb.com"></span>
                                    </div>
                                </div>
                            </a>
                            <div class="popular-slots-outer-container">



                                <div class="popular-game-title-container">
                                    <div class="title">
                                        <i data-icon="popular-games"
                                            style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/popular-games.png?v=20240708-4);"></i>
                                        Game Populer
                                    </div>
                                    <i></i>
                                </div>
                                <div class="game-list-container">
                                    <div class="game-list">
                                        <div class="games-group">
                                            <div class="game-item" data-game="Sweet Bonanza 1000™">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitswx.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitswx.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Sweet Bonanza 1000™"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitswx.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Sweet Bonanza 1000™">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Sweet Bonanza 1000™</div>
                                            </div>
                                            <div class="game-item" data-game="Mahjong Ways">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Mahjong Ways" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Mahjong Ways">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Mahjong Ways</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="Mahjong Wins 2">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vswaysmahwin2.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vswaysmahwin2.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Mahjong Wins 2" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vswaysmahwin2.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Mahjong Wins 2">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Mahjong Wins 2</div>
                                            </div>
                                            <div class="game-item" data-game="Jajanan Pasar">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitjpas.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitjpas.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Jajanan Pasar" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20fruitjpas.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Jajanan Pasar">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Jajanan Pasar</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="SixSixSix">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1534.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1534.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="SixSixSix" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1534.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="SixSixSix">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">SixSixSix</div>
                                            </div>
                                            <div class="game-item" data-game="Gates of Olympus 1000™">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympx.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympx.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Gates of Olympus 1000™"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympx.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Gates of Olympus 1000™">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Gates of Olympus 1000™</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="Ze Zeus">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1508.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1508.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Ze Zeus" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/HACKSAW/HACKSAW_1508.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Ze Zeus">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Ze Zeus</div>
                                            </div>
                                            <div class="game-item" data-game="Way of Ninja">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympnin.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympnin.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Way of Ninja" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20olympnin.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Way of Ninja">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Way of Ninja</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="Starlight Princess™">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20starlight.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20starlight.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Starlight Princess™"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20starlight.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Starlight Princess™">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Starlight Princess™</div>
                                            </div>
                                            <div class="game-item" data-game="Mahjong Ways 2">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways2.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways2.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Mahjong Ways 2" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/mahjong-ways2.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Mahjong Ways 2">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Mahjong Ways 2</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="Nexus Gates of Olympus™">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20nexusgates.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20nexusgates.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Nexus Gates of Olympus™"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs20nexusgates.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Nexus Gates of Olympus™">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Nexus Gates of Olympus™</div>
                                            </div>
                                            <div class="game-item" data-game="Wild Bounty Showdown">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_135.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_135.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Wild Bounty Showdown"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_135.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Wild Bounty Showdown">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Wild Bounty Showdown</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="Lucky Twins Nexus">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsNexus.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsNexus.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Lucky Twins Nexus"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsNexus.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Lucky Twins Nexus">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Lucky Twins Nexus</div>
                                            </div>
                                            <div class="game-item" data-game="Nexus Knockout Football Rush">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGKnockoutFootballRushNexus.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGKnockoutFootballRushNexus.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Nexus Knockout Football Rush"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGKnockoutFootballRushNexus.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Nexus Knockout Football Rush">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Nexus Knockout Football Rush</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="The Crypt">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/thecrypt00000000.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/thecrypt00000000.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="The Crypt" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/thecrypt00000000.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="The Crypt">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">The Crypt</div>
                                            </div>
                                            <div class="game-item" data-game="Lucky Twins Wilds">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsWilds.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsWilds.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Lucky Twins Wilds"
                                                            height="150" loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_luckyTwinsWilds.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Lucky Twins Wilds">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Lucky Twins Wilds</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="Mental">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/mental0000000000.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/mental0000000000.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Mental" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/NOLIMITCITY/mental0000000000.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Mental">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Mental</div>
                                            </div>
                                            <div class="game-item" data-game="Fortune Gems 2">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_223.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_223.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Fortune Gems 2" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_223.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Fortune Gems 2">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Fortune Gems 2</div>
                                            </div>
                                        </div>
                                        <div class="games-group">
                                            <div class="game-item" data-game="Hot Hot Fruit">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/HB0160.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/HB0160.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Hot Hot Fruit" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/HB0160.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Hot Hot Fruit">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Hot Hot Fruit</div>
                                            </div>
                                            <div class="game-item" data-game="Fortune Gems">
                                                <div class="wrapper-container">
                                                    <picture>
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_109.webp?v=20240708-4"
                                                            type="image/webp" />
                                                        <source
                                                            srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_109.jpg?v=20240708-4"
                                                            type="image/jpeg" /><img alt="Fortune Gems" height="150"
                                                            loading="lazy"
                                                            src="https://d33egg70nrp50s.cloudfront.net/Images/providers/JILI/JILI_109.jpg?v=20240708-4"
                                                            width="150" />
                                                    </picture>
                                                    <div class="link-container">
                                                        <a href="/slots"
                                                            class="play-now" data-game="Fortune Gems">
                                                            MAIN
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="game-name">Fortune Gems</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="popular-game-title-container">
                                    <div class="title">
                                        <i data-icon="new-games"
                                            style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/new-games.png?v=20240708-4);"></i>
                                        New Games
                                    </div>
                                    <i></i>
                                </div>
                                <div class="game-list-container">
                                    <div class="game-list">
                                        <div class="game-item" data-game="Fortune Dragon™">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs243fdragon.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs243fdragon.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Fortune Dragon™" height="150"
                                                        loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vs243fdragon.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Fortune Dragon™">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Fortune Dragon™</div>
                                            <div class="provider-name">Pragmatic Play</div>
                                        </div>
                                        <div class="game-item" data-game="Forge of Wealth">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_1555350.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_1555350.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Forge of Wealth" height="150"
                                                        loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PGSOFT/PGSOFT_1555350.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Forge of Wealth">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Forge of Wealth</div>
                                            <div class="provider-name">PG Slots</div>
                                        </div>
                                        <div class="game-item" data-game="Pong Pong Mahjong">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_pongPongMahjong.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_pongPongMahjong.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Pong Pong Mahjong" height="150"
                                                        loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_pongPongMahjong.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Pong Pong Mahjong">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Pong Pong Mahjong</div>
                                            <div class="provider-name">MicroGaming</div>
                                        </div>
                                        <div class="game-item" data-game="Xiang Qi Ways 2">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/ADVANTPLAY/AdvantPlay_10042.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/ADVANTPLAY/AdvantPlay_10042.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Xiang Qi Ways 2" height="150"
                                                        loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/ADVANTPLAY/AdvantPlay_10042.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Xiang Qi Ways 2">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Xiang Qi Ways 2</div>
                                            <div class="provider-name">AdvantPlay</div>
                                        </div>
                                        <div class="game-item" data-game="Zeus Deluxe">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGZeusDeluxe.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGZeusDeluxe.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Zeus Deluxe" height="150"
                                                        loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/HABANERO/SGZeusDeluxe.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Zeus Deluxe">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Zeus Deluxe</div>
                                            <div class="provider-name">Habanero</div>
                                        </div>
                                        <div class="game-item" data-game="Evil Queen Cauldron">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/CROWDPLAY/EvilQueen.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/CROWDPLAY/EvilQueen.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Evil Queen Cauldron" height="150"
                                                        loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/CROWDPLAY/EvilQueen.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Evil Queen Cauldron">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Evil Queen Cauldron</div>
                                            <div class="provider-name">Crowd Play</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="popular-game-title-container">
                                    <div class="title">
                                        <i data-icon="jackpot-games"
                                            style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/jackpot-games.png?v=20240708-4);"></i>
                                        Jackpot Games
                                    </div>
                                    <i></i>
                                </div>
                                <div class="game-list-container">
                                    <div class="game-list">
                                        <div class="game-item" data-game="Gates of Olympus Jackpot Play">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20olympus.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20olympus.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Gates of Olympus Jackpot Play"
                                                        height="150" loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20olympus.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Gates of Olympus Jackpot Play">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Gates of Olympus Jackpot Play</div>
                                            <div class="provider-name">Pragmatic Play</div>
                                        </div>
                                        <div class="game-item" data-game="Sweet Bonanza Jackpot Play">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20fruitsw.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20fruitsw.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Sweet Bonanza Jackpot Play"
                                                        height="150" loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20fruitsw.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Sweet Bonanza Jackpot Play">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Sweet Bonanza Jackpot Play</div>
                                            <div class="provider-name">Pragmatic Play</div>
                                        </div>
                                        <div class="game-item" data-game="Starlight Princess Jackpot Play">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20starpr.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20starpr.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Starlight Princess Jackpot Play"
                                                        height="150" loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/PP/vsprg20starpr.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Starlight Princess Jackpot Play">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Starlight Princess Jackpot Play</div>
                                            <div class="provider-name">Pragmatic Play</div>
                                        </div>
                                        <div class="game-item" data-game="Squealin&#39; Riches">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_squealinRiches.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_squealinRiches.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Squealin&#39; Riches"
                                                        height="150" loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_squealinRiches.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Squealin&#39; Riches">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Squealin&#39; Riches</div>
                                            <div class="provider-name">MicroGaming</div>
                                        </div>
                                        <div class="game-item" data-game="9 Masks of Fire™ HyperSpins™">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_9masksOfFireHyperSpins.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_9masksOfFireHyperSpins.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="9 Masks of Fire™ HyperSpins™"
                                                        height="150" loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_9masksOfFireHyperSpins.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="9 Masks of Fire™ HyperSpins™">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">9 Masks of Fire™ HyperSpins™</div>
                                            <div class="provider-name">MicroGaming</div>
                                        </div>
                                        <div class="game-item" data-game="Break Away Lucky Wilds">
                                            <div class="wrapper-container">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_breakAwayLuckyWilds.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_breakAwayLuckyWilds.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Break Away Lucky Wilds"
                                                        height="150" loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/providers/MICROGAMING/SMG_breakAwayLuckyWilds.jpg?v=20240708-4"
                                                        width="150" />
                                                </picture>
                                                <div class="link-container">
                                                    <a href="/slots"
                                                        class="play-now" data-game="Break Away Lucky Wilds">
                                                        MAIN
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="game-name">Break Away Lucky Wilds</div>
                                            <div class="provider-name">MicroGaming</div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="download-apk-container container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="download-apk" id="download_apk"
                            style="--image-src: url(https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/download-apk-background.webp?v=20240708-4);">
                            <div>
                                <div class="h2">
                                    Unduh Gratis
                                    <span>{{ $setting->web }} App</span>
                                </div>
                                <div class="h3">
                                    Nikmati performa terbaik dari Aplikasi kami <br />
                                    Tersedia dalam Android!
                                </div>
                                <div class="download-apk-info">
                                    <div class="download-apk-section">
                                        <div class="download-apk-qr-code">
                                            <a href="{{ route('download', ['filename' => 'one-heart.apk']) }}">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/apk-qrcodes/AJ8.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/apk-qrcodes/AJ8.jpg?v=20240708-4"
                                                        type="image/jpeg" /><img alt="Unduh APK Permainan" height="94"
                                                        loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/apk-qrcodes/AJ8.jpg?v=20240708-4"
                                                        width="94" />
                                                </picture>
                                            </a>
                                        </div>
                                        <div class="download-apk-detail">
                                            <div>{{ $setting->web }} App</div>
                                            <a href="{{ route('download', ['filename' => 'one-heart.apk']) }}" data-toggle="modal" data-target="#apk_install_guide_modal">
                                                <picture>
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/download-android-button.webp?v=20240708-4"
                                                        type="image/webp" />
                                                    <source
                                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/download-android-button.png?v=20240708-4"
                                                        type="image/png" /><img alt="Download APK" class="img-responsive"
                                                        height="35" loading="lazy"
                                                        src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/download-android-button.png?v=20240708-4"
                                                        width="146" />
                                                </picture>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <span>*Pindai kode QR untuk Unduh <i>Android APK</i></span>
                            </div>
                            <div>
                                <picture>
                                    <source
                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/download-apk-phone.webp?v=20240708-4"
                                        type="image/webp" />
                                    <source
                                        srcset="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/download-apk-phone.png?v=20240708-4"
                                        type="image/png" /><img alt="Download APK" class="img-responsive" height="345"
                                        loading="lazy"
                                        src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/home/download-apk-phone.png?v=20240708-4"
                                        width="490" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="apk_install_guide_modal" class="modal download-popup-modal" role="dialog"
                    data-title="Panduan Instalasi" aria-hidden="false">
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
                                        <img alt="Contact" height="18" loading="lazy"
                                            src="https://d33egg70nrp50s.cloudfront.net/Images/communications/whatsapp.svg?v=20240708-4"
                                            width="18" />
                                    </i>
                                    -
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/{{ $setting->telegram }}" target="_blank" rel="noopener nofollow">
                                    <i>
                                        <img alt="Contact" height="18" loading="lazy"
                                            src="https://d33egg70nrp50s.cloudfront.net/Images/communications/telegram.svg?v=20240708-4"
                                            width="18" />
                                    </i>
                                    {{ $setting->web }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    @endif

@endsection
