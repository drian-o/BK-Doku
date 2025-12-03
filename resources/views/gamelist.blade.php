@if (view()->shared('device') == 'mobile')
    @if (Auth::check())
        @include('layout.mobile.play-game')
    @else
        @include('layout.mobile.gamelist')
    @endif
@else
    @if (Auth::check())
        @include('layout.desktop.play-game')
    @else
        @include('layout.desktop.gamelist')
    @endif

@endif
