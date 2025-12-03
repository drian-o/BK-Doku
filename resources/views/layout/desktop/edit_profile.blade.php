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
                                PROFIL SAYA
                            </div>
                            <form action="/update-profile" method="POST">
                                @csrf
                                <div class="standard-sub-section">
                                    <div class="standard-form-title">
                                        Informasi Pribadi
                                    </div>
                                    <div class="standard-form-content form_subcategory">
                                        <div class="standard-inline-form-group">
                                            <label for="FullName">Nama Lengkap</label>
                                            <div data-section="asterisk">*</div>
                                            <div data-section="input">
                                                <input class="form-control" data-val="true"
                                                    data-val-regex="The field FullName must match the regular expression '^[0-9a-zA-Z ]*$'."
                                                    data-val-regex-pattern="^[0-9a-zA-Z ]*$"
                                                    data-val-required="The FullName field is required." id="FullName"
                                                    name="FullName" placeholder="Nama Lengkap" readonly="readonly"
                                                    type="text" value="Mardi Santoso"> <span
                                                    class="standard-required-message">Nama lengkap hanya boleh berisi
                                                    karakter alfanumerik.</span>
                                            </div>
                                        </div>
                                        <div class="standard-inline-form-group">
                                            <label for="Gender">Jenis Kelamin</label>
                                            <div data-section="input">
                                                <select class="form-control" id="Gender" name="Gender">
                                                    <option value="">-- Pilih Jenis Kelamin --</option>
                                                    <option value="M">Laki-laki</option>
                                                    <option value="F">Perempuan</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="standard-inline-form-group">
                                            <label for="Address">Alamat</label>
                                            <div data-section="input">
                                                <textarea class="form-control" cols="20" id="Address" name="Address" placeholder="Alamat Anda" rows="5"></textarea>
                                            </div>
                                        </div>
                                        <div class="standard-inline-form-group">
                                            <label for="PostCode">Kode Pos</label>
                                            <div data-section="input">
                                                <input class="form-control" id="Postcode" name="Postcode"
                                                    placeholder="Kode Pos Anda" type="text" value="">
                                            </div>
                                        </div>
                                        <div class="standard-inline-form-group">
                                            <label for="State">Propinsi</label>
                                            <div data-section="input">
                                                <input class="form-control" id="State" name="State"
                                                    placeholder="Negara anda" type="text" value="">
                                            </div>
                                        </div>
                                        <div class="standard-inline-form-group">
                                            <label for="Country">Negara</label>
                                            <div data-section="asterisk">*</div>
                                            <div data-section="input">
                                                <select class="form-control" data-val="true"
                                                    data-val-required="The Country field is required." id="Country"
                                                    name="Country">
                                                    <option value="">-- Pilih Negara --</option>
                                                    <option selected="selected"
                                                        value="25513164-f84c-4674-8218-8d731c387d17">Indonesia</option>
                                                </select>
                                                <span class="standard-required-message">Silahkan pilih negara!</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="standard-sub-section">
                                    <div class="standard-form-title">
                                        Informasi Kontak
                                    </div>
                                    <div class="standard-form-content form_subcategory">
                                        <div class="standard-inline-form-group">
                                            <label for="ContactNo">
                                                No. Kontak.
                                            </label>
                                            <div data-section="asterisk">*</div>
                                            <div data-section="input" class="copy-input-button-field">
                                                <input maxlength="13" class="form-control" data-val="true"
                                                    data-val-length="The field ContactNo must be a string with a minimum length of 10 and a maximum length of 13."
                                                    data-val-length-max="13" data-val-length-min="10"
                                                    data-val-regex="The field ContactNo must match the regular expression '^[0-9]+$'."
                                                    data-val-regex-pattern="^[0-9]+$"
                                                    data-val-required="The ContactNo field is required." id="ContactNo"
                                                    name="ContactNo" type="text" value=""> <span
                                                    class="standard-required-message">Harap masukkan nomor kontak yang
                                                    valid!</span>
                                                <button class="copy-input-button" id="copy_contact_button"
                                                    type="button">
                                                    <i class="fa-solid fa-file"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="standard-inline-form-group">
                                            <label for="Email">
                                                Email
                                            </label>
                                            <div data-section="input">
                                                <input autocomplete="off" class="form-control" data-val="true"
                                                    data-val-email="The Email field is not a valid e-mail address."
                                                    id="Email" name="Email" placeholder="Email" type="text"
                                                    value=""> <span class="standard-required-message">Harap masukkan
                                                    email yang
                                                    valid!</span>
                                            </div>
                                        </div>
                                        <div class="standard-inline-form-group">
                                            <label for="Telegram">
                                                Telegram
                                            </label>
                                            <div data-section="input">
                                                <input class="form-control" data-val="true"
                                                    data-val-regex="The field Telegram must match the regular expression '^[0-9]+$'."
                                                    data-val-regex-pattern="^[0-9]+$" id="Telegram" name="Telegram"
                                                    type="text" value=""> <span
                                                    class="standard-required-message">Harap masukkan numerik saja</span>
                                            </div>
                                        </div>
                                        <div class="standard-inline-form-group">
                                            <label for="WhatsApp">
                                                Whatsapp
                                            </label>
                                            <div data-section="input">
                                                <input class="form-control" data-val="true"
                                                    data-val-regex="The field WhatsApp must match the regular expression '^[0-9]+$'."
                                                    data-val-regex-pattern="^[0-9]+$" id="WhatsApp" name="WhatsApp"
                                                    placeholder="Nomor WhatsApp" type="text" value="">
                                                <span class="standard-required-message">Harap masukkan numerik saja</span>
                                            </div>
                                        </div>
                                        <div class="standard-inline-form-group">
                                            <label for="WeChat">WeChat</label>
                                            <div data-section="input">
                                                <input class="form-control" id="WeChat" name="WeChat"
                                                    placeholder="WeChat" type="text" value="">
                                            </div>
                                        </div>
                                        <div class="standard-inline-form-group">
                                            <label for="Line">Line</label>
                                            <div data-section="input">
                                                <input class="form-control" id="Line" name="Line"
                                                    placeholder="Line" type="text" value="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="standard-button-group">
                                    <input type="submit" class="btn btn-primary" value="Simpan Data Profil Saya">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
