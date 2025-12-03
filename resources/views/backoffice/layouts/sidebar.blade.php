<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="{{ URL::to('backoffice') }}" class="brand-link">
        <img src="{{ asset('/../../Admin/dist/img/AdminLTELogo.png') }}" alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light"> ADMIN <b>LN GAMING</b></span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">

            <div class="info">
                <a href="/" class="d-block text">ADMIN : {{ Auth()->User()->username }}</a>
            </div>
        </div>

        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                data-accordion="false">
                @if (Auth()->User()->role == 'promotor')
                    <li class="nav-header">Dashboard Menu</li>
                    <li class="nav-item">
                        <a href="{{ URL::to('Admin/Dashboard') }}" class="nav-link">
                            <i class="nav-icon 	fas fa-home"></i>
                            <p>
                                Dashboard
                            </p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-balance-scale-left"></i>
                            <p>
                                Payment
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">

                            <li class="nav-item">
                                <a href="/Admin/Dashboard/Tranksaksi" class="nav-link">
                                    <i class="fas fa-donate nav-icon"></i>
                                    <p>Deposit</p>
                                </a>
                            </li>
                            <li class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="/Admin/Dashboard/Withdraw" class="nav-link">
                                    <i class="fas fa-wallet nav-icon"></i>
                                    <p>Withdraw</p>
                                </a>
                            </li>
                            <li class="nav nav-treeview">

                            <li class="nav nav-treeview">

                                <a href="{{ URL::to('pernyataan') }}" class="nav-link">
                                    <i class="fab fa-bitcoin nav-icon"></i>
                                    <p>Pernyataan</p>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a href="{{ URL::to('profil_admin') }}" class="nav-link">
                            <i class="nav-icon fas fa-user-tie"></i>
                            <p>
                                Profil Admin
                            </p>
                        </a>
                    </li>
                @elseif (Auth()->User()->role == 'admin')
                    <li class="nav-header">Dashboard Menu</li>
                    <li class="nav-item">
                        <a href="{{ URL::to('Admin/Dashboard') }}" class="nav-link">
                            <i class="nav-icon 	fas fa-home"></i>
                            <p>
                                Dashboard
                            </p>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="/Admin/Dashboard/Manage-Bank" class="nav-link">
                            <i class="nav-icon fa fa-credit-card"></i>
                            <p>
                                Data Bank
                            </p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/Admin/Dashboard/Voucher" class="nav-link">
                            <i class="nav-icon fa fa-ticket-alt"></i>
                            <p>
                                Voucher
                            </p>
                        </a>
                    </li>
                    <li class="nav-header">Data Payment</li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-balance-scale-left"></i>
                            <p>
                                Payment
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">

                            <li class="nav-item">
                                <a href="/Admin/Dashboard/Tranksaksi" class="nav-link">
                                    <i class="fas fa-donate nav-icon"></i>
                                    <p>Deposit</p>
                                </a>
                            </li>
                            <li class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="/Admin/Dashboard/Withdraw" class="nav-link">
                                    <i class="fas fa-donate nav-icon"></i>
                                    <p>Withdraw</p>
                                </a>
                            </li>
                            <li class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="/inject-saldo" class="nav-link">
                                    <i class="fas fa-ghost nav-icon"></i>
                                    <p>Inject Saldo</p>
                                </a>

                            <li class="nav nav-treeview">

                                <a href="{{ URL::to('pernyataan') }}" class="nav-link">
                                    <i class="fab fa-wallet nav-icon"></i>
                                    <p>Pernyataan</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {{--  --}}
                    <li class="nav-header">Data KYC</li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-balance-scale-left"></i>
                            <p>
                                KYC Management
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">

                            <li class="nav-item">
                                <a href="/Admin/Dashboard/Kyc" class="nav-link">
                                    <i class="fas fa-donate nav-icon"></i>
                                    <p>Verifikasi KYC</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-header">Profile Member</li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon far fa-id-card"></i>
                            <p>
                                Member Management
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>

                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="/Admin/Dashboard/User" class="nav-link">
                                    <i class="fas fa-ghost nav-icon"></i>
                                    <p>Data Member</p>
                                </a>
                            </li>
                        </ul>

                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="/history/transaksi" class="nav-link">
                                    <i class="fas fa-eye nav-icon"></i>
                                    <p>Histori Transaksi</p>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-header">Setting View</li>
                    <li class="nav-item">
                        <a href="/Setting" class="nav-link">
                            <i class="nav-icon fas fa-fingerprint"></i>
                            <p>
                                Setting
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>

                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="/Setting" class="nav-link">
                                    <i class="fas fa-tshirt nav-icon"></i>
                                    <p>Setting Web</p>
                                </a>
                            </li>
                        </ul>

                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="/Admin/Dashboard/Banner" class="nav-link">
                                    <i class="fas fa-film nav-icon"></i>
                                    <p>Benner</p>
                                </a>
                            </li>
                        </ul>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="/Admin/Dashboard/Promotion" class="nav-link">
                                    <i class="fas fa-bullhorn nav-icon"></i>
                                    <p>Promosi</p>
                                </a>
                            </li>
                        </ul>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="{{ URL::to('bonus') }}" class="nav-link">
                                    <i class="fas fa-toilet-paper nav-icon"></i>
                                    <p>Bonus</p>
                                </a>
                            </li>
                        </ul>

                    </li>
                    <!-- luckyspin -->
                    <li class="nav-header">Fitur Permainan</li>
                    <li class="nav-item">
                        <a href="/history-play/user" class="nav-link">
                            <i class="nav-icon fas fa-dice"></i>
                            <p>
                                History Play User
                            </p>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="/game_setting" class="nav-link">
                            <i class="nav-icon fas fa-dice"></i>
                            <p>
                                Setting Scatter
                            </p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/Admin/Dashboard/Game-setting" class="nav-link">
                            <i class="fas fa-gamepad nav-icon"></i>
                            <p>Game</p>
                        </a>
                    </li>
                    <li class="nav-header">Profile</li>
                    <li class="nav-item">
                        <a href="/Admin/Profile" class="nav-link">
                            <i class="nav-icon fas fa-user-tie"></i>
                            <p>
                                Profil Admin
                            </p>
                        </a>
                    </li>
                @endif

            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
