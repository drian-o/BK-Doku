@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.ubah_password')
@else
    @include('layout.desktop.ubah_password')
@endif
