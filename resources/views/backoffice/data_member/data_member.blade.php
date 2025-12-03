@extends('backoffice.layouts.main')
@section('content')
    <div class="pt-3">
        <button data-toggle="modal" data-target="#tambah" type="button" class="btn btn-success btn-add"><i
                class="fa fa-plus"></i> Member Baru</button>
    </div>
    <div class="modal fade" id="tambah" tabindex="-1" role="dialog" aria-labelledby="modalUserBaru" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form action="/Admin/Dashboard/User" method="POST" enctype="multipart/form-data">
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
                            <label for="judul">Name</label>
                            <input id="nama" type="text" class="form-control" name="username" value="">
                        </div>
                        <div class="form-group">
                            <label for="judul">Password</label>
                            <input id="password" type="text" class="form-control" name="password" value="">
                        </div>
                        <div class="form-group">
                            <label for="judul">Password Confirmation</label>
                            <input id="password_confirmation" type="text" class="form-control"
                                name="password_confirmation" value="">
                        </div>

                        <div class="form-group">
                            <label for="keterangan">Email</label>
                            <input id="email" type="email" class="form-control" name="email" value="">
                        </div>
                        <div class="form-group">
                            <label for="keterangan">WA</label>
                            <input id="telp" type="text" class="form-control" name="phone" value="">
                        </div>

                        <div class="form-group">
                            <label for="keterangan">Reff Code</label>
                            <input id="ref_code" type="text" class="form-control" name="ref" value="">
                        </div>
                        <div class="form-group">
                            <label for="keterangan">Nama Rek</label>
                            <input id="nama_rek" type="text" class="form-control" name="accName" value=""
                                id="keterangan">
                        </div>
                        <div class="form-group">
                            <label for="keterangan">Bank</label>
                            <select id="bank" name="bank" class="form-control">
                                @foreach ($rekening as $item)
                                    <option value="{{ $item->nama_bank }}" readonly>{{ $item->nama_bank }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="keterangan">No Rek</label>
                            <input id="no_rek" type="text" class="form-control" name="accNumber" value=""
                                id="keterangan">
                        </div>
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
                            <th scope="col">Tanggal</th>
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
                        @foreach ($users as $item)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $item->created_at }}</td>
                                <td>{{ $item->username }}</td>
                                <td>{{ $item->ref }}</td>
                                <td>{{ number_format($item->saldo) }}</td>
                                <td>{{ $item->email }}</td>
                                <td>{{ $item->phone }}</td>
                                <td>{{ $item->bank ?? '' }}</td>
                                <td>{{ $item->accName }}</td>
                                <td>{{ $item->accNumber }}</td>
                                <td>

                                    <button data-toggle="modal" data-target="#editUserModal{{ $item->id }}"
                                        data-member="{{ json_encode($item) }}" type="button"
                                        class="btn btn-success btn-ubah">Ubah</button>
                                </td>
                            </tr>

                            <!-- Modal -->
                            <div class="modal fade" id="editUserModal{{ $item->id }}" tabindex="-1" role="dialog"
                                aria-labelledby="modalEditUser" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <form id="updateUserForm{{ $item->id }}"
                                            action="{{ route('user.update', $item->id) }}" method="POST"
                                            enctype="multipart/form-data">
                                            @csrf
                                            @method('PUT')
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="modal_member">Ubah Data User</h5>
                                                <button type="button" class="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <input type="hidden" name="id" value="{{ $item->id }}">
                                                <div class="form-group">
                                                    <label for="username">Username</label>
                                                    <input type="text" class="form-control"
                                                        id="username{{ $item->id }}" name="username"
                                                        value="{{ $item->username }}" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="password">Password</label>
                                                    <input type="password" class="form-control"
                                                        id="password{{ $item->id }}" name="password">
                                                </div>
                                                <div class="form-group">
                                                    <label for="password_confirmation">Password Confirmation</label>
                                                    <input type="password" class="form-control"
                                                        id="password_confirmation{{ $item->id }}"
                                                        name="password_confirmation">
                                                </div>
                                                <div class="form-group">
                                                    <label for="email">Email</label>
                                                    <input type="email" class="form-control"
                                                        id="email{{ $item->id }}" name="email"
                                                        value="{{ $item->email }}" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="phone">Phone</label>
                                                    <input type="text" class="form-control"
                                                        id="phone{{ $item->id }}" name="phone"
                                                        value="{{ $item->phone }}" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="ref">Reff Code</label>
                                                    <input type="text" class="form-control"
                                                        id="ref{{ $item->id }}" name="ref"
                                                        value="{{ $item->ref }}">
                                                </div>
                                                <div class="form-group">
                                                    <label for="accName">Nama Rek</label>
                                                    <input type="text" class="form-control"
                                                        id="accName{{ $item->id }}" name="accName"
                                                        value="{{ $item->accName }}" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="bank">Bank</label>
                                                    <input type="text" class="form-control"
                                                        id="bank{{ $item->id }}" name="bank"
                                                        value="{{ $item->bank }}" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="accNumber">No Rek</label>
                                                    <input type="text" class="form-control"
                                                        id="accNumber{{ $item->id }}" name="accNumber"
                                                        value="{{ $item->accNumber }}" required>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-dismiss="modal">Close</button>
                                                <button type="submit" class="btn btn-primary">Save changes</button>
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
                "searching": true,
                "ordering": true,
                "info": true,
                "autoWidth": false,
                "responsive": true,
            });



            $(document).on('click', '.btn-add', function(e) {

                $('#modal_member').text('User Tambah');
                $('#id').val('');
                $('#nama').val('');
                $('#password_confirmation').val('');
                $('#password').val('');
                $('#email').val('');
                $('#telp').val('');
                $('#ref_code').val('');
                $('#nama_rek').val('');
                $('#bank').val('');
                $('#no_rek').val('');
            });
        });
    </script>
@endsection
