/**
 * AnyChart is lightweight robust charting library with great API and Docs, that works with your stack and has tons of chart types and features.
 *
 * Modules: exports
 * Version: 8.12.0.1936 (2023-12-04)
 * License: https://www.anychart.com/buy/
 * Contact: sales@anychart.com
 * Copyright: AnyChart.com 2023. All rights reserved.
 */
(function (global, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var wrapper = function (w) {
            if (!w.document) {
                throw Error('AnyChart requires a window with a document');
            }
            factory.call(w, w, w.document);
            try {
                w.acgraph.isNodeJS = Object.prototype.toString.call(global.process) == "[object process]";
            } catch (e) { };
            return w.anychart;
        };
        module.exports = global.document ? wrapper(global) : wrapper;
    } else {
        factory.call(global, window, document)
    }
})(typeof window !== 'undefined' ? window : this, function (window, document, opt_noGlobal) {
    var $, _, $_ = this.anychart;
    if ($_ && (_ = $_._)) {
        $ = $_.$
    } else {
        throw Error('anychart-base.min.js module should be included first. See modules explanation at https://docs.anychart.com/Quick_Start/Modules for details');
        $ = {};
        _ = {}
    }
    if (!_.exports) {
        _.exports = 1;
        (function ($) {
            var cW, eia, dW, fW, gia, hia, iia, jia, kia, iW, jW, lia, kW, nia, lW, mW, pia, qia, sia, tia, nW, uia, oW, via, wia, pW, qW, xia, yia, zia, rW, Aia, Bia, Cia, Dia, Eia, Fia, Gia, tW, vW, Kia, uW, wW, Mia, Nia, Lia, xW, Iia, yW, CW, Qia, Via, AW, DW, Wia, BW, EW, Xia, Zia, $ia, aja, Yia, FW, dja, hja, eja, ija, jja, RW, gja, OW, PW, lja, VW, WW, XW, YW, $W, aX, bX, cX, dX, mja, eX, nja, gX, oja, pja, jX, qja, kX, hX;
            cW = function (a, b, c) {
                $.n(c) || (c = "a4");
                c = bW[c];
                $.n(a) && $.n(b) ? $.z(a) && $.da(b) ? (a = a.toLowerCase(), (a = bW[a]) && (b ? c = {
                    width: a.height,
                    height: a.width
                } : c = a)) : (c.width = String(a), c.height = String(b)) : $.n(a) && (a = bW[String(a)]) && (c = a);
                $.hc(c.width, "px") || $.hc(c.width, "mm") || (c.width += "px");
                $.hc(c.height, "px") || $.hc(c.height, "mm") || (c.height += "px");
                return c
            };
            eia = function (a, b) {
                $.Aj(a, null, b, void 0)
            };
            dW = function (a, b) {
                if (a) {
                    var c = $.Oe("STYLE");
                    c.type = "text/css";
                    c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(window.document.createTextNode(String(a)));
                    $.Xe($.De(window.document, "head", void 0, b)[0], c, 0)
                }
            };
            fW = function () {
                eW && (window.document.body.removeChild(eW), eW = null)
            };
            gia = function (a) {
                if (!eW) {
                    var b = window.document.createElement("iframe");
                    eW = b;
                    $.yf(b, {
                        visibility: "hidden",
                        position: "fixed",
                        right: 0,
                        bottom: 0
                    });
                    window.document.body.appendChild(b);
                    if (a) {
                        a = $.hk();
                        for (var c, d = 0, e = a.length; d < e; d++)
                            if (c = a[d], c.type == fia) {
                                var f = "";
                                c.cssText ? f = c.cssText : c.style && c.style.cssText && c.selectorText && (f = c.style.cssText.replace(/\s*-closure-parent-stylesheet:\s*\[object\];?\s*/gi, "").replace(/\s*-closure-rule-index:\s*[\d]+;?\s*/gi, ""), f = c.selectorText + " { " + f + " }");
                                dW(f, b.contentWindow.document)
                            }
                    }
                    dW("body{padding:0;margin:0;height:100%;}@page {size: auto; margin: 0; padding:0}",
                        b.contentWindow.document)
                }
                return eW
            };
            hia = function () {
                if (eW) {
                    var a = eW,
                        b = a.contentWindow;
                    $.Kp ? (gW = $.uh.open(), gW.document.write(b.document.documentElement.innerHTML), fW(), gW.onafterprint = function () {
                        (0, window.setTimeout)(function () {
                            gW.close()
                        }, 0)
                    }, (0, window.setTimeout)(function () {
                        gW.focus();
                        gW.print()
                    }, 0)) : $.id ? (0, window.setTimeout)(function () {
                        $.yf(a, "visibility", "");
                        b.onafterprint = fW;
                        b.focus();
                        b.print()
                    }, 0) : ($.Fj(fW, 6), b.focus(), b.print())
                }
            };
            iia = function (a) {
                if (hW[a]) return hW[a];
                a = String(a);
                if (!hW[a]) {
                    var b = /function ([^\(]+)/.exec(a);
                    hW[a] = b ? b[1] : "[Anonymous]"
                }
                return hW[a]
            };
            jia = function (a, b) {
                var c = [];
                if ($.Aa(b, a)) c.push("[...circular reference...]");
                else if (a && 50 > b.length) {
                    c.push(iia(a) + "(");
                    for (var d = a.arguments, e = 0; d && e < d.length; e++) {
                        0 < e && c.push(", ");
                        var f = d[e];
                        switch (typeof f) {
                            case "object":
                                f = f ? "object" : "null";
                                break;
                            case "string":
                                break;
                            case "number":
                                f = String(f);
                                break;
                            case "boolean":
                                f = f ? "true" : "false";
                                break;
                            case "function":
                                f = (f = iia(f)) ? f : "[fn]";
                                break;
                            default:
                                f = typeof f
                        }
                        40 < f.length && (f = f.substr(0, 40) + "...");
                        c.push(f)
                    }
                    b.push(a);
                    c.push(")\n");
                    try {
                        c.push(jia(a.caller,
                            b))
                    } catch (h) {
                        c.push("[exception trying to get caller]\n")
                    }
                } else a ? c.push("[...long stack...]") : c.push("[end]");
                return c.join("")
            };
            kia = function (a) {
                var b = Error();
                if (Error.captureStackTrace) Error.captureStackTrace(b, a || kia), b = String(b.stack);
                else {
                    try {
                        throw b;
                    } catch (c) {
                        b = c
                    }
                    b = (b = b.stack) ? String(b) : null
                }
                b || (b = jia(a || arguments.callee.caller, []));
                return b
            };
            iW = function (a) {
                return a instanceof $.je && a.constructor === $.je && a.f === $.ie ? a.b : "type_error:Const"
            };
            jW = function () {
                var a = $.n($.fa.URL) && $.n($.fa.URL.createObjectURL) ? $.fa.URL : $.n($.fa.webkitURL) && $.n($.fa.webkitURL.createObjectURL) ? $.fa.webkitURL : $.n($.fa.createObjectURL) ? $.fa : null;
                if (null != a) return a;
                throw Error("This browser doesn't seem to support blob URLs");
            };
            lia = function (a) {
                return jW().createObjectURL(a)
            };
            kW = function () {
                this.f = mia
            };
            nia = function (a) {
                if (a instanceof kW && a.constructor === kW && a.f === mia) return "";
                $.ka(a);
                return "type_error:TrustedResourceUrl"
            };
            lW = function (a) {
                if (a instanceof $.me && a.constructor === $.me && a.i === $.le) return a.f;
                $.ka(a);
                return "type_error:SafeUrl"
            };
            mW = function (a) {
                if (a instanceof $.me) return a;
                a = a.Ay ? a.bu() : String(a);
                oia.test(a) || (a = "about:invalid#zClosurez");
                return $.ne(a)
            };
            pia = function (a) {
                if (a instanceof $.pe && a.constructor === $.pe && a.f === $.oe) return a.b;
                $.ka(a);
                return "type_error:SafeStyle"
            };
            qia = function (a) {
                return a.replace($.bE, function (a, c, d, e) {
                    var b = "";
                    d = d.replace(/^(['"])(.*)\1$/, function (a, c, d) {
                        b = c;
                        return d
                    });
                    a = mW(d).bu();
                    return c + b + a + b + e
                })
            };
            sia = function (a) {
                if (a instanceof $.me) a = 'url("' + lW(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
                else if (a instanceof $.je) a = iW(a);
                else {
                    a = String(a);
                    var b = a.replace($.mda, "$1").replace($.bE, "url");
                    if (b = ria.test(b)) {
                        for (var c = b = !0, d = 0; d < a.length; d++) {
                            var e = a.charAt(d);
                            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                        }
                        b = b && c
                    }
                    a = b ? qia(a) : "zClosurez"
                }
                return a
            };
            tia = function (a) {
                var b = "",
                    c;
                for (c in a) {
                    if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
                    var d = a[c];
                    null != d && (d = $.A(d) ? (0, $.Wa)(d, sia).join(" ") : sia(d), b += c + ":" + d + ";")
                }
                return b ? $.qe(b) : $.lda
            };
            nW = function (a) {
                if (a instanceof $.se && a.constructor === $.se && a.j === $.re) return a.f;
                $.ka(a);
                return "type_error:SafeHtml"
            };
            uia = function (a) {
                if (a instanceof $.se) return a;
                var b = null;
                a.dV && (b = a.b());
                a = $.sc(a.Ay ? a.bu() : String(a));
                return $.te(a, b)
            };
            oW = function (a) {
                if (a instanceof $.se) return a;
                a = uia(a);
                var b = nW(a);
                b = $.rc(b.replace(/  /g, " &#160;"), void 0);
                return $.te(b, a.b())
            };
            via = function (a) {
                if (!$.C(a)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a + " given: " + a);
                a instanceof $.pe || (a = tia(a));
                return pia(a)
            };
            wia = function (a) {
                function b(a) {
                    $.A(a) ? (0, $.Re)(a, b) : (a = uia(a), d += nW(a), a = a.b(), 0 == c ? c = a : 0 != a && c != a && (c = null))
                }
                var c = 0,
                    d = "";
                (0, $.Re)(arguments, b);
                return $.te(d, c)
            };
            pW = function (a, b) {
                return (b || window.document).getElementsByTagName(String(a))
            };
            qW = function (a) {
                return a.contentDocument || a.contentWindow.document
            };
            xia = function (a, b, c) {
                $.Bj(a, b, c, null) || $.ij($.qa(b, a))
            };
            yia = function (a) {
                return new $.qj(function (b, c) {
                    var d = a.length,
                        e = [];
                    if (d)
                        for (var f = function (a, c) {
                            d--;
                            e[a] = c;
                            0 == d && b(e)
                        }, h = function (a) {
                            c(a)
                        }, k = 0, l; k < a.length; k++) l = a[k], xia(l, $.qa(f, k), h);
                    else b(e)
                })
            };
            zia = function () {
                var a = new $.qj($.ia);
                $.nj(a, $.oj, void 0);
                return a
            };
            rW = function (a, b, c) {
                var d = {};
                b = "object" == $.ka(b) ? b : null;
                $.Gc(a, function (a, f) {
                    d[f] = b ? $.n(b[f]) ? b[f] : void 0 : a;
                    $.n(c) && (d[f] = $.n(d[f]) ? d[f] : c[f])
                });
                return d
            };
            Aia = function (a) {
                if (a.ys && "function" == typeof a.ys) return a.ys();
                if ($.z(a)) return a.split("");
                if ($.la(a)) {
                    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                    return b
                }
                return $.Hc(a)
            };
            Bia = function (a) {
                if (a.Xt && "function" == typeof a.Xt) return a.Xt();
                if (!a.ys || "function" != typeof a.ys) {
                    if ($.la(a) || $.z(a)) {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return $.Ic(a)
                }
            };
            Cia = function (a, b) {
                if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
                else if ($.la(a) || $.z(a)) (0, $.Re)(a, b, void 0);
                else
                    for (var c = Bia(a), d = Aia(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
            };
            Dia = function (a, b) {
                if (a)
                    for (var c = a.split("&"), d = 0; d < c.length; d++) {
                        var e = c[d].indexOf("="),
                            f = null;
                        if (0 <= e) {
                            var h = c[d].substring(0, e);
                            f = c[d].substring(e + 1)
                        } else h = c[d];
                        b(h, f ? (0, window.decodeURIComponent)(f.replace(/\+/g, " ")) : "")
                    }
            };
            $.sW = function (a) {
                this.j = this.K = this.i = "";
                this.G = null;
                this.D = this.Sc = "";
                this.b = !1;
                var b;
                a instanceof $.sW ? (this.b = $.n(void 0) ? void 0 : a.b, Eia(this, a.i), this.K = a.K, this.j = a.j, Fia(this, a.G), this.Sc = a.Sc, Gia(this, a.f.clone()), this.D = a.D) : a && (b = String(a).match(Hia)) ? (this.b = !1, Eia(this, b[1] || "", !0), this.K = tW(b[2] || ""), this.j = tW(b[3] || "", !0), Fia(this, b[4]), this.Sc = tW(b[5] || "", !0), Gia(this, b[6] || "", !0), this.D = tW(b[7] || "")) : (this.b = !1, this.f = new uW(null, this.b))
            };
            Eia = function (a, b, c) {
                a.i = c ? tW(b, !0) : b;
                a.i && (a.i = a.i.replace(/:$/, ""))
            };
            Fia = function (a, b) {
                if (b) {
                    b = Number(b);
                    if ((0, window.isNaN)(b) || 0 > b) throw Error("Bad port number " + b);
                    a.G = b
                } else a.G = null
            };
            Gia = function (a, b, c) {
                b instanceof uW ? (a.f = b, Iia(a.f, a.b)) : (c || (b = vW(b, Jia)), a.f = new uW(b, a.b))
            };
            tW = function (a, b) {
                return a ? b ? (0, window.decodeURI)(a.replace(/%25/g, "%2525")) : (0, window.decodeURIComponent)(a) : ""
            };
            vW = function (a, b, c) {
                return $.z(a) ? (a = (0, window.encodeURI)(a).replace(b, Kia), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
            };
            Kia = function (a) {
                a = a.charCodeAt(0);
                return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
            };
            uW = function (a, b) {
                this.f = this.b = null;
                this.i = a || null;
                this.j = !!b
            };
            wW = function (a) {
                a.b || (a.b = new $.cC, a.f = 0, a.i && Dia(a.i, function (b, c) {
                    a.add((0, window.decodeURIComponent)(b.replace(/\+/g, " ")), c)
                }))
            };
            Mia = function (a) {
                var b = Bia(a);
                if ("undefined" == typeof b) throw Error("Keys are undefined");
                var c = new uW(null, void 0);
                a = Aia(a);
                for (var d = 0; d < b.length; d++) {
                    var e = b[d],
                        f = a[d];
                    $.A(f) ? Lia(c, e, f) : c.add(e, f)
                }
                return c
            };
            Nia = function (a, b) {
                wW(a);
                b = xW(a, b);
                return $.dC(a.b.f, b)
            };
            Lia = function (a, b, c) {
                a.remove(b);
                0 < c.length && (a.i = null, a.b.set(xW(a, b), $.Ha(c)), a.f += c.length)
            };
            xW = function (a, b) {
                var c = String(b);
                a.j && (c = c.toLowerCase());
                return c
            };
            Iia = function (a, b) {
                b && !a.j && (wW(a), a.i = null, a.b.forEach(function (a, b) {
                    var c = b.toLowerCase();
                    b != c && (this.remove(b), Lia(this, c, a))
                }, a));
                a.j = b
            };
            yW = function () {
                $.tf.call(this);
                this.Er = "closure_frame" + Oia++;
                this.f = [];
                Pia[this.Er] = this
            };
            CW = function (a, b) {
                var c = new yW;
                $.Ld(c, "ready", c.ld, !1, c);
                if (c.aw) throw Error("[goog.net.IframeIo] Unable to send, already active.");
                var d = new $.sW(a);
                if (!zW) {
                    zW = $.Oe("FORM");
                    zW.acceptCharset = "utf-8";
                    var e = zW.style;
                    e.position = "absolute";
                    e.visibility = "hidden";
                    e.top = e.left = "-10px";
                    e.width = e.height = "10px";
                    e.overflow = "hidden";
                    window.document.body.appendChild(zW)
                }
                c.Tk = zW;
                b && Qia(c.Tk, b);
                c.Tk.action = d.toString();
                c.Tk.method = "POST";
                c.aw = !0;
                c.dG = !1;
                c.KA = c.Er + "_" + (c.dia++).toString(36);
                c.ul = $.Be(c.Tk).Ac("IFRAME", {
                    name: c.KA,
                    id: c.KA
                });
                $.id && 7 > Number($.cd) && (c.ul.src = 'javascript:""');
                d = c.ul.style;
                d.visibility = "hidden";
                d.width = d.height = "10px";
                d.display = "none";
                $.wd ? d.marginTop = d.marginLeft = "-10px" : (d.position = "absolute", d.top = d.left = "-10px");
                if ($.id && !$.dd("11")) {
                    c.Tk.target = c.KA || "";
                    $.Be(c.Tk).b.body.appendChild(c.ul);
                    $.Ld(c.ul, "readystatechange", c.GW, !1, c);
                    try {
                        c.b = !1, c.Tk.submit()
                    } catch (Kb) {
                        $.Zd(c.ul, "readystatechange", c.GW, !1, c), AW(c)
                    }
                } else {
                    $.Be(c.Tk).b.body.appendChild(c.ul);
                    d = c.KA + "_inner";
                    e = qW(c.ul);
                    if (window.document.baseURI) {
                        var f =
                            $.sc(d);
                        $.ke("Short HTML snippet, input escaped, safe URL, for performance");
                        f = '<head><base href="' + $.sc(window.document.baseURI) + '"></head><body><iframe id="' + f + '" name="' + f + '"></iframe>';
                        f = $.te(f, null)
                    } else f = $.sc(d), $.ke("Short HTML snippet, input escaped, for performance"), f = $.te('<body><iframe id="' + f + '" name="' + f + '"></iframe>', null);
                    $.xd && !$.wd ? e.documentElement.innerHTML = nW(f) : e.write(nW(f));
                    $.Ld(e.getElementById(d), "load", c.bO, !1, c);
                    var h = pW("TEXTAREA", c.Tk);
                    f = 0;
                    for (var k = h.length; f < k; f++) {
                        var l =
                            h[f].value;
                        $.nf(h[f]) != l && ($.ef(h[f], l), h[f].value = l)
                    }
                    h = e.importNode(c.Tk, !0);
                    h.target = d;
                    h.action = c.Tk.action;
                    e.body.appendChild(h);
                    l = pW("SELECT", c.Tk);
                    var m = pW("SELECT", h);
                    f = 0;
                    for (k = l.length; f < k; f++)
                        for (var p = pW("OPTION", l[f]), q = pW("OPTION", m[f]), r = 0, t = p.length; r < t; r++) q[r].selected = p[r].selected;
                    l = pW("INPUT", c.Tk);
                    m = pW("INPUT", h);
                    f = 0;
                    for (k = l.length; f < k; f++)
                        if ("file" == l[f].type && l[f].value != m[f].value) {
                            c.Tk.target = d;
                            h = c.Tk;
                            break
                        }
                    try {
                        c.b = !1, h.submit(), e.close(), $.hd && $.Fj(c.s6, 250, c)
                    } catch (Kb) {
                        try {
                            var u =
                                $.ha("window.location.href");
                            if ($.z(Kb)) var v = {
                                message: Kb,
                                name: "Unknown error",
                                lineNumber: "Not available",
                                fileName: u,
                                stack: "Not available"
                            };
                            else {
                                f = !1;
                                try {
                                    var w = Kb.lineNumber || Kb.line || "Not available"
                                } catch (Sb) {
                                    w = "Not available", f = !0
                                }
                                try {
                                    var x = Kb.fileName || Kb.filename || Kb.sourceURL || $.fa.$googDebugFname || u
                                } catch (Sb) {
                                    x = "Not available", f = !0
                                }
                                v = !f && Kb.lineNumber && Kb.fileName && Kb.stack && Kb.message && Kb.name ? Kb : {
                                    message: Kb.message || "Not available",
                                    name: Kb.name || "UnknownError",
                                    lineNumber: w,
                                    fileName: x,
                                    stack: Kb.stack ||
                                        "Not available"
                                }
                            }
                            var y = v.fileName;
                            null != y || (y = "");
                            if (/^https?:\/\//i.test(y)) {
                                var B = mW(y);
                                $.ke("view-source scheme plus HTTP/HTTPS URL");
                                var G = "view-source:" + lW(B);
                                var D = $.ne(G)
                            } else {
                                var K = $.ke("sanitizedviewsrc");
                                D = $.ne(iW(K))
                            }
                            var O = oW("Message: " + v.message + "\nUrl: ");
                            u = {
                                href: D,
                                target: "_new"
                            };
                            var Q = v.fileName;
                            if (!Ria.test("a")) throw Error("Invalid tag name <a>.");
                            if ("A" in Sia) throw Error("Tag name <a> is not allowed for SafeHtml.");
                            w = null;
                            x = "";
                            if (u)
                                for (var S in u) {
                                    if (!Ria.test(S)) throw Error('Invalid attribute name "' +
                                        S + '".');
                                    var wa = u[S];
                                    if (null != wa) {
                                        D = x;
                                        y = S;
                                        B = wa;
                                        if (B instanceof $.je) B = iW(B);
                                        else if ("style" == y.toLowerCase()) B = via(B);
                                        else {
                                            if (/^on/i.test(y)) throw Error('Attribute "' + y + '" requires goog.string.Const value, "' + B + '" given.');
                                            if (y.toLowerCase() in Tia)
                                                if (B instanceof kW) B = nia(B);
                                                else if (B instanceof $.me) B = lW(B);
                                                else if ($.z(B)) B = mW(B).bu();
                                                else throw Error('Attribute "' + y + '" on tag "a" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + B + '" given.');
                                        }
                                        B.Ay && (B = B.bu());
                                        var sa = y + '="' + $.sc(String(B)) +
                                            '"';
                                        x = D + (" " + sa)
                                    }
                                }
                            var Qa = "<a" + x;
                            null != Q ? $.A(Q) || (Q = [Q]) : Q = [];
                            if (!0 === Uia.a) Qa += ">";
                            else {
                                var wb = wia(Q);
                                Qa += ">" + nW(wb) + "</a>";
                                w = wb.b()
                            }
                            var oc = u && u.dir;
                            oc && (/^(ltr|rtl|auto)$/i.test(oc) ? w = 0 : w = null);
                            var hb = $.te(Qa, w);
                            var Rb = wia(O, hb, oW("\nLine: " + v.lineNumber + "\n\nBrowser stack:\n" + v.stack + "-> [end]\n\nJS stack traversal:\n" + kia(void 0) + "-> "))
                        } catch (Sb) {
                            Rb = oW("Exception trying to expose exception! You win, we lose. " + Sb)
                        }
                        nW(Rb);
                        $.Zd(e.getElementById(d), "load", c.bO, !1, c);
                        e.close();
                        AW(c)
                    }
                }
                BW(c)
            };
            Qia = function (a, b) {
                var c = $.Be(a);
                Cia(b, function (b, e) {
                    $.A(b) || (b = [b]);
                    (0, $.Re)(b, function (b) {
                        b = c.Ac("INPUT", {
                            type: "hidden",
                            name: e,
                            value: b
                        });
                        a.appendChild(b)
                    })
                })
            };
            Via = function (a, b) {
                a.dG = !0;
                a.aw = !1;
                var c, d;
                c || "function" != typeof a.i || (d = a.i(b)) && (c = 4);
                c ? AW(a) : (a.dispatchEvent("complete"), a.dispatchEvent("success"), DW(a))
            };
            AW = function (a) {
                a.b || (a.aw = !1, a.dG = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"), DW(a), a.b = !0)
            };
            DW = function (a) {
                Wia(a);
                BW(a);
                a.Tk = null;
                a.dispatchEvent("ready")
            };
            Wia = function (a) {
                var b = a.ul;
                b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.f.push(b));
                a.JA && ($.Gj(a.JA), a.JA = null);
                $.hd || $.xd && !$.wd ? a.JA = $.Fj(a.Y0, 2E3, a) : a.Y0();
                a.ul = null;
                a.KA = null
            };
            BW = function (a) {
                a.Tk && a.Tk == zW && $.We(a.Tk)
            };
            EW = function (a) {
                return a.ul ? $.id && !$.dd("11") ? a.ul : qW(a.ul).getElementById(a.KA + "_inner") : null
            };
            Xia = function () { };
            Zia = function (a) {
                var b;
                (b = a.b) || (b = {}, Yia(a) && (b[0] = !0, b[1] = !0), b = a.b = b);
                return b
            };
            $ia = function () { };
            aja = function (a) {
                return (a = Yia(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
            };
            Yia = function (a) {
                if (!a.f && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
                    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                        var d = b[c];
                        try {
                            return new window.ActiveXObject(d), a.f = d
                        } catch (e) { }
                    }
                    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
                }
                return a.f
            };
            FW = function (a) {
                $.tf.call(this);
                this.headers = new $.cC;
                this.ba = a || null;
                this.f = !1;
                this.aa = this.b = null;
                this.na = "";
                this.i = 0;
                this.D = "";
                this.j = this.Ca = this.K = this.ea = !1;
                this.G = 0;
                this.P = null;
                this.Za = bja;
                this.Ia = this.Ja = !1
            };
            $.MW = function (a, b, c, d, e, f, h) {
                var k = new FW;
                cja.push(k);
                b && k.va("complete", b);
                k.De("ready", k.Bda);
                f && (k.G = Math.max(0, f));
                h && (k.Ja = h);
                dja(k, a, c, d, e)
            };
            dja = function (a, b, c, d, e) {
                if (a.b) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.na + "; newUri=" + b);
                c = c ? c.toUpperCase() : "GET";
                a.na = b;
                a.D = "";
                a.i = 0;
                a.ea = !1;
                a.f = !0;
                a.b = a.ba ? aja(a.ba) : aja(NW);
                a.aa = a.ba ? Zia(a.ba) : Zia(NW);
                a.b.onreadystatechange = (0, $.pa)(a.t4, a);
                try {
                    a.Ca = !0, a.b.open(c, String(b), !0), a.Ca = !1
                } catch (h) {
                    a.Kv(5, h);
                    return
                }
                b = d || "";
                var f = a.headers.clone();
                e && Cia(e, function (a, b) {
                    f.set(b, a)
                });
                e = $.ya(f.Xt(), eja);
                d = $.fa.FormData && b instanceof $.fa.FormData;
                !$.Aa(fja, c) || e || d || f.set("Content-Type",
                    "application/x-www-form-urlencoded;charset=utf-8");
                f.forEach(function (a, b) {
                    this.b.setRequestHeader(b, a)
                }, a);
                a.Za && (a.b.responseType = a.Za);
                "withCredentials" in a.b && a.b.withCredentials !== a.Ja && (a.b.withCredentials = a.Ja);
                try {
                    gja(a), 0 < a.G && (a.Ia = hja(a.b), a.Ia ? (a.b.timeout = a.G, a.b.ontimeout = (0, $.pa)(a.y6, a)) : a.P = $.Fj(a.y6, a.G, a)), a.K = !0, a.b.send(b), a.K = !1
                } catch (h) {
                    a.Kv(5, h)
                }
            };
            hja = function (a) {
                return $.id && $.dd(9) && $.ea(a.timeout) && $.n(a.ontimeout)
            };
            eja = function (a) {
                return "content-type" == a.toLowerCase()
            };
            ija = function (a) {
                a.ea || (a.ea = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
            };
            jja = function (a) {
                if (a.f && "undefined" != typeof $.SD && (!a.aa[1] || 4 != OW(a) || 2 != PW(a)))
                    if (a.K && 4 == OW(a)) $.Fj(a.t4, 0, a);
                    else if (a.dispatchEvent("readystatechange"), a.RH()) {
                        a.f = !1;
                        try {
                            if ($.QW(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
                            else {
                                a.i = 6;
                                try {
                                    var b = 2 < OW(a) ? a.b.statusText : ""
                                } catch (c) {
                                    b = ""
                                }
                                a.D = b + " [" + PW(a) + "]";
                                ija(a)
                            }
                        } finally {
                            RW(a)
                        }
                    }
            };
            RW = function (a, b) {
                if (a.b) {
                    gja(a);
                    var c = a.b,
                        d = a.aa[0] ? $.ia : null;
                    a.b = null;
                    a.aa = null;
                    b || a.dispatchEvent("ready");
                    try {
                        c.onreadystatechange = d
                    } catch (e) { }
                }
            };
            gja = function (a) {
                a.b && a.Ia && (a.b.ontimeout = null);
                a.P && ($.Gj(a.P), a.P = null)
            };
            $.QW = function (a) {
                var b = PW(a);
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                }
                if (!c) {
                    if (b = 0 === b) a = String(a.na).match(Hia)[1] || null, !a && $.fa.self && $.fa.self.location && (a = $.fa.self.location.protocol, a = a.substr(0, a.length - 1)), b = !kja.test(a ? a.toLowerCase() : "");
                    c = b
                }
                return c
            };
            OW = function (a) {
                return a.b ? a.b.readyState : 0
            };
            PW = function (a) {
                try {
                    return 2 < OW(a) ? a.b.status : -1
                } catch (b) {
                    return -1
                }
            };
            $.SW = function (a) {
                if (a.b) return $.no(a.b.responseText)
            };
            $.TW = function (a) {
                return $.z(a.D) ? a.D : String(a.D)
            };
            lja = function (a, b, c) {
                var d = a.width() / a.height();
                b = $.n(b) ? b : c ? Math.round(c * d) : a.width();
                c = $.n(c) ? c : b ? Math.round(b / d) : a.height();
                return {
                    width: b,
                    height: c
                }
            };
            VW = function (a, b, c, d, e, f) {
                c && (b.responseType = "base64");
                d && (b.save = !0);
                var h = f || $.ia,
                    k = d ? "url" : "result";
                b = Mia(new $.cC(b));
                $.MW(UW + "/" + a, function (a) {
                    a = a.target;
                    $.QW(a) ? e($.SW(a)[k]) : h($.TW(a))
                }, "POST", b.toString())
            };
            WW = function (a, b, c, d, e, f) {
                c = lja(a, c, d);
                b.data = a.Nq(c.width, c.height);
                b.dataType = "svg";
                b.responseType = "file";
                b.width = c.width;
                b.height = c.height;
                $.n(e) && (b.quality = e);
                $.n(f) && (b["file-name"] = f)
            };
            XW = function (a, b, c, d, e, f, h) {
                c = lja(a, c, d);
                b.data = a.Nq(c.width, c.height);
                b.dataType = "svg";
                b.responseType = "file";
                b.width = c.width;
                b.height = c.height;
                $.n(e) && (b.quality = e);
                $.n(f) && (b["force-transparent-white"] = f);
                $.n(h) && (b["file-name"] = h)
            };
            YW = function (a, b, c, d, e) {
                b.data = a.Nq(c, d);
                b.dataType = "svg";
                b.responseType = "file";
                $.n(e) && (b["file-name"] = e)
            };
            $W = function (a, b, c, d, e, f, h) {
                var k = null;
                $.n(c) ? $.ea(c) ? (b["pdf-width"] = c, b["pdf-height"] = $.ea(d) ? d : a.height()) : $.z(c) ? (b["pdf-size"] = c || "a4", b.landscape = !!d, k = ZW[b["pdf-size"]], b.landscape && (k = {
                    width: k.height,
                    height: k.width
                })) : (b["pdf-width"] = a.width(), b["pdf-height"] = a.height()) : (b["pdf-width"] = a.width(), b["pdf-height"] = a.height());
                $.n(e) && (b["pdf-x"] = e);
                $.n(f) && (b["pdf-y"] = f);
                $.n(h) && (b["file-name"] = h);
                k ? (c = k.width, k = k.height, d = a.width(), h = a.height(), k = c < k ? [c, c / d * h] : c > k ? [k / h * d, k] : [c, k], k[0] -= e || 0,
                    k[1] -= f || 0, a = a.Nq(k[0], k[1])) : a = a.Nq(b["pdf-width"], b["pdf-height"]);
                b.data = a;
                b.dataType = "svg";
                b.responseType = "file"
            };
            aX = function (a, b, c, d, e) {
                if ("svg" == $.lk) {
                    var f = {};
                    WW(a, f, b, c, d, e);
                    CW(UW + "/png", f)
                } else (0, window.alert)($.kd(15))
            };
            bX = function (a, b, c, d, e, f) {
                if ("svg" == $.lk) {
                    var h = {};
                    XW(a, h, b, c, d, e, f);
                    CW(UW + "/jpg", h)
                } else (0, window.alert)($.kd(15))
            };
            cX = function (a, b, c, d, e, f) {
                if ("svg" == $.lk) {
                    var h = {};
                    $W(a, h, b, c, d, e, f);
                    CW(UW + "/pdf", h)
                } else (0, window.alert)($.kd(15))
            };
            dX = function (a, b, c, d) {
                if ("svg" == $.lk) {
                    var e = {};
                    YW(a, e, b, c, d);
                    CW(UW + "/svg", e)
                } else (0, window.alert)($.kd(15))
            };
            mja = function (a) {
                var b = "";
                a && (b = (new window.XMLSerializer).serializeToString(a));
                return b
            };
            eX = function () {
                this.b = {};
                this.i = {};
                this.G = {};
                this.j = {};
                this.D = {};
                this.ea = ["svg2pdf.min.js", "jspdf.min.js", "canvg.min.js", "xlsx.core.min.js"];
                this.g3 = !1;
                this.K = {}
            };
            nja = function (a) {
                var b = fX,
                    c = $.fa.anychart.exports;
                if (c.g3) return zia();
                var d = b.ea,
                    e = c.ic(a, "clientside").path;
                e += $.hc(e, "/") ? "" : "/";
                a = [];
                for (var f = 0; f < d.length; f++) b = new $.qj(function (a, b) {
                    var c = e + d[f],
                        h = $.Te(window.document, "script");
                    h.setAttribute("src", c);
                    h.onload = h.onreadystatechange = function () {
                        $.hl("info", "Loaded external exporting script " + c);
                        a()
                    };
                    h.onerror = function () {
                        $.hl("warn", "Failed tp load external script " + c);
                        b()
                    };
                    $.Op.head.appendChild(h)
                }), a.push(b);
                return yia(a).then(function () {
                    c.g3 = !0
                })
            };
            gX = function (a, b, c) {
                if ($.C(c)) {
                    var d = {};
                    $.Gc(c, function (a, b) {
                        $.n(a) && (d[b] = a)
                    });
                    $.Nc(d) || (a[b] = d)
                } else $.n(c) && (a[b] = c)
            };
            oja = function (a, b, c, d) {
                eia(nja(a).then(function () {
                    var a = $.fa.XLSX,
                        d = a.utils,
                        h = $.Um().mC(b),
                        k = d.book_new();
                    h = d.aoa_to_sheet(h);
                    d.book_append_sheet(k, h, "data");
                    a = a.write(k, {
                        type: "array"
                    });
                    hX(new window.Blob([a], {
                        type: iX.xlsx
                    }), c, "xlsx")
                }), function () {
                    d()
                })
            };
            pja = function (a, b, c, d) {
                var e = c.paperSize,
                    f = c.landscape,
                    h = c.x || 0,
                    k = c.y || 0,
                    l = c.filename || "anychart";
                l += ".pdf";
                try {
                    if ($.n(e) || $.n(f)) {
                        var m = cW(e, f);
                        if ($.z(e)) {
                            var p = ZW[e].width;
                            var q = ZW[e].height;
                            if (f && q > p || !f && q < p) p = [q, q = p][0]
                        } else p = (0, window.parseFloat)(m.width), q = (0, window.parseFloat)(m.height);
                        var r = new $.fa.jsPDF(f ? "l" : "p", "pt", e || [p, q]);
                        $.z(b) ? r.addImage(b, "png", h, k, p, q) : $.fa.svg2pdf(b, r, {
                            xOffset: h,
                            yOffset: k,
                            scale: 1
                        })
                    } else {
                        var t = a.width(),
                            u = a.height();
                        r = new $.fa.jsPDF(t > u ? "l" : "p", "pt", [t, u]);
                        $.z(b) ?
                            r.addImage(b, "png", h, k, t, u) : $.fa.svg2pdf(b, r, {
                                xOffset: h,
                                yOffset: k,
                                scale: 1
                            })
                    }
                    r.save(l)
                } catch (v) {
                    d(c)
                }
            };
            jX = function (a, b, c, d, e, f, h) {
                var k = iX[c],
                    l = $.Te(window.document, "canvas");
                l.width = d;
                l.height = e;
                $.yf(l, {
                    width: d,
                    height: e,
                    visibility: "hidden",
                    position: "fixed",
                    right: 0,
                    bottom: 0
                });
                $.Op.body.appendChild(l);
                var m = l.getContext("2d"),
                    p = new window.Image,
                    q = b.quality || .92;
                a.setAttribute("width", d);
                a.setAttribute("height", e);
                var r = (new window.XMLSerializer).serializeToString(a),
                    t = lia(new window.Blob([r], {
                        type: "image/svg+xml"
                    }));
                p.onload = function () {
                    try {
                        if (l.msToBlob && m.drawSvg) {
                            m.drawSvg(r, 0, 0, d, e);
                            var a = l.toDataURL(k,
                                q)
                        } else m.drawImage(p, 0, 0, d, e), a = l.toDataURL(k, q);
                        f(a);
                        $.Ye(l);
                        jW().revokeObjectURL(t)
                    } catch (v) {
                        h(b)
                    }
                };
                p.src = t
            };
            qja = function (a, b, c, d, e, f, h) {
                function k(a) {
                    hX(a, l, c)
                }
                var l = d.filename || "anychart",
                    m = 0 < b.getElementsByTagName("image").length;
                try {
                    switch (c) {
                        case "svg":
                            var p = (new window.XMLSerializer).serializeToString(b);
                            hX(new window.Blob([p], {
                                type: "image/svg+xml"
                            }), l, c);
                            break;
                        case "png":
                            jX(b, d, c, e, f, k, h);
                            break;
                        case "jpg":
                            jX(b, d, c, e, f, k, h);
                            break;
                        case "pdf":
                            m ? jX(b, d, c, e, f, function (b) {
                                pja(a, b, d, h)
                            }, h) : pja(a, b, d, h)
                    }
                } catch (q) {
                    h(d)
                }
            };
            kX = function (a, b, c, d) {
                eia(nja(a).then(function () {
                    function e(a) {
                        var b = a.getAttribute("href"),
                            c = new window.Image,
                            d = (0, window.parseFloat)(a.getAttribute("width")),
                            e = (0, window.parseFloat)(a.getAttribute("height"));
                        d = d || 1;
                        e = e || 1;
                        c.onload = function () {
                            var b = $.Te(window.document, "CANVAS");
                            $.Op.body.appendChild(b);
                            var h = b.getContext("2d");
                            b.width = d;
                            b.height = e;
                            h.drawImage(c, 0, 0, d, e);
                            h = b.toDataURL();
                            a.setAttribute("href", h);
                            a.setAttribute("src", h);
                            u++;
                            u == v.length && f();
                            $.Ye(b)
                        };
                        c.crossOrigin = "anonymous";
                        c.src =
                            b
                    }

                    function f() {
                        qja(h, t, b, c, m, p, d)
                    }
                    var h = $.J(a, $.Zj) ? a : a.O().Ka(),
                        k = c.paperSize,
                        l = c.landscape;
                    if ($.z(k)) {
                        var m = ZW[k].width;
                        var p = ZW[k].height
                    } else m = c.width || h.width(), p = c.height || h.height();
                    var q = h.width(),
                        r = h.height();
                    "pdf" == b && $.z(k) && (l && p > m || !l && p < m) && (m = [p, p = m][0]);
                    h.resize(m, p);
                    var t = h.ia().cloneNode(!0);
                    h.resize($.z(q) ? q : "100%", $.z(r) ? r : "100%");
                    t.setAttribute("width", m);
                    t.setAttribute("height", p);
                    var u = 0,
                        v = t.getElementsByTagName("image");
                    k = $.Aa(["png", "jpg", "pdf"], b);
                    try {
                        if (0 < v.length) {
                            if (($.Fc("Trident") ||
                                $.Fc("MSIE")) && k) throw "Internet explorer can't export chart with images to pdf, jpg or png";
                            for (k = 0; k < v.length; k++) e(v[k])
                        } else f()
                    } catch (w) {
                        d(c)
                    }
                }), function () {
                    d(c)
                })
            };
            hX = function (a, b, c) {
                var d = $.Te(window.document, "a");
                if ($.z(a)) {
                    var e = (0, window.atob)(a.split(",")[1]);
                    a = a.split(",")[0].split(":")[1].split(";")[0];
                    for (var f = new window.ArrayBuffer(e.length), h = new window.Uint8Array(f), k = 0; k < e.length; k++) h[k] = e.charCodeAt(k);
                    e = new window.Blob([f], {
                        type: a
                    })
                } else e = a;
                b = b + "." + c;
                c = lia(e);
                $.n(d.download) ? ($.Op.body.appendChild(d), d.href = c, d.download = b, d.click(), $.Ye(d)) : $.n($.fa.navigator.msSaveOrOpenBlob) ? $.fa.navigator.msSaveOrOpenBlob(e, b) : $.Pp.open(c, b);
                jW().revokeObjectURL(c)
            };
            $.cC.prototype.ys = $.ca(29, function () {
                $.eC(this);
                for (var a = [], b = 0; b < this.b.length; b++) a.push(this.f[this.b[b]]);
                return a
            });
            $.me.prototype.b = $.ca(2, function () {
                return 1
            });
            $.se.prototype.b = $.ca(1, function () {
                return this.i
            });
            var bW = {
                "us-letter": {
                    width: "215.9mm",
                    height: "279.4mm"
                },
                a0: {
                    width: "841mm",
                    height: "1189mm"
                },
                a1: {
                    width: "594mm",
                    height: "841mm"
                },
                a2: {
                    width: "420mm",
                    height: "594mm"
                },
                a3: {
                    width: "297mm",
                    height: "420mm"
                },
                a4: {
                    width: "210mm",
                    height: "297mm"
                },
                a5: {
                    width: "148mm",
                    height: "210mm"
                },
                a6: {
                    width: "105mm",
                    height: "148mm"
                }
            },
                eW = null,
                gW = null,
                fia = 5,
                hW = {},
                Uia = {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    command: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                },
                mia = {};
            kW.prototype.Ay = !0;
            kW.prototype.bu = function () {
                return ""
            };
            kW.prototype.dV = !0;
            kW.prototype.b = function () {
                return 1
            };
            var oia = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
                ria = /^[-,."'%_!# a-zA-Z0-9]+$/,
                Ria = /^[a-zA-Z0-9-]+$/,
                Tia = {
                    action: !0,
                    cite: !0,
                    data: !0,
                    formaction: !0,
                    href: !0,
                    manifest: !0,
                    poster: !0,
                    src: !0
                },
                Sia = {
                    APPLET: !0,
                    BASE: !0,
                    EMBED: !0,
                    IFRAME: !0,
                    LINK: !0,
                    MATH: !0,
                    META: !0,
                    OBJECT: !0,
                    SCRIPT: !0,
                    STYLE: !0,
                    SVG: !0,
                    TEMPLATE: !0
                },
                ZW = {
                    a0: {
                        width: 2384,
                        height: 3370
                    },
                    a1: {
                        width: 1684,
                        height: 2384
                    },
                    a2: {
                        width: 1191,
                        height: 1684
                    },
                    a3: {
                        width: 842,
                        height: 1191
                    },
                    a4: {
                        width: 595,
                        height: 842
                    },
                    a5: {
                        width: 420,
                        height: 595
                    },
                    a6: {
                        width: 297,
                        height: 420
                    },
                    a7: {
                        width: 210,
                        height: 297
                    },
                    a8: {
                        width: 48,
                        height: 210
                    },
                    a9: {
                        width: 105,
                        height: 148
                    },
                    b0: {
                        width: 2834,
                        height: 4008
                    },
                    b1: {
                        width: 2004,
                        height: 2834
                    },
                    b2: {
                        width: 1417,
                        height: 2004
                    },
                    b3: {
                        width: 1E3,
                        height: 1417
                    },
                    b4: {
                        width: 708,
                        height: 1E3
                    },
                    b5: {
                        width: 498,
                        height: 708
                    },
                    b6: {
                        width: 354,
                        height: 498
                    },
                    b7: {
                        width: 249,
                        height: 354
                    },
                    b8: {
                        width: 175,
                        height: 249
                    },
                    b9: {
                        width: 124,
                        height: 175
                    },
                    "arch-a": {
                        width: 648,
                        height: 864
                    },
                    "arch-b": {
                        width: 864,
                        height: 1296
                    },
                    "arch-c": {
                        width: 1296,
                        height: 1728
                    },
                    "arch-d": {
                        width: 1728,
                        height: 2592
                    },
                    "arch-e": {
                        width: 2592,
                        height: 3456
                    },
                    "crown-octavo": {
                        width: 348,
                        height: 527
                    },
                    "crown-quarto": {
                        width: 535,
                        height: 697
                    },
                    "demy-octavo": {
                        width: 391,
                        height: 612
                    },
                    "demy-quarto": {
                        width: 620,
                        height: 782
                    },
                    "royal-octavo": {
                        width: 442,
                        height: 663
                    },
                    "royal-quarto": {
                        width: 671,
                        height: 884
                    },
                    executive: {
                        width: 522,
                        height: 756
                    },
                    halfletter: {
                        width: 396,
                        height: 612
                    },
                    ledger: {
                        width: 1224,
                        height: 792
                    },
                    legal: {
                        width: 612,
                        height: 1008
                    },
                    letter: {
                        width: 612,
                        height: 792
                    },
                    tabloid: {
                        width: 792,
                        height: 1224
                    }
                };
            var Hia = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
            $.sW.prototype.toString = function () {
                var a = [],
                    b = this.i;
                b && a.push(vW(b, rja, !0), ":");
                var c = this.j;
                if (c || "file" == b) a.push("//"), (b = this.K) && a.push(vW(b, rja, !0), "@"), a.push((0, window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.G, null != c && a.push(":", String(c));
                if (c = this.Sc) this.j && "/" != c.charAt(0) && a.push("/"), a.push(vW(c, "/" == c.charAt(0) ? sja : tja, !0));
                (c = this.f.toString()) && a.push("?", c);
                (c = this.D) && a.push("#", vW(c, uja));
                return a.join("")
            };
            $.sW.prototype.clone = function () {
                return new $.sW(this)
            };
            var rja = /[#\/\?@]/g,
                tja = /[#\?:]/g,
                sja = /[#\?]/g,
                Jia = /[#\?@]/g,
                uja = /#/g;
            $.g = uW.prototype;
            $.g.add = function (a, b) {
                wW(this);
                this.i = null;
                a = xW(this, a);
                var c = this.b.get(a);
                c || this.b.set(a, c = []);
                c.push(b);
                this.f += 1;
                return this
            };
            $.g.remove = function (a) {
                wW(this);
                a = xW(this, a);
                return $.dC(this.b.f, a) ? (this.i = null, this.f -= this.b.get(a).length, this.b.remove(a)) : !1
            };
            $.g.clear = function () {
                this.b = this.i = null;
                this.f = 0
            };
            $.g.Tj = function () {
                wW(this);
                return 0 == this.f
            };
            $.g.forEach = function (a, b) {
                wW(this);
                this.b.forEach(function (c, d) {
                    (0, $.Re)(c, function (c) {
                        a.call(b, c, d, this)
                    }, this)
                }, this)
            };
            $.g.Xt = function () {
                wW(this);
                for (var a = this.b.ys(), b = this.b.Xt(), c = [], d = 0; d < b.length; d++)
                    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
                return c
            };
            $.g.ys = function (a) {
                wW(this);
                var b = [];
                if ($.z(a)) Nia(this, a) && (b = $.Ga(b, this.b.get(xW(this, a))));
                else {
                    a = this.b.ys();
                    for (var c = 0; c < a.length; c++) b = $.Ga(b, a[c])
                }
                return b
            };
            $.g.set = function (a, b) {
                wW(this);
                this.i = null;
                a = xW(this, a);
                Nia(this, a) && (this.f -= this.b.get(a).length);
                this.b.set(a, [b]);
                this.f += 1;
                return this
            };
            $.g.get = function (a, b) {
                if (!a) return b;
                var c = this.ys(a);
                return 0 < c.length ? String(c[0]) : b
            };
            $.g.toString = function () {
                if (this.i) return this.i;
                if (!this.b) return "";
                for (var a = [], b = this.b.Xt(), c = 0; c < b.length; c++) {
                    var d = b[c],
                        e = (0, window.encodeURIComponent)(String(d));
                    d = this.ys(d);
                    for (var f = 0; f < d.length; f++) {
                        var h = e;
                        "" !== d[f] && (h += "=" + (0, window.encodeURIComponent)(String(d[f])));
                        a.push(h)
                    }
                }
                return this.i = a.join("&")
            };
            $.g.clone = function () {
                var a = new uW;
                a.i = this.i;
                this.b && (a.b = this.b.clone(), a.f = this.f);
                return a
            };
            var zW;
            $.H(yW, $.tf);
            var Pia = {},
                Oia = 0;
            $.g = yW.prototype;
            $.g.Tk = null;
            $.g.ul = null;
            $.g.KA = null;
            $.g.dia = 0;
            $.g.aw = !1;
            $.g.dG = !1;
            $.g.JA = null;
            $.g.abort = function () {
                this.aw && ($.ce(EW(this)), this.aw = this.dG = !1, this.dispatchEvent("abort"), DW(this))
            };
            $.g.R = function () {
                this.aw && this.abort();
                yW.u.R.call(this);
                this.ul && Wia(this);
                BW(this);
                delete this.i;
                this.Tk = null;
                delete Pia[this.Er]
            };
            $.g.RH = function () {
                return this.dG
            };
            $.g.uq = function () {
                return this.aw
            };
            $.g.GW = function () {
                if ("complete" == this.ul.readyState) {
                    $.Zd(this.ul, "readystatechange", this.GW, !1, this);
                    try {
                        var a = qW(this.ul);
                        if ($.id && "about:blank" == a.location && !window.navigator.onLine) {
                            AW(this);
                            return
                        }
                    } catch (b) {
                        AW(this);
                        return
                    }
                    Via(this, a)
                }
            };
            $.g.bO = function () {
                if (!$.xd || $.wd || "about:blank" != (this.ul ? qW(EW(this)) : null).location) {
                    $.Zd(EW(this), "load", this.bO, !1, this);
                    try {
                        Via(this, this.ul ? qW(EW(this)) : null)
                    } catch (a) {
                        AW(this)
                    }
                }
            };
            $.g.Y0 = function () {
                this.JA && ($.Gj(this.JA), this.JA = null);
                for (; 0 != this.f.length;) {
                    var a = this.f.pop();
                    $.Ye(a)
                }
            };
            $.g.s6 = function () {
                if (this.aw) {
                    var a = this.ul ? qW(EW(this)) : null;
                    a && !$.ad(a, "documentUri") ? ($.Zd(EW(this), "load", this.bO, !1, this), AW(this)) : $.Fj(this.s6, 250, this)
                }
            };
            Xia.prototype.b = null;
            var NW;
            $.H($ia, Xia);
            NW = new $ia;
            $.H(FW, $.tf);
            var bja = "",
                kja = /^https?$/i,
                fja = ["POST", "PUT"],
                cja = [];
            $.g = FW.prototype;
            $.g.Bda = function () {
                this.ld();
                $.Fa(cja, this)
            };
            $.g.y6 = function () {
                "undefined" != typeof $.SD && this.b && (this.D = "Timed out after " + this.G + "ms, aborting", this.i = 8, this.dispatchEvent("timeout"), this.abort(8))
            };
            $.g.Kv = function (a, b) {
                this.f = !1;
                this.b && (this.j = !0, this.b.abort(), this.j = !1);
                this.D = b;
                this.i = a;
                ija(this);
                RW(this)
            };
            $.g.abort = function (a) {
                this.b && this.f && (this.f = !1, this.j = !0, this.b.abort(), this.j = !1, this.i = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), RW(this))
            };
            $.g.R = function () {
                this.b && (this.f && (this.f = !1, this.j = !0, this.b.abort(), this.j = !1), RW(this, !0));
                FW.u.R.call(this)
            };
            $.g.t4 = function () {
                this.md || (this.Ca || this.K || this.j ? jja(this) : this.Tia())
            };
            $.g.Tia = function () {
                jja(this)
            };
            $.g.uq = function () {
                return !!this.b
            };
            $.g.RH = function () {
                return 4 == OW(this)
            };
            var UW = "//export.anychart.com";
            $.g = $.Zj.prototype;
            $.g.pla = function (a) {
                return $.n(a) ? (this.iy = (this.R6 = !!a) ? $.Ch.anychart.exports : null, this) : !!this.R6
            };
            $.g.Gu = function (a, b, c, d, e, f, h) {
                if ("svg" == $.lk) {
                    var k = {};
                    WW(this, k, d, e, f, h);
                    VW("png", k, !!c, !0, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.CB = function (a, b, c, d, e, f, h, k) {
                if ("svg" == $.lk) {
                    var l = {};
                    XW(this, l, d, e, f, h, k);
                    VW("jpg", l, !!c, !0, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.EB = function (a, b, c, d, e, f) {
                if ("svg" == $.lk) {
                    var h = {};
                    YW(this, h, d, e, f);
                    VW("svg", h, !!c, !0, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.DB = function (a, b, c, d, e, f, h, k) {
                if ("svg" == $.lk) {
                    var l = {};
                    $W(this, l, d, e, f, h, k);
                    VW("pdf", l, !!c, !0, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.yA = function (a, b, c, d, e) {
                if ("svg" == $.lk) {
                    var f = {};
                    WW(this, f, c, d, e);
                    VW("png", f, !0, !1, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.wA = function (a, b, c, d, e, f) {
                if ("svg" == $.lk) {
                    var h = {};
                    XW(this, h, c, d, e, f);
                    VW("jpg", h, !0, !1, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.AA = function (a, b, c, d) {
                if ("svg" == $.lk) {
                    var e = {};
                    YW(this, e, c, d);
                    VW("svg", e, !0, !1, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.xA = function (a, b, c, d, e, f) {
                if ("svg" == $.lk) {
                    var h = {};
                    $W(this, h, c, d, e, f);
                    VW("pdf", h, !0, !1, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.Du = function (a, b, c, d) {
                this.iy ? this.iy.Du(this, this, a, b, c, d) : aX(this, a, b, c, d)
            };
            $.g.Xw = function (a, b, c, d, e) {
                this.iy ? this.iy.saveAsJpg(this, this, a, b, c, d, e) : bX(this, a, b, c, d, e)
            };
            $.g.Yw = function (a, b, c, d, e) {
                this.iy ? this.iy.saveAsPdf(this, this, a, b, c, d, e) : cX(this, a, b, c, d, e)
            };
            $.g.Zw = function (a, b, c) {
                this.iy ? this.iy.saveAsSvg(this, this, a, b, c) : dX(this, a, b, c)
            };
            $.g.print = function (a, b) {
                if ($.n(a) || $.n(b)) {
                    var c = cW(a, b, "us-letter"),
                        d = gia(this.zY()).contentWindow.document;
                    dW("html, body {height: 100%; overflow: hidden}", d);
                    var e = $.Oe("DIV");
                    $.yf(e, {
                        width: c.width,
                        height: c.height
                    });
                    d.body.appendChild(e);
                    c = this.width();
                    d = this.height();
                    var f = $.Yf(e);
                    this.resize(f.width, f.height);
                    f = this.ia();
                    "svg" == f.tagName && f.cloneNode ? (f = f.cloneNode(!0), e.appendChild(f)) : $.mk(e).data(this.data());
                    this.resize(c, d)
                } else e = gia(this.zY()).contentWindow.document, d = this.ia(), "svg" ==
                    d.tagName ? d.cloneNode ? c = d.cloneNode(!0) : (d = $.mk(e.body), d.data(this.data()), c = d.ia()) : (d = $.mk(e.body), d.data(this.data())), d = $.ng(), f = c, d.lc(f, "width", "100%"), d.lc(f, "height", "100%"), d.lc(f, "viewBox", "0 0 " + this.width() + " " + this.height()), $.yf(f, "width", "100%"), $.yf(f, "height", ""), $.yf(f, "max-height", "100%"), e.body.appendChild(c);
                hia()
            };
            $.g.Nq = function (a, b) {
                if ("svg" != $.lk) return "";
                if ($.n(a) || $.n(b)) {
                    var c = cW(a, b);
                    var d = $.cf(this.ia()),
                        e = $.Af(d, "width");
                    d = $.Af(d, "height");
                    this.resize(c.width, c.height);
                    c = mja(this.ia());
                    this.resize(e, d)
                } else $.ng().aP(this.ia(), this.width(), this.height()), c = mja(this.ia()), $.ng().aP(this.ia(), "100%", "100%");
                return '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' + c
            };
            $.F("acgraph.server", function (a) {
                $.n(a) && (UW = a);
                return UW
            });
            var lX = $.Zj.prototype;
            lX.useAnychartExporting = lX.pla;
            lX.saveAsPNG = lX.Du;
            lX.saveAsJPG = lX.Xw;
            lX.saveAsPDF = lX.Yw;
            lX.saveAsSVG = lX.Zw;
            lX.saveAsPng = lX.Du;
            lX.saveAsJpg = lX.Xw;
            lX.saveAsPdf = lX.Yw;
            lX.saveAsSvg = lX.Zw;
            lX.shareAsPng = lX.Gu;
            lX.shareAsJpg = lX.CB;
            lX.shareAsPdf = lX.DB;
            lX.shareAsSvg = lX.EB;
            lX.getPngBase64String = lX.yA;
            lX.getJpgBase64String = lX.wA;
            lX.getSvgBase64String = lX.AA;
            lX.getPdfBase64String = lX.xA;
            lX.print = lX.print;
            lX.toSvg = lX.Nq;
            $.g = eX.prototype;
            $.g.u0 = function (a) {
                return "object" == $.ka(a) ? ($.ra(this.K, a), this) : this.K
            };
            $.g.filename = function (a) {
                $.n(a) && (this.aa = a);
                return this.aa
            };
            $.g.vk = function (a, b) {
                return this.b = rW({
                    width: a,
                    height: b
                }, a, this.b)
            };
            $.g.v1 = function (a, b, c, d, e, f, h) {
                return this.i = rW({
                    caption: a,
                    link: b,
                    name: c,
                    description: d,
                    width: e,
                    height: f,
                    appId: h
                }, a, this.i)
            };
            $.g.O6 = function (a, b, c) {
                return this.G = rW({
                    url: a,
                    width: b,
                    height: c
                }, a, this.G)
            };
            $.g.D3 = function (a, b, c, d) {
                return this.j = rW({
                    caption: a,
                    description: b,
                    width: c,
                    height: d
                }, a, this.j)
            };
            $.g.B4 = function (a, b, c, d) {
                return this.D = rW({
                    link: a,
                    description: b,
                    width: c,
                    height: d
                }, a, this.D)
            };
            $.g.NK = function () {
                this.aa = "anychart";
                this.b = {
                    width: void 0,
                    height: void 0
                };
                this.i = {
                    caption: $.ll.location ? $.ll.location.hostname : "",
                    link: void 0,
                    name: void 0,
                    description: void 0,
                    appId: 0x42607363aa4b7,
                    width: 1200,
                    height: 630
                };
                this.G = {
                    url: "https://export.anychart.com/sharing/twitter",
                    width: 1024,
                    height: 800
                };
                this.j = {
                    caption: "AnyChart",
                    description: void 0,
                    width: 1200,
                    height: 630
                };
                this.D = {
                    link: void 0,
                    description: void 0,
                    width: 1200,
                    height: 800
                };
                this.K = {
                    path: "https://cdn.anychart.com/3rd/",
                    enabled: !0,
                    fallback: !0
                }
            };
            $.g.F = function () {
                var a = {};
                gX(a, "filename", this.aa);
                gX(a, "image", this.b);
                gX(a, "facebook", this.i);
                gX(a, "twitter", this.G);
                gX(a, "linkedin", this.j);
                gX(a, "pinterest", this.D);
                gX(a, "clientside", this.K);
                return a
            };
            $.g.U = function (a) {
                this.filename(a.filename);
                this.vk(a.image);
                this.v1(a.facebook);
                this.O6(a.twitter);
                this.D3(a.linkedin);
                this.B4(a.pinterest);
                this.u0(a.clientside)
            };
            var mX = eX.prototype;
            mX.filename = mX.filename;
            mX.image = mX.vk;
            mX.facebook = mX.v1;
            mX.twitter = mX.O6;
            mX.linkedin = mX.D3;
            mX.pinterest = mX.B4;
            mX.clientside = mX.u0;
            var iX = {
                png: "image/png",
                jpg: "image/jpeg",
                svg: "image/svg+xml",
                csv: "text/csv",
                pdf: "application/pdf",
                json: "application/json",
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                xml: "text/xml"
            };
            var fX = new eX;
            fX.NK();
            fX.create = function () {
                return new eX
            };
            fX.ic = function (a, b) {
                var c = a && a.exports ? a.exports()[b]() : void 0,
                    d = $.fa.anychart.exports[b](),
                    e;
                "object" == $.ka(c) ? e = rW(d, c, d) : e = $.n(c) ? c : d;
                return e
            };
            fX.na = $.fa.IS_ANYCHART_AMD ? $.hq.acgraph.server : $.ll.acgraph.server;
            fX.ba = function (a, b, c) {
                return function () {
                    CW(UW + "/" + c, {
                        "file-name": b,
                        data: a,
                        dataType: c,
                        responseType: "file"
                    })
                }
            };
            fX.f = function (a, b) {
                return function (c) {
                    a.fallback ? ($.kl(1E3, null, [], !0), b.call(null, arguments)) : $.kl(1002, null, [], !0)
                }
            };
            fX.Du = function (a, b, c, d, e, f) {
                var h = b ? b.Ka() : null;
                h && (b = fX.ic(a, "image"), c = rW({
                    width: c,
                    height: d,
                    quality: e,
                    filename: f
                }, c, {
                    width: b.width,
                    height: b.height,
                    filename: fX.ic(a, "filename")
                }), d = fX.ic(a, "clientside"), e = fX.f(d, function (a) {
                    aX(h, a.width, a.height, a.quality, a.filename)
                }), d.enabled ? kX(a, "png", c, e) : d.fallback ? aX(h, c.width, c.height, c.quality, c.filename) : $.kl(1001, null, [], !0))
            };
            fX.Xw = function (a, b, c, d, e, f, h) {
                var k = b ? b.Ka() : null;
                k && (b = fX.ic(a, "image"), c = rW({
                    width: c,
                    height: d,
                    quality: e,
                    forceTransparentWhite: f,
                    filename: h
                }, c, {
                    width: b.width,
                    height: b.height,
                    filename: fX.ic(a, "filename")
                }), d = fX.ic(a, "clientside"), e = fX.f(d, function (a) {
                    bX(k, a.width, a.height, a.quality, a.forceTransparentWhite, a.filename)
                }), d.enabled ? kX(a, "jpg", c, e) : d.fallback ? bX(k, c.width, c.height, c.quality, c.forceTransparentWhite, c.filename) : $.kl(1001, null, [], !0))
            };
            fX.Yw = function (a, b, c, d, e, f, h) {
                var k = b ? b.Ka() : null;
                k && (b = fX.ic(a, "image"), c = rW({
                    paperSize: c,
                    width: c,
                    landscape: d,
                    height: d,
                    x: e,
                    y: f,
                    filename: h
                }, c, {
                    width: b.width,
                    height: b.height,
                    filename: fX.ic(a, "filename")
                }), d = fX.ic(a, "clientside"), e = fX.f(d, function (a) {
                    cX(k, a.paperSize || a.width, a.landscape || a.height, a.x, a.y, a.filename)
                }), d.enabled ? kX(a, "pdf", c, e) : d.fallback ? cX(k, c.paperSize || c.width, c.landscape || c.height, c.x, c.y, c.filename) : $.kl(1001, null, [], !0))
            };
            fX.Zw = function (a, b, c, d, e) {
                var f = b ? b.Ka() : null;
                f && (b = fX.ic(a, "image"), c = rW({
                    paperSize: c,
                    width: c,
                    landscape: d,
                    height: d,
                    filename: e
                }, c, {
                    width: b.width,
                    height: b.height,
                    filename: fX.ic(a, "filename")
                }), d = fX.ic(a, "clientside"), e = fX.f(d, function (a) {
                    dX(f, a.paperSize || a.width, a.landscape || a.height, a.filename)
                }), d.enabled ? kX(a, "svg", c, e) : d.fallback ? dX(f, c.paperSize || c.width, c.landscape || c.height, c.filename) : $.kl(1001, null, [], !0))
            };
            fX.Nq = function (a, b, c, d) {
                return (b = b ? b.Ka() : null) ? (a = fX.ic(a, "image"), c = rW({
                    paperSize: c,
                    width: c,
                    landscape: d,
                    height: d
                }, c, {
                    width: a.width,
                    height: a.height
                }), b.Nq(c.paperSize || c.width, c.landscape || c.height)) : ""
            };
            fX.P = function (a, b, c, d) {
                d = d || fX.ic(a, "filename");
                a = fX.ic(a, "clientside");
                var e = fX.ba(b, d, c),
                    f = fX.f(a, e);
                if (a.enabled) try {
                    hX(new window.Blob([b], {
                        type: iX[c] || ""
                    }), d, c)
                } catch (h) {
                    f()
                } else a.fallback ? e() : $.kl(1001, null, [], !0)
            };
            fX.PO = function (a, b, c) {
                fX.P(a, b, "xml", c)
            };
            fX.OO = function (a, b, c) {
                fX.P(a, b, "json", c)
            };
            fX.bz = function (a, b, c) {
                fX.P(a, b, "csv", c)
            };
            fX.cz = function (a, b, c) {
                var d = fX.ic(a, "clientside");
                c = c || fX.ic(a, "filename");
                var e = fX.ba(b, c, "xlsx"),
                    f = fX.f(d, e);
                d.enabled ? oja(a, b, c, f) : d.fallback ? e() : $.kl(1001, null, [], !0)
            };
            fX.Gu = function (a, b, c, d, e, f, h, k, l) {
                if (b = b ? b.Ka() : null) {
                    var m = fX.ic(a, "image");
                    a = rW({
                        onSuccess: c,
                        onError: d,
                        asBase64: e,
                        width: f,
                        height: h,
                        quality: k,
                        filename: l
                    }, c, {
                        width: m.width,
                        height: m.height,
                        filename: fX.ic(a, "filename")
                    });
                    b.Gu(a.onSuccess, a.onError, a.asBase64, a.width, a.height, a.quality, a.filename)
                }
            };
            fX.CB = function (a, b, c, d, e, f, h, k, l, m) {
                if (b = b ? b.Ka() : null) {
                    var p = fX.ic(a, "image");
                    a = rW({
                        onSuccess: c,
                        onError: d,
                        asBase64: e,
                        width: f,
                        height: h,
                        quality: k,
                        forceTransparentWhite: l,
                        filename: m
                    }, c, {
                        width: p.width,
                        height: p.height,
                        filename: fX.ic(a, "filename")
                    });
                    b.CB(a.onSuccess, a.onError, a.asBase64, a.width, a.height, a.quality, a.forceTransparentWhite, a.filename)
                }
            };
            fX.EB = function (a, b, c, d, e, f, h, k) {
                if (b = b ? b.Ka() : null) {
                    var l = fX.ic(a, "image");
                    a = rW({
                        onSuccess: c,
                        onError: d,
                        asBase64: e,
                        paperSize: f,
                        width: f,
                        landscape: h,
                        height: h,
                        filename: k
                    }, c, {
                        width: l.width,
                        height: l.height,
                        filename: fX.ic(a, "filename")
                    });
                    b.EB(a.onSuccess, a.onError, a.asBase64, a.paperSize || a.width, a.landscape || a.height, a.filename)
                }
            };
            fX.DB = function (a, b, c, d, e, f, h, k, l, m) {
                if (b = b ? b.Ka() : null) {
                    var p = fX.ic(a, "image");
                    a = rW({
                        onSuccess: c,
                        onError: d,
                        asBase64: e,
                        paperSize: f,
                        width: f,
                        landscape: h,
                        height: h,
                        x: k,
                        y: l,
                        filename: m
                    }, c, {
                        width: p.width,
                        height: p.height,
                        filename: fX.ic(a, "filename")
                    });
                    b.DB(a.onSuccess, a.onError, a.asBase64, a.paperSize || a.width, a.landscape || a.height, a.x, a.y, a.filename)
                }
            };
            fX.yA = function (a, b, c, d, e, f, h) {
                if (b = b ? b.Ka() : null) a = fX.ic(a, "image"), c = rW({
                    onSuccess: c,
                    onError: d,
                    width: e,
                    height: f,
                    quality: h
                }, c, {
                    width: a.width,
                    height: a.height
                }), b.yA(c.onSuccess, c.onError, c.width, c.height, c.quality)
            };
            fX.wA = function (a, b, c, d, e, f, h, k) {
                if (b = b ? b.Ka() : null) a = fX.ic(a, "image"), c = rW({
                    onSuccess: c,
                    onError: d,
                    width: e,
                    height: f,
                    quality: h,
                    forceTransparentWhite: k
                }, c, {
                    width: a.width,
                    height: a.height
                }), b.wA(c.onSuccess, c.onError, c.width, c.height, c.quality, c.forceTransparentWhite)
            };
            fX.AA = function (a, b, c, d, e, f) {
                if (b = b ? b.Ka() : null) a = fX.ic(a, "image"), c = rW({
                    onSuccess: c,
                    onError: d,
                    paperSize: e,
                    width: e,
                    landscape: f,
                    height: f
                }, c, {
                    width: a.width,
                    height: a.height
                }), b.AA(c.onSuccess, c.onError, c.paperSize || c.width, c.landscape || c.height)
            };
            fX.xA = function (a, b, c, d, e, f, h, k) {
                if (b = b ? b.Ka() : null) a = fX.ic(a, "image"), c = rW({
                    onSuccess: c,
                    onError: d,
                    paperSize: e,
                    width: e,
                    landscape: f,
                    height: f,
                    x: h,
                    y: k
                }, c, {
                    width: a.width,
                    height: a.height
                }), b.xA(c.onSuccess, c.onError, c.paperSize || c.width, c.landscape || c.height, c.x, c.y)
            };
            fX.print = function (a, b, c, d) {
                if (a = b ? b.Ka() : null) c = rW({
                    paperSize: c,
                    landscape: d
                }, c), a.print(c.paperSize, c.landscape)
            };
            fX.IE = function (a, b, c, d, e, f) {
                var h = fX.ic(a, "facebook"),
                    k = rW({
                        caption: c,
                        link: d,
                        name: e,
                        description: f
                    }, c, h),
                    l = $.ll.open("", "_blank", "scrollbars=yes, width=550, height=550, top=" + Number(window.screen.height / 2 - 275) + ", left=" + Number(window.screen.width / 2 - 275));
                fX.Gu(a, b, function (a) {
                    a = {
                        app_id: h.appId,
                        display: "popup",
                        picture: a
                    };
                    a.caption = k.caption;
                    k.link && (a.link = k.link, k.name && (a.name = k.name), k.description && (a.description = k.description));
                    var b = "",
                        c;
                    for (c in a) b += b ? "&" : "", b += c + "=" + a[c];
                    l.location.href = "https://www.facebook.com/dialog/feed?" +
                        b
                }, void 0, !1, h.width, h.height)
            };
            fX.LE = function (a, b) {
                var c = fX.ic(a, "twitter"),
                    d = Number(window.screen.width / 2 - 300),
                    e = Number(window.screen.height / 2 - 260);
                var f = $.De(window.document, "INPUT", "ac-share-twitter-data-input", void 0);
                if (0 < f.length) {
                    var h = f[0];
                    f = $.De(window.document, "FORM", "ac-share-twitter-form", void 0)[0]
                } else {
                    f = $.Te(window.document, "FORM");
                    $.Rj(f, "ac-share-twitter-form");
                    f.target = "Map";
                    f.method = "POST";
                    f.action = c.url;
                    h = $.Te(window.document, "INPUT");
                    $.Rj(h, "ac-share-twitter-data-input");
                    h.type = "hidden";
                    h.name = "data";
                    var k =
                        $.Te(window.document, "INPUT");
                    k.type = "hidden";
                    k.name = "dataType";
                    k.value = "svg";
                    f.appendChild(h);
                    f.appendChild(k);
                    pW("BODY")[0].appendChild(f)
                }
                $.n(f) && $.n(h) && (h.value = fX.Nq(a, b, c.width, c.height), $.ll.open("", "Map", "status=0,title=0,height=520,width=600,scrollbars=1, width=600, height=520, top=" + e + ", left=" + d) && f.submit())
            };
            fX.JE = function (a, b, c, d) {
                var e = fX.ic(a, "linkedin"),
                    f = rW({
                        caption: c,
                        description: d
                    }, c, e),
                    h = $.ll.open("", "_blank", "scrollbars=yes, width=550, height=520, top=" + Number(window.screen.height / 2 - 260) + ", left=" + Number(window.screen.width / 2 - 275));
                fX.Gu(a, b, function (a) {
                    a = {
                        mini: "true",
                        url: a
                    };
                    a.title = f.caption;
                    f.description && (a.summary = f.description);
                    var b = "",
                        c;
                    for (c in a) b += b ? "&" : "", b += c + "=" + a[c];
                    h.location.href = "https://www.linkedin.com/shareArticle?" + b
                }, void 0, !1, e.width, e.height)
            };
            fX.KE = function (a, b, c, d) {
                var e = fX.ic(a, "pinterest"),
                    f = rW({
                        link: c,
                        description: d
                    }, c, e),
                    h = $.ll.open("", "_blank", "scrollbars=yes, width=550, height=520, top=" + Number(window.screen.height / 2 - 260) + ", left=" + Number(window.screen.width / 2 - 275));
                fX.Gu(a, b, function (a) {
                    a = {
                        media: a
                    };
                    f.link && (a.url = f.link);
                    f.description && (a.description = f.description);
                    var b = "",
                        c;
                    for (c in a) b += b ? "&" : "", b += c + "=" + a[c];
                    h.location.href = "https://pinterest.com/pin/create/link?" + b
                }, void 0, !1, e.width, e.height)
            };
            $.F("anychart.exports", fX);
            $.F("anychart.exports.server", fX.na);
        }).call(this, $)
    }
    $_ = window.anychart;
    $_.$ = $;
    $_._ = _
});