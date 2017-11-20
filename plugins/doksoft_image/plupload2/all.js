(function(aP, aN) {
    function ah(b) {
        return aJ.isWindow(b) ? b : b.nodeType === 9 ? b.defaultView || b.parentWindow : !1;
    }

    function an(e) {
        if (!cp[e]) {
            var d = aJ("<" + e + ">").appendTo("body"),
                f = d.css("display");
            d.remove();
            if (f === "none" || f === "") {
                f = "block";
            }
            cp[e] = f;
        }
        return cp[e];
    }

    function ap(e, d) {
        var f = {};
        aJ.each(aq.concat.apply([], aq.slice(0, d)), function() {
            f[this] = e;
        });
        return f;
    }

    function cs() {
        try {
            return new aP.ActiveXObject("Microsoft.XMLHTTP");
        } catch (a) {}
    }

    function cu() {
        try {
            return new aP.XMLHttpRequest;
        } catch (a) {}
    }

    function cw() {
        aJ(aP).unload(function() {
            for (var b in cz) {
                cz[b](0, 1);
            }
        });
    }

    function cG(B, A) {
        B.dataFilter && (A = B.dataFilter(A, B.dataType));
        var z = B.dataTypes,
            y = {},
            x, w, v = z.length,
            u, t = z[0],
            s, r, q, d, b;
        for (x = 1; x < v; x++) {
            if (x === 1) {
                for (w in B.converters) {
                    typeof w === "string" && (y[w.toLowerCase()] = B.converters[w]);
                }
            }
            s = t, t = z[x];
            if (t === "*") {
                t = s;
            } else {
                if (s !== "*" && s !== t) {
                    r = s + " " + t, q = y[r] || y["* " + t];
                    if (!q) {
                        b = aN;
                        for (d in y) {
                            u = d.split(" ");
                            if (u[0] === s || u[0] === "*") {
                                b = y[u[1] + " " + t];
                                if (b) {
                                    d = y[d], d === !0 ? q = b : b === !0 && (q = d);
                                    break;
                                }
                            }
                        }
                    }!q && !b && aJ.error("No conversion from " + r.replace(" ", " to ")), q !== !0 && (A = q ? q(A) : b(d(A)));
                }
            }
        }
        return A;
    }

    function cH(t, s, r) {
        var q = t.contents,
            p = t.dataTypes,
            o = t.responseFields,
            n, m, l, b;
        for (m in o) {
            m in r && (s[o[m]] = r[m]);
        }
        while (p[0] === "*") {
            p.shift(), n === aN && (n = t.mimeType || s.getResponseHeader("content-type"));
        }
        if (n) {
            for (m in q) {
                if (q[m] && q[m].test(n)) {
                    p.unshift(m);
                    break;
                }
            }
        }
        if (p[0] in r) {
            l = p[0];
        } else {
            for (m in r) {
                if (!p[0] || t.converters[m + " " + p[0]]) {
                    l = m;
                    break;
                }
                b || (b = m);
            }
            l = l || b;
        }
        if (l) {
            l !== p[0] && p.unshift(l);
            return r[l];
        }
    }

    function cI(g, d, j, i) {
        if (aJ.isArray(d) && d.length) {
            aJ.each(d, function(a, c) {
                j || aR.test(g) ? i(g, c) : cI(g + "[" + (typeof c === "object" || aJ.isArray(c) ? a : "") + "]", c, j, i);
            });
        } else {
            if (j || d == null || typeof d !== "object") {
                i(g, d);
            } else {
                if (aJ.isArray(d) || aJ.isEmptyObject(d)) {
                    i(g, "");
                } else {
                    for (var h in d) {
                        cI(g + "[" + h + "]", d[h], j, i);
                    }
                }
            }
        }
    }

    function cJ(v, u, t, s, r, q) {
        r = r || u.dataTypes[0], q = q || {}, q[r] = !0;
        var p = v[r],
            o = 0,
            n = p ? p.length : 0,
            m = v === cP,
            b;
        for (; o < n && (m || !b); o++) {
            b = p[o](u, t, s), typeof b === "string" && (!m || q[b] ? b = aN : (u.dataTypes.unshift(b), b = cJ(v, u, t, s, b, q)));
        }(m || !b) && !q["*"] && (b = cJ(v, u, t, s, "*", q));
        return b;
    }

    function cK(b) {
        return function(a, p) {
            typeof a !== "string" && (p = a, a = "*");
            if (aJ.isFunction(p)) {
                var o = a.toLowerCase().split(cV),
                    n = 0,
                    m = o.length,
                    l, k, d;
                for (; n < m; n++) {
                    l = o[n], d = /^\+/.test(l), d && (l = l.substr(1) || "*"), k = b[l] = b[l] || [], k[d ? "unshift" : "push"](p);
                }
            }
        };
    }

    function aU(g, d, j) {
        var i = d === "width" ? a3 : a1,
            h = d === "width" ? g.offsetWidth : g.offsetHeight;
        if (j === "border") {
            return h;
        }
        aJ.each(i, function() {
            j || (h -= parseFloat(aJ.css(g, "padding" + this)) || 0), j === "margin" ? h += parseFloat(aJ.css(g, "margin" + this)) || 0 : h -= parseFloat(aJ.css(g, "border" + this + "Width")) || 0;
        });
        return h;
    }

    function b9(d, c) {
        c.src ? aJ.ajax({
            url: c.src,
            async: !1,
            dataType: "script"
        }) : aJ.globalEval(c.text || c.textContent || c.innerHTML || ""), c.parentNode && c.parentNode.removeChild(c);
    }

    function aS(b) {
        return "getElementsByTagName" in b ? b.getElementsByTagName("*") : "querySelectorAll" in b ? b.querySelectorAll("*") : [];
    }

    function cX(e, d) {
        if (d.nodeType === 1) {
            var f = d.nodeName.toLowerCase();
            d.clearAttributes(), d.mergeAttributes(e);
            if (f === "object") {
                d.outerHTML = e.outerHTML;
            } else {
                if (f !== "input" || e.type !== "checkbox" && e.type !== "radio") {
                    if (f === "option") {
                        d.selected = e.defaultSelected;
                    } else {
                        if (f === "input" || f === "textarea") {
                            d.defaultValue = e.defaultValue;
                        }
                    }
                } else {
                    e.checked && (d.defaultChecked = d.checked = e.checked), d.value !== e.value && (d.value = e.value);
                }
            }
            d.removeAttribute(aJ.expando);
        }
    }

    function aY(r, q) {
        if (q.nodeType === 1 && aJ.hasData(r)) {
            var p = aJ.expando,
                o = aJ.data(r),
                n = aJ.data(q, o);
            if (o = o[p]) {
                var m = o.events;
                n = n[p] = aJ.extend({}, o);
                if (m) {
                    delete n.handle, n.events = {};
                    for (var l in m) {
                        for (var k = 0, d = m[l].length; k < d; k++) {
                            aJ.event.add(q, l + (m[l][k].namespace ? "." : "") + m[l][k].namespace, m[l][k], m[l][k].data);
                        }
                    }
                }
            }
        }
    }

    function a0(d, c) {
        return aJ.nodeName(d, "table") ? d.getElementsByTagName("tbody")[0] || d.appendChild(d.ownerDocument.createElement("tbody")) : d;
    }

    function ch(f, d, h) {
        if (aJ.isFunction(d)) {
            return aJ.grep(f, function(b, i) {
                var c = !!d.call(b, i, b);
                return c === h;
            });
        }
        if (d.nodeType) {
            return aJ.grep(f, function(b, c) {
                return b === d === h;
            });
        }
        if (typeof d === "string") {
            var g = aJ.grep(f, function(b) {
                return b.nodeType === 1;
            });
            if (cn.test(d)) {
                return aJ.filter(d, g, !h);
            }
            d = aJ.filter(d, g);
        }
        return aJ.grep(f, function(b, c) {
            return aJ.inArray(b, d) >= 0 === h;
        });
    }

    function ci(b) {
        return !b || !b.parentNode || b.parentNode.nodeType === 11;
    }

    function ct(d, c) {
        return (d && d !== "*" ? d + "." : "") + c.replace(al, "`").replace(aj, "&");
    }

    function cv(J) {
        var I, H, G, F, E, D, C, B, A, z, y, x, w, v = [],
            u = [],
            p = aJ._data(this, "events");
        if (J.liveFired !== this && p && p.live && !J.target.disabled && (!J.button || J.type !== "click")) {
            J.namespace && (x = new RegExp("(^|\\.)" + J.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), J.liveFired = this;
            var d = p.live.slice(0);
            for (C = 0; C < d.length; C++) {
                E = d[C], E.origType.replace(ao, "") === J.type ? u.push(E.selector) : d.splice(C--, 1);
            }
            F = aJ(J.target).closest(u, J.currentTarget);
            for (B = 0, A = F.length; B < A; B++) {
                y = F[B];
                for (C = 0; C < d.length; C++) {
                    E = d[C];
                    if (y.selector === E.selector && (!x || x.test(E.namespace)) && !y.elem.disabled) {
                        D = y.elem, G = null;
                        if (E.preType === "mouseenter" || E.preType === "mouseleave") {
                            J.type = E.preType, G = aJ(J.relatedTarget).closest(E.selector)[0];
                        }(!G || G !== D) && v.push({
                            elem: D,
                            handleObj: E,
                            level: y.level
                        });
                    }
                }
            }
            for (B = 0, A = v.length; B < A; B++) {
                F = v[B];
                if (H && F.level > H) {
                    break;
                }
                J.currentTarget = F.elem, J.data = F.handleObj.data, J.handleObj = F.handleObj, w = F.handleObj.origHandler.apply(F.elem, arguments);
                if (w === !1 || J.isPropagationStopped()) {
                    H = F.level, w === !1 && (I = !1);
                    if (J.isImmediatePropagationStopped()) {
                        break;
                    }
                }
            }
            return I;
        }
    }

    function cA(b, h, g) {
        var d = aJ.extend({}, g[0]);
        d.type = b, d.originalEvent = {}, d.liveFired = aN, aJ.event.handle.call(h, d), d.isDefaultPrevented() && g[0].preventDefault();
    }

    function ad() {
        return !0;
    }

    function ae() {
        return !1;
    }

    function aD(d) {
        for (var c in d) {
            if (c !== "toJSON") {
                return !1;
            }
        }
        return !0;
    }

    function aF(b, h, e) {
        if (e === aN && b.nodeType === 1) {
            e = b.getAttribute("data-" + h);
            if (typeof e === "string") {
                try {
                    e = e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : aJ.isNaN(e) ? aH.test(e) ? aJ.parseJSON(e) : e : parseFloat(e);
                } catch (d) {}
                aJ.data(b, h, e);
            } else {
                e = aN;
            }
        }
        return e;
    }
    var aL = aP.document,
        aJ = function() {
            function J() {
                if (!bl.isReady) {
                    try {
                        aL.documentElement.doScroll("left");
                    } catch (d) {
                        setTimeout(J, 1);
                        return;
                    }
                    bl.ready();
                }
            }
            var bl = function(e, d) {
                    return new bl.fn.init(e, d, bi);
                },
                bk = aP.jQuery,
                bj = aP.$,
                bi, bh = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
                bg = /\S/,
                bf = /^\s+/,
                be = /\s+$/,
                bd = /\d/,
                bc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                bb = /^[\],:{}\s]*$/,
                ba = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                Z = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                X = /(?:^|:|,)(?:\s*\[)+/g,
                V = /(webkit)[ \/]([\w.]+)/,
                T = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                R = /(msie) ([\w.]+)/,
                P = /(mozilla)(?:.*? rv:([\w.]+))?/,
                N = navigator.userAgent,
                L, c = !1,
                b, a = "then done fail isResolved isRejected promise".split(" "),
                Y, W = Object.prototype.toString,
                U = Object.prototype.hasOwnProperty,
                S = Array.prototype.push,
                Q = Array.prototype.slice,
                O = String.prototype.trim,
                M = Array.prototype.indexOf,
                K = {};
            bl.fn = bl.prototype = {
                constructor: bl,
                init: function(d, p, o) {
                    var n, m, l, h;
                    if (!d) {
                        return this;
                    }
                    if (d.nodeType) {
                        this.context = this[0] = d, this.length = 1;
                        return this;
                    }
                    if (d === "body" && !p && aL.body) {
                        this.context = aL, this[0] = aL.body, this.selector = "body", this.length = 1;
                        return this;
                    }
                    if (typeof d === "string") {
                        n = bh.exec(d);
                        if (!n || !n[1] && p) {
                            return !p || p.jquery ? (p || o).find(d) : this.constructor(p).find(d);
                        }
                        if (n[1]) {
                            p = p instanceof bl ? p[0] : p, h = p ? p.ownerDocument || p : aL, l = bc.exec(d), l ? bl.isPlainObject(p) ? (d = [aL.createElement(l[1])], bl.fn.attr.call(d, p, !0)) : d = [h.createElement(l[1])] : (l = bl.buildFragment([n[1]], [h]), d = (l.cacheable ? bl.clone(l.fragment) : l.fragment).childNodes);
                            return bl.merge(this, d);
                        }
                        m = aL.getElementById(n[2]);
                        if (m && m.parentNode) {
                            if (m.id !== n[2]) {
                                return o.find(d);
                            }
                            this.length = 1, this[0] = m;
                        }
                        this.context = aL, this.selector = d;
                        return this;
                    }
                    if (bl.isFunction(d)) {
                        return o.ready(d);
                    }
                    d.selector !== aN && (this.selector = d.selector, this.context = d.context);
                    return bl.makeArray(d, this);
                },
                selector: "",
                jquery: "1.5.1",
                length: 0,
                size: function() {
                    return this.length;
                },
                toArray: function() {
                    return Q.call(this, 0);
                },
                get: function(d) {
                    return d == null ? this.toArray() : d < 0 ? this[this.length + d] : this[d];
                },
                pushStack: function(f, d, h) {
                    var g = this.constructor();
                    bl.isArray(f) ? S.apply(g, f) : bl.merge(g, f), g.prevObject = this, g.context = this.context, d === "find" ? g.selector = this.selector + (this.selector ? " " : "") + h : d && (g.selector = this.selector + "." + d + "(" + h + ")");
                    return g;
                },
                each: function(e, d) {
                    return bl.each(this, e, d);
                },
                ready: function(d) {
                    bl.bindReady(), b.done(d);
                    return this;
                },
                eq: function(d) {
                    return d === -1 ? this.slice(d) : this.slice(d, +d + 1);
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                slice: function() {
                    return this.pushStack(Q.apply(this, arguments), "slice", Q.call(arguments).join(","));
                },
                map: function(d) {
                    return this.pushStack(bl.map(this, function(e, f) {
                        return d.call(e, f, e);
                    }));
                },
                end: function() {
                    return this.prevObject || this.constructor(null);
                },
                push: S,
                sort: [].sort,
                splice: [].splice
            }, bl.fn.init.prototype = bl.fn, bl.extend = bl.fn.extend = function() {
                var u, t, s, r, q, p, o = arguments[0] || {},
                    n = 1,
                    m = arguments.length,
                    d = !1;
                typeof o === "boolean" && (d = o, o = arguments[1] || {}, n = 2), typeof o !== "object" && !bl.isFunction(o) && (o = {}), m === n && (o = this, --n);
                for (; n < m; n++) {
                    if ((u = arguments[n]) != null) {
                        for (t in u) {
                            s = o[t], r = u[t];
                            if (o === r) {
                                continue;
                            }
                            d && r && (bl.isPlainObject(r) || (q = bl.isArray(r))) ? (q ? (q = !1, p = s && bl.isArray(s) ? s : []) : p = s && bl.isPlainObject(s) ? s : {}, o[t] = bl.extend(d, p, r)) : r !== aN && (o[t] = r);
                        }
                    }
                }
                return o;
            }, bl.extend({
                noConflict: function(d) {
                    aP.$ = bj, d && (aP.jQuery = bk);
                    return bl;
                },
                isReady: !1,
                readyWait: 1,
                ready: function(d) {
                    d === !0 && bl.readyWait--;
                    if (!bl.readyWait || d !== !0 && !bl.isReady) {
                        if (!aL.body) {
                            return setTimeout(bl.ready, 1);
                        }
                        bl.isReady = !0;
                        if (d !== !0 && --bl.readyWait > 0) {
                            return;
                        }
                        b.resolveWith(aL, [bl]), bl.fn.trigger && bl(aL).trigger("ready").unbind("ready");
                    }
                },
                bindReady: function() {
                    if (!c) {
                        c = !0;
                        if (aL.readyState === "complete") {
                            return setTimeout(bl.ready, 1);
                        }
                        if (aL.addEventListener) {
                            aL.addEventListener("DOMContentLoaded", Y, !1), aP.addEventListener("load", bl.ready, !1);
                        } else {
                            if (aL.attachEvent) {
                                aL.attachEvent("onreadystatechange", Y), aP.attachEvent("onload", bl.ready);
                                var d = !1;
                                try {
                                    d = aP.frameElement == null;
                                } catch (f) {}
                                aL.documentElement.doScroll && d && J();
                            }
                        }
                    }
                },
                isFunction: function(d) {
                    return bl.type(d) === "function";
                },
                isArray: Array.isArray || function(d) {
                    return bl.type(d) === "array";
                },
                isWindow: function(d) {
                    return d && typeof d === "object" && "setInterval" in d;
                },
                isNaN: function(d) {
                    return d == null || !bd.test(d) || isNaN(d);
                },
                type: function(d) {
                    return d == null ? String(d) : K[W.call(d)] || "object";
                },
                isPlainObject: function(d) {
                    if (!d || bl.type(d) !== "object" || d.nodeType || bl.isWindow(d)) {
                        return !1;
                    }
                    if (d.constructor && !U.call(d, "constructor") && !U.call(d.constructor.prototype, "isPrototypeOf")) {
                        return !1;
                    }
                    var e;
                    for (e in d) {}
                    return e === aN || U.call(d, e);
                },
                isEmptyObject: function(e) {
                    for (var d in e) {
                        return !1;
                    }
                    return !0;
                },
                error: function(d) {
                    throw d;
                },
                parseJSON: function(d) {
                    if (typeof d !== "string" || !d) {
                        return null;
                    }
                    d = bl.trim(d);
                    if (bb.test(d.replace(ba, "@").replace(Z, "]").replace(X, ""))) {
                        return aP.JSON && aP.JSON.parse ? aP.JSON.parse(d) : (new Function("return " + d))();
                    }
                    bl.error("Invalid JSON: " + d);
                },
                parseXML: function(d, g, f) {
                    aP.DOMParser ? (f = new DOMParser, g = f.parseFromString(d, "text/xml")) : (g = new ActiveXObject("Microsoft.XMLDOM"), g.async = "false", g.loadXML(d)), f = g.documentElement, (!f || !f.nodeName || f.nodeName === "parsererror") && bl.error("Invalid XML: " + d);
                    return g;
                },
                noop: function() {},
                globalEval: function(f) {
                    if (f && bg.test(f)) {
                        var d = aL.head || aL.getElementsByTagName("head")[0] || aL.documentElement,
                            g = aL.createElement("script");
                        bl.support.scriptEval() ? g.appendChild(aL.createTextNode(f)) : g.text = f, d.insertBefore(g, d.firstChild), d.removeChild(g);
                    }
                },
                nodeName: function(e, d) {
                    return e.nodeName && e.nodeName.toUpperCase() === d.toUpperCase();
                },
                each: function(d, q, p) {
                    var o, n = 0,
                        m = d.length,
                        l = m === aN || bl.isFunction(d);
                    if (p) {
                        if (l) {
                            for (o in d) {
                                if (q.apply(d[o], p) === !1) {
                                    break;
                                }
                            }
                        } else {
                            for (; n < m;) {
                                if (q.apply(d[n++], p) === !1) {
                                    break;
                                }
                            }
                        }
                    } else {
                        if (l) {
                            for (o in d) {
                                if (q.call(d[o], o, d[o]) === !1) {
                                    break;
                                }
                            }
                        } else {
                            for (var k = d[0]; n < m && q.call(k, n, k) !== !1; k = d[++n]) {}
                        }
                    }
                    return d;
                },
                trim: O ? function(d) {
                    return d == null ? "" : O.call(d);
                } : function(d) {
                    return d == null ? "" : (d + "").replace(bf, "").replace(be, "");
                },
                makeArray: function(f, d) {
                    var h = d || [];
                    if (f != null) {
                        var g = bl.type(f);
                        f.length == null || g === "string" || g === "function" || g === "regexp" || bl.isWindow(f) ? S.call(h, f) : bl.merge(h, f);
                    }
                    return h;
                },
                inArray: function(f, e) {
                    if (e.indexOf) {
                        return e.indexOf(f);
                    }
                    for (var h = 0, g = e.length; h < g; h++) {
                        if (e[h] === f) {
                            return h;
                        }
                    }
                    return -1;
                },
                merge: function(g, k) {
                    var j = g.length,
                        i = 0;
                    if (typeof k.length === "number") {
                        for (var h = k.length; i < h; i++) {
                            g[j++] = k[i];
                        }
                    } else {
                        while (k[i] !== aN) {
                            g[j++] = k[i++];
                        }
                    }
                    g.length = j;
                    return g;
                },
                grep: function(i, h, n) {
                    var m = [],
                        l;
                    n = !!n;
                    for (var k = 0, j = i.length; k < j; k++) {
                        l = !!h(i[k], k), n !== l && m.push(i[k]);
                    }
                    return m;
                },
                map: function(i, h, n) {
                    var m = [],
                        l;
                    for (var k = 0, j = i.length; k < j; k++) {
                        l = h(i[k], k, n), l != null && (m[m.length] = l);
                    }
                    return m.concat.apply([], m);
                },
                guid: 1,
                proxy: function(d, g, f) {
                    arguments.length === 2 && (typeof g === "string" ? (f = d, d = f[g], g = aN) : g && !bl.isFunction(g) && (f = g, g = aN)), !g && d && (g = function() {
                        return d.apply(f || this, arguments);
                    }), d && (g.guid = d.guid = d.guid || g.guid || bl.guid++);
                    return g;
                },
                access: function(s, r, q, p, o, n) {
                    var m = s.length;
                    if (typeof r === "object") {
                        for (var l in r) {
                            bl.access(s, l, r[l], p, o, q);
                        }
                        return s;
                    }
                    if (q !== aN) {
                        p = !n && p && bl.isFunction(q);
                        for (var d = 0; d < m; d++) {
                            o(s[d], r, p ? q.call(s[d], d, o(s[d], r)) : q, n);
                        }
                        return s;
                    }
                    return m ? o(s[0], r) : aN;
                },
                now: function() {
                    return (new Date).getTime();
                },
                _Deferred: function() {
                    var g = [],
                        d, j, i, h = {
                            done: function() {
                                if (!i) {
                                    var o = arguments,
                                        n, m, l, f, e;
                                    d && (e = d, d = 0);
                                    for (n = 0, m = o.length; n < m; n++) {
                                        l = o[n], f = bl.type(l), f === "array" ? h.done.apply(h, l) : f === "function" && g.push(l);
                                    }
                                    e && h.resolveWith(e[0], e[1]);
                                }
                                return this;
                            },
                            resolveWith: function(l, k) {
                                if (!i && !d && !j) {
                                    j = 1;
                                    try {
                                        while (g[0]) {
                                            g.shift().apply(l, k);
                                        }
                                    } catch (e) {
                                        throw e;
                                    } finally {
                                        d = [l, k], j = 0;
                                    }
                                }
                                return this;
                            },
                            resolve: function() {
                                h.resolveWith(bl.isFunction(this.promise) ? this.promise() : this, arguments);
                                return this;
                            },
                            isResolved: function() {
                                return j || d;
                            },
                            cancel: function() {
                                i = 1, g = [];
                                return this;
                            }
                        };
                    return h;
                },
                Deferred: function(f) {
                    var d = bl._Deferred(),
                        h = bl._Deferred(),
                        g;
                    bl.extend(d, {
                        then: function(e, i) {
                            d.done(e).fail(i);
                            return this;
                        },
                        fail: h.done,
                        rejectWith: h.resolveWith,
                        reject: h.resolve,
                        isRejected: h.isResolved,
                        promise: function(e) {
                            if (e == null) {
                                if (g) {
                                    return g;
                                }
                                g = e = {};
                            }
                            var i = a.length;
                            while (i--) {
                                e[a[i]] = d[a[i]];
                            }
                            return e;
                        }
                    }), d.done(h.cancel).fail(d.cancel), delete d.cancel, f && f.call(d, d);
                    return d;
                },
                when: function(i) {
                    var d = arguments.length,
                        n = d <= 1 && i && bl.isFunction(i.promise) ? i : bl.Deferred(),
                        m = n.promise();
                    if (d > 1) {
                        var l = Q.call(arguments, 0),
                            k = d,
                            j = function(e) {
                                return function(f) {
                                    l[e] = arguments.length > 1 ? Q.call(arguments, 0) : f, --k || n.resolveWith(m, l);
                                };
                            };
                        while (d--) {
                            i = l[d], i && bl.isFunction(i.promise) ? i.promise().then(j(d), n.reject) : --k;
                        }
                        k || n.resolveWith(m, l);
                    } else {
                        n !== i && n.resolve(i);
                    }
                    return m;
                },
                uaMatch: function(e) {
                    e = e.toLowerCase();
                    var d = V.exec(e) || T.exec(e) || R.exec(e) || e.indexOf("compatible") < 0 && P.exec(e) || [];
                    return {
                        browser: d[1] || "",
                        version: d[2] || "0"
                    };
                },
                sub: function() {
                    function f(e, h) {
                        return new f.fn.init(e, h);
                    }
                    bl.extend(!0, f, this), f.superclass = this, f.fn = f.prototype = this(), f.fn.constructor = f, f.subclass = this.subclass, f.fn.init = function d(e, h) {
                        h && h instanceof bl && !(h instanceof f) && (h = f(h));
                        return bl.fn.init.call(this, e, h, g);
                    }, f.fn.init.prototype = f.fn;
                    var g = f(aL);
                    return f;
                },
                browser: {}
            }), b = bl._Deferred(), bl.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, d) {
                K["[object " + d + "]"] = d.toLowerCase();
            }), L = bl.uaMatch(N), L.browser && (bl.browser[L.browser] = !0, bl.browser.version = L.version), bl.browser.webkit && (bl.browser.safari = !0), M && (bl.inArray = function(e, d) {
                return M.call(d, e);
            }), bg.test(" ") && (bf = /^[\s\xA0]+/, be = /[\s\xA0]+$/), bi = bl(aL), aL.addEventListener ? Y = function() {
                aL.removeEventListener("DOMContentLoaded", Y, !1), bl.ready();
            } : aL.attachEvent && (Y = function() {
                aL.readyState === "complete" && (aL.detachEvent("onreadystatechange", Y), bl.ready());
            });
            return bl;
        }();
    (function() {
        aJ.support = {};
        var v = aL.createElement("div");
        v.style.display = "none", v.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var u = v.getElementsByTagName("*"),
            t = v.getElementsByTagName("a")[0],
            s = aL.createElement("select"),
            r = s.appendChild(aL.createElement("option")),
            q = v.getElementsByTagName("input")[0];
        if (u && u.length && t) {
            aJ.support = {
                leadingWhitespace: v.firstChild.nodeType === 3,
                tbody: !v.getElementsByTagName("tbody").length,
                htmlSerialize: !!v.getElementsByTagName("link").length,
                style: /red/.test(t.getAttribute("style")),
                hrefNormalized: t.getAttribute("href") === "/a",
                opacity: /^0.55$/.test(t.style.opacity),
                cssFloat: !!t.style.cssFloat,
                checkOn: q.value === "on",
                optSelected: r.selected,
                deleteExpando: !0,
                optDisabled: !1,
                checkClone: !1,
                noCloneEvent: !0,
                noCloneChecked: !0,
                boxModel: null,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableHiddenOffsets: !0
            }, q.checked = !0, aJ.support.noCloneChecked = q.cloneNode(!0).checked, s.disabled = !0, aJ.support.optDisabled = !r.disabled;
            var p = null;
            aJ.support.scriptEval = function() {
                if (p === null) {
                    var h = aL.documentElement,
                        k = aL.createElement("script"),
                        j = "script" + aJ.now();
                    try {
                        k.appendChild(aL.createTextNode("window." + j + "=1;"));
                    } catch (i) {}
                    h.insertBefore(k, h.firstChild), aP[j] ? (p = !0, delete aP[j]) : p = !1, h.removeChild(k), h = k = j = null;
                }
                return p;
            };
            try {
                delete v.test;
            } catch (o) {
                aJ.support.deleteExpando = !1;
            }!v.addEventListener && v.attachEvent && v.fireEvent && (v.attachEvent("onclick", function d() {
                aJ.support.noCloneEvent = !1, v.detachEvent("onclick", d);
            }), v.cloneNode(!0).fireEvent("onclick")), v = aL.createElement("div"), v.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            var c = aL.createDocumentFragment();
            c.appendChild(v.firstChild), aJ.support.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked, aJ(function() {
                var g = aL.createElement("div"),
                    f = aL.getElementsByTagName("body")[0];
                if (f) {
                    g.style.width = g.style.paddingLeft = "1px", f.appendChild(g), aJ.boxModel = aJ.support.boxModel = g.offsetWidth === 2, "zoom" in g.style && (g.style.display = "inline", g.style.zoom = 1, aJ.support.inlineBlockNeedsLayout = g.offsetWidth === 2, g.style.display = "", g.innerHTML = "<div style='width:4px;'></div>", aJ.support.shrinkWrapBlocks = g.offsetWidth !== 2), g.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
                    var h = g.getElementsByTagName("td");
                    aJ.support.reliableHiddenOffsets = h[0].offsetHeight === 0, h[0].style.display = "", h[1].style.display = "none", aJ.support.reliableHiddenOffsets = aJ.support.reliableHiddenOffsets && h[0].offsetHeight === 0, g.innerHTML = "", f.removeChild(g).style.display = "none", g = h = null;
                }
            });
            var a = function(f) {
                var e = aL.createElement("div");
                f = "on" + f;
                if (!e.attachEvent) {
                    return !0;
                }
                var g = f in e;
                g || (e.setAttribute(f, "return;"), g = typeof e[f] === "function"), e = null;
                return g;
            };
            aJ.support.submitBubbles = a("submit"), aJ.support.changeBubbles = a("change"), v = u = t = null;
        }
    })();
    var aH = /^(?:\{.*\}|\[.*\])$/;
    aJ.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (aJ.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            b = b.nodeType ? aJ.cache[b[aJ.expando]] : b[aJ.expando];
            return !!b && !aD(b);
        },
        data: function(t, s, r, q) {
            if (aJ.acceptData(t)) {
                var p = aJ.expando,
                    o = typeof s === "string",
                    n, m = t.nodeType,
                    d = m ? aJ.cache : t,
                    b = m ? t[aJ.expando] : t[aJ.expando] && aJ.expando;
                if ((!b || q && b && !d[b][p]) && o && r === aN) {
                    return;
                }
                b || (m ? t[aJ.expando] = b = ++aJ.uuid : b = aJ.expando), d[b] || (d[b] = {}, m || (d[b].toJSON = aJ.noop));
                if (typeof s === "object" || typeof s === "function") {
                    q ? d[b][p] = aJ.extend(d[b][p], s) : d[b] = aJ.extend(d[b], s);
                }
                n = d[b], q && (n[p] || (n[p] = {}), n = n[p]), r !== aN && (n[s] = r);
                if (s === "events" && !n[s]) {
                    return n[p] && n[p].events;
                }
                return o ? n[s] : n;
            }
        },
        removeData: function(r, q, p) {
            if (aJ.acceptData(r)) {
                var o = aJ.expando,
                    n = r.nodeType,
                    m = n ? aJ.cache : r,
                    g = n ? r[aJ.expando] : aJ.expando;
                if (!m[g]) {
                    return;
                }
                if (q) {
                    var d = p ? m[g][o] : m[g];
                    if (d) {
                        delete d[q];
                        if (!aD(d)) {
                            return;
                        }
                    }
                }
                if (p) {
                    delete m[g][o];
                    if (!aD(m[g])) {
                        return;
                    }
                }
                var a = m[g][o];
                aJ.support.deleteExpando || m != aP ? delete m[g] : m[g] = null, a ? (m[g] = {}, n || (m[g].toJSON = aJ.noop), m[g][o] = a) : n && (aJ.support.deleteExpando ? delete r[aJ.expando] : r.removeAttribute ? r.removeAttribute(aJ.expando) : r[aJ.expando] = null);
            }
        },
        _data: function(e, d, f) {
            return aJ.data(e, d, f, !0);
        },
        acceptData: function(d) {
            if (d.nodeName) {
                var c = aJ.noData[d.nodeName.toLowerCase()];
                if (c) {
                    return c !== !0 && d.getAttribute("classid") === c;
                }
            }
            return !0;
        }
    }), aJ.fn.extend({
        data: function(b, p) {
            var o = null;
            if (typeof b === "undefined") {
                if (this.length) {
                    o = aJ.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var n = this[0].attributes,
                            m;
                        for (var l = 0, f = n.length; l < f; l++) {
                            m = n[l].name, m.indexOf("data-") === 0 && (m = m.substr(5), aF(this[0], m, o[m]));
                        }
                    }
                }
                return o;
            }
            if (typeof b === "object") {
                return this.each(function() {
                    aJ.data(this, b);
                });
            }
            var d = b.split(".");
            d[1] = d[1] ? "." + d[1] : "";
            if (p === aN) {
                o = this.triggerHandler("getData" + d[1] + "!", [d[0]]), o === aN && this.length && (o = aJ.data(this[0], b), o = aF(this[0], b, o));
                return o === aN && d[1] ? this.data(d[0]) : o;
            }
            return this.each(function() {
                var a = aJ(this),
                    c = [d[0], p];
                a.triggerHandler("setData" + d[1] + "!", c), aJ.data(this, b, p), a.triggerHandler("changeData" + d[1] + "!", c);
            });
        },
        removeData: function(b) {
            return this.each(function() {
                aJ.removeData(this, b);
            });
        }
    }), aJ.extend({
        queue: function(f, d, h) {
            if (f) {
                d = (d || "fx") + "queue";
                var g = aJ._data(f, d);
                if (!h) {
                    return g || [];
                }!g || aJ.isArray(h) ? g = aJ._data(f, d, aJ.makeArray(h)) : g.push(h);
                return g;
            }
        },
        dequeue: function(f, d) {
            d = d || "fx";
            var h = aJ.queue(f, d),
                g = h.shift();
            g === "inprogress" && (g = h.shift()), g && (d === "fx" && h.unshift("inprogress"), g.call(f, function() {
                aJ.dequeue(f, d);
            })), h.length || aJ.removeData(f, d + "queue", !0);
        }
    }), aJ.fn.extend({
        queue: function(b, d) {
            typeof b !== "string" && (d = b, b = "fx");
            if (d === aN) {
                return aJ.queue(this[0], b);
            }
            return this.each(function(a) {
                var c = aJ.queue(this, b, d);
                b === "fx" && c[0] !== "inprogress" && aJ.dequeue(this, b);
            });
        },
        dequeue: function(b) {
            return this.each(function() {
                aJ.dequeue(this, b);
            });
        },
        delay: function(d, c) {
            d = aJ.fx ? aJ.fx.speeds[d] || d : d, c = c || "fx";
            return this.queue(c, function() {
                var a = this;
                setTimeout(function() {
                    aJ.dequeue(a, c);
                }, d);
            });
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", []);
        }
    });
    var aB = /[\n\t\r]/g,
        az = /\s+/,
        ay = /\r/g,
        ax = /^(?:href|src|style)$/,
        aw = /^(?:button|input)$/i,
        av = /^(?:button|input|object|select|textarea)$/i,
        au = /^a(?:rea)?$/i,
        ar = /^(?:radio|checkbox)$/i;
    aJ.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    }, aJ.fn.extend({
        attr: function(d, c) {
            return aJ.access(this, d, c, !0, aJ.attr);
        },
        removeAttr: function(d, c) {
            return this.each(function() {
                aJ.attr(this, d, ""), this.nodeType === 1 && this.removeAttribute(d);
            });
        },
        addClass: function(r) {
            if (aJ.isFunction(r)) {
                return this.each(function(a) {
                    var e = aJ(this);
                    e.addClass(r.call(this, a, e.attr("class")));
                });
            }
            if (r && typeof r === "string") {
                var q = (r || "").split(az);
                for (var p = 0, o = this.length; p < o; p++) {
                    var n = this[p];
                    if (n.nodeType === 1) {
                        if (n.className) {
                            var m = " " + n.className + " ",
                                l = n.className;
                            for (var i = 0, d = q.length; i < d; i++) {
                                m.indexOf(" " + q[i] + " ") < 0 && (l += " " + q[i]);
                            }
                            n.className = aJ.trim(l);
                        } else {
                            n.className = r;
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function(d) {
            if (aJ.isFunction(d)) {
                return this.each(function(a) {
                    var e = aJ(this);
                    e.removeClass(d.call(this, a, e.attr("class")));
                });
            }
            if (d && typeof d === "string" || d === aN) {
                var p = (d || "").split(az);
                for (var o = 0, n = this.length; o < n; o++) {
                    var m = this[o];
                    if (m.nodeType === 1 && m.className) {
                        if (d) {
                            var i = (" " + m.className + " ").replace(aB, " ");
                            for (var h = 0, b = p.length; h < b; h++) {
                                i = i.replace(" " + p[h] + " ", " ");
                            }
                            m.className = aJ.trim(i);
                        } else {
                            m.className = "";
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function(f, d) {
            var h = typeof f,
                g = typeof d === "boolean";
            if (aJ.isFunction(f)) {
                return this.each(function(b) {
                    var a = aJ(this);
                    a.toggleClass(f.call(this, b, a.attr("class"), d), d);
                });
            }
            return this.each(function() {
                if (h === "string") {
                    var i, e = 0,
                        c = aJ(this),
                        b = d,
                        a = f.split(az);
                    while (i = a[e++]) {
                        b = g ? b : !c.hasClass(i), c[b ? "addClass" : "removeClass"](i);
                    }
                } else {
                    if (h === "undefined" || h === "boolean") {
                        this.className && aJ._data(this, "__className__", this.className), this.className = this.className || f === !1 ? "" : aJ._data(this, "__className__") || "";
                    }
                }
            });
        },
        hasClass: function(f) {
            var e = " " + f + " ";
            for (var h = 0, g = this.length; h < g; h++) {
                if ((" " + this[h].className + " ").replace(aB, " ").indexOf(e) > -1) {
                    return !0;
                }
            }
            return !1;
        },
        val: function(v) {
            if (!arguments.length) {
                var u = this[0];
                if (u) {
                    if (aJ.nodeName(u, "option")) {
                        var t = u.attributes.value;
                        return !t || t.specified ? u.value : u.text;
                    }
                    if (aJ.nodeName(u, "select")) {
                        var s = u.selectedIndex,
                            r = [],
                            q = u.options,
                            p = u.type === "select-one";
                        if (s < 0) {
                            return null;
                        }
                        for (var o = p ? s : 0, j = p ? s + 1 : q.length; o < j; o++) {
                            var d = q[o];
                            if (d.selected && (aJ.support.optDisabled ? !d.disabled : d.getAttribute("disabled") === null) && (!d.parentNode.disabled || !aJ.nodeName(d.parentNode, "optgroup"))) {
                                v = aJ(d).val();
                                if (p) {
                                    return v;
                                }
                                r.push(v);
                            }
                        }
                        if (p && !r.length && q.length) {
                            return aJ(q[s]).val();
                        }
                        return r;
                    }
                    if (ar.test(u.type) && !aJ.support.checkOn) {
                        return u.getAttribute("value") === null ? "on" : u.value;
                    }
                    return (u.value || "").replace(ay, "");
                }
                return aN;
            }
            var b = aJ.isFunction(v);
            return this.each(function(a) {
                var i = aJ(this),
                    h = v;
                if (this.nodeType === 1) {
                    b && (h = v.call(this, a, i.val())), h == null ? h = "" : typeof h === "number" ? h += "" : aJ.isArray(h) && (h = aJ.map(h, function(c) {
                        return c == null ? "" : c + "";
                    }));
                    if (aJ.isArray(h) && ar.test(this.type)) {
                        this.checked = aJ.inArray(i.val(), h) >= 0;
                    } else {
                        if (aJ.nodeName(this, "select")) {
                            var g = aJ.makeArray(h);
                            aJ("option", this).each(function() {
                                this.selected = aJ.inArray(aJ(this).val(), g) >= 0;
                            }), g.length || (this.selectedIndex = -1);
                        } else {
                            this.value = h;
                        }
                    }
                }
            });
        }
    }), aJ.extend({
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(t, s, r, q) {
            if (!t || t.nodeType === 3 || t.nodeType === 8 || t.nodeType === 2) {
                return aN;
            }
            if (q && s in aJ.attrFn) {
                return aJ(t)[s](r);
            }
            var n = t.nodeType !== 1 || !aJ.isXMLDoc(t),
                m = r !== aN;
            s = n && aJ.props[s] || s;
            if (t.nodeType === 1) {
                var l = ax.test(s);
                if (s === "selected" && !aJ.support.optSelected) {
                    var k = t.parentNode;
                    k && (k.selectedIndex, k.parentNode && k.parentNode.selectedIndex);
                }
                if ((s in t || t[s] !== aN) && n && !l) {
                    m && (s === "type" && aw.test(t.nodeName) && t.parentNode && aJ.error("type property can't be changed"), r === null ? t.nodeType === 1 && t.removeAttribute(s) : t[s] = r);
                    if (aJ.nodeName(t, "form") && t.getAttributeNode(s)) {
                        return t.getAttributeNode(s).nodeValue;
                    }
                    if (s === "tabIndex") {
                        var d = t.getAttributeNode("tabIndex");
                        return d && d.specified ? d.value : av.test(t.nodeName) || au.test(t.nodeName) && t.href ? 0 : aN;
                    }
                    return t[s];
                }
                if (!aJ.support.style && n && s === "style") {
                    m && (t.style.cssText = "" + r);
                    return t.style.cssText;
                }
                m && t.setAttribute(s, "" + r);
                if (!t.attributes[s] && (t.hasAttribute && !t.hasAttribute(s))) {
                    return aN;
                }
                var b = !aJ.support.hrefNormalized && n && l ? t.getAttribute(s, 2) : t.getAttribute(s);
                return b === null ? aN : b;
            }
            m && (t[s] = r);
            return t[s];
        }
    });
    var ao = /\.(.*)$/,
        am = /^(?:textarea|input|select)$/i,
        al = /\./g,
        aj = / /g,
        ag = /[^\w\s.|`]/g,
        af = function(b) {
            return b.replace(ag, "\\$&");
        };
    aJ.event = {
        add: function(D, C, B, A) {
            if (D.nodeType !== 3 && D.nodeType !== 8) {
                try {
                    aJ.isWindow(D) && (D !== aP && !D.frameElement) && (D = aP);
                } catch (z) {}
                if (B === !1) {
                    B = ae;
                } else {
                    if (!B) {
                        return;
                    }
                }
                var y, x;
                B.handler && (y = B, B = y.handler), B.guid || (B.guid = aJ.guid++);
                var w = aJ._data(D);
                if (!w) {
                    return;
                }
                var v = w.events,
                    u = w.handle;
                v || (w.events = v = {}), u || (w.handle = u = function() {
                    return typeof aJ !== "undefined" && !aJ.event.triggered ? aJ.event.handle.apply(u.elem, arguments) : aN;
                }), u.elem = D, C = C.split(" ");
                var t, s = 0,
                    d;
                while (t = C[s++]) {
                    x = y ? aJ.extend({}, y) : {
                        handler: B,
                        data: A
                    }, t.indexOf(".") > -1 ? (d = t.split("."), t = d.shift(), x.namespace = d.slice(0).sort().join(".")) : (d = [], x.namespace = ""), x.type = t, x.guid || (x.guid = B.guid);
                    var b = v[t],
                        a = aJ.event.special[t] || {};
                    if (!b) {
                        b = v[t] = [];
                        if (!a.setup || a.setup.call(D, A, d, u) === !1) {
                            D.addEventListener ? D.addEventListener(t, u, !1) : D.attachEvent && D.attachEvent("on" + t, u);
                        }
                    }
                    a.add && (a.add.call(D, x), x.handler.guid || (x.handler.guid = B.guid)), b.push(x), aJ.event.global[t] = !0;
                }
                D = null;
            }
        },
        global: {},
        remove: function(L, K, J, I) {
            if (L.nodeType !== 3 && L.nodeType !== 8) {
                J === !1 && (J = ae);
                var H, G, F, E, D = 0,
                    C, B, A, z, y, x, v, u = aJ.hasData(L) && aJ._data(L),
                    d = u && u.events;
                if (!u || !d) {
                    return;
                }
                K && K.type && (J = K.handler, K = K.type);
                if (!K || typeof K === "string" && K.charAt(0) === ".") {
                    K = K || "";
                    for (G in d) {
                        aJ.event.remove(L, G + K);
                    }
                    return;
                }
                K = K.split(" ");
                while (G = K[D++]) {
                    v = G, x = null, C = G.indexOf(".") < 0, B = [], C || (B = G.split("."), G = B.shift(), A = new RegExp("(^|\\.)" + aJ.map(B.slice(0).sort(), af).join("\\.(?:.*\\.)?") + "(\\.|$)")), y = d[G];
                    if (!y) {
                        continue;
                    }
                    if (!J) {
                        for (E = 0; E < y.length; E++) {
                            x = y[E];
                            if (C || A.test(x.namespace)) {
                                aJ.event.remove(L, v, x.handler, E), y.splice(E--, 1);
                            }
                        }
                        continue;
                    }
                    z = aJ.event.special[G] || {};
                    for (E = I || 0; E < y.length; E++) {
                        x = y[E];
                        if (J.guid === x.guid) {
                            if (C || A.test(x.namespace)) {
                                I == null && y.splice(E--, 1), z.remove && z.remove.call(L, x);
                            }
                            if (I != null) {
                                break;
                            }
                        }
                    }
                    if (y.length === 0 || I != null && y.length === 1) {
                        (!z.teardown || z.teardown.call(L, B) === !1) && aJ.removeEvent(L, G, u.handle), H = null, delete d[G];
                    }
                }
                if (aJ.isEmptyObject(d)) {
                    var b = u.handle;
                    b && (b.elem = null), delete u.events, delete u.handle, aJ.isEmptyObject(u) && aJ.removeData(L, aN, !0);
                }
            }
        },
        trigger: function(B, A, z) {
            var y = B.type || B,
                x = arguments[3];
            if (!x) {
                B = typeof B === "object" ? B[aJ.expando] ? B : aJ.extend(aJ.Event(y), B) : aJ.Event(y), y.indexOf("!") >= 0 && (B.type = y = y.slice(0, -1), B.exclusive = !0), z || (B.stopPropagation(), aJ.event.global[y] && aJ.each(aJ.cache, function() {
                    var a = aJ.expando,
                        c = this[a];
                    c && c.events && c.events[y] && aJ.event.trigger(B, A, c.handle.elem);
                }));
                if (!z || z.nodeType === 3 || z.nodeType === 8) {
                    return aN;
                }
                B.result = aN, B.target = z, A = aJ.makeArray(A), A.unshift(B);
            }
            B.currentTarget = z;
            var w = aJ._data(z, "handle");
            w && w.apply(z, A);
            var v = z.parentNode || z.ownerDocument;
            try {
                z && z.nodeName && aJ.noData[z.nodeName.toLowerCase()] || z["on" + y] && z["on" + y].apply(z, A) === !1 && (B.result = !1, B.preventDefault());
            } catch (u) {}
            if (!B.isPropagationStopped() && v) {
                aJ.event.trigger(B, A, v, !0);
            } else {
                if (!B.isDefaultPrevented()) {
                    var t, s = B.target,
                        r = y.replace(ao, ""),
                        p = aJ.nodeName(s, "a") && r === "click",
                        d = aJ.event.special[r] || {};
                    if ((!d._default || d._default.call(z, B) === !1) && !p && !(s && s.nodeName && aJ.noData[s.nodeName.toLowerCase()])) {
                        try {
                            s[r] && (t = s["on" + r], t && (s["on" + r] = null), aJ.event.triggered = !0, s[r]());
                        } catch (b) {}
                        t && (s["on" + r] = t), aJ.event.triggered = !1;
                    }
                }
            }
        },
        handle: function(x) {
            var w, v, u, t, s, r = [],
                q = aJ.makeArray(arguments);
            x = q[0] = aJ.event.fix(x || aP.event), x.currentTarget = this, w = x.type.indexOf(".") < 0 && !x.exclusive, w || (u = x.type.split("."), x.type = u.shift(), r = u.slice(0).sort(), t = new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.)?") + "(\\.|$)")), x.namespace = x.namespace || r.join("."), s = aJ._data(this, "events"), v = (s || {})[x.type];
            if (s && v) {
                v = v.slice(0);
                for (var p = 0, d = v.length; p < d; p++) {
                    var b = v[p];
                    if (w || t.test(b.namespace)) {
                        x.handler = b.handler, x.data = b.data, x.handleObj = b;
                        var a = b.handler.apply(this, q);
                        a !== aN && (x.result = a, a === !1 && (x.preventDefault(), x.stopPropagation()));
                        if (x.isImmediatePropagationStopped()) {
                            break;
                        }
                    }
                }
            }
            return x.result;
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function(b) {
            if (b[aJ.expando]) {
                return b;
            }
            var l = b;
            b = aJ.Event(l);
            for (var k = this.props.length, j; k;) {
                j = this.props[--k], b[j] = l[j];
            }
            b.target || (b.target = b.srcElement || aL), b.target.nodeType === 3 && (b.target = b.target.parentNode), !b.relatedTarget && b.fromElement && (b.relatedTarget = b.fromElement === b.target ? b.toElement : b.fromElement);
            if (b.pageX == null && b.clientX != null) {
                var d = aL.documentElement,
                    c = aL.body;
                b.pageX = b.clientX + (d && d.scrollLeft || c && c.scrollLeft || 0) - (d && d.clientLeft || c && c.clientLeft || 0), b.pageY = b.clientY + (d && d.scrollTop || c && c.scrollTop || 0) - (d && d.clientTop || c && c.clientTop || 0);
            }
            b.which == null && (b.charCode != null || b.keyCode != null) && (b.which = b.charCode != null ? b.charCode : b.keyCode), !b.metaKey && b.ctrlKey && (b.metaKey = b.ctrlKey), !b.which && b.button !== aN && (b.which = b.button & 1 ? 1 : b.button & 2 ? 3 : b.button & 4 ? 2 : 0);
            return b;
        },
        guid: 100000000,
        proxy: aJ.proxy,
        special: {
            ready: {
                setup: aJ.bindReady,
                teardown: aJ.noop
            },
            live: {
                add: function(b) {
                    aJ.event.add(this, ct(b.origType, b.selector), aJ.extend({}, b, {
                        handler: cv,
                        guid: b.handler.guid
                    }));
                },
                remove: function(b) {
                    aJ.event.remove(this, ct(b.origType, b.selector), b);
                }
            },
            beforeunload: {
                setup: function(e, d, f) {
                    aJ.isWindow(this) && (this.onbeforeunload = f);
                },
                teardown: function(d, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null);
                }
            }
        }
    }, aJ.removeEvent = aL.removeEventListener ? function(e, d, f) {
        e.removeEventListener && e.removeEventListener(d, f, !1);
    } : function(e, d, f) {
        e.detachEvent && e.detachEvent("on" + d, f);
    }, aJ.Event = function(b) {
        if (!this.preventDefault) {
            return new aJ.Event(b);
        }
        b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || b.returnValue === !1 || b.getPreventDefault && b.getPreventDefault() ? ad : ae) : this.type = b, this.timeStamp = aJ.now(), this[aJ.expando] = !0;
    }, aJ.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = ad;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1);
        },
        stopPropagation: function() {
            this.isPropagationStopped = ad;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = ad, this.stopPropagation();
        },
        isDefaultPrevented: ae,
        isPropagationStopped: ae,
        isImmediatePropagationStopped: ae
    };
    var ac = function(d) {
            var c = d.relatedTarget;
            try {
                if (c !== aL && !c.parentNode) {
                    return;
                }
                while (c && c !== this) {
                    c = c.parentNode;
                }
                c !== this && (d.type = d.data, aJ.event.handle.apply(this, arguments));
            } catch (f) {}
        },
        ab = function(b) {
            b.type = b.data, aJ.event.handle.apply(this, arguments);
        };
    aJ.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(d, c) {
        aJ.event.special[d] = {
            setup: function(a) {
                aJ.event.add(this, c, a && a.selector ? ab : ac, d);
            },
            teardown: function(b) {
                aJ.event.remove(this, c, b && b.selector ? ab : ac);
            }
        };
    }), aJ.support.submitBubbles || (aJ.event.special.submit = {
        setup: function(d, c) {
            if (this.nodeName && this.nodeName.toLowerCase() !== "form") {
                aJ.event.add(this, "click.specialSubmit", function(f) {
                    var e = f.target,
                        g = e.type;
                    (g === "submit" || g === "image") && aJ(e).closest("form").length && cA("submit", this, arguments);
                }), aJ.event.add(this, "keypress.specialSubmit", function(f) {
                    var e = f.target,
                        g = e.type;
                    (g === "text" || g === "password") && aJ(e).closest("form").length && f.keyCode === 13 && cA("submit", this, arguments);
                });
            } else {
                return !1;
            }
        },
        teardown: function(b) {
            aJ.event.remove(this, ".specialSubmit");
        }
    });
    if (!aJ.support.changeBubbles) {
        var aa, cE = function(e) {
                var d = e.type,
                    f = e.value;
                d === "radio" || d === "checkbox" ? f = e.checked : d === "select-multiple" ? f = e.selectedIndex > -1 ? aJ.map(e.options, function(b) {
                    return b.selected;
                }).join("-") : "" : e.nodeName.toLowerCase() === "select" && (f = e.selectedIndex);
                return f;
            },
            cC = function cC(b) {
                var h = b.target,
                    g, d;
                if (am.test(h.nodeName) && !h.readOnly) {
                    g = aJ._data(h, "_change_data"), d = cE(h), (b.type !== "focusout" || h.type !== "radio") && aJ._data(h, "_change_data", d);
                    if (g === aN || d === g) {
                        return;
                    }
                    if (g != null || d) {
                        b.type = "change", b.liveFired = aN, aJ.event.trigger(b, arguments[1], h);
                    }
                }
            };
        aJ.event.special.change = {
            filters: {
                focusout: cC,
                beforedeactivate: cC,
                click: function(e) {
                    var d = e.target,
                        f = d.type;
                    (f === "radio" || f === "checkbox" || d.nodeName.toLowerCase() === "select") && cC.call(this, e);
                },
                keydown: function(e) {
                    var d = e.target,
                        f = d.type;
                    (e.keyCode === 13 && d.nodeName.toLowerCase() !== "textarea" || e.keyCode === 32 && (f === "checkbox" || f === "radio") || f === "select-multiple") && cC.call(this, e);
                },
                beforeactivate: function(d) {
                    var c = d.target;
                    aJ._data(c, "_change_data", cE(c));
                }
            },
            setup: function(e, d) {
                if (this.type === "file") {
                    return !1;
                }
                for (var f in aa) {
                    aJ.event.add(this, f + ".specialChange", aa[f]);
                }
                return am.test(this.nodeName);
            },
            teardown: function(b) {
                aJ.event.remove(this, ".specialChange");
                return am.test(this.nodeName);
            }
        }, aa = aJ.event.special.change.filters, aa.focus = aa.beforeactivate;
    }
    aL.addEventListener && aJ.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, d) {
        function f(b) {
            b = aJ.event.fix(b), b.type = d;
            return aJ.event.handle.call(this, b);
        }
        aJ.event.special[d] = {
            setup: function() {
                this.addEventListener(e, f, !0);
            },
            teardown: function() {
                this.removeEventListener(e, f, !0);
            }
        };
    }), aJ.each(["bind", "one"], function(b, d) {
        aJ.fn[d] = function(c, p, o) {
            if (typeof c === "object") {
                for (var n in c) {
                    this[d](n, p, c[n], o);
                }
                return this;
            }
            if (aJ.isFunction(p) || p === !1) {
                o = p, p = aN;
            }
            var m = d === "one" ? aJ.proxy(o, function(e) {
                aJ(this).unbind(e, m);
                return o.apply(this, arguments);
            }) : o;
            if (c === "unload" && d !== "one") {
                this.one(c, p, o);
            } else {
                for (var l = 0, k = this.length; l < k; l++) {
                    aJ.event.add(this[l], c, m, p);
                }
            }
            return this;
        };
    }), aJ.fn.extend({
        unbind: function(g, d) {
            if (typeof g !== "object" || g.preventDefault) {
                for (var i = 0, h = this.length; i < h; i++) {
                    aJ.event.remove(this[i], g, d);
                }
            } else {
                for (var j in g) {
                    this.unbind(j, g[j]);
                }
            }
            return this;
        },
        delegate: function(f, e, h, g) {
            return this.live(e, h, g, f);
        },
        undelegate: function(e, d, f) {
            return arguments.length === 0 ? this.unbind("live") : this.die(d, null, f, e);
        },
        trigger: function(d, c) {
            return this.each(function() {
                aJ.event.trigger(d, c, this);
            });
        },
        triggerHandler: function(e, d) {
            if (this[0]) {
                var f = aJ.Event(e);
                f.preventDefault(), f.stopPropagation(), aJ.event.trigger(f, d, this[0]);
                return f.result;
            }
        },
        toggle: function(e) {
            var d = arguments,
                f = 1;
            while (f < d.length) {
                aJ.proxy(e, d[f++]);
            }
            return this.click(aJ.proxy(e, function(b) {
                var a = (aJ._data(this, "lastToggle" + e.guid) || 0) % f;
                aJ._data(this, "lastToggle" + e.guid, a + 1), b.preventDefault();
                return d[a].apply(this, arguments) || !1;
            }));
        },
        hover: function(d, c) {
            return this.mouseenter(d).mouseleave(c || d);
        }
    });
    var cy = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    aJ.each(["live", "die"], function(b, d) {
            aJ.fn[d] = function(D, C, B, A) {
                var z, y = 0,
                    x, w, v, u = A || this.selector,
                    t = A ? this : aJ(this.context);
                if (typeof D === "object" && !D.preventDefault) {
                    for (var s in D) {
                        t[d](s, C, D[s], u);
                    }
                    return this;
                }
                aJ.isFunction(C) && (B = C, C = aN), D = (D || "").split(" ");
                while ((z = D[y++]) != null) {
                    x = ao.exec(z), w = "", x && (w = x[0], z = z.replace(ao, ""));
                    if (z === "hover") {
                        D.push("mouseenter" + w, "mouseleave" + w);
                        continue;
                    }
                    v = z, z === "focus" || z === "blur" ? (D.push(cy[z] + w), z = z + w) : z = (cy[z] || z) + w;
                    if (d === "live") {
                        for (var p = 0, c = t.length; p < c; p++) {
                            aJ.event.add(t[p], "live." + ct(z, u), {
                                data: C,
                                selector: u,
                                handler: B,
                                origType: z,
                                origHandler: B,
                                preType: v
                            });
                        }
                    } else {
                        t.unbind("live." + ct(z, u), B);
                    }
                }
                return this;
            };
        }), aJ.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(d, c) {
            aJ.fn[c] = function(b, e) {
                e == null && (e = b, b = null);
                return arguments.length > 0 ? this.bind(c, b, e) : this.trigger(c);
            }, aJ.attrFn && (aJ.attrFn[c] = !0);
        }),
        function() {
            function c(t, s, r, q, p, o) {
                for (var n = 0, m = q.length; n < m; n++) {
                    var l = q[n];
                    if (l) {
                        var k = !1;
                        l = l[t];
                        while (l) {
                            if (l.sizcache === r) {
                                k = q[l.sizset];
                                break;
                            }
                            if (l.nodeType === 1) {
                                o || (l.sizcache = r, l.sizset = n);
                                if (typeof s !== "string") {
                                    if (l === s) {
                                        k = !0;
                                        break;
                                    }
                                } else {
                                    if (E.filter(s, [l]).length > 0) {
                                        k = l;
                                        break;
                                    }
                                }
                            }
                            l = l[t];
                        }
                        q[n] = k;
                    }
                }
            }

            function d(t, s, r, q, p, o) {
                for (var n = 0, m = q.length; n < m; n++) {
                    var l = q[n];
                    if (l) {
                        var k = !1;
                        l = l[t];
                        while (l) {
                            if (l.sizcache === r) {
                                k = q[l.sizset];
                                break;
                            }
                            l.nodeType === 1 && !o && (l.sizcache = r, l.sizset = n);
                            if (l.nodeName.toLowerCase() === s) {
                                k = l;
                                break;
                            }
                            l = l[t];
                        }
                        q[n] = k;
                    }
                }
            }
            var L = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                K = 0,
                J = Object.prototype.toString,
                I = !1,
                H = !0,
                G = /\\/g,
                F = /\W/;
            [0, 0].sort(function() {
                H = !1;
                return 0;
            });
            var E = function(Q, O, N, M) {
                N = N || [], O = O || aL;
                var v = O;
                if (O.nodeType !== 1 && O.nodeType !== 9) {
                    return [];
                }
                if (!Q || typeof Q !== "string") {
                    return N;
                }
                var p, m, l, k, f, a, V, U, T = !0,
                    S = E.isXML(O),
                    R = [],
                    P = Q;
                do {
                    L.exec(""), p = L.exec(P);
                    if (p) {
                        P = p[3], R.push(p[1]);
                        if (p[2]) {
                            k = p[3];
                            break;
                        }
                    }
                } while (p);
                if (R.length > 1 && C.exec(Q)) {
                    if (R.length === 2 && D.relative[R[0]]) {
                        m = b(R[0] + R[1], O);
                    } else {
                        m = D.relative[R[0]] ? [O] : E(R.shift(), O);
                        while (R.length) {
                            Q = R.shift(), D.relative[Q] && (Q += R.shift()), m = b(Q, m);
                        }
                    }
                } else {
                    !M && R.length > 1 && O.nodeType === 9 && !S && D.match.ID.test(R[0]) && !D.match.ID.test(R[R.length - 1]) && (f = E.find(R.shift(), O, S), O = f.expr ? E.filter(f.expr, f.set)[0] : f.set[0]);
                    if (O) {
                        f = M ? {
                            expr: R.pop(),
                            set: z(M)
                        } : E.find(R.pop(), R.length === 1 && (R[0] === "~" || R[0] === "+") && O.parentNode ? O.parentNode : O, S), m = f.expr ? E.filter(f.expr, f.set) : f.set, R.length > 0 ? l = z(m) : T = !1;
                        while (R.length) {
                            a = R.pop(), V = a, D.relative[a] ? V = R.pop() : a = "", V == null && (V = O), D.relative[a](l, V, S);
                        }
                    } else {
                        l = R = [];
                    }
                }
                l || (l = m), l || E.error(a || Q);
                if (J.call(l) === "[object Array]") {
                    if (T) {
                        if (O && O.nodeType === 1) {
                            for (U = 0; l[U] != null; U++) {
                                l[U] && (l[U] === !0 || l[U].nodeType === 1 && E.contains(O, l[U])) && N.push(m[U]);
                            }
                        } else {
                            for (U = 0; l[U] != null; U++) {
                                l[U] && l[U].nodeType === 1 && N.push(m[U]);
                            }
                        }
                    } else {
                        N.push.apply(N, l);
                    }
                } else {
                    z(l, N);
                }
                k && (E(k, v, N, M), E.uniqueSort(N));
                return N;
            };
            E.uniqueSort = function(f) {
                if (x) {
                    I = H, f.sort(x);
                    if (I) {
                        for (var e = 1; e < f.length; e++) {
                            f[e] === f[e - 1] && f.splice(e--, 1);
                        }
                    }
                }
                return f;
            }, E.matches = function(f, e) {
                return E(f, null, null, e);
            }, E.matchesSelector = function(f, e) {
                return E(e, null, null, [f]).length > 0;
            }, E.find = function(r, q, p) {
                var o;
                if (!r) {
                    return [];
                }
                for (var n = 0, m = D.order.length; n < m; n++) {
                    var l, k = D.order[n];
                    if (l = D.leftMatch[k].exec(r)) {
                        var i = l[1];
                        l.splice(1, 1);
                        if (i.substr(i.length - 1) !== "\\") {
                            l[1] = (l[1] || "").replace(G, ""), o = D.find[k](l, q, p);
                            if (o != null) {
                                r = r.replace(D.match[k], "");
                                break;
                            }
                        }
                    }
                }
                o || (o = typeof q.getElementsByTagName !== "undefined" ? q.getElementsByTagName("*") : []);
                return {
                    set: o,
                    expr: r
                };
            }, E.filter = function(W, V, U, T) {
                var S, R, Q = W,
                    P = [],
                    O = V,
                    N = V && V[0] && E.isXML(V[0]);
                while (W && V.length) {
                    for (var M in D.filter) {
                        if ((S = D.leftMatch[M].exec(W)) != null && S[2]) {
                            var v, u, l = D.filter[M],
                                k = S[1];
                            R = !1, S.splice(1, 1);
                            if (k.substr(k.length - 1) === "\\") {
                                continue;
                            }
                            O === P && (P = []);
                            if (D.preFilter[M]) {
                                S = D.preFilter[M](S, O, U, P, T, N);
                                if (S) {
                                    if (S === !0) {
                                        continue;
                                    }
                                } else {
                                    R = v = !0;
                                }
                            }
                            if (S) {
                                for (var Y = 0;
                                    (u = O[Y]) != null; Y++) {
                                    if (u) {
                                        v = l(u, S, Y, O);
                                        var X = T ^ !!v;
                                        U && v != null ? X ? R = !0 : O[Y] = !1 : X && (P.push(u), R = !0);
                                    }
                                }
                            }
                            if (v !== aN) {
                                U || (O = P), W = W.replace(D.match[M], "");
                                if (!R) {
                                    return [];
                                }
                                break;
                            }
                        }
                    }
                    if (W === Q) {
                        if (R == null) {
                            E.error(W);
                        } else {
                            break;
                        }
                    }
                    Q = W;
                }
                return O;
            }, E.error = function(e) {
                throw "Syntax error, unrecognized expression: " + e;
            };
            var D = E.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(e) {
                            return e.getAttribute("href");
                        },
                        type: function(e) {
                            return e.getAttribute("type");
                        }
                    },
                    relative: {
                        "+": function(j, i) {
                            var p = typeof i === "string",
                                o = p && !F.test(i),
                                n = p && !o;
                            o && (i = i.toLowerCase());
                            for (var m = 0, l = j.length, k; m < l; m++) {
                                if (k = j[m]) {
                                    while ((k = k.previousSibling) && k.nodeType !== 1) {}
                                    j[m] = n || k && k.nodeName.toLowerCase() === i ? k || !1 : k === i;
                                }
                            }
                            n && E.filter(i, j, !0);
                        },
                        ">": function(i, h) {
                            var n, m = typeof h === "string",
                                l = 0,
                                k = i.length;
                            if (m && !F.test(h)) {
                                h = h.toLowerCase();
                                for (; l < k; l++) {
                                    n = i[l];
                                    if (n) {
                                        var j = n.parentNode;
                                        i[l] = j.nodeName.toLowerCase() === h ? j : !1;
                                    }
                                }
                            } else {
                                for (; l < k; l++) {
                                    n = i[l], n && (i[l] = m ? n.parentNode : n.parentNode === h);
                                }
                                m && E.filter(h, i, !0);
                            }
                        },
                        "": function(h, e, l) {
                            var k, j = K++,
                                i = c;
                            typeof e === "string" && !F.test(e) && (e = e.toLowerCase(), k = e, i = d), i("parentNode", e, j, h, k, l);
                        },
                        "~": function(h, e, l) {
                            var k, j = K++,
                                i = c;
                            typeof e === "string" && !F.test(e) && (e = e.toLowerCase(), k = e, i = d), i("previousSibling", e, j, h, k, l);
                        }
                    },
                    find: {
                        ID: function(f, e, h) {
                            if (typeof e.getElementById !== "undefined" && !h) {
                                var g = e.getElementById(f[1]);
                                return g && g.parentNode ? [g] : [];
                            }
                        },
                        NAME: function(h, g) {
                            if (typeof g.getElementsByName !== "undefined") {
                                var l = [],
                                    k = g.getElementsByName(h[1]);
                                for (var j = 0, i = k.length; j < i; j++) {
                                    k[j].getAttribute("name") === h[1] && l.push(k[j]);
                                }
                                return l.length === 0 ? null : l;
                            }
                        },
                        TAG: function(f, e) {
                            if (typeof e.getElementsByTagName !== "undefined") {
                                return e.getElementsByTagName(f[1]);
                            }
                        }
                    },
                    preFilter: {
                        CLASS: function(j, i, p, o, n, m) {
                            j = " " + j[1].replace(G, "") + " ";
                            if (m) {
                                return j;
                            }
                            for (var l = 0, k;
                                (k = i[l]) != null; l++) {
                                k && (n ^ (k.className && (" " + k.className + " ").replace(/[\t\n\r]/g, " ").indexOf(j) >= 0) ? p || o.push(k) : p && (i[l] = !1));
                            }
                            return !1;
                        },
                        ID: function(e) {
                            return e[1].replace(G, "");
                        },
                        TAG: function(f, e) {
                            return f[1].replace(G, "").toLowerCase();
                        },
                        CHILD: function(f) {
                            if (f[1] === "nth") {
                                f[2] || E.error(f[0]), f[2] = f[2].replace(/^\+|\s*/g, "");
                                var e = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(f[2] === "even" && "2n" || f[2] === "odd" && "2n+1" || !/\D/.test(f[2]) && "0n+" + f[2] || f[2]);
                                f[2] = e[1] + (e[2] || 1) - 0, f[3] = e[3] - 0;
                            } else {
                                f[2] && E.error(f[0]);
                            }
                            f[0] = K++;
                            return f;
                        },
                        ATTR: function(i, h, n, m, l, k) {
                            var j = i[1] = i[1].replace(G, "");
                            !k && D.attrMap[j] && (i[1] = D.attrMap[j]), i[4] = (i[4] || i[5] || "").replace(G, ""), i[2] === "~=" && (i[4] = " " + i[4] + " ");
                            return i;
                        },
                        PSEUDO: function(a, l, k, j, i) {
                            if (a[1] === "not") {
                                if ((L.exec(a[3]) || "").length > 1 || /^\w/.test(a[3])) {
                                    a[3] = E(a[3], null, null, l);
                                } else {
                                    var h = E.filter(a[3], l, k, !0 ^ i);
                                    k || j.push.apply(j, h);
                                    return !1;
                                }
                            } else {
                                if (D.match.POS.test(a[0]) || D.match.CHILD.test(a[0])) {
                                    return !0;
                                }
                            }
                            return a;
                        },
                        POS: function(e) {
                            e.unshift(!0);
                            return e;
                        }
                    },
                    filters: {
                        enabled: function(e) {
                            return e.disabled === !1 && e.type !== "hidden";
                        },
                        disabled: function(e) {
                            return e.disabled === !0;
                        },
                        checked: function(e) {
                            return e.checked === !0;
                        },
                        selected: function(e) {
                            e.parentNode && e.parentNode.selectedIndex;
                            return e.selected === !0;
                        },
                        parent: function(e) {
                            return !!e.firstChild;
                        },
                        empty: function(e) {
                            return !e.firstChild;
                        },
                        has: function(f, e, g) {
                            return !!E(g[3], f).length;
                        },
                        header: function(e) {
                            return /h\d/i.test(e.nodeName);
                        },
                        text: function(e) {
                            return "text" === e.getAttribute("type");
                        },
                        radio: function(e) {
                            return "radio" === e.type;
                        },
                        checkbox: function(e) {
                            return "checkbox" === e.type;
                        },
                        file: function(e) {
                            return "file" === e.type;
                        },
                        password: function(e) {
                            return "password" === e.type;
                        },
                        submit: function(e) {
                            return "submit" === e.type;
                        },
                        image: function(e) {
                            return "image" === e.type;
                        },
                        reset: function(e) {
                            return "reset" === e.type;
                        },
                        button: function(e) {
                            return "button" === e.type || e.nodeName.toLowerCase() === "button";
                        },
                        input: function(e) {
                            return /input|select|textarea|button/i.test(e.nodeName);
                        }
                    },
                    setFilters: {
                        first: function(f, e) {
                            return e === 0;
                        },
                        last: function(f, e, h, g) {
                            return e === g.length - 1;
                        },
                        even: function(f, e) {
                            return e % 2 === 0;
                        },
                        odd: function(f, e) {
                            return e % 2 === 1;
                        },
                        lt: function(f, e, g) {
                            return e < g[3] - 0;
                        },
                        gt: function(f, e, g) {
                            return e > g[3] - 0;
                        },
                        nth: function(f, e, g) {
                            return g[3] - 0 === e;
                        },
                        eq: function(f, e, g) {
                            return g[3] - 0 === e;
                        }
                    },
                    filter: {
                        PSEUDO: function(r, q, p, o) {
                            var n = q[1],
                                m = D.filters[n];
                            if (m) {
                                return m(r, p, q, o);
                            }
                            if (n === "contains") {
                                return (r.textContent || r.innerText || E.getText([r]) || "").indexOf(q[3]) >= 0;
                            }
                            if (n === "not") {
                                var l = q[3];
                                for (var k = 0, j = l.length; k < j; k++) {
                                    if (l[k] === r) {
                                        return !1;
                                    }
                                }
                                return !0;
                            }
                            E.error(n);
                        },
                        CHILD: function(t, s) {
                            var r = s[1],
                                q = t;
                            switch (r) {
                                case "only":
                                case "first":
                                    while (q = q.previousSibling) {
                                        if (q.nodeType === 1) {
                                            return !1;
                                        }
                                    }
                                    if (r === "first") {
                                        return !0;
                                    }
                                    q = t;
                                case "last":
                                    while (q = q.nextSibling) {
                                        if (q.nodeType === 1) {
                                            return !1;
                                        }
                                    }
                                    return !0;
                                case "nth":
                                    var p = s[2],
                                        o = s[3];
                                    if (p === 1 && o === 0) {
                                        return !0;
                                    }
                                    var n = s[0],
                                        m = t.parentNode;
                                    if (m && (m.sizcache !== n || !t.nodeIndex)) {
                                        var l = 0;
                                        for (q = m.firstChild; q; q = q.nextSibling) {
                                            q.nodeType === 1 && (q.nodeIndex = ++l);
                                        }
                                        m.sizcache = n;
                                    }
                                    var k = t.nodeIndex - o;
                                    return p === 0 ? k === 0 : k % p === 0 && k / p >= 0;
                            }
                        },
                        ID: function(f, e) {
                            return f.nodeType === 1 && f.getAttribute("id") === e;
                        },
                        TAG: function(f, e) {
                            return e === "*" && f.nodeType === 1 || f.nodeName.toLowerCase() === e;
                        },
                        CLASS: function(f, e) {
                            return (" " + (f.className || f.getAttribute("class")) + " ").indexOf(e) > -1;
                        },
                        ATTR: function(i, h) {
                            var n = h[1],
                                m = D.attrHandle[n] ? D.attrHandle[n](i) : i[n] != null ? i[n] : i.getAttribute(n),
                                l = m + "",
                                k = h[2],
                                j = h[4];
                            return m == null ? k === "!=" : k === "=" ? l === j : k === "*=" ? l.indexOf(j) >= 0 : k === "~=" ? (" " + l + " ").indexOf(j) >= 0 : j ? k === "!=" ? l !== j : k === "^=" ? l.indexOf(j) === 0 : k === "$=" ? l.substr(l.length - j.length) === j : k === "|=" ? l === j || l.substr(0, j.length + 1) === j + "-" : !1 : l && m !== !1;
                        },
                        POS: function(h, g, l, k) {
                            var j = g[2],
                                i = D.setFilters[j];
                            if (i) {
                                return i(h, l, g, k);
                            }
                        }
                    }
                },
                C = D.match.POS,
                B = function(f, e) {
                    return "\\" + (e - 0 + 1);
                };
            for (var A in D.match) {
                D.match[A] = new RegExp(D.match[A].source + /(?![^\[]*\])(?![^\(]*\))/.source), D.leftMatch[A] = new RegExp(/(^(?:.|\r|\n)*?)/.source + D.match[A].source.replace(/\\(\d+)/g, B));
            }
            var z = function(f, e) {
                f = Array.prototype.slice.call(f, 0);
                if (e) {
                    e.push.apply(e, f);
                    return e;
                }
                return f;
            };
            try {
                Array.prototype.slice.call(aL.documentElement.childNodes, 0)[0].nodeType;
            } catch (y) {
                z = function(g, f) {
                    var j = 0,
                        i = f || [];
                    if (J.call(g) === "[object Array]") {
                        Array.prototype.push.apply(i, g);
                    } else {
                        if (typeof g.length === "number") {
                            for (var h = g.length; j < h; j++) {
                                i.push(g[j]);
                            }
                        } else {
                            for (; g[j]; j++) {
                                i.push(g[j]);
                            }
                        }
                    }
                    return i;
                };
            }
            var x, w;
            aL.documentElement.compareDocumentPosition ? x = function(f, e) {
                    if (f === e) {
                        I = !0;
                        return 0;
                    }
                    if (!f.compareDocumentPosition || !e.compareDocumentPosition) {
                        return f.compareDocumentPosition ? -1 : 1;
                    }
                    return f.compareDocumentPosition(e) & 4 ? -1 : 1;
                } : (x = function(t, s) {
                    var r, q, p = [],
                        o = [],
                        n = t.parentNode,
                        m = s.parentNode,
                        l = n;
                    if (t === s) {
                        I = !0;
                        return 0;
                    }
                    if (n === m) {
                        return w(t, s);
                    }
                    if (!n) {
                        return -1;
                    }
                    if (!m) {
                        return 1;
                    }
                    while (l) {
                        p.unshift(l), l = l.parentNode;
                    }
                    l = m;
                    while (l) {
                        o.unshift(l), l = l.parentNode;
                    }
                    r = p.length, q = o.length;
                    for (var g = 0; g < r && g < q; g++) {
                        if (p[g] !== o[g]) {
                            return w(p[g], o[g]);
                        }
                    }
                    return g === r ? w(t, o[g], -1) : w(p[g], s, 1);
                }, w = function(f, e, h) {
                    if (f === e) {
                        return h;
                    }
                    var g = f.nextSibling;
                    while (g) {
                        if (g === e) {
                            return -1;
                        }
                        g = g.nextSibling;
                    }
                    return 1;
                }), E.getText = function(f) {
                    var e = "",
                        h;
                    for (var g = 0; f[g]; g++) {
                        h = f[g], h.nodeType === 3 || h.nodeType === 4 ? e += h.nodeValue : h.nodeType !== 8 && (e += E.getText(h.childNodes));
                    }
                    return e;
                },
                function() {
                    var f = aL.createElement("div"),
                        h = "script" + (new Date).getTime(),
                        g = aL.documentElement;
                    f.innerHTML = "<a name='" + h + "'/>", g.insertBefore(f, g.firstChild), aL.getElementById(h) && (D.find.ID = function(i, l, k) {
                        if (typeof l.getElementById !== "undefined" && !k) {
                            var j = l.getElementById(i[1]);
                            return j ? j.id === i[1] || typeof j.getAttributeNode !== "undefined" && j.getAttributeNode("id").nodeValue === i[1] ? [j] : aN : [];
                        }
                    }, D.filter.ID = function(i, e) {
                        var j = typeof i.getAttributeNode !== "undefined" && i.getAttributeNode("id");
                        return i.nodeType === 1 && j && j.nodeValue === e;
                    }), g.removeChild(f), g = f = null;
                }(),
                function() {
                    var e = aL.createElement("div");
                    e.appendChild(aL.createComment("")), e.getElementsByTagName("*").length > 0 && (D.find.TAG = function(g, f) {
                        var j = f.getElementsByTagName(g[1]);
                        if (g[1] === "*") {
                            var i = [];
                            for (var h = 0; j[h]; h++) {
                                j[h].nodeType === 1 && i.push(j[h]);
                            }
                            j = i;
                        }
                        return j;
                    }), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#" && (D.attrHandle.href = function(f) {
                        return f.getAttribute("href", 2);
                    }), e = null;
                }(), aL.querySelectorAll && function() {
                    var g = E,
                        f = aL.createElement("div"),
                        i = "__sizzle__";
                    f.innerHTML = "<p class='TEST'></p>";
                    if (!f.querySelectorAll || f.querySelectorAll(".TEST").length !== 0) {
                        E = function(Q, P, O, N) {
                            P = P || aL;
                            if (!N && !E.isXML(P)) {
                                var M = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(Q);
                                if (M && (P.nodeType === 1 || P.nodeType === 9)) {
                                    if (M[1]) {
                                        return z(P.getElementsByTagName(Q), O);
                                    }
                                    if (M[2] && D.find.CLASS && P.getElementsByClassName) {
                                        return z(P.getElementsByClassName(M[2]), O);
                                    }
                                }
                                if (P.nodeType === 9) {
                                    if (Q === "body" && P.body) {
                                        return z([P.body], O);
                                    }
                                    if (M && M[3]) {
                                        var v = P.getElementById(M[3]);
                                        if (!v || !v.parentNode) {
                                            return z([], O);
                                        }
                                        if (v.id === M[3]) {
                                            return z([v], O);
                                        }
                                    }
                                    try {
                                        return z(P.querySelectorAll(Q), O);
                                    } catch (u) {}
                                } else {
                                    if (P.nodeType === 1 && P.nodeName.toLowerCase() !== "object") {
                                        var t = P,
                                            p = P.getAttribute("id"),
                                            l = p || i,
                                            k = P.parentNode,
                                            a = /^\s*[+~]/.test(Q);
                                        p ? l = l.replace(/'/g, "\\$&") : P.setAttribute("id", l), a && k && (P = P.parentNode);
                                        try {
                                            if (!a || k) {
                                                return z(P.querySelectorAll("[id='" + l + "'] " + Q), O);
                                            }
                                        } catch (R) {} finally {
                                            p || t.removeAttribute("id");
                                        }
                                    }
                                }
                            }
                            return g(Q, P, O, N);
                        };
                        for (var h in g) {
                            E[h] = g[h];
                        }
                        f = null;
                    }
                }(),
                function() {
                    var g = aL.documentElement,
                        f = g.matchesSelector || g.mozMatchesSelector || g.webkitMatchesSelector || g.msMatchesSelector,
                        i = !1;
                    try {
                        f.call(aL.documentElement, "[test!='']:sizzle");
                    } catch (h) {
                        i = !0;
                    }
                    f && (E.matchesSelector = function(j, l) {
                        l = l.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                        if (!E.isXML(j)) {
                            try {
                                if (i || !D.match.PSEUDO.test(l) && !/!=/.test(l)) {
                                    return f.call(j, l);
                                }
                            } catch (k) {}
                        }
                        return E(l, null, null, [j]).length > 0;
                    });
                }(),
                function() {
                    var e = aL.createElement("div");
                    e.innerHTML = "<div class='test e'></div><div class='test'></div>";
                    if (e.getElementsByClassName && e.getElementsByClassName("e").length !== 0) {
                        e.lastChild.className = "e";
                        if (e.getElementsByClassName("e").length === 1) {
                            return;
                        }
                        D.order.splice(1, 0, "CLASS"), D.find.CLASS = function(g, f, h) {
                            if (typeof f.getElementsByClassName !== "undefined" && !h) {
                                return f.getElementsByClassName(g[1]);
                            }
                        }, e = null;
                    }
                }(), aL.documentElement.contains ? E.contains = function(f, e) {
                    return f !== e && (f.contains ? f.contains(e) : !0);
                } : aL.documentElement.compareDocumentPosition ? E.contains = function(f, e) {
                    return !!(f.compareDocumentPosition(e) & 16);
                } : E.contains = function() {
                    return !1;
                }, E.isXML = function(f) {
                    var e = (f ? f.ownerDocument || f : 0).documentElement;
                    return e ? e.nodeName !== "HTML" : !1;
                };
            var b = function(j, i) {
                var p, o = [],
                    n = "",
                    m = i.nodeType ? [i] : i;
                while (p = D.match.PSEUDO.exec(j)) {
                    n += p[0], j = j.replace(D.match.PSEUDO, "");
                }
                j = D.relative[j] ? j + "*" : j;
                for (var l = 0, k = m.length; l < k; l++) {
                    E(j, m[l], o);
                }
                return E.filter(n, o);
            };
            aJ.find = E, aJ.expr = E.selectors, aJ.expr[":"] = aJ.expr.filters, aJ.unique = E.uniqueSort, aJ.text = E.getText, aJ.isXMLDoc = E.isXML, aJ.contains = E.contains;
        }();
    var cr = /Until$/,
        cq = /^(?:parents|prevUntil|prevAll)/,
        co = /,/,
        cn = /^.[^:#\[\.,]*$/,
        cm = Array.prototype.slice,
        cl = aJ.expr.match.POS,
        ck = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    aJ.fn.extend({
        find: function(i) {
            var d = this.pushStack("", "find", i),
                n = 0;
            for (var m = 0, l = this.length; m < l; m++) {
                n = d.length, aJ.find(i, this[m], d);
                if (m > 0) {
                    for (var k = n; k < d.length; k++) {
                        for (var j = 0; j < n; j++) {
                            if (d[j] === d[k]) {
                                d.splice(k--, 1);
                                break;
                            }
                        }
                    }
                }
            }
            return d;
        },
        has: function(d) {
            var c = aJ(d);
            return this.filter(function() {
                for (var b = 0, e = c.length; b < e; b++) {
                    if (aJ.contains(this, c[b])) {
                        return !0;
                    }
                }
            });
        },
        not: function(b) {
            return this.pushStack(ch(this, b, !1), "not", b);
        },
        filter: function(b) {
            return this.pushStack(ch(this, b, !0), "filter", b);
        },
        is: function(b) {
            return !!b && aJ.filter(b, this).length > 0;
        },
        closest: function(v, u) {
            var t = [],
                s, r, q = this[0];
            if (aJ.isArray(v)) {
                var p, o, n = {},
                    m = 1;
                if (q && v.length) {
                    for (s = 0, r = v.length; s < r; s++) {
                        o = v[s], n[o] || (n[o] = aJ.expr.match.POS.test(o) ? aJ(o, u || this.context) : o);
                    }
                    while (q && q.ownerDocument && q !== u) {
                        for (o in n) {
                            p = n[o], (p.jquery ? p.index(q) > -1 : aJ(q).is(p)) && t.push({
                                selector: o,
                                elem: q,
                                level: m
                            });
                        }
                        q = q.parentNode, m++;
                    }
                }
                return t;
            }
            var d = cl.test(v) ? aJ(v, u || this.context) : null;
            for (s = 0, r = this.length; s < r; s++) {
                q = this[s];
                while (q) {
                    if (d ? d.index(q) > -1 : aJ.find.matchesSelector(q, v)) {
                        t.push(q);
                        break;
                    }
                    q = q.parentNode;
                    if (!q || !q.ownerDocument || q === u) {
                        break;
                    }
                }
            }
            t = t.length > 1 ? aJ.unique(t) : t;
            return this.pushStack(t, "closest", v);
        },
        index: function(b) {
            if (!b || typeof b === "string") {
                return aJ.inArray(this[0], b ? aJ(b) : this.parent().children());
            }
            return aJ.inArray(b.jquery ? b[0] : b, this);
        },
        add: function(f, d) {
            var h = typeof f === "string" ? aJ(f, d) : aJ.makeArray(f),
                g = aJ.merge(this.get(), h);
            return this.pushStack(ci(h[0]) || ci(g[0]) ? g : aJ.unique(g));
        },
        andSelf: function() {
            return this.add(this.prevObject);
        }
    }), aJ.each({
        parent: function(d) {
            var c = d.parentNode;
            return c && c.nodeType !== 11 ? c : null;
        },
        parents: function(b) {
            return aJ.dir(b, "parentNode");
        },
        parentsUntil: function(e, d, f) {
            return aJ.dir(e, "parentNode", f);
        },
        next: function(b) {
            return aJ.nth(b, 2, "nextSibling");
        },
        prev: function(b) {
            return aJ.nth(b, 2, "previousSibling");
        },
        nextAll: function(b) {
            return aJ.dir(b, "nextSibling");
        },
        prevAll: function(b) {
            return aJ.dir(b, "previousSibling");
        },
        nextUntil: function(e, d, f) {
            return aJ.dir(e, "nextSibling", f);
        },
        prevUntil: function(e, d, f) {
            return aJ.dir(e, "previousSibling", f);
        },
        siblings: function(b) {
            return aJ.sibling(b.parentNode.firstChild, b);
        },
        children: function(b) {
            return aJ.sibling(b.firstChild);
        },
        contents: function(b) {
            return aJ.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : aJ.makeArray(b.childNodes);
        }
    }, function(d, c) {
        aJ.fn[d] = function(i, h) {
            var b = aJ.map(this, c, i),
                a = cm.call(arguments);
            cr.test(d) || (h = i), h && typeof h === "string" && (b = aJ.filter(h, b)), b = this.length > 1 && !ck[d] ? aJ.unique(b) : b, (this.length > 1 || co.test(h)) && cq.test(d) && (b = b.reverse());
            return this.pushStack(b, d, a.join(","));
        };
    }), aJ.extend({
        filter: function(e, d, f) {
            f && (e = ":not(" + e + ")");
            return d.length === 1 ? aJ.find.matchesSelector(d[0], e) ? [d[0]] : [] : aJ.find.matches(e, d);
        },
        dir: function(b, j, i) {
            var h = [],
                d = b[j];
            while (d && d.nodeType !== 9 && (i === aN || d.nodeType !== 1 || !aJ(d).is(i))) {
                d.nodeType === 1 && h.push(d), d = d[j];
            }
            return h;
        },
        nth: function(g, f, j, i) {
            f = f || 1;
            var h = 0;
            for (; g; g = g[j]) {
                if (g.nodeType === 1 && ++h === f) {
                    break;
                }
            }
            return g;
        },
        sibling: function(e, d) {
            var f = [];
            for (; e; e = e.nextSibling) {
                e.nodeType === 1 && e !== d && f.push(e);
            }
            return f;
        }
    });
    var b8 = / jQuery\d+="(?:\d+|null)"/g,
        b6 = /^\s+/,
        b4 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        b2 = /<([\w:]+)/,
        b0 = /<tbody/i,
        a8 = /<|&#?\w+;/,
        a6 = /<(?:script|object|embed|option|style)/i,
        a4 = /checked\s*(?:[^=]|=\s*.checked.)/i,
        a2 = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    a2.optgroup = a2.option, a2.tbody = a2.tfoot = a2.colgroup = a2.caption = a2.thead, a2.th = a2.td, aJ.support.htmlSerialize || (a2._default = [1, "div<div>", "</div>"]), aJ.fn.extend({
        text: function(b) {
            if (aJ.isFunction(b)) {
                return this.each(function(a) {
                    var d = aJ(this);
                    d.text(b.call(this, a, d.text()));
                });
            }
            if (typeof b !== "object" && b !== aN) {
                return this.empty().append((this[0] && this[0].ownerDocument || aL).createTextNode(b));
            }
            return aJ.text(this);
        },
        wrapAll: function(d) {
            if (aJ.isFunction(d)) {
                return this.each(function(a) {
                    aJ(this).wrapAll(d.call(this, a));
                });
            }
            if (this[0]) {
                var c = aJ(d, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
                    var b = this;
                    while (b.firstChild && b.firstChild.nodeType === 1) {
                        b = b.firstChild;
                    }
                    return b;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(b) {
            if (aJ.isFunction(b)) {
                return this.each(function(a) {
                    aJ(this).wrapInner(b.call(this, a));
                });
            }
            return this.each(function() {
                var a = aJ(this),
                    d = a.contents();
                d.length ? d.wrapAll(b) : a.append(b);
            });
        },
        wrap: function(b) {
            return this.each(function() {
                aJ(this).wrapAll(b);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                aJ.nodeName(this, "body") || aJ(this).replaceWith(this.childNodes);
            }).end();
        },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                this.nodeType === 1 && this.appendChild(b);
            });
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                this.nodeType === 1 && this.insertBefore(b, this.firstChild);
            });
        },
        before: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function(c) {
                    this.parentNode.insertBefore(c, this);
                });
            }
            if (arguments.length) {
                var b = aJ(arguments[0]);
                b.push.apply(b, this.toArray());
                return this.pushStack(b, "before", arguments);
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function(c) {
                    this.parentNode.insertBefore(c, this.nextSibling);
                });
            }
            if (arguments.length) {
                var b = this.pushStack(this, "after", arguments);
                b.push.apply(b, aJ(arguments[0]).toArray());
                return b;
            }
        },
        remove: function(f, d) {
            for (var h = 0, g;
                (g = this[h]) != null; h++) {
                if (!f || aJ.filter(f, [g]).length) {
                    !d && g.nodeType === 1 && (aJ.cleanData(g.getElementsByTagName("*")), aJ.cleanData([g])), g.parentNode && g.parentNode.removeChild(g);
                }
            }
            return this;
        },
        empty: function() {
            for (var d = 0, c;
                (c = this[d]) != null; d++) {
                c.nodeType === 1 && aJ.cleanData(c.getElementsByTagName("*"));
                while (c.firstChild) {
                    c.removeChild(c.firstChild);
                }
            }
            return this;
        },
        clone: function(d, c) {
            d = d == null ? !1 : d, c = c == null ? d : c;
            return this.map(function() {
                return aJ.clone(this, d, c);
            });
        },
        html: function(b) {
            if (b === aN) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(b8, "") : null;
            }
            if (typeof b !== "string" || a6.test(b) || !aJ.support.leadingWhitespace && b6.test(b) || a2[(b2.exec(b) || ["", ""])[1].toLowerCase()]) {
                aJ.isFunction(b) ? this.each(function(a) {
                    var e = aJ(this);
                    e.html(b.call(this, a, e.html()));
                }) : this.empty().append(b);
            } else {
                b = b.replace(b4, "<$1></$2>");
                try {
                    for (var h = 0, g = this.length; h < g; h++) {
                        this[h].nodeType === 1 && (aJ.cleanData(this[h].getElementsByTagName("*")), this[h].innerHTML = b);
                    }
                } catch (d) {
                    this.empty().append(b);
                }
            }
            return this;
        },
        replaceWith: function(b) {
            if (this[0] && this[0].parentNode) {
                if (aJ.isFunction(b)) {
                    return this.each(function(a) {
                        var f = aJ(this),
                            d = f.html();
                        f.replaceWith(b.call(this, a, d));
                    });
                }
                typeof b !== "string" && (b = aJ(b).detach());
                return this.each(function() {
                    var a = this.nextSibling,
                        d = this.parentNode;
                    aJ(this).remove(), a ? aJ(a).before(b) : aJ(d).append(b);
                });
            }
            return this.pushStack(aJ(aJ.isFunction(b) ? b() : b), "replaceWith", b);
        },
        detach: function(b) {
            return this.remove(b, !0);
        },
        domManip: function(x, w, v) {
            var u, t, s, r, q = x[0],
                p = [];
            if (!aJ.support.checkClone && arguments.length === 3 && typeof q === "string" && a4.test(q)) {
                return this.each(function() {
                    aJ(this).domManip(x, w, v, !0);
                });
            }
            if (aJ.isFunction(q)) {
                return this.each(function(c) {
                    var a = aJ(this);
                    x[0] = q.call(this, c, w ? a.html() : aN), a.domManip(x, w, v);
                });
            }
            if (this[0]) {
                r = q && q.parentNode, aJ.support.parentNode && r && r.nodeType === 11 && r.childNodes.length === this.length ? u = {
                    fragment: r
                } : u = aJ.buildFragment(x, this, p), s = u.fragment, s.childNodes.length === 1 ? t = s = s.firstChild : t = s.firstChild;
                if (t) {
                    w = w && aJ.nodeName(t, "tr");
                    for (var o = 0, d = this.length, b = d - 1; o < d; o++) {
                        v.call(w ? a0(this[o], t) : this[o], u.cacheable || d > 1 && o < b ? aJ.clone(s, !0, !0) : s);
                    }
                }
                p.length && aJ.each(p, b9);
            }
            return this;
        }
    }), aJ.buildFragment = function(d, c, n) {
        var m, l, k, j = c && c[0] ? c[0].ownerDocument || c[0] : aL;
        d.length === 1 && typeof d[0] === "string" && d[0].length < 512 && j === aL && d[0].charAt(0) === "<" && !a6.test(d[0]) && (aJ.support.checkClone || !a4.test(d[0])) && (l = !0, k = aJ.fragments[d[0]], k && (k !== 1 && (m = k))), m || (m = j.createDocumentFragment(), aJ.clean(d, j, m, n)), l && (aJ.fragments[d[0]] = k ? m : 1);
        return {
            fragment: m,
            cacheable: l
        };
    }, aJ.fragments = {}, aJ.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(d, c) {
        aJ.fn[d] = function(o) {
            var n = [],
                m = aJ(o),
                l = this.length === 1 && this[0].parentNode;
            if (l && l.nodeType === 11 && l.childNodes.length === 1 && m.length === 1) {
                m[c](this[0]);
                return this;
            }
            for (var k = 0, b = m.length; k < b; k++) {
                var a = (k > 0 ? this.clone(!0) : this).get();
                aJ(m[k])[c](a), n = n.concat(a);
            }
            return this.pushStack(n, d, m.selector);
        };
    }), aJ.extend({
        clone: function(i, d, n) {
            var m = i.cloneNode(!0),
                l, k, j;
            if ((!aJ.support.noCloneEvent || !aJ.support.noCloneChecked) && (i.nodeType === 1 || i.nodeType === 11) && !aJ.isXMLDoc(i)) {
                cX(i, m), l = aS(i), k = aS(m);
                for (j = 0; l[j]; ++j) {
                    cX(l[j], k[j]);
                }
            }
            if (d) {
                aY(i, m);
                if (n) {
                    l = aS(i), k = aS(m);
                    for (j = 0; l[j]; ++j) {
                        aY(l[j], k[j]);
                    }
                }
            }
            return m;
        },
        clean: function(B, A, z, y) {
            A = A || aL, typeof A.createElement === "undefined" && (A = A.ownerDocument || A[0] && A[0].ownerDocument || aL);
            var x = [];
            for (var w = 0, v;
                (v = B[w]) != null; w++) {
                typeof v === "number" && (v += "");
                if (!v) {
                    continue;
                }
                if (typeof v !== "string" || a8.test(v)) {
                    if (typeof v === "string") {
                        v = v.replace(b4, "<$1></$2>");
                        var u = (b2.exec(v) || ["", ""])[1].toLowerCase(),
                            t = a2[u] || a2._default,
                            s = t[0],
                            r = A.createElement("div");
                        r.innerHTML = t[1] + v + t[2];
                        while (s--) {
                            r = r.lastChild;
                        }
                        if (!aJ.support.tbody) {
                            var q = b0.test(v),
                                d = u === "table" && !q ? r.firstChild && r.firstChild.childNodes : t[1] === "<table>" && !q ? r.childNodes : [];
                            for (var c = d.length - 1; c >= 0; --c) {
                                aJ.nodeName(d[c], "tbody") && !d[c].childNodes.length && d[c].parentNode.removeChild(d[c]);
                            }
                        }!aJ.support.leadingWhitespace && b6.test(v) && r.insertBefore(A.createTextNode(b6.exec(v)[0]), r.firstChild), v = r.childNodes;
                    }
                } else {
                    v = A.createTextNode(v);
                }
                v.nodeType ? x.push(v) : x = aJ.merge(x, v);
            }
            if (z) {
                for (w = 0; x[w]; w++) {
                    !y || !aJ.nodeName(x[w], "script") || x[w].type && x[w].type.toLowerCase() !== "text/javascript" ? (x[w].nodeType === 1 && x.splice.apply(x, [w + 1, 0].concat(aJ.makeArray(x[w].getElementsByTagName("script")))), z.appendChild(x[w])) : y.push(x[w].parentNode ? x[w].parentNode.removeChild(x[w]) : x[w]);
                }
            }
            return x;
        },
        cleanData: function(t) {
            var s, r, q = aJ.cache,
                p = aJ.expando,
                o = aJ.event.special,
                n = aJ.support.deleteExpando;
            for (var m = 0, l;
                (l = t[m]) != null; m++) {
                if (l.nodeName && aJ.noData[l.nodeName.toLowerCase()]) {
                    continue;
                }
                r = l[aJ.expando];
                if (r) {
                    s = q[r] && q[r][p];
                    if (s && s.events) {
                        for (var d in s.events) {
                            o[d] ? aJ.event.remove(l, d) : aJ.removeEvent(l, d, s.handle);
                        }
                        s.handle && (s.handle.elem = null);
                    }
                    n ? delete l[aJ.expando] : l.removeAttribute && l.removeAttribute(aJ.expando), delete q[r];
                }
            }
        }
    });
    var b7 = /alpha\([^)]*\)/i,
        b5 = /opacity=([^)]*)/,
        b3 = /-([a-z])/ig,
        b1 = /([A-Z])/g,
        a9 = /^-?\d+(?:px)?$/i,
        a7 = /^-?\d/,
        a5 = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        a3 = ["Left", "Right"],
        a1 = ["Top", "Bottom"],
        aZ, aX, aW, aV = function(d, c) {
            return c.toUpperCase();
        };
    aJ.fn.css = function(b, d) {
        if (arguments.length === 2 && d === aN) {
            return this;
        }
        return aJ.access(this, b, d, !0, function(f, h, g) {
            return g !== aN ? aJ.style(f, h, g) : aJ.css(f, h);
        });
    }, aJ.extend({
        cssHooks: {
            opacity: {
                get: function(e, d) {
                    if (d) {
                        var f = aZ(e, "opacity", "opacity");
                        return f === "" ? "1" : f;
                    }
                    return e.style.opacity;
                }
            }
        },
        cssNumber: {
            zIndex: !0,
            fontWeight: !0,
            opacity: !0,
            zoom: !0,
            lineHeight: !0
        },
        cssProps: {
            "float": aJ.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(r, q, p, o) {
            if (r && r.nodeType !== 3 && r.nodeType !== 8 && r.style) {
                var n, m = aJ.camelCase(q),
                    l = r.style,
                    d = aJ.cssHooks[m];
                q = aJ.cssProps[m] || m;
                if (p === aN) {
                    if (d && "get" in d && (n = d.get(r, !1, o)) !== aN) {
                        return n;
                    }
                    return l[q];
                }
                if (typeof p === "number" && isNaN(p) || p == null) {
                    return;
                }
                typeof p === "number" && !aJ.cssNumber[m] && (p += "px");
                if (!d || !("set" in d) || (p = d.set(r, p)) !== aN) {
                    try {
                        l[q] = p;
                    } catch (b) {}
                }
            }
        },
        css: function(b, l, k) {
            var j, i = aJ.camelCase(l),
                d = aJ.cssHooks[i];
            l = aJ.cssProps[i] || i;
            if (d && "get" in d && (j = d.get(b, !0, k)) !== aN) {
                return j;
            }
            if (aZ) {
                return aZ(b, l, i);
            }
        },
        swap: function(g, f, j) {
            var i = {};
            for (var h in f) {
                i[h] = g.style[h], g.style[h] = f[h];
            }
            j.call(g);
            for (h in f) {
                g.style[h] = i[h];
            }
        },
        camelCase: function(b) {
            return b.replace(b3, aV);
        }
    }), aJ.curCSS = aJ.css, aJ.each(["height", "width"], function(d, c) {
        aJ.cssHooks[c] = {
            get: function(b, i, h) {
                var g;
                if (i) {
                    b.offsetWidth !== 0 ? g = aU(b, c, h) : aJ.swap(b, a5, function() {
                        g = aU(b, c, h);
                    });
                    if (g <= 0) {
                        g = aZ(b, c, c), g === "0px" && aW && (g = aW(b, c, c));
                        if (g != null) {
                            return g === "" || g === "auto" ? "0px" : g;
                        }
                    }
                    if (g < 0 || g == null) {
                        g = b.style[c];
                        return g === "" || g === "auto" ? "0px" : g;
                    }
                    return typeof g === "string" ? g : g + "px";
                }
            },
            set: function(f, e) {
                if (!a9.test(e)) {
                    return e;
                }
                e = parseFloat(e);
                if (e >= 0) {
                    return e + "px";
                }
            }
        };
    }), aJ.support.opacity || (aJ.cssHooks.opacity = {
        get: function(d, c) {
            return b5.test((c && d.currentStyle ? d.currentStyle.filter : d.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : c ? "1" : "";
        },
        set: function(g, d) {
            var j = g.style;
            j.zoom = 1;
            var i = aJ.isNaN(d) ? "" : "alpha(opacity=" + d * 100 + ")",
                h = j.filter || "";
            j.filter = b7.test(h) ? h.replace(b7, i) : j.filter + " " + i;
        }
    }), aL.defaultView && aL.defaultView.getComputedStyle && (aX = function(b, l, k) {
        var j, i, d;
        k = k.replace(b1, "-$1").toLowerCase();
        if (!(i = b.ownerDocument.defaultView)) {
            return aN;
        }
        if (d = i.getComputedStyle(b, null)) {
            j = d.getPropertyValue(k), j === "" && !aJ.contains(b.ownerDocument.documentElement, b) && (j = aJ.style(b, k));
        }
        return j;
    }), aL.documentElement.currentStyle && (aW = function(h, g) {
        var l, k = h.currentStyle && h.currentStyle[g],
            j = h.runtimeStyle && h.runtimeStyle[g],
            i = h.style;
        !a9.test(k) && a7.test(k) && (l = i.left, j && (h.runtimeStyle.left = h.currentStyle.left), i.left = g === "fontSize" ? "1em" : k || 0, k = i.pixelLeft + "px", i.left = l, j && (h.runtimeStyle.left = j));
        return k === "" ? "auto" : k;
    }), aZ = aX || aW, aJ.expr && aJ.expr.filters && (aJ.expr.filters.hidden = function(e) {
        var d = e.offsetWidth,
            f = e.offsetHeight;
        return d === 0 && f === 0 || !aJ.support.reliableHiddenOffsets && (e.style.display || aJ.css(e, "display")) === "none";
    }, aJ.expr.filters.visible = function(b) {
        return !aJ.expr.filters.hidden(b);
    });
    var aT = /%20/g,
        aR = /\[\]$/,
        aQ = /\r?\n/g,
        aO = /#.*$/,
        aM = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        aK = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        aI = /(?:^file|^widget|\-extension):$/,
        aG = /^(?:GET|HEAD)$/,
        aE = /^\/\//,
        aC = /\?/,
        aA = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        cW = /^(?:select|textarea)/i,
        cV = /\s+/,
        cU = /([?&])_=[^&]*/,
        cT = /(^|\-)([a-z])/g,
        cS = function(e, d, f) {
            return d + f.toUpperCase();
        },
        cR = /^([\w\+\.\-]+:)\/\/([^\/?#:]*)(?::(\d+))?/,
        cQ = aJ.fn.load,
        cP = {},
        cO = {},
        cN, cM;
    try {
        cN = aL.location.href;
    } catch (cL) {
        cN = aL.createElement("a"), cN.href = "", cN = cN.href;
    }
    cM = cR.exec(cN.toLowerCase()), aJ.fn.extend({
        load: function(b, n, m) {
            if (typeof b !== "string" && cQ) {
                return cQ.apply(this, arguments);
            }
            if (!this.length) {
                return this;
            }
            var l = b.indexOf(" ");
            if (l >= 0) {
                var k = b.slice(l, b.length);
                b = b.slice(0, l);
            }
            var j = "GET";
            n && (aJ.isFunction(n) ? (m = n, n = aN) : typeof n === "object" && (n = aJ.param(n, aJ.ajaxSettings.traditional), j = "POST"));
            var d = this;
            aJ.ajax({
                url: b,
                type: j,
                dataType: "html",
                data: n,
                complete: function(f, e, g) {
                    g = f.responseText, f.isResolved() && (f.done(function(c) {
                        g = c;
                    }), d.html(k ? aJ("<div>").append(g.replace(aA, "")).find(k) : g)), m && d.each(m, [g, e, f]);
                }
            });
            return this;
        },
        serialize: function() {
            return aJ.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? aJ.makeArray(this.elements) : this;
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || cW.test(this.nodeName) || aK.test(this.type));
            }).map(function(e, d) {
                var f = aJ(this).val();
                return f == null ? null : aJ.isArray(f) ? aJ.map(f, function(b, g) {
                    return {
                        name: d.name,
                        value: b.replace(aQ, "\r\n")
                    };
                }) : {
                    name: d.name,
                    value: f.replace(aQ, "\r\n")
                };
            }).get();
        }
    }), aJ.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(d, c) {
        aJ.fn[c] = function(b) {
            return this.bind(c, b);
        };
    }), aJ.each(["get", "post"], function(b, d) {
        aJ[d] = function(c, j, i, h) {
            aJ.isFunction(j) && (h = h || i, i = j, j = aN);
            return aJ.ajax({
                type: d,
                url: c,
                data: j,
                success: i,
                dataType: h
            });
        };
    }), aJ.extend({
        getScript: function(b, d) {
            return aJ.get(b, aN, d, "script");
        },
        getJSON: function(e, d, f) {
            return aJ.get(e, d, f, "json");
        },
        ajaxSetup: function(e, d) {
            d ? aJ.extend(!0, e, aJ.ajaxSettings, d) : (d = e, e = aJ.extend(!0, aJ.ajaxSettings, d));
            for (var f in {
                    context: 1,
                    url: 1
                }) {
                f in d ? e[f] = d[f] : f in aJ.ajaxSettings && (e[f] = aJ.ajaxSettings[f]);
            }
            return e;
        },
        ajaxSettings: {
            url: cN,
            isLocal: aI.test(cM[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": aP.String,
                "text html": !0,
                "text json": aJ.parseJSON,
                "text xml": aJ.parseXML
            }
        },
        ajaxPrefilter: cK(cP),
        ajaxTransport: cK(cO),
        ajax: function(T, S) {
            function A(m, i, g, f) {
                if (E !== 2) {
                    E = 2, G && clearTimeout(G), H = aN, J = f || "", B.readyState = m ? 4 : 0;
                    var e, r, p, o = g ? cH(R, B, g) : aN,
                        k, j;
                    if (m >= 200 && m < 300 || m === 304) {
                        if (R.ifModified) {
                            if (k = B.getResponseHeader("Last-Modified")) {
                                aJ.lastModified[L] = k;
                            }
                            if (j = B.getResponseHeader("Etag")) {
                                aJ.etag[L] = j;
                            }
                        }
                        if (m === 304) {
                            i = "notmodified", e = !0;
                        } else {
                            try {
                                r = cG(R, o), i = "success", e = !0;
                            } catch (h) {
                                i = "parsererror", p = h;
                            }
                        }
                    } else {
                        p = i;
                        if (!i || m) {
                            i = "error", m < 0 && (m = 0);
                        }
                    }
                    B.status = m, B.statusText = i, e ? O.resolveWith(Q, [r, i, B]) : O.rejectWith(Q, [B, i, p]), B.statusCode(M), M = aN, D && P.trigger("ajax" + (e ? "Success" : "Error"), [B, R, e ? r : p]), N.resolveWith(Q, [B, i]), D && (P.trigger("ajaxComplete", [B, R]), --aJ.active || aJ.event.trigger("ajaxStop"));
                }
            }
            typeof T === "object" && (S = T, T = aN), S = S || {};
            var R = aJ.ajaxSetup({}, S),
                Q = R.context || R,
                P = Q !== R && (Q.nodeType || Q instanceof aJ) ? aJ(Q) : aJ.event,
                O = aJ.Deferred(),
                N = aJ._Deferred(),
                M = R.statusCode || {},
                L, K = {},
                J, I, H, G, F, E = 0,
                D, C, B = {
                    readyState: 0,
                    setRequestHeader: function(e, c) {
                        E || (K[e.toLowerCase().replace(cT, cS)] = c);
                        return this;
                    },
                    getAllResponseHeaders: function() {
                        return E === 2 ? J : null;
                    },
                    getResponseHeader: function(e) {
                        var f;
                        if (E === 2) {
                            if (!I) {
                                I = {};
                                while (f = aM.exec(J)) {
                                    I[f[1].toLowerCase()] = f[2];
                                }
                            }
                            f = I[e.toLowerCase()];
                        }
                        return f === aN ? null : f;
                    },
                    overrideMimeType: function(c) {
                        E || (R.mimeType = c);
                        return this;
                    },
                    abort: function(c) {
                        c = c || "abort", H && H.abort(c), A(0, c);
                        return this;
                    }
                };
            O.promise(B), B.success = B.done, B.error = B.fail, B.complete = N.done, B.statusCode = function(e) {
                if (e) {
                    var c;
                    if (E < 2) {
                        for (c in e) {
                            M[c] = [M[c], e[c]];
                        }
                    } else {
                        c = e[B.status], B.then(c, c);
                    }
                }
                return this;
            }, R.url = ((T || R.url) + "").replace(aO, "").replace(aE, cM[1] + "//"), R.dataTypes = aJ.trim(R.dataType || "*").toLowerCase().split(cV), R.crossDomain || (F = cR.exec(R.url.toLowerCase()), R.crossDomain = F && (F[1] != cM[1] || F[2] != cM[2] || (F[3] || (F[1] === "http:" ? 80 : 443)) != (cM[3] || (cM[1] === "http:" ? 80 : 443)))), R.data && R.processData && typeof R.data !== "string" && (R.data = aJ.param(R.data, R.traditional)), cJ(cP, R, S, B);
            if (E === 2) {
                return !1;
            }
            D = R.global, R.type = R.type.toUpperCase(), R.hasContent = !aG.test(R.type), D && aJ.active++ === 0 && aJ.event.trigger("ajaxStart");
            if (!R.hasContent) {
                R.data && (R.url += (aC.test(R.url) ? "&" : "?") + R.data), L = R.url;
                if (R.cache === !1) {
                    var z = aJ.now(),
                        d = R.url.replace(cU, "$1_=" + z);
                    R.url = d + (d === R.url ? (aC.test(R.url) ? "&" : "?") + "_=" + z : "");
                }
            }
            if (R.data && R.hasContent && R.contentType !== !1 || S.contentType) {
                K["Content-Type"] = R.contentType;
            }
            R.ifModified && (L = L || R.url, aJ.lastModified[L] && (K["If-Modified-Since"] = aJ.lastModified[L]), aJ.etag[L] && (K["If-None-Match"] = aJ.etag[L])), K.Accept = R.dataTypes[0] && R.accepts[R.dataTypes[0]] ? R.accepts[R.dataTypes[0]] + (R.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : R.accepts["*"];
            for (C in R.headers) {
                B.setRequestHeader(C, R.headers[C]);
            }
            if (R.beforeSend && (R.beforeSend.call(Q, B, R) === !1 || E === 2)) {
                B.abort();
                return !1;
            }
            for (C in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                B[C](R[C]);
            }
            H = cJ(cO, R, S, B);
            if (H) {
                B.readyState = 1, D && P.trigger("ajaxSend", [B, R]), R.async && R.timeout > 0 && (G = setTimeout(function() {
                    B.abort("timeout");
                }, R.timeout));
                try {
                    E = 1, H.send(K, A);
                } catch (b) {
                    status < 2 ? A(-1, b) : aJ.error(b);
                }
            } else {
                A(-1, "No Transport");
            }
            return B;
        },
        param: function(b, j) {
            var i = [],
                h = function(e, c) {
                    c = aJ.isFunction(c) ? c() : c, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(c);
                };
            j === aN && (j = aJ.ajaxSettings.traditional);
            if (aJ.isArray(b) || b.jquery && !aJ.isPlainObject(b)) {
                aJ.each(b, function() {
                    h(this.name, this.value);
                });
            } else {
                for (var d in b) {
                    cI(d, b[d], j, h);
                }
            }
            return i.join("&").replace(aT, "+");
        }
    }), aJ.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cF = aJ.now(),
        cD = /(\=)\?(&|$)|()\?\?()/i;
    aJ.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return aJ.expando + "_" + cF++;
        }
    }), aJ.ajaxPrefilter("json jsonp", function(v, u, t) {
        var s = typeof v.data === "string";
        if (v.dataTypes[0] === "jsonp" || u.jsonpCallback || u.jsonp != null || v.jsonp !== !1 && (cD.test(v.url) || s && cD.test(v.data))) {
            var r, q = v.jsonpCallback = aJ.isFunction(v.jsonpCallback) ? v.jsonpCallback() : v.jsonpCallback,
                p = aP[q],
                o = v.url,
                n = v.data,
                d = "$1" + q + "$2",
                a = function() {
                    aP[q] = p, r && aJ.isFunction(p) && aP[q](r[0]);
                };
            v.jsonp !== !1 && (o = o.replace(cD, d), v.url === o && (s && (n = n.replace(cD, d)), v.data === n && (o += (/\?/.test(o) ? "&" : "?") + v.jsonp + "=" + q))), v.url = o, v.data = n, aP[q] = function(b) {
                r = [b];
            }, t.then(a, a), v.converters["script json"] = function() {
                r || aJ.error(q + " was not called");
                return r[0];
            }, v.dataTypes[0] = "json";
            return "script";
        }
    }), aJ.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                aJ.globalEval(b);
                return b;
            }
        }
    }), aJ.ajaxPrefilter("script", function(b) {
        b.cache === aN && (b.cache = !1), b.crossDomain && (b.type = "GET", b.global = !1);
    }), aJ.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var f, c = aL.head || aL.getElementsByTagName("head")[0] || aL.documentElement;
            return {
                send: function(d, a) {
                    f = aL.createElement("script"), f.async = "async", b.scriptCharset && (f.charset = b.scriptCharset), f.src = b.url, f.onload = f.onreadystatechange = function(e, g) {
                        if (!f.readyState || /loaded|complete/.test(f.readyState)) {
                            f.onload = f.onreadystatechange = null, c && f.parentNode && c.removeChild(f), f = aN, g || a(200, "success");
                        }
                    }, c.insertBefore(f, c.firstChild);
                },
                abort: function() {
                    f && f.onload(0, 1);
                }
            };
        }
    });
    var cB = aJ.now(),
        cz, cx;
    aJ.ajaxSettings.xhr = aP.ActiveXObject ? function() {
        return !this.isLocal && cu() || cs();
    } : cu, cx = aJ.ajaxSettings.xhr(), aJ.support.ajax = !!cx, aJ.support.cors = cx && "withCredentials" in cx, cx = aN, aJ.support.ajax && aJ.ajaxTransport(function(b) {
        if (!b.crossDomain || aJ.support.cors) {
            var d;
            return {
                send: function(n, m) {
                    var l = b.xhr(),
                        k, c;
                    b.username ? l.open(b.type, b.url, b.async, b.username, b.password) : l.open(b.type, b.url, b.async);
                    if (b.xhrFields) {
                        for (c in b.xhrFields) {
                            l[c] = b.xhrFields[c];
                        }
                    }
                    b.mimeType && l.overrideMimeType && l.overrideMimeType(b.mimeType), (!b.crossDomain || b.hasContent) && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (c in n) {
                            l.setRequestHeader(c, n[c]);
                        }
                    } catch (a) {}
                    l.send(b.hasContent && b.data || null), d = function(v, u) {
                        var t, s, r, q, h;
                        try {
                            if (d && (u || l.readyState === 4)) {
                                d = aN, k && (l.onreadystatechange = aJ.noop, delete cz[k]);
                                if (u) {
                                    l.readyState !== 4 && l.abort();
                                } else {
                                    t = l.status, r = l.getAllResponseHeaders(), q = {}, h = l.responseXML, h && h.documentElement && (q.xml = h), q.text = l.responseText;
                                    try {
                                        s = l.statusText;
                                    } catch (g) {
                                        s = "";
                                    }
                                    t || !b.isLocal || b.crossDomain ? t === 1223 && (t = 204) : t = q.text ? 200 : 404;
                                }
                            }
                        } catch (f) {
                            u || m(-1, f);
                        }
                        q && m(t, s, q, r);
                    }, b.async && l.readyState !== 4 ? (cz || (cz = {}, cw()), k = cB++, l.onreadystatechange = cz[k] = d) : d();
                },
                abort: function() {
                    d && d(0, 1);
                }
            };
        }
    });
    var cp = {},
        cY = /^(?:toggle|show|hide)$/,
        cj = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        at, aq = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    aJ.fn.extend({
        show: function(i, d, n) {
            var m, l;
            if (i || i === 0) {
                return this.animate(ap("show", 3), i, d, n);
            }
            for (var k = 0, j = this.length; k < j; k++) {
                m = this[k], l = m.style.display, !aJ._data(m, "olddisplay") && l === "none" && (l = m.style.display = ""), l === "" && aJ.css(m, "display") === "none" && aJ._data(m, "olddisplay", an(m.nodeName));
            }
            for (k = 0; k < j; k++) {
                m = this[k], l = m.style.display;
                if (l === "" || l === "none") {
                    m.style.display = aJ._data(m, "olddisplay") || "";
                }
            }
            return this;
        },
        hide: function(h, d, l) {
            if (h || h === 0) {
                return this.animate(ap("hide", 3), h, d, l);
            }
            for (var k = 0, j = this.length; k < j; k++) {
                var i = aJ.css(this[k], "display");
                i !== "none" && !aJ._data(this[k], "olddisplay") && aJ._data(this[k], "olddisplay", i);
            }
            for (k = 0; k < j; k++) {
                this[k].style.display = "none";
            }
            return this;
        },
        _toggle: aJ.fn.toggle,
        toggle: function(f, d, h) {
            var g = typeof f === "boolean";
            aJ.isFunction(f) && aJ.isFunction(d) ? this._toggle.apply(this, arguments) : f == null || g ? this.each(function() {
                var a = g ? f : aJ(this).is(":hidden");
                aJ(this)[a ? "show" : "hide"]();
            }) : this.animate(ap("toggle", 3), f, d, h);
            return this;
        },
        fadeTo: function(f, e, h, g) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: e
            }, f, h, g);
        },
        animate: function(g, d, j, i) {
            var h = aJ.speed(d, j, i);
            if (aJ.isEmptyObject(g)) {
                return this.each(h.complete);
            }
            return this[h.queue === !1 ? "each" : "queue"](function() {
                var a = aJ.extend({}, h),
                    o, n = this.nodeType === 1,
                    m = n && aJ(this).is(":hidden"),
                    l = this;
                for (o in g) {
                    var k = aJ.camelCase(o);
                    o !== k && (g[k] = g[o], delete g[o], o = k);
                    if (g[o] === "hide" && m || g[o] === "show" && !m) {
                        return a.complete.call(this);
                    }
                    if (n && (o === "height" || o === "width")) {
                        a.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (aJ.css(this, "display") === "inline" && aJ.css(this, "float") === "none") {
                            if (aJ.support.inlineBlockNeedsLayout) {
                                var f = an(this.nodeName);
                                f === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1);
                            } else {
                                this.style.display = "inline-block";
                            }
                        }
                    }
                    aJ.isArray(g[o]) && ((a.specialEasing = a.specialEasing || {})[o] = g[o][1], g[o] = g[o][0]);
                }
                a.overflow != null && (this.style.overflow = "hidden"), a.curAnim = aJ.extend({}, g), aJ.each(g, function(u, t) {
                    var s = new aJ.fx(l, a, u);
                    if (cY.test(t)) {
                        s[t === "toggle" ? m ? "show" : "hide" : t](g);
                    } else {
                        var r = cj.exec(t),
                            q = s.cur();
                        if (r) {
                            var p = parseFloat(r[2]),
                                b = r[3] || (aJ.cssNumber[u] ? "" : "px");
                            b !== "px" && (aJ.style(l, u, (p || 1) + b), q = (p || 1) / s.cur() * q, aJ.style(l, u, q + b)), r[1] && (p = (r[1] === "-=" ? -1 : 1) * p + q), s.custom(q, p, b);
                        } else {
                            s.custom(q, t, "");
                        }
                    }
                });
                return !0;
            });
        },
        stop: function(e, d) {
            var f = aJ.timers;
            e && this.queue([]), this.each(function() {
                for (var b = f.length - 1; b >= 0; b--) {
                    f[b].elem === this && (d && f[b](!0), f.splice(b, 1));
                }
            }), d || this.dequeue();
            return this;
        }
    }), aJ.each({
        slideDown: ap("show", 1),
        slideUp: ap("hide", 1),
        slideToggle: ap("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(d, c) {
        aJ.fn[d] = function(b, f, e) {
            return this.animate(c, b, f, e);
        };
    }), aJ.extend({
        speed: function(f, d, h) {
            var g = f && typeof f === "object" ? aJ.extend({}, f) : {
                complete: h || !h && d || aJ.isFunction(f) && f,
                duration: f,
                easing: h && d || d && !aJ.isFunction(d) && d
            };
            g.duration = aJ.fx.off ? 0 : typeof g.duration === "number" ? g.duration : g.duration in aJ.fx.speeds ? aJ.fx.speeds[g.duration] : aJ.fx.speeds._default, g.old = g.complete, g.complete = function() {
                g.queue !== !1 && aJ(this).dequeue(), aJ.isFunction(g.old) && g.old.call(this);
            };
            return g;
        },
        easing: {
            linear: function(f, e, h, g) {
                return h + g * f;
            },
            swing: function(f, e, h, g) {
                return (-Math.cos(f * Math.PI) / 2 + 0.5) * g + h;
            }
        },
        timers: [],
        fx: function(e, d, f) {
            this.options = d, this.elem = e, this.prop = f, d.orig || (d.orig = {});
        }
    }), aJ.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (aJ.fx.step[this.prop] || aJ.fx.step._default)(this);
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop];
            }
            var d, c = aJ.css(this.elem, this.prop);
            return isNaN(d = parseFloat(c)) ? !c || c === "auto" ? 0 : c : d;
        },
        custom: function(h, d, l) {
            function i(b) {
                return k.step(b);
            }
            var k = this,
                j = aJ.fx;
            this.startTime = aJ.now(), this.start = h, this.end = d, this.unit = l || this.unit || (aJ.cssNumber[this.prop] ? "" : "px"), this.now = this.start, this.pos = this.state = 0, i.elem = this.elem, i() && aJ.timers.push(i) && !at && (at = setInterval(j.tick, j.interval));
        },
        show: function() {
            this.options.orig[this.prop] = aJ.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), aJ(this.elem).show();
        },
        hide: function() {
            this.options.orig[this.prop] = aJ.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0);
        },
        step: function(t) {
            var s = aJ.now(),
                r = !0;
            if (t || s >= this.options.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), this.options.curAnim[this.prop] = !0;
                for (var q in this.options.curAnim) {
                    this.options.curAnim[q] !== !0 && (r = !1);
                }
                if (r) {
                    if (this.options.overflow != null && !aJ.support.shrinkWrapBlocks) {
                        var p = this.elem,
                            o = this.options;
                        aJ.each(["", "X", "Y"], function(e, c) {
                            p.style["overflow" + c] = o.overflow[e];
                        });
                    }
                    this.options.hide && aJ(this.elem).hide();
                    if (this.options.hide || this.options.show) {
                        for (var n in this.options.curAnim) {
                            aJ.style(this.elem, n, this.options.orig[n]);
                        }
                    }
                    this.options.complete.call(this.elem);
                }
                return !1;
            }
            var m = s - this.startTime;
            this.state = m / this.options.duration;
            var l = this.options.specialEasing && this.options.specialEasing[this.prop],
                d = this.options.easing || (aJ.easing.swing ? "swing" : "linear");
            this.pos = aJ.easing[l || d](this.state, m, 0, 1, this.options.duration), this.now = this.start + (this.end - this.start) * this.pos, this.update();
            return !0;
        }
    }, aJ.extend(aJ.fx, {
        tick: function() {
            var d = aJ.timers;
            for (var c = 0; c < d.length; c++) {
                d[c]() || d.splice(c--, 1);
            }
            d.length || aJ.fx.stop();
        },
        interval: 13,
        stop: function() {
            clearInterval(at), at = null;
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(b) {
                aJ.style(b.elem, "opacity", b.now);
            },
            _default: function(b) {
                b.elem.style && b.elem.style[b.prop] != null ? b.elem.style[b.prop] = (b.prop === "width" || b.prop === "height" ? Math.max(0, b.now) : b.now) + b.unit : b.elem[b.prop] = b.now;
            }
        }
    }), aJ.expr && aJ.expr.filters && (aJ.expr.filters.animated = function(b) {
        return aJ.grep(aJ.timers, function(a) {
            return b === a.elem;
        }).length;
    });
    var ak = /^t(?:able|d|h)$/i,
        ai = /^(?:body|html)$/i;
    "getBoundingClientRect" in aL.documentElement ? aJ.fn.offset = function(B) {
        var A = this[0],
            z;
        if (B) {
            return this.each(function(a) {
                aJ.offset.setOffset(this, B, a);
            });
        }
        if (!A || !A.ownerDocument) {
            return null;
        }
        if (A === A.ownerDocument.body) {
            return aJ.offset.bodyOffset(A);
        }
        try {
            z = A.getBoundingClientRect();
        } catch (y) {}
        var x = A.ownerDocument,
            w = x.documentElement;
        if (!z || !aJ.contains(w, A)) {
            return z ? {
                top: z.top,
                left: z.left
            } : {
                top: 0,
                left: 0
            };
        }
        var v = x.body,
            u = ah(x),
            t = w.clientTop || v.clientTop || 0,
            s = w.clientLeft || v.clientLeft || 0,
            r = u.pageYOffset || aJ.support.boxModel && w.scrollTop || v.scrollTop,
            q = u.pageXOffset || aJ.support.boxModel && w.scrollLeft || v.scrollLeft,
            p = z.top + r - t,
            d = z.left + q - s;
        return {
            top: p,
            left: d
        };
    } : aJ.fn.offset = function(x) {
        var w = this[0];
        if (x) {
            return this.each(function(a) {
                aJ.offset.setOffset(this, x, a);
            });
        }
        if (!w || !w.ownerDocument) {
            return null;
        }
        if (w === w.ownerDocument.body) {
            return aJ.offset.bodyOffset(w);
        }
        aJ.offset.initialize();
        var v, u = w.offsetParent,
            t = w,
            s = w.ownerDocument,
            r = s.documentElement,
            q = s.body,
            p = s.defaultView,
            o = p ? p.getComputedStyle(w, null) : w.currentStyle,
            n = w.offsetTop,
            d = w.offsetLeft;
        while ((w = w.parentNode) && w !== q && w !== r) {
            if (aJ.offset.supportsFixedPosition && o.position === "fixed") {
                break;
            }
            v = p ? p.getComputedStyle(w, null) : w.currentStyle, n -= w.scrollTop, d -= w.scrollLeft, w === u && (n += w.offsetTop, d += w.offsetLeft, aJ.offset.doesNotAddBorder && (!aJ.offset.doesAddBorderForTableAndCells || !ak.test(w.nodeName)) && (n += parseFloat(v.borderTopWidth) || 0, d += parseFloat(v.borderLeftWidth) || 0), t = u, u = w.offsetParent), aJ.offset.subtractsBorderForOverflowNotVisible && v.overflow !== "visible" && (n += parseFloat(v.borderTopWidth) || 0, d += parseFloat(v.borderLeftWidth) || 0), o = v;
        }
        if (o.position === "relative" || o.position === "static") {
            n += q.offsetTop, d += q.offsetLeft;
        }
        aJ.offset.supportsFixedPosition && o.position === "fixed" && (n += Math.max(r.scrollTop, q.scrollTop), d += Math.max(r.scrollLeft, q.scrollLeft));
        return {
            top: n,
            left: d
        };
    }, aJ.offset = {
        initialize: function() {
            var d = aL.body,
                c = aL.createElement("div"),
                p, o, n, m, l = parseFloat(aJ.css(d, "marginTop")) || 0,
                k = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            aJ.extend(c.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }), c.innerHTML = k, d.insertBefore(c, d.firstChild), p = c.firstChild, o = p.firstChild, m = p.nextSibling.firstChild.firstChild, this.doesNotAddBorder = o.offsetTop !== 5, this.doesAddBorderForTableAndCells = m.offsetTop === 5, o.style.position = "fixed", o.style.top = "20px", this.supportsFixedPosition = o.offsetTop === 20 || o.offsetTop === 15, o.style.position = o.style.top = "", p.style.overflow = "hidden", p.style.position = "relative", this.subtractsBorderForOverflowNotVisible = o.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = d.offsetTop !== l, d.removeChild(c), d = c = p = o = n = m = null, aJ.offset.initialize = aJ.noop;
        },
        bodyOffset: function(e) {
            var d = e.offsetTop,
                f = e.offsetLeft;
            aJ.offset.initialize(), aJ.offset.doesNotIncludeMarginInBodyOffset && (d += parseFloat(aJ.css(e, "marginTop")) || 0, f += parseFloat(aJ.css(e, "marginLeft")) || 0);
            return {
                top: d,
                left: f
            };
        },
        setOffset: function(z, y, x) {
            var w = aJ.css(z, "position");
            w === "static" && (z.style.position = "relative");
            var v = aJ(z),
                u = v.offset(),
                t = aJ.css(z, "top"),
                s = aJ.css(z, "left"),
                r = w === "absolute" && aJ.inArray("auto", [t, s]) > -1,
                q = {},
                p = {},
                o, d;
            r && (p = v.position()), o = r ? p.top : parseInt(t, 10) || 0, d = r ? p.left : parseInt(s, 10) || 0, aJ.isFunction(y) && (y = y.call(z, x, u)), y.top != null && (q.top = y.top - u.top + o), y.left != null && (q.left = y.left - u.left + d), "using" in y ? y.using.call(z, q) : v.css(q);
        }
    }, aJ.fn.extend({
        position: function() {
            if (!this[0]) {
                return null;
            }
            var f = this[0],
                d = this.offsetParent(),
                h = this.offset(),
                g = ai.test(d[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : d.offset();
            h.top -= parseFloat(aJ.css(f, "marginTop")) || 0, h.left -= parseFloat(aJ.css(f, "marginLeft")) || 0, g.top += parseFloat(aJ.css(d[0], "borderTopWidth")) || 0, g.left += parseFloat(aJ.css(d[0], "borderLeftWidth")) || 0;
            return {
                top: h.top - g.top,
                left: h.left - g.left
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var b = this.offsetParent || aL.body;
                while (b && (!ai.test(b.nodeName) && aJ.css(b, "position") === "static")) {
                    b = b.offsetParent;
                }
                return b;
            });
        }
    }), aJ.each(["Left", "Top"], function(b, f) {
        var d = "scroll" + f;
        aJ.fn[d] = function(h) {
            var e = this[0],
                a;
            if (!e) {
                return null;
            }
            if (h !== aN) {
                return this.each(function() {
                    a = ah(this), a ? a.scrollTo(b ? aJ(a).scrollLeft() : h, b ? h : aJ(a).scrollTop()) : this[d] = h;
                });
            }
            a = ah(e);
            return a ? "pageXOffset" in a ? a[b ? "pageYOffset" : "pageXOffset"] : aJ.support.boxModel && a.document.documentElement[d] || a.document.body[d] : e[d];
        };
    }), aJ.each(["Height", "Width"], function(b, f) {
        var d = f.toLowerCase();
        aJ.fn["inner" + f] = function() {
            return this[0] ? parseFloat(aJ.css(this[0], d, "padding")) : null;
        }, aJ.fn["outer" + f] = function(c) {
            return this[0] ? parseFloat(aJ.css(this[0], d, c ? "margin" : "border")) : null;
        }, aJ.fn[d] = function(c) {
            var l = this[0];
            if (!l) {
                return c == null ? null : this;
            }
            if (aJ.isFunction(c)) {
                return this.each(function(a) {
                    var g = aJ(this);
                    g[d](c.call(this, a, g[d]()));
                });
            }
            if (aJ.isWindow(l)) {
                var k = l.document.documentElement["client" + f];
                return l.document.compatMode === "CSS1Compat" && k || l.document.body["client" + f] || k;
            }
            if (l.nodeType === 9) {
                return Math.max(l.documentElement["client" + f], l.body["scroll" + f], l.documentElement["scroll" + f], l.body["offset" + f], l.documentElement["offset" + f]);
            }
            if (c === aN) {
                var j = aJ.css(l, d),
                    e = parseFloat(j);
                return aJ.isNaN(e) ? j : e;
            }
            return this.css(d, typeof c === "string" ? c : c + "px");
        };
    }), aP.jQuery = aP.$ = aJ;
})(window);
BrowserPlus = (typeof BrowserPlus != "undefined" && BrowserPlus) ? BrowserPlus : (function() {
    var f = false;
    var p = "__browserPlusPluginID";
    var q = "uninitialized";
    var o = [];
    var a = "application/x-yahoo-browserplus_2";
    var l, k, j, n, d;
    return {
        initWhenAvailable: function(s, r) {
            setTimeout(function() {
                try {
                    navigator.plugins.refresh(false);
                } catch (t) {}
                BrowserPlus.init(s, function(u) {
                    if (u.success) {
                        r(u);
                    } else {
                        BrowserPlus.initWhenAvailable(s, r);
                    }
                });
            }, 1000);
        },
        clientSystemInfo: function() {
            return m();
        },
        listActiveServices: function(r) {
            if (r == null || r.constructor != Function) {
                throw new Error("BrowserPlus.services() invoked without  required callback parameter.");
            }
            return h().EnumerateServices(r);
        },
        getPlatformInfo: function() {
            if (h() === null) {
                throw new Error("BrowserPlus.getPlatformInfo() invoked, but init() has not completed successfully.");
            }
            return h().Info();
        },
        isServiceLoaded: function(r, s) {
            return ((r != undefined && BrowserPlus.hasOwnProperty(r)) && (s == undefined || BrowserPlus[r].hasOwnProperty(s)));
        },
        describeService: function(r, s) {
            if (s == null || s.constructor != Function) {
                throw new Error("BrowserPlus.services() invoked without  required callback parameter");
            }
            if (h() === null) {
                throw new Error("BrowserPlus.describeService() invoked, but init() has not completed successfully.");
            }
            return h().DescribeService(r, s);
        },
        isServiceActivated: function(r, s) {
            return h().DescribeService(r, (function() {
                var t = s;
                return function(u) {
                    t(u.success);
                };
            })());
        },
        isInitialized: function() {
            return (q === "succeeded");
        },
        require: function(s, r) {
            if (r == null || r.constructor != Function) {
                throw new Error("BrowserPlus.require() invoked without required callback parameter");
            }
            var t = function(v) {
                if (v.success) {
                    var u = [];
                    for (var w = 0; w < v.value.length; w++) {
                        if (v.value[w].fullDesc) {
                            i({
                                value: v.value[w].fullDesc
                            });
                            u.push({
                                service: v.value[w].service,
                                version: v.value[w].version
                            });
                        } else {
                            BrowserPlus.describeService({
                                service: v.value[w].service,
                                version: v.value[w].version
                            }, i);
                            u = v.value;
                        }
                    }
                    v.value = u;
                }
                r(v);
            };
            h().RequireService(s, t);
            return true;
        },
        init: function(u, v) {
            if (m().browser == "Safari") {
                navigator.plugins.refresh(false);
            }
            var x = null;
            var r = null;
            if (v == null) {
                r = u;
            } else {
                x = u;
                r = v;
            }
            if (r == null || r.constructor != Function) {
                throw new Error("BrowserPlus.init() invoked without  required callback parameter");
            }
            if (x === null) {
                x = new Object;
            }
            if (typeof(x.locale) == "undefined") {
                x.locale = m().locale;
            }
            var w = true;
            if (!x.supportLevel || x.supportLevel === "experimental") {
                w = (m().supportLevel !== "unsupported");
            } else {
                if (x.supportLevel === "supported") {
                    w = (m().supportLevel === "supported");
                }
            }
            if (!w) {
                r({
                    success: false,
                    error: "bp.unsupportedClient"
                });
                return;
            }
            if (q === "succeeded") {
                r({
                    success: true
                });
                return;
            }
            if (q == "inprogress") {
                o.push(r);
                return;
            }
            q = "inprogress";
            if (typeof(window.onunload) == "undefined") {
                window.onunload = function() {};
            }
            var s = false;
            if (e() && h() !== null) {
                s = true;
            }
            if (!s) {
                q = "uninitialized";
                r({
                    success: false,
                    error: "bp.notInstalled"
                });
                return;
            } else {
                o.push(r);
                var t = (function() {
                    var y = x;
                    return function() {
                        var C = function(F) {
                            if (!F.success && F.error === "bp.switchVersion" && m().browser !== "Explorer") {
                                var E = "application/x-yahoo-browserplus_";
                                E += F.verboseError;
                                if (E !== a) {
                                    a = E;
                                    setTimeout(function() {
                                        try {
                                            var I = document.getElementById(p);
                                            if (I) {
                                                document.documentElement.removeChild(I.parentNode);
                                            }
                                            navigator.plugins.refresh(false);
                                        } catch (J) {}
                                        if (e() && h() !== null) {
                                            setTimeout(function() {
                                                h().Initialize(y, C);
                                            }, 10);
                                        } else {
                                            C(F);
                                        }
                                    }, 10);
                                    return;
                                }
                            }
                            if (!F.success && F.error === "bp.switchVersion") {
                                F = {
                                    success: false,
                                    error: "bp.notInstalled",
                                    verboseError: "BrowserPlus isn't installed, or couldn't be loaded"
                                };
                            }
                            q = F.success ? "succeeded" : "uninitialized";
                            var H = o;
                            o = [];
                            for (var G = 0; G < H.length; G++) {
                                H[G](F);
                            }
                        };
                        try {
                            h().Initialize(y, C);
                        } catch (z) {
                            var B = m();
                            var D = {
                                success: false,
                                error: "bp.notInstalled",
                                verboseError: String(z)
                            };
                            if (B.browser == "Explorer") {
                                D.error = "bp.unsupportedClient";
                            } else {
                                if (B.browser == "Firefox") {
                                    try {
                                        navigator.plugins.refresh(true);
                                    } catch (A) {}
                                }
                            }
                            C(D);
                        }
                    };
                })();
                setTimeout(t, 0);
            }
        },
        _detectBrowser: function() {
            return BrowserPlus.clientSystemInfo();
        }
    };

    function e() {
        if (c()) {
            return b();
        } else {
            return g();
        }
    }

    function g() {
        var s = navigator.mimeTypes[a];
        if (typeof(s) !== "object" || typeof(s.enabledPlugin) !== "object") {
            return false;
        }
        var r = document.createElement("div");
        r.style.visibility = "hidden";
        r.style.borderStyle = "hidden";
        r.style.width = 0;
        r.style.height = 0;
        r.style.border = 0;
        r.style.position = "absolute";
        r.style.top = 0;
        r.style.left = 0;
        r.innerHTML = '<object type="' + a + '" id="' + p + '" name="' + p + '"></object>';
        document.documentElement.appendChild(r);
        f = true;
        return true;
    }

    function b() {
        if (h() != null) {
            return true;
        }
        try {
            var t = document.createElement("object");
            t.id = p;
            t.type = a;
            t.style.display = "none";
            document.body.appendChild(t);
            document.getElementById(p).Ping();
            f = true;
            return true;
        } catch (r) {
            try {
                document.body.removeChild(t);
            } catch (s) {}
        }
        return false;
    }

    function h() {
        if (f) {
            return document.getElementById(p);
        }
        return null;
    }

    function c() {
        return (m().browser == "Explorer");
    }

    function i(u) {
        u = u.value;
        var s = u.name;
        var w = u.versionString;
        if (!BrowserPlus[s]) {
            BrowserPlus[s] = {};
            BrowserPlus[s].corelet = s;
            BrowserPlus[s].version = w;
        }
        if (!BrowserPlus[s][w]) {
            BrowserPlus[s][w] = {};
            BrowserPlus[s][w].corelet = s;
            BrowserPlus[s][w].version = w;
        }
        if (s == "core") {
            BrowserPlus[s].version = w;
        }
        if (u.functions) {
            for (var v = 0; v < u.functions.length; v++) {
                var r = u.functions[v].name;
                var t = (function() {
                    var x = r;
                    return function(y, z) {
                        if (z == null || z.constructor != Function) {
                            throw new Error("BrowserPlus." + s + "." + x + "() invoked without  required callback parameter");
                        }
                        return h().ExecuteMethod(s, w, x, y, z);
                    };
                })();
                BrowserPlus[s][w][r] = t;
                if (w == BrowserPlus[s].version) {
                    BrowserPlus[s][r] = t;
                }
            }
        }
    }

    function m() {
        var x = [{
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari"
        }, {
            string: navigator.vendor,
            subString: "Google",
            identity: "Chrome"
        }, {
            prop: window.opera,
            identity: "Opera"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }];
        var r = [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }];
        var t = {
            Mac: {
                Firefox: "supported",
                Safari: "supported"
            },
            Windows: {
                Explorer: {
                    "8": "supported",
                    "7": "supported",
                    "6": "experimental"
                },
                Safari: "supported",
                Firefox: "supported",
                Chrome: "supported"
            }
        };
        var v;

        function u(y) {
            for (var B = 0; B < y.length; B++) {
                var A = y[B].string;
                var z = y[B].prop;
                v = y[B].versionSearch || y[B].identity;
                if (A) {
                    if (A.indexOf(y[B].subString) != -1) {
                        return y[B].identity;
                    }
                } else {
                    if (z) {
                        return y[B].identity;
                    }
                }
            }
            return null;
        }

        function w(y) {
            var z = y.indexOf(v);
            if (z == -1) {
                return null;
            } else {
                return parseFloat(y.substring(z + v.length + 1));
            }
        }

        function s() {
            if (t[j] && t[j][l]) {
                var y = t[j][l];
                if (typeof y === "string") {
                    return y;
                } else {
                    if (y[k]) {
                        return y[k];
                    } else {
                        return "unsupported";
                    }
                }
            } else {
                return "unsupported";
            }
        }
        if (!l) {
            l = u(x) || "An unknown browser";
            k = w(navigator.userAgent) || w(navigator.appVersion) || "an unknown version";
            j = u(r) || "an unknown OS";
            if (j === "Mac" && navigator.userAgent.indexOf("Intel") == -1) {
                d = "unsupported";
            } else {
                if (navigator.userAgent.indexOf("Firefox/2.0.0") != -1) {
                    d = "unsupported";
                } else {
                    d = s();
                }
            }
            n = navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage;
        }
        return {
            browser: l,
            version: k,
            os: j,
            locale: n,
            supportLevel: d
        };
    }
})();
if (typeof YAHOO == "undefined" || !YAHOO) {
    var YAHOO = {};
}
if (typeof YAHOO.bp == "undefined" || !YAHOO.bp) {
    YAHOO.bp = BrowserPlus;
}! function(bc, aU) {
    function a1(d, b) {
        for (var f, a = [], c = 0; c < d.length; ++c) {
            if (f = aV[d[c]] || a0(d[c]), !f) {
                throw "module definition dependecy not found: " + d[c];
            }
            a.push(f);
        }
        b.apply(null, a);
    }

    function a7(c, a, b) {
        if ("string" != typeof c) {
            throw "invalid module definition, module id must be defined and be a string";
        }
        if (a === aU) {
            throw "invalid module definition, dependencies must be specified";
        }
        if (b === aU) {
            throw "invalid module definition, definition function must be specified";
        }
        a1(a, function() {
            aV[c] = b.apply(null, arguments);
        });
    }

    function aW(a) {
        return !!aV[a];
    }

    function a0(b) {
        for (var d = bc, a = b.split(/[.\/]/), c = 0; c < a.length; ++c) {
            if (!d[a[c]]) {
                return;
            }
            d = d[a[c]];
        }
        return d;
    }

    function bg(g) {
        for (var d = 0; d < g.length; d++) {
            for (var e = bc, f = g[d], b = f.split(/[.\/]/), c = 0; c < b.length - 1; ++c) {
                e[b[c]] === aU && (e[b[c]] = {}), e = e[b[c]];
            }
            e[b[b.length - 1]] = aV[f];
        }
    }
    var aV = {},
        aT = "moxie/core/utils/Basic",
        be = "moxie/core/I18n",
        a3 = "moxie/core/utils/Mime",
        bd = "moxie/core/utils/Env",
        bb = "moxie/core/utils/Dom",
        aZ = "moxie/core/Exceptions",
        a8 = "moxie/core/EventTarget",
        a2 = "moxie/core/utils/Encode",
        a9 = "moxie/runtime/Runtime",
        aS = "moxie/runtime/RuntimeClient",
        aP = "moxie/file/Blob",
        aB = "moxie/file/File",
        bh = "moxie/file/FileInput",
        aj = "moxie/file/FileDrop",
        aR = "moxie/runtime/RuntimeTarget",
        aQ = "moxie/file/FileReader",
        bf = "moxie/core/utils/Url",
        aF = "moxie/file/FileReaderSync",
        ag = "moxie/xhr/FormData",
        ai = "moxie/xhr/XMLHttpRequest",
        an = "moxie/runtime/Transporter",
        aw = "moxie/core/JSON",
        aC = "moxie/image/Image",
        aq = "moxie/runtime/html5/Runtime",
        ao = "moxie/runtime/html5/file/Blob",
        ap = "moxie/core/utils/Events",
        aD = "moxie/runtime/html5/file/FileInput",
        aA = "moxie/runtime/html5/file/FileDrop",
        am = "moxie/runtime/html5/file/FileReader",
        ax = "moxie/runtime/html5/xhr/XMLHttpRequest",
        aE = "moxie/runtime/html5/utils/BinaryReader",
        af = "moxie/runtime/html5/image/JPEGHeaders",
        az = "moxie/runtime/html5/image/ExifParser",
        aO = "moxie/runtime/html5/image/JPEG",
        aX = "moxie/runtime/html5/image/PNG",
        a4 = "moxie/runtime/html5/image/ImageInfo",
        ac = "moxie/runtime/html5/image/MegaPixel",
        a6 = "moxie/runtime/html5/image/Image",
        ae = "moxie/runtime/flash/Runtime",
        ad = "moxie/runtime/flash/file/Blob",
        ab = "moxie/runtime/flash/file/FileInput",
        aN = "moxie/runtime/flash/file/FileReader",
        ar = "moxie/runtime/flash/file/FileReaderSync",
        aa = "moxie/runtime/flash/xhr/XMLHttpRequest",
        au = "moxie/runtime/flash/runtime/Transporter",
        al = "moxie/runtime/flash/image/Image",
        aY = "moxie/runtime/silverlight/Runtime",
        ba = "moxie/runtime/silverlight/file/Blob",
        a5 = "moxie/runtime/silverlight/file/FileInput",
        aI = "moxie/runtime/silverlight/file/FileDrop",
        aL = "moxie/runtime/silverlight/file/FileReader",
        aK = "moxie/runtime/silverlight/file/FileReaderSync",
        ah = "moxie/runtime/silverlight/xhr/XMLHttpRequest",
        ay = "moxie/runtime/silverlight/runtime/Transporter",
        aM = "moxie/runtime/silverlight/image/Image",
        aG = "moxie/runtime/html4/Runtime",
        aJ = "moxie/runtime/html4/file/FileInput",
        ak = "moxie/runtime/html4/file/FileReader",
        aH = "moxie/runtime/html4/xhr/XMLHttpRequest",
        av = "moxie/runtime/html4/image/Image";
    a7(aT, [], function() {
        var k = function(c) {
                var a;
                return c === a ? "undefined" : null === c ? "null" : c.nodeType ? "node" : {}.toString.call(c).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
            },
            w = function(a) {
                var c;
                return g(arguments, function(d, e) {
                    e > 0 && g(d, function(l, i) {
                        l !== c && (k(a[i]) === k(l) && ~f(k(l), ["array", "object"]) ? w(a[i], l) : a[i] = l);
                    });
                }), a;
            },
            g = function(u, l) {
                var z, d, s, y;
                if (u) {
                    try {
                        z = u.length;
                    } catch (c) {
                        z = y;
                    }
                    if (z === y) {
                        for (d in u) {
                            if (u.hasOwnProperty(d) && l(u[d], d) === !1) {
                                return;
                            }
                        }
                    } else {
                        for (s = 0; z > s; s++) {
                            if (l(u[s], s) === !1) {
                                return;
                            }
                        }
                    }
                }
            },
            j = function(a) {
                var c;
                if (!a || "object" !== k(a)) {
                    return !0;
                }
                for (c in a) {
                    return !1;
                }
                return !0;
            },
            b = function(c, l) {
                function a(i) {
                    "function" === k(c[i]) && c[i](function(n) {
                        ++i < e && !n ? a(i) : l(n);
                    });
                }
                var d = 0,
                    e = c.length;
                "function" !== k(l) && (l = function() {}), c && c.length || l(), a(d);
            },
            f = function(d, c) {
                if (c) {
                    if (Array.prototype.indexOf) {
                        return Array.prototype.indexOf.call(c, d);
                    }
                    for (var l = 0, a = c.length; a > l; l++) {
                        if (c[l] === d) {
                            return l;
                        }
                    }
                }
                return -1;
            },
            q = function(c, e) {
                var a = [];
                "array" !== k(c) && (c = [c]), "array" !== k(e) && (e = [e]);
                for (var d in c) {
                    -1 === f(c[d], e) && a.push(c[d]);
                }
                return a.length ? a : !1;
            },
            x = function(d, c) {
                var a = [];
                return g(d, function(i) {
                    -1 !== f(i, c) && a.push(i);
                }), a.length ? a : null;
            },
            v = function(c) {
                var a, d = [];
                for (a = 0; a < c.length; a++) {
                    d[a] = c[a];
                }
                return d;
            },
            p = function() {
                var a = 0;
                return function(d) {
                    var e = (new Date).getTime().toString(32),
                        c;
                    for (c = 0; 5 > c; c++) {
                        e += Math.floor(65535 * Math.random()).toString(32);
                    }
                    return (d || "o_") + e + (a++).toString(32);
                };
            }(),
            h = function(a) {
                return a ? String.prototype.trim ? String.prototype.trim.call(a) : a.toString().replace(/^\s*/, "").replace(/\s*$/, "") : a;
            },
            m = function(c) {
                if ("string" != typeof c) {
                    return c;
                }
                var a = {
                        t: 1099511627776,
                        g: 1073741824,
                        m: 1048576,
                        k: 1024
                    },
                    d;
                return c = /^([0-9]+)([mgk]?)$/.exec(c.toLowerCase().replace(/[^0-9mkg]/g, "")), d = c[2], c = +c[1], a.hasOwnProperty(d) && (c *= a[d]), c;
            };
        return {
            guid: p,
            typeOf: k,
            extend: w,
            each: g,
            isEmptyObj: j,
            inSeries: b,
            inArray: f,
            arrayDiff: q,
            arrayIntersect: x,
            toArray: v,
            trim: h,
            parseSizeStr: m
        };
    }), a7(be, [aT], function(b) {
        var a = {};
        return {
            addI18n: function(c) {
                return b.extend(a, c);
            },
            translate: function(c) {
                return a[c] || c;
            },
            _: function(c) {
                return this.translate(c);
            },
            sprintf: function(d) {
                var e = [].slice.call(arguments, 1),
                    c = "";
                return b.each(d.split(/%[a-z]/), function(f) {
                    c += f, e.length && (c += e.shift());
                }), c;
            }
        };
    }), a7(a3, [aT, be], function(c, b) {
        var d = "application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/mp4,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe",
            a = {
                mimes: {},
                extensions: {},
                addMimeType: function(j) {
                    var g = j.split(/,/),
                        k, f, h;
                    for (k = 0; k < g.length; k += 2) {
                        for (h = g[k + 1].split(/ /), f = 0; f < h.length; f++) {
                            this.mimes[h[f]] = g[k];
                        }
                        this.extensions[g[k]] = h;
                    }
                },
                extList2mimes: function(h, m) {
                    var g = this,
                        k, l, e, j, f = [];
                    for (l = 0; l < h.length; l++) {
                        for (k = h[l].extensions.split(/\s*,\s*/), e = 0; e < k.length; e++) {
                            if ("*" === k[e]) {
                                return [];
                            }
                            if (j = g.mimes[k[e]]) {
                                -1 === c.inArray(j, f) && f.push(j);
                            } else {
                                if (!m || !/^\w+$/.test(k[e])) {
                                    return [];
                                }
                                f.push("." + k[e]);
                            }
                        }
                    }
                    return f;
                },
                mimes2exts: function(f) {
                    var g = this,
                        e = [];
                    return c.each(f, function(h) {
                        if ("*" === h) {
                            return e = [], !1;
                        }
                        var i = h.match(/^(\w+)\/(\*|\w+)$/);
                        i && ("*" === i[2] ? c.each(g.extensions, function(k, j) {
                            new RegExp("^" + i[1] + "/").test(j) && [].push.apply(e, g.extensions[j]);
                        }) : g.extensions[h] && [].push.apply(e, g.extensions[h]));
                    }), e;
                },
                mimes2extList: function(g) {
                    var e = [],
                        f = [];
                    return "string" === c.typeOf(g) && (g = c.trim(g).split(/\s*,\s*/)), f = this.mimes2exts(g), e.push({
                        title: b.translate("Files"),
                        extensions: f.length ? f.join(",") : "*"
                    }), e.mimes = g, e;
                },
                getFileExtension: function(g) {
                    var f = g && g.match(/\.([^.]+)$/);
                    return f ? f[1].toLowerCase() : "";
                },
                getFileMime: function(f) {
                    return this.mimes[this.getFileExtension(f)] || "";
                }
            };
        return a.addMimeType(d), a;
    }), a7(bd, [aT], function(h) {
        function d(m) {
            for (var l, o, a = 0; a < m.length; a++) {
                if (l = m[a].s1, o = m[a].prop, j = m[a].sv || m[a].id, l) {
                    if (-1 != l.indexOf(m[a].s2)) {
                        return m[a].id;
                    }
                } else {
                    if (o) {
                        return m[a].id;
                    }
                }
            }
        }

        function k(i) {
            var a = i.indexOf(j);
            if (-1 != a) {
                return parseFloat(i.substring(a + j.length + 1));
            }
        }
        var c = [{
                s1: navigator.userAgent,
                s2: "Android",
                id: "Android Browser",
                sv: "Version"
            }, {
                s1: navigator.userAgent,
                s2: "Chrome",
                id: "Chrome"
            }, {
                s1: navigator.vendor,
                s2: "Apple",
                id: "Safari",
                sv: "Version"
            }, {
                prop: window.opera && window.opera.buildNumber,
                id: "Opera",
                sv: "Version"
            }, {
                s1: navigator.vendor,
                s2: "KDE",
                id: "Konqueror"
            }, {
                s1: navigator.userAgent,
                s2: "Firefox",
                id: "Firefox"
            }, {
                s1: navigator.vendor,
                s2: "Camino",
                id: "Camino"
            }, {
                s1: navigator.userAgent,
                s2: "Netscape",
                id: "Netscape"
            }, {
                s1: navigator.userAgent,
                s2: "MSIE",
                id: "IE",
                sv: "MSIE"
            }, {
                s1: navigator.userAgent,
                s2: "Gecko",
                id: "Mozilla",
                sv: "rv"
            }],
            g = [{
                s1: navigator.platform,
                s2: "Win",
                id: "Windows"
            }, {
                s1: navigator.platform,
                s2: "Mac",
                id: "Mac"
            }, {
                s1: navigator.userAgent,
                s2: "iPhone",
                id: "iOS"
            }, {
                s1: navigator.userAgent,
                s2: "iPad",
                id: "iOS"
            }, {
                s1: navigator.userAgent,
                s2: "Android",
                id: "Android"
            }, {
                s1: navigator.platform,
                s2: "Linux",
                id: "Linux"
            }],
            j, b = function() {
                var a = {
                    define_property: function() {
                        return !1;
                    }(),
                    create_canvas: function() {
                        var i = document.createElement("canvas");
                        return !(!i.getContext || !i.getContext("2d"));
                    }(),
                    return_response_type: function(l) {
                        try {
                            if (-1 !== h.inArray(l, ["", "text", "document"])) {
                                return !0;
                            }
                            if (window.XMLHttpRequest) {
                                var m = new XMLHttpRequest;
                                if (m.open("get", "/"), "responseType" in m) {
                                    return m.responseType = l, m.responseType !== l ? !1 : !0;
                                }
                            }
                        } catch (e) {}
                        return !1;
                    },
                    use_data_uri: function() {
                        var i = new Image;
                        return i.onload = function() {
                            a.use_data_uri = 1 === i.width && 1 === i.height;
                        }, setTimeout(function() {
                            i.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
                        }, 1), !1;
                    }(),
                    use_data_uri_over32kb: function() {
                        return a.use_data_uri && ("IE" !== f.browser || f.version >= 9);
                    },
                    use_data_uri_of: function(i) {
                        return a.use_data_uri && 33000 > i || a.use_data_uri_over32kb();
                    },
                    use_fileinput: function() {
                        var i = document.createElement("input");
                        return i.setAttribute("type", "file"), !i.disabled;
                    }
                };
                return function(l) {
                    var e = [].slice.call(arguments);
                    return e.shift(), "function" === h.typeOf(a[l]) ? a[l].apply(this, e) : !!a[l];
                };
            }(),
            f = {
                can: b,
                browser: d(c),
                version: k(navigator.userAgent) || k(navigator.appVersion),
                OS: d(g),
                swf_url: "../flash/Moxie.swf",
                xap_url: "../silverlight/Moxie.xap",
                global_event_dispatcher: "moxie.core.EventTarget.instance.dispatchEvent"
            };
        return f;
    }), a7(bb, [bd], function(h) {
        var d = function(a) {
                return "string" != typeof a ? a : document.getElementById(a);
            },
            k = function(i, a) {
                var l;
                return "" === i.className ? !1 : (l = new RegExp("(^|\\s+)" + a + "(\\s+|$)"), l.test(i.className));
            },
            c = function(i, a) {
                k(i, a) || (i.className = "" === i.className ? a : i.className.replace(/\s+$/, "") + " " + a);
            },
            g = function(i, a) {
                var l = new RegExp("(^|\\s+)" + a + "(\\s+|$)");
                i.className = i.className.replace(l, function(o, m, p) {
                    return " " === m && " " === p ? " " : "";
                });
            },
            j = function(i, a) {
                return i.currentStyle ? i.currentStyle[a] : window.getComputedStyle ? window.getComputedStyle(i, null)[a] : void 0;
            },
            b = function(x, m) {
                function p(u) {
                    var o, z, a = 0,
                        s = 0;
                    return u && (z = u.getBoundingClientRect(), o = "CSS1Compat" === y.compatMode ? y.documentElement : y.body, a = z.left + o.scrollLeft, s = z.top + o.scrollTop), {
                        x: a,
                        y: s
                    };
                }
                var e = 0,
                    l = 0,
                    v, y = document,
                    w, q;
                if (x = x, m = m || y.body, x && x.getBoundingClientRect && "IE" === h.browser && (!y.documentMode || y.documentMode < 8)) {
                    return w = p(x), q = p(m), {
                        x: w.x - q.x,
                        y: w.y - q.y
                    };
                }
                for (v = x; v && v != m && v.nodeType;) {
                    e += v.offsetLeft || 0, l += v.offsetTop || 0, v = v.offsetParent;
                }
                for (v = x.parentNode; v && v != m && v.nodeType;) {
                    e -= v.scrollLeft || 0, l -= v.scrollTop || 0, v = v.parentNode;
                }
                return {
                    x: e,
                    y: l
                };
            },
            f = function(a) {
                return {
                    w: a.offsetWidth || a.clientWidth,
                    h: a.offsetHeight || a.clientHeight
                };
            };
        return {
            get: d,
            hasClass: k,
            addClass: c,
            removeClass: g,
            getStyle: j,
            getPos: b,
            getSize: f
        };
    }), a7(aZ, [aT], function(b) {
        function a(d, c) {
            var f;
            for (f in d) {
                if (d[f] === c) {
                    return f;
                }
            }
            return null;
        }
        return {
            RuntimeError: function() {
                function d(f) {
                    this.code = f, this.name = a(c, f), this.message = this.name + ": RuntimeError " + this.code;
                }
                var c = {
                    NOT_INIT_ERR: 1,
                    NOT_SUPPORTED_ERR: 9,
                    JS_ERR: 4
                };
                return b.extend(d, c), d.prototype = Error.prototype, d;
            }(),
            OperationNotAllowedException: function() {
                function c(d) {
                    this.code = d, this.name = "OperationNotAllowedException";
                }
                return b.extend(c, {
                    NOT_ALLOWED_ERR: 1
                }), c.prototype = Error.prototype, c;
            }(),
            ImageError: function() {
                function d(f) {
                    this.code = f, this.name = a(c, f), this.message = this.name + ": ImageError " + this.code;
                }
                var c = {
                    WRONG_FORMAT: 1,
                    MAX_RESOLUTION_ERR: 2
                };
                return b.extend(d, c), d.prototype = Error.prototype, d;
            }(),
            FileException: function() {
                function d(f) {
                    this.code = f, this.name = a(c, f), this.message = this.name + ": FileException " + this.code;
                }
                var c = {
                    NOT_FOUND_ERR: 1,
                    SECURITY_ERR: 2,
                    ABORT_ERR: 3,
                    NOT_READABLE_ERR: 4,
                    ENCODING_ERR: 5,
                    NO_MODIFICATION_ALLOWED_ERR: 6,
                    INVALID_STATE_ERR: 7,
                    SYNTAX_ERR: 8
                };
                return b.extend(d, c), d.prototype = Error.prototype, d;
            }(),
            DOMException: function() {
                function d(f) {
                    this.code = f, this.name = a(c, f), this.message = this.name + ": DOMException " + this.code;
                }
                var c = {
                    INDEX_SIZE_ERR: 1,
                    DOMSTRING_SIZE_ERR: 2,
                    HIERARCHY_REQUEST_ERR: 3,
                    WRONG_DOCUMENT_ERR: 4,
                    INVALID_CHARACTER_ERR: 5,
                    NO_DATA_ALLOWED_ERR: 6,
                    NO_MODIFICATION_ALLOWED_ERR: 7,
                    NOT_FOUND_ERR: 8,
                    NOT_SUPPORTED_ERR: 9,
                    INUSE_ATTRIBUTE_ERR: 10,
                    INVALID_STATE_ERR: 11,
                    SYNTAX_ERR: 12,
                    INVALID_MODIFICATION_ERR: 13,
                    NAMESPACE_ERR: 14,
                    INVALID_ACCESS_ERR: 15,
                    VALIDATION_ERR: 16,
                    TYPE_MISMATCH_ERR: 17,
                    SECURITY_ERR: 18,
                    NETWORK_ERR: 19,
                    ABORT_ERR: 20,
                    URL_MISMATCH_ERR: 21,
                    QUOTA_EXCEEDED_ERR: 22,
                    TIMEOUT_ERR: 23,
                    INVALID_NODE_TYPE_ERR: 24,
                    DATA_CLONE_ERR: 25
                };
                return b.extend(d, c), d.prototype = Error.prototype, d;
            }(),
            EventException: function() {
                function c(d) {
                    this.code = d, this.name = "EventException";
                }
                return b.extend(c, {
                    UNSPECIFIED_EVENT_TYPE_ERR: 0
                }), c.prototype = Error.prototype, c;
            }()
        };
    }), a7(a8, [aZ, aT], function(b, a) {
        function c() {
            var d = {};
            a.extend(this, {
                uid: null,
                init: function() {
                    this.uid || (this.uid = a.guid("uid_"));
                },
                addEventListener: function(k, g, j, l) {
                    var f = this,
                        h;
                    return k = a.trim(k), /\s/.test(k) ? (a.each(k.split(/\s+/), function(i) {
                        f.addEventListener(i, g, j, l);
                    }), void 0) : (k = k.toLowerCase(), j = parseInt(j, 10) || 0, h = d[this.uid] && d[this.uid][k] || [], h.push({
                        fn: g,
                        priority: j,
                        scope: l || this
                    }), d[this.uid] || (d[this.uid] = {}), d[this.uid][k] = h, void 0);
                },
                hasEventListener: function(f) {
                    return f ? !(!d[this.uid] || !d[this.uid][f]) : !!d[this.uid];
                },
                removeEventListener: function(h, f) {
                    h = h.toLowerCase();
                    var g = d[this.uid] && d[this.uid][h],
                        j;
                    if (g) {
                        if (f) {
                            for (j = g.length - 1; j >= 0; j--) {
                                if (g[j].fn === f) {
                                    g.splice(j, 1);
                                    break;
                                }
                            }
                        } else {
                            g = [];
                        }
                        g.length || (delete d[this.uid][h], a.isEmptyObj(d[this.uid]) && delete d[this.uid]);
                    }
                },
                removeAllEventListeners: function() {
                    d[this.uid] && delete d[this.uid];
                },
                dispatchEvent: function(g) {
                    var j, k, e, h, f = {};
                    if ("string" !== a.typeOf(g)) {
                        if (h = g, "string" !== a.typeOf(h.type)) {
                            throw new b.EventException(b.EventException.UNSPECIFIED_EVENT_TYPE_ERR);
                        }
                        g = h.type, h.total && h.loaded && (f.total = h.total, f.loaded = h.loaded), f.async = h.async || !1;
                    }
                    if (-1 !== g.indexOf("::") ? function(i) {
                            j = i[0], g = i[1];
                        }(g.split("::")) : j = this.uid, g = g.toLowerCase(), k = d[j] && d[j][g]) {
                        k.sort(function(m, i) {
                            return i.priority - m.priority;
                        }), e = [].slice.call(arguments), e.shift(), f.type = g, e.unshift(f);
                        var l = [];
                        a.each(k, function(i) {
                            e[0].target = i.scope, f.async ? l.push(function(m) {
                                setTimeout(function() {
                                    m(i.fn.apply(i.scope, e) === !1);
                                }, 1);
                            }) : l.push(function(m) {
                                m(i.fn.apply(i.scope, e) === !1);
                            });
                        }), l.length && a.inSeries(l);
                    }
                    return !0;
                },
                bind: function() {
                    this.addEventListener.apply(this, arguments);
                },
                unbind: function() {
                    this.removeEventListener.apply(this, arguments);
                },
                unbindAll: function() {
                    this.removeAllEventListeners.apply(this, arguments);
                },
                trigger: function() {
                    this.dispatchEvent.apply(this, arguments);
                },
                convertEventPropsToHandlers: function(g) {
                    var h;
                    "array" !== a.typeOf(g) && (g = [g]);
                    for (var f = 0; f < g.length; f++) {
                        h = "on" + g[f], "function" === a.typeOf(this[h]) ? this.addEventListener(g[f], this[h]) : "undefined" === a.typeOf(this[h]) && (this[h] = null);
                    }
                }
            });
        }
        return c.instance = new c, c;
    }), a7(a2, [], function() {
        var c = function(f) {
                return unescape(encodeURIComponent(f));
            },
            b = function(f) {
                return decodeURIComponent(escape(f));
            },
            d = function(z, q) {
                if ("function" == typeof window.atob) {
                    return q ? b(window.atob(z)) : window.atob(z);
                }
                var w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    g, k, C, E, D, B, v, A, y = 0,
                    j = 0,
                    x = "",
                    t = [];
                if (!z) {
                    return z;
                }
                z += "";
                do {
                    E = w.indexOf(z.charAt(y++)), D = w.indexOf(z.charAt(y++)), B = w.indexOf(z.charAt(y++)), v = w.indexOf(z.charAt(y++)), A = E << 18 | D << 12 | B << 6 | v, g = 255 & A >> 16, k = 255 & A >> 8, C = 255 & A, t[j++] = 64 == B ? String.fromCharCode(g) : 64 == v ? String.fromCharCode(g, k) : String.fromCharCode(g, k, C);
                } while (y < z.length);
                return x = t.join(""), q ? b(x) : x;
            },
            a = function(F, q) {
                if (q && c(F), "function" == typeof window.btoa) {
                    return window.btoa(F);
                }
                var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    e, k, D, G, E, C, w, B, A = 0,
                    j = 0,
                    y = "",
                    v = [];
                if (!F) {
                    return F;
                }
                do {
                    e = F.charCodeAt(A++), k = F.charCodeAt(A++), D = F.charCodeAt(A++), B = e << 16 | k << 8 | D, G = 63 & B >> 18, E = 63 & B >> 12, C = 63 & B >> 6, w = 63 & B, v[j++] = x.charAt(G) + x.charAt(E) + x.charAt(C) + x.charAt(w);
                } while (A < F.length);
                y = v.join("");
                var z = F.length % 3;
                return (z ? y.slice(0, z - 3) : y) + "===".slice(z || 3);
            };
        return {
            utf8_encode: c,
            utf8_decode: b,
            atob: d,
            btoa: a
        };
    }), a7(a9, [aT, bb, a8], function(d, b, g) {
        function a(h, e, o, q, p) {
            function m(n, l) {
                var s = null,
                    u = h && h.required_caps;
                return l = l || "browser", null !== this.mode ? this.mode : (u && !d.isEmptyObj(n) && (d.each(u, function(v, r) {
                    if (n.hasOwnProperty(r)) {
                        var t = n[r](v);
                        if ("string" == typeof t && (t = [t]), s) {
                            if (!(s = d.arrayIntersect(s, t))) {
                                return s = !1;
                            }
                        } else {
                            s = t;
                        }
                    }
                }), s ? this.mode = -1 !== d.inArray(l, s) ? l : s[0] : s === !1 && (this.mode = !1)), null === this.mode && (this.mode = l), this.mode && u && !this.can(u) && (this.mode = !1), void 0);
            }
            var i = this,
                k, j = d.guid(e + "_");
            f[j] = this, o = d.extend({
                access_binary: !1,
                access_image_binary: !1,
                display_media: !1,
                do_cors: !1,
                drag_and_drop: !1,
                filter_by_extension: !0,
                resize_image: !1,
                report_upload_progress: !1,
                return_response_headers: !1,
                return_response_type: !1,
                return_status_code: !0,
                send_custom_headers: !1,
                select_file: !1,
                select_folder: !1,
                select_multiple: !0,
                send_binary_string: !1,
                send_browser_cookies: !0,
                send_multipart: !0,
                slice_blob: !1,
                stream_upload: !1,
                summon_file_dialog: !1,
                upload_filesize: !0,
                use_http_method: !0
            }, o), k = function() {
                var l = {};
                return {
                    exec: function(u, v, s, t) {
                        return k[v] && (l[u] || (l[u] = {
                            context: this,
                            instance: new k[v]
                        }), l[u].instance[s]) ? l[u].instance[s].apply(this, t) : void 0;
                    },
                    removeInstance: function(n) {
                        delete l[n];
                    },
                    removeAllInstances: function() {
                        var r = this;
                        d.each(l, function(s, n) {
                            "function" === d.typeOf(s.instance.destroy) && s.instance.destroy.call(s.context), r.removeInstance(n);
                        });
                    }
                };
            }(), d.extend(this, {
                initialized: !1,
                uid: j,
                type: e,
                mode: null,
                shimid: j + "_container",
                clients: 0,
                options: h,
                can: function(l, v) {
                    var s = arguments[2] || o;
                    if ("string" === d.typeOf(l) && "undefined" === d.typeOf(v) && (l = a.parseCaps(l)), "object" === d.typeOf(l)) {
                        for (var u in l) {
                            if (!this.can(u, l[u], s)) {
                                return !1;
                            }
                        }
                        return !0;
                    }
                    return "function" === d.typeOf(s[l]) ? s[l].call(this, v) : v === s[l];
                },
                getShimContainer: function() {
                    var r, l = b.get(this.shimid);
                    return l || (r = this.options.container ? b.get(this.options.container) : document.body, l = document.createElement("div"), l.id = this.shimid, l.className = "moxie-shim moxie-shim-" + this.type, d.extend(l.style, {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden"
                    }), r.appendChild(l), r = null), l;
                },
                getShim: function() {
                    return k;
                },
                shimExec: function(r, l) {
                    var s = [].slice.call(arguments, 2);
                    return i.getShim().exec.call(this, this.uid, r, l, s);
                },
                exec: function(r, l) {
                    var s = [].slice.call(arguments, 2);
                    return i[r] && i[r][l] ? i[r][l].apply(this, s) : i.shimExec.apply(this, arguments);
                },
                destroy: function() {
                    if (i) {
                        var l = b.get(this.shimid);
                        l && l.parentNode.removeChild(l), k && k.removeAllInstances(), this.unbindAll(), delete f[this.uid], this.uid = null, j = i = k = l = null;
                    }
                }
            }), m.call(this, q, p);
        }
        var c = {},
            f = {};
        return a.order = "html5,flash,silverlight,html4", a.getRuntime = function(h) {
            return f[h] ? f[h] : !1;
        }, a.addConstructor = function(i, h) {
            h.prototype = g.instance, c[i] = h;
        }, a.getConstructor = function(h) {
            return c[h] || null;
        }, a.getInfo = function(i) {
            var h = a.getRuntime(i);
            return h ? {
                uid: h.uid,
                type: h.type,
                can: function() {
                    return h.can.apply(h, arguments);
                }
            } : null;
        }, a.parseCaps = function(e) {
            var h = {};
            return "string" !== d.typeOf(e) ? e || {} : (d.each(e.split(","), function(i) {
                h[i] = !0;
            }), h);
        }, a.can = function(j, h) {
            var l, i = a.getConstructor(j),
                k;
            return i ? (l = new i({
                required_caps: h
            }), k = l.mode, l.destroy(), !!k) : !1;
        }, a.thatCan = function(j, h) {
            var k = (h || a.order).split(/\s*,\s*/);
            for (var i in k) {
                if (a.can(k[i], j)) {
                    return k[i];
                }
            }
            return null;
        }, a.capTrue = function() {
            return !0;
        }, a.capFalse = function() {
            return !1;
        }, a.capTest = function(h) {
            return function() {
                return !!h;
            };
        }, a;
    }), a7(aS, [aZ, aT, a9], function(c, b, d) {
        return function a() {
            var e;
            b.extend(this, {
                connectRuntime: function(h) {
                    function i(k) {
                        var l, j;
                        return k.length ? (l = k.shift(), (j = d.getConstructor(l)) ? (e = new j(h), e.bind("Init", function() {
                            e.initialized = !0, setTimeout(function() {
                                e.clients++, f.trigger("RuntimeInit", e);
                            }, 1);
                        }), e.bind("Error", function() {
                            e.destroy(), i(k);
                        }), e.mode ? (e.init(), void 0) : (e.trigger("Error"), void 0)) : (i(k), void 0)) : (f.trigger("RuntimeError", new c.RuntimeError(c.RuntimeError.NOT_INIT_ERR)), e = null, void 0);
                    }
                    var f = this,
                        g;
                    if ("string" === b.typeOf(h) ? g = h : "string" === b.typeOf(h.ruid) && (g = h.ruid), g) {
                        if (e = d.getRuntime(g)) {
                            return e.clients++, e;
                        }
                        throw new c.RuntimeError(c.RuntimeError.NOT_INIT_ERR);
                    }
                    i((h.runtime_order || d.order).split(/\s*,\s*/));
                },
                getRuntime: function() {
                    return e && e.uid ? e : (e = null, null);
                },
                disconnectRuntime: function() {
                    e && --e.clients <= 0 && (e.destroy(), e = null);
                }
            });
        };
    }), a7(aP, [aT, a2, aS], function(d, b, f) {
        function a(h, e) {
            function g(j, m, l) {
                var i, k = c[this.uid];
                return "string" === d.typeOf(k) && k.length ? (i = new a(null, {
                    type: l,
                    size: m - j
                }), i.detach(k.substr(j, i.size)), i) : null;
            }
            f.call(this), h && this.connectRuntime(h), e ? "string" === d.typeOf(e) && (e = {
                data: e
            }) : e = {}, d.extend(this, {
                uid: e.uid || d.guid("uid_"),
                ruid: h,
                size: e.size || 0,
                type: e.type || "",
                slice: function(j, i, k) {
                    return this.isDetached() ? g.apply(this, arguments) : this.getRuntime().exec.call(this, "Blob", "slice", this.getSource(), j, i, k);
                },
                getSource: function() {
                    return c[this.uid] ? c[this.uid] : null;
                },
                detach: function(i) {
                    this.ruid && (this.getRuntime().exec.call(this, "Blob", "destroy", c[this.uid]), this.disconnectRuntime(), this.ruid = null), i = i || "";
                    var j = i.match(/^data:([^;]*);base64,/);
                    j && (this.type = j[1], i = b.atob(i.substring(i.indexOf("base64,") + 7))), this.size = i.length, c[this.uid] = i;
                },
                isDetached: function() {
                    return !this.ruid && "string" === d.typeOf(c[this.uid]);
                },
                destroy: function() {
                    this.detach(), delete c[this.uid];
                }
            }), e.data ? this.detach(e.data) : c[this.uid] = e;
        }
        var c = {};
        return a;
    }), a7(aB, [aT, a3, aP], function(c, b, d) {
        function a(f, h) {
            var j, e;
            if (h || (h = {}), e = h.type && "" !== h.type ? h.type : b.getFileMime(h.name), h.name) {
                j = h.name.replace(/\\/g, "/"), j = j.substr(j.lastIndexOf("/") + 1);
            } else {
                var g = e.split("/")[0];
                j = c.guid(("" !== g ? g : "file") + "_"), b.extensions[e] && (j += "." + b.extensions[e][0]);
            }
            d.apply(this, arguments), c.extend(this, {
                type: e || "",
                name: j || c.guid("file_"),
                lastModifiedDate: h.lastModifiedDate || (new Date).toLocaleString()
            });
        }
        return a.prototype = d.prototype, a;
    }), a7(bh, [aT, a3, bb, aZ, a8, be, aB, a9, aS], function(j, q, f, h, b, d, m, v, p) {
        function k(a) {
            var n = this,
                l, e, i;
            if (-1 !== j.inArray(j.typeOf(a), ["string", "node"]) && (a = {
                    browse_button: a
                }), e = f.get(a.browse_button), !e) {
                throw new h.DOMException(h.DOMException.NOT_FOUND_ERR);
            }
            i = {
                accept: [{
                    title: d.translate("All Files"),
                    extensions: "*"
                }],
                name: "file",
                multiple: !1,
                required_caps: !1,
                container: e.parentNode || document.body
            }, a = j.extend({}, i, a), "string" == typeof a.required_caps && (a.required_caps = v.parseCaps(a.required_caps)), "string" == typeof a.accept && (a.accept = q.mimes2extList(a.accept)), l = f.get(a.container), l || (l = document.body), "static" === f.getStyle(l, "position") && (l.style.position = "relative"), l = e = null, p.call(n), j.extend(n, {
                uid: j.guid("uid_"),
                ruid: null,
                files: null,
                init: function() {
                    n.convertEventPropsToHandlers(g), n.bind("RuntimeInit", function(o, c) {
                        n.ruid = c.uid, n.bind("Ready", function() {
                            n.trigger("Refresh");
                        }, 999), n.bind("Change", function() {
                            var r = c.exec.call(n, "FileInput", "getFiles");
                            n.files = [], j.each(r, function(s) {
                                return 0 === s.size ? !0 : (n.files.push(new m(n.ruid, s)), void 0);
                            });
                        }, 999), n.bind("Refresh", function() {
                            var u, x, r, w;
                            r = f.get(a.browse_button), w = f.get(c.shimid), r && (u = f.getPos(r, f.get(a.container)), x = f.getSize(r), w && j.extend(w.style, {
                                top: u.y + "px",
                                left: u.x + "px",
                                width: x.w + "px",
                                height: x.h + "px"
                            })), w = r = null;
                        }), c.exec.call(n, "FileInput", "init", a);
                    }), n.connectRuntime(j.extend({}, a, {
                        required_caps: {
                            select_file: !0
                        }
                    }));
                },
                disable: function(c) {
                    var o = this.getRuntime();
                    o && o.exec.call(this, "FileInput", "disable", "undefined" === j.typeOf(c) ? !0 : c);
                },
                refresh: function() {
                    n.trigger("Refresh");
                },
                destroy: function() {
                    var c = this.getRuntime();
                    c && (c.exec.call(this, "FileInput", "destroy"), this.disconnectRuntime()), "array" === j.typeOf(this.files) && j.each(this.files, function(o) {
                        o.destroy();
                    }), this.files = null;
                }
            });
        }
        var g = ["ready", "change", "cancel", "mouseenter", "mouseleave", "mousedown", "mouseup"];
        return k.prototype = b.instance, k;
    }), a7(aj, [be, bb, aZ, aT, aB, aS, a8, a3], function(h, m, f, g, b, d, k, p) {
        function l(i) {
            var c = this,
                e;
            "string" == typeof i && (i = {
                drop_zone: i
            }), e = {
                accept: [{
                    title: h.translate("All Files"),
                    extensions: "*"
                }],
                required_caps: {
                    drag_and_drop: !0
                }
            }, i = "object" == typeof i ? g.extend({}, e, i) : e, i.container = m.get(i.drop_zone) || document.body, "static" === m.getStyle(i.container, "position") && (i.container.style.position = "relative"), "string" == typeof i.accept && (i.accept = p.mimes2extList(i.accept)), d.call(c), g.extend(c, {
                uid: g.guid("uid_"),
                ruid: null,
                files: null,
                init: function() {
                    c.convertEventPropsToHandlers(j), c.bind("RuntimeInit", function(n, a) {
                        c.ruid = a.uid, c.bind("Drop", function() {
                            var o = a.exec.call(c, "FileDrop", "getFiles");
                            c.files = [], g.each(o, function(q) {
                                c.files.push(new b(c.ruid, q));
                            });
                        }, 999), a.exec.call(c, "FileDrop", "init", i), c.dispatchEvent("ready");
                    }), c.connectRuntime(i);
                },
                destroy: function() {
                    var a = this.getRuntime();
                    a && (a.exec.call(this, "FileDrop", "destroy"), this.disconnectRuntime()), this.files = null;
                }
            });
        }
        var j = ["ready", "dragenter", "dragleave", "drop", "error"];
        return l.prototype = k.instance, l;
    }), a7(aR, [aT, aS, a8], function(c, b, d) {
        function a() {
            this.uid = c.guid("uid_"), b.call(this), this.destroy = function() {
                this.disconnectRuntime(), this.unbindAll();
            };
        }
        return a.prototype = d.instance, a;
    }), a7(aQ, [aT, a2, aZ, a8, aP, aB, aR], function(g, k, d, f, b, c, h) {
        function l() {
            function a(s, o) {
                function n(i) {
                    e.readyState = l.DONE, e.error = i, e.trigger("error"), t();
                }

                function t() {
                    m.destroy(), m = null, e.trigger("loadend");
                }

                function q(i) {
                    m.bind("Error", function(u, p) {
                        n(p);
                    }), m.bind("Progress", function(p) {
                        e.result = i.exec.call(m, "FileReader", "getResult"), e.trigger(p);
                    }), m.bind("Load", function(p) {
                        e.readyState = l.DONE, e.result = i.exec.call(m, "FileReader", "getResult"), e.trigger(p), t();
                    }), i.exec.call(m, "FileReader", "read", s, o);
                }
                if (m = new h, this.convertEventPropsToHandlers(j), this.readyState === l.LOADING) {
                    return n(new d.DOMException(d.DOMException.INVALID_STATE_ERR));
                }
                if (this.readyState = l.LOADING, this.trigger("loadstart"), o instanceof b) {
                    if (o.isDetached()) {
                        var r = o.getSource();
                        switch (s) {
                            case "readAsText":
                            case "readAsBinaryString":
                                this.result = r;
                                break;
                            case "readAsDataURL":
                                this.result = "data:" + o.type + ";base64," + k.btoa(r);
                        }
                        this.readyState = l.DONE, this.trigger("load"), t();
                    } else {
                        q(m.connectRuntime(o.ruid));
                    }
                } else {
                    n(new d.DOMException(d.DOMException.NOT_FOUND_ERR));
                }
            }
            var e = this,
                m;
            g.extend(this, {
                uid: g.guid("uid_"),
                readyState: l.EMPTY,
                result: null,
                error: null,
                readAsBinaryString: function(i) {
                    a.call(this, "readAsBinaryString", i);
                },
                readAsDataURL: function(i) {
                    a.call(this, "readAsDataURL", i);
                },
                readAsText: function(i) {
                    a.call(this, "readAsText", i);
                },
                abort: function() {
                    this.result = null, -1 === g.inArray(this.readyState, [l.EMPTY, l.DONE]) && (this.readyState === l.LOADING && (this.readyState = l.DONE), m && m.getRuntime().exec.call(this, "FileReader", "abort"), this.trigger("abort"), this.trigger("loadend"));
                },
                destroy: function() {
                    this.abort(), m && (m.getRuntime().exec.call(this, "FileReader", "destroy"), m.disconnectRuntime()), e = m = null;
                }
            });
        }
        var j = ["loadstart", "progress", "load", "abort", "error", "loadend"];
        return l.EMPTY = 0, l.LOADING = 1, l.DONE = 2, l.prototype = f.instance, l;
    }), a7(bf, [], function() {
        var b = function(k) {
                for (var g = ["source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment"], m = g.length, f = {
                        http: 80,
                        https: 443
                    }, j = {}, l = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/, d = l.exec(k || ""); m--;) {
                    d[m] && (j[g[m]] = d[m]);
                }
                if (/^[^\/]/.test(j.path) && !j.scheme) {
                    var h = document.location.pathname;
                    /(\/|\/[^\.]+)$/.test(h) || (h = h.replace(/[^\/]+$/, "")), j.host = document.location.hostname, j.path = h + (j.path || "");
                }
                return j.scheme || (j.scheme = document.location.protocol.replace(/:$/, "")), j.host || (j.host = document.location.hostname), j.port || (j.port = document.location.port || f[j.scheme] || 80), j.port = parseInt(j.port, 10), j.path || (j.path = "/"), delete j.source, j;
            },
            a = function(e) {
                var f = {
                        http: 80,
                        https: 443
                    },
                    d = b(e);
                return d.scheme + "://" + d.host + (d.port !== f[d.scheme] ? ":" + d.port : "") + d.path + (d.query ? d.query : "");
            },
            c = function(d) {
                function e(f) {
                    return [f.scheme, f.host, f.port].join("/");
                }
                return "string" == typeof d && (d = b(d)), e(b()) === e(d);
            };
        return {
            parseUrl: b,
            resolveUrl: a,
            hasSameOrigin: c
        };
    }), a7(aF, [aT, aS, a2], function(b, a, c) {
        return function() {
            function d(l, h) {
                if (!h.isDetached()) {
                    var g = this.connectRuntime(h.ruid).exec.call(this, "FileReaderSync", "read", l, h);
                    return this.disconnectRuntime(), g;
                }
                var k = h.getSource();
                switch (l) {
                    case "readAsBinaryString":
                        return k;
                    case "readAsDataURL":
                        return "data:" + h.type + ";base64," + c.btoa(k);
                    case "readAsText":
                        for (var m = "", f = 0, j = k.length; j > f; f++) {
                            m += String.fromCharCode(k[f]);
                        }
                        return m;
                }
            }
            a.call(this), b.extend(this, {
                uid: b.guid("uid_"),
                readAsBinaryString: function(f) {
                    return d.call(this, "readAsBinaryString", f);
                },
                readAsDataURL: function(f) {
                    return d.call(this, "readAsDataURL", f);
                },
                readAsText: function(f) {
                    return d.call(this, "readAsText", f);
                }
            });
        };
    }), a7(ag, [aZ, aT, aP], function(c, b, d) {
        function a() {
            var h, f = {},
                g = "";
            b.extend(this, {
                append: function(j, k) {
                    var e = this,
                        i = b.typeOf(k);
                    k instanceof d ? (h && delete f[h], h = j, f[j] = [k]) : "array" === i ? (j += "[]", b.each(k, function(l) {
                        e.append.call(e, j, l);
                    })) : "object" === i ? b.each(k, function(m, l) {
                        e.append.call(e, j + "[" + l + "]", m);
                    }) : (k = k.toString(), f[j] || (f[j] = []), f[j].push(k));
                },
                hasBlob: function() {
                    return !!h;
                },
                getBlob: function() {
                    return f[h] && f[h][0] || null;
                },
                getBlobName: function() {
                    return h || null;
                },
                each: function(i) {
                    b.each(f, function(j, e) {
                        b.each(j, function(k) {
                            i(k, e);
                        });
                    });
                },
                destroy: function() {
                    h = null, g = "", f = {};
                }
            });
        }
        return a;
    }), a7(ai, [aT, aZ, a8, a2, bf, a9, aR, aP, aF, ag, bd, a3], function(G, k, z, C, w, y, J, q, j, I, B, H) {
        function F() {
            this.uid = G.guid("uid_");
        }

        function x() {
            function bj(n, g) {
                return o.hasOwnProperty(n) ? 1 === arguments.length ? B.can("define_property") ? o[n] : Q[n] : (B.can("define_property") ? o[n] = g : Q[n] = g, void 0) : void 0;
            }

            function W(n) {
                function g() {
                    at.destroy(), at = null, u.dispatchEvent("loadend"), u = null;
                }

                function v(L) {
                    at.bind("LoadStart", function(M) {
                        bj("readyState", x.LOADING), u.dispatchEvent("readystatechange"), u.dispatchEvent(M), p && u.upload.dispatchEvent(M);
                    }), at.bind("Progress", function(M) {
                        bj("readyState") !== x.LOADING && (bj("readyState", x.LOADING), u.dispatchEvent("readystatechange")), u.dispatchEvent(M);
                    }), at.bind("UploadProgress", function(M) {
                        p && u.upload.dispatchEvent({
                            type: "progress",
                            lengthComputable: !1,
                            total: M.total,
                            loaded: M.loaded
                        });
                    }), at.bind("Load", function(M) {
                        bj("readyState", x.DONE), bj("status", Number(L.exec.call(at, "XMLHttpRequest", "getStatus") || 0)), bj("statusText", D[bj("status")] || ""), bj("response", L.exec.call(at, "XMLHttpRequest", "getResponse", bj("responseType"))), ~G.inArray(bj("responseType"), ["text", ""]) ? bj("responseText", bj("response")) : "document" === bj("responseType") && bj("responseXML", bj("response")), a = L.exec.call(at, "XMLHttpRequest", "getAllResponseHeaders"), u.dispatchEvent("readystatechange"), bj("status") > 0 ? (p && u.upload.dispatchEvent(M), u.dispatchEvent(M)) : (m = !0, u.dispatchEvent("error")), g();
                    }), at.bind("Abort", function(M) {
                        u.dispatchEvent(M), g();
                    }), at.bind("Error", function(M) {
                        m = !0, bj("readyState", x.DONE), u.dispatchEvent("readystatechange"), Y = !0, u.dispatchEvent(M), g();
                    }), L.exec.call(at, "XMLHttpRequest", "send", {
                        url: bm,
                        method: e,
                        async: X,
                        user: r,
                        password: bl,
                        headers: t,
                        mimeType: c,
                        encoding: bi,
                        responseType: u.responseType,
                        withCredentials: u.withCredentials,
                        options: s
                    }, n);
                }
                var u = this;
                l = (new Date).getTime(), at = new J, "string" == typeof s.required_caps && (s.required_caps = y.parseCaps(s.required_caps)), s.required_caps = G.extend({}, s.required_caps, {
                    return_response_type: u.responseType
                }), n instanceof I && (s.required_caps.send_multipart = !0), i || (s.required_caps.do_cors = !0), s.ruid ? v(at.connectRuntime(s)) : (at.bind("RuntimeInit", function(M, L) {
                    v(L);
                }), at.bind("RuntimeError", function(M, L) {
                    u.dispatchEvent("RuntimeError", L);
                }), at.connectRuntime(s));
            }

            function bk() {
                bj("responseText", ""), bj("responseXML", null), bj("response", null), bj("status", 0), bj("statusText", ""), l = Z = null;
            }
            var Q = this,
                o = {
                    timeout: 0,
                    readyState: x.UNSENT,
                    withCredentials: !1,
                    status: 0,
                    statusText: "",
                    responseType: "",
                    responseXML: null,
                    responseText: null,
                    response: null
                },
                X = !0,
                bm, e, t = {},
                r, bl, bi = null,
                c = null,
                d = !1,
                h = !1,
                p = !1,
                Y = !1,
                m = !1,
                i = !1,
                l, Z, V = null,
                f = null,
                s = {},
                at, a = "",
                K;
            G.extend(this, o, {
                uid: G.guid("uid_"),
                upload: new F,
                open: function(M, n, L, v, N) {
                    var g;
                    if (!M || !n) {
                        throw new k.DOMException(k.DOMException.SYNTAX_ERR);
                    }
                    if (/[\u0100-\uffff]/.test(M) || C.utf8_encode(M) !== M) {
                        throw new k.DOMException(k.DOMException.SYNTAX_ERR);
                    }
                    if (~G.inArray(M.toUpperCase(), ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT", "TRACE", "TRACK"]) && (e = M.toUpperCase()), ~G.inArray(e, ["CONNECT", "TRACE", "TRACK"])) {
                        throw new k.DOMException(k.DOMException.SECURITY_ERR);
                    }
                    if (n = C.utf8_encode(n), g = w.parseUrl(n), i = w.hasSameOrigin(g), bm = w.resolveUrl(n), (v || N) && !i) {
                        throw new k.DOMException(k.DOMException.INVALID_ACCESS_ERR);
                    }
                    if (r = v || g.user, bl = N || g.pass, X = L || !0, X === !1 && (bj("timeout") || bj("withCredentials") || "" !== bj("responseType"))) {
                        throw new k.DOMException(k.DOMException.INVALID_ACCESS_ERR);
                    }
                    d = !X, h = !1, t = {}, bk.call(this), bj("readyState", x.OPENED), this.convertEventPropsToHandlers(["readystatechange"]), this.dispatchEvent("readystatechange");
                },
                setRequestHeader: function(n, u) {
                    var g = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
                    if (bj("readyState") !== x.OPENED || h) {
                        throw new k.DOMException(k.DOMException.INVALID_STATE_ERR);
                    }
                    if (/[\u0100-\uffff]/.test(n) || C.utf8_encode(n) !== n) {
                        throw new k.DOMException(k.DOMException.SYNTAX_ERR);
                    }
                    return n = G.trim(n).toLowerCase(), ~G.inArray(n, g) || /^(proxy\-|sec\-)/.test(n) ? !1 : (t[n] ? t[n] += ", " + u : t[n] = u, !0);
                },
                getAllResponseHeaders: function() {
                    return a || "";
                },
                getResponseHeader: function(g) {
                    return g = g.toLowerCase(), m || ~G.inArray(g, ["set-cookie", "set-cookie2"]) ? null : a && "" !== a && (K || (K = {}, G.each(a.split(/\r\n/), function(u) {
                        var v = u.split(/:\s+/);
                        2 === v.length && (v[0] = G.trim(v[0]), K[v[0].toLowerCase()] = {
                            header: v[0],
                            value: G.trim(v[1])
                        });
                    })), K.hasOwnProperty(g)) ? K[g].header + ": " + K[g].value : null;
                },
                overrideMimeType: function(g) {
                    var n, u;
                    if (~G.inArray(bj("readyState"), [x.LOADING, x.DONE])) {
                        throw new k.DOMException(k.DOMException.INVALID_STATE_ERR);
                    }
                    if (g = G.trim(g.toLowerCase()), /;/.test(g) && (n = g.match(/^([^;]+)(?:;\scharset\=)?(.*)$/)) && (g = n[1], n[2] && (u = n[2])), !H.mimes[g]) {
                        throw new k.DOMException(k.DOMException.SYNTAX_ERR);
                    }
                    V = g, f = u;
                },
                send: function(v, g) {
                    if (s = "string" === G.typeOf(g) ? {
                            ruid: g
                        } : g ? g : {}, this.convertEventPropsToHandlers(A), this.upload.convertEventPropsToHandlers(A), this.readyState !== x.OPENED || h) {
                        throw new k.DOMException(k.DOMException.INVALID_STATE_ERR);
                    }
                    if (v instanceof q) {
                        s.ruid = v.ruid, c = v.type || "application/octet-stream";
                    } else {
                        if (v instanceof I) {
                            if (v.hasBlob()) {
                                var u = v.getBlob();
                                s.ruid = u.ruid, c = u.type || "application/octet-stream";
                            }
                        } else {
                            "string" == typeof v && (bi = "UTF-8", c = "text/plain;charset=UTF-8", v = C.utf8_encode(v));
                        }
                    }
                    this.withCredentials || (this.withCredentials = s.required_caps && s.required_caps.send_browser_cookies && !i), p = !d && this.upload.hasEventListener(), m = !1, Y = !v, d || (h = !0), W.call(this, v);
                },
                abort: function() {
                    if (m = !0, d = !1, ~G.inArray(bj("readyState"), [x.UNSENT, x.OPENED, x.DONE])) {
                        bj("readyState", x.UNSENT);
                    } else {
                        if (bj("readyState", x.DONE), h = !1, !at) {
                            throw new k.DOMException(k.DOMException.INVALID_STATE_ERR);
                        }
                        at.getRuntime().exec.call(at, "XMLHttpRequest", "abort", Y), Y = !0;
                    }
                },
                destroy: function() {
                    at && ("function" === G.typeOf(at.destroy) && at.destroy(), at = null), this.unbindAll(), this.upload && (this.upload.unbindAll(), this.upload = null);
                }
            });
        }
        var D = {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            226: "IM Used",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            306: "Reserved",
            307: "Temporary Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Request Entity Too Large",
            414: "Request-URI Too Long",
            415: "Unsupported Media Type",
            416: "Requested Range Not Satisfiable",
            417: "Expectation Failed",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            426: "Upgrade Required",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates",
            507: "Insufficient Storage",
            510: "Not Extended"
        };
        F.prototype = z.instance;
        var A = ["loadstart", "progress", "abort", "error", "load", "timeout", "loadend"],
            E = 1,
            b = 2;
        return x.UNSENT = 0, x.OPENED = 1, x.HEADERS_RECEIVED = 2, x.LOADING = 3, x.DONE = 4, x.prototype = z.instance, x;
    }), a7(an, [aT, a2, aS, a8], function(d, b, f, a) {
        function c() {
            function h() {
                g = k = 0, m = this.result = null;
            }

            function e(o, r) {
                var l = this;
                p = r, l.bind("TransportingProgress", function(i) {
                    k = i.loaded, g > k && -1 === d.inArray(l.state, [c.IDLE, c.DONE]) && n.call(l);
                }, 999), l.bind("TransportingComplete", function() {
                    k = g, l.state = c.DONE, m = null, l.result = p.exec.call(l, "Transporter", "getAsBlob", o || "");
                }, 999), l.state = c.BUSY, l.trigger("TransportingStarted"), n.call(l);
            }

            function n() {
                var o = this,
                    r, l = g - k;
                j > l && (j = l), r = b.btoa(m.substr(k, j)), p.exec.call(o, "Transporter", "receive", r, g);
            }
            var q, p, m, g, k, j;
            f.call(this), d.extend(this, {
                uid: d.guid("uid_"),
                state: c.IDLE,
                result: null,
                transport: function(o, v, s) {
                    var i = this;
                    if (s = d.extend({
                            chunk_size: 204798
                        }, s), (q = s.chunk_size % 3) && (s.chunk_size += 3 - q), j = s.chunk_size, h.call(this), m = o, g = o.length, "string" === d.typeOf(s) || s.ruid) {
                        e.call(i, v, this.connectRuntime(s));
                    } else {
                        var l = function(u, r) {
                            i.unbind("RuntimeInit", l), e.call(i, v, r);
                        };
                        this.bind("RuntimeInit", l), this.connectRuntime(s);
                    }
                },
                abort: function() {
                    var i = this;
                    i.state = c.IDLE, p && (p.exec.call(i, "Transporter", "clear"), i.trigger("TransportingAborted")), h.call(i);
                },
                destroy: function() {
                    this.unbindAll(), p = null, this.disconnectRuntime(), h.call(this);
                }
            });
        }
        return c.IDLE = 0, c.BUSY = 1, c.DONE = 2, c.prototype = a.instance, c;
    }), a7(aw, [], function() {
        return !!window.JSON && JSON.parse || function() {
            var t, j, m = {
                    '"': '"',
                    "\\": "\\",
                    "/": "/",
                    b: "\b",
                    f: "\f",
                    n: "\n",
                    r: "\r",
                    t: "	"
                },
                b, h = function(a) {
                    throw {
                        name: "SyntaxError",
                        message: a,
                        at: t,
                        text: b
                    };
                },
                x = function(a) {
                    return a && a !== j && h("Expected '" + a + "' instead of '" + j + "'"), j = b.charAt(t), t += 1, j;
                },
                z = function() {
                    var c, a = "";
                    for ("-" === j && (a = "-", x("-")); j >= "0" && "9" >= j;) {
                        a += j, x();
                    }
                    if ("." === j) {
                        for (a += "."; x() && j >= "0" && "9" >= j;) {
                            a += j;
                        }
                    }
                    if ("e" === j || "E" === j) {
                        for (a += j, x(), ("-" === j || "+" === j) && (a += j, x()); j >= "0" && "9" >= j;) {
                            a += j, x();
                        }
                    }
                    return c = +a, isFinite(c) ? c : (h("Bad number"), void 0);
                },
                y = function() {
                    var f, a, d = "",
                        c;
                    if ('"' === j) {
                        for (; x();) {
                            if ('"' === j) {
                                return x(), d;
                            }
                            if ("\\" === j) {
                                if (x(), "u" === j) {
                                    for (c = 0, a = 0; 4 > a && (f = parseInt(x(), 16), isFinite(f)); a += 1) {
                                        c = 16 * c + f;
                                    }
                                    d += String.fromCharCode(c);
                                } else {
                                    if ("string" != typeof m[j]) {
                                        break;
                                    }
                                    d += m[j];
                                }
                            } else {
                                d += j;
                            }
                        }
                    }
                    h("Bad string");
                },
                w = function() {
                    for (; j && " " >= j;) {
                        x();
                    }
                },
                k = function() {
                    switch (j) {
                        case "t":
                            return x("t"), x("r"), x("u"), x("e"), !0;
                        case "f":
                            return x("f"), x("a"), x("l"), x("s"), x("e"), !1;
                        case "n":
                            return x("n"), x("u"), x("l"), x("l"), null;
                    }
                    h("Unexpected '" + j + "'");
                },
                v, q = function() {
                    var a = [];
                    if ("[" === j) {
                        if (x("["), w(), "]" === j) {
                            return x("]"), a;
                        }
                        for (; j;) {
                            if (a.push(v()), w(), "]" === j) {
                                return x("]"), a;
                            }
                            x(","), w();
                        }
                    }
                    h("Bad array");
                },
                g = function() {
                    var c, a = {};
                    if ("{" === j) {
                        if (x("{"), w(), "}" === j) {
                            return x("}"), a;
                        }
                        for (; j;) {
                            if (c = y(), w(), x(":"), Object.hasOwnProperty.call(a, c) && h('Duplicate key "' + c + '"'), a[c] = v(), w(), "}" === j) {
                                return x("}"), a;
                            }
                            x(","), w();
                        }
                    }
                    h("Bad object");
                };
            return v = function() {
                    switch (w(), j) {
                        case "{":
                            return g();
                        case "[":
                            return q();
                        case '"':
                            return y();
                        case "-":
                            return z();
                        default:
                            return j >= "0" && "9" >= j ? z() : k();
                    }
                },
                function(e, c) {
                    var f;
                    return b = e, t = 0, j = " ", f = v(), w(), j && h("Syntax error"), "function" == typeof c ? function d(p, u) {
                        var a, l, s = p[u];
                        if (s && "object" == typeof s) {
                            for (a in s) {
                                Object.prototype.hasOwnProperty.call(s, a) && (l = d(s, a), l !== aU ? s[a] = l : delete s[a]);
                            }
                        }
                        return c.call(p, u, s);
                    }({
                        "": f
                    }, "") : f;
                };
        }();
    }), a7(aC, [aT, bb, aZ, aF, ai, a9, aS, an, bd, a8, aP, aB, a2, aw], function(z, E, k, w, b, j, C, F, D, B, v, A, y, g) {
        function x() {
            function d(c) {
                if (c || (c = this.getRuntime().exec.call(this, "Image", "getInfo")), c) {
                    if ("string" === z.typeOf(c.meta)) {
                        try {
                            this.meta = g(c.meta);
                        } catch (i) {}
                    } else {
                        this.meta = c.meta;
                    }
                }
                z.extend(this, {
                    size: parseInt(c.size, 10),
                    width: parseInt(c.width, 10),
                    height: parseInt(c.height, 10),
                    type: c.type
                }), "" === this.name && (this.name = c.name);
            }

            function h(l) {
                var c = z.typeOf(l);
                try {
                    if (l instanceof x) {
                        if (!l.size) {
                            throw new k.DOMException(k.DOMException.INVALID_STATE_ERR);
                        }
                        e.apply(this, arguments);
                    } else {
                        if (l instanceof v) {
                            if (!~z.inArray(l.type, ["image/jpeg", "image/png"])) {
                                throw new k.ImageError(k.ImageError.WRONG_FORMAT);
                            }
                            a.apply(this, arguments);
                        } else {
                            if (-1 !== z.inArray(c, ["blob", "file"])) {
                                h.call(this, new A(null, l), arguments[1]);
                            } else {
                                if ("string" === c) {
                                    /^data:[^;]*;base64,/.test(l) ? h.call(this, new v(null, {
                                        data: l
                                    }), arguments[1]) : f.apply(this, arguments);
                                } else {
                                    if ("node" !== c || "img" !== l.nodeName.toLowerCase()) {
                                        throw new k.DOMException(k.DOMException.TYPE_MISMATCH_ERR);
                                    }
                                    h.call(this, l.src, arguments[1]);
                                }
                            }
                        }
                    }
                } catch (m) {
                    this.trigger("error", m);
                }
            }

            function e(l, m) {
                var c = this.connectRuntime(l.ruid);
                this.ruid = c.uid, c.exec.call(this, "Image", "loadFromImage", l, "undefined" === z.typeOf(m) ? !0 : m);
            }

            function a(l, o) {
                function c(i) {
                    m.ruid = i.uid, i.exec.call(m, "Image", "loadFromBlob", l);
                }
                var m = this;
                m.name = l.name || "", l.isDetached() ? (this.bind("RuntimeInit", function(n, i) {
                    c(i);
                }), o && "string" == typeof o.required_caps && (o.required_caps = j.parseCaps(o.required_caps)), this.connectRuntime(z.extend({
                    required_caps: {
                        access_image_binary: !0,
                        resize_image: !0
                    }
                }, o))) : c(this.connectRuntime(l.ruid));
            }

            function f(m, l) {
                var o = this,
                    c;
                c = new b, c.open("get", m), c.responseType = "blob", c.onprogress = function(i) {
                    o.trigger(i);
                }, c.onload = function() {
                    a.call(o, c.response, !0);
                }, c.onerror = function(i) {
                    o.trigger(i);
                }, c.onloadend = function() {
                    c.destroy();
                }, c.bind("RuntimeError", function(n, i) {
                    o.trigger("RuntimeError", i);
                }), c.send(null, l);
            }
            C.call(this), z.extend(this, {
                uid: z.guid("uid_"),
                ruid: null,
                name: "",
                size: 0,
                width: 0,
                height: 0,
                type: "",
                meta: {},
                clone: function() {
                    this.load.apply(this, arguments);
                },
                load: function() {
                    this.bind("Load Resize", function() {
                        d.call(this);
                    }, 999), this.convertEventPropsToHandlers(q), h.apply(this, arguments);
                },
                downsize: function(m, l, n, p) {
                    try {
                        if (!this.size) {
                            throw new k.DOMException(k.DOMException.INVALID_STATE_ERR);
                        }
                        if (this.width > x.MAX_RESIZE_WIDTH || this.height > x.MAX_RESIZE_HEIGHT) {
                            throw new k.ImageError(k.ImageError.MAX_RESOLUTION_ERR);
                        }(!m && !l || "undefined" === z.typeOf(n)) && (n = !1), m = m || this.width, l = l || this.height, p = "undefined" === z.typeOf(p) ? !0 : !!p, this.getRuntime().exec.call(this, "Image", "downsize", m, l, n, p);
                    } catch (c) {
                        this.trigger("error", c);
                    }
                },
                crop: function(i, c, l) {
                    this.downsize(i, c, !0, l);
                },
                getAsCanvas: function() {
                    if (!D.can("create_canvas")) {
                        throw new k.RuntimeError(k.RuntimeError.NOT_SUPPORTED_ERR);
                    }
                    var c = this.connectRuntime(this.ruid);
                    return c.exec.call(this, "Image", "getAsCanvas");
                },
                getAsBlob: function(i, c) {
                    if (!this.size) {
                        throw new k.DOMException(k.DOMException.INVALID_STATE_ERR);
                    }
                    return i || (i = "image/jpeg"), "image/jpeg" !== i || c || (c = 90), this.getRuntime().exec.call(this, "Image", "getAsBlob", i, c);
                },
                getAsDataURL: function(i, c) {
                    if (!this.size) {
                        throw new k.DOMException(k.DOMException.INVALID_STATE_ERR);
                    }
                    return this.getRuntime().exec.call(this, "Image", "getAsDataURL", i, c);
                },
                getAsBinaryString: function(i, c) {
                    var l = this.getAsDataURL(i, c);
                    return y.atob(l.substring(l.indexOf("base64,") + 7));
                },
                embed: function(H) {
                    function n() {
                        if (D.can("create_canvas")) {
                            var c = M.getAsCanvas();
                            if (c) {
                                return H.appendChild(c), c = null, M.destroy(), t.trigger("embedded"), void 0;
                            }
                        }
                        var i = M.getAsDataURL(K, G);
                        if (!i) {
                            throw new k.ImageError(k.ImageError.WRONG_FORMAT);
                        }
                        if (D.can("use_data_uri_of", i.length)) {
                            H.innerHTML = '<img src="' + i + '" width="' + M.width + '" height="' + M.height + '" />', M.destroy(), t.trigger("embedded");
                        } else {
                            var l = new F;
                            l.bind("TransportingComplete", function() {
                                N = t.connectRuntime(this.result.ruid), t.bind("Embedded", function() {
                                    z.extend(N.getShimContainer().style, {
                                        top: "0px",
                                        left: "0px",
                                        width: M.width + "px",
                                        height: M.height + "px"
                                    }), N = null;
                                }, 999), N.exec.call(t, "ImageView", "display", this.result.uid, u, I), M.destroy();
                            }), l.transport(y.atob(i.substring(i.indexOf("base64,") + 7)), K, z.extend({}, s, {
                                required_caps: {
                                    display_media: !0
                                },
                                runtime_order: "flash,silverlight",
                                container: H
                            }));
                        }
                    }
                    var t = this,
                        M, K, G, J, s = arguments[1] || {},
                        u = this.width,
                        I = this.height,
                        N;
                    try {
                        if (!(H = E.get(H))) {
                            throw new k.DOMException(k.DOMException.INVALID_NODE_TYPE_ERR);
                        }
                        if (!this.size) {
                            throw new k.DOMException(k.DOMException.INVALID_STATE_ERR);
                        }
                        if (this.width > x.MAX_RESIZE_WIDTH || this.height > x.MAX_RESIZE_HEIGHT) {
                            throw new k.ImageError(k.ImageError.MAX_RESOLUTION_ERR);
                        }
                        if (K = s.type || this.type || "image/jpeg", G = s.quality || 90, J = "undefined" !== z.typeOf(s.crop) ? s.crop : !1, s.width) {
                            u = s.width, I = s.height || u;
                        } else {
                            var L = E.getSize(H);
                            L.w && L.h && (u = L.w, I = L.h);
                        }
                        return M = new x, M.bind("Resize", function() {
                            n.call(t);
                        }), M.bind("Load", function() {
                            M.downsize(u, I, J, !1);
                        }), M.clone(this, !1), M;
                    } catch (O) {
                        this.trigger("error", O);
                    }
                },
                destroy: function() {
                    this.ruid && (this.getRuntime().exec.call(this, "Image", "destroy"), this.disconnectRuntime()), this.unbindAll();
                }
            });
        }
        var q = ["progress", "load", "error", "resize", "embedded"];
        return x.MAX_RESIZE_WIDTH = 6500, x.MAX_RESIZE_HEIGHT = 6500, x.prototype = B.instance, x;
    }), a7(aq, [aT, aZ, a9, bd], function(g, d, j, c) {
        function f(e) {
            var k = this,
                i = j.capTest,
                a = j.capTrue,
                l = g.extend({
                    access_binary: i(window.FileReader || window.File && window.File.getAsDataURL),
                    access_image_binary: function() {
                        return k.can("access_binary") && !!b.Image;
                    },
                    display_media: i(c.can("create_canvas") || c.can("use_data_uri_over32kb")),
                    do_cors: i(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest),
                    drag_and_drop: i(function() {
                        var m = document.createElement("div");
                        return ("draggable" in m || "ondragstart" in m && "ondrop" in m) && ("IE" !== c.browser || c.version > 9);
                    }()),
                    filter_by_extension: i(function() {
                        return "Chrome" === c.browser && c.version >= 28 || "IE" === c.browser && c.version >= 10;
                    }()),
                    return_response_headers: a,
                    return_response_type: function(m) {
                        return "json" === m ? !0 : c.can("return_response_type", m);
                    },
                    return_status_code: a,
                    report_upload_progress: i(window.XMLHttpRequest && (new XMLHttpRequest).upload),
                    resize_image: function() {
                        return k.can("access_binary") && c.can("create_canvas");
                    },
                    select_file: function() {
                        return c.can("use_fileinput") && window.File;
                    },
                    select_folder: function() {
                        return k.can("select_file") && "Chrome" === c.browser && c.version >= 21;
                    },
                    select_multiple: function() {
                        return k.can("select_file") && !("Safari" === c.browser && "Windows" === c.OS);
                    },
                    send_binary_string: i(window.XMLHttpRequest && ((new XMLHttpRequest).sendAsBinary || window.Uint8Array && window.ArrayBuffer)),
                    send_custom_headers: i(window.XMLHttpRequest),
                    send_multipart: function() {
                        return !!(window.XMLHttpRequest && (new XMLHttpRequest).upload && window.FormData) || k.can("send_binary_string");
                    },
                    slice_blob: i(window.File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice)),
                    stream_upload: function() {
                        return k.can("slice_blob") && k.can("send_multipart");
                    },
                    summon_file_dialog: i(function() {
                        return "Firefox" === c.browser && c.version >= 4 || "Opera" === c.browser && c.version >= 12 || "IE" === c.browser && c.version >= 10 || !!~g.inArray(c.browser, ["Chrome", "Safari"]);
                    }()),
                    upload_filesize: a
                }, arguments[2]);
            j.call(this, e, arguments[1] || h, l), g.extend(this, {
                init: function() {
                    this.trigger("Init");
                },
                destroy: function(m) {
                    return function() {
                        m.call(k), m = k = null;
                    };
                }(this.destroy)
            }), g.extend(this.getShim(), b);
        }
        var h = "html5",
            b = {};
        return j.addConstructor(h, f), b;
    }), a7(ao, [aq, aP], function(b, a) {
        function c() {
            function d(j, g, k) {
                var f;
                if (!window.File.prototype.slice) {
                    return (f = window.File.prototype.webkitSlice || window.File.prototype.mozSlice) ? f.call(j, g, k) : null;
                }
                try {
                    return j.slice(), j.slice(g, k);
                } catch (h) {
                    return j.slice(g, k - g);
                }
            }
            this.slice = function() {
                return new a(this.getRuntime().uid, d.apply(this, arguments));
            };
        }
        return b.Blob = c;
    }), a7(ap, [aT], function(h) {
        function d() {
            this.returnValue = !1;
        }

        function k() {
            this.cancelBubble = !0;
        }
        var c = {},
            g = "moxie_" + h.guid(),
            j = function(p, i, n, m) {
                var q, e;
                i = i.toLowerCase(), p.addEventListener ? (q = n, p.addEventListener(i, q, !1)) : p.attachEvent && (q = function() {
                    var a = window.event;
                    a.target || (a.target = a.srcElement), a.preventDefault = d, a.stopPropagation = k, n(a);
                }, p.attachEvent("on" + i, q)), p[g] || (p[g] = h.guid()), c.hasOwnProperty(p[g]) || (c[p[g]] = {}), e = c[p[g]], e.hasOwnProperty(i) || (e[i] = []), e[i].push({
                    func: q,
                    orig: n,
                    key: m
                });
            },
            b = function(l, r, p) {
                var e, m;
                if (r = r.toLowerCase(), l[g] && c[l[g]] && c[l[g]][r]) {
                    e = c[l[g]][r];
                    for (var i = e.length - 1; i >= 0 && (e[i].orig !== p && e[i].key !== p || (l.removeEventListener ? l.removeEventListener(r, e[i].func, !1) : l.detachEvent && l.detachEvent("on" + r, e[i].func), e[i].orig = null, e[i].func = null, e.splice(i, 1), p === m)); i--) {}
                    if (e.length || delete c[l[g]][r], h.isEmptyObj(c[l[g]])) {
                        delete c[l[g]];
                        try {
                            delete l[g];
                        } catch (q) {
                            l[g] = m;
                        }
                    }
                }
            },
            f = function(a, e) {
                a && a[g] && h.each(c[a[g]], function(m, l) {
                    b(a, l, e);
                });
            };
        return {
            addEvent: j,
            removeEvent: b,
            removeAllEvents: f
        };
    }), a7(aD, [aq, aT, bb, ap, a3, bd], function(g, d, j, c, f, h) {
        function b() {
            var k = [],
                i;
            d.extend(this, {
                init: function(x) {
                    var w = this,
                        v = w.getRuntime(),
                        n, t, r, a, o, e;
                    i = x, k = [], r = i.accept.mimes || f.extList2mimes(i.accept, v.can("filter_by_extension")), t = v.getShimContainer(), t.innerHTML = '<input id="' + v.uid + '" type="file" style="font-size:999px;opacity:0;"' + (i.multiple && v.can("select_multiple") ? "multiple" : "") + (i.directory && v.can("select_folder") ? "webkitdirectory directory" : "") + (r ? ' accept="' + r.join(",") + '"' : "") + " />", n = j.get(v.uid), d.extend(n.style, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }), a = j.get(i.browse_button), v.can("summon_file_dialog") && ("static" === j.getStyle(a, "position") && (a.style.position = "relative"), o = parseInt(j.getStyle(a, "z-index"), 10) || 1, a.style.zIndex = o, t.style.zIndex = o - 1, c.addEvent(a, "click", function(m) {
                        var l = j.get(v.uid);
                        l && !l.disabled && l.click(), m.preventDefault();
                    }, w.uid)), e = v.can("summon_file_dialog") ? a : t, c.addEvent(e, "mouseover", function() {
                        w.trigger("mouseenter");
                    }, w.uid), c.addEvent(e, "mouseout", function() {
                        w.trigger("mouseleave");
                    }, w.uid), c.addEvent(e, "mousedown", function() {
                        w.trigger("mousedown");
                    }, w.uid), c.addEvent(j.get(i.container), "mouseup", function() {
                        w.trigger("mouseup");
                    }, w.uid), n.onchange = function q() {
                        if (k = [], i.directory ? d.each(this.files, function(m) {
                                "." !== m.name && k.push(m);
                            }) : k = [].slice.call(this.files), "IE" !== h.browser) {
                            this.value = "";
                        } else {
                            var l = this.cloneNode(!0);
                            this.parentNode.replaceChild(l, this), l.onchange = q;
                        }
                        w.trigger("change");
                    }, w.trigger({
                        type: "ready",
                        async: !0
                    }), t = null;
                },
                getFiles: function() {
                    return k;
                },
                disable: function(m) {
                    var l = this.getRuntime(),
                        a;
                    (a = j.get(l.uid)) && (a.disabled = !!m);
                },
                destroy: function() {
                    var a = this.getRuntime(),
                        e = a.getShimContainer();
                    c.removeAllEvents(e, this.uid), c.removeAllEvents(i && j.get(i.container), this.uid), c.removeAllEvents(i && j.get(i.browse_button), this.uid), e && (e.innerHTML = ""), k = i = null;
                }
            });
        }
        return g.FileInput = b;
    }), a7(aA, [aq, aT, bb, ap, a3], function(d, b, g, a, c) {
        function f() {
            function m(o) {
                for (var r = [], l = 0; l < o.length; l++) {
                    [].push.apply(r, o[l].extensions.split(/\s*,\s*/));
                }
                return -1 === b.inArray("*", r) ? r : [];
            }

            function p(l) {
                var o = c.getFileExtension(l.name);
                return !o || !h.length || -1 !== b.inArray(o, h);
            }

            function i(o, r) {
                var l = [];
                b.each(o, function(s) {
                    l.push(function(e) {
                        k(s, e);
                    });
                }), b.inSeries(l, function() {
                    r();
                });
            }

            function k(o, l) {
                o.isFile ? o.file(function(r) {
                    p(r) && q.push(r), l();
                }, function() {
                    l();
                }) : o.isDirectory ? j(o, l) : l();
            }

            function j(u, o) {
                function v(r) {
                    s.readEntries(function(e) {
                        e.length ? ([].push.apply(l, e), v(r)) : r();
                    }, r);
                }
                var l = [],
                    s = u.createReader();
                v(function() {
                    i(l, o);
                });
            }
            var q = [],
                h = [],
                n;
            b.extend(this, {
                init: function(o) {
                    var l = this,
                        e;
                    n = o, h = m(n.accept), e = n.container, a.addEvent(e, "dragover", function(r) {
                        r.preventDefault(), r.stopPropagation(), r.dataTransfer.dropEffect = "copy";
                    }, l.uid), a.addEvent(e, "drop", function(r) {
                        if (r.preventDefault(), r.stopPropagation(), q = [], r.dataTransfer.items && r.dataTransfer.items[0].webkitGetAsEntry) {
                            var s = [];
                            b.each(r.dataTransfer.items, function(t) {
                                s.push(t.webkitGetAsEntry());
                            }), i(s, function() {
                                l.trigger("drop");
                            });
                        } else {
                            b.each(r.dataTransfer.files, function(t) {
                                p(t) && q.push(t);
                            }), l.trigger("drop");
                        }
                    }, l.uid), a.addEvent(e, "dragenter", function(r) {
                        r.preventDefault(), r.stopPropagation(), l.trigger("dragenter");
                    }, l.uid), a.addEvent(e, "dragleave", function(r) {
                        r.preventDefault(), r.stopPropagation(), l.trigger("dragleave");
                    }, l.uid);
                },
                getFiles: function() {
                    return q;
                },
                destroy: function() {
                    a.removeAllEvents(n && g.get(n.container), this.uid), q = h = n = null;
                }
            });
        }
        return d.FileDrop = f;
    }), a7(am, [aq, a2, aT], function(c, b, d) {
        function a() {
            function h(i) {
                return b.atob(i.substring(i.indexOf("base64,") + 7));
            }
            var f, g = !1;
            d.extend(this, {
                read: function(j, i) {
                    var k = this;
                    f = new window.FileReader, f.addEventListener("progress", function(l) {
                        k.trigger(l);
                    }), f.addEventListener("load", function(l) {
                        k.trigger(l);
                    }), f.addEventListener("error", function(l) {
                        k.trigger(l, f.error);
                    }), f.addEventListener("loadend", function() {
                        f = null;
                    }), "function" === d.typeOf(f[j]) ? (g = !1, f[j](i.getSource())) : "readAsBinaryString" === j && (g = !0, f.readAsDataURL(i.getSource()));
                },
                getResult: function() {
                    return f && f.result ? g ? h(f.result) : f.result : null;
                },
                abort: function() {
                    f && f.abort();
                },
                destroy: function() {
                    f = null;
                }
            });
        }
        return c.FileReader = a;
    }), a7(ax, [aq, aT, a3, bf, aB, aP, ag, aZ, bd, aw], function(j, q, f, h, b, d, m, v, p, k) {
        function g() {
            function o(w, s) {
                var x = this,
                    l, u;
                l = s.getBlob().getSource(), u = new window.FileReader, u.onload = function() {
                    s.append(s.getBlobName(), new d(null, {
                        type: l.type,
                        data: u.result
                    })), self.send.call(x, w, s);
                }, u.readAsBinaryString(l);
            }

            function a() {
                return !window.XMLHttpRequest || "IE" === p.browser && p.version < 8 ? function() {
                    for (var s = ["Msxml2.XMLHTTP.6.0", "Microsoft.XMLHTTP"], l = 0; l < s.length; l++) {
                        try {
                            return new ActiveXObject(s[l]);
                        } catch (u) {}
                    }
                }() : new window.XMLHttpRequest;
            }

            function r(s) {
                var l = s.responseXML,
                    u = s.responseText;
                return "IE" === p.browser && u && l && !l.documentElement && /[^\/]+\/[^\+]+\+xml/.test(s.getResponseHeader("Content-Type")) && (l = new window.ActiveXObject("Microsoft.XMLDOM"), l.async = !1, l.validateOnParse = !1, l.loadXML(u)), l && ("IE" === p.browser && 0 !== l.parseError || !l.documentElement || "parsererror" === l.documentElement.tagName) ? null : l;
            }

            function i(x) {
                var u = "----moxieboundary" + (new Date).getTime(),
                    y = "--",
                    s = "\r\n",
                    w = "",
                    l = this.getRuntime();
                if (!l.can("send_binary_string")) {
                    throw new v.RuntimeError(v.RuntimeError.NOT_SUPPORTED_ERR);
                }
                return n.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + u), x.each(function(z, t) {
                    w += z instanceof d ? y + u + s + 'Content-Disposition: form-data; name="' + t + '"; filename="' + unescape(encodeURIComponent(z.name || "blob")) + '"' + s + "Content-Type: " + z.type + s + s + z.getSource() + s : y + u + s + 'Content-Disposition: form-data; name="' + t + '"' + s + s + unescape(encodeURIComponent(z)) + s;
                }), w += y + u + y + s;
            }
            var n, c;
            q.extend(this, {
                send: function(z, w) {
                    var t = this,
                        y = "Mozilla" === p.browser && p.version >= 4 && p.version < 7,
                        x = "Android Browser" === p.browser,
                        e = !1;
                    if (c = z.url.replace(/^.+?\/([\w\-\.]+)$/, "$1").toLowerCase(), n = a(), n.open(z.method, z.url, z.async, z.user, z.password), w instanceof d) {
                        w.isDetached() && (e = !0), w = w.getSource();
                    } else {
                        if (w instanceof m) {
                            if (w.hasBlob()) {
                                if (w.getBlob().isDetached()) {
                                    w = i.call(t, w), e = !0;
                                } else {
                                    if ((y || x) && "blob" === q.typeOf(w.getBlob().getSource()) && window.FileReader) {
                                        return o.call(t, z, w), void 0;
                                    }
                                }
                            }
                            if (w instanceof m) {
                                var u = new window.FormData;
                                w.each(function(A, s) {
                                    A instanceof d ? u.append(s, A.getSource()) : u.append(s, A);
                                }), w = u;
                            }
                        }
                    }
                    n.upload ? (z.withCredentials && (n.withCredentials = !0), n.addEventListener("load", function(s) {
                        t.trigger(s);
                    }), n.addEventListener("error", function(s) {
                        t.trigger(s);
                    }), n.addEventListener("progress", function(s) {
                        t.trigger(s);
                    }), n.upload.addEventListener("progress", function(s) {
                        t.trigger({
                            type: "UploadProgress",
                            loaded: s.loaded,
                            total: s.total
                        });
                    })) : n.onreadystatechange = function l() {
                        switch (n.readyState) {
                            case 1:
                                break;
                            case 2:
                                break;
                            case 3:
                                var B, s;
                                try {
                                    h.hasSameOrigin(z.url) && (B = n.getResponseHeader("Content-Length") || 0), n.responseText && (s = n.responseText.length);
                                } catch (A) {
                                    B = s = 0;
                                }
                                t.trigger({
                                    type: "progress",
                                    lengthComputable: !!B,
                                    total: parseInt(B, 10),
                                    loaded: s
                                });
                                break;
                            case 4:
                                n.onreadystatechange = function() {}, 0 === n.status ? t.trigger("error") : t.trigger("load");
                        }
                    }, q.isEmptyObj(z.headers) || q.each(z.headers, function(A, s) {
                        n.setRequestHeader(s, A);
                    }), "" !== z.responseType && "responseType" in n && (n.responseType = "json" !== z.responseType || p.can("return_response_type", "json") ? z.responseType : "text"), e ? n.sendAsBinary ? n.sendAsBinary(w) : function() {
                        for (var A = new Uint8Array(w.length), s = 0; s < w.length; s++) {
                            A[s] = 255 & w.charCodeAt(s);
                        }
                        n.send(A.buffer);
                    }() : n.send(w), t.trigger("loadstart");
                },
                getStatus: function() {
                    try {
                        if (n) {
                            return n.status;
                        }
                    } catch (l) {}
                    return 0;
                },
                getResponse: function(y) {
                    var w = this.getRuntime();
                    try {
                        switch (y) {
                            case "blob":
                                var u = new b(w.uid, n.response),
                                    z = n.getResponseHeader("Content-Disposition");
                                if (z) {
                                    var l = z.match(/filename=([\'\"'])([^\1]+)\1/);
                                    l && (c = l[2]);
                                }
                                return u.name = c, u.type || (u.type = f.getFileMime(c)), u;
                            case "json":
                                return p.can("return_response_type", "json") ? n.response : 200 === n.status ? k(n.responseText) : null;
                            case "document":
                                return r(n);
                            default:
                                return "" !== n.responseText ? n.responseText : null;
                        }
                    } catch (x) {
                        return null;
                    }
                },
                getAllResponseHeaders: function() {
                    try {
                        return n.getAllResponseHeaders();
                    } catch (l) {}
                    return "";
                },
                abort: function() {
                    n && n.abort();
                },
                destroy: function() {
                    self = c = null;
                }
            });
        }
        return j.XMLHttpRequest = g;
    }), a7(aE, [], function() {
        return function() {
            function c(k, j) {
                var l = b ? 0 : -8 * (j - 1),
                    h = 0,
                    g;
                for (g = 0; j > g; g++) {
                    h |= d.charCodeAt(k + g) << Math.abs(l + 8 * g);
                }
                return h;
            }

            function f(h, g, i) {
                i = 3 === arguments.length ? i : d.length - g - 1, d = d.substr(0, g) + h + d.substr(i + g);
            }

            function a(l, j, h) {
                var m = "",
                    g = b ? 0 : -8 * (h - 1),
                    k;
                for (k = 0; h > k; k++) {
                    m += String.fromCharCode(255 & j >> Math.abs(g + 8 * k));
                }
                f(m, l, h);
            }
            var b = !1,
                d;
            return {
                II: function(g) {
                    return g === aU ? b : (b = g, void 0);
                },
                init: function(g) {
                    b = !1, d = g;
                },
                SEGMENT: function(j, h, g) {
                    switch (arguments.length) {
                        case 1:
                            return d.substr(j, d.length - j - 1);
                        case 2:
                            return d.substr(j, h);
                        case 3:
                            f(g, j, h);
                            break;
                        default:
                            return d;
                    }
                },
                BYTE: function(e) {
                    return c(e, 1);
                },
                SHORT: function(e) {
                    return c(e, 2);
                },
                LONG: function(g, e) {
                    return e === aU ? c(g, 4) : (a(g, e, 4), void 0);
                },
                SLONG: function(e) {
                    var g = c(e, 4);
                    return g > 2147483647 ? g - 4294967296 : g;
                },
                STRING: function(g, h) {
                    var e = "";
                    for (h += g; h > g; g++) {
                        e += String.fromCharCode(c(g, 1));
                    }
                    return e;
                }
            };
        };
    }), a7(af, [aE], function(b) {
        return function a(h) {
            var d = [],
                f, g, c, e = 0;
            if (f = new b, f.init(h), 65496 === f.SHORT(0)) {
                for (g = 2; g <= h.length;) {
                    if (c = f.SHORT(g), c >= 65488 && 65495 >= c) {
                        g += 2;
                    } else {
                        if (65498 === c || 65497 === c) {
                            break;
                        }
                        e = f.SHORT(g + 2) + 2, c >= 65505 && 65519 >= c && d.push({
                            hex: c,
                            name: "APP" + (15 & c),
                            start: g,
                            length: e,
                            segment: f.SEGMENT(g, e)
                        }), g += e;
                    }
                }
                return f.init(null), {
                    headers: d,
                    restore: function(j) {
                        var i, k;
                        for (f.init(j), g = 65504 == f.SHORT(2) ? 4 + f.SHORT(4) : 2, k = 0, i = d.length; i > k; k++) {
                            f.SEGMENT(g, 0, d[k].segment), g += d[k].length;
                        }
                        return j = f.SEGMENT(), f.init(null), j;
                    },
                    strip: function(k) {
                        var m, j, l;
                        for (j = new a(k), m = j.headers, j.purge(), f.init(k), l = m.length; l--;) {
                            f.SEGMENT(m[l].start, m[l].length, "");
                        }
                        return k = f.SEGMENT(), f.init(null), k;
                    },
                    get: function(k) {
                        for (var i = [], l = 0, j = d.length; j > l; l++) {
                            d[l].name === k.toUpperCase() && i.push(d[l].segment);
                        }
                        return i;
                    },
                    set: function(l, j) {
                        var p = [],
                            k, m, i;
                        for ("string" == typeof j ? p.push(j) : p = j, k = m = 0, i = d.length; i > k && (d[k].name === l.toUpperCase() && (d[k].segment = p[m], d[k].length = p[m].length, m++), !(m >= p.length)); k++) {}
                    },
                    purge: function() {
                        d = [], f.init(null), f = null;
                    }
                };
            }
        };
    }), a7(az, [aT, aE], function(b, c) {
        return function a() {
            function g(B, v) {
                var x = e.SHORT(B),
                    l, t, E, D, C, A, q, y, w = [],
                    z = {};
                for (l = 0; x > l; l++) {
                    if (q = A = B + 12 * l + 2, E = v[e.SHORT(q)], E !== aU) {
                        switch (D = e.SHORT(q += 2), C = e.LONG(q += 2), q += 4, w = [], D) {
                            case 1:
                            case 7:
                                for (C > 4 && (q = e.LONG(q) + m.tiffHeader), t = 0; C > t; t++) {
                                    w[t] = e.BYTE(q + t);
                                }
                                break;
                            case 2:
                                C > 4 && (q = e.LONG(q) + m.tiffHeader), z[E] = e.STRING(q, C - 1);
                                continue;
                            case 3:
                                for (C > 2 && (q = e.LONG(q) + m.tiffHeader), t = 0; C > t; t++) {
                                    w[t] = e.SHORT(q + 2 * t);
                                }
                                break;
                            case 4:
                                for (C > 1 && (q = e.LONG(q) + m.tiffHeader), t = 0; C > t; t++) {
                                    w[t] = e.LONG(q + 4 * t);
                                }
                                break;
                            case 5:
                                for (q = e.LONG(q) + m.tiffHeader, t = 0; C > t; t++) {
                                    w[t] = e.LONG(q + 4 * t) / e.LONG(q + 4 * t + 4);
                                }
                                break;
                            case 9:
                                for (q = e.LONG(q) + m.tiffHeader, t = 0; C > t; t++) {
                                    w[t] = e.SLONG(q + 4 * t);
                                }
                                break;
                            case 10:
                                for (q = e.LONG(q) + m.tiffHeader, t = 0; C > t; t++) {
                                    w[t] = e.SLONG(q + 4 * t) / e.SLONG(q + 4 * t + 4);
                                }
                                break;
                            default:
                                continue;
                        }
                        y = 1 == C ? w[0] : w, z[E] = d.hasOwnProperty(E) && "object" != typeof y ? d[E][y] : y;
                    }
                }
                return z;
            }

            function j() {
                var i = m.tiffHeader;
                return e.II(18761 == e.SHORT(i)), 42 !== e.SHORT(i += 2) ? !1 : (m.IFD0 = m.tiffHeader + e.LONG(i += 2), f = g(m.IFD0, h.tiff), "ExifIFDPointer" in f && (m.exifIFD = m.tiffHeader + f.ExifIFDPointer, delete f.ExifIFDPointer), "GPSInfoIFDPointer" in f && (m.gpsIFD = m.tiffHeader + f.GPSInfoIFDPointer, delete f.GPSInfoIFDPointer), !0);
            }

            function k(y, B, s) {
                var w, p, q, A = 0;
                if ("string" == typeof B) {
                    var v = h[y.toLowerCase()];
                    for (var z in v) {
                        if (v[z] === B) {
                            B = z;
                            break;
                        }
                    }
                }
                w = m[y.toLowerCase() + "IFD"], p = e.SHORT(w);
                for (var x = 0; p > x; x++) {
                    if (q = w + 12 * x + 2, e.SHORT(q) == B) {
                        A = q + 8;
                        break;
                    }
                }
                return A ? (e.LONG(A, s), !0) : !1;
            }
            var e, h, f, m = {},
                d;
            return e = new c, h = {
                tiff: {
                    274: "Orientation",
                    270: "ImageDescription",
                    271: "Make",
                    272: "Model",
                    305: "Software",
                    34665: "ExifIFDPointer",
                    34853: "GPSInfoIFDPointer"
                },
                exif: {
                    36864: "ExifVersion",
                    40961: "ColorSpace",
                    40962: "PixelXDimension",
                    40963: "PixelYDimension",
                    36867: "DateTimeOriginal",
                    33434: "ExposureTime",
                    33437: "FNumber",
                    34855: "ISOSpeedRatings",
                    37377: "ShutterSpeedValue",
                    37378: "ApertureValue",
                    37383: "MeteringMode",
                    37384: "LightSource",
                    37385: "Flash",
                    37386: "FocalLength",
                    41986: "ExposureMode",
                    41987: "WhiteBalance",
                    41990: "SceneCaptureType",
                    41988: "DigitalZoomRatio",
                    41992: "Contrast",
                    41993: "Saturation",
                    41994: "Sharpness"
                },
                gps: {
                    0: "GPSVersionID",
                    1: "GPSLatitudeRef",
                    2: "GPSLatitude",
                    3: "GPSLongitudeRef",
                    4: "GPSLongitude"
                }
            }, d = {
                ColorSpace: {
                    1: "sRGB",
                    0: "Uncalibrated"
                },
                MeteringMode: {
                    0: "Unknown",
                    1: "Average",
                    2: "CenterWeightedAverage",
                    3: "Spot",
                    4: "MultiSpot",
                    5: "Pattern",
                    6: "Partial",
                    255: "Other"
                },
                LightSource: {
                    1: "Daylight",
                    2: "Fliorescent",
                    3: "Tungsten",
                    4: "Flash",
                    9: "Fine weather",
                    10: "Cloudy weather",
                    11: "Shade",
                    12: "Daylight fluorescent (D 5700 - 7100K)",
                    13: "Day white fluorescent (N 4600 -5400K)",
                    14: "Cool white fluorescent (W 3900 - 4500K)",
                    15: "White fluorescent (WW 3200 - 3700K)",
                    17: "Standard light A",
                    18: "Standard light B",
                    19: "Standard light C",
                    20: "D55",
                    21: "D65",
                    22: "D75",
                    23: "D50",
                    24: "ISO studio tungsten",
                    255: "Other"
                },
                Flash: {
                    0: "Flash did not fire.",
                    1: "Flash fired.",
                    5: "Strobe return light not detected.",
                    7: "Strobe return light detected.",
                    9: "Flash fired, compulsory flash mode",
                    13: "Flash fired, compulsory flash mode, return light not detected",
                    15: "Flash fired, compulsory flash mode, return light detected",
                    16: "Flash did not fire, compulsory flash mode",
                    24: "Flash did not fire, auto mode",
                    25: "Flash fired, auto mode",
                    29: "Flash fired, auto mode, return light not detected",
                    31: "Flash fired, auto mode, return light detected",
                    32: "No flash function",
                    65: "Flash fired, red-eye reduction mode",
                    69: "Flash fired, red-eye reduction mode, return light not detected",
                    71: "Flash fired, red-eye reduction mode, return light detected",
                    73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                    77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                    79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                    89: "Flash fired, auto mode, red-eye reduction mode",
                    93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                    95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
                },
                ExposureMode: {
                    0: "Auto exposure",
                    1: "Manual exposure",
                    2: "Auto bracket"
                },
                WhiteBalance: {
                    0: "Auto white balance",
                    1: "Manual white balance"
                },
                SceneCaptureType: {
                    0: "Standard",
                    1: "Landscape",
                    2: "Portrait",
                    3: "Night scene"
                },
                Contrast: {
                    0: "Normal",
                    1: "Soft",
                    2: "Hard"
                },
                Saturation: {
                    0: "Normal",
                    1: "Low saturation",
                    2: "High saturation"
                },
                Sharpness: {
                    0: "Normal",
                    1: "Soft",
                    2: "Hard"
                },
                GPSLatitudeRef: {
                    N: "North latitude",
                    S: "South latitude"
                },
                GPSLongitudeRef: {
                    E: "East longitude",
                    W: "West longitude"
                }
            }, {
                init: function(i) {
                    return m = {
                        tiffHeader: 10
                    }, i !== aU && i.length ? (e.init(i), 65505 === e.SHORT(0) && "EXIF\0" === e.STRING(4, 5).toUpperCase() ? j() : !1) : !1;
                },
                TIFF: function() {
                    return f;
                },
                EXIF: function() {
                    var i;
                    if (i = g(m.exifIFD, h.exif), i.ExifVersion && "array" === b.typeOf(i.ExifVersion)) {
                        for (var o = 0, l = ""; o < i.ExifVersion.length; o++) {
                            l += String.fromCharCode(i.ExifVersion[o]);
                        }
                        i.ExifVersion = l;
                    }
                    return i;
                },
                GPS: function() {
                    var i;
                    return i = g(m.gpsIFD, h.gps), i.GPSVersionID && "array" === b.typeOf(i.GPSVersionID) && (i.GPSVersionID = i.GPSVersionID.join(".")), i;
                },
                setExif: function(l, i) {
                    return "PixelXDimension" !== l && "PixelYDimension" !== l ? !1 : k("exif", l, i);
                },
                getBinary: function() {
                    return e.SEGMENT();
                },
                purge: function() {
                    e.init(null), e = f = null, m = {};
                }
            };
        };
    }), a7(aO, [aT, aZ, af, aE, az], function(d, b, g, a, c) {
        function f(h) {
            function n() {
                for (var o = 0, l, p; o <= q.length;) {
                    if (l = m.SHORT(o += 2), l >= 65472 && 65475 >= l) {
                        return o += 5, {
                            height: m.SHORT(o),
                            width: m.SHORT(o += 2)
                        };
                    }
                    p = m.SHORT(o += 2), o += p - 2;
                }
                return null;
            }

            function r() {
                k && i && m && (k.purge(), i.purge(), m.init(null), q = j = i = k = m = null);
            }
            var q, m, i, k, j, e;
            if (q = h, m = new a, m.init(q), 65496 !== m.SHORT(0)) {
                throw new b.ImageError(b.ImageError.WRONG_FORMAT);
            }
            i = new g(h), k = new c, e = !!k.init(i.get("app1")[0]), j = n.call(this), d.extend(this, {
                type: "image/jpeg",
                size: q.length,
                width: j && j.width || 0,
                height: j && j.height || 0,
                setExif: function(l, o) {
                    return e ? ("object" === d.typeOf(l) ? d.each(l, function(s, p) {
                        k.setExif(p, s);
                    }) : k.setExif(l, o), i.set("app1", k.getBinary()), void 0) : !1;
                },
                writeHeaders: function() {
                    return arguments.length ? i.restore(arguments[0]) : q = i.restore(q);
                },
                stripHeaders: function(l) {
                    return i.strip(l);
                },
                purge: function() {
                    r.call(this);
                }
            }), e && (this.meta = {
                tiff: k.TIFF(),
                exif: k.EXIF(),
                gps: k.GPS()
            });
        }
        return f;
    }), a7(aX, [aZ, aT, aE], function(c, b, d) {
        function a(h) {
            function e() {
                var l, i;
                return l = m.call(this, 8), "IHDR" == l.type ? (i = l.start, {
                    width: n.LONG(i),
                    height: n.LONG(i += 4)
                }) : null;
            }

            function f() {
                n && (n.init(null), p = j = k = g = n = null);
            }

            function m(s) {
                var o, u, l, q;
                return o = n.LONG(s), u = n.STRING(s += 4, 4), l = s += 4, q = n.LONG(s + o), {
                    length: o,
                    type: u,
                    start: l,
                    CRC: q
                };
            }
            var p, n, k, g, j;
            p = h, n = new d, n.init(p),
                function() {
                    var o = 0,
                        q = 0,
                        l = [35152, 20039, 3338, 6666];
                    for (q = 0; q < l.length; q++, o += 2) {
                        if (l[q] != n.SHORT(o)) {
                            throw new c.ImageError(c.ImageError.WRONG_FORMAT);
                        }
                    }
                }(), j = e.call(this), b.extend(this, {
                    type: "image/png",
                    size: p.length,
                    width: j.width,
                    height: j.height,
                    purge: function() {
                        f.call(this);
                    }
                }), f.call(this);
        }
        return a;
    }), a7(a4, [aT, aZ, aO, aX], function(c, b, d, a) {
        return function(f) {
            var g = [d, a],
                e;
            e = function() {
                for (var h = 0; h < g.length; h++) {
                    try {
                        return new g[h](f);
                    } catch (i) {}
                }
                throw new b.ImageError(b.ImageError.WRONG_FORMAT);
            }(), c.extend(this, {
                type: "",
                size: 0,
                width: 0,
                height: 0,
                setExif: function() {},
                writeHeaders: function(h) {
                    return h;
                },
                stripHeaders: function(h) {
                    return h;
                },
                purge: function() {}
            }), c.extend(this, e), this.purge = function() {
                e.purge(), e = null;
            };
        };
    }), a7(ac, [], function() {
        function b(M, I, C) {
            var F = M.naturalWidth,
                P = M.naturalHeight,
                B = C.width,
                z = C.height,
                O = C.x || 0,
                H = C.y || 0,
                N = I.getContext("2d");
            a(M) && (F /= 2, P /= 2);
            var L = 1024,
                D = document.createElement("canvas");
            D.width = D.height = L;
            for (var J = D.getContext("2d"), G = c(M, F, P), K = 0; P > K;) {
                for (var t = K + L > P ? P - K : L, k = 0; F > k;) {
                    var A = k + L > F ? F - k : L;
                    J.clearRect(0, 0, L, L), J.drawImage(M, -k, -K);
                    var Q = k * B / F + O << 0,
                        j = Math.ceil(A * B / F),
                        q = K * z / P / G + H << 0,
                        n = Math.ceil(t * z / P / G);
                    N.drawImage(D, 0, 0, A, t, Q, q, j, n), k += L;
                }
                K += L;
            }
            D = J = null;
        }

        function a(h) {
            var f = h.naturalWidth,
                j = h.naturalHeight;
            if (f * j > 1048576) {
                var d = document.createElement("canvas");
                d.width = d.height = 1;
                var g = d.getContext("2d");
                return g.drawImage(h, -f + 1, 0), 0 === g.getImageData(0, 0, 1, 1).data[3];
            }
            return !1;
        }

        function c(k, v, g) {
            var j = document.createElement("canvas");
            j.width = 1, j.height = g;
            var d = j.getContext("2d");
            d.drawImage(k, 0, 0);
            for (var f = d.getImageData(0, 0, 1, g).data, p = 0, w = g, q = g; q > p;) {
                var m = f[4 * (q - 1) + 3];
                0 === m ? w = q : p = q, q = w + p >> 1;
            }
            j = null;
            var h = q / g;
            return 0 === h ? 1 : h;
        }
        return {
            isSubsampled: a,
            renderTo: b
        };
    }), a7(a6, [aq, aT, aZ, a2, aP, a4, ac, a3, bd], function(h, m, f, g, b, d, k, p, l) {
        function j() {
            function t() {
                if (!F && !B) {
                    throw new f.ImageError(f.DOMException.INVALID_STATE_ERR);
                }
                return F || B;
            }

            function z(c) {
                return g.atob(c.substring(c.indexOf("base64,") + 7));
            }

            function n(v, c) {
                return "data:" + (c || "") + ";base64," + g.btoa(v);
            }

            function u(v) {
                var c = this;
                B = new Image, B.onerror = function() {
                    r.call(this), c.trigger("error", new f.ImageError(f.ImageError.WRONG_FORMAT));
                }, B.onload = function() {
                    c.trigger("load");
                }, B.src = /^data:[^;]*;base64,/.test(v) ? v : n(v, D.type);
            }

            function s(x, v) {
                var c = this,
                    w;
                return window.FileReader ? (w = new FileReader, w.onload = function() {
                    v(this.result);
                }, w.onerror = function() {
                    c.trigger("error", new f.FileException(f.FileException.NOT_READABLE_ERR));
                }, w.readAsDataURL(x), void 0) : v(x.getAsDataURL());
            }

            function a(E, J, e, x) {
                var P = this,
                    S, R, N, I, M, L, w, K, Q;
                if (A = x, Q = this.meta && this.meta.tiff && this.meta.tiff.Orientation || 1, -1 !== m.inArray(Q, [5, 6, 7, 8])) {
                    var O = E;
                    E = J, J = O;
                }
                return L = t(), N = e ? Math.max : Math.min, R = N(E / L.width, J / L.height), R > 1 && (!e || x) ? (this.trigger("Resize"), void 0) : (w = Math.round(L.width * R), K = Math.round(L.height * R), F || (F = document.createElement("canvas")), S = F.getContext("2d"), e ? (F.width = E, F.height = J) : (F.width = w, F.height = K), I = w > F.width ? Math.round((w - F.width) / 2) : 0, M = K > F.height ? Math.round((K - F.height) / 2) : 0, A || i(F.width, F.height, Q), q.call(this, L, F, -I, -M, w, K), this.width = F.width, this.height = F.height, C = !0, P.trigger("Resize"), void 0);
            }

            function q(y, v, I, c, x, E) {
                if ("iOS" === l.OS) {
                    k.renderTo(y, v, {
                        width: x,
                        height: E,
                        x: I,
                        y: c
                    });
                } else {
                    var w = v.getContext("2d");
                    w.drawImage(y, I, c, x, E);
                }
            }

            function i(w, v, x) {
                switch (x) {
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        F.width = v, F.height = w;
                        break;
                    default:
                        F.width = w, F.height = v;
                }
                var c = F.getContext("2d");
                switch (x) {
                    case 2:
                        c.translate(w, 0), c.scale(-1, 1);
                        break;
                    case 3:
                        c.translate(w, v), c.rotate(Math.PI);
                        break;
                    case 4:
                        c.translate(0, v), c.scale(1, -1);
                        break;
                    case 5:
                        c.rotate(0.5 * Math.PI), c.scale(1, -1);
                        break;
                    case 6:
                        c.rotate(0.5 * Math.PI), c.translate(0, -v);
                        break;
                    case 7:
                        c.rotate(0.5 * Math.PI), c.translate(w, -v), c.scale(-1, 1);
                        break;
                    case 8:
                        c.rotate(-0.5 * Math.PI), c.translate(-w, 0);
                }
            }

            function r() {
                H && (H.purge(), H = null), o = B = F = D = null, C = !1;
            }
            var G = this,
                B, H, F, o, D, C = !1,
                A = !0;
            m.extend(this, {
                loadFromBlob: function(x) {
                    var v = this,
                        c = v.getRuntime(),
                        w = arguments.length > 1 ? arguments[1] : !0;
                    if (!c.can("access_binary")) {
                        throw new f.RuntimeError(f.RuntimeError.NOT_SUPPORTED_ERR);
                    }
                    return D = x, x.isDetached() ? (o = x.getSource(), u.call(this, o), void 0) : (s.call(this, x.getSource(), function(y) {
                        w && (o = z(y)), u.call(v, y);
                    }), void 0);
                },
                loadFromImage: function(v, c) {
                    this.meta = v.meta, D = new b(null, {
                        name: v.name,
                        size: v.size,
                        type: v.type
                    }), u.call(this, c ? o = v.getAsBinaryString() : v.getAsDataURL());
                },
                getInfo: function() {
                    var c = this.getRuntime(),
                        e;
                    return !H && o && c.can("access_image_binary") && (H = new d(o)), e = {
                        width: t().width || 0,
                        height: t().height || 0,
                        type: D.type || p.getFileMime(D.name),
                        size: o && o.length || D.size || 0,
                        name: D.name || "",
                        meta: H && H.meta || this.meta || {}
                    };
                },
                downsize: function() {
                    a.apply(this, arguments);
                },
                getAsCanvas: function() {
                    return F && (F.id = this.uid + "_canvas"), F;
                },
                getAsBlob: function(v, c) {
                    return v !== this.type && a.call(this, this.width, this.height, !1), new b(null, {
                        type: v,
                        data: G.getAsBinaryString.call(this, v, c)
                    });
                },
                getAsDataURL: function(v) {
                    var c = arguments[1] || 90;
                    if (!C) {
                        return B.src;
                    }
                    if ("image/jpeg" !== v) {
                        return F.toDataURL("image/png");
                    }
                    try {
                        return F.toDataURL("image/jpeg", c / 100);
                    } catch (w) {
                        return F.toDataURL("image/jpeg");
                    }
                },
                getAsBinaryString: function(w, v) {
                    if (!C) {
                        return o || (o = z(G.getAsDataURL(w, v))), o;
                    }
                    if ("image/jpeg" !== w) {
                        o = z(G.getAsDataURL(w, v));
                    } else {
                        var x;
                        v || (v = 90);
                        try {
                            x = F.toDataURL("image/jpeg", v / 100);
                        } catch (c) {
                            x = F.toDataURL("image/jpeg");
                        }
                        o = z(x), H && (o = H.stripHeaders(o), A && (H.meta && H.meta.exif && H.setExif({
                            PixelXDimension: this.width,
                            PixelYDimension: this.height
                        }), o = H.writeHeaders(o)), H.purge(), H = null);
                    }
                    return C = !1, o;
                },
                destroy: function() {
                    G = null, r.call(this), this.getRuntime().getShim().removeInstance(this.uid);
                }
            });
        }
        return h.Image = j;
    }), a7(ae, [aT, bd, bb, aZ, a9], function(g, k, d, f, b) {
        function c() {
            var i;
            try {
                i = navigator.plugins["Shockwave Flash"], i = i.description;
            } catch (a) {
                try {
                    i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");
                } catch (m) {
                    i = "0.0";
                }
            }
            return i = i.match(/\d+/g), parseFloat(i[0] + "." + i[1]);
        }

        function h(i) {
            var m = this,
                e;
            i = g.extend({
                swf_url: k.swf_url
            }, i), b.call(this, i, l, {
                access_binary: function(a) {
                    return a && "browser" === m.mode;
                },
                access_image_binary: function(a) {
                    return a && "browser" === m.mode;
                },
                display_media: b.capTrue,
                do_cors: b.capTrue,
                drag_and_drop: !1,
                report_upload_progress: function() {
                    return "client" === m.mode;
                },
                resize_image: b.capTrue,
                return_response_headers: !1,
                return_response_type: function(a) {
                    return !g.arrayDiff(a, ["", "text", "json", "document"]) || "browser" === m.mode;
                },
                return_status_code: function(a) {
                    return "browser" === m.mode || !g.arrayDiff(a, [200, 404]);
                },
                select_file: b.capTrue,
                select_multiple: b.capTrue,
                send_binary_string: function(a) {
                    return a && "browser" === m.mode;
                },
                send_browser_cookies: function(a) {
                    return a && "browser" === m.mode;
                },
                send_custom_headers: function(a) {
                    return a && "browser" === m.mode;
                },
                send_multipart: b.capTrue,
                slice_blob: b.capTrue,
                stream_upload: function(a) {
                    return a && "browser" === m.mode;
                },
                summon_file_dialog: !1,
                upload_filesize: function(a) {
                    return g.parseSizeStr(a) <= 2097152 || "client" === m.mode;
                },
                use_http_method: function(a) {
                    return !g.arrayDiff(a, ["GET", "POST"]);
                }
            }, {
                access_binary: function(a) {
                    return a ? "browser" : "client";
                },
                access_image_binary: function(a) {
                    return a ? "browser" : "client";
                },
                report_upload_progress: function(a) {
                    return a ? "browser" : "client";
                },
                return_response_type: function(a) {
                    return g.arrayDiff(a, ["", "text", "json", "document"]) ? "browser" : ["client", "browser"];
                },
                return_status_code: function(a) {
                    return g.arrayDiff(a, [200, 404]) ? "browser" : ["client", "browser"];
                },
                send_binary_string: function(a) {
                    return a ? "browser" : "client";
                },
                send_browser_cookies: function(a) {
                    return a ? "browser" : "client";
                },
                send_custom_headers: function(a) {
                    return a ? "browser" : "client";
                },
                stream_upload: function(a) {
                    return a ? "client" : "browser";
                },
                upload_filesize: function(a) {
                    return g.parseSizeStr(a) >= 2097152 ? "client" : "browser";
                }
            }, "client"), c() < 10 && (this.mode = !1), g.extend(this, {
                getShim: function() {
                    return d.get(this.uid);
                },
                shimExec: function(o, a) {
                    var p = [].slice.call(arguments, 2);
                    return m.getShim().exec(this.uid, o, a, p);
                },
                init: function() {
                    var q, a, p;
                    p = this.getShimContainer(), g.extend(p.style, {
                        position: "absolute",
                        top: "-8px",
                        left: "-8px",
                        width: "9px",
                        height: "9px",
                        overflow: "hidden"
                    }), q = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + i.swf_url + '" ', "IE" === k.browser && (q += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '), q += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + i.swf_url + '" />' + '<param name="flashvars" value="uid=' + escape(this.uid) + "&target=" + k.global_event_dispatcher + '" />' + '<param name="wmode" value="transparent" />' + '<param name="allowscriptaccess" value="always" />' + "</object>", "IE" === k.browser ? (a = document.createElement("div"), p.appendChild(a), a.outerHTML = q, a = p = null) : p.innerHTML = q, e = setTimeout(function() {
                        m && !m.initialized && m.trigger("Error", new f.RuntimeError(f.RuntimeError.NOT_INIT_ERR));
                    }, 5000);
                },
                destroy: function(a) {
                    return function() {
                        a.call(m), clearTimeout(e), i = e = a = m = null;
                    };
                }(this.destroy)
            }, j);
        }
        var l = "flash",
            j = {};
        return b.addConstructor(l, h), j;
    }), a7(ad, [ae, aP], function(b, a) {
        var c = {
            slice: function(g, j, d, f) {
                var h = this.getRuntime();
                return 0 > j ? j = Math.max(g.size + j, 0) : j > 0 && (j = Math.min(j, g.size)), 0 > d ? d = Math.max(g.size + d, 0) : d > 0 && (d = Math.min(d, g.size)), g = h.shimExec.call(this, "Blob", "slice", j, d, f || ""), g && (g = new a(h.uid, g)), g;
            }
        };
        return b.Blob = c;
    }), a7(ab, [ae], function(b) {
        var a = {
            init: function(c) {
                this.getRuntime().shimExec.call(this, "FileInput", "init", {
                    name: c.name,
                    accept: c.accept,
                    multiple: c.multiple
                }), this.trigger("ready");
            }
        };
        return b.FileInput = a;
    }), a7(aN, [ae, a2], function(d, b) {
        function f(g, h) {
            switch (h) {
                case "readAsText":
                    return b.atob(g, "utf8");
                case "readAsBinaryString":
                    return b.atob(g);
                case "readAsDataURL":
                    return g;
            }
            return null;
        }
        var a = "",
            c = {
                read: function(i, g) {
                    var h = this,
                        j = h.getRuntime();
                    return "readAsDataURL" === i && (a = "data:" + (g.type || "") + ";base64,"), h.bind("Progress", function(e, k) {
                        k && (a += f(k, i));
                    }), j.shimExec.call(this, "FileReader", "readAsBase64", g.uid);
                },
                getResult: function() {
                    return a;
                },
                destroy: function() {
                    a = null;
                }
            };
        return d.FileReader = c;
    }), a7(ar, [ae, a2], function(c, b) {
        function d(f, g) {
            switch (g) {
                case "readAsText":
                    return b.atob(f, "utf8");
                case "readAsBinaryString":
                    return b.atob(f);
                case "readAsDataURL":
                    return f;
            }
            return null;
        }
        var a = {
            read: function(j, g) {
                var f, h = this.getRuntime();
                return (f = h.shimExec.call(this, "FileReaderSync", "readAsBase64", g.uid)) ? ("readAsDataURL" === j && (f = "data:" + (g.type || "") + ";base64," + f), d(f, j, g.type)) : null;
            }
        };
        return c.FileReaderSync = a;
    }), a7(aa, [ae, aT, aP, aB, aF, ag, an, aw], function(g, k, d, f, b, c, h, l) {
        var j = {
            send: function(p, n) {
                function a() {
                    p.transport = m.mode, m.shimExec.call(t, "XMLHttpRequest", "send", p, n);
                }

                function w(r, i) {
                    m.shimExec.call(t, "XMLHttpRequest", "appendBlob", r, i.uid), n = null, a();
                }

                function v(r, i) {
                    var s = new h;
                    s.bind("TransportingComplete", function() {
                        i(this.result);
                    }), s.transport(r.getSource(), r.type, {
                        ruid: m.uid
                    });
                }
                var t = this,
                    m = t.getRuntime();
                if (k.isEmptyObj(p.headers) || k.each(p.headers, function(r, i) {
                        m.shimExec.call(t, "XMLHttpRequest", "setRequestHeader", i, r.toString());
                    }), n instanceof c) {
                    var q;
                    if (n.each(function(r, i) {
                            r instanceof d ? q = i : m.shimExec.call(t, "XMLHttpRequest", "append", i, r);
                        }), n.hasBlob()) {
                        var o = n.getBlob();
                        o.isDetached() ? v(o, function(i) {
                            o.destroy(), w(q, i);
                        }) : w(q, o);
                    } else {
                        n = null, a();
                    }
                } else {
                    n instanceof d ? n.isDetached() ? v(n, function(i) {
                        n.destroy(), n = i.uid, a();
                    }) : (n = n.uid, a()) : a();
                }
            },
            getResponse: function(p) {
                var r, q, i = this.getRuntime();
                if (q = i.shimExec.call(this, "XMLHttpRequest", "getResponseAsBlob")) {
                    if (q = new f(i.uid, q), "blob" === p) {
                        return q;
                    }
                    if (~k.inArray(p, ["", "text"])) {
                        return r = new b, r.readAsText(q);
                    }
                    if ("arraybuffer" === p) {} else {
                        if ("json" === p) {
                            r = new b;
                            try {
                                return l(r.readAsText(q));
                            } catch (m) {
                                return null;
                            }
                        }
                    }
                }
                return null;
            },
            abort: function(i) {
                var a = this.getRuntime();
                a.shimExec.call(this, "XMLHttpRequest", "abort"), this.dispatchEvent("readystatechange"), this.dispatchEvent("abort");
            }
        };
        return g.XMLHttpRequest = j;
    }), a7(au, [ae, aP], function(b, a) {
        var c = {
            getAsBlob: function(f) {
                var g = this.getRuntime(),
                    d = g.shimExec.call(this, "Transporter", "getAsBlob", f);
                return d ? new a(g.uid, d) : null;
            }
        };
        return b.Transporter = c;
    }), a7(al, [ae, aT, an, aP, aF], function(d, b, g, a, c) {
        var f = {
            loadFromBlob: function(l) {
                function j(i) {
                    k.shimExec.call(h, "Image", "loadFromBlob", i.uid), h = k = null;
                }
                var h = this,
                    k = h.getRuntime();
                if (l.isDetached()) {
                    var m = new g;
                    m.bind("TransportingComplete", function() {
                        j(m.result.getSource());
                    }), m.transport(l.getSource(), l.type, {
                        ruid: k.uid
                    });
                } else {
                    j(l.getSource());
                }
            },
            loadFromImage: function(i) {
                var h = this.getRuntime();
                return h.shimExec.call(this, "Image", "loadFromImage", i.uid);
            },
            getAsBlob: function(j, h) {
                var k = this.getRuntime(),
                    i = k.shimExec.call(this, "Image", "getAsBlob", j, h);
                return i ? new a(k.uid, i) : null;
            },
            getAsDataURL: function() {
                var i = this.getRuntime(),
                    h = i.Image.getAsBlob.apply(this, arguments),
                    j;
                return h ? (j = new c, j.readAsDataURL(h)) : null;
            }
        };
        return d.Image = f;
    }), a7(aY, [aT, bd, bb, aZ, a9], function(g, k, d, f, b) {
        function c(x) {
            var C = !1,
                q = null,
                w, m, p, A, D, B = 0;
            try {
                try {
                    q = new ActiveXObject("AgControl.AgControl"), q.IsVersionSupported(x) && (C = !0), q = null;
                } catch (z) {
                    var v = navigator.plugins["Silverlight Plug-In"];
                    if (v) {
                        for (w = v.description, "1.0.30226.2" === w && (w = "2.0.30226.2"), m = w.split("."); m.length > 3;) {
                            m.pop();
                        }
                        for (; m.length < 4;) {
                            m.push(0);
                        }
                        for (p = x.split("."); p.length > 4;) {
                            p.pop();
                        }
                        do {
                            A = parseInt(p[B], 10), D = parseInt(m[B], 10), B++;
                        } while (B < p.length && A === D);
                        D >= A && !isNaN(A) && (C = !0);
                    }
                }
            } catch (y) {
                C = !1;
            }
            return C;
        }

        function h(i) {
            var m = this,
                e;
            i = g.extend({
                xap_url: k.xap_url
            }, i), b.call(this, i, l, {
                access_binary: b.capTrue,
                access_image_binary: b.capTrue,
                display_media: b.capTrue,
                do_cors: b.capTrue,
                drag_and_drop: !1,
                report_upload_progress: b.capTrue,
                resize_image: b.capTrue,
                return_response_headers: function(a) {
                    return a && "client" === m.mode;
                },
                return_response_type: b.capTrue,
                return_status_code: function(a) {
                    return "client" === m.mode || !g.arrayDiff(a, [200, 404]);
                },
                select_file: b.capTrue,
                select_multiple: b.capTrue,
                send_binary_string: b.capTrue,
                send_browser_cookies: function(a) {
                    return a && "browser" === m.mode;
                },
                send_custom_headers: function(a) {
                    return a && "client" === m.mode;
                },
                send_multipart: b.capTrue,
                slice_blob: b.capTrue,
                stream_upload: !0,
                summon_file_dialog: !1,
                upload_filesize: b.capTrue,
                use_http_method: function(a) {
                    return "client" === m.mode || !g.arrayDiff(a, ["GET", "POST"]);
                }
            }, {
                return_response_headers: function(a) {
                    return a ? "client" : "browser";
                },
                return_status_code: function(a) {
                    return g.arrayDiff(a, [200, 404]) ? "client" : ["client", "browser"];
                },
                send_browser_cookies: function(a) {
                    return a ? "browser" : "client";
                },
                send_custom_headers: function(a) {
                    return a ? "client" : "browser";
                },
                use_http_method: function(a) {
                    return g.arrayDiff(a, ["GET", "POST"]) ? "client" : ["client", "browser"];
                }
            }), c("2.0.31005.0") && "Opera" !== k.browser || (this.mode = !1), g.extend(this, {
                getShim: function() {
                    return d.get(this.uid).content.Moxie;
                },
                shimExec: function(o, a) {
                    var p = [].slice.call(arguments, 2);
                    return m.getShim().exec(this.uid, o, a, p);
                },
                init: function() {
                    var a;
                    a = this.getShimContainer(), a.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;">' + '<param name="source" value="' + i.xap_url + '"/>' + '<param name="background" value="Transparent"/>' + '<param name="windowless" value="true"/>' + '<param name="enablehtmlaccess" value="true"/>' + '<param name="initParams" value="uid=' + this.uid + ",target=" + k.global_event_dispatcher + '"/>' + "</object>", e = setTimeout(function() {
                        m && !m.initialized && m.trigger("Error", new f.RuntimeError(f.RuntimeError.NOT_INIT_ERR));
                    }, "Windows" !== k.OS ? 10000 : 5000);
                },
                destroy: function(a) {
                    return function() {
                        a.call(m), clearTimeout(e), i = e = a = m = null;
                    };
                }(this.destroy)
            }, j);
        }
        var l = "silverlight",
            j = {};
        return b.addConstructor(l, h), j;
    }), a7(ba, [aY, aT, ad], function(b, a, c) {
        return b.Blob = a.extend({}, c);
    }), a7(a5, [aY], function(b) {
        var a = {
            init: function(d) {
                function c(g) {
                    for (var f = "", h = 0; h < g.length; h++) {
                        f += ("" !== f ? "|" : "") + g[h].title + " | *." + g[h].extensions.replace(/,/g, ";*.");
                    }
                    return f;
                }
                this.getRuntime().shimExec.call(this, "FileInput", "init", c(d.accept), d.name, d.multiple), this.trigger("ready");
            }
        };
        return b.FileInput = a;
    }), a7(aI, [aY, bb, ap], function(c, b, d) {
        var a = {
            init: function() {
                var h = this,
                    f = h.getRuntime(),
                    g;
                return g = f.getShimContainer(), d.addEvent(g, "dragover", function(i) {
                    i.preventDefault(), i.stopPropagation(), i.dataTransfer.dropEffect = "copy";
                }, h.uid), d.addEvent(g, "dragenter", function(i) {
                    i.preventDefault();
                    var j = b.get(f.uid).dragEnter(i);
                    j && i.stopPropagation();
                }, h.uid), d.addEvent(g, "drop", function(i) {
                    i.preventDefault();
                    var j = b.get(f.uid).dragDrop(i);
                    j && i.stopPropagation();
                }, h.uid), f.shimExec.call(this, "FileDrop", "init");
            }
        };
        return c.FileDrop = a;
    }), a7(aL, [aY, aT, aN], function(b, a, c) {
        return b.FileReader = a.extend({}, c);
    }), a7(aK, [aY, aT, ar], function(b, a, c) {
        return b.FileReaderSync = a.extend({}, c);
    }), a7(ah, [aY, aT, aa], function(b, a, c) {
        return b.XMLHttpRequest = a.extend({}, c);
    }), a7(ay, [aY, aT, au], function(b, a, c) {
        return b.Transporter = a.extend({}, c);
    }), a7(aM, [aY, aT, al], function(b, a, c) {
        return b.Image = a.extend({}, c);
    }), a7(aG, [aT, aZ, a9, bd], function(g, d, j, c) {
        function f(e) {
            var k = this,
                i = j.capTest,
                a = j.capTrue;
            j.call(this, e, h, {
                access_binary: i(window.FileReader || window.File && File.getAsDataURL),
                access_image_binary: !1,
                display_media: i(b.Image && (c.can("create_canvas") || c.can("use_data_uri_over32kb"))),
                do_cors: !1,
                drag_and_drop: !1,
                filter_by_extension: i(function() {
                    return "Chrome" === c.browser && c.version >= 28 || "IE" === c.browser && c.version >= 10;
                }()),
                resize_image: function() {
                    return b.Image && k.can("access_binary") && c.can("create_canvas");
                },
                report_upload_progress: !1,
                return_response_headers: !1,
                return_response_type: function(l) {
                    return !!~g.inArray(l, ["json", "text", "document", ""]);
                },
                return_status_code: function(l) {
                    return !g.arrayDiff(l, [200, 404]);
                },
                select_file: function() {
                    return c.can("use_fileinput");
                },
                select_multiple: !1,
                send_binary_string: !1,
                send_custom_headers: !1,
                send_multipart: !0,
                slice_blob: !1,
                stream_upload: function() {
                    return k.can("select_file");
                },
                summon_file_dialog: i(function() {
                    return "Firefox" === c.browser && c.version >= 4 || "Opera" === c.browser && c.version >= 12 || "IE" === c.browser && c.version >= 10 || !!~g.inArray(c.browser, ["Chrome", "Safari"]);
                }()),
                upload_filesize: a,
                use_http_method: function(l) {
                    return !g.arrayDiff(l, ["GET", "POST"]);
                }
            }), g.extend(this, {
                init: function() {
                    this.trigger("Init");
                },
                destroy: function(l) {
                    return function() {
                        l.call(k), l = k = null;
                    };
                }(this.destroy)
            }), g.extend(this.getShim(), b);
        }
        var h = "html4",
            b = {};
        return j.addConstructor(h, f), b;
    }), a7(aJ, [aG, aT, bb, ap, a3, bd], function(g, d, j, c, f, h) {
        function b() {
            function m() {
                var s = this,
                    e = s.getRuntime(),
                    v, t, u, o, a, q;
                q = d.guid("uid_"), v = e.getShimContainer(), i && (u = j.get(i + "_form"), u && d.extend(u.style, {
                    top: "100%"
                })), o = document.createElement("form"), o.setAttribute("id", q + "_form"), o.setAttribute("method", "post"), o.setAttribute("enctype", "multipart/form-data"), o.setAttribute("encoding", "multipart/form-data"), d.extend(o.style, {
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }), a = document.createElement("input"), a.setAttribute("id", q), a.setAttribute("type", "file"), a.setAttribute("name", "Filedata"), a.setAttribute("accept", k.join(",")), d.extend(a.style, {
                    fontSize: "999px",
                    opacity: 0
                }), o.appendChild(a), v.appendChild(o), d.extend(a.style, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }), "IE" === h.browser && h.version < 10 && d.extend(a.style, {
                    filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)"
                }), a.onchange = function() {
                    var p;
                    this.value && (p = this.files ? this.files[0] : {
                        name: this.value
                    }, l = [p], this.onchange = function() {}, m.call(s), s.bind("change", function() {
                        var x = j.get(q),
                            w = j.get(q + "_form"),
                            r;
                        s.files.length && x && w && (r = s.files[0], x.setAttribute("id", r.uid), w.setAttribute("id", r.uid + "_form"), w.setAttribute("target", r.uid + "_iframe")), x = w = null;
                    }, 998), a = o = null, s.trigger("change"));
                }, e.can("summon_file_dialog") && (t = j.get(n.browse_button), c.removeEvent(t, "click", s.uid), c.addEvent(t, "click", function(p) {
                    a && !a.disabled && a.click(), p.preventDefault();
                }, s.uid)), i = q, v = u = t = null, s.trigger({
                    type: "ready",
                    async: !0
                });
            }
            var i, l = [],
                k = [],
                n;
            d.extend(this, {
                init: function(p) {
                    var r = this,
                        e = r.getRuntime(),
                        q;
                    n = p, k = p.accept.mimes || f.extList2mimes(p.accept, e.can("filter_by_extension")), q = e.getShimContainer(),
                        function() {
                            var s, o, a;
                            s = j.get(p.browse_button), e.can("summon_file_dialog") && ("static" === j.getStyle(s, "position") && (s.style.position = "relative"), o = parseInt(j.getStyle(s, "z-index"), 10) || 1, s.style.zIndex = o, q.style.zIndex = o - 1), a = e.can("summon_file_dialog") ? s : q, c.addEvent(a, "mouseover", function() {
                                r.trigger("mouseenter");
                            }, r.uid), c.addEvent(a, "mouseout", function() {
                                r.trigger("mouseleave");
                            }, r.uid), c.addEvent(a, "mousedown", function() {
                                r.trigger("mousedown");
                            }, r.uid), c.addEvent(j.get(p.container), "mouseup", function() {
                                r.trigger("mouseup");
                            }, r.uid), s = null;
                        }(), m.call(this), q = null;
                },
                getFiles: function() {
                    return l;
                },
                disable: function(o) {
                    var a;
                    (a = j.get(i)) && (a.disabled = !!o);
                },
                destroy: function() {
                    var o = this.getRuntime(),
                        a = o.getShimContainer();
                    c.removeAllEvents(a, this.uid), c.removeAllEvents(n && j.get(n.container), this.uid), c.removeAllEvents(n && j.get(n.browse_button), this.uid), a && (a.innerHTML = ""), i = l = k = n = null;
                }
            });
        }
        return g.FileInput = b;
    }), a7(ak, [aG, am], function(b, a) {
        return b.FileReader = a;
    }), a7(aH, [aG, aT, bb, bf, aZ, ap, aP, ag, aw], function(h, m, f, g, b, d, k, p, l) {
        function j() {
            function i(z) {
                var w = this,
                    v, y, c, x, q = !1;
                if (n) {
                    if (v = n.id.replace(/_iframe$/, ""), y = f.get(v + "_form")) {
                        for (c = y.getElementsByTagName("input"), x = c.length; x--;) {
                            switch (c[x].getAttribute("type")) {
                                case "hidden":
                                    c[x].parentNode.removeChild(c[x]);
                                    break;
                                case "file":
                                    q = !0;
                            }
                        }
                        c = [], q || y.parentNode.removeChild(y), y = null;
                    }
                    setTimeout(function() {
                        d.removeEvent(n, "load", w.uid), n.parentNode && n.parentNode.removeChild(n);
                        var e = w.getRuntime().getShimContainer();
                        e.children.length || e.parentNode.removeChild(e), e = n = null, z();
                    }, 1);
                }
            }
            var o, a, n;
            m.extend(this, {
                send: function(x, s) {
                    function c() {
                        var v = e.getShimContainer() || document.body,
                            u = document.createElement("div");
                        u.innerHTML = '<iframe id="' + r + '_iframe" name="' + r + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>', n = u.firstChild, v.appendChild(n), d.addEvent(n, "load", function() {
                            var A;
                            try {
                                A = n.contentWindow.document || n.contentDocument || window.frames[n.id].document, /^4\d{2}\s/.test(A.title) && A.getElementsByTagName("address").length ? o = A.title.replace(/^(\d+).*$/, "$1") : (o = 200, a = m.trim(A.body.innerHTML), q.trigger({
                                    type: "progress",
                                    loaded: a.length,
                                    total: a.length
                                }), z && q.trigger({
                                    type: "uploadprogress",
                                    loaded: z.size || 1025,
                                    total: z.size || 1025
                                }));
                            } catch (y) {
                                if (!g.hasSameOrigin(x.url)) {
                                    return i.call(q, function() {
                                        q.trigger("error");
                                    }), void 0;
                                }
                                o = 404;
                            }
                            i.call(q, function() {
                                q.trigger("load");
                            });
                        }, q.uid);
                    }
                    var q = this,
                        e = q.getRuntime(),
                        r, w, t, z;
                    if (o = a = null, s instanceof p && s.hasBlob()) {
                        if (z = s.getBlob(), r = z.uid, t = f.get(r), w = f.get(r + "_form"), !w) {
                            throw new b.DOMException(b.DOMException.NOT_FOUND_ERR);
                        }
                    } else {
                        r = m.guid("uid_"), w = document.createElement("form"), w.setAttribute("id", r + "_form"), w.setAttribute("method", x.method), w.setAttribute("enctype", "multipart/form-data"), w.setAttribute("encoding", "multipart/form-data"), w.setAttribute("target", r + "_iframe"), e.getShimContainer().appendChild(w);
                    }
                    s instanceof p && s.each(function(v, y) {
                        if (v instanceof k) {
                            t && t.setAttribute("name", y);
                        } else {
                            var u = document.createElement("input");
                            m.extend(u, {
                                type: "hidden",
                                name: y,
                                value: v
                            }), w.appendChild(u);
                        }
                    }), w.setAttribute("action", x.url), c(), w.submit(), q.trigger("loadstart");
                },
                getStatus: function() {
                    return o;
                },
                getResponse: function(c) {
                    if ("json" === c && "string" === m.typeOf(a)) {
                        try {
                            return l(a.replace(/^\s*<pre[^>]*>/, "").replace(/<\/pre>\s*$/, ""));
                        } catch (q) {
                            return null;
                        }
                    }
                    return a;
                },
                abort: function() {
                    var c = this;
                    n && n.contentWindow && (n.contentWindow.stop ? n.contentWindow.stop() : n.contentWindow.document.execCommand ? n.contentWindow.document.execCommand("Stop") : n.src = "about:blank"), i.call(this, function() {
                        c.dispatchEvent("abort");
                    });
                }
            });
        }
        return h.XMLHttpRequest = j;
    }), a7(av, [aG, a6], function(b, a) {
        return b.Image = a;
    }), bg([aT, be, a3, bd, bb, aZ, a8, a2, a9, aS, aP, aB, bh, aj, aR, aQ, bf, aF, ag, ai, an, aw, aC, ap]);
}(this);
(function() {
    var b = {},
        a = moxie.core.utils.Basic.inArray;
    return function c(f) {
        var d, e;
        for (d in f) {
            e = typeof f[d], e === "object" && !~a(d, ["Exceptions", "Env", "Mime"]) ? c(f[d]) : e === "function" && (b[d] = f[d]);
        }
    }(window.moxie), b.Env = window.moxie.core.utils.Env, b.Mime = window.moxie.core.utils.Mime, b.Exceptions = window.moxie.core.Exceptions, window.mOxie = b, window.o || (window.o = b), b;
})();
(function(f, b, h) {
    function c(k) {
        function j(p, n, o) {
            var m = {
                chunks: "slice_blob",
                resize: "send_binary_string",
                jpgresize: "send_binary_string",
                pngresize: "send_binary_string",
                progress: "report_upload_progress",
                multi_selection: "select_multiple",
                max_file_size: "access_binary",
                dragdrop: "drag_and_drop",
                drop_element: "drag_and_drop",
                headers: "send_custom_headers",
                canSendBinary: "send_binary",
                triggerDialog: "summon_file_dialog"
            };
            m[p] ? l[m[p]] = n : o || (l[p] = n);
        }
        var i = k.required_features,
            l = {};
        return typeof i == "string" ? g.each(i.split(/\s*,\s*/), function(m) {
            j(m, !0);
        }) : typeof i == "object" ? g.each(i, function(n, m) {
            j(m, n);
        }) : i === !0 && (k.multipart || (l.send_binary_string = !0), k.chunk_size > 0 && (l.slice_blob = !0), g.each(k, function(n, m) {
            j(m, !!n, !0);
        })), l;
    }
    var d = f.setTimeout,
        a = {},
        g = {
            VERSION: "2.0.0beta",
            STOPPED: 1,
            STARTED: 2,
            QUEUED: 1,
            UPLOADING: 2,
            FAILED: 4,
            DONE: 5,
            GENERIC_ERROR: -100,
            HTTP_ERROR: -200,
            IO_ERROR: -300,
            SECURITY_ERROR: -400,
            INIT_ERROR: -500,
            FILE_SIZE_ERROR: -600,
            FILE_EXTENSION_ERROR: -601,
            FILE_DUPLICATE_ERROR: -602,
            IMAGE_FORMAT_ERROR: -700,
            IMAGE_MEMORY_ERROR: -701,
            IMAGE_DIMENSIONS_ERROR: -702,
            mimeTypes: b.mimes,
            ua: b.ua,
            typeOf: b.typeOf,
            extend: b.extend,
            guid: b.guid,
            each: b.each,
            getPos: b.getPos,
            getSize: b.getSize,
            xmlEncode: function(j) {
                var i = {
                        "<": "lt",
                        ">": "gt",
                        "&": "amp",
                        '"': "quot",
                        "'": "#39"
                    },
                    k = /[<>&\"\']/g;
                return j ? ("" + j).replace(k, function(l) {
                    return i[l] ? "&" + i[l] + ";" : l;
                }) : j;
            },
            toArray: b.toArray,
            inArray: b.inArray,
            addI18n: b.addI18n,
            translate: b.translate,
            isEmptyObj: b.isEmptyObj,
            hasClass: b.hasClass,
            addClass: b.addClass,
            removeClass: b.removeClass,
            getStyle: b.getStyle,
            addEvent: b.addEvent,
            removeEvent: b.removeEvent,
            removeAllEvents: b.removeAllEvents,
            cleanName: function(j) {
                var i, k;
                k = [/[\300-\306]/g, "A", /[\340-\346]/g, "a", /\307/g, "C", /\347/g, "c", /[\310-\313]/g, "E", /[\350-\353]/g, "e", /[\314-\317]/g, "I", /[\354-\357]/g, "i", /\321/g, "N", /\361/g, "n", /[\322-\330]/g, "O", /[\362-\370]/g, "o", /[\331-\334]/g, "U", /[\371-\374]/g, "u"];
                for (i = 0; i < k.length; i += 2) {
                    j = j.replace(k[i], k[i + 1]);
                }
                return j = j.replace(/\s+/g, "_"), j = j.replace(/[^a-z0-9_\-\.]+/gi, ""), j;
            },
            buildUrl: function(j, i) {
                var k = "";
                return g.each(i, function(m, l) {
                    k += (k ? "&" : "") + encodeURIComponent(l) + "=" + encodeURIComponent(m);
                }), k && (j += (j.indexOf("?") > 0 ? "&" : "?") + k), j;
            },
            formatSize: function(i) {
                return i === h || /\D/.test(i) ? g.translate("N/A") : i > 1099511627776 ? Math.round(i / 1099511627776, 1) + " " + g.translate("tb") : i > 1073741824 ? Math.round(i / 1073741824, 1) + " " + g.translate("gb") : i > 1048576 ? Math.round(i / 1048576, 1) + " " + g.translate("mb") : i > 1024 ? Math.round(i / 1024, 1) + " " + g.translate("kb") : i + " " + g.translate("b");
            },
            parseSize: b.parseSizeStr,
            predictRuntime: function(k, i) {
                var l, j;
                return i && (k.runtimes = i), l = new g.Uploader(k), j = l.runtime, l.destroy(), j;
            },
            addFileFilter: function(j, i) {
                a[j] = i;
            }
        };
    g.addFileFilter("mime_types", function() {
        function k(m) {
            var l = [];
            return g.each(m, function(n) {
                g.each(n.extensions.split(/,/), function(o) {
                    /^\s*\*\s*$/.test(o) ? l.push("\\.*") : l.push("\\." + o.replace(new RegExp("[" + "/^$.*+?|()[]{}\\".replace(/./g, "\\$&") + "]", "g"), "\\$&"));
                });
            }), new RegExp("(" + l.join("|") + ")$", "i");
        }
        var j, i;
        return function(m, e, l) {
            if (!i || m != j) {
                i = k(m), j = [].slice.call(m);
            }
            i.test(e.name) ? l(!0) : (this.trigger("Error", {
                code: g.FILE_EXTENSION_ERROR,
                message: g.translate("File extension error."),
                file: e
            }), l(!1));
        };
    }()), g.addFileFilter("max_file_size", function(k, i, l) {
        var j;
        i.size !== j && k && i.size > k ? (this.trigger("Error", {
            code: g.FILE_SIZE_ERROR,
            message: g.translate("File size error."),
            file: i
        }), l(!1)) : l(!0);
    }), g.addFileFilter("prevent_duplicates", function(k, i, l) {
        if (k) {
            var j = this.files.length;
            while (j--) {
                if (i.name === this.files[j].name && i.size === this.files[j].size) {
                    this.trigger("Error", {
                        code: g.FILE_DUPLICATE_ERROR,
                        message: g.translate("Duplicate file error."),
                        file: i
                    }), l(!1);
                    return;
                }
            }
        }
        l(!0);
    }), g.Uploader = function(r) {
        function j() {
            var m, l = 0,
                p;
            if (this.state == g.STARTED) {
                for (p = 0; p < D.length; p++) {
                    !m && D[p].status == g.QUEUED ? (m = D[p], this.trigger("BeforeUpload", m) && (m.status = g.UPLOADING, this.trigger("UploadFile", m))) : l++;
                }
                l == D.length && (this.state !== g.STOPPED && (this.state = g.STOPPED, this.trigger("StateChanged")), this.trigger("UploadComplete", D));
            }
        }

        function o(l) {
            l.percent = l.size > 0 ? Math.ceil(l.loaded / l.size * 100) : 100, x();
        }

        function x() {
            var m, l;
            t.reset();
            for (m = 0; m < D.length; m++) {
                l = D[m], l.size !== h ? (t.size += l.origSize, t.loaded += l.loaded * l.origSize / l.size) : t.size = h, l.status == g.DONE ? t.uploaded++ : l.status == g.FAILED ? t.failed++ : t.queued++;
            }
            t.size === h ? t.percent = D.length > 0 ? Math.ceil(t.uploaded / D.length * 100) : 0 : (t.bytesPerSec = Math.ceil(t.loaded / ((+(new Date) - k || 1) / 1000)), t.percent = t.size > 0 ? Math.ceil(t.loaded / t.size * 100) : 0);
        }

        function z() {
            var m = this,
                l = 0,
                e = {
                    accept: r.filters.mime_types,
                    runtime_order: r.runtimes,
                    required_caps: q,
                    swf_url: r.flash_swf_url,
                    xap_url: r.silverlight_xap_url
                };
            g.each(r.runtimes.split(/\s*,\s*/), function(p) {
                r[p] && (e[p] = r[p]);
            }), b.inSeries([function(p) {
                r.browse_button ? (i = new b.FileInput(g.extend({}, e, {
                    name: r.file_data_name,
                    multiple: r.multi_selection,
                    container: r.container,
                    browse_button: r.browse_button
                })), i.onready = function() {
                    var u = b.Runtime.getInfo(this.ruid);
                    b.extend(m.features, {
                        chunks: u.can("slice_blob"),
                        multipart: u.can("send_multipart"),
                        multi_selection: u.can("select_multiple")
                    }), l++, p();
                }, i.onchange = function() {
                    m.addFile(this.files);
                }, i.bind("mouseenter mouseleave mousedown mouseup", function(v) {
                    if (!n) {
                        var u = b.get(r.browse_button);
                        u && (r.browse_button_hover && ("mouseenter" === v.type ? b.addClass(u, r.browse_button_hover) : "mouseleave" === v.type && b.removeClass(u, r.browse_button_hover)), r.browse_button_active && ("mousedown" === v.type ? b.addClass(u, r.browse_button_active) : "mouseup" === v.type && b.removeClass(u, r.browse_button_active)), u = null);
                    }
                }), i.bind("error runtimeerror", function() {
                    i = null, p();
                }), i.init()) : p();
            }, function(p) {
                r.drop_element ? (s = new b.FileDrop(g.extend({}, e, {
                    drop_zone: r.drop_element
                })), s.onready = function() {
                    var u = b.Runtime.getInfo(this.ruid);
                    m.features.dragdrop = u.can("drag_and_drop"), l++, p();
                }, s.ondrop = function() {
                    m.addFile(this.files);
                }, s.bind("error runtimeerror", function() {
                    s = null, p();
                }), s.init()) : p();
            }], function() {
                typeof r.init == "function" ? r.init(m) : g.each(r.init, function(u, p) {
                    m.bind(p, u);
                }), l ? m.trigger("PostInit") : m.trigger("Error", {
                    code: g.INIT_ERROR,
                    message: g.translate("Init error.")
                });
            });
        }

        function B(m, p) {
            if (m.ruid) {
                var l = b.Runtime.getInfo(m.ruid);
                if (l) {
                    return l.can(p);
                }
            }
            return !1;
        }

        function F(u, v, p) {
            var l = new b.Image;
            try {
                l.onload = function() {
                    l.downsize(v.width, v.height, v.crop, v.preserve_headers);
                }, l.onresize = function() {
                    p(this.getAsBlob(u.type, v.quality)), this.destroy();
                }, l.onerror = function() {
                    p(u);
                }, l.load(u);
            } catch (m) {
                p(u);
            }
        }
        var D = [],
            A = {},
            q = {},
            k, t, n = !1,
            i, s, C;
        t = new g.QueueProgress, r = g.extend({
            runtimes: b.Runtime.order,
            max_retries: 0,
            multipart: !0,
            multi_selection: !0,
            file_data_name: "file",
            flash_swf_url: "js/Moxie.swf",
            silverlight_xap_url: "js/Moxie.xap",
            send_chunk_number: !0
        }, r), r.resize && (r.resize = g.extend({
            preserve_headers: !0,
            crop: !1
        }, r.resize)), g.typeOf(r.filters) === "array" && (r.filters = {
            mime_types: r.filters
        }), r.filters = g.extend({
            mime_types: [],
            prevent_duplicates: !!r.prevent_duplicates,
            max_file_size: r.max_file_size
        }, r.filters), r.filters.max_file_size = g.parseSize(r.filters.max_file_size) || 0, r.chunk_size = g.parseSize(r.chunk_size) || 0, r.required_features = q = c(g.extend({}, r)), g.extend(this, {
            id: g.guid(),
            state: g.STOPPED,
            features: {},
            runtime: b.Runtime.thatCan(q, r.runtimes),
            files: D,
            settings: r,
            total: t,
            init: function() {
                var e = this;
                r.browse_button = b.get(r.browse_button), r.drop_element = b.get(r.drop_element), typeof r.preinit == "function" ? r.preinit(e) : g.each(r.preinit, function(m, l) {
                    e.bind(l, m);
                });
                if (!r.browse_button || !r.url) {
                    this.trigger("Error", {
                        code: g.INIT_ERROR,
                        message: g.translate("Init error.")
                    });
                    return;
                }
                e.bind("FilesAdded", function(m, l) {
                    [].push.apply(D, l), d(function() {
                        e.trigger("QueueChanged"), e.refresh();
                    }, 1);
                }), e.bind("CancelUpload", function() {
                    C && C.abort();
                }), r.unique_names && e.bind("BeforeUpload", function(p, l) {
                    var u = l.name.match(/\.([^.]+)$/),
                        m = "part";
                    u && (m = u[1]), l.target_name = l.id + "." + m;
                }), e.bind("UploadFile", function(v, y) {
                    function m() {
                        w-- > 0 ? d(G, 1) : (y.loaded = E, v.trigger("Error", {
                            code: g.HTTP_ERROR,
                            message: g.translate("HTTP Error."),
                            file: y,
                            response: C.responseText,
                            status: C.status,
                            responseHeaders: C.getAllResponseHeaders()
                        }));
                    }

                    function G() {
                        var u, p, L, M;
                        if (y.status == g.DONE || y.status == g.FAILED || v.state == g.STOPPED) {
                            return;
                        }
                        L = {
                            name: y.target_name || y.name
                        }, I && J.chunks && H.size > I ? (M = Math.min(I, H.size - E), u = H.slice(E, E + M)) : (M = H.size, u = H), I && J.chunks && (r.send_chunk_number ? (L.chunk = Math.ceil(E / I), L.chunks = Math.ceil(H.size / I)) : (L.offset = E, L.total = H.size)), C = new b.XMLHttpRequest, C.upload && (C.upload.onprogress = function(l) {
                            y.loaded = Math.min(y.size, E + l.loaded), v.trigger("UploadProgress", y);
                        }), C.onload = function() {
                            if (C.status >= 400) {
                                m();
                                return;
                            }
                            M < H.size ? (u.destroy(), E += M, y.loaded = Math.min(E, H.size), v.trigger("ChunkUploaded", y, {
                                offset: y.loaded,
                                total: H.size,
                                response: C.responseText,
                                status: C.status,
                                responseHeaders: C.getAllResponseHeaders()
                            }), b.Env.browser === "Android Browser" && v.trigger("UploadProgress", y)) : y.loaded = y.size, u = p = null, !E || E >= H.size ? (y.size != y.origSize && (H.destroy(), H = null), v.trigger("UploadProgress", y), y.status = g.DONE, v.trigger("FileUploaded", y, {
                                response: C.responseText,
                                status: C.status,
                                responseHeaders: C.getAllResponseHeaders()
                            })) : d(G, 1);
                        }, C.onerror = function() {
                            m();
                        }, C.onloadend = function() {
                            this.destroy(), C = null;
                        }, v.settings.multipart && J.multipart ? (L.name = y.target_name || y.name, C.open("post", K, !0), g.each(v.settings.headers, function(N, l) {
                            C.setRequestHeader(l, N);
                        }), p = new b.FormData, g.each(g.extend(L, v.settings.multipart_params), function(N, l) {
                            p.append(l, N);
                        }), p.append(v.settings.file_data_name, u), C.send(p, {
                            runtime_order: v.settings.runtimes,
                            required_caps: q,
                            swf_url: v.settings.flash_swf_url,
                            xap_url: v.settings.silverlight_xap_url
                        })) : (K = g.buildUrl(v.settings.url, g.extend(L, v.settings.multipart_params)), C.open("post", K, !0), C.setRequestHeader("Content-Type", "application/octet-stream"), g.each(v.settings.headers, function(N, l) {
                            C.setRequestHeader(l, N);
                        }), C.send(u, {
                            runtime_order: v.settings.runtimes,
                            required_caps: q,
                            swf_url: v.settings.flash_swf_url,
                            xap_url: v.settings.silverlight_xap_url
                        }));
                    }
                    var K = v.settings.url,
                        J = v.features,
                        I = r.chunk_size,
                        w = r.max_retries,
                        H, E = 0;
                    y.loaded && (E = y.loaded = I * Math.floor(y.loaded / I)), H = y.getSource(), !b.isEmptyObj(v.settings.resize) && B(H, "send_binary_string") && !!~b.inArray(H.type, ["image/jpeg", "image/png"]) ? F.call(this, H, v.settings.resize, function(l) {
                        H = l, y.size = l.size, G();
                    }) : G();
                }), e.bind("UploadProgress", function(m, l) {
                    o(l);
                }), e.bind("StateChanged", function(m) {
                    if (m.state == g.STARTED) {
                        k = +(new Date);
                    } else {
                        if (m.state == g.STOPPED) {
                            for (var l = m.files.length - 1; l >= 0; l--) {
                                m.files[l].status == g.UPLOADING && (m.files[l].status = g.QUEUED, x());
                            }
                        }
                    }
                }), e.bind("QueueChanged", x), e.bind("Error", function(m, l) {
                    l.file && (l.file.status = g.FAILED, o(l.file), m.state == g.STARTED && d(function() {
                        j.call(e);
                    }, 1));
                }), e.bind("FileUploaded", function() {
                    x(), d(function() {
                        j.call(e);
                    }, 1);
                }), e.trigger("Init", {
                    runtime: this.runtime
                }), z.call(this);
            },
            refresh: function() {
                i && i.trigger("Refresh"), this.trigger("Refresh");
            },
            start: function() {
                this.state != g.STARTED && (this.state = g.STARTED, this.trigger("StateChanged"), j.call(this));
            },
            stop: function() {
                this.state != g.STOPPED && (this.state = g.STOPPED, this.trigger("StateChanged"), this.trigger("CancelUpload"));
            },
            disableBrowse: function() {
                n = arguments[0] !== h ? arguments[0] : !0, i && i.disable(n), this.trigger("DisableBrowse", n);
            },
            getFile: function(m) {
                var l;
                for (l = D.length - 1; l >= 0; l--) {
                    if (D[l].id === m) {
                        return D[l];
                    }
                }
            },
            addFile: function(y, p) {
                function w() {
                    var l = s || i;
                    return l ? l.getRuntime().uid : !1;
                }

                function v(u, J) {
                    var l = [];
                    b.each(m.settings.filters, function(e, K) {
                        a[K] && l.push(function(L) {
                            a[K].call(m, e, u, function(M) {
                                L(!M);
                            });
                        });
                    }), b.inSeries(l, J);
                }

                function E(u) {
                    var l = b.typeOf(u);
                    if (u instanceof b.File) {
                        if (!u.ruid && !u.isDetached()) {
                            if (!G) {
                                return !1;
                            }
                            u.ruid = G, u.connectRuntime(G);
                        }
                        E(new g.File(u));
                    } else {
                        u instanceof b.Blob ? (E(u.getSource()), u.destroy()) : u instanceof g.File ? (p && (u.name = p), I.push(function(e) {
                            v(u, function(J) {
                                J || H.push(u), e();
                            });
                        })) : b.inArray(l, ["file", "blob"]) !== -1 ? E(new b.File(null, u)) : l === "node" && b.typeOf(u.files) === "filelist" ? b.each(u.files, E) : l === "array" && (p = null, b.each(u, E));
                    }
                }
                var m = this,
                    I = [],
                    H = [],
                    G;
                G = w(), E(y), I.length && b.inSeries(I, function() {
                    H.length && m.trigger("FilesAdded", H);
                });
            },
            removeFile: function(m) {
                var l = typeof m == "string" ? m : m.id;
                for (var p = D.length - 1; p >= 0; p--) {
                    if (D[p].id === l) {
                        return this.splice(p, 1)[0];
                    }
                }
            },
            splice: function(p, l) {
                var m = D.splice(p === h ? 0 : p, l === h ? D.length : l);
                return this.trigger("FilesRemoved", m), this.trigger("QueueChanged"), g.each(m, function(u) {
                    u.destroy();
                }), m;
            },
            trigger: function(p) {
                var l = A[p.toLowerCase()],
                    u, m;
                if (l) {
                    m = Array.prototype.slice.call(arguments), m[0] = this;
                    for (u = 0; u < l.length; u++) {
                        if (l[u].func.apply(l[u].scope, m) === !1) {
                            return !1;
                        }
                    }
                }
                return !0;
            },
            hasEventListener: function(l) {
                return !!A[l.toLowerCase()];
            },
            bind: function(p, l, u) {
                var m;
                p = p.toLowerCase(), m = A[p] || [], m.push({
                    func: l,
                    scope: u || this
                }), A[p] = m;
            },
            unbind: function(u) {
                u = u.toLowerCase();
                var m = A[u],
                    p, l = arguments[1];
                if (m) {
                    if (l !== h) {
                        for (p = m.length - 1; p >= 0; p--) {
                            if (m[p].func === l) {
                                m.splice(p, 1);
                                break;
                            }
                        }
                    } else {
                        m = [];
                    }
                    m.length || delete A[u];
                }
            },
            unbindAll: function() {
                var l = this;
                g.each(A, function(e, m) {
                    l.unbind(m);
                });
            },
            destroy: function() {
                this.stop(), g.each(D, function(l) {
                    l.destroy();
                }), D = [], i && (i.destroy(), i = null), s && (s.destroy(), s = null), q = {}, k = t = n = C = null, this.trigger("Destroy"), this.unbindAll(), A = {};
            }
        });
    }, g.File = function() {
        function j(e) {
            g.extend(this, {
                id: g.guid(),
                name: e.name || e.fileName,
                type: e.type || "",
                size: e.size || e.fileSize,
                origSize: e.size || e.fileSize,
                loaded: 0,
                percent: 0,
                status: g.QUEUED,
                lastModifiedDate: e.lastModifiedDate || (new Date).toLocaleString(),
                getNative: function() {
                    var k = this.getSource().getSource();
                    return b.inArray(b.typeOf(k), ["blob", "file"]) !== -1 ? k : null;
                },
                getSource: function() {
                    return i[this.id] ? i[this.id] : null;
                },
                destroy: function() {
                    var k = this.getSource();
                    k && (k.destroy(), delete i[this.id]);
                }
            }), i[this.id] = e;
        }
        var i = {};
        return j;
    }(), g.QueueProgress = function() {
        var i = this;
        i.size = 0, i.loaded = 0, i.uploaded = 0, i.failed = 0, i.queued = 0, i.percent = 0, i.bytesPerSec = 0, i.reset = function() {
            i.size = i.loaded = i.uploaded = i.failed = i.queued = i.percent = i.bytesPerSec = 0;
        };
    }, f.plupload = g;
})(window, mOxie);
(function(c) {
    function d(f) {
        return plupload.translate(f) || f;
    }

    function b(e, f) {
        f.contents().each(function(g, h) {
            h = c(h), h.is(".plupload") || h.remove();
        }), f.prepend('<div class="plupload_wrapper plupload_scroll"><div id="' + e + '_container" class="plupload_container">' + '<div class="plupload">' + '<div class="plupload_header">' + '<div class="plupload_header_content">' + '<div class="plupload_header_title">' + d("Select files") + "</div>" + '<div class="plupload_header_text">' + d("Add files to the upload queue and click the start button.") + "</div>" + "</div>" + "</div>" + '<div class="plupload_content">' + '<div class="plupload_filelist_header">' + '<div class="plupload_file_name">' + d("Filename") + "</div>" + '<div class="plupload_file_action">&nbsp;</div>' + '<div class="plupload_file_status"><span>' + d("Status") + "</span></div>" + '<div class="plupload_file_size">' + d("Size") + "</div>" + '<div class="plupload_clearer">&nbsp;</div>' + "</div>" + '<ul id="' + e + '_filelist" class="plupload_filelist"></ul>' + '<div class="plupload_filelist_footer">' + '<div class="plupload_file_name">' + '<div class="plupload_buttons">' + '<a href="#" class="plupload_button plupload_add" id="' + e + '_browse">' + d("Add Files") + "</a>" + '<a href="#" class="plupload_button plupload_start">' + d("Start Upload") + "</a>" + "</div>" + '<span class="plupload_upload_status"></span>' + "</div>" + '<div class="plupload_file_action"></div>' + '<div class="plupload_file_status"><span class="plupload_total_status">0%</span></div>' + '<div class="plupload_file_size"><span class="plupload_total_file_size">0 b</span></div>' + '<div class="plupload_progress">' + '<div class="plupload_progress_container">' + '<div class="plupload_progress_bar"></div>' + "</div>" + "</div>" + '<div class="plupload_clearer">&nbsp;</div>' + "</div>" + "</div>" + "</div>" + "</div>" + '<input type="hidden" id="' + e + '_count" name="' + e + '_count" value="0" />' + "</div>");
    }
    var a = {};
    c.fn.pluploadQueue = function(e) {
        return e ? (this.each(function() {
            function n(f) {
                var l;
                f.status == plupload.DONE && (l = "plupload_done"), f.status == plupload.FAILED && (l = "plupload_failed"), f.status == plupload.QUEUED && (l = "plupload_delete"), f.status == plupload.UPLOADING && (l = "plupload_uploading");
                var h = c("#" + f.id).attr("class", l).find("a").css("display", "block");
                f.hint && h.attr("title", f.hint);
            }

            function i() {
                c("span.plupload_total_status", p).html(k.total.percent + "%"), c("div.plupload_progress_bar", p).css("width", k.total.percent + "%"), c("span.plupload_upload_status", p).html(d("Uploaded %d/%d files").replace(/%d\/%d/, k.total.uploaded + "/" + k.files.length));
            }

            function q() {
                var h = c("ul.plupload_filelist", p).html(""),
                    l = 0,
                    f;
                c.each(k.files, function(s, r) {
                    f = "", r.status == plupload.DONE && (r.target_name && (f += '<input type="hidden" name="' + j + "_" + l + '_tmpname" value="' + plupload.xmlEncode(r.target_name) + '" />'), f += '<input type="hidden" name="' + j + "_" + l + '_name" value="' + plupload.xmlEncode(r.name) + '" />', f += '<input type="hidden" name="' + j + "_" + l + '_status" value="' + (r.status == plupload.DONE ? "done" : "failed") + '" />', l++, c("#" + j + "_count").val(l)), h.append('<li id="' + r.id + '">' + '<div class="plupload_file_name"><span>' + r.name + "</span></div>" + '<div class="plupload_file_action"><a href="#"></a></div>' + '<div class="plupload_file_status">' + r.percent + "%</div>" + '<div class="plupload_file_size">' + plupload.formatSize(r.size) + "</div>" + '<div class="plupload_clearer">&nbsp;</div>' + f + "</li>"), n(r), c("#" + r.id + ".plupload_delete a").click(function(o) {
                        c("#" + r.id).remove(), k.removeFile(r), o.preventDefault();
                    });
                }), c("span.plupload_total_file_size", p).html(plupload.formatSize(k.total.size)), k.total.queued === 0 ? c("span.plupload_add_text", p).html(d("Add Files")) : c("span.plupload_add_text", p).html(d("%d files queued").replace(/%d/, k.total.queued)), c("a.plupload_start", p).toggleClass("plupload_disabled", k.files.length == k.total.uploaded + k.total.failed), h[0].scrollTop = h[0].scrollHeight, i(), !k.files.length && k.features.dragdrop && k.settings.dragdrop && c("#" + j + "_filelist").append('<li class="plupload_droptext">' + d("Drag files here.") + "</li>");
            }

            function m() {
                delete a[j], k.destroy(), p.html(g), k = p = g = null;
            }
            var k, p, j, g;
            p = c(this), j = p.attr("id"), j || (j = plupload.guid(), p.attr("id", j)), g = p.html(), b(j, p), k = new plupload.Uploader(c.extend({
                dragdrop: !0,
                browse_button: j + "_browse",
                container: j
            }, e)), a[j] = k, k.bind("UploadFile", function(f, h) {
                c("#" + h.id).addClass("plupload_current_file");
            }), k.bind("Init", function(f, h) {
                !e.unique_names && e.rename && p.on("click", "#" + j + "_filelist div.plupload_file_name span", function(y) {
                    var w = c(y.target),
                        t, v, x, l = "";
                    t = f.getFile(w.parents("li")[0].id), x = t.name, v = /^(.+)(\.[^.]+)$/.exec(x), v && (x = v[1], l = v[2]), w.hide().after('<input type="text" />'), w.next().val(x).focus().blur(function() {
                        w.show().next().remove();
                    }).keydown(function(o) {
                        var r = c(this);
                        o.keyCode == 13 && (o.preventDefault(), t.name = r.val() + l, w.html(t.name), r.blur());
                    });
                }), f.settings.dragdrop && (f.settings.drop_element = j + "_filelist"), c("#" + j + "_container").attr("title", ""), c("a.plupload_start", p).click(function(l) {
                    c(this).hasClass("plupload_disabled") || k.start(), l.preventDefault();
                }), c("a.plupload_stop", p).click(function(l) {
                    l.preventDefault(), k.stop();
                }), c("a.plupload_start", p).addClass("plupload_disabled");
            }), k.bind("Error", function(h, o) {
                var f = o.file,
                    l;
                f && (l = o.message, o.details && (l += " (" + o.details + ")"), o.code == plupload.FILE_SIZE_ERROR && alert(d("Error: File too large:") + " " + f.name), o.code == plupload.FILE_EXTENSION_ERROR && alert(d("Error: Invalid file extension:") + " " + f.name), f.hint = l, c("#" + f.id).attr("class", "plupload_failed").find("a").css("display", "block").attr("title", l)), o.code === plupload.INIT_ERROR && setTimeout(function() {
                    m();
                }, 1);
            }), k.bind("PostInit", function(f) {
                f.settings.dragdrop && f.features.dragdrop && c("#" + j + "_filelist").append('<li class="plupload_droptext">' + d("Drag files here.") + "</li>");
            }), k.init(), k.bind("StateChanged", function() {
                k.state === plupload.STARTED ? (c("li.plupload_delete a,div.plupload_buttons", p).hide(), c("span.plupload_upload_status,div.plupload_progress,a.plupload_stop", p).css("display", "block"), c("span.plupload_upload_status", p).html("Uploaded " + k.total.uploaded + "/" + k.files.length + " files"), e.multiple_queues && c("span.plupload_total_status,span.plupload_total_file_size", p).show()) : (q(), c("a.plupload_stop,div.plupload_progress", p).hide(), c("a.plupload_delete", p).css("display", "block"), e.multiple_queues && k.total.uploaded + k.total.failed == k.files.length && (c(".plupload_buttons,.plupload_upload_status", p).css("display", "inline"), c(".plupload_start", p).addClass("plupload_disabled"), c("span.plupload_total_status,span.plupload_total_file_size", p).hide()));
            }), k.bind("QueueChanged", q), k.bind("FileUploaded", function(h, f) {
                n(f);
            }), k.bind("UploadProgress", function(f, h) {
                c("#" + h.id + " div.plupload_file_status", p).html(h.percent + "%"), n(h), i();
            }), e.setup && e.setup(k);
        }), this) : a[c(this[0]).attr("id")];
    };
})(jQuery);
var j_doksoft_image = jQuery.noConflict();
j_doksoft_image(function() {
    j_doksoft_image("#doksoft_image-img-resize-up").unbind("click");
    j_doksoft_image("#doksoft_image-img-resize-up").click(function() {
        if (j_doksoft_image("#doksoft_image-img-resize").is(":checked")) {
            if (j_doksoft_image(this).hasClass("checked")) {
                j_doksoft_image(this).removeClass("checked");
            } else {
                j_doksoft_image(this).addClass("checked");
            }
        }
    });
    j_doksoft_image("#doksoft_image-img-resize").unbind("change");
    j_doksoft_image("#doksoft_image-img-resize").change(function() {
        if (j_doksoft_image("#doksoft_image-img-resize").is(":checked")) {
            j_doksoft_image("#doksoft_image-panel-img-resize").addClass("enabled");
            j_doksoft_image('#doksoft_image-panel-img-resize input[type="text"]').attr("disabled", "");
        } else {
            j_doksoft_image("#doksoft_image-panel-img-resize").removeClass("enabled");
            j_doksoft_image('#doksoft_image-panel-img-resize input[type="text"]').attr("disabled", "disabled");
        }
    });
    var a = [];
    if (window["doksoft_image_allowedExt"] != "*") {
        a = [{
            title: "Acceptable files",
            extensions: window["doksoft_image_allowedExt"]
        }];
    }
    window["doksoft_image_doksoftPlupload2"] = j_doksoft_image(".plupload2_doksoft_image").pluploadQueue({
        runtimes: "html5,html4,flash,silverlight,browserplus,gears",
        url: window["doksoft_image_doksoftUploaderUrl"],
        unique_names: true,
        filters: a,
        flash_swf_url: window["doksoft_image_ckeditorPluginPath"] + "plupload2/plupload.flash.swf",
        silverlight_xap_url: window["doksoft_image_ckeditorPluginPath"] + "plupload2/plupload.silverlight.xap",
        preinit: {
            Init: function(c, b) {
                if (window["doksoft_image_autoUpload"]) {
                    j_doksoft_image(".plupload_button.plupload_start").remove();
                }
            }
        },
        init: {
            BeforeUpload: function(f, d) {
                var e = "";
                if (j_doksoft_image("#doksoft_image-img-resize").is(":checked")) {
                    var b;
                    var c;
                    b = j_doksoft_image("#doksoft_image-img-resize-width").val();
                    c = b.match(/^\d+$/);
                    if (c != null && c.length == 1 && b > 0) {
                        e += "&iw=" + b;
                    }
                    b = j_doksoft_image("#doksoft_image-img-resize-height").val();
                    c = b.match(/^\d+$/);
                    if (c != null && c.length == 1 && b > 0) {
                        e += "&ih=" + b;
                    }
                    if (j_doksoft_image("#doksoft_image-img-resize-up").hasClass("checked")) {
                        e += "&ie=1";
                    }
                }
                if (e.length > 0) {
                    f.settings.url = window["doksoft_image_doksoftUploaderUrl"] + e;
                }
            },
            FileUploaded: function(d, c, b) {
                if (b.response.substr(0, 1) == "!") {
                    d.trigger("Error", {
                        code: 500,
                        message: b.response.substr(1),
                        details: "",
                        file: c
                    });
                } else {
                    if (window["doksoft_image_doksoftUploadedFiles"][window["doksoft_image_doksoftUploadedFiles"].length - 1] != b.response) {
                        window["doksoft_image_doksoftUploadedFiles"].push(b.response);
                    }
                }
            },
            Error: function(c, b) {
                var d = b.message;
                if (d.toLowerCase().substr("exten") > -1) {
                    d += "\nAllowed file exntesions: " + allowedExt.replace(",", ", ");
                }
                alert(d);
            },
            UploadComplete: function(b) {
                if (window["doksoft_image_autoUpload"]) {
                    window["doksoft_image_dlg"].getButton("ok").click();
                }
            }
        }
    });
    window["doksoft_image_doksoftUploadedFiles"] = [];
});