<?php
use App\Models\Setting;

$setting = Setting::first();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LN GAMING WHITELABEL</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('/../../Admin/plugins/fontawesome-free/css/all.min.css') }}">
    {{-- {{ asset('/css/bootstrap-tagsinput.css') }} --}}
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Tempusdominus Bootstrap 4 -->
    <link rel="stylesheet"
        href="{{ asset('/../../Admin/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css') }}">
    <!-- iCheck -->
    <link rel="stylesheet" href="{{ asset('/../../Admin/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('/../../Admin/dist/css/adminlte.min.css') }}">
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="{{ asset('/../../Admin/plugins/overlayScrollbars/css/OverlayScrollbars.min.css') }}">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="{{ asset('/../../Admin/plugins/daterangepicker/daterangepicker.css') }}">
    <!-- summernote -->
    <link rel="stylesheet" href="{{ asset('/../../Admin/plugins/summernote/summernote-bs4.min.css') }}">

    <!-- DataTables -->
    <link rel="stylesheet" href="{{ asset('/../../Admin/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css') }}">
    <link rel="stylesheet"
        href="{{ asset('/../../Admin/plugins/datatables-responsive/css/responsive.bootstrap4.min.css') }}">
    <link rel="stylesheet"
        href="{{ asset('/../../Admin/plugins/datatables-buttons/css/buttons.bootstrap4.min.css') }}">
    <!-- jQuery -->
    <script src="{{ asset('/../../Admin/plugins/jquery/jquery.min.js') }}"></script>
    <!-- jQuery UI 1.11.4 -->
    <script src="{{ asset('/../../Admin/plugins/jquery-ui/jquery-ui.min.js') }}"></script>
    <!-- Custom style -->
    <link rel="stylesheet" href="{{ asset('/../../Admin/css/backoffice.css') }}">
    <link rel="icon" href="{{ asset('/../../Admin/image/NYOBAINmini.png') }}" type="image/gif">


</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">

        @include('backoffice.layouts.navbar')

        @include('backoffice.layouts.sidebar')

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">

            <!-- Main content -->
           <section class="content">
                <div class="container-fluid">
                <audio id="notification-deposit" src="/../../assets/mp3/notif1.wav" preload="auto"></audio>
                <audio id="notification-withdraw" src="/../../assets/mp3/notif1.wav" preload="auto"></audio>
                    @yield('content')

                </div><!-- /.container-fluid -->
            </section> 
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
        <footer class="main-footer">
            <strong>
                <!-- --> &copy; 2024 <a href="#"></a>.
            </strong>
            "Semakin keras saya bekerja, maka semakin banyak keberuntungan yang saya miliki."

            <div class="float-right d-none d-sm-inline-block">
                <a target="_blank" href="" class="href">
                    <b style="color:black; ">ONIX WL</b>
                </a>
            </div>
        </footer>

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->

    <!-- jQuery -->
    <script src="{{ asset('/../../Admin/plugins/jquery/jquery.min.js') }}"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
    <!-- jQuery UI 1.11.4 -->
    <script src="{{ asset('/../../Admin/plugins/jquery-ui/jquery-ui.min.js') }}"></script>
    <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
    <script>
        $.widget.bridge('uibutton', $.ui.button)
    </script>
    <!-- Bootstrap 4 -->
    <script src="{{ asset('/../../Admin/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <!-- jQuery Knob Chart -->
    <script src="{{ asset('/../../Admin/plugins/jquery-knob/jquery.knob.min.js') }}"></script>
    <!-- daterangepicker -->
    <script src="{{ asset('/../../Admin/plugins/moment/moment.min.js') }}"></script>
    <script src="{{ asset('/../../Admin/plugins/daterangepicker/daterangepicker.js') }}"></script>
    <!-- Tempusdominus Bootstrap 4 -->
    <script src="{{ asset('/../../Admin/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js') }}">
    </script>
    <!-- Summernote -->
    <script src="{{ asset('/../../Admin/../../Admin/../../Admin/plugins/summernote/summernote-bs4.min.js') }}"></script>
    <!-- overlayScrollbars -->
    <script src="{{ asset('/../../Admin/../../Admin/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js') }}">
    </script>
    <!-- AdminLTE App -->
    <script src="{{ asset('/../../Admin/dist/js/adminlte.js') }}"></script>
    <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    <script src="{{ asset('/../../Admin/dist/js/pages/dashboard.js') }}"></script>

    <!-- DataTables  & Plugins -->
    <script src="{{ asset('/../../Admin/plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('/../../Admin/../../Admin/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('/../../Admin/plugins/datatables-responsive/js/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('/../../Admin/plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('/../../Admin/plugins/datatables-buttons/js/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('/../../Admin/plugins/datatables-buttons/js/buttons.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('/../../Admin/plugins/jszip/jszip.min.js') }}"></script>
    <script src="{{ asset('/../../Admin/plugins/pdfmake/pdfmake.min.js') }}"></script>
    <script src="{{ asset('/../../Admin/plugins/pdfmake/vfs_fonts.js') }}"></script>
    <script src="{{ asset('/../../Admin/plugins/datatables-buttons/js/buttons.html5.min.js') }}"></script>
    <script src="{{ asset('/../../Admin/plugins/datatables-buttons/js/buttons.print.min.js') }}"></script>
    <script src="{{ asset('/../../Admin/plugins/datatables-buttons/js/buttons.colVis.min.js') }}"></script>
     <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        function checkDeposits() {
            $.ajax({
                url: '/deposits/today',
                method: 'GET',
                success: function(data) {
                    if (data.length > 0) {
                        // Putar audio jika ada deposit dengan status 1
                        const audioElement = document.getElementById('notification-deposit');
                        audioElement.play().catch((error) => console.error('Pemutaran audio gagal:', error));
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Gagal mengambil data:', error);
                }
            });
        }


        setInterval(checkDeposits, 2000);
    </script>
      <script>
        function checkWithdraws() {
            $.ajax({
                url: '/withdraw/today',
                method: 'GET',
                success: function(data) {
                    if (data.length > 0) {
                        // Putar audio jika ada deposit dengan status 1
                        const audioElements = document.getElementById('notification-withdraw');
                        audioElements.play().catch((error) => console.error('Pemutaran audio gagal:', error));
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Gagal mengambil data:', error);
                }
            });
        }


        setInterval(checkWithdraws, 2000);
    </script>
</body>

</html>
