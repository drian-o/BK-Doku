@extends('layout.mobile.main')
@section('mobile')
    <link rel="stylesheet" href="../../../assets/css/mobile/refferal.css">
    <div class="standard-form-container">
        <div class="container">
            <div class="row referral-container">
                <div class="col-sm-12">
                    <div class="tab-menu-background-container">
                        <div class="tab-menu-container" data-style="vertical">
                            <a href="#" data-target="#intro-container" class="nav-link" data-active="true">
                                <i data-icon="referral"
                                    style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/referral.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/referral-active.svg?v=20240708-4);"></i>
                                Referensi
                            </a>
                            <a href="#" data-target="#summary-container" class="nav-link" data-active="true">
                                <i data-icon="referral-signups-summary"
                                    style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/referral-signups-summary.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/referral-signups-summary-active.svg?v=20240708-4);"></i>
                                Ringkasan Pendaftaran
                            </a>
                            <a href="#" data-target="#klaim-container" class="nav-link" data-active="true">
                                <i data-icon="referral-claimed-history"
                                    style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/referral-claimed-history.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/referral-claimed-history-active.svg?v=20240708-4);"></i>
                                Riwayat Klaim
                            </a>
                        </div>
                    </div>
                </div>
                @if ($verifikasi)
                    <div class="tab-content" id="intro-container">
                        <div class="standard-form-content">
                            <div class="standard-form-note">
                                Bagikan kode referensi Anda, kode QR atau tautan dengan teman-teman Anda untuk mulai
                                mendapatkan bonus hadiah.
                            </div>
                            <div class="row">
                                <div class="col-sm-4 text-center standard-button-group"
                                    style="background-color: #2c2c2c; color: #ffffff; padding: 15px; border-radius: 10px;">
                                    <div class="qr-code" id="referral-qr-code">
                                        <img src="{{ asset('storage/' . $verifikasi->barcode) }}" alt="">
                                    </div>
                                </div>
                                <div class="col-sm-8">

                                    <div class="referral-code-container">
                                        <h4 id="ReferralCode"></h4><a id="copy_referralcode_button">Salin Kode
                                            Referensi</a>
                                    </div>
                                    <div class="copy-input-button-field">
                                        <input class="form-control" id="ReferralLink" name="ReferralLink"
                                            readonly="readonly" style="height:50px;" type="text"
                                            value="{{ Auth()->user()->ref_link }}">
                                        <button class="copy-input-button" id="copy_referrallink_button" type="button">
                                            <i class="fas fa-copy"></i> <!-- FontAwesome icon -->
                                        </button>
                                    </div>
                                    <div class="text-center whitelisted-domains-link">
                                        <a href="#">Domain Referensi yang telah
                                            diizinkan</a>
                                    </div>
                                </div>
                            </div>
                            <div class="row update-verification-note-container">
                                <div class="col-sm-4"></div>
                                <div class="col-sm-8">
                                    <p>
                                        Ingin memperbarui data Anda?
                                        <a href="/referral/verification">
                                            Klik di sini untuk memverifikasi ulang
                                        </a>
                                    </p>
                                    <p class="update-verification-note">
                                        Catatan: Anda hanya dapat memperbarui data verifikasi sekali saja.
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div id="referral-count" class="referral-box"
                                        style="background-color: #2c2c2c; color: #ffffff; padding: 15px; border-radius: 10px;">
                                        <h4>Pendaftaran Referensi:</h4><a href="#">0</a>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="referral-box"
                                        style="background-color: #2c2c2c; color: #ffffff; padding: 15px; border-radius: 10px;">
                                        <h4>Total Penghasilan:</h4><span id="total-earnings">IDR 0.00</span>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="referral-box"
                                        style="background-color: #2c2c2c; color: #ffffff; padding: 15px; border-radius: 10px;">
                                        <h4>Penghasilan Terakhir:</h4><span id="last-earning">IDR 0.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                    <script>
                        $(document).ready(function() {
                            $.ajax({
                                url: '/referral-data',
                                method: 'GET',
                                success: function(response) {
                                    $('#referral-count a').text(response.child_referrals);
                                    $('#total-earnings').text('IDR ' + response.total_earnings);
                                    $('#last-earning').text('IDR ' + response.last_earning);
                                }
                            });
                        });
                    </script>
                @else
                    <div class="tab-content" id="intro-container">
                        <div class="col-sm-12 referral-banner-container">
                            <picture>
                                <source
                                    srcset="//d33egg70nrp50s.cloudfront.net/Images/referral/banners/mobile/id.webp?v=20240708-4"
                                    type="image/webp">
                                <source
                                    srcset="//d33egg70nrp50s.cloudfront.net/Images/referral/banners/mobile/id.png?v=20240708-4"
                                    type="image/png"><img loading="lazy"
                                    src="//d33egg70nrp50s.cloudfront.net/Images/referral/banners/mobile/id.png?v=20240708-4">
                            </picture>
                        </div>
                        <div class="col-sm-12 referral-feature-container">
                            <h3 class="referral-guidance-note">Sekali ID Anda terverifikasi, Anda dapat menikmati manfaat
                                penuh
                                dari
                                program referral kami:</h3>
                            <div class="referral-features">
                                <div class="referral-features-item">
                                    <div class="feature-icon">
                                        <div>
                                            <img loading="lazy"
                                                src="//d33egg70nrp50s.cloudfront.net/Images/referral/referral-commission.svg?v=20240708-4">
                                        </div>
                                    </div>
                                    <div class="feature-info">
                                        <span>Komisi Referral</span>
                                        <p>Tarik komisi dari referral yang sudah Anda miliki sebelumnya dan nikmati
                                            hasilnya.
                                        </p>
                                    </div>
                                </div>
                                <div class="referral-features-item">
                                    <div class="feature-icon">
                                        <div>
                                            <img loading="lazy"
                                                src="//d33egg70nrp50s.cloudfront.net/Images/referral/referral-sharing.svg?v=20240708-4">
                                        </div>
                                    </div>
                                    <div class="feature-info">
                                        <span>Kemudahan Berbagi Referral</span>
                                        <p>Berbagi kode referral Anda ke player lain dengan mudah dan cepat.</p>
                                    </div>
                                </div>
                                <div class="referral-features-item">
                                    <div class="feature-icon">
                                        <div>
                                            <img loading="lazy"
                                                src="//d33egg70nrp50s.cloudfront.net/Images/referral/referral-summary.svg?v=20240708-4">
                                        </div>
                                    </div>
                                    <div class="feature-info">
                                        <span>Ringkasan Referral</span>
                                        <p>Lihat ringkasan mengenai progress dari hasil referral Anda.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="standard-button-group">
                                <a href="/referral/verification" class="standard-secondary-button">
                                    Verifikasi Sekarang
                                </a>
                            </div>
                        </div>
                    </div>
                @endif

                <div class="tab-content" id="summary-container" style="display: none">
                    <form action="#" method="post">
                        <div class="reporting-control-group">
                            <div class="form-group">
                                <label>Dari</label>
                                <input type="text" class="form-control hasDatepicker" name="StartingDate"
                                    id="starting_date" value="2024-07-18">
                            </div>
                            <div>
                                <label>Sampai</label>
                                <input type="text" class="form-control hasDatepicker" name="EndingDate"
                                    id="ending_date" value="2024-07-25">
                            </div>
                            <div class="standard-button-group">
                                <button type="submit" class="standard-secondary-button">
                                    Cari
                                </button>
                            </div>
                        </div>
                        <div class="reporting-scroll-container">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col" style="text-align: center">
                                            Nama Pengguna </th>
                                        <th scope="col" style="text-align: center">
                                            Parent Ref </th>
                                        <th scope="col" style="text-align: center">
                                            Hitungan Deposit </th>
                                        <th scope="col" style="text-align: center">
                                            Bonus </th>
                                        <th scope="col" style="text-align: center">
                                            Join Date </th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </form>
                    <script>
                        $(document).ready(function() {
                            $.ajax({
                                url: '/referral-details',
                                method: 'GET',
                                success: function(response) {
                                    let tableBody = $('table tbody');
                                    tableBody.empty();

                                    response.forEach(function(item) {
                                        tableBody.append(`
                        <tr>
                            <td style="text-align: center">${item.name}</td>
                            <td style="text-align: center">${item.parent_ref}</td>
                            <td style="text-align: center">${item.total_deposit}</td>
                            <td style="text-align: center">${item.bonus || '0,00'}</td> <!-- 'bonus' can be added if needed -->
                            <td style="text-align: center">${item.join_date}</td>
                        </tr>
                    `);
                                    });
                                }
                            });
                        });
                    </script>
                </div>
                <div class="tab-content" id="klaim-container" style="display: none">
                    <h2 class="text-center">Belum Ada Riwayat Klaim</h2>
                </div>
            </div>
        </div>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            function switchTab(targetId) {
                document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                    tabContent.style.display = 'none';
                });

                document.querySelectorAll('.nav-link').forEach(function(navLink) {
                    navLink.setAttribute('data-active', 'false');
                });

                document.querySelector(targetId).style.display = 'block';

                document.querySelector(`a[data-target="${targetId}"]`).setAttribute('data-active', 'true');
            }

            switchTab('#intro-container');

            document.querySelectorAll('.nav-link').forEach(function(navLink) {
                navLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = navLink.getAttribute('data-target');
                    switchTab(targetId);
                });
            });
        });
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var copyButton = document.getElementById('copy_referrallink_button');
            var referralLinkInput = document.getElementById('ReferralLink');

            copyButton.addEventListener('click', function() {
                // Select the input text
                referralLinkInput.select();
                referralLinkInput.setSelectionRange(0, 99999);


                navigator.clipboard.writeText(referralLinkInput.value).then(function() {

                    copyButton.querySelector('i').classList.remove('fa-copy');
                    copyButton.querySelector('i').classList.add('fa-check');
                    copyButton.querySelector('i').style.color = 'green';

                    // Reset icon after a short delay
                    setTimeout(function() {
                        copyButton.querySelector('i').classList.remove('fa-check');
                        copyButton.querySelector('i').classList.add('fa-copy');
                        copyButton.querySelector('i').style.color = '';
                    }, 2000);
                }).catch(function(error) {
                    console.error('Failed to copy text: ', error);
                });
            });
        });
    </script>
@endsection
