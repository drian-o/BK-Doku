@extends('backoffice.layouts.main')
@section('content')
    <div class="card mt-3">
        <div class="card-header">
            <form id="searchForm" class="form-horizontal">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="date_start" class="form-text">Tanggal</label>
                            <div class="tanggal">
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="date" name="date_start" class="form-control" id="date_start"
                                            value="">
                                    </div>
                                    <div class="col-md-6">
                                        <input type="date" name="date_end" class="form-control" id="date_end"
                                            value="">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="extplayer">User</label>
                            <select name="extplayer" class="form-control" id="extplayer">
                                @foreach ($users as $user)
                                    <option value="{{ $user->extplayer }}">{{ $user->username }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <button type="button" id="btn_search" class="btn btn-success"><i class="fa fa-search"></i>
                                Filter</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="card-body">
            <div id="results">
                <!-- Hasil pencarian akan ditampilkan di sini -->
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.9/js/dataTables.responsive.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#btn_search').on('click', function() {
                var formData = {
                    date_start: $('#date_start').val(),
                    date_end: $('#date_end').val(),
                    extplayer: $('#extplayer').val(),
                    _token: '{{ csrf_token() }}'
                };

                $.ajax({
                    url: '/fetch-game-history',
                    type: 'POST',
                    data: formData,
                    success: function(response) {
                        var resultsDiv = $('#results');
                        resultsDiv.empty();

                        if (response.status === 'success' && response.data.length > 0) {
                            var table = $(
                                '<table class="table table-bordered" id="example2"><thead><tr><th>Game Code</th><th>Bet Money</th><th>Win Money</th><th>Transaction ID</th><th>Transaction Type</th></tr></thead><tbody></tbody></table>'
                            );
                            var tbody = table.find('tbody');

                            $.each(response.data, function(index, entry) {
                                var row = $('<tr></tr>');
                                row.append('<td>' + entry.game_code + '</td>');
                                row.append('<td>' + entry.bet_money + '</td>');
                                row.append('<td>' + entry.win_money + '</td>');
                                row.append('<td>' + entry.txn_id + '</td>');
                                row.append('<td>' + entry.txn_type + '</td>');
                                tbody.append(row);
                            });

                            resultsDiv.append(table);

                            // Inisialisasi DataTables dengan responsif
                            $('#example2').DataTable({
                                paging: true,
                                lengthChange: false,
                                searching: true,
                                ordering: true,
                                info: true,
                                autoWidth: false,
                                responsive: true, // Mengaktifkan responsif
                                order: [
                                    [1, 'desc']
                                ]
                            });
                        } else {
                            resultsDiv.append(
                                '<p>No results found for the selected criteria.</p>');
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error(error);
                    }
                });
            });
        });
    </script>
@endsection
