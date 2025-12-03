@extends('backoffice.layouts.main')

@section('content')
    <div class="card mt-3">
        <div class="card-header">
            Pengaturan saldo dan bonus member
        </div>
        <div class="card-header">
            <div class="form-horizontal">
                <div class="form-group">
                    <label>Cari (Username / Email / Telp ) </label>
                    <div class="col-6">
                        <input type="text" class="form-control" name="search_name" id="search_name"
                            value="{{ $src }}">
                    </div>
                </div>
                <div class="form-group">
                    <a href="" class="btn btn-success btn-search"><i class="fa fa-search"></i> Filter</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table id="example2" class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Saldo</th>
                        <th>Bonus</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>

    <div class="modal-area">
        <div class="modal fade" id="saldo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form action="/pengaturan_saldo/{{ $id }}" class="form-saldo" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ubah Saldo Dari
                                <b class="data-username"></b>
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Type</label>
                                <select class="form-control" name="type" required>
                                    <option disabled selected value="">Pilih Type</option>
                                    <option value="1"> Tambah Saldo </option>
                                    <option value="2"> Kurangi Saldo </option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="nama">Nominal</label>
                                <input type="number" class="form-control" name="nominal" required>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-success">Ubah Saldo </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="ubah_bonus" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form class="form-saldo" method="POST">
                        {{ csrf_field() }}
                        @method('PUT')
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ubah Bonus Dari
                                <b class="data-username"></b>
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Type</label>
                                <select class="form-control" name="type" required>
                                    <option disabled selected value="">Pilih Type</option>
                                    <option value="3"> Tambah Bonus </option>
                                    <option value="4"> Kurangi Bonus </option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="nama">Nominal</label>
                                <input type="number" class="form-control" name="nominal" required>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-warning">Ubah Bonus</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>

    <script>
        $(document).ready(function() {
            const url = {
                saldo: '{{ URL::to('https://ingaming88.xyz/pengaturan_saldo') }}'
            };

            const datatables_data = [
                @foreach ($saldo as $item)
                    {
                        iteration: '{{ $loop->iteration }}',
                        id: '{{ $item->id }}',
                        username: '{{ $item->name }}',
                        email: '{{ $item->email }}',
                        phone: '{{ $item->telp }}',
                        saldo: '@currency($item->saldo)',
                        bonus: '@currency($item->bonus)'
                    },
                @endforeach
            ];

            $('#example2').DataTable({
                "paging": false,
                "lengthChange": false,
                "searching": true,
                "ordering": true,
                "info": false,
                "autoWidth": false,
                "responsive": true,
                data: datatables_data,
                aoColumns: [{
                        sWidth: '5%',
                        mData: 'iteration'
                    },
                    {
                        sWidth: '15%',
                        mData: 'username'
                    },
                    {
                        sWidth: '15%',
                        mData: 'email'
                    },
                    {
                        sWidth: '15%',
                        mData: 'phone'
                    },
                    {
                        sWidth: '8%',
                        mData: 'saldo'
                    },
                    {
                        sWidth: '8%',
                        mData: 'bonus'
                    },
                    {
                        sWidth: '10%',
                        mData: 'id',
                        mRender: render_transfer
                    }
                ]
            });

            $(document).on('click', '.btn-ubah-saldo', function(e) {
                $('#saldo').modal('show');
                const id = $(this).attr('data-id');

                $('.form-saldo').attr('action', url.saldo + '/' + id);
            });

            $(document).on('click', '.btn-ubah-bonus', function(e) {
                $('#ubah_bonus').modal('show');
                const id = $(this).attr('data-id');

                $('.form-saldo').attr('action', url.saldo + '/' + id);
            });

            $(document).on('click', '.btn-search', function(e) {
                e.preventDefault();

                window.location.href = url.saldo + '?search=' + btoa($('#search_name').val());
            });
        });


        function render_transfer(data, type, row) {
            if (type == "sort" || type == 'type')
                return data;

            return '<button data-id="' + data + '" data-username="' + row.username +
                '" type="button" class="btn btn-success btn-ubah-saldo">Ubah Saldo</button>' +
                '<button data-id="' + data + '" data-username="' + row.username +
                '" type="button" class="btn btn-warning btn-ubah-bonus" style="margin-left:8px">Ubah Bonus</button>';
        }
    </script>
@endsection
