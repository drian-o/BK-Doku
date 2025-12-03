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
            <div class="reporting-control-group">
                <label>Rentang Tanggal</label>
                <input type="text" class="form-control" id="date_range_picker" data-picker="date-range"
                    data-separator=" - ">
                <input type="hidden" name="StartingDate" id="starting_date" value="2024-07-15">
                <input type="hidden" name="EndingDate" id="ending_date" value="2024-07-15">
            </div>
            <div class="standard-button-group">
                <button type="submit" class="standard-secondary-button">
                    Cari
                </button>
            </div>
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
    <div class="tab-content" id="komisi-container">
    </div>
    <div class="tab-content" id="cashback-container">
    </div>
    <div class="tab-content" id="promo-container">
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
</div>
