@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.loyalitas')
@else
    @include('layout.desktop.loyalitas')
@endif
