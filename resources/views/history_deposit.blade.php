@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.history_deposit')
@else
    @include('layout.desktop.history_deposit')
@endif
