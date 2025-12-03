@extends('backoffice.layouts.main')

@section('content')
    @if (Auth()->User()->role == 'admin')
        <div class="container-fluid">
            <div class="card  mt-3">
                <div class="card-header">
                    <h4>Tabel Deposit</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="deposit-table1" class="table table-bordered table-hover">
                            <thead>
                                <tr class="text-center">
                                    <th scope="col">No.</th>
                                    <th scope="col">Tanggal</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Nama Pengirim</th>
                                    <th scope="col">Bank</th>
                                    <th scope="col">No. Rekening</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Bukti</th>
                                    <th scope="col">Acc</th>
                                    <th scope="col">Tolak</th>
                                </tr>
                            </thead>
                            @foreach ($Tranksaksi as $Tranksaksi)
                                <tbody>
                                    <tr>
                                        <th>{{ $loop->iteration }}</th>
                                        <td>{{ $Tranksaksi->created_at->diffForHumans() }}</td>
                                        <td>{{ $Tranksaksi->User->username }}</td>
                                        <td>{{ $Tranksaksi->User->accName }}</td>
                                        <td>{{ $Tranksaksi->User->bank }}</td>
                                        <td>{{ $Tranksaksi->User->accNumber }}</td>
                                        <td>{{ $Tranksaksi->amount }}</td>
                                        @if ($Tranksaksi->status_id == 1)
                                            <td>Pending</td>
                                        @else
                                            <td>Tidak Jelas</td>
                                        @endif
                                        <td>
                                            @if ($Tranksaksi->img)
                                                <img src="{{ asset('storage/' . $Tranksaksi->img) }}" alt="Bukti Transfer"
                                                    class="img-fluid " width="70" height="100">
                                            @else
                                                <h6>No Image</h6>
                                            @endif
                                        </td>
                                        <td class="d-flex justify-content-center">
                                            <form class="form-grup"
                                                action="/Admin/Dashboard/Tranksaksi/{{ $Tranksaksi->id }}/update"
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
                                            <form class="form-grup"
                                                action="/Admin/Dashboard/Tranksaksi/{{ $Tranksaksi->id }}/update"
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
                                </tbody>
                            @endforeach
                        </table>
                    </div>
                </div>
            </div>
        </div>
    @elseif(Auth()->User()->role == 'promotor')
        <div class="container-fluid">
            <div class="card  mt-3">
                <div class="card-header">
                    <h4>Tabel Deposit</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="deposit-table2" class="table table-bordered table-hover">
                            <thead>
                                <tr class="text-center">
                                    <th scope="col">No.</th>
                                    <th scope="col">Tanggal</th>
                                    <th scope="col">Parent Ref</th>
                                    <th scope="col">Nama Pengirim</th>
                                    <th scope="col">Bank</th>
                                    <th scope="col">No. Rekening</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Bukti</th>
                                    <th scope="col">Acc</th>
                                    <th scope="col">Tolak</th>
                                </tr>
                            </thead>
                            @foreach ($userrefDeposite as $Tranksaksi)
                                <tbody>
                                    <tr>
                                        <th>{{ $loop->iteration }}</th>
                                        <td>{{ $Tranksaksi->created_at->diffForHumans() }}</td>
                                        <td>{{ $Tranksaksi->ref }}</td>
                                        <td>{{ $Tranksaksi->User->username }}</td>
                                        <td>{{ $Tranksaksi->User->bank }}</td>
                                        <td>{{ $Tranksaksi->User->accNumber }}</td>
                                        <td>{{ $Tranksaksi->amount }}</td>
                                        @if ($Tranksaksi->status_id == 1)
                                            <td>Pending</td>
                                        @else
                                            <td>Tidak Jelas</td>
                                        @endif
                                        <td>
                                            @if ($Tranksaksi->img)
                                                <img src="{{ asset('storage/' . $Tranksaksi->img) }}" alt="Bukti Transfer"
                                                    class="img-fluid " width="70" height="100">
                                            @else
                                                <h6>No Image</h6>
                                            @endif
                                        </td>
                                        <td class="d-flex justify-content-center">
                                            <form class="form-grup"
                                                action="/Admin/Dashboard/Tranksaksi/{{ $Tranksaksi->id }}" method="POST">
                                                @csrf
                                                @method('PUT')
                                                <input type="hidden" name="action" value="acc">
                                                <button type="submit" class="badge bg-success">
                                                    ACCEPT
                                                </button>
                                            </form>
                                        </td>
                                        <td>
                                            <form class="form-grup"
                                                action="/Admin/Dashboard/Tranksaksi/{{ $Tranksaksi->id }}" method="Post"
                                                class="d-flex mx-2">

                                                @method('PUT')
                                                @csrf
                                                <input type="hidden" name="action" value="tolak">
                                                <button class="badge bg-danger" onclick="return confirm('Are you sure?')">
                                                    Tolak
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                </tbody>
                            @endforeach
                        </table>
                    </div>
                </div>
            </div>
        </div>
    @endif
    <script>
        $(document).ready(function() {

            $('#deposit-table1').DataTable({
                "paging": true,
                "lengthChange": false,
                "searching": true,
                "ordering": true,
                "info": true,
                "autoWidth": false,
                "responsive": true,
            });

            $('#deposit-table2').DataTable({
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
@endsection
