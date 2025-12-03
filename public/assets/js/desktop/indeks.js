var index = new index();
var wsConn = null;
var rootUrl = location.protocol + "//" + location.host;

function index() {
    init();

    function init() {
        document_ready();
    }
}

function document_ready() {
    $(document).ready(function () {
        (function () {
            const getAlert = localStorage.getItem("loginAlert");
            if (getAlert) {
                Swal.fire(JSON.parse(getAlert));
                localStorage.removeItem("loginAlert");
            }
        })();

        // Websocket
        if (window.WebSocket) {
            wsConnect();
            setInterval(() => {
                if (wsConn == null) {
                    console.log("Reconnecting...");
                    wsConnect();
                }
            }, 10000);
        } else {
            // the old way
            setInterval(() => {
                isAlive();
            }, 10000);
        }
    });

    sidenavListToggle();
    gameSearchToggle();
    starEndDateRange();
    bonusMultiSelect();
    filterDate();
}

function sidenavListToggle() {
    $(".transaksi-toggle").on("click", function () {
        $(".transaksi-toggle-menu").slideToggle("fast");
    });
    $(".memo-toggle").on("click", function () {
        $(".memo-toggle-menu").slideToggle("fast");
    });
    $(".permainan-toggle").on("click", function () {
        $(".permainan-toggle-menu").slideToggle("fast");
    });
    $(".bonus-toggle").on("click", function () {
        $(".bonus-toggle-menu").slideToggle("fast");
    });
    $(".mobile-seo__title").on("click", function () {
        $(".mobile-seo__toggle").slideToggle("fast");
    });
}

function gameSearchToggle() {
    $(document).ready(function () {
        $(".btn-search").on("click", function (event) {
            event.stopPropagation();
            $(".search-box").slideToggle("fast");
        });
        $(".search-box").on("click", function (event) {
            event.stopPropagation();
        });
    });

    $(document).on("click", function () {
        $(".search-box").hide();
    });
}

function starEndDateRange() {
    $('input[name="startDate"]').daterangepicker({
        singleDatePicker: true,
    });
    $('input[name="endDate"]').daterangepicker({
        singleDatePicker: true,
    });
    $('input[name="rebateDate"]').daterangepicker({
        singleDatePicker: true,
    });
}

function filterDate() {
    var start = moment().subtract(29, "days");
    var end = moment();

    function cb(start, end) {
        $(
            "#depositRange span, #transferRange span, #withdrawRange span,  #turnoverRange span ,  #refferalRange span, #downlineRange span"
        ).html(
            start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
        );
    }

    $(
        "#depositRange, #transferRange, #withdrawRange, #refferalRange, #downlineRange"
    ).daterangepicker(
        {
            startDate: start,
            endDate: end,
            ranges: {
                "Hari ini": [moment(), moment()],
                Kemarin: [
                    moment().subtract(1, "days"),
                    moment().subtract(1, "days"),
                ],
                "7 Hari Terakir": [moment().subtract(6, "days"), moment()],
                "30 Hari Terakir": [moment().subtract(29, "days"), moment()],
                "Bulan ini": [
                    moment().startOf("month"),
                    moment().endOf("month"),
                ],
                "Bulan lalu": [
                    moment().subtract(1, "month").startOf("month"),
                    moment().subtract(1, "month").endOf("month"),
                ],
            },
            locale: {
                customRangeLabel: "Pilih Tanggal",
            },
        },
        cb
    );

    cb(start, end);
}

/**
 * checkJoinPromo
 *
 * @param   string  playUrl  url to play game
 *
 * @return  void
 */
