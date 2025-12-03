@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.profile_user')
@else
    @include('layout.desktop.profile_user')
@endif
