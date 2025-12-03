@extends('backoffice.layouts.main')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card pt-3 mt-3">
                    <div class="card-header">
                        <h4>
                            Tabel Withdraw
                        </h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered border-primary text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">No.</th>
                                        <th scope="col">Waktu Withdraw</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Pemilik Bank</th>
                                        <th scope="col">Bank</th>
                                        <th scope="col">No. Rekening</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                @foreach ($Tranksaksi as $item)
                                    <tbody>
                                        <tr>
                                            <th scope="row">{{ $loop->iteration }}</th>
                                            <td>{{ $item->created_at->diffForHumans() }}</td>
                                            <td>{{ $item->User->username }}</td>
                                            <td>{{ $item->User->bank }}</td>
                                            <td>{{ $item->User->accName }}</td>
                                            <td>{{ $item->User->accNumber }}</td>
                                            <td>{{ $item->amount }}</td>


                                            <td class="d-flex justify-content-center">

                                                <form action="/Admin/Dashboard/Withdraw/{{ $item->id }}/update"
                                                    method="POST">
                                                    @csrf
                                                    @method('put')
                                                    <input type="hidden" name="action" value="acc">
                                                    <button type="submit" class="badge bg-success mx-2">
                                                        ACCEPT
                                                    </button>
                                                </form>

                                                <form action="/Admin/Dashboard/Withdraw/{{ $item->id }}/update"
                                                    method="Post" class="d-flex mx-2">

                                                    @method('PUT')
                                                    @csrf
                                                    <input type="hidden" name="action" value="tolak">
                                                    <button class="badge bg-danger border-0"
                                                        onclick="return confirm('Are you sure?')">
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
        </div>
    </div>
@endsection
