@extends('layout.desktop.main')
@section('content')
    <link rel="stylesheet" href="../../../assets/css/desktop/deposit.css">
    <div class="site-content-container" data-container-background="general">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    @include('layout.desktop.profile')
                    <div class="standard-container-with-sidebar" data-style="light">
                        @include('layout.desktop.sidemenu')
                        <div class="standard-form-content">


                            <div class="tab-menu-container" data-style="vertical">
                                <a href="/deposit">
                                    <i data-icon="deposit"
                                        style="background-image: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/tabs/deposit.svg?v=20240708-4);"></i>
                                    Deposit
                                </a>
                                <a href="/withdraw">
                                    <i data-icon="withdrawal"
                                        style="background-image: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/tabs/withdrawal.svg?v=20240708-4);"></i>
                                    Penarikan
                                </a>
                            </div>
                            <div class="standard-form-title">
                                Informasi Detail Perbankan
                            </div>

                            <form action="/add-bank" method="POST">
                                @csrf
                                <div class="standard-inline-form-group">
                                    <label for="Bank">Akun</label>
                                    <div data-section="asterisk">*</div>
                                    <div data-section="input">
                                        <select class="form-control" data-val="true"
                                            data-val-required="The Bank field is required." id="Bank" name="Bank">
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
                                        </select>
                                        <span class="standard-required-message">Silahkan pilih bank Anda.</span>
                                    </div>
                                </div>
                                <div class="standard-inline-form-group">
                                    <label for="AccountNo">Nomor Rekening</label>
                                    <div data-section="asterisk">*</div>
                                    <div data-section="input">
                                        <input maxlength="20" autocomplete="off" class="form-control" data-val="true"
                                            data-val-regex="The field AccountNo must match the regular expression '^[0-9\-]+$'."
                                            data-val-regex-pattern="^[0-9\-]+$"
                                            data-val-required="The AccountNo field is required." id="AccountNo"
                                            name="accNumber" placeholder="Nomor rekening anda" type="text"
                                            value="">
                                        <span class="standard-required-message">Nomor rekening bank diperlukan (hanya nomor
                                            yang
                                            diperbolehkan).</span>
                                    </div>
                                </div>
                                <div class="standard-inline-form-group">
                                    <label for="AccountName">Nama Lengkap</label>
                                    <div data-section="asterisk">*</div>
                                    <div data-section="input">
                                        <input class="form-control" data-val="true"
                                            data-val-regex="The field AccountName must match the regular expression '^[0-9a-zA-Z ]*$'."
                                            data-val-regex-pattern="^[0-9a-zA-Z ]*$"
                                            data-val-required="The AccountName field is required." id="AccountName"
                                            name="accName" placeholder="Nama Lengkap Anda" type="text"
                                            value="Mardi Santoso">
                                        <span class="standard-required-message">Silakan masukkan nama lengkap yang valid
                                            (hanya karakter
                                            alfanumerik yang diperbolehkan).</span>
                                    </div>
                                </div>
                                <div class="standard-button-group">
                                    <input type="submit" class="btn btn-primary" value="Tambah Akun">
                                </div>
                            </form>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col" class="text-center">
                                            Akun </th>
                                        <th scope="col" class="text-center">
                                            Nama Akun </th>
                                        <th scope="col" class="text-center">
                                            Nomor Akun </th>
                                    </tr>
                                </thead>
                                @if($rekening)
                                 <tbody class="text-center">
                                    <tr>
                                        <td>{{ Auth()->user()->bank }}</td>
                                        <td>{{ Auth()->user()->accName }}</td>
                                        <td>{{ Auth()->user()->accNumber }}</td>
                                    </tr>
                                    <tr>
                                        <td>{{ $rekening->bank }}</td>
                                        <td>{{ $rekening->accName }}</td>
                                        <td>{{ $rekening->accNumber }}</td>
                                    </tr>
                                </tbody>
                                @else
                                 <tbody class="text-center">
                                    <tr>
                                        <td>{{ Auth()->user()->bank }}</td>
                                        <td>{{ Auth()->user()->accName }}</td>
                                        <td>{{ Auth()->user()->accNumber }}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                                @endif
                               
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
