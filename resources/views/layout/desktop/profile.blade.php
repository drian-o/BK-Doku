  <div class="standard-profile-bar">
      <section class="user-field">
          <img id="side_loyalty_level" loading="lazy"
              src="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/loyalty/badge/bronze.svg?v=20240708-4">
          <input type="hidden" id="loyalty_level_img_path"
              value="https://d33egg70nrp50s.cloudfront.net/Images/zoom-v2-beta/dark-turquoise/mobile/loyalty/badge/">
          <div>
              <div class="username-field">
                  <span class="username">{{ Auth()->user()->username }}</span>
                  Selamat Datang!
              </div>
              <div class="loyalty-info-container">
                  <div class="xp-field">
                      <span class="xp-label with-border">XP</span>
                      {{ Auth()->user()->point_player }} / {{ Auth()->user()->exp_player }}
                  </div>
                  <div class="lp-field">
                      <span class="lp-label with-border">LP</span>
                      {{ Auth()->user()->point_player }}
                  </div>
                  <div>
                      <a href="/loyalitas">Detail &gt;&gt;</a>
                  </div>
              </div>
          </div>
      </section>
      <section class="balance-field">
          Saldo Dompet
          <div class="currency">
              IDR
              <span class="balance total_balance">{{ $balance }}</span>
              <div class="locked-balance locked_balance_container" hidden="">
                  <i data-icon="locked-balance" class="glyphicon glyphicon-lock"></i>
                  <span class="total_locked_balance"></span>
              </div>
          </div>
      </section>
  </div>
  <script>
      $(document).ready(function() {
          fetchUserBadge();

          function fetchUserBadge() {
              $.ajax({
                  type: "GET",
                  url: "/user-badge",
                  success: function(response) {
                      if (response.success) {
                          updateBadge(response.badge_level);
                      } else {
                          console.error("Failed to fetch user badge data");
                      }
                  },
                  error: function(error) {
                      console.error("Error fetching user badge data:", error);
                  }
              });
          }

          function updateBadge(badgeLevel) {
              var badgePath = $("#loyalty_level_img_path").val();
              var badgeImage = '';

              switch (badgeLevel) {
                  case 'diamond':
                      badgeImage = "diamond.svg";
                      break;
                  case 'gold':
                      badgeImage = "gold.svg";
                      break;
                  case 'silver':
                      badgeImage = "silver.svg";
                      break;
                  default:
                      badgeImage = "bronze.svg";
              }

              // Update the badge image for both navbar and side menu
              $("#loyalty_level").attr("src", badgePath + badgeImage); // Navbar badge
              $("#side_loyalty_level").attr("src", badgePath + badgeImage); // Side menu badge
          }
      });
  </script>
