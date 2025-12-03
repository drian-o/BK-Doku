@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.referral')
@else
    @include('layout.desktop.referral')
@endif
