@extends('layout.mobile.main')
@section('mobile')
    <link rel="stylesheet" href="../../../assets/css/mobile/withdraw.css">
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
                    <form action="/withdraw" id="withdrawal_form" method="post">
                        @csrf
                        <div class="balance-info-container">
                            <a href="/history">Riwayat Penarikan</a>
                            <div class="total-balance">
                                <p>Saldo Saya</p>
                                <span style="color: rgb(61, 148, 127); font-size:2.1rem">
                                    {{ $balance }}
                                </span>
                            </div>
                        </div>
                        <hr class="withdrawal-gap">
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
                        <div class="form-group withdrawal-form-group">
                            <label for="ToAccount">
                                Pilih Bank Anda
                                <span data-section="asterisk">*</span>
                            </label>
                            <div class="player-account-container">
                                <div class="player-account-input">
                                    <select name="bankMember" id="withdraw_to_bank_select" class="form-control valid"
                                        data-val="true" data-val-required="Pilih Akun Asal untuk disetor">
                                        <option value="">-- Bank Utama --</option>
                                        <option value="{{ Auth()->user()->bank }}|{{ Auth()->user()->accNumber }}"
                                            data-bank-name="{{ Auth()->user()->bank }}"
                                            data-account-holder="{{ Auth()->user()->accName }}"
                                            data-account-number="{{ Auth()->user()->accNumber }}" data-is-last-used="false"
                                            data-bank-logo="">
                                            {{ Auth()->user()->bank }} | {{ Auth()->user()->accNumber }}
                                        </option>
                                        <option value="" disabled>-- Bank Alternative --</option>
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
                                    <span class="field-validation-valid" data-valmsg-for="PlayerBankAccountNumber"
                                        data-valmsg-replace="true"></span>
                                </div>

                                <div class="player-account-add-button" id="add_payment_account_button">
                                    <img loading="lazy"
                                        src="//d33egg70nrp50s.cloudfront.net/Images/icons/wallet/plus.svg?v=20240708-4">
                                </div>
                            </div>
                        </div>
                        <script>
                            document.addEventListener('DOMContentLoaded', function() {
                                var selectElement = document.getElementById('withdraw_to_bank_select');

                                if (selectElement) {
                                    // Ensure dropdown is enabled and selectable
                                    selectElement.style.pointerEvents = 'auto';

                                    var options = selectElement.querySelectorAll('option');
                                    options.forEach(function(option) {
                                        option.disabled = false; // Ensure all options are enabled
                                    });

                                    selectElement.addEventListener('change', function() {
                                        var selectedValue = selectElement.value;

                                        var inputField = document.getElementById('inputField');
                                        if (inputField) {
                                            inputField.value = selectedValue;
                                        } else {

                                        }
                                    });

                                } else {

                                }
                            });
                        </script>
                        <div class="withdrawal-summary-container">
                            <div class="withdrawal-summary-header" id="withdrawal_summary_header">
                                <span class="summary-title">Jumlah yang ditransfer</span>
                                <span class="summary-transfer-amount transfer-amount transfer_amount"><span>IDR </span><span
                                        id="amount_real_mobile">0</span>
                                    <span class="toggler" id="withdrawal_summary_detail_toggler">
                                        <i class="fas fa-chevron-down"></i>
                                    </span>
                            </div>
                            <div class="withdrawal-summary-content" id="withdrawal_summary_content">
                                <div class="withdrawal-summary-body">
                                    <span class="withdrawal-summary-title">Rincian Penarikan</span>
                                    <div class="withdrawal-detail-container">
                                        <div class="withdrawal-detail-item">
                                            <span>Jumlah yang ditransfer</span>
                                            <span class="transfer-amount transfer_amount"><span
                                                    id="net_credited_amount_mobile">0</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="withdrawal-summary-footer">
                                    <span>Sisa Saldo</span>
                                    <span id="sisa_saldo_mobile"><span>IDR</span> 0</span>
                                </div>
                                <div class="remarks-container">
                                    <i>!</i>
                                    Biaya admin akan diinfokan ketika proses transaksi telah selesai di proses.
                                </div>
                            </div>
                        </div>
                        <div class="standard-button-group">
                            <input type="submit" class="standard-secondary-button" value="TARIK">
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

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var hiddenBalance = {{ $hiddenBalance }};
            var amountInput = document.getElementById('amount_text_mobile');
            var amountDisplay = document.getElementById('amount_display_mobile');
            var amountReal = document.getElementById('amount_real_mobile');
            var net = document.getElementById('net_credited_amount_mobile');
            var sisaSaldo = document.getElementById('sisa_saldo_mobile');

            // Update sisaSaldo with hiddenBalance value
            var formattedHiddenBalance = hiddenBalance.toLocaleString('id-ID');
            sisaSaldo.innerHTML = "<span>IDR </span> " + formattedHiddenBalance;

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
                    sisaSaldo.innerHTML = "<span>IDR </span> " + formattedSisaSaldo;
                } else {
                    amountDisplay.textContent = '0';
                    amountReal.textContent = '0';
                    net.textContent = '0';
                    sisaSaldo.innerHTML = "<span>IDR </span> " + formattedHiddenBalance;
                }
            });

            $(".fas.fa-chevron-down").click(function() {
                $("#withdrawal_summary_content").toggle();
            });

        });
    </script>
@endsection
