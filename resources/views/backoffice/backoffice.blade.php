@extends('backoffice.layouts.main')

@section('content')
    <div class="row">
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
                <div class="inner">
                    <h3>💰</h3>

                    <p>DEPOSIT MASUK NI!</p>
                </div>
                <div class="icon">
                    <i class="fas fa-rocket"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
                <div class="inner">
                    <h3>1M<sup style="font-size: 20px">JACKPOT!</sup></h3>

                    <p>Inject Saldo Member</p>
                </div>
                <div class="icon">
                    <i class="fas fa-skull-crossbones"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
                <div class="inner">
                    <h3><sup style="font-size: 20px">BLAST TERUS!</sup></h3>

                    <p>Member Baru</p>
                </div>
                <div class="icon">
                    <i class="fas fa-id-card-alt"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->

        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-secondary">
                <div class="inner">
                    <h3>GAME</h3>

                    <p>All Provider</p>
                </div>
                <div class="icon">
                    <i class="fas fa-gamepad"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <!-- TOTAL -->

            <div class="small-box bg-light">
                <div class="inner">
                    <h6 style="color:blue;">Total User</h6>

                    <p>{{ $totalUser }}</p>
                </div>
                <div class="icon">
                    <i class="fas fa-venus-mars" style="
                        font-size: 50px;"></i>
                </div>
                <!-- <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> -->
            </div>
        </div>
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-light">
                <div class="inner">
                    <h6 style="color:blue;">Deposit Pending</h6>
                    <p>{{ $pendingDeposite }}</p>
                </div>
                <div class="icon">
                    <i class="fas fa-venus-mars" style="
                        font-size: 50px;"></i>
                </div>
                <!-- <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> -->
            </div>
        </div>
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-light">
                <div class="inner">
                    <h6 style="color:blue;">Witdraw Pending</h6>

                    <p>{{ $pendingWithdraw }}</p>
                </div>
                <div class="icon">
                    <i class="fas fa-venus-mars" style="
                        font-size: 50px;"></i>
                </div>
                <!-- <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> -->
            </div>
        </div>
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-light">
                <div class="inner">
                    <h6 style="color:blue;">Balance Agent</h6>

                    <p>IDR {{ number_format($agentBalance) }}</p>
                </div>
                <div class="icon">
                    <i class="fas fa-venus-mars" style="
                        font-size: 50px;"></i>
                </div>
                <!-- <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> -->
            </div>
        </div> <br>
        <!-- large box -->
        <div class="col-sm-12 p-2">
            <div class="small-box bg-light">
                <div class="inner">
                    <h3 style="color:light;">Total Withdraw</h3>

                    <h4>IDR {{ $totalWithdraw }}</h4>
                </div>
                <div class="icon">
                    <i class="fas fa-money-bill" style="
                        font-size: 80px;"></i>
                </div>
                <!-- <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> -->
            </div>
        </div>

        <div class="col-lg-3 col-6">

            <!-- small box -->
            <div class="small-box bg-light">
                <div class="inner">
                    <h6 style="color:green;">Total Deposit</h6>

                    <p>IDR {{ number_format($totalDeposite) }}</p>
                </div>
                <div class="icon">
                    <i class="fas fa-chart-bar" style="
                        font-size: 50px;"></i>
                </div>
                <!-- <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> -->
            </div>
        </div>
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-light">
                <div class="inner">
                    <h6 style="color:green;">Total Pendapatan</h6>

                    <p>IDR {{ number_format($totalPendapatan) }}</p>
                </div>
                <div class="icon">
                    <i class="fas fa-chart-bar" style="
                        font-size: 50px;"></i>
                </div>
                <!-- <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> -->
            </div>
        </div>
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-light">
                <div class="inner">
                    <h6 style="color:green;">Total Game</h6>

                    <p> {{ $Game }}</p>
                </div>
                <div class="icon">
                    <i class="fas fa-chart-bar" style="
                        font-size: 50px;"></i>
                </div>
                <!-- <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> -->
            </div>
        </div>


        <!-- ./col -->
    </div>
    <!-- /.row -->
@endsection
