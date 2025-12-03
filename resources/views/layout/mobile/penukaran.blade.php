@extends('layout.mobile.main')
@section('mobile')
    <link rel="stylesheet" href="../../../assets/css/mobile/loyalitas.css">
    <link rel="stylesheet" href="../../../assets/css/mobile/datepicker.css">
    <div style="margin-left: 20px;margin-top: 20px;">
        <a href="/loyalitas" class="back-button"
            style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/back.svg?v=20240813);">
            <i class="fa fa-arrow-left" style="font-size: 20px"></i>
        </a>
    </div>
    <div class="standard-form-container loyalty-container">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="standard-form-title">
                        Penukaran Point
                    </div>
                    <div class="standard-form-content">
                        @foreach ($voucher as $voucher)
                            <div class="mission-container" style="margin-top: 20px;">
                                <div class="mission-item" data-status="default"
                                    data-mission-id="00000000-0000-0000-0000-000000000000">
                                    <div class="mission-image-container">
                                        <img loading="lazy"
                                            src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/loyalty/missions/FirstDeposit.svg?v=20240813">
                                    </div>
                                    <div class="mission-info">
                                        <h3>{{ $voucher->title }}</h3>
                                        <div class="mission-progress-container">
                                            <div class="progress" style="width: 0%"></div>
                                            <span>0 / 1</span>
                                        </div>
                                    </div>
                                    <div class="mission-action-container">
                                        <div class="mission-reward">
                                            <span>{{ $voucher->exp }}</span>
                                            <div class="xp-label">XP</div>
                                        </div>
                                        <form action="{{ url('/claim-voucher/' . $voucher->id) }}" method="POST">
                                            @csrf
                                            <button type="submit" class="action-button">Klaim</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="../../../assets/js/mobile/loyalitas.js" defer></script>
@endsection
