@extends('layout.mobile.main')
@section('mobile')
    <link rel="stylesheet" href="../../../assets/css/mobile/wallet.css">
    <div class="standard-form-container deposit-container">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="tab-menu-background-container">
                        <div class="tab-menu-container">
                            <a href="/deposit" data-active="true">
                                <i data-icon="deposit"
                                    style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/deposit.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/deposit-active.svg?v=20240708-4);"></i>
                                Deposit
                            </a>
                            <a href="/withdraw" data-active="false">
                                <i data-icon="withdrawal"
                                    style="--image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/withdrawal.svg?v=20240708-4);--active-image-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/tabs/withdrawal-active.svg?v=20240708-4);"></i>
                                Penarikan
                            </a>
                        </div>
                    </div>
                    <div id="payment_method_selection" class="payment-method-selection">
                        <div id="payment_method_selection" class="payment-method-selection">
                            {{-- <div>
                                    <input type="radio" name="PaymentType" id="payment_method_QR" value="QR" checked>
                                    <label for="payment_method_QR">
                                        <img loading="lazy"
                                            src="//d33egg70nrp50s.cloudfront.net/Images/payment-types/QR.svg?v=20240708-4">
                                        <span>QRIS</span>
                                    </label>
                                    </div> --}}
                            <div>
                                <input type="radio" name="PaymentType" id="payment_method_BANK" value="BANK">
                                <label for="payment_method_BANK">
                                    <img loading="lazy"
                                        src="//d33egg70nrp50s.cloudfront.net/Images/payment-types/BANK.svg?v=20240708-4">
                                    <span>Bank/VA</span>
                                </label>
                            </div>
                            {{-- <div>
                                    <input type="radio" name="PaymentType" id="payment_method_PULSA" value="PULSA">
                                    <label for="payment_method_PULSA">
                                        <img loading="lazy"
                                            src="//d33egg70nrp50s.cloudfront.net/Images/payment-types/PULSA.svg?v=20240708-4">
                                        <span>Pulsa</span>
                                    </label>
                                     </div> --}}
                        </div>
                    </div>
                    <form action="/deposit" enctype="multipart/form-data" id="form_BANK" method="post">
                        @csrf
                        <input type="hidden" name="type" value="1">
                        <div class="form-group deposit-form-group">
                            <label for="PaymentMethod">Metode Pembayaran</label>
                        </div>
                        <div class="balance-info-container">
                            <a href="/history">Riwayat Deposit</a>
                            <div class="total-balance">
                                <p>Saldo Saya</p>
                                <span>
                                    {{ $balance }}
                                </span>
                            </div>
                        </div>
                        <hr class="deposit-gap">
                        <div class="form-group deposit-form-group amount-container">
                            <label for="Amount">
                                Jumlah
                                <span data-section="asterisk">*</span>
                            </label>
                            <div class="deposit-amount-container">
                                <div data-section="depo-amount">
                                    <div data-field="amount">
                                        <input autocomplete="off" class="form-control deposit_amount_input valid"
                                            data-val="true" data-val-required="The Amount field is required."
                                            id="amount_text_mobile" inputmode="decimal" name="amount" type="text"
                                            value="">
                                    </div>
                                    <div class="real-deposit-amount transfer_amount"><span>IDR</span> <span
                                            id="amount_display_mobile" style="font-size: 2.5rem">0</span></div>
                                </div>
                                <div class="deposit-amount-range">
                                    <span id="deposit_amount_range_label">Min: 25.00 | Max: 20,000.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="deposit-form-group">
                            <div class="form-group">
                                <label for="FromAccount">
                                    Akun Asal
                                    <span data-section="asterisk">*</span>
                                </label>
                                <div class="player-account-container">
                                    <div class="player-account-input">
                                        <div class="pseudo_event_listener"
                                            style="position: absolute; height: 34px; width: 138.214px;"></div>
                                        <select name="bankMember" id="deposit_to_bank_select" class="form-control valid"
                                            data-val="true" data-val-required="Pilih Akun Asal untuk disetor"
                                            style="pointer-events: none;">
                                            <option value="">-- Bank Utama --</option>
                                            <option value="{{ Auth()->user()->bank }}|{{ Auth()->user()->accNumber }}"
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
                                                data-account-number="{{ $rekening->accNumber }}" data-is-last-used="false"
                                                data-bank-logo="">
                                                {{ $rekening->bank }} | {{ $rekening->accNumber }}
                                            </option>
                                            @else
                                            <option value="">No bank account available</option>
                                            @endif
                                           
                                        </select>
                                        <span class="standard-required-message">Pilih Akun Asal untuk
                                            disetor</span>
                                    </div>
                                    <div class="player-account-add-button" id="add_payment_account_button"
                                        data-toggle="modal" data-target="#payment_account_popup">
                                        <img loading="lazy"
                                            src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/plus.svg?v=20240708-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="deposit-form-group">
                            <div class="form-group">
                                <div class="to-account-label-container">
                                    <label for="ToAccount">
                                        Akun Tujuan
                                        <span data-section="asterisk">*</span>
                                    </label>
                                </div>
                                <div class="pseudo_event_listener"
                                    style="position: absolute; height: 34px; width: 180.214px;">
                                </div>
                                <select name="CompanyBankId" id="bank-select" class="form-control valid" data-val="true"
                                    data-val-required="Pilih bank perusahaan untuk disetor">
                                    @foreach ($bank_deposite as $bank)
                                        <option value="{{ $bank->id }}" data-bank="{{ $bank->nama_bank }}"
                                            data-nama="{{ $bank->nama_penerima }}" data-norek="{{ $bank->no_rek }}">
                                            {{ $bank->nama_bank }}
                                        </option>
                                    @endforeach
                                </select>
                                <span class="standard-required-message">Pilih bank perusahaan untuk disetor</span>
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
                            <input type="hidden" name="bank_penerima" id="bank_penerima">
                            <input type="hidden" name="nama_penerima" id="nama_penerima">
                            <input type="hidden" name="nomer_penerima" id="nomer_penerima">
                            @foreach ($bank_deposite as $bank)
                                <input type="hidden" name="bank_penerima_{{ $bank->id }}"
                                    id="bank_penerima_{{ $bank->id }}" value="{{ $bank->nama_bank }}">
                                <input type="hidden" name="nama_penerima_{{ $bank->id }}"
                                    id="nama_penerima_{{ $bank->id }}" value="{{ $bank->nama_penerima }}">
                                <input type="hidden" name="nomer_penerima_{{ $bank->id }}"
                                    id="nomer_penerima_{{ $bank->id }}" value="{{ $bank->no_rek }}">
                                <div class="form-group bankOption" id="Payment-{{ $bank->id }}"
                                    style="display: none;">
                                    <div data-section="input" data-bank-type="bank" class="bank-info" id="bank_info"
                                        data-high-priority="false"
                                        data-has-qr-code="{{ $bank->image_qr ? 'true' : 'false' }}">
                                        <div class="recommended-for-instant-process">Rekomendasi<span>(Proses
                                                Instan)</span></div>

                                        <!-- Header Section -->
                                        <div data-bank-info="header">
                                            <h1 id="bank_info_account_name" style="display: none;">
                                                {{ $bank->nama_penerima }}</h1>
                                            <h1 id="bank_info_account_name_header" style="display: block;">
                                                {{ $bank->nama_penerima }}</h1>

                                            <h3 id="bank_info_name" class="bank-name"
                                                style="display: {{ $bank->image_qr ? 'block' : 'none' }};">
                                                {{ $bank->nama_bank }}
                                            </h3>
                                            <div class="bank-account-number-container"
                                                id="bank_info_account_number_header_container" style="display: flex;">
                                                <h2 id="bank_info_account_no_header">{{ $bank->no_rek }}</h2>
                                                <span class="copy_bank_account_button copy-bank-account-button"
                                                    onclick="copyBankAccount('bank_info_account_no_header')">
                                                    <img loading="lazy"
                                                        src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/copy.svg?v=20240708-4">
                                                </span>
                                            </div>
                                        </div>

                                        <!-- Details Section -->
                                        <div data-bank-info="details">
                                            <div class="bank-account-number-container"
                                                id="bank_info_account_number_container" style="display: none;">
                                                <h2 id="bank_info_account_no">{{ $bank->no_rek }}</h2>
                                                <span class="copy_bank_account_button copy-bank-account-button"
                                                    onclick="copyBankAccount('bank_info_account_no')">
                                                    <img loading="lazy"
                                                        src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/copy.svg?v=20240708-4">
                                                </span>
                                            </div>
                                        </div>

                                        <!-- QR Code Section -->
                                        @if ($bank->image_qr)
                                            <div>
                                                <img src="{{ asset('storage/' . $bank->image_qr) }}" alt="BANK"
                                                    class="img-fluid mx-auto d-block" style="max-width: 100%;">
                                            </div>
                                        @else
                                            <div></div>
                                        @endif

                                        <hr>

                                        <div data-bank-info="actions">
                                            <div class="admin-fee-container">
                                                Biaya Admin:
                                                <div class="admin-fee admin_fee_display">IDR 0.00</div>
                                            </div>
                                            <div id="bank_info_logo_footer" style="display: block;">
                                                <img
                                                    src="//d33egg70nrp50s.cloudfront.net/Images/banks/{{ $bank->nama_bank }}.svg">
                                            </div>
                                            <a id="download_qr_code_button" class="download-qr-code-button"
                                                download="" style="display: none;">
                                                <img loading="lazy"
                                                    src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/download.svg?v=20240708-4">
                                                Unduh
                                            </a>
                                        </div>

                                        <input id="bank_info_account_no_hidden_input" name="ToAccountNumber"
                                            type="hidden" value="{{ $bank->no_rek }}">
                                    </div>
                                </div>
                            @endforeach
                            <div class="form-group">
                                <div class="deposit-summary-container">
                                    <div class="deposit-summary-header" id="deposit_summary_header">
                                        <span class="summary-title">Jumlah yang ditransfer</span>
                                        <span class="summary-transfer-amount transfer-amount transfer_amount"
                                            data-location="summary"><span>IDR </span><span
                                                id="amount_real_mobile">0</span>
                                            <span class="toggler" id="deposit_summary_detail_toggler">
                                                <i class="fas fa-chevron-down"></i>
                                            </span>
                                    </div>
                                    <div class="deposit-summary-content" id="deposit_summary_content_mobile">
                                        <div class="deposit-summary-body">
                                            <span class="deposit-summary-title">Rincian Deposit</span>
                                            <div class="deposit-detail-container">
                                                <div class="deposit-detail-item" id="unique_code_container"
                                                    style="display: none;">
                                                    <span>Kode unik</span>
                                                    <span class="unique-code" id="unique_code"></span>
                                                </div>
                                                <div class="deposit-detail-item">
                                                    <span>Biaya Admin</span>
                                                    <span class="admin_fee_display">IDR 0.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="deposit-summary-footer">
                                            <span>Jumlah yang didapat</span>
                                            <span id="net_credited_amount_mobile"><span>IDR</span> 0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="deposit-form-group" id="transaction_receipt_container">
                            <label for="TransactionReceipt">Bukti Transfer</label>
                            <div data-section="input" class="transaction-receipt-input-container">
                                <input class="form-control" id="transaction_receipt_input" name="img" type="file"
                                    value="">
                                <span class="upload-success-indicator" id="upload_success_indicator"
                                    style="display: none;">
                                    <img loading="lazy"
                                        src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/check-circle.svg?v=20240708-4">
                                </span>
                            </div>
                        </div>
                        <div class="standard-button-group">
                            <input type="submit" class="standard-secondary-button" value="KIRIM">
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


    <div id="popup_modal_deposit" class="modal popup-modal concise-transaction-popup" role="dialog" data-title=""
        aria-label="Popup Modal" aria-hidden="false" style="display: none;">
        <div class="modal-dialog">
            <div class="modal-content"
                style="--desktop-popup-alert-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/popup/alert.png?v=20240708-4);;--desktop-popup-notification-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/desktop/layout/popup/notification.png?v=20240708-4);;--mobile-popup-alert-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/popup/alert.png?v=20240708-4);;--mobile-popup-notification-src: url(//d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/layout/popup/notification.png?v=20240708-4);;--event-giveaway-popper-src: url(//d33egg70nrp50s.cloudfront.net/Images/giveaway/popper.png?v=20240708-4);">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="popup_modal_title"></h4>
                </div>
                <div class="modal-body" id="popup_modal_body">
                    <div class="pending-transactions-container">
                        <div class="pending-transactions-item">
                            <div class="pending-deposit-title">Status Deposit: Menunggu</div>
                            <hr class="pending-deposit-line">
                            <div class="pending-deposit-info">
                                <div>
                                    <span>Waktu Transaksi</span>
                                    <h1 id="transaction_time_mobile"></h1>
                                </div>
                                <div>
                                    <span>Ref No.</span>
                                    <span id="reference_no_mobile"></span>
                                </div>
                                <div>
                                    <span>Jumlah</span>
                                    <span id="amount_mobile"></span>
                                </div>
                            </div>
                            <div data-payment-gateway="bank">
                                <div class="destination-account-info-container">
                                    <div class="destination-account-bank-info">
                                        <div>
                                            <img src="//d33egg70nrp50s.cloudfront.net/Images/banks/BNI.svg?v=20240708-4"
                                                onerror="this.style.display='none'">
                                        </div>
                                        <div class="destination-account-number-container">
                                            <span class="account_number" id="destination_account_number_mobile"></span>
                                            <span class="copy_account_number_button" style="cursor: pointer;">
                                                <img loading="lazy"
                                                    src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/copy.svg?v=20240708-4">
                                            </span>
                                        </div>
                                    </div>
                                    <div class="destination-account-holder-info">
                                        <span>Pemilik Akun</span>
                                        <span id="penerima_mobile"></span>
                                    </div>
                                    <hr>
                                    <p>Jika sudah melakukan pembayaran, mohon tunggu sampai status diperbarui</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal"
                        id="popup_modal_dismiss_button">OK</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" id="popup_modal_cancel_button"
                        style="display: none">Batal</button>
                    <button type="button" class="btn btn-primary" id="popup_modal_confirm_button"
                        style="display: none">OK</button>
                </div>
            </div>
        </div>
    </div>



    <script>
        window.addEventListener('DOMContentLoaded', () => {
            initializeDepositPage({
                platform: 'mobile',
                currency: 'IDR',
                paymentType: 'QR',
                translations: {
                    copied: 'Tersalin',
                    recommended: 'Rekomendasi',
                    instantProcess: 'Proses Instan',
                    others: 'Pembayaran Lainnya (Proses Standar)',
                    adminFee: 'Biaya Admin',
                    addAccount: 'Tambah Akun',
                    lastUsed: 'Terakhir dipakai',
                    toAccount: 'Akun Tujuan',
                    emptyPaymentAccountNote: 'Akun pembayaran Anda belum terdaftar. Silakan tambahkan akun pembayaran Anda terlebih dahulu.',
                    paymentAccountSelectionTitle: 'E-Money Akun Asal',
                    instantLabel: 'Instan',
                    maintenanceLabel: 'Gangguan'
                },
                bankLogoDirPath: '//d33egg70nrp50s.cloudfront.net/Images/bank-thumbnails/',
                newPaymentAccountIconPath: '//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/plus-circle.svg'
            });

            $('#ui-datepicker-div').appendTo('#deposit_form');
        });
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const paymentMethodSelection = document.getElementById('payment_method_selection');
            const forms = {
                QR: document.getElementById('form_QR'),
                BANK: document.getElementById('form_BANK'),
                PULSA: document.getElementById('form_PULSA')
            };

            function updateForms(selectedValue) {
                for (let key in forms) {
                    if (key === selectedValue) {
                        forms[key].style.display = 'block';
                    } else {
                        forms[key].style.display = 'none';
                    }
                }
            }

            paymentMethodSelection.addEventListener('change', function(event) {
                const selectedValue = event.target.value;
                updateForms(selectedValue);
            });

            // Initialize forms display
            updateForms(document.querySelector('input[name="PaymentType"]:checked').value);
        });
    </script>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var amountInputMobile = document.getElementById('amount_text_mobile');
            var amountDisplayMobile = document.getElementById('amount_display_mobile');
            var amountRealMobile = document.getElementById('amount_real_mobile');
            var netMobile = document.getElementById('net_credited_amount_mobile');

            amountInputMobile.addEventListener('input', function() {
                var amountValue = amountInputMobile.value;
                var formattedAmount = parseInt(amountValue) * 1000;
                var formattedString = formattedAmount.toLocaleString('id-ID');


                if (amountValue) {
                    amountDisplayMobile.textContent = formattedString;
                    amountRealMobile.textContent = formattedString;
                    netMobile.textContent = "IDR " + formattedString;
                } else {
                    amountDisplayMobile.textContent = '0';
                    amountRealMobile.textContent = '0';
                    netMobile.textContent = '0';
                }
            });

            $(".fas.fa-chevron-down").click(function() {
                $("#deposit_summary_content_mobile").toggle();
            });
        });
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var selectElement = document.getElementById('bank-select');

            function showBankOptionAndSetHiddenFields(bankId) {

                var bankOptions = document.querySelectorAll('.bankOption');
                bankOptions.forEach(function(option) {
                    option.style.display = 'none';
                });


                var selectedBankOption = document.getElementById('Payment-' + bankId);
                if (selectedBankOption) {
                    selectedBankOption.style.display = 'block';
                }

                var bankNameInput = document.getElementById('bank_penerima');
                var bankAccountNameInput = document.getElementById('nama_penerima');
                var bankAccountNumberInput = document.getElementById('nomer_penerima');

                var bankName = document.getElementById('bank_penerima_' + bankId).value;
                var accountName = document.getElementById('nama_penerima_' + bankId).value;
                var accountNumber = document.getElementById('nomer_penerima_' + bankId).value;

                bankNameInput.value = bankName;
                bankAccountNameInput.value = accountName;
                bankAccountNumberInput.value = accountNumber;
            }

            var firstBankOption = selectElement.options[0];
            if (firstBankOption) {
                var firstBankId = firstBankOption.value;
                selectElement.value = firstBankId;
                showBankOptionAndSetHiddenFields(firstBankId);
            }

            selectElement.addEventListener('change', function() {
                var selectedBankId = this.value;
                showBankOptionAndSetHiddenFields(selectedBankId);
            });
        });
    </script>
@endsection
