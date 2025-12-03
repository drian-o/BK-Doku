@extends('layout.mobile.main')
@section('mobile')
    <style>
        .contact-us-container {
            margin-bottom: 25px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between
        }

        .contact-us-container>a:first-child {
            width: calc((100% - 15px)/2);
            margin-bottom: 15px;
            min-height: 160px;
            padding: 20px 15px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            background-color: #808080;
            border-radius: 15px
        }

        .contact-us-container>a {
            width: calc((100% - 12px)/2);
            margin-bottom: 15px;
            min-height: 130px;
            padding: 20px 15px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            background-color: #808080;
            border-radius: 15px
        }

        .contact-us-container>a>i {
            margin-bottom: 15px;
            flex-grow: 1
        }

        .contact-us-container>a>i>img {
            height: 50px;
            filter: invert(1)
        }

        .contact-us-container>a>h6>i>img {
            height: 13px;
            filter: invert(1)
        }

        .contact-us-container>a>h3,
        .contact-us-container>a>h6 {
            color: #fff;
            text-transform: uppercase
        }

        .contact-us-container>a:first-child>h3 {
            font-size: 16px;
            margin: 0 0 10px
        }

        .contact-us-container>a>h3 {
            font-size: 14px;

            margin:0 0 10px;word-break:break-word}.contact-us-container>a:first-child>h6{font-size:12px;margin:0;display:flex;justify-content:space-between}.contact-us-container>a>h6{font-size:10px;margin:0;display:flex;justify-content:space-between}.contact-us-container>a[data-type]{background-image:var(--image-src);background-size:cover}.contact-us-container>a[data-type="live-chat"] {
                width: 100%
            }
    </style>
    <div class="standard-form-container">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="contact-us-container">
                        <a href="javascript:void(0)" class="js_live_chat_link live-chat-link"
                            data-url="{{ $setting->livechat }}" data-type="live-chat"
                            style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/communications/live-chat.svg?v=20240708-4);">
                            <h3>Dukungan LiveChat 24 Jam</h3>
                            <h6>
                                klik disini
                                <i>
                                    <img alt="Chevron Right" loading="lazy"
                                        src="//d33egg70nrp50s.cloudfront.net/Images/icons/chevron-right.svg?v=20240708-4">
                                </i>
                            </h6>
                        </a>
                        <a href="https://wa.me/{{ $setting->whatsapp }}" target="_blank" rel="noopener nofollow"
                            data-type="whatsapp"
                            style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/communications/whatsapp.svg?v=20240708-4);">
                            <h3>-</h3>
                            <h6>
                                klik disini
                                <i>
                                    <img alt="Chevron Right" loading="lazy"
                                        src="//d33egg70nrp50s.cloudfront.net/Images/icons/chevron-right.svg?v=20240708-4">
                                </i>
                            </h6>
                        </a>
                        <a href="https://t.me/{{ $setting->telegram }}" target="_blank" rel="noopener nofollow"
                            data-type="telegram"
                            style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/communications/telegram.svg?v=20240708-4);">
                            <h3>{{ $setting->web }}</h3>
                            <h6>
                                klik disini
                                <i>
                                    <img alt="Chevron Right" loading="lazy"
                                        src="//d33egg70nrp50s.cloudfront.net/Images/icons/chevron-right.svg?v=20240708-4">
                                </i>
                            </h6>
                        </a>
                    </div>





                </div>
            </div>
        </div>
    </div>
@endsection
