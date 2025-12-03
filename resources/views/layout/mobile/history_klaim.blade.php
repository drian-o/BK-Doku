@extends('layout.mobile.main')
@section('mobile')
    <div class="reporting-form-container">
        <div class="reporting-nav-bar">
            <a href="#" data-target="#bonus-container" class="nav-link" data-active="true">
                BONUS
            </a>
            <a href="#" data-target="#komisi-container" class="nav-link" data-active="false">
                KOMISI
            </a>
            <a href="#" data-target="#cashback-container" class="nav-link" data-active="false">
                CASHBACK
            </a>
            <a href="#" data-target="#promo-container" class="nav-link" data-active="false">
                PROMO GABUNGAN
            </a>
        </div>
        <div class="tab-content" id="bonus-container">
            <form action="/mobile/history/bonus" method="post">
                <div class="reporting-scroll-container">
                    <div class="table-responsive">
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
                </div>
            </form>
        </div>
        <div class="tab-content" id="komisi-container" style="display: none">
            <h2 class="text-center">Belum Ada Komisi</h2>
        </div>
        <div class="tab-content" id="cashback-container" style="display: none">
            <h2 class="text-center">Belum Ada Cashback</h2>
        </div>
        <div class="tab-content" id="promo-container" style="display: none">
            <h2 class="text-center">Belum Ada Promo Gabungan</h2>
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
            document.addEventListener('DOMContentLoaded', function() {

                function switchTab(targetId) {
                    document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                        tabContent.style.display = 'none';
                    });

                    document.querySelectorAll('.nav-link').forEach(function(navLink) {
                        navLink.setAttribute('data-active', 'false');
                    });

                    document.querySelector(targetId).style.display = 'block';

                    document.querySelector(`a[data-target="${targetId}"]`).setAttribute('data-active', 'true');
                }

                switchTab('#bonus-container');

                document.querySelectorAll('.nav-link').forEach(function(navLink) {
                    navLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        const targetId = navLink.getAttribute('data-target');
                        switchTab(targetId);
                    });
                });
            });
        </script>
    </div>
@endsection
