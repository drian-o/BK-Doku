@extends('backoffice.layouts.main')

@section('content')
    <div class="pt-3">
        <button data-toggle="modal" data-target="#tambah" type="button" class="btn btn-success btn-add"><i
                class="fa fa-plus"></i> Buat Promosi Baru</button>
    </div>
    <div class="card mt-3">
        <div class="card-header">
            Data Promosi
        </div>

        <div class="table-responsive">
            <table id="promotion-table" class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th style="text-align: center;">#</th>
                        <th style="text-align: center;">Title</th>
                        <th style="text-align: center;">Bonus</th>
                        <th style="text-align: center;">Jenis Pemberian</th>
                        <th style="text-align: center;">Jenis Promosi</th>
                        <th style="text-align: center;">Minimal Deposite</th>
                        <th style="text-align: center;">Maksimal Deposite</th>
                        <th style="text-align: center;">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Data akan diisi melalui JavaScript -->
                </tbody>
            </table>
        </div>
    </div>
    <div class="modal fade" id="tambah" tabindex="-1" role="dialog" aria-labelledby="modalUserBaru" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form action="/Admin/Dashboard/Promotion" method="POST" enctype="multipart/form-data">
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
                            <label for="keterangan">Keterangan</label>
                            <input id="keterangan" type="text" class="form-control" name="keterangan" value="">
                        </div>
                        <div class="form-group">
                            <label for="bonus">Bonus</label>
                            <input id="bonus" type="text" class="form-control" name="bonus" value="">
                        </div>

                        <div class="form-group">
                            <label for="turnover">Turnover</label>
                            <input id="bonus" type="text" class="form-control" name="turnover" value="">
                        </div>

                        <div class="form-group">
                            <label for="jenis_pemberian">Jenis Pemberian</label>
                            <input id="jenis_pemberian" type="text" class="form-control" name="jenis_pemberian"
                                value="">
                        </div>
                        <div class="form-group">
                            <label for="jenis_promosi">Jenis Promosi</label>
                            <input id="jenis_promosi" type="text" class="form-control" name="jenis_promosi"
                                value="">
                        </div>

                        <div class="form-group">
                            <label for="min_deposite">Minimal Deposite</label>
                            <input id="min_deposite" type="text" class="form-control" name="min_deposite" value="">
                        </div>
                        <div class="form-group">
                            <label for="max_deposite">Maksimal Deposite</label>
                            <input id="max_deposite" type="text" class="form-control" name="max_deposite" value="">
                        </div>
                        <div class="form-group">
                            <label for="tanggal_mulai">Tanggal Mulai</label>
                            <input id="tanggal_mulai" type="date" class="form-control" name="tanggal_mulai"
                                value="">
                        </div>
                        <div class="form-group">
                            <label for="tanggal_akhir">Tanggal Akhir</label>
                            <input id="tanggal_akhir" type="date" class="form-control" name="tanggal_akhir"
                                value="">
                        </div>
                        <div class="form-group">
                            <img class="img-preview img-fluid">
                            <label for="icon" class="form-label @error('icon') is-invalid @enderror ">Image
                                Promosi</label>
                            <input class="form-control" type="file" id="image" name="img"
                                onchange="previewImage()" accept=".jpg, .jpeg, .png , .webp">
                        </div>
                        <div class="form-group">
                            <label for="deskripsi">Deskripsi</label>
                            <input id="body" type="hidden" name="body" value="{{ old('body') }}">
                            <trix-editor input="body"></trix-editor>
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
    @foreach ($promotions as $promotion)
        <!-- Modal -->
        <div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Konfirmasi Hapus</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Apakah Anda yakin ingin menghapus promosi ini?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
                        <form action="/Admin/Dashboard/Promotion/{{ $promotion->id }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-primary">Hapus</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModalLabel">Edit Promosi</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- Form edit promosi -->
                        <form id="editPromotionForm" action="/Admin/Dashboard/Promotion/{{ $promotion->id }}"
                            method="POST" enctype="multipart/form-data">
                            @csrf
                            @method('Put')
                            <input id="edit-id" type="hidden" name="id" value="">
                            <div class="form-group">
                                <label for="judul">Judul</label>
                                <input id="title" type="text" class="form-control" name="title"
                                    value="{{ $promotion->title }}">
                            </div>
                            <div class="form-group">
                                <label for="judul">Keterangan</label>
                                <input id="keterangan" type="text" class="form-control" name="keterangan"
                                    value="{{ $promotion->keterangan }}">
                            </div>
                            <div class="form-group">
                                <label for="judul">Bonus</label>
                                <input id="bonus" type="text" class="form-control" name="bonus"
                                    value="{{ $promotion->bonus }}">
                            </div>

                            <div class="form-group">
                                <label for="keterangan">Jenis Pemberian</label>
                                <input id="jenis_pemberian" type="text" class="form-control" name="jenis_pemberian"
                                    value="{{ $promotion->jenis_pemberian }}">
                            </div>
                            <div class="form-group">
                                <label for="keterangan">Jenis Promosi</label>
                                <input id="jenis_promosi" type="text" class="form-control" name="jenis_promosi"
                                    value="{{ $promotion->jenis_promosi }}">
                            </div>

                            <div class="form-group">
                                <label for="keterangan">Minimal Deposite</label>
                                <input id="min_deposite" type="text" class="form-control" name="min_deposite"
                                    value="{{ $promotion->min_deposite }}">
                            </div>
                            <div class="form-group">
                                <label for="keterangan">Maksimal Deposite</label>
                                <input id="max_deposite" type="text" class="form-control" name="max_deposite"
                                    value="{{ $promotion->max_deposite }}">
                            </div>
                            <div class="form-group">
                                <label for="keterangan">Tanggal Mulai</label>
                                <input id="tanggal_mulai" type="date" class="form-control" name="tanggal_mulai"
                                    value="{{ $promotion->tanggal_mulai }}">
                            </div>
                            <div class="form-group">
                                <label for="keterangan">Tanggal Akhir</label>
                                <input id="tanggal_akhir" type="date" class="form-control" name="tanggal_akhir"
                                    value="{{ $promotion->tanggal_akhir }}">
                            </div>
                            <div class="form-group">
                                <img class="img-preview img-fluid">
                                <label for="icon" class="form-label @error('icon') is-invalid @enderror ">Image
                                    Promosi</label>
                                <input class="form-control" type="file" id="image" name="img"
                                    onchange="previewImage()" accept=".jpg, .jpeg, .png , .webp">
                            </div>
                            <div class="form-group">
                                <label for="keterangan">Deskripsi</label>
                                <input id="body" type="hidden" name="body"
                                    value="{{ old('body', $promotion->body) }}">
                                <trix-editor input="body"></trix-editor>
                            </div>

                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Simpan</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script>
            $(document).ready(function() {

                function loadPromotions() {
                    $.ajax({
                        url: "/get-promotions",
                        type: 'GET',
                        dataType: 'json',
                        success: function(response) {
                            $('#promotion-table tbody').empty();
                            $.each(response.promotions, function(index, promotion) {
                                var row = '<tr data-promotion-id="' + promotion.id + '">' +
                                    '<td style="text-align: center;">' + (index + 1) + '</td>' +
                                    '<td style="text-align: center;">' + promotion.title + '</td>' +
                                    '<td style="text-align: center;">' + promotion.bonus + '</td>' +
                                    '<td style="text-align: center;">' + promotion.jenis_pemberian +
                                    '</td>' +
                                    '<td style="text-align: center;">' + promotion.jenis_promosi +
                                    '</td>' +
                                    '<td style="text-align: center;">' + promotion.min_deposite +
                                    '</td>' +
                                    '<td style="text-align: center;">' + promotion.max_deposite +
                                    '</td>' +
                                    '<td><button class="badge bf-primary btn-edit" data-toggle="modal" data-target="#editModal">Edit</button>' +
                                    '<button type="button" data-toggle="modal" data-target="#confirmationModal" class="badge bg-danger btn-delete">Hapus</button></td>' +
                                    '</tr>';
                                $('#promotion-table tbody').append(row);
                            });
                        },
                        error: function(xhr, status, error) {
                            console.error(error);
                        }
                    });
                }


                loadPromotions();

                $(document).on('click', '.btn-edit', function() {
                    var promotionId = $(this).closest('tr').data(
                        'promotion-id'); // Ambil ID promosi dari data atribut di baris tabel
                    // Gunakan AJAX untuk mendapatkan data promosi berdasarkan ID
                    $.ajax({
                        url: "/Admin/Dashboard/Promotion/" +
                            promotionId, // Ganti dengan rute yang benar untuk mengambil data promosi berdasarkan ID
                        type: 'GET',
                        dataType: 'json',
                        success: function(response) {
                            var promotion = response.promotion;

                            // Isi nilai input dalam form edit dengan data promosi yang sesuai
                            $('#edit-id').val(promotion.id);
                            $('#edit-title').val(promotion.title);
                            $('#edit-keterangan').val(promotion.keterangan);
                            $('#edit-bonus').val(promotion.bonus);
                            $('#edit-jenis_pemberian').val(promotion.jenis_pemberian);
                            $('#edit-jenis_promosi').val(promotion.jenis_promosi);
                            $('#edit-min_deposite').val(promotion.min_deposite);
                            $('#edit-max_deposite').val(promotion.max_deposite);
                            $('#edit-tanggal_mulai').val(promotion.tanggal_mulai);
                            $('#edit-tanggal_akhir').val(promotion.tanggal_akhir);
                            $('#edit-tanggal_akhir').val(promotion.img);
                            $('#edit-tanggal_akhir').val(promotion.body);


                            // Tampilkan modal edit
                            $('#editModal').modal('show');
                        },
                        error: function(xhr, status, error) {
                            console.error(error);
                        }
                    });
                });

                $(document).on('click', '#confirmDelete', function() {
                    var promotionId = $(this).closest('tr').data('promotion-id');

                    // Kirim permintaan AJAX untuk menghapus promosi berdasarkan ID
                    $.ajax({
                        url: "/Admin/Dashboard/Promotion/" + promotionId,
                        type: 'DELETE',
                        dataType: 'json',
                        success: function(response) {

                            loadPromotions();
                            // Sembunyikan modal setelah penghapusan berhasil
                            $('#confirmationModal').modal('hide');
                        },
                        error: function(xhr, status, error) {
                            console.error(error);
                        }
                    });
                });
            });
        </script>
    @endforeach

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


        $('#promotion-table').DataTable({
            "paging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": true,
            "info": true,
            "autoWidth": false,
            "responsive": true,
        });
    </script>
    <link rel="stylesheet" type="text/css" href="/css/trix.css">
    <script type="text/javascript" src="/js/trix.js"></script>
    <style>
        trix-toolbar [data-trix-button-group="file-tools"] {
            display: none
        }
    </style>
    <script>
        document.addEventListener('trix-file-accept'.function(e)() {
            e.preventDefaults();
        })
    </script>
    <script>
        $(document).on('click', '.btn-add', function(e) {
            $('#modal_member').text('Promosi');
            $('#title').val('');
            $('#keterangan').val('');
            $('#bonus').val('');
            $('#jenis_pemberian').val('');
            $('#jenis_promosi').val('');
            $('#min_deposite').val('');
            $('#max_deposite').val('');
            $('#tanggal_mulai').val('');
            $('#tanggal_akhir').val('');
            $('#image').val('');
            $('#body').val('');
        });
    </script>
@endsection
