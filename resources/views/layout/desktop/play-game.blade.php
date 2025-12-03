@extends('layout.desktop.main')
@section('content')
    <link rel="stylesheet" href="../../../assets/css/desktop/gamelist.css">
    <div data-container-background="slots"
        style="background-image: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/backgrounds/slots.jpg?v=20240708-4);">
        <div class="slots-banner-container">
            <picture>
                <source
                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/providers/banners/slots/banner.webp?v=20240708-4"
                    type="image/webp">
                <source
                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/providers/banners/slots/banner.png?v=20240708-4"
                    type="image/png"><img loading="lazy"
                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/providers/banners/slots/banner.png?v=20240708-4">
            </picture>
            <picture>
                <source
                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/decorations/coins/coin-4.webp?v=20240708-4"
                    type="image/webp">
                <source
                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/decorations/coins/coin-4.png?v=20240708-4"
                    type="image/png"><img class="slots-coin-1 float-effect-1s" loading="lazy"
                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/decorations/coins/coin-4.png?v=20240708-4">
            </picture>
            <picture>
                <source
                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/decorations/coins/coin-5.webp?v=20240708-4"
                    type="image/webp">
                <source
                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/decorations/coins/coin-5.png?v=20240708-4"
                    type="image/png"><img class="slots-coin-2 float-effect-1s" loading="lazy"
                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/decorations/coins/coin-5.png?v=20240708-4">
            </picture>
            <picture>
                <source
                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/decorations/coins/coin-6.webp?v=20240708-4"
                    type="image/webp">
                <source
                    srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/decorations/coins/coin-6.png?v=20240708-4"
                    type="image/png"><img class="slots-coin-3 float-effect-2s-d" loading="lazy"
                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/decorations/coins/coin-6.png?v=20240708-4">
            </picture>
        </div>

        <div class="container slots-container">
            <div class="row">
                <div class="col-md-12">
                    <div class="progressive-jackpot"
                        style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/jackpot/background.png?v=20240708-4);">
                        <span id="progressive_jackpot"
                            data-progressive-jackpot-url="https://jp-api.zoomwlb.com">9,208,008,245</span>
                        <a href="/slots">
                            <div class="jackpot-container">
                                <span class="jackpot-currency jackpot_currency">IDR</span>
                                <span class="counter-container" id="progressive_jackpot_counter">
                                    <span data-digit="0" class="animate"></span>
                                    <span data-digit="9" class="animate"></span>
                                    <span data-digit="2" class="animate"></span>
                                    <span data-digit="0" class="animate"></span>
                                    <span data-digit="8" class="animate"></span>
                                    <span data-digit="0" class="animate"></span>
                                    <span data-digit="0" class="animate"></span>
                                    <span data-digit="8" class="animate"></span>
                                    <span data-digit="1" class="animate"></span>
                                    <span data-digit="7" class="animate"></span>
                                    <span data-digit="6" class="animate"></span>
                                </span>
                            </div>
                        </a>
                    </div>
                    <style>
                        .game-item {
                            opacity: 0;
                            transform: translateY(20px);
                            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
                            display: none;
                            /* Initially hide all game items */
                        }

                        .game-item[data-match="true"] {
                            display: block;
                            /* Show game items that match the search */
                            opacity: 1;
                            transform: translateY(0);
                        }

                        .search-container {
                            display: flex;
                            align-items: center;
                            border: none;
                            border-radius: 4px;
                            padding: 5px;
                            max-width: 300px;
                            /* Adjust as needed */
                        }

                        #filter_input {
                            border: none;
                            outline: none;
                            flex-grow: 1;
                            padding: 5px;
                        }

                        .fa-magnifying-glass {
                            color: #aaa;
                            padding: 5px;
                        }
                    </style>
                    <div class="games-list-container">
                        <div class="provider-outer-container">
                            @include('layout.desktop.provider')

                            <div class="vendor-name">
                                {{ $title }}
                            </div>
                            <div class="filter-section">
                                <div class="category-filter" id="filter_categories">
                                    <div class="category-filter-link active" data-category="">
                                        Semua permainan
                                    </div>
                                    <div class="category-filter-link" data-category="Top">Top</div>
                                    <div class="category-filter-link" data-category="Classic">Classic</div>
                                    <div class="category-filter-link" data-category="Bonus Buy">Bonus Buy</div>
                                    <div class="category-filter-link" data-category="Video Slots">Video Slots</div>
                                </div>
                                <div class="search-container">
                                    <input type="text" id="filter_input" placeholder="Cari Permainan">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>

                        <div class="game-list"
                            style="--star-on-icon: url(https://d33egg70nrp50s.cloudfront.net/Images/icons/star-on.svg?v=20240708-4); --star-off-icon: url(https://d33egg70nrp50s.cloudfront.net/Images/icons/star-off.svg?v=20240708-4);">
                            @foreach ($gamelist as $gamelist)
                                <div class="game-item" data-game="{{ $gamelist->game_name }}" data-match="true"
                                    id="game_list">
                                    <div class="wrapper-container"><img src="{{ $gamelist->game_image }}"
                                            alt="{{ $gamelist->game_name }}">
                                        <div class="link-container"> <a class="play-now" data-id="{{ $gamelist->id }}"
                                                href="/gameplay/{{ $gamelist->id }}/show">MAIN</a>
                                            <a class="free-play">COBA</a>
                                        </div>
                                    </div>
                                    <div class="game-name">{{ $gamelist->game_name }}</div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        document.getElementById('filter_input').addEventListener('input', function() {
            var filterValue = this.value.toLowerCase();
            var gameItems = document.querySelectorAll('.game-item');

            gameItems.forEach(function(item) {
                var gameName = item.getAttribute('data-game').toLowerCase();
                if (gameName.includes(filterValue)) {
                    item.setAttribute('data-match', 'true');
                } else {
                    item.setAttribute('data-match', 'false');
                }
            });
        });
    </script>
    {{-- <script>
        $(document).ready(function() {
            $('.play-now').click(function(e) {
                e.preventDefault();

                var gameId = $(this).data('id');

                $.ajax({
                    url: '/gameplay/user/' + gameId,
                    type: 'POST',
                    data: {
                        _token: '{{ csrf_token() }}'
                    },
                    success: function(response) {
                        if (response.status === 'success') {
                            window.location.href = response.gameUrl;
                        } else {
                            $('#error-message').text(response.message).show();
                        }
                    },
                    error: function(xhr) {
                        var errorMessage = 'Maaf Terjadi Kesalahan';
                        if (xhr.responseJSON && xhr.responseJSON.message) {
                            errorMessage = xhr.responseJSON.message;
                        }
                        $('#error-message').text(errorMessage).show();
                    }
                });
            });
        });
    </script> --}}
@endsection
