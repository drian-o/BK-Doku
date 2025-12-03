@extends('backoffice.layouts.main')

@section('content')
    <div class="card mt-3">
        <div class="card-header">
            Pengaturan Tampilan Website
        </div>
        <div class="card-body">
            <form action="/Setting" method="POST" enctype="multipart/form-data">
                @method('POST')
                @csrf
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="form-text text-muted">Nama Website :</label>
                            <input name="web" type="text" class="form-control" placeholder="Nama Website"
                                value="">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label class="form-text text-muted">No TLP:</label>
                            <input name="telp" type="number" class="form-control" placeholder="Nomor Telepon format +62"
                                value="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label class="form-text text-muted">No Whatsapp :</label>
                            <input name="whatsapp" type="number" class="form-control" value=""
                                placeholder="Nomor Whatsapp format +62">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label class="form-text text-muted">Telegram :</label>
                            <input name="telegram" type="number" class="form-control" value=""
                                placeholder="Akun Telegram format +62">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-text text-muted">Running Text :</label>
                            <input name="running_text" type="text" class="form-control" value=""
                                placeholder="Running Text">
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <img class="img-preview-logo img-fluid">
                            <label for="logo" class="form-label @error('logo') is-invalid @enderror ">Logo Web</label>
                            <input class="form-control" type="file" id="logo" name="logo"
                                onchange="previewLogo()" accept=".jpg, .jpeg, .png , .webp , .gif">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <img class="img-preview img-fluid">
                            <label for="icon" class="form-label @error('icon') is-invalid @enderror ">Icon Web</label>
                            <input class="form-control" type="file" id="image" name="icon"
                                onchange="previewImage()" accept=".jpg, .jpeg, .png , .webp">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="form-text text-muted">Live Chat :</label>
                            <textarea name="livechat" type="text" class="form-control" placeholder="Live Chat"></textarea>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label for="Theme" class="form-text text-muted">Theme :</label>
                            <select name="theme" class="form-control">
                                <option value="Mpo_black">
                                    Mpo - Theme 1
                                </option>
                                <option value="Mpo_blue">
                                    Mpo - Theme 2
                                </option>
                                <option value="Mpo_red">
                                    Mpo - Theme 3
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mb-5">
                        <label for="body" class="form-label">SEO</label>
                        <input id="body" type="hidden" name="seo" value="{{ old('body') }}">
                        <trix-editor input="body"></trix-editor>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Perbaharui</button>
            </form>
        </div>
    </div>

    <script>
        function previewImage() {
            const image = document.querySelector('#image');
            const imagePreview = document.querySelector('.img-preview');

            imagePreview.style.display = "block";

            const oFReader = new FileReader();
            oFReader.readAsDataURL(image.files[0]);

            oFReader.onload = function(oFREvent) {
                imagePreview.src = oFREvent.target.result;
            }

        }
    </script>
    <script>
        function previewLogo() {
            const image = document.querySelector('#logo');
            const imagePreview = document.querySelector('.img-preview-logo');

            imagePreview.style.display = "block";

            const oFReader = new FileReader();
            oFReader.readAsDataURL(image.files[0]);

            oFReader.onload = function(oFREvent) {
                imagePreview.src = oFREvent.target.result;
            }

        }
    </script>

    <link rel="stylesheet" type="text/css" href="/css/trix.css">
    <script type="text/javascript" src="/js/trix.js"></script>
    <style>
        trix-toolbar [data-trix-button-group="file-tools"] {
            display: none
        }
    </style>
    <script>
        document.addEventListener('trix-file-accept'.function(e) {
            e.preventDefaults();
        })
    </script>
@endsection
