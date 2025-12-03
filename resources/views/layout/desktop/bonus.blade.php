@extends('layout.desktop.main')
@section('content')
    <link rel="stylesheet" href="../../../assets/css/desktop/claim.css">
    <div class="site-content-container" data-container-background="general">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    @include('layout.desktop.profile')
                    <div class="standard-container-with-sidebar" data-style="light">
                        @include('layout.desktop.sidemenu')
                        <div class="standard-form-content">
                            <div class="standard-nav-bar">
                                <div class="nav-bar-links">
                                    <a href="#" data-target="#bonus-container" class="nav-link" data-active="true">
                                        Klaim Bonus
                                    </a>
                                    <a href="#" data-target="#commission-container" class="nav-link"
                                        data-active="false">
                                        Klaim Komisi
                                    </a>
                                    <a href="#" data-target="#cashback-container" class="nav-link"
                                        data-active="false">
                                        Klaim Cashback
                                    </a>
                                    <a href="#" data-target="#combine-promo-container" class="nav-link"
                                        data-active="false">
                                        Klaim Promo Gabungan
                                    </a>
                                </div>
                            </div>
                            <div class="tab-content" id="bonus-container">
                                <div class="form-group claim-filter-container">
                                    <label>Kategori</label>
                                    <select class="form-control" id="promotion_type_select">
                                        <option value="">Semua</option>
                                        <option value="S">Pendaftaran</option>
                                    </select>
                                    <label>Tipe</label>
                                    <select class="form-control" id="game_type_select">
                                        <option value="">Semua</option>
                                        <option value="Slots">Slots</option>
                                        <option value="Arcade">Arcade</option>
                                    </select>
                                </div>
                                <div class="standard-form-note">
                                    <span>Catatan:</span> promosi ini tidak bisa dikombinasikan dengan promosi lainnya dan
                                    promosi ini bisa
                                    kedaluarsa.<br>Cek progress promosi dan klaim tidak tersedia dari jam 03:00 - 07:00!
                                    <div>
                                        Bonus sedang disimpan sementara selama <strong>30 menit</strong> dari
                                        <strong>20-Jul-2024 4:07:20
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
                                    <div class="claim-item-container claim_item_filter"
                                        id="c5c76aa2-4381-4796-95a3-5467e7037e19" data-promotion-type="S"
                                        data-game-types="Slots;Arcade">
                                        <div class="claim-item-type">
                                            <span>{{ $promotion->title }}</span>
                                        </div>
                                        <div class="claim-item">
                                            <div class="claim-title">
                                                <strong>{{ $promotion->title }}</strong>

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
                                                    <div class="bonus-progress">
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-success"
                                                                role="progressbar" style="width: 0%"></div>
                                                        </div>
                                                        <div class="progress-percentage">
                                                            Perkembangan: <i>0.0%</i>
                                                        </div>
                                                    </div>
                                                @else
                                                    @if (in_array($promotion->status, $statuses))
                                                        <div class="bonus-progress">
                                                            <div class="progress">
                                                                <div class="progress-bar progress-bar-success"
                                                                    role="progressbar" style="width: 0%"></div>
                                                            </div>
                                                            <div class="progress-percentage">
                                                                Perkembangan: <i>0.0%</i>
                                                            </div>
                                                        </div>
                                                    @endif
                                                @endif
                                                @if (in_array($promotion->id, $claimedPromotionIds))
                                                    <img src="../../../assets/image/chest-gold-open.png" width="130"
                                                        alt="Chest Gold Open">
                                                @else
                                                    @if (in_array($promotion->status, $statuses))
                                                        <img src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/claims/chest-gold.png?v=20240708-4"
                                                            alt="Chest Gold">
                                                    @endif
                                                @endif
                                            </div>
                                            <div class="claim-action-container">
                                                <div class="link-container">
                                                    <span class="info-button btn" data-toggle="modal"
                                                        data-target="#claim-info-modal-{{ $promotion->id }}">Info</span>
                                                    <span>
                                                        @if (!in_array($promotion->id, $claimedPromotionIds))
                                                            @if (in_array($promotion->status, $statuses))
                                                                <form
                                                                    action="{{ route('promotion.claim', $promotion->id) }}"
                                                                    method="POST">
                                                                    @csrf
                                                                    <button type="submit"
                                                                        class="claim-button btn">Claim</button>
                                                                </form>
                                                            @endif
                                                        @endif
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="modal claim-info-modal" id="claim-info-modal-{{ $promotion->id }}"
                                                role="dialog">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <button type="button" class="close" data-dismiss="modal"
                                                                aria-label="Close">
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
                            <div class="tab-content" id="commission-container" style="display: none">
                                <h1 class="text-center" style="opacity: 0.2"> Belum Ada Komisi</h1>
                            </div>
                            <div class="tab-content" id="cashback-container" style="display: none">
                                <h1 class="text-center" style="opacity: 0.2"> Belum Ada Cashback</h1>
                            </div>
                            <div class="tab-content" id="combine-promo-container" style="display: none">
                                <h1 class="text-center" style="opacity: 0.2"> Belum Ada Promo Gabungan</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                // Sembunyikan semua tab-content
                document.querySelectorAll('.tab-content').forEach(container => {
                    container.style.display = 'none';
                });

                // Tampilkan tab-content yang sesuai
                const target = document.querySelector(this.getAttribute('data-target'));
                if (target) {
                    target.style.display = 'block';
                }

                // Update status aktif pada link navigasi
                document.querySelectorAll('.nav-link').forEach(nav => {
                    nav.setAttribute('data-active', 'false');
                });
                this.setAttribute('data-active', 'true');
            });
        });

        // Menampilkan kontainer pertama secara default
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
                        $('.progress-bar').css('width', progress + '%');
                        $('.progress-percentage i').html(progress.toFixed(1) + '%');
                    },
                    error: function(xhr, status, error) {
                        console.error('Error fetching turnover data:', error);
                    }
                });
            }
            updateProgressBar();
        });
    </script>
@endsection
