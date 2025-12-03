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
                                                <td>{{ Auth()->user()->accName . 'Ay0her' }}</td>
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
                                        <a href="/desktop/bank-account">
                                            <img loading="lazy"
                                                src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/tabs/edit.svg?v=20240708-4">
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
                                                        src="//d33egg70nrp50s.cloudfront.net/Images/banks/bank-gopay.svg?v=20240708-4"
                                                        style="display: none;">
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
                                                        src="//d33egg70nrp50s.cloudfront.net/Images/banks/bank-gopay.svg?v=20240708-4"
                                                        style="display: none;">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
