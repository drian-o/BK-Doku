$(() => {
    (window.initializeDailyReward = () => {
        const n = document.querySelector("#daily_reward_container");
        if (n) {
            const i = (t) => {
                    const i = n.querySelector("#daily_reward_chest_img");
                    t &&
                        t.alreadyClaimed === !0 &&
                        (i.dataset.pendingClaim = !1);
                    i.src =
                        i.dataset.pendingClaim === "true"
                            ? i.dataset.pendingClaimImg
                            : i.dataset.alraedyClaimedImg;
                },
                t = n.querySelector("#claim_daily_reward_button");
            t &&
                (t.onclick = async () => {
                    (t.disabled = !0),
                        await window.$.ajax({
                            type: "POST",
                            url: `/Loyalty/ClaimDailyReward`,
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: (r) => {
                                t.innerText = t.dataset.alreadyClaimed;
                                new Audio(t.dataset.soundEffectPath).play();
                                i({ alreadyClaimed: !0 });
                                const o = n.querySelector(
                                    "#daily_reward_title"
                                );
                                o.hidden = !0;
                                const s = n.querySelector("#daily_reward_desc");
                                s.hidden = !0;
                                const f = n.querySelector(
                                    "#claim_daily_reward_point_container"
                                );
                                f.classList.add("claimed");
                                const u = f.cloneNode(!0),
                                    h = u.querySelector("#reward_point");
                                h.innerText = `+${r.claimedXpAmount}`;
                                u.classList.add("cloned");
                                n.appendChild(u);
                                const e = n.querySelector(
                                        "#double_xp_expiration_countdown"
                                    ),
                                    c = new Date(new Date().getTime() + 36e5);
                                e.dataset.expirationDate = c;
                                e.style.display = "";
                                window.initializeExpirations(
                                    "#double_xp_expiration_countdown"
                                );
                                const l = n.querySelector(
                                    "#daily_reward_expiration_countdown"
                                );
                                l.style.display = "";
                                window.onDailyRewardClaimed &&
                                    window.onDailyRewardClaimed();
                            },
                        });
                });
            i();
            window.initializeExpirations("#double_xp_expiration_countdown");
            window.initializeExpirations(".expiration_countdown");
        }
    }),
        window.addEventListener("DOMContentLoaded", () => {
            const t = document.querySelectorAll(".daily_reward_button"),
                n = document.querySelector("#daily_reward_popup_modal");
            if (n && t.length) {
                const i = n.querySelector("#daily_reward_popup_container"),
                    r = (t) => {
                        if (i.childElementCount) {
                            $(n).modal("show");
                            return;
                        }
                        $.ajax({
                            type: "POST",
                            url: `/Loyalty/DailyRewardChest`,
                            data: JSON.stringify({ platform: t }),
                            contentType: "application/json; charset=utf-8",
                            dataType: "html",
                            success: (t) => {
                                (i.innerHTML = t),
                                    window.initializeDailyReward(),
                                    $(n).modal("show");
                            },
                            error: () =>
                                registerPopup({ content: "Server Error." }),
                        });
                    };
                t.forEach((n) => {
                    n.onclick = () => {
                        r(n.dataset.platform);
                    };
                });
                window.onDailyRewardClaimed = () => {
                    t.forEach((n) => {
                        n.dataset.dailyRewardAvailable = "false";
                    });
                };
            }
        });
});
