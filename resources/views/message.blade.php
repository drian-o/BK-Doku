@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.message')
@else
    @include('layout.desktop.message')
@endif
