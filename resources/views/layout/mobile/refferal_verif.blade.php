@extends('layout.mobile.main')
@section('mobile')
    <link rel="stylesheet" href="../../../assets/css/mobile/refferal.css">
    <div class="standard-form-container">
        <div class="container">
            <div class="row referral-verification-container">
                <div class="col-sm-12">
                    <div class="tab-menu-background-container">
                        <div class="tab-menu-container" data-style="vertical">
                            <a href="/refferal" data-active="true">
                                <i data-icon="referral"
                                    style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/referral.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/referral-active.svg?v=20240708-4);"></i>
                                Referensi
                            </a>
                            <a href="/refferal" data-active="false">
                                <i data-icon="referral-signups-summary"
                                    style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/referral-signups-summary.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/referral-signups-summary-active.svg?v=20240708-4);"></i>
                                Ringkasan Pendaftaran
                            </a>
                            <a href="/refferal" data-active="false">
                                <i data-icon="referral-claimed-history"
                                    style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/referral-claimed-history.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/referral-claimed-history-active.svg?v=20240708-4);"></i>
                                Riwayat Klaim
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="standard-form-title">
                        Verifikasi Akun Anda
                    </div>
                    &#xFEFF;
                    <form action="/referral/submit-verification" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div data-is-contact-verified="true">
                            <div class="form-group">
                                <div class="standard-form-note with-icon">
                                    <div class="icon-container">
                                        <div>
                                            <img loading="lazy"
                                                src="//d33egg70nrp50s.cloudfront.net/Images/icons/remark.svg?v=20240708-4">
                                        </div>
                                    </div>
                                    <div>
                                        <span>Catatan:</span>
                                        <ol>
                                            <li>Mohon verifikasi <b>Nomor WhatsApp</b> pada halaman <b>Profile</b> untuk
                                                bisa melanjutkan proses verifikasi.</li>
                                            <li>Untuk merubah <b>Nomor WhatsApp</b>, kunjungi halaman profil.</li>
                                            <li><b>Nama lengkap</b> harus sama dengan <b>Nama KTP</b> dan <b>Nama
                                                    Rekening</b>.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="FullName">
                                    Nama Lengkap
                                </label>
                                <span data-section="asterisk">*</span>
                                <div data-section="input">
                                    <input maxlength="100" autocomplete="off" class="form-control" data-val="true"
                                        data-val-regex="The field FullName must match the regular expression '^[0-9a-zA-Z ]*$'."
                                        data-val-regex-pattern="^[0-9a-zA-Z ]*$"
                                        data-val-required="The FullName field is required." id="FullName" name="fullName"
                                        placeholder="Nama Lengkap Anda" required="required" type="text"
                                        value="Mardi Santoso">
                                    <span class="standard-required-message">Nama lengkap hanya boleh berisi karakter
                                        alfanumerik.</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="IDCardPhoto">
                                    Foto KTP
                                </label>
                                <span data-section="asterisk">*</span>
                                <div data-section="input">
                                    <input class="form-control" data-val="true"
                                        data-val-required="The VerificationFile field is required." id="VerificationFile"
                                        name="img" required="required" type="file" value="">
                                    <span class="standard-required-message">Kolom ini tidak boleh kosong.</span>
                                </div>
                                <p class="simple-form-note">Format file: <b>PNG</b>, <b>JPEG</b> dan <b>JPG (</b>Maks
                                    <b>5MB)</b>.
                                </p>
                            </div>
                            <div class="form-group terms-conditions-container">
                                <h3>Syarat &amp; Ketentuan</h3>
                                <ol class="referral-verification-terms-conditions">
                                    <li>Saya, sebagai pengguna, menyetujui bahwa verifikasi KTP adalah syarat wajib untuk
                                        menggunakan layanan ini, demi keamanan dan integritas platform.</li>
                                    <li>Saya menegaskan bahwa saya tidak akan terlibat dalam tindakan phising. Saya memahami
                                        bahwa tindakan ini dapat mengakibatkan akun diblokir.</li>
                                    <li>Terkait dengan perjanjian ini, saya dengan tegas berkomitmen untuk tidak
                                        mempromosikan referral saya di situs web pemerintahan atau lembaga sejenis.</li>
                                    <li>Saya memahami dan menyetujui bahwa verifikasi KTP harus dilakukan dengan data
                                        pribadi yang sesuai dengan Kartu Tanda Penduduk (KTP) yang saya miliki, tanpa adanya
                                        perubahan atau manipulasi.</li>
                                    <li>Saya memahami dan menyetujui bahwa penggunaan data KTP untuk proses verifikasi hanya
                                        akan digunakan untuk tujuan tersebut dan tidak akan disalahgunakan.</li>
                                    <li>Saya setuju bahwa syarat dan ketentuan ini adalah mutlak dan dapat diubah atau
                                        diperbarui sewaktu-waktu tanpa pemberitahuan sebelumnya.</li>
                                </ol>
                            </div>
                            <div class="form-group">
                                <div class="standard-checkbox-container">
                                    <input type="checkbox" name="terms" id="terms_condition_checkbox" required="">
                                    <label for="terms_condition_checkbox">Saya telah membaca, memberikan persetujuan, dan
                                        menyetujui syarat dan ketentuan di atas dan setuju untuk melanjutkan proses
                                        ini.</label>
                                </div>
                            </div>
                            <div class="verification-footer">
                                <picture>
                                    <source
                                        srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/referral/footer/asf.webp?v=20240708-4"
                                        type="image/webp">
                                    <source
                                        srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/referral/footer/asf.png?v=20240708-4"
                                        type="image/png"><img loading="lazy"
                                        src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/referral/footer/asf.png?v=20240708-4">
                                </picture>
                                <div class="line"></div>
                            </div>
                            <div class="standard-button-group">
                                <button class="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
