@extends('backoffice.layouts.main')
@section('content')
    <div class="card mt-3">
        <div class="card-header">
            Verifikasi
        </div>
        <div class="card-body">
            @include('backoffice.layouts.msg_bar')
            <div class="table-responsive">
                <table id="example2" class="table table-bordered table-hover">
                    <thead>
                        <tr class="text-center">
                            <th>No</th>
                            <th scope="col">Tanggal</th>
                            <th>Username</th>
                            <th>Full Name</th>
                            <th>Berkas</th>
                            <th>Acc</th>
                            <th>Tolak</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($verifikasi as $verifikasi)
                            <tr class="text-center">
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $verifikasi->created_at }}</td>
                                <td>{{ $verifikasi->User->username }}</td>
                                <td>{{ $verifikasi->fullName }}</td>
                                <td>
                                    @if ($verifikasi->img)
                                        <img src="{{ asset('storage/' . $verifikasi->img) }}" alt="Bukti Transfer"
                                            class="img-fluid " width="70" height="100">
                                    @else
                                        <h6>No Image</h6>
                                    @endif
                                </td>
                                <td class="d-flex justify-content-center">
                                    <form class="form-grup" action="/Admin/Dashboard/Kyc/{{ $verifikasi->id }}"
                                        method="POST">
                                        @csrf
                                        @method('PUT')
                                        <input type="hidden" name="action" value="acc">
                                        <button type="submit" class="badge bg-success">
                                            ACCEPT
                                        </button>
                                    </form>
                                </td>
                                <td>
                                    <form class="form-grup" action="/Admin/Dashboard/Kyc/{{ $verifikasi->id }}"
                                        method="Post" class="d-flex mx-2">

                                        @method('PUT')
                                        @csrf
                                        <input type="hidden" name="action" value="tolak">
                                        <button class="badge bg-danger" onclick="return confirm('Are you sure?')">
                                            Tolak
                                        </button>
                                    </form>
                                </td>
                            </tr>
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
                "ordering": false,
                "info": false,
                "autoWidth": true,
                "responsive": true,
            });
        });
    </script>
@endsection
