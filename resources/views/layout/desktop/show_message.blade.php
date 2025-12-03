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
                            <div class="standard-nav-bar">
                                <div class="nav-bar-title">Pengumuman</div>
                                <div class="nav-bar-links">
                                    <a href="#" data-target="#message-container" class="nav-link" data-active="false">
                                        <picture>
                                            <source
                                                srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/message/menu/inbox.webp?v=20240708-4"
                                                type="image/webp">
                                            <source
                                                srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/message/menu/inbox.png?v=20240708-4"
                                                type="image/png"><img loading="lazy"
                                                src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/message/menu/inbox.png?v=20240708-4">
                                        </picture>
                                        Kotak Masuk
                                        <span>[0]</span>
                                    </a>
                                    <a href="#" data-target="#announcement-container" class="nav-link"
                                        data-active="true">
                                        <picture>
                                            <source
                                                srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/message/menu/announcement.webp?v=20240708-4"
                                                type="image/webp">
                                            <source
                                                srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/message/menu/announcement.png?v=20240708-4"
                                                type="image/png"><img loading="lazy"
                                                src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/message/menu/announcement.png?v=20240708-4">
                                        </picture>
                                        Pengumuman
                                        <span id="incoming-message"></span>
                                    </a>
                                    <a href="#" data-target="#comment-container" class="nav-link" data-active="false">
                                        <picture>
                                            <source
                                                srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/message/menu/support-ticket.webp?v=20240708-4"
                                                type="image/webp">
                                            <source
                                                srcset="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/message/menu/support-ticket.png?v=20240708-4"
                                                type="image/png"><img loading="lazy"
                                                src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/message/menu/support-ticket.png?v=20240708-4">
                                        </picture>
                                        Tiket Bantuan
                                    </a>
                                </div>
                            </div>
                            <div class="tab-content" id="message-container" style="display: none">
                                <div class="message-detail-title">
                                    <div>
                                        <a href="/message">
                                            <span class="fa fa-arrow-left"></span>
                                        </a>
                                    </div>

                                    <div style="margin-right: 50%">Message</div>
                                </div>
                                <div class="text-center">
                                    <h1 style="opacity: 0.2">Belum Ada Pesan</h1>
                                </div>
                            </div>
                            <div class="tab-content" id="announcement-container">
                                @if ($transaksi->type == 1)
                                    <div class="message-detail-title">
                                        <div>
                                            <a href="/message">
                                                <span class="fa fa-arrow-left"></span>
                                            </a>
                                        </div>
                                        @if ($transaksi->status_id == 1)
                                            <div>Deposit : Menunggu</div>
                                        @elseif ($transaksi->status_id == 2)
                                            <div>Deposit : DiSetujui</div>
                                        @elseif ($transaksi->status_id == 3)
                                            <div>Deposit : Gagal</div>
                                        @else
                                        @endif
                                        <div></div>
                                    </div>

                                    <div class="replied-message" data-message-type="announcement">
                                        <div class="notification-header">
                                            @if ($transaksi->status_id == 1)
                                                <div class="notification-image" data-message-category="Transaction"
                                                    data-message-subcategory="Deposit" data-transaction-status="NEW">
                                                    <img loading="lazy"
                                                        src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                                </div>
                                            @elseif ($transaksi->status_id == 2)
                                                <div class="notification-image" data-message-category="Transaction"
                                                    data-message-subcategory="Deposit" data-transaction-status="SUCCESS">
                                                    <img loading="lazy"
                                                        src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                                </div>
                                            @elseif ($transaksi->status_id == 3)
                                                <div class="notification-image" data-message-category="Transaction"
                                                    data-message-subcategory="Deposit" data-transaction-status="FAIL">
                                                    <img loading="lazy"
                                                        src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                                </div>
                                            @else
                                            @endif
                                            <div class="notification-info">
                                                <div>Deposit</div>
                                                <div class="notification-title">Deposit :
                                                    {{ $transaksi->status_id == 1 ? 'Menunggu' : ($transaksi->status_id == 2 ? 'Disetujui' : 'Gagal') }}
                                                </div>
                                                <div>{{ $transaksi->created_at }}</div>
                                            </div>
                                        </div>
                                        <div class="replied-message-content">
                                            @if ($transaksi->status_id == 1)
                                                <pre>Permintaan Deposit IDR {{ $damount }} anda Menunggu. Nomor Ticket : {{ $transaksi->id . 'Nex-U09' }}</pre>
                                            @elseif ($transaksi->status_id == 2)
                                                <pre>Permintaan Deposit IDR {{ $damount }} anda Disetujui. Nomor Ticket : {{ $transaksi->id . 'Nex-U09' }}</pre>
                                            @elseif ($transaksi->status_id == 3)
                                                <pre>Permintaan Deposit IDR {{ $damount }} anda Gagal. Nomor Ticket : {{ $transaksi->id . 'Nex-U09' }}</pre>
                                            @else
                                            @endif
                                        </div>
                                    </div>
                                @elseif($transaksi->type == 2)
                                    <div class="message-detail-title">
                                        <div>
                                            <a href="/message">
                                                <span class="fa fa-arrow-left"></span>
                                            </a>
                                        </div>
                                        @if ($transaksi->status_id == 1)
                                            <div>Withdraw : Menunggu</div>
                                        @elseif ($transaksi->status_id == 2)
                                            <div>Withdraw : DiSetujui</div>
                                        @elseif ($transaksi->status_id == 3)
                                            <div>Withdraw : Gagal</div>
                                        @else
                                        @endif
                                        <div></div>
                                    </div>

                                    <div class="replied-message" data-message-type="announcement">
                                        <div class="notification-header">
                                            @if ($transaksi->status_id == 1)
                                                <div class="notification-image" data-message-category="Transaction"
                                                    data-message-subcategory="Deposit" data-transaction-status="NEW">
                                                    <img loading="lazy"
                                                        src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                                </div>
                                            @elseif ($transaksi->status_id == 2)
                                                <div class="notification-image" data-message-category="Transaction"
                                                    data-message-subcategory="Deposit" data-transaction-status="SUCCESS">
                                                    <img loading="lazy"
                                                        src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                                </div>
                                            @elseif ($transaksi->status_id == 3)
                                                <div class="notification-image" data-message-category="Transaction"
                                                    data-message-subcategory="Deposit" data-transaction-status="FAIL">
                                                    <img loading="lazy"
                                                        src="//d33egg70nrp50s.cloudfront.net/Images/announcement/Deposit.svg?v=20240708-4">
                                                </div>
                                            @else
                                            @endif
                                            <div class="notification-info">
                                                <div>Withdraw</div>
                                                <div class="notification-title">Withdraw :
                                                    {{ $transaksi->status_id == 1 ? 'Menunggu' : ($transaksi->status_id == 2 ? 'Disetujui' : 'Gagal') }}
                                                </div>
                                                <div>{{ $transaksi->created_at }}</div>
                                            </div>
                                        </div>
                                        <div class="replied-message-content">
                                            @if ($transaksi->status_id == 1)
                                                <pre>Permintaan Withdraw IDR {{ $damount }} anda Menunggu. Nomor Ticket : {{ $transaksi->id . 'Nex-U09' }}</pre>
                                            @elseif ($transaksi->status_id == 2)
                                                <pre>Permintaan Withdraw IDR {{ $damount }} anda Disetujui. Nomor Ticket : {{ $transaksi->id . 'Nex-U09' }}</pre>
                                            @elseif ($transaksi->status_id == 3)
                                                <pre>Permintaan Withdraw IDR {{ $damount }} anda Gagal. Nomor Ticket : {{ $transaksi->id . 'Nex-U09' }}</pre>
                                            @else
                                            @endif
                                        </div>
                                    </div>
                                @endif
                            </div>
                            <div class="tab-content" id="comment-container" style="display: none;margin-top: 20px">
                                <form action="/laporan" method="POST">
                                    @csrf
                                    <div class="form-group">
                                        <label for="Subject">Perihal</label>
                                        <select class="form-control valid" data-val="true"
                                            data-val-required="The Subject field is required." id="Subject"
                                            name="feedback">
                                            <option value="Game Play">Permainan</option>
                                            <option value="Transaction">Transaksi</option>
                                            <option value="Others">Lainnya</option>
                                        </select>
                                        <span class="standard-required-message">
                                            Perihal harus diisi.
                                        </span>
                                    </div>
                                    <div class="form-group">
                                        <label for="Message">Pesan Anda</label>
                                        <textarea autocomplete="off" class="form-control" cols="20" data-val="true"
                                            data-val-required="The Message field is required." id="Message" name="pesan" rows="15"></textarea>
                                        <span class="standard-required-message">
                                            Pesan harus diisi.
                                        </span>
                                    </div>
                                    <div class="standard-button-group">
                                        <button type="submit" class="btn btn-primary"> Kirim </button>
                                    </div>
                                </form>
                            </div>
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
