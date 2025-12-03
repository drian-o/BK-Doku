@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.show_message')
@else
    @include('layout.desktop.show_message')
@endif
