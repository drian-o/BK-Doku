@extends('backoffice.layouts.main')

@section('content')
    <div class="pt-3">
        <button data-toggle="modal" data-target="#tambah" type="button" class="btn btn-success btn-add"><i
                class="fa fa-plus"></i> Buat Voucher</button>
    </div>
    <div class="card mt-3">
        <div class="card-header">
            Data Voucher
        </div>

        <div class="table-responsive">
            <table id="voucher-table" class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th style="text-align: center;">#</th>
                        <th style="text-align: center;">Title</th>
                        <th style="text-align: center;">Exp</th>
                        <th style="text-align: center;">Nominal</th>
                        <th style="text-align: center;">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($voucher as $voucher)
                        <tr style="text-align: center;">
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $voucher->title }}</td>
                            <td>{{ $voucher->exp }}</td>
                            <td>{{ $voucher->nominal }}</td>
                            <td>
                                <form action="">
                                    <button class="btn btn-danger">Hapus</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    <div class="modal fade" id="tambah" tabindex="-1" role="dialog" aria-labelledby="modalUserBaru" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form action="/Admin/Dashboard/Voucher" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('POST')
                    <div class="modal-header">
                        <h5 class="modal-title" id="modal_member"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <input id="id" type="hidden" name="id" value="">
                        <div class="form-group">
                            <label for="judul">Judul</label>
                            <input id="title" type="text" class="form-control" name="title" value="">
                        </div>
                        <div class="form-group">
                            <label for="exp">Exp</label>
                            <input id="exp" type="text" class="form-control" name="exp" value="">
                        </div>
                        <div class="form-group">
                            <label for="nominal">Nominal</label>
                            <input id="nominal" type="text" class="form-control" name="nominal" value="">
                        </div>
                        <div class="modal-footer">
                            {{-- <button type="submit_delete" class="btn btn-danger" data-dismiss="modal">Delete</button> --}}
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Simpan</button>
                        </div>
                </form>
            </div>
        </div>
    </div>
@endsection
