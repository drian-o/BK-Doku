@if (view()->shared('device') == 'mobile')
    @include('layout.mobile.faq')
@else
    @include('layout.desktop.faq')
@endif
