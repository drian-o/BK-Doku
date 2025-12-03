/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
(window.Modernizr = (function (a, b, c) {
    function D(a) {
        j.cssText = a;
    }
    function E(a, b) {
        return D(n.join(a + ";") + (b || ""));
    }
    function F(a, b) {
        return typeof a === b;
    }
    function G(a, b) {
        return !!~("" + a).indexOf(b);
    }
    function H(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
        }
        return !1;
    }
    function I(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f;
        }
        return !1;
    }
    function J(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            e = (a + " " + p.join(d + " ") + d).split(" ");
        return F(b, "string") || F(b, "undefined")
            ? H(e, b)
            : ((e = (a + " " + q.join(d + " ") + d).split(" ")), I(e, b, c));
    }
    function K() {
        (e.input = (function (c) {
            for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
            return (
                u.list &&
                    (u.list =
                        !!b.createElement("datalist") &&
                        !!a.HTMLDataListElement),
                u
            );
        })(
            "autocomplete autofocus list placeholder max min multiple pattern required step".split(
                " "
            )
        )),
            (e.inputtypes = (function (a) {
                for (var d = 0, e, f, h, i = a.length; d < i; d++)
                    k.setAttribute("type", (f = a[d])),
                        (e = k.type !== "text"),
                        e &&
                            ((k.value = l),
                            (k.style.cssText =
                                "position:absolute;visibility:hidden;"),
                            /^range$/.test(f) && k.style.WebkitAppearance !== c
                                ? (g.appendChild(k),
                                  (h = b.defaultView),
                                  (e =
                                      h.getComputedStyle &&
                                      h.getComputedStyle(k, null)
                                          .WebkitAppearance !== "textfield" &&
                                      k.offsetHeight !== 0),
                                  g.removeChild(k))
                                : /^(search|tel)$/.test(f) ||
                                  (/^(url|email)$/.test(f)
                                      ? (e =
                                            k.checkValidity &&
                                            k.checkValidity() === !1)
                                      : (e = k.value != l))),
                        (t[a[d]] = !!e);
                return t;
            })(
                "search tel url email datetime date month week time datetime-local number range color".split(
                    " "
                )
            ));
    }
    var d = "2.6.2",
        e = {},
        f = !0,
        g = b.documentElement,
        h = "modernizr",
        i = b.createElement(h),
        j = i.style,
        k = b.createElement("input"),
        l = ":)",
        m = {}.toString,
        n = " -webkit- -moz- -o- -ms- ".split(" "),
        o = "Webkit Moz O ms",
        p = o.split(" "),
        q = o.toLowerCase().split(" "),
        r = { svg: "http://www.w3.org/2000/svg" },
        s = {},
        t = {},
        u = {},
        v = [],
        w = v.slice,
        x,
        y = function (a, c, d, e) {
            var f,
                i,
                j,
                k,
                l = b.createElement("div"),
                m = b.body,
                n = m || b.createElement("body");
            if (parseInt(d, 10))
                while (d--)
                    (j = b.createElement("div")),
                        (j.id = e ? e[d] : h + (d + 1)),
                        l.appendChild(j);
            return (
                (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(
                    ""
                )),
                (l.id = h),
                ((m ? l : n).innerHTML += f),
                n.appendChild(l),
                m ||
                    ((n.style.background = ""),
                    (n.style.overflow = "hidden"),
                    (k = g.style.overflow),
                    (g.style.overflow = "hidden"),
                    g.appendChild(n)),
                (i = c(l, a)),
                m
                    ? l.parentNode.removeChild(l)
                    : (n.parentNode.removeChild(n), (g.style.overflow = k)),
                !!i
            );
        },
        z = function (b) {
            var c = a.matchMedia || a.msMatchMedia;
            if (c) return c(b).matches;
            var d;
            return (
                y(
                    "@media " + b + " { #" + h + " { position: absolute; } }",
                    function (b) {
                        d =
                            (a.getComputedStyle
                                ? getComputedStyle(b, null)
                                : b.currentStyle)["position"] == "absolute";
                    }
                ),
                d
            );
        },
        A = (function () {
            function d(d, e) {
                (e = e || b.createElement(a[d] || "div")), (d = "on" + d);
                var f = d in e;
                return (
                    f ||
                        (e.setAttribute || (e = b.createElement("div")),
                        e.setAttribute &&
                            e.removeAttribute &&
                            (e.setAttribute(d, ""),
                            (f = F(e[d], "function")),
                            F(e[d], "undefined") || (e[d] = c),
                            e.removeAttribute(d))),
                    (e = null),
                    f
                );
            }
            var a = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img",
            };
            return d;
        })(),
        B = {}.hasOwnProperty,
        C;
    !F(B, "undefined") && !F(B.call, "undefined")
        ? (C = function (a, b) {
              return B.call(a, b);
          })
        : (C = function (a, b) {
              return b in a && F(a.constructor.prototype[b], "undefined");
          }),
        Function.prototype.bind ||
            (Function.prototype.bind = function (b) {
                var c = this;
                if (typeof c != "function") throw new TypeError();
                var d = w.call(arguments, 1),
                    e = function () {
                        if (this instanceof e) {
                            var a = function () {};
                            a.prototype = c.prototype;
                            var f = new a(),
                                g = c.apply(f, d.concat(w.call(arguments)));
                            return Object(g) === g ? g : f;
                        }
                        return c.apply(b, d.concat(w.call(arguments)));
                    };
                return e;
            }),
        (s.flexbox = function () {
            return J("flexWrap");
        }),
        (s.canvas = function () {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d");
        }),
        (s.canvastext = function () {
            return (
                !!e.canvas &&
                !!F(
                    b.createElement("canvas").getContext("2d").fillText,
                    "function"
                )
            );
        }),
        (s.webgl = function () {
            return !!a.WebGLRenderingContext;
        }),
        (s.touch = function () {
            var c;
            return (
                "ontouchstart" in a ||
                (a.DocumentTouch && b instanceof DocumentTouch)
                    ? (c = !0)
                    : y(
                          [
                              "@media (",
                              n.join("touch-enabled),("),
                              h,
                              ")",
                              "{#modernizr{top:9px;position:absolute}}",
                          ].join(""),
                          function (a) {
                              c = a.offsetTop === 9;
                          }
                      ),
                c
            );
        }),
        (s.geolocation = function () {
            return "geolocation" in navigator;
        }),
        (s.postmessage = function () {
            return !!a.postMessage;
        }),
        (s.websqldatabase = function () {
            return !!a.openDatabase;
        }),
        (s.indexedDB = function () {
            return !!J("indexedDB", a);
        }),
        (s.hashchange = function () {
            return (
                A("hashchange", a) &&
                (b.documentMode === c || b.documentMode > 7)
            );
        }),
        (s.history = function () {
            return !!a.history && !!history.pushState;
        }),
        (s.draganddrop = function () {
            var a = b.createElement("div");
            return "draggable" in a || ("ondragstart" in a && "ondrop" in a);
        }),
        (s.websockets = function () {
            return "WebSocket" in a || "MozWebSocket" in a;
        }),
        (s.rgba = function () {
            return (
                D("background-color:rgba(150,255,150,.5)"),
                G(j.backgroundColor, "rgba")
            );
        }),
        (s.hsla = function () {
            return (
                D("background-color:hsla(120,40%,100%,.5)"),
                G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla")
            );
        }),
        (s.multiplebgs = function () {
            return (
                D("background:url(https://),url(https://),red url(https://)"),
                /(url\s*\(.*?){3}/.test(j.background)
            );
        }),
        (s.backgroundsize = function () {
            return J("backgroundSize");
        }),
        (s.borderimage = function () {
            return J("borderImage");
        }),
        (s.borderradius = function () {
            return J("borderRadius");
        }),
        (s.boxshadow = function () {
            return J("boxShadow");
        }),
        (s.textshadow = function () {
            return b.createElement("div").style.textShadow === "";
        }),
        (s.opacity = function () {
            return E("opacity:.55"), /^0.55$/.test(j.opacity);
        }),
        (s.cssanimations = function () {
            return J("animationName");
        }),
        (s.csscolumns = function () {
            return J("columnCount");
        }),
        (s.cssgradients = function () {
            var a = "background-image:",
                b =
                    "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return (
                D(
                    (
                        a +
                        "-webkit- ".split(" ").join(b + a) +
                        n.join(c + a)
                    ).slice(0, -a.length)
                ),
                G(j.backgroundImage, "gradient")
            );
        }),
        (s.cssreflections = function () {
            return J("boxReflect");
        }),
        (s.csstransforms = function () {
            return !!J("transform");
        }),
        (s.csstransforms3d = function () {
            var a = !!J("perspective");
            return (
                a &&
                    "webkitPerspective" in g.style &&
                    y(
                        "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
                        function (b, c) {
                            a = b.offsetLeft === 9 && b.offsetHeight === 3;
                        }
                    ),
                a
            );
        }),
        (s.csstransitions = function () {
            return J("transition");
        }),
        (s.fontface = function () {
            var a;
            return (
                y(
                    '@font-face {font-family:"font";src:url("https://")}',
                    function (c, d) {
                        var e = b.getElementById("smodernizr"),
                            f = e.sheet || e.styleSheet,
                            g = f
                                ? f.cssRules && f.cssRules[0]
                                    ? f.cssRules[0].cssText
                                    : f.cssText || ""
                                : "";
                        a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0;
                    }
                ),
                a
            );
        }),
        (s.generatedcontent = function () {
            var a;
            return (
                y(
                    [
                        "#",
                        h,
                        "{font:0/0 a}#",
                        h,
                        ':after{content:"',
                        l,
                        '";visibility:hidden;font:3px/1 a}',
                    ].join(""),
                    function (b) {
                        a = b.offsetHeight >= 3;
                    }
                ),
                a
            );
        }),
        (s.video = function () {
            var a = b.createElement("video"),
                c = !1;
            try {
                if ((c = !!a.canPlayType))
                    (c = new Boolean(c)),
                        (c.ogg = a
                            .canPlayType('video/ogg; codecs="theora"')
                            .replace(/^no$/, "")),
                        (c.h264 = a
                            .canPlayType('video/mp4; codecs="avc1.42E01E"')
                            .replace(/^no$/, "")),
                        (c.webm = a
                            .canPlayType('video/webm; codecs="vp8, vorbis"')
                            .replace(/^no$/, ""));
            } catch (d) {}
            return c;
        }),
        (s.audio = function () {
            var a = b.createElement("audio"),
                c = !1;
            try {
                if ((c = !!a.canPlayType))
                    (c = new Boolean(c)),
                        (c.ogg = a
                            .canPlayType('audio/ogg; codecs="vorbis"')
                            .replace(/^no$/, "")),
                        (c.mp3 = a
                            .canPlayType("audio/mpeg;")
                            .replace(/^no$/, "")),
                        (c.wav = a
                            .canPlayType('audio/wav; codecs="1"')
                            .replace(/^no$/, "")),
                        (c.m4a = (
                            a.canPlayType("audio/x-m4a;") ||
                            a.canPlayType("audio/aac;")
                        ).replace(/^no$/, ""));
            } catch (d) {}
            return c;
        }),
        (s.localstorage = function () {
            try {
                return (
                    localStorage.setItem(h, h), localStorage.removeItem(h), !0
                );
            } catch (a) {
                return !1;
            }
        }),
        (s.sessionstorage = function () {
            try {
                return (
                    sessionStorage.setItem(h, h),
                    sessionStorage.removeItem(h),
                    !0
                );
            } catch (a) {
                return !1;
            }
        }),
        (s.webworkers = function () {
            return !!a.Worker;
        }),
        (s.applicationcache = function () {
            return !!a.applicationCache;
        }),
        (s.svg = function () {
            return (
                !!b.createElementNS &&
                !!b.createElementNS(r.svg, "svg").createSVGRect
            );
        }),
        (s.inlinesvg = function () {
            var a = b.createElement("div");
            return (
                (a.innerHTML = "<svg/>"),
                (a.firstChild && a.firstChild.namespaceURI) == r.svg
            );
        }),
        (s.smil = function () {
            return (
                !!b.createElementNS &&
                /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
            );
        }),
        (s.svgclippaths = function () {
            return (
                !!b.createElementNS &&
                /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
            );
        });
    for (var L in s)
        C(s, L) &&
            ((x = L.toLowerCase()),
            (e[x] = s[L]()),
            v.push((e[x] ? "" : "no-") + x));
    return (
        e.input || K(),
        (e.addTest = function (a, b) {
            if (typeof a == "object")
                for (var d in a) C(a, d) && e.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (e[a] !== c) return e;
                (b = typeof b == "function" ? b() : b),
                    typeof f != "undefined" &&
                        f &&
                        (g.className += " " + (b ? "" : "no-") + a),
                    (e[a] = b);
            }
            return e;
        }),
        D(""),
        (i = k = null),
        (function (a, b) {
            function k(a, b) {
                var c = a.createElement("p"),
                    d = a.getElementsByTagName("head")[0] || a.documentElement;
                return (
                    (c.innerHTML = "x<style>" + b + "</style>"),
                    d.insertBefore(c.lastChild, d.firstChild)
                );
            }
            function l() {
                var a = r.elements;
                return typeof a == "string" ? a.split(" ") : a;
            }
            function m(a) {
                var b = i[a[g]];
                return b || ((b = {}), h++, (a[g] = h), (i[h] = b)), b;
            }
            function n(a, c, f) {
                c || (c = b);
                if (j) return c.createElement(a);
                f || (f = m(c));
                var g;
                return (
                    f.cache[a]
                        ? (g = f.cache[a].cloneNode())
                        : e.test(a)
                        ? (g = (f.cache[a] = f.createElem(a)).cloneNode())
                        : (g = f.createElem(a)),
                    g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                );
            }
            function o(a, c) {
                a || (a = b);
                if (j) return a.createDocumentFragment();
                c = c || m(a);
                var d = c.frag.cloneNode(),
                    e = 0,
                    f = l(),
                    g = f.length;
                for (; e < g; e++) d.createElement(f[e]);
                return d;
            }
            function p(a, b) {
                b.cache ||
                    ((b.cache = {}),
                    (b.createElem = a.createElement),
                    (b.createFrag = a.createDocumentFragment),
                    (b.frag = b.createFrag())),
                    (a.createElement = function (c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c);
                    }),
                    (a.createDocumentFragment = Function(
                        "h,f",
                        "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                            l()
                                .join()
                                .replace(/\w+/g, function (a) {
                                    return (
                                        b.createElem(a),
                                        b.frag.createElement(a),
                                        'c("' + a + '")'
                                    );
                                }) +
                            ");return n}"
                    )(r, b.frag));
            }
            function q(a) {
                a || (a = b);
                var c = m(a);
                return (
                    r.shivCSS &&
                        !f &&
                        !c.hasCSS &&
                        (c.hasCSS = !!k(
                            a,
                            "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"
                        )),
                    j || p(a, c),
                    a
                );
            }
            var c = a.html5 || {},
                d =
                    /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                e =
                    /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                f,
                g = "_html5shiv",
                h = 0,
                i = {},
                j;
            (function () {
                try {
                    var a = b.createElement("a");
                    (a.innerHTML = "<xyz></xyz>"),
                        (f = "hidden" in a),
                        (j =
                            a.childNodes.length == 1 ||
                            (function () {
                                b.createElement("a");
                                var a = b.createDocumentFragment();
                                return (
                                    typeof a.cloneNode == "undefined" ||
                                    typeof a.createDocumentFragment ==
                                        "undefined" ||
                                    typeof a.createElement == "undefined"
                                );
                            })());
                } catch (c) {
                    (f = !0), (j = !0);
                }
            })();
            var r = {
                elements:
                    c.elements ||
                    "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                shivCSS: c.shivCSS !== !1,
                supportsUnknownElements: j,
                shivMethods: c.shivMethods !== !1,
                type: "default",
                shivDocument: q,
                createElement: n,
                createDocumentFragment: o,
            };
            (a.html5 = r), q(b);
        })(this, b),
        (e._version = d),
        (e._prefixes = n),
        (e._domPrefixes = q),
        (e._cssomPrefixes = p),
        (e.mq = z),
        (e.hasEvent = A),
        (e.testProp = function (a) {
            return H([a]);
        }),
        (e.testAllProps = J),
        (e.testStyles = y),
        (e.prefixed = function (a, b, c) {
            return b ? J(a, b, c) : J(a, "pfx");
        }),
        (g.className =
            g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
            (f ? " js " + v.join(" ") : "")),
        e
    );
})(this, this.document)),
    (function (a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a);
        }
        function e(a) {
            return "string" == typeof a;
        }
        function f() {}
        function g(a) {
            return (
                !a || "loaded" == a || "complete" == a || "uninitialized" == a
            );
        }
        function h() {
            var a = p.shift();
            (q = 1),
                a
                    ? a.t
                        ? m(function () {
                              ("c" == a.t
                                  ? B.injectCss
                                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                          }, 0)
                        : (a(), h())
                    : (q = 0);
        }
        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (
                    !o &&
                    g(l.readyState) &&
                    ((u.r = o = 1),
                    !q && h(),
                    (l.onload = l.onreadystatechange = null),
                    b)
                ) {
                    "img" != a &&
                        m(function () {
                            t.removeChild(l);
                        }, 50);
                    for (var d in y[c])
                        y[c].hasOwnProperty(d) && y[c][d].onload();
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = { t: d, s: c, e: f, a: i, x: j };
            1 === y[c] && ((r = 1), (y[c] = [])),
                "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
                (l.width = l.height = "0"),
                (l.onerror =
                    l.onload =
                    l.onreadystatechange =
                        function () {
                            k.call(this, r);
                        }),
                p.splice(e, 0, u),
                "img" != a &&
                    (r || 2 === y[c]
                        ? (t.insertBefore(l, s ? null : n), m(k, j))
                        : y[c].push(l));
        }
        function j(a, b, c, d, f) {
            return (
                (q = 0),
                (b = b || "j"),
                e(a)
                    ? i("c" == b ? v : u, a, b, this.i++, c, d, f)
                    : (p.splice(this.i++, 0, a), 1 == p.length && h()),
                this
            );
        }
        function k() {
            var a = B;
            return (a.loader = { load: j, i: 0 }), a;
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w =
                Array.isArray ||
                function (a) {
                    return "[object Array]" == o.call(a);
                },
            x = [],
            y = {},
            z = {
                timeout: function (a, b) {
                    return b.length && (a.timeout = b[0]), a;
                },
            },
            A,
            B;
        (B = function (a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = { url: c, origUrl: c, prefixes: a },
                    e,
                    f,
                    g;
                for (f = 0; f < d; f++)
                    (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c;
            }
            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(),
                    i.bypass ||
                        (e &&
                            (e = d(e)
                                ? e
                                : e[a] ||
                                  e[g] ||
                                  e[a.split("/").pop().split("?")[0]]),
                        i.instead
                            ? i.instead(a, e, f, g, h)
                            : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                              f.load(
                                  i.url,
                                  i.forceCSS ||
                                      (!i.forceJS &&
                                          "css" ==
                                              i.url
                                                  .split(".")
                                                  .pop()
                                                  .split("?")
                                                  .shift())
                                      ? "c"
                                      : c,
                                  i.noexec,
                                  i.attrs,
                                  i.timeout
                              ),
                              (d(e) || d(j)) &&
                                  f.load(function () {
                                      k(),
                                          e && e(i.origUrl, h, g),
                                          j && j(i.origUrl, h, g),
                                          (y[i.url] = 2);
                                  })));
            }
            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a))
                            c ||
                                (j = function () {
                                    var a = [].slice.call(arguments);
                                    k.apply(this, a), l();
                                }),
                                g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in ((m = (function () {
                                var b = 0,
                                    c;
                                for (c in a) a.hasOwnProperty(c) && b++;
                                return b;
                            })()),
                            a))
                                a.hasOwnProperty(n) &&
                                    (!c &&
                                        !--m &&
                                        (d(j)
                                            ? (j = function () {
                                                  var a = [].slice.call(
                                                      arguments
                                                  );
                                                  k.apply(this, a), l();
                                              })
                                            : (j[n] = (function (a) {
                                                  return function () {
                                                      var b = [].slice.call(
                                                          arguments
                                                      );
                                                      a && a.apply(this, b),
                                                          l();
                                                  };
                                              })(k[n]))),
                                    g(a[n], j, b, n, h));
                    } else !c && l();
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m,
                    n;
                c(h ? a.yep : a.nope, !!i), i && c(i);
            }
            var i,
                j,
                l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++)
                    (j = a[i]),
                        e(j)
                            ? g(j, 0, l, 0)
                            : w(j)
                            ? B(j)
                            : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l);
        }),
            (B.addPrefix = function (a, b) {
                z[a] = b;
            }),
            (B.addFilter = function (a) {
                x.push(a);
            }),
            (B.errorTimeout = 1e4),
            null == b.readyState &&
                b.addEventListener &&
                ((b.readyState = "loading"),
                b.addEventListener(
                    "DOMContentLoaded",
                    (A = function () {
                        b.removeEventListener("DOMContentLoaded", A, 0),
                            (b.readyState = "complete");
                    }),
                    0
                )),
            (a.yepnope = k()),
            (a.yepnope.executeStack = h),
            (a.yepnope.injectJs = function (a, c, d, e, i, j) {
                var k = b.createElement("script"),
                    l,
                    o,
                    e = e || B.errorTimeout;
                k.src = a;
                for (o in d) k.setAttribute(o, d[o]);
                (c = j ? h : c || f),
                    (k.onreadystatechange = k.onload =
                        function () {
                            !l &&
                                g(k.readyState) &&
                                ((l = 1),
                                c(),
                                (k.onload = k.onreadystatechange = null));
                        }),
                    m(function () {
                        l || ((l = 1), c(1));
                    }, e),
                    i ? k.onload() : n.parentNode.insertBefore(k, n);
            }),
            (a.yepnope.injectCss = function (a, c, d, e, g, i) {
                var e = b.createElement("link"),
                    j,
                    c = i ? h : c || f;
                (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
                for (j in d) e.setAttribute(j, d[j]);
                g || (n.parentNode.insertBefore(e, n), m(c, 0));
            });
    })(this, document),
    (Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0));
    });
/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * JQUERY CORE 1.10.2; Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; http://jquery.org/license
 * Includes Sizzle.js; Copyright 2013 jQuery Foundation, Inc. and other contributors; http://opensource.org/licenses/MIT
 *
 * NUGET: END LICENSE TEXT */
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function (e, t) {
    var n,
        r,
        i = typeof t,
        o = e.location,
        a = e.document,
        s = a.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {},
        p = [],
        f = "1.10.2",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        y = c.toString,
        v = c.hasOwnProperty,
        b = f.trim,
        x = function (e, t) {
            return new x.fn.init(e, t, r);
        },
        w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        L = /-([\da-z])/gi,
        H = function (e, t) {
            return t.toUpperCase();
        },
        q = function (e) {
            (a.addEventListener ||
                "load" === e.type ||
                "complete" === a.readyState) &&
                (_(), x.ready());
        },
        _ = function () {
            a.addEventListener
                ? (a.removeEventListener("DOMContentLoaded", q, !1),
                  e.removeEventListener("load", q, !1))
                : (a.detachEvent("onreadystatechange", q),
                  e.detachEvent("onload", q));
        };
    (x.fn = x.prototype =
        {
            jquery: f,
            constructor: x,
            init: function (e, n, r) {
                var i, o;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (
                        ((i =
                            "<" === e.charAt(0) &&
                            ">" === e.charAt(e.length - 1) &&
                            e.length >= 3
                                ? [null, e, null]
                                : N.exec(e)),
                        !i || (!i[1] && n))
                    )
                        return !n || n.jquery
                            ? (n || r).find(e)
                            : this.constructor(n).find(e);
                    if (i[1]) {
                        if (
                            ((n = n instanceof x ? n[0] : n),
                            x.merge(
                                this,
                                x.parseHTML(
                                    i[1],
                                    n && n.nodeType ? n.ownerDocument || n : a,
                                    !0
                                )
                            ),
                            k.test(i[1]) && x.isPlainObject(n))
                        )
                            for (i in n)
                                x.isFunction(this[i])
                                    ? this[i](n[i])
                                    : this.attr(i, n[i]);
                        return this;
                    }
                    if (((o = a.getElementById(i[2])), o && o.parentNode)) {
                        if (o.id !== i[2]) return r.find(e);
                        (this.length = 1), (this[0] = o);
                    }
                    return (this.context = a), (this.selector = e), this;
                }
                return e.nodeType
                    ? ((this.context = this[0] = e), (this.length = 1), this)
                    : x.isFunction(e)
                    ? r.ready(e)
                    : (e.selector !== t &&
                          ((this.selector = e.selector),
                          (this.context = e.context)),
                      x.makeArray(e, this));
            },
            selector: "",
            length: 0,
            toArray: function () {
                return g.call(this);
            },
            get: function (e) {
                return null == e
                    ? this.toArray()
                    : 0 > e
                    ? this[this.length + e]
                    : this[e];
            },
            pushStack: function (e) {
                var t = x.merge(this.constructor(), e);
                return (t.prevObject = this), (t.context = this.context), t;
            },
            each: function (e, t) {
                return x.each(this, e, t);
            },
            ready: function (e) {
                return x.ready.promise().done(e), this;
            },
            slice: function () {
                return this.pushStack(g.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
            },
            map: function (e) {
                return this.pushStack(
                    x.map(this, function (t, n) {
                        return e.call(t, n, t);
                    })
                );
            },
            end: function () {
                return this.prevObject || this.constructor(null);
            },
            push: h,
            sort: [].sort,
            splice: [].splice,
        }),
        (x.fn.init.prototype = x.fn),
        (x.extend = x.fn.extend =
            function () {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for (
                    "boolean" == typeof s &&
                        ((c = s), (s = arguments[1] || {}), (l = 2)),
                        "object" == typeof s || x.isFunction(s) || (s = {}),
                        u === l && ((s = this), --l);
                    u > l;
                    l++
                )
                    if (null != (o = arguments[l]))
                        for (i in o)
                            (e = s[i]),
                                (r = o[i]),
                                s !== r &&
                                    (c &&
                                    r &&
                                    (x.isPlainObject(r) || (n = x.isArray(r)))
                                        ? (n
                                              ? ((n = !1),
                                                (a =
                                                    e && x.isArray(e) ? e : []))
                                              : (a =
                                                    e && x.isPlainObject(e)
                                                        ? e
                                                        : {}),
                                          (s[i] = x.extend(c, a, r)))
                                        : r !== t && (s[i] = r));
                return s;
            }),
        x.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            noConflict: function (t) {
                return (
                    e.$ === x && (e.$ = u),
                    t && e.jQuery === x && (e.jQuery = l),
                    x
                );
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? x.readyWait++ : x.ready(!0);
            },
            ready: function (e) {
                if (e === !0 ? !--x.readyWait : !x.isReady) {
                    if (!a.body) return setTimeout(x.ready);
                    (x.isReady = !0),
                        (e !== !0 && --x.readyWait > 0) ||
                            (n.resolveWith(a, [x]),
                            x.fn.trigger && x(a).trigger("ready").off("ready"));
                }
            },
            isFunction: function (e) {
                return "function" === x.type(e);
            },
            isArray:
                Array.isArray ||
                function (e) {
                    return "array" === x.type(e);
                },
            isWindow: function (e) {
                return null != e && e == e.window;
            },
            isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
            },
            type: function (e) {
                return null == e
                    ? e + ""
                    : "object" == typeof e || "function" == typeof e
                    ? c[y.call(e)] || "object"
                    : typeof e;
            },
            isPlainObject: function (e) {
                var n;
                if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))
                    return !1;
                try {
                    if (
                        e.constructor &&
                        !v.call(e, "constructor") &&
                        !v.call(e.constructor.prototype, "isPrototypeOf")
                    )
                        return !1;
                } catch (r) {
                    return !1;
                }
                if (x.support.ownLast) for (n in e) return v.call(e, n);
                for (n in e);
                return n === t || v.call(e, n);
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            error: function (e) {
                throw Error(e);
            },
            parseHTML: function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && ((n = t), (t = !1)), (t = t || a);
                var r = k.exec(e),
                    i = !n && [];
                return r
                    ? [t.createElement(r[1])]
                    : ((r = x.buildFragment([e], t, i)),
                      i && x(i).remove(),
                      x.merge([], r.childNodes));
            },
            parseJSON: function (n) {
                return e.JSON && e.JSON.parse
                    ? e.JSON.parse(n)
                    : null === n
                    ? n
                    : "string" == typeof n &&
                      ((n = x.trim(n)),
                      n &&
                          E.test(
                              n.replace(A, "@").replace(j, "]").replace(S, "")
                          ))
                    ? Function("return " + n)()
                    : (x.error("Invalid JSON: " + n), t);
            },
            parseXML: function (n) {
                var r, i;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser
                        ? ((i = new DOMParser()),
                          (r = i.parseFromString(n, "text/xml")))
                        : ((r = new ActiveXObject("Microsoft.XMLDOM")),
                          (r.async = "false"),
                          r.loadXML(n));
                } catch (o) {
                    r = t;
                }
                return (
                    (r &&
                        r.documentElement &&
                        !r.getElementsByTagName("parsererror").length) ||
                        x.error("Invalid XML: " + n),
                    r
                );
            },
            noop: function () {},
            globalEval: function (t) {
                t &&
                    x.trim(t) &&
                    (
                        e.execScript ||
                        function (t) {
                            e.eval.call(e, t);
                        }
                    )(t);
            },
            camelCase: function (e) {
                return e.replace(D, "ms-").replace(L, H);
            },
            nodeName: function (e, t) {
                return (
                    e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                );
            },
            each: function (e, t, n) {
                var r,
                    i = 0,
                    o = e.length,
                    a = M(e);
                if (n) {
                    if (a) {
                        for (; o > i; i++)
                            if (((r = t.apply(e[i], n)), r === !1)) break;
                    } else
                        for (i in e)
                            if (((r = t.apply(e[i], n)), r === !1)) break;
                } else if (a) {
                    for (; o > i; i++)
                        if (((r = t.call(e[i], i, e[i])), r === !1)) break;
                } else
                    for (i in e)
                        if (((r = t.call(e[i], i, e[i])), r === !1)) break;
                return e;
            },
            trim:
                b && !b.call("\ufeff\u00a0")
                    ? function (e) {
                          return null == e ? "" : b.call(e);
                      }
                    : function (e) {
                          return null == e ? "" : (e + "").replace(C, "");
                      },
            makeArray: function (e, t) {
                var n = t || [];
                return (
                    null != e &&
                        (M(Object(e))
                            ? x.merge(n, "string" == typeof e ? [e] : e)
                            : h.call(n, e)),
                    n
                );
            },
            inArray: function (e, t, n) {
                var r;
                if (t) {
                    if (m) return m.call(t, e, n);
                    for (
                        r = t.length,
                            n = n ? (0 > n ? Math.max(0, r + n) : n) : 0;
                        r > n;
                        n++
                    )
                        if (n in t && t[n] === e) return n;
                }
                return -1;
            },
            merge: function (e, n) {
                var r = n.length,
                    i = e.length,
                    o = 0;
                if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
                else while (n[o] !== t) e[i++] = n[o++];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                var r,
                    i = [],
                    o = 0,
                    a = e.length;
                for (n = !!n; a > o; o++)
                    (r = !!t(e[o], o)), n !== r && i.push(e[o]);
                return i;
            },
            map: function (e, t, n) {
                var r,
                    i = 0,
                    o = e.length,
                    a = M(e),
                    s = [];
                if (a)
                    for (; o > i; i++)
                        (r = t(e[i], i, n)), null != r && (s[s.length] = r);
                else
                    for (i in e)
                        (r = t(e[i], i, n)), null != r && (s[s.length] = r);
                return d.apply([], s);
            },
            guid: 1,
            proxy: function (e, n) {
                var r, i, o;
                return (
                    "string" == typeof n && ((o = e[n]), (n = e), (e = o)),
                    x.isFunction(e)
                        ? ((r = g.call(arguments, 2)),
                          (i = function () {
                              return e.apply(
                                  n || this,
                                  r.concat(g.call(arguments))
                              );
                          }),
                          (i.guid = e.guid = e.guid || x.guid++),
                          i)
                        : t
                );
            },
            access: function (e, n, r, i, o, a, s) {
                var l = 0,
                    u = e.length,
                    c = null == r;
                if ("object" === x.type(r)) {
                    o = !0;
                    for (l in r) x.access(e, n, l, r[l], !0, a, s);
                } else if (
                    i !== t &&
                    ((o = !0),
                    x.isFunction(i) || (s = !0),
                    c &&
                        (s
                            ? (n.call(e, i), (n = null))
                            : ((c = n),
                              (n = function (e, t, n) {
                                  return c.call(x(e), n);
                              }))),
                    n)
                )
                    for (; u > l; l++)
                        n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
                return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
            },
            now: function () {
                return new Date().getTime();
            },
            swap: function (e, t, n, r) {
                var i,
                    o,
                    a = {};
                for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i;
            },
        }),
        (x.ready.promise = function (t) {
            if (!n)
                if (((n = x.Deferred()), "complete" === a.readyState))
                    setTimeout(x.ready);
                else if (a.addEventListener)
                    a.addEventListener("DOMContentLoaded", q, !1),
                        e.addEventListener("load", q, !1);
                else {
                    a.attachEvent("onreadystatechange", q),
                        e.attachEvent("onload", q);
                    var r = !1;
                    try {
                        r = null == e.frameElement && a.documentElement;
                    } catch (i) {}
                    r &&
                        r.doScroll &&
                        (function o() {
                            if (!x.isReady) {
                                try {
                                    r.doScroll("left");
                                } catch (e) {
                                    return setTimeout(o, 50);
                                }
                                _(), x.ready();
                            }
                        })();
                }
            return n.promise(t);
        }),
        x.each(
            "Boolean Number String Function Array Date RegExp Object Error".split(
                " "
            ),
            function (e, t) {
                c["[object " + t + "]"] = t.toLowerCase();
            }
        );
    function M(e) {
        var t = e.length,
            n = x.type(e);
        return x.isWindow(e)
            ? !1
            : 1 === e.nodeType && t
            ? !0
            : "array" === n ||
              ("function" !== n &&
                  (0 === t || ("number" == typeof t && t > 0 && t - 1 in e)));
    }
    (r = x(a)),
        (function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s,
                l,
                u,
                c,
                p,
                f,
                d,
                h,
                g,
                m,
                y,
                v,
                b = "sizzle" + -new Date(),
                w = e.document,
                T = 0,
                C = 0,
                N = st(),
                k = st(),
                E = st(),
                S = !1,
                A = function (e, t) {
                    return e === t ? ((S = !0), 0) : 0;
                },
                j = typeof t,
                D = 1 << 31,
                L = {}.hasOwnProperty,
                H = [],
                q = H.pop,
                _ = H.push,
                M = H.push,
                O = H.slice,
                F =
                    H.indexOf ||
                    function (e) {
                        var t = 0,
                            n = this.length;
                        for (; n > t; t++) if (this[t] === e) return t;
                        return -1;
                    },
                B =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                W = R.replace("w", "w#"),
                $ =
                    "\\[" +
                    P +
                    "*(" +
                    R +
                    ")" +
                    P +
                    "*(?:([*^$|!~]?=)" +
                    P +
                    "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
                    W +
                    ")|)|)" +
                    P +
                    "*\\]",
                I =
                    ":(" +
                    R +
                    ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
                    $.replace(3, 8) +
                    ")*)|.*)\\)|)",
                z = RegExp(
                    "^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$",
                    "g"
                ),
                X = RegExp("^" + P + "*," + P + "*"),
                U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                V = RegExp(P + "*[+~]"),
                Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
                J = RegExp(I),
                G = RegExp("^" + W + "$"),
                Q = {
                    ID: RegExp("^#(" + R + ")"),
                    CLASS: RegExp("^\\.(" + R + ")"),
                    TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + $),
                    PSEUDO: RegExp("^" + I),
                    CHILD: RegExp(
                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                            P +
                            "*(even|odd|(([+-]|)(\\d*)n|)" +
                            P +
                            "*(?:([+-]|)" +
                            P +
                            "*(\\d+)|))" +
                            P +
                            "*\\)|)",
                        "i"
                    ),
                    bool: RegExp("^(?:" + B + ")$", "i"),
                    needsContext: RegExp(
                        "^" +
                            P +
                            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                            P +
                            "*((?:-\\d)?\\d*)" +
                            P +
                            "*\\)|)(?=[^-]|$)",
                        "i"
                    ),
                },
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                et = /^(?:input|select|textarea|button)$/i,
                tt = /^h\d$/i,
                nt = /'|\\/g,
                rt = RegExp(
                    "\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)",
                    "ig"
                ),
                it = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n
                        ? t
                        : 0 > r
                        ? String.fromCharCode(r + 65536)
                        : String.fromCharCode(
                              55296 | (r >> 10),
                              56320 | (1023 & r)
                          );
                };
            try {
                M.apply((H = O.call(w.childNodes)), w.childNodes),
                    H[w.childNodes.length].nodeType;
            } catch (ot) {
                M = {
                    apply: H.length
                        ? function (e, t) {
                              _.apply(e, O.call(t));
                          }
                        : function (e, t) {
                              var n = e.length,
                                  r = 0;
                              while ((e[n++] = t[r++]));
                              e.length = n - 1;
                          },
                };
            }
            function at(e, t, n, i) {
                var o, a, s, l, u, c, d, m, y, x;
                if (
                    ((t ? t.ownerDocument || t : w) !== f && p(t),
                    (t = t || f),
                    (n = n || []),
                    !e || "string" != typeof e)
                )
                    return n;
                if (1 !== (l = t.nodeType) && 9 !== l) return [];
                if (h && !i) {
                    if ((o = Z.exec(e)))
                        if ((s = o[1])) {
                            if (9 === l) {
                                if (
                                    ((a = t.getElementById(s)),
                                    !a || !a.parentNode)
                                )
                                    return n;
                                if (a.id === s) return n.push(a), n;
                            } else if (
                                t.ownerDocument &&
                                (a = t.ownerDocument.getElementById(s)) &&
                                v(t, a) &&
                                a.id === s
                            )
                                return n.push(a), n;
                        } else {
                            if (o[2])
                                return M.apply(n, t.getElementsByTagName(e)), n;
                            if (
                                (s = o[3]) &&
                                r.getElementsByClassName &&
                                t.getElementsByClassName
                            )
                                return (
                                    M.apply(n, t.getElementsByClassName(s)), n
                                );
                        }
                    if (r.qsa && (!g || !g.test(e))) {
                        if (
                            ((m = d = b),
                            (y = t),
                            (x = 9 === l && e),
                            1 === l && "object" !== t.nodeName.toLowerCase())
                        ) {
                            (c = mt(e)),
                                (d = t.getAttribute("id"))
                                    ? (m = d.replace(nt, "\\$&"))
                                    : t.setAttribute("id", m),
                                (m = "[id='" + m + "'] "),
                                (u = c.length);
                            while (u--) c[u] = m + yt(c[u]);
                            (y = (V.test(e) && t.parentNode) || t),
                                (x = c.join(","));
                        }
                        if (x)
                            try {
                                return M.apply(n, y.querySelectorAll(x)), n;
                            } catch (T) {
                            } finally {
                                d || t.removeAttribute("id");
                            }
                    }
                }
                return kt(e.replace(z, "$1"), t, n, i);
            }
            function st() {
                var e = [];
                function t(n, r) {
                    return (
                        e.push((n += " ")) > o.cacheLength &&
                            delete t[e.shift()],
                        (t[n] = r)
                    );
                }
                return t;
            }
            function lt(e) {
                return (e[b] = !0), e;
            }
            function ut(e) {
                var t = f.createElement("div");
                try {
                    return !!e(t);
                } catch (n) {
                    return !1;
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
            }
            function ct(e, t) {
                var n = e.split("|"),
                    r = e.length;
                while (r--) o.attrHandle[n[r]] = t;
            }
            function pt(e, t) {
                var n = t && e,
                    r =
                        n &&
                        1 === e.nodeType &&
                        1 === t.nodeType &&
                        (~t.sourceIndex || D) - (~e.sourceIndex || D);
                if (r) return r;
                if (n) while ((n = n.nextSibling)) if (n === t) return -1;
                return e ? 1 : -1;
            }
            function ft(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e;
                };
            }
            function dt(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e;
                };
            }
            function ht(e) {
                return lt(function (t) {
                    return (
                        (t = +t),
                        lt(function (n, r) {
                            var i,
                                o = e([], n.length, t),
                                a = o.length;
                            while (a--)
                                n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                        })
                    );
                });
            }
            (s = at.isXML =
                function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1;
                }),
                (r = at.support = {}),
                (p = at.setDocument =
                    function (e) {
                        var n = e ? e.ownerDocument || e : w,
                            i = n.defaultView;
                        return n !== f && 9 === n.nodeType && n.documentElement
                            ? ((f = n),
                              (d = n.documentElement),
                              (h = !s(n)),
                              i &&
                                  i.attachEvent &&
                                  i !== i.top &&
                                  i.attachEvent("onbeforeunload", function () {
                                      p();
                                  }),
                              (r.attributes = ut(function (e) {
                                  return (
                                      (e.className = "i"),
                                      !e.getAttribute("className")
                                  );
                              })),
                              (r.getElementsByTagName = ut(function (e) {
                                  return (
                                      e.appendChild(n.createComment("")),
                                      !e.getElementsByTagName("*").length
                                  );
                              })),
                              (r.getElementsByClassName = ut(function (e) {
                                  return (
                                      (e.innerHTML =
                                          "<div class='a'></div><div class='a i'></div>"),
                                      (e.firstChild.className = "i"),
                                      2 === e.getElementsByClassName("i").length
                                  );
                              })),
                              (r.getById = ut(function (e) {
                                  return (
                                      (d.appendChild(e).id = b),
                                      !n.getElementsByName ||
                                          !n.getElementsByName(b).length
                                  );
                              })),
                              r.getById
                                  ? ((o.find.ID = function (e, t) {
                                        if (
                                            typeof t.getElementById !== j &&
                                            h
                                        ) {
                                            var n = t.getElementById(e);
                                            return n && n.parentNode ? [n] : [];
                                        }
                                    }),
                                    (o.filter.ID = function (e) {
                                        var t = e.replace(rt, it);
                                        return function (e) {
                                            return e.getAttribute("id") === t;
                                        };
                                    }))
                                  : (delete o.find.ID,
                                    (o.filter.ID = function (e) {
                                        var t = e.replace(rt, it);
                                        return function (e) {
                                            var n =
                                                typeof e.getAttributeNode !==
                                                    j &&
                                                e.getAttributeNode("id");
                                            return n && n.value === t;
                                        };
                                    })),
                              (o.find.TAG = r.getElementsByTagName
                                  ? function (e, n) {
                                        return typeof n.getElementsByTagName !==
                                            j
                                            ? n.getElementsByTagName(e)
                                            : t;
                                    }
                                  : function (e, t) {
                                        var n,
                                            r = [],
                                            i = 0,
                                            o = t.getElementsByTagName(e);
                                        if ("*" === e) {
                                            while ((n = o[i++]))
                                                1 === n.nodeType && r.push(n);
                                            return r;
                                        }
                                        return o;
                                    }),
                              (o.find.CLASS =
                                  r.getElementsByClassName &&
                                  function (e, n) {
                                      return typeof n.getElementsByClassName !==
                                          j && h
                                          ? n.getElementsByClassName(e)
                                          : t;
                                  }),
                              (m = []),
                              (g = []),
                              (r.qsa = K.test(n.querySelectorAll)) &&
                                  (ut(function (e) {
                                      (e.innerHTML =
                                          "<select><option selected=''></option></select>"),
                                          e.querySelectorAll("[selected]")
                                              .length ||
                                              g.push(
                                                  "\\[" +
                                                      P +
                                                      "*(?:value|" +
                                                      B +
                                                      ")"
                                              ),
                                          e.querySelectorAll(":checked")
                                              .length || g.push(":checked");
                                  }),
                                  ut(function (e) {
                                      var t = n.createElement("input");
                                      t.setAttribute("type", "hidden"),
                                          e
                                              .appendChild(t)
                                              .setAttribute("t", ""),
                                          e.querySelectorAll("[t^='']")
                                              .length &&
                                              g.push(
                                                  "[*^$]=" + P + "*(?:''|\"\")"
                                              ),
                                          e.querySelectorAll(":enabled")
                                              .length ||
                                              g.push(":enabled", ":disabled"),
                                          e.querySelectorAll("*,:x"),
                                          g.push(",.*:");
                                  })),
                              (r.matchesSelector = K.test(
                                  (y =
                                      d.webkitMatchesSelector ||
                                      d.mozMatchesSelector ||
                                      d.oMatchesSelector ||
                                      d.msMatchesSelector)
                              )) &&
                                  ut(function (e) {
                                      (r.disconnectedMatch = y.call(e, "div")),
                                          y.call(e, "[s!='']:x"),
                                          m.push("!=", I);
                                  }),
                              (g = g.length && RegExp(g.join("|"))),
                              (m = m.length && RegExp(m.join("|"))),
                              (v =
                                  K.test(d.contains) ||
                                  d.compareDocumentPosition
                                      ? function (e, t) {
                                            var n =
                                                    9 === e.nodeType
                                                        ? e.documentElement
                                                        : e,
                                                r = t && t.parentNode;
                                            return (
                                                e === r ||
                                                !(
                                                    !r ||
                                                    1 !== r.nodeType ||
                                                    !(n.contains
                                                        ? n.contains(r)
                                                        : e.compareDocumentPosition &&
                                                          16 &
                                                              e.compareDocumentPosition(
                                                                  r
                                                              ))
                                                )
                                            );
                                        }
                                      : function (e, t) {
                                            if (t)
                                                while ((t = t.parentNode))
                                                    if (t === e) return !0;
                                            return !1;
                                        }),
                              (A = d.compareDocumentPosition
                                  ? function (e, t) {
                                        if (e === t) return (S = !0), 0;
                                        var i =
                                            t.compareDocumentPosition &&
                                            e.compareDocumentPosition &&
                                            e.compareDocumentPosition(t);
                                        return i
                                            ? 1 & i ||
                                              (!r.sortDetached &&
                                                  t.compareDocumentPosition(
                                                      e
                                                  ) === i)
                                                ? e === n || v(w, e)
                                                    ? -1
                                                    : t === n || v(w, t)
                                                    ? 1
                                                    : c
                                                    ? F.call(c, e) -
                                                      F.call(c, t)
                                                    : 0
                                                : 4 & i
                                                ? -1
                                                : 1
                                            : e.compareDocumentPosition
                                            ? -1
                                            : 1;
                                    }
                                  : function (e, t) {
                                        var r,
                                            i = 0,
                                            o = e.parentNode,
                                            a = t.parentNode,
                                            s = [e],
                                            l = [t];
                                        if (e === t) return (S = !0), 0;
                                        if (!o || !a)
                                            return e === n
                                                ? -1
                                                : t === n
                                                ? 1
                                                : o
                                                ? -1
                                                : a
                                                ? 1
                                                : c
                                                ? F.call(c, e) - F.call(c, t)
                                                : 0;
                                        if (o === a) return pt(e, t);
                                        r = e;
                                        while ((r = r.parentNode)) s.unshift(r);
                                        r = t;
                                        while ((r = r.parentNode)) l.unshift(r);
                                        while (s[i] === l[i]) i++;
                                        return i
                                            ? pt(s[i], l[i])
                                            : s[i] === w
                                            ? -1
                                            : l[i] === w
                                            ? 1
                                            : 0;
                                    }),
                              n)
                            : f;
                    }),
                (at.matches = function (e, t) {
                    return at(e, null, null, t);
                }),
                (at.matchesSelector = function (e, t) {
                    if (
                        ((e.ownerDocument || e) !== f && p(e),
                        (t = t.replace(Y, "='$1']")),
                        !(
                            !r.matchesSelector ||
                            !h ||
                            (m && m.test(t)) ||
                            (g && g.test(t))
                        ))
                    )
                        try {
                            var n = y.call(e, t);
                            if (
                                n ||
                                r.disconnectedMatch ||
                                (e.document && 11 !== e.document.nodeType)
                            )
                                return n;
                        } catch (i) {}
                    return at(t, f, null, [e]).length > 0;
                }),
                (at.contains = function (e, t) {
                    return (e.ownerDocument || e) !== f && p(e), v(e, t);
                }),
                (at.attr = function (e, n) {
                    (e.ownerDocument || e) !== f && p(e);
                    var i = o.attrHandle[n.toLowerCase()],
                        a =
                            i && L.call(o.attrHandle, n.toLowerCase())
                                ? i(e, n, !h)
                                : t;
                    return a === t
                        ? r.attributes || !h
                            ? e.getAttribute(n)
                            : (a = e.getAttributeNode(n)) && a.specified
                            ? a.value
                            : null
                        : a;
                }),
                (at.error = function (e) {
                    throw Error("Syntax error, unrecognized expression: " + e);
                }),
                (at.uniqueSort = function (e) {
                    var t,
                        n = [],
                        i = 0,
                        o = 0;
                    if (
                        ((S = !r.detectDuplicates),
                        (c = !r.sortStable && e.slice(0)),
                        e.sort(A),
                        S)
                    ) {
                        while ((t = e[o++])) t === e[o] && (i = n.push(o));
                        while (i--) e.splice(n[i], 1);
                    }
                    return e;
                }),
                (a = at.getText =
                    function (e) {
                        var t,
                            n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent)
                                    return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    n += a(e);
                            } else if (3 === i || 4 === i) return e.nodeValue;
                        } else for (; (t = e[r]); r++) n += a(t);
                        return n;
                    }),
                (o = at.selectors =
                    {
                        cacheLength: 50,
                        createPseudo: lt,
                        match: Q,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": { dir: "parentNode", first: !0 },
                            " ": { dir: "parentNode" },
                            "+": { dir: "previousSibling", first: !0 },
                            "~": { dir: "previousSibling" },
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return (
                                    (e[1] = e[1].replace(rt, it)),
                                    (e[3] = (e[4] || e[5] || "").replace(
                                        rt,
                                        it
                                    )),
                                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                    e.slice(0, 4)
                                );
                            },
                            CHILD: function (e) {
                                return (
                                    (e[1] = e[1].toLowerCase()),
                                    "nth" === e[1].slice(0, 3)
                                        ? (e[3] || at.error(e[0]),
                                          (e[4] = +(e[4]
                                              ? e[5] + (e[6] || 1)
                                              : 2 *
                                                ("even" === e[3] ||
                                                    "odd" === e[3]))),
                                          (e[5] = +(
                                              e[7] + e[8] || "odd" === e[3]
                                          )))
                                        : e[3] && at.error(e[0]),
                                    e
                                );
                            },
                            PSEUDO: function (e) {
                                var n,
                                    r = !e[5] && e[2];
                                return Q.CHILD.test(e[0])
                                    ? null
                                    : (e[3] && e[4] !== t
                                          ? (e[2] = e[4])
                                          : r &&
                                            J.test(r) &&
                                            (n = mt(r, !0)) &&
                                            (n =
                                                r.indexOf(")", r.length - n) -
                                                r.length) &&
                                            ((e[0] = e[0].slice(0, n)),
                                            (e[2] = r.slice(0, n))),
                                      e.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(rt, it).toLowerCase();
                                return "*" === e
                                    ? function () {
                                          return !0;
                                      }
                                    : function (e) {
                                          return (
                                              e.nodeName &&
                                              e.nodeName.toLowerCase() === t
                                          );
                                      };
                            },
                            CLASS: function (e) {
                                var t = N[e + " "];
                                return (
                                    t ||
                                    ((t = RegExp(
                                        "(^|" + P + ")" + e + "(" + P + "|$)"
                                    )) &&
                                        N(e, function (e) {
                                            return t.test(
                                                ("string" ==
                                                    typeof e.className &&
                                                    e.className) ||
                                                    (typeof e.getAttribute !==
                                                        j &&
                                                        e.getAttribute(
                                                            "class"
                                                        )) ||
                                                    ""
                                            );
                                        }))
                                );
                            },
                            ATTR: function (e, t, n) {
                                return function (r) {
                                    var i = at.attr(r, e);
                                    return null == i
                                        ? "!=" === t
                                        : t
                                        ? ((i += ""),
                                          "=" === t
                                              ? i === n
                                              : "!=" === t
                                              ? i !== n
                                              : "^=" === t
                                              ? n && 0 === i.indexOf(n)
                                              : "*=" === t
                                              ? n && i.indexOf(n) > -1
                                              : "$=" === t
                                              ? n && i.slice(-n.length) === n
                                              : "~=" === t
                                              ? (" " + i + " ").indexOf(n) > -1
                                              : "|=" === t
                                              ? i === n ||
                                                i.slice(0, n.length + 1) ===
                                                    n + "-"
                                              : !1)
                                        : !0;
                                };
                            },
                            CHILD: function (e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === i
                                    ? function (e) {
                                          return !!e.parentNode;
                                      }
                                    : function (t, n, l) {
                                          var u,
                                              c,
                                              p,
                                              f,
                                              d,
                                              h,
                                              g =
                                                  o !== a
                                                      ? "nextSibling"
                                                      : "previousSibling",
                                              m = t.parentNode,
                                              y = s && t.nodeName.toLowerCase(),
                                              v = !l && !s;
                                          if (m) {
                                              if (o) {
                                                  while (g) {
                                                      p = t;
                                                      while ((p = p[g]))
                                                          if (
                                                              s
                                                                  ? p.nodeName.toLowerCase() ===
                                                                    y
                                                                  : 1 ===
                                                                    p.nodeType
                                                          )
                                                              return !1;
                                                      h = g =
                                                          "only" === e &&
                                                          !h &&
                                                          "nextSibling";
                                                  }
                                                  return !0;
                                              }
                                              if (
                                                  ((h = [
                                                      a
                                                          ? m.firstChild
                                                          : m.lastChild,
                                                  ]),
                                                  a && v)
                                              ) {
                                                  (c = m[b] || (m[b] = {})),
                                                      (u = c[e] || []),
                                                      (d = u[0] === T && u[1]),
                                                      (f = u[0] === T && u[2]),
                                                      (p =
                                                          d && m.childNodes[d]);
                                                  while (
                                                      (p =
                                                          (++d && p && p[g]) ||
                                                          (f = d = 0) ||
                                                          h.pop())
                                                  )
                                                      if (
                                                          1 === p.nodeType &&
                                                          ++f &&
                                                          p === t
                                                      ) {
                                                          c[e] = [T, d, f];
                                                          break;
                                                      }
                                              } else if (
                                                  v &&
                                                  (u = (t[b] || (t[b] = {}))[
                                                      e
                                                  ]) &&
                                                  u[0] === T
                                              )
                                                  f = u[1];
                                              else
                                                  while (
                                                      (p =
                                                          (++d && p && p[g]) ||
                                                          (f = d = 0) ||
                                                          h.pop())
                                                  )
                                                      if (
                                                          (s
                                                              ? p.nodeName.toLowerCase() ===
                                                                y
                                                              : 1 ===
                                                                p.nodeType) &&
                                                          ++f &&
                                                          (v &&
                                                              ((p[b] ||
                                                                  (p[b] = {}))[
                                                                  e
                                                              ] = [T, f]),
                                                          p === t)
                                                      )
                                                          break;
                                              return (
                                                  (f -= i),
                                                  f === r ||
                                                      (0 === f % r &&
                                                          f / r >= 0)
                                              );
                                          }
                                      };
                            },
                            PSEUDO: function (e, t) {
                                var n,
                                    r =
                                        o.pseudos[e] ||
                                        o.setFilters[e.toLowerCase()] ||
                                        at.error("unsupported pseudo: " + e);
                                return r[b]
                                    ? r(t)
                                    : r.length > 1
                                    ? ((n = [e, e, "", t]),
                                      o.setFilters.hasOwnProperty(
                                          e.toLowerCase()
                                      )
                                          ? lt(function (e, n) {
                                                var i,
                                                    o = r(e, t),
                                                    a = o.length;
                                                while (a--)
                                                    (i = F.call(e, o[a])),
                                                        (e[i] = !(n[i] = o[a]));
                                            })
                                          : function (e) {
                                                return r(e, 0, n);
                                            })
                                    : r;
                            },
                        },
                        pseudos: {
                            not: lt(function (e) {
                                var t = [],
                                    n = [],
                                    r = l(e.replace(z, "$1"));
                                return r[b]
                                    ? lt(function (e, t, n, i) {
                                          var o,
                                              a = r(e, null, i, []),
                                              s = e.length;
                                          while (s--)
                                              (o = a[s]) &&
                                                  (e[s] = !(t[s] = o));
                                      })
                                    : function (e, i, o) {
                                          return (
                                              (t[0] = e),
                                              r(t, null, o, n),
                                              !n.pop()
                                          );
                                      };
                            }),
                            has: lt(function (e) {
                                return function (t) {
                                    return at(e, t).length > 0;
                                };
                            }),
                            contains: lt(function (e) {
                                return function (t) {
                                    return (
                                        (
                                            t.textContent ||
                                            t.innerText ||
                                            a(t)
                                        ).indexOf(e) > -1
                                    );
                                };
                            }),
                            lang: lt(function (e) {
                                return (
                                    G.test(e || "") ||
                                        at.error("unsupported lang: " + e),
                                    (e = e.replace(rt, it).toLowerCase()),
                                    function (t) {
                                        var n;
                                        do
                                            if (
                                                (n = h
                                                    ? t.lang
                                                    : t.getAttribute(
                                                          "xml:lang"
                                                      ) ||
                                                      t.getAttribute("lang"))
                                            )
                                                return (
                                                    (n = n.toLowerCase()),
                                                    n === e ||
                                                        0 === n.indexOf(e + "-")
                                                );
                                        while (
                                            (t = t.parentNode) &&
                                            1 === t.nodeType
                                        );
                                        return !1;
                                    }
                                );
                            }),
                            target: function (t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id;
                            },
                            root: function (e) {
                                return e === d;
                            },
                            focus: function (e) {
                                return (
                                    e === f.activeElement &&
                                    (!f.hasFocus || f.hasFocus()) &&
                                    !!(e.type || e.href || ~e.tabIndex)
                                );
                            },
                            enabled: function (e) {
                                return e.disabled === !1;
                            },
                            disabled: function (e) {
                                return e.disabled === !0;
                            },
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return (
                                    ("input" === t && !!e.checked) ||
                                    ("option" === t && !!e.selected)
                                );
                            },
                            selected: function (e) {
                                return (
                                    e.parentNode && e.parentNode.selectedIndex,
                                    e.selected === !0
                                );
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (
                                        e.nodeName > "@" ||
                                        3 === e.nodeType ||
                                        4 === e.nodeType
                                    )
                                        return !1;
                                return !0;
                            },
                            parent: function (e) {
                                return !o.pseudos.empty(e);
                            },
                            header: function (e) {
                                return tt.test(e.nodeName);
                            },
                            input: function (e) {
                                return et.test(e.nodeName);
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return (
                                    ("input" === t && "button" === e.type) ||
                                    "button" === t
                                );
                            },
                            text: function (e) {
                                var t;
                                return (
                                    "input" === e.nodeName.toLowerCase() &&
                                    "text" === e.type &&
                                    (null == (t = e.getAttribute("type")) ||
                                        t.toLowerCase() === e.type)
                                );
                            },
                            first: ht(function () {
                                return [0];
                            }),
                            last: ht(function (e, t) {
                                return [t - 1];
                            }),
                            eq: ht(function (e, t, n) {
                                return [0 > n ? n + t : n];
                            }),
                            even: ht(function (e, t) {
                                var n = 0;
                                for (; t > n; n += 2) e.push(n);
                                return e;
                            }),
                            odd: ht(function (e, t) {
                                var n = 1;
                                for (; t > n; n += 2) e.push(n);
                                return e;
                            }),
                            lt: ht(function (e, t, n) {
                                var r = 0 > n ? n + t : n;
                                for (; --r >= 0; ) e.push(r);
                                return e;
                            }),
                            gt: ht(function (e, t, n) {
                                var r = 0 > n ? n + t : n;
                                for (; t > ++r; ) e.push(r);
                                return e;
                            }),
                        },
                    }),
                (o.pseudos.nth = o.pseudos.eq);
            for (n in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0,
            })
                o.pseudos[n] = ft(n);
            for (n in { submit: !0, reset: !0 }) o.pseudos[n] = dt(n);
            function gt() {}
            (gt.prototype = o.filters = o.pseudos), (o.setFilters = new gt());
            function mt(e, t) {
                var n,
                    r,
                    i,
                    a,
                    s,
                    l,
                    u,
                    c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                (s = e), (l = []), (u = o.preFilter);
                while (s) {
                    (!n || (r = X.exec(s))) &&
                        (r && (s = s.slice(r[0].length) || s),
                        l.push((i = []))),
                        (n = !1),
                        (r = U.exec(s)) &&
                            ((n = r.shift()),
                            i.push({ value: n, type: r[0].replace(z, " ") }),
                            (s = s.slice(n.length)));
                    for (a in o.filter)
                        !(r = Q[a].exec(s)) ||
                            (u[a] && !(r = u[a](r))) ||
                            ((n = r.shift()),
                            i.push({ value: n, type: a, matches: r }),
                            (s = s.slice(n.length)));
                    if (!n) break;
                }
                return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
            }
            function yt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) r += e[t].value;
                return r;
            }
            function vt(e, t, n) {
                var r = t.dir,
                    o = n && "parentNode" === r,
                    a = C++;
                return t.first
                    ? function (t, n, i) {
                          while ((t = t[r]))
                              if (1 === t.nodeType || o) return e(t, n, i);
                      }
                    : function (t, n, s) {
                          var l,
                              u,
                              c,
                              p = T + " " + a;
                          if (s) {
                              while ((t = t[r]))
                                  if ((1 === t.nodeType || o) && e(t, n, s))
                                      return !0;
                          } else
                              while ((t = t[r]))
                                  if (1 === t.nodeType || o)
                                      if (
                                          ((c = t[b] || (t[b] = {})),
                                          (u = c[r]) && u[0] === p)
                                      ) {
                                          if ((l = u[1]) === !0 || l === i)
                                              return l === !0;
                                      } else if (
                                          ((u = c[r] = [p]),
                                          (u[1] = e(t, n, s) || i),
                                          u[1] === !0)
                                      )
                                          return !0;
                      };
            }
            function bt(e) {
                return e.length > 1
                    ? function (t, n, r) {
                          var i = e.length;
                          while (i--) if (!e[i](t, n, r)) return !1;
                          return !0;
                      }
                    : e[0];
            }
            function xt(e, t, n, r, i) {
                var o,
                    a = [],
                    s = 0,
                    l = e.length,
                    u = null != t;
                for (; l > s; s++)
                    (o = e[s]) &&
                        (!n || n(o, r, i)) &&
                        (a.push(o), u && t.push(s));
                return a;
            }
            function wt(e, t, n, r, i, o) {
                return (
                    r && !r[b] && (r = wt(r)),
                    i && !i[b] && (i = wt(i, o)),
                    lt(function (o, a, s, l) {
                        var u,
                            c,
                            p,
                            f = [],
                            d = [],
                            h = a.length,
                            g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
                            m = !e || (!o && t) ? g : xt(g, f, e, s, l),
                            y = n ? (i || (o ? e : h || r) ? [] : a) : m;
                        if ((n && n(m, y, s, l), r)) {
                            (u = xt(y, d)), r(u, [], s, l), (c = u.length);
                            while (c--)
                                (p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
                        }
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    (u = []), (c = y.length);
                                    while (c--)
                                        (p = y[c]) && u.push((m[c] = p));
                                    i(null, (y = []), u, l);
                                }
                                c = y.length;
                                while (c--)
                                    (p = y[c]) &&
                                        (u = i ? F.call(o, p) : f[c]) > -1 &&
                                        (o[u] = !(a[u] = p));
                            }
                        } else (y = xt(y === a ? y.splice(h, y.length) : y)), i ? i(null, a, y, l) : M.apply(a, y);
                    })
                );
            }
            function Tt(e) {
                var t,
                    n,
                    r,
                    i = e.length,
                    a = o.relative[e[0].type],
                    s = a || o.relative[" "],
                    l = a ? 1 : 0,
                    c = vt(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    p = vt(
                        function (e) {
                            return F.call(t, e) > -1;
                        },
                        s,
                        !0
                    ),
                    f = [
                        function (e, n, r) {
                            return (
                                (!a && (r || n !== u)) ||
                                ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                            );
                        },
                    ];
                for (; i > l; l++)
                    if ((n = o.relative[e[l].type])) f = [vt(bt(f), n)];
                    else {
                        if (
                            ((n = o.filter[e[l].type].apply(
                                null,
                                e[l].matches
                            )),
                            n[b])
                        ) {
                            for (r = ++l; i > r; r++)
                                if (o.relative[e[r].type]) break;
                            return wt(
                                l > 1 && bt(f),
                                l > 1 &&
                                    yt(
                                        e.slice(0, l - 1).concat({
                                            value:
                                                " " === e[l - 2].type
                                                    ? "*"
                                                    : "",
                                        })
                                    ).replace(z, "$1"),
                                n,
                                r > l && Tt(e.slice(l, r)),
                                i > r && Tt((e = e.slice(r))),
                                i > r && yt(e)
                            );
                        }
                        f.push(n);
                    }
                return bt(f);
            }
            function Ct(e, t) {
                var n = 0,
                    r = t.length > 0,
                    a = e.length > 0,
                    s = function (s, l, c, p, d) {
                        var h,
                            g,
                            m,
                            y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            C = u,
                            N =
                                s ||
                                (a &&
                                    o.find.TAG("*", (d && l.parentNode) || l)),
                            k = (T += null == C ? 1 : Math.random() || 0.1);
                        for (
                            w && ((u = l !== f && l), (i = n));
                            null != (h = N[b]);
                            b++
                        ) {
                            if (a && h) {
                                g = 0;
                                while ((m = e[g++]))
                                    if (m(h, l, c)) {
                                        p.push(h);
                                        break;
                                    }
                                w && ((T = k), (i = ++n));
                            }
                            r && ((h = !m && h) && v--, s && x.push(h));
                        }
                        if (((v += b), r && b !== v)) {
                            g = 0;
                            while ((m = t[g++])) m(x, y, l, c);
                            if (s) {
                                if (v > 0)
                                    while (b--)
                                        x[b] || y[b] || (y[b] = q.call(p));
                                y = xt(y);
                            }
                            M.apply(p, y),
                                w &&
                                    !s &&
                                    y.length > 0 &&
                                    v + t.length > 1 &&
                                    at.uniqueSort(p);
                        }
                        return w && ((T = k), (u = C)), x;
                    };
                return r ? lt(s) : s;
            }
            l = at.compile = function (e, t) {
                var n,
                    r = [],
                    i = [],
                    o = E[e + " "];
                if (!o) {
                    t || (t = mt(e)), (n = t.length);
                    while (n--) (o = Tt(t[n])), o[b] ? r.push(o) : i.push(o);
                    o = E(e, Ct(i, r));
                }
                return o;
            };
            function Nt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) at(e, t[r], n);
                return n;
            }
            function kt(e, t, n, i) {
                var a,
                    s,
                    u,
                    c,
                    p,
                    f = mt(e);
                if (!i && 1 === f.length) {
                    if (
                        ((s = f[0] = f[0].slice(0)),
                        s.length > 2 &&
                            "ID" === (u = s[0]).type &&
                            r.getById &&
                            9 === t.nodeType &&
                            h &&
                            o.relative[s[1].type])
                    ) {
                        if (
                            ((t = (o.find.ID(u.matches[0].replace(rt, it), t) ||
                                [])[0]),
                            !t)
                        )
                            return n;
                        e = e.slice(s.shift().value.length);
                    }
                    a = Q.needsContext.test(e) ? 0 : s.length;
                    while (a--) {
                        if (((u = s[a]), o.relative[(c = u.type)])) break;
                        if (
                            (p = o.find[c]) &&
                            (i = p(
                                u.matches[0].replace(rt, it),
                                (V.test(s[0].type) && t.parentNode) || t
                            ))
                        ) {
                            if ((s.splice(a, 1), (e = i.length && yt(s)), !e))
                                return M.apply(n, i), n;
                            break;
                        }
                    }
                }
                return l(e, f)(i, t, !h, n, V.test(e)), n;
            }
            (r.sortStable = b.split("").sort(A).join("") === b),
                (r.detectDuplicates = S),
                p(),
                (r.sortDetached = ut(function (e) {
                    return (
                        1 & e.compareDocumentPosition(f.createElement("div"))
                    );
                })),
                ut(function (e) {
                    return (
                        (e.innerHTML = "<a href='#'></a>"),
                        "#" === e.firstChild.getAttribute("href")
                    );
                }) ||
                    ct("type|href|height|width", function (e, n, r) {
                        return r
                            ? t
                            : e.getAttribute(
                                  n,
                                  "type" === n.toLowerCase() ? 1 : 2
                              );
                    }),
                (r.attributes &&
                    ut(function (e) {
                        return (
                            (e.innerHTML = "<input/>"),
                            e.firstChild.setAttribute("value", ""),
                            "" === e.firstChild.getAttribute("value")
                        );
                    })) ||
                    ct("value", function (e, n, r) {
                        return r || "input" !== e.nodeName.toLowerCase()
                            ? t
                            : e.defaultValue;
                    }),
                ut(function (e) {
                    return null == e.getAttribute("disabled");
                }) ||
                    ct(B, function (e, n, r) {
                        var i;
                        return r
                            ? t
                            : (i = e.getAttributeNode(n)) && i.specified
                            ? i.value
                            : e[n] === !0
                            ? n.toLowerCase()
                            : null;
                    }),
                (x.find = at),
                (x.expr = at.selectors),
                (x.expr[":"] = x.expr.pseudos),
                (x.unique = at.uniqueSort),
                (x.text = at.getText),
                (x.isXMLDoc = at.isXML),
                (x.contains = at.contains);
        })(e);
    var O = {};
    function F(e) {
        var t = (O[e] = {});
        return (
            x.each(e.match(T) || [], function (e, n) {
                t[n] = !0;
            }),
            t
        );
    }
    (x.Callbacks = function (e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n,
            r,
            i,
            o,
            a,
            s,
            l = [],
            u = !e.once && [],
            c = function (t) {
                for (
                    r = e.memory && t,
                        i = !0,
                        a = s || 0,
                        s = 0,
                        o = l.length,
                        n = !0;
                    l && o > a;
                    a++
                )
                    if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break;
                    }
                (n = !1),
                    l &&
                        (u
                            ? u.length && c(u.shift())
                            : r
                            ? (l = [])
                            : p.disable());
            },
            p = {
                add: function () {
                    if (l) {
                        var t = l.length;
                        (function i(t) {
                            x.each(t, function (t, n) {
                                var r = x.type(n);
                                "function" === r
                                    ? (e.unique && p.has(n)) || l.push(n)
                                    : n && n.length && "string" !== r && i(n);
                            });
                        })(arguments),
                            n ? (o = l.length) : r && ((s = t), c(r));
                    }
                    return this;
                },
                remove: function () {
                    return (
                        l &&
                            x.each(arguments, function (e, t) {
                                var r;
                                while ((r = x.inArray(t, l, r)) > -1)
                                    l.splice(r, 1),
                                        n && (o >= r && o--, a >= r && a--);
                            }),
                        this
                    );
                },
                has: function (e) {
                    return e ? x.inArray(e, l) > -1 : !(!l || !l.length);
                },
                empty: function () {
                    return (l = []), (o = 0), this;
                },
                disable: function () {
                    return (l = u = r = t), this;
                },
                disabled: function () {
                    return !l;
                },
                lock: function () {
                    return (u = t), r || p.disable(), this;
                },
                locked: function () {
                    return !u;
                },
                fireWith: function (e, t) {
                    return (
                        !l ||
                            (i && !u) ||
                            ((t = t || []),
                            (t = [e, t.slice ? t.slice() : t]),
                            n ? u.push(t) : c(t)),
                        this
                    );
                },
                fire: function () {
                    return p.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!i;
                },
            };
        return p;
    }),
        x.extend({
            Deferred: function (e) {
                var t = [
                        [
                            "resolve",
                            "done",
                            x.Callbacks("once memory"),
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            x.Callbacks("once memory"),
                            "rejected",
                        ],
                        ["notify", "progress", x.Callbacks("memory")],
                    ],
                    n = "pending",
                    r = {
                        state: function () {
                            return n;
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var e = arguments;
                            return x
                                .Deferred(function (n) {
                                    x.each(t, function (t, o) {
                                        var a = o[0],
                                            s = x.isFunction(e[t]) && e[t];
                                        i[o[1]](function () {
                                            var e =
                                                s && s.apply(this, arguments);
                                            e && x.isFunction(e.promise)
                                                ? e
                                                      .promise()
                                                      .done(n.resolve)
                                                      .fail(n.reject)
                                                      .progress(n.notify)
                                                : n[a + "With"](
                                                      this === r
                                                          ? n.promise()
                                                          : this,
                                                      s ? [e] : arguments
                                                  );
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? x.extend(e, r) : r;
                        },
                    },
                    i = {};
                return (
                    (r.pipe = r.then),
                    x.each(t, function (e, o) {
                        var a = o[2],
                            s = o[3];
                        (r[o[1]] = a.add),
                            s &&
                                a.add(
                                    function () {
                                        n = s;
                                    },
                                    t[1 ^ e][2].disable,
                                    t[2][2].lock
                                ),
                            (i[o[0]] = function () {
                                return (
                                    i[o[0] + "With"](
                                        this === i ? r : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (i[o[0] + "With"] = a.fireWith);
                    }),
                    r.promise(i),
                    e && e.call(i, i),
                    i
                );
            },
            when: function (e) {
                var t = 0,
                    n = g.call(arguments),
                    r = n.length,
                    i = 1 !== r || (e && x.isFunction(e.promise)) ? r : 0,
                    o = 1 === i ? e : x.Deferred(),
                    a = function (e, t, n) {
                        return function (r) {
                            (t[e] = this),
                                (n[e] =
                                    arguments.length > 1
                                        ? g.call(arguments)
                                        : r),
                                n === s
                                    ? o.notifyWith(t, n)
                                    : --i || o.resolveWith(t, n);
                        };
                    },
                    s,
                    l,
                    u;
                if (r > 1)
                    for (s = Array(r), l = Array(r), u = Array(r); r > t; t++)
                        n[t] && x.isFunction(n[t].promise)
                            ? n[t]
                                  .promise()
                                  .done(a(t, u, n))
                                  .fail(o.reject)
                                  .progress(a(t, l, s))
                            : --i;
                return i || o.resolveWith(u, n), o.promise();
            },
        }),
        (x.support = (function (t) {
            var n,
                r,
                o,
                s,
                l,
                u,
                c,
                p,
                f,
                d = a.createElement("div");
            if (
                (d.setAttribute("className", "t"),
                (d.innerHTML =
                    "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (n = d.getElementsByTagName("*") || []),
                (r = d.getElementsByTagName("a")[0]),
                !r || !r.style || !n.length)
            )
                return t;
            (s = a.createElement("select")),
                (u = s.appendChild(a.createElement("option"))),
                (o = d.getElementsByTagName("input")[0]),
                (r.style.cssText = "top:1px;float:left;opacity:.5"),
                (t.getSetAttribute = "t" !== d.className),
                (t.leadingWhitespace = 3 === d.firstChild.nodeType),
                (t.tbody = !d.getElementsByTagName("tbody").length),
                (t.htmlSerialize = !!d.getElementsByTagName("link").length),
                (t.style = /top/.test(r.getAttribute("style"))),
                (t.hrefNormalized = "/a" === r.getAttribute("href")),
                (t.opacity = /^0.5/.test(r.style.opacity)),
                (t.cssFloat = !!r.style.cssFloat),
                (t.checkOn = !!o.value),
                (t.optSelected = u.selected),
                (t.enctype = !!a.createElement("form").enctype),
                (t.html5Clone =
                    "<:nav></:nav>" !==
                    a.createElement("nav").cloneNode(!0).outerHTML),
                (t.inlineBlockNeedsLayout = !1),
                (t.shrinkWrapBlocks = !1),
                (t.pixelPosition = !1),
                (t.deleteExpando = !0),
                (t.noCloneEvent = !0),
                (t.reliableMarginRight = !0),
                (t.boxSizingReliable = !0),
                (o.checked = !0),
                (t.noCloneChecked = o.cloneNode(!0).checked),
                (s.disabled = !0),
                (t.optDisabled = !u.disabled);
            try {
                delete d.test;
            } catch (h) {
                t.deleteExpando = !1;
            }
            (o = a.createElement("input")),
                o.setAttribute("value", ""),
                (t.input = "" === o.getAttribute("value")),
                (o.value = "t"),
                o.setAttribute("type", "radio"),
                (t.radioValue = "t" === o.value),
                o.setAttribute("checked", "t"),
                o.setAttribute("name", "t"),
                (l = a.createDocumentFragment()),
                l.appendChild(o),
                (t.appendChecked = o.checked),
                (t.checkClone = l
                    .cloneNode(!0)
                    .cloneNode(!0).lastChild.checked),
                d.attachEvent &&
                    (d.attachEvent("onclick", function () {
                        t.noCloneEvent = !1;
                    }),
                    d.cloneNode(!0).click());
            for (f in { submit: !0, change: !0, focusin: !0 })
                d.setAttribute((c = "on" + f), "t"),
                    (t[f + "Bubbles"] =
                        c in e || d.attributes[c].expando === !1);
            (d.style.backgroundClip = "content-box"),
                (d.cloneNode(!0).style.backgroundClip = ""),
                (t.clearCloneStyle = "content-box" === d.style.backgroundClip);
            for (f in x(t)) break;
            return (
                (t.ownLast = "0" !== f),
                x(function () {
                    var n,
                        r,
                        o,
                        s =
                            "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                        l = a.getElementsByTagName("body")[0];
                    l &&
                        ((n = a.createElement("div")),
                        (n.style.cssText =
                            "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
                        l.appendChild(n).appendChild(d),
                        (d.innerHTML =
                            "<table><tr><td></td><td>t</td></tr></table>"),
                        (o = d.getElementsByTagName("td")),
                        (o[0].style.cssText =
                            "padding:0;margin:0;border:0;display:none"),
                        (p = 0 === o[0].offsetHeight),
                        (o[0].style.display = ""),
                        (o[1].style.display = "none"),
                        (t.reliableHiddenOffsets =
                            p && 0 === o[0].offsetHeight),
                        (d.innerHTML = ""),
                        (d.style.cssText =
                            "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
                        x.swap(
                            l,
                            null != l.style.zoom ? { zoom: 1 } : {},
                            function () {
                                t.boxSizing = 4 === d.offsetWidth;
                            }
                        ),
                        e.getComputedStyle &&
                            ((t.pixelPosition =
                                "1%" !==
                                (e.getComputedStyle(d, null) || {}).top),
                            (t.boxSizingReliable =
                                "4px" ===
                                (
                                    e.getComputedStyle(d, null) || {
                                        width: "4px",
                                    }
                                ).width),
                            (r = d.appendChild(a.createElement("div"))),
                            (r.style.cssText = d.style.cssText = s),
                            (r.style.marginRight = r.style.width = "0"),
                            (d.style.width = "1px"),
                            (t.reliableMarginRight = !parseFloat(
                                (e.getComputedStyle(r, null) || {}).marginRight
                            ))),
                        typeof d.style.zoom !== i &&
                            ((d.innerHTML = ""),
                            (d.style.cssText =
                                s +
                                "width:1px;padding:1px;display:inline;zoom:1"),
                            (t.inlineBlockNeedsLayout = 3 === d.offsetWidth),
                            (d.style.display = "block"),
                            (d.innerHTML = "<div></div>"),
                            (d.firstChild.style.width = "5px"),
                            (t.shrinkWrapBlocks = 3 !== d.offsetWidth),
                            t.inlineBlockNeedsLayout && (l.style.zoom = 1)),
                        l.removeChild(n),
                        (n = d = o = r = null));
                }),
                (n = s = l = u = r = o = null),
                t
            );
        })({}));
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;
    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o,
                a,
                s = x.expando,
                l = e.nodeType,
                u = l ? x.cache : e,
                c = l ? e[s] : e[s] && s;
            if (
                (c && u[c] && (i || u[c].data)) ||
                r !== t ||
                "string" != typeof n
            )
                return (
                    c || (c = l ? (e[s] = p.pop() || x.guid++) : s),
                    u[c] || (u[c] = l ? {} : { toJSON: x.noop }),
                    ("object" == typeof n || "function" == typeof n) &&
                        (i
                            ? (u[c] = x.extend(u[c], n))
                            : (u[c].data = x.extend(u[c].data, n))),
                    (a = u[c]),
                    i || (a.data || (a.data = {}), (a = a.data)),
                    r !== t && (a[x.camelCase(n)] = r),
                    "string" == typeof n
                        ? ((o = a[n]), null == o && (o = a[x.camelCase(n)]))
                        : (o = a),
                    o
                );
        }
    }
    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r,
                i,
                o = e.nodeType,
                a = o ? x.cache : e,
                s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t)
                        ? (t = t.concat(x.map(t, x.camelCase)))
                        : t in r
                        ? (t = [t])
                        : ((t = x.camelCase(t)),
                          (t = t in r ? [t] : t.split(" "))),
                        (i = t.length);
                    while (i--) delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r)) return;
                }
                (n || (delete a[s].data, I(a[s]))) &&
                    (o
                        ? x.cleanData([e], !0)
                        : x.support.deleteExpando || a != a.window
                        ? delete a[s]
                        : (a[s] = null));
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        },
        hasData: function (e) {
            return (
                (e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando]),
                !!e && !I(e)
            );
        },
        data: function (e, t, n) {
            return R(e, t, n);
        },
        removeData: function (e, t) {
            return W(e, t);
        },
        _data: function (e, t, n) {
            return R(e, t, n, !0);
        },
        _removeData: function (e, t) {
            return W(e, t, !0);
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || (t !== !0 && e.getAttribute("classid") === t);
        },
    }),
        x.fn.extend({
            data: function (e, n) {
                var r,
                    i,
                    o = null,
                    a = 0,
                    s = this[0];
                if (e === t) {
                    if (
                        this.length &&
                        ((o = x.data(s)),
                        1 === s.nodeType && !x._data(s, "parsedAttrs"))
                    ) {
                        for (r = s.attributes; r.length > a; a++)
                            (i = r[a].name),
                                0 === i.indexOf("data-") &&
                                    ((i = x.camelCase(i.slice(5))),
                                    $(s, i, o[i]));
                        x._data(s, "parsedAttrs", !0);
                    }
                    return o;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          x.data(this, e);
                      })
                    : arguments.length > 1
                    ? this.each(function () {
                          x.data(this, e, n);
                      })
                    : s
                    ? $(s, e, x.data(s, e))
                    : null;
            },
            removeData: function (e) {
                return this.each(function () {
                    x.removeData(this, e);
                });
            },
        });
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (((r = e.getAttribute(i)), "string" == typeof r)) {
                try {
                    r =
                        "true" === r
                            ? !0
                            : "false" === r
                            ? !1
                            : "null" === r
                            ? null
                            : +r + "" === r
                            ? +r
                            : B.test(r)
                            ? x.parseJSON(r)
                            : r;
                } catch (o) {}
                x.data(e, n, r);
            } else r = t;
        }
        return r;
    }
    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0;
    }
    x.extend({
        queue: function (e, n, r) {
            var i;
            return e
                ? ((n = (n || "fx") + "queue"),
                  (i = x._data(e, n)),
                  r &&
                      (!i || x.isArray(r)
                          ? (i = x._data(e, n, x.makeArray(r)))
                          : i.push(r)),
                  i || [])
                : t;
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t),
                a = function () {
                    x.dequeue(e, t);
                };
            "inprogress" === i && ((i = n.shift()), r--),
                i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(e, a, o)),
                !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
                x._data(e, n) ||
                x._data(e, n, {
                    empty: x.Callbacks("once memory").add(function () {
                        x._removeData(e, t + "queue"), x._removeData(e, n);
                    }),
                })
            );
        },
    }),
        x.fn.extend({
            queue: function (e, n) {
                var r = 2;
                return (
                    "string" != typeof e && ((n = e), (e = "fx"), r--),
                    r > arguments.length
                        ? x.queue(this[0], e)
                        : n === t
                        ? this
                        : this.each(function () {
                              var t = x.queue(this, e, n);
                              x._queueHooks(this, e),
                                  "fx" === e &&
                                      "inprogress" !== t[0] &&
                                      x.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    x.dequeue(this, e);
                });
            },
            delay: function (e, t) {
                return (
                    (e = x.fx ? x.fx.speeds[e] || e : e),
                    (t = t || "fx"),
                    this.queue(t, function (t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function () {
                            clearTimeout(r);
                        };
                    })
                );
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, n) {
                var r,
                    i = 1,
                    o = x.Deferred(),
                    a = this,
                    s = this.length,
                    l = function () {
                        --i || o.resolveWith(a, [a]);
                    };
                "string" != typeof e && ((n = e), (e = t)), (e = e || "fx");
                while (s--)
                    (r = x._data(a[s], e + "queueHooks")),
                        r && r.empty && (i++, r.empty.add(l));
                return l(), o.promise(n);
            },
        });
    var z,
        X,
        U = /[\t\r\n\f]/g,
        V = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i,
        Q = x.support.getSetAttribute,
        K = x.support.input;
    x.fn.extend({
        attr: function (e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                x.removeAttr(this, e);
            });
        },
        prop: function (e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return (
                (e = x.propFix[e] || e),
                this.each(function () {
                    try {
                        (this[e] = t), delete this[e];
                    } catch (n) {}
                })
            );
        },
        addClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (x.isFunction(e))
                return this.each(function (t) {
                    x(this).addClass(e.call(this, t, this.className));
                });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (
                        ((n = this[a]),
                        (r =
                            1 === n.nodeType &&
                            (n.className
                                ? (" " + n.className + " ").replace(U, " ")
                                : " ")))
                    ) {
                        o = 0;
                        while ((i = t[o++]))
                            0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r);
                    }
            return this;
        },
        removeClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a = 0,
                s = this.length,
                l = 0 === arguments.length || ("string" == typeof e && e);
            if (x.isFunction(e))
                return this.each(function (t) {
                    x(this).removeClass(e.call(this, t, this.className));
                });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (
                        ((n = this[a]),
                        (r =
                            1 === n.nodeType &&
                            (n.className
                                ? (" " + n.className + " ").replace(U, " ")
                                : "")))
                    ) {
                        o = 0;
                        while ((i = t[o++]))
                            while (r.indexOf(" " + i + " ") >= 0)
                                r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : "";
                    }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n
                ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                : x.isFunction(e)
                ? this.each(function (n) {
                      x(this).toggleClass(
                          e.call(this, n, this.className, t),
                          t
                      );
                  })
                : this.each(function () {
                      if ("string" === n) {
                          var t,
                              r = 0,
                              o = x(this),
                              a = e.match(T) || [];
                          while ((t = a[r++]))
                              o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      } else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), (this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || ""));
                  });
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (
                    1 === this[n].nodeType &&
                    (" " + this[n].className + " ")
                        .replace(U, " ")
                        .indexOf(t) >= 0
                )
                    return !0;
            return !1;
        },
        val: function (e) {
            var n,
                r,
                i,
                o = this[0];
            {
                if (arguments.length)
                    return (
                        (i = x.isFunction(e)),
                        this.each(function (n) {
                            var o;
                            1 === this.nodeType &&
                                ((o = i ? e.call(this, n, x(this).val()) : e),
                                null == o
                                    ? (o = "")
                                    : "number" == typeof o
                                    ? (o += "")
                                    : x.isArray(o) &&
                                      (o = x.map(o, function (e) {
                                          return null == e ? "" : e + "";
                                      })),
                                (r =
                                    x.valHooks[this.type] ||
                                    x.valHooks[this.nodeName.toLowerCase()]),
                                (r &&
                                    "set" in r &&
                                    r.set(this, o, "value") !== t) ||
                                    (this.value = o));
                        })
                    );
                if (o)
                    return (
                        (r =
                            x.valHooks[o.type] ||
                            x.valHooks[o.nodeName.toLowerCase()]),
                        r && "get" in r && (n = r.get(o, "value")) !== t
                            ? n
                            : ((n = o.value),
                              "string" == typeof n
                                  ? n.replace(V, "")
                                  : null == n
                                  ? ""
                                  : n)
                    );
            }
        },
    }),
        x.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = x.find.attr(e, "value");
                        return null != t ? t : e.text;
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r = e.options,
                            i = e.selectedIndex,
                            o = "select-one" === e.type || 0 > i,
                            a = o ? null : [],
                            s = o ? i + 1 : r.length,
                            l = 0 > i ? s : o ? i : 0;
                        for (; s > l; l++)
                            if (
                                ((n = r[l]),
                                !(
                                    (!n.selected && l !== i) ||
                                    (x.support.optDisabled
                                        ? n.disabled
                                        : null !==
                                          n.getAttribute("disabled")) ||
                                    (n.parentNode.disabled &&
                                        x.nodeName(n.parentNode, "optgroup"))
                                ))
                            ) {
                                if (((t = x(n).val()), o)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = x.makeArray(t),
                            a = i.length;
                        while (a--)
                            (r = i[a]),
                                (r.selected = x.inArray(x(r).val(), o) >= 0) &&
                                    (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
            attr: function (e, n, r) {
                var o,
                    a,
                    s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return typeof e.getAttribute === i
                        ? x.prop(e, n, r)
                        : ((1 === s && x.isXMLDoc(e)) ||
                              ((n = n.toLowerCase()),
                              (o =
                                  x.attrHooks[n] ||
                                  (x.expr.match.bool.test(n) ? X : z))),
                          r === t
                              ? o && "get" in o && null !== (a = o.get(e, n))
                                  ? a
                                  : ((a = x.find.attr(e, n)), null == a ? t : a)
                              : null !== r
                              ? o && "set" in o && (a = o.set(e, r, n)) !== t
                                  ? a
                                  : (e.setAttribute(n, r + ""), r)
                              : (x.removeAttr(e, n), t));
            },
            removeAttr: function (e, t) {
                var n,
                    r,
                    i = 0,
                    o = t && t.match(T);
                if (o && 1 === e.nodeType)
                    while ((n = o[i++]))
                        (r = x.propFix[n] || n),
                            x.expr.match.bool.test(n)
                                ? (K && Q) || !G.test(n)
                                    ? (e[r] = !1)
                                    : (e[x.camelCase("default-" + n)] = e[r] =
                                          !1)
                                : x.attr(e, n, ""),
                            e.removeAttribute(Q ? n : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (
                            !x.support.radioValue &&
                            "radio" === t &&
                            x.nodeName(e, "input")
                        ) {
                            var n = e.value;
                            return (
                                e.setAttribute("type", t), n && (e.value = n), t
                            );
                        }
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
            prop: function (e, n, r) {
                var i,
                    o,
                    a,
                    s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return (
                        (a = 1 !== s || !x.isXMLDoc(e)),
                        a && ((n = x.propFix[n] || n), (o = x.propHooks[n])),
                        r !== t
                            ? o && "set" in o && (i = o.set(e, r, n)) !== t
                                ? i
                                : (e[n] = r)
                            : o && "get" in o && null !== (i = o.get(e, n))
                            ? i
                            : e[n]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = x.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : Y.test(e.nodeName) ||
                              (J.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    },
                },
            },
        }),
        (X = {
            set: function (e, t, n) {
                return (
                    t === !1
                        ? x.removeAttr(e, n)
                        : (K && Q) || !G.test(n)
                        ? e.setAttribute((!Q && x.propFix[n]) || n, n)
                        : (e[x.camelCase("default-" + n)] = e[n] = !0),
                    n
                );
            },
        }),
        x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
            var r = x.expr.attrHandle[n] || x.find.attr;
            x.expr.attrHandle[n] =
                (K && Q) || !G.test(n)
                    ? function (e, n, i) {
                          var o = x.expr.attrHandle[n],
                              a = i
                                  ? t
                                  : (x.expr.attrHandle[n] = t) != r(e, n, i)
                                  ? n.toLowerCase()
                                  : null;
                          return (x.expr.attrHandle[n] = o), a;
                      }
                    : function (e, n, r) {
                          return r
                              ? t
                              : e[x.camelCase("default-" + n)]
                              ? n.toLowerCase()
                              : null;
                      };
        }),
        (K && Q) ||
            (x.attrHooks.value = {
                set: function (e, n, r) {
                    return x.nodeName(e, "input")
                        ? ((e.defaultValue = n), t)
                        : z && z.set(e, n, r);
                },
            }),
        Q ||
            ((z = {
                set: function (e, n, r) {
                    var i = e.getAttributeNode(r);
                    return (
                        i ||
                            e.setAttributeNode(
                                (i = e.ownerDocument.createAttribute(r))
                            ),
                        (i.value = n += ""),
                        "value" === r || n === e.getAttribute(r) ? n : t
                    );
                },
            }),
            (x.expr.attrHandle.id =
                x.expr.attrHandle.name =
                x.expr.attrHandle.coords =
                    function (e, n, r) {
                        var i;
                        return r
                            ? t
                            : (i = e.getAttributeNode(n)) && "" !== i.value
                            ? i.value
                            : null;
                    }),
            (x.valHooks.button = {
                get: function (e, n) {
                    var r = e.getAttributeNode(n);
                    return r && r.specified ? r.value : t;
                },
                set: z.set,
            }),
            (x.attrHooks.contenteditable = {
                set: function (e, t, n) {
                    z.set(e, "" === t ? !1 : t, n);
                },
            }),
            x.each(["width", "height"], function (e, n) {
                x.attrHooks[n] = {
                    set: function (e, r) {
                        return "" === r ? (e.setAttribute(n, "auto"), r) : t;
                    },
                };
            })),
        x.support.hrefNormalized ||
            x.each(["href", "src"], function (e, t) {
                x.propHooks[t] = {
                    get: function (e) {
                        return e.getAttribute(t, 4);
                    },
                };
            }),
        x.support.style ||
            (x.attrHooks.style = {
                get: function (e) {
                    return e.style.cssText || t;
                },
                set: function (e, t) {
                    return (e.style.cssText = t + "");
                },
            }),
        x.support.optSelected ||
            (x.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return (
                        t &&
                            (t.selectedIndex,
                            t.parentNode && t.parentNode.selectedIndex),
                        null
                    );
                },
            }),
        x.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                x.propFix[this.toLowerCase()] = this;
            }
        ),
        x.support.enctype || (x.propFix.enctype = "encoding"),
        x.each(["radio", "checkbox"], function () {
            (x.valHooks[this] = {
                set: function (e, n) {
                    return x.isArray(n)
                        ? (e.checked = x.inArray(x(e).val(), n) >= 0)
                        : t;
                },
            }),
                x.support.checkOn ||
                    (x.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value")
                            ? "on"
                            : e.value;
                    });
        });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return !0;
    }
    function ot() {
        return !1;
    }
    function at() {
        try {
            return a.activeElement;
        } catch (e) {}
    }
    (x.event = {
        global: {},
        add: function (e, n, r, o, a) {
            var s,
                l,
                u,
                c,
                p,
                f,
                d,
                h,
                g,
                m,
                y,
                v = x._data(e);
            if (v) {
                r.handler && ((c = r), (r = c.handler), (a = c.selector)),
                    r.guid || (r.guid = x.guid++),
                    (l = v.events) || (l = v.events = {}),
                    (f = v.handle) ||
                        ((f = v.handle =
                            function (e) {
                                return typeof x === i ||
                                    (e && x.event.triggered === e.type)
                                    ? t
                                    : x.event.dispatch.apply(f.elem, arguments);
                            }),
                        (f.elem = e)),
                    (n = (n || "").match(T) || [""]),
                    (u = n.length);
                while (u--)
                    (s = rt.exec(n[u]) || []),
                        (g = y = s[1]),
                        (m = (s[2] || "").split(".").sort()),
                        g &&
                            ((p = x.event.special[g] || {}),
                            (g = (a ? p.delegateType : p.bindType) || g),
                            (p = x.event.special[g] || {}),
                            (d = x.extend(
                                {
                                    type: g,
                                    origType: y,
                                    data: o,
                                    handler: r,
                                    guid: r.guid,
                                    selector: a,
                                    needsContext:
                                        a && x.expr.match.needsContext.test(a),
                                    namespace: m.join("."),
                                },
                                c
                            )),
                            (h = l[g]) ||
                                ((h = l[g] = []),
                                (h.delegateCount = 0),
                                (p.setup && p.setup.call(e, o, m, f) !== !1) ||
                                    (e.addEventListener
                                        ? e.addEventListener(g, f, !1)
                                        : e.attachEvent &&
                                          e.attachEvent("on" + g, f))),
                            p.add &&
                                (p.add.call(e, d),
                                d.handler.guid || (d.handler.guid = r.guid)),
                            a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                            (x.event.global[g] = !0));
                e = null;
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                l,
                u,
                c,
                p,
                f,
                d,
                h,
                g,
                m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                (t = (t || "").match(T) || [""]), (u = t.length);
                while (u--)
                    if (
                        ((s = rt.exec(t[u]) || []),
                        (d = g = s[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d)
                    ) {
                        (p = x.event.special[d] || {}),
                            (d = (r ? p.delegateType : p.bindType) || d),
                            (f = c[d] || []),
                            (s =
                                s[2] &&
                                RegExp(
                                    "(^|\\.)" +
                                        h.join("\\.(?:.*\\.|)") +
                                        "(\\.|$)"
                                )),
                            (l = o = f.length);
                        while (o--)
                            (a = f[o]),
                                (!i && g !== a.origType) ||
                                    (n && n.guid !== a.guid) ||
                                    (s && !s.test(a.namespace)) ||
                                    (r &&
                                        r !== a.selector &&
                                        ("**" !== r || !a.selector)) ||
                                    (f.splice(o, 1),
                                    a.selector && f.delegateCount--,
                                    p.remove && p.remove.call(e, a));
                        l &&
                            !f.length &&
                            ((p.teardown &&
                                p.teardown.call(e, h, m.handle) !== !1) ||
                                x.removeEvent(e, d, m.handle),
                            delete c[d]);
                    } else for (d in c) x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) &&
                    (delete m.handle, x._removeData(e, "events"));
            }
        },
        trigger: function (n, r, i, o) {
            var s,
                l,
                u,
                c,
                p,
                f,
                d,
                h = [i || a],
                g = v.call(n, "type") ? n.type : n,
                m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (
                ((u = f = i = i || a),
                3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !nt.test(g + x.event.triggered) &&
                    (g.indexOf(".") >= 0 &&
                        ((m = g.split(".")), (g = m.shift()), m.sort()),
                    (l = 0 > g.indexOf(":") && "on" + g),
                    (n = n[x.expando]
                        ? n
                        : new x.Event(g, "object" == typeof n && n)),
                    (n.isTrigger = o ? 2 : 3),
                    (n.namespace = m.join(".")),
                    (n.namespace_re = n.namespace
                        ? RegExp(
                              "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )
                        : null),
                    (n.result = t),
                    n.target || (n.target = i),
                    (r = null == r ? [n] : x.makeArray(r, [n])),
                    (p = x.event.special[g] || {}),
                    o || !p.trigger || p.trigger.apply(i, r) !== !1))
            ) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (
                        c = p.delegateType || g,
                            nt.test(c + g) || (u = u.parentNode);
                        u;
                        u = u.parentNode
                    )
                        h.push(u), (f = u);
                    f === (i.ownerDocument || a) &&
                        h.push(f.defaultView || f.parentWindow || e);
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped())
                    (n.type = d > 1 ? c : p.bindType || g),
                        (s =
                            (x._data(u, "events") || {})[n.type] &&
                            x._data(u, "handle")),
                        s && s.apply(u, r),
                        (s = l && u[l]),
                        s &&
                            x.acceptData(u) &&
                            s.apply &&
                            s.apply(u, r) === !1 &&
                            n.preventDefault();
                if (
                    ((n.type = g),
                    !o &&
                        !n.isDefaultPrevented() &&
                        (!p._default || p._default.apply(h.pop(), r) === !1) &&
                        x.acceptData(i) &&
                        l &&
                        i[g] &&
                        !x.isWindow(i))
                ) {
                    (f = i[l]), f && (i[l] = null), (x.event.triggered = g);
                    try {
                        i[g]();
                    } catch (y) {}
                    (x.event.triggered = t), f && (i[l] = f);
                }
                return n.result;
            }
        },
        dispatch: function (e) {
            e = x.event.fix(e);
            var n,
                r,
                i,
                o,
                a,
                s = [],
                l = g.call(arguments),
                u = (x._data(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if (
                ((l[0] = e),
                (e.delegateTarget = this),
                !c.preDispatch || c.preDispatch.call(this, e) !== !1)
            ) {
                (s = x.event.handlers.call(this, e, u)), (n = 0);
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    (e.currentTarget = o.elem), (a = 0);
                    while (
                        (i = o.handlers[a++]) &&
                        !e.isImmediatePropagationStopped()
                    )
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) &&
                            ((e.handleObj = i),
                            (e.data = i.data),
                            (r = (
                                (x.event.special[i.origType] || {}).handle ||
                                i.handler
                            ).apply(o.elem, l)),
                            r !== t &&
                                (e.result = r) === !1 &&
                                (e.preventDefault(), e.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function (e, n) {
            var r,
                i,
                o,
                a,
                s = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (
                        1 === u.nodeType &&
                        (u.disabled !== !0 || "click" !== e.type)
                    ) {
                        for (o = [], a = 0; l > a; a++)
                            (i = n[a]),
                                (r = i.selector + " "),
                                o[r] === t &&
                                    (o[r] = i.needsContext
                                        ? x(r, this).index(u) >= 0
                                        : x.find(r, this, null, [u]).length),
                                o[r] && o.push(i);
                        o.length && s.push({ elem: u, handlers: o });
                    }
            return (
                n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s
            );
        },
        fix: function (e) {
            if (e[x.expando]) return e;
            var t,
                n,
                r,
                i = e.type,
                o = e,
                s = this.fixHooks[i];
            s ||
                (this.fixHooks[i] = s =
                    tt.test(i)
                        ? this.mouseHooks
                        : et.test(i)
                        ? this.keyHooks
                        : {}),
                (r = s.props ? this.props.concat(s.props) : this.props),
                (e = new x.Event(o)),
                (t = r.length);
            while (t--) (n = r[t]), (e[n] = o[n]);
            return (
                e.target || (e.target = o.srcElement || a),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                (e.metaKey = !!e.metaKey),
                s.filter ? s.filter(e, o) : e
            );
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
            " "
        ),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return (
                    null == e.which &&
                        (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
                );
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
                " "
            ),
            filter: function (e, n) {
                var r,
                    i,
                    o,
                    s = n.button,
                    l = n.fromElement;
                return (
                    null == e.pageX &&
                        null != n.clientX &&
                        ((i = e.target.ownerDocument || a),
                        (o = i.documentElement),
                        (r = i.body),
                        (e.pageX =
                            n.clientX +
                            ((o && o.scrollLeft) || (r && r.scrollLeft) || 0) -
                            ((o && o.clientLeft) || (r && r.clientLeft) || 0)),
                        (e.pageY =
                            n.clientY +
                            ((o && o.scrollTop) || (r && r.scrollTop) || 0) -
                            ((o && o.clientTop) || (r && r.clientTop) || 0))),
                    !e.relatedTarget &&
                        l &&
                        (e.relatedTarget = l === e.target ? n.toElement : l),
                    e.which ||
                        s === t ||
                        (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                    e
                );
            },
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== at() && this.focus)
                        try {
                            return this.focus(), !1;
                        } catch (e) {}
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    return this === at() && this.blur ? (this.blur(), !1) : t;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    return x.nodeName(this, "input") &&
                        "checkbox" === this.type &&
                        this.click
                        ? (this.click(), !1)
                        : t;
                },
                _default: function (e) {
                    return x.nodeName(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                },
            },
        },
        simulate: function (e, t, n, r) {
            var i = x.extend(new x.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {},
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i),
                i.isDefaultPrevented() && n.preventDefault();
        },
    }),
        (x.removeEvent = a.removeEventListener
            ? function (e, t, n) {
                  e.removeEventListener && e.removeEventListener(t, n, !1);
              }
            : function (e, t, n) {
                  var r = "on" + t;
                  e.detachEvent &&
                      (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n));
              }),
        (x.Event = function (e, n) {
            return this instanceof x.Event
                ? (e && e.type
                      ? ((this.originalEvent = e),
                        (this.type = e.type),
                        (this.isDefaultPrevented =
                            e.defaultPrevented ||
                            e.returnValue === !1 ||
                            (e.getPreventDefault && e.getPreventDefault())
                                ? it
                                : ot))
                      : (this.type = e),
                  n && x.extend(this, n),
                  (this.timeStamp = (e && e.timeStamp) || x.now()),
                  (this[x.expando] = !0),
                  t)
                : new x.Event(e, n);
        }),
        (x.Event.prototype = {
            isDefaultPrevented: ot,
            isPropagationStopped: ot,
            isImmediatePropagationStopped: ot,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = it),
                    e &&
                        (e.preventDefault
                            ? e.preventDefault()
                            : (e.returnValue = !1));
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = it),
                    e &&
                        (e.stopPropagation && e.stopPropagation(),
                        (e.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                (this.isImmediatePropagationStopped = it),
                    this.stopPropagation();
            },
        }),
        x.each(
            { mouseenter: "mouseover", mouseleave: "mouseout" },
            function (e, t) {
                x.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n,
                            r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return (
                            (!i || (i !== r && !x.contains(r, i))) &&
                                ((e.type = o.origType),
                                (n = o.handler.apply(this, arguments)),
                                (e.type = t)),
                            n
                        );
                    },
                };
            }
        ),
        x.support.submitBubbles ||
            (x.event.special.submit = {
                setup: function () {
                    return x.nodeName(this, "form")
                        ? !1
                        : (x.event.add(
                              this,
                              "click._submit keypress._submit",
                              function (e) {
                                  var n = e.target,
                                      r =
                                          x.nodeName(n, "input") ||
                                          x.nodeName(n, "button")
                                              ? n.form
                                              : t;
                                  r &&
                                      !x._data(r, "submitBubbles") &&
                                      (x.event.add(
                                          r,
                                          "submit._submit",
                                          function (e) {
                                              e._submit_bubble = !0;
                                          }
                                      ),
                                      x._data(r, "submitBubbles", !0));
                              }
                          ),
                          t);
                },
                postDispatch: function (e) {
                    e._submit_bubble &&
                        (delete e._submit_bubble,
                        this.parentNode &&
                            !e.isTrigger &&
                            x.event.simulate("submit", this.parentNode, e, !0));
                },
                teardown: function () {
                    return x.nodeName(this, "form")
                        ? !1
                        : (x.event.remove(this, "._submit"), t);
                },
            }),
        x.support.changeBubbles ||
            (x.event.special.change = {
                setup: function () {
                    return Z.test(this.nodeName)
                        ? (("checkbox" === this.type ||
                              "radio" === this.type) &&
                              (x.event.add(
                                  this,
                                  "propertychange._change",
                                  function (e) {
                                      "checked" ===
                                          e.originalEvent.propertyName &&
                                          (this._just_changed = !0);
                                  }
                              ),
                              x.event.add(this, "click._change", function (e) {
                                  this._just_changed &&
                                      !e.isTrigger &&
                                      (this._just_changed = !1),
                                      x.event.simulate("change", this, e, !0);
                              })),
                          !1)
                        : (x.event.add(
                              this,
                              "beforeactivate._change",
                              function (e) {
                                  var t = e.target;
                                  Z.test(t.nodeName) &&
                                      !x._data(t, "changeBubbles") &&
                                      (x.event.add(
                                          t,
                                          "change._change",
                                          function (e) {
                                              !this.parentNode ||
                                                  e.isSimulated ||
                                                  e.isTrigger ||
                                                  x.event.simulate(
                                                      "change",
                                                      this.parentNode,
                                                      e,
                                                      !0
                                                  );
                                          }
                                      ),
                                      x._data(t, "changeBubbles", !0));
                              }
                          ),
                          t);
                },
                handle: function (e) {
                    var n = e.target;
                    return this !== n ||
                        e.isSimulated ||
                        e.isTrigger ||
                        ("radio" !== n.type && "checkbox" !== n.type)
                        ? e.handleObj.handler.apply(this, arguments)
                        : t;
                },
                teardown: function () {
                    return (
                        x.event.remove(this, "._change"), !Z.test(this.nodeName)
                    );
                },
            }),
        x.support.focusinBubbles ||
            x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = 0,
                    r = function (e) {
                        x.event.simulate(t, e.target, x.event.fix(e), !0);
                    };
                x.event.special[t] = {
                    setup: function () {
                        0 === n++ && a.addEventListener(e, r, !0);
                    },
                    teardown: function () {
                        0 === --n && a.removeEventListener(e, r, !0);
                    },
                };
            }),
        x.fn.extend({
            on: function (e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof n && ((r = r || n), (n = t));
                    for (a in e) this.on(a, n, r, e[a], o);
                    return this;
                }
                if (
                    (null == r && null == i
                        ? ((i = n), (r = n = t))
                        : null == i &&
                          ("string" == typeof n
                              ? ((i = r), (r = t))
                              : ((i = r), (r = n), (n = t))),
                    i === !1)
                )
                    i = ot;
                else if (!i) return this;
                return (
                    1 === o &&
                        ((s = i),
                        (i = function (e) {
                            return x().off(e), s.apply(this, arguments);
                        }),
                        (i.guid = s.guid || (s.guid = x.guid++))),
                    this.each(function () {
                        x.event.add(this, e, i, r, n);
                    })
                );
            },
            one: function (e, t, n, r) {
                return this.on(e, t, n, r, 1);
            },
            off: function (e, n, r) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (i = e.handleObj),
                        x(e.delegateTarget).off(
                            i.namespace
                                ? i.origType + "." + i.namespace
                                : i.origType,
                            i.selector,
                            i.handler
                        ),
                        this
                    );
                if ("object" == typeof e) {
                    for (o in e) this.off(o, n, e[o]);
                    return this;
                }
                return (
                    (n === !1 || "function" == typeof n) && ((r = n), (n = t)),
                    r === !1 && (r = ot),
                    this.each(function () {
                        x.event.remove(this, e, r, n);
                    })
                );
            },
            trigger: function (e, t) {
                return this.each(function () {
                    x.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, n) {
                var r = this[0];
                return r ? x.event.trigger(e, n, r, !0) : t;
            },
        });
    var st = /^.[^:#\[\.,]*$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ut = x.expr.match.needsContext,
        ct = { children: !0, contents: !0, next: !0, prev: !0 };
    x.fn.extend({
        find: function (e) {
            var t,
                n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e)
                return this.pushStack(
                    x(e).filter(function () {
                        for (t = 0; i > t; t++)
                            if (x.contains(r[t], this)) return !0;
                    })
                );
            for (t = 0; i > t; t++) x.find(e, r[t], n);
            return (
                (n = this.pushStack(i > 1 ? x.unique(n) : n)),
                (n.selector = this.selector ? this.selector + " " + e : e),
                n
            );
        },
        has: function (e) {
            var t,
                n = x(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++) if (x.contains(this, n[t])) return !0;
            });
        },
        not: function (e) {
            return this.pushStack(ft(this, e || [], !0));
        },
        filter: function (e) {
            return this.pushStack(ft(this, e || [], !1));
        },
        is: function (e) {
            return !!ft(
                this,
                "string" == typeof e && ut.test(e) ? x(e) : e || [],
                !1
            ).length;
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a =
                    ut.test(e) || "string" != typeof e
                        ? x(e, t || this.context)
                        : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                        11 > n.nodeType &&
                        (a
                            ? a.index(n) > -1
                            : 1 === n.nodeType && x.find.matchesSelector(n, e))
                    ) {
                        n = o.push(n);
                        break;
                    }
            return this.pushStack(o.length > 1 ? x.unique(o) : o);
        },
        index: function (e) {
            return e
                ? "string" == typeof e
                    ? x.inArray(this[0], x(e))
                    : x.inArray(e.jquery ? e[0] : e, this)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (e, t) {
            var n =
                    "string" == typeof e
                        ? x(e, t)
                        : x.makeArray(e && e.nodeType ? [e] : e),
                r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r));
        },
        addBack: function (e) {
            return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
            );
        },
    });
    function pt(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e;
    }
    x.each(
        {
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
                return x.dir(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
                return x.dir(e, "parentNode", n);
            },
            next: function (e) {
                return pt(e, "nextSibling");
            },
            prev: function (e) {
                return pt(e, "previousSibling");
            },
            nextAll: function (e) {
                return x.dir(e, "nextSibling");
            },
            prevAll: function (e) {
                return x.dir(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
                return x.dir(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
                return x.dir(e, "previousSibling", n);
            },
            siblings: function (e) {
                return x.sibling((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
                return x.sibling(e.firstChild);
            },
            contents: function (e) {
                return x.nodeName(e, "iframe")
                    ? e.contentDocument || e.contentWindow.document
                    : x.merge([], e.childNodes);
            },
        },
        function (e, t) {
            x.fn[e] = function (n, r) {
                var i = x.map(this, t, n);
                return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = x.filter(r, i)),
                    this.length > 1 &&
                        (ct[e] || (i = x.unique(i)),
                        lt.test(e) && (i = i.reverse())),
                    this.pushStack(i)
                );
            };
        }
    ),
        x.extend({
            filter: function (e, t, n) {
                var r = t[0];
                return (
                    n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === r.nodeType
                        ? x.find.matchesSelector(r, e)
                            ? [r]
                            : []
                        : x.find.matches(
                              e,
                              x.grep(t, function (e) {
                                  return 1 === e.nodeType;
                              })
                          )
                );
            },
            dir: function (e, n, r) {
                var i = [],
                    o = e[n];
                while (
                    o &&
                    9 !== o.nodeType &&
                    (r === t || 1 !== o.nodeType || !x(o).is(r))
                )
                    1 === o.nodeType && i.push(o), (o = o[n]);
                return i;
            },
            sibling: function (e, t) {
                var n = [];
                for (; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n;
            },
        });
    function ft(e, t, n) {
        if (x.isFunction(t))
            return x.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
            });
        if (t.nodeType)
            return x.grep(e, function (e) {
                return (e === t) !== n;
            });
        if ("string" == typeof t) {
            if (st.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e);
        }
        return x.grep(e, function (e) {
            return x.inArray(e, t) >= 0 !== n;
        });
    }
    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n;
    }
    var ht =
            "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: x.support.htmlSerialize
                ? [0, "", ""]
                : [1, "X<div>", "</div>"],
        },
        jt = dt(a),
        Dt = jt.appendChild(a.createElement("div"));
    (At.optgroup = At.option),
        (At.tbody = At.tfoot = At.colgroup = At.caption = At.thead),
        (At.th = At.td),
        x.fn.extend({
            text: function (e) {
                return x.access(
                    this,
                    function (e) {
                        return e === t
                            ? x.text(this)
                            : this.empty().append(
                                  (
                                      (this[0] && this[0].ownerDocument) ||
                                      a
                                  ).createTextNode(e)
                              );
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return this.domManip(arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = Lt(this, e);
                        t.appendChild(e);
                    }
                });
            },
            prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = Lt(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            remove: function (e, t) {
                var n,
                    r = e ? x.filter(e, this) : this,
                    i = 0;
                for (; null != (n = r[i]); i++)
                    t || 1 !== n.nodeType || x.cleanData(Ft(n)),
                        n.parentNode &&
                            (t &&
                                x.contains(n.ownerDocument, n) &&
                                _t(Ft(n, "script")),
                            n.parentNode.removeChild(n));
                return this;
            },
            empty: function () {
                var e,
                    t = 0;
                for (; null != (e = this[t]); t++) {
                    1 === e.nodeType && x.cleanData(Ft(e, !1));
                    while (e.firstChild) e.removeChild(e.firstChild);
                    e.options &&
                        x.nodeName(e, "select") &&
                        (e.options.length = 0);
                }
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null == e ? !1 : e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return x.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return x.access(
                    this,
                    function (e) {
                        var n = this[0] || {},
                            r = 0,
                            i = this.length;
                        if (e === t)
                            return 1 === n.nodeType
                                ? n.innerHTML.replace(gt, "")
                                : t;
                        if (
                            !(
                                "string" != typeof e ||
                                Tt.test(e) ||
                                (!x.support.htmlSerialize && mt.test(e)) ||
                                (!x.support.leadingWhitespace && yt.test(e)) ||
                                At[(bt.exec(e) || ["", ""])[1].toLowerCase()]
                            )
                        ) {
                            e = e.replace(vt, "<$1></$2>");
                            try {
                                for (; i > r; r++)
                                    (n = this[r] || {}),
                                        1 === n.nodeType &&
                                            (x.cleanData(Ft(n, !1)),
                                            (n.innerHTML = e));
                                n = 0;
                            } catch (o) {}
                        }
                        n && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = x.map(this, function (e) {
                        return [e.nextSibling, e.parentNode];
                    }),
                    t = 0;
                return (
                    this.domManip(
                        arguments,
                        function (n) {
                            var r = e[t++],
                                i = e[t++];
                            i &&
                                (r &&
                                    r.parentNode !== i &&
                                    (r = this.nextSibling),
                                x(this).remove(),
                                i.insertBefore(n, r));
                        },
                        !0
                    ),
                    t ? this : this.remove()
                );
            },
            detach: function (e) {
                return this.remove(e, !0);
            },
            domManip: function (e, t, n) {
                e = d.apply([], e);
                var r,
                    i,
                    o,
                    a,
                    s,
                    l,
                    u = 0,
                    c = this.length,
                    p = this,
                    f = c - 1,
                    h = e[0],
                    g = x.isFunction(h);
                if (
                    g ||
                    (!(
                        1 >= c ||
                        "string" != typeof h ||
                        x.support.checkClone
                    ) &&
                        Nt.test(h))
                )
                    return this.each(function (r) {
                        var i = p.eq(r);
                        g && (e[0] = h.call(this, r, i.html())),
                            i.domManip(e, t, n);
                    });
                if (
                    c &&
                    ((l = x.buildFragment(
                        e,
                        this[0].ownerDocument,
                        !1,
                        !n && this
                    )),
                    (r = l.firstChild),
                    1 === l.childNodes.length && (l = r),
                    r)
                ) {
                    for (
                        a = x.map(Ft(l, "script"), Ht), o = a.length;
                        c > u;
                        u++
                    )
                        (i = l),
                            u !== f &&
                                ((i = x.clone(i, !0, !0)),
                                o && x.merge(a, Ft(i, "script"))),
                            t.call(this[u], i, u);
                    if (o)
                        for (
                            s = a[a.length - 1].ownerDocument,
                                x.map(a, qt),
                                u = 0;
                            o > u;
                            u++
                        )
                            (i = a[u]),
                                kt.test(i.type || "") &&
                                    !x._data(i, "globalEval") &&
                                    x.contains(s, i) &&
                                    (i.src
                                        ? x._evalUrl(i.src)
                                        : x.globalEval(
                                              (
                                                  i.text ||
                                                  i.textContent ||
                                                  i.innerHTML ||
                                                  ""
                                              ).replace(St, "")
                                          ));
                    l = r = null;
                }
                return this;
            },
        });
    function Lt(e, t) {
        return x.nodeName(e, "table") &&
            x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr")
            ? e.getElementsByTagName("tbody")[0] ||
                  e.appendChild(e.ownerDocument.createElement("tbody"))
            : e;
    }
    function Ht(e) {
        return (e.type = (null !== x.find.attr(e, "type")) + "/" + e.type), e;
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function _t(e, t) {
        var n,
            r = 0;
        for (; null != (n = e[r]); r++)
            x._data(n, "globalEval", !t || x._data(t[r], "globalEval"));
    }
    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n,
                r,
                i,
                o = x._data(e),
                a = x._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, (a.events = {});
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++)
                        x.event.add(t, n, s[n][r]);
            }
            a.data && (a.data = x.extend({}, a.data));
        }
    }
    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (
                ((n = t.nodeName.toLowerCase()),
                !x.support.noCloneEvent && t[x.expando])
            ) {
                i = x._data(t);
                for (r in i.events) x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando);
            }
            "script" === n && t.text !== e.text
                ? ((Ht(t).text = e.text), qt(t))
                : "object" === n
                ? (t.parentNode && (t.outerHTML = e.outerHTML),
                  x.support.html5Clone &&
                      e.innerHTML &&
                      !x.trim(t.innerHTML) &&
                      (t.innerHTML = e.innerHTML))
                : "input" === n && Ct.test(e.type)
                ? ((t.defaultChecked = t.checked = e.checked),
                  t.value !== e.value && (t.value = e.value))
                : "option" === n
                ? (t.defaultSelected = t.selected = e.defaultSelected)
                : ("input" === n || "textarea" === n) &&
                  (t.defaultValue = e.defaultValue);
        }
    }
    x.each(
        {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
        },
        function (e, t) {
            x.fn[e] = function (e) {
                var n,
                    r = 0,
                    i = [],
                    o = x(e),
                    a = o.length - 1;
                for (; a >= r; r++)
                    (n = r === a ? this : this.clone(!0)),
                        x(o[r])[t](n),
                        h.apply(i, n.get());
                return this.pushStack(i);
            };
        }
    );
    function Ft(e, n) {
        var r,
            o,
            a = 0,
            s =
                typeof e.getElementsByTagName !== i
                    ? e.getElementsByTagName(n || "*")
                    : typeof e.querySelectorAll !== i
                    ? e.querySelectorAll(n || "*")
                    : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)
                !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || (n && x.nodeName(e, n)) ? x.merge([e], s) : s;
    }
    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked);
    }
    x.extend({
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                l = x.contains(e.ownerDocument, e);
            if (
                (x.support.html5Clone ||
                x.isXMLDoc(e) ||
                !mt.test("<" + e.nodeName + ">")
                    ? (o = e.cloneNode(!0))
                    : ((Dt.innerHTML = e.outerHTML),
                      Dt.removeChild((o = Dt.firstChild))),
                !(
                    (x.support.noCloneEvent && x.support.noCloneChecked) ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    x.isXMLDoc(e)
                ))
            )
                for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a)
                    r[a] && Ot(i, r[a]);
            if (t)
                if (n)
                    for (
                        s = s || Ft(e), r = r || Ft(o), a = 0;
                        null != (i = s[a]);
                        a++
                    )
                        Mt(i, r[a]);
                else Mt(e, o);
            return (
                (r = Ft(o, "script")),
                r.length > 0 && _t(r, !l && Ft(e, "script")),
                (r = s = i = null),
                o
            );
        },
        buildFragment: function (e, t, n, r) {
            var i,
                o,
                a,
                s,
                l,
                u,
                c,
                p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (((o = e[h]), o || 0 === o))
                    if ("object" === x.type(o))
                        x.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                        (s = s || f.appendChild(t.createElement("div"))),
                            (l = (bt.exec(o) || ["", ""])[1].toLowerCase()),
                            (c = At[l] || At._default),
                            (s.innerHTML =
                                c[1] + o.replace(vt, "<$1></$2>") + c[2]),
                            (i = c[0]);
                        while (i--) s = s.lastChild;
                        if (
                            (!x.support.leadingWhitespace &&
                                yt.test(o) &&
                                d.push(t.createTextNode(yt.exec(o)[0])),
                            !x.support.tbody)
                        ) {
                            (o =
                                "table" !== l || xt.test(o)
                                    ? "<table>" !== c[1] || xt.test(o)
                                        ? 0
                                        : s
                                    : s.firstChild),
                                (i = o && o.childNodes.length);
                            while (i--)
                                x.nodeName((u = o.childNodes[i]), "tbody") &&
                                    !u.childNodes.length &&
                                    o.removeChild(u);
                        }
                        x.merge(d, s.childNodes), (s.textContent = "");
                        while (s.firstChild) s.removeChild(s.firstChild);
                        s = f.lastChild;
                    } else d.push(t.createTextNode(o));
            s && f.removeChild(s),
                x.support.appendChecked || x.grep(Ft(d, "input"), Bt),
                (h = 0);
            while ((o = d[h++]))
                if (
                    (!r || -1 === x.inArray(o, r)) &&
                    ((a = x.contains(o.ownerDocument, o)),
                    (s = Ft(f.appendChild(o), "script")),
                    a && _t(s),
                    n)
                ) {
                    i = 0;
                    while ((o = s[i++])) kt.test(o.type || "") && n.push(o);
                }
            return (s = null), f;
        },
        cleanData: function (e, t) {
            var n,
                r,
                o,
                a,
                s = 0,
                l = x.expando,
                u = x.cache,
                c = x.support.deleteExpando,
                f = x.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || x.acceptData(n)) && ((o = n[l]), (a = o && u[o]))) {
                    if (a.events)
                        for (r in a.events)
                            f[r]
                                ? x.event.remove(n, r)
                                : x.removeEvent(n, r, a.handle);
                    u[o] &&
                        (delete u[o],
                        c
                            ? delete n[l]
                            : typeof n.removeAttribute !== i
                            ? n.removeAttribute(l)
                            : (n[l] = null),
                        p.push(o));
                }
        },
        _evalUrl: function (e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0,
            });
        },
    }),
        x.fn.extend({
            wrapAll: function (e) {
                if (x.isFunction(e))
                    return this.each(function (t) {
                        x(this).wrapAll(e.call(this, t));
                    });
                if (this[0]) {
                    var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (
                                    e.firstChild &&
                                    1 === e.firstChild.nodeType
                                )
                                    e = e.firstChild;
                                return e;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (e) {
                return x.isFunction(e)
                    ? this.each(function (t) {
                          x(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = x(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = x.isFunction(e);
                return this.each(function (n) {
                    x(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        x.nodeName(this, "body") ||
                            x(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        });
    var Pt,
        Rt,
        Wt,
        $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + w + ")(.*)$", "i"),
        Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + w + ")", "i"),
        Gt = { BODY: "block" },
        Qt = { position: "absolute", visibility: "hidden", display: "block" },
        Kt = { letterSpacing: 0, fontWeight: 400 },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];
    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--) if (((t = en[i] + n), t in e)) return t;
        return r;
    }
    function nn(e, t) {
        return (
            (e = t || e),
            "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
        );
    }
    function rn(e, t) {
        var n,
            r,
            i,
            o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++)
            (r = e[a]),
                r.style &&
                    ((o[a] = x._data(r, "olddisplay")),
                    (n = r.style.display),
                    t
                        ? (o[a] || "none" !== n || (r.style.display = ""),
                          "" === r.style.display &&
                              nn(r) &&
                              (o[a] = x._data(r, "olddisplay", ln(r.nodeName))))
                        : o[a] ||
                          ((i = nn(r)),
                          ((n && "none" !== n) || !i) &&
                              x._data(
                                  r,
                                  "olddisplay",
                                  i ? n : x.css(r, "display")
                              )));
        for (a = 0; s > a; a++)
            (r = e[a]),
                r.style &&
                    ((t &&
                        "none" !== r.style.display &&
                        "" !== r.style.display) ||
                        (r.style.display = t ? o[a] || "" : "none"));
        return e;
    }
    x.fn.extend({
        css: function (e, n) {
            return x.access(
                this,
                function (e, n, r) {
                    var i,
                        o,
                        a = {},
                        s = 0;
                    if (x.isArray(n)) {
                        for (o = Rt(e), i = n.length; i > s; s++)
                            a[n[s]] = x.css(e, n[s], !1, o);
                        return a;
                    }
                    return r !== t ? x.style(e, n, r) : x.css(e, n);
                },
                e,
                n,
                arguments.length > 1
            );
        },
        show: function () {
            return rn(this, !0);
        },
        hide: function () {
            return rn(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      nn(this) ? x(this).show() : x(this).hide();
                  });
        },
    }),
        x.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Wt(e, "opacity");
                            return "" === n ? "1" : n;
                        }
                    },
                },
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
            },
            cssProps: { float: x.support.cssFloat ? "cssFloat" : "styleFloat" },
            style: function (e, n, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o,
                        a,
                        s,
                        l = x.camelCase(n),
                        u = e.style;
                    if (
                        ((n = x.cssProps[l] || (x.cssProps[l] = tn(u, l))),
                        (s = x.cssHooks[n] || x.cssHooks[l]),
                        r === t)
                    )
                        return s && "get" in s && (o = s.get(e, !1, i)) !== t
                            ? o
                            : u[n];
                    if (
                        ((a = typeof r),
                        "string" === a &&
                            (o = Jt.exec(r)) &&
                            ((r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n))),
                            (a = "number")),
                        !(
                            null == r ||
                            ("number" === a && isNaN(r)) ||
                            ("number" !== a || x.cssNumber[l] || (r += "px"),
                            x.support.clearCloneStyle ||
                                "" !== r ||
                                0 !== n.indexOf("background") ||
                                (u[n] = "inherit"),
                            s && "set" in s && (r = s.set(e, r, i)) === t)
                        ))
                    )
                        try {
                            u[n] = r;
                        } catch (c) {}
                }
            },
            css: function (e, n, r, i) {
                var o,
                    a,
                    s,
                    l = x.camelCase(n);
                return (
                    (n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l))),
                    (s = x.cssHooks[n] || x.cssHooks[l]),
                    s && "get" in s && (a = s.get(e, !0, r)),
                    a === t && (a = Wt(e, n, i)),
                    "normal" === a && n in Kt && (a = Kt[n]),
                    "" === r || r
                        ? ((o = parseFloat(a)),
                          r === !0 || x.isNumeric(o) ? o || 0 : a)
                        : a
                );
            },
        }),
        e.getComputedStyle
            ? ((Rt = function (t) {
                  return e.getComputedStyle(t, null);
              }),
              (Wt = function (e, n, r) {
                  var i,
                      o,
                      a,
                      s = r || Rt(e),
                      l = s ? s.getPropertyValue(n) || s[n] : t,
                      u = e.style;
                  return (
                      s &&
                          ("" !== l ||
                              x.contains(e.ownerDocument, e) ||
                              (l = x.style(e, n)),
                          Yt.test(l) &&
                              Ut.test(n) &&
                              ((i = u.width),
                              (o = u.minWidth),
                              (a = u.maxWidth),
                              (u.minWidth = u.maxWidth = u.width = l),
                              (l = s.width),
                              (u.width = i),
                              (u.minWidth = o),
                              (u.maxWidth = a))),
                      l
                  );
              }))
            : a.documentElement.currentStyle &&
              ((Rt = function (e) {
                  return e.currentStyle;
              }),
              (Wt = function (e, n, r) {
                  var i,
                      o,
                      a,
                      s = r || Rt(e),
                      l = s ? s[n] : t,
                      u = e.style;
                  return (
                      null == l && u && u[n] && (l = u[n]),
                      Yt.test(l) &&
                          !zt.test(n) &&
                          ((i = u.left),
                          (o = e.runtimeStyle),
                          (a = o && o.left),
                          a && (o.left = e.currentStyle.left),
                          (u.left = "fontSize" === n ? "1em" : l),
                          (l = u.pixelLeft + "px"),
                          (u.left = i),
                          a && (o.left = a)),
                      "" === l ? "auto" : l
                  );
              }));
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2)
            "margin" === n && (a += x.css(e, n + Zt[o], !0, i)),
                r
                    ? ("content" === n &&
                          (a -= x.css(e, "padding" + Zt[o], !0, i)),
                      "margin" !== n &&
                          (a -= x.css(e, "border" + Zt[o] + "Width", !0, i)))
                    : ((a += x.css(e, "padding" + Zt[o], !0, i)),
                      "padding" !== n &&
                          (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a;
    }
    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a =
                x.support.boxSizing &&
                "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (
                ((i = Wt(e, t, o)),
                (0 > i || null == i) && (i = e.style[t]),
                Yt.test(i))
            )
                return i;
            (r = a && (x.support.boxSizingReliable || i === e.style[t])),
                (i = parseFloat(i) || 0);
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }
    function ln(e) {
        var t = a,
            n = Gt[e];
        return (
            n ||
                ((n = un(e, t)),
                ("none" !== n && n) ||
                    ((Pt = (
                        Pt ||
                        x("<iframe frameborder='0' width='0' height='0'/>").css(
                            "cssText",
                            "display:block !important"
                        )
                    ).appendTo(t.documentElement)),
                    (t = (Pt[0].contentWindow || Pt[0].contentDocument)
                        .document),
                    t.write("<!doctype html><html><body>"),
                    t.close(),
                    (n = un(e, t)),
                    Pt.detach()),
                (Gt[e] = n)),
            n
        );
    }
    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
            r = x.css(n[0], "display");
        return n.remove(), r;
    }
    x.each(["height", "width"], function (e, n) {
        x.cssHooks[n] = {
            get: function (e, r, i) {
                return r
                    ? 0 === e.offsetWidth && Xt.test(x.css(e, "display"))
                        ? x.swap(e, Qt, function () {
                              return sn(e, n, i);
                          })
                        : sn(e, n, i)
                    : t;
            },
            set: function (e, t, r) {
                var i = r && Rt(e);
                return on(
                    e,
                    t,
                    r
                        ? an(
                              e,
                              n,
                              r,
                              x.support.boxSizing &&
                                  "border-box" === x.css(e, "boxSizing", !1, i),
                              i
                          )
                        : 0
                );
            },
        };
    }),
        x.support.opacity ||
            (x.cssHooks.opacity = {
                get: function (e, t) {
                    return It.test(
                        (t && e.currentStyle
                            ? e.currentStyle.filter
                            : e.style.filter) || ""
                    )
                        ? 0.01 * parseFloat(RegExp.$1) + ""
                        : t
                        ? "1"
                        : "";
                },
                set: function (e, t) {
                    var n = e.style,
                        r = e.currentStyle,
                        i = x.isNumeric(t)
                            ? "alpha(opacity=" + 100 * t + ")"
                            : "",
                        o = (r && r.filter) || n.filter || "";
                    (n.zoom = 1),
                        ((t >= 1 || "" === t) &&
                            "" === x.trim(o.replace($t, "")) &&
                            n.removeAttribute &&
                            (n.removeAttribute("filter"),
                            "" === t || (r && !r.filter))) ||
                            (n.filter = $t.test(o)
                                ? o.replace($t, i)
                                : o + " " + i);
                },
            }),
        x(function () {
            x.support.reliableMarginRight ||
                (x.cssHooks.marginRight = {
                    get: function (e, n) {
                        return n
                            ? x.swap(e, { display: "inline-block" }, Wt, [
                                  e,
                                  "marginRight",
                              ])
                            : t;
                    },
                }),
                !x.support.pixelPosition &&
                    x.fn.position &&
                    x.each(["top", "left"], function (e, n) {
                        x.cssHooks[n] = {
                            get: function (e, r) {
                                return r
                                    ? ((r = Wt(e, n)),
                                      Yt.test(r)
                                          ? x(e).position()[n] + "px"
                                          : r)
                                    : t;
                            },
                        };
                    });
        }),
        x.expr &&
            x.expr.filters &&
            ((x.expr.filters.hidden = function (e) {
                return (
                    (0 >= e.offsetWidth && 0 >= e.offsetHeight) ||
                    (!x.support.reliableHiddenOffsets &&
                        "none" ===
                            ((e.style && e.style.display) ||
                                x.css(e, "display")))
                );
            }),
            (x.expr.filters.visible = function (e) {
                return !x.expr.filters.hidden(e);
            })),
        x.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (x.cssHooks[e + t] = {
                expand: function (n) {
                    var r = 0,
                        i = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                    for (; 4 > r; r++)
                        i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
                Ut.test(e) || (x.cssHooks[e + t].set = on);
        });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function () {
            return x.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this;
            })
                .filter(function () {
                    var e = this.type;
                    return (
                        this.name &&
                        !x(this).is(":disabled") &&
                        hn.test(this.nodeName) &&
                        !dn.test(e) &&
                        (this.checked || !Ct.test(e))
                    );
                })
                .map(function (e, t) {
                    var n = x(this).val();
                    return null == n
                        ? null
                        : x.isArray(n)
                        ? x.map(n, function (e) {
                              return {
                                  name: t.name,
                                  value: e.replace(fn, "\r\n"),
                              };
                          })
                        : { name: t.name, value: n.replace(fn, "\r\n") };
                })
                .get();
        },
    }),
        (x.param = function (e, n) {
            var r,
                i = [],
                o = function (e, t) {
                    (t = x.isFunction(t) ? t() : null == t ? "" : t),
                        (i[i.length] =
                            encodeURIComponent(e) +
                            "=" +
                            encodeURIComponent(t));
                };
            if (
                (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional),
                x.isArray(e) || (e.jquery && !x.isPlainObject(e)))
            )
                x.each(e, function () {
                    o(this.name, this.value);
                });
            else for (r in e) gn(r, e[r], n, o);
            return i.join("&").replace(cn, "+");
        });
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t))
            x.each(t, function (t, i) {
                n || pn.test(e)
                    ? r(e, i)
                    : gn(
                          e + "[" + ("object" == typeof i ? t : "") + "]",
                          i,
                          n,
                          r
                      );
            });
        else if (n || "object" !== x.type(t)) r(e, t);
        else for (i in t) gn(e + "[" + i + "]", t[i], n, r);
    }
    x.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
            " "
        ),
        function (e, t) {
            x.fn[t] = function (e, n) {
                return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
            };
        }
    ),
        x.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
            },
        });
    var mn,
        yn,
        vn = x.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = x.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try {
        yn = o.href;
    } catch (Ln) {
        (yn = a.createElement("a")), (yn.href = ""), (yn = yn.href);
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))
                while ((r = o[i++]))
                    "+" === r[0]
                        ? ((r = r.slice(1) || "*"),
                          (e[r] = e[r] || []).unshift(n))
                        : (e[r] = e[r] || []).push(n);
        };
    }
    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;
        function s(l) {
            var u;
            return (
                (o[l] = !0),
                x.each(e[l] || [], function (e, l) {
                    var c = l(n, r, i);
                    return "string" != typeof c || a || o[c]
                        ? a
                            ? !(u = c)
                            : t
                        : (n.dataTypes.unshift(c), s(c), !1);
                }),
                u
            );
        }
        return s(n.dataTypes[0]) || (!o["*"] && s("*"));
    }
    function _n(e, n) {
        var r,
            i,
            o = x.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e;
    }
    (x.fn.load = function (e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i,
            o,
            a,
            s = this,
            l = e.indexOf(" ");
        return (
            l >= 0 && ((i = e.slice(l, e.length)), (e = e.slice(0, l))),
            x.isFunction(n)
                ? ((r = n), (n = t))
                : n && "object" == typeof n && (a = "POST"),
            s.length > 0 &&
                x
                    .ajax({ url: e, type: a, dataType: "html", data: n })
                    .done(function (e) {
                        (o = arguments),
                            s.html(
                                i
                                    ? x("<div>").append(x.parseHTML(e)).find(i)
                                    : e
                            );
                    })
                    .complete(
                        r &&
                            function (e, t) {
                                s.each(r, o || [e.responseText, t, e]);
                            }
                    ),
            this
        );
    }),
        x.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (e, t) {
                x.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        x.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: yn,
                type: "GET",
                isLocal: Cn.test(mn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Dn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /xml/, html: /html/, json: /json/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": x.parseJSON,
                    "text xml": x.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
            },
            ajaxPrefilter: Hn(An),
            ajaxTransport: Hn(jn),
            ajax: function (e, n) {
                "object" == typeof e && ((n = e), (e = t)), (n = n || {});
                var r,
                    i,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    p = x.ajaxSetup({}, n),
                    f = p.context || p,
                    d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                    h = x.Deferred(),
                    g = x.Callbacks("once memory"),
                    m = p.statusCode || {},
                    y = {},
                    v = {},
                    b = 0,
                    w = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === b) {
                                if (!c) {
                                    c = {};
                                    while ((t = Tn.exec(a)))
                                        c[t[1].toLowerCase()] = t[2];
                                }
                                t = c[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? a : null;
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return (
                                b || ((e = v[n] = v[n] || e), (y[e] = t)), this
                            );
                        },
                        overrideMimeType: function (e) {
                            return b || (p.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (2 > b) for (t in e) m[t] = [m[t], e[t]];
                                else C.always(e[C.status]);
                            return this;
                        },
                        abort: function (e) {
                            var t = e || w;
                            return u && u.abort(t), k(0, t), this;
                        },
                    };
                if (
                    ((h.promise(C).complete = g.add),
                    (C.success = C.done),
                    (C.error = C.fail),
                    (p.url = ((e || p.url || yn) + "")
                        .replace(xn, "")
                        .replace(kn, mn[1] + "//")),
                    (p.type = n.method || n.type || p.method || p.type),
                    (p.dataTypes = x
                        .trim(p.dataType || "*")
                        .toLowerCase()
                        .match(T) || [""]),
                    null == p.crossDomain &&
                        ((r = En.exec(p.url.toLowerCase())),
                        (p.crossDomain = !(
                            !r ||
                            (r[1] === mn[1] &&
                                r[2] === mn[2] &&
                                (r[3] || ("http:" === r[1] ? "80" : "443")) ===
                                    (mn[3] ||
                                        ("http:" === mn[1] ? "80" : "443")))
                        ))),
                    p.data &&
                        p.processData &&
                        "string" != typeof p.data &&
                        (p.data = x.param(p.data, p.traditional)),
                    qn(An, p, n, C),
                    2 === b)
                )
                    return C;
                (l = p.global),
                    l && 0 === x.active++ && x.event.trigger("ajaxStart"),
                    (p.type = p.type.toUpperCase()),
                    (p.hasContent = !Nn.test(p.type)),
                    (o = p.url),
                    p.hasContent ||
                        (p.data &&
                            ((o = p.url += (bn.test(o) ? "&" : "?") + p.data),
                            delete p.data),
                        p.cache === !1 &&
                            (p.url = wn.test(o)
                                ? o.replace(wn, "$1_=" + vn++)
                                : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)),
                    p.ifModified &&
                        (x.lastModified[o] &&
                            C.setRequestHeader(
                                "If-Modified-Since",
                                x.lastModified[o]
                            ),
                        x.etag[o] &&
                            C.setRequestHeader("If-None-Match", x.etag[o])),
                    ((p.data && p.hasContent && p.contentType !== !1) ||
                        n.contentType) &&
                        C.setRequestHeader("Content-Type", p.contentType),
                    C.setRequestHeader(
                        "Accept",
                        p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                            ? p.accepts[p.dataTypes[0]] +
                                  ("*" !== p.dataTypes[0]
                                      ? ", " + Dn + "; q=0.01"
                                      : "")
                            : p.accepts["*"]
                    );
                for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
                if (
                    p.beforeSend &&
                    (p.beforeSend.call(f, C, p) === !1 || 2 === b)
                )
                    return C.abort();
                w = "abort";
                for (i in { success: 1, error: 1, complete: 1 }) C[i](p[i]);
                if ((u = qn(jn, p, n, C))) {
                    (C.readyState = 1),
                        l && d.trigger("ajaxSend", [C, p]),
                        p.async &&
                            p.timeout > 0 &&
                            (s = setTimeout(function () {
                                C.abort("timeout");
                            }, p.timeout));
                    try {
                        (b = 1), u.send(y, k);
                    } catch (N) {
                        if (!(2 > b)) throw N;
                        k(-1, N);
                    }
                } else k(-1, "No Transport");
                function k(e, n, r, i) {
                    var c,
                        y,
                        v,
                        w,
                        T,
                        N = n;
                    2 !== b &&
                        ((b = 2),
                        s && clearTimeout(s),
                        (u = t),
                        (a = i || ""),
                        (C.readyState = e > 0 ? 4 : 0),
                        (c = (e >= 200 && 300 > e) || 304 === e),
                        r && (w = Mn(p, C, r)),
                        (w = On(p, w, C, c)),
                        c
                            ? (p.ifModified &&
                                  ((T = C.getResponseHeader("Last-Modified")),
                                  T && (x.lastModified[o] = T),
                                  (T = C.getResponseHeader("etag")),
                                  T && (x.etag[o] = T)),
                              204 === e || "HEAD" === p.type
                                  ? (N = "nocontent")
                                  : 304 === e
                                  ? (N = "notmodified")
                                  : ((N = w.state),
                                    (y = w.data),
                                    (v = w.error),
                                    (c = !v)))
                            : ((v = N),
                              (e || !N) && ((N = "error"), 0 > e && (e = 0))),
                        (C.status = e),
                        (C.statusText = (n || N) + ""),
                        c
                            ? h.resolveWith(f, [y, N, C])
                            : h.rejectWith(f, [C, N, v]),
                        C.statusCode(m),
                        (m = t),
                        l &&
                            d.trigger(c ? "ajaxSuccess" : "ajaxError", [
                                C,
                                p,
                                c ? y : v,
                            ]),
                        g.fireWith(f, [C, N]),
                        l &&
                            (d.trigger("ajaxComplete", [C, p]),
                            --x.active || x.event.trigger("ajaxStop")));
                }
                return C;
            },
            getJSON: function (e, t, n) {
                return x.get(e, t, n, "json");
            },
            getScript: function (e, n) {
                return x.get(e, t, n, "script");
            },
        }),
        x.each(["get", "post"], function (e, n) {
            x[n] = function (e, r, i, o) {
                return (
                    x.isFunction(r) && ((o = o || i), (i = r), (r = t)),
                    x.ajax({
                        url: e,
                        type: n,
                        dataType: o,
                        data: r,
                        success: i,
                    })
                );
            };
        });
    function Mn(e, n, r) {
        var i,
            o,
            a,
            s,
            l = e.contents,
            u = e.dataTypes;
        while ("*" === u[0])
            u.shift(),
                o === t &&
                    (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break;
                }
        if (u[0] in r) a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break;
                }
                i || (i = s);
            }
            a = a || i;
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
    }
    function On(e, t, n, r) {
        var i,
            o,
            a,
            s,
            l,
            u = {},
            c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (
                (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                (l = o),
                (o = c.shift()))
            )
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
                    if (((a = u[l + " " + o] || u["* " + o]), !a))
                        for (i in u)
                            if (
                                ((s = i.split(" ")),
                                s[1] === o &&
                                    (a = u[l + " " + s[0]] || u["* " + s[0]]))
                            ) {
                                a === !0
                                    ? (a = u[i])
                                    : u[i] !== !0 &&
                                      ((o = s[0]), c.unshift(s[1]));
                                break;
                            }
                    if (a !== !0)
                        if (a && e["throws"]) t = a(t);
                        else
                            try {
                                t = a(t);
                            } catch (p) {
                                return {
                                    state: "parsererror",
                                    error: a
                                        ? p
                                        : "No conversion from " +
                                          l +
                                          " to " +
                                          o,
                                };
                            }
                }
        return { state: "success", data: t };
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
            "text script": function (e) {
                return x.globalEval(e), e;
            },
        },
    }),
        x.ajaxPrefilter("script", function (e) {
            e.cache === t && (e.cache = !1),
                e.crossDomain && ((e.type = "GET"), (e.global = !1));
        }),
        x.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var n,
                    r = a.head || x("head")[0] || a.documentElement;
                return {
                    send: function (t, i) {
                        (n = a.createElement("script")),
                            (n.async = !0),
                            e.scriptCharset && (n.charset = e.scriptCharset),
                            (n.src = e.url),
                            (n.onload = n.onreadystatechange =
                                function (e, t) {
                                    (t ||
                                        !n.readyState ||
                                        /loaded|complete/.test(n.readyState)) &&
                                        ((n.onload = n.onreadystatechange =
                                            null),
                                        n.parentNode &&
                                            n.parentNode.removeChild(n),
                                        (n = null),
                                        t || i(200, "success"));
                                }),
                            r.insertBefore(n, r.firstChild);
                    },
                    abort: function () {
                        n && n.onload(t, !0);
                    },
                };
            }
        });
    var Fn = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return (this[e] = !0), e;
        },
    }),
        x.ajaxPrefilter("json jsonp", function (n, r, i) {
            var o,
                a,
                s,
                l =
                    n.jsonp !== !1 &&
                    (Bn.test(n.url)
                        ? "url"
                        : "string" == typeof n.data &&
                          !(n.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                          ) &&
                          Bn.test(n.data) &&
                          "data");
            return l || "jsonp" === n.dataTypes[0]
                ? ((o = n.jsonpCallback =
                      x.isFunction(n.jsonpCallback)
                          ? n.jsonpCallback()
                          : n.jsonpCallback),
                  l
                      ? (n[l] = n[l].replace(Bn, "$1" + o))
                      : n.jsonp !== !1 &&
                        (n.url +=
                            (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
                  (n.converters["script json"] = function () {
                      return s || x.error(o + " was not called"), s[0];
                  }),
                  (n.dataTypes[0] = "json"),
                  (a = e[o]),
                  (e[o] = function () {
                      s = arguments;
                  }),
                  i.always(function () {
                      (e[o] = a),
                          n[o] &&
                              ((n.jsonpCallback = r.jsonpCallback), Fn.push(o)),
                          s && x.isFunction(a) && a(s[0]),
                          (s = a = t);
                  }),
                  "script")
                : t;
        });
    var Pn,
        Rn,
        Wn = 0,
        $n =
            e.ActiveXObject &&
            function () {
                var e;
                for (e in Pn) Pn[e](t, !0);
            };
    function In() {
        try {
            return new e.XMLHttpRequest();
        } catch (t) {}
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    (x.ajaxSettings.xhr = e.ActiveXObject
        ? function () {
              return (!this.isLocal && In()) || zn();
          }
        : In),
        (Rn = x.ajaxSettings.xhr()),
        (x.support.cors = !!Rn && "withCredentials" in Rn),
        (Rn = x.support.ajax = !!Rn),
        Rn &&
            x.ajaxTransport(function (n) {
                if (!n.crossDomain || x.support.cors) {
                    var r;
                    return {
                        send: function (i, o) {
                            var a,
                                s,
                                l = n.xhr();
                            if (
                                (n.username
                                    ? l.open(
                                          n.type,
                                          n.url,
                                          n.async,
                                          n.username,
                                          n.password
                                      )
                                    : l.open(n.type, n.url, n.async),
                                n.xhrFields)
                            )
                                for (s in n.xhrFields) l[s] = n.xhrFields[s];
                            n.mimeType &&
                                l.overrideMimeType &&
                                l.overrideMimeType(n.mimeType),
                                n.crossDomain ||
                                    i["X-Requested-With"] ||
                                    (i["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (s in i) l.setRequestHeader(s, i[s]);
                            } catch (u) {}
                            l.send((n.hasContent && n.data) || null),
                                (r = function (e, i) {
                                    var s, u, c, p;
                                    try {
                                        if (r && (i || 4 === l.readyState))
                                            if (
                                                ((r = t),
                                                a &&
                                                    ((l.onreadystatechange =
                                                        x.noop),
                                                    $n && delete Pn[a]),
                                                i)
                                            )
                                                4 !== l.readyState && l.abort();
                                            else {
                                                (p = {}),
                                                    (s = l.status),
                                                    (u =
                                                        l.getAllResponseHeaders()),
                                                    "string" ==
                                                        typeof l.responseText &&
                                                        (p.text =
                                                            l.responseText);
                                                try {
                                                    c = l.statusText;
                                                } catch (f) {
                                                    c = "";
                                                }
                                                s || !n.isLocal || n.crossDomain
                                                    ? 1223 === s && (s = 204)
                                                    : (s = p.text ? 200 : 404);
                                            }
                                    } catch (d) {
                                        i || o(-1, d);
                                    }
                                    p && o(s, c, p, u);
                                }),
                                n.async
                                    ? 4 === l.readyState
                                        ? setTimeout(r)
                                        : ((a = ++Wn),
                                          $n &&
                                              (Pn ||
                                                  ((Pn = {}), x(e).unload($n)),
                                              (Pn[a] = r)),
                                          (l.onreadystatechange = r))
                                    : r();
                        },
                        abort: function () {
                            r && r(t, !0);
                        },
                    };
                }
            });
    var Xn,
        Un,
        Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Yn.exec(t),
                        o = (i && i[3]) || (x.cssNumber[e] ? "" : "px"),
                        a =
                            (x.cssNumber[e] || ("px" !== o && +r)) &&
                            Yn.exec(x.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        (o = o || a[3]), (i = i || []), (a = +r || 1);
                        do (s = s || ".5"), (a /= s), x.style(n.elem, e, a + o);
                        while (s !== (s = n.cur() / r) && 1 !== s && --l);
                    }
                    return (
                        i &&
                            ((a = n.start = +a || +r || 0),
                            (n.unit = o),
                            (n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2])),
                        n
                    );
                },
            ],
        };
    function Kn() {
        return (
            setTimeout(function () {
                Xn = t;
            }),
            (Xn = x.now())
        );
    }
    function Zn(e, t, n) {
        var r,
            i = (Qn[t] || []).concat(Qn["*"]),
            o = 0,
            a = i.length;
        for (; a > o; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function er(e, t, n) {
        var r,
            i,
            o = 0,
            a = Gn.length,
            s = x.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = n / u.duration || 0,
                    o = 1 - r,
                    a = 0,
                    l = u.tweens.length;
                for (; l > a; a++) u.tweens[a].run(o);
                return (
                    s.notifyWith(e, [u, o, n]),
                    1 > o && l ? n : (s.resolveWith(e, [u]), !1)
                );
            },
            u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = x.Tween(
                        e,
                        u.opts,
                        t,
                        n,
                        u.opts.specialEasing[t] || u.opts.easing
                    );
                    return u.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return (
                        t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]),
                        this
                    );
                },
            }),
            c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)
            if ((r = Gn[o].call(u, e, c, u.opts))) return r;
        return (
            x.map(c, Zn, u),
            x.isFunction(u.opts.start) && u.opts.start.call(e, u),
            x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
            u
                .progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete)
                .fail(u.opts.fail)
                .always(u.opts.always)
        );
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (
                ((r = x.camelCase(n)),
                (i = t[r]),
                (o = e[n]),
                x.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (a = x.cssHooks[r]),
                a && "expand" in a)
            ) {
                (o = a.expand(o)), delete e[r];
                for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
            } else t[r] = i;
    }
    x.Animation = x.extend(er, {
        tweener: function (e, t) {
            x.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
            var n,
                r = 0,
                i = e.length;
            for (; i > r; r++)
                (n = e[r]), (Qn[n] = Qn[n] || []), Qn[n].unshift(t);
        },
        prefilter: function (e, t) {
            t ? Gn.unshift(e) : Gn.push(e);
        },
    });
    function nr(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            l,
            u = this,
            c = {},
            p = e.style,
            f = e.nodeType && nn(e),
            d = x._data(e, "fxshow");
        n.queue ||
            ((s = x._queueHooks(e, "fx")),
            null == s.unqueued &&
                ((s.unqueued = 0),
                (l = s.empty.fire),
                (s.empty.fire = function () {
                    s.unqueued || l();
                })),
            s.unqueued++,
            u.always(function () {
                u.always(function () {
                    s.unqueued--, x.queue(e, "fx").length || s.empty.fire();
                });
            })),
            1 === e.nodeType &&
                ("height" in t || "width" in t) &&
                ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                "inline" === x.css(e, "display") &&
                    "none" === x.css(e, "float") &&
                    (x.support.inlineBlockNeedsLayout &&
                    "inline" !== ln(e.nodeName)
                        ? (p.zoom = 1)
                        : (p.display = "inline-block"))),
            n.overflow &&
                ((p.overflow = "hidden"),
                x.support.shrinkWrapBlocks ||
                    u.always(function () {
                        (p.overflow = n.overflow[0]),
                            (p.overflowX = n.overflow[1]),
                            (p.overflowY = n.overflow[2]);
                    }));
        for (r in t)
            if (((i = t[r]), Vn.exec(i))) {
                if (
                    (delete t[r],
                    (o = o || "toggle" === i),
                    i === (f ? "hide" : "show"))
                )
                    continue;
                c[r] = (d && d[r]) || x.style(e, r);
            }
        if (!x.isEmptyObject(c)) {
            d
                ? "hidden" in d && (f = d.hidden)
                : (d = x._data(e, "fxshow", {})),
                o && (d.hidden = !f),
                f
                    ? x(e).show()
                    : u.done(function () {
                          x(e).hide();
                      }),
                u.done(function () {
                    var t;
                    x._removeData(e, "fxshow");
                    for (t in c) x.style(e, t, c[t]);
                });
            for (r in c)
                (a = Zn(f ? d[r] : 0, r, u)),
                    r in d ||
                        ((d[r] = a.start),
                        f &&
                            ((a.end = a.start),
                            (a.start =
                                "width" === r || "height" === r ? 1 : 0)));
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i);
    }
    (x.Tween = rr),
        (rr.prototype = {
            constructor: rr,
            init: function (e, t, n, r, i, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || "swing"),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (x.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = rr.propHooks[this.prop];
                return e && e.get
                    ? e.get(this)
                    : rr.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = rr.propHooks[this.prop];
                return (
                    (this.pos = t =
                        this.options.duration
                            ? x.easing[this.easing](
                                  e,
                                  this.options.duration * e,
                                  0,
                                  1,
                                  this.options.duration
                              )
                            : e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : rr.propHooks._default.set(this),
                    this
                );
            },
        }),
        (rr.prototype.init.prototype = rr.prototype),
        (rr.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] ||
                        (e.elem.style && null != e.elem.style[e.prop])
                        ? ((t = x.css(e.elem, e.prop, "")),
                          t && "auto" !== t ? t : 0)
                        : e.elem[e.prop];
                },
                set: function (e) {
                    x.fx.step[e.prop]
                        ? x.fx.step[e.prop](e)
                        : e.elem.style &&
                          (null != e.elem.style[x.cssProps[e.prop]] ||
                              x.cssHooks[e.prop])
                        ? x.style(e.elem, e.prop, e.now + e.unit)
                        : (e.elem[e.prop] = e.now);
                },
            },
        }),
        (rr.propHooks.scrollTop = rr.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                },
            }),
        x.each(["toggle", "show", "hide"], function (e, t) {
            var n = x.fn[t];
            x.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(ir(t, !0), e, r, i);
            };
        }),
        x.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(nn)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = x.isEmptyObject(e),
                    o = x.speed(t, n, r),
                    a = function () {
                        var t = er(this, x.extend({}, e), o);
                        (i || x._data(this, "finish")) && t.stop(!0);
                    };
                return (
                    (a.finish = a),
                    i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                );
            },
            stop: function (e, n, r) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(r);
                };
                return (
                    "string" != typeof e && ((r = n), (n = e), (e = t)),
                    n && e !== !1 && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            n = null != e && e + "queueHooks",
                            o = x.timers,
                            a = x._data(this);
                        if (n) a[n] && a[n].stop && i(a[n]);
                        else
                            for (n in a)
                                a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                        for (n = o.length; n--; )
                            o[n].elem !== this ||
                                (null != e && o[n].queue !== e) ||
                                (o[n].anim.stop(r), (t = !1), o.splice(n, 1));
                        (t || !r) && x.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    e !== !1 && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = x._data(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = x.timers,
                            a = r ? r.length : 0;
                        for (
                            n.finish = !0,
                                x.queue(this, e, []),
                                i && i.stop && i.stop.call(this, !0),
                                t = o.length;
                            t--;

                        )
                            o[t].elem === this &&
                                o[t].queue === e &&
                                (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; a > t; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        });
    function ir(e, t) {
        var n,
            r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            (n = Zt[i]), (r["margin" + n] = r["padding" + n] = e);
        return t && (r.opacity = r.width = e), r;
    }
    x.each(
        {
            slideDown: ir("show"),
            slideUp: ir("hide"),
            slideToggle: ir("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
            x.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
            };
        }
    ),
        (x.speed = function (e, t, n) {
            var r =
                e && "object" == typeof e
                    ? x.extend({}, e)
                    : {
                          complete: n || (!n && t) || (x.isFunction(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !x.isFunction(t) && t),
                      };
            return (
                (r.duration = x.fx.off
                    ? 0
                    : "number" == typeof r.duration
                    ? r.duration
                    : r.duration in x.fx.speeds
                    ? x.fx.speeds[r.duration]
                    : x.fx.speeds._default),
                (null == r.queue || r.queue === !0) && (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    x.isFunction(r.old) && r.old.call(this),
                        r.queue && x.dequeue(this, r.queue);
                }),
                r
            );
        }),
        (x.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
        }),
        (x.timers = []),
        (x.fx = rr.prototype.init),
        (x.fx.tick = function () {
            var e,
                n = x.timers,
                r = 0;
            for (Xn = x.now(); n.length > r; r++)
                (e = n[r]), e() || n[r] !== e || n.splice(r--, 1);
            n.length || x.fx.stop(), (Xn = t);
        }),
        (x.fx.timer = function (e) {
            e() && x.timers.push(e) && x.fx.start();
        }),
        (x.fx.interval = 13),
        (x.fx.start = function () {
            Un || (Un = setInterval(x.fx.tick, x.fx.interval));
        }),
        (x.fx.stop = function () {
            clearInterval(Un), (Un = null);
        }),
        (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (x.fx.step = {}),
        x.expr &&
            x.expr.filters &&
            (x.expr.filters.animated = function (e) {
                return x.grep(x.timers, function (t) {
                    return e === t.elem;
                }).length;
            }),
        (x.fn.offset = function (e) {
            if (arguments.length)
                return e === t
                    ? this
                    : this.each(function (t) {
                          x.offset.setOffset(this, e, t);
                      });
            var n,
                r,
                o = { top: 0, left: 0 },
                a = this[0],
                s = a && a.ownerDocument;
            if (s)
                return (
                    (n = s.documentElement),
                    x.contains(n, a)
                        ? (typeof a.getBoundingClientRect !== i &&
                              (o = a.getBoundingClientRect()),
                          (r = or(s)),
                          {
                              top:
                                  o.top +
                                  (r.pageYOffset || n.scrollTop) -
                                  (n.clientTop || 0),
                              left:
                                  o.left +
                                  (r.pageXOffset || n.scrollLeft) -
                                  (n.clientLeft || 0),
                          })
                        : o
                );
        }),
        (x.offset = {
            setOffset: function (e, t, n) {
                var r = x.css(e, "position");
                "static" === r && (e.style.position = "relative");
                var i = x(e),
                    o = i.offset(),
                    a = x.css(e, "top"),
                    s = x.css(e, "left"),
                    l =
                        ("absolute" === r || "fixed" === r) &&
                        x.inArray("auto", [a, s]) > -1,
                    u = {},
                    c = {},
                    p,
                    f;
                l
                    ? ((c = i.position()), (p = c.top), (f = c.left))
                    : ((p = parseFloat(a) || 0), (f = parseFloat(s) || 0)),
                    x.isFunction(t) && (t = t.call(e, n, o)),
                    null != t.top && (u.top = t.top - o.top + p),
                    null != t.left && (u.left = t.left - o.left + f),
                    "using" in t ? t.using.call(e, u) : i.css(u);
            },
        }),
        x.fn.extend({
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n = { top: 0, left: 0 },
                        r = this[0];
                    return (
                        "fixed" === x.css(r, "position")
                            ? (t = r.getBoundingClientRect())
                            : ((e = this.offsetParent()),
                              (t = this.offset()),
                              x.nodeName(e[0], "html") || (n = e.offset()),
                              (n.top += x.css(e[0], "borderTopWidth", !0)),
                              (n.left += x.css(e[0], "borderLeftWidth", !0))),
                        {
                            top: t.top - n.top - x.css(r, "marginTop", !0),
                            left: t.left - n.left - x.css(r, "marginLeft", !0),
                        }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent || s;
                    while (
                        e &&
                        !x.nodeName(e, "html") &&
                        "static" === x.css(e, "position")
                    )
                        e = e.offsetParent;
                    return e || s;
                });
            },
        }),
        x.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, n) {
                var r = /Y/.test(n);
                x.fn[e] = function (i) {
                    return x.access(
                        this,
                        function (e, i, o) {
                            var a = or(e);
                            return o === t
                                ? a
                                    ? n in a
                                        ? a[n]
                                        : a.document.documentElement[i]
                                    : e[i]
                                : (a
                                      ? a.scrollTo(
                                            r ? x(a).scrollLeft() : o,
                                            r ? o : x(a).scrollTop()
                                        )
                                      : (e[i] = o),
                                  t);
                        },
                        e,
                        i,
                        arguments.length,
                        null
                    );
                };
            }
        );
    function or(e) {
        return x.isWindow(e)
            ? e
            : 9 === e.nodeType
            ? e.defaultView || e.parentWindow
            : !1;
    }
    x.each({ Height: "height", Width: "width" }, function (e, n) {
        x.each(
            { padding: "inner" + e, content: n, "": "outer" + e },
            function (r, i) {
                x.fn[i] = function (i, o) {
                    var a = arguments.length && (r || "boolean" != typeof i),
                        s = r || (i === !0 || o === !0 ? "margin" : "border");
                    return x.access(
                        this,
                        function (n, r, i) {
                            var o;
                            return x.isWindow(n)
                                ? n.document.documentElement["client" + e]
                                : 9 === n.nodeType
                                ? ((o = n.documentElement),
                                  Math.max(
                                      n.body["scroll" + e],
                                      o["scroll" + e],
                                      n.body["offset" + e],
                                      o["offset" + e],
                                      o["client" + e]
                                  ))
                                : i === t
                                ? x.css(n, r, s)
                                : x.style(n, r, i, s);
                        },
                        n,
                        a ? i : t,
                        a,
                        null
                    );
                };
            }
        );
    }),
        (x.fn.size = function () {
            return this.length;
        }),
        (x.fn.andSelf = x.fn.addBack),
        "object" == typeof module && module && "object" == typeof module.exports
            ? (module.exports = x)
            : ((e.jQuery = e.$ = x),
              "function" == typeof define &&
                  define.amd &&
                  define("jquery", [], function () {
                      return x;
                  }));
})(window);
/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * NUGET: END LICENSE TEXT */
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
 * Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */ (function (t) {
    t.extend(t.fn, {
        validate: function (e) {
            if (!this.length)
                return (
                    e &&
                        e.debug &&
                        window.console &&
                        console.warn(
                            "Nothing selected, can't validate, returning nothing."
                        ),
                    void 0
                );
            var i = t.data(this[0], "validator");
            return i
                ? i
                : (this.attr("novalidate", "novalidate"),
                  (i = new t.validator(e, this[0])),
                  t.data(this[0], "validator", i),
                  i.settings.onsubmit &&
                      (this.validateDelegate(":submit", "click", function (e) {
                          i.settings.submitHandler &&
                              (i.submitButton = e.target),
                              t(e.target).hasClass("cancel") &&
                                  (i.cancelSubmit = !0),
                              void 0 !== t(e.target).attr("formnovalidate") &&
                                  (i.cancelSubmit = !0);
                      }),
                      this.submit(function (e) {
                          function s() {
                              var s;
                              return i.settings.submitHandler
                                  ? (i.submitButton &&
                                        (s = t("<input type='hidden'/>")
                                            .attr("name", i.submitButton.name)
                                            .val(t(i.submitButton).val())
                                            .appendTo(i.currentForm)),
                                    i.settings.submitHandler.call(
                                        i,
                                        i.currentForm,
                                        e
                                    ),
                                    i.submitButton && s.remove(),
                                    !1)
                                  : !0;
                          }
                          return (
                              i.settings.debug && e.preventDefault(),
                              i.cancelSubmit
                                  ? ((i.cancelSubmit = !1), s())
                                  : i.form()
                                  ? i.pendingRequest
                                      ? ((i.formSubmitted = !0), !1)
                                      : s()
                                  : (i.focusInvalid(), !1)
                          );
                      })),
                  i);
        },
        valid: function () {
            if (t(this[0]).is("form")) return this.validate().form();
            var e = !0,
                i = t(this[0].form).validate();
            return (
                this.each(function () {
                    e = e && i.element(this);
                }),
                e
            );
        },
        removeAttrs: function (e) {
            var i = {},
                s = this;
            return (
                t.each(e.split(/\s/), function (t, e) {
                    (i[e] = s.attr(e)), s.removeAttr(e);
                }),
                i
            );
        },
        rules: function (e, i) {
            var s = this[0];
            if (e) {
                var r = t.data(s.form, "validator").settings,
                    n = r.rules,
                    a = t.validator.staticRules(s);
                switch (e) {
                    case "add":
                        t.extend(a, t.validator.normalizeRule(i)),
                            delete a.messages,
                            (n[s.name] = a),
                            i.messages &&
                                (r.messages[s.name] = t.extend(
                                    r.messages[s.name],
                                    i.messages
                                ));
                        break;
                    case "remove":
                        if (!i) return delete n[s.name], a;
                        var u = {};
                        return (
                            t.each(i.split(/\s/), function (t, e) {
                                (u[e] = a[e]), delete a[e];
                            }),
                            u
                        );
                }
            }
            var o = t.validator.normalizeRules(
                t.extend(
                    {},
                    t.validator.classRules(s),
                    t.validator.attributeRules(s),
                    t.validator.dataRules(s),
                    t.validator.staticRules(s)
                ),
                s
            );
            if (o.required) {
                var l = o.required;
                delete o.required, (o = t.extend({ required: l }, o));
            }
            return o;
        },
    }),
        t.extend(t.expr[":"], {
            blank: function (e) {
                return !t.trim("" + t(e).val());
            },
            filled: function (e) {
                return !!t.trim("" + t(e).val());
            },
            unchecked: function (e) {
                return !t(e).prop("checked");
            },
        }),
        (t.validator = function (e, i) {
            (this.settings = t.extend(!0, {}, t.validator.defaults, e)),
                (this.currentForm = i),
                this.init();
        }),
        (t.validator.format = function (e, i) {
            return 1 === arguments.length
                ? function () {
                      var i = t.makeArray(arguments);
                      return i.unshift(e), t.validator.format.apply(this, i);
                  }
                : (arguments.length > 2 &&
                      i.constructor !== Array &&
                      (i = t.makeArray(arguments).slice(1)),
                  i.constructor !== Array && (i = [i]),
                  t.each(i, function (t, i) {
                      e = e.replace(
                          RegExp("\\{" + t + "\\}", "g"),
                          function () {
                              return i;
                          }
                      );
                  }),
                  e);
        }),
        t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (t) {
                    (this.lastActive = t),
                        this.settings.focusCleanup &&
                            !this.blockFocusCleanup &&
                            (this.settings.unhighlight &&
                                this.settings.unhighlight.call(
                                    this,
                                    t,
                                    this.settings.errorClass,
                                    this.settings.validClass
                                ),
                            this.addWrapper(this.errorsFor(t)).hide());
                },
                onfocusout: function (t) {
                    this.checkable(t) ||
                        (!(t.name in this.submitted) && this.optional(t)) ||
                        this.element(t);
                },
                onkeyup: function (t, e) {
                    (9 !== e.which || "" !== this.elementValue(t)) &&
                        (t.name in this.submitted || t === this.lastElement) &&
                        this.element(t);
                },
                onclick: function (t) {
                    t.name in this.submitted
                        ? this.element(t)
                        : t.parentNode.name in this.submitted &&
                          this.element(t.parentNode);
                },
                highlight: function (e, i, s) {
                    "radio" === e.type
                        ? this.findByName(e.name).addClass(i).removeClass(s)
                        : t(e).addClass(i).removeClass(s);
                },
                unhighlight: function (e, i, s) {
                    "radio" === e.type
                        ? this.findByName(e.name).removeClass(i).addClass(s)
                        : t(e).removeClass(i).addClass(s);
                },
            },
            setDefaults: function (e) {
                t.extend(t.validator.defaults, e);
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: t.validator.format(
                    "Please enter no more than {0} characters."
                ),
                minlength: t.validator.format(
                    "Please enter at least {0} characters."
                ),
                rangelength: t.validator.format(
                    "Please enter a value between {0} and {1} characters long."
                ),
                range: t.validator.format(
                    "Please enter a value between {0} and {1}."
                ),
                max: t.validator.format(
                    "Please enter a value less than or equal to {0}."
                ),
                min: t.validator.format(
                    "Please enter a value greater than or equal to {0}."
                ),
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function e(e) {
                        var i = t.data(this[0].form, "validator"),
                            s = "on" + e.type.replace(/^validate/, "");
                        i.settings[s] && i.settings[s].call(i, this[0], e);
                    }
                    (this.labelContainer = t(
                        this.settings.errorLabelContainer
                    )),
                        (this.errorContext =
                            (this.labelContainer.length &&
                                this.labelContainer) ||
                            t(this.currentForm)),
                        (this.containers = t(this.settings.errorContainer).add(
                            this.settings.errorLabelContainer
                        )),
                        (this.submitted = {}),
                        (this.valueCache = {}),
                        (this.pendingRequest = 0),
                        (this.pending = {}),
                        (this.invalid = {}),
                        this.reset();
                    var i = (this.groups = {});
                    t.each(this.settings.groups, function (e, s) {
                        "string" == typeof s && (s = s.split(/\s/)),
                            t.each(s, function (t, s) {
                                i[s] = e;
                            });
                    });
                    var s = this.settings.rules;
                    t.each(s, function (e, i) {
                        s[e] = t.validator.normalizeRule(i);
                    }),
                        t(this.currentForm)
                            .validateDelegate(
                                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ",
                                "focusin focusout keyup",
                                e
                            )
                            .validateDelegate(
                                "[type='radio'], [type='checkbox'], select, option",
                                "click",
                                e
                            ),
                        this.settings.invalidHandler &&
                            t(this.currentForm).bind(
                                "invalid-form.validate",
                                this.settings.invalidHandler
                            );
                },
                form: function () {
                    return (
                        this.checkForm(),
                        t.extend(this.submitted, this.errorMap),
                        (this.invalid = t.extend({}, this.errorMap)),
                        this.valid() ||
                            t(this.currentForm).triggerHandler("invalid-form", [
                                this,
                            ]),
                        this.showErrors(),
                        this.valid()
                    );
                },
                checkForm: function () {
                    this.prepareForm();
                    for (
                        var t = 0, e = (this.currentElements = this.elements());
                        e[t];
                        t++
                    )
                        this.check(e[t]);
                    return this.valid();
                },
                element: function (e) {
                    (e = this.validationTargetFor(this.clean(e))),
                        (this.lastElement = e),
                        this.prepareElement(e),
                        (this.currentElements = t(e));
                    var i = this.check(e) !== !1;
                    return (
                        i
                            ? delete this.invalid[e.name]
                            : (this.invalid[e.name] = !0),
                        this.numberOfInvalids() ||
                            (this.toHide = this.toHide.add(this.containers)),
                        this.showErrors(),
                        i
                    );
                },
                showErrors: function (e) {
                    if (e) {
                        t.extend(this.errorMap, e), (this.errorList = []);
                        for (var i in e)
                            this.errorList.push({
                                message: e[i],
                                element: this.findByName(i)[0],
                            });
                        this.successList = t.grep(
                            this.successList,
                            function (t) {
                                return !(t.name in e);
                            }
                        );
                    }
                    this.settings.showErrors
                        ? this.settings.showErrors.call(
                              this,
                              this.errorMap,
                              this.errorList
                          )
                        : this.defaultShowErrors();
                },
                resetForm: function () {
                    t.fn.resetForm && t(this.currentForm).resetForm(),
                        (this.submitted = {}),
                        (this.lastElement = null),
                        this.prepareForm(),
                        this.hideErrors(),
                        this.elements()
                            .removeClass(this.settings.errorClass)
                            .removeData("previousValue");
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid);
                },
                objectLength: function (t) {
                    var e = 0;
                    for (var i in t) e++;
                    return e;
                },
                hideErrors: function () {
                    this.addWrapper(this.toHide).hide();
                },
                valid: function () {
                    return 0 === this.size();
                },
                size: function () {
                    return this.errorList.length;
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid)
                        try {
                            t(
                                this.findLastActive() ||
                                    (this.errorList.length &&
                                        this.errorList[0].element) ||
                                    []
                            )
                                .filter(":visible")
                                .focus()
                                .trigger("focusin");
                        } catch (e) {}
                },
                findLastActive: function () {
                    var e = this.lastActive;
                    return (
                        e &&
                        1 ===
                            t.grep(this.errorList, function (t) {
                                return t.element.name === e.name;
                            }).length &&
                        e
                    );
                },
                elements: function () {
                    var e = this,
                        i = {};
                    return t(this.currentForm)
                        .find("input, select, textarea")
                        .not(":submit, :reset, :image, [disabled]")
                        .not(this.settings.ignore)
                        .filter(function () {
                            return (
                                !this.name &&
                                    e.settings.debug &&
                                    window.console &&
                                    console.error(
                                        "%o has no name assigned",
                                        this
                                    ),
                                this.name in i ||
                                !e.objectLength(t(this).rules())
                                    ? !1
                                    : ((i[this.name] = !0), !0)
                            );
                        });
                },
                clean: function (e) {
                    return t(e)[0];
                },
                errors: function () {
                    var e = this.settings.errorClass.replace(" ", ".");
                    return t(
                        this.settings.errorElement + "." + e,
                        this.errorContext
                    );
                },
                reset: function () {
                    (this.successList = []),
                        (this.errorList = []),
                        (this.errorMap = {}),
                        (this.toShow = t([])),
                        (this.toHide = t([])),
                        (this.currentElements = t([]));
                },
                prepareForm: function () {
                    this.reset(),
                        (this.toHide = this.errors().add(this.containers));
                },
                prepareElement: function (t) {
                    this.reset(), (this.toHide = this.errorsFor(t));
                },
                elementValue: function (e) {
                    var i = t(e).attr("type"),
                        s = t(e).val();
                    return "radio" === i || "checkbox" === i
                        ? t(
                              "input[name='" + t(e).attr("name") + "']:checked"
                          ).val()
                        : "string" == typeof s
                        ? s.replace(/\r/g, "")
                        : s;
                },
                check: function (e) {
                    e = this.validationTargetFor(this.clean(e));
                    var i,
                        s = t(e).rules(),
                        r = !1,
                        n = this.elementValue(e);
                    for (var a in s) {
                        var u = { method: a, parameters: s[a] };
                        try {
                            if (
                                ((i = t.validator.methods[a].call(
                                    this,
                                    n,
                                    e,
                                    u.parameters
                                )),
                                "dependency-mismatch" === i)
                            ) {
                                r = !0;
                                continue;
                            }
                            if (((r = !1), "pending" === i))
                                return (
                                    (this.toHide = this.toHide.not(
                                        this.errorsFor(e)
                                    )),
                                    void 0
                                );
                            if (!i) return this.formatAndAdd(e, u), !1;
                        } catch (o) {
                            throw (
                                (this.settings.debug &&
                                    window.console &&
                                    console.log(
                                        "Exception occurred when checking element " +
                                            e.id +
                                            ", check the '" +
                                            u.method +
                                            "' method.",
                                        o
                                    ),
                                o)
                            );
                        }
                    }
                    return r
                        ? void 0
                        : (this.objectLength(s) && this.successList.push(e),
                          !0);
                },
                customDataMessage: function (e, i) {
                    return (
                        t(e).data("msg-" + i.toLowerCase()) ||
                        (e.attributes &&
                            t(e).attr("data-msg-" + i.toLowerCase()))
                    );
                },
                customMessage: function (t, e) {
                    var i = this.settings.messages[t];
                    return i && (i.constructor === String ? i : i[e]);
                },
                findDefined: function () {
                    for (var t = 0; arguments.length > t; t++)
                        if (void 0 !== arguments[t]) return arguments[t];
                    return void 0;
                },
                defaultMessage: function (e, i) {
                    return this.findDefined(
                        this.customMessage(e.name, i),
                        this.customDataMessage(e, i),
                        (!this.settings.ignoreTitle && e.title) || void 0,
                        t.validator.messages[i],
                        "<strong>Warning: No message defined for " +
                            e.name +
                            "</strong>"
                    );
                },
                formatAndAdd: function (e, i) {
                    var s = this.defaultMessage(e, i.method),
                        r = /\$?\{(\d+)\}/g;
                    "function" == typeof s
                        ? (s = s.call(this, i.parameters, e))
                        : r.test(s) &&
                          (s = t.validator.format(
                              s.replace(r, "{$1}"),
                              i.parameters
                          )),
                        this.errorList.push({ message: s, element: e }),
                        (this.errorMap[e.name] = s),
                        (this.submitted[e.name] = s);
                },
                addWrapper: function (t) {
                    return (
                        this.settings.wrapper &&
                            (t = t.add(t.parent(this.settings.wrapper))),
                        t
                    );
                },
                defaultShowErrors: function () {
                    var t, e;
                    for (t = 0; this.errorList[t]; t++) {
                        var i = this.errorList[t];
                        this.settings.highlight &&
                            this.settings.highlight.call(
                                this,
                                i.element,
                                this.settings.errorClass,
                                this.settings.validClass
                            ),
                            this.showLabel(i.element, i.message);
                    }
                    if (
                        (this.errorList.length &&
                            (this.toShow = this.toShow.add(this.containers)),
                        this.settings.success)
                    )
                        for (t = 0; this.successList[t]; t++)
                            this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++)
                            this.settings.unhighlight.call(
                                this,
                                e[t],
                                this.settings.errorClass,
                                this.settings.validClass
                            );
                    (this.toHide = this.toHide.not(this.toShow)),
                        this.hideErrors(),
                        this.addWrapper(this.toShow).show();
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function () {
                    return t(this.errorList).map(function () {
                        return this.element;
                    });
                },
                showLabel: function (e, i) {
                    var s = this.errorsFor(e);
                    s.length
                        ? (s
                              .removeClass(this.settings.validClass)
                              .addClass(this.settings.errorClass),
                          s.html(i))
                        : ((s = t("<" + this.settings.errorElement + ">")
                              .attr("for", this.idOrName(e))
                              .addClass(this.settings.errorClass)
                              .html(i || "")),
                          this.settings.wrapper &&
                              (s = s
                                  .hide()
                                  .show()
                                  .wrap("<" + this.settings.wrapper + "/>")
                                  .parent()),
                          this.labelContainer.append(s).length ||
                              (this.settings.errorPlacement
                                  ? this.settings.errorPlacement(s, t(e))
                                  : s.insertAfter(e))),
                        !i &&
                            this.settings.success &&
                            (s.text(""),
                            "string" == typeof this.settings.success
                                ? s.addClass(this.settings.success)
                                : this.settings.success(s, e)),
                        (this.toShow = this.toShow.add(s));
                },
                errorsFor: function (e) {
                    var i = this.idOrName(e);
                    return this.errors().filter(function () {
                        return t(this).attr("for") === i;
                    });
                },
                idOrName: function (t) {
                    return (
                        this.groups[t.name] ||
                        (this.checkable(t) ? t.name : t.id || t.name)
                    );
                },
                validationTargetFor: function (t) {
                    return (
                        this.checkable(t) &&
                            (t = this.findByName(t.name).not(
                                this.settings.ignore
                            )[0]),
                        t
                    );
                },
                checkable: function (t) {
                    return /radio|checkbox/i.test(t.type);
                },
                findByName: function (e) {
                    return t(this.currentForm).find("[name='" + e + "']");
                },
                getLength: function (e, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", i).length;
                        case "input":
                            if (this.checkable(i))
                                return this.findByName(i.name).filter(
                                    ":checked"
                                ).length;
                    }
                    return e.length;
                },
                depend: function (t, e) {
                    return this.dependTypes[typeof t]
                        ? this.dependTypes[typeof t](t, e)
                        : !0;
                },
                dependTypes: {
                    boolean: function (t) {
                        return t;
                    },
                    string: function (e, i) {
                        return !!t(e, i.form).length;
                    },
                    function: function (t, e) {
                        return t(e);
                    },
                },
                optional: function (e) {
                    var i = this.elementValue(e);
                    return (
                        !t.validator.methods.required.call(this, i, e) &&
                        "dependency-mismatch"
                    );
                },
                startRequest: function (t) {
                    this.pending[t.name] ||
                        (this.pendingRequest++, (this.pending[t.name] = !0));
                },
                stopRequest: function (e, i) {
                    this.pendingRequest--,
                        0 > this.pendingRequest && (this.pendingRequest = 0),
                        delete this.pending[e.name],
                        i &&
                        0 === this.pendingRequest &&
                        this.formSubmitted &&
                        this.form()
                            ? (t(this.currentForm).submit(),
                              (this.formSubmitted = !1))
                            : !i &&
                              0 === this.pendingRequest &&
                              this.formSubmitted &&
                              (t(this.currentForm).triggerHandler(
                                  "invalid-form",
                                  [this]
                              ),
                              (this.formSubmitted = !1));
                },
                previousValue: function (e) {
                    return (
                        t.data(e, "previousValue") ||
                        t.data(e, "previousValue", {
                            old: null,
                            valid: !0,
                            message: this.defaultMessage(e, "remote"),
                        })
                    );
                },
            },
            classRuleSettings: {
                required: { required: !0 },
                email: { email: !0 },
                url: { url: !0 },
                date: { date: !0 },
                dateISO: { dateISO: !0 },
                number: { number: !0 },
                digits: { digits: !0 },
                creditcard: { creditcard: !0 },
            },
            addClassRules: function (e, i) {
                e.constructor === String
                    ? (this.classRuleSettings[e] = i)
                    : t.extend(this.classRuleSettings, e);
            },
            classRules: function (e) {
                var i = {},
                    s = t(e).attr("class");
                return (
                    s &&
                        t.each(s.split(" "), function () {
                            this in t.validator.classRuleSettings &&
                                t.extend(
                                    i,
                                    t.validator.classRuleSettings[this]
                                );
                        }),
                    i
                );
            },
            attributeRules: function (e) {
                var i = {},
                    s = t(e),
                    r = s[0].getAttribute("type");
                for (var n in t.validator.methods) {
                    var a;
                    "required" === n
                        ? ((a = s.get(0).getAttribute(n)),
                          "" === a && (a = !0),
                          (a = !!a))
                        : (a = s.attr(n)),
                        /min|max/.test(n) &&
                            (null === r || /number|range|text/.test(r)) &&
                            (a = Number(a)),
                        a
                            ? (i[n] = a)
                            : r === n && "range" !== r && (i[n] = !0);
                }
                return (
                    i.maxlength &&
                        /-1|2147483647|524288/.test(i.maxlength) &&
                        delete i.maxlength,
                    i
                );
            },
            dataRules: function (e) {
                var i,
                    s,
                    r = {},
                    n = t(e);
                for (i in t.validator.methods)
                    (s = n.data("rule-" + i.toLowerCase())),
                        void 0 !== s && (r[i] = s);
                return r;
            },
            staticRules: function (e) {
                var i = {},
                    s = t.data(e.form, "validator");
                return (
                    s.settings.rules &&
                        (i =
                            t.validator.normalizeRule(
                                s.settings.rules[e.name]
                            ) || {}),
                    i
                );
            },
            normalizeRules: function (e, i) {
                return (
                    t.each(e, function (s, r) {
                        if (r === !1) return delete e[s], void 0;
                        if (r.param || r.depends) {
                            var n = !0;
                            switch (typeof r.depends) {
                                case "string":
                                    n = !!t(r.depends, i.form).length;
                                    break;
                                case "function":
                                    n = r.depends.call(i, i);
                            }
                            n
                                ? (e[s] = void 0 !== r.param ? r.param : !0)
                                : delete e[s];
                        }
                    }),
                    t.each(e, function (s, r) {
                        e[s] = t.isFunction(r) ? r(i) : r;
                    }),
                    t.each(["minlength", "maxlength"], function () {
                        e[this] && (e[this] = Number(e[this]));
                    }),
                    t.each(["rangelength", "range"], function () {
                        var i;
                        e[this] &&
                            (t.isArray(e[this])
                                ? (e[this] = [
                                      Number(e[this][0]),
                                      Number(e[this][1]),
                                  ])
                                : "string" == typeof e[this] &&
                                  ((i = e[this].split(/[\s,]+/)),
                                  (e[this] = [Number(i[0]), Number(i[1])])));
                    }),
                    t.validator.autoCreateRanges &&
                        (e.min &&
                            e.max &&
                            ((e.range = [e.min, e.max]),
                            delete e.min,
                            delete e.max),
                        e.minlength &&
                            e.maxlength &&
                            ((e.rangelength = [e.minlength, e.maxlength]),
                            delete e.minlength,
                            delete e.maxlength)),
                    e
                );
            },
            normalizeRule: function (e) {
                if ("string" == typeof e) {
                    var i = {};
                    t.each(e.split(/\s/), function () {
                        i[this] = !0;
                    }),
                        (e = i);
                }
                return e;
            },
            addMethod: function (e, i, s) {
                (t.validator.methods[e] = i),
                    (t.validator.messages[e] =
                        void 0 !== s ? s : t.validator.messages[e]),
                    3 > i.length &&
                        t.validator.addClassRules(
                            e,
                            t.validator.normalizeRule(e)
                        );
            },
            methods: {
                required: function (e, i, s) {
                    if (!this.depend(s, i)) return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var r = t(i).val();
                        return r && r.length > 0;
                    }
                    return this.checkable(i)
                        ? this.getLength(e, i) > 0
                        : t.trim(e).length > 0;
                },
                email: function (t, e) {
                    return (
                        this.optional(e) ||
                        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
                            t
                        )
                    );
                },
                url: function (t, e) {
                    return (
                        this.optional(e) ||
                        /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
                            t
                        )
                    );
                },
                date: function (t, e) {
                    return (
                        this.optional(e) ||
                        !/Invalid|NaN/.test("" + new Date(t))
                    );
                },
                dateISO: function (t, e) {
                    return (
                        this.optional(e) ||
                        /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
                    );
                },
                number: function (t, e) {
                    return (
                        this.optional(e) ||
                        /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                    );
                },
                digits: function (t, e) {
                    return this.optional(e) || /^\d+$/.test(t);
                },
                creditcard: function (t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(t)) return !1;
                    var i = 0,
                        s = 0,
                        r = !1;
                    t = t.replace(/\D/g, "");
                    for (var n = t.length - 1; n >= 0; n--) {
                        var a = t.charAt(n);
                        (s = parseInt(a, 10)),
                            r && (s *= 2) > 9 && (s -= 9),
                            (i += s),
                            (r = !r);
                    }
                    return 0 === i % 10;
                },
                minlength: function (e, i, s) {
                    var r = t.isArray(e)
                        ? e.length
                        : this.getLength(t.trim(e), i);
                    return this.optional(i) || r >= s;
                },
                maxlength: function (e, i, s) {
                    var r = t.isArray(e)
                        ? e.length
                        : this.getLength(t.trim(e), i);
                    return this.optional(i) || s >= r;
                },
                rangelength: function (e, i, s) {
                    var r = t.isArray(e)
                        ? e.length
                        : this.getLength(t.trim(e), i);
                    return this.optional(i) || (r >= s[0] && s[1] >= r);
                },
                min: function (t, e, i) {
                    return this.optional(e) || t >= i;
                },
                max: function (t, e, i) {
                    return this.optional(e) || i >= t;
                },
                range: function (t, e, i) {
                    return this.optional(e) || (t >= i[0] && i[1] >= t);
                },
                equalTo: function (e, i, s) {
                    var r = t(s);
                    return (
                        this.settings.onfocusout &&
                            r
                                .unbind(".validate-equalTo")
                                .bind("blur.validate-equalTo", function () {
                                    t(i).valid();
                                }),
                        e === r.val()
                    );
                },
                remote: function (e, i, s) {
                    if (this.optional(i)) return "dependency-mismatch";
                    var r = this.previousValue(i);
                    if (
                        (this.settings.messages[i.name] ||
                            (this.settings.messages[i.name] = {}),
                        (r.originalMessage =
                            this.settings.messages[i.name].remote),
                        (this.settings.messages[i.name].remote = r.message),
                        (s = ("string" == typeof s && { url: s }) || s),
                        r.old === e)
                    )
                        return r.valid;
                    r.old = e;
                    var n = this;
                    this.startRequest(i);
                    var a = {};
                    return (
                        (a[i.name] = e),
                        t.ajax(
                            t.extend(
                                !0,
                                {
                                    url: s,
                                    mode: "abort",
                                    port: "validate" + i.name,
                                    dataType: "json",
                                    data: a,
                                    success: function (s) {
                                        n.settings.messages[i.name].remote =
                                            r.originalMessage;
                                        var a = s === !0 || "true" === s;
                                        if (a) {
                                            var u = n.formSubmitted;
                                            n.prepareElement(i),
                                                (n.formSubmitted = u),
                                                n.successList.push(i),
                                                delete n.invalid[i.name],
                                                n.showErrors();
                                        } else {
                                            var o = {},
                                                l =
                                                    s ||
                                                    n.defaultMessage(
                                                        i,
                                                        "remote"
                                                    );
                                            (o[i.name] = r.message =
                                                t.isFunction(l) ? l(e) : l),
                                                (n.invalid[i.name] = !0),
                                                n.showErrors(o);
                                        }
                                        (r.valid = a), n.stopRequest(i, a);
                                    },
                                },
                                s
                            )
                        ),
                        "pending"
                    );
                },
            },
        }),
        (t.format = t.validator.format);
})(jQuery),
    (function (t) {
        var e = {};
        if (t.ajaxPrefilter)
            t.ajaxPrefilter(function (t, i, s) {
                var r = t.port;
                "abort" === t.mode && (e[r] && e[r].abort(), (e[r] = s));
            });
        else {
            var i = t.ajax;
            t.ajax = function (s) {
                var r = ("mode" in s ? s : t.ajaxSettings).mode,
                    n = ("port" in s ? s : t.ajaxSettings).port;
                return "abort" === r
                    ? (e[n] && e[n].abort(),
                      (e[n] = i.apply(this, arguments)),
                      e[n])
                    : i.apply(this, arguments);
            };
        }
    })(jQuery),
    (function (t) {
        t.extend(t.fn, {
            validateDelegate: function (e, i, s) {
                return this.bind(i, function (i) {
                    var r = t(i.target);
                    return r.is(e) ? s.apply(r, arguments) : void 0;
                });
            },
        });
    })(jQuery);
/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * NUGET: END LICENSE TEXT */
/*
 ** Unobtrusive validation support library for jQuery and jQuery Validate
 ** Copyright (C) Microsoft Corporation. All rights reserved.
 */
(function (a) {
    var d = a.validator,
        b,
        e = "unobtrusiveValidation";
    function c(a, b, c) {
        a.rules[b] = c;
        if (a.message) a.messages[b] = a.message;
    }
    function j(a) {
        return a.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g);
    }
    function f(a) {
        return a.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1");
    }
    function h(a) {
        return a.substr(0, a.lastIndexOf(".") + 1);
    }
    function g(a, b) {
        if (a.indexOf("*.") === 0) a = a.replace("*.", b);
        return a;
    }
    function m(c, e) {
        var b = a(this).find("[data-valmsg-for='" + f(e[0].name) + "']"),
            d = b.attr("data-valmsg-replace"),
            g = d ? a.parseJSON(d) !== false : null;
        b.removeClass("field-validation-valid").addClass(
            "field-validation-error"
        );
        c.data("unobtrusiveContainer", b);
        if (g) {
            b.empty();
            c.removeClass("input-validation-error").appendTo(b);
        } else c.hide();
    }
    function l(e, d) {
        var c = a(this).find("[data-valmsg-summary=true]"),
            b = c.find("ul");
        if (b && b.length && d.errorList.length) {
            b.empty();
            c.addClass("validation-summary-errors").removeClass(
                "validation-summary-valid"
            );
            a.each(d.errorList, function () {
                a("<li />").html(this.message).appendTo(b);
            });
        }
    }
    function k(d) {
        var b = d.data("unobtrusiveContainer"),
            c = b.attr("data-valmsg-replace"),
            e = c ? a.parseJSON(c) : null;
        if (b) {
            b.addClass("field-validation-valid").removeClass(
                "field-validation-error"
            );
            d.removeData("unobtrusiveContainer");
            e && b.empty();
        }
    }
    function n() {
        var b = a(this),
            c = "__jquery_unobtrusive_validation_form_reset";
        if (b.data(c)) return;
        b.data(c, true);
        try {
            b.data("validator").resetForm();
        } finally {
            b.removeData(c);
        }
        b.find(".validation-summary-errors")
            .addClass("validation-summary-valid")
            .removeClass("validation-summary-errors");
        b.find(".field-validation-error")
            .addClass("field-validation-valid")
            .removeClass("field-validation-error")
            .removeData("unobtrusiveContainer")
            .find(">*")
            .removeData("unobtrusiveContainer");
    }
    function i(b) {
        var c = a(b),
            f = c.data(e),
            i = a.proxy(n, b),
            g = d.unobtrusive.options || {},
            h = function (e, d) {
                var c = g[e];
                c && a.isFunction(c) && c.apply(b, d);
            };
        if (!f) {
            f = {
                options: {
                    errorClass: g.errorClass || "input-validation-error",
                    errorElement: g.errorElement || "span",
                    errorPlacement: function () {
                        m.apply(b, arguments);
                        h("errorPlacement", arguments);
                    },
                    invalidHandler: function () {
                        l.apply(b, arguments);
                        h("invalidHandler", arguments);
                    },
                    messages: {},
                    rules: {},
                    success: function () {
                        k.apply(b, arguments);
                        h("success", arguments);
                    },
                },
                attachValidation: function () {
                    c.off("reset." + e, i)
                        .on("reset." + e, i)
                        .validate(this.options);
                },
                validate: function () {
                    c.validate();
                    return c.valid();
                },
            };
            c.data(e, f);
        }
        return f;
    }
    d.unobtrusive = {
        adapters: [],
        parseElement: function (b, h) {
            var d = a(b),
                f = d.parents("form")[0],
                c,
                e,
                g;
            if (!f) return;
            c = i(f);
            c.options.rules[b.name] = e = {};
            c.options.messages[b.name] = g = {};
            a.each(this.adapters, function () {
                var c = "data-val-" + this.name,
                    i = d.attr(c),
                    h = {};
                if (i !== undefined) {
                    c += "-";
                    a.each(this.params, function () {
                        h[this] = d.attr(c + this);
                    });
                    this.adapt({
                        element: b,
                        form: f,
                        message: i,
                        params: h,
                        rules: e,
                        messages: g,
                    });
                }
            });
            a.extend(e, { __dummy__: true });
            !h && c.attachValidation();
        },
        parse: function (c) {
            var b = a(c),
                e = b
                    .parents()
                    .addBack()
                    .filter("form")
                    .add(b.find("form"))
                    .has("[data-val=true]");
            b.find("[data-val=true]").each(function () {
                d.unobtrusive.parseElement(this, true);
            });
            e.each(function () {
                var a = i(this);
                a && a.attachValidation();
            });
        },
    };
    b = d.unobtrusive.adapters;
    b.add = function (c, a, b) {
        if (!b) {
            b = a;
            a = [];
        }
        this.push({ name: c, params: a, adapt: b });
        return this;
    };
    b.addBool = function (a, b) {
        return this.add(a, function (d) {
            c(d, b || a, true);
        });
    };
    b.addMinMax = function (e, g, f, a, d, b) {
        return this.add(e, [d || "min", b || "max"], function (b) {
            var e = b.params.min,
                d = b.params.max;
            if (e && d) c(b, a, [e, d]);
            else if (e) c(b, g, e);
            else d && c(b, f, d);
        });
    };
    b.addSingleVal = function (a, b, d) {
        return this.add(a, [b || "val"], function (e) {
            c(e, d || a, e.params[b]);
        });
    };
    d.addMethod("__dummy__", function () {
        return true;
    });
    d.addMethod("regex", function (b, c, d) {
        var a;
        if (this.optional(c)) return true;
        a = new RegExp(d).exec(b);
        return a && a.index === 0 && a[0].length === b.length;
    });
    d.addMethod("nonalphamin", function (c, d, b) {
        var a;
        if (b) {
            a = c.match(/\W/g);
            a = a && a.length >= b;
        }
        return a;
    });
    if (d.methods.extension) {
        b.addSingleVal("accept", "mimtype");
        b.addSingleVal("extension", "extension");
    } else b.addSingleVal("extension", "extension", "accept");
    b.addSingleVal("regex", "pattern");
    b.addBool("creditcard")
        .addBool("date")
        .addBool("digits")
        .addBool("email")
        .addBool("number")
        .addBool("url");
    b.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax(
        "range",
        "min",
        "max",
        "range"
    );
    b.addMinMax("minlength", "minlength").addMinMax(
        "maxlength",
        "minlength",
        "maxlength"
    );
    b.add("equalto", ["other"], function (b) {
        var i = h(b.element.name),
            j = b.params.other,
            d = g(j, i),
            e = a(b.form)
                .find(":input")
                .filter("[name='" + f(d) + "']")[0];
        c(b, "equalTo", e);
    });
    b.add("required", function (a) {
        (a.element.tagName.toUpperCase() !== "INPUT" ||
            a.element.type.toUpperCase() !== "CHECKBOX") &&
            c(a, "required", true);
    });
    b.add("remote", ["url", "type", "additionalfields"], function (b) {
        var d = { url: b.params.url, type: b.params.type || "GET", data: {} },
            e = h(b.element.name);
        a.each(j(b.params.additionalfields || b.element.name), function (i, h) {
            var c = g(h, e);
            d.data[c] = function () {
                var d = a(b.form)
                    .find(":input")
                    .filter("[name='" + f(c) + "']");
                return d.is(":checkbox")
                    ? d.filter(":checked").val() ||
                          d.filter(":hidden").val() ||
                          ""
                    : d.is(":radio")
                    ? d.filter(":checked").val() || ""
                    : d.val();
            };
        });
        c(b, "remote", d);
    });
    b.add("password", ["min", "nonalphamin", "regex"], function (a) {
        a.params.min && c(a, "minlength", a.params.min);
        a.params.nonalphamin && c(a, "nonalphamin", a.params.nonalphamin);
        a.params.regex && c(a, "regex", a.params.regex);
    });
    a(function () {
        d.unobtrusive.parse(document);
    });
})(jQuery);
/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * NUGET: END LICENSE TEXT */

/**
 * bootstrap.js v3.0.0 by @fat and @mdo
 * Copyright 2013 Twitter Inc.
 * http://www.apache.org/licenses/LICENSE-2.0
 */
if (!jQuery) throw new Error("Bootstrap requires jQuery");
+(function (a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend",
            };
        for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
    }
    (a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;
        a(this).one(a.support.transition.end, function () {
            c = !0;
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end);
        };
        return setTimeout(e, b), this;
    }),
        a(function () {
            a.support.transition = b();
        });
})(window.jQuery),
    +(function (a) {
        "use strict";
        var b = '[data-dismiss="alert"]',
            c = function (c) {
                a(c).on("click", b, this.close);
            };
        c.prototype.close = function (b) {
            function c() {
                f.trigger("closed.bs.alert").remove();
            }
            var d = a(this),
                e = d.attr("data-target");
            e ||
                ((e = d.attr("href")),
                (e = e && e.replace(/.*(?=#[^\s]*$)/, "")));
            var f = a(e);
            b && b.preventDefault(),
                f.length || (f = d.hasClass("alert") ? d : d.parent()),
                f.trigger((b = a.Event("close.bs.alert"))),
                b.isDefaultPrevented() ||
                    (f.removeClass("in"),
                    a.support.transition && f.hasClass("fade")
                        ? f
                              .one(a.support.transition.end, c)
                              .emulateTransitionEnd(150)
                        : c());
        };
        var d = a.fn.alert;
        (a.fn.alert = function (b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.alert");
                e || d.data("bs.alert", (e = new c(this))),
                    "string" == typeof b && e[b].call(d);
            });
        }),
            (a.fn.alert.Constructor = c),
            (a.fn.alert.noConflict = function () {
                return (a.fn.alert = d), this;
            }),
            a(document).on("click.bs.alert.data-api", b, c.prototype.close);
    })(window.jQuery),
    +(function (a) {
        "use strict";
        var b = function (c, d) {
            (this.$element = a(c)),
                (this.options = a.extend({}, b.DEFAULTS, d));
        };
        (b.DEFAULTS = { loadingText: "loading..." }),
            (b.prototype.setState = function (a) {
                var b = "disabled",
                    c = this.$element,
                    d = c.is("input") ? "val" : "html",
                    e = c.data();
                (a += "Text"),
                    e.resetText || c.data("resetText", c[d]()),
                    c[d](e[a] || this.options[a]),
                    setTimeout(function () {
                        "loadingText" == a
                            ? c.addClass(b).attr(b, b)
                            : c.removeClass(b).removeAttr(b);
                    }, 0);
            }),
            (b.prototype.toggle = function () {
                var a = this.$element.closest('[data-toggle="buttons"]');
                if (a.length) {
                    var b = this.$element
                        .find("input")
                        .prop("checked", !this.$element.hasClass("active"))
                        .trigger("change");
                    "radio" === b.prop("type") &&
                        a.find(".active").removeClass("active");
                }
                this.$element.toggleClass("active");
            });
        var c = a.fn.button;
        (a.fn.button = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.button"),
                    f = "object" == typeof c && c;
                e || d.data("bs.button", (e = new b(this, f))),
                    "toggle" == c ? e.toggle() : c && e.setState(c);
            });
        }),
            (a.fn.button.Constructor = b),
            (a.fn.button.noConflict = function () {
                return (a.fn.button = c), this;
            }),
            a(document).on(
                "click.bs.button.data-api",
                "[data-toggle^=button]",
                function (b) {
                    var c = a(b.target);
                    c.hasClass("btn") || (c = c.closest(".btn")),
                        c.button("toggle"),
                        b.preventDefault();
                }
            );
    })(window.jQuery),
    +(function (a) {
        "use strict";
        var b = function (b, c) {
            (this.$element = a(b)),
                (this.$indicators = this.$element.find(".carousel-indicators")),
                (this.options = c),
                (this.paused =
                    this.sliding =
                    this.interval =
                    this.$active =
                    this.$items =
                        null),
                "hover" == this.options.pause &&
                    this.$element
                        .on("mouseenter", a.proxy(this.pause, this))
                        .on("mouseleave", a.proxy(this.cycle, this));
        };
        (b.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }),
            (b.prototype.cycle = function (b) {
                return (
                    b || (this.paused = !1),
                    this.interval && clearInterval(this.interval),
                    this.options.interval &&
                        !this.paused &&
                        (this.interval = setInterval(
                            a.proxy(this.next, this),
                            this.options.interval
                        )),
                    this
                );
            }),
            (b.prototype.getActiveIndex = function () {
                return (
                    (this.$active = this.$element.find(".item.active")),
                    (this.$items = this.$active.parent().children()),
                    this.$items.index(this.$active)
                );
            }),
            (b.prototype.to = function (b) {
                var c = this,
                    d = this.getActiveIndex();
                return b > this.$items.length - 1 || 0 > b
                    ? void 0
                    : this.sliding
                    ? this.$element.one("slid", function () {
                          c.to(b);
                      })
                    : d == b
                    ? this.pause().cycle()
                    : this.slide(b > d ? "next" : "prev", a(this.$items[b]));
            }),
            (b.prototype.pause = function (b) {
                return (
                    b || (this.paused = !0),
                    this.$element.find(".next, .prev").length &&
                        a.support.transition.end &&
                        (this.$element.trigger(a.support.transition.end),
                        this.cycle(!0)),
                    (this.interval = clearInterval(this.interval)),
                    this
                );
            }),
            (b.prototype.next = function () {
                return this.sliding ? void 0 : this.slide("next");
            }),
            (b.prototype.prev = function () {
                return this.sliding ? void 0 : this.slide("prev");
            }),
            (b.prototype.slide = function (b, c) {
                var d = this.$element.find(".item.active"),
                    e = c || d[b](),
                    f = this.interval,
                    g = "next" == b ? "left" : "right",
                    h = "next" == b ? "first" : "last",
                    i = this;
                if (!e.length) {
                    if (!this.options.wrap) return;
                    e = this.$element.find(".item")[h]();
                }
                (this.sliding = !0), f && this.pause();
                var j = a.Event("slide.bs.carousel", {
                    relatedTarget: e[0],
                    direction: g,
                });
                if (!e.hasClass("active")) {
                    if (
                        (this.$indicators.length &&
                            (this.$indicators
                                .find(".active")
                                .removeClass("active"),
                            this.$element.one("slid", function () {
                                var b = a(
                                    i.$indicators.children()[i.getActiveIndex()]
                                );
                                b && b.addClass("active");
                            })),
                        a.support.transition && this.$element.hasClass("slide"))
                    ) {
                        if ((this.$element.trigger(j), j.isDefaultPrevented()))
                            return;
                        e.addClass(b),
                            e[0].offsetWidth,
                            d.addClass(g),
                            e.addClass(g),
                            d
                                .one(a.support.transition.end, function () {
                                    e
                                        .removeClass([b, g].join(" "))
                                        .addClass("active"),
                                        d.removeClass(["active", g].join(" ")),
                                        (i.sliding = !1),
                                        setTimeout(function () {
                                            i.$element.trigger("slid");
                                        }, 0);
                                })
                                .emulateTransitionEnd(600);
                    } else {
                        if ((this.$element.trigger(j), j.isDefaultPrevented()))
                            return;
                        d.removeClass("active"),
                            e.addClass("active"),
                            (this.sliding = !1),
                            this.$element.trigger("slid");
                    }
                    return f && this.cycle(), this;
                }
            });
        var c = a.fn.carousel;
        (a.fn.carousel = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.carousel"),
                    f = a.extend(
                        {},
                        b.DEFAULTS,
                        d.data(),
                        "object" == typeof c && c
                    ),
                    g = "string" == typeof c ? c : f.slide;
                e || d.data("bs.carousel", (e = new b(this, f))),
                    "number" == typeof c
                        ? e.to(c)
                        : g
                        ? e[g]()
                        : f.interval && e.pause().cycle();
            });
        }),
            (a.fn.carousel.Constructor = b),
            (a.fn.carousel.noConflict = function () {
                return (a.fn.carousel = c), this;
            }),
            a(document).on(
                "click.bs.carousel.data-api",
                "[data-slide], [data-slide-to]",
                function (b) {
                    var c,
                        d = a(this),
                        e = a(
                            d.attr("data-target") ||
                                ((c = d.attr("href")) &&
                                    c.replace(/.*(?=#[^\s]+$)/, ""))
                        ),
                        f = a.extend({}, e.data(), d.data()),
                        g = d.attr("data-slide-to");
                    g && (f.interval = !1),
                        e.carousel(f),
                        (g = d.attr("data-slide-to")) &&
                            e.data("bs.carousel").to(g),
                        b.preventDefault();
                }
            ),
            a(window).on("load", function () {
                a('[data-ride="carousel"]').each(function () {
                    var b = a(this);
                    b.carousel(b.data());
                });
            });
    })(window.jQuery),
    +(function (a) {
        "use strict";
        var b = function (c, d) {
            (this.$element = a(c)),
                (this.options = a.extend({}, b.DEFAULTS, d)),
                (this.transitioning = null),
                this.options.parent && (this.$parent = a(this.options.parent)),
                this.options.toggle && this.toggle();
        };
        (b.DEFAULTS = { toggle: !0 }),
            (b.prototype.dimension = function () {
                var a = this.$element.hasClass("width");
                return a ? "width" : "height";
            }),
            (b.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var b = a.Event("show.bs.collapse");
                    if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
                        var c =
                            this.$parent && this.$parent.find("> .panel > .in");
                        if (c && c.length) {
                            var d = c.data("bs.collapse");
                            if (d && d.transitioning) return;
                            c.collapse("hide"),
                                d || c.data("bs.collapse", null);
                        }
                        var e = this.dimension();
                        this.$element
                            .removeClass("collapse")
                            .addClass("collapsing")
                            [e](0),
                            (this.transitioning = 1);
                        var f = function () {
                            this.$element
                                .removeClass("collapsing")
                                .addClass("in")
                                [e]("auto"),
                                (this.transitioning = 0),
                                this.$element.trigger("shown.bs.collapse");
                        };
                        if (!a.support.transition) return f.call(this);
                        var g = a.camelCase(["scroll", e].join("-"));
                        this.$element
                            .one(a.support.transition.end, a.proxy(f, this))
                            .emulateTransitionEnd(350)
                            [e](this.$element[0][g]);
                    }
                }
            }),
            (b.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var b = a.Event("hide.bs.collapse");
                    if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
                        var c = this.dimension();
                        this.$element[c](this.$element[c]())[0].offsetHeight,
                            this.$element
                                .addClass("collapsing")
                                .removeClass("collapse")
                                .removeClass("in"),
                            (this.transitioning = 1);
                        var d = function () {
                            (this.transitioning = 0),
                                this.$element
                                    .trigger("hidden.bs.collapse")
                                    .removeClass("collapsing")
                                    .addClass("collapse");
                        };
                        return a.support.transition
                            ? (this.$element[c](0)
                                  .one(
                                      a.support.transition.end,
                                      a.proxy(d, this)
                                  )
                                  .emulateTransitionEnd(350),
                              void 0)
                            : d.call(this);
                    }
                }
            }),
            (b.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]();
            });
        var c = a.fn.collapse;
        (a.fn.collapse = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.collapse"),
                    f = a.extend(
                        {},
                        b.DEFAULTS,
                        d.data(),
                        "object" == typeof c && c
                    );
                e || d.data("bs.collapse", (e = new b(this, f))),
                    "string" == typeof c && e[c]();
            });
        }),
            (a.fn.collapse.Constructor = b),
            (a.fn.collapse.noConflict = function () {
                return (a.fn.collapse = c), this;
            }),
            a(document).on(
                "click.bs.collapse.data-api",
                "[data-toggle=collapse]",
                function (b) {
                    var c,
                        d = a(this),
                        e =
                            d.attr("data-target") ||
                            b.preventDefault() ||
                            ((c = d.attr("href")) &&
                                c.replace(/.*(?=#[^\s]+$)/, "")),
                        f = a(e),
                        g = f.data("bs.collapse"),
                        h = g ? "toggle" : d.data(),
                        i = d.attr("data-parent"),
                        j = i && a(i);
                    (g && g.transitioning) ||
                        (j &&
                            j
                                .find(
                                    '[data-toggle=collapse][data-parent="' +
                                        i +
                                        '"]'
                                )
                                .not(d)
                                .addClass("collapsed"),
                        d[f.hasClass("in") ? "addClass" : "removeClass"](
                            "collapsed"
                        )),
                        f.collapse(h);
                }
            );
    })(window.jQuery),
    +(function (a) {
        "use strict";
        function b() {
            a(d).remove(),
                a(e).each(function (b) {
                    var d = c(a(this));
                    d.hasClass("open") &&
                        (d.trigger((b = a.Event("hide.bs.dropdown"))),
                        b.isDefaultPrevented() ||
                            d
                                .removeClass("open")
                                .trigger("hidden.bs.dropdown"));
                });
        }
        function c(b) {
            var c = b.attr("data-target");
            c ||
                ((c = b.attr("href")),
                (c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
            var d = c && a(c);
            return d && d.length ? d : b.parent();
        }
        var d = ".dropdown-backdrop",
            e = "[data-toggle=dropdown]",
            f = function (b) {
                a(b).on("click.bs.dropdown", this.toggle);
            };
        (f.prototype.toggle = function (d) {
            var e = a(this);
            if (!e.is(".disabled, :disabled")) {
                var f = c(e),
                    g = f.hasClass("open");
                if ((b(), !g)) {
                    if (
                        ("ontouchstart" in document.documentElement &&
                            !f.closest(".navbar-nav").length &&
                            a('<div class="dropdown-backdrop"/>')
                                .insertAfter(a(this))
                                .on("click", b),
                        f.trigger((d = a.Event("show.bs.dropdown"))),
                        d.isDefaultPrevented())
                    )
                        return;
                    f.toggleClass("open").trigger("shown.bs.dropdown"),
                        e.focus();
                }
                return !1;
            }
        }),
            (f.prototype.keydown = function (b) {
                if (/(38|40|27)/.test(b.keyCode)) {
                    var d = a(this);
                    if (
                        (b.preventDefault(),
                        b.stopPropagation(),
                        !d.is(".disabled, :disabled"))
                    ) {
                        var f = c(d),
                            g = f.hasClass("open");
                        if (!g || (g && 27 == b.keyCode))
                            return (
                                27 == b.which && f.find(e).focus(), d.click()
                            );
                        var h = a("[role=menu] li:not(.divider):visible a", f);
                        if (h.length) {
                            var i = h.index(h.filter(":focus"));
                            38 == b.keyCode && i > 0 && i--,
                                40 == b.keyCode && i < h.length - 1 && i++,
                                ~i || (i = 0),
                                h.eq(i).focus();
                        }
                    }
                }
            });
        var g = a.fn.dropdown;
        (a.fn.dropdown = function (b) {
            return this.each(function () {
                var c = a(this),
                    d = c.data("dropdown");
                d || c.data("dropdown", (d = new f(this))),
                    "string" == typeof b && d[b].call(c);
            });
        }),
            (a.fn.dropdown.Constructor = f),
            (a.fn.dropdown.noConflict = function () {
                return (a.fn.dropdown = g), this;
            }),
            a(document)
                .on("click.bs.dropdown.data-api", b)
                .on(
                    "click.bs.dropdown.data-api",
                    ".dropdown form",
                    function (a) {
                        a.stopPropagation();
                    }
                )
                .on("click.bs.dropdown.data-api", e, f.prototype.toggle)
                .on(
                    "keydown.bs.dropdown.data-api",
                    e + ", [role=menu]",
                    f.prototype.keydown
                );
    })(window.jQuery),
    +(function (a) {
        "use strict";
        var b = function (b, c) {
            (this.options = c),
                (this.$element = a(b)),
                (this.$backdrop = this.isShown = null),
                this.options.remote && this.$element.load(this.options.remote);
        };
        (b.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
            (b.prototype.toggle = function (a) {
                return this[this.isShown ? "hide" : "show"](a);
            }),
            (b.prototype.show = function (b) {
                var c = this,
                    d = a.Event("show.bs.modal", { relatedTarget: b });
                this.$element.trigger(d),
                    this.isShown ||
                        d.isDefaultPrevented() ||
                        ((this.isShown = !0),
                        this.escape(),
                        this.$element.on(
                            "click.dismiss.modal",
                            '[data-dismiss="modal"]',
                            a.proxy(this.hide, this)
                        ),
                        this.backdrop(function () {
                            var d =
                                a.support.transition &&
                                c.$element.hasClass("fade");
                            c.$element.parent().length ||
                                c.$element.appendTo(document.body),
                                c.$element.show(),
                                d && c.$element[0].offsetWidth,
                                c.$element
                                    .addClass("in")
                                    .attr("aria-hidden", !1),
                                c.enforceFocus();
                            var e = a.Event("shown.bs.modal", {
                                relatedTarget: b,
                            });
                            d
                                ? c.$element
                                      .find(".modal-dialog")
                                      .one(
                                          a.support.transition.end,
                                          function () {
                                              c.$element.focus().trigger(e);
                                          }
                                      )
                                      .emulateTransitionEnd(300)
                                : c.$element.focus().trigger(e);
                        }));
            }),
            (b.prototype.hide = function (b) {
                b && b.preventDefault(),
                    (b = a.Event("hide.bs.modal")),
                    this.$element.trigger(b),
                    this.isShown &&
                        !b.isDefaultPrevented() &&
                        ((this.isShown = !1),
                        this.escape(),
                        a(document).off("focusin.bs.modal"),
                        this.$element
                            .removeClass("in")
                            .attr("aria-hidden", !0)
                            .off("click.dismiss.modal"),
                        a.support.transition && this.$element.hasClass("fade")
                            ? this.$element
                                  .one(
                                      a.support.transition.end,
                                      a.proxy(this.hideModal, this)
                                  )
                                  .emulateTransitionEnd(300)
                            : this.hideModal());
            }),
            (b.prototype.enforceFocus = function () {
                a(document)
                    .off("focusin.bs.modal")
                    .on(
                        "focusin.bs.modal",
                        a.proxy(function (a) {
                            this.$element[0] === a.target ||
                                this.$element.has(a.target).length ||
                                this.$element.focus();
                        }, this)
                    );
            }),
            (b.prototype.escape = function () {
                this.isShown && this.options.keyboard
                    ? this.$element.on(
                          "keyup.dismiss.bs.modal",
                          a.proxy(function (a) {
                              27 == a.which && this.hide();
                          }, this)
                      )
                    : this.isShown ||
                      this.$element.off("keyup.dismiss.bs.modal");
            }),
            (b.prototype.hideModal = function () {
                var a = this;
                this.$element.hide(),
                    this.backdrop(function () {
                        a.removeBackdrop(),
                            a.$element.trigger("hidden.bs.modal");
                    });
            }),
            (b.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(),
                    (this.$backdrop = null);
            }),
            (b.prototype.backdrop = function (b) {
                var c = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var d = a.support.transition && c;
                    if (
                        ((this.$backdrop = a(
                            '<div class="modal-backdrop ' + c + '" />'
                        ).appendTo(document.body)),
                        this.$element.on(
                            "click.dismiss.modal",
                            a.proxy(function (a) {
                                a.target === a.currentTarget &&
                                    ("static" == this.options.backdrop
                                        ? this.$element[0].focus.call(
                                              this.$element[0]
                                          )
                                        : this.hide.call(this));
                            }, this)
                        ),
                        d && this.$backdrop[0].offsetWidth,
                        this.$backdrop.addClass("in"),
                        !b)
                    )
                        return;
                    d
                        ? this.$backdrop
                              .one(a.support.transition.end, b)
                              .emulateTransitionEnd(150)
                        : b();
                } else
                    !this.isShown && this.$backdrop
                        ? (this.$backdrop.removeClass("in"),
                          a.support.transition && this.$element.hasClass("fade")
                              ? this.$backdrop
                                    .one(a.support.transition.end, b)
                                    .emulateTransitionEnd(150)
                              : b())
                        : b && b();
            });
        var c = a.fn.modal;
        (a.fn.modal = function (c, d) {
            return this.each(function () {
                var e = a(this),
                    f = e.data("bs.modal"),
                    g = a.extend(
                        {},
                        b.DEFAULTS,
                        e.data(),
                        "object" == typeof c && c
                    );
                f || e.data("bs.modal", (f = new b(this, g))),
                    "string" == typeof c ? f[c](d) : g.show && f.show(d);
            });
        }),
            (a.fn.modal.Constructor = b),
            (a.fn.modal.noConflict = function () {
                return (a.fn.modal = c), this;
            }),
            a(document).on(
                "click.bs.modal.data-api",
                '[data-toggle="modal"]',
                function (b) {
                    var c = a(this),
                        d = c.attr("href"),
                        e = a(
                            c.attr("data-target") ||
                                (d && d.replace(/.*(?=#[^\s]+$)/, ""))
                        ),
                        f = e.data("modal")
                            ? "toggle"
                            : a.extend(
                                  { remote: !/#/.test(d) && d },
                                  e.data(),
                                  c.data()
                              );
                    b.preventDefault(),
                        e.modal(f, this).one("hide", function () {
                            c.is(":visible") && c.focus();
                        });
                }
            ),
            a(document)
                .on("show.bs.modal", ".modal", function () {
                    a(document.body).addClass("modal-open");
                })
                .on("hidden.bs.modal", ".modal", function () {
                    a(document.body).removeClass("modal-open");
                });
    })(window.jQuery),
    +(function (a) {
        "use strict";
        var b = function (a, b) {
            (this.type =
                this.options =
                this.enabled =
                this.timeout =
                this.hoverState =
                this.$element =
                    null),
                this.init("tooltip", a, b);
        };
        (b.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template:
                '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
        }),
            (b.prototype.init = function (b, c, d) {
                (this.enabled = !0),
                    (this.type = b),
                    (this.$element = a(c)),
                    (this.options = this.getOptions(d));
                for (
                    var e = this.options.trigger.split(" "), f = e.length;
                    f--;

                ) {
                    var g = e[f];
                    if ("click" == g)
                        this.$element.on(
                            "click." + this.type,
                            this.options.selector,
                            a.proxy(this.toggle, this)
                        );
                    else if ("manual" != g) {
                        var h = "hover" == g ? "mouseenter" : "focus",
                            i = "hover" == g ? "mouseleave" : "blur";
                        this.$element.on(
                            h + "." + this.type,
                            this.options.selector,
                            a.proxy(this.enter, this)
                        ),
                            this.$element.on(
                                i + "." + this.type,
                                this.options.selector,
                                a.proxy(this.leave, this)
                            );
                    }
                }
                this.options.selector
                    ? (this._options = a.extend({}, this.options, {
                          trigger: "manual",
                          selector: "",
                      }))
                    : this.fixTitle();
            }),
            (b.prototype.getDefaults = function () {
                return b.DEFAULTS;
            }),
            (b.prototype.getOptions = function (b) {
                return (
                    (b = a.extend(
                        {},
                        this.getDefaults(),
                        this.$element.data(),
                        b
                    )),
                    b.delay &&
                        "number" == typeof b.delay &&
                        (b.delay = { show: b.delay, hide: b.delay }),
                    b
                );
            }),
            (b.prototype.getDelegateOptions = function () {
                var b = {},
                    c = this.getDefaults();
                return (
                    this._options &&
                        a.each(this._options, function (a, d) {
                            c[a] != d && (b[a] = d);
                        }),
                    b
                );
            }),
            (b.prototype.enter = function (b) {
                var c =
                    b instanceof this.constructor
                        ? b
                        : a(b.currentTarget)
                              [this.type](this.getDelegateOptions())
                              .data("bs." + this.type);
                return (
                    clearTimeout(c.timeout),
                    (c.hoverState = "in"),
                    c.options.delay && c.options.delay.show
                        ? ((c.timeout = setTimeout(function () {
                              "in" == c.hoverState && c.show();
                          }, c.options.delay.show)),
                          void 0)
                        : c.show()
                );
            }),
            (b.prototype.leave = function (b) {
                var c =
                    b instanceof this.constructor
                        ? b
                        : a(b.currentTarget)
                              [this.type](this.getDelegateOptions())
                              .data("bs." + this.type);
                return (
                    clearTimeout(c.timeout),
                    (c.hoverState = "out"),
                    c.options.delay && c.options.delay.hide
                        ? ((c.timeout = setTimeout(function () {
                              "out" == c.hoverState && c.hide();
                          }, c.options.delay.hide)),
                          void 0)
                        : c.hide()
                );
            }),
            (b.prototype.show = function () {
                var b = a.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    if ((this.$element.trigger(b), b.isDefaultPrevented()))
                        return;
                    var c = this.tip();
                    this.setContent(),
                        this.options.animation && c.addClass("fade");
                    var d =
                            "function" == typeof this.options.placement
                                ? this.options.placement.call(
                                      this,
                                      c[0],
                                      this.$element[0]
                                  )
                                : this.options.placement,
                        e = /\s?auto?\s?/i,
                        f = e.test(d);
                    f && (d = d.replace(e, "") || "top"),
                        c
                            .detach()
                            .css({ top: 0, left: 0, display: "block" })
                            .addClass(d),
                        this.options.container
                            ? c.appendTo(this.options.container)
                            : c.insertAfter(this.$element);
                    var g = this.getPosition(),
                        h = c[0].offsetWidth,
                        i = c[0].offsetHeight;
                    if (f) {
                        var j = this.$element.parent(),
                            k = d,
                            l =
                                document.documentElement.scrollTop ||
                                document.body.scrollTop,
                            m =
                                "body" == this.options.container
                                    ? window.innerWidth
                                    : j.outerWidth(),
                            n =
                                "body" == this.options.container
                                    ? window.innerHeight
                                    : j.outerHeight(),
                            o =
                                "body" == this.options.container
                                    ? 0
                                    : j.offset().left;
                        (d =
                            "bottom" == d && g.top + g.height + i - l > n
                                ? "top"
                                : "top" == d && g.top - l - i < 0
                                ? "bottom"
                                : "right" == d && g.right + h > m
                                ? "left"
                                : "left" == d && g.left - h < o
                                ? "right"
                                : d),
                            c.removeClass(k).addClass(d);
                    }
                    var p = this.getCalculatedOffset(d, g, h, i);
                    this.applyPlacement(p, d),
                        this.$element.trigger("shown.bs." + this.type);
                }
            }),
            (b.prototype.applyPlacement = function (a, b) {
                var c,
                    d = this.tip(),
                    e = d[0].offsetWidth,
                    f = d[0].offsetHeight,
                    g = parseInt(d.css("margin-top"), 10),
                    h = parseInt(d.css("margin-left"), 10);
                isNaN(g) && (g = 0),
                    isNaN(h) && (h = 0),
                    (a.top = a.top + g),
                    (a.left = a.left + h),
                    d.offset(a).addClass("in");
                var i = d[0].offsetWidth,
                    j = d[0].offsetHeight;
                if (
                    ("top" == b &&
                        j != f &&
                        ((c = !0), (a.top = a.top + f - j)),
                    /bottom|top/.test(b))
                ) {
                    var k = 0;
                    a.left < 0 &&
                        ((k = -2 * a.left),
                        (a.left = 0),
                        d.offset(a),
                        (i = d[0].offsetWidth),
                        (j = d[0].offsetHeight)),
                        this.replaceArrow(k - e + i, i, "left");
                } else this.replaceArrow(j - f, j, "top");
                c && d.offset(a);
            }),
            (b.prototype.replaceArrow = function (a, b, c) {
                this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
            }),
            (b.prototype.setContent = function () {
                var a = this.tip(),
                    b = this.getTitle();
                a
                    .find(".tooltip-inner")
                    [this.options.html ? "html" : "text"](b),
                    a.removeClass("fade in top bottom left right");
            }),
            (b.prototype.hide = function () {
                function b() {
                    "in" != c.hoverState && d.detach();
                }
                var c = this,
                    d = this.tip(),
                    e = a.Event("hide.bs." + this.type);
                return (
                    this.$element.trigger(e),
                    e.isDefaultPrevented()
                        ? void 0
                        : (d.removeClass("in"),
                          a.support.transition && this.$tip.hasClass("fade")
                              ? d
                                    .one(a.support.transition.end, b)
                                    .emulateTransitionEnd(150)
                              : b(),
                          this.$element.trigger("hidden.bs." + this.type),
                          this)
                );
            }),
            (b.prototype.fixTitle = function () {
                var a = this.$element;
                (a.attr("title") ||
                    "string" != typeof a.attr("data-original-title")) &&
                    a
                        .attr("data-original-title", a.attr("title") || "")
                        .attr("title", "");
            }),
            (b.prototype.hasContent = function () {
                return this.getTitle();
            }),
            (b.prototype.getPosition = function () {
                var b = this.$element[0];
                return a.extend(
                    {},
                    "function" == typeof b.getBoundingClientRect
                        ? b.getBoundingClientRect()
                        : { width: b.offsetWidth, height: b.offsetHeight },
                    this.$element.offset()
                );
            }),
            (b.prototype.getCalculatedOffset = function (a, b, c, d) {
                return "bottom" == a
                    ? {
                          top: b.top + b.height,
                          left: b.left + b.width / 2 - c / 2,
                      }
                    : "top" == a
                    ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
                    : "left" == a
                    ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
                    : {
                          top: b.top + b.height / 2 - d / 2,
                          left: b.left + b.width,
                      };
            }),
            (b.prototype.getTitle = function () {
                var a,
                    b = this.$element,
                    c = this.options;
                return (a =
                    b.attr("data-original-title") ||
                    ("function" == typeof c.title
                        ? c.title.call(b[0])
                        : c.title));
            }),
            (b.prototype.tip = function () {
                return (this.$tip = this.$tip || a(this.options.template));
            }),
            (b.prototype.arrow = function () {
                return (this.$arrow =
                    this.$arrow || this.tip().find(".tooltip-arrow"));
            }),
            (b.prototype.validate = function () {
                this.$element[0].parentNode ||
                    (this.hide(),
                    (this.$element = null),
                    (this.options = null));
            }),
            (b.prototype.enable = function () {
                this.enabled = !0;
            }),
            (b.prototype.disable = function () {
                this.enabled = !1;
            }),
            (b.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled;
            }),
            (b.prototype.toggle = function (b) {
                var c = b
                    ? a(b.currentTarget)
                          [this.type](this.getDelegateOptions())
                          .data("bs." + this.type)
                    : this;
                c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
            }),
            (b.prototype.destroy = function () {
                this.hide()
                    .$element.off("." + this.type)
                    .removeData("bs." + this.type);
            });
        var c = a.fn.tooltip;
        (a.fn.tooltip = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.tooltip"),
                    f = "object" == typeof c && c;
                e || d.data("bs.tooltip", (e = new b(this, f))),
                    "string" == typeof c && e[c]();
            });
        }),
            (a.fn.tooltip.Constructor = b),
            (a.fn.tooltip.noConflict = function () {
                return (a.fn.tooltip = c), this;
            });
    })(window.jQuery),
    +(function (a) {
        "use strict";
        var b = function (a, b) {
            this.init("popover", a, b);
        };
        if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
        (b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template:
                '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
        })),
            (b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
            (b.prototype.constructor = b),
            (b.prototype.getDefaults = function () {
                return b.DEFAULTS;
            }),
            (b.prototype.setContent = function () {
                var a = this.tip(),
                    b = this.getTitle(),
                    c = this.getContent();
                a
                    .find(".popover-title")
                    [this.options.html ? "html" : "text"](b),
                    a
                        .find(".popover-content")
                        [this.options.html ? "html" : "text"](c),
                    a.removeClass("fade top bottom left right in"),
                    a.find(".popover-title").html() ||
                        a.find(".popover-title").hide();
            }),
            (b.prototype.hasContent = function () {
                return this.getTitle() || this.getContent();
            }),
            (b.prototype.getContent = function () {
                var a = this.$element,
                    b = this.options;
                return (
                    a.attr("data-content") ||
                    ("function" == typeof b.content
                        ? b.content.call(a[0])
                        : b.content)
                );
            }),
            (b.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
            }),
            (b.prototype.tip = function () {
                return (
                    this.$tip || (this.$tip = a(this.options.template)),
                    this.$tip
                );
            });
        var c = a.fn.popover;
        (a.fn.popover = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.popover"),
                    f = "object" == typeof c && c;
                e || d.data("bs.popover", (e = new b(this, f))),
                    "string" == typeof c && e[c]();
            });
        }),
            (a.fn.popover.Constructor = b),
            (a.fn.popover.noConflict = function () {
                return (a.fn.popover = c), this;
            });
    })(window.jQuery),
    +(function (a) {
        "use strict";
        function b(c, d) {
            var e,
                f = a.proxy(this.process, this);
            (this.$element = a(c).is("body") ? a(window) : a(c)),
                (this.$body = a("body")),
                (this.$scrollElement = this.$element.on(
                    "scroll.bs.scroll-spy.data-api",
                    f
                )),
                (this.options = a.extend({}, b.DEFAULTS, d)),
                (this.selector =
                    (this.options.target ||
                        ((e = a(c).attr("href")) &&
                            e.replace(/.*(?=#[^\s]+$)/, "")) ||
                        "") + " .nav li > a"),
                (this.offsets = a([])),
                (this.targets = a([])),
                (this.activeTarget = null),
                this.refresh(),
                this.process();
        }
        (b.DEFAULTS = { offset: 10 }),
            (b.prototype.refresh = function () {
                var b = this.$element[0] == window ? "offset" : "position";
                (this.offsets = a([])), (this.targets = a([]));
                var c = this;
                this.$body
                    .find(this.selector)
                    .map(function () {
                        var d = a(this),
                            e = d.data("target") || d.attr("href"),
                            f = /^#\w/.test(e) && a(e);
                        return (
                            (f &&
                                f.length && [
                                    [
                                        f[b]().top +
                                            (!a.isWindow(
                                                c.$scrollElement.get(0)
                                            ) && c.$scrollElement.scrollTop()),
                                        e,
                                    ],
                                ]) ||
                            null
                        );
                    })
                    .sort(function (a, b) {
                        return a[0] - b[0];
                    })
                    .each(function () {
                        c.offsets.push(this[0]), c.targets.push(this[1]);
                    });
            }),
            (b.prototype.process = function () {
                var a,
                    b = this.$scrollElement.scrollTop() + this.options.offset,
                    c =
                        this.$scrollElement[0].scrollHeight ||
                        this.$body[0].scrollHeight,
                    d = c - this.$scrollElement.height(),
                    e = this.offsets,
                    f = this.targets,
                    g = this.activeTarget;
                if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
                for (a = e.length; a--; )
                    g != f[a] &&
                        b >= e[a] &&
                        (!e[a + 1] || b <= e[a + 1]) &&
                        this.activate(f[a]);
            }),
            (b.prototype.activate = function (b) {
                (this.activeTarget = b),
                    a(this.selector).parents(".active").removeClass("active");
                var c =
                        this.selector +
                        '[data-target="' +
                        b +
                        '"],' +
                        this.selector +
                        '[href="' +
                        b +
                        '"]',
                    d = a(c).parents("li").addClass("active");
                d.parent(".dropdown-menu").length &&
                    (d = d.closest("li.dropdown").addClass("active")),
                    d.trigger("activate");
            });
        var c = a.fn.scrollspy;
        (a.fn.scrollspy = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.scrollspy"),
                    f = "object" == typeof c && c;
                e || d.data("bs.scrollspy", (e = new b(this, f))),
                    "string" == typeof c && e[c]();
            });
        }),
            (a.fn.scrollspy.Constructor = b),
            (a.fn.scrollspy.noConflict = function () {
                return (a.fn.scrollspy = c), this;
            }),
            a(window).on("load", function () {
                a('[data-spy="scroll"]').each(function () {
                    var b = a(this);
                    b.scrollspy(b.data());
                });
            });
    })(window.jQuery),
    +(function (a) {
        "use strict";
        var b = function (b) {
            this.element = a(b);
        };
        (b.prototype.show = function () {
            var b = this.element,
                c = b.closest("ul:not(.dropdown-menu)"),
                d = b.attr("data-target");
            if (
                (d ||
                    ((d = b.attr("href")),
                    (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
                !b.parent("li").hasClass("active"))
            ) {
                var e = c.find(".active:last a")[0],
                    f = a.Event("show.bs.tab", { relatedTarget: e });
                if ((b.trigger(f), !f.isDefaultPrevented())) {
                    var g = a(d);
                    this.activate(b.parent("li"), c),
                        this.activate(g, g.parent(), function () {
                            b.trigger({
                                type: "shown.bs.tab",
                                relatedTarget: e,
                            });
                        });
                }
            }
        }),
            (b.prototype.activate = function (b, c, d) {
                function e() {
                    f
                        .removeClass("active")
                        .find("> .dropdown-menu > .active")
                        .removeClass("active"),
                        b.addClass("active"),
                        g
                            ? (b[0].offsetWidth, b.addClass("in"))
                            : b.removeClass("fade"),
                        b.parent(".dropdown-menu") &&
                            b.closest("li.dropdown").addClass("active"),
                        d && d();
                }
                var f = c.find("> .active"),
                    g = d && a.support.transition && f.hasClass("fade");
                g
                    ? f
                          .one(a.support.transition.end, e)
                          .emulateTransitionEnd(150)
                    : e(),
                    f.removeClass("in");
            });
        var c = a.fn.tab;
        (a.fn.tab = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.tab");
                e || d.data("bs.tab", (e = new b(this))),
                    "string" == typeof c && e[c]();
            });
        }),
            (a.fn.tab.Constructor = b),
            (a.fn.tab.noConflict = function () {
                return (a.fn.tab = c), this;
            }),
            a(document).on(
                "click.bs.tab.data-api",
                '[data-toggle="tab"], [data-toggle="pill"]',
                function (b) {
                    b.preventDefault(), a(this).tab("show");
                }
            );
    })(window.jQuery),
    +(function (a) {
        "use strict";
        var b = function (c, d) {
            (this.options = a.extend({}, b.DEFAULTS, d)),
                (this.$window = a(window)
                    .on(
                        "scroll.bs.affix.data-api",
                        a.proxy(this.checkPosition, this)
                    )
                    .on(
                        "click.bs.affix.data-api",
                        a.proxy(this.checkPositionWithEventLoop, this)
                    )),
                (this.$element = a(c)),
                (this.affixed = this.unpin = null),
                this.checkPosition();
        };
        (b.RESET = "affix affix-top affix-bottom"),
            (b.DEFAULTS = { offset: 0 }),
            (b.prototype.checkPositionWithEventLoop = function () {
                setTimeout(a.proxy(this.checkPosition, this), 1);
            }),
            (b.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var c = a(document).height(),
                        d = this.$window.scrollTop(),
                        e = this.$element.offset(),
                        f = this.options.offset,
                        g = f.top,
                        h = f.bottom;
                    "object" != typeof f && (h = g = f),
                        "function" == typeof g && (g = f.top()),
                        "function" == typeof h && (h = f.bottom());
                    var i =
                        null != this.unpin && d + this.unpin <= e.top
                            ? !1
                            : null != h &&
                              e.top + this.$element.height() >= c - h
                            ? "bottom"
                            : null != g && g >= d
                            ? "top"
                            : !1;
                    this.affixed !== i &&
                        (this.unpin && this.$element.css("top", ""),
                        (this.affixed = i),
                        (this.unpin = "bottom" == i ? e.top - d : null),
                        this.$element
                            .removeClass(b.RESET)
                            .addClass("affix" + (i ? "-" + i : "")),
                        "bottom" == i &&
                            this.$element.offset({
                                top:
                                    document.body.offsetHeight -
                                    h -
                                    this.$element.height(),
                            }));
                }
            });
        var c = a.fn.affix;
        (a.fn.affix = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.affix"),
                    f = "object" == typeof c && c;
                e || d.data("bs.affix", (e = new b(this, f))),
                    "string" == typeof c && e[c]();
            });
        }),
            (a.fn.affix.Constructor = b),
            (a.fn.affix.noConflict = function () {
                return (a.fn.affix = c), this;
            }),
            a(window).on("load", function () {
                a('[data-spy="affix"]').each(function () {
                    var b = a(this),
                        c = b.data();
                    (c.offset = c.offset || {}),
                        c.offsetBottom && (c.offset.bottom = c.offsetBottom),
                        c.offsetTop && (c.offset.top = c.offsetTop),
                        b.affix(c);
                });
            });
    })(window.jQuery);
//! moment.js
//! version : 2.16.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!(function (a, b) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = b())
        : "function" == typeof define && define.amd
        ? define(b)
        : (a.moment = b());
})(this, function () {
    "use strict";
    function a() {
        return od.apply(null, arguments);
    }
    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function b(a) {
        od = a;
    }
    function c(a) {
        return (
            a instanceof Array ||
            "[object Array]" === Object.prototype.toString.call(a)
        );
    }
    function d(a) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
            null != a && "[object Object]" === Object.prototype.toString.call(a)
        );
    }
    function e(a) {
        var b;
        // even if its not own property I'd still call it non-empty
        for (b in a) return !1;
        return !0;
    }
    function f(a) {
        return (
            "number" == typeof value ||
            "[object Number]" === Object.prototype.toString.call(a)
        );
    }
    function g(a) {
        return (
            a instanceof Date ||
            "[object Date]" === Object.prototype.toString.call(a)
        );
    }
    function h(a, b) {
        var c,
            d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d;
    }
    function i(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function j(a, b) {
        for (var c in b) i(b, c) && (a[c] = b[c]);
        return (
            i(b, "toString") && (a.toString = b.toString),
            i(b, "valueOf") && (a.valueOf = b.valueOf),
            a
        );
    }
    function k(a, b, c, d) {
        return rb(a, b, c, d, !0).utc();
    }
    function l() {
        // We need to deep clone this object.
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
        };
    }
    function m(a) {
        return null == a._pf && (a._pf = l()), a._pf;
    }
    function n(a) {
        if (null == a._isValid) {
            var b = m(a),
                c = qd.call(b.parsedDateParts, function (a) {
                    return null != a;
                }),
                d =
                    !isNaN(a._d.getTime()) &&
                    b.overflow < 0 &&
                    !b.empty &&
                    !b.invalidMonth &&
                    !b.invalidWeekday &&
                    !b.nullInput &&
                    !b.invalidFormat &&
                    !b.userInvalidated &&
                    (!b.meridiem || (b.meridiem && c));
            if (
                (a._strict &&
                    (d =
                        d &&
                        0 === b.charsLeftOver &&
                        0 === b.unusedTokens.length &&
                        void 0 === b.bigHour),
                null != Object.isFrozen && Object.isFrozen(a))
            )
                return d;
            a._isValid = d;
        }
        return a._isValid;
    }
    function o(a) {
        var b = k(NaN);
        return null != a ? j(m(b), a) : (m(b).userInvalidated = !0), b;
    }
    function p(a) {
        return void 0 === a;
    }
    function q(a, b) {
        var c, d, e;
        if (
            (p(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject),
            p(b._i) || (a._i = b._i),
            p(b._f) || (a._f = b._f),
            p(b._l) || (a._l = b._l),
            p(b._strict) || (a._strict = b._strict),
            p(b._tzm) || (a._tzm = b._tzm),
            p(b._isUTC) || (a._isUTC = b._isUTC),
            p(b._offset) || (a._offset = b._offset),
            p(b._pf) || (a._pf = m(b)),
            p(b._locale) || (a._locale = b._locale),
            rd.length > 0)
        )
            for (c in rd) (d = rd[c]), (e = b[d]), p(e) || (a[d] = e);
        return a;
    }
    // Moment prototype object
    function r(b) {
        q(this, b),
            (this._d = new Date(null != b._d ? b._d.getTime() : NaN)),
            // Prevent infinite loop in case updateOffset creates new moment
            // objects.
            sd === !1 && ((sd = !0), a.updateOffset(this), (sd = !1));
    }
    function s(a) {
        return a instanceof r || (null != a && null != a._isAMomentObject);
    }
    function t(a) {
        return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
    }
    function u(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = t(b)), c;
    }
    // compare two arrays, return the number of differences
    function v(a, b, c) {
        var d,
            e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; d < e; d++)
            ((c && a[d] !== b[d]) || (!c && u(a[d]) !== u(b[d]))) && g++;
        return g + f;
    }
    function w(b) {
        a.suppressDeprecationWarnings === !1 &&
            "undefined" != typeof console &&
            console.warn &&
            console.warn("Deprecation warning: " + b);
    }
    function x(b, c) {
        var d = !0;
        return j(function () {
            if (
                (null != a.deprecationHandler && a.deprecationHandler(null, b),
                d)
            ) {
                for (var e, f = [], g = 0; g < arguments.length; g++) {
                    if (((e = ""), "object" == typeof arguments[g])) {
                        e += "\n[" + g + "] ";
                        for (var h in arguments[0])
                            e += h + ": " + arguments[0][h] + ", ";
                        e = e.slice(0, -2);
                    } else e = arguments[g];
                    f.push(e);
                }
                w(
                    b +
                        "\nArguments: " +
                        Array.prototype.slice.call(f).join("") +
                        "\n" +
                        new Error().stack
                ),
                    (d = !1);
            }
            return c.apply(this, arguments);
        }, c);
    }
    function y(b, c) {
        null != a.deprecationHandler && a.deprecationHandler(b, c),
            td[b] || (w(c), (td[b] = !0));
    }
    function z(a) {
        return (
            a instanceof Function ||
            "[object Function]" === Object.prototype.toString.call(a)
        );
    }
    function A(a) {
        var b, c;
        for (c in a) (b = a[c]), z(b) ? (this[c] = b) : (this["_" + c] = b);
        (this._config = a),
            // Lenient ordinal parsing accepts just a number in addition to
            // number + (possibly) stuff coming from _ordinalParseLenient.
            (this._ordinalParseLenient = new RegExp(
                this._ordinalParse.source + "|" + /\d{1,2}/.source
            ));
    }
    function B(a, b) {
        var c,
            e = j({}, a);
        for (c in b)
            i(b, c) &&
                (d(a[c]) && d(b[c])
                    ? ((e[c] = {}), j(e[c], a[c]), j(e[c], b[c]))
                    : null != b[c]
                    ? (e[c] = b[c])
                    : delete e[c]);
        for (c in a)
            i(a, c) &&
                !i(b, c) &&
                d(a[c]) &&
                // make sure changes to properties don't modify parent config
                (e[c] = j({}, e[c]));
        return e;
    }
    function C(a) {
        null != a && this.set(a);
    }
    function D(a, b, c) {
        var d = this._calendar[a] || this._calendar.sameElse;
        return z(d) ? d.call(b, c) : d;
    }
    function E(a) {
        var b = this._longDateFormat[a],
            c = this._longDateFormat[a.toUpperCase()];
        return b || !c
            ? b
            : ((this._longDateFormat[a] = c.replace(
                  /MMMM|MM|DD|dddd/g,
                  function (a) {
                      return a.slice(1);
                  }
              )),
              this._longDateFormat[a]);
    }
    function F() {
        return this._invalidDate;
    }
    function G(a) {
        return this._ordinal.replace("%d", a);
    }
    function H(a, b, c, d) {
        var e = this._relativeTime[c];
        return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
    }
    function I(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return z(c) ? c(b) : c.replace(/%s/i, b);
    }
    function J(a, b) {
        var c = a.toLowerCase();
        Dd[c] = Dd[c + "s"] = Dd[b] = a;
    }
    function K(a) {
        return "string" == typeof a ? Dd[a] || Dd[a.toLowerCase()] : void 0;
    }
    function L(a) {
        var b,
            c,
            d = {};
        for (c in a) i(a, c) && ((b = K(c)), b && (d[b] = a[c]));
        return d;
    }
    function M(a, b) {
        Ed[a] = b;
    }
    function N(a) {
        var b = [];
        for (var c in a) b.push({ unit: c, priority: Ed[c] });
        return (
            b.sort(function (a, b) {
                return a.priority - b.priority;
            }),
            b
        );
    }
    function O(b, c) {
        return function (d) {
            return null != d
                ? (Q(this, b, d), a.updateOffset(this, c), this)
                : P(this, b);
        };
    }
    function P(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
    }
    function Q(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
    }
    // MOMENTS
    function R(a) {
        return (a = K(a)), z(this[a]) ? this[a]() : this;
    }
    function S(a, b) {
        if ("object" == typeof a) {
            a = L(a);
            for (var c = N(a), d = 0; d < c.length; d++)
                this[c[d].unit](a[c[d].unit]);
        } else if (((a = K(a)), z(this[a]))) return this[a](b);
        return this;
    }
    function T(a, b, c) {
        var d = "" + Math.abs(a),
            e = b - d.length,
            f = a >= 0;
        return (
            (f ? (c ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, e)).toString().substr(1) +
            d
        );
    }
    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function U(a, b, c, d) {
        var e = d;
        "string" == typeof d &&
            (e = function () {
                return this[d]();
            }),
            a && (Id[a] = e),
            b &&
                (Id[b[0]] = function () {
                    return T(e.apply(this, arguments), b[1], b[2]);
                }),
            c &&
                (Id[c] = function () {
                    return this.localeData().ordinal(
                        e.apply(this, arguments),
                        a
                    );
                });
    }
    function V(a) {
        return a.match(/\[[\s\S]/)
            ? a.replace(/^\[|\]$/g, "")
            : a.replace(/\\/g, "");
    }
    function W(a) {
        var b,
            c,
            d = a.match(Fd);
        for (b = 0, c = d.length; b < c; b++)
            Id[d[b]] ? (d[b] = Id[d[b]]) : (d[b] = V(d[b]));
        return function (b) {
            var e,
                f = "";
            for (e = 0; e < c; e++)
                f += d[e] instanceof Function ? d[e].call(b, a) : d[e];
            return f;
        };
    }
    // format date using native date object
    function X(a, b) {
        return a.isValid()
            ? ((b = Y(b, a.localeData())), (Hd[b] = Hd[b] || W(b)), Hd[b](a))
            : a.localeData().invalidDate();
    }
    function Y(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a;
        }
        var d = 5;
        for (Gd.lastIndex = 0; d >= 0 && Gd.test(a); )
            (a = a.replace(Gd, c)), (Gd.lastIndex = 0), (d -= 1);
        return a;
    }
    function Z(a, b, c) {
        $d[a] = z(b)
            ? b
            : function (a, d) {
                  return a && c ? c : b;
              };
    }
    function $(a, b) {
        return i($d, a) ? $d[a](b._strict, b._locale) : new RegExp(_(a));
    }
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function _(a) {
        return aa(
            a
                .replace("\\", "")
                .replace(
                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                    function (a, b, c, d, e) {
                        return b || c || d || e;
                    }
                )
        );
    }
    function aa(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function ba(a, b) {
        var c,
            d = b;
        for (
            "string" == typeof a && (a = [a]),
                f(b) &&
                    (d = function (a, c) {
                        c[b] = u(a);
                    }),
                c = 0;
            c < a.length;
            c++
        )
            _d[a[c]] = d;
    }
    function ca(a, b) {
        ba(a, function (a, c, d, e) {
            (d._w = d._w || {}), b(a, d._w, d, e);
        });
    }
    function da(a, b, c) {
        null != b && i(_d, a) && _d[a](b, c._a, c, a);
    }
    function ea(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
    }
    function fa(a, b) {
        return a
            ? c(this._months)
                ? this._months[a.month()]
                : this._months[
                      (this._months.isFormat || ke).test(b)
                          ? "format"
                          : "standalone"
                  ][a.month()]
            : this._months;
    }
    function ga(a, b) {
        return a
            ? c(this._monthsShort)
                ? this._monthsShort[a.month()]
                : this._monthsShort[ke.test(b) ? "format" : "standalone"][
                      a.month()
                  ]
            : this._monthsShort;
    }
    function ha(a, b, c) {
        var d,
            e,
            f,
            g = a.toLocaleLowerCase();
        if (!this._monthsParse)
            for (
                // this is not used
                this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    d = 0;
                d < 12;
                ++d
            )
                (f = k([2e3, d])),
                    (this._shortMonthsParse[d] = this.monthsShort(
                        f,
                        ""
                    ).toLocaleLowerCase()),
                    (this._longMonthsParse[d] = this.months(
                        f,
                        ""
                    ).toLocaleLowerCase());
        return c
            ? "MMM" === b
                ? ((e = je.call(this._shortMonthsParse, g)),
                  e !== -1 ? e : null)
                : ((e = je.call(this._longMonthsParse, g)), e !== -1 ? e : null)
            : "MMM" === b
            ? ((e = je.call(this._shortMonthsParse, g)),
              e !== -1
                  ? e
                  : ((e = je.call(this._longMonthsParse, g)),
                    e !== -1 ? e : null))
            : ((e = je.call(this._longMonthsParse, g)),
              e !== -1
                  ? e
                  : ((e = je.call(this._shortMonthsParse, g)),
                    e !== -1 ? e : null));
    }
    function ia(a, b, c) {
        var d, e, f;
        if (this._monthsParseExact) return ha.call(this, a, b, c);
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (
            this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = [])),
                d = 0;
            d < 12;
            d++
        ) {
            // test the regex
            if (
                // make the regex if we don't have it already
                ((e = k([2e3, d])),
                c &&
                    !this._longMonthsParse[d] &&
                    ((this._longMonthsParse[d] = new RegExp(
                        "^" + this.months(e, "").replace(".", "") + "$",
                        "i"
                    )),
                    (this._shortMonthsParse[d] = new RegExp(
                        "^" + this.monthsShort(e, "").replace(".", "") + "$",
                        "i"
                    ))),
                c ||
                    this._monthsParse[d] ||
                    ((f =
                        "^" +
                        this.months(e, "") +
                        "|^" +
                        this.monthsShort(e, "")),
                    (this._monthsParse[d] = new RegExp(
                        f.replace(".", ""),
                        "i"
                    ))),
                c && "MMMM" === b && this._longMonthsParse[d].test(a))
            )
                return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d;
        }
    }
    // MOMENTS
    function ja(a, b) {
        var c;
        if (!a.isValid())
            // No op
            return a;
        if ("string" == typeof b)
            if (/^\d+$/.test(b)) b = u(b);
            // TODO: Another silent failure?
            else if (((b = a.localeData().monthsParse(b)), !f(b))) return a;
        return (
            (c = Math.min(a.date(), ea(a.year(), b))),
            a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c),
            a
        );
    }
    function ka(b) {
        return null != b
            ? (ja(this, b), a.updateOffset(this, !0), this)
            : P(this, "Month");
    }
    function la() {
        return ea(this.year(), this.month());
    }
    function ma(a) {
        return this._monthsParseExact
            ? (i(this, "_monthsRegex") || oa.call(this),
              a ? this._monthsShortStrictRegex : this._monthsShortRegex)
            : (i(this, "_monthsShortRegex") || (this._monthsShortRegex = ne),
              this._monthsShortStrictRegex && a
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex);
    }
    function na(a) {
        return this._monthsParseExact
            ? (i(this, "_monthsRegex") || oa.call(this),
              a ? this._monthsStrictRegex : this._monthsRegex)
            : (i(this, "_monthsRegex") || (this._monthsRegex = oe),
              this._monthsStrictRegex && a
                  ? this._monthsStrictRegex
                  : this._monthsRegex);
    }
    function oa() {
        function a(a, b) {
            return b.length - a.length;
        }
        var b,
            c,
            d = [],
            e = [],
            f = [];
        for (b = 0; b < 12; b++)
            // make the regex if we don't have it already
            (c = k([2e3, b])),
                d.push(this.monthsShort(c, "")),
                e.push(this.months(c, "")),
                f.push(this.months(c, "")),
                f.push(this.monthsShort(c, ""));
        for (
            // Sorting makes sure if one month (or abbr) is a prefix of another it
            // will match the longer piece.
            d.sort(a), e.sort(a), f.sort(a), b = 0;
            b < 12;
            b++
        )
            (d[b] = aa(d[b])), (e[b] = aa(e[b]));
        for (b = 0; b < 24; b++) f[b] = aa(f[b]);
        (this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i")),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
                "^(" + e.join("|") + ")",
                "i"
            )),
            (this._monthsShortStrictRegex = new RegExp(
                "^(" + d.join("|") + ")",
                "i"
            ));
    }
    // HELPERS
    function pa(a) {
        return qa(a) ? 366 : 365;
    }
    function qa(a) {
        return (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0;
    }
    function ra() {
        return qa(this.year());
    }
    function sa(a, b, c, d, e, f, g) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var h = new Date(a, b, c, d, e, f, g);
        //the date constructor remaps years 0-99 to 1900-1999
        return (
            a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a),
            h
        );
    }
    function ta(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        //the Date.UTC function remaps years 0-99 to 1900-1999
        return (
            a < 100 &&
                a >= 0 &&
                isFinite(b.getUTCFullYear()) &&
                b.setUTCFullYear(a),
            b
        );
    }
    // start-of-first-week - start-of-year
    function ua(a, b, c) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            d = 7 + b - c,
            // first-week day local weekday -- which local weekday is fwd
            e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1;
    }
    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function va(a, b, c, d, e) {
        var f,
            g,
            h = (7 + c - d) % 7,
            i = ua(a, d, e),
            j = 1 + 7 * (b - 1) + h + i;
        return (
            j <= 0
                ? ((f = a - 1), (g = pa(f) + j))
                : j > pa(a)
                ? ((f = a + 1), (g = j - pa(a)))
                : ((f = a), (g = j)),
            { year: f, dayOfYear: g }
        );
    }
    function wa(a, b, c) {
        var d,
            e,
            f = ua(a.year(), b, c),
            g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return (
            g < 1
                ? ((e = a.year() - 1), (d = g + xa(e, b, c)))
                : g > xa(a.year(), b, c)
                ? ((d = g - xa(a.year(), b, c)), (e = a.year() + 1))
                : ((e = a.year()), (d = g)),
            { week: d, year: e }
        );
    }
    function xa(a, b, c) {
        var d = ua(a, b, c),
            e = ua(a + 1, b, c);
        return (pa(a) - d + e) / 7;
    }
    // HELPERS
    // LOCALES
    function ya(a) {
        return wa(a, this._week.dow, this._week.doy).week;
    }
    function za() {
        return this._week.dow;
    }
    function Aa() {
        return this._week.doy;
    }
    // MOMENTS
    function Ba(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d");
    }
    function Ca(a) {
        var b = wa(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d");
    }
    // HELPERS
    function Da(a, b) {
        return "string" != typeof a
            ? a
            : isNaN(a)
            ? ((a = b.weekdaysParse(a)), "number" == typeof a ? a : null)
            : parseInt(a, 10);
    }
    function Ea(a, b) {
        return "string" == typeof a
            ? b.weekdaysParse(a) % 7 || 7
            : isNaN(a)
            ? null
            : a;
    }
    function Fa(a, b) {
        return a
            ? c(this._weekdays)
                ? this._weekdays[a.day()]
                : this._weekdays[
                      this._weekdays.isFormat.test(b) ? "format" : "standalone"
                  ][a.day()]
            : this._weekdays;
    }
    function Ga(a) {
        return a ? this._weekdaysShort[a.day()] : this._weekdaysShort;
    }
    function Ha(a) {
        return a ? this._weekdaysMin[a.day()] : this._weekdaysMin;
    }
    function Ia(a, b, c) {
        var d,
            e,
            f,
            g = a.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (
                this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    d = 0;
                d < 7;
                ++d
            )
                (f = k([2e3, 1]).day(d)),
                    (this._minWeekdaysParse[d] = this.weekdaysMin(
                        f,
                        ""
                    ).toLocaleLowerCase()),
                    (this._shortWeekdaysParse[d] = this.weekdaysShort(
                        f,
                        ""
                    ).toLocaleLowerCase()),
                    (this._weekdaysParse[d] = this.weekdays(
                        f,
                        ""
                    ).toLocaleLowerCase());
        return c
            ? "dddd" === b
                ? ((e = je.call(this._weekdaysParse, g)), e !== -1 ? e : null)
                : "ddd" === b
                ? ((e = je.call(this._shortWeekdaysParse, g)),
                  e !== -1 ? e : null)
                : ((e = je.call(this._minWeekdaysParse, g)),
                  e !== -1 ? e : null)
            : "dddd" === b
            ? ((e = je.call(this._weekdaysParse, g)),
              e !== -1
                  ? e
                  : ((e = je.call(this._shortWeekdaysParse, g)),
                    e !== -1
                        ? e
                        : ((e = je.call(this._minWeekdaysParse, g)),
                          e !== -1 ? e : null)))
            : "ddd" === b
            ? ((e = je.call(this._shortWeekdaysParse, g)),
              e !== -1
                  ? e
                  : ((e = je.call(this._weekdaysParse, g)),
                    e !== -1
                        ? e
                        : ((e = je.call(this._minWeekdaysParse, g)),
                          e !== -1 ? e : null)))
            : ((e = je.call(this._minWeekdaysParse, g)),
              e !== -1
                  ? e
                  : ((e = je.call(this._weekdaysParse, g)),
                    e !== -1
                        ? e
                        : ((e = je.call(this._shortWeekdaysParse, g)),
                          e !== -1 ? e : null)));
    }
    function Ja(a, b, c) {
        var d, e, f;
        if (this._weekdaysParseExact) return Ia.call(this, a, b, c);
        for (
            this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                d = 0;
            d < 7;
            d++
        ) {
            // test the regex
            if (
                // make the regex if we don't have it already
                ((e = k([2e3, 1]).day(d)),
                c &&
                    !this._fullWeekdaysParse[d] &&
                    ((this._fullWeekdaysParse[d] = new RegExp(
                        "^" + this.weekdays(e, "").replace(".", ".?") + "$",
                        "i"
                    )),
                    (this._shortWeekdaysParse[d] = new RegExp(
                        "^" +
                            this.weekdaysShort(e, "").replace(".", ".?") +
                            "$",
                        "i"
                    )),
                    (this._minWeekdaysParse[d] = new RegExp(
                        "^" + this.weekdaysMin(e, "").replace(".", ".?") + "$",
                        "i"
                    ))),
                this._weekdaysParse[d] ||
                    ((f =
                        "^" +
                        this.weekdays(e, "") +
                        "|^" +
                        this.weekdaysShort(e, "") +
                        "|^" +
                        this.weekdaysMin(e, "")),
                    (this._weekdaysParse[d] = new RegExp(
                        f.replace(".", ""),
                        "i"
                    ))),
                c && "dddd" === b && this._fullWeekdaysParse[d].test(a))
            )
                return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a))
                return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
            if (!c && this._weekdaysParse[d].test(a)) return d;
        }
    }
    // MOMENTS
    function Ka(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a
            ? ((a = Da(a, this.localeData())), this.add(a - b, "d"))
            : b;
    }
    function La(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d");
    }
    function Ma(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        if (null != a) {
            var b = Ea(a, this.localeData());
            return this.day(this.day() % 7 ? b : b - 7);
        }
        return this.day() || 7;
    }
    function Na(a) {
        return this._weekdaysParseExact
            ? (i(this, "_weekdaysRegex") || Qa.call(this),
              a ? this._weekdaysStrictRegex : this._weekdaysRegex)
            : (i(this, "_weekdaysRegex") || (this._weekdaysRegex = ue),
              this._weekdaysStrictRegex && a
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex);
    }
    function Oa(a) {
        return this._weekdaysParseExact
            ? (i(this, "_weekdaysRegex") || Qa.call(this),
              a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            : (i(this, "_weekdaysShortRegex") ||
                  (this._weekdaysShortRegex = ve),
              this._weekdaysShortStrictRegex && a
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex);
    }
    function Pa(a) {
        return this._weekdaysParseExact
            ? (i(this, "_weekdaysRegex") || Qa.call(this),
              a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            : (i(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = we),
              this._weekdaysMinStrictRegex && a
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex);
    }
    function Qa() {
        function a(a, b) {
            return b.length - a.length;
        }
        var b,
            c,
            d,
            e,
            f,
            g = [],
            h = [],
            i = [],
            j = [];
        for (b = 0; b < 7; b++)
            // make the regex if we don't have it already
            (c = k([2e3, 1]).day(b)),
                (d = this.weekdaysMin(c, "")),
                (e = this.weekdaysShort(c, "")),
                (f = this.weekdays(c, "")),
                g.push(d),
                h.push(e),
                i.push(f),
                j.push(d),
                j.push(e),
                j.push(f);
        for (
            // Sorting makes sure if one weekday (or abbr) is a prefix of another it
            // will match the longer piece.
            g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0;
            b < 7;
            b++
        )
            (h[b] = aa(h[b])), (i[b] = aa(i[b])), (j[b] = aa(j[b]));
        (this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i")),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
                "^(" + i.join("|") + ")",
                "i"
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
                "^(" + h.join("|") + ")",
                "i"
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
                "^(" + g.join("|") + ")",
                "i"
            ));
    }
    // FORMATTING
    function Ra() {
        return this.hours() % 12 || 12;
    }
    function Sa() {
        return this.hours() || 24;
    }
    function Ta(a, b) {
        U(a, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), b);
        });
    }
    // PARSING
    function Ua(a, b) {
        return b._meridiemParse;
    }
    // LOCALES
    function Va(a) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return "p" === (a + "").toLowerCase().charAt(0);
    }
    function Wa(a, b, c) {
        return a > 11 ? (c ? "pm" : "PM") : c ? "am" : "AM";
    }
    function Xa(a) {
        return a ? a.toLowerCase().replace("_", "-") : a;
    }
    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function Ya(a) {
        for (var b, c, d, e, f = 0; f < a.length; ) {
            for (
                e = Xa(a[f]).split("-"),
                    b = e.length,
                    c = Xa(a[f + 1]),
                    c = c ? c.split("-") : null;
                b > 0;

            ) {
                if ((d = Za(e.slice(0, b).join("-")))) return d;
                if (c && c.length >= b && v(e, c, !0) >= b - 1)
                    //the next array item is better than a shallower substring of this one
                    break;
                b--;
            }
            f++;
        }
        return null;
    }
    function Za(a) {
        var b = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!Be[a] && "undefined" != typeof module && module && module.exports)
            try {
                (b = xe._abbr),
                    require("./locale/" + a),
                    // because defineLocale currently also sets the global locale, we
                    // want to undo that for lazy loaded locales
                    $a(b);
            } catch (a) {}
        return Be[a];
    }
    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function $a(a, b) {
        var c;
        // moment.duration._locale = moment._locale = data;
        return a && ((c = p(b) ? bb(a) : _a(a, b)), c && (xe = c)), xe._abbr;
    }
    function _a(a, b) {
        if (null !== b) {
            var c = Ae;
            if (((b.abbr = a), null != Be[a]))
                y(
                    "defineLocaleOverride",
                    "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                ),
                    (c = Be[a]._config);
            else if (null != b.parentLocale) {
                if (null == Be[b.parentLocale])
                    return (
                        Ce[b.parentLocale] || (Ce[b.parentLocale] = []),
                        Ce[b.parentLocale].push({ name: a, config: b }),
                        null
                    );
                c = Be[b.parentLocale]._config;
            }
            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            return (
                (Be[a] = new C(B(c, b))),
                Ce[a] &&
                    Ce[a].forEach(function (a) {
                        _a(a.name, a.config);
                    }),
                $a(a),
                Be[a]
            );
        }
        // useful for testing
        return delete Be[a], null;
    }
    function ab(a, b) {
        if (null != b) {
            var c,
                d = Ae;
            // MERGE
            null != Be[a] && (d = Be[a]._config),
                (b = B(d, b)),
                (c = new C(b)),
                (c.parentLocale = Be[a]),
                (Be[a] = c),
                // backwards compat for now: also set the locale
                $a(a);
        }
        // pass null for config to unupdate, useful for tests
        else
            null != Be[a] &&
                (null != Be[a].parentLocale
                    ? (Be[a] = Be[a].parentLocale)
                    : null != Be[a] && delete Be[a]);
        return Be[a];
    }
    // returns locale data
    function bb(a) {
        var b;
        if ((a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a))
            return xe;
        if (!c(a)) {
            if (
                //short-circuit everything else
                (b = Za(a))
            )
                return b;
            a = [a];
        }
        return Ya(a);
    }
    function cb() {
        return wd(Be);
    }
    function db(a) {
        var b,
            c = a._a;
        return (
            c &&
                m(a).overflow === -2 &&
                ((b =
                    c[be] < 0 || c[be] > 11
                        ? be
                        : c[ce] < 1 || c[ce] > ea(c[ae], c[be])
                        ? ce
                        : c[de] < 0 ||
                          c[de] > 24 ||
                          (24 === c[de] &&
                              (0 !== c[ee] || 0 !== c[fe] || 0 !== c[ge]))
                        ? de
                        : c[ee] < 0 || c[ee] > 59
                        ? ee
                        : c[fe] < 0 || c[fe] > 59
                        ? fe
                        : c[ge] < 0 || c[ge] > 999
                        ? ge
                        : -1),
                m(a)._overflowDayOfYear && (b < ae || b > ce) && (b = ce),
                m(a)._overflowWeeks && b === -1 && (b = he),
                m(a)._overflowWeekday && b === -1 && (b = ie),
                (m(a).overflow = b)),
            a
        );
    }
    // date from iso format
    function eb(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h = a._i,
            i = De.exec(h) || Ee.exec(h);
        if (i) {
            for (m(a).iso = !0, b = 0, c = Ge.length; b < c; b++)
                if (Ge[b][1].exec(i[1])) {
                    (e = Ge[b][0]), (d = Ge[b][2] !== !1);
                    break;
                }
            if (null == e) return void (a._isValid = !1);
            if (i[3]) {
                for (b = 0, c = He.length; b < c; b++)
                    if (He[b][1].exec(i[3])) {
                        // match[2] should be 'T' or space
                        f = (i[2] || " ") + He[b][0];
                        break;
                    }
                if (null == f) return void (a._isValid = !1);
            }
            if (!d && null != f) return void (a._isValid = !1);
            if (i[4]) {
                if (!Fe.exec(i[4])) return void (a._isValid = !1);
                g = "Z";
            }
            (a._f = e + (f || "") + (g || "")), kb(a);
        } else a._isValid = !1;
    }
    // date from iso format or fallback
    function fb(b) {
        var c = Ie.exec(b._i);
        return null !== c
            ? void (b._d = new Date(+c[1]))
            : (eb(b),
              void (
                  b._isValid === !1 &&
                  (delete b._isValid, a.createFromInputFallback(b))
              ));
    }
    // Pick the first defined of two or three arguments.
    function gb(a, b, c) {
        return null != a ? a : null != b ? b : c;
    }
    function hb(b) {
        // hooks is actually the exported moment object
        var c = new Date(a.now());
        return b._useUTC
            ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()]
            : [c.getFullYear(), c.getMonth(), c.getDate()];
    }
    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function ib(a) {
        var b,
            c,
            d,
            e,
            f = [];
        if (!a._d) {
            // Default to current date.
            // * if no year, month, day of month are given, default to today
            // * if day of month is given, default month and year
            // * if month is given, default only year
            // * if year is given, don't default anything
            for (
                d = hb(a),
                    //compute day of the year from weeks and weekdays
                    a._w && null == a._a[ce] && null == a._a[be] && jb(a),
                    //if the day of the year is set, figure out what it is
                    a._dayOfYear &&
                        ((e = gb(a._a[ae], d[ae])),
                        a._dayOfYear > pa(e) && (m(a)._overflowDayOfYear = !0),
                        (c = ta(e, 0, a._dayOfYear)),
                        (a._a[be] = c.getUTCMonth()),
                        (a._a[ce] = c.getUTCDate())),
                    b = 0;
                b < 3 && null == a._a[b];
                ++b
            )
                a._a[b] = f[b] = d[b];
            // Zero out whatever was not defaulted, including time
            for (; b < 7; b++)
                a._a[b] = f[b] = null == a._a[b] ? (2 === b ? 1 : 0) : a._a[b];
            // Check for 24:00:00.000
            24 === a._a[de] &&
                0 === a._a[ee] &&
                0 === a._a[fe] &&
                0 === a._a[ge] &&
                ((a._nextDay = !0), (a._a[de] = 0)),
                (a._d = (a._useUTC ? ta : sa).apply(null, f)),
                // Apply timezone offset from input. The actual utcOffset can be changed
                // with parseZone.
                null != a._tzm &&
                    a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
                a._nextDay && (a._a[de] = 24);
        }
    }
    function jb(a) {
        var b, c, d, e, f, g, h, i;
        if (((b = a._w), null != b.GG || null != b.W || null != b.E))
            (f = 1),
                (g = 4),
                // TODO: We need to take the current isoWeekYear, but that depends on
                // how we interpret now (local, utc, fixed offset). So create
                // a now version of current config (take local/utc/offset flags, and
                // create now).
                (c = gb(b.GG, a._a[ae], wa(sb(), 1, 4).year)),
                (d = gb(b.W, 1)),
                (e = gb(b.E, 1)),
                (e < 1 || e > 7) && (i = !0);
        else {
            (f = a._locale._week.dow), (g = a._locale._week.doy);
            var j = wa(sb(), f, g);
            (c = gb(b.gg, a._a[ae], j.year)),
                // Default to current week.
                (d = gb(b.w, j.week)),
                null != b.d
                    ? // weekday -- low day numbers are considered next week
                      ((e = b.d), (e < 0 || e > 6) && (i = !0))
                    : null != b.e
                    ? // local weekday -- counting starts from begining of week
                      ((e = b.e + f), (b.e < 0 || b.e > 6) && (i = !0))
                    : // default to begining of week
                      (e = f);
        }
        d < 1 || d > xa(c, f, g)
            ? (m(a)._overflowWeeks = !0)
            : null != i
            ? (m(a)._overflowWeekday = !0)
            : ((h = va(c, d, e, f, g)),
              (a._a[ae] = h.year),
              (a._dayOfYear = h.dayOfYear));
    }
    // date from string and format string
    function kb(b) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (b._f === a.ISO_8601) return void eb(b);
        (b._a = []), (m(b).empty = !0);
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var c,
            d,
            e,
            f,
            g,
            h = "" + b._i,
            i = h.length,
            j = 0;
        for (e = Y(b._f, b._locale).match(Fd) || [], c = 0; c < e.length; c++)
            (f = e[c]),
                (d = (h.match($(f, b)) || [])[0]),
                // console.log('token', token, 'parsedInput', parsedInput,
                //         'regex', getParseRegexForToken(token, config));
                d &&
                    ((g = h.substr(0, h.indexOf(d))),
                    g.length > 0 && m(b).unusedInput.push(g),
                    (h = h.slice(h.indexOf(d) + d.length)),
                    (j += d.length)),
                // don't parse if it's not a known token
                Id[f]
                    ? (d ? (m(b).empty = !1) : m(b).unusedTokens.push(f),
                      da(f, d, b))
                    : b._strict && !d && m(b).unusedTokens.push(f);
        // add remaining unparsed input length to the string
        (m(b).charsLeftOver = i - j),
            h.length > 0 && m(b).unusedInput.push(h),
            // clear _12h flag if hour is <= 12
            b._a[de] <= 12 &&
                m(b).bigHour === !0 &&
                b._a[de] > 0 &&
                (m(b).bigHour = void 0),
            (m(b).parsedDateParts = b._a.slice(0)),
            (m(b).meridiem = b._meridiem),
            // handle meridiem
            (b._a[de] = lb(b._locale, b._a[de], b._meridiem)),
            ib(b),
            db(b);
    }
    function lb(a, b, c) {
        var d;
        // Fallback
        return null == c
            ? b
            : null != a.meridiemHour
            ? a.meridiemHour(b, c)
            : null != a.isPM
            ? ((d = a.isPM(c)),
              d && b < 12 && (b += 12),
              d || 12 !== b || (b = 0),
              b)
            : b;
    }
    // date from string and array of format strings
    function mb(a) {
        var b, c, d, e, f;
        if (0 === a._f.length)
            return (m(a).invalidFormat = !0), void (a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++)
            (f = 0),
                (b = q({}, a)),
                null != a._useUTC && (b._useUTC = a._useUTC),
                (b._f = a._f[e]),
                kb(b),
                n(b) &&
                    // if there is any input that was not parsed add a penalty for that format
                    ((f += m(b).charsLeftOver),
                    //or tokens
                    (f += 10 * m(b).unusedTokens.length),
                    (m(b).score = f),
                    (null == d || f < d) && ((d = f), (c = b)));
        j(a, c || b);
    }
    function nb(a) {
        if (!a._d) {
            var b = L(a._i);
            (a._a = h(
                [
                    b.year,
                    b.month,
                    b.day || b.date,
                    b.hour,
                    b.minute,
                    b.second,
                    b.millisecond,
                ],
                function (a) {
                    return a && parseInt(a, 10);
                }
            )),
                ib(a);
        }
    }
    function ob(a) {
        var b = new r(db(pb(a)));
        // Adding is smart enough around DST
        return b._nextDay && (b.add(1, "d"), (b._nextDay = void 0)), b;
    }
    function pb(a) {
        var b = a._i,
            d = a._f;
        return (
            (a._locale = a._locale || bb(a._l)),
            null === b || (void 0 === d && "" === b)
                ? o({ nullInput: !0 })
                : ("string" == typeof b && (a._i = b = a._locale.preparse(b)),
                  s(b)
                      ? new r(db(b))
                      : (g(b) ? (a._d = b) : c(d) ? mb(a) : d ? kb(a) : qb(a),
                        n(a) || (a._d = null),
                        a))
        );
    }
    function qb(b) {
        var d = b._i;
        void 0 === d
            ? (b._d = new Date(a.now()))
            : g(d)
            ? (b._d = new Date(d.valueOf()))
            : "string" == typeof d
            ? fb(b)
            : c(d)
            ? ((b._a = h(d.slice(0), function (a) {
                  return parseInt(a, 10);
              })),
              ib(b))
            : "object" == typeof d
            ? nb(b)
            : f(d)
            ? // from milliseconds
              (b._d = new Date(d))
            : a.createFromInputFallback(b);
    }
    function rb(a, b, f, g, h) {
        var i = {};
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        return (
            (f !== !0 && f !== !1) || ((g = f), (f = void 0)),
            ((d(a) && e(a)) || (c(a) && 0 === a.length)) && (a = void 0),
            (i._isAMomentObject = !0),
            (i._useUTC = i._isUTC = h),
            (i._l = f),
            (i._i = a),
            (i._f = b),
            (i._strict = g),
            ob(i)
        );
    }
    function sb(a, b, c, d) {
        return rb(a, b, c, d, !1);
    }
    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function tb(a, b) {
        var d, e;
        if ((1 === b.length && c(b[0]) && (b = b[0]), !b.length)) return sb();
        for (d = b[0], e = 1; e < b.length; ++e)
            (b[e].isValid() && !b[e][a](d)) || (d = b[e]);
        return d;
    }
    // TODO: Use [].sort instead?
    function ub() {
        var a = [].slice.call(arguments, 0);
        return tb("isBefore", a);
    }
    function vb() {
        var a = [].slice.call(arguments, 0);
        return tb("isAfter", a);
    }
    function wb(a) {
        var b = L(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        // representation for dateAddRemove
        (this._milliseconds =
            +k +
            1e3 * j + // 1000
            6e4 * i + // 1000 * 60
            1e3 * h * 60 * 60), //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
            // Because of dateAddRemove treats 24 hours as different from a
            // day when working around DST, we need to store them separately
            (this._days = +g + 7 * f),
            // It is impossible translate months into days without knowing
            // which months you are are talking about, so we have to store
            // it separately.
            (this._months = +e + 3 * d + 12 * c),
            (this._data = {}),
            (this._locale = bb()),
            this._bubble();
    }
    function xb(a) {
        return a instanceof wb;
    }
    function yb(a) {
        return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a);
    }
    // FORMATTING
    function zb(a, b) {
        U(a, 0, 0, function () {
            var a = this.utcOffset(),
                c = "+";
            return (
                a < 0 && ((a = -a), (c = "-")),
                c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
            );
        });
    }
    function Ab(a, b) {
        var c = (b || "").match(a);
        if (null === c) return null;
        var d = c[c.length - 1] || [],
            e = (d + "").match(Me) || ["-", 0, 0],
            f = +(60 * e[1]) + u(e[2]);
        return 0 === f ? 0 : "+" === e[0] ? f : -f;
    }
    // Return a moment from input, that is local/utc/zone equivalent to model.
    function Bb(b, c) {
        var d, e;
        // Use low-level api, because this fn is low-level api.
        return c._isUTC
            ? ((d = c.clone()),
              (e =
                  (s(b) || g(b) ? b.valueOf() : sb(b).valueOf()) - d.valueOf()),
              d._d.setTime(d._d.valueOf() + e),
              a.updateOffset(d, !1),
              d)
            : sb(b).local();
    }
    function Cb(a) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
    }
    // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function Db(b, c) {
        var d,
            e = this._offset || 0;
        if (!this.isValid()) return null != b ? this : NaN;
        if (null != b) {
            if ("string" == typeof b) {
                if (((b = Ab(Xd, b)), null === b)) return this;
            } else Math.abs(b) < 16 && (b = 60 * b);
            return (
                !this._isUTC && c && (d = Cb(this)),
                (this._offset = b),
                (this._isUTC = !0),
                null != d && this.add(d, "m"),
                e !== b &&
                    (!c || this._changeInProgress
                        ? Tb(this, Ob(b - e, "m"), 1, !1)
                        : this._changeInProgress ||
                          ((this._changeInProgress = !0),
                          a.updateOffset(this, !0),
                          (this._changeInProgress = null))),
                this
            );
        }
        return this._isUTC ? e : Cb(this);
    }
    function Eb(a, b) {
        return null != a
            ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this)
            : -this.utcOffset();
    }
    function Fb(a) {
        return this.utcOffset(0, a);
    }
    function Gb(a) {
        return (
            this._isUTC &&
                (this.utcOffset(0, a),
                (this._isUTC = !1),
                a && this.subtract(Cb(this), "m")),
            this
        );
    }
    function Hb() {
        if (null != this._tzm) this.utcOffset(this._tzm);
        else if ("string" == typeof this._i) {
            var a = Ab(Wd, this._i);
            null != a ? this.utcOffset(a) : this.utcOffset(0, !0);
        }
        return this;
    }
    function Ib(a) {
        return (
            !!this.isValid() &&
            ((a = a ? sb(a).utcOffset() : 0), (this.utcOffset() - a) % 60 === 0)
        );
    }
    function Jb() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }
    function Kb() {
        if (!p(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if ((q(a, this), (a = pb(a)), a._a)) {
            var b = a._isUTC ? k(a._a) : sb(a._a);
            this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0;
        } else this._isDSTShifted = !1;
        return this._isDSTShifted;
    }
    function Lb() {
        return !!this.isValid() && !this._isUTC;
    }
    function Mb() {
        return !!this.isValid() && this._isUTC;
    }
    function Nb() {
        return !!this.isValid() && this._isUTC && 0 === this._offset;
    }
    function Ob(a, b) {
        var c,
            d,
            e,
            g = a,
            // matching against regexp is expensive, do it on demand
            h = null; // checks for null or undefined
        return (
            xb(a)
                ? (g = { ms: a._milliseconds, d: a._days, M: a._months })
                : f(a)
                ? ((g = {}), b ? (g[b] = a) : (g.milliseconds = a))
                : (h = Ne.exec(a))
                ? ((c = "-" === h[1] ? -1 : 1),
                  (g = {
                      y: 0,
                      d: u(h[ce]) * c,
                      h: u(h[de]) * c,
                      m: u(h[ee]) * c,
                      s: u(h[fe]) * c,
                      ms: u(yb(1e3 * h[ge])) * c,
                  }))
                : (h = Oe.exec(a))
                ? ((c = "-" === h[1] ? -1 : 1),
                  (g = {
                      y: Pb(h[2], c),
                      M: Pb(h[3], c),
                      w: Pb(h[4], c),
                      d: Pb(h[5], c),
                      h: Pb(h[6], c),
                      m: Pb(h[7], c),
                      s: Pb(h[8], c),
                  }))
                : null == g
                ? (g = {})
                : "object" == typeof g &&
                  ("from" in g || "to" in g) &&
                  ((e = Rb(sb(g.from), sb(g.to))),
                  (g = {}),
                  (g.ms = e.milliseconds),
                  (g.M = e.months)),
            (d = new wb(g)),
            xb(a) && i(a, "_locale") && (d._locale = a._locale),
            d
        );
    }
    function Pb(a, b) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var c = a && parseFloat(a.replace(",", "."));
        // apply sign while we're at it
        return (isNaN(c) ? 0 : c) * b;
    }
    function Qb(a, b) {
        var c = { milliseconds: 0, months: 0 };
        return (
            (c.months = b.month() - a.month() + 12 * (b.year() - a.year())),
            a.clone().add(c.months, "M").isAfter(b) && --c.months,
            (c.milliseconds = +b - +a.clone().add(c.months, "M")),
            c
        );
    }
    function Rb(a, b) {
        var c;
        return a.isValid() && b.isValid()
            ? ((b = Bb(b, a)),
              a.isBefore(b)
                  ? (c = Qb(a, b))
                  : ((c = Qb(b, a)),
                    (c.milliseconds = -c.milliseconds),
                    (c.months = -c.months)),
              c)
            : { milliseconds: 0, months: 0 };
    }
    // TODO: remove 'name' arg after deprecation is removed
    function Sb(a, b) {
        return function (c, d) {
            var e, f;
            //invert the arguments, but complain about it
            return (
                null === d ||
                    isNaN(+d) ||
                    (y(
                        b,
                        "moment()." +
                            b +
                            "(period, number) is deprecated. Please use moment()." +
                            b +
                            "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                    ),
                    (f = c),
                    (c = d),
                    (d = f)),
                (c = "string" == typeof c ? +c : c),
                (e = Ob(c, d)),
                Tb(this, e, a),
                this
            );
        };
    }
    function Tb(b, c, d, e) {
        var f = c._milliseconds,
            g = yb(c._days),
            h = yb(c._months);
        b.isValid() &&
            ((e = null == e || e),
            f && b._d.setTime(b._d.valueOf() + f * d),
            g && Q(b, "Date", P(b, "Date") + g * d),
            h && ja(b, P(b, "Month") + h * d),
            e && a.updateOffset(b, g || h));
    }
    function Ub(a, b) {
        var c = a.diff(b, "days", !0);
        return c < -6
            ? "sameElse"
            : c < -1
            ? "lastWeek"
            : c < 0
            ? "lastDay"
            : c < 1
            ? "sameDay"
            : c < 2
            ? "nextDay"
            : c < 7
            ? "nextWeek"
            : "sameElse";
    }
    function Vb(b, c) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var d = b || sb(),
            e = Bb(d, this).startOf("day"),
            f = a.calendarFormat(this, e) || "sameElse",
            g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
        return this.format(g || this.localeData().calendar(f, this, sb(d)));
    }
    function Wb() {
        return new r(this);
    }
    function Xb(a, b) {
        var c = s(a) ? a : sb(a);
        return (
            !(!this.isValid() || !c.isValid()) &&
            ((b = K(p(b) ? "millisecond" : b)),
            "millisecond" === b
                ? this.valueOf() > c.valueOf()
                : c.valueOf() < this.clone().startOf(b).valueOf())
        );
    }
    function Yb(a, b) {
        var c = s(a) ? a : sb(a);
        return (
            !(!this.isValid() || !c.isValid()) &&
            ((b = K(p(b) ? "millisecond" : b)),
            "millisecond" === b
                ? this.valueOf() < c.valueOf()
                : this.clone().endOf(b).valueOf() < c.valueOf())
        );
    }
    function Zb(a, b, c, d) {
        return (
            (d = d || "()"),
            ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) &&
                (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
        );
    }
    function $b(a, b) {
        var c,
            d = s(a) ? a : sb(a);
        return (
            !(!this.isValid() || !d.isValid()) &&
            ((b = K(b || "millisecond")),
            "millisecond" === b
                ? this.valueOf() === d.valueOf()
                : ((c = d.valueOf()),
                  this.clone().startOf(b).valueOf() <= c &&
                      c <= this.clone().endOf(b).valueOf()))
        );
    }
    function _b(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b);
    }
    function ac(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b);
    }
    function bc(a, b, c) {
        var d, e, f, g; // 1000
        // 1000 * 60
        // 1000 * 60 * 60
        // 1000 * 60 * 60 * 24, negate dst
        // 1000 * 60 * 60 * 24 * 7, negate dst
        return this.isValid()
            ? ((d = Bb(a, this)),
              d.isValid()
                  ? ((e = 6e4 * (d.utcOffset() - this.utcOffset())),
                    (b = K(b)),
                    "year" === b || "month" === b || "quarter" === b
                        ? ((g = cc(this, d)),
                          "quarter" === b
                              ? (g /= 3)
                              : "year" === b && (g /= 12))
                        : ((f = this - d),
                          (g =
                              "second" === b
                                  ? f / 1e3
                                  : "minute" === b
                                  ? f / 6e4
                                  : "hour" === b
                                  ? f / 36e5
                                  : "day" === b
                                  ? (f - e) / 864e5
                                  : "week" === b
                                  ? (f - e) / 6048e5
                                  : f)),
                    c ? g : t(g))
                  : NaN)
            : NaN;
    }
    function cc(a, b) {
        // difference in months
        var c,
            d,
            e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            f = a.clone().add(e, "months");
        //check for negative zero, return zero if negative zero
        // linear across the month
        // linear across the month
        return (
            b - f < 0
                ? ((c = a.clone().add(e - 1, "months")),
                  (d = (b - f) / (f - c)))
                : ((c = a.clone().add(e + 1, "months")),
                  (d = (b - f) / (c - f))),
            -(e + d) || 0
        );
    }
    function dc() {
        return this.clone()
            .locale("en")
            .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function ec() {
        var a = this.clone().utc();
        return 0 < a.year() && a.year() <= 9999
            ? z(Date.prototype.toISOString)
                ? this.toDate().toISOString()
                : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            : X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    }
    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function fc() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var a = "moment",
            b = "";
        this.isLocal() ||
            ((a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
            (b = "Z"));
        var c = "[" + a + '("]',
            d = 0 < this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            e = "-MM-DD[T]HH:mm:ss.SSS",
            f = b + '[")]';
        return this.format(c + d + e + f);
    }
    function gc(b) {
        b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
        var c = X(this, b);
        return this.localeData().postformat(c);
    }
    function hc(a, b) {
        return this.isValid() && ((s(a) && a.isValid()) || sb(a).isValid())
            ? Ob({ to: this, from: a }).locale(this.locale()).humanize(!b)
            : this.localeData().invalidDate();
    }
    function ic(a) {
        return this.from(sb(), a);
    }
    function jc(a, b) {
        return this.isValid() && ((s(a) && a.isValid()) || sb(a).isValid())
            ? Ob({ from: this, to: a }).locale(this.locale()).humanize(!b)
            : this.localeData().invalidDate();
    }
    function kc(a) {
        return this.to(sb(), a);
    }
    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function lc(a) {
        var b;
        return void 0 === a
            ? this._locale._abbr
            : ((b = bb(a)), null != b && (this._locale = b), this);
    }
    function mc() {
        return this._locale;
    }
    function nc(a) {
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch ((a = K(a))) {
            case "year":
                this.month(0); /* falls through */
            case "quarter":
            case "month":
                this.date(1); /* falls through */
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0); /* falls through */
            case "hour":
                this.minutes(0); /* falls through */
            case "minute":
                this.seconds(0); /* falls through */
            case "second":
                this.milliseconds(0);
        }
        // weeks are a special case
        // quarters are also special
        return (
            "week" === a && this.weekday(0),
            "isoWeek" === a && this.isoWeekday(1),
            "quarter" === a && this.month(3 * Math.floor(this.month() / 3)),
            this
        );
    }
    function oc(a) {
        // 'date' is an alias for 'day', so it should be considered as such.
        return (
            (a = K(a)),
            void 0 === a || "millisecond" === a
                ? this
                : ("date" === a && (a = "day"),
                  this.startOf(a)
                      .add(1, "isoWeek" === a ? "week" : a)
                      .subtract(1, "ms"))
        );
    }
    function pc() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
    }
    function qc() {
        return Math.floor(this.valueOf() / 1e3);
    }
    function rc() {
        return new Date(this.valueOf());
    }
    function sc() {
        var a = this;
        return [
            a.year(),
            a.month(),
            a.date(),
            a.hour(),
            a.minute(),
            a.second(),
            a.millisecond(),
        ];
    }
    function tc() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds(),
        };
    }
    function uc() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }
    function vc() {
        return n(this);
    }
    function wc() {
        return j({}, m(this));
    }
    function xc() {
        return m(this).overflow;
    }
    function yc() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }
    function zc(a, b) {
        U(0, [a, a.length], 0, b);
    }
    // MOMENTS
    function Ac(a) {
        return Ec.call(
            this,
            a,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }
    function Bc(a) {
        return Ec.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function Cc() {
        return xa(this.year(), 1, 4);
    }
    function Dc() {
        var a = this.localeData()._week;
        return xa(this.year(), a.dow, a.doy);
    }
    function Ec(a, b, c, d, e) {
        var f;
        return null == a
            ? wa(this, d, e).year
            : ((f = xa(a, d, e)),
              b > f && (b = f),
              Fc.call(this, a, b, c, d, e));
    }
    function Fc(a, b, c, d, e) {
        var f = va(a, b, c, d, e),
            g = ta(f.year, 0, f.dayOfYear);
        return (
            this.year(g.getUTCFullYear()),
            this.month(g.getUTCMonth()),
            this.date(g.getUTCDate()),
            this
        );
    }
    // MOMENTS
    function Gc(a) {
        return null == a
            ? Math.ceil((this.month() + 1) / 3)
            : this.month(3 * (a - 1) + (this.month() % 3));
    }
    // HELPERS
    // MOMENTS
    function Hc(a) {
        var b =
            Math.round(
                (this.clone().startOf("day") - this.clone().startOf("year")) /
                    864e5
            ) + 1;
        return null == a ? b : this.add(a - b, "d");
    }
    function Ic(a, b) {
        b[ge] = u(1e3 * ("0." + a));
    }
    // MOMENTS
    function Jc() {
        return this._isUTC ? "UTC" : "";
    }
    function Kc() {
        return this._isUTC ? "Coordinated Universal Time" : "";
    }
    function Lc(a) {
        return sb(1e3 * a);
    }
    function Mc() {
        return sb.apply(null, arguments).parseZone();
    }
    function Nc(a) {
        return a;
    }
    function Oc(a, b, c, d) {
        var e = bb(),
            f = k().set(d, b);
        return e[c](f, a);
    }
    function Pc(a, b, c) {
        if ((f(a) && ((b = a), (a = void 0)), (a = a || ""), null != b))
            return Oc(a, b, c, "month");
        var d,
            e = [];
        for (d = 0; d < 12; d++) e[d] = Oc(a, d, c, "month");
        return e;
    }
    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function Qc(a, b, c, d) {
        "boolean" == typeof a
            ? (f(b) && ((c = b), (b = void 0)), (b = b || ""))
            : ((b = a),
              (c = b),
              (a = !1),
              f(b) && ((c = b), (b = void 0)),
              (b = b || ""));
        var e = bb(),
            g = a ? e._week.dow : 0;
        if (null != c) return Oc(b, (c + g) % 7, d, "day");
        var h,
            i = [];
        for (h = 0; h < 7; h++) i[h] = Oc(b, (h + g) % 7, d, "day");
        return i;
    }
    function Rc(a, b) {
        return Pc(a, b, "months");
    }
    function Sc(a, b) {
        return Pc(a, b, "monthsShort");
    }
    function Tc(a, b, c) {
        return Qc(a, b, c, "weekdays");
    }
    function Uc(a, b, c) {
        return Qc(a, b, c, "weekdaysShort");
    }
    function Vc(a, b, c) {
        return Qc(a, b, c, "weekdaysMin");
    }
    function Wc() {
        var a = this._data;
        return (
            (this._milliseconds = Ze(this._milliseconds)),
            (this._days = Ze(this._days)),
            (this._months = Ze(this._months)),
            (a.milliseconds = Ze(a.milliseconds)),
            (a.seconds = Ze(a.seconds)),
            (a.minutes = Ze(a.minutes)),
            (a.hours = Ze(a.hours)),
            (a.months = Ze(a.months)),
            (a.years = Ze(a.years)),
            this
        );
    }
    function Xc(a, b, c, d) {
        var e = Ob(b, c);
        return (
            (a._milliseconds += d * e._milliseconds),
            (a._days += d * e._days),
            (a._months += d * e._months),
            a._bubble()
        );
    }
    // supports only 2.0-style add(1, 's') or add(duration)
    function Yc(a, b) {
        return Xc(this, a, b, 1);
    }
    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function Zc(a, b) {
        return Xc(this, a, b, -1);
    }
    function $c(a) {
        return a < 0 ? Math.floor(a) : Math.ceil(a);
    }
    function _c() {
        var a,
            b,
            c,
            d,
            e,
            f = this._milliseconds,
            g = this._days,
            h = this._months,
            i = this._data;
        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        // convert days to months
        // 12 months -> 1 year
        return (
            (f >= 0 && g >= 0 && h >= 0) ||
                (f <= 0 && g <= 0 && h <= 0) ||
                ((f += 864e5 * $c(bd(h) + g)), (g = 0), (h = 0)),
            (i.milliseconds = f % 1e3),
            (a = t(f / 1e3)),
            (i.seconds = a % 60),
            (b = t(a / 60)),
            (i.minutes = b % 60),
            (c = t(b / 60)),
            (i.hours = c % 24),
            (g += t(c / 24)),
            (e = t(ad(g))),
            (h += e),
            (g -= $c(bd(e))),
            (d = t(h / 12)),
            (h %= 12),
            (i.days = g),
            (i.months = h),
            (i.years = d),
            this
        );
    }
    function ad(a) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (4800 * a) / 146097;
    }
    function bd(a) {
        // the reverse of daysToMonths
        return (146097 * a) / 4800;
    }
    function cd(a) {
        var b,
            c,
            d = this._milliseconds;
        if (((a = K(a)), "month" === a || "year" === a))
            return (
                (b = this._days + d / 864e5),
                (c = this._months + ad(b)),
                "month" === a ? c : c / 12
            );
        switch (
            // handle milliseconds separately because of floating point math errors (issue #1867)
            ((b = this._days + Math.round(bd(this._months))), a)
        ) {
            case "week":
                return b / 7 + d / 6048e5;
            case "day":
                return b + d / 864e5;
            case "hour":
                return 24 * b + d / 36e5;
            case "minute":
                return 1440 * b + d / 6e4;
            case "second":
                return 86400 * b + d / 1e3;
            // Math.floor prevents floating point math errors here
            case "millisecond":
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error("Unknown unit " + a);
        }
    }
    // TODO: Use this.as('ms')?
    function dd() {
        return (
            this._milliseconds +
            864e5 * this._days +
            (this._months % 12) * 2592e6 +
            31536e6 * u(this._months / 12)
        );
    }
    function ed(a) {
        return function () {
            return this.as(a);
        };
    }
    function fd(a) {
        return (a = K(a)), this[a + "s"]();
    }
    function gd(a) {
        return function () {
            return this._data[a];
        };
    }
    function hd() {
        return t(this.days() / 7);
    }
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function id(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d);
    }
    function jd(a, b, c) {
        var d = Ob(a).abs(),
            e = of(d.as("s")),
            f = of(d.as("m")),
            g = of(d.as("h")),
            h = of(d.as("d")),
            i = of(d.as("M")),
            j = of(d.as("y")),
            k = (e < pf.s && ["s", e]) ||
                (f <= 1 && ["m"]) ||
                (f < pf.m && ["mm", f]) ||
                (g <= 1 && ["h"]) ||
                (g < pf.h && ["hh", g]) ||
                (h <= 1 && ["d"]) ||
                (h < pf.d && ["dd", h]) ||
                (i <= 1 && ["M"]) ||
                (i < pf.M && ["MM", i]) ||
                (j <= 1 && ["y"]) || ["yy", j];
        return (k[2] = b), (k[3] = +a > 0), (k[4] = c), id.apply(null, k);
    }
    // This function allows you to set the rounding function for relative time strings
    function kd(a) {
        return void 0 === a ? of : "function" == typeof a && ((of = a), !0);
    }
    // This function allows you to set a threshold for relative time strings
    function ld(a, b) {
        return void 0 !== pf[a] && (void 0 === b ? pf[a] : ((pf[a] = b), !0));
    }
    function md(a) {
        var b = this.localeData(),
            c = jd(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c);
    }
    function nd() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var a,
            b,
            c,
            d = qf(this._milliseconds) / 1e3,
            e = qf(this._days),
            f = qf(this._months);
        // 3600 seconds -> 60 minutes -> 1 hour
        (a = t(d / 60)),
            (b = t(a / 60)),
            (d %= 60),
            (a %= 60),
            // 12 months -> 1 year
            (c = t(f / 12)),
            (f %= 12);
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var g = c,
            h = f,
            i = e,
            j = b,
            k = a,
            l = d,
            m = this.asSeconds();
        return m
            ? (m < 0 ? "-" : "") +
                  "P" +
                  (g ? g + "Y" : "") +
                  (h ? h + "M" : "") +
                  (i ? i + "D" : "") +
                  (j || k || l ? "T" : "") +
                  (j ? j + "H" : "") +
                  (k ? k + "M" : "") +
                  (l ? l + "S" : "")
            : "P0D";
    }
    var od, pd;
    pd = Array.prototype.some
        ? Array.prototype.some
        : function (a) {
              for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
                  if (d in b && a.call(this, b[d], d, b)) return !0;
              return !1;
          };
    var qd = pd,
        rd = (a.momentProperties = []),
        sd = !1,
        td = {};
    (a.suppressDeprecationWarnings = !1), (a.deprecationHandler = null);
    var ud;
    ud = Object.keys
        ? Object.keys
        : function (a) {
              var b,
                  c = [];
              for (b in a) i(a, b) && c.push(b);
              return c;
          };
    var vd,
        wd = ud,
        xd = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
        },
        yd = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
        },
        zd = "Invalid date",
        Ad = "%d",
        Bd = /\d{1,2}/,
        Cd = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
        },
        Dd = {},
        Ed = {},
        Fd =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Gd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Hd = {},
        Id = {},
        Jd = /\d/,
        Kd = /\d\d/,
        Ld = /\d{3}/,
        Md = /\d{4}/,
        Nd = /[+-]?\d{6}/,
        Od = /\d\d?/,
        Pd = /\d\d\d\d?/,
        Qd = /\d\d\d\d\d\d?/,
        Rd = /\d{1,3}/,
        Sd = /\d{1,4}/,
        Td = /[+-]?\d{1,6}/,
        Ud = /\d+/,
        Vd = /[+-]?\d+/,
        Wd = /Z|[+-]\d\d:?\d\d/gi,
        Xd = /Z|[+-]\d\d(?::?\d\d)?/gi,
        Yd = /[+-]?\d+(\.\d{1,3})?/,
        Zd =
            /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        $d = {},
        _d = {},
        ae = 0,
        be = 1,
        ce = 2,
        de = 3,
        ee = 4,
        fe = 5,
        ge = 6,
        he = 7,
        ie = 8;
    vd = Array.prototype.indexOf
        ? Array.prototype.indexOf
        : function (a) {
              // I know
              var b;
              for (b = 0; b < this.length; ++b) if (this[b] === a) return b;
              return -1;
          };
    var je = vd;
    // FORMATTING
    U("M", ["MM", 2], "Mo", function () {
        return this.month() + 1;
    }),
        U("MMM", 0, 0, function (a) {
            return this.localeData().monthsShort(this, a);
        }),
        U("MMMM", 0, 0, function (a) {
            return this.localeData().months(this, a);
        }),
        // ALIASES
        J("month", "M"),
        // PRIORITY
        M("month", 8),
        // PARSING
        Z("M", Od),
        Z("MM", Od, Kd),
        Z("MMM", function (a, b) {
            return b.monthsShortRegex(a);
        }),
        Z("MMMM", function (a, b) {
            return b.monthsRegex(a);
        }),
        ba(["M", "MM"], function (a, b) {
            b[be] = u(a) - 1;
        }),
        ba(["MMM", "MMMM"], function (a, b, c, d) {
            var e = c._locale.monthsParse(a, d, c._strict);
            // if we didn't find a month name, mark the date as invalid.
            null != e ? (b[be] = e) : (m(c).invalidMonth = a);
        });
    // LOCALES
    var ke = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        le =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
            ),
        me = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        ne = Zd,
        oe = Zd;
    // FORMATTING
    U("Y", 0, 0, function () {
        var a = this.year();
        return a <= 9999 ? "" + a : "+" + a;
    }),
        U(0, ["YY", 2], 0, function () {
            return this.year() % 100;
        }),
        U(0, ["YYYY", 4], 0, "year"),
        U(0, ["YYYYY", 5], 0, "year"),
        U(0, ["YYYYYY", 6, !0], 0, "year"),
        // ALIASES
        J("year", "y"),
        // PRIORITIES
        M("year", 1),
        // PARSING
        Z("Y", Vd),
        Z("YY", Od, Kd),
        Z("YYYY", Sd, Md),
        Z("YYYYY", Td, Nd),
        Z("YYYYYY", Td, Nd),
        ba(["YYYYY", "YYYYYY"], ae),
        ba("YYYY", function (b, c) {
            c[ae] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b);
        }),
        ba("YY", function (b, c) {
            c[ae] = a.parseTwoDigitYear(b);
        }),
        ba("Y", function (a, b) {
            b[ae] = parseInt(a, 10);
        }),
        // HOOKS
        (a.parseTwoDigitYear = function (a) {
            return u(a) + (u(a) > 68 ? 1900 : 2e3);
        });
    // MOMENTS
    var pe = O("FullYear", !0);
    // FORMATTING
    U("w", ["ww", 2], "wo", "week"),
        U("W", ["WW", 2], "Wo", "isoWeek"),
        // ALIASES
        J("week", "w"),
        J("isoWeek", "W"),
        // PRIORITIES
        M("week", 5),
        M("isoWeek", 5),
        // PARSING
        Z("w", Od),
        Z("ww", Od, Kd),
        Z("W", Od),
        Z("WW", Od, Kd),
        ca(["w", "ww", "W", "WW"], function (a, b, c, d) {
            b[d.substr(0, 1)] = u(a);
        });
    var qe = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6,
    };
    // FORMATTING
    U("d", 0, "do", "day"),
        U("dd", 0, 0, function (a) {
            return this.localeData().weekdaysMin(this, a);
        }),
        U("ddd", 0, 0, function (a) {
            return this.localeData().weekdaysShort(this, a);
        }),
        U("dddd", 0, 0, function (a) {
            return this.localeData().weekdays(this, a);
        }),
        U("e", 0, 0, "weekday"),
        U("E", 0, 0, "isoWeekday"),
        // ALIASES
        J("day", "d"),
        J("weekday", "e"),
        J("isoWeekday", "E"),
        // PRIORITY
        M("day", 11),
        M("weekday", 11),
        M("isoWeekday", 11),
        // PARSING
        Z("d", Od),
        Z("e", Od),
        Z("E", Od),
        Z("dd", function (a, b) {
            return b.weekdaysMinRegex(a);
        }),
        Z("ddd", function (a, b) {
            return b.weekdaysShortRegex(a);
        }),
        Z("dddd", function (a, b) {
            return b.weekdaysRegex(a);
        }),
        ca(["dd", "ddd", "dddd"], function (a, b, c, d) {
            var e = c._locale.weekdaysParse(a, d, c._strict);
            // if we didn't get a weekday name, mark the date as invalid
            null != e ? (b.d = e) : (m(c).invalidWeekday = a);
        }),
        ca(["d", "e", "E"], function (a, b, c, d) {
            b[d] = u(a);
        });
    // LOCALES
    var re = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
            "_"
        ),
        se = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        te = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        ue = Zd,
        ve = Zd,
        we = Zd;
    U("H", ["HH", 2], 0, "hour"),
        U("h", ["hh", 2], 0, Ra),
        U("k", ["kk", 2], 0, Sa),
        U("hmm", 0, 0, function () {
            return "" + Ra.apply(this) + T(this.minutes(), 2);
        }),
        U("hmmss", 0, 0, function () {
            return (
                "" +
                Ra.apply(this) +
                T(this.minutes(), 2) +
                T(this.seconds(), 2)
            );
        }),
        U("Hmm", 0, 0, function () {
            return "" + this.hours() + T(this.minutes(), 2);
        }),
        U("Hmmss", 0, 0, function () {
            return (
                "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2)
            );
        }),
        Ta("a", !0),
        Ta("A", !1),
        // ALIASES
        J("hour", "h"),
        // PRIORITY
        M("hour", 13),
        Z("a", Ua),
        Z("A", Ua),
        Z("H", Od),
        Z("h", Od),
        Z("HH", Od, Kd),
        Z("hh", Od, Kd),
        Z("hmm", Pd),
        Z("hmmss", Qd),
        Z("Hmm", Pd),
        Z("Hmmss", Qd),
        ba(["H", "HH"], de),
        ba(["a", "A"], function (a, b, c) {
            (c._isPm = c._locale.isPM(a)), (c._meridiem = a);
        }),
        ba(["h", "hh"], function (a, b, c) {
            (b[de] = u(a)), (m(c).bigHour = !0);
        }),
        ba("hmm", function (a, b, c) {
            var d = a.length - 2;
            (b[de] = u(a.substr(0, d))),
                (b[ee] = u(a.substr(d))),
                (m(c).bigHour = !0);
        }),
        ba("hmmss", function (a, b, c) {
            var d = a.length - 4,
                e = a.length - 2;
            (b[de] = u(a.substr(0, d))),
                (b[ee] = u(a.substr(d, 2))),
                (b[fe] = u(a.substr(e))),
                (m(c).bigHour = !0);
        }),
        ba("Hmm", function (a, b, c) {
            var d = a.length - 2;
            (b[de] = u(a.substr(0, d))), (b[ee] = u(a.substr(d)));
        }),
        ba("Hmmss", function (a, b, c) {
            var d = a.length - 4,
                e = a.length - 2;
            (b[de] = u(a.substr(0, d))),
                (b[ee] = u(a.substr(d, 2))),
                (b[fe] = u(a.substr(e)));
        });
    var xe,
        ye = /[ap]\.?m?\.?/i,
        ze = O("Hours", !0),
        Ae = {
            calendar: xd,
            longDateFormat: yd,
            invalidDate: zd,
            ordinal: Ad,
            ordinalParse: Bd,
            relativeTime: Cd,
            months: le,
            monthsShort: me,
            week: qe,
            weekdays: re,
            weekdaysMin: te,
            weekdaysShort: se,
            meridiemParse: ye,
        },
        Be = {},
        Ce = {},
        De =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Ee =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Fe = /Z|[+-]\d\d(?::?\d\d)?/,
        Ge = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            // YYYYMM is NOT allowed by the standard
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
        ],
        He = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
        ],
        Ie = /^\/?Date\((\-?\d+)/i;
    (a.createFromInputFallback = x(
        "value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function (a) {
            a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
        }
    )),
        // constant that refers to the ISO standard
        (a.ISO_8601 = function () {});
    var Je = x(
            "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
                var a = sb.apply(null, arguments);
                return this.isValid() && a.isValid()
                    ? a < this
                        ? this
                        : a
                    : o();
            }
        ),
        Ke = x(
            "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
                var a = sb.apply(null, arguments);
                return this.isValid() && a.isValid()
                    ? a > this
                        ? this
                        : a
                    : o();
            }
        ),
        Le = function () {
            return Date.now ? Date.now() : +new Date();
        };
    zb("Z", ":"),
        zb("ZZ", ""),
        // PARSING
        Z("Z", Xd),
        Z("ZZ", Xd),
        ba(["Z", "ZZ"], function (a, b, c) {
            (c._useUTC = !0), (c._tzm = Ab(Xd, a));
        });
    // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var Me = /([\+\-]|\d\d)/gi;
    // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    a.updateOffset = function () {};
    // ASP.NET json date format regex
    var Ne = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Oe =
            /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Ob.fn = wb.prototype;
    var Pe = Sb(1, "add"),
        Qe = Sb(-1, "subtract");
    (a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
        (a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
    var Re = x(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function (a) {
            return void 0 === a ? this.localeData() : this.locale(a);
        }
    );
    // FORMATTING
    U(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100;
    }),
        U(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
        }),
        zc("gggg", "weekYear"),
        zc("ggggg", "weekYear"),
        zc("GGGG", "isoWeekYear"),
        zc("GGGGG", "isoWeekYear"),
        // ALIASES
        J("weekYear", "gg"),
        J("isoWeekYear", "GG"),
        // PRIORITY
        M("weekYear", 1),
        M("isoWeekYear", 1),
        // PARSING
        Z("G", Vd),
        Z("g", Vd),
        Z("GG", Od, Kd),
        Z("gg", Od, Kd),
        Z("GGGG", Sd, Md),
        Z("gggg", Sd, Md),
        Z("GGGGG", Td, Nd),
        Z("ggggg", Td, Nd),
        ca(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
            b[d.substr(0, 2)] = u(a);
        }),
        ca(["gg", "GG"], function (b, c, d, e) {
            c[e] = a.parseTwoDigitYear(b);
        }),
        // FORMATTING
        U("Q", 0, "Qo", "quarter"),
        // ALIASES
        J("quarter", "Q"),
        // PRIORITY
        M("quarter", 7),
        // PARSING
        Z("Q", Jd),
        ba("Q", function (a, b) {
            b[be] = 3 * (u(a) - 1);
        }),
        // FORMATTING
        U("D", ["DD", 2], "Do", "date"),
        // ALIASES
        J("date", "D"),
        // PRIOROITY
        M("date", 9),
        // PARSING
        Z("D", Od),
        Z("DD", Od, Kd),
        Z("Do", function (a, b) {
            return a ? b._ordinalParse : b._ordinalParseLenient;
        }),
        ba(["D", "DD"], ce),
        ba("Do", function (a, b) {
            b[ce] = u(a.match(Od)[0], 10);
        });
    // MOMENTS
    var Se = O("Date", !0);
    // FORMATTING
    U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
        // ALIASES
        J("dayOfYear", "DDD"),
        // PRIORITY
        M("dayOfYear", 4),
        // PARSING
        Z("DDD", Rd),
        Z("DDDD", Ld),
        ba(["DDD", "DDDD"], function (a, b, c) {
            c._dayOfYear = u(a);
        }),
        // FORMATTING
        U("m", ["mm", 2], 0, "minute"),
        // ALIASES
        J("minute", "m"),
        // PRIORITY
        M("minute", 14),
        // PARSING
        Z("m", Od),
        Z("mm", Od, Kd),
        ba(["m", "mm"], ee);
    // MOMENTS
    var Te = O("Minutes", !1);
    // FORMATTING
    U("s", ["ss", 2], 0, "second"),
        // ALIASES
        J("second", "s"),
        // PRIORITY
        M("second", 15),
        // PARSING
        Z("s", Od),
        Z("ss", Od, Kd),
        ba(["s", "ss"], fe);
    // MOMENTS
    var Ue = O("Seconds", !1);
    // FORMATTING
    U("S", 0, 0, function () {
        return ~~(this.millisecond() / 100);
    }),
        U(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10);
        }),
        U(0, ["SSS", 3], 0, "millisecond"),
        U(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond();
        }),
        U(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond();
        }),
        U(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond();
        }),
        U(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond();
        }),
        U(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond();
        }),
        U(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond();
        }),
        // ALIASES
        J("millisecond", "ms"),
        // PRIORITY
        M("millisecond", 16),
        // PARSING
        Z("S", Rd, Jd),
        Z("SS", Rd, Kd),
        Z("SSS", Rd, Ld);
    var Ve;
    for (Ve = "SSSS"; Ve.length <= 9; Ve += "S") Z(Ve, Ud);
    for (Ve = "S"; Ve.length <= 9; Ve += "S") ba(Ve, Ic);
    // MOMENTS
    var We = O("Milliseconds", !1);
    // FORMATTING
    U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
    var Xe = r.prototype;
    (Xe.add = Pe),
        (Xe.calendar = Vb),
        (Xe.clone = Wb),
        (Xe.diff = bc),
        (Xe.endOf = oc),
        (Xe.format = gc),
        (Xe.from = hc),
        (Xe.fromNow = ic),
        (Xe.to = jc),
        (Xe.toNow = kc),
        (Xe.get = R),
        (Xe.invalidAt = xc),
        (Xe.isAfter = Xb),
        (Xe.isBefore = Yb),
        (Xe.isBetween = Zb),
        (Xe.isSame = $b),
        (Xe.isSameOrAfter = _b),
        (Xe.isSameOrBefore = ac),
        (Xe.isValid = vc),
        (Xe.lang = Re),
        (Xe.locale = lc),
        (Xe.localeData = mc),
        (Xe.max = Ke),
        (Xe.min = Je),
        (Xe.parsingFlags = wc),
        (Xe.set = S),
        (Xe.startOf = nc),
        (Xe.subtract = Qe),
        (Xe.toArray = sc),
        (Xe.toObject = tc),
        (Xe.toDate = rc),
        (Xe.toISOString = ec),
        (Xe.inspect = fc),
        (Xe.toJSON = uc),
        (Xe.toString = dc),
        (Xe.unix = qc),
        (Xe.valueOf = pc),
        (Xe.creationData = yc),
        // Year
        (Xe.year = pe),
        (Xe.isLeapYear = ra),
        // Week Year
        (Xe.weekYear = Ac),
        (Xe.isoWeekYear = Bc),
        // Quarter
        (Xe.quarter = Xe.quarters = Gc),
        // Month
        (Xe.month = ka),
        (Xe.daysInMonth = la),
        // Week
        (Xe.week = Xe.weeks = Ba),
        (Xe.isoWeek = Xe.isoWeeks = Ca),
        (Xe.weeksInYear = Dc),
        (Xe.isoWeeksInYear = Cc),
        // Day
        (Xe.date = Se),
        (Xe.day = Xe.days = Ka),
        (Xe.weekday = La),
        (Xe.isoWeekday = Ma),
        (Xe.dayOfYear = Hc),
        // Hour
        (Xe.hour = Xe.hours = ze),
        // Minute
        (Xe.minute = Xe.minutes = Te),
        // Second
        (Xe.second = Xe.seconds = Ue),
        // Millisecond
        (Xe.millisecond = Xe.milliseconds = We),
        // Offset
        (Xe.utcOffset = Db),
        (Xe.utc = Fb),
        (Xe.local = Gb),
        (Xe.parseZone = Hb),
        (Xe.hasAlignedHourOffset = Ib),
        (Xe.isDST = Jb),
        (Xe.isLocal = Lb),
        (Xe.isUtcOffset = Mb),
        (Xe.isUtc = Nb),
        (Xe.isUTC = Nb),
        // Timezone
        (Xe.zoneAbbr = Jc),
        (Xe.zoneName = Kc),
        // Deprecations
        (Xe.dates = x("dates accessor is deprecated. Use date instead.", Se)),
        (Xe.months = x("months accessor is deprecated. Use month instead", ka)),
        (Xe.years = x("years accessor is deprecated. Use year instead", pe)),
        (Xe.zone = x(
            "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
            Eb
        )),
        (Xe.isDSTShifted = x(
            "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
            Kb
        ));
    var Ye = C.prototype;
    (Ye.calendar = D),
        (Ye.longDateFormat = E),
        (Ye.invalidDate = F),
        (Ye.ordinal = G),
        (Ye.preparse = Nc),
        (Ye.postformat = Nc),
        (Ye.relativeTime = H),
        (Ye.pastFuture = I),
        (Ye.set = A),
        // Month
        (Ye.months = fa),
        (Ye.monthsShort = ga),
        (Ye.monthsParse = ia),
        (Ye.monthsRegex = na),
        (Ye.monthsShortRegex = ma),
        // Week
        (Ye.week = ya),
        (Ye.firstDayOfYear = Aa),
        (Ye.firstDayOfWeek = za),
        // Day of Week
        (Ye.weekdays = Fa),
        (Ye.weekdaysMin = Ha),
        (Ye.weekdaysShort = Ga),
        (Ye.weekdaysParse = Ja),
        (Ye.weekdaysRegex = Na),
        (Ye.weekdaysShortRegex = Oa),
        (Ye.weekdaysMinRegex = Pa),
        // Hours
        (Ye.isPM = Va),
        (Ye.meridiem = Wa),
        $a("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (a) {
                var b = a % 10,
                    c =
                        1 === u((a % 100) / 10)
                            ? "th"
                            : 1 === b
                            ? "st"
                            : 2 === b
                            ? "nd"
                            : 3 === b
                            ? "rd"
                            : "th";
                return a + c;
            },
        }),
        // Side effect imports
        (a.lang = x(
            "moment.lang is deprecated. Use moment.locale instead.",
            $a
        )),
        (a.langData = x(
            "moment.langData is deprecated. Use moment.localeData instead.",
            bb
        ));
    var Ze = Math.abs,
        $e = ed("ms"),
        _e = ed("s"),
        af = ed("m"),
        bf = ed("h"),
        cf = ed("d"),
        df = ed("w"),
        ef = ed("M"),
        ff = ed("y"),
        gf = gd("milliseconds"),
        hf = gd("seconds"),
        jf = gd("minutes"),
        kf = gd("hours"),
        lf = gd("days"),
        mf = gd("months"),
        nf = gd("years"),
        of = Math.round,
        pf = {
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month
            M: 11,
        },
        qf = Math.abs,
        rf = wb.prototype;
    // Deprecations
    // Side effect imports
    // FORMATTING
    // PARSING
    // Side effect imports
    return (
        (rf.abs = Wc),
        (rf.add = Yc),
        (rf.subtract = Zc),
        (rf.as = cd),
        (rf.asMilliseconds = $e),
        (rf.asSeconds = _e),
        (rf.asMinutes = af),
        (rf.asHours = bf),
        (rf.asDays = cf),
        (rf.asWeeks = df),
        (rf.asMonths = ef),
        (rf.asYears = ff),
        (rf.valueOf = dd),
        (rf._bubble = _c),
        (rf.get = fd),
        (rf.milliseconds = gf),
        (rf.seconds = hf),
        (rf.minutes = jf),
        (rf.hours = kf),
        (rf.days = lf),
        (rf.weeks = hd),
        (rf.months = mf),
        (rf.years = nf),
        (rf.humanize = md),
        (rf.toISOString = nd),
        (rf.toString = nd),
        (rf.toJSON = nd),
        (rf.locale = lc),
        (rf.localeData = mc),
        (rf.toIsoString = x(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            nd
        )),
        (rf.lang = Re),
        U("X", 0, 0, "unix"),
        U("x", 0, 0, "valueOf"),
        Z("x", Vd),
        Z("X", Yd),
        ba("X", function (a, b, c) {
            c._d = new Date(1e3 * parseFloat(a, 10));
        }),
        ba("x", function (a, b, c) {
            c._d = new Date(u(a));
        }),
        (a.version = "2.16.0"),
        b(sb),
        (a.fn = Xe),
        (a.min = ub),
        (a.max = vb),
        (a.now = Le),
        (a.utc = k),
        (a.unix = Lc),
        (a.months = Rc),
        (a.isDate = g),
        (a.locale = $a),
        (a.invalid = o),
        (a.duration = Ob),
        (a.isMoment = s),
        (a.weekdays = Tc),
        (a.parseZone = Mc),
        (a.localeData = bb),
        (a.isDuration = xb),
        (a.monthsShort = Sc),
        (a.weekdaysMin = Vc),
        (a.defineLocale = _a),
        (a.updateLocale = ab),
        (a.locales = cb),
        (a.weekdaysShort = Uc),
        (a.normalizeUnits = K),
        (a.relativeTimeRounding = kd),
        (a.relativeTimeThreshold = ld),
        (a.calendarFormat = Ub),
        (a.prototype = Xe),
        a
    );
});
!(function () {
    const n = document.querySelectorAll(".js_live_chat_link");
    n.forEach((n) => {
        n.onclick = () => {
            if (window.chatbot && window.chatbot.maximize) {
                window.chatbot.maximize();
                return;
            }
            if (n.dataset.url) {
                window.open(n.dataset.url, "live-chat");
                return;
            }
            if (window.Tawk_API && window.Tawk_API.maximize) {
                window.Tawk_API.maximize();
                return;
            }
            if (window.LC_API && window.LC_API.open_chat_window) {
                window.LC_API.open_chat_window();
                return;
            }
            if (window.zE && window.zE.activate) {
                window.zE.activate({ hideOnClose: !1 });
                return;
            }
            if (
                window.beacon &&
                window.beacon.chat &&
                window.beacon.chat.showChatCtrl
            ) {
                window.beacon.chat.showChatCtrl();
                return;
            }
        };
    });
})();
$(() => {
    window.changeLanguage = (n) => {
        const t = new Date(),
            i = t.setTime(t.getTime() + 6048e5),
            r = [
                `language=${n}`,
                `expires=${new Date(i)}`,
                `path=/`,
                `SameSite=Strict`,
            ];
        document.cookie = r.join(";");
        location.reload();
    };
    const n = document.querySelector("#language_selector_trigger");
    if (n) {
        const t = document.querySelectorAll(".language_selector");
        n.onclick = () => {
            if (!n.dataset.active) {
                n.dataset.active = !0;
                return;
            }
            n.dataset.active = !JSON.parse(n.dataset.active);
        };
        Array.prototype.slice.call(t).forEach((t) => {
            t.onclick = () => {
                if (t.dataset.language === n.dataset.language) {
                    n.dataset.active = !1;
                    return;
                }
                window.changeLanguage(t.dataset.language);
            };
        });
    }
});
$(() => {
    const i = new Set(),
        t = () => {
            i.forEach((n) => n.close()), i.clear();
        };
    window.closeWindows = t;
    window.closeWindowsAndIframe = () => {
        t();
        const n = document.querySelector("#game_iframe");
        n && (window.location = "/home");
    };
    window.openPopup = (n, r) => {
        t();
        const u = screen.availWidth / 1.5,
            f = screen.availHeight / 1.5,
            e = parseInt(screen.availWidth / 2 - u / 2, 10),
            o = parseInt(screen.availHeight / 2 - f / 2, 10),
            s =
                "width=" +
                u +
                ",height=" +
                f +
                ",status,resizable,left=" +
                e +
                ",top=" +
                o +
                "screenX=" +
                e +
                ",screenY=" +
                o;
        i.add(window.open(n, r, s));
    };
    window.openNewTab = (n, r) => {
        t(), i.add(window.open(n, r));
    };
    window.dispatchInternally = (n) => {
        t(), (window.location = n);
    };
    const n = document.querySelector("#popup_modal"),
        s = document.querySelector("#popup_modal_title"),
        u = document.querySelector("#popup_modal_body"),
        f = document.querySelector("#popup_modal_dismiss_button"),
        e = document.querySelector("#popup_modal_cancel_button"),
        r = document.querySelector("#popup_modal_confirm_button"),
        o = [];
    window.registerPopup = ({
        content: t,
        title: l,
        onClose: h,
        onConfirm: c,
        cssClass: i,
    }) => {
        (n.dataset.title = l || ""),
            (s.innerText = l || ""),
            (u.innerHTML = t),
            (f.style.display = ""),
            (e.style.display = "none"),
            (r.style.display = "none"),
            (r.onclick = null),
            h && o.push(h),
            c &&
                ((f.style.display = "none"),
                (e.style.display = ""),
                (r.style.display = ""),
                (r.onclick = c)),
            (n.className = "modal popup-modal"),
            i && n.classList.add(i),
            $(n).modal("show");
    };
    $(n).on("hidden.bs.modal", () => {
        const n = o.pop();
        n && n();
    });
    u.childElementCount > 0 &&
        ($(n).modal("show"), (n.style.display = "block"));
    window.setInnerHtmlWithScripts = (n, t) => {
        (n.innerHTML = t),
            n.querySelectorAll("script").forEach((n) => {
                const t = document.createElement("script");
                Array.from(n.attributes).forEach((n) => {
                    t.setAttribute(n.name, n.value);
                });
                const i = document.createTextNode(n.innerHTML);
                t.appendChild(i);
                n.parentNode.replaceChild(t, n);
            });
    };
});
$(() => {
    const n = [];
    setInterval(() => {
        n.forEach((n) => n.update());
    }, 1e3);
    window.initializeExpirations = (t) => {
        const i = document.querySelectorAll(t);
        i.forEach((t) => {
            if (t.dataset.expirationDate) {
                const i = {
                        time:
                            (Date.parse(t.dataset.expirationDate) -
                                Date.now()) /
                            1e3,
                        elements: {
                            seconds: t.querySelector('[data-value="seconds"]'),
                            minutes: t.querySelector('[data-value="minutes"]'),
                            hours: t.querySelector('[data-value="hours"]'),
                            days: t.querySelector('[data-value="days"]'),
                        },
                    },
                    r = (n, t) => {
                        const i = n.querySelectorAll("[data-time-fragment]");
                        if (i.length) {
                            i.forEach((n, i) => (n.innerText = t[i]));
                            return;
                        }
                        n.innerText = t;
                    };
                i.update = () => {
                    i.time -= 1;
                    const n = i.time < 0 ? 0 : i.time,
                        t = n / 60,
                        u = t / 60,
                        f = u / 24;
                    if (i.elements.seconds) {
                        const t = Math.floor(n % 60)
                            .toString()
                            .padStart(2, "0");
                        r(i.elements.seconds, t);
                    }
                    if (i.elements.minutes) {
                        const n = Math.floor(t % 60)
                            .toString()
                            .padStart(2, "0");
                        r(i.elements.minutes, n);
                    }
                    if (i.elements.hours) {
                        const n = Math.floor(u % 24)
                            .toString()
                            .padStart(2, "0");
                        r(i.elements.hours, n);
                    }
                    if (i.elements.days) {
                        const n = Math.floor(f).toString().padStart(2, "0");
                        r(i.elements.days, n);
                    }
                };
                n.push(i);
            }
        });
    };
    window.initializeExpirations(".expiration_countdown");
});
$(() => {
    const n = ({ button: n, image: t }) => {
        n &&
            t &&
            (n.onclick = () => {
                let i = "/captcha/refresh";
                n.dataset.captchaOrigin && (i += "/" + n.dataset.captchaOrigin);
                t.src = `${i}?${Math.random()}`;
            });
    };
    n({
        button: document.querySelector("#refresh_captcha_button"),
        image: document.querySelector("#captcha_image"),
    });
    const t = document.querySelectorAll(".captcha_container");
    Array.prototype.slice.call(t).forEach((t) => {
        n({
            button: t.querySelector(".refresh_captcha_button"),
            image: t.querySelector(".captcha_image"),
        });
    });
});
!(function (i) {
    i.fn.easyTicker = function (n) {
        n = i.extend(
            {
                direction: "up",
                easing: "swing",
                speed: "slow",
                interval: 2e3,
                height: "auto",
                visible: 0,
                mousePause: 0,
                controls: { up: "", down: "", toggle: "" },
            },
            n
        );
        var t = 0,
            e = i("body"),
            s = i(n.controls.up),
            o = i(n.controls.down),
            c = i(n.controls.toggle),
            a = function (t, e, s) {
                if (t.is(":visible")) {
                    if ("up" == s)
                        var o = ":first-child",
                            c = "-=",
                            a = "appendTo";
                    else (o = ":last-child"), (c = "+="), (a = "prependTo");
                    var r = i(e).children(o),
                        u = r.outerHeight();
                    i(e)
                        .stop(!0, !0)
                        .animate(
                            { top: c + u + "px" },
                            n.speed,
                            n.easing,
                            function () {
                                r.hide()[a](e).fadeIn(),
                                    i(e).css("top", 0),
                                    0 != n.visible &&
                                        "auto" == n.height &&
                                        l(t, e);
                            }
                        );
                }
            },
            r = function (i, s) {
                (0 == c.length || c.hasClass("et-run")) &&
                    (t = setInterval(function () {
                        1 == e.attr("data-focus") && a(i, s, n.direction);
                    }, n.interval));
            },
            u = function (i) {
                clearInterval(t);
            },
            l = function (t, e) {
                var s = 0;
                i(e)
                    .children(":lt(" + n.visible + ")")
                    .each(function () {
                        s += i(this).outerHeight();
                    }),
                    t.stop(!0, !0).animate({ height: s }, n.speed);
            },
            h = function (n, t) {
                var e = 0,
                    s = n.css("display");
                return (
                    n.css("display", "block"),
                    i(t)
                        .children()
                        .each(function () {
                            e += i(this).outerHeight();
                        }),
                    n.css("display", s),
                    e
                );
            };
        function d() {
            e.attr("data-focus", 0);
        }
        function f() {
            e.attr("data-focus", 1);
        }
        return (
            i(window).bind("focus mouseover", f),
            i(window).bind("blur", d),
            this.each(function () {
                var t = i(this),
                    e = t.children(":first-child");
                !(function (i, t) {
                    t.children().css("margin", 0).children().css("margin", 0),
                        i.css({
                            position: "relative",
                            height: "auto" == n.height ? h(i, t) : n.height,
                            overflow: "hidden",
                        }),
                        t
                            .css({ position: "absolute", margin: 0 })
                            .children()
                            .css("margin", 0),
                        0 != n.visible && "auto" == n.height && l(i, t),
                        c.addClass("et-run"),
                        r(i, t);
                })(t, e),
                    1 == n.mousePause &&
                        t
                            .mouseover(function () {
                                u();
                            })
                            .mouseleave(function () {
                                r(t, e);
                            }),
                    c.on("click", function () {
                        i(this).hasClass("et-run")
                            ? (u(), i(this).removeClass("et-run"))
                            : (i(this).addClass("et-run"), r(t, e));
                    }),
                    s.on("click", function () {
                        a(t, e, "up");
                    }),
                    o.on("click", function () {
                        a(t, e, "down");
                    });
            })
        );
    };
})(jQuery);
$(() => {
    const i = document.querySelector("#progressive_jackpot");
    if (i && i.dataset.progressiveJackpotUrl) {
        const t = { refresh: 4e3, update: 500 },
            n = { current: null, gap: 0.05 },
            r = async () => {
                await window.$.ajax({
                    type: "GET",
                    url:
                        i.dataset.progressiveJackpotUrl +
                        "/progressive-jackpot",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: (i) => {
                        if (isFinite(i) != !1 && !(i <= 0)) {
                            if (n.current === null) {
                                n.current = i - n.gap * (t.refresh / t.update);
                                return;
                            }
                            n.gap = (i - n.current) / (t.refresh / t.update);
                        }
                    },
                    complete: () => {
                        setTimeout(r, t.refresh);
                    },
                });
            };
        r();
        const u = () => {
            let r = "UPDATING";
            n.current !== null &&
                ((n.current += n.gap),
                (r = n.current.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                })));
            i.innerText = r;
            setTimeout(u, t.update);
        };
        u();
        const f = document.querySelector(".jackpot_currency");
        f && (f.innerText = "IDR");
        const e = document.querySelectorAll(
            "#progressive_jackpot_counter [data-digit]"
        );
        if (e.length > 0)
            setInterval(function () {
                const n = parseInt(i.innerText.replace(/,/gs, ""), 10);
                Array.prototype.slice
                    .call(e)
                    .reverse()
                    .forEach((t, i) => {
                        const r = Math.floor((n / Math.pow(10, i)) % 10);
                        isNaN(r) ||
                            (t.dataset.digit !== r.toString() &&
                                ((t.dataset.digit = r),
                                t.classList.remove("animate"),
                                void t.offsetWidth,
                                t.classList.add("animate")));
                    });
            }, 1e3);
    }
});
$(() => {
    const n = document.querySelector("#download_apk");
    if (n) {
        const t = n.querySelector(":scope > div:first-child"),
            i = n.querySelector(":scope > div:last-child"),
            f = () => {
                const i = n.getBoundingClientRect(),
                    t = 1 - i.top / window.innerHeight;
                return t > 1 ? 1 - t : t;
            },
            r = () => {
                const n = f();
                n > 0.4 &&
                    ((t.style.transform = `translateX(0%)`),
                    (i.style.transform = `translateX(0%)`),
                    (t.style.opacity = 1),
                    (i.style.opacity = 1));
            },
            u = document.querySelector("#scroll_container");
        if (u) {
            u.addEventListener("scroll", r);
            return;
        }
        window.addEventListener("scroll", r);
    }
});
$(() => {
    const n = document.getElementById("game_list"),
        t = () => {
            n &&
                (n.onclick = (n) => {
                    if (n.target.className === "favourite-game-btn") {
                        let t = "";
                        t = n.target.checked
                            ? "/game/new-favourite"
                            : "/game/remove-favourite";
                        $.ajax({
                            type: "POST",
                            data: JSON.stringify({
                                Provider: n.target.dataset.provider,
                                GameCode: n.target.value,
                            }),
                            url: t,
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: (t) => {
                                t.errorCode != 0 &&
                                    ((n.target.checked = !n.target.checked),
                                    registerPopup({
                                        content: `Unable to update favourite game. ${t.message}`,
                                    }));
                            },
                            error: () => {
                                (n.target.checked = !n.target.checked),
                                    registerPopup({
                                        content:
                                            "Unable to update favourite game.",
                                    });
                            },
                        });
                    }
                });
        };
    t();
});
$(() => {
    window.initializeCopyAccountNumber = (n) => {
        const t = document.querySelectorAll(".copy_account_number_button");
        t.forEach((t) => {
            $(t).popover({
                content: n.translations.copied,
                placement: "top",
                trigger: "manual",
            }),
                (t.onclick = () => {
                    if (navigator.clipboard) {
                        const n = t.previousElementSibling;
                        navigator.clipboard
                            .writeText(n.innerText.replaceAll("-", ""))
                            .then(() => {
                                const n = $(t);
                                n.popover("show");
                                setTimeout(() => n.popover("hide"), 500);
                            })
                            .catch((n) =>
                                console.log(
                                    "Error when copying account number: " + n
                                )
                            );
                    }
                });
        });
    };
});
$(() => {
    (window.readCookie = (n) => {
        const t = document.cookie.split(";");
        for (let i = 0; i < t.length; i += 1) {
            const [r, u] = t[i].split("=");
            if (r.trim() === n.trim()) return u;
        }
        return null;
    }),
        (window.writeCookie = (n, t) => {
            const i = new Date();
            i.setMonth(i.getMonth() + 1);
            document.cookie = `${n}=${
                t || ""
            }; Path=/; expires=${i.toUTCString()};`;
        });
});
/*! Bootstrap Carousel Swipe jQuery plugin v1.1 | https://github.com/maaaaark/bcSwipe | MIT License */
!(function (t) {
    t.fn.bcSwipe = function (e) {
        var n = { threshold: 50 };
        return (
            e && t.extend(n, e),
            this.each(function () {
                function e(t) {
                    1 == t.touches.length &&
                        ((u = t.touches[0].pageX),
                        (c = !0),
                        this.addEventListener("touchmove", i, !1));
                }
                function i(e) {
                    if (c) {
                        var i = e.touches[0].pageX,
                            r = u - i;
                        if (Math.abs(r) >= n.threshold) {
                            if ((h(), o(t(this)))) return;
                            r > 0
                                ? t(this).carousel("next")
                                : t(this).carousel("prev");
                        }
                    }
                }
                function o(t) {
                    return t.find(".item.active").length < 1;
                }
                function h() {
                    this.removeEventListener("touchmove", i),
                        (u = null),
                        (c = !1);
                }
                var u,
                    c = !1;
                "ontouchstart" in document.documentElement &&
                    this.addEventListener("touchstart", e, !1);
            }),
            this
        );
    };
})(jQuery);
$(() => {
    const t = 6e4,
        n = async (i) => {
            setTimeout(async () => {
                await window.$.ajax({
                    type: "POST",
                    url: "/session/online",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (n) {
                        if (
                            (n.closeCurrentGame &&
                                window.closeWindowsAndIframe(),
                            n.logout)
                        ) {
                            registerPopup({
                                content: n.message,
                                onClose: function () {
                                    window.location = "/home";
                                },
                            });
                            return;
                        }
                    },
                    error: function (n) {
                        const t = n.getResponseHeader("Redirect-Reason");
                        n.status === 200 &&
                            t &&
                            (window.closeWindows(),
                            (window.location.href = "/home/" + t));
                    },
                }),
                    n();
            }, i || t);
        };
    n(5e3);
});
$(() => {
    const n = document.querySelector("#refresh_balance"),
        t = document.querySelectorAll(".refresh_balance");
    if (n || t.length) {
        const u = document.querySelector("#wallet_container"),
            i = document.querySelector("#total_balance"),
            f = document.querySelector("#total_locked_balance"),
            e = document.querySelectorAll(".locked_balance_container"),
            o = document.querySelectorAll(".total_balance"),
            s = document.querySelectorAll(".total_locked_balance"),
            h = document.querySelector("#unread_announcements_button"),
            a = document.querySelector("#loyalty_level"),
            c = document.querySelector("#loyalty_level_img_path"),
            v = document.querySelector("#loyalty_point"),
            y = document.querySelector("#loyalty_experience_percentage"),
            p = document.querySelector("#loyalty_experience_progress"),
            w = () => {
                const n = document.querySelector("#resolved_ticket_ids");
                n &&
                    window.$.ajax({
                        type: "POST",
                        url: "/Session/ReadResolvedTransactions",
                        data: JSON.stringify({
                            ticketNumbers: n.value.split(","),
                        }),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                    });
            },
            b = () => {
                window.$.ajax({
                    type: "POST",
                    url: "/Session/ResolvedTransactionsPopup",
                    success: (n) => {
                        registerPopup({
                            content: n,
                            cssClass: "concise-transaction-popup",
                            onClose: w,
                        });
                    },
                });
            },
            r = async () => {
                if (n) {
                    if (n.dataset.loading === "true") return;
                    n.dataset.loading = !0;
                }
                if (t.length) {
                    if (
                        Array.prototype.slice
                            .call(t)
                            .some((n) => n.dataset.loading === "true")
                    )
                        return;
                    Array.prototype.slice
                        .call(t)
                        .forEach((n) => (n.dataset.loading = !0));
                }
                await window.$.ajax({
                    type: "GET",
                    url: "/Account/ScheduledUpdate",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: (n) => {
                        const l = (n) => (Math.trunc(n * 100) / 100).toFixed(2),
                            t = n.wallet,
                            w = l(t.balance),
                            k = l(t.lockedBalance);
                        u && (u.dataset.lockedBalance = t.hasLockedBalance);
                        i && (i.innerText = w);
                        o.length &&
                            Array.prototype.slice.call(o).forEach((n) => {
                                n.innerText = w;
                            });
                        f && (f.innerText = k);
                        e.length &&
                            Array.prototype.slice.call(e).forEach((n) => {
                                n.hidden = !t.hasLockedBalance;
                            });
                        t.isBalanceStuck &&
                            (i.innerText = "[Please contact CS]");
                        s.length &&
                            Array.prototype.slice.call(s).forEach((n) => {
                                n.innerText = k;
                            });
                        t.hasNewResolvedTransactions && b();
                        t.vendorBalanceCategories.length &&
                            t.vendorBalanceCategories.forEach((n) => {
                                n.vendorBalances.forEach((n) => {
                                    Array.prototype.slice
                                        .call(
                                            document.querySelectorAll(
                                                `[data-vendor-game-code="${n.gameCode}"]`
                                            )
                                        )
                                        .forEach((t) => {
                                            t.innerText = n.success
                                                ? l(n.balance)
                                                : n.errorMessage;
                                        });
                                });
                            });
                        const d = n.notification;
                        h &&
                            d &&
                            (h.dataset.announcementCount = d.newMessageCount);
                        const r = n.loyalty;
                        if (r && c) {
                            const n =
                                r.experiencePercentage > 100
                                    ? 100
                                    : r.experiencePercentage;
                            a.src = `${c.value}${
                                {
                                    0: "bronze",
                                    1: "silver",
                                    2: "gold",
                                    3: "platinum",
                                    4: "diamond",
                                }[r.loyaltyLevel]
                            }.svg`;
                            v.innerText = r.loyaltyPoint.toLocaleString();
                            y.innerText = `${r.experiencePoint.toLocaleString()} XP / ${r.nextLevelExperiencePoint.toLocaleString()} XP (${n}%)`;
                            p.style.width = `${n}%`;
                        }
                    },
                    error: function (n) {
                        const t = n.getResponseHeader("Redirect-Reason");
                        n.status === 200 &&
                            t &&
                            (window.closeWindows(),
                            (window.location.href = "/home/" + t));
                    },
                });
                n && (n.dataset.loading = !1);
                t.length &&
                    Array.prototype.slice
                        .call(t)
                        .forEach((n) => (n.dataset.loading = !1));
            };
        n && (n.onclick = r);
        t.length &&
            Array.prototype.slice.call(t).forEach((n) => (n.onclick = r));
        const k = 1e4,
            l = async () => {
                setTimeout(async () => {
                    await r(), l();
                }, k);
            };
        l();
    }
    const i = document.querySelector("#main_menu_outer_container");
    if (i) {
        const n = i.querySelector("main"),
            t = i.querySelector(".left_trigger"),
            r = i.querySelector(".right_trigger");
        t && (t.onclick = () => (n.scrollLeft -= 20));
        r && (r.onclick = () => (n.scrollLeft += 20));
        const u = n.querySelector('a[data-active="true"]');
        u && u.scrollIntoView(!1);
    }
    const l = document.querySelector(".carousel");
    l && $(".carousel").bcSwipe({ threshold: 50 });
    const r = document.querySelector("#favourite_game_container");
    if (r) {
        const n = r.querySelector(".game-list, .game_list"),
            t = r.querySelector(".left_trigger"),
            i = r.querySelector(".right_trigger");
        t.onclick = () => (n.scrollLeft -= 60);
        i.onclick = () => (n.scrollLeft += 60);
    }
    const u = document.querySelector("#recent_game_container");
    if (u) {
        const n = u.querySelector(".game-list, .game_list"),
            t = u.querySelector(".left_trigger"),
            i = u.querySelector(".right_trigger");
        t.onclick = () => (n.scrollLeft -= 60);
        i.onclick = () => (n.scrollLeft += 60);
    }
    const f = document.querySelector("#popular_game_container");
    if (f) {
        const n = f.querySelector("ul, .game-list, .game_list"),
            t = f.querySelector(".left_trigger"),
            i = f.querySelector(".right_trigger");
        t.onclick = () => (n.scrollLeft -= 60);
        i.onclick = () => (n.scrollLeft += 60);
    }
    const s = document.querySelectorAll(".password_input_trigger");
    s.length &&
        s.forEach((n) => {
            const t = n.parentNode.querySelector("input[type=password]");
            n.onclick = () => {
                if (t.type === "password") {
                    t.type = "text";
                    return;
                }
                t.type = "password";
            };
        });
    const h = document.querySelector("#site_menu_trigger_input"),
        c = document.querySelector("#site_menu_close_icon");
    h &&
        c &&
        (c.onclick = () => {
            h.click();
        });
    const e = document.querySelector("body"),
        o = document.querySelector("#download_apk_notification");
    if (o) {
        const r = () => /iPhone|iPad|iPod|C-APK/i.test(navigator.userAgent);
        if (r()) {
            o.style.display = "none";
            e.classList.remove("has-apk-download-notification");
            return;
        }
        const n = (n) => {
                const i = new Date(),
                    t = new Date(i.getTime() + n * 864e5);
                t.setHours(0, 0, 0, 0);
                const r = `expires=${t.toString()}`,
                    u = moment(t).format("YYYY-MM-DD HH:mm:ss");
                document.cookie = `close-apk-download-notification=${u.toString()}; ${r}; path=/`;
            },
            u = window.readCookie("close-apk-download-notification");
        u == null && e.classList.add("has-apk-download-notification");
        const t = document.querySelector("#close_download_apk_notification");
        t &&
            (t.onclick = () => {
                n(7),
                    (o.style.display = "none"),
                    e.classList.remove("has-apk-download-notification");
            });
        const i = document.querySelector("#dont_show_again_today");
        i &&
            (i.onclick = () => {
                n(1),
                    (o.style.display = "none"),
                    e.classList.remove("has-apk-download-notification");
            });
    }
});
jQuery.fn.endlessRiver = function (n) {
    return (
        (n = jQuery.extend({ speed: 30, pause: !0, buttons: !1 }, n)),
        this.each(function () {
            function h(n, i) {
                t.animate({ left: "-=" + n }, i, "linear", function () {
                    t.children("li:first").appendTo(t);
                    t.css("left", 0);
                    u = t.children("li:first").outerWidth(!0);
                    o = (i / n) * u;
                    r && h(u, o);
                });
            }
            function a() {
                t.hover(b, k);
            }
            function b() {
                r = !1;
                t.stop();
            }
            function k() {
                r = !0;
                var i = t.offset().left,
                    n = i + t.children("li:first").outerWidth(!0) - c,
                    f = (o / u) * n;
                h(n, f);
            }
            var i = jQuery,
                t = i(this),
                f = "ER_" + new Date().getTime(),
                v,
                e;
            t.wrap('<div id="' + f + '"></div>');
            t.css({ margin: "0 !important", padding: "0 !important" });
            var u,
                o,
                r = !0,
                c = t.offset().left,
                s = 1;
            t.children("li.tick-clones").remove();
            t.addClass("newsticker");
            for (
                var d = t.wrap("<div class='mask'></div>"),
                    l = t.parent().wrap("<div class='tickercontainer'></div>"),
                    y = t.children("li"),
                    p = function () {
                        s = 1;
                        t.append(y.clone(!0).addClass("tick-clones"));
                        t.children("li").each(function (n) {
                            s += i(this, n).outerWidth(!0);
                        });
                    },
                    w = l.outerWidth(!0);
                s < w;

            )
                p();
            if (
                (t.width(s),
                (u = t.children("li:first").outerWidth(!0)),
                (o = (u / n.speed) * 1e3),
                h(u, o),
                n.pause && a(),
                n.buttons)
            ) {
                v = i(
                    '<ul class="er-controls"><li class="prev glyphicon glyphicon-chevron-left"></li><li class="pause glyphicon glyphicon-pause"></li><li class="next glyphicon glyphicon-chevron-right"></li></ul>'
                );
                v.insertAfter(l);
                i("body").on(
                    "click",
                    "#" + f + " .er-controls > .pause",
                    function () {
                        if (!r) return !1;
                        i(this).toggleClass(
                            "pause glyphicon-pause play glyphicon-play"
                        );
                        t.unbind("mouseenter mouseleave");
                        r = !1;
                    }
                );
                i("body").on(
                    "click",
                    "#" + f + " .er-controls > .play",
                    function () {
                        if (r) return !1;
                        i(this).toggleClass(
                            "pause glyphicon-pause play glyphicon-play"
                        );
                        r = !0;
                        a();
                        var f = t.offset().left,
                            n = f + t.children("li:first").outerWidth(!0) - c,
                            e = (o / u) * n;
                        h(n, e);
                    }
                );
                e = !1;
                i("body").on(
                    "click",
                    "#" + f + " .er-controls > .next",
                    function () {
                        if (r) {
                            i("#" + f + " .er-controls > .pause").toggleClass(
                                "pause glyphicon-pause play glyphicon-play"
                            );
                            r = !1;
                            return;
                        }
                        if (e) return !1;
                        var u = t.children("li:first").outerWidth(!0),
                            o = (u / n.speed) * 1e3;
                        e = !0;
                        t.stop(!0, !0).animate(
                            { left: "-=" + u },
                            o,
                            "linear",
                            function () {
                                t.children("li:first").appendTo(t);
                                t.css("left", 0);
                                e = !1;
                            }
                        );
                    }
                );
                i("body").on(
                    "click",
                    "#" + f + " .er-controls > .prev",
                    function () {
                        var u, o;
                        if (r) {
                            i("#" + f + " .er-controls > .pause").toggleClass(
                                "pause glyphicon-pause play glyphicon-play"
                            );
                            r = !1;
                            return;
                        }
                        if (e) return !1;
                        u = t.children("li:last").outerWidth(!0);
                        t.css("left", "-" + u + "px");
                        t.children("li:last").prependTo(t);
                        o = (u / n.speed) * 1e3;
                        e = !0;
                        t.stop(!0, !0).animate(
                            { left: "+=" + u },
                            o,
                            "linear",
                            function () {
                                e = !1;
                            }
                        );
                    }
                );
            }
        })
    );
};
/*!
 * Intro.js v7.0.1
 * https://introjs.com
 *
 * Copyright (C) 2012-2023 Afshin Mehrabani (@afshinmeh).
 * https://introjs.com
 *
 * Date: Sat, 25 Mar 2023 14:24:34 GMT
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define(e)
        : ((t =
              "undefined" != typeof globalThis
                  ? globalThis
                  : t || self).introJs = e());
})(this, function () {
    "use strict";
    function t() {
        t = function () {
            return e;
        };
        var e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            i =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            o = "function" == typeof Symbol ? Symbol : {},
            a = o.iterator || "@@iterator",
            s = o.asyncIterator || "@@asyncIterator",
            l = o.toStringTag || "@@toStringTag";
        function c(t, e, n) {
            return (
                Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                }),
                t[e]
            );
        }
        try {
            c({}, "");
        } catch (t) {
            c = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function u(t, e, n, r) {
            var o = e && e.prototype instanceof f ? e : f,
                a = Object.create(o.prototype),
                s = new j(r || []);
            return i(a, "_invoke", { value: x(t, n, s) }), a;
        }
        function h(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = u;
        var p = {};
        function f() {}
        function d() {}
        function m() {}
        var b = {};
        c(b, a, function () {
            return this;
        });
        var v = Object.getPrototypeOf,
            y = v && v(v(A([])));
        y && y !== n && r.call(y, a) && (b = y);
        var g = (m.prototype = f.prototype = Object.create(b));
        function w(t) {
            ["next", "throw", "return"].forEach(function (e) {
                c(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function _(t, e) {
            function n(i, o, a, s) {
                var l = h(t[i], t, o);
                if ("throw" !== l.type) {
                    var c = l.arg,
                        u = c.value;
                    return u && "object" == typeof u && r.call(u, "__await")
                        ? e.resolve(u.__await).then(
                              function (t) {
                                  n("next", t, a, s);
                              },
                              function (t) {
                                  n("throw", t, a, s);
                              }
                          )
                        : e.resolve(u).then(
                              function (t) {
                                  (c.value = t), a(c);
                              },
                              function (t) {
                                  return n("throw", t, a, s);
                              }
                          );
                }
                s(l.arg);
            }
            var o;
            i(this, "_invoke", {
                value: function (t, r) {
                    function i() {
                        return new e(function (e, i) {
                            n(t, r, e, i);
                        });
                    }
                    return (o = o ? o.then(i, i) : i());
                },
            });
        }
        function x(t, e, n) {
            var r = "suspendedStart";
            return function (i, o) {
                if ("executing" === r)
                    throw new Error("Generator is already running");
                if ("completed" === r) {
                    if ("throw" === i) throw o;
                    return E();
                }
                for (n.method = i, n.arg = o; ; ) {
                    var a = n.delegate;
                    if (a) {
                        var s = k(a, n);
                        if (s) {
                            if (s === p) continue;
                            return s;
                        }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                        if ("suspendedStart" === r)
                            throw ((r = "completed"), n.arg);
                        n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = "executing";
                    var l = h(t, e, n);
                    if ("normal" === l.type) {
                        if (
                            ((r = n.done ? "completed" : "suspendedYield"),
                            l.arg === p)
                        )
                            continue;
                        return { value: l.arg, done: n.done };
                    }
                    "throw" === l.type &&
                        ((r = "completed"),
                        (n.method = "throw"),
                        (n.arg = l.arg));
                }
            };
        }
        function k(t, e) {
            var n = t.iterator[e.method];
            if (void 0 === n) {
                if (((e.delegate = null), "throw" === e.method)) {
                    if (
                        t.iterator.return &&
                        ((e.method = "return"),
                        (e.arg = void 0),
                        k(t, e),
                        "throw" === e.method)
                    )
                        return p;
                    (e.method = "throw"),
                        (e.arg = new TypeError(
                            "The iterator does not provide a 'throw' method"
                        ));
                }
                return p;
            }
            var r = h(n, t.iterator, e.arg);
            if ("throw" === r.type)
                return (
                    (e.method = "throw"),
                    (e.arg = r.arg),
                    (e.delegate = null),
                    p
                );
            var i = r.arg;
            return i
                ? i.done
                    ? ((e[t.resultName] = i.value),
                      (e.next = t.nextLoc),
                      "return" !== e.method &&
                          ((e.method = "next"), (e.arg = void 0)),
                      (e.delegate = null),
                      p)
                    : i
                : ((e.method = "throw"),
                  (e.arg = new TypeError("iterator result is not an object")),
                  (e.delegate = null),
                  p);
        }
        function C(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
                2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                this.tryEntries.push(e);
        }
        function S(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function j(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
                t.forEach(C, this),
                this.reset(!0);
        }
        function A(t) {
            if (t) {
                var e = t[a];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        i = function e() {
                            for (; ++n < t.length; )
                                if (r.call(t, n))
                                    return (e.value = t[n]), (e.done = !1), e;
                            return (e.value = void 0), (e.done = !0), e;
                        };
                    return (i.next = i);
                }
            }
            return { next: E };
        }
        function E() {
            return { value: void 0, done: !0 };
        }
        return (
            (d.prototype = m),
            i(g, "constructor", { value: m, configurable: !0 }),
            i(m, "constructor", { value: d, configurable: !0 }),
            (d.displayName = c(m, l, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return (
                    !!e &&
                    (e === d ||
                        "GeneratorFunction" === (e.displayName || e.name))
                );
            }),
            (e.mark = function (t) {
                return (
                    Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, m)
                        : ((t.__proto__ = m), c(t, l, "GeneratorFunction")),
                    (t.prototype = Object.create(g)),
                    t
                );
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            w(_.prototype),
            c(_.prototype, s, function () {
                return this;
            }),
            (e.AsyncIterator = _),
            (e.async = function (t, n, r, i, o) {
                void 0 === o && (o = Promise);
                var a = new _(u(t, n, r, i), o);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            w(g),
            c(g, l, "Generator"),
            c(g, a, function () {
                return this;
            }),
            c(g, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = A),
            (j.prototype = {
                constructor: j,
                reset: function (t) {
                    if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = void 0),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = "next"),
                        (this.arg = void 0),
                        this.tryEntries.forEach(S),
                        !t)
                    )
                        for (var e in this)
                            "t" === e.charAt(0) &&
                                r.call(this, e) &&
                                !isNaN(+e.slice(1)) &&
                                (this[e] = void 0);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (t) {
                    if (this.done) throw t;
                    var e = this;
                    function n(n, r) {
                        return (
                            (a.type = "throw"),
                            (a.arg = t),
                            (e.next = n),
                            r && ((e.method = "next"), (e.arg = void 0)),
                            !!r
                        );
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var o = this.tryEntries[i],
                            a = o.completion;
                        if ("root" === o.tryLoc) return n("end");
                        if (o.tryLoc <= this.prev) {
                            var s = r.call(o, "catchLoc"),
                                l = r.call(o, "finallyLoc");
                            if (s && l) {
                                if (this.prev < o.catchLoc)
                                    return n(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return n(o.finallyLoc);
                            } else if (s) {
                                if (this.prev < o.catchLoc)
                                    return n(o.catchLoc, !0);
                            } else {
                                if (!l)
                                    throw new Error(
                                        "try statement without catch or finally"
                                    );
                                if (this.prev < o.finallyLoc)
                                    return n(o.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (
                            i.tryLoc <= this.prev &&
                            r.call(i, "finallyLoc") &&
                            this.prev < i.finallyLoc
                        ) {
                            var o = i;
                            break;
                        }
                    }
                    o &&
                        ("break" === t || "continue" === t) &&
                        o.tryLoc <= e &&
                        e <= o.finallyLoc &&
                        (o = null);
                    var a = o ? o.completion : {};
                    return (
                        (a.type = t),
                        (a.arg = e),
                        o
                            ? ((this.method = "next"),
                              (this.next = o.finallyLoc),
                              p)
                            : this.complete(a)
                    );
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return (
                        "break" === t.type || "continue" === t.type
                            ? (this.next = t.arg)
                            : "return" === t.type
                            ? ((this.rval = this.arg = t.arg),
                              (this.method = "return"),
                              (this.next = "end"))
                            : "normal" === t.type && e && (this.next = e),
                        p
                    );
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t)
                            return (
                                this.complete(n.completion, n.afterLoc), S(n), p
                            );
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                S(n);
                            }
                            return i;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function (t, e, n) {
                    return (
                        (this.delegate = {
                            iterator: A(t),
                            resultName: e,
                            nextLoc: n,
                        }),
                        "next" === this.method && (this.arg = void 0),
                        p
                    );
                },
            }),
            e
        );
    }
    function e(t) {
        return (
            (e =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t &&
                              "function" == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? "symbol"
                              : typeof t;
                      }),
            e(t)
        );
    }
    function n(t, e, n, r, i, o, a) {
        try {
            var s = t[o](a),
                l = s.value;
        } catch (t) {
            return void n(t);
        }
        s.done ? e(l) : Promise.resolve(l).then(r, i);
    }
    function r(t) {
        return function () {
            var e = this,
                r = arguments;
            return new Promise(function (i, o) {
                var a = t.apply(e, r);
                function s(t) {
                    n(a, i, o, s, l, "next", t);
                }
                function l(t) {
                    n(a, i, o, s, l, "throw", t);
                }
                s(void 0);
            });
        };
    }
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
        }
    }
    function o(t, e, n) {
        return (
            e in t
                ? Object.defineProperty(t, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (t[e] = n),
            t
        );
    }
    function a(t, e) {
        return (
            (function (t) {
                if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
                var n =
                    null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                              t[Symbol.iterator]) ||
                          t["@@iterator"];
                if (null == n) return;
                var r,
                    i,
                    o = [],
                    a = !0,
                    s = !1;
                try {
                    for (
                        n = n.call(t);
                        !(a = (r = n.next()).done) &&
                        (o.push(r.value), !e || o.length !== e);
                        a = !0
                    );
                } catch (t) {
                    (s = !0), (i = t);
                } finally {
                    try {
                        a || null == n.return || n.return();
                    } finally {
                        if (s) throw i;
                    }
                }
                return o;
            })(t, e) ||
            (function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return s(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                    return s(t, e);
            })(t, e) ||
            (function () {
                throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
            })()
        );
    }
    function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    var l,
        c =
            ((l = {}),
            function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "introjs-stamp";
                return (
                    (l[e] = l[e] || 0), void 0 === t[e] && (t[e] = l[e]++), t[e]
                );
            });
    function u(t, e, n) {
        if (t) for (var r = 0, i = t.length; r < i; r++) e(t[r], r);
        "function" == typeof n && n();
    }
    var h = new (function () {
        var t = "introjs_event";
        (this._id = function (t, e, n) {
            return t + c(e) + (n ? "_".concat(c(n)) : "");
        }),
            (this.on = function (e, n, r, i, o) {
                var a = this._id.apply(this, [n, r, i]),
                    s = function (t) {
                        return r.call(i || e, t || window.event);
                    };
                "addEventListener" in e
                    ? e.addEventListener(n, s, o)
                    : "attachEvent" in e && e.attachEvent("on".concat(n), s),
                    (e[t] = e[t] || {}),
                    (e[t][a] = s);
            }),
            (this.off = function (e, n, r, i, o) {
                var a = this._id.apply(this, [n, r, i]),
                    s = e[t] && e[t][a];
                s &&
                    ("removeEventListener" in e
                        ? e.removeEventListener(n, s, o)
                        : "detachEvent" in e &&
                          e.detachEvent("on".concat(n), s),
                    (e[t][a] = null));
            });
    })();
    function p(t, e) {
        if (t instanceof SVGElement) {
            var n = t.getAttribute("class") || "";
            n.match(e) || t.setAttribute("class", "".concat(n, " ").concat(e));
        } else {
            if (void 0 !== t.classList)
                u(e.split(" "), function (e) {
                    t.classList.add(e);
                });
            else t.className.match(e) || (t.className += " ".concat(e));
        }
    }
    function f(t, e) {
        var n = "";
        return (
            "currentStyle" in t
                ? (n = t.currentStyle[e])
                : document.defaultView &&
                  document.defaultView.getComputedStyle &&
                  (n = document.defaultView
                      .getComputedStyle(t, null)
                      .getPropertyValue(e)),
            n && n.toLowerCase ? n.toLowerCase() : n
        );
    }
    function d(t) {
        p(t, "introjs-showElement");
        var e = f(t, "position");
        "absolute" !== e &&
            "relative" !== e &&
            "sticky" !== e &&
            "fixed" !== e &&
            p(t, "introjs-relativePosition");
    }
    function m(t) {
        if (this._options.scrollToElement) {
            var e = (function (t) {
                var e = window.getComputedStyle(t),
                    n = "absolute" === e.position,
                    r = /(auto|scroll)/;
                if ("fixed" === e.position) return document.body;
                for (var i = t; (i = i.parentElement); )
                    if (
                        ((e = window.getComputedStyle(i)),
                        (!n || "static" !== e.position) &&
                            r.test(e.overflow + e.overflowY + e.overflowX))
                    )
                        return i;
                return document.body;
            })(t);
            e !== document.body && (e.scrollTop = t.offsetTop - e.offsetTop);
        }
    }
    function b() {
        if (void 0 !== window.innerWidth)
            return { width: window.innerWidth, height: window.innerHeight };
        var t = document.documentElement;
        return { width: t.clientWidth, height: t.clientHeight };
    }
    function v(t, e, n) {
        var r;
        if (
            "off" !== t &&
            this._options.scrollToElement &&
            ((r =
                "tooltip" === t
                    ? n.getBoundingClientRect()
                    : e.getBoundingClientRect()),
            !(function (t) {
                var e = t.getBoundingClientRect();
                return (
                    e.top >= 0 &&
                    e.left >= 0 &&
                    e.bottom + 80 <= window.innerHeight &&
                    e.right <= window.innerWidth
                );
            })(e))
        ) {
            var i = b().height;
            r.bottom - (r.bottom - r.top) < 0 || e.clientHeight > i
                ? window.scrollBy(
                      0,
                      r.top -
                          (i / 2 - r.height / 2) -
                          this._options.scrollPadding
                  )
                : window.scrollBy(
                      0,
                      r.top -
                          (i / 2 - r.height / 2) +
                          this._options.scrollPadding
                  );
        }
    }
    function y(t) {
        t.setAttribute("role", "button"), (t.tabIndex = 0);
    }
    function g(t) {
        var e = t.parentElement;
        return (
            !(!e || "HTML" === e.nodeName) &&
            ("fixed" === f(t, "position") || g(e))
        );
    }
    function w(t, e) {
        var n = document.body,
            r = document.documentElement,
            i = window.pageYOffset || r.scrollTop || n.scrollTop,
            o = window.pageXOffset || r.scrollLeft || n.scrollLeft;
        e = e || n;
        var a = t.getBoundingClientRect(),
            s = e.getBoundingClientRect(),
            l = f(e, "position"),
            c = { width: a.width, height: a.height };
        return ("body" !== e.tagName.toLowerCase() && "relative" === l) ||
            "sticky" === l
            ? Object.assign(c, { top: a.top - s.top, left: a.left - s.left })
            : g(t)
            ? Object.assign(c, { top: a.top, left: a.left })
            : Object.assign(c, { top: a.top + i, left: a.left + o });
    }
    function _(t, e) {
        if (t instanceof SVGElement) {
            var n = t.getAttribute("class") || "";
            t.setAttribute("class", n.replace(e, "").replace(/^\s+|\s+$/g, ""));
        } else t.className = t.className.replace(e, "").replace(/^\s+|\s+$/g, "");
    }
    function x(t, e) {
        var n = "";
        if ((t.style.cssText && (n += t.style.cssText), "string" == typeof e))
            n += e;
        else for (var r in e) n += "".concat(r, ":").concat(e[r], ";");
        t.style.cssText = n;
    }
    function k(t) {
        if (t) {
            if (!this._introItems[this._currentStep]) return;
            var e = this._introItems[this._currentStep],
                n = w(e.element, this._targetElement),
                r = this._options.helperElementPadding;
            g(e.element)
                ? p(t, "introjs-fixedTooltip")
                : _(t, "introjs-fixedTooltip"),
                "floating" === e.position && (r = 0),
                x(t, {
                    width: "".concat(n.width + r, "px"),
                    height: "".concat(n.height + r, "px"),
                    top: "".concat(n.top - r / 2, "px"),
                    left: "".concat(n.left - r / 2, "px"),
                });
        }
    }
    function C(t, e, n, r, i) {
        return t.left + e + n.width > r.width
            ? ((i.style.left = "".concat(r.width - n.width - t.left, "px")), !1)
            : ((i.style.left = "".concat(e, "px")), !0);
    }
    function S(t, e, n, r) {
        return t.left + t.width - e - n.width < 0
            ? ((r.style.left = "".concat(-t.left, "px")), !1)
            : ((r.style.right = "".concat(e, "px")), !0);
    }
    function j(t, e) {
        t.includes(e) && t.splice(t.indexOf(e), 1);
    }
    function A(t, e, n) {
        var r = this._options.positionPrecedence.slice(),
            i = b(),
            o = w(e).height + 10,
            a = w(e).width + 20,
            s = t.getBoundingClientRect(),
            l = "floating";
        s.bottom + o > i.height && j(r, "bottom"),
            s.top - o < 0 && j(r, "top"),
            s.right + a > i.width && j(r, "right"),
            s.left - a < 0 && j(r, "left");
        var c,
            u,
            h = -1 !== (u = (c = n || "").indexOf("-")) ? c.substr(u) : "";
        return (
            n && (n = n.split("-")[0]),
            r.length && (l = r.includes(n) ? n : r[0]),
            ["top", "bottom"].includes(l) &&
                (l += (function (t, e, n, r) {
                    var i = e / 2,
                        o = Math.min(n, window.screen.width),
                        a = [
                            "-left-aligned",
                            "-middle-aligned",
                            "-right-aligned",
                        ];
                    return (
                        o - t < e && j(a, "-left-aligned"),
                        (t < i || o - t < i) && j(a, "-middle-aligned"),
                        t < e && j(a, "-right-aligned"),
                        a.length
                            ? a.includes(r)
                                ? r
                                : a[0]
                            : "-middle-aligned"
                    );
                })(s.left, a, i.width, h)),
            l
        );
    }
    function E(t, e, n, r) {
        var i,
            o,
            a,
            s,
            l,
            c = "";
        if (
            ((r = r || !1),
            (e.style.top = null),
            (e.style.right = null),
            (e.style.bottom = null),
            (e.style.left = null),
            (e.style.marginLeft = null),
            (e.style.marginTop = null),
            (n.style.display = "inherit"),
            this._introItems[this._currentStep])
        ) {
            (c =
                "string" ==
                typeof (i = this._introItems[this._currentStep]).tooltipClass
                    ? i.tooltipClass
                    : this._options.tooltipClass),
                (e.className = ["introjs-tooltip", c]
                    .filter(Boolean)
                    .join(" ")),
                e.setAttribute("role", "dialog"),
                "floating" !==
                    (l = this._introItems[this._currentStep].position) &&
                    this._options.autoPosition &&
                    (l = A.call(this, t, e, l)),
                (a = w(t)),
                (o = w(e)),
                (s = b()),
                p(e, "introjs-".concat(l));
            var u = a.width / 2 - o.width / 2;
            switch (l) {
                case "top-right-aligned":
                    n.className = "introjs-arrow bottom-right";
                    var h = 0;
                    S(a, h, o, e),
                        (e.style.bottom = "".concat(a.height + 20, "px"));
                    break;
                case "top-middle-aligned":
                    (n.className = "introjs-arrow bottom-middle"),
                        r && (u += 5),
                        S(a, u, o, e) &&
                            ((e.style.right = null), C(a, u, o, s, e)),
                        (e.style.bottom = "".concat(a.height + 20, "px"));
                    break;
                case "top-left-aligned":
                case "top":
                    (n.className = "introjs-arrow bottom"),
                        C(a, r ? 0 : 15, o, s, e),
                        (e.style.bottom = "".concat(a.height + 20, "px"));
                    break;
                case "right":
                    (e.style.left = "".concat(a.width + 20, "px")),
                        a.top + o.height > s.height
                            ? ((n.className = "introjs-arrow left-bottom"),
                              (e.style.top = "-".concat(
                                  o.height - a.height - 20,
                                  "px"
                              )))
                            : (n.className = "introjs-arrow left");
                    break;
                case "left":
                    r ||
                        !0 !== this._options.showStepNumbers ||
                        (e.style.top = "15px"),
                        a.top + o.height > s.height
                            ? ((e.style.top = "-".concat(
                                  o.height - a.height - 20,
                                  "px"
                              )),
                              (n.className = "introjs-arrow right-bottom"))
                            : (n.className = "introjs-arrow right"),
                        (e.style.right = "".concat(a.width + 20, "px"));
                    break;
                case "floating":
                    (n.style.display = "none"),
                        (e.style.left = "50%"),
                        (e.style.top = "50%"),
                        (e.style.marginLeft = "-".concat(o.width / 2, "px")),
                        (e.style.marginTop = "-".concat(o.height / 2, "px"));
                    break;
                case "bottom-right-aligned":
                    (n.className = "introjs-arrow top-right"),
                        S(a, (h = 0), o, e),
                        (e.style.top = "".concat(a.height + 20, "px"));
                    break;
                case "bottom-middle-aligned":
                    (n.className = "introjs-arrow top-middle"),
                        r && (u += 5),
                        S(a, u, o, e) &&
                            ((e.style.right = null), C(a, u, o, s, e)),
                        (e.style.top = "".concat(a.height + 20, "px"));
                    break;
                default:
                    (n.className = "introjs-arrow top"),
                        C(a, 0, o, s, e),
                        (e.style.top = "".concat(a.height + 20, "px"));
            }
        }
    }
    function N() {
        u(
            Array.from(document.querySelectorAll(".introjs-showElement")),
            function (t) {
                _(t, /introjs-[a-zA-Z]+/g);
            }
        );
    }
    function L(t, e) {
        var n = document.createElement(t);
        e = e || {};
        var r = /^(?:role|data-|aria-)/;
        for (var i in e) {
            var o = e[i];
            "style" === i
                ? x(n, o)
                : i.match(r)
                ? n.setAttribute(i, o)
                : (n[i] = o);
        }
        return n;
    }
    function T(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (n) {
            var r = e.style.opacity || "1";
            x(e, { opacity: "0" }),
                window.setTimeout(function () {
                    x(e, { opacity: r });
                }, 10);
        }
        t.appendChild(e);
    }
    function I() {
        return (
            (parseInt(this._currentStep + 1, 10) / this._introItems.length) *
            100
        );
    }
    function P() {
        var t = document.querySelector(".introjs-disableInteraction");
        null === t &&
            ((t = L("div", { className: "introjs-disableInteraction" })),
            this._targetElement.appendChild(t)),
            k.call(this, t);
    }
    function q(t) {
        var e = this,
            n = L("div", { className: "introjs-bullets" });
        !1 === this._options.showBullets && (n.style.display = "none");
        var r = L("ul");
        r.setAttribute("role", "tablist");
        var i = function () {
            e.goToStep(this.getAttribute("data-step-number"));
        };
        return (
            u(this._introItems, function (e, n) {
                var o = e.step,
                    a = L("li"),
                    s = L("a");
                a.setAttribute("role", "presentation"),
                    s.setAttribute("role", "tab"),
                    (s.onclick = i),
                    n === t.step - 1 && (s.className = "active"),
                    y(s),
                    (s.innerHTML = "&nbsp;"),
                    s.setAttribute("data-step-number", o),
                    a.appendChild(s),
                    r.appendChild(a);
            }),
            n.appendChild(r),
            n
        );
    }
    function O(t) {
        if (this._options.showBullets) {
            var e = document.querySelector(".introjs-bullets");
            e && e.parentNode.replaceChild(q.call(this, t), e);
        }
    }
    function B(t, e) {
        this._options.showBullets &&
            ((t.querySelector(".introjs-bullets li > a.active").className = ""),
            (t.querySelector(
                '.introjs-bullets li > a[data-step-number="'.concat(
                    e.step,
                    '"]'
                )
            ).className = "active"));
    }
    function H() {
        var t = L("div");
        (t.className = "introjs-progress"),
            !1 === this._options.showProgress && (t.style.display = "none");
        var e = L("div", { className: "introjs-progressbar" });
        return (
            this._options.progressBarAdditionalClass &&
                (e.className += " " + this._options.progressBarAdditionalClass),
            e.setAttribute("role", "progress"),
            e.setAttribute("aria-valuemin", "0"),
            e.setAttribute("aria-valuemax", "100"),
            e.setAttribute("aria-valuenow", I.call(this)),
            (e.style.cssText = "width:".concat(I.call(this), "%;")),
            t.appendChild(e),
            t
        );
    }
    function R(t) {
        (t.querySelector(
            ".introjs-progress .introjs-progressbar"
        ).style.cssText = "width:".concat(I.call(this), "%;")),
            t
                .querySelector(".introjs-progress .introjs-progressbar")
                .setAttribute("aria-valuenow", I.call(this));
    }
    function M(t) {
        return F.apply(this, arguments);
    }
    function F() {
        return (F = r(
            t().mark(function e(n) {
                var i,
                    o,
                    a,
                    s,
                    l,
                    c,
                    u,
                    h,
                    f,
                    b,
                    g,
                    w,
                    _,
                    C,
                    S,
                    j,
                    A,
                    I,
                    O,
                    M,
                    F,
                    D,
                    G,
                    V,
                    z,
                    Y = this;
                return t().wrap(
                    function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    if (void 0 === this._introChangeCallback) {
                                        e.next = 3;
                                        break;
                                    }
                                    return (
                                        (e.next = 3),
                                        this._introChangeCallback.call(
                                            this,
                                            n.element
                                        )
                                    );
                                case 3:
                                    if (
                                        ((i = this),
                                        (o = document.querySelector(
                                            ".introjs-helperLayer"
                                        )),
                                        (a = document.querySelector(
                                            ".introjs-tooltipReferenceLayer"
                                        )),
                                        (s = "introjs-helperLayer"),
                                        "string" == typeof n.highlightClass &&
                                            (s += " ".concat(n.highlightClass)),
                                        "string" ==
                                            typeof this._options
                                                .highlightClass &&
                                            (s += " ".concat(
                                                this._options.highlightClass
                                            )),
                                        null !== o && null !== a
                                            ? ((h = a.querySelector(
                                                  ".introjs-helperNumberLayer"
                                              )),
                                              (f = a.querySelector(
                                                  ".introjs-tooltiptext"
                                              )),
                                              (b = a.querySelector(
                                                  ".introjs-tooltip-title"
                                              )),
                                              (g =
                                                  a.querySelector(
                                                      ".introjs-arrow"
                                                  )),
                                              (w =
                                                  a.querySelector(
                                                      ".introjs-tooltip"
                                                  )),
                                              (u = a.querySelector(
                                                  ".introjs-skipbutton"
                                              )),
                                              (c = a.querySelector(
                                                  ".introjs-prevbutton"
                                              )),
                                              (l = a.querySelector(
                                                  ".introjs-nextbutton"
                                              )),
                                              (o.className = s),
                                              (w.style.opacity = "0"),
                                              (w.style.display = "none"),
                                              m.call(i, n.element),
                                              k.call(i, o),
                                              k.call(i, a),
                                              N(),
                                              i._lastShowElementTimer &&
                                                  window.clearTimeout(
                                                      i._lastShowElementTimer
                                                  ),
                                              (i._lastShowElementTimer =
                                                  window.setTimeout(
                                                      function () {
                                                          null !== h &&
                                                              (h.innerHTML = ""
                                                                  .concat(
                                                                      n.step,
                                                                      " "
                                                                  )
                                                                  .concat(
                                                                      Y._options
                                                                          .stepNumbersOfLabel,
                                                                      " "
                                                                  )
                                                                  .concat(
                                                                      Y
                                                                          ._introItems
                                                                          .length
                                                                  )),
                                                              (f.innerHTML =
                                                                  n.intro),
                                                              (b.innerHTML =
                                                                  n.title),
                                                              (w.style.display =
                                                                  "block"),
                                                              E.call(
                                                                  i,
                                                                  n.element,
                                                                  w,
                                                                  g
                                                              ),
                                                              B.call(i, a, n),
                                                              R.call(i, a),
                                                              (w.style.opacity =
                                                                  "1"),
                                                              ((null != l &&
                                                                  /introjs-donebutton/gi.test(
                                                                      l.className
                                                                  )) ||
                                                                  null != l) &&
                                                                  l.focus(),
                                                              v.call(
                                                                  i,
                                                                  n.scrollTo,
                                                                  n.element,
                                                                  f
                                                              );
                                                      },
                                                      350
                                                  )))
                                            : ((_ = L("div", { className: s })),
                                              (C = L("div", {
                                                  className:
                                                      "introjs-tooltipReferenceLayer",
                                              })),
                                              (S = L("div", {
                                                  className: "introjs-arrow",
                                              })),
                                              (j = L("div", {
                                                  className: "introjs-tooltip",
                                              })),
                                              (A = L("div", {
                                                  className:
                                                      "introjs-tooltiptext",
                                              })),
                                              (I = L("div", {
                                                  className:
                                                      "introjs-tooltip-header",
                                              })),
                                              (O = L("h1", {
                                                  className:
                                                      "introjs-tooltip-title",
                                              })),
                                              (M = L("div")),
                                              x(_, {
                                                  "box-shadow":
                                                      "0 0 1px 2px rgba(33, 33, 33, 0.8), rgba(33, 33, 33, ".concat(
                                                          i._options.overlayOpacity.toString(),
                                                          ") 0 0 0 5000px"
                                                      ),
                                              }),
                                              m.call(i, n.element),
                                              k.call(i, _),
                                              k.call(i, C),
                                              T(this._targetElement, _, !0),
                                              T(this._targetElement, C),
                                              (A.innerHTML = n.intro),
                                              (O.innerHTML = n.title),
                                              (M.className =
                                                  "introjs-tooltipbuttons"),
                                              !1 ===
                                                  this._options.showButtons &&
                                                  (M.style.display = "none"),
                                              I.appendChild(O),
                                              j.appendChild(I),
                                              j.appendChild(A),
                                              this._options.dontShowAgain &&
                                                  ((F = L("div", {
                                                      className:
                                                          "introjs-dontShowAgain",
                                                  })),
                                                  ((D = L("input", {
                                                      type: "checkbox",
                                                      id: "introjs-dontShowAgain",
                                                      name: "introjs-dontShowAgain",
                                                  })).onchange = function (t) {
                                                      Y.setDontShowAgain(
                                                          t.target.checked
                                                      );
                                                  }),
                                                  ((G = L("label", {
                                                      htmlFor:
                                                          "introjs-dontShowAgain",
                                                  })).innerText =
                                                      this._options.dontShowAgainLabel),
                                                  F.appendChild(D),
                                                  F.appendChild(G),
                                                  j.appendChild(F)),
                                              j.appendChild(q.call(this, n)),
                                              j.appendChild(H.call(this)),
                                              (V = L("div")),
                                              !0 ===
                                                  this._options
                                                      .showStepNumbers &&
                                                  ((V.className =
                                                      "introjs-helperNumberLayer"),
                                                  (V.innerHTML = ""
                                                      .concat(n.step, " ")
                                                      .concat(
                                                          this._options
                                                              .stepNumbersOfLabel,
                                                          " "
                                                      )
                                                      .concat(
                                                          this._introItems
                                                              .length
                                                      )),
                                                  j.appendChild(V)),
                                              j.appendChild(S),
                                              C.appendChild(j),
                                              ((l = L("a")).onclick = r(
                                                  t().mark(function e() {
                                                      return t().wrap(function (
                                                          t
                                                      ) {
                                                          for (;;)
                                                              switch (
                                                                  (t.prev =
                                                                      t.next)
                                                              ) {
                                                                  case 0:
                                                                      if (
                                                                          i
                                                                              ._introItems
                                                                              .length -
                                                                              1 ===
                                                                          i._currentStep
                                                                      ) {
                                                                          t.next = 5;
                                                                          break;
                                                                      }
                                                                      return (
                                                                          (t.next = 3),
                                                                          W.call(
                                                                              i
                                                                          )
                                                                      );
                                                                  case 3:
                                                                      t.next = 11;
                                                                      break;
                                                                  case 5:
                                                                      if (
                                                                          !/introjs-donebutton/gi.test(
                                                                              l.className
                                                                          )
                                                                      ) {
                                                                          t.next = 11;
                                                                          break;
                                                                      }
                                                                      if (
                                                                          "function" !=
                                                                          typeof i._introCompleteCallback
                                                                      ) {
                                                                          t.next = 9;
                                                                          break;
                                                                      }
                                                                      return (
                                                                          (t.next = 9),
                                                                          i._introCompleteCallback.call(
                                                                              i,
                                                                              i._currentStep,
                                                                              "done"
                                                                          )
                                                                      );
                                                                  case 9:
                                                                      return (
                                                                          (t.next = 11),
                                                                          xt.call(
                                                                              i,
                                                                              i._targetElement
                                                                          )
                                                                      );
                                                                  case 11:
                                                                  case "end":
                                                                      return t.stop();
                                                              }
                                                      },
                                                      e);
                                                  })
                                              )),
                                              y(l),
                                              (l.innerHTML =
                                                  this._options.nextLabel),
                                              ((c = L("a")).onclick = r(
                                                  t().mark(function e() {
                                                      return t().wrap(function (
                                                          t
                                                      ) {
                                                          for (;;)
                                                              switch (
                                                                  (t.prev =
                                                                      t.next)
                                                              ) {
                                                                  case 0:
                                                                      if (
                                                                          0 ===
                                                                          i._currentStep
                                                                      ) {
                                                                          t.next = 3;
                                                                          break;
                                                                      }
                                                                      return (
                                                                          (t.next = 3),
                                                                          $.call(
                                                                              i
                                                                          )
                                                                      );
                                                                  case 3:
                                                                  case "end":
                                                                      return t.stop();
                                                              }
                                                      },
                                                      e);
                                                  })
                                              )),
                                              y(c),
                                              (c.innerHTML =
                                                  this._options.prevLabel),
                                              y(
                                                  (u = L("a", {
                                                      className:
                                                          "introjs-skipbutton",
                                                  }))
                                              ),
                                              (u.innerHTML =
                                                  this._options.skipLabel),
                                              (u.onclick = r(
                                                  t().mark(function e() {
                                                      return t().wrap(function (
                                                          t
                                                      ) {
                                                          for (;;)
                                                              switch (
                                                                  (t.prev =
                                                                      t.next)
                                                              ) {
                                                                  case 0:
                                                                      if (
                                                                          i
                                                                              ._introItems
                                                                              .length -
                                                                              1 !==
                                                                              i._currentStep ||
                                                                          "function" !=
                                                                              typeof i._introCompleteCallback
                                                                      ) {
                                                                          t.next = 3;
                                                                          break;
                                                                      }
                                                                      return (
                                                                          (t.next = 3),
                                                                          i._introCompleteCallback.call(
                                                                              i,
                                                                              i._currentStep,
                                                                              "skip"
                                                                          )
                                                                      );
                                                                  case 3:
                                                                      if (
                                                                          "function" !=
                                                                          typeof i._introSkipCallback
                                                                      ) {
                                                                          t.next = 6;
                                                                          break;
                                                                      }
                                                                      return (
                                                                          (t.next = 6),
                                                                          i._introSkipCallback.call(
                                                                              i
                                                                          )
                                                                      );
                                                                  case 6:
                                                                      return (
                                                                          (t.next = 8),
                                                                          xt.call(
                                                                              i,
                                                                              i._targetElement
                                                                          )
                                                                      );
                                                                  case 8:
                                                                  case "end":
                                                                      return t.stop();
                                                              }
                                                      },
                                                      e);
                                                  })
                                              )),
                                              I.appendChild(u),
                                              this._introItems.length > 1 &&
                                                  M.appendChild(c),
                                              M.appendChild(l),
                                              j.appendChild(M),
                                              E.call(i, n.element, j, S),
                                              v.call(
                                                  this,
                                                  n.scrollTo,
                                                  n.element,
                                                  j
                                              )),
                                        (z = i._targetElement.querySelector(
                                            ".introjs-disableInteraction"
                                        )) && z.parentNode.removeChild(z),
                                        n.disableInteraction && P.call(i),
                                        0 === this._currentStep &&
                                        this._introItems.length > 1
                                            ? (null != l &&
                                                  ((l.className = "".concat(
                                                      this._options.buttonClass,
                                                      " introjs-nextbutton"
                                                  )),
                                                  (l.innerHTML =
                                                      this._options.nextLabel)),
                                              !0 === this._options.hidePrev
                                                  ? (null != c &&
                                                        (c.className =
                                                            "".concat(
                                                                this._options
                                                                    .buttonClass,
                                                                " introjs-prevbutton introjs-hidden"
                                                            )),
                                                    null != l &&
                                                        p(
                                                            l,
                                                            "introjs-fullbutton"
                                                        ))
                                                  : null != c &&
                                                    (c.className = "".concat(
                                                        this._options
                                                            .buttonClass,
                                                        " introjs-prevbutton introjs-disabled"
                                                    )))
                                            : this._introItems.length - 1 ===
                                                  this._currentStep ||
                                              1 === this._introItems.length
                                            ? (null != c &&
                                                  (c.className = "".concat(
                                                      this._options.buttonClass,
                                                      " introjs-prevbutton"
                                                  )),
                                              !0 === this._options.hideNext
                                                  ? (null != l &&
                                                        (l.className =
                                                            "".concat(
                                                                this._options
                                                                    .buttonClass,
                                                                " introjs-nextbutton introjs-hidden"
                                                            )),
                                                    null != c &&
                                                        p(
                                                            c,
                                                            "introjs-fullbutton"
                                                        ))
                                                  : null != l &&
                                                    (!0 ===
                                                    this._options.nextToDone
                                                        ? ((l.innerHTML =
                                                              this._options.doneLabel),
                                                          p(
                                                              l,
                                                              "".concat(
                                                                  this._options
                                                                      .buttonClass,
                                                                  " introjs-nextbutton introjs-donebutton"
                                                              )
                                                          ))
                                                        : (l.className =
                                                              "".concat(
                                                                  this._options
                                                                      .buttonClass,
                                                                  " introjs-nextbutton introjs-disabled"
                                                              ))))
                                            : (null != c &&
                                                  (c.className = "".concat(
                                                      this._options.buttonClass,
                                                      " introjs-prevbutton"
                                                  )),
                                              null != l &&
                                                  ((l.className = "".concat(
                                                      this._options.buttonClass,
                                                      " introjs-nextbutton"
                                                  )),
                                                  (l.innerHTML =
                                                      this._options.nextLabel))),
                                        null != c &&
                                            c.setAttribute("role", "button"),
                                        null != l &&
                                            l.setAttribute("role", "button"),
                                        null != u &&
                                            u.setAttribute("role", "button"),
                                        null != l && l.focus(),
                                        d(n.element),
                                        void 0 ===
                                            this._introAfterChangeCallback)
                                    ) {
                                        e.next = 22;
                                        break;
                                    }
                                    return (
                                        (e.next = 22),
                                        this._introAfterChangeCallback.call(
                                            this,
                                            n.element
                                        )
                                    );
                                case 22:
                                case "end":
                                    return e.stop();
                            }
                    },
                    e,
                    this
                );
            })
        )).apply(this, arguments);
    }
    function D(t) {
        return G.apply(this, arguments);
    }
    function G() {
        return (G = r(
            t().mark(function e(n) {
                return t().wrap(
                    function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    if (
                                        ((this._currentStep = n - 2),
                                        void 0 === this._introItems)
                                    ) {
                                        t.next = 4;
                                        break;
                                    }
                                    return (t.next = 4), W.call(this);
                                case 4:
                                case "end":
                                    return t.stop();
                            }
                    },
                    e,
                    this
                );
            })
        )).apply(this, arguments);
    }
    function V(t) {
        return z.apply(this, arguments);
    }
    function z() {
        return (z = r(
            t().mark(function e(n) {
                return t().wrap(
                    function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    if (
                                        ((this._currentStepNumber = n),
                                        void 0 === this._introItems)
                                    ) {
                                        t.next = 4;
                                        break;
                                    }
                                    return (t.next = 4), W.call(this);
                                case 4:
                                case "end":
                                    return t.stop();
                            }
                    },
                    e,
                    this
                );
            })
        )).apply(this, arguments);
    }
    function W() {
        return Y.apply(this, arguments);
    }
    function Y() {
        return (
            (Y = r(
                t().mark(function e() {
                    var n,
                        r,
                        i = this;
                    return t().wrap(
                        function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        if (
                                            ((this._direction = "forward"),
                                            void 0 !==
                                                this._currentStepNumber &&
                                                u(
                                                    this._introItems,
                                                    function (t, e) {
                                                        t.step ===
                                                            i._currentStepNumber &&
                                                            ((i._currentStep =
                                                                e - 1),
                                                            (i._currentStepNumber =
                                                                void 0));
                                                    }
                                                ),
                                            void 0 === this._currentStep
                                                ? (this._currentStep = 0)
                                                : ++this._currentStep,
                                            (n =
                                                this._introItems[
                                                    this._currentStep
                                                ]),
                                            (r = !0),
                                            void 0 ===
                                                this._introBeforeChangeCallback)
                                        ) {
                                            t.next = 9;
                                            break;
                                        }
                                        return (
                                            (t.next = 8),
                                            this._introBeforeChangeCallback.call(
                                                this,
                                                n && n.element
                                            )
                                        );
                                    case 8:
                                        r = t.sent;
                                    case 9:
                                        if (!1 !== r) {
                                            t.next = 12;
                                            break;
                                        }
                                        return (
                                            --this._currentStep,
                                            t.abrupt("return", !1)
                                        );
                                    case 12:
                                        if (
                                            !(
                                                this._introItems.length <=
                                                this._currentStep
                                            )
                                        ) {
                                            t.next = 19;
                                            break;
                                        }
                                        if (
                                            "function" !=
                                            typeof this._introCompleteCallback
                                        ) {
                                            t.next = 16;
                                            break;
                                        }
                                        return (
                                            (t.next = 16),
                                            this._introCompleteCallback.call(
                                                this,
                                                this._currentStep,
                                                "end"
                                            )
                                        );
                                    case 16:
                                        return (
                                            (t.next = 18),
                                            xt.call(this, this._targetElement)
                                        );
                                    case 18:
                                        return t.abrupt("return", !1);
                                    case 19:
                                        return (t.next = 21), M.call(this, n);
                                    case 21:
                                        return t.abrupt("return", !0);
                                    case 22:
                                    case "end":
                                        return t.stop();
                                }
                        },
                        e,
                        this
                    );
                })
            )),
            Y.apply(this, arguments)
        );
    }
    function $() {
        return Q.apply(this, arguments);
    }
    function Q() {
        return (
            (Q = r(
                t().mark(function e() {
                    var n, r;
                    return t().wrap(
                        function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        if (
                                            ((this._direction = "backward"),
                                            0 !== this._currentStep)
                                        ) {
                                            t.next = 3;
                                            break;
                                        }
                                        return t.abrupt("return", !1);
                                    case 3:
                                        if (
                                            (--this._currentStep,
                                            (n =
                                                this._introItems[
                                                    this._currentStep
                                                ]),
                                            (r = !0),
                                            void 0 ===
                                                this._introBeforeChangeCallback)
                                        ) {
                                            t.next = 10;
                                            break;
                                        }
                                        return (
                                            (t.next = 9),
                                            this._introBeforeChangeCallback.call(
                                                this,
                                                n && n.element
                                            )
                                        );
                                    case 9:
                                        r = t.sent;
                                    case 10:
                                        if (!1 !== r) {
                                            t.next = 13;
                                            break;
                                        }
                                        return (
                                            ++this._currentStep,
                                            t.abrupt("return", !1)
                                        );
                                    case 13:
                                        return (t.next = 15), M.call(this, n);
                                    case 15:
                                        return t.abrupt("return", !0);
                                    case 16:
                                    case "end":
                                        return t.stop();
                                }
                        },
                        e,
                        this
                    );
                })
            )),
            Q.apply(this, arguments)
        );
    }
    function U() {
        return this._currentStep;
    }
    function X(t) {
        return J.apply(this, arguments);
    }
    function J() {
        return (J = r(
            t().mark(function e(n) {
                var r, i;
                return t().wrap(
                    function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    if (
                                        (null ===
                                            (r =
                                                void 0 === n.code
                                                    ? n.which
                                                    : n.code) &&
                                            (r =
                                                null === n.charCode
                                                    ? n.keyCode
                                                    : n.charCode),
                                        ("Escape" !== r && 27 !== r) ||
                                            !0 !== this._options.exitOnEsc)
                                    ) {
                                        t.next = 7;
                                        break;
                                    }
                                    return (
                                        (t.next = 5),
                                        xt.call(this, this._targetElement)
                                    );
                                case 5:
                                    t.next = 39;
                                    break;
                                case 7:
                                    if ("ArrowLeft" !== r && 37 !== r) {
                                        t.next = 12;
                                        break;
                                    }
                                    return (t.next = 10), $.call(this);
                                case 10:
                                    t.next = 39;
                                    break;
                                case 12:
                                    if ("ArrowRight" !== r && 39 !== r) {
                                        t.next = 17;
                                        break;
                                    }
                                    return (t.next = 15), W.call(this);
                                case 15:
                                    t.next = 39;
                                    break;
                                case 17:
                                    if (
                                        "Enter" !== r &&
                                        "NumpadEnter" !== r &&
                                        13 !== r
                                    ) {
                                        t.next = 39;
                                        break;
                                    }
                                    if (
                                        !(i = n.target || n.srcElement) ||
                                        !i.className.match("introjs-prevbutton")
                                    ) {
                                        t.next = 24;
                                        break;
                                    }
                                    return (t.next = 22), $.call(this);
                                case 22:
                                    t.next = 38;
                                    break;
                                case 24:
                                    if (
                                        !i ||
                                        !i.className.match("introjs-skipbutton")
                                    ) {
                                        t.next = 32;
                                        break;
                                    }
                                    if (
                                        this._introItems.length - 1 !==
                                            this._currentStep ||
                                        "function" !=
                                            typeof this._introCompleteCallback
                                    ) {
                                        t.next = 28;
                                        break;
                                    }
                                    return (
                                        (t.next = 28),
                                        this._introCompleteCallback.call(
                                            this,
                                            this._currentStep,
                                            "skip"
                                        )
                                    );
                                case 28:
                                    return (
                                        (t.next = 30),
                                        xt.call(this, this._targetElement)
                                    );
                                case 30:
                                    t.next = 38;
                                    break;
                                case 32:
                                    if (
                                        !i ||
                                        !i.getAttribute("data-step-number")
                                    ) {
                                        t.next = 36;
                                        break;
                                    }
                                    i.click(), (t.next = 38);
                                    break;
                                case 36:
                                    return (t.next = 38), W.call(this);
                                case 38:
                                    n.preventDefault
                                        ? n.preventDefault()
                                        : (n.returnValue = !1);
                                case 39:
                                case "end":
                                    return t.stop();
                            }
                    },
                    e,
                    this
                );
            })
        )).apply(this, arguments);
    }
    function Z(t) {
        if (null === t || "object" !== e(t) || "nodeType" in t) return t;
        var n = {};
        for (var r in t)
            "jQuery" in window && t[r] instanceof window.jQuery
                ? (n[r] = t[r])
                : (n[r] = Z(t[r]));
        return n;
    }
    function K(t, e) {
        var n,
            r = this;
        return function () {
            for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
                o[a] = arguments[a];
            clearTimeout(n),
                (n = setTimeout(function () {
                    t.apply(r, o);
                }, e));
        };
    }
    function tt(t) {
        var e = document.querySelector(".introjs-hints");
        return e ? Array.from(e.querySelectorAll(t)) : [];
    }
    function et(t) {
        return nt.apply(this, arguments);
    }
    function nt() {
        return (nt = r(
            t().mark(function e(n) {
                var r;
                return t().wrap(
                    function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    if (
                                        ((r = tt(
                                            '.introjs-hint[data-step="'.concat(
                                                n,
                                                '"]'
                                            )
                                        )[0]),
                                        dt.call(this),
                                        r && p(r, "introjs-hidehint"),
                                        void 0 === this._hintCloseCallback)
                                    ) {
                                        t.next = 6;
                                        break;
                                    }
                                    return (
                                        (t.next = 6),
                                        this._hintCloseCallback.call(this, n)
                                    );
                                case 6:
                                case "end":
                                    return t.stop();
                            }
                    },
                    e,
                    this
                );
            })
        )).apply(this, arguments);
    }
    function rt() {
        var e = this;
        u(
            tt(".introjs-hint"),
            (function () {
                var n = r(
                    t().mark(function n(r) {
                        return t().wrap(function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (
                                            (t.next = 2),
                                            et.call(
                                                e,
                                                r.getAttribute("data-step")
                                            )
                                        );
                                    case 2:
                                    case "end":
                                        return t.stop();
                                }
                        }, n);
                    })
                );
                return function (t) {
                    return n.apply(this, arguments);
                };
            })()
        );
    }
    function it() {
        return ot.apply(this, arguments);
    }
    function ot() {
        return (ot = r(
            t().mark(function e() {
                var n,
                    r = this;
                return t().wrap(
                    function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    if (
                                        !(n = tt(".introjs-hint")) ||
                                        !n.length
                                    ) {
                                        t.next = 5;
                                        break;
                                    }
                                    u(n, function (t) {
                                        at.call(r, t.getAttribute("data-step"));
                                    }),
                                        (t.next = 7);
                                    break;
                                case 5:
                                    return (
                                        (t.next = 7),
                                        mt.call(this, this._targetElement)
                                    );
                                case 7:
                                case "end":
                                    return t.stop();
                            }
                    },
                    e,
                    this
                );
            })
        )).apply(this, arguments);
    }
    function at(t) {
        var e = tt('.introjs-hint[data-step="'.concat(t, '"]'))[0];
        e && _(e, /introjs-hidehint/g);
    }
    function st() {
        var t = this;
        u(tt(".introjs-hint"), function (e) {
            lt.call(t, e.getAttribute("data-step"));
        }),
            h.off(document, "click", dt, this, !1),
            h.off(window, "resize", vt, this, !0),
            this._hintsAutoRefreshFunction &&
                h.off(
                    window,
                    "scroll",
                    this._hintsAutoRefreshFunction,
                    this,
                    !0
                );
    }
    function lt(t) {
        var e = tt('.introjs-hint[data-step="'.concat(t, '"]'))[0];
        e && e.parentNode.removeChild(e);
    }
    function ct() {
        return ut.apply(this, arguments);
    }
    function ut() {
        return (ut = r(
            t().mark(function e() {
                var n,
                    r,
                    i,
                    o = this;
                return t().wrap(
                    function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    if (
                                        ((n = this),
                                        null ===
                                            (r =
                                                document.querySelector(
                                                    ".introjs-hints"
                                                )) &&
                                            (r = L("div", {
                                                className: "introjs-hints",
                                            })),
                                        (i = function (t) {
                                            return function (e) {
                                                var r = e || window.event;
                                                r.stopPropagation &&
                                                    r.stopPropagation(),
                                                    null !== r.cancelBubble &&
                                                        (r.cancelBubble = !0),
                                                    pt.call(n, t);
                                            };
                                        }),
                                        u(this._introItems, function (t, e) {
                                            if (
                                                !document.querySelector(
                                                    '.introjs-hint[data-step="'.concat(
                                                        e,
                                                        '"]'
                                                    )
                                                )
                                            ) {
                                                var n = L("a", {
                                                    className: "introjs-hint",
                                                });
                                                y(n),
                                                    (n.onclick = i(e)),
                                                    t.hintAnimation ||
                                                        p(
                                                            n,
                                                            "introjs-hint-no-anim"
                                                        ),
                                                    g(t.element) &&
                                                        p(
                                                            n,
                                                            "introjs-fixedhint"
                                                        );
                                                var a = L("div", {
                                                        className:
                                                            "introjs-hint-dot",
                                                    }),
                                                    s = L("div", {
                                                        className:
                                                            "introjs-hint-pulse",
                                                    });
                                                n.appendChild(a),
                                                    n.appendChild(s),
                                                    n.setAttribute(
                                                        "data-step",
                                                        e.toString()
                                                    );
                                                var l = t.element;
                                                (t.element = n),
                                                    ht.call(
                                                        o,
                                                        t.hintPosition,
                                                        n,
                                                        l
                                                    ),
                                                    r.appendChild(n);
                                            }
                                        }),
                                        document.body.appendChild(r),
                                        void 0 === this._hintsAddedCallback)
                                    ) {
                                        t.next = 9;
                                        break;
                                    }
                                    return (
                                        (t.next = 9),
                                        this._hintsAddedCallback.call(this)
                                    );
                                case 9:
                                    this._options.hintAutoRefreshInterval >=
                                        0 &&
                                        ((this._hintsAutoRefreshFunction = K(
                                            function () {
                                                return vt.call(o);
                                            },
                                            this._options
                                                .hintAutoRefreshInterval
                                        )),
                                        h.on(
                                            window,
                                            "scroll",
                                            this._hintsAutoRefreshFunction,
                                            this,
                                            !0
                                        ));
                                case 10:
                                case "end":
                                    return t.stop();
                            }
                    },
                    e,
                    this
                );
            })
        )).apply(this, arguments);
    }
    function ht(t, e, n) {
        var r = w.call(this, n),
            i = 20,
            o = 20;
        switch (t) {
            default:
            case "top-left":
                (e.style.left = "".concat(r.left, "px")),
                    (e.style.top = "".concat(r.top, "px"));
                break;
            case "top-right":
                (e.style.left = "".concat(r.left + r.width - i, "px")),
                    (e.style.top = "".concat(r.top, "px"));
                break;
            case "bottom-left":
                (e.style.left = "".concat(r.left, "px")),
                    (e.style.top = "".concat(r.top + r.height - o, "px"));
                break;
            case "bottom-right":
                (e.style.left = "".concat(r.left + r.width - i, "px")),
                    (e.style.top = "".concat(r.top + r.height - o, "px"));
                break;
            case "middle-left":
                (e.style.left = "".concat(r.left, "px")),
                    (e.style.top = "".concat(r.top + (r.height - o) / 2, "px"));
                break;
            case "middle-right":
                (e.style.left = "".concat(r.left + r.width - i, "px")),
                    (e.style.top = "".concat(r.top + (r.height - o) / 2, "px"));
                break;
            case "middle-middle":
                (e.style.left = "".concat(r.left + (r.width - i) / 2, "px")),
                    (e.style.top = "".concat(r.top + (r.height - o) / 2, "px"));
                break;
            case "bottom-middle":
                (e.style.left = "".concat(r.left + (r.width - i) / 2, "px")),
                    (e.style.top = "".concat(r.top + r.height - o, "px"));
                break;
            case "top-middle":
                (e.style.left = "".concat(r.left + (r.width - i) / 2, "px")),
                    (e.style.top = "".concat(r.top, "px"));
        }
    }
    function pt(t) {
        return ft.apply(this, arguments);
    }
    function ft() {
        return (ft = r(
            t().mark(function e(n) {
                var r, i, o, a, s, l, c, u, h;
                return t().wrap(
                    function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    if (
                                        ((r = document.querySelector(
                                            '.introjs-hint[data-step="'.concat(
                                                n,
                                                '"]'
                                            )
                                        )),
                                        (i = this._introItems[n]),
                                        void 0 === this._hintClickCallback)
                                    ) {
                                        t.next = 5;
                                        break;
                                    }
                                    return (
                                        (t.next = 5),
                                        this._hintClickCallback.call(
                                            this,
                                            r,
                                            i,
                                            n
                                        )
                                    );
                                case 5:
                                    if (
                                        ((o = dt.call(this)),
                                        parseInt(o, 10) !== n)
                                    ) {
                                        t.next = 8;
                                        break;
                                    }
                                    return t.abrupt("return");
                                case 8:
                                    (a = L("div", {
                                        className: "introjs-tooltip",
                                    })),
                                        (s = L("div")),
                                        (l = L("div")),
                                        (c = L("div")),
                                        (a.onclick = function (t) {
                                            t.stopPropagation
                                                ? t.stopPropagation()
                                                : (t.cancelBubble = !0);
                                        }),
                                        (s.className = "introjs-tooltiptext"),
                                        ((u = L("p")).innerHTML = i.hint),
                                        s.appendChild(u),
                                        this._options.hintShowButton &&
                                            (((h = L("a")).className =
                                                this._options.buttonClass),
                                            h.setAttribute("role", "button"),
                                            (h.innerHTML =
                                                this._options.hintButtonLabel),
                                            (h.onclick = et.bind(this, n)),
                                            s.appendChild(h)),
                                        (l.className = "introjs-arrow"),
                                        a.appendChild(l),
                                        a.appendChild(s),
                                        (this._currentStep =
                                            r.getAttribute("data-step")),
                                        (c.className =
                                            "introjs-tooltipReferenceLayer introjs-hintReference"),
                                        c.setAttribute(
                                            "data-step",
                                            r.getAttribute("data-step")
                                        ),
                                        k.call(this, c),
                                        c.appendChild(a),
                                        document.body.appendChild(c),
                                        E.call(this, r, a, l, !0);
                                case 28:
                                case "end":
                                    return t.stop();
                            }
                    },
                    e,
                    this
                );
            })
        )).apply(this, arguments);
    }
    function dt() {
        var t = document.querySelector(".introjs-hintReference");
        if (t) {
            var e = t.getAttribute("data-step");
            return t.parentNode.removeChild(t), e;
        }
    }
    function mt(t) {
        return bt.apply(this, arguments);
    }
    function bt() {
        return (bt = r(
            t().mark(function e(n) {
                var r,
                    i = this;
                return t().wrap(
                    function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    if (
                                        ((this._introItems = []),
                                        !this._options.hints)
                                    ) {
                                        t.next = 5;
                                        break;
                                    }
                                    u(this._options.hints, function (t) {
                                        var e = Z(t);
                                        "string" == typeof e.element &&
                                            (e.element = document.querySelector(
                                                e.element
                                            )),
                                            (e.hintPosition =
                                                e.hintPosition ||
                                                i._options.hintPosition),
                                            (e.hintAnimation =
                                                e.hintAnimation ||
                                                i._options.hintAnimation),
                                            null !== e.element &&
                                                i._introItems.push(e);
                                    }),
                                        (t.next = 9);
                                    break;
                                case 5:
                                    if (
                                        (r = Array.from(
                                            n.querySelectorAll("*[data-hint]")
                                        )) &&
                                        r.length
                                    ) {
                                        t.next = 8;
                                        break;
                                    }
                                    return t.abrupt("return", !1);
                                case 8:
                                    u(r, function (t) {
                                        var e = t.getAttribute(
                                            "data-hint-animation"
                                        );
                                        (e = e
                                            ? "true" === e
                                            : i._options.hintAnimation),
                                            i._introItems.push({
                                                element: t,
                                                hint: t.getAttribute(
                                                    "data-hint"
                                                ),
                                                hintPosition:
                                                    t.getAttribute(
                                                        "data-hint-position"
                                                    ) ||
                                                    i._options.hintPosition,
                                                hintAnimation: e,
                                                tooltipClass:
                                                    t.getAttribute(
                                                        "data-tooltip-class"
                                                    ),
                                                position:
                                                    t.getAttribute(
                                                        "data-position"
                                                    ) ||
                                                    i._options.tooltipPosition,
                                            });
                                    });
                                case 9:
                                    return (t.next = 11), ct.call(this);
                                case 11:
                                    return (
                                        h.on(document, "click", dt, this, !1),
                                        h.on(window, "resize", vt, this, !0),
                                        t.abrupt("return", !0)
                                    );
                                case 14:
                                case "end":
                                    return t.stop();
                            }
                    },
                    e,
                    this
                );
            })
        )).apply(this, arguments);
    }
    function vt() {
        var t = this;
        u(this._introItems, function (e) {
            var n = e.targetElement,
                r = e.hintPosition,
                i = e.element;
            void 0 !== n && ht.call(t, r, i, n);
        });
    }
    function yt(t) {
        var e = this,
            n = Array.from(t.querySelectorAll("*[data-intro]")),
            r = [];
        if (this._options.steps)
            u(this._options.steps, function (t) {
                var n = Z(t);
                if (
                    ((n.step = r.length + 1),
                    (n.title = n.title || ""),
                    "string" == typeof n.element &&
                        (n.element = document.querySelector(n.element)),
                    void 0 === n.element || null === n.element)
                ) {
                    var i = document.querySelector(".introjsFloatingElement");
                    null === i &&
                        ((i = L("div", {
                            className: "introjsFloatingElement",
                        })),
                        document.body.appendChild(i)),
                        (n.element = i),
                        (n.position = "floating");
                }
                (n.position = n.position || e._options.tooltipPosition),
                    (n.scrollTo = n.scrollTo || e._options.scrollTo),
                    void 0 === n.disableInteraction &&
                        (n.disableInteraction = e._options.disableInteraction),
                    null !== n.element && r.push(n);
            });
        else {
            var i;
            if (n.length < 1) return [];
            u(n, function (t) {
                if (
                    (!e._options.group ||
                        t.getAttribute("data-intro-group") ===
                            e._options.group) &&
                    "none" !== t.style.display
                ) {
                    var n = parseInt(t.getAttribute("data-step"), 10);
                    (i = t.hasAttribute("data-disable-interaction")
                        ? !!t.getAttribute("data-disable-interaction")
                        : e._options.disableInteraction),
                        n > 0 &&
                            (r[n - 1] = {
                                element: t,
                                title: t.getAttribute("data-title") || "",
                                intro: t.getAttribute("data-intro"),
                                step: parseInt(t.getAttribute("data-step"), 10),
                                tooltipClass:
                                    t.getAttribute("data-tooltip-class"),
                                highlightClass: t.getAttribute(
                                    "data-highlight-class"
                                ),
                                position:
                                    t.getAttribute("data-position") ||
                                    e._options.tooltipPosition,
                                scrollTo:
                                    t.getAttribute("data-scroll-to") ||
                                    e._options.scrollTo,
                                disableInteraction: i,
                            });
                }
            });
            var o = 0;
            u(n, function (t) {
                if (
                    (!e._options.group ||
                        t.getAttribute("data-intro-group") ===
                            e._options.group) &&
                    null === t.getAttribute("data-step")
                ) {
                    for (; void 0 !== r[o]; ) o++;
                    (i = t.hasAttribute("data-disable-interaction")
                        ? !!t.getAttribute("data-disable-interaction")
                        : e._options.disableInteraction),
                        (r[o] = {
                            element: t,
                            title: t.getAttribute("data-title") || "",
                            intro: t.getAttribute("data-intro"),
                            step: o + 1,
                            tooltipClass: t.getAttribute("data-tooltip-class"),
                            highlightClass: t.getAttribute(
                                "data-highlight-class"
                            ),
                            position:
                                t.getAttribute("data-position") ||
                                e._options.tooltipPosition,
                            scrollTo:
                                t.getAttribute("data-scroll-to") ||
                                e._options.scrollTo,
                            disableInteraction: i,
                        });
                }
            });
        }
        for (var a = [], s = 0; s < r.length; s++) r[s] && a.push(r[s]);
        return (
            (r = a).sort(function (t, e) {
                return t.step - e.step;
            }),
            r
        );
    }
    function gt(t) {
        var e = document.querySelector(".introjs-tooltipReferenceLayer"),
            n = document.querySelector(".introjs-helperLayer"),
            r = document.querySelector(".introjs-disableInteraction");
        if (
            (k.call(this, n),
            k.call(this, e),
            k.call(this, r),
            t &&
                ((this._introItems = yt.call(this, this._targetElement)),
                O.call(this, this._introItems[this._currentStep]),
                R.call(this, e)),
            void 0 !== this._currentStep && null !== this._currentStep)
        ) {
            var i = document.querySelector(".introjs-arrow"),
                o = document.querySelector(".introjs-tooltip");
            o &&
                i &&
                E.call(this, this._introItems[this._currentStep].element, o, i);
        }
        return vt.call(this), this;
    }
    function wt() {
        gt.call(this);
    }
    function _t(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && t.parentElement) {
            var n = t.parentElement;
            e
                ? (x(t, { opacity: "0" }),
                  window.setTimeout(function () {
                      try {
                          n.removeChild(t);
                      } catch (t) {}
                  }, 500))
                : n.removeChild(t);
        }
    }
    function xt(t, e) {
        return kt.apply(this, arguments);
    }
    function kt() {
        return (kt = r(
            t().mark(function e(n, r) {
                var i, o;
                return t().wrap(
                    function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    if (
                                        ((i = !0),
                                        void 0 ===
                                            this._introBeforeExitCallback)
                                    ) {
                                        t.next = 5;
                                        break;
                                    }
                                    return (
                                        (t.next = 4),
                                        this._introBeforeExitCallback.call(this)
                                    );
                                case 4:
                                    i = t.sent;
                                case 5:
                                    if (r || !1 !== i) {
                                        t.next = 7;
                                        break;
                                    }
                                    return t.abrupt("return");
                                case 7:
                                    if (
                                        ((o = Array.from(
                                            n.querySelectorAll(
                                                ".introjs-overlay"
                                            )
                                        )) &&
                                            o.length &&
                                            u(o, function (t) {
                                                return _t(t);
                                            }),
                                        _t(
                                            n.querySelector(
                                                ".introjs-helperLayer"
                                            ),
                                            !0
                                        ),
                                        _t(
                                            n.querySelector(
                                                ".introjs-tooltipReferenceLayer"
                                            )
                                        ),
                                        _t(
                                            n.querySelector(
                                                ".introjs-disableInteraction"
                                            )
                                        ),
                                        _t(
                                            document.querySelector(
                                                ".introjsFloatingElement"
                                            )
                                        ),
                                        N(),
                                        h.off(window, "keydown", X, this, !0),
                                        h.off(window, "resize", wt, this, !0),
                                        void 0 === this._introExitCallback)
                                    ) {
                                        t.next = 23;
                                        break;
                                    }
                                    return (
                                        (t.next = 23),
                                        this._introExitCallback.call(this)
                                    );
                                case 23:
                                    this._currentStep = void 0;
                                case 24:
                                case "end":
                                    return t.stop();
                            }
                    },
                    e,
                    this
                );
            })
        )).apply(this, arguments);
    }
    function Ct(e) {
        var n = this,
            i = L("div", { className: "introjs-overlay" });
        return (
            x(i, { top: 0, bottom: 0, left: 0, right: 0, position: "fixed" }),
            e.appendChild(i),
            !0 === this._options.exitOnOverlayClick &&
                (x(i, { cursor: "pointer" }),
                (i.onclick = r(
                    t().mark(function r() {
                        return t().wrap(function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (t.next = 2), xt.call(n, e);
                                    case 2:
                                    case "end":
                                        return t.stop();
                                }
                        }, r);
                    })
                ))),
            !0
        );
    }
    function St(t) {
        return jt.apply(this, arguments);
    }
    function jt() {
        return (jt = r(
            t().mark(function e(n) {
                var r;
                return t().wrap(
                    function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    if (this.isActive()) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return", !1);
                                case 2:
                                    if (void 0 === this._introStartCallback) {
                                        t.next = 5;
                                        break;
                                    }
                                    return (
                                        (t.next = 5),
                                        this._introStartCallback.call(this, n)
                                    );
                                case 5:
                                    if (0 !== (r = yt.call(this, n)).length) {
                                        t.next = 8;
                                        break;
                                    }
                                    return t.abrupt("return", !1);
                                case 8:
                                    if (
                                        ((this._introItems = r),
                                        !Ct.call(this, n))
                                    ) {
                                        t.next = 14;
                                        break;
                                    }
                                    return (t.next = 12), W.call(this);
                                case 12:
                                    this._options.keyboardNavigation &&
                                        h.on(window, "keydown", X, this, !0),
                                        h.on(window, "resize", wt, this, !0);
                                case 14:
                                    return t.abrupt("return", !1);
                                case 15:
                                case "end":
                                    return t.stop();
                            }
                    },
                    e,
                    this
                );
            })
        )).apply(this, arguments);
    }
    function At(t, e, n) {
        var r,
            i =
                (o((r = {}), t, e),
                o(r, "path", "/"),
                o(r, "expires", void 0),
                r);
        if (n) {
            var a = new Date();
            a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3),
                (i.expires = a.toUTCString());
        }
        var s = [];
        for (var l in i) s.push("".concat(l, "=").concat(i[l]));
        return (document.cookie = s.join("; ")), Et(t);
    }
    function Et(t) {
        return ((e = {}),
        document.cookie.split(";").forEach(function (t) {
            var n = a(t.split("="), 2),
                r = n[0],
                i = n[1];
            e[r.trim()] = i;
        }),
        e)[t];
        var e;
    }
    var Nt = "true";
    function Lt(t) {
        t
            ? At(
                  this._options.dontShowAgainCookie,
                  Nt,
                  this._options.dontShowAgainCookieDays
              )
            : At(this._options.dontShowAgainCookie, "", -1);
    }
    function Tt() {
        var t = Et(this._options.dontShowAgainCookie);
        return t && t === Nt;
    }
    var It = (function () {
            function e(t) {
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                })(this, e),
                    o(this, "_targetElement", void 0),
                    o(this, "_introItems", []),
                    o(this, "_options", void 0),
                    o(this, "_introBeforeChangeCallback", void 0),
                    o(this, "_introChangeCallback", void 0),
                    o(this, "_introAfterChangeCallback", void 0),
                    o(this, "_introCompleteCallback", void 0),
                    o(this, "_hintsAddedCallback", void 0),
                    o(this, "_hintClickCallback", void 0),
                    o(this, "_hintCloseCallback", void 0),
                    o(this, "_introStartCallback", void 0),
                    o(this, "_introExitCallback", void 0),
                    o(this, "_introSkipCallback", void 0),
                    o(this, "_introBeforeExitCallback", void 0),
                    (this._targetElement = t),
                    (this._options = {
                        isActive: !0,
                        nextLabel: "Next",
                        prevLabel: "Back",
                        skipLabel: "×",
                        doneLabel: "Done",
                        hidePrev: !1,
                        hideNext: !1,
                        nextToDone: !0,
                        tooltipPosition: "bottom",
                        tooltipClass: "",
                        group: "",
                        highlightClass: "",
                        exitOnEsc: !0,
                        exitOnOverlayClick: !0,
                        showStepNumbers: !1,
                        stepNumbersOfLabel: "of",
                        keyboardNavigation: !0,
                        showButtons: !0,
                        showBullets: !0,
                        showProgress: !1,
                        scrollToElement: !0,
                        scrollTo: "element",
                        scrollPadding: 30,
                        overlayOpacity: 0.5,
                        autoPosition: !0,
                        positionPrecedence: ["bottom", "top", "right", "left"],
                        disableInteraction: !1,
                        dontShowAgain: !1,
                        dontShowAgainLabel: "Don't show this again",
                        dontShowAgainCookie: "introjs-dontShowAgain",
                        dontShowAgainCookieDays: 365,
                        helperElementPadding: 10,
                        hintPosition: "top-middle",
                        hintButtonLabel: "Got it",
                        hintShowButton: !0,
                        hintAutoRefreshInterval: 10,
                        hintAnimation: !0,
                        buttonClass: "introjs-button",
                        progressBarAdditionalClass: !1,
                    });
            }
            var n, a, s, l, c, u, h, p, f, d, m, b, v;
            return (
                (n = e),
                (a = [
                    {
                        key: "isActive",
                        value: function () {
                            return (
                                (!this._options.dontShowAgain ||
                                    !Tt.call(this)) &&
                                this._options.isActive
                            );
                        },
                    },
                    {
                        key: "clone",
                        value: function () {
                            return new e(this._targetElement);
                        },
                    },
                    {
                        key: "setOption",
                        value: function (t, e) {
                            return (this._options[t] = e), this;
                        },
                    },
                    {
                        key: "setOptions",
                        value: function (t) {
                            return (
                                (this._options = (function (t, e) {
                                    var n,
                                        r = {};
                                    for (n in t) r[n] = t[n];
                                    for (n in e) r[n] = e[n];
                                    return r;
                                })(this._options, t)),
                                this
                            );
                        },
                    },
                    {
                        key: "start",
                        value:
                            ((v = r(
                                t().mark(function e() {
                                    return t().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            St.call(
                                                                this,
                                                                this
                                                                    ._targetElement
                                                            )
                                                        );
                                                    case 2:
                                                        return t.abrupt(
                                                            "return",
                                                            this
                                                        );
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            )),
                            function () {
                                return v.apply(this, arguments);
                            }),
                    },
                    {
                        key: "goToStep",
                        value:
                            ((b = r(
                                t().mark(function e(n) {
                                    return t().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            D.call(this, n)
                                                        );
                                                    case 2:
                                                        return t.abrupt(
                                                            "return",
                                                            this
                                                        );
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            )),
                            function (t) {
                                return b.apply(this, arguments);
                            }),
                    },
                    {
                        key: "addStep",
                        value: function (t) {
                            return (
                                this._options.steps ||
                                    (this._options.steps = []),
                                this._options.steps.push(t),
                                this
                            );
                        },
                    },
                    {
                        key: "addSteps",
                        value: function (t) {
                            if (!t.length) return this;
                            for (var e = 0; e < t.length; e++)
                                this.addStep(t[e]);
                            return this;
                        },
                    },
                    {
                        key: "goToStepNumber",
                        value:
                            ((m = r(
                                t().mark(function e(n) {
                                    return t().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            V.call(this, n)
                                                        );
                                                    case 2:
                                                        return t.abrupt(
                                                            "return",
                                                            this
                                                        );
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            )),
                            function (t) {
                                return m.apply(this, arguments);
                            }),
                    },
                    {
                        key: "nextStep",
                        value:
                            ((d = r(
                                t().mark(function e() {
                                    return t().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            W.call(this)
                                                        );
                                                    case 2:
                                                        return t.abrupt(
                                                            "return",
                                                            this
                                                        );
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            )),
                            function () {
                                return d.apply(this, arguments);
                            }),
                    },
                    {
                        key: "previousStep",
                        value:
                            ((f = r(
                                t().mark(function e() {
                                    return t().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            $.call(this)
                                                        );
                                                    case 2:
                                                        return t.abrupt(
                                                            "return",
                                                            this
                                                        );
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            )),
                            function () {
                                return f.apply(this, arguments);
                            }),
                    },
                    {
                        key: "currentStep",
                        value: function () {
                            return U.call(this);
                        },
                    },
                    {
                        key: "exit",
                        value:
                            ((p = r(
                                t().mark(function e(n) {
                                    return t().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            xt.call(
                                                                this,
                                                                this
                                                                    ._targetElement,
                                                                n
                                                            )
                                                        );
                                                    case 2:
                                                        return t.abrupt(
                                                            "return",
                                                            this
                                                        );
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            )),
                            function (t) {
                                return p.apply(this, arguments);
                            }),
                    },
                    {
                        key: "refresh",
                        value: function (t) {
                            return gt.call(this, t), this;
                        },
                    },
                    {
                        key: "setDontShowAgain",
                        value: function (t) {
                            return Lt.call(this, t), this;
                        },
                    },
                    {
                        key: "onbeforechange",
                        value: function (t) {
                            if ("function" != typeof t)
                                throw new Error(
                                    "Provided callback for onbeforechange was not a function"
                                );
                            return (this._introBeforeChangeCallback = t), this;
                        },
                    },
                    {
                        key: "onchange",
                        value: function (t) {
                            if ("function" != typeof t)
                                throw new Error(
                                    "Provided callback for onchange was not a function."
                                );
                            return (this._introChangeCallback = t), this;
                        },
                    },
                    {
                        key: "onafterchange",
                        value: function (t) {
                            if ("function" != typeof t)
                                throw new Error(
                                    "Provided callback for onafterchange was not a function"
                                );
                            return (this._introAfterChangeCallback = t), this;
                        },
                    },
                    {
                        key: "oncomplete",
                        value: function (t) {
                            if ("function" != typeof t)
                                throw new Error(
                                    "Provided callback for oncomplete was not a function."
                                );
                            return (this._introCompleteCallback = t), this;
                        },
                    },
                    {
                        key: "onhintsadded",
                        value: function (t) {
                            if ("function" != typeof t)
                                throw new Error(
                                    "Provided callback for onhintsadded was not a function."
                                );
                            return (this._hintsAddedCallback = t), this;
                        },
                    },
                    {
                        key: "onhintclick",
                        value: function (t) {
                            if ("function" != typeof t)
                                throw new Error(
                                    "Provided callback for onhintclick was not a function."
                                );
                            return (this._hintClickCallback = t), this;
                        },
                    },
                    {
                        key: "onhintclose",
                        value: function (t) {
                            if ("function" != typeof t)
                                throw new Error(
                                    "Provided callback for onhintclose was not a function."
                                );
                            return (this._hintCloseCallback = t), this;
                        },
                    },
                    {
                        key: "onstart",
                        value: function (t) {
                            if ("function" != typeof t)
                                throw new Error(
                                    "Provided callback for onstart was not a function."
                                );
                            return (this._introStartCallback = t), this;
                        },
                    },
                    {
                        key: "onexit",
                        value: function (t) {
                            if ("function" != typeof t)
                                throw new Error(
                                    "Provided callback for onexit was not a function."
                                );
                            return (this._introExitCallback = t), this;
                        },
                    },
                    {
                        key: "onskip",
                        value: function (t) {
                            if ("function" != typeof t)
                                throw new Error(
                                    "Provided callback for onskip was not a function."
                                );
                            return (this._introSkipCallback = t), this;
                        },
                    },
                    {
                        key: "onbeforeexit",
                        value: function (t) {
                            if ("function" != typeof t)
                                throw new Error(
                                    "Provided callback for onbeforeexit was not a function."
                                );
                            return (this._introBeforeExitCallback = t), this;
                        },
                    },
                    {
                        key: "addHints",
                        value: (function () {
                            var e = r(
                                t().mark(function e() {
                                    return t().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            mt.call(
                                                                this,
                                                                this
                                                                    ._targetElement
                                                            )
                                                        );
                                                    case 2:
                                                        return t.abrupt(
                                                            "return",
                                                            this
                                                        );
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            );
                            return function () {
                                return e.apply(this, arguments);
                            };
                        })(),
                    },
                    {
                        key: "hideHint",
                        value:
                            ((h = r(
                                t().mark(function e(n) {
                                    return t().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            et.call(this, n)
                                                        );
                                                    case 2:
                                                        return t.abrupt(
                                                            "return",
                                                            this
                                                        );
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            )),
                            function (t) {
                                return h.apply(this, arguments);
                            }),
                    },
                    {
                        key: "hideHints",
                        value:
                            ((u = r(
                                t().mark(function e() {
                                    return t().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            rt.call(this)
                                                        );
                                                    case 2:
                                                        return t.abrupt(
                                                            "return",
                                                            this
                                                        );
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            )),
                            function () {
                                return u.apply(this, arguments);
                            }),
                    },
                    {
                        key: "showHint",
                        value: function (t) {
                            return at.call(this, t), this;
                        },
                    },
                    {
                        key: "showHints",
                        value:
                            ((c = r(
                                t().mark(function e() {
                                    return t().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            it.call(this)
                                                        );
                                                    case 2:
                                                        return t.abrupt(
                                                            "return",
                                                            this
                                                        );
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            )),
                            function () {
                                return c.apply(this, arguments);
                            }),
                    },
                    {
                        key: "removeHints",
                        value: function () {
                            return st.call(this), this;
                        },
                    },
                    {
                        key: "removeHint",
                        value: function (t) {
                            return lt.call(this, t), this;
                        },
                    },
                    {
                        key: "showHintDialog",
                        value:
                            ((l = r(
                                t().mark(function e(n) {
                                    return t().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            pt.call(this, n)
                                                        );
                                                    case 2:
                                                        return t.abrupt(
                                                            "return",
                                                            this
                                                        );
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            )),
                            function (t) {
                                return l.apply(this, arguments);
                            }),
                    },
                ]),
                a && i(n.prototype, a),
                s && i(n, s),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                e
            );
        })(),
        Pt = function t(n) {
            var r;
            if ("object" === e(n)) r = new It(n);
            else if ("string" == typeof n) {
                var i = document.querySelector(n);
                if (!i)
                    throw new Error("There is no element with given selector.");
                r = new It(i);
            } else r = new It(document.body);
            return (t.instances[c(r, "introjs-instance")] = r), r;
        };
    return (Pt.version = "7.0.1"), (Pt.instances = {}), Pt;
});
//# sourceMappingURL=intro.min.js.map;
!(function (i) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], i)
        : "undefined" != typeof exports
        ? (module.exports = i(require("jquery")))
        : i(jQuery);
})(function (i) {
    "use strict";
    var e = window.Slick || {};
    ((e = (function () {
        var e = 0;
        return function (t, o) {
            var s,
                n = this;
            (n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            }),
                (n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                }),
                i.extend(n, n.initials),
                (n.activeBreakpoint = null),
                (n.animType = null),
                (n.animProp = null),
                (n.breakpoints = []),
                (n.breakpointSettings = []),
                (n.cssTransitions = !1),
                (n.focussed = !1),
                (n.interrupted = !1),
                (n.hidden = "hidden"),
                (n.paused = !0),
                (n.positionProp = null),
                (n.respondTo = null),
                (n.rowCount = 1),
                (n.shouldClick = !0),
                (n.$slider = i(t)),
                (n.$slidesCache = null),
                (n.transformType = null),
                (n.transitionType = null),
                (n.visibilityChange = "visibilitychange"),
                (n.windowWidth = 0),
                (n.windowTimer = null),
                (s = i(t).data("slick") || {}),
                (n.options = i.extend({}, n.defaults, o, s)),
                (n.currentSlide = n.options.initialSlide),
                (n.originalSettings = n.options),
                void 0 !== document.mozHidden
                    ? ((n.hidden = "mozHidden"),
                      (n.visibilityChange = "mozvisibilitychange"))
                    : void 0 !== document.webkitHidden &&
                      ((n.hidden = "webkitHidden"),
                      (n.visibilityChange = "webkitvisibilitychange")),
                (n.autoPlay = i.proxy(n.autoPlay, n)),
                (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
                (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
                (n.changeSlide = i.proxy(n.changeSlide, n)),
                (n.clickHandler = i.proxy(n.clickHandler, n)),
                (n.selectHandler = i.proxy(n.selectHandler, n)),
                (n.setPosition = i.proxy(n.setPosition, n)),
                (n.swipeHandler = i.proxy(n.swipeHandler, n)),
                (n.dragHandler = i.proxy(n.dragHandler, n)),
                (n.keyHandler = i.proxy(n.keyHandler, n)),
                (n.instanceUid = e++),
                (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                n.registerBreakpoints(),
                n.init(!0);
        };
    })()).prototype.activateADA = function () {
        this.$slideTrack
            .find(".slick-active")
            .attr({ "aria-hidden": "false" })
            .find("a, input, button, select")
            .attr({ tabindex: "0" });
    }),
        (e.prototype.addSlide = e.prototype.slickAdd =
            function (e, t, o) {
                var s = this;
                if ("boolean" == typeof t) (o = t), (t = null);
                else if (t < 0 || t >= s.slideCount) return !1;
                s.unload(),
                    "number" == typeof t
                        ? 0 === t && 0 === s.$slides.length
                            ? i(e).appendTo(s.$slideTrack)
                            : o
                            ? i(e).insertBefore(s.$slides.eq(t))
                            : i(e).insertAfter(s.$slides.eq(t))
                        : !0 === o
                        ? i(e).prependTo(s.$slideTrack)
                        : i(e).appendTo(s.$slideTrack),
                    (s.$slides = s.$slideTrack.children(this.options.slide)),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    s.$slides.each(function (e, t) {
                        i(t).attr("data-slick-index", e);
                    }),
                    (s.$slidesCache = s.$slides),
                    s.reinit();
            }),
        (e.prototype.animateHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({ height: e }, i.options.speed);
            }
        }),
        (e.prototype.animateSlide = function (e, t) {
            var o = {},
                s = this;
            s.animateHeight(),
                !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
                !1 === s.transformsEnabled
                    ? !1 === s.options.vertical
                        ? s.$slideTrack.animate(
                              { left: e },
                              s.options.speed,
                              s.options.easing,
                              t
                          )
                        : s.$slideTrack.animate(
                              { top: e },
                              s.options.speed,
                              s.options.easing,
                              t
                          )
                    : !1 === s.cssTransitions
                    ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                      i({ animStart: s.currentLeft }).animate(
                          { animStart: e },
                          {
                              duration: s.options.speed,
                              easing: s.options.easing,
                              step: function (i) {
                                  (i = Math.ceil(i)),
                                      !1 === s.options.vertical
                                          ? ((o[s.animType] =
                                                "translate(" + i + "px, 0px)"),
                                            s.$slideTrack.css(o))
                                          : ((o[s.animType] =
                                                "translate(0px," + i + "px)"),
                                            s.$slideTrack.css(o));
                              },
                              complete: function () {
                                  t && t.call();
                              },
                          }
                      ))
                    : (s.applyTransition(),
                      (e = Math.ceil(e)),
                      !1 === s.options.vertical
                          ? (o[s.animType] =
                                "translate3d(" + e + "px, 0px, 0px)")
                          : (o[s.animType] =
                                "translate3d(0px," + e + "px, 0px)"),
                      s.$slideTrack.css(o),
                      t &&
                          setTimeout(function () {
                              s.disableTransition(), t.call();
                          }, s.options.speed));
        }),
        (e.prototype.getNavTarget = function () {
            var e = this,
                t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)), t;
        }),
        (e.prototype.asNavFor = function (e) {
            var t = this.getNavTarget();
            null !== t &&
                "object" == typeof t &&
                t.each(function () {
                    var t = i(this).slick("getSlick");
                    t.unslicked || t.slideHandler(e, !0);
                });
        }),
        (e.prototype.applyTransition = function (i) {
            var e = this,
                t = {};
            !1 === e.options.fade
                ? (t[e.transitionType] =
                      e.transformType +
                      " " +
                      e.options.speed +
                      "ms " +
                      e.options.cssEase)
                : (t[e.transitionType] =
                      "opacity " + e.options.speed + "ms " + e.options.cssEase),
                !1 === e.options.fade
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.autoPlay = function () {
            var i = this;
            i.autoPlayClear(),
                i.slideCount > i.options.slidesToShow &&
                    (i.autoPlayTimer = setInterval(
                        i.autoPlayIterator,
                        i.options.autoplaySpeed
                    ));
        }),
        (e.prototype.autoPlayClear = function () {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer);
        }),
        (e.prototype.autoPlayIterator = function () {
            var i = this,
                e = i.currentSlide + i.options.slidesToScroll;
            i.paused ||
                i.interrupted ||
                i.focussed ||
                (!1 === i.options.infinite &&
                    (1 === i.direction &&
                    i.currentSlide + 1 === i.slideCount - 1
                        ? (i.direction = 0)
                        : 0 === i.direction &&
                          ((e = i.currentSlide - i.options.slidesToScroll),
                          i.currentSlide - 1 == 0 && (i.direction = 1))),
                i.slideHandler(e));
        }),
        (e.prototype.buildArrows = function () {
            var e = this;
            !0 === e.options.arrows &&
                ((e.$prevArrow = i(e.options.prevArrow).addClass(
                    "slick-arrow"
                )),
                (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
                e.slideCount > e.options.slidesToShow
                    ? (e.$prevArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                      e.$nextArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                      e.htmlExpr.test(e.options.prevArrow) &&
                          e.$prevArrow.prependTo(e.options.appendArrows),
                      e.htmlExpr.test(e.options.nextArrow) &&
                          e.$nextArrow.appendTo(e.options.appendArrows),
                      !0 !== e.options.infinite &&
                          e.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"))
                    : e.$prevArrow
                          .add(e.$nextArrow)
                          .addClass("slick-hidden")
                          .attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (e.prototype.buildDots = function () {
            var e,
                t,
                o = this;
            if (!0 === o.options.dots) {
                for (
                    o.$slider.addClass("slick-dotted"),
                        t = i("<ul />").addClass(o.options.dotsClass),
                        e = 0;
                    e <= o.getDotCount();
                    e += 1
                )
                    t.append(
                        i("<li />").append(
                            o.options.customPaging.call(this, o, e)
                        )
                    );
                (o.$dots = t.appendTo(o.options.appendDots)),
                    o.$dots.find("li").first().addClass("slick-active");
            }
        }),
        (e.prototype.buildOut = function () {
            var e = this;
            (e.$slides = e.$slider
                .children(e.options.slide + ":not(.slick-cloned)")
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.$slides.each(function (e, t) {
                    i(t)
                        .attr("data-slick-index", e)
                        .data("originalStyling", i(t).attr("style") || "");
                }),
                e.$slider.addClass("slick-slider"),
                (e.$slideTrack =
                    0 === e.slideCount
                        ? i('<div class="slick-track"/>').appendTo(e.$slider)
                        : e.$slides
                              .wrapAll('<div class="slick-track"/>')
                              .parent()),
                (e.$list = e.$slideTrack
                    .wrap('<div class="slick-list"/>')
                    .parent()),
                e.$slideTrack.css("opacity", 0),
                (!0 !== e.options.centerMode &&
                    !0 !== e.options.swipeToSlide) ||
                    (e.options.slidesToScroll = 1),
                i("img[data-lazy]", e.$slider)
                    .not("[src]")
                    .addClass("slick-loading"),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                !0 === e.options.draggable && e.$list.addClass("draggable");
        }),
        (e.prototype.buildRows = function () {
            var i,
                e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            if (
                ((o = document.createDocumentFragment()),
                (n = l.$slider.children()),
                l.options.rows > 1)
            ) {
                for (
                    r = l.options.slidesPerRow * l.options.rows,
                        s = Math.ceil(n.length / r),
                        i = 0;
                    i < s;
                    i++
                ) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c));
                        }
                        d.appendChild(a);
                    }
                    o.appendChild(d);
                }
                l.$slider.empty().append(o),
                    l.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                            width: 100 / l.options.slidesPerRow + "%",
                            display: "inline-block",
                        });
            }
        }),
        (e.prototype.checkResponsive = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = !1,
                d = r.$slider.width(),
                a = window.innerWidth || i(window).width();
            if (
                ("window" === r.respondTo
                    ? (n = a)
                    : "slider" === r.respondTo
                    ? (n = d)
                    : "min" === r.respondTo && (n = Math.min(a, d)),
                r.options.responsive &&
                    r.options.responsive.length &&
                    null !== r.options.responsive)
            ) {
                s = null;
                for (o in r.breakpoints)
                    r.breakpoints.hasOwnProperty(o) &&
                        (!1 === r.originalSettings.mobileFirst
                            ? n < r.breakpoints[o] && (s = r.breakpoints[o])
                            : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s
                    ? null !== r.activeBreakpoint
                        ? (s !== r.activeBreakpoint || t) &&
                          ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                !0 === e &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                        : ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                !0 === e &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                    : null !== r.activeBreakpoint &&
                      ((r.activeBreakpoint = null),
                      (r.options = r.originalSettings),
                      !0 === e && (r.currentSlide = r.options.initialSlide),
                      r.refresh(e),
                      (l = s)),
                    e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
            }
        }),
        (e.prototype.changeSlide = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = i(e.currentTarget);
            switch (
                (l.is("a") && e.preventDefault(),
                l.is("li") || (l = l.closest("li")),
                (n = r.slideCount % r.options.slidesToScroll != 0),
                (o = n
                    ? 0
                    : (r.slideCount - r.currentSlide) %
                      r.options.slidesToScroll),
                e.data.message)
            ) {
                case "previous":
                    (s =
                        0 === o
                            ? r.options.slidesToScroll
                            : r.options.slidesToShow - o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case "next":
                    (s = 0 === o ? r.options.slidesToScroll : o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case "index":
                    var d =
                        0 === e.data.index
                            ? 0
                            : e.data.index ||
                              l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t),
                        l.children().trigger("focus");
                    break;
                default:
                    return;
            }
        }),
        (e.prototype.checkNavigable = function (i) {
            var e, t;
            if (
                ((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1])
            )
                i = e[e.length - 1];
            else
                for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break;
                    }
                    t = e[o];
                }
            return i;
        }),
        (e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots &&
                null !== e.$dots &&
                (i("li", e.$dots)
                    .off("click.slick", e.changeSlide)
                    .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                    .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
                !0 === e.options.accessibility &&
                    e.$dots.off("keydown.slick", e.keyHandler)),
                e.$slider.off("focus.slick blur.slick"),
                !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow &&
                        e.$prevArrow.off("click.slick", e.changeSlide),
                    e.$nextArrow &&
                        e.$nextArrow.off("click.slick", e.changeSlide),
                    !0 === e.options.accessibility &&
                        (e.$prevArrow &&
                            e.$prevArrow.off("keydown.slick", e.keyHandler),
                        e.$nextArrow &&
                            e.$nextArrow.off("keydown.slick", e.keyHandler))),
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                e.$list.off(
                    "touchcancel.slick mouseleave.slick",
                    e.swipeHandler
                ),
                e.$list.off("click.slick", e.clickHandler),
                i(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
                !0 === e.options.accessibility &&
                    e.$list.off("keydown.slick", e.keyHandler),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .off("click.slick", e.selectHandler),
                i(window).off(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    e.orientationChange
                ),
                i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                i("[draggable!=true]", e.$slideTrack).off(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).off(
                    "load.slick.slick-" + e.instanceUid,
                    e.setPosition
                );
        }),
        (e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.cleanUpRows = function () {
            var i,
                e = this;
            e.options.rows > 1 &&
                ((i = e.$slides.children().children()).removeAttr("style"),
                e.$slider.empty().append(i));
        }),
        (e.prototype.clickHandler = function (i) {
            !1 === this.shouldClick &&
                (i.stopImmediatePropagation(),
                i.stopPropagation(),
                i.preventDefault());
        }),
        (e.prototype.destroy = function (e) {
            var t = this;
            t.autoPlayClear(),
                (t.touchObject = {}),
                t.cleanUpEvents(),
                i(".slick-cloned", t.$slider).detach(),
                t.$dots && t.$dots.remove(),
                t.$prevArrow &&
                    t.$prevArrow.length &&
                    (t.$prevArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                    t.htmlExpr.test(t.options.prevArrow) &&
                        t.$prevArrow.remove()),
                t.$nextArrow &&
                    t.$nextArrow.length &&
                    (t.$nextArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                    t.htmlExpr.test(t.options.nextArrow) &&
                        t.$nextArrow.remove()),
                t.$slides &&
                    (t.$slides
                        .removeClass(
                            "slick-slide slick-active slick-center slick-visible slick-current"
                        )
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                            i(this).attr(
                                "style",
                                i(this).data("originalStyling")
                            );
                        }),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slideTrack.detach(),
                    t.$list.detach(),
                    t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass("slick-slider"),
                t.$slider.removeClass("slick-initialized"),
                t.$slider.removeClass("slick-dotted"),
                (t.unslicked = !0),
                e || t.$slider.trigger("destroy", [t]);
        }),
        (e.prototype.disableTransition = function (i) {
            var e = this,
                t = {};
            (t[e.transitionType] = ""),
                !1 === e.options.fade
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.fadeSlide = function (i, e) {
            var t = this;
            !1 === t.cssTransitions
                ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
                  t.$slides
                      .eq(i)
                      .animate(
                          { opacity: 1 },
                          t.options.speed,
                          t.options.easing,
                          e
                      ))
                : (t.applyTransition(i),
                  t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
                  e &&
                      setTimeout(function () {
                          t.disableTransition(i), e.call();
                      }, t.options.speed));
        }),
        (e.prototype.fadeSlideOut = function (i) {
            var e = this;
            !1 === e.cssTransitions
                ? e.$slides
                      .eq(i)
                      .animate(
                          { opacity: 0, zIndex: e.options.zIndex - 2 },
                          e.options.speed,
                          e.options.easing
                      )
                : (e.applyTransition(i),
                  e.$slides
                      .eq(i)
                      .css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
        }),
        (e.prototype.filterSlides = e.prototype.slickFilter =
            function (i) {
                var e = this;
                null !== i &&
                    ((e.$slidesCache = e.$slides),
                    e.unload(),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slidesCache.filter(i).appendTo(e.$slideTrack),
                    e.reinit());
            }),
        (e.prototype.focusHandler = function () {
            var e = this;
            e.$slider
                .off("focus.slick blur.slick")
                .on("focus.slick blur.slick", "*", function (t) {
                    t.stopImmediatePropagation();
                    var o = i(this);
                    setTimeout(function () {
                        e.options.pauseOnFocus &&
                            ((e.focussed = o.is(":focus")), e.autoPlay());
                    }, 0);
                });
        }),
        (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
            function () {
                return this.currentSlide;
            }),
        (e.prototype.getDotCount = function () {
            var i = this,
                e = 0,
                t = 0,
                o = 0;
            if (!0 === i.options.infinite)
                if (i.slideCount <= i.options.slidesToShow) ++o;
                else
                    for (; e < i.slideCount; )
                        ++o,
                            (e = t + i.options.slidesToScroll),
                            (t +=
                                i.options.slidesToScroll <=
                                i.options.slidesToShow
                                    ? i.options.slidesToScroll
                                    : i.options.slidesToShow);
            else if (!0 === i.options.centerMode) o = i.slideCount;
            else if (i.options.asNavFor)
                for (; e < i.slideCount; )
                    ++o,
                        (e = t + i.options.slidesToScroll),
                        (t +=
                            i.options.slidesToScroll <= i.options.slidesToShow
                                ? i.options.slidesToScroll
                                : i.options.slidesToShow);
            else
                o =
                    1 +
                    Math.ceil(
                        (i.slideCount - i.options.slidesToShow) /
                            i.options.slidesToScroll
                    );
            return o - 1;
        }),
        (e.prototype.getLeft = function (i) {
            var e,
                t,
                o,
                s,
                n = this,
                r = 0;
            return (
                (n.slideOffset = 0),
                (t = n.$slides.first().outerHeight(!0)),
                !0 === n.options.infinite
                    ? (n.slideCount > n.options.slidesToShow &&
                          ((n.slideOffset =
                              n.slideWidth * n.options.slidesToShow * -1),
                          (s = -1),
                          !0 === n.options.vertical &&
                              !0 === n.options.centerMode &&
                              (2 === n.options.slidesToShow
                                  ? (s = -1.5)
                                  : 1 === n.options.slidesToShow && (s = -2)),
                          (r = t * n.options.slidesToShow * s)),
                      n.slideCount % n.options.slidesToScroll != 0 &&
                          i + n.options.slidesToScroll > n.slideCount &&
                          n.slideCount > n.options.slidesToShow &&
                          (i > n.slideCount
                              ? ((n.slideOffset =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    t *
                                    -1))
                              : ((n.slideOffset =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    t *
                                    -1))))
                    : i + n.options.slidesToShow > n.slideCount &&
                      ((n.slideOffset =
                          (i + n.options.slidesToShow - n.slideCount) *
                          n.slideWidth),
                      (r = (i + n.options.slidesToShow - n.slideCount) * t)),
                n.slideCount <= n.options.slidesToShow &&
                    ((n.slideOffset = 0), (r = 0)),
                !0 === n.options.centerMode &&
                n.slideCount <= n.options.slidesToShow
                    ? (n.slideOffset =
                          (n.slideWidth * Math.floor(n.options.slidesToShow)) /
                              2 -
                          (n.slideWidth * n.slideCount) / 2)
                    : !0 === n.options.centerMode && !0 === n.options.infinite
                    ? (n.slideOffset +=
                          n.slideWidth *
                              Math.floor(n.options.slidesToShow / 2) -
                          n.slideWidth)
                    : !0 === n.options.centerMode &&
                      ((n.slideOffset = 0),
                      (n.slideOffset +=
                          n.slideWidth *
                          Math.floor(n.options.slidesToShow / 2))),
                (e =
                    !1 === n.options.vertical
                        ? i * n.slideWidth * -1 + n.slideOffset
                        : i * t * -1 + r),
                !0 === n.options.variableWidth &&
                    ((o =
                        n.slideCount <= n.options.slidesToShow ||
                        !1 === n.options.infinite
                            ? n.$slideTrack.children(".slick-slide").eq(i)
                            : n.$slideTrack
                                  .children(".slick-slide")
                                  .eq(i + n.options.slidesToShow)),
                    (e =
                        !0 === n.options.rtl
                            ? o[0]
                                ? -1 *
                                  (n.$slideTrack.width() -
                                      o[0].offsetLeft -
                                      o.width())
                                : 0
                            : o[0]
                            ? -1 * o[0].offsetLeft
                            : 0),
                    !0 === n.options.centerMode &&
                        ((o =
                            n.slideCount <= n.options.slidesToShow ||
                            !1 === n.options.infinite
                                ? n.$slideTrack.children(".slick-slide").eq(i)
                                : n.$slideTrack
                                      .children(".slick-slide")
                                      .eq(i + n.options.slidesToShow + 1)),
                        (e =
                            !0 === n.options.rtl
                                ? o[0]
                                    ? -1 *
                                      (n.$slideTrack.width() -
                                          o[0].offsetLeft -
                                          o.width())
                                    : 0
                                : o[0]
                                ? -1 * o[0].offsetLeft
                                : 0),
                        (e += (n.$list.width() - o.outerWidth()) / 2))),
                e
            );
        }),
        (e.prototype.getOption = e.prototype.slickGetOption =
            function (i) {
                return this.options[i];
            }),
        (e.prototype.getNavigableIndexes = function () {
            var i,
                e = this,
                t = 0,
                o = 0,
                s = [];
            for (
                !1 === e.options.infinite
                    ? (i = e.slideCount)
                    : ((t = -1 * e.options.slidesToScroll),
                      (o = -1 * e.options.slidesToScroll),
                      (i = 2 * e.slideCount));
                t < i;

            )
                s.push(t),
                    (t = o + e.options.slidesToScroll),
                    (o +=
                        e.options.slidesToScroll <= e.options.slidesToShow
                            ? e.options.slidesToScroll
                            : e.options.slidesToShow);
            return s;
        }),
        (e.prototype.getSlick = function () {
            return this;
        }),
        (e.prototype.getSlideCount = function () {
            var e,
                t,
                o = this;
            return (
                (t =
                    !0 === o.options.centerMode
                        ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
                        : 0),
                !0 === o.options.swipeToSlide
                    ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
                          if (
                              n.offsetLeft - t + i(n).outerWidth() / 2 >
                              -1 * o.swipeLeft
                          )
                              return (e = n), !1;
                      }),
                      Math.abs(
                          i(e).attr("data-slick-index") - o.currentSlide
                      ) || 1)
                    : o.options.slidesToScroll
            );
        }),
        (e.prototype.goTo = e.prototype.slickGoTo =
            function (i, e) {
                this.changeSlide(
                    { data: { message: "index", index: parseInt(i) } },
                    e
                );
            }),
        (e.prototype.init = function (e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") ||
                (i(t.$slider).addClass("slick-initialized"),
                t.buildRows(),
                t.buildOut(),
                t.setProps(),
                t.startLoad(),
                t.loadSlider(),
                t.initializeEvents(),
                t.updateArrows(),
                t.updateDots(),
                t.checkResponsive(!0),
                t.focusHandler()),
                e && t.$slider.trigger("init", [t]),
                !0 === t.options.accessibility && t.initADA(),
                t.options.autoplay && ((t.paused = !1), t.autoPlay());
        }),
        (e.prototype.initADA = function () {
            var e = this,
                t = Math.ceil(e.slideCount / e.options.slidesToShow),
                o = e.getNavigableIndexes().filter(function (i) {
                    return i >= 0 && i < e.slideCount;
                });
            e.$slides
                .add(e.$slideTrack.find(".slick-cloned"))
                .attr({ "aria-hidden": "true", tabindex: "-1" })
                .find("a, input, button, select")
                .attr({ tabindex: "-1" }),
                null !== e.$dots &&
                    (e.$slides
                        .not(e.$slideTrack.find(".slick-cloned"))
                        .each(function (t) {
                            var s = o.indexOf(t);
                            i(this).attr({
                                role: "tabpanel",
                                id: "slick-slide" + e.instanceUid + t,
                                tabindex: -1,
                            }),
                                -1 !== s &&
                                    i(this).attr({
                                        "aria-describedby":
                                            "slick-slide-control" +
                                            e.instanceUid +
                                            s,
                                    });
                        }),
                    e.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (s) {
                            var n = o[s];
                            i(this).attr({ role: "presentation" }),
                                i(this)
                                    .find("button")
                                    .first()
                                    .attr({
                                        role: "tab",
                                        id:
                                            "slick-slide-control" +
                                            e.instanceUid +
                                            s,
                                        "aria-controls":
                                            "slick-slide" + e.instanceUid + n,
                                        "aria-label": s + 1 + " of " + t,
                                        "aria-selected": null,
                                        tabindex: "-1",
                                    });
                        })
                        .eq(e.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
            for (
                var s = e.currentSlide, n = s + e.options.slidesToShow;
                s < n;
                s++
            )
                e.$slides.eq(s).attr("tabindex", 0);
            e.activateADA();
        }),
        (e.prototype.initArrowEvents = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow
                    .off("click.slick")
                    .on("click.slick", { message: "previous" }, i.changeSlide),
                i.$nextArrow
                    .off("click.slick")
                    .on("click.slick", { message: "next" }, i.changeSlide),
                !0 === i.options.accessibility &&
                    (i.$prevArrow.on("keydown.slick", i.keyHandler),
                    i.$nextArrow.on("keydown.slick", i.keyHandler)));
        }),
        (e.prototype.initDotEvents = function () {
            var e = this;
            !0 === e.options.dots &&
                (i("li", e.$dots).on(
                    "click.slick",
                    { message: "index" },
                    e.changeSlide
                ),
                !0 === e.options.accessibility &&
                    e.$dots.on("keydown.slick", e.keyHandler)),
                !0 === e.options.dots &&
                    !0 === e.options.pauseOnDotsHover &&
                    i("li", e.$dots)
                        .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                        .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover &&
                (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
        }),
        (e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on(
                    "touchstart.slick mousedown.slick",
                    { action: "start" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchmove.slick mousemove.slick",
                    { action: "move" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchend.slick mouseup.slick",
                    { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchcancel.slick mouseleave.slick",
                    { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on("click.slick", e.clickHandler),
                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
                !0 === e.options.accessibility &&
                    e.$list.on("keydown.slick", e.keyHandler),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                i(window).on(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    i.proxy(e.orientationChange, e)
                ),
                i(window).on(
                    "resize.slick.slick-" + e.instanceUid,
                    i.proxy(e.resize, e)
                ),
                i("[draggable!=true]", e.$slideTrack).on(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).on(
                    "load.slick.slick-" + e.instanceUid,
                    e.setPosition
                ),
                i(e.setPosition);
        }),
        (e.prototype.initUI = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.show(), i.$nextArrow.show()),
                !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.show();
        }),
        (e.prototype.keyHandler = function (i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === i.keyCode && !0 === e.options.accessibility
                    ? e.changeSlide({
                          data: {
                              message:
                                  !0 === e.options.rtl ? "next" : "previous",
                          },
                      })
                    : 39 === i.keyCode &&
                      !0 === e.options.accessibility &&
                      e.changeSlide({
                          data: {
                              message:
                                  !0 === e.options.rtl ? "previous" : "next",
                          },
                      }));
        }),
        (e.prototype.lazyLoad = function () {
            function e(e) {
                i("img[data-lazy]", e).each(function () {
                    var e = i(this),
                        t = i(this).attr("data-lazy"),
                        o = i(this).attr("data-srcset"),
                        s =
                            i(this).attr("data-sizes") ||
                            n.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    (r.onload = function () {
                        e.animate({ opacity: 0 }, 100, function () {
                            o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                                e
                                    .attr("src", t)
                                    .animate({ opacity: 1 }, 200, function () {
                                        e.removeAttr(
                                            "data-lazy data-srcset data-sizes"
                                        ).removeClass("slick-loading");
                                    }),
                                n.$slider.trigger("lazyLoaded", [n, e, t]);
                        });
                    }),
                        (r.onerror = function () {
                            e
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                                n.$slider.trigger("lazyLoadError", [n, e, t]);
                        }),
                        (r.src = t);
                });
            }
            var t,
                o,
                s,
                n = this;
            if (
                (!0 === n.options.centerMode
                    ? !0 === n.options.infinite
                        ? (s =
                              (o =
                                  n.currentSlide +
                                  (n.options.slidesToShow / 2 + 1)) +
                              n.options.slidesToShow +
                              2)
                        : ((o = Math.max(
                              0,
                              n.currentSlide - (n.options.slidesToShow / 2 + 1)
                          )),
                          (s =
                              n.options.slidesToShow / 2 +
                              1 +
                              2 +
                              n.currentSlide))
                    : ((o = n.options.infinite
                          ? n.options.slidesToShow + n.currentSlide
                          : n.currentSlide),
                      (s = Math.ceil(o + n.options.slidesToShow)),
                      !0 === n.options.fade &&
                          (o > 0 && o--, s <= n.slideCount && s++)),
                (t = n.$slider.find(".slick-slide").slice(o, s)),
                "anticipated" === n.options.lazyLoad)
            )
                for (
                    var r = o - 1,
                        l = s,
                        d = n.$slider.find(".slick-slide"),
                        a = 0;
                    a < n.options.slidesToScroll;
                    a++
                )
                    r < 0 && (r = n.slideCount - 1),
                        (t = (t = t.add(d.eq(r))).add(d.eq(l))),
                        r--,
                        l++;
            e(t),
                n.slideCount <= n.options.slidesToShow
                    ? e(n.$slider.find(".slick-slide"))
                    : n.currentSlide >= n.slideCount - n.options.slidesToShow
                    ? e(
                          n.$slider
                              .find(".slick-cloned")
                              .slice(0, n.options.slidesToShow)
                      )
                    : 0 === n.currentSlide &&
                      e(
                          n.$slider
                              .find(".slick-cloned")
                              .slice(-1 * n.options.slidesToShow)
                      );
        }),
        (e.prototype.loadSlider = function () {
            var i = this;
            i.setPosition(),
                i.$slideTrack.css({ opacity: 1 }),
                i.$slider.removeClass("slick-loading"),
                i.initUI(),
                "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
        }),
        (e.prototype.next = e.prototype.slickNext =
            function () {
                this.changeSlide({ data: { message: "next" } });
            }),
        (e.prototype.orientationChange = function () {
            var i = this;
            i.checkResponsive(), i.setPosition();
        }),
        (e.prototype.pause = e.prototype.slickPause =
            function () {
                var i = this;
                i.autoPlayClear(), (i.paused = !0);
            }),
        (e.prototype.play = e.prototype.slickPlay =
            function () {
                var i = this;
                i.autoPlay(),
                    (i.options.autoplay = !0),
                    (i.paused = !1),
                    (i.focussed = !1),
                    (i.interrupted = !1);
            }),
        (e.prototype.postSlide = function (e) {
            var t = this;
            t.unslicked ||
                (t.$slider.trigger("afterChange", [t, e]),
                (t.animating = !1),
                t.slideCount > t.options.slidesToShow && t.setPosition(),
                (t.swipeLeft = null),
                t.options.autoplay && t.autoPlay(),
                !0 === t.options.accessibility &&
                    (t.initADA(),
                    t.options.focusOnChange &&
                        i(t.$slides.get(t.currentSlide))
                            .attr("tabindex", 0)
                            .focus()));
        }),
        (e.prototype.prev = e.prototype.slickPrev =
            function () {
                this.changeSlide({ data: { message: "previous" } });
            }),
        (e.prototype.preventDefault = function (i) {
            i.preventDefault();
        }),
        (e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var t,
                o,
                s,
                n,
                r,
                l = this,
                d = i("img[data-lazy]", l.$slider);
            d.length
                ? ((t = d.first()),
                  (o = t.attr("data-lazy")),
                  (s = t.attr("data-srcset")),
                  (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
                  ((r = document.createElement("img")).onload = function () {
                      s && (t.attr("srcset", s), n && t.attr("sizes", n)),
                          t
                              .attr("src", o)
                              .removeAttr("data-lazy data-srcset data-sizes")
                              .removeClass("slick-loading"),
                          !0 === l.options.adaptiveHeight && l.setPosition(),
                          l.$slider.trigger("lazyLoaded", [l, t, o]),
                          l.progressiveLazyLoad();
                  }),
                  (r.onerror = function () {
                      e < 3
                          ? setTimeout(function () {
                                l.progressiveLazyLoad(e + 1);
                            }, 500)
                          : (t
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                            l.$slider.trigger("lazyLoadError", [l, t, o]),
                            l.progressiveLazyLoad());
                  }),
                  (r.src = o))
                : l.$slider.trigger("allImagesLoaded", [l]);
        }),
        (e.prototype.refresh = function (e) {
            var t,
                o,
                s = this;
            (o = s.slideCount - s.options.slidesToShow),
                !s.options.infinite &&
                    s.currentSlide > o &&
                    (s.currentSlide = o),
                s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                (t = s.currentSlide),
                s.destroy(!0),
                i.extend(s, s.initials, { currentSlide: t }),
                s.init(),
                e ||
                    s.changeSlide({ data: { message: "index", index: t } }, !1);
        }),
        (e.prototype.registerBreakpoints = function () {
            var e,
                t,
                o,
                s = this,
                n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n)
                    if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
                        for (t = n[e].breakpoint; o >= 0; )
                            s.breakpoints[o] &&
                                s.breakpoints[o] === t &&
                                s.breakpoints.splice(o, 1),
                                o--;
                        s.breakpoints.push(t),
                            (s.breakpointSettings[t] = n[e].settings);
                    }
                s.breakpoints.sort(function (i, e) {
                    return s.options.mobileFirst ? i - e : e - i;
                });
            }
        }),
        (e.prototype.reinit = function () {
            var e = this;
            (e.$slides = e.$slideTrack
                .children(e.options.slide)
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.currentSlide >= e.slideCount &&
                    0 !== e.currentSlide &&
                    (e.currentSlide =
                        e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                e.setPosition(),
                e.focusHandler(),
                (e.paused = !e.options.autoplay),
                e.autoPlay(),
                e.$slider.trigger("reInit", [e]);
        }),
        (e.prototype.resize = function () {
            var e = this;
            i(window).width() !== e.windowWidth &&
                (clearTimeout(e.windowDelay),
                (e.windowDelay = window.setTimeout(function () {
                    (e.windowWidth = i(window).width()),
                        e.checkResponsive(),
                        e.unslicked || e.setPosition();
                }, 50)));
        }),
        (e.prototype.removeSlide = e.prototype.slickRemove =
            function (i, e, t) {
                var o = this;
                if (
                    ((i =
                        "boolean" == typeof i
                            ? !0 === (e = i)
                                ? 0
                                : o.slideCount - 1
                            : !0 === e
                            ? --i
                            : i),
                    o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
                )
                    return !1;
                o.unload(),
                    !0 === t
                        ? o.$slideTrack.children().remove()
                        : o.$slideTrack
                              .children(this.options.slide)
                              .eq(i)
                              .remove(),
                    (o.$slides = o.$slideTrack.children(this.options.slide)),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    (o.$slidesCache = o.$slides),
                    o.reinit();
            }),
        (e.prototype.setCSS = function (i) {
            var e,
                t,
                o = this,
                s = {};
            !0 === o.options.rtl && (i = -i),
                (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (s[o.positionProp] = i),
                !1 === o.transformsEnabled
                    ? o.$slideTrack.css(s)
                    : ((s = {}),
                      !1 === o.cssTransitions
                          ? ((s[o.animType] =
                                "translate(" + e + ", " + t + ")"),
                            o.$slideTrack.css(s))
                          : ((s[o.animType] =
                                "translate3d(" + e + ", " + t + ", 0px)"),
                            o.$slideTrack.css(s)));
        }),
        (e.prototype.setDimensions = function () {
            var i = this;
            !1 === i.options.vertical
                ? !0 === i.options.centerMode &&
                  i.$list.css({ padding: "0px " + i.options.centerPadding })
                : (i.$list.height(
                      i.$slides.first().outerHeight(!0) * i.options.slidesToShow
                  ),
                  !0 === i.options.centerMode &&
                      i.$list.css({
                          padding: i.options.centerPadding + " 0px",
                      })),
                (i.listWidth = i.$list.width()),
                (i.listHeight = i.$list.height()),
                !1 === i.options.vertical && !1 === i.options.variableWidth
                    ? ((i.slideWidth = Math.ceil(
                          i.listWidth / i.options.slidesToShow
                      )),
                      i.$slideTrack.width(
                          Math.ceil(
                              i.slideWidth *
                                  i.$slideTrack.children(".slick-slide").length
                          )
                      ))
                    : !0 === i.options.variableWidth
                    ? i.$slideTrack.width(5e3 * i.slideCount)
                    : ((i.slideWidth = Math.ceil(i.listWidth)),
                      i.$slideTrack.height(
                          Math.ceil(
                              i.$slides.first().outerHeight(!0) *
                                  i.$slideTrack.children(".slick-slide").length
                          )
                      ));
            var e =
                i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            !1 === i.options.variableWidth &&
                i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
        }),
        (e.prototype.setFade = function () {
            var e,
                t = this;
            t.$slides.each(function (o, s) {
                (e = t.slideWidth * o * -1),
                    !0 === t.options.rtl
                        ? i(s).css({
                              position: "relative",
                              right: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0,
                          })
                        : i(s).css({
                              position: "relative",
                              left: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0,
                          });
            }),
                t.$slides
                    .eq(t.currentSlide)
                    .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
        }),
        (e.prototype.setHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e);
            }
        }),
        (e.prototype.setOption = e.prototype.slickSetOption =
            function () {
                var e,
                    t,
                    o,
                    s,
                    n,
                    r = this,
                    l = !1;
                if (
                    ("object" === i.type(arguments[0])
                        ? ((o = arguments[0]),
                          (l = arguments[1]),
                          (n = "multiple"))
                        : "string" === i.type(arguments[0]) &&
                          ((o = arguments[0]),
                          (s = arguments[1]),
                          (l = arguments[2]),
                          "responsive" === arguments[0] &&
                          "array" === i.type(arguments[1])
                              ? (n = "responsive")
                              : void 0 !== arguments[1] && (n = "single")),
                    "single" === n)
                )
                    r.options[o] = s;
                else if ("multiple" === n)
                    i.each(o, function (i, e) {
                        r.options[i] = e;
                    });
                else if ("responsive" === n)
                    for (t in s)
                        if ("array" !== i.type(r.options.responsive))
                            r.options.responsive = [s[t]];
                        else {
                            for (e = r.options.responsive.length - 1; e >= 0; )
                                r.options.responsive[e].breakpoint ===
                                    s[t].breakpoint &&
                                    r.options.responsive.splice(e, 1),
                                    e--;
                            r.options.responsive.push(s[t]);
                        }
                l && (r.unload(), r.reinit());
            }),
        (e.prototype.setPosition = function () {
            var i = this;
            i.setDimensions(),
                i.setHeight(),
                !1 === i.options.fade
                    ? i.setCSS(i.getLeft(i.currentSlide))
                    : i.setFade(),
                i.$slider.trigger("setPosition", [i]);
        }),
        (e.prototype.setProps = function () {
            var i = this,
                e = document.body.style;
            (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
                "top" === i.positionProp
                    ? i.$slider.addClass("slick-vertical")
                    : i.$slider.removeClass("slick-vertical"),
                (void 0 === e.WebkitTransition &&
                    void 0 === e.MozTransition &&
                    void 0 === e.msTransition) ||
                    (!0 === i.options.useCSS && (i.cssTransitions = !0)),
                i.options.fade &&
                    ("number" == typeof i.options.zIndex
                        ? i.options.zIndex < 3 && (i.options.zIndex = 3)
                        : (i.options.zIndex = i.defaults.zIndex)),
                void 0 !== e.OTransform &&
                    ((i.animType = "OTransform"),
                    (i.transformType = "-o-transform"),
                    (i.transitionType = "OTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.MozTransform &&
                    ((i.animType = "MozTransform"),
                    (i.transformType = "-moz-transform"),
                    (i.transitionType = "MozTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.MozPerspective &&
                        (i.animType = !1)),
                void 0 !== e.webkitTransform &&
                    ((i.animType = "webkitTransform"),
                    (i.transformType = "-webkit-transform"),
                    (i.transitionType = "webkitTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.msTransform &&
                    ((i.animType = "msTransform"),
                    (i.transformType = "-ms-transform"),
                    (i.transitionType = "msTransition"),
                    void 0 === e.msTransform && (i.animType = !1)),
                void 0 !== e.transform &&
                    !1 !== i.animType &&
                    ((i.animType = "transform"),
                    (i.transformType = "transform"),
                    (i.transitionType = "transition")),
                (i.transformsEnabled =
                    i.options.useTransform &&
                    null !== i.animType &&
                    !1 !== i.animType);
        }),
        (e.prototype.setSlideClasses = function (i) {
            var e,
                t,
                o,
                s,
                n = this;
            if (
                ((t = n.$slider
                    .find(".slick-slide")
                    .removeClass("slick-active slick-center slick-current")
                    .attr("aria-hidden", "true")),
                n.$slides.eq(i).addClass("slick-current"),
                !0 === n.options.centerMode)
            ) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                (e = Math.floor(n.options.slidesToShow / 2)),
                    !0 === n.options.infinite &&
                        (i >= e && i <= n.slideCount - 1 - e
                            ? n.$slides
                                  .slice(i - e + r, i + e + 1)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")
                            : ((o = n.options.slidesToShow + i),
                              t
                                  .slice(o - e + 1 + r, o + e + 2)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")),
                        0 === i
                            ? t
                                  .eq(t.length - 1 - n.options.slidesToShow)
                                  .addClass("slick-center")
                            : i === n.slideCount - 1 &&
                              t
                                  .eq(n.options.slidesToShow)
                                  .addClass("slick-center")),
                    n.$slides.eq(i).addClass("slick-center");
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow
                    ? n.$slides
                          .slice(i, i + n.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                    : t.length <= n.options.slidesToShow
                    ? t.addClass("slick-active").attr("aria-hidden", "false")
                    : ((s = n.slideCount % n.options.slidesToShow),
                      (o =
                          !0 === n.options.infinite
                              ? n.options.slidesToShow + i
                              : i),
                      n.options.slidesToShow == n.options.slidesToScroll &&
                      n.slideCount - i < n.options.slidesToShow
                          ? t
                                .slice(o - (n.options.slidesToShow - s), o + s)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                          : t
                                .slice(o, o + n.options.slidesToShow)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false"));
            ("ondemand" !== n.options.lazyLoad &&
                "anticipated" !== n.options.lazyLoad) ||
                n.lazyLoad();
        }),
        (e.prototype.setupInfinite = function () {
            var e,
                t,
                o,
                s = this;
            if (
                (!0 === s.options.fade && (s.options.centerMode = !1),
                !0 === s.options.infinite &&
                    !1 === s.options.fade &&
                    ((t = null), s.slideCount > s.options.slidesToShow))
            ) {
                for (
                    o =
                        !0 === s.options.centerMode
                            ? s.options.slidesToShow + 1
                            : s.options.slidesToShow,
                        e = s.slideCount;
                    e > s.slideCount - o;
                    e -= 1
                )
                    (t = e - 1),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t - s.slideCount)
                            .prependTo(s.$slideTrack)
                            .addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1)
                    (t = e),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t + s.slideCount)
                            .appendTo(s.$slideTrack)
                            .addClass("slick-cloned");
                s.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function () {
                        i(this).attr("id", "");
                    });
            }
        }),
        (e.prototype.interrupt = function (i) {
            var e = this;
            i || e.autoPlay(), (e.interrupted = i);
        }),
        (e.prototype.selectHandler = function (e) {
            var t = this,
                o = i(e.target).is(".slick-slide")
                    ? i(e.target)
                    : i(e.target).parents(".slick-slide"),
                s = parseInt(o.attr("data-slick-index"));
            s || (s = 0),
                t.slideCount <= t.options.slidesToShow
                    ? t.slideHandler(s, !1, !0)
                    : t.slideHandler(s);
        }),
        (e.prototype.slideHandler = function (i, e, t) {
            var o,
                s,
                n,
                r,
                l,
                d = null,
                a = this;
            if (
                ((e = e || !1),
                !(
                    (!0 === a.animating && !0 === a.options.waitForAnimate) ||
                    (!0 === a.options.fade && a.currentSlide === i)
                ))
            )
                if (
                    (!1 === e && a.asNavFor(i),
                    (o = i),
                    (d = a.getLeft(o)),
                    (r = a.getLeft(a.currentSlide)),
                    (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
                    !1 === a.options.infinite &&
                        !1 === a.options.centerMode &&
                        (i < 0 ||
                            i > a.getDotCount() * a.options.slidesToScroll))
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else if (
                    !1 === a.options.infinite &&
                    !0 === a.options.centerMode &&
                    (i < 0 || i > a.slideCount - a.options.slidesToScroll)
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else {
                    if (
                        (a.options.autoplay && clearInterval(a.autoPlayTimer),
                        (s =
                            o < 0
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? a.slideCount -
                                      (a.slideCount % a.options.slidesToScroll)
                                    : a.slideCount + o
                                : o >= a.slideCount
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? 0
                                    : o - a.slideCount
                                : o),
                        (a.animating = !0),
                        a.$slider.trigger("beforeChange", [
                            a,
                            a.currentSlide,
                            s,
                        ]),
                        (n = a.currentSlide),
                        (a.currentSlide = s),
                        a.setSlideClasses(a.currentSlide),
                        a.options.asNavFor &&
                            (l = (l = a.getNavTarget()).slick("getSlick"))
                                .slideCount <= l.options.slidesToShow &&
                            l.setSlideClasses(a.currentSlide),
                        a.updateDots(),
                        a.updateArrows(),
                        !0 === a.options.fade)
                    )
                        return (
                            !0 !== t
                                ? (a.fadeSlideOut(n),
                                  a.fadeSlide(s, function () {
                                      a.postSlide(s);
                                  }))
                                : a.postSlide(s),
                            void a.animateHeight()
                        );
                    !0 !== t
                        ? a.animateSlide(d, function () {
                              a.postSlide(s);
                          })
                        : a.postSlide(s);
                }
        }),
        (e.prototype.startLoad = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.hide(), i.$nextArrow.hide()),
                !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.hide(),
                i.$slider.addClass("slick-loading");
        }),
        (e.prototype.swipeDirection = function () {
            var i,
                e,
                t,
                o,
                s = this;
            return (
                (i = s.touchObject.startX - s.touchObject.curX),
                (e = s.touchObject.startY - s.touchObject.curY),
                (t = Math.atan2(e, i)),
                (o = Math.round((180 * t) / Math.PI)) < 0 &&
                    (o = 360 - Math.abs(o)),
                o <= 45 && o >= 0
                    ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                    : o <= 360 && o >= 315
                    ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                    : o >= 135 && o <= 225
                    ? !1 === s.options.rtl
                        ? "right"
                        : "left"
                    : !0 === s.options.verticalSwiping
                    ? o >= 35 && o <= 135
                        ? "down"
                        : "up"
                    : "vertical"
            );
        }),
        (e.prototype.swipeEnd = function (i) {
            var e,
                t,
                o = this;
            if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
                return (o.scrolling = !1), !1;
            if (
                ((o.interrupted = !1),
                (o.shouldClick = !(o.touchObject.swipeLength > 10)),
                void 0 === o.touchObject.curX)
            )
                return !1;
            if (
                (!0 === o.touchObject.edgeHit &&
                    o.$slider.trigger("edge", [o, o.swipeDirection()]),
                o.touchObject.swipeLength >= o.touchObject.minSwipe)
            ) {
                switch ((t = o.swipeDirection())) {
                    case "left":
                    case "down":
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide + o.getSlideCount()
                              )
                            : o.currentSlide + o.getSlideCount()),
                            (o.currentDirection = 0);
                        break;
                    case "right":
                    case "up":
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide - o.getSlideCount()
                              )
                            : o.currentSlide - o.getSlideCount()),
                            (o.currentDirection = 1);
                }
                "vertical" != t &&
                    (o.slideHandler(e),
                    (o.touchObject = {}),
                    o.$slider.trigger("swipe", [o, t]));
            } else
                o.touchObject.startX !== o.touchObject.curX &&
                    (o.slideHandler(o.currentSlide), (o.touchObject = {}));
        }),
        (e.prototype.swipeHandler = function (i) {
            var e = this;
            if (
                !(
                    !1 === e.options.swipe ||
                    ("ontouchend" in document && !1 === e.options.swipe) ||
                    (!1 === e.options.draggable &&
                        -1 !== i.type.indexOf("mouse"))
                )
            )
                switch (
                    ((e.touchObject.fingerCount =
                        i.originalEvent && void 0 !== i.originalEvent.touches
                            ? i.originalEvent.touches.length
                            : 1),
                    (e.touchObject.minSwipe =
                        e.listWidth / e.options.touchThreshold),
                    !0 === e.options.verticalSwiping &&
                        (e.touchObject.minSwipe =
                            e.listHeight / e.options.touchThreshold),
                    i.data.action)
                ) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i);
                }
        }),
        (e.prototype.swipeMove = function (i) {
            var e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            return (
                (n =
                    void 0 !== i.originalEvent
                        ? i.originalEvent.touches
                        : null),
                !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                    ((e = l.getLeft(l.currentSlide)),
                    (l.touchObject.curX =
                        void 0 !== n ? n[0].pageX : i.clientX),
                    (l.touchObject.curY =
                        void 0 !== n ? n[0].pageY : i.clientY),
                    (l.touchObject.swipeLength = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curX - l.touchObject.startX,
                                2
                            )
                        )
                    )),
                    (r = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curY - l.touchObject.startY,
                                2
                            )
                        )
                    )),
                    !l.options.verticalSwiping && !l.swiping && r > 4
                        ? ((l.scrolling = !0), !1)
                        : (!0 === l.options.verticalSwiping &&
                              (l.touchObject.swipeLength = r),
                          (t = l.swipeDirection()),
                          void 0 !== i.originalEvent &&
                              l.touchObject.swipeLength > 4 &&
                              ((l.swiping = !0), i.preventDefault()),
                          (s =
                              (!1 === l.options.rtl ? 1 : -1) *
                              (l.touchObject.curX > l.touchObject.startX
                                  ? 1
                                  : -1)),
                          !0 === l.options.verticalSwiping &&
                              (s =
                                  l.touchObject.curY > l.touchObject.startY
                                      ? 1
                                      : -1),
                          (o = l.touchObject.swipeLength),
                          (l.touchObject.edgeHit = !1),
                          !1 === l.options.infinite &&
                              ((0 === l.currentSlide && "right" === t) ||
                                  (l.currentSlide >= l.getDotCount() &&
                                      "left" === t)) &&
                              ((o =
                                  l.touchObject.swipeLength *
                                  l.options.edgeFriction),
                              (l.touchObject.edgeHit = !0)),
                          !1 === l.options.vertical
                              ? (l.swipeLeft = e + o * s)
                              : (l.swipeLeft =
                                    e +
                                    o * (l.$list.height() / l.listWidth) * s),
                          !0 === l.options.verticalSwiping &&
                              (l.swipeLeft = e + o * s),
                          !0 !== l.options.fade &&
                              !1 !== l.options.touchMove &&
                              (!0 === l.animating
                                  ? ((l.swipeLeft = null), !1)
                                  : void l.setCSS(l.swipeLeft))))
            );
        }),
        (e.prototype.swipeStart = function (i) {
            var e,
                t = this;
            if (
                ((t.interrupted = !0),
                1 !== t.touchObject.fingerCount ||
                    t.slideCount <= t.options.slidesToShow)
            )
                return (t.touchObject = {}), !1;
            void 0 !== i.originalEvent &&
                void 0 !== i.originalEvent.touches &&
                (e = i.originalEvent.touches[0]),
                (t.touchObject.startX = t.touchObject.curX =
                    void 0 !== e ? e.pageX : i.clientX),
                (t.touchObject.startY = t.touchObject.curY =
                    void 0 !== e ? e.pageY : i.clientY),
                (t.dragging = !0);
        }),
        (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
            function () {
                var i = this;
                null !== i.$slidesCache &&
                    (i.unload(),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slidesCache.appendTo(i.$slideTrack),
                    i.reinit());
            }),
        (e.prototype.unload = function () {
            var e = this;
            i(".slick-cloned", e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow &&
                    e.htmlExpr.test(e.options.prevArrow) &&
                    e.$prevArrow.remove(),
                e.$nextArrow &&
                    e.htmlExpr.test(e.options.nextArrow) &&
                    e.$nextArrow.remove(),
                e.$slides
                    .removeClass(
                        "slick-slide slick-active slick-visible slick-current"
                    )
                    .attr("aria-hidden", "true")
                    .css("width", "");
        }),
        (e.prototype.unslick = function (i) {
            var e = this;
            e.$slider.trigger("unslick", [e, i]), e.destroy();
        }),
        (e.prototype.updateArrows = function () {
            var i = this;
            Math.floor(i.options.slidesToShow / 2),
                !0 === i.options.arrows &&
                    i.slideCount > i.options.slidesToShow &&
                    !i.options.infinite &&
                    (i.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                    i.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                    0 === i.currentSlide
                        ? (i.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$nextArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false"))
                        : i.currentSlide >=
                              i.slideCount - i.options.slidesToShow &&
                          !1 === i.options.centerMode
                        ? (i.$nextArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$prevArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false"))
                        : i.currentSlide >= i.slideCount - 1 &&
                          !0 === i.options.centerMode &&
                          (i.$nextArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$prevArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false")));
        }),
        (e.prototype.updateDots = function () {
            var i = this;
            null !== i.$dots &&
                (i.$dots.find("li").removeClass("slick-active").end(),
                i.$dots
                    .find("li")
                    .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                    .addClass("slick-active"));
        }),
        (e.prototype.visibility = function () {
            var i = this;
            i.options.autoplay &&
                (document[i.hidden]
                    ? (i.interrupted = !0)
                    : (i.interrupted = !1));
        }),
        (i.fn.slick = function () {
            var i,
                t,
                o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (i = 0; i < r; i++)
                if (
                    ("object" == typeof s || void 0 === s
                        ? (o[i].slick = new e(o[i], s))
                        : (t = o[i].slick[s].apply(o[i].slick, n)),
                    void 0 !== t)
                )
                    return t;
            return o;
        });
});
$(() => {
    const n = document.querySelector("#announcement_list");
    n && n.childElementCount > 0 && $(n).endlessRiver();
    const t = document.querySelectorAll(".password_input_trigger");
    t.length &&
        t.forEach((n) => {
            const t = n.parentNode.querySelector("input[type=password]");
            n.onclick = () => {
                if (t.type === "password") {
                    t.type = "text";
                    return;
                }
                t.type = "password";
            };
        });
    window.initializeIntro = (n) => {
        const t = document.querySelector("#loyalty_info_container");
        if (t) {
            const i = () =>
                    document.querySelectorAll(".modal.show").length > 0 ||
                    document.querySelectorAll(".modal.in").length > 0,
                r = async () => {
                    await window.$.ajax({
                        type: "POST",
                        url: "/Profile/UpdateUserAction",
                        data: JSON.stringify({
                            userAction: "GuidanceForLoyaltyHomePage",
                        }),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                    });
                },
                t = () => {
                    setTimeout(function () {
                        i() == !1 &&
                            (introJs()
                                .setOptions({
                                    steps: [
                                        {
                                            title: n.loyaltyLevelTitle,
                                            element: document.querySelector(
                                                "#loyalty_point_section"
                                            ),
                                            intro: `<div class='subtitle'>${n.loyaltyLevelSubtitle}</div><p>${n.loyaltyLevelContent}</p>`,
                                        },
                                        {
                                            title: n.loyaltyPointTitle,
                                            element: document.querySelector(
                                                "#loyalty_point_info"
                                            ),
                                            intro: `<div class='subtitle'>${n.loyaltyPointSubtitle}</div><p>${n.loyaltyPointContent}</p>`,
                                        },
                                        {
                                            title: n.loyaltyExperienceTitle,
                                            element: document.querySelector(
                                                "#loyalty_experience"
                                            ),
                                            intro: `<div class='subtitle'>${n.loyaltyExperienceSubtitle}</div><p>${n.loyaltyExperienceContent}</p>`,
                                        },
                                    ],
                                    scrollToElement: !1,
                                })
                                .start(),
                            r());
                    }, 1e3);
                };
            $(document).on("hidden.bs.modal", t);
            t();
        }
    };
    window.initializeLotteryMarketList = (n) => {
        const i = document.querySelector("#lottery_market_list"),
            t = document.querySelector("#view_more_market_button");
        i &&
            t &&
            (t.onclick = () => {
                i.classList.toggle("expand");
                const u = t.querySelector("span"),
                    r = t.querySelector("i");
                i.classList.contains("expand")
                    ? ((u.innerText = n.translations.viewLess),
                      r.classList.remove("glyphicon-chevron-down"),
                      r.classList.add("glyphicon-chevron-up"))
                    : ((u.innerText = n.translations.viewMore),
                      r.classList.add("glyphicon-chevron-down"),
                      r.classList.remove("glyphicon-chevron-up"));
            });
        const r = document.querySelectorAll('[data-market-info="nex4d"]');
        if (r.length) {
            const n = r[r.length - 1],
                t = document.createElement("div");
            t.className = "lottery-market-divider";
            n.parentNode.insertBefore(t, n.nextSibling);
        }
    };
    const r = document.getElementById("menu_preview_container");
    if (r) {
        const n = document.querySelectorAll(
                "#main_menu_outer_container a[data-game-category]"
            ),
            t = document.querySelectorAll(
                "#menu_preview_container .game-list-container"
            );
        n.length &&
            n.forEach((i) => {
                i.onclick = (r) => {
                    r.preventDefault();
                    const e = i.dataset.gameCategory,
                        u = document.querySelector(
                            `#menu_preview_container .game-list-container[data-game-category=${e}] .game-list`
                        );
                    u.querySelector(".game_list_content") ||
                        $.ajax({
                            type: "GET",
                            url: `/home/menu-games`,
                            contentType: "application/json; charset=utf-8",
                            dataType: "html",
                            data: { menu: e, platform: "Mobile" },
                            success: (n) => {
                                u.innerHTML = n;
                                const t = u.querySelectorAll(".view_all");
                                t.length &&
                                    t.forEach((n) => {
                                        n.onclick = () => {
                                            const t =
                                                u.querySelectorAll(
                                                    `.game-item[hidden]`
                                                );
                                            t.forEach((n) => {
                                                n.hidden = !1;
                                            });
                                            n.style.display = "none";
                                        };
                                    });
                            },
                            error: () =>
                                registerPopup({ content: "Server Error." }),
                        });
                    n.forEach((n) => {
                        n.dataset.active = !1;
                    });
                    const o = i.dataset.gameCategory,
                        f = document.querySelector(
                            `#menu_preview_container .game-list-container[data-game-category="${o}"]`
                        );
                    if (f) {
                        const n = f.classList.contains("active");
                        t.forEach((n) => {
                            n.classList.remove("active");
                        });
                        n ||
                            ((i.dataset.active = !0),
                            f.classList.add("active"));
                    }
                };
            });
    }
    const i = document.querySelector("#banner_carousel");
    if (i) {
        $(i).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !0,
            dotsClass: "carousel-indicators",
            infinite: !0,
            autoplay: !0,
            autoplaySpeed: 5e3,
            arrows: !1,
            adaptiveHeight: !1,
        });
        const n = document.querySelectorAll(
            "#banner_carousel .banner-group-vertical"
        );
        if (n) {
            $(n).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0,
                dotsClass: "carousel-indicators",
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 3e3,
                arrows: !1,
                adaptiveHeight: !1,
                vertical: !0,
                verticalSwiping: !0,
            });
            $(n).on("touchend mouseover mouseout", function () {
                $("#banner_carousel").slick("slickSetOption", "swipe", !0, !1);
            });
        }
    }
});
