@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.slot')
@else
    @include('layout.desktop.slot')
@endif
