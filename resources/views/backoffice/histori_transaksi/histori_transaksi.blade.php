@extends('backoffice.layouts.main')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card mt-3">
                    <div class="card-header">
                        <ul class="component-tabs nav nav-tabs" id="transactionTabs">
                            <li class="nav-item">
                                <a class="button-pills nav-link active" id="nav-deposit-tab" data-toggle="tab"
                                    href="#nav-deposit" role="tab" aria-controls="nav-deposit" aria-expanded="false"
                                    onclick="changeTab('deposit')">
                                    <i class="fas fa-wallet"></i>
                                    <span>History Deposit</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="button-pills nav-link" id="nav-withdraw-tab" data-toggle="tab"
                                    href="#nav-withdraw" role="tab" aria-controls="nav-withdraw" aria-expanded="false"
                                    onclick="changeTab('withdraw')">
                                    <i class="fas fa-coins"></i>
                                    <span>History Withdraw</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="nav-deposit" role="tabpanel"
                                aria-labelledby="nav-deposit-tab">

                                <div class="table-responsive">
                                    <table id="deposit-table" class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col" style="text-align: center;">No</th>
                                                <th scope="col" style="text-align: center;">Tanggal</th>
                                                <th scope="col" style="text-align: center;">Parent ref</th>
                                                <th scope="col" style="text-align: center;">Nama Pengirim</th>
                                                <th scope="col" style="text-align: center;">Bank Pengirim</th>
                                                <th scope="col" style="text-align: center;">Type</th>
                                                <th scope="col" style="text-align: center;">Nominal</th>
                                                <th scope="col" style="text-align: center;">Bank Penerima</th>
                                                <th scope="col" style="text-align: center;">Nama Penerima</th>
                                                <th scope="col" style="text-align: center;">Rekening Penerima</th>
                                                <th scope="col" style="text-align: center;">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($deposits as $history)
                                                <tr class="text-center">
                                                    <td>{{ $loop->iteration }}</td>
                                                    <td>{{ $history->created_at->diffForHumans() }}</td>
                                                    <td>{{ $history->ref }}</td>
                                                    <td>{{ $history->accName }}</td>
                                                    <td>{{ $history->bankMember }}</td>
                                                    @if ($history->type == 1)
                                                        <td>Deposite</td>
                                                    @else
                                                        <td>Withdraw</td>
                                                    @endif
                                                    <td>IDR {{ number_format($history->amount) }}</td>
                                                    <td>{{ $history->bank_penerima }}</td>
                                                    <td>{{ $history->nama_penerima }}</td>
                                                    <td>{{ $history->nomer_penerima }}</td>
                                                    @if ($history->status_id == 1)
                                                        <td style="background-color: orange; color:white">Pending</td>
                                                    @elseif($history->status_id == 2)
                                                        <td style="background-color: green; color:white">Success</td>
                                                    @elseif ($history->status_id == 3)
                                                        <td style="background-color: red; color:white">Rejected</td>
                                                    @else
                                                        <td>Tidak Ada Transaksi</td>
                                                    @endif

                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-withdraw" role="tabpanel" aria-labelledby="nav-withdraw-tab">
                                <div class="table-responsive">
                                    <table id="withdraw-table" class="table table-bordered table-hover"
                                        style="display:block; border: 1px solid #dee2e6;">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Tanggal</th>
                                                <th>Nama Rekening</th>
                                                <th>Type</th>
                                                <th>Bank</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <!-- Data akan diisi melalui JavaScript -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script>
            document.addEventListener('DOMContentLoaded', function() {

                const url = '/getWithdrawHistory';


                function populateTable(data) {
                    const tableBody = document.querySelector('#withdraw-table tbody');
                    tableBody.innerHTML = '';

                    data.forEach((item, index) => {
                        let typeLabel = '';
                        switch (item.type) {
                            case 2:
                                typeLabel = 'Withdraw';
                                break;
                            default:
                                typeLabel = 'Withdraw'
                        }
                        let statusLabel = '';
                        switch (item.status_id) {
                            case 2:
                                statusLabel = 'Setuju';
                                break;
                            case 3:
                                statusLabel = 'Ditolak';
                                break;
                            default:
                                statusLabel = 'Unknown';
                        }


                        const row = `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${new Date(item.created_at).toLocaleDateString()}</td>
                        <td>${item.accName}</td>
                        <td>${typeLabel}</td>
                        <td>${item.bankMember}</td>
                        <td>${item.amount}</td>
                        <td>${statusLabel}</td>
                    </tr>
                `;
                        tableBody.innerHTML += row;
                    });
                }

                // Ambil data dari server dan isi tabel
                fetch(url)
                    .then(response => response.json())
                    .then(data => populateTable(data))
                    .catch(error => console.error('Error fetching withdraw history:', error));
            });
        </script>
        <script>
            $(document).ready(function() {

                $('#deposit-table').DataTable({
                    "paging": true,
                    "lengthChange": false,
                    "searching": true,
                    "ordering": true,
                    "info": true,
                    "autoWidth": false,
                    "responsive": true,
                });

                $('#withdraw-table').DataTable({
                    "paging": true,
                    "lengthChange": false,
                    "searching": true,
                    "ordering": true,
                    "info": true,
                    "autoWidth": false,
                    "responsive": true,
                });


                // Mengambil data deposit dari endpoint
                // $.ajax({
                // url: "{{ route('deposit.history') }}",
                // method: "GET",
                // success: function(data) {
                // var depositTable = $('#deposit-table tbody');
                // depositTable.empty();
                // $.each(data, function(index, deposit) {
                // var formattedDate = formatDate(deposit.created_at);
                // var statusText;
                // var statusBgColor;
                // switch (deposit.status_id) {
                // case 1:
                // statusText = "Pending";
                // statusBgColor = "orange";
                // break;
                // case 2:
                // statusText = "Approved";
                // statusBgColor = "green";
                // break;
                // case 3:
                // statusText = "Rejected";
                // statusBgColor = "red";
                // break;
                // default:
                // statusText = "Unknown";
                // statusBgColor = "black";
                // }
                // var statusDiv =
                // "<div class='table-status text-white'
                style = 'background-color: " +
                //                 statusBgColor +
                //                 ";'>
                " +
                // statusText +
                // "</div>";
                // var transactionTypeText;
                // if (deposit.type == 1) {
                // transactionTypeText = "Deposite";
                // } else if (deposit.type == 2) {
                // transactionTypeText = "Withdraw";
                // } else {
                // transactionTypeText =
                // "Unknown"; // Jika nilai transaction.type tidak 1 atau 2
                // }
                // depositTable.append('<tr>' +
                // '<td style="text-align: center;">' + (index + 1) + '</td>' +
                // '<td style="text-align: center;">' + formattedDate + '</td>' +
                // '<td style="text-align: center;">' + deposit.accName + '</td>' +
                // '<td style="text-align: center;">' + deposit.bankMember +
                // '</td>' +
                // '<td style="text-align: center;">' + transactionTypeText +
                // '</td>' +
                // '<td style="text-align: center;">' + formatRupiah(deposit
                // .amount) + '</td>' +
                // '<td style="text-align: center;">' + deposit.bank_penerima +
                // '</td>' +
                // '<td style="text-align: center;">' + deposit.nama_penerima +
                // '</td>' +
                // '<td style="text-align: center;">' + deposit.nomer_penerima +
                // '</td>' +
                // '<td style="text-align: center;">' + statusDiv + '</td>' +
                // '</tr>');
                // });
                // }
                // });

                // $.ajax({
                // url: "{{ route('withdraw.history') }}",
                // method: "GET",
                // success: function(data) {
                // // Mengisi tabel withdraw dengan data yang diperoleh
                // var withdrawTable = $('#withdraw-table tbody');
                // withdrawTable.empty();
                // $.each(data, function(index, withdraw) {
                // var formattedDate = formatDate(withdraw.created_at);
                // var statusText;
                // var statusBgColor;
                // switch (withdraw.status_id) {
                // case 1:
                // statusText = "Pending";
                // statusBgColor = "orange";
                // break;
                // case 2:
                // statusText = "Approved";
                // statusBgColor = "green";
                // break;
                // case 3:
                // statusText = "Rejected";
                // statusBgColor = "red";
                // break;
                // default:
                // statusText = "Unknown";
                // statusBgColor = "black";
                // }
                // var statusDiv =
                // "<div class='table-status text-white'
                style = 'background-color: " +
                //                 statusBgColor +
                //                 ";'>
                " +
                // statusText +
                // "</div>";
                // var transactionTypeText;
                // if (withdraw.type == 1) {
                // transactionTypeText = "Deposite";
                // } else if (withdraw.type == 2) {
                // transactionTypeText = "Withdraw";
                // } else {
                // transactionTypeText =
                // "Unknown"; // Jika nilai transaction.type tidak 1 atau 2
                // }
                // withdrawTable.append('<tr>' +
                // '<td>' + (index + 1) + '</td>' +
                // '<td>' + formattedDate + '</td>' +
                // '<td>' + withdraw.accName + '</td>' +
                // '<td>' + transactionTypeText + '</td>' +
                // '<td>' + withdraw.bankMember + '</td>' +
                // '<td>' + formatRupiah(withdraw.amount) + '</td>' +
                // '<td>' + statusDiv + '</td>' +

                // '</tr>');
                // });
                // }
                // });

                function formatDate(inputDate) {
                    var date = new Date(inputDate);
                    var day = ("0" + date.getDate()).slice(-2);
                    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                    ];
                    var month = monthNames[date.getMonth()];
                    var year = date.getFullYear();
                    var hours = ("0" + date.getHours()).slice(-2);
                    var minutes = ("0" + date.getMinutes()).slice(-2);
                    var seconds = ("0" + date.getSeconds()).slice(-2);
                    return day + '-' + month + '-' + year + ' ' + hours + ':' + minutes + ':' + seconds;
                }

                function formatRupiah(amount) {
                    var formattedAmount = new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                    }).format(amount);
                    return formattedAmount.slice(0, -3); // Remove last three digits
                }

                // Fungsi untuk mengubah tab saat diklik
                function changeTab(tabType) {
                    if (tabType === 'deposit') {
                        $('#nav-deposit-tab').addClass('active');
                        $('#nav-withdraw-tab').removeClass('active');
                        $('#nav-deposit').addClass('show active');
                        $('#nav-withdraw').removeClass('show active');
                    } else if (tabType === 'withdraw') {
                        $('#nav-deposit-tab').removeClass('active');
                        $('#nav-withdraw-tab').addClass('active');
                        $('#nav-deposit').removeClass('show active');
                        $('#nav-withdraw').addClass('show active');
                    }
                }

                // Handler saat tab di klik
                $('#nav-deposit-tab').click(function() {
                    changeTab('deposit');
                });

                $('#nav-withdraw-tab').click(function() {
                    changeTab('withdraw');
                });
            });
        </script>
    </div>
@endsection
