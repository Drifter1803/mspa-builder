function vizFlashContentWrapper() {
    var t = "1" == getUrlParameterByName("fl");
    if (DetectFlashVer(9, 0, 0) || t)
        AC_FL_RunContent.apply(null, arguments);
    else {
        var e = AC_GetArgs(arguments, ".swf", "movie", null, null);
        window.location.pathname.replace(/^\/+/g, "");
        if (e.params.youtubeid)
            document.write('<iframe class="ar-inner" src="https://www.youtube.com/embed/' + e.params.youtubeid + '" frameborder="0" allowfullscreen></iframe>');
        else if (e.params.altimgsrc) {
            var n = '<img src="' + e.params.altimgsrc + '" class="mar-x-auto disp-bl">';
            e.params.altimghref && (n = '<a href="' + e.params.altimghref + '">' + n + "</a>"),
            document.write(n)
        } else
            e.params.staticfb ? window.location = window.location + "/1" : $("#o_flash-container").hide()
    }
}
function getUrlParameterByName(t) {
    t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(location.search);
    return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
}
function setCookie(t, e, n) {
    var o = new Date;
    o.setDate(o.getDate() + n),
    document.cookie = t + "=" + encodeURIComponent(e) + ";path=/" + (null == n ? "" : ";expires=" + o.toGMTString())
}
function getCookie(t) {
    var e, n, o = document.cookie;
    return 0 < o.length && -1 != (e = o.indexOf(t + "=")) ? (e = e + t.length + 1,
    -1 == (n = o.indexOf(";", e)) && (n = o.length),
    decodeURIComponent(o.substring(e, n))) : ""
}
function deleteCookie(t) {
    setCookie(t, "", -1)
}
function areCookiesEnabled() {
    var t = !1;
    return setCookie("_test_", "Hello"),
    "" != getCookie("_test_") && (t = !0,
    deleteCookie("_test_")),
    t
}
function newsletterSignup() {
    var t = 0
      , e = 0
      , n = $("#newsletter-email-feedback")
      , o = $("#newsletter-birthday-feedback")
      , a = $("#newsletter_date_day").val()
      , i = $("#newsletter_date_month").val()
      , r = $("#newsletter_date_year").val()
      , l = $("#newsletter_email").val();
    $("#newsletter_anime").is(":checked") && (e = 1),
    $("#newsletter_manga").is(":checked") && (t = 1),
    validate.email(l, n) & validate.age([i, a, r], o) && $.ajax({
        type: "POST",
        url: "/newsletter/signup",
        data: {
            source: "homestuck.com",
            email: l,
            anime: e,
            manga: t,
            DOB: i + "/" + a + "/" + r
        },
        dataType: "json",
        success: function() {
            Modals.close(),
            Modals.toggle("#modal-thanks"),
            Tracking.sendEvent({
                category: "Newsletter Sign-up",
                action: "Completes Sign-up Process",
                label: "title"
            }),
            $("#modal-thanks h2").html("Thank you for subscribing!"),
            $("#modal-thanks #thanks-left label").html('<a class="flex-width-1 btn-primary pad-x-sm pad-x-md--sm" href="javascript:Modals.toggle(\'#modal-thanks\')">Close</a>')
        },
        error: function(t, e, n) {
            alert(t.statusText),
            alert(JSON.stringify(n))
        }
    })
}
$(document).ready(function() {
    $(document).on("click", ".o_chat-log-btn", function() {
        var t = $(this)
          , e = t.parents(".o_chat-container")
          , n = $(".o_chat-log", e);
        n.hasClass("disp-n") ? (t.html(t.html().replace("Show", "Hide")),
        t.removeClass("active"),
        n.removeClass("disp-n")) : (t.html(t.html().replace("Hide", "Show")),
        t.removeClass("active"),
        n.addClass("disp-n"))
    }),
    $(".o_chat-log-btn").hover(function() {
        $(this).addClass("active")
    }, function() {
        $(this).removeClass("active")
    })
}),
function() {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    "use strict";
    var o = function(t) {
        var e = 0;
        return function() {
            return e < t.length ? {
                done: !1,
                value: t[e++]
            } : {
                done: !0
            }
        }
    }
      , c = this || self
      , n = /^[\w+/_-]+[=]{0,2}$/
      , a = null
      , i = function() {}
      , r = function(t) {
        var e = typeof t;
        if ("object" == e) {
            if (!t)
                return "null";
            if (t instanceof Array)
                return "array";
            if (t instanceof Object)
                return e;
            var n = Object.prototype.toString.call(t);
            if ("[object Window]" == n)
                return "object";
            if ("[object Array]" == n || "number" == typeof t.length && "undefined" != typeof t.splice && "undefined" != typeof t.propertyIsEnumerable && !t.propertyIsEnumerable("splice"))
                return "array";
            if ("[object Function]" == n || "undefined" != typeof t.call && "undefined" != typeof t.propertyIsEnumerable && !t.propertyIsEnumerable("call"))
                return "function"
        } else if ("function" == e && "undefined" == typeof t.call)
            return "object";
        return e
    }
      , t = function(t, e) {
        function n() {}
        n.prototype = e.prototype,
        t.prototype = new n,
        t.prototype.constructor = t
    }
      , l = function(t, e) {
        Object.defineProperty(c, t, {
            configurable: !1,
            get: function() {
                return e
            },
            set: i
        })
    }
      , s = function(t, e) {
        this.b = t === u && e || "",
        this.a = d
    }
      , d = {}
      , u = {}
      , f = function(t, e) {
        t.src = e instanceof s && e.constructor === s && e.a === d ? e.b : "type_error:TrustedResourceUrl",
        null === a && (a = (e = (e = c.document).querySelector && e.querySelector("script[nonce]")) && (e = e.nonce || e.getAttribute("nonce")) && n.test(e) ? e : ""),
        (e = a) && t.setAttribute("nonce", e)
    }
      , p = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ +new Date).toString(36)
    }
      , m = function(t, e) {
        return e = String(e),
        "application/xhtml+xml" === t.contentType && (e = e.toLowerCase()),
        t.createElement(e)
    }
      , h = function(t) {
        this.a = t || c.document || document
    };
    h.prototype.appendChild = function(t, e) {
        t.appendChild(e)
    }
    ;
    var v = function(t, e, n, o, a, i) {
        try {
            var r = t.a
              , l = m(t.a, "SCRIPT");
            l.async = !0,
            f(l, e),
            r.head.appendChild(l),
            l.addEventListener("load", function() {
                a(),
                o && r.head.removeChild(l)
            }),
            l.addEventListener("error", function() {
                0 < n ? v(t, e, n - 1, o, a, i) : (o && r.head.removeChild(l),
                i())
            })
        } catch (c) {
            i()
        }
    }
      , g = c.atob("aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2ljb25zL21hdGVyaWFsL3N5c3RlbS8xeC93YXJuaW5nX2FtYmVyXzI0ZHAucG5n")
      , b = c.atob("WW91IGFyZSBzZWVpbmcgdGhpcyBtZXNzYWdlIGJlY2F1c2UgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlIGlzIGludGVyZmVyaW5nIHdpdGggdGhpcyBwYWdlLg==")
      , y = c.atob("RGlzYWJsZSBhbnkgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlLCB0aGVuIHJlbG9hZCB0aGlzIHBhZ2Uu")
      , w = function(t, e, n) {
        this.b = t,
        this.f = new h(this.b),
        this.a = null,
        this.c = [],
        this.g = !1,
        this.i = e,
        this.h = n
    }
      , k = function(t) {
        if (t.b.body && !t.g) {
            var e = function() {
                C(t),
                c.setTimeout(function() {
                    return S(t, 3)
                }, 50)
            };
            v(t.f, t.i, 2, !0, function() {
                c[t.h] || e()
            }, e),
            t.g = !0
        }
    }
      , C = function(t) {
        for (var e = $(1, 5), n = 0; n < e; n++) {
            var o = _(t);
            t.b.body.appendChild(o),
            t.c.push(o)
        }
        (e = _(t)).style.bottom = "0",
        e.style.left = "0",
        e.style.position = "fixed",
        e.style.width = $(100, 110).toString() + "%",
        e.style.zIndex = $(2147483544, 2147483644).toString(),
        e.style["background-color"] = M(249, 259, 242, 252, 219, 229),
        e.style["box-shadow"] = "0 0 12px #888",
        e.style.color = M(0, 10, 0, 10, 0, 10),
        e.style.display = "flex",
        e.style["justify-content"] = "center",
        e.style["font-family"] = "Roboto, Arial",
        (n = _(t)).style.width = $(80, 85).toString() + "%",
        n.style.maxWidth = $(750, 775).toString() + "px",
        n.style.margin = "24px",
        n.style.display = "flex",
        n.style["align-items"] = "flex-start",
        n.style["justify-content"] = "center",
        (o = m(t.f.a, "IMG")).className = p(),
        o.src = g,
        o.style.height = "24px",
        o.style.width = "24px",
        o.style["padding-right"] = "16px";
        var a = _(t)
          , i = _(t);
        i.style["font-weight"] = "bold",
        i.textContent = b;
        var r = _(t);
        for (r.textContent = y,
        x(t, a, i),
        x(t, a, r),
        x(t, n, o),
        x(t, n, a),
        x(t, e, n),
        t.a = e,
        t.b.body.appendChild(t.a),
        e = $(1, 5),
        n = 0; n < e; n++)
            o = _(t),
            t.b.body.appendChild(o),
            t.c.push(o)
    }
      , x = function(t, e, n) {
        for (var o = $(1, 5), a = 0; a < o; a++) {
            var i = _(t);
            e.appendChild(i)
        }
        for (e.appendChild(n),
        n = $(1, 5),
        o = 0; o < n; o++)
            a = _(t),
            e.appendChild(a)
    }
      , $ = function(t, e) {
        return Math.floor(t + Math.random() * (e - t))
    }
      , M = function(t, e, n, o, a, i) {
        return "rgb(" + $(Math.max(t, 0), Math.min(e, 255)).toString() + "," + $(Math.max(n, 0), Math.min(o, 255)).toString() + "," + $(Math.max(a, 0), Math.min(i, 255)).toString() + ")"
    }
      , _ = function(t) {
        return (t = m(t.f.a, "DIV")).className = p(),
        t
    }
      , S = function(t, e) {
        e <= 0 || null != t.a && 0 != t.a.offsetHeight && 0 != t.a.offsetWidth || (N(t),
        C(t),
        c.setTimeout(function() {
            return S(t, e - 1)
        }, 50))
    }
      , N = function(t) {
        var e = t.c
          , n = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
        for (n = (e = n ? n.call(e) : {
            next: o(e)
        }).next(); !n.done; n = e.next())
            (n = n.value) && n.parentNode && n.parentNode.removeChild(n);
        t.c = [],
        (e = t.a) && e.parentNode && e.parentNode.removeChild(e),
        t.a = null
    }
      , T = function(e, n, t, o, a) {
        var i = W(t)
          , r = function(t) {
            t.appendChild(i),
            c.setTimeout(function() {
                i ? (0 !== i.offsetHeight && 0 !== i.offsetWidth ? n() : e(),
                i.parentNode && i.parentNode.removeChild(i)) : e()
            }, o)
        }
          , l = function(t) {
            document.body ? r(document.body) : 0 < t ? c.setTimeout(function() {
                l(t - 1)
            }, a) : n()
        };
        l(3)
    }
      , W = function(t) {
        var e = document.createElement("div");
        return e.className = t,
        e.style.width = "1px",
        e.style.height = "1px",
        e.style.position = "absolute",
        e.style.left = "-10000px",
        e.style.top = "-10000px",
        e.style.zIndex = "-10000",
        e
    }
      , I = {}
      , Z = null
      , e = function() {}
      , G = "function" == typeof Uint8Array
      , V = function(t, e) {
        t.b = null,
        e || (e = []),
        t.j = void 0,
        t.f = -1,
        t.a = e;
        t: {
            if (e = t.a.length) {
                --e;
                var n = t.a[e];
                if (!(null === n || "object" != typeof n || Array.isArray(n) || G && n instanceof Uint8Array)) {
                    t.g = e - t.f,
                    t.c = n;
                    break t
                }
            }
            t.g = Number.MAX_VALUE
        }
        t.i = {}
    }
      , j = []
      , z = function(t, e) {
        if (e < t.g) {
            e += t.f;
            var n = t.a[e];
            return n === j ? t.a[e] = [] : n
        }
        if (t.c)
            return (n = t.c[e]) === j ? t.c[e] = [] : n
    }
      , U = function(t, e, n) {
        if (t.b || (t.b = {}),
        !t.b[n]) {
            var o = z(t, n);
            o && (t.b[n] = new e(o))
        }
        return t.b[n]
    };
    e.prototype.h = G ? function() {
        var t = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            var t;
            if (void 0 === t && (t = 0),
            !Z) {
                Z = {};
                for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), n = ["+/=", "+/", "-_=", "-_.", "-_"], o = 0; o < 5; o++) {
                    var a = e.concat(n[o].split(""));
                    I[o] = a;
                    for (var i = 0; i < a.length; i++) {
                        var r = a[i];
                        void 0 === Z[r] && (Z[r] = i)
                    }
                }
            }
            for (t = I[t],
            e = [],
            n = 0; n < this.length; n += 3) {
                var l = this[n]
                  , c = (o = n + 1 < this.length) ? this[n + 1] : 0;
                i = l >> 2,
                l = (3 & l) << 4 | c >> 4,
                c = (15 & c) << 2 | (r = (a = n + 2 < this.length) ? this[n + 2] : 0) >> 6,
                r &= 63,
                a || (r = 64,
                o || (c = 64)),
                e.push(t[i], t[l], t[c] || "", t[r] || "")
            }
            return e.join("")
        }
        ;
        try {
            return JSON.stringify(this.a && this.a, D)
        } finally {
            Uint8Array.prototype.toJSON = t
        }
    }
    : function() {
        return JSON.stringify(this.a && this.a, D)
    }
    ;
    var D = function(t, e) {
        return "number" != typeof e || !isNaN(e) && Infinity !== e && -Infinity !== e ? e : String(e)
    };
    e.prototype.toString = function() {
        return this.a.toString()
    }
    ;
    var R = function(t) {
        V(this, t)
    };
    t(R, e);
    var L = function(t) {
        V(this, t)
    };
    t(L, e);
    var B = function(t, e) {
        this.c = new h(t);
        var n = U(e, R, 5);
        n = new s(u,z(n, 4) || ""),
        this.b = new w(t,n,z(e, 4)),
        this.a = e
    }
      , H = function(t, e, n, o) {
        e = new R(e ? JSON.parse(e) : null),
        e = new s(u,z(e, 4) || ""),
        v(t.c, e, 3, !1, n, function() {
            T(function() {
                k(t.b),
                o(!1)
            }, function() {
                o(!0)
            }, z(t.a, 2), z(t.a, 3), z(t.a, 1))
        })
    }
      , Y = function(t, o) {
        E(t, "internal_api_load_with_sb", function(t, e, n) {
            H(o, t, e, n)
        }),
        E(t, "internal_api_sb", function() {
            k(o.b)
        })
    }
      , E = function(t, e, n) {
        t = c.btoa(t + e),
        l(t, n)
    }
      , A = function(t, e) {
        for (var n = [], o = 2; o < arguments.length; ++o)
            n[o - 2] = arguments[o];
        if (o = c.btoa(t + e),
        o = c[o],
        "function" != r(o))
            throw Error("API not exported.");
        o.apply(null, n)
    }
      , Q = function(t) {
        V(this, t)
    };
    t(Q, e);
    var F = function(t) {
        this.h = window,
        this.a = t,
        this.b = z(this.a, 1),
        this.f = U(this.a, R, 2),
        this.g = U(this.a, L, 3),
        this.c = !1
    };
    F.prototype.start = function() {
        O();
        var t = new B(this.h.document,this.g);
        Y(this.b, t),
        P(this)
    }
    ;
    var J, X, O = function() {
        var e = function() {
            if (!c.frames.googlefcPresent)
                if (document.body) {
                    var t = document.createElement("iframe");
                    t.style.display = "none",
                    t.style.width = "0px",
                    t.style.height = "0px",
                    t.style.border = "none",
                    t.style.zIndex = "-1000",
                    t.style.left = "-1000px",
                    t.style.top = "-1000px",
                    t.name = "googlefcPresent",
                    document.body.appendChild(t)
                } else
                    c.setTimeout(e, 5)
        };
        e()
    }, P = function(a) {
        var i = Date.now();
        A(a.b, "internal_api_load_with_sb", a.f.h(), function() {
            var t, e = a.b, n = c[c.btoa(e + "loader_js")];
            if (n) {
                n = c.atob(n),
                n = parseInt(n, 10),
                e = c.btoa(e + "loader_js").split(".");
                var o = c;
                e[0]in o || "undefined" == typeof o.execScript || o.execScript("var " + e[0]);
                for (; e.length && (t = e.shift()); )
                    e.length ? o = o[t] && o[t] !== Object.prototype[t] ? o[t] : o[t] = {} : o[t] = null;
                t = (t = Math.abs(i - n)) < 1728e5 ? 0 : t
            } else
                t = -1;
            0 != t && (A(a.b, "internal_api_sb"),
            q(a, z(a.a, 6)))
        }, function(t) {
            q(a, z(a.a, t ? 4 : 5))
        })
    }, q = function(t, e) {
        t.c || (t.c = !0,
        (t = new c.XMLHttpRequest).open("GET", e, !0),
        t.send())
    };
    X = function(t) {
        "function" == typeof window.atob && (t = window.atob(t),
        t = new Q(t ? JSON.parse(t) : null),
        new F(t).start())
    }
    ,
    c[J = "__d3lUW8vwsKlB__"] = function() {
        for (var t = [], e = 0; e < arguments.length; ++e)
            t[e - 0] = arguments[e];
        c[J] = i,
        X.apply(null, t)
    }
}
.call(this),
window.__d3lUW8vwsKlB__("WyI2OWZlY2JhNDM4MmYzMzg0IixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2YvQUdTS1d4VVdKaTNwLUJiaWpQWXZtb2Z2eDV5STBDa0lWQkNEYjBFbWd1VG5oOHlrLVREM3JUSFlfb2FFd3lhRUxKUFVwQks1WVd3QjNFbDFSVXcxdkdmYjFWRVx1MDAzZCJdCixbMjAsImRpdi1ncHQtYWQiLDEwMCwiTmpsbVpXTmlZVFF6T0RKbU16TTROQVx1MDAzZFx1MDAzZCIsW251bGwsbnVsbCxudWxsLCJodHRwczovL3d3dy5nc3RhdGljLmNvbS8wZW1uL2YvcC82OWZlY2JhNDM4MmYzMzg0LmpzP3VzcXBcdTAwM2RDQTQiXQpdCiwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vbC9BR1NLV3hWdlQtNUNnRUQxZU1lZWJpcldBUi1RZHQzQXRabUpHT0txQ29jbHlzWGVWWjFwNEpqUEM5U2ROTGdkTUZTd1RDSWRQZ21DaUFpWVBpVVlwUk93P2FiXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2wvQUdTS1d4VUxMYUU2a0VLRGV6MU9lQjlvdXZJc0xhUUxYcXJ1SGZ0UUhkbkRGVmpuSHByOHJESWFfeWNoTmMyM0NOcHpFZXRwRFM1c2hTZzhmTDRFYTNvTj9hYlx1MDAzZDJcdTAwMjZzYmZcdTAwM2QxIiwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vbC9BR1NLV3hVVW9jRW9rYWVYUXNybWVROWdRZThQeTFiT0E2YTBndlQtOGhNcmg2TXp5TjJWbHMtVVBEUXNLTzRpVTJfWVo3dGF5WHdMYnFBQ3dLclI0LVN6P3NiZlx1MDAzZDIiXQo="),
function(t) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|android|playbook|silk|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))
}(navigator.userAgent || navigator.vendor || window.opera),
function(t, n) {
    n(function() {
        var t = n("[data-gamenav-open]")
          , e = n("[data-gamenav-close]");
        t.on("click", function(t) {
            t.preventDefault(),
            Gamenav.open()
        }),
        e.on("click", function(t) {
            t.preventDefault(),
            Gamenav.reset()
        })
    })
}(0, jQuery),
Gamenav = {
    open: function() {
        var t = $("#gamenav-container")
          , e = $("#game_overlay")
          , n = $(".curtain")
          , o = $(".curtain-wrapper");
        t.attr("data-gamenav-state", "open"),
        e.attr("data-game-overlay-state", "on"),
        n.length && (n.removeClass("on").addClass("off"),
        o.addClass("off")),
        Modals.setBackgroundScroll(!1),
        e.on("click", function() {
            Gamenav.reset()
        })
    },
    reset: function() {
        var t = $("#gamenav-container")
          , e = $("#game_overlay")
          , n = $(".curtain")
          , o = $(".curtain-wrapper")
          , a = $(window).scrollTop();
        t.attr("data-gamenav-state", "closed"),
        e.attr("data-game-overlay-state", "off").off(),
        Modals.setBackgroundScroll(!0),
        n.length && (n.removeClass("off").addClass("on"),
        o.removeClass("off"),
        a < 1 && window.scrollTo(0, n.height() + 50))
    },
    saveGame: function(t, e) {
        var n = t
          , o = e;
        if (!n || !o) {
            var a = window.location.pathname.replace(/^\/+/g, "").split("/");
            n = a[0],
            o = a[1] || "1"
        }
        setCookie("s-cookie", n, 365),
        setCookie("p-cookie", o, 365)
    },
    autoSaveGame: function() {
        setCookie("autosave-cookie", "on", 365),
        Gamenav.saveGame()
    },
    loadGame: function() {
        var t = getCookie("s-cookie");
        if (t && "" != t) {
            var e = +getCookie("p-cookie") || 1;
            window.location.href = "/" + t + "/" + e
        } else
            window.alert("You did not save your game!")
    },
    deleteGame: function() {
        deleteCookie("autosave-cookie"),
        deleteCookie("s-cookie"),
        deleteCookie("p-cookie")
    },
    checkAutosave: function() {
        if ($("#o_start-over").on("click", function() {
            var t = "on" == getCookie("autosave-cookie");
            return Gamenav.deleteGame(),
            t && setCookie("autosave-cookie", "on", 365),
            !0
        }),
        "on" == getCookie("autosave-cookie")) {
            var t = getCookie("s-cookie");
            if (t && "" != t) {
                var e = window.location.pathname.replace(/^\/+/g, "").split("/")
                  , n = e[0]
                  , o = e[1] || "1"
                  , a = +getCookie("p-cookie") || 1;
                n == t && "1" == o && "1" != a ? window.location.href = "/" + t + "/" + a : Gamenav.saveGame()
            } else
                Gamenav.saveGame()
        }
    }
},
$(document).ready(function() {
    $(".o_external-link").on("click", function(t) {
        t.preventDefault();
        var e = $(this).attr("href");
        setTimeout(function() {
            document.location = e
        }, 750),
        Tracking.sendEvent({
            category: "Read Homestuck Button",
            action: "Click",
            label: "Homestuck Landing Page",
            newpage: e
        })
    });
    var t = getUrlParameterByName("xpw");
    t && "" != t ? ($("#pwd-blank").hide(),
    $("#pwd-wrong").show()) : ($("#pwd-wrong").hide(),
    $("#pwd-blank").show())
}),
function(t, n) {
    n(function() {
        Modals.reset()
    }),
    n(document).on("keyup", function(t) {
        if (27 == t.keyCode) {
            var e = n(".modal[data-modal-state='on']");
            e.length && Modals.doCloseAction(e)
        }
    })
}(0, jQuery),
Modals = {
    context: null,
    isConfirmationDialog: function() {
        return "on" == $("#modal-thanks").attr("data-modal-state")
    },
    reset: function() {
        var t = $("[data-modal-btn]");
        t.off("click"),
        t.on("click", function(t) {
            t.preventDefault(),
            Tracking.checkEvent(this),
            Modals.toggle($(this).attr("href"))
        })
    },
    resetState: function() {
        $(".modal input:not(:button,:radio,:checkbox,[name='utf8'],[name='authenticity_token'])").val(""),
        $(".modal input:radio:checked").prop("checked", !1),
        $(".modal input:checkbox:checked").prop("checked", !1),
        $(".modal option:selected").prop("selected", !1),
        $(".modal .feedback").addClass("disp-n").html(""),
        $("#modal-thanks h2").html(""),
        $("#modal-thanks label").html(""),
        $("#modal-thanks #thanks-small-note").html(""),
        $("#modal-login h2").text(Modals.context && Modals.context.loginMsg ? Modals.context.loginMsg : "Log in to VIZ"),
        $("#modal-signup h2").text(Modals.context && Modals.context.signupMsg ? Modals.context.signupMsg : "Sign up for a new VIZ account"),
        $("[data-modal-state]").attr("data-modal-state", "off")
    },
    close: function() {
        $("#nav-container").attr("data-nav-state", "closed"),
        $("#overlay").attr("data-overlay-state", "off").off(),
        $("input", ".modal[data-modal-state='on']").blur(),
        Modals.setBackgroundScroll(!0),
        Modals.context = null,
        Modals.resetState()
    },
    toggle: function(t) {
        var e = $(t)
          , n = e.attr("data-modal-state")
          , o = $("#overlay");
        "on" == n ? Modals.close() : ($("#nav-container").attr("data-nav-state", "off"),
        o.attr("data-overlay-state", "off").off(),
        Modals.resetState(),
        Modals.setBackgroundScroll(!0),
        e.attr("data-modal-state", "on"),
        o.attr("data-overlay-state", "on"),
        e.css({
            top: $(window).scrollTop() + $(window).height() / 2 + "px"
        }),
        e.scrollTop(0),
        o.on("click", function() {
            Modals.doCloseAction(e)
        }),
        Modals.setBackgroundScroll(!1),
        $("form:not(.filter) :input:visible:enabled:first", e).focus())
    },
    setBackgroundScroll: function(t) {
        var e, n = $(window), o = $("html"), a = o.hasClass("no-scroll");
        if (t) {
            if (!a)
                return;
            e = o.css("top").slice(1, -2),
            o.css("top", "").removeClass("no-scroll"),
            n.scrollTop(e),
            n.off("resize", Modals.resizeModal)
        } else
            e = n.scrollTop(),
            o.addClass("no-scroll").css({
                top: "-" + e + "px"
            }),
            n.on("resize", Modals.resizeModal)
    },
    resizeModal: function() {
        var t = $(".modal[data-modal-state='on']")
          , e = ($(window).height() - t.outerHeight()) / 2;
        t.offset({
            top: e
        })
    },
    doCloseAction: function(t) {
        var e = $(".modal-close", t);
        e.length ? e.click() : Modals.close()
    }
},
function(t, n) {
    n(function() {
        var t = n("[data-nav-open]")
          , e = n("[data-nav-close]");
        t.on("click", function(t) {
            t.preventDefault(),
            Nav.open()
        }),
        e.on("click", function(t) {
            t.preventDefault(),
            Nav.reset()
        })
    })
}(0, jQuery),
Nav = {
    open: function() {
        var t = $("#nav-container")
          , e = $("#overlay")
          , n = $(".curtain")
          , o = $(".curtain-wrapper");
        t.attr("data-nav-state", "open"),
        e.attr("data-overlay-state", "on"),
        n.length && (n.removeClass("on").addClass("off"),
        o.addClass("off")),
        window.scrollTo(0, 0),
        Modals.setBackgroundScroll(!1),
        e.on("click", function() {
            Nav.reset()
        })
    },
    reset: function() {
        var t = $("#nav-container")
          , e = $("#overlay")
          , n = $(".curtain")
          , o = $(".curtain-wrapper")
          , a = $(window).scrollTop();
        t.attr("data-nav-state", "closed"),
        e.attr("data-overlay-state", "off").off(),
        Modals.setBackgroundScroll(!0),
        n.length && (n.removeClass("off").addClass("on"),
        o.removeClass("off"),
        a < 1 && window.scrollTo(0, n.height() + 50))
    }
},
$(document).ready(function() {
    $(document).on("click", "#newsletter_footer_signup", function() {
        $("#newsletter_email").val($("#newsletter_footer_email").val()),
        $("#newsletter_footer_email").val("")
    })
}),
$(document).ready(function() {
    function n(t) {
        var e = t.val()
          , n = t.children("input").val()
          , o = "empty search";
        void 0 !== n && "" != n ? o = n : void 0 !== e && "" != e && (o = e);
        var a = "Search Field";
        a = t.parents("#curtain").length ? "Curtain Header " + a : t.parents("#search").length ? "Results Page " + a : "Header " + a,
        Tracking.sendEvent({
            category: "Search",
            action: o,
            label: a
        });
        var i = t;
        "input" == t.prop("nodeName").toLowerCase() && (i = t.parent()),
        setTimeout(function() {
            i.submit()
        }, 100)
    }
    $("#site-search form").one("submit", function(t) {
        t.preventDefault();
        var e = t.target || t.srcElement;
        n($(e))
    })
}),
function(t, a) {
    function i(t, e) {
        var n = t.offsetParent().width()
          , o = t.width()
          , a = t.position().left
          , i = t.position().top
          , r = e.width()
          , l = 0
          , c = 0;
        c = i - e.height() - d,
        (l = a + o / 2 - r / 2) < s ? l = s : n < l && (l = n - s),
        e.css({
            left: l + "px",
            top: c + "px"
        })
    }
    function r(t, e, n) {
        t.width();
        var o = t.position().left
          , a = e.position().left
          , i = 0;
        i = Math.floor(o - a),
        n.css({
            left: i + "px"
        })
    }
    var s = 20
      , d = 50;
    a(function() {
        a("[data-tooltip]").hover(function(t) {
            var e = a(this)
              , n = e.attr("title")
              , o = a('<div class="tooltip tooltip-above"></div>');
            $arrow = a('<span class="tooltip-arrow"></span>'),
            t.preventDefault(),
            o.html(n).append($arrow).addClass("hide"),
            e.before(o),
            i(e, o),
            window.setTimeout(function() {
                r(e, o, $arrow),
                o.removeClass("hide").addClass("animate")
            }, 100),
            o.on("click", function() {
                o.remove()
            })
        }, function() {
            a(".tooltip").remove()
        })
    })
}(0, jQuery),
jQuery(document).on("click", ".o_event", function() {
    Tracking.checkEvent(this)
}),
Tracking = {
    checkEvent: function(t) {
        Tracking.sendEvent($(t).data("event"))
    },
    sendEvent: function(t) {
        if (!t || "object" != typeof t)
            return !0;
        var e;
        t.category && t.action && ("pathname" == t.label ? t.label = canonicalLocation().pathname : t.label && "title" == t.label && ("VIZ |" != document.title.trim() && "" != document.title.trim() ? t.label = document.title.replace("VIZ | ", "") : t.label = canonicalLocation().pathname),
        e = t);
        var n = {
            nonInteraction: e.noninteraction || !1
        };
        return e.newpage && (n.hitCallback = function() {
            document.location = e.newpage
        }
        ),
        e && ga("send", "event", e.category, e.action, e.label || null, e.value || null, n),
        !0
    },
    sendECommerceEvent: function(t) {
        return !(!t.ID || !t.value) && (ga("ecommerce:addTransaction", {
            id: t.ID,
            affiliation: t.store,
            revenue: t.value
        }),
        ga("ecommerce:addItem", {
            id: t.ID,
            name: t.name,
            sku: t.code,
            category: t.category,
            price: t.value,
            quantity: "1"
        }),
        ga("ecommerce:send"),
        fbq("track", "Purchase", {
            content_ids: [t.code],
            content_type: "Digital Manga",
            value: t.value,
            currency: "USD"
        }),
        !0)
    },
    sendECommerceEventWithLineItems: function(t) {
        if (!t.ID || !t.value)
            return !1;
        var e, n = {
            content_ids: [],
            content_type: "Digital Manga",
            value: t.value,
            currency: "USD"
        };
        ga("ecommerce:addTransaction", {
            id: t.ID,
            affiliation: t.store,
            revenue: t.value
        });
        for (var o = 0; o < t.items.length; o++)
            e = t.items[o],
            n.content_ids.push(e.code),
            ga("ecommerce:addItem", {
                id: t.ID,
                name: e.name,
                sku: e.code,
                category: e.category,
                price: e.value,
                quantity: "1"
            });
        return ga("ecommerce:send"),
        fbq("track", "Purchase", n),
        !0
    },
    appendCampaignParams: function(t, e, n, o) {
        if (!(t && e && n && o))
            return t;
        var a = e ? $.trim(escape(e)) : null
          , i = n ? $.trim(escape(n)) : null
          , r = o ? $.trim(escape(o)) : null
          , l = (0 < t.indexOf("?") ? "&utm_source=" : "?utm_source=") + a + "&utm_medium=" + i + "&utm_campaign=" + r;
        return t + l
    }
};
