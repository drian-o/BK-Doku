@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.history_klaim')
@else
    @include('layout.desktop.history_klaim')
@endif
