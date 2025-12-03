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
                        Missions
                    </div>
                    <div class="standard-form-content">
                        <div class="mission-container">
                            <div class="mission-item" data-status="default"
                                data-mission-id="00000000-0000-0000-0000-000000000000">
                                <div class="mission-image-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="icon icon-coin" width="20" height="20">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6" />
                                        <path d="M12 12l3 3" />
                                    </svg>
                                </div>
                                <div class="mission-info">
                                    <h3>First Deposit</h3>
                                    <div class="mission-progress-container">
                                        <div class="progress" style="width: 0%"></div>
                                        <span>0 / 1</span>
                                    </div>
                                </div>
                                <div class="mission-action-container">
                                    <div class="mission-reward">
                                        <span>5,000</span>
                                        <div class="xp-label">XP</div>
                                    </div>
                                    <a href="/deposit" class="action-button">Start</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="../../../assets/js/mobile/loyalitas.js" defer></script>
@endsection
