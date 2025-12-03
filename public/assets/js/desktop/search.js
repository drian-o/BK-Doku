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
                controls: {
                    up: "",
                    down: "",
                    toggle: "",
                },
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
                            {
                                top: c + u + "px",
                            },
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
                    t.stop(!0, !0).animate(
                        {
                            height: s,
                        },
                        n.speed
                    );
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
                            .css({
                                position: "absolute",
                                margin: 0,
                            })
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
/**!
 * MixItUp v3.3.1
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 94e0fbf6-cd0b-4987-b3c0-14b59b67b8a0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
(function (n) {
    "use strict";
    var t = null,
        i = null;
    (function () {
        for (
            var i = ["webkit", "moz", "o", "ms"],
                r = n.document.createElement("div"),
                t = -1,
                t = 0;
            t < i.length && !n.requestAnimationFrame;
            t++
        )
            n.requestAnimationFrame = n[i[t] + "RequestAnimationFrame"];
        typeof r.nextElementSibling == "undefined" &&
            Object.defineProperty(n.Element.prototype, "nextElementSibling", {
                get: function () {
                    for (var n = this.nextSibling; n; ) {
                        if (n.nodeType === 1) return n;
                        n = n.nextSibling;
                    }
                    return null;
                },
            }),
            (function (n) {
                n.matches =
                    n.matches ||
                    n.machesSelector ||
                    n.mozMatchesSelector ||
                    n.msMatchesSelector ||
                    n.oMatchesSelector ||
                    n.webkitMatchesSelector ||
                    function (n) {
                        return (
                            Array.prototype.indexOf.call(
                                this.parentElement.querySelectorAll(n),
                                this
                            ) > -1
                        );
                    };
            })(n.Element.prototype);
        Object.keys ||
            (Object.keys = (function () {
                var t = Object.prototype.hasOwnProperty,
                    i = !1,
                    n = [],
                    r = -1;
                return (
                    (i = !{
                        toString: null,
                    }.propertyIsEnumerable("toString")),
                    (n = [
                        "toString",
                        "toLocaleString",
                        "valueOf",
                        "hasOwnProperty",
                        "isPrototypeOf",
                        "propertyIsEnumerable",
                        "constructor",
                    ]),
                    (r = n.length),
                    function (u) {
                        var e = [],
                            o = "",
                            f = -1;
                        if (
                            typeof u != "object" &&
                            (typeof u != "function" || u === null)
                        )
                            throw new TypeError(
                                "Object.keys called on non-object"
                            );
                        for (o in u) t.call(u, o) && e.push(o);
                        if (i)
                            for (f = 0; f < r; f++)
                                t.call(u, n[f]) && e.push(n[f]);
                        return e;
                    }
                );
            })());
        Array.isArray ||
            (Array.isArray = function (n) {
                return Object.prototype.toString.call(n) === "[object Array]";
            });
        typeof Object.create != "function" &&
            (Object.create = (function (n) {
                var t = function () {};
                return function (i, r) {
                    if (i !== Object(i) && i !== null)
                        throw TypeError("Argument must be an object, or null");
                    t.prototype = i || {};
                    var u = new t();
                    return (
                        (t.prototype = null),
                        r !== n && Object.defineProperties(u, r),
                        i === null && (u.__proto__ = null),
                        u
                    );
                };
            })());
        String.prototype.trim ||
            (String.prototype.trim = function () {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            });
        Array.prototype.indexOf ||
            (Array.prototype.indexOf = function (n) {
                var t, i, u, r;
                if (this === null) throw new TypeError();
                if (
                    ((u = Object(this)), (r = u.length >>> 0), r === 0) ||
                    ((t = 0),
                    arguments.length > 1 &&
                        ((t = Number(arguments[1])),
                        t !== t
                            ? (t = 0)
                            : t !== 0 &&
                              t !== Infinity &&
                              t !== -Infinity &&
                              (t = (t > 0 || -1) * Math.floor(Math.abs(t)))),
                    t >= r)
                )
                    return -1;
                for (i = t >= 0 ? t : Math.max(r - Math.abs(t), 0); i < r; i++)
                    if (i in u && u[i] === n) return i;
                return -1;
            });
        Function.prototype.bind ||
            (Function.prototype.bind = function (n) {
                var r, u, t, i;
                if (typeof this != "function") throw new TypeError();
                return (
                    (r = Array.prototype.slice.call(arguments, 1)),
                    (u = this),
                    (t = function () {}),
                    (i = function () {
                        return u.apply(
                            this instanceof t ? this : n,
                            r.concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    this.prototype && (t.prototype = this.prototype),
                    (i.prototype = new t()),
                    i
                );
            });
        n.Element.prototype.dispatchEvent ||
            (n.Element.prototype.dispatchEvent = function (n) {
                try {
                    return this.fireEvent("on" + n.type, n);
                } catch (t) {}
            });
    })();
    t = function (r, u, f) {
        var s = null,
            h = !1,
            o = null,
            y = null,
            l = null,
            a = [],
            e = "",
            c = [],
            v = -1;
        if (
            ((l = f || n.document),
            (h = arguments[3]) && (h = typeof h == "boolean"),
            typeof r == "string")
        )
            c = l.querySelectorAll(r);
        else if (r && typeof r == "object" && i.isElement(r, l)) c = [r];
        else if (r && typeof r == "object" && r.length) c = r;
        else throw new Error(t.messages.errorFactoryInvalidContainer());
        if (c.length < 1)
            throw new Error(t.messages.errorFactoryContainerNotFound());
        for (v = 0; (s = c[v]); v++) {
            if (v > 0 && !h) break;
            s.id ? (e = s.id) : ((e = "MixItUp" + i.randomHex()), (s.id = e));
            t.instances[e] instanceof t.Mixer
                ? ((o = t.instances[e]),
                  (!u || (u && u.debug && u.debug.showWarnings !== !1)) &&
                      console.warn(
                          t.messages.warningFactoryPreexistingInstance()
                      ))
                : ((o = new t.Mixer()),
                  o.attach(s, l, e, u),
                  (t.instances[e] = o));
            y = new t.Facade(o);
            u && u.debug && u.debug.enable ? a.push(o) : a.push(y);
        }
        return h ? new t.Collection(a) : a[0];
    };
    t.use = function (n) {
        t.Base.prototype.callActions.call(t, "beforeUse", arguments);
        typeof n == "function" && n.TYPE === "mixitup-extension"
            ? typeof t.extensions[n.NAME] == "undefined" &&
              (n(t), (t.extensions[n.NAME] = n))
            : n.fn && n.fn.jquery && (t.libraries.$ = n);
        t.Base.prototype.callActions.call(t, "afterUse", arguments);
    };
    t.instances = {};
    t.extensions = {};
    t.libraries = {};
    i = {
        hasClass: function (n, t) {
            return !!n.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"));
        },
        addClass: function (n, t) {
            this.hasClass(n, t) || (n.className += n.className ? " " + t : t);
        },
        removeClass: function (n, t) {
            if (this.hasClass(n, t)) {
                var i = new RegExp("(\\s|^)" + t + "(\\s|$)");
                n.className = n.className.replace(i, " ").trim();
            }
        },
        extend: function (n, t, i, r) {
            var e = [],
                u = "",
                f = -1;
            i = i || !1;
            r = r || !1;
            try {
                if (Array.isArray(t)) for (f = 0; f < t.length; f++) e.push(f);
                else t && (e = Object.keys(t));
                for (f = 0; f < e.length; f++)
                    (u = e[f]),
                        !i || typeof t[u] != "object" || this.isElement(t[u])
                            ? (n[u] = t[u])
                            : Array.isArray(t[u])
                            ? (n[u] || (n[u] = []),
                              this.extend(n[u], t[u], i, r))
                            : (n[u] || (n[u] = {}),
                              this.extend(n[u], t[u], i, r));
            } catch (o) {
                if (r) this.handleExtendError(o, n);
                else throw o;
            }
            return n;
        },
        handleExtendError: function (n, i) {
            var o = null,
                u = "",
                s = "",
                h = "",
                c = "",
                f = "",
                e = -1,
                r = -1;
            if (
                n instanceof TypeError &&
                (o = /property "?(\w*)"?[,:] object/i.exec(n.message))
            ) {
                u = o[1];
                for (f in i) {
                    for (r = 0; r < u.length && u.charAt(r) === f.charAt(r); )
                        r++;
                    r > e && ((e = r), (c = f));
                }
                e > 1 &&
                    (h = t.messages.errorConfigInvalidPropertySuggestion({
                        probableMatch: c,
                    }));
                s = t.messages.errorConfigInvalidProperty({
                    erroneous: u,
                    suggestion: h,
                });
                throw new TypeError(s);
            }
            throw n;
        },
        template: function (n) {
            for (var r = /\${([\w]*)}/g, t = {}, i = null; (i = r.exec(n)); )
                t[i[1]] = new RegExp("\\${" + i[1] + "}", "g");
            return function (i) {
                var r = "",
                    u = n;
                i = i || {};
                for (r in t)
                    u = u.replace(t[r], typeof i[r] != "undefined" ? i[r] : "");
                return u;
            };
        },
        on: function (t, i, r, u) {
            t &&
                (t.addEventListener
                    ? t.addEventListener(i, r, u)
                    : t.attachEvent &&
                      ((t["e" + i + r] = r),
                      (t[i + r] = function () {
                          t["e" + i + r](n.event);
                      }),
                      t.attachEvent("on" + i, t[i + r])));
        },
        off: function (n, t, i) {
            n &&
                (n.removeEventListener
                    ? n.removeEventListener(t, i, !1)
                    : n.detachEvent &&
                      (n.detachEvent("on" + t, n[t + i]), (n[t + i] = null)));
        },
        getCustomEvent: function (t, i, r) {
            var u = null;
            return (
                (r = r || n.document),
                typeof n.CustomEvent == "function"
                    ? (u = new n.CustomEvent(t, {
                          detail: i,
                          bubbles: !0,
                          cancelable: !0,
                      }))
                    : typeof r.createEvent == "function"
                    ? ((u = r.createEvent("CustomEvent")),
                      u.initCustomEvent(t, !0, !0, i))
                    : ((u = r.createEventObject()),
                      (u.type = t),
                      (u.returnValue = !1),
                      (u.cancelBubble = !1),
                      (u.detail = i)),
                u
            );
        },
        getOriginalEvent: function (n) {
            return n.touches && n.touches.length
                ? n.touches[0]
                : n.changedTouches && n.changedTouches.length
                ? n.changedTouches[0]
                : n;
        },
        index: function (n, t) {
            for (var i = 0; (n = n.previousElementSibling) !== null; )
                (!t || n.matches(t)) && ++i;
            return i;
        },
        camelCase: function (n) {
            return n.toLowerCase().replace(/([_-][a-z])/g, function (n) {
                return n.toUpperCase().replace(/[_-]/, "");
            });
        },
        pascalCase: function (n) {
            return (n = this.camelCase(n)).charAt(0).toUpperCase() + n.slice(1);
        },
        dashCase: function (n) {
            return n
                .replace(/([A-Z])/g, "-$1")
                .replace(/^-/, "")
                .toLowerCase();
        },
        isElement: function (t, i) {
            return (
                (i = i || n.document),
                n.HTMLElement && t instanceof n.HTMLElement
                    ? !0
                    : i.defaultView &&
                      i.defaultView.HTMLElement &&
                      t instanceof i.defaultView.HTMLElement
                    ? !0
                    : t !== null &&
                      t.nodeType === 1 &&
                      typeof t.nodeName == "string"
            );
        },
        createElement: function (t, i) {
            var u = null,
                r = null;
            for (
                i = i || n.document,
                    u = i.createDocumentFragment(),
                    r = i.createElement("div"),
                    r.innerHTML = t.trim();
                r.firstChild;

            )
                u.appendChild(r.firstChild);
            return u;
        },
        removeWhitespace: function (n) {
            for (var t; n && n.nodeName === "#text"; )
                (t = n),
                    (n = n.previousSibling),
                    t.parentElement && t.parentElement.removeChild(t);
        },
        isEqualArray: function (n, t) {
            var i = n.length;
            if (i !== t.length) return !1;
            while (i--) if (n[i] !== t[i]) return !1;
            return !0;
        },
        deepEquals: function (n, t) {
            var i;
            if (typeof n == "object" && n && typeof t == "object" && t) {
                if (Object.keys(n).length !== Object.keys(t).length) return !1;
                for (i in n)
                    if (!t.hasOwnProperty(i) || !this.deepEquals(n[i], t[i]))
                        return !1;
            } else if (n !== t) return !1;
            return !0;
        },
        arrayShuffle: function (n) {
            for (var t = n.slice(), u = t.length, i = u, r = -1, f = []; i--; )
                (r = ~~(Math.random() * u)),
                    (f = t[i]),
                    (t[i] = t[r]),
                    (t[r] = f);
            return t;
        },
        arrayFromList: function (n) {
            var i, t;
            try {
                return Array.prototype.slice.call(n);
            } catch (r) {
                for (i = [], t = 0; t < n.length; t++) i.push(n[t]);
                return i;
            }
        },
        debounce: function (n, t, i) {
            var r;
            return function () {
                var u = this,
                    f = arguments,
                    o = i && !r,
                    e = null;
                e = function () {
                    r = null;
                    i || n.apply(u, f);
                };
                clearTimeout(r);
                r = setTimeout(e, t);
                o && n.apply(u, f);
            };
        },
        position: function (n) {
            for (var t = 0, i = 0, r = n; n; )
                (t -= n.scrollLeft),
                    (i -= n.scrollTop),
                    n === r &&
                        ((t += n.offsetLeft),
                        (i += n.offsetTop),
                        (r = n.offsetParent)),
                    (n = n.parentElement);
            return {
                x: t,
                y: i,
            };
        },
        getHypotenuse: function (n, t) {
            var i = n.x - t.x,
                r = n.y - t.y;
            return (
                (i = i < 0 ? i * -1 : i),
                (r = r < 0 ? r * -1 : r),
                Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2))
            );
        },
        getIntersectionRatio: function (n, t) {
            var f = n.width * n.height,
                i = -1,
                r = -1,
                u = -1;
            return (
                (i = Math.max(
                    0,
                    Math.min(n.left + n.width, t.left + t.width) -
                        Math.max(n.left, t.left)
                )),
                (r = Math.max(
                    0,
                    Math.min(n.top + n.height, t.top + t.height) -
                        Math.max(n.top, t.top)
                )),
                (u = r * i),
                u / f
            );
        },
        closestParent: function (t, i, r, u) {
            var f = t.parentNode;
            if (((u = u || n.document), r && t.matches(i))) return t;
            while (f && f != u.body) {
                if (f.matches && f.matches(i)) return f;
                if (f.parentNode) f = f.parentNode;
                else return null;
            }
            return null;
        },
        children: function (t, i, r) {
            var f = [],
                u = "";
            return (
                (r = r || n.doc),
                t &&
                    (t.id || ((u = "Temp" + this.randomHexKey()), (t.id = u)),
                    (f = r.querySelectorAll("#" + t.id + " > " + i)),
                    u && t.removeAttribute("id")),
                f
            );
        },
        clean: function (n) {
            for (var i = [], t = -1, t = 0; t < n.length; t++)
                n[t] !== "" && i.push(n[t]);
            return i;
        },
        defer: function (i) {
            var u = null,
                r = null,
                f = null;
            return (
                (r = new this.Deferred()),
                t.features.has.promises
                    ? (r.promise = new Promise(function (n, t) {
                          r.resolve = n;
                          r.reject = t;
                      }))
                    : (f = n.jQuery || i.$) && typeof f.Deferred == "function"
                    ? ((u = f.Deferred()),
                      (r.promise = u.promise()),
                      (r.resolve = u.resolve),
                      (r.reject = u.reject))
                    : n.console &&
                      console.warn(t.messages.warningNoPromiseImplementation()),
                r
            );
        },
        all: function (i, r) {
            var u = null;
            return t.features.has.promises
                ? Promise.all(i)
                : (u = n.jQuery || r.$) && typeof u.when == "function"
                ? u.when.apply(u, i).done(function () {
                      return arguments;
                  })
                : (n.console &&
                      console.warn(t.messages.warningNoPromiseImplementation()),
                  []);
        },
        getPrefix: function (n, t, r) {
            var u = -1,
                f = "";
            if (i.dashCase(t) in n.style) return "";
            for (u = 0; (f = r[u]); u++)
                if (f + t in n.style) return f.toLowerCase();
            return "unsupported";
        },
        randomHex: function () {
            return ("00000" + ((Math.random() * 16777216) << 0).toString(16))
                .substr(-6)
                .toUpperCase();
        },
        getDocumentState: function (t) {
            return (
                (t = typeof t.body == "object" ? t : n.document),
                {
                    scrollTop: n.pageYOffset,
                    scrollLeft: n.pageXOffset,
                    docHeight: t.documentElement.scrollHeight,
                    docWidth: t.documentElement.scrollWidth,
                    viewportHeight: t.documentElement.clientHeight,
                    viewportWidth: t.documentElement.clientWidth,
                }
            );
        },
        bind: function (n, t) {
            return function () {
                return t.apply(n, arguments);
            };
        },
        isVisible: function (t) {
            var i = null;
            return t.offsetParent
                ? !0
                : ((i = n.getComputedStyle(t)),
                  i.position === "fixed" &&
                      i.visibility !== "hidden" &&
                      i.opacity !== "0")
                ? !0
                : !1;
        },
        seal: function (n) {
            typeof Object.seal == "function" && Object.seal(n);
        },
        freeze: function (n) {
            typeof Object.freeze == "function" && Object.freeze(n);
        },
        compareVersions: function (n, t) {
            for (
                var f = n.split("."),
                    e = t.split("."),
                    r = -1,
                    u = -1,
                    i = -1,
                    i = 0;
                i < f.length;
                i++
            ) {
                if (
                    ((r = parseInt(f[i].replace(/[^\d.]/g, ""))),
                    (u = parseInt(e[i].replace(/[^\d.]/g, "") || 0)),
                    u < r)
                )
                    return !1;
                if (u > r) return !0;
            }
            return !0;
        },
        Deferred: function () {
            this.promise = null;
            this.resolve = null;
            this.reject = null;
            this.id = i.randomHex();
        },
        isEmptyObject: function (n) {
            var t = "";
            if (typeof Object.keys == "function")
                return Object.keys(n).length === 0;
            for (t in n) if (n.hasOwnProperty(t)) return !1;
            return !0;
        },
        getClassname: function (n, t, i) {
            var r = "";
            return ((r += n.block),
            r.length && (r += n.delineatorElement),
            (r += n["element" + this.pascalCase(t)]),
            !i)
                ? r
                : (r.length && (r += n.delineatorModifier), r + i);
        },
        getProperty: function (n, t) {
            var r = t.split("."),
                u = null,
                f = "",
                i = 0;
            if (!t) return n;
            for (
                u = function (n) {
                    return n ? n[f] : null;
                };
                i < r.length;

            )
                (f = r[i]), (n = u(n)), i++;
            return typeof n != "undefined" ? n : null;
        },
    };
    t.h = i;
    t.Base = function () {};
    t.Base.prototype = {
        constructor: t.Base,
        callActions: function (n, t) {
            var u = this,
                r = u.constructor.actions[n],
                f = "";
            if (r && !i.isEmptyObject(r)) for (f in r) r[f].apply(u, t);
        },
        callFilters: function (n, t, r) {
            var e = this,
                u = e.constructor.filters[n],
                f = t,
                o = "";
            if (!u || i.isEmptyObject(u)) return f;
            r = r || [];
            for (o in u)
                (r = i.arrayFromList(r)), r.unshift(f), (f = u[o].apply(e, r));
            return f;
        },
    };
    t.BaseStatic = function () {
        this.actions = {};
        this.filters = {};
        this.extend = function (n) {
            i.extend(this.prototype, n);
        };
        this.registerAction = function (n, t, i) {
            (this.actions[n] = this.actions[n] || {})[t] = i;
        };
        this.registerFilter = function (n, t, i) {
            (this.filters[n] = this.filters[n] || {})[t] = i;
        };
    };
    t.Features = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.boxSizingPrefix = "";
        this.transformPrefix = "";
        this.transitionPrefix = "";
        this.boxSizingPrefix = "";
        this.transformProp = "";
        this.transformRule = "";
        this.transitionProp = "";
        this.perspectiveProp = "";
        this.perspectiveOriginProp = "";
        this.has = new t.Has();
        this.canary = null;
        this.BOX_SIZING_PROP = "boxSizing";
        this.TRANSITION_PROP = "transition";
        this.TRANSFORM_PROP = "transform";
        this.PERSPECTIVE_PROP = "perspective";
        this.PERSPECTIVE_ORIGIN_PROP = "perspectiveOrigin";
        this.VENDORS = ["Webkit", "moz", "O", "ms"];
        this.TWEENABLE = [
            "opacity",
            "width",
            "height",
            "marginRight",
            "marginBottom",
            "x",
            "y",
            "scale",
            "translateX",
            "translateY",
            "translateZ",
            "rotateX",
            "rotateY",
            "rotateZ",
        ];
        this.callActions("afterConstruct");
    };
    t.BaseStatic.call(t.Features);
    t.Features.prototype = Object.create(t.Base.prototype);
    i.extend(t.Features.prototype, {
        constructor: t.Features,
        init: function () {
            var n = this;
            n.callActions("beforeInit", arguments);
            n.canary = document.createElement("div");
            n.setPrefixes();
            n.runTests();
            n.callActions("beforeInit", arguments);
        },
        runTests: function () {
            var t = this;
            t.callActions("beforeRunTests", arguments);
            t.has.promises = typeof n.Promise == "function";
            t.has.transitions = t.transitionPrefix !== "unsupported";
            t.callActions("afterRunTests", arguments);
            i.freeze(t.has);
        },
        setPrefixes: function () {
            var n = this;
            n.callActions("beforeSetPrefixes", arguments);
            n.transitionPrefix = i.getPrefix(n.canary, "Transition", n.VENDORS);
            n.transformPrefix = i.getPrefix(n.canary, "Transform", n.VENDORS);
            n.boxSizingPrefix = i.getPrefix(n.canary, "BoxSizing", n.VENDORS);
            n.boxSizingProp = n.boxSizingPrefix
                ? n.boxSizingPrefix + i.pascalCase(n.BOX_SIZING_PROP)
                : n.BOX_SIZING_PROP;
            n.transitionProp = n.transitionPrefix
                ? n.transitionPrefix + i.pascalCase(n.TRANSITION_PROP)
                : n.TRANSITION_PROP;
            n.transformProp = n.transformPrefix
                ? n.transformPrefix + i.pascalCase(n.TRANSFORM_PROP)
                : n.TRANSFORM_PROP;
            n.transformRule = n.transformPrefix
                ? "-" + n.transformPrefix + "-" + n.TRANSFORM_PROP
                : n.TRANSFORM_PROP;
            n.perspectiveProp = n.transformPrefix
                ? n.transformPrefix + i.pascalCase(n.PERSPECTIVE_PROP)
                : n.PERSPECTIVE_PROP;
            n.perspectiveOriginProp = n.transformPrefix
                ? n.transformPrefix + i.pascalCase(n.PERSPECTIVE_ORIGIN_PROP)
                : n.PERSPECTIVE_ORIGIN_PROP;
            n.callActions("afterSetPrefixes", arguments);
        },
    });
    t.Has = function () {
        this.transitions = !1;
        this.promises = !1;
        i.seal(this);
    };
    t.features = new t.Features();
    t.features.init();
    t.ConfigAnimation = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.enable = !0;
        this.effects = "fade scale";
        this.effectsIn = "";
        this.effectsOut = "";
        this.duration = 600;
        this.easing = "ease";
        this.applyPerspective = !0;
        this.perspectiveDistance = "3000px";
        this.perspectiveOrigin = "50% 50%";
        this.queue = !0;
        this.queueLimit = 3;
        this.animateResizeContainer = !0;
        this.animateResizeTargets = !1;
        this.staggerSequence = null;
        this.reverseOut = !1;
        this.nudge = !0;
        this.clampHeight = !0;
        this.clampWidth = !0;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.ConfigAnimation);
    t.ConfigAnimation.prototype = Object.create(t.Base.prototype);
    t.ConfigAnimation.prototype.constructor = t.ConfigAnimation;
    t.ConfigBehavior = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.liveSort = !1;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.ConfigBehavior);
    t.ConfigBehavior.prototype = Object.create(t.Base.prototype);
    t.ConfigBehavior.prototype.constructor = t.ConfigBehavior;
    t.ConfigCallbacks = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.onMixStart = null;
        this.onMixBusy = null;
        this.onMixEnd = null;
        this.onMixFail = null;
        this.onMixClick = null;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.ConfigCallbacks);
    t.ConfigCallbacks.prototype = Object.create(t.Base.prototype);
    t.ConfigCallbacks.prototype.constructor = t.ConfigCallbacks;
    t.ConfigControls = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.enable = !0;
        this.live = !1;
        this.scope = "global";
        this.toggleLogic = "or";
        this.toggleDefault = "all";
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.ConfigControls);
    t.ConfigControls.prototype = Object.create(t.Base.prototype);
    t.ConfigControls.prototype.constructor = t.ConfigControls;
    t.ConfigClassNames = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.block = "mixitup";
        this.elementContainer = "container";
        this.elementFilter = "control";
        this.elementSort = "control";
        this.elementMultimix = "control";
        this.elementToggle = "control";
        this.modifierActive = "active";
        this.modifierDisabled = "disabled";
        this.modifierFailed = "failed";
        this.delineatorElement = "-";
        this.delineatorModifier = "-";
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.ConfigClassNames);
    t.ConfigClassNames.prototype = Object.create(t.Base.prototype);
    t.ConfigClassNames.prototype.constructor = t.ConfigClassNames;
    t.ConfigData = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.uidKey = "";
        this.dirtyCheck = !1;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.ConfigData);
    t.ConfigData.prototype = Object.create(t.Base.prototype);
    t.ConfigData.prototype.constructor = t.ConfigData;
    t.ConfigDebug = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.enable = !1;
        this.showWarnings = !0;
        this.fauxAsync = !1;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.ConfigDebug);
    t.ConfigDebug.prototype = Object.create(t.Base.prototype);
    t.ConfigDebug.prototype.constructor = t.ConfigDebug;
    t.ConfigLayout = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.allowNestedTargets = !0;
        this.containerClassName = "";
        this.siblingBefore = null;
        this.siblingAfter = null;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.ConfigLayout);
    t.ConfigLayout.prototype = Object.create(t.Base.prototype);
    t.ConfigLayout.prototype.constructor = t.ConfigLayout;
    t.ConfigLoad = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.filter = "all";
        this.sort = "default:asc";
        this.dataset = null;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.ConfigLoad);
    t.ConfigLoad.prototype = Object.create(t.Base.prototype);
    t.ConfigLoad.prototype.constructor = t.ConfigLoad;
    t.ConfigSelectors = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.target = ".mix";
        this.control = "";
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.ConfigSelectors);
    t.ConfigSelectors.prototype = Object.create(t.Base.prototype);
    t.ConfigSelectors.prototype.constructor = t.ConfigSelectors;
    t.ConfigRender = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.target = null;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.ConfigRender);
    t.ConfigRender.prototype = Object.create(t.Base.prototype);
    t.ConfigRender.prototype.constructor = t.ConfigRender;
    t.ConfigTemplates = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.ConfigTemplates);
    t.ConfigTemplates.prototype = Object.create(t.Base.prototype);
    t.ConfigTemplates.prototype.constructor = t.ConfigTemplates;
    t.Config = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.animation = new t.ConfigAnimation();
        this.behavior = new t.ConfigBehavior();
        this.callbacks = new t.ConfigCallbacks();
        this.controls = new t.ConfigControls();
        this.classNames = new t.ConfigClassNames();
        this.data = new t.ConfigData();
        this.debug = new t.ConfigDebug();
        this.layout = new t.ConfigLayout();
        this.load = new t.ConfigLoad();
        this.selectors = new t.ConfigSelectors();
        this.render = new t.ConfigRender();
        this.templates = new t.ConfigTemplates();
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.Config);
    t.Config.prototype = Object.create(t.Base.prototype);
    t.Config.prototype.constructor = t.Config;
    t.MixerDom = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.document = null;
        this.body = null;
        this.container = null;
        this.parent = null;
        this.targets = [];
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.MixerDom);
    t.MixerDom.prototype = Object.create(t.Base.prototype);
    t.MixerDom.prototype.constructor = t.MixerDom;
    t.UiClassNames = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.base = "";
        this.active = "";
        this.disabled = "";
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.UiClassNames);
    t.UiClassNames.prototype = Object.create(t.Base.prototype);
    t.UiClassNames.prototype.constructor = t.UiClassNames;
    t.CommandDataset = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.dataset = null;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.CommandDataset);
    t.CommandDataset.prototype = Object.create(t.Base.prototype);
    t.CommandDataset.prototype.constructor = t.CommandDataset;
    t.CommandMultimix = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.filter = null;
        this.sort = null;
        this.insert = null;
        this.remove = null;
        this.changeLayout = null;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.CommandMultimix);
    t.CommandMultimix.prototype = Object.create(t.Base.prototype);
    t.CommandMultimix.prototype.constructor = t.CommandMultimix;
    t.CommandFilter = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.selector = "";
        this.collection = null;
        this.action = "show";
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.CommandFilter);
    t.CommandFilter.prototype = Object.create(t.Base.prototype);
    t.CommandFilter.prototype.constructor = t.CommandFilter;
    t.CommandSort = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.sortString = "";
        this.attribute = "";
        this.order = "asc";
        this.collection = null;
        this.next = null;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.CommandSort);
    t.CommandSort.prototype = Object.create(t.Base.prototype);
    t.CommandSort.prototype.constructor = t.CommandSort;
    t.CommandInsert = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.index = 0;
        this.collection = [];
        this.position = "before";
        this.sibling = null;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.CommandInsert);
    t.CommandInsert.prototype = Object.create(t.Base.prototype);
    t.CommandInsert.prototype.constructor = t.CommandInsert;
    t.CommandRemove = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.targets = [];
        this.collection = [];
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.CommandRemove);
    t.CommandRemove.prototype = Object.create(t.Base.prototype);
    t.CommandRemove.prototype.constructor = t.CommandRemove;
    t.CommandChangeLayout = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.containerClassName = "";
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.CommandChangeLayout);
    t.CommandChangeLayout.prototype = Object.create(t.Base.prototype);
    t.CommandChangeLayout.prototype.constructor = t.CommandChangeLayout;
    t.ControlDefinition = function (n, r, u, f) {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.type = n;
        this.selector = r;
        this.live = u || !1;
        this.parent = f || "";
        this.callActions("afterConstruct");
        i.freeze(this);
        i.seal(this);
    };
    t.BaseStatic.call(t.ControlDefinition);
    t.ControlDefinition.prototype = Object.create(t.Base.prototype);
    t.ControlDefinition.prototype.constructor = t.ControlDefinition;
    t.controlDefinitions = [];
    t.controlDefinitions.push(
        new t.ControlDefinition("multimix", "[data-filter][data-sort]")
    );
    t.controlDefinitions.push(
        new t.ControlDefinition("filter", "[data-filter]")
    );
    t.controlDefinitions.push(new t.ControlDefinition("sort", "[data-sort]"));
    t.controlDefinitions.push(
        new t.ControlDefinition("toggle", "[data-toggle]")
    );
    t.Control = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.el = null;
        this.selector = "";
        this.bound = [];
        this.pending = -1;
        this.type = "";
        this.status = "inactive";
        this.filter = "";
        this.sort = "";
        this.canDisable = !1;
        this.handler = null;
        this.classNames = new t.UiClassNames();
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.Control);
    t.Control.prototype = Object.create(t.Base.prototype);
    i.extend(t.Control.prototype, {
        constructor: t.Control,
        init: function (n, i, r) {
            var u = this;
            if (
                (this.callActions("beforeInit", arguments),
                (u.el = n),
                (u.type = i),
                (u.selector = r),
                u.selector)
            )
                u.status = "live";
            else {
                u.canDisable = typeof u.el.disable == "boolean";
                switch (u.type) {
                    case "filter":
                        u.filter = u.el.getAttribute("data-filter");
                        break;
                    case "toggle":
                        u.filter = u.el.getAttribute("data-toggle");
                        break;
                    case "sort":
                        u.sort = u.el.getAttribute("data-sort");
                        break;
                    case "multimix":
                        u.filter = u.el.getAttribute("data-filter");
                        u.sort = u.el.getAttribute("data-sort");
                }
            }
            u.bindClick();
            t.controls.push(u);
            this.callActions("afterInit", arguments);
        },
        isBound: function (n) {
            var t = this,
                i = !1;
            return (
                this.callActions("beforeIsBound", arguments),
                (i = t.bound.indexOf(n) > -1),
                t.callFilters("afterIsBound", i, arguments)
            );
        },
        addBinding: function (n) {
            var t = this;
            this.callActions("beforeAddBinding", arguments);
            t.isBound() || t.bound.push(n);
            this.callActions("afterAddBinding", arguments);
        },
        removeBinding: function (n) {
            var i = this,
                r = -1;
            this.callActions("beforeRemoveBinding", arguments);
            (r = i.bound.indexOf(n)) > -1 && i.bound.splice(r, 1);
            i.bound.length < 1 &&
                (i.unbindClick(),
                (r = t.controls.indexOf(i)),
                t.controls.splice(r, 1),
                i.status === "active" && i.renderStatus(i.el, "inactive"));
            this.callActions("afterRemoveBinding", arguments);
        },
        bindClick: function () {
            var n = this;
            this.callActions("beforeBindClick", arguments);
            n.handler = function (t) {
                n.handleClick(t);
            };
            i.on(n.el, "click", n.handler);
            this.callActions("afterBindClick", arguments);
        },
        unbindClick: function () {
            var n = this;
            this.callActions("beforeUnbindClick", arguments);
            i.off(n.el, "click", n.handler);
            n.handler = null;
            this.callActions("afterUnbindClick", arguments);
        },
        handleClick: function (n) {
            var r = this,
                e = null,
                u = null,
                c = !1,
                l = void 0,
                f = {},
                h = null,
                s = [],
                o = -1;
            if (
                (this.callActions("beforeHandleClick", arguments),
                (this.pending = 0),
                (u = r.bound[0]),
                (e = r.selector
                    ? i.closestParent(
                          n.target,
                          u.config.selectors.control + r.selector,
                          !0,
                          u.dom.document
                      )
                    : r.el),
                !e)
            ) {
                r.callActions("afterHandleClick", arguments);
                return;
            }
            switch (r.type) {
                case "filter":
                    f.filter = r.filter || e.getAttribute("data-filter");
                    break;
                case "sort":
                    f.sort = r.sort || e.getAttribute("data-sort");
                    break;
                case "multimix":
                    f.filter = r.filter || e.getAttribute("data-filter");
                    f.sort = r.sort || e.getAttribute("data-sort");
                    break;
                case "toggle":
                    f.filter = r.filter || e.getAttribute("data-toggle");
                    c =
                        r.status === "live"
                            ? i.hasClass(e, r.classNames.active)
                            : r.status === "active";
            }
            for (o = 0; o < r.bound.length; o++)
                (h = new t.CommandMultimix()), i.extend(h, f), s.push(h);
            for (
                s = r.callFilters("commandsHandleClick", s, arguments),
                    r.pending = r.bound.length,
                    o = 0;
                (u = r.bound[o]);
                o++
            )
                ((f = s[o]), f) &&
                    (u.lastClicked || (u.lastClicked = e),
                    t.events.fire(
                        "mixClick",
                        u.dom.container,
                        {
                            state: u.state,
                            instance: u,
                            originalEvent: n,
                            control: u.lastClicked,
                        },
                        u.dom.document
                    ),
                    typeof u.config.callbacks.onMixClick != "function" ||
                        ((l = u.config.callbacks.onMixClick.call(
                            u.lastClicked,
                            u.state,
                            n,
                            u
                        )),
                        l !== !1)) &&
                    (r.type === "toggle"
                        ? c
                            ? u.toggleOff(f.filter)
                            : u.toggleOn(f.filter)
                        : u.multimix(f));
            this.callActions("afterHandleClick", arguments);
        },
        update: function (n, i) {
            var r = this,
                u = new t.CommandMultimix();
            (r.callActions("beforeUpdate", arguments),
            r.pending--,
            (r.pending = Math.max(0, r.pending)),
            r.pending > 0) ||
                (r.status === "live"
                    ? r.updateLive(n, i)
                    : ((u.sort = r.sort),
                      (u.filter = r.filter),
                      r.callFilters("actionsUpdate", u, arguments),
                      r.parseStatusChange(r.el, n, u, i)),
                r.callActions("afterUpdate", arguments));
        },
        updateLive: function (n, i) {
            var u = this,
                o = null,
                r = null,
                f = null,
                e = -1;
            if ((u.callActions("beforeUpdateLive", arguments), u.el)) {
                for (
                    o = u.el.querySelectorAll(u.selector), e = 0;
                    (f = o[e]);
                    e++
                ) {
                    r = new t.CommandMultimix();
                    switch (u.type) {
                        case "filter":
                            r.filter = f.getAttribute("data-filter");
                            break;
                        case "sort":
                            r.sort = f.getAttribute("data-sort");
                            break;
                        case "multimix":
                            r.filter = f.getAttribute("data-filter");
                            r.sort = f.getAttribute("data-sort");
                            break;
                        case "toggle":
                            r.filter = f.getAttribute("data-toggle");
                    }
                    r = u.callFilters("actionsUpdateLive", r, arguments);
                    u.parseStatusChange(f, n, r, i);
                }
                u.callActions("afterUpdateLive", arguments);
            }
        },
        parseStatusChange: function (n, t, i, r) {
            var u = this,
                e = "",
                o = "",
                f = -1;
            u.callActions("beforeParseStatusChange", arguments);
            switch (u.type) {
                case "filter":
                    t.filter === i.filter
                        ? u.renderStatus(n, "active")
                        : u.renderStatus(n, "inactive");
                    break;
                case "multimix":
                    t.sort === i.sort && t.filter === i.filter
                        ? u.renderStatus(n, "active")
                        : u.renderStatus(n, "inactive");
                    break;
                case "sort":
                    t.sort.match(/:asc/g) && (e = t.sort.replace(/:asc/g, ""));
                    t.sort === i.sort || e === i.sort
                        ? u.renderStatus(n, "active")
                        : u.renderStatus(n, "inactive");
                    break;
                case "toggle":
                    for (
                        r.length < 1 && u.renderStatus(n, "inactive"),
                            t.filter === i.filter &&
                                u.renderStatus(n, "active"),
                            f = 0;
                        f < r.length;
                        f++
                    ) {
                        if (((o = r[f]), o === i.filter)) {
                            u.renderStatus(n, "active");
                            break;
                        }
                        u.renderStatus(n, "inactive");
                    }
            }
            u.callActions("afterParseStatusChange", arguments);
        },
        renderStatus: function (n, t) {
            var r = this;
            r.callActions("beforeRenderStatus", arguments);
            switch (t) {
                case "active":
                    i.addClass(n, r.classNames.active);
                    i.removeClass(n, r.classNames.disabled);
                    r.canDisable && (r.el.disabled = !1);
                    break;
                case "inactive":
                    i.removeClass(n, r.classNames.active);
                    i.removeClass(n, r.classNames.disabled);
                    r.canDisable && (r.el.disabled = !1);
                    break;
                case "disabled":
                    r.canDisable && (r.el.disabled = !0);
                    i.addClass(n, r.classNames.disabled);
                    i.removeClass(n, r.classNames.active);
            }
            r.status !== "live" && (r.status = t);
            r.callActions("afterRenderStatus", arguments);
        },
    });
    t.controls = [];
    t.StyleData = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.x = 0;
        this.y = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.left = 0;
        this.width = 0;
        this.height = 0;
        this.marginRight = 0;
        this.marginBottom = 0;
        this.opacity = 0;
        this.scale = new t.TransformData();
        this.translateX = new t.TransformData();
        this.translateY = new t.TransformData();
        this.translateZ = new t.TransformData();
        this.rotateX = new t.TransformData();
        this.rotateY = new t.TransformData();
        this.rotateZ = new t.TransformData();
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.StyleData);
    t.StyleData.prototype = Object.create(t.Base.prototype);
    t.StyleData.prototype.constructor = t.StyleData;
    t.TransformData = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.value = 0;
        this.unit = "";
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.TransformData);
    t.TransformData.prototype = Object.create(t.Base.prototype);
    t.TransformData.prototype.constructor = t.TransformData;
    t.TransformDefaults = function () {
        t.StyleData.apply(this);
        this.callActions("beforeConstruct");
        this.scale.value = 0.01;
        this.scale.unit = "";
        this.translateX.value = 20;
        this.translateX.unit = "px";
        this.translateY.value = 20;
        this.translateY.unit = "px";
        this.translateZ.value = 20;
        this.translateZ.unit = "px";
        this.rotateX.value = 90;
        this.rotateX.unit = "deg";
        this.rotateY.value = 90;
        this.rotateY.unit = "deg";
        this.rotateX.value = 90;
        this.rotateX.unit = "deg";
        this.rotateZ.value = 180;
        this.rotateZ.unit = "deg";
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.TransformDefaults);
    t.TransformDefaults.prototype = Object.create(t.StyleData.prototype);
    t.TransformDefaults.prototype.constructor = t.TransformDefaults;
    t.transformDefaults = new t.TransformDefaults();
    t.EventDetail = function () {
        this.state = null;
        this.futureState = null;
        this.instance = null;
        this.originalEvent = null;
    };
    t.Events = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.mixStart = null;
        this.mixBusy = null;
        this.mixEnd = null;
        this.mixFail = null;
        this.mixClick = null;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.Events);
    t.Events.prototype = Object.create(t.Base.prototype);
    t.Events.prototype.constructor = t.Events;
    t.Events.prototype.fire = function (n, r, u, f) {
        var o = this,
            s = null,
            e = new t.EventDetail();
        if (
            (o.callActions("beforeFire", arguments), typeof o[n] == "undefined")
        )
            throw new Error('Event type "' + n + '" not found.');
        e.state = new t.State();
        i.extend(e.state, u.state);
        u.futureState &&
            ((e.futureState = new t.State()),
            i.extend(e.futureState, u.futureState));
        e.instance = u.instance;
        u.originalEvent && (e.originalEvent = u.originalEvent);
        s = i.getCustomEvent(n, e, f);
        o.callFilters("eventFire", s, arguments);
        r.dispatchEvent(s);
    };
    t.events = new t.Events();
    t.QueueItem = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.args = [];
        this.instruction = null;
        this.triggerElement = null;
        this.deferred = null;
        this.isToggling = !1;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.QueueItem);
    t.QueueItem.prototype = Object.create(t.Base.prototype);
    t.QueueItem.prototype.constructor = t.QueueItem;
    t.Mixer = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.config = new t.Config();
        this.id = "";
        this.isBusy = !1;
        this.isToggling = !1;
        this.incPadding = !0;
        this.controls = [];
        this.targets = [];
        this.origOrder = [];
        this.cache = {};
        this.toggleArray = [];
        this.targetsMoved = 0;
        this.targetsImmovable = 0;
        this.targetsBound = 0;
        this.targetsDone = 0;
        this.staggerDuration = 0;
        this.effectsIn = null;
        this.effectsOut = null;
        this.transformIn = [];
        this.transformOut = [];
        this.queue = [];
        this.state = null;
        this.lastOperation = null;
        this.lastClicked = null;
        this.userCallback = null;
        this.userDeferred = null;
        this.dom = new t.MixerDom();
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.Mixer);
    t.Mixer.prototype = Object.create(t.Base.prototype);
    i.extend(t.Mixer.prototype, {
        constructor: t.Mixer,
        attach: function (r, u, f, e) {
            var o = this,
                h = null,
                s = -1;
            for (
                o.callActions("beforeAttach", arguments),
                    o.id = f,
                    e && i.extend(o.config, e, !0, !0),
                    o.sanitizeConfig(),
                    o.cacheDom(r, u),
                    o.config.layout.containerClassName &&
                        i.addClass(
                            o.dom.container,
                            o.config.layout.containerClassName
                        ),
                    t.features.has.transitions ||
                        (o.config.animation.enable = !1),
                    typeof n.console == "undefined" &&
                        (o.config.debug.showWarnings = !1),
                    o.config.data.uidKey && (o.config.controls.enable = !1),
                    o.indexTargets(),
                    o.state = o.getInitialState(),
                    s = 0;
                (h = o.lastOperation.toHide[s]);
                s++
            )
                h.hide();
            o.config.controls.enable &&
                (o.initControls(),
                o.buildToggleArray(null, o.state),
                o.updateControls({
                    filter: o.state.activeFilter,
                    sort: o.state.activeSort,
                }));
            o.parseEffects();
            o.callActions("afterAttach", arguments);
        },
        sanitizeConfig: function () {
            var n = this;
            n.callActions("beforeSanitizeConfig", arguments);
            n.config.controls.scope = n.config.controls.scope
                .toLowerCase()
                .trim();
            n.config.controls.toggleLogic = n.config.controls.toggleLogic
                .toLowerCase()
                .trim();
            n.config.controls.toggleDefault = n.config.controls.toggleDefault
                .toLowerCase()
                .trim();
            n.config.animation.effects = n.config.animation.effects.trim();
            n.callActions("afterSanitizeConfig", arguments);
        },
        getInitialState: function () {
            var i = this,
                r = new t.State(),
                n = new t.Operation();
            if (
                (i.callActions("beforeGetInitialState", arguments),
                (r.activeContainerClassName =
                    i.config.layout.containerClassName),
                i.config.load.dataset)
            ) {
                if (
                    !i.config.data.uidKey ||
                    typeof i.config.data.uidKey != "string"
                )
                    throw new TypeError(
                        t.messages.errorConfigDataUidKeyNotSet()
                    );
                n.startDataset =
                    n.newDataset =
                    r.activeDataset =
                        i.config.load.dataset.slice();
                n.startContainerClassName = n.newContainerClassName =
                    r.activeContainerClassName;
                n.show = i.targets.slice();
                r = i.callFilters("stateGetInitialState", r, arguments);
            } else
                (r.activeFilter = i.parseFilterArgs([
                    i.config.load.filter,
                ]).command),
                    (r.activeSort = i.parseSortArgs([
                        i.config.load.sort,
                    ]).command),
                    (r.totalTargets = i.targets.length),
                    (r = i.callFilters("stateGetInitialState", r, arguments)),
                    r.activeSort.collection ||
                    r.activeSort.attribute ||
                    r.activeSort.order === "random" ||
                    r.activeSort.order === "desc"
                        ? ((n.newSort = r.activeSort),
                          i.sortOperation(n),
                          i.printSort(!1, n),
                          (i.targets = n.newOrder))
                        : (n.startOrder = n.newOrder = i.targets),
                    (n.startFilter = n.newFilter = r.activeFilter),
                    (n.startSort = n.newSort = r.activeSort),
                    (n.startContainerClassName = n.newContainerClassName =
                        r.activeContainerClassName),
                    n.newFilter.selector === "all"
                        ? (n.newFilter.selector = i.config.selectors.target)
                        : n.newFilter.selector === "none" &&
                          (n.newFilter.selector = "");
            return (
                (n = i.callFilters("operationGetInitialState", n, [r])),
                (i.lastOperation = n),
                n.newFilter && i.filterOperation(n),
                i.buildState(n)
            );
        },
        cacheDom: function (n, t) {
            var i = this;
            i.callActions("beforeCacheDom", arguments);
            i.dom.document = t;
            i.dom.body = i.dom.document.querySelector("body");
            i.dom.container = n;
            i.dom.parent = n;
            i.callActions("afterCacheDom", arguments);
        },
        indexTargets: function () {
            var n = this,
                r = null,
                e = null,
                u = null,
                f = -1;
            if (
                (n.callActions("beforeIndexTargets", arguments),
                (n.dom.targets = n.config.layout.allowNestedTargets
                    ? n.dom.container.querySelectorAll(
                          n.config.selectors.target
                      )
                    : i.children(
                          n.dom.container,
                          n.config.selectors.target,
                          n.dom.document
                      )),
                (n.dom.targets = i.arrayFromList(n.dom.targets)),
                (n.targets = []),
                (u = n.config.load.dataset) &&
                    u.length !== n.dom.targets.length)
            )
                throw new Error(t.messages.errorDatasetPrerenderedMismatch());
            if (n.dom.targets.length) {
                for (f = 0; (e = n.dom.targets[f]); f++)
                    (r = new t.Target()),
                        r.init(e, n, u ? u[f] : void 0),
                        (r.isInDom = !0),
                        n.targets.push(r);
                n.dom.parent =
                    n.dom.targets[0].parentElement === n.dom.container
                        ? n.dom.container
                        : n.dom.targets[0].parentElement;
            }
            n.origOrder = n.targets;
            n.callActions("afterIndexTargets", arguments);
        },
        initControls: function () {
            var n = this,
                i = "",
                h = null,
                e = null,
                o = null,
                r = null,
                f = null,
                s = -1,
                u = -1;
            n.callActions("beforeInitControls", arguments);
            switch (n.config.controls.scope) {
                case "local":
                    o = n.dom.container;
                    break;
                case "global":
                    o = n.dom.document;
                    break;
                default:
                    throw new Error(
                        t.messages.errorConfigInvalidControlsScope()
                    );
            }
            for (s = 0; (i = t.controlDefinitions[s]); s++)
                if (n.config.controls.live || i.live) {
                    if (i.parent) {
                        if (((r = n.dom[i.parent]), !r || r.length < 0))
                            continue;
                        typeof r.length != "number" && (r = [r]);
                    } else r = [o];
                    for (u = 0; (e = r[u]); u++)
                        (f = n.getControl(e, i.type, i.selector)),
                            n.controls.push(f);
                } else
                    for (
                        h = o.querySelectorAll(
                            n.config.selectors.control + i.selector
                        ),
                            u = 0;
                        (e = h[u]);
                        u++
                    )
                        ((f = n.getControl(e, i.type, "")), f) &&
                            n.controls.push(f);
            n.callActions("afterInitControls", arguments);
        },
        getControl: function (n, r, u) {
            var e = this,
                f = null,
                o = -1;
            if ((e.callActions("beforeGetControl", arguments), !u))
                for (o = 0; (f = t.controls[o]); o++) {
                    if (f.el === n && f.isBound(e))
                        return e.callFilters(
                            "controlGetControl",
                            null,
                            arguments
                        );
                    if (f.el === n && f.type === r && f.selector === u)
                        return (
                            f.addBinding(e),
                            e.callFilters("controlGetControl", f, arguments)
                        );
                }
            return (
                (f = new t.Control()),
                f.init(n, r, u),
                (f.classNames.base = i.getClassname(e.config.classNames, r)),
                (f.classNames.active = i.getClassname(
                    e.config.classNames,
                    r,
                    e.config.classNames.modifierActive
                )),
                (f.classNames.disabled = i.getClassname(
                    e.config.classNames,
                    r,
                    e.config.classNames.modifierDisabled
                )),
                f.addBinding(e),
                e.callFilters("controlGetControl", f, arguments)
            );
        },
        getToggleSelector: function () {
            var n = this,
                r = n.config.controls.toggleLogic === "or" ? ", " : "",
                t = "";
            return (
                n.callActions("beforeGetToggleSelector", arguments),
                (n.toggleArray = i.clean(n.toggleArray)),
                (t = n.toggleArray.join(r)),
                t === "" && (t = n.config.controls.toggleDefault),
                n.callFilters("selectorGetToggleSelector", t, arguments)
            );
        },
        buildToggleArray: function (n, t) {
            var r = this,
                u = "";
            if (
                (r.callActions("beforeBuildToggleArray", arguments),
                n && n.filter)
            )
                u = n.filter.selector.replace(/\s/g, "");
            else if (t) u = t.activeFilter.selector.replace(/\s/g, "");
            else return;
            (u === r.config.selectors.target || u === "all") && (u = "");
            r.toggleArray =
                r.config.controls.toggleLogic === "or"
                    ? u.split(",")
                    : r.splitCompoundSelector(u);
            r.toggleArray = i.clean(r.toggleArray);
            r.callActions("afterBuildToggleArray", arguments);
        },
        splitCompoundSelector: function (n) {
            var i = n.split(/([\.\[])/g),
                u = [],
                r = "",
                t = -1;
            for (i[0] === "" && i.shift(), t = 0; t < i.length; t++)
                t % 2 == 0 && (r = ""), (r += i[t]), t % 2 != 0 && u.push(r);
            return u;
        },
        updateControls: function (n) {
            var r = this,
                e = null,
                u = new t.CommandMultimix(),
                f = -1;
            for (
                r.callActions("beforeUpdateControls", arguments),
                    u.filter = n.filter
                        ? n.filter.selector
                        : r.state.activeFilter.selector,
                    u.sort = n.sort
                        ? r.buildSortString(n.sort)
                        : r.buildSortString(r.state.activeSort),
                    u.filter === r.config.selectors.target &&
                        (u.filter = "all"),
                    u.filter === "" && (u.filter = "none"),
                    i.freeze(u),
                    f = 0;
                (e = r.controls[f]);
                f++
            )
                e.update(u, r.toggleArray);
            r.callActions("afterUpdateControls", arguments);
        },
        buildSortString: function (n) {
            var i = this,
                t = "";
            return (
                (t += n.sortString),
                n.next && (t += " " + i.buildSortString(n.next)),
                t
            );
        },
        insertTargets: function (n, r) {
            var u = this,
                e = null,
                h = -1,
                o = null,
                s = null,
                f = null,
                c = -1;
            if (
                (u.callActions("beforeInsertTargets", arguments),
                typeof n.index == "undefined" && (n.index = 0),
                (e = u.getNextSibling(n.index, n.sibling, n.position)),
                (o = u.dom.document.createDocumentFragment()),
                (h = e
                    ? i.index(e, u.config.selectors.target)
                    : u.targets.length),
                n.collection)
            ) {
                for (c = 0; (f = n.collection[c]); c++) {
                    if (u.dom.targets.indexOf(f) > -1)
                        throw new Error(
                            t.messages.errorInsertPreexistingElement()
                        );
                    ((f.style.display = "none"),
                    o.appendChild(f),
                    o.appendChild(u.dom.document.createTextNode(" ")),
                    i.isElement(f, u.dom.document) &&
                        f.matches(u.config.selectors.target)) &&
                        ((s = new t.Target()),
                        s.init(f, u),
                        (s.isInDom = !0),
                        u.targets.splice(h, 0, s),
                        h++);
                }
                u.dom.parent.insertBefore(o, e);
            }
            r.startOrder = u.origOrder = u.targets;
            u.callActions("afterInsertTargets", arguments);
        },
        getNextSibling: function (n, t, i) {
            var r = this,
                u = null;
            return (
                (n = Math.max(n, 0)),
                t && i === "before"
                    ? (u = t)
                    : t && i === "after"
                    ? (u = t.nextElementSibling || null)
                    : r.targets.length > 0 && typeof n != "undefined"
                    ? (u =
                          n < r.targets.length || !r.targets.length
                              ? r.targets[n].dom.el
                              : r.targets[r.targets.length - 1].dom.el
                                    .nextElementSibling)
                    : r.targets.length === 0 && r.dom.parent.children.length > 0
                    ? r.config.layout.siblingAfter
                        ? (u = r.config.layout.siblingAfter)
                        : r.config.layout.siblingBefore
                        ? (u = r.config.layout.siblingBefore.nextElementSibling)
                        : r.dom.parent.children[0]
                    : u === null,
                r.callFilters("elementGetNextSibling", u, arguments)
            );
        },
        filterOperation: function (n) {
            var r = this,
                u = !1,
                f = -1,
                e = "",
                t = null,
                i = -1;
            for (
                r.callActions("beforeFilterOperation", arguments),
                    e = n.newFilter.action,
                    i = 0;
                (t = n.newOrder[i]);
                i++
            )
                (u = n.newFilter.collection
                    ? n.newFilter.collection.indexOf(t.dom.el) > -1
                    : n.newFilter.selector === ""
                    ? !1
                    : t.dom.el.matches(n.newFilter.selector)),
                    r.evaluateHideShow(u, t, e, n);
            if (n.toRemove.length)
                for (i = 0; (t = n.show[i]); i++)
                    n.toRemove.indexOf(t) > -1 &&
                        (n.show.splice(i, 1),
                        (f = n.toShow.indexOf(t)) > -1 && n.toShow.splice(f, 1),
                        n.toHide.push(t),
                        n.hide.push(t),
                        i--);
            n.matching = n.show.slice();
            n.show.length === 0 &&
                n.newFilter.selector !== "" &&
                r.targets.length !== 0 &&
                (n.hasFailed = !0);
            r.callActions("afterFilterOperation", arguments);
        },
        evaluateHideShow: function (n, t, i, r) {
            var u = this,
                f = !1,
                e = Array.prototype.slice.call(arguments, 1);
            f = u.callFilters("testResultEvaluateHideShow", n, e);
            u.callActions("beforeEvaluateHideShow", arguments);
            (f === !0 && i === "show") || (f === !1 && i === "hide")
                ? (r.show.push(t), t.isShown || r.toShow.push(t))
                : (r.hide.push(t), t.isShown && r.toHide.push(t));
            u.callActions("afterEvaluateHideShow", arguments);
        },
        sortOperation: function (n) {
            var r = this,
                f = [],
                u = null,
                e = null,
                o = -1;
            if (
                (r.callActions("beforeSortOperation", arguments),
                (n.startOrder = r.targets),
                n.newSort.collection)
            ) {
                for (f = [], o = 0; (e = n.newSort.collection[o]); o++) {
                    if (r.dom.targets.indexOf(e) < 0)
                        throw new Error(
                            t.messages.errorSortNonExistentElement()
                        );
                    u = new t.Target();
                    u.init(e, r);
                    u.isInDom = !0;
                    f.push(u);
                }
                n.newOrder = f;
            } else
                n.newSort.order === "random"
                    ? (n.newOrder = i.arrayShuffle(n.startOrder))
                    : n.newSort.attribute === ""
                    ? ((n.newOrder = r.origOrder.slice()),
                      n.newSort.order === "desc" && n.newOrder.reverse())
                    : ((n.newOrder = n.startOrder.slice()),
                      n.newOrder.sort(function (t, i) {
                          return r.compare(t, i, n.newSort);
                      }));
            i.isEqualArray(n.newOrder, n.startOrder) && (n.willSort = !1);
            r.callActions("afterSortOperation", arguments);
        },
        compare: function (n, t, i) {
            var f = this,
                e = i.order,
                r = f.getAttributeValue(n, i.attribute),
                u = f.getAttributeValue(t, i.attribute);
            return (isNaN(r * 1) || isNaN(u * 1)
                ? ((r = r.toLowerCase()), (u = u.toLowerCase()))
                : ((r = r * 1), (u = u * 1)),
            r < u)
                ? e === "asc"
                    ? -1
                    : 1
                : r > u
                ? e === "asc"
                    ? 1
                    : -1
                : r === u && i.next
                ? f.compare(n, t, i.next)
                : 0;
        },
        getAttributeValue: function (n, i) {
            var u = this,
                r = "";
            return (
                (r = n.dom.el.getAttribute("data-" + i)),
                r === null &&
                    u.config.debug.showWarnings &&
                    console.warn(
                        t.messages.warningInconsistentSortingAttributes({
                            attribute: "data-" + i,
                        })
                    ),
                u.callFilters("valueGetAttributeValue", r || 0, arguments)
            );
        },
        printSort: function (t, r) {
            var f = this,
                h = t ? r.newOrder : r.startOrder,
                a = t ? r.startOrder : r.newOrder,
                s = h.length ? h[h.length - 1].dom.el.nextElementSibling : null,
                u = n.document.createDocumentFragment(),
                c = null,
                l = null,
                e = null,
                o = -1;
            for (
                f.callActions("beforePrintSort", arguments), o = 0;
                (l = h[o]);
                o++
            )
                ((e = l.dom.el), e.style.position !== "absolute") &&
                    (i.removeWhitespace(e.previousSibling),
                    e.parentElement.removeChild(e));
            for (
                c = s ? s.previousSibling : f.dom.parent.lastChild,
                    c && c.nodeName === "#text" && i.removeWhitespace(c),
                    o = 0;
                (l = a[o]);
                o++
            )
                (e = l.dom.el),
                    i.isElement(u.lastChild) &&
                        u.appendChild(n.document.createTextNode(" ")),
                    u.appendChild(e);
            f.dom.parent.firstChild &&
                f.dom.parent.firstChild !== s &&
                u.insertBefore(n.document.createTextNode(" "), u.childNodes[0]);
            s
                ? (u.appendChild(n.document.createTextNode(" ")),
                  f.dom.parent.insertBefore(u, s))
                : f.dom.parent.appendChild(u);
            f.callActions("afterPrintSort", arguments);
        },
        parseSortString: function (n, r) {
            for (
                var s = this, e = n.split(" "), u = r, o = [], f = -1, f = 0;
                f < e.length;
                f++
            ) {
                o = e[f].split(":");
                u.sortString = e[f];
                u.attribute = i.dashCase(o[0]);
                u.order = o[1] || "asc";
                switch (u.attribute) {
                    case "default":
                        u.attribute = "";
                        break;
                    case "random":
                        u.attribute = "";
                        u.order = "random";
                }
                if (!u.attribute || u.order === "random") break;
                f < e.length - 1 &&
                    ((u.next = new t.CommandSort()), i.freeze(u), (u = u.next));
            }
            return s.callFilters("commandsParseSort", r, arguments);
        },
        parseEffects: function () {
            var n = this,
                i = "",
                r = n.config.animation.effectsIn || n.config.animation.effects,
                u = n.config.animation.effectsOut || n.config.animation.effects;
            n.callActions("beforeParseEffects", arguments);
            n.effectsIn = new t.StyleData();
            n.effectsOut = new t.StyleData();
            n.transformIn = [];
            n.transformOut = [];
            n.effectsIn.opacity = n.effectsOut.opacity = 1;
            n.parseEffect("fade", r, n.effectsIn, n.transformIn);
            n.parseEffect("fade", u, n.effectsOut, n.transformOut, !0);
            for (i in t.transformDefaults)
                t.transformDefaults[i] instanceof t.TransformData &&
                    (n.parseEffect(i, r, n.effectsIn, n.transformIn),
                    n.parseEffect(i, u, n.effectsOut, n.transformOut, !0));
            n.parseEffect("stagger", r, n.effectsIn, n.transformIn);
            n.parseEffect("stagger", u, n.effectsOut, n.transformOut, !0);
            n.callActions("afterParseEffects", arguments);
        },
        parseEffect: function (n, i, r, u, f) {
            var o = this,
                s = -1,
                l = "",
                a = [],
                e = "",
                v = ["%", "px", "em", "rem", "vh", "vw", "deg"],
                h = "",
                c = -1;
            if (
                (o.callActions("beforeParseEffect", arguments),
                typeof i != "string")
            )
                throw new TypeError(
                    t.messages.errorConfigInvalidAnimationEffects()
                );
            if (i.indexOf(n) < 0) {
                n === "stagger" && (o.staggerDuration = 0);
                return;
            }
            s = i.indexOf(n + "(");
            s > -1 &&
                ((l = i.substring(s)), (a = /\(([^)]+)\)/.exec(l)), (e = a[1]));
            switch (n) {
                case "fade":
                    r.opacity = e ? parseFloat(e) : 0;
                    break;
                case "stagger":
                    o.staggerDuration = e ? parseFloat(e) : 100;
                    break;
                default:
                    if (
                        ((r[n].value =
                            f && o.config.animation.reverseOut && n !== "scale"
                                ? (e
                                      ? parseFloat(e)
                                      : t.transformDefaults[n].value) * -1
                                : e
                                ? parseFloat(e)
                                : t.transformDefaults[n].value),
                        e)
                    ) {
                        for (c = 0; (h = v[c]); c++)
                            if (e.indexOf(h) > -1) {
                                r[n].unit = h;
                                break;
                            }
                    } else r[n].unit = t.transformDefaults[n].unit;
                    u.push(n + "(" + r[n].value + r[n].unit + ")");
            }
            o.callActions("afterParseEffect", arguments);
        },
        buildState: function (n) {
            var f = this,
                i = new t.State(),
                u = null,
                r = -1;
            for (
                f.callActions("beforeBuildState", arguments), r = 0;
                (u = f.targets[r]);
                r++
            )
                (!n.toRemove.length || n.toRemove.indexOf(u) < 0) &&
                    i.targets.push(u.dom.el);
            for (r = 0; (u = n.matching[r]); r++) i.matching.push(u.dom.el);
            for (r = 0; (u = n.show[r]); r++) i.show.push(u.dom.el);
            for (r = 0; (u = n.hide[r]); r++)
                (!n.toRemove.length || n.toRemove.indexOf(u) < 0) &&
                    i.hide.push(u.dom.el);
            return (
                (i.id = f.id),
                (i.container = f.dom.container),
                (i.activeFilter = n.newFilter),
                (i.activeSort = n.newSort),
                (i.activeDataset = n.newDataset),
                (i.activeContainerClassName = n.newContainerClassName),
                (i.hasFailed = n.hasFailed),
                (i.totalTargets = f.targets.length),
                (i.totalShow = n.show.length),
                (i.totalHide = n.hide.length),
                (i.totalMatching = n.matching.length),
                (i.triggerElement = n.triggerElement),
                f.callFilters("stateBuildState", i, arguments)
            );
        },
        goMix: function (r, u) {
            var f = this,
                e = null;
            return (f.callActions("beforeGoMix", arguments),
            (f.config.animation.duration &&
                f.config.animation.effects &&
                i.isVisible(f.dom.container)) ||
                (r = !1),
            u.toShow.length ||
                u.toHide.length ||
                u.willSort ||
                u.willChangeLayout ||
                (r = !1),
            u.startState.show.length || u.show.length || (r = !1),
            t.events.fire(
                "mixStart",
                f.dom.container,
                {
                    state: u.startState,
                    futureState: u.newState,
                    instance: f,
                },
                f.dom.document
            ),
            typeof f.config.callbacks.onMixStart == "function" &&
                f.config.callbacks.onMixStart.call(
                    f.dom.container,
                    u.startState,
                    u.newState,
                    f
                ),
            i.removeClass(
                f.dom.container,
                i.getClassname(
                    f.config.classNames,
                    "container",
                    f.config.classNames.modifierFailed
                )
            ),
            (e = f.userDeferred
                ? f.userDeferred
                : (f.userDeferred = i.defer(t.libraries))),
            (f.isBusy = !0),
            !r || !t.features.has.transitions)
                ? (f.config.debug.fauxAsync
                      ? setTimeout(function () {
                            f.cleanUp(u);
                        }, f.config.animation.duration)
                      : f.cleanUp(u),
                  f.callFilters("promiseGoMix", e.promise, arguments))
                : (n.pageYOffset !== u.docState.scrollTop &&
                      n.scrollTo(u.docState.scrollLeft, u.docState.scrollTop),
                  f.config.animation.applyPerspective &&
                      ((f.dom.parent.style[t.features.perspectiveProp] =
                          f.config.animation.perspectiveDistance),
                      (f.dom.parent.style[t.features.perspectiveOriginProp] =
                          f.config.animation.perspectiveOrigin)),
                  f.config.animation.animateResizeContainer &&
                      u.startHeight !== u.newHeight &&
                      u.viewportDeltaY !== u.startHeight - u.newHeight &&
                      (f.dom.parent.style.height = u.startHeight + "px"),
                  f.config.animation.animateResizeContainer &&
                      u.startWidth !== u.newWidth &&
                      u.viewportDeltaX !== u.startWidth - u.newWidth &&
                      (f.dom.parent.style.width = u.startWidth + "px"),
                  u.startHeight === u.newHeight &&
                      (f.dom.parent.style.height = u.startHeight + "px"),
                  u.startWidth === u.newWidth &&
                      (f.dom.parent.style.width = u.startWidth + "px"),
                  u.startHeight === u.newHeight &&
                      u.startWidth === u.newWidth &&
                      (f.dom.parent.style.overflow = "hidden"),
                  requestAnimationFrame(function () {
                      f.moveTargets(u);
                  }),
                  f.callFilters("promiseGoMix", e.promise, arguments));
        },
        getStartMixData: function (i) {
            var f = this,
                r = n.getComputedStyle(f.dom.parent),
                e = f.dom.parent.getBoundingClientRect(),
                o = null,
                s = {},
                u = -1,
                h = r[t.features.boxSizingProp];
            for (
                f.incPadding = h === "border-box",
                    f.callActions("beforeGetStartMixData", arguments),
                    u = 0;
                (o = i.show[u]);
                u++
            )
                (s = o.getPosData()),
                    (i.showPosData[u] = {
                        startPosData: s,
                    });
            for (u = 0; (o = i.toHide[u]); u++)
                (s = o.getPosData()),
                    (i.toHidePosData[u] = {
                        startPosData: s,
                    });
            i.startX = e.left;
            i.startY = e.top;
            i.startHeight = f.incPadding
                ? e.height
                : e.height -
                  parseFloat(r.paddingTop) -
                  parseFloat(r.paddingBottom) -
                  parseFloat(r.borderTop) -
                  parseFloat(r.borderBottom);
            i.startWidth = f.incPadding
                ? e.width
                : e.width -
                  parseFloat(r.paddingLeft) -
                  parseFloat(r.paddingRight) -
                  parseFloat(r.borderLeft) -
                  parseFloat(r.borderRight);
            f.callActions("afterGetStartMixData", arguments);
        },
        setInter: function (n) {
            var t = this,
                u = null,
                r = -1;
            for (
                t.callActions("beforeSetInter", arguments),
                    t.config.animation.clampHeight &&
                        ((t.dom.parent.style.height = n.startHeight + "px"),
                        (t.dom.parent.style.overflow = "hidden")),
                    t.config.animation.clampWidth &&
                        ((t.dom.parent.style.width = n.startWidth + "px"),
                        (t.dom.parent.style.overflow = "hidden")),
                    r = 0;
                (u = n.toShow[r]);
                r++
            )
                u.show();
            n.willChangeLayout &&
                (i.removeClass(t.dom.container, n.startContainerClassName),
                i.addClass(t.dom.container, n.newContainerClassName));
            t.callActions("afterSetInter", arguments);
        },
        getInterMixData: function (n) {
            var r = this,
                i = null,
                t = -1;
            for (
                r.callActions("beforeGetInterMixData", arguments), t = 0;
                (i = n.show[t]);
                t++
            )
                n.showPosData[t].interPosData = i.getPosData();
            for (t = 0; (i = n.toHide[t]); t++)
                n.toHidePosData[t].interPosData = i.getPosData();
            r.callActions("afterGetInterMixData", arguments);
        },
        setFinal: function (n) {
            var t = this,
                r = null,
                i = -1;
            for (
                t.callActions("beforeSetFinal", arguments),
                    n.willSort && t.printSort(!1, n),
                    i = 0;
                (r = n.toHide[i]);
                i++
            )
                r.hide();
            t.callActions("afterSetFinal", arguments);
        },
        getFinalMixData: function (t) {
            var r = this,
                f = null,
                o = null,
                e = null,
                u = -1;
            for (
                r.callActions("beforeGetFinalMixData", arguments), u = 0;
                (e = t.show[u]);
                u++
            )
                t.showPosData[u].finalPosData = e.getPosData();
            for (u = 0; (e = t.toHide[u]); u++)
                t.toHidePosData[u].finalPosData = e.getPosData();
            for (
                (r.config.animation.clampHeight ||
                    r.config.animation.clampWidth) &&
                    (r.dom.parent.style.height =
                        r.dom.parent.style.width =
                        r.dom.parent.style.overflow =
                            ""),
                    r.incPadding || (f = n.getComputedStyle(r.dom.parent)),
                    o = r.dom.parent.getBoundingClientRect(),
                    t.newX = o.left,
                    t.newY = o.top,
                    t.newHeight = r.incPadding
                        ? o.height
                        : o.height -
                          parseFloat(f.paddingTop) -
                          parseFloat(f.paddingBottom) -
                          parseFloat(f.borderTop) -
                          parseFloat(f.borderBottom),
                    t.newWidth = r.incPadding
                        ? o.width
                        : o.width -
                          parseFloat(f.paddingLeft) -
                          parseFloat(f.paddingRight) -
                          parseFloat(f.borderLeft) -
                          parseFloat(f.borderRight),
                    t.viewportDeltaX =
                        t.docState.viewportWidth -
                        this.dom.document.documentElement.clientWidth,
                    t.viewportDeltaY =
                        t.docState.viewportHeight -
                        this.dom.document.documentElement.clientHeight,
                    t.willSort && r.printSort(!0, t),
                    u = 0;
                (e = t.toShow[u]);
                u++
            )
                e.hide();
            for (u = 0; (e = t.toHide[u]); u++) e.show();
            t.willChangeLayout &&
                (i.removeClass(r.dom.container, t.newContainerClassName),
                i.addClass(
                    r.dom.container,
                    r.config.layout.containerClassName
                ));
            r.callActions("afterGetFinalMixData", arguments);
        },
        getTweenData: function (n) {
            var u = this,
                o = null,
                i = null,
                l = Object.getOwnPropertyNames(u.effectsIn),
                r = "",
                f = null,
                s = -1,
                h = -1,
                e = -1,
                c = -1;
            for (
                u.callActions("beforeGetTweenData", arguments), e = 0;
                (o = n.show[e]);
                e++
            )
                for (
                    i = n.showPosData[e],
                        i.posIn = new t.StyleData(),
                        i.posOut = new t.StyleData(),
                        i.tweenData = new t.StyleData(),
                        o.isShown
                            ? ((i.posIn.x =
                                  i.startPosData.x - i.interPosData.x),
                              (i.posIn.y = i.startPosData.y - i.interPosData.y))
                            : (i.posIn.x = i.posIn.y = 0),
                        i.posOut.x = i.finalPosData.x - i.interPosData.x,
                        i.posOut.y = i.finalPosData.y - i.interPosData.y,
                        i.posIn.opacity = o.isShown ? 1 : u.effectsIn.opacity,
                        i.posOut.opacity = 1,
                        i.tweenData.opacity =
                            i.posOut.opacity - i.posIn.opacity,
                        o.isShown ||
                            u.config.animation.nudge ||
                            ((i.posIn.x = i.posOut.x),
                            (i.posIn.y = i.posOut.y)),
                        i.tweenData.x = i.posOut.x - i.posIn.x,
                        i.tweenData.y = i.posOut.y - i.posIn.y,
                        u.config.animation.animateResizeTargets &&
                            ((i.posIn.width = i.startPosData.width),
                            (i.posIn.height = i.startPosData.height),
                            (s =
                                (i.startPosData.width || i.finalPosData.width) -
                                i.interPosData.width),
                            (i.posIn.marginRight =
                                i.startPosData.marginRight - s),
                            (h =
                                (i.startPosData.height ||
                                    i.finalPosData.height) -
                                i.interPosData.height),
                            (i.posIn.marginBottom =
                                i.startPosData.marginBottom - h),
                            (i.posOut.width = i.finalPosData.width),
                            (i.posOut.height = i.finalPosData.height),
                            (s =
                                (i.finalPosData.width || i.startPosData.width) -
                                i.interPosData.width),
                            (i.posOut.marginRight =
                                i.finalPosData.marginRight - s),
                            (h =
                                (i.finalPosData.height ||
                                    i.startPosData.height) -
                                i.interPosData.height),
                            (i.posOut.marginBottom =
                                i.finalPosData.marginBottom - h),
                            (i.tweenData.width =
                                i.posOut.width - i.posIn.width),
                            (i.tweenData.height =
                                i.posOut.height - i.posIn.height),
                            (i.tweenData.marginRight =
                                i.posOut.marginRight - i.posIn.marginRight),
                            (i.tweenData.marginBottom =
                                i.posOut.marginBottom - i.posIn.marginBottom)),
                        c = 0;
                    (r = l[c]);
                    c++
                )
                    ((f = u.effectsIn[r]),
                    f instanceof t.TransformData && f.value) &&
                        ((i.posIn[r].value = f.value),
                        (i.posOut[r].value = 0),
                        (i.tweenData[r].value =
                            i.posOut[r].value - i.posIn[r].value),
                        (i.posIn[r].unit =
                            i.posOut[r].unit =
                            i.tweenData[r].unit =
                                f.unit));
            for (e = 0; (o = n.toHide[e]); e++)
                for (
                    i = n.toHidePosData[e],
                        i.posIn = new t.StyleData(),
                        i.posOut = new t.StyleData(),
                        i.tweenData = new t.StyleData(),
                        i.posIn.x = o.isShown
                            ? i.startPosData.x - i.interPosData.x
                            : 0,
                        i.posIn.y = o.isShown
                            ? i.startPosData.y - i.interPosData.y
                            : 0,
                        i.posOut.x = u.config.animation.nudge ? 0 : i.posIn.x,
                        i.posOut.y = u.config.animation.nudge ? 0 : i.posIn.y,
                        i.tweenData.x = i.posOut.x - i.posIn.x,
                        i.tweenData.y = i.posOut.y - i.posIn.y,
                        u.config.animation.animateResizeTargets &&
                            ((i.posIn.width = i.startPosData.width),
                            (i.posIn.height = i.startPosData.height),
                            (s = i.startPosData.width - i.interPosData.width),
                            (i.posIn.marginRight =
                                i.startPosData.marginRight - s),
                            (h = i.startPosData.height - i.interPosData.height),
                            (i.posIn.marginBottom =
                                i.startPosData.marginBottom - h)),
                        i.posIn.opacity = 1,
                        i.posOut.opacity = u.effectsOut.opacity,
                        i.tweenData.opacity =
                            i.posOut.opacity - i.posIn.opacity,
                        c = 0;
                    (r = l[c]);
                    c++
                )
                    ((f = u.effectsOut[r]),
                    f instanceof t.TransformData && f.value) &&
                        ((i.posIn[r].value = 0),
                        (i.posOut[r].value = f.value),
                        (i.tweenData[r].value =
                            i.posOut[r].value - i.posIn[r].value),
                        (i.posIn[r].unit =
                            i.posOut[r].unit =
                            i.tweenData[r].unit =
                                f.unit));
            u.callActions("afterGetTweenData", arguments);
        },
        moveTargets: function (n) {
            var u = this,
                o = null,
                r = null,
                f = null,
                s = "",
                h = !1,
                c = -1,
                e = -1,
                l = u.checkProgress.bind(u);
            for (
                u.callActions("beforeMoveTargets", arguments), e = 0;
                (o = n.show[e]);
                e++
            )
                (r = new t.IMoveData()),
                    (f = n.showPosData[e]),
                    (s = o.isShown ? "none" : "show"),
                    (h = u.willTransition(s, n.hasEffect, f.posIn, f.posOut)),
                    h && c++,
                    o.show(),
                    (r.posIn = f.posIn),
                    (r.posOut = f.posOut),
                    (r.statusChange = s),
                    (r.staggerIndex = c),
                    (r.operation = n),
                    (r.callback = h ? l : null),
                    o.move(r);
            for (e = 0; (o = n.toHide[e]); e++)
                (f = n.toHidePosData[e]),
                    (r = new t.IMoveData()),
                    (s = "hide"),
                    (h = u.willTransition(s, f.posIn, f.posOut)),
                    (r.posIn = f.posIn),
                    (r.posOut = f.posOut),
                    (r.statusChange = s),
                    (r.staggerIndex = e),
                    (r.operation = n),
                    (r.callback = h ? l : null),
                    o.move(r);
            u.config.animation.animateResizeContainer &&
                ((u.dom.parent.style[t.features.transitionProp] =
                    "height " +
                    u.config.animation.duration +
                    "ms ease, width " +
                    u.config.animation.duration +
                    "ms ease "),
                requestAnimationFrame(function () {
                    n.startHeight !== n.newHeight &&
                        n.viewportDeltaY !== n.startHeight - n.newHeight &&
                        (u.dom.parent.style.height = n.newHeight + "px");
                    n.startWidth !== n.newWidth &&
                        n.viewportDeltaX !== n.startWidth - n.newWidth &&
                        (u.dom.parent.style.width = n.newWidth + "px");
                }));
            n.willChangeLayout &&
                (i.removeClass(
                    u.dom.container,
                    u.config.layout.ContainerClassName
                ),
                i.addClass(u.dom.container, n.newContainerClassName));
            u.callActions("afterMoveTargets", arguments);
        },
        hasEffect: function () {
            var t = this,
                e = [
                    "scale",
                    "translateX",
                    "translateY",
                    "translateZ",
                    "rotateX",
                    "rotateY",
                    "rotateZ",
                ],
                r = "",
                n = null,
                u = !1,
                f = -1,
                i = -1;
            if (t.effectsIn.opacity !== 1)
                return t.callFilters("resultHasEffect", !0, arguments);
            for (i = 0; (r = e[i]); i++)
                if (
                    ((n = t.effectsIn[r]),
                    (f = typeof n && n.value !== "undefined" ? n.value : n),
                    f !== 0)
                ) {
                    u = !0;
                    break;
                }
            return t.callFilters("resultHasEffect", u, arguments);
        },
        willTransition: function (n, t, r, u) {
            var f = this,
                e = !1;
            return (
                (e = i.isVisible(f.dom.container)
                    ? (n !== "none" && t) || r.x !== u.x || r.y !== u.y
                        ? !0
                        : f.config.animation.animateResizeTargets
                        ? r.width !== u.width ||
                          r.height !== u.height ||
                          r.marginRight !== u.marginRight ||
                          r.marginTop !== u.marginTop
                        : !1
                    : !1),
                f.callFilters("resultWillTransition", e, arguments)
            );
        },
        checkProgress: function (n) {
            var t = this;
            t.targetsDone++;
            t.targetsBound === t.targetsDone && t.cleanUp(n);
        },
        cleanUp: function (n) {
            var r = this,
                u = null,
                o = null,
                s = null,
                e = null,
                f = -1;
            for (
                r.callActions("beforeCleanUp", arguments),
                    r.targetsMoved =
                        r.targetsImmovable =
                        r.targetsBound =
                        r.targetsDone =
                            0,
                    f = 0;
                (u = n.show[f]);
                f++
            )
                u.cleanUp(), u.show();
            for (f = 0; (u = n.toHide[f]); f++) u.cleanUp(), u.hide();
            if (
                (n.willSort && r.printSort(!1, n),
                (r.dom.parent.style[t.features.transitionProp] =
                    r.dom.parent.style.height =
                    r.dom.parent.style.width =
                    r.dom.parent.style.overflow =
                    r.dom.parent.style[t.features.perspectiveProp] =
                    r.dom.parent.style[t.features.perspectiveOriginProp] =
                        ""),
                n.willChangeLayout &&
                    (i.removeClass(r.dom.container, n.startContainerClassName),
                    i.addClass(r.dom.container, n.newContainerClassName)),
                n.toRemove.length)
            ) {
                for (f = 0; (u = r.targets[f]); f++)
                    n.toRemove.indexOf(u) > -1 &&
                        ((o = u.dom.el.previousSibling) &&
                            o.nodeName === "#text" &&
                            (s = u.dom.el.nextSibling) &&
                            s.nodeName === "#text" &&
                            i.removeWhitespace(o),
                        n.willSort || r.dom.parent.removeChild(u.dom.el),
                        r.targets.splice(f, 1),
                        (u.isInDom = !1),
                        f--);
                r.origOrder = r.targets;
            }
            n.willSort && (r.targets = n.newOrder);
            r.state = n.newState;
            r.lastOperation = n;
            r.dom.targets = r.state.targets;
            t.events.fire(
                "mixEnd",
                r.dom.container,
                {
                    state: r.state,
                    instance: r,
                },
                r.dom.document
            );
            typeof r.config.callbacks.onMixEnd == "function" &&
                r.config.callbacks.onMixEnd.call(r.dom.container, r.state, r);
            n.hasFailed &&
                (t.events.fire(
                    "mixFail",
                    r.dom.container,
                    {
                        state: r.state,
                        instance: r,
                    },
                    r.dom.document
                ),
                typeof r.config.callbacks.onMixFail == "function" &&
                    r.config.callbacks.onMixFail.call(
                        r.dom.container,
                        r.state,
                        r
                    ),
                i.addClass(
                    r.dom.container,
                    i.getClassname(
                        r.config.classNames,
                        "container",
                        r.config.classNames.modifierFailed
                    )
                ));
            typeof r.userCallback == "function" &&
                r.userCallback.call(r.dom.container, r.state, r);
            typeof r.userDeferred.resolve == "function" &&
                r.userDeferred.resolve(r.state);
            r.userCallback = null;
            r.userDeferred = null;
            r.lastClicked = null;
            r.isToggling = !1;
            r.isBusy = !1;
            r.queue.length &&
                (r.callActions("beforeReadQueueCleanUp", arguments),
                (e = r.queue.shift()),
                (r.userDeferred = e.deferred),
                (r.isToggling = e.isToggling),
                (r.lastClicked = e.triggerElement),
                e.instruction.command instanceof t.CommandMultimix
                    ? r.multimix.apply(r, e.args)
                    : r.dataset.apply(r, e.args));
            r.callActions("afterCleanUp", arguments);
        },
        parseMultimixArgs: function (n) {
            var f = this,
                r = new t.UserInstruction(),
                u = null,
                e = -1;
            for (
                r.animate = f.config.animation.enable,
                    r.command = new t.CommandMultimix(),
                    e = 0;
                e < n.length;
                e++
            )
                ((u = n[e]), u !== null) &&
                    (typeof u == "object"
                        ? i.extend(r.command, u)
                        : typeof u == "boolean"
                        ? (r.animate = u)
                        : typeof u == "function" && (r.callback = u));
            return (
                !r.command.insert ||
                    r.command.insert instanceof t.CommandInsert ||
                    (r.command.insert = f.parseInsertArgs([
                        r.command.insert,
                    ]).command),
                !r.command.remove ||
                    r.command.remove instanceof t.CommandRemove ||
                    (r.command.remove = f.parseRemoveArgs([
                        r.command.remove,
                    ]).command),
                !r.command.filter ||
                    r.command.filter instanceof t.CommandFilter ||
                    (r.command.filter = f.parseFilterArgs([
                        r.command.filter,
                    ]).command),
                !r.command.sort ||
                    r.command.sort instanceof t.CommandSort ||
                    (r.command.sort = f.parseSortArgs([
                        r.command.sort,
                    ]).command),
                !r.command.changeLayout ||
                    r.command.changeLayout instanceof t.CommandChangeLayout ||
                    (r.command.changeLayout = f.parseChangeLayoutArgs([
                        r.command.changeLayout,
                    ]).command),
                (r = f.callFilters(
                    "instructionParseMultimixArgs",
                    r,
                    arguments
                )),
                i.freeze(r),
                r
            );
        },
        parseFilterArgs: function (n) {
            var e = this,
                u = new t.UserInstruction(),
                r = null,
                f = -1;
            for (
                u.animate = e.config.animation.enable,
                    u.command = new t.CommandFilter(),
                    f = 0;
                f < n.length;
                f++
            )
                (r = n[f]),
                    typeof r == "string"
                        ? (u.command.selector = r)
                        : r === null
                        ? (u.command.collection = [])
                        : typeof r == "object" && i.isElement(r, e.dom.document)
                        ? (u.command.collection = [r])
                        : typeof r == "object" && typeof r.length != "undefined"
                        ? (u.command.collection = i.arrayFromList(r))
                        : typeof r == "object"
                        ? i.extend(u.command, r)
                        : typeof r == "boolean"
                        ? (u.animate = r)
                        : typeof r == "function" && (u.callback = r);
            if (u.command.selector && u.command.collection)
                throw new Error(t.messages.errorFilterInvalidArguments());
            return (
                (u = e.callFilters("instructionParseFilterArgs", u, arguments)),
                i.freeze(u),
                u
            );
        },
        parseSortArgs: function (n) {
            var e = this,
                r = new t.UserInstruction(),
                u = null,
                o = "",
                f = -1;
            for (
                r.animate = e.config.animation.enable,
                    r.command = new t.CommandSort(),
                    f = 0;
                f < n.length;
                f++
            )
                if (((u = n[f]), u !== null))
                    switch (typeof u) {
                        case "string":
                            o = u;
                            break;
                        case "object":
                            u.length &&
                                (r.command.collection = i.arrayFromList(u));
                            break;
                        case "boolean":
                            r.animate = u;
                            break;
                        case "function":
                            r.callback = u;
                    }
            return (
                o && (r.command = e.parseSortString(o, r.command)),
                (r = e.callFilters("instructionParseSortArgs", r, arguments)),
                i.freeze(r),
                r
            );
        },
        parseInsertArgs: function (n) {
            var f = this,
                u = new t.UserInstruction(),
                r = null,
                e = -1;
            for (
                u.animate = f.config.animation.enable,
                    u.command = new t.CommandInsert(),
                    e = 0;
                e < n.length;
                e++
            )
                ((r = n[e]), r !== null) &&
                    (typeof r == "number"
                        ? (u.command.index = r)
                        : typeof r == "string" &&
                          ["before", "after"].indexOf(r) > -1
                        ? (u.command.position = r)
                        : typeof r == "string"
                        ? (u.command.collection = i.arrayFromList(
                              i.createElement(r).childNodes
                          ))
                        : typeof r == "object" && i.isElement(r, f.dom.document)
                        ? u.command.collection.length
                            ? (u.command.sibling = r)
                            : (u.command.collection = [r])
                        : typeof r == "object" && r.length
                        ? u.command.collection.length
                            ? (u.command.sibling = r[0])
                            : (u.command.collection = r)
                        : typeof r == "object" &&
                          r.childNodes &&
                          r.childNodes.length
                        ? u.command.collection.length
                            ? (u.command.sibling = r.childNodes[0])
                            : (u.command.collection = i.arrayFromList(
                                  r.childNodes
                              ))
                        : typeof r == "object"
                        ? i.extend(u.command, r)
                        : typeof r == "boolean"
                        ? (u.animate = r)
                        : typeof r == "function" && (u.callback = r));
            if (u.command.index && u.command.sibling)
                throw new Error(t.messages.errorInsertInvalidArguments());
            return (
                !u.command.collection.length &&
                    f.config.debug.showWarnings &&
                    console.warn(t.messages.warningInsertNoElements()),
                (u = f.callFilters("instructionParseInsertArgs", u, arguments)),
                i.freeze(u),
                u
            );
        },
        parseRemoveArgs: function (n) {
            var f = this,
                r = new t.UserInstruction(),
                o = null,
                u = null,
                e = -1;
            for (
                r.animate = f.config.animation.enable,
                    r.command = new t.CommandRemove(),
                    e = 0;
                e < n.length;
                e++
            )
                if (((u = n[e]), u !== null))
                    switch (typeof u) {
                        case "number":
                            f.targets[u] &&
                                (r.command.targets[0] = f.targets[u]);
                            break;
                        case "string":
                            r.command.collection = i.arrayFromList(
                                f.dom.parent.querySelectorAll(u)
                            );
                            break;
                        case "object":
                            u && u.length
                                ? (r.command.collection = u)
                                : i.isElement(u, f.dom.document)
                                ? (r.command.collection = [u])
                                : i.extend(r.command, u);
                            break;
                        case "boolean":
                            r.animate = u;
                            break;
                        case "function":
                            r.callback = u;
                    }
            if (r.command.collection.length)
                for (e = 0; (o = f.targets[e]); e++)
                    r.command.collection.indexOf(o.dom.el) > -1 &&
                        r.command.targets.push(o);
            return (
                !r.command.targets.length &&
                    f.config.debug.showWarnings &&
                    console.warn(t.messages.warningRemoveNoElements()),
                i.freeze(r),
                r
            );
        },
        parseDatasetArgs: function (n) {
            var e = this,
                u = new t.UserInstruction(),
                r = null,
                f = -1;
            for (
                u.animate = e.config.animation.enable,
                    u.command = new t.CommandDataset(),
                    f = 0;
                f < n.length;
                f++
            )
                if (((r = n[f]), r !== null))
                    switch (typeof r) {
                        case "object":
                            Array.isArray(r) || typeof r.length == "number"
                                ? (u.command.dataset = r)
                                : i.extend(u.command, r);
                            break;
                        case "boolean":
                            u.animate = r;
                            break;
                        case "function":
                            u.callback = r;
                    }
            return i.freeze(u), u;
        },
        parseChangeLayoutArgs: function (n) {
            var e = this,
                r = new t.UserInstruction(),
                u = null,
                f = -1;
            for (
                r.animate = e.config.animation.enable,
                    r.command = new t.CommandChangeLayout(),
                    f = 0;
                f < n.length;
                f++
            )
                if (((u = n[f]), u !== null))
                    switch (typeof u) {
                        case "string":
                            r.command.containerClassName = u;
                            break;
                        case "object":
                            i.extend(r.command, u);
                            break;
                        case "boolean":
                            r.animate = u;
                            break;
                        case "function":
                            r.callback = u;
                    }
            return i.freeze(r), r;
        },
        queueMix: function (n) {
            var r = this,
                u = null,
                f = "";
            return (
                r.callActions("beforeQueueMix", arguments),
                (u = i.defer(t.libraries)),
                r.config.animation.queue &&
                r.queue.length < r.config.animation.queueLimit
                    ? ((n.deferred = u),
                      r.queue.push(n),
                      r.config.controls.enable &&
                          (r.isToggling
                              ? (r.buildToggleArray(n.instruction.command),
                                (f = r.getToggleSelector()),
                                r.updateControls({
                                    filter: {
                                        selector: f,
                                    },
                                }))
                              : r.updateControls(n.instruction.command)))
                    : (r.config.debug.showWarnings &&
                          console.warn(
                              t.messages.warningMultimixInstanceQueueFull()
                          ),
                      u.resolve(r.state),
                      t.events.fire(
                          "mixBusy",
                          r.dom.container,
                          {
                              state: r.state,
                              instance: r,
                          },
                          r.dom.document
                      ),
                      typeof r.config.callbacks.onMixBusy == "function" &&
                          r.config.callbacks.onMixBusy.call(
                              r.dom.container,
                              r.state,
                              r
                          )),
                r.callFilters("promiseQueueMix", u.promise, arguments)
            );
        },
        getDataOperation: function (n) {
            var u = this,
                r = new t.Operation(),
                f = [];
            if (
                ((r = u.callFilters(
                    "operationUnmappedGetDataOperation",
                    r,
                    arguments
                )),
                u.dom.targets.length &&
                    !(f = u.state.activeDataset || []).length)
            )
                throw new Error(t.messages.errorDatasetNotSet());
            return (
                (r.id = i.randomHex()),
                (r.startState = u.state),
                (r.startDataset = f),
                (r.newDataset = n.slice()),
                u.diffDatasets(r),
                (r.startOrder = u.targets),
                (r.newOrder = r.show),
                u.config.animation.enable &&
                    (u.getStartMixData(r),
                    u.setInter(r),
                    (r.docState = i.getDocumentState(u.dom.document)),
                    u.getInterMixData(r),
                    u.setFinal(r),
                    u.getFinalMixData(r),
                    u.parseEffects(),
                    (r.hasEffect = u.hasEffect()),
                    u.getTweenData(r)),
                (u.targets = r.show.slice()),
                (r.newState = u.buildState(r)),
                Array.prototype.push.apply(u.targets, r.toRemove),
                u.callFilters("operationMappedGetDataOperation", r, arguments)
            );
        },
        diffDatasets: function (n) {
            var u = this,
                a = [],
                v = [],
                l = [],
                o = null,
                r = null,
                s = null,
                f = null,
                c = null,
                y = {},
                e = "",
                h = -1;
            for (
                u.callActions("beforeDiffDatasets", arguments), h = 0;
                (o = n.newDataset[h]);
                h++
            ) {
                if (
                    typeof (e = o[u.config.data.uidKey]) == "undefined" ||
                    e.toString().length < 1
                )
                    throw new TypeError(
                        t.messages.errorDatasetInvalidUidKey({
                            uidKey: u.config.data.uidKey,
                        })
                    );
                if (y[e])
                    throw new Error(
                        t.messages.errorDatasetDuplicateUid({
                            uid: e,
                        })
                    );
                else y[e] = !0;
                (r = u.cache[e]) instanceof t.Target
                    ? (u.config.data.dirtyCheck &&
                          !i.deepEquals(o, r.data) &&
                          ((s = r.render(o)),
                          (r.data = o),
                          s !== r.dom.el &&
                              (r.isInDom &&
                                  (r.unbindEvents(),
                                  u.dom.parent.replaceChild(s, r.dom.el)),
                              r.isShown || (s.style.display = "none"),
                              (r.dom.el = s),
                              r.isInDom && r.bindEvents())),
                      (s = r.dom.el))
                    : ((r = new t.Target()), r.init(null, u, o), r.hide());
                r.isInDom
                    ? ((c = r.dom.el.nextElementSibling),
                      v.push(e),
                      f &&
                          (f.lastElementChild &&
                              f.appendChild(u.dom.document.createTextNode(" ")),
                          u.insertDatasetFrag(f, r.dom.el, l),
                          (f = null)))
                    : (f || (f = u.dom.document.createDocumentFragment()),
                      f.lastElementChild &&
                          f.appendChild(u.dom.document.createTextNode(" ")),
                      f.appendChild(r.dom.el),
                      (r.isInDom = !0),
                      r.unbindEvents(),
                      r.bindEvents(),
                      r.hide(),
                      n.toShow.push(r),
                      l.push(r));
                n.show.push(r);
            }
            for (
                f &&
                    ((c = c || u.config.layout.siblingAfter),
                    c && f.appendChild(u.dom.document.createTextNode(" ")),
                    u.insertDatasetFrag(f, c, l)),
                    h = 0;
                (o = n.startDataset[h]);
                h++
            )
                (e = o[u.config.data.uidKey]),
                    (r = u.cache[e]),
                    n.show.indexOf(r) < 0
                        ? (n.hide.push(r), n.toHide.push(r), n.toRemove.push(r))
                        : a.push(e);
            i.isEqualArray(a, v) || (n.willSort = !0);
            u.callActions("afterDiffDatasets", arguments);
        },
        insertDatasetFrag: function (n, t, r) {
            var u = this,
                f = t
                    ? i.arrayFromList(u.dom.parent.children).indexOf(t)
                    : u.targets.length;
            for (u.dom.parent.insertBefore(n, t); r.length; )
                u.targets.splice(f, 0, r.shift()), f++;
        },
        willSort: function (n, t) {
            var i = this,
                r = !1;
            return (
                (r =
                    i.config.behavior.liveSort ||
                    n.order === "random" ||
                    n.attribute !== t.attribute ||
                    n.order !== t.order ||
                    n.collection !== t.collection ||
                    (n.next === null && t.next) ||
                    (n.next && t.next === null)
                        ? !0
                        : n.next && t.next
                        ? i.willSort(n.next, t.next)
                        : !1),
                i.callFilters("resultWillSort", r, arguments)
            );
        },
        show: function () {
            var n = this;
            return n.filter("all");
        },
        hide: function () {
            var n = this;
            return n.filter("none");
        },
        isMixing: function () {
            var n = this;
            return n.isBusy;
        },
        filter: function () {
            var t = this,
                n = t.parseFilterArgs(arguments);
            return t.multimix(
                {
                    filter: n.command,
                },
                n.animate,
                n.callback
            );
        },
        toggleOn: function () {
            var n = this,
                t = n.parseFilterArgs(arguments),
                i = t.command.selector,
                r = "";
            return (
                (n.isToggling = !0),
                n.toggleArray.indexOf(i) < 0 && n.toggleArray.push(i),
                (r = n.getToggleSelector()),
                n.multimix(
                    {
                        filter: r,
                    },
                    t.animate,
                    t.callback
                )
            );
        },
        toggleOff: function () {
            var n = this,
                t = n.parseFilterArgs(arguments),
                u = t.command.selector,
                i = n.toggleArray.indexOf(u),
                r = "";
            return (
                (n.isToggling = !0),
                i > -1 && n.toggleArray.splice(i, 1),
                (r = n.getToggleSelector()),
                n.multimix(
                    {
                        filter: r,
                    },
                    t.animate,
                    t.callback
                )
            );
        },
        sort: function () {
            var t = this,
                n = t.parseSortArgs(arguments);
            return t.multimix(
                {
                    sort: n.command,
                },
                n.animate,
                n.callback
            );
        },
        changeLayout: function () {
            var t = this,
                n = t.parseChangeLayoutArgs(arguments);
            return t.multimix(
                {
                    changeLayout: n.command,
                },
                n.animate,
                n.callback
            );
        },
        dataset: function () {
            var n = this,
                i = n.parseDatasetArgs(arguments),
                u = null,
                r = null,
                f = !1;
            return (
                n.callActions("beforeDataset", arguments),
                n.isBusy
                    ? ((r = new t.QueueItem()),
                      (r.args = arguments),
                      (r.instruction = i),
                      n.queueMix(r))
                    : (i.callback && (n.userCallback = i.callback),
                      (f =
                          i.animate ^ n.config.animation.enable
                              ? i.animate
                              : n.config.animation.enable),
                      (u = n.getDataOperation(i.command.dataset)),
                      n.goMix(f, u))
            );
        },
        multimix: function () {
            var n = this,
                u = null,
                f = !1,
                r = null,
                i = n.parseMultimixArgs(arguments);
            return (
                n.callActions("beforeMultimix", arguments),
                n.isBusy
                    ? ((r = new t.QueueItem()),
                      (r.args = arguments),
                      (r.instruction = i),
                      (r.triggerElement = n.lastClicked),
                      (r.isToggling = n.isToggling),
                      n.queueMix(r))
                    : ((u = n.getOperation(i.command)),
                      n.config.controls.enable &&
                          (i.command.filter &&
                              !n.isToggling &&
                              ((n.toggleArray.length = 0),
                              n.buildToggleArray(u.command)),
                          n.queue.length < 1 && n.updateControls(u.command)),
                      i.callback && (n.userCallback = i.callback),
                      (f =
                          i.animate ^ n.config.animation.enable
                              ? i.animate
                              : n.config.animation.enable),
                      n.callFilters("operationMultimix", u, arguments),
                      n.goMix(f, u))
            );
        },
        getOperation: function (n) {
            var u = this,
                f = n.sort,
                e = n.filter,
                o = n.changeLayout,
                s = n.remove,
                h = n.insert,
                r = new t.Operation();
            return ((r = u.callFilters(
                "operationUnmappedGetOperation",
                r,
                arguments
            )),
            (r.id = i.randomHex()),
            (r.command = n),
            (r.startState = u.state),
            (r.triggerElement = u.lastClicked),
            u.isBusy)
                ? (u.config.debug.showWarnings &&
                      console.warn(
                          t.messages.warningGetOperationInstanceBusy()
                      ),
                  null)
                : (h && u.insertTargets(h, r),
                  s && (r.toRemove = s.targets),
                  (r.startSort = r.newSort = r.startState.activeSort),
                  (r.startOrder = r.newOrder = u.targets),
                  f &&
                      ((r.startSort = r.startState.activeSort),
                      (r.newSort = f),
                      (r.willSort = u.willSort(f, r.startState.activeSort)),
                      r.willSort && u.sortOperation(r)),
                  (r.startFilter = r.startState.activeFilter),
                  (r.newFilter = e
                      ? e
                      : i.extend(new t.CommandFilter(), r.startFilter)),
                  r.newFilter.selector === "all"
                      ? (r.newFilter.selector = u.config.selectors.target)
                      : r.newFilter.selector === "none" &&
                        (r.newFilter.selector = ""),
                  u.filterOperation(r),
                  (r.startContainerClassName =
                      r.startState.activeContainerClassName),
                  o
                      ? ((r.newContainerClassName = o.containerClassName),
                        r.newContainerClassName !== r.startContainerClassName &&
                            (r.willChangeLayout = !0))
                      : (r.newContainerClassName = r.startContainerClassName),
                  u.config.animation.enable &&
                      (u.getStartMixData(r),
                      u.setInter(r),
                      (r.docState = i.getDocumentState(u.dom.document)),
                      u.getInterMixData(r),
                      u.setFinal(r),
                      u.getFinalMixData(r),
                      u.parseEffects(),
                      (r.hasEffect = u.hasEffect()),
                      u.getTweenData(r)),
                  r.willSort && (u.targets = r.newOrder),
                  (r.newState = u.buildState(r)),
                  u.callFilters("operationMappedGetOperation", r, arguments));
        },
        tween: function (n, t) {
            var i = null,
                u = null,
                f = -1,
                r = -1;
            for (
                t = Math.min(t, 1), t = Math.max(t, 0), r = 0;
                (i = n.show[r]);
                r++
            )
                (u = n.showPosData[r]), i.applyTween(u, t);
            for (r = 0; (i = n.hide[r]); r++)
                i.isShown && i.hide(),
                    (f = n.toHide.indexOf(i)) > -1 &&
                        ((u = n.toHidePosData[f]),
                        i.isShown || i.show(),
                        i.applyTween(u, t));
        },
        insert: function () {
            var t = this,
                n = t.parseInsertArgs(arguments);
            return t.multimix(
                {
                    insert: n.command,
                },
                n.animate,
                n.callback
            );
        },
        insertBefore: function () {
            var t = this,
                n = t.parseInsertArgs(arguments);
            return t.insert(
                n.command.collection,
                "before",
                n.command.sibling,
                n.animate,
                n.callback
            );
        },
        insertAfter: function () {
            var t = this,
                n = t.parseInsertArgs(arguments);
            return t.insert(
                n.command.collection,
                "after",
                n.command.sibling,
                n.animate,
                n.callback
            );
        },
        prepend: function () {
            var t = this,
                n = t.parseInsertArgs(arguments);
            return t.insert(0, n.command.collection, n.animate, n.callback);
        },
        append: function () {
            var n = this,
                t = n.parseInsertArgs(arguments);
            return n.insert(
                n.state.totalTargets,
                t.command.collection,
                t.animate,
                t.callback
            );
        },
        remove: function () {
            var t = this,
                n = t.parseRemoveArgs(arguments);
            return t.multimix(
                {
                    remove: n.command,
                },
                n.animate,
                n.callback
            );
        },
        getConfig: function (n) {
            var t = this,
                r = null;
            return (
                (r = n ? i.getProperty(t.config, n) : t.config),
                t.callFilters("valueGetConfig", r, arguments)
            );
        },
        configure: function (n) {
            var t = this;
            t.callActions("beforeConfigure", arguments);
            i.extend(t.config, n, !0, !0);
            t.callActions("afterConfigure", arguments);
        },
        getState: function () {
            var r = this,
                n = null;
            return (
                (n = new t.State()),
                i.extend(n, r.state),
                i.freeze(n),
                r.callFilters("stateGetState", n, arguments)
            );
        },
        forceRefresh: function () {
            var n = this;
            n.indexTargets();
        },
        forceRender: function () {
            var t = this,
                n = null,
                i = null;
            for (var r in t.cache)
                (n = t.cache[r]),
                    (i = n.render(n.data)),
                    i !== n.dom.el &&
                        (n.isInDom &&
                            (n.unbindEvents(),
                            t.dom.parent.replaceChild(i, n.dom.el)),
                        n.isShown || (i.style.display = "none"),
                        (n.dom.el = i),
                        n.isInDom && n.bindEvents());
            t.state = t.buildState(t.lastOperation);
        },
        destroy: function (n) {
            var i = this,
                f = null,
                u = null,
                r = 0;
            for (
                i.callActions("beforeDestroy", arguments), r = 0;
                (f = i.controls[r]);
                r++
            )
                f.removeBinding(i);
            for (r = 0; (u = i.targets[r]); r++)
                n && u.show(), u.unbindEvents();
            i.dom.container.id.match(/^MixItUp/) &&
                i.dom.container.removeAttribute("id");
            delete t.instances[i.id];
            i.callActions("afterDestroy", arguments);
        },
    });
    t.IMoveData = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.posIn = null;
        this.posOut = null;
        this.operation = null;
        this.callback = null;
        this.statusChange = "";
        this.duration = -1;
        this.staggerIndex = -1;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.IMoveData);
    t.IMoveData.prototype = Object.create(t.Base.prototype);
    t.IMoveData.prototype.constructor = t.IMoveData;
    t.TargetDom = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.el = null;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.TargetDom);
    t.TargetDom.prototype = Object.create(t.Base.prototype);
    t.TargetDom.prototype.constructor = t.TargetDom;
    t.Target = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.id = "";
        this.sortString = "";
        this.mixer = null;
        this.callback = null;
        this.isShown = !1;
        this.isBound = !1;
        this.isExcluded = !1;
        this.isInDom = !1;
        this.handler = null;
        this.operation = null;
        this.data = null;
        this.dom = new t.TargetDom();
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.Target);
    t.Target.prototype = Object.create(t.Base.prototype);
    i.extend(t.Target.prototype, {
        constructor: t.Target,
        init: function (n, i, r) {
            var u = this,
                f = "";
            if (
                (u.callActions("beforeInit", arguments),
                (u.mixer = i),
                n || (n = u.render(r)),
                u.cacheDom(n),
                u.bindEvents(),
                u.dom.el.style.display !== "none" && (u.isShown = !0),
                r && i.config.data.uidKey)
            ) {
                if (
                    typeof (f = r[i.config.data.uidKey]) == "undefined" ||
                    f.toString().length < 1
                )
                    throw new TypeError(
                        t.messages.errorDatasetInvalidUidKey({
                            uidKey: i.config.data.uidKey,
                        })
                    );
                u.id = f;
                u.data = r;
                i.cache[f] = u;
            }
            u.callActions("afterInit", arguments);
        },
        render: function (n) {
            var u = this,
                f = null,
                e = null,
                o = null,
                r = "";
            if (
                (u.callActions("beforeRender", arguments),
                (f = u.callFilters(
                    "renderRender",
                    u.mixer.config.render.target,
                    arguments
                )),
                typeof f != "function")
            )
                throw new TypeError(t.messages.errorDatasetRendererNotSet());
            return (
                (r = f(n)),
                r && typeof r == "object" && i.isElement(r)
                    ? (e = r)
                    : typeof r == "string" &&
                      ((o = document.createElement("div")),
                      (o.innerHTML = r),
                      (e = o.firstElementChild)),
                u.callFilters("elRender", e, arguments)
            );
        },
        cacheDom: function (n) {
            var t = this;
            t.callActions("beforeCacheDom", arguments);
            t.dom.el = n;
            t.callActions("afterCacheDom", arguments);
        },
        getSortString: function (n) {
            var i = this,
                t = i.dom.el.getAttribute("data-" + n) || "";
            i.callActions("beforeGetSortString", arguments);
            t = isNaN(t * 1) ? t.toLowerCase() : t * 1;
            i.sortString = t;
            i.callActions("afterGetSortString", arguments);
        },
        show: function () {
            var n = this;
            n.callActions("beforeShow", arguments);
            n.isShown || ((n.dom.el.style.display = ""), (n.isShown = !0));
            n.callActions("afterShow", arguments);
        },
        hide: function () {
            var n = this;
            n.callActions("beforeHide", arguments);
            n.isShown && ((n.dom.el.style.display = "none"), (n.isShown = !1));
            n.callActions("afterHide", arguments);
        },
        move: function (n) {
            var t = this;
            t.callActions("beforeMove", arguments);
            t.isExcluded || t.mixer.targetsMoved++;
            t.applyStylesIn(n);
            requestAnimationFrame(function () {
                t.applyStylesOut(n);
            });
            t.callActions("afterMove", arguments);
        },
        applyTween: function (n, i) {
            var e = this,
                r = "",
                f = null,
                o = n.posIn,
                s = [],
                u = new t.StyleData(),
                h = -1;
            for (
                e.callActions("beforeApplyTween", arguments),
                    u.x = o.x,
                    u.y = o.y,
                    i === 0 ? e.hide() : e.isShown || e.show(),
                    h = 0;
                (r = t.features.TWEENABLE[h]);
                h++
            )
                if (((f = n.tweenData[r]), r === "x")) {
                    if (!f) continue;
                    u.x = o.x + f * i;
                } else if (r === "y") {
                    if (!f) continue;
                    u.y = o.y + f * i;
                } else if (f instanceof t.TransformData) {
                    if (!f.value) continue;
                    u[r].value = o[r].value + f.value * i;
                    u[r].unit = f.unit;
                    s.push(r + "(" + u[r].value + f.unit + ")");
                } else {
                    if (!f) continue;
                    u[r] = o[r] + f * i;
                    e.dom.el.style[r] = u[r];
                }
            (u.x || u.y) &&
                s.unshift("translate(" + u.x + "px, " + u.y + "px)");
            s.length &&
                (e.dom.el.style[t.features.transformProp] = s.join(" "));
            e.callActions("afterApplyTween", arguments);
        },
        applyStylesIn: function (n) {
            var i = this,
                r = n.posIn,
                f = i.mixer.effectsIn.opacity !== 1,
                u = [];
            i.callActions("beforeApplyStylesIn", arguments);
            u.push("translate(" + r.x + "px, " + r.y + "px)");
            i.mixer.config.animation.animateResizeTargets &&
                (n.statusChange !== "show" &&
                    ((i.dom.el.style.width = r.width + "px"),
                    (i.dom.el.style.height = r.height + "px")),
                (i.dom.el.style.marginRight = r.marginRight + "px"),
                (i.dom.el.style.marginBottom = r.marginBottom + "px"));
            f && (i.dom.el.style.opacity = r.opacity);
            n.statusChange === "show" && (u = u.concat(i.mixer.transformIn));
            i.dom.el.style[t.features.transformProp] = u.join(" ");
            i.callActions("afterApplyStylesIn", arguments);
        },
        applyStylesOut: function (n) {
            var i = this,
                r = [],
                u = [],
                f = i.mixer.config.animation.animateResizeTargets,
                e = typeof i.mixer.effectsIn.opacity != "undefined";
            if (
                (i.callActions("beforeApplyStylesOut", arguments),
                r.push(
                    i.writeTransitionRule(
                        t.features.transformRule,
                        n.staggerIndex
                    )
                ),
                n.statusChange !== "none" &&
                    r.push(
                        i.writeTransitionRule(
                            "opacity",
                            n.staggerIndex,
                            n.duration
                        )
                    ),
                f &&
                    (r.push(
                        i.writeTransitionRule(
                            "width",
                            n.staggerIndex,
                            n.duration
                        )
                    ),
                    r.push(
                        i.writeTransitionRule(
                            "height",
                            n.staggerIndex,
                            n.duration
                        )
                    ),
                    r.push(
                        i.writeTransitionRule(
                            "margin",
                            n.staggerIndex,
                            n.duration
                        )
                    )),
                !n.callback)
            ) {
                i.mixer.targetsImmovable++;
                i.mixer.targetsMoved === i.mixer.targetsImmovable &&
                    i.mixer.cleanUp(n.operation);
                return;
            }
            i.operation = n.operation;
            i.callback = n.callback;
            i.isExcluded || i.mixer.targetsBound++;
            i.isBound = !0;
            i.applyTransition(r);
            f &&
                n.posOut.width > 0 &&
                n.posOut.height > 0 &&
                ((i.dom.el.style.width = n.posOut.width + "px"),
                (i.dom.el.style.height = n.posOut.height + "px"),
                (i.dom.el.style.marginRight = n.posOut.marginRight + "px"),
                (i.dom.el.style.marginBottom = n.posOut.marginBottom + "px"));
            i.mixer.config.animation.nudge ||
                n.statusChange !== "hide" ||
                u.push("translate(" + n.posOut.x + "px, " + n.posOut.y + "px)");
            switch (n.statusChange) {
                case "hide":
                    e && (i.dom.el.style.opacity = i.mixer.effectsOut.opacity);
                    u = u.concat(i.mixer.transformOut);
                    break;
                case "show":
                    e && (i.dom.el.style.opacity = 1);
            }
            (i.mixer.config.animation.nudge ||
                (!i.mixer.config.animation.nudge &&
                    n.statusChange !== "hide")) &&
                u.push("translate(" + n.posOut.x + "px, " + n.posOut.y + "px)");
            i.dom.el.style[t.features.transformProp] = u.join(" ");
            i.callActions("afterApplyStylesOut", arguments);
        },
        writeTransitionRule: function (n, t, i) {
            var r = this,
                f = r.getDelay(t),
                u = "";
            return (
                (u =
                    n +
                    " " +
                    (i > 0 ? i : r.mixer.config.animation.duration) +
                    "ms " +
                    f +
                    "ms " +
                    (n === "opacity"
                        ? "linear"
                        : r.mixer.config.animation.easing)),
                r.callFilters("ruleWriteTransitionRule", u, arguments)
            );
        },
        getDelay: function (n) {
            var t = this,
                i = -1;
            return (
                typeof t.mixer.config.animation.staggerSequence == "function" &&
                    (n = t.mixer.config.animation.staggerSequence.call(
                        t,
                        n,
                        t.state
                    )),
                (i = !t.mixer.staggerDuration
                    ? 0
                    : n * t.mixer.staggerDuration),
                t.callFilters("delayGetDelay", i, arguments)
            );
        },
        applyTransition: function (n) {
            var i = this,
                r = n.join(", ");
            i.callActions("beforeApplyTransition", arguments);
            i.dom.el.style[t.features.transitionProp] = r;
            i.callActions("afterApplyTransition", arguments);
        },
        handleTransitionEnd: function (n) {
            var t = this,
                i = n.propertyName,
                r = t.mixer.config.animation.animateResizeTargets;
            t.callActions("beforeHandleTransitionEnd", arguments);
            t.isBound &&
                n.target.matches(t.mixer.config.selectors.target) &&
                (i.indexOf("transform") > -1 ||
                    i.indexOf("opacity") > -1 ||
                    (r && i.indexOf("height") > -1) ||
                    (r && i.indexOf("width") > -1) ||
                    (r && i.indexOf("margin") > -1)) &&
                (t.callback.call(t, t.operation),
                (t.isBound = !1),
                (t.callback = null),
                (t.operation = null));
            t.callActions("afterHandleTransitionEnd", arguments);
        },
        eventBus: function (n) {
            var t = this;
            t.callActions("beforeEventBus", arguments);
            switch (n.type) {
                case "webkitTransitionEnd":
                case "transitionend":
                    t.handleTransitionEnd(n);
            }
            t.callActions("afterEventBus", arguments);
        },
        unbindEvents: function () {
            var n = this;
            n.callActions("beforeUnbindEvents", arguments);
            i.off(n.dom.el, "webkitTransitionEnd", n.handler);
            i.off(n.dom.el, "transitionend", n.handler);
            n.callActions("afterUnbindEvents", arguments);
        },
        bindEvents: function () {
            var n = this,
                r = "";
            n.callActions("beforeBindEvents", arguments);
            r =
                t.features.transitionPrefix === "webkit"
                    ? "webkitTransitionEnd"
                    : "transitionend";
            n.handler = function (t) {
                return n.eventBus(t);
            };
            i.on(n.dom.el, r, n.handler);
            n.callActions("afterBindEvents", arguments);
        },
        getPosData: function (i) {
            var u = this,
                e = {},
                f = null,
                r = new t.StyleData();
            return (
                u.callActions("beforeGetPosData", arguments),
                (r.x = u.dom.el.offsetLeft),
                (r.y = u.dom.el.offsetTop),
                (u.mixer.config.animation.animateResizeTargets || i) &&
                    ((f = u.dom.el.getBoundingClientRect()),
                    (r.top = f.top),
                    (r.right = f.right),
                    (r.bottom = f.bottom),
                    (r.left = f.left),
                    (r.width = f.width),
                    (r.height = f.height)),
                u.mixer.config.animation.animateResizeTargets &&
                    ((e = n.getComputedStyle(u.dom.el)),
                    (r.marginBottom = parseFloat(e.marginBottom)),
                    (r.marginRight = parseFloat(e.marginRight))),
                u.callFilters("posDataGetPosData", r, arguments)
            );
        },
        cleanUp: function () {
            var n = this;
            n.callActions("beforeCleanUp", arguments);
            n.dom.el.style[t.features.transformProp] = "";
            n.dom.el.style[t.features.transitionProp] = "";
            n.dom.el.style.opacity = "";
            n.mixer.config.animation.animateResizeTargets &&
                ((n.dom.el.style.width = ""),
                (n.dom.el.style.height = ""),
                (n.dom.el.style.marginRight = ""),
                (n.dom.el.style.marginBottom = ""));
            n.callActions("afterCleanUp", arguments);
        },
    });
    t.Collection = function (n) {
        var r = null,
            t = -1;
        for (this.callActions("beforeConstruct"), t = 0; (r = n[t]); t++)
            this[t] = r;
        this.length = n.length;
        this.callActions("afterConstruct");
        i.freeze(this);
    };
    t.BaseStatic.call(t.Collection);
    t.Collection.prototype = Object.create(t.Base.prototype);
    i.extend(t.Collection.prototype, {
        constructor: t.Collection,
        mixitup: function (n) {
            var f = this,
                r = null,
                e = Array.prototype.slice.call(arguments),
                o = [],
                u = -1;
            for (
                this.callActions("beforeMixitup"), e.shift(), u = 0;
                (r = f[u]);
                u++
            )
                o.push(r[n].apply(r, e));
            return f.callFilters(
                "promiseMixitup",
                i.all(o, t.libraries),
                arguments
            );
        },
    });
    t.Operation = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.id = "";
        this.args = [];
        this.command = null;
        this.showPosData = [];
        this.toHidePosData = [];
        this.startState = null;
        this.newState = null;
        this.docState = null;
        this.willSort = !1;
        this.willChangeLayout = !1;
        this.hasEffect = !1;
        this.hasFailed = !1;
        this.triggerElement = null;
        this.show = [];
        this.hide = [];
        this.matching = [];
        this.toShow = [];
        this.toHide = [];
        this.toMove = [];
        this.toRemove = [];
        this.startOrder = [];
        this.newOrder = [];
        this.startSort = null;
        this.newSort = null;
        this.startFilter = null;
        this.newFilter = null;
        this.startDataset = null;
        this.newDataset = null;
        this.viewportDeltaX = 0;
        this.viewportDeltaY = 0;
        this.startX = 0;
        this.startY = 0;
        this.startHeight = 0;
        this.startWidth = 0;
        this.newX = 0;
        this.newY = 0;
        this.newHeight = 0;
        this.newWidth = 0;
        this.startContainerClassName = "";
        this.startDisplay = "";
        this.newContainerClassName = "";
        this.newDisplay = "";
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.Operation);
    t.Operation.prototype = Object.create(t.Base.prototype);
    t.Operation.prototype.constructor = t.Operation;
    t.State = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.id = "";
        this.activeFilter = null;
        this.activeSort = null;
        this.activeContainerClassName = "";
        this.container = null;
        this.targets = [];
        this.hide = [];
        this.show = [];
        this.matching = [];
        this.totalTargets = -1;
        this.totalShow = -1;
        this.totalHide = -1;
        this.totalMatching = -1;
        this.hasFailed = !1;
        this.triggerElement = null;
        this.activeDataset = null;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.State);
    t.State.prototype = Object.create(t.Base.prototype);
    t.State.prototype.constructor = t.State;
    t.UserInstruction = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.command = {};
        this.animate = !1;
        this.callback = null;
        this.callActions("afterConstruct");
        i.seal(this);
    };
    t.BaseStatic.call(t.UserInstruction);
    t.UserInstruction.prototype = Object.create(t.Base.prototype);
    t.UserInstruction.prototype.constructor = t.UserInstruction;
    t.Messages = function () {
        t.Base.call(this);
        this.callActions("beforeConstruct");
        this.ERROR_FACTORY_INVALID_CONTAINER =
            "[MixItUp] An invalid selector or element reference was passed to the mixitup factory function";
        this.ERROR_FACTORY_CONTAINER_NOT_FOUND =
            "[MixItUp] The provided selector yielded no container element";
        this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS =
            "[MixItUp] Invalid value for `animation.effects`";
        this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE =
            "[MixItUp] Invalid value for `controls.scope`";
        this.ERROR_CONFIG_INVALID_PROPERTY =
            '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}';
        this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION =
            '. Did you mean "${probableMatch}"?';
        this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET =
            "[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`";
        this.ERROR_DATASET_INVALID_UID_KEY =
            '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items';
        this.ERROR_DATASET_DUPLICATE_UID =
            '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.';
        this.ERROR_INSERT_INVALID_ARGUMENTS =
            "[MixItUp] Please provider either an index or a sibling and position to insert, not both";
        this.ERROR_INSERT_PREEXISTING_ELEMENT =
            "[MixItUp] An element to be inserted already exists in the container";
        this.ERROR_FILTER_INVALID_ARGUMENTS =
            "[MixItUp] Please provide either a selector or collection `.filter()`, not both";
        this.ERROR_DATASET_NOT_SET =
            "[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`";
        this.ERROR_DATASET_PRERENDERED_MISMATCH =
            "[MixItUp] `load.dataset` does not match pre-rendered targets";
        this.ERROR_DATASET_RENDERER_NOT_SET =
            "[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`";
        this.ERROR_SORT_NON_EXISTENT_ELEMENT =
            "[MixItUp] An element to be sorted does not already exist in the container";
        this.WARNING_FACTORY_PREEXISTING_INSTANCE =
            "[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference.";
        this.WARNING_INSERT_NO_ELEMENTS =
            "[MixItUp] WARNING: No valid elements were passed to `.insert()`";
        this.WARNING_REMOVE_NO_ELEMENTS =
            "[MixItUp] WARNING: No valid elements were passed to `.remove()`";
        this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL =
            "[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled.";
        this.WARNING_GET_OPERATION_INSTANCE_BUSY =
            "[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.";
        this.WARNING_NO_PROMISE_IMPLEMENTATION =
            "[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill.";
        this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES =
            '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output';
        this.callActions("afterConstruct");
        this.compileTemplates();
        i.seal(this);
    };
    t.BaseStatic.call(t.Messages);
    t.Messages.prototype = Object.create(t.Base.prototype);
    t.Messages.prototype.constructor = t.Messages;
    t.Messages.prototype.compileTemplates = function () {
        var n = "",
            t = "";
        for (n in this)
            typeof (t = this[n]) == "string" &&
                (this[i.camelCase(n)] = i.template(t));
    };
    t.messages = new t.Messages();
    t.Facade = function (n) {
        t.Base.call(this);
        this.callActions("beforeConstruct", arguments);
        this.configure = n.configure.bind(n);
        this.show = n.show.bind(n);
        this.hide = n.hide.bind(n);
        this.filter = n.filter.bind(n);
        this.toggleOn = n.toggleOn.bind(n);
        this.toggleOff = n.toggleOff.bind(n);
        this.sort = n.sort.bind(n);
        this.changeLayout = n.changeLayout.bind(n);
        this.multimix = n.multimix.bind(n);
        this.dataset = n.dataset.bind(n);
        this.tween = n.tween.bind(n);
        this.insert = n.insert.bind(n);
        this.insertBefore = n.insertBefore.bind(n);
        this.insertAfter = n.insertAfter.bind(n);
        this.prepend = n.prepend.bind(n);
        this.append = n.append.bind(n);
        this.remove = n.remove.bind(n);
        this.destroy = n.destroy.bind(n);
        this.forceRefresh = n.forceRefresh.bind(n);
        this.forceRender = n.forceRender.bind(n);
        this.isMixing = n.isMixing.bind(n);
        this.getOperation = n.getOperation.bind(n);
        this.getConfig = n.getConfig.bind(n);
        this.getState = n.getState.bind(n);
        this.callActions("afterConstruct", arguments);
        i.freeze(this);
        i.seal(this);
    };
    t.BaseStatic.call(t.Facade);
    t.Facade.prototype = Object.create(t.Base.prototype);
    t.Facade.prototype.constructor = t.Facade;
    typeof exports == "object" && typeof module == "object"
        ? (module.exports = t)
        : typeof define == "function" && define.amd
        ? define(function () {
              return t;
          })
        : (typeof n.mixitup == "undefined" || typeof n.mixitup != "function") &&
          (n.mixitup = t);
    t.BaseStatic.call(t.constructor);
    t.NAME = "mixitup";
    t.CORE_VERSION = "3.3.1";
})(window);
$(() => {
    const i = document.querySelector("#progressive_jackpot");
    if (i && i.dataset.progressiveJackpotUrl) {
        const t = {
                refresh: 4e3,
                update: 500,
            },
            n = {
                current: null,
                gap: 0.05,
            },
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
    const t = document.querySelector("#slots_providers");
    if (t) {
        const n = t.querySelector("main"),
            u = t.querySelector(".left_trigger"),
            f = t.querySelector(".right_trigger"),
            i = n.querySelector(".slide-item");
        u.onclick = () => (n.scrollLeft -= i.clientWidth);
        f.onclick = () => (n.scrollLeft += i.clientWidth);
        const r = n.querySelector('.slide-item[data-active="true"]');
        r && r.scrollIntoView(!1);
    }
    const n = document.querySelector("#filter_categories"),
        r = document.querySelector("#filter_input"),
        i = document.querySelector("#game_list");
    window.initializeSlotGames = (t) => {
        $.ajax({
            type: "GET",
            url: `/desktop/slots/games/${t.provider}`,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: (u) => {
                const f = 84,
                    e = 89,
                    s = new Set(),
                    c = document.createDocumentFragment();
                u.forEach((n) => {
                    n.categories.forEach((n) => s.add(n.name));
                    const o = document.createElement("div");
                    o.className = "link-container";
                    const u = document.createElement("a");
                    if (
                        ((u.className = "play-now"),
                        (u.dataset.game = n.name),
                        (u.href = n.link),
                        (u.innerText = t.translations.playNow),
                        o.appendChild(u),
                        t.onDemoLinkClicked)
                    ) {
                        const i = document.createElement("a");
                        i.className = "free-play";
                        i.innerText = t.translations.demo;
                        i.onclick = () => t.onDemoLinkClicked(n.gameCode);
                        o.appendChild(i);
                    }
                    const h = document.createElement("img");
                    h.src = `${t.directoryPath}${t.provider}/${n.gameImage}`;
                    h.alt = n.name;
                    const r = document.createElement("div");
                    if (
                        ((r.className = "wrapper-container"),
                        r.appendChild(h),
                        r.appendChild(o),
                        n.rtpChanged !== null &&
                            isFinite(n.rtpChanged.from) &&
                            isFinite(n.rtpChanged.to))
                    ) {
                        const o = document.createElement("span");
                        o.className = "rtp-title";
                        o.innerText = "RTP";
                        const t = document.createElement("div"),
                            s = n.rtpChanged.from.toFixed(2),
                            c = n.rtpChanged.to.toFixed(2);
                        t.className = "rtp-progress-bar";
                        t.dataset.rtpFrom = s;
                        t.dataset.rtpTo = c;
                        t.style.width = s + "%";
                        t.style.setProperty("--from-value", `${s}%`);
                        t.style.setProperty("--to-value", `${c}%`);
                        n.rtpChanged.from < f &&
                            t.style.setProperty("--from-color", "var(--low)");
                        n.rtpChanged.from >= f &&
                            n.rtpChanged.from <= e &&
                            t.style.setProperty(
                                "--from-color",
                                "var(--medium)"
                            );
                        n.rtpChanged.from > e &&
                            t.style.setProperty("--from-color", "var(--high)");
                        n.rtpChanged.to < f &&
                            t.style.setProperty("--to-color", "var(--low)");
                        n.rtpChanged.to >= f &&
                            n.rtpChanged.to <= e &&
                            t.style.setProperty("--to-color", "var(--medium)");
                        n.rtpChanged.to > e &&
                            t.style.setProperty("--to-color", "var(--high)");
                        t.dataset.rtpFrom != "medium" &&
                        t.dataset.rtpTo != "medium"
                            ? t.style.setProperty(
                                  "--transition-color",
                                  "var(--medium)"
                              )
                            : t.style.setProperty(
                                  "--transition-color",
                                  "var(--from-color)"
                              );
                        const h = document.createElement("div");
                        h.className = "rtp-progress";
                        h.appendChild(t);
                        const u = document.createElement("span");
                        u.className = "rtp-percentage";
                        u.dataset.rtpFrom = Math.ceil(n.rtpChanged.from);
                        u.dataset.rtpTo = Math.ceil(n.rtpChanged.to);
                        const i = document.createElement("div");
                        i.className = "rtp-container";
                        i.appendChild(o);
                        i.appendChild(h);
                        i.appendChild(u);
                        r.appendChild(i);
                    } else if (n.rtpValue !== null && isFinite(n.rtpValue)) {
                        const u = document.createElement("span");
                        u.className = "rtp-title";
                        u.innerText = "RTP";
                        const t = document.createElement("div");
                        t.className = "rtp-progress-bar";
                        t.style.width = n.rtpValue.toFixed(2) + "%";
                        n.rtpValue < f && (t.dataset.rtp = "low");
                        n.rtpValue >= f &&
                            n.rtpValue <= e &&
                            (t.dataset.rtp = "medium");
                        n.rtpValue > e && (t.dataset.rtp = "high");
                        const o = document.createElement("div");
                        o.className = "rtp-progress";
                        o.appendChild(t);
                        const s = document.createElement("span");
                        s.className = "rtp-percentage";
                        s.innerHTML = Math.ceil(n.rtpValue) + "%";
                        const i = document.createElement("div");
                        i.className = "rtp-container";
                        i.appendChild(u);
                        i.appendChild(o);
                        i.appendChild(s);
                        r.appendChild(i);
                    }
                    const l = document.createElement("div");
                    l.className = "game-name";
                    l.innerText = n.name;
                    const i = document.createElement("div");
                    if (
                        ((i.className = "game-item"),
                        (i.dataset.game = n.name),
                        (i.dataset.match = !0),
                        (i._categories = n.categories.filter(
                            (n) => n.seqNo >= 0
                        )),
                        n.isFavourite !== undefined && n.isFavourite !== null)
                    ) {
                        const r = document.createElement("input");
                        r.type = "checkbox";
                        r.dataset.provider = t.provider;
                        r.value = n.gameCode;
                        r.id = n.gameCode;
                        r.className = "favourite-game-btn";
                        n.isFavourite && (r.checked = !0);
                        const u = document.createElement("label");
                        u.htmlFor = n.gameCode;
                        i.appendChild(r);
                        i.appendChild(u);
                    }
                    i.appendChild(r);
                    i.appendChild(l);
                    c.appendChild(i);
                });
                i.appendChild(c);
                const l = document.createDocumentFragment();
                s.forEach((t) => {
                    if (t === "DEFAULT") {
                        const i = n.querySelector('[data-category=""]');
                        i.dataset.category = t;
                        return;
                    }
                    const i = document.createElement("div");
                    i.className = "category-filter-link";
                    i.dataset.category = t;
                    i.innerText = t;
                    l.appendChild(i);
                });
                n.appendChild(l);
                const y = i.querySelectorAll(".game-item"),
                    o = {
                        name: null,
                        category: null,
                    },
                    p = window.mixitup(i, {
                        selectors: {
                            target: ".game-item",
                        },
                        controls: {
                            enable: !1,
                        },
                    }),
                    a = () => {
                        Array.prototype.slice.call(y).forEach((n) => {
                            const i = n.dataset.game.toLowerCase(),
                                t = n._categories.find(
                                    (n) => n.name === o.category
                                ),
                                r = !o.category || t !== undefined,
                                u = !o.name || i.indexOf(o.name) >= 0;
                            r && u
                                ? ((n.style.order = (t && t.seqNo) || 0),
                                  (n.dataset.match = !0))
                                : ((n.style.order = 0), (n.dataset.match = !1));
                        }),
                            p.filter('[data-match="true"]');
                    },
                    w = (n, t, i) => {
                        var r;
                        return function () {
                            var u = this,
                                f = arguments;
                            clearTimeout(r);
                            r = setTimeout(function () {
                                r = null;
                                i || n.apply(u, f);
                            }, t);
                            i && !r && n.apply(u, f);
                        };
                    };
                $(r).keyup(
                    w(function () {
                        o.name = r.value.toLowerCase();
                        a();
                    }, 250)
                );
                $(n).on("click", ".category-filter-link", function () {
                    const n = $(this);
                    n.siblings().removeClass("active");
                    n.addClass("active");
                    o.category = this.dataset.category;
                    a();
                });
                const v = new URLSearchParams(window.location.search).get(
                    "PromotionCategory"
                );
                if (v) {
                    const t = Array.from(s).find(
                        (n) => n.toLowerCase() === v.toLowerCase()
                    );
                    if (t) {
                        n.querySelector(`[data-category="${t}"]`).click();
                        return;
                    }
                }
                const h = n.querySelector(".active");
                h && h.dataset.category !== "" && h.click();
            },
        });
    };
});
