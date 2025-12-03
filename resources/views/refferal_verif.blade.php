@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.refferal_verif')
@else
    @include('layout.desktop.refferal_verif')
@endif
