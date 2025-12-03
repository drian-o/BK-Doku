@extends('layout.desktop.main')
@section('content')
    <link rel="stylesheet" href="../../../assets/css/desktop/deposit.css">
    <div class="site-content-container" data-container-background="general">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    @include('layout.desktop.profile')
                    <div class="standard-container-with-sidebar" data-style="light">
                        @include('layout.desktop.sidemenu')

                        <div class="standard-form-content deposit-container">
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
                            {{-- <form action="/deposit" enctype="multipart/form-data" id="form_QR" class="active"
                                method="post">
                                <div class="form-group deposit-form-group">
                                    <div class="head">
                                        <label for="PaymentMethod">
                                            Metode Pembayaran
                                        </label>
                                        <div>
                                            <a href="/desktop/history/deposit">
                                                Riwayat Deposit
                                            </a>
                                        </div>
                                    </div>
                                    <div data-section="input">

                                        <span class="field-validation-valid" data-valmsg-for="PaymentType"
                                            data-valmsg-replace="true"></span>
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
                                                <input autocomplete="off" class="form-control deposit_amount_input"
                                                    data-val="true" data-val-required="The Amount field is required."
                                                    id="Amount" inputmode="decimal" name="Amount" type="text"
                                                    value="">
                                            </div>
                                            <div class="real-deposit-amount transfer_amount"><span>IDR</span> 0</div>
                                        </div>
                                        <div class="deposit-amount-range">
                                            <span id="deposit_amount_range_label">Min: 25.00 | Max: 10,000.00</span>
                                        </div>
                                    </div>
                                    <input data-val="true" data-val-number="The field FastDepositNumber must be a number."
                                        data-val-required="The FastDepositNumber field is required."
                                        id="fast_deposit_number" name="FastDepositNumber" type="hidden" value="0.53">
                                </div>
                                <div class="deposit-form-group">
                                    <div class="form-group">
                                        <div class="to-account-label-container">
                                            <label for="ToAccount">
                                                Akun Tujuan
                                                <span data-section="asterisk">*</span>
                                            </label>
                                        </div>
                                        <div data-section="input">
                                            <div class="pseudo_event_listener"
                                                style="position: absolute; height: 34px; width: 180.214px;"></div><select
                                                name="CompanyBankId" id="deposit_to_bank_select" class="form-control"
                                                data-qr="true" data-val="true"
                                                data-val-required="Pilih bank perusahaan untuk disetor"
                                                style="pointer-events: none;">
                                                <option value="84617a92-0a85-4f6b-845f-1a6f7b1e49d2" data-bank-name="QRIS"
                                                    data-account-holder="NEXUSPAY DEPOSIT QR" data-account-number="QRIS"
                                                    data-supported-banks="NEXUSPAY DEPOSIT QR" data-is-auto-approve="true"
                                                    data-conversion-rate="0.0" data-minimum-deposit-amount="25.000000"
                                                    data-maximum-deposit-amount="10000.000000"
                                                    data-deposit-amount-range="Min: 25.00 | Max: 10,000.00"
                                                    data-high-priority="true" data-admin-fee="1.10%"
                                                    data-bank-id="84617a92-0a85-4f6b-845f-1a6f7b1e49d2"
                                                    data-payment-type="QR" data-qr-code="" data-qr-code-format=""
                                                    data-is-online="true"
                                                    data-bank-logo="//d33egg70nrp50s.cloudfront.net/Images/bank-thumbnails/QRIS.webp?v=20240708-4"
                                                    data-is-maintenance="false">
                                                    QRIS
                                                </option>
                                            </select>
                                            <span class="standard-required-message">Pilih bank perusahaan untuk
                                                disetor</span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div data-section="input" data-bank-type="qr" class="bank-info" id="bank_info"
                                            data-high-priority="true" data-has-qr-code="false">
                                            <div data-bank-info="header">
                                                <h1 id="bank_info_account_name_header" style="display: none;">NEXUSPAY
                                                    DEPOSIT QR</h1>
                                                <div class="bank-account-number-container"
                                                    id="bank_info_account_number_header_container" style="display: none;">
                                                    <h2 id="bank_info_account_no_header">QRIS</h2>
                                                </div>
                                            </div>
                                            <div data-bank-info="qrcode" id="bank_qr_code"></div>
                                            <div data-bank-info="details">
                                                <div data-section="left">
                                                    <div class="recommended-for-instant-process">Rekomendasi<span>(Proses
                                                            Instan)</span></div>
                                                    <h4 id="qr_code_note" style="display: none;">Pindai/Screenshot Kode QR
                                                        ini untuk transfer ke provider yang dituju</h4>
                                                    <div class="admin-fee-container">
                                                        Biaya Admin:
                                                        <div class="admin-fee admin_fee_display">1.10%</div>
                                                    </div>
                                                    <a id="download_qr_code_button" class="download-qr-code-button"
                                                        download="" style="display: none;">
                                                        <img loading="lazy"
                                                            src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/download.svg?v=20240708-4">
                                                        Unduh
                                                    </a>
                                                </div>
                                                <div data-section="right">
                                                    <div data-bank-icon="">
                                                        <div id="bank_info_logo"
                                                            data-image-path="//d33egg70nrp50s.cloudfront.net/Images/banks/"
                                                            style="display: none;"><img
                                                                src="//d33egg70nrp50s.cloudfront.net/Images/banks/qris.svg">
                                                        </div>
                                                        <h3 id="bank_info_name" class="bank-name" style="display: none;">
                                                            QRIS</h3>
                                                    </div>
                                                    <h1 id="bank_info_account_name" style="display: none;">NEXUSPAY
                                                        DEPOSIT QR</h1>
                                                    <div class="bank-account-number-container"
                                                        id="bank_info_account_number_container" style="display: none;">
                                                        <h2 id="bank_info_account_no">QRIS</h2>
                                                    </div>
                                                    <div id="bank_info_logo_footer" style="display: block;"><img
                                                            src="//d33egg70nrp50s.cloudfront.net/Images/banks/qris.svg">
                                                    </div>
                                                </div>
                                            </div>
                                            <input id="bank_info_account_no_hidden_input" name="ToAccountNumber"
                                                type="hidden" value="QRIS">
                                        </div>
                                        <div class="deposit-summary-container">
                                            <div class="deposit-summary-header" id="deposit_summary_header">
                                                <span class="summary-title">Jumlah yang ditransfer</span>
                                                <span class="summary-transfer-amount transfer-amount transfer_amount"
                                                    data-location="summary"><span>IDR</span> 0</span>
                                                <span class="toggler" id="deposit_summary_detail_toggler">
                                                    <i class="glyphicon glyphicon-chevron-down"></i>
                                                </span>
                                            </div>
                                            <div class="deposit-summary-content" id="deposit_summary_content">
                                                <div class="deposit-summary-body">
                                                    <span class="deposit-summary-title">Rincian Deposit</span>
                                                    <div class="deposit-detail-container">
                                                        <div class="deposit-detail-item">
                                                            <span>Jumlah yang ditransfer</span>
                                                            <span class="transfer-amount transfer_amount"><span>IDR</span>
                                                                0</span>
                                                        </div>
                                                        <div class="deposit-detail-item" id="unique_code_container"
                                                            style="display: none;">
                                                            <span>Kode unik</span>
                                                            <span class="unique-code" id="unique_code"></span>
                                                        </div>
                                                        <div class="deposit-detail-item">
                                                            <span>Biaya Admin</span>
                                                            <span class="admin_fee_display">1.10%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="deposit-summary-footer">
                                                    <span>Jumlah yang didapat</span>
                                                    <span id="net_credited_amount"><span>IDR</span> 0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group deposit-form-group" id="transaction_receipt_container"
                                    hidden="">
                                    <label for="TransactionReceipt">Bukti Transfer</label>
                                    <div data-section="input" class="transaction-receipt-input-container">
                                        <input class="form-control" id="transaction_receipt_input"
                                            name="TransactionReceipt" type="file" value="">
                                        <span class="upload-success-indicator" id="upload_success_indicator"
                                            style="display: none;">
                                            <img loading="lazy"
                                                src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/check-circle.svg?v=20240708-4">
                                        </span>
                                    </div>
                                </div>
                                <div class="standard-button-group">
                                    <input type="submit" class="btn btn-primary" value="KIRIM">
                                </div>
                            </form> --}}

                            <form action="/deposit" enctype="multipart/form-data" id="form_BANK" method="post">
                                @csrf
                                <input type="hidden" name="type" value="1">
                                <div class="form-group deposit-form-group">
                                    <div class="head">
                                        <label for="PaymentMethod">
                                            Metode Pembayaran
                                        </label>
                                        <div>
                                            <a href="/history#tab-deposit">
                                                Riwayat Deposit
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
                                                <span>IDR</span> <span id="amount_display"
                                                    style="font-size: 2.5rem">0</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div class="deposit-form-group">
                                    <div class="form-group">
                                        <label for="FromAccount">
                                            Akun Asal
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
                                                        @if ($rekening)
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
                                                <div class="player-account-add-button" id="add_payment_account_button"
                                                    data-toggle="modal" data-target="#payment_account_popup">
                                                    <img loading="lazy"
                                                        src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/plus.svg?v=20240708-4">
                                                </div>
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
                                        <div data-section="input">
                                            <div class="pseudo_event_listener"
                                                style="position: absolute; height: 34px; width: 180.214px;"></div>
                                            <select name="CompanyBankId" id="bank-select" class="form-control valid"
                                                data-val="true" data-val-required="Pilih bank perusahaan untuk disetor">
                                                @foreach ($bank_deposite as $bank)
                                                    <option value="{{ $bank->id }}"
                                                        data-bank="{{ $bank->nama_bank }}"
                                                        data-nama="{{ $bank->nama_penerima }}"
                                                        data-norek="{{ $bank->no_rek }}">
                                                        {{ $bank->nama_bank }}
                                                    </option>
                                                @endforeach
                                            </select>

                                            <span class="standard-required-message">Pilih bank perusahaan untuk
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
                                    </div>
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
                                            <div data-section="input" data-bank-type="bank" class="bank-info"
                                                id="bank_info" data-high-priority="false" data-has-qr-code="false">
                                                <div data-bank-info="header">
                                                    <h1 id="bank_info_account_name_header" style="display: block;">
                                                        {{ $bank->nama_penerima }}</h1>
                                                    <div class="bank-account-number-container"
                                                        id="bank_info_account_number_header_container"
                                                        style="display: flex;">
                                                        <h2 id="bank_info_account_no_{{ $bank->id }}">
                                                            {{ $bank->no_rek }}</h2>
                                                        <span class="copy_bank_account_button copy-bank-account-button"
                                                            onclick="copyBankAccount('bank_info_account_no_{{ $bank->id }}')">
                                                            <img loading="lazy"
                                                                src="https://d33egg70nrp50s.cloudfront.net/Images/icons/wallet/copy.svg?v=20240708-4">
                                                        </span>
                                                    </div>
                                                </div>
                                                @if ($bank->image_qr)
                                                    <div>
                                                        <img src="{{ asset('storage/' . $bank->image_qr) }}"
                                                            alt="BANK" class="img-fluid mx-auto d-block"
                                                            style="max-width: 100%;">
                                                    </div>
                                                @else
                                                    <div></div>
                                                @endif
                                                <div data-bank-info="qrcode" id="bank_qr_code"></div>
                                                <div data-bank-info="details">
                                                    <div data-section="left">
                                                        <div class="recommended-for-instant-process">
                                                            Rekomendasi<span>(Proses Instan)</span></div>
                                                        <h4 id="qr_code_note" style="display: none;">Pindai/Screenshot
                                                            Kode QR ini untuk transfer
                                                            ke provider yang dituju</h4>
                                                        <div class="admin-fee-container">
                                                            Biaya Admin:
                                                            <div class="admin-fee admin_fee_display">IDR 0.00</div>
                                                        </div>
                                                        <a id="download_qr_code_button" class="download-qr-code-button"
                                                            download="" style="display: none;">
                                                            <img loading="lazy"
                                                                src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/download.svg?v=20240708-4">
                                                            Unduh
                                                        </a>
                                                    </div>
                                                    <div data-section="right">
                                                        <div data-bank-icon="">
                                                            <div id="bank_info_logo"
                                                                data-image-path="{{ asset('storage/') . $bank->image_qr }}"
                                                                style="display: none;"><img
                                                                    src="{{ asset('storage/') . $bank->image_qr }}">
                                                            </div>
                                                            <h3 id="bank_info_name" class="bank-name"
                                                                style="display: none;">{{ $bank->nama_bank }}</h3>
                                                        </div>
                                                        <h1 id="bank_info_account_name" style="display: none;">
                                                            {{ $bank->nama_penerima }}
                                                        </h1>
                                                        <div class="bank-account-number-container"
                                                            id="bank_info_account_number_container"
                                                            style="display: none;">
                                                            <h2 id="bank_info_account_no">{{ $bank->no_rek }}</h2>
                                                            <span class="copy_bank_account_button copy-bank-account-button"
                                                                data-original-title="" title="">
                                                                <img loading="lazy"
                                                                    src="https://d33egg70nrp50s.cloudfront.net/Images/icons/wallet/copy.svg?v=20240708-4">
                                                            </span>
                                                        </div>
                                                        <div id="bank_info_logo_footer" style="display: block;">
                                                            @if ($bank->image_qr)
                                                                <img src="{{ asset('storage/' . $bank->image_qr) }}"
                                                                    alt="Bank QR">
                                                            @else
                                                                <span class="mt-2"> {{ $bank->nama_bank }}</span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                                <input id="bank_info_account_no_hidden_input" name="ToAccountNumber"
                                                    type="hidden" value="{{ $bank->no_rek }}">
                                            </div>

                                        </div>
                                    @endforeach
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
                                            <span id="net_credited_amount"><span>IDR</span> 0</span>
                                        </div>
                                    </div>
                                </div>
                                <script>
                                    document.addEventListener('DOMContentLoaded', function() {
                                        const bankSelect = document.getElementById('bank-select');
                                        const bankPenerimaInput = document.getElementById('bank_penerima');
                                        const namaPenerimaInput = document.getElementById('nama_penerima');
                                        const nomerPenerimaInput = document.getElementById('nomer_penerima');

                                        bankSelect.addEventListener('change', function() {
                                            const selectedOption = this.options[this.selectedIndex];
                                            const selectedBankId = selectedOption.value;
                                            const bankPenerima = selectedOption.getAttribute('data-bank');
                                            const namaPenerima = selectedOption.getAttribute('data-nama');
                                            const nomerPenerima = selectedOption.getAttribute('data-norek');

                                            // Update hidden inputs with the selected values
                                            bankPenerimaInput.value = bankPenerima;
                                            namaPenerimaInput.value = namaPenerima;
                                            nomerPenerimaInput.value = nomerPenerima;

                                            // Hide all bank options
                                            document.querySelectorAll('.bankOption').forEach(option => {
                                                option.style.display = 'none';
                                            });

                                            // Show the selected bank option
                                            const selectedBankOption = document.getElementById('Payment-' + selectedBankId);
                                            if (selectedBankOption) {
                                                selectedBankOption.style.display = 'block';
                                            }
                                        });

                                        // Trigger change event when the page loads to display the default selected option
                                        bankSelect.dispatchEvent(new Event('change'));
                                    });

                                    function copyBankAccount(elementId) {
                                        const copyText = document.getElementById(elementId);

                                        const range = document.createRange();
                                        range.selectNode(copyText);
                                        window.getSelection().removeAllRanges();
                                        window.getSelection().addRange(range);

                                        document.execCommand("copy");
                                        window.getSelection().removeAllRanges();

                                        alert("Nomor rekening berhasil disalin: " + copyText.textContent);
                                    }
                                </script>
                                <div class="form-group deposit-form-group" id="transaction_receipt_container">
                                    <label for="TransactionReceipt">Bukti Transfer</label>
                                    <div data-section="input" class="transaction-receipt-input-container">
                                        <input class="form-control" id="transaction_receipt_input" name="img"
                                            type="file" value="">
                                        <span class="upload-success-indicator" id="upload_success_indicator"
                                            style="display: none;">
                                            <img loading="lazy"
                                                src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/check-circle.svg?v=20240708-4">
                                        </span>
                                    </div>
                                </div>
                                <div class="standard-button-group">
                                    <input type="submit" class="btn btn-primary" value="KIRIM">
                                </div>
                            </form>

                            {{-- <form action="/Wallet/PulsaDeposit" enctype="multipart/form-data" id="form_PULSA"
                                method="post" name="depositForm" novalidate="novalidate"><input
                                    name="__RequestVerificationToken" type="hidden"
                                    value="VajhxGP-Oh9tcojyERry-Eg00LacEoebeIVgZXeYENzpYskBH8YK_vtTYm6rOxNColS-X1rRa3LM1Dq5sUwn-iPu32hZgEA_QpSZDj9wnLY1">
                                <div class="form-group deposit-form-group">
                                    <div class="head">
                                        <label for="PaymentMethod">
                                            Metode Pembayaran
                                        </label>
                                        <div>
                                            <a href="/desktop/history/deposit">
                                                Riwayat Deposit
                                            </a>
                                        </div>
                                    </div>
                                    <div data-section="input">
                                        <span class="field-validation-valid" data-valmsg-for="PaymentType"
                                            data-valmsg-replace="true"></span>
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
                                                <input autocomplete="off" class="form-control deposit_amount_input"
                                                    data-val="true" data-val-required="The Amount field is required."
                                                    id="Amount" inputmode="decimal" name="Amount" type="text"
                                                    value="">
                                            </div>
                                            <div class="real-deposit-amount transfer_amount"><span>IDR</span> 0</div>
                                        </div>
                                        <div class="deposit-amount-range">
                                            <span id="deposit_amount_range_label">Min: 25.00 | Max: 1,000.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="deposit-form-group">
                                    <div class="form-group">
                                        <div class="to-account-label-container">
                                            <label for="ToAccount">
                                                Nomor Tujuan
                                                <span data-section="asterisk">*</span>
                                            </label>
                                        </div>
                                        <div data-section="input">
                                            <div class="pseudo_event_listener"
                                                style="position: absolute; height: 34px; width: 180.214px;"></div><select
                                                name="CompanyBankId" id="deposit_to_bank_select" class="form-control"
                                                data-val="true" data-val-required="Pilih bank perusahaan untuk disetor"
                                                style="pointer-events: none;">
                                                <option value="36132c13-a399-4d3d-9baa-0beb2369d93d"
                                                    data-bank-name="XL (AUTO)" data-account-holder="XL (AUTO)"
                                                    data-account-number="0878-6403-0310"
                                                    data-supported-banks="AXIS (AUTO);TELKOMSEL (AUTO);XL (AUTO)"
                                                    data-is-auto-approve="true" data-conversion-rate="0.0"
                                                    data-minimum-deposit-amount="25.000000"
                                                    data-maximum-deposit-amount="1000.000000"
                                                    data-deposit-amount-range="Min: 25.00 | Max: 1,000.00"
                                                    data-high-priority="false" data-admin-fee="18.00%"
                                                    data-bank-id="36132c13-a399-4d3d-9baa-0beb2369d93d"
                                                    data-payment-type="PULSA" data-qr-code="" data-qr-code-format="png"
                                                    data-is-online="true"
                                                    data-bank-logo="//d33egg70nrp50s.cloudfront.net/Images/bank-thumbnails/XL-(AUTO).webp?v=20240708-4"
                                                    data-is-maintenance="false">
                                                    XL (AUTO) | 0878-6403-0310
                                                </option>
                                                <option value="8d9383ce-623b-488a-8933-14064837ea29"
                                                    data-bank-name="AXIS (AUTO)" data-account-holder="AXIS (AUTO)"
                                                    data-account-number="0838-4931-0825"
                                                    data-supported-banks="AXIS (AUTO);TELKOMSEL (AUTO);XL (AUTO)"
                                                    data-is-auto-approve="true" data-conversion-rate="0.0"
                                                    data-minimum-deposit-amount="25.000000"
                                                    data-maximum-deposit-amount="1000.000000"
                                                    data-deposit-amount-range="Min: 25.00 | Max: 1,000.00"
                                                    data-high-priority="false" data-admin-fee="18.00%"
                                                    data-bank-id="8d9383ce-623b-488a-8933-14064837ea29"
                                                    data-payment-type="PULSA" data-qr-code="" data-qr-code-format=".png"
                                                    data-is-online="true"
                                                    data-bank-logo="//d33egg70nrp50s.cloudfront.net/Images/bank-thumbnails/AXIS-(AUTO).webp?v=20240708-4"
                                                    data-is-maintenance="false">
                                                    AXIS (AUTO) | 0838-4931-0825
                                                </option>
                                                <option value="a2eb3511-a49a-41a3-b5c2-6594ad7ef06a"
                                                    data-bank-name="TELKOMSEL (AUTO)"
                                                    data-account-holder="TELKOMSEL (AUTO)"
                                                    data-account-number="0821-3852-2740"
                                                    data-supported-banks="AXIS (AUTO);TELKOMSEL (AUTO);XL (AUTO)"
                                                    data-is-auto-approve="true" data-conversion-rate="0.0"
                                                    data-minimum-deposit-amount="25.000000"
                                                    data-maximum-deposit-amount="1000.000000"
                                                    data-deposit-amount-range="Min: 25.00 | Max: 1,000.00"
                                                    data-high-priority="false" data-admin-fee="23.00%"
                                                    data-bank-id="a2eb3511-a49a-41a3-b5c2-6594ad7ef06a"
                                                    data-payment-type="PULSA" data-qr-code="" data-qr-code-format=".png"
                                                    data-is-online="true"
                                                    data-bank-logo="//d33egg70nrp50s.cloudfront.net/Images/bank-thumbnails/TELKOMSEL-(AUTO).webp?v=20240708-4"
                                                    data-is-maintenance="false">
                                                    TELKOMSEL (AUTO) | 0821-3852-2740
                                                </option>
                                            </select>
                                            <span class="standard-required-message">Pilih bank perusahaan untuk
                                                disetor</span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div data-section="input" data-bank-type="pulsa" class="bank-info"
                                            id="bank_info" data-high-priority="false" data-has-qr-code="false">
                                            <div data-bank-info="header">
                                                <h1 id="bank_info_account_name_header" data-label="Nomor Tujuan"
                                                    style="display: block;">XL (AUTO)</h1>
                                                <div class="bank-account-number-container"
                                                    id="bank_info_account_number_header_container" style="display: flex;">
                                                    <h2 id="bank_info_account_no_header">0878-6403-0310</h2>
                                                    <span class="copy_bank_account_button copy-bank-account-button"
                                                        data-original-title="" title="">
                                                        <img loading="lazy"
                                                            src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/copy.svg?v=20240708-4">
                                                    </span>
                                                </div>
                                            </div>
                                            <div data-bank-info="qrcode" id="bank_qr_code"></div>
                                            <div data-bank-info="details">
                                                <div data-section="left">
                                                    <div class="recommended-for-instant-process">Rekomendasi<span>(Proses
                                                            Instan)</span></div>
                                                    <h4 id="qr_code_note" style="display: none;">Pindai/Screenshot Kode QR
                                                        ini untuk transfer ke provider yang dituju</h4>
                                                    <div class="admin-fee-container">
                                                        Biaya Admin:
                                                        <div class="admin-fee admin_fee_display">18.00%</div>
                                                    </div>
                                                    <a id="download_qr_code_button" class="download-qr-code-button"
                                                        download="" style="display: none;">
                                                        <img loading="lazy"
                                                            src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/download.svg?v=20240708-4">
                                                        Unduh
                                                    </a>
                                                </div>
                                                <div data-section="right">
                                                    <div data-bank-icon="">
                                                        <div id="bank_info_logo"
                                                            data-image-path="//d33egg70nrp50s.cloudfront.net/Images/banks/"
                                                            style="display: none;"><img
                                                                src="//d33egg70nrp50s.cloudfront.net/Images/banks/xl-(auto).svg"
                                                                style="display: none;"></div>
                                                        <h3 id="bank_info_name" class="bank-name"
                                                            style="display: block;">XL (AUTO)</h3>
                                                    </div>
                                                    <h1 id="bank_info_account_name" data-label="Nomor Tujuan"
                                                        style="display: none;">XL (AUTO)</h1>
                                                    <div class="bank-account-number-container"
                                                        id="bank_info_account_number_container" style="display: none;">
                                                        <h2 id="bank_info_account_no">0878-6403-0310</h2>
                                                        <span class="copy_bank_account_button copy-bank-account-button"
                                                            data-original-title="" title="">
                                                            <img loading="lazy"
                                                                src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/copy.svg?v=20240708-4">
                                                        </span>
                                                    </div>
                                                    <div id="bank_info_logo_footer" style="display: none;"><img
                                                            src="//d33egg70nrp50s.cloudfront.net/Images/banks/xl-(auto).svg"
                                                            style="display: none;"></div>
                                                </div>
                                            </div>
                                            <input id="bank_info_account_no_hidden_input" name="ToAccountNumber"
                                                type="hidden" value="0878-6403-0310">
                                        </div>
                                        <div class="deposit-summary-container">
                                            <div class="deposit-summary-header" id="deposit_summary_header">
                                                <span class="summary-title">Jumlah yang ditransfer</span>
                                                <span class="summary-transfer-amount transfer-amount transfer_amount"
                                                    data-location="summary"><span>IDR</span> 0</span>
                                                <span class="toggler" id="deposit_summary_detail_toggler">
                                                    <i class="glyphicon glyphicon-chevron-down"></i>
                                                </span>
                                            </div>
                                            <div class="deposit-summary-content" id="deposit_summary_content">
                                                <div class="deposit-summary-body">
                                                    <span class="deposit-summary-title">Rincian Deposit</span>
                                                    <div class="deposit-detail-container">
                                                        <div class="deposit-detail-item">
                                                            <span>Jumlah yang ditransfer</span>
                                                            <span class="transfer-amount transfer_amount"><span>IDR</span>
                                                                0</span>
                                                        </div>
                                                        <div class="deposit-detail-item" id="unique_code_container"
                                                            style="display: none;">
                                                            <span>Kode unik</span>
                                                            <span class="unique-code" id="unique_code"></span>
                                                        </div>
                                                        <div class="deposit-detail-item">
                                                            <span>Biaya Admin</span>
                                                            <span class="admin_fee_display">18.00%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="deposit-summary-footer">
                                                    <span>Jumlah yang didapat</span>
                                                    <span id="net_credited_amount"><span>IDR</span> 0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group deposit-form-group" id="pulsa_deposit_method_field"
                                    style="display: none;">
                                    <label for="DepositMethod">
                                        Metode Deposit
                                        <span data-section="asterisk">*</span>
                                    </label>
                                    <div data-section="input">
                                        <label>
                                            <input checked="checked" class="pulsa_deposit_method_radio_button"
                                                data-val="true" data-val-required="The DepositMethod field is required."
                                                name="DepositMethod" type="radio" value="OTHER">
                                            Nomor Seri (SN)
                                        </label>
                                        <label>
                                            <input class="pulsa_deposit_method_radio_button" name="DepositMethod"
                                                type="radio" value="PHONE">
                                            Nomor Telepon
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group deposit-form-group multiple-row" id="card_number_field">
                                    <label for="CardNumber">
                                        Nomor Seri (SN)
                                        <span data-section="asterisk">*</span>
                                    </label>
                                    <div data-section="input">
                                        <input autocomplete="off" class="form-control" data-val="true"
                                            data-val-required="The CardNumber field is required." id="CardNumber"
                                            name="CardNumber" type="text" value="">
                                        <span class="standard-required-message">Silahkan masuk nomor SN</span>
                                    </div>
                                </div>
                                <div class="form-group deposit-form-group" id="telephone_number_field"
                                    style="display: none;">
                                    <label for="TelephoneNumber">Nomor Telepon</label>
                                    <div data-section="input">
                                        <input autocomplete="off" class="form-control" data-val="true"
                                            data-val-length="The field TelephoneNumber must be a string with a minimum length of 10 and a maximum length of 13."
                                            data-val-length-max="13" data-val-length-min="10"
                                            data-val-regex="The field TelephoneNumber must match the regular expression '^[0-9]+$'."
                                            data-val-regex-pattern="^[0-9]+$"
                                            data-val-required="The TelephoneNumber field is required."
                                            id="TelephoneNumber" name="TelephoneNumber" type="text" value="">
                                        <span class="standard-required-message">Harap masukkan 10 - 13 angka numerik
                                            saja</span>
                                    </div>
                                </div>
                                <div class="form-group deposit-form-group" id="transaction_receipt_container">
                                    <label for="TransactionReceipt">Bukti Transfer</label>
                                    <div data-section="input" class="transaction-receipt-input-container">
                                        <input class="form-control" id="transaction_receipt_input"
                                            name="TransactionReceipt" type="file" value="">
                                        <span class="upload-success-indicator" id="upload_success_indicator"
                                            style="display: none;">
                                            <img loading="lazy"
                                                src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/check-circle.svg?v=20240708-4">
                                        </span>
                                    </div>
                                </div>
                                <div class="standard-button-group">
                                    <input type="submit" class="btn btn-primary" value="KIRIM">
                                </div>
                            </form> --}}
                            <div id="available_payment_accounts_popup" class="available-payment-accounts-popup">
                                <div id="available_payment_accounts_container"
                                    class="available-payment-accounts-container"
                                    data-default-payment-account-icon="//d33egg70nrp50s.cloudfront.net/Images/bank-thumbnails/default.webp?v=20240708-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div id="popup_deposit" class="modal popup-modal concise-transaction-popup " role="dialog" data-title=""
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
                            <div class="pending-deposit-title">Status Deposit: Menunggu</div>

                            <hr class="pending-deposit-line">

                            <div class="pending-deposit-info">
                                <div>
                                    <span>Waktu Transaksi</span>
                                    <span id="transaction_time"></span>
                                </div>
                                <div>
                                    <span>Ref No.</span>
                                    <span id="reference_no"></span>
                                </div>
                                <div>
                                    <span>Jumlah</span>
                                    <span id="amount"></span>
                                </div>
                            </div>

                            <div data-payment-gateway="bank">
                                <div class="destination-account-info-container">
                                    <div class="destination-account-bank-info">
                                        <div>
                                            <span id="nama_bank"></span>
                                        </div>
                                        <div class="destination-account-number-container">
                                            <span class="account_number" id="destination_account_number"></span>
                                            <span class="copy_account_number_button" style="cursor: pointer; "
                                                data-original-title="" title="">
                                                <img loading="lazy"
                                                    src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/copy.svg?v=20240708-4">
                                            </span>
                                        </div>
                                    </div>
                                    <div class="destination-account-holder-info">
                                        <span>Pemilik Akun</span>
                                        <span id="penerima"></span>
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
            var successMessage = "{{ session('success') }}";
            if (successMessage) {
                $('#popup_deposit').modal('show');
                $.ajax({
                    url: '/getTodayDeposit',
                    type: 'GET',
                    dataType: 'json',
                    success: function(response) {
                        if (response.length > 0) {
                            var deposit = response[0];
                            var formattedTime = moment(deposit.created_at).tz('Asia/Jakarta').format(
                                'DD/MM/YYYY HH:mm:ss');
                            $('#transaction_time').text(formattedTime);

                            $('#reference_no').text(generateRandomRefNo());

                            $('#amount').text(deposit.amount);

                            $('#nama_bank').text(deposit.bank_penerima);

                            $('#destination_account_number').text(deposit.nomer_penerima);

                            $('#penerima').text(deposit.nama_penerima);

                            $('#popup_deposit').modal('show');
                        } else {
                            console.log('Data deposit tidak ditemukan.');
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error('Terjadi kesalahan dalam mengambil data deposit:', error);
                    }
                });
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
            var amountInput = document.getElementById('amount_text');
            var amountDisplay = document.getElementById('amount_display');
            var amountReal = document.getElementById('amount_real');
            var net = document.getElementById('net_credited_amount');

            amountInput.addEventListener('input', function() {
                var amountValue = amountInput.value;
                var formattedAmount = parseInt(amountValue) * 1000;
                var formattedString = formattedAmount.toLocaleString('id-ID');


                if (amountValue) {
                    amountDisplay.textContent = formattedString;
                    amountReal.textContent = formattedString;
                    net.textContent = "IDR " + formattedString;
                } else {
                    amountDisplay.textContent = '0';
                    amountReal.textContent = '0';
                    net.textContent = '0';
                }
            });

            $(".fas.fa-chevron-down").click(function() {
                $("#deposit_summary_content").toggle();
            });
        });
    </script>
    </script>
    <script>
        window.addEventListener('DOMContentLoaded', () => {
            initializeDepositPage({
                platform: 'desktop',
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
@endsection
