@extends('layout.mobile.main')
@section('mobile')
    <link rel="stylesheet" href="../../../assets/css/mobile/promotion.css">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="top-tab-container promotion">
                    <a href="#" id="promotion-tab" data-active="true">
                        Promosi
                    </a>
                    <a href="#" id="provider-event-tab" data-active="false">
                        Event Provider
                    </a>
                </div>
                <div class="promotion-list" id="content-promo-list-x">
                    @foreach ($promotion as $promotion)
                        <div class="promotion-item promotion_item" style="margin-top: 20px;">
                            <img src="{{ asset('storage/' . $promotion->img) }}">
                            <div class="button-container">
                                <div class="promotion-label">
                                    <h2>{{ $promotion->title }}</h2>
                                    <h3>Tanggal akhir: <span>{{ $promotion->tanggal_akhir }}</span></h3>
                                </div>
                                <div>
                                    @if (Auth::check())
                                        <a href="/bonus" class="click-for-get-promo-button">Ambil Promo</a>
                                    @else
                                        <a href="/login" class="click-for-get-promo-button">Ambil Promo</a>
                                    @endif
                                    <button type="button" class="click-for-more-info-button" data-toggle="modal"
                                        data-target="#promotion_{{ $promotion->id }}">
                                        Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div id="promotion_{{ $promotion->id }}" class="modal" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <h4 class="modal-title">
                                            {{ $promotion->title }}
                                        </h4>
                                    </div>
                                    <div class="modal-body">
                                        <h3>Tanggal akhir: <span>{{ $promotion->tanggal_akhir }}</span></h3>
                                        <p><span
                                                style="color: #33cccc;"><strong>{{ $promotion->bonus_title }}</strong></span>
                                        </p>
                                        <p>Minimal Deposit: {{ $promotion->min_deposite }}<br>Maksimal Bonus :
                                            {{ $promotion->max_deposite }}</p>

                                        <p>&nbsp;</p>
                                        <p>{!! $promotion->body !!}</p>

                                        <div class="expiration-countdown-container">
                                            <div class="expiration-countdown expiration_countdown"
                                                data-expiration-date="{{ $promotion->tanggal_akhir }}">
                                                <div data-section="days">HARI <div data-value="days">901</div>
                                                </div>
                                                <div data-section="hours">JAM <div data-value="hours">07</div>
                                                </div>
                                                <div data-section="minutes">MENIT <div data-value="minutes">31</div>
                                                </div>
                                                <div data-section="seconds">DETIK <div data-value="seconds">37</div>
                                                </div>
                                            </div>
                                        </div>

                                        <script>
                                            document.addEventListener('DOMContentLoaded', function() {
                                                const countdownElements = document.querySelectorAll('.expiration-countdown');

                                                countdownElements.forEach(countdown => {
                                                    const expirationDateStr = countdown.dataset.expirationDate;
                                                    const expirationDate = new Date(expirationDateStr.replace(/-/g, '/')).getTime();

                                                    const updateCountdown = () => {
                                                        const now = new Date().getTime();
                                                        const distance = expirationDate - now;

                                                        if (distance < 0) {
                                                            countdown.innerHTML = "PROMO EXPIRED";
                                                            return;
                                                        }

                                                        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                                                        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                                                        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                                                        countdown.querySelector('[data-value="days"]').textContent = days;
                                                        countdown.querySelector('[data-value="hours"]').textContent = hours;
                                                        countdown.querySelector('[data-value="minutes"]').textContent = minutes;
                                                        countdown.querySelector('[data-value="seconds"]').textContent = seconds;
                                                    };

                                                    updateCountdown(); // Initial call
                                                    setInterval(updateCountdown, 1000); // Update every second
                                                });
                                            });
                                        </script>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach

                </div>
                <div class="promotion-list" id="content-event-list" style="display: none">
                    <div class="promotion-item promotion_item">
                        <img
                            src="https://api2-aj8.imgzm.com/images/aj8/id_promo_106862fe-76aa-4ad6-8db3-03d7cf180806_1720498097107.jpg">
                        <div class="button-container">
                            <div class="promotion-label">
                                <h2>HACKSAW FLASH SALE!</h2>
                                <h3>Tanggal akhir: <span>-</span></h3>
                            </div>
                            <div>
                                <a href="#" class="click-for-get-promo-button">Ambil Promo</a>
                                <button type="button" class="click-for-more-info-button" data-toggle="modal"
                                    data-target="#promotion_106862fe-76aa-4ad6-8db3-03d7cf180806">
                                    Detail
                                </button>
                            </div>
                        </div>
                        <div id="promotion_106862fe-76aa-4ad6-8db3-03d7cf180806" class="modal" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <h4 class="modal-title">
                                            HACKSAW FLASH SALE!
                                        </h4>
                                    </div>
                                    <div class="modal-body">
                                        <h3>Tanggal akhir: <span>-</span></h3>
                                        <p><strong>Hacksaw Flash Sale</strong></p>
                                        <p><strong>Dapatkan kredit 1 JUTA RUPIAH sekarang juga dengan main di
                                                Hacksaw!</strong></p>
                                        <p><br>Periode Pengumpulan TO : 9 Juli 2024 (00:00) - 16 Juli 2024 (23:59)
                                            <br>Periode Pembelian Kredit: 16 Juli 2024 (19:00 - 23:59 pm)
                                        </p>
                                        <p>Harga Kupon : 10.000 LP <br>Jumlah Kupon : 50 Kupon</p>
                                        <p><br><strong>Syarat &amp; Ketentuan :</strong></p>
                                        <p>1. Seluruh pemain harus melakukan TO sebesar Rp 10.000.000 terlebih
                                            dahulu dan bermain HANYA di game Hacksaw sebelum dapat membeli kupon
                                            tersedia.</p>
                                        <p>2. TO hanya terhitung apabila bermain di game Hacksaw mulai tanggal 9
                                            Juli (00:00) - 16 Juli (23:59).</p>
                                        <p>3. Pencapaian TO bisa di lihat dengan memasuki halaman penukaran kupon
                                            dan menekan tombol refresh.</p>
                                        <p>4. Pada saat pembelian kupon akan ada delay kurang lebih 15-20 detik
                                            untuk waktu pengecekan TO.</p>
                                        <p>5. Satu pemain hanya dapat membeli 1 kupon.</p>
                                        <p>6. 1 Kupon bernilai kredit Rp 1.000.000</p>
                                        <p>7. Pemberian hadiah akan diberikan paling lambat 2 hari setelah event
                                            selesai<br><br>8. Seluruh keputusan merupakan keputusan akhir dari
                                            penyelenggara dan tim penyelenggara berhak menentukan pembatalan
                                            pemberian hadiah apabila player terbukti melakukan kecurangan atau tidak
                                            mengikuti ketentuan.</p>
                                        <p><br><strong>Ayo kumpulkan TO dengan main di HACKSAW sekarang
                                                !</strong><br><strong>JANGAN SAMPAI KEHABISAN!</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const promotionTab = document.getElementById('promotion-tab');
            const providerEventTab = document.getElementById('provider-event-tab');

            const promotionContent = document.getElementById('content-promo-list-x');
            const providerEventContent = document.getElementById('content-event-list');

            promotionTab.addEventListener('click', (event) => {
                event.preventDefault();
                promotionContent.classList.add('show');
                promotionContent.classList.remove('hide');
                providerEventContent.classList.add('hide');
                providerEventContent.classList.remove('show');
                promotionTab.dataset.active = 'true';
                providerEventTab.dataset.active = 'false';
            });

            providerEventTab.addEventListener('click', (event) => {
                event.preventDefault();
                providerEventContent.classList.add('show');
                providerEventContent.classList.remove('hide');
                promotionContent.classList.add('hide');
                promotionContent.classList.remove('show');
                providerEventTab.dataset.active = 'true';
                promotionTab.dataset.active = 'false';
            });
        });

        document.addEventListener('DOMContentLoaded', () => {
            const promotionTab = document.getElementById('promotion-tab');
            const providerEventTab = document.getElementById('provider-event-tab');

            const promotionContent = document.getElementById('promotion-content');
            const providerEventContent = document.getElementById('provider-event-content');

            promotionTab.addEventListener('click', (event) => {
                event.preventDefault();
                promotionContent.style.display = 'block';
                providerEventContent.style.display = 'none';
                promotionTab.dataset.active = 'true';
                providerEventTab.dataset.active = 'false';
            });

            providerEventTab.addEventListener('click', (event) => {
                event.preventDefault();
                providerEventContent.style.display = 'block';
                promotionContent.style.display = 'none';
                providerEventTab.dataset.active = 'true';
                promotionTab.dataset.active = 'false';
            });
        });
    </script>
@endsection
