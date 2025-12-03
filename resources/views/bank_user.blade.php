@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.bank_user')
@else
    @include('layout.desktop.bank_user')
@endif
