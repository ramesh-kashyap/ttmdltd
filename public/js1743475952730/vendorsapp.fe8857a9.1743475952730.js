(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["vendors~app"], {
        "143d": function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return a
            })), i.d(e, "a", (function() {
                return o
            }));
            var r = i("93a9"),
                s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                n = "=";

            function a(t) {
                var e, i, r = "";
                for (e = 0; e + 3 <= t.length; e += 3) i = parseInt(t.substring(e, e + 3), 16), r += s.charAt(i >> 6) + s.charAt(63 & i);
                e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16), r += s.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16), r += s.charAt(i >> 2) + s.charAt((3 & i) << 4));
                while ((3 & r.length) > 0) r += n;
                return r
            }

            function o(t) {
                var e, i = "",
                    a = 0,
                    o = 0;
                for (e = 0; e < t.length; ++e) {
                    if (t.charAt(e) == n) break;
                    var h = s.indexOf(t.charAt(e));
                    h < 0 || (0 == a ? (i += Object(r["b"])(h >> 2), o = 3 & h, a = 1) : 1 == a ? (i += Object(r["b"])(o << 2 | h >> 4), o = 15 & h, a = 2) : 2 == a ? (i += Object(r["b"])(o), i += Object(r["b"])(h >> 2), o = 3 & h, a = 3) : (i += Object(r["b"])(o << 2 | h >> 4), i += Object(r["b"])(15 & h), a = 0))
                }
                return 1 == a && (i += Object(r["b"])(o << 2)), i
            }
        },
        "1ff3": function(t, e, i) {
            "use strict";
            (function(t) {
                i.d(e, "a", (function() {
                    return o
                }));
                var r, s = i("143d"),
                    n = i("ea6a"),
                    a = "undefined" !== typeof t ? null === (r = Object({
                        NODE_ENV: "production",
                        VUE_APP_URL: "https://api.stratoslumex.com/api/",
                        VUE_APP_WEB: "",
                        BASE_URL: "/"
                    })) || void 0 === r ? void 0 : r.npm_package_version : void 0,
                    o = function() {
                        function t(t) {
                            void 0 === t && (t = {}), t = t || {}, this.default_key_size = t.default_key_size ? parseInt(t.default_key_size, 10) : 1024, this.default_public_exponent = t.default_public_exponent || "010001", this.log = t.log || !1, this.key = null
                        }
                        return t.prototype.setKey = function(t) {
                            this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new n["a"](t)
                        }, t.prototype.setPrivateKey = function(t) {
                            this.setKey(t)
                        }, t.prototype.setPublicKey = function(t) {
                            this.setKey(t)
                        }, t.prototype.decrypt = function(t) {
                            try {
                                return this.getKey().decrypt(Object(s["a"])(t))
                            } catch (e) {
                                return !1
                            }
                        }, t.prototype.encrypt = function(t) {
                            try {
                                return Object(s["b"])(this.getKey().encrypt(t))
                            } catch (e) {
                                return !1
                            }
                        }, t.prototype.sign = function(t, e, i) {
                            try {
                                return Object(s["b"])(this.getKey().sign(t, e, i))
                            } catch (r) {
                                return !1
                            }
                        }, t.prototype.verify = function(t, e, i) {
                            try {
                                return this.getKey().verify(t, Object(s["a"])(e), i)
                            } catch (r) {
                                return !1
                            }
                        }, t.prototype.getKey = function(t) {
                            if (!this.key) {
                                if (this.key = new n["a"], t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                                this.key.generate(this.default_key_size, this.default_public_exponent)
                            }
                            return this.key
                        }, t.prototype.getPrivateKey = function() {
                            return this.getKey().getPrivateKey()
                        }, t.prototype.getPrivateKeyB64 = function() {
                            return this.getKey().getPrivateBaseKeyB64()
                        }, t.prototype.getPublicKey = function() {
                            return this.getKey().getPublicKey()
                        }, t.prototype.getPublicKeyB64 = function() {
                            return this.getKey().getPublicBaseKeyB64()
                        }, t.version = a, t
                    }()
            }).call(this, i("4362"))
        },
        2638: function(t, e, i) {
            "use strict";

            function r() {
                return r = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e, i = 1; i < arguments.length; i++)
                        for (var r in e = arguments[i], e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }, r.apply(this, arguments)
            }
            var s = ["attrs", "props", "domProps"],
                n = ["class", "style", "directives"],
                a = ["on", "nativeOn"],
                o = function(t) {
                    return t.reduce((function(t, e) {
                        for (var i in e)
                            if (t[i])
                                if (-1 !== s.indexOf(i)) t[i] = r({}, t[i], e[i]);
                                else if (-1 !== n.indexOf(i)) {
                            var o = t[i] instanceof Array ? t[i] : [t[i]],
                                l = e[i] instanceof Array ? e[i] : [e[i]];
                            t[i] = [].concat(o, l)
                        } else if (-1 !== a.indexOf(i))
                            for (var p in e[i])
                                if (t[i][p]) {
                                    var f = t[i][p] instanceof Array ? t[i][p] : [t[i][p]],
                                        c = e[i][p] instanceof Array ? e[i][p] : [e[i][p]];
                                    t[i][p] = [].concat(f, c)
                                } else t[i][p] = e[i][p];
                        else if ("hook" === i)
                            for (var u in e[i]) t[i][u] = t[i][u] ? h(t[i][u], e[i][u]) : e[i][u];
                        else t[i] = e[i];
                        else t[i] = e[i];
                        return t
                    }), {})
                },
                h = function(t, e) {
                    return function() {
                        t && t.apply(this, arguments), e && e.apply(this, arguments)
                    }
                };
            t.exports = o
        },
        "3c35": function(t, e) {
            (function(e) {
                t.exports = e
            }).call(this, {})
        },
        4362: function(t, e, i) {
            e.nextTick = function(t) {
                    var e = Array.prototype.slice.call(arguments);
                    e.shift(), setTimeout((function() {
                        t.apply(null, e)
                    }), 0)
                }, e.platform = e.arch = e.execPath = e.title = "browser", e.pid = 1, e.browser = !0, e.env = {}, e.argv = [], e.binding = function(t) {
                    throw new Error("No such module. (Possibly not yet loaded)")
                },
                function() {
                    var t, r = "/";
                    e.cwd = function() {
                        return r
                    }, e.chdir = function(e) {
                        t || (t = i("df7c")), r = t.resolve(e, r)
                    }
                }(), e.exit = e.kill = e.umask = e.dlopen = e.uptime = e.memoryUsage = e.uvCounters = function() {}, e.features = {}
        },
        4478: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return n
            }));
            i("14d9");

            function r() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (r = function() {
                    return !!t
                })()
            }

            function s(t, e) {
                return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, s(t, e)
            }

            function n(t, e, i) {
                if (r()) return Reflect.construct.apply(null, arguments);
                var n = [null];
                n.push.apply(n, e);
                var a = new(t.bind.apply(t, n));
                return i && s(a, i.prototype), a
            }
        },
        6981: function(t, e, i) {
            /*!
             * clipboard.js v2.0.11
             * https://clipboardjs.com/
             *
             * Licensed MIT © Zeno Rocha
             */
            ! function(e, i) {
                t.exports = i()
            }(0, (function() {
                return e = {
                    686: function(t, e, i) {
                        "use strict";
                        i.d(e, {
                            default: function() {
                                return v
                            }
                        });
                        e = i(279);
                        var r = i.n(e),
                            s = (e = i(370), i.n(e)),
                            n = (e = i(817), i.n(e));

                        function a(t) {
                            try {
                                return document.execCommand(t)
                            } catch (t) {
                                return
                            }
                        }
                        var o = function(t) {
                            return t = n()(t), a("cut"), t
                        };

                        function h(t, e) {
                            var i, r;
                            i = t, r = "rtl" === document.documentElement.getAttribute("dir"), (t = document.createElement("textarea")).style.fontSize = "12pt", t.style.border = "0", t.style.padding = "0", t.style.margin = "0", t.style.position = "absolute", t.style[r ? "right" : "left"] = "-9999px", r = window.pageYOffset || document.documentElement.scrollTop, t.style.top = "".concat(r, "px"), t.setAttribute("readonly", ""), t.value = i, t = t;
                            return e.container.appendChild(t), e = n()(t), a("copy"), t.remove(), e
                        }
                        var l = function(t) {
                            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                                    container: document.body
                                },
                                i = "";
                            return "string" == typeof t ? i = h(t, e) : t instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == t ? void 0 : t.type) ? i = h(t.value, e) : (i = n()(t), a("copy")), i
                        };

                        function p(t) {
                            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }
                        var f = function() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.action,
                                i = void 0 === e ? "copy" : e,
                                r = t.container;
                            e = t.target, t = t.text;
                            if ("copy" !== i && "cut" !== i) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                            if (void 0 !== e) {
                                if (!e || "object" !== p(e) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === i && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === i && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                            }
                            return t ? l(t, {
                                container: r
                            }) : e ? "cut" === i ? o(e) : l(e, {
                                container: r
                            }) : void 0
                        };

                        function c(t) {
                            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }

                        function u(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var r = e[i];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }

                        function m(t, e) {
                            return (m = Object.setPrototypeOf || function(t, e) {
                                return t.__proto__ = e, t
                            })(t, e)
                        }

                        function d(e) {
                            var i = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                                } catch (t) {
                                    return !1
                                }
                            }();
                            return function() {
                                var t, r = y(e);
                                return t = i ? (t = y(this).constructor, Reflect.construct(r, arguments, t)) : r.apply(this, arguments), r = this, !(t = t) || "object" !== c(t) && "function" != typeof t ? function(t) {
                                    if (void 0 !== t) return t;
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                                }(r) : t
                            }
                        }

                        function y(t) {
                            return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t)
                            })(t)
                        }

                        function g(t, e) {
                            if (t = "data-clipboard-".concat(t), e.hasAttribute(t)) return e.getAttribute(t)
                        }
                        var v = function() {
                            ! function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && m(t, e)
                            }(a, r());
                            var t, e, i, n = d(a);

                            function a(t, e) {
                                var i;
                                return function(t) {
                                    if (!(t instanceof a)) throw new TypeError("Cannot call a class as a function")
                                }(this), (i = n.call(this)).resolveOptions(e), i.listenClick(t), i
                            }
                            return t = a, i = [{
                                key: "copy",
                                value: function(t) {
                                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                                        container: document.body
                                    };
                                    return l(t, e)
                                }
                            }, {
                                key: "cut",
                                value: function(t) {
                                    return o(t)
                                }
                            }, {
                                key: "isSupported",
                                value: function() {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                        e = (t = "string" == typeof t ? [t] : t, !!document.queryCommandSupported);
                                    return t.forEach((function(t) {
                                        e = e && !!document.queryCommandSupported(t)
                                    })), e
                                }
                            }], (e = [{
                                key: "resolveOptions",
                                value: function() {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                    this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === c(t.container) ? t.container : document.body
                                }
                            }, {
                                key: "listenClick",
                                value: function(t) {
                                    var e = this;
                                    this.listener = s()(t, "click", (function(t) {
                                        return e.onClick(t)
                                    }))
                                }
                            }, {
                                key: "onClick",
                                value: function(t) {
                                    var e = t.delegateTarget || t.currentTarget,
                                        i = this.action(e) || "copy";
                                    t = f({
                                        action: i,
                                        container: this.container,
                                        target: this.target(e),
                                        text: this.text(e)
                                    });
                                    this.emit(t ? "success" : "error", {
                                        action: i,
                                        text: t,
                                        trigger: e,
                                        clearSelection: function() {
                                            e && e.focus(), window.getSelection().removeAllRanges()
                                        }
                                    })
                                }
                            }, {
                                key: "defaultAction",
                                value: function(t) {
                                    return g("action", t)
                                }
                            }, {
                                key: "defaultTarget",
                                value: function(t) {
                                    if (t = g("target", t), t) return document.querySelector(t)
                                }
                            }, {
                                key: "defaultText",
                                value: function(t) {
                                    return g("text", t)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.listener.destroy()
                                }
                            }]) && u(t.prototype, e), i && u(t, i), a
                        }()
                    },
                    828: function(t) {
                        var e;
                        "undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector), t.exports = function(t, e) {
                            for (; t && 9 !== t.nodeType;) {
                                if ("function" == typeof t.matches && t.matches(e)) return t;
                                t = t.parentNode
                            }
                        }
                    },
                    438: function(t, e, i) {
                        var r = i(828);

                        function s(t, e, i, s, n) {
                            var a = function(t, e, i, s) {
                                return function(i) {
                                    i.delegateTarget = r(i.target, e), i.delegateTarget && s.call(t, i)
                                }
                            }.apply(this, arguments);
                            return t.addEventListener(i, a, n), {
                                destroy: function() {
                                    t.removeEventListener(i, a, n)
                                }
                            }
                        }
                        t.exports = function(t, e, i, r, n) {
                            return "function" == typeof t.addEventListener ? s.apply(null, arguments) : "function" == typeof i ? s.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, (function(t) {
                                return s(t, e, i, r, n)
                            })))
                        }
                    },
                    879: function(t, e) {
                        e.node = function(t) {
                            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
                        }, e.nodeList = function(t) {
                            var i = Object.prototype.toString.call(t);
                            return void 0 !== t && ("[object NodeList]" === i || "[object HTMLCollection]" === i) && "length" in t && (0 === t.length || e.node(t[0]))
                        }, e.string = function(t) {
                            return "string" == typeof t || t instanceof String
                        }, e.fn = function(t) {
                            return "[object Function]" === Object.prototype.toString.call(t)
                        }
                    },
                    370: function(t, e, i) {
                        var r = i(879),
                            s = i(438);
                        t.exports = function(t, e, i) {
                            if (!t && !e && !i) throw new Error("Missing required arguments");
                            if (!r.string(e)) throw new TypeError("Second argument must be a String");
                            if (!r.fn(i)) throw new TypeError("Third argument must be a Function");
                            if (r.node(t)) return l = e, p = i, (h = t).addEventListener(l, p), {
                                destroy: function() {
                                    h.removeEventListener(l, p)
                                }
                            };
                            if (r.nodeList(t)) return n = t, a = e, o = i, Array.prototype.forEach.call(n, (function(t) {
                                t.addEventListener(a, o)
                            })), {
                                destroy: function() {
                                    Array.prototype.forEach.call(n, (function(t) {
                                        t.removeEventListener(a, o)
                                    }))
                                }
                            };
                            if (r.string(t)) return t = t, e = e, i = i, s(document.body, t, e, i);
                            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                            var n, a, o, h, l, p
                        }
                    },
                    817: function(t) {
                        t.exports = function(t) {
                            var e, i = "SELECT" === t.nodeName ? (t.focus(), t.value) : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName ? ((e = t.hasAttribute("readonly")) || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), e || t.removeAttribute("readonly"), t.value) : (t.hasAttribute("contenteditable") && t.focus(), i = window.getSelection(), (e = document.createRange()).selectNodeContents(t), i.removeAllRanges(), i.addRange(e), i.toString());
                            return i
                        }
                    },
                    279: function(t) {
                        function e() {}
                        e.prototype = {
                            on: function(t, e, i) {
                                var r = this.e || (this.e = {});
                                return (r[t] || (r[t] = [])).push({
                                    fn: e,
                                    ctx: i
                                }), this
                            },
                            once: function(t, e, i) {
                                var r = this;

                                function s() {
                                    r.off(t, s), e.apply(i, arguments)
                                }
                                return s._ = e, this.on(t, s, i)
                            },
                            emit: function(t) {
                                for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, s = i.length; r < s; r++) i[r].fn.apply(i[r].ctx, e);
                                return this
                            },
                            off: function(t, e) {
                                var i = this.e || (this.e = {}),
                                    r = i[t],
                                    s = [];
                                if (r && e)
                                    for (var n = 0, a = r.length; n < a; n++) r[n].fn !== e && r[n].fn._ !== e && s.push(r[n]);
                                return s.length ? i[t] = s : delete i[t], this
                            }
                        }, t.exports = e, t.exports.TinyEmitter = e
                    }
                }, i = {}, t.n = function(e) {
                    var i = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return t.d(i, {
                        a: i
                    }), i
                }, t.d = function(e, i) {
                    for (var r in i) t.o(i, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: i[r]
                    })
                }, t.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, t(686).default;

                function t(r) {
                    if (i[r]) return i[r].exports;
                    var s = i[r] = {
                        exports: {}
                    };
                    return e[r](s, s.exports, t), s.exports
                }
                var e, i
            }))
        },
        8237: function(module, exports, __webpack_require__) {
            (function(process, global) {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                /**
                 * [js-md5]{@link https://github.com/emn178/js-md5}
                 *
                 * @namespace md5
                 * @version 0.7.3
                 * @author Chen, Yi-Cyuan [emn178@gmail.com]
                 * @copyright Chen, Yi-Cyuan 2014-2017
                 * @license MIT
                 */
                (function() {
                    "use strict";
                    var ERROR = "input is invalid type",
                        WINDOW = "object" === typeof window,
                        root = WINDOW ? window : {};
                    root.JS_MD5_NO_WINDOW && (WINDOW = !1);
                    var WEB_WORKER = !WINDOW && "object" === typeof self,
                        NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" === typeof process && process.versions && process.versions.node;
                    NODE_JS ? root = global : WEB_WORKER && (root = self);
                    var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" === typeof module && module.exports,
                        AMD = __webpack_require__("3c35"),
                        ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer,
                        HEX_CHARS = "0123456789abcdef".split(""),
                        EXTRA = [128, 32768, 8388608, -2147483648],
                        SHIFT = [0, 8, 16, 24],
                        OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],
                        BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
                        blocks = [],
                        buffer8;
                    if (ARRAY_BUFFER) {
                        var buffer = new ArrayBuffer(68);
                        buffer8 = new Uint8Array(buffer), blocks = new Uint32Array(buffer)
                    }!root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }), !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(t) {
                        return "object" === typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                    });
                    var createOutputMethod = function(t) {
                            return function(e) {
                                return new Md5(!0).update(e)[t]()
                            }
                        },
                        createMethod = function() {
                            var t = createOutputMethod("hex");
                            NODE_JS && (t = nodeWrap(t)), t.create = function() {
                                return new Md5
                            }, t.update = function(e) {
                                return t.create().update(e)
                            };
                            for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
                                var i = OUTPUT_TYPES[e];
                                t[i] = createOutputMethod(i)
                            }
                            return t
                        },
                        nodeWrap = function(method) {
                            var crypto = eval("require('crypto')"),
                                Buffer = eval("require('buffer').Buffer"),
                                nodeMethod = function(t) {
                                    if ("string" === typeof t) return crypto.createHash("md5").update(t, "utf8").digest("hex");
                                    if (null === t || void 0 === t) throw ERROR;
                                    return t.constructor === ArrayBuffer && (t = new Uint8Array(t)), Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(t)).digest("hex") : method(t)
                                };
                            return nodeMethod
                        };

                    function Md5(t) {
                        if (t) blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks, this.buffer8 = buffer8;
                        else if (ARRAY_BUFFER) {
                            var e = new ArrayBuffer(68);
                            this.buffer8 = new Uint8Array(e), this.blocks = new Uint32Array(e)
                        } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
                    }
                    Md5.prototype.update = function(t) {
                        if (!this.finalized) {
                            var e, i = typeof t;
                            if ("string" !== i) {
                                if ("object" !== i) throw ERROR;
                                if (null === t) throw ERROR;
                                if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                else if (!Array.isArray(t) && (!ARRAY_BUFFER || !ArrayBuffer.isView(t))) throw ERROR;
                                e = !0
                            }
                            var r, s, n = 0,
                                a = t.length,
                                o = this.blocks,
                                h = this.buffer8;
                            while (n < a) {
                                if (this.hashed && (this.hashed = !1, o[0] = o[16], o[16] = o[1] = o[2] = o[3] = o[4] = o[5] = o[6] = o[7] = o[8] = o[9] = o[10] = o[11] = o[12] = o[13] = o[14] = o[15] = 0), e)
                                    if (ARRAY_BUFFER)
                                        for (s = this.start; n < a && s < 64; ++n) h[s++] = t[n];
                                    else
                                        for (s = this.start; n < a && s < 64; ++n) o[s >> 2] |= t[n] << SHIFT[3 & s++];
                                else if (ARRAY_BUFFER)
                                    for (s = this.start; n < a && s < 64; ++n) r = t.charCodeAt(n), r < 128 ? h[s++] = r : r < 2048 ? (h[s++] = 192 | r >> 6, h[s++] = 128 | 63 & r) : r < 55296 || r >= 57344 ? (h[s++] = 224 | r >> 12, h[s++] = 128 | r >> 6 & 63, h[s++] = 128 | 63 & r) : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++n)), h[s++] = 240 | r >> 18, h[s++] = 128 | r >> 12 & 63, h[s++] = 128 | r >> 6 & 63, h[s++] = 128 | 63 & r);
                                else
                                    for (s = this.start; n < a && s < 64; ++n) r = t.charCodeAt(n), r < 128 ? o[s >> 2] |= r << SHIFT[3 & s++] : r < 2048 ? (o[s >> 2] |= (192 | r >> 6) << SHIFT[3 & s++], o[s >> 2] |= (128 | 63 & r) << SHIFT[3 & s++]) : r < 55296 || r >= 57344 ? (o[s >> 2] |= (224 | r >> 12) << SHIFT[3 & s++], o[s >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & s++], o[s >> 2] |= (128 | 63 & r) << SHIFT[3 & s++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++n)), o[s >> 2] |= (240 | r >> 18) << SHIFT[3 & s++], o[s >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & s++], o[s >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & s++], o[s >> 2] |= (128 | 63 & r) << SHIFT[3 & s++]);
                                this.lastByteIndex = s, this.bytes += s - this.start, s >= 64 ? (this.start = s - 64, this.hash(), this.hashed = !0) : this.start = s
                            }
                            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                        }
                    }, Md5.prototype.finalize = function() {
                        if (!this.finalized) {
                            this.finalized = !0;
                            var t = this.blocks,
                                e = this.lastByteIndex;
                            t[e >> 2] |= EXTRA[3 & e], e >= 56 && (this.hashed || this.hash(), t[0] = t[16], t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.bytes << 3, t[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash()
                        }
                    }, Md5.prototype.hash = function() {
                        var t, e, i, r, s, n, a = this.blocks;
                        this.first ? (t = a[0] - 680876937, t = (t << 7 | t >>> 25) - 271733879 << 0, r = (-1732584194 ^ 2004318071 & t) + a[1] - 117830708, r = (r << 12 | r >>> 20) + t << 0, i = (-271733879 ^ r & (-271733879 ^ t)) + a[2] - 1126478375, i = (i << 17 | i >>> 15) + r << 0, e = (t ^ i & (r ^ t)) + a[3] - 1316259209, e = (e << 22 | e >>> 10) + i << 0) : (t = this.h0, e = this.h1, i = this.h2, r = this.h3, t += (r ^ e & (i ^ r)) + a[0] - 680876936, t = (t << 7 | t >>> 25) + e << 0, r += (i ^ t & (e ^ i)) + a[1] - 389564586, r = (r << 12 | r >>> 20) + t << 0, i += (e ^ r & (t ^ e)) + a[2] + 606105819, i = (i << 17 | i >>> 15) + r << 0, e += (t ^ i & (r ^ t)) + a[3] - 1044525330, e = (e << 22 | e >>> 10) + i << 0), t += (r ^ e & (i ^ r)) + a[4] - 176418897, t = (t << 7 | t >>> 25) + e << 0, r += (i ^ t & (e ^ i)) + a[5] + 1200080426, r = (r << 12 | r >>> 20) + t << 0, i += (e ^ r & (t ^ e)) + a[6] - 1473231341, i = (i << 17 | i >>> 15) + r << 0, e += (t ^ i & (r ^ t)) + a[7] - 45705983, e = (e << 22 | e >>> 10) + i << 0, t += (r ^ e & (i ^ r)) + a[8] + 1770035416, t = (t << 7 | t >>> 25) + e << 0, r += (i ^ t & (e ^ i)) + a[9] - 1958414417, r = (r << 12 | r >>> 20) + t << 0, i += (e ^ r & (t ^ e)) + a[10] - 42063, i = (i << 17 | i >>> 15) + r << 0, e += (t ^ i & (r ^ t)) + a[11] - 1990404162, e = (e << 22 | e >>> 10) + i << 0, t += (r ^ e & (i ^ r)) + a[12] + 1804603682, t = (t << 7 | t >>> 25) + e << 0, r += (i ^ t & (e ^ i)) + a[13] - 40341101, r = (r << 12 | r >>> 20) + t << 0, i += (e ^ r & (t ^ e)) + a[14] - 1502002290, i = (i << 17 | i >>> 15) + r << 0, e += (t ^ i & (r ^ t)) + a[15] + 1236535329, e = (e << 22 | e >>> 10) + i << 0, t += (i ^ r & (e ^ i)) + a[1] - 165796510, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ i & (t ^ e)) + a[6] - 1069501632, r = (r << 9 | r >>> 23) + t << 0, i += (t ^ e & (r ^ t)) + a[11] + 643717713, i = (i << 14 | i >>> 18) + r << 0, e += (r ^ t & (i ^ r)) + a[0] - 373897302, e = (e << 20 | e >>> 12) + i << 0, t += (i ^ r & (e ^ i)) + a[5] - 701558691, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ i & (t ^ e)) + a[10] + 38016083, r = (r << 9 | r >>> 23) + t << 0, i += (t ^ e & (r ^ t)) + a[15] - 660478335, i = (i << 14 | i >>> 18) + r << 0, e += (r ^ t & (i ^ r)) + a[4] - 405537848, e = (e << 20 | e >>> 12) + i << 0, t += (i ^ r & (e ^ i)) + a[9] + 568446438, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ i & (t ^ e)) + a[14] - 1019803690, r = (r << 9 | r >>> 23) + t << 0, i += (t ^ e & (r ^ t)) + a[3] - 187363961, i = (i << 14 | i >>> 18) + r << 0, e += (r ^ t & (i ^ r)) + a[8] + 1163531501, e = (e << 20 | e >>> 12) + i << 0, t += (i ^ r & (e ^ i)) + a[13] - 1444681467, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ i & (t ^ e)) + a[2] - 51403784, r = (r << 9 | r >>> 23) + t << 0, i += (t ^ e & (r ^ t)) + a[7] + 1735328473, i = (i << 14 | i >>> 18) + r << 0, e += (r ^ t & (i ^ r)) + a[12] - 1926607734, e = (e << 20 | e >>> 12) + i << 0, s = e ^ i, t += (s ^ r) + a[5] - 378558, t = (t << 4 | t >>> 28) + e << 0, r += (s ^ t) + a[8] - 2022574463, r = (r << 11 | r >>> 21) + t << 0, n = r ^ t, i += (n ^ e) + a[11] + 1839030562, i = (i << 16 | i >>> 16) + r << 0, e += (n ^ i) + a[14] - 35309556, e = (e << 23 | e >>> 9) + i << 0, s = e ^ i, t += (s ^ r) + a[1] - 1530992060, t = (t << 4 | t >>> 28) + e << 0, r += (s ^ t) + a[4] + 1272893353, r = (r << 11 | r >>> 21) + t << 0, n = r ^ t, i += (n ^ e) + a[7] - 155497632, i = (i << 16 | i >>> 16) + r << 0, e += (n ^ i) + a[10] - 1094730640, e = (e << 23 | e >>> 9) + i << 0, s = e ^ i, t += (s ^ r) + a[13] + 681279174, t = (t << 4 | t >>> 28) + e << 0, r += (s ^ t) + a[0] - 358537222, r = (r << 11 | r >>> 21) + t << 0, n = r ^ t, i += (n ^ e) + a[3] - 722521979, i = (i << 16 | i >>> 16) + r << 0, e += (n ^ i) + a[6] + 76029189, e = (e << 23 | e >>> 9) + i << 0, s = e ^ i, t += (s ^ r) + a[9] - 640364487, t = (t << 4 | t >>> 28) + e << 0, r += (s ^ t) + a[12] - 421815835, r = (r << 11 | r >>> 21) + t << 0, n = r ^ t, i += (n ^ e) + a[15] + 530742520, i = (i << 16 | i >>> 16) + r << 0, e += (n ^ i) + a[2] - 995338651, e = (e << 23 | e >>> 9) + i << 0, t += (i ^ (e | ~r)) + a[0] - 198630844, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~i)) + a[7] + 1126891415, r = (r << 10 | r >>> 22) + t << 0, i += (t ^ (r | ~e)) + a[14] - 1416354905, i = (i << 15 | i >>> 17) + r << 0, e += (r ^ (i | ~t)) + a[5] - 57434055, e = (e << 21 | e >>> 11) + i << 0, t += (i ^ (e | ~r)) + a[12] + 1700485571, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~i)) + a[3] - 1894986606, r = (r << 10 | r >>> 22) + t << 0, i += (t ^ (r | ~e)) + a[10] - 1051523, i = (i << 15 | i >>> 17) + r << 0, e += (r ^ (i | ~t)) + a[1] - 2054922799, e = (e << 21 | e >>> 11) + i << 0, t += (i ^ (e | ~r)) + a[8] + 1873313359, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~i)) + a[15] - 30611744, r = (r << 10 | r >>> 22) + t << 0, i += (t ^ (r | ~e)) + a[6] - 1560198380, i = (i << 15 | i >>> 17) + r << 0, e += (r ^ (i | ~t)) + a[13] + 1309151649, e = (e << 21 | e >>> 11) + i << 0, t += (i ^ (e | ~r)) + a[4] - 145523070, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~i)) + a[11] - 1120210379, r = (r << 10 | r >>> 22) + t << 0, i += (t ^ (r | ~e)) + a[2] + 718787259, i = (i << 15 | i >>> 17) + r << 0, e += (r ^ (i | ~t)) + a[9] - 343485551, e = (e << 21 | e >>> 11) + i << 0, this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = e - 271733879 << 0, this.h2 = i - 1732584194 << 0, this.h3 = r + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + e << 0, this.h2 = this.h2 + i << 0, this.h3 = this.h3 + r << 0)
                    }, Md5.prototype.hex = function() {
                        this.finalize();
                        var t = this.h0,
                            e = this.h1,
                            i = this.h2,
                            r = this.h3;
                        return HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15]
                    }, Md5.prototype.toString = Md5.prototype.hex, Md5.prototype.digest = function() {
                        this.finalize();
                        var t = this.h0,
                            e = this.h1,
                            i = this.h2,
                            r = this.h3;
                        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255]
                    }, Md5.prototype.array = Md5.prototype.digest, Md5.prototype.arrayBuffer = function() {
                        this.finalize();
                        var t = new ArrayBuffer(16),
                            e = new Uint32Array(t);
                        return e[0] = this.h0, e[1] = this.h1, e[2] = this.h2, e[3] = this.h3, t
                    }, Md5.prototype.buffer = Md5.prototype.arrayBuffer, Md5.prototype.base64 = function() {
                        for (var t, e, i, r = "", s = this.array(), n = 0; n < 15;) t = s[n++], e = s[n++], i = s[n++], r += BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[63 & (t << 4 | e >>> 4)] + BASE64_ENCODE_CHAR[63 & (e << 2 | i >>> 6)] + BASE64_ENCODE_CHAR[63 & i];
                        return t = s[n], r += BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[t << 4 & 63] + "==", r
                    };
                    var exports = createMethod();
                    COMMON_JS ? module.exports = exports : (root.md5 = exports, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return exports
                    }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
                })()
            }).call(this, __webpack_require__("4362"), __webpack_require__("c8ba"))
        },
        "93a9": function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return s
            })), i.d(e, "d", (function() {
                return n
            })), i.d(e, "f", (function() {
                return a
            })), i.d(e, "g", (function() {
                return o
            })), i.d(e, "e", (function() {
                return h
            })), i.d(e, "c", (function() {
                return l
            })), i.d(e, "a", (function() {
                return p
            }));
            var r = "0123456789abcdefghijklmnopqrstuvwxyz";

            function s(t) {
                return r.charAt(t)
            }

            function n(t, e) {
                return t & e
            }

            function a(t, e) {
                return t | e
            }

            function o(t, e) {
                return t ^ e
            }

            function h(t, e) {
                return t & ~e
            }

            function l(t) {
                if (0 == t) return -1;
                var e = 0;
                return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e
            }

            function p(t) {
                var e = 0;
                while (0 != t) t &= t - 1, ++e;
                return e
            }
        },
        "94f1": function(module, exports, __webpack_require__) {
            "undefined" !== typeof navigator && function(t, e) {
                module.exports = e()
            }(0, (function() {
                "use strict";
                var svgNS = "http://www.w3.org/2000/svg",
                    locationHref = "",
                    _useWebWorker = !1,
                    initialDefaultFrame = -999999,
                    setWebWorker = function(t) {
                        _useWebWorker = !!t
                    },
                    getWebWorker = function() {
                        return _useWebWorker
                    },
                    setLocationHref = function(t) {
                        locationHref = t
                    },
                    getLocationHref = function() {
                        return locationHref
                    };

                function createTag(t) {
                    return document.createElement(t)
                }

                function extendPrototype(t, e) {
                    var i, r, s = t.length;
                    for (i = 0; i < s; i += 1)
                        for (var n in r = t[i].prototype, r) Object.prototype.hasOwnProperty.call(r, n) && (e.prototype[n] = r[n])
                }

                function getDescriptor(t, e) {
                    return Object.getOwnPropertyDescriptor(t, e)
                }

                function createProxyFunction(t) {
                    function e() {}
                    return e.prototype = t, e
                }
                var audioControllerFactory = function() {
                        function t(t) {
                            this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                        }
                        return t.prototype = {
                                addAudio: function(t) {
                                    this.audios.push(t)
                                },
                                pause: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].pause()
                                },
                                resume: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].resume()
                                },
                                setRate: function(t) {
                                    var e, i = this.audios.length;
                                    for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
                                },
                                createAudio: function(t) {
                                    return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                                        src: [t]
                                    }) : {
                                        isPlaying: !1,
                                        play: function() {
                                            this.isPlaying = !0
                                        },
                                        seek: function() {
                                            this.isPlaying = !1
                                        },
                                        playing: function() {},
                                        rate: function() {},
                                        setVolume: function() {}
                                    }
                                },
                                setAudioFactory: function(t) {
                                    this.audioFactory = t
                                },
                                setVolume: function(t) {
                                    this._volume = t, this._updateVolume()
                                },
                                mute: function() {
                                    this._isMuted = !0, this._updateVolume()
                                },
                                unmute: function() {
                                    this._isMuted = !1, this._updateVolume()
                                },
                                getVolume: function() {
                                    return this._volume
                                },
                                _updateVolume: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                                }
                            },
                            function() {
                                return new t
                            }
                    }(),
                    createTypedArray = function() {
                        function t(t, e) {
                            var i, r = 0,
                                s = [];
                            switch (t) {
                                case "int16":
                                case "uint8c":
                                    i = 1;
                                    break;
                                default:
                                    i = 1.1;
                                    break
                            }
                            for (r = 0; r < e; r += 1) s.push(i);
                            return s
                        }

                        function e(e, i) {
                            return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
                        }
                        return "function" === typeof Uint8ClampedArray && "function" === typeof Float32Array ? e : t
                    }();

                function createSizedArray(t) {
                    return Array.apply(null, {
                        length: t
                    })
                }

                function _typeof$6(t) {
                    return _typeof$6 = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, _typeof$6(t)
                }
                var subframeEnabled = !0,
                    expressionsPlugin = null,
                    expressionsInterfaces = null,
                    idPrefix$1 = "",
                    isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                    _shouldRoundValues = !1,
                    bmPow = Math.pow,
                    bmSqrt = Math.sqrt,
                    bmFloor = Math.floor,
                    bmMax = Math.max,
                    bmMin = Math.min,
                    BMMath = {};

                function ProjectInterface$1() {
                    return {}
                }(function() {
                    var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                        i = e.length;
                    for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]]
                })(), BMMath.random = Math.random, BMMath.abs = function(t) {
                    var e = _typeof$6(t);
                    if ("object" === e && t.length) {
                        var i, r = createSizedArray(t.length),
                            s = t.length;
                        for (i = 0; i < s; i += 1) r[i] = Math.abs(t[i]);
                        return r
                    }
                    return Math.abs(t)
                };
                var defaultCurveSegments = 150,
                    degToRads = Math.PI / 180,
                    roundCorner = .5519;

                function roundValues(t) {
                    _shouldRoundValues = !!t
                }

                function bmRnd(t) {
                    return _shouldRoundValues ? Math.round(t) : t
                }

                function styleDiv(t) {
                    t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
                }

                function BMEnterFrameEvent(t, e, i, r) {
                    this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1
                }

                function BMCompleteEvent(t, e) {
                    this.type = t, this.direction = e < 0 ? -1 : 1
                }

                function BMCompleteLoopEvent(t, e, i, r) {
                    this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1
                }

                function BMSegmentStartEvent(t, e, i) {
                    this.type = t, this.firstFrame = e, this.totalFrames = i
                }

                function BMDestroyEvent(t, e) {
                    this.type = t, this.target = e
                }

                function BMRenderFrameErrorEvent(t, e) {
                    this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                }

                function BMConfigErrorEvent(t) {
                    this.type = "configError", this.nativeError = t
                }

                function BMAnimationConfigErrorEvent(t, e) {
                    this.type = t, this.nativeError = e
                }
                var createElementID = function() {
                    var t = 0;
                    return function() {
                        return t += 1, idPrefix$1 + "__lottie_element_" + t
                    }
                }();

                function HSVtoRGB(t, e, i) {
                    var r, s, n, a, o, h, l, p;
                    switch (a = Math.floor(6 * t), o = 6 * t - a, h = i * (1 - e), l = i * (1 - o * e), p = i * (1 - (1 - o) * e), a % 6) {
                        case 0:
                            r = i, s = p, n = h;
                            break;
                        case 1:
                            r = l, s = i, n = h;
                            break;
                        case 2:
                            r = h, s = i, n = p;
                            break;
                        case 3:
                            r = h, s = l, n = i;
                            break;
                        case 4:
                            r = p, s = h, n = i;
                            break;
                        case 5:
                            r = i, s = h, n = l;
                            break;
                        default:
                            break
                    }
                    return [r, s, n]
                }

                function RGBtoHSV(t, e, i) {
                    var r, s = Math.max(t, e, i),
                        n = Math.min(t, e, i),
                        a = s - n,
                        o = 0 === s ? 0 : a / s,
                        h = s / 255;
                    switch (s) {
                        case n:
                            r = 0;
                            break;
                        case t:
                            r = e - i + a * (e < i ? 6 : 0), r /= 6 * a;
                            break;
                        case e:
                            r = i - t + 2 * a, r /= 6 * a;
                            break;
                        case i:
                            r = t - e + 4 * a, r /= 6 * a;
                            break;
                        default:
                            break
                    }
                    return [r, o, h]
                }

                function addSaturationToRGB(t, e) {
                    var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
                }

                function addBrightnessToRGB(t, e) {
                    var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
                }

                function addHueToRGB(t, e) {
                    var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
                }
                var rgbToHex = function() {
                        var t, e, i = [];
                        for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
                        return function(t, e, r) {
                            return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + i[t] + i[e] + i[r]
                        }
                    }(),
                    setSubframeEnabled = function(t) {
                        subframeEnabled = !!t
                    },
                    getSubframeEnabled = function() {
                        return subframeEnabled
                    },
                    setExpressionsPlugin = function(t) {
                        expressionsPlugin = t
                    },
                    getExpressionsPlugin = function() {
                        return expressionsPlugin
                    },
                    setExpressionInterfaces = function(t) {
                        expressionsInterfaces = t
                    },
                    getExpressionInterfaces = function() {
                        return expressionsInterfaces
                    },
                    setDefaultCurveSegments = function(t) {
                        defaultCurveSegments = t
                    },
                    getDefaultCurveSegments = function() {
                        return defaultCurveSegments
                    },
                    setIdPrefix = function(t) {
                        idPrefix$1 = t
                    },
                    getIdPrefix = function() {
                        return idPrefix$1
                    };

                function createNS(t) {
                    return document.createElementNS(svgNS, t)
                }

                function _typeof$5(t) {
                    return _typeof$5 = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, _typeof$5(t)
                }
                var dataManager = function() {
                        var t, e, i = 1,
                            r = [],
                            s = {
                                onmessage: function() {},
                                postMessage: function(e) {
                                    t({
                                        data: e
                                    })
                                }
                            },
                            n = {
                                postMessage: function(t) {
                                    s.onmessage({
                                        data: t
                                    })
                                }
                            };

                        function a(e) {
                            if (window.Worker && window.Blob && getWebWorker()) {
                                var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                                        type: "text/javascript"
                                    }),
                                    r = URL.createObjectURL(i);
                                return new Worker(r)
                            }
                            return t = e, s
                        }

                        function o() {
                            e || (e = a((function(t) {
                                function e() {
                                    function t(e, i) {
                                        var a, o, h, l, p, f, c = e.length;
                                        for (o = 0; o < c; o += 1)
                                            if (a = e[o], "ks" in a && !a.completed) {
                                                if (a.completed = !0, a.hasMask) {
                                                    var m = a.masksProperties;
                                                    for (l = m.length, h = 0; h < l; h += 1)
                                                        if (m[h].pt.k.i) n(m[h].pt.k);
                                                        else
                                                            for (f = m[h].pt.k.length, p = 0; p < f; p += 1) m[h].pt.k[p].s && n(m[h].pt.k[p].s[0]), m[h].pt.k[p].e && n(m[h].pt.k[p].e[0])
                                                }
                                                0 === a.ty ? (a.layers = r(a.refId, i), t(a.layers, i)) : 4 === a.ty ? s(a.shapes) : 5 === a.ty && u(a)
                                            }
                                    }

                                    function e(e, i) {
                                        if (e) {
                                            var s = 0,
                                                n = e.length;
                                            for (s = 0; s < n; s += 1) 1 === e[s].t && (e[s].data.layers = r(e[s].data.refId, i), t(e[s].data.layers, i))
                                        }
                                    }

                                    function i(t, e) {
                                        var i = 0,
                                            r = e.length;
                                        while (i < r) {
                                            if (e[i].id === t) return e[i];
                                            i += 1
                                        }
                                        return null
                                    }

                                    function r(t, e) {
                                        var r = i(t, e);
                                        return r ? r.layers.__used ? JSON.parse(JSON.stringify(r.layers)) : (r.layers.__used = !0, r.layers) : null
                                    }

                                    function s(t) {
                                        var e, i, r, a = t.length;
                                        for (e = a - 1; e >= 0; e -= 1)
                                            if ("sh" === t[e].ty)
                                                if (t[e].ks.k.i) n(t[e].ks.k);
                                                else
                                                    for (r = t[e].ks.k.length, i = 0; i < r; i += 1) t[e].ks.k[i].s && n(t[e].ks.k[i].s[0]), t[e].ks.k[i].e && n(t[e].ks.k[i].e[0]);
                                        else "gr" === t[e].ty && s(t[e].it)
                                    }

                                    function n(t) {
                                        var e, i = t.i.length;
                                        for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                                    }

                                    function a(t, e) {
                                        var i = e ? e.split(".") : [100, 100, 100];
                                        return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                                    }
                                    var o = function() {
                                            var t = [4, 4, 14];

                                            function e(t) {
                                                var e = t.t.d;
                                                t.t.d = {
                                                    k: [{
                                                        s: e,
                                                        t: 0
                                                    }]
                                                }
                                            }

                                            function i(t) {
                                                var i, r = t.length;
                                                for (i = 0; i < r; i += 1) 5 === t[i].ty && e(t[i])
                                            }
                                            return function(e) {
                                                if (a(t, e.v) && (i(e.layers), e.assets)) {
                                                    var r, s = e.assets.length;
                                                    for (r = 0; r < s; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                                                }
                                            }
                                        }(),
                                        h = function() {
                                            var t = [4, 7, 99];
                                            return function(e) {
                                                if (e.chars && !a(t, e.v)) {
                                                    var i, r = e.chars.length;
                                                    for (i = 0; i < r; i += 1) {
                                                        var n = e.chars[i];
                                                        n.data && n.data.shapes && (s(n.data.shapes), n.data.ip = 0, n.data.op = 99999, n.data.st = 0, n.data.sr = 1, n.data.ks = {
                                                            p: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            s: {
                                                                k: [100, 100],
                                                                a: 0
                                                            },
                                                            a: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            r: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            o: {
                                                                k: 100,
                                                                a: 0
                                                            }
                                                        }, e.chars[i].t || (n.data.shapes.push({
                                                            ty: "no"
                                                        }), n.data.shapes[0].it.push({
                                                            p: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            s: {
                                                                k: [100, 100],
                                                                a: 0
                                                            },
                                                            a: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            r: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            o: {
                                                                k: 100,
                                                                a: 0
                                                            },
                                                            sk: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            sa: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            ty: "tr"
                                                        })))
                                                    }
                                                }
                                            }
                                        }(),
                                        l = function() {
                                            var t = [5, 7, 15];

                                            function e(t) {
                                                var e = t.t.p;
                                                "number" === typeof e.a && (e.a = {
                                                    a: 0,
                                                    k: e.a
                                                }), "number" === typeof e.p && (e.p = {
                                                    a: 0,
                                                    k: e.p
                                                }), "number" === typeof e.r && (e.r = {
                                                    a: 0,
                                                    k: e.r
                                                })
                                            }

                                            function i(t) {
                                                var i, r = t.length;
                                                for (i = 0; i < r; i += 1) 5 === t[i].ty && e(t[i])
                                            }
                                            return function(e) {
                                                if (a(t, e.v) && (i(e.layers), e.assets)) {
                                                    var r, s = e.assets.length;
                                                    for (r = 0; r < s; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                                                }
                                            }
                                        }(),
                                        p = function() {
                                            var t = [4, 1, 9];

                                            function e(t) {
                                                var i, r, s, n = t.length;
                                                for (i = 0; i < n; i += 1)
                                                    if ("gr" === t[i].ty) e(t[i].it);
                                                    else if ("fl" === t[i].ty || "st" === t[i].ty)
                                                    if (t[i].c.k && t[i].c.k[0].i)
                                                        for (s = t[i].c.k.length, r = 0; r < s; r += 1) t[i].c.k[r].s && (t[i].c.k[r].s[0] /= 255, t[i].c.k[r].s[1] /= 255, t[i].c.k[r].s[2] /= 255, t[i].c.k[r].s[3] /= 255), t[i].c.k[r].e && (t[i].c.k[r].e[0] /= 255, t[i].c.k[r].e[1] /= 255, t[i].c.k[r].e[2] /= 255, t[i].c.k[r].e[3] /= 255);
                                                    else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                                            }

                                            function i(t) {
                                                var i, r = t.length;
                                                for (i = 0; i < r; i += 1) 4 === t[i].ty && e(t[i].shapes)
                                            }
                                            return function(e) {
                                                if (a(t, e.v) && (i(e.layers), e.assets)) {
                                                    var r, s = e.assets.length;
                                                    for (r = 0; r < s; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                                                }
                                            }
                                        }(),
                                        f = function() {
                                            var t = [4, 4, 18];

                                            function e(t) {
                                                var i, r, s, n = t.length;
                                                for (i = n - 1; i >= 0; i -= 1)
                                                    if ("sh" === t[i].ty)
                                                        if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                                        else
                                                            for (s = t[i].ks.k.length, r = 0; r < s; r += 1) t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed), t[i].ks.k[r].e && (t[i].ks.k[r].e[0].c = t[i].closed);
                                                else "gr" === t[i].ty && e(t[i].it)
                                            }

                                            function i(t) {
                                                var i, r, s, n, a, o, h = t.length;
                                                for (r = 0; r < h; r += 1) {
                                                    if (i = t[r], i.hasMask) {
                                                        var l = i.masksProperties;
                                                        for (n = l.length, s = 0; s < n; s += 1)
                                                            if (l[s].pt.k.i) l[s].pt.k.c = l[s].cl;
                                                            else
                                                                for (o = l[s].pt.k.length, a = 0; a < o; a += 1) l[s].pt.k[a].s && (l[s].pt.k[a].s[0].c = l[s].cl), l[s].pt.k[a].e && (l[s].pt.k[a].e[0].c = l[s].cl)
                                                    }
                                                    4 === i.ty && e(i.shapes)
                                                }
                                            }
                                            return function(e) {
                                                if (a(t, e.v) && (i(e.layers), e.assets)) {
                                                    var r, s = e.assets.length;
                                                    for (r = 0; r < s; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                                                }
                                            }
                                        }();

                                    function c(i) {
                                        i.__complete || (p(i), o(i), h(i), l(i), f(i), t(i.layers, i.assets), e(i.chars, i.assets), i.__complete = !0)
                                    }

                                    function u(t) {
                                        0 === t.t.a.length && t.t.p
                                    }
                                    var m = {};
                                    return m.completeData = c, m.checkColors = p, m.checkChars = h, m.checkPathProperties = l, m.checkShapes = f, m.completeLayers = t, m
                                }
                                if (n.dataManager || (n.dataManager = e()), n.assetLoader || (n.assetLoader = function() {
                                        function t(t) {
                                            var e = t.getResponseHeader("content-type");
                                            return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" === typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                                        }

                                        function e(e, i, r, s) {
                                            var n, a = new XMLHttpRequest;
                                            try {
                                                a.responseType = "json"
                                            } catch (o) {}
                                            a.onreadystatechange = function() {
                                                if (4 === a.readyState)
                                                    if (200 === a.status) n = t(a), r(n);
                                                    else try {
                                                        n = t(a), r(n)
                                                    } catch (o) {
                                                        s && s(o)
                                                    }
                                            };
                                            try {
                                                a.open(["G", "E", "T"].join(""), e, !0)
                                            } catch (h) {
                                                a.open(["G", "E", "T"].join(""), i + "/" + e, !0)
                                            }
                                            a.send()
                                        }
                                        return {
                                            load: e
                                        }
                                    }()), "loadAnimation" === t.data.type) n.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                    n.dataManager.completeData(e), n.postMessage({
                                        id: t.data.id,
                                        payload: e,
                                        status: "success"
                                    })
                                }), (function() {
                                    n.postMessage({
                                        id: t.data.id,
                                        status: "error"
                                    })
                                }));
                                else if ("complete" === t.data.type) {
                                    var i = t.data.animation;
                                    n.dataManager.completeData(i), n.postMessage({
                                        id: t.data.id,
                                        payload: i,
                                        status: "success"
                                    })
                                } else "loadData" === t.data.type && n.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                    n.postMessage({
                                        id: t.data.id,
                                        payload: e,
                                        status: "success"
                                    })
                                }), (function() {
                                    n.postMessage({
                                        id: t.data.id,
                                        status: "error"
                                    })
                                }))
                            })), e.onmessage = function(t) {
                                var e = t.data,
                                    i = e.id,
                                    s = r[i];
                                r[i] = null, "success" === e.status ? s.onComplete(e.payload) : s.onError && s.onError()
                            })
                        }

                        function h(t, e) {
                            i += 1;
                            var s = "processId_" + i;
                            return r[s] = {
                                onComplete: t,
                                onError: e
                            }, s
                        }

                        function l(t, i, r) {
                            o();
                            var s = h(i, r);
                            e.postMessage({
                                type: "loadAnimation",
                                path: t,
                                fullPath: window.location.origin + window.location.pathname,
                                id: s
                            })
                        }

                        function p(t, i, r) {
                            o();
                            var s = h(i, r);
                            e.postMessage({
                                type: "loadData",
                                path: t,
                                fullPath: window.location.origin + window.location.pathname,
                                id: s
                            })
                        }

                        function f(t, i, r) {
                            o();
                            var s = h(i, r);
                            e.postMessage({
                                type: "complete",
                                animation: t,
                                id: s
                            })
                        }
                        return {
                            loadAnimation: l,
                            loadData: p,
                            completeAnimation: f
                        }
                    }(),
                    ImagePreloader = function() {
                        var t = function() {
                            var t = createTag("canvas");
                            t.width = 1, t.height = 1;
                            var e = t.getContext("2d");
                            return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                        }();

                        function e() {
                            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function i() {
                            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function r(t, e, i) {
                            var r = "";
                            if (t.e) r = t.p;
                            else if (e) {
                                var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), r = e + s
                            } else r = i, r += t.u ? t.u : "", r += t.p;
                            return r
                        }

                        function s(t) {
                            var e = 0,
                                i = setInterval(function() {
                                    var r = t.getBBox();
                                    (r.width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
                                }.bind(this), 50)
                        }

                        function n(e) {
                            var i = r(e, this.assetsPath, this.path),
                                s = createNS("image");
                            isSafari ? this.testImageLoaded(s) : s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", function() {
                                n.img = t, this._imageLoaded()
                            }.bind(this), !1), s.setAttributeNS("http://www.w3.org/1999/xlink", "href", i), this._elementHelper.append ? this._elementHelper.append(s) : this._elementHelper.appendChild(s);
                            var n = {
                                img: s,
                                assetData: e
                            };
                            return n
                        }

                        function a(e) {
                            var i = r(e, this.assetsPath, this.path),
                                s = createTag("img");
                            s.crossOrigin = "anonymous", s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", function() {
                                n.img = t, this._imageLoaded()
                            }.bind(this), !1), s.src = i;
                            var n = {
                                img: s,
                                assetData: e
                            };
                            return n
                        }

                        function o(t) {
                            var e = {
                                    assetData: t
                                },
                                i = r(t, this.assetsPath, this.path);
                            return dataManager.loadData(i, function(t) {
                                e.img = t, this._footageLoaded()
                            }.bind(this), function() {
                                e.img = {}, this._footageLoaded()
                            }.bind(this)), e
                        }

                        function h(t, e) {
                            var i;
                            this.imagesLoadedCb = e;
                            var r = t.length;
                            for (i = 0; i < r; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
                        }

                        function l(t) {
                            this.path = t || ""
                        }

                        function p(t) {
                            this.assetsPath = t || ""
                        }

                        function f(t) {
                            var e = 0,
                                i = this.images.length;
                            while (e < i) {
                                if (this.images[e].assetData === t) return this.images[e].img;
                                e += 1
                            }
                            return null
                        }

                        function c() {
                            this.imagesLoadedCb = null, this.images.length = 0
                        }

                        function u() {
                            return this.totalImages === this.loadedAssets
                        }

                        function m() {
                            return this.totalFootages === this.loadedFootagesCount
                        }

                        function d(t, e) {
                            "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                        }

                        function y() {
                            this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = o.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                        }
                        return y.prototype = {
                            loadAssets: h,
                            setAssetsPath: p,
                            setPath: l,
                            loadedImages: u,
                            loadedFootages: m,
                            destroy: c,
                            getAsset: f,
                            createImgData: a,
                            createImageData: n,
                            imageLoaded: e,
                            footageLoaded: i,
                            setCacheType: d
                        }, y
                    }();

                function BaseEvent() {}
                BaseEvent.prototype = {
                    triggerEvent: function(t, e) {
                        if (this._cbs[t])
                            for (var i = this._cbs[t], r = 0; r < i.length; r += 1) i[r](e)
                    },
                    addEventListener: function(t, e) {
                        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                            function() {
                                this.removeEventListener(t, e)
                            }.bind(this)
                    },
                    removeEventListener: function(t, e) {
                        if (e) {
                            if (this._cbs[t]) {
                                var i = 0,
                                    r = this._cbs[t].length;
                                while (i < r) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
                                this._cbs[t].length || (this._cbs[t] = null)
                            }
                        } else this._cbs[t] = null
                    }
                };
                var markerParser = function() {
                        function t(t) {
                            for (var e, i = t.split("\r\n"), r = {}, s = 0, n = 0; n < i.length; n += 1) e = i[n].split(":"), 2 === e.length && (r[e[0]] = e[1].trim(), s += 1);
                            if (0 === s) throw new Error;
                            return r
                        }
                        return function(e) {
                            for (var i = [], r = 0; r < e.length; r += 1) {
                                var s = e[r],
                                    n = {
                                        time: s.tm,
                                        duration: s.dr
                                    };
                                try {
                                    n.payload = JSON.parse(e[r].cm)
                                } catch (a) {
                                    try {
                                        n.payload = t(e[r].cm)
                                    } catch (o) {
                                        n.payload = {
                                            name: e[r].cm
                                        }
                                    }
                                }
                                i.push(n)
                            }
                            return i
                        }
                    }(),
                    ProjectInterface = function() {
                        function t(t) {
                            this.compositions.push(t)
                        }
                        return function() {
                            function e(t) {
                                var e = 0,
                                    i = this.compositions.length;
                                while (e < i) {
                                    if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                    e += 1
                                }
                                return null
                            }
                            return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                        }
                    }(),
                    renderers = {},
                    registerRenderer = function(t, e) {
                        renderers[t] = e
                    };

                function getRenderer(t) {
                    return renderers[t]
                }

                function getRegisteredRenderer() {
                    if (renderers.canvas) return "canvas";
                    for (var t in renderers)
                        if (renderers[t]) return t;
                    return ""
                }

                function _typeof$4(t) {
                    return _typeof$4 = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, _typeof$4(t)
                }
                var AnimationItem = function() {
                    this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
                };
                extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                    (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                    var e = "svg";
                    t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                    var i = getRenderer(e);
                    this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
                }, AnimationItem.prototype.onSetupError = function() {
                    this.trigger("data_failed")
                }, AnimationItem.prototype.setupAnimation = function(t) {
                    dataManager.completeAnimation(t, this.configAnimation)
                }, AnimationItem.prototype.setData = function(t, e) {
                    e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
                    var i = {
                            wrapper: t,
                            animationData: e
                        },
                        r = t.attributes;
                    i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
                    var s = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
                    "false" === s ? i.loop = !1 : "true" === s ? i.loop = !0 : "" !== s && (i.loop = parseInt(s, 10));
                    var n = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
                    i.autoplay = "false" !== n, i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "";
                    var a = r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "";
                    "false" === a && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger("destroy")
                }, AnimationItem.prototype.includeLayers = function(t) {
                    t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                    var e, i, r = this.animationData.layers,
                        s = r.length,
                        n = t.layers,
                        a = n.length;
                    for (i = 0; i < a; i += 1) {
                        e = 0;
                        while (e < s) {
                            if (r[e].id === n[i].id) {
                                r[e] = n[i];
                                break
                            }
                            e += 1
                        }
                    }
                    if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                        for (s = t.assets.length, e = 0; e < s; e += 1) this.animationData.assets.push(t.assets[e]);
                    this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
                }, AnimationItem.prototype.onSegmentComplete = function(t) {
                    this.animationData = t;
                    var e = getExpressionsPlugin();
                    e && e.initExpressions(this), this.loadNextSegment()
                }, AnimationItem.prototype.loadNextSegment = function() {
                    var t = this.animationData.segments;
                    if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                    var e = t.shift();
                    this.timeCompleted = e.time * this.frameRate;
                    var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                    this.segmentPos += 1, dataManager.loadData(i, this.includeLayers.bind(this), function() {
                        this.trigger("data_failed")
                    }.bind(this))
                }, AnimationItem.prototype.loadSegments = function() {
                    var t = this.animationData.segments;
                    t || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                }, AnimationItem.prototype.imagesLoaded = function() {
                    this.trigger("loaded_images"), this.checkLoaded()
                }, AnimationItem.prototype.preloadImages = function() {
                    this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                }, AnimationItem.prototype.configAnimation = function(t) {
                    if (this.renderer) try {
                        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                    } catch (e) {
                        this.triggerConfigError(e)
                    }
                }, AnimationItem.prototype.waitForFontsLoaded = function() {
                    this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                }, AnimationItem.prototype.checkLoaded = function() {
                    if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                        this.isLoaded = !0;
                        var t = getExpressionsPlugin();
                        t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                            this.trigger("DOMLoaded")
                        }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                    }
                }, AnimationItem.prototype.resize = function(t, e) {
                    var i = "number" === typeof t ? t : void 0,
                        r = "number" === typeof e ? e : void 0;
                    this.renderer.updateContainerSize(i, r)
                }, AnimationItem.prototype.setSubframe = function(t) {
                    this.isSubframeEnabled = !!t
                }, AnimationItem.prototype.gotoFrame = function() {
                    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                }, AnimationItem.prototype.renderFrame = function() {
                    if (!1 !== this.isLoaded && this.renderer) try {
                        this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (t) {
                        this.triggerRenderFrameError(t)
                    }
                }, AnimationItem.prototype.play = function(t) {
                    t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                }, AnimationItem.prototype.pause = function(t) {
                    t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                }, AnimationItem.prototype.togglePause = function(t) {
                    t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
                }, AnimationItem.prototype.stop = function(t) {
                    t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                }, AnimationItem.prototype.getMarkerData = function(t) {
                    for (var e, i = 0; i < this.markers.length; i += 1)
                        if (e = this.markers[i], e.payload && e.payload.name === t) return e;
                    return null
                }, AnimationItem.prototype.goToAndStop = function(t, e, i) {
                    if (!i || this.name === i) {
                        var r = Number(t);
                        if (isNaN(r)) {
                            var s = this.getMarkerData(t);
                            s && this.goToAndStop(s.time, !0)
                        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                        this.pause()
                    }
                }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
                    if (!i || this.name === i) {
                        var r = Number(t);
                        if (isNaN(r)) {
                            var s = this.getMarkerData(t);
                            s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0))
                        } else this.goToAndStop(r, e, i);
                        this.play()
                    }
                }, AnimationItem.prototype.advanceTime = function(t) {
                    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                        var e = this.currentRawFrame + t * this.frameModifier,
                            i = !1;
                        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                    }
                }, AnimationItem.prototype.adjustSegment = function(t, e) {
                    this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                }, AnimationItem.prototype.setSegment = function(t, e) {
                    var i = -1;
                    this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
                }, AnimationItem.prototype.playSegments = function(t, e) {
                    if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
                        var i, r = t.length;
                        for (i = 0; i < r; i += 1) this.segments.push(t[i])
                    } else this.segments.push(t);
                    this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                }, AnimationItem.prototype.resetSegments = function(t) {
                    this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                }, AnimationItem.prototype.checkSegments = function(t) {
                    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                }, AnimationItem.prototype.destroy = function(t) {
                    t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
                }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                    this.currentRawFrame = t, this.gotoFrame()
                }, AnimationItem.prototype.setSpeed = function(t) {
                    this.playSpeed = t, this.updaFrameModifier()
                }, AnimationItem.prototype.setDirection = function(t) {
                    this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                }, AnimationItem.prototype.setLoop = function(t) {
                    this.loop = t
                }, AnimationItem.prototype.setVolume = function(t, e) {
                    e && this.name !== e || this.audioController.setVolume(t)
                }, AnimationItem.prototype.getVolume = function() {
                    return this.audioController.getVolume()
                }, AnimationItem.prototype.mute = function(t) {
                    t && this.name !== t || this.audioController.mute()
                }, AnimationItem.prototype.unmute = function(t) {
                    t && this.name !== t || this.audioController.unmute()
                }, AnimationItem.prototype.updaFrameModifier = function() {
                    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                }, AnimationItem.prototype.getPath = function() {
                    return this.path
                }, AnimationItem.prototype.getAssetsPath = function(t) {
                    var e = "";
                    if (t.e) e = t.p;
                    else if (this.assetsPath) {
                        var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
                    } else e = this.path, e += t.u ? t.u : "", e += t.p;
                    return e
                }, AnimationItem.prototype.getAssetData = function(t) {
                    var e = 0,
                        i = this.assets.length;
                    while (e < i) {
                        if (t === this.assets[e].id) return this.assets[e];
                        e += 1
                    }
                    return null
                }, AnimationItem.prototype.hide = function() {
                    this.renderer.hide()
                }, AnimationItem.prototype.show = function() {
                    this.renderer.show()
                }, AnimationItem.prototype.getDuration = function(t) {
                    return t ? this.totalFrames : this.totalFrames / this.frameRate
                }, AnimationItem.prototype.updateDocumentData = function(t, e, i) {
                    try {
                        var r = this.renderer.getElementByPath(t);
                        r.updateDocumentData(e, i)
                    } catch (s) {}
                }, AnimationItem.prototype.trigger = function(t) {
                    if (this._cbs && this._cbs[t]) switch (t) {
                        case "enterFrame":
                            this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                            break;
                        case "drawnFrame":
                            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                            break;
                        case "loopComplete":
                            this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                            break;
                        case "complete":
                            this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                            break;
                        case "segmentStart":
                            this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                            break;
                        case "destroy":
                            this.triggerEvent(t, new BMDestroyEvent(t, this));
                            break;
                        default:
                            this.triggerEvent(t)
                    }
                    "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
                }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
                    var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                }, AnimationItem.prototype.triggerConfigError = function(t) {
                    var e = new BMConfigErrorEvent(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                };
                var animationManager = function() {
                        var t = {},
                            e = [],
                            i = 0,
                            r = 0,
                            s = 0,
                            n = !0,
                            a = !1;

                        function o(t) {
                            var i = 0,
                                s = t.target;
                            while (i < r) e[i].animation === s && (e.splice(i, 1), i -= 1, r -= 1, s.isPaused || f()), i += 1
                        }

                        function h(t, i) {
                            if (!t) return null;
                            var s = 0;
                            while (s < r) {
                                if (e[s].elem === t && null !== e[s].elem) return e[s].animation;
                                s += 1
                            }
                            var n = new AnimationItem;
                            return c(n, t), n.setData(t, i), n
                        }

                        function l() {
                            var t, i = e.length,
                                r = [];
                            for (t = 0; t < i; t += 1) r.push(e[t].animation);
                            return r
                        }

                        function p() {
                            s += 1, A()
                        }

                        function f() {
                            s -= 1
                        }

                        function c(t, i) {
                            t.addEventListener("destroy", o), t.addEventListener("_active", p), t.addEventListener("_idle", f), e.push({
                                elem: i,
                                animation: t
                            }), r += 1
                        }

                        function u(t) {
                            var e = new AnimationItem;
                            return c(e, null), e.setParams(t), e
                        }

                        function m(t, i) {
                            var s;
                            for (s = 0; s < r; s += 1) e[s].animation.setSpeed(t, i)
                        }

                        function d(t, i) {
                            var s;
                            for (s = 0; s < r; s += 1) e[s].animation.setDirection(t, i)
                        }

                        function y(t) {
                            var i;
                            for (i = 0; i < r; i += 1) e[i].animation.play(t)
                        }

                        function g(t) {
                            var o, h = t - i;
                            for (o = 0; o < r; o += 1) e[o].animation.advanceTime(h);
                            i = t, s && !a ? window.requestAnimationFrame(g) : n = !0
                        }

                        function v(t) {
                            i = t, window.requestAnimationFrame(g)
                        }

                        function b(t) {
                            var i;
                            for (i = 0; i < r; i += 1) e[i].animation.pause(t)
                        }

                        function E(t, i, s) {
                            var n;
                            for (n = 0; n < r; n += 1) e[n].animation.goToAndStop(t, i, s)
                        }

                        function S(t) {
                            var i;
                            for (i = 0; i < r; i += 1) e[i].animation.stop(t)
                        }

                        function x(t) {
                            var i;
                            for (i = 0; i < r; i += 1) e[i].animation.togglePause(t)
                        }

                        function P(t) {
                            var i;
                            for (i = r - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
                        }

                        function T(t, e, i) {
                            var r, s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                n = s.length;
                            for (r = 0; r < n; r += 1) i && s[r].setAttribute("data-bm-type", i), h(s[r], t);
                            if (e && 0 === n) {
                                i || (i = "svg");
                                var a = document.getElementsByTagName("body")[0];
                                a.innerText = "";
                                var o = createTag("div");
                                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), a.appendChild(o), h(o, t)
                            }
                        }

                        function C() {
                            var t;
                            for (t = 0; t < r; t += 1) e[t].animation.resize()
                        }

                        function A() {
                            !a && s && n && (window.requestAnimationFrame(v), n = !1)
                        }

                        function w() {
                            a = !0
                        }

                        function _() {
                            a = !1, A()
                        }

                        function D(t, i) {
                            var s;
                            for (s = 0; s < r; s += 1) e[s].animation.setVolume(t, i)
                        }

                        function M(t) {
                            var i;
                            for (i = 0; i < r; i += 1) e[i].animation.mute(t)
                        }

                        function k(t) {
                            var i;
                            for (i = 0; i < r; i += 1) e[i].animation.unmute(t)
                        }
                        return t.registerAnimation = h, t.loadAnimation = u, t.setSpeed = m, t.setDirection = d, t.play = y, t.pause = b, t.stop = S, t.togglePause = x, t.searchAnimations = T, t.resize = C, t.goToAndStop = E, t.destroy = P, t.freeze = w, t.unfreeze = _, t.setVolume = D, t.mute = M, t.unmute = k, t.getRegisteredAnimations = l, t
                    }(),
                    BezierFactory = function() {
                        var t = {};
                        t.getBezierEasing = i;
                        var e = {};

                        function i(t, i, r, s, n) {
                            var a = n || ("bez_" + t + "_" + i + "_" + r + "_" + s).replace(/\./g, "p");
                            if (e[a]) return e[a];
                            var o = new g([t, i, r, s]);
                            return e[a] = o, o
                        }
                        var r = 4,
                            s = .001,
                            n = 1e-7,
                            a = 10,
                            o = 11,
                            h = 1 / (o - 1),
                            l = "function" === typeof Float32Array;

                        function p(t, e) {
                            return 1 - 3 * e + 3 * t
                        }

                        function f(t, e) {
                            return 3 * e - 6 * t
                        }

                        function c(t) {
                            return 3 * t
                        }

                        function u(t, e, i) {
                            return ((p(e, i) * t + f(e, i)) * t + c(e)) * t
                        }

                        function m(t, e, i) {
                            return 3 * p(e, i) * t * t + 2 * f(e, i) * t + c(e)
                        }

                        function d(t, e, i, r, s) {
                            var o, h, l = 0;
                            do {
                                h = e + (i - e) / 2, o = u(h, r, s) - t, o > 0 ? i = h : e = h
                            } while (Math.abs(o) > n && ++l < a);
                            return h
                        }

                        function y(t, e, i, s) {
                            for (var n = 0; n < r; ++n) {
                                var a = m(e, i, s);
                                if (0 === a) return e;
                                var o = u(e, i, s) - t;
                                e -= o / a
                            }
                            return e
                        }

                        function g(t) {
                            this._p = t, this._mSampleValues = l ? new Float32Array(o) : new Array(o), this._precomputed = !1, this.get = this.get.bind(this)
                        }
                        return g.prototype = {
                            get: function(t) {
                                var e = this._p[0],
                                    i = this._p[1],
                                    r = this._p[2],
                                    s = this._p[3];
                                return this._precomputed || this._precompute(), e === i && r === s ? t : 0 === t ? 0 : 1 === t ? 1 : u(this._getTForX(t), i, s)
                            },
                            _precompute: function() {
                                var t = this._p[0],
                                    e = this._p[1],
                                    i = this._p[2],
                                    r = this._p[3];
                                this._precomputed = !0, t === e && i === r || this._calcSampleValues()
                            },
                            _calcSampleValues: function() {
                                for (var t = this._p[0], e = this._p[2], i = 0; i < o; ++i) this._mSampleValues[i] = u(i * h, t, e)
                            },
                            _getTForX: function(t) {
                                for (var e = this._p[0], i = this._p[2], r = this._mSampleValues, n = 0, a = 1, l = o - 1; a !== l && r[a] <= t; ++a) n += h;
                                --a;
                                var p = (t - r[a]) / (r[a + 1] - r[a]),
                                    f = n + p * h,
                                    c = m(f, e, i);
                                return c >= s ? y(t, f, e, i) : 0 === c ? f : d(t, n, n + h, e, i)
                            }
                        }, t
                    }(),
                    pooling = function() {
                        function t(t) {
                            return t.concat(createSizedArray(t.length))
                        }
                        return {
                            double: t
                        }
                    }(),
                    poolFactory = function() {
                        return function(t, e, i) {
                            var r = 0,
                                s = t,
                                n = createSizedArray(s),
                                a = {
                                    newElement: o,
                                    release: h
                                };

                            function o() {
                                var t;
                                return r ? (r -= 1, t = n[r]) : t = e(), t
                            }

                            function h(t) {
                                r === s && (n = pooling["double"](n), s *= 2), i && i(t), n[r] = t, r += 1
                            }
                            return a
                        }
                    }(),
                    bezierLengthPool = function() {
                        function t() {
                            return {
                                addedLength: 0,
                                percents: createTypedArray("float32", getDefaultCurveSegments()),
                                lengths: createTypedArray("float32", getDefaultCurveSegments())
                            }
                        }
                        return poolFactory(8, t)
                    }(),
                    segmentsLengthPool = function() {
                        function t() {
                            return {
                                lengths: [],
                                totalLength: 0
                            }
                        }

                        function e(t) {
                            var e, i = t.lengths.length;
                            for (e = 0; e < i; e += 1) bezierLengthPool.release(t.lengths[e]);
                            t.lengths.length = 0
                        }
                        return poolFactory(8, t, e)
                    }();

                function bezFunction() {
                    var t = Math;

                    function e(t, e, i, r, s, n) {
                        var a = t * r + e * s + i * n - s * r - n * t - i * e;
                        return a > -.001 && a < .001
                    }

                    function i(i, r, s, n, a, o, h, l, p) {
                        if (0 === s && 0 === o && 0 === p) return e(i, r, n, a, h, l);
                        var f, c = t.sqrt(t.pow(n - i, 2) + t.pow(a - r, 2) + t.pow(o - s, 2)),
                            u = t.sqrt(t.pow(h - i, 2) + t.pow(l - r, 2) + t.pow(p - s, 2)),
                            m = t.sqrt(t.pow(h - n, 2) + t.pow(l - a, 2) + t.pow(p - o, 2));
                        return f = c > u ? c > m ? c - u - m : m - u - c : m > u ? m - u - c : u - c - m, f > -1e-4 && f < 1e-4
                    }
                    var r = function() {
                        return function(t, e, i, r) {
                            var s, n, a, o, h, l, p = getDefaultCurveSegments(),
                                f = 0,
                                c = [],
                                u = [],
                                m = bezierLengthPool.newElement();
                            for (a = i.length, s = 0; s < p; s += 1) {
                                for (h = s / (p - 1), l = 0, n = 0; n < a; n += 1) o = bmPow(1 - h, 3) * t[n] + 3 * bmPow(1 - h, 2) * h * i[n] + 3 * (1 - h) * bmPow(h, 2) * r[n] + bmPow(h, 3) * e[n], c[n] = o, null !== u[n] && (l += bmPow(c[n] - u[n], 2)), u[n] = c[n];
                                l && (l = bmSqrt(l), f += l), m.percents[s] = h, m.lengths[s] = f
                            }
                            return m.addedLength = f, m
                        }
                    }();

                    function s(t) {
                        var e, i = segmentsLengthPool.newElement(),
                            s = t.c,
                            n = t.v,
                            a = t.o,
                            o = t.i,
                            h = t._length,
                            l = i.lengths,
                            p = 0;
                        for (e = 0; e < h - 1; e += 1) l[e] = r(n[e], n[e + 1], a[e], o[e + 1]), p += l[e].addedLength;
                        return s && h && (l[e] = r(n[e], n[0], a[e], o[0]), p += l[e].addedLength), i.totalLength = p, i
                    }

                    function n(t) {
                        this.segmentLength = 0, this.points = new Array(t)
                    }

                    function a(t, e) {
                        this.partialLength = t, this.point = e
                    }
                    var o = function() {
                        var t = {};
                        return function(i, r, s, o) {
                            var h = (i[0] + "_" + i[1] + "_" + r[0] + "_" + r[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                            if (!t[h]) {
                                var l, p, f, c, u, m, d, y = getDefaultCurveSegments(),
                                    g = 0,
                                    v = null;
                                2 === i.length && (i[0] !== r[0] || i[1] !== r[1]) && e(i[0], i[1], r[0], r[1], i[0] + s[0], i[1] + s[1]) && e(i[0], i[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) && (y = 2);
                                var b = new n(y);
                                for (f = s.length, l = 0; l < y; l += 1) {
                                    for (d = createSizedArray(f), u = l / (y - 1), m = 0, p = 0; p < f; p += 1) c = bmPow(1 - u, 3) * i[p] + 3 * bmPow(1 - u, 2) * u * (i[p] + s[p]) + 3 * (1 - u) * bmPow(u, 2) * (r[p] + o[p]) + bmPow(u, 3) * r[p], d[p] = c, null !== v && (m += bmPow(d[p] - v[p], 2));
                                    m = bmSqrt(m), g += m, b.points[l] = new a(m, d), v = d
                                }
                                b.segmentLength = g, t[h] = b
                            }
                            return t[h]
                        }
                    }();

                    function h(t, e) {
                        var i = e.percents,
                            r = e.lengths,
                            s = i.length,
                            n = bmFloor((s - 1) * t),
                            a = t * e.addedLength,
                            o = 0;
                        if (n === s - 1 || 0 === n || a === r[n]) return i[n];
                        var h = r[n] > a ? -1 : 1,
                            l = !0;
                        while (l)
                            if (r[n] <= a && r[n + 1] > a ? (o = (a - r[n]) / (r[n + 1] - r[n]), l = !1) : n += h, n < 0 || n >= s - 1) {
                                if (n === s - 1) return i[n];
                                l = !1
                            }
                        return i[n] + (i[n + 1] - i[n]) * o
                    }

                    function l(e, i, r, s, n, a) {
                        var o = h(n, a),
                            l = 1 - o,
                            p = t.round(1e3 * (l * l * l * e[0] + (o * l * l + l * o * l + l * l * o) * r[0] + (o * o * l + l * o * o + o * l * o) * s[0] + o * o * o * i[0])) / 1e3,
                            f = t.round(1e3 * (l * l * l * e[1] + (o * l * l + l * o * l + l * l * o) * r[1] + (o * o * l + l * o * o + o * l * o) * s[1] + o * o * o * i[1])) / 1e3;
                        return [p, f]
                    }
                    var p = createTypedArray("float32", 8);

                    function f(e, i, r, s, n, a, o) {
                        n < 0 ? n = 0 : n > 1 && (n = 1);
                        var l = h(n, o);
                        a = a > 1 ? 1 : a;
                        var f, c = h(a, o),
                            u = e.length,
                            m = 1 - l,
                            d = 1 - c,
                            y = m * m * m,
                            g = l * m * m * 3,
                            v = l * l * m * 3,
                            b = l * l * l,
                            E = m * m * d,
                            S = l * m * d + m * l * d + m * m * c,
                            x = l * l * d + m * l * c + l * m * c,
                            P = l * l * c,
                            T = m * d * d,
                            C = l * d * d + m * c * d + m * d * c,
                            A = l * c * d + m * c * c + l * d * c,
                            w = l * c * c,
                            _ = d * d * d,
                            D = c * d * d + d * c * d + d * d * c,
                            M = c * c * d + d * c * c + c * d * c,
                            k = c * c * c;
                        for (f = 0; f < u; f += 1) p[4 * f] = t.round(1e3 * (y * e[f] + g * r[f] + v * s[f] + b * i[f])) / 1e3, p[4 * f + 1] = t.round(1e3 * (E * e[f] + S * r[f] + x * s[f] + P * i[f])) / 1e3, p[4 * f + 2] = t.round(1e3 * (T * e[f] + C * r[f] + A * s[f] + w * i[f])) / 1e3, p[4 * f + 3] = t.round(1e3 * (_ * e[f] + D * r[f] + M * s[f] + k * i[f])) / 1e3;
                        return p
                    }
                    return {
                        getSegmentsLength: s,
                        getNewSegment: f,
                        getPointInSegment: l,
                        buildBezierData: o,
                        pointOnLine2D: e,
                        pointOnLine3D: i
                    }
                }
                var bez = bezFunction(),
                    initFrame = initialDefaultFrame,
                    mathAbs = Math.abs;

                function interpolateValue(t, e) {
                    var i, r = this.offsetTime;
                    "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
                    var s, n, a, o, h, l, p, f, c, u = e.lastIndex,
                        m = u,
                        d = this.keyframes.length - 1,
                        y = !0;
                    while (y) {
                        if (s = this.keyframes[m], n = this.keyframes[m + 1], m === d - 1 && t >= n.t - r) {
                            s.h && (s = n), u = 0;
                            break
                        }
                        if (n.t - r > t) {
                            u = m;
                            break
                        }
                        m < d - 1 ? m += 1 : (u = 0, y = !1)
                    }
                    a = this.keyframesMetadata[m] || {};
                    var g, v = n.t - r,
                        b = s.t - r;
                    if (s.to) {
                        a.bezierData || (a.bezierData = bez.buildBezierData(s.s, n.s || s.e, s.to, s.ti));
                        var E = a.bezierData;
                        if (t >= v || t < b) {
                            var S = t >= v ? E.points.length - 1 : 0;
                            for (h = E.points[S].point.length, o = 0; o < h; o += 1) i[o] = E.points[S].point[o]
                        } else {
                            a.__fnct ? c = a.__fnct : (c = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, a.__fnct = c), l = c((t - b) / (v - b));
                            var x, P = E.segmentLength * l,
                                T = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
                            f = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, y = !0, p = E.points.length;
                            while (y) {
                                if (T += E.points[f].partialLength, 0 === P || 0 === l || f === E.points.length - 1) {
                                    for (h = E.points[f].point.length, o = 0; o < h; o += 1) i[o] = E.points[f].point[o];
                                    break
                                }
                                if (P >= T && P < T + E.points[f + 1].partialLength) {
                                    for (x = (P - T) / E.points[f + 1].partialLength, h = E.points[f].point.length, o = 0; o < h; o += 1) i[o] = E.points[f].point[o] + (E.points[f + 1].point[o] - E.points[f].point[o]) * x;
                                    break
                                }
                                f < p - 1 ? f += 1 : y = !1
                            }
                            e._lastPoint = f, e._lastAddedLength = T - E.points[f].partialLength, e._lastKeyframeIndex = m
                        }
                    } else {
                        var C, A, w, _, D;
                        if (d = s.s.length, g = n.s || s.e, this.sh && 1 !== s.h)
                            if (t >= v) i[0] = g[0], i[1] = g[1], i[2] = g[2];
                            else if (t <= b) i[0] = s.s[0], i[1] = s.s[1], i[2] = s.s[2];
                        else {
                            var M = createQuaternion(s.s),
                                k = createQuaternion(g),
                                F = (t - b) / (v - b);
                            quaternionToEuler(i, slerp(M, k, F))
                        } else
                            for (m = 0; m < d; m += 1) 1 !== s.h && (t >= v ? l = 1 : t < b ? l = 0 : (s.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[m] ? c = a.__fnct[m] : (C = void 0 === s.o.x[m] ? s.o.x[0] : s.o.x[m], A = void 0 === s.o.y[m] ? s.o.y[0] : s.o.y[m], w = void 0 === s.i.x[m] ? s.i.x[0] : s.i.x[m], _ = void 0 === s.i.y[m] ? s.i.y[0] : s.i.y[m], c = BezierFactory.getBezierEasing(C, A, w, _).get, a.__fnct[m] = c)) : a.__fnct ? c = a.__fnct : (C = s.o.x, A = s.o.y, w = s.i.x, _ = s.i.y, c = BezierFactory.getBezierEasing(C, A, w, _).get, s.keyframeMetadata = c), l = c((t - b) / (v - b)))), g = n.s || s.e, D = 1 === s.h ? s.s[m] : s.s[m] + (g[m] - s.s[m]) * l, "multidimensional" === this.propType ? i[m] = D : i = D
                    }
                    return e.lastIndex = u, i
                }

                function slerp(t, e, i) {
                    var r, s, n, a, o, h = [],
                        l = t[0],
                        p = t[1],
                        f = t[2],
                        c = t[3],
                        u = e[0],
                        m = e[1],
                        d = e[2],
                        y = e[3];
                    return s = l * u + p * m + f * d + c * y, s < 0 && (s = -s, u = -u, m = -m, d = -d, y = -y), 1 - s > 1e-6 ? (r = Math.acos(s), n = Math.sin(r), a = Math.sin((1 - i) * r) / n, o = Math.sin(i * r) / n) : (a = 1 - i, o = i), h[0] = a * l + o * u, h[1] = a * p + o * m, h[2] = a * f + o * d, h[3] = a * c + o * y, h
                }

                function quaternionToEuler(t, e) {
                    var i = e[0],
                        r = e[1],
                        s = e[2],
                        n = e[3],
                        a = Math.atan2(2 * r * n - 2 * i * s, 1 - 2 * r * r - 2 * s * s),
                        o = Math.asin(2 * i * r + 2 * s * n),
                        h = Math.atan2(2 * i * n - 2 * r * s, 1 - 2 * i * i - 2 * s * s);
                    t[0] = a / degToRads, t[1] = o / degToRads, t[2] = h / degToRads
                }

                function createQuaternion(t) {
                    var e = t[0] * degToRads,
                        i = t[1] * degToRads,
                        r = t[2] * degToRads,
                        s = Math.cos(e / 2),
                        n = Math.cos(i / 2),
                        a = Math.cos(r / 2),
                        o = Math.sin(e / 2),
                        h = Math.sin(i / 2),
                        l = Math.sin(r / 2),
                        p = s * n * a - o * h * l,
                        f = o * h * a + s * n * l,
                        c = o * n * a + s * h * l,
                        u = s * h * a - o * n * l;
                    return [f, c, u, p]
                }

                function getValueAtCurrentTime() {
                    var t = this.comp.renderedFrame - this.offsetTime,
                        e = this.keyframes[0].t - this.offsetTime,
                        i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
                        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                        var r = this.interpolateValue(t, this._caching);
                        this.pv = r
                    }
                    return this._caching.lastFrame = t, this.pv
                }

                function setVValue(t) {
                    var e;
                    if ("unidimensional" === this.propType) e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
                    else {
                        var i = 0,
                            r = this.v.length;
                        while (i < r) e = t[i] * this.mult, mathAbs(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1
                    }
                }

                function processEffectsSequence() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else {
                            var t;
                            this.lock = !0, this._mdf = this._isFirstFrame;
                            var e = this.effectsSequence.length,
                                i = this.kf ? this.pv : this.data.k;
                            for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                            this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                }

                function addEffect(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                }

                function ValueProperty(t, e, i, r) {
                    this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
                }

                function MultiDimensionalProperty(t, e, i, r) {
                    var s;
                    this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                    var n = e.k.length;
                    for (this.v = createTypedArray("float32", n), this.pv = createTypedArray("float32", n), this.vel = createTypedArray("float32", n), s = 0; s < n; s += 1) this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
                }

                function KeyframedValueProperty(t, e, i, r) {
                    this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                        lastFrame: initFrame,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1
                    }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
                }

                function KeyframedMultidimensionalProperty(t, e, i, r) {
                    var s;
                    this.propType = "multidimensional";
                    var n, a, o, h, l = e.k.length;
                    for (s = 0; s < l - 1; s += 1) e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (n = e.k[s].s, a = e.k[s + 1].s, o = e.k[s].to, h = e.k[s].ti, (2 === n.length && (n[0] !== a[0] || n[1] !== a[1]) && bez.pointOnLine2D(n[0], n[1], a[0], a[1], n[0] + o[0], n[1] + o[1]) && bez.pointOnLine2D(n[0], n[1], a[0], a[1], a[0] + h[0], a[1] + h[1]) || 3 === n.length && (n[0] !== a[0] || n[1] !== a[1] || n[2] !== a[2]) && bez.pointOnLine3D(n[0], n[1], n[2], a[0], a[1], a[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && bez.pointOnLine3D(n[0], n[1], n[2], a[0], a[1], a[2], a[0] + h[0], a[1] + h[1], a[2] + h[2])) && (e.k[s].to = null, e.k[s].ti = null), n[0] === a[0] && n[1] === a[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === n.length || n[2] === a[2] && 0 === o[2] && 0 === h[2]) && (e.k[s].to = null, e.k[s].ti = null));
                    this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
                    var p = e.k[0].s.length;
                    for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), s = 0; s < p; s += 1) this.v[s] = initFrame, this.pv[s] = initFrame;
                    this._caching = {
                        lastFrame: initFrame,
                        lastIndex: 0,
                        value: createTypedArray("float32", p)
                    }, this.addEffect = addEffect
                }
                var PropertyFactory = function() {
                    function t(t, e, i, r, s) {
                        var n;
                        if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
                            if ("number" === typeof e.k[0]) n = new MultiDimensionalProperty(t, e, r, s);
                            else switch (i) {
                                case 0:
                                    n = new KeyframedValueProperty(t, e, r, s);
                                    break;
                                case 1:
                                    n = new KeyframedMultidimensionalProperty(t, e, r, s);
                                    break;
                                default:
                                    break
                            } else n = new ValueProperty(t, e, r, s);
                        return n.effectsSequence.length && s.addDynamicProperty(n), n
                    }
                    var e = {
                        getProp: t
                    };
                    return e
                }();

                function DynamicPropertyContainer() {}
                DynamicPropertyContainer.prototype = {
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                    },
                    iterateDynamicProperties: function() {
                        var t;
                        this._mdf = !1;
                        var e = this.dynamicProperties.length;
                        for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                    },
                    initDynamicPropertyContainer: function(t) {
                        this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                    }
                };
                var pointPool = function() {
                    function t() {
                        return createTypedArray("float32", 2)
                    }
                    return poolFactory(8, t)
                }();

                function ShapePath() {
                    this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                }
                ShapePath.prototype.setPathData = function(t, e) {
                    this.c = t, this.setLength(e);
                    var i = 0;
                    while (i < e) this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1
                }, ShapePath.prototype.setLength = function(t) {
                    while (this._maxLength < t) this.doubleArrayLength();
                    this._length = t
                }, ShapePath.prototype.doubleArrayLength = function() {
                    this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                }, ShapePath.prototype.setXYAt = function(t, e, i, r, s) {
                    var n;
                    switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                        case "v":
                            n = this.v;
                            break;
                        case "i":
                            n = this.i;
                            break;
                        case "o":
                            n = this.o;
                            break;
                        default:
                            n = [];
                            break
                    }(!n[r] || n[r] && !s) && (n[r] = pointPool.newElement()), n[r][0] = t, n[r][1] = e
                }, ShapePath.prototype.setTripleAt = function(t, e, i, r, s, n, a, o) {
                    this.setXYAt(t, e, "v", a, o), this.setXYAt(i, r, "o", a, o), this.setXYAt(s, n, "i", a, o)
                }, ShapePath.prototype.reverse = function() {
                    var t = new ShapePath;
                    t.setPathData(this.c, this._length);
                    var e = this.v,
                        i = this.o,
                        r = this.i,
                        s = 0;
                    this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), s = 1);
                    var n, a = this._length - 1,
                        o = this._length;
                    for (n = s; n < o; n += 1) t.setTripleAt(e[a][0], e[a][1], r[a][0], r[a][1], i[a][0], i[a][1], n, !1), a -= 1;
                    return t
                }, ShapePath.prototype.length = function() {
                    return this._length
                };
                var shapePool = function() {
                    function t() {
                        return new ShapePath
                    }

                    function e(t) {
                        var e, i = t._length;
                        for (e = 0; e < i; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                        t._length = 0, t.c = !1
                    }

                    function i(t) {
                        var e, i = r.newElement(),
                            s = void 0 === t._length ? t.v.length : t._length;
                        for (i.setLength(s), i.c = t.c, e = 0; e < s; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                        return i
                    }
                    var r = poolFactory(4, t, e);
                    return r.clone = i, r
                }();

                function ShapeCollection() {
                    this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                }
                ShapeCollection.prototype.addShape = function(t) {
                    this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                }, ShapeCollection.prototype.releaseShapes = function() {
                    var t;
                    for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
                    this._length = 0
                };
                var shapeCollectionPool = function() {
                        var t = {
                                newShapeCollection: s,
                                release: n
                            },
                            e = 0,
                            i = 4,
                            r = createSizedArray(i);

                        function s() {
                            var t;
                            return e ? (e -= 1, t = r[e]) : t = new ShapeCollection, t
                        }

                        function n(t) {
                            var s, n = t._length;
                            for (s = 0; s < n; s += 1) shapePool.release(t.shapes[s]);
                            t._length = 0, e === i && (r = pooling["double"](r), i *= 2), r[e] = t, e += 1
                        }
                        return t
                    }(),
                    ShapePropertyFactory = function() {
                        var t = -999999;

                        function e(t, e, i) {
                            var r, s, n, a, o, h, l, p, f, c = i.lastIndex,
                                u = this.keyframes;
                            if (t < u[0].t - this.offsetTime) r = u[0].s[0], n = !0, c = 0;
                            else if (t >= u[u.length - 1].t - this.offsetTime) r = u[u.length - 1].s ? u[u.length - 1].s[0] : u[u.length - 2].e[0], n = !0;
                            else {
                                var m, d, y, g = c,
                                    v = u.length - 1,
                                    b = !0;
                                while (b) {
                                    if (m = u[g], d = u[g + 1], d.t - this.offsetTime > t) break;
                                    g < v - 1 ? g += 1 : b = !1
                                }
                                if (y = this.keyframesMetadata[g] || {}, n = 1 === m.h, c = g, !n) {
                                    if (t >= d.t - this.offsetTime) p = 1;
                                    else if (t < m.t - this.offsetTime) p = 0;
                                    else {
                                        var E;
                                        y.__fnct ? E = y.__fnct : (E = BezierFactory.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y).get, y.__fnct = E), p = E((t - (m.t - this.offsetTime)) / (d.t - this.offsetTime - (m.t - this.offsetTime)))
                                    }
                                    s = d.s ? d.s[0] : m.e[0]
                                }
                                r = m.s[0]
                            }
                            for (h = e._length, l = r.i[0].length, i.lastIndex = c, a = 0; a < h; a += 1)
                                for (o = 0; o < l; o += 1) f = n ? r.i[a][o] : r.i[a][o] + (s.i[a][o] - r.i[a][o]) * p, e.i[a][o] = f, f = n ? r.o[a][o] : r.o[a][o] + (s.o[a][o] - r.o[a][o]) * p, e.o[a][o] = f, f = n ? r.v[a][o] : r.v[a][o] + (s.v[a][o] - r.v[a][o]) * p, e.v[a][o] = f
                        }

                        function i() {
                            var e = this.comp.renderedFrame - this.offsetTime,
                                i = this.keyframes[0].t - this.offsetTime,
                                r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                s = this._caching.lastFrame;
                            return s !== t && (s < i && e < i || s > r && e > r) || (this._caching.lastIndex = s < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                        }

                        function r() {
                            this.paths = this.localShapeCollection
                        }

                        function s(t, e) {
                            if (t._length !== e._length || t.c !== e.c) return !1;
                            var i, r = t._length;
                            for (i = 0; i < r; i += 1)
                                if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                            return !0
                        }

                        function n(t) {
                            s(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                        }

                        function a() {
                            if (this.elem.globalData.frameId !== this.frameId)
                                if (this.effectsSequence.length)
                                    if (this.lock) this.setVValue(this.pv);
                                    else {
                                        var t, e;
                                        this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                        var i = this.effectsSequence.length;
                                        for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                                        this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                    }
                            else this._mdf = !1
                        }

                        function o(t, e, i) {
                            this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                            var s = 3 === i ? e.pt.k : e.ks.k;
                            this.v = shapePool.clone(s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = []
                        }

                        function h(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                        }

                        function l(e, s, n) {
                            this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === n ? s.pt.k : s.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                            var a = this.keyframes[0].s[0].i.length;
                            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = r, this._caching = {
                                lastFrame: t,
                                lastIndex: 0
                            }, this.effectsSequence = [i.bind(this)]
                        }
                        o.prototype.interpolateShape = e, o.prototype.getValue = a, o.prototype.setVValue = n, o.prototype.addEffect = h, l.prototype.getValue = a, l.prototype.interpolateShape = e, l.prototype.setVValue = n, l.prototype.addEffect = h;
                        var p = function() {
                                var t = roundCorner;

                                function e(t, e) {
                                    this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                }
                                return e.prototype = {
                                    reset: r,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                    },
                                    convertEllToPath: function() {
                                        var e = this.p.v[0],
                                            i = this.p.v[1],
                                            r = this.s.v[0] / 2,
                                            s = this.s.v[1] / 2,
                                            n = 3 !== this.d,
                                            a = this.v;
                                        a.v[0][0] = e, a.v[0][1] = i - s, a.v[1][0] = n ? e + r : e - r, a.v[1][1] = i, a.v[2][0] = e, a.v[2][1] = i + s, a.v[3][0] = n ? e - r : e + r, a.v[3][1] = i, a.i[0][0] = n ? e - r * t : e + r * t, a.i[0][1] = i - s, a.i[1][0] = n ? e + r : e - r, a.i[1][1] = i - s * t, a.i[2][0] = n ? e + r * t : e - r * t, a.i[2][1] = i + s, a.i[3][0] = n ? e - r : e + r, a.i[3][1] = i + s * t, a.o[0][0] = n ? e + r * t : e - r * t, a.o[0][1] = i - s, a.o[1][0] = n ? e + r : e - r, a.o[1][1] = i + s * t, a.o[2][0] = n ? e - r * t : e + r * t, a.o[2][1] = i + s, a.o[3][0] = n ? e - r : e + r, a.o[3][1] = i - s * t
                                    }
                                }, extendPrototype([DynamicPropertyContainer], e), e
                            }(),
                            f = function() {
                                function t(t, e) {
                                    this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                }
                                return t.prototype = {
                                    reset: r,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                    },
                                    convertStarToPath: function() {
                                        var t, e, i, r, s = 2 * Math.floor(this.pt.v),
                                            n = 2 * Math.PI / s,
                                            a = !0,
                                            o = this.or.v,
                                            h = this.ir.v,
                                            l = this.os.v,
                                            p = this.is.v,
                                            f = 2 * Math.PI * o / (2 * s),
                                            c = 2 * Math.PI * h / (2 * s),
                                            u = -Math.PI / 2;
                                        u += this.r.v;
                                        var m = 3 === this.data.d ? -1 : 1;
                                        for (this.v._length = 0, t = 0; t < s; t += 1) {
                                            e = a ? o : h, i = a ? l : p, r = a ? f : c;
                                            var d = e * Math.cos(u),
                                                y = e * Math.sin(u),
                                                g = 0 === d && 0 === y ? 0 : y / Math.sqrt(d * d + y * y),
                                                v = 0 === d && 0 === y ? 0 : -d / Math.sqrt(d * d + y * y);
                                            d += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(d, y, d - g * r * i * m, y - v * r * i * m, d + g * r * i * m, y + v * r * i * m, t, !0), a = !a, u += n * m
                                        }
                                    },
                                    convertPolygonToPath: function() {
                                        var t, e = Math.floor(this.pt.v),
                                            i = 2 * Math.PI / e,
                                            r = this.or.v,
                                            s = this.os.v,
                                            n = 2 * Math.PI * r / (4 * e),
                                            a = .5 * -Math.PI,
                                            o = 3 === this.data.d ? -1 : 1;
                                        for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                            var h = r * Math.cos(a),
                                                l = r * Math.sin(a),
                                                p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                                f = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                            h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * n * s * o, l - f * n * s * o, h + p * n * s * o, l + f * n * s * o, t, !0), a += i * o
                                        }
                                        this.paths.length = 0, this.paths[0] = this.v
                                    }
                                }, extendPrototype([DynamicPropertyContainer], t), t
                            }(),
                            c = function() {
                                function t(t, e) {
                                    this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                }
                                return t.prototype = {
                                    convertRectToPath: function() {
                                        var t = this.p.v[0],
                                            e = this.p.v[1],
                                            i = this.s.v[0] / 2,
                                            r = this.s.v[1] / 2,
                                            s = bmMin(i, r, this.r.v),
                                            n = s * (1 - roundCorner);
                                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + s, t + i, e - r + n, 0, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - n, t + i, e + r - s, 1, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e + r, t + i - s, e + r, t + i - n, e + r, 2, !0), this.v.setTripleAt(t - i + s, e + r, t - i + n, e + r, t - i + s, e + r, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - s, t - i, e + r - n, 4, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + n, t - i, e - r + s, 5, !0), this.v.setTripleAt(t - i + s, e - r, t - i + s, e - r, t - i + n, e - r, 6, !0), this.v.setTripleAt(t + i - s, e - r, t + i - n, e - r, t + i - s, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + n, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + n, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + n, t + i, e - r + s, 0, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e - r, t + i - s, e - r, t + i - n, e - r, 1, !0), this.v.setTripleAt(t - i + s, e - r, t - i + n, e - r, t - i + s, e - r, 2, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + s, t - i, e - r + n, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - n, t - i, e + r - s, 4, !0), this.v.setTripleAt(t - i + s, e + r, t - i + s, e + r, t - i + n, e + r, 5, !0), this.v.setTripleAt(t + i - s, e + r, t + i - n, e + r, t + i - s, e + r, 6, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - s, t + i, e + r - n, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + n, e - r, t - i, e - r, 1, !0), this.v.setTripleAt(t - i, e + r, t - i, e + r - n, t - i, e + r, 2, !0), this.v.setTripleAt(t + i, e + r, t + i - n, e + r, t + i, e + r, 3, !0)))
                                    },
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                    },
                                    reset: r
                                }, extendPrototype([DynamicPropertyContainer], t), t
                            }();

                        function u(t, e, i) {
                            var r;
                            if (3 === i || 4 === i) {
                                var s = 3 === i ? e.pt : e.ks,
                                    n = s.k;
                                r = n.length ? new l(t, e, i) : new o(t, e, i)
                            } else 5 === i ? r = new c(t, e) : 6 === i ? r = new p(t, e) : 7 === i && (r = new f(t, e));
                            return r.k && t.addDynamicProperty(r), r
                        }

                        function m() {
                            return o
                        }

                        function d() {
                            return l
                        }
                        var y = {};
                        return y.getShapeProp = u, y.getConstructorFunction = m, y.getKeyframedConstructorFunction = d, y
                    }(),
                    Matrix = function() {
                        var t = Math.cos,
                            e = Math.sin,
                            i = Math.tan,
                            r = Math.round;

                        function s() {
                            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                        }

                        function n(i) {
                            if (0 === i) return this;
                            var r = t(i),
                                s = e(i);
                            return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function a(i) {
                            if (0 === i) return this;
                            var r = t(i),
                                s = e(i);
                            return this._t(1, 0, 0, 0, 0, r, -s, 0, 0, s, r, 0, 0, 0, 0, 1)
                        }

                        function o(i) {
                            if (0 === i) return this;
                            var r = t(i),
                                s = e(i);
                            return this._t(r, 0, s, 0, 0, 1, 0, 0, -s, 0, r, 0, 0, 0, 0, 1)
                        }

                        function h(i) {
                            if (0 === i) return this;
                            var r = t(i),
                                s = e(i);
                            return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function l(t, e) {
                            return this._t(1, e, t, 1, 0, 0)
                        }

                        function p(t, e) {
                            return this.shear(i(t), i(e))
                        }

                        function f(r, s) {
                            var n = t(s),
                                a = e(s);
                            return this._t(n, a, 0, 0, -a, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(n, -a, 0, 0, a, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function c(t, e, i) {
                            return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                        }

                        function u(t, e, i, r, s, n, a, o, h, l, p, f, c, u, m, d) {
                            return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = r, this.props[4] = s, this.props[5] = n, this.props[6] = a, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = f, this.props[12] = c, this.props[13] = u, this.props[14] = m, this.props[15] = d, this
                        }

                        function m(t, e, i) {
                            return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                        }

                        function d(t, e, i, r, s, n, a, o, h, l, p, f, c, u, m, d) {
                            var y = this.props;
                            if (1 === t && 0 === e && 0 === i && 0 === r && 0 === s && 1 === n && 0 === a && 0 === o && 0 === h && 0 === l && 1 === p && 0 === f) return y[12] = y[12] * t + y[15] * c, y[13] = y[13] * n + y[15] * u, y[14] = y[14] * p + y[15] * m, y[15] *= d, this._identityCalculated = !1, this;
                            var g = y[0],
                                v = y[1],
                                b = y[2],
                                E = y[3],
                                S = y[4],
                                x = y[5],
                                P = y[6],
                                T = y[7],
                                C = y[8],
                                A = y[9],
                                w = y[10],
                                _ = y[11],
                                D = y[12],
                                M = y[13],
                                k = y[14],
                                F = y[15];
                            return y[0] = g * t + v * s + b * h + E * c, y[1] = g * e + v * n + b * l + E * u, y[2] = g * i + v * a + b * p + E * m, y[3] = g * r + v * o + b * f + E * d, y[4] = S * t + x * s + P * h + T * c, y[5] = S * e + x * n + P * l + T * u, y[6] = S * i + x * a + P * p + T * m, y[7] = S * r + x * o + P * f + T * d, y[8] = C * t + A * s + w * h + _ * c, y[9] = C * e + A * n + w * l + _ * u, y[10] = C * i + A * a + w * p + _ * m, y[11] = C * r + A * o + w * f + _ * d, y[12] = D * t + M * s + k * h + F * c, y[13] = D * e + M * n + k * l + F * u, y[14] = D * i + M * a + k * p + F * m, y[15] = D * r + M * o + k * f + F * d, this._identityCalculated = !1, this
                        }

                        function y(t) {
                            var e = t.props;
                            return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
                        }

                        function g() {
                            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                        }

                        function v(t) {
                            var e = 0;
                            while (e < 16) {
                                if (t.props[e] !== this.props[e]) return !1;
                                e += 1
                            }
                            return !0
                        }

                        function b(t) {
                            var e;
                            for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                            return t
                        }

                        function E(t) {
                            var e;
                            for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                        }

                        function S(t, e, i) {
                            return {
                                x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                                y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                                z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                            }
                        }

                        function x(t, e, i) {
                            return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                        }

                        function P(t, e, i) {
                            return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                        }

                        function T(t, e, i) {
                            return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                        }

                        function C() {
                            var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                e = this.props[5] / t,
                                i = -this.props[1] / t,
                                r = -this.props[4] / t,
                                s = this.props[0] / t,
                                n = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                a = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                                o = new Matrix;
                            return o.props[0] = e, o.props[1] = i, o.props[4] = r, o.props[5] = s, o.props[12] = n, o.props[13] = a, o
                        }

                        function A(t) {
                            var e = this.getInverseMatrix();
                            return e.applyToPointArray(t[0], t[1], t[2] || 0)
                        }

                        function w(t) {
                            var e, i = t.length,
                                r = [];
                            for (e = 0; e < i; e += 1) r[e] = A(t[e]);
                            return r
                        }

                        function _(t, e, i) {
                            var r = createTypedArray("float32", 6);
                            if (this.isIdentity()) r[0] = t[0], r[1] = t[1], r[2] = e[0], r[3] = e[1], r[4] = i[0], r[5] = i[1];
                            else {
                                var s = this.props[0],
                                    n = this.props[1],
                                    a = this.props[4],
                                    o = this.props[5],
                                    h = this.props[12],
                                    l = this.props[13];
                                r[0] = t[0] * s + t[1] * a + h, r[1] = t[0] * n + t[1] * o + l, r[2] = e[0] * s + e[1] * a + h, r[3] = e[0] * n + e[1] * o + l, r[4] = i[0] * s + i[1] * a + h, r[5] = i[0] * n + i[1] * o + l
                            }
                            return r
                        }

                        function D(t, e, i) {
                            var r;
                            return r = this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]], r
                        }

                        function M(t, e) {
                            if (this.isIdentity()) return t + "," + e;
                            var i = this.props;
                            return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                        }

                        function k() {
                            var t = 0,
                                e = this.props,
                                i = "matrix3d(",
                                s = 1e4;
                            while (t < 16) i += r(e[t] * s) / s, i += 15 === t ? ")" : ",", t += 1;
                            return i
                        }

                        function F(t) {
                            var e = 1e4;
                            return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? r(t * e) / e : t
                        }

                        function I() {
                            var t = this.props,
                                e = F(t[0]),
                                i = F(t[1]),
                                r = F(t[4]),
                                s = F(t[5]),
                                n = F(t[12]),
                                a = F(t[13]);
                            return "matrix(" + e + "," + i + "," + r + "," + s + "," + n + "," + a + ")"
                        }
                        return function() {
                            this.reset = s, this.rotate = n, this.rotateX = a, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = f, this.shear = l, this.scale = c, this.setTransform = u, this.translate = m, this.transform = d, this.multiply = y, this.applyToPoint = S, this.applyToX = x, this.applyToY = P, this.applyToZ = T, this.applyToPointArray = D, this.applyToTriplePoints = _, this.applyToPointStringified = M, this.toCSS = k, this.to2dCSS = I, this.clone = b, this.cloneFromProps = E, this.equals = v, this.inversePoints = w, this.inversePoint = A, this.getInverseMatrix = C, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                        }
                    }();

                function _typeof$3(t) {
                    return _typeof$3 = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, _typeof$3(t)
                }
                var lottie = {},
                    standalone = "__[STANDALONE]__",
                    animationData = "__[ANIMATIONDATA]__",
                    renderer = "";

                function setLocation(t) {
                    setLocationHref(t)
                }

                function searchAnimations() {
                    !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
                }

                function setSubframeRendering(t) {
                    setSubframeEnabled(t)
                }

                function setPrefix(t) {
                    setIdPrefix(t)
                }

                function loadAnimation(t) {
                    return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
                }

                function setQuality(t) {
                    if ("string" === typeof t) switch (t) {
                        case "high":
                            setDefaultCurveSegments(200);
                            break;
                        default:
                        case "medium":
                            setDefaultCurveSegments(50);
                            break;
                        case "low":
                            setDefaultCurveSegments(10);
                            break
                    } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
                    getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
                }

                function inBrowser() {
                    return "undefined" !== typeof navigator
                }

                function installPlugin(t, e) {
                    "expressions" === t && setExpressionsPlugin(e)
                }

                function getFactory(t) {
                    switch (t) {
                        case "propertyFactory":
                            return PropertyFactory;
                        case "shapePropertyFactory":
                            return ShapePropertyFactory;
                        case "matrix":
                            return Matrix;
                        default:
                            return null
                    }
                }

                function checkReady() {
                    "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                }

                function getQueryVariable(t) {
                    for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
                        var r = e[i].split("=");
                        if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1])
                    }
                    return null
                }
                lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
                var queryString = "";
                if (standalone) {
                    var scripts = document.getElementsByTagName("script"),
                        index = scripts.length - 1,
                        myScript = scripts[index] || {
                            src: ""
                        };
                    queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
                }
                var readyStateCheckInterval = setInterval(checkReady, 100);
                try {
                    "object" === _typeof$3(exports) && "undefined" !== typeof module || __webpack_require__("3c35") || (window.bodymovin = lottie)
                } catch (err) {}
                var ShapeModifiers = function() {
                    var t = {},
                        e = {};

                    function i(t, i) {
                        e[t] || (e[t] = i)
                    }

                    function r(t, i, r) {
                        return new e[t](i, r)
                    }
                    return t.registerModifier = i, t.getModifier = r, t
                }();

                function ShapeModifier() {}

                function TrimModifier() {}

                function PuckerAndBloatModifier() {}
                ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                    if (!this.closed) {
                        t.sh.container.addDynamicProperty(t.sh);
                        var e = {
                            shape: t.sh,
                            data: t,
                            localShapeCollection: shapeCollectionPool.newShapeCollection()
                        };
                        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                    }
                }, ShapeModifier.prototype.init = function(t, e) {
                    this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, ShapeModifier.prototype.processKeys = function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
                    this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                }, TrimModifier.prototype.addShapeToModifier = function(t) {
                    t.pathsData = []
                }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, s) {
                    var n = [];
                    e <= 1 ? n.push({
                        s: t,
                        e: e
                    }) : t >= 1 ? n.push({
                        s: t - 1,
                        e: e - 1
                    }) : (n.push({
                        s: t,
                        e: 1
                    }), n.push({
                        s: 0,
                        e: e - 1
                    }));
                    var a, o, h = [],
                        l = n.length;
                    for (a = 0; a < l; a += 1) {
                        var p, f;
                        if (o = n[a], !(o.e * s < r || o.s * s > r + i)) p = o.s * s <= r ? 0 : (o.s * s - r) / i, f = o.e * s >= r + i ? 1 : (o.e * s - r) / i, h.push([p, f])
                    }
                    return h.length || h.push([0, 0]), h
                }, TrimModifier.prototype.releasePathsData = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
                    return t.length = 0, t
                }, TrimModifier.prototype.processShapes = function(t) {
                    var e, i, r, s;
                    if (this._mdf || t) {
                        var n = this.o.v % 360 / 360;
                        if (n < 0 && (n += 1), e = this.s.v > 1 ? 1 + n : this.s.v < 0 ? 0 + n : this.s.v + n, i = this.e.v > 1 ? 1 + n : this.e.v < 0 ? 0 + n : this.e.v + n, e > i) {
                            var a = e;
                            e = i, i = a
                        }
                        e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
                    } else e = this.sValue, i = this.eValue;
                    var o, h, l, p, f, c = this.shapes.length,
                        u = 0;
                    if (i === e)
                        for (s = 0; s < c; s += 1) this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection, this._mdf && (this.shapes[s].pathsData.length = 0);
                    else if (1 === i && 0 === e || 0 === i && 1 === e) {
                        if (this._mdf)
                            for (s = 0; s < c; s += 1) this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = !0
                    } else {
                        var m, d, y = [];
                        for (s = 0; s < c; s += 1)
                            if (m = this.shapes[s], m.shape._mdf || this._mdf || t || 2 === this.m) {
                                if (r = m.shape.paths, h = r._length, f = 0, !m.shape._mdf && m.pathsData.length) f = m.totalShapeLength;
                                else {
                                    for (l = this.releasePathsData(m.pathsData), o = 0; o < h; o += 1) p = bez.getSegmentsLength(r.shapes[o]), l.push(p), f += p.totalLength;
                                    m.totalShapeLength = f, m.pathsData = l
                                }
                                u += f, m.shape._mdf = !0
                            } else m.shape.paths = m.localShapeCollection;
                        var g, v = e,
                            b = i,
                            E = 0;
                        for (s = c - 1; s >= 0; s -= 1)
                            if (m = this.shapes[s], m.shape._mdf) {
                                for (d = m.localShapeCollection, d.releaseShapes(), 2 === this.m && c > 1 ? (g = this.calculateShapeEdges(e, i, m.totalShapeLength, E, u), E += m.totalShapeLength) : g = [
                                        [v, b]
                                    ], h = g.length, o = 0; o < h; o += 1) {
                                    v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({
                                        s: m.totalShapeLength * v,
                                        e: m.totalShapeLength * b
                                    }) : v >= 1 ? y.push({
                                        s: m.totalShapeLength * (v - 1),
                                        e: m.totalShapeLength * (b - 1)
                                    }) : (y.push({
                                        s: m.totalShapeLength * v,
                                        e: m.totalShapeLength
                                    }), y.push({
                                        s: 0,
                                        e: m.totalShapeLength * (b - 1)
                                    }));
                                    var S = this.addShapes(m, y[0]);
                                    if (y[0].s !== y[0].e) {
                                        if (y.length > 1) {
                                            var x = m.shape.paths.shapes[m.shape.paths._length - 1];
                                            if (x.c) {
                                                var P = S.pop();
                                                this.addPaths(S, d), S = this.addShapes(m, y[1], P)
                                            } else this.addPaths(S, d), S = this.addShapes(m, y[1])
                                        }
                                        this.addPaths(S, d)
                                    }
                                }
                                m.shape.paths = d
                            }
                    }
                }, TrimModifier.prototype.addPaths = function(t, e) {
                    var i, r = t.length;
                    for (i = 0; i < r; i += 1) e.addShape(t[i])
                }, TrimModifier.prototype.addSegment = function(t, e, i, r, s, n, a) {
                    s.setXYAt(e[0], e[1], "o", n), s.setXYAt(i[0], i[1], "i", n + 1), a && s.setXYAt(t[0], t[1], "v", n), s.setXYAt(r[0], r[1], "v", n + 1)
                }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
                    e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
                }, TrimModifier.prototype.addShapes = function(t, e, i) {
                    var r, s, n, a, o, h, l, p, f = t.pathsData,
                        c = t.shape.paths.shapes,
                        u = t.shape.paths._length,
                        m = 0,
                        d = [],
                        y = !0;
                    for (i ? (o = i._length, p = i._length) : (i = shapePool.newElement(), o = 0, p = 0), d.push(i), r = 0; r < u; r += 1) {
                        for (h = f[r].lengths, i.c = c[r].c, n = c[r].c ? h.length : h.length + 1, s = 1; s < n; s += 1)
                            if (a = h[s - 1], m + a.addedLength < e.s) m += a.addedLength, i.c = !1;
                            else {
                                if (m > e.e) {
                                    i.c = !1;
                                    break
                                }
                                e.s <= m && e.e >= m + a.addedLength ? (this.addSegment(c[r].v[s - 1], c[r].o[s - 1], c[r].i[s], c[r].v[s], i, o, y), y = !1) : (l = bez.getNewSegment(c[r].v[s - 1], c[r].v[s], c[r].o[s - 1], c[r].i[s], (e.s - m) / a.addedLength, (e.e - m) / a.addedLength, h[s - 1]), this.addSegmentFromArray(l, i, o, y), y = !1, i.c = !1), m += a.addedLength, o += 1
                            }
                        if (c[r].c && h.length) {
                            if (a = h[s - 1], m <= e.e) {
                                var g = h[s - 1].addedLength;
                                e.s <= m && e.e >= m + g ? (this.addSegment(c[r].v[s - 1], c[r].o[s - 1], c[r].i[0], c[r].v[0], i, o, y), y = !1) : (l = bez.getNewSegment(c[r].v[s - 1], c[r].v[0], c[r].o[s - 1], c[r].i[0], (e.s - m) / g, (e.e - m) / g, h[s - 1]), this.addSegmentFromArray(l, i, o, y), y = !1, i.c = !1)
                            } else i.c = !1;
                            m += a.addedLength, o += 1
                        }
                        if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), m > e.e) break;
                        r < u - 1 && (i = shapePool.newElement(), y = !0, d.push(i), o = 0)
                    }
                    return d
                }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                    var i = e / 100,
                        r = [0, 0],
                        s = t._length,
                        n = 0;
                    for (n = 0; n < s; n += 1) r[0] += t.v[n][0], r[1] += t.v[n][1];
                    r[0] /= s, r[1] /= s;
                    var a, o, h, l, p, f, c = shapePool.newElement();
                    for (c.c = t.c, n = 0; n < s; n += 1) a = t.v[n][0] + (r[0] - t.v[n][0]) * i, o = t.v[n][1] + (r[1] - t.v[n][1]) * i, h = t.o[n][0] + (r[0] - t.o[n][0]) * -i, l = t.o[n][1] + (r[1] - t.o[n][1]) * -i, p = t.i[n][0] + (r[0] - t.i[n][0]) * -i, f = t.i[n][1] + (r[1] - t.i[n][1]) * -i, c.setTripleAt(a, o, h, l, p, f, n);
                    return c
                }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
                    var e, i, r, s, n, a, o = this.shapes.length,
                        h = this.amount.v;
                    if (0 !== h)
                        for (i = 0; i < o; i += 1) {
                            if (n = this.shapes[i], a = n.localShapeCollection, n.shape._mdf || this._mdf || t)
                                for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, s = n.shape.paths._length, r = 0; r < s; r += 1) a.addShape(this.processPath(e[r], h));
                            n.shape.paths = n.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var TransformPropertyFactory = function() {
                    var t = [0, 0];

                    function e(t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }

                    function i(e) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                var i;
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    var r, s;
                                    if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), s = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), s = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (r = this.p.pv, s = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        r = [], s = [];
                                        var n = this.px,
                                            a = this.py;
                                        n._caching.lastFrame + n.offsetTime <= n.keyframes[0].t ? (r[0] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), r[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), s[0] = n.getValueAtTime(n.keyframes[0].t / i, 0), s[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : n._caching.lastFrame + n.offsetTime >= n.keyframes[n.keyframes.length - 1].t ? (r[0] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), r[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), s[0] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0), s[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (r = [n.pv, a.pv], s[0] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime), s[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime))
                                    } else s = t, r = s;
                                    this.v.rotate(-Math.atan2(r[1] - s[1], r[0] - s[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    }

                    function r() {
                        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    }

                    function s() {}

                    function n(t) {
                        this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                    }

                    function a(t, e, i) {
                        if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                                k: [0, 0, 0]
                            }, 1, 0, this), e.rx) {
                            if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                                var r, s = e.or.k.length;
                                for (r = 0; r < s; r += 1) e.or.k[r].to = null, e.or.k[r].ti = null
                            }
                            this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                        } else this.r = PropertyFactory.getProp(t, e.r || {
                            k: 0
                        }, 0, degToRads, this);
                        e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                            k: [0, 0, 0]
                        }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                            k: [100, 100, 100]
                        }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                            _mdf: !1,
                            v: 1
                        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                    }

                    function o(t, e, i) {
                        return new a(t, e, i)
                    }
                    return a.prototype = {
                        applyToMatrix: e,
                        getValue: i,
                        precalculateMatrix: r,
                        autoOrient: s
                    }, extendPrototype([DynamicPropertyContainer], a), a.prototype.addDynamicProperty = n, a.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                        getTransformProperty: o
                    }
                }();

                function RepeaterModifier() {}

                function RoundCornersModifier() {}

                function floatEqual(t, e) {
                    return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
                }

                function floatZero(t) {
                    return Math.abs(t) <= 1e-5
                }

                function lerp(t, e, i) {
                    return t * (1 - i) + e * i
                }

                function lerpPoint(t, e, i) {
                    return [lerp(t[0], e[0], i), lerp(t[1], e[1], i)]
                }

                function quadRoots(t, e, i) {
                    if (0 === t) return [];
                    var r = e * e - 4 * t * i;
                    if (r < 0) return [];
                    var s = -e / (2 * t);
                    if (0 === r) return [s];
                    var n = Math.sqrt(r) / (2 * t);
                    return [s - n, s + n]
                }

                function polynomialCoefficients(t, e, i, r) {
                    return [3 * e - t - 3 * i + r, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t]
                }

                function singlePoint(t) {
                    return new PolynomialBezier(t, t, t, t, !1)
                }

                function PolynomialBezier(t, e, i, r, s) {
                    s && pointEqual(t, e) && (e = lerpPoint(t, r, 1 / 3)), s && pointEqual(i, r) && (i = lerpPoint(t, r, 2 / 3));
                    var n = polynomialCoefficients(t[0], e[0], i[0], r[0]),
                        a = polynomialCoefficients(t[1], e[1], i[1], r[1]);
                    this.a = [n[0], a[0]], this.b = [n[1], a[1]], this.c = [n[2], a[2]], this.d = [n[3], a[3]], this.points = [t, e, i, r]
                }

                function extrema(t, e) {
                    var i = t.points[0][e],
                        r = t.points[t.points.length - 1][e];
                    if (i > r) {
                        var s = r;
                        r = i, i = s
                    }
                    for (var n = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), a = 0; a < n.length; a += 1)
                        if (n[a] > 0 && n[a] < 1) {
                            var o = t.point(n[a])[e];
                            o < i ? i = o : o > r && (r = o)
                        }
                    return {
                        min: i,
                        max: r
                    }
                }

                function intersectData(t, e, i) {
                    var r = t.boundingBox();
                    return {
                        cx: r.cx,
                        cy: r.cy,
                        width: r.width,
                        height: r.height,
                        bez: t,
                        t: (e + i) / 2,
                        t1: e,
                        t2: i
                    }
                }

                function splitData(t) {
                    var e = t.bez.split(.5);
                    return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
                }

                function boxIntersect(t, e) {
                    return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
                }

                function intersectsImpl(t, e, i, r, s, n) {
                    if (boxIntersect(t, e))
                        if (i >= n || t.width <= r && t.height <= r && e.width <= r && e.height <= r) s.push([t.t, e.t]);
                        else {
                            var a = splitData(t),
                                o = splitData(e);
                            intersectsImpl(a[0], o[0], i + 1, r, s, n), intersectsImpl(a[0], o[1], i + 1, r, s, n), intersectsImpl(a[1], o[0], i + 1, r, s, n), intersectsImpl(a[1], o[1], i + 1, r, s, n)
                        }
                }

                function crossProduct(t, e) {
                    return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
                }

                function lineIntersection(t, e, i, r) {
                    var s = [t[0], t[1], 1],
                        n = [e[0], e[1], 1],
                        a = [i[0], i[1], 1],
                        o = [r[0], r[1], 1],
                        h = crossProduct(crossProduct(s, n), crossProduct(a, o));
                    return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]]
                }

                function polarOffset(t, e, i) {
                    return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i]
                }

                function pointDistance(t, e) {
                    return Math.hypot(t[0] - e[0], t[1] - e[1])
                }

                function pointEqual(t, e) {
                    return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
                }

                function ZigZagModifier() {}

                function setPoint(t, e, i, r, s, n, a) {
                    var o = i - Math.PI / 2,
                        h = i + Math.PI / 2,
                        l = e[0] + Math.cos(i) * r * s,
                        p = e[1] - Math.sin(i) * r * s;
                    t.setTripleAt(l, p, l + Math.cos(o) * n, p - Math.sin(o) * n, l + Math.cos(h) * a, p - Math.sin(h) * a, t.length())
                }

                function getPerpendicularVector(t, e) {
                    var i = [e[0] - t[0], e[1] - t[1]],
                        r = .5 * -Math.PI,
                        s = [Math.cos(r) * i[0] - Math.sin(r) * i[1], Math.sin(r) * i[0] + Math.cos(r) * i[1]];
                    return s
                }

                function getProjectingAngle(t, e) {
                    var i = 0 === e ? t.length() - 1 : e - 1,
                        r = (e + 1) % t.length(),
                        s = t.v[i],
                        n = t.v[r],
                        a = getPerpendicularVector(s, n);
                    return Math.atan2(0, 1) - Math.atan2(a[1], a[0])
                }

                function zigZagCorner(t, e, i, r, s, n, a) {
                    var o = getProjectingAngle(e, i),
                        h = e.v[i % e._length],
                        l = e.v[0 === i ? e._length - 1 : i - 1],
                        p = e.v[(i + 1) % e._length],
                        f = 2 === n ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)) : 0,
                        c = 2 === n ? Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2)) : 0;
                    setPoint(t, e.v[i % e._length], o, a, r, c / (2 * (s + 1)), f / (2 * (s + 1)), n)
                }

                function zigZagSegment(t, e, i, r, s, n) {
                    for (var a = 0; a < r; a += 1) {
                        var o = (a + 1) / (r + 1),
                            h = 2 === s ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                            l = e.normalAngle(o),
                            p = e.point(o);
                        setPoint(t, p, l, n, i, h / (2 * (r + 1)), h / (2 * (r + 1)), s), n = -n
                    }
                    return n
                }

                function linearOffset(t, e, i) {
                    var r = Math.atan2(e[0] - t[0], e[1] - t[1]);
                    return [polarOffset(t, r, i), polarOffset(e, r, i)]
                }

                function offsetSegment(t, e) {
                    var i, r, s, n, a, o, h;
                    h = linearOffset(t.points[0], t.points[1], e), i = h[0], r = h[1], h = linearOffset(t.points[1], t.points[2], e), s = h[0], n = h[1], h = linearOffset(t.points[2], t.points[3], e), a = h[0], o = h[1];
                    var l = lineIntersection(i, r, s, n);
                    null === l && (l = r);
                    var p = lineIntersection(a, o, s, n);
                    return null === p && (p = a), new PolynomialBezier(i, l, p, o)
                }

                function joinLines(t, e, i, r, s) {
                    var n = e.points[3],
                        a = i.points[0];
                    if (3 === r) return n;
                    if (pointEqual(n, a)) return n;
                    if (2 === r) {
                        var o = -e.tangentAngle(1),
                            h = -i.tangentAngle(0) + Math.PI,
                            l = lineIntersection(n, polarOffset(n, o + Math.PI / 2, 100), a, polarOffset(a, o + Math.PI / 2, 100)),
                            p = l ? pointDistance(l, n) : pointDistance(n, a) / 2,
                            f = polarOffset(n, o, 2 * p * roundCorner);
                        return t.setXYAt(f[0], f[1], "o", t.length() - 1), f = polarOffset(a, h, 2 * p * roundCorner), t.setTripleAt(a[0], a[1], a[0], a[1], f[0], f[1], t.length()), a
                    }
                    var c = pointEqual(n, e.points[2]) ? e.points[0] : e.points[2],
                        u = pointEqual(a, i.points[1]) ? i.points[3] : i.points[1],
                        m = lineIntersection(c, n, a, u);
                    return m && pointDistance(m, n) < s ? (t.setTripleAt(m[0], m[1], m[0], m[1], m[0], m[1], t.length()), m) : n
                }

                function getIntersection(t, e) {
                    var i = t.intersections(e);
                    return i.length && floatEqual(i[0][0], 1) && i.shift(), i.length ? i[0] : null
                }

                function pruneSegmentIntersection(t, e) {
                    var i = t.slice(),
                        r = e.slice(),
                        s = getIntersection(t[t.length - 1], e[0]);
                    return s && (i[t.length - 1] = t[t.length - 1].split(s[0])[0], r[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1]), s) ? [
                        [t[0].split(s[0])[0]],
                        [e[e.length - 1].split(s[1])[1]]
                    ] : [i, r]
                }

                function pruneIntersections(t) {
                    for (var e, i = 1; i < t.length; i += 1) e = pruneSegmentIntersection(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
                    return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
                }

                function offsetSegmentSplit(t, e) {
                    var i, r, s, n, a = t.inflectionPoints();
                    if (0 === a.length) return [offsetSegment(t, e)];
                    if (1 === a.length || floatEqual(a[1], 1)) return s = t.split(a[0]), i = s[0], r = s[1], [offsetSegment(i, e), offsetSegment(r, e)];
                    s = t.split(a[0]), i = s[0];
                    var o = (a[1] - a[0]) / (1 - a[0]);
                    return s = s[1].split(o), n = s[0], r = s[1], [offsetSegment(i, e), offsetSegment(n, e), offsetSegment(r, e)]
                }

                function OffsetPathModifier() {}

                function getFontProperties(t) {
                    for (var e, i = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", s = "normal", n = i.length, a = 0; a < n; a += 1) switch (e = i[a].toLowerCase(), e) {
                        case "italic":
                            s = "italic";
                            break;
                        case "bold":
                            r = "700";
                            break;
                        case "black":
                            r = "900";
                            break;
                        case "medium":
                            r = "500";
                            break;
                        case "regular":
                        case "normal":
                            r = "400";
                            break;
                        case "light":
                        case "thin":
                            r = "200";
                            break;
                        default:
                            break
                    }
                    return {
                        style: s,
                        weight: t.fWeight || r
                    }
                }
                extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, s, n) {
                    var a = n ? -1 : 1,
                        o = r.s.v[0] + (1 - r.s.v[0]) * (1 - s),
                        h = r.s.v[1] + (1 - r.s.v[1]) * (1 - s);
                    t.translate(r.p.v[0] * a * s, r.p.v[1] * a * s, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * a * s), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(n ? 1 / o : o, n ? 1 / h : h), i.translate(r.a.v[0], r.a.v[1], r.a.v[2])
                }, RepeaterModifier.prototype.init = function(t, e, i, r) {
                    this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]);
                    while (i > 0) i -= 1, this._elements.unshift(e[i]);
                    this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, RepeaterModifier.prototype.resetElements = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                }, RepeaterModifier.prototype.cloneElements = function(t) {
                    var e = JSON.parse(JSON.stringify(t));
                    return this.resetElements(e), e
                }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                    var i, r = t.length;
                    for (i = 0; i < r; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
                }, RepeaterModifier.prototype.processShapes = function(t) {
                    var e, i, r, s, n, a = !1;
                    if (this._mdf || t) {
                        var o, h = Math.ceil(this.c.v);
                        if (this._groups.length < h) {
                            while (this._groups.length < h) {
                                var l = {
                                    it: this.cloneElements(this._elements),
                                    ty: "gr"
                                };
                                l.it.push({
                                    a: {
                                        a: 0,
                                        ix: 1,
                                        k: [0, 0]
                                    },
                                    nm: "Transform",
                                    o: {
                                        a: 0,
                                        ix: 7,
                                        k: 100
                                    },
                                    p: {
                                        a: 0,
                                        ix: 2,
                                        k: [0, 0]
                                    },
                                    r: {
                                        a: 1,
                                        ix: 6,
                                        k: [{
                                            s: 0,
                                            e: 0,
                                            t: 0
                                        }, {
                                            s: 0,
                                            e: 0,
                                            t: 1
                                        }]
                                    },
                                    s: {
                                        a: 0,
                                        ix: 3,
                                        k: [100, 100]
                                    },
                                    sa: {
                                        a: 0,
                                        ix: 5,
                                        k: 0
                                    },
                                    sk: {
                                        a: 0,
                                        ix: 4,
                                        k: 0
                                    },
                                    ty: "tr"
                                }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
                            }
                            this.elem.reloadShapes(), a = !0
                        }
                        for (n = 0, r = 0; r <= this._groups.length - 1; r += 1) {
                            if (o = n < h, this._groups[r]._render = o, this.changeGroupRender(this._groups[r].it, o), !o) {
                                var p = this.elemsData[r].it,
                                    f = p[p.length - 1];
                                0 !== f.transform.op.v ? (f.transform.op._mdf = !0, f.transform.op.v = 0) : f.transform.op._mdf = !1
                            }
                            n += 1
                        }
                        this._currentCopies = h;
                        var c = this.o.v,
                            u = c % 1,
                            m = c > 0 ? Math.floor(c) : Math.ceil(c),
                            d = this.pMatrix.props,
                            y = this.rMatrix.props,
                            g = this.sMatrix.props;
                        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                        var v, b, E = 0;
                        if (c > 0) {
                            while (E < m) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), E += 1;
                            u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, u, !1), E += u)
                        } else if (c < 0) {
                            while (E > m) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), E -= 1;
                            u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -u, !0), E -= u)
                        }
                        r = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, n = this._currentCopies;
                        while (n) {
                            if (e = this.elemsData[r].it, i = e[e.length - 1].transform.mProps.v.props, b = i.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== E) {
                                for ((0 !== r && 1 === s || r !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
                                this.matrix.reset()
                            } else
                                for (this.matrix.reset(), v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
                            E += 1, n -= 1, r += s
                        }
                    } else {
                        n = this._currentCopies, r = 0, s = 1;
                        while (n) e = this.elemsData[r].it, i = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, n -= 1, r += s
                    }
                    return a
                }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                }, RoundCornersModifier.prototype.processPath = function(t, e) {
                    var i, r = shapePool.newElement();
                    r.c = t.c;
                    var s, n, a, o, h, l, p, f, c, u, m, d, y = t._length,
                        g = 0;
                    for (i = 0; i < y; i += 1) s = t.v[i], a = t.o[i], n = t.i[i], s[0] === a[0] && s[1] === a[1] && s[0] === n[0] && s[1] === n[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2)), l = h ? Math.min(h / 2, e) / h : 0, m = s[0] + (o[0] - s[0]) * l, p = m, d = s[1] - (s[1] - o[1]) * l, f = d, c = p - (p - s[0]) * roundCorner, u = f - (f - s[1]) * roundCorner, r.setTripleAt(p, f, c, u, m, d, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2)), l = h ? Math.min(h / 2, e) / h : 0, c = s[0] + (o[0] - s[0]) * l, p = c, u = s[1] + (o[1] - s[1]) * l, f = u, m = p - (p - s[0]) * roundCorner, d = f - (f - s[1]) * roundCorner, r.setTripleAt(p, f, c, u, m, d, g), g += 1) : (r.setTripleAt(s[0], s[1], a[0], a[1], n[0], n[1], g), g += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1);
                    return r
                }, RoundCornersModifier.prototype.processShapes = function(t) {
                    var e, i, r, s, n, a, o = this.shapes.length,
                        h = this.rd.v;
                    if (0 !== h)
                        for (i = 0; i < o; i += 1) {
                            if (n = this.shapes[i], a = n.localShapeCollection, n.shape._mdf || this._mdf || t)
                                for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, s = n.shape.paths._length, r = 0; r < s; r += 1) a.addShape(this.processPath(e[r], h));
                            n.shape.paths = n.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, PolynomialBezier.prototype.point = function(t) {
                    return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
                }, PolynomialBezier.prototype.derivative = function(t) {
                    return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
                }, PolynomialBezier.prototype.tangentAngle = function(t) {
                    var e = this.derivative(t);
                    return Math.atan2(e[1], e[0])
                }, PolynomialBezier.prototype.normalAngle = function(t) {
                    var e = this.derivative(t);
                    return Math.atan2(e[0], e[1])
                }, PolynomialBezier.prototype.inflectionPoints = function() {
                    var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                    if (floatZero(t)) return [];
                    var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
                        i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                    if (i < 0) return [];
                    var r = Math.sqrt(i);
                    return floatZero(r) ? r > 0 && r < 1 ? [e] : [] : [e - r, e + r].filter((function(t) {
                        return t > 0 && t < 1
                    }))
                }, PolynomialBezier.prototype.split = function(t) {
                    if (t <= 0) return [singlePoint(this.points[0]), this];
                    if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                    var e = lerpPoint(this.points[0], this.points[1], t),
                        i = lerpPoint(this.points[1], this.points[2], t),
                        r = lerpPoint(this.points[2], this.points[3], t),
                        s = lerpPoint(e, i, t),
                        n = lerpPoint(i, r, t),
                        a = lerpPoint(s, n, t);
                    return [new PolynomialBezier(this.points[0], e, s, a, !0), new PolynomialBezier(a, n, r, this.points[3], !0)]
                }, PolynomialBezier.prototype.bounds = function() {
                    return {
                        x: extrema(this, 0),
                        y: extrema(this, 1)
                    }
                }, PolynomialBezier.prototype.boundingBox = function() {
                    var t = this.bounds();
                    return {
                        left: t.x.min,
                        right: t.x.max,
                        top: t.y.min,
                        bottom: t.y.max,
                        width: t.x.max - t.x.min,
                        height: t.y.max - t.y.min,
                        cx: (t.x.max + t.x.min) / 2,
                        cy: (t.y.max + t.y.min) / 2
                    }
                }, PolynomialBezier.prototype.intersections = function(t, e, i) {
                    void 0 === e && (e = 2), void 0 === i && (i = 7);
                    var r = [];
                    return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, r, i), r
                }, PolynomialBezier.shapeSegment = function(t, e) {
                    var i = (e + 1) % t.length();
                    return new PolynomialBezier(t.v[e], t.o[e], t.i[i], t.v[i], !0)
                }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
                    var i = (e + 1) % t.length();
                    return new PolynomialBezier(t.v[i], t.i[i], t.o[e], t.v[e], !0)
                }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
                }, ZigZagModifier.prototype.processPath = function(t, e, i, r) {
                    var s = t._length,
                        n = shapePool.newElement();
                    if (n.c = t.c, t.c || (s -= 1), 0 === s) return n;
                    var a = -1,
                        o = PolynomialBezier.shapeSegment(t, 0);
                    zigZagCorner(n, t, 0, e, i, r, a);
                    for (var h = 0; h < s; h += 1) a = zigZagSegment(n, o, e, i, r, -a), o = h !== s - 1 || t.c ? PolynomialBezier.shapeSegment(t, (h + 1) % s) : null, zigZagCorner(n, t, h + 1, e, i, r, a);
                    return n
                }, ZigZagModifier.prototype.processShapes = function(t) {
                    var e, i, r, s, n, a, o = this.shapes.length,
                        h = this.amplitude.v,
                        l = Math.max(0, Math.round(this.frequency.v)),
                        p = this.pointsType.v;
                    if (0 !== h)
                        for (i = 0; i < o; i += 1) {
                            if (n = this.shapes[i], a = n.localShapeCollection, n.shape._mdf || this._mdf || t)
                                for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, s = n.shape.paths._length, r = 0; r < s; r += 1) a.addShape(this.processPath(e[r], h, l, p));
                            n.shape.paths = n.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
                }, OffsetPathModifier.prototype.processPath = function(t, e, i, r) {
                    var s = shapePool.newElement();
                    s.c = t.c;
                    var n, a, o, h = t.length();
                    t.c || (h -= 1);
                    var l = [];
                    for (n = 0; n < h; n += 1) o = PolynomialBezier.shapeSegment(t, n), l.push(offsetSegmentSplit(o, e));
                    if (!t.c)
                        for (n = h - 1; n >= 0; n -= 1) o = PolynomialBezier.shapeSegmentInverted(t, n), l.push(offsetSegmentSplit(o, e));
                    l = pruneIntersections(l);
                    var p = null,
                        f = null;
                    for (n = 0; n < l.length; n += 1) {
                        var c = l[n];
                        for (f && (p = joinLines(s, f, c[0], i, r)), f = c[c.length - 1], a = 0; a < c.length; a += 1) o = c[a], p && pointEqual(o.points[0], p) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), p = o.points[3]
                    }
                    return l.length && joinLines(s, f, l[0][0], i, r), s
                }, OffsetPathModifier.prototype.processShapes = function(t) {
                    var e, i, r, s, n, a, o = this.shapes.length,
                        h = this.amount.v,
                        l = this.miterLimit.v,
                        p = this.lineJoin;
                    if (0 !== h)
                        for (i = 0; i < o; i += 1) {
                            if (n = this.shapes[i], a = n.localShapeCollection, n.shape._mdf || this._mdf || t)
                                for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, s = n.shape.paths._length, r = 0; r < s; r += 1) a.addShape(this.processPath(e[r], h, p, l));
                            n.shape.paths = n.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var FontManager = function() {
                    var t = 5e3,
                        e = {
                            w: 0,
                            size: 0,
                            shapes: [],
                            data: {
                                shapes: []
                            }
                        },
                        i = [];
                    i = i.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                    var r = 127988,
                        s = 917631,
                        n = 917601,
                        a = 917626,
                        o = 65039,
                        h = 8205,
                        l = 127462,
                        p = 127487,
                        f = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

                    function c(t) {
                        var e, i = t.split(","),
                            r = i.length,
                            s = [];
                        for (e = 0; e < r; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && s.push(i[e]);
                        return s.join(",")
                    }

                    function u(t, e) {
                        var i = createTag("span");
                        i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
                        var r = createTag("span");
                        r.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(r), document.body.appendChild(i);
                        var s = r.offsetWidth;
                        return r.style.fontFamily = c(t) + ", " + e, {
                            node: r,
                            w: s,
                            parent: i
                        }
                    }

                    function m() {
                        var e, i, r, s = this.fonts.length,
                            n = s;
                        for (e = 0; e < s; e += 1) this.fonts[e].loaded ? n -= 1 : "n" === this.fonts[e].fOrigin || 0 === this.fonts[e].origin ? this.fonts[e].loaded = !0 : (i = this.fonts[e].monoCase.node, r = this.fonts[e].monoCase.w, i.offsetWidth !== r ? (n -= 1, this.fonts[e].loaded = !0) : (i = this.fonts[e].sansCase.node, r = this.fonts[e].sansCase.w, i.offsetWidth !== r && (n -= 1, this.fonts[e].loaded = !0)), this.fonts[e].loaded && (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent), this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
                        0 !== n && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    }

                    function d(t, e) {
                        var i, r = document.body && e ? "svg" : "canvas",
                            s = getFontProperties(t);
                        if ("svg" === r) {
                            var n = createNS("text");
                            n.style.fontSize = "100px", n.setAttribute("font-family", t.fFamily), n.setAttribute("font-style", s.style), n.setAttribute("font-weight", s.weight), n.textContent = "1", t.fClass ? (n.style.fontFamily = "inherit", n.setAttribute("class", t.fClass)) : n.style.fontFamily = t.fFamily, e.appendChild(n), i = n
                        } else {
                            var a = new OffscreenCanvas(500, 500).getContext("2d");
                            a.font = s.style + " " + s.weight + " 100px " + t.fFamily, i = a
                        }

                        function o(t) {
                            return "svg" === r ? (i.textContent = t, i.getComputedTextLength()) : i.measureText(t).width
                        }
                        return {
                            measureText: o
                        }
                    }

                    function y(t, e) {
                        if (t) {
                            if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                            if (!document.body) return this.isLoaded = !0, t.list.forEach((function(t) {
                                t.helper = d(t), t.cache = {}
                            })), void(this.fonts = t.list);
                            var i, r = t.list,
                                s = r.length,
                                n = s;
                            for (i = 0; i < s; i += 1) {
                                var a, o, h = !0;
                                if (r[i].loaded = !1, r[i].monoCase = u(r[i].fFamily, "monospace"), r[i].sansCase = u(r[i].fFamily, "sans-serif"), r[i].fPath) {
                                    if ("p" === r[i].fOrigin || 3 === r[i].origin) {
                                        if (a = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[i].fFamily + '"], style[f-origin="3"][f-family="' + r[i].fFamily + '"]'), a.length > 0 && (h = !1), h) {
                                            var l = createTag("style");
                                            l.setAttribute("f-forigin", r[i].fOrigin), l.setAttribute("f-origin", r[i].origin), l.setAttribute("f-family", r[i].fFamily), l.type = "text/css", l.innerText = "@font-face {font-family: " + r[i].fFamily + "; font-style: normal; src: url('" + r[i].fPath + "');}", e.appendChild(l)
                                        }
                                    } else if ("g" === r[i].fOrigin || 1 === r[i].origin) {
                                        for (a = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), o = 0; o < a.length; o += 1) - 1 !== a[o].href.indexOf(r[i].fPath) && (h = !1);
                                        if (h) {
                                            var p = createTag("link");
                                            p.setAttribute("f-forigin", r[i].fOrigin), p.setAttribute("f-origin", r[i].origin), p.type = "text/css", p.rel = "stylesheet", p.href = r[i].fPath, document.body.appendChild(p)
                                        }
                                    } else if ("t" === r[i].fOrigin || 2 === r[i].origin) {
                                        for (a = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), o = 0; o < a.length; o += 1) r[i].fPath === a[o].src && (h = !1);
                                        if (h) {
                                            var f = createTag("link");
                                            f.setAttribute("f-forigin", r[i].fOrigin), f.setAttribute("f-origin", r[i].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", r[i].fPath), e.appendChild(f)
                                        }
                                    }
                                } else r[i].loaded = !0, n -= 1;
                                r[i].helper = d(r[i], e), r[i].cache = {}, this.fonts.push(r[i])
                            }
                            0 === n ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                        } else this.isLoaded = !0
                    }

                    function g(t) {
                        if (t) {
                            var e;
                            this.chars || (this.chars = []);
                            var i, r, s = t.length,
                                n = this.chars.length;
                            for (e = 0; e < s; e += 1) {
                                i = 0, r = !1;
                                while (i < n) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0), i += 1;
                                r || (this.chars.push(t[e]), n += 1)
                            }
                        }
                    }

                    function v(t, i, r) {
                        var s = 0,
                            n = this.chars.length;
                        while (s < n) {
                            if (this.chars[s].ch === t && this.chars[s].style === i && this.chars[s].fFamily === r) return this.chars[s];
                            s += 1
                        }
                        return ("string" === typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", t, i, r)), e
                    }

                    function b(t, e, i) {
                        var r = this.getFontByName(e),
                            s = t;
                        if (!r.cache[s]) {
                            var n = r.helper;
                            if (" " === t) {
                                var a = n.measureText("|" + t + "|"),
                                    o = n.measureText("||");
                                r.cache[s] = (a - o) / 100
                            } else r.cache[s] = n.measureText(t) / 100
                        }
                        return r.cache[s] * i
                    }

                    function E(t) {
                        var e = 0,
                            i = this.fonts.length;
                        while (e < i) {
                            if (this.fonts[e].fName === t) return this.fonts[e];
                            e += 1
                        }
                        return this.fonts[0]
                    }

                    function S(t) {
                        var e = 0,
                            i = t.charCodeAt(0);
                        if (i >= 55296 && i <= 56319) {
                            var r = t.charCodeAt(1);
                            r >= 56320 && r <= 57343 && (e = 1024 * (i - 55296) + r - 56320 + 65536)
                        }
                        return e
                    }

                    function x(t, e) {
                        var i = t.toString(16) + e.toString(16);
                        return -1 !== f.indexOf(i)
                    }

                    function P(t) {
                        return t === h
                    }

                    function T(t) {
                        return t === o
                    }

                    function C(t) {
                        var e = S(t);
                        return e >= l && e <= p
                    }

                    function A(t) {
                        return C(t.substr(0, 2)) && C(t.substr(2, 2))
                    }

                    function w(t) {
                        return -1 !== i.indexOf(t)
                    }

                    function _(t, e) {
                        var i = S(t.substr(e, 2));
                        if (i !== r) return !1;
                        var o = 0;
                        e += 2;
                        while (o < 5) {
                            if (i = S(t.substr(e, 2)), i < n || i > a) return !1;
                            o += 1, e += 2
                        }
                        return S(t.substr(e, 2)) === s
                    }

                    function D() {
                        this.isLoaded = !0
                    }
                    var M = function() {
                        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                    };
                    M.isModifier = x, M.isZeroWidthJoiner = P, M.isFlagEmoji = A, M.isRegionalCode = C, M.isCombinedCharacter = w, M.isRegionalFlag = _, M.isVariationSelector = T, M.BLACK_FLAG_CODE_POINT = r;
                    var k = {
                        addChars: g,
                        addFonts: y,
                        getCharData: v,
                        getFontByName: E,
                        measureText: b,
                        checkLoadedFonts: m,
                        setIsLoaded: D
                    };
                    return M.prototype = k, M
                }();

                function SlotManager(t) {
                    this.animationData = t
                }

                function slotFactory(t) {
                    return new SlotManager(t)
                }

                function RenderableElement() {}
                SlotManager.prototype.getProp = function(t) {
                    return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
                }, RenderableElement.prototype = {
                    initRenderable: function() {
                        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                    },
                    addRenderableComponent: function(t) {
                        -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                    },
                    removeRenderableComponent: function(t) {
                        -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                    },
                    prepareRenderableFrame: function(t) {
                        this.checkLayerLimits(t)
                    },
                    checkTransparency: function() {
                        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                    },
                    checkLayerLimits: function(t) {
                        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                    },
                    renderRenderable: function() {
                        var t, e = this.renderableComponents.length;
                        for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                    },
                    sourceRectAtTime: function() {
                        return {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    },
                    getLayerSize: function() {
                        return 5 === this.data.ty ? {
                            w: this.data.textData.width,
                            h: this.data.textData.height
                        } : {
                            w: this.data.width,
                            h: this.data.height
                        }
                    }
                };
                var getBlendMode = function() {
                    var t = {
                        0: "source-over",
                        1: "multiply",
                        2: "screen",
                        3: "overlay",
                        4: "darken",
                        5: "lighten",
                        6: "color-dodge",
                        7: "color-burn",
                        8: "hard-light",
                        9: "soft-light",
                        10: "difference",
                        11: "exclusion",
                        12: "hue",
                        13: "saturation",
                        14: "color",
                        15: "luminosity"
                    };
                    return function(e) {
                        return t[e] || ""
                    }
                }();

                function SliderEffect(t, e, i) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                }

                function AngleEffect(t, e, i) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                }

                function ColorEffect(t, e, i) {
                    this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
                }

                function PointEffect(t, e, i) {
                    this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
                }

                function LayerIndexEffect(t, e, i) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                }

                function MaskIndexEffect(t, e, i) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                }

                function CheckboxEffect(t, e, i) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                }

                function NoValueEffect() {
                    this.p = {}
                }

                function EffectsManager(t, e) {
                    var i, r = t.ef || [];
                    this.effectElements = [];
                    var s, n = r.length;
                    for (i = 0; i < n; i += 1) s = new GroupEffect(r[i], e), this.effectElements.push(s)
                }

                function GroupEffect(t, e) {
                    this.init(t, e)
                }

                function BaseElement() {}

                function FrameElement() {}

                function FootageElement(t, e, i) {
                    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
                }

                function AudioElement(t, e, i) {
                    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
                    var r = this.globalData.getAssetsPath(this.assetData);
                    this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
                        k: [100]
                    }, 1, .01, this)
                }

                function BaseRenderer() {}
                extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                    var i;
                    this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                    var r, s = this.data.ef.length,
                        n = this.data.ef;
                    for (i = 0; i < s; i += 1) {
                        switch (r = null, n[i].ty) {
                            case 0:
                                r = new SliderEffect(n[i], e, this);
                                break;
                            case 1:
                                r = new AngleEffect(n[i], e, this);
                                break;
                            case 2:
                                r = new ColorEffect(n[i], e, this);
                                break;
                            case 3:
                                r = new PointEffect(n[i], e, this);
                                break;
                            case 4:
                            case 7:
                                r = new CheckboxEffect(n[i], e, this);
                                break;
                            case 10:
                                r = new LayerIndexEffect(n[i], e, this);
                                break;
                            case 11:
                                r = new MaskIndexEffect(n[i], e, this);
                                break;
                            case 5:
                                r = new EffectsManager(n[i], e, this);
                                break;
                            default:
                                r = new NoValueEffect(n[i], e, this);
                                break
                        }
                        r && this.effectElements.push(r)
                    }
                }, BaseElement.prototype = {
                    checkMasks: function() {
                        if (!this.data.hasMask) return !1;
                        var t = 0,
                            e = this.data.masksProperties.length;
                        while (t < e) {
                            if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                            t += 1
                        }
                        return !1
                    },
                    initExpressions: function() {
                        var t = getExpressionInterfaces();
                        if (t) {
                            var e = t("layer"),
                                i = t("effects"),
                                r = t("shape"),
                                s = t("text"),
                                n = t("comp");
                            this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                            var a = i.createEffectsInterface(this, this.layerInterface);
                            this.layerInterface.registerEffectsInterface(a), 0 === this.data.ty || this.data.xt ? this.compInterface = n(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = r(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = s(this), this.layerInterface.text = this.layerInterface.textInterface)
                        }
                    },
                    setBlendMode: function() {
                        var t = getBlendMode(this.data.bm),
                            e = this.baseElement || this.layerElement;
                        e.style["mix-blend-mode"] = t
                    },
                    initBaseData: function(t, e, i) {
                        this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                    },
                    getType: function() {
                        return this.type
                    },
                    sourceRectAtTime: function() {}
                }, FrameElement.prototype = {
                    initFrame: function() {
                        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                    },
                    prepareProperties: function(t, e) {
                        var i, r = this.dynamicProperties.length;
                        for (i = 0; i < r; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                    },
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                    }
                }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
                    return null
                }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                    var t = getExpressionInterfaces();
                    if (t) {
                        var e = t("footage");
                        this.layerInterface = e(this)
                    }
                }, FootageElement.prototype.getFootageData = function() {
                    return this.footageData
                }, AudioElement.prototype.prepareFrame = function(t) {
                    if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        this._currentTime = e
                    }
                    this._volume = this.lv.v[0];
                    var i = this._volume * this._volumeMultiplier;
                    this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i))
                }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                    this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                    this.audio.pause(), this._isPlaying = !1
                }, AudioElement.prototype.pause = function() {
                    this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                }, AudioElement.prototype.resume = function() {
                    this._canPlay = !0
                }, AudioElement.prototype.setRate = function(t) {
                    this.audio.rate(t)
                }, AudioElement.prototype.volume = function(t) {
                    this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
                }, AudioElement.prototype.getBaseElement = function() {
                    return null
                }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(t) {
                    var e, i, r = this.layers.length;
                    for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e], i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = !!this.elements[e] && this.completeLayers;
                    this.checkPendingElements()
                }, BaseRenderer.prototype.createItem = function(t) {
                    switch (t.ty) {
                        case 2:
                            return this.createImage(t);
                        case 0:
                            return this.createComp(t);
                        case 1:
                            return this.createSolid(t);
                        case 3:
                            return this.createNull(t);
                        case 4:
                            return this.createShape(t);
                        case 5:
                            return this.createText(t);
                        case 6:
                            return this.createAudio(t);
                        case 13:
                            return this.createCamera(t);
                        case 15:
                            return this.createFootage(t);
                        default:
                            return this.createNull(t)
                    }
                }, BaseRenderer.prototype.createCamera = function() {
                    throw new Error("You're using a 3d camera. Try the html renderer.")
                }, BaseRenderer.prototype.createAudio = function(t) {
                    return new AudioElement(t, this.globalData, this)
                }, BaseRenderer.prototype.createFootage = function(t) {
                    return new FootageElement(t, this.globalData, this)
                }, BaseRenderer.prototype.buildAllItems = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.buildItem(t);
                    this.checkPendingElements()
                }, BaseRenderer.prototype.includeLayers = function(t) {
                    var e;
                    this.completeLayers = !1;
                    var i, r = t.length,
                        s = this.layers.length;
                    for (e = 0; e < r; e += 1) {
                        i = 0;
                        while (i < s) {
                            if (this.layers[i].id === t[e].id) {
                                this.layers[i] = t[e];
                                break
                            }
                            i += 1
                        }
                    }
                }, BaseRenderer.prototype.setProjectInterface = function(t) {
                    this.globalData.projectInterface = t
                }, BaseRenderer.prototype.initItems = function() {
                    this.globalData.progressiveLoad || this.buildAllItems()
                }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
                    var r = this.elements,
                        s = this.layers,
                        n = 0,
                        a = s.length;
                    while (n < a) s[n].ind == e && (r[n] && !0 !== r[n] ? (i.push(r[n]), r[n].setAsParent(), void 0 !== s[n].parent ? this.buildElementParenting(t, s[n].parent, i) : t.setHierarchy(i)) : (this.buildItem(n), this.addPendingElement(t))), n += 1
                }, BaseRenderer.prototype.addPendingElement = function(t) {
                    this.pendingElements.push(t)
                }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1)
                        if (t[e].xt) {
                            var r = this.createComp(t[e]);
                            r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
                        }
                }, BaseRenderer.prototype.getElementById = function(t) {
                    var e, i = this.elements.length;
                    for (e = 0; e < i; e += 1)
                        if (this.elements[e].data.ind === t) return this.elements[e];
                    return null
                }, BaseRenderer.prototype.getElementByPath = function(t) {
                    var e, i = t.shift();
                    if ("number" === typeof i) e = this.elements[i];
                    else {
                        var r, s = this.elements.length;
                        for (r = 0; r < s; r += 1)
                            if (this.elements[r].data.nm === i) {
                                e = this.elements[r];
                                break
                            }
                    }
                    return 0 === t.length ? e : e.getElementByPath(t)
                }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                    this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                        w: t.w,
                        h: t.h
                    }
                };
                var effectTypes = {
                    TRANSFORM_EFFECT: "transformEFfect"
                };

                function TransformElement() {}

                function MaskElement(t, e, i) {
                    this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                    var r, s, n = this.globalData.defs,
                        a = this.masksProperties ? this.masksProperties.length : 0;
                    this.viewData = createSizedArray(a), this.solidPath = "";
                    var o, h, l, p, f, c, u = this.masksProperties,
                        m = 0,
                        d = [],
                        y = createElementID(),
                        g = "clipPath",
                        v = "clip-path";
                    for (r = 0; r < a; r += 1)
                        if (("a" !== u[r].mode && "n" !== u[r].mode || u[r].inv || 100 !== u[r].o.k || u[r].o.x) && (g = "mask", v = "mask"), "s" !== u[r].mode && "i" !== u[r].mode || 0 !== m ? l = null : (l = createNS("rect"), l.setAttribute("fill", "#0f0e11fff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), d.push(l)), s = createNS("path"), "n" === u[r].mode) this.viewData[r] = {
                            op: PropertyFactory.getProp(this.element, u[r].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, u[r], 3),
                            elem: s,
                            lastPath: ""
                        }, n.appendChild(s);
                        else {
                            var b;
                            if (m += 1, s.setAttribute("fill", "s" === u[r].mode ? "#000000" : "#0f0e11fff"), s.setAttribute("clip-rule", "nonzero"), 0 !== u[r].x.k ? (g = "mask", v = "mask", c = PropertyFactory.getProp(this.element, u[r].x, 0, null, this.element), b = createElementID(), p = createNS("filter"), p.setAttribute("id", b), f = createNS("feMorphology"), f.setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), p.appendChild(f), n.appendChild(p), s.setAttribute("stroke", "s" === u[r].mode ? "#000000" : "#0f0e11fff")) : (f = null, c = null), this.storedData[r] = {
                                    elem: s,
                                    x: c,
                                    expan: f,
                                    lastPath: "",
                                    lastOperator: "",
                                    filterId: b,
                                    lastRadius: 0
                                }, "i" === u[r].mode) {
                                h = d.length;
                                var E = createNS("g");
                                for (o = 0; o < h; o += 1) E.appendChild(d[o]);
                                var S = createNS("mask");
                                S.setAttribute("mask-type", "alpha"), S.setAttribute("id", y + "_" + m), S.appendChild(s), n.appendChild(S), E.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + m + ")"), d.length = 0, d.push(E)
                            } else d.push(s);
                            u[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                                elem: s,
                                lastPath: "",
                                op: PropertyFactory.getProp(this.element, u[r].o, 0, .01, this.element),
                                prop: ShapePropertyFactory.getShapeProp(this.element, u[r], 3),
                                invRect: l
                            }, this.viewData[r].prop.k || this.drawPath(u[r], this.viewData[r].prop.v, this.viewData[r])
                        }
                    for (this.maskElement = createNS(g), a = d.length, r = 0; r < a; r += 1) this.maskElement.appendChild(d[r]);
                    m > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + y + ")"), n.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                }
                TransformElement.prototype = {
                    initTransform: function() {
                        var t = new Matrix;
                        this.finalTransform = {
                            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                o: 0
                            },
                            _matMdf: !1,
                            _localMatMdf: !1,
                            _opMdf: !1,
                            mat: t,
                            localMat: t,
                            localOpacity: 1
                        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                    },
                    renderTransform: function() {
                        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                            var t, e = this.finalTransform.mat,
                                i = 0,
                                r = this.hierarchy.length;
                            if (!this.finalTransform._matMdf)
                                while (i < r) {
                                    if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                        this.finalTransform._matMdf = !0;
                                        break
                                    }
                                    i += 1
                                }
                            if (this.finalTransform._matMdf)
                                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) e.multiply(this.hierarchy[i].finalTransform.mProp.v)
                        }
                        this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
                    },
                    renderLocalTransform: function() {
                        if (this.localTransforms) {
                            var t = 0,
                                e = this.localTransforms.length;
                            if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                                while (t < e) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
                            if (this.finalTransform._localMatMdf) {
                                var i = this.finalTransform.localMat;
                                for (this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1) {
                                    var r = this.localTransforms[t].matrix;
                                    i.multiply(r)
                                }
                                i.multiply(this.finalTransform.mat)
                            }
                            if (this.finalTransform._opMdf) {
                                var s = this.finalTransform.localOpacity;
                                for (t = 0; t < e; t += 1) s *= .01 * this.localTransforms[t].opacity;
                                this.finalTransform.localOpacity = s
                            }
                        }
                    },
                    searchEffectTransforms: function() {
                        if (this.renderableEffectsManager) {
                            var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                            if (t.length) {
                                this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                                var e = 0,
                                    i = t.length;
                                for (e = 0; e < i; e += 1) this.localTransforms.push(t[e])
                            }
                        }
                    },
                    globalToLocal: function(t) {
                        var e = [];
                        e.push(this.finalTransform);
                        var i, r = !0,
                            s = this.comp;
                        while (r) s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : r = !1;
                        var n, a = e.length;
                        for (i = 0; i < a; i += 1) n = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - n[0], t[1] - n[1], 0];
                        return t
                    },
                    mHelper: new Matrix
                }, MaskElement.prototype.getMaskProperty = function(t) {
                    return this.viewData[t].prop
                }, MaskElement.prototype.renderFrame = function(t) {
                    var e, i = this.element.finalTransform.mat,
                        r = this.masksProperties.length;
                    for (e = 0; e < r; e += 1)
                        if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                            var s = this.storedData[e].expan;
                            this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                        }
                }, MaskElement.prototype.getMaskelement = function() {
                    return this.maskElement
                }, MaskElement.prototype.createLayerSolidPath = function() {
                    var t = "M0,0 ";
                    return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t
                }, MaskElement.prototype.drawPath = function(t, e, i) {
                    var r, s, n = " M" + e.v[0][0] + "," + e.v[0][1];
                    for (s = e._length, r = 1; r < s; r += 1) n += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
                    if (e.c && s > 1 && (n += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== n) {
                        var a = "";
                        i.elem && (e.c && (a = t.inv ? this.solidPath + n : n), i.elem.setAttribute("d", a)), i.lastPath = n
                    }
                }, MaskElement.prototype.destroy = function() {
                    this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                };
                var filtersFactory = function() {
                        var t = {};

                        function e(t, e) {
                            var i = createNS("filter");
                            return i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
                        }

                        function i() {
                            var t = createNS("feColorMatrix");
                            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                        }
                        return t.createFilter = e, t.createAlphaToLuminanceFilter = i, t
                    }(),
                    featureSupport = function() {
                        var t = {
                            maskType: !0,
                            svgLumaHidden: !0,
                            offscreenCanvas: "undefined" !== typeof OffscreenCanvas
                        };
                        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
                    }(),
                    registeredEffects$1 = {},
                    idPrefix = "filter_result_";

                function SVGEffects(t) {
                    var e, i, r = "SourceGraphic",
                        s = t.data.ef ? t.data.ef.length : 0,
                        n = createElementID(),
                        a = filtersFactory.createFilter(n, !0),
                        o = 0;
                    for (this.filters = [], e = 0; e < s; e += 1) {
                        i = null;
                        var h = t.data.ef[e].ty;
                        if (registeredEffects$1[h]) {
                            var l = registeredEffects$1[h].effect;
                            i = new l(a, t.effectsManager.effectElements[e], t, idPrefix + o, r), r = idPrefix + o, registeredEffects$1[h].countsAsEffect && (o += 1)
                        }
                        i && this.filters.push(i)
                    }
                    o && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this)
                }

                function registerEffect$1(t, e, i) {
                    registeredEffects$1[t] = {
                        effect: e,
                        countsAsEffect: i
                    }
                }

                function SVGBaseElement() {}

                function HierarchyElement() {}

                function RenderableDOMElement() {}

                function IImageElement(t, e, i) {
                    this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = {
                        top: 0,
                        left: 0,
                        width: this.assetData.w,
                        height: this.assetData.h
                    }
                }

                function ProcessedElement(t, e) {
                    this.elem = t, this.pos = e
                }

                function IShapeElement() {}
                SVGEffects.prototype.renderFrame = function(t) {
                        var e, i = this.filters.length;
                        for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
                    }, SVGEffects.prototype.getEffects = function(t) {
                        var e, i = this.filters.length,
                            r = [];
                        for (e = 0; e < i; e += 1) this.filters[e].type === t && r.push(this.filters[e]);
                        return r
                    }, SVGBaseElement.prototype = {
                        initRendererElement: function() {
                            this.layerElement = createNS("g")
                        },
                        createContainerElements: function() {
                            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                            var t = null;
                            if (this.data.td) {
                                this.matteMasks = {};
                                var e = createNS("g");
                                e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
                            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                                var i = createNS("clipPath"),
                                    r = createNS("path");
                                r.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                var s = createElementID();
                                if (i.setAttribute("id", s), i.appendChild(r), this.globalData.defs.appendChild(i), this.checkMasks()) {
                                    var n = createNS("g");
                                    n.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), n.appendChild(this.layerElement), this.transformedElement = n, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                                } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")")
                            }
                            0 !== this.data.bm && this.setBlendMode()
                        },
                        renderElement: function() {
                            this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
                        },
                        destroyBaseElement: function() {
                            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                        },
                        getBaseElement: function() {
                            return this.data.hd ? null : this.baseElement
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
                        },
                        getMatte: function(t) {
                            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                                var e, i, r, s, n = this.layerId + "_" + t;
                                if (1 === t || 3 === t) {
                                    var a = createNS("mask");
                                    a.setAttribute("id", n), a.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), r = createNS("use"), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), a.appendChild(r), this.globalData.defs.appendChild(a), featureSupport.maskType || 1 !== t || (a.setAttribute("mask-type", "luminance"), e = createElementID(), i = filtersFactory.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s = createNS("g"), s.appendChild(r), a.appendChild(s), s.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
                                } else if (2 === t) {
                                    var o = createNS("mask");
                                    o.setAttribute("id", n), o.setAttribute("mask-type", "alpha");
                                    var h = createNS("g");
                                    o.appendChild(h), e = createElementID(), i = filtersFactory.createFilter(e);
                                    var l = createNS("feComponentTransfer");
                                    l.setAttribute("in", "SourceGraphic"), i.appendChild(l);
                                    var p = createNS("feFuncA");
                                    p.setAttribute("type", "table"), p.setAttribute("tableValues", "1.0 0.0"), l.appendChild(p), this.globalData.defs.appendChild(i);
                                    var f = createNS("rect");
                                    f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#0f0e11fff"), f.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), h.appendChild(f), r = createNS("use"), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(r), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s = createNS("g"), h.appendChild(f), s.appendChild(this.layerElement), h.appendChild(s)), this.globalData.defs.appendChild(o)
                                }
                                this.matteMasks[t] = n
                            }
                            return this.matteMasks[t]
                        },
                        setMatte: function(t) {
                            this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
                        }
                    }, HierarchyElement.prototype = {
                        initHierarchy: function() {
                            this.hierarchy = [], this._isParent = !1, this.checkParenting()
                        },
                        setHierarchy: function(t) {
                            this.hierarchy = t
                        },
                        setAsParent: function() {
                            this._isParent = !0
                        },
                        checkParenting: function() {
                            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                        }
                    },
                    function() {
                        var t = {
                            initElement: function(t, e, i) {
                                this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                            },
                            hide: function() {
                                if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                                    var t = this.baseElement || this.layerElement;
                                    t.style.display = "none", this.hidden = !0
                                }
                            },
                            show: function() {
                                if (this.isInRange && !this.isTransparent) {
                                    if (!this.data.hd) {
                                        var t = this.baseElement || this.layerElement;
                                        t.style.display = "block"
                                    }
                                    this.hidden = !1, this._isFirstFrame = !0
                                }
                            },
                            renderFrame: function() {
                                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                            },
                            renderInnerContent: function() {},
                            prepareFrame: function(t) {
                                this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                            },
                            destroy: function() {
                                this.innerElem = null, this.destroyBaseElement()
                            }
                        };
                        extendPrototype([RenderableElement, createProxyFunction(t)], RenderableDOMElement)
                    }(), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                        var t = this.globalData.getAssetsPath(this.assetData);
                        this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                    }, IImageElement.prototype.sourceRectAtTime = function() {
                        return this.sourceRect
                    }, IShapeElement.prototype = {
                        addShapeToModifiers: function(t) {
                            var e, i = this.shapeModifiers.length;
                            for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
                        },
                        isShapeInAnimatedModifiers: function(t) {
                            var e = 0,
                                i = this.shapeModifiers.length;
                            while (e < i)
                                if (this.shapeModifiers[e].isAnimatedWithShape(t)) return !0;
                            return !1
                        },
                        renderModifiers: function() {
                            if (this.shapeModifiers.length) {
                                var t, e, i = this.shapes.length;
                                for (t = 0; t < i; t += 1) this.shapes[t].sh.reset();
                                for (i = this.shapeModifiers.length, t = i - 1; t >= 0; t -= 1)
                                    if (e = this.shapeModifiers[t].processShapes(this._isFirstFrame), e) break
                            }
                        },
                        searchProcessedElement: function(t) {
                            var e = this.processedElements,
                                i = 0,
                                r = e.length;
                            while (i < r) {
                                if (e[i].elem === t) return e[i].pos;
                                i += 1
                            }
                            return 0
                        },
                        addProcessedElement: function(t, e) {
                            var i = this.processedElements,
                                r = i.length;
                            while (r)
                                if (r -= 1, i[r].elem === t) return void(i[r].pos = e);
                            i.push(new ProcessedElement(t, e))
                        },
                        prepareFrame: function(t) {
                            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                        }
                    };
                var lineCapEnum = {
                        1: "butt",
                        2: "round",
                        3: "square"
                    },
                    lineJoinEnum = {
                        1: "miter",
                        2: "round",
                        3: "bevel"
                    };

                function SVGShapeData(t, e, i) {
                    this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
                    var r = 0,
                        s = t.length;
                    while (r < s) {
                        if (t[r].mProps.dynamicProperties.length) {
                            this._isAnimated = !0;
                            break
                        }
                        r += 1
                    }
                }

                function SVGStyleData(t, e) {
                    this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
                }

                function DashProperty(t, e, i, r) {
                    var s;
                    this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
                    var n, a = e.length || 0;
                    for (s = 0; s < a; s += 1) n = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[s] = {
                        n: e[s].n,
                        p: n
                    };
                    this.k || this.getValue(!0), this._isAnimated = this.k
                }

                function SVGStrokeStyleData(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
                }

                function SVGFillStyleData(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i
                }

                function SVGNoStyleData(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i
                }

                function GradientProperty(t, e, i) {
                    this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                    var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                    this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                }

                function SVGGradientFillStyleData(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
                }

                function SVGGradientStrokeStyleData(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
                }

                function ShapeGroupData() {
                    this.it = [], this.prevViewData = [], this.gr = createNS("g")
                }

                function SVGTransformData(t, e, i) {
                    this.transform = {
                        mProps: t,
                        op: e,
                        container: i
                    }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                }
                SVGShapeData.prototype.setAsAnimated = function() {
                    this._isAnimated = !0
                }, SVGStyleData.prototype.reset = function() {
                    this.d = "", this._mdf = !1
                }, DashProperty.prototype.getValue = function(t) {
                    if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                        var e = 0,
                            i = this.dataProps.length;
                        for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                    }
                }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
                    var i, r = 0,
                        s = this.o.length / 2;
                    while (r < s) {
                        if (i = Math.abs(t[4 * r] - t[4 * e + 2 * r]), i > .01) return !1;
                        r += 1
                    }
                    return !0
                }, GradientProperty.prototype.checkCollapsable = function() {
                    if (this.o.length / 2 !== this.c.length / 4) return !1;
                    if (this.data.k.k[0].s) {
                        var t = 0,
                            e = this.data.k.k.length;
                        while (t < e) {
                            if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                            t += 1
                        }
                    } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                    return !0
                }, GradientProperty.prototype.getValue = function(t) {
                    if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                        var e, i, r, s = 4 * this.data.p;
                        for (e = 0; e < s; e += 1) i = e % 4 === 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
                        if (this.o.length)
                            for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1) i = e % 2 === 0 ? 100 : 1, r = e % 2 === 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
                        this._mdf = !t
                    }
                }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
                    this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                        k: 0
                    }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                        k: 0
                    }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
                }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                    var i = createElementID(),
                        r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                    r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
                    var s, n, a, o = [];
                    for (a = 4 * e.g.p, n = 0; n < a; n += 4) s = createNS("stop"), r.appendChild(s), o.push(s);
                    t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"), this.gf = r, this.cst = o
                }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                    if (this.g._hasOpacity && !this.g._collapsable) {
                        var i, r, s, n = createNS("mask"),
                            a = createNS("path");
                        n.appendChild(a);
                        var o = createElementID(),
                            h = createElementID();
                        n.setAttribute("id", h);
                        var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                        l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                        var p = this.stops;
                        for (r = 4 * t.g.p; r < s; r += 2) i = createNS("stop"), i.setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(i), p.push(i);
                        a.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = n, this.ost = p, this.maskId = h, e.msElem = a
                    }
                }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
                var buildShapeString = function(t, e, i, r) {
                        if (0 === e) return "";
                        var s, n = t.o,
                            a = t.i,
                            o = t.v,
                            h = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
                        for (s = 1; s < e; s += 1) h += " C" + r.applyToPointStringified(n[s - 1][0], n[s - 1][1]) + " " + r.applyToPointStringified(a[s][0], a[s][1]) + " " + r.applyToPointStringified(o[s][0], o[s][1]);
                        return i && e && (h += " C" + r.applyToPointStringified(n[s - 1][0], n[s - 1][1]) + " " + r.applyToPointStringified(a[0][0], a[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
                    },
                    SVGElementsRenderer = function() {
                        var t = new Matrix,
                            e = new Matrix,
                            i = {
                                createRenderFunction: r
                            };

                        function r(t) {
                            switch (t.ty) {
                                case "fl":
                                    return o;
                                case "gf":
                                    return l;
                                case "gs":
                                    return h;
                                case "st":
                                    return p;
                                case "sh":
                                case "el":
                                case "rc":
                                case "sr":
                                    return a;
                                case "tr":
                                    return s;
                                case "no":
                                    return n;
                                default:
                                    return null
                            }
                        }

                        function s(t, e, i) {
                            (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                        }

                        function n() {}

                        function a(i, r, s) {
                            var n, a, o, h, l, p, f, c, u, m, d = r.styles.length,
                                y = r.lvl;
                            for (p = 0; p < d; p += 1) {
                                if (h = r.sh._mdf || s, r.styles[p].lvl < y) {
                                    c = e.reset(), u = y - r.styles[p].lvl, m = r.transformers.length - 1;
                                    while (!h && u > 0) h = r.transformers[m].mProps._mdf || h, u -= 1, m -= 1;
                                    if (h) {
                                        u = y - r.styles[p].lvl, m = r.transformers.length - 1;
                                        while (u > 0) c.multiply(r.transformers[m].mProps.v), u -= 1, m -= 1
                                    }
                                } else c = t;
                                if (f = r.sh.paths, a = f._length, h) {
                                    for (o = "", n = 0; n < a; n += 1) l = f.shapes[n], l && l._length && (o += buildShapeString(l, l._length, l.c, c));
                                    r.caches[p] = o
                                } else o = r.caches[p];
                                r.styles[p].d += !0 === i.hd ? "" : o, r.styles[p]._mdf = h || r.styles[p]._mdf
                            }
                        }

                        function o(t, e, i) {
                            var r = e.style;
                            (e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v)
                        }

                        function h(t, e, i) {
                            l(t, e, i), p(t, e, i)
                        }

                        function l(t, e, i) {
                            var r, s, n, a, o, h = e.gf,
                                l = e.g._hasOpacity,
                                p = e.s.v,
                                f = e.e.v;
                            if (e.o._mdf || i) {
                                var c = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                                e.style.pElem.setAttribute(c, e.o.v)
                            }
                            if (e.s._mdf || i) {
                                var u = 1 === t.t ? "x1" : "cx",
                                    m = "x1" === u ? "y1" : "cy";
                                h.setAttribute(u, p[0]), h.setAttribute(m, p[1]), l && !e.g._collapsable && (e.of.setAttribute(u, p[0]), e.of.setAttribute(m, p[1]))
                            }
                            if (e.g._cmdf || i) {
                                r = e.cst;
                                var d = e.g.c;
                                for (n = r.length, s = 0; s < n; s += 1) a = r[s], a.setAttribute("offset", d[4 * s] + "%"), a.setAttribute("stop-color", "rgb(" + d[4 * s + 1] + "," + d[4 * s + 2] + "," + d[4 * s + 3] + ")")
                            }
                            if (l && (e.g._omdf || i)) {
                                var y = e.g.o;
                                for (r = e.g._collapsable ? e.cst : e.ost, n = r.length, s = 0; s < n; s += 1) a = r[s], e.g._collapsable || a.setAttribute("offset", y[2 * s] + "%"), a.setAttribute("stop-opacity", y[2 * s + 1])
                            }
                            if (1 === t.t)(e.e._mdf || i) && (h.setAttribute("x2", f[0]), h.setAttribute("y2", f[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", f[0]), e.of.setAttribute("y2", f[1])));
                            else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                                o || (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
                                var g = Math.atan2(f[1] - p[1], f[0] - p[0]),
                                    v = e.h.v;
                                v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                                var b = o * v,
                                    E = Math.cos(g + e.a.v) * b + p[0],
                                    S = Math.sin(g + e.a.v) * b + p[1];
                                h.setAttribute("fx", E), h.setAttribute("fy", S), l && !e.g._collapsable && (e.of.setAttribute("fx", E), e.of.setAttribute("fy", S))
                            }
                        }

                        function p(t, e, i) {
                            var r = e.style,
                                s = e.d;
                            s && (s._mdf || i) && s.dashStr && (r.pElem.setAttribute("stroke-dasharray", s.dashStr), r.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])), e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v))
                        }
                        return i
                    }();

                function SVGShapeElement(t, e, i) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
                }

                function LetterProps(t, e, i, r, s, n) {
                    this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = s, this.p = n, this._mdf = {
                        o: !0,
                        sw: !!e,
                        sc: !!i,
                        fc: !!r,
                        m: !0,
                        p: !0
                    }
                }

                function TextProperty(t, e) {
                    this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                        ascent: 0,
                        boxWidth: this.defaultBoxWidth,
                        f: "",
                        fStyle: "",
                        fWeight: "",
                        fc: "",
                        j: "",
                        justifyOffset: "",
                        l: [],
                        lh: 0,
                        lineWidths: [],
                        ls: "",
                        of: "",
                        s: "",
                        sc: "",
                        sw: 0,
                        t: 0,
                        tr: 0,
                        sz: 0,
                        ps: null,
                        fillColorAnim: !1,
                        strokeColorAnim: !1,
                        strokeWidthAnim: !1,
                        yOffset: 0,
                        finalSize: 0,
                        finalText: [],
                        finalLineHeight: 0,
                        __complete: !1
                    }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                }
                extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                    var t, e, i, r, s = this.shapes.length,
                        n = this.stylesList.length,
                        a = [],
                        o = !1;
                    for (i = 0; i < n; i += 1) {
                        for (r = this.stylesList[i], o = !1, a.length = 0, t = 0; t < s; t += 1) e = this.shapes[t], -1 !== e.styles.indexOf(r) && (a.push(e), o = e._isAnimated || o);
                        a.length > 1 && o && this.setShapesAsAnimated(a)
                    }
                }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1) t[e].setAsAnimated()
                }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                    var i, r = new SVGStyleData(t, e),
                        s = r.pElem;
                    if ("st" === t.ty) i = new SVGStrokeStyleData(this, t, r);
                    else if ("fl" === t.ty) i = new SVGFillStyleData(this, t, r);
                    else if ("gf" === t.ty || "gs" === t.ty) {
                        var n = "gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
                        i = new n(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")"))
                    } else "no" === t.ty && (i = new SVGNoStyleData(this, t, r));
                    return "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i
                }, SVGShapeElement.prototype.createGroupElement = function(t) {
                    var e = new ShapeGroupData;
                    return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
                }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                    var i = TransformPropertyFactory.getTransformProperty(this, t, this),
                        r = new SVGTransformData(i, i.o, e);
                    return this.addToAnimatedContents(t, r), r
                }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
                    var r = 4;
                    "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
                    var s = ShapePropertyFactory.getShapeProp(this, t, r, this),
                        n = new SVGShapeData(e, i, s);
                    return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(t, n), n
                }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                    var i = 0,
                        r = this.animatedContents.length;
                    while (i < r) {
                        if (this.animatedContents[i].element === e) return;
                        i += 1
                    }
                    this.animatedContents.push({
                        fn: SVGElementsRenderer.createRenderFunction(t),
                        element: e,
                        data: t
                    })
                }, SVGShapeElement.prototype.setElementStyles = function(t) {
                    var e, i = t.styles,
                        r = this.stylesList.length;
                    for (e = 0; e < r; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
                }, SVGShapeElement.prototype.reloadShapes = function() {
                    var t;
                    this._isFirstFrame = !0;
                    var e = this.itemsData.length;
                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                    this.renderModifiers()
                }, SVGShapeElement.prototype.searchShapes = function(t, e, i, r, s, n, a) {
                    var o, h, l, p, f, c, u = [].concat(n),
                        m = t.length - 1,
                        d = [],
                        y = [];
                    for (o = m; o >= 0; o -= 1) {
                        if (c = this.searchProcessedElement(t[o]), c ? e[o] = i[c - 1] : t[o]._render = a, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) c ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== r && r.appendChild(e[o].style.pElem), d.push(e[o].style);
                        else if ("gr" === t[o].ty) {
                            if (c)
                                for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                            else e[o] = this.createGroupElement(t[o]);
                            this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, u, a), t[o]._render && e[o].gr.parentNode !== r && r.appendChild(e[o].gr)
                        } else "tr" === t[o].ty ? (c || (e[o] = this.createTransformElement(t[o], r)), p = e[o].transform, u.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (c || (e[o] = this.createShapeElement(t[o], u, s)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (c ? (f = e[o], f.closed = !1) : (f = ShapeModifiers.getModifier(t[o].ty), f.init(this, t[o]), e[o] = f, this.shapeModifiers.push(f)), y.push(f)) : "rp" === t[o].ty && (c ? (f = e[o], f.closed = !0) : (f = ShapeModifiers.getModifier(t[o].ty), e[o] = f, f.init(this, t, o, e), this.shapeModifiers.push(f), a = !1), y.push(f));
                        this.addProcessedElement(t[o], o + 1)
                    }
                    for (m = d.length, o = 0; o < m; o += 1) d[o].closed = !0;
                    for (m = y.length, o = 0; o < m; o += 1) y[o].closed = !0
                }, SVGShapeElement.prototype.renderInnerContent = function() {
                    var t;
                    this.renderModifiers();
                    var e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                    for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                }, SVGShapeElement.prototype.renderShape = function() {
                    var t, e, i = this.animatedContents.length;
                    for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
                }, SVGShapeElement.prototype.destroy = function() {
                    this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                }, LetterProps.prototype.update = function(t, e, i, r, s, n) {
                    this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                    var a = !1;
                    return this.o !== t && (this.o = t, this._mdf.o = !0, a = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, a = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, a = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, a = !0), this.m !== s && (this.m = s, this._mdf.m = !0, a = !0), !n.length || this.p[0] === n[0] && this.p[1] === n[1] && this.p[4] === n[4] && this.p[5] === n[5] && this.p[12] === n[12] && this.p[13] === n[13] || (this.p = n, this._mdf.p = !0, a = !0), a
                }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, TextProperty.prototype.setCurrentData = function(t) {
                    t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                }, TextProperty.prototype.searchProperty = function() {
                    return this.searchKeyframes()
                }, TextProperty.prototype.searchKeyframes = function() {
                    return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                }, TextProperty.prototype.addEffect = function(t) {
                    this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.getValue = function(t) {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                        var e = this.currentData,
                            i = this.keysIndex;
                        if (this.lock) this.setCurrentData(this.currentData);
                        else {
                            var r;
                            this.lock = !0, this._mdf = !1;
                            var s = this.effectsSequence.length,
                                n = t || this.data.d.k[this.keysIndex].s;
                            for (r = 0; r < s; r += 1) n = i !== this.keysIndex ? this.effectsSequence[r](n, n.t) : this.effectsSequence[r](this.currentData, n.t);
                            e !== n && this.setCurrentData(n), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    }
                }, TextProperty.prototype.getKeyframeValue = function() {
                    var t = this.data.d.k,
                        e = this.elem.comp.renderedFrame,
                        i = 0,
                        r = t.length;
                    while (i <= r - 1) {
                        if (i === r - 1 || t[i + 1].t > e) break;
                        i += 1
                    }
                    return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
                }, TextProperty.prototype.buildFinalText = function(t) {
                    var e, i, r = [],
                        s = 0,
                        n = t.length,
                        a = !1,
                        o = !1,
                        h = "";
                    while (s < n) a = o, o = !1, e = t.charCodeAt(s), h = t.charAt(s), FontManager.isCombinedCharacter(e) ? a = !0 : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, s) ? h = t.substr(s, 14) : (i = t.charCodeAt(s + 1), i >= 56320 && i <= 57343 && (FontManager.isModifier(e, i) ? (h = t.substr(s, 2), a = !0) : h = FontManager.isFlagEmoji(t.substr(s, 4)) ? t.substr(s, 4) : t.substr(s, 2))) : e > 56319 ? (i = t.charCodeAt(s + 1), FontManager.isVariationSelector(e) && (a = !0)) : FontManager.isZeroWidthJoiner(e) && (a = !0, o = !0), a ? (r[r.length - 1] += h, a = !1) : r.push(h), s += h.length;
                    return r
                }, TextProperty.prototype.completeTextData = function(t) {
                    t.__complete = !0;
                    var e, i, r, s, n, a, o, h = this.elem.globalData.fontManager,
                        l = this.data,
                        p = [],
                        f = 0,
                        c = l.m.g,
                        u = 0,
                        m = 0,
                        d = 0,
                        y = [],
                        g = 0,
                        v = 0,
                        b = h.getFontByName(t.f),
                        E = 0,
                        S = getFontProperties(b);
                    t.fWeight = S.weight, t.fStyle = S.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
                    var x, P = t.tr / 1e3 * t.finalSize;
                    if (t.sz) {
                        var T, C, A = !0,
                            w = t.sz[0],
                            _ = t.sz[1];
                        while (A) {
                            C = this.buildFinalText(t.t), T = 0, g = 0, i = C.length, P = t.tr / 1e3 * t.finalSize;
                            var D = -1;
                            for (e = 0; e < i; e += 1) x = C[e].charCodeAt(0), r = !1, " " === C[e] ? D = e : 13 !== x && 3 !== x || (g = 0, r = !0, T += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(C[e], b.fStyle, b.fFamily), E = r ? 0 : o.w * t.finalSize / 100) : E = h.measureText(C[e], t.f, t.finalSize), g + E > w && " " !== C[e] ? (-1 === D ? i += 1 : e = D, T += t.finalLineHeight || 1.2 * t.finalSize, C.splice(e, D === e ? 1 : 0, "\r"), D = -1, g = 0) : (g += E, g += P);
                            T += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && _ < T ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = C, i = t.finalText.length, A = !1)
                        }
                    }
                    g = -P, E = 0;
                    var M, k = 0;
                    for (e = 0; e < i; e += 1)
                        if (r = !1, M = t.finalText[e], x = M.charCodeAt(0), 13 === x || 3 === x ? (k = 0, y.push(g), v = g > v ? g : v, g = -2 * P, s = "", r = !0, d += 1) : s = M, h.chars ? (o = h.getCharData(M, b.fStyle, h.getFontByName(t.f).fFamily), E = r ? 0 : o.w * t.finalSize / 100) : E = h.measureText(s, t.f, t.finalSize), " " === M ? k += E + P : (g += E + P + k, k = 0), p.push({
                                l: E,
                                an: E,
                                add: u,
                                n: r,
                                anIndexes: [],
                                val: s,
                                line: d,
                                animatorJustifyOffset: 0
                            }), 2 == c) {
                            if (u += E, "" === s || " " === s || e === i - 1) {
                                "" !== s && " " !== s || (u -= E);
                                while (m <= e) p[m].an = u, p[m].ind = f, p[m].extra = E, m += 1;
                                f += 1, u = 0
                            }
                        } else if (3 == c) {
                        if (u += E, "" === s || e === i - 1) {
                            "" === s && (u -= E);
                            while (m <= e) p[m].an = u, p[m].ind = f, p[m].extra = E, m += 1;
                            u = 0, f += 1
                        }
                    } else p[f].ind = f, p[f].extra = 0, f += 1;
                    if (t.l = p, v = g > v ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                    else switch (t.boxWidth = v, t.j) {
                        case 1:
                            t.justifyOffset = -t.boxWidth;
                            break;
                        case 2:
                            t.justifyOffset = -t.boxWidth / 2;
                            break;
                        default:
                            t.justifyOffset = 0
                    }
                    t.lineWidths = y;
                    var F, I, R, B, V = l.a;
                    a = V.length;
                    var L = [];
                    for (n = 0; n < a; n += 1) {
                        for (F = V[n], F.a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), B = 0, R = F.s.b, e = 0; e < i; e += 1) I = p[e], I.anIndexes[n] = B, (1 == R && "" !== I.val || 2 == R && "" !== I.val && " " !== I.val || 3 == R && (I.n || " " == I.val || e == i - 1) || 4 == R && (I.n || e == i - 1)) && (1 === F.s.rn && L.push(B), B += 1);
                        l.a[n].s.totalChars = B;
                        var O, N = -1;
                        if (1 === F.s.rn)
                            for (e = 0; e < i; e += 1) I = p[e], N != I.anIndexes[n] && (N = I.anIndexes[n], O = L.splice(Math.floor(Math.random() * L.length), 1)[0]), I.anIndexes[n] = O
                    }
                    t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
                }, TextProperty.prototype.updateDocumentData = function(t, e) {
                    e = void 0 === e ? this.keysIndex : e;
                    var i = this.copyData({}, this.data.d.k[e].s);
                    i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.recalculate = function(t) {
                    var e = this.data.d.k[t].s;
                    e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                }, TextProperty.prototype.canResizeFont = function(t) {
                    this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.setMinimumFontSize = function(t) {
                    this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                };
                var TextSelectorProp = function() {
                    var t = Math.max,
                        e = Math.min,
                        i = Math.floor;

                    function r(t, e) {
                        this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                            k: 0
                        }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                            v: 100
                        }, this.o = PropertyFactory.getProp(t, e.o || {
                            k: 0
                        }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                            k: 0
                        }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                            k: 0
                        }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
                            k: 100
                        }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                    }

                    function s(t, e, i) {
                        return new r(t, e, i)
                    }
                    return r.prototype = {
                        getMult: function(r) {
                            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                            var s = 0,
                                n = 0,
                                a = 1,
                                o = 1;
                            this.ne.v > 0 ? s = this.ne.v / 100 : n = -this.ne.v / 100, this.xe.v > 0 ? a = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                            var h = BezierFactory.getBezierEasing(s, n, a, o).get,
                                l = 0,
                                p = this.finalS,
                                f = this.finalE,
                                c = this.data.sh;
                            if (2 === c) l = f === p ? r >= f ? 1 : 0 : t(0, e(.5 / (f - p) + (r - p) / (f - p), 1)), l = h(l);
                            else if (3 === c) l = f === p ? r >= f ? 0 : 1 : 1 - t(0, e(.5 / (f - p) + (r - p) / (f - p), 1)), l = h(l);
                            else if (4 === c) f === p ? l = 0 : (l = t(0, e(.5 / (f - p) + (r - p) / (f - p), 1)), l < .5 ? l *= 2 : l = 1 - 2 * (l - .5)), l = h(l);
                            else if (5 === c) {
                                if (f === p) l = 0;
                                else {
                                    var u = f - p;
                                    r = e(t(0, r + .5 - p), f - p);
                                    var m = -u / 2 + r,
                                        d = u / 2;
                                    l = Math.sqrt(1 - m * m / (d * d))
                                }
                                l = h(l)
                            } else 6 === c ? (f === p ? l = 0 : (r = e(t(0, r + .5 - p), f - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (f - p))) / 2), l = h(l)) : (r >= i(p) && (l = t(0, e(r - p < 0 ? e(f, 1) - (p - r) : f - r, 1))), l = h(l));
                            if (100 !== this.sm.v) {
                                var y = .01 * this.sm.v;
                                0 === y && (y = 1e-8);
                                var g = .5 - .5 * y;
                                l < g ? l = 0 : (l = (l - g) / y, l > 1 && (l = 1))
                            }
                            return l * this.a.v
                        },
                        getValue: function(t) {
                            this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                            var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                i = this.o.v / e,
                                r = this.s.v / e + i,
                                s = this.e.v / e + i;
                            if (r > s) {
                                var n = r;
                                r = s, s = n
                            }
                            this.finalS = r, this.finalE = s
                        }
                    }, extendPrototype([DynamicPropertyContainer], r), {
                        getTextSelectorProp: s
                    }
                }();

                function TextAnimatorDataProperty(t, e, i) {
                    var r = {
                            propType: !1
                        },
                        s = PropertyFactory.getProp,
                        n = e.a;
                    this.a = {
                        r: n.r ? s(t, n.r, 0, degToRads, i) : r,
                        rx: n.rx ? s(t, n.rx, 0, degToRads, i) : r,
                        ry: n.ry ? s(t, n.ry, 0, degToRads, i) : r,
                        sk: n.sk ? s(t, n.sk, 0, degToRads, i) : r,
                        sa: n.sa ? s(t, n.sa, 0, degToRads, i) : r,
                        s: n.s ? s(t, n.s, 1, .01, i) : r,
                        a: n.a ? s(t, n.a, 1, 0, i) : r,
                        o: n.o ? s(t, n.o, 0, .01, i) : r,
                        p: n.p ? s(t, n.p, 1, 0, i) : r,
                        sw: n.sw ? s(t, n.sw, 0, 0, i) : r,
                        sc: n.sc ? s(t, n.sc, 1, 0, i) : r,
                        fc: n.fc ? s(t, n.fc, 1, 0, i) : r,
                        fh: n.fh ? s(t, n.fh, 0, 0, i) : r,
                        fs: n.fs ? s(t, n.fs, 0, .01, i) : r,
                        fb: n.fb ? s(t, n.fb, 0, .01, i) : r,
                        t: n.t ? s(t, n.t, 0, 0, i) : r
                    }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
                }

                function TextAnimatorProperty(t, e, i) {
                    this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                        alignment: {}
                    }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
                }

                function ITextElement() {}
                TextAnimatorProperty.prototype.searchProperties = function() {
                    var t, e, i = this._textData.a.length,
                        r = PropertyFactory.getProp;
                    for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
                    this._textData.p && "m" in this._textData.p ? (this._pathData = {
                        a: r(this._elem, this._textData.p.a, 0, 0, this),
                        f: r(this._elem, this._textData.p.f, 0, 0, this),
                        l: r(this._elem, this._textData.p.l, 0, 0, this),
                        r: r(this._elem, this._textData.p.r, 0, 0, this),
                        p: r(this._elem, this._textData.p.p, 0, 0, this),
                        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                    }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
                }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                    if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                        this._isFirstFrame = !1;
                        var i, r, s, n, a, o, h, l, p, f, c, u, m, d, y, g, v, b, E, S = this._moreOptions.alignment.v,
                            x = this._animatorsData,
                            P = this._textData,
                            T = this.mHelper,
                            C = this._renderType,
                            A = this.renderedLetters.length,
                            w = t.l;
                        if (this._hasMaskedPath) {
                            if (E = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                var _, D = E.v;
                                for (this._pathData.r.v && (D = D.reverse()), a = {
                                        tLength: 0,
                                        segments: []
                                    }, n = D._length - 1, g = 0, s = 0; s < n; s += 1) _ = bez.buildBezierData(D.v[s], D.v[s + 1], [D.o[s][0] - D.v[s][0], D.o[s][1] - D.v[s][1]], [D.i[s + 1][0] - D.v[s + 1][0], D.i[s + 1][1] - D.v[s + 1][1]]), a.tLength += _.segmentLength, a.segments.push(_), g += _.segmentLength;
                                s = n, E.v.c && (_ = bez.buildBezierData(D.v[s], D.v[0], [D.o[s][0] - D.v[s][0], D.o[s][1] - D.v[s][1]], [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]), a.tLength += _.segmentLength, a.segments.push(_), g += _.segmentLength), this._pathData.pi = a
                            }
                            if (a = this._pathData.pi, o = this._pathData.f.v, c = 0, f = 1, l = 0, p = !0, d = a.segments, o < 0 && E.v.c) {
                                a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength), c = d.length - 1, m = d[c].points, f = m.length - 1;
                                while (o < 0) o += m[f].partialLength, f -= 1, f < 0 && (c -= 1, m = d[c].points, f = m.length - 1)
                            }
                            m = d[c].points, u = m[f - 1], h = m[f], y = h.partialLength
                        }
                        n = w.length, i = 0, r = 0;
                        var M, k, F, I, R, B, V = 1.2 * t.finalSize * .714,
                            L = !0;
                        I = x.length;
                        var O, N, z, H, G, j, q, W, $, X, U, K, Y = -1,
                            J = o,
                            Z = c,
                            Q = f,
                            tt = -1,
                            et = "",
                            it = this.defaultPropsArray;
                        if (2 === t.j || 1 === t.j) {
                            var rt = 0,
                                st = 0,
                                nt = 2 === t.j ? -.5 : -1,
                                at = 0,
                                ot = !0;
                            for (s = 0; s < n; s += 1)
                                if (w[s].n) {
                                    rt && (rt += st);
                                    while (at < s) w[at].animatorJustifyOffset = rt, at += 1;
                                    rt = 0, ot = !0
                                } else {
                                    for (F = 0; F < I; F += 1) M = x[F].a, M.t.propType && (ot && 2 === t.j && (st += M.t.v * nt), k = x[F].s, B = k.getMult(w[s].anIndexes[F], P.a[F].s.totalChars), B.length ? rt += M.t.v * B[0] * nt : rt += M.t.v * B * nt);
                                    ot = !1
                                }
                            rt && (rt += st);
                            while (at < s) w[at].animatorJustifyOffset = rt, at += 1
                        }
                        for (s = 0; s < n; s += 1) {
                            if (T.reset(), H = 1, w[s].n) i = 0, r += t.yOffset, r += L ? 1 : 0, o = J, L = !1, this._hasMaskedPath && (c = Z, f = Q, m = d[c].points, u = m[f - 1], h = m[f], y = h.partialLength, l = 0), et = "", U = "", $ = "", K = "", it = this.defaultPropsArray;
                            else {
                                if (this._hasMaskedPath) {
                                    if (tt !== w[s].line) {
                                        switch (t.j) {
                                            case 1:
                                                o += g - t.lineWidths[w[s].line];
                                                break;
                                            case 2:
                                                o += (g - t.lineWidths[w[s].line]) / 2;
                                                break;
                                            default:
                                                break
                                        }
                                        tt = w[s].line
                                    }
                                    Y !== w[s].ind && (w[Y] && (o += w[Y].extra), o += w[s].an / 2, Y = w[s].ind), o += S[0] * w[s].an * .005;
                                    var ht = 0;
                                    for (F = 0; F < I; F += 1) M = x[F].a, M.p.propType && (k = x[F].s, B = k.getMult(w[s].anIndexes[F], P.a[F].s.totalChars), B.length ? ht += M.p.v[0] * B[0] : ht += M.p.v[0] * B), M.a.propType && (k = x[F].s, B = k.getMult(w[s].anIndexes[F], P.a[F].s.totalChars), B.length ? ht += M.a.v[0] * B[0] : ht += M.a.v[0] * B);
                                    p = !0, this._pathData.a.v && (o = .5 * w[0].an + (g - this._pathData.f.v - .5 * w[0].an - .5 * w[w.length - 1].an) * Y / (n - 1), o += this._pathData.f.v);
                                    while (p) l + y >= o + ht || !m ? (v = (o + ht - l) / h.partialLength, N = u.point[0] + (h.point[0] - u.point[0]) * v, z = u.point[1] + (h.point[1] - u.point[1]) * v, T.translate(-S[0] * w[s].an * .005, -S[1] * V * .01), p = !1) : m && (l += h.partialLength, f += 1, f >= m.length && (f = 0, c += 1, d[c] ? m = d[c].points : E.v.c ? (f = 0, c = 0, m = d[c].points) : (l -= h.partialLength, m = null)), m && (u = h, h = m[f], y = h.partialLength));
                                    O = w[s].an / 2 - w[s].add, T.translate(-O, 0, 0)
                                } else O = w[s].an / 2 - w[s].add, T.translate(-O, 0, 0), T.translate(-S[0] * w[s].an * .005, -S[1] * V * .01, 0);
                                for (F = 0; F < I; F += 1) M = x[F].a, M.t.propType && (k = x[F].s, B = k.getMult(w[s].anIndexes[F], P.a[F].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? B.length ? o += M.t.v * B[0] : o += M.t.v * B : B.length ? i += M.t.v * B[0] : i += M.t.v * B));
                                for (t.strokeWidthAnim && (j = t.sw || 0), t.strokeColorAnim && (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (q = [t.fc[0], t.fc[1], t.fc[2]]), F = 0; F < I; F += 1) M = x[F].a, M.a.propType && (k = x[F].s, B = k.getMult(w[s].anIndexes[F], P.a[F].s.totalChars), B.length ? T.translate(-M.a.v[0] * B[0], -M.a.v[1] * B[1], M.a.v[2] * B[2]) : T.translate(-M.a.v[0] * B, -M.a.v[1] * B, M.a.v[2] * B));
                                for (F = 0; F < I; F += 1) M = x[F].a, M.s.propType && (k = x[F].s, B = k.getMult(w[s].anIndexes[F], P.a[F].s.totalChars), B.length ? T.scale(1 + (M.s.v[0] - 1) * B[0], 1 + (M.s.v[1] - 1) * B[1], 1) : T.scale(1 + (M.s.v[0] - 1) * B, 1 + (M.s.v[1] - 1) * B, 1));
                                for (F = 0; F < I; F += 1) {
                                    if (M = x[F].a, k = x[F].s, B = k.getMult(w[s].anIndexes[F], P.a[F].s.totalChars), M.sk.propType && (B.length ? T.skewFromAxis(-M.sk.v * B[0], M.sa.v * B[1]) : T.skewFromAxis(-M.sk.v * B, M.sa.v * B)), M.r.propType && (B.length ? T.rotateZ(-M.r.v * B[2]) : T.rotateZ(-M.r.v * B)), M.ry.propType && (B.length ? T.rotateY(M.ry.v * B[1]) : T.rotateY(M.ry.v * B)), M.rx.propType && (B.length ? T.rotateX(M.rx.v * B[0]) : T.rotateX(M.rx.v * B)), M.o.propType && (B.length ? H += (M.o.v * B[0] - H) * B[0] : H += (M.o.v * B - H) * B), t.strokeWidthAnim && M.sw.propType && (B.length ? j += M.sw.v * B[0] : j += M.sw.v * B), t.strokeColorAnim && M.sc.propType)
                                        for (W = 0; W < 3; W += 1) B.length ? G[W] += (M.sc.v[W] - G[W]) * B[0] : G[W] += (M.sc.v[W] - G[W]) * B;
                                    if (t.fillColorAnim && t.fc) {
                                        if (M.fc.propType)
                                            for (W = 0; W < 3; W += 1) B.length ? q[W] += (M.fc.v[W] - q[W]) * B[0] : q[W] += (M.fc.v[W] - q[W]) * B;
                                        M.fh.propType && (q = B.length ? addHueToRGB(q, M.fh.v * B[0]) : addHueToRGB(q, M.fh.v * B)), M.fs.propType && (q = B.length ? addSaturationToRGB(q, M.fs.v * B[0]) : addSaturationToRGB(q, M.fs.v * B)), M.fb.propType && (q = B.length ? addBrightnessToRGB(q, M.fb.v * B[0]) : addBrightnessToRGB(q, M.fb.v * B))
                                    }
                                }
                                for (F = 0; F < I; F += 1) M = x[F].a, M.p.propType && (k = x[F].s, B = k.getMult(w[s].anIndexes[F], P.a[F].s.totalChars), this._hasMaskedPath ? B.length ? T.translate(0, M.p.v[1] * B[0], -M.p.v[2] * B[1]) : T.translate(0, M.p.v[1] * B, -M.p.v[2] * B) : B.length ? T.translate(M.p.v[0] * B[0], M.p.v[1] * B[1], -M.p.v[2] * B[2]) : T.translate(M.p.v[0] * B, M.p.v[1] * B, -M.p.v[2] * B));
                                if (t.strokeWidthAnim && ($ = j < 0 ? 0 : j), t.strokeColorAnim && (X = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), t.fillColorAnim && t.fc && (U = "rgb(" + Math.round(255 * q[0]) + "," + Math.round(255 * q[1]) + "," + Math.round(255 * q[2]) + ")"), this._hasMaskedPath) {
                                    if (T.translate(0, -t.ls), T.translate(0, S[1] * V * .01 + r, 0), this._pathData.p.v) {
                                        b = (h.point[1] - u.point[1]) / (h.point[0] - u.point[0]);
                                        var lt = 180 * Math.atan(b) / Math.PI;
                                        h.point[0] < u.point[0] && (lt += 180), T.rotate(-lt * Math.PI / 180)
                                    }
                                    T.translate(N, z, 0), o -= S[0] * w[s].an * .005, w[s + 1] && Y !== w[s + 1].ind && (o += w[s].an / 2, o += .001 * t.tr * t.finalSize)
                                } else {
                                    switch (T.translate(i, r, 0), t.ps && T.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                        case 1:
                                            T.translate(w[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[w[s].line]), 0, 0);
                                            break;
                                        case 2:
                                            T.translate(w[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[w[s].line]) / 2, 0, 0);
                                            break;
                                        default:
                                            break
                                    }
                                    T.translate(0, -t.ls), T.translate(O, 0, 0), T.translate(S[0] * w[s].an * .005, S[1] * V * .01, 0), i += w[s].l + .001 * t.tr * t.finalSize
                                }
                                "html" === C ? et = T.toCSS() : "svg" === C ? et = T.to2dCSS() : it = [T.props[0], T.props[1], T.props[2], T.props[3], T.props[4], T.props[5], T.props[6], T.props[7], T.props[8], T.props[9], T.props[10], T.props[11], T.props[12], T.props[13], T.props[14], T.props[15]], K = H
                            }
                            A <= s ? (R = new LetterProps(K, $, X, U, et, it), this.renderedLetters.push(R), A += 1, this.lettersChangedFlag = !0) : (R = this.renderedLetters[s], this.lettersChangedFlag = R.update(K, $, X, U, et, it) || this.lettersChangedFlag)
                        }
                    }
                }, TextAnimatorProperty.prototype.getValue = function() {
                    this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, i) {
                    this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                }, ITextElement.prototype.prepareFrame = function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                }, ITextElement.prototype.createPathShape = function(t, e) {
                    var i, r, s = e.length,
                        n = "";
                    for (i = 0; i < s; i += 1) "sh" === e[i].ty && (r = e[i].ks.k, n += buildShapeString(r, r.i.length, !0, t));
                    return n
                }, ITextElement.prototype.updateDocumentData = function(t, e) {
                    this.textProperty.updateDocumentData(t, e)
                }, ITextElement.prototype.canResizeFont = function(t) {
                    this.textProperty.canResizeFont(t)
                }, ITextElement.prototype.setMinimumFontSize = function(t) {
                    this.textProperty.setMinimumFontSize(t)
                }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, s) {
                    switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                        case 1:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                            break;
                        case 2:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
                            break;
                        default:
                            break
                    }
                    e.translate(r, s, 0)
                }, ITextElement.prototype.buildColor = function(t) {
                    return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
                    (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                };
                var emptyShapeData = {
                    shapes: []
                };

                function SVGTextLottieElement(t, e, i) {
                    this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
                }

                function ISolidElement(t, e, i) {
                    this.initElement(t, e, i)
                }

                function NullElement(t, e, i) {
                    this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
                }

                function SVGRendererBase() {}

                function ICompElement() {}

                function SVGCompElement(t, e, i) {
                    this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function SVGRenderer(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                    var i = "";
                    if (e && e.title) {
                        var r = createNS("title"),
                            s = createElementID();
                        r.setAttribute("id", s), r.textContent = e.title, this.svgElement.appendChild(r), i += s
                    }
                    if (e && e.description) {
                        var n = createNS("desc"),
                            a = createElementID();
                        n.setAttribute("id", a), n.textContent = e.description, this.svgElement.appendChild(n), i += " " + a
                    }
                    i && this.svgElement.setAttribute("aria-labelledby", i);
                    var o = createNS("defs");
                    this.svgElement.appendChild(o);
                    var h = createNS("g");
                    this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: e && e.contentVisibility || "visible",
                        progressiveLoad: e && e.progressiveLoad || !1,
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        viewBoxOnly: e && e.viewBoxOnly || !1,
                        viewBoxSize: e && e.viewBoxSize || !1,
                        className: e && e.className || "",
                        id: e && e.id || "",
                        focusable: e && e.focusable,
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "100%",
                            height: e && e.filterSize && e.filterSize.height || "100%",
                            x: e && e.filterSize && e.filterSize.x || "0%",
                            y: e && e.filterSize && e.filterSize.y || "0%"
                        },
                        width: e && e.width,
                        height: e && e.height,
                        runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        defs: o,
                        renderConfig: this.renderConfig
                    }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                }

                function ShapeTransformManager() {
                    this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                }
                extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                    this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
                }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
                    var e = 0,
                        i = t.length,
                        r = [],
                        s = "";
                    while (e < i) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(s), s = "") : s += t[e], e += 1;
                    return r.push(s), r
                }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
                    if (t.shapes && t.shapes.length) {
                        var i = t.shapes[0];
                        if (i.it) {
                            var r = i.it[i.it.length - 1];
                            r.s && (r.s.k[0] = e, r.s.k[1] = e)
                        }
                    }
                    return t
                }, SVGTextLottieElement.prototype.buildNewText = function() {
                    var t, e;
                    this.addDynamicProperty(this);
                    var i = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
                    var r = this.globalData.fontManager.getFontByName(i.f);
                    if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
                    else {
                        this.layerElement.setAttribute("font-family", r.fFamily);
                        var s = i.fWeight,
                            n = i.fStyle;
                        this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", s)
                    }
                    this.layerElement.setAttribute("aria-label", i.t);
                    var a, o = i.l || [],
                        h = !!this.globalData.fontManager.chars;
                    e = o.length;
                    var l = this.mHelper,
                        p = "",
                        f = this.data.singleShape,
                        c = 0,
                        u = 0,
                        m = !0,
                        d = .001 * i.tr * i.finalSize;
                    if (!f || h || i.sz) {
                        var y, g = this.textSpans.length;
                        for (t = 0; t < e; t += 1) {
                            if (this.textSpans[t] || (this.textSpans[t] = {
                                    span: null,
                                    childSpan: null,
                                    glyph: null
                                }), !h || !f || 0 === t) {
                                if (a = g > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), g <= t) {
                                    if (a.setAttribute("stroke-linecap", "butt"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = a, h) {
                                        var v = createNS("g");
                                        a.appendChild(v), this.textSpans[t].childSpan = v
                                    }
                                    this.textSpans[t].span = a, this.layerElement.appendChild(a)
                                }
                                a.style.display = "inherit"
                            }
                            if (l.reset(), f && (o[t].n && (c = -d, u += i.yOffset, u += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(i, l, o[t].line, c, u), c += o[t].l || 0, c += d), h) {
                                var b;
                                if (y = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily), 1 === y.t) b = new SVGCompElement(y.data, this.globalData, this);
                                else {
                                    var E = emptyShapeData;
                                    y.data && y.data.shapes && (E = this.buildShapeData(y.data, i.finalSize)), b = new SVGShapeElement(E, this.globalData, this)
                                }
                                if (this.textSpans[t].glyph) {
                                    var S = this.textSpans[t].glyph;
                                    this.textSpans[t].childSpan.removeChild(S.layerElement), S.destroy()
                                }
                                this.textSpans[t].glyph = b, b._debug = !0, b.prepareFrame(0), b.renderFrame(), this.textSpans[t].childSpan.appendChild(b.layerElement), 1 === y.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")")
                            } else f && a.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), a.textContent = o[t].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                        }
                        f && a && a.setAttribute("d", p)
                    } else {
                        var x = this.textContainer,
                            P = "start";
                        switch (i.j) {
                            case 1:
                                P = "end";
                                break;
                            case 2:
                                P = "middle";
                                break;
                            default:
                                P = "start";
                                break
                        }
                        x.setAttribute("text-anchor", P), x.setAttribute("letter-spacing", d);
                        var T = this.buildTextContents(i.finalText);
                        for (e = T.length, u = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1) a = this.textSpans[t].span || createNS("tspan"), a.textContent = T[t], a.setAttribute("x", 0), a.setAttribute("y", u), a.style.display = "inherit", x.appendChild(a), this.textSpans[t] || (this.textSpans[t] = {
                            span: null,
                            glyph: null
                        }), this.textSpans[t].span = a, u += i.finalLineHeight;
                        this.layerElement.appendChild(x)
                    }
                    while (t < this.textSpans.length) this.textSpans[t].span.style.display = "none", t += 1;
                    this._sizeChanged = !0
                }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                    if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                        this._sizeChanged = !1;
                        var t = this.layerElement.getBBox();
                        this.bbox = {
                            top: t.y,
                            left: t.x,
                            width: t.width,
                            height: t.height
                        }
                    }
                    return this.bbox
                }, SVGTextLottieElement.prototype.getValue = function() {
                    var t, e, i = this.textSpans.length;
                    for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1) e = this.textSpans[t].glyph, e && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
                }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                    if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                        var t, e;
                        this._sizeChanged = !0;
                        var i, r, s, n = this.textAnimator.renderedLetters,
                            a = this.textProperty.currentData.l;
                        for (e = a.length, t = 0; t < e; t += 1) a[t].n || (i = n[t], r = this.textSpans[t].span, s = this.textSpans[t].glyph, s && s.renderFrame(), i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc))
                    }
                }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                    var t = createNS("rect");
                    t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                }, NullElement.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                    return null
                }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
                    return new NullElement(t, this.globalData, this)
                }, SVGRendererBase.prototype.createShape = function(t) {
                    return new SVGShapeElement(t, this.globalData, this)
                }, SVGRendererBase.prototype.createText = function(t) {
                    return new SVGTextLottieElement(t, this.globalData, this)
                }, SVGRendererBase.prototype.createImage = function(t) {
                    return new IImageElement(t, this.globalData, this)
                }, SVGRendererBase.prototype.createSolid = function(t) {
                    return new ISolidElement(t, this.globalData, this)
                }, SVGRendererBase.prototype.configAnimation = function(t) {
                    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                    var e = this.globalData.defs;
                    this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                    var i = createNS("clipPath"),
                        r = createNS("rect");
                    r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
                    var s = createElementID();
                    i.setAttribute("id", s), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
                }, SVGRendererBase.prototype.destroy = function() {
                    var t;
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                    var e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
                    var e = 0,
                        i = this.layers.length;
                    for (e = 0; e < i; e += 1)
                        if (this.layers[e].ind === t) return e;
                    return -1
                }, SVGRendererBase.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 !== this.layers[t].ty) {
                        e[t] = !0;
                        var i = this.createItem(this.layers[t]);
                        if (e[t] = i, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
                            var r = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                            if (-1 === r) return;
                            if (this.elements[r] && !0 !== this.elements[r]) {
                                var s = e[r],
                                    n = s.getMatte(this.layers[t].tt);
                                i.setMatte(n)
                            } else this.buildItem(r), this.addPendingElement(i)
                        }
                    }
                }, SVGRendererBase.prototype.checkPendingElements = function() {
                    while (this.pendingElements.length) {
                        var t = this.pendingElements.pop();
                        if (t.checkParenting(), t.data.tt) {
                            var e = 0,
                                i = this.elements.length;
                            while (e < i) {
                                if (this.elements[e] === t) {
                                    var r = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                                        s = this.elements[r],
                                        n = s.getMatte(this.layers[e].tt);
                                    t.setMatte(n);
                                    break
                                }
                                e += 1
                            }
                        }
                    }
                }, SVGRendererBase.prototype.renderFrame = function(t) {
                    if (this.renderedFrame !== t && !this.destroyed) {
                        var e;
                        null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                        var i = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                        if (this.globalData._mdf)
                            for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                    }
                }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
                    var i = t.getBaseElement();
                    if (i) {
                        var r, s = 0;
                        while (s < e) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (r = this.elements[s].getBaseElement()), s += 1;
                        r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i)
                    }
                }, SVGRendererBase.prototype.hide = function() {
                    this.layerElement.style.display = "none"
                }, SVGRendererBase.prototype.show = function() {
                    this.layerElement.style.display = "block"
                }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) {
                    this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
                }, ICompElement.prototype.prepareFrame = function(t) {
                    if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                        }
                        var i, r = this.elements.length;
                        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
                    }
                }, ICompElement.prototype.renderInnerContent = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }, ICompElement.prototype.setElements = function(t) {
                    this.elements = t
                }, ICompElement.prototype.getElements = function() {
                    return this.elements
                }, ICompElement.prototype.destroyElements = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                }, ICompElement.prototype.destroy = function() {
                    this.destroyElements(), this.destroyBaseElement()
                }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
                    return new SVGCompElement(t, this.globalData, this)
                }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
                    return new SVGCompElement(t, this.globalData, this)
                }, ShapeTransformManager.prototype = {
                    addTransformSequence: function(t) {
                        var e, i = t.length,
                            r = "_";
                        for (e = 0; e < i; e += 1) r += t[e].transform.key + "_";
                        var s = this.sequences[r];
                        return s || (s = {
                            transforms: [].concat(t),
                            finalTransform: new Matrix,
                            _mdf: !1
                        }, this.sequences[r] = s, this.sequenceList.push(s)), s
                    },
                    processSequence: function(t, e) {
                        var i = 0,
                            r = t.transforms.length,
                            s = e;
                        while (i < r && !e) {
                            if (t.transforms[i].transform.mProps._mdf) {
                                s = !0;
                                break
                            }
                            i += 1
                        }
                        if (s)
                            for (t.finalTransform.reset(), i = r - 1; i >= 0; i -= 1) t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
                        t._mdf = s
                    },
                    processSequences: function(t) {
                        var e, i = this.sequenceList.length;
                        for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t)
                    },
                    getNewKey: function() {
                        return this.transform_key_count += 1, "_" + this.transform_key_count
                    }
                };
                var lumaLoader = function() {
                    var t = "__lottie_element_luma_buffer",
                        e = null,
                        i = null,
                        r = null;

                    function s() {
                        var e = createNS("svg"),
                            i = createNS("filter"),
                            r = createNS("feColorMatrix");
                        return i.setAttribute("id", t), r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), i.appendChild(r), e.appendChild(i), e.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (e.style.display = "none"), e
                    }

                    function n() {
                        e || (r = s(), document.body.appendChild(r), e = createTag("canvas"), i = e.getContext("2d"), i.filter = "url(#" + t + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1))
                    }

                    function a(r) {
                        return e || n(), e.width = r.width, e.height = r.height, i.filter = "url(#" + t + ")", e
                    }
                    return {
                        load: n,
                        get: a
                    }
                };

                function createCanvas(t, e) {
                    if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
                    var i = createTag("canvas");
                    return i.width = t, i.height = e, i
                }
                var assetLoader = function() {
                        return {
                            loadLumaCanvas: lumaLoader.load,
                            getLumaCanvas: lumaLoader.get,
                            createCanvas: createCanvas
                        }
                    }(),
                    registeredEffects = {};

                function CVEffects(t) {
                    var e, i, r = t.data.ef ? t.data.ef.length : 0;
                    for (this.filters = [], e = 0; e < r; e += 1) {
                        i = null;
                        var s = t.data.ef[e].ty;
                        if (registeredEffects[s]) {
                            var n = registeredEffects[s].effect;
                            i = new n(t.effectsManager.effectElements[e], t)
                        }
                        i && this.filters.push(i)
                    }
                    this.filters.length && t.addRenderableComponent(this)
                }

                function registerEffect(t, e) {
                    registeredEffects[t] = {
                        effect: e
                    }
                }

                function CVMaskElement(t, e) {
                    var i;
                    this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                    var r = this.masksProperties.length,
                        s = !1;
                    for (i = 0; i < r; i += 1) "n" !== this.masksProperties[i].mode && (s = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
                    this.hasMasks = s, s && this.element.addRenderableComponent(this)
                }

                function CVBaseElement() {}
                CVEffects.prototype.renderFrame = function(t) {
                    var e, i = this.filters.length;
                    for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
                }, CVEffects.prototype.getEffects = function(t) {
                    var e, i = this.filters.length,
                        r = [];
                    for (e = 0; e < i; e += 1) this.filters[e].type === t && r.push(this.filters[e]);
                    return r
                }, CVMaskElement.prototype.renderFrame = function() {
                    if (this.hasMasks) {
                        var t, e, i, r, s = this.element.finalTransform.mat,
                            n = this.element.canvasContext,
                            a = this.masksProperties.length;
                        for (n.beginPath(), t = 0; t < a; t += 1)
                            if ("n" !== this.masksProperties[t].mode) {
                                var o;
                                this.masksProperties[t].inv && (n.moveTo(0, 0), n.lineTo(this.element.globalData.compSize.w, 0), n.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), n.lineTo(0, this.element.globalData.compSize.h), n.lineTo(0, 0)), r = this.viewData[t].v, e = s.applyToPointArray(r.v[0][0], r.v[0][1], 0), n.moveTo(e[0], e[1]);
                                var h = r._length;
                                for (o = 1; o < h; o += 1) i = s.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), n.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                                i = s.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), n.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                            }
                        this.element.globalData.renderer.save(!0), n.clip()
                    }
                }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                    this.element = null
                };
                var operationsMap = {
                    1: "source-in",
                    2: "source-out",
                    3: "source-in",
                    4: "source-out"
                };

                function CVShapeData(t, e, i, r) {
                    this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                    var s, n = 4;
                    "rc" === e.ty ? n = 5 : "el" === e.ty ? n = 6 : "sr" === e.ty && (n = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, n, t);
                    var a, o = i.length;
                    for (s = 0; s < o; s += 1) i[s].closed || (a = {
                        transforms: r.addTransformSequence(i[s].transforms),
                        trNodes: []
                    }, this.styledShapes.push(a), i[s].elements.push(a))
                }

                function CVShapeElement(t, e, i) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, i)
                }

                function CVTextElement(t, e, i) {
                    this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                        fill: "rgba(0,0,0,0)",
                        stroke: "rgba(0,0,0,0)",
                        sWidth: 0,
                        fValue: ""
                    }, this.initElement(t, e, i)
                }

                function CVImageElement(t, e, i) {
                    this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i)
                }

                function CVSolidElement(t, e, i) {
                    this.initElement(t, e, i)
                }

                function CanvasRendererBase() {}

                function CanvasContext() {
                    this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
                }

                function CVContextData() {
                    var t;
                    this.stack = [], this.cArrPos = 0, this.cTr = new Matrix;
                    var e = 15;
                    for (t = 0; t < e; t += 1) {
                        var i = new CanvasContext;
                        this.stack[t] = i
                    }
                    this._length = e, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
                }

                function CVCompElement(t, e, i) {
                    this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function CanvasRenderer(t, e) {
                    this.animationItem = t, this.renderConfig = {
                        clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                        context: e && e.context || null,
                        progressiveLoad: e && e.progressiveLoad || !1,
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: e && e.contentVisibility || "visible",
                        className: e && e.className || "",
                        id: e && e.id || "",
                        runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                    }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                        frameNum: -1,
                        _mdf: !1,
                        renderConfig: this.renderConfig,
                        currentGlobalAlpha: -1
                    }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
                }

                function HBaseElement() {}

                function HSolidElement(t, e, i) {
                    this.initElement(t, e, i)
                }

                function HShapeElement(t, e, i) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }
                }

                function HTextElement(t, e, i) {
                    this.textSpans = [], this.textPaths = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i)
                }

                function HCameraElement(t, e, i) {
                    this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
                    var r = PropertyFactory.getProp;
                    if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                        var s, n = t.ks.or.k.length;
                        for (s = 0; s < n; s += 1) t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null
                    }
                    this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                        mProp: this
                    }
                }

                function HImageElement(t, e, i) {
                    this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i)
                }

                function HybridRendererBase(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                        className: e && e.className || "",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "400%",
                            height: e && e.filterSize && e.filterSize.height || "400%",
                            x: e && e.filterSize && e.filterSize.x || "-100%",
                            y: e && e.filterSize && e.filterSize.y || "-100%"
                        }
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        renderConfig: this.renderConfig
                    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                }

                function HCompElement(t, e, i) {
                    this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function HybridRenderer(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                        className: e && e.className || "",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "400%",
                            height: e && e.filterSize && e.filterSize.height || "400%",
                            x: e && e.filterSize && e.filterSize.x || "-100%",
                            y: e && e.filterSize && e.filterSize.y || "-100%"
                        },
                        runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        renderConfig: this.renderConfig
                    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                }
                CVBaseElement.prototype = {
                    createElements: function() {},
                    initRendererElement: function() {},
                    createContainerElements: function() {
                        if (this.data.tt >= 1) {
                            this.buffers = [];
                            var t = this.globalData.canvasContext,
                                e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
                            this.buffers.push(e);
                            var i = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
                            this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                        }
                        this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
                    },
                    createContent: function() {},
                    setBlendMode: function() {
                        var t = this.globalData;
                        if (t.blendMode !== this.data.bm) {
                            t.blendMode = this.data.bm;
                            var e = getBlendMode(this.data.bm);
                            t.canvasContext.globalCompositeOperation = e
                        }
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
                    },
                    hideElement: function() {
                        this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                    },
                    showElement: function() {
                        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                    },
                    clearCanvas: function(t) {
                        t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
                    },
                    prepareLayer: function() {
                        if (this.data.tt >= 1) {
                            var t = this.buffers[0],
                                e = t.getContext("2d");
                            this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                        }
                    },
                    exitLayer: function() {
                        if (this.data.tt >= 1) {
                            var t = this.buffers[1],
                                e = t.getContext("2d");
                            this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
                            var i = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
                            if (i.renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                                var r = assetLoader.getLumaCanvas(this.canvasContext.canvas),
                                    s = r.getContext("2d");
                                s.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
                            }
                            this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                        }
                    },
                    renderFrame: function(t) {
                        if (!this.hidden && !this.data.hd && (1 !== this.data.td || t)) {
                            this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                            var e = 0 === this.data.ty;
                            this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                        }
                    },
                    destroy: function() {
                        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                    },
                    mHelper: new Matrix
                }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                    opacity: 1,
                    _opMdf: !1
                }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                    var i = {
                            data: t,
                            type: t.ty,
                            preTransforms: this.transformsManager.addTransformSequence(e),
                            transforms: [],
                            elements: [],
                            closed: !0 === t.hd
                        },
                        r = {};
                    if ("fl" === t.ty || "st" === t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || {
                            k: 0
                        }, 0, .01, this), r.a = PropertyFactory.getProp(this, t.a || {
                            k: 0
                        }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
                        if (i.lc = lineCapEnum[t.lc || 2], i.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
                            var s = new DashProperty(this, t.d, "canvas", this);
                            r.d = s, r.d.k || (i.da = r.d.dashArray, i["do"] = r.d.dashoffset[0])
                        }
                    } else i.r = 2 === t.r ? "evenodd" : "nonzero";
                    return this.stylesList.push(i), r.style = i, r
                }, CVShapeElement.prototype.createGroupElement = function() {
                    var t = {
                        it: [],
                        prevViewData: []
                    };
                    return t
                }, CVShapeElement.prototype.createTransformElement = function(t) {
                    var e = {
                        transform: {
                            opacity: 1,
                            _opMdf: !1,
                            key: this.transformsManager.getNewKey(),
                            op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                            mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                        }
                    };
                    return e
                }, CVShapeElement.prototype.createShapeElement = function(t) {
                    var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                    return this.shapes.push(e), this.addShapeToModifiers(e), e
                }, CVShapeElement.prototype.reloadShapes = function() {
                    var t;
                    this._isFirstFrame = !0;
                    var e = this.itemsData.length;
                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                    this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                    var e, i = this.stylesList.length;
                    for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
                }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                    var t, e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
                }, CVShapeElement.prototype.closeStyles = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1) t[e].closed = !0
                }, CVShapeElement.prototype.searchShapes = function(t, e, i, r, s) {
                    var n, a, o, h, l, p, f = t.length - 1,
                        c = [],
                        u = [],
                        m = [].concat(s);
                    for (n = f; n >= 0; n -= 1) {
                        if (h = this.searchProcessedElement(t[n]), h ? e[n] = i[h - 1] : t[n]._shouldRender = r, "fl" === t[n].ty || "st" === t[n].ty || "gf" === t[n].ty || "gs" === t[n].ty) h ? e[n].style.closed = !1 : e[n] = this.createStyleElement(t[n], m), c.push(e[n].style);
                        else if ("gr" === t[n].ty) {
                            if (h)
                                for (o = e[n].it.length, a = 0; a < o; a += 1) e[n].prevViewData[a] = e[n].it[a];
                            else e[n] = this.createGroupElement(t[n]);
                            this.searchShapes(t[n].it, e[n].it, e[n].prevViewData, r, m)
                        } else "tr" === t[n].ty ? (h || (p = this.createTransformElement(t[n]), e[n] = p), m.push(e[n]), this.addTransformToStyleList(e[n])) : "sh" === t[n].ty || "rc" === t[n].ty || "el" === t[n].ty || "sr" === t[n].ty ? h || (e[n] = this.createShapeElement(t[n])) : "tm" === t[n].ty || "rd" === t[n].ty || "pb" === t[n].ty || "zz" === t[n].ty || "op" === t[n].ty ? (h ? (l = e[n], l.closed = !1) : (l = ShapeModifiers.getModifier(t[n].ty), l.init(this, t[n]), e[n] = l, this.shapeModifiers.push(l)), u.push(l)) : "rp" === t[n].ty && (h ? (l = e[n], l.closed = !0) : (l = ShapeModifiers.getModifier(t[n].ty), e[n] = l, l.init(this, t, n, e), this.shapeModifiers.push(l), r = !1), u.push(l));
                        this.addProcessedElement(t[n], n + 1)
                    }
                    for (this.removeTransformFromStyleList(), this.closeStyles(c), f = u.length, n = 0; n < f; n += 1) u[n].closed = !0
                }, CVShapeElement.prototype.renderInnerContent = function() {
                    this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                    (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
                }, CVShapeElement.prototype.drawLayer = function() {
                    var t, e, i, r, s, n, a, o, h, l = this.stylesList.length,
                        p = this.globalData.renderer,
                        f = this.globalData.canvasContext;
                    for (t = 0; t < l; t += 1)
                        if (h = this.stylesList[t], o = h.type, ("st" !== o && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                            for (p.save(), n = h.elements, "st" === o || "gs" === o ? (p.ctxStrokeStyle("st" === o ? h.co : h.grd), p.ctxLineWidth(h.wi), p.ctxLineCap(h.lc), p.ctxLineJoin(h.lj), p.ctxMiterLimit(h.ml || 0)) : p.ctxFillStyle("fl" === o ? h.co : h.grd), p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && f.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), i = n.length, e = 0; e < i; e += 1) {
                                for ("st" !== o && "gs" !== o || (f.beginPath(), h.da && (f.setLineDash(h.da), f.lineDashOffset = h["do"])), a = n[e].trNodes, s = a.length, r = 0; r < s; r += 1) "m" === a[r].t ? f.moveTo(a[r].p[0], a[r].p[1]) : "c" === a[r].t ? f.bezierCurveTo(a[r].pts[0], a[r].pts[1], a[r].pts[2], a[r].pts[3], a[r].pts[4], a[r].pts[5]) : f.closePath();
                                "st" !== o && "gs" !== o || (p.ctxStroke(), h.da && f.setLineDash(this.dashResetter))
                            }
                            "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(h.r), p.restore()
                        }
                }, CVShapeElement.prototype.renderShape = function(t, e, i, r) {
                    var s, n, a = e.length - 1;
                    for (n = t, s = a; s >= 0; s -= 1) "tr" === e[s].ty ? (n = i[s].transform, this.renderShapeTransform(t, n)) : "sh" === e[s].ty || "el" === e[s].ty || "rc" === e[s].ty || "sr" === e[s].ty ? this.renderPath(e[s], i[s]) : "fl" === e[s].ty ? this.renderFill(e[s], i[s], n) : "st" === e[s].ty ? this.renderStroke(e[s], i[s], n) : "gf" === e[s].ty || "gs" === e[s].ty ? this.renderGradientFill(e[s], i[s], n) : "gr" === e[s].ty ? this.renderShape(n, e[s].it, i[s].it) : e[s].ty;
                    r && this.drawLayer()
                }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                    if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                        var i, r, s, n = t.trNodes,
                            a = e.paths,
                            o = a._length;
                        n.length = 0;
                        var h = t.transforms.finalTransform;
                        for (s = 0; s < o; s += 1) {
                            var l = a.shapes[s];
                            if (l && l.v) {
                                for (r = l._length, i = 1; i < r; i += 1) 1 === i && n.push({
                                    t: "m",
                                    p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                }), n.push({
                                    t: "c",
                                    pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i])
                                });
                                1 === r && n.push({
                                    t: "m",
                                    p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                }), l.c && r && (n.push({
                                    t: "c",
                                    pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
                                }), n.push({
                                    t: "z"
                                }))
                            }
                        }
                        t.trNodes = n
                    }
                }, CVShapeElement.prototype.renderPath = function(t, e) {
                    if (!0 !== t.hd && t._shouldRender) {
                        var i, r = e.styledShapes.length;
                        for (i = 0; i < r; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh)
                    }
                }, CVShapeElement.prototype.renderFill = function(t, e, i) {
                    var r = e.style;
                    (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity)
                }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
                    var r, s = e.style;
                    if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                        var n, a = this.globalData.canvasContext,
                            o = e.s.v,
                            h = e.e.v;
                        if (1 === t.t) r = a.createLinearGradient(o[0], o[1], h[0], h[1]);
                        else {
                            var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)),
                                p = Math.atan2(h[1] - o[1], h[0] - o[0]),
                                f = e.h.v;
                            f >= 1 ? f = .99 : f <= -1 && (f = -.99);
                            var c = l * f,
                                u = Math.cos(p + e.a.v) * c + o[0],
                                m = Math.sin(p + e.a.v) * c + o[1];
                            r = a.createRadialGradient(u, m, 0, o[0], o[1], l)
                        }
                        var d = t.g.p,
                            y = e.g.c,
                            g = 1;
                        for (n = 0; n < d; n += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * n + 1]), r.addColorStop(y[4 * n] / 100, "rgba(" + y[4 * n + 1] + "," + y[4 * n + 2] + "," + y[4 * n + 3] + "," + g + ")");
                        s.grd = r
                    }
                    s.coOp = e.o.v * i.opacity
                }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
                    var r = e.style,
                        s = e.d;
                    s && (s._mdf || this._isFirstFrame) && (r.da = s.dashArray, r["do"] = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v)
                }, CVShapeElement.prototype.destroy = function() {
                    this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                    var t = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                    var e = !1;
                    t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                    var i = !1;
                    t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                    var r, s, n, a, o, h, l, p, f, c, u, m, d = this.globalData.fontManager.getFontByName(t.f),
                        y = t.l,
                        g = this.mHelper;
                    this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;
                    var v = this.data.singleShape,
                        b = .001 * t.tr * t.finalSize,
                        E = 0,
                        S = 0,
                        x = !0,
                        P = 0;
                    for (r = 0; r < s; r += 1) {
                        n = this.globalData.fontManager.getCharData(t.finalText[r], d.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), a = n && n.data || {}, g.reset(), v && y[r].n && (E = -b, S += t.yOffset, S += x ? 1 : 0, x = !1), l = a.shapes ? a.shapes[0].it : [], f = l.length, g.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, g, y[r].line, E, S), u = createSizedArray(f - 1);
                        var T = 0;
                        for (p = 0; p < f; p += 1)
                            if ("sh" === l[p].ty) {
                                for (h = l[p].ks.k.i.length, c = l[p].ks.k, m = [], o = 1; o < h; o += 1) 1 === o && m.push(g.applyToX(c.v[0][0], c.v[0][1], 0), g.applyToY(c.v[0][0], c.v[0][1], 0)), m.push(g.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToX(c.i[o][0], c.i[o][1], 0), g.applyToY(c.i[o][0], c.i[o][1], 0), g.applyToX(c.v[o][0], c.v[o][1], 0), g.applyToY(c.v[o][0], c.v[o][1], 0));
                                m.push(g.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToX(c.i[0][0], c.i[0][1], 0), g.applyToY(c.i[0][0], c.i[0][1], 0), g.applyToX(c.v[0][0], c.v[0][1], 0), g.applyToY(c.v[0][0], c.v[0][1], 0)), u[T] = m, T += 1
                            }
                        v && (E += y[r].l, E += b), this.textSpans[P] ? this.textSpans[P].elem = u : this.textSpans[P] = {
                            elem: u
                        }, P += 1
                    }
                }, CVTextElement.prototype.renderInnerContent = function() {
                    this.validateText();
                    var t, e, i, r, s, n, a = this.canvasContext;
                    a.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                    var o, h = this.textAnimator.renderedLetters,
                        l = this.textProperty.currentData.l;
                    e = l.length;
                    var p, f, c = null,
                        u = null,
                        m = null,
                        d = this.globalData.renderer;
                    for (t = 0; t < e; t += 1)
                        if (!l[t].n) {
                            if (o = h[t], o && (d.save(), d.ctxTransform(o.p), d.ctxOpacity(o.o)), this.fill) {
                                for (o && o.fc ? c !== o.fc && (d.ctxFillStyle(o.fc), c = o.fc) : c !== this.values.fill && (c = this.values.fill, d.ctxFillStyle(this.values.fill)), p = this.textSpans[t].elem, r = p.length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                                    for (f = p[i], n = f.length, this.globalData.canvasContext.moveTo(f[0], f[1]), s = 2; s < n; s += 6) this.globalData.canvasContext.bezierCurveTo(f[s], f[s + 1], f[s + 2], f[s + 3], f[s + 4], f[s + 5]);
                                this.globalData.canvasContext.closePath(), d.ctxFill()
                            }
                            if (this.stroke) {
                                for (o && o.sw ? m !== o.sw && (m = o.sw, d.ctxLineWidth(o.sw)) : m !== this.values.sWidth && (m = this.values.sWidth, d.ctxLineWidth(this.values.sWidth)), o && o.sc ? u !== o.sc && (u = o.sc, d.ctxStrokeStyle(o.sc)) : u !== this.values.stroke && (u = this.values.stroke, d.ctxStrokeStyle(this.values.stroke)), p = this.textSpans[t].elem, r = p.length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                                    for (f = p[i], n = f.length, this.globalData.canvasContext.moveTo(f[0], f[1]), s = 2; s < n; s += 6) this.globalData.canvasContext.bezierCurveTo(f[s], f[s + 1], f[s + 2], f[s + 3], f[s + 4], f[s + 5]);
                                this.globalData.canvasContext.closePath(), d.ctxStroke()
                            }
                            o && this.globalData.renderer.restore()
                        }
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                    if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                        var t = createTag("canvas");
                        t.width = this.assetData.w, t.height = this.assetData.h;
                        var e, i, r = t.getContext("2d"),
                            s = this.img.width,
                            n = this.img.height,
                            a = s / n,
                            o = this.assetData.w / this.assetData.h,
                            h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                        a > o && "xMidYMid slice" === h || a < o && "xMidYMid slice" !== h ? (i = n, e = i * o) : (e = s, i = e / o), r.drawImage(this.img, (s - e) / 2, (n - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                    }
                }, CVImageElement.prototype.renderInnerContent = function() {
                    this.canvasContext.drawImage(this.img, 0, 0)
                }, CVImageElement.prototype.destroy = function() {
                    this.img = null
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                    this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
                }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
                    return new CVShapeElement(t, this.globalData, this)
                }, CanvasRendererBase.prototype.createText = function(t) {
                    return new CVTextElement(t, this.globalData, this)
                }, CanvasRendererBase.prototype.createImage = function(t) {
                    return new CVImageElement(t, this.globalData, this)
                }, CanvasRendererBase.prototype.createSolid = function(t) {
                    return new CVSolidElement(t, this.globalData, this)
                }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
                    1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
                }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
                    this.canvasContext.globalAlpha *= t < 0 ? 0 : t
                }, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
                    this.canvasContext.fillStyle = t
                }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
                    this.canvasContext.strokeStyle = t
                }, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
                    this.canvasContext.lineWidth = t
                }, CanvasRendererBase.prototype.ctxLineCap = function(t) {
                    this.canvasContext.lineCap = t
                }, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
                    this.canvasContext.lineJoin = t
                }, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
                    this.canvasContext.miterLimit = t
                }, CanvasRendererBase.prototype.ctxFill = function(t) {
                    this.canvasContext.fill(t)
                }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, i, r) {
                    this.canvasContext.fillRect(t, e, i, r)
                }, CanvasRendererBase.prototype.ctxStroke = function() {
                    this.canvasContext.stroke()
                }, CanvasRendererBase.prototype.reset = function() {
                    this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
                }, CanvasRendererBase.prototype.save = function() {
                    this.canvasContext.save()
                }, CanvasRendererBase.prototype.restore = function(t) {
                    this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore()
                }, CanvasRendererBase.prototype.configAnimation = function(t) {
                    if (this.animationItem.wrapper) {
                        this.animationItem.container = createTag("canvas");
                        var e = this.animationItem.container.style;
                        e.width = "100%", e.height = "100%";
                        var i = "0px 0px 0px";
                        e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                    } else this.canvasContext = this.renderConfig.context;
                    this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
                        w: t.w,
                        h: t.h,
                        sx: 0,
                        sy: 0,
                        tx: 0,
                        ty: 0
                    }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
                }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
                    var i, r, s, n;
                    if (this.reset(), t ? (i = t, r = e, this.canvasContext.canvas.width = i, this.canvasContext.canvas.height = r) : (this.animationItem.wrapper && this.animationItem.container ? (i = this.animationItem.wrapper.offsetWidth, r = this.animationItem.wrapper.offsetHeight) : (i = this.canvasContext.canvas.width, r = this.canvasContext.canvas.height), this.canvasContext.canvas.width = i * this.renderConfig.dpr, this.canvasContext.canvas.height = r * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                        var a = this.renderConfig.preserveAspectRatio.split(" "),
                            o = a[1] || "meet",
                            h = a[0] || "xMidYMid",
                            l = h.substr(0, 4),
                            p = h.substr(4);
                        s = i / r, n = this.transformCanvas.w / this.transformCanvas.h, n > s && "meet" === o || n < s && "slice" === o ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === l && (n < s && "meet" === o || n > s && "slice" === o) ? (i - this.transformCanvas.w * (r / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === l && (n < s && "meet" === o || n > s && "slice" === o) ? (i - this.transformCanvas.w * (r / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === p && (n > s && "meet" === o || n < s && "slice" === o) ? (r - this.transformCanvas.h * (i / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === p && (n > s && "meet" === o || n < s && "slice" === o) ? (r - this.transformCanvas.h * (i / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                    } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                }, CanvasRendererBase.prototype.destroy = function() {
                    var t;
                    this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
                    var e = this.layers ? this.layers.length : 0;
                    for (t = e - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                    this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
                    if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                        var i;
                        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                        var r = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                        if (this.globalData._mdf) {
                            for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
                            !0 !== this.renderConfig.clearCanvas && this.restore()
                        }
                    }
                }, CanvasRendererBase.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 !== this.layers[t].ty) {
                        var i = this.createItem(this.layers[t], this, this.globalData);
                        e[t] = i, i.initExpressions()
                    }
                }, CanvasRendererBase.prototype.checkPendingElements = function() {
                    while (this.pendingElements.length) {
                        var t = this.pendingElements.pop();
                        t.checkParenting()
                    }
                }, CanvasRendererBase.prototype.hide = function() {
                    this.animationItem.container.style.display = "none"
                }, CanvasRendererBase.prototype.show = function() {
                    this.animationItem.container.style.display = "block"
                }, CVContextData.prototype.duplicate = function() {
                    var t = 2 * this._length,
                        e = 0;
                    for (e = this._length; e < t; e += 1) this.stack[e] = new CanvasContext;
                    this._length = t
                }, CVContextData.prototype.reset = function() {
                    this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
                }, CVContextData.prototype.restore = function(t) {
                    this.cArrPos -= 1;
                    var e, i = this.stack[this.cArrPos],
                        r = i.transform,
                        s = this.cTr.props;
                    for (e = 0; e < 16; e += 1) s[e] = r[e];
                    if (t) {
                        this.nativeContext.restore();
                        var n = this.stack[this.cArrPos + 1];
                        this.appliedFillStyle = n.fillStyle, this.appliedStrokeStyle = n.strokeStyle, this.appliedLineWidth = n.lineWidth, this.appliedLineCap = n.lineCap, this.appliedLineJoin = n.lineJoin, this.appliedMiterLimit = n.miterLimit
                    }
                    this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (t || -1 !== i.opacity && this.currentOpacity !== i.opacity) && (this.nativeContext.globalAlpha = i.opacity, this.currentOpacity = i.opacity), this.currentFillStyle = i.fillStyle, this.currentStrokeStyle = i.strokeStyle, this.currentLineWidth = i.lineWidth, this.currentLineCap = i.lineCap, this.currentLineJoin = i.lineJoin, this.currentMiterLimit = i.miterLimit
                }, CVContextData.prototype.save = function(t) {
                    t && this.nativeContext.save();
                    var e = this.cTr.props;
                    this._length <= this.cArrPos && this.duplicate();
                    var i, r = this.stack[this.cArrPos];
                    for (i = 0; i < 16; i += 1) r.transform[i] = e[i];
                    this.cArrPos += 1;
                    var s = this.stack[this.cArrPos];
                    s.opacity = r.opacity, s.fillStyle = r.fillStyle, s.strokeStyle = r.strokeStyle, s.lineWidth = r.lineWidth, s.lineCap = r.lineCap, s.lineJoin = r.lineJoin, s.miterLimit = r.miterLimit
                }, CVContextData.prototype.setOpacity = function(t) {
                    this.stack[this.cArrPos].opacity = t
                }, CVContextData.prototype.setContext = function(t) {
                    this.nativeContext = t
                }, CVContextData.prototype.fillStyle = function(t) {
                    this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t)
                }, CVContextData.prototype.strokeStyle = function(t) {
                    this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t)
                }, CVContextData.prototype.lineWidth = function(t) {
                    this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t)
                }, CVContextData.prototype.lineCap = function(t) {
                    this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t)
                }, CVContextData.prototype.lineJoin = function(t) {
                    this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t)
                }, CVContextData.prototype.miterLimit = function(t) {
                    this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t)
                }, CVContextData.prototype.transform = function(t) {
                    this.transformMat.cloneFromProps(t);
                    var e = this.cTr;
                    this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
                    var i = e.props;
                    this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
                }, CVContextData.prototype.opacity = function(t) {
                    var e = this.stack[this.cArrPos].opacity;
                    e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e)
                }, CVContextData.prototype.fill = function(t) {
                    this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t)
                }, CVContextData.prototype.fillRect = function(t, e, i, r) {
                    this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, i, r)
                }, CVContextData.prototype.stroke = function() {
                    this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
                }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                    var t, e = this.canvasContext;
                    e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip();
                    var i = this.layers.length;
                    for (t = i - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }, CVCompElement.prototype.destroy = function() {
                    var t, e = this.layers.length;
                    for (t = e - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                    this.layers = null, this.elements = null
                }, CVCompElement.prototype.createComp = function(t) {
                    return new CVCompElement(t, this.globalData, this)
                }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
                    return new CVCompElement(t, this.globalData, this)
                }, HBaseElement.prototype = {
                    checkBlendMode: function() {},
                    initRendererElement: function() {
                        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                    },
                    createContainerElements: function() {
                        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        var t = this.transformedElement ? this.transformedElement.style : {};
                        if (this.finalTransform._matMdf) {
                            var e = this.finalTransform.mat.toCSS();
                            t.transform = e, t.webkitTransform = e
                        }
                        this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    destroy: function() {
                        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new MaskElement(this.data, this, this.globalData)
                    },
                    addEffects: function() {},
                    setMatte: function() {}
                }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                    var t;
                    this.data.hasMask ? (t = createNS("rect"), t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (t = createTag("div"), t.style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
                }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                    var t;
                    if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                    else {
                        t = createNS("svg");
                        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
                    }
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
                }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
                    var i, r = t.length;
                    for (i = 0; i < r; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
                    return e
                }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                    var i, r, s, n, a, o = t.sh.v,
                        h = t.transformers,
                        l = o._length;
                    if (!(l <= 1)) {
                        for (i = 0; i < l - 1; i += 1) r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), n = this.getTransformedPoint(h, o.i[i + 1]), a = this.getTransformedPoint(h, o.v[i + 1]), this.checkBounds(r, s, n, a, e);
                        o.c && (r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), n = this.getTransformedPoint(h, o.i[0]), a = this.getTransformedPoint(h, o.v[0]), this.checkBounds(r, s, n, a, e))
                    }
                }, HShapeElement.prototype.checkBounds = function(t, e, i, r, s) {
                    this.getBoundsOfCurve(t, e, i, r);
                    var n = this.shapeBoundingBox;
                    s.x = bmMin(n.left, s.x), s.xMax = bmMax(n.right, s.xMax), s.y = bmMin(n.top, s.y), s.yMax = bmMax(n.bottom, s.yMax)
                }, HShapeElement.prototype.shapeBoundingBox = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, HShapeElement.prototype.tempBoundingBox = {
                    x: 0,
                    xMax: 0,
                    y: 0,
                    yMax: 0,
                    width: 0,
                    height: 0
                }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, r) {
                    for (var s, n, a, o, h, l, p, f = [
                            [t[0], r[0]],
                            [t[1], r[1]]
                        ], c = 0; c < 2; ++c) n = 6 * t[c] - 12 * e[c] + 6 * i[c], s = -3 * t[c] + 9 * e[c] - 9 * i[c] + 3 * r[c], a = 3 * e[c] - 3 * t[c], n |= 0, s |= 0, a |= 0, 0 === s && 0 === n || (0 === s ? (o = -a / n, o > 0 && o < 1 && f[c].push(this.calculateF(o, t, e, i, r, c))) : (h = n * n - 4 * a * s, h >= 0 && (l = (-n + bmSqrt(h)) / (2 * s), l > 0 && l < 1 && f[c].push(this.calculateF(l, t, e, i, r, c)), p = (-n - bmSqrt(h)) / (2 * s), p > 0 && p < 1 && f[c].push(this.calculateF(p, t, e, i, r, c)))));
                    this.shapeBoundingBox.left = bmMin.apply(null, f[0]), this.shapeBoundingBox.top = bmMin.apply(null, f[1]), this.shapeBoundingBox.right = bmMax.apply(null, f[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, f[1])
                }, HShapeElement.prototype.calculateF = function(t, e, i, r, s, n) {
                    return bmPow(1 - t, 3) * e[n] + 3 * bmPow(1 - t, 2) * t * i[n] + 3 * (1 - t) * bmPow(t, 2) * r[n] + bmPow(t, 3) * s[n]
                }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                    var i, r = t.length;
                    for (i = 0; i < r; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it ? this.calculateBoundingBox(t[i].it, e) : t[i] && t[i].style && t[i].w && this.expandStrokeBoundingBox(t[i].w, e)
                }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
                    var i = 0;
                    if (t.keyframes) {
                        for (var r = 0; r < t.keyframes.length; r += 1) {
                            var s = t.keyframes[r].s;
                            s > i && (i = s)
                        }
                        i *= t.mult
                    } else i = t.v * t.mult;
                    e.x -= i, e.xMax += i, e.y -= i, e.yMax += i
                }, HShapeElement.prototype.currentBoxContains = function(t) {
                    return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
                }, HShapeElement.prototype.renderInnerContent = function() {
                    if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var t = this.tempBoundingBox,
                            e = 999999;
                        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                        var i = !1;
                        if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                            this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                            var r = this.shapeCont.style,
                                s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            r.transform = s, r.webkitTransform = s
                        }
                    }
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                    if (this.isMasked = this.checkMasks(), this.isMasked) {
                        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                        var t = createNS("g");
                        this.maskedElement.appendChild(t), this.innerElem = t
                    } else this.renderType = "html", this.innerElem = this.layerElement;
                    this.checkParenting()
                }, HTextElement.prototype.buildNewText = function() {
                    var t = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                    var e = this.innerElem.style,
                        i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                    e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                    var r, s, n = this.globalData.fontManager.getFontByName(t.f);
                    if (!this.globalData.fontManager.chars)
                        if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", n.fClass) this.innerElem.className = n.fClass;
                        else {
                            e.fontFamily = n.fFamily;
                            var a = t.fWeight,
                                o = t.fStyle;
                            e.fontStyle = o, e.fontWeight = a
                        }
                    var h, l, p, f = t.l;
                    s = f.length;
                    var c, u = this.mHelper,
                        m = "",
                        d = 0;
                    for (r = 0; r < s; r += 1) {
                        if (this.globalData.fontManager.chars ? (this.textPaths[d] ? h = this.textPaths[d] : (h = createNS("path"), h.setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? (l = this.textSpans[d], p = l.children[0]) : (l = createTag("div"), l.style.lineHeight = 0, p = createNS("svg"), p.appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (l = this.textSpans[d], h = this.textPaths[d]) : (l = createTag("span"), styleDiv(l), h = createTag("span"), styleDiv(h), l.appendChild(h)), this.globalData.fontManager.chars) {
                            var y, g = this.globalData.fontManager.getCharData(t.finalText[r], n.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                            if (y = g ? g.data : null, u.reset(), y && y.shapes && y.shapes.length && (c = y.shapes[0].it, u.scale(t.finalSize / 100, t.finalSize / 100), m = this.createPathShape(u, c), h.setAttribute("d", m)), this.isMasked) this.innerElem.appendChild(h);
                            else {
                                if (this.innerElem.appendChild(l), y && y.shapes) {
                                    document.body.appendChild(p);
                                    var v = p.getBBox();
                                    p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                                    var b = p.style,
                                        E = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                                    b.transform = E, b.webkitTransform = E, f[r].yOffset = v.y - 1
                                } else p.setAttribute("width", 1), p.setAttribute("height", 1);
                                l.appendChild(p)
                            }
                        } else if (h.textContent = f[r].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h);
                        else {
                            this.innerElem.appendChild(l);
                            var S = h.style,
                                x = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                            S.transform = x, S.webkitTransform = x
                        }
                        this.isMasked ? this.textSpans[d] = h : this.textSpans[d] = l, this.textSpans[d].style.display = "block", this.textPaths[d] = h, d += 1
                    }
                    while (d < this.textSpans.length) this.textSpans[d].style.display = "none", d += 1
                }, HTextElement.prototype.renderInnerContent = function() {
                    var t;
                    if (this.validateText(), this.data.singleShape) {
                        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                        if (this.isMasked && this.finalTransform._matMdf) {
                            this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                            var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                            t.transform = e, t.webkitTransform = e
                        }
                    }
                    if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                        var i, r, s, n, a, o = 0,
                            h = this.textAnimator.renderedLetters,
                            l = this.textProperty.currentData.l;
                        for (r = l.length, i = 0; i < r; i += 1) l[i].n ? o += 1 : (n = this.textSpans[i], a = this.textPaths[i], s = h[o], o += 1, s._mdf.m && (this.isMasked ? n.setAttribute("transform", s.m) : (n.style.webkitTransform = s.m, n.style.transform = s.m)), n.style.opacity = s.o, s.sw && s._mdf.sw && a.setAttribute("stroke-width", s.sw), s.sc && s._mdf.sc && a.setAttribute("stroke", s.sc), s.fc && s._mdf.fc && (a.setAttribute("fill", s.fc), a.style.color = s.fc));
                        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                            var p = this.innerElem.getBBox();
                            this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height));
                            var f = 1;
                            if (this.currentBBox.w !== p.width + 2 * f || this.currentBBox.h !== p.height + 2 * f || this.currentBBox.x !== p.x - f || this.currentBBox.y !== p.y - f) {
                                this.currentBBox.w = p.width + 2 * f, this.currentBBox.h = p.height + 2 * f, this.currentBBox.x = p.x - f, this.currentBBox.y = p.y - f, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                                var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                t.transform = c, t.webkitTransform = c
                            }
                        }
                    }
                }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                    var t, e, i, r, s = this.comp.threeDElements.length;
                    for (t = 0; t < s; t += 1)
                        if (e = this.comp.threeDElements[t], "3d" === e.type) {
                            i = e.perspectiveElem.style, r = e.container.style;
                            var n = this.pe.v + "px",
                                a = "0px 0px 0px",
                                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                            i.perspective = n, i.webkitPerspective = n, r.transformOrigin = a, r.mozTransformOrigin = a, r.webkitTransformOrigin = a, i.transform = o, i.webkitTransform = o
                        }
                }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                    var t, e, i = this._isFirstFrame;
                    if (this.hierarchy)
                        for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
                    if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                        if (this.mat.reset(), this.hierarchy)
                            for (e = this.hierarchy.length - 1, t = e; t >= 0; t -= 1) {
                                var r = this.hierarchy[t].finalTransform.mProp;
                                this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2])
                            }
                        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                            var s;
                            s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                            var n = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
                                a = [s[0] / n, s[1] / n, s[2] / n],
                                o = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                                h = Math.atan2(a[1], o),
                                l = Math.atan2(a[0], -a[2]);
                            this.mat.rotateY(l).rotateX(-h)
                        }
                        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                        var p = !this._prevMat.equals(this.mat);
                        if ((p || this.pe._mdf) && this.comp.threeDElements) {
                            var f, c, u;
                            for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                                if (f = this.comp.threeDElements[t], "3d" === f.type) {
                                    if (p) {
                                        var m = this.mat.toCSS();
                                        u = f.container.style, u.transform = m, u.webkitTransform = m
                                    }
                                    this.pe._mdf && (c = f.perspectiveElem.style, c.perspective = this.pe.v + "px", c.webkitPerspective = this.pe.v + "px")
                                }
                            this.mat.clone(this._prevMat)
                        }
                    }
                    this._isFirstFrame = !1
                }, HCameraElement.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                    return null
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                    var t = this.globalData.getAssetsPath(this.assetData),
                        e = new Image;
                    this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
                    while (this.pendingElements.length) {
                        var t = this.pendingElements.pop();
                        t.checkParenting()
                    }
                }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
                    var i = t.getBaseElement();
                    if (i) {
                        var r = this.layers[e];
                        if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
                        else if (this.threeDElements) this.addTo3dContainer(i, e);
                        else {
                            var s, n, a, o = 0;
                            while (o < e) this.elements[o] && !0 !== this.elements[o] && this.elements[o].getBaseElement && (n = this.elements[o], a = this.layers[o].ddd ? this.getThreeDContainerByPos(o) : n.getBaseElement(), s = a || s), o += 1;
                            s ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, s) : r.ddd && this.supports3d || this.layerElement.appendChild(i)
                        }
                    }
                }, HybridRendererBase.prototype.createShape = function(t) {
                    return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
                }, HybridRendererBase.prototype.createText = function(t) {
                    return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
                }, HybridRendererBase.prototype.createCamera = function(t) {
                    return this.camera = new HCameraElement(t, this.globalData, this), this.camera
                }, HybridRendererBase.prototype.createImage = function(t) {
                    return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
                }, HybridRendererBase.prototype.createSolid = function(t) {
                    return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
                }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
                    var e = 0,
                        i = this.threeDElements.length;
                    while (e < i) {
                        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                        e += 1
                    }
                    return null
                }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
                    var i, r, s = createTag("div");
                    styleDiv(s);
                    var n = createTag("div");
                    if (styleDiv(n), "3d" === e) {
                        i = s.style, i.width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
                        var a = "50% 50%";
                        i.webkitTransformOrigin = a, i.mozTransformOrigin = a, i.transformOrigin = a, r = n.style;
                        var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        r.transform = o, r.webkitTransform = o
                    }
                    s.appendChild(n);
                    var h = {
                        container: n,
                        perspectiveElem: s,
                        startPos: t,
                        endPos: t,
                        type: e
                    };
                    return this.threeDElements.push(h), h
                }, HybridRendererBase.prototype.build3dContainers = function() {
                    var t, e, i = this.layers.length,
                        r = "";
                    for (t = 0; t < i; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== r && (r = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== r && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
                    for (i = this.threeDElements.length, t = i - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
                }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
                    var i = 0,
                        r = this.threeDElements.length;
                    while (i < r) {
                        if (e <= this.threeDElements[i].endPos) {
                            var s, n = this.threeDElements[i].startPos;
                            while (n < e) this.elements[n] && this.elements[n].getBaseElement && (s = this.elements[n].getBaseElement()), n += 1;
                            s ? this.threeDElements[i].container.insertBefore(t, s) : this.threeDElements[i].container.appendChild(t);
                            break
                        }
                        i += 1
                    }
                }, HybridRendererBase.prototype.configAnimation = function(t) {
                    var e = createTag("div"),
                        i = this.animationItem.wrapper,
                        r = e.style;
                    r.width = t.w + "px", r.height = t.h + "px", this.resizerElem = e, styleDiv(e), r.transformStyle = "flat", r.mozTransformStyle = "flat", r.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), r.overflow = "hidden";
                    var s = createNS("svg");
                    s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
                    var n = createNS("defs");
                    s.appendChild(n), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = n, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                }, HybridRendererBase.prototype.destroy = function() {
                    var t;
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                    var e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, HybridRendererBase.prototype.updateContainerSize = function() {
                    var t, e, i, r, s = this.animationItem.wrapper.offsetWidth,
                        n = this.animationItem.wrapper.offsetHeight,
                        a = s / n,
                        o = this.globalData.compSize.w / this.globalData.compSize.h;
                    o > a ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, i = 0, r = (n - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = n / this.globalData.compSize.h, e = n / this.globalData.compSize.h, i = (s - this.globalData.compSize.w * (n / this.globalData.compSize.h)) / 2, r = 0);
                    var h = this.resizerElem.style;
                    h.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)", h.transform = h.webkitTransform
                }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
                    this.resizerElem.style.display = "none"
                }, HybridRendererBase.prototype.show = function() {
                    this.resizerElem.style.display = "block"
                }, HybridRendererBase.prototype.initItems = function() {
                    if (this.buildAllItems(), this.camera) this.camera.setup();
                    else {
                        var t, e = this.globalData.compSize.w,
                            i = this.globalData.compSize.h,
                            r = this.threeDElements.length;
                        for (t = 0; t < r; t += 1) {
                            var s = this.threeDElements[t].perspectiveElem.style;
                            s.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px", s.perspective = s.webkitPerspective
                        }
                    }
                }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
                    var e, i = t.length,
                        r = createTag("div");
                    for (e = 0; e < i; e += 1)
                        if (t[e].xt) {
                            var s = this.createComp(t[e], r, this.globalData.comp, null);
                            s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
                        }
                }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                    this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                    var i, r = 0;
                    while (r < e) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
                    i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
                }, HCompElement.prototype.createComp = function(t) {
                    return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
                }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
                    return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
                };
                var CompExpressionInterface = function() {
                    return function(t) {
                        function e(e) {
                            var i = 0,
                                r = t.layers.length;
                            while (i < r) {
                                if (t.layers[i].nm === e || t.layers[i].ind === e) return t.elements[i].layerInterface;
                                i += 1
                            }
                            return null
                        }
                        return Object.defineProperty(e, "_name", {
                            value: t.data.nm
                        }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
                    }
                }();

                function _typeof$2(t) {
                    return _typeof$2 = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, _typeof$2(t)
                }

                function seedRandom(t, e) {
                    var i, r = this,
                        s = 256,
                        n = 6,
                        a = 52,
                        o = "random",
                        h = e.pow(s, n),
                        l = e.pow(2, a),
                        p = 2 * l,
                        f = s - 1;

                    function c(i, r, a) {
                        var f = [];
                        r = !0 === r ? {
                            entropy: !0
                        } : r || {};
                        var c = y(d(r.entropy ? [i, v(t)] : null === i ? g() : i, 3), f),
                            b = new u(f),
                            E = function() {
                                var t = b.g(n),
                                    e = h,
                                    i = 0;
                                while (t < l) t = (t + i) * s, e *= s, i = b.g(1);
                                while (t >= p) t /= 2, e /= 2, i >>>= 1;
                                return (t + i) / e
                            };
                        return E.int32 = function() {
                            return 0 | b.g(4)
                        }, E.quick = function() {
                            return b.g(4) / 4294967296
                        }, E["double"] = E, y(v(b.S), t), (r.pass || a || function(t, i, r, s) {
                            return s && (s.S && m(s, b), t.state = function() {
                                return m(b, {})
                            }), r ? (e[o] = t, i) : t
                        })(E, c, "global" in r ? r.global : this == e, r.state)
                    }

                    function u(t) {
                        var e, i = t.length,
                            r = this,
                            n = 0,
                            a = r.i = r.j = 0,
                            o = r.S = [];
                        i || (t = [i++]);
                        while (n < s) o[n] = n++;
                        for (n = 0; n < s; n++) o[n] = o[a = f & a + t[n % i] + (e = o[n])], o[a] = e;
                        r.g = function(t) {
                            var e, i = 0,
                                n = r.i,
                                a = r.j,
                                o = r.S;
                            while (t--) e = o[n = f & n + 1], i = i * s + o[f & (o[n] = o[a = f & a + e]) + (o[a] = e)];
                            return r.i = n, r.j = a, i
                        }
                    }

                    function m(t, e) {
                        return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                    }

                    function d(t, e) {
                        var i, r = [],
                            s = _typeof$2(t);
                        if (e && "object" == s)
                            for (i in t) try {
                                r.push(d(t[i], e - 1))
                            } catch (n) {}
                        return r.length ? r : "string" == s ? t : t + "\0"
                    }

                    function y(t, e) {
                        var i, r = t + "",
                            s = 0;
                        while (s < r.length) e[f & s] = f & (i ^= 19 * e[f & s]) + r.charCodeAt(s++);
                        return v(e)
                    }

                    function g() {
                        try {
                            if (i) return v(i.randomBytes(s));
                            var e = new Uint8Array(s);
                            return (r.crypto || r.msCrypto).getRandomValues(e), v(e)
                        } catch (o) {
                            var n = r.navigator,
                                a = n && n.plugins;
                            return [+new Date, r, a, r.screen, v(t)]
                        }
                    }

                    function v(t) {
                        return String.fromCharCode.apply(0, t)
                    }
                    e["seed" + o] = c, y(e.random(), t)
                }

                function initialize$2(t) {
                    seedRandom([], t)
                }
                var propTypes = {
                    SHAPE: "shape"
                };

                function _typeof$1(t) {
                    return _typeof$1 = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, _typeof$1(t)
                }
                var ExpressionManager = function() {
                        var ob = {},
                            Math = BMMath,
                            window = null,
                            document = null,
                            XMLHttpRequest = null,
                            fetch = null,
                            frames = null,
                            _lottieGlobal = {};

                        function resetFrame() {
                            _lottieGlobal = {}
                        }

                        function $bm_isInstanceOfArray(t) {
                            return t.constructor === Array || t.constructor === Float32Array
                        }

                        function isNumerable(t, e) {
                            return "number" === t || e instanceof Number || "boolean" === t || "string" === t
                        }

                        function $bm_neg(t) {
                            var e = _typeof$1(t);
                            if ("number" === e || t instanceof Number || "boolean" === e) return -t;
                            if ($bm_isInstanceOfArray(t)) {
                                var i, r = t.length,
                                    s = [];
                                for (i = 0; i < r; i += 1) s[i] = -t[i];
                                return s
                            }
                            return t.propType ? t.v : -t
                        }
                        initialize$2(BMMath);
                        var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                            easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                            easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                        function sum(t, e) {
                            var i = _typeof$1(t),
                                r = _typeof$1(e);
                            if (isNumerable(i, t) && isNumerable(r, e) || "string" === i || "string" === r) return t + e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return t = t.slice(0), t[0] += e, t;
                            if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t + e[0], e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                var s = 0,
                                    n = t.length,
                                    a = e.length,
                                    o = [];
                                while (s < n || s < a)("number" === typeof t[s] || t[s] instanceof Number) && ("number" === typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                                return o
                            }
                            return 0
                        }
                        var add = sum;

                        function sub(t, e) {
                            var i = _typeof$1(t),
                                r = _typeof$1(e);
                            if (isNumerable(i, t) && isNumerable(r, e)) return "string" === i && (t = parseInt(t, 10)), "string" === r && (e = parseInt(e, 10)), t - e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return t = t.slice(0), t[0] -= e, t;
                            if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t - e[0], e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                var s = 0,
                                    n = t.length,
                                    a = e.length,
                                    o = [];
                                while (s < n || s < a)("number" === typeof t[s] || t[s] instanceof Number) && ("number" === typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                                return o
                            }
                            return 0
                        }

                        function mul(t, e) {
                            var i, r, s, n = _typeof$1(t),
                                a = _typeof$1(e);
                            if (isNumerable(n, t) && isNumerable(a, e)) return t * e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                                for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t[r] * e;
                                return i
                            }
                            if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) {
                                for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t * e[r];
                                return i
                            }
                            return 0
                        }

                        function div(t, e) {
                            var i, r, s, n = _typeof$1(t),
                                a = _typeof$1(e);
                            if (isNumerable(n, t) && isNumerable(a, e)) return t / e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                                for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t[r] / e;
                                return i
                            }
                            if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) {
                                for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t / e[r];
                                return i
                            }
                            return 0
                        }

                        function mod(t, e) {
                            return "string" === typeof t && (t = parseInt(t, 10)), "string" === typeof e && (e = parseInt(e, 10)), t % e
                        }
                        var $bm_sum = sum,
                            $bm_sub = sub,
                            $bm_mul = mul,
                            $bm_div = div,
                            $bm_mod = mod;

                        function clamp(t, e, i) {
                            if (e > i) {
                                var r = i;
                                i = e, e = r
                            }
                            return Math.min(Math.max(t, e), i)
                        }

                        function radiansToDegrees(t) {
                            return t / degToRads
                        }
                        var radians_to_degrees = radiansToDegrees;

                        function degreesToRadians(t) {
                            return t * degToRads
                        }
                        var degrees_to_radians = radiansToDegrees,
                            helperLengthArray = [0, 0, 0, 0, 0, 0];

                        function length(t, e) {
                            if ("number" === typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                            var i;
                            e || (e = helperLengthArray);
                            var r = Math.min(t.length, e.length),
                                s = 0;
                            for (i = 0; i < r; i += 1) s += Math.pow(e[i] - t[i], 2);
                            return Math.sqrt(s)
                        }

                        function normalize(t) {
                            return div(t, length(t))
                        }

                        function rgbToHsl(t) {
                            var e, i, r = t[0],
                                s = t[1],
                                n = t[2],
                                a = Math.max(r, s, n),
                                o = Math.min(r, s, n),
                                h = (a + o) / 2;
                            if (a === o) e = 0, i = 0;
                            else {
                                var l = a - o;
                                switch (i = h > .5 ? l / (2 - a - o) : l / (a + o), a) {
                                    case r:
                                        e = (s - n) / l + (s < n ? 6 : 0);
                                        break;
                                    case s:
                                        e = (n - r) / l + 2;
                                        break;
                                    case n:
                                        e = (r - s) / l + 4;
                                        break;
                                    default:
                                        break
                                }
                                e /= 6
                            }
                            return [e, i, h, t[3]]
                        }

                        function hue2rgb(t, e, i) {
                            return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                        }

                        function hslToRgb(t) {
                            var e, i, r, s = t[0],
                                n = t[1],
                                a = t[2];
                            if (0 === n) e = a, r = a, i = a;
                            else {
                                var o = a < .5 ? a * (1 + n) : a + n - a * n,
                                    h = 2 * a - o;
                                e = hue2rgb(h, o, s + 1 / 3), i = hue2rgb(h, o, s), r = hue2rgb(h, o, s - 1 / 3)
                            }
                            return [e, i, r, t[3]]
                        }

                        function linear(t, e, i, r, s) {
                            if (void 0 !== r && void 0 !== s || (r = e, s = i, e = 0, i = 1), i < e) {
                                var n = i;
                                i = e, e = n
                            }
                            if (t <= e) return r;
                            if (t >= i) return s;
                            var a, o = i === e ? 0 : (t - e) / (i - e);
                            if (!r.length) return r + (s - r) * o;
                            var h = r.length,
                                l = createTypedArray("float32", h);
                            for (a = 0; a < h; a += 1) l[a] = r[a] + (s[a] - r[a]) * o;
                            return l
                        }

                        function random(t, e) {
                            if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                                var i, r = e.length;
                                t || (t = createTypedArray("float32", r));
                                var s = createTypedArray("float32", r),
                                    n = BMMath.random();
                                for (i = 0; i < r; i += 1) s[i] = t[i] + n * (e[i] - t[i]);
                                return s
                            }
                            void 0 === t && (t = 0);
                            var a = BMMath.random();
                            return t + a * (e - t)
                        }

                        function createPath(t, e, i, r) {
                            var s, n = t.length,
                                a = shapePool.newElement();
                            a.setPathData(!!r, n);
                            var o, h, l = [0, 0];
                            for (s = 0; s < n; s += 1) o = e && e[s] ? e[s] : l, h = i && i[s] ? i[s] : l, a.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
                            return a
                        }

                        function initiateExpression(elem, data, property) {
                            function noOp(t) {
                                return t
                            }
                            if (!elem.globalData.renderConfig.runExpressions) return noOp;
                            var val = data.x,
                                needsVelocity = /velocity(?![\w\d])/.test(val),
                                _needsRandom = -1 !== val.indexOf("random"),
                                elemType = elem.data.ty,
                                transform, $bm_transform, content, effect, thisProperty = property;
                            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                get: function() {
                                    return thisProperty.v
                                }
                            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                                width = elem.data.sw ? elem.data.sw : 0,
                                height = elem.data.sh ? elem.data.sh : 0,
                                name = elem.data.nm,
                                loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                                numKeys = property.kf ? data.k.length : 0,
                                active = !this.data || !0 !== this.data.hd,
                                wiggle = function(t, e) {
                                    var i, r, s = this.pv.length ? this.pv.length : 1,
                                        n = createTypedArray("float32", s);
                                    t = 5;
                                    var a = Math.floor(time * t);
                                    i = 0, r = 0;
                                    while (i < a) {
                                        for (r = 0; r < s; r += 1) n[r] += -e + 2 * e * BMMath.random();
                                        i += 1
                                    }
                                    var o = time * t,
                                        h = o - Math.floor(o),
                                        l = createTypedArray("float32", s);
                                    if (s > 1) {
                                        for (r = 0; r < s; r += 1) l[r] = this.pv[r] + n[r] + (-e + 2 * e * BMMath.random()) * h;
                                        return l
                                    }
                                    return this.pv + n[0] + (-e + 2 * e * BMMath.random()) * h
                                }.bind(this);

                            function loopInDuration(t, e) {
                                return loopIn(t, e, !0)
                            }

                            function loopOutDuration(t, e) {
                                return loopOut(t, e, !0)
                            }
                            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                                time, velocity, value, text, textIndex, textTotal, selectorValue;

                            function lookAt(t, e) {
                                var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                                    r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads,
                                    s = -Math.atan2(i[1], i[2]) / degToRads;
                                return [s, r, 0]
                            }

                            function easeOut(t, e, i, r, s) {
                                return applyEase(easeOutBez, t, e, i, r, s)
                            }

                            function easeIn(t, e, i, r, s) {
                                return applyEase(easeInBez, t, e, i, r, s)
                            }

                            function ease(t, e, i, r, s) {
                                return applyEase(easeInOutBez, t, e, i, r, s)
                            }

                            function applyEase(t, e, i, r, s, n) {
                                void 0 === s ? (s = i, n = r) : e = (e - i) / (r - i), e > 1 ? e = 1 : e < 0 && (e = 0);
                                var a = t(e);
                                if ($bm_isInstanceOfArray(s)) {
                                    var o, h = s.length,
                                        l = createTypedArray("float32", h);
                                    for (o = 0; o < h; o += 1) l[o] = (n[o] - s[o]) * a + s[o];
                                    return l
                                }
                                return (n - s) * a + s
                            }

                            function nearestKey(t) {
                                var e, i, r, s = data.k.length;
                                if (data.k.length && "number" !== typeof data.k[0])
                                    if (i = -1, t *= elem.comp.globalData.frameRate, t < data.k[0].t) i = 1, r = data.k[0].t;
                                    else {
                                        for (e = 0; e < s - 1; e += 1) {
                                            if (t === data.k[e].t) {
                                                i = e + 1, r = data.k[e].t;
                                                break
                                            }
                                            if (t > data.k[e].t && t < data.k[e + 1].t) {
                                                t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, r = data.k[e + 1].t) : (i = e + 1, r = data.k[e].t);
                                                break
                                            }
                                        } - 1 === i && (i = e + 1, r = data.k[e].t)
                                    }
                                else i = 0, r = 0;
                                var n = {};
                                return n.index = i, n.time = r / elem.comp.globalData.frameRate, n
                            }

                            function key(t) {
                                var e, i, r;
                                if (!data.k.length || "number" === typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                                t -= 1, e = {
                                    time: data.k[t].t / elem.comp.globalData.frameRate,
                                    value: []
                                };
                                var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                                for (r = s.length, i = 0; i < r; i += 1) e[i] = s[i], e.value[i] = s[i];
                                return e
                            }

                            function framesToTime(t, e) {
                                return e || (e = elem.comp.globalData.frameRate), t / e
                            }

                            function timeToFrames(t, e) {
                                return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                            }

                            function seedRandom(t) {
                                BMMath.seedrandom(randSeed + t)
                            }

                            function sourceRectAtTime() {
                                return elem.sourceRectAtTime()
                            }

                            function substring(t, e) {
                                return "string" === typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                            }

                            function substr(t, e) {
                                return "string" === typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                            }

                            function posterizeTime(t) {
                                time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                            }
                            var index = elem.data.ind,
                                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                                parent, randSeed = Math.floor(1e6 * Math.random()),
                                globalData = elem.globalData;

                            function executeExpression(t) {
                                return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !(!elem.hierarchy || !elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt)
                            }
                            return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                        }
                        return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
                    }(),
                    Expressions = function() {
                        var t = {};

                        function e(t) {
                            var e = 0,
                                i = [];

                            function r() {
                                e += 1
                            }

                            function s() {
                                e -= 1, 0 === e && a()
                            }

                            function n(t) {
                                -1 === i.indexOf(t) && i.push(t)
                            }

                            function a() {
                                var t, e = i.length;
                                for (t = 0; t < e; t += 1) i[t].release();
                                i.length = 0
                            }
                            t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = r, t.renderer.globalData.popExpression = s, t.renderer.globalData.registerExpressionProperty = n
                        }
                        return t.initExpressions = e, t.resetFrame = ExpressionManager.resetFrame, t
                    }(),
                    MaskManagerInterface = function() {
                        function t(t, e) {
                            this._mask = t, this._data = e
                        }
                        Object.defineProperty(t.prototype, "maskPath", {
                            get: function() {
                                return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                            }
                        }), Object.defineProperty(t.prototype, "maskOpacity", {
                            get: function() {
                                return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                            }
                        });
                        var e = function(e) {
                            var i, r = createSizedArray(e.viewData.length),
                                s = e.viewData.length;
                            for (i = 0; i < s; i += 1) r[i] = new t(e.viewData[i], e.masksProperties[i]);
                            var n = function(t) {
                                i = 0;
                                while (i < s) {
                                    if (e.masksProperties[i].nm === t) return r[i];
                                    i += 1
                                }
                                return null
                            };
                            return n
                        };
                        return e
                    }(),
                    ExpressionPropertyInterface = function() {
                        var t = {
                                pv: 0,
                                v: 0,
                                mult: 1
                            },
                            e = {
                                pv: [0, 0, 0],
                                v: [0, 0, 0],
                                mult: 1
                            };

                        function i(t, e, i) {
                            Object.defineProperty(t, "velocity", {
                                get: function() {
                                    return e.getVelocityAtTime(e.comp.currentFrame)
                                }
                            }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(r) {
                                if (!t.numKeys) return 0;
                                var s = "";
                                s = "s" in e.keyframes[r - 1] ? e.keyframes[r - 1].s : "e" in e.keyframes[r - 2] ? e.keyframes[r - 2].e : e.keyframes[r - 2].s;
                                var n = "unidimensional" === i ? new Number(s) : Object.assign({}, s);
                                return n.time = e.keyframes[r - 1].t / e.elem.comp.globalData.frameRate, n.value = "unidimensional" === i ? s[0] : s, n
                            }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                        }

                        function r(e) {
                            e && "pv" in e || (e = t);
                            var r = 1 / e.mult,
                                s = e.pv * r,
                                n = new Number(s);
                            return n.value = s, i(n, e, "unidimensional"),
                                function() {
                                    return e.k && e.getValue(), s = e.v * r, n.value !== s && (n = new Number(s), n.value = s, i(n, e, "unidimensional")), n
                                }
                        }

                        function s(t) {
                            t && "pv" in t || (t = e);
                            var r = 1 / t.mult,
                                s = t.data && t.data.l || t.pv.length,
                                n = createTypedArray("float32", s),
                                a = createTypedArray("float32", s);
                            return n.value = a, i(n, t, "multidimensional"),
                                function() {
                                    t.k && t.getValue();
                                    for (var e = 0; e < s; e += 1) a[e] = t.v[e] * r, n[e] = a[e];
                                    return n
                                }
                        }

                        function n() {
                            return t
                        }
                        return function(t) {
                            return t ? "unidimensional" === t.propType ? r(t) : s(t) : n
                        }
                    }(),
                    TransformExpressionInterface = function() {
                        return function(t) {
                            function e(t) {
                                switch (t) {
                                    case "scale":
                                    case "Scale":
                                    case "ADBE Scale":
                                    case 6:
                                        return e.scale;
                                    case "rotation":
                                    case "Rotation":
                                    case "ADBE Rotation":
                                    case "ADBE Rotate Z":
                                    case 10:
                                        return e.rotation;
                                    case "ADBE Rotate X":
                                        return e.xRotation;
                                    case "ADBE Rotate Y":
                                        return e.yRotation;
                                    case "position":
                                    case "Position":
                                    case "ADBE Position":
                                    case 2:
                                        return e.position;
                                    case "ADBE Position_0":
                                        return e.xPosition;
                                    case "ADBE Position_1":
                                        return e.yPosition;
                                    case "ADBE Position_2":
                                        return e.zPosition;
                                    case "anchorPoint":
                                    case "AnchorPoint":
                                    case "Anchor Point":
                                    case "ADBE AnchorPoint":
                                    case 1:
                                        return e.anchorPoint;
                                    case "opacity":
                                    case "Opacity":
                                    case 11:
                                        return e.opacity;
                                    default:
                                        return null
                                }
                            }
                            var i, r, s, n;
                            return Object.defineProperty(e, "rotation", {
                                get: ExpressionPropertyInterface(t.r || t.rz)
                            }), Object.defineProperty(e, "zRotation", {
                                get: ExpressionPropertyInterface(t.rz || t.r)
                            }), Object.defineProperty(e, "xRotation", {
                                get: ExpressionPropertyInterface(t.rx)
                            }), Object.defineProperty(e, "yRotation", {
                                get: ExpressionPropertyInterface(t.ry)
                            }), Object.defineProperty(e, "scale", {
                                get: ExpressionPropertyInterface(t.s)
                            }), t.p ? n = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), r = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                                get: function() {
                                    return t.p ? n() : [i(), r(), s ? s() : 0]
                                }
                            }), Object.defineProperty(e, "xPosition", {
                                get: ExpressionPropertyInterface(t.px)
                            }), Object.defineProperty(e, "yPosition", {
                                get: ExpressionPropertyInterface(t.py)
                            }), Object.defineProperty(e, "zPosition", {
                                get: ExpressionPropertyInterface(t.pz)
                            }), Object.defineProperty(e, "anchorPoint", {
                                get: ExpressionPropertyInterface(t.a)
                            }), Object.defineProperty(e, "opacity", {
                                get: ExpressionPropertyInterface(t.o)
                            }), Object.defineProperty(e, "skew", {
                                get: ExpressionPropertyInterface(t.sk)
                            }), Object.defineProperty(e, "skewAxis", {
                                get: ExpressionPropertyInterface(t.sa)
                            }), Object.defineProperty(e, "orientation", {
                                get: ExpressionPropertyInterface(t.or)
                            }), e
                        }
                    }(),
                    LayerExpressionInterface = function() {
                        function t(t) {
                            var e = new Matrix;
                            if (void 0 !== t) {
                                var i = this._elem.finalTransform.mProp.getValueAtTime(t);
                                i.clone(e)
                            } else {
                                var r = this._elem.finalTransform.mProp;
                                r.applyToMatrix(e)
                            }
                            return e
                        }

                        function e(t, e) {
                            var i = this.getMatrix(e);
                            return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.applyPoint(i, t)
                        }

                        function i(t, e) {
                            var i = this.getMatrix(e);
                            return this.applyPoint(i, t)
                        }

                        function r(t, e) {
                            var i = this.getMatrix(e);
                            return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.invertPoint(i, t)
                        }

                        function s(t, e) {
                            var i = this.getMatrix(e);
                            return this.invertPoint(i, t)
                        }

                        function n(t, e) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var i, r = this._elem.hierarchy.length;
                                for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                            }
                            return t.applyToPointArray(e[0], e[1], e[2] || 0)
                        }

                        function a(t, e) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var i, r = this._elem.hierarchy.length;
                                for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                            }
                            return t.inversePoint(e)
                        }

                        function o(t) {
                            var e = new Matrix;
                            if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                                var i, r = this._elem.hierarchy.length;
                                for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
                                return e.inversePoint(t)
                            }
                            return e.inversePoint(t)
                        }

                        function h() {
                            return [1, 1, 1, 1]
                        }
                        return function(l) {
                            var p;

                            function f(t) {
                                u.mask = new MaskManagerInterface(t, l)
                            }

                            function c(t) {
                                u.effect = t
                            }

                            function u(t) {
                                switch (t) {
                                    case "ADBE Root Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return u.shapeInterface;
                                    case 1:
                                    case 6:
                                    case "Transform":
                                    case "transform":
                                    case "ADBE Transform Group":
                                        return p;
                                    case 4:
                                    case "ADBE Effect Parade":
                                    case "effects":
                                    case "Effects":
                                        return u.effect;
                                    case "ADBE Text Properties":
                                        return u.textInterface;
                                    default:
                                        return null
                                }
                            }
                            u.getMatrix = t, u.invertPoint = a, u.applyPoint = n, u.toWorld = i, u.toWorldVec = e, u.fromWorld = s, u.fromWorldVec = r, u.toComp = i, u.fromComp = o, u.sampleImage = h, u.sourceRectAtTime = l.sourceRectAtTime.bind(l), u._elem = l, p = TransformExpressionInterface(l.finalTransform.mProp);
                            var m = getDescriptor(p, "anchorPoint");
                            return Object.defineProperties(u, {
                                hasParent: {
                                    get: function() {
                                        return l.hierarchy.length
                                    }
                                },
                                parent: {
                                    get: function() {
                                        return l.hierarchy[0].layerInterface
                                    }
                                },
                                rotation: getDescriptor(p, "rotation"),
                                scale: getDescriptor(p, "scale"),
                                position: getDescriptor(p, "position"),
                                opacity: getDescriptor(p, "opacity"),
                                anchorPoint: m,
                                anchor_point: m,
                                transform: {
                                    get: function() {
                                        return p
                                    }
                                },
                                active: {
                                    get: function() {
                                        return l.isInRange
                                    }
                                }
                            }), u.startTime = l.data.st, u.index = l.data.ind, u.source = l.data.refId, u.height = 0 === l.data.ty ? l.data.h : 100, u.width = 0 === l.data.ty ? l.data.w : 100, u.inPoint = l.data.ip / l.comp.globalData.frameRate, u.outPoint = l.data.op / l.comp.globalData.frameRate, u._name = l.data.nm, u.registerMaskInterface = f, u.registerEffectsInterface = c, u
                        }
                    }(),
                    propertyGroupFactory = function() {
                        return function(t, e) {
                            return function(i) {
                                return i = void 0 === i ? 1 : i, i <= 0 ? t : e(i - 1)
                            }
                        }
                    }(),
                    PropertyInterface = function() {
                        return function(t, e) {
                            var i = {
                                _name: t
                            };

                            function r(t) {
                                return t = void 0 === t ? 1 : t, t <= 0 ? i : e(t - 1)
                            }
                            return r
                        }
                    }(),
                    EffectsExpressionInterface = function() {
                        var t = {
                            createEffectsInterface: e
                        };

                        function e(t, e) {
                            if (t.effectsManager) {
                                var r, s = [],
                                    n = t.data.ef,
                                    a = t.effectsManager.effectElements.length;
                                for (r = 0; r < a; r += 1) s.push(i(n[r], t.effectsManager.effectElements[r], e, t));
                                var o = t.data.ef || [],
                                    h = function(t) {
                                        r = 0, a = o.length;
                                        while (r < a) {
                                            if (t === o[r].nm || t === o[r].mn || t === o[r].ix) return s[r];
                                            r += 1
                                        }
                                        return null
                                    };
                                return Object.defineProperty(h, "numProperties", {
                                    get: function() {
                                        return o.length
                                    }
                                }), h
                            }
                            return null
                        }

                        function i(t, e, s, n) {
                            function a(e) {
                                var i = t.ef,
                                    r = 0,
                                    s = i.length;
                                while (r < s) {
                                    if (e === i[r].nm || e === i[r].mn || e === i[r].ix) return 5 === i[r].ty ? l[r] : l[r]();
                                    r += 1
                                }
                                throw new Error
                            }
                            var o, h = propertyGroupFactory(a, s),
                                l = [],
                                p = t.ef.length;
                            for (o = 0; o < p; o += 1) 5 === t.ef[o].ty ? l.push(i(t.ef[o], e.effectElements[o], e.effectElements[o].propertyGroup, n)) : l.push(r(e.effectElements[o], t.ef[o].ty, n, h));
                            return "ADBE Color Control" === t.mn && Object.defineProperty(a, "color", {
                                get: function() {
                                    return l[0]()
                                }
                            }), Object.defineProperties(a, {
                                numProperties: {
                                    get: function() {
                                        return t.np
                                    }
                                },
                                _name: {
                                    value: t.nm
                                },
                                propertyGroup: {
                                    value: h
                                }
                            }), a.enabled = 0 !== t.en, a.active = a.enabled, a
                        }

                        function r(t, e, i, r) {
                            var s = ExpressionPropertyInterface(t.p);

                            function n() {
                                return 10 === e ? i.comp.compInterface(t.p.v) : s()
                            }
                            return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", r)), n
                        }
                        return t
                    }(),
                    ShapePathInterface = function() {
                        return function(t, e, i) {
                            var r = e.sh;

                            function s(t) {
                                return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? s.path : null
                            }
                            var n = propertyGroupFactory(s, i);
                            return r.setGroupProperty(PropertyInterface("Path", n)), Object.defineProperties(s, {
                                path: {
                                    get: function() {
                                        return r.k && r.getValue(), r
                                    }
                                },
                                shape: {
                                    get: function() {
                                        return r.k && r.getValue(), r
                                    }
                                },
                                _name: {
                                    value: t.nm
                                },
                                ix: {
                                    value: t.ix
                                },
                                propertyIndex: {
                                    value: t.ix
                                },
                                mn: {
                                    value: t.mn
                                },
                                propertyGroup: {
                                    value: i
                                }
                            }), s
                        }
                    }(),
                    ShapeExpressionInterface = function() {
                        function t(t, e, h) {
                            var m, d = [],
                                y = t ? t.length : 0;
                            for (m = 0; m < y; m += 1) "gr" === t[m].ty ? d.push(i(t[m], e[m], h)) : "fl" === t[m].ty ? d.push(r(t[m], e[m], h)) : "st" === t[m].ty ? d.push(a(t[m], e[m], h)) : "tm" === t[m].ty ? d.push(o(t[m], e[m], h)) : "tr" === t[m].ty || ("el" === t[m].ty ? d.push(l(t[m], e[m], h)) : "sr" === t[m].ty ? d.push(p(t[m], e[m], h)) : "sh" === t[m].ty ? d.push(ShapePathInterface(t[m], e[m], h)) : "rc" === t[m].ty ? d.push(f(t[m], e[m], h)) : "rd" === t[m].ty ? d.push(c(t[m], e[m], h)) : "rp" === t[m].ty ? d.push(u(t[m], e[m], h)) : "gf" === t[m].ty ? d.push(s(t[m], e[m], h)) : d.push(n(t[m], e[m], h)));
                            return d
                        }

                        function e(e, i, r) {
                            var s, n = function(t) {
                                var e = 0,
                                    i = s.length;
                                while (e < i) {
                                    if (s[e]._name === t || s[e].mn === t || s[e].propertyIndex === t || s[e].ix === t || s[e].ind === t) return s[e];
                                    e += 1
                                }
                                return "number" === typeof t ? s[t - 1] : null
                            };
                            n.propertyGroup = propertyGroupFactory(n, r), s = t(e.it, i.it, n.propertyGroup), n.numProperties = s.length;
                            var a = h(e.it[e.it.length - 1], i.it[i.it.length - 1], n.propertyGroup);
                            return n.transform = a, n.propertyIndex = e.cix, n._name = e.nm, n
                        }

                        function i(t, i, r) {
                            var s = function(t) {
                                switch (t) {
                                    case "ADBE Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return s.content;
                                    default:
                                        return s.transform
                                }
                            };
                            s.propertyGroup = propertyGroupFactory(s, r);
                            var n = e(t, i, s.propertyGroup),
                                a = h(t.it[t.it.length - 1], i.it[i.it.length - 1], s.propertyGroup);
                            return s.content = n, s.transform = a, Object.defineProperty(s, "_name", {
                                get: function() {
                                    return t.nm
                                }
                            }), s.numProperties = t.np, s.propertyIndex = t.ix, s.nm = t.nm, s.mn = t.mn, s
                        }

                        function r(t, e, i) {
                            function r(t) {
                                return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : null
                            }
                            return Object.defineProperties(r, {
                                color: {
                                    get: ExpressionPropertyInterface(e.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                _name: {
                                    value: t.nm
                                },
                                mn: {
                                    value: t.mn
                                }
                            }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r
                        }

                        function s(t, e, i) {
                            function r(t) {
                                return "Start Point" === t || "start point" === t ? r.startPoint : "End Point" === t || "end point" === t ? r.endPoint : "Opacity" === t || "opacity" === t ? r.opacity : null
                            }
                            return Object.defineProperties(r, {
                                startPoint: {
                                    get: ExpressionPropertyInterface(e.s)
                                },
                                endPoint: {
                                    get: ExpressionPropertyInterface(e.e)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                type: {
                                    get: function() {
                                        return "a"
                                    }
                                },
                                _name: {
                                    value: t.nm
                                },
                                mn: {
                                    value: t.mn
                                }
                            }), e.s.setGroupProperty(PropertyInterface("Start Point", i)), e.e.setGroupProperty(PropertyInterface("End Point", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r
                        }

                        function n() {
                            function t() {
                                return null
                            }
                            return t
                        }

                        function a(t, e, i) {
                            var r, s = propertyGroupFactory(l, i),
                                n = propertyGroupFactory(h, s);

                            function a(i) {
                                Object.defineProperty(h, t.d[i].nm, {
                                    get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                                })
                            }
                            var o = t.d ? t.d.length : 0,
                                h = {};
                            for (r = 0; r < o; r += 1) a(r), e.d.dataProps[r].p.setGroupProperty(n);

                            function l(t) {
                                return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null
                            }
                            return Object.defineProperties(l, {
                                color: {
                                    get: ExpressionPropertyInterface(e.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                strokeWidth: {
                                    get: ExpressionPropertyInterface(e.w)
                                },
                                dash: {
                                    get: function() {
                                        return h
                                    }
                                },
                                _name: {
                                    value: t.nm
                                },
                                mn: {
                                    value: t.mn
                                }
                            }), e.c.setGroupProperty(PropertyInterface("Color", s)), e.o.setGroupProperty(PropertyInterface("Opacity", s)), e.w.setGroupProperty(PropertyInterface("Stroke Width", s)), l
                        }

                        function o(t, e, i) {
                            function r(e) {
                                return e === t.e.ix || "End" === e || "end" === e ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : null
                            }
                            var s = propertyGroupFactory(r, i);
                            return r.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", s)), e.e.setGroupProperty(PropertyInterface("End", s)), e.o.setGroupProperty(PropertyInterface("Offset", s)), r.propertyIndex = t.ix, r.propertyGroup = i, Object.defineProperties(r, {
                                start: {
                                    get: ExpressionPropertyInterface(e.s)
                                },
                                end: {
                                    get: ExpressionPropertyInterface(e.e)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.mn = t.mn, r
                        }

                        function h(t, e, i) {
                            function r(e) {
                                return t.a.ix === e || "Anchor Point" === e ? r.anchorPoint : t.o.ix === e || "Opacity" === e ? r.opacity : t.p.ix === e || "Position" === e ? r.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? r.rotation : t.s.ix === e || "Scale" === e ? r.scale : t.sk && t.sk.ix === e || "Skew" === e ? r.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? r.skewAxis : null
                            }
                            var s = propertyGroupFactory(r, i);
                            return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", s)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", s)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", s)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", s)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", s)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", s)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", s))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", s)), Object.defineProperties(r, {
                                opacity: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.o)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.p)
                                },
                                anchorPoint: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.a)
                                },
                                scale: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.s)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.r)
                                },
                                skew: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.sk)
                                },
                                skewAxis: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.sa)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.ty = "tr", r.mn = t.mn, r.propertyGroup = i, r
                        }

                        function l(t, e, i) {
                            function r(e) {
                                return t.p.ix === e ? r.position : t.s.ix === e ? r.size : null
                            }
                            var s = propertyGroupFactory(r, i);
                            r.propertyIndex = t.ix;
                            var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                            return n.s.setGroupProperty(PropertyInterface("Size", s)), n.p.setGroupProperty(PropertyInterface("Position", s)), Object.defineProperties(r, {
                                size: {
                                    get: ExpressionPropertyInterface(n.s)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(n.p)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.mn = t.mn, r
                        }

                        function p(t, e, i) {
                            function r(e) {
                                return t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.pt.ix === e ? r.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? r.outerRadius : t.os.ix === e ? r.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? r.innerRoundness : null : r.innerRadius
                            }
                            var s = propertyGroupFactory(r, i),
                                n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                            return r.propertyIndex = t.ix, n.or.setGroupProperty(PropertyInterface("Outer Radius", s)), n.os.setGroupProperty(PropertyInterface("Outer Roundness", s)), n.pt.setGroupProperty(PropertyInterface("Points", s)), n.p.setGroupProperty(PropertyInterface("Position", s)), n.r.setGroupProperty(PropertyInterface("Rotation", s)), t.ir && (n.ir.setGroupProperty(PropertyInterface("Inner Radius", s)), n.is.setGroupProperty(PropertyInterface("Inner Roundness", s))), Object.defineProperties(r, {
                                position: {
                                    get: ExpressionPropertyInterface(n.p)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(n.r)
                                },
                                points: {
                                    get: ExpressionPropertyInterface(n.pt)
                                },
                                outerRadius: {
                                    get: ExpressionPropertyInterface(n.or)
                                },
                                outerRoundness: {
                                    get: ExpressionPropertyInterface(n.os)
                                },
                                innerRadius: {
                                    get: ExpressionPropertyInterface(n.ir)
                                },
                                innerRoundness: {
                                    get: ExpressionPropertyInterface(n.is)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.mn = t.mn, r
                        }

                        function f(t, e, i) {
                            function r(e) {
                                return t.p.ix === e ? r.position : t.r.ix === e ? r.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? r.size : null
                            }
                            var s = propertyGroupFactory(r, i),
                                n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                            return r.propertyIndex = t.ix, n.p.setGroupProperty(PropertyInterface("Position", s)), n.s.setGroupProperty(PropertyInterface("Size", s)), n.r.setGroupProperty(PropertyInterface("Rotation", s)), Object.defineProperties(r, {
                                position: {
                                    get: ExpressionPropertyInterface(n.p)
                                },
                                roundness: {
                                    get: ExpressionPropertyInterface(n.r)
                                },
                                size: {
                                    get: ExpressionPropertyInterface(n.s)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.mn = t.mn, r
                        }

                        function c(t, e, i) {
                            function r(e) {
                                return t.r.ix === e || "Round Corners 1" === e ? r.radius : null
                            }
                            var s = propertyGroupFactory(r, i),
                                n = e;
                            return r.propertyIndex = t.ix, n.rd.setGroupProperty(PropertyInterface("Radius", s)), Object.defineProperties(r, {
                                radius: {
                                    get: ExpressionPropertyInterface(n.rd)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.mn = t.mn, r
                        }

                        function u(t, e, i) {
                            function r(e) {
                                return t.c.ix === e || "Copies" === e ? r.copies : t.o.ix === e || "Offset" === e ? r.offset : null
                            }
                            var s = propertyGroupFactory(r, i),
                                n = e;
                            return r.propertyIndex = t.ix, n.c.setGroupProperty(PropertyInterface("Copies", s)), n.o.setGroupProperty(PropertyInterface("Offset", s)), Object.defineProperties(r, {
                                copies: {
                                    get: ExpressionPropertyInterface(n.c)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(n.o)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.mn = t.mn, r
                        }
                        return function(e, i, r) {
                            var s;

                            function n(t) {
                                if ("number" === typeof t) return t = void 0 === t ? 1 : t, 0 === t ? r : s[t - 1];
                                var e = 0,
                                    i = s.length;
                                while (e < i) {
                                    if (s[e]._name === t) return s[e];
                                    e += 1
                                }
                                return null
                            }

                            function a() {
                                return r
                            }
                            return n.propertyGroup = propertyGroupFactory(n, a), s = t(e, i, n.propertyGroup), n.numProperties = s.length, n._name = "Contents", n
                        }
                    }(),
                    TextExpressionInterface = function() {
                        return function(t) {
                            var e;

                            function i(t) {
                                switch (t) {
                                    case "ADBE Text Document":
                                        return i.sourceText;
                                    default:
                                        return null
                                }
                            }
                            return Object.defineProperty(i, "sourceText", {
                                get: function() {
                                    t.textProperty.getValue();
                                    var i = t.textProperty.currentData.t;
                                    return e && i === e.value || (e = new String(i), e.value = i || new String(i), Object.defineProperty(e, "style", {
                                        get: function() {
                                            return {
                                                fillColor: t.textProperty.currentData.fc
                                            }
                                        }
                                    })), e
                                }
                            }), i
                        }
                    }();

                function _typeof(t) {
                    return _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, _typeof(t)
                }
                var FootageInterface = function() {
                        var t = function(t) {
                                var e = "",
                                    i = t.getFootageData();

                                function r() {
                                    return e = "", i = t.getFootageData(), s
                                }

                                function s(t) {
                                    if (i[t]) return e = t, i = i[t], "object" === _typeof(i) ? s : i;
                                    var r = t.indexOf(e);
                                    if (-1 !== r) {
                                        var n = parseInt(t.substr(r + e.length), 10);
                                        return i = i[n], "object" === _typeof(i) ? s : i
                                    }
                                    return ""
                                }
                                return r
                            },
                            e = function(e) {
                                function i(t) {
                                    return "Outline" === t ? i.outlineInterface() : null
                                }
                                return i._name = "Outline", i.outlineInterface = t(e), i
                            };
                        return function(t) {
                            function i(t) {
                                return "Data" === t ? i.dataInterface : null
                            }
                            return i._name = "Data", i.dataInterface = e(t), i
                        }
                    }(),
                    interfaces = {
                        layer: LayerExpressionInterface,
                        effects: EffectsExpressionInterface,
                        comp: CompExpressionInterface,
                        shape: ShapeExpressionInterface,
                        text: TextExpressionInterface,
                        footage: FootageInterface
                    };

                function getInterface(t) {
                    return interfaces[t] || null
                }
                var expressionHelpers = function() {
                    function t(t, e, i) {
                        e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
                    }

                    function e(t) {
                        return t *= this.elem.globalData.frameRate, t -= this.offsetTime, t !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                    }

                    function i(t) {
                        var e = -.01,
                            i = this.getValueAtTime(t),
                            r = this.getValueAtTime(t + e),
                            s = 0;
                        if (i.length) {
                            var n;
                            for (n = 0; n < i.length; n += 1) s += Math.pow(r[n] - i[n], 2);
                            s = 100 * Math.sqrt(s)
                        } else s = 0;
                        return s
                    }

                    function r(t) {
                        if (void 0 !== this.vel) return this.vel;
                        var e, i, r = -.001,
                            s = this.getValueAtTime(t),
                            n = this.getValueAtTime(t + r);
                        if (s.length)
                            for (e = createTypedArray("float32", s.length), i = 0; i < s.length; i += 1) e[i] = (n[i] - s[i]) / r;
                        else e = (n - s) / r;
                        return e
                    }

                    function s() {
                        return this.pv
                    }

                    function n(t) {
                        this.propertyGroup = t
                    }
                    return {
                        searchExpressions: t,
                        getSpeedAtTime: i,
                        getVelocityAtTime: r,
                        getValueAtTime: e,
                        getStaticValueAtTime: s,
                        setGroupProperty: n
                    }
                }();

                function addPropertyDecorator() {
                    function t(t, e, i) {
                        if (!this.k || !this.keyframes) return this.pv;
                        t = t ? t.toLowerCase() : "";
                        var r, s, n, a, o, h = this.comp.renderedFrame,
                            l = this.keyframes,
                            p = l[l.length - 1].t;
                        if (h <= p) return this.pv;
                        if (i ? (r = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip), s = p - r) : ((!e || e > l.length - 1) && (e = l.length - 1), s = l[l.length - 1 - e].t, r = p - s), "pingpong" === t) {
                            var f = Math.floor((h - s) / r);
                            if (f % 2 !== 0) return this.getValueAtTime((r - (h - s) % r + s) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === t) {
                                var c = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                                    u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    m = this.getValueAtTime(((h - s) % r + s) / this.comp.globalData.frameRate, 0),
                                    d = Math.floor((h - s) / r);
                                if (this.pv.length) {
                                    for (o = new Array(c.length), a = o.length, n = 0; n < a; n += 1) o[n] = (u[n] - c[n]) * d + m[n];
                                    return o
                                }
                                return (u - c) * d + m
                            }
                            if ("continue" === t) {
                                var y = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    g = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (o = new Array(y.length), a = o.length, n = 0; n < a; n += 1) o[n] = y[n] + (y[n] - g[n]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                                    return o
                                }
                                return y + (h - p) / .001 * (y - g)
                            }
                        }
                        return this.getValueAtTime(((h - s) % r + s) / this.comp.globalData.frameRate, 0)
                    }

                    function e(t, e, i) {
                        if (!this.k) return this.pv;
                        t = t ? t.toLowerCase() : "";
                        var r, s, n, a, o, h = this.comp.renderedFrame,
                            l = this.keyframes,
                            p = l[0].t;
                        if (h >= p) return this.pv;
                        if (i ? (r = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p), s = p + r) : ((!e || e > l.length - 1) && (e = l.length - 1), s = l[e].t, r = s - p), "pingpong" === t) {
                            var f = Math.floor((p - h) / r);
                            if (f % 2 === 0) return this.getValueAtTime(((p - h) % r + p) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === t) {
                                var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    u = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                                    m = this.getValueAtTime((r - (p - h) % r + p) / this.comp.globalData.frameRate, 0),
                                    d = Math.floor((p - h) / r) + 1;
                                if (this.pv.length) {
                                    for (o = new Array(c.length), a = o.length, n = 0; n < a; n += 1) o[n] = m[n] - (u[n] - c[n]) * d;
                                    return o
                                }
                                return m - (u - c) * d
                            }
                            if ("continue" === t) {
                                var y = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    g = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (o = new Array(y.length), a = o.length, n = 0; n < a; n += 1) o[n] = y[n] + (y[n] - g[n]) * (p - h) / .001;
                                    return o
                                }
                                return y + (y - g) * (p - h) / .001
                            }
                        }
                        return this.getValueAtTime((r - ((p - h) % r + p)) / this.comp.globalData.frameRate, 0)
                    }

                    function i(t, e) {
                        if (!this.k) return this.pv;
                        if (t = .5 * (t || .4), e = Math.floor(e || 5), e <= 1) return this.pv;
                        var i, r, s = this.comp.renderedFrame / this.comp.globalData.frameRate,
                            n = s - t,
                            a = s + t,
                            o = e > 1 ? (a - n) / (e - 1) : 1,
                            h = 0,
                            l = 0;
                        i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0;
                        while (h < e) {
                            if (r = this.getValueAtTime(n + h * o), this.pv.length)
                                for (l = 0; l < this.pv.length; l += 1) i[l] += r[l];
                            else i += r;
                            h += 1
                        }
                        if (this.pv.length)
                            for (l = 0; l < this.pv.length; l += 1) i[l] /= e;
                        else i /= e;
                        return i
                    }

                    function r(t) {
                        this._transformCachingAtTime || (this._transformCachingAtTime = {
                            v: new Matrix
                        });
                        var e = this._transformCachingAtTime.v;
                        if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                            var i = this.a.getValueAtTime(t);
                            e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
                        }
                        if (this.appliedTransformations < 2) {
                            var r = this.s.getValueAtTime(t);
                            e.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult)
                        }
                        if (this.sk && this.appliedTransformations < 3) {
                            var s = this.sk.getValueAtTime(t),
                                n = this.sa.getValueAtTime(t);
                            e.skewFromAxis(-s * this.sk.mult, n * this.sa.mult)
                        }
                        if (this.r && this.appliedTransformations < 4) {
                            var a = this.r.getValueAtTime(t);
                            e.rotate(-a * this.r.mult)
                        } else if (!this.r && this.appliedTransformations < 4) {
                            var o = this.rz.getValueAtTime(t),
                                h = this.ry.getValueAtTime(t),
                                l = this.rx.getValueAtTime(t),
                                p = this.or.getValueAtTime(t);
                            e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
                        }
                        if (this.data.p && this.data.p.s) {
                            var f = this.px.getValueAtTime(t),
                                c = this.py.getValueAtTime(t);
                            if (this.data.p.z) {
                                var u = this.pz.getValueAtTime(t);
                                e.translate(f * this.px.mult, c * this.py.mult, -u * this.pz.mult)
                            } else e.translate(f * this.px.mult, c * this.py.mult, 0)
                        } else {
                            var m = this.p.getValueAtTime(t);
                            e.translate(m[0] * this.p.mult, m[1] * this.p.mult, -m[2] * this.p.mult)
                        }
                        return e
                    }

                    function s() {
                        return this.v.clone(new Matrix)
                    }
                    var n = TransformPropertyFactory.getTransformProperty;
                    TransformPropertyFactory.getTransformProperty = function(t, e, i) {
                        var a = n(t, e, i);
                        return a.dynamicProperties.length ? a.getValueAtTime = r.bind(a) : a.getValueAtTime = s.bind(a), a.setGroupProperty = expressionHelpers.setGroupProperty, a
                    };
                    var a = PropertyFactory.getProp;

                    function o(t) {
                        return this._cachingAtTime || (this._cachingAtTime = {
                            shapeValue: shapePool.clone(this.pv),
                            lastIndex: 0,
                            lastTime: initialDefaultFrame
                        }), t *= this.elem.globalData.frameRate, t -= this.offsetTime, t !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                    }
                    PropertyFactory.getProp = function(r, s, n, o, h) {
                        var l = a(r, s, n, o, h);
                        l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = i, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === s.a ? s.k.length : 0, l.propertyIndex = s.ix;
                        var p = 0;
                        return 0 !== n && (p = createTypedArray("float32", 1 === s.a ? s.k[0].s.length : s.k.length)), l._cachingAtTime = {
                            lastFrame: initialDefaultFrame,
                            lastIndex: 0,
                            value: p
                        }, expressionHelpers.searchExpressions(r, s, l), l.k && h.addDynamicProperty(l), l
                    };
                    var h = ShapePropertyFactory.getConstructorFunction(),
                        l = ShapePropertyFactory.getKeyframedConstructorFunction();

                    function p() {}
                    p.prototype = {
                        vertices: function(t, e) {
                            this.k && this.getValue();
                            var i, r = this.v;
                            void 0 !== e && (r = this.getValueAtTime(e, 0));
                            var s = r._length,
                                n = r[t],
                                a = r.v,
                                o = createSizedArray(s);
                            for (i = 0; i < s; i += 1) o[i] = "i" === t || "o" === t ? [n[i][0] - a[i][0], n[i][1] - a[i][1]] : [n[i][0], n[i][1]];
                            return o
                        },
                        points: function(t) {
                            return this.vertices("v", t)
                        },
                        inTangents: function(t) {
                            return this.vertices("i", t)
                        },
                        outTangents: function(t) {
                            return this.vertices("o", t)
                        },
                        isClosed: function() {
                            return this.v.c
                        },
                        pointOnPath: function(t, e) {
                            var i = this.v;
                            void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                            var r, s = this._segmentsLength,
                                n = s.lengths,
                                a = s.totalLength * t,
                                o = 0,
                                h = n.length,
                                l = 0;
                            while (o < h) {
                                if (l + n[o].addedLength > a) {
                                    var p = o,
                                        f = i.c && o === h - 1 ? 0 : o + 1,
                                        c = (a - l) / n[o].addedLength;
                                    r = bez.getPointInSegment(i.v[p], i.v[f], i.o[p], i.i[f], c, n[o]);
                                    break
                                }
                                l += n[o].addedLength, o += 1
                            }
                            return r || (r = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), r
                        },
                        vectorOnPath: function(t, e, i) {
                            1 == t ? t = this.v.c : 0 == t && (t = .999);
                            var r = this.pointOnPath(t, e),
                                s = this.pointOnPath(t + .001, e),
                                n = s[0] - r[0],
                                a = s[1] - r[1],
                                o = Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2));
                            if (0 === o) return [0, 0];
                            var h = "tangent" === i ? [n / o, a / o] : [-a / o, n / o];
                            return h
                        },
                        tangentOnPath: function(t, e) {
                            return this.vectorOnPath(t, e, "tangent")
                        },
                        normalOnPath: function(t, e) {
                            return this.vectorOnPath(t, e, "normal")
                        },
                        setGroupProperty: expressionHelpers.setGroupProperty,
                        getValueAtTime: expressionHelpers.getStaticValueAtTime
                    }, extendPrototype([p], h), extendPrototype([p], l), l.prototype.getValueAtTime = o, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
                    var f = ShapePropertyFactory.getShapeProp;
                    ShapePropertyFactory.getShapeProp = function(t, e, i, r, s) {
                        var n = f(t, e, i, r, s);
                        return n.propertyIndex = e.ix, n.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, n) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, n), n.k && t.addDynamicProperty(n), n
                    }
                }

                function initialize$1() {
                    addPropertyDecorator()
                }

                function addDecorator() {
                    function t() {
                        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                    }
                    TextProperty.prototype.getExpressionValue = function(t, e) {
                        var i = this.calculateExpression(e);
                        if (t.t !== i) {
                            var r = {};
                            return this.copyData(r, t), r.t = i.toString(), r.__complete = !1, r
                        }
                        return t
                    }, TextProperty.prototype.searchProperty = function() {
                        var t = this.searchKeyframes(),
                            e = this.searchExpressions();
                        return this.kf = t || e, this.kf
                    }, TextProperty.prototype.searchExpressions = t
                }

                function initialize() {
                    addDecorator()
                }

                function SVGComposableEffect() {}
                SVGComposableEffect.prototype = {
                    createMergeNode: function(t, e) {
                        var i, r, s = createNS("feMerge");
                        for (s.setAttribute("result", t), r = 0; r < e.length; r += 1) i = createNS("feMergeNode"), i.setAttribute("in", e[r]), s.appendChild(i), s.appendChild(i);
                        return s
                    }
                };
                var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

                function SVGTintFilter(t, e, i, r, s) {
                    this.filterManager = e;
                    var n = createNS("feColorMatrix");
                    n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = n, n.setAttribute("result", r + "_tint_1"), t.appendChild(n), n = createNS("feColorMatrix"), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", r + "_tint_2"), t.appendChild(n), this.matrixFilter = n;
                    var a = this.createMergeNode(r, [s, r + "_tint_1", r + "_tint_2"]);
                    t.appendChild(a)
                }

                function SVGFillFilter(t, e, i, r) {
                    this.filterManager = e;
                    var s = createNS("feColorMatrix");
                    s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", r), t.appendChild(s), this.matrixFilter = s
                }

                function SVGStrokeEffect(t, e, i) {
                    this.initialized = !1, this.filterManager = e, this.elem = i, this.paths = []
                }

                function SVGTritoneFilter(t, e, i, r) {
                    this.filterManager = e;
                    var s = createNS("feColorMatrix");
                    s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(s);
                    var n = createNS("feComponentTransfer");
                    n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", r), this.matrixFilter = n;
                    var a = createNS("feFuncR");
                    a.setAttribute("type", "table"), n.appendChild(a), this.feFuncR = a;
                    var o = createNS("feFuncG");
                    o.setAttribute("type", "table"), n.appendChild(o), this.feFuncG = o;
                    var h = createNS("feFuncB");
                    h.setAttribute("type", "table"), n.appendChild(h), this.feFuncB = h, t.appendChild(n)
                }

                function SVGProLevelsFilter(t, e, i, r) {
                    this.filterManager = e;
                    var s = this.filterManager.effectElements,
                        n = createNS("feComponentTransfer");
                    (s[10].p.k || 0 !== s[10].p.v || s[11].p.k || 1 !== s[11].p.v || s[12].p.k || 1 !== s[12].p.v || s[13].p.k || 0 !== s[13].p.v || s[14].p.k || 1 !== s[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", n)), (s[17].p.k || 0 !== s[17].p.v || s[18].p.k || 1 !== s[18].p.v || s[19].p.k || 1 !== s[19].p.v || s[20].p.k || 0 !== s[20].p.v || s[21].p.k || 1 !== s[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", n)), (s[24].p.k || 0 !== s[24].p.v || s[25].p.k || 1 !== s[25].p.v || s[26].p.k || 1 !== s[26].p.v || s[27].p.k || 0 !== s[27].p.v || s[28].p.k || 1 !== s[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", n)), (s[31].p.k || 0 !== s[31].p.v || s[32].p.k || 1 !== s[32].p.v || s[33].p.k || 1 !== s[33].p.v || s[34].p.k || 0 !== s[34].p.v || s[35].p.k || 1 !== s[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", n)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n)), (s[3].p.k || 0 !== s[3].p.v || s[4].p.k || 1 !== s[4].p.v || s[5].p.k || 1 !== s[5].p.v || s[6].p.k || 0 !== s[6].p.v || s[7].p.k || 1 !== s[7].p.v) && (n = createNS("feComponentTransfer"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", r), t.appendChild(n), this.feFuncRComposed = this.createFeFunc("feFuncR", n), this.feFuncGComposed = this.createFeFunc("feFuncG", n), this.feFuncBComposed = this.createFeFunc("feFuncB", n))
                }

                function SVGDropShadowEffect(t, e, i, r, s) {
                    var n = e.container.globalData.renderConfig.filterSize,
                        a = e.data.fs || n;
                    t.setAttribute("x", a.x || n.x), t.setAttribute("y", a.y || n.y), t.setAttribute("width", a.width || n.width), t.setAttribute("height", a.height || n.height), this.filterManager = e;
                    var o = createNS("feGaussianBlur");
                    o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", r + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
                    var h = createNS("feOffset");
                    h.setAttribute("dx", "25"), h.setAttribute("dy", "0"), h.setAttribute("in", r + "_drop_shadow_1"), h.setAttribute("result", r + "_drop_shadow_2"), this.feOffset = h, t.appendChild(h);
                    var l = createNS("feFlood");
                    l.setAttribute("flood-color", "#00ff00"), l.setAttribute("flood-opacity", "1"), l.setAttribute("result", r + "_drop_shadow_3"), this.feFlood = l, t.appendChild(l);
                    var p = createNS("feComposite");
                    p.setAttribute("in", r + "_drop_shadow_3"), p.setAttribute("in2", r + "_drop_shadow_2"), p.setAttribute("operator", "in"), p.setAttribute("result", r + "_drop_shadow_4"), t.appendChild(p);
                    var f = this.createMergeNode(r, [r + "_drop_shadow_4", s]);
                    t.appendChild(f)
                }
                extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[0].p.v,
                            i = this.filterManager.effectElements[1].p.v,
                            r = this.filterManager.effectElements[2].p.v / 100;
                        this.linearFilter.setAttribute("values", linearFilterValue + " " + r + " 0"), this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
                    }
                }, SVGFillFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[2].p.v,
                            i = this.filterManager.effectElements[6].p.v;
                        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
                    }
                }, SVGStrokeEffect.prototype.initialize = function() {
                    var t, e, i, r, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                    for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, i = 0) : (i = this.filterManager.effectElements[0].p.v - 1, r = i + 1), e = createNS("g"), e.setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1), i; i < r; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                        p: t,
                        m: i
                    });
                    if (3 === this.filterManager.effectElements[10].p.v) {
                        var n = createNS("mask"),
                            a = createElementID();
                        n.setAttribute("id", a), n.setAttribute("mask-type", "alpha"), n.appendChild(e), this.elem.globalData.defs.appendChild(n);
                        var o = createNS("g");
                        o.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")");
                        while (s[0]) o.appendChild(s[0]);
                        this.elem.layerElement.appendChild(o), this.masker = n, e.setAttribute("stroke", "#0f0e11")
                    } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                        if (2 === this.filterManager.effectElements[10].p.v) {
                            s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                            while (s.length) this.elem.layerElement.removeChild(s[0])
                        }
                        this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#0f0e11")
                    }
                    this.initialized = !0, this.pathMasker = e
                }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                    var e;
                    this.initialized || this.initialize();
                    var i, r, s = this.paths.length;
                    for (e = 0; e < s; e += 1)
                        if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                            var n;
                            if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                var a = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                    o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                    h = r.getTotalLength();
                                n = "0 0 0 " + h * a + " ";
                                var l, p = h * (o - a),
                                    f = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                                    c = Math.floor(p / f);
                                for (l = 0; l < c; l += 1) n += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                                n += "0 " + 10 * h + " 0 0"
                            } else n = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                            r.setAttribute("stroke-dasharray", n)
                        }
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                        var u = this.filterManager.effectElements[3].p.v;
                        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * u[0]) + "," + bmFloor(255 * u[1]) + "," + bmFloor(255 * u[2]) + ")")
                    }
                }, SVGTritoneFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[0].p.v,
                            i = this.filterManager.effectElements[1].p.v,
                            r = this.filterManager.effectElements[2].p.v,
                            s = r[0] + " " + i[0] + " " + e[0],
                            n = r[1] + " " + i[1] + " " + e[1],
                            a = r[2] + " " + i[2] + " " + e[2];
                        this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", n), this.feFuncB.setAttribute("tableValues", a)
                    }
                }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                    var i = createNS(t);
                    return i.setAttribute("type", "table"), e.appendChild(i), i
                }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, s) {
                    var n, a, o = 0,
                        h = 256,
                        l = Math.min(t, e),
                        p = Math.max(t, e),
                        f = Array.call(null, {
                            length: h
                        }),
                        c = 0,
                        u = s - r,
                        m = e - t;
                    while (o <= 256) n = o / 256, a = n <= l ? m < 0 ? s : r : n >= p ? m < 0 ? r : s : r + u * Math.pow((n - t) / m, 1 / i), f[c] = a, c += 1, o += 256 / (h - 1);
                    return f.join(" ")
                }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e, i = this.filterManager.effectElements;
                        this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
                    }
                }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                            var e = this.filterManager.effectElements[0].p.v;
                            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                        }
                        if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                            var i = this.filterManager.effectElements[3].p.v,
                                r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                                s = i * Math.cos(r),
                                n = i * Math.sin(r);
                            this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", n)
                        }
                    }
                };
                var _svgMatteSymbols = [];

                function SVGMatte3Effect(t, e, i) {
                    this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement
                }

                function SVGGaussianBlurEffect(t, e, i, r) {
                    t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                    var s = createNS("feGaussianBlur");
                    s.setAttribute("result", r), t.appendChild(s), this.feGaussianBlur = s
                }

                function TransformEffect() {}

                function SVGTransformEffect(t, e) {
                    this.init(e)
                }

                function CVTransformEffect(t) {
                    this.init(t)
                }
                return SVGMatte3Effect.prototype.findSymbol = function(t) {
                    var e = 0,
                        i = _svgMatteSymbols.length;
                    while (e < i) {
                        if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                        e += 1
                    }
                    return null
                }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                    var i = t.layerElement.parentNode;
                    if (i) {
                        var r, s = i.children,
                            n = 0,
                            a = s.length;
                        while (n < a) {
                            if (s[n] === t.layerElement) break;
                            n += 1
                        }
                        n <= a - 2 && (r = s[n + 1]);
                        var o = createNS("use");
                        o.setAttribute("href", "#" + e), r ? i.insertBefore(o, r) : i.appendChild(o)
                    }
                }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                    if (!this.findSymbol(e)) {
                        var i = createElementID(),
                            r = createNS("mask");
                        r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                        var s = t.globalData.defs;
                        s.appendChild(r);
                        var n = createNS("symbol");
                        n.setAttribute("id", i), this.replaceInParent(e, i), n.appendChild(e.layerElement), s.appendChild(n);
                        var a = createNS("use");
                        a.setAttribute("href", "#" + i), r.appendChild(a), e.data.hd = !1, e.show()
                    }
                    t.setMatte(e.layerId)
                }, SVGMatte3Effect.prototype.initialize = function() {
                    var t = this.filterManager.effectElements[0].p.v,
                        e = this.elem.comp.elements,
                        i = 0,
                        r = e.length;
                    while (i < r) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
                    this.initialized = !0
                }, SVGMatte3Effect.prototype.renderFrame = function() {
                    this.initialized || this.initialize()
                }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = .3,
                            i = this.filterManager.effectElements[0].p.v * e,
                            r = this.filterManager.effectElements[1].p.v,
                            s = 3 == r ? 0 : i,
                            n = 2 == r ? 0 : i;
                        this.feGaussianBlur.setAttribute("stdDeviation", s + " " + n);
                        var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                        this.feGaussianBlur.setAttribute("edgeMode", a)
                    }
                }, TransformEffect.prototype.init = function(t) {
                    this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
                }, TransformEffect.prototype.renderFrame = function(t) {
                    if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
                        var e = this.effectsManager.effectElements,
                            i = e[0].p.v,
                            r = e[1].p.v,
                            s = 1 === e[2].p.v,
                            n = e[3].p.v,
                            a = s ? n : e[4].p.v,
                            o = e[5].p.v,
                            h = e[6].p.v,
                            l = e[7].p.v;
                        this.matrix.reset(), this.matrix.translate(-i[0], -i[1], i[2]), this.matrix.scale(.01 * a, .01 * n, 1), this.matrix.rotate(-l * degToRads), this.matrix.skewFromAxis(-o * degToRads, (h + 90) * degToRads), this.matrix.translate(r[0], r[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
                    }
                }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
            }))
        },
        9816: function(t, e, i) {
            "use strict";
            var r = i("1ff3");
            i.d(e, "a", (function() {
                return r["a"]
            }));
            r["a"]
        },
        b749: function(t, e) {
            (function() {
                if ("undefined" !== typeof window) {
                    var t, e = "ontouchstart" in window;
                    document.createTouch || (document.createTouch = function(t, e, r, s, n, a, o) {
                        return new i(e, r, {
                            pageX: s,
                            pageY: n,
                            screenX: a,
                            screenY: o,
                            clientX: s - window.pageXOffset,
                            clientY: n - window.pageYOffset
                        }, 0, 0)
                    }), document.createTouchList || (document.createTouchList = function() {
                        for (var t = s(), e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return t.length = arguments.length, t
                    }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
                        var e = this;
                        do {
                            if (e.matches(t)) return e;
                            e = e.parentElement || e.parentNode
                        } while (null !== e && 1 === e.nodeType);
                        return null
                    });
                    var i = function(t, e, i, r, s) {
                            r = r || 0, s = s || 0, this.identifier = e, this.target = t, this.clientX = i.clientX + r, this.clientY = i.clientY + s, this.screenX = i.screenX + r, this.screenY = i.screenY + s, this.pageX = i.pageX + r, this.pageY = i.pageY + s
                        },
                        r = !1;
                    l["multiTouchOffset"] = 75, e || new l
                }

                function s() {
                    var t = [];
                    return t["item"] = function(t) {
                        return this[t] || null
                    }, t["identifiedTouch"] = function(t) {
                        return this[t + 1] || null
                    }, t
                }

                function n(e) {
                    return function(i) {
                        "mousedown" === i.type && (r = !0), "mouseup" === i.type && (r = !1), ("mousemove" !== i.type || r) && (("mousedown" === i.type || !t || t && !t.dispatchEvent) && (t = i.target), null == t.closest("[data-no-touch-simulate]") && a(e, i), "mouseup" === i.type && (t = null))
                    }
                }

                function a(e, i) {
                    var r = document.createEvent("Event");
                    r.initEvent(e, !0, !0), r.altKey = i.altKey, r.ctrlKey = i.ctrlKey, r.metaKey = i.metaKey, r.shiftKey = i.shiftKey, r.touches = h(i), r.targetTouches = h(i), r.changedTouches = o(i), t.dispatchEvent(r)
                }

                function o(e) {
                    var r = s();
                    return r.push(new i(t, 1, e, 0, 0)), r
                }

                function h(t) {
                    return "mouseup" === t.type ? s() : o(t)
                }

                function l() {
                    window.addEventListener("mousedown", n("touchstart"), !0), window.addEventListener("mousemove", n("touchmove"), !0), window.addEventListener("mouseup", n("touchend"), !0)
                }
            })()
        },
        c31d: function(t, e, i) {
            "use strict";

            function r() {
                return r = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var r in i)({}).hasOwnProperty.call(i, r) && (t[r] = i[r])
                    }
                    return t
                }, r.apply(null, arguments)
            }
            i.d(e, "a", (function() {
                return r
            }))
        },
        c8ba: function(t, e) {
            var i;
            i = function() {
                return this
            }();
            try {
                i = i || new Function("return this")()
            } catch (r) {
                "object" === typeof window && (i = window)
            }
            t.exports = i
        },
        df7c: function(t, e, i) {
            (function(t) {
                function i(t, e) {
                    for (var i = 0, r = t.length - 1; r >= 0; r--) {
                        var s = t[r];
                        "." === s ? t.splice(r, 1) : ".." === s ? (t.splice(r, 1), i++) : i && (t.splice(r, 1), i--)
                    }
                    if (e)
                        for (; i--; i) t.unshift("..");
                    return t
                }

                function r(t) {
                    "string" !== typeof t && (t += "");
                    var e, i = 0,
                        r = -1,
                        s = !0;
                    for (e = t.length - 1; e >= 0; --e)
                        if (47 === t.charCodeAt(e)) {
                            if (!s) {
                                i = e + 1;
                                break
                            }
                        } else -1 === r && (s = !1, r = e + 1);
                    return -1 === r ? "" : t.slice(i, r)
                }

                function s(t, e) {
                    if (t.filter) return t.filter(e);
                    for (var i = [], r = 0; r < t.length; r++) e(t[r], r, t) && i.push(t[r]);
                    return i
                }
                e.resolve = function() {
                    for (var e = "", r = !1, n = arguments.length - 1; n >= -1 && !r; n--) {
                        var a = n >= 0 ? arguments[n] : t.cwd();
                        if ("string" !== typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                        a && (e = a + "/" + e, r = "/" === a.charAt(0))
                    }
                    return e = i(s(e.split("/"), (function(t) {
                        return !!t
                    })), !r).join("/"), (r ? "/" : "") + e || "."
                }, e.normalize = function(t) {
                    var r = e.isAbsolute(t),
                        a = "/" === n(t, -1);
                    return t = i(s(t.split("/"), (function(t) {
                        return !!t
                    })), !r).join("/"), t || r || (t = "."), t && a && (t += "/"), (r ? "/" : "") + t
                }, e.isAbsolute = function(t) {
                    return "/" === t.charAt(0)
                }, e.join = function() {
                    var t = Array.prototype.slice.call(arguments, 0);
                    return e.normalize(s(t, (function(t, e) {
                        if ("string" !== typeof t) throw new TypeError("Arguments to path.join must be strings");
                        return t
                    })).join("/"))
                }, e.relative = function(t, i) {
                    function r(t) {
                        for (var e = 0; e < t.length; e++)
                            if ("" !== t[e]) break;
                        for (var i = t.length - 1; i >= 0; i--)
                            if ("" !== t[i]) break;
                        return e > i ? [] : t.slice(e, i - e + 1)
                    }
                    t = e.resolve(t).substr(1), i = e.resolve(i).substr(1);
                    for (var s = r(t.split("/")), n = r(i.split("/")), a = Math.min(s.length, n.length), o = a, h = 0; h < a; h++)
                        if (s[h] !== n[h]) {
                            o = h;
                            break
                        }
                    var l = [];
                    for (h = o; h < s.length; h++) l.push("..");
                    return l = l.concat(n.slice(o)), l.join("/")
                }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) {
                    if ("string" !== typeof t && (t += ""), 0 === t.length) return ".";
                    for (var e = t.charCodeAt(0), i = 47 === e, r = -1, s = !0, n = t.length - 1; n >= 1; --n)
                        if (e = t.charCodeAt(n), 47 === e) {
                            if (!s) {
                                r = n;
                                break
                            }
                        } else s = !1;
                    return -1 === r ? i ? "/" : "." : i && 1 === r ? "/" : t.slice(0, r)
                }, e.basename = function(t, e) {
                    var i = r(t);
                    return e && i.substr(-1 * e.length) === e && (i = i.substr(0, i.length - e.length)), i
                }, e.extname = function(t) {
                    "string" !== typeof t && (t += "");
                    for (var e = -1, i = 0, r = -1, s = !0, n = 0, a = t.length - 1; a >= 0; --a) {
                        var o = t.charCodeAt(a);
                        if (47 !== o) - 1 === r && (s = !1, r = a + 1), 46 === o ? -1 === e ? e = a : 1 !== n && (n = 1) : -1 !== e && (n = -1);
                        else if (!s) {
                            i = a + 1;
                            break
                        }
                    }
                    return -1 === e || -1 === r || 0 === n || 1 === n && e === r - 1 && e === i + 1 ? "" : t.slice(e, r)
                };
                var n = "b" === "ab".substr(-1) ? function(t, e, i) {
                    return t.substr(e, i)
                } : function(t, e, i) {
                    return e < 0 && (e = t.length + e), t.substr(e, i)
                }
            }).call(this, i("4362"))
        },
        ea6a: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return at
            }));
            var r, s, n = i("143d"),
                a = {
                    decode: function(t) {
                        var e;
                        if (void 0 === r) {
                            var i = "0123456789ABCDEF",
                                s = " \f\n\r\t \u2028\u2029";
                            for (r = {}, e = 0; e < 16; ++e) r[i.charAt(e)] = e;
                            for (i = i.toLowerCase(), e = 10; e < 16; ++e) r[i.charAt(e)] = e;
                            for (e = 0; e < s.length; ++e) r[s.charAt(e)] = -1
                        }
                        var n = [],
                            a = 0,
                            o = 0;
                        for (e = 0; e < t.length; ++e) {
                            var h = t.charAt(e);
                            if ("=" == h) break;
                            if (h = r[h], -1 != h) {
                                if (void 0 === h) throw new Error("Illegal character at offset " + e);
                                a |= h, ++o >= 2 ? (n[n.length] = a, a = 0, o = 0) : a <<= 4
                            }
                        }
                        if (o) throw new Error("Hex encoding incomplete: 4 bits missing");
                        return n
                    }
                },
                o = {
                    decode: function(t) {
                        var e;
                        if (void 0 === s) {
                            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                                r = "= \f\n\r\t \u2028\u2029";
                            for (s = Object.create(null), e = 0; e < 64; ++e) s[i.charAt(e)] = e;
                            for (s["-"] = 62, s["_"] = 63, e = 0; e < r.length; ++e) s[r.charAt(e)] = -1
                        }
                        var n = [],
                            a = 0,
                            o = 0;
                        for (e = 0; e < t.length; ++e) {
                            var h = t.charAt(e);
                            if ("=" == h) break;
                            if (h = s[h], -1 != h) {
                                if (void 0 === h) throw new Error("Illegal character at offset " + e);
                                a |= h, ++o >= 4 ? (n[n.length] = a >> 16, n[n.length] = a >> 8 & 255, n[n.length] = 255 & a, a = 0, o = 0) : a <<= 6
                            }
                        }
                        switch (o) {
                            case 1:
                                throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                            case 2:
                                n[n.length] = a >> 10;
                                break;
                            case 3:
                                n[n.length] = a >> 16, n[n.length] = a >> 8 & 255;
                                break
                        }
                        return n
                    },
                    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                    unarmor: function(t) {
                        var e = o.re.exec(t);
                        if (e)
                            if (e[1]) t = e[1];
                            else {
                                if (!e[2]) throw new Error("RegExp out of sync");
                                t = e[2]
                            }
                        return o.decode(t)
                    }
                },
                h = 1e13,
                l = function() {
                    function t(t) {
                        this.buf = [+t || 0]
                    }
                    return t.prototype.mulAdd = function(t, e) {
                        var i, r, s = this.buf,
                            n = s.length;
                        for (i = 0; i < n; ++i) r = s[i] * t + e, r < h ? e = 0 : (e = 0 | r / h, r -= e * h), s[i] = r;
                        e > 0 && (s[i] = e)
                    }, t.prototype.sub = function(t) {
                        var e, i, r = this.buf,
                            s = r.length;
                        for (e = 0; e < s; ++e) i = r[e] - t, i < 0 ? (i += h, t = 1) : t = 0, r[e] = i;
                        while (0 === r[r.length - 1]) r.pop()
                    }, t.prototype.toString = function(t) {
                        if (10 != (t || 10)) throw new Error("only base 10 is supported");
                        for (var e = this.buf, i = e[e.length - 1].toString(), r = e.length - 2; r >= 0; --r) i += (h + e[r]).toString().substring(1);
                        return i
                    }, t.prototype.valueOf = function() {
                        for (var t = this.buf, e = 0, i = t.length - 1; i >= 0; --i) e = e * h + t[i];
                        return e
                    }, t.prototype.simplify = function() {
                        var t = this.buf;
                        return 1 == t.length ? t[0] : this
                    }, t
                }(),
                p = "…",
                f = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
                c = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

            function u(t, e) {
                return t.length > e && (t = t.substring(0, e) + p), t
            }
            var m, d = function() {
                    function t(e, i) {
                        this.hexDigits = "0123456789ABCDEF", e instanceof t ? (this.enc = e.enc, this.pos = e.pos) : (this.enc = e, this.pos = i)
                    }
                    return t.prototype.get = function(t) {
                        if (void 0 === t && (t = this.pos++), t >= this.enc.length) throw new Error("Requesting byte offset ".concat(t, " on a stream of length ").concat(this.enc.length));
                        return "string" === typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t]
                    }, t.prototype.hexByte = function(t) {
                        return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
                    }, t.prototype.hexDump = function(t, e, i) {
                        for (var r = "", s = t; s < e; ++s)
                            if (r += this.hexByte(this.get(s)), !0 !== i) switch (15 & s) {
                                case 7:
                                    r += "  ";
                                    break;
                                case 15:
                                    r += "\n";
                                    break;
                                default:
                                    r += " "
                            }
                        return r
                    }, t.prototype.isASCII = function(t, e) {
                        for (var i = t; i < e; ++i) {
                            var r = this.get(i);
                            if (r < 32 || r > 176) return !1
                        }
                        return !0
                    }, t.prototype.parseStringISO = function(t, e) {
                        for (var i = "", r = t; r < e; ++r) i += String.fromCharCode(this.get(r));
                        return i
                    }, t.prototype.parseStringUTF = function(t, e) {
                        for (var i = "", r = t; r < e;) {
                            var s = this.get(r++);
                            i += s < 128 ? String.fromCharCode(s) : s > 191 && s < 224 ? String.fromCharCode((31 & s) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & s) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++))
                        }
                        return i
                    }, t.prototype.parseStringBMP = function(t, e) {
                        for (var i, r, s = "", n = t; n < e;) i = this.get(n++), r = this.get(n++), s += String.fromCharCode(i << 8 | r);
                        return s
                    }, t.prototype.parseTime = function(t, e, i) {
                        var r = this.parseStringISO(t, e),
                            s = (i ? f : c).exec(r);
                        return s ? (i && (s[1] = +s[1], s[1] += +s[1] < 70 ? 2e3 : 1900), r = s[1] + "-" + s[2] + "-" + s[3] + " " + s[4], s[5] && (r += ":" + s[5], s[6] && (r += ":" + s[6], s[7] && (r += "." + s[7]))), s[8] && (r += " UTC", "Z" != s[8] && (r += s[8], s[9] && (r += ":" + s[9]))), r) : "Unrecognized time: " + r
                    }, t.prototype.parseInteger = function(t, e) {
                        var i, r = this.get(t),
                            s = r > 127,
                            n = s ? 255 : 0,
                            a = "";
                        while (r == n && ++t < e) r = this.get(t);
                        if (i = e - t, 0 === i) return s ? -1 : 0;
                        if (i > 4) {
                            a = r, i <<= 3;
                            while (0 == (128 & (+a ^ n))) a = +a << 1, --i;
                            a = "(" + i + " bit)\n"
                        }
                        s && (r -= 256);
                        for (var o = new l(r), h = t + 1; h < e; ++h) o.mulAdd(256, this.get(h));
                        return a + o.toString()
                    }, t.prototype.parseBitString = function(t, e, i) {
                        for (var r = this.get(t), s = (e - t - 1 << 3) - r, n = "(" + s + " bit)\n", a = "", o = t + 1; o < e; ++o) {
                            for (var h = this.get(o), l = o == e - 1 ? r : 0, p = 7; p >= l; --p) a += h >> p & 1 ? "1" : "0";
                            if (a.length > i) return n + u(a, i)
                        }
                        return n + a
                    }, t.prototype.parseOctetString = function(t, e, i) {
                        if (this.isASCII(t, e)) return u(this.parseStringISO(t, e), i);
                        var r = e - t,
                            s = "(" + r + " byte)\n";
                        i /= 2, r > i && (e = t + i);
                        for (var n = t; n < e; ++n) s += this.hexByte(this.get(n));
                        return r > i && (s += p), s
                    }, t.prototype.parseOID = function(t, e, i) {
                        for (var r = "", s = new l, n = 0, a = t; a < e; ++a) {
                            var o = this.get(a);
                            if (s.mulAdd(128, 127 & o), n += 7, !(128 & o)) {
                                if ("" === r)
                                    if (s = s.simplify(), s instanceof l) s.sub(80), r = "2." + s.toString();
                                    else {
                                        var h = s < 80 ? s < 40 ? 0 : 1 : 2;
                                        r = h + "." + (s - 40 * h)
                                    }
                                else r += "." + s.toString();
                                if (r.length > i) return u(r, i);
                                s = new l, n = 0
                            }
                        }
                        return n > 0 && (r += ".incomplete"), r
                    }, t
                }(),
                y = function() {
                    function t(t, e, i, r, s) {
                        if (!(r instanceof g)) throw new Error("Invalid tag value.");
                        this.stream = t, this.header = e, this.length = i, this.tag = r, this.sub = s
                    }
                    return t.prototype.typeName = function() {
                        switch (this.tag.tagClass) {
                            case 0:
                                switch (this.tag.tagNumber) {
                                    case 0:
                                        return "EOC";
                                    case 1:
                                        return "BOOLEAN";
                                    case 2:
                                        return "INTEGER";
                                    case 3:
                                        return "BIT_STRING";
                                    case 4:
                                        return "OCTET_STRING";
                                    case 5:
                                        return "NULL";
                                    case 6:
                                        return "OBJECT_IDENTIFIER";
                                    case 7:
                                        return "ObjectDescriptor";
                                    case 8:
                                        return "EXTERNAL";
                                    case 9:
                                        return "REAL";
                                    case 10:
                                        return "ENUMERATED";
                                    case 11:
                                        return "EMBEDDED_PDV";
                                    case 12:
                                        return "UTF8String";
                                    case 16:
                                        return "SEQUENCE";
                                    case 17:
                                        return "SET";
                                    case 18:
                                        return "NumericString";
                                    case 19:
                                        return "PrintableString";
                                    case 20:
                                        return "TeletexString";
                                    case 21:
                                        return "VideotexString";
                                    case 22:
                                        return "IA5String";
                                    case 23:
                                        return "UTCTime";
                                    case 24:
                                        return "GeneralizedTime";
                                    case 25:
                                        return "GraphicString";
                                    case 26:
                                        return "VisibleString";
                                    case 27:
                                        return "GeneralString";
                                    case 28:
                                        return "UniversalString";
                                    case 30:
                                        return "BMPString"
                                }
                                return "Universal_" + this.tag.tagNumber.toString();
                            case 1:
                                return "Application_" + this.tag.tagNumber.toString();
                            case 2:
                                return "[" + this.tag.tagNumber.toString() + "]";
                            case 3:
                                return "Private_" + this.tag.tagNumber.toString()
                        }
                    }, t.prototype.content = function(t) {
                        if (void 0 === this.tag) return null;
                        void 0 === t && (t = 1 / 0);
                        var e = this.posContent(),
                            i = Math.abs(this.length);
                        if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
                        switch (this.tag.tagNumber) {
                            case 1:
                                return 0 === this.stream.get(e) ? "false" : "true";
                            case 2:
                                return this.stream.parseInteger(e, e + i);
                            case 3:
                                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + i, t);
                            case 4:
                                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
                            case 6:
                                return this.stream.parseOID(e, e + i, t);
                            case 16:
                            case 17:
                                return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                            case 12:
                                return u(this.stream.parseStringUTF(e, e + i), t);
                            case 18:
                            case 19:
                            case 20:
                            case 21:
                            case 22:
                            case 26:
                                return u(this.stream.parseStringISO(e, e + i), t);
                            case 30:
                                return u(this.stream.parseStringBMP(e, e + i), t);
                            case 23:
                            case 24:
                                return this.stream.parseTime(e, e + i, 23 == this.tag.tagNumber)
                        }
                        return null
                    }, t.prototype.toString = function() {
                        return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
                    }, t.prototype.toPrettyString = function(t) {
                        void 0 === t && (t = "");
                        var e = t + this.typeName() + " @" + this.stream.pos;
                        if (this.length >= 0 && (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"), e += "\n", null !== this.sub) {
                            t += "  ";
                            for (var i = 0, r = this.sub.length; i < r; ++i) e += this.sub[i].toPrettyString(t)
                        }
                        return e
                    }, t.prototype.posStart = function() {
                        return this.stream.pos
                    }, t.prototype.posContent = function() {
                        return this.stream.pos + this.header
                    }, t.prototype.posEnd = function() {
                        return this.stream.pos + this.header + Math.abs(this.length)
                    }, t.prototype.toHexString = function() {
                        return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
                    }, t.decodeLength = function(t) {
                        var e = t.get(),
                            i = 127 & e;
                        if (i == e) return i;
                        if (i > 6) throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
                        if (0 === i) return null;
                        e = 0;
                        for (var r = 0; r < i; ++r) e = 256 * e + t.get();
                        return e
                    }, t.prototype.getHexStringValue = function() {
                        var t = this.toHexString(),
                            e = 2 * this.header,
                            i = 2 * this.length;
                        return t.substr(e, i)
                    }, t.decode = function(e) {
                        var i;
                        i = e instanceof d ? e : new d(e, 0);
                        var r = new d(i),
                            s = new g(i),
                            n = t.decodeLength(i),
                            a = i.pos,
                            o = a - r.pos,
                            h = null,
                            l = function() {
                                var e = [];
                                if (null !== n) {
                                    var r = a + n;
                                    while (i.pos < r) e[e.length] = t.decode(i);
                                    if (i.pos != r) throw new Error("Content size is not correct for container starting at offset " + a)
                                } else try {
                                    for (;;) {
                                        var s = t.decode(i);
                                        if (s.tag.isEOC()) break;
                                        e[e.length] = s
                                    }
                                    n = a - i.pos
                                } catch (o) {
                                    throw new Error("Exception while decoding undefined length content: " + o)
                                }
                                return e
                            };
                        if (s.tagConstructed) h = l();
                        else if (s.isUniversal() && (3 == s.tagNumber || 4 == s.tagNumber)) try {
                            if (3 == s.tagNumber && 0 != i.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                            h = l();
                            for (var p = 0; p < h.length; ++p)
                                if (h[p].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.")
                        } catch (f) {
                            h = null
                        }
                        if (null === h) {
                            if (null === n) throw new Error("We can't skip over an invalid tag with undefined length at offset " + a);
                            i.pos = a + Math.abs(n)
                        }
                        return new t(r, o, n, s, h)
                    }, t
                }(),
                g = function() {
                    function t(t) {
                        var e = t.get();
                        if (this.tagClass = e >> 6, this.tagConstructed = 0 !== (32 & e), this.tagNumber = 31 & e, 31 == this.tagNumber) {
                            var i = new l;
                            do {
                                e = t.get(), i.mulAdd(128, 127 & e)
                            } while (128 & e);
                            this.tagNumber = i.simplify()
                        }
                    }
                    return t.prototype.isUniversal = function() {
                        return 0 === this.tagClass
                    }, t.prototype.isEOC = function() {
                        return 0 === this.tagClass && 0 === this.tagNumber
                    }, t
                }(),
                v = i("93a9"),
                b = 0xdeadbeefcafe,
                E = 15715070 == (16777215 & b),
                S = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                x = (1 << 26) / S[S.length - 1],
                P = function() {
                    function t(t, e, i) {
                        null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
                    }
                    return t.prototype.toString = function(t) {
                        if (this.s < 0) return "-" + this.negate().toString(t);
                        var e;
                        if (16 == t) e = 4;
                        else if (8 == t) e = 3;
                        else if (2 == t) e = 1;
                        else if (32 == t) e = 5;
                        else {
                            if (4 != t) return this.toRadix(t);
                            e = 2
                        }
                        var i, r = (1 << e) - 1,
                            s = !1,
                            n = "",
                            a = this.t,
                            o = this.DB - a * this.DB % e;
                        if (a-- > 0) {
                            o < this.DB && (i = this[a] >> o) > 0 && (s = !0, n = Object(v["b"])(i));
                            while (a >= 0) o < e ? (i = (this[a] & (1 << o) - 1) << e - o, i |= this[--a] >> (o += this.DB - e)) : (i = this[a] >> (o -= e) & r, o <= 0 && (o += this.DB, --a)), i > 0 && (s = !0), s && (n += Object(v["b"])(i))
                        }
                        return s ? n : "0"
                    }, t.prototype.negate = function() {
                        var e = _();
                        return t.ZERO.subTo(this, e), e
                    }, t.prototype.abs = function() {
                        return this.s < 0 ? this.negate() : this
                    }, t.prototype.compareTo = function(t) {
                        var e = this.s - t.s;
                        if (0 != e) return e;
                        var i = this.t;
                        if (e = i - t.t, 0 != e) return this.s < 0 ? -e : e;
                        while (--i >= 0)
                            if (0 != (e = this[i] - t[i])) return e;
                        return 0
                    }, t.prototype.bitLength = function() {
                        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + L(this[this.t - 1] ^ this.s & this.DM)
                    }, t.prototype.mod = function(e) {
                        var i = _();
                        return this.abs().divRemTo(e, null, i), this.s < 0 && i.compareTo(t.ZERO) > 0 && e.subTo(i, i), i
                    }, t.prototype.modPowInt = function(t, e) {
                        var i;
                        return i = t < 256 || e.isEven() ? new C(e) : new A(e), this.exp(t, i)
                    }, t.prototype.clone = function() {
                        var t = _();
                        return this.copyTo(t), t
                    }, t.prototype.intValue = function() {
                        if (this.s < 0) {
                            if (1 == this.t) return this[0] - this.DV;
                            if (0 == this.t) return -1
                        } else {
                            if (1 == this.t) return this[0];
                            if (0 == this.t) return 0
                        }
                        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                    }, t.prototype.byteValue = function() {
                        return 0 == this.t ? this.s : this[0] << 24 >> 24
                    }, t.prototype.shortValue = function() {
                        return 0 == this.t ? this.s : this[0] << 16 >> 16
                    }, t.prototype.signum = function() {
                        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                    }, t.prototype.toByteArray = function() {
                        var t = this.t,
                            e = [];
                        e[0] = this.s;
                        var i, r = this.DB - t * this.DB % 8,
                            s = 0;
                        if (t-- > 0) {
                            r < this.DB && (i = this[t] >> r) != (this.s & this.DM) >> r && (e[s++] = i | this.s << this.DB - r);
                            while (t >= 0) r < 8 ? (i = (this[t] & (1 << r) - 1) << 8 - r, i |= this[--t] >> (r += this.DB - 8)) : (i = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --t)), 0 != (128 & i) && (i |= -256), 0 == s && (128 & this.s) != (128 & i) && ++s, (s > 0 || i != this.s) && (e[s++] = i)
                        }
                        return e
                    }, t.prototype.equals = function(t) {
                        return 0 == this.compareTo(t)
                    }, t.prototype.min = function(t) {
                        return this.compareTo(t) < 0 ? this : t
                    }, t.prototype.max = function(t) {
                        return this.compareTo(t) > 0 ? this : t
                    }, t.prototype.and = function(t) {
                        var e = _();
                        return this.bitwiseTo(t, v["d"], e), e
                    }, t.prototype.or = function(t) {
                        var e = _();
                        return this.bitwiseTo(t, v["f"], e), e
                    }, t.prototype.xor = function(t) {
                        var e = _();
                        return this.bitwiseTo(t, v["g"], e), e
                    }, t.prototype.andNot = function(t) {
                        var e = _();
                        return this.bitwiseTo(t, v["e"], e), e
                    }, t.prototype.not = function() {
                        for (var t = _(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                        return t.t = this.t, t.s = ~this.s, t
                    }, t.prototype.shiftLeft = function(t) {
                        var e = _();
                        return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
                    }, t.prototype.shiftRight = function(t) {
                        var e = _();
                        return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
                    }, t.prototype.getLowestSetBit = function() {
                        for (var t = 0; t < this.t; ++t)
                            if (0 != this[t]) return t * this.DB + Object(v["c"])(this[t]);
                        return this.s < 0 ? this.t * this.DB : -1
                    }, t.prototype.bitCount = function() {
                        for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += Object(v["a"])(this[i] ^ e);
                        return t
                    }, t.prototype.testBit = function(t) {
                        var e = Math.floor(t / this.DB);
                        return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
                    }, t.prototype.setBit = function(t) {
                        return this.changeBit(t, v["f"])
                    }, t.prototype.clearBit = function(t) {
                        return this.changeBit(t, v["e"])
                    }, t.prototype.flipBit = function(t) {
                        return this.changeBit(t, v["g"])
                    }, t.prototype.add = function(t) {
                        var e = _();
                        return this.addTo(t, e), e
                    }, t.prototype.subtract = function(t) {
                        var e = _();
                        return this.subTo(t, e), e
                    }, t.prototype.multiply = function(t) {
                        var e = _();
                        return this.multiplyTo(t, e), e
                    }, t.prototype.divide = function(t) {
                        var e = _();
                        return this.divRemTo(t, e, null), e
                    }, t.prototype.remainder = function(t) {
                        var e = _();
                        return this.divRemTo(t, null, e), e
                    }, t.prototype.divideAndRemainder = function(t) {
                        var e = _(),
                            i = _();
                        return this.divRemTo(t, e, i), [e, i]
                    }, t.prototype.modPow = function(t, e) {
                        var i, r, s = t.bitLength(),
                            n = V(1);
                        if (s <= 0) return n;
                        i = s < 18 ? 1 : s < 48 ? 3 : s < 144 ? 4 : s < 768 ? 5 : 6, r = s < 8 ? new C(e) : e.isEven() ? new w(e) : new A(e);
                        var a = [],
                            o = 3,
                            h = i - 1,
                            l = (1 << i) - 1;
                        if (a[1] = r.convert(this), i > 1) {
                            var p = _();
                            r.sqrTo(a[1], p);
                            while (o <= l) a[o] = _(), r.mulTo(p, a[o - 2], a[o]), o += 2
                        }
                        var f, c, u = t.t - 1,
                            m = !0,
                            d = _();
                        s = L(t[u]) - 1;
                        while (u >= 0) {
                            s >= h ? f = t[u] >> s - h & l : (f = (t[u] & (1 << s + 1) - 1) << h - s, u > 0 && (f |= t[u - 1] >> this.DB + s - h)), o = i;
                            while (0 == (1 & f)) f >>= 1, --o;
                            if ((s -= o) < 0 && (s += this.DB, --u), m) a[f].copyTo(n), m = !1;
                            else {
                                while (o > 1) r.sqrTo(n, d), r.sqrTo(d, n), o -= 2;
                                o > 0 ? r.sqrTo(n, d) : (c = n, n = d, d = c), r.mulTo(d, a[f], n)
                            }
                            while (u >= 0 && 0 == (t[u] & 1 << s)) r.sqrTo(n, d), c = n, n = d, d = c, --s < 0 && (s = this.DB - 1, --u)
                        }
                        return r.revert(n)
                    }, t.prototype.modInverse = function(e) {
                        var i = e.isEven();
                        if (this.isEven() && i || 0 == e.signum()) return t.ZERO;
                        var r = e.clone(),
                            s = this.clone(),
                            n = V(1),
                            a = V(0),
                            o = V(0),
                            h = V(1);
                        while (0 != r.signum()) {
                            while (r.isEven()) r.rShiftTo(1, r), i ? (n.isEven() && a.isEven() || (n.addTo(this, n), a.subTo(e, a)), n.rShiftTo(1, n)) : a.isEven() || a.subTo(e, a), a.rShiftTo(1, a);
                            while (s.isEven()) s.rShiftTo(1, s), i ? (o.isEven() && h.isEven() || (o.addTo(this, o), h.subTo(e, h)), o.rShiftTo(1, o)) : h.isEven() || h.subTo(e, h), h.rShiftTo(1, h);
                            r.compareTo(s) >= 0 ? (r.subTo(s, r), i && n.subTo(o, n), a.subTo(h, a)) : (s.subTo(r, s), i && o.subTo(n, o), h.subTo(a, h))
                        }
                        return 0 != s.compareTo(t.ONE) ? t.ZERO : h.compareTo(e) >= 0 ? h.subtract(e) : h.signum() < 0 ? (h.addTo(e, h), h.signum() < 0 ? h.add(e) : h) : h
                    }, t.prototype.pow = function(t) {
                        return this.exp(t, new T)
                    }, t.prototype.gcd = function(t) {
                        var e = this.s < 0 ? this.negate() : this.clone(),
                            i = t.s < 0 ? t.negate() : t.clone();
                        if (e.compareTo(i) < 0) {
                            var r = e;
                            e = i, i = r
                        }
                        var s = e.getLowestSetBit(),
                            n = i.getLowestSetBit();
                        if (n < 0) return e;
                        s < n && (n = s), n > 0 && (e.rShiftTo(n, e), i.rShiftTo(n, i));
                        while (e.signum() > 0)(s = e.getLowestSetBit()) > 0 && e.rShiftTo(s, e), (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i), e.compareTo(i) >= 0 ? (e.subTo(i, e), e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
                        return n > 0 && i.lShiftTo(n, i), i
                    }, t.prototype.isProbablePrime = function(t) {
                        var e, i = this.abs();
                        if (1 == i.t && i[0] <= S[S.length - 1]) {
                            for (e = 0; e < S.length; ++e)
                                if (i[0] == S[e]) return !0;
                            return !1
                        }
                        if (i.isEven()) return !1;
                        e = 1;
                        while (e < S.length) {
                            var r = S[e],
                                s = e + 1;
                            while (s < S.length && r < x) r *= S[s++];
                            r = i.modInt(r);
                            while (e < s)
                                if (r % S[e++] == 0) return !1
                        }
                        return i.millerRabin(t)
                    }, t.prototype.copyTo = function(t) {
                        for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
                        t.t = this.t, t.s = this.s
                    }, t.prototype.fromInt = function(t) {
                        this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
                    }, t.prototype.fromString = function(e, i) {
                        var r;
                        if (16 == i) r = 4;
                        else if (8 == i) r = 3;
                        else if (256 == i) r = 8;
                        else if (2 == i) r = 1;
                        else if (32 == i) r = 5;
                        else {
                            if (4 != i) return void this.fromRadix(e, i);
                            r = 2
                        }
                        this.t = 0, this.s = 0;
                        var s = e.length,
                            n = !1,
                            a = 0;
                        while (--s >= 0) {
                            var o = 8 == r ? 255 & +e[s] : B(e, s);
                            o < 0 ? "-" == e.charAt(s) && (n = !0) : (n = !1, 0 == a ? this[this.t++] = o : a + r > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - a) - 1) << a, this[this.t++] = o >> this.DB - a) : this[this.t - 1] |= o << a, a += r, a >= this.DB && (a -= this.DB))
                        }
                        8 == r && 0 != (128 & +e[0]) && (this.s = -1, a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a)), this.clamp(), n && t.ZERO.subTo(this, this)
                    }, t.prototype.clamp = function() {
                        var t = this.s & this.DM;
                        while (this.t > 0 && this[this.t - 1] == t) --this.t
                    }, t.prototype.dlShiftTo = function(t, e) {
                        var i;
                        for (i = this.t - 1; i >= 0; --i) e[i + t] = this[i];
                        for (i = t - 1; i >= 0; --i) e[i] = 0;
                        e.t = this.t + t, e.s = this.s
                    }, t.prototype.drShiftTo = function(t, e) {
                        for (var i = t; i < this.t; ++i) e[i - t] = this[i];
                        e.t = Math.max(this.t - t, 0), e.s = this.s
                    }, t.prototype.lShiftTo = function(t, e) {
                        for (var i = t % this.DB, r = this.DB - i, s = (1 << r) - 1, n = Math.floor(t / this.DB), a = this.s << i & this.DM, o = this.t - 1; o >= 0; --o) e[o + n + 1] = this[o] >> r | a, a = (this[o] & s) << i;
                        for (o = n - 1; o >= 0; --o) e[o] = 0;
                        e[n] = a, e.t = this.t + n + 1, e.s = this.s, e.clamp()
                    }, t.prototype.rShiftTo = function(t, e) {
                        e.s = this.s;
                        var i = Math.floor(t / this.DB);
                        if (i >= this.t) e.t = 0;
                        else {
                            var r = t % this.DB,
                                s = this.DB - r,
                                n = (1 << r) - 1;
                            e[0] = this[i] >> r;
                            for (var a = i + 1; a < this.t; ++a) e[a - i - 1] |= (this[a] & n) << s, e[a - i] = this[a] >> r;
                            r > 0 && (e[this.t - i - 1] |= (this.s & n) << s), e.t = this.t - i, e.clamp()
                        }
                    }, t.prototype.subTo = function(t, e) {
                        var i = 0,
                            r = 0,
                            s = Math.min(t.t, this.t);
                        while (i < s) r += this[i] - t[i], e[i++] = r & this.DM, r >>= this.DB;
                        if (t.t < this.t) {
                            r -= t.s;
                            while (i < this.t) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                            r += this.s
                        } else {
                            r += this.s;
                            while (i < t.t) r -= t[i], e[i++] = r & this.DM, r >>= this.DB;
                            r -= t.s
                        }
                        e.s = r < 0 ? -1 : 0, r < -1 ? e[i++] = this.DV + r : r > 0 && (e[i++] = r), e.t = i, e.clamp()
                    }, t.prototype.multiplyTo = function(e, i) {
                        var r = this.abs(),
                            s = e.abs(),
                            n = r.t;
                        i.t = n + s.t;
                        while (--n >= 0) i[n] = 0;
                        for (n = 0; n < s.t; ++n) i[n + r.t] = r.am(0, s[n], i, n, 0, r.t);
                        i.s = 0, i.clamp(), this.s != e.s && t.ZERO.subTo(i, i)
                    }, t.prototype.squareTo = function(t) {
                        var e = this.abs(),
                            i = t.t = 2 * e.t;
                        while (--i >= 0) t[i] = 0;
                        for (i = 0; i < e.t - 1; ++i) {
                            var r = e.am(i, e[i], t, 2 * i, 0, 1);
                            (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, r, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, t[i + e.t + 1] = 1)
                        }
                        t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp()
                    }, t.prototype.divRemTo = function(e, i, r) {
                        var s = e.abs();
                        if (!(s.t <= 0)) {
                            var n = this.abs();
                            if (n.t < s.t) return null != i && i.fromInt(0), void(null != r && this.copyTo(r));
                            null == r && (r = _());
                            var a = _(),
                                o = this.s,
                                h = e.s,
                                l = this.DB - L(s[s.t - 1]);
                            l > 0 ? (s.lShiftTo(l, a), n.lShiftTo(l, r)) : (s.copyTo(a), n.copyTo(r));
                            var p = a.t,
                                f = a[p - 1];
                            if (0 != f) {
                                var c = f * (1 << this.F1) + (p > 1 ? a[p - 2] >> this.F2 : 0),
                                    u = this.FV / c,
                                    m = (1 << this.F1) / c,
                                    d = 1 << this.F2,
                                    y = r.t,
                                    g = y - p,
                                    v = null == i ? _() : i;
                                a.dlShiftTo(g, v), r.compareTo(v) >= 0 && (r[r.t++] = 1, r.subTo(v, r)), t.ONE.dlShiftTo(p, v), v.subTo(a, a);
                                while (a.t < p) a[a.t++] = 0;
                                while (--g >= 0) {
                                    var b = r[--y] == f ? this.DM : Math.floor(r[y] * u + (r[y - 1] + d) * m);
                                    if ((r[y] += a.am(0, b, r, g, 0, p)) < b) {
                                        a.dlShiftTo(g, v), r.subTo(v, r);
                                        while (r[y] < --b) r.subTo(v, r)
                                    }
                                }
                                null != i && (r.drShiftTo(p, i), o != h && t.ZERO.subTo(i, i)), r.t = p, r.clamp(), l > 0 && r.rShiftTo(l, r), o < 0 && t.ZERO.subTo(r, r)
                            }
                        }
                    }, t.prototype.invDigit = function() {
                        if (this.t < 1) return 0;
                        var t = this[0];
                        if (0 == (1 & t)) return 0;
                        var e = 3 & t;
                        return e = e * (2 - (15 & t) * e) & 15, e = e * (2 - (255 & t) * e) & 255, e = e * (2 - ((65535 & t) * e & 65535)) & 65535, e = e * (2 - t * e % this.DV) % this.DV, e > 0 ? this.DV - e : -e
                    }, t.prototype.isEven = function() {
                        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                    }, t.prototype.exp = function(e, i) {
                        if (e > 4294967295 || e < 1) return t.ONE;
                        var r = _(),
                            s = _(),
                            n = i.convert(this),
                            a = L(e) - 1;
                        n.copyTo(r);
                        while (--a >= 0)
                            if (i.sqrTo(r, s), (e & 1 << a) > 0) i.mulTo(s, n, r);
                            else {
                                var o = r;
                                r = s, s = o
                            }
                        return i.revert(r)
                    }, t.prototype.chunkSize = function(t) {
                        return Math.floor(Math.LN2 * this.DB / Math.log(t))
                    }, t.prototype.toRadix = function(t) {
                        if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
                        var e = this.chunkSize(t),
                            i = Math.pow(t, e),
                            r = V(i),
                            s = _(),
                            n = _(),
                            a = "";
                        this.divRemTo(r, s, n);
                        while (s.signum() > 0) a = (i + n.intValue()).toString(t).substr(1) + a, s.divRemTo(r, s, n);
                        return n.intValue().toString(t) + a
                    }, t.prototype.fromRadix = function(e, i) {
                        this.fromInt(0), null == i && (i = 10);
                        for (var r = this.chunkSize(i), s = Math.pow(i, r), n = !1, a = 0, o = 0, h = 0; h < e.length; ++h) {
                            var l = B(e, h);
                            l < 0 ? "-" == e.charAt(h) && 0 == this.signum() && (n = !0) : (o = i * o + l, ++a >= r && (this.dMultiply(s), this.dAddOffset(o, 0), a = 0, o = 0))
                        }
                        a > 0 && (this.dMultiply(Math.pow(i, a)), this.dAddOffset(o, 0)), n && t.ZERO.subTo(this, this)
                    }, t.prototype.fromNumber = function(e, i, r) {
                        if ("number" == typeof i)
                            if (e < 2) this.fromInt(1);
                            else {
                                this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), v["f"], this), this.isEven() && this.dAddOffset(1, 0);
                                while (!this.isProbablePrime(i)) this.dAddOffset(2, 0), this.bitLength() > e && this.subTo(t.ONE.shiftLeft(e - 1), this)
                            }
                        else {
                            var s = [],
                                n = 7 & e;
                            s.length = 1 + (e >> 3), i.nextBytes(s), n > 0 ? s[0] &= (1 << n) - 1 : s[0] = 0, this.fromString(s, 256)
                        }
                    }, t.prototype.bitwiseTo = function(t, e, i) {
                        var r, s, n = Math.min(t.t, this.t);
                        for (r = 0; r < n; ++r) i[r] = e(this[r], t[r]);
                        if (t.t < this.t) {
                            for (s = t.s & this.DM, r = n; r < this.t; ++r) i[r] = e(this[r], s);
                            i.t = this.t
                        } else {
                            for (s = this.s & this.DM, r = n; r < t.t; ++r) i[r] = e(s, t[r]);
                            i.t = t.t
                        }
                        i.s = e(this.s, t.s), i.clamp()
                    }, t.prototype.changeBit = function(e, i) {
                        var r = t.ONE.shiftLeft(e);
                        return this.bitwiseTo(r, i, r), r
                    }, t.prototype.addTo = function(t, e) {
                        var i = 0,
                            r = 0,
                            s = Math.min(t.t, this.t);
                        while (i < s) r += this[i] + t[i], e[i++] = r & this.DM, r >>= this.DB;
                        if (t.t < this.t) {
                            r += t.s;
                            while (i < this.t) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                            r += this.s
                        } else {
                            r += this.s;
                            while (i < t.t) r += t[i], e[i++] = r & this.DM, r >>= this.DB;
                            r += t.s
                        }
                        e.s = r < 0 ? -1 : 0, r > 0 ? e[i++] = r : r < -1 && (e[i++] = this.DV + r), e.t = i, e.clamp()
                    }, t.prototype.dMultiply = function(t) {
                        this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
                    }, t.prototype.dAddOffset = function(t, e) {
                        if (0 != t) {
                            while (this.t <= e) this[this.t++] = 0;
                            this[e] += t;
                            while (this[e] >= this.DV) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
                        }
                    }, t.prototype.multiplyLowerTo = function(t, e, i) {
                        var r = Math.min(this.t + t.t, e);
                        i.s = 0, i.t = r;
                        while (r > 0) i[--r] = 0;
                        for (var s = i.t - this.t; r < s; ++r) i[r + this.t] = this.am(0, t[r], i, r, 0, this.t);
                        for (s = Math.min(t.t, e); r < s; ++r) this.am(0, t[r], i, r, 0, e - r);
                        i.clamp()
                    }, t.prototype.multiplyUpperTo = function(t, e, i) {
                        --e;
                        var r = i.t = this.t + t.t - e;
                        i.s = 0;
                        while (--r >= 0) i[r] = 0;
                        for (r = Math.max(e - this.t, 0); r < t.t; ++r) i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
                        i.clamp(), i.drShiftTo(1, i)
                    }, t.prototype.modInt = function(t) {
                        if (t <= 0) return 0;
                        var e = this.DV % t,
                            i = this.s < 0 ? t - 1 : 0;
                        if (this.t > 0)
                            if (0 == e) i = this[0] % t;
                            else
                                for (var r = this.t - 1; r >= 0; --r) i = (e * i + this[r]) % t;
                        return i
                    }, t.prototype.millerRabin = function(e) {
                        var i = this.subtract(t.ONE),
                            r = i.getLowestSetBit();
                        if (r <= 0) return !1;
                        var s = i.shiftRight(r);
                        e = e + 1 >> 1, e > S.length && (e = S.length);
                        for (var n = _(), a = 0; a < e; ++a) {
                            n.fromInt(S[Math.floor(Math.random() * S.length)]);
                            var o = n.modPow(s, this);
                            if (0 != o.compareTo(t.ONE) && 0 != o.compareTo(i)) {
                                var h = 1;
                                while (h++ < r && 0 != o.compareTo(i))
                                    if (o = o.modPowInt(2, this), 0 == o.compareTo(t.ONE)) return !1;
                                if (0 != o.compareTo(i)) return !1
                            }
                        }
                        return !0
                    }, t.prototype.square = function() {
                        var t = _();
                        return this.squareTo(t), t
                    }, t.prototype.gcda = function(t, e) {
                        var i = this.s < 0 ? this.negate() : this.clone(),
                            r = t.s < 0 ? t.negate() : t.clone();
                        if (i.compareTo(r) < 0) {
                            var s = i;
                            i = r, r = s
                        }
                        var n = i.getLowestSetBit(),
                            a = r.getLowestSetBit();
                        if (a < 0) e(i);
                        else {
                            n < a && (a = n), a > 0 && (i.rShiftTo(a, i), r.rShiftTo(a, r));
                            var o = function() {
                                (n = i.getLowestSetBit()) > 0 && i.rShiftTo(n, i), (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r), i.compareTo(r) >= 0 ? (i.subTo(r, i), i.rShiftTo(1, i)) : (r.subTo(i, r), r.rShiftTo(1, r)), i.signum() > 0 ? setTimeout(o, 0) : (a > 0 && r.lShiftTo(a, r), setTimeout((function() {
                                    e(r)
                                }), 0))
                            };
                            setTimeout(o, 10)
                        }
                    }, t.prototype.fromNumberAsync = function(e, i, r, s) {
                        if ("number" == typeof i)
                            if (e < 2) this.fromInt(1);
                            else {
                                this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), v["f"], this), this.isEven() && this.dAddOffset(1, 0);
                                var n = this,
                                    a = function() {
                                        n.dAddOffset(2, 0), n.bitLength() > e && n.subTo(t.ONE.shiftLeft(e - 1), n), n.isProbablePrime(i) ? setTimeout((function() {
                                            s()
                                        }), 0) : setTimeout(a, 0)
                                    };
                                setTimeout(a, 0)
                            }
                        else {
                            var o = [],
                                h = 7 & e;
                            o.length = 1 + (e >> 3), i.nextBytes(o), h > 0 ? o[0] &= (1 << h) - 1 : o[0] = 0, this.fromString(o, 256)
                        }
                    }, t
                }(),
                T = function() {
                    function t() {}
                    return t.prototype.convert = function(t) {
                        return t
                    }, t.prototype.revert = function(t) {
                        return t
                    }, t.prototype.mulTo = function(t, e, i) {
                        t.multiplyTo(e, i)
                    }, t.prototype.sqrTo = function(t, e) {
                        t.squareTo(e)
                    }, t
                }(),
                C = function() {
                    function t(t) {
                        this.m = t
                    }
                    return t.prototype.convert = function(t) {
                        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
                    }, t.prototype.revert = function(t) {
                        return t
                    }, t.prototype.reduce = function(t) {
                        t.divRemTo(this.m, null, t)
                    }, t.prototype.mulTo = function(t, e, i) {
                        t.multiplyTo(e, i), this.reduce(i)
                    }, t.prototype.sqrTo = function(t, e) {
                        t.squareTo(e), this.reduce(e)
                    }, t
                }(),
                A = function() {
                    function t(t) {
                        this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
                    }
                    return t.prototype.convert = function(t) {
                        var e = _();
                        return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(P.ZERO) > 0 && this.m.subTo(e, e), e
                    }, t.prototype.revert = function(t) {
                        var e = _();
                        return t.copyTo(e), this.reduce(e), e
                    }, t.prototype.reduce = function(t) {
                        while (t.t <= this.mt2) t[t.t++] = 0;
                        for (var e = 0; e < this.m.t; ++e) {
                            var i = 32767 & t[e],
                                r = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                            i = e + this.m.t, t[i] += this.m.am(0, r, t, e, 0, this.m.t);
                            while (t[i] >= t.DV) t[i] -= t.DV, t[++i]++
                        }
                        t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
                    }, t.prototype.mulTo = function(t, e, i) {
                        t.multiplyTo(e, i), this.reduce(i)
                    }, t.prototype.sqrTo = function(t, e) {
                        t.squareTo(e), this.reduce(e)
                    }, t
                }(),
                w = function() {
                    function t(t) {
                        this.m = t, this.r2 = _(), this.q3 = _(), P.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t)
                    }
                    return t.prototype.convert = function(t) {
                        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                        if (t.compareTo(this.m) < 0) return t;
                        var e = _();
                        return t.copyTo(e), this.reduce(e), e
                    }, t.prototype.revert = function(t) {
                        return t
                    }, t.prototype.reduce = function(t) {
                        t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
                        while (t.compareTo(this.r2) < 0) t.dAddOffset(1, this.m.t + 1);
                        t.subTo(this.r2, t);
                        while (t.compareTo(this.m) >= 0) t.subTo(this.m, t)
                    }, t.prototype.mulTo = function(t, e, i) {
                        t.multiplyTo(e, i), this.reduce(i)
                    }, t.prototype.sqrTo = function(t, e) {
                        t.squareTo(e), this.reduce(e)
                    }, t
                }();

            function _() {
                return new P(null)
            }

            function D(t, e) {
                return new P(t, e)
            }
            var M = "undefined" !== typeof navigator;
            M && E && "Microsoft Internet Explorer" == navigator.appName ? (P.prototype.am = function(t, e, i, r, s, n) {
                var a = 32767 & e,
                    o = e >> 15;
                while (--n >= 0) {
                    var h = 32767 & this[t],
                        l = this[t++] >> 15,
                        p = o * h + l * a;
                    h = a * h + ((32767 & p) << 15) + i[r] + (1073741823 & s), s = (h >>> 30) + (p >>> 15) + o * l + (s >>> 30), i[r++] = 1073741823 & h
                }
                return s
            }, m = 30) : M && E && "Netscape" != navigator.appName ? (P.prototype.am = function(t, e, i, r, s, n) {
                while (--n >= 0) {
                    var a = e * this[t++] + i[r] + s;
                    s = Math.floor(a / 67108864), i[r++] = 67108863 & a
                }
                return s
            }, m = 26) : (P.prototype.am = function(t, e, i, r, s, n) {
                var a = 16383 & e,
                    o = e >> 14;
                while (--n >= 0) {
                    var h = 16383 & this[t],
                        l = this[t++] >> 14,
                        p = o * h + l * a;
                    h = a * h + ((16383 & p) << 14) + i[r] + s, s = (h >> 28) + (p >> 14) + o * l, i[r++] = 268435455 & h
                }
                return s
            }, m = 28), P.prototype.DB = m, P.prototype.DM = (1 << m) - 1, P.prototype.DV = 1 << m;
            var k = 52;
            P.prototype.FV = Math.pow(2, k), P.prototype.F1 = k - m, P.prototype.F2 = 2 * m - k;
            var F, I, R = [];
            for (F = "0".charCodeAt(0), I = 0; I <= 9; ++I) R[F++] = I;
            for (F = "a".charCodeAt(0), I = 10; I < 36; ++I) R[F++] = I;
            for (F = "A".charCodeAt(0), I = 10; I < 36; ++I) R[F++] = I;

            function B(t, e) {
                var i = R[t.charCodeAt(e)];
                return null == i ? -1 : i
            }

            function V(t) {
                var e = _();
                return e.fromInt(t), e
            }

            function L(t) {
                var e, i = 1;
                return 0 != (e = t >>> 16) && (t = e, i += 16), 0 != (e = t >> 8) && (t = e, i += 8), 0 != (e = t >> 4) && (t = e, i += 4), 0 != (e = t >> 2) && (t = e, i += 2), 0 != (e = t >> 1) && (t = e, i += 1), i
            }
            P.ZERO = V(0), P.ONE = V(1);
            var O = function() {
                function t() {
                    this.i = 0, this.j = 0, this.S = []
                }
                return t.prototype.init = function(t) {
                    var e, i, r;
                    for (e = 0; e < 256; ++e) this.S[e] = e;
                    for (i = 0, e = 0; e < 256; ++e) i = i + this.S[e] + t[e % t.length] & 255, r = this.S[e], this.S[e] = this.S[i], this.S[i] = r;
                    this.i = 0, this.j = 0
                }, t.prototype.next = function() {
                    var t;
                    return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
                }, t
            }();

            function N() {
                return new O
            }
            var z, H, G = 256,
                j = null;
            if (null == j) {
                j = [], H = 0;
                var q = void 0;
                if ("undefined" !== typeof window && window.crypto && window.crypto.getRandomValues) {
                    var W = new Uint32Array(256);
                    for (window.crypto.getRandomValues(W), q = 0; q < W.length; ++q) j[H++] = 255 & W[q]
                }
                var $ = 0,
                    X = function(t) {
                        if ($ = $ || 0, $ >= 256 || H >= G) window.removeEventListener ? window.removeEventListener("mousemove", X, !1) : window.detachEvent && window.detachEvent("onmousemove", X);
                        else try {
                            var e = t.x + t.y;
                            j[H++] = 255 & e, $ += 1
                        } catch (i) {}
                    };
                "undefined" !== typeof window && (window.addEventListener ? window.addEventListener("mousemove", X, !1) : window.attachEvent && window.attachEvent("onmousemove", X))
            }

            function U() {
                if (null == z) {
                    z = N();
                    while (H < G) {
                        var t = Math.floor(65536 * Math.random());
                        j[H++] = 255 & t
                    }
                    for (z.init(j), H = 0; H < j.length; ++H) j[H] = 0;
                    H = 0
                }
                return z.next()
            }
            var K = function() {
                function t() {}
                return t.prototype.nextBytes = function(t) {
                    for (var e = 0; e < t.length; ++e) t[e] = U()
                }, t
            }();

            function Y(t, e) {
                if (e < t.length + 22) return console.error("Message too long for RSA"), null;
                for (var i = e - t.length - 6, r = "", s = 0; s < i; s += 2) r += "ff";
                var n = "0001" + r + "00" + t;
                return D(n, 16)
            }

            function J(t, e) {
                if (e < t.length + 11) return console.error("Message too long for RSA"), null;
                var i = [],
                    r = t.length - 1;
                while (r >= 0 && e > 0) {
                    var s = t.charCodeAt(r--);
                    s < 128 ? i[--e] = s : s > 127 && s < 2048 ? (i[--e] = 63 & s | 128, i[--e] = s >> 6 | 192) : (i[--e] = 63 & s | 128, i[--e] = s >> 6 & 63 | 128, i[--e] = s >> 12 | 224)
                }
                i[--e] = 0;
                var n = new K,
                    a = [];
                while (e > 2) {
                    a[0] = 0;
                    while (0 == a[0]) n.nextBytes(a);
                    i[--e] = a[0]
                }
                return i[--e] = 2, i[--e] = 0, new P(i)
            }
            var Z = function() {
                function t() {
                    this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
                }
                return t.prototype.doPublic = function(t) {
                    return t.modPowInt(this.e, this.n)
                }, t.prototype.doPrivate = function(t) {
                    if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
                    var e = t.mod(this.p).modPow(this.dmp1, this.p),
                        i = t.mod(this.q).modPow(this.dmq1, this.q);
                    while (e.compareTo(i) < 0) e = e.add(this.p);
                    return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
                }, t.prototype.setPublic = function(t, e) {
                    null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = D(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
                }, t.prototype.encrypt = function(t) {
                    var e = this.n.bitLength() + 7 >> 3,
                        i = J(t, e);
                    if (null == i) return null;
                    var r = this.doPublic(i);
                    if (null == r) return null;
                    for (var s = r.toString(16), n = s.length, a = 0; a < 2 * e - n; a++) s = "0" + s;
                    return s
                }, t.prototype.setPrivate = function(t, e, i) {
                    null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = D(t, 16), this.e = parseInt(e, 16), this.d = D(i, 16)) : console.error("Invalid RSA private key")
                }, t.prototype.setPrivateEx = function(t, e, i, r, s, n, a, o) {
                    null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = D(t, 16), this.e = parseInt(e, 16), this.d = D(i, 16), this.p = D(r, 16), this.q = D(s, 16), this.dmp1 = D(n, 16), this.dmq1 = D(a, 16), this.coeff = D(o, 16)) : console.error("Invalid RSA private key")
                }, t.prototype.generate = function(t, e) {
                    var i = new K,
                        r = t >> 1;
                    this.e = parseInt(e, 16);
                    for (var s = new P(e, 16);;) {
                        for (;;)
                            if (this.p = new P(t - r, 1, i), 0 == this.p.subtract(P.ONE).gcd(s).compareTo(P.ONE) && this.p.isProbablePrime(10)) break;
                        for (;;)
                            if (this.q = new P(r, 1, i), 0 == this.q.subtract(P.ONE).gcd(s).compareTo(P.ONE) && this.q.isProbablePrime(10)) break;
                        if (this.p.compareTo(this.q) <= 0) {
                            var n = this.p;
                            this.p = this.q, this.q = n
                        }
                        var a = this.p.subtract(P.ONE),
                            o = this.q.subtract(P.ONE),
                            h = a.multiply(o);
                        if (0 == h.gcd(s).compareTo(P.ONE)) {
                            this.n = this.p.multiply(this.q), this.d = s.modInverse(h), this.dmp1 = this.d.mod(a), this.dmq1 = this.d.mod(o), this.coeff = this.q.modInverse(this.p);
                            break
                        }
                    }
                }, t.prototype.decrypt = function(t) {
                    var e = D(t, 16),
                        i = this.doPrivate(e);
                    return null == i ? null : Q(i, this.n.bitLength() + 7 >> 3)
                }, t.prototype.generateAsync = function(t, e, i) {
                    var r = new K,
                        s = t >> 1;
                    this.e = parseInt(e, 16);
                    var n = new P(e, 16),
                        a = this,
                        o = function() {
                            var e = function() {
                                    if (a.p.compareTo(a.q) <= 0) {
                                        var t = a.p;
                                        a.p = a.q, a.q = t
                                    }
                                    var e = a.p.subtract(P.ONE),
                                        r = a.q.subtract(P.ONE),
                                        s = e.multiply(r);
                                    0 == s.gcd(n).compareTo(P.ONE) ? (a.n = a.p.multiply(a.q), a.d = n.modInverse(s), a.dmp1 = a.d.mod(e), a.dmq1 = a.d.mod(r), a.coeff = a.q.modInverse(a.p), setTimeout((function() {
                                        i()
                                    }), 0)) : setTimeout(o, 0)
                                },
                                h = function() {
                                    a.q = _(), a.q.fromNumberAsync(s, 1, r, (function() {
                                        a.q.subtract(P.ONE).gcda(n, (function(t) {
                                            0 == t.compareTo(P.ONE) && a.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(h, 0)
                                        }))
                                    }))
                                },
                                l = function() {
                                    a.p = _(), a.p.fromNumberAsync(t - s, 1, r, (function() {
                                        a.p.subtract(P.ONE).gcda(n, (function(t) {
                                            0 == t.compareTo(P.ONE) && a.p.isProbablePrime(10) ? setTimeout(h, 0) : setTimeout(l, 0)
                                        }))
                                    }))
                                };
                            setTimeout(l, 0)
                        };
                    setTimeout(o, 0)
                }, t.prototype.sign = function(t, e, i) {
                    var r = et(i),
                        s = r + e(t).toString(),
                        n = Y(s, this.n.bitLength() / 4);
                    if (null == n) return null;
                    var a = this.doPrivate(n);
                    if (null == a) return null;
                    var o = a.toString(16);
                    return 0 == (1 & o.length) ? o : "0" + o
                }, t.prototype.verify = function(t, e, i) {
                    var r = D(e, 16),
                        s = this.doPublic(r);
                    if (null == s) return null;
                    var n = s.toString(16).replace(/^1f+00/, ""),
                        a = it(n);
                    return a == i(t).toString()
                }, t
            }();

            function Q(t, e) {
                var i = t.toByteArray(),
                    r = 0;
                while (r < i.length && 0 == i[r]) ++r;
                if (i.length - r != e - 1 || 2 != i[r]) return null;
                ++r;
                while (0 != i[r])
                    if (++r >= i.length) return null;
                var s = "";
                while (++r < i.length) {
                    var n = 255 & i[r];
                    n < 128 ? s += String.fromCharCode(n) : n > 191 && n < 224 ? (s += String.fromCharCode((31 & n) << 6 | 63 & i[r + 1]), ++r) : (s += String.fromCharCode((15 & n) << 12 | (63 & i[r + 1]) << 6 | 63 & i[r + 2]), r += 2)
                }
                return s
            }
            var tt = {
                md2: "3020300c06082a864886f70d020205000410",
                md5: "3020300c06082a864886f70d020505000410",
                sha1: "3021300906052b0e03021a05000414",
                sha224: "302d300d06096086480165030402040500041c",
                sha256: "3031300d060960864801650304020105000420",
                sha384: "3041300d060960864801650304020205000430",
                sha512: "3051300d060960864801650304020305000440",
                ripemd160: "3021300906052b2403020105000414"
            };

            function et(t) {
                return tt[t] || ""
            }

            function it(t) {
                for (var e in tt)
                    if (tt.hasOwnProperty(e)) {
                        var i = tt[e],
                            r = i.length;
                        if (t.substr(0, r) == i) return t.substr(r)
                    }
                return t
            }
            /*!
            Copyright (c) 2011, Yahoo! Inc. All rights reserved.
            Code licensed under the BSD License:
            http://developer.yahoo.com/yui/license.html
            version: 2.9.0
            */
            var rt = {};
            rt.lang = {
                extend: function(t, e, i) {
                    if (!e || !t) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
                    var r = function() {};
                    if (r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t, t.superclass = e.prototype, e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e), i) {
                        var s;
                        for (s in i) t.prototype[s] = i[s];
                        var n = function() {},
                            a = ["toString", "valueOf"];
                        try {
                            /MSIE/.test(navigator.userAgent) && (n = function(t, e) {
                                for (s = 0; s < a.length; s += 1) {
                                    var i = a[s],
                                        r = e[i];
                                    "function" === typeof r && r != Object.prototype[i] && (t[i] = r)
                                }
                            })
                        } catch (o) {}
                        n(t.prototype, i)
                    }
                }
            };
            /**
             * @fileOverview
             * @name asn1-1.0.js
             * @author Kenji Urushima kenji.urushima@gmail.com
             * @version asn1 1.0.13 (2017-Jun-02)
             * @since jsrsasign 2.1
             * @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
             */
            var st = {};
            "undefined" != typeof st.asn1 && st.asn1 || (st.asn1 = {}), st.asn1.ASN1Util = new function() {
                this.integerToByteHex = function(t) {
                    var e = t.toString(16);
                    return e.length % 2 == 1 && (e = "0" + e), e
                }, this.bigIntToMinTwosComplementsHex = function(t) {
                    var e = t.toString(16);
                    if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                    else {
                        var i = e.substr(1),
                            r = i.length;
                        r % 2 == 1 ? r += 1 : e.match(/^[0-7]/) || (r += 2);
                        for (var s = "", n = 0; n < r; n++) s += "f";
                        var a = new P(s, 16),
                            o = a.xor(t).add(P.ONE);
                        e = o.toString(16).replace(/^-/, "")
                    }
                    return e
                }, this.getPEMStringFromHex = function(t, e) {
                    return hextopem(t, e)
                }, this.newObject = function(t) {
                    var e = st,
                        i = e.asn1,
                        r = i.DERBoolean,
                        s = i.DERInteger,
                        n = i.DERBitString,
                        a = i.DEROctetString,
                        o = i.DERNull,
                        h = i.DERObjectIdentifier,
                        l = i.DEREnumerated,
                        p = i.DERUTF8String,
                        f = i.DERNumericString,
                        c = i.DERPrintableString,
                        u = i.DERTeletexString,
                        m = i.DERIA5String,
                        d = i.DERUTCTime,
                        y = i.DERGeneralizedTime,
                        g = i.DERSequence,
                        v = i.DERSet,
                        b = i.DERTaggedObject,
                        E = i.ASN1Util.newObject,
                        S = Object.keys(t);
                    if (1 != S.length) throw "key of param shall be only one.";
                    var x = S[0];
                    if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + x + ":")) throw "undefined key: " + x;
                    if ("bool" == x) return new r(t[x]);
                    if ("int" == x) return new s(t[x]);
                    if ("bitstr" == x) return new n(t[x]);
                    if ("octstr" == x) return new a(t[x]);
                    if ("null" == x) return new o(t[x]);
                    if ("oid" == x) return new h(t[x]);
                    if ("enum" == x) return new l(t[x]);
                    if ("utf8str" == x) return new p(t[x]);
                    if ("numstr" == x) return new f(t[x]);
                    if ("prnstr" == x) return new c(t[x]);
                    if ("telstr" == x) return new u(t[x]);
                    if ("ia5str" == x) return new m(t[x]);
                    if ("utctime" == x) return new d(t[x]);
                    if ("gentime" == x) return new y(t[x]);
                    if ("seq" == x) {
                        for (var P = t[x], T = [], C = 0; C < P.length; C++) {
                            var A = E(P[C]);
                            T.push(A)
                        }
                        return new g({
                            array: T
                        })
                    }
                    if ("set" == x) {
                        for (P = t[x], T = [], C = 0; C < P.length; C++) {
                            A = E(P[C]);
                            T.push(A)
                        }
                        return new v({
                            array: T
                        })
                    }
                    if ("tag" == x) {
                        var w = t[x];
                        if ("[object Array]" === Object.prototype.toString.call(w) && 3 == w.length) {
                            var _ = E(w[2]);
                            return new b({
                                tag: w[0],
                                explicit: w[1],
                                obj: _
                            })
                        }
                        var D = {};
                        if (void 0 !== w.explicit && (D.explicit = w.explicit), void 0 !== w.tag && (D.tag = w.tag), void 0 === w.obj) throw "obj shall be specified for 'tag'.";
                        return D.obj = E(w.obj), new b(D)
                    }
                }, this.jsonToASN1HEX = function(t) {
                    var e = this.newObject(t);
                    return e.getEncodedHex()
                }
            }, st.asn1.ASN1Util.oidHexToInt = function(t) {
                for (var e = "", i = parseInt(t.substr(0, 2), 16), r = Math.floor(i / 40), s = i % 40, n = (e = r + "." + s, ""), a = 2; a < t.length; a += 2) {
                    var o = parseInt(t.substr(a, 2), 16),
                        h = ("00000000" + o.toString(2)).slice(-8);
                    if (n += h.substr(1, 7), "0" == h.substr(0, 1)) {
                        var l = new P(n, 2);
                        e = e + "." + l.toString(10), n = ""
                    }
                }
                return e
            }, st.asn1.ASN1Util.oidIntToHex = function(t) {
                var e = function(t) {
                        var e = t.toString(16);
                        return 1 == e.length && (e = "0" + e), e
                    },
                    i = function(t) {
                        var i = "",
                            r = new P(t, 10),
                            s = r.toString(2),
                            n = 7 - s.length % 7;
                        7 == n && (n = 0);
                        for (var a = "", o = 0; o < n; o++) a += "0";
                        s = a + s;
                        for (o = 0; o < s.length - 1; o += 7) {
                            var h = s.substr(o, 7);
                            o != s.length - 7 && (h = "1" + h), i += e(parseInt(h, 2))
                        }
                        return i
                    };
                if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                var r = "",
                    s = t.split("."),
                    n = 40 * parseInt(s[0]) + parseInt(s[1]);
                r += e(n), s.splice(0, 2);
                for (var a = 0; a < s.length; a++) r += i(s[a]);
                return r
            }, st.asn1.ASN1Object = function() {
                var t = "";
                this.getLengthHexFromValue = function() {
                    if ("undefined" == typeof this.hV || null == this.hV) throw "this.hV is null or undefined.";
                    if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + t.length + ",v=" + this.hV;
                    var e = this.hV.length / 2,
                        i = e.toString(16);
                    if (i.length % 2 == 1 && (i = "0" + i), e < 128) return i;
                    var r = i.length / 2;
                    if (r > 15) throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
                    var s = 128 + r;
                    return s.toString(16) + i
                }, this.getEncodedHex = function() {
                    return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
                }, this.getValueHex = function() {
                    return this.getEncodedHex(), this.hV
                }, this.getFreshValueHex = function() {
                    return ""
                }
            }, st.asn1.DERAbstractString = function(t) {
                st.asn1.DERAbstractString.superclass.constructor.call(this);
                this.getString = function() {
                    return this.s
                }, this.setString = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s)
                }, this.setStringHex = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, "undefined" != typeof t && ("string" == typeof t ? this.setString(t) : "undefined" != typeof t["str"] ? this.setString(t["str"]) : "undefined" != typeof t["hex"] && this.setStringHex(t["hex"]))
            }, rt.lang.extend(st.asn1.DERAbstractString, st.asn1.ASN1Object), st.asn1.DERAbstractTime = function(t) {
                st.asn1.DERAbstractTime.superclass.constructor.call(this);
                this.localDateToUTC = function(t) {
                    utc = t.getTime() + 6e4 * t.getTimezoneOffset();
                    var e = new Date(utc);
                    return e
                }, this.formatDate = function(t, e, i) {
                    var r = this.zeroPadding,
                        s = this.localDateToUTC(t),
                        n = String(s.getFullYear());
                    "utc" == e && (n = n.substr(2, 2));
                    var a = r(String(s.getMonth() + 1), 2),
                        o = r(String(s.getDate()), 2),
                        h = r(String(s.getHours()), 2),
                        l = r(String(s.getMinutes()), 2),
                        p = r(String(s.getSeconds()), 2),
                        f = n + a + o + h + l + p;
                    if (!0 === i) {
                        var c = s.getMilliseconds();
                        if (0 != c) {
                            var u = r(String(c), 3);
                            u = u.replace(/[0]+$/, ""), f = f + "." + u
                        }
                    }
                    return f + "Z"
                }, this.zeroPadding = function(t, e) {
                    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                }, this.getString = function() {
                    return this.s
                }, this.setString = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(t)
                }, this.setByDateValue = function(t, e, i, r, s, n) {
                    var a = new Date(Date.UTC(t, e - 1, i, r, s, n, 0));
                    this.setByDate(a)
                }, this.getFreshValueHex = function() {
                    return this.hV
                }
            }, rt.lang.extend(st.asn1.DERAbstractTime, st.asn1.ASN1Object), st.asn1.DERAbstractStructured = function(t) {
                st.asn1.DERAbstractString.superclass.constructor.call(this);
                this.setByASN1ObjectArray = function(t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array = t
                }, this.appendASN1Object = function(t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array.push(t)
                }, this.asn1Array = new Array, "undefined" != typeof t && "undefined" != typeof t["array"] && (this.asn1Array = t["array"])
            }, rt.lang.extend(st.asn1.DERAbstractStructured, st.asn1.ASN1Object), st.asn1.DERBoolean = function() {
                st.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff"
            }, rt.lang.extend(st.asn1.DERBoolean, st.asn1.ASN1Object), st.asn1.DERInteger = function(t) {
                st.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = st.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }, this.setByInteger = function(t) {
                    var e = new P(String(t), 10);
                    this.setByBigInteger(e)
                }, this.setValueHex = function(t) {
                    this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, "undefined" != typeof t && ("undefined" != typeof t["bigint"] ? this.setByBigInteger(t["bigint"]) : "undefined" != typeof t["int"] ? this.setByInteger(t["int"]) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t["hex"] && this.setValueHex(t["hex"]))
            }, rt.lang.extend(st.asn1.DERInteger, st.asn1.ASN1Object), st.asn1.DERBitString = function(t) {
                if (void 0 !== t && "undefined" !== typeof t.obj) {
                    var e = st.asn1.ASN1Util.newObject(t.obj);
                    t.hex = "00" + e.getEncodedHex()
                }
                st.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = t
                }, this.setUnusedBitsAndHexValue = function(t, e) {
                    if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
                    var i = "0" + t;
                    this.hTLV = null, this.isModified = !0, this.hV = i + e
                }, this.setByBinaryString = function(t) {
                    t = t.replace(/0+$/, "");
                    var e = 8 - t.length % 8;
                    8 == e && (e = 0);
                    for (var i = 0; i <= e; i++) t += "0";
                    var r = "";
                    for (i = 0; i < t.length - 1; i += 8) {
                        var s = t.substr(i, 8),
                            n = parseInt(s, 2).toString(16);
                        1 == n.length && (n = "0" + n), r += n
                    }
                    this.hTLV = null, this.isModified = !0, this.hV = "0" + e + r
                }, this.setByBooleanArray = function(t) {
                    for (var e = "", i = 0; i < t.length; i++) 1 == t[i] ? e += "1" : e += "0";
                    this.setByBinaryString(e)
                }, this.newFalseArray = function(t) {
                    for (var e = new Array(t), i = 0; i < t; i++) e[i] = !1;
                    return e
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, "undefined" != typeof t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : "undefined" != typeof t["hex"] ? this.setHexValueIncludingUnusedBits(t["hex"]) : "undefined" != typeof t["bin"] ? this.setByBinaryString(t["bin"]) : "undefined" != typeof t["array"] && this.setByBooleanArray(t["array"]))
            }, rt.lang.extend(st.asn1.DERBitString, st.asn1.ASN1Object), st.asn1.DEROctetString = function(t) {
                if (void 0 !== t && "undefined" !== typeof t.obj) {
                    var e = st.asn1.ASN1Util.newObject(t.obj);
                    t.hex = e.getEncodedHex()
                }
                st.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04"
            }, rt.lang.extend(st.asn1.DEROctetString, st.asn1.DERAbstractString), st.asn1.DERNull = function() {
                st.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500"
            }, rt.lang.extend(st.asn1.DERNull, st.asn1.ASN1Object), st.asn1.DERObjectIdentifier = function(t) {
                var e = function(t) {
                        var e = t.toString(16);
                        return 1 == e.length && (e = "0" + e), e
                    },
                    i = function(t) {
                        var i = "",
                            r = new P(t, 10),
                            s = r.toString(2),
                            n = 7 - s.length % 7;
                        7 == n && (n = 0);
                        for (var a = "", o = 0; o < n; o++) a += "0";
                        s = a + s;
                        for (o = 0; o < s.length - 1; o += 7) {
                            var h = s.substr(o, 7);
                            o != s.length - 7 && (h = "1" + h), i += e(parseInt(h, 2))
                        }
                        return i
                    };
                st.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
                }, this.setValueOidString = function(t) {
                    if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                    var r = "",
                        s = t.split("."),
                        n = 40 * parseInt(s[0]) + parseInt(s[1]);
                    r += e(n), s.splice(0, 2);
                    for (var a = 0; a < s.length; a++) r += i(s[a]);
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = r
                }, this.setValueName = function(t) {
                    var e = st.asn1.x509.OID.name2oid(t);
                    if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
                    this.setValueOidString(e)
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && ("string" === typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
            }, rt.lang.extend(st.asn1.DERObjectIdentifier, st.asn1.ASN1Object), st.asn1.DEREnumerated = function(t) {
                st.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = st.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }, this.setByInteger = function(t) {
                    var e = new P(String(t), 10);
                    this.setByBigInteger(e)
                }, this.setValueHex = function(t) {
                    this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, "undefined" != typeof t && ("undefined" != typeof t["int"] ? this.setByInteger(t["int"]) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t["hex"] && this.setValueHex(t["hex"]))
            }, rt.lang.extend(st.asn1.DEREnumerated, st.asn1.ASN1Object), st.asn1.DERUTF8String = function(t) {
                st.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c"
            }, rt.lang.extend(st.asn1.DERUTF8String, st.asn1.DERAbstractString), st.asn1.DERNumericString = function(t) {
                st.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12"
            }, rt.lang.extend(st.asn1.DERNumericString, st.asn1.DERAbstractString), st.asn1.DERPrintableString = function(t) {
                st.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13"
            }, rt.lang.extend(st.asn1.DERPrintableString, st.asn1.DERAbstractString), st.asn1.DERTeletexString = function(t) {
                st.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14"
            }, rt.lang.extend(st.asn1.DERTeletexString, st.asn1.DERAbstractString), st.asn1.DERIA5String = function(t) {
                st.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16"
            }, rt.lang.extend(st.asn1.DERIA5String, st.asn1.DERAbstractString), st.asn1.DERUTCTime = function(t) {
                st.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function(t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)
                }, this.getFreshValueHex = function() {
                    return "undefined" == typeof this.date && "undefined" == typeof this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
            }, rt.lang.extend(st.asn1.DERUTCTime, st.asn1.DERAbstractTime), st.asn1.DERGeneralizedTime = function(t) {
                st.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", this.withMillis = !1, this.setByDate = function(t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), !0 === t.millis && (this.withMillis = !0))
            }, rt.lang.extend(st.asn1.DERGeneralizedTime, st.asn1.DERAbstractTime), st.asn1.DERSequence = function(t) {
                st.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() {
                    for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                        var i = this.asn1Array[e];
                        t += i.getEncodedHex()
                    }
                    return this.hV = t, this.hV
                }
            }, rt.lang.extend(st.asn1.DERSequence, st.asn1.DERAbstractStructured), st.asn1.DERSet = function(t) {
                st.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function() {
                    for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                        var i = this.asn1Array[e];
                        t.push(i.getEncodedHex())
                    }
                    return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV
                }, "undefined" != typeof t && "undefined" != typeof t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
            }, rt.lang.extend(st.asn1.DERSet, st.asn1.DERAbstractStructured), st.asn1.DERTaggedObject = function(t) {
                st.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(t, e, i) {
                    this.hT = e, this.isExplicit = t, this.asn1Object = i, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, "undefined" != typeof t && ("undefined" != typeof t["tag"] && (this.hT = t["tag"]), "undefined" != typeof t["explicit"] && (this.isExplicit = t["explicit"]), "undefined" != typeof t["obj"] && (this.asn1Object = t["obj"], this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
            }, rt.lang.extend(st.asn1.DERTaggedObject, st.asn1.ASN1Object);
            var nt = function() {
                    var t = function(e, i) {
                        return t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                        }, t(e, i)
                    };
                    return function(e, i) {
                        if ("function" !== typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");

                        function r() {
                            this.constructor = e
                        }
                        t(e, i), e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }(),
                at = function(t) {
                    function e(i) {
                        var r = t.call(this) || this;
                        return i && ("string" === typeof i ? r.parseKey(i) : (e.hasPrivateKeyProperty(i) || e.hasPublicKeyProperty(i)) && r.parsePropertiesFrom(i)), r
                    }
                    return nt(e, t), e.prototype.parseKey = function(t) {
                        try {
                            var e = 0,
                                i = 0,
                                r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/,
                                s = r.test(t) ? a.decode(t) : o.unarmor(t),
                                n = y.decode(s);
                            if (3 === n.sub.length && (n = n.sub[2].sub[0]), 9 === n.sub.length) {
                                e = n.sub[1].getHexStringValue(), this.n = D(e, 16), i = n.sub[2].getHexStringValue(), this.e = parseInt(i, 16);
                                var h = n.sub[3].getHexStringValue();
                                this.d = D(h, 16);
                                var l = n.sub[4].getHexStringValue();
                                this.p = D(l, 16);
                                var p = n.sub[5].getHexStringValue();
                                this.q = D(p, 16);
                                var f = n.sub[6].getHexStringValue();
                                this.dmp1 = D(f, 16);
                                var c = n.sub[7].getHexStringValue();
                                this.dmq1 = D(c, 16);
                                var u = n.sub[8].getHexStringValue();
                                this.coeff = D(u, 16)
                            } else {
                                if (2 !== n.sub.length) return !1;
                                if (n.sub[0].sub) {
                                    var m = n.sub[1],
                                        d = m.sub[0];
                                    e = d.sub[0].getHexStringValue(), this.n = D(e, 16), i = d.sub[1].getHexStringValue(), this.e = parseInt(i, 16)
                                } else e = n.sub[0].getHexStringValue(), this.n = D(e, 16), i = n.sub[1].getHexStringValue(), this.e = parseInt(i, 16)
                            }
                            return !0
                        } catch (g) {
                            return !1
                        }
                    }, e.prototype.getPrivateBaseKey = function() {
                        var t = {
                                array: [new st.asn1.DERInteger({
                                    int: 0
                                }), new st.asn1.DERInteger({
                                    bigint: this.n
                                }), new st.asn1.DERInteger({
                                    int: this.e
                                }), new st.asn1.DERInteger({
                                    bigint: this.d
                                }), new st.asn1.DERInteger({
                                    bigint: this.p
                                }), new st.asn1.DERInteger({
                                    bigint: this.q
                                }), new st.asn1.DERInteger({
                                    bigint: this.dmp1
                                }), new st.asn1.DERInteger({
                                    bigint: this.dmq1
                                }), new st.asn1.DERInteger({
                                    bigint: this.coeff
                                })]
                            },
                            e = new st.asn1.DERSequence(t);
                        return e.getEncodedHex()
                    }, e.prototype.getPrivateBaseKeyB64 = function() {
                        return Object(n["b"])(this.getPrivateBaseKey())
                    }, e.prototype.getPublicBaseKey = function() {
                        var t = new st.asn1.DERSequence({
                                array: [new st.asn1.DERObjectIdentifier({
                                    oid: "1.2.840.113549.1.1.1"
                                }), new st.asn1.DERNull]
                            }),
                            e = new st.asn1.DERSequence({
                                array: [new st.asn1.DERInteger({
                                    bigint: this.n
                                }), new st.asn1.DERInteger({
                                    int: this.e
                                })]
                            }),
                            i = new st.asn1.DERBitString({
                                hex: "00" + e.getEncodedHex()
                            }),
                            r = new st.asn1.DERSequence({
                                array: [t, i]
                            });
                        return r.getEncodedHex()
                    }, e.prototype.getPublicBaseKeyB64 = function() {
                        return Object(n["b"])(this.getPublicBaseKey())
                    }, e.wordwrap = function(t, e) {
                        if (e = e || 64, !t) return t;
                        var i = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
                        return t.match(RegExp(i, "g")).join("\n")
                    }, e.prototype.getPrivateKey = function() {
                        var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                        return t += e.wordwrap(this.getPrivateBaseKeyB64()) + "\n", t += "-----END RSA PRIVATE KEY-----", t
                    }, e.prototype.getPublicKey = function() {
                        var t = "-----BEGIN PUBLIC KEY-----\n";
                        return t += e.wordwrap(this.getPublicBaseKeyB64()) + "\n", t += "-----END PUBLIC KEY-----", t
                    }, e.hasPublicKeyProperty = function(t) {
                        return t = t || {}, t.hasOwnProperty("n") && t.hasOwnProperty("e")
                    }, e.hasPrivateKeyProperty = function(t) {
                        return t = t || {}, t.hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
                    }, e.prototype.parsePropertiesFrom = function(t) {
                        this.n = t.n, this.e = t.e, t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff)
                    }, e
                }(Z)
        }
    }
]);