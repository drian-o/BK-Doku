@extends('backoffice.layouts.main')

@section('content')
    <div class="card mt-3">
        <div class="card-header">
            Profil Administrator
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="form-text text-muted">Username :</label>
                        <input name="username" type="text" class="form-control" aria-describedby="emailHelp"
                            placeholder="Username" value="{{ Auth()->User()->username }}" readonly>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label class="form-text text-muted">Email :</label>
                        <input name="email" type="email" class="form-control" placeholder="Email"
                            value="{{ Auth()->User()->email }}" readonly>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label class="form-text text-muted">No Telepon :</label>
                        <input name="telp" type="text" class="form-control" value="+62{{ Auth()->User()->phone }}"
                            placeholder="No Telepon" readonly>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label class="form-text text-muted">Jabatan :</label>
                        @if (Auth::user()->id >= 1)
                            @php
                                $jabatan = 'developer';
                            @endphp
                        @else
                            @php
                                $jabatan = 'admin';
                            @endphp
                        @endif
                        <input type="text" class="form-control" value="{{ Auth()->User()->role }}" placeholder="Jabatan"
                            readonly>
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="col-6">
                    <!-- <div class="form-group">
                                                                    <label class="form-text text-muted">Photo :</label>
                                                                    <input name="photo" type="file" class="form-control uploads" value=""
                                                                        accept="image/png, image/jpg, image/jpeg">
                                                                </div> -->
                </div>
                <div class="col-6">
                </div>
            </div>

        </div>
    </div>
@endsection
