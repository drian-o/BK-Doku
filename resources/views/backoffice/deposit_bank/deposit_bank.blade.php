@extends('backoffice.layouts.main')

@section('content')
    <div class="card mt-3">
        <div class="card-header">
            Daftar BANK & E-wallet
        </div>


        <div class="card-body">
            <div class="row">
                <div class="col-md-12">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#tambahBankModal">
                        Tambah Bank Baru
                    </button>
                </div>
            </div>
            <table id="example2" class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Bank/E-wallet</th>
                        <th>Nama Rekening/E-wallet</th>
                        <th>Nomor Rekening/E-wallet</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($bank as $item)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $item->nama_bank }}</td>
                            <td>{{ $item->nama_penerima }}
                            </td>
                            <td>{{ $item->no_rek }}</td>
                            <td>
                                @if ($item->status == 1)
                                    <span class="badge badge-success">Aktif</span>
                                @else
                                    <span class="badge badge-danger">Off</span>
                                @endif
                            </td>
                            <td>
                                @if ($item->status == 1)
                                    <button data-toggle="modal" data-target="#non{{ $item->id }}" type="button"
                                        class="badge bg-danger">Disabled</button>
                                @else
                                    <button data-toggle="modal" data-target="#aktif{{ $item->id }}" type="button"
                                        class="badge bg-primary">Active</button>
                                @endif
                                <button data-toggle="modal" data-target="#ubah{{ $item->id }}" type="button"
                                    class="badge bg-warning">Edit</button>
                            </td>
                            <div class="modal-area">
                                <div class="modal fade" id="non{{ $item->id }}" tabindex="-1" role="dialog"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <form action="/Admin/Dashboard/Manage-Bank/{{ $item->id }}" method="POST">
                                                {{ csrf_field() }}
                                                @method('PUT')
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Nonaktifkan Data</h5>
                                                    <button type="button" class="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    Apakah anda yakin akan menonaktifkan data ?
                                                </div>
                                                <input type="hidden" name="status" value="2">
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-dismiss="modal">Close</button>
                                                    <button type="submit" class="btn btn-danger">Nonaktifkan</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal fade" id="aktif{{ $item->id }}" tabindex="-1" role="dialog"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <form action="/Admin/Dashboard/Manage-Bank/{{ $item->id }}" method="POST">
                                                {{ csrf_field() }}
                                                @method('PUT')
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Aktifkan Data</h5>
                                                    <button type="button" class="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    Apakah anda yakin akan mengaktifkan data ?
                                                </div>

                                                <input type="hidden" name="status" value="1">
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-dismiss="modal">Close</button>
                                                    <button type="submit" class="btn btn-primary">Aktifkan</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal fade" id="ubah{{ $item->id }}" tabindex="-1" role="dialog"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <form action="/Admin/Dashboard/Manage-Bank/{{ $item->id }}" method="POST"
                                                enctype="multipart/form-data">
                                                {{ csrf_field() }}
                                                @method('PUT')
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Ubah Data</h5>
                                                    <button type="button" class="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="form-group">
                                                        <label for="exampleFormControlInput1">Bank</label>
                                                        <input type="text" class="form-control" name="nama_bank"
                                                            value="{{ $item->nama_bank }}">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlInput1">Nama</label>
                                                        <input type="text" class="form-control" name="nama_penerima"
                                                            value="{{ $item->nama_penerima }}">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlInput1">Nomor</label>
                                                        <input type="text" class="form-control" name="no_rek"
                                                            value="{{ $item->no_rek }}">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlInput1">QR</label>
                                                        <input name ="image_qr" type="file" class="form-control"
                                                            accept="image/png, image/jpg, image/jpeg">
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-dismiss="modal">Close</button>
                                                    <button type="submit" class="btn btn-warning">Ubah</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    <div class="modal fade" id="tambahBankModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form action="/Admin/Dashboard/Manage-Bank" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tambah Bank Baru</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="bank">Bank</label>
                            <input type="text" class="form-control" name="nama_bank">
                        </div>
                        <div class="form-group">
                            <label for="nama">Nama</label>
                            <input type="text" class="form-control" name="nama_penerima">
                        </div>
                        <div class="form-group">
                            <label for="no">Nomor Rekening</label>
                            <input type="text" class="form-control" name="no_rek">
                        </div>
                        <div class="form-group">
                            <label for="qr">QR Code</label>
                            <input type="file" class="form-control" name="image_qr"
                                accept="image/png, image/jpg, image/jpeg">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
                        <button type="submit" class="btn btn-primary">Simpan</button>
                    </div>
                </form>
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
            });
        });
    </script>
    <script>
        $(document).ready(function() {
            // Menghilangkan focus pada input saat modal ditutup
            $('#tambahBankModal').on('hidden.bs.modal', function() {
                $(this).find('form').trigger('reset');
            });
        });
    </script>
@endsection
