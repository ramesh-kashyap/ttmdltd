(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-60c8a75a"], {
        "3f4a": function(e, t, o) {
            "use strict";
            o("8b4e")
        },
        "8b4e": function(e, t, o) {},
        "9b23": function(e, t, o) {
            "use strict";
            o.r(t);
            var r = function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "page",
                        class: {
                            full: e.isFull
                        },
                        style: {
                            background: e.bgColor
                        }
                    }, [e._t("bg"), !e.$route.query.isApp && e.header ? t("div", {
                        ref: "header",
                        staticClass: "headers"
                    }, [e._t("header")], 2) : e._e(), t("div", {
                        staticClass: "content-container",
                        attrs: {
                            id: "scroll"
                        }
                    }, [t("div", {
                        staticClass: "content-scroll",
                        attrs: {
                            id: "content"
                        }
                    }, [e._t("content")], 2)]), e.footer ? t("div", {
                        ref: "footers",
                        staticClass: "footer"
                    }, [e._t("footer")], 2) : e._e(), e._t("default")], 2)
                },
                s = [],
                i = {
                    name: "PageScroll",
                    props: {
                        header: {
                            type: Boolean,
                            default: !0
                        },
                        headerFixed: {
                            type: Boolean,
                            default: !1
                        },
                        bgColor: {
                            type: String
                        },
                        footer: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data() {
                        return {
                            isIOS: !1,
                            backTop: !1,
                            head_height: "",
                            footer_height: ""
                        }
                    },
                    computed: {
                        isFull() {
                            try {
                                let e = window.screen.height / window.screen.width,
                                    t = window.screen.height == window.screen.availHeight ? 1.8 : 1.65,
                                    o = /Android/.test(navigator.userAgent);
                                return !!(o && e > t)
                            } catch (e) {
                                return !1
                            }
                        }
                    },
                    activated() {
                        window.onresize = () => (() => {
                            this.head_height = this.$refs.header.offsetHeight, this.$refs.footer && (this.footer_height = this.$refs.footer.offsetHeight)
                        })();
                        let e = null,
                            t = this;
                        e = setInterval((function() {
                            var o;
                            let r = null === (o = t.$refs.header) || void 0 === o ? void 0 : o.offsetHeight;
                            r && (t.head_height = r), void 0 != t.$refs.footers && (t.footer_height = t.$refs.footers.offsetHeight), window.clearInterval(e)
                        }), 300)
                    },
                    methods: {}
                },
                a = i,
                n = (o("3f4a"), o("2877")),
                d = Object(n["a"])(a, r, s, !1, null, "6e2d35de", null);
            t["default"] = d.exports
        }
    }
]);