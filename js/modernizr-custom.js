/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-classlist-flexbox-inputtypes-setclasses-shiv !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t }

    function o() {
        var e, t, n, o, a, i, s;
        for (var l in C)
            if (C.hasOwnProperty(l)) {
                if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (o = r(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) i = e[a], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), y.push((o ? "" : "no-") + s.join("-")) } }

    function a(e) {
        var t = E.className,
            n = Modernizr._config.classPrefix || "";
        if (S && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2") }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), S ? E.className.baseVal = t : E.className = t) }

    function i() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : S ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments) }

    function s(e, t) {
        return !!~("" + e).indexOf(t) }

    function l(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase() }).replace(/^-/, "") }

    function c(e, t) {
        return function() {
            return e.apply(t, arguments) } }

    function u(e, t, n) {
        var o;
        for (var a in e)
            if (e[a] in t) return n === !1 ? e[a] : (o = t[e[a]], r(o, "function") ? c(o, n || t) : o);
        return !1 }

    function f(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase() }).replace(/^ms-/, "-ms-") }

    function d() {
        var e = t.body;
        return e || (e = i(S ? "svg" : "body"), e.fake = !0), e }

    function p(e, n, r, o) {
        var a, s, l, c, u = "modernizr",
            f = i("div"),
            p = d();
        if (parseInt(r, 10))
            for (; r--;) l = i("div"), l.id = o ? o[r] : u + (r + 1), f.appendChild(l);
        return a = i("style"), a.type = "text/css", a.id = "s" + u, (p.fake ? p : f).appendChild(a), p.appendChild(f), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), f.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = E.style.overflow, E.style.overflow = "hidden", E.appendChild(p)), s = n(f, e), p.fake ? (p.parentNode.removeChild(p), E.style.overflow = c, E.offsetHeight) : f.parentNode.removeChild(f), !!s }

    function m(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(f(t[o]), r)) return !0;
            return !1 }
        if ("CSSSupportsRule" in e) {
            for (var a = []; o--;) a.push("(" + f(t[o]) + ":" + r + ")");
            return a = a.join(" or "), p("@supports (" + a + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position }) }
        return n }

    function h(e, t, o, a) {
        function c() { f && (delete z.style, delete z.modElem) }
        if (a = r(a, "undefined") ? !1 : a, !r(o, "undefined")) {
            var u = m(e, o);
            if (!r(u, "undefined")) return u }
        for (var f, d, p, h, g, v = ["modernizr", "tspan", "samp"]; !z.style && v.length;) f = !0, z.modElem = i(v.shift()), z.style = z.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (h = e[d], g = z.style[h], s(h, "-") && (h = l(h)), z.style[h] !== n) {
                if (a || r(o, "undefined")) return c(), "pfx" == t ? h : !0;
                try { z.style[h] = o } catch (y) {}
                if (z.style[h] != g) return c(), "pfx" == t ? h : !0 }
        return c(), !1 }

    function g(e, t, n, o, a) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + N.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? h(s, t, o, a) : (s = (e + " " + T.join(i + " ") + i).split(" "), u(s, t, n)) }

    function v(e, t, r) {
        return g(e, n, n, t, r) }
    var y = [],
        C = [],
        b = { _version: "3.3.1", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(e, t) {
                var n = this;
                setTimeout(function() { t(n[e]) }, 0) }, addTest: function(e, t, n) { C.push({ name: e, fn: t, options: n }) }, addAsyncTest: function(e) { C.push({ name: null, fn: e }) } },
        Modernizr = function() {};
    Modernizr.prototype = b, Modernizr = new Modernizr;
    var E = t.documentElement,
        S = "svg" === E.nodeName.toLowerCase();
    S || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild) }

        function r() {
            var e = C.elements;
            return "string" == typeof e ? e.split(" ") : e }

        function o(e, t) {
            var n = C.elements; "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), C.elements = n + " " + e, c(t) }

        function a(e) {
            var t = y[e[g]];
            return t || (t = {}, v++, e[g] = v, y[v] = t), t }

        function i(e, n, r) {
            if (n || (n = t), f) return n.createElement(e);
            r || (r = a(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o) }

        function s(e, n) {
            if (e || (e = t), f) return e.createDocumentFragment();
            n = n || a(e);
            for (var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++) o.createElement(s[i]);
            return o }

        function l(e, t) { t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return C.shivMethods ? i(n, e, t) : t.createElem(n) }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")' }) + ");return n}")(C, t.frag) }

        function c(e) { e || (e = t);
            var r = a(e);
            return !C.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), f || l(e, r), e }
        var u, f, d = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            g = "_html5shiv",
            v = 0,
            y = {};! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", u = "hidden" in e, f = 1 == e.childNodes.length || function() { t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement }() } catch (n) { u = !0, f = !0 } }();
        var C = { elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video", version: d, shivCSS: p.shivCSS !== !1, supportsUnknownElements: f, shivMethods: p.shivMethods !== !1, type: "default", shivDocument: c, createElement: i, createDocumentFragment: s, addElements: o };
        e.html5 = C, c(t), "object" == typeof module && module.exports && (module.exports = C) }("undefined" != typeof e ? e : this, t);
    var x = i("input"),
        w = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        _ = {};
    Modernizr.inputtypes = function(e) {
        for (var r, o, a, i = e.length, s = "1)", l = 0; i > l; l++) x.setAttribute("type", r = e[l]), a = "text" !== x.type && "style" in x, a && (x.value = s, x.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && x.style.WebkitAppearance !== n ? (E.appendChild(x), o = t.defaultView, a = o.getComputedStyle && "textfield" !== o.getComputedStyle(x, null).WebkitAppearance && 0 !== x.offsetHeight, E.removeChild(x)) : /^(search|tel)$/.test(r) || (a = /^(url|email)$/.test(r) ? x.checkValidity && x.checkValidity() === !1 : x.value != s)), _[e[l]] = !!a;
        return _ }(w);
    var k = "Moz O ms Webkit",
        N = b._config.usePrefixes ? k.split(" ") : [];
    b._cssomPrefixes = N;
    var T = b._config.usePrefixes ? k.toLowerCase().split(" ") : [];
    b._domPrefixes = T;
    var j = { elem: i("modernizr") };
    Modernizr._q.push(function() { delete j.elem });
    var z = { style: j.elem.style };
    Modernizr._q.unshift(function() { delete z.style }), b.testAllProps = g, b.testAllProps = v, Modernizr.addTest("flexbox", v("flexBasis", "1px", !0)), Modernizr.addTest("classlist", "classList" in E), o(), a(y), delete b.addTest, delete b.addAsyncTest;
    for (var F = 0; F < Modernizr._q.length; F++) Modernizr._q[F]();
    e.Modernizr = Modernizr }(window, document);
