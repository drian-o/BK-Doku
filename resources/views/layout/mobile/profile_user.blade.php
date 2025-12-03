@extends('layout.mobile.main')
@section('mobile')
    <link rel="stylesheet" href="../../../assets/css/mobile/profile.css">
    <div class="profile-container">
        <div class="standard-form-container">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="tab-menu-background-container">
                            <div class="tab-menu-container" data-style="vertical">
                                <a href="#" data-target="#akun-container" class="nav-link" data-active="true">
                                    <i data-icon="profile"
                                        style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/profile.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/profile-active.svg?v=20240708-4);"></i>
                                    Akun Saya
                                </a>
                                <a href="#" data-target="#password-container" class="nav-link" data-active="false">
                                    <i data-icon="password"
                                        style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/password.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/password-active.svg?v=20240708-4);"></i>
                                    Ubah Kata Sandi
                                </a>
                                <a href="#" data-target="#profile-container" class="nav-link" data-active="false">
                                    <i data-icon="bank-account"
                                        style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/edit.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/edit-active.svg?v=20240708-4);"></i>
                                    Profil Saya
                                </a>
                            </div>
                        </div>
                        <div class="tab-content" id="akun-container">
                            <div class="standard-form-title">
                                INFORMASI AKUN
                            </div>
                            <div class="standard-content-info">
                                <div class="standard-content-block">
                                    <table class="table profile-summary-table">
                                        <tbody>
                                            <tr>
                                                <th>Nama Lengkap</th>
                                                <td>:</td>
                                                <td>{{ Auth()->user()->accName }}</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>:</td>
                                                <td>
                                                    {{ Auth()->user()->email }} </td>
                                            </tr>
                                            <tr>
                                                <th>Nama Pengguna</th>
                                                <td>:</td>
                                                <td>{{ Auth()->user()->username }}</td>
                                            </tr>
                                            <tr>
                                                <th>ID Pengguna APK</th>
                                                <td>:</td>
                                                <td>{{ Auth()->user()->username . 'E09s' }}</td>
                                            </tr>
                                            <tr>
                                                <th>Mata Uang</th>
                                                <td>:</td>
                                                <td>IDR</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="standard-content-block">
                                    <div class="banking-details-header">
                                        <label>Detail Perbankan</label>
                                        <a href="/mobile/bank-account">
                                            <img loading="lazy"
                                                src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/edit.svg?v=20240708-4">
                                        </a>
                                    </div>
                                    <div id="bank_account_carousel" class="carousel slide bank-info-container"
                                        data-interval="false" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#bank_account_carousel" data-slide-to="0" class="active"></li>
                                            <li data-target="#bank_account_carousel" data-slide-to="1" class=""></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="bank-info-block item active">
                                                <div class="account-name">
                                                    {{ Auth()->user()->accName }}
                                                    <img class="bank-icon" loading="lazy"
                                                        onerror="this.style.display='none'"
                                                        src="//d33egg70nrp50s.cloudfront.net/Images/banks/bank-dana.svg?v=20240708-4"
                                                        style="display: none;">
                                                </div>
                                                <div class="account-number">
                                                    {{ Auth()->user()->accNumber }}
                                                </div>
                                                <hr>
                                                <div class="bank-name">
                                                    {{ Auth()->user()->bank }}
                                                </div>
                                            </div>
                                            @if($rekening)
                                             <div class="bank-info-block item ">
                                                <div class="account-name">
                                                    {{ $rekening->accName }}
                                                    <img class="bank-icon" loading="lazy"
                                                        onerror="this.style.display='none'"
                                                        src="//d33egg70nrp50s.cloudfront.net/Images/banks/bank-gopay.svg?v=20240708-4">
                                                </div>
                                                <div class="account-number">
                                                    {{ $rekening->accNumber }}
                                                </div>
                                                <hr>
                                                <div class="bank-name">
                                                    {{ $rekening->bank }}
                                                </div>
                                            </div>
                                            @else
                                             <div class="bank-info-block item ">
                                                <div class="account-name">
                                                   
                                                    <img class="bank-icon" loading="lazy"
                                                        onerror="this.style.display='none'"
                                                        src="//d33egg70nrp50s.cloudfront.net/Images/banks/bank-gopay.svg?v=20240708-4">
                                                </div>
                                                <div class="account-number">
                                                    
                                                </div>
                                                <hr>
                                                <div class="bank-name">
                                                 
                                                </div>
                                            </div>
                                            @endif
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="standard-form-title">
                                REFERENSI
                            </div>
                            <div class="standard-content-info">
                                <div class="standard-form-content-info">
                                    <section class="referral-field">
                                        <label>Kode Referensi:</label>
                                        <a href="#" id="copyReferralCodeButton" title="{{ Auth()->user()->ref }}">
                                            <div id="ReferralCode" class="referral-code-container">
                                                {{ Auth()->user()->ref }}
                                            </div>
                                        </a>
                                    </section>
                                </div>
                            </div>
                            <div class="standard-form-title">
                                STATUS DEPOSIT / PENARIKAN
                            </div>
                            <div class="standard-content-info">
                                <div>
                                    <h2>
                                        Status Deposit Terakhir
                                    </h2>
                                    <table class="table last-transaction-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    Jumlah
                                                </th>
                                                <th scope="col">
                                                    Tanggal/Waktu
                                                </th>
                                                <th scope="col" class="text-center">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @if ($deposit)
                                                <tr>
                                                    @if ($damount)
                                                        <td>IDR {{ $damount }}</td>
                                                    @else
                                                    @endif

                                                    <td>{{ $deposit->created_at }}</td>
                                                    <td class="text-center">{{ $deposit->id . 'Nex-U09' }}<br>
                                                        @if ($deposit->status_id == 1)
                                                            <label data-ticket-status="FAIL">Menunggu</label>
                                                        @elseif($deposit->status_id == 2)
                                                            <label data-ticket-status="FAIL">Disetujui</label>
                                                        @elseif($deposit->status_id == 3)
                                                            <label data-ticket-status="FAIL">Gagal</label>
                                                        @else
                                                        @endif
                                                    </td>
                                                </tr>
                                            @else
                                                <tr>
                                                    <td class="empty" colspan="3">Tidak ada data.</td>
                                                </tr>
                                            @endif
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <h2>
                                        Status Penarikan Terakhir
                                    </h2>
                                    <table class="table last-transaction-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    Jumlah
                                                </th>
                                                <th scope="col">
                                                    Tanggal/Waktu
                                                </th>
                                                <th scope="col" class="text-center">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @if ($withdraw)
                                                <tr>
                                                    @if ($wamount)
                                                        <td>IDR {{ $wamount }}</td>
                                                    @else
                                                    @endif

                                                    <td>{{ $withdraw->created_at }}</td>
                                                    <td class="text-center">{{ $withdraw->id . 'Nex-U09' }}<br>
                                                        @if ($withdraw->status_id == 1)
                                                            <label data-ticket-status="FAIL">Menunggu</label>
                                                        @elseif($withdraw->status_id == 2)
                                                            <label data-ticket-status="FAIL">Disetujui</label>
                                                        @elseif($withdraw->status_id == 3)
                                                            <label data-ticket-status="FAIL">Gagal</label>
                                                        @else
                                                        @endif

                                                    </td>
                                                </tr>
                                            @else
                                                <tr>
                                                    <td class="empty" colspan="3">Tidak ada data.</td>
                                                </tr>
                                            @endif
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content" id="password-container" style="display: none">
                            <form action="/change-password/user" method="post">
                                @csrf
                                <div class="form-group">
                                    <label for="OldPassword">Kata Sandi Saat Ini</label>
                                    <input maxlength="20" class="form-control" data-val="true"
                                        data-val-required="The OldPassword field is required." id="OldPassword"
                                        name="OldPassword" placeholder="Kata Sandi Saat Ini" type="password">
                                    <span class="standard-required-message">Kata sandi harus diisi.</span>
                                </div>
                                <div class="form-group standard-password-field">
                                    <label for="NewPassword">Kata Sandi Baru</label>
                                    <input maxlength="20" class="form-control" data-val="true"
                                        data-val-regex="The field NewPassword must match the regular expression '^(?=.{8,20}$)(?=.*?[a-z])(?=.*?[0-9]).*$'."
                                        data-val-regex-pattern="^(?=.{8,20}$)(?=.*?[a-z])(?=.*?[0-9]).*$"
                                        data-val-required="The NewPassword field is required." id="new_password_input"
                                        name="password" placeholder="Kata Sandi Baru" type="password">
                                    <span class="standard-required-message">Kata Sandi harus terdiri dari 8-20 karakter
                                        <br> Dan harus mengandung huruf dan angka</span>
                                    <i class="fas fa-eye" id="new_password_input_trigger"></i>
                                </div>
                                <div class="form-group standard-password-field">
                                    <label for="ConfirmPassword">Ulangi Kata Sandi</label>
                                    <input maxlength="20" class="form-control" data-val="true"
                                        data-val-equalto="'ConfirmPassword' and 'NewPassword' do not match."
                                        data-val-equalto-other="*.NewPassword"
                                        data-val-required="The ConfirmPassword field is required."
                                        id="confirm_password_input" name="password_confirmation"
                                        placeholder="Ulangi Kata Sandi" type="password">
                                    <span class="standard-required-message">Kata sandi tidak cocok.</span>
                                    <i class="fas fa-eye" id="confirm_password_input_trigger"></i>
                                </div>
                                <div class="form-group">
                                    <label for="VerificationCode">Kode Verifikasi</label>
                                    <div data-section="input" class="captcha-input">
                                        <input autocomplete="off" class="form-control" data-val="true"
                                            data-val-required="The VerificationCode field is required."
                                            id="VerificationCode" name="VerificationCode" placeholder="Kode Verifikasi"
                                            type="text" value="">
                                        <span class="standard-required-message">CAPTCHA salah.</span>
                                        <div class="captcha-container">
                                            <img src="{{ captcha_src('mini') }}"
                                                onclick="this.src='/captcha/mini?'+Math.random()" id="captchaCode"
                                                alt="" class="captcha">
                                            <a rel="nofollow" href="javascript:;"
                                                onclick="document.getElementById('captchaCode').src='captcha/mini?'+Math.random()"
                                                class="refresh btn btn-sm btn-info">

                                                <i class="fa-sharp fa-solid fa-arrows-rotate">
                                                </i>

                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="standard-button-group">
                                    <button class="standard-secondary-button" type="submit">Ubah Kata Sandi</button>
                                </div>
                            </form>
                        </div>
                        <div class="tab-content" id="profile-container" style="display: none">
                            <div class="standard-form-container">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="standard-form-title">
                                                PROFIL SAYA
                                            </div>
                                            <form action="/update-profile" method="POST">
                                                @csrf
                                                <div class="standard-sub-section">
                                                    <div class="standard-form-title">
                                                        Informasi Pribadi
                                                    </div>
                                                    <div class="standard-form-content form_subcategory">
                                                        <div class="form-group">
                                                            <label for="FullName">Nama Lengkap</label>
                                                            <input class="form-control" data-val="true"
                                                                data-val-regex="The field FullName must match the regular expression '^[0-9a-zA-Z ]*$'."
                                                                data-val-regex-pattern="^[0-9a-zA-Z ]*$"
                                                                data-val-required="The FullName field is required."
                                                                id="FullName" name="FullName" placeholder="Nama Lengkap"
                                                                type="text" value="Mardi Santoso">
                                                            <span class="standard-required-message">Nama lengkap hanya
                                                                boleh berisi karakter alfanumerik.</span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="Gender">Jenis Kelamin</label>
                                                            <select class="form-control" id="Gender" name="Gender">
                                                                <option value="">-- Pilih Jenis Kelamin --</option>
                                                                <option value="M">Laki-laki</option>
                                                                <option value="F">Perempuan</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="Address">Alamat</label>
                                                            <textarea class="form-control" cols="20" id="Address" name="Address" placeholder="Alamat Anda"
                                                                rows="5"></textarea>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="Postcode">Kode Pos</label>
                                                            <input class="form-control" id="Postcode" name="Postcode"
                                                                placeholder="Kode Pos Anda" type="text"
                                                                value="">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="State">Propinsi</label>
                                                            <input class="form-control" id="State" name="State"
                                                                placeholder="Negara anda" type="text" value="">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="Country">Negara</label>
                                                            <select class="form-control" data-val="true"
                                                                data-val-required="The Country field is required."
                                                                id="Country" name="Country">
                                                                <option value="">-- Pilih Negara --</option>
                                                                <option selected="selected"
                                                                    value="25513164-f84c-4674-8218-8d731c387d17">Indonesia
                                                                </option>
                                                            </select>
                                                            <span class="standard-required-message">Silahkan pilih
                                                                negara!</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="standard-sub-section">
                                                    <div class="standard-form-title">
                                                        Informasi Kontak
                                                    </div>
                                                    <div class="standard-form-content form_subcategory">
                                                        <div class="form-group">
                                                            <label for="ContactNo">No. Kontak.</label>
                                                            <div data-section="input" class="copy-input-button-field">
                                                                <input maxlength="13" class="form-control"
                                                                    data-val="true"
                                                                    data-val-length="The field ContactNo must be a string with a minimum length of 10 and a maximum length of 13."
                                                                    data-val-length-max="13" data-val-length-min="10"
                                                                    data-val-regex="The field ContactNo must match the regular expression '^[0-9]+$'."
                                                                    data-val-regex-pattern="^[0-9]+$"
                                                                    data-val-required="The ContactNo field is required."
                                                                    id="ContactNo" name="ContactNo" type="text"
                                                                    value="088837876512">
                                                                <span class="standard-required-message">Harap masukkan
                                                                    nomor
                                                                    kontak yang valid!</span>
                                                                <button class="copy-input-button" id="copy_contact_button"
                                                                    type="button">
                                                                    <i class="fa fa-copy"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="Email">
                                                                <a class="not-verified-status"
                                                                    href="/otp/verification/email" target="_blank">
                                                                    Click here to verify your Email
                                                                    <i class="fa fa-external-link-alt"></i>
                                                                </a>
                                                            </label>
                                                            <input autocomplete="off" class="form-control"
                                                                data-val="true"
                                                                data-val-email="The Email field is not a valid e-mail address."
                                                                id="Email" name="Email" placeholder="Email"
                                                                type="text" value="sandhika@gmail.com">
                                                            <span class="standard-required-message">Harap masukkan email
                                                                yang
                                                                valid!</span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="Telegram">Telegram</label>
                                                            <input class="form-control" data-val="true"
                                                                data-val-regex="The field Telegram must match the regular expression '^[0-9]+$'."
                                                                data-val-regex-pattern="^[0-9]+$" id="Telegram"
                                                                name="Telegram" type="text" value="">
                                                            <span class="standard-required-message">Harap masukkan numerik
                                                                saja</span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="WhatsApp">
                                                                <a class="not-verified-status"
                                                                    href="/otp/verification/whatsapp" target="_blank">
                                                                    Click here to verify your WhatsApp
                                                                    <i class="fa fa-external-link-alt"></i>
                                                                </a>
                                                            </label>
                                                            <input class="form-control" data-val="true"
                                                                data-val-regex="The field WhatsApp must match the regular expression '^[0-9]+$'."
                                                                data-val-regex-pattern="^[0-9]+$" id="WhatsApp"
                                                                name="WhatsApp" placeholder="Nomor WhatsApp"
                                                                type="text" value="088837876512">
                                                            <span class="standard-required-message">Harap masukkan numerik
                                                                saja</span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="WeChat">WeChat</label>
                                                            <input class="form-control" id="WeChat" name="WeChat"
                                                                placeholder="WeChat" type="text" value="">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="Line">Line</label>
                                                            <input class="form-control" id="Line" name="Line"
                                                                placeholder="Line" type="text" value="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="standard-button-group">
                                                    <input type="submit" class="standard-secondary-button"
                                                        value="Simpan Data Profil Saya">
                                                </div>
                                            </form>
                                        </div>
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
        document.addEventListener('DOMContentLoaded', function() {
            const togglePasswordVisibility = (inputId, iconId) => {
                const passwordInput = document.getElementById(inputId);
                const passwordIcon = document.getElementById(iconId);

                passwordIcon.addEventListener('click', () => {
                    const type = passwordInput.type === 'password' ? 'text' : 'password';
                    passwordInput.type = type;
                    passwordIcon.classList.toggle('fa-eye');
                    passwordIcon.classList.toggle('fa-eye-slash');
                });
            };

            togglePasswordVisibility('new_password_input', 'new_password_input_trigger');

            togglePasswordVisibility('confirm_password_input', 'confirm_password_input_trigger');
        });
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            function switchTab(event) {
                event.preventDefault();
                document.querySelectorAll('.nav-link').forEach(function(link) {
                    link.dataset.active = 'false';
                });

                document.querySelectorAll('.tab-content').forEach(function(content) {
                    content.style.display = 'none';
                });

                const targetSelector = event.target.getAttribute('data-target');
                const targetContent = document.querySelector(targetSelector);
                if (targetContent) {
                    targetContent.style.display = 'block';
                }

                event.currentTarget.dataset.active = 'true';
            }

            document.querySelectorAll('.nav-link').forEach(function(link) {
                link.addEventListener('click', switchTab);
            });
        });
    </script>
@endsection
