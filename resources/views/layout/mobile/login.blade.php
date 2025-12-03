@extends('layout.mobile.main')
@section('mobile')
    <div class="standard-form-container login-outer-container">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <form action="/login" method="post">
                        @csrf
                        <div class="login-panel">
                            <div class="form-group">
                                <label>
                                    Nama Pengguna
                                </label>
                                <input type="text" name="username" class="form-control" placeholder="Nama Pengguna">
                            </div>
                            <div class="form-group standard-password-field">
                                <label>
                                    Kata Sandi
                                </label>
                                <input type="password" name="password" class="form-control" placeholder="Kata Sandi"
                                    id="password_input">
                                <i class="glyphicon glyphicon-eye-close" id="password_input_trigger"></i>
                            </div>


                            <div class="standard-button-group">
                                <input type="submit" class="standard-button" value="Masuk">
                            </div>
                            <div class="standard-button-group register-field">
                                Belum punya akun?
                                <a href="/registerasi" class="register-button">
                                    Daftar Sekarang
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
