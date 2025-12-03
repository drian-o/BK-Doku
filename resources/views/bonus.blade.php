@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.bonus')
@else
    @include('layout.desktop.bonus')
@endif
