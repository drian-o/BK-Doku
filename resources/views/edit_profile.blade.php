@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.edit_profile')
@else
    @include('layout.desktop.edit_profile')
@endif
