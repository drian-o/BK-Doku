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
/**
 * jquery-date-range-picker
 * @version v0.21.1
 * @link https://github.com/longbill/jquery-date-range-picker
 * @license MIT
 */
!(function (e) {
    "function" == typeof define && define.amd
        ? define(["jquery", "moment"], e)
        : "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e(require("jquery"), require("moment")))
        : e(jQuery, moment);
})(function (U, Q) {
    "use strict";
    (U.dateRangePickerLanguages = {
        default: {
            selected: "Selected:",
            day: "Day",
            days: "Days",
            apply: "Close",
            "week-1": "mo",
            "week-2": "tu",
            "week-3": "we",
            "week-4": "th",
            "week-5": "fr",
            "week-6": "sa",
            "week-7": "su",
            "week-number": "W",
            "month-name": [
                "january",
                "february",
                "march",
                "april",
                "may",
                "june",
                "july",
                "august",
                "september",
                "october",
                "november",
                "december",
            ],
            shortcuts: "Shortcuts",
            "custom-values": "Custom Values",
            past: "Past",
            following: "Following",
            previous: "Previous",
            "prev-week": "Week",
            "prev-month": "Month",
            "prev-year": "Year",
            next: "Next",
            "next-week": "Week",
            "next-month": "Month",
            "next-year": "Year",
            "less-than": "Date range should not be more than %d days",
            "more-than": "Date range should not be less than %d days",
            "default-more": "Please select a date range longer than %d days",
            "default-single": "Please select a date",
            "default-less": "Please select a date range less than %d days",
            "default-range":
                "Please select a date range between %d and %d days",
            "default-default": "Please select a date range",
            time: "Time",
            hour: "Hour",
            minute: "Minute",
        },
        id: {
            selected: "Terpilih:",
            day: "Hari",
            days: "Hari",
            apply: "Tutup",
            "week-1": "sen",
            "week-2": "sel",
            "week-3": "rab",
            "week-4": "kam",
            "week-5": "jum",
            "week-6": "sab",
            "week-7": "min",
            "week-number": "W",
            "month-name": [
                "januari",
                "februari",
                "maret",
                "april",
                "mei",
                "juni",
                "juli",
                "agustus",
                "september",
                "oktober",
                "november",
                "desember",
            ],
            shortcuts: "Pintas",
            "custom-values": "Nilai yang ditentukan",
            past: "Yang Lalu",
            following: "Mengikuti",
            previous: "Sebelumnya",
            "prev-week": "Minggu",
            "prev-month": "Bulan",
            "prev-year": "Tahun",
            next: "Selanjutnya",
            "next-week": "Minggu",
            "next-month": "Bulan",
            "next-year": "Tahun",
            "less-than": "Tanggal harus lebih dari %d hari",
            "more-than": "Tanggal harus kurang dari %d hari",
            "default-more": "Jarak tanggal harus lebih lama dari %d hari",
            "default-single": "Silakan pilih tanggal",
            "default-less":
                "Jarak rentang tanggal tidak boleh lebih lama dari %d hari",
            "default-range": "Rentang tanggal harus antara %d dan %d hari",
            "default-default": "Silakan pilih rentang tanggal",
            time: "Waktu",
            hour: "Jam",
            minute: "Menit",
        },
        az: {
            selected: "Seçildi:",
            day: " gün",
            days: " gün",
            apply: "tətbiq",
            "week-1": "1",
            "week-2": "2",
            "week-3": "3",
            "week-4": "4",
            "week-5": "5",
            "week-6": "6",
            "week-7": "7",
            "month-name": [
                "yanvar",
                "fevral",
                "mart",
                "aprel",
                "may",
                "iyun",
                "iyul",
                "avqust",
                "sentyabr",
                "oktyabr",
                "noyabr",
                "dekabr",
            ],
            shortcuts: "Qısayollar",
            past: "Keçmiş",
            following: "Növbəti",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "Öncəki həftə",
            "prev-month": "Öncəki ay",
            "prev-year": "Öncəki il",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "Növbəti həftə",
            "next-month": "Növbəti ay",
            "next-year": "Növbəti il",
            "less-than": "Tarix aralığı %d gündən çox olmamalıdır",
            "more-than": "Tarix aralığı %d gündən az olmamalıdır",
            "default-more": "%d gündən çox bir tarix seçin",
            "default-single": "Tarix seçin",
            "default-less": "%d gündən az bir tarix seçin",
            "default-range": "%d və %d gün aralığında tarixlər seçin",
            "default-default": "Tarix aralığı seçin",
        },
        bg: {
            selected: "Избрано:",
            day: "Ден",
            days: "Дни",
            apply: "Затвори",
            "week-1": "пн",
            "week-2": "вт",
            "week-3": "ср",
            "week-4": "чт",
            "week-5": "пт",
            "week-6": "сб",
            "week-7": "нд",
            "week-number": "С",
            "month-name": [
                "януари",
                "февруари",
                "март",
                "април",
                "май",
                "юни",
                "юли",
                "август",
                "септември",
                "октомври",
                "ноември",
                "декември",
            ],
            shortcuts: "Преки пътища",
            "custom-values": "Персонализирани стойности",
            past: "Минал",
            following: "Следващ",
            previous: "Предишен",
            "prev-week": "Седмица",
            "prev-month": "Месец",
            "prev-year": "Година",
            next: "Следващ",
            "next-week": "Седмица",
            "next-month": "Месец",
            "next-year": "Година",
            "less-than": "Периодът от време не трябва да е повече от %d дни",
            "more-than": "Периодът от време не трябва да е по-малко от %d дни",
            "default-more": "Моля изберете период по-дълъг от %d дни",
            "default-single": "Моля изберете дата",
            "default-less": "Моля изберете период по-къс от %d дни",
            "default-range": "Моля изберете период между %d и %d дни",
            "default-default": "Моля изберете период",
            time: "Време",
            hour: "Час",
            minute: "Минута",
        },
        cn: {
            selected: "已选择:",
            day: "天",
            days: "天",
            apply: "确定",
            "week-1": "一",
            "week-2": "二",
            "week-3": "三",
            "week-4": "四",
            "week-5": "五",
            "week-6": "六",
            "week-7": "日",
            "week-number": "周",
            "month-name": [
                "一月",
                "二月",
                "三月",
                "四月",
                "五月",
                "六月",
                "七月",
                "八月",
                "九月",
                "十月",
                "十一月",
                "十二月",
            ],
            shortcuts: "快捷选择",
            past: "过去",
            following: "将来",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "上周",
            "prev-month": "上个月",
            "prev-year": "去年",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "下周",
            "next-month": "下个月",
            "next-year": "明年",
            "less-than": "所选日期范围不能大于%d天",
            "more-than": "所选日期范围不能小于%d天",
            "default-more": "请选择大于%d天的日期范围",
            "default-less": "请选择小于%d天的日期范围",
            "default-range": "请选择%d天到%d天的日期范围",
            "default-single": "请选择一个日期",
            "default-default": "请选择一个日期范围",
            time: "时间",
            hour: "小时",
            minute: "分钟",
        },
        cz: {
            selected: "Vybráno:",
            day: "Den",
            days: "Dny",
            apply: "Zavřít",
            "week-1": "po",
            "week-2": "út",
            "week-3": "st",
            "week-4": "čt",
            "week-5": "pá",
            "week-6": "so",
            "week-7": "ne",
            "month-name": [
                "leden",
                "únor",
                "březen",
                "duben",
                "květen",
                "červen",
                "červenec",
                "srpen",
                "září",
                "říjen",
                "listopad",
                "prosinec",
            ],
            shortcuts: "Zkratky",
            past: "po",
            following: "následující",
            previous: "předchozí",
            "prev-week": "týden",
            "prev-month": "měsíc",
            "prev-year": "rok",
            next: "další",
            "next-week": "týden",
            "next-month": "měsíc",
            "next-year": "rok",
            "less-than": "Rozsah data by neměl být větší než %d dnů",
            "more-than": "Rozsah data by neměl být menší než %d dnů",
            "default-more": "Prosím zvolte rozsah data větší než %d dnů",
            "default-single": "Prosím zvolte datum",
            "default-less": "Prosím zvolte rozsah data menší než %d dnů",
            "default-range": "Prosím zvolte rozsah data mezi %d a %d dny",
            "default-default": "Prosím zvolte rozsah data",
        },
        de: {
            selected: "Auswahl:",
            day: "Tag",
            days: "Tage",
            apply: "Schließen",
            "week-1": "mo",
            "week-2": "di",
            "week-3": "mi",
            "week-4": "do",
            "week-5": "fr",
            "week-6": "sa",
            "week-7": "so",
            "month-name": [
                "januar",
                "februar",
                "märz",
                "april",
                "mai",
                "juni",
                "juli",
                "august",
                "september",
                "oktober",
                "november",
                "dezember",
            ],
            shortcuts: "Schnellwahl",
            past: "Vorherige",
            following: "Folgende",
            previous: "Vorherige",
            "prev-week": "Woche",
            "prev-month": "Monat",
            "prev-year": "Jahr",
            next: "Nächste",
            "next-week": "Woche",
            "next-month": "Monat",
            "next-year": "Jahr",
            "less-than": "Datumsbereich darf nicht größer sein als %d Tage",
            "more-than": "Datumsbereich darf nicht kleiner sein als %d Tage",
            "default-more": "Bitte mindestens %d Tage auswählen",
            "default-single": "Bitte ein Datum auswählen",
            "default-less": "Bitte weniger als %d Tage auswählen",
            "default-range":
                "Bitte einen Datumsbereich zwischen %d und %d Tagen auswählen",
            "default-default": "Bitte ein Start- und Enddatum auswählen",
            Time: "Zeit",
            hour: "Stunde",
            minute: "Minute",
        },
        es: {
            selected: "Seleccionado:",
            day: "Día",
            days: "Días",
            apply: "Cerrar",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "mi",
            "week-4": "ju",
            "week-5": "vi",
            "week-6": "sa",
            "week-7": "do",
            "month-name": [
                "enero",
                "febrero",
                "marzo",
                "abril",
                "mayo",
                "junio",
                "julio",
                "agosto",
                "septiembre",
                "octubre",
                "noviembre",
                "diciembre",
            ],
            shortcuts: "Accesos directos",
            past: "Pasado",
            following: "Siguiente",
            previous: "Anterior",
            "prev-week": "Semana",
            "prev-month": "Mes",
            "prev-year": "Año",
            next: "Siguiente",
            "next-week": "Semana",
            "next-month": "Mes",
            "next-year": "Año",
            "less-than": "El rango no debería ser mayor de %d días",
            "more-than": "El rango no debería ser menor de %d días",
            "default-more": "Por favor selecciona un rango mayor a %d días",
            "default-single": "Por favor selecciona un día",
            "default-less": "Por favor selecciona un rango menor a %d días",
            "default-range": "Por favor selecciona un rango entre %d y %d días",
            "default-default": "Por favor selecciona un rango de fechas.",
        },
        fr: {
            selected: "Sélection:",
            day: "Jour",
            days: "Jours",
            apply: "Fermer",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "me",
            "week-4": "je",
            "week-5": "ve",
            "week-6": "sa",
            "week-7": "di",
            "month-name": [
                "janvier",
                "février",
                "mars",
                "avril",
                "mai",
                "juin",
                "juillet",
                "août",
                "septembre",
                "octobre",
                "novembre",
                "décembre",
            ],
            shortcuts: "Raccourcis",
            past: "Passé",
            following: "Suivant",
            previous: "Précédent",
            "prev-week": "Semaine",
            "prev-month": "Mois",
            "prev-year": "Année",
            next: "Suivant",
            "next-week": "Semaine",
            "next-month": "Mois",
            "next-year": "Année",
            "less-than": "L'intervalle ne doit pas être supérieure à %d jours",
            "more-than": "L'intervalle ne doit pas être inférieure à %d jours",
            "default-more":
                "Merci de choisir une intervalle supérieure à %d jours",
            "default-single": "Merci de choisir une date",
            "default-less":
                "Merci de choisir une intervalle inférieure %d jours",
            "default-range":
                "Merci de choisir une intervalle comprise entre %d et %d jours",
            "default-default": "Merci de choisir une date",
        },
        hu: {
            selected: "Kiválasztva:",
            day: "Nap",
            days: "Nap",
            apply: "Ok",
            "week-1": "h",
            "week-2": "k",
            "week-3": "sz",
            "week-4": "cs",
            "week-5": "p",
            "week-6": "sz",
            "week-7": "v",
            "month-name": [
                "január",
                "február",
                "március",
                "április",
                "május",
                "június",
                "július",
                "augusztus",
                "szeptember",
                "október",
                "november",
                "december",
            ],
            shortcuts: "Gyorsválasztó",
            past: "Múlt",
            following: "Következő",
            previous: "Előző",
            "prev-week": "Hét",
            "prev-month": "Hónap",
            "prev-year": "Év",
            next: "Következő",
            "next-week": "Hét",
            "next-month": "Hónap",
            "next-year": "Év",
            "less-than": "A kiválasztás nem lehet több %d napnál",
            "more-than": "A kiválasztás nem lehet több %d napnál",
            "default-more": "Válassz ki egy időszakot ami hosszabb mint %d nap",
            "default-single": "Válassz egy napot",
            "default-less": "Válassz ki egy időszakot ami rövidebb mint %d nap",
            "default-range": "Válassz ki egy %d - %d nap hosszú időszakot",
            "default-default": "Válassz ki egy időszakot",
        },
        it: {
            selected: "Selezionati:",
            day: "Giorno",
            days: "Giorni",
            apply: "Chiudi",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "me",
            "week-4": "gi",
            "week-5": "ve",
            "week-6": "sa",
            "week-7": "do",
            "month-name": [
                "gennaio",
                "febbraio",
                "marzo",
                "aprile",
                "maggio",
                "giugno",
                "luglio",
                "agosto",
                "settembre",
                "ottobre",
                "novembre",
                "dicembre",
            ],
            shortcuts: "Scorciatoie",
            past: "Scorso",
            following: "Successivo",
            previous: "Precedente",
            "prev-week": "Settimana",
            "prev-month": "Mese",
            "prev-year": "Anno",
            next: "Prossimo",
            "next-week": "Settimana",
            "next-month": "Mese",
            "next-year": "Anno",
            "less-than": "L'intervallo non dev'essere maggiore di %d giorni",
            "more-than": "L'intervallo non dev'essere minore di %d giorni",
            "default-more": "Seleziona un intervallo maggiore di %d giorni",
            "default-single": "Seleziona una data",
            "default-less": "Seleziona un intervallo minore di %d giorni",
            "default-range":
                "Seleziona un intervallo compreso tra i %d e i %d giorni",
            "default-default": "Seleziona un intervallo di date",
        },
        ko: {
            selected: "기간:",
            day: "일",
            days: "일간",
            apply: "닫기",
            "week-1": "월",
            "week-2": "화",
            "week-3": "수",
            "week-4": "목",
            "week-5": "금",
            "week-6": "토",
            "week-7": "일",
            "week-number": "주",
            "month-name": [
                "1월",
                "2월",
                "3월",
                "4월",
                "5월",
                "6월",
                "7월",
                "8월",
                "9월",
                "10월",
                "11월",
                "12월",
            ],
            shortcuts: "단축키들",
            past: "지난(오늘기준)",
            following: "이후(오늘기준)",
            previous: "이전",
            "prev-week": "1주",
            "prev-month": "1달",
            "prev-year": "1년",
            next: "다음",
            "next-week": "1주",
            "next-month": "1달",
            "next-year": "1년",
            "less-than": "날짜 범위는 %d 일보다 많을 수 없습니다",
            "more-than": "날짜 범위는 %d 일보다 작을 수 없습니다",
            "default-more": "날짜 범위를 %d 일보다 길게 선택해 주세요",
            "default-single": "날짜를 선택해 주세요",
            "default-less": "%d 일보다 작은 날짜를 선택해 주세요",
            "default-range": "%d와 %d 일 사이의 날짜 범위를 선택해 주세요",
            "default-default": "날짜 범위를 선택해 주세요",
            time: "시각",
            hour: "시",
            minute: "분",
        },
        no: {
            selected: "Valgt:",
            day: "Dag",
            days: "Dager",
            apply: "Lukk",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "lø",
            "week-7": "sø",
            "month-name": [
                "januar",
                "februar",
                "mars",
                "april",
                "mai",
                "juni",
                "juli",
                "august",
                "september",
                "oktober",
                "november",
                "desember",
            ],
            shortcuts: "Snarveier",
            "custom-values": "Egendefinerte Verdier",
            past: "Over",
            following: "Følger",
            previous: "Forrige",
            "prev-week": "Uke",
            "prev-month": "Måned",
            "prev-year": "År",
            next: "Neste",
            "next-week": "Uke",
            "next-month": "Måned",
            "next-year": "År",
            "less-than": "Datoperioden skal ikkje være lengre enn %d dager",
            "more-than": "Datoperioden skal ikkje være kortere enn %d dager",
            "default-more":
                "Vennligst velg ein datoperiode lengre enn %d dager",
            "default-single": "Vennligst velg ein dato",
            "default-less":
                "Vennligst velg ein datoperiode mindre enn %d dager",
            "default-range":
                "Vennligst velg ein datoperiode mellom %d og %d dager",
            "default-default": "Vennligst velg ein datoperiode",
            time: "Tid",
            hour: "Time",
            minute: "Minutter",
        },
        nl: {
            selected: "Geselecteerd:",
            day: "Dag",
            days: "Dagen",
            apply: "Ok",
            "week-1": "ma",
            "week-2": "di",
            "week-3": "wo",
            "week-4": "do",
            "week-5": "vr",
            "week-6": "za",
            "week-7": "zo",
            "month-name": [
                "januari",
                "februari",
                "maart",
                "april",
                "mei",
                "juni",
                "juli",
                "augustus",
                "september",
                "oktober",
                "november",
                "december",
            ],
            shortcuts: "Snelkoppelingen",
            "custom-values": "Aangepaste waarden",
            past: "Verleden",
            following: "Komend",
            previous: "Vorige",
            "prev-week": "Week",
            "prev-month": "Maand",
            "prev-year": "Jaar",
            next: "Volgende",
            "next-week": "Week",
            "next-month": "Maand",
            "next-year": "Jaar",
            "less-than": "Interval moet langer dan %d dagen zijn",
            "more-than": "Interval mag niet minder dan %d dagen zijn",
            "default-more": "Selecteer een interval langer dan %dagen",
            "default-single": "Selecteer een datum",
            "default-less": "Selecteer een interval minder dan %d dagen",
            "default-range": "Selecteer een interval tussen %d en %d dagen",
            "default-default": "Selecteer een interval",
            time: "Tijd",
            hour: "Uur",
            minute: "Minuut",
        },
        ru: {
            selected: "Выбрано:",
            day: "День",
            days: "Дней",
            apply: "Применить",
            "week-1": "пн",
            "week-2": "вт",
            "week-3": "ср",
            "week-4": "чт",
            "week-5": "пт",
            "week-6": "сб",
            "week-7": "вс",
            "month-name": [
                "январь",
                "февраль",
                "март",
                "апрель",
                "май",
                "июнь",
                "июль",
                "август",
                "сентябрь",
                "октябрь",
                "ноябрь",
                "декабрь",
            ],
            shortcuts: "Быстрый выбор",
            "custom-values": "Пользовательские значения",
            past: "Прошедшие",
            following: "Следующие",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "Неделя",
            "prev-month": "Месяц",
            "prev-year": "Год",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "Неделя",
            "next-month": "Месяц",
            "next-year": "Год",
            "less-than": "Диапазон не может быть больше %d дней",
            "more-than": "Диапазон не может быть меньше %d дней",
            "default-more": "Пожалуйста выберите диапазон больше %d дней",
            "default-single": "Пожалуйста выберите дату",
            "default-less": "Пожалуйста выберите диапазон меньше %d дней",
            "default-range": "Пожалуйста выберите диапазон между %d и %d днями",
            "default-default": "Пожалуйста выберите диапазон",
            time: "Время",
            hour: "Часы",
            minute: "Минуты",
        },
        uk: {
            selected: "Вибрано:",
            day: "День",
            days: "Днів",
            apply: "Застосувати",
            "week-1": "пн",
            "week-2": "вт",
            "week-3": "ср",
            "week-4": "чт",
            "week-5": "пт",
            "week-6": "сб",
            "week-7": "нд",
            "month-name": [
                "січень",
                "лютий",
                "березень",
                "квітень",
                "травень",
                "червень",
                "липень",
                "серпень",
                "вересень",
                "жовтень",
                "листопад",
                "грудень",
            ],
            shortcuts: "Швидкий вибір",
            "custom-values": "Значення користувача",
            past: "Минулі",
            following: "Наступні",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "Тиждень",
            "prev-month": "Місяць",
            "prev-year": "Рік",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "Тиждень",
            "next-month": "Місяць",
            "next-year": "Рік",
            "less-than": "Діапазон не може бути більш ніж %d днів",
            "more-than": "Діапазон не може бути меньш ніж %d днів",
            "default-more": "Будь ласка виберіть діапазон більше %d днів",
            "default-single": "Будь ласка виберіть дату",
            "default-less": "Будь ласка виберіть діапазон менше %d днів",
            "default-range": "Будь ласка виберіть діапазон між %d та %d днями",
            "default-default": "Будь ласка виберіть діапазон",
            time: "Час",
            hour: "Години",
            minute: "Хвилини",
        },
        pl: {
            selected: "Wybrany:",
            day: "Dzień",
            days: "Dni",
            apply: "Zamknij",
            "week-1": "pon",
            "week-2": "wt",
            "week-3": "śr",
            "week-4": "czw",
            "week-5": "pt",
            "week-6": "so",
            "week-7": "nd",
            "month-name": [
                "styczeń",
                "luty",
                "marzec",
                "kwiecień",
                "maj",
                "czerwiec",
                "lipiec",
                "sierpień",
                "wrzesień",
                "październik",
                "listopad",
                "grudzień",
            ],
            shortcuts: "Skróty",
            "custom-values": "Niestandardowe wartości",
            past: "Przeszłe",
            following: "Następne",
            previous: "Poprzednie",
            "prev-week": "tydzień",
            "prev-month": "miesiąc",
            "prev-year": "rok",
            next: "Następny",
            "next-week": "tydzień",
            "next-month": "miesiąc",
            "next-year": "rok",
            "less-than": "Okres nie powinien być dłuższy niż %d dni",
            "more-than": "Okres nie powinien być krótszy niż  %d ni",
            "default-more": "Wybierz okres dłuższy niż %d dni",
            "default-single": "Wybierz datę",
            "default-less": "Wybierz okres krótszy niż %d dni",
            "default-range": "Wybierz okres trwający od %d do %d dni",
            "default-default": "Wybierz okres",
            time: "Czas",
            hour: "Godzina",
            minute: "Minuta",
        },
        se: {
            selected: "Vald:",
            day: "dag",
            days: "dagar",
            apply: "godkänn",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "lö",
            "week-7": "sö",
            "month-name": [
                "januari",
                "februari",
                "mars",
                "april",
                "maj",
                "juni",
                "juli",
                "augusti",
                "september",
                "oktober",
                "november",
                "december",
            ],
            shortcuts: "genvägar",
            "custom-values": "Anpassade värden",
            past: "över",
            following: "följande",
            previous: "förra",
            "prev-week": "vecka",
            "prev-month": "månad",
            "prev-year": "år",
            next: "nästa",
            "next-week": "vecka",
            "next-month": "måned",
            "next-year": "år",
            "less-than": "Datumintervall bör inte vara mindre än %d dagar",
            "more-than": "Datumintervall bör inte vara mer än %d dagar",
            "default-more": "Välj ett datumintervall längre än %d dagar",
            "default-single": "Välj ett datum",
            "default-less": "Välj ett datumintervall mindre än %d dagar",
            "default-range": "Välj ett datumintervall mellan %d och %d dagar",
            "default-default": "Välj ett datumintervall",
            time: "tid",
            hour: "timme",
            minute: "minut",
        },
        pt: {
            selected: "Selecionado:",
            day: "Dia",
            days: "Dias",
            apply: "Fechar",
            "week-1": "seg",
            "week-2": "ter",
            "week-3": "qua",
            "week-4": "qui",
            "week-5": "sex",
            "week-6": "sab",
            "week-7": "dom",
            "week-number": "N",
            "month-name": [
                "janeiro",
                "fevereiro",
                "março",
                "abril",
                "maio",
                "junho",
                "julho",
                "agosto",
                "setembro",
                "outubro",
                "novembro",
                "dezembro",
            ],
            shortcuts: "Atalhos",
            "custom-values": "Valores Personalizados",
            past: "Passado",
            following: "Seguinte",
            previous: "Anterior",
            "prev-week": "Semana",
            "prev-month": "Mês",
            "prev-year": "Ano",
            next: "Próximo",
            "next-week": "Próxima Semana",
            "next-month": "Próximo Mês",
            "next-year": "Próximo Ano",
            "less-than": "O período selecionado não deve ser maior que %d dias",
            "more-than": "O período selecionado não deve ser menor que %d dias",
            "default-more": "Selecione um período superior a %d dias",
            "default-single": "Selecione uma data",
            "default-less": "Selecione um período inferior a %d dias",
            "default-range": "Selecione um período de %d a %d dias",
            "default-default": "Selecione um período",
            time: "Tempo",
            hour: "Hora",
            minute: "Minuto",
        },
        tc: {
            selected: "已選擇:",
            day: "天",
            days: "天",
            apply: "確定",
            "week-1": "一",
            "week-2": "二",
            "week-3": "三",
            "week-4": "四",
            "week-5": "五",
            "week-6": "六",
            "week-7": "日",
            "week-number": "週",
            "month-name": [
                "一月",
                "二月",
                "三月",
                "四月",
                "五月",
                "六月",
                "七月",
                "八月",
                "九月",
                "十月",
                "十一月",
                "十二月",
            ],
            shortcuts: "快速選擇",
            past: "過去",
            following: "將來",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "上週",
            "prev-month": "上個月",
            "prev-year": "去年",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "下週",
            "next-month": "下個月",
            "next-year": "明年",
            "less-than": "所選日期範圍不能大於%d天",
            "more-than": "所選日期範圍不能小於%d天",
            "default-more": "請選擇大於%d天的日期範圍",
            "default-less": "請選擇少於%d天的日期範圍",
            "default-range": "請選擇%d天到%d天的日期範圍",
            "default-single": "請選擇一個日期",
            "default-default": "請選擇一個日期範圍",
            time: "日期",
            hour: "小時",
            minute: "分鐘",
        },
        ja: {
            selected: "選択しました:",
            day: "日",
            days: "日",
            apply: "確定",
            "week-1": "月",
            "week-2": "火",
            "week-3": "水",
            "week-4": "木",
            "week-5": "金",
            "week-6": "土",
            "week-7": "日",
            "month-name": [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
            ],
            shortcuts: "クイック選択",
            past: "過去",
            following: "将来",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "先週",
            "prev-month": "先月",
            "prev-year": "昨年",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "来週",
            "next-month": "来月",
            "next-year": "来年",
            "less-than": "日付の範囲は％d日以上にすべきではありません",
            "more-than": "日付の範囲は％d日を下回ってはいけません",
            "default-more": "％d日よりも長い期間を選択してください",
            "default-less": "％d日未満の期間を選択してください",
            "default-range": "％d日と％d日の間の日付範囲を選択してください",
            "default-single": "日付を選択してください",
            "default-default": "日付範囲を選択してください",
            time: "時間",
            hour: "時間",
            minute: "分",
        },
        da: {
            selected: "Valgt:",
            day: "Dag",
            days: "Dage",
            apply: "Luk",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "lø",
            "week-7": "sø",
            "month-name": [
                "januar",
                "februar",
                "marts",
                "april",
                "maj",
                "juni",
                "juli",
                "august",
                "september",
                "oktober",
                "november",
                "december",
            ],
            shortcuts: "genveje",
            "custom-values": "Brugerdefinerede værdier",
            past: "Forbi",
            following: "Følgende",
            previous: "Forrige",
            "prev-week": "uge",
            "prev-month": "måned",
            "prev-year": "år",
            next: "Næste",
            "next-week": "uge",
            "next-month": "måned",
            "next-year": "år",
            "less-than": "Dato interval bør ikke være med end %d dage",
            "more-than": "Dato interval bør ikke være mindre end %d dage",
            "default-more": "Vælg datointerval længere end %d dage",
            "default-single": "Vælg dato",
            "default-less": "Vælg datointerval mindre end %d dage",
            "default-range": "Vælg datointerval mellem %d og %d dage",
            "default-default": "Vælg datointerval",
            time: "tid",
            hour: "time",
            minute: "minut",
        },
        fi: {
            selected: "Valittu:",
            day: "Päivä",
            days: "Päivää",
            apply: "Sulje",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "ke",
            "week-4": "to",
            "week-5": "pe",
            "week-6": "la",
            "week-7": "su",
            "week-number": "V",
            "month-name": [
                "tammikuu",
                "helmikuu",
                "maaliskuu",
                "huhtikuu",
                "toukokuu",
                "kesäkuu",
                "heinäkuu",
                "elokuu",
                "syyskuu",
                "lokakuu",
                "marraskuu",
                "joulukuu",
            ],
            shortcuts: "Pikavalinnat",
            "custom-values": "Mukautetut Arvot",
            past: "Menneet",
            following: "Tulevat",
            previous: "Edellinen",
            "prev-week": "Viikko",
            "prev-month": "Kuukausi",
            "prev-year": "Vuosi",
            next: "Seuraava",
            "next-week": "Viikko",
            "next-month": "Kuukausi",
            "next-year": "Vuosi",
            "less-than": "Aikajakson tulisi olla vähemmän kuin %d päivää",
            "more-than": "Aikajakson ei tulisi olla vähempää kuin %d päivää",
            "default-more": "Valitse pidempi aikajakso kuin %d päivää",
            "default-single": "Valitse päivä",
            "default-less": "Valitse lyhyempi aikajakso kuin %d päivää",
            "default-range": "Valitse aikajakso %d ja %d päivän väliltä",
            "default-default": "Valitse aikajakso",
            time: "Aika",
            hour: "Tunti",
            minute: "Minuutti",
        },
        cat: {
            selected: "Seleccionats:",
            day: "Dia",
            days: "Dies",
            apply: "Tanca",
            "week-1": "Dl",
            "week-2": "Dm",
            "week-3": "Dc",
            "week-4": "Dj",
            "week-5": "Dv",
            "week-6": "Ds",
            "week-7": "Dg",
            "week-number": "S",
            "month-name": [
                "gener",
                "febrer",
                "març",
                "abril",
                "maig",
                "juny",
                "juliol",
                "agost",
                "setembre",
                "octubre",
                "novembre",
                "desembre",
            ],
            shortcuts: "Dreçeres",
            "custom-values": "Valors personalitzats",
            past: "Passat",
            following: "Futur",
            previous: "Anterior",
            "prev-week": "Setmana",
            "prev-month": "Mes",
            "prev-year": "Any",
            next: "Següent",
            "next-week": "Setmana",
            "next-month": "Mes",
            "next-year": "Any",
            "less-than": "El període no hauria de ser de més de %d dies",
            "more-than": "El període no hauria de ser de menys de %d dies",
            "default-more":
                "Perfavor selecciona un període més gran de %d dies",
            "default-single": "Perfavor selecciona una data",
            "default-less":
                "Perfavor selecciona un període de menys de %d dies",
            "default-range":
                "Perfavor selecciona un període d'entre %d i %d dies",
            "default-default": "Perfavor selecciona un període",
            time: "Temps",
            hour: "Hora",
            minute: "Minut",
        },
        sk: {
            selected: "Vybrané:",
            day: "Deň",
            days: "Dni",
            apply: "Zavrieť",
            "week-1": "po",
            "week-2": "út",
            "week-3": "st",
            "week-4": "št",
            "week-5": "pi",
            "week-6": "so",
            "week-7": "ne",
            "week-number": "T",
            "month-name": [
                "január",
                "február",
                "marec",
                "apríl",
                "máj",
                "jún",
                "júl",
                "august",
                "september",
                "október",
                "november",
                "december",
            ],
            shortcuts: "Skratky",
            "custom-values": "Vlastné hodnoty",
            past: "po",
            following: "nasledujúci",
            previous: "predchádzajúci",
            "prev-week": "týždeň",
            "prev-month": "mesiac",
            "prev-year": "rok",
            next: "ďalší",
            "next-week": "týždeň",
            "next-month": "mesiac",
            "next-year": "rok",
            "less-than": "Rozsah dátumu by nemal byť väčší ako %d dní",
            "more-than": "Rozsah dátumu by nemal byť menší ako %d dní",
            "default-more": "Prosím zvoľte rozsah dlhší ako %d dní",
            "default-single": "Prosím zvoľte dátum",
            "default-less": "Prosím zvoľte rozsah menší ako %d dní",
            "default-range": "Prosím zvoľte rozsah medzi %d a %d dňami",
            "default-default": "Prosím zvoľte rozsah",
            time: "Čas",
            hour: "Hodina",
            minute: "Minúta",
        },
    }),
        (U.fn.dateRangePicker = function (f) {
            f || (f = {}),
                ((f = U.extend(
                    !0,
                    {
                        autoClose: !1,
                        format: "YYYY-MM-DD",
                        separator: " to ",
                        language: "auto",
                        startOfWeek: "sunday",
                        getValue: function () {
                            return U(this).val();
                        },
                        setValue: function (e) {
                            U(this).attr("readonly") ||
                                U(this).is(":disabled") ||
                                e == U(this).val() ||
                                U(this).val(e);
                        },
                        startDate: !1,
                        endDate: !1,
                        time: { enabled: !1 },
                        minDays: 0,
                        maxDays: 0,
                        showShortcuts: !1,
                        shortcuts: {},
                        customShortcuts: [],
                        inline: !1,
                        container: "body",
                        alwaysOpen: !1,
                        singleDate: !1,
                        lookBehind: !1,
                        batchMode: !1,
                        duration: 200,
                        stickyMonths: !1,
                        dayDivAttrs: [],
                        dayTdAttrs: [],
                        selectForward: !1,
                        selectBackward: !1,
                        applyBtnClass: "",
                        singleMonth: "auto",
                        hoveringTooltip: function (e, t, a) {
                            return 1 < e ? e + " " + K("days") : "";
                        },
                        showTopbar: !0,
                        swapTime: !1,
                        showWeekNumbers: !1,
                        getWeekNumber: function (e) {
                            return Q(e).format("w");
                        },
                        customOpenAnimation: null,
                        customCloseAnimation: null,
                        customArrowPrevSymbol: null,
                        customArrowNextSymbol: null,
                        monthSelect: !1,
                        yearSelect: !1,
                    },
                    f
                )).start = !1),
                (f.end = !1),
                (f.startWeek = !1),
                (f.isTouchDevice =
                    "ontouchstart" in window || navigator.msMaxTouchPoints),
                f.isTouchDevice && (f.hoveringTooltip = !1),
                "auto" == f.singleMonth &&
                    (f.singleMonth = U(window).width() < 480),
                f.singleMonth && (f.stickyMonths = !1),
                f.showTopbar || (f.autoClose = !0),
                f.startDate &&
                    "string" == typeof f.startDate &&
                    (f.startDate = Q(f.startDate, f.format).toDate()),
                f.endDate &&
                    "string" == typeof f.endDate &&
                    (f.endDate = Q(f.endDate, f.format).toDate()),
                f.yearSelect &&
                    "boolean" == typeof f.yearSelect &&
                    (f.yearSelect = function (e) {
                        return [e - 5, e + 5];
                    });
            var m,
                e,
                r = (function () {
                    {
                        if ("auto" == f.language) {
                            var e = navigator.language
                                ? navigator.language
                                : navigator.browserLanguage;
                            return e &&
                                (e = e.toLowerCase()) in
                                    U.dateRangePickerLanguages
                                ? U.dateRangePickerLanguages[e]
                                : U.dateRangePickerLanguages.default;
                        }
                        return f.language &&
                            f.language in U.dateRangePickerLanguages
                            ? U.dateRangePickerLanguages[f.language]
                            : U.dateRangePickerLanguages.default;
                    }
                })(),
                s = !1,
                n = this,
                o = U(n).get(0);
            return (
                U(this)
                    .off(".datepicker")
                    .on("click.datepicker", function (e) {
                        m.is(":visible") || t(f.duration);
                    })
                    .on("change.datepicker", function (e) {
                        a();
                    })
                    .on("keyup.datepicker", function () {
                        try {
                            clearTimeout(e);
                        } catch (e) {}
                        e = setTimeout(function () {
                            a();
                        }, 2e3);
                    }),
                function () {
                    var t = this;
                    if (U(this).data("date-picker-opened")) return void B();
                    U(this).data("date-picker-opened", !0),
                        (m = (function () {
                            var e,
                                t = '<div class="date-picker-wrapper';
                            f.extraClass && (t += " " + f.extraClass + " "),
                                f.singleDate && (t += " single-date "),
                                f.showShortcuts || (t += " no-shortcuts "),
                                f.showTopbar || (t += " no-topbar "),
                                f.customTopBar && (t += " custom-topbar "),
                                (t += '">'),
                                f.showTopbar &&
                                    ((t += '<div class="drp_top-bar">'),
                                    f.customTopBar
                                        ? ("function" ==
                                              typeof f.customTopBar &&
                                              (f.customTopBar =
                                                  f.customTopBar()),
                                          (t +=
                                              '<div class="custom-top">' +
                                              f.customTopBar +
                                              "</div>"))
                                        : ((t +=
                                              '<div class="normal-top"><span class="selection-top">' +
                                              K("selected") +
                                              ' </span> <b class="start-day">...</b>'),
                                          f.singleDate ||
                                              (t +=
                                                  ' <span class="separator-day">' +
                                                  f.separator +
                                                  '</span> <b class="end-day">...</b> <i class="selected-days">(<span class="selected-days-num">3</span> ' +
                                                  K("days") +
                                                  ")</i>"),
                                          (t += "</div>"),
                                          (t +=
                                              '<div class="error-top">error</div><div class="default-top">default</div>')),
                                    (t +=
                                        '<input type="button" class="apply-btn disabled' +
                                        (!(e = "") === f.autoClose &&
                                            (e += " hide"),
                                        "" !== f.applyBtnClass &&
                                            (e += " " + f.applyBtnClass),
                                        e) +
                                        '" value="' +
                                        K("apply") +
                                        '" />'),
                                    (t += "</div>"));
                            var a = f.showWeekNumbers ? 6 : 5,
                                n = "&lt;";
                            f.customArrowPrevSymbol &&
                                (n = f.customArrowPrevSymbol);
                            var r = "&gt;";
                            if (
                                (f.customArrowNextSymbol &&
                                    (r = f.customArrowNextSymbol),
                                (t +=
                                    '<div class="month-wrapper">   <table class="month1" cellspacing="0" border="0" cellpadding="0">       <thead>           <tr class="caption">               <th>                   <span class="prev">' +
                                    n +
                                    '                   </span>               </th>               <th colspan="' +
                                    a +
                                    '" class="month-name">               </th>               <th>' +
                                    (f.singleDate || !f.stickyMonths
                                        ? '<span class="next">' + r + "</span>"
                                        : "") +
                                    '               </th>           </tr>           <tr class="week-name">' +
                                    E() +
                                    "       </thead>       <tbody></tbody>   </table>"),
                                f.singleMonth ||
                                    (t +=
                                        '<div class="gap">' +
                                        (function () {
                                            for (
                                                var e = [
                                                        '<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">',
                                                    ],
                                                    t = 0;
                                                t < 20;
                                                t++
                                            )
                                                e.push(
                                                    '<div class="gap-line"><div class="gap-1"></div><div class="gap-2"></div><div class="gap-3"></div></div>'
                                                );
                                            return e.push("</div>"), e.join("");
                                        })() +
                                        '</div><table class="month2" cellspacing="0" border="0" cellpadding="0">   <thead>   <tr class="caption">       <th>' +
                                        (f.stickyMonths
                                            ? ""
                                            : '<span class="prev">' +
                                              n +
                                              "</span>") +
                                        '       </th>       <th colspan="' +
                                        a +
                                        '" class="month-name">       </th>       <th>           <span class="next">' +
                                        r +
                                        '</span>       </th>   </tr>   <tr class="week-name">' +
                                        E() +
                                        "   </thead>   <tbody></tbody></table>"),
                                (t +=
                                    '<div class="dp-clearfix"></div><div class="time"><div class="time1"></div>'),
                                f.singleDate ||
                                    (t += '<div class="time2"></div>'),
                                (t +=
                                    '</div><div class="dp-clearfix"></div></div>'),
                                (t += '<div class="footer">'),
                                f.showShortcuts)
                            ) {
                                t +=
                                    '<div class="shortcuts"><b>' +
                                    K("shortcuts") +
                                    "</b>";
                                var s = f.shortcuts;
                                if (s) {
                                    var o;
                                    if (
                                        s["prev-days"] &&
                                        0 < s["prev-days"].length
                                    ) {
                                        t +=
                                            '&nbsp;<span class="prev-days">' +
                                            K("past");
                                        for (
                                            var i = 0;
                                            i < s["prev-days"].length;
                                            i++
                                        )
                                            (o = s["prev-days"][i]),
                                                (o +=
                                                    1 < s["prev-days"][i]
                                                        ? K("days")
                                                        : K("day")),
                                                (t +=
                                                    ' <a href="javascript:;" shortcut="day,-' +
                                                    s["prev-days"][i] +
                                                    '">' +
                                                    o +
                                                    "</a>");
                                        t += "</span>";
                                    }
                                    if (
                                        s["next-days"] &&
                                        0 < s["next-days"].length
                                    ) {
                                        t +=
                                            '&nbsp;<span class="next-days">' +
                                            K("following");
                                        for (
                                            var i = 0;
                                            i < s["next-days"].length;
                                            i++
                                        )
                                            (o = s["next-days"][i]),
                                                (o +=
                                                    1 < s["next-days"][i]
                                                        ? K("days")
                                                        : K("day")),
                                                (t +=
                                                    ' <a href="javascript:;" shortcut="day,' +
                                                    s["next-days"][i] +
                                                    '">' +
                                                    o +
                                                    "</a>");
                                        t += "</span>";
                                    }
                                    if (s.prev && 0 < s.prev.length) {
                                        t +=
                                            '&nbsp;<span class="prev-buttons">' +
                                            K("previous");
                                        for (var i = 0; i < s.prev.length; i++)
                                            (o = K("prev-" + s.prev[i])),
                                                (t +=
                                                    ' <a href="javascript:;" shortcut="prev,' +
                                                    s.prev[i] +
                                                    '">' +
                                                    o +
                                                    "</a>");
                                        t += "</span>";
                                    }
                                    if (s.next && 0 < s.next.length) {
                                        t +=
                                            '&nbsp;<span class="next-buttons">' +
                                            K("next");
                                        for (var i = 0; i < s.next.length; i++)
                                            (o = K("next-" + s.next[i])),
                                                (t +=
                                                    ' <a href="javascript:;" shortcut="next,' +
                                                    s.next[i] +
                                                    '">' +
                                                    o +
                                                    "</a>");
                                        t += "</span>";
                                    }
                                }
                                if (f.customShortcuts)
                                    for (
                                        var i = 0;
                                        i < f.customShortcuts.length;
                                        i++
                                    ) {
                                        var d = f.customShortcuts[i];
                                        t +=
                                            '&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">' +
                                            d.name +
                                            "</a></span>";
                                    }
                                t += "</div>";
                            }
                            if (
                                f.showCustomValues &&
                                ((t +=
                                    '<div class="customValues"><b>' +
                                    (f.customValueLabel || K("custom-values")) +
                                    "</b>"),
                                f.customValues)
                            )
                                for (
                                    var i = 0;
                                    i < f.customValues.length;
                                    i++
                                ) {
                                    var l = f.customValues[i];
                                    t +=
                                        '&nbsp;<span class="custom-value"><a href="javascript:;" custom="' +
                                        l.value +
                                        '">' +
                                        l.name +
                                        "</a></span>";
                                }
                            return U((t += "</div></div>"));
                        })().hide()).append(
                            '<div class="date-range-length-tip"></div>'
                        ),
                        U(f.container).append(m),
                        f.inline ? m.addClass("inline-wrapper") : i();
                    f.alwaysOpen && m.find(".apply-btn").hide();
                    var e = _();
                    if ((G(e), f.time.enabled))
                        if ((f.startDate && f.endDate) || (f.start && f.end))
                            Y(Q(f.start || f.startDate).toDate(), "time1"),
                                Y(Q(f.end || f.endDate).toDate(), "time2");
                        else {
                            var a = f.defaultEndTime ? f.defaultEndTime : e;
                            Y(e, "time1"), Y(a, "time2");
                        }
                    var n = "";
                    n = f.singleDate
                        ? K("default-single")
                        : f.minDays && f.maxDays
                        ? K("default-range")
                        : f.minDays
                        ? K("default-more")
                        : f.maxDays
                        ? K("default-less")
                        : K("default-default");
                    m
                        .find(".default-top")
                        .html(
                            n
                                .replace(/\%d/, f.minDays)
                                .replace(/\%d/, f.maxDays)
                        ),
                        f.singleMonth
                            ? m.addClass("single-month")
                            : m.addClass("two-months");
                    setTimeout(function () {
                        l(), (s = !0);
                    }, 0),
                        m.on("click", function (e) {
                            e.stopPropagation();
                        }),
                        U(document).on("click.datepicker", Z),
                        m.find(".next").on("click", function () {
                            f.stickyMonths
                                ? (function (e) {
                                      var t = F(f.month1),
                                          a = F(f.month2);
                                      if (q(a)) return;
                                      if (!f.singleDate && 0 <= L(t, a)) return;
                                      O(t, "month1"), O(a, "month2"), C();
                                  })()
                                : (function (e) {
                                      var t = U(e)
                                              .parents("table")
                                              .hasClass("month2"),
                                          a = t ? f.month2 : f.month1;
                                      if (
                                          ((a = F(a)),
                                          (!f.singleMonth &&
                                              !f.singleDate &&
                                              !t &&
                                              0 <= L(a, f.month2)) ||
                                              q(a))
                                      )
                                          return;
                                      O(a, t ? "month2" : "month1"), I();
                                  })(this);
                        }),
                        m.find(".prev").on("click", function () {
                            f.stickyMonths
                                ? (function (e) {
                                      var t = R(f.month1),
                                          a = R(f.month2);
                                      if (q(t)) return;
                                      if (!f.singleDate && L(a, t) <= 0) return;
                                      O(a, "month2"), O(t, "month1"), C();
                                  })()
                                : (function (e) {
                                      var t = U(e)
                                              .parents("table")
                                              .hasClass("month2"),
                                          a = t ? f.month2 : f.month1;
                                      if (
                                          ((a = R(a)),
                                          (t && L(a, f.month1) <= 0) || q(a))
                                      )
                                          return;
                                      O(a, t ? "month2" : "month1"), I();
                                  })(this);
                        }),
                        m
                            .attr("unselectable", "on")
                            .css("user-select", "none")
                            .on("selectstart", function (e) {
                                return e.preventDefault(), !1;
                            }),
                        m.find(".apply-btn").on("click", function () {
                            B();
                            var e =
                                W(new Date(f.start)) +
                                f.separator +
                                W(new Date(f.end));
                            U(t).trigger("datepicker-apply", {
                                value: e,
                                date1: new Date(f.start),
                                date2: new Date(f.end),
                            });
                        }),
                        m.find("[custom]").on("click", function () {
                            var e = U(this).attr("custom");
                            (f.start = !1),
                                (f.end = !1),
                                m.find(".day.checked").removeClass("checked"),
                                f.setValue.call(o, e),
                                M(),
                                S(!0),
                                C(),
                                f.autoClose && B();
                        }),
                        m.find("[shortcut]").on("click", function () {
                            var e,
                                t = U(this).attr("shortcut"),
                                a = new Date(),
                                n = !1;
                            if (-1 != t.indexOf("day")) {
                                var r = parseInt(t.split(",", 2)[1], 10);
                                (n = new Date(
                                    new Date().getTime() + 864e5 * r
                                )),
                                    (a = new Date(
                                        a.getTime() + 864e5 * (0 < r ? 1 : -1)
                                    ));
                            } else if (-1 != t.indexOf("week")) {
                                var s;
                                for (
                                    e = -1 != t.indexOf("prev,") ? -1 : 1,
                                        s =
                                            1 == e
                                                ? "monday" == f.startOfWeek
                                                    ? 1
                                                    : 0
                                                : "monday" == f.startOfWeek
                                                ? 0
                                                : 6,
                                        a = new Date(a.getTime() - 864e5);
                                    a.getDay() != s;

                                )
                                    a = new Date(a.getTime() + 864e5 * e);
                                n = new Date(a.getTime() + 864e5 * e * 6);
                            } else if (-1 != t.indexOf("month"))
                                (e = -1 != t.indexOf("prev,") ? -1 : 1),
                                    (n = 1 == e ? F(a) : R(a)).setDate(1),
                                    (a = F(n)).setDate(1),
                                    (a = new Date(a.getTime() - 864e5));
                            else if (-1 != t.indexOf("year"))
                                (e = -1 != t.indexOf("prev,") ? -1 : 1),
                                    (n = new Date()).setFullYear(
                                        a.getFullYear() + e
                                    ),
                                    n.setMonth(0),
                                    n.setDate(1),
                                    a.setFullYear(a.getFullYear() + e),
                                    a.setMonth(11),
                                    a.setDate(31);
                            else if ("custom" == t) {
                                var o = U(this).html();
                                if (
                                    f.customShortcuts &&
                                    0 < f.customShortcuts.length
                                )
                                    for (
                                        var i = 0;
                                        i < f.customShortcuts.length;
                                        i++
                                    ) {
                                        var d = f.customShortcuts[i];
                                        if (d.name == o) {
                                            var l = [];
                                            if (
                                                ((l = d.dates.call()) &&
                                                    2 == l.length &&
                                                    ((n = l[0]), (a = l[1])),
                                                l && 1 == l.length)
                                            ) {
                                                var u = l[0];
                                                O(u, "month1"),
                                                    O(F(u), "month2"),
                                                    I();
                                            }
                                            break;
                                        }
                                    }
                            }
                            n && a && (j(n, a), M());
                        }),
                        m
                            .find(".time1 input[type=range]")
                            .on("change touchmove", function (e) {
                                var t = e.target,
                                    a =
                                        "hour" == t.name
                                            ? U(t)
                                                  .val()
                                                  .replace(/^(\d{1})$/, "0$1")
                                            : void 0,
                                    n =
                                        "minute" == t.name
                                            ? U(t)
                                                  .val()
                                                  .replace(/^(\d{1})$/, "0$1")
                                            : void 0;
                                c("time1", a, n);
                            }),
                        m
                            .find(".time2 input[type=range]")
                            .on("change touchmove", function (e) {
                                var t = e.target,
                                    a =
                                        "hour" == t.name
                                            ? U(t)
                                                  .val()
                                                  .replace(/^(\d{1})$/, "0$1")
                                            : void 0,
                                    n =
                                        "minute" == t.name
                                            ? U(t)
                                                  .val()
                                                  .replace(/^(\d{1})$/, "0$1")
                                            : void 0;
                                c("time2", a, n);
                            });
                }.call(this),
                f.alwaysOpen && t(0),
                U(this).data("dateRangePicker", {
                    setStart: function (e) {
                        return (
                            "string" == typeof e &&
                                (e = Q(e, f.format).toDate()),
                            (f.end = !1),
                            T(e),
                            this
                        );
                    },
                    setEnd: function (e, t) {
                        var a = new Date();
                        return (
                            a.setTime(f.start),
                            "string" == typeof e &&
                                (e = Q(e, f.format).toDate()),
                            j(a, e, t),
                            this
                        );
                    },
                    setDateRange: function (e, t, a) {
                        "string" == typeof e &&
                            "string" == typeof t &&
                            ((e = Q(e, f.format).toDate()),
                            (t = Q(t, f.format).toDate())),
                            j(e, t, a);
                    },
                    clear: function () {
                        (f.start = !1),
                            (f.end = !1),
                            m.find(".day.checked").removeClass("checked"),
                            m
                                .find(".day.last-date-selected")
                                .removeClass("last-date-selected"),
                            m
                                .find(".day.first-date-selected")
                                .removeClass("first-date-selected"),
                            f.setValue.call(o, ""),
                            M(),
                            S(),
                            C();
                    },
                    close: B,
                    open: t,
                    redraw: N,
                    getDatePicker: function () {
                        return m;
                    },
                    resetMonthsView: G,
                    destroy: function () {
                        U(n).off(".datepicker"),
                            U(n).data("dateRangePicker", ""),
                            U(n).data("date-picker-opened", null),
                            m.remove(),
                            U(window).off("resize.datepicker", i),
                            U(document).off("click.datepicker", Z);
                    },
                }),
                U(window).on("resize.datepicker", i),
                this
            );
            function i() {
                if (!f.inline) {
                    var e = U(n).offset();
                    if ("relative" == U(f.container).css("position")) {
                        var t = U(f.container).offset(),
                            a = Math.max(
                                0,
                                e.left + m.outerWidth() - U("body").width() + 16
                            );
                        m.css({
                            top: e.top - t.top + U(n).outerHeight() + 4,
                            left: e.left - t.left - a,
                        });
                    } else
                        e.left < 460
                            ? m.css({
                                  top:
                                      e.top +
                                      U(n).outerHeight() +
                                      parseInt(
                                          U("body").css("border-top") || 0,
                                          10
                                      ),
                                  left: e.left,
                              })
                            : m.css({
                                  top:
                                      e.top +
                                      U(n).outerHeight() +
                                      parseInt(
                                          U("body").css("border-top") || 0,
                                          10
                                      ),
                                  left: e.left + U(n).width() - m.width() - 16,
                              });
                }
            }
            function t(e) {
                N(),
                    a(),
                    f.customOpenAnimation
                        ? f.customOpenAnimation.call(m.get(0), function () {
                              U(n).trigger("datepicker-opened", {
                                  relatedTarget: m,
                              });
                          })
                        : m.slideDown(e, function () {
                              U(n).trigger("datepicker-opened", {
                                  relatedTarget: m,
                              });
                          }),
                    U(n).trigger("datepicker-open", { relatedTarget: m }),
                    I(),
                    l(),
                    i();
            }
            function a() {
                var e = f.getValue.call(o),
                    t = e ? e.split(f.separator) : "";
                if (t && ((1 == t.length && f.singleDate) || 2 <= t.length)) {
                    var a = f.format;
                    a.match(/Do/) &&
                        ((a = a.replace(/Do/, "D")),
                        (t[0] = t[0].replace(/(\d+)(th|nd|st)/, "$1")),
                        2 <= t.length &&
                            (t[1] = t[1].replace(/(\d+)(th|nd|st)/, "$1"))),
                        (s = !1),
                        2 <= t.length
                            ? j(
                                  d(t[0], a, Q.locale(f.language)),
                                  d(t[1], a, Q.locale(f.language))
                              )
                            : 1 == t.length &&
                              f.singleDate &&
                              T(d(t[0], a, Q.locale(f.language))),
                        (s = !0);
                }
            }
            function d(e, t, a) {
                return Q(e, t, a).isValid()
                    ? Q(e, t, a).toDate()
                    : Q().toDate();
            }
            function l() {
                var e = m.find(".gap").css("margin-left");
                e && (e = parseInt(e));
                var t = m.find(".month1").width(),
                    a = m.find(".gap").width() + (e ? 2 * e : 0),
                    n = m.find(".month2").width();
                m.find(".month-wrapper").width(t + a + n);
            }
            function u(e, t) {
                m
                    .find("." + e + " input[type=range].hour-range")
                    .val(Q(t).hours()),
                    m
                        .find("." + e + " input[type=range].minute-range")
                        .val(Q(t).minutes()),
                    c(e, Q(t).format("HH"), Q(t).format("mm"));
            }
            function h(e, t) {
                f[e] = parseInt(
                    Q(parseInt(t))
                        .hour(Q(f[e + "Time"]).format("HH"), "h")
                        .minute(Q(f[e + "Time"]).format("mm"), "m")
                        .valueOf()
                );
            }
            function c(e, r, s) {
                switch (
                    (r && m.find("." + e + " .hour-val").text(r),
                    s && m.find("." + e + " .minute-val").text(s),
                    e)
                ) {
                    case "time1":
                        f.start && t("start", Q(f.start)),
                            t("startTime", Q(f.startTime || Q().valueOf()));
                        break;
                    case "time2":
                        f.end && t("end", Q(f.end)),
                            t("endTime", Q(f.endTime || Q().valueOf()));
                }
                function t(e, t) {
                    var a = t.format("HH"),
                        n = t.format("mm");
                    f[e] = t
                        .hour(r || a, "h")
                        .minute(s || n, "m")
                        .valueOf();
                }
                M(), S(), C();
            }
            function p(e) {
                var t = e;
                return (
                    "week-range" === f.batchMode
                        ? (t =
                              "monday" === f.startOfWeek
                                  ? Q(parseInt(e)).startOf("isoweek").valueOf()
                                  : Q(parseInt(e)).startOf("week").valueOf())
                        : "month-range" === f.batchMode &&
                          (t = Q(parseInt(e)).startOf("month").valueOf()),
                    t
                );
            }
            function v(e) {
                var t = e;
                return (
                    "week-range" === f.batchMode
                        ? (t =
                              "monday" === f.startOfWeek
                                  ? Q(parseInt(e)).endOf("isoweek").valueOf()
                                  : Q(parseInt(e)).endOf("week").valueOf())
                        : "month-range" === f.batchMode &&
                          (t = Q(parseInt(e)).endOf("month").valueOf()),
                    t
                );
            }
            function k(e) {
                if (!e.hasClass("invalid")) {
                    var t = e.attr("time");
                    if (
                        (e.addClass("checked"),
                        f.singleDate
                            ? ((f.start = t), (f.end = !1))
                            : "week" === f.batchMode
                            ? "monday" === f.startOfWeek
                                ? ((f.start = Q(parseInt(t))
                                      .startOf("isoweek")
                                      .valueOf()),
                                  (f.end = Q(parseInt(t))
                                      .endOf("isoweek")
                                      .valueOf()))
                                : ((f.end = Q(parseInt(t))
                                      .endOf("week")
                                      .valueOf()),
                                  (f.start = Q(parseInt(t))
                                      .startOf("week")
                                      .valueOf()))
                            : "workweek" === f.batchMode
                            ? ((f.start = Q(parseInt(t)).day(1).valueOf()),
                              (f.end = Q(parseInt(t)).day(5).valueOf()))
                            : "weekend" === f.batchMode
                            ? ((f.start = Q(parseInt(t)).day(6).valueOf()),
                              (f.end = Q(parseInt(t)).day(7).valueOf()))
                            : "month" === f.batchMode
                            ? ((f.start = Q(parseInt(t))
                                  .startOf("month")
                                  .valueOf()),
                              (f.end = Q(parseInt(t)).endOf("month").valueOf()))
                            : (f.start && f.end) || (!f.start && !f.end)
                            ? ((f.start = p(t)), (f.end = !1))
                            : f.start &&
                              ((f.end = v(t)),
                              f.time.enabled && h("end", f.end)),
                        f.time.enabled &&
                            (f.start && h("start", f.start),
                            f.end && h("end", f.end)),
                        !f.singleDate && f.start && f.end && f.start > f.end)
                    ) {
                        var a = f.end;
                        (f.end = v(f.start)),
                            (f.start = p(a)),
                            f.time.enabled &&
                                f.swapTime &&
                                (u("time1", f.start), u("time2", f.end));
                    }
                    (f.start = parseInt(f.start)),
                        (f.end = parseInt(f.end)),
                        b(),
                        f.start &&
                            !f.end &&
                            (U(n).trigger("datepicker-first-date-selected", {
                                date1: new Date(f.start),
                            }),
                            y(e)),
                        w(),
                        M(),
                        S(),
                        C(),
                        x();
                }
            }
            function g(e) {
                if (
                    ((e = parseInt(e, 10)),
                    f.startDate && H(e, f.startDate) < 0)
                )
                    return !1;
                if (f.endDate && 0 < H(e, f.endDate)) return !1;
                if (f.start && !f.end && !f.singleDate) {
                    if (0 < f.maxDays && z(e, f.start) > f.maxDays) return !1;
                    if (0 < f.minDays && z(e, f.start) < f.minDays) return !1;
                    if (f.selectForward && e < f.start) return !1;
                    if (f.selectBackward && e > f.start) return !1;
                    if (
                        f.beforeShowDay &&
                        "function" == typeof f.beforeShowDay
                    ) {
                        for (var t = !0, a = e; 1 < z(a, f.start); ) {
                            if (!f.beforeShowDay(new Date(a))[0]) {
                                t = !1;
                                break;
                            }
                            if (Math.abs(a - f.start) < 864e5) break;
                            a > f.start && (a -= 864e5),
                                a < f.start && (a += 864e5);
                        }
                        if (!t) return !1;
                    }
                }
                return !0;
            }
            function w() {
                return (
                    m
                        .find(".day.invalid.tmp")
                        .removeClass("tmp invalid")
                        .addClass("valid"),
                    f.start &&
                        !f.end &&
                        m.find(".day.toMonth.valid").each(function () {
                            g(parseInt(U(this).attr("time"), 10))
                                ? U(this)
                                      .addClass("valid tmp")
                                      .removeClass("invalid")
                                : U(this)
                                      .addClass("invalid tmp")
                                      .removeClass("valid");
                        }),
                    !0
                );
            }
            function y(e) {
                var t = parseInt(e.attr("time")),
                    a = "";
                if (e.hasClass("has-tooltip") && e.attr("data-tooltip"))
                    a =
                        '<span class="tooltip-content">' +
                        e.attr("data-tooltip") +
                        "</span>";
                else if (!e.hasClass("invalid"))
                    if (f.singleDate)
                        m.find(".day.hovering").removeClass("hovering"),
                            e.addClass("hovering");
                    else if (
                        (m.find(".day").each(function () {
                            var e = parseInt(U(this).attr("time"));
                            f.start, f.end;
                            e == t
                                ? U(this).addClass("hovering")
                                : U(this).removeClass("hovering"),
                                f.start &&
                                !f.end &&
                                ((f.start < e && e <= t) ||
                                    (f.start > e && t <= e))
                                    ? U(this).addClass("hovering")
                                    : U(this).removeClass("hovering");
                        }),
                        f.start && !f.end)
                    ) {
                        var n = z(t, f.start);
                        f.hoveringTooltip &&
                            ("function" == typeof f.hoveringTooltip
                                ? (a = f.hoveringTooltip(n, f.start, t))
                                : !0 === f.hoveringTooltip &&
                                  1 < n &&
                                  (a = n + " " + K("days")));
                    }
                if (a) {
                    var r = e.offset(),
                        s = m.offset(),
                        o = r.left - s.left,
                        i = r.top - s.top;
                    o += e.width() / 2;
                    var d = m.find(".date-range-length-tip"),
                        l = d
                            .css({ visibility: "hidden", display: "none" })
                            .html(a)
                            .width(),
                        u = d.height();
                    (o -= l / 2),
                        (i -= u),
                        setTimeout(function () {
                            d.css({
                                left: o,
                                top: i,
                                display: "block",
                                visibility: "visible",
                            });
                        }, 10);
                } else m.find(".date-range-length-tip").hide();
            }
            function b() {
                m.find(".day.hovering").removeClass("hovering"),
                    m.find(".date-range-length-tip").hide();
            }
            function D(e) {
                var t = e.val(),
                    a = e.attr("name"),
                    n = e.parents("table").hasClass("month1")
                        ? "month1"
                        : "month2",
                    r = "month1" === n ? "month2" : "month1",
                    s = !!f.startDate && Q(f.startDate),
                    o = !!f.endDate && Q(f.endDate),
                    i = Q(f[n])[a](t);
                s &&
                    i.isSameOrBefore(s) &&
                    (i = s.add("month2" === n ? 1 : 0, "month")),
                    o &&
                        i.isSameOrAfter(o) &&
                        (i = o.add(
                            f.singleMonth || "month1" !== n ? 0 : -1,
                            "month"
                        )),
                    O(i, n),
                    "month1" === n
                        ? (f.stickyMonths ||
                              Q(i).isSameOrAfter(f[r], "month")) &&
                          O(Q(i).add(1, "month"), r)
                        : (f.stickyMonths ||
                              Q(i).isSameOrBefore(f[r], "month")) &&
                          O(Q(i).add(-1, "month"), r),
                    I();
            }
            function x() {
                !0 === f.singleDate
                    ? s && f.start && f.autoClose && B()
                    : s && f.start && f.end && f.autoClose && B();
            }
            function M() {
                var e = Math.ceil((f.end - f.start) / 864e5) + 1;
                f.singleDate
                    ? f.start && !f.end
                        ? m
                              .find(".drp_top-bar")
                              .removeClass("error")
                              .addClass("normal")
                        : m
                              .find(".drp_top-bar")
                              .removeClass("error")
                              .removeClass("normal")
                    : f.maxDays && e > f.maxDays
                    ? ((f.start = !1),
                      (f.end = !1),
                      m.find(".day").removeClass("checked"),
                      m
                          .find(".drp_top-bar")
                          .removeClass("normal")
                          .addClass("error")
                          .find(".error-top")
                          .html(K("less-than").replace("%d", f.maxDays)))
                    : f.minDays && e < f.minDays
                    ? ((f.start = !1),
                      (f.end = !1),
                      m.find(".day").removeClass("checked"),
                      m
                          .find(".drp_top-bar")
                          .removeClass("normal")
                          .addClass("error")
                          .find(".error-top")
                          .html(K("more-than").replace("%d", f.minDays)))
                    : f.start || f.end
                    ? m
                          .find(".drp_top-bar")
                          .removeClass("error")
                          .addClass("normal")
                    : m
                          .find(".drp_top-bar")
                          .removeClass("error")
                          .removeClass("normal"),
                    (f.singleDate && f.start && !f.end) ||
                    (!f.singleDate && f.start && f.end)
                        ? m.find(".apply-btn").removeClass("disabled")
                        : m.find(".apply-btn").addClass("disabled"),
                    f.batchMode &&
                        ((f.start &&
                            f.startDate &&
                            H(f.start, f.startDate) < 0) ||
                            (f.end && f.endDate && 0 < H(f.end, f.endDate))) &&
                        ((f.start = !1),
                        (f.end = !1),
                        m.find(".day").removeClass("checked"));
            }
            function S(e, t) {
                var a;
                m.find(".start-day").html("..."),
                    m.find(".end-day").html("..."),
                    m.find(".selected-days").hide(),
                    f.start &&
                        m
                            .find(".start-day")
                            .html(W(new Date(parseInt(f.start)))),
                    f.end &&
                        m.find(".end-day").html(W(new Date(parseInt(f.end)))),
                    f.start && f.singleDate
                        ? (m.find(".apply-btn").removeClass("disabled"),
                          (a = W(new Date(f.start))),
                          f.setValue.call(
                              o,
                              a,
                              W(new Date(f.start)),
                              W(new Date(f.end))
                          ),
                          s &&
                              !t &&
                              U(n).trigger("datepicker-change", {
                                  value: a,
                                  date1: new Date(f.start),
                              }))
                        : f.start && f.end
                        ? (m
                              .find(".selected-days")
                              .show()
                              .find(".selected-days-num")
                              .html(z(f.end, f.start)),
                          m.find(".apply-btn").removeClass("disabled"),
                          (a =
                              W(new Date(f.start)) +
                              f.separator +
                              W(new Date(f.end))),
                          f.setValue.call(
                              o,
                              a,
                              W(new Date(f.start)),
                              W(new Date(f.end))
                          ),
                          s &&
                              !t &&
                              U(n).trigger("datepicker-change", {
                                  value: a,
                                  date1: new Date(f.start),
                                  date2: new Date(f.end),
                              }))
                        : e
                        ? m.find(".apply-btn").removeClass("disabled")
                        : m.find(".apply-btn").addClass("disabled");
            }
            function z(e, t) {
                return Math.abs(Q(e).diff(Q(t), "d")) + 1;
            }
            function j(e, t, a) {
                if (e.getTime() > t.getTime()) {
                    var n = t;
                    (t = e), (e = n), (n = null);
                }
                var r = !0;
                if (
                    (f.startDate && H(e, f.startDate) < 0 && (r = !1),
                    f.endDate && 0 < H(t, f.endDate) && (r = !1),
                    !r)
                )
                    return (
                        O(f.startDate, "month1"),
                        O(F(f.startDate), "month2"),
                        void I()
                    );
                (f.start = e.getTime()),
                    (f.end = t.getTime()),
                    f.time.enabled && (u("time1", e), u("time2", t)),
                    (f.stickyMonths || (0 < H(e, t) && 0 === L(e, t))) &&
                        (f.lookBehind ? (e = R(t)) : (t = F(e))),
                    f.stickyMonths &&
                        !1 !== f.endDate &&
                        0 < L(t, f.endDate) &&
                        ((e = R(e)), (t = R(t))),
                    f.stickyMonths ||
                        (0 === L(e, t) &&
                            (f.lookBehind ? (e = R(t)) : (t = F(e)))),
                    O(e, "month1"),
                    O(t, "month2"),
                    I(),
                    M(),
                    S(!1, a),
                    x();
            }
            function T(e) {
                var t = !0;
                if (
                    (f.startDate && H(e, f.startDate) < 0 && (t = !1),
                    f.endDate && 0 < H(e, f.endDate) && (t = !1),
                    t)
                ) {
                    if (
                        ((f.start = e.getTime()),
                        f.time.enabled && u("time1", e),
                        O(e, "month1"),
                        !0 !== f.singleMonth)
                    )
                        O(F(e), "month2");
                    I(), S(), x();
                } else O(f.startDate, "month1");
            }
            function C() {
                (f.start || f.end) &&
                    (m.find(".day").each(function () {
                        var e = parseInt(U(this).attr("time")),
                            t = f.start,
                            a = f.end;
                        f.time.enabled &&
                            ((e = Q(e).startOf("day").valueOf()),
                            (t = Q(t || Q().valueOf())
                                .startOf("day")
                                .valueOf()),
                            (a = Q(a || Q().valueOf())
                                .startOf("day")
                                .valueOf())),
                            (f.start && f.end && e <= a && t <= e) ||
                            (f.start &&
                                !f.end &&
                                Q(t).format("YYYY-MM-DD") ==
                                    Q(e).format("YYYY-MM-DD"))
                                ? U(this).addClass("checked")
                                : U(this).removeClass("checked"),
                            f.start &&
                            Q(t).format("YYYY-MM-DD") ==
                                Q(e).format("YYYY-MM-DD")
                                ? U(this).addClass("first-date-selected")
                                : U(this).removeClass("first-date-selected"),
                            f.end &&
                            Q(a).format("YYYY-MM-DD") ==
                                Q(e).format("YYYY-MM-DD")
                                ? U(this).addClass("last-date-selected")
                                : U(this).removeClass("last-date-selected");
                    }),
                    m.find(".week-number").each(function () {
                        U(this).attr("data-start-time") == f.startWeek &&
                            U(this).addClass("week-number-selected");
                    }));
            }
            function O(e, t) {
                var a = (function (e, t) {
                        var a = (e = Q(e)).get("month"),
                            n = '<div class="month-element">' + A(a) + "</div>";
                        if (!f.monthSelect) return n;
                        var r =
                                !!f.startDate &&
                                Q(f.startDate).add(
                                    f.singleMonth || "month2" !== t ? 0 : 1,
                                    "month"
                                ),
                            s =
                                !!f.endDate &&
                                Q(f.endDate).add(
                                    f.singleMonth || "month1" !== t ? 0 : -1,
                                    "month"
                                ),
                            o = r && e.isSame(r, "year") ? r.get("month") : 0,
                            i = s && e.isSame(s, "year") ? s.get("month") : 11,
                            d = Math.min(o, a),
                            l = Math.max(i, a);
                        if (d === l) return n;
                        return P(
                            "month",
                            V(
                                {
                                    minSelectable: o,
                                    maxSelectable: i,
                                    minVisible: d,
                                    maxVisible: l,
                                },
                                a,
                                function (e) {
                                    return A(e);
                                }
                            )
                        );
                    })((e = Q(e).toDate()), t),
                    n = (function (e, t) {
                        var a = (e = Q(e)).get("year"),
                            n = '<div class="month-element">' + a + "</div>";
                        if (!f.yearSelect) return n;
                        var r =
                                f.yearSelect &&
                                "function" == typeof f.yearSelect,
                            s =
                                !!f.startDate &&
                                Q(f.startDate).add(
                                    f.singleMonth || "month2" !== t ? 0 : 1,
                                    "month"
                                ),
                            o =
                                !!f.endDate &&
                                Q(f.endDate).add(
                                    f.singleMonth || "month1" !== t ? 0 : -1,
                                    "month"
                                ),
                            i = r ? f.yearSelect(a) : f.yearSelect.slice(),
                            d = s
                                ? Math.max(i[0], s.get("year"))
                                : Math.min(i[0], a),
                            l = o
                                ? Math.min(i[1], o.get("year"))
                                : Math.max(i[1], a),
                            u = Math.min(d, a),
                            m = Math.max(l, a);
                        if (u === m) return n;
                        return P(
                            "year",
                            V(
                                {
                                    minSelectable: d,
                                    maxSelectable: l,
                                    minVisible: u,
                                    maxVisible: m,
                                },
                                a
                            )
                        );
                    })(e, t);
                m.find("." + t + " .month-name").html(a + " " + n),
                    m.find("." + t + " tbody").html(
                        (function (e) {
                            var t = [];
                            e.setDate(1);
                            new Date(e.getTime() - 864e5);
                            var a,
                                n,
                                r = new Date(),
                                s = e.getDay();
                            0 === s && "monday" === f.startOfWeek && (s = 7);
                            if (0 < s)
                                for (var o = s; 0 < o; o--) {
                                    var i = new Date(e.getTime() - 864e5 * o);
                                    (n = g(i.getTime())),
                                        f.startDate &&
                                            H(i, f.startDate) < 0 &&
                                            (n = !1),
                                        f.endDate &&
                                            0 < H(i, f.endDate) &&
                                            (n = !1),
                                        t.push({
                                            date: i,
                                            type: "lastMonth",
                                            day: i.getDate(),
                                            time: i.getTime(),
                                            valid: n,
                                        });
                                }
                            for (var d = e.getMonth(), o = 0; o < 40; o++)
                                (a = Q(e).add(o, "days").toDate()),
                                    (n = g(a.getTime())),
                                    f.startDate &&
                                        H(a, f.startDate) < 0 &&
                                        (n = !1),
                                    f.endDate &&
                                        0 < H(a, f.endDate) &&
                                        (n = !1),
                                    t.push({
                                        date: a,
                                        type:
                                            a.getMonth() == d
                                                ? "toMonth"
                                                : "nextMonth",
                                        day: a.getDate(),
                                        time: a.getTime(),
                                        valid: n,
                                    });
                            for (
                                var l = [], u = 0;
                                u < 6 && "nextMonth" != t[7 * u].type;
                                u++
                            ) {
                                l.push("<tr>");
                                for (var i = 0; i < 7; i++) {
                                    var m =
                                        "monday" == f.startOfWeek ? i + 1 : i;
                                    a = t[7 * u + m];
                                    var h =
                                        Q(a.time).format("L") ==
                                        Q(r).format("L");
                                    if (
                                        ((a.extraClass = ""),
                                        (a.tooltip = ""),
                                        a.valid &&
                                            f.beforeShowDay &&
                                            "function" ==
                                                typeof f.beforeShowDay)
                                    ) {
                                        var c = f.beforeShowDay(
                                            Q(a.time).toDate()
                                        );
                                        (a.valid = c[0]),
                                            (a.extraClass = c[1] || ""),
                                            (a.tooltip = c[2] || ""),
                                            "" !== a.tooltip &&
                                                (a.extraClass +=
                                                    " has-tooltip ");
                                    }
                                    var p = {
                                        time: a.time,
                                        "data-tooltip": a.tooltip,
                                        class:
                                            "day " +
                                            a.type +
                                            " " +
                                            a.extraClass +
                                            " " +
                                            (a.valid ? "valid" : "invalid") +
                                            " " +
                                            (h ? "real-today" : ""),
                                    };
                                    0 === i &&
                                        f.showWeekNumbers &&
                                        l.push(
                                            '<td><div class="week-number" data-start-time="' +
                                                a.time +
                                                '">' +
                                                f.getWeekNumber(a.date) +
                                                "</div></td>"
                                        ),
                                        l.push(
                                            "<td " +
                                                $({}, f.dayTdAttrs, a) +
                                                "><div " +
                                                $(p, f.dayDivAttrs, a) +
                                                ">" +
                                                J(a.time, a.day) +
                                                "</div></td>"
                                        );
                                }
                                l.push("</tr>");
                            }
                            return l.join("");
                        })(e)
                    ),
                    (f[t] = e),
                    w(),
                    m
                        .find(".day")
                        .off("click")
                        .on("click", function (e) {
                            k(U(this));
                        }),
                    m
                        .find(".day")
                        .off("mouseenter")
                        .on("mouseenter", function (e) {
                            y(U(this));
                        }),
                    m
                        .find(".day")
                        .off("mouseleave")
                        .on("mouseleave", function (e) {
                            m.find(".date-range-length-tip").hide(),
                                f.singleDate && b();
                        }),
                    m
                        .find(".week-number")
                        .off("click")
                        .on("click", function (e) {
                            var t, a, n, r;
                            (t = U(this)),
                                (r = parseInt(t.attr("data-start-time"), 10)),
                                f.startWeek
                                    ? (m
                                          .find(".week-number-selected")
                                          .removeClass("week-number-selected"),
                                      (a = new Date(
                                          r < f.startWeek ? r : f.startWeek
                                      )),
                                      (n = new Date(
                                          r < f.startWeek ? f.startWeek : r
                                      )),
                                      (f.startWeek = !1),
                                      (f.start = Q(a)
                                          .day(
                                              "monday" == f.startOfWeek ? 1 : 0
                                          )
                                          .valueOf()),
                                      (f.end = Q(n)
                                          .day(
                                              "monday" == f.startOfWeek ? 7 : 6
                                          )
                                          .valueOf()))
                                    : ((f.startWeek = r),
                                      t.addClass("week-number-selected"),
                                      (a = new Date(r)),
                                      (f.start = Q(a)
                                          .day(
                                              "monday" == f.startOfWeek ? 1 : 0
                                          )
                                          .valueOf()),
                                      (f.end = Q(a)
                                          .day(
                                              "monday" == f.startOfWeek ? 7 : 6
                                          )
                                          .valueOf())),
                                w(),
                                M(),
                                S(),
                                C(),
                                x();
                        }),
                    m
                        .find(".month")
                        .off("change")
                        .on("change", function (e) {
                            D(U(this));
                        }),
                    m
                        .find(".year")
                        .off("change")
                        .on("change", function (e) {
                            D(U(this));
                        });
            }
            function V(e, t, a) {
                var n = [];
                a =
                    a ||
                    function (e) {
                        return e;
                    };
                for (var r = e.minVisible; r <= e.maxVisible; r++)
                    n.push({
                        value: r,
                        text: a(r),
                        selected: r === t,
                        disabled: r < e.minSelectable || r > e.maxSelectable,
                    });
                return n;
            }
            function P(e, t) {
                for (
                    var a,
                        n =
                            '<div class="select-wrapper"><select class="' +
                            e +
                            '" name="' +
                            e +
                            '">',
                        r = 0,
                        s = t.length;
                    r < s;
                    r++
                ) {
                    var o = t[r];
                    (n +=
                        '<option value="' +
                        o.value +
                        '"' +
                        (o.selected ? " selected" : "") +
                        (o.disabled ? " disabled" : "") +
                        ">" +
                        o.text +
                        "</option>"),
                        o.selected && (a = o.text);
                }
                return (n += "</select>" + a + "</div>");
            }
            function Y(e, t) {
                m
                    .find("." + t)
                    .append(
                        "<div><span>" +
                            K("Time") +
                            ': <span class="hour-val">00</span>:<span class="minute-val">00</span></span></div><div class="hour"><label>' +
                            K("Hour") +
                            ': <input type="range" class="hour-range" name="hour" min="0" max="23"></label></div><div class="minute"><label>' +
                            K("Minute") +
                            ': <input type="range" class="minute-range" name="minute" min="0" max="59"></label></div>'
                    ),
                    u(t, e);
            }
            function A(e) {
                return K("month-name")[e];
            }
            function W(e) {
                return Q(e).format(f.format);
            }
            function I() {
                C();
                var e = parseInt(Q(f.month1).format("YYYYMM")),
                    t = parseInt(Q(f.month2).format("YYYYMM")),
                    a = Math.abs(e - t);
                1 < a && 89 != a
                    ? m
                          .addClass("has-gap")
                          .removeClass("no-gap")
                          .find(".gap")
                          .css("visibility", "visible")
                    : m
                          .removeClass("has-gap")
                          .addClass("no-gap")
                          .find(".gap")
                          .css("visibility", "hidden");
                var n = m.find("table.month1").height(),
                    r = m.find("table.month2").height();
                m.find(".gap").height(Math.max(n, r) + 10);
            }
            function B() {
                if (!f.alwaysOpen) {
                    var e = function () {
                        U(n).data("date-picker-opened", !1),
                            U(n).trigger("datepicker-closed", {
                                relatedTarget: m,
                            });
                    };
                    f.customCloseAnimation
                        ? f.customCloseAnimation.call(m.get(0), e)
                        : U(m).slideUp(f.duration, e),
                        U(n).trigger("datepicker-close", { relatedTarget: m });
                }
            }
            function N() {
                O(f.month1, "month1"), O(f.month2, "month2");
            }
            function L(e, t) {
                var a =
                    parseInt(Q(e).format("YYYYMM")) -
                    parseInt(Q(t).format("YYYYMM"));
                return 0 < a ? 1 : 0 === a ? 0 : -1;
            }
            function H(e, t) {
                var a =
                    parseInt(Q(e).format("YYYYMMDD")) -
                    parseInt(Q(t).format("YYYYMMDD"));
                return 0 < a ? 1 : 0 === a ? 0 : -1;
            }
            function F(e) {
                return Q(e).add(1, "months").toDate();
            }
            function R(e) {
                return Q(e).add(-1, "months").toDate();
            }
            function E() {
                var e = f.showWeekNumbers
                    ? "<th>" + K("week-number") + "</th>"
                    : "";
                return "monday" == f.startOfWeek
                    ? e +
                          "<th>" +
                          K("week-1") +
                          "</th><th>" +
                          K("week-2") +
                          "</th><th>" +
                          K("week-3") +
                          "</th><th>" +
                          K("week-4") +
                          "</th><th>" +
                          K("week-5") +
                          "</th><th>" +
                          K("week-6") +
                          "</th><th>" +
                          K("week-7") +
                          "</th>"
                    : e +
                          "<th>" +
                          K("week-7") +
                          "</th><th>" +
                          K("week-1") +
                          "</th><th>" +
                          K("week-2") +
                          "</th><th>" +
                          K("week-3") +
                          "</th><th>" +
                          K("week-4") +
                          "</th><th>" +
                          K("week-5") +
                          "</th><th>" +
                          K("week-6") +
                          "</th>";
            }
            function q(e) {
                return (
                    (e = Q(e)),
                    !(
                        !f.startDate || !e.endOf("month").isBefore(f.startDate)
                    ) || !(!f.endDate || !e.startOf("month").isAfter(f.endDate))
                );
            }
            function $(e, t, r) {
                var s = U.extend(!0, {}, e);
                U.each(t, function (e, t) {
                    var a = t(r);
                    for (var n in a)
                        s.hasOwnProperty(n) ? (s[n] += a[n]) : (s[n] = a[n]);
                });
                var a = "";
                for (var n in s)
                    s.hasOwnProperty(n) && (a += n + '="' + s[n] + '" ');
                return a;
            }
            function J(e, t) {
                return f.showDateFilter && "function" == typeof f.showDateFilter
                    ? f.showDateFilter(e, t)
                    : t;
            }
            function K(e) {
                var t = e.toLowerCase(),
                    a = e in r ? r[e] : t in r ? r[t] : null,
                    n = U.dateRangePickerLanguages.default;
                return null == a && (a = e in n ? n[e] : t in n ? n[t] : ""), a;
            }
            function _() {
                var e = f.defaultTime ? f.defaultTime : new Date();
                return (
                    f.lookBehind
                        ? (f.startDate &&
                              L(e, f.startDate) < 0 &&
                              (e = F(Q(f.startDate).toDate())),
                          f.endDate &&
                              0 < L(e, f.endDate) &&
                              (e = Q(f.endDate).toDate()))
                        : (f.startDate &&
                              L(e, f.startDate) < 0 &&
                              (e = Q(f.startDate).toDate()),
                          f.endDate &&
                              0 < L(F(e), f.endDate) &&
                              (e = R(Q(f.endDate).toDate()))),
                    f.singleDate &&
                        (f.startDate &&
                            L(e, f.startDate) < 0 &&
                            (e = Q(f.startDate).toDate()),
                        f.endDate &&
                            0 < L(e, f.endDate) &&
                            (e = Q(f.endDate).toDate())),
                    e
                );
            }
            function G(e) {
                e || (e = _()),
                    f.lookBehind
                        ? (O(R(e), "month1"), O(e, "month2"))
                        : (O(e, "month1"), O(F(e), "month2")),
                    f.singleDate && O(e, "month1"),
                    C(),
                    I();
            }
            function Z(e) {
                var t, a;
                (t = e),
                    (a = n[0]).contains(t.target) ||
                        t.target == a ||
                        (null != a.childNodes &&
                            0 <= U.inArray(t.target, a.childNodes)) ||
                        (m.is(":visible") && B());
            }
        });
});
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
$(() => {
    const t = document.querySelector("#date_range_picker"),
        i = document.querySelector("#starting_date"),
        r = document.querySelector("#ending_date");
    if (t) {
        const n = "YYYY-MM-DD";
        $(t)
            .dateRangePicker({
                format: n,
                separator: " " + t.dataset.separator + " ",
            })
            .bind("datepicker-change", function (t, u) {
                i.value = moment(u.date1).format(n);
                r.value = moment(u.date2).format(n);
            });
        $(t).data("dateRangePicker").setDateRange(i.value, r.value);
    }
    const n = document.querySelector("#refresh_loyalty_point"),
        u = document.querySelector("#player_loyalty_point");
    if (n) {
        const t = async () => {
            n.dataset.loading !== "true" &&
                ((n.dataset.loading = !0),
                await window.$.ajax({
                    type: "GET",
                    url: "/Account/ScheduledUpdate",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: (n) => {
                        const t = n.loyalty;
                        t && (u.innerText = t.loyaltyPoint);
                    },
                    error: function (n) {
                        const t = n.getResponseHeader("Redirect-Reason");
                        n.status === 200 &&
                            t &&
                            (window.closeWindows(),
                            (window.location.href = "/home/" + t));
                    },
                }),
                (n.dataset.loading = !1));
        };
        n.onclick = t;
    }
    window.initializeEventCalendarPage = (n) => {
        const t = document.querySelector("#event_list_container"),
            u = document.querySelector("#event_calendar");
        n.events &&
            n.events.forEach((n) => {
                (n._fromDate = moment(n.fromDate)),
                    (n._toDate = n.toDate ? moment(n.toDate) : null);
            });
        const f = moment(),
            i = (t) =>
                n.events.filter((n) =>
                    t.isSame(n._fromDate, "day")
                        ? !0
                        : n._toDate
                        ? t.isSame(n._toDate, "day")
                            ? !0
                            : n._fromDate.isBefore(t, "day") &&
                              n._toDate.isAfter(t, "day")
                        : !1
                ),
            r = (r) => {
                const o = i(r);
                if (((t.innerHTML = ""), o.length == 0)) {
                    const i = document.createElement("div");
                    i.className = "no-event";
                    i.innerText = n.translations.noEvent;
                    t.appendChild(i);
                    return;
                }
                const u = document.createElement("div");
                u.className = "event-date";
                const s = document.createElement("div");
                s.classList.add("glyphicon", "glyphicon-calendar");
                const f = document.createElement("span");
                f.className = "selected-event-date";
                f.innerText = moment(r).format("dddd, DD MMM");
                u.appendChild(s);
                u.appendChild(f);
                const e = document.createElement("div");
                e.className = "event-list";
                o.forEach((t) => {
                    const r = document.createElement("div");
                    r.className = "event-item";
                    const u = document.createElement("div");
                    if (((u.className = "event-image-container"), t.iconPath)) {
                        const i = document.createElement("img");
                        i.src = n.imagePath + t.iconPath;
                        u.appendChild(i);
                    }
                    const i = document.createElement("div");
                    if (((i.className = "event-info"), t.eventTitle)) {
                        const n = document.createElement("span");
                        n.className = "event-title";
                        n.innerText = t.eventTitle;
                        i.appendChild(n);
                    }
                    if (t.eventName) {
                        const n = document.createElement("span");
                        n.className = "event-luckydraw-name";
                        n.innerText = t.eventName;
                        i.appendChild(n);
                    }
                    if (t.eventTime) {
                        const n = document.createElement("span");
                        n.className = "event-luckydraw-time";
                        n.innerText = t.eventTime;
                        i.appendChild(n);
                    }
                    r.appendChild(u);
                    r.appendChild(i);
                    e.appendChild(r);
                });
                t.appendChild(u);
                t.appendChild(e);
            };
        $(u)
            .dateRangePicker({
                format: "YYYY-MM-DD",
                inline: !0,
                container: "#calendar_container",
                alwaysOpen: !0,
                singleMonth: !0,
                singleDate: !0,
                showDateFilter: function (n, t) {
                    const r = i(moment(n)),
                        u = r.length > 0,
                        f = r.some((n) => n.isGroupEvent),
                        e = f ? "group-event" : u ? "special-event" : "";
                    return `
                        <div class="${e}" style="padding: 10px;">
                            <span>${t}</span>
                        </div>
                    `;
                },
            })
            .bind("datepicker-first-date-selected", function (n, t) {
                r(moment(t.date1));
            });
        r(f);
    };
    window.initializeBenefitPage = (n) => {
        const i = document.querySelector("#level_progress_section"),
            t = document.querySelector("#level_name"),
            r = { Bronze: 0, Silver: 1, Gold: 2, Platinum: 3, Diamond: 4 };
        if (i) {
            $(i).slick({
                centerMode: !0,
                centerPadding: "60px",
                slidesToShow: 1,
                variableWidth: !0,
                infinite: !1,
                draggable: !1,
                swipe: !0,
                swipeToSlide: !0,
                slidesToScroll: 1,
                touchMove: !1,
                accessibilty: !1,
            });
            const u = document.querySelector("#benefit_section");
            $(u).slick({
                centerMode: !1,
                centerPadding: "60px",
                slidesToShow: 1,
                variableWidth: !0,
                infinite: !1,
                draggable: !1,
                swipe: !1,
                swipeToSlide: !1,
                touchMove: !1,
                accessibilty: !1,
                dots: !1,
                prevArrow: !1,
                nextArrow: !1,
            });
            const f = (n) => {
                    $(u).slick("slickGoTo", n);
                },
                e = () => {
                    if (t) {
                        const u = document.querySelector(".slick-current"),
                            i = document.querySelector("#level_xp_container"),
                            f = r[n.currentLevel],
                            e = r[u.dataset.level],
                            o = u.dataset.xpToUnlock;
                        if (
                            ((t.innerText = u.dataset.level),
                            (t.style.backgroundImage = `url('${n.frameImagePath}frame-${u.dataset.level}.png')`),
                            (i.innerHTML = ""),
                            f == e &&
                                (i.innerHTML = `${n.currentLevelIcon} ${n.currentLevelText}`),
                            e - f == 1)
                        ) {
                            i.innerHTML = `<i class="glyphicon glyphicon-lock"></i> ${n.currentXP} / ${o}`;
                            return;
                        }
                        f > e &&
                            (i.innerHTML = `${n.passedLevelIcon} ${n.passedLevelText}`);
                        f < e &&
                            (i.innerHTML = `<i class="glyphicon glyphicon-lock"></i> 0 / ${o.toLocaleString()}`);
                    }
                },
                o = document.querySelector(".slick-prev"),
                s = document.querySelector(".slick-next");
            o.innerHTML = n.prevButton;
            s.innerHTML = n.nextButton;
            o.onclick = () => {
                const n = document.querySelector(".slick-current"),
                    t = n.dataset.slickIndex;
                f(t);
                e();
            };
            s.onclick = () => {
                const n = document.querySelector(".slick-current"),
                    t = n.dataset.slickIndex;
                f(t);
                e();
            };
            $(i).on("swipe", function (n, t) {
                f(t.currentSlide);
                e();
            });
            const h = (f) => {
                const e = r[f];
                $(i).slick("slickGoTo", e);
                t.innerText = f;
                t.style.backgroundImage = `url('${n.frameImagePath}frame-${f}.png')`;
                $(u).slick("slickGoTo", e);
            };
            h(n.currentLevel);
        }
    };
    window.initializeMissionPage = () => {
        const t = () => registerPopup({ content: "Server Error." }),
            i = (n, i, r) => {
                $.ajax({
                    type: "POST",
                    url: "/Loyalty/ClaimMission",
                    data: JSON.stringify({
                        missionId: n,
                        enumOneTimeMission: i,
                    }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (n) {
                        registerPopup({
                            content: n.message,
                            onClose: function () {
                                n.errorCode === 0 && location.reload();
                            },
                        });
                    },
                    error: t,
                    complete: r,
                });
            },
            n = document.querySelectorAll(".claim_button");
        $(n).click(function () {
            const t = this;
            $(n).prop("disabled", !0);
            i(t.dataset.recId, t.dataset.enumOneTimeMission, () =>
                $(n).prop("disabled", !1)
            );
        });
    };
    window.initializeProgressHistory = () => {
        const n = document.querySelector("#available_point_type"),
            t = document.querySelector("#selected_filter_label");
        if (n) {
            const i = document.querySelectorAll(".history_item_filter"),
                r = () => {
                    Array.prototype.slice.call(i).forEach((t) => {
                        let i = !1;
                        const r = (n && n.value) || null;
                        r && t.dataset.pointType !== r && (i = !0);
                        t.hidden = i;
                    }),
                        (t.innerText = n.options[n.selectedIndex].text);
                };
            n.onchange = r;
        }
    };
    window.initializeLoyaltyLandingIntro = (n) => {
        const t = document.querySelector("#loyalty_menu");
        if (t) {
            const i = () =>
                    document.querySelectorAll(".modal.show").length > 0 ||
                    document.querySelectorAll(".modal.in").length > 0,
                r = async () => {
                    await window.$.ajax({
                        type: "POST",
                        url: "/Profile/UpdateUserAction",
                        data: JSON.stringify({
                            userAction: "GuidanceForLoyaltyPage",
                        }),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                    });
                },
                t = () => {
                    setTimeout(function () {
                        if (i() == !1) {
                            let t = [
                                {
                                    title: n.missionTitle,
                                    element: document.querySelector(
                                        "#loyalty_menu_mission"
                                    ),
                                    intro: `<div class='subtitle'>${n.missionSubtitle}</div><p>${n.missionContent}</p>`,
                                },
                                {
                                    title: n.redemptionTitle,
                                    element: document.querySelector(
                                        "#loyalty_menu_redemption"
                                    ),
                                    intro: `<div class='subtitle'>${n.redemptionSubtitle}</div><p>${n.redemptionContent}</p>`,
                                    position: "left",
                                },
                            ];
                            n.enableLuckyDrawResult == "true" &&
                                t.splice(2, 0, {
                                    title: n.luckyDrawResultTitle,
                                    element: document.querySelector(
                                        "#loyalty_menu_lucky_draw"
                                    ),
                                    intro: `<div class='subtitle'>${n.luckyDrawResultSubtitle}</div><p>${n.luckyDrawResultContent}</p>`,
                                });
                            introJs()
                                .setOptions({ steps: t, scrollToElement: !1 })
                                .start();
                            r();
                        }
                    }, 1e3);
                };
            $(document).on("hidden.bs.modal", t);
            t();
        }
    };
});
