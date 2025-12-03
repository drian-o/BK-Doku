   <div class="standard-side-menu">
       <h4>
           Akun Saya
       </h4>
       <a href="/deposit" data-active="true">
           Deposit
       </a>
       <a href="/withdraw" data-active="false">
           Penarikan
       </a>
       <a href="/bonus" data-active="false">
           Klaim Bonus
       </a>
       <a href="/history#tab-statement" data-active="false">
           Riwayat Taruhan
       </a>
       <a href="/history/bonus" data-active="false">
           Riwayat Klaim
       </a>
       <h4>
           Personal Center
       </h4>
       <a href="/profile" data-active="false">
           Akun Saya
       </a>
       <a href="/ubah/profile" data-active="false">
           Ubah Profil
       </a>
       <a href="/lupa-password" data-active="false">
           Ubah Kata Sandi
       </a>
       <a href="/loyalitas" data-active="false">
           Hadiah Loyalitas
       </a>
       <a href="#" data-active="false">
           Unduh APK Permainan
       </a>
       <a href="/bank-member/account" data-active="false">
           Detail Perbankan
       </a>
       <a href="/message" data-active="false">
           Pesan
       </a>
       <a href="/refferal" data-active="false">
           Referensi
       </a>
   </div>
   <script>
       document.addEventListener('DOMContentLoaded', function() {
           var currentUrl = window.location.pathname;

           var links = document.querySelectorAll('.standard-side-menu a');

           links.forEach(function(link) {
               if (link.getAttribute('href') === currentUrl) {
                   link.setAttribute('data-active', 'true');
               } else {
                   link.setAttribute('data-active', 'false');
               }
           });
       });
   </script>
