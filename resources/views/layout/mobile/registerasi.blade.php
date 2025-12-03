@extends('layout.mobile.main')
@section('mobile')
    <div class="standard-form-container register-page">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <form action="/registerasi" method="post">
                        @csrf
                        <div class="standard-sub-section">
                            <div class="form-group">
                                <div class="alert-danger" id="register_alert" hidden=""></div>
                            </div>
                            <div class="form-group">
                                <div class="alert-success" id="register_success_alert" hidden=""></div>
                            </div>
                        </div>
                        <div class="standard-sub-section">
                            <div class="standard-form-title">
                                Informasi Pribadi
                            </div>
                            <div class="standard-form-content form_subcategory">
                                <div class="form-group required-form-group">
                                    <label for="UserName">Nama Pengguna</label>
                                    <input maxlength="12" autocomplete="off" class="form-control lowercase" data-val="true"
                                        data-val-regex="The field UserName must match the regular expression '^[0-9a-zA-Z]{3,12}$'."
                                        data-val-regex-pattern="^[0-9a-zA-Z]{3,12}$"
                                        data-val-required="The UserName field is required." id="username_field"
                                        name="username" placeholder="Nama Pengguna Anda" type="text" value="">
                                    <span class="standard-required-message">
                                        Harap masukkan antara 3 - 12 karakter dalam alfanumerik!
                                        <br>
                                        Nama pengguna tidak boleh memiliki spasi!
                                    </span>
                                </div>
                                <div class="form-group required-form-group">
                                    <label for="Password">Password</label>
                                    <div data-section="input" class="copy-input-button-field">
                                        <input maxlength="20" class="form-control" data-val="true"
                                            data-val-equalto="'Password' and 'Password' do not match."
                                            data-val-equalto-other="*.Password"
                                            data-val-required="The Password field is required." id="password_field"
                                            name="password" placeholder="Kata Sandi Anda" type="password">
                                        <span class="standard-required-message">Password harus terdiri dari 8-20 karakter,
                                            dan harus mengandung huruf dan angka.</span>
                                        <div class="password-validations error" id="password_validations"
                                            style="display: none;">
                                            <div id="password_username_validation" style="color: green;">
                                                <i class="glyphicon glyphicon-ok" style="color: green;"></i>
                                                Kata sandi tidak boleh mengandung nama pengguna.
                                            </div>
                                            <div id="password_length_validation" style="color: red;">
                                                <i class="glyphicon glyphicon-exclamation-sign" style="color: red;"></i>
                                                Terdiri dari 8-20 karakter.
                                            </div>
                                            <div id="password_alphanumeric_validation" style="color: red;">
                                                <i class="glyphicon glyphicon-exclamation-sign" style="color: red;"></i>
                                                Mengandung 1 angka dan 1 huruf.
                                            </div>
                                        </div>
                                        <button class="copy-input-button" type="button" id="togglePassword">
                                            <i class="fa-solid fa-eye" id="eyeIcon"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="form-group required-form-group">
                                    <label for="ConfirmedPassword">Ulangi Kata Sandi</label>
                                    <div data-section="input" class="copy-input-button-field">
                                        <input maxlength="20" class="form-control" data-val="true"
                                            data-val-equalto="'ConfirmedPassword' and 'Password' do not match."
                                            data-val-equalto-other="*.Password"
                                            data-val-required="The ConfirmedPassword field is required."
                                            id="ConfirmedPassword" name="password_confirmation"
                                            placeholder="Ulangi Kata Sandi Anda" type="password">
                                        <span class="standard-required-message">Konfirmasi kata sandi tidak cocok!</span>
                                        <button class="copy-input-button" type="button" id="toggleConfirmPassword">
                                            <i class="fa-solid fa-eye" id="eyeIconConfirm"></i>
                                        </button>
                                    </div>
                                </div>

                                <script>
                                    window.addEventListener('DOMContentLoaded', () => {
                                        const updateValidationStatus = (element, status) => {
                                            const iconOk = 'glyphicon-ok';
                                            const iconNotOk = 'glyphicon-exclamation-sign';

                                            const icon = element.querySelector('i');

                                            if (status) {
                                                element.style.color = 'green';
                                                element.parentElement.classList.remove('error');
                                                icon.style.color = 'green';

                                                icon.classList.add(iconOk);
                                                icon.classList.remove(iconNotOk);

                                                return;
                                            }

                                            element.style.color = 'red';
                                            element.parentElement.classList.add('error');
                                            icon.style.color = 'red';

                                            icon.classList.add(iconNotOk);
                                            icon.classList.remove(iconOk);
                                        };

                                        const passwordUsernameValidation = document.querySelector('#password_username_validation');
                                        const passwordLengthValidation = document.querySelector('#password_length_validation');
                                        const passwordAlphanumericValidation = document.querySelector('#password_alphanumeric_validation');
                                        const passwordValidations = document.querySelector('#password_validations');

                                        const usernameField = document.querySelector('#username_field');
                                        const passwordField = document.querySelector('#password_field');

                                        const validatePassword = () => {
                                            const username = usernameField.value;
                                            const password = passwordField.value;

                                            const notContainsUsername = !username.length || (password.toLowerCase().indexOf(username
                                                .toLowerCase()) < 0);
                                            const isCorrectLength = password.length >= 8 && password.length <= 20;
                                            const containsAlphabet = password.length && /([a-z]).*/.test(password);
                                            const containsNumber = password.length && /([0-9]).*/.test(password);

                                            updateValidationStatus(passwordUsernameValidation, notContainsUsername);
                                            updateValidationStatus(passwordLengthValidation, isCorrectLength);
                                            updateValidationStatus(passwordAlphanumericValidation, containsAlphabet && containsNumber);
                                        };

                                        usernameField.onkeyup = validatePassword;
                                        passwordField.onkeyup = validatePassword;

                                        validatePassword();

                                        if (passwordValidations) {
                                            const togglePasswordValidations = () => {
                                                if ((passwordField === document.activeElement || passwordValidations.classList.contains(
                                                        'error'))) {
                                                    passwordValidations.style.display = '';
                                                } else {
                                                    passwordValidations.style.display = 'none';
                                                }
                                            };

                                            passwordField.focusin = togglePasswordValidations;
                                            passwordField.focusout = togglePasswordValidations;
                                        }

                                        document.getElementById('togglePassword').addEventListener('click', function(e) {
                                            const passwordField = document.getElementById('password_field');
                                            const eyeIcon = document.getElementById('eyeIcon');
                                            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
                                            passwordField.setAttribute('type', type);
                                            eyeIcon.classList.toggle('fa-eye');
                                            eyeIcon.classList.toggle('fa-eye-slash');
                                        });

                                        document.getElementById('toggleConfirmPassword').addEventListener('click', function(e) {
                                            const passwordField = document.getElementById('ConfirmedPassword');
                                            const eyeIcon = document.getElementById('eyeIconConfirm');
                                            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
                                            passwordField.setAttribute('type', type);
                                            eyeIcon.classList.toggle('fa-eye');
                                            eyeIcon.classList.toggle('fa-eye-slash');
                                        });
                                    });
                                </script>
                                <div class="form-group required-form-group">
                                    <label for="FullName">Nama Lengkap</label>
                                    <input maxlength="100" autocomplete="off" class="form-control" data-val="true"
                                        data-val-regex="The field FullName must match the regular expression '^[0-9a-zA-Z ]*$'."
                                        data-val-regex-pattern="^[0-9a-zA-Z ]*$" id="FullName" name="fullName"
                                        placeholder="Nama Lengkap Anda" required="required" type="text" value="">
                                    <span class="standard-required-message">Nama lengkap hanya boleh berisi karakter
                                        alfanumerik.</span>
                                </div>
                                <div class="form-group ">
                                    <label for="Email">Email</label>
                                    <input maxlength="100" autocomplete="off" class="form-control" data-val="true"
                                        data-val-email="The Email field is not a valid e-mail address." id="Email"
                                        name="email" placeholder="Email@contoh.com" type="text" value="">
                                    <span class="standard-required-message">Email salah.</span>
                                </div>
                                <div class="form-group register-form-note">
                                    Silakan masukkan email yang aktif untuk tujuan reset kata sandi
                                </div>
                                <div class="form-group required-form-group">
                                    <label for="Phone">No. Kontak</label>
                                    <div data-section="input" class="copy-input-button-field">
                                        <input maxlength="16" autocomplete="off" class="form-control format_phone"
                                            data-val="true"
                                            data-val-length="The field Phone must be a string with a minimum length of 12 and a maximum length of 16."
                                            data-val-length-max="16" data-val-length-min="12"
                                            data-val-regex="The field Phone must match the regular expression '^(?=.*[0-9])[0-9\-]+$'."
                                            data-val-regex-pattern="^(?=.*[0-9])[0-9\-]+$" id="Phone"
                                            inputmode="decimal" name="phone" placeholder="Nomor Telepon Anda"
                                            required="required" type="text" value=""> <span
                                            class="standard-required-message">Nomor Kontak Harus diantara 10 dan 13
                                            digit</span>
                                        <button class="copy-input-button" id="copy_phone_button" type="button">
                                            <i class="glyphicon glyphicon-file"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="form-group required-form-group">
                                    <label for="Whatsapp">WhatsApp</label>
                                    <input class="form-control format_phone" data-val="true"
                                        data-val-regex="The field WhatsApp must match the regular expression '^(?=.*[0-9])[0-9\-]+$'."
                                        data-val-regex-pattern="^(?=.*[0-9])[0-9\-]+$" id="WhatsApp" inputmode="decimal"
                                        name="whatsapp" placeholder="Nomor WhatsApp" required="required" type="text"
                                        value="" maxlength="16"> <span class="standard-required-message">Harap
                                        masukkan numerik saja</span>
                                </div>
                                <div class="form-group ">
                                    <label for="SelectedCountry">Negara</label>
                                    <select class="form-control" id="SelectedCountry" name="country">
                                        <option value="">-- Pilih Negara --</option>
                                        <option value="Indonesia">Indonesia</option>
                                    </select> <span class="standard-required-message">Silahkan pilih negara!</span>
                                </div>
                                @if (isset($referral))
                                    <div class="form-group referral-checkbox-container">
                                        <input type="checkbox" class="referral-code-checkbox" id="referral_code_checkbox"
                                            checked>
                                        <label for="referral_code_checkbox">Kode Referensi</label>
                                        <input autocomplete="off" class="form-control referral-code-input"
                                            id="referral_code_input" name="ref" placeholder="Kode Referensi"
                                            type="text" value="{{ $referral }}">
                                    </div>
                                @else
                                    <div class="form-group referral-checkbox-container">
                                        <input type="checkbox" class="referral-code-checkbox"
                                            id="referral_code_checkbox">
                                        <label for="referral_code_checkbox">Kode Referensi</label>
                                        <input autocomplete="off" class="form-control referral-code-input"
                                            id="referral_code_input" name="ref" placeholder="Kode Referensi"
                                            type="text" value="" disabled>
                                    </div>
                                @endif

                            </div>
                        </div>
                        <div class="standard-sub-section" id="bank_account_section">
                            <div class="standard-form-title">
                                Informasi Pembayaran
                            </div>
                            <div class="standard-form-content form_subcategory">
                                <div class="form-group">
                                    <label for="SelectedBank">Metode Pembayaran</label>
                                    <div data-section="input" class="payment-method-container">
                                        <label>
                                            <input type="radio" name="pembayaran" value="bank" checked="">
                                            BANK
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group required-form-group">
                                    <label for="SelectedBank">Bank</label>
                                    <select class="form-control" data-val="true" data-val-required="Bank harus diisi."
                                        id="selected_bank_select" name="bank">
                                        <option value="">-- Pilih Bank --</option>
                                        <option value="DANA">BANK DANA</option>
                                        <option value="GOPAY">BANK GOPAY</option>
                                        <option value="OVO">BANK OVO</option>
                                        <option value="BCA">BCA</option>
                                        <option value="BNI">BNI</option>
                                        <option value="BRI">BRI</option>
                                        <option value="MANDIRI">MANDIRI</option>
                                        <option value="BNI">NEXUSPAY DEPOSIT BANK
                                            BNI</option>
                                        <option value="BRI">NEXUSPAY DEPOSIT BANK
                                            BRI</option>
                                        <option value="DANAMON">NEXUSPAY DEPOSIT BANK
                                            DANAMON</option>
                                        <option value="MANDIRI">NEXUSPAY DEPOSIT BANK
                                            MANDIRI</option>
                                        <option value="PERMATA">NEXUSPAY DEPOSIT BANK
                                            PERMATA</option>
                                    </select> <span class="standard-required-message">Bank harus diisi.</span>
                                </div>
                                <div class="form-group required-form-group">
                                    <label for="BankAccountNumber">Nomor Rekening</label>
                                    <input maxlength="24" autocomplete="off" class="form-control format_account_number"
                                        data-val="true"
                                        data-val-regex="The field BankAccountNumber must match the regular expression '^[0-9\-]+$'."
                                        data-val-regex-pattern="^[0-9\-]+$"
                                        data-val-required="Nomor rekening bank diperlukan (hanya nomor yang diperbolehkan)."
                                        id="bank_account_number_input" name="accNumber" placeholder="Nomor rekening anda"
                                        type="text" value=""> <span class="standard-required-message">Nomor
                                        rekening bank diperlukan (hanya nomor yang
                                        diperbolehkan).</span>
                                </div>
                                <div class="form-group required-form-group">
                                    <label for="BankAccountName">Nama Lengkap</label>
                                    <input maxlength="100" autocomplete="off" class="form-control" data-val="true"
                                        data-val-regex="The field BankAccountName must match the regular expression '^[0-9a-zA-Z ]*$'."
                                        data-val-regex-pattern="^[0-9a-zA-Z ]*$"
                                        data-val-required="Silakan masukkan nama lengkap yang valid (hanya karakter alfanumerik yang diperbolehkan)."
                                        id="bank_account_name_input" name="accName" placeholder="Nama Lengkap Anda"
                                        type="text" value=""> <span class="standard-required-message">Silakan
                                        masukkan nama lengkap yang valid (hanya
                                        karakter alfanumerik yang diperbolehkan).</span>
                                </div>
                            </div>
                        </div>
                        <div class="standard-sub-section">
                            <div class="standard-form-title">
                                Lainnya
                            </div>
                            <div class="standard-form-content form_subcategory">
                                <div class="form-group required-form-group">
                                    <label for="SelectedSourceInformation">Bagaimana Anda tahu tentang situs web kami
                                        ?</label>
                                    <select class="form-control" id="SelectedSourceInformation" name="informasi"
                                        required="required">
                                        <option value="">-- Pilih Sumber Informasi --</option>
                                        <option value="Google">Google</option>
                                        <option value="Media Sosial (Facebook,Instagram,Tiktok)">Media Sosial
                                            (Facebook,Instagram,Tiktok)</option>
                                        <option value="Kawan">Kawan</option>
                                        <option value="Iklan Video">Iklan Video</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select> <span class="standard-required-message">Tolong pilih sumber informasi!</span>
                                </div>
                            </div>
                        </div>
                        <div class="standard-button-group">
                            <input type="submit" class="standard-secondary-button btn-primary" value="Daftar">
                        </div>
                    </form>

                    <div class="register-page-reminder">
                        Dengan klik tombol DAFTAR, saya menyatakan bahwa saya berumur diatas 18 tahun. Saya telah membaca
                        dan menyetujui Syarat dan Ketentuan dari {{ $setting->web }}.
                    </div>
                    <div class="register-page-link">
                        <a href="javascript:window.openNewTab('/faq')">
                            SYARAT &amp; KETENTUAN
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const phoneField = document.getElementById('phone_field');

            phoneField.addEventListener('input', () => {
                // Remove any non-numeric characters
                phoneField.value = phoneField.value.replace(/[^0-9]/g, '');
            });
        });
    </script>
@endsection