function checkJoinPromo(playUrl) {
    $.ajax({
        url: rootUrl + "/promo-check",
        dataType: "json",
        type: "GET",
        success: function (res) {
            if (res.success) {
                if (res.data.count > 0) {
                    let appendText = "";
                    $.each(res.data.promo, function (idx, row) {
                        appendText += row.event_title + ", ";
                    });

                    Swal.fire({
                        icon: "info",
                        title: res.title,
                        html: res.message + appendText.replace(/, +$/, ""),
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 5000,
                    });
                } else {
                    window.location.href = playUrl;
                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
    });
}

/**
 * Session Check
 *
 * @param   string  playUrl  url to play game
 *
 * @return  void
 */
function isAlive() {
    $.ajax({
        url: rootUrl + "/ping",
        dataType: "json",
        type: "GET",
        success: function (res) {
            if (res.alive == false) {
                window.location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
    });
}

/**
 * gamePlay play game after login
 *
 * @param   string  url  play game url
 *
 * @return  void
 */
function gamePlay(playUrl, newtab = false) {
    if (newtab) {
        window.open(playUrl, "_blank");
    } else {
        window.location.href = playUrl;
    }
}

/** WebSocket connection */
function wsConnect() {
    let min = 15;
    let max = 35;
    let wsUrl = $(".header").data("wslink");
    let playId = $(".header").data("playid");
    let dtUsername = $(".header").data("username");
    let dtCurrency = $(".header").data("currency");
    if (wsConn) {
        wsConn.close(3001);
    } else {
        wsConn = new WebSocket(wsUrl);
        wsConn.onopen = function () {
            wsConn.send(
                JSON.stringify({
                    type: "connect",
                    playId: playId,
                    username: dtUsername,
                    currency: dtCurrency,
                })
            );

            // initiate ping
            setTimeout(() => {
                wsConn.send(JSON.stringify({ type: "ping" }));
            }, Math.round(Math.random() * (max - min) + min) * 1000);

            console.log("Connection established!");
        };

        // Listen incoming message
        wsConn.onmessage = function (msg) {
            let data = JSON.parse(msg.data);
            switch (data.action) {
                case "branch:reload":
                    $.ajax({
                        url: rootUrl + "/locale-check/" + data.action,
                        dataType: "json",
                        type: "GET",
                        success: function (res) {
                            Swal.fire({
                                toast: true,
                                position: "top-end",
                                icon: "info",
                                title: "Info",
                                html: res.message,
                                showConfirmButton: false,
                                timerProgressBar: true,
                                timer: 5000,
                            }).then(() => {
                                window.location.reload();
                            });
                        },
                        error: function () {
                            window.location.reload();
                        },
                    });
                    break;

                case "user:reload":
                    $.ajax({
                        url: rootUrl + "/locale-check/" + data.action,
                        dataType: "json",
                        type: "GET",
                        success: function (res) {
                            Swal.fire({
                                toast: true,
                                position: "top-end",
                                icon: "error",
                                title: "Oops...",
                                html: res.message,
                                showConfirmButton: false,
                                timerProgressBar: true,
                                timer: 5000,
                            }).then(() => {
                                window.location.href = rootUrl + "/logout";
                            });
                        },
                        error: function () {
                            window.location.reload();
                        },
                    });
                    break;

                case "deposit:approve":
                    $.ajax({
                        url: rootUrl + "/locale-check/" + data.action,
                        dataType: "json",
                        type: "GET",
                        success: function (res) {
                            $("a[name=refreshWallet]").click();
                            Swal.fire({
                                toast: true,
                                position: "top-end",
                                icon: "success",
                                title: "Deposit Approved",
                                html: (res.message ? res.message : "").format(
                                    data.depoAmount
                                ),
                                showConfirmButton: false,
                                timerProgressBar: true,
                                timer: 5000,
                            });
                            $.showPaydiaQr(null, false);
                        },
                    });
                    break;

                case "deposit:reject":
                    $.ajax({
                        url: rootUrl + "/locale-check/" + data.action,
                        dataType: "json",
                        type: "GET",
                        success: function (res) {
                            Swal.fire({
                                toast: true,
                                position: "top-end",
                                icon: "warning",
                                title: "Deposit Rejected",
                                html: (res.message ? res.message : "").format(
                                    data.depoAmount
                                ),
                                showConfirmButton: false,
                                timerProgressBar: true,
                                timer: 5000,
                            });
                            $.showPaydiaQr(null, false);
                        },
                    });
                    break;

                case "withdraw:approve":
                    $.ajax({
                        url: rootUrl + "/locale-check/" + data.action,
                        dataType: "json",
                        type: "GET",
                        success: function (res) {
                            $("a[name=refreshWallet]").click();
                            Swal.fire({
                                toast: true,
                                position: "top-end",
                                icon: "success",
                                title: "Withdraw Approved",
                                html: (res.message ? res.message : "").format(
                                    data.wdAmount
                                ),
                                showConfirmButton: false,
                                timerProgressBar: true,
                                timer: 5000,
                            });
                        },
                    });
                    break;

                case "withdraw:reject":
                    $.ajax({
                        url: rootUrl + "/locale-check/" + data.action,
                        dataType: "json",
                        type: "GET",
                        success: function (res) {
                            $("a[name=refreshWallet]").click();
                            Swal.fire({
                                toast: true,
                                position: "top-end",
                                icon: "warning",
                                title: "Withdraw Rejected",
                                html: (res.message ? res.message : "").format(
                                    data.wdAmount
                                ),
                                showConfirmButton: false,
                                timerProgressBar: true,
                                timer: 5000,
                            });
                        },
                    });
                    break;

                case "pong":
                    setTimeout(() => {
                        wsConn.send(JSON.stringify({ type: "ping" }));
                    }, Math.round(Math.random() * (max - min) + min) * 1000);
                    break;

                default:
                    break;
            }
        };

        // OnClose handler
        wsConn.onclose = function (evt) {
            if (evt.code == 3001) {
                console.log("Connection closed");
            } else {
                console.log("WebSocket disconnected");
            }
            wsConn = null;
        };

        // OnError handler
        wsConn.onerror = function (evt) {
            if (wsConn.readyState == 1) {
                console.log("Connection error: " + evt.type);
            }
        };
    }
}

if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != "undefined" ? args[number] : match;
        });
    };
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

function bonusMultiSelect() {
    $(".multi-select-game").selectpicker({
        liveSearch: true,
        actionsBox: true,
        width: "100%",
        virtualScroll: 50,
    });
}
