@extends('layout.mobile.main')
@section('mobile')
    <link rel="stylesheet" href="../../../assets/css/mobile/message.css">
    <div class="messaging-side-menu">
        <button type="button" class="back-button" onclick="history.back();">
            <img loading="lazy"
                src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/message/menu/back.svg?v=20240708-4">
        </button>
        <div>
            Kotak Masuk
        </div>
        <div>
            <a href="#" data-target="#announcement-container" class="nav-link" data-active="true" data-count="">
                <img loading="lazy"
                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/message/menu/announcement.svg?v=20240708-4"
                    style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/message/menu/announcement-active.svg?v=20240708-4);">
            </a>
            <a href="#" data-target="#message-container" class="nav-link" data-active="false">
                <img loading="lazy"
                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/message/menu/inbox.svg?v=20240708-4"
                    style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/message/menu/inbox-active.svg?v=20240708-4);">
            </a>
            <a href="#" data-target="#comment-container" class="nav-link" data-active="false">
                <img loading="lazy"
                    src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/message/menu/new-message.svg?v=20240708-4"
                    style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/message/menu/new-message-active.svg?v=20240708-4);">
            </a>
        </div>
    </div>
    <div class="standard-form-container">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    @if ($transaksi->type == 1)
                        @if ($transaksi->status_id == 1)
                            <div class="message-subject">
                                Perihal:
                                Deposit : Menunggu
                            </div>
                            <div class="replied-message">
                                <div class="message-owner-info" data-message-type="announcement">
                                    <div class="notification-image" data-message-category="Transaction"
                                        data-message-subcategory="Deposit" data-transaction-status="NEW">
                                        <img loading="lazy"
                                            src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                    </div>
                                    <div>
                                        <div>Deposit</div>
                                        <div class="notification-title">Deposit : Menunggu</div>
                                        <div>{{ $transaksi->created_at }}</div>
                                    </div>
                                </div>
                                <div class="replied-message-content">
                                    <pre>Permintaan deposit IDR {{ $damount }} anda telah menunggu. Nomor Tiket :  {{ $transaksi->id . 'Nex-U09' }}</pre>
                                </div>
                            </div>
                        @elseif($transaksi->status_id == 2)
                            <div class="message-subject">
                                Perihal:
                                Deposit : Disetujui
                            </div>
                            <div class="replied-message">
                                <div class="message-owner-info" data-message-type="announcement">
                                    <div class="notification-image" data-message-category="Transaction"
                                        data-message-subcategory="Deposit" data-transaction-status="ACC">
                                        <img loading="lazy"
                                            src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                    </div>
                                    <div>
                                        <div>Deposit</div>
                                        <div class="notification-title">Deposit : Disetujui</div>
                                        <div>{{ $transaksi->created_at }}</div>
                                    </div>
                                </div>
                                <div class="replied-message-content">
                                    <pre>Permintaan deposit IDR {{ $damount }} anda telah disetujui. Nomor Tiket :  {{ $transaksi->id . 'Nex-U09' }}</pre>
                                </div>
                            </div>
                        @elseif($transaksi->status_id == 3)
                            <div class="message-subject">
                                Perihal:
                                Deposit : Ditolak
                            </div>
                            <div class="replied-message">
                                <div class="message-owner-info" data-message-type="announcement">
                                    <div class="notification-image" data-message-category="Transaction"
                                        data-message-subcategory="Deposit" data-transaction-status="REJ">
                                        <img loading="lazy"
                                            src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                    </div>
                                    <div>
                                        <div>Deposit</div>
                                        <div class="notification-title">Deposit : Ditolak</div>
                                        <div>{{ $transaksi->created_at }}</div>
                                    </div>
                                </div>
                                <div class="replied-message-content">
                                    <pre>Permintaan deposit IDR {{ $damount }} anda telah ditolak. Nomor Tiket :  {{ $transaksi->id . 'Nex-U09' }}</pre>
                                </div>
                            </div>
                        @else
                        @endif
                    @elseif ($transaksi->type == 2)
                        @if ($transaksi->status_id == 1)
                            <div class="message-subject">
                                Perihal:
                                Withdraw : Menunggu
                            </div>
                            <div class="replied-message">
                                <div class="message-owner-info" data-message-type="announcement">
                                    <div class="notification-image" data-message-category="Transaction"
                                        data-message-subcategory="Deposit" data-transaction-status="NEW">
                                        <img loading="lazy"
                                            src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                    </div>
                                    <div>
                                        <div>Withdraw</div>
                                        <div class="notification-title">Withdraw : Menunggu</div>
                                        <div>{{ $transaksi->created_at }}</div>
                                    </div>
                                </div>
                                <div class="replied-message-content">
                                    <pre>Permintaan withdraw IDR {{ $wamount }} anda telah menunggu. Nomor Tiket :  {{ $transaksi->id . 'Nex-U09' }}</pre>
                                </div>
                            </div>
                        @elseif($transaksi->status_id == 2)
                            <div class="message-subject">
                                Perihal:
                                Withdraw : Disetujui
                            </div>
                            <div class="replied-message">
                                <div class="message-owner-info" data-message-type="announcement">
                                    <div class="notification-image" data-message-category="Transaction"
                                        data-message-subcategory="Deposit" data-transaction-status="ACC">
                                        <img loading="lazy"
                                            src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                    </div>
                                    <div>
                                        <div>Withdraw</div>
                                        <div class="notification-title">Withdraw : Disetujui</div>
                                        <div>{{ $transaksi->created_at }}</div>
                                    </div>
                                </div>
                                <div class="replied-message-content">
                                    <pre>Permintaan withdraw IDR {{ $wamount }} anda telah disetujui. Nomor Tiket :  {{ $transaksi->id . 'Nex-U09' }}</pre>
                                </div>
                            </div>
                        @elseif($transaksi->status_id == 3)
                            <div class="message-subject">
                                Perihal:
                                Withdraw : Ditolak
                            </div>
                            <div class="replied-message">
                                <div class="message-owner-info" data-message-type="announcement">
                                    <div class="notification-image" data-message-category="Transaction"
                                        data-message-subcategory="Deposit" data-transaction-status="REJ">
                                        <img loading="lazy"
                                            src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                    </div>
                                    <div>
                                        <div>Withdraw</div>
                                        <div class="notification-title">Withdraw : Ditolak</div>
                                        <div>{{ $transaksi->created_at }}</div>
                                    </div>
                                </div>
                                <div class="replied-message-content">
                                    <pre>Permintaan withdaw IDR {{ $wamount }} anda telah ditolak. Nomor Tiket :  {{ $transaksi->id . 'Nex-U09' }}</pre>
                                </div>
                            </div>
                        @else
                        @endif
                    @else
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
