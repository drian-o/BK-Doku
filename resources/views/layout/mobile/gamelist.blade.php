@extends('layout.mobile.main')
@section('mobile')
    <div class="slots-games-container">
        <div class="games-filter-section">
            <div class="name-filter">
                <div class="title">
                    PG Slots
                </div>
                <input type="text" id="filter_input" placeholder="Cari Permainan">

            </div>
            <div class="category-filter" id="filter_categories">
                <div class="category-filter-link active" data-category="">
                    Semua permainan
                </div>
                <div class="category-filter-link" data-category="Top 20">Top 20</div>
                <div class="category-filter-link" data-category="Video Slots">Video Slots</div>
            </div>
        </div>
        <div class="bigger-game-list">
            <ul id="game_list" data-is-logged-in="false"
                style="--star-on-icon: url(https://d33egg70nrp50s.cloudfront.net/Images/icons/star-on.svg?v=20240708-4); --star-off-icon: url(https://d33egg70nrp50s.cloudfront.net/Images/icons/star-off.svg?v=20240708-4);">
                @foreach ($gamelist as $game)
                    <li class="game-item" data-game="{{ $game->game_name }}"><label class="inner-game-item">
                            <input type="radio" name="game-list-radio-button">
                            <div class="wrapper-container"><img src="{{ $game->game_image }}"
                                    alt="{{ $game->game_name }}"><span class="link-container"><a class="play-now"
                                        data-game="{{ $game->game_name }}" href="/login">MAIN</a></span></div>
                            <div class="game-name">{{ $game->game_name }}</div>
                        </label>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const filterInput = document.getElementById('filter_input');
            const gameList = document.getElementById('game_list').getElementsByClassName('game-item');

            filterInput.addEventListener('input', function() {
                const filter = filterInput.value.toLowerCase();
                Array.from(gameList).forEach(function(gameItem) {
                    const gameName = gameItem.getAttribute('data-game').toLowerCase();
                    if (gameName.includes(filter)) {
                        gameItem.style.display = '';
                    } else {
                        gameItem.style.display = 'none';
                    }
                });
            });
        });
    </script>
@endsection
