<?php
use App\Http\API\fiver;
?>
@extends('backoffice.layouts.main')
@section('content')
    <div class="card mt-3">
        <div class="card-header">
            Data Member
        </div>
        <div class="card-body">
            @include('backoffice.layouts.msg_bar')
            <div class="table-responsive">
                <table id="example2" class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tanggal</th>
                            <th>Username</th>
                            <th>Ref</th>
                            <th>Saldo</th>
                            <th>Email</th>
                            <th>No WA</th>
                            <th>Bank</th>
                            <th>Nama Rekening</th>
                            <th>Nomor Rekening</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($user as $user)
                            <?php
                            $SG = new fiver();
                            $act = json_decode($SG->userbalance($user->extplayer));
                            $saldo = $act->user->balance;
                            ?>
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $user->created_at }} </td>
                                <td>{{ $user->username }}</td>
                                <td>{{ $user->ref }}</td>
                                <td>{{ number_format($saldo) }}</td>
                                <td>{{ $user->email }}</td>
                                <td>{{ $user->whatsapp }}</td>
                                <td>{{ $user->bank ?? '' }}</td>
                                <td>{{ $user->accName }}</td>
                                <td>{{ $user->accNumber }}</td>
                                <td>
                                    <button data-toggle="modal" data-target="#ubah{{ $user->id }}" type="button"
                                        class="btn btn-secondary">Inject</button>
                                </td>
                            </tr>

                            <div class="modal fade" id="ubah{{ $user->id }}" tabindex="-1" role="dialog"
                                aria-labelledby="modaledit{{ $user->id }}" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <form action="{{ route('saldo.update', $user->id) }}" method="POST">
                                            @csrf
                                            @method('PUT')
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="modaledit{{ $user->id }}">Ubah Data</h5>
                                                <button type="button" class="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <!-- Form untuk mengubah data user -->
                                                <div class="form-group">
                                                    <label for="name">Nama</label>
                                                    <input type="text" class="form-control" id="name" name="name"
                                                        value="{{ $user->username }}" readonly>
                                                </div>
                                                <div class="form-group">
                                                    <label for="saldo">Saldo</label>
                                                    <input type="text" class="form-control" id="text" name="saldo"
                                                        value="{{ $saldo }}">
                                                </div>
                                                <div class="form-group">
                                                    <label for="action">Pilih Tindakan</label>
                                                    <select class="form-control" id="action" name="action">
                                                        <option value="none" selected disabled>-- Pilih Tindakan --
                                                        </option>
                                                        <option value="deposit">Tambah Saldo</option>
                                                        <option value="withdraw">Tarik Saldo</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close
                                                </button>
                                                <button type="submit" class="btn btn-warning">Simpan Perubahan</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
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
                "searching": false,
                "ordering": false,
                "info": false,
                "autoWidth": true,
                "responsive": true,
            });
        });
        $(document).ready(function() {

            $('#action').change(function() {
                var action = $(this).val();

                if (action === 'deposit') {
                    $('#depositAmount').show();
                    $('#withdrawAmount').hide();
                } else if (action === 'withdraw') {
                    $('#depositAmount').hide();
                    $('#withdrawAmount').show();
                } else {
                    $('#depositAmount').hide();
                    $('#withdrawAmount').hide();
                }
            });
        });
    </script>
@endsection
