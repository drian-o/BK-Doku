@extends('layout.desktop.main')
@section('content')
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
    <link rel="stylesheet" type="text/css"
        href="https://mpo88asiamulia.com/themes/default/vendor/dataTables/jquery.dataTables.min.css">
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
                                    <a href="#" id="tab-deposit" class="nav-link" data-tab="deposit"
                                        data-active="true">
                                        DEPOSIT
                                    </a>
                                    <a href="#" id="tab-withdrawal" class="nav-link" data-tab="withdrawal"
                                        data-active="false">
                                        PENARIKAN
                                    </a>
                                    <a href="#" id="tab-adjustment" class="nav-link" data-tab="adjustment"
                                        data-active="false">
                                        PENYESUAIAN
                                    </a>
                                    <a href="#" id="tab-statement" class="nav-link" data-tab="statement"
                                        data-active="false">
                                        RIWAYAT TARUHAN
                                    </a>
                                </div>
                            </div>

                            <form id="deposit" method="post">
                                <div class="standard-reporting-control-group">
                                    <label for="startDate">Start Date:</label>
                                    <input type="date" class="form-control" id="startDate" name="startDate" />
                                    <label for="endDate">End Date:</label>
                                    <input type="date" class="form-control" id="endDate" name="endDate" />
                                    <button type="button" id="applyDateRange" class="btn btn-rounded"
                                        style="background-color: rgb(63, 179, 142) ; color: #e3e3e3; ">Apply</button>
                                </div>
                                <div class="standard-reporting-scroll-container">

                                    <table class="table grid_table" id="depositHistoryTable">
                                        <thead>
                                            <tr style="text-align: center">
                                                <th scope="col" style="text-align: center">Nomor Tiket</th>
                                                <th scope="col" style="width: 24%;text-align: center">Tipe Pembayaran
                                                </th>
                                                <th scope="col" style="width: 24% ;text-align: center">Jumlah Deposit
                                                    Kotor</th>
                                                <th scope="col">Biaya Admin</th>
                                                <th scope="col" style="width: 12%; text-align: center">Jumlah</th>
                                                <th scope="col">Tanggal/Waktu(GMT+7)</th>
                                                <th scope="col" style="width: 12%; text-align: center">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-center">

                                        </tbody>
                                    </table>
                                </div>
                            </form>
                            <form id="withdrawal" method="post">
                                <div class="standard-reporting-control-group">
                                    <label for="startDateWithdraw">Start Date:</label>
                                    <input type="date" class="form-control" id="startDateWithdraw"
                                        name="startDateWithdraw" />
                                    <label for="endDate">End Date:</label>
                                    <input type="date" class="form-control" id="endDateWithdraw"
                                        name="endDateWithdraw" />
                                    <button type="button" id="applyWithdrawDateRange" class="btn btn-rounded"
                                        style="background-color: rgb(63, 179, 142) ; color: #e3e3e3; ">Apply</button>
                                </div>
                                <div class="standard-reporting-scroll-container">
                                    <table class="table grid_table" id="withdrawHistoryTable">
                                        <thead>
                                            <tr style="text-align: center">
                                                <th scope="col" style="text-align: center">Nomor Tiket</th>
                                                <th scope="col" style="text-align: center">Jumlah</th>
                                                <th scope="col" style="text-align: center">Tanggal/Waktu(GMT+7)</th>
                                                <th scope="col" style="text-align: center">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-center">
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                            <form id="adjustment" method="post" style="display: none">
                                <div class="standard-reporting-control-group">
                                    <label>Rentang Tanggal</label>
                                    <input type="text" class="form-control" id="date_range_picker"
                                        data-picker="date-range" data-separator="Sampai">
                                    <input type="hidden" name="StartingDate" id="starting_date" value="2024-07-20">
                                    <input type="hidden" name="EndingDate" id="ending_date" value="2024-07-20">
                                    <button type="submit" class="btn btn-primary">
                                        Cari
                                    </button>
                                </div>
                                <div class="standard-reporting-scroll-container">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    Nomor Tiket </th>
                                                <th scope="col">
                                                    Jumlah </th>
                                                <th scope="col">
                                                    Tanggal/Waktu(GMT+7) </th>
                                                <th scope="col">
                                                    Status </th>
                                                <th scope="col">
                                                    Catatan </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </form>
                            <form id="statement" method="post" style="display: none;">

                                <div class="standard-reporting-scroll-container">
                                    <table class="table grid_table" id="turnoverHistoryTable">
                                        <thead>
                                            <tr style="text-align: center">
                                                <th scope="col" style="text-align: center">Tanggal/Waktu(GMT+7)</th>
                                                <th scope="col" style="text-align: center">Username</th>
                                                <th scope="col" style="text-align: center">Total Spin</th>
                                                <th scope="col" style="text-align: center">Turnover</th>
                                                <th scope="col" style="text-align: center">Progressive Goal</th>
                                                <th scope="col" style="text-align: center">Bet</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-center">
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
        <script>
            $(document).ready(function() {
                // Fetch turnover data when the page is loaded
                fetchTurnoverData();

                function fetchTurnoverData() {
                    $.ajax({
                        type: "GET",
                        url: "/turnover",
                        data: {
                            _token: "{{ csrf_token() }}"
                        },
                        success: function(response) {
                            updateTurnoverTable(response);
                        },
                        error: function(error) {
                            console.error("Error fetching turnover data:", error);
                        }
                    });
                }

                function updateTurnoverTable(data) {
                    $("#turnoverHistoryTable tbody").empty();

                    // Safeguard against division by zero
                    var progressivePercentage = 0;
                    var barColor = '#24ad8d'; // Default color (yellow)

                    if (data.progressive_goal > 0) {
                        progressivePercentage = (data.turnover / data.progressive_goal) * 100;
                        if (progressivePercentage > 100) {
                            progressivePercentage = 100;
                        }

                        if (progressivePercentage >= 100) {
                            barColor = 'green'; // Color when goal is reached or exceeded
                        }
                    }

                    var progressiveBar =
                        "<div style='background-color: #e0e0e0; width: 100%; height: 20px; border-radius: 5px;'>" +
                        "<div style='background-color: " + barColor + "; width: " + progressivePercentage +
                        "%; height: 100%; border-radius: 5px;'></div>" +
                        "</div>";

                    var newRow =
                        "<tr>" +
                        "<td>" + data.tanggal + "</td>" +
                        "<td>" + data.username + "</td>" +
                        "<td>" + data.total_spin + "</td>" +
                        "<td>" + data.turnover.toLocaleString('id-ID', {
                            minimumFractionDigits: 0
                        }) + "</td>" +
                        "<td>" + progressiveBar + "</td>" +
                        "<td>" + data.bet.toLocaleString('id-ID', {
                            minimumFractionDigits: 0
                        }) + "</td>" +
                        "</tr>";

                    $("#turnoverHistoryTable tbody").append(newRow);
                }
            });
        </script>

        <script>
            document.addEventListener('DOMContentLoaded', function() {
                var hash = window.location.hash;
                var links = document.querySelectorAll('.nav-link');
                var forms = document.querySelectorAll('form');

                links.forEach(function(link) {
                    link.setAttribute('data-active', 'false');

                    if ('#' + link.getAttribute('id') === hash) {
                        link.setAttribute('data-active', 'true');
                    }
                });


                forms.forEach(function(form) {
                    form.style.display = 'none';
                    if ('#' + form.getAttribute('id') === hash) {
                        form.style.display = 'block';
                    }
                });

                if (!hash || !document.querySelector(hash)) {
                    if (links.length > 0 && forms.length > 0) {
                        links[0].setAttribute('data-active', 'true');
                        forms[0].style.display = 'block';
                    }
                }
            });
        </script>

        <script>
            $(document).ready(function() {
                $("#applyDateRange").on("click", function() {
                    var startDate = $("#startDate").val();
                    var endDate = $("#endDate").val();

                    if (startDate && endDate) {
                        // Lakukan apa yang Anda perlukan dengan startDate dan endDate di sini
                        console.log("Start Date:", startDate);
                        console.log("End Date:", endDate);

                        // Contoh: Kirim AJAX request dengan startDate dan endDate
                        const payloads = {
                            _token: "{{ csrf_token() }}", // Sesuaikan dengan cara Anda mendapatkan csrf_token
                            startDate: startDate + " 00:00:00",
                            endDate: endDate + " 23:59:59"
                        };

                        $.ajax({
                            type: "POST",
                            url: "/transaction/getDepositHistory",
                            data: payloads,
                            success: function(response) {
                                updateTable(response.data);
                            },
                            error: function(error) {
                                console.error("Error fetching deposit history:", error);
                            }
                        });
                    } else {
                        alert("Please select both start and end dates.");
                    }
                });
            });

            //Ajax untuk memunculkan  Deposite User Hari ini
            $(document).ready(function() {
                // Kirim permintaan AJAX untuk mendapatkan riwayat deposit user hari ini
                $.ajax({
                    url: "/getTodayDeposit",
                    type: "GET",
                    success: function(response) {
                        if (response.length > 0) {
                            updateTable(response);
                        } else {
                            $("#depositHistoryTable tbody").empty();
                        }
                    },
                    error: function(error) {
                        console.error(error);
                    },
                });
            });

            $(document).ready(function() {
                var dataTable = $("#depositHistoryTable").DataTable({
                    lengthMenu: [
                        [10, 25, 50, 100],
                        [10, 25, 50, 100],
                    ],
                    pageLength: 10,
                });

                $("#showEntries").on("change", function() {
                    var selectedValue = $(this).val();
                    dataTable.page.len(selectedValue).draw();
                });

                $.ajax({
                    url: "/getTodayDeposit",
                    type: "GET",
                    success: function(response) {
                        if (response.length > 0) {

                            updateTable(response);
                        } else {

                            $("#depositHistoryTable tbody").empty();
                        }
                    },
                    error: function(error) {
                        console.error(error);
                    },
                });
            });

            function updateTable(data) {
                $("#depositHistoryTable tbody").empty();

                for (var i = 0; i < data.length; i++) {
                    var history = data[i];
                    var formattedDate = moment(history.created_at).format("DD MMM YYYY, HH:mm:ss");
                    var nomerUrut = i + 1;
                    var statusText;
                    var statusBgColor;
                    var formattedAmount = Math.floor(history.amount).toLocaleString('id-ID', {
                        minimumFractionDigits: 0
                    });
                    var typeTd;

                    if (history.type == 1) {
                        typeTd = 'Deposit';
                    } else if (history.type == 2) {
                        typeTd = 'Withdraw';
                    } else {
                        typeTd = 'Unknown'; // Handle other cases if necessary
                    }

                    switch (history.status_id) {
                        case 1:
                            statusText = "Menunggu";
                            statusBgColor = "transparant";
                            break;
                        case 2:
                            statusText = "Disetujui";
                            statusBgColor = "transparant";
                            break;
                        case 3:
                            statusText = "Ditolak";
                            statusBgColor = "transparant";
                            break;
                        default:
                            statusText = "Unknown";
                            statusBgColor = "transparant";
                    }

                    var statusDiv =
                        "<div class='table-status' style='background-color: " + statusBgColor + ";'>" +
                        statusText +
                        "</div>";

                    var newRow =
                        "<tr>" +
                        "<td>" + nomerUrut + "</td>" +
                        "<td>" + typeTd + "</td>" +
                        "<td>IDR " + formattedAmount + "</td>" +
                        "<td>" + 0 + "</td>" +
                        "<td>IDR " + formattedAmount + "</td>" +
                        "<td>" + formattedDate + "</td>" +
                        "<td>" + statusDiv + "</td>" +
                        "</tr>";

                    $("#depositHistoryTable tbody").append(newRow);
                }
            }
        </script>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const navLinks = document.querySelectorAll('.nav-bar-links .nav-link');
                const forms = document.querySelectorAll('.standard-form-content form');

                navLinks.forEach(link => {
                    link.addEventListener('click', function(event) {
                        event.preventDefault();


                        forms.forEach(form => form.style.display = 'none');

                        navLinks.forEach(link => link.setAttribute('data-active', 'false'));
                        const activeTab = link.getAttribute('data-tab');
                        document.getElementById(activeTab).style.display = 'block';
                        link.setAttribute('data-active', 'true');
                    });
                });


                const activeLink = document.querySelector('.nav-bar-links .nav-link[data-active="true"]');
                if (activeLink) {
                    const activeTab = activeLink.getAttribute('data-tab');
                    document.getElementById(activeTab).style.display = 'block';
                }
            });
        </script>
        <script>
            $(document).ready(function() {
                // Apply Date Range for Withdraw
                $("#applyWithdrawDateRange").on("click", function() {
                    var startDate = $("#startDateWithdraw").val();
                    var endDate = $("#endDateWithdraw").val();

                    if (startDate && endDate) {
                        const payloads = {
                            _token: "{{ csrf_token() }}",
                            startDateWithdraw: startDate + " 00:00:00",
                            endDateWithdraw: endDate + " 23:59:59"
                        };

                        // console.log(payloads); // Hapus atau nonaktifkan ini jika tidak diperlukan

                        $.ajax({
                            type: "POST",
                            url: "/transaction/getWithdrawHistory",
                            data: payloads,
                            success: function(response) {
                                if (response && response.data) {
                                    updateWithdrawTable(response.data);
                                } else {
                                    console.error("Invalid response format:", response);
                                }
                            },
                            error: function(error) {
                                console.error("Error fetching withdraw history:", error);
                            }
                        });
                    } else {
                        alert("Please select both start and end dates.");
                    }
                });

                $.ajax({
                    url: "/getTodayWithdraw",
                    type: "GET",
                    success: function(response) {
                        if (response) {
                            updateWithdrawTable(response);
                        } else {
                            $("#withdrawHistoryTable tbody").empty();
                        }
                    },
                    error: function(error) {
                        console.error("Error fetching today's withdraw history:", error);
                    },
                });
            });

            function updateWithdrawTable(data) {
                $("#withdrawHistoryTable tbody").empty();

                if (!Array.isArray(data)) {
                    console.error("Data is not an array:", data);
                    return;
                }

                data.forEach(function(history, i) {
                    var formattedDate = moment(history.created_at).format("DD MMM YYYY, HH:mm:ss");
                    var formattedAmount = Math.floor(history.amount).toLocaleString('id-ID', {
                        minimumFractionDigits: 0
                    });

                    var typeTd = history.type == 1 ? 'Deposit' : history.type == 2 ? 'Withdraw' : 'Unknown';

                    var statusText, statusBgColor;

                    switch (history.status_id) {
                        case 1:
                            statusText = "Menunggu";
                            statusBgColor = "transparent";
                            break;
                        case 2:
                            statusText = "Disetujui";
                            statusBgColor = "transparent";
                            break;
                        case 3:
                            statusText = "Ditolak";
                            statusBgColor = "transparent";
                            break;
                        default:
                            statusText = "Unknown";
                            statusBgColor = "transparent";
                    }

                    var statusDiv =
                        "<div class='table-status' style='background-color: " + statusBgColor + ";'>" +
                        statusText +
                        "</div>";

                    var newRow =
                        "<tr>" +
                        "<td>" + (i + 1) + "</td>" +
                        "<td>IDR " + formattedAmount + "</td>" +
                        "<td>" + formattedDate + "</td>" +
                        "<td>" + statusDiv + "</td>" +
                        "</tr>";

                    $("#withdrawHistoryTable tbody").append(newRow);
                });
            }
        </script>
    @endsection
