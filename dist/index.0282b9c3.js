/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */ !function(e1, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e1.document ? t(e1, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e1);
}("undefined" != typeof window ? window : this, function(C1, e2) {
    "use strict";
    var t1 = [], E1 = C1.document, r1 = Object.getPrototypeOf, s1 = t1.slice, g1 = t1.concat, u1 = t1.push, i1 = t1.indexOf, n1 = {
    }, o1 = n1.toString, v1 = n1.hasOwnProperty, a1 = v1.toString, l1 = a1.call(Object), y1 = {
    }, m1 = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
    }, x1 = function(e) {
        return null != e && e === e.window;
    }, c1 = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b1(e, t, n) {
        var r, i, o = (n = n || E1).createElement("script");
        if (o.text = e, t) for(r in c1)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w1(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n1[o1.call(e)] || "object" : typeof e;
    }
    var f1 = "3.4.1", k1 = function(e, t) {
        return new k1.fn.init(e, t);
    }, p1 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function d1(e) {
        var t = !!e && "length" in e && e.length, n = w1(e);
        return !m1(e) && !x1(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
    }
    k1.fn = k1.prototype = {
        jquery: f1,
        constructor: k1,
        length: 0,
        toArray: function() {
            return s1.call(this);
        },
        get: function(e) {
            return null == e ? s1.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = k1.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return k1.each(this, e);
        },
        map: function(n) {
            return this.pushStack(k1.map(this, function(e, t) {
                return n.call(e, t, e);
            }));
        },
        slice: function() {
            return this.pushStack(s1.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [
                this[n]
            ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: u1,
        sort: t1.sort,
        splice: t1.splice
    }, k1.extend = k1.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {
        }, s = 1, u = arguments.length, l = !1;
        for("boolean" == typeof a && (l = a, a = arguments[s] || {
        }, s++), "object" == typeof a || m1(a) || (a = {
        }), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for(t in e)r = e[t], "__proto__" !== t && a !== r && (l && r && (k1.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k1.isPlainObject(n) ? n : {
        }, i = !1, a[t] = k1.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a;
    }, k1.extend({
        expando: "jQuery" + (f1 + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o1.call(e)) && (!(t = r1(e)) || "function" == typeof (n = v1.call(t, "constructor") && t.constructor) && a1.call(n) === l1);
        },
        isEmptyObject: function(e) {
            var t;
            for(t in e)return !1;
            return !0;
        },
        globalEval: function(e, t) {
            b1(e, {
                nonce: t && t.nonce
            });
        },
        each: function(e, t) {
            var n, r = 0;
            if (d1(e)) {
                for(n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break;
            } else for(r in e)if (!1 === t.call(e[r], r, e[r])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p1, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d1(Object(e)) ? k1.merge(n, "string" == typeof e ? [
                e
            ] : e) : u1.call(n, e)), n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i1.call(t, e, n);
        },
        merge: function(e, t) {
            for(var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            for(var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]);
            return r;
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (d1(e)) for(r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && a.push(i);
            else for(o in e)null != (i = t(e[o], o, n)) && a.push(i);
            return g1.apply([], a);
        },
        guid: 1,
        support: y1
    }), "function" == typeof Symbol && (k1.fn[Symbol.iterator] = t1[Symbol.iterator]), k1.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n1["[object " + t + "]"] = t.toLowerCase();
    });
    var h1 = function(n2) {
        var e3, d2, b, o2, i2, h2, f2, g2, w, u2, l2, T, C, a2, E, v2, s2, c2, y2, k = "sizzle" + 1 * new Date, m2 = n2.document, S = 0, r2 = 0, p2 = ue(), x2 = ue(), N = ue(), A = ue(), D = function(e, t) {
            return e === t && (l2 = !0), 0;
        }, j = {
        }.hasOwnProperty, t2 = [], q = t2.pop, L = t2.push, H = t2.push, O = t2.slice, P = function(e, t) {
            for(var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n;
            return -1;
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", F = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + $),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + R + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ne = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, oe = function() {
            T();
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t2 = O.call(m2.childNodes), m2.childNodes), t2[m2.childNodes.length].nodeType;
        } catch (e4) {
            H = {
                apply: t2.length ? function(e, t) {
                    L.apply(e, O.call(t));
                } : function(e, t) {
                    var n = e.length, r = 0;
                    while(e[n++] = t[r++]);
                    e.length = n - 1;
                }
            };
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((e ? e.ownerDocument || e : m2) !== C && T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t))) {
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n;
                        } else if (f && (a = f.getElementById(i)) && y2(e, a) && a.id === i) return n.push(a), n;
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d2.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
                    }
                }
                if (d2.qsa && !A[t + " "] && (!v2 || !v2.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h2(t)).length;
                        while(o--)l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e;
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n;
                    } catch (e5) {
                        A(t, !0);
                    } finally{
                        s === k && e.removeAttribute("id");
                    }
                }
            }
            return g2(t.replace(B, "$1"), e, n, r);
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
            };
        }
        function le(e) {
            return e[k] = !0, e;
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e7) {
                return !1;
            } finally{
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function fe(e, t) {
            var n = e.split("|"), r = n.length;
            while(r--)b.attrHandle[n[r]] = t;
        }
        function pe(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) {
                while(n = n.nextSibling)if (n === t) return -1;
            }
            return e ? 1 : -1;
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
            };
        }
        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while(i--)e[n = r[i]] && (e[n] = !(t[n] = e[n]));
                });
            });
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        for(e3 in d2 = se.support = {
        }, i2 = se.isXML = function(e) {
            var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML");
        }, T = se.setDocument = function(e8) {
            var t3, n3, r3 = e8 ? e8.ownerDocument || e8 : m2;
            return r3 !== C && 9 === r3.nodeType && r3.documentElement && (a2 = (C = r3).documentElement, E = !i2(C), m2 !== C && (n3 = C.defaultView) && n3.top !== n3 && (n3.addEventListener ? n3.addEventListener("unload", oe, !1) : n3.attachEvent && n3.attachEvent("onunload", oe)), d2.attributes = ce(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), d2.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
            }), d2.getElementsByClassName = K.test(C.getElementsByClassName), d2.getById = ce(function(e) {
                return a2.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
            }), d2.getById ? (b.filter.ID = function(e9) {
                var t = e9.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [
                        n
                    ] : [];
                }
            }) : (b.filter.ID = function(e10) {
                var n = e10.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                };
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [
                            o
                        ];
                        i = t.getElementsByName(e), r = 0;
                        while(o = i[r++])if ((n = o.getAttributeNode("id")) && n.value === e) return [
                            o
                        ];
                    }
                    return [];
                }
            }), b.find.TAG = d2.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d2.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while(n = o[i++])1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, b.find.CLASS = d2.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
            }, s2 = [], v2 = [], (d2.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                a2.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v2.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v2.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v2.push("~="), e.querySelectorAll(":checked").length || v2.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v2.push(".#.+[+~]");
            }), ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v2.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v2.push(":enabled", ":disabled"), a2.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v2.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v2.push(",.*:");
            })), (d2.matchesSelector = K.test(c2 = a2.matches || a2.webkitMatchesSelector || a2.mozMatchesSelector || a2.oMatchesSelector || a2.msMatchesSelector)) && ce(function(e) {
                d2.disconnectedMatch = c2.call(e, "*"), c2.call(e, "[s!='']:x"), s2.push("!=", $);
            }), v2 = v2.length && new RegExp(v2.join("|")), s2 = s2.length && new RegExp(s2.join("|")), t3 = K.test(a2.compareDocumentPosition), y2 = t3 || K.test(a2.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) {
                    while(t = t.parentNode)if (t === e) return !0;
                }
                return !1;
            }, D = t3 ? function(e, t) {
                if (e === t) return l2 = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d2.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m2 && y2(m2, e) ? -1 : t === C || t.ownerDocument === m2 && y2(m2, t) ? 1 : u2 ? P(u2, e) - P(u2, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return l2 = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [
                    e
                ], s = [
                    t
                ];
                if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u2 ? P(u2, e) - P(u2, t) : 0;
                if (i === o) return pe(e, t);
                n = e;
                while(n = n.parentNode)a.unshift(n);
                n = t;
                while(n = n.parentNode)s.unshift(n);
                while(a[r] === s[r])r++;
                return r ? pe(a[r], s[r]) : a[r] === m2 ? -1 : s[r] === m2 ? 1 : 0;
            }), C;
        }, se.matches = function(e, t) {
            return se(e, null, null, t);
        }, se.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== C && T(e), d2.matchesSelector && E && !A[t + " "] && (!s2 || !s2.test(t)) && (!v2 || !v2.test(t))) try {
                var n = c2.call(e, t);
                if (n || d2.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e11) {
                A(t, !0);
            }
            return 0 < se(t, C, null, [
                e
            ]).length;
        }, se.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && T(e), y2(e, t);
        }, se.attr = function(e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()], r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d2.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }, se.escape = function(e) {
            return (e + "").replace(re, ie);
        }, se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l2 = !d2.detectDuplicates, u2 = !d2.sortStable && e.slice(0), e.sort(D), l2) {
                while(t = e[i++])t === e[i] && (r = n.push(i));
                while(r--)e.splice(n[r], 1);
            }
            return u2 = null, e;
        }, o2 = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for(e = e.firstChild; e; e = e.nextSibling)n += o2(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else while(t = e[r++])n += o2(t);
            return n;
        }, (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {
            },
            find: {
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h2(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e12) {
                    var t = e12.replace(te, ne).toLowerCase();
                    return "*" === e12 ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e13) {
                    var t = p2[e13 + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e13 + "(" + M + "|$)"), p2(e13, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                    }));
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(h, e14, t, g, v) {
                    var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e14;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while(l){
                                    a = e;
                                    while(a = a[l])if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = "only" === h && !u && "nextSibling";
                                }
                                return !0;
                            }
                            if (u = [
                                m ? c.firstChild : c.lastChild
                            ], m && p) {
                                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {
                                }))[a.uniqueID] || (o[a.uniqueID] = {
                                }))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
                                while(a = ++s && a && a[l] || (d = s = 0) || u.pop())if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [
                                        S,
                                        s,
                                        d
                                    ];
                                    break;
                                }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {
                            }))[a.uniqueID] || (o[a.uniqueID] = {
                            }))[h] || [])[0] === S && r[1]), !1 === d) {
                                while(a = ++s && a && a[l] || (d = s = 0) || u.pop())if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {
                                }))[a.uniqueID] || (o[a.uniqueID] = {
                                }))[h] = [
                                    S,
                                    d
                                ]), a === e)) break;
                            }
                            return (d -= v) === g || d % g == 0 && 0 <= d / g;
                        }
                    };
                },
                PSEUDO: function(e15, o) {
                    var t4, a = b.pseudos[e15] || b.setFilters[e15.toLowerCase()] || se.error("unsupported pseudo: " + e15);
                    return a[k] ? a(o) : 1 < a.length ? (t4 = [
                        e15,
                        e15,
                        "",
                        o
                    ], b.setFilters.hasOwnProperty(e15.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while(i--)e[n = P(e, r[i])] = !(t[n] = r[i]);
                    }) : function(e) {
                        return a(e, 0, t4);
                    }) : a;
                }
            },
            pseudos: {
                not: le(function(e16) {
                    var r4 = [], i3 = [], s = f2(e16.replace(B, "$1"));
                    return s[k] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while(a--)(i = o[a]) && (e[a] = !(t[a] = i));
                    }) : function(e, t, n) {
                        return r4[0] = e, s(r4, null, n, i3), r4[0] = null, !i3.pop();
                    };
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length;
                    };
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne), function(e) {
                        return -1 < (e.textContent || o2(e)).indexOf(t);
                    };
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                        }while ((e = e.parentNode) && 1 === e.nodeType)
                        return !1;
                    };
                }),
                target: function(e) {
                    var t = n2.location && n2.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === a2;
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for(e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !b.pseudos.empty(e);
                },
                header: function(e) {
                    return J.test(e.nodeName);
                },
                input: function(e) {
                    return Q.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ve(function() {
                    return [
                        0
                    ];
                }),
                last: ve(function(e, t) {
                    return [
                        t - 1
                    ];
                }),
                eq: ve(function(e, t, n) {
                    return [
                        n < 0 ? n + t : n
                    ];
                }),
                even: ve(function(e, t) {
                    for(var n = 0; n < t; n += 2)e.push(n);
                    return e;
                }),
                odd: ve(function(e, t) {
                    for(var n = 1; n < t; n += 2)e.push(n);
                    return e;
                }),
                lt: ve(function(e, t, n) {
                    for(var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)e.push(r);
                    return e;
                }),
                gt: ve(function(e, t, n) {
                    for(var r = n < 0 ? n + t : n; ++r < t;)e.push(r);
                    return e;
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })b.pseudos[e3] = de(e3);
        for(e3 in {
            submit: !0,
            reset: !0
        })b.pseudos[e3] = he(e3);
        function me() {
        }
        function xe(e) {
            for(var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value;
            return r;
        }
        function be(s, e17, t5) {
            var u = e17.dir, l = e17.next, c = l || u, f = t5 && "parentNode" === c, p = r2++;
            return e17.first ? function(e, t, n) {
                while(e = e[u])if (1 === e.nodeType || f) return s(e, t, n);
                return !1;
            } : function(e, t, n) {
                var r, i, o, a = [
                    S,
                    p
                ];
                if (n) {
                    while(e = e[u])if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                } else while(e = e[u])if (1 === e.nodeType || f) {
                    if (i = (o = e[k] || (e[k] = {
                    }))[e.uniqueID] || (o[e.uniqueID] = {
                    }), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                    else {
                        if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
                        if ((i[c] = a)[2] = s(e, t, n)) return !0;
                    }
                }
                return !1;
            };
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while(r--)if (!i[r](e, t, n)) return !1;
                return !0;
            } : i[0];
        }
        function Te(e, t, n, r, i) {
            for(var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Ce(d, h, g, v, y, e18) {
            return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e18)), le(function(e19, t6, n4, r5) {
                var i4, o, a, s = [], u = [], l = t6.length, c = e19 || function(e, t, n) {
                    for(var r = 0, i = t.length; r < i; r++)se(e, t[r], n);
                    return n;
                }(h || "*", n4.nodeType ? [
                    n4
                ] : n4, []), f = !d || !e19 && h ? c : Te(c, s, d, n4, r5), p = g ? y || (e19 ? d : l || v) ? [] : t6 : f;
                if (g && g(f, p, n4, r5), v) {
                    i4 = Te(p, u), v(i4, [], n4, r5), o = i4.length;
                    while(o--)(a = i4[o]) && (p[u[o]] = !(f[u[o]] = a));
                }
                if (e19) {
                    if (y || d) {
                        if (y) {
                            i4 = [], o = p.length;
                            while(o--)(a = p[o]) && i4.push(f[o] = a);
                            y(null, p = [], i4, r5);
                        }
                        o = p.length;
                        while(o--)(a = p[o]) && -1 < (i4 = y ? P(e19, a) : s[o]) && (e19[i4] = !(t6[i4] = a));
                    }
                } else p = Te(p === t6 ? p.splice(l, p.length) : p), y ? y(null, t6, p, r5) : H.apply(t6, p);
            });
        }
        function Ee(e20) {
            for(var i, t7, n5, r6 = e20.length, o = b.relative[e20[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i;
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e);
            }, a, !0), c = [
                function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r;
                }
            ]; s < r6; s++)if (t7 = b.relative[e20[s].type]) c = [
                be(we(c), t7)
            ];
            else {
                if ((t7 = b.filter[e20[s].type].apply(null, e20[s].matches))[k]) {
                    for(n5 = ++s; n5 < r6; n5++)if (b.relative[e20[n5].type]) break;
                    return Ce(1 < s && we(c), 1 < s && xe(e20.slice(0, s - 1).concat({
                        value: " " === e20[s - 2].type ? "*" : ""
                    })).replace(B, "$1"), t7, s < n5 && Ee(e20.slice(s, n5)), n5 < r6 && Ee(e20 = e20.slice(n5)), n5 < r6 && xe(e20));
                }
                c.push(t7);
            }
            return we(c);
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h2 = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x2[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while(a){
                for(o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(B, " ")
                }), a = a.slice(n.length)), b.filter)!(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break;
            }
            return t ? a.length : a ? se.error(e) : x2(e, s).slice(0);
        }, f2 = se.compile = function(e21, t8) {
            var n6, v, y, m, x, r7, i5 = [], o3 = [], a3 = N[e21 + " "];
            if (!a3) {
                t8 || (t8 = h2(e21)), n6 = t8.length;
                while(n6--)(a3 = Ee(t8[n6]))[k] ? i5.push(a3) : o3.push(a3);
                (a3 = N(e21, (v = o3, m = 0 < (y = i5).length, x = 0 < v.length, r7 = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || 0.1, g = d.length;
                    for(i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++){
                        if (x && o) {
                            a = 0, t || o.ownerDocument === C || (T(o), n = !E);
                            while(s = v[a++])if (s(o, t || C, n)) {
                                r.push(o);
                                break;
                            }
                            i && (S = h);
                        }
                        m && ((o = !s && o) && u--, e && c.push(o));
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while(s = y[a++])s(c, f, t, n);
                        if (e) {
                            if (0 < u) while(l--)c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f);
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
                    }
                    return i && (S = h, w = p), c;
                }, m ? le(r7) : r7))).selector = e21;
            }
            return a3;
        }, g2 = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h2(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while(i--){
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break;
                    }
                }
            }
            return (l || f2(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
        }, d2.sortStable = k.split("").sort(D).join("") === k, d2.detectDuplicates = !!l2, T(), d2.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), d2.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ce(function(e) {
            return null == e.getAttribute("disabled");
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), se;
    }(C1);
    k1.find = h1, k1.expr = h1.selectors, k1.expr[":"] = k1.expr.pseudos, k1.uniqueSort = k1.unique = h1.uniqueSort, k1.text = h1.getText, k1.isXMLDoc = h1.isXML, k1.contains = h1.contains, k1.escapeSelector = h1.escape;
    var T1 = function(e, t, n) {
        var r = [], i = void 0 !== n;
        while((e = e[t]) && 9 !== e.nodeType)if (1 === e.nodeType) {
            if (i && k1(e).is(n)) break;
            r.push(e);
        }
        return r;
    }, S1 = function(e, t) {
        for(var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, N1 = k1.expr.match.needsContext;
    function A1(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var D1 = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j1(e22, n, r) {
        return m1(n) ? k1.grep(e22, function(e, t) {
            return !!n.call(e, t, e) !== r;
        }) : n.nodeType ? k1.grep(e22, function(e) {
            return e === n !== r;
        }) : "string" != typeof n ? k1.grep(e22, function(e) {
            return -1 < i1.call(n, e) !== r;
        }) : k1.filter(n, e22, r);
    }
    k1.filter = function(e23, t, n) {
        var r = t[0];
        return n && (e23 = ":not(" + e23 + ")"), 1 === t.length && 1 === r.nodeType ? k1.find.matchesSelector(r, e23) ? [
            r
        ] : [] : k1.find.matches(e23, k1.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, k1.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(k1(e).filter(function() {
                for(t = 0; t < r; t++)if (k1.contains(i[t], this)) return !0;
            }));
            for(n = this.pushStack([]), t = 0; t < r; t++)k1.find(e, i[t], n);
            return 1 < r ? k1.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(j1(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(j1(this, e || [], !0));
        },
        is: function(e) {
            return !!j1(this, "string" == typeof e && N1.test(e) ? k1(e) : e || [], !1).length;
        }
    });
    var q1, L1 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k1.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || q1, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [
                null,
                e,
                null
            ] : L1.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k1 ? t[0] : t, k1.merge(this, k1.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E1, !0)), D1.test(r[1]) && k1.isPlainObject(t)) for(r in t)m1(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = E1.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m1(e) ? void 0 !== n.ready ? n.ready(e) : e(k1) : k1.makeArray(e, this);
    }).prototype = k1.fn, q1 = k1(E1);
    var H1 = /^(?:parents|prev(?:Until|All))/, O1 = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function P1(e, t) {
        while((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    k1.fn.extend({
        has: function(e24) {
            var t = k1(e24, this), n = t.length;
            return this.filter(function() {
                for(var e = 0; e < n; e++)if (k1.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k1(e);
            if (!N1.test(e)) {
                for(; r < i; r++)for(n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k1.find.matchesSelector(n, e))) {
                    o.push(n);
                    break;
                }
            }
            return this.pushStack(1 < o.length ? k1.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? i1.call(k1(e), this[0]) : i1.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(k1.uniqueSort(k1.merge(this.get(), k1(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), k1.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return T1(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return T1(e, "parentNode", n);
        },
        next: function(e) {
            return P1(e, "nextSibling");
        },
        prev: function(e) {
            return P1(e, "previousSibling");
        },
        nextAll: function(e) {
            return T1(e, "nextSibling");
        },
        prevAll: function(e) {
            return T1(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return T1(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return T1(e, "previousSibling", n);
        },
        siblings: function(e) {
            return S1((e.parentNode || {
            }).firstChild, e);
        },
        children: function(e) {
            return S1(e.firstChild);
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (A1(e, "template") && (e = e.content || e), k1.merge([], e.childNodes));
        }
    }, function(r, i) {
        k1.fn[r] = function(e, t) {
            var n = k1.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k1.filter(t, n)), 1 < this.length && (O1[r] || k1.uniqueSort(n), H1.test(r) && n.reverse()), this.pushStack(n);
        };
    });
    var R1 = /[^\x20\t\r\n\f]+/g;
    function M1(e) {
        return e;
    }
    function I1(e) {
        throw e;
    }
    function W1(e, t, n, r) {
        var i;
        try {
            e && m1(i = e.promise) ? i.call(e).done(t).fail(n) : e && m1(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [
                e
            ].slice(r));
        } catch (e25) {
            n.apply(void 0, [
                e25
            ]);
        }
    }
    k1.Callbacks = function(r) {
        var e26, n7;
        r = "string" == typeof r ? (e26 = r, n7 = {
        }, k1.each(e26.match(R1) || [], function(e, t) {
            n7[t] = !0;
        }), n7) : k1.extend({
        }, r);
        var i, t9, o, a, s = [], u = [], l = -1, c = function() {
            for(a = a || r.once, o = i = !0; u.length; l = -1){
                t9 = u.shift();
                while(++l < s.length)!1 === s[l].apply(t9[0], t9[1]) && r.stopOnFalse && (l = s.length, t9 = !1);
            }
            r.memory || (t9 = !1), i = !1, a && (s = t9 ? [] : "");
        }, f = {
            add: function() {
                return s && (t9 && !i && (l = s.length - 1, u.push(t9)), (function n(e) {
                    k1.each(e, function(e, t) {
                        m1(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w1(t) && n(t);
                    });
                })(arguments), t9 && !i && c()), this;
            },
            remove: function() {
                return k1.each(arguments, function(e, t) {
                    var n;
                    while(-1 < (n = k1.inArray(t, s, n)))s.splice(n, 1), n <= l && l--;
                }), this;
            },
            has: function(e) {
                return e ? -1 < k1.inArray(e, s) : 0 < s.length;
            },
            empty: function() {
                return s && (s = []), this;
            },
            disable: function() {
                return a = u = [], s = t9 = "", this;
            },
            disabled: function() {
                return !s;
            },
            lock: function() {
                return a = u = [], t9 || i || (s = t9 = ""), this;
            },
            locked: function() {
                return !!a;
            },
            fireWith: function(e, t) {
                return a || (t = [
                    e,
                    (t = t || []).slice ? t.slice() : t
                ], u.push(t), i || c()), this;
            },
            fire: function() {
                return f.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!o;
            }
        };
        return f;
    }, k1.extend({
        Deferred: function(e27) {
            var o4 = [
                [
                    "notify",
                    "progress",
                    k1.Callbacks("memory"),
                    k1.Callbacks("memory"),
                    2
                ],
                [
                    "resolve",
                    "done",
                    k1.Callbacks("once memory"),
                    k1.Callbacks("once memory"),
                    0,
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    k1.Callbacks("once memory"),
                    k1.Callbacks("once memory"),
                    1,
                    "rejected"
                ]
            ], i6 = "pending", a4 = {
                state: function() {
                    return i6;
                },
                always: function() {
                    return s3.done(arguments).fail(arguments), this;
                },
                "catch": function(e) {
                    return a4.then(null, e);
                },
                pipe: function() {
                    var i = arguments;
                    return k1.Deferred(function(r) {
                        k1.each(o4, function(e28, t) {
                            var n = m1(i[t[4]]) && i[t[4]];
                            s3[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m1(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [
                                    e
                                ] : arguments);
                            });
                        }), i = null;
                    }).promise();
                },
                then: function(t10, n8, r8) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this, r = arguments, e29 = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, m1(t) ? s ? t.call(e, l(u, o, M1, s), l(u, o, I1, s)) : (u++, t.call(e, l(u, o, M1, s), l(u, o, I1, s), l(u, o, M1, o.notifyWith))) : (a !== M1 && (n = void 0, r = [
                                        e
                                    ]), (s || o.resolveWith)(n, r));
                                }
                            }, t11 = s ? e29 : function() {
                                try {
                                    e29();
                                } catch (e) {
                                    k1.Deferred.exceptionHook && k1.Deferred.exceptionHook(e, t11.stackTrace), u <= i + 1 && (a !== I1 && (n = void 0, r = [
                                        e
                                    ]), o.rejectWith(n, r));
                                }
                            };
                            i ? t11() : (k1.Deferred.getStackHook && (t11.stackTrace = k1.Deferred.getStackHook()), C1.setTimeout(t11));
                        };
                    }
                    return k1.Deferred(function(e) {
                        o4[0][3].add(l(0, e, m1(r8) ? r8 : M1, e.notifyWith)), o4[1][3].add(l(0, e, m1(t10) ? t10 : M1)), o4[2][3].add(l(0, e, m1(n8) ? n8 : I1));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? k1.extend(e, a4) : a4;
                }
            }, s3 = {
            };
            return k1.each(o4, function(e, t) {
                var n = t[2], r = t[5];
                a4[t[1]] = n.add, r && n.add(function() {
                    i6 = r;
                }, o4[3 - e][2].disable, o4[3 - e][3].disable, o4[0][2].lock, o4[0][3].lock), n.add(t[3].fire), s3[t[0]] = function() {
                    return s3[t[0] + "With"](this === s3 ? void 0 : this, arguments), this;
                }, s3[t[0] + "With"] = n.fireWith;
            }), a4.promise(s3), e27 && e27.call(s3, s3), s3;
        },
        when: function(e30) {
            var n = arguments.length, t = n, r = Array(t), i = s1.call(arguments), o = k1.Deferred(), a = function(t) {
                return function(e) {
                    r[t] = this, i[t] = 1 < arguments.length ? s1.call(arguments) : e, --n || o.resolveWith(r, i);
                };
            };
            if (n <= 1 && (W1(e30, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m1(i[t] && i[t].then))) return o.then();
            while(t--)W1(i[t], a(t), o.reject);
            return o.promise();
        }
    });
    var $1 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k1.Deferred.exceptionHook = function(e, t) {
        C1.console && C1.console.warn && e && $1.test(e.name) && C1.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, k1.readyException = function(e) {
        C1.setTimeout(function() {
            throw e;
        });
    };
    var F1 = k1.Deferred();
    function B1() {
        E1.removeEventListener("DOMContentLoaded", B1), C1.removeEventListener("load", B1), k1.ready();
    }
    k1.fn.ready = function(e31) {
        return F1.then(e31)["catch"](function(e) {
            k1.readyException(e);
        }), this;
    }, k1.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k1.readyWait : k1.isReady) || (k1.isReady = !0) !== e && 0 < --k1.readyWait || F1.resolveWith(E1, [
                k1
            ]);
        }
    }), k1.ready.then = F1.then, "complete" === E1.readyState || "loading" !== E1.readyState && !E1.documentElement.doScroll ? C1.setTimeout(k1.ready) : (E1.addEventListener("DOMContentLoaded", B1), C1.addEventListener("load", B1));
    var _1 = function(e32, t, n9, r, i, o, a) {
        var s = 0, u = e32.length, l = null == n9;
        if ("object" === w1(n9)) for(s in i = !0, n9)_1(e32, t, s, n9[s], !0, o, a);
        else if (void 0 !== r && (i = !0, m1(r) || (a = !0), l && (a ? (t.call(e32, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(k1(e), n);
        })), t)) for(; s < u; s++)t(e32[s], n9, a ? r : r.call(e32[s], s, t(e32[s], n9)));
        return i ? e32 : l ? t.call(e32) : u ? t(e32[0], n9) : o;
    }, z1 = /^-ms-/, U1 = /-([a-z])/g;
    function X1(e, t) {
        return t.toUpperCase();
    }
    function V1(e) {
        return e.replace(z1, "ms-").replace(U1, X1);
    }
    var G1 = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Y1() {
        this.expando = k1.expando + Y1.uid++;
    }
    Y1.uid = 1, Y1.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {
            }, G1(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V1(t)] = n;
            else for(r in t)i[V1(r)] = t[r];
            return i;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V1(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V1) : (t = V1(t)) in r ? [
                        t
                    ] : t.match(R1) || []).length;
                    while(n--)delete r[t[n]];
                }
                (void 0 === t || k1.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k1.isEmptyObject(t);
        }
    };
    var Q1 = new Y1, J1 = new Y1, K1 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z1 = /[A-Z]/g;
    function ee1(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) {
            if (r = "data-" + t.replace(Z1, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K1.test(i) ? JSON.parse(i) : i);
                } catch (e33) {
                }
                J1.set(e, t, n);
            } else n = void 0;
        }
        return n;
    }
    k1.extend({
        hasData: function(e) {
            return J1.hasData(e) || Q1.hasData(e);
        },
        data: function(e, t, n) {
            return J1.access(e, t, n);
        },
        removeData: function(e, t) {
            J1.remove(e, t);
        },
        _data: function(e, t, n) {
            return Q1.access(e, t, n);
        },
        _removeData: function(e, t) {
            Q1.remove(e, t);
        }
    }), k1.fn.extend({
        data: function(n, e35) {
            var t12, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J1.get(o), 1 === o.nodeType && !Q1.get(o, "hasDataAttrs"))) {
                    t12 = a.length;
                    while(t12--)a[t12] && 0 === (r = a[t12].name).indexOf("data-") && (r = V1(r.slice(5)), ee1(o, r, i[r]));
                    Q1.set(o, "hasDataAttrs", !0);
                }
                return i;
            }
            return "object" == typeof n ? this.each(function() {
                J1.set(this, n);
            }) : _1(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = J1.get(o, n)) ? t : void 0 !== (t = ee1(o, n)) ? t : void 0;
                this.each(function() {
                    J1.set(this, n, e);
                });
            }, null, e35, 1 < arguments.length, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                J1.remove(this, e);
            });
        }
    }), k1.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Q1.get(e, t), n && (!r || Array.isArray(n) ? r = Q1.access(e, t, k1.makeArray(n)) : r.push(n)), r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k1.queue(e, t), r = n.length, i = n.shift(), o = k1._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                k1.dequeue(e, t);
            }, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q1.get(e, n) || Q1.access(e, n, {
                empty: k1.Callbacks("once memory").add(function() {
                    Q1.remove(e, [
                        t + "queue",
                        n
                    ]);
                })
            });
        }
    }), k1.fn.extend({
        queue: function(t, n) {
            var e36 = 2;
            return "string" != typeof t && (n = t, t = "fx", e36--), arguments.length < e36 ? k1.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k1.queue(this, t, n);
                k1._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k1.dequeue(this, t);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                k1.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, r = 1, i = k1.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [
                    o
                ]);
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while(a--)(n = Q1.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t);
        }
    });
    var te1 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ne1 = new RegExp("^(?:([+-])=|)(" + te1 + ")([a-z%]*)$", "i"), re1 = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ], ie1 = E1.documentElement, oe1 = function(e) {
        return k1.contains(e.ownerDocument, e);
    }, ae1 = {
        composed: !0
    };
    ie1.getRootNode && (oe1 = function(e) {
        return k1.contains(e.ownerDocument, e) || e.getRootNode(ae1) === e.ownerDocument;
    });
    var se1 = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe1(e) && "none" === k1.css(e, "display");
    }, ue1 = function(e, t, n, r) {
        var i, o, a = {
        };
        for(o in t)a[o] = e.style[o], e.style[o] = t[o];
        for(o in i = n.apply(e, r || []), t)e.style[o] = a[o];
        return i;
    };
    function le1(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur();
        } : function() {
            return k1.css(e, t, "");
        }, u = s(), l = n && n[3] || (k1.cssNumber[t] ? "" : "px"), c = e.nodeType && (k1.cssNumber[t] || "px" !== l && +u) && ne1.exec(k1.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while(a--)k1.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), c /= o;
            c *= 2, k1.style(e, t, c + l), n = n || [];
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
    }
    var ce1 = {
    };
    function fe1(e, t) {
        for(var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q1.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se1(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce1[s]) || (o = a.body.appendChild(a.createElement(s)), u = k1.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce1[s] = u)))) : "none" !== n && (l[c] = "none", Q1.set(r, "display", n)));
        for(c = 0; c < f; c++)null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    k1.fn.extend({
        show: function() {
            return fe1(this, !0);
        },
        hide: function() {
            return fe1(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se1(this) ? k1(this).show() : k1(this).hide();
            });
        }
    });
    var pe1 = /^(?:checkbox|radio)$/i, de1 = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he1 = /^$|^module$|\/(?:java|ecma)script/i, ge1 = {
        option: [
            1,
            "<select multiple='multiple'>",
            "</select>"
        ],
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        col: [
            2,
            "<table><colgroup>",
            "</colgroup></table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: [
            0,
            "",
            ""
        ]
    };
    function ve1(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A1(e, t) ? k1.merge([
            e
        ], n) : n;
    }
    function ye1(e, t) {
        for(var n = 0, r = e.length; n < r; n++)Q1.set(e[n], "globalEval", !t || Q1.get(t[n], "globalEval"));
    }
    ge1.optgroup = ge1.option, ge1.tbody = ge1.tfoot = ge1.colgroup = ge1.caption = ge1.thead, ge1.th = ge1.td;
    var me1, xe1, be1 = /<|&#?\w+;/;
    function we1(e, t, n, r, i) {
        for(var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) {
            if ("object" === w1(o)) k1.merge(p, o.nodeType ? [
                o
            ] : o);
            else if (be1.test(o)) {
                a = a || f.appendChild(t.createElement("div")), s = (de1.exec(o) || [
                    "",
                    ""
                ])[1].toLowerCase(), u = ge1[s] || ge1._default, a.innerHTML = u[1] + k1.htmlPrefilter(o) + u[2], c = u[0];
                while(c--)a = a.lastChild;
                k1.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
            } else p.push(t.createTextNode(o));
        }
        f.textContent = "", d = 0;
        while(o = p[d++])if (r && -1 < k1.inArray(o, r)) i && i.push(o);
        else if (l = oe1(o), a = ve1(f.appendChild(o), "script"), l && ye1(a), n) {
            c = 0;
            while(o = a[c++])he1.test(o.type || "") && n.push(o);
        }
        return f;
    }
    me1 = E1.createDocumentFragment().appendChild(E1.createElement("div")), (xe1 = E1.createElement("input")).setAttribute("type", "radio"), xe1.setAttribute("checked", "checked"), xe1.setAttribute("name", "t"), me1.appendChild(xe1), y1.checkClone = me1.cloneNode(!0).cloneNode(!0).lastChild.checked, me1.innerHTML = "<textarea>x</textarea>", y1.noCloneChecked = !!me1.cloneNode(!0).lastChild.defaultValue;
    var Te1 = /^key/, Ce1 = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ee1 = /^([^.]*)(?:\.(.+)|)/;
    function ke() {
        return !0;
    }
    function Se() {
        return !1;
    }
    function Ne(e, t) {
        return e === (function() {
            try {
                return E1.activeElement;
            } catch (e) {
            }
        })() == ("focus" === t);
    }
    function Ae(e37, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for(s in "string" != typeof n && (r = r || n, n = void 0), t)Ae(e37, s, n, r, t[s], o);
            return e37;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
        else if (!i) return e37;
        return 1 === o && (a = i, (i = function(e) {
            return k1().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = k1.guid++)), e37.each(function() {
            k1.event.add(this, t, i, r, n);
        });
    }
    function De(e38, i, o) {
        o ? (Q1.set(e38, i, !1), k1.event.add(e38, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q1.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length) (k1.event.special[i] || {
                    }).delegateType && e.stopPropagation();
                    else if (r = s1.call(arguments), Q1.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q1.get(this, i)) || t ? Q1.set(this, i, !1) : n = {
                    }, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                } else r.length && (Q1.set(this, i, {
                    value: k1.event.trigger(k1.extend(r[0], k1.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation());
            }
        })) : void 0 === Q1.get(e38, i) && k1.event.add(e38, i, ke);
    }
    k1.event = {
        global: {
        },
        add: function(t, e39, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q1.get(t);
            if (v) {
                n.handler && (n = (o = n).handler, i = o.selector), i && k1.find.matchesSelector(ie1, i), n.guid || (n.guid = k1.guid++), (u = v.events) || (u = v.events = {
                }), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof k1 && k1.event.triggered !== e.type ? k1.event.dispatch.apply(t, arguments) : void 0;
                }), l = (e39 = (e39 || "").match(R1) || [
                    ""
                ]).length;
                while(l--)d = g = (s = Ee1.exec(e39[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k1.event.special[d] || {
                }, d = (i ? f.delegateType : f.bindType) || d, f = k1.event.special[d] || {
                }, c = k1.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k1.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k1.event.global[d] = !0);
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q1.hasData(e) && Q1.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R1) || [
                    ""
                ]).length;
                while(l--)if (d = g = (s = Ee1.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                    f = k1.event.special[d] || {
                    }, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while(o--)c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k1.removeEvent(e, d, v.handle), delete u[d]);
                } else for(d in u)k1.event.remove(e, d + t[l], n, r, !0);
                k1.isEmptyObject(u) && Q1.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k1.event.fix(e), u = new Array(arguments.length), l = (Q1.get(this, "events") || {
            })[s.type] || [], c = k1.event.special[s.type] || {
            };
            for(u[0] = s, t = 1; t < arguments.length; t++)u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k1.event.handlers.call(this, s, l), t = 0;
                while((i = a[t++]) && !s.isPropagationStopped()){
                    s.currentTarget = i.elem, n = 0;
                    while((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k1.event.special[o.origType] || {
                    }).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, s), s.result;
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) {
                for(; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                    for(o = [], a = {
                    }, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k1(i, this).index(l) : k1.find(i, this, null, [
                        l
                    ]).length), a[i] && o.push(r);
                    o.length && s.push({
                        elem: l,
                        handlers: o
                    });
                }
            }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s;
        },
        addProp: function(t, e40) {
            Object.defineProperty(k1.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m1(e40) ? function() {
                    if (this.originalEvent) return e40(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t];
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    });
                }
            });
        },
        fix: function(e) {
            return e[k1.expando] ? e : new k1.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe1.test(t.type) && t.click && A1(t, "input") && De(t, "click", ke), !1;
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe1.test(t.type) && t.click && A1(t, "input") && De(t, "click"), !0;
                },
                _default: function(e) {
                    var t = e.target;
                    return pe1.test(t.type) && t.click && A1(t, "input") && Q1.get(t, "click") || A1(t, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, k1.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, k1.Event = function(e, t) {
        if (!(this instanceof k1.Event)) return new k1.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k1.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k1.expando] = !0;
    }, k1.Event.prototype = {
        constructor: k1.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
    }, k1.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Te1.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce1.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, k1.event.addProp), k1.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        k1.event.special[e] = {
            setup: function() {
                return De(this, e, Ne), !1;
            },
            trigger: function() {
                return De(this, e), !0;
            },
            delegateType: t
        };
    }), k1.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e41, i) {
        k1.event.special[e41] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || k1.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
            }
        };
    }), k1.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k1(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for(i in e)this.off(i, t, e[i]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                k1.event.remove(this, e, n, t);
            });
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, qe = /<script|<style|<link/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i, He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return A1(e, "table") && A1(11 !== t.nodeType ? t : t.firstChild, "tr") && k1(e).children("tbody")[0] || e;
    }
    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }
    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q1.hasData(e) && (o = Q1.access(e), a = Q1.set(t, o), l = o.events)) for(i in delete a.handle, a.events = {
            }, l)for(n = 0, r = l[i].length; n < r; n++)k1.event.add(t, i, l[i][n]);
            J1.hasData(e) && (s = J1.access(e), u = k1.extend({
            }, s), J1.set(t, u));
        }
    }
    function Ie(n, r, i, o) {
        r = g1.apply([], r);
        var e42, t13, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m1(d);
        if (h || 1 < f && "string" == typeof d && !y1.checkClone && Le.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
        });
        if (f && (t13 = (e42 = we1(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e42.childNodes.length && (e42 = t13), t13 || o)) {
            for(s = (a = k1.map(ve1(e42, "script"), Pe)).length; c < f; c++)u = e42, c !== p && (u = k1.clone(u, !0, !0), s && k1.merge(a, ve1(u, "script"))), i.call(n[c], u, c);
            if (s) for(l = a[a.length - 1].ownerDocument, k1.map(a, Re), c = 0; c < s; c++)u = a[c], he1.test(u.type || "") && !Q1.access(u, "globalEval") && k1.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k1._evalUrl && !u.noModule && k1._evalUrl(u.src, {
                nonce: u.nonce || u.getAttribute("nonce")
            }) : b1(u.textContent.replace(He, ""), u, l));
        }
        return n;
    }
    function We(e, t, n) {
        for(var r, i = t ? k1.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || k1.cleanData(ve1(r)), r.parentNode && (n && oe1(r) && ye1(ve1(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    k1.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe1(e);
            if (!(y1.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k1.isXMLDoc(e))) for(a = ve1(c), r = 0, i = (o = ve1(e)).length; r < i; r++)s = o[r], u = a[r], "input" === (l = u.nodeName.toLowerCase()) && pe1.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t) {
                if (n) for(o = o || ve1(e), a = a || ve1(c), r = 0, i = o.length; r < i; r++)Me(o[r], a[r]);
                else Me(e, c);
            }
            return 0 < (a = ve1(c, "script")).length && ye1(a, !f && ve1(e, "script")), c;
        },
        cleanData: function(e) {
            for(var t, n, r, i = k1.event.special, o = 0; void 0 !== (n = e[o]); o++)if (G1(n)) {
                if (t = n[Q1.expando]) {
                    if (t.events) for(r in t.events)i[r] ? k1.event.remove(n, r) : k1.removeEvent(n, r, t.handle);
                    n[Q1.expando] = void 0;
                }
                n[J1.expando] && (n[J1.expando] = void 0);
            }
        }
    }), k1.fn.extend({
        detach: function(e) {
            return We(this, e, !0);
        },
        remove: function(e) {
            return We(this, e);
        },
        text: function(e43) {
            return _1(this, function(e) {
                return void 0 === e ? k1.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e43, arguments.length);
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for(var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (k1.cleanData(ve1(e, !1)), e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k1.clone(this, e, t);
            });
        },
        html: function(e44) {
            return _1(this, function(e) {
                var t = this[0] || {
                }, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge1[(de1.exec(e) || [
                    "",
                    ""
                ])[1].toLowerCase()]) {
                    e = k1.htmlPrefilter(e);
                    try {
                        for(; n < r; n++)1 === (t = this[n] || {
                        }).nodeType && (k1.cleanData(ve1(t, !1)), t.innerHTML = e);
                        t = 0;
                    } catch (e) {
                    }
                }
                t && this.empty().append(e);
            }, null, e44, arguments.length);
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k1.inArray(this, n) < 0 && (k1.cleanData(ve1(this)), t && t.replaceChild(e, this));
            }, n);
        }
    }), k1.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e45, a) {
        k1.fn[e45] = function(e) {
            for(var t, n = [], r = k1(e), i = r.length - 1, o = 0; o <= i; o++)t = o === i ? this : this.clone(!0), k1(r[o])[a](t), u1.apply(n, t.get());
            return this.pushStack(n);
        };
    });
    var $e = new RegExp("^(" + te1 + ")(?!px)[a-z%]+$", "i"), Fe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C1), t.getComputedStyle(e);
    }, Be = new RegExp(re1.join("|"), "i");
    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe1(e) || (a = k1.style(e, t)), !y1.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }
    function ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    !function() {
        function e46() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie1.appendChild(s).appendChild(u);
                var e = C1.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie1.removeChild(s), u = null;
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n, r, i, o, a, s = E1.createElement("div"), u = E1.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y1.clearCloneStyle = "content-box" === u.style.backgroundClip, k1.extend(y1, {
            boxSizingReliable: function() {
                return e46(), r;
            },
            pixelBoxStyles: function() {
                return e46(), o;
            },
            pixelPosition: function() {
                return e46(), n;
            },
            reliableMarginLeft: function() {
                return e46(), a;
            },
            scrollboxSize: function() {
                return e46(), i;
            }
        }));
    }();
    var Ue = [
        "Webkit",
        "Moz",
        "ms"
    ], Xe = E1.createElement("div").style, Ve = {
    };
    function Ge(e47) {
        var t14 = k1.cssProps[e47] || Ve[e47];
        return t14 || (e47 in Xe ? e47 : Ve[e47] = (function(e) {
            var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
            while(n--)if ((e = Ue[n] + t) in Xe) return e;
        })(e47) || e47);
    }
    var Ye = /^(none|table(?!-c[ea]).+)/, Qe = /^--/, Je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ke = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ze(e, t, n) {
        var r = ne1.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for(; a < 4; a += 2)"margin" === n && (u += k1.css(e, n + re1[a], !0, i)), r ? ("content" === n && (u -= k1.css(e, "padding" + re1[a], !0, i)), "margin" !== n && (u -= k1.css(e, "border" + re1[a] + "Width", !0, i))) : (u += k1.css(e, "padding" + re1[a], !0, i), "padding" !== n ? u += k1.css(e, "border" + re1[a] + "Width", !0, i) : s += k1.css(e, "border" + re1[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
    }
    function tt(e, t, n) {
        var r = Fe(e), i = (!y1.boxSizingReliable() || n) && "border-box" === k1.css(e, "boxSizing", !1, r), o = i, a = _e(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (!y1.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k1.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k1.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
    }
    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i);
    }
    k1.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V1(t), u = Qe.test(t), l = e.style;
                if (u || (t = Ge(s)), a = k1.cssHooks[t] || k1.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne1.exec(n)) && i[1] && (n = le1(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k1.cssNumber[s] ? "" : "px")), y1.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V1(t);
            return Qe.test(t) || (t = Ge(s)), (a = k1.cssHooks[t] || k1.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
        }
    }), k1.each([
        "height",
        "width"
    ], function(e48, u) {
        k1.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ye.test(k1.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue1(e, Je, function() {
                    return tt(e, u, n);
                });
            },
            set: function(e, t, n) {
                var r, i = Fe(e), o = !y1.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === k1.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - 0.5)), s && (r = ne1.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k1.css(e, u)), Ze(0, t, s);
            }
        };
    }), k1.cssHooks.marginLeft = ze(y1.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue1(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), k1.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k1.cssHooks[i + o] = {
            expand: function(e) {
                for(var t = 0, n = {
                }, r = "string" == typeof e ? e.split(" ") : [
                    e
                ]; t < 4; t++)n[i + re1[t] + o] = r[t] || r[t - 2] || r[0];
                return n;
            }
        }, "margin" !== i && (k1.cssHooks[i + o].set = Ze);
    }), k1.fn.extend({
        css: function(e49, t15) {
            return _1(this, function(e, t, n) {
                var r, i, o = {
                }, a = 0;
                if (Array.isArray(t)) {
                    for(r = Fe(e), i = t.length; a < i; a++)o[t[a]] = k1.css(e, t[a], !1, r);
                    return o;
                }
                return void 0 !== n ? k1.style(e, t, n) : k1.css(e, t);
            }, e49, t15, 1 < arguments.length);
        }
    }), ((k1.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k1.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k1.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k1.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k1.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
                k1.fx.step[e.prop] ? k1.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k1.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k1.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, k1.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, k1.fx = nt.prototype.init, k1.fx.step = {
    };
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;
    function lt() {
        it && (!1 === E1.hidden && C1.requestAnimationFrame ? C1.requestAnimationFrame(lt) : C1.setTimeout(lt, k1.fx.interval), k1.fx.tick());
    }
    function ct() {
        return C1.setTimeout(function() {
            rt = void 0;
        }), rt = Date.now();
    }
    function ft(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for(t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = re1[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function pt(e, t, n) {
        for(var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r;
    }
    function dt(o5, e50, t16) {
        var n10, a5, r9 = 0, i7 = dt.prefilters.length, s = k1.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (a5) return !1;
            for(var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)l.tweens[r].run(n);
            return s.notifyWith(o5, [
                l,
                n,
                t
            ]), n < 1 && i ? t : (i || s.notifyWith(o5, [
                l,
                1,
                0
            ]), s.resolveWith(o5, [
                l
            ]), !1);
        }, l = s.promise({
            elem: o5,
            props: k1.extend({
            }, e50),
            opts: k1.extend(!0, {
                specialEasing: {
                },
                easing: k1.easing._default
            }, t16),
            originalProperties: e50,
            originalOptions: t16,
            startTime: rt || ct(),
            duration: t16.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = k1.Tween(o5, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n;
            },
            stop: function(e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a5) return this;
                for(a5 = !0; t < n; t++)l.tweens[t].run(1);
                return e ? (s.notifyWith(o5, [
                    l,
                    1,
                    0
                ]), s.resolveWith(o5, [
                    l,
                    e
                ])) : s.rejectWith(o5, [
                    l,
                    e
                ]), this;
            }
        }), c = l.props;
        for(!function(e, t) {
            var n, r, i, o, a;
            for(n in e)if (i = t[r = V1(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k1.cssHooks[r]) && ("expand" in a)) for(n in o = a.expand(o), delete e[r], o)(n in e) || (e[n] = o[n], t[n] = i);
            else t[r] = i;
        }(c, l.opts.specialEasing); r9 < i7; r9++)if (n10 = dt.prefilters[r9].call(l, o5, c, l.opts)) return m1(n10.stop) && (k1._queueHooks(l.elem, l.opts.queue).stop = n10.stop.bind(n10)), n10;
        return k1.map(c, pt, l), m1(l.opts.start) && l.opts.start.call(o5, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k1.fx.timer(k1.extend(u, {
            elem: o5,
            anim: l,
            queue: l.opts.queue
        })), l;
    }
    k1.Animation = k1.extend(dt, {
        tweeners: {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t);
                    return le1(n.elem, e, ne1.exec(t), n), n;
                }
            ]
        },
        tweener: function(e, t) {
            m1(e) ? (t = e, e = [
                "*"
            ]) : e = e.match(R1);
            for(var n, r = 0, i = e.length; r < i; r++)n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
        },
        prefilters: [
            function(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {
                }, h = e.style, g = e.nodeType && se1(e), v = Q1.get(e, "fxshow");
                for(r in n.queue || (null == (a = k1._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s();
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, k1.queue(e, "fx").length || a.empty.fire();
                    });
                })), t)if (i = t[r], st.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0;
                    }
                    d[r] = v && v[r] || k1.style(e, r);
                }
                if ((u = !k1.isEmptyObject(t)) || !k1.isEmptyObject(d)) for(r in f && 1 === e.nodeType && (n.overflow = [
                    h.overflow,
                    h.overflowX,
                    h.overflowY
                ], null == (l = v && v.display) && (l = Q1.get(e, "display")), "none" === (c = k1.css(e, "display")) && (l ? c = l : (fe1([
                    e
                ], !0), l = e.style.display || l, c = k1.css(e, "display"), fe1([
                    e
                ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k1.css(e, "float") && (u || (p.done(function() {
                    h.display = l;
                }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
                })), u = !1, d)u || (v ? "hidden" in v && (g = v.hidden) : v = Q1.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && fe1([
                    e
                ], !0), p.done(function() {
                    for(r in g || fe1([
                        e
                    ]), Q1.remove(e, "fxshow"), d)k1.style(e, r, d[r]);
                })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
            }
        ],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
        }
    }), k1.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k1.extend({
        }, e) : {
            complete: n || !n && t || m1(e) && e,
            duration: e,
            easing: n && t || t && !m1(t) && t
        };
        return k1.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k1.fx.speeds ? r.duration = k1.fx.speeds[r.duration] : r.duration = k1.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m1(r.old) && r.old.call(this), r.queue && k1.dequeue(this, r.queue);
        }, r;
    }, k1.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se1).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(t, e51, n, r) {
            var i = k1.isEmptyObject(t), o = k1.speed(e51, n, r), a = function() {
                var e = dt(this, k1.extend({
                }, t), o);
                (i || Q1.get(this, "finish")) && e.stop(!0);
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(i, e52, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o);
            };
            return "string" != typeof i && (o = e52, e52 = i, i = void 0), e52 && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0, t = null != i && i + "queueHooks", n = k1.timers, r = Q1.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else for(t in r)r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for(t = n.length; t--;)n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k1.dequeue(this, i);
            });
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Q1.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k1.timers, o = n ? n.length : 0;
                for(t.finish = !0, k1.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;)i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for(e = 0; e < o; e++)n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
            });
        }
    }), k1.each([
        "toggle",
        "show",
        "hide"
    ], function(e53, r) {
        var i = k1.fn[r];
        k1.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
        };
    }), k1.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e54, r) {
        k1.fn[e54] = function(e, t, n) {
            return this.animate(r, e, t, n);
        };
    }), k1.timers = [], k1.fx.tick = function() {
        var e, t = 0, n = k1.timers;
        for(rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k1.fx.stop(), rt = void 0;
    }, k1.fx.timer = function(e) {
        k1.timers.push(e), k1.fx.start();
    }, k1.fx.interval = 13, k1.fx.start = function() {
        it || (it = !0, lt());
    }, k1.fx.stop = function() {
        it = null;
    }, k1.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k1.fn.delay = function(r, e55) {
        return r = k1.fx && k1.fx.speeds[r] || r, e55 = e55 || "fx", this.queue(e55, function(e, t) {
            var n = C1.setTimeout(e, r);
            t.stop = function() {
                C1.clearTimeout(n);
            };
        });
    }, ot = E1.createElement("input"), at = E1.createElement("select").appendChild(E1.createElement("option")), ot.type = "checkbox", y1.checkOn = "" !== ot.value, y1.optSelected = at.selected, (ot = E1.createElement("input")).value = "t", ot.type = "radio", y1.radioValue = "t" === ot.value;
    var ht, gt = k1.expr.attrHandle;
    k1.fn.extend({
        attr: function(e, t) {
            return _1(this, k1.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function(e) {
            return this.each(function() {
                k1.removeAttr(this, e);
            });
        }
    }), k1.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k1.prop(e, t, n) : (1 === o && k1.isXMLDoc(e) || (i = k1.attrHooks[t.toLowerCase()] || (k1.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k1.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k1.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y1.radioValue && "radio" === t && A1(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(R1);
            if (i && 1 === e.nodeType) while(n = i[r++])e.removeAttribute(n);
        }
    }), ht = {
        set: function(e, t, n) {
            return !1 === t ? k1.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, k1.each(k1.expr.match.bool.source.match(/\w+/g), function(e56, t17) {
        var a = gt[t17] || k1.find.attr;
        gt[t17] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r;
        };
    });
    var vt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
    function mt(e) {
        return (e.match(R1) || []).join(" ");
    }
    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R1) || [];
    }
    k1.fn.extend({
        prop: function(e, t) {
            return _1(this, k1.prop, e, t, 1 < arguments.length);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k1.propFix[e] || e];
            });
        }
    }), k1.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k1.isXMLDoc(e) || (t = k1.propFix[t] || t, i = k1.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k1.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y1.optSelected || (k1.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), k1.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        k1.propFix[this.toLowerCase()] = this;
    }), k1.fn.extend({
        addClass: function(t) {
            var e57, n, r, i, o, a, s, u = 0;
            if (m1(t)) return this.each(function(e) {
                k1(this).addClass(t.call(this, e, xt(this)));
            });
            if ((e57 = bt(t)).length) {
                while(n = this[u++])if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                    a = 0;
                    while(o = e57[a++])r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    i !== (s = mt(r)) && n.setAttribute("class", s);
                }
            }
            return this;
        },
        removeClass: function(t) {
            var e58, n, r, i, o, a, s, u = 0;
            if (m1(t)) return this.each(function(e) {
                k1(this).removeClass(t.call(this, e, xt(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e58 = bt(t)).length) {
                while(n = this[u++])if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                    a = 0;
                    while(o = e58[a++])while(-1 < r.indexOf(" " + o + " "))r = r.replace(" " + o + " ", " ");
                    i !== (s = mt(r)) && n.setAttribute("class", s);
                }
            }
            return this;
        },
        toggleClass: function(i, t18) {
            var o = typeof i, a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t18 && a ? t18 ? this.addClass(i) : this.removeClass(i) : m1(i) ? this.each(function(e) {
                k1(this).toggleClass(i.call(this, e, xt(this), t18), t18);
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = k1(this), r = bt(i);
                    while(e = r[t++])n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q1.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q1.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while(n = this[r++])if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
            return !1;
        }
    });
    var wt = /\r/g;
    k1.fn.extend({
        val: function(n) {
            var r, e59, i, t19 = this[0];
            return arguments.length ? (i = m1(n), this.each(function(e60) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e60, k1(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k1.map(t, function(e) {
                    return null == e ? "" : e + "";
                })), (r = k1.valHooks[this.type] || k1.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
            })) : t19 ? (r = k1.valHooks[t19.type] || k1.valHooks[t19.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e59 = r.get(t19, "value")) ? e59 : "string" == typeof (e59 = t19.value) ? e59.replace(wt, "") : null == e59 ? "" : e59 : void 0;
        }
    }), k1.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k1.find.attr(e, "value");
                    return null != t ? t : mt(k1.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for(r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A1(n.parentNode, "optgroup"))) {
                        if (t = k1(n).val(), a) return t;
                        s.push(t);
                    }
                    return s;
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = k1.makeArray(t), a = i.length;
                    while(a--)((r = i[a]).selected = -1 < k1.inArray(k1.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), k1.each([
        "radio",
        "checkbox"
    ], function() {
        k1.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k1.inArray(k1(e).val(), t);
            }
        }, y1.checkOn || (k1.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), y1.focusin = "onfocusin" in C1;
    var Tt = /^(?:focusinfocus|focusoutblur)$/, Ct = function(e) {
        e.stopPropagation();
    };
    k1.extend(k1.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [
                n || E1
            ], d = v1.call(e, "type") ? e.type : e, h = v1.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E1, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k1.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k1.expando] ? e : new k1.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [
                e
            ] : k1.makeArray(t, [
                e
            ]), c = k1.event.special[d] || {
            }, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x1(n)) {
                    for(s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)p.push(o), a = o;
                    a === (n.ownerDocument || E1) && p.push(a.defaultView || a.parentWindow || C1);
                }
                i = 0;
                while((o = p[i++]) && !e.isPropagationStopped())f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q1.get(o, "events") || {
                })[e.type] && Q1.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G1(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G1(n) || u && m1(n[d]) && !x1(n) && ((a = n[u]) && (n[u] = null), k1.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k1.event.triggered = void 0, a && (n[u] = a)), e.result;
            }
        },
        simulate: function(e, t, n) {
            var r = k1.extend(new k1.Event, n, {
                type: e,
                isSimulated: !0
            });
            k1.event.trigger(r, null, t);
        }
    }), k1.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k1.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k1.event.trigger(e, t, n, !0);
        }
    }), y1.focusin || k1.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k1.event.simulate(r, e.target, k1.event.fix(e));
        };
        k1.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this, t = Q1.access(e, r);
                t || e.addEventListener(n, i, !0), Q1.access(e, r, (t || 0) + 1);
            },
            teardown: function() {
                var e = this.ownerDocument || this, t = Q1.access(e, r) - 1;
                t ? Q1.access(e, r, t) : (e.removeEventListener(n, i, !0), Q1.remove(e, r));
            }
        };
    });
    var Et = C1.location, kt = Date.now(), St = /\?/;
    k1.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C1.DOMParser).parseFromString(e, "text/xml");
        } catch (e61) {
            t = void 0;
        }
        return t && !t.getElementsByTagName("parsererror").length || k1.error("Invalid XML: " + e), t;
    };
    var Nt = /\[\]$/, At = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i, jt = /^(?:input|select|textarea|keygen)/i;
    function qt(n, e62, r, i) {
        var t20;
        if (Array.isArray(e62)) k1.each(e62, function(e, t) {
            r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
        });
        else if (r || "object" !== w1(e62)) i(n, e62);
        else for(t20 in e62)qt(n + "[" + t20 + "]", e62[t20], r, i);
    }
    k1.param = function(e63, t21) {
        var n11, r = [], i = function(e, t) {
            var n = m1(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (null == e63) return "";
        if (Array.isArray(e63) || e63.jquery && !k1.isPlainObject(e63)) k1.each(e63, function() {
            i(this.name, this.value);
        });
        else for(n11 in e63)qt(n11, e63[n11], t21, i);
        return r.join("&");
    }, k1.fn.extend({
        serialize: function() {
            return k1.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k1.prop(this, "elements");
                return e ? k1.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !k1(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe1.test(e));
            }).map(function(e64, t) {
                var n = k1(this).val();
                return null == n ? null : Array.isArray(n) ? k1.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                };
            }).get();
        }
    });
    var Lt = /%20/g, Ht = /#.*$/, Ot = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Rt = /^(?:GET|HEAD)$/, Mt = /^\/\//, It = {
    }, Wt = {
    }, $t = "*/".concat("*"), Ft = E1.createElement("a");
    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(R1) || [];
            if (m1(t)) while(n = i[r++])"+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function _t(t22, i, o, a) {
        var s = {
        }, u = t22 === Wt;
        function l(e) {
            var r;
            return s[e] = !0, k1.each(t22[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
            }), r;
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*");
    }
    function zt(e, t) {
        var n, r, i = k1.ajaxSettings.flatOptions || {
        };
        for(n in t)void 0 !== t[n] && ((i[n] ? e : r || (r = {
        }))[n] = t[n]);
        return r && k1.extend(!0, e, r), e;
    }
    Ft.href = Et.href, k1.extend({
        active: 0,
        lastModified: {
        },
        etag: {
        },
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k1.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, k1.ajaxSettings), t) : zt(k1.ajaxSettings, e);
        },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e65, t23) {
            "object" == typeof e65 && (t23 = e65, e65 = void 0), t23 = t23 || {
            };
            var c3, f, p, n12, d, r10, h, g, i8, o6, v = k1.ajaxSetup({
            }, t23), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? k1(y) : k1.event, x = k1.Deferred(), b = k1.Callbacks("once memory"), w = v.statusCode || {
            }, a6 = {
            }, s4 = {
            }, u3 = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n12) {
                            n12 = {
                            };
                            while(t = Pt.exec(p))n12[t[1].toLowerCase() + " "] = (n12[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        }
                        t = n12[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function() {
                    return h ? p : null;
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s4[e.toLowerCase()] = s4[e.toLowerCase()] || e, a6[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) {
                        if (h) T.always(e[T.status]);
                        else for(t in e)w[t] = [
                            w[t],
                            e[t]
                        ];
                    }
                    return this;
                },
                abort: function(e) {
                    var t = e || u3;
                    return c3 && c3.abort(t), l3(0, t), this;
                }
            };
            if (x.promise(T), v.url = ((e65 || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t23.method || t23.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R1) || [
                ""
            ], null == v.crossDomain) {
                r10 = E1.createElement("a");
                try {
                    r10.href = v.url, r10.href = r10.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r10.protocol + "//" + r10.host;
                } catch (e) {
                    v.crossDomain = !0;
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k1.param(v.data, v.traditional)), _t(It, v, t23, T), h) return T;
            for(i8 in (g = k1.event && v.global) && 0 == k1.active++ && k1.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o6 = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o6 = (St.test(f) ? "&" : "?") + "_=" + kt++ + o6), v.url = f + o6), v.ifModified && (k1.lastModified[f] && T.setRequestHeader("If-Modified-Since", k1.lastModified[f]), k1.etag[f] && T.setRequestHeader("If-None-Match", k1.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t23.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers)T.setRequestHeader(i8, v.headers[i8]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u3 = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c3 = _t(Wt, v, t23, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [
                    T,
                    v
                ]), h) return T;
                v.async && 0 < v.timeout && (d = C1.setTimeout(function() {
                    T.abort("timeout");
                }, v.timeout));
                try {
                    h = !1, c3.send(a6, l3);
                } catch (e) {
                    if (h) throw e;
                    l3(-1, e);
                }
            } else l3(-1, "No Transport");
            function l3(e66, t24, n13, r11) {
                var i9, o7, a7, s5, u4, l4 = t24;
                h || (h = !0, d && C1.clearTimeout(d), c3 = void 0, p = r11 || "", T.readyState = 0 < e66 ? 4 : 0, i9 = 200 <= e66 && e66 < 300 || 304 === e66, n13 && (s5 = (function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while("*" === u[0])u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) {
                        for(i in s)if (s[i] && s[i].test(r)) {
                            u.unshift(i);
                            break;
                        }
                    }
                    if (u[0] in n) o = u[0];
                    else {
                        for(i in n){
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break;
                            }
                            a || (a = i);
                        }
                        o = o || a;
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o];
                })(v, T, n13)), s5 = (function(e, t, n, r) {
                    var i, o, a, s, u, l = {
                    }, c = e.dataTypes.slice();
                    if (c[1]) for(a in e.converters)l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while(o)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) {
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                            if (!(a = l[u + " " + o] || l["* " + o])) {
                                for(i in l)if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break;
                                }
                            }
                            if (!0 !== a) {
                                if (a && e["throws"]) t = a(t);
                                else try {
                                    t = a(t);
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + u + " to " + o
                                    };
                                }
                            }
                        }
                    }
                    return {
                        state: "success",
                        data: t
                    };
                })(v, s5, T, i9), i9 ? (v.ifModified && ((u4 = T.getResponseHeader("Last-Modified")) && (k1.lastModified[f] = u4), (u4 = T.getResponseHeader("etag")) && (k1.etag[f] = u4)), 204 === e66 || "HEAD" === v.type ? l4 = "nocontent" : 304 === e66 ? l4 = "notmodified" : (l4 = s5.state, o7 = s5.data, i9 = !(a7 = s5.error))) : (a7 = l4, !e66 && l4 || (l4 = "error", e66 < 0 && (e66 = 0))), T.status = e66, T.statusText = (t24 || l4) + "", i9 ? x.resolveWith(y, [
                    o7,
                    l4,
                    T
                ]) : x.rejectWith(y, [
                    T,
                    l4,
                    a7
                ]), T.statusCode(w), w = void 0, g && m.trigger(i9 ? "ajaxSuccess" : "ajaxError", [
                    T,
                    v,
                    i9 ? o7 : a7
                ]), b.fireWith(y, [
                    T,
                    l4
                ]), g && (m.trigger("ajaxComplete", [
                    T,
                    v
                ]), --k1.active || k1.event.trigger("ajaxStop")));
            }
            return T;
        },
        getJSON: function(e, t, n) {
            return k1.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return k1.get(e, void 0, t, "script");
        }
    }), k1.each([
        "get",
        "post"
    ], function(e67, i) {
        k1[i] = function(e, t, n, r) {
            return m1(t) && (r = r || n, n = t, t = void 0), k1.ajax(k1.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k1.isPlainObject(e) && e));
        };
    }), k1._evalUrl = function(e68, t) {
        return k1.ajax({
            url: e68,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {
                }
            },
            dataFilter: function(e) {
                k1.globalEval(e, t);
            }
        });
    }, k1.fn.extend({
        wrapAll: function(e69) {
            var t;
            return this[0] && (m1(e69) && (e69 = e69.call(this[0])), t = k1(e69, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while(e.firstElementChild)e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(n) {
            return m1(n) ? this.each(function(e) {
                k1(this).wrapInner(n.call(this, e));
            }) : this.each(function() {
                var e = k1(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
            });
        },
        wrap: function(t) {
            var n = m1(t);
            return this.each(function(e) {
                k1(this).wrapAll(n ? t.call(this, e) : t);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k1(this).replaceWith(this.childNodes);
            }), this;
        }
    }), k1.expr.pseudos.hidden = function(e) {
        return !k1.expr.pseudos.visible(e);
    }, k1.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, k1.ajaxSettings.xhr = function() {
        try {
            return new C1.XMLHttpRequest;
        } catch (e) {
        }
    };
    var Ut = {
        0: 200,
        1223: 204
    }, Xt = k1.ajaxSettings.xhr();
    y1.cors = !!Xt && "withCredentials" in Xt, y1.ajax = Xt = !!Xt, k1.ajaxTransport(function(i) {
        var o, a;
        if (y1.cors || Xt && !i.crossDomain) return {
            send: function(e70, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for(n in i.xhrFields)r[n] = i.xhrFields[n];
                for(n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e70["X-Requested-With"] || (e70["X-Requested-With"] = "XMLHttpRequest"), e70)r.setRequestHeader(n, e70[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()));
                    };
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C1.setTimeout(function() {
                        o && a();
                    });
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null);
                } catch (e) {
                    if (o) throw e;
                }
            },
            abort: function() {
                o && o();
            }
        };
    }), k1.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), k1.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k1.globalEval(e), e;
            }
        }
    }), k1.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), k1.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e71, t) {
                r = k1("<script>").attr(n.scriptAttrs || {
                }).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
                }), E1.head.appendChild(r[0]);
            },
            abort: function() {
                i && i();
            }
        };
    });
    var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/;
    k1.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || k1.expando + "_" + kt++;
            return this[e] = !0, e;
        }
    }), k1.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m1(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || k1.error(r + " was not called"), o[0];
        }, e.dataTypes[0] = "json", i = C1[r], C1[r] = function() {
            o = arguments;
        }, n.always(function() {
            void 0 === i ? k1(C1).removeProp(r) : C1[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m1(i) && i(o[0]), o = i = void 0;
        }), "script";
    }), y1.createHTMLDocument = ((Vt = E1.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k1.parseHTML = function(e, t, n) {
        var r, i, o;
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y1.createHTMLDocument ? ((r = (t = E1.implementation.createHTMLDocument("")).createElement("base")).href = E1.location.href, t.head.appendChild(r)) : t = E1), o = !n && [], (i = D1.exec(e)) ? [
            t.createElement(i[1])
        ] : (i = we1([
            e
        ], t, o), o && o.length && k1(o).remove(), k1.merge([], i.childNodes)));
    }, k1.fn.load = function(e72, t25, n) {
        var r, i, o, a = this, s = e72.indexOf(" ");
        return -1 < s && (r = mt(e72.slice(s)), e72 = e72.slice(0, s)), m1(t25) ? (n = t25, t25 = void 0) : t25 && "object" == typeof t25 && (i = "POST"), 0 < a.length && k1.ajax({
            url: e72,
            type: i || "GET",
            dataType: "html",
            data: t25
        }).done(function(e) {
            o = arguments, a.html(r ? k1("<div>").append(k1.parseHTML(e)).find(r) : e);
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [
                    e.responseText,
                    t,
                    e
                ]);
            });
        }), this;
    }, k1.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(e73, t) {
        k1.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), k1.expr.pseudos.animated = function(t) {
        return k1.grep(k1.timers, function(e) {
            return t === e.elem;
        }).length;
    }, k1.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k1.css(e, "position"), c = k1(e), f = {
            };
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = k1.css(e, "top"), u = k1.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m1(t) && (t = t.call(e, n, k1.extend({
            }, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
        }
    }, k1.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k1.offset.setOffset(this, t, e);
            });
            var e74, n, r = this[0];
            return r ? r.getClientRects().length ? (e74 = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e74.top + n.pageYOffset,
                left: e74.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === k1.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while(e && (e === n.body || e === n.documentElement) && "static" === k1.css(e, "position"))e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k1(e).offset()).top += k1.css(e, "borderTopWidth", !0), i.left += k1.css(e, "borderLeftWidth", !0));
                }
                return {
                    top: t.top - i.top - k1.css(r, "marginTop", !0),
                    left: t.left - i.left - k1.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while(e && "static" === k1.css(e, "position"))e = e.offsetParent;
                return e || ie1;
            });
        }
    }), k1.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k1.fn[t] = function(e75) {
            return _1(this, function(e, t, n) {
                var r;
                if (x1(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
            }, t, e75, arguments.length);
        };
    }), k1.each([
        "top",
        "left"
    ], function(e76, n) {
        k1.cssHooks[n] = ze(y1.pixelPosition, function(e, t) {
            if (t) return t = _e(e, n), $e.test(t) ? k1(e).position()[n] + "px" : t;
        });
    }), k1.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k1.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r12, o) {
            k1.fn[o] = function(e77, t26) {
                var n14 = arguments.length && (r12 || "boolean" != typeof e77), i = r12 || (!0 === e77 || !0 === t26 ? "margin" : "border");
                return _1(this, function(e, t, n) {
                    var r;
                    return x1(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k1.css(e, t, i) : k1.style(e, t, n, i);
                }, s, n14 ? e77 : void 0, n14);
            };
        });
    }), k1.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e78, n) {
        k1.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), k1.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), k1.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), k1.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m1(e)) return r = s1.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s1.call(arguments)));
        }).guid = e.guid = e.guid || k1.guid++, i;
    }, k1.holdReady = function(e) {
        e ? k1.readyWait++ : k1.ready(!0);
    }, k1.isArray = Array.isArray, k1.parseJSON = JSON.parse, k1.nodeName = A1, k1.isFunction = m1, k1.isWindow = x1, k1.camelCase = V1, k1.type = w1, k1.now = Date.now, k1.isNumeric = function(e) {
        var t = k1.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k1;
    });
    var Qt = C1.jQuery, Jt = C1.$;
    return k1.noConflict = function(e) {
        return C1.$ === k1 && (C1.$ = Jt), e && C1.jQuery === k1 && (C1.jQuery = Qt), k1;
    }, e2 || (C1.jQuery = C1.$ = k1), k1;
});

//# sourceMappingURL=index.0282b9c3.js.map
