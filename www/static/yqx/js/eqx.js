! function(e) {
    function t(n) { if (i[n]) return i[n].exports; var o = i[n] = { exports: {}, id: n, loaded: !1 }; return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports } var n = window.webpackJsonp;
    window.webpackJsonp = function(i, r) { for (var s, a, c = 0, u = []; c < i.length; c++) a = i[c], o[a] && u.push.apply(u, o[a]), o[a] = 0; for (s in r) e[s] = r[s]; for (n && n(i, r); u.length;) u.shift().call(null, t) }; var i = {},
        o = { 0: 0 }; return t.e = function(e, n) { if (0 === o[e]) return n.call(null, t); if (void 0 !== o[e]) o[e].push(n);
        else { o[e] = [n]; var i = document.getElementsByTagName("head")[0],
                r = document.createElement("script");
            r.type = "text/javascript", r.charset = "utf-8", r.async = !0, r.src = t.p + "" + e + ".view-d7373c4.min.js", i.appendChild(r) } }, t.m = e, t.c = i, t.p = "//ketang.gzxinbibo.com/static/yqx/img/", t(0) }([function(e, t, n) { e.exports = n(1) }, function(e, t, n) { "use strict";

    function i() { f().then(function(e) { window.scene = e, s(e), p.setUp(e); var t = void 0,
                n = e.isTemplate,
                i = e.bizType;
            n ? 1 === n ? t = 121 : 2 === n && (t = 221) : t = i ? 211 : 111; var c = void 0,
                u = window.location.host;
            c = u.indexOf(h.EQX_AD_DOMAIN) !== -1 ? 1 : u.indexOf(h.EQX_TG) !== -1 ? 2 : u.indexOf(h.EQX_VIP_DOMAIN) !== -1 ? 4 : u.indexOf(h.EQX_APP_DOMAIN) !== -1 ? 5 : u.indexOf(h.EQX_COMPANY_DOMAIN) !== -1 ? 3 : 6; var l = new Promise(function(e) { T() ? e() : (x(), I(t, c).then(function(t) { var n = t.obj;
                    n && o(n), w(), e() })["catch"](function() { w(), e() })) });
            l.then(function() { var t = Promise.resolve(null);
                v() && (t = function() { var t = location.href.split("#")[0]; return e.property.wxAuth ? m().then(function(n) { return n.obj ? (y.setWeChatUser(n.obj), y.initWeChat({ obj: e }, t), n.obj) : void y.hrefToWxAuth() })["catch"](function(e) { console.error(e) }) : Promise.resolve(y.initWeChat({ obj: e }, t)) }()), g(e).then(function(e) { return e.list.length ? (e.map.wxComponent && y.setWxCompData(e.map.wxComponent), void t.then(function(t) { new k(e).addPageFn(_).addEleFn(P(e, t)).addEleFn(E).start(), r(e) })) : void a() }) }) }) }

    function o() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = $(".loading"); if (e.backgroundSrc && t.css({ backgroundImage: "url('" + (h.FILE + e.backgroundSrc) + "')", backgroundColor: "none", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }), e.logoSrc) { var n = t.find(".loadbg");
            n.css({ backgroundImage: "url('" + (h.FILE + e.logoSrc) + "')", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center", width: "70px", height: "70px" }), e.logoLink && n.click(function() { window.location.href = e.logoLink }) } if (e.brandSrc) { var i = $('<div class="loading-brand"></div>').appendTo(t);
            i.css({ backgroundImage: "url('" + (h.FILE + e.brandSrc) + "')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "40px", position: "absolute", left: "0", bottom: "0", zIndex: "9999" }), e.brandLink && i.click(function() { window.location.href = e.logoLink }) } }

    function r(e) { var t = window.location.href,
            n = O.getUrlParam("toPage");
        t.indexOf("toPage") > -1 && O.replaceLocationHref(O.removeUrlParam("toPage")); var i = { param: t.split("?")[1], selector: "#nr", mode: "view", disableBigData: !1, toPageIndex: c(e, n) },
            o = new b(e, i);
        window.app = o, window.viewData || o.config.disableBigData || S(o.meta.id, 0, null, null, null, document.referrer, window.location.href), setTimeout(function() { x() }), o.renderScene(), $("#pre_page").click(function() { o.pageScroll.goToPrePage() }), $("#next_page").click(function() { o.pageScroll.goToNextPage() }) }

    function s(e) { var t = parseInt(e.userType || 2),
            n = parseInt(e.memberType || 1);
        d(location.host) ? [2, 21].includes(t) && [1, 2, 3, 4, 6, 7, 8, 9].includes(n) && (h.FILE = h.VIP_USER_FILE) : (h.SOURCE = h.BIND_USER_SOURCE, h.FILE = h.BIND_USER_FILE) }

    function a() { alert("此场景不存在!") }

    function c(e, t) { var n = 0; return t ? (e.list.forEach(function(e, i) { e.id == t && (n = i) }), n) : n } n(2), n(3), n(15); var u = n(16);
    n(17).disableScreenElasticity(), n(18).disableWxFontSize(), window._DEBUG_ = u.DEBUG, n(27); var l = n(28),
        p = n(29),
        h = n(20),
        d = n(39).isEqxHost,
        f = n(50).$getSceneMetaData,
        g = n(54).getPerfectSceneData;
    l.setUp(); var v = n(23).isWeixin,
        m = n(76).$getUserWxInfo,
        y = n(77),
        b = n(82),
        x = n(29).stopLoading,
        w = n(29).startLoading,
        k = n(60),
        P = n(327).wxAdaptor,
        _ = n(63).perfectPage,
        E = n(66).perfectComp,
        S = n(79).bigDataXBData,
        O = n(22),
        I = n(58).$getLoadPageConfig,
        T = n(23).mobilecheck;
    $(function() { i() }) }, function(e, t) {}, function(e, t, n) { "use strict";
    n(4), n(11), n(14) }, function(e, t, n) { n(5), n(6), n(7), n(8), n(9), n(10) }, function(e, t) {! function(e) { e.forEach(function(e) { e.hasOwnProperty("replaceWith") || Object.defineProperty(e, "replaceWith", { configurable: !0, enumerable: !0, writable: !0, value: function() { var e = Array.prototype.slice.call(arguments),
                        t = document.createDocumentFragment();
                    e.forEach(function(e) { var n = e instanceof Node;
                        t.appendChild(n ? e : document.createTextNode(String(e))) }), this.parentNode.replaceChild(t, this) } }) }) }([Element.prototype, CharacterData.prototype, DocumentType.prototype]) }, function(e, t) {! function() { Math.hypot = Math.hypot || function() { for (var e = 0, t = arguments.length, n = 0; n < t; n++) { if (arguments[n] === 1 / 0 || arguments[n] === -(1 / 0)) return 1 / 0;
                e += arguments[n] * arguments[n] } return Math.sqrt(e) } }() }, function(e, t) {! function() { "function" != typeof Object.values && ! function() { Object.values = function(e) { "use strict"; if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object"); var t = []; for (var n in e) e.hasOwnProperty(n) && t.push(e[n]); return t } }(), "function" != typeof Object.assign && ! function() { Object.assign = function(e) { "use strict"; if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object"); for (var t = Object(e), n = 1; n < arguments.length; n++) { var i = arguments[n]; if (void 0 !== i && null !== i)
                        for (var o in i) i.hasOwnProperty(o) && (t[o] = i[o]) } return t } }() }() }, function(e, t) {! function() { Number.isInteger = Number.isInteger || function(e) { return "number" == typeof e && isFinite(e) && Math.floor(e) === e }, Number.isNaN = Number.isNaN || function(e) { return "number" == typeof e && isNaN(e) }, Number.parseInt = parseInt, Number.parseFloat = parseFloat }() }, function(e, t) {! function() { String.prototype.includes || (String.prototype.includes = function(e, t) { "use strict"; return "number" != typeof t && (t = 0), !(t + e.length > this.length) && this.indexOf(e, t) !== -1 }), String.prototype.startsWith || (String.prototype.startsWith = function(e, t) { return t = t || 0, this.substr(t, e.length) === e }), String.prototype.endsWith || (String.prototype.endsWith = function(e, t) { var n = this.toString();
            ("number" != typeof t || !isFinite(t) || Math.floor(t) !== t || t > n.length) && (t = n.length), t -= e.length; var i = n.indexOf(e, t); return i !== -1 && i === t }) }() }, function(e, t) {! function() { Array.isArray || (Array.isArray = function(e) { return "[object Array]" === Object.prototype.toString.call(e) }), Array.prototype.includes || (Array.prototype.includes = function(e) { "use strict"; var t = Object(this),
                n = parseInt(t.length) || 0; if (0 === n) return !1; var i, o = parseInt(arguments[1]) || 0;
            o >= 0 ? i = o : (i = n + o, i < 0 && (i = 0)); for (var r; i < n;) { if (r = t[i], e === r || e !== e && r !== r) return !0;
                i++ } return !1 }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", { value: function(e) { "use strict"; if (null == this) throw new TypeError("Array.prototype.findIndex called on null or undefined"); if ("function" != typeof e) throw new TypeError("predicate must be a function"); for (var t, n = Object(this), i = n.length >>> 0, o = arguments[1], r = 0; r < i; r++)
                    if (t = n[r], e.call(o, t, r, n)) return r; return -1 }, enumerable: !1, configurable: !1, writable: !1 }), Array.prototype.find || (Array.prototype.find = function(e) { if (null === this) throw new TypeError("Array.prototype.find called on null or undefined"); if ("function" != typeof e) throw new TypeError("predicate must be a function"); for (var t, n = Object(this), i = n.length >>> 0, o = arguments[1], r = 0; r < i; r++)
                if (t = n[r], e.call(o, t, r, n)) return t }), Array.from || (Array.from = function() { var e = Object.prototype.toString,
                t = function(t) { return "function" == typeof t || "[object Function]" === e.call(t) },
                n = function(e) { var t = Number(e); return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t },
                i = Math.pow(2, 53) - 1,
                o = function(e) { var t = n(e); return Math.min(Math.max(t, 0), i) }; return function(e) { var n = this,
                    i = Object(e); if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined"); var r, s = arguments.length > 1 ? arguments[1] : void 0; if ("undefined" != typeof s) { if (!t(s)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                    arguments.length > 2 && (r = arguments[2]) } for (var a, c = o(i.length), u = t(n) ? Object(new n(c)) : new Array(c), l = 0; l < c;) a = i[l], s ? u[l] = "undefined" == typeof r ? s(a, l) : s.call(r, a, l) : u[l] = a, l += 1; return u.length = c, u } }()) }() }, function(e, t, n) {
    (function(t) {! function(n) {
            function i() {}

            function o(e, t) { return function() { e.apply(t, arguments) } }

            function r(e) { if ("object" != typeof this) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof e) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], p(e, this) }

            function s(e, t) { for (; 3 === e._state;) e = e._value; return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void d(function() { var n = 1 === e._state ? t.onFulfilled : t.onRejected; if (null === n) return void(1 === e._state ? a : c)(t.promise, e._value); var i; try { i = n(e._value) } catch (o) { return void c(t.promise, o) } a(t.promise, i) })) }

            function a(e, t) { try { if (t === e) throw new TypeError("A promise cannot be resolved with itself."); if (t && ("object" == typeof t || "function" == typeof t)) { var n = t.then; if (t instanceof r) return e._state = 3, e._value = t, void u(e); if ("function" == typeof n) return void p(o(n, t), e) } e._state = 1, e._value = t, u(e) } catch (i) { c(e, i) } }

            function c(e, t) { e._state = 2, e._value = t, u(e) }

            function u(e) { 2 === e._state && 0 === e._deferreds.length && setTimeout(function() { e._handled || f(e._value) }, 1); for (var t = 0, n = e._deferreds.length; t < n; t++) s(e, e._deferreds[t]);
                e._deferreds = null }

            function l(e, t, n) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n }

            function p(e, t) { var n = !1; try { e(function(e) { n || (n = !0, a(t, e)) }, function(e) { n || (n = !0, c(t, e)) }) } catch (i) { if (n) return;
                    n = !0, c(t, i) } } var h = setTimeout,
                d = "function" == typeof t && t || function(e) { h(e, 1) },
                f = function(e) { console.warn("Possible Unhandled Promise Rejection:", e) },
                g = Array.isArray || function(e) { return "[object Array]" === Object.prototype.toString.call(e) };
            r.prototype["catch"] = function(e) { return this.then(null, e) }, r.prototype.then = function(e, t) { var n = new r(i); return s(this, new l(e, t, n)), n }, r.all = function() { var e = Array.prototype.slice.call(1 === arguments.length && g(arguments[0]) ? arguments[0] : arguments); return new r(function(t, n) {
                    function i(r, s) { try { if (s && ("object" == typeof s || "function" == typeof s)) { var a = s.then; if ("function" == typeof a) return void a.call(s, function(e) { i(r, e) }, n) } e[r] = s, 0 === --o && t(e) } catch (c) { n(c) } } if (0 === e.length) return t([]); for (var o = e.length, r = 0; r < e.length; r++) i(r, e[r]) }) }, r.resolve = function(e) { return e && "object" == typeof e && e.constructor === r ? e : new r(function(t) { t(e) }) }, r.reject = function(e) { return new r(function(t, n) { n(e) }) }, r.race = function(e) { return new r(function(t, n) { for (var i = 0, o = e.length; i < o; i++) e[i].then(t, n) }) }, r._setImmediateFn = function(e) { d = e }, r._setUnhandledRejectionFn = function(e) { f = e }, Promise ? r = Promise : Promise = r, "undefined" != typeof e && e.exports ? e.exports = r : n.Promise || (n.Promise = r), r.prototype["finally"] = function(e) { var t = this.constructor; return this.then(function(n) { return t.resolve(e()).then(function() { return n }) }, function(n) { return t.resolve(e()).then(function() { throw n }) }) } }(this) }).call(t, n(12).setImmediate) }, function(e, t, n) {
    (function(e, i) {
        function o(e, t) { this._id = e, this._clearFn = t } var r = n(13).nextTick,
            s = Function.prototype.apply,
            a = Array.prototype.slice,
            c = {},
            u = 0;
        t.setTimeout = function() { return new o(s.call(setTimeout, window, arguments), clearTimeout) }, t.setInterval = function() { return new o(s.call(setInterval, window, arguments), clearInterval) }, t.clearTimeout = t.clearInterval = function(e) { e.close() }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() { this._clearFn.call(window, this._id) }, t.enroll = function(e, t) { clearTimeout(e._idleTimeoutId), e._idleTimeout = t }, t.unenroll = function(e) { clearTimeout(e._idleTimeoutId), e._idleTimeout = -1 }, t._unrefActive = t.active = function(e) { clearTimeout(e._idleTimeoutId); var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() { e._onTimeout && e._onTimeout() }, t)) }, t.setImmediate = "function" == typeof e ? e : function(e) { var n = u++,
                i = !(arguments.length < 2) && a.call(arguments, 1); return c[n] = !0, r(function() { c[n] && (i ? e.apply(null, i) : e.call(null), t.clearImmediate(n)) }), n }, t.clearImmediate = "function" == typeof i ? i : function(e) { delete c[e] } }).call(t, n(12).setImmediate, n(12).clearImmediate) }, function(e, t) {
    function n() { throw new Error("setTimeout has not been defined") }

    function i() { throw new Error("clearTimeout has not been defined") }

    function o(e) { if (l === setTimeout) return setTimeout(e, 0); if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0); try { return l(e, 0) } catch (t) { try { return l.call(null, e, 0) } catch (t) { return l.call(this, e, 0) } } }

    function r(e) { if (p === clearTimeout) return clearTimeout(e); if ((p === i || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e); try { return p(e) } catch (t) { try { return p.call(null, e) } catch (t) { return p.call(this, e) } } }

    function s() { g && d && (g = !1, d.length ? f = d.concat(f) : v = -1, f.length && a()) }

    function a() { if (!g) { var e = o(s);
            g = !0; for (var t = f.length; t;) { for (d = f, f = []; ++v < t;) d && d[v].run();
                v = -1, t = f.length } d = null, g = !1, r(e) } }

    function c(e, t) { this.fun = e, this.array = t }

    function u() {} var l, p, h = e.exports = {};! function() { try { l = "function" == typeof setTimeout ? setTimeout : n } catch (e) { l = n } try { p = "function" == typeof clearTimeout ? clearTimeout : i } catch (e) { p = i } }(); var d, f = [],
        g = !1,
        v = -1;
    h.nextTick = function(e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        f.push(new c(e, t)), 1 !== f.length || g || o(a) }, c.prototype.run = function() { this.fun.apply(null, this.array) }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = u, h.addListener = u, h.once = u, h.off = u, h.removeListener = u, h.removeAllListeners = u, h.emit = u, h.prependListener = u, h.prependOnceListener = u, h.listeners = function(e) { return [] }, h.binding = function(e) { throw new Error("process.binding is not supported") }, h.cwd = function() { return "/" }, h.chdir = function(e) { throw new Error("process.chdir is not supported") }, h.umask = function() { return 0 } }, function(e, t) {! function(e) { "use strict";

        function t(e) { var t = "",
                n = !0; return e.forEach(function(e) { var i = encodeURIComponent(e.name),
                    o = encodeURIComponent(e.value);
                n || (t += "&"), t += i + "=" + o, n = !1 }), t.replace(/%20/g, "+") }

        function n(e, t) { var n = e.split("&");
            t && n[0].indexOf("=") === -1 && (n[0] = "=" + n[0]); var i = [];
            n.forEach(function(e) { if (0 !== e.length) { var t = e.indexOf("="); if (t !== -1) var n = e.substring(0, t),
                        o = e.substring(t + 1);
                    else n = e, o = "";
                    n = n.replace(/\+/g, " "), o = o.replace(/\+/g, " "), i.push({ name: n, value: o }) } }); var o = []; return i.forEach(function(e) { o.push({ name: decodeURIComponent(e.name), value: decodeURIComponent(e.value) }) }), o }

        function i(e) { if (s) return new a(e); var t = document.createElement("a"); return t.href = e, t }

        function o(e) { var i = this;
            this._list = [], void 0 !== e && null !== e || (e = ""), Object(e) === e && e instanceof o || (e = String(e)), "string" == typeof e && "?" === e.substring(0, 1) && (e = e.substring(1)), "string" == typeof e ? this._list = n(e) : this._list = e._list.slice(), this._url_object = null, this._setList = function(e) { r || (i._list = e) }; var r = !1;
            this._update_steps = function() { r || (r = !0, i._url_object && ("about:" === i._url_object.protocol && i._url_object.pathname.indexOf("?") !== -1 && (i._url_object.pathname = i._url_object.pathname.split("?")[0]), i._url_object.search = t(i._list), r = !1)) } }

        function r(t, r) {
            function c() { var e = l.href.replace(/#$|\?$|\?(?=#)/g, "");
                l.href !== e && (l.href = e) }

            function u() { d._setList(l.search ? n(l.search.substring(1)) : []), d._update_steps() } if (!(this instanceof e.URL)) throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");
            r && (t = function() { if (s) return new a(t, r).href; var e; if (document.implementation && document.implementation.createHTMLDocument ? e = document.implementation.createHTMLDocument("") : document.implementation && document.implementation.createDocument ? (e = document.implementation.createElement("http://www.w3.org/1999/xhtml", "html", null), e.documentElement.appendChild(e.createElement("head")), e.documentElement.appendChild(e.createElement("body"))) : window.ActiveXObject && (e = new window.ActiveXObject("htmlfile"), e.write("<head></head><body></body>"), e.close()), !e) throw Error("base not supported"); var n = e.createElement("base");
                n.href = r, e.getElementsByTagName("head")[0].appendChild(n); var i = e.createElement("a"); return i.href = t, i.href }()); var l = i(t || ""),
                p = function() { if (!("defineProperties" in Object)) return !1; try { var e = {}; return Object.defineProperties(e, { prop: { get: function() { return !0 } } }), e.prop } catch (t) { return !1 } }(),
                h = p ? this : document.createElement("a"),
                d = new o(l.search ? l.search.substring(1) : null); return d._url_object = h, Object.defineProperties(h, { href: { get: function() { return l.href }, set: function(e) { l.href = e, c(), u() }, enumerable: !0, configurable: !0 }, origin: { get: function() { return "origin" in l ? l.origin : this.protocol + "//" + this.host }, enumerable: !0, configurable: !0 }, protocol: { get: function() { return l.protocol }, set: function(e) { l.protocol = e }, enumerable: !0, configurable: !0 }, username: { get: function() { return l.username }, set: function(e) { l.username = e }, enumerable: !0, configurable: !0 }, password: { get: function() { return l.password }, set: function(e) { l.password = e }, enumerable: !0, configurable: !0 }, host: { get: function() { var e = { "http:": /:80$/, "https:": /:443$/, "ftp:": /:21$/ }[l.protocol]; return e ? l.host.replace(e, "") : l.host }, set: function(e) { l.host = e }, enumerable: !0, configurable: !0 }, hostname: { get: function() { return l.hostname }, set: function(e) { l.hostname = e }, enumerable: !0, configurable: !0 }, port: { get: function() { return l.port }, set: function(e) { l.port = e }, enumerable: !0, configurable: !0 }, pathname: { get: function() { return "/" !== l.pathname.charAt(0) ? "/" + l.pathname : l.pathname }, set: function(e) { l.pathname = e }, enumerable: !0, configurable: !0 }, search: { get: function() { return l.search }, set: function(e) { l.search !== e && (l.search = e, c(), u()) }, enumerable: !0, configurable: !0 }, searchParams: { get: function() { return d }, enumerable: !0, configurable: !0 }, hash: { get: function() { return l.hash }, set: function(e) { l.hash = e, c() }, enumerable: !0, configurable: !0 }, toString: { value: function() { return l.toString() }, enumerable: !1, configurable: !0 }, valueOf: { value: function() { return l.valueOf() }, enumerable: !1, configurable: !0 } }), h } var s, a = e.URL; try { if (a) { if (s = new e.URL("http://example.com"), "searchParams" in s) return; "href" in s || (s = void 0) } } catch (c) {} if (Object.defineProperties(o.prototype, { append: { value: function(e, t) { this._list.push({ name: e, value: t }), this._update_steps() }, writable: !0, enumerable: !0, configurable: !0 }, "delete": { value: function(e) { for (var t = 0; t < this._list.length;) this._list[t].name === e ? this._list.splice(t, 1) : ++t;
                        this._update_steps() }, writable: !0, enumerable: !0, configurable: !0 }, get: { value: function(e) { for (var t = 0; t < this._list.length; ++t)
                            if (this._list[t].name === e) return this._list[t].value; return null }, writable: !0, enumerable: !0, configurable: !0 }, getAll: { value: function(e) { for (var t = [], n = 0; n < this._list.length; ++n) this._list[n].name === e && t.push(this._list[n].value); return t }, writable: !0, enumerable: !0, configurable: !0 }, has: { value: function(e) { for (var t = 0; t < this._list.length; ++t)
                            if (this._list[t].name === e) return !0; return !1 }, writable: !0, enumerable: !0, configurable: !0 }, set: { value: function(e, t) { for (var n = !1, i = 0; i < this._list.length;) this._list[i].name === e ? n ? this._list.splice(i, 1) : (this._list[i].value = t, n = !0, ++i) : ++i;
                        n || this._list.push({ name: e, value: t }), this._update_steps() }, writable: !0, enumerable: !0, configurable: !0 }, entries: { value: function() { var e = this,
                            t = 0; return { next: function() { if (t >= e._list.length) return { done: !0, value: void 0 }; var n = e._list[t++]; return { done: !1, value: [n.name, n.value] } } } }, writable: !0, enumerable: !0, configurable: !0 }, keys: { value: function() { var e = this,
                            t = 0; return { next: function() { if (t >= e._list.length) return { done: !0, value: void 0 }; var n = e._list[t++]; return { done: !1, value: n.name } } } }, writable: !0, enumerable: !0, configurable: !0 }, values: { value: function() { var e = this,
                            t = 0; return { next: function() { if (t >= e._list.length) return { done: !0, value: void 0 }; var n = e._list[t++]; return { done: !1, value: n.value } } } }, writable: !0, enumerable: !0, configurable: !0 }, forEach: { value: function(e) { var t = arguments.length > 1 ? arguments[1] : void 0;
                        this._list.forEach(function(n, i) { e.call(t, n.name, n.value) }) }, writable: !0, enumerable: !0, configurable: !0 }, toString: { value: function() { return t(this._list) }, writable: !0, enumerable: !1, configurable: !0 } }), "Symbol" in e && "iterator" in e.Symbol && Object.defineProperty(o.prototype, e.Symbol.iterator, { value: o.prototype.entries, writable: !0, enumerable: !0, configurable: !0 }), a)
            for (var u in a) a.hasOwnProperty(u) && "function" == typeof a[u] && (r[u] = a[u]);
        e.URL = r, e.URLSearchParams = o }(window) }, function(e, t) {}, function(e, t) { "use strict";
    e.exports = { publicHost: "//as.eqh5.com/", HOST: "//www.eqxiu.com/", EQX: "//www.eqxiu.com/", WAP_HOST: "//wap.eqxiu.com/", SERVER_0: "//service.eqxiu.com/", SERVER_0_VIP: "//vservice.eqxiu.com/", SERVER_1: "//ketang.gzxinbibo.com/", SERVER_2: "//ketang.gzxinbibo.com/", SERVER_MAX: "//ketang.gzxinbibo.com", QUERY_SERVER: "//ketang.gzxinbibo.com/", WAP_SERVER: "//ie.eqxiu.com/", BIG_DATA: "//ketang.gzxinbibo.com/", TRACK: "//da.eqxiu.com/", PAY_HOST: "//ketang.gzxinbibo.com/", MALL_HOST: "//store.eqxiu.com/", STORE: "//store.eqxiu.com/", YQC: "//as.eqh5.cn/", MALL_BUY_ID: "10002", MALL_PIC_ID: "889874", MALL_MUSIC_ID: "889875", MALL_SOUND_ID: "889877", MALL_FONT_ID: "889873", SOURCE: "//as.eqh5.com/c/", BIND_USER_SOURCE: "//ketang.gzxinbibo.com/c/", WX_APP_ID: "wx4726bc84d63ef524", DOMAIN: "eqxiu", EQX_TPL_DOMAIN: "h5.eqxiu.com", EQX_FAN_DOMAIN: "scene.eqxiu.com", EQX_AD_DOMAIN: "scene.eqh5.cn", EQX_VIP_DOMAIN: "vip.eqxiu.cn", EQX_COMPANY_DOMAIN: "scene.eqxiu.cn", EQX_TG: "tg.eqxiu.com", FILE: "//ketang.gzxinbibo.com/static/yqx/img/", BIND_USER_FILE: "//ketang.gzxinbibo.com/static/yqx/img/", FREE_USER_FILE: "//ketang.gzxinbibo.com/static/yqx/img/", VIP_USER_FILE: "//ketang.gzxinbibo.com/", FONT: "//font.eqh5.com/", VIDEO: "//ketang.gzxinbibo.com/", WAP_TPL_CENTER: "http://ie.eqxiu.com/act/12.html" } }, function(e, t) { "use strict";

    function n() { var e = $(window);
        e.on("scroll.elasticity", function(e) { e.preventDefault() }).on("touchmove.elasticity", function(e) { e.preventDefault() }), e.delegate("img", "mousemove", function(e) { e.preventDefault() }) } e.exports = { disableScreenElasticity: n } }, function(e, t, n) { "use strict";

    function i(e, t, n) { window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + e + "&redirect_uri=" + encodeURIComponent(t + "eqs/rel-account/wechat-mp?appId=" + e) + "&response_type=code&scope=snsapi_userinfo&state=" + encodeURIComponent(n) + "#wechat_redirect" }

    function o(e) { if (document.title = e, /ip(hone|od|ad)/i.test(navigator.userAgent)) { var t = document.createElement("iframe");
            t.src = "http://lib.eqh5.com/images/favicon.ico", t.style.display = "none", t.onload = function() { setTimeout(function() { t.remove() }, 9) }, document.body.appendChild(t) } }

    function r() {
        function e() { WeixinJSBridge.invoke("setFontSizeCallback", { fontSize: 0 }), WeixinJSBridge.on("menu:setfont", function() { WeixinJSBridge.invoke("setFontSizeCallback", { fontSize: 0 }) }) } y() && b() && ("object" == ("undefined" == typeof WeixinJSBridge ? "undefined" : l(WeixinJSBridge)) && "function" == typeof WeixinJSBridge.invoke ? e() : document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", e, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", e), document.attachEvent("onWeixinJSBridgeReady", e))) }

    function s() { var e = v(window.location.href),
            t = "uc/kanjia/ticket?time=" + Date.now(); return E.some(function(t) { return t.test(e) }) || (t += /eqxiu\.cn/.test(e) ? "&domain=eqxiu.cn" : "&domain=" + e), _ && console.log("getWxTicket", t), p({ type: "GET", url: h.SERVER_1 + t }) }

    function a(e) { return new Promise(function(t, n) { wx.chooseWXPay({ timestamp: e.timeStamp, nonceStr: e.nonceStr, "package": e.packageName, signType: e.signType, paySign: e.paySign, success: function(e) { t(e) }, cancel: function(e) { n(e) } }) }) }

    function c() { if ($) return $; var e = v(window.location.href),
            t = !!E.some(function(t) { return t.test(e) }),
            n = new Promise(function(e) { t ? p({ type: "GET", url: h.SERVER_1 + "eqs/wx/newticket", data: { appId: P } }).then(function(t) { return 200 === t.code ? e(t.obj) : void e(null) })["catch"](function() { e(null) }) : e(null) }); return $ = Promise.all([f(), s(), g(), n]).then(function(e) { _ && console.log(e); var n = e[1].obj,
                i = n.appId,
                o = n.ticket,
                r = e[3]; return new Promise(function(e, n) { if (i && o && o !== -1) { var s = location.href.split("#")[0],
                        a = "eqxiuview",
                        c = Date.now(),
                        u = "jsapi_ticket=" + (t ? r : o) + "&noncestr=" + a + "&timestamp=" + c + "&url=" + s,
                        l = new jsSHA("SHA-1", "TEXT");
                    l.update(u); var p = l.getHash("HEX");
                    console.log("wx config appId " + i + ", sign " + u + ", hash " + p), wx.config({ debug: !1, appId: t ? P : i, timestamp: c, nonceStr: a, signature: p, jsApiList: ["chooseWXPay", "checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "chooseImage", "previewImage", "getLocalImgData", "uploadImage", "downloadImage", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice", "downloadVoice"] }), wx.ready(function() { e() }) } else n() }) }) }

    function u(e) { var t = e.title,
            n = e.desc,
            i = e.link,
            o = e.imgUrl,
            r = e.success,
            s = e.cancel; return c().then(function() { wx.onMenuShareTimeline({ title: t, link: i, imgUrl: o, success: function() { w(r) && r() }, cancel: function() { w(s) && s() } }), wx.onMenuShareAppMessage({ title: t, desc: n, link: i, imgUrl: o, success: function() { w(r) && r() }, cancel: function() { w(s) && s() } }), wx.onMenuShareQQ({ title: t, desc: n, link: i, imgUrl: o, success: function() { w(r) && r() }, cancel: function() { w(s) && s() } }), wx.onMenuShareWeibo({ title: t, desc: n, link: i, imgUrl: o, success: function() { w(r) && r() }, cancel: function() { w(s) && s() } }), wx.onMenuShareQZone({ title: t, desc: n, link: i, imgUrl: o, success: function() { w(r) && r() }, cancel: function() { w(s) && s() } }) }) } var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        p = n(19).ajax,
        h = n(20),
        d = n(21),
        f = d.$loadJWeixin,
        g = d.$loadSHA,
        v = n(22).getUrlHost,
        m = n(23),
        y = m.isWeixin,
        b = m.isAndroid,
        x = n(25),
        w = x.isFunction,
        k = n(26),
        P = k.APP_ID,
        _ = !1,
        E = [/eqxiu\.com/, /eqh5\.cn/, /eqxiu\.cc/, /eqshow\.cn/, /yqxiu\.cn/],
        $ = null;
    e.exports = { register: i, disableWxFontSize: r, setDocumentTitle: o, initWx: c, setWxShareInfo: u, wxPay: a } }, function(e, t) { "use strict";

    function n(e) { return Promise.resolve(e) }

    function i(e) { 
    	console.log("ie----------"+JSON.stringify(e));
    	if(e.url&&e.url.indexOf('code=')>0){
    		var  str=e.url.split('=');
            // console.log("str----------"+JSON.stringify(str));
            var u=str[1].split('&');
            // console.log("window.scene----------"+JSON.stringify(window.scene.jsdata));
            e.url=window.scene.jsdata;
            // e.url='/static/yqx/data/'+u[0]+'.json';
    	}
    	return new Promise(function(t, n) { $.ajax($.extend({}, e, { success: function(e) { e && e.success === !1 ? n(e) : t(e) }, error: function() { for (var t, i = arguments.length, o = Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    (t = console).error.apply(t, [e].concat(o)), n.apply(void 0, o) } })) }) }

    function o(e) { 
		if(e.url&&e.url.indexOf('msg/list')>0){
		    		e.url='';
		}
    	return new Promise(function(t, n) { $.ajax($.extend({ xhrFields: { withCredentials: !0 }, crossDomain: !0 }, e, { success: function(e) { e && e.success === !1 ? n(e) : t(e) }, error: function() { for (var t, i = arguments.length, o = Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    (t = console).error.apply(t, [e].concat(o)), n.apply(void 0, o) } })) }) } e.exports = { ajax: o, $ajax: i, fajax: n } }, function(e, t, n) { "use strict";

    function i(e) { var t = window.location.protocol; return "file:" === t && (t = "http:"), e && e.startsWith("//") ? t + e : e } var o = n(16),
        r = { SERVER_0: o.SERVER_0, SERVER_0_VIP: o.SERVER_0_VIP, SERVER_1: o.SERVER_1, SERVER_2: o.SERVER_2, WAP_SERVER: o.WAP_SERVER, SERVER_MAX: o.SERVER_MAX, QUERY_SERVER: o.QUERY_SERVER, FONT: o.FONT, HOST: o.HOST, EQX: o.EQX, WAP_HOST: o.WAP_HOST, PAY_HOST: o.PAY_HOST, MALL_HOST: o.MALL_HOST, SOURCE: o.SOURCE, BIND_USER_SOURCE: o.BIND_USER_SOURCE, TRACK: o.TRACK, BIG_DATA: o.BIG_DATA, STORE: o.STORE, YQC: o.YQC, BIND_USER_FILE: o.BIND_USER_FILE, FREE_USER_FILE: o.FREE_USER_FILE, VIP_USER_FILE: o.VIP_USER_FILE, FILE: o.FILE, DOMAIN: o.DOMAIN, EQX_FAN_DOMAIN: o.EQX_FAN_DOMAIN, EQX_AD_DOMAIN: o.EQX_AD_DOMAIN, EQX_VIP_DOMAIN: o.EQX_VIP_DOMAIN, EQX_COMPANY_DOMAIN: o.EQX_COMPANY_DOMAIN, EQX_TG: o.EQX_TG, MALL_BUY_ID: o.MALL_BUY_ID, MALL_PIC_ID: o.MALL_PIC_ID, MALL_MUSIC_ID: o.MALL_MUSIC_ID, MALL_SOUND_ID: o.MALL_SOUND_ID, MALL_FONT_ID: o.MALL_FONT_ID, VIDEO: o.VIDEO, WAP_TPL_CENTER: o.WAP_TPL_CENTER, EQX_APP_DOMAIN: "m.eqxiu.com" };
    Object.keys(r).forEach(function(e) { var t = r[e];
        Array.isArray(t) ? t.forEach(function(e, n) { "string" == typeof e && (t[n] = i(e)) }) : r[e] = i(t) }), e.exports = r }, function(e, t, n) { "use strict";

    function i(e) { var t = e.name,
            n = e.src,
            i = b[t]; if (i) return Promise.resolve(i); var o = y({ url: v(n), dataType: "script" }).then(function() { for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i]; return b[t] = n, n }); return b[t] = o, o }

    function o() { return i({ name: "qrcode", src: m.QRCode }) }

    function r() { return i({ name: "sha", src: m.SHA }) }

    function s() { return x ? x : x = new Promise(function(e, t) { window.qqMapCallback = function() { e() }, i({ name: "qqmap", src: m.QQMap })["catch"](t) }) }

    function a() { return i({ name: "chart", src: m.Chart }) }

    function c() { return i({ name: "threecanvas", src: m.threecanvas }) }

    function u() { return i({ name: "flux", src: m.Flux }) }

    function l() { return i({ name: "", src: m.sliders }) }

    function p() { return i({ name: "jweixin", src: m.JWeixin }) }

    function h() { return i({ name: "typed", src: m.Typed }) }

    function d() { return i({ name: "mlink", src: m.MLink }) }

    function f() { return i({ name: "parallax", src: m.Parallax }) }

    function g() { return i({ name: "canvg", src: m.canvg }) } var v = n(22).addProtocol,
        m = n(24),
        y = n(19).$ajax,
        b = {},
        x = null;
    e.exports = { $loader: i, $loadQRCode: o, $loadSHA: r, $loadQQMap: s, $loadChart: a, $loadFlux: u, $loadJWeixin: p, $loadTyped: h, $loadThreeCanvas: c, $loadSliders: l, $loadParallax: f, $canvas: g, $loadMLink: d } }, function(e, t, n) { "use strict";

    function i(e) { return e.startsWith("//") && (e = location.protocol + e), new window.URL(e) }

    function o(e) { var t = location.href,
            n = s("toPage", t);
        n ? n !== "" + e && (t = t.replace(n, e)) : t += (/\?/.test(t) ? "&" : "?") + "toPage=" + e, window.history.replaceState({ title: $("title").html(), url: t }, $("title").html(), t) }

    function r(e, t) { y() ? (o(t), location.href = e) : window.open(e, "_blank") }

    function s(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href; return i(t).searchParams.get(e) }

    function a(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
            n = i(t); return n.searchParams["delete"](e), n.href }

    function c() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
            n = i(t); return e.forEach(function(e) { n.searchParams["delete"](e) }), n.href }

    function u(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.location.href,
            o = i(n); return o.searchParams.set(e, t), o.href }

    function l(e) { var t = window.location.href;
        history.replaceState({}, t, e) }

    function p() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href; return i(e).host }

    function h() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var i = t.length; if (0 === i) throw new Error("resolveUrl requires at least one argument; got none."); var o = document.createElement("base"); if (o.href = t[0], 1 === i) return o.href; var r = document.getElementsByTagName("head")[0];
        r.insertBefore(o, r.firstChild); for (var s, a = document.createElement("a"), c = 1; c < i; c++) a.href = t[c], s = a.href, o.href = s; return r.removeChild(o), s }

    function d(e) { var t = location.protocol; return "https:" != t && (t = "http:"), /^\w{2,}:\/\//.test(e) || (e = "//" + e), e.replace(/^\/\//, t + "//") }

    function f(e) { return d(e).replace(/^https:/, "http:") }

    function g(e) { return d(e).replace(/^http:/, "https:") }

    function v() { var e = f(m.EQX),
            t = n(23).mobilecheck; return e = t() ? "http://service.eqxiu.com/m/special/1023.html" : "http://store.eqxiu.com/cats-2.html" } var m = n(20),
        y = n(23).mobilecheck;
    e.exports = { parseUrl: i, getUrlParam: s, removeUrlParam: a, removeUrlParams: c, addUrlParam: u, replaceLocationHref: l, getUrlHost: p, resolveUrl: h, setUrlHistory: o, openUrl: r, addProtocol: d, url2http: f, url2https: g, redirectUrl: v } }, function(e, t, n) { "use strict";

    function i() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(navigator.userAgent) || window.screen.width < 500 }

    function o() { return window.top === window && /MicroMessenger/i.test(navigator.userAgent) }

    function r() { return i() && s() }

    function s() { return /Android/i.test(navigator.userAgent) || /Linux/i.test(navigator.appVersion) }

    function a() { return /ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent) }

    function c() { return /iPhone/i.test(navigator.userAgent) }

    function u() { return !(i() || a() && window === window.top) }

    function l() { var e = n(22).getUrlParam; return !!e("appclient") || !!window.viewData }

    function p() { return /ipad|iphone/i.test(navigator.userAgent) }

    function h() { return /msie|applewebkit.+safari/i.test(navigator.userAgent) } e.exports = { mobilecheck: i, isMobile: i, isWeixin: o, isAndroidPhone: r, isAndroid: s, tabletCheck: a, iphoneCheck: c, isPc: u, isApp: l, isIOS: p, isSafari: h } }, function(e, t) {
    "use strict";
    e.exports = { Parallax: "//lib.eqh5.com/parallax/1.0.2/parallax.min.js", JWeixin: "//res.wx.qq.com/open/js/jweixin-1.2.0.js", QQMap: "//map.qq.com/api/js?v=2.exp&callback=qqMapCallback", SHA: "//lib.eqh5.com/jsSHA/2.0.2/sha1.js", Chart: "//lib.eqh5.com/Chart.js/1.0.2/Chart.min.js", sliders: "//lib.eqh5.com/slidesjs/3.0.3/jquery.slides.min.js", QRCode: "//lib.eqh5.com/@eqxiu/qrcode/1.1.1/qrcode.min.js", Flux: "//lib.eqh5.com/@eqxiu/flux/1.0.2/flux.min.js", Typed: "//lib.eqh5.com/@eqxiu/typed/1.1.4/typed.min.js", threecanvas: "//lib.eqh5.com/@eqxiu/threecanvas/1.1.0/threecanvas.js", canvg: "//lib.eqh5.com/canvg/0.0.1/canvg.min.js", MLink: "https://static.mlinks.cc/scripts/dist/mlink.min.js", datePicker: "//lib.eqh5.com/bootstrap-daterangepicker/2.1.25/daterangepicker.js", datePickerCss: "//lib.eqh5.com/bootstrap-daterangepicker/2.1.25/daterangepicker.css", moment: "//lib.eqh5.com/moment.js/2.15.2/moment.min.js", imgJcropJs: "//lib.eqh5.com/jquery-jcrop/0.9.12/jquery.Jcrop.min.js", imgJcropCss: "//lib.eqh5.com/jquery-jcrop/0.9.12/jquery.Jcrop.min.css", plupload: "//lib.eqh5.com/plupload/2.1.8/plupload.full.min.js", qiniu: "//lib.eqh5.com/qiniu-js-sdk/1.0.14-beta/qiniu.min.js", html2canvas: "//lib.eqh5.com/html2canvas/0.0.8/html2canvas.min.js" }
}, function(e, t) { "use strict";

    function n(e) { return e && "function" == typeof e }

    function i() {} e.exports = { isFunction: n, noop: i } }, function(e, t, n) { "use strict"; var i = n(16);
    e.exports = { APP_ID: i.WX_APP_ID } }, function(e, t) {}, function(e, t) { "use strict";

    function n() { $.ajaxSetup({ cache: !0 }), $.support.cors = !0 } e.exports = { setUp: function() { n() } } }, function(e, t, n) { "use strict";

    function i(e) { var t = $(document.body),
            n = $("html");
        a() ? window.top === window ? (t.prepend(c.div()), $(".phone_panel").append(c.pcCtrlBtn()), "1" === e.isTemplate && c.addSample(e.id), t.addClass("pc"), $("title").text(e.name + " | H5微场景制作-易企秀(www.eqxiu.com)"), s(e)) : location.href.indexOf("exemplarReview") >= 0 ? (t.prepend(u.phoneDiv()), t.append(u.ctrlBtnDiv())) : location.href.indexOf("control") >= 0 ? (t.prepend(u.phoneDiv()), t.append(u.ctrlBtnDiv2())) : (n.addClass("iframe-html"), t.prepend(u.div()), t.addClass("pc"), $(".scene_title").text(e.name), $("title").text(e.name)) : (t.prepend(l.div()), $("title").text(e.name)), $(".main").show() }

    function o() { $(".loading").show() }

    function r() { $(".loading").hide() } n(30), n(31), n(32), n(33); var s = n(34).addElementsToPc,
        a = n(23).isPc,
        c = n(45),
        u = n(48),
        l = n(49);
    e.exports = { setUp: i, stopLoading: r, startLoading: o } }, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e) { var t = e.name,
            n = e.description,
            i = e.cover;
        $(".scene_title").text(e.name), s({ name: t, description: n, cover: i }), o(), r(e) }

    function o() { u()["catch"](function() { return n(44) }).then(function(e) { return $("body").css("backgroundImage", "url(" + e + ")") }) }

    function r(e) { l().then(function() { var t = a(p(e));
            t.searchParams.set("eqrcode", 1), console.info("qrCodeUrl:", window.scene.qrurl), $("#downApp").click(function() { $("#downAppView").css("display", "block") }), $("#close").click(function() { $("#downAppView").css("display", "none") }), $("#downCode").qrcode({ render: "canvas", width: 200, height: 200, text: "http://a.app.qq.com/o/simple.jsp?pkgname=cn.knet.eqxiu" }), $("#codeImg").qrcode({ render: "canvas", width: 200, height: 200, text: window.scene.qrurl }) }) }

    function s(e) { var t = e.name,
            n = e.description,
            i = e.cover;
        n = n || ""; var o = window.location.href.split("?")[0];
        $("#view_share .share-qq").attr("href", "\n            http://connect.qq.com/widget/shareqq/index.html?url=\n            " + encodeURIComponent(o) + "?from=sqq&title=" + t + "\n            &site=易企秀http://eqxiu.com&summary=" + n + "\n            &pics=" + (c.FILE + i) + "&desc=" + n + "&appkey=3508809852\n        "), $("#view_share .share-qqZone").attr("href", "\n            http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=\n            " + encodeURIComponent(o) + "?from=qzone&title=" + t + "\n            &site=易企秀http://eqxiu.com&summary=" + n + "\n            &pics=" + (c.FILE + i) + "&desc=" + n + "&appkey=3508809852\n        "), $("#view_share .share-weibo").attr("href", "\n            http://service.weibo.com/share/share.php?url=\n            " + encodeURIComponent(o) + "?from=sina_weibo\n            &title=" + encodeURIComponent("#易企秀分享# 这是我用@易企秀 做的【" + t + "】，赶紧打开看看吧！") + "\n            &pic=" + (c.FILE + i) + "&appkey=3508809852\n        ") } n(35), n(36), n(37); var a = n(22).parseUrl,
        c = n(20),
        u = n(38).$getPcBgImg,
        l = n(21).$loadQRCode,
        p = n(39).getShareUrl;
    e.exports = { addElementsToPc: i } }, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e) { return function(t) { return t.includes("http") || (t = l.FILE + t), u({ type: "GET", url: t, dataType: e }) } }

    function o(e) { return u({ type: "POST", url: l.SERVER_0 + "eqs/material/uptokens?type=" + e, headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" } }) }

    function r(e, t) { return u({ type: "POST", url: "//up.qiniu.com/putb64/-1", contentType: "application/octet-stream", beforeSend: function(t) { t.setRequestHeader("Authorization", "UpToken " + e) }, data: t }) }

    function s(e, t) { return u({ type: "POST", url: l.SERVER_1 + "eqs/board/drawing/save?compKey=" + e, data: { data: JSON.stringify(t) } }) }

    function a(e) { return u({ type: "GET", dataType: "text" }) }

    function c() { return u({ type: "GET", url: l.SERVER_2 + "eqs/image/scene/preview" }).then(function(e) { return e ? e : Promise.reject("No Background Image") }) } var u = n(19).$ajax,
        l = n(20),
        p = i("xml");
    e.exports = { $getSvg: p, $getSymbol: a, $getPcBgImg: c, $getUploadToken: o, $uploadBase64: r, $saveCompInfoByCompKey: s } }, function(e, t, n) { "use strict";

    function i(e) { var t = e.code,
            n = window.location.href,
            i = window.location.host,
            r = h.EQX_FAN_DOMAIN,
            l = h.EQX_AD_DOMAIN,
            d = h.EQX_VIP_DOMAIN,
            f = h.EQX_COMPANY_DOMAIN; try { return o(i) ? (console.info("第三方域名"), n) : s(i) ? (console.info("MAX 域名"), n) : a(e) ? (console.info("流量域名"), p(e, l)) : c(e) ? (console.info("CDN 加速"), v(d + "/s/" + t)) : u(e) ? (console.info("企业账号"), p(e, f)) : (console.info("普通泛域名"), p(e, r)) } catch (g) { return console.error(g), n } }

    function o() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : location.host; return !r(e) }

    function r() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : location.host; return ["eqshow.cn", "yqxiu.cn", "eqxiu.cc", "eqxiu.com", "eqxiu.cn", "eqh5.cn"].some(function(t) { return e.endsWith("." + t) }) || /localhost/.test(e) }

    function s(e) { return r(e) && /^max\./.test(e) }

    function a(e) { var t = e.ext || {}; return t.yqc && t.yqc.ad }

    function c(e) { var t = h.EQX_VIP_DOMAIN; return 1 == e.staticStatus && location.host.includes(t) }

    function u(e) { var t = e.userType,
            n = e.memberType,
            i = e.expiryTime; return (t == g["企业账号"] || t == g["企业子账号"]) && n && i && d(i) }

    function l() { return location.host.includes(h.EQX_TG) }

    function p(e, t) { var n = e.code,
            i = e.userId || e.createUser; if (!i) throw new Error("No User Id"); var o = f(i); return v(o + "." + t + "/s/" + n) } var h = n(20),
        d = n(40).isNotExpired,
        f = n(41).hashCode,
        g = n(42).USER_ROLE,
        v = n(22).addProtocol;
    e.exports = { getShareUrl: i, isEqxAdScene: a, isVipScene: c, isEqxHost: r, isThirdPartyHost: o, isTgScene: l } }, function(module, exports) { "use strict";

    function dateFormat(x, y) { var z = { M: x.getMonth() + 1, d: x.getDate(), h: x.getHours(), m: x.getMinutes(), s: x.getSeconds() }; return y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) { return ((v.length > 1 ? "0" : "") + eval("z." + v.slice(-1))).slice(-2) }), y.replace(/(y+)/g, function(e) { return x.getFullYear().toString().slice(-e.length) }) }

    function isNotExpired(e) { return new Date(e).getTime() > Date.now() }

    function isExpired(e) { return new Date(e).getTime() < Date.now() } module.exports = { dateFormat: dateFormat, isExpired: isExpired, isNotExpired: isNotExpired } }, function(e, t) { "use strict";

    function n(e) { var t = 0; if (0 === e.length) return t; for (var n = 0; n < e.length; n++) { var i = e.charCodeAt(n);
            t = (t << 5) - t + i, t &= t } return Math.abs(t) }

    function i(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10; /\$\{([^}]*)}/.test(e) && console.error("DO NOT USE ${}", e); for (var i = e; n && /#\{([^}]*)}/.test(i);) i = i.replace(/#\{([^}]*)}/g, function(e, n) { var i = t[n]; return void 0 !== i ? i : e }), n--; return i } e.exports = { hashCode: n, parse: i } }, function(e, t, n) { "use strict"; var i = n(43).make,
        o = i({ 1: "普通账号", 2: "企业账号", 21: "企业子账号", 5: "公共账号", 51: "公共子账号", 3: "高级用户", 4: "秀客", 99: "运营人员" });
    e.exports = { USER_ROLE: o } }, function(e, t) { "use strict";

    function n() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = {}; for (var n in e)
            if (e.hasOwnProperty(n)) { var i = e[n];
                t[t[n] = i] = n }
        return t } e.exports = { make: n } }, function(e, t, n) { e.exports = n.p + "images/spring-5632ca.jpg" }, function(e, t, n) { "use strict";

    function i() { var e = a.nr(),
            t = a.ppitest(),
            n = r(); return "\n" + t + "\n" + n + '\n<div class="phone_panel">\n   \n    <div class="p-index main phoneBox" id="con" style="display: none;">\n        <div class="top"></div>\n        <div class="phone_menubar"></div>\n        <div class="scene_title_baner">\n            <h1 class="scene_title"></h1>\n        </div>\n        ' + e + '\n        <div class="bottom"></div>\n    </div>\n</div>' }

    // function o() { return '<div class = "ctrl_panel">\n        <a id = "pre_page" type = "button" class = "pre_btn btn">上一页</a>\n        <a id = "next_page" type = "button" class = "next_btn btn">下一页</a>\n    </div>' }

    // function r() { var e = n(47); return '\n<div id="code">\n    <div style="margin-bottom:15px;">\n        <div class="app" style="position:relative;">\n            <a id="downApp" style="font-size:12px;margin-top:-4px;">下载APP</a>\n            <div id="downAppView" class="zoomIn-change">\n                <h3><a id="close" style="cursor:pointer">X</a>易企秀APP</h3>\n                <div id="downCode"></div>\n                <p style="padding-bottom:20px;padding-top:10px;">一键生成H5，随时随地查数据</p>\n            </div>\n        </div>\n        扫一扫，分享给朋友！\n    </div>\n    <div style="text-align: center;background:#fff;padding: 10px;" id="codeImg"/>\n    <div id="view_share" class="bdsharebuttonbox">\n        <a class="share-qq" href="" target="_blank"><span class="eqf-qq share-icon"></span></a>\n        <a class="share-qqZone" href="" target="_blank"><span class="eqf-QQzone share-icon"></span></a>\n        <a class="share-weibo" href="" target="_blank"><span class="eqf-weibo2 share-icon"></span></a>\n    </div>\n    <div id="view_reg">这么漂亮的场景&nbsp;→\n        <span>\n            <a target="_blank" href="' + l + 'cats-2.html">我也来制作</a>\n        </span>\n    </div>\n    <div id="support">技术支持 BY <a target="_blank" href="' + u + '">\n        <img id="logoSmall" src="' + e + '"/>\n    </a>\n    </div>\n</div>\n' }
    function o() {
        return ''};//<div class = "ctrl_panel">\n        <a id = "pre_page" type = "button" class = "pre_btn btn">上一页</a>\n        <a id = "next_page" type = "button" class = "next_btn btn">下一页</a>\n    </div>' }

    function r() {
        var e = n(46);
        return '\n<div id="code">\n    <div style="margin-bottom:15px;">\n        <div class="app" style="position:relative;">\n            \n            <div id="downAppView" class="zoomIn-change">\n                <h3><a id="close" style="cursor:pointer">X</a>易企秀APP</h3>\n                <div id="downCode"></div>\n                <p style="padding-bottom:20px;padding-top:10px;">一键生成H5，随时随地查数据</p>\n            </div>\n        </div>\n        扫一扫，分享给朋友！\n    </div>\n    <div style="text-align: center;background:#fff;padding: 10px;" id="codeImg"/>\n    <div id="view_share" class="bdsharebuttonbox">\n        \n    </div>\n    \n</div>\n' }
// return '' }
    function s(e) { $("#view_reg").after('<div id="sample_btn">使用该模板</div>'), $("body").on("click", "#sample_btn", function() { window.open(l + "cats-2.html?useTplId=" + e) }) } var a = n(46),
        c = n(20),
        u = c.EQX,
        l = c.STORE;
    e.exports = { div: i, pcCtrlBtn: o, addSample: s } }, function(e, t, n) { "use strict";

    function i() { return '<div id="ppitest" style="width:1in;visible:hidden;padding:0px"></div>' }

    function o() { var e = $(".loading").remove().show()[0].outerHTML; return '\n<div class="nr" id="nr">\n    ' + e + "\n</div>\n" }

    function r(e, t) { e = e || "场景名称"; var n = t.startsWith("http") ? t : s.FILE + t; return '\n<div id="verifyCode" class="verifyCode">\n    <div class="container">\n        <div class="scene-cover">\n            <!-- 3、场景封面 -->\n            <img class="cover-img" src="' + n + '">\n        </div>\n        <!-- 4、场景名称 -->\n        <div class="scene-name">' + e + '</div>\n        <div class="confirm-password">\n            <div class="verify-label">请输入访问密码</div>\n            <div class="verify-tips" id="verifyTip">\n                <ul class="password-indicator">\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                </ul>\n            </div>\n            <div class="password-numbers">\n                <span>1</span>\n                <span>2</span>\n                <span>3</span>\n                <span>4</span>\n                <span>5</span>\n                <span>6</span>\n                <span>7</span>\n                <span>8</span>\n                <span>9</span>\n                <span>0</span>\n            </div>\n            <div class="password-operation">\n                <span class="btn-clear" id="btnClear">清空</span>\n                <span class="btn-cancel" id="btnCancel">取消</span>\n            </div>\n        </div>\n    </div>\n</div>' } var s = n(20);
    e.exports = { nr: o, ppitest: i, pwd: r } }, function(e, t, n) { e.exports = n.p + "bg_small-8b8bf0.png" }, function(e, t, n) { "use strict";

    function i() { var e = a.nr(); return '<div class="phone_panel">\n   \n    <div class="p-index main phoneBox" id="con" style="display: none;">\n        <div class="top"></div>\n        <div class="phone_menubar"></div>\n        <div class="scene_title_baner">\n            <h1 class="scene_title"></h1>\n        </div>\n        ' + e + '\n        <div class="bottom"></div>\n    </div>\n</div>' }

    function o() { var e = a.nr(),
            t = a.ppitest(); return "\n" + t + '\n<div class="p-index main iframe-phone" id="con" style="display: none; width: 320px; margin-right: 40px;">\n' + e + "\n</div>\n" }

    function r() { return '<div class = "iframe_panel" style="z-index:2;">\n        <div class="preview"><a id = "pre_page" type = "button" class = "scroll_btn"><span class="eqf-clickmore2"></span></a></div>\n        <div class="next"><a id = "next_page" type = "button" class = "scroll_btn"><span class="eqf-clickmore"></span></a></div>\n    </div>' }

    function s() { return '<div class="iframe_panel2">\n                    <ul>\n                        <li id="pre_page">上一页</li>\n                        <li id="next_page">下一页</li>\n                    </ul>\n                </div>' } var a = n(46);
    e.exports = { div: i, phoneDiv: o, ctrlBtnDiv: r, ctrlBtnDiv2: s } }, function(e, t, n) { "use strict";

    function i() { var e = o.nr(),
            t = o.ppitest(); return "\n" + t + '\n<div class="p-index main" id="con" style="display: none;">\n' + e + "\n</div>\n" } var o = n(46);
    e.exports = { div: i } }, function(e, t, n) { "use strict";

    function i() { return /max\.(eqshow\.cn|yqxiu\.cn|eqxiu\.com|eqxiu\.cc)/.test(window.location.host) }

    function o() { return (/\/(\w+)$/.exec(window.location.pathname) || [])[1] }

    function r() {
        function e(e) { return m(e), e } return new Promise(function(t, n) { var r = window.scene; if (r) t(e(r));
            else if (window.__isServerRendered && !window.scene && n("场景数据异常"), i()) { var s = o();
                window.__isMax = !0, d({ type: "GET", url: l.SERVER_MAX + "m/new/check/model/code?objectId=" + s + "&JSESSIONID=ff4ff6599aa04597861955583c300a5d" }).then(function(i) { if (i && i.data) { var o = i.data,
                            r = window.scene = o.scene,
                            s = o.pages.map(function(e) { return { elements: e } });
                        window.viewData = { list: s }, t(e(r)) } else n("无审核场景数据") })["catch"](function() { n("无审核场景数据") }) } else h({ type: "GET", url: l.SERVER_1 + "eqs/sc?code=" + c() }).then(function(i) { i.obj ? t(e(i.obj)) : n("无场景数据") })["catch"](function() { n("无场景数据") }) }) }

    function s(e) { if (window.viewData) return Promise.resolve(window.viewData); var t = { type: "GET", url: a() }; return e && (t.data = { password: e }), d(t) }

    function a() { var e = window.scene || {},
            t = e.id,
            n = e.code; if (!t) throw new Error("Not Valid Scene! No Id!"); if (!n) throw new Error("Not Valid Scene! No Code!"); var i = g("userKey"),
            o = g("compKey"),
            r = g("cache"),
            s = l.SERVER_1,
            a = y(window.scene);
        (a || b()) && (s = l.SERVER_2), (i || r) && (s = l.SERVER_1); var c = s + "eqs/page/" + t + "?code=" + n,
            u = v(c); if (i && u.searchParams.set("userKey", i), o && u.searchParams.set("compKey", o), r && u.searchParams.set("cache", r), c = u.href, !a) { var p = v(c);
            p.searchParams.set("time", (new Date).getTime()), c = p.href } return c }

    function c() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href; if (window.scene) return window.scene.code;
        e = v(e); var t = e.pathname,
            n = t.lastIndexOf("/"); if (n > -1) var i = t.substr(n + 1); if (!i) throw new Error("No Valid Scene Code!"); return i.length > 10 && console.error("URL Code 大于 10 位, 请检查 Code"), i }

    function u() { return Math.ceil(1e10 * Math.random()) } var l = n(20),
        p = n(19),
        h = p.ajax,
        d = p.$ajax,
        f = n(22),
        g = f.getUrlParam,
        v = f.parseUrl,
        m = n(51).perfectMeta,
        y = n(39).isVipScene,
        b = n(39).isTgScene;
    e.exports = { $getSceneMetaData: r, $getSceneData: s, randomId: u } }, function(e, t, n) { "use strict";

    function i(e) { return e.ext || (e.ext = {}), "string" == typeof e.property && (e.property = JSON.parse(e.property) || {}), "string" == typeof e.bgAudio && (e.bgAudio = JSON.parse(e.bgAudio) || null), null === e.accessCode && (e.accessCode = ""), c(e), s(e), a(e), e }

    function o(e) { e.name = e.name || "未命名场景", e.name = e.name.replace(/&quot;/g, '"') }

    function r(e) { e.description = e.description || "我用易企秀做了一个超酷炫的H5，快来看看吧。" }

    function s(e) { switch (e.pageMode + "") {
            case "2":
                e.pageMode = u["上下翻页"] } void 0 === u[e.pageMode] && (_DEBUG_, e.pageMode = u["上下翻页"]), e.property || (e.property = {}); var t = e.property; return "triggerLoop" in t || (t.triggerLoop = !0), "autoFlip" in t || (t.autoFlip = !1), t.autoFlipTime || (t.autoFlipTime = 3), "forbidHandFlip" in t || (t.forbidHandFlip = !1), void 0 !== t.slideNumber && null !== t.slideNumber || (t.slideNumber = !0), e }

    function a(e) { var t = e.property,
            n = e.createTime,
            i = e.hideEqAd,
            o = e.eqAdType,
            r = e.isAdvancedUser,
            s = e.bottomLabel; switch (n < 14165028e5 | i | 99 === o && (t.eqAdType = l["无尾页无底标"], delete t.createTime, delete t.hideEqAd), r && (t.ad = 2, s && s.id ? t.eqAdType = l["品牌联合底标"] : t.eqAdType = l["技术支持底标"], delete t.isAdvancedUser), "" + t.eqAdType) {
            case l["无尾页无底标"]:
                t.ad = 0; break;
            case l["技术支持尾页"]:
                t.ad = 1; break;
            case l["技术支持底标"]:
            case l["品牌联合底标"]:
                t.ad = 2; break;
            case l["deepshare尾页"]:
                t.ad = 4; break;
            default:
                t.eqAdType = l["技术支持尾页"], t.eqAdType = parseInt(t.eqAdType), t.ad = 1 } }

    function c(e) { var t = e.property; if (t.shareDes && "string" == typeof t.shareDes) try { t.shareDes = JSON.parse(t.shareDes) } catch (n) { t.shareDes = { description: { type: "position", description: t.shareDes } } }
        var i = !1; if (t.wxCount > 0 || (1 == t.clickFarmerStatus || 2 == t.clickFarmerStatus) && t.wxClickFarmerCount > 0) i = !0;
        else { var o = t.shareDes;
            o && (o.description && ["myself", "selfAndPosition"].includes(o.description.type) || o.title && ["myself", "selfAndPosition"].includes(o.title.type) || o.avatar) && (i = !0) } t.wxAuth = i } var u = n(52).PAGE_MODE,
        l = n(53).AD_TYPE;
    e.exports = { perfectMeta: i, perfectPageMode: s, perfectAdType: a, perfectName: o, perfectDescription: r } }, function(e, t) { "use strict";

    function n(e) { return a.includes(e) }

    function i(e) { return c.includes(e) } var o = { up: 1, right: 2, down: 3, left: 4 },
        r = [{ name: "上下翻页", type: 0, dir: o.down }, { name: "上下惯性翻页", type: 1, dir: o.down }, { name: "左右惯性翻页", type: 3, dir: o.right }, { name: "左右翻页", type: 4, dir: o.right }, { name: "左右连续翻页", type: 5, dir: o.right }, { name: "立体翻页", type: 6, dir: o.down }, { name: "卡片翻页", type: 7, dir: o.down }, { name: "放大翻页", type: 8, dir: o.down }, { name: "交换翻页", type: 9, dir: o.right }, { name: "翻书翻页", type: 10, dir: o.right }, { name: "上下连续翻页", type: 11, dir: o.down }, { name: "掉落翻页", type: 12, dir: o.down }, { name: "淡入翻页", type: 13, dir: o.down }, { name: "上下推出翻页", type: 14, dir: o.down }, { name: "左右推出翻页", type: 15, dir: o.right }, { name: "折叠翻页", type: 16, dir: o.down }],
        s = {};
    r.forEach(function(e) { s[e.type] = e.name, s[e.name] = e.type }); var a = r.filter(function(e) { return e.dir == o.down }).map(function(e) { return e.type }),
        c = r.filter(function(e) { return e.dir == o.right }).map(function(e) { return e.type });
    e.exports = { isBottomArrow: n, isRightArrow: i, BOTTOM_ARROWS: a, RIGHT_ARROWS: c, PAGE_MODE: s } }, function(e, t, n) { "use strict"; var i = n(43).make,
        o = i({ 0: "无尾页无底标", 1: "技术支持尾页", 2: "技术支持底标", 3: "品牌联合底标", 4: "deepshare尾页" });
    e.exports = { AD_TYPE: o } }, function(e, t, n) { "use strict";

    function i(e) { var t = e.property.activityPageId; if (e.isPwd) var n = new Promise(function(t) { new r(e.cover, $("#nr"), t) });
        else n = s(); var i = n.then(function(t) { return t.meta = e, new l(t, [p]).start(), t }),
            m = a(t)["catch"](function() { return null }); return Promise.all([i, m]).then(function(e) { var t = o(e, 2),
                n = t[0],
                i = t[1]; return i instanceof Object && n.list.push(i), n }).then(function(e) { var t = e.meta; if (!f(t)) return e; var n = t.ext; return c(n.yqc.ad).then(function(t) { return t && t.list && t.list.length ? (t.list.filter(function(e) { return !!e.scenePage || !!e.scenePageDTO }).forEach(function(t) { for (var n = t.scenePage, i = t.scenePageDTO, o = t.pageNum, r = i || n, s = r.elements || [], a = 0; a < s.length; a++) { var c = s[a]; if (c && "EqxAdvertise" == v[c.type]) { c.content = "tpl"; break } } var u = o - 1,
                        l = e.list;
                    u > l.length ? l.push(r) : l.splice(u, 0, r) }), e) : e })["catch"](function(t) { return console.error(t || "广告尾页请求或者解析失败"), e }) }).then(function(e) { return new u(e).addPageFn(h).addEleFn(d).start(), g(e) }) } var o = function() {
            function e(e, t) { var n = [],
                    i = !0,
                    o = !1,
                    r = void 0; try { for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0); } catch (c) { o = !0, r = c } finally { try {!i && a["return"] && a["return"]() } finally { if (o) throw r } } return n } return function(t, n) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(),
        r = n(55).Guess,
        s = n(50).$getSceneData,
        a = n(58).$getActivityPage,
        c = n(59).$getYqcAd,
        u = n(60),
        l = n(61).ObjAdaptor,
        p = n(62).perfectScene,
        h = n(63).perfectPage,
        d = n(66).perfectComp,
        f = n(39).isEqxAdScene,
        g = n(73).addEqAdInfo,
        v = n(65).COMP_TYPE;
    e.exports = { getPerfectSceneData: i, $getActivityPage: a } }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var o = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
    n(56); var r = n(57),
        s = n(41).parse,
        a = n(50).$getSceneData,
        c = n(23),
        u = c.mobilecheck,
        l = c.isAndroidPhone,
        p = c.tabletCheck,
        h = c.isPc,
        d = n(20),
        f = function() {
            function e(t, n, o) { if (i(this, e), this.callBack = o, this.password = "", t.startsWith("http") || (t = d.FILE + t), n.append(s(r, { cover: t })), $("#loading").hide(), $("#verifyCode").show(), h() || l() ? ($(".password-numbers>span").on("click", this.passwordEventListener.bind(this)), $("#btnClear").on("click", this.btnClearEventListener.bind(this)), $("#btnCancel").on("click", this.btnCancelEventListener.bind(this))) : ($(".password-numbers>span").on("touchstart", this.passwordEventListener.bind(this)), $("#btnClear").on("touchstart", this.btnClearEventListener.bind(this)), $("#btnCancel").on("touchstart", this.btnCancelEventListener.bind(this))), u() || p()) { var a, c = $(".container"),
                        f = c.width(),
                        g = c.height();
                    a = Math.floor(10 * Math.min(document.documentElement.clientHeight / g, document.documentElement.clientWidth / f)) / 10, c.css("transform", "scale(" + a + ", " + a + ")") } } return o(e, [{ key: "requestSceneDataWithPassword", value: function(e) { var t = this;
                    a(e).then(function(e) { t.clearGuess(), t.callBack(e) })["catch"](function() { t.warnGuess() }) } }, { key: "animateVerifyTip", value: function() { var e = this;
                    $("#verifyTip").addClass("shake").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() { $(this).removeClass("shake"), e.syncronizeTheIndicator() }) } }, { key: "syncronizeTheIndicator", value: function() { var e = this;
                    $(".password-indicator li").each(function(t, n) { t < e.password.length ? $(n).addClass("active") : $(n).removeClass("active") }) } }, { key: "passwordEventListener", value: function(e) { var t = $(e.target);
                    t.addClass("active"), this.password += t.text(), this.syncronizeTheIndicator(), 4 == this.password.length && (this.requestSceneDataWithPassword(this.password), this.password = ""), setTimeout(function() { t.removeClass("active") }, 100) } }, { key: "btnClearEventListener", value: function(e) { this.password = "", this.syncronizeTheIndicator() } }, { key: "btnCancelEventListener", value: function(e) { this.password && (this.password = this.password.substring(0, this.password.length - 1), this.syncronizeTheIndicator()) } }, { key: "clearGuess", value: function() { $("#verifyCode").remove(), h() || l() ? ($(".password-numbers>span").off("click", this.passwordEventListener.bind(this)), $("#btnClear").off("click", this.btnClearEventListener.bind(this)), $("#btnCancel").off("click", this.btnCancelEventListener.bind(this))) : ($(".password-numbers>span").off("touchstart", this.passwordEventListener.bind(this)), $("#btnClear").off("touchstart", this.btnClearEventListener.bind(this)), $("#btnCancel").off("touchstart", this.btnCancelEventListener.bind(this))) } }, { key: "warnGuess", value: function() { $("#verifyCode").show(), this.animateVerifyTip() } }]), e }();
    e.exports = { Guess: f } }, function(e, t) {}, function(e, t) { e.exports = '<div id="verifyCode" class="verifyCode"><div class="container"><div class="scene-cover"><img class="cover-img" src="#{cover}"></div><div class="scene-name">场景名称</div><div class="confirm-password"><div class="verify-label">请输入访问密码</div><div class="verify-tips" id="verifyTip"><ul class="password-indicator"><li></li><li></li><li></li><li></li></ul></div><div class="password-numbers"><span>1</span> <span>2</span> <span>3</span> <span>4</span> <span>5</span> <span>6</span> <span>7</span> <span>8</span> <span>9</span> <span>0</span></div><div class="password-operation"><span class="btn-clear" id="btnClear">清空</span> <span class="btn-cancel" id="btnCancel">取消</span></div></div></div></div>' }, function(e, t, n) { "use strict";

    function i(e, t) { return a({ type: "GET", url: c.SERVER_1 + "eqs/scene/skin/get", data: { type: e, domain: t } }) }

    function o(e, t) { return a({ type: "GET", url: c.SERVER_1 + "eqs/scene/skin/get", data: { type: e, domain: t } }) }

    function r(e) { return a({ type: "GET", url: c.SERVER_2 + "eqs/trailer/" + e }) }

    function s(e) { return e ? r(e).then(function(e) { return e.obj ? (e.obj.isActivity = !0, e.obj) : Promise.reject("活动尾页数据错误") }) : Promise.reject("没有活动尾页 ID") } var a = n(19).$ajax,
        c = n(20);
    e.exports = { $getPageInfo: r, $getActivityPage: s, $getLastPageConfig: i, $getLoadPageConfig: o } }, function(e, t, n) { "use strict";

    function i(e) { return r({ type: "GET", url: s.SERVER_1 + "adview/scenePage/find", data: { sceneId: e, time: Date.now() } }) }

    function o(e) { return r({ type: "GET", url: s.SERVER_1 + "adview/tail/find", data: { sceneId: e, time: Date.now() } }) } var r = n(19).ajax,
        s = n(20);
    e.exports = { $getYqcAd: i, $getYqcTail: o } }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var o = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        r = n(61),
        s = r.ObjAdaptor,
        a = r.ListAdaptor,
        c = n(62).perfectScene,
        u = function() {
            function e(t) { i(this, e), c(t), this.sceneJson = { map: t.map, meta: t.meta, list: t.list }, this.mapAdaptor = new s(t.map), this.metaAdaptor = new s(t.meta), this.pageAdaptor = new a(t.list), this.eleAdptorList = t.list.map(function(e) { return e.elements || (e.elements = []), new a(e.elements) }) } return o(e, [{ key: "addMapFn", value: function(e) { return this.mapAdaptor.addFn(e), this } }, { key: "addMetaFn", value: function(e) { return this.metaAdaptor.addFn(e), this } }, { key: "addPageFn", value: function(e) { return this.pageAdaptor.addFn(e), this } }, { key: "addEleFn", value: function(e) { return this.eleAdptorList.forEach(function(t) { return t.addFn(e) }), this } }, { key: "start", value: function() { var e = this;
                    this.mapAdaptor.start(this.sceneJson), this.metaAdaptor.start(this.sceneJson), this.pageAdaptor.start(this.sceneJson), this.eleAdptorList.forEach(function(t) { return t.start(e.sceneJson) }) } }]), e }();
    e.exports = u }, function(e, t) { "use strict";

    function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var r = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        s = function() {
            function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                o(this, e), this.fns = t } return r(e, [{ key: "addFns", value: function(e) { var t = this; return e.forEach(function(e) { return t.addFn(e) }), this } }, { key: "addFn", value: function(e) { return this.fns.includes(e) || this.fns.push(e), this } }, { key: "removeFn", value: function(e) { var t = this.fns.indexOf(e); return t > -1 && this.fns.splice(t, 1), this } }, { key: "clearFns", value: function() { return this.fns.length = 0, this } }, { key: "start", value: function() { return this } }]), e }(),
        a = function(e) {
            function t(e) { var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                o(this, t); var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i)); return r.data = e, r } return i(t, e), r(t, [{ key: "start", value: function(e) { var t = this; return this.fns.forEach(function(n) { return n.call(null, t.data, e) }), this } }]), t }(s),
        c = function(e) {
            function t(e) { var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                o(this, t); var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i)); return Array.isArray(e) || (_DEBUG_ && console.error("Invalid Array"), e = []), r.list = e, r } return i(t, e), r(t, [{ key: "start", value: function(e) { var t = this; return this.fns.forEach(function(n) { return t.list.forEach(function(t) { return n.call(null, t, e) }) }), this } }]), t }(s);
    e.exports = { ObjAdaptor: a, ListAdaptor: c } }, function(e, t) { "use strict";

    function n(e) { return e.meta ? e.obj = e.meta : e.obj = e.obj || {}, e.meta = e.obj, e.map = e.map || {}, e.list = e.list || [], e.list.forEach(function(e, t) { e.num = t + 1 }), e } e.exports = { perfectScene: n } }, function(e, t, n) { "use strict";

    function i(e, t) { o(e), a(e, t), r(e, t), s(e), u(e), l(e.properties) }

    function o(e) { e.elements && e.elements.forEach(function(e) { e.css = e.css || {}; var t = e.type; "3" == t ? e.css.zIndex = -1 : "q" == t && (e.css.zIndex = 0) }) }

    function r(e) { e.elements = e.elements.filter(function(e) { var t = e.type; if ("EqxShape" == p[t]) { var n = e.properties,
                    i = n.type,
                    o = n.src; if (o) return !0; if (!i) return !1; if (i.includes("symbols")) return !0; var r = i.replace(/-([a-z])/g, function(e, t) { return t.toUpperCase() }); return !!r } return !0 }) }

    function s(e) { var t = e.properties,
            n = t.longPage;
        n && n > 1 && n < 6 && (t.longPage = 486 * n) }

    function a(e, t) { e.properties = e.properties || {}, e.elements = e.elements || [], e.sceneId = t.meta.id, e.elements.forEach(function(t) { return t.pageId = e.id }) }

    function c(e) { var t = e + "Effect";
        h.includes(t) || h.push(t) }

    function u(e) { var t = e.properties || {}; if (t.image || t.scratch) { c("scratch"); var n = t.effect = Object.assign({ name: "scratch" }, t.image || t.scratch),
                i = n.percentage ? n.percentage.value || n.percentage || .15 : .15; return delete n.percentage, n.percentage = i, void(t.image ? delete t.image : delete t.scratch) } if (t.finger) return c("finger"), t.effect = Object.assign({ name: "finger" }, t.finger), void delete t.finger; if (t.fallingObject) return c("fallingObject"), t.effect = Object.assign({ name: "fallingObject" }, t.fallingObject), void delete t.fallingObject; if (t.effect) { var o = t.effect.name;
            c(o), "money" === o && _DEBUG_ && (t.effect.seconds = 2) } } var l = n(64),
        p = n(65).COMP_TYPE,
        h = [];
    e.exports = { perfectPage: i, perfectJson: a, perfectLongPage: s, perfectTrigger: l, effectArr: h, perfectEffect: u } }, function(e, t) { "use strict";

    function n(e) { var t = e.trigger; if (t) { var n = t.sends,
                i = t.receives;
            Array.isArray(n) && (n.forEach(function(e) { return e.handles = e.handles.filter(function(e) { return e.ids.length }) }), t.sends = n.filter(function(e) { return e.handles.length })), Array.isArray(i) && (t.receives = i.filter(function(e) { return e.ids.length })), _DEBUG_ && e.pageId } } e.exports = n }, function(e, t) { "use strict"; var n = { 7: "EqxNewText", 2: "EqxText", x: "EqxText", 298: "EqxDeepShare", 299: "EqxReport", 3: "EqxBackground", 4: "EqxImage", 8: "EqxTelephone", 9: "EqxRedPacket", 10: "EqxRandomContent", b: "EqxComment", h: "EqxShape", i: "EqxCount", l: "EqxLink", t: "EqxChart", v: "EqxInteractiveVideo", p: "EqxImageSlider", m: "EqxMap", n: "EqxRandom", s: "EqxSound", d: "EqxPv", g: "EqxAdvertise", e: "EqxDownTime", f: "EqxUpTime", a: "EqxScore", c: "EqxCheckbox", r: "EqxRadio", z: "EqxDropDownList", 5: "EqxInput", 501: "EqxInput", 502: "EqxInputPhone", 503: "EqxInputEmail", 504: "EqxInput", 6: "EqxSubmitButton", 601: "EqxSubmitButton", 201: "EqxWxNickName", 401: "EqxWxProfile", 403: "EqxWxUploadImage", w01: "EqxWxSoundPlay", w02: "EqxWxSoundRecord", j: "EqxImgVote", k: "EqxTextVote", q: "EqxGravity", u: "EqxDrawingBoard" },
        i = ["5", "501", "502", "503", "504", "c", "r", "z", "a"],
        o = ["201", "401", "403", "w01", "w02", "j", "k"],
        r = ["i", "6", "601"],
        s = ["3", "q"],
        a = Date.now() + "" + Math.floor(1e5 * Math.random());
    e.exports = { COMP_TYPE: n, FORM_COMPS: i, WX_COMPS: o, WX_CLICK_FARMER_COMPS: r, FIX_INDEX_COMPS: s, COMP_KEY: a } }, function(e, t, n) {
    "use strict";

    function i(e, t, n) { return r(e, t), s(e, t, n), a(e), u(e), o(e, t), c(e), l(e), p(e), d(e, t), b(e), h(e), e }

    function o(e, t) { if ("EqxDrawingBoard" === m[e.type] && t.map[P]) { var n = t.map[P][e.id];
            n && (e.properties.imgSrc = n, e.properties.qiniuSrc = n) } }

    function r(e, t) {
        e.properties = e.properties || {}, e.css = e.css || {}, e.sceneId = t.meta.id, e.trigger && (e.properties.initType = e.trigger.initType || e.properties.initType, delete e.trigger.initType);
    }

    function s(e, t, n) { var i = e.css,
            o = m[e.type]; if ("translate3d(0px, 0px, 0px) rotateZ(0deg) scale(1, 1)" === i.transform && (i.transform = ""), "EqxBackground" !== o) { var r = ["top", "left", "width", "height", "zIndex"];
            r.forEach(function(e) { void 0 === i[e] && (_DEBUG_, "height" === e && (["EqxInput", "EqxInputEmail", "EqxInputPhone"].includes(o) && (i.height = 38), "EqxSubmitButton" === o && (i.height = 36), "EqxRadio" !== o && "EqxCheckbox" !== o || _DEBUG_ && console.info(o), _DEBUG_ && console.info("add height", i.height))) }); var s = { color: "#676767", backgroundColor: "", opacity: 1, transform: "rotateZ(0deg)", textAlign: "left", borderWidth: 0, borderStyle: "solid", borderColor: "rgba(0,0,0,1)", borderRadius: 0, borderRadiusPerc: 0, borderBottomRightRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0, paddingBottom: 0, paddingTop: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0.5)", boxShadowDirection: 0, boxShadowSize: 0 },
                a = Object.assign({}, s, i);
            Object.assign(i, a) } if (g(e), f(i), n) { var c = n.properties.longPage || 486;
            i.bottom && !i.top && (i.top = c - i.bottom - i.height, console.log("bottom " + i.bottom + " height " + i.height + " -> top " + i.top), delete i.bottom) } return i.top || (i.top = 0), i.left || (i.left = 0), e }

    function a(e) { var t = e.properties; "string" == typeof t && (t = {}), t.anim ? (Array.isArray(t.anim) || (t.anim = [t.anim]), t.anim = t.anim.filter(function(e) { var t = e || {},
                n = t.type,
                i = t.direction; return !(n == -1 || null == n || void 0 == n || !x[n]) && (x[n][i] || (console.error("invalid animation type", e), e.direction = 0), !0) })) : t.anim = [], t.anim.forEach(function(e) {
            ["delay", "duration"].forEach(function(t) { "string" == typeof e[t] && (e[t] = parseFloat(e[t])) }) }) }

    function c(e) { var t = e.type,
            n = e.properties,
            i = n.cropSize,
            o = n.croptype,
            r = n.pageLength; "EqxBackground" === m[t] && (i && !o && (n.croptype = y["固定背景模式"]), r && (r < 2 && delete n.pageLength, r < 10 && (n.pageLength = 486 * r))) }

    function u(e) { if ("EqxImage" === m[e.type]) { var t = e.properties;
            f(t), f(t.imgStyle || (t.imgStyle = {})) } }

    function l(e) { var t = m[e.type]; "string" != typeof e.choices || "EqxCheckbox" !== t && "EqxDropDownList" !== t && "EqxRadio" !== t || (e.choices = JSON.parse(e.choices) || {}) }

    function p(e) {}

    function h(e) { "EqxDropDownList" == m[e.type] && (e.showText && e.placeholderText && (e.choices.options.unshift({ id: 0, label: e.placeholderText }), e.choices.options.map(function(t) { t.value = t.id, delete t.id, t.selected = !1, t.label == e.showText && (t.selected = !0) })), delete e.showText, delete e.placeholderText, delete e.choices.seq) }

    function d(e, t) { var n = t.meta.publishTime,
            i = m[e.type]; if ("EqxText" === i || "EqxAwesomeText" === i) { e.type = 2, e.properties && e.properties.dataUrl && delete e.properties.dataUrl; var o = e.content;
            o && o.length > 0 && (o = o.replace(/(^\s*)|(\s*$)/g, ""), w.isBadStr(o) && (console.error("xss text"), o = w.toGoodStr(o)), e.content = o), e.publishTime = n } }

    function f(e) { "100%" === e.width && (e.width = 320), ["opacity", "width", "height", "top", "bottom", "left", "right", "zIndex", "borderWidth", "borderBottomLeftRadius", "borderBottomRightRadius", "borderTopRightRadius", "borderTopLeftRadius", "borderRadius"].forEach(function(t) { var n = e[t];
            n && (e[t] = parseFloat(n)) }) }

    function g(e) { var t = e.css,
            n = m[e.type],
            i = ["top", "bottom", "left", "zIndex", "width", "height", "lock", "transform", "opacity", "color", "backgroundColor", "lineHeight", "fontSize", "textAlign", "fontWeight", "writingMode", "letterSpacing", "fontFamily", "paddingBottom", "paddingTop", "letterSpacing", "fontStyle", "textDecoration", "letterSpacing", "fontStyle", "borderWidth", "borderStyle", "borderColor", "borderRadius", "borderRadiusPerc", "borderBottomRightRadius", "borderBottomLeftRadius", "borderTopRightRadius", "borderTopLeftRadius", "boxShadow", "boxShadowDirection", "boxShadowSize"]; return Object.keys(t).forEach(function(e) { var o = i.indexOf(e),
                r = t[e]; if (o === -1 && (_DEBUG_, "EqxInput" === n && "text-align" === e && (t.textAlign = t.textAlign || t["text-align"], delete t[e]), "border" === e)) { var s = v(r);
                t.borderColor = s.borderColor || t.borderColor, t.borderWidth = s.borderWidth || t.borderWidth, t.borderStyle = s.borderStyle || t.borderStyle, delete t[e], _DEBUG_ && console.info("delete border:", r, "add", t.borderColor, t.borderWidth, t.borderStyle) } }), e }

    function v(e) { var t = e.split(" "); return { borderWidth: t[0], borderStyle: t[1], borderColor: t[2] } }
    var m = n(65).COMP_TYPE,
        y = n(67).BG_CROP_TYPE,
        b = n(64),
        x = n(68).ANIMATION_TYPE,
        w = n(72),
        k = n(22).getUrlParam,
        P = k("compKey");
    e.exports = { perfectComp: i, perfectJson: r, perfectCss: s, perfectAnim: a, perfectBg: c, perfectChoice: l, perfectInput: p, perfectText: d, perfectTrigger: b }
}, function(e, t) { "use strict"; var n = { "固定背景模式": 1, "全屏背景模式": 2 };
    e.exports = { BG_CROP_TYPE: n } }, function(e, t, n) { "use strict";

    function i(e) { if (e.$boxDiv.css({ animation: "" }), e.$contextCopy) { var t = e.$contextCopy.data("typed");
            t && t.reset() } }

    function o(e, t) {
        function n() { if (v++, v >= g.length) l && l();
            else { var t = g[v],
                    i = t.type,
                    m = t.direction,
                    y = t.duration,
                    b = void 0 === y ? .1 : y,
                    x = t.linear,
                    w = t.count,
                    k = t.countNum,
                    P = void 0 === k ? 1 : k,
                    _ = t.delay,
                    E = void 0 === _ ? 0 : _;
                0 === b && (b = .1), null == E && (E = 0); var $ = x ? "linear" : "ease",
                    S = u[i]; if (!S) return n(); var O = S[m] || u[i][0],
                    I = w ? "infinite" : P; if (o && (I = 1), h.css({ "animation-name": "", "animation-duration": "", "animation-timing-function": "", "animation-delay": "", "animation-iteration-count": "" }), "typer" === O) d.css({ opacity: 0 }), r().then(function() { var t = g[v].interval,
                        i = e.create$context(),
                        o = { position: "absolute", "pointer-events": "none" };
                    e.compJson.css.writingMode && "vertical-rl" === e.compJson.css.writingMode ? o.left = "-30px" : o.top = "0px", i.attr("context-copy", 1).css(o), d.after(i), e.$contextCopy = i; var r = function() { e.$contextCopy = null, setTimeout(function() { i.remove(), i = null, e.$contextCopy || d.css({ opacity: 1 }), n() }, 100) };
                    i.typed({ strings: [f.content], contentType: "html", showCursor: !1, typeSpeed: 1e3 * t || 0, startDelay: 1e3 * E || 0, onFirstTyped: function() { setTimeout(function() { i && i.css({ opacity: 1 }) }, 0) }, callback: function() { clearInterval(i.data("typed").timeout), i.removeData("typed"), r() }, resetCallback: function() { r() } }) }, function() { d.css({ opacity: 1 }) });
                else if ("particles" === O) { var T = function() { if ("number" == typeof I) { if (1 == I) return void n();
                                I > 1 && C(), I-- } else C() },
                        C = function A() { var t = Math.abs(parseInt(h.find("img").css("marginLeft"))),
                                n = Math.abs(parseInt(h.find("img").css("marginTop")));
                            h.css("opacity", "0"); var A = new a({ type: e.compJson.type, top: t, left: n, $parEle: p, imgUrl: c + e.compJson.properties.src, startX: e.compJson.css.width, startY: e.compJson.css.height, imgX: 0, imgY: 0, delay: 1e3 * E, duration: 1e3 * b, interval: 0, ease: "linear" }, T);
                            A.animate() };
                    p.remove("canvas"), "h" == e.compJson.type ? (h.css("opacity", "0"), s().then(function() { C() })) : C() } else { var q = { "animation-name": O, "animation-duration": b + "s", "animation-timing-function": $, "animation-delay": E + "s", "animation-iteration-count": I, "animation-direction": "normal", "animation-fill-mode": "both" },
                        j = Object.keys(q).map(function(e) { return q[e] }).join(" ");
                    h.css("animation", j), h.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() { v < g.length - 1 && h.css({ "animation-name": "", "animation-duration": "", "animation-timing-function": "", "animation-delay": "", "animation-iteration-count": "" }), setTimeout(function() { n() }, 0) }) } } } var i = t.animIndex,
            o = t.maxCount,
            l = t.callback,
            p = e.$li,
            h = e.$boxDiv,
            d = e.$context,
            f = e.compJson,
            g = f.properties.anim || [];
        i && (g = g.slice(i, i + 1)); var v = -1;
        n() } var r = n(21).$loadTyped,
        s = n(21).$canvas,
        a = n(69).Particles,
        c = n(20).FILE,
        u = n(70).ANIMATION_TYPE;
    n(71), e.exports = { startAnimation: o, stopAnimation: i, ANIMATION_TYPE: u } }, function(e, t) { "use strict";

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var o, r = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        s = (o = { easeInOutBack: function(e, t, n, i, o) { return void 0 == o && (o = 1.70158), (e /= i / 2) < 1 ? n / 2 * (e * e * (((o *= 1.525) + 1) * e - o)) + t : n / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + t }, linear: function(e, t, n, i) { return n * e / i + t }, easeInOutQuad: function(e, t, n, i) { return e /= i / 2, e < 1 ? n / 2 * e * e + t : (e--, -n / 2 * (e * (e - 2) - 1) + t) }, easeOutQuad: function(e, t, n, i) { return e /= i, -n * e * (e - 2) + t } }, i(o, "easeOutQuad", function(e, t, n, i) { return e /= i, -n * e * (e - 2) + t }), i(o, "easeInCubic", function(e, t, n, i) { return e /= i, n * e * e * e + t }), i(o, "easeOutCubic", function(e, t, n, i) { return e /= i, e--, n * (e * e * e + 1) + t }), i(o, "easeInOutCubic", function(e, t, n, i) { return e /= i / 2, e < 1 ? n / 2 * e * e * e + t : (e -= 2, n / 2 * (e * e * e + 2) + t) }), i(o, "easeInQuart", function(e, t, n, i) { return e /= i, n * e * e * e * e + t }), i(o, "easeOutQuart", function(e, t, n, i) { return e /= i, e--, -n * (e * e * e * e - 1) + t }), i(o, "easeInOutQuart", function(e, t, n, i) { return e /= i / 2, e < 1 ? n / 2 * e * e * e * e + t : (e -= 2, -n / 2 * (e * e * e * e - 2) + t) }), i(o, "easeInQuint", function(e, t, n, i) { return e /= i, n * e * e * e * e * e + t }), i(o, "easeOutQuint", function(e, t, n, i) { return e /= i, e--, n * (e * e * e * e * e + 1) + t }), i(o, "easeInOutQuint", function(e, t, n, i) { return e /= i / 2, e < 1 ? n / 2 * e * e * e * e * e + t : (e -= 2, n / 2 * (e * e * e * e * e + 2) + t) }), i(o, "easeInSine", function(e, t, n, i) { return -n * Math.cos(e / i * (Math.PI / 2)) + n + t }), i(o, "easeOutSine", function(e, t, n, i) { return n * Math.sin(e / i * (Math.PI / 2)) + t }), i(o, "easeInOutSine", function(e, t, n, i) { return -n / 2 * (Math.cos(Math.PI * e / i) - 1) + t }), i(o, "easeInExpo", function(e, t, n, i) { return n * Math.pow(2, 10 * (e / i - 1)) + t }), i(o, "easeOutExpo", function(e, t, n, i) { return n * (-Math.pow(2, -10 * e / i) + 1) + t }), o),
        a = function() {
            function e(t, i) { n(this, e), this.colNumber = 3, this.$parEle = t.$parEle, this.canvas = {}, this.image = {}, this.requestId = 0, this.startTime = 0, this.array = [], this.startX = t.startX, this.startY = t.startY, this.callBackFn = i, this.param = t, this.init() } return r(e, [{ key: "randomX", value: function() { return parseInt(Math.random() * this.startX) } }, { key: "randomY", value: function() { return parseInt(Math.random() * this.startY) } }, { key: "init", value: function() { var e = this; if (this.$parEle.find("canvas").remove(), this.$canvas = $("<canvas></canvas>"), this.$parEle.prepend(this.$canvas), this.$canvas.css({ position: "absolute", top: 0, left: 0 }), this.canvas = this.$canvas[0], this.image.isLoaded = !1, this.canvas.width = this.$parEle.width(), this.canvas.height = this.$parEle.height(), this.canvas.width > 300 && this.canvas.height > 300 && (this.colNumber = 4), this.canvas.ctx = this.canvas.getContext("2d"), "h" === this.param.type) return void setTimeout(function() { canvg(e.canvas, e.$parEle.find(".element-box-contents")[0], { ignoreMouse: !0, ignoreAnimation: !0 }), e.calCanvas() }, 10); if (this.canvas && this.canvas.getContext) { var t = new Image;
                        t.onload = function() { var n = e.$parEle.find("img").width(),
                                i = e.$parEle.find("img").height(),
                                o = t.height / i,
                                r = t.width / n;
                            e.canvas.ctx.drawImage(t, e.param.top * r, e.param.left * o, r * e.canvas.width, o * e.canvas.height, 0, 0, e.canvas.width, e.canvas.height), e.calCanvas() }, t.crossOrigin = "anonymous", t.src = this.param.imgUrl } } }, { key: "draw", value: function() { this.image.isLoaded ? this._draw() : setTimeout(this.draw.bind(this)) } }, { key: "animate", value: function() { this.image.isLoaded ? this._animate(this.param.delay) : setTimeout(this.animate.bind(this)) } }, { key: "_calculate", value: function(e) { for (var t = this.image.imgData.data, n = e.cols, i = e.rows, o = Math.round(this.canvas.width / n), r = Math.round(this.canvas.height / i), s = 0, a = {}, c = 0; c < n; c++)
                        for (var u = 0; u < i; u++) s = 4 * (u * r * this.canvas.width + c * o), t[s + 3] > 25 && (a = { x0: this.randomX(), y0: this.randomY(), x1: this.param.imgX + c * o, y1: this.param.imgY + u * r, delay: u / 20, currTime: 0, count: 0, duration: parseInt(e.duration / 16.66) + 1, interval: parseInt(10 * Math.random() * e.interval), ease: e.ease, ratioX: e.ratioX, ratioY: e.ratioY }, a.fillStyle = "rgba(" + t[s] + ", " + t[s + 1] + ", " + t[s + 2] + "," + t[s + 3] + ")", this.array.push(a)) } }, { key: "_draw", value: function() { this.canvas.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); for (var e = this.array.length, t = null, n = 0; n < e; n++) t = this.array[n], this.canvas.ctx.fillStyle = t.fillStyle, this.canvas.ctx.fillRect(t.x1, t.y1, 1, 1) } }, { key: "_render", value: function() { var e = this;
                    this.canvas.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); for (var t, n, i = this.array, o = i.length, r = null, a = 0, c = 0, u = 0, l = 1, p = 1, h = 0; h < o; h++)
                        if (r = i[h], r.count++ > r.delay) { if (this.canvas.ctx.fillStyle = r.fillStyle, a = r.currTime, c = r.duration, u = r.interval, 1 !== r.ratioX ? l = r.ratioX + 2 * Math.random() : 1, 1 !== r.ratioY ? p = r.ratioY + 2 * Math.random() : 1, i[o - 1].duration + i[o - 1].interval < .9 * i[o - 1].currTime) return this.canvas = null, cancelAnimationFrame(this.requestId), this.$parEle.find("canvas").remove(), this.$parEle.find(".element-box").css("opacity", "1"), void setTimeout(function() { e.callBackFn() }, 300);
                            a < c + u ? a >= u && (t = s[r.ease]((a - u) * l, r.x0, (r.x1 - r.x0) * l, c), n = s[r.ease]((a - u) * p, r.y0, (r.y1 - r.y0) * p, c), this.canvas.ctx.fillRect(t, n, 1, 1)) : this.canvas.ctx.fillRect(r.x1, r.y1, 1, 1), r.currTime += Math.random() + .5 }
                    this.requestId = requestAnimationFrame(this._render.bind(this)) } }, { key: "_animate", value: function(e) { var t = this;
                    this.startTime + e < (new Date).getTime() ? this.requestId = requestAnimationFrame(this._render.bind(this)) : setTimeout(function() { t._animate(e) }) } }, { key: "calCanvas", value: function() { var e = this.param;
                    this.image.imgData = this.canvas.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height), this.canvas.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this._calculate({ duration: e.duration || 0, delay: e.delay || 0, interval: e.interval || 0, ease: e.ease, ratioX: 1, ratioY: 1, cols: Math.ceil(this.canvas.width / this.colNumber) || 100, rows: Math.ceil(this.canvas.height / this.colNumber) || 100 }), this.image.isLoaded = !0, this.startTime = (new Date).getTime() } }]), e }();
    e.exports = { Particles: a } }, function(e, t) { "use strict"; var n = { 0: ["fadeIn"], 1: ["fadeInLeft", "fadeInDown", "fadeInRight", "fadeInUp"], 2: ["bounceInLeft", "bounceInDown", "bounceInRight", "bounceInUp"], 3: ["bounceIn"], 4: ["zoomIn"], 5: ["rubberBand"], 6: ["wobble"], 7: ["rotateIn"], 8: ["flip"], 9: ["swing"], 10: ["fadeOut"], 11: ["flipOutY"], 12: ["rollInRight", "rollInDown", "rollInLeft", "rollInUp"], 13: ["lightSpeedInRight", "lightSpeedInDown", "lightSpeedInLeft", "lightSpeedInUp"], 14: ["bounceOut"], 15: ["rollOutRight", "rollOutDown", "rollOutLeft", "rollOutUp"], 16: ["lightSpeedOutRight", "lightSpeedOutDown", "lightSpeedOutLeft", "lightSpeedOutUp"], 17: ["fadeOutRight", "fadeOutDown", "fadeOutLeft", "fadeOutUp"], 18: ["zoomOut"], 19: ["bounceOutRight", "bounceOutDown", "bounceOutLeft", "bounceOutUp"], 20: ["flipInY"], 21: ["tada"], 22: ["jello"], 23: ["flash"], 24: ["flipInX"], 25: ["flipOutX"], 26: ["twisterInDownRight", "twisterInDownDown", "twisterInDownLeft", "twisterInDownUp"], 27: ["puffIn"], 28: ["puffOut"], 29: ["slideDown"], 30: ["slideUp"], 31: ["twisterInUpRight", "twisterInUpDown", "twisterInUpLeft", "twisterInUpUp"], 32: ["hingeRight", "hingeLeft"], particles: ["particles"], typer: ["typer"] };
    e.exports = { ANIMATION_TYPE: n } }, function(e, t) {}, function(e, t) { "use strict";

    function n(e) { return e ? e.replace(/<\s*(img|input)[^>]*\/?>/gi, "").replace(/<\s*(script|textarea|svg|iframe|embed)[^>]*>.*?<\s*\/\1\s*>/gi, "") : e }

    function i(e) { return !!e && (e = e.replace(/[↵\n\t\s]/g, ""), /<\s*(img|input)[^>]*\/?>/gi.test(e) || /<\s*(script|textarea|svg|iframe|embed)[^>]*>.*?<\s*\/\1\s*>/gi.test(e)) } e.exports = { toGoodStr: n, isBadStr: i } }, function(e, t, n) { "use strict";

    function i(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function o(e, t) { E && console.log("getLastPage"); var n = {}; return new Promise(function(i) { return e ? b(e).then(function(e) { return f(t, e.obj) }).then(function(e) { return c(e), i(e) }) : (n = l(t), c(n), i(n)) }) }

    function r(e) { E && (console.log("addEqAdInfo"), console.log("scene", e)); var t = e.meta,
            n = t.id,
            o = t.property,
            r = o.lastPageId,
            u = o.eqAdType,
            h = t.bizType,
            g = t.isTemplate,
            k = t.ext,
            $ = e.list,
            S = $.length,
            O = void 0;
        g ? 1 === g ? O = 122 : 2 === g && (O = 222) : O = h ? 212 : 112; var I = void 0,
            T = window.location.host; return I = T.indexOf(v.EQX_AD_DOMAIN) !== -1 ? 1 : T.indexOf(v.EQX_TG) !== -1 ? 2 : T.indexOf(v.EQX_VIP_DOMAIN) !== -1 ? 4 : T.indexOf(v.EQX_APP_DOMAIN) !== -1 ? 5 : T.indexOf(v.EQX_COMPANY_DOMAIN) !== -1 ? 3 : 6, E && console.log("domain", I), new Promise(function(t) {
            function o() { return _() ? (v = l(e), c(v), $.push(v), t(e)) : P(O, I).then(function(n) { return v = l(e, n.obj), c(v), $.push(v), t(e) })["catch"](function() { return v = l(e), c(v), $.push(v), t(e) }) } var v = void 0; if (S && (v = $[S - 1], v.elements = v.elements || []), 40 == h && /eqxiu|yqxiu/.test(location.host)) return v = s(e), c(v), $.push(v), t(e); if (!(w() || 30 != h && 2 != g || u != m["deepshare尾页"] && (u != m["技术支持尾页"] || r))) return _() ? (v = a(e), c(v), $.push(v), t(e)) : P(O, I).then(function(e) { return e.obj }).then(function(n) { return v = a(e, n), c(v), $.push(v), t(e) })["catch"](function() { return v = a(e), c(v), $.push(v), t(e) }); switch ("" + u) {
                case m["无尾页无底标"]:
                    return t(e);
                case m["技术支持尾页"]:
                    if (k && k.yqc && k.yqc.tail) var E = x(n).then(function(n) { return v = n.obj, c(v), $.push(v), t(e) });
                    else E = Promise.reject(); return E["catch"](function() { return r ? b(r).then(function(t) { return f(e, t.obj) }).then(function(n) { return c(n), $.push(n), t(e) })["catch"](function() { return o() }) : o() });
                case m["技术支持底标"]:
                    try { var T = p(v),
                            C = y.bottomLabel({ sceneId: n, pageId: v.pageId, top: T, pageIndex: S }); return v.elements.push(C), t(e) } catch (q) { return console.error("添加技术支持底标尾页失败", q), o() }
                case m["品牌联合底标"]:
                    try { return d(e).then(function(n) { return v.elements = [].concat(i(v.elements), i(n)), t(e) }) } catch (q) { return console.error("添加品牌联合底标失败", q), o() }
                default:
                    return o() } }) }

    function s(e) { E && console.log("getWapLastPage"); var t = e.meta,
            n = t.id,
            i = t.cover,
            o = t.name,
            r = t.code,
            s = e.list.length + 1,
            a = v.WAP_HOST + "wpmall/"; return y.lastPage({ id: n, name: o, num: s, cover: i, code: r, isDeepShare: !1, href: a }) }

    function a(e, t) { E && console.log("getDeepSharePage"); var n = e.meta,
            i = n.id,
            o = n.cover,
            r = n.name,
            s = n.code,
            a = e.list.length + 1; return y.lastPage({ id: i, name: r, num: a, cover: o, code: s, isDeepShare: !0 }, t) }

    function c(e, t) { var n = e.pageId,
            i = e.sceneId,
            o = e.num,
            r = y.report({ pageId: n, sceneId: i, pageIndex: o, center: t });
        e.elements.push(r) }

    function u(e) { var t = e.sceneId,
            n = e.url; return v.SERVER_1 + "eqs/link?id=" + t + "&url=" + encodeURIComponent(n) }

    function l(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        E && console.log("getDefaultLastPage"); var n = e.meta,
            i = n.id,
            o = n.cover,
            r = n.name,
            s = e.list.length + 1; return y.lastPage({ id: i, name: r, num: s, cover: o }, t) }

    function p(e) { var t = (e.properties || {}).longPage || 1; return t < 10 ? 486 * (t - 1) : t - 486 }

    function h(e, t, n) { E && console.log("getDefaultBottom"); var i = p(e),
            o = y.bottomLabel({ sceneId: t, pageId: e.pageId, top: i, pageIndex: n }); return o }

    function d(e) { E && console.log("getCustomBottomLabel"); var t = e.meta,
            n = t.id,
            i = t.property.bottomLabel,
            o = i.id,
            r = i.name,
            s = i.url; if (!o) throw new Error("No bottomLabel's id"); var a = e.list,
            c = a[a.length - 1],
            u = p(c),
            l = c.pageId; return b(o).then(function(e) { return (e.obj.elements || []).map(function(e) { return g({ ele: e, sceneId: n, pageId: l, url: s, top: u, name: r }) }) }, function() { if (_DEBUG_) throw new Error("Invalid Custom Bottom Label"); return [] }) }

    function f(e, t) { var n = e.list,
            o = e.meta,
            r = o.cover,
            s = o.id,
            a = o.name;
        t.properties = t.properties || {}, t.sceneId = s; var c = function(e) { var t = e.properties.src; return 4 == e.type && !!t && ["group1/M00/A5/5E/yq0KA1QmePmAKr7yAAEByp5jyLc752.jpg", "group1/M00/C5/9D/yq0KA1SH1zuAFgkLAAAFgBR8hJs456.png", "group1/M00/C5/3F/yq0KA1SHp-2AQZZZAAB-7rIaK6I743.png", "group1/M00/C5/9D/yq0KA1SH1zuAeQuFAAAFfUkeXDc110.png"].includes(t) },
            u = function(e) { 2 == e.type && /http:\/\/service.eqxiu.com\/eqs\/link/.test(e.content) && (e.content = e.content.replace(/;url=.*com"/, ";url=" + encodeURIComponent(k))) }; if ("group1/M00/61/8A/yq0KA1T2vYSAEgo7AACovQVgHxk048.jpg" !== r) { var l = y.image1();
            l.properties.src = r } else l = y.eqxLogo(); return t.elements = t.elements.filter(function(e) { return !c(e) }), t.elements.forEach(u), t.elements = [].concat(i(t.elements), [y.shadow(), l, y.line(), y.title(a)]), t.num = n.length + 1, t }

    function g(e) { var t = e.ele,
            n = e.sceneId,
            i = (e.pageId, e.url),
            o = e.top,
            r = e.name;
        t.sceneId = n, t.pageId = 129811; var s = "EQXIU.COM科技公司",
            a = t.type; return 2 == a && (r && i && "http://" !== i && (t.content = t.content.replace(new RegExp(s), '<a href="' + u({ sceneId: n, url: i }) + '" target=_blank data-event="1120203">' + r + "</a>")), r ? t.content = t.content.replace(new RegExp(s), r) : /易企秀技术支持/.test(t.content) && (Object.assign(t.css, { zIndex: 1e3, height: 33, width: 129, left: 97 }), t.content = '<div style="text-align: center;">' + t.content + "</div>")), t.css.top += o, t.css.zIndex = 200, t } var v = n(20),
        m = n(53).AD_TYPE,
        y = n(74),
        b = n(58).$getPageInfo,
        x = n(59).$getYqcTail,
        w = n(23).isApp,
        k = n(22).redirectUrl(),
        P = n(58).$getLastPageConfig,
        _ = n(23).mobilecheck,
        E = !1;
    e.exports = { addEqAdInfo: r, getLastPage: o, getDefaultBottom: h, getCustomBottomLabel: d } }, function(e, t, n) { "use strict";

    function i(e) { var t = e.sceneId,
            n = void 0 === t ? 16060 : t,
            i = e.pageId,
            o = e.top,
            r = e.pageIndex,
            s = d.SERVER_1 + "eqs/link?id=" + n + "&url=" + encodeURIComponent(f),
            a = '\n<div style="text-align: center;transform: translateY(-2px);-webkit-animation: fadeIn 2s ease 1s both;-webkit-animation-play-state: initial;">\n    <a href="' + s + '" target="_blank"\n       style="font-size: x-small;display:block;line-height: 10px;">\n        <font color="#ffffff">' + g + "</font>\n    </a>\n</div>"; return { id: m(), pageId: i, sceneId: n, num: r, type: 2, content: a, status: 1, css: { zIndex: "1000", height: "20", width: "129", left: "97px", top: 418 + o + "px", backgroundColor: "rgba(0,0,0,0.6)", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopRightRadius: 20, borderTopLeftRadius: 20, borderRadius: 20 }, properties: { anim: { type: 0, direction: 0, duration: 2, delay: 0 } } } }

    function o(e) { var t = e.pageId,
            n = void 0 === t ? 1 : t,
            i = e.sceneId,
            o = void 0 === i ? 1 : i,
            r = e.pageIndex,
            s = void 0 === r ? 1 : r,
            a = e.center,
            c = '\n<div style="text-align: right;">\n    <span style="line-height: 1; background-color: initial;">\n        <font size="2" color="#888888"><b></b></font>\n    </span>\n</div>'; return { id: m(), pageId: n, sceneId: o, num: s, type: 299, content: c, status: 1, css: { zIndex: 999, height: 36, width: 60, left: a ? 130 : 10, top: 420 }, properties: { anim: { type: 0, direction: 0, duration: 3, delay: 1 } } } }

    function r() { return { id: m(), pageId: "", sceneId: "", num: 1, type: "4", isInput: 0, title: null, content: null, status: 1, css: { borderRadius: "0", borderStyle: "solid", height: "158", zIndex: "1000", borderColor: "rgba(0,0,0,1)", boxShadow: "0 0px 0px #333333", color: "#000000", backgroundColor: "white", borderWidth: "0px", width: "158", left: "84px", paddingTop: "11px", paddingLeft: "10px", top: "170px" }, properties: { height: "100px", imgStyle: { width: 139, height: 136, marginTop: "0px", marginLeft: "0px" }, width: "100px", src: "group1/M00/01/30/yq0JCFQpOR-AOULFAAFBPO1yzBQ984.jpg" } } }

    function s() { return { id: m(), pageId: 129810, sceneId: 16060, num: 1, type: 2, isInput: 0, title: null, content: '\n<div class="logo-shadow1" style="text-align: center; \n    cursor:pointer;height:127px;width:220px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);\n    position:absolute;left:20px;top:56px;">\n</div>', status: 1, css: { height: "257", width: "257", left: "78px", top: "175px" }, properties: {} } }

    function a() { return { id: m(), pageId: 129810, sceneId: 16060, num: 1, type: "2", isInput: 0, title: null, content: '\n<div class="bottom-logo" style="text-align: center;cursor:pointer;height:136px;width:139px;">\n    <em style="color:white;line-height:136px;font-size:120px;" class="eqf-eqxiu"></em>\n</div>', status: 1, css: { height: "158", width: "158", left: "84px", top: "170px", backgroundColor: "white" }, properties: {} } }

    function c() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "点击此处进行编辑"; return { id: m(), pageId: "", sceneId: "", num: 1, type: "2", isInput: 0, title: null, content: '<div style="text-align: center;"><font color="#ffffff" size="3">' + e + "</font></div>", status: 1, css: { zIndex: "102", height: "65", width: "320", left: "0px", top: "70px" }, properties: {} } }

    function u() { var e = '<div style="width:280px;height:1px;background-color:rgba(60,60,60,0.4);cursor:pointer;position:absolute;left:0;-webkit-filter:drop-shadow(0px 1px 0px rgba(60,60,60,0.4));top:12px;"></div>'; return { id: m(), pageId: 129810, sceneId: 16060, num: 1, type: "2", isInput: 0, title: null, content: e, status: 1, css: { height: "24", width: "280", left: "21px", top: "122px" }, properties: {} } }

    function l() { var e = '<div class="logo-shadow1" style="text-align: center;cursor:pointer;height:127px;width:220px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);position:absolute;left:20px;top:56px;"></div>'; return { id: m(), pageId: 129810, sceneId: 16060, num: 1, type: "2", isInput: 0, title: null, content: e, status: 1, css: { height: 257, width: 257, left: "78px", top: "175px" }, properties: {} } }

    function p(e, t) { var n = e.id,
            i = void 0 === n ? 16060 : n,
            o = e.name,
            r = e.num,
            s = e.cover,
            a = void 0 === s ? "group1/M00/BA/DA/yq0KA1Rq8COAAYRjAAKU4OVYum0889.jpg" : s,
            c = (e.code, e.isDeepShare),
            u = e.href;
        o = o || "", t = t || {}; var l = 129810,
            p = i;
        u = u ? d.SERVER_1 + "eqs/link?id=" + i + "&url=" + encodeURIComponent(u) : v() ? "" : window.location.href; var h = "美媒课堂",
            g = "#23a3d3",
            y = "",
            b = '<div style="text-align: center;">\n                        <span style="line-height: 1; background-color: initial;">\n                            <font size="4" color="#888888"><b>' + (t.sceneName || o) + "</b></font>\n                        </span>\n                    </div>",
            x = '<div style="width:280px;\n                                height:1px;\n                                background-color:rgba(60,60,60,0.4);\n                                cursor:pointer;\n                                position:absolute;\n                                left:0;\n                                -webkit-filter:drop-shadow(0px 1px 0px rgba(60,60,60,0.4));\n                                top:12px;"></div>',
            w = '<div style="text-align: center;padding-top: 0;">\n                        <span style="font-size: small; line-height: 1; background-color: initial;">\n                            <a href="' + u + '" target="_blank">\n                                <font color="#888888">' + y + '</font>\n                                <font color="' + g + '">' + h + "</font>\n                            </a>\n                        </span>\n                    </div>",
            k = '<a class="element comp_anchor editable-text deepShareHref" \n                       data-event="1120601"\n                       style="cursor: default; \n                              width: 100px; \n                              height: 36px; \n                              display: block;\n                              background: #08c3fd; \n                              color:#ffffff;\n                              font-size:13px;\n                              border-radius: 4px;">使用该模板</a>',
            P = { id: "", sceneId: p, num: r, name: o, properties: {}, elements: [] },
            _ = { id: m(), pageId: l, sceneId: p, num: 0, type: "3", css: {}, properties: {} };
        t.backgroundSrc ? _.properties.imgSrc = t.backgroundSrc : _.properties.bgColor = "#E6E9EE", P.elements.push(_); var E = { id: m(), pageId: l, sceneId: p, num: 1, type: "2", content: b, css: { height: "65", zIndex: "10", width: "320", left: "0px", top: "77px" }, properties: {} };
        P.elements.push(E); var $ = { id: m(), pageId: l, sceneId: p, num: 2, type: "4", isInput: 0, title: null, content: null, status: 1, css: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10, borderRadius: 10, borderStyle: "solid", zIndex: "9", borderColor: "rgba(0,0,0,1)", paddingTop: "0px", height: "142", backgroundColor: "", color: "", boxShadow: "0px 0px 0px #333333", borderWidth: "0px", width: "142", left: "92px", paddingBottom: "0px", top: "177px" }, properties: { height: "100px", imgStyle: { width: 142, height: 142, marginTop: "-0.5px", marginLeft: "0px" }, width: "100px", src: a } };
        t.logoSrc && ($.properties.src = t.logoSrc), t.logoLink && ($.properties.url = t.logoLink), P.elements.push($); var S = { id: m(), pageId: 129810, sceneId: p, num: 1, type: "2", content: x, css: { height: "24", width: "280", left: "21px", top: "122px" }, properties: {} }; if (P.elements.push(S), t.brandSrc) { var O = { id: m(), pageId: l, sceneId: p, num: 2, type: "4", isInput: 0, title: null, content: null, status: 1, css: { height: "40px", width: "320px", left: "0", top: "420px", zIndex: "13" }, properties: { url: t.brandLink, src: t.brandSrc, imgStyle: { width: 320, height: 40 } } };
            P.elements.push(O) } else { var I, T = { id: m(), pageId: l, sceneId: p, num: 1, type: c && !v() ? "298" : "2", content: c ? k : "", css: { height: "36", width: "120", left: "98px", top: "350px", zIndex: "13" }, properties: {} },
                C = { id: 439885, pageId: l, sceneId: p, num: 1, type: c && !v() ? "298" : "2", content: w, css: { borderRadius: "0px", borderStyle: "solid", height: "30", paddingTop: "0px", borderColor: "rgba(222,220,227,1)", zIndex: "12", boxShadow: "0px 0px 0px rgba(200,200,200,0.6)", color: "", backgroundColor: "rgba(255,255,255,0)", borderWidth: "0px", width: "320", left: "1px", bottom: "36px", paddingBottom: "20px" }, properties: { anim: [{ type: 1, direction: 3, duration: "1", delay: "0.6" }] } };
            (I = P.elements).push.apply(I, [T, C]) } return P }

    function h() { return { id: 849219621, sceneId: 87910723, num: 1, name: null, properties: {}, elements: [{ css: { top: -132, left: -270, width: 873, height: 692, zIndex: 1, color: "#676767", backgroundColor: "", opacity: 1, transform: "rotateZ(0deg)", textAlign: "left", borderWidth: 0, borderStyle: "solid", borderColor: "rgba(0,0,0,1)", borderRadius: 0, borderRadiusPerc: 0, borderBottomRightRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0, paddingBottom: 0, paddingTop: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0.5)", boxShadowDirection: 0, boxShadowSize: 0 }, properties: { src: "Fl5L4C5JXbrlNDUm1TlMi6rZP7SA", imgStyle: { width: 873, height: 1376.3390625, marginTop: -342.16953125, marginLeft: 0 }, maskSrc: "", originSrc: "Fl5L4C5JXbrlNDUm1TlMi6rZP7SA", anim: [], initType: 0 }, type: 4, id: 4791539496, pageId: 849219621, sceneId: 87910723, num: 1, name: "图片1" }, { css: { top: -197.5, left: -118, width: 579.5, height: 388, zIndex: 2, color: "#676767", backgroundColor: "", opacity: 1, transform: "rotateZ(0deg)", textAlign: "left", borderWidth: 0, borderStyle: "solid", borderColor: "rgba(0,0,0,1)", borderRadius: 0, borderRadiusPerc: 0, borderBottomRightRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0, paddingBottom: 0, paddingTop: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0.5)", boxShadowDirection: 0, boxShadowSize: 0 }, properties: { src: "Fie_7zLKX1jFwnowjnupl0uxuRzf", imgStyle: { width: 579.5, height: 388, marginLeft: 0, marginTop: 0 }, maskSrc: "", originSrc: "Fie_7zLKX1jFwnowjnupl0uxuRzf", anim: [{ type: 0, direction: 0, duration: 1, delay: 0, countNum: 1, interval: 0, count: 0, $show: !0, $$hashKey: "object:1200" }], initType: 0 }, type: 4, id: 2648920976, pageId: 849219621, sceneId: 87910723, num: 2, name: "图片2" }, { css: { top: 283.5, left: 78, width: 165, height: 50.5, zIndex: 5, color: "#676767", backgroundColor: "", opacity: 1, transform: "rotateZ(0deg)", textAlign: "left", borderWidth: 0, borderStyle: "solid", borderColor: "rgba(0,0,0,1)", borderRadius: 0, borderRadiusPerc: 0, borderBottomRightRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0, paddingBottom: 0, paddingTop: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0.5)", boxShadowDirection: 0, boxShadowSize: 0 }, properties: { src: "FszOmxnRNeOR4QbwDnYQHGP4uF4G", imgStyle: { width: 165, height: 50.5, marginLeft: 0, marginTop: 0 }, maskSrc: "", originSrc: "FszOmxnRNeOR4QbwDnYQHGP4uF4G", anim: [{ type: 24, direction: 0, duration: 1, delay: .2, countNum: 1, interval: 0, count: 0, $show: !0, $$hashKey: "object:1336" }], initType: 0 }, type: 4, id: 6696803295, pageId: 849219621, sceneId: 87910723, num: 5, name: "图片4" }, { css: { top: 118.5, left: 86, width: 148, height: 148, zIndex: 4, color: "#676767", backgroundColor: "", opacity: 1, transform: "rotateZ(0deg)", textAlign: "left", borderWidth: 0, borderStyle: "solid", borderColor: "rgba(0,0,0,1)", borderRadius: 0, borderRadiusPerc: 0, borderBottomRightRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0, paddingBottom: 0, paddingTop: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0.5)", boxShadowDirection: 0, boxShadowSize: 0 }, properties: { src: "FvqrpftukXbdDhFScUbzUuFZEIkz", imgStyle: { width: 148, height: 148, marginLeft: 0, marginTop: 0 }, maskSrc: "", originSrc: "FvqrpftukXbdDhFScUbzUuFZEIkz", anim: [{ type: 4, direction: 0, duration: 1, delay: 0, countNum: 1, interval: 0, count: 0, $show: !0, $$hashKey: "object:1268" }], initType: 0 }, type: 4, id: 8888432263, pageId: 849219621, sceneId: 87910723, num: 4, name: "图片5" }], price: null, isPaid: null, forms: null } } var d = n(20),
        f = n(22).redirectUrl(),
        g = "易企秀技术支持",
        v = n(23).isApp,
        m = n(50).randomId;
    n(75), e.exports = { bottomLabel: i, report: o, image1: r, image2: s, eqxLogo: a, title: c, line: u, shadow: l, lastPage: p, bizType40Page: h } }, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e) { return s({ type: "POST", url: a.SERVER_1 + "eqs/wx/component", data: e }) }

    function o() { return s({ type: "GET", url: a.SERVER_1 + "eqs/wx/user/cache" }) }

    function r() { var e = c(window.location.href),
            t = "eqs/wx/ticket?time=" + Date.now(),
            n = [/eqxiu\.com/, /eqh5\.cn/, /eqxiu\.cc/, /eqshow\.cn/, /yqxiu\.cn/]; return n.some(function(t) { return t.test(e) }) || (t += /eqxiu\.cn/.test(e) ? "&domain=eqxiu.cn" : "&domain=" + e), console.log("getWxTicket", t), s({ type: "GET", url: a.SERVER_1 + t }) } var s = n(19).ajax,
        a = n(20),
        c = n(22).getUrlHost;
    e.exports = { $postWxComp: i, $getUserWxInfo: o, $getWxTicket: r } }, function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (m = "", y = e.obj.name, b = _.FILE + e.obj.cover, A = e.obj.description || "", k = e.obj.property, x = e.obj.dsAppId || "", w = t, k.shareDes && "string" == typeof k.shareDes) {
            var n = k.shareDes;
            k.shareDes = { description: { type: "position", description: n } }
        }
        if (!k.shareDes) return u();
        k.shareDes.avatar && (b = D.headimgurl);
        var i = e.obj.id;
        o(k.shareDes, i).then(function() { return u() })["catch"](function(e) { return console.error(e) })
    }

    function o(e, t) { var n = function() { return Promise.resolve(null) },
            i = function() { return Promise.resolve(null) }; return e.title && e.title.type && (n = function() { return s(e.title, t).then(function(e) { y = e }) }), e.description && e.description.type && (i = function() { return s(e.description, t).then(function(e) { A = e }) }), n().then(function() { i() }) }

    function r(e) { return void 0 !== P ? Promise.resolve(P) : T(e).then(function(e) { return P = e || "" })["catch"](function() { return P = "" }) }

    function s(e, t) { var n = ""; return new Promise(function(i, o) { switch (e.type) {
                case "myself":
                    n += "我是" + D.nickname + "," + e.description, i(n); break;
                case "position":
                    r(t).then(function(t) { n += "我是第" + t + "位" + e.description, i(n) }); break;
                case "selfAndPosition":
                    r(t).then(function(t) { n += "我是" + D.nickname + ", 我是第" + t + "位 " + e.description, i(n) }) } }) }

    function a() { m = Date.now() + "" + Math.floor(1e5 * Math.random()), w = S("userKey", m, w), u() }

    function c(e, t) { w = e, w = S("compKey", t, w), u() }

    function u() { g().then(function() { var e = O("toPage", w),
                t = x ? DS.linkChange(e) : e;
            wx.onMenuShareTimeline({ title: y, link: t, imgUrl: b, success: function() { x && DS.sendRepost("appMessage"), l() }, cancel: function() {} }), wx.onMenuShareAppMessage({ title: y, desc: A, link: e, imgUrl: b, success: function() { x && DS.sendRepost("appMessage"), l(e), C(window.scene.id, 4, null, 7, "浏览完毕转发操作") }, cancel: function() {} }), wx.onMenuShareQQ({ title: y, desc: A, link: e, imgUrl: b, success: function() {}, cancel: function() {} }), wx.onMenuShareWeibo({ title: y, desc: A, link: e, imgUrl: b, success: function() {}, cancel: function() {} }), wx.onMenuShareQZone({ title: y, desc: A, link: e, imgUrl: b, success: function() {}, cancel: function() {} }) }) }

    function l(e) { if (m) { var t = { userKey: m };
            D && D.headimgurl && (M.shareUserHeader = D.headimgurl), D && D.nickname && (M.shareUserName = D.nickname), t.data = JSON.stringify(M), I(t)["catch"](function(e) { q(JSON.stringify(e)) }) } }

    function p(e) { Object.assign(D, e) }

    function h() { return D }

    function d(e) { M = e }

    function f(e, t) { M[e] = t }

    function g() { return j.initWx() }

    function v() { var e = window.location.href.split("?")[0],
            t = $("userKey", window.location.href),
            n = $("toPage", window.location.href),
            i = $("compKey", window.location.href);
        t && (e = S("userKey", t, e)), n && (e = S("toPage", n, e)), i && (e = S("compKey", i, e)), window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + E + "&redirect_uri=" + encodeURIComponent(_.SERVER_1 + "eqs/wx/user/info") + "&response_type=code&scope=snsapi_userinfo&state=" + encodeURIComponent(e) + "#wechat_redirect" }
    var m, y, b, x, w, k, P, _ = n(20),
        E = n(26).APP_ID,
        $ = n(22).getUrlParam,
        S = n(22).addUrlParam,
        O = n(22).removeUrlParam,
        I = n(76).$postWxComp,
        T = n(78).$getPvCount,
        C = n(79).bigDataXBData,
        q = n(80).popUpModal,
        j = n(18),
        A = "",
        D = {},
        M = {};
    e.exports = { initWeChat: i, shareWidthSDK: u, setWeChatUser: p, getWeChatUser: h, setWxCompData: d, saveWxCompData: f, generateUserKey: a, getWxJSSDK: g, hrefToWxAuth: v, addCompKey: c }
}, function(e, t, n) { "use strict";

    function i(e) { return r({ type: "GET", url: s.SERVER_1 + "eqs/scene/pv?sceneId=" + e }) }

    function o(e) { var t = e.id,
            n = e.param,
            i = e.ad,
            o = s.SERVER_1 + "eqs/pv/" + t; return n && (o += "?1=1", o += /\?.*/.test(n) ? "&" + n.substring(1) : /&.*/.test(n) ? n : "&" + n), o += (/\?/.test(o) ? "&" : "?") + "ad=" + i, r({ type: "GET", url: o }) } var r = n(19).ajax,
        s = n(20);
    e.exports = { $getPvCount: i, $postPVCount: o } }, function(e, t, n) { "use strict";

    function i(e, t, n, i, a, c, u) { var l = { ua: navigator.userAgent.toLowerCase(), netType: navigator.connection ? navigator.connection.type : "unknown", eqxPlatformType: "view", eqxPlatformVersion: window.eqxVersion, categoryOne: "scene_preview", categoryOneId: "11", categoryTwoId: i, categoryTwo: a, itemType: "内容页", itemId: scene.id, pageSizeTotal: app.sceneJson.list.length.toString(), pageCurrentNum: null, itemMaps: n, pubOwner: e, mediaType: navigator.platform, refer: c, actionType: t, actionTime: (new Date).getTime() };
        u && (l.url = u); var p = o.BIG_DATA + "admin/yqx/logserver/v0.1/push";
        s("exemplarReview") || r({ withCredentials: !0, method: "POST", url: p, headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" }, data: JSON.stringify(l) }) } var o = n(20),
        r = n(19).ajax,
        s = n(22).getUrlParam;
    e.exports = { bigDataXBData: i } }, function(e, t, n) { "use strict";

    function i(e) { var t = $('<div class="pop-up-box">\n                        <div class="pop-up-form">\n                            <div class="pop-up-content">\n                                <span class="pop-up-msg">' + e + '</span>\n                            </div>\n                            <div class="pop-up-btn"><a class="pop-up-btn-close">关闭</a></div>\n                        </div>\n                    </div>');
        $(".main-page.z-current").not(".editor-section").prepend(t); var n = $(".pop-up-btn");
        n.on("click", function() { t.animate({ opacity: 0 }, { duration: 300, complete: function(e) { return t.remove() } }) }) } n(81), e.exports = { popUpModal: i } }, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var r = function() {
            function e(e, t) { var n = [],
                    i = !0,
                    o = !1,
                    r = void 0; try { for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0); } catch (c) { o = !0, r = c } finally { try {!i && a["return"] && a["return"]() } finally { if (o) throw r } } return n } return function(t, n) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(),
        s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(23).mobilecheck,
        c = n(23).isApp,
        u = n(63).perfectPage,
        l = n(83),
        p = n(290),
        h = n(292),
        d = n(308),
        f = n(312),
        g = n(313),
        v = n(315),
        m = n(316),
        y = n(317),
        b = n(319),
        x = n(51).perfectMeta,
        w = n(21).$loadMLink,
        k = n(320),
        P = k.diff,
        _ = function() {
            function e(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o(this, e), this.sceneJson = t, this.config = Object.assign({ toPageIndex: 0, selector: "#nr", mode: "view", disablePageEffect: !1, disableCompEvent: !1, disableSubmit: !1, disableTrigger: !1, disableArrow: !1, disableCommentManager: !1, disableProgressBar: !1, disableCompAnim: !1, disableReport: !1, disablePageScroll: !1, initManagers: !0, disableQiniuZoom: !1, mobileEdit: !1, disableBigData: !0, EqxGravity: { disableGravityMotion: !1 } }, n), this.meta = x(this.sceneJson.meta), this.eqxPageList = [], this.eqxPageList.length = 0, this.currentPage = null, this.soundManager = null, this.statManager = null, this.commentManager = null, this.formManager = null, this.pageScroll = null, this.progressBar = null, this.config.initManagers && this.initManagers() } return s(e, [{ key: "setPageList", value: function(e) { var t;
                    this.sceneJson.list.length = 0, (t = this.sceneJson.list).push.apply(t, i(e)), this.eqxPageList = [], this.eqxPageList.length = e.length } }, { key: "getMetaWx", value: function() { var e = this.meta.property; return { wxCount: e.wxCount, wxClickFarmerCount: e.wxClickFarmerCount } } }, { key: "calMetaWx", value: function() { return this.eqxPageList.reduce(function(e, t) { return e.wxCount += t.getWxCompCount(), e.wxClickFarmerCount += t.getWxClickFarmerCompCount(), e }, { wxCount: 0, wxClickFarmerCount: 0 }) } }, { key: "syncMetaWx", value: function() { var e = this.calMetaWx();
                    console.log("wxObj", e), this.setProps({ property: e }) } }, { key: "toJson", value: function() { var e = JSON.parse(JSON.stringify(this.sceneJson)); for (var t in e) e.hasOwnProperty(t) && t.startsWith("$") && delete e[t]; return e } }, { key: "renderScene", value: function(e) { var t = this;
                    this.initContainer(e || this.config.selector), this.renderBgm(), a() && "view" == this.config.mode && !c() && 2 == this.meta.isTemplate && this.tempAppUseBtn(), this.renderPages().then(function() { t.initPageScroll(), t.initProgressBar() }); var n = this.inputComps,
                        i = this.newTextComps;
                    n && i && n.length && i.length && i.forEach(function(e) { var t = n.find(function(t) { return t.compJson.id === e.compJson.properties["var"].comp });
                        t && (t.variables = t.variables || [], t.variables.push(e)) }) } }, { key: "tempAppUseBtn", value: function() { var e = this; if (!this.$tempAppUseBtn) { var t = '<a  class="temp-app-use">\n                                        <div class="temp-app-use-btn">\n                                            <span class="eqf-xiuziti"></span>\n                                        </div>\n                                        <div class="temp-app-use-tip">使用</div>\n                                    </a>',
                            n = window.scene,
                            i = n.isTemplate,
                            o = n.sourceId,
                            r = n.id,
                            s = { sceneId: r };
                        i && (s.isTemplate = i), o && (s.sourceId = o), w().then(function() { var t = { mlink: "https://ax8bgc.mlinks.cc/AK00", button: e.$ele.find(".temp-app-use")[0], autoLaunchApp: !1, autoRedirectToDownloadUrl: !0, downloadWhenUniversalLinkFailed: !1, inapp: !1, params: s };
                            console.log("mlink", t), new Mlink(t) }); var a = $(t);
                        this.$ele.append(a) } } }, { key: "updateMeta", value: function(e) { e = x(e); var t = JSON.parse(JSON.stringify(this.meta));
                    delete t.property.wxAuth, Object.assign(this.meta, e); var n = JSON.parse(JSON.stringify(this.meta));
                    delete n.property.wxAuth; var i = P(t, n);
                    console.log(JSON.stringify(i)) } }, { key: "setProps", value: function(e) { var t = JSON.parse(JSON.stringify(this.meta)),
                        n = this.meta;
                    Object.keys(e).filter(function(e) { return "property" !== e }).forEach(function(t) { n[t] = e[t] }), e.property && ("string" == typeof e.property && (e.property = JSON.parse(e.property)), Object.keys(e.property).forEach(function(t) { n.property[t] = e.property[t] })); var i = JSON.parse(JSON.stringify(this.meta)),
                        o = P(t, i);
                    console.log(JSON.stringify(o)) } }, { key: "getMeta", value: function(e) { return this.meta[e] } }, { key: "getMetaProperty", value: function(e) { return this.meta.property[e] } }, { key: "initContainer", value: function(e) { $(this.$ele).is(e) || (this.$ele = $(e)); var t = this.$ele; "static" === t.css("position") && t.css({ position: "relative" }), a() && t.css({ width: "100%", height: "100%" }), this.width = t.width(), this.height = t.height() } }, { key: "createBgm", value: function(e) { var t = e || this.meta.bgAudio; if (t) return this.bgm = new d(t, this), this.bgm } }, { key: "renderBgm", value: function() { this.bgm || this.createBgm(), this.bgm && this.$ele.append(this.bgm.$bgmBtn) } }, { key: "updateBgm", value: function(e) { return this.meta.bgAudio = e, e ? void(this.bgm ? this.bgm.updateJson(e) : (this.createBgm(e), this.renderBgm())) : void(this.bgm && (this.bgm.hide(), this.bgm.stopPlay(), this.bgm = null)) } }, { key: "renderPages", value: function() { var e = this; return this.sceneJson.list.forEach(function(t, n) { e.initEqxPage(n), e.renderPage(n) }), Promise.resolve([]) } }, { key: "initEqxPages", value: function() { var e = this;
                    this.sceneJson.list.forEach(function(t, n) { return e.initEqxPage(n) }) } }, { key: "initEqxPage", value: function(e) { var t = this.sceneJson.list[e]; if (t) { u(t, this.sceneJson); var n = l.get(t),
                            i = new n(t, this); return this.eqxPageList[e] = i, i } throw new Error("Invalid Page Index: " + e) } }, { key: "renderPage", value: function(e) { var t = this,
                        n = this.eqxPageList[e]; if (n) { var i = n.$section; return i || (i = n.create$section(), "edit" !== this.config.mode && n.addEventListener()), this.$ele.append(i), this.sceneJson.list.length > 1 && n.renderArrow(), 0 === e && n.arrow && n.arrow.updateCss({ bottom: "30px" }), n.addEffect().then(function() { e === t.config.toPageIndex && (t.currentPage = n, n.active().then(function(e) { return n.deactive().show() })) }) } return console.error("no eqxPage at index " + e), Promise.reject(new Error("no eqxPage at index " + e)) } }, { key: "changePageMode", value: function(e) { this.eqxPageList.forEach(function(t) { t.arrow ? t.arrow.updatePageMode(e) : t.renderArrow(e) }) } }, { key: "initProgressBar", value: function() { this.progressBar = new p(this.sceneJson.list.length), this.$ele.append(this.progressBar.$progress), this.updateProgressBar() } }, { key: "updateProgressBar", value: function(e) { if (e || (e = this.currentPage), e) t = e.pageJson.num;
                    else var t = this.eqxPageList[0].pageJson.num; var n = this.sceneJson.list.length;
                    this.progressBar.update(t, n); var i = this.meta.property.slideNumber && !this.config.disableProgressBar;
                    i ? this.progressBar.show() : this.progressBar.hide() } }, { key: "initPageScroll", value: function() { this.config.disablePageScroll || (this.pageScroll = new h(this)) } }, { key: "initManagers", value: function() { this.initSoundManager(), this.initPageEffectManager(), this.initStatManager(), this.config.disableCommentManager || this.initCommentManager(), this.initEventManager(), this.initFormManager() } }, { key: "initSoundManager", value: function() { this.soundManager = new y } }, { key: "initStatManager", value: function() { return this.statManager = new m(this.sceneJson), this.statManager.iterate(), this.statManager } }, { key: "initCommentManager", value: function() { this.commentManager = new g(this.meta.id), this.commentManager.loadMoreComments() } }, { key: "initEventManager", value: function() { this.eventManager = new f } }, { key: "initFormManager", value: function() { this.formManager = new v } }, { key: "initPageEffectManager", value: function() { this.pageEffectManager = new b } }, { key: "replaceEqxPage", value: function(e, t) { var n = this.eqxPageList[e];
                    n.destroy(), this.sceneJson.list.splice(e, 1, JSON.parse(JSON.stringify(t))), this.updatePageNum(), this.eqxPageList[e] = null; var i = this.initEqxPage(e); return this.currentPage && this.currentPage.pageJson.num == e + 1 && (this.currentPage = i), i } }, { key: "updatePageNum", value: function() { this.sceneJson.list.forEach(function(e, t) { e.num = t + 1 }) } }, { key: "insertPage", value: function(e, t) { var n = this.sceneJson.list; return n.splice(e + 1, 0, t), this.updatePageNum(), this.eqxPageList.splice(e + 1, 0, null), this.initEqxPage(e + 1) } }, { key: "deletePage", value: function(e) { var t = this.sceneJson.list,
                        n = this.eqxPageList[e];
                    n.destroy(), t.splice(e, 1), this.updatePageNum(), this.eqxPageList.splice(e, 1) } }, { key: "destroy", value: function() { this.eqxPageList.forEach(function(e) { return e.destroy() }), this.bgm && (this.bgm.destroy(), this.bgm = null) } }, { key: "sortPage", value: function(e, t) { var n = this.sceneJson.list,
                        i = n.length; if (e === t || e < 0 || e > i - 1 || t < 0 || t > i - 1) return console.error("invalid sortPage arguments"); if (e > t) { var o = n.splice(e, 1),
                            s = r(o, 1),
                            a = s[0];
                        n.splice(t, 0, a); var c = this.eqxPageList.splice(e, 1),
                            u = r(c, 1);
                        a = u[0], this.eqxPageList.splice(t, 0, a) } else { var l = n.splice(e, 1),
                            p = r(l, 1);
                        a = p[0], n.splice(t, 0, a); var h = this.eqxPageList.splice(e, 1),
                            d = r(h, 1);
                        a = d[0], this.eqxPageList.splice(t, 0, a) } this.updatePageNum() } }, { key: "getEqxPageByIndex", value: function(e) { var t = this.eqxPageList[e]; return t || (t = this.initEqxPage(e)), t } }, { key: "getEqxPageById", value: function(e) { return this.getEqxPageByKeyValue("id", e) } }, { key: "getEqxPageByKeyValue", value: function(e, t) { var n = this.sceneJson.list.findIndex(function(n) { return n[e] === t }); if (n > -1) return this.getEqxPageByIndex(n) } }]), e }();
    e.exports = _ }, function(e, t, n) { "use strict"; var i = n(84),
        o = n(288),
        r = n(289);
    e.exports = { get: function(e) { var t = e.properties,
                n = t.longPage,
                s = t.xb; return s ? r : n ? o : i } } }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var o = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        r = n(65).COMP_TYPE,
        s = n(65).FORM_COMPS,
        a = n(65).WX_COMPS,
        c = n(65).FIX_INDEX_COMPS,
        u = n(65).WX_CLICK_FARMER_COMPS,
        l = n(66),
        p = l.perfectComp,
        h = l.perfectBg,
        d = n(50).randomId,
        f = n(85),
        g = n(87),
        v = n(23).isPc,
        m = n(110),
        y = n(113),
        b = n(274),
        x = n(279),
        w = n(118).hasShakeEvent,
        k = n(206),
        P = n(281),
        _ = n(282),
        E = n(286),
        S = n(79).bigDataXBData,
        O = n(21).$loadParallax,
        I = n(287),
        T = function() {
            function e(t, n) { i(this, e), this.pageJson = t, this.eqxScene = n, this.eqxCompList = [], this.displayed = !1, this.hasCoverEffect = !1, this.destroyed = !1; var o = this.eqxScene.sceneJson,
                    r = o.meta,
                    s = r.pageMode,
                    a = r.property.forbidHandFlip,
                    c = this.eqxScene,
                    u = c.width,
                    l = c.height;
                this.width = u, this.height = l, this.pageMode = s, this.forbidHandFlip = a, this.bgm = this.eqxScene.bgm, this.eqxStatManager = null, this.pv = 0 } return o(e, [{ key: "addGroupManager", value: function() { return this.groupManager = new I(this), this.groupManager } }, { key: "toPageJson", value: function(e) { e = Object.assign({ transformText: !0, addForms: !0 }, e); var t = JSON.parse(JSON.stringify(this.pageJson)),
                        n = t.id,
                        i = t.sceneId,
                        o = t.forms = [],
                        a = t.redPacket = {}; if (t.elements.forEach(function(e) { var t = e.type + ""; if ("EqxRedPacket" === r[t]) { var c = e.properties;
                                a.title = c.title, a.activity = c.activity, a.amount = c.amount, a.begin = c.begin, a.end = c.end, a.count = c.count, a.chance = c.chance } if ("EqxText" === r[t] && e.content && (e.content = e.content.replace(/(^\s*)|(\s*$)/g, "")), s.concat("i").includes(t)) { var u = { id: e.id, pageId: n, sceneId: i, type: t, fieldType: t, title: e.title, num: e.num }; /^[rc]/.test(t) && (e.choices && "string" != typeof e.choices && (e.choices = JSON.stringify(e.choices)), u.choices = e.choices), o.push(u) } if (e.trigger) { var l = e.trigger;
                                l.sends && 0 === l.sends.length && delete l.sends, l.receives && 0 == l.receives.length && delete l.receives, l.sends || l.receives || delete e.trigger } "EqxTelephone" !== r[t] && "EqxLink" !== r[t] && "EqxSubmitButton" !== r[t] || e.properties.title && (e.properties.title = e.properties.title.replace(/ /g, "&nbsp;")) }), t.trigger) { var c = t.trigger;
                        c.sends && 0 === c.sends.length && delete c.sends, c.receives && 0 === c.receives.length && delete c.receives, c.sends || c.receives || delete t.trigger } return t } }, { key: "getWxCompCount", value: function() { return this.pageJson.elements.reduce(function(e, t) { return a.includes(t.type + "") && (e += 1), e }, 0) } }, { key: "getWxClickFarmerCompCount", value: function() { return this.pageJson.elements.reduce(function(e, t) { var n = t.type + ""; return u.includes(n) && t.properties.clickFarmer && (e += 1), e }, 0) } }, { key: "getCompName", value: function(e) { if (e.name) return _DEBUG_, e.name; var t = E.find(function(t) { return t.types.includes(e.type + "") }); if (!t) return _DEBUG_ && console.error("Lack Name for Type", e.type), null; var n = t.types,
                        i = this.pageJson.elements.filter(function(e) { return n.includes(e.type + "") }),
                        o = 0;
                    i.forEach(function(e) { if (e.name) { var n = new RegExp(t.name + "(\\d+)"),
                                i = parseInt((n.exec(e.name) || [])[1]);
                            i && i > o && (o = i) } }); var r = t.name + (o + 1); return _DEBUG_, r } }, { key: "setProps", value: function(e) { var t = this.pageJson.properties;
                    Object.keys(e).forEach(function(n) { t[n] = e[n] }) } }, { key: "isLongPage", value: function() { return "longPage" in this.pageJson.properties } }, { key: "getPageWidth", value: function() { return 320 } }, { key: "getPageHeight", value: function() { var e = this.pageJson.properties; return e.longPage || 486 } }, { key: "toString", value: function() { return "page-" + this.pageJson.id } }, { key: "initStatManager", value: function() { return this.statManager = new P(this.pageJson.elements), this.statManager.iterate(), this.statManager } }, { key: "show", value: function() { if (this.displayed = !0, this.triggerEventAgent && this.triggerEventAgent.addEventListener(), this.$section.addClass("z-current"), window.scene) { var e = window.scene.property.activityPageId;!e || this.pv || this.eqxScene.config.disableBigData || (this.pv += 1, S(window.scene.id, "3", { activityPageId: e }, "32", "活动页面")) } return this } }, { key: "hide", value: function() { return this.displayed = !1, this.triggerEventAgent && this.triggerEventAgent.removeEventListener(), this.eqxCompList.forEach(function(e) { return e.eleHide() }), this.effect && this.effect.stopEffect && this.effect.stopEffect(), this.$section && this.$section.removeClass("z-current"), this } }, { key: "showElements", value: function() { var e = this;
                    this.eqxCompList.forEach(function(t) { var n = t.compJson.css.top;
                        t.compJson.properties.anim && t.compJson.properties.anim[0] && 30 === t.compJson.properties.anim[0].type && (n -= t.compJson.css.height), t.compJson.properties.anim && t.compJson.properties.anim[0] && (2 === t.compJson.properties.anim[0].type || 19 === t.compJson.properties.anim[0].type) ? t.eleShow() : n && parseFloat(n) <= e.height ? t.eleShow() : n || t.eleShow() }), this.eqxBackground && this.eqxBackground.eleShow() } }, { key: "active", value: function() {
                    function e(e) { e.hasCoverEffect ? (e.bgm && e.bgm.hide(), e.eqxScene.progressBar && e.eqxScene.progressBar.hide()) : e.showElements(), e.effect && e.effect.startEffect && e.effect.startEffect(), e.$section.addClass("z-active") }

                    function t(e) { var t = [],
                            n = e.eqxCompList; return n.forEach(function(e) { e.anim.forEach(function(e) { e.sound && e.soundAgent && t.push(e.soundAgent.audio) }) }), t } var n = this,
                        i = new Promise(function(i, o) { var r = t(n),
                                s = r.length;
                            r && r.length ? r.forEach(function(t) { 4 === t.readyState ? 0 === --s && (e(n), i()) : (t.load(), $(t).on("canplay", function() { 0 === --s && (e(n), i()) }).on("error", function() { 0 === --s && (e(n), i()) })) }) : (e(n), i()) }); return i } }, { key: "deactive", value: function() { if (this.$section) return this.$section.removeClass("z-active"), this } }, { key: "destroy", value: function() { this.hide(), this.eqxCompList.forEach(function(e) { return e.destroy() }), this.eqxCompList = [], this.$ul && (this.$ul.remove(), this.$ul = null), this.$editDiv && (this.$editDiv.remove(), this.$editDiv = null), this.$pageDiv && (this.$pageDiv.remove(), this.$pageDiv = null), this.$section && (this.$section.remove(), this.$section = null), this.destroyed = !0 } }, { key: "create$section", value: function() { var e = this,
                        t = this.pageJson,
                        n = t.num,
                        i = t.id,
                        o = t.elements,
                        s = void 0 === o ? [] : o;
                    this.$section = $(f.section()), this.section = this.$section[0], this.$pageDiv = $(f.pageDiv(n)), this.$editDiv = $(f.editDiv(i)), this.$ul = $(f.ul(i)), this.$editDiv.append(this.$ul), this.$pageDiv.append(this.$editDiv), this.$section.append(this.$pageDiv); var a = !1; if (s.map(function(t) { return t.name = e.getCompName(t), t }).filter(function(e) { var t = e.type; return "EqxBackground" !== r[t] && "EqxGravity" !== r[t] }).sort(function(e, t) { var n = e.css.zIndex,
                                i = t.css.zIndex; return n - i }).map(function(e, t) { return e.num = t + 1, e.css.zIndex = t + 1, e }).forEach(function(t) { p(t, e.eqxScene.sceneJson, e.pageJson); var n = e.initEqxCompByJson(t);
                            e.renderEqxComp(n); var i = t.properties.GSensor;
                            i && i.isUsed && (a = !0) }), a && "edit" !== this.eqxScene.config.mode) { var c = this;
                        O().then(function() { c.parallax = new window.Parallax(c.$ul.get(0)) }) } for (var u = -1, l = 0; l < s.length; l++) "EqxBackground" === r[s[l].type] && (u = l); if (u > -1) { var d = s[u];
                        h(d), this.eqxBackground = this.initEqxBgByJson(d), this.renderBg(this.eqxBackground) } var g = -1; for (l = 0; l < s.length; l++) "EqxGravity" === r[s[l].type] && (g = l); if (g > -1) { var m = s[g];
                        this.eqxGravity = this.initEqxGravityByJson(m), this.renderGravity(this.eqxGravity) } var y = this.eqxScene.config; return y.disableTrigger || this.addTriggerEvent(), v() || (window.top === window ? this.setUlTopAndLeft() : this.setIframeUlTopAndLeft()), this.$section } }, { key: "addEventListener", value: function() {} }, { key: "renderGravity", value: function(e) { e.$gravity ? console.error("gravity already rendered") : this.$editDiv.prepend(e.create$gravity()) } }, { key: "addGravityJson", value: function(e) { return this.deleteGravity(), this.addCompJson(e) } }, { key: "deleteGravity", value: function() { var e = this; if (this.eqxGravity) { var t = this.pageJson.elements.findIndex(function(t) { return t.id === e.eqxGravity.compJson.id });
                        t > -1 && this.pageJson.elements.splice(t, 1), this.eqxGravity.delete$gravity(), this.eqxGravity = null } } }, { key: "renderBg", value: function(e) { e.$bg ? console.error("background already rendered") : e.create$bg(this.$editDiv, this.width, this.height) } }, { key: "addBgJson", value: function(e) { return this.deleteBg(), this.addCompJson(e) } }, { key: "deleteBg", value: function() { var e = this; if (this.eqxBackground) { var t = this.pageJson.elements.findIndex(function(t) { return t.id === e.eqxBackground.compJson.id });
                        t > -1 && this.pageJson.elements.splice(t, 1), this.eqxBackground.delete$bg(), this.eqxBackground = null } } }, { key: "addCompJson", value: function(e) { var t = JSON.parse(JSON.stringify(e)); return this.addPageInfo(t), p(t, this.eqxScene.sceneJson, this.pageJson), this.pageJson.elements.push(t), t } }, { key: "deleteEqxComp", value: function(e) { var t = this.pageJson.elements.findIndex(function(t) { return t.id === e.compJson.id });
                    t > -1 && this.pageJson.elements.splice(t, 1), t = this.eqxCompList.findIndex(function(t) { return t === e }), t > -1 && (e.destroy(), this.eqxCompList.splice(t, 1)), this.deleTriggerSends(e), this.deleTriggerReceives(e) } }, { key: "deleTriggerSends", value: function(e) { var t = this; if (e.compJson.trigger && e.compJson.trigger.sends) { var n = e.compJson.trigger.sends;
                        n.forEach(function(n) { n.handles.forEach(function(n) { n.ids.forEach(function(i) { var o = t.getEqxCompById(i);
                                    o && 3 != n.type ? o.deleReceiveId(e.compJson.id) : o && t.deleteEqxComp(o) }) }) }) } } }, { key: "deleTriggerReceives", value: function(e) { var t = this; if (e.compJson.trigger && e.compJson.trigger.receives) { var n = e.compJson.trigger.receives;
                        n.forEach(function(n) { n.ids.forEach(function(n) { if (n == t.pageJson.id) t.deleSendId(e.compJson.id);
                                else { var i = t.getEqxCompById(n);
                                    i && i.deleSendId(e.compJson.id) } }) }) } } }, { key: "reEffectJson", value: function(e) { this.pageJson.properties.effect = e } }, { key: "getCopyJson", value: function() { var e = JSON.parse(JSON.stringify(this.pageJson)); return e.elements.forEach(function(e) {
                        ("" + e.id).includes("wx") || (e.id = d()) }), e } }, { key: "addPageInfo", value: function(e) { var t = this.pageJson,
                        n = 0; return c.indexOf("" + e.type) == -1 && (this.eqxCompList.forEach(function(e) { var t = e.getCss("zIndex");
                        t > n && (n = t) }), void 0 === e.css.zIndex && (e.css.zIndex = n + 1)), e.id || (e.id = d()), Object.assign(e, { id: e.id, pageId: t.id, sceneId: t.sceneId, num: n + 1 }), e.fromSource && "psd" === e.fromSource ? (delete e.fromSource, e) : (delete e.name, e.name = this.getCompName(e), e) } }, { key: "addPageGroup", value: function(e) { this.pageJson.groups = this.pageJson.groups || [], this.pageJson.groups.push(e) } }, { key: "getPageGroups", value: function() { return this.pageJson.groups || [] } }, { key: "getPageGroupSettings", value: function() { var e = this.pageJson.properties; return e.groupSettings = e.groupSettings || [], e.groupSettings } }, { key: "initEqxCompById", value: function(e) { var t = this.pageJson.elements.find(function(t) { return t.id === e }); return this.initEqxCompByJson(t) } }, { key: "initEqxBgByJson", value: function(e) { return this.eqxBackground = new k(e, this), this.eqxBackground } }, { key: "initEqxGravityByJson", value: function(e) { return this.eqxGravity = new _(e, this), this.eqxGravity } }, { key: "updateEqxComp", value: function(e, t) { t = JSON.parse(JSON.stringify(t)), p(t, this.eqxScene.sceneJson, this.pageJson); var n = this.pageJson.elements.find(function(t) { return t.id === e }); return n ? (delete t.id, delete t.num, delete t.pageId, delete t.sceneId, delete t.type, Object.assign(n, t), this.getEqxCompById(e)) : void console.error("invalid comp Id") } }, { key: "initEqxCompByJson", value: function(e) { if (e) { var t = this.getCompJsonById(e.id);
                        t || (e = this.addCompJson(e)); var n = this.getEqxCompById(e.id); if (n) return void console.error("already init", e, n); var i = m[e.type]; if (!(i && i.prototype instanceof y)) return void console.error("In Valid Type: " + e.type + " @Page" + this.pageJson.id, e); var o = new i(e, this); return this.eqxCompList.push(o), o } } }, { key: "getEqxCompById", value: function(e) { return this.eqxCompList.find(function(t) { return t.compJson.id == e }) } }, { key: "getCompJsonById", value: function(e) { return this.pageJson.elements.find(function(t) { return t.id === e }) } }, { key: "renderEqxComp", value: function(e) { if (e && e instanceof y) { var t = e.$li; return t && (e.$li.remove(), e.$li = null), t = e.create$li(), this.eqxScene.config.disableCompEvent || e.addEventListeners(), "view" === this.eqxScene.config.mode && e.updateDisplyStatus(), this.$ul.append(t), t } console.error("invalid eqxComp") } }, { key: "renderEqxCompById", value: function(e) { return this.renderEqxComp(this.getEqxCompById(e)) } }, { key: "renderArrow", value: function(e) { var t = this.eqxScene.config;
                    e || (e = this.pageMode), this.forbidHandFlip || t.disableArrow || (this.arrow = new b(e), this.$section.append(this.arrow.$arrow)) } }, { key: "setUlTopAndLeft", value: function() { var e, t;
                    this.width / this.height >= 320 / 486 ? e = (this.width / (this.height / 486) - 320) / 2 : t = (this.height / (this.width / 320) - 486) / 2, e && this.$ul.css({ marginLeft: e }), t && this.$ul.css({ marginTop: t }) } }, { key: "setIframeUlTopAndLeft", value: function() { var e, t = (this.width - 320) / 2,
                        n = (this.height - 486) / 2; return e = this.width / this.height <= 320 / 486 ? "scale(" + this.width / 320 + ")" : "scale(" + this.height / 486 + ")", this.$ul.css({ marginTop: n, marginLeft: t, transform: e }), { marginLeft: t, marginTop: n } } }, { key: "addEffect", value: function() { var e = this,
                        t = this.pageJson,
                        n = t.num,
                        i = t.properties.effect,
                        o = this.eqxScene.config; return new Promise(function(t, r) { if (!i || o.disablePageEffect || "gravity" === i.name) t();
                        else { var s = e,
                                a = function() { if (s.hasCoverEffect = !0, 1 === n) { var e = s.eqxScene.progressBar;
                                        e.hide(), s.bgm && (s.bgm.hide(), s.bgm.stopPlay()) } },
                                c = function() { s.hasCoverEffect = !1; var e = s.eqxScene.progressBar;
                                    e && e.show(), s.bgm && s.bgm.show(), 1 === n && s.bgm && s.bgm.resumePlay(), s.showElements() },
                                u = i.name,
                                l = e;
                            g.load(u).then(function(e) { l.effect = new e(i, l.$pageDiv, l.width, l.height, a, c), l.eqxScene.pageEffectManager.add(l.effect), l.effect.init(), t() })["catch"](function() { r() }) } }) } }, { key: "addTriggerEvent", value: function() { var e = this.pageJson.properties.trigger;
                    e && w(e.sends) && (window.shake = this.triggerEventAgent = new x(this, e, this.eqxScene.eventManager)) } }, { key: "updateCompZIndex", value: function(e, t) {
                    function n(e, t, n) { var i = e[t];
                        e[t] = e[n], e[n] = i }

                    function i(e) { return e.compJson.css.zIndex } var o = this.eqxCompList.map(function(e) { return e }).sort(function(e, t) { var n = i(e),
                                o = i(t); return n < o ? 1 : n == o ? 0 : -1 }),
                        r = o.length; if (t.startsWith("-")) { var s = (/-(\d+|-)/.exec(t) || [])[1]; if ("-" === s) o = o.filter(function(t) { return t !== e }), o.push(e), this.resetZIndex(o);
                        else { for (s = parseInt(s); s-- > 0;)
                                for (var a = 0; a < r; a++)
                                    if (o[a] === e && a !== r - 1) { n(o, a, a + 1); break }
                            this.resetZIndex(o) } } else if (t.startsWith("+")) { var c = (/\+(\d+|\+)/.exec(t) || [])[1]; if ("+" === c) o = o.filter(function(t) { return t !== e }), o.unshift(e), this.resetZIndex(o);
                        else { for (c = parseInt(c); c-- > 0;)
                                for (var u = 0; u < r; u++)
                                    if (o[u] === e && 0 !== u) { n(o, u, u - 1); break }
                            this.resetZIndex(o) } } } }, { key: "resetZIndex", value: function(e) { for (var t = e.length, n = t - 1; n >= 0; n--) { var i = e[n];
                        i.compJson.css.zIndex = t - n, i.update$li({ zIndex: i.compJson.css.zIndex }) } } }, { key: "deleSendId", value: function(e) { if (this.pageJson.properties.trigger && this.pageJson.properties.trigger.sends) { var t = this.pageJson.properties.trigger.sends;
                        t.forEach(function(n, i) { n.handles.forEach(function(t, i) { t.ids.indexOf(e) != -1 && t.ids.splice(t.ids.indexOf(e), 1), 0 === t.ids.length && n.handles.splice(i, 1) }), 0 === n.handles.length && t.splice(i, 1) }), 0 === t.length && delete this.pageJson.properties.trigger } } }]), e }();
    e.exports = T }, function(e, t, n) { "use strict";

    function i() { return '<section class="main-page"></section>' }

    function o(e) { return '<div class="m-img" id="page' + e + '"></div>' }

    function r(e) { return '<div class="edit_wrapper" data-scene-id="' + e + '" style="position: relative; z-index: 1"></div>' }

    function s(e) { return '<ul id="edit_area' + e + '" class="edit_area weebly-content-area weebly-area-active"></ul>' } n(86), e.exports = { section: i, pageDiv: o, editDiv: r, ul: s } }, function(e, t) {}, function(e, t, n) { "use strict";
    e.exports = { load: function(e) { return new Promise(function(t, i) { switch (e) {
                    case "finger":
                        n.e(1, function() { return t(n(88)) }); break;
                    case "money":
                        n.e(2, function() { return t(n(93)) }); break;
                    case "scratch":
                        n.e(3, function() { return t(n(97)) }); break;
                    case "snowFly":
                        n.e(4, function() { return t(n(99)) }); break;
                    case "fallingObject":
                        n.e(5, function() { return t(n(101)) }); break;
                    case "fireWorks":
                        n.e(6, function() { return t(n(102)) }); break;
                    case "gradient":
                        n.e(7, function() { return t(n(103)) }); break;
                    case "glassBreak":
                        n.e(8, function() { return t(n(106)) }); break;
                    default:
                        var o = "Invalid Effect name: " + e;
                        console.error(o), i(o) } }) } } }, , , function(e, t, n) {
    "use strict";

    function i(e) { return new Promise(function(t, n) { var i = new Image;
            i.onload = function() { t(this) }, i.onerror = i.onabort = function() { n(new Error("download image fail")) }, i.src = e }) }

    function o(e, t, n) { if (!e) return ""; if ("string" != typeof e) throw new Error("Typeof src is not string"); var i = r(e); if (/\.(ico|svg)$/i.test(e.split("?")[0])) return encodeURI(i); if (!t) return encodeURI(/\?imageMogr2/.test(e) ? i : i + "?imageMogr2/auto-orient"); var o = window.devicePixelRatio || 1;
        t = h(t), n = h(n), t && n ? (t *= o, n *= o) : (t *= o, n = t); var s = 9999;
        t > n ? t > s && (n *= 1 - (t - s) / t, t = s) : t < n ? n > s && (t *= 1 - (n - s) / n, n = s) : t > s && (t = n = s); var a = "imageMogr2/auto-orient/thumbnail/" + Math.round(t) + "x" + Math.round(n) + ">"; return i += /\?imageMogr2/.test(e) ? "|" + a : "?" + a, encodeURI(i) }

    function r(e) { if (!e) return void console.error("add prefix invalid src"); var t = window.location.protocol; if (e.startsWith("//") && "file:" !== t && (e = t + e), !e.startsWith("/") && !e.startsWith("file://"))
            if (/^https?:\/\//.test(e)) { for (var n, i = [p.BIND_USER_FILE, p.FREE_USER_FILE, p.VIP_USER_FILE], o = 0; o < i.length; o++)
                    if (n = i[o], e.startsWith(n)) { e = e.replace(n, p.FILE); break } } else e = p.FILE + e; return e }

    function s(e) { var t = window.location.protocol; return e ? /^http.*/.test(e) ? e : e.startsWith("//") && "file:" == t ? "http:" + e : e.startsWith("//") ? e : p.FILE + e : e }

    function a(e) {
        var t = window.URL || window.webkitURL;
        try {
            var n = t.createObjectURL(e);
        } catch (i) { return Promise.reject(new TypeError("不支持URL.createObjectURL")) }
        return c(n)
    }

    function c(e) { return i(e).then(function(e) { return { width: e.width, height: e.height, ratio: e.width / e.height } }) }

    function u(e, t) { if (e.shape) return Promise.resolve(e.shape); var n = o(e.path, t || 115),
            r = p.FILE + e.path,
            s = 0; return i(r).then(function(e) { return s = e.width / e.height, i(n) }).then(function(e) { var t = window.devicePixelRatio || 1,
                n = e.height / t; return { width: n * s, height: n, ratio: s } }) }

    function l(e) { var t = r(e); return t = t.replace(/\?.*$/, ""), t += "?imageInfo", d({ method: "GET", url: t }) }
    var p = n(20),
        h = Number.parseInt,
        d = n(19).$ajax;
    e.exports = { loadImg: i, qiniuZoom: o, addPrefix: r, initEffectImgPath: s, getImgShapeByNativeFile: a, getImgShape: u, getImgShapeBySrc: c, getQiniuImgInfo: l }
}, , , , , , , , , , , , , , , function(e, t) { "use strict";

    function n() { var e = navigator.userAgent,
            t = e.indexOf("Opera") > -1; return t ? "Opera" : e.indexOf("Firefox") > -1 ? "FF" : e.indexOf("Chrome") > -1 ? "Chrome" : e.indexOf("Safari") > -1 ? "Safari" : e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1 && !t ? "IE" : void 0 }

    function i() { var e = { Chrome: "-webkit-", FF: "-moz-", Opera: "-o-", Safari: "-webkit-" }; return e[n()] || "-webkit-" }

    function o(e) { return e in document.documentElement.style } e.exports = { getBrowserPrefix: i, isSupportStyle: o } }, , , , , function(e, t, n) { "use strict"; var i = n(111),
        o = n(127),
        r = n(144),
        s = n(148),
        a = n(150),
        c = n(152),
        u = n(156),
        l = n(162),
        p = n(164),
        h = n(171),
        d = n(174),
        f = n(178),
        g = n(181),
        v = n(193),
        m = n(199),
        y = n(203),
        b = n(204),
        x = n(206),
        w = n(210),
        k = n(214),
        P = n(218),
        _ = n(221),
        E = n(222),
        $ = n(227),
        S = n(229),
        O = n(231),
        I = n(235),
        T = n(238),
        C = n(239),
        q = n(240),
        j = n(244),
        A = n(245),
        D = n(249),
        M = n(252),
        R = n(256),
        L = n(258),
        F = n(259),
        J = n(261),
        B = n(263),
        N = n(269),
        z = n(272);
    e.exports = { EqxReward: w, 11: w, EqxRandomContent: S, 10: S, EqxRedPacket: k, 9: k, EqxNewText: $, 7: $, EqxText: P, 2: P, x: P, EqxDeepShare: _, 298: _, EqxReport: E, 299: E, EqxBackground: x, 3: x, EqxImage: o, 4: o, EqxTelephone: p, 8: p, EqxComment: g, b: g, EqxShape: c, h: c, EqxCount: v, i: v, EqxLink: r, l: r, EqxChart: i, t: i, EqxVideo: u, v: u, EqxInteractiveVideo: l, o: l, EqxImageSlider: a, p: a, EqxMap: s, m: s, EqxRandom: f, n: f, EqxSound: h, s: h, EqxPv: d, d: d, EqxAdvertise: b, g: b, EqxDownTime: m, e: m, EqxUpTime: y, f: y, EqxScore: q, a: q, EqxCheckbox: j, c: j, EqxRadio: A, r: A, EqxDropDownList: O, z: O, EqxInput: I, 5: I, 501: I, EqxInputPhone: C, 502: C, EqxInputEmail: T, 503: T, 504: I, EqxSubmitButton: D, 6: D, 601: D, EqxWxNickName: L, 201: L, EqxWxProfile: F, 401: F, EqxWxUploadImage: J, 403: J, EqxWxSoundPlay: M, w01: M, EqxWxSoundRecord: R, w02: R, EqxTextVote: B, k: B, EqxImgVote: N, j: N, EqxDrawingBoard: z, u: z } }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
    n(112); var a = n(21).$loadChart,
        c = n(113),
        u = n(72).toGoodStr,
        l = n(72).isBadStr,
        p = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { backgroundColor: !1, color: !1, opacity: !1, paddingTop: !1, lineHeight: !1 }, border: { self: !1 }, boxShadow: { self: !1 }, advanceStyle: { paddingTop: !1, borderWidth: !1, borderRadius: !1, borderStyle: !1, borderColor: !1, boxShadowSize: !1, boxShadowBlur: !1, boxShadowColor: !1, boxShadowDirection: !1 } }, trigger: !1, sound: !1, link: !1 }), r.pieOptions = { segmentShowStroke: !1, showTooltips: !1, scaleFontColor: "#000", legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><%if(segments[i].label){%><span style="background-color:<%=segments[i].fillColor%>"></span><%=segments[i].label%><%}%></li><%}%></ul>', animation: !1, onAnimationComplete: function() { var e = this.chart.ctx,
                            t = this.segments;
                        e.textAlign = "start", e.textBaseline = "middle"; for (var n = 0, i = 0; i < t.length; i++) n += parseFloat(t[i].value);
                        e.fillText(n, e.width / 2 - 20, e.height / 2, 100); for (var i = 0; i < t.length; i++) { var o = t[i].startAngle + (t[i].endAngle - t[i].startAngle) / 2,
                                r = (t[i].outerRadius - t[i].innerRadius) / 1.5 + t[i].innerRadius,
                                s = t[i].x + Math.cos(o) * r,
                                a = t[i].y + Math.sin(o) * r;
                            e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = this.options.scaleFontColor, e.font = "normal 12px Helvetica", e.fillText(t[i].value, s, a) } } }, r.barOptions = { showTooltips: !1, scaleShowLabels: !0, scaleShowGridLines: !1, scaleBeginAtZero: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><%if(datasets[i].label){%><span style="background-color:<%=datasets[i].fillColor%>"></span><%=datasets[i].label%><%}%></li><%}%></ul>', animation: !1, onAnimationComplete: function() { var e = this.chart.ctx;
                        e.fillStyle = this.options.scaleFontColor, e.font = "normal 12px Helvetica", e.textAlign = "center", e.textBaseline = "bottom", this.datasets.forEach(function(t) { t.bars.forEach(function(t) { e.fillText(t.value, t.x, t.y) }) }) } }, r.lineOptions = { showTooltips: !1, scaleShowLabels: !0, scaleShowGridLines: !1, scaleBeginAtZero: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><%if(datasets[i].label){%><span style="background-color:<%=datasets[i].pointColor%>"></span><%=datasets[i].label%><%}%></li><%}%></ul>', animation: !1, onAnimationComplete: function() { var e = this.chart.ctx;
                        e.font = this.scale.font, e.fillStyle = this.options.scaleFontColor, e.textAlign = "center", e.textBaseline = "bottom", this.datasets.forEach(function(t) { t.points.forEach(function(n, i) { 0 === i ? e.fillText(n.value, n.x + 10, n.y - 5) : i === t.points.length - 1 ? e.fillText(n.value, n.x - 10, n.y - 5) : e.fillText(n.value, n.x, n.y - 5) }) }) } }, r } return r(t, e), s(t, [{ key: "create$context", value: function() { var e = this.compJson,
                        t = $('<div class="create-chart" id="chart-' + e.id + '"></div>');
                    this.perfectJson(e); var n = document.createElement("h5");
                    n.setAttribute("class", "chart-title"), t.append(n); var i = this.canvas = document.createElement("canvas");
                    i.id = e.id, i.setAttribute("ctype", e.type), t.append(i); var o = document.createElement("div");
                    o.id = "legend-" + e.id, t.append(o); var r = this; return this.initedChart = new Promise(function(t) { a().then(function() { r.initChart(o, i, n, e), t() })["catch"](function(e) { return console.error(e) }) }), t } }, { key: "perfectJson", value: function(e) {
                    function t(e) { n(e), i(e), o(e) }

                    function n(e) { e && e.chartTitle && (e.chartTitle = u(e.chartTitle)) }

                    function i(e) { e && e.segments && e.segments.length && e.segments.forEach(function(e) { l(e.label) && (e.label = u(e.label)) }) }

                    function o(e) { e && e.lengends && e.lengends.length && e.lengends.forEach(function(t, n) { l(t) && (e.lengends[n] = u(t)) }) } var r = e.properties;
                    n(r), t(r.pieChart), t(r.barChart), t(r.lineChart) } }, { key: "initChart", value: function(e, t, n, i) { var o, r = i.properties.chartType,
                        s = t.getContext("2d"),
                        a = parseFloat(i.css.width),
                        c = parseFloat(i.css.height);
                    $(t).css("width", a + "px"), $(t).css("height", c / 2 + "px"), t.width = parseInt(window.getComputedStyle(t).width), t.height = parseInt(window.getComputedStyle(t).height), "pie" === r ? o = this.pieChart = this.createPieChart(s) : "bar" === r ? o = this.barChart = this.createBarChart(s) : "line" !== r && "curve" !== r || (o = this.lineChart = this.createLineChart(s, r)), i.properties.chartTitle && (n.innerHTML = i.properties.chartTitle), "pie" === r && i.properties.pieChart && (o = this.pieChart = this.setPieChartView(i, s, o), $(t).data("pieChart", o)), "bar" === r && i.properties.barChart && (o = this.barChart = this.setBarChartView(i, s, o), $(t).data("barChart", o)), "line" !== r && "curve" !== r || !i.properties.lineChart || (o = this.lineChart = this.setLineChartView(i, s, o), $(t).data("lineChart", o)), e.innerHTML = o.generateLegend(); var u = i.properties.legPosition; "position-align" === u ? $(e).addClass("position-align") : "position-right" === u ? $(e).addClass("position-right") : "position-none" === u && $(e).addClass("position-none") } }, { key: "getChartValue", value: function(e) { for (var t, n = [], i = [], o = [], r = [], s = "", a = "", c = "", u = "", l = 0; l < e.segments.length; l++) t = e.segments[l], s = isNaN(t.value) || t.value < 0 ? "" : t.value, a = isNaN(t.value1) || t.value1 < 0 ? "" : t.value1, c = isNaN(t.value2) || t.value2 < 0 ? "" : t.value2, u = isNaN(t.value3) || t.value3 < 0 ? "" : t.value3, (t.label || s || a || c || u) && (r.push(t.label), a = s || a, n.push(a), i.push(c), o.push(u)); return { data1: n, data2: i, data3: o, xLabels: r } } }, { key: "setLineChartView", value: function(e, t, n) { var i = e.properties.lineChart,
                        o = this.getChartValue(i),
                        r = [],
                        s = [];
                    n.datasets.forEach(function(e) { r.push(e.strokeColor), s.push(e.fillColor) }); var a = { labels: o.xLabels, datasets: [{ label: i.lengends[0], fillColor: s[0], strokeColor: r[0], pointColor: r[0], pointStrokeColor: "#fff", data: o.data1 }, { label: i.lengends[1], fillColor: s[1], strokeColor: r[1], pointColor: r[1], pointStrokeColor: "#fff", data: o.data2 }, { label: i.lengends[2], fillColor: s[2], strokeColor: r[2], pointColor: r[2], pointStrokeColor: "#fff", data: o.data3 }] },
                        c = n.options; return i.options && i.options.scaleFontColor && (c.scaleFontColor = i.options.scaleFontColor), n.destroy(), n = new Chart(t).Line(a, c), n.datasets.forEach(function(e) { var t = !0;
                        e.points.forEach(function(e) { e.value && (t = !1) }), t ? e.points.length = 0 : e.points.forEach(function(e) { e.value || (e.value = 0) }) }), n.update(), n } }, { key: "setBarChartView", value: function(e, t, n) { var i = n.options,
                        o = e.properties.barChart,
                        r = this.getChartValue(o),
                        s = { labels: r.xLabels, datasets: [{ fillColor: o.fillColors[0], strokeColor: "rgba(0,0,0,0)", data: r.data1, label: o.lengends[0] }, { fillColor: o.fillColors[1], strokeColor: "rgba(0,0,0,0)", data: r.data2, label: o.lengends[1] }, { fillColor: o.fillColors[2], strokeColor: "rgba(0,0,0,0)", data: r.data3, label: o.lengends[2] }] }; return o.options && o.options.scaleFontColor && (i.scaleFontColor = o.options.scaleFontColor), n.destroy(), new Chart(t).Bar(s, i) } }, { key: "setPieChartView", value: function(e, t, n) { var i = n.options,
                        o = "#000",
                        r = e.properties.pieChart;
                    r.options && r.options.scaleFontColor && (o = r.options.scaleFontColor), i.scaleFontColor = o; var s = this.getChartValue(r),
                        a = s.data1.map(function(e, t) { return { value: e, color: r.fillColors[t], label: s.xLabels[t] } }); return n.destroy(), new Chart(t).Pie(a, i) } }, { key: "getPixelRatio", value: function(e) { var t = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1; return (window.devicePixelRatio || 1) / t } }, { key: "createPieChart", value: function(e) { var t = [{ value: 300, color: "#57c7d4", label: "1月" }, { value: 150, color: "#3aa99e", label: "2月" }, { value: 100, color: "#f2a654", label: "3月" }, { value: 140, color: "#f96868", label: "4月" }, { value: 120, color: "#926dde", label: "5月" }],
                        n = new Chart(e).Pie(t, this.pieOptions); return n } }, { key: "createBarChart", value: function(e) { var t = { labels: ["1月", "2月", "3月", "4月", "5月"], datasets: [{ fillColor: "#62a8ea", strokeColor: "rgba(0,0,0,0)", data: [60, 70, 80, 56, 40], label: "图例1" }, { fillColor: "#926dde", strokeColor: "rgba(0,0,0,0)", data: [80, 56, 40, 93, 112], label: "图例2" }, { fillColor: "#f2a654", strokeColor: "rgba(0,0,0,0)", data: [160, 86, 140, 123, 23], label: "图例3" }] },
                        n = new Chart(e).Bar(t, this.barOptions); return n } }, { key: "createLineChart", value: function(e, t) { var n = ["rgba(146,109,222,1)", "rgba(87,199,212,1)", "rgba(242,166,84,1)"],
                        i = n.map(function(e) { return e.replace(/[^,]+(?=\))/, "0") });
                    this.lineOptions.bezierCurve = !1, "curve" === t && (i = i.map(function(e) { return e.replace(/[^,]+(?=\))/, "0.2") }), this.lineOptions.bezierCurve = !0); var o = { labels: ["1月", "2月", "3月", "4月", "5月"], datasets: [{ label: "图例1", fillColor: i[0], strokeColor: n[0], pointColor: n[0], pointStrokeColor: "#fff", data: [28, 24, 40, 19, 27] }, { label: "图例2", fillColor: i[1], strokeColor: n[1], pointColor: n[1], pointStrokeColor: "#fff", data: [123, 132, 146, 118, 189] }, { label: "图例3", fillColor: i[2], strokeColor: n[2], pointColor: n[2], pointStrokeColor: "#fff", data: [201, 232, 256, 215, 278] }] },
                        r = new Chart(e).Line(o, this.lineOptions); return r } }, { key: "updateSize", value: function(e, t) { var n = parseFloat(t.width),
                        i = parseFloat(t.height),
                        o = this.canvas,
                        r = o.getContext("2d"),
                        s = this.compJson,
                        a = s.properties.chartType,
                        c = null;
                    $(o).css("width", n + "px"), $(o).css("height", i / 2 + "px"), o.width = parseInt(window.getComputedStyle(o).width), o.height = parseInt(window.getComputedStyle(o).height), "pie" === a ? c = this.pieChart = this.createPieChart(r) : "bar" === a ? c = this.barChart = this.createBarChart(r) : "line" !== a && "curve" !== a || (c = this.lineChart = this.createLineChart(r, a)), "pie" === a && s.properties.pieChart && (c = this.pieChart = this.setPieChartView(s, r, c), $(o).data("pieChart", c)), "bar" === a && s.properties.barChart && (c = this.barChart = this.setBarChartView(s, r, c), $(o).data("barChart", c)), "line" !== a && "curve" !== a || !s.properties.lineChart || (c = this.lineChart = this.setLineChartView(s, r, c), $(o).data("lineChart", c)) } }]), t }(c);
    e.exports = p }, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var r = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        s = n(114),
        a = n(68),
        c = n(41).parse,
        u = n(90).qiniuZoom,
        l = n(115),
        p = n(116),
        h = n(120),
        d = n(122),
        f = n(124),
        g = n(125).isPhoneNumber,
        v = n(22).openUrl,
        m = n(126),
        y = function() {
            function e(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o(this, e), this.$ability = { style: { self: !0, base: { self: !0, backgroundColor: !0, color: !0, opacity: !0, paddingTop: !0, lineHeight: !0, lock: !0 }, border: { self: !0, borderWidth: !0, borderRadius: !0, borderStyle: !0, borderColor: !0, rotate: !0 }, compFont: { self: !1, fontFamily: !1 }, boxShadow: { self: !0, boxShadowSize: !0, boxShadowBlur: !0, boxShadowColor: !0, boxShadowDirection: !0 }, compStyle: { self: !0 }, commonStyle: { self: !0, title: !0, display: !1, status: !1, size: !0, position: !0, rotate: !0, opacity: !0, align: !0, zIndex: !0 }, advanceStyle: { self: !0, paddingTop: !0, borderWidth: !0, borderRadius: !0, borderStyle: !0, borderColor: !0, boxShadowSize: !0, boxShadowBlur: !0, boxShadowColor: !0, boxShadowDirection: !0, lock: !0, variable: !1 } }, anim: !0, trigger: !0, sound: !0, link: !0, flexLine: "n,ne,e,se,s,sw,w,nw,r" }, this.compJson = t, this.type = this.compJson.type, this.displayed = !1, "string" == typeof this.compJson.properties && (this.compJson.properties = {}), this.compJson.properties.initType = this.compJson.properties.initType || 0, this.anim = this.compJson.properties.anim || [], this.eqxPage = n, this.eqxScene = n.eqxScene } return r(e, [{ key: "toJson", value: function() { return JSON.parse(JSON.stringify(this.compJson)) } }, { key: "isEditLock", value: function() { return this.getProp("editLock") } }, { key: "updateDisplyStatus", value: function() {} }, { key: "getImgSrc", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this.eqxScene.config.disableQiniuZoom,
                        i = t.width,
                        o = t.height; return n ? u(e) : u(e, i, o) } }, { key: "getName", value: function() { var e = this.compJson.name; return e || _DEBUG_ && console.error("comp has no name", this), e } }, { key: "getCss", value: function(e) { var t = this.compJson.css; return e ? t[e] : t } }, { key: "toString", value: function() { var e = this.compJson,
                        t = e.pageId,
                        n = e.id,
                        i = e.num; return "page-" + t + "-comp-" + n + "-num-" + i } }, { key: "getProp", value: function(e) { return this.compJson.properties[e] } }, { key: "setProps", value: function(e) { var t = this,
                        n = this.compJson.properties;
                    Object.keys(e).forEach(function(i) { var o = e[i]; "sound" === i ? t.compJson.sound = o : null === o || void 0 === o || "" === o ? delete n[i] : n[i] = o }) } }, { key: "setProp", value: function(e, t) { this.setProps(i({}, e, t)) } }, { key: "update$li", value: function(e) { this.updateCss(e), this.$li.css(e) } }, { key: "update$boxDiv", value: function(e) { var t = this;
                    this.updateCss(e), this.$boxDiv.css(e), Object.keys(e).forEach(function(n) { "fontSize" === n && t.$boxDiv.css({ "font-size": e[n] + "px" }).find("#" + t.compJson.id).css({ "font-size": e[n] + "px" }) }) } }, { key: "updateCss", value: function(e) { var t = this.compJson.css;
                    Object.keys(e).forEach(function(n) { t[n] = e[n] }) } }, { key: "updatePos", value: function(e, t) { var n = this.compJson.css;
                    isNaN(n.width) && (n.width = parseInt(this.$li.css("width"))), isNaN(n.height) && (n.height = parseInt(this.$li.css("height"))), isNaN(n.top) && (n.top = parseInt(this.$li.css("top"))), isNaN(n.left) && (n.left = parseInt(this.$li.css("left"))), this.update$li({ left: e + n.left, top: t + n.top }) } }, { key: "updatePos2", value: function(e, t) { this.update$li({ left: e, top: t }) } }, { key: "updateSize", value: function(e, t) {} }, { key: "resetStyle", value: function() { var e = { opacity: 1, transform: "rotateZ(0deg)" };
                    this.update$li(e); var t = { fontSize: "24px", color: "#676767", backgroundColor: "", fontWeight: "normal", fontStyle: "normal", textAlign: "left", textDecoration: "none", letterSpacing: 0, borderWidth: 0, borderStyle: "solid", borderColor: "rgba(0,0,0,1)", borderRadius: 0, borderRadiusPerc: 0, borderBottomRightRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0, paddingBottom: 0, paddingTop: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0.5)", boxShadowDirection: 0, boxShadowSize: 0, transform: "none", opacity: 1 };
                    this.update$boxDiv(t) } }, { key: "create$li", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.num,
                        i = e.type,
                        o = e.css,
                        r = e.properties.lock,
                        a = o.width,
                        u = o.height,
                        l = o.left,
                        p = o.top,
                        h = o.zIndex,
                        d = o.bottom,
                        f = o.transform,
                        g = o.display,
                        v = o.opacity; if (f && f.length > 1) { var m = /rotateZ\((-?\d*\.?\d*)(deg|)\)/.exec(f);
                        m && m.length && (f = m[0]) } var y = $(c(s, { id: t, num: n, type: i }));
                    r && y.addClass("alock"), y.css({ width: a, height: u, left: l, top: p, zIndex: h, bottom: d, transform: f, display: g, opacity: v }), this.$li = y, this.addClassToLi(this.$li); var b = Object.assign({}, o, { width: "100%", height: "100%", transform: "none", fontFamily: "", opacity: "", marginTop: "0px", marginBottom: "0px" });
                    this.$boxDiv = this.$li.find(".element-box").css(b); var x = {}; if (o.turnOver ? x.transform = o.turnOver : o.transform && o.transform.indexOf && (o.transform.indexOf("rotateX(180deg)") > -1 || o.transform.indexOf("rotateY(180deg)") > -1) && (o.transform.indexOf("rotateX(180deg)") > -1 && (o.turnOver = "rotateX(180deg)"), o.turnOver && o.transform.indexOf("rotateY(180deg)") > -1 ? o.turnOver = o.turnOver + " rotateY(180deg)" : o.transform.indexOf("rotateY(180deg)") > -1 && (o.turnOver = "rotateY(180deg)"), o.turnOver && (x.transform = o.turnOver)), this.$boxContentDiv = this.$boxDiv.find(".element-box-contents").css(x), this.compJson.sound && this.compJson.sound.id && "edit" === this.eqxScene.config.mode && this.addSoundIcon(), this.$contentsDiv = this.$boxDiv.find(".element-box-contents"), this.$context = this.create$context(), this.$contentsDiv.append(this.$context), ["501", "502", "503", "504"].indexOf(this.compJson.type.toString()) !== -1) this.eqxScene.inputComps = this.eqxScene.inputComps || [], this.eqxScene.inputComps.push(this);
                    else if ("7" === this.compJson.type.toString()) { var w = this.compJson.properties["var"];
                        this.eqxScene.newTextComps = this.eqxScene.newTextComps || [], w && w.isUsed && this.eqxScene.newTextComps.push(this) } var k = this.compJson.properties.GSensor; if (k && k.isUsed && "edit" !== this.eqxScene.config.mode) { var P = "positive" === k.direction ? k.distance : -k.distance;
                        this.$li.addClass("layer"), this.$li.attr("data-depth", P) } return this.$li } }, { key: "removeSoundIcon", value: function() { this.$soundIcon && (this.$soundIcon.remove(), this.$soundIcon = null) } }, { key: "addSoundIcon", value: function() { this.removeSoundIcon(), this.$soundIcon = $('<div class="sound-icon eqf-music"></div>'), this.$boxDiv.after(this.$soundIcon) } }, { key: "destroy", value: function() { this.eleHide(), this.$li.remove(), this.$li = null } }, { key: "create$context", value: function() { return $() } }, { key: "addClassToLi", value: function(e) {} }, { key: "addEventListeners", value: function() { this.bindAfterRenderEvent(this.$li, this.compJson), this.addTriggerEvent(), this.addSoundEvent(), this.addAnimSoundEvent(), this.addInteractiveVideoEvent() } }, { key: "eleHide", value: function() { this.$li && this.compJson.properties.anim && this.compJson.properties.anim.length && this.$li.css({ display: "none" }), this.soundAgent && this.soundAgent.update(new l("hide")), this.anim && this.anim.length && this.anim.forEach(function(e) { e.sound && e.soundAgent && e.soundAgent.update(new l("stop")) }), this.displayed = !1, this.stopAnimation(), this.flux && this.flux.playing && this.flux.stop() } }, { key: "stopAnimation", value: function() { a.stopAnimation(this) } }, { key: "startAnimation", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.index,
                        n = e.maxCount; if (e.reset) var i = this,
                        o = function() { i.stopAnimation() };
                    a.startAnimation(this, { animIndex: t, maxCount: n, callback: o }) } }, { key: "eleShow", value: function() { if (this.eqxScene.config.disableCompAnim) { var e = this.compJson.properties.anim;
                        e[0] && "typer" === e[0].type && this.$context.css({ opacity: 1 }) } else this.startAnimation();
                    this.$li && this.compJson.properties.anim && this.compJson.properties.anim.length && this.$li.css("display", "block"), this.displayed = !0, this.receiveEventAgent && this.receiveEventAgent.preHandle(), this.triggerEventAgent && this.triggerEventAgent.preHandle(), this.flux && this.compJson.properties.autoPlay && (this.flux.stop(), this.flux.start()) } }, { key: "addInteractiveVideoEvent", value: function() { "o" === this.compJson.type && this.compJson.src && (this.interactiveVideoAgent = new m(this, this.eqxScene.soundManager)) } }, { key: "addSoundEvent", value: function() { this.compJson.sound && (this.soundAgent = new d(this, this.eqxScene.soundManager)) } }, { key: "addTriggerEvent", value: function() { var e = this.compJson.trigger,
                        t = this.eqxScene.eventManager;
                    e && (e.sends && (this.triggerEventAgent = new p(this, e, t)), e.receives && (this.receiveEventAgent = new h(this, e, t))) } }, { key: "deleSendId", value: function(e) { if (this.compJson.trigger && this.compJson.trigger.sends) { var t = this.compJson.trigger.sends;
                        t.forEach(function(n, i) { n.handles.forEach(function(t, i) { t.ids.indexOf(e) !== -1 && t.ids.splice(t.ids.indexOf(e), 1), 0 === t.ids.length && n.handles.splice(i, 1) }), 0 === n.handles.length && t.splice(i, 1) }), 0 === t.length && delete this.compJson.trigger.sends, this.compJson.trigger.sends || this.compJson.trigger.receives || delete this.compJson.trigger } } }, { key: "deleReceiveId", value: function(e) { if (this.compJson.trigger && this.compJson.trigger.receives) { var t = this.compJson.trigger.receives;
                        t.forEach(function(n, i) { n.ids.indexOf(e) !== -1 && n.ids.splice(n.ids.indexOf(e), 1), 0 === n.ids.length && t.splice(i, 1) }), 0 === t.length && delete this.compJson.trigger.receives, this.compJson.trigger.sends || this.compJson.trigger.receives || delete this.compJson.trigger } } }, { key: "addAnimSoundEvent", value: function() { var e = this,
                        t = this.anim;
                    t && t.length && t.forEach(function(t) { t.sound && (t.soundAgent = new f(e, t, e.eqxScene.soundManager)) }) } }, { key: "autoAdjustSize", value: function() { return {} } }, { key: "bindAfterRenderEvent", value: function(e, t) { var n = this,
                        i = t.properties,
                        o = i.url,
                        r = i.number,
                        s = t.pageId; if (o) $(e).click(function() { Number.isInteger(+o) ? n.eqxScene.pageScroll.goToPageById(o) : v(o, s) });
                    else if (r && g(r)) { var a = $('<a class="telphone" href="tel:' + r + '"></a>');
                        $(e).on("click", function() { $(document.body).append(a), setTimeout(function() { a[0].click(), a.remove() }) }) } } }]), e }();
    e.exports = y }, function(e, t) { e.exports = '<li id="inside_#{id}" num="#{num}" ctype="#{type}"><div class="element-box" style="width: 100%; height: 100%"><div class="element-box-contents" style="width: 100%; height: 100%"></div></div></li>' }, function(e, t) { "use strict";

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var i = function o(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        n(this, o), this.type = e, this.data = t };
    e.exports = i }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function h(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : h(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        c = n(117),
        u = n(119).RAW_EVENT,
        l = n(119).INIT_EVENT,
        p = function(e) {
            function t(e, n, r) { return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r)) } return r(t, e), s(t, [{ key: "addEventListener", value: function() { var e = this,
                        n = this.triggerJson.sends,
                        i = this.master.compJson.id;
                    this.master.$li.attr("data-event", "1120603"), n && "[object Array]" == toString.apply(n) && n.forEach(function(n) { n.type === u.click ? e.master.$li.on("click", function() { e.publish(i, n) }) : a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addEventListener", e).call(e) }) } }, { key: "preHandle", value: function() { var e = this.master.compJson.properties.initType;
                    e == l.show ? this.master.$li.show() : e == l.hide && this.master.$li.hide() } }]), t }(c);
    e.exports = p }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var o = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        r = n(118).getHash,
        s = function() {
            function e(t, n, o) { i(this, e), this.triggerJson = n, this.master = t, this.manager = o, this.addEventListener() } return o(e, [{ key: "addEventListener", value: function() {} }, { key: "preHandle", value: function() {} }, { key: "removeEventListener", value: function() {} }, { key: "publish", value: function(e, t) { var n = this;
                    t.handles.forEach(function(i) { var o = r(e, i.type);
                        n.manager.publish(o, { sender: n.master, delay: 1e3 * t.delay }) }) } }]), e }();
    e.exports = s }, function(e, t, n) { "use strict";

    function i() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return e.some(function(e) { return e.type === r.shake }) }

    function o(e, t) { return "sender-" + e + "-type-" + t + "-" + s[t] } var r = n(119).RAW_EVENT,
        s = n(119).EQX_EVENT;
    e.exports = { hasShakeEvent: i, getHash: o } }, function(e, t) { "use strict"; var n = { click: 1, shake: 2 },
        i = { show: 1, hide: 2, random: 3, play: 4 },
        o = { show: 1, hide: 2, "default": 0 };
    e.exports = { RAW_EVENT: n, EQX_EVENT: i, INIT_EVENT: o } }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function h(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : h(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        c = n(121),
        u = n(119).EQX_EVENT,
        l = n(119).INIT_EVENT,
        p = function(e) {
            function t(e, n, r) { return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r)) } return r(t, e), s(t, [{ key: "getPreHandler", value: function(e, n) { if (n != l["default"]) return a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getPreHandler", this).call(this, e, n); switch (e) {
                        case u.show:
                            return function(e) { e.$li.hide() };
                        case u.hide:
                            return function(e) { e.$li.show() };
                        default:
                            return a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getPreHandler", this).call(this, e, n) } } }, { key: "getHandler", value: function(e) { switch (e) {
                        case u.show:
                            return function(e, t) { setTimeout(function() { return e.$li.show() }, t.delay) };
                        case u.hide:
                            return function(e, t) { setTimeout(function() { return e.$li.hide() }, t.delay) };
                        case u.play:
                            return function(e, t) { setTimeout(function() { return e.playVideo() }, t.delay) };
                        default:
                            return a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getHandler", this).call(this, e) } } }]), t }(c);
    e.exports = p }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var o = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        r = n(25).noop,
        s = n(118).getHash,
        a = function() {
            function e(t, n, o) { i(this, e), this.master = t, this.triggerJson = n, this.manager = o, this.events = [], this.subscribe(), this.preHandle() } return o(e, [{ key: "subscribe", value: function() { var e = this;
                    this.triggerJson.receives.forEach(function(t) {
                        (t.ids || []).forEach(function(n) { var i = s(n, t.type);
                            e.manager.subscribe(i, e); var o = e.events.findIndex(function(e) { return e.hash === i });
                            o > -1 && e.events.splice(o, 1); var r = { hash: i, preHandler: e.getPreHandler(t.type, e.master.compJson.properties.initType), handler: e.getHandler(t.type) };
                            e.events.push(r) }) }) } }, { key: "update", value: function(e) { var t = e.type,
                        n = e.data,
                        i = this.events.find(function(e) { return e.hash === t });
                    i && i.handler.call(this, this.master, n) } }, { key: "preHandle", value: function() { var e = this;
                    this.events.forEach(function(t) { return t.preHandler.call(e, e.master) }) } }, { key: "getHandler", value: function(e) { return r } }, { key: "getPreHandler", value: function(e) { return r } }]), e }();
    e.exports = a }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(22).resolveUrl,
        c = n(20),
        u = n(123),
        l = n(23).mobilecheck,
        p = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return r.manager = n, r.soundJson = r.master.compJson.sound, r.type = 1, r.init(), r.addEventListeners(), r.register(), r } return r(t, e), s(t, [{ key: "init", value: function() { this.audio = new window.Audio, this.audio.src = a(c.FILE, this.soundJson.src) } }, { key: "update", value: function(e) { switch (e.type) {
                        case "stop":
                        case "hide":
                            this.stopPlay(); break;
                        case "down":
                            this.audio.volume = .1; break;
                        case "restore":
                            this.audio.volume = 1; break;
                        case "reset":
                            this.audio.currentTime = 0 } } }, { key: "addEventListeners", value: function() { var e = this,
                        t = l() ? "touchend" : "click";
                    this.master.$li.on(t, function() { return e.audio.paused ? e.startPlay() : e.stopPlay() }), $(this.audio).on("ended", function() { return e.manager.onEnd(e) }) } }, { key: "startPlay", value: function() { this.audio.paused && (this.audio.play(), this.manager.onPlay(this)) } }, { key: "stopPlay", value: function() { this.audio.paused || (this.audio.pause(), this.manager.onEnd(this)) } }]), t }(u);
    e.exports = p }, function(e, t) {
    "use strict";

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
        }(),
        o = function() {
            function e(t, i) { n(this, e), this.master = t, this.manager = i } return i(e, [{ key: "register", value: function() { this.manager.add(this) } }, { key: "deregister", value: function() { this.manager.remove(this) } }, { key: "update", value: function(e) {} }]), e }();
    e.exports = o
}, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(123),
        c = n(22).resolveUrl,
        u = n(20),
        l = function(e) {
            function t(e, n, r) { i(this, t); var s = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r)); return s.manager = r, s.soundJson = n.sound, s.type = 2, s.init(), s.addEventListeners(), s.register(), s } return r(t, e), s(t, [{ key: "init", value: function() { this.audio = new Audio, this.audio.src = c(u.FILE, this.soundJson.path), this.audio.loop = !0 } }, { key: "startPlay", value: function() { this.audio.paused && (this.audio.play(), this.manager.onPlay(this)) } }, { key: "stopPlay", value: function() { this.audio.paused || (this.audio.pause(), this.audio.currentTime = 0, this.manager.onEnd(this)) } }, { key: "addEventListeners", value: function() { var e = this;
                    $(e.audio).on("AnimSound.start", function(t, n) { e.startPlay() }).on("AnimSound.end", function(t, n) { e.stopPlay() }) } }, { key: "update", value: function(e) { switch (e.type) {
                        case "stop":
                            this.stopPlay(); break;
                        case "play":
                            this.startPlay(); break;
                        case "down":
                            this.audio.volume = .1; break;
                        case "restore":
                            this.audio.volume = 1 } } }]), t }(a);
    e.exports = l }, function(e, t) { "use strict";

    function n(e) { var t = /(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/; return t.test(e) }

    function i(e) { var t = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; return t.test(e) } e.exports = { isPhoneNumber: n, isEmail: i } }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(123),
        c = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return r.manager = n, r.compJson = r.master.compJson, r.type = 5, r.addEventListeners(), r.register(), r } return r(t, e), s(t, [{ key: "addEventListeners", value: function() { var e = this;
                    this.master.$context.on("ended", function() { e.end() }) } }, { key: "play", value: function() { this.master.$context[0].play(), this.manager.onPlay(this) } }, { key: "end", value: function() { this.master.$context[0].pause(), this.manager.onEnd(this) } }]), t }(a);
    e.exports = c }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function g(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : g(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        c = n(128),
        u = n(113),
        l = n(105).isSupportStyle,
        p = n(131),
        h = n(142),
        d = n(90).initEffectImgPath,
        f = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { lineHeight: !1, color: !1, paddingTop: !1 }, compStyle: { backgroundColor: !0 }, imageStyle: !0 } }), r } return r(t, e), s(t, [{ key: "getImgSrc", value: function(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return this.eqxScene.config.mobileEdit && (n.width && (n.width *= 2), n.height && (n.height *= 2)), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getImgSrc", this).call(this, e, n) } }, { key: "updateSize", value: function(e, n) { if (a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateSize", this).call(this, e, n), this.$width && this.$height) { var i = this.$width / this.$height;
                        this.updateImageSize(i, e, n) } } }, { key: "updateTurnOver", value: function(e) { this.$boxContentDiv.css("transform", e) } }, { key: "pinchEnd", value: function() { var e = this.compJson,
                        t = e.properties,
                        n = e.css,
                        i = t.imgStyle,
                        o = this.$context[0],
                        r = h.parseTransform(o.style.transform),
                        s = r.scale.x,
                        a = r.scale.y,
                        c = i.width,
                        u = i.height,
                        l = i.marginTop,
                        p = i.marginLeft,
                        d = c * s,
                        f = u * a,
                        g = Math.max(n.height / f, n.width / d, 1);
                    f *= g, d *= g; var v = p - (d - c) / 2,
                        m = l - (f - u) / 2,
                        y = this.validateImgStyle({ width: d, height: f, marginTop: m, marginLeft: v }, n);
                    this.$context.css("transform", "").css(y), t.imgStyle = y } }, { key: "validateImgStyle", value: function(e, t) { var n = e.width,
                        i = e.height,
                        o = e.marginTop,
                        r = e.marginLeft; return o < 0 ? o + i < t.height && (o = t.height - i) : o = 0, r < 0 ? r + n < t.width && (r = t.width - n) : r = 0, { width: n, height: i, marginTop: o, marginLeft: r } } }, { key: "moveEnd", value: function() { var e = this.compJson,
                        t = e.properties,
                        n = e.css,
                        i = t.imgStyle,
                        o = parseInt(this.$context.css("marginLeft")),
                        r = parseInt(this.$context.css("marginTop")),
                        s = this.validateImgStyle({ width: i.width, height: i.height, marginLeft: o, marginTop: r }, n);
                    this.$context.css(s), t.imgStyle = s } }, { key: "updateImageSize", value: function(e, t, n) { e || (this.$width && this.$height ? e = this.$width / this.$height : console.error("no imageRatio!")), t || (t = this.compJson.css), n || (n = this.compJson.css), void 0 === n.height && (n.height = t.height), void 0 === n.width && (n.width = t.width), void 0 === n.borderWidth && (n.borderWidth = parseInt(t.borderWidth || this.compJson.css.borderWidth || 0)); var i = this.compJson,
                        o = i.properties,
                        r = (n.width - 2 * n.borderWidth) / (n.height - 2 * n.borderWidth),
                        s = o.imgStyle; if (r > e) { var a = n.width - 2 * n.borderWidth,
                            c = a / e,
                            u = -(c + 2 * n.borderWidth - n.height) / 2,
                            l = 0;
                        s = { width: a, height: c, marginTop: u, marginLeft: l } } else { var p = n.height - 2 * n.borderWidth,
                            h = e * p,
                            d = -(h + 2 * n.borderWidth - n.width) / 2,
                            f = 0;
                        s = { width: h, height: p, marginLeft: d, marginTop: f } } this.$context.css(s), o.imgStyle = s } }, { key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.properties,
                        o = i.src,
                        r = i.imgStyle,
                        s = i.maskSrc,
                        a = i.filter;
                    a = void 0 === a ? {} : a; var u = a.type; if (o = d(o), r && (o = this.getImgSrc(o, { width: r.width, height: r.height })), Number.isInteger(u)) var p = $(c.filterImg({ id: t, type: n, src: o, filterType: u }));
                    else p = $(c.img({ id: t, type: n, src: o })); return l("WebkitMaskBoxImage") && s && this.$contentsDiv.addClass("img_mask").css({ "-webkit-mask-box-image": "url(" + s + ")" }), r && p.css(r), p } }, { key: "eleShow", value: function() { var e = this,
                        n = this.compJson.properties.src;
                    n && /.gif/.test(n) && setTimeout(function() { var t = e.$context.prop("src");
                        e.$context.show().each(function() { this.offsetHeight }).prop("src", t) }, 1), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "eleShow", this).call(this) } }], [{ key: "getImageStyles", value: function() { return p } }]), t }(u);
    e.exports = f }, function(e, t, n) { "use strict";

    function i(e) { var t = e.id,
            n = e.type,
            i = e.src,
            o = e.filterType,
            c = void 0 === o ? a[0].value : o,
            u = "filter-" + t,
            l = a.find(function(e) { return e.value === c }) || c[0],
            p = l.path; return s(r, { id: t, type: n, filterId: u, src: i, path: p }) }

    function o(e) { var t = e.id,
            n = e.type,
            i = e.src; return '<img id="' + t + '" ctype="' + n + '" class="element comp_image editable-image"  draggable="false" src="' + i + '">' } n(129); var r = n(130),
        s = n(41).parse;
    e.exports = { img: o, filterImg: i }; var a = [{ value: 1, path: "1.7 0.1 0.1 0 -0.287 0 1.7 0.1 0 -0.287 0 0.1 1.6 0 -0.287 0 0 0 1.0 0" }, { value: 2, path: "2.1 -1.4 0.6 0.0 -0.12 -0.3 2.0 -0.3 0.0 -0.12 -1.1 -0.2 2.6 0.0 -0.12 0.0 0.0 0.0 1.0 0.0" }, { value: 3, path: "1.9 -0.3 -0.2 0 -0.341 -0.2  1.7 -0.1  0 -0.341 -0.1 -0.6 2.0 0 -0.341 0 0 0 1.0 0" }, { value: 4, path: "1.0 0.0 0.0 0.0 -0.26 0.0 1.1 0.0 0.0 -0.26 0.0 0.0 1.0 0.0 -0.26 0.0 0.0 0.0 1.0 0.0" }, { value: 5, path: "1.2 0.0 0.0 0.0 0.0 0.0 0.9 0.0 0.0 0.0 0.0 0.0 0.8 0.0 0.0 0 0 0 1.0 0" }, { value: 6, path: "0.8 0.3 0.1 0.0 0.182 0.1 0.9 0.0 0.0 0.182 0.1 0.3 0.7 0.0 0.182 0.0 0.0 0.0 1.0 0.0" }, { value: 7, path: "0.9 0 0 0 0.255 0 0.9 0 0 0.255 0 0 0.9 0 0.255 0 0 0 1.0 0" }, { value: 8, path: "0.6 0.3 0.1 0 0.28745 0.2 0.7 0.1 0 0.28745 0.2 0.3 0.4 0 0.28745 0 0 0 1.0 0" }, { value: 9, path: "0.8 1.6 0.2 0 -0.639 0.8 1.6 0.2 0 -0.639 0.8 1.6 0.2 0 -0.639 0 0 0 1.0 0" }, { value: 10, path: "0.2 0.5 0.1 0 0.16 0.2 0.5 0.1 0 0.16 0.2 0.5 0.1 0 0.16 0 0 0 1 0" }, { value: 11, path: "4.8 -1.0 -0.1 0 -1.523 -0.5 4.4 -0.1 0 -1.523 -0.5 -1.0 5.2 0 -1.523 0 0 0 1.0 0" }] }, function(e, t) {}, function(e, t) { e.exports = '<div id="#{id}" ctype="#{type}" class="element comp_image editable-image"><svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><image width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#{src}" filter="url(##{filterId})" draggable="false"></image><defs><filter id="#{filterId}"><feColorMatrix class="saturation" color-interpolation-filters="sRGB" type="matrix" values="#{path}"></feColorMatrix></filter></defs></g></svg></div>' }, function(e, t, n) { "use strict"; var i = [{ name: "圆形", path: n(132) }, { name: "菱形", path: n(133) }, { name: "心形", path: n(134) }, { name: "矩形2", path: n(135) }, { name: "矩形3", path: n(136) }, { name: "矩形4", path: n(137) }, { name: "星形1", path: n(138) }, { name: "星形2", path: n(139) }, { name: "星形3", path: n(140) }, { name: "三角形", path: n(141) }];
    e.exports = i }, function(e, t, n) { e.exports = n.p + "images/circle-6daa4d.svg" }, function(e, t, n) { e.exports = n.p + "images/diamond-a61c24.svg" }, function(e, t, n) { e.exports = n.p + "images/heart-d692b9.svg" }, function(e, t, n) { e.exports = n.p + "images/rect2-007f3e.svg" }, function(e, t, n) { e.exports = n.p + "images/rect3-896f69.svg" }, function(e, t, n) { e.exports = n.p + "images/rect4-fb3aef.svg" }, function(e, t, n) { e.exports = n.p + "images/star1-42a9b6.svg" }, function(e, t, n) { e.exports = n.p + "images/star2-b75251.svg" }, function(e, t, n) { e.exports = n.p + "images/star3-343bf6.svg" }, function(e, t, n) { e.exports = n.p + "images/triangle-170329.svg" }, function(e, t, n) { "use strict";

    function i() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        e += ""; var t = { rotate: 0, rotateY: 0, rotateX: 0, scale: { x: 1, y: 1 }, translate3d: { x: 0, y: 0, z: 0 } }; return e = e.replace(p, function(e, n) { t.rotate = v(n) }), e = e.replace(d, function(e, n) { t.rotateY = v(n) }), e = e.replace(h, function(e, n) { t.rotateX = v(n) }), e = e.replace(f, function(e, n, i) { t.scale = { x: v(n), y: v(i) } }), e.replace(g, function(e, n, i, o) { t.translate3d = { x: v(n), y: v(i), z: v(o) } }), t }

    function o() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        e += ""; var t = { rotate: 0, rotateY: 0, rotateX: 0, scale: { x: 1, y: 1 }, translate3d: { x: 0, y: 0, z: 0 } }; return e = e.replace(p, function(e, n) { t.rotate = parseFloat(n) }), e = e.replace(d, function(e, n) { t.rotateY = parseFloat(n) }), e = e.replace(h, function(e, n) { t.rotateX = parseFloat(n) }), e = e.replace(f, function(e, n, i) { t.scale = { x: parseFloat(n), y: parseFloat(i) } }), e.replace(g, function(e, n, i, o) { t.translate3d = { x: parseFloat(n), y: parseFloat(i), z: parseFloat(o) } }), t }

    function r(e) { return void 0 !== e.rotate ? "rotateZ(" + e.rotate + "deg)" : "" }

    function s(e) { if (e) { var t = e.x,
                n = void 0 === t ? 1 : t,
                i = e.y,
                o = void 0 === i ? 1 : i; return "scale(" + n + ", " + o + ")" } return "" }

    function a(e) { if (e) { var t = e.x,
                n = void 0 === t ? 0 : t,
                i = e.y,
                o = void 0 === i ? 0 : i,
                r = e.z,
                s = void 0 === r ? 0 : r; return "translate3d(" + n + "px, " + o + "px, " + s + "px)" } return "" }

    function c(e) { var t = [],
            n = e.translate3d; return !n || 0 === n.x && 0 === n.y && 0 === n.z || t.push(a(e.translate3d)), null !== e.rotate && void 0 !== e.rotate && t.push(r(e)), n = e.scale, !n || 1 === n.x && 1 === n.y || t.push(s(e.scale)), u(t.join(" ")) }

    function u(e) { return e.trim().replace(/\s{2,}/, " ") }

    function l(e, t) { var n = i(e),
            o = Object.assign({}, n, t); return c(o) } var p = /rotateZ\((-?\d*\.?\d*)(deg|)\)/,
        h = /rotateX\((-?\d*\.?\d*)(deg|)\)/,
        d = /rotateY\((-?\d*\.?\d*)(deg|)\)/,
        f = /scale\((-?\d+),\s?(\d+)\)/,
        g = /translate3d\((-?\d*(?:px)?),\s?(-?\d*(?:px)?),\s?(-?\d*(?:px)?)\)/,
        v = n(143).toInt;
    e.exports = { scaleReg: f, translate3dReg: g, parseTransform: i, getRotateStr: r, getScaleStr: s, getTranslate3dStr: a, getTransformStr: c, trimTransformStr: u, updateTransformStr: l, parseTransformInFloat: o } }, function(e, t) { "use strict";

    function n(e, t) { return "number" != typeof e && (e = parseFloat(e)), parseFloat(e.toFixed(t)) }

    function i(e) { return n(e, 0) }

    function o(e) { return n(e, 1) }

    function r(e) { return n(e, 2) }

    function s(e) { return e.toFixed(2) }

    function a(e) { return (!e || e < 0) && (e = 0), e < 1024 ? e + " KB" : (e /= 1024, e < 1024 ? s(e) + " MB" : (e /= 1024, e < 1024 ? s(e) + " GB" : (e /= 1024, s(e) + " TB"))) } e.exports = { toFixed: n, toFixed1: o, toFixed2: r, toInt: i, size: a } }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

    function s(e) { var t = e.id,
            n = e.type,
            i = e.title,
            o = void 0 === i ? "" : i,
            r = e.imgSrc,
            s = void 0 === r ? "" : r,
            a = e.width,
            u = void 0 === a ? 0 : a,
            h = e.height,
            d = void 0 === h ? 0 : h,
            f = e.padding;
        u = c(u), d = c(d); var g = o.replace(/ /g, "&nbsp;"),
            v = s ? '<img style="width: 100%; height: 100%;" src="' + s + '">' : g; return p(l, { id: t, type: n, width: u, height: d, content: v, padding: f }) } var a = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
    n(145); var c = n(146).addSuffixPx,
        u = n(113),
        l = n(147),
        p = n(41).parse,
        h = n(22).openUrl,
        d = n(79).bigDataXBData,
        f = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { lineHeight: !1 }, compStyle: { backgroundColor: !0 }, compFont: { self: !1, fontFamily: !1 } }, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), a(t, [{ key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.properties,
                        o = i.imgSrc,
                        r = i.title,
                        a = e.css,
                        c = a.width,
                        u = a.height; if (o) { o = this.getImgSrc(o, { width: c, height: u }); var l = "0" } else l = "0 8px"; return this.$context = $(s({ id: t, type: n, imgSrc: o, title: r, width: c, height: u, padding: l })), this.$context } }, { key: "bindAfterRenderEvent", value: function(e, t) { var n = this,
                        i = t.id,
                        o = t.properties.url,
                        r = t.pageId; return o && $(e).find("#" + i).click(function() { n.eqxPage.eqxScene.config.disableBigData || d(window.scene.id, 4, null, 10, "互动链接"), Number.isInteger(+o) ? n.eqxScene.pageScroll.goToPageById(o) : h(o, r) }), !!o } }, { key: "updateBtnTitle", value: function(e) { this.compJson.properties.imgSrc || (this.$context[0].innerText = e) } }]), t }(u);
    e.exports = f }, function(e, t) {}, function(e, t) { "use strict";

    function n(e) { var t = document.getElementsByTagName("style")[0]; if (!t) { t = document.createElement("style"); var n = document.head || document.getElementsByTagName("head")[0];
            t.type = "text/css", n.appendChild(t) } var i = document.createTextNode(e);
        t.appendChild(i) }

    function i(e) { return e = "" + e, e.indexOf("px") === -1 && (e += "px"), e } e.exports = { addGlobalStyle: n, addSuffixPx: i } }, function(e, t) { e.exports = '<a id="#{id}" ctype="#{type}" class="element eqx-link editable-text" style="cursor: default; width: 100%; height: 100%; padding: #{padding}" data-event="1120601">#{content}</a>' }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(21).$loadQQMap,
        c = n(113),
        u = n(41).parse,
        l = n(79).bigDataXBData,
        p = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { backgroundColor: !1, color: !1, opacity: !1, paddingTop: !1, lineHeight: !1 }, border: { self: !1 }, boxShadow: { self: !1 }, advanceStyle: { paddingTop: !1, borderWidth: !1, borderRadius: !1, borderStyle: !1, borderColor: !1, boxShadowSize: !1, boxShadowBlur: !1, boxShadowColor: !1, boxShadowDirection: !1 } }, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), s(t, [{ key: "create$context", value: function() { var e = this,
                        t = this.compJson,
                        n = t.id,
                        i = t.type,
                        o = t.content,
                        r = t.properties,
                        s = r.lat,
                        c = void 0 === s ? 39.916527 : s,
                        l = r.lng,
                        p = void 0 === l ? 116.397128 : l,
                        h = r.zoom,
                        d = void 0 === h ? 11 : h,
                        f = '<div id="#{id}" ctype="#{type}" class="element"></div>',
                        g = $(u(f, { id: n, type: i })).css({ width: "100%", height: "100%" }).on("mousedown mousemove mouseup mouseleave touchstart touchmove touchend", function(e) { e.stopPropagation() }); return a().then(function() { e.initQQMap({ $context: g, content: o, lat: c, lng: p, zoom: d }) }), g } }, { key: "initQQMap", value: function(e) { var t = e.$context,
                        i = e.content,
                        o = e.lat,
                        r = e.lng,
                        s = e.zoom,
                        a = new qq.maps.LatLng(o, r),
                        c = { disableDefaultUI: !0, center: a, zoom: parseFloat(s) },
                        u = this.map = new qq.maps.Map(t[0], c);
                    i && (this.label = new qq.maps.Label({ position: a, map: u, content: i })); var l = new qq.maps.Point(25, 5),
                        p = new qq.maps.Size(34, 34),
                        h = new qq.maps.Point(0, 0),
                        d = new qq.maps.MarkerImage(n(149), p, h, l),
                        f = new qq.maps.Marker({ map: u, position: u.getCenter() });
                    f.setIcon(d), t.data("marker", f) } }, { key: "bindAfterRenderEvent", value: function(e) { var t = this,
                        n = $(e);
                    n.click(function() { t.eqxPage.eqxScene.config.disableBigData || l(window.scene.id, 4, null, 13, "互动地图") }) } }]), t }(c);
    e.exports = p }, function(e, t, n) { e.exports = n.p + "images/marker-15820e.png" }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

    function s() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l[0].value; return l.find(function(t) { var n = t.value; return n === e }) }

    function a(e) { var t = e.imgW,
            n = e.imgH,
            i = e.containerW,
            o = e.containerH,
            r = {},
            s = t / n,
            a = i / o; return s > a ? (r.width = i, r.height = i / s) : (r.height = o, r.width = o * s), r.margin = (o - n) / 2 + "px " + (i - t) / 2 + "px", r } var c = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
    n(151); var u = n(113),
        l = [{ value: 1, desc: "轮播", name: "slide" }, { value: 2, desc: "下落", name: "bars" }, { value: 3, desc: "百页窗", name: "blinds" }, { value: 4, desc: "消隐", name: "blocks" }, { value: 5, desc: "渐变", name: "blocks2" }, { value: 9, desc: "梳理", name: "zip" }, { value: 11, desc: "翻转", name: "bars3d" }, { value: 13, desc: "立方体", name: "cube" }, { value: 14, desc: "棋盘", name: "tiles3d" }, { value: 16, desc: "飞出", name: "explode" }],
        p = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return r.intervalObj = {}, $.extend(!0, r.$ability, { style: { self: !0, compStyle: { backgroundColor: !0 } }, anim: !1, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), c(t, [{ key: "updateSize", value: function(e, t) { t.width && t.height && (this.flux.width = t.width, this.flux.height = t.height, this.$context.find(".fluxslider, .images, .image1, .image2").css({ width: t.width, height: t.height })) } }, { key: "create$context", value: function() { var e = this,
                        t = this.compJson,
                        n = t.id,
                        i = t.type,
                        o = t.properties;
                    o = void 0 === o ? {} : o; var r = o.children,
                        s = void 0 === r ? [] : r,
                        c = o.bgColor,
                        u = t.css,
                        l = u.width,
                        p = u.height,
                        h = $('<div id="' + n + '" class="imageSlider element" ctype="' + i + '"></div>').css("background-color", c); if (s.length) { var d = s.map(function(t) { var n = t.width,
                                i = t.height,
                                o = t.src,
                                r = a({ imgW: n, imgH: i, containerW: l, containerH: p }); return o = e.getImgSrc(o, { width: l, height: p }), $('<img src="' + o + '">').css(r) });
                        h.append(d), this.deleteInterval(n), this.initFlux(h) } return h } }, { key: "initFlux", value: function(e) { var t = this,
                        n = this.compJson,
                        i = n.id,
                        o = n.properties,
                        r = o.autoPlay,
                        a = void 0 !== r && r,
                        c = o.interval,
                        u = o.picStyle,
                        l = n.css,
                        p = l.width,
                        h = l.height,
                        d = l.bgColor,
                        f = flux.slider;
                    this.flux = new f(e, { autoplay: a, delay: c, pagination: !1, transitions: [s(u).name], width: p, height: h, bgColor: d, onStartEnd: function(e) { return t.addInterval(i, e) } }) } }, { key: "bindAfterRenderEvent", value: function() { return !1 } }, { key: "addInterval", value: function(e, t) { this.intervalObj[e] = t } }, { key: "deleteInterval", value: function(e) { this.intervalObj[e] && (clearInterval(this.intervalObj[e]), delete this.intervalObj[e]) } }, { key: "clearInterval", value: function() { for (var e in this.intervalObj) this.deleteInterval(e) } }]), t }(u);
    e.exports = p }, function(e, t) {
    "use strict";
    window.flux = { version: "1.4.4" },
        function(e) { flux.slider = function(t, n) { flux.browser.init(), flux.browser.supportsTransitions || window.console && window.console.error && console.error("Flux Slider requires a browser that supports CSS3 transitions"); var i = this;
                this.element = e(t), this.transitions = []; for (var o in flux.transitions) this.transitions.push(o);
                this.options = e.extend({ autoplay: !0, transitions: this.transitions, delay: 4e3, pagination: !0, controls: !1, captions: !1, width: null, height: null, onTransitionEnd: null, onStartEnd: null, bgColor: "" }, n), this.height = this.options.height ? this.options.height : null, this.width = this.options.width ? this.options.width : null; var r = [];
                e(this.options.transitions).each(function(e, t) { var n = new flux.transitions[t](this),
                        i = !0;
                    n.options.requires3d && !flux.browser.supports3d && (i = !1), n.options.compatibilityCheck && (i = n.options.compatibilityCheck()), i && r.push(t) }), this.options.transitions = r, this.images = [], this.imageLoadedCount = 0, this.currentImageIndex = 0, this.nextImageIndex = 1, this.playing = !1, this.container = e('<div class="fluxslider"></div>').appendTo(this.element), this.surface = e('<div class="surface" style="position: relative"></div>').appendTo(this.container), this.container.bind("click", function(t) { e(t.target).hasClass("hasLink") && (window.location = e(t.target).data("href")) }), this.imageContainer = e('<div class="images loading1"></div>').css({ position: "relative", overflow: "hidden" }).appendTo(this.surface), this.width && this.height && this.imageContainer.css({ width: this.width + "px", height: this.height + "px" }), this.image1 = e('<div class="image1" style="height: 100%; width: 100%"></div>').appendTo(this.imageContainer), this.image2 = e('<div class="image2" style="height: 100%; width: 100%"></div>').appendTo(this.imageContainer), e(this.image1).add(this.image2).css({ position: "absolute", top: "0px", left: "0px" }), this.element.find("img, a img").each(function(t, n) { var o = n.cloneNode(!1),
                        r = e(n).parent();
                    r.is("a") && e(o).data("href", r.attr("href")), i.images.push(o), e(n).remove() }); for (var s = 0; s < this.images.length; s++) { var a = new Image;
                    a.onload = function() { i.imageLoadedCount++, i.width = i.width ? i.width : this.width, i.height = i.height ? i.height : this.height, i.imageLoadedCount >= i.images.length && (i.finishedLoading(), i.setupImages()) }, a.src = this.images[s].src } this.element.bind("fluxTransitionEnd", function(e, t) { i.options.onTransitionEnd && (e.preventDefault(), i.options.onTransitionEnd(t)) }), this.transitionEndLock = !1; var c = {},
                    u = {},
                    l = 20;
                this.element.bind("mousedown touchstart", function(e) { "touchstart" === e.type ? c.left = e.originalEvent.touches[0].pageX : "mousedown" === e.type && (c.left = e.pageX) }).bind("mouseup touchend", function(e) { "touchend" === e.type ? u.left = e.originalEvent.changedTouches[0].pageX : "mouseup" === e.type && (u.left = e.pageX), u.left - c.left > l ? i.prev(null, { direction: "right" }) : c.left - u.left > l && i.next(null, { direction: "left" }), i.options.autoplay && (i.stop(), i.start()) }) }, flux.slider.prototype = { constructor: flux.slider, playing: !1, start: function() { var e = this;
                    this.playing = !0, this.transitionEndLock = !1, this.interval = setInterval(function() {!e.transitionEndLock && e.transition() }, this.options.delay), "function" == typeof this.options.onStartEnd && this.options.onStartEnd(this.interval) }, stop: function() { this.playing = !1, clearInterval(this.interval), this.interval = null }, isPlaying: function() { return this.playing }, next: function(e, t) { t = t || {}, t.direction = "left", this.showImage(this.currentImageIndex + 1, e, t) }, prev: function(e, t) { t = t || {}, t.direction = "right", this.showImage(this.currentImageIndex - 1, e, t) }, showImage: function(e, t, n) { this.setNextIndex(e), this.setupImages(), this.transition(t, n) }, finishedLoading: function() { var t = this; if (this.container.css({ width: this.width + "px", height: this.height + "px" }), this.imageContainer.removeClass("loading1"), this.options.pagination && (this.pagination = e('<ul class="pagination"></ul>').css({ margin: "0px", padding: "0px", "text-align": "center" }), this.pagination.bind("click", function(n) { n.preventDefault(), t.showImage(e(n.target).data("index")) }), e(this.images).each(function(n, i) { var o = e('<li data-index="' + n + '">' + (n + 1) + "</li>").css({ display: "inline-block", "margin-left": "0.5em", cursor: "pointer" }).appendTo(t.pagination);
                            0 == n && o.css("margin-left", 0).addClass("current") }), this.container.append(this.pagination)), e(this.imageContainer).css({ width: this.width + "px", height: this.height + "px" }), e(this.image1).css({ width: this.width + "px", height: this.height + "px" }), e(this.image2).css({ width: this.width + "px", height: this.height + "px" }), this.container.css({ width: this.width + "px", height: this.height + (this.options.pagination ? this.pagination.height() : 0) + "px" }), this.options.controls) { var n = { padding: "4px 10px 10px", "font-size": "60px", "font-family": "arial, sans-serif", "line-height": "1em", "font-weight": "bold", color: "#FFF", "text-decoration": "none", background: "rgba(0,0,0,0.5)", position: "absolute", "z-index": 2e3 };
                        this.nextButton = e('<a href="#">»</a>').css(n).css3({ "border-radius": "4px" }).appendTo(this.surface).bind("click", function(e) { e.preventDefault(), t.next() }), this.prevButton = e('<a href="#">«</a>').css(n).css3({ "border-radius": "4px" }).appendTo(this.surface).bind("click", function(e) { e.preventDefault(), t.prev() }); var i = (this.height - this.nextButton.height()) / 2;
                        this.nextButton.css({ top: i + "px", right: "10px" }), this.prevButton.css({ top: i + "px", left: "10px" }) } this.options.captions && (this.captionBar = e('<div class="caption"></div>').css({ background: "rgba(0,0,0,0.6)", color: "#FFF", "font-size": "16px", "font-family": "helvetica, arial, sans-serif", "text-decoration": "none", "font-weight": "bold", padding: "1.5em 1em", opacity: 0, position: "absolute", "z-index": 110, width: "100%", bottom: 0 }).css3({ "transition-property": "opacity", "transition-duration": "800ms", "box-sizing": "border-box" }).prependTo(this.surface)), this.updateCaption() }, setupImages: function() { var t = this.getImage(this.currentImageIndex),
                        n = { background: 'url("' + t.src + '") 50% 50% / contain no-repeat ' + this.options.bgColor, zIndex: 101, cursor: "auto" };
                    e(t).data("href") ? (n.cursor = "pointer", this.image1.addClass("hasLink"), this.image1.data("href", e(t).data("href"))) : (this.image1.removeClass("hasLink"), this.image1.data("href", null)), this.image1.css(n).children().remove(), this.image2.css({ background: 'url("' + this.getImage(this.nextImageIndex).src + '") 50% 50% / contain no-repeat ' + this.options.bgColor, zIndex: 100, display: "none" }), this.options.pagination && this.pagination && (this.pagination.find("li.current").removeClass("current"), e(this.pagination.find("li")[this.currentImageIndex]).addClass("current")) }, transition: function(t, n) { if (void 0 == t || !flux.transitions[t]) { var i = Math.floor(Math.random() * this.options.transitions.length);
                        t = this.options.transitions[i] } var o = null; try { o = new flux.transitions[t](this, e.extend(this.options[t] ? this.options[t] : {}, n)) } catch (r) { var s = flux.transition;
                        o = new s(this, { fallback: !0 }) } o.run(), this.currentImageIndex = this.nextImageIndex, this.setNextIndex(this.currentImageIndex + 1), this.updateCaption() }, updateCaption: function() { var t = e(this.getImage(this.currentImageIndex)).attr("title");
                    this.options.captions && this.captionBar && ("" !== t && this.captionBar.html(t), this.captionBar.css("opacity", "" === t ? 0 : 1)) }, getImage: function(e) { return e %= this.images.length, this.images[e] }, setNextIndex: function(e) { void 0 == e && (e = this.currentImageIndex + 1), this.nextImageIndex = e, this.nextImageIndex > this.images.length - 1 && (this.nextImageIndex = 0), this.nextImageIndex < 0 && (this.nextImageIndex = this.images.length - 1) }, increment: function() { this.currentImageIndex++, this.currentImageIndex > this.images.length - 1 && (this.currentImageIndex = 0) } } }(window.jQuery || window.Zepto),
        function(e) { flux.browser = { init: function() { if (void 0 === flux.browser.supportsTransitions) { var t = ["-webkit", "-moz", "-o", "-ms"]; if (window.Modernizr && void 0 !== window.Modernizr.csstransitions ? flux.browser.supportsTransitions = window.Modernizr.csstransitions : flux.browser.supportsTransitions = this.supportsCSSProperty("Transition"), window.Modernizr && void 0 !== window.Modernizr.csstransforms3d) flux.browser.supports3d = window.Modernizr.csstransforms3d;
                        else if (flux.browser.supports3d = this.supportsCSSProperty("Perspective"), flux.browser.supports3d && "webkitPerspective" in e("body").get(0).style) { var n = e('<div id="csstransform3d"></div>'),
                                i = e('<style media="(transform-3d), (' + t.join("-transform-3d),(") + '-transform-3d)">div#csstransform3d { position: absolute; left: 9px }</style>');
                            e("body").append(n), e("head").append(i), flux.browser.supports3d = 9 == n.get(0).offsetLeft, n.remove(), i.remove() } } }, supportsCSSProperty: function(e) { for (var t = document.createElement("div"), n = ["Webkit", "Moz", "O", "Ms"], i = !1, o = 0; o < n.length; o++) n[o] + e in t.style && (i = i || !0); return i }, translate: function(e, t, n) { return e = void 0 != e ? e : 0, t = void 0 != t ? t : 0, n = void 0 != n ? n : 0, "translate" + (flux.browser.supports3d ? "3d(" : "(") + e + "px," + t + (flux.browser.supports3d ? "px," + n + "px)" : "px)") }, rotateX: function(e) { return flux.browser.rotate("x", e) }, rotateY: function(e) { return flux.browser.rotate("y", e) }, rotateZ: function(e) { return flux.browser.rotate("z", e) }, rotate: function(e, t) { return e in { x: "", y: "", z: "" } || (e = "z"), t = void 0 != t ? t : 0, flux.browser.supports3d ? "rotate3d(" + ("x" == e ? "1" : "0") + ", " + ("y" == e ? "1" : "0") + ", " + ("z" == e ? "1" : "0") + ", " + t + "deg)" : "z" == e ? "rotate(" + t + "deg)" : "" } }, e(function() { flux.browser.init() }) }(window.jQuery || window.Zepto),
        function(e) {
            e.fn.css3 = function(e) { var t = {},
                    n = ["webkit", "moz", "ms", "o"]; for (var i in e) { for (var o = 0; o < n.length; o++) t["-" + n[o] + "-" + i] = e[i];
                    t[i] = e[i] } return this.css(t), this }, e.fn.transitionEnd = function(t) {
                for (var n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd"], i = 0; i < n.length; i++) this.bind(n[i], function(i) { for (var o = 0; o < n.length; o++) e(this).unbind(n[o]);
                    t && t.call(this, i) });
                return this
            }, flux.transition = function(t, n) { if (this.options = e.extend({ requires3d: !1, after: function() {} }, n), this.slider = t, this.options.requires3d && !flux.browser.supports3d || !flux.browser.supportsTransitions || this.options.fallback === !0) { var i = this;
                    this.options.after = void 0, this.options.setup = function() { i.fallbackSetup() }, this.options.execute = function() { i.fallbackExecute() } } }, flux.transition.prototype = { constructor: flux.transition, hasFinished: !1, run: function() { var e = this;
                    void 0 !== this.options.setup && this.options.setup.call(this), this.slider.image1.css({ "background-image": "none" }), this.slider.imageContainer.css("overflow", this.options.requires3d ? "visible" : "hidden"), setTimeout(function() { void 0 !== e.options.execute && e.slider.image1.css("background-color", ""), e.options.execute.call(e), e.slider.options.autoplay && (e.slider.transitionEndLock = !0) }, 5) }, finished: function() { this.hasFinished || (this.hasFinished = !0, this.options.after && this.options.after.call(this), this.slider.imageContainer.css("overflow", "hidden"), this.slider.setupImages(), this.slider.element.trigger("fluxTransitionEnd", { currentImage: this.slider.getImage(this.slider.currentImageIndex) }), this.slider.options.autoplay && (this.slider.transitionEndLock = !1)) }, fallbackSetup: function() {}, fallbackExecute: function() { this.finished() } }, flux.transitions = {}, flux.transition_grid = function(t, n) { var i = flux.transition; return new i(t, e.extend({ columns: 10, rows: 10, forceSquare: !1, setup: function() { var t = this.slider.image1.width(),
                            n = this.slider.image1.height(),
                            i = Math.floor(t / this.options.columns),
                            o = Math.floor(n / this.options.rows);
                        this.options.forceSquare && (o = i, this.options.rows = Math.floor(n / o)); for (var r = t - this.options.columns * i, s = Math.ceil(r / this.options.columns), a = n - this.options.rows * o, c = Math.ceil(a / this.options.rows), u = 0, l = 0, p = document.createDocumentFragment(), h = 0; h < this.options.columns; h++) { var d = i; if (l = 0, r > 0) { var f = r >= s ? s : r;
                                d += f, r -= f } for (var g = 0; g < this.options.rows; g++) { var v = o,
                                    m = a;
                                m > 0 && (f = m >= c ? c : m, v += f, m -= f); var y = e('<div class="tile tile-' + h + "-" + g + '"></div>').css({ width: d + "px", height: v + "px", position: "absolute", top: l + "px", left: u + "px", overflow: "hidden" }).append("<div></div>");
                                this.options.renderTile.call(this, y, h, g, d, v, u, l), p.appendChild(y.get(0)), l += v } u += d } this.slider.image1.get(0).appendChild(p) }, execute: function() { var e = this,
                            t = this.slider.image1.height(),
                            n = this.slider.image1.find("div.barcontainer");
                        this.slider.image2.hide(), n.last().transitionEnd(function(t) { e.slider.image2.show(), e.finished() }), n.css3({ transform: flux.browser.rotateX(-90) + " " + flux.browser.translate(0, t / 2, t / 2) }) }, renderTile: function(e, t, n, i, o, r, s) {} }, n)) }
        }(window.jQuery || window.Zepto),
        function(e) { flux.transitions.bars = function(t, n) { var i = flux.transition_grid; return new i(t, e.extend({ columns: 10, rows: 1, delayBetweenBars: 40, renderTile: function(t, n, i, o, r, s, a) { e(t).children().css({ position: "absolute", top: -a + "px", left: -s + "px", width: this.slider.width + "px ", height: this.slider.height + "px", background: this.slider.image1.css("background") }).parent().css3({ "transition-duration": "400ms", "transition-timing-function": "ease-in", "transition-property": "all", "transition-delay": n * this.options.delayBetweenBars + "ms" }) }, execute: function() { var t = this,
                            n = this.slider.image1.height(),
                            i = this.slider.image1.find("div.tile");
                        e(i[i.length - 1]).transitionEnd(function() { t.finished() }), setTimeout(function() { i.css({ opacity: "0.5" }).css3({ transform: flux.browser.translate(0, n) }) }, 50) } }, n)) } }(window.jQuery || window.Zepto),
        function(e) { flux.transitions.bars3d = function(t, n) { var i = flux.transition_grid; return new i(t, e.extend({ requires3d: !0, columns: 7, rows: 1, delayBetweenBars: 150, perspective: 1e3, renderTile: function(t, n, i, o, r, s, a) { var c = e('<div class="bar-' + n + '"></div>').css({ width: o + "px", height: "100%", position: "absolute", top: "0px", left: "0px", "z-index": 200, overflow: "hidden" }).css3({ "backface-visibility": "hidden" }),
                            u = e("<div></div>").css({ position: "absolute", top: -a + "px", left: -s + "px", width: this.slider.width + "px ", height: this.slider.height + "px", background: this.slider.image1.css("background") }).appendTo(c),
                            l = e(c.get(0).cloneNode(!1)).css3({ transform: flux.browser.rotateX(90) + " " + flux.browser.translate(0, -r / 2, r / 2) });
                        e(u.get(0).cloneNode(!1)).css({ "background-image": this.slider.image2.css("background-image") }).appendTo(l); var p = e('<div class="side bar-' + n + '"></div>').css({ width: r + "px", height: r + "px", position: "absolute", top: "0px", left: "0px", background: "#222", "z-index": 190 }).css3({ transform: flux.browser.rotateY(90) + " " + flux.browser.translate(r / 2, 0, -r / 2) + " " + flux.browser.rotateY(180), "backface-visibility": "hidden" }),
                            h = e(p.get(0).cloneNode(!1)).css3({ transform: flux.browser.rotateY(90) + " " + flux.browser.translate(r / 2, 0, o - r / 2) });
                        e(t).empty().css({ overflow: "visible", width: o + "px", height: "100%", position: "absolute", top: "0px", left: s + "px", "z-index": n > this.options.columns / 2 ? 1e3 - n : 1e3 }).css3({ "transition-duration": "800ms", "transition-timing-function": "linear", "transition-property": "all", "transition-delay": n * this.options.delayBetweenBars + "ms", "transform-style": "preserve-3d" }).append(c).append(l).append(p).append(h) }, execute: function() { this.slider.image1.css3({ perspective: this.options.perspective, "perspective-origin": "50% 50%" }).css({ "-moz-transform": "perspective(" + this.options.perspective + "px)", "-moz-perspective": "none", "-moz-transform-style": "preserve-3d" }); var e = this,
                            t = this.slider.image1.height(),
                            n = this.slider.image1.find("div.tile");
                        this.slider.image2.hide(), n.last().transitionEnd(function(t) { e.slider.image1.css3({ "transform-style": "flat" }), e.slider.image2.show(), e.finished() }), setTimeout(function() { n.css3({ transform: flux.browser.rotateX(-90) + " " + flux.browser.translate(0, t / 2, t / 2) }) }, 50) } }, n)) } }(window.jQuery || window.Zepto),
        function(e) { flux.transitions.blinds = function(t, n) { var i = flux.transitions.bars; return new i(t, e.extend({ execute: function() { var t = this,
                            n = this.slider.image1.find("div.tile");
                        e(n[n.length - 1]).transitionEnd(function() { t.finished() }), setTimeout(function() { n.css({ opacity: "0.5" }).css3({ transform: "scalex(0.0001)" }) }, 50) } }, n)) } }(window.jQuery || window.Zepto),
        function(e) { flux.transitions.zip = function(t, n) { var i = flux.transitions.bars; return new i(t, e.extend({ execute: function() { var t = this,
                            n = this.slider.image1.height(),
                            i = this.slider.image1.find("div.tile");
                        e(i[i.length - 1]).transitionEnd(function() { t.finished() }), setTimeout(function() { i.each(function(t, i) { e(i).css({ opacity: "0.3" }).css3({ transform: flux.browser.translate(0, t % 2 ? "-" + 2 * n : n) }) }) }, 20) } }, n)) } }(window.jQuery || window.Zepto),
        function(e) { flux.transitions.blocks = function(t, n) { var i = flux.transition_grid; return new i(t, e.extend({ forceSquare: !0, delayBetweenBars: 100, renderTile: function(t, n, i, o, r, s, a) { var c = Math.floor(10 * Math.random() * this.options.delayBetweenBars);
                        e(t).children().css({ position: "absolute", top: -a + "px", left: -s + "px", width: this.slider.width + "px ", height: this.slider.height + "px", background: this.slider.image1.css("background") }).parent().css3({ "transition-duration": "350ms", "transition-timing-function": "ease-in", "transition-property": "all", "transition-delay": c + "ms" }), void 0 === this.maxDelay && (this.maxDelay = 0), c > this.maxDelay && (this.maxDelay = c, this.maxDelayTile = t) }, execute: function() { var t = this,
                            n = this.slider.image1.find("div.tile");
                        this.maxDelayTile.transitionEnd(function() { t.finished() }), setTimeout(function() { n.each(function(t, n) { e(n).css({ opacity: "0" }).css3({ transform: "scale(0.8)" }) }) }, 50) } }, n)) } }(window.jQuery || window.Zepto),
        function(e) { flux.transitions.blocks2 = function(t, n) { var i = flux.transition_grid; return new i(t, e.extend({ cols: 12, forceSquare: !0, delayBetweenDiagnols: 150, renderTile: function(t, n, i, o, r, s, a) { e(t).children().css({ position: "absolute", top: -a + "px", left: -s + "px", width: this.slider.width + "px ", height: this.slider.height + "px", background: this.slider.image1.css("background") }).parent().css3({ "transition-duration": "350ms", "transition-timing-function": "ease-in", "transition-property": "all", "transition-delay": (n + i) * this.options.delayBetweenDiagnols + "ms", "backface-visibility": "hidden" }) }, execute: function() { var t = this,
                            n = this.slider.image1.find("div.tile");
                        n.last().transitionEnd(function() { t.finished() }), setTimeout(function() { n.each(function(t, n) { e(n).css({ opacity: "0" }).css3({ transform: "scale(0.8)" }) }) }, 50) } }, n)) } }(window.jQuery || window.Zepto),
        function(e) { flux.transitions.cube = function(t, n) { var i = flux.transition; return new i(t, e.extend({ requires3d: !0, barWidth: 100, direction: "left", perspective: 1e3, setup: function() { var t = this.slider.image1.width(),
                            n = this.slider.image1.height();
                        this.slider.image1.css3({ perspective: this.options.perspective, "perspective-origin": "50% 50%" }), this.cubeContainer = e('<div class="cube"></div>').css({ width: t + "px", height: n + "px", position: "relative" }).css3({ "transition-duration": "800ms", "transition-timing-function": "linear", "transition-property": "all", "transform-style": "preserve-3d" }); var i = { height: "100%", width: "100%", position: "absolute", top: "0px", left: "0px" },
                            o = e('<div class="face current"></div>').css(e.extend(i, { background: this.slider.image1.css("background") })).css3({ "backface-visibility": "hidden" });
                        this.cubeContainer.append(o); var r = e('<div class="face next"></div>').css(e.extend(i, { backgroundImage: this.slider.image2.css("background-image") })).css3({ transform: this.options.transitionStrings.call(this, this.options.direction, "nextFace"), "backface-visibility": "hidden" });
                        this.cubeContainer.append(r), this.slider.image1.append(this.cubeContainer) }, execute: function() { var e = this;
                        this.slider.image2.hide(), this.cubeContainer.transitionEnd(function() { e.slider.image2.show(), e.finished() }), setTimeout(function() { e.cubeContainer.css3({ transform: e.options.transitionStrings.call(e, e.options.direction, "container") }) }, 50) }, transitionStrings: function(e, t) { var n = this.slider.image1.width(),
                            i = this.slider.image1.height(),
                            o = { up: { nextFace: flux.browser.rotateX(-90) + " " + flux.browser.translate(0, i / 2, i / 2), container: flux.browser.rotateX(90) + " " + flux.browser.translate(0, -i / 2, i / 2) }, down: { nextFace: flux.browser.rotateX(90) + " " + flux.browser.translate(0, -i / 2, i / 2), container: flux.browser.rotateX(-90) + " " + flux.browser.translate(0, i / 2, i / 2) }, left: { nextFace: flux.browser.rotateY(90) + " " + flux.browser.translate(n / 2, 0, n / 2), container: flux.browser.rotateY(-90) + " " + flux.browser.translate(-n / 2, 0, n / 2) }, right: { nextFace: flux.browser.rotateY(-90) + " " + flux.browser.translate(-n / 2, 0, n / 2), container: flux.browser.rotateY(90) + " " + flux.browser.translate(n / 2, 0, n / 2) } }; return !(!o[e] || !o[e][t]) && o[e][t] } }, n)) } }(window.jQuery || window.Zepto),
        function(e) { flux.transitions.tiles3d = function(t, n) { var i = flux.transition_grid; return new i(t, e.extend({ requires3d: !0, forceSquare: !0, columns: 5, perspective: 600, delayBetweenBarsX: 200, delayBetweenBarsY: 150, renderTile: function(t, n, i, o, r, s, a) { var c = e("<div></div>").css({ width: o + "px", height: r + "px", position: "absolute", top: "0px", left: "0px", background: this.slider.image1.css("background"), "background-size": this.slider.width + "px " + this.slider.height + "px", "background-position": "-" + s + "px -" + a + "px", "background-repeat": "no-repeat", "-moz-transform": "translateZ(1px)" }).css3({ "backface-visibility": "hidden" }),
                            u = e(c.get(0).cloneNode(!1)).css({ "background-image": this.slider.image2.css("background-image") }).css3({ transform: flux.browser.rotateY(180), "backface-visibility": "hidden" });
                        e(t).empty().css({ overflow: "visible", "z-index": (n > this.options.columns / 2 ? 500 - n : 500) + (i > this.options.rows / 2 ? 500 - i : 500) }).css3({ "transition-duration": "800ms", "transition-timing-function": "ease-out", "transition-property": "all", "transition-delay": n * this.options.delayBetweenBarsX + i * this.options.delayBetweenBarsY + "ms", "transform-style": "preserve-3d" }).append(c).append(u) }, execute: function() { this.slider.image1.css3({ perspective: this.options.perspective, "perspective-origin": "50% 50%" }); var e = this,
                            t = this.slider.image1.find("div.tile");
                        this.slider.image2.hide(), t.last().transitionEnd(function(t) { e.slider.image2.show(), e.finished() }), setTimeout(function() { t.css3({ transform: flux.browser.rotateY(180) }) }, 50) } }, n)) } }(window.jQuery || window.Zepto),
        function(e) { flux.transitions.turn = function(t, n) { var i = flux.transition; return new i(t, e.extend({ requires3d: !0, perspective: 1300, direction: "left", setup: function() { var t = e('<div class="tab"></div>').css({ width: "50%", height: "100%", position: "absolute", top: "0px", left: "left" === this.options.direction ? "50%" : "0%", "z-index": 101 }).css3({ "transform-style": "preserve-3d", "transition-duration": "1000ms", "transition-timing-function": "ease-out", "transition-property": "all", "transform-origin": "left" == this.options.direction ? "left center" : "right center" });
                        e("<div></div>").appendTo(t).css({ background: this.slider.image1.css("background"), "background-size": this.slider.width + "px " + this.slider.height + "px", "background-position": ("left" == this.options.direction ? "-" + this.slider.image1.width() / 2 : 0) + "px 0", width: "100%", height: "100%", position: "absolute", top: "0", left: "0", "-moz-transform": "translateZ(1px)" }).css3({ "backface-visibility": "hidden" }), e("<div></div>").appendTo(t).css({ background: this.slider.image2.css("background"), "background-size": this.slider.width + "px " + this.slider.height + "px", "background-position": ("left" === this.options.direction ? 0 : "-" + this.slider.image1.width() / 2) + "px 0", width: "100%", height: "100%", position: "absolute", top: "0", left: "0" }).css3({ transform: flux.browser.rotateY(180), "backface-visibility": "hidden" }); var n = e("<div></div>").css({ position: "absolute", top: "0", left: "left" === this.options.direction ? "0" : "50%", width: "50%", height: "100%", background: this.slider.image1.css("background"), "background-size": this.slider.width + "px " + this.slider.height + "px", "background-position": ("left" === this.options.direction ? 0 : "-" + this.slider.image1.width() / 2) + "px 0", "z-index": 100 }),
                            i = e('<div class="overlay"></div>').css({ position: "absolute", top: "0", left: "left" === this.options.direction ? "50%" : "0", width: "50%", height: "100%", background: "#000", opacity: 1 }).css3({ "transition-duration": "800ms", "transition-timing-function": "linear", "transition-property": "opacity" }),
                            o = e("<div></div>").css3({ width: "100%", height: "100%" }).css3({ perspective: this.options.perspective, "perspective-origin": "50% 50%" }).append(t).append(n).append(i);
                        this.slider.image1.append(o) }, execute: function() { var e = this;
                        this.slider.image1.find("div.tab").first().transitionEnd(function() { e.finished() }), setTimeout(function() { e.slider.image1.find("div.tab").css3({ transform: flux.browser.rotateY("left" == e.options.direction ? -179 : 179) }), e.slider.image1.find("div.overlay").css({ opacity: 0 }) }, 50) } }, n)) } }(window.jQuery || window.Zepto),
        function(e) { flux.transitions.slide = function(t, n) { var i = flux.transition; return new i(t, e.extend({ direction: "left", setup: function() { var t = this.slider.image1.width(),
                            n = this.slider.image1.height(),
                            i = e('<div class="current"></div>').css({ height: n + "px", width: t + "px", position: "absolute", top: "0px", left: "0px", background: this.slider["left" === this.options.direction ? "image1" : "image2"].css("background") }).css3({ "backface-visibility": "hidden" }),
                            o = e('<div class="next"></div>').css({ height: n + "px", width: t + "px", position: "absolute", top: "0px", left: t + "px", background: this.slider["left" === this.options.direction ? "image2" : "image1"].css("background") }).css3({ "backface-visibility": "hidden" });
                        this.slideContainer = e('<div class="slide"></div>').css({ width: 2 * t + "px", height: n + "px", position: "relative", left: "left" === this.options.direction ? "0px" : -t + "px", "z-index": 101 }).css3({ "transition-duration": "600ms", "transition-timing-function": "ease-in", "transition-property": "all" }), this.slideContainer.append(i).append(o), this.slider.image1.append(this.slideContainer) }, execute: function() { var e = this,
                            t = this.slider.image1.width(); "left" === this.options.direction && (t = -t), this.slideContainer.transitionEnd(function() { e.finished() }), setTimeout(function() { e.slideContainer.css3({ transform: flux.browser.translate(t) }) }, 50) } }, n)) } }(window.jQuery || window.Zepto),
        function(e) { flux.transitions.explode = function(t, n) { var i = flux.transition_grid; return new i(t, e.extend({ columns: 10, forceSquare: !0, delayBetweenBars: 30, perspective: 800, requires3d: !0, renderTile: function(t, n, i, o, r, s, a) { var c = Math.floor(10 * Math.random() * this.options.delayBetweenBars);
                        e(t).children().css({ position: "absolute", top: -a + "px", left: -s + "px", width: this.slider.width + "px ", height: this.slider.height + "px", background: this.slider.image1.css("background") }).parent().css3({ "transition-duration": "500ms", "transition-timing-function": "ease-in", "transition-property": "all", "transition-delay": c + "ms" }), void 0 === this.maxDelay && (this.maxDelay = 0), c > this.maxDelay && (this.maxDelay = c, this.maxDelayTile = t) }, execute: function() { this.slider.image1.css3({ perspective: this.options.perspective, "perspective-origin": "50% 50%" }).css({ "-moz-transform": "perspective(" + this.options.perspective + "px)", "-moz-perspective": "none", "-moz-transform-style": "preserve-3d" }); var t = this,
                            n = this.slider.image1.find("div.tile");
                        this.maxDelayTile.transitionEnd(function() { t.slider.image1.css3({ "transform-style": "flat" }), t.finished() }), setTimeout(function() { n.each(function(t, n) { e(n).css({ opacity: "0" }).css3({ transform: flux.browser.translate(0, 0, 700) + " rotate3d(" + (Math.round(2 * Math.random()) - 1) + ", " + (Math.round(2 * Math.random()) - 1) + ", " + (Math.round(2 * Math.random()) - 1) + ", 90deg) " }) }) }, 50) } }, n)) } }(window.jQuery || window.Zepto)
}, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

    function s(e) { return new Promise(function(t, i) { n.e(9, function() { var o = n(155),
                    r = o[e]; /^<path.*>$/.test(r) ? t(r) : i(e + " does not match <path />") }) }) } var a = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        c = n(38).$getSvg,
        u = n(153),
        l = n(154),
        p = n(113),
        h = "http://www.w3.org/2000/svg",
        d = (n(22).openUrl, function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { lineHeight: !1, color: !1, paddingTop: !1 }, compStyle: { backgroundColor: !0 } } }), r } return r(t, e), a(t, [{ key: "create$context", value: function() { var e = this.compJson;
                    this.$contentsDiv.css({ position: "relative" }); var t = e.id,
                        n = e.properties,
                        i = n.viewBox,
                        o = void 0 === i ? "0 0 64 64" : i,
                        r = n.type,
                        a = void 0 === r ? "" : r,
                        p = n.src,
                        d = n.items,
                        f = e.css.color,
                        g = void 0 === f ? "#555" : f; if (p) { var v = document.createElementNS(h, "svg"); return v.setAttribute("class", "element svg-element"), c(p).then(function(n) { var i = n.getElementsByTagName("svg"),
                                o = i[0].viewBox.baseVal,
                                r = parseFloat($(i).attr("width")) || o.width,
                                s = parseFloat($(i).attr("height")) || o.height,
                                a = $(i).find("[fill], [style*='fill']") || []; if (d)
                                if (a.length == d.length)
                                    for (var c = 0; c < d.length; c++) a.eq(c).css({ fill: d[c].fill });
                                else $.each(a, function(e, t) { for (var n = 0; n < d.length; n++)
                                        for (var i = d[n].elements || [], o = 0; o < i.length; o++) e == i[o] && ("" != d[n].fill ? a.eq(e).css({ fill: d[n].fill }) : a.eq(e).css({ fill: "none" })) });
                            else { var u = [],
                                    l = {};
                                $.each(a, function(e, t) { var n = $(t).attr("style"); if (n) { for (var i = n.split(";") || [], o = 0, r = i.length; o < r; o++)
                                            if (i[o].includes("fill:")) { u.push(i[o].split(":")[1]); break } } else u.push($(t).attr("fill")) }); for (var p = 0; p < u.length; p++) l[u[p]] || (l[u[p]] = 1, "none" != u[p] ? d.push({ fill: u[p], svgFill: u[p] }) : d.push({ fill: "", svgFill: "none" })); for (var h = 0; h < d.length; h++) { var f = [];
                                    $.each(a, function(e, t) { var n, i = $(t).attr("style"); if (i) { for (var o = i.split(";"), r = 0, s = o.length; r < s; r++)
                                                if (o[r].includes("fill:")) { n = o[r].split(":")[1]; break } } else n = $(t).attr("fill");
                                        n == d[h].svgFill && f.push(e) }), d[h].elements = f } e.properties.items = d } var g = "0 0 " + r + " " + s,
                                m = v.parentNode;
                            m.removeChild(v), v = i[0], m.appendChild(v), v.setAttribute("viewBox", g), v.setAttribute("preserveAspectRatio", "none"), v.setAttribute("width", "100%"), v.setAttribute("height", "100%"), v.id = t, v.setAttribute("class", "element svg-element") })["catch"](function() { var e; return (e = console).error.apply(e, arguments) }), $(v) } var m = o.split(" "),
                        y = m[2] || 64,
                        b = m[3] || 64; if (a.includes("symbols")) { var x = $(l.svg({ id: t, viewBox: o }))[0]; return s(a.replace(/^symbols-/, "")).then(function(e) { x.innerHTML = l.g({ id: t, color: g, path: e }) })["catch"](function() { var e;
                            (e = console).error.apply(e, arguments) }), $(x) } var w = a.replace(/-([a-z])/g, function(e, t) { return t.toUpperCase() }); if (u[w]) { var k = $(u[w](y, b)).attr("fill", g); return $(l.svg({ id: t, viewBox: o, content: k[0].outerHTML })) } console.error("shape#" + t + " does not match any!") } }, { key: "updateTurnOver", value: function(e) { this.$boxContentDiv.css("transform", e) } }]), t }(p));
    e.exports = d }, function(e, t) { "use strict";

    function n(e) { return document.createElementNS("http://www.w3.org/2000/svg", e) }

    function i(e) { for (var t = []; e.length >= 2;) t.push(e.shift() + "," + e.shift()); return t.join(" ") }

    function o(e, t) { var i = n("rect"); return i.setAttribute("width", e), i.setAttribute("height", t), i }

    function r(e, t) { var i = n("ellipse"); return i.setAttribute("rx", e / 2), i.setAttribute("ry", t / 2), i.setAttribute("cx", e / 2), i.setAttribute("cy", t / 2), i }

    function s(e, t) { var o = n("polygon"); return o.setAttribute("points", i([e / 2, 0, e, t, 0, t])), o }

    function a(e, t) { var o = n("polygon"); return o.setAttribute("points", i([0, 0, e, 0, e / 2, t])), o }

    function c(e, t) { var o = n("polygon"); return o.setAttribute("points", i([0, t / 2, e, 0, e, t])), o }

    function u(e, t) { var o = n("polygon"); return o.setAttribute("points", i([e, t / 2, 0, t, 0, 0])), o }

    function l(e, t) { var o = n("polygon"); return o.setAttribute("points", i([.5 * e, 0, e, .5 * t, .7 * e, .5 * t, .7 * e, t, .3 * e, t, .3 * e, .5 * t, 0, .5 * t, .5 * e, 0])), o }

    function p(e, t) { var o = n("polygon"); return o.setAttribute("points", i([.5 * e, t, e, .5 * t, .7 * e, .5 * t, .7 * e, 0, .3 * e, 0, .3 * e, .5 * t, 0, .5 * t, .5 * e, t])), o }

    function h(e, t) { var o = n("polygon"); return o.setAttribute("points", i([e, .3 * t, .5 * e, .3 * t, .5 * e, 0, 0, .5 * t, .5 * e, t, .5 * e, .7 * t, e, .7 * t, e, .3 * t])), o }

    function d(e, t) { var o = n("polygon"); return o.setAttribute("points", i([0, .3 * t, .5 * e, .3 * t, .5 * e, 0, e, .5 * t, .5 * e, t, .5 * e, .7 * t, 0, .7 * t])), o }

    function f(e, t, o) { var r = n("polygon"),
            s = []; if (3 === o) s = [e / 2, 0, e, t, 0, t];
        else if (o > 3)
            for (var a = e / 2, c = t / 2, u = 0; o > u; u++) { var l = a + a * Math.cos(2 * Math.PI * u / o),
                    p = c + c * Math.sin(2 * Math.PI * u / o);
                l = Math.round(10 * l) / 10, p = Math.round(10 * p) / 10, s.push(l), s.push(p) }
        return r.setAttribute("points", i(s)), r }

    function g(e, t) { return f(e, t, 4) }

    function v(e, t) { return f(e, t, 8) } e.exports = { rect: o, ellipse: r, circle: r, triangleUp: s, triangleDown: a, triangleLeft: c, triangleRight: u, arrowUp: l, arrowDown: p, arrowLeft: h, arrowRight: d, diamond: g, octagon: v }; var m = n("rect");
    m.attr = m.setAttribute }, function(e, t) { "use strict";

    function n(e) { var t = e.color,
            n = e.id,
            i = e.path; return '<g fill="' + t + '" id="path_' + n + '">' + i + "</g>" }

    function i(e) { var t = e.id,
            n = e.viewBox,
            i = e.content,
            r = void 0 === i ? "" : i; return '\n<svg id="' + t + '" class="element svg-element" xmlns="' + o + '" version="1.1" width="100%"\n     height="100%" preserveAspectRatio="none" viewBox="' + n + '">\n    ' + r + "\n</svg>" } var o = "http://www.w3.org/2000/svg";
    e.exports = { g: n, svg: i } }, , function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function m(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : m(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        c = n(157),
        u = n(113),
        l = n(159),
        p = n(161),
        h = n(41).parse,
        d = n(79).bigDataXBData,
        f = n(23).mobilecheck,
        g = { POP: 0, INLINE: 1 },
        v = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return r.bgm = r.eqxScene.bgm, r.$close = null, r.$video = null, $.extend(!0, r.$ability, { style: { base: { color: !1, lineHeight: !1, paddingTop: !1 }, compStyle: { backgroundColor: !0 } }, trigger: !1, sound: !1, link: !1, flexLine: "r,ne,se,sw,nw" }), r } return r(t, e), s(t, [{ key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.properties.cover,
                        o = e.css,
                        r = o.width,
                        s = o.height; if (i) { i = this.getImgSrc(i, { width: r, height: s }); var a = $(h(l, { id: t, type: n, cover: i })) } else a = $(h(p, { id: t, type: n })); return a.css({ height: s, width: r }), a } }, { key: "addClassToLi", value: function(e) { e.addClass("wsite-video") } }, { key: "eleHide", value: function() { a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "eleHide", this).call(this), this.hide() } }, { key: "update", value: function(e) { switch (e.type) {
                        case "hide":
                            this.hide() } } }, { key: "bindAfterRenderEvent", value: function(e, t) { var n = this,
                        i = t.properties.style; return e.click(function() { switch (n.eqxPage.eqxScene.config.disableBigData || d(window.scene.id, 4, null, 2, "视频播放"), n._isPlayingVideo = !0, n.bgm && n.bgm.hide && n.bgm.hide(), n.eqxScene.soundManager.stopAll(), i) {
                            case g.INLINE:
                                n.initInlineVideo(); break;
                            case g.POP:
                            default:
                                n.initPopVideo() } }), !0 } }, { key: "initInlineVideo", value: function() { var e = this.compJson,
                        t = e.properties.src,
                        n = e.css;
                    t = t.replace(/('|")?allowfullscreen\1(=('|")?\3)?/, ""); var i = this.$iframe = $(t).css({ width: n.width, height: n.height, zIndex: 3, position: "fixed", top: 0 });
                    f() || i.css("position", "absolute"), $(this.context).find("img").css("display", "none"), this.$li.find(".inline-video").append(i) } }, { key: "initPopVideo", value: function() { var e = this,
                        t = this.compJson,
                        n = t.id,
                        i = t.properties.src,
                        o = this.$li;
                    o.hide(); var r = o.parent().css("transform").match(/-?[\d.]+/g) || o.parents(".edit_wrapper").css("transform").match(/-?[\d.]+/g),
                        s = 0;
                    r && (s = -parseInt(r[5])); var a = this.$video = $(c.videoDiv(n));
                    f() || a.css("position", "absolute"); var u = this.$close = $(c.close(n)),
                        l = $(i).css({ position: "absolute", top: "20%", width: "100%", minHeight: "45%", maxHeight: "100%" }).removeAttr("height");
                    a.append(l), o.parent().append(a, u), a.css({ top: s }), u.css({ top: s + 15 }), u.bind("click", function() { e.hide() }) } }, { key: "hide", value: function() { if (this._isPlayingVideo) { this._isPlayingVideo = !1, this.bgm && this.bgm.show && this.bgm.show(), this.eqxScene.soundManager.restoreAll(); var e = this.compJson.properties.style,
                            t = void 0 === e ? 0 : e; switch (t) {
                            case g.INLINE:
                                this.$iframe && (this.$iframe.remove(), this.$iframe = null); break;
                            case g.POP:
                                this.$close && (this.$li.show(), this.$close.unbind("click"), this.$video.remove(), this.$close.remove(), this.$video = null, this.$close = null) } } } }]), t }(u);
    v.STYLE = g, e.exports = v }, function(e, t, n) { "use strict";

    function i(e) { var t = e.id,
            n = e.type; return '<a class="element video_area" id="' + t + '" ctype="' + n + '" style="width:100%;height:100%;"></a>' }

    function o(e) { return '<div class="video_mask page_effect lock" id="mask_' + e + '"></div>' }

    function r(e) { return '<a class="close_mask eqf-wrong" id="close_' + e + '"></a>' } n(158), e.exports = { compDiv: i, videoDiv: o, close: r } }, function(e, t) {}, function(e, t, n) { e.exports = '<div class="inline-video" id="#{id}" ctype="#{type}"><img class="cover" alt="video-cover" src="#{cover}"> <img class="center play" src="' + n(160) + '" alt="video-play-button"></div>' }, function(e, t, n) { e.exports = n.p + "images/play-a830cb.svg" }, function(e, t) { e.exports = '<a class="element video_area" id="#{id}" ctype="#{type}" style="width:100%;height:100%"></a>' }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function d(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : d(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        c = n(113),
        u = n(163),
        l = n(77).getWxJSSDK,
        p = n(23).isWeixin,
        h = (n(115), function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { commonStyle: { self: !1 }, advanceStyle: { self: !1 } }, anim: !1, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), s(t, [{ key: "updateSize", value: function(e, n) { a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateSize", this).call(this, e, n), this.$context.css({ width: n.width, height: n.height }) } }, { key: "create$context", value: function() { var e = this.compJson,
                        t = e.css,
                        n = t.width,
                        i = t.height;
                    this.$source = $('<source type="video/mp4">'); var o = $('<video webkit-playsinline playsinline width="' + n + '" height="' + i + '" poster="' + u + '"></video>'); return o.append(this.$source), o } }, { key: "eleShow", value: function() { a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "eleShow", this).call(this), "1" === this.compJson.autoplay.toString() && this.playVideo() } }, { key: "eleHide", value: function() { a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "eleHide", this).call(this), this.$context[0].pause(), this.$li.hide(), this.interactiveVideoAgent && this.interactiveVideoAgent.end() } }, { key: "playVideo", value: function() { var e = this.interactiveVideoAgent; if (this.compJson.src && this.$source.attr("src")) try { this.$li.show(); var t = this.$context[0];
                        t.currentTime = 0, p() ? this.wxJssdk.then(function() { wx.checkJsApi({ jsApiList: ["checkJsApi"], success: function() { e.play() } }) }) : e.play() } catch (n) { this.$li.hide() } } }, { key: "bindAfterRenderEvent", value: function(e, t) { return t.src && this.$source.attr("src", t.src), this.wxJssdk = l(), this.$boxDiv.css({ borderWidth: 0 }), this.$li.hide(), !0 } }]), t }(c));
    e.exports = h }, function(e, t, n) { e.exports = n.p + "images/play-32e9c9.png" }, function(e, t, n) {
    "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
    var s = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
    n(165);
    var a = n(166).$postDialRecord,
        c = n(167),
        u = n(125).isPhoneNumber,
        l = n(113),
        p = n(79).bigDataXBData,
        h = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { lineHeight: !1 }, compStyle: { backgroundColor: !0 }, compFont: { self: !1, fontFamily: !1 } }, trigger: !1, sound: !1, link: !1 }), r }
            return r(t, e), s(t, [{
                key: "create$context",
                value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.css,
                        o = i.width,
                        r = i.height,
                        s = e.properties,
                        a = s.title,
                        u = s.imgSrc,
                        l = s.number; if (u) { u = this.getImgSrc(u, { width: o, height: r }); var p = "0" } return this.$context = $(c.compDiv({ id: t, title: a, type: n, imgSrc: u, number: l, padding: p })), this.$context }
            }, { key: "updateBtnTitle", value: function(e) { this.compJson.properties.imgSrc || (this.$context[0].innerText = e) } }, { key: "bindAfterRenderEvent", value: function(e, t) { var n = this,
                        i = t.id,
                        o = t.sceneId,
                        r = t.properties.number,
                        s = u(r); return s && e.find("#" + i).attr("href", "tel:" + r).click(function() { n.eqxPage.eqxScene.config.disableBigData || p(window.scene.id, 4, null, 11, "互动电话"), a({ id: o, num: r }) }), s } }]), t
        }(l);
    e.exports = h
}, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e) { return o({ type: "POST", url: r.SERVER_1 + "eqs/dial", data: e }) } var o = n(19).ajax,
        r = n(20);
    e.exports = { $postDialRecord: i } }, function(e, t, n) { "use strict";

    function i(e) { return e.imgSrc ? r(e) : o(e) }

    function o(e) { var t = e.id,
            n = e.number,
            i = e.title,
            o = e.type; return i = i ? i.replace(/ /g, "&nbsp;") : "", c(s, { id: t, number: n, title: i, type: o }) }

    function r(e) { var t = e.id,
            n = e.number,
            i = e.imgSrc,
            o = e.type,
            r = e.padding; return c(a, { id: t, number: n, src: i, type: o, padding: r }) } n(168); var s = n(169),
        a = n(170),
        c = n(41).parse;
    e.exports = { compDiv: i } }, function(e, t) {}, function(e, t) { e.exports = '<a id="#{id}" ctype="#{type}" class="element eqx-tel editable-text" href="tel:#{number}" data-event="1120602" style="cursor: default; width: 100%">#{title}</a>' }, function(e, t) { e.exports = '<a id="#{id}" ctype="#{type}" class="element eqx-tel editable-text" href="tel:#{number}" style="cursor: default; width: 100%;height: 100%;padding: #{padding}"><img style="width: 100%; height: 100%" src="#{src}"></a>' }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
    n(172); var a = n(173),
        c = n(113),
        u = n(41).parse,
        l = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { color: !1, lineHeight: !1, paddingTop: !1 }, compStyle: { backgroundColor: !1 }, compFont: { self: !1, fontFamily: !1 } }, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), s(t, [{ key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.properties,
                        o = i.imgSrc,
                        r = i.title,
                        s = e.css,
                        c = s.height,
                        l = s.width; if (o) { o = this.getImgSrc(o, { width: l, height: c }); var p = "0",
                            h = '<img style="width: 100%; height: 100%;" src="' + o + '">' } return r && (h = r.replace(/ /g, "&nbsp;"), p = "0 8px", o = ""), o || r || (h = ""), $(u(a, { id: t, type: n, content: h, padding: p })) } }, { key: "updateBtnTitle", value: function(e) { this.compJson.properties.imgSrc || (this.$context[0].innerText = e) } }, { key: "deleteImage", value: function() { this.compJson.properties.imgSrc || (this.$context[0].innerText = "") } }]), t }(c);
    e.exports = l }, function(e, t) {}, function(e, t) { e.exports = '<a id="#{id}" ctype="#{type}" class="element eqx-sound editable-text" data-event="1120604" style="cursor: default; width: 100%;height: 100%; padding: #{padding}">#{content}</a>' }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

    function s(e) { var t = e.id,
            n = e.type,
            i = e.layout,
            o = e.size,
            r = e.icon,
            s = e.color,
            a = $(d(h, { layout: i, size: o, id: t, type: n, icon: r })); return a.find("i, span").css("color", s), a } var a = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        c = function v(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : v(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) };
    n(175); var u = n(78).$getPvCount,
        l = n(176).fixedNum,
        p = n(113),
        h = n(177),
        d = n(41).parse,
        f = n(79).bigDataXBData,
        g = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { color: !1, lineHeight: !1, paddingTop: !1 }, compStyle: { backgroundColor: !0 }, compFont: { self: !1, fontFamily: !1 } }, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), a(t, [{ key: "eleShow", value: function() { c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "eleShow", this).call(this), this.getPvCount() } }, { key: "create$context", value: function() { var e = this.compJson;
                    e.properties.color && (e.css.color = e.properties.color, delete e.properties.color); var t = e.id,
                        n = e.type,
                        i = e.properties,
                        o = i.layout,
                        r = i.size,
                        a = i.icon,
                        c = e.css,
                        u = c.lineHeight,
                        l = c.width,
                        p = c.height,
                        h = c.color,
                        d = s({ id: t, type: n, layout: o, size: r, icon: a, css: { width: l, height: p, lineHeight: u, color: h } }); return this.getPvCount(), d } }, { key: "getPvCount", value: function() { var e = this; if ("view" == this.eqxScene.config.mode) return this.eqxPage.eqxScene.config.disableBigData || f(window.scene.id, 4, null, 20, "统计阅读量"), u(this.compJson.sceneId).then(function(e) { return l(e) || 0 }).then(function(t) { e.$li.find(".counter-number").text(t) }) } }, { key: "updateLayout", value: function() { this.$context.remove(), this.$li.css({ height: this.compJson.css.height, lineHeight: this.compJson.css.lineHeight }), this.$context = this.create$context(), this.$contentsDiv.append(this.$context) } }]), t }(p);
    e.exports = g }, function(e, t) {}, function(e, t) { "use strict";

    function n(e) { var t; return e < 1e4 ? t = e : e >= 1e4 && e < 1e8 ? t = (e / 1e4).toFixed(2) + "万" : e >= 1e8 && (t = (e / 1e8).toFixed(2) + "亿"), t }

    function i(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; return Math.floor(Math.random() * e) % e + t } e.exports = { fixedNum: n, random: i } }, function(e, t) { e.exports = '<div class="element comp_counter editable-text #{layout} #{size}" id="#{id}" ctype="#{type}"><div class="counter-container"><i class="counter-elem counter-icon #{icon}"></i><span class="counter-elem counter-number">0</span></div></div>' }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

    function s(e) { var t = e.id,
            n = e.type,
            i = e.pics,
            o = i.map(function(e) { return a(e.path) }).join(""); return $('\n<div id="' + t + '" class="random-event element comp_image editable-image" ctype="' + n + '"\n     style="width: 100%; height: 100%;">\n     ' + o + "\n</div>") }

    function a(e) { return '<img src="' + (l.FILE + e) + '" style="width: 100%; height: 100%; display: none;">' } var c = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
    n(179); var u = n(113),
        l = n(20),
        p = n(116),
        h = n(180),
        d = n(176).random,
        f = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return r.randomIndex = -1, r.busy = !1, $.extend(!0, r.$ability, { style: { base: { lineHeight: !1 }, compStyle: { backgroundColor: !0 } }, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), c(t, [{ key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.properties.pics; return this.randomMax = i.length, s({ id: t, type: n, pics: i }) } }, { key: "addTriggerEvent", value: function() { var e = this.compJson.trigger,
                        t = this.eqxScene.eventManager;
                    e && (e.sends && (this.triggerEventAgent = new p(this, e, t)), e.receives && (this.receiveEventAgent = new h(this, e, t))) } }, { key: "showRandomImg", value: function() { var e = this.$context.find("img");
                    e.css("display", "none"); var t = this.randomIndex; if (1 != this.randomMax) { do t = d(this.randomMax); while (t == this.randomIndex) } else t = 0;
                    $(e[t]).css("display", "block"), this.randomIndex = t } }]), t }(u);
    e.exports = f }, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function h(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : h(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        c = n(120),
        u = n(119).EQX_EVENT,
        l = n(25).noop,
        p = function(e) {
            function t(e, n, r) { return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r)) } return r(t, e), s(t, [{ key: "getHandler", value: function(e) { return e === u.random ? function(e, t) { var i = n(178); if (!(e instanceof i)) { if (_DEBUG_) throw new Error("Expect EqxRandom, Invalid element type: " + e); return l } e.busy || (e.busy = !0, setTimeout(function() { e.showRandomImg(), e.busy = !1 }, t.delay)) } : a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getHandler", this).call(this, e) } }]), t }(c);
    e.exports = p }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function b(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : b(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        c = n(182),
        u = n(113),
        l = n(77).getWeChatUser,
        p = n(79).bigDataXBData,
        h = n(23).isWeixin,
        d = n(76).$getUserWxInfo,
        f = n(77).setWeChatUser,
        g = n(77).hrefToWxAuth,
        v = n(80).popUpModal,
        m = n(22).setUrlHistory,
        y = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return r.commentManager = r.eqxScene.commentManager, r.commentManager && r.commentManager.register(r), $.extend(!0, r.$ability, { style: { base: { backgroundColor: !1, color: !1, opacity: !1, paddingTop: !1, lineHeight: !1 }, border: { self: !1 }, boxShadow: { self: !1 }, advanceStyle: { paddingTop: !1, borderWidth: !1, borderRadius: !1, borderStyle: !1, borderColor: !1, boxShadowSize: !1, boxShadowBlur: !1, boxShadowColor: !1, boxShadowDirection: !1 } }, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), s(t, [{ key: "setProps", value: function(e) { e.style && this.getProp("style") != e.style && this.updateStyle(e.style), "meslabel" in e && this.getProp("mesLabel") != e.meslabel && this.updateMesLabel(e.meslabel), "morelabel" in e && this.getProp("morelabel") != e.morelabel && this.updateMoreLabel(e.morelabel), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setProps", this).call(this, e) } }, { key: "getStyles", value: function() { return n(192) } }, { key: "updateStyle", value: function(e) { this.$boards && this.$boards.removeClass().addClass("boards-" + e) } }, { key: "updateMesLabel", value: function(e) { this.$context.find("a.replay").html(e || "") } }, { key: "updateMoreLabel", value: function(e) { this.$context.find("a.more").html(e || "") } }, { key: "eleShow", value: function() { a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "eleShow", this).call(this), this.$panel.parent().length || (this.$panel.hide(), this.$panel.insertBefore(this.$li.parent().parent())); var e = this.compJson.properties.style; if (this.commentManager) var n = this.commentManager.getComments().slice(0, 5).map(function(e) { return c.record(e) });
                    else n = [];
                    n.length ? (this.$boards.find(".empty-boards").length && this.$boards.find(".empty-boards").remove(), this.$boards.find(".record").remove(), this.$boards.prepend(n)) : this.$boards.append(c.emptyBoards(e)) } }, { key: "eleHide", value: function() { a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "eleHide", this).call(this), this.$boards.find(".record").remove(), this.$boards.find(".empty-boards").remove(), this.$panel.hide() } }, { key: "addClassToLi", value: function(e) { e.addClass("wsite-boards"), e.attr("min-h", 60).attr("min-w", 230) } }, { key: "updateComments", value: function() { this.$boards && this.$panel && this.eleShow() } }, { key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.properties,
                        o = i.meslabel,
                        r = i.morelabel,
                        s = i.style,
                        a = this.$ele = $(c.compDiv({ id: t, type: n, style: s })),
                        u = this.$boards = a.find(".boards-" + s);
                    u.append(c.tool({ meslabel: o || "", morelabel: r || "" })), this.$trigger = u.find(".tool a"); var l = this.$panel = $(c.panel({ style: s })); if (this.$close = l.find(".eqf-wrong"), this.$contentText = l.find(".content-text"), this.$contentTip = l.find(".content-tip"), this.$submit = l.find(".record-btn"), this.$more = l.find(".more-mes"), this.$panelList = l.find(".list"), this.maxLength = this.$contentText.attr("maxLength"), this.eqxScene.config.disableCommentManager) { var p = (new Date).getTime(),
                            h = [1, 2, 3].map(function(e) { return c.record({ content: "赞一个！好多新功能哦~", name: "匿名用户", createTime: p + 1e4 * e, isEditor: !0 }) });
                        u.append(h) } return a } }, { key: "bindAfterRenderEvent", value: function(e, t) {
                    function n() { var e = u.commentManager.getComments().map(function(e) { return c.record(e) });
                        u.$panelList.find(".record").remove(), u.$panelList.prepend(e), u.$panel.show(), y() } var i = this,
                        o = t.sceneId,
                        r = t.pageId,
                        s = l(),
                        a = d,
                        u = this,
                        y = function() { i.commentManager && i.commentManager.loadMoreComments().then(function(e) { var t = e.map(function(e) { return c.record(e) });
                                i.$more.before(t) })["catch"](function() { i.$more.html("没有更多"), i.$more.unbind("click") }) };
                    this.$trigger.on("click", function() { h() && !s.nickname ? a().then(function(e) { e.obj ? (f(e.obj), n()) : (m(r), g()) })["catch"](function() { n() }) : n() }), this.$panel.on("touchstart touchmove touchend mousedown mouseup mousemove", function(e) { e.stopPropagation() }), this.$contentText.on("input", function(e) { var t = e.target.value,
                            n = t.length + t.split("\n").length - 1;
                        i.$contentTip.html(n + "/" + i.maxLength) }); var b = !1; return this.$submit.on("click", function() { if (i.eqxPage.eqxScene.config.disableBigData || p(window.scene.id, 4, null, 26, "留言板留言"), !b) { b = !0, i.$submit.addClass("submit-disabled"); var e = $.trim(i.$contentText.val()) || i.$contentText.attr("placeholder"),
                                t = e.length + e.split("\n").length - 1;
                            t > i.maxLength && (e = e.slice(0, i.maxLength)); var n = { sceneId: o, content: e, url: s.headimgurl || "", name: s.nickname || "匿名用户" };
                            i.commentManager.postComment(n).then(function(e) { v("留言成功，谢谢参与！"), i.$contentText.val(""); var t = c.record(e);
                                i.$panelList.parent().scrollTop(0), i.$panelList.prepend(t), i.$contentTip.html("0/" + i.maxLength) })["catch"](function(e) { v("提交失败，请重新提交") })["finally"](function() { var e = 10,
                                    t = function n() { e ? (i.$submit.text("提交留言(" + e + "秒)"), e--, setTimeout(function() { n() }, 1e3)) : (i.$submit.text("提交留言"), i.$submit.removeClass("submit-disabled"), b = !1) };
                                t() }) } }), this.$close.on("click", function() { i.$panel.hide(), i.eleShow() }), this.$more.on("click", function() { return y() }), !0 } }]), t }(u);
    e.exports = y }, function(e, t, n) { "use strict";

    function i(e) { var t = e.id,
            n = e.type,
            i = e.style,
            o = void 0 === i ? "default" : i; return d(h, { id: t, type: n, style: o }) }

    function o() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
            t = n(186)("./" + e + "_boards.png"); return '<div class="empty-boards"><img style="margin-top:-20px;" src="' + t + '"></div>' }

    function r(e) { var t = e.meslabel,
            n = e.morelabel; return '<div class="tool"><a class="replay">' + t + '</a><a class="more">' + n + "</a></div>" }

    function s(e) { return '<div class="headimg" style="background-image:url(' + e + ')"></div>' }

    function a() { return '<div class="headimg headimg-bg"><em class="eqf-logo2"></em></div>' }

    function c(e) { var t = e.url,
            n = e.name,
            i = e.content,
            o = e.createTime,
            r = t ? s(t) : a(); if ((new Date).getTime() - o < 6e4) var c = "刚刚";
        else c = l(new Date(o), "MM月dd日 hh:mm"); return '\n<div class="record">\n    ' + r + '\n    <div class="name ellipsis">' + n + '</div>\n    <div class="mes">' + i + '</div>\n    <div class="time">' + c + "</div>\n</div>" }

    function u(e) { var t = e.style,
            n = void 0 === t ? "default" : t; return d(p, { style: n }) } n(183); var l = n(40).dateFormat,
        p = n(184),
        h = n(185),
        d = n(41).parse;
    e.exports = { compDiv: i, emptyBoards: o, tool: r, headImgUser: s, headImgEqxView: a, record: c, panel: u } }, function(e, t) {}, function(e, t) { e.exports = '<div class="boards-panel boards-#{style}"><div class="boards-top"><div class="head">留言板<em class="eqf-wrong"></em></div><div class="boards-form"><textarea placeholder="踩一下！" maxlength="140" class="content-text"></textarea><span class="content-tip">0/140</span> <a class="record-btn" data-event="11207">提交留言</a></div><div class="spline-con"><span>更多留言</span> <span class="spline"></span></div></div><div class="boards-con ios-boards-con"><div class="list"><div class="more-mes">查看更多</div></div></div></div>' }, function(e, t) { e.exports = '<div class="element-box-contents eqx-comp-comment" style="width: 100%; height: 100%"><div id="#{id}" class="element boards-#{style}" ctype="#{type}"></div></div>' }, function(e, t, n) {
    function i(e) { return n(o(e)) }

    function o(e) { return r[e] || function() { throw new Error("Cannot find module '" + e + "'.") }() } var r = { "./black_boards.png": 187, "./blue_boards.png": 188, "./default_boards.png": 189, "./pink_boards.png": 190, "./yellow_boards.png": 191 };
    i.keys = function() { return Object.keys(r) }, i.resolve = o, e.exports = i, i.id = 186 }, function(e, t, n) { e.exports = n.p + "images/black_boards-ba4922.png" }, function(e, t, n) { e.exports = n.p + "images/blue_boards-f58067.png" }, function(e, t, n) { e.exports = n.p + "images/default_boards-f58067.png" }, function(e, t, n) { e.exports = n.p + "images/pink_boards-a2ae42.png" }, function(e, t, n) { e.exports = n.p + "images/yellow_boards-f58067.png" }, function(e, t) { "use strict";
    e.exports = [{ name: "默认", value: "default" }, { name: "简约黑", value: "black" }, { name: "少女粉", value: "pink" }, { name: "邮票风", value: "blue" }, { name: "便签风", value: "yellow" }] }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function m(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : m(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) };
    n(175); var c = n(194).$postCount,
        u = n(176).fixedNum,
        l = n(195),
        p = n(113),
        h = n(23).isWeixin,
        d = n(197),
        f = n(79).bigDataXBData,
        g = n(80).popUpModal,
        v = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { color: !1, lineHeight: !1, paddingTop: !1 }, compStyle: { backgroundColor: !0 } }, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), s(t, [{ key: "updateSize", value: function(e, n) { n.height && (n.lineHeight = n.height + "px", this.$context.css({ lineHeight: n.lineHeight })), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateSize", this).call(this, e, n) } }, { key: "bindAfterRenderEvent", value: function(e) { var t = this,
                        n = this.compJson,
                        i = n.id,
                        o = n.sceneId,
                        r = n.pageId,
                        s = this.$context;
                    this.eqxScene.statManager.getCounterValues().then(function(e) { var t = e[i] || 0;
                        s.find(".counter-number").attr("data-counter-number", t).html(u(t)) }); var a = this.$li.find(".comp_counter"),
                        l = a.find(".counter-number"),
                        p = "rating-l"; return a.click(function() { if (!t.eqxPage.eqxScene.config.disableBigData && t.compJson.properties) { var n, s, v = t.compJson.properties.icon; switch (v) {
                                case "eqf-love":
                                    n = 15, s = "互动计数喜欢"; break;
                                case "eqf-good":
                                    n = 16, s = "互动计数顶起"; break;
                                case "eqf-flower2":
                                    n = 17, s = "互动计数送花"; break;
                                case "eqf-vote":
                                    n = 18, s = "互动计数投票"; break;
                                default:
                                    n = 19, s = "互动计数自定义" } f(window.scene.id, 4, null, n, s) } t.compJson.properties && t.compJson.properties.clickFarmer ? h() ? c({ sceneId: o, elementId: i, pageId: r }).then(function() { a.unbind("click").removeClass("not-voted"); var e = Number.parseInt(l.attr("data-counter-number")) || 0,
                                t = e + 1;
                            l.attr("data-counter-number", t).text(u(t)) })["catch"](function(t) { 120504 === t.code ? d.modal(e, p, !1, null, "请到微信中打开使用") : 120505 === t.code || 120603 === t.code ? d.modal(e, p, !1, null, "请不要重复提交") : g("服务器异常!") }) : d.modal(e, p, !1, null, "请到微信中打开使用") : c({ sceneId: o, elementId: i, pageId: r }).then(function() { a.unbind("click").removeClass("not-voted"); var e = Number.parseInt(l.attr("data-counter-number")) || 0,
                                t = e + 1;
                            l.attr("data-counter-number", t).text(u(t)) })["catch"](function(t) { 120603 === t.code ? d.modal(e, p, !1, null, "请不要重复提交") : g("服务器异常!") }) }), !0 } }, { key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.properties,
                        o = i.layout,
                        r = i.imgSrc,
                        s = i.color,
                        a = i.icon,
                        c = i.size,
                        u = e.css.textAlign,
                        p = l.$compDiv({ id: t, layout: o, size: c, type: n, icon: a, color: s, imgSrc: r }); return "center" === u && p.find("img").css("margin", "0 auto"), p } }, { key: "update$img", value: function(e) { this.$context.find("img").attr("src", e) } }, { key: "iconToImg", value: function(e) { this.$context.find("i").remove().prepend(l.img(e)) } }, { key: "updateLayout", value: function() { this.$context.remove(), this.$li.css({ height: this.compJson.css.height, lineHeight: this.compJson.css.lineHeight }), this.$context = this.create$context(), this.$contentsDiv.append(this.$context) } }, { key: "update$iconColor", value: function(e) { this.$context.find(".counter-container").css({ color: e }) } }]), t }(p);
    e.exports = v }, function(e, t, n) { "use strict";

    function i(e) { return r({ type: "POST", url: s.SERVER_1 + "eqs/scene/count", data: e }) }

    function o(e) { return r({ type: "GET", url: s.SERVER_1 + "eqs/scene/counter/values", data: e }) } var r = n(19).ajax,
        s = n(20);
    e.exports = { $postCount: i, $getCountValues: o } }, function(e, t, n) { "use strict";

    function i(e) { var t = e.id,
            n = e.layout,
            i = e.size,
            a = e.type,
            l = e.icon,
            p = e.color,
            h = e.imgSrc,
            d = h ? r(h) : o(l),
            f = h ? 1120609 : s(l),
            g = $(u(c, { layout: n, size: i, id: t, type: a, i: d, dataEvent: f })); return g.find(".counter-container").css({ color: p }), g }

    function o(e) { return '<i class="counter-elem counter-icon ' + e + '" ></i>' }

    function r(e) { var t = a.FILE + e; return '<img class="counter-elem counter-icon"\n             style="width: 115px; height: 115px;" src="' + t + '">' }

    function s(e) { var t = { "eqf-love": 1120605, "eqf-good": 1120606, "eqf-flower2": 1120607, "eqf-vote": 1120608 }; return t[e] } var a = n(20),
        c = n(196),
        u = n(41).parse;
    e.exports = { $compDiv: i } }, function(e, t) { e.exports = '<div class="element comp_counter not-voted editable-text #{layout} #{size}" id="#{id}" ctype="#{type}" name="eq[f_#{id}]"><div class="counter-container" data-event="#{dataEvent}" style="white-space: nowrap">#{i} <span class="counter-elem counter-number" data-counter-number="0">0</span></div></div>' }, function(e, t, n) { "use strict";

    function i(e) { var t = e.id,
            n = e.type,
            i = e.src,
            o = (e.css, e.padding),
            r = '<button style="display: block;width: 100%;height: 100%; padding: ' + o + ';" data-event="11201"\n                        id="' + t + '" ctype="' + n + '" class="element comp_button editable-text" >\n                    <img style="width: 100%; height: 100%;" src="' + i + '">\n                </button>'; return $(r) }

    function o(e) { var t = e.id,
            n = e.type,
            i = e.title,
            o = (e.css, i.replace(/ /g, "&nbsp;")),
            r = '<button style="display: block;width: 100%;height: 100%;" \n                        id="' + t + '" ctype="' + n + '" data-event="11201"\n                        class="element comp_button editable-text" >' + o + "</button>"; return $(r) }

    function r(e) { var t = e.layout,
            n = e.hasLink,
            i = e.src,
            o = e.text,
            r = e.link,
            s = $('<div class="feedback-content"><span>' + o + "</span></div>"),
            a = $('<div class="feedback-btn"></div>'); return i && ("rating-m" === t ? s.prepend('<img class="up" src="' + i + '"/>') : "rating-s" === t ? s.append('<img class="down" src="' + i + '"/>') : "rating-l" === t && s.prepend('<img class="up ico" src="' + i + '"/>')), n ? a.append('<a class="feedback-close left">关闭</a><a class="right" href="' + r + '">查看详情</a>').addClass("line") : a.append('<a class="feedback-close">关闭</a>'), $('<div class="feedback-box">').append($('<div class="feedback-form">').append(s, a)) }

    function s(e, t, n, i, o, s) { var a = r({ layout: t, hasLink: n, src: i, text: o, link: s }).insertBefore($(e).parent().parent()),
            c = a.find(".feedback-form"),
            u = a.find(".feedback-close"),
            l = -Number.parseInt(c.height() + 80) / 2;
        c.css({ marginTop: l + "px" }), u.on("click", function() { a.animate({ opacity: 0 }, { duration: 300, complete: function(e) { return a.remove() } }) }) } n(198), e.exports = { $img: i, $btn: o, modal: s } }, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(200),
        c = n(201).formatTime,
        u = n(202).getServiceTime,
        l = function(e) {
            function t(e, n) { return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)) } return r(t, e), s(t, [{ key: "renderTime", value: function(e, n, i, o) { var r = this,
                        s = (new Date).getTime(),
                        a = this.compJson.properties,
                        l = a.endTime,
                        p = a.arriveTips,
                        h = a.arriveTipsContent;
                    u().then(function(e) { return s = e.obj }, function() { return s = (new Date).getTime() }).then(function(s) { var a = setInterval(function() { s += 1e3, r.$li || clearInterval(a), s >= l ? (p ? e.html(h || t.defaultArriveTipsContent) : e.html(c(s, s, n, i, o)), clearInterval(a)) : e.html(c(l, s, n, i, o)) }, 1e3) }) } }]), t }(a);
    l.defaultArriveTipsContent = "开始啦!", e.exports = l }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(113),
        c = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { lineHeight: !1, paddingTop: !1 }, compStyle: { backgroundColor: !0 }, compFont: { self: !1, fontFamily: !1 } }, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), s(t, [{ key: "create$context", value: function() { var e = document.createElement("div"); return e.id = this.compJson.id, e.setAttribute("ctype", this.compJson.type), e.setAttribute("class", "element comp_paragraph editable-text"), this.renderTime($(e), this.compJson.properties.order, this.compJson.properties.split, this.compJson.properties.mode), $(e) } }, { key: "renderTime", value: function(e, t) { return null } }]), t }(a);
    e.exports = c }, function(e, t) { "use strict";

    function n(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "cn",
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [1, 1, 1, 1],
            a = e - t,
            c = Math.floor(a / 864e5),
            u = a % 864e5,
            l = Math.floor(u / 36e5),
            p = u % 36e5,
            h = Math.floor(p / 6e4),
            d = p % 6e4,
            f = Math.round(d / 1e3),
            g = o(s, 4),
            v = g[0],
            m = g[1],
            y = g[2],
            b = g[3]; switch (v || m || y || b || (v = 1, m = 1, y = 1, b = 1), !v || m || y || b ? v || !m || y || b ? v && !m && y && !b && (h = h || 1) : l = l || 1 : c = c || 1, l = v ? l : l + 24 * c, h = m ? h : h + 60 * l, f = y ? f : f + 60 * h, r) {
            case "cn":
                return n ? (v ? i(c) + "天" : "") + (m ? i(l) + "小时" : "") + (y ? i(h) + "分钟" : "") + (b ? i(f) + "秒" : "") : (b ? i(f) + "秒" : "") + (y ? i(h) + "分钟" : "") + (m ? i(l) + "小时" : "") + (v ? i(c) + "天" : "");
            case "en":
                return n ? (v ? i(c) + " days, " : "") + (m ? i(l) + " hours, " : "") + (y ? i(h) + " minutes, " : "") + (b ? i(f) + " seconds" : "") : (b ? i(f) + " seconds, " : "") + (y ? i(h) + " minutes, " : "") + (m ? i(l) + " hours, " : "") + (v ? i(c) + " days" : "");
            case "char":
                return n ? (v ? i(c) + "天 " : "") + (m ? i(l) : "") + (m && y ? ":" : "") + (y ? i(h) : "") + ((m || y) && b ? ":" : "") + (b ? i(f) : "") : (b ? i(f) : "") + (b && y ? ":" : "") + (y ? i(h) : "") + ((b || y) && m ? ":" : "") + (m ? i(l) : "") + (v ? " " + i(c) + "天" : "") } }

    function i(e) { return e = e.toString(), e.length < 2 ? "0" + e : e } var o = function() {
        function e(e, t) { var n = [],
                i = !0,
                o = !1,
                r = void 0; try { for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0); } catch (c) { o = !0, r = c } finally { try {!i && a["return"] && a["return"]() } finally { if (o) throw r } } return n } return function(t, n) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }();
    e.exports = { formatTime: n } }, function(e, t, n) { "use strict";

    function i() { var e = new Date,
            t = "eqs/serviceTime/get?time" + e.getTime(); return o({ type: "GET", url: r.SERVER_1 + t }) } var o = n(19).ajax,
        r = n(20);
    e.exports = { getServiceTime: i } }, function(e, t, n) {
    "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(200),
        c = n(201).formatTime,
        u = n(202).getServiceTime,
        l = function(e) {
            function t(e, n) { return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)) } return r(t, e), s(t, [{ key: "renderTime", value: function(e, n, i, o) { var r = this,
                        s = (new Date).getTime(),
                        a = this.compJson.properties,
                        l = a.startTime,
                        p = a.arriveTips,
                        h = a.arriveTipsContent;
                    u().then(function(e) { return s = e.obj }, function() { return s = (new Date).getTime() }).then(function(s) { var a = setInterval(function() { s += 1e3, r.$li || clearInterval(a), s <= l ? p ? e.html(h || t.defaultArriveTipsContent) : e.html(c(s, s, n, i, o)) : e.html(c(s, l, n, i, o)) }, 1e3) }) } }]), t }(a);
    l.defaultArriveTipsContent = "还没开始!", e.exports = l
}, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function f(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : f(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        c = n(113),
        u = n(205),
        l = n(20),
        p = n(22).url2https,
        h = p(l.YQC),
        d = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return r.iframePromise = null, r.iframe = null, $.extend(!0, r.$ability, { style: { base: { backgroundColor: !1, color: !1, opacity: !1, paddingTop: !1, lineHeight: !1 }, compStyle: { self: !0 }, border: { self: !1 }, boxShadow: { self: !1 }, advanceStyle: { paddingTop: !1, borderWidth: !1, borderRadius: !1, borderStyle: !1, borderColor: !1, boxShadowSize: !1, boxShadowBlur: !1, boxShadowColor: !1, boxShadowDirection: !1 } }, anim: !1, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), s(t, [{ key: "eleShow", value: function() { var e = this;
                    a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "eleShow", this).call(this); var n = this.eqxPage,
                        i = this.eqxPage.eqxScene,
                        o = i.meta.id,
                        r = n.pageJson.num;
                    this.iframePromise.then(function() { e.iframe && e.iframe.contentWindow.postMessage({ sceneId: o, pageNum: r, eventType: "pageShow" }, h) }) } }, { key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.content,
                        o = e.css,
                        r = o.width,
                        s = o.height,
                        a = this.eqxPage,
                        c = this.eqxPage.eqxScene,
                        l = c.meta.id,
                        p = a.pageJson.num,
                        d = $(u.compDiv({ id: t, type: n })),
                        f = $(u.iframeDiv({ sceneId: l, pageNum: p, content: i, width: r, height: s })),
                        g = this.iframe = f.get(0); return this.iframePromise = new Promise(function(e) { g.onload = function() { i && g.contentWindow.postMessage({ sceneId: l, pageNum: p, eventType: "adCode", content: i }, h), e() } }), d.append(f), this.$li.css("zIndex", 999), d } }]), t }(c);
    e.exports = d }, function(e, t, n) { "use strict";

    function i(e) { var t = e.id,
            n = e.type; return '<div style="width: 100%; height: 100%" class="element" id="' + t + '" ctype="' + n + '"></div>' }

    function o(e) { var t = e.sceneId,
            n = e.pageNum,
            i = e.content,
            o = e.width,
            a = e.height,
            c = ""; return c = "tpl" === i ? "tpl" : "true", '<iframe width="100%" height="100%" scrolling="no" frameborder="0" src="' + s(r.YQC) + "yqc/gg/gg.html?sceneId=" + t + "&pageNum=" + n + "&content=" + c + "&width=" + o + "&height=" + a + '"></iframe>' } var r = n(20),
        s = n(22).url2https;
    e.exports = { compDiv: i, iframeDiv: o } }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var o = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        r = n(67).BG_CROP_TYPE,
        s = n(23).mobilecheck,
        a = n(207),
        c = n(208),
        u = n(209),
        l = n(41).parse,
        p = n(90).qiniuZoom,
        h = n(90).loadImg,
        d = n(70).ANIMATION_TYPE;
    n(71); var f = function() {
        function e(t, n) { i(this, e), this.compJson = t, this.eqxPage = n, this.eqxScene = n.eqxScene } return o(e, [{ key: "updateBgHeight", value: function(e) { this.$bgEle.css({ height: e }) } }, { key: "updateBgOpacity", value: function(e) { this.$bgEle && this.$bgEle.css({ opacity: e }) } }, { key: "create$bg", value: function(e, t, n) { var i = this;
                this.$container = e; var o = this.compJson,
                    d = o.id,
                    f = o.css.opacity,
                    g = o.properties,
                    v = g.bgColor,
                    m = g.croptype,
                    y = g.imgSrc,
                    b = g.pageLength,
                    x = "100%"; if (v || y || (v = "rgba(0,0,0,0)"), v) { b && (x = (b < 10 ? 486 * b : b) - 486 + (s() ? $(document).height() : 486) + "px"); var w = $(l(c, { id: d, bgColor: v, height: x }));
                    this.$bgEle = w, this.animate(), this.updateBgOpacity(f), this.$container.prepend(w), !s() && this.updateBgHeight(this.eqxPage.getPageHeight()) } if (y) { var k = y; if (m === r["全屏背景模式"] ? (x = (b < 10 ? 486 * b : b) - 486 + (s() ? $(document).height() : 486) + "px", k = p(k, 320, x)) : (x = s() ? "100%" : "486px", k = p(k, 320, 486)), /\.gif/.test(y)) var P = h(k).then(function(e) { var o, a = {}; if (t = s() ? document.documentElement.clientWidth || document.body.clientWidth : t || i.eqxPage.getPageWidth(), n = s() ? document.documentElement.clientHeight || document.body.clientHeight : n || i.eqxPage.getPageHeight(), m === r["全屏背景模式"]) { var c = parseInt(x);
                            e.width / e.height >= t / c ? (a.width = e.width * (c / e.height), a.height = c, a.marginLeft = -(a.width - t) / 2) : (a.width = t, a.height = e.height * (t / e.width), a.marginTop = -(a.height - c) / 2) } else e.width / e.height >= t / n ? (a.width = e.width * (n / e.height), a.height = n, a.marginLeft = -(a.width - t) / 2) : (a.width = t, a.height = e.height * (t / e.width), a.marginTop = -(a.height - n) / 2); return o = $(l(u, { id: d, src: k, height: x })), o.css(a), o });
                    else P = Promise.resolve($(l(a, { id: d, src: k, height: x })));
                    P.then(function(e) { i.$bgEle = e, i.animate(), i.updateBgOpacity(f), i.$container.prepend(i.$bgEle), !/\.gif/.test(y) && !s() && i.updateBgHeight(i.eqxPage.getPageHeight()) }) } } }, { key: "eleShow", value: function() { var e = this.compJson.properties.imgSrc; if (e && /.gif/.test(e) && this.$bgEle) { var t = this.$bgEle.find("img")[0],
                        n = t.src;
                    setTimeout(function() { t.src = n }, 200) } } }, { key: "animate", value: function() { var e = this.compJson.effect;
                e = void 0 === e ? {} : e; var t = e.type; if (this.$bgEle && (t || 0 == t) && t != -1) { var n = this.$bgEle.find(".eqx-bg");
                    n.css({ animation: "none" }), setTimeout(function() { if ("scaleUp" === t) n.css({ animation: "scaleUp 7s ease 1s", "animation-fill-mode": "both" });
                        else if ("scaleDown" === t) n.css({ animation: "scaleDown 7s ease 1s", "animation-fill-mode": "both" });
                        else { var e = d[t];
                            n.css({ "animation-name": "", "animation-duration": "", "animation-timing-function": "", "animation-delay": "", "animation-iteration-count": "" }), n.css({ "animation-name": e[0], "animation-duration": "1s", "animation-timing-function": "liner", "animation-delay": "1s", "animation-iteration-count": 1, "animation-direction": "both", "animation-fill-mode": "both", "animation-play-state": "initial" }) } }, 0) } } }, { key: "delete$bg", value: function() { this.$bgEle && this.$bgEle.remove() } }, { key: "update$bg", value: function() {} }]), e }();
    e.exports = f }, function(e, t) { e.exports = '<div style="width: 100%; height: #{height}; overflow: hidden; position: absolute;z-index: -1"><div id="wrapper-background#{id}" class="eqx-bg eqx-bg-img" style="width: 100%; height: #{height};\n         background-image: url(\'#{src}\');\n         background-size: cover; background-position: 50% 50%;\n         background-origin: content-box"></div></div>' }, function(e, t) { e.exports = '<div style="width: 100%; height: #{height}; overflow: hidden;position: absolute;z-index: -1"><div id="wrapper-background#{id}" class="eqx-bg" style="width: 100%; height: #{height}; background-color: #{bgColor}"></div></div>' }, function(e, t) { e.exports = '<div style="width: 100%; height: #{height}; overflow: hidden; position: absolute;z-index: -1"><img id="wrapper-background#{id}" src="#{src}" style="z-index: -1; width: 100%; position: absolute"></div>' }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(113),
        c = n(211),
        u = n(41).parse,
        l = n(212),
        p = n(23).isWeixin,
        h = n(76).$getUserWxInfo,
        d = n(77).hrefToWxAuth,
        f = n(77).setWeChatUser,
        g = n(213).$unifiedOrder,
        v = n(18).wxPay,
        m = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { lineHeight: !1, opacity: !0 }, compStyle: { backgroundColor: !0 }, compFont: { self: !1, fontFamily: !1 } }, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), s(t, [{ key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.properties,
                        o = i.title,
                        r = void 0 === o ? "打赏" : o,
                        s = i.amount,
                        a = void 0 === s ? "2" : s; return $(u(c, { id: t, type: n, title: r, amount: a })) } }, { key: "updateCompTitle", value: function() { var e = this.compJson.properties;
                    this.$context.html(e.title + e.amount + "元") } }, { key: "bindAfterRenderEvent", value: function() { var e = this;
                    this.$li.click(function() { return p() ? void h().then(function(e) { return e.obj ? (f(e.obj), e.obj) : (d(), Promise.reject({})) }).then(function(t) { var n = parseFloat(e.compJson.properties.amount),
                                i = e.compJson.sceneId,
                                o = t.openid; return g(100 * n, o, i).then(function(e) { e.obj && v(e.obj) }) })["catch"](function(t) { t.msg && l.modal(t.msg, e.$li) }) : void l.modal("该组件仅能在微信中使用。", e.$li) }) } }]), t }(a);
    e.exports = m }, function(e, t) { e.exports = '<a id="#{id}" ctype="#{type}" class="element comp-reward" style="cursor: pointer;width: 100%;height: 100%;display: block">#{title}#{amount}元</a>' }, function(e, t) { "use strict";

    function n(e, t) { var n = $('<div class="feedback-box">\n                      <div class="feedback-form">\n                        <div class="feedback-content">' + e + '</div>\n                        <div class="feedback-btn">\n                          <a class="feedback-close">关闭</a>\n                        </div>\n                      </div>\n                    </div>'),
            i = n.find(".feedback-form");
        i.css("margin-top", -Number.parseInt(i.height() + 80) / 2), n.insertBefore(t.parent().parent()), n.find(".feedback-close").on("click", function() { n.animate({ opacity: 0 }, { duration: 300, complete: function(e) { return n.remove() } }) }) } e.exports = { modal: n } }, function(e, t, n) { "use strict";

    function i(e, t, n) { return s({ type: "POST", url: r.SERVER_1 + "eqs/wx/unifiedorder", data: { money: e, openid: t, sceneId: n } }) }

    function o(e) { return s({ type: "POST", url: r.SERVER_1 + "eqs/wx/get-jsapiconfig", data: { prepayId: e } }) } var r = n(20),
        s = n(19).ajax;
    e.exports = { $unifiedOrder: i, $getJsApiConfig: o } }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(113),
        c = n(215),
        u = n(41).parse,
        l = n(23).isWeixin,
        p = n(216),
        h = n(217).$robRedPacket,
        d = n(76).$getUserWxInfo,
        f = n(77).hrefToWxAuth,
        g = n(77).setWeChatUser,
        v = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { lineHeight: !1 }, compStyle: { backgroundColor: !1 }, compFont: { self: !1, fontFamily: !1 } }, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), s(t, [{ key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.properties.title; return this.$context = $(u(c, { id: t, type: n, title: i })), this.$context } }, { key: "bindAfterRenderEvent", value: function() { var e = this;
                    this.$li.click(function() { return l() ? void d().then(function(e) { return e.obj ? (g(e.obj), e.obj) : (f(), Promise.reject()) }).then(function(t) { return h(e.eqxScene.meta.id, e.compJson.id, t.openid) }).then(function(t) { 200 === t.code && p.modal("恭喜您成功抢到一个红包，请去服务通知下领取红包！", e.$li) })["catch"](function(t) { t.msg && p.modal(t.msg, e.$li) }) : void p.modal("该组件仅能在微信中使用。", e.$li) }) } }]), t }(a);
    e.exports = v }, function(e, t) { e.exports = '<a id="#{id}" ctype="#{type}" class="element eqx-red-packet" style="cursor: default;width: 100%;height: 100%">#{title}</a>' }, function(e, t) { "use strict";

    function n(e, t) { var n = $('<div class="feedback-box">\n                      <div class="feedback-form">\n                        <div class="feedback-content">' + e + '</div>\n                        <div class="feedback-btn">\n                          <a class="feedback-close">关闭</a>\n                        </div>\n                      </div>\n                    </div>'),
            i = n.find(".feedback-form");
        i.css("margin-top", -Number.parseInt(i.height() + 80) / 2), n.insertBefore(t.parent().parent()), n.find(".feedback-close").on("click", function() { n.animate({ opacity: 0 }, { duration: 300, complete: function(e) { return n.remove() } }) }) } e.exports = { modal: n } }, function(e, t, n) { "use strict";

    function i(e, t, n) { return r({ type: "GET", url: o.SERVER_1 + "eqs/wx/robRedPacket", data: { sceneId: e, componentId: t, openid: n } }) } var o = n(20),
        r = n(19).ajax;
    e.exports = { $robRedPacket: i } }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

    function s(e, t, n, i, o) { return "url('" + l.FONT + "fonts/91437214_1500346020000/"  + n + "." + i + "') format('" + o + "')" }

    function a(e) { var t = e.fontFamily,
            n = e.sceneId,
            i = e.publishTime; if (t && !b[t]) { var o = [s(n, i, t, "woff", "woff"), s(n, i, t, "ttf", "truetype")].join(", "),
                r = "@font-face{font-family: '" + t + "'; src: " + o + ";}";
            h(r), b[t] = !0 } }

    function c(e) { var t = e.id,
            n = e.type,
            i = e.css,
            o = e.content,
            r = void 0 === o ? "" : o; return i.cursor = "default", i.fontSize && (i.fontSize = d(i.fontSize)), i.minHeight = "inherit", $(v(f, { id: t, type: n, content: r })).css(i) } var u = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
    n(219); var l = n(20),
        p = n(146),
        h = p.addGlobalStyle,
        d = p.addSuffixPx,
        f = n(220),
        g = n(113),
        v = n(41).parse,
        m = n(22).openUrl,
        y = n(79).bigDataXBData,
        b = { defaultFont: !0, moren: !0, "null": !0, undefined: !0 },
        x = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { backgroundColor: !0, color: !1 }, compStyle: { backgroundColor: !0, color: !0 } }, link: !1 }), r } return r(t, e), u(t, [{ key: "updateContent", value: function(e) { this.compJson.content = e; var t = this.create$context();
                    this.$context.replaceWith(t), this.$context = t } }, { key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.content,
                        o = e.sceneId,
                        r = e.publishTime,
                        s = e.css,
                        u = s.fontSize,
                        l = s.width,
                        p = s.height,
                        h = s.writingMode,
                        d = e.properties.anim,
                        f = void 0 === d ? [] : d,
                        g = { fontSize: u, width: l, height: p, textRendering: "optimizeLegibility" };
                    h && (g["-webkit-writing-mode"] = h, g.writingMode = h); var v = c({ id: t, type: n, content: i, css: g }); return "view" == this.eqxScene.config.mode && v.find("*").toArray().map(function(e) { return $(e).css("font-family") }).forEach(function(e) { return a({ fontFamily: e, sceneId: o, publishTime: r }) }), f[0] && "typer" == f[0].type && v.css({ opacity: 0 }), v } }, { key: "updateSize", value: function(e, t) { this.$context.css(t) } }, { key: "bindAfterRenderEvent", value: function(e, t) { var n = this,
                        i = t.pageId; return "x" == t.type && t.properties.url ? $(e).click(function() { var e = t.properties.url;
                        Number.isInteger(+e) ? n.eqxScene.pageScroll.goToPageById(e) : m(e, i) }) : $(e).find("a[href]").toArray().forEach(function(e) { var t = $(e).attr("href");
                        $(e).removeAttr("href").css("cursor", "pointer").click(function() { n.eqxPage.eqxScene.config.disableBigData || (129810 === i ? y(window.scene.id, "4", { url: t }, "3", "技术支持尾页") : t.toString().indexOf("16060") > 0 ? y(window.scene.id, "4", { url: t }, "4", "技术支持底标") : 129811 === i ? y(window.scene.id, "4", { url: t }, "5", "品牌联合底标") : y(window.scene.id, "4", { url: t }, "9", "组件链接")), Number.isInteger(+t) ? n.eqxScene.pageScroll.goToPageById(t) : m(t, i) }) }), !0 } }, { key: "addClassToLi", value: function(e) { e.addClass("wsite-text") } }, { key: "clearRichText", value: function() { this.compJson.content = this.$context.text(), this.compJson.css.writingMode = "horizontal-tb", this.$context.html(this.compJson.content), this.$context.css("writingMode", "horizontal-tb") } }, { key: "settingGroupStyle", value: function(e) { Object.assign(this.compJson.css, e), this.update$boxDiv(e) } }, { key: "adjustHeight", value: function() { this.$li.css({ height: "", width: "" }), this.$context.css({ height: "", width: "" }); var e = this.$boxDiv.height(),
                        t = this.$boxDiv.width();
                    this.update$li({ height: e, width: t }), this.$context.css({ height: e, width: t }) } }]), t }(g);
    e.exports = x }, function(e, t) {}, function(e, t) { e.exports = '<div id="#{id}" ctype="#{type}" class="element comp_paragraph editable-text" style="cursor: default">#{content}</div>' }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function p(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : p(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        c = n(21).$loadMLink,
        u = n(218),
        l = function(e) {
            function t(e, n) { return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)) } return r(t, e), s(t, [{ key: "create$context", value: function() { var e = a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "create$context", this).call(this),
                        n = window.scene,
                        i = n.isTemplate,
                        o = n.sourceId,
                        r = n.id,
                        s = { sceneId: r }; return i && (s.isTemplate = i), o && (s.sourceId = o), c().then(function() { var t = { mlink: "https://ax8bgc.mlinks.cc/AK00", button: e.find("a.deepShareHref")[0], autoLaunchApp: !1, autoRedirectToDownloadUrl: !0, downloadWhenUniversalLinkFailed: !1, inapp: !1, params: s };
                        console.log("mlink", t), new Mlink(t) }), e } }]), t }(u);
    e.exports = l }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

    function s(e) { var t = e.imgSrc,
            n = e.reasonList,
            i = n.map(function(e, t) { var n = e.id,
                    i = e.name,
                    o = (e.value, 0 == t ? 'class="active"' : ""); return '<li value="' + n + '" ' + o + "><span>" + i + "</span></li>" }).join(""); return $(d(p, { imgSrc: t, reasons: i })) } var a = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        c = function b(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : b(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) };
    n(223); var u = n(224).$getReportOptions,
        l = n(224).$postReport,
        p = n(225),
        h = n(218),
        d = n(41).parse,
        f = n(79).bigDataXBData,
        g = n(80).popUpModal,
        v = [],
        m = [{ id: 14258, name: "内容涉及违规", value: 1 }, { id: 14259, name: "诱导浏览者分享", value: 2 }, { id: 14260, name: "场景内容侵权", value: 3 }, { id: 14302, name: "内容夸大宣传", value: 4 }, { id: 14303, name: "违背易企秀用户协议", value: 5 }, { id: 14304, name: "其它原因", value: 6 }],
        y = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return r.show = !r.eqxPage.eqxScene.config.disableReport, r.$report = null, r } return r(t, e), a(t, [{ key: "eleHide", value: function() { c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "eleHide", this).call(this), this.hide() } }, { key: "eleShow", value: function() { return this.show ? c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "eleShow", this).call(this) : this } }, { key: "hide", value: function() { this.$report && this.$report.hide() } }, { key: "addClassToLi", value: function(e) { this.show || this.$li.css("display", "none") } }, { key: "bindAfterRenderEvent", value: function(e, t) { var n = this;
                    $(e).on("click11", function(e) { e.stopPropagation(), n.eqxPage.eqxScene.config.disableBigData || f(window.scene.id, 4, null, 6, "举报"), n.openReportModal() }) } }, { key: "openReportModal", value: function() { var e = this; if (this.$report) return this.$report.show(); var t = this.compJson.sceneId;
                    this.getSelectOption().then(function(i) { var o = s({ imgSrc: n(226), reasonList: i });
                        e.$report = o; var r = e.$li.parent();
                        o.appendTo(r), o.find("li").click(function(e) { e.stopPropagation(), $(this).siblings().removeClass("active"), $(this).addClass("active") }), $("#reportSubmit").click(function(n) { n.stopPropagation(); var i = o.find("li.active").val();
                            l({ sceneId: t, type: i }).then(function() { return g("举报成功！") })["finally"](function() { return e.hide() }) }), r.on("click", function(t) { var n = o.find(t.target).length > 0;
                            n || e.hide() }) }) } }, { key: "getSelectOption", value: function() { return new Promise(function(e, t) { return v.length ? e(v) : u().then(function(n) { v = n.list, v.length ? e(v) : t() })["catch"](function() { return v = m, e(v) }) }) } }]), t }(h);
    e.exports = y }, function(e, t) {}, function(e, t, n) { "use strict";

    function i() { var e = s.SERVER_1 + "eqs/class/expose_types"; return r({ type: "GET", url: e }) }

    function o(e) { var t = e.sceneId,
            n = e.type; return r({ type: "POST", url: s.SERVER_0 + "eqs/expose", data: { sceneId: t, type: n } }) } var r = n(19).ajax,
        s = n(20);
    e.exports = { $getReportOptions: i, $postReport: o } }, function(e, t, n) { e.exports = '<div id="report0"><div id="report1"><div id="report2"><p><img src="' + n(226) + '" width="50px;"></p><h1>请选择举报原因</h1></div><div id="report3"><ul id="reportList">#{reasons}</ul></div><div id="report4"><a id="reportSubmit" data-event="11203">提交举报</a></div></div></div>' }, function(e, t, n) { e.exports = n.p + "images/jubao_03-db9a15.png" }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

    function s(e) { var t = e.id,
            n = e.type,
            i = e.marginTop,
            o = e.marginBottom,
            r = e.css,
            s = e.content,
            a = void 0 === s ? "" : s; return r.cursor = "default", r.minHeight = "inherit", r.fontSize && (r.fontSize = h(r.fontSize)), $(f(d, { id: t, type: n, content: a, marginTop: i, marginBottom: o })).css(r) }

    function a(e) { var t = e.fontFamily,
            n = e.sceneId,
            i = e.mode; if ("view" === i && window.scene && t && !v[t]) { var o = "@font-face{font-family:'" + t + "';src: url('" + g.FONT + "fonts/" + n + "_" + window.scene.publishTime + "/" + t + ".woff') format('woff'),url('" + g.FONT + "fonts/" + n + "_" + window.scene.publishTime + "/" + t + ".ttf') format('truetype');}";
            p(o), v[t] = !0 } } var c = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        u = n(113),
        l = n(146),
        p = l.addGlobalStyle,
        h = l.addSuffixPx,
        d = n(228),
        f = n(41).parse,
        g = n(20),
        v = {},
        m = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { self: !1 }, border: { self: !1 }, boxShadow: { self: !1 }, compFont: { self: !0, fontFamily: !0 }, compStyle: { backgroundColor: !0 }, advanceStyle: { variable: !0 } }, link: !0, flexLine: "w,e,r" }), r } return r(t, e), c(t, [{ key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.content,
                        o = e.sceneId,
                        r = e.css,
                        c = r.fontFamily,
                        u = r.fontSize,
                        l = r.writingMode,
                        p = r.marginTop,
                        h = void 0 === p ? "0px" : p,
                        d = r.marginBottom,
                        f = void 0 === d ? "0px" : d,
                        g = e.properties.anim,
                        v = void 0 === g ? [] : g;
                    i = i || "请输入文本"; var m = s({ id: t, type: n, content: i, marginTop: h, marginBottom: f, css: { fontFamily: c, fontSize: u, writingMode: l } }); return a({ mode: this.eqxScene.config.mode, fontFamily: c, sceneId: o }), v[0] && "typer" === v[0].type && m.css({ opacity: 0 }), m } }, { key: "updateContent", value: function(e) { e = e || this.compJson.content || "请输入文本", this.$context.children().html(e) } }, { key: "autoAdjustSize", value: function() { var e = this.$context,
                        t = this.$context.children(),
                        n = parseInt(e.css("padding")),
                        i = t.height(),
                        o = { height: i + 2 * n }; return this.update$li(o), { height: parseInt(this.$li.css("height")), width: parseInt(this.$li.css("width")) } } }]), t }(u);
    e.exports = m }, function(e, t) { e.exports = '<div id="#{id}" ctype="#{type}" class="element" style="padding: 5px;width: 100%;height: 100%"><span style="display: block;margin-top: #{marginTop};margin-bottom: #{marginBottom};color: inherit;word-break: break-all">#{content}</span></div>' }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

    function s(e) { var t = e.id,
            n = e.type,
            i = e.marginTop,
            o = e.marginBottom,
            r = e.css,
            s = e.content,
            a = void 0 === s ? "" : s; return r.cursor = "default", r.minHeight = "inherit", r.fontSize && (r.fontSize = d(r.fontSize)), $(g(f, { id: t, type: n, content: a, marginTop: i, marginBottom: o })).css(r) }

    function a(e) { var t = e.fontFamily,
            n = e.sceneId,
            i = e.mode; "view" === i && window.scene && t && !m[t] && (h("@font-face{\n                font-family:'" + t + "';\n                src: url('" + v.FONT + "fonts/" + n + "_" + window.scene.publishTime + "/" + t + ".woff') format('woff'),\n                url('" + v.FONT + "fonts/" + n + "_" + window.scene.publishTime + "/" + t + ".ttf') format('truetype');"), m[t] = !0) }

    function c(e) { return Math.floor(Math.random() * e) } var u = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        l = n(113),
        p = n(146),
        h = p.addGlobalStyle,
        d = p.addSuffixPx,
        f = n(230),
        g = n(41).parse,
        v = n(20),
        m = {},
        y = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
                    s = e.properties.contentType; return "t" === s ? $.extend(!0, r.$ability, { style: { base: { self: !1 }, border: { self: !1 }, boxShadow: { self: !1 }, compFont: { self: !0, fontFamily: !0 }, compStyle: { backgroundColor: !0 } }, link: !0, flexLine: "w,e,r" }) : "i" === s && $.extend(!0, r.$ability, { style: { base: { lineHeight: !1, color: !1, paddingTop: !1 }, compStyle: { backgroundColor: !0 }, imageStyle: !0 } }), r } return r(t, e), u(t, [{ key: "create$context", value: function() { var e = this.compJson,
                        t = e.properties.contentType; if ("t" === t) { var n = e.id,
                            i = e.type,
                            o = e.sceneId,
                            r = e.css,
                            u = r.fontFamily,
                            l = r.fontSize,
                            p = r.writingMode,
                            h = r.marginTop,
                            d = void 0 === h ? "0px" : h,
                            f = r.marginBottom,
                            g = void 0 === f ? "0px" : f,
                            v = e.properties,
                            m = v.anim,
                            y = void 0 === m ? [] : m,
                            b = v.texts,
                            x = void 0 === b ? [] : b,
                            w = "view" === this.eqxScene.config.mode ? c(x.length) : 0,
                            k = x[w] || "请输入文本",
                            P = s({ id: n, type: i, content: k, marginTop: d, marginBottom: g, css: { fontFamily: u, fontSize: l, writingMode: p } }); return a({ mode: this.eqxScene.config.mode, fontFamily: u, sceneId: o }), y[0] && "typer" === y[0].type && P.css({ opacity: 0 }), P } if ("i" === t) { var _ = e.id,
                            E = e.type,
                            S = e.properties;
                        S = void 0 === S ? {} : S; var O = S.imgs,
                            I = void 0 === O ? [] : O,
                            T = S.bgColor,
                            C = e.css,
                            q = C.width,
                            j = C.height,
                            A = "view" === this.eqxScene.config.mode ? c(I.length) : 0,
                            D = this.getImgSrc(I[A].src, { width: q, height: j }),
                            M = $('<div id="' + _ + '" \n                                   class="random-content element" \n                                   ctype="' + E + '"\n                                   style="width: 100%;height: 100%;"></div>').css("background-color", T),
                            R = this.$img = $('<div class="random-content-image"\n                                           style="width: 100%;height: 100%;">').css({ backgroundImage: "url('" + D + "')", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }); return M.append(R), M } } }, { key: "updateContent", value: function(e) { this.$context.children().html(e) } }, { key: "updateImg", value: function(e) { var t = this.compJson.css,
                        n = t.width,
                        i = t.height,
                        o = this.getImgSrc(e, { width: n, height: i });
                    this.$img.css("background-image", "url('" + o + "')") } }, { key: "updateSize", value: function(e, t) {} }, { key: "updateTurnOver", value: function(e) { this.$boxContentDiv.css("transform", e) } }, { key: "autoAdjustSize", value: function() { var e = this.$context,
                        t = this.$context.children(),
                        n = parseInt(e.css("padding")),
                        i = t.height(),
                        o = { height: i + 2 * n }; return this.update$li(o), { height: parseInt(this.$li.css("height")), width: parseInt(this.$li.css("width")) } } }]), t }(l);
    e.exports = y }, function(e, t) { e.exports = '<div id="#{id}" ctype="#{type}" class="element" style="padding: 5px;width: 100%;height: 100%"><span style="display: block;\n                 margin-top: #{marginTop};\n                 margin-bottom: #{marginBottom};\n                 color: inherit;\n                 word-break: break-all">#{content}</span></div>' }, function(e, t, n) {
    "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(232),
        c = n(113),
        u = n(79).bigDataXBData,
        l = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { self: !0 }, border: { self: !0 }, boxShadow: { self: !0 }, compStyle: { self: !0, backgroundColor: !0 }, commonStyle: { self: !0 }, advanceStyle: { self: !0 }, compFont: { self: !1, fontFamily: !1 } }, trigger: !1, sound: !1, link: !1 }), r.eqxScene.formManager.add(r), r } return r(t, e), s(t, [{ key: "check", value: function() { var e = this.$select.find("option:selected").text(),
                        t = Number(this.$select.val()),
                        n = { success: !0, pageId: this.pageId, key: this.name, value: e }; return this.required && !t && (n.success = !1, n.message = "下拉框 '" + e + "' 为必选项"), n } }, { key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.pageId,
                        i = e.type,
                        o = e.required,
                        r = e.css,
                        s = r.borderWidth,
                        c = r.backgroundColor;
                    s || (e.css.borderWidth = 1, e.css.borderColor = "rgba(8, 161, 239, 1)", this.$boxDiv.css("borderWidth", "1px"), this.$boxDiv.css("borderColor", "rgba(8, 161, 239, 1)")), c || (e.css.backgroundColor = "#ffffff", this.$boxDiv.css("backgroundColor", "#ffffff")); var u = e.choices || {},
                        l = u.options || [];
                    this.name = "eq[f_" + t + "]", this.required = o, this.pageId = n; var p = a.$compDiv({ id: t, type: i, required: o }),
                        h = this.$select = p.find("select"),
                        d = l.map(function(e) { return a.$option({ selected: e.selected, value: e.value, label: e.label }) }); return h.append(d), p } }, { key: "changeOption", value: function() { var e = this.compJson.choices.options || [],
                        t = e.map(function(e) { return a.$option({ selected: e.selected, value: e.value, label: e.label }) });
                    this.$select.empty(), this.$select.append(t) } }, { key: "bindAfterRenderEvent", value: function() { var e = this; return this.$li.bind("touchstart mousedown", function(t) { e.eqxPage.eqxScene.config.disableBigData || u(window.scene.id, 4, null, 29, "下拉列表"), t.stopPropagation() }), !0 } }]), t }(c);
    e.exports = l
}, function(e, t, n) { "use strict";

    function i(e) { var t = e.id,
            n = e.type,
            i = e.required,
            o = void 0 === i ? null : i,
            a = $(s(r, { id: t, type: n })); return a.find("#" + t).attr("required", o), a }

    function o(e) { var t = e.selected,
            n = void 0 === t ? null : t,
            i = e.value,
            o = e.label,
            r = $('<option  class="comp_select_option" value="' + i + '">' + o + "</option>").attr("selected", n); return r } var r = n(233);
    n(234); var s = n(41).parse;
    e.exports = { $compDiv: i, $option: o } }, function(e, t) { e.exports = '<div class="comp_drop_down" style="width:100%;height:100%" id="#{id}" ctype="#{type}"><select style="width:100%;height:100%" name="eq[f_#{id}]" class="comp_drop_down_select" ctype="#{type}"></select></div>' }, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(23).mobilecheck,
        c = n(23).isAndroidPhone,
        u = n(113),
        l = n(236),
        p = n(41).parse;
    n(237); var h = function(e) {
        function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { compFont: { self: !1, fontFamily: !1 }, compStyle: { backgroundColor: !0 } }, trigger: !1, link: !1 }), r.eqxScene.formManager.add(r), r } return r(t, e), s(t, [{ key: "check", value: function() { var e = this.$li.find("#" + this.id).val(),
                    t = { success: !0, pageId: this.pageId, key: this.name, value: e }; return this.required && !e && (t.success = !1, t.message = this.placeholder + " 为必填项"), t } }, { key: "create$context", value: function() { var e = this.compJson,
                    t = e.id,
                    n = e.pageId,
                    i = e.type,
                    o = e.properties,
                    r = o.required,
                    s = void 0 === r ? null : r,
                    a = o.placeholder,
                    c = void 0 === a ? null : a; return this.required = s, this.name = "eq[f_" + t + "]", this.pageId = n, this.placeholder = c, this.id = t, $(p(l, { id: t, type: i })).attr({ required: s, placeholder: c }) } }, { key: "setInputTitle", value: function(e) { this.$context.attr("placeholder", e) } }, { key: "bindAfterRenderEvent", value: function(e, n) { var i = a(); return t.touchStartMouseDownStopPropagation($(e).find("textarea")), this.onFocusBlurWhenFlip($(e).find("textarea")), this.onChangeTriggerVar($(e).find("textarea")), i && parseFloat(n.css.top) >= 200 && c() && $(e).find("textarea").click(function(e) { setTimeout(function() { e.target.scrollIntoViewIfNeeded() }, 500) }), !0 } }, { key: "onFocusBlurWhenFlip", value: function(e) { var t = this;
                e.focus(function() { t.eqxScene.pageScroll.pauseAutoFlip() }).blur(function() { $(document).trigger("startAutoFlip") }) } }, { key: "onChangeTriggerVar", value: function(e) { var t = this;
                e.on("change input", function() { var n = t.variables;
                    n && n.length && n.forEach(function(t) { "7" === t.type.toString() && t.updateContent(e.val()) }) }) } }, { key: "addClassToLi", value: function(e) { e.addClass("wsite-input") } }], [{ key: "touchStartMouseDownStopPropagation", value: function(e) { $(e).bind("touchstart mousedown", function(e) { e.stopPropagation() }) } }]), t }(u);
    e.exports = h }, function(e, t) { e.exports = '<textarea id="#{id}" ctype="#{type}" class="element comp_input editable-text" maxlength="300" name="eq[f_#{id}]" style="width: 100%;height:100%;box-sizing:border-box;-webkit-overflow-scrolling:touch;user-select: none">\n</textarea>' }, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function p(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : p(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        c = n(235),
        u = n(125).isEmail,
        l = function(e) {
            function t(e, n) { return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)) } return r(t, e), s(t, [{ key: "check", value: function() { var e = a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "check", this).call(this); return e.success ? (e.value && !u(e.value) && (e.success = !1, e.message = this.placeholder + " 格式不对"), e) : e } }]), t }(c);
    e.exports = l }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function p(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : p(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        c = n(235),
        u = n(125).isPhoneNumber,
        l = function(e) {
            function t(e, n) { return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)) } return r(t, e), s(t, [{ key: "check", value: function() { var e = a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "check", this).call(this); return e.success ? (e.value && !u(e.value) && (e.success = !1, e.message = this.placeholder + " 格式不对"), e) : e } }]), t }(c);
    e.exports = l }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(241),
        c = n(113),
        u = n(79).bigDataXBData,
        l = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { color: !1, lineHeight: !1, paddingTop: !1 }, compStyle: { backgroundColor: !0 }, compFont: { self: !1, fontFamily: !1 } }, trigger: !1, sound: !1, link: !1 }), r.eqxScene.formManager.add(r), r } return r(t, e), s(t, [{ key: "check", value: function() { var e = this.$score.val(),
                        t = { success: !0, pageId: this.pageId, key: this.name, value: e }; return this.required && !e && (t.success = !1, t.message = "评分项: " + this.title + " 为必填项"), t } }, { key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.pageId,
                        i = e.type,
                        o = e.title,
                        r = e.properties,
                        s = r.required,
                        c = r.icon,
                        u = r.size,
                        l = r.color,
                        p = a.$compDiv({ id: t, type: i, required: s, title: o });
                    this.required = s, this.title = o, this.name = "eq[f_" + t + "]", this.pageId = n; var h = [1, 2, 3, 4, 5].map(function() { return a.icon({ icon: c, size: u }) }); return p.find(".rating-icons").append(h).css({ color: l }), this.$score = p.find('input[type="hidden"]'), this.$titleDiv = p.find(".rating-title"), p } }, { key: "update$iconColor", value: function(e) { this.$context.find(".rating-icons").css({ color: e }) } }, { key: "update$titleDiv", value: function(e) { this.$titleDiv.text(e) } }, { key: "updateAttrRequire", value: function(e) { this.$context.attr("required", e) } }, { key: "update$icon", value: function(e, t) { this.$context.find("i").removeClass().addClass(e + " " + t + "-line") } }, { key: "bindAfterRenderEvent", value: function(e, t) {
                    function n(e) { r.each(function(t, n) { $(n).removeClass(a).addClass(a + "-line"), t <= e && $(n).removeClass(a + "-line").addClass(a) }) } var i = this,
                        o = $(e),
                        r = o.find("i"),
                        s = o.find("input"),
                        a = t.properties.icon; return r.each(function(e, t) { $(t).attr("data-event", "11211"), $(t).bind("click", function() { n(e), s.val(e + 1) }).bind("mouseenter", function() { return n(e) }) }), o.find(".rating-icons").bind("mouseleave", function() { return n(~~s.val() - 1) }).bind("touchstart mousedown", function(e) { i.eqxPage.eqxScene.config.disableBigData || u(window.scene.id, 4, null, 30, "评分"), e.stopPropagation() }), !0 } }]), t }(c);
    e.exports = l }, function(e, t, n) { "use strict";

    function i(e) { var t = e.id,
            n = e.type,
            i = e.title,
            o = e.required,
            a = void 0 === o ? null : o; return $(s(r, { id: t, type: n, title: i })).attr("required", a) }

    function o(e) { var t = e.icon,
            n = e.size; return '<i class="' + n + " " + t + '-line"></i>' } n(242); var r = n(243),
        s = n(41).parse;
    e.exports = { $compDiv: i, icon: o } }, function(e, t) {}, function(e, t) { e.exports = '<div class="element comp_rating editable-text" style="width: 100%;height:100%" id="#{id}" ctype="#{type}" title="#{title}" name="eq[f_#{id}]"><div class="rating-title">#{title}</div><div class="rating-icons"></div><input type="hidden" name="eq[f_#{id}]" value=""></div>' }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function l(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : l(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        c = n(245),
        u = function(e) {
            function t(e, n) { return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)) } return r(t, e), s(t, [{ key: "$compDiv", value: function(e) { return e.title += "(可多选)", a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "$compDiv", this).call(this, e) } }, { key: "$option", value: function(e) { return e.inputType = "checkbox", a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "$option", this).call(this, e) } }, { key: "updateTitle", value: function() { var e = this.compJson.title + "(可多选)"; return a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateTitle", this).call(this, e) } }]), t }(c);
    e.exports = u }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
    n(246); var a = n(113),
        c = n(247),
        u = n(248),
        l = n(41).parse,
        p = n(79).bigDataXBData,
        h = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { lineHeight: !1, paddingTop: !1 }, compStyle: { backgroundColor: !1 }, compFont: { self: !1, fontFamily: !1 } }, trigger: !1, sound: !1, link: !1 }), r.eqxScene.formManager.add(r), r } return r(t, e), s(t, [{ key: "check", value: function() { var e = this.$options.find("input.option[name]").toArray().filter(function(e) { return e.checked }).map(function(e) { return $(e).val() }).filter(function(e) { return !!e }).join(","),
                        t = { success: !0, pageId: this.pageId, key: this.name, value: e }; return this.required && !e && (t.success = !1, t.message = this.title + " 为必填项"), t } }, { key: "$compDiv", value: function(e) { var t = e.id,
                        n = e.required,
                        i = void 0 === n ? null : n,
                        o = e.title,
                        r = e.type,
                        s = e.css; return $(l(u, { id: t, title: o, type: r, css: s })).attr({ required: i }) } }, { key: "$option", value: function(e) { var t = e.compId,
                        n = e.index,
                        i = e.optionId,
                        o = e.optionLabel,
                        r = e.inputType,
                        s = void 0 === r ? "radio" : r,
                        a = "" + t + n; return $(l(c, { id: a, inputType: s, compId: t, optionId: i, optionLabel: o })) } }, { key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.pageId,
                        i = e.type,
                        o = e.properties,
                        r = o.required,
                        s = o.titleStyle,
                        a = void 0 === s ? {} : s,
                        c = e.title,
                        u = e.css.height;
                    this.title = c, this.pageId = n, this.name = "eq[f_" + t + "]", this.required = r; var l = this.$compDiv({ id: t, required: r, title: c, type: i, css: { height: u, width: "100%" } });
                    l.find(".radio-title").css(a); var p = this.$options = l.find(".options"); return p.html(this.create$options()), l } }, { key: "create$options", value: function() { var e = this,
                        t = this.compJson,
                        n = t.id,
                        i = (t.properties.optionStyle, t.choices),
                        o = $("<div>");
                    i.options.length - 1; return i.options.forEach(function(t, i) { var r = e.$option({ compId: n, index: i, optionId: t.id, optionLabel: t.label });
                        o.append(r) }), o.html() } }, { key: "bindAfterRenderEvent", value: function() { var e = this; return this.$li.find("label").bind("touchstart mousedown", function(t) { e.eqxPage.eqxScene.config.disableBigData || ("radio" == $(e).find("input").attr("type") ? p(window.scene.id, 4, null, 27, "单选") : p(window.scene.id, 4, null, 28, "多选")), t.stopPropagation() }), !0 } }, { key: "updateTitle", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.compJson.title;
                    this.$li.find(".radio-title").text(e) } }, { key: "updateOptions", value: function() { var e = this.create$options();
                    this.$options.html(e), this.$li.css({ height: "" }), this.update$li({ height: this.$li.height() }) } }, { key: "updateOptionsLabel", value: function() { var e = this.$li.find(".option-label").find("span");
                    this.compJson.choices.options.forEach(function(t, n) { $(e[n]).text(t.label) }) } }, { key: "updateOptionsType", value: function() { var e = "c" === this.compJson.type,
                        t = e ? "checkbox" : "radio";
                    this.$li.find("input").attr("type", t), e ? this.updateTitle(this.compJson.title + "(可多选)") : this.updateTitle() } }]), t }(a);
    e.exports = h }, function(e, t) {}, function(e, t) { e.exports = '<div class="option-group"><label class="option-label" for="#{id}" data-event="11208"><input class="option" id="#{id}" type="#{inputType}" name="eq[f_#{compId}]" value="#{optionId}"> <span>#{optionLabel}</span></label></div>' }, function(e, t) { e.exports = '<div class="element comp_radio editable-text" id="#{id}" ctype="#{type}" title="#{title}" name="eq[f_#{id}]" style="width: 100%;height: 100%"><div class="radio-title">#{title}</div><div class="options"></div></div>' }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(250).$postForm,
        c = n(20),
        u = n(197),
        l = n(113),
        p = n(23).isWeixin,
        h = n(90).qiniuZoom,
        d = n(251),
        f = n(79).bigDataXBData,
        g = n(80).popUpModal,
        v = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { lineHeight: !1 }, compStyle: { backgroundColor: !0 }, compFont: { self: !1, fontFamily: !1 } }, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), s(t, [{ key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.pageId,
                        i = e.type,
                        o = e.properties,
                        r = o.title,
                        s = o.styleImgSrc,
                        a = e.css,
                        l = a.width,
                        p = a.height,
                        h = "" + c.FILE + s,
                        d = "0"; return this.pageId = n, this.$context = s ? u.$img({ id: t, type: i, src: h, css: { width: l, height: p }, padding: d }) : u.$btn({ id: t, type: i, title: r, css: { width: l, height: p } }), this.$context } }, { key: "addClassToLi", value: function(e) { e.addClass("wsite-input") } }, { key: "bindAfterRenderEvent", value: function(e, t) { var n = this,
                        i = !0;
                    $(e).click(function() { n.eqxPage.eqxScene.config.disableBigData || f(window.scene.id, 4, null, 1, "提交表单"); var o = n.eqxScene.formManager,
                            r = o.check(),
                            s = t.sceneId,
                            c = t.id,
                            l = t.pageId,
                            v = t.properties,
                            m = v.layout,
                            y = void 0 === m ? "rating-l" : m,
                            b = v.imgSrc,
                            x = v.text,
                            w = v.link,
                            k = v.checkedLink,
                            P = v.clickFarmer,
                            _ = v.endTime,
                            E = new Promise(function() {}); if (o.submited) E = Promise.reject({ code: 120505 });
                        else if (_ && _ < Date.now()) E = Promise.reject({ code: 120602 });
                        else if (P && !p()) E = Promise.reject({ code: 120504 });
                        else if (r.success) i && (n.eqxScene.config.disableSubmit ? E = Promise.resolve() : (_ && (r.form.endTime = _), E = a(r.form, s, l, c)), i = !1);
                        else if (r.pageId && n.pageId != r.pageId) { var $ = confirm(r.message + " 是否前往修改？");
                            $ && n.eqxScene.pageScroll.goToPageById(r.pageId) } else E = Promise.reject({ msg: r.message });
                        E.then(function() { o.submited = !0, i = !0; var t = !!k,
                                n = b ? h(b, 240) : d;
                                console.log("n----------"+JSON.stringify(n));
                            x = x ? x.trim() : "谢谢您的参与！", u.modal(e, y, t, n, x, w) })["catch"](function(e) { 
                            	console.log("e----------"+JSON.stringify(e));
                            	i = !0, g(120505 === e.code || 120603 === e.code ? "请不要重复提交哦！" : 120504 === e.code ? "请到微信中打开使用！": 130001 === e.code ? "您已经报过名了！" : 120602 === e.code || 120604 === e.code ? "当前表单已截止提交！" : e.msg) }) }) } }, { key: "updateBtnTitle", value: function(e) { this.compJson.properties.styleImgSrc || (this.$context[0].innerText = e) } }]), t }(l);
    e.exports = v }, function(e, t, n) { "use strict";

    function i(e, t, n, i) { 
    	console.log("data--"+JSON.stringify(e));
    	return s({ type: "POST", url: r.SERVER_1 + "admin/yqx/tj/id/" + t + "/" + n + "/" + i, data: e }) }

    function o(e, t, n) { return s({ type: "POST", url: r.SERVER_1 + "eqs/promotion/order/data/r/" + e + "/" + n, data: t }) } var r = n(20),
        s = n(19).ajax;
    e.exports = { $postForm: i, $submitXiuForm: o } }, function(e, t, n) { e.exports = n.p + "ok-941be2.svg" }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function m(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : m(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        c = n(23).isWeixin,
        u = n(113),
        l = n(253),
        p = n(254),
        h = n(41).parse,
        d = n(255),
        f = n(77).getWxJSSDK,
        g = n(79).bigDataXBData,
        v = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { lineHeight: !1, paddingTop: !1 }, compStyle: { backgroundColor: !0 } }, sound: !1, link: !1 }), r.wxJssdk = f(), r.soundKey = e.id.toString().substring(3), l[r.soundKey] = l[r.soundKey] || {}, l[r.soundKey].wxpId = e.id, r } return r(t, e), s(t, [{ key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.css,
                        o = i.width,
                        r = i.height,
                        s = i.lineHeight; return $(h(p, { id: t, type: n })).css({ width: o, height: r, lineHeight: s, display: "inline-block" }) } }, { key: "bindAfterRenderEvent", value: function(e) { var t = this; return $(e).on("mousedown touchstart", function(e) { t.eqxPage.eqxScene.config.disableBigData || g(window.scene.id, 4, null, 23, "互动微信声音"), window.event.stopPropagation(), e.preventDefault(), c() ? t.soundPlay() : t.playDefaultSound() }), !0 } }, { key: "updateSize", value: function(e, n) { a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateSize", this).call(this, e, n), this.$context.css({ width: n.width, height: n.height, lineHeight: n.height + "px" }), this.compJson.css.lineHeight = n.height + "px" } }, { key: "soundPlay", value: function() { var e = this,
                        t = this; if (l[this.soundKey].soundId) { var n = l[this.soundKey].soundId;
                        this.eqxScene.soundManager.onPlay({ type: 4 }), this.wxJssdk.then(function() { wx.playVoice({ localId: n }) }) } else this.compJson.serverId ? this.wxJssdk.then(function() { wx.downloadVoice({ serverId: e.compJson.serverId, success: function(n) { var i = n.localId;
                                e.eqxScene.soundManager.onPlay({ type: 4 }), wx.playVoice({ localId: i }), l[t.soundKey].soundId = i }, error: function() { e.playDefaultSound() } }) }) : this.playDefaultSound();
                    this.wxJssdk.then(function() { wx.onVoicePlayEnd({ success: function() { e.eqxScene.soundManager.onEnd({ type: 4 }) } }) }) } }, { key: "playDefaultSound", value: function() { var e = this;
                    this.defaultSound || (this.defaultSound = document.createElement("audio"), this.defaultSound.src = n(255)), this.defaultSound.paused ? (this.eqxScene.soundManager.onPlay({ type: 4 }), this.defaultSound.play(), $(this.defaultSound).bind("ended", function() { e.eqxScene.soundManager.onEnd({ type: 4 }) })) : (this.eqxScene.soundManager.onEnd({ type: 4 }), this.defaultSound.pause()) } }], [{ key: "getDefaultSound", value: function() { return d } }]), t }(u);
    e.exports = v }, function(e, t) { "use strict";
    e.exports = {} }, function(e, t) { e.exports = '<a id="#{id}" class="element comp_wechat_play" ctype="#{type}"><span style="font-size:16px" class="eqf-nosy"></span></a>' }, function(e, t, n) { e.exports = n.p + "wexin_sound-d41d8c.mp3" }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function v(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : v(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) };
    n(257); var c = n(23).isWeixin,
        u = n(77).saveWxCompData,
        l = n(77).generateUserKey,
        p = n(113),
        h = n(253),
        d = n(77).getWxJSSDK,
        f = n(80).popUpModal,
        g = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return r.wxJssdk = d(), r.soundKey = e.id.toString().substring(3), h[r.soundKey] = h[r.soundKey] || {}, h[r.soundKey].wxrId = e.id, $.extend(!0, r.$ability, { style: { base: { lineHeight: !1, paddingTop: !1 }, compStyle: { backgroundColor: !0 } }, sound: !1, link: !1 }), r } return r(t, e), s(t, [{ key: "create$context", value: function() { var e = this.compJson,
                        t = document.createElement("a"); return t.innerHTML = e.properties.title, t.id = e.id, t.setAttribute("class", "element comp_wechat_hear"), t.setAttribute("ctype", e.type), t.setAttribute("data-event", "1120612"), $(t).css({ width: e.css.width, height: e.css.height, display: "inline-block" }), $(t) } }, { key: "bindAfterRenderEvent", value: function(e) { var t = this; return $(e).on("mousedown touchstart", function(e) { window.event.stopPropagation(), e.preventDefault(), c() ? t.soundRecord() : f("请在微信中点我！") }).on("mouseup touchend", function() { c() && t.calculateTime && t.soundStopRecord() }), !0 } }, { key: "updateSize", value: function(e, n) { a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateSize", this).call(this, e, n), this.$context.css({ width: n.width, height: n.height, lineHeight: n.height + "px" }), this.compJson.css.lineHeight = n.height + "px" } }, { key: "soundRecord", value: function() { var e = this;
                    this.wxJssdk.then(function() { e.eqxScene.soundManager.stopAll(), wx.startRecord({ success: function() { e.second = 0, e.openPlayState() } }), e.$context.addClass("recording").text("松开 结束") }) } }, { key: "openPlayState", value: function() { var e = this,
                        t = "<div class='voice-panel'><span class='icon eqf-voice'></span><div class='voice-tip'>松开手指 停止录音</div></div>";
                    this.voicePanel = $(t).prependTo(this.$li.parent()), this.calculateTime = setInterval(function() { e.second++, e.second >= 50 && $(e.voicePanel).text(60 - e.second), 60 === e.second && e.soundStopRecord() }, 1e3) } }, { key: "soundStopRecord", value: function() { var e = this;
                    clearInterval(this.calculateTime), this.calculateTime = null, this.$context.removeClass("recording").text("按住 说话"), this.eqxScene.soundManager.restoreAll(), $(this.voicePanel).remove(), wx.stopRecord({ success: function(t) { e.second = 0, e.wechatUploadVoice(t.localId) } }) } }, { key: "wechatUploadVoice", value: function(e) { var t = this;
                    h[this.soundKey].soundId = e, wx.uploadVoice({ localId: e, isShowProgressTips: 1, success: function(e) { var n = e.serverId;
                            l(), u(h[t.soundKey].wxpId, n) } }) } }]), t }(p);
    e.exports = g }, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(218),
        c = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { lineHeight: !1, paddingTop: !1 }, border: { self: !1 }, boxShadow: { self: !1 } }, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), s(t, [{ key: "updateContent", value: function(e) { this.compJson.content = e, this.$context.text(e) } }]), t }(a);
    e.exports = c }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(127),
        c = n(260),
        u = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { color: !1, opacity: !1, lineHeight: !1, paddingTop: !1 }, border: { self: !1 }, boxShadow: { self: !1 } }, trigger: !1 }), r } return r(t, e), s(t, null, [{ key: "getDefaultImg", value: function() { return c } }]), t }(a);
    e.exports = u }, function(e, t, n) { e.exports = n.p + "wx_default-454286.png" }, function(e, t, n) {
    "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

    function s(e) { y.push(e), b || a() }

    function a() {
        if (b = !0, y.length > 0) {
            var e = y.shift();
            e().then(function() { a() })
        } else b = !1
    }
    var c = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        u = function w(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : w(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        l = n(23).isWeixin,
        p = n(127),
        h = n(77).saveWxCompData,
        d = n(77).generateUserKey,
        f = n(262),
        g = n(77).getWxJSSDK,
        v = n(79).bigDataXBData,
        m = n(80).popUpModal,
        y = [],
        b = !1,
        x = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { paddingTop: !1, lineHeight: !1 } }, link: !1, sound: !1, trigger: !1 }), r.wxJssdk = g(), r } return r(t, e), c(t, [{ key: "create$context", value: function() { var e = u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "create$context", this).call(this),
                        n = this.compJson.serverId,
                        i = this; return e[0].setAttribute("data-event", "1120611"), n && l() && (e.css("display", "none"), s(function() { return new Promise(function(e) { i.wxJssdk.then(function() { wx.downloadImage({ serverId: n, success: function(t) { i.responsiveImage(t.localId), e() } }) }) }) })), e } }, { key: "bindAfterRenderEvent", value: function(e, t) { var n = this; return l() ? $(e).click(function() { n.eqxPage.eqxScene.config.disableBigData || v(window.scene.id, 4, null, 22, "互动微信照片"), n.uploadImage() }) : $(e).click(function() { n.eqxPage.eqxScene.config.disableBigData || v(window.scene.id, 4, null, 22, "互动微信照片"), m("请在微信中点击我") }), !0 } }, { key: "uploadImage", value: function() { var e = this;
                    this.wxJssdk.then(function() { wx.chooseImage({ count: 1, sizeType: ["original", "compressed"], sourceType: ["album", "camera"], success: function(t) { var n = t.localIds;
                                setTimeout(function() { wx.uploadImage({ localId: n.toString(), isShowProgressTips: 1, success: function(t) { e.responsiveImage(n.toString()); var i = t.serverId;
                                            d(), h(e.compJson.id, i) } }) }, 100) } }) }) } }, { key: "responsiveImage", value: function(e) { var t = this;
                    window.__wxjs_is_wkwebview ? this.wxJssdk.then(function() { console.log("responsiveImage getLocalImgData start", e), wx.getLocalImgData({ localId: e, fail: function(e) { console.error("responsiveImage getLocalImgData Error", e) }, success: function(e) { console.log("responsiveImage getLocalImgData"); var n = e.localData;
                                t._responsiveImage(n) } }) }) : this._responsiveImage(e) } }, { key: "_responsiveImage", value: function(e) { var t = new Image;
                    t.src = e; var n = this;
                    t.onload = function() { var i, o, r = window.parseInt(n.compJson.css.width, 10),
                            s = window.parseInt(n.compJson.css.height, 10);
                        t.width / t.height >= r / s ? (i = r, o = t.height * (r / t.width)) : (o = s, i = t.width * (s / t.height)), n.$context.css({ display: "block", width: i + "px", height: o + "px", "margin-top": (window.parseInt(n.$li.height(), 10) - o) / 2 + "px", "margin-left": (window.parseInt(n.$li.width(), 10) - i) / 2 + "px" }).attr("src", e) } } }], [{ key: "getDefaultImg", value: function() { return f } }]), t }(p);
    e.exports = x
}, function(e, t, n) { e.exports = n.p + "wechat_image-f8aa1a.png" }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function v(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : v(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) };
    n(264); var c = n(23).isWeixin,
        u = n(113),
        l = n(265).textVoteTpl,
        p = n(266).alertTpl,
        h = n(268).$isVoted,
        d = n(268).$postVote,
        f = n(50).randomId,
        g = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return $.extend(!0, r.$ability, { style: { base: { backgroundColor: !1, color: !1, opacity: !1, paddingTop: !1, lineHeight: !1 }, compStyle: { self: !0 }, commonStyle: { size: !1 }, advanceStyle: {} }, trigger: !1, sound: !1, link: !1, flexLine: "e,w,r" }), r.ids = [], r } return r(t, e), s(t, [{ key: "getMinWidth", value: function() { return 300 } }, { key: "updateSize", value: function(e, t) { var n = this.getMinWidth();
                    t.width && t.width < e.width && (!t.left || t.left === e.left) && t.width < n && this.$li.css({ width: n }), t.left && t.left > e.left && t.width && t.width < n && this.$li.css({ left: e.left, width: n }); var i = this.$context.height();
                    i != t.height && this.$li.height(i) } }, { key: "update$li", value: function(e) { var n = this.compJson.css,
                        i = this.getMinWidth();
                    e.width && e.width < n.width && (!e.left || e.left === n.left) && e.width < i && (e.width = i), e.left && e.left > n.left && e.width && e.width < i && (delete e.left, delete e.width), e.height && (e.height = this.$context.height()), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "update$li", this).call(this, e) } }, { key: "create$context", value: function() { var e = this.compJson,
                        t = e.id,
                        n = e.type,
                        i = e.properties,
                        o = i.title,
                        r = i.selectType,
                        s = i.buttonColor,
                        a = void 0 === s ? "#08A1EF" : s,
                        c = i.children,
                        u = void 0 === c ? [] : c;
                    r = "single" == r ? "单选" : "多选"; var h = l({ id: t, type: n }),
                        d = $(h); if (this.$title = $('<div class="vote-view-title">' + o + "（" + r + "）</div>"), d.append(this.$title), u.length) { this.$options = $('<ul class="vote-view-options"></ul>'), this.childrenOption = u.map(function(e) { var t = e.id,
                                n = e.label; return $('<li class="vote-view-option" id="' + t + '"><span><em class="eqf-yes2" style="display: none"></em></span><div class="vote-view-text">' + n + "</div></li>") }), this.$submit = $('<div class="vote-view-button">投票</div>'), this.$options.append(this.childrenOption), d.append(this.$options), d.append(this.$submit); var f = p();
                        this.$tpl = $(f).appendTo(d), this.updateButtonColor(a) } return d } }, { key: "updateButtonColor", value: function(e) { this.$submit.css({ backgroundColor: e }) } }, { key: "updateTitle", value: function(e, t) { t = "single" == t ? "单选" : "多选", this.$title.text(e + "（" + t + "）") } }, { key: "updateOptions", value: function(e) { this.$options.find("#" + e.id + " .vote-view-text").text(e.label) } }, { key: "deleteOption", value: function(e) { this.compJson.properties.children.splice(e, 1), this.childrenOption.splice(e, 1)[0].remove(), this.$li.css({ height: "" }), this.update$li({ height: this.$li.height() }) } }, { key: "addOption", value: function() { var e = { id: f(), label: "选项" + (this.compJson.properties.children.length + 1) };
                    this.compJson.properties.children.push(e); var t = $('<li class="vote-view-option" id="' + e.id + '"><span><em class="eqf-yes2" style="display: none"></em></span><div class="vote-view-text">' + e.label + "</div></li>");
                    this.childrenOption.push(t), this.$options.append(t), this.$li.css({ height: "" }), this.update$li({ height: this.$li.height() }) } }, { key: "bindAfterRenderEvent", value: function(e, t) { var n = this;
                    c() ? this.isVoted().then(function() { n.$options.children().on("click", function(e) { var i = $(e.currentTarget).find(".eqf-yes2");
                            i.is(":hidden") ? "single" == t.properties.selectType && 1 == n.ids.length ? (n.$options.find(".eqf-yes2").hide(), n.ids[0] = e.currentTarget.id, i.show()) : "multi" == t.properties.selectType && n.ids.length == t.properties.selectCount ? n.alertTpl("最多选择" + t.properties.selectCount + "项") : (i.show(), n.ids.push(e.currentTarget.id)) : (i.hide(), n.ids.splice(n.ids.indexOf(e.currentTarget.id), 1)) }), n.$submit.on("click", function() { var e = t.sceneId,
                                i = t.pageId;
                            n.ids.length ? d(e, t.id, { pageId: i, data: JSON.stringify(n.ids) }).then(function(e) { e.success && n.alertTpl("投票成功，谢谢参与！").then(function() { n.showVoted(e.map), n.$submit.off(), n.$options.children().off() }) }) : n.alertTpl("请至少选择一项") }) }) : this.$submit.css({ backgroundColor: "#f0f3f4", color: "#a3afb7" }).text("请在微信中投票") } }, { key: "alertTpl", value: function(e) { var t = this; return new Promise(function(n, i) { t.$tpl.find("span").text(e), t.$tpl.css({ opacity: 1, zIndex: 2 }), window.setTimeout(function() { t.$tpl.css({ opacity: 0, zIndex: -2 }), n() }, 2e3) }) } }, { key: "showVoted", value: function(e) { var t = this;
                    this.$options.find(".eqf-yes2").hide(); var n = [],
                        i = 0;
                    this.compJson.properties.children.forEach(function(o) { var r = o.id;
                        n.push({ id: r, count: e[r] || 0 }), i += e[r] || 0, e[r] && t.ids.push(r) }), n.forEach(function(e) { $('<em style="float:right">' + e.count + "  (" + (e.count / i * 100).toFixed(2) + " % 100)</em>").prependTo(t.$options.find("#" + e.id)) }), this.$li.height(""), this.$submit.css({ backgroundColor: "#f0f3f4", color: "#a3afb7" }).text("你已投票") } }, { key: "isVoted", value: function() { var e = this; return new Promise(function(t, n) { var i = e.compJson.properties.endTime; if (i && i < Date.now()) e.$submit.css({ backgroundColor: "#f0f3f4", color: "#a3afb7" }).text("投票已过期"), n();
                        else if (c()) { var o = e.compJson,
                                r = o.sceneId,
                                s = o.pageId,
                                a = o.id;
                            h(a, { sceneId: r, pageId: s }).then(function(i) { i.obj ? (e.showVoted(i.map), n()) : t() }) } else n() }) } }]), t }(u);
    e.exports = g }, function(e, t) {}, function(e, t) { "use strict";

    function n(e) { var t = e.id,
            n = e.type;
        e.title, e.selectType; return '<div  id="' + t + '" ctype="' + n + '" class="vote-view">\n    </div>' } e.exports = { textVoteTpl: n } }, function(e, t, n) { "use strict";

    function i() { return '<div class="vote-alert">\n              <span></span>\n            </div>' } n(267), e.exports = { alertTpl: i } }, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e, t) { return s({ type: "POST", url: r.SERVER_1 + "eqs/vote/verify/" + e, data: t }) }

    function o(e, t, n) { return s({ type: "POST", url: r.SERVER_1 + "eqs/vote/" + e + "/" + t, data: n }) } var r = n(20),
        s = n(19).ajax;
    e.exports = { $isVoted: i, $postVote: o } }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function m(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : m(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) };
    n(270); var c = n(20),
        u = n(21).$loadSliders,
        l = n(113),
        p = n(23).isWeixin,
        h = n(266).alertTpl,
        d = n(268).$isVoted,
        f = n(268).$postVote,
        g = n(271),
        v = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return r.intervalObj = {}, r.descIds = [], $.extend(!0, r.$ability, { style: { base: { backgroundColor: !1, color: !1, opacity: !1, paddingTop: !1, lineHeight: !1 }, compStyle: { self: !0 }, commonStyle: { size: !1 } }, trigger: !1, sound: !1, link: !1, flexLine: "r" }), r } return r(t, e), s(t, [{ key: "updateSize", value: function(e, t) { this.$slider.width(t.width), this.plugin.update() } }, { key: "create$context", value: function() { var e = this;
                    this.descArr = [], this.imgArr = [], this.loadPlugin = Promise.resolve(); var t = this.compJson,
                        n = t.id,
                        i = t.type,
                        o = t.css.width,
                        r = t.properties;
                    r = void 0 === r ? {} : r; var s = r.title,
                        a = r.selectType,
                        u = r.buttonColor,
                        l = void 0 === u ? "#08A1EF" : u,
                        p = r.children,
                        d = void 0 === p ? [] : p,
                        f = r.bgColor;
                    a = "single" == a ? "单选" : "多选"; var v = $('<div id="' + n + '" ctype="' + i + '" class="vote-img"></div>').css("background-color", f); if (d.length) { d.forEach(function(t) { var n = t.src,
                                i = t.desc,
                                o = t.id,
                                r = n ? "" + (c.FILE + n) : g;
                            e.imgArr.push($('<div style="background-image:url(' + r + '); width: 100%; height: 100%; background-size: contain; background-repeat: no-repeat; background-position: 50%"></div>')), e.descArr.push($('<li id="' + o + '">' + i + "</li>")) }), this.$title = $('<div class="vote-img-prev-title"><h1>' + s + '</h1><span class="vote-img-sing-double">(' + a + ")</span></div>"), v.append(this.$title), this.$slider = $('<div class="slides" style="width: ' + o + 'px;"></div>'); var m = $('<ul class="vote-img-desc"></ul>');
                        m.append(this.descArr), this.$slider.append(this.imgArr), this.loadPlugin = this.initSlider(m), v.append(this.$slider), this.$submit = $('<a class="btn-main">提交</a>'), v.append(this.$submit); var y = h();
                        this.$tpl = $(y).appendTo(v), this.updateButtonColor(l) } return v } }, { key: "updateButtonColor", value: function(e) { this.$submit.css({ backgroundColor: e }) } }, { key: "updateOptions", value: function(e, t) { this.plugin["goto"](t + 1), this.descArr[t].text(e.desc), this.imgArr[t].css({ backgroundImage: "url(" + c.FILE + e.src + ")" }) } }, { key: "updateTitle", value: function(e, t) { t = "single" == t ? "单选" : "多选", this.$title.find("h1").text(e), this.$title.find(".vote-img-sing-double").text("(" + t + ")") } }, { key: "initSlider", value: function(e) { var t = this; return this.$em = $('<span class="eqf-glyphicon-ok"></span>'), u().then(function() { return t.$slider.slidesjs({ width: 300, height: 329, navigation: { active: !1 }, callback: { loaded: function() { e.children().css({ display: "none" }), t.descArr[0].css({ display: "inline-block" }), t.$slider.append(e), t.$slider.find(".slidesjs-container").append(t.$em) }, start: function(e) {}, complete: function(n) { e.children().css({ display: "none" }), t.descArr[n - 1].css({ display: "inline-block" }); var i = t.descArr[n - 1].attr("id");
                                    t.descIds.indexOf(i) == -1 ? t.$em.removeClass("active") : t.$em.addClass("active") } } }), t.plugin = t.$slider.data("plugin_slidesjs"), t.plugin }) } }, { key: "bindAfterRenderEvent", value: function(e, t) { var n = this; return p() ? this.loadPlugin.then(function() { return n.isVoted() }).then(function() { n.$em.on("click", function(e) { e.preventDefault(), e.stopPropagation(); var i = n.descArr[n.plugin.data.current].attr("id");
                            n.descIds.indexOf(i) == -1 ? "single" == t.properties.selectType && 1 == n.descIds.length ? (n.descIds[0] = i, n.$em.addClass("active")) : "multi" == t.properties.selectType && n.descIds.length == t.properties.selectCount ? n.alertTpl("最多选择" + t.properties.selectCount + "项") : (n.descIds.push(i), n.$em.addClass("active")) : (n.descIds.splice(n.descIds.indexOf(i), 1), n.$em.removeClass("active")) }), n.$submit.on("click", function(e) { e.preventDefault(), e.stopPropagation(); var i = t.sceneId,
                                o = t.pageId;
                            n.descIds.length ? f(i, t.id, { pageId: o, data: JSON.stringify(n.descIds) }).then(function(e) { e.success && n.alertTpl("投票成功，谢谢参与！").then(function() { n.showVoted(e.map), n.$em.off(), n.$submit.off() }) }) : n.alertTpl("请至少选择一项") }) }) : this.$submit.css({ backgroundColor: "#f0f3f4", color: "#a3afb7" }).text("请在微信中投票"), !1 } }, { key: "showVoted", value: function(e) { var t = this;
                    this.descIds = [], this.$em.remove(), this.plugin.stop(), this.$slider.remove(); var n = {},
                        i = [],
                        o = 0;
                    this.compJson.properties.children.forEach(function(r) { var s = r.id,
                            a = r.desc;
                        n[s] = a, i.push({ id: s, count: e[s] || 0 }), o += e[s] || 0, e[s] && t.descIds.push(s) }); var r = $('<ul class="vote-img-ul"></ul>');
                    i.forEach(function(e) { r.append($("<li id = '" + e.id + '\' class="vote-img-li"><em style="float: right">' + e.count + " (" + (e.count / o * 100).toFixed(2) + " %)</em> " + n[e.id] + "</li>")) }), r.insertBefore(this.$submit), this.$submit.css({ backgroundColor: "#f0f3f4", color: "#a3afb7" }).text("你已投票") } }, { key: "alertTpl", value: function(e) { var t = this; return new Promise(function(n, i) { t.$tpl.find("span").text(e), t.$tpl.css({ opacity: 1, zIndex: 1001 }), window.setTimeout(function() { t.$tpl.css({ opacity: 0, zIndex: -2 }), n() }, 2e3) }) } }, { key: "isVoted", value: function() { var e = this; return new Promise(function(t, n) { if (e.compJson.properties.endTime && new Date(e.compJson.properties.endTime) < new Date && (e.$submit.css({ backgroundColor: "#f0f3f4", color: "#a3afb7" }).text("投票已过期"), n()), p()) { var i = e.compJson,
                                o = i.sceneId,
                                r = i.pageId,
                                s = i.id;
                            d(s, { sceneId: o, pageId: r }).then(function(i) { i.obj ? (e.showVoted(i.map), n()) : t() }) } else n() }) } }, { key: "startPlay", value: function() { var e = this;
                    this.playInterval = setInterval(function() { e.plugin && e.plugin.next() }, 5e3) } }, { key: "stopPlay", value: function() { this.playInterval && (clearInterval(this.playInterval), this.playInterval = null) } }, { key: "eleHide", value: function() { a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "eleHide", this).call(this), this.stopPlay() } }, { key: "eleShow", value: function() { a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "eleShow", this).call(this), this.startPlay() } }]), t }(l);
    e.exports = v }, function(e, t) {}, function(e, t, n) { e.exports = n.p + "defaultImg-f9d1d1.svg" }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function k(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : k(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) };
    n(273); var c = n(113),
        u = n(38),
        l = n(22).addUrlParam,
        p = n(23).isWeixin,
        h = n(23).isPc,
        d = n(77).getWxJSSDK,
        f = n(65).COMP_KEY,
        g = n(77).addCompKey,
        v = "ontouchstart" in window,
        m = v ? "touchstart" : "mousedown",
        y = v ? "touchmove" : "mousemove",
        b = v ? "touchend" : "mouseup",
        x = {},
        w = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return r.wxJssdk = d(), $.extend(!0, r.$ability, { style: { base: { self: !1 }, border: { self: !1 }, compFont: { self: !1 }, boxShadow: { self: !1 } }, trigger: !1, sound: !1, link: !1 }), r } return r(t, e), s(t, [{ key: "updateSize", value: function(e, n) { a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateSize", this).call(this, e, n), this.setCanvasSize(n.width, n.height); var i = this.compJson.properties.imgSrc;
                    i && (this.clearCanvas(), this.drawingImage(i)) } }, { key: "create$context", value: function() { var e = $('<div style="position: relative; height: 100%"></div>');
                    this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"); var t = this.compJson,
                        n = t.css,
                        i = n.width,
                        o = n.height,
                        r = t.properties,
                        s = r.imgSrc,
                        a = r.boardColor,
                        c = r.qiniuSrc; return this.setCanvasSize(i, o), this.setCanvasBgColor(a), s && this.drawingImage(s), c && (x[this.compJson.id] = c), this.$alert = $('<div class="board-bg" style="display: none"><span class="board-alert">正在保存...</span></div>'), this.$penBtn = $('<span class="board-pen"></span>'), this.$closeBtn = $('<span class="board-close" style="display: none"></span>'), e.append(this.$alert), e.append(this.$penBtn), e.append(this.$closeBtn), this.$cancelBtn = $('<a class="board-btn board-reset" style="display: none">取消</a>'), this.$endBtn = $('<a class="board-btn board-end" style="display: none">完成</a>'), e.append(this.$cancelBtn), e.append(this.$endBtn), e.append(this.canvas), e } }, { key: "setCanvasSize", value: function(e, t) { this.canvas.width = e, this.canvas.height = t } }, { key: "setCanvasBgColor", value: function(e) { this.canvas.style.backgroundColor = e } }, { key: "drawingImage", value: function(e, t) { var n = this.compJson.css,
                        i = n.width,
                        o = n.height,
                        r = "";
                    r = "base64" == t ? e : this.getImgSrc(e, { width: i, height: o }); var s = new Image;
                    s.setAttribute("crossOrigin", "anonymouse"); var a = this;
                    s.onload = function() { var e = 0,
                            t = 0,
                            n = i,
                            r = o;
                        this.width / i > this.height / o ? (n = this.width / (this.height / o), e = (i - n) / 2) : (r = this.height / (this.width / i), t = (o - r) / 2), a.ctx.drawImage(s, e, t, n, r) }, s.src = r } }, { key: "clearCanvas", value: function() { var e = this.compJson.css,
                        t = e.width,
                        n = e.height;
                    this.ctx.clearRect(0, 0, t, n) } }, { key: "bindAfterRenderEvent", value: function(e, t) { var n = this,
                        i = !1,
                        o = !1,
                        r = 0,
                        s = 0; return this.$penBtn.on("click", function() { return !i && (n.clearCanvas(), i = !0, n.$cancelBtn.css({ display: "inline-block" }), n.$endBtn.css({ display: "inline-block" }), n.$closeBtn.css({ display: "inline-block" }), !v && n.canvas.classList.add("boarding"), void 0) }), this.$cancelBtn.on("click", function() { n.clearCanvas(), i = !1, n.$cancelBtn.hide(), n.$endBtn.hide(), n.$closeBtn.hide(), !v && n.canvas.classList.remove("boarding"), n.compJson.properties.imgSrc && n.drawingImage(n.compJson.properties.imgSrc) }), this.$closeBtn.on("click", function() { n.clearCanvas() }), this.$endBtn.on("click", function() { i = !1, n.$cancelBtn.hide(), n.$endBtn.hide(), n.$closeBtn.hide(), !v && n.canvas.classList.remove("boarding"), "view" == n.eqxScene.config.mode && window == window.top && n.saveImage() }), this.canvas.addEventListener(m, function(e) { if (!i) return !1;
                        e.preventDefault(), e.stopPropagation(), o = !0; var t = n.canvas.getBoundingClientRect();
                        e = v ? e.targetTouches[0] : e, r = v ? e.pageX - t.left : e.offsetX, s = v ? e.pageY - t.top : e.offsetY + 20 }), this.canvas.addEventListener(y, function(e) { if (!i || !o) return !1; var a = n.canvas.getBoundingClientRect();
                        e = v ? e.targetTouches[0] : e; var c = v ? e.pageX - a.left : e.offsetX,
                            u = v ? e.pageY - a.top : e.offsetY + 20;
                        n.ctx.beginPath(), n.ctx.moveTo(r, s), n.ctx.lineTo(c, u), n.ctx.strokeStyle = t.properties.penColor, n.ctx.lineWidth = t.properties.penSize, n.ctx.lineCap = "round", n.ctx.stroke(), r = c, s = u }), this.canvas.addEventListener(b, function(e) { o = !1 }), this.canvas.addEventListener("mouseleave", function(e) { o = !1 }), !0 } }, { key: "saveImage", value: function() { var e = this;
                    this.$alert.show(), u.$getUploadToken("image").then(function(t) { var n = e.canvas.toDataURL("image/png"); return u.$uploadBase64(t.map.token, n.substring(22)) }).then(function(t) { return x[e.compJson.id] = t.key, u.$saveCompInfoByCompKey(f, x) }).then(function() { var t = l("compKey", f, window.location.href); if (p() ? e.wxJssdk.then(function() { g(t, f) }) : window.history.replaceState({ title: $("title").html(), url: t }, $("title").html(), t), h() && window.top === window) { var n = $("#codeImg");
                            n.length && (n.empty(), n.qrcode({ render: "canvas", width: 200, height: 200, text: t })) } e.$alert.hide() }) } }]), t }(c);
    e.exports = w }, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var o = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
    n(275), n(276); var r = n(277),
        s = n(278),
        a = n(52).isRightArrow,
        c = function() {
            function e(t) { i(this, e), this.$arrow = this.create$arrow(t) } return o(e, [{ key: "create$arrow", value: function(e) { return a(e) ? $(s) : $(r) } }, { key: "updatePageMode", value: function(e) { var t = this.create$arrow(e);
                    this.$arrow && (this.$arrow.replaceWith(t), this.$arrow = t, this.css && this.updateCss(this.css)) } }, { key: "updateCss", value: function(e) { this.css = e, this.$arrow.css(e) } }, { key: "remove", value: function() { this.$arrow.remove() } }]), e }();
    e.exports = c }, function(e, t) {}, function(e, t) {}, function(e, t) { e.exports = '<section class="u-arrow-bottom"><div class="pre-wrap-bottom"><div class="pre-box1"><div class="pre1"></div></div><div class="pre-box2"><div class="pre2"></div></div></div></section>' }, function(e, t) { e.exports = '<section class="u-arrow-right"><div class="pre-wrap-right"><div class="pre-box3"><div class="pre3"></div></div><div class="pre-box4"><div class="pre4"></div></div></div></section>' }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(117),
        c = n(119).RAW_EVENT,
        u = function(e) {
            function t(e, n, r) { i(this, t); var s = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r)); return s.removeEventListener(), s } return r(t, e), s(t, [{ key: "addEventListener", value: function() { this.addShakeEventListener() } }, { key: "removeEventListener", value: function() { this.removeShakeEventListener() } }, { key: "removeShakeEventListener", value: function() { this.shakeHandler && window.removeEventListener("devicemotion", this.shakeHandler, !1) } }, { key: "addShakeEventListener", value: function() { if (window.DeviceMotionEvent) { this.shakeAudio || (this.shakeAudio = document.createElement("audio"), this.shakeAudio.src = n(280)); var e = this,
                            t = 4e3,
                            i = 0,
                            o = 0,
                            r = 0,
                            s = 0,
                            a = 100;
                        this.shakeHandler = function(n) { var c = n.accelerationIncludingGravity,
                                u = c.x,
                                l = c.y,
                                p = c.z,
                                h = (new Date).getTime(); if (h - i > a) { var d = parseInt(h - i);
                                i = h; var f = Math.abs(u + l + p - o - r - s) / d * 1e4;
                                f > t ? (a = 2e3, e.shake()) : a = 100, o = u, r = l, s = p } }, window.addEventListener("devicemotion", this.shakeHandler, !1) } } }, { key: "shake", value: function() { var e = this,
                        t = this.master.pageJson.id,
                        n = this.triggerJson.sends.filter(function(e) { return e.type === c.shake });
                    this.shakeAudio.play(), setTimeout(function() { n.forEach(function(n) { e.publish(t, n) }) }, 500) } }]), t }(a);
    e.exports = u }, function(e, t, n) { e.exports = n.p + "wxShake-3a1ea8.mp3" }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var o = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        r = n(65).COMP_TYPE,
        s = n(65).FORM_COMPS,
        a = function() {
            function e() { var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                i(this, e), this.compJsonList = n, this.compNumMap = {}, Object.keys(r).forEach(function(e) { t.compNumMap[e] = 0 }) } return o(e, [{ key: "iterate", value: function() { var e = this;
                    this.compJsonList.forEach(function(t) { e.compNumMap[t.type] += 1 }) } }, { key: "getCountIds", value: function() { return this.countIdArr.join(",") } }, { key: "hasComp", value: function(e) { return !!this.compNumMap[e] } }, { key: "hasRedPacketComp", value: function() { return this.hasComp(9) } }, { key: "hasMapComp", value: function() { return this.hasComp("m") } }, { key: "hasChartComp", value: function() { return this.hasComp("t") } }, { key: "hasCommentComp", value: function() { return this.hasComp("b") } }, { key: "hasSubmitButtonComp", value: function() { return this.hasComp(6) || this.hasComp(601) } }, { key: "hasFormComp", value: function() { var e = this,
                        t = 0; return s.forEach(function(n) { t += e.compNumMap[n] }), !!t } }]), e }();
    e.exports = a }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var o = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        r = n(20),
        s = n(22).resolveUrl,
        a = n(283),
        c = n(41).parse,
        u = n(90),
        l = n(23),
        p = n(284),
        h = n(285),
        d = { none: 0, Gravity: 1, Parallax: 2 },
        f = function() {
            function e(t, n) { i(this, e), this.compJson = t, this.eqxScene = n.eqxScene; var o = this.eqxScene.config;
                o.EqxGravity.disableGravityMotion ? this.gravityMode = d.none : l.mobilecheck() ? this.gravityMode = d.Gravity : this.gravityMode = d.Parallax, this.gravityPromise = null, this.gravity = null } return o(e, [{ key: "updateBgHeight", value: function(e) { this.$gravity.css({ height: e }) } }, { key: "updateCss", value: function(e) { this.$gravity.css(e) } }, { key: "create$gravity", value: function() { var e = this,
                        t = this.compJson,
                        n = t.id,
                        i = t.properties.imgSrc,
                        o = t.css,
                        l = o.top,
                        f = o.left,
                        g = o.width,
                        v = o.height,
                        m = this.eqxScene,
                        y = m.width,
                        b = m.height; if (i) { var x = s(r.FILE, i),
                            w = $(c(a, { id: n, src: x }));
                        this.$gravity = w, this.gravityPromise = u.loadImg(x).then(function() { switch (w.find("img").css({ transform: "translate3d(" + f + "px," + l + "px,0)", width: g, height: v }), e.gravityMode) {
                                case d.Gravity:
                                    e.gravity = new h(n, $(w.find("img")), l, f, y, b), e.gravity.init(); break;
                                case d.Parallax:
                                    p(w, { innerW: g, innerH: v, outerW: y, outerH: b }) } }) } return this.$gravity } }, { key: "delete$gravity", value: function() { var e = this;
                    this.gravityMode === d.Gravity && this.gravityPromise && this.gravityPromise.then(function() { e.gravity.destroy() }), this.$gravity && this.$gravity.remove() } }, { key: "update$gravity", value: function() { this.delete$gravity(), this.create$gravity() } }]), e }();
    e.exports = f }, function(e, t) { e.exports = '<div id="wrapper-gravity#{id}" class="eqx-bg-img" style="position: absolute;z-index: 0;width: 100%;height:100%"><div class="layer" data-depth="0.5"><img src="#{src}" alt="" style="position:absolute"/></div></div>' }, function(e, t, n) { "use strict";

    function i(e, t) { o.$loadParallax().then(function() { var n = t.innerW,
                i = t.innerH,
                o = t.outerW,
                r = t.outerH,
                s = t.scalarX,
                a = void 0 === s ? 100 : s,
                c = t.scalarY,
                u = void 0 === c ? 100 : c;
            console.log("重力感应 Parallax Starts!", t); var l = { calibrateX: !0, calibrateY: !0, invertX: !0, invertY: !0, limitX: parseInt(n) - parseInt(o), limitY: parseInt(i) - parseInt(r), scalarX: a, scalarY: u, frictionX: 1, frictionY: 1, originX: .5, originY: .5 };
            new Parallax(e[0], l) }) } var o = n(21);
    e.exports = i }, function(e, t) { "use strict";

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var i = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        o = function() {
            function e(t, i, o, r, s, a) { n(this, e), this.id = t, this.bgHeight = 0, this.bgWidth = 0, this.offsetLeft = r, this.offsetTop = o, this.screenHeight = a, this.screenWidth = s, this.isFirst = !0, this.firstGamma = 0, this.firstBeta = 0, this.lastGama = 0, this.lastBeta = 0, this.targetLeft = 0, this.targetTop = 0, this.bg = i } return i(e, [{ key: "init", value: function() { var e = this;
                    e.targetLeft = e.nowLeft = e.offsetLeft, e.targetTop = e.nowTop = e.offsetTop, e.bindEvent(), e.requestAnimationFrame = e.requestAnimationFrame.bind(this), e.raf = requestAnimationFrame(e.requestAnimationFrame) } }, { key: "bindEvent", value: function() { var e = this;
                    $(window).on("deviceorientation." + e.id, function(t) { var n = t.originalEvent;
                        n.g = n.gamma, n.b = n.beta, e.isFirst && (e.bgHeight = e.bg.height(), e.bgWidth = e.bg.width(), e.nowGama = e.lastGama = e.firstGamma = n.g, e.nowBeta = e.lastBeta = e.firstBeta = n.b, e.isFirst = !1), (Math.abs(n.g - e.lastGama) > 3 || Math.abs(n.b - e.lastBeta) > 3) && (e.targetLeft = Math.round(e.offsetLeft + (e.firstGamma - n.g) * e.bgWidth / 180), e.targetTop = Math.round(e.offsetTop + (n.b - e.firstBeta) * e.bgHeight / 180), e.nowBeta = e.lastBeta = n.b, e.nowGama = e.lastGama = n.g, e.targetLeft >= 0 ? e.targetLeft = 0 : e.targetLeft < e.screenWidth - e.bgWidth && (e.targetLeft = e.screenWidth - e.bgWidth), e.targetTop >= 0 ? e.targetTop = 0 : e.targetTop < e.screenHeight - e.bgHeight && (e.targetTop = e.screenHeight - e.bgHeight)) }) } }, { key: "requestAnimationFrame", value: function(e) {
                    function t() { return e.apply(this, arguments) } return t.toString = function() { return e.toString() }, t }(function() { var e = 0,
                        t = 0,
                        n = this;
                    n.isFirst || (e = .1 * (n.targetLeft - n.nowLeft), t = .1 * (n.targetTop - n.nowTop), n.nowLeft += +e.toFixed(5), n.nowTop += +t.toFixed(5), n.bg.css({ transform: "translate3d(" + n.nowLeft + "px," + n.nowTop + "px,0)", "-ms-transform": "translate3d(" + n.nowLeft + "px," + n.nowTop + "px,0)", "-webkit-transform": "translate3d(" + n.nowLeft + "px," + n.nowTop + "px,0)" })), n.raf = requestAnimationFrame(n.requestAnimationFrame) }) }, { key: "destroy", value: function() { window.cancelAnimationFrame(this.raf), $(window).off("deviceorientation." + this.id) } }]), e }();
    e.exports = o }, function(e, t) {
    "use strict";
    var n = [{ name: "红包", types: ["9"] }, { name: "新文本", types: ["7"] }, { name: "文本", types: ["2", "x", "298", "299"] }, { name: "微信昵称", types: ["201"] }, { name: "背景", types: ["3"] }, {
        name: "图片",
        types: ["4"]
    }, { name: "微信头像", types: ["401"] }, { name: "微信照片", types: ["403"] }, { name: "输入框", types: ["5", "501", "502", "503", "504"] }, { name: "提交按钮", types: ["6", "601"] }, { name: "电话", types: ["8"] }, { name: "评分", types: ["a"] }, { name: "留言板", types: ["b"] }, { name: "复选框", types: ["c"] }, { name: "阅读量", types: ["d"] }, { name: "广告", types: ["g"] }, { name: "形状", types: ["h"] }, { name: "计数器", types: ["i"] }, { name: "链接", types: ["l"] }, { name: "地图", types: ["m"] }, { name: "随机图片", types: ["n"] }, { name: "图集", types: ["p"] }, { name: "单选框", types: ["r"] }, { name: "音效", types: ["s"] }, { name: "图表", types: ["t"] }, { name: "视频", types: ["v"] }, { name: "互动视频", types: ["o"] }, { name: "微信声音", types: ["w01", "w02"] }, { name: "下拉列表", types: ["z"] }, { name: "计时", types: ["e", "f"] }, { name: "投票", types: ["j", "k"] }, { name: "重力感应", types: ["q"] }, { name: "画板", types: ["u"] }, { name: "打赏", types: ["11"] }, { name: "随机事件", types: ["10"] }];
    e.exports = n
}, function(e, t) { "use strict";

    function n(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e) { var t, n = e.constructor === Array ? [] : {}; if ("object" === ("undefined" == typeof e ? "undefined" : r(e))) { if (window.JSON) t = JSON.stringify(e), n = JSON.parse(t);
            else
                for (var i in e) n[i] = "object" === r(e[i]) ? o(e[i]) : e[i]; return n } } var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function() {
            function e(t) { return i(this, e), this.page = t, this.oGroups = this.page.pageJson.groups = this.page.pageJson.groups || [], this.nGroups = [], this.items = [], this.updateItems(), this.updateGroupsIndex(), this.updateItemsByIndex(), this } return s(e, [{ key: "dragGroup2Group", value: function() { this.items.forEach(function(e) { if (!e.compJson) { var t = [];
                            e.comps.forEach(function(e) { return e.compJson ? t.push(e) : t.push.apply(t, n(e.comps)) }), e.comps = t } }) } }, { key: "formatCompsGap", value: function(e) { for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = 1; n < e.length; n++) { var i = e[n],
                            o = e[n - 1];
                        i.updatePos2(i.compJson.css.left, parseInt(o.compJson.css.top) + parseInt(o.compJson.css.height) + t) } } }, { key: "openFormGroup", value: function(e) { var t = !0; return e.forEach(function(e) { var n = e.type.toString(); "a" !== n && "z" !== n && "c" !== n && "r" !== n && "6" !== n && ["5", "501", "502", "503", "504"].indexOf(n) === -1 && (t = !1) }), t } }, { key: "deleteItems", value: function(e) { var t = this,
                        n = []; return e.forEach(function(e) { if (e.compJson) { var i = t.findCompInItemsById(e.compJson.id);
                            n.indexOf(i) === -1 && n.push(i) } else if (!e.compJson) { var o = t.items.findIndex(function(t) { return !t.compJson && 1 !== t.compIds.indexOf(e.compIds[0]) });
                            o !== -1 && t.items[o].comps.forEach(function(e) { return n.indexOf(e) === -1 && n.push(e) }) } }), n } }, { key: "findCompInItemsById", value: function(e) { for (var t = this.items, n = 0; n < t.length; n++) { var i = t[n]; if (i.compJson && i.compJson.id === e) return i; if (!i.compJson)
                            for (var o = i.comps, r = 0; r < o.length; r++) { var s = o[r]; if (s.compJson.id === e) return s } } return null } }, { key: "rmCompsByIds", value: function(e) { this.items = this.items.filter(function(t) { return t.compJson && e.indexOf(t.compJson.id) === -1 || !t.compJson }), this.items.forEach(function(t) { t.compJson || (t.comps = t.comps.filter(function(t) { return e.indexOf(t.compJson.id) === -1 })) }) } }, { key: "copyItems", value: function(e) { var t = this,
                        i = []; return e.slice().sort(function(e, t) { var n = e.compJson ? e.compJson.css.zIndex : e.index,
                            i = t.compJson ? t.compJson.css.zIndex : t.index; return n - i }).forEach(function(e) { if (e.compJson) { var o = t.copyComp(e);
                            o && i.push(o) && t.items.unshift(o) } else { var r = t.copyGroup(e);
                            r.length && i.push.apply(i, n(r)) } }), i } }, { key: "copyComp", value: function(e) { var t = JSON.parse(JSON.stringify(e.compJson)); if (t.css.left += 10, t.css.top += 10, delete t.id, delete t.css.zIndex, t = this.page.addCompJson(t)) { var n = this.page.initEqxCompByJson(t); if (n) return this.page.renderEqxComp(n), n.startAnimation({ maxCount: 1, reset: !0 }), n } return null } }, { key: "copyGroup", value: function(e) { var t = this,
                        n = []; return e.comps.slice().sort(function(e, t) { var n = e.compJson.css.zIndex,
                            i = t.compJson.css.zIndex; return n - i }).forEach(function(e) { var i = t.copyComp(e);
                        i && n.push(i) && t.items.unshift(i) }), this.groupComps(n), n } }, { key: "groupComps", value: function(e) { this.groupCompIds(e.map(function(e) { return e.compJson.id })), this.updateItems(), this.updateGroupsIndex(), this.updateItemsByIndex(), this.resetCompsIndexInItems(), this.updateGroupsIndex(), this.revertItems2Json() } }, { key: "unGroupComps", value: function(e) { this.rmGroupByCompId(e.comps[0].compJson.id), this.updateItems(), this.updateGroupsIndex(), this.updateItemsByIndex(), this.resetCompsIndexInItems(), this.updateGroupsIndex(), this.revertItems2Json() } }, { key: "revertItems2Json", value: function() { var e = [];
                    this.items.forEach(function(t) { if (!t.compJson) { var n = { name: t.name, compIds: t.comps.map(function(e) { return e.compJson.id }) };
                            1 === t.type && (n.type = t.type, n.settings = t.settings), e.push(n) } }), this.oGroups = this.page.pageJson.groups = e } }, { key: "rmEmptyGroups", value: function() { this.items = this.items.filter(function(e) { return e.compJson || e.comps.length }) } }, { key: "rmGroupByCompId", value: function(e) { this.oGroups.splice(this.oGroups.findIndex(function(t) { return t.compIds.indexOf(e) !== -1 }), 1) } }, { key: "findGroupByCompId", value: function(e) { return this.nGroups.find(function(t) { return t.compIds.indexOf(e) !== -1 }) } }, { key: "resetCompsIndexInItems", value: function() { var e = [];
                    this.items.forEach(function(t) { t.compJson ? e.push(t) : e.push.apply(e, n(t.comps)) }), this.page.resetZIndex(e) } }, { key: "groupCompIds", value: function(e) {!this.isHaveCompInGroup(e) && this.oGroups.push({ compIds: e, name: "组合" + (this.oGroups.length + 1) }) } }, { key: "isHaveCompInGroup", value: function(e) { var t = this.nGroups,
                        n = !1; return t.forEach(function(t) { e.forEach(function(e) { t.compIds.indexOf(e) !== -1 && (n = !0) }) }), n } }, { key: "updateItemsByIndex", value: function() { this.items.sort(function(e, t) { var n = e.compJson ? e.compJson.css.zIndex : e.index,
                            i = t.compJson ? t.compJson.css.zIndex : t.index; return i - n }) } }, { key: "updateGroupsIndex", value: function() { this.nGroups.forEach(function(e) { var t = 0;
                        e.comps.forEach(function(e) { var n = e.compJson;
                            t < n.css.zIndex && (t = n.css.zIndex) }), e.index = t }) } }, { key: "updateItems", value: function() { var e = this.page.eqxCompList,
                        t = this.nGroups = [],
                        i = this.items = [];
                    o(this.oGroups).forEach(function(n) { n.comps = n.compIds.map(function(t) { return e.find(function(e) { return e.compJson.id === t }) }), n.comps.sort(function(e, t) { return t.compJson.css.zIndex - e.compJson.css.zIndex }), t.push(n), i.push(n) }), i.push.apply(i, n(e.filter(function(e) { for (var n = 0; n < t.length; n++) { var i = t[n]; if (i.compIds.indexOf(e.compJson.id) !== -1) return !1 } return !0 }))) } }]), e }();
    e.exports = a }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

    function s(e) { var t = e.elements; return t.some(function(e) { var t = e.type,
                n = e.properties.croptype; return "EqxBackground" == l[t] && n == p["全屏背景模式"] }) } var a = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        c = function v(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : v(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        u = n(84),
        l = n(65).COMP_TYPE,
        p = n(67).BG_CROP_TYPE,
        h = n(52).isBottomArrow,
        d = n(52).PAGE_MODE,
        f = n(274),
        g = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
                    s = e.properties.longPage; return r.scrollMode = h(r.pageMode) ? "NS" : "WE", r.pLen = -(s - 486), r } return r(t, e), a(t, [{ key: "renderArrow", value: function() { c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "renderArrow", this).call(this), "WE" == this.scrollMode && (this.bottomArrow = new f(d["上下翻页"]), this.$pageDiv.append(this.bottomArrow.$arrow)) } }, { key: "addEventListener", value: function() { c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addEventListener", this).call(this), this.addTouchEvent() } }, { key: "active", value: function() { this.resetLongPage(); var e = c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "active", this).call(this); return e } }, { key: "resetLongPage", value: function() { this.touchPos = 0, this.doTransform(0, 0) } }, { key: "addTouchEvent", value: function() {
                    function e(e) { l.forEach(function(t) { var n = t.compJson.css.top || "";
                            n = parseInt(n.toString().replace("px", "")); var i = t.compJson.properties.anim || [];
                            i.length && n > o && n + e < o && !t.displayed && t.eleShow() }) } var t = this,
                        n = this; if ("edit" !== this.eqxScene.config.mode) { var i = this.pLen,
                            o = this.height,
                            r = this.$pageDiv,
                            a = this.$ul,
                            c = this.$editDiv,
                            u = this.scrollMode,
                            l = this.eqxCompList,
                            p = this.$transformArea = s(this.pageJson) ? c : a;
                        this.touchPos = 0; var h, d, f, g, v, m = 0,
                            y = 0,
                            b = 0;
                        r.on("mousedown touchstart", function(e) { if (!n.hasCoverEffect) { e.stopPropagation(), h = !0, f = 0; var t = e.originalEvent,
                                    i = t.touches,
                                    o = i ? t.changedTouches[0] : null;
                                d = o ? o.clientY : e.clientY, "WE" == u && (g = o ? o.clientX : e.clientX), y = n.touchPos, m = Date.now() } }), r.on("mousemove touchmove", function(o) { var r = t.eqxScene.pageScroll; if (o.stopPropagation(), o.preventDefault(), h) { var s = o.originalEvent,
                                    a = s.touches,
                                    c = a ? a[0] : null; if (f = n.touchPos + (c ? c.clientY : o.clientY) - d, "WE" === u && (v = (c ? c.clientX : o.clientX) - g, Math.abs(v) > Math.abs(f - n.touchPos) && !t.forbidHandFlip)) return v > 0 ? r.goToPrePage() : r.goToNextPage(), void(h = !1); if (f > 0 && "NS" === u && !t.forbidHandFlip) return r.goToPrePage(), h = !1, void(n.touchPos = 0); if (f > i && f < 0) e(f), n.doTransform(f, 0);
                                else if (f < i - 5 && "NS" === u && !t.forbidHandFlip) return r.goToNextPage(), h = !1, void(n.touchPos = i);
                                b = Date.now(), b - m > 300 && (m = b, y = f) } }), r.on("mouseup touchend mouseleave", function() { if (h = !1, f > i && f < 0) { var e = Date.now(),
                                    t = (f - y) / (e - m),
                                    o = Math.abs(t / .002),
                                    r = t * o / 2;
                                f += r, f > 0 ? (o = (f - 0) / r * o, f = 0) : f < i && (o = (f - i) / r * o, f = i), n.doTransform(f, o), n.touchPos = f, n.bottomArrow && (n.bottomArrow.remove(), n.bottomArrow = null) } else f > 0 ? n.touchPos = 0 : f <= i && (n.touchPos = i), n.doTransform(n.touchPos, 0) }), p.on("transitionend", function(t) { t.target == p[0] && e(f) }) } } }, { key: "doTransform", value: function(e, t) { var n = this; if ("edit" !== this.eqxScene.config.mode) { var i = this.$transformArea,
                            o = i.find(".alock"); if (this.transformEle(i, "translate3d(0," + e + "px,0)", t), o.length > 0) { var r, s, a = Array.prototype.slice.call(o);
                            a.forEach(function(i) { r = i.style.transform.replace(/translate3d\(.*?\)/g, ""), s = "none" === r && r ? "translate3d(0," + -e + "px,0)" : "translate3d(0," + -e + "px,0) " + r, n.transformEle($(i), s, t) }) } } } }, { key: "transformEle", value: function(e, t, n) { if ("edit" !== this.eqxScene.config.mode) { if (e.css({ transition: "", "-webkit-transition": "" }), n) { var i = "transform " + n + "ms ease-out";
                            e.css({ transition: i, "-webkit-transition": "-webkit-" + i }) } e.css({ transform: t, "-webkit-transform": "-webkit-" + t }) } } }]), t }(u);
    e.exports = g }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

    function s(e, t, n) { var i = l.TRACK + "p.gif?",
            o = encodeURIComponent,
            r = document,
            s = { order_no: e, task_id: t, scene_id: n };
        i += "data=" + o(JSON.stringify(s)); var a = r.createElement("img");
        $(a).attr({ src: i, width: 0, height: 0 }), r.body.appendChild(a) } var a = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        c = function d(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : d(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        u = n(84),
        l = n(20),
        p = n(79).bigDataXBData,
        h = function(e) {
            function t(e, n) { return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)) } return r(t, e), a(t, [{ key: "show", value: function() { c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this); var e = this.pageJson.properties.xb; if (e) { if (!this.eqxScene.config.disableBigData) { var n = { task: e.taskId, order: e.orderId, promotionType: e.promotionType };
                            p(this.pageJson.sceneId, "3", n) } s(e.orderId, e.taskId, e.sceneId) } return this } }]), t }(u);
    e.exports = h }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var o = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
    n(291); var r = function() {
        function e(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            i(this, e); var o = this.$progress = $('<div class="eqx-progress-bar"></div>'),
                r = this.$progressBar = $("<span></span>"),
                s = this.$slideNumber = $('<em class="page-tip"></em>');
            o.append([r, s]), this.lastText = "", this.update(n, t) } return o(e, [{ key: "update", value: function(e, t) { var n = e + "/" + t; if (n !== this.lastText) { this.lastText = n, this.$slideNumber.text(n); var i = 320;
                    this.$progressBar.css("width", i * e / t) } } }, { key: "hide", value: function() { this.$progress.hide() } }, { key: "show", value: function() { this.$progress.show() } }]), e }();
    e.exports = r }, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var o = n(23),
        r = o.mobilecheck,
        s = o.tabletCheck,
        a = n(52).isBottomArrow,
        c = n(52).isRightArrow,
        u = n(52).PAGE_MODE,
        l = function h(e) { i(this, h), this.eqxScene = e; var t = e.meta.pageMode,
                n = e.meta.property,
                o = n.forbidHandFlip,
                a = n.triggerLoop,
                c = n.autoFlip,
                l = n.autoFlipTime,
                p = void 0 === l ? 1 : l;
            this._$app = e.$ele, this.left = this._$app.offset().left, this.top = this._$app.offset().top, this.pageList = e.eqxPageList, e.currentPage = e.currentPage || this.pageList[0], this.activePage = null, this._isDisableFlipPage = !1, this._isDisableFlipPrevPage = !1, this._isDisableFlipNextPage = !1, this._scrollMode = t, this.canHandleFlip = o, this.canAutoFlip = c, this.autoFlipInterval = p, this.autoFlipIntervalId = null, this.doScrollMoveFn = null, this.doScrollEndFn = null, this.canLoop = a, this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, r() || s() || (this.windowWidth = e.width, this.windowHeight = e.height), this.startX = 0, this.startY = 0, this.moveDistanceX = 0, this.moveDistanceY = 0, this.isStart = !1, this.isNext = !1, this.isFirstTime = !0, this.flipEndTimeout = 800, this.animTime = .4, this.scrolling = !1, this._scrollMode == u["翻书翻页"] && ($(this.eqxScene.currentPage.section).css({ width: this._$app.width(), height: this._$app.height() }).wrap('<div class="flip-mask"></div>'), this.$turn = $('<div class="turning"></div>').appendTo(this._$app)), this.$con = $("#con"), this.bindEventListeners(e) };
    e.exports = l; var p = l.prototype;
    p.startAudio = function() { this._$app.one("touchstart", function() {}) }, p.bindEventListeners = function(e) { var t = this;
        this.setScrollMode(this._scrollMode), this.canAutoFlip && this.startAutoFlip(),
            function() { var e = $(window);
                e.on("scroll.elasticity", function(e) { e.preventDefault() }).on("touchmove.elasticity", function(e) { e.preventDefault() }), e.delegate("img", "mousemove", function(e) { e.preventDefault() }) }(); var n = !1;
        this._$app.on("mousedown touchstart", function(e) { t.canHandleFlip || (t.scrollStart(e), n = !0) }).on("mousemove touchmove", function(e) { t.canHandleFlip || n && t.scrollMove(e) }).on("mouseup touchend mouseleave", function(e) { t.canHandleFlip || (t.scrollEnd(e), n = !1) }), $(this).on("flipend", function(e) { t.eqxScene.updateProgressBar(t.activePage), setTimeout(function() { t.cssAnimation(t.eqxScene.currentPage.section.style, "Transition", "none"), t.activePage.deactive().show(), t.eqxScene.currentPage.destroyed || t.eqxScene.currentPage.deactive().hide(), t.eqxScene.currentPage = t.activePage, t._isDisableFlipPage = !1, t._scrollMode != u["放大翻页"] && t._scrollMode != u["交换翻页"] && t._scrollMode != u["掉落翻页"] || ($(t.eqxScene.currentPage.section).css("z-index", "1"), $(".main-page").attr("style", "")) }, t.flipEndTimeout) }), $(document).on("startAutoFlip", function(e) { t.canAutoFlip && t.startAutoFlip() }) }, p.cssAnimation = function(e, t, n) { for (var i = ["", "webkit", "moz"], o = 0, s = i.length; o < s; o++) { 0 != o || r() || (t = t.substring(0, 1).toLowerCase() + t.substring(1, t.length)); var a = n instanceof Array ? n[o] : n,
                c = i[o] + t;
            e[c] = a } }, p.cssAnim = function(e, t, n) { for (var i = ["", "-webkit-", "-moz-"], o = 0; o < i.length; o++) e.css(i[o] + t, n) }, p.getCoord = function(e) { return e && e.type.includes("mouse") ? { x: e.pageX - this.left, y: e.pageY - this.top } : e && e.type.includes("touch") ? { x: e.touches ? e.touches[0].pageX : e.originalEvent.touches[0].pageX, y: e.touches ? e.touches[0].pageY : e.originalEvent.touches[0].pageY } : void 0 }, p.getMoveInit = function(e, t, n, i) { var o = this.activePage; if (o && o.deactive(), o && o.section.classList.contains("main-page")) { o.active(); var r = e ? "-" : "";
            o.section.style.webkitTransition = "none", o.section.style.mozTransition = "none", o.section.style.transition = "none", o.section.style.webkitTransform = n + "(" + r + i + "px)", o.section.style.mozTransform = n + "(" + r + i + "px)", o.section.style.transform = n + "(" + r + i + "px)", $(this.activePage.section).trigger("active"), t && this.cssAnim($(this.eqxScene.currentPage.section), "transform-origin", t) } else this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", n + "(0px) scale(1)") }, p.setCssWhenMove = function(e, t, n, i, o) { if (this.activePage) { var r = e ? "-" : "";
            this.cssAnim($(this.activePage.section), "transform", t + "(" + r + (n - Math.abs(i)) + "px)"), o != u["上下惯性翻页"] && o != u["左右惯性翻页"] || this.cssAnim($(this.eqxScene.currentPage.section), "transform", "scale(" + ((n - Math.abs(i)) / this.windowHeight).toFixed(3) + ")"), o != u["左右连续翻页"] && o != u["上下连续翻页"] || this.cssAnim($(this.eqxScene.currentPage.section), "transform", t + "(" + i + "px)") } }, p.setCssWhenEnd = function(e, t, n, i) { if (i == u["上下惯性翻页"] || i == u["左右惯性翻页"]) this.cssAnim($(this.eqxScene.currentPage.section), "transform", "scale(0.2)");
        else if (i == u["左右连续翻页"] || i == u["上下连续翻页"]) { var o = t > 0 ? "" : "-";
            this.cssAnim($(this.eqxScene.currentPage.section), "transform", e + "(" + o + n + "px)") } else this.cssAnim($(this.eqxScene.currentPage.section), "transform", "scale(1)");
        this.cssAnim($(this.activePage.section), "transform", e + "(0px)") }, p.cancelFlip = function() { var e = this;
        this._isDisableFlipPage = !0; var t;
        this.setScrollFn(), this._scrollMode != u["上下翻页"] && this._scrollMode != u["上下惯性翻页"] && this._scrollMode != u["立体翻页"] && this._scrollMode != u["交换翻页"] && this._scrollMode != u["上下连续翻页"] && this._scrollMode != u["掉落翻页"] || (t = this.moveDistanceY > 0 ? -this.windowHeight : this.windowHeight, this.cssAnim($(this.activePage.section), "transform", "translateY(" + t + "px)"), this.cssAnim($(this.eqxScene.currentPage.section), "transform", "translateY(0) scale(1)")), this._scrollMode != u["左右惯性翻页"] && this._scrollMode != u["左右连续翻页"] || (t = this.moveDistanceX > 0 ? -this.windowWidth : this.windowWidth, this.cssAnim($(this.activePage.section), "transform", "translateX(" + t + "px)"), this.cssAnim($(this.eqxScene.currentPage.section), "transform", "translateX(0) scale(1)")), setTimeout(function() { $(e.eqxScene.currentPage.section).attr("style", ""), $(e.activePage.section).attr("style", ""), e.activePage.deactive(), e._isDisableFlipPage = !1 }, 500) }, p.scrollStart = function(e) { if (!this._isDisableFlipPage && (this.scrolling || (this.activePage = null), this.eqxScene.currentPage)) { this.isStart = !0, this.isNext = !1, this.isFirstTime = !0, this.moveDistanceX = 0, this.moveDistanceY = 0; var t = this.getCoord(e);
            t && (this.startX = t.x, this.startY = t.y), this.cssAnimation(this.eqxScene.currentPage.section.style, "Transition", "none"), this._scrollMode == u["掉落翻页"] && (this.eqxScene.currentPage.section.style.zIndex = 3) } }, p.enableScroll = function() { return this.isStart && this.pageList.length > 1 && !this.eqxScene.currentPage.hasCoverEffect }, p.scrollMove = function(e) { if (this.enableScroll()) { var t = this.getCoord(e);
            t && (this.moveDistanceX = t.x - this.startX, this.moveDistanceY = t.y - this.startY), this.setScrollFn(), this.doScrollMoveFn() } }, p.scrollEnd = function(e) { this.scrolling = !1, this.isStart && (this.isStart = !1, this.activePage && (this._isDisableFlipPage = !0, this.setScrollEndAnim(), this.setScrollFn(), this.doScrollEndFn())) }, p.setScrollFn = function() { var e = ""; switch (this._scrollMode) {
            case u["上下翻页"]:
            case u["上下惯性翻页"]:
                e = "vertical"; break;
            case u["左右翻页"]:
            case u["左右惯性翻页"]:
                e = "horizontal"; break;
            case u["左右连续翻页"]:
                e = "single"; break;
            case u["立体翻页"]:
                e = "cube"; break;
            case u["卡片翻页"]:
                e = "card"; break;
            case u["放大翻页"]:
                e = "scale"; break;
            case u["交换翻页"]:
                e = "swap"; break;
            case u["上下连续翻页"]:
                e = "verticalSingle"; break;
            case u["掉落翻页"]:
                e = "fall"; break;
            case u["淡入翻页"]:
                e = "fadeIn"; break;
            case u["翻书翻页"]:
                e = "book"; break;
            case u["上下推出翻页"]:
                e = "push"; break;
            case u["左右推出翻页"]:
                e = "push"; break;
            case u["折叠翻页"]:
                e = "flip"; break;
            default:
                e = "vertical" } var t = n(293)("./" + e);
        this.doScrollMoveFn = t[e + "Move"].bind(this), this.doScrollEndFn = t[e + "End"].bind(this) }, p.getCurAndActive = function(e) { if (this.scrolling) return this.activePage; var t = null,
            n = this.pageList.indexOf(this.eqxScene.currentPage),
            i = this.pageList.length - 1; return e ? n > 0 ? t = this.pageList[n - 1] : this.canLoop && (t = this.pageList[i]) : n < i ? t = this.pageList[n + 1] : this.canLoop && (t = this.pageList[0]), t }, p.setTransition = function(e, t, n) { e.style.webkitTransition = "-webkit-transform " + t + "s " + n, e.style.mozTransition = "-moz-transform " + t + "s " + n, e.style.transition = "transform " + t + "s " + n }, p.setScrollEndAnim = function() { var e;
        this._scrollMode != u["立体翻页"] && this._scrollMode != u["卡片翻页"] || (e = "cubic-bezier(0,0,0.99,1)"), e = this._scrollMode == u["掉落翻页"] ? "cubic-bezier(.17,.67,.87,.13)" : "linear", this._scrollMode != u["翻书翻页"] && (this.setTransition(this.eqxScene.currentPage.section, this.animTime, e), this.setTransition(this.activePage.section, this.animTime, e)) }, p.setScrollMode = function(e) { _DEBUG_, this._scrollMode !== e && (this._scrollMode = e, this._scrollMode == u["放大翻页"] || this._scrollMode == u["交换翻页"] ? (this.animTime = .7, this.flipEndTimeout = 800) : this._scrollMode == u["翻书翻页"] ? ($(this.eqxScene.currentPage.section).css({ width: this._$app.width(), height: this._$app.height() }).wrap('<div class="flip-mask"></div>'), this.$turn = $('<div class="turning"></div>').appendTo(this._$app)) : this.$turn && ($(this.eqxScene.currentPage.section).unwrap('<div class="flip-mask"></div>'), this.$turn.remove(), this.$turn = null)) }, p.startAutoFlip = function() { var e = this;
        this.pauseAutoFlip(), this.canAutoFlip && (this.autoFlipIntervalId = setInterval(function() { e.goToNextPage() }, 1e3 * this.autoFlipInterval)) }, p.pauseAutoFlip = function() { this.autoFlipIntervalId && clearInterval(this.autoFlipIntervalId) }, p.setAutoFlipTime = function(e) { this.autoFlipInterval = e }, p.setAutoFlip = function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.canAutoFlip = !!e }, p.goToPageById = function(e) { if (!this._isDisableFlipPage) { this.scrolling = !0; var t, n = this.pageList.find(function(t) { return e == t.pageJson.id }); if (n) { t = n.pageJson.num; var i = this.eqxScene.currentPage.pageJson.num,
                    o = this.pageList[t - 1];
                o && i != t && (this.activePage = o, i > t ? this.goToPrePage() : i < t && this.goToNextPage()) } } }, p.goToPageByIndex = function(e) { var t = this.pageList[e];
        t && this.goToPageById(t.pageJson.id) }, p.goToLastPage = function() { this.goToPageByIndex(this.pageList.length - 1) }, p.goToPrePage = function() { var e = this;
        this._scrollMode == u["翻书翻页"] && (this.startX = 0, this.startY = 0); var t = 0;
        this.scrollStart(); var n = setInterval(function() { t += 2, a(e._scrollMode) && (e.moveDistanceY = t), c(e._scrollMode) && (e.moveDistanceX = t), e.scrollMove(), t >= 21 && (clearInterval(n), e.scrollEnd()) }, 2) }, p.goToNextPage = function() { var e = this;
        this._scrollMode == u["翻书翻页"] && (this.startX = this._$app.width(), this.startY = this._$app.height()); var t = 0;
        this.scrollStart(); var n = setInterval(function() { t -= 2, a(e._scrollMode) && (e.moveDistanceY = t), c(e._scrollMode) && (e.moveDistanceX = t), e.scrollMove(), t <= -21 && (clearInterval(n), e.scrollEnd(), e.canLoop || e.activePage || clearInterval(e.autoFlipIntervalId)) }, 2) }, p.setHandleFlip = function(e) { this.canHandleFlip = e }, p.disableHandleFlip = function() { this.setHandleFlip(!1) }, p.enableHandleFlip = function() { this.setHandleFlip(!0) }, p.setLoop = function(e) { this.canLoop = e, this.canAutoFlip && this.startAutoFlip() } }, function(e, t, n) {
    function i(e) { return n(o(e)) }

    function o(e) { return r[e] || function() { throw new Error("Cannot find module '" + e + "'.") }() } var r = { "./PageScroll": 292, "./PageScroll.js": 292, "./book": 294, "./book.js": 294, "./book.scss": 295, "./card": 296, "./card.js": 296, "./cube": 297, "./cube.js": 297, "./fadeIn": 298, "./fadeIn.js": 298, "./fall": 299, "./fall.js": 299, "./flip": 300, "./flip.js": 300, "./horizontal": 301, "./horizontal.js": 301, "./push": 302, "./push.js": 302, "./scale": 303, "./scale.js": 303, "./single": 304, "./single.js": 304, "./swap": 305, "./swap.js": 305, "./vertical": 306, "./vertical.js": 306, "./verticalSingle": 307, "./verticalSingle.js": 307 };
    i.keys = function() { return Object.keys(r) }, i.resolve = o, e.exports = i, i.id = 293 }, function(e, t, n) { "use strict";

    function i() { if (v = this, this.$flipMask = this.eqxScene.currentPage.$section.parent(), this.moveDistanceX < 0 ? o() : this.moveDistanceX > 0 && r(), this.activePage) { var e = { x: v.moveDistanceX + v.startX, y: v.moveDistanceY + v.startY };
            s(e) } }

    function o() { v.isFirstTime && (v.isFirstTime = !1, g && f ? v.isRightCenterDragging = !0 : v.startY >= v._$app.height() / 2 ? v.isBottomRightDragging = !0 : v.startY < v._$app.height() / 2 && (v.isTopRightDragging = !0), v.activePage = v.getCurAndActive(!1), l(), v.activePage && (v.$flipMask.css({ zIndex: 100, display: "block" }), v.activePage.active(), v.isBottomRightDragging ? (v.eqxScene.currentPage.$section.css({ top: v.$flipMask.height() - v._$app.height() + "px", left: "0px" }), v.$flipMask.css({ top: "-" + (v.$flipMask.height() - v._$app.height()) + "px" }), v.$turn.css({ transformOrigin: "0% 100% 0px", left: v._$app.width() + "px", top: v._$app.height() + "px" })) : v.isTopRightDragging ? v.$turn.css({ top: "0px", left: v._$app.width() + "px", transformOrigin: "0% 0% 0px" }) : v.isRightCenterDragging && (v.eqxScene.currentPage.$section.css({ top: "0px", left: $(this).width() - v._$app.width() + "px" }), v.$flipMask.css({ top: "0px", left: -(v.$flipMask.width() - v._$app.width()) + "px" }), v.$turn.css({ transformOrigin: "0% 100% 0px", left: v._$app.width() + "px", top: "0px" })))) }

    function r() { v.isFirstTime && (v.isFirstTime = !1, v.isLeftCenterDragging = !0, v.activePage = v.getCurAndActive(!0), l(), v.activePage && (v.$flipMask.css({ display: "block" }), v.activePage.active(), v.$turn.css({ top: "0px", left: "0px", transformOrigin: "0% 0% 0px" }))) }

    function s(e) { var t = e,
            n = 0,
            i = 0,
            o = 0,
            r = 0,
            s = 0,
            c = 0,
            u = 0,
            l = 0,
            p = 0,
            h = 0,
            d = 0,
            f = 0,
            g = 0,
            m = 0,
            y = 0,
            b = 0;
        v.isBottomRightDragging || v.isTopRightDragging ? (n = v._$app.width() - t.x, v.isBottomRightDragging ? i = Math.abs(v._$app.height() - t.y) : v.isTopRightDragging && (i = t.y), o = i / n, r = i / Math.sqrt(n * n + i * i), s = Math.sqrt(1 - r * r), c = Math.sqrt(n * n + i * i) / 2, u = c * o, l = Math.sqrt(u * u + c * c), p = l / o, h = 180 * Math.atan(o) / Math.PI > 0 ? 180 * Math.atan(o) / Math.PI : 0, d = (v._$app.width() - l) * s, f = (v._$app.width() - l) * r * s, g = (v._$app.width() - l) * (1 - r * r), d >= 1 && (v.isBottomRightDragging ? (h > 1 ? v.$turn.css({ width: l + "px", height: p + "px", backgroundColor: "#ff0000", background: "-webkit-linear-gradient(" + (180 - h) + "deg, #fff 10%, #d1cfc7 40%, #f2eee2 50%, transparent 50%, transparent 100%)", transform: "translateX(-" + (l - 3) + "px) translateY(-" + (p - 3) + "px) rotate(" + 2 * h + "deg) scaleX(-1)" }) : a(v.$turn, t, v._$app.width(), v._$app.height()), b = "0% 100% 0px", m = "rotate(-" + (90 - h) + "deg) translateY(" + d + "px)", y = "rotate(" + (90 - h) + "deg) translateY(-" + f + "px) translateX(-" + g + "px)") : v.isTopRightDragging && (h > 1 ? v.$turn.css({ width: l + "px", height: p + "px", backgroundColor: "#000", background: "-webkit-linear-gradient(-" + (180 - h) + "deg, #fff 10%, #d1cfc7 40%, #f2eee2 50%, transparent 50%, transparent 100%)", transform: "translateX(-" + (l - 2) + "px) rotate(-" + 2 * h + "deg) scaleX(-1)" }) : a(v.$turn, t, v._$app.width(), v._$app.height()), b = "0% 0% 0px", m = "rotate(" + (90 - h) + "deg) translateY(-" + d + "px)", y = "rotate(-" + (90 - h) + "deg) translateY(" + f + "px) translateX(-" + g + "px)"), v.$flipMask.css({ zIndex: 100, transformOrigin: b, transform: m }), v.eqxScene.currentPage.$section.css({ transformOrigin: b, transform: y }))) : v.isRightCenterDragging ? (v.$turn.css({ width: (v._$app.width() - t.x) / 2 + "px", height: v._$app.height() + "px", left: t.x + "px", background: "-webkit-linear-gradient(left, #fff 0% , #d1cfc7 15%, #f2eee2 85%, #fff 100%)" }), v.$flipMask.css({ transformOrigin: "0% 50% 0px", left: 0, transform: "translateX(-" + (v.$flipMask.width() - t.x) + "px)" }), v.eqxScene.currentPage.$section.css({ transformOrigin: "0% 50% 0px", transform: "translateX(" + (v.$flipMask.width() - t.x) + "px)" })) : v.isLeftCenterDragging && (v.$flipMask.css({ zIndex: 100, transformOrigin: "0% 50% 0px", transform: "translateX(" + t.x + "px)" }), v.eqxScene.currentPage.$section.css({ transformOrigin: "0% 50% 0px", transform: "translateX(-" + t.x + "px)" }), v.$turn.css({ width: v._$app.width() - t.x + "px", height: v._$app.height() + "px", left: -(v._$app.width() - 2 * t.x) + "px", background: "-webkit-linear-gradient(left, #fff 0% , #d1cfc7 15%, #f2eee2 85%, #fff 100%)" })) }

    function a(e, t, n, i) { e.css({ width: (n - t.x + 6) / 2 + "px", height: i + "px", top: 0, left: t.x + 2 + "px", background: "-webkit-linear-gradient(left, #fff 0% , #d1cfc7 10%, #f2eee2 90%, #fff 100%)", transform: "", border: 0 }) }

    function c() { v = this; var e, t, n, i = 16,
            o = v.moveDistanceX + v.startX,
            r = v.moveDistanceY + v.startY;
        v.isBottomRightDragging ? (e = -v._$app.width(), t = v._$app.height(), n = setInterval(function() { o = o - e <= i ? o : o - i, r = t - r <= i ? r : r + i, s({ x: o, y: r }), o - e <= i && r - t <= i && (clearInterval(n), u()) }, 16)) : v.isTopRightDragging ? (e = -v._$app.width(), t = 0, n = setInterval(function() { o = o - e <= i ? o : o - i, r = r - t <= i ? r : r - i, s({ x: o, y: r }), o - e <= i && r - t <= i && (clearInterval(n), u()) }, 16)) : v.isRightCenterDragging ? (i = 5, e = -v._$app.width(), n = setInterval(function() { o = o - e <= i ? o : o - i, s({ x: o, y: r }), o - e <= i && (clearInterval(n), u()) }, 16)) : v.isLeftCenterDragging && (i = 3, e = v._$app.width(), t = 0, n = setInterval(function() { o = e - o <= i ? o : o + i, s({ x: o, y: r }), e - o <= i && (clearInterval(n), u()) }, 16)) }

    function u() { v.isBottomRightDragging = null, delete v.isBottomRightDragging, v.isTopRightDragging = null, delete v.isTopRightDragging, v.isRightCenterDragging = null, delete v.isRightCenterDragging, v.isLeftCenterDragging = null, delete v.isLeftCenterDragging, v.$flipMask = null, delete v.$flipMask, v.eqxScene.currentPage.$section.unwrap(), v.eqxScene.currentPage.$section.css({ transform: "", top: 0, left: 0 }), v.$turn.css({ width: 0, height: 0, top: 0, left: 0, transform: "", background: "none" }), $(v).trigger("flipend") }

    function l() { v.activePage && $(v.activePage.section).css({ width: v._$app.width(), height: v._$app.height() }).wrap('<div class="flip-mask"></div>') } var p = n(23),
        h = p.mobilecheck,
        d = p.isAndroid,
        f = d(),
        g = h();
    n(295), e.exports = { bookMove: i, bookEnd: c }; var v }, function(e, t) {}, function(e, t) {
    "use strict";

    function n() {
        if (Math.abs(this.moveDistanceY) > Math.abs(this.moveDistanceX))
            if (this.moveDistanceY > 0) { if (this._isDisableFlipNextPage) return;
                this.isNext && !this.isFirstTime || (this.isNext = !0, this.isFirstTime = !1, this.activePage && this.activePage.deactive(), this.activePage = this.getCurAndActive(!0), this.cssAnim(this.$con, "perspective", "700px"), this.cssAnim(this.$con, "transform-style", "preserve-3d"), this.cssAnimation(this.activePage.section.style, "TransformOrigin", "top"), this.cssAnimation(this.activePage.section.style, "Transform", "rotateX(90deg)")), this.activePage.section && this.activePage.section.classList.contains("main-page") && (this.activePage.active(), this.cssAnimation(this.activePage.section.style, "Transform", "rotateX(" + (90 - this.moveDistanceY / this.windowHeight * 90) + "deg) ")) } else if (this.moveDistanceY < 0) {
            if (this._isDisableFlipNextPage) return;
            this.isNext && !this.isFirstTime || (this.isNext = !0, this.isFirstTime = !1, this.activePage && this.activePage.deactive(),
                this.activePage = this.getCurAndActive(!1), this.cssAnimation(this.activePage.section.style, "TransformOrigin", "bottom"), this.cssAnimation(this.activePage.section.style, "Transform", "rotateX(-90deg)"), this.cssAnim(this.$con, "perspective", "700px"), this.cssAnim(this.$con, "transform-style", "preserve-3d")), this.activePage.section && this.activePage.section.classList.contains("main-page") ? (this.activePage.active(), this.cssAnimation(this.activePage.section.style, "Transform", "rotateX(" + (-90 - this.moveDistanceY / this.windowHeight * 90) + "deg) ")) : (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "translateX(0px) scale(1)"), this.activePage.section = null)
        }
    }

    function i() { Math.abs(this.moveDistanceY) > Math.abs(this.moveDistanceX) && Math.abs(this.moveDistanceY) > 20 ? (this.moveDistanceY > 0 ? this.cssAnimation(this.activePage.section.style, "Transform", "rotateX(0deg)") : this.cssAnimation(this.activePage.section.style, "Transform", "rotateX(0deg)"), $(this).trigger("flipend")) : (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transition", "none"), this.cssAnimation(this.activePage.section.style, "Transition", "none"), this._isDisableFlipPage = !1, this.cancelFlip()) } e.exports = { cardMove: n, cardEnd: i }
}, function(e, t) { "use strict";

    function n() { if (Math.abs(this.moveDistanceY) > Math.abs(this.moveDistanceX))
            if (this.moveDistanceY > 0) { if (this._isDisableFlipNextPage) return;
                this.isNext && !this.isFirstTime || (this.isNext = !0, this.isFirstTime = !1, this.activePage && this.activePage.deactive(), this.activePage = this.getCurAndActive(!0), this.cssAnimation(this.activePage.section.style, "Transform", "rotateX(90deg) translateY(-" + this.windowHeight / 2 + "px) translateZ(" + this.windowHeight / 2 + "px)"), this.cssAnimation(this.$con.get(0).style, "Perspective", "700px"), this.cssAnimation(this.$con.get(0).style, "TransformStyle", "preserve-3d")), this.activePage.section && this.activePage.section.classList.contains("main-page") && (this.activePage.active(), $(this.activePage.section).css("zIndex", 1), this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "rotateX(-" + this.moveDistanceY / this.windowHeight * 90 + "deg) translateY(" + this.moveDistanceY / 2 + "px) translateZ(" + this.moveDistanceY / 2 + "px)"), this.cssAnimation(this.activePage.section.style, "Transform", "rotateX(" + (90 - this.moveDistanceY / this.windowHeight * 90) + "deg) translateY(" + (-(this.windowHeight / 2) + this.moveDistanceY / 2) + "px) translateZ(" + (this.windowHeight / 2 - this.moveDistanceY / 2) + "px)")) } else if (this.moveDistanceY < 0) { if (this._isDisableFlipNextPage) return;
            this.isNext && !this.isFirstTime || (this.isNext = !0, this.isFirstTime = !1, this.activePage && this.activePage.deactive(), this.activePage = this.getCurAndActive(!1), this.cssAnimation(this.activePage.section.style, "Transform", "rotateX(-90deg) translateY(-" + this.windowHeight / 2 + "px) translateZ(-" + this.windowHeight / 2 + "px)"), this.cssAnimation(this.$con.get(0).style, "Perspective", "700px"), this.cssAnimation(this.$con.get(0).style, "TransformStyle", "preserve-3d")), this.activePage.section && this.activePage.section.classList.contains("main-page") ? (this.activePage.active(), $(this.activePage.section).css("zIndex", 0), this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "rotateX(" + -this.moveDistanceY / this.windowHeight * 90 + "deg) translateY(" + this.moveDistanceY / 2 + "px) translateZ(" + -this.moveDistanceY / 2 + "px)"), this.cssAnimation(this.activePage.section.style, "Transform", "rotateX(" + (-90 - this.moveDistanceY / this.windowHeight * 90) + "deg) translateY(" + (this.windowHeight / 2 + this.moveDistanceY / 2) + "px) translateZ(" + (this.windowHeight / 2 + this.moveDistanceY / 2) + "px)")) : (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "translateX(0px) scale(1)"), this.activePage = null) } }

    function i() { Math.abs(this.moveDistanceY) > Math.abs(this.moveDistanceX) && Math.abs(this.moveDistanceY) > 20 ? (this.moveDistanceY > 0 ? this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "rotateX(-90deg) translateY(" + this.windowHeight / 2 + "px) translateZ(" + this.windowHeight / 2 + "px)") : this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "rotateX(90deg) translateY(-" + this.windowHeight / 2 + "px) translateZ(" + this.windowHeight / 2 + "px)"), this.cssAnimation(this.eqxScene.currentPage.section.style, "zIndex", "0"), this.cssAnimation(this.activePage.section.style, "Transform", "rotateX(0deg) translateY(0px) translateZ(0px)"), this.cssAnimation(this.activePage.section.style, "zIndex", "2"), $(this).trigger("flipend")) : (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transition", "none"), this.cssAnimation(this.activePage.section.style, "Transition", "none"), this._isDisableFlipPage = !1, this.cancelFlip()) } e.exports = { cubeMove: n, cubeEnd: i } }, function(e, t) { "use strict";

    function n() { if (Math.abs(this.moveDistanceY) > Math.abs(this.moveDistanceX))
            if (this.moveDistanceY > 0) { if (this._isDisableFlipPrevPage) return;
                (this.isNext || this.isFirstTime) && (this.isNext = !1, this.isFirstTime = !1, this.activePage && (this.activePage.section.classList.remove("z-fade-in"), this.activePage.deactive()), this.activePage = this.getCurAndActive(!0), this.eqxScene.currentPage.section.style.zIndex = 1, this.activePage.section.style.zIndex = 2, this.activePage.section && this.activePage.section.classList.contains("main-page") && (this.activePage.section.classList.add("z-fade-in"), this.activePage.active())) } else if (this.moveDistanceY < 0) { if (this._isDisableFlipNextPage) return;
            this.isNext && !this.isFirstTime || (this.isNext = !0, this.isFirstTime = !1, this.activePage && (this.activePage.section.classList.remove("z-fade-in"), this.activePage.deactive()), this.activePage = this.getCurAndActive(!1), this.eqxScene.currentPage.section.style.zIndex = 1, this.activePage.section.style.zIndex = 2, this.activePage.section && this.activePage.section.classList.contains("main-page") && (this.activePage.section.classList.add("z-fade-in"), this.activePage.active())) } }

    function i() { var e = this;
        Math.abs(this.moveDistanceY) > Math.abs(this.moveDistanceX) ? setTimeout(function() { $(e).trigger("flipend") }, 1600) : (this._isDisableFlipPage = !1, this.cancelFlip()) } e.exports = { fadeInMove: n, fadeInEnd: i } }, function(e, t) { "use strict";

    function n() { if (Math.abs(this.moveDistanceY) > Math.abs(this.moveDistanceX)) { if (this.moveDistanceY > 0) { if (this._isDisableFlipPrevPage) return;
                (this.isNext || this.isFirstTime) && (this.isNext = !1, this.isFirstTime = !1, this.activePage && this.activePage.deactive(), this.activePage = this.getCurAndActive(!0), this.activePage.section && this.activePage.section.classList.contains("main-page") && (this.activePage.active(), $(this.activePage.section).css({ zIndex: 0, opacity: 1 })), $(this.eqxScene.currentPage.section).css({ opacity: 1 }), $(this.activePage.section).css({ zIndex: 0, opacity: 1 }), this.cssAnim($(this.activePage.section), "transform", "translateY(0)"), this.cssAnim($(this.eqxScene.currentPage.section), "transform-origin", "0% 0% 0px")) } else if (this.moveDistanceY < 0) { if (this._isDisableFlipNextPage) return;
                this.isNext && !this.isFirstTime || (this.isNext = !0, this.isFirstTime = !1, this.activePage && this.activePage.deactive(), this.activePage = this.getCurAndActive(!1), this.activePage.section && this.activePage.section.classList.contains("main-page") && (this.activePage.active(), $(this.activePage.section).css({ zIndex: 0, opacity: 1 })), $(this.eqxScene.currentPage.section).css({ opacity: 1 }), $(this.activePage.section).css({ zIndex: 0, opacity: 1 }), this.cssAnim($(this.activePage.section), "transform", "translateY(0)"), this.cssAnim($(this.eqxScene.currentPage.section), "transform-origin", "0% 0% 0px")) } this.activePage && (this.cssAnim($(this.eqxScene.currentPage.section), "transform-origin", "0% 0% 0px"), this.cssAnim($(this.eqxScene.currentPage.section), "transform", "rotate(" + Math.abs(this.moveDistanceY) / this.windowHeight * 90 + "deg)"), this.eqxScene.currentPage.section.style.opacity = ((this.windowHeight - Math.abs(this.moveDistanceY)) / this.windowHeight).toFixed(1)) } }

    function i() { Math.abs(this.moveDistanceY) > Math.abs(this.moveDistanceX) && Math.abs(this.moveDistanceY) > 20 ? (this.cssAnim($(this.eqxScene.currentPage.section), "transform", "translateY(" + this.windowHeight + "px) rotate(" + Math.abs(this.moveDistanceY) / this.windowHeight * 90 + "deg)"), $(this.eqxScene.currentPage.section).css({ opacity: .5 }), $(this).trigger("flipend")) : (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transition", "none"), this.cssAnimation(this.activePage.section.style, "Transition", "none"), this._isDisableFlipPage = !1, this.cancelFlip()) } e.exports = { fallMove: n, fallEnd: i } }, function(e, t) { "use strict";

    function n() { if (Math.abs(this.moveDistanceY) > Math.abs(this.moveDistanceX)) { if (this._isDisableFlipNextPage) return;
            this.isNext && !this.isFirstTime || (this.isNext = !0, this.isFirstTime = !1, this.activePage && this.activePage.deactive(), this.moveDistanceY > 0 ? (this.activePage = this.getCurAndActive(!0), o.bind(this)(), this.cssAnimation(this.activePage.section.style, "Transform", "rotateX(90deg)"), this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "rotateX(0deg)")) : (this.activePage = this.getCurAndActive(!1), o.bind(this)(), this.cssAnimation(this.activePage.section.style, "Transform", "rotateX(-90deg)"), this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "rotateX(0deg)"))), this.activePage.section && this.activePage.section.classList.contains("main-page") && (this.activePage.active(), this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "rotateX(" + this.moveDistanceY / this.windowHeight * 90 + "deg) ")) } }

    function i() { var e = this;
        Math.abs(this.moveDistanceY) > Math.abs(this.moveDistanceX) && Math.abs(this.moveDistanceY) > 20 ? (this.moveDistanceY > 0 ? (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "rotateX(70deg)"), setTimeout(function() { e.cssAnimation(e.activePage.section.style, "Transform", "rotateX(0deg)") }, 400)) : (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "rotateX(-70deg)"), setTimeout(function() { e.cssAnimation(e.activePage.section.style, "Transform", "rotateX(0deg)") }, 400)), $(this).trigger("flipend")) : (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transition", "none"), this.cssAnimation(this.activePage.section.style, "Transition", "none"), this._isDisableFlipPage = !1, this.cancelFlip()) }

    function o() { this.cssAnimation(this.activePage.section.style, "TransformOrigin", "center"), this.cssAnimation(this.eqxScene.currentPage.section.style, "TransformOrigin", "center") } e.exports = { flipMove: n, flipEnd: i } }, function(e, t) { "use strict";

    function n() { if (Math.abs(this.moveDistanceX) > Math.abs(this.moveDistanceY))
            if (this.moveDistanceX > 0) { if (this._isDisableFlipPrevPage) return;
                this.isNext || this.isFirstTime ? (this.isNext = !1, this.isFirstTime = !1, this.activePage = this.getCurAndActive(!0), this.getMoveInit(!0, "center right", "translateX", this.windowWidth)) : this.setCssWhenMove(!0, "translateX", this.windowWidth, this.moveDistanceX, this._scrollMode) } else if (this.moveDistanceX < 0) { if (this._isDisableFlipNextPage) return;!this.isNext || this.isFirstTime ? (this.isNext = !0, this.isFirstTime = !1, this.activePage = this.getCurAndActive(!1), this.getMoveInit(!1, "center left", "translateX", this.windowWidth)) : this.setCssWhenMove(!1, "translateX", this.windowWidth, this.moveDistanceX, this._scrollMode) } }

    function i() { Math.abs(this.moveDistanceX) > Math.abs(this.moveDistanceY) && Math.abs(this.moveDistanceX) > 20 ? (this.setCssWhenEnd("translateX", this.moveDistanceX, this.windowWidth, this._scrollMode), $(this).trigger("flipend")) : (this._isDisableFlipPage = !1, this.cancelFlip()) } e.exports = { horizontalMove: n, horizontalEnd: i } }, function(e, t) { "use strict";

    function n() { this._isDisableFlipNextPage || (this.isNext && !this.isFirstTime || (this.isNext = !0, this.isFirstTime = !1, this.activePage && this.activePage.deactive(), 14 === this._scrollMode ? this.moveDistanceY > 0 ? (this.activePage = this.getCurAndActive(!0), o.bind(this)(!1), this.cssAnimation(this.activePage.section.style, "Transform", "perspective(700px) rotateX(-90deg)"), this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "perspective(700px) rotateX(0deg)")) : (this.activePage = this.getCurAndActive(!1), o.bind(this)(!0), this.cssAnimation(this.activePage.section.style, "Transform", "perspective(700px) rotateX(90deg)"), this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "perspective(700px) rotateX(0deg)")) : this.moveDistanceX > 0 ? (this.activePage = this.getCurAndActive(!0), o.bind(this)(!1), this.cssAnimation(this.activePage.section.style, "Transform", "perspective(700px) rotateY(90deg)"), this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "perspective(700px) rotateY(0deg)")) : (this.activePage = this.getCurAndActive(!1), o.bind(this)(!0), this.cssAnimation(this.activePage.section.style, "Transform", "perspective(700px) rotateY(-90deg)"), this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "perspective(700px) rotateY(0deg)"))), this.activePage.section && this.activePage.section.classList.contains("main-page") && (this.activePage.active(), 14 === this._scrollMode ? this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "perspective(700px) rotateX(" + this.moveDistanceY / this.windowHeight * 90 + "deg) ") : this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "perspective(700px) rotateY(" + this.moveDistanceX / this.windowHeight * 90 + "deg) "))) }

    function i() { var e = this;
        14 === this._scrollMode ? Math.abs(this.moveDistanceY) > 20 ? (this.moveDistanceY > 0 ? (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "perspective(700px) rotateX(90deg)"), setTimeout(function() { e.cssAnimation(e.activePage.section.style, "Transform", "perspective(700px) rotateX(0deg)") }, 200)) : (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "perspective(700px) rotateX(-90deg)"), setTimeout(function() { e.cssAnimation(e.activePage.section.style, "Transform", "perspective(700px) rotateX(0deg)") }, 200)), $(this).trigger("flipend")) : (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transition", "none"), this.cssAnimation(this.activePage.section.style, "Transition", "none"), this._isDisableFlipPage = !1, this.cancelFlip()) : Math.abs(this.moveDistanceX) > 20 ? (this.moveDistanceX > 0 ? (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "perspective(700px) rotateY(-90deg)"), setTimeout(function() { e.cssAnimation(e.activePage.section.style, "Transform", "perspective(700px) rotateY(0deg)") }, 200)) : (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transform", "perspective(700px) rotateY(90deg)"), setTimeout(function() { e.cssAnimation(e.activePage.section.style, "Transform", "perspective(700px) rotateY(0deg)") }, 200)), $(this).trigger("flipend")) : (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transition", "none"), this.cssAnimation(this.activePage.section.style, "Transition", "none"), this._isDisableFlipPage = !1, this.cancelFlip()) }

    function o(e) { e ? 14 === this._scrollMode ? (this.cssAnimation(this.activePage.section.style, "TransformOrigin", "bottom"), this.cssAnimation(this.eqxScene.currentPage.section.style, "TransformOrigin", "top")) : (this.cssAnimation(this.activePage.section.style, "TransformOrigin", "right"), this.cssAnimation(this.eqxScene.currentPage.section.style, "TransformOrigin", "left")) : 14 === this._scrollMode ? (this.cssAnimation(this.activePage.section.style, "TransformOrigin", "top"), this.cssAnimation(this.eqxScene.currentPage.section.style, "TransformOrigin", "bottom")) : (this.cssAnimation(this.activePage.section.style, "TransformOrigin", "left"), this.cssAnimation(this.eqxScene.currentPage.section.style, "TransformOrigin", "right")) } e.exports = { pushMove: n, pushEnd: i } }, function(e, t) { "use strict";

    function n() { if (Math.abs(this.moveDistanceY) > Math.abs(this.moveDistanceX)) { if (this.moveDistanceY > 0) { if (this._isDisableFlipPrevPage) return;
                (this.isNext || this.isFirstTime) && (this.isNext = !1, this.isFirstTime = !1, this.activePage && this.activePage.deactive(), this.activePage = this.getCurAndActive(!0), this.activePage.section.style.zIndex = 2, this.activePage.section && this.activePage.section.classList.contains("main-page") && this.activePage.active(), this.activePage.section.style.opacity = 0) } else if (this.moveDistanceY < 0) { if (this._isDisableFlipNextPage) return;
                this.isNext && !this.isFirstTime || (this.isNext = !0, this.isFirstTime = !1, this.activePage && this.activePage.deactive(), this.activePage = this.getCurAndActive(!1), this.activePage.section.style.zIndex = 2, this.activePage.section && this.activePage.section.classList.contains("main-page") && this.activePage.active(), this.activePage.section.style.opacity = 0) } var e = Math.abs(this.moveDistanceY) / this.windowHeight * 1.3;
            this.activePage.section.style.opacity = e.toFixed(1), e.toFixed(3) <= 1 && this.cssAnim($(this.activePage.section), "transform", "scale(" + e.toFixed(3) + ")") } }

    function i() { Math.abs(this.moveDistanceY) > Math.abs(this.moveDistanceX) && Math.abs(this.moveDistanceY) > 20 ? (this.cssAnim($(this.activePage.section), "transform", "scale(1)"), this.activePage.section.style.opacity = 1, $(this).trigger("flipend")) : (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transition", "none"), this.cssAnimation(this.activePage.section.style, "Transition", "none"), this._isDisableFlipPage = !1, this.cancelFlip()) } e.exports = { scaleMove: n, scaleEnd: i } }, function(e, t, n) { "use strict";

    function i() { var e = r(); if (Math.abs(this.moveDistanceX) > Math.abs(this.moveDistanceY))
            if (this.moveDistanceX > 0) { if (this._isDisableFlipPrevPage) return;
                this.isNext || this.isFirstTime ? (this.isNext = !1, this.isFirstTime = !1, this.activePage = this.getCurAndActive(!0), this.windowWidth = e ? window.innerWidth : $(".nr").width(), this.getMoveInit(!0, "", "translateX", this.windowWidth)) : this.setCssWhenMove(!0, "translateX", this.windowWidth, this.moveDistanceX, this._scrollMode) } else if (this.moveDistanceX < 0) { if (this._isDisableFlipNextPage) return;!this.isNext || this.isFirstTime ? (this.isNext = !0, this.isFirstTime = !1, this.activePage = this.getCurAndActive(!1), this.windowWidth = e ? window.innerWidth : $(".nr").width(), this.getMoveInit(!1, "", "translateX", this.windowWidth)) : this.setCssWhenMove(!1, "translateX", this.windowWidth, this.moveDistanceX, this._scrollMode) } }

    function o() { Math.abs(this.moveDistanceX) > Math.abs(this.moveDistanceY) && Math.abs(this.moveDistanceX) > 20 ? (this.setCssWhenEnd("translateX", this.moveDistanceX, this.windowWidth, this._scrollMode), $(this).trigger("flipend")) : (this._isDisableFlipPage = !1, this.cancelFlip()) } var r = n(23).mobilecheck;
    e.exports = { singleMove: i, singleEnd: o } }, function(e, t) { "use strict";

    function n() { if (Math.abs(this.moveDistanceX) > Math.abs(this.moveDistanceY))
            if (this.moveDistanceX > 0) { if (this._isDisableFlipPrevPage) return;
                this.isNext || this.isFirstTime ? (this.isNext = !1, this.isFirstTime = !1, this.activePage && this.activePage.deactive(), this.activePage = this.getCurAndActive(!0), this.activePage.section && this.activePage.section.classList.contains("main-page") && (this.activePage.active(), this.cssAnim($(this.activePage.section), "Transform", "scale(0.3) translateX(0) translateZ(-" + this.windowHeight + "px) rotateY(45deg)"), this.activePage.section.style.zIndex = "0"), this.cssAnim(this.$con, "perspective", "1000px"), this.eqxScene.currentPage.section.style.zIndex = "100") : this.activePage && (this.moveDistanceX <= this.windowWidth / 4 ? this.cssAnim($(this.eqxScene.currentPage.section), "Transform", "translateX(" + this.moveDistanceX + "px)") : this.cssAnim($(this.eqxScene.currentPage.section), "Transform", "translateX(" + 1.5 * this.moveDistanceX + "px) scale(" + ((5 * this.windowWidth / 4 - this.moveDistanceX) / this.windowWidth).toFixed(3) + ") rotateY(" + this.moveDistanceX / this.windowWidth * 45 + "deg) translateZ(-" + (this.moveDistanceX - this.windowWidth / 4) + "px)")) } else if (this.moveDistanceX < 0) { if (this._isDisableFlipNextPage) return;!this.isNext || this.isFirstTime ? (this.isNext = !0, this.isFirstTime = !1, this.activePage && this.activePage.deactive(), this.activePage = this.getCurAndActive(!1), this.activePage.section && this.activePage.section.classList.contains("main-page") && (this.activePage.active(), this.cssAnim($(this.activePage.section), "Transform", "scale(0.3) translateX(" + (this.windowWidth + 300) + "px) translateZ(-" + this.windowHeight + "px) rotateY(-45deg)"), this.activePage.section.style.zIndex = "0"), this.cssAnim(this.$con, "perspective", "1000px"), this.eqxScene.currentPage.section.style.zIndex = "100") : this.activePage && (this.moveDistanceX >= -this.windowWidth / 4 ? this.cssAnim($(this.eqxScene.currentPage.section), "Transform", "translateX(" + this.moveDistanceX + "px)") : this.cssAnim($(this.eqxScene.currentPage.section), "Transform", "translateX(" + 1.5 * this.moveDistanceX + "px) scale(" + ((5 * this.windowWidth / 4 + this.moveDistanceX) / this.windowWidth).toFixed(3) + ") rotateY(" + this.moveDistanceX / this.windowWidth * 45 + "deg) translateZ(" + (this.moveDistanceX + this.windowWidth / 4) + "px)"), this.cssAnim($(this.activePage.section), "Transform", "scale(" + (.3 - (this.moveDistanceX + this.windowWidth / 4) / this.windowWidth).toFixed(3) + ") translateX(" + (-this.moveDistanceX - this.windowWidth / 4 + 200) + "px) translateZ(" + (-this.moveDistanceX - 3 * this.windowWidth / 4) + "px) rotateY(-" + (45 + (this.moveDistanceX + this.windowWidth / 4) / this.windowWidth * 45) + "deg)")) } }

    function i() { Math.abs(this.moveDistanceX) > Math.abs(this.moveDistanceY) && Math.abs(this.moveDistanceX) > 20 ? (this.moveDistanceX > 0 ? (this.eqxScene.currentPage.section.style.webkitTransformOrigin = "left", this.eqxScene.currentPage.section.style.webkitTransform = "translateX(0) translateZ(-" + this.windowHeight + "px) rotateY(0) scale(0.2)", this.activePage.section.style.webkitTransform = "translateX(0) translateZ(0) rotateY(0) scale(1)", this.eqxScene.currentPage.section.style.zIndex = "0", this.activePage.section.style.zIndex = "1") : (this.eqxScene.currentPage.section.style.webkitTransformOrigin = "right", this.eqxScene.currentPage.section.style.webkitTransform = "translateX(" + this.windowWidth + "px) translateZ(-" + this.windowHeight + "px) rotateY(0) scale(0.2)", this.activePage.section.style.webkitTransform = "translateX(0) translateZ(0) rotateY(0) scale(1)", this.activePage.section.style.zIndex = "1", this.eqxScene.currentPage.section.style.zIndex = "0"), $(this).trigger("flipend")) : (this.cssAnimation(this.eqxScene.currentPage.section.style, "Transition", "none"), this.cssAnimation(this.activePage.section.style, "Transition", "none"), this._isDisableFlipPage = !1, this.cancelFlip()) } e.exports = { swapMove: n, swapEnd: i } }, function(e, t) { "use strict";

    function n() { var e = this,
            t = Math.abs(e.moveDistanceY) <= Math.abs(e.moveDistanceX) || 0 == e.moveDistanceY; if (!t)
            if (e.moveDistanceY > 0) { if (e._isDisableFlipPrevPage) return;
                e.isNext || e.isFirstTime ? (e.isNext = !1, e.isFirstTime = !1, this.activePage = e.getCurAndActive(!0), e.getMoveInit(!0, "bottom center", "translateY", e.windowHeight)) : e.setCssWhenMove(!0, "translateY", e.windowHeight, e.moveDistanceY, e._scrollMode) } else if (e.moveDistanceY < 0) { if (e._isDisableFlipNextPage) return;!e.isNext || e.isFirstTime ? (e.isNext = !0, e.isFirstTime = !1, this.activePage = e.getCurAndActive(!1), e.getMoveInit(!1, "top center", "translateY", e.windowHeight)) : e.setCssWhenMove(!1, "translateY", e.windowHeight, e.moveDistanceY, e._scrollMode) } }

    function i() { var e = this;
        Math.abs(e.moveDistanceY) > Math.abs(e.moveDistanceX) && Math.abs(e.moveDistanceY) > 20 ? (e.setCssWhenEnd("translateY", e.moveDistanceY, e.windowHeight, e._scrollMode), $(this).trigger("flipend")) : (e._isDisableFlipPage = !1, e.cancelFlip()) } e.exports = { verticalMove: n, verticalEnd: i } }, function(e, t, n) { "use strict";

    function i() { var e = r(); if (Math.abs(this.moveDistanceY) > Math.abs(this.moveDistanceX))
            if (this.moveDistanceY > 0) { if (this._isDisableFlipPrevPage) return;
                this.isNext || this.isFirstTime ? (this.isNext = !1, this.isFirstTime = !1, this.activePage = this.getCurAndActive(!0), this.windowHeight = e ? window.innerHeight : $(".nr").height(), this.getMoveInit(!0, "", "translateY", this.windowHeight)) : this.setCssWhenMove(!0, "translateY", this.windowHeight, this.moveDistanceY, this._scrollMode) } else if (this.moveDistanceY < 0) { if (this._isDisableFlipNextPage) return;!this.isNext || this.isFirstTime ? (this.isNext = !0, this.isFirstTime = !1, this.activePage = this.getCurAndActive(!1), this.windowHeight = e ? window.innerHeight : $(".nr").height(), this.getMoveInit(!1, "", "translateY", this.windowHeight)) : this.setCssWhenMove(!1, "translateY", this.windowHeight, this.moveDistanceY, this._scrollMode) } }

    function o() { Math.abs(this.moveDistanceY) > Math.abs(this.moveDistanceX) && Math.abs(this.moveDistanceY) > 20 ? (this.setCssWhenEnd("translateY", this.moveDistanceY, this.windowHeight, this._scrollMode), $(this).trigger("flipend")) : (this._isDisableFlipPage = !1, this.cancelFlip()) } var r = n(23).mobilecheck;
    e.exports = { verticalSingleMove: i, verticalSingleEnd: o } }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var o = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
    n(309); var r = n(310),
        s = n(311),
        a = n(115),
        c = function() {
            function e(t, n) { i(this, e), this.bgAudioJson = t, this.eqxScene = n, this.$bgmBtn = $(r), this.bgAudioJson && (this.soundAgent = new s(this, this.eqxScene.soundManager)) } return o(e, [{ key: "destroy", value: function() { this.$bgmBtn && this.$bgmBtn.remove() } }, { key: "updateJson", value: function(e) { this.soundAgent.update(new a("src", e)) } }, { key: "show", value: function() { this.$bgmBtn.show() } }, { key: "resumePlay", value: function() { this.soundAgent && this.soundAgent.update(new a("end")) } }, { key: "stopPlay", value: function() { this.soundAgent && this.soundAgent.update(new a("stop")) } }, { key: "hide", value: function() { this.$bgmBtn.hide() } }, { key: "startRotate", value: function() { this.$bgmBtn.addClass("rotate") } }, { key: "stopRotate", value: function() { this.$bgmBtn.removeClass("rotate") } }]), e }();
    e.exports = c }, function(e, t) {}, function(e, t) { e.exports = '<div class="bgm-btn" data-event="11205"><audio loop="" src="" autoplay="" preload></audio></div>' }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(123),
        c = n(20),
        u = n(22).resolveUrl,
        l = n(23).mobilecheck,
        p = n(79).bigDataXBData,
        h = n(77).getWxJSSDK,
        d = n(23).isWeixin,
        f = n(23).isIOS,
        g = function(e) {
            function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return r.manager = n, r.isManualPause = !1, r.$audio = r.master.$bgmBtn.find("audio"), r.audio = r.$audio[0], r.type = 3, r.wxJssdk = h(), window.EQX = { startBgm: r.startPlay.bind(r), pauseBgm: r.stopPlay.bind(r) }, r.init(), r } return r(t, e), s(t, [{ key: "init", value: function() { var e = this.master.bgAudioJson,
                        t = this;
                    this.$audio.attr("src", u(c.FILE, e.url || e.src)), this.audio.load(), this.$audio.on("canplay", function() { t.audio.play() }), this.addEventListeners(), this.register(), this.master.show() } }, { key: "update", value: function(e) { var t = this; switch (e.type) {
                        case "src":
                            var n = e.data;
                            this.$audio.attr("src", u(c.FILE, n.url || n.src)), this.audio.load(), this.$audio.on("canplay", function() { t.audio.play() }); break;
                        case "stop":
                            this.stopPlay(); break;
                        case "end":
                            this.isManualPause || this.startPlay(); break;
                        case "down":
                            f() ? this.stopPlay() : this.audio.volume = .1; break;
                        case "restore":
                            f() ? this.startPlay() : this.audio.volume = 1; break;
                        case "play":
                            this.startPlay() } } }, { key: "addEventListeners", value: function() { var e = this;
                    this.$audio.on("play", function() { return e.master.startRotate() }), this.$audio.on("pause", function() { return e.master.stopRotate() }); var t = l() ? "touchend" : "click";
                    this.master.$bgmBtn.on(t, function(t) { t.cancelBubble = !0, t.stopPropagation(), e.isManualPause = !e.audio.paused, e.audio.paused ? e.startPlay() : e.stopPlay(), e.master.eqxScene.config.disableBigData || p(window.scene.id, 4, null, 8, "音乐图标") }), this.master.$bgmBtn.trigger(t) } }, { key: "startPlay", value: function() {
                    function e(e) { 4 === e.readyState ? e.paused && (e.play(), t.manager.onPlay(t)) : (e.load(), $(e).on("canplay", function() { e.play(), t.manager.onPlay(t) })) } var t = this,
                        n = t.audio;
                    d() ? this.wxJssdk.then(function() { wx.checkJsApi({ jsApiList: ["checkJsApi"], success: function() { e(n) } }) }) : e(n) } }, { key: "stopPlay", value: function() { this.audio.paused || this.audio.pause() } }]), t }(a);
    e.exports = g }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var o = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        r = n(115),
        s = function() {
            function e() { i(this, e), this.subscriberMap = {} } return o(e, [{ key: "subscribe", value: function(e, t) { var n = this.subscriberMap[e];
                    n || (n = this.subscriberMap[e] = []), n.includes(t) || n.push(t) } }, { key: "removeAll", value: function(e) { for (var t in this.subscriberMap) this.subscriberMap.hasOwnProperty(t) && this.remove(t, e) } }, { key: "remove", value: function(e, t) { var n = this.subscriberMap[e]; if (!n) return void(_DEBUG_ && console.error("remove subscriber form none existed event list")); var i = n.indexOf(t);
                    i > -1 && n.splice(i, 1) } }, { key: "publish", value: function(e, t) { var n = this.subscriberMap[e]; return n ? void n.forEach(function(n) { return n.update(new r(e, t)) }) : void(_DEBUG_ && console.error("event " + e + " no subscriber!")) } }]), e }();
    e.exports = s }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { return JSON.stringify(e) === JSON.stringify(t) } var r = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        s = n(314).$postComment,
        a = n(314).$getCommentList,
        c = function() {
            function e(t) { i(this, e), this.sceneId = t, this.comments = [], this.canLoadMore = !0, this.lastTime = 0, this.registers = [] } return r(e, [{ key: "addComment", value: function(e) { return !this.comments.find(function(t) { return o(t, e) }) && (this.comments.push(e), !0) } }, { key: "getComments", value: function() { return this.comments.sort(function(e, t) { return t.createTime - e.createTime }), this.comments } }, { key: "postComment", value: function(e) { var t = this; return s(e).then(function(e) { var n = e.obj; return t.addComment(n), t.publish(), n }) } }, { key: "publish", value: function() { this.registers.forEach(function(e) { return e.updateComments() }) } }, { key: "loadMoreComments", value: function() { var e = this; return a({ sceneId: this.sceneId, time: this.lastTime }).then(function(t) { var n = t.list; return 1==0 ? (e.lastTime = n[n.length - 1].createTime, n) : Promise.reject() }).then(function(t) { return t = t.filter(function(t) { return e.addComment(t) }), e.publish(), t }) } }, { key: "register", value: function(e) { this.registers.includes(e) || this.registers.push(e) } }]), e }();
    e.exports = c }, function(e, t, n) { "use strict";

    function i(e) { var t = e.sceneId,
            n = e.time,
            i = r.SERVER_1 + "scene/msg/list?sceneId=" + t; return n && (i += "&lastTime=" + n), i += "&date=" + (new Date).getTime(), s({ type: "GET", url: i }) }

    function o(e) { return s({ type: "POST", url: r.SERVER_1 + "scene/send/msg", data: e }) } var r = n(20),
        s = n(19).ajax;
    e.exports = { $getCommentList: i, $postComment: o } }, function(e, t, n) {
    "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e) { return s.includes("" + e.type) }
    var r = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        s = n(65).FORM_COMPS,
        a = function() {
            function e() { i(this, e), this.submited = !1, this.fromCompList = [] }
            return r(e, [{ key: "add", value: function(e) { if (o(e))
                        if (this.fromCompList.includes(e)) { if (_DEBUG_) throw new Error("Duplicate EQX form element " + e) } else this.fromCompList.push(e);
                    else if (_DEBUG_) throw new Error("Invalid EQX Form Element " + e + ", type: " + e.type) } }, {
                key: "check",
                value: function() {
                    for (var e = {}, t = this.fromCompList.map(function(e) {
                            return e.check()
                        }), n = 0; n < t.length; n++) { var i = t[n],
                            o = i.success,
                            r = i.key,
                            s = i.value; if (!o) return i;
                        e[r] = s }
                    return Object.values(e).every(function(e) { return !e }) ? { success: !1, message: "请填写表单" } : { success: !0, form: e }
                }
            }]), e
        }();
    e.exports = a
}, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = function h(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : h(o, t, n) } if ("value" in i) return i.value; var r = i.get; if (void 0 !== r) return r.call(n) },
        c = n(281),
        u = n(194).$getCountValues,
        l = n(65).COMP_TYPE,
        p = function(e) {
            function t(e) { i(this, t); var n = e.list.reduce(function(e, t) { return e.concat(t.elements) }, []),
                    r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n)); return r.sceneJson = e, r.countIdArr = [], r.countValuesPromise = null, r } return r(t, e), s(t, [{ key: "iterate", value: function() { var e = this;
                    a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "iterate", this).call(this), this.compJsonList.forEach(function(t) { var n = l[t.type]; "EqxCount" !== n || e.countIdArr.includes(t.id) || e.countIdArr.push(t.id) }) } }, { key: "getCountIds", value: function() { return this.countIdArr.join(",") } }, { key: "getCounterValues", value: function() { if (this.countValuesPromise) return this.countValuesPromise; var e = this.getCountIds(); if (e) { var t = this.sceneJson.meta.id;
                        this.countValuesPromise = u({ sceneId: t, fieldIds: e }).then(function(e) { return e.map })["catch"](function() { return {} }) } else this.countValuesPromise = Promise.resolve({}); return this.countValuesPromise } }]), t }(c);
    e.exports = p }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        a = n(318),
        c = n(115),
        u = function(e) {
            function t() { return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)) } return r(t, e), s(t, [{ key: "onPlay", value: function(e) { if (this.agents.includes(e)) switch (e.type) {
                        case 3:
                            this.agents.forEach(function(t) { 5 !== t.type || t.master.$context[0].paused || e.update(new c("stop")) }); break;
                        case 5:
                            var t = this.agents.find(function(e) { return 3 === e.type });
                            t && t.update(new c("stop")); break;
                        case 1:
                            this.agents.forEach(function(t) { t !== e && (2 === t.type || 3 === t.type ? t.update(new c("down")) : 1 === t.type && (t.update(new c("stop")), t.update(new c("reset")))) }); break;
                        case 2:
                            var n = this.agents.find(function(e) { return 3 === e.type });
                            n && n.update(new c("down")), this.agents.forEach(function(t) { 1 !== t.type || t.audio.paused || e.update(new c("down")) }); break;
                        case 4:
                            this.agents.forEach(function(e) { 2 === e.type || 3 === e.type ? e.update(new c("down")) : 1 === e.type && (e.update(new c("stop")), e.update(new c("reset"))) }) } } }, { key: "onEnd", value: function(e) { if (e || this.agents.includes(e)) switch (e.type) {
                        case 5:
                            var t = this.agents.find(function(e) { return 3 === e.type });
                            t && t.update(new c("play")); break;
                        case 1:
                            var n = null,
                                i = this.agents.find(function(e) { return 3 === e.type });
                            n = this.agents.findIndex(function(e) { return 1 === e.type && !e.audio.paused }) !== -1, this.agents.forEach(function(e) { 2 !== e.type || n || e.update(new c("restore")) }), n = this.agents.findIndex(function(e) { return (1 === e.type || 2 === e.type) && !e.audio.paused }) !== -1, i && !n && i.update(new c("restore")); break;
                        case 2:
                            var o = this.agents.find(function(e) { return 3 === e.type }),
                                r = !1;
                            this.agents.forEach(function(t) { t !== e && (1 !== t.type && 2 !== t.type || t.audio.paused || (r = !0)) }), o && !r && o.update(new c("restore")); break;
                        case 4:
                            var s = null,
                                a = this.agents.find(function(e) { return 3 === e.type });
                            s = this.agents.findIndex(function(e) { return 1 === e.type && !e.audio.paused }) !== -1, this.agents.forEach(function(e) { 2 !== e.type || s || e.update(new c("restore")) }), s = this.agents.findIndex(function(e) { return (1 === e.type || 2 === e.type) && !e.audio.paused }) !== -1, a && !s && a.update(new c("restore")) } } }, { key: "stopAll", value: function() { this.agents.forEach(function(e) { e.audio.paused || e.update(new c("stop")) }) } }, { key: "restoreAll", value: function() { this.agents.forEach(function(e) { 3 === e.type && e.audio.paused && !e.isManualPause && e.update(new c("play")) }) } }]), t }(a);
    e.exports = u }, function(e, t) { "use strict";

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var i = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        o = function() {
            function e(t) { n(this, e), this.agents = [], this.predict = t } return i(e, [{ key: "add", value: function(e) { this.predict && !this.predict.call(this, e) || this.agents.includes(e) || this.agents.push(e) } }, { key: "remove", value: function(e) { var t = this.agents.indexOf(e);
                    t > -1 && this.agents.splice(t, 1) } }]), e }();
    e.exports = o }, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } var s = n(318),
        a = function(e) {
            function t() { return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)) } return r(t, e), t }(s);
    e.exports = a }, function(e, t, n) { var i, o, r;! function(s, a) { o = [t, n(321), n(323), n(324), n(325), n(326)], i = a, r = "function" == typeof i ? i.apply(t, o) : i, !(void 0 !== r && (e.exports = r)) }(this, function(e, t, n, i, o, r) { "use strict";

        function s(e) { return e && e.__esModule ? e : { "default": e } } Object.defineProperty(e, "__esModule", { value: !0 }), e.detailedDiff = e.updatedDiff = e.deletedDiff = e.diff = e.addedDiff = void 0; var a = s(t),
            c = s(n),
            u = s(i),
            l = s(o),
            p = s(r);
        e.addedDiff = c["default"], e.diff = a["default"], e.deletedDiff = u["default"], e.updatedDiff = l["default"], e.detailedDiff = p["default"] }) }, function(e, t, n) { var i, o, r;! function(s, a) { o = [e, t, n(322)], i = a, r = "function" == typeof i ? i.apply(t, o) : i, !(void 0 !== r && (e.exports = r)) }(this, function(e, t, n) { "use strict";

        function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } Object.defineProperty(t, "__esModule", { value: !0 }); var o = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e },
            r = function s(e, t) { if (e === t) return {}; if (!(0, n.isObject)(e) || !(0, n.isObject)(t)) return t; var r = (0, n.properObject)(e),
                    a = (0, n.properObject)(t),
                    c = Object.keys(r).reduce(function(e, t) { return a.hasOwnProperty(t) ? e : o({}, e, i({}, t, void 0)) }, {}); return (0, n.isDate)(r) || (0, n.isDate)(a) ? r.valueOf() == a.valueOf() ? {} : a : Object.keys(a).reduce(function(e, t) { if (!r.hasOwnProperty(t)) return o({}, e, i({}, t, a[t])); var c = s(r[t], a[t]); return (0, n.isObject)(c) && (0, n.isEmpty)(c) && !(0, n.isDate)(c) ? e : o({}, e, i({}, t, c)) }, c) };
        t["default"] = r, e.exports = t["default"] }) }, function(e, t, n) { var i, o, r;! function(n, s) { o = [t], i = s, r = "function" == typeof i ? i.apply(t, o) : i, !(void 0 !== r && (e.exports = r)) }(this, function(e) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var t = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e },
            n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            i = (e.isDate = function(e) { return e instanceof Date }, e.isEmpty = function(e) { return 0 === Object.keys(e).length }, e.isObject = function(e) { return null != e && "object" === ("undefined" == typeof e ? "undefined" : n(e)) });
        e.properObject = function(e) { return i(e) && !e.hasOwnProperty ? t({}, e) : e } }) }, function(e, t, n) { var i, o, r;! function(s, a) { o = [e, t, n(322)], i = a, r = "function" == typeof i ? i.apply(t, o) : i, !(void 0 !== r && (e.exports = r)) }(this, function(e, t, n) { "use strict";

        function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } Object.defineProperty(t, "__esModule", { value: !0 }); var o = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e },
            r = function s(e, t) { if (e === t || !(0, n.isObject)(e) || !(0, n.isObject)(t)) return {}; var r = (0, n.properObject)(e),
                    a = (0, n.properObject)(t); return Object.keys(a).reduce(function(e, t) { if (r.hasOwnProperty(t)) { var c = s(r[t], a[t]); return (0, n.isObject)(c) && (0, n.isEmpty)(c) ? e : o({}, e, i({}, t, c)) } return o({}, e, i({}, t, a[t])) }, {}) };
        t["default"] = r, e.exports = t["default"] }) }, function(e, t, n) { var i, o, r;! function(s, a) { o = [e, t, n(322)], i = a, r = "function" == typeof i ? i.apply(t, o) : i, !(void 0 !== r && (e.exports = r)) }(this, function(e, t, n) { "use strict";

        function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } Object.defineProperty(t, "__esModule", { value: !0 }); var o = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e },
            r = function s(e, t) { if (e === t || !(0, n.isObject)(e) || !(0, n.isObject)(t)) return {}; var r = (0, n.properObject)(e),
                    a = (0, n.properObject)(t); return Object.keys(r).reduce(function(e, t) { if (a.hasOwnProperty(t)) { var c = s(r[t], a[t]); return (0, n.isObject)(c) && (0, n.isEmpty)(c) ? e : o({}, e, i({}, t, c)) } return o({}, e, i({}, t, void 0)) }, {}) };
        t["default"] = r, e.exports = t["default"] }) }, function(e, t, n) { var i, o, r;! function(s, a) { o = [e, t, n(322)], i = a, r = "function" == typeof i ? i.apply(t, o) : i, !(void 0 !== r && (e.exports = r)) }(this, function(e, t, n) { "use strict";

        function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } Object.defineProperty(t, "__esModule", { value: !0 }); var o = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e },
            r = function s(e, t) { if (e === t) return {}; if (!(0, n.isObject)(e) || !(0, n.isObject)(t)) return t; var r = (0, n.properObject)(e),
                    a = (0, n.properObject)(t); return (0, n.isDate)(r) || (0, n.isDate)(a) ? r.valueOf() == a.valueOf() ? {} : a : Object.keys(a).reduce(function(e, t) { if (r.hasOwnProperty(t)) { var c = s(r[t], a[t]); return (0, n.isObject)(c) && (0, n.isEmpty)(c) && !(0, n.isDate)(c) ? e : o({}, e, i({}, t, c)) } return e }, {}) };
        t["default"] = r, e.exports = t["default"] }) }, function(e, t, n) { var i, o, r;! function(s, a) { o = [e, t, n(323), n(324), n(325)], i = a, r = "function" == typeof i ? i.apply(t, o) : i, !(void 0 !== r && (e.exports = r)) }(this, function(e, t, n, i, o) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } } Object.defineProperty(t, "__esModule", { value: !0 }); var s = r(n),
            a = r(i),
            c = r(o),
            u = function(e, t) { return { added: (0, s["default"])(e, t), deleted: (0, a["default"])(e, t), updated: (0, c["default"])(e, t) } };
        t["default"] = u, e.exports = t["default"] }) }, function(e, t, n) { "use strict";

    function i(e, t) { return r() || t || e.map.wxComponent ? function(n) { var i = n.type,
                o = n.id,
                r = n.properties.type; if (t) { var a = t.headimgurl,
                    c = t.nickname; "201" == i && "own" == r && (n.content = c), "401" == i && "own" == r && (n.properties.src = a, delete n.properties.imgStyle) } var u = e.map.wxComponent,
                l = void 0 === u ? { shareUserName: "", shareUserHeader: "" } : u,
                p = l.shareUserName,
                h = l.shareUserHeader;
            (p || h) && ("201" == i && "share" == r && p && (n.content = p), "401" == i && "share" == r && h && (n.properties.src = h, delete n.properties.imgStyle)), "201" != i && "401" != i || "share" != r || s.generateUserKey(), l[o] && (n.serverId = l[o]) } : o } var o = n(25).noop,
        r = n(23).isWeixin,
        s = n(77);
    e.exports = { wxAdaptor: i } }]);