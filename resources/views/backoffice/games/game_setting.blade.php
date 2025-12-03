@extends('backoffice.layouts.main')

@section('content')
    <style>
        .modal-body {
            max-height: 80vh;
            /* contoh pengaturan tinggi maksimum modal */
            overflow-y: auto;
            /* memastikan scroll vertikal aktif jika konten lebih panjang dari modal */
        }
    </style>
    <div class="card mt-3">
        <div class="card-header">
            Games List
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12">
                    <div class="modal fade" id="tambah_banner" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <form action="{{ URL::to('banner') }}" method="POST" enctype="multipart/form-data">
                                    {{ csrf_field() }}
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Tambah Data Banner</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1" class="form-text text-muted">Judul
                                                        :</label>
                                                    <input name="nama" type="text" class="form-control"
                                                        placeholder="Judul Banner" value="">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1" class="form-text text-muted">Gambar
                                                        Banner :</label>
                                                    <input name="gambar" type="file" class="form-control uploads"
                                                        accept="image/png, image/jpg, image/jpeg">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" name="status" value="1">
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-danger">Tambah</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-responsive">

                <table id="example2" class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th class="text-center">Username</th>
                            <th class="text-center">Provider</th>
                            <th class="text-center">Game Code</th>
                            <th class="text-center">Bet</th>
                            <th class="text-center">Balance</th>
                            <th class="text-center">Total Debit</th>
                            <th class="text-center">Total Kredit</th>
                            <th class="text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($x as $data)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $data['user_code'] }}</td>
                                <td>{{ $data['provider_code'] }}</td>
                                <td>{{ $data['game_code'] }}</td>
                                <td>{{ $data['bet'] }}</td>
                                <td>{{ $data['balance'] }}</td>
                                <td>{{ $data['total_debit'] }}</td>
                                <td>{{ $data['total_credit'] }}</td>
                                <td class="text-center">
                                    <button class="btn btn-primary btn-sm open-modal" data-toggle="modal"
                                        data-target="#itemModal{{ $data['id'] }}">Set</button>
                                </td>
                            </tr>
                            <!-- Modal -->
                            <div class="modal fade" id="itemModal{{ $data['id'] }}" tabindex="-1" role="dialog"
                                aria-labelledby="itemModalLabel{{ $data['id'] }}" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="itemModalLabel{{ $data['id'] }}">Detail Item
                                                #{{ $data['id'] }}</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form id="form{{ $data['id'] }}">
                                                <div class="form-group">
                                                    <label for="userCode{{ $data['id'] }}">User Code</label>
                                                    <input type="text" class="form-control"
                                                        id="userCode{{ $data['id'] }}" value="{{ $data['user_code'] }}"
                                                        readonly>
                                                </div>
                                                <div class="form-group">
                                                    <label for="providerCode{{ $data['id'] }}">Provider Code</label>
                                                    <input type="text" class="form-control"
                                                        id="providerCode{{ $data['id'] }}"
                                                        value="{{ $data['provider_code'] }}" readonly>
                                                </div>
                                                <div class="form-group">
                                                    <label for="gameCode{{ $data['id'] }}">Game Code</label>
                                                    <input type="text" class="form-control"
                                                        id="gameCode{{ $data['id'] }}"
                                                        value="{{ $data['game_code'] }}" readonly>
                                                </div>
                                                <div class="form-group">
                                                    <label for="bet{{ $data['id'] }}">Bet</label>
                                                    <input type="text" class="form-control"
                                                        id="bet{{ $data['id'] }}" value="{{ $data['bet'] }}"
                                                        readonly>
                                                </div>
                                                <div class="form-group">
                                                    <label for="balance{{ $data['id'] }}">Balance</label>
                                                    <input type="text" class="form-control"
                                                        id="balance{{ $data['id'] }}" value="{{ $data['balance'] }}"
                                                        readonly>
                                                </div>
                                                <div class="form-group">
                                                    <label for="totalDebit{{ $data['id'] }}">Total Debit</label>
                                                    <input type="text" class="form-control"
                                                        id="totalDebit{{ $data['id'] }}"
                                                        value="{{ $data['total_debit'] }}" readonly>
                                                </div>
                                                <div class="form-group">
                                                    <label for="totalCredit{{ $data['id'] }}">Total Credit</label>
                                                    <input type="text" class="form-control"
                                                        id="totalCredit{{ $data['id'] }}"
                                                        value="{{ $data['total_credit'] }}" readonly>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-dismiss="modal">Tutup</button>
                                            <button type="button" class="btn btn-primary submit-data"
                                                data-id="{{ $data['id'] }}">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Modal baru untuk menampilkan data dari controller -->
                            <div class="modal fade" id="newModal" tabindex="-1" role="dialog"
                                aria-labelledby="newModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="newModalLabel">Set Perkalian</h5>
                                            <button type="button" class="close" data-dismiss="modal"
                                                aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body" id="newModalBody">
                                            <form id="form{{ $data['id'] }}">
                                                <div class="form-group">
                                                    <label for="userCode{{ $data['id'] }}">User Code</label>
                                                    <input type="text" class="form-control"
                                                        id="userCode{{ $data['id'] }}"
                                                        value="{{ $data['user_code'] }}" readonly>
                                                </div>
                                                <div class="form-group">
                                                    <label for="providerCode{{ $data['id'] }}">Provider Code</label>
                                                    <input type="text" class="form-control"
                                                        id="providerCode{{ $data['id'] }}"
                                                        value="{{ $data['provider_code'] }}" readonly>
                                                </div>
                                                <div class="form-group">
                                                    <label for="gameCode{{ $data['id'] }}">Game Code</label>
                                                    <input type="text" class="form-control"
                                                        id="gameCode{{ $data['id'] }}"
                                                        value="{{ $data['game_code'] }}" readonly>
                                                </div>
                                                <div class="form-group">
                                                    <label for="bet{{ $data['id'] }}">Bet</label>
                                                    <input type="text" class="form-control"
                                                        id="bet{{ $data['id'] }}" value="{{ $data['bet'] }}"
                                                        readonly>
                                                </div>
                                                <div class="form-group">
                                                    <label for="balance{{ $data['id'] }}">Balance</label>
                                                    <input type="text" class="form-control"
                                                        id="balance{{ $data['id'] }}" value="{{ $data['balance'] }}"
                                                        readonly>
                                                </div>
                                                <div class="form-group">
                                                    <label for="totalDebit{{ $data['id'] }}">Total Debit</label>
                                                    <input type="text" class="form-control"
                                                        id="totalDebit{{ $data['id'] }}"
                                                        value="{{ $data['total_debit'] }}" readonly>
                                                </div>
                                                <div class="form-group">
                                                    <label for="totalCredit{{ $data['id'] }}">Total Credit</label>
                                                    <input type="text" class="form-control"
                                                        id="totalCredit{{ $data['id'] }}"
                                                        value="{{ $data['total_credit'] }}" readonly>
                                                </div>
                                            </form>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary apply-data">Apply</button>
                                            <button type="button" class="btn btn-secondary"
                                                data-dismiss="modal">Tutup</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <script>
                                $(document).ready(function() {
                                    $('.submit-data').on('click', function() {
                                        var id = $(this).data('id');
                                        var provider = $('#providerCode' + id).val();
                                        var gamecode = $('#gameCode' + id).val();
                                        var username = $('#userCode' + id).val();

                                        $.ajax({
                                            url: '/call-list',
                                            method: 'POST',
                                            data: {
                                                provider: provider,
                                                game_code: gamecode,
                                                username: username,
                                                _token: '{{ csrf_token() }}'
                                            },
                                            success: function(response) {
                                                // Close current modal
                                                $('#itemModal' + id).modal('hide');

                                                // Construct RTP options dropdown
                                                var rtpOptions = '<select class="form-control" id="rtpSelect">';
                                                response.calls.forEach(function(call) {
                                                    rtpOptions += '<option value="' + call.rtp + '">' +
                                                        'RTP: ' + call.rtp + '</option>';
                                                });
                                                rtpOptions += '</select>';

                                                // Construct call type options dropdown
                                                var callTypeOptions =
                                                    '<select class="form-control" id="callTypeSelect">' +
                                                    '<option value="1">Common Free</option>' +
                                                    '<option value="2">Buy Bonus Free</option>' +
                                                    '</select>';

                                                // Insert options into modal body after the form
                                                $('#newModalBody').find('form').after(
                                                    '<div class="form-group">' +
                                                    '<label for="rtpSelect">Select RTP</label>' +
                                                    rtpOptions +
                                                    '</div>' +
                                                    '<div class="form-group">' +
                                                    '<label for="callTypeSelect">Select Call Type</label>' +
                                                    callTypeOptions +
                                                    '</div>'
                                                );

                                                // Show the new modal
                                                $('#newModal').modal('show');
                                            },
                                            error: function(xhr, status, error) {
                                                console.error('Error:', error);
                                            }
                                        });
                                    });
                                });
                            </script>
                            <script>
                                $(document).ready(function() {
                                    // Event listener untuk tombol Apply
                                    $('#newModal').on('click', '.apply-data', function() {
                                        var id = '{{ $data['id'] }}';
                                        var rtp = $('#rtpSelect').val();
                                        var type = $('#callTypeSelect').val();

                                        console.log("ID:", id);
                                        console.log("RTP before validation:", $('#rtpSelect').val());
                                        console.log("RTP after parseInt:", rtp);
                                        console.log("Type:", type);
                                        $.ajax({
                                            url: '/call-apply',
                                            method: 'POST',
                                            data: {
                                                provider: $('#providerCode{{ $data['id'] }}').val(),
                                                game_code: $('#gameCode{{ $data['id'] }}').val(),
                                                username: $('#userCode{{ $data['id'] }}').val(),
                                                call_rtp: rtp, // Pastikan nama parameter sesuai dengan yang diharapkan
                                                call_type: type, // Sesuaikan dengan kebutuhan server Anda
                                                _token: '{{ csrf_token() }}'
                                            },
                                            success: function(response) {
                                                console.log('Response:', response);
                                                $('#newModal').modal('hide');
                                            },
                                            error: function(xhr, status, error) {
                                                console.error('Error:', error);
                                            }
                                        });
                                    });
                                });
                            </script>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function() {

            $('#example2').DataTable({
                "paging": true,
                "lengthChange": false,
                "searching": true,
                "ordering": true,
                "info": true,
                "autoWidth": false,
                "responsive": true,
                bAutoWidth: false,
                aoColumns: [{
                        sWidth: '5%'
                    },
                    {
                        sWidth: '10%'
                    },
                    {
                        sWidth: '15%'
                    },
                    {
                        sWidth: '10%'
                    },
                    {
                        sWidth: '10%'
                    },
                    {
                        sWidth: '10%'
                    },
                    {
                        sWidth: '10%'
                    },
                    {
                        sWidth: '10%'
                    },
                ]
            });
        })
    </script>
@endsection
