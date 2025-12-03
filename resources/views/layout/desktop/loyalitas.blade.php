@extends('layout.desktop.main')
@section('content')
    <link rel="stylesheet" href="../../../assets/css/desktop/loyalitas.css">

    <style>
        .nav-link {
            display: inline-block;
            padding: 10px 20px;
            margin-right: 10px;
            text-align: center;
            text-decoration: none;
            color: white;
            border-radius: 5px;
            border: 1px solid transparent;
            font-weight: bold;
        }

        .nav-link[data-active="true"] {
            background-color: #37c288;
            color: black;
            border: 1px solid #a8d5a2;
        }

        .nav-link[data-active="false"] {
            background-color: black;
            color: white;
            border: 1px solid transparent;
        }

        .nav-link:last-child {
            margin-right: 0;
        }
    </style>
    <style>
        .tabs {
            display: flex;
            cursor: pointer;
            padding: 10px;
            background-color: #1b1c1c;
            color: white
        }

        .tabs div {
            padding: 10px;
            margin: 0 5px;
            border: 1px solid #3c8781;
            border-radius: 5px;
        }

        .tabs div.active {
            background-color: #458981;
        }

        .tab-content {
            display: none;
            padding: 10px;
            border: 1px solid #272525;
            border-top: none;
        }

        .tab-content.active {
            display: block;
        }
    </style>
    <div class="site-content-container" data-container-background="general">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 profile-container">
                    @include('layout.desktop.profile')
                    <div class="standard-container-with-sidebar" data-style="light">
                        @include('layout.desktop.sidemenu')
                        <div>
                            <div class="standard-nav-bar reporting-nav-bar">
                                <div class="nav-bar-links">
                                    <div class="tabs">
                                        <div class="tab-link active" data-target="#hadiah-loyalitas">HADIAH LOYALITAS</div>
                                    </div>
                                </div>
                            </div>
                            <div id="hadiah-loyalitas" class="tab-content active">
                                <div class="standard-form-content">
                                    <div class="nav-bar-links">
                                        <a href="#" id="tab-event" class="nav-link" data-tab="event"
                                            data-active="true">
                                            Event
                                        </a>
                                        <a href="#" id="tab-misi" class="nav-link" data-tab="misi"
                                            data-active="false">
                                            Misi
                                        </a>
                                        <a href="#" id="tab-penukaran" class="nav-link" data-tab="penukaran"
                                            data-active="false">
                                            Penukaran
                                        </a>
                                    </div>
                                    <div id="Event" style="margin-top: 20px;">
                                        <div id="page_carousel" class="carousel slide page-carousel" data-ride="carousel"
                                            data-interval="5000">

                                            <div class="carousel-inner">
                                                <div class="item next left">
                                                    <a href="-" target="_self">
                                                        <img alt="Zoom Lucky Draw - Juli" loading="lazy"
                                                            src="https://api2-aj8.imgzm.com/images/aj8/id_cbd_080be86f-924a-4b41-9dd4-12efce803740_1719371505640.jpg">
                                                    </a>
                                                </div>
                                                <div class="item active left">
                                                    <a href="https://hotelajaib.com/" target="_blank">
                                                        <img alt="Loyalty" loading="lazy"
                                                            src="https://api2-aj8.imgzm.com/images/aj8/id_cbd_bf82f794-8a3a-42c8-8642-efea2f8f9cc2_1721120913860.jpeg">
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="event-calendar-container" style="--event-text: 'Event'">
                                            <div>
                                                <input type="hidden" id="event_calendar">
                                                <div class="calendar-container" id="calendar_container">
                                                    <div class="date-picker-wrapper single-date  no-shortcuts  inline-wrapper no-gap single-month"
                                                        unselectable="on" style="user-select: none;">
                                                        <div class="drp_top-bar">
                                                            <div class="normal-top"><span class="selection-top">Selected:
                                                                </span>
                                                                <b class="start-day">...</b>
                                                            </div>
                                                            <div class="error-top">error</div>
                                                            <div class="default-top">Please select a date</div><input
                                                                type="button" class="apply-btn disabled" value="Close"
                                                                style="display: none;">
                                                        </div>
                                                        <div class="month-wrapper" style="width: 358px;">
                                                            <table class="month1" cellspacing="0" border="0"
                                                                cellpadding="0">
                                                                <thead>
                                                                    <tr class="caption">
                                                                        <th> <span class="prev">&lt; </span> </th>
                                                                        <th colspan="5" class="month-name">
                                                                            <div class="month-element">july</div>
                                                                            <div class="month-element">2024</div>
                                                                        </th>
                                                                        <th><span class="next">&gt;</span> </th>
                                                                    </tr>
                                                                    <tr class="week-name">
                                                                        <th>su</th>
                                                                        <th>mo</th>
                                                                        <th>tu</th>
                                                                        <th>we</th>
                                                                        <th>th</th>
                                                                        <th>fr</th>
                                                                        <th>sa</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <div time="1719689265837" data-tooltip=""
                                                                                class="day lastMonth  valid ">
                                                                                <div class="" style="padding: 10px;">
                                                                                    <span>30</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1719775665837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class="group-event"
                                                                                    style="padding: 10px;">
                                                                                    <span>1</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1719862065837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>2</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1719948465837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>3</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1720034865837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>4</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1720121265837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>5</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1720207665837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>6</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div time="1720294065837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>7</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1720380465837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>8</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1720466865837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>9</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1720553265837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>10</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1720639665837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>11</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1720726065837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>12</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1720812465837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>13</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div time="1720898865837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>14</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1720985265837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>15</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1721071665837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>16</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1721158065837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>17</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1721244465837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>18</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1721330865837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>19</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1721417265837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>20</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div time="1721503665837" data-tooltip=""
                                                                                class="day toMonth  valid real-today">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>21</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1721590065837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>22</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1721676465837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>23</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1721762865837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>24</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1721849265837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>25</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1721935665837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>26</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1722022065837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>27</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div time="1722108465837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>28</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1722194865837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>29</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1722281265837" data-tooltip=""
                                                                                class="day toMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>30</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1722367665837" data-tooltip=""
                                                                                class="day toMonth  valid">
                                                                                <div class="group-event"
                                                                                    style="padding: 10px;">
                                                                                    <span>31</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1722454065837" data-tooltip=""
                                                                                class="day nextMonth  valid ">
                                                                                <div class="group-event"
                                                                                    style="padding: 10px;">
                                                                                    <span>1</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1722540465837" data-tooltip=""
                                                                                class="day nextMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>2</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div time="1722626865837" data-tooltip=""
                                                                                class="day nextMonth  valid ">
                                                                                <div class=""
                                                                                    style="padding: 10px;">
                                                                                    <span>3</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div class="dp-clearfix"></div>
                                                            <div class="time">
                                                                <div class="time1"></div>
                                                            </div>
                                                            <div class="dp-clearfix"></div>
                                                        </div>
                                                        <div class="footer"></div>
                                                        <div class="date-range-length-tip" style="display: none;"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="event-list-container" id="event_list_container">
                                                    <div class="no-event">Tidak ada event hari ini</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="event-legend-container">
                                            <div data-legend="today">Hari ini</div>
                                            <div data-legend="event-available">Event tersedia</div>
                                            <div data-legend="group-event-available">Event Grup</div>
                                        </div>

                                    </div>
                                    <div id="Misi" style="margin-top: 20px;">
                                        <div class="standard-form-title">
                                            Misi
                                        </div>
                                        <div class="mission-container">
                                            <div class="mission-item" data-status="default"
                                                data-mission-id="00000000-0000-0000-0000-000000000000">
                                                <div class="mission-image-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="none" stroke="currentColor" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        class="icon icon-coin">
                                                        <circle cx="12" cy="12" r="10" />
                                                        <path d="M12 6v6" />
                                                        <path d="M12 12l3 3" />
                                                    </svg>
                                                </div>
                                                <div class="mission-info">
                                                    <h3>Pertama kali Deposit</h3>
                                                    <div class="mission-progress-container">
                                                        <div class="progress" style="width: 0%"></div>
                                                        <span>0 / 1</span>
                                                    </div>
                                                </div>
                                                <div class="mission-action-container">
                                                    <div class="mission-reward">
                                                        <span>5,000</span>
                                                        <div class="xp-label">XP</div>
                                                    </div>
                                                    <a href="/deposit" class="action-button">Mulai</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="penukaran" style="margin-top: 20px; display: none">
                                        <div class="standard-form-title">
                                            Voucher
                                        </div>
                                        @foreach ($voucher as $voucher)
                                            <div class="mission-container">
                                                <div class="mission-item" data-status="default"
                                                    data-mission-id="{{ $voucher->id }}" style="margin-bottom: 20px">
                                                    <div class="mission-image-container">
                                                        <img loading="lazy"
                                                            src="//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/loyalty/missions/FirstDeposit.svg?v=20240708-4">
                                                    </div>
                                                    <div class="mission-info">
                                                        <h3>{{ $voucher->title }}</h3>
                                                        <div class="mission-progress-container">
                                                            <div class="progress" style="width: 0%"></div>
                                                            <span>0 / 1</span>
                                                        </div>
                                                    </div>
                                                    <div class="mission-action-container">
                                                        <div class="mission-reward">
                                                            <span>{{ $voucher->exp }}</span>
                                                            <div class="xp-label">XP</div>
                                                        </div>
                                                        <!-- Form untuk mengklaim voucher tanpa AJAX -->
                                                        <form action="{{ url('/claim-voucher/' . $voucher->id) }}"
                                                            method="POST">
                                                            @csrf
                                                            <button type="submit" class="action-button">Klaim</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
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
            // Ambil elemen tab dan konten
            const tabs = document.querySelectorAll('.nav-link');
            const contents = {
                event: document.getElementById('Event'),
                misi: document.getElementById('Misi'),
                penukaran: document.getElementById('penukaran') // Tambahkan penukaran
            };

            function activateTab(tab) {
                tabs.forEach(t => {
                    t.classList.remove('active');
                    t.dataset.active = 'false';
                });

                tab.classList.add('active');
                tab.dataset.active = 'true';

                const tabName = tab.dataset.tab;
                Object.keys(contents).forEach(key => {
                    contents[key].style.display = key === tabName ? 'block' : 'none';
                });
            }

            tabs.forEach(tab => {
                tab.addEventListener('click', function(event) {
                    event.preventDefault();
                    activateTab(this);
                });
            });

            const defaultTab = document.querySelector('.nav-link[data-active="true"]');
            if (defaultTab) {
                activateTab(defaultTab);
            }
        });
    </script>

    <script type="text/javascript">
        window.addEventListener('DOMContentLoaded', () => {
            initializeEventCalendarPage({
                translations: {
                    noEvent: 'Tidak ada event hari ini'
                },
                events: [{
                    "eventTitle": "Lucky Draw - Tanggal Mulai",
                    "eventName": "Zoom Lucky Draw - Juli",
                    "fromDate": "2024-07-01T00:00:00",
                    "toDate": null,
                    "eventType": 4,
                    "providerGameCode": null,
                    "isGroupEvent": true,
                    "iconPath": "lucky-draw-start.png",
                    "eventTime": "2024-07-01 12:00:00 AM"
                }, {
                    "eventTitle": "Lucky Draw - Tanggal Selesai",
                    "eventName": "Zoom Lucky Draw - Juli",
                    "fromDate": "2024-07-31T23:59:59",
                    "toDate": null,
                    "eventType": 5,
                    "providerGameCode": null,
                    "isGroupEvent": true,
                    "iconPath": "lucky-draw-end.png",
                    "eventTime": "2024-07-31 11:59:59 PM"
                }, {
                    "eventTitle": "Lucky Draw - Draw Date",
                    "eventName": "Zoom Lucky Draw - Juli",
                    "fromDate": "2024-08-01T13:00:00",
                    "toDate": null,
                    "eventType": 6,
                    "providerGameCode": null,
                    "isGroupEvent": true,
                    "iconPath": "lucky-draw-day.png",
                    "eventTime": "2024-08-01 1:00:00 PM"
                }],
                imagePath: '//d33egg70nrp50s.cloudfront.net/Images/loyalty/event/'
            });
        });
    </script>
@endsection
