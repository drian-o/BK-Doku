@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.promotion')
@else
    @include('layout.desktop.promotion')
@endif
