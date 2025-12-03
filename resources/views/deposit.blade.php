@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.deposit')
@else
    @include('layout.desktop.deposit')
@endif
