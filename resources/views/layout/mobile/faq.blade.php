@extends('layout.mobile.main')
@section('mobile')
    <div data-container-background="general">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="info-center-container about-us-container standard-form-content">
                        <ul class="nav nav-tabs d-flex justify-content-between" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="tentang-kami-tab" data-toggle="tab" href="#tentang-kami"
                                    role="tab" aria-controls="tentang-kami" aria-selected="true">Tentang Kami</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="responsible-gambling-tab" data-toggle="tab"
                                    href="#responsible-gambling" role="tab" aria-controls="responsible-gambling"
                                    aria-selected="false">Responsible Gambling</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pusat-bantuan-tab" data-toggle="tab" href="#pusat-bantuan"
                                    role="tab" aria-controls="pusat-bantuan" aria-selected="false">Pusat Bantuan</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="tentang-kami" role="tabpanel"
                                aria-labelledby="tentang-kami-tab">
                                <div data-container-background="general">
                                    <div class="container" style="text-align: justify">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="info-center-container about-us-container standard-form-content">
                                                    <h2 class="info-center-content-title">Tentang {{ $setting->web }}</h2>
                                                    <h4>TENTANG KAMI</h4>
                                                    <div>
                                                        <p><strong>{{ $setting->web }}</strong></p>
                                                        <p>Selamat datang di <strong>{{ $setting->web }}</strong>, situs <a
                                                                href="https://139.162.9.156:9443/">taruhan
                                                                online</a>&nbsp;terkemuka di Asia, yang menyediakan beragam
                                                            produk permainan terbaik di Asia.</p>
                                                        <p><strong>{{ $setting->web }}</strong> adalah situs permainan
                                                            taruhan olahraga hingga kasino terkemuka dan terpercaya di Asia,
                                                            {{ $setting->web }}<strong></strong> menawarkan pengalaman judi
                                                            online terbaik dengan berbagai variasi permainan kasino &amp;
                                                            sportsbook yang dapat dipilih dengan odds paling kompetitif
                                                            dalam dunia judi sepak bola. Kami menawarkan rata-rata 10.000
                                                            permainan Olahraga yang berbeda setiap bulan dan berbagai
                                                            kompetisi di seluruh dunia dalam <strong>{{ $setting->web }}
                                                                Sportsbook, sementara total lebih dari 100 permainan kasino
                                                                dari variasi bakarat, slot, roulette dan permainan kasino
                                                                lainnya dapat dimainkan di {{ $setting->web }}
                                                                Casino.</strong></p>
                                                        <p>&nbsp;</p>
                                                        <p><strong>KEAMANAN</strong></p>
                                                        <p>Domain aman dan privat serta integritas produk kami adalah poros
                                                            fundamental dari pengalaman taruhan online di
                                                            <strong>{{ $setting->web }}</strong>. Kami selalu mengutamakan
                                                            keamanan tercanggih dan memperbaharui semua permainan serta
                                                            proses-proses kami secara berkala, demi memastikan pengalaman
                                                            permainan online Anda 100% aman dan adil. Kami selalu
                                                            mengutamakan menjaga kerahasiaan informasi Anda, dan kami tidak
                                                            akan pernah membagikannya ataupun menjualnya ke pihak ketiga,
                                                            kecuali diharuskan sesuai dengan yang disebutkan di Kebijakan
                                                            Privasi kami.
                                                        </p>
                                                        <p>&nbsp;</p>
                                                        <p><strong>PELAYANAN PELANGGAN</strong></p>
                                                        <p>Didukung layanan pelanggan 24 jam, yang tersedia 7 hari seminggu,
                                                            staf kami yang ramah dan profesional akan memastikan bahwa semua
                                                            masalah yang Anda hadapi akan ditangani dengan cepat, efisien,
                                                            dan secara ramah. Kami memberikan prioritas tinggi untuk
                                                            memastikan sistem pembayaran yang aman dan memberikan
                                                            kerahasiaan informasi pribadi.</p>
                                                        <p>Misi utama kami adalah selalu memberikan pengalaman taruhan
                                                            online terbaik bagi pemain yang bertanggung jawab. Silahkan
                                                            hubungi kami melalui Livechat dan Whatsapp, dengan saran dan
                                                            komentar Anda.</p>
                                                        <p>Kami memilki beberapa metode pembayaran yang mudah dan aman, demi
                                                            kenyamanan Anda. Kami mengikuti kebijakan kenali pelanggan Anda
                                                            (KYC) dan anti-pencucian uang (AML), dan kami bekerja sama
                                                            dengan badan keuangan serta badan pengatur demi memastikan
                                                            ketaatan berstandar tertinggi pada hukum dan peraturan.</p>
                                                        <p>&nbsp;</p>
                                                        <p><strong>PROGRAM &amp; HIBURAN</strong></p>
                                                        <p>Di <strong>{{ $setting->web }}</strong>, kami berusaha untuk
                                                            memberikan yang terbaik dalam permainan dan layanan online untuk
                                                            menawarkan pengalaman unik &amp; terbaik bagi pelanggan kami.
                                                            Kami memiliki beberapa program berhadiah, yang memberikan
                                                            pelanggan kami berbagai hadiah yang benar-benar layak untuk para
                                                            pemain. Bermain di
                                                            <strong>{{ $setting->web }}</strong>&nbsp;tidak hanya
                                                            menyenangkan dan menghibur, tetapi juga sangat menguntungkan!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="responsible-gambling" role="tabpanel"
                                aria-labelledby="responsible-gambling-tab">
                                <div class="info-center-container about-us-container standard-form-content">
                                    <h2 class="info-center-content-title">Responsible Gambling</h2>

                                    <h4>RESPONSIBLE GAMBLING</h4>
                                    <div class="blue_box">
                                        <p><strong>KEBIJAKAN PERJUDIAN {{ $setting->web }}</strong></p>
                                        <p><strong>{{ $setting->web }}</strong> berkomitmen untuk mengesahkan taruhan yang
                                            bertanggung
                                            jawab seperti halnya mempromosikan kesadaran akan masalah judi dan meningkatkan
                                            pencegahan, intervensi dan pelayanan. Kebijakan Pertanggungjawaban Permainan
                                            <strong>{{ $setting->web }}</strong>&nbsp;menetapkan komitmennya untuk
                                            meminimalisir efek
                                            negatif dari masalah judi dan untuk mempromosikan praktek perjudian yang
                                            bertanggung jawab.
                                        </p>
                                        <p>Kami percaya ini tanggung jawab kami untuk anda, pelanggan kami, untuk memastikan
                                            bahwa anda menikmati pengalaman bertaruh di situs kami, sementara tetap
                                            menyadari penuh terhadap kerugian sosial dan keuangan yang terkait dengan
                                            masalah perjudian.</p>
                                        <p>Dalam rangka membantu pemain kami dalam pertanggunjawaban perjudian, kami
                                            memastikan bahwa semua staf kami memiliki kesadaran pertanggunjawaban perjudian.
                                            Silahkan menghubungi kami jika anda membutuhkan informasi atau bantuan lebih
                                            lanjut.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>SELALU DALAM KENDALI</strong></p>
                                        <p>Sementara mayoritas dari pelanggan kami bermain dalam kemampuan mereka namun
                                            untuk beberapa orang akan lebih sulit membatasi diri. Untuk mengendalikan
                                            kebiasaan bermain anda kami meminta anda untuk mengingat beberapa poin di bawah
                                            ini:</p>
                                        <ol>
                                            <li>Hindari mengejar kekalahan.</li>
                                            <li>Hanya bertaruh jika anda yakin dapat menutup kekalahan anda.</li>
                                            <li>Selalu perhatikan waktu dan mengamati penggunaan dana anda.</li>
                                        </ol>
                                        <p>Jika anda ingin berbicara dengan seseorang yang berkaitan dengan taruhan anda,
                                            silahkan hubungi satu dari organisasi yang tertera di bawah ini.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>APAKAH ANDA MEMILIKI MASALAH?</strong></p>
                                        <p>Jika taruhan anda berdampak buruk terhadap hidup anda atau hidup orang lain, maka
                                            pertanyaan berikut mungkin dapat membantu anda untuk mengenali.&nbsp;</p>
                                        <ul>
                                            <li>Apakah bertaruh mencegah anda untuk menghadiri pekerjaan atau kampus anda?
                                            </li>
                                            <li>Apakah anda bertaruh untuk menghabiskan waktu atau untuk lari dari
                                                kebosanan?</li>
                                            <li>Apakah anda bertaruh sendiri untuk periode waktu yang lama?</li>
                                            <li>Pernahkah orang lain mengkritik anda sehubungan dengan kebiasaan taruhan
                                                anda?</li>
                                            <li>Apakah anda kehilangan minat kepada keluarga, teman atau hobi anda karena
                                                taruhan?</li>
                                            <li>Apakah anda pernah berbohong untuk menutupi jumlah dana atau waktu yang anda
                                                habiskan untuk bertaruh?</li>
                                            <li>Apakah anda berbohong, mencuri atau meminjam untuk memelihara kebiasaan
                                                bertaruh anda?</li>
                                            <li>Apakah anda enggan untuk menggunakan dana taruhan anda untuk sesuatu yang
                                                lainnya?</li>
                                            <li>Apakah anda bertaruh sampai anda kehilangan semua uang anda?</li>
                                            <li>Setelah kalah, apakah anda merasa bahwa anda harus mencoba dan memenangkan
                                                kembali kekalahan anda secepatnya?</li>
                                            <li>Jika anda kehabisan uang ketika bertaruh, apakah anda merasa kalah dan dalam
                                                keputusasaan dan merasa butuh untuk bertaruh lagi secepatnya?</li>
                                            <li>Apakah argumentasi, frustasi atau kekecewaan membuat anda menginginkan untuk
                                                bertaruh lagi?</li>
                                            <li>Apakah bertaruh membuat anda merasa depresi atau bahkan ingin bunuh diri?
                                            </li>
                                        </ul>
                                        <p>Semakin banyak pertanyaan yang anda jawab 'ya', semakin menunjukkan bahwa anda
                                            memiliki permasalahan dengan perjudian anda. Untuk berbicara dengan seseorang
                                            yang bisa memberikan nasihat dan dukungan, silahkan hubungi salah satu dari
                                            organisasi yang tertera di bawah ini.</p>
                                        <p>Gamblers Anonymous adalah kumpulan dari pria dan wanita yang bergabung bersama
                                            untuk membantu masalah perjudian mereka masing-masing dan sesama pemain berat
                                            lainnya. Terdapat perkumpulan regional di seluruh dunia. Situs Pelayanan
                                            internasional Gamblers Anonymous ada di:&nbsp;<a
                                                href="http://www.gamblersanonymous.org/">www.gamblersanonymous.org&nbsp;</a>
                                        </p>
                                        <p>Gambling Therapy menyediakan bantuan dan bimbingan untuk siapapun yang terdampak
                                            buruk oleh perjudian. Situs ini bisa diakses di:&nbsp;<a
                                                href="http://www.gamblingtherapy.org/">www.gamblingtherapy.org</a></p>
                                        <p>&nbsp;</p>
                                        <p><strong>BERJUDI DIBAWAH UMUR</strong></p>
                                        <p>Bertaruh dibawah batas umur 18 tahun merupakan tindakan ilegal di
                                            <strong>{{ $setting->web }}</strong>. <strong>{{ $setting->web }}</strong>
                                            memiliki tanggung jawab yang
                                            serius untuk masalah ini. <strong>{{ $setting->web }}</strong>&nbsp;mempunyai
                                            hak untuk
                                            meminta bukti umur dari pelanggan manapun dan untuk melakukan pengecekan untuk
                                            memverifikasi informasi yang disediakan. Akun pelanggan mungkin akan ditutup
                                            untuk sementara dan dana akan ditahan sampai tersedia bukti yang memadai
                                            mengenai umur anda.
                                        </p>
                                        <p>&nbsp;</p>
                                        <p><strong>BATAS TARUHAN</strong></p>
                                        <p>Di <strong>{{ $setting->web }}</strong>, kami mengakui pentingnya penerapan
                                            batas taruhan
                                            secara efektif untuk mengurangi masalah perjudian. Dengan demikian, kami
                                            menyediakan pengguna dengan sistem untuk mengontrol jumlah uang yang dapat anda
                                            gunakan untuk berjudi. Anda dapat mengatur batas taruhan anda untuk permainan
                                            olahraga/ sportsbook dan dapat disesuaikan pada setiap kesempatan yang anda
                                            inginkan. Cukup pilih Batas Taruhan dari halaman pengaturan akun. Setelah itu
                                            masukkan jumlah maksimum Batas Taruhan lalu klik update. Setelah pengaturan
                                            Batas Taruhan, aanda akan menerima pemberitahuan melalui email dimana anda perlu
                                            mengkonfirmasikan sebelum permintaan anda diproses. Perlu diketahui bahwa jumlah
                                            yang telah anda masukkan akan menjadi jumlah maksimum taruhan yang dapat anda
                                            pasang pada periode tujuh (7) hari berturut-turut.</p>
                                        <p>Untuk membantu Anda dalam pengaturan batas yang tepat, cobalah untuk merenungkan
                                            beberapa hal :</p>
                                        <ul>
                                            <li>Menetapkan apa yang merupakan kerugian yang diterima sebelum mulai untuk
                                                berjudi.</li>
                                            <li>Perhatikan seberapa sering Anda bermain.</li>
                                            <li>Perhatikan berapa lama Anda bermain dalam setiap permainan.<br><br></li>
                                        </ul>
                                        <p><strong>PENGECUALIAN DIRI</strong></p>
                                        <p>Untuk pelanggan kami yang menginginkan untuk membatasi dirinya dari berjudi, kami
                                            menyediakan fasilitas pengecualian diri yang memungkinkan pelanggan untuk
                                            menutup akunnya untuk minimum waktu 6 bulan sampai 5 tahun sesuai dengan
                                            permintaan. Silahkan hubungi Petugas Layanan Pelanggan melalui “Live Chat” yang
                                            ada di situs untuk informasi lebih lanjut.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pusat-bantuan" role="tabpanel"
                                aria-labelledby="pusat-bantuan-tab" style="text-align: justify">
                                <div class="info-center-container about-us-container standard-form-content">
                                    <h2 class="info-center-content-title">Pusat Bantuan</h2>

                                    <p><strong>FAQs:</strong></p>
                                    <ul>
                                        <li>1. Bagaimana Cara Membuat Akun Di <strong>{{ $setting->web }}</strong>?</li>
                                        <li>Cara membuat akun di <strong>{{ $setting->web }}</strong> sangat mudah,
                                            silahkan klik tombol
                                            <strong>"Daftar"</strong> yang terletak di bagian kanan atas pada halaman utama
                                            <strong>{{ $setting->web }}</strong>. Lalu isi semua informasi yang dibutuhkan
                                            secara tepat
                                            dan benar. Anda harus mengkonfirmasi bahwa anda setidaknya berusia 18 tahun
                                            untuk melengkapi pendaftaran anda. Kolom nama belakang anda tidak dapat
                                            dikosongkan. Jika anda tidak memiliki nama belakang (nama keluarga), maka anda
                                            dapat mengulang penulisan nama depan anda.&nbsp;<em>Contoh: Angel Angel</em>
                                        </li>
                                        <hr>
                                        <li>2. Mata Uang Apa Saja Yang Diterima Oleh <strong>{{ $setting->web }}</strong>?
                                        </li>
                                        <li>Dibawah ini adalah daftar semua mata uang yang diterima oleh
                                            <strong>{{ $setting->web }}</strong> hanya <strong><em>Rupiah
                                                    (IDR).</em></strong>
                                        </li>
                                        <li><strong>Catatan: *<em>1 unit Rupiah (IDR)</em></strong> di
                                            <strong>{{ $setting->web }}</strong> akan mewakili <em><strong>Rp.
                                                    1.000.</strong></em>
                                        </li>
                                        <hr>
                                        <li>3. Bagaimana Cara Menyetor Dana Ke Akun <strong>{{ $setting->web }}</strong>
                                            Saya?</li>
                                        <li>Sebelum anda dapat bertaruh, anda perlu melakukan deposit dana ke akun anda
                                            menggunakan salah satu opsi deposit berikut ini yaitu Bank Lokal seperti
                                            <em>BCA,BRI,MANDIRI &amp; BNI</em> &amp; Online Deposit e-Money seperti<em> OVO
                                                &amp; DANA</em>
                                        </li>
                                        <hr>
                                        <li>4. Adakah batasan minimal dalam melakukan betting?</li>
                                        <li>Setiap permainan yang disediakan oleh <strong>{{ $setting->web }}</strong>
                                            memiliki taruhan
                                            minimal sesuai permainan yang dipilih. Semua informasi tersedia ketika member
                                            sudah masuk ke dalam permainan.</li>
                                        <hr>
                                        <li>5. Apakah situs kami terpercaya?</li>
                                        <li>Situs kami merupakan situs resmi yang berkantor di Manila, Filipina dimana
                                            sebelum kami beroperasi kami sudah mendapatkan lisensi PACGOR sebagai tanda
                                            bahwa kami web terpercaya. Seluruh transaksi data keuangan dan privasi anda
                                            menjadi salah satu prioritas kami dan tidak ada satupun member kami yang tidak
                                            dibayar kemenangannya.</li>
                                    </ul>
                                    <div class="panel-body">
                                        <div class="panel-body">
                                            <div class="panel-body">&nbsp;</div>
                                        </div>
                                    </div>
                                    <div class="panel-body">&nbsp;</div>
                                    <div class="panel-body">&nbsp;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#tentang-kami-tab').tab('show');
        });
    </script>
@endsection
