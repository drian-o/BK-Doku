@extends('layout.desktop.main')
@section('content')
    <link rel="stylesheet" href="../../../assets/css/desktop/refferal.css">
    <style>
        .button-link {
            display: inline-block;
            padding: 10px 20px;
            margin: 5px;
            color: white;
            background-color: #22655e;
            /* Warna toska */
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            text-align: center;
            transition: background-color 0.3s;
        }

        .button-link:hover {
            background-color: #32C8B9;
        }

        .button-link[data-active="true"] {
            background-color: #32C8B9;
            /* Warna toska sedikit lebih gelap untuk link aktif */
        }

        .button-link[data-active="true"]:hover {
            background-color: #28AFA2;
            /* Warna toska lebih gelap saat hover untuk link aktif */
        }
    </style>
    <div class="site-content-container" data-container-background="general">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    @include('layout.desktop.profile')
                    <div class="standard-container-with-sidebar" data-style="light">
                        @include('layout.desktop.sidemenu')
                        @if ($verifikasi)
                            <div class="standard-form-content">
                                <div class="standard-form-note">
                                    Bagikan kode referensi Anda, kode QR atau tautan dengan teman-teman Anda untuk mulai
                                    mendapatkan bonus hadiah.
                                </div>
                                <div class="row">
                                    <div class="col-sm-4 text-center standard-button-group">
                                        <div class="qr-code" id="referral-qr-code">
                                            <img src="{{ asset('storage/' . $verifikasi->barcode) }}" alt="">
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="referral-status-box referral-box">
                                            Status: <span data-status="Active">Aktif</span>
                                        </div>
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
                                    <div class="col-sm-4">
                                        <div class="referral-box" id="count_ref">
                                            <h4>Pendaftaran Referensi:</h4><a href="#">0</a>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="referral-box">
                                            <h4>Total Penghasilan:</h4><span id="total">IDR 0.00</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="referral-box">
                                            <h4>Penghasilan Terakhir:</h4><span id="last">IDR 0.00</span>
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
                                            $('#count_ref a').text(response.child_referrals);
                                            $('#total').text('IDR ' + response.total_earnings);
                                            $('#last').text('IDR ' + response.last_earning);
                                        }
                                    });
                                });
                            </script>
                        @else
                            <div class="standard-form-content">
                                @include('layout.desktop.partisi_navbar_link')
                                <div class="row">
                                    <div class="col-sm-12 referral-banner-container">
                                        <picture>
                                            <source
                                                srcset="//d33egg70nrp50s.cloudfront.net/Images/referral/banners/desktop/id.webp?v=20240708-4"
                                                type="image/webp">
                                            <source
                                                srcset="//d33egg70nrp50s.cloudfront.net/Images/referral/banners/desktop/id.png?v=20240708-4"
                                                type="image/png"><img loading="lazy"
                                                src="//d33egg70nrp50s.cloudfront.net/Images/referral/banners/desktop/id.png?v=20240708-4">
                                        </picture>
                                    </div>
                                    <div class="col-sm-12 referral-feature-container">
                                        <h3 class="referral-guidance-note">Sekali ID Anda terverifikasi, Anda dapat
                                            menikmati
                                            manfaat penuh dari
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
                                                    <p>Tarik komisi dari referral yang sudah Anda miliki sebelumnya dan
                                                        nikmati
                                                        hasilnya.</p>
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
                                            <a href="/referral/verification" class="button-link">
                                                Verifikasi Sekarang
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div>
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
