@extends('layout.desktop.main')
@section('content')
    <link rel="stylesheet" href="../../../assets/css/desktop/deposit.css">
    <div class="site-content-container" data-container-background="general">
        <div class="container">
            <div class="row">
                <div class="col-sm-12"></div>
                @include('layout.desktop.profile')
                <div class="standard-container-with-sidebar" data-style="light">
                    @include('layout.desktop.sidemenu')
                    <div class="standard-form-content deposit-container">
                        <div id="payment_method_selection" class="payment-method-selection">

                            <div>
                                <input type="radio" name="PaymentType" id="payment_method_BANK" value="BANK">
                                <label for="payment_method_BANK">
                                    <img loading="lazy"
                                        src="//d33egg70nrp50s.cloudfront.net/Images/payment-types/BANK.svg?v=20240708-4">
                                    <span>Bank/VA</span>
                                </label>
                            </div>
                        </div>

                        <form action="/withdraw" id="form_BANK" method="post">
                            @csrf
                            <input type="hidden" name="type" value="1">
                            <div class="form-group deposit-form-group">
                                <div class="head">
                                    <label for="PaymentMethod">
                                        Metode Pembayaran
                                    </label>
                                    <div>
                                        <a href="/history#tab-withdrawal">
                                            Riwayat Withdraw
                                        </a>
                                    </div>
                                </div>
                                <hr class="deposit-gap">
                            </div>
                            <div class="form-group deposit-form-group">
                                <label for="Amount">
                                    Jumlah
                                    <span data-section="asterisk">*</span>
                                </label>
                                <div class="deposit-amount-container" data-section="depo-amount">
                                    <div data-section="depo-input">
                                        <div data-field="amount">
                                            <input autocomplete="off"
                                                class="form-control deposit_amount_input input-validation-error"
                                                data-val="true" data-val-required="The Amount field is required."
                                                id="amount_text" inputmode="decimal" name="amount" type="text"
                                                value="">
                                        </div>
                                        <div class="real-deposit-amount transfer_amount" id="deposit_display">
                                            <span>IDR</span> <span id="amount_display" style="font-size: 2.5rem">0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="deposit-form-group">
                                <div class="form-group">
                                    <label for="FromAccount">
                                        Pilih Bank Anda
                                        <span data-section="asterisk">*</span>
                                    </label>
                                    <div data-section="input">
                                        <div class="player-account-container">
                                            <div class="player-account-input">
                                                <div class="pseudo_event_listener"
                                                    style="position: absolute; height: 34px; width: 138.214px;"></div>
                                                <select name="bankMember" id="deposit_to_bank_select"
                                                    class="form-control valid" data-val="true"
                                                    data-val-required="Pilih Akun Asal untuk disetor"
                                                    style="pointer-events: none;">

                                                    <option value="">-- Bank Utama --</option>
                                                    <option
                                                        value="{{ Auth()->user()->bank }}|{{ Auth()->user()->accNumber }}"
                                                        data-bank-name="{{ Auth()->user()->bank }}"
                                                        data-account-holder="{{ Auth()->user()->accName }}"
                                                        data-account-number="{{ Auth()->user()->accNumber }}"
                                                        data-is-last-used="false" data-bank-logo="">
                                                        {{ Auth()->user()->bank }} | {{ Auth()->user()->accNumber }}
                                                    </option>
                                                    <option value="" readonly></option>
                                                    <option value="" readonly>-- Bank Alternative --</option>
                                                      @if($rekening)
                                                     <option value="{{ $rekening->bank }}|{{ $rekening->accNumber }}"
                                                        data-bank-name="{{ $rekening->bank }}"
                                                        data-account-holder="{{ $rekening->accName }}"
                                                        data-account-number="{{ $rekening->accNumber }}"
                                                        data-is-last-used="false" data-bank-logo="">
                                                        {{ $rekening->bank }} | {{ $rekening->accNumber }}
                                                    </option>
                                                    @else
                                                     <option value="">No bank account available</option>
                                                    @endif
                                                </select>
                                                <span class="standard-required-message">Pilih Akun Asal untuk
                                                    disetor</span>
                                            </div>
                                            <script>
                                                document.addEventListener('DOMContentLoaded', function() {

                                                    var selectElement = document.getElementById('deposit_to_bank_select');
                                                    selectElement.style.pointerEvents = 'auto';

                                                    var options = selectElement.querySelectorAll('option');
                                                    options.forEach(function(option) {
                                                        option.disabled = false;
                                                    });
                                                });
                                            </script>
                                            <div class="player-account-add-button" id="add_payment_account_button"
                                                data-toggle="modal" data-target="#payment_account_popup">
                                                <img loading="lazy"
                                                    src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/plus.svg?v=20240708-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="deposit-summary-container">
                                <div class="deposit-summary-header" id="deposit_summary_header">
                                    <span class="summary-title">Jumlah yang ditransfer</span>
                                    <span class="summary-transfer-amount transfer-amount transfer_amount"
                                        data-location="summary"><span>IDR </span><span id="amount_real">0</span>
                                    </span>
                                    <span class="toggler" id="deposit_summary_detail_toggler">
                                        <i class="fas fa-chevron-down"></i>
                                    </span>
                                </div>
                                <div class="deposit-summary-content" id="deposit_summary_content">
                                    <div class="deposit-summary-body">
                                        <span class="deposit-summary-title">Rincian Penarikan</span>
                                        <div class="deposit-detail-container">
                                            <div class="deposit-detail-item">
                                                <span>Jumlah yang ditransfer</span>
                                                <span class="admin_fee_display" id="net_credited_amount">IDR 0.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="deposit-summary-footer">
                                        <span>Sisa Saldo</span>
                                        <span id="sisa_saldo"><span>IDR</span> 0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="standard-button-group">
                                <input type="submit" class="btn btn-primary" value="KIRIM">
                            </div>
                        </form>

                        <div id="available_payment_accounts_popup" class="available-payment-accounts-popup">
                            <div id="available_payment_accounts_container" class="available-payment-accounts-container"
                                data-default-payment-account-icon="//d33egg70nrp50s.cloudfront.net/Images/bank-thumbnails/default.webp?v=20240708-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="payment_account_popup" tabindex="-1" role="dialog"
        aria-labelledby="paymentAccountModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="paymentAccountModalLabel">Tambah Akun Bank</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                        style="margin-top: -20px">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="/add-bank" method="POST">
                        @csrf
                        <input data-val="true" data-val-required="The PaymentType field is required." id="PaymentType"
                            name="PaymentType" type="hidden" value="BANK">
                        <div class="form-group">
                            <label for="Bank">Akun <span data-section="asterisk">*</span></label>
                            <select class="form-control" data-val="true" data-val-required="The Bank field is required."
                                id="Bank" name="Bank">
                                <option value="">-- Pilih Bank --</option>
                                <option value="DANA">BANK DANA</option>
                                <option value="GOPAY">BANK GOPAY</option>
                                <option value="OVO">BANK OVO</option>
                                <option value="BCA">BCA</option>
                                <option value="BNI">BNI</option>
                                <option value="BRI">BRI</option>
                                <option value="MANDIRI">MANDIRI</option>
                                <option value="BNI">NEXUSPAY DEPOSIT BANK
                                    BNI</option>
                                <option value="BRI">NEXUSPAY DEPOSIT BANK
                                    BRI</option>
                                <option value="DANAMON">NEXUSPAY DEPOSIT BANK
                                    DANAMON</option>
                                <option value="MANDIRI">NEXUSPAY DEPOSIT BANK
                                    MANDIRI</option>
                                <option value="PERMATA">NEXUSPAY DEPOSIT BANK
                                    PERMATA</option>
                            </select>
                            <span class="standard-required-message">Silakan pilih bank Anda.</span>
                        </div>
                        <div class="form-group">
                            <label for="AccountNo">Nomor Rekening <span data-section="asterisk">*</span></label>
                            <input maxlength="24" autocomplete="off" class="form-control" data-val="true"
                                data-val-regex="The field AccountNo must match the regular expression '^[0-9\-]+$'."
                                data-val-regex-pattern="^[0-9\-]+$" data-val-required="The AccountNo field is required."
                                id="payment_account_number_input" name="accNumber" placeholder="Nomor rekening anda"
                                type="text" value="">
                            <span class="standard-required-message">Nomor rekening bank diperlukan (hanya nomor yang
                                diperbolehkan).</span>
                        </div>
                        <div class="form-group">
                            <label for="AccountName">Nama Lengkap <span data-section="asterisk">*</span></label>
                            <input class="form-control" data-val="true"
                                data-val-regex="The field AccountName must match the regular expression '^[0-9a-zA-Z ]*$'."
                                data-val-regex-pattern="^[0-9a-zA-Z ]*$"
                                data-val-required="The AccountName field is required." id="AccountName" name="accName"
                                placeholder="Nama Lengkap Anda" type="text" value="{{ Auth()->user()->accName }}">
                            <span class="standard-required-message">Silakan masukkan nama lengkap yang valid (hanya
                                karakter alfanumerik yang diperbolehkan).</span>
                        </div>
                        <div class="standard-button-group">
                            <input type="submit" class="btn btn-primary" value="Tambah Akun">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div id="withdraw_popup" class="modal popup-modal concise-transaction-popup " role="dialog" data-title=""
        aria-label="Popup Modal" aria-hidden="false" style="display: none;">
        <div class="modal-dialog">
            <div class="modal-content"
                style="--desktop-popup-alert-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/popup/alert.png?v=20240708-4);;--desktop-popup-notification-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/popup/notification.png?v=20240708-4);;--mobile-popup-alert-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/popup/alert.png?v=20240708-4);;--mobile-popup-notification-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/popup/notification.png?v=20240708-4);;--event-giveaway-popper-src: url(//d33egg70nrp50s.cloudfront.net/Images/giveaway/popper.png?v=20240708-4);">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="popup_modal_title">

                    </h4>
                </div>
                <div class="modal-body" id="popup_modal_body">
                    <div class="pending-transactions-container">

                        <div class="pending-transactions-item">
                            <div class="pending-deposit-title">Status Withdraw: Menunggu</div>

                            <hr class="pending-deposit-line">

                            <div class="pending-deposit-info">
                                <div>
                                    <span>Waktu Transaksi</span>
                                    <span id="waktu_withdraw"></span>
                                </div>
                                <div>
                                    <span>Ref No.</span>
                                    <span id="refrensi"></span>
                                </div>
                                <div>
                                    <span>Jumlah</span>
                                    <span id="nominal"></span>
                                </div>
                            </div>

                            <div data-payment-gateway="bank">
                                <div class="destination-account-info-container">
                                    <div class="destination-account-bank-info">
                                        <div>
                                            <span id="bank_member"></span>
                                        </div>
                                        <div class="destination-account-number-container">
                                            <span class="account_number" id="nomer_account_member"></span>
                                            <span class="copy_account_number_button" style="cursor: pointer; "
                                                data-original-title="" title="">
                                                <img loading="lazy"
                                                    src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/copy.svg?v=20240708-4">
                                            </span>
                                        </div>
                                    </div>
                                    <div class="destination-account-holder-info">
                                        <span>Pemilik Akun</span>
                                        <span id="nama_rekening_member"></span>
                                    </div>

                                    <hr>
                                    <p>Jika sudah melakukan pembayaran, mohon tunggu sampai status diperbarui</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" id="popup_modal_dismiss_button">
                        OK
                    </button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" id="popup_modal_cancel_button"
                        style="display: none">
                        Batal
                    </button>
                    <button type="button" class="btn btn-primary" id="popup_modal_confirm_button"
                        style="display: none">
                        OK
                    </button>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.34/moment-timezone-with-data.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var success = "{{ session('success') }}";
            if (success) {
                console.log('Success session variable is set.');
                $('#withdraw_popup').modal('show'); // Ensure modal ID matches
                $.ajax({
                    url: '/getTodayWithdraw',
                    type: 'GET',
                    dataType: 'json',
                    success: function(response) {
                        console.log('AJAX request successful:', response);
                        if (response.length > 0) {
                            var withdraw = response[0];
                            var formattedTime = moment(withdraw.created_at).tz('Asia/Jakarta').format(
                                'DD/MM/YYYY HH:mm:ss');
                            $('#waktu_withdraw').text(formattedTime);
                            $('#refrensi').text(generateRandomRefNo());
                            $('#nominal').text(withdraw.amount);
                            $('#bank_member').text(withdraw.bankMember);
                            $('#nomer_account_member').text(withdraw.accNumber);
                            $('#nama_rekening_member').text(withdraw.accName);
                            console.log('Data populated in modal.');
                            $('#withdraw_popup').modal('show');
                        } else {
                            console.log('Data Withdraw tidak ditemukan.');
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error('Terjadi kesalahan dalam mengambil data Withdraw:', error);
                    }
                });
            } else {
                console.log('Success session variable is not set.');
            }
        });

        function generateRandomRefNo() {
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var result = '';
            for (var i = 0; i < 6; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var hiddenBalance = {{ $hiddenBalance }};
            var amountInput = document.getElementById('amount_text');
            var amountDisplay = document.getElementById('amount_display');
            var amountReal = document.getElementById('amount_real');
            var net = document.getElementById('net_credited_amount');
            var sisaSaldo = document.getElementById('sisa_saldo');

            // Update sisaSaldo with hiddenBalance value
            var formattedHiddenBalance = hiddenBalance.toLocaleString('id-ID');
            sisaSaldo.innerHTML = "<span>IDR</span> " + formattedHiddenBalance;

            amountInput.addEventListener('input', function() {
                var amountValue = amountInput.value;

                // Convert to number and multiply by 1000
                var formattedAmount = parseInt(amountValue) * 1000;

                // Format to IDR
                var formattedString = formattedAmount.toLocaleString('id-ID');

                // Update both displays
                if (amountValue) {
                    amountDisplay.textContent = formattedString;
                    amountReal.textContent = formattedString;
                    net.textContent = "IDR " + formattedString;

                    // Update sisa_saldo by subtracting net amount
                    var netValue = formattedAmount;
                    var sisaSaldoValue = hiddenBalance - netValue;
                    var formattedSisaSaldo = sisaSaldoValue.toLocaleString('id-ID');
                    sisaSaldo.innerHTML = "<span>IDR</span> " + formattedSisaSaldo;
                } else {
                    amountDisplay.textContent = '0';
                    amountReal.textContent = '0';
                    net.textContent = '0';
                    sisaSaldo.innerHTML = "<span>IDR</span> " + formattedHiddenBalance;
                }
            });

            $(".fas.fa-chevron-down").click(function() {
                $("#deposit_summary_content").toggle();
            });

        });
    </script>
@endsection
