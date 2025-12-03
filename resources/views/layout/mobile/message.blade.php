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
        <div class="tab-content" id="announcement-container">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="notification-tabs">
                            <div class="notification-tab-item" data-tab="transaction" data-active="true" data-count="3">
                                Transaksi <span id="transaction_in">(0)</span>
                            </div>
                            <div class="notification-tab-item" data-tab="promo" data-active="false" data-count="0">
                                Promo <span>(0)</span>
                            </div>
                            <div class="notification-tab-item" data-tab="info" data-active="false" data-count="1">
                                Info <span>(0)</span>
                            </div>
                        </div>
                        <div class="notification-content">
                            @foreach ($transaksi as $transaksi)
                                @if ($transaksi->count() > 0)
                                    @if ($transaksi->notes == 'read')
                                        <div class="notification-list" id="notification_list">
                                            <a href="#" style="display: block;">
                                                <div class="notification-item" data-seen="true"
                                                    data-notification-type="transaction"
                                                    data-rec-id="972D41C3-802C-480D-A186-2B6568E6E15A">
                                                    @if ($transaksi->status_id == 1)
                                                        <div class="notification-image" data-message-category="Transaction"
                                                            data-message-subcategory="Deposit"
                                                            data-transaction-status="NEW">
                                                            <img loading="lazy"
                                                                src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                                        </div>
                                                    @elseif($transaksi->status_id == 2)
                                                        <div class="notification-image" data-message-category="Transaction"
                                                            data-message-subcategory="Deposit"
                                                            data-transaction-status="SUCCESS">
                                                            <img loading="lazy"
                                                                src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                                        </div>
                                                    @elseif($transaksi->status_id == 3)
                                                        <div class="notification-image" data-message-category="Transaction"
                                                            data-message-subcategory="Deposit"
                                                            data-transaction-status="FAIL">
                                                            <img loading="lazy"
                                                                src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                                        </div>
                                                    @else
                                                    @endif
                                                    @if ($transaksi->type == 1)
                                                        <div class="notification-content">
                                                            <div class="notification-header">
                                                                <span>Deposit</span>
                                                                <span>{{ $transaksi->created_at }}</span>
                                                            </div>

                                                            @if ($transaksi->status_id == 1)
                                                                <h3 class="notification-title">Deposit : Menunggu</h3>
                                                                <p>Permintaan Deposit IDR {{ $damount }} anda
                                                                    Menunggu.
                                                                    Nomor Ticket :
                                                                    {{ $transaksi->id . 'Nex-U09' }}
                                                                </p>
                                                            @elseif($transaksi->status_id == 2)
                                                                <h3 class="notification-title">Deposit : Disetujui</h3>
                                                                <p>Permintaan Deposit IDR {{ $damount }} anda
                                                                    Disetujui.
                                                                    Nomor Ticket :
                                                                    {{ $transaksi->id . 'Nex-U09' }}
                                                                </p>
                                                            @elseif ($transaksi->status_id == 3)
                                                                <h3 class="notification-title">Deposit : Gagal</h3>
                                                                <p>Permintaan Deposit IDR {{ $damount }} anda
                                                                    Gagal.
                                                                    Nomor Ticket :
                                                                    {{ $transaksi->id . 'Nex-U09' }}
                                                                </p>
                                                            @else
                                                            @endif
                                                        </div>
                                                    @elseif($transaksi->type == 2)
                                                        <div class="notification-content">
                                                            <div class="notification-header">
                                                                <span>Withdraw</span>
                                                                <span>{{ $transaksi->created_at }}</span>
                                                            </div>

                                                            @if ($transaksi->status_id == 1)
                                                                <h3 class="notification-title">Withdraw : Menunggu</h3>
                                                                <p>Permintaan Withdraw IDR {{ $wamount }} anda
                                                                    Menunggu.
                                                                    Nomor Ticket :
                                                                    {{ $transaksi->id . 'Nex-U09' }}
                                                                </p>
                                                            @elseif($transaksi->status_id == 2)
                                                                <h3 class="notification-title">Withdraw : Disetujui
                                                                </h3>
                                                                <p>Permintaan Withdraw IDR {{ $wamount }} anda
                                                                    Disetujui.
                                                                    Nomor Ticket :
                                                                    {{ $transaksi->id . 'Nex-U09' }}
                                                                </p>
                                                            @elseif ($transaksi->status_id == 3)
                                                                <h3 class="notification-title">Withdraw : Gagal</h3>
                                                                <p>Permintaan Withdraw IDR {{ $wamount }} anda
                                                                    Gagal.
                                                                    Nomor Ticket :
                                                                    {{ $transaksi->id . 'Nex-U09' }}
                                                                </p>
                                                            @else
                                                            @endif
                                                        </div>
                                                    @else
                                                    @endif
                                                </div>
                                            </a>
                                        </div>
                                    @else
                                        <div class="notification-list" id="notification_list">
                                            <a href="/transaksi/{{ $transaksi->id }}" style="display: block;">
                                                <div class="notification-item" data-seen="false"
                                                    data-notification-type="transaction"
                                                    data-rec-id="972D41C3-802C-480D-A186-2B6568E6E15A">
                                                    @if ($transaksi->status_id == 1)
                                                        <div class="notification-image" data-message-category="Transaction"
                                                            data-message-subcategory="Deposit"
                                                            data-transaction-status="NEW">
                                                            <img loading="lazy"
                                                                src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                                        </div>
                                                    @elseif($transaksi->status_id == 2)
                                                        <div class="notification-image"
                                                            data-message-category="Transaction"
                                                            data-message-subcategory="Deposit"
                                                            data-transaction-status="SUCCESS">
                                                            <img loading="lazy"
                                                                src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                                        </div>
                                                    @elseif($transaksi->status_id == 3)
                                                        <div class="notification-image"
                                                            data-message-category="Transaction"
                                                            data-message-subcategory="Deposit"
                                                            data-transaction-status="FAIL">
                                                            <img loading="lazy"
                                                                src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                                        </div>
                                                    @else
                                                    @endif

                                                    @if ($transaksi->type == 1)
                                                        <div class="notification-content">
                                                            <div class="notification-header">
                                                                <span>Deposit</span>
                                                                <span>{{ $transaksi->created_at }}</span>
                                                            </div>

                                                            @if ($transaksi->status_id == 1)
                                                                <h3 class="notification-title">Deposit : Menunggu</h3>
                                                                <p>Permintaan Deposit IDR {{ $damount }} anda
                                                                    Menunggu.
                                                                    Nomor Ticket :
                                                                    {{ $transaksi->id . 'Nex-U09' }}
                                                                </p>
                                                            @elseif($transaksi->status_id == 2)
                                                                <h3 class="notification-title">Deposit : Disetujui</h3>
                                                                <p>Permintaan Deposit IDR {{ $damount }} anda
                                                                    Disetujui.
                                                                    Nomor Ticket :
                                                                    {{ $transaksi->id . 'Nex-U09' }}
                                                                </p>
                                                            @elseif ($transaksi->status_id == 3)
                                                                <h3 class="notification-title">Deposit : Gagal</h3>
                                                                <p>Permintaan Deposit IDR {{ $damount }} anda
                                                                    Gagal.
                                                                    Nomor Ticket :
                                                                    {{ $transaksi->id . 'Nex-U09' }}
                                                                </p>
                                                            @else
                                                            @endif
                                                        </div>
                                                    @elseif($transaksi->type == 2)
                                                        <div class="notification-content">
                                                            <div class="notification-header">
                                                                <span>Withdraw</span>
                                                                <span>{{ $transaksi->created_at }}</span>
                                                            </div>

                                                            @if ($transaksi->status_id == 1)
                                                                <h3 class="notification-title">Withdraw : Menunggu</h3>
                                                                <p>Permintaan Withdraw IDR {{ $wamount }} anda
                                                                    Menunggu.
                                                                    Nomor Ticket :
                                                                    {{ $transaksi->id . 'Nex-U09' }}
                                                                </p>
                                                            @elseif($transaksi->status_id == 2)
                                                                <h3 class="notification-title">Withdraw : Disetujui
                                                                </h3>
                                                                <p>Permintaan Withdraw IDR {{ $wamount }} anda
                                                                    Disetujui.
                                                                    Nomor Ticket :
                                                                    {{ $transaksi->id . 'Nex-U09' }}
                                                                </p>
                                                            @elseif ($transaksi->status_id == 3)
                                                                <h3 class="notification-title">Withdraw : Gagal</h3>
                                                                <p>Permintaan Withdraw IDR {{ $wamount }} anda
                                                                    Gagal.
                                                                    Nomor Ticket :
                                                                    {{ $transaksi->id . 'Nex-U09' }}
                                                                </p>
                                                            @else
                                                            @endif
                                                        </div>
                                                    @else
                                                    @endif
                                                </div>
                                            </a>
                                        </div>
                                    @endif
                                @else
                                    <div class="empty-notification-container" id="empty_notification_container"
                                        style="display: none;">
                                        <div class="empty-notification-image">
                                            <picture>
                                                <source
                                                    srcset="//d33egg70nrp50s.cloudfront.net/Images/announcement/empty.webp?v=20240708-4"
                                                    type="image/webp">
                                                <source
                                                    srcset="//d33egg70nrp50s.cloudfront.net/Images/announcement/empty.png?v=20240708-4"
                                                    type="image/png"><img loading="lazy"
                                                    src="//d33egg70nrp50s.cloudfront.net/Images/announcement/empty.png?v=20240708-4">
                                            </picture>
                                        </div>
                                        <div class="empty-notification-content">
                                            <h3>Belum Ada Notifikasi</h3>
                                            <p>Saat Anda mendapatkan notifikasi, mereka akan muncul di sini</p>
                                        </div>
                                    </div>
                                @endif
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content" id="message-container" style="display: none">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="no-message-container">
                            Tidak ada pesan.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content" id="comment-container" style="display: none">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="no-message-container">
                            Tidak ada pesan.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                document.querySelectorAll('.tab-content').forEach(container => {
                    container.style.display = 'none';
                });

                const target = document.querySelector(this.getAttribute('data-target'));
                if (target) {
                    target.style.display = 'block';
                }

                document.querySelectorAll('.nav-link').forEach(nav => {
                    nav.setAttribute('data-active', 'false');
                });
                this.setAttribute('data-active', 'true');
            });
        });

        document.addEventListener('DOMContentLoaded', () => {
            const defaultLink = document.querySelector('.nav-link[data-active="true"]');
            if (defaultLink) {
                const defaultTarget = document.querySelector(defaultLink.getAttribute('data-target'));
                if (defaultTarget) {
                    defaultTarget.style.display = 'block';
                }
            }
        });
    </script>
@endsection
