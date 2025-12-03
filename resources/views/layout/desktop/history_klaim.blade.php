@extends('layout.desktop.main')
@section('content')
    <div class="site-content-container" data-container-background="general">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    @include('layout.desktop.profile')
                    <div class="standard-container-with-sidebar" data-style="light">
                        @include('layout.desktop.sidemenu')
                        <div class="standard-form-content">
                            <div class="standard-nav-bar reporting-nav-bar">
                                <div class="nav-bar-links">
                                    <a href="#" data-target="#bonus-container" class="nav-link" data-active="true">
                                        Bonus
                                    </a>
                                    <a href="#" data-target="#commission-container" class="nav-link"
                                        data-active="false">
                                        Komisi
                                    </a>
                                    <a href="#" data-target="#cashback-container" class="nav-link"
                                        data-active="false">
                                        Cashback
                                    </a>
                                    <a href="#" data-target="#combine-promo-container" class="nav-link"
                                        data-active="false">
                                        Penyesuaian
                                    </a>
                                </div>
                            </div>
                            <div class="tab-content" id="bonus-container" style="display: none">
                                <form action="/desktop/history/bonus" method="post">
                                    <div class="standard-reporting-scroll-container">
                                        <table class="table table-responsive">
                                            <thead>
                                                <tr>
                                                    <th scope="col">
                                                        Nama Promosi </th>
                                                    <th scope="col">
                                                        Durasi Tanggal Mulai </th>
                                                    <th scope="col">
                                                        Durasi Tanggal Selesai </th>
                                                    <th scope="col">
                                                        Jumlah </th>
                                                    <th scope="col">
                                                        Kelipatan </th>
                                                    <th scope="col">
                                                        Status </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>


                            <div class="tab-content" id="commission-container" style="display: none">
                                <h1 class="text-center" style="opacity: 0.2"> Belum Ada Komisi</h1>
                            </div>
                            <div class="tab-content" id="cashback-container" style="display: none">
                                <h1 class="text-center" style="opacity: 0.2"> Belum Ada Cashback</h1>
                            </div>
                            <div class="tab-content" id="combine-promo-container" style="display: none">
                                <h1 class="text-center" style="opacity: 0.2"> Belum Ada Promo Gabungan</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function() {
            function fetchPromotionData() {
                $.ajax({
                    url: '/history/bonuses',
                    method: 'GET',
                    dataType: 'json',
                    success: function(response) {

                        let promotion = response.promotion;

                        if (promotion) {

                            let tableBody = $('table tbody');
                            tableBody.empty();


                            let row = `<tr>
                        <td>${promotion.title || 'N/A'}</td>
                        <td>${promotion.start_date || 'N/A'}</td>
                        <td>${promotion.end_date || 'N/A'}</td>
                        <td>${promotion.amount !== null ? 'IDR ' + promotion.amount : 'N/A'}</td>
                        <td style="text-align: center;">${promotion.turnover || 'N/A'}</td>
                        <td>${promotion.status || 'N/A'}</td>
                    </tr>`;

                            tableBody.append(row);
                        } else {
                            console.log('No promotion data found.');
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error('Error fetching promotion data:', error);
                    }
                });
            }

            fetchPromotionData();
        });
    </script>

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
