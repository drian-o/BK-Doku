@extends('layout.desktop.main')
@section('content')
    <div class="site-content-container" data-container-background="general">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="standard-container-with-sidebar">
                        <div class="standard-side-menu">
                            <h4>Pusat Bantuan</h4>
                            <a class="tab-link" data-tab="about-us">Tentang {{ $setting->web }}</a>
                            <a class="tab-link" data-tab="responsible-gaming">Responsible Gambling</a>
                            <a class="tab-link" data-tab="help-center">Pusat Bantuan</a>
                            <a class="tab-link" data-tab="terms-and-conditions">Syarat dan Ketentuan</a>
                        </div>

                        <div class="standard-form-content">
                            <!-- Tab-pane untuk Tentang {{ $setting->web }} -->
                            <div id="about-us" class="info-center-container about-us-container tab-pane"
                                style="text-align: center">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 class="info-center-content-title">Tentang {{ $setting->web }}</h2>
                                        <h4>TENTANG KAMI</h4>
                                        <div>
                                            <p><strong>{{ $setting->web }}</strong></p>
                                            <p>Selamat datang di <strong>{{ $setting->web }}</strong>, situs <a
                                                    href="https://139.162.9.156:9443/">taruhan online</a>&nbsp;terkemuka di
                                                Asia, yang menyediakan beragam produk permainan terbaik di Asia.</p>
                                            <p><strong>{{ $setting->web }}</strong> adalah situs permainan taruhan olahraga
                                                hingga
                                                kasino terkemuka dan terpercaya di Asia,
                                                {{ $setting->web }}<strong></strong> menawarkan
                                                pengalaman judi online terbaik dengan berbagai variasi permainan kasino
                                                &amp; sportsbook yang dapat dipilih dengan odds paling kompetitif dalam
                                                dunia judi sepak bola. Kami menawarkan rata-rata 10.000 permainan Olahraga
                                                yang berbeda setiap bulan dan berbagai kompetisi di seluruh dunia dalam
                                                <strong>{{ $setting->web }} Sportsbook, sementara total lebih dari 100
                                                    permainan kasino
                                                    dari variasi bakarat, slot, roulette dan permainan kasino lainnya dapat
                                                    dimainkan di {{ $setting->web }} Casino.</strong>
                                            </p>
                                            <p>&nbsp;</p>
                                            <p><strong>KEAMANAN</strong></p>
                                            <p>Domain aman dan privat serta integritas produk kami adalah poros fundamental
                                                dari pengalaman taruhan online di <strong>{{ $setting->web }}</strong>. Kami
                                                selalu
                                                mengutamakan keamanan tercanggih dan memperbaharui semua permainan serta
                                                proses-proses kami secara berkala, demi memastikan pengalaman permainan
                                                online Anda 100% aman dan adil. Kami selalu mengutamakan menjaga kerahasiaan
                                                informasi Anda, dan kami tidak akan pernah membagikannya ataupun menjualnya
                                                ke pihak ketiga, kecuali diharuskan sesuai dengan yang disebutkan di
                                                Kebijakan Privasi kami.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="responsible-gaming" class="info-center-container about-us-container tab-pane"
                                style="display: none;text-align: center">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 class="info-center-content-title">Responsible Gambling</h2>
                                        <h4>RESPONSIBLE GAMBLING</h4>
                                        <div>
                                            <p><strong>KEBIJAKAN PERJUDIAN {{ $setting->web }}</strong></p>
                                            <p><strong>{{ $setting->web }}</strong> berkomitmen untuk mengesahkan taruhan
                                                yang
                                                bertanggung jawab seperti halnya mempromosikan kesadaran akan masalah judi
                                                dan meningkatkan pencegahan, intervensi dan pelayanan. Kebijakan
                                                Pertanggungjawaban Permainan
                                                <strong>{{ $setting->web }}</strong>&nbsp;menetapkan
                                                komitmennya untuk meminimalisir efek negatif dari masalah judi dan untuk
                                                mempromosikan praktek perjudian yang bertanggung jawab.
                                            </p>
                                            <p>Kami percaya ini tanggung jawab kami untuk anda, pelanggan kami, untuk
                                                memastikan bahwa anda menikmati pengalaman bertaruh di situs kami, sementara
                                                tetap menyadari penuh terhadap kerugian sosial dan keuangan yang terkait
                                                dengan masalah perjudian.</p>
                                            <p>Dalam rangka membantu pemain kami dalam pertanggunjawaban perjudian, kami
                                                memastikan bahwa semua staf kami memiliki kesadaran pertanggunjawaban
                                                perjudian. Silahkan menghubungi kami jika anda membutuhkan informasi atau
                                                bantuan lebih lanjut.</p>
                                            <p>&nbsp;</p>
                                            <p><strong>SELALU DALAM KENDALI</strong></p>
                                            <p>Sementara mayoritas dari pelanggan kami bermain dalam kemampuan mereka namun
                                                untuk beberapa orang akan lebih sulit membatasi diri. Untuk mengendalikan
                                                kebiasaan bermain anda kami meminta anda untuk mengingat beberapa poin di
                                                bawah ini:</p>
                                            <ol>
                                                <li>Hindari mengejar kekalahan.</li>
                                                <li>Hanya bertaruh jika anda yakin dapat menutup kekalahan anda.</li>
                                                <li>Selalu perhatikan waktu dan mengamati penggunaan dana anda.</li>
                                            </ol>
                                            <p>Jika anda ingin berbicara dengan seseorang yang berkaitan dengan taruhan
                                                anda, silahkan hubungi satu dari organisasi yang tertera di bawah ini.</p>
                                            <p>&nbsp;</p>
                                            <p><strong>APAKAH ANDA MEMILIKI MASALAH?</strong></p>
                                            <p>Jika taruhan anda berdampak buruk terhadap hidup anda atau hidup orang lain,
                                                maka pertanyaan berikut mungkin dapat membantu anda untuk mengenali.&nbsp;
                                            </p>
                                            <ul>
                                                <li>Apakah bertaruh mencegah anda untuk menghadiri pekerjaan atau kampus
                                                    anda?</li>
                                                <li>Apakah anda bertaruh untuk menghabiskan waktu atau untuk lari dari
                                                    kebosanan?</li>
                                                <li>Apakah anda bertaruh sendiri untuk periode waktu yang lama?</li>
                                                <li>Pernahkah orang lain mengkritik anda sehubungan dengan kebiasaan taruhan
                                                    anda?</li>
                                                <li>Apakah anda kehilangan minat kepada keluarga, teman atau hobi anda
                                                    karena taruhan?</li>
                                                <li>Apakah anda pernah berbohong untuk menutupi jumlah dana atau waktu yang
                                                    anda habiskan untuk bertaruh?</li>
                                                <li>Apakah anda berbohong, mencuri atau meminjam untuk memelihara kebiasaan
                                                    bertaruh anda?</li>
                                                <li>Apakah anda enggan untuk menggunakan dana taruhan anda untuk sesuatu
                                                    yang lainnya?</li>
                                                <li>Apakah anda bertaruh sampai anda kehilangan semua uang anda?</li>
                                                <li>Setelah kalah, apakah anda merasa bahwa anda harus mencoba dan
                                                    memenangkan kembali kekalahan anda secepatnya?</li>
                                                <li>Jika anda kehabisan uang ketika bertaruh, apakah anda merasa kalah dan
                                                    dalam keputusasaan dan merasa butuh untuk bertaruh lagi secepatnya?</li>
                                                <li>Apakah argumentasi, frustasi atau kekecewaan membuat anda menginginkan
                                                    untuk bertaruh lagi?</li>
                                                <li>Apakah bertaruh membuat anda merasa depresi atau bahkan ingin bunuh
                                                    diri?</li>
                                            </ul>
                                            <p>Semakin banyak pertanyaan yang anda jawab 'ya', semakin menunjukkan bahwa
                                                anda memiliki permasalahan dengan perjudian anda. Untuk berbicara dengan
                                                seseorang yang bisa memberikan nasihat dan dukungan, silahkan hubungi salah
                                                satu dari organisasi yang tertera di bawah ini.</p>
                                            <p>Gamblers Anonymous adalah kumpulan dari pria dan wanita yang bergabung
                                                bersama untuk membantu masalah perjudian mereka masing-masing dan sesama
                                                pemain berat lainnya. Terdapat perkumpulan regional di seluruh dunia. Situs
                                                Pelayanan internasional Gamblers Anonymous ada di:&nbsp;<a
                                                    href="http://www.gamblersanonymous.org/">www.gamblersanonymous.org&nbsp;</a>
                                            </p>
                                            <p>Gambling Therapy menyediakan bantuan dan bimbingan untuk siapapun yang
                                                terdampak buruk oleh perjudian. Situs ini bisa diakses di:&nbsp;<a
                                                    href="http://www.gamblingtherapy.org/">www.gamblingtherapy.org</a></p>
                                            <p>&nbsp;</p>
                                            <p><strong>BERJUDI DIBAWAH UMUR</strong></p>
                                            <p>Bertaruh dibawah batas umur 18 tahun merupakan tindakan ilegal di
                                                <strong>{{ $setting->web }}</strong>. <strong>{{ $setting->web }}</strong>
                                                memiliki tanggung jawab
                                                yang serius untuk masalah ini.
                                                <strong>{{ $setting->web }}</strong>&nbsp;mempunyai hak
                                                untuk meminta bukti umur dari pelanggan manapun dan untuk melakukan
                                                pengecekan untuk memverifikasi informasi yang disediakan. Akun pelanggan
                                                mungkin akan ditutup untuk sementara dan dana akan ditahan sampai tersedia
                                                bukti yang memadai mengenai umur anda.
                                            </p>
                                            <p>&nbsp;</p>
                                            <p><strong>BATAS TARUHAN</strong></p>
                                            <p>Di <strong>{{ $setting->web }}</strong>, kami mengakui pentingnya penerapan
                                                batas taruhan
                                                secara efektif untuk mengurangi masalah perjudian. Dengan demikian, kami
                                                menyediakan pengguna dengan sistem untuk mengontrol jumlah uang yang dapat
                                                anda gunakan untuk berjudi. Anda dapat mengatur batas taruhan anda untuk
                                                permainan olahraga/ sportsbook dan dapat disesuaikan pada setiap kesempatan
                                                yang anda inginkan. Cukup pilih Batas Taruhan dari halaman pengaturan akun.
                                                Setelah itu masukkan jumlah maksimum Batas Taruhan lalu klik update. Setelah
                                                pengaturan Batas Taruhan, aanda akan menerima pemberitahuan melalui email
                                                dimana anda perlu mengkonfirmasikan sebelum permintaan anda diproses. Perlu
                                                diketahui bahwa jumlah yang telah anda masukkan akan menjadi jumlah maksimum
                                                taruhan yang dapat anda pasang pada periode tujuh (7) hari berturut-turut.
                                            </p>
                                            <p>Untuk membantu Anda dalam pengaturan batas yang tepat, cobalah untuk
                                                merenungkan beberapa hal :</p>
                                            <ul>
                                                <li>Menetapkan apa yang merupakan kerugian yang diterima sebelum mulai untuk
                                                    berjudi.</li>
                                                <li>Perhatikan seberapa sering Anda bermain.</li>
                                                <li>Perhatikan berapa lama Anda bermain dalam setiap permainan.<br><br></li>
                                            </ul>
                                            <p><strong>PENGECUALIAN DIRI</strong></p>
                                            <p>Untuk pelanggan kami yang menginginkan untuk membatasi dirinya dari berjudi,
                                                kami menyediakan fasilitas pengecualian diri yang memungkinkan pelanggan
                                                untuk menutup akunnya untuk minimum waktu 6 bulan sampai 5 tahun sesuai
                                                dengan permintaan. Silahkan hubungi Petugas Layanan Pelanggan melalui “Live
                                                Chat” yang ada di situs untuk informasi lebih lanjut.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <!-- Isi kolom kanan di sini, jika diperlukan -->
                                </div>
                            </div>
                            <!-- Tab-pane untuk Pusat Bantuan -->
                            <div id="help-center" class="info-center-container about-us-container tab-pane"
                                style="display: none; text-align: center">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 class="info-center-content-title">Pusat Bantuan</h2>

                                        <p><strong>FAQs:</strong></p>
                                        <ul>
                                            <li>1. Bagaimana Cara Membuat Akun Di <strong>{{ $setting->web }}</strong>?
                                            </li>
                                            <li>Cara membuat akun di <strong>{{ $setting->web }}</strong> sangat mudah,
                                                silahkan klik
                                                tombol <strong>"Daftar"</strong> yang terletak di bagian kanan atas pada
                                                halaman utama <strong>{{ $setting->web }}</strong>. Lalu isi semua
                                                informasi yang
                                                dibutuhkan secara tepat dan benar. Anda harus mengkonfirmasi bahwa anda
                                                setidaknya berusia 18 tahun untuk melengkapi pendaftaran anda. Kolom nama
                                                belakang anda tidak dapat dikosongkan. Jika anda tidak memiliki nama
                                                belakang (nama keluarga), maka anda dapat mengulang penulisan nama depan
                                                anda.&nbsp;<em>Contoh: Angel Angel</em></li>
                                            <li>2. Mata Uang Apa Saja Yang Diterima Oleh
                                                <strong>{{ $setting->web }}</strong>?
                                            </li>
                                            <li>Dibawah ini adalah daftar semua mata uang yang diterima oleh
                                                <strong>{{ $setting->web }}</strong> hanya <strong><em>Rupiah
                                                        (IDR).</em></strong>
                                            </li>
                                            <li><strong>Catatan: *<em>1 unit Rupiah (IDR)</em></strong> di
                                                <strong>{{ $setting->web }}</strong> akan mewakili <em><strong>Rp.
                                                        1.000.</strong></em>
                                            </li>
                                            <li>3. Bagaimana Cara Menyetor Dana Ke Akun
                                                <strong>{{ $setting->web }}</strong> Saya?
                                            </li>
                                            <li>Sebelum anda dapat bertaruh, anda perlu melakukan deposit dana ke akun anda
                                                menggunakan salah satu opsi deposit berikut ini yaitu Bank Lokal seperti
                                                <em>BCA,BRI,MANDIRI &amp; BNI</em> &amp; Online Deposit e-Money seperti<em>
                                                    OVO &amp; DANA</em>
                                            </li>
                                            <li>4. Adakah batasan minimal dalam melakukan betting?</li>
                                            <li>Setiap permainan yang disediakan oleh <strong>{{ $setting->web }}</strong>
                                                memiliki
                                                taruhan minimal sesuai permainan yang dipilih. Semua informasi tersedia
                                                ketika member sudah masuk ke dalam permainan.</li>
                                            <li>5. Apakah situs kami terpercaya?</li>
                                            <li>Situs kami merupakan situs resmi yang berkantor di Manila, Filipina dimana
                                                sebelum kami beroperasi kami sudah mendapatkan lisensi PACGOR sebagai tanda
                                                bahwa kami web terpercaya. Seluruh transaksi data keuangan dan privasi anda
                                                menjadi salah satu prioritas kami dan tidak ada satupun member kami yang
                                                tidak dibayar kemenangannya.</li>
                                        </ul>
                                        <div class="panel-body">
                                            <div class="panel-body">
                                                <div class="panel-body">&nbsp;</div>
                                            </div>
                                        </div>
                                        <div class="panel-body">&nbsp;</div>
                                        <div class="panel-body">&nbsp;
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="terms-and-conditions"
                                class="info-center-container terms-and-conditions-container tab-pane"
                                style="display: none; text-align: center">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 class="info-center-content-title">Syarat dan Ketentuan</h2>

                                        <ul>
                                            <li>
                                                <p><strong>PERATURAN {{ $setting->web }}</strong></p>
                                                <ol>
                                                    <li style="list-style-type: none;">
                                                        <ol>
                                                            <li>Pendaftar harus berusia 17 tahun keatas.</li>
                                                            <li>Anda wajib memberikan data informasi dengan lengkap
                                                                dalam formulir yang tersedia( Nomor telepon, Nomor dan
                                                                Nama Rekening )</li>
                                                            <li>Proses Transaksi hanya bisa dilakukan pada jam bank
                                                                online.</li>
                                                            <li>Proses Pemindahan saldo hanya dapat dilakukan sebanyak 2
                                                                kali dalam sehari.</li>
                                                            <li>Proses Deposit dilakukan melalui Mesin ATM, Internet
                                                                banking, dan sms ( Diluar dari ini, kami menolak untuk
                                                                melakukan proses deposit ).</li>
                                                            <li>Kami berhak menolak proses setiap member yang
                                                                memanipulasi atau mencurigakan.</li>
                                                            <li>Peringatan keras bagi bonus hunter / player hantu /
                                                                betting syndicate tidak terima disini. Jika terindikasi
                                                                adanya keganjilan dalam betlist maka kami berhak menutup
                                                                akun dan menyita seluruh kredit yang ada</li>
                                                            <li>Kami melarang keras penggunaan perangkat, software,
                                                                "bots", program atau metode apapun yang diaplikasikan
                                                                untuk menghasilkan taruhan yang tidak wajar dan
                                                                merugikan pihak kami. Penutupan account akan dilakukan
                                                                tanpa adanya pemberitahuan terlebih dahulu dan semua
                                                                kemenangan dari taruhan yang dilakukan akan dibatalkan
                                                                dan sisa saldo akan dihanguskan.</li>
                                                            <li>Kami tidak menerima komplain atas Void dan Reject dalam
                                                                permainan, Sebab itu diluar tanggung jawab kami.</li>
                                                            <li>Kami tidak menerima pendaftaran apabila anda menggunakan
                                                                IP Address Luar Negri (Malaysia, Singapore, Hongkong,
                                                                Cambodia, China).</li>
                                                            <li>Proses Withdraw atau penarikan tidak dapat dilakukan
                                                                apabila informasi rekening tertuju berbeda seperti
                                                                informasi rekening pada database kami.</li>
                                                        </ol>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <script>
                        document.addEventListener('DOMContentLoaded', function() {
                            const tabLinks = document.querySelectorAll('.tab-link');
                            const tabPanes = document.querySelectorAll('.tab-pane');

                            tabLinks.forEach(link => {
                                link.addEventListener('click', function() {
                                    const tabId = this.getAttribute('data-tab');

                                    // Hide all tab panes
                                    tabPanes.forEach(pane => {
                                        pane.style.display = 'none';
                                    });

                                    // Show the selected tab pane
                                    const selectedPane = document.getElementById(tabId);
                                    if (selectedPane) {
                                        selectedPane.style.display = 'block';
                                    }
                                });
                            });
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
