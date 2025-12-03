@extends('layout.desktop.main')
@section('content')
    <link rel="stylesheet" href="../../../assets/css/desktop/profile.css">
    <div class="site-content-container" data-container-background="general">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 profile-container">
                    @include('layout.desktop.profile')
                    <div class="standard-container-with-sidebar" data-style="light">
                        @include('layout.desktop.sidemenu')
                        <div class="standard-form-content">
                            <div class="standard-form-title">
                                UBAH KATA SANDI
                            </div>
                            <div class="standard-form-note">
                                <span>Catatan:</span><br>*Kata Sandi harus terdiri dari 8-20 karakter.<br>*Kata Sandi harus
                                mengandung huruf dan angka. <br>*Kata Sandi tidak boleh mengandung username.
                            </div>

                            <form action="/change-password" method="post">
                                @csrf
                                <div class="standard-inline-form-group">
                                    <label for="OldPassword">Kata Sandi Saat Ini</label>
                                    <div data-section="asterisk">*</div>
                                    <div data-section="input">
                                        <input class="form-control" data-val="true"
                                            data-val-required="The OldPassword field is required." id="OldPassword"
                                            name="OldPassword" placeholder="Kata Sandi Saat Ini" type="password">
                                        <span class="standard-required-message">Kata sandi harus diisi.</span>
                                    </div>
                                </div>
                                <div class="standard-inline-form-group">
                                    <label for="NewPassword">Kata Sandi Baru</label>
                                    <div data-section="asterisk">*</div>
                                    <div data-section="input">
                                        <input maxlength="20" class="form-control" data-val="true"
                                            data-val-regex="The field NewPassword must match the regular expression '^(?=.{8,20}$)(?=.*?[a-z])(?=.*?[0-9]).*$'."
                                            data-val-regex-pattern="^(?=.{8,20}$)(?=.*?[a-z])(?=.*?[0-9]).*$"
                                            data-val-required="The NewPassword field is required." id="NewPassword"
                                            name="NewPassword" placeholder="Kata Sandi Baru" type="password">
                                        <span class="standard-required-message">Kata Sandi harus terdiri dari 8-20 karakter
                                            <br> Dan harus mengandung huruf dan angka</span>
                                    </div>
                                </div>
                                <div class="standard-inline-form-group">
                                    <label for="ConfirmPassword">Ulangi Kata Sandi</label>
                                    <div data-section="asterisk">*</div>
                                    <div data-section="input">
                                        <input maxlength="20" class="form-control" data-val="true"
                                            data-val-equalto="'ConfirmPassword' and 'NewPassword' do not match."
                                            data-val-equalto-other="*.NewPassword"
                                            data-val-required="The ConfirmPassword field is required." id="ConfirmPassword"
                                            name="ConfirmPassword" placeholder="Ulangi Kata Sandi" type="password">
                                        <span class="standard-required-message">Kata sandi tidak cocok.</span>
                                    </div>
                                </div>
                                <div class="standard-inline-form-group">
                                    <label for="VerificationCode">Kode Verifikasi</label>
                                    <div data-section="asterisk">*</div>
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
                                            <span style="margin-left: 10px;">
                                                <a rel="nofollow" href="javascript:;"
                                                    onclick="document.getElementById('captchaCode').src='captcha/mini?'+Math.random()"
                                                    class="refresh btn btn-sm btn-info">

                                                    <i class="fa-sharp fa-solid fa-arrows-rotate">
                                                    </i>

                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="standard-button-group">
                                    <input type="submit" class="btn btn-primary" value="UBAH KATA SANDI">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
