@extends('layout.mobile.main')
@section('mobile')
    <link rel="stylesheet" href="../../../assets/css/mobile/bonus.css">
    <div class="standard-form-container">
        <div class="tab-menu-background-container">
            <div class="tab-menu-container" data-style="vertical">
                <a href="#" data-target="#bonus-container" class="nav-link" data-active="true">
                    <i data-icon="bonus"
                        style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/bonus.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/bonus-active.svg?v=20240708-4);"></i>
                    Bonus
                </a>
                <a href="#" data-target="#comission-container" class="nav-link" data-active="false">
                    <i data-icon="commission"
                        style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/commission.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/commission-active.svg?v=20240708-4);"></i>
                    Komisi
                </a>
                <a href="#" data-target="#cashback-container" class="nav-link" data-active="false">
                    <i data-icon="cashback"
                        style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/cashback.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/cashback-active.svg?v=20240708-4);"></i>
                    Cashback
                </a>
                <a href="#" data-target="#combine-promo-container" class="nav-link" data-active="false">
                    <i data-icon="combine-promo"
                        style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/combine-promo.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/combine-promo-active.svg?v=20240708-4);"></i>
                    Promo Gabungan
                </a>
            </div>
        </div>
        <div class="tab-content" id="bonus-container">
            <div class="claim-filter-container">
                <div class="form-group">
                    <label>Kategori</label>
                    <select class="form-control" id="promotion_type_select">
                        <option value="">Semua</option>
                        <option value="S">Pendaftaran</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Tipe</label>
                    <select class="form-control" id="game_type_select">
                        <option value="">Semua</option>
                        <option value="Slots">Slots</option>
                        <option value="Arcade">Arcade</option>
                    </select>
                </div>
            </div>
            <div class="standard-form-note">
                <span>Catatan:</span> promosi ini tidak bisa dikombinasikan dengan promosi lainnya dan promosi ini bisa
                kedaluarsa.<br>Cek progress promosi dan klaim tidak tersedia dari jam 03:00 - 07:00!
                <div>
                    Bonus sedang disimpan sementara selama <strong>30 menit</strong> dari <strong>24-Jul-2024 8:00:42
                        PM</strong>
                </div>
                <div class="eligible-desc-container">
                    <div>
                        <span data-eligible-status="Yes"></span> : Diperbolehkan bergabung
                    </div>
                    <div>
                        <span data-eligible-status="Maybe"></span> : Tidak dapat menentukan kelayakan
                    </div>
                    <div>
                        <span data-eligible-status="No"></span> : Tidak diperbolehkan bergabung
                    </div>
                </div>
            </div>
            @php
                $statuses = ['aktif', 'maybe', null];
                $claimedPromotionIds = $claimedPromotionIds ?? [];
            @endphp
            @foreach ($promotion as $promotion)
                <div class="claim-item-container claim_item_filter" id="c5c76aa2-4381-4796-95a3-5467e7037e19"
                    data-promotion-type="S" data-game-types="Slots;Arcade">
                    <div class="claim-item-type">
                        <span>
                            {{ $promotion->title }}
                        </span>
                    </div>
                    <div class="claim-item">
                        <div class="claim-title">
                            <div>
                                <strong>{{ $promotion->title }}</strong>
                            </div>
                            @if (in_array($promotion->id, $claimedPromotionIds))
                                <div class="expiration-info">
                                    <span data-eligible-status="No"></span>
                                </div>
                            @else
                                @if ($promotion->status === 'aktif')
                                    <div class="expiration-info">
                                        <span data-eligible-status="Yes"></span>
                                    </div>
                                @elseif($promotion->status === 'maybe')
                                    <div class="expiration-info">
                                        <span data-eligible-status="Maybe"></span>
                                    </div>
                                @else
                                    <div class="expiration-info">
                                        <span data-eligible-status="No"></span>
                                    </div>
                                @endif
                            @endif
                        </div>
                        <div class="claim-progress-info">
                            @if (in_array($promotion->id, $claimedPromotionIds))
                                <img src="../../../assets/image/chest-gold-open.png" width="130" alt="Chest Gold Open">
                            @else
                                <img
                                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/claims/chest-gold.png?v=20240708-4">
                            @endif
                            @if (in_array($promotion->id, $claimedPromotionIds))
                                <div class="bonus-progress">
                                    <div class="progress">
                                        <div id="progress-bar" class="progress-bar progress-bar-success" role="progressbar"
                                            style="width: 0%">
                                        </div>
                                    </div>
                                </div>

                                <div class="progress-percentage">
                                    Perkembangan: <i id="progress-percentage">0.0%</i>
                                </div>
                            @else
                                @if (in_array($promotion->status, $statuses))
                                    <div class="bonus-progress">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-success" role="progressbar"
                                                style="width: 0%">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="progress-percentage">
                                        Perkembangan: <i>0.0%</i>
                                    </div>
                                @endif
                            @endif
                        </div>
                        <div class="claim-action-container">
                            <div class="link-container">

                                <span class="info-button btn" data-toggle="modal"
                                    data-target="#claim-info-modal-{{ $promotion->id }}">
                                    Info
                                </span>
                                <span>
                                    @if (!in_array($promotion->id, $claimedPromotionIds))
                                        @if (in_array($promotion->status, $statuses))
                                            <form action="{{ route('promotion.claim', $promotion->id) }}" method="POST">
                                                @csrf
                                                <button type="submit" class="claim-button btn">Claim</button>
                                            </form>
                                        @endif
                                    @endif
                                </span>
                            </div>
                        </div>
                        <div class="modal claim-info-modal" id="claim-info-modal-{{ $promotion->id }}" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <h4>{{ $promotion->title }}</h4>
                                    </div>
                                    <div class="modal-body">
                                        {!! $promotion->body !!}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
    <script>
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                document.querySelectorAll('.tab-content').forEach(container => {
                    container.style.display = 'none';
                });

                const target = document.querySelector(this.getAttribute('data-target'));
                if (target) {
                    target.style.display = 'block';
                }

                document.querySelectorAll('.nav-link').forEach(nav => {
                    nav.setAttribute('data-active', 'false');
                });
                this.setAttribute('data-active', 'true');
            });
        });

        document.addEventListener('DOMContentLoaded', () => {
            const defaultLink = document.querySelector('.nav-link[data-active="true"]');
            if (defaultLink) {
                const defaultTarget = document.querySelector(defaultLink.getAttribute('data-target'));
                if (defaultTarget) {
                    defaultTarget.style.display = 'block';
                }
            }
        });
    </script>
    <script>
        $(document).ready(function() {
            function updateProgressBar() {
                $.ajax({
                    url: '/turnover',
                    method: 'GET',
                    dataType: 'json',
                    success: function(data) {
                        let turnover = data.turnover || 0;
                        let targetValue = data.progressive_goal || 1;
                        let progress = (turnover / targetValue) * 100;
                        if (progress > 100) {
                            progress = 100;
                        }

                        // Update the progress bar and percentage
                        $('#progress-bar').css('width', progress + '%');
                        $('#progress-percentage').html(progress.toFixed(1) + '%');
                    },
                    error: function(xhr, status, error) {
                        console.error('Error fetching turnover data:', error);
                    }
                });
            }

            // Call the function to update the progress bar on page load
            updateProgressBar();
        });
    </script>
@endsection
