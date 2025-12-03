@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.withdraw')
@else
    @include('layout.desktop.withdraw')
@endif
