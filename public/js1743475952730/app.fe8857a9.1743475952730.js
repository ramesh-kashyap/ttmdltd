(function(e) {
    function o(o) {
        for (var a, n, c = o[0], r = o[1], s = o[2], l = 0, u = []; l < c.length; l++) n = c[l], Object.prototype.hasOwnProperty.call(t, n) && t[n] && u.push(t[n][0]), t[n] = 0;
        for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
        m && m(o);
        while (u.length) u.shift()();
        return d.push.apply(d, s || []), i()
    }

    function i() {
        for (var e, o = 0; o < d.length; o++) {
            for (var i = d[o], a = !0, n = 1; n < i.length; n++) {
                var c = i[n];
                0 !== t[c] && (a = !1)
            }
            a && (d.splice(o--, 1), e = r(r.s = i[0]))
        }
        return e
    }
    var a = {},
        n = {
            app: 0
        },
        t = {
            app: 0
        },
        d = [];

    function c(e) {
        return r.p + "js1743475952730/" + ({
            qrcodejs2: "qrcodejs2",
            html2canvas: "html2canvas",
            echarts: "echarts"
        }[e] || e) + ".fe8857a9.1743475952730.js?v=1743475952730"
    }

    function r(o) {
        if (a[o]) return a[o].exports;
        var i = a[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.e = function(e) {
        var o = [],
            i = {
                "chunk-00b1464f": 1,
                "chunk-02571e75": 1,
                "chunk-0467bfef": 1,
                "chunk-05cf8a80": 1,
                "chunk-05e98ee6": 1,
                "chunk-06db75b0": 1,
                "chunk-0a2276bd": 1,
                "chunk-0a6fdc28": 1,
                "chunk-0a9d4c1a": 1,
                "chunk-0fc1ae1a": 1,
                "chunk-11cbeef1": 1,
                "chunk-11f54b20": 1,
                "chunk-12bf2108": 1,
                "chunk-13bbd6ca": 1,
                "chunk-150efc72": 1,
                "chunk-179a3425": 1,
                "chunk-17ff7542": 1,
                "chunk-1fa2c62c": 1,
                "chunk-612bc8a5": 1,
                "chunk-22ed309e": 1,
                "chunk-24e28c7e": 1,
                "chunk-27780c3e": 1,
                "chunk-2a63ff99": 1,
                "chunk-2f63d074": 1,
                "chunk-358132a8": 1,
                "chunk-367626f4": 1,
                "chunk-37b0eb9c": 1,
                "chunk-39d146b7": 1,
                "chunk-3ba32d0e": 1,
                "chunk-3cf9912c": 1,
                "chunk-3d8be4d2": 1,
                "chunk-3f8e14ab": 1,
                "chunk-457ffc6a": 1,
                "chunk-46a98347": 1,
                "chunk-4a5a5d5c": 1,
                "chunk-4e5443b7": 1,
                "chunk-5412a522": 1,
                "chunk-5469d51a": 1,
                "chunk-5576a184": 1,
                "chunk-55778048": 1,
                "chunk-56c2ea94": 1,
                "chunk-56fc5a82": 1,
                "chunk-5e0ab739": 1,
                "chunk-5f936813": 1,
                "chunk-60a045bc": 1,
                "chunk-60c8a75a": 1,
                "chunk-655f6f38": 1,
                "chunk-67912ed2": 1,
                "chunk-6b11ef3e": 1,
                "chunk-747287e5": 1,
                "chunk-75ff273e": 1,
                "chunk-784bd9e6": 1,
                "chunk-7f362702": 1,
                "chunk-7f5eb6f1": 1,
                "chunk-8608e1ee": 1,
                "chunk-a0d2fdee": 1,
                "chunk-a7d8f170": 1,
                "chunk-a93d254e": 1,
                "chunk-b2c9775c": 1,
                "chunk-b5658432": 1,
                "chunk-b9b99008": 1,
                "chunk-cff1fc4a": 1,
                "chunk-d442c3f6": 1,
                "chunk-d8c53f1e": 1,
                "chunk-fbb0ddbe": 1,
                "chunk-fe2cb7fa": 1,
                "chunk-115aa5d8": 1,
                "chunk-1d75aade": 1,
                "chunk-2ce17b60": 1,
                "chunk-e73ceb0c": 1,
                "chunk-2ad5cbd6": 1,
                "chunk-3553982a": 1,
                "chunk-41993a66": 1,
                "chunk-5913b628": 1,
                "chunk-6486eece": 1,
                "chunk-65fa755e": 1,
                "chunk-6ce7d076": 1,
                "chunk-6f896b4e": 1,
                "chunk-709c9e2a": 1,
                "chunk-7486a5bb": 1,
                "chunk-778cd5af": 1,
                "chunk-b01a6a6a": 1,
                "chunk-0d09da43": 1,
                "chunk-55bf73f6": 1,
                "chunk-4352c730": 1,
                "chunk-0dfccd70": 1,
                "chunk-353b28dc": 1,
                "chunk-bcc45786": 1,
                "chunk-0b116a05": 1,
                "chunk-28a1e141": 1,
                "chunk-72096956": 1,
                "chunk-7f6f1de4": 1,
                "chunk-bb17762c": 1,
                "chunk-cc890d58": 1,
                "chunk-28129af0": 1,
                "chunk-16177448": 1
            };
        n[e] ? o.push(n[e]) : 0 !== n[e] && i[e] && o.push(n[e] = new Promise((function(o, i) {
            for (var a = "static/css/" + ({
                    qrcodejs2: "qrcodejs2",
                    html2canvas: "html2canvas",
                    echarts: "echarts"
                }[e] || e) + "." + {
                    "chunk-00b1464f": "674dbd13",
                    "chunk-02571e75": "81385532",
                    "chunk-0467bfef": "abd9029c",
                    "chunk-05cf8a80": "f17c0737",
                    "chunk-05e98ee6": "bea82fa2",
                    "chunk-06db75b0": "bd5bcc86",
                    "chunk-0a2276bd": "65a6b36e",
                    "chunk-0a6fdc28": "56024ee6",
                    "chunk-0a9d4c1a": "0a6fd2b9",
                    "chunk-0fc1ae1a": "f8c86eb9",
                    "chunk-11cbeef1": "fddaeca1",
                    "chunk-11f54b20": "00ba71bb",
                    "chunk-12bf2108": "870170d0",
                    "chunk-13bbd6ca": "f852c76a",
                    "chunk-150efc72": "05d3baaa",
                    "chunk-179a3425": "d4b887a4",
                    "chunk-17ff7542": "34892cae",
                    "chunk-1fa2c62c": "75d456e0",
                    "chunk-612bc8a5": "a3813916",
                    "chunk-22ed309e": "03a15ff8",
                    "chunk-24e28c7e": "4246decd",
                    "chunk-27780c3e": "ddc32929",
                    "chunk-2a63ff99": "597831fb",
                    "chunk-2f63d074": "281755cb",
                    "chunk-358132a8": "4b5a00ff",
                    "chunk-367626f4": "8674be05",
                    "chunk-37b0eb9c": "90e69707",
                    "chunk-39d146b7": "e86e8ed5",
                    "chunk-3ba32d0e": "a6dbde8d",
                    "chunk-3cf9912c": "12730d60",
                    "chunk-3d8be4d2": "0173d8a7",
                    "chunk-3f8e14ab": "f663522d",
                    "chunk-457ffc6a": "cbdcd60f",
                    "chunk-46a98347": "977e0db2",
                    "chunk-4a5a5d5c": "e813a59f",
                    "chunk-4e5443b7": "a3c3417a",
                    "chunk-5412a522": "b373626a",
                    "chunk-5469d51a": "05fee3d1",
                    "chunk-5576a184": "9f52f39a",
                    "chunk-55778048": "d9711f02",
                    "chunk-56c2ea94": "75f4a7a8",
                    "chunk-56fc5a82": "1ac791b6",
                    "chunk-5b5516a4": "31d6cfe0",
                    "chunk-5e0ab739": "6c7eaad5",
                    "chunk-5f936813": "7deb1a32",
                    "chunk-60a045bc": "4a4f5e75",
                    "chunk-60c8a75a": "d6f6b692",
                    "chunk-655f6f38": "672f2a0f",
                    "chunk-67912ed2": "ae8d438d",
                    "chunk-6b11ef3e": "540ca443",
                    "chunk-747287e5": "9009fee8",
                    "chunk-75ff273e": "12bb350e",
                    "chunk-784bd9e6": "2d543ee6",
                    "chunk-7f362702": "6a53b834",
                    "chunk-7f5eb6f1": "ec2f3d1d",
                    "chunk-8608e1ee": "bd5e62a5",
                    "chunk-a0d2fdee": "25d20be3",
                    "chunk-a7d8f170": "c87a4291",
                    "chunk-a93d254e": "21e5bd91",
                    "chunk-b2c9775c": "b1e4da02",
                    "chunk-b5658432": "1d75afbf",
                    "chunk-b9b99008": "43c27942",
                    "chunk-cff1fc4a": "ef317632",
                    "chunk-d442c3f6": "e7d844c3",
                    "chunk-d8c53f1e": "a36af7a0",
                    "chunk-fbb0ddbe": "4fc8d20e",
                    "chunk-fe2cb7fa": "057faa9c",
                    "chunk-115aa5d8": "9d416f08",
                    "chunk-1d75aade": "809442e7",
                    "chunk-223d9f74": "31d6cfe0",
                    "chunk-2ce17b60": "8e0255c3",
                    "chunk-2d0e44a1": "31d6cfe0",
                    "chunk-e73ceb0c": "0a712e06",
                    "chunk-2ad5cbd6": "cd430570",
                    "chunk-3553982a": "589d4855",
                    "chunk-41993a66": "791df78f",
                    "chunk-5913b628": "4197d1b3",
                    "chunk-6486eece": "1ce7ed48",
                    "chunk-65fa755e": "5030464b",
                    "chunk-6ce7d076": "89904efc",
                    "chunk-6f896b4e": "5bb66763",
                    "chunk-709c9e2a": "9750666e",
                    "chunk-7486a5bb": "7212a656",
                    "chunk-778cd5af": "1f57e43c",
                    "chunk-b01a6a6a": "c34bdf5b",
                    qrcodejs2: "31d6cfe0",
                    "chunk-0d09da43": "555d1171",
                    "chunk-55bf73f6": "490d1e59",
                    html2canvas: "31d6cfe0",
                    "chunk-4352c730": "4b7bd544",
                    "chunk-0dfccd70": "12d33311",
                    "chunk-353b28dc": "5ad553f6",
                    "chunk-bcc45786": "50818f65",
                    echarts: "31d6cfe0",
                    "chunk-0119f9da": "31d6cfe0",
                    "chunk-0b116a05": "250ed6be",
                    "chunk-28a1e141": "42e744fb",
                    "chunk-72096956": "793233ad",
                    "chunk-7f6f1de4": "fc9e85b3",
                    "chunk-bb17762c": "89cc2aa3",
                    "chunk-cc890d58": "d1709a57",
                    "chunk-28129af0": "d57ace9f",
                    "chunk-16177448": "94e51d29"
                }[e] + ".css", t = r.p + a, d = document.getElementsByTagName("link"), c = 0; c < d.length; c++) {
                var s = d[c],
                    l = s.getAttribute("data-href") || s.getAttribute("href");
                if ("stylesheet" === s.rel && (l === a || l === t)) return o()
            }
            var u = document.getElementsByTagName("style");
            for (c = 0; c < u.length; c++) {
                s = u[c], l = s.getAttribute("data-href");
                if (l === a || l === t) return o()
            }
            var m = document.createElement("link");
            m.rel = "stylesheet", m.type = "text/css", m.onload = o, m.onerror = function(o) {
                var a = o && o.target && o.target.src || t,
                    d = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                d.code = "CSS_CHUNK_LOAD_FAILED", d.request = a, delete n[e], m.parentNode.removeChild(m), i(d)
            }, m.href = t;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(m)
        })).then((function() {
            n[e] = 0
        })));
        var a = t[e];
        if (0 !== a)
            if (a) o.push(a[2]);
            else {
                var d = new Promise((function(o, i) {
                    a = t[e] = [o, i]
                }));
                o.push(a[2] = d);
                var s, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, r.nc && l.setAttribute("nonce", r.nc), l.src = c(e);
                var u = new Error;
                s = function(o) {
                    l.onerror = l.onload = null, clearTimeout(m);
                    var i = t[e];
                    if (0 !== i) {
                        if (i) {
                            var a = o && ("load" === o.type ? "missing" : o.type),
                                n = o && o.target && o.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + a + ": " + n + ")", u.name = "ChunkLoadError", u.type = a, u.request = n, i[1](u)
                        }
                        t[e] = void 0
                    }
                };
                var m = setTimeout((function() {
                    s({
                        type: "timeout",
                        target: l
                    })
                }), 12e4);
                l.onerror = l.onload = s, document.head.appendChild(l)
            }
        return Promise.all(o)
    }, r.m = e, r.c = a, r.d = function(e, o, i) {
        r.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: i
        })
    }, r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, o) {
        if (1 & o && (e = r(e)), 8 & o) return e;
        if (4 & o && "object" === typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & o && "string" != typeof e)
            for (var a in e) r.d(i, a, function(o) {
                return e[o]
            }.bind(null, a));
        return i
    }, r.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return r.d(o, "a", o), o
    }, r.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, r.p = "/", r.oe = function(e) {
        throw console.error(e), e
    };
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = s.push.bind(s);
    s.push = o, s = s.slice();
    for (var u = 0; u < s.length; u++) o(s[u]);
    var m = l;
    d.push([0, "core-js", "vue", "vant", "crypto-js", "axios", "compressorjs", "vendors~app"]), i()
})({
    0: function(e, o, i) {
        e.exports = i("56d7")
    },
    "030a": function(e, o, i) {
        "use strict";
        o.__esModule = !0, o.default = void 0;
        var a = {
            name: "اسم",
            tel: "هاتف",
            save: "حفظ",
            confirm: "تأكيد",
            cancel: "إلغاء",
            delete: "حذف",
            complete: "مكتمل",
            loading: "جار التحميل...",
            telEmpty: "الرجاء إدخال رقم الهاتف",
            nameEmpty: "الرجاء كتابة اسمك",
            nameInvalid: "الرجاء إدخال الاسم الصحيح",
            ConfirmDelete: "هل أنت متأكد أنك تريد حذف",
            telInvalid: "الرجاء إدخال رقم هاتف محمول صحيح",
            vanCalendar: {
                end: "نهاية",
                start: "يبدأ",
                title: "اختيار التاريخ",
                confirm: "بالتأكيد",
                startEnd: "بداية النهاية",
                weekdays: ["يوم", "واحد", "اثنين", "ثلاثة", "أربعة", "الخمسات", "ستة"],
                monthTitle: function(e, o) {
                    return e + "年" + o + "月"
                },
                rangePrompt: function(e) {
                    return "选择天数不能超过 " + e + " 天"
                }
            },
            vanCascader: {
                select: "اختر من فضلك"
            },
            vanContactCard: {
                addText: "اضف جهات اتصال"
            },
            vanContactList: {
                addText: "جهة اتصال جديدة"
            },
            vanPagination: {
                prev: "الصفحة السابقة",
                next: "الصفحة التالية"
            },
            vanPullRefresh: {
                pulling: "للتحديث اسحب للأسفل...",
                loosing: "حرر للتحديث..."
            },
            vanSubmitBar: {
                label: "المجموع："
            },
            vanCoupon: {
                unlimited: "لا يوجد حد للاستخدام",
                discount: function(e) {
                    return e + "折"
                },
                condition: function(e) {
                    return "满" + e + "元可用"
                }
            },
            vanCouponCell: {
                title: "优惠券",
                tips: "暂无可用",
                count: function(e) {
                    return e + "张可用"
                }
            },
            vanCouponList: {
                empty: "暂无优惠券",
                exchange: "兑换",
                close: "不使用优惠券",
                enable: "可用",
                disabled: "不可用",
                placeholder: "请输入优惠码"
            },
            vanAddressEdit: {
                area: "地区",
                postal: "邮政编码",
                areaEmpty: "请选择地区",
                addressEmpty: "请填写详细地址",
                postalEmpty: "邮政编码格式不正确",
                defaultAddress: "设为默认收货地址",
                telPlaceholder: "收货人手机号",
                namePlaceholder: "收货人姓名",
                areaPlaceholder: "选择省 / 市 / 区"
            },
            vanAddressEditDetail: {
                label: "详细地址",
                placeholder: "街道门牌、楼层房间号等信息"
            },
            vanAddressList: {
                add: "新增地址"
            }
        };
        o.default = a
    },
    "05a2": function(e, o) {
        function i() {
            let e = /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent);
            return e
        }(function(e, o) {
            const a = e.documentElement,
                n = "orientationchange" in window ? "orientationchange" : "resize",
                t = () => {
                    const e = a.clientWidth;
                    i() ? (a.style.fontSize = e / 375 * 50 + "px", a.classList.remove("pc")) : (a.classList.add("pc"), a.style.fontSize = "50px")
                };
            e.addEventListener && (o.addEventListener(n, t, !1), e.addEventListener("DOMContentLoaded", t, !1))
        })(document, window)
    },
    1: function(e, o) {},
    "13d5": function(e) {
        e.exports = JSON.parse('{"title":{"doc0":"Home","doc1":"TTMD Strategy","doc2":"Strategy","doc3":"Maximize records","doc4":"Team","doc5":"Team List","doc6":"My messages","doc7":"Mission Center","doc8":"Assets","doc9":"Asset Details","doc10":"Deposit","doc11":"Withdrawal","doc12":"Mine","doc13":"Upgrade Level","doc14":"Feedback","doc15":"Help Center","doc16":"Help details","doc17":"Set fund password","doc18":"Switch Language","doc19":"Modify login password","doc20":"Reset login password","doc21":"Real-Name authentication center","doc22":"Personal information","doc23":"Authentication","doc24":"Upload ID photo","doc25":"Login","doc26":"Registration","doc27":"Invite friends","doc28":"Select deposit channel","doc29":"Select withdrawal channel","doc30":"Withdrawal of fiat currency","doc31":"Fiat currency recharge"},"load":{"refreshed":"Refreshed successfully","loosing":"Release to refresh...","loading":"Loading...","no_more":"No more","no_open":"Not yet open"},"page":{"doc1":"Total Assets","doc2":"Make money immediately through TTMD quantitatively","doc3":"Deposit","doc4":"Withdraw","doc5":"TTMD Quantitative Advantage","doc6":"Markets of major exchanges","doc7":"Currency/Name","doc8":"Last price","doc9":"24H ups and downs","doc10":"Safe operation days","doc11":"Days","doc12":"Cumulative output income","doc13":"Absolute security mechanism","doc14":"All the funds of the user are in their own Binance exchange. The TTMD quantitative platform only charges software technology usage fees. Binance charges a fee for each transaction. Internet running.","doc15":"Strict Security Mechanisms","doc16":"Operate funds arbitrage through the exchange API. This software server server does not store the user\'s API key, but only stores it in the user\'s computer. There is no need to worry about hacker intrusion, and the API does not require withdrawal permission!","doc17":"Flexible policy parameters","doc18":"Nearly programmable trading strategies make traders more comfortable with their hands, such as Tiger Wings! One-click hosting can help new users save a lot of time to learn software","doc19":"Powerful intelligent analysis","doc20":"After the pangu quantitative distributed Quote Server collects the exchange market, it uses the server\'s powerful artificial intelligence to analyze, process and filter the market data, and provide the best decision-making plan!","doc21":"Sustainable development","doc22":"Digital currency trading will be a long-term market, Pangu will continue to improve and provide you with more value-added services!","doc23":"Withdrawal currency","doc24":"Bank","doc25":"Enter the name of the withdrawal bank","doc26":"Withdrawal Amount","doc27":"Please enter the withdrawal amount","doc28":"Available Balance","doc29":"Please enter the withdrawal information","doc30":"Name","doc31":"Please enter your name","doc32":"Bank Card Number","doc33":"enter the bank card number","doc34":"Handling Fee","doc35":"Actual arrival","doc36":"Confirm","doc37":"Warm reminder","doc38":"It will take approximately 3-5 minutes to arrive after the fiat currency withdrawal is successful, please be patient.","doc39":"Please enter the fund password","doc40":"Confirm Withdrawal","doc41":"Security protection","doc42":"Please set the fund password first","doc43":"Select Network","doc44":"Select Currency","doc45":"Withdrawal Address","doc46":"Withdrawal Amount","doc47":"Please enter the withdrawal amount","doc48":"All","doc49":"Asset balance","doc50":"Cancel","doc51":"Please enter the withdrawal address","doc52":"Copy successfully","doc53":"No record yet","doc54":"Currency","doc55":"Type","doc56":"Date","doc57":"Start Date","doc58":"End Date","doc59":"Select Type","doc60":"Income","doc61":"Expenses","doc62":"Cash Deposit","doc63":"Cash Withdrawal","doc64":"Deposit currency","doc65":"Number of deposits","doc66":"Please enter the recharge amount","doc67":"Deposit Amount","doc68":"It will take approximately 3-5 minutes to arrive after the fiat recharge is successful. Please wait patiently. The handling fee will be deducted from the amount received.","doc69":"Confirm deposit","doc70":"Copy","doc71":"Note","doc722222":"Minimum deposit: {i1} USDT, if it is less than the minimum amount, it will not be credited to the account. Please do not deposit non-USDT assets to the above address, otherwise the assets cannot be recovered. Your deposit address will not change frequently, and you can deposit repeatedly. Replacement, we will notify you by announcement or email.","doc72":"You need to obtain the latest deposit address for each recharge. The deposit address will expire after ten minutes. TTMD will not be responsible for the loss of funds caused by transferring the expired address account!","doc73":"Current price","doc74":"Transaction History","doc75":"USDT Deposit","doc76":"Payment in Vietnamese fiat","doc77":"USDT Withdrawal","doc78":"Withdrawal in Vietnamese fiat","doc79":"Please enter your phone number","doc80":"Please enter your email address","doc81":"SMS verification code","doc82":"Email Verification code","doc83":"Get verification code","doc84":"Invitation code cannot be empty","doc85":"Please enter a password (6-20 alphanumeric characters)","doc86":"Please enter your password again","doc87":"I read and agree","doc88":"User Registration Agreement","doc89":"Have an account? Immediately","doc90":"APP download","doc91":"Choose an international phone area code","doc92":"Search area code","doc93":"Language switch","doc94":"Mobile phone registration","doc95":"Email registration","doc96":"Frequent operations. Try again later","doc97":"Please enter the correct phone number","doc98":"Please enter the correct email address","doc99":"Successfully sent","doc100":"The password should be 6-20 alphanumeric characters","doc101":"The two passwords are inconsistent","doc102":"Please check the User Registration Agreement","doc103":"Registration successful","doc104":"Please enter your password","doc105":"Forgot password","doc106":"No account? Immediately","doc107":"Mobile login","doc108":"Email login","doc109":"Login successful","doc110":"Mobile phone","doc111":"Mailbox","doc112":"Login Password","doc113":"Confirm password","doc114":"Please enter your password again","doc115":"Verification code","doc116":"Total Income","doc117":"Total Deposit","doc118":"Total Withdrawal ","doc119":"Team Data Overview","doc120":"New Users","doc121":"Today\'s Income","doc122":"Add recharge","doc123":"Add withdrawal","doc124":"Revenue Analysis","doc125":"Cumulative Team Size","doc126":"View Team List","doc127":"Cumulative Income","doc128":"Cumulative Deposit","doc129":"Cumulative Withdrawal","doc130":"Three-Generation Data","doc131":"First Generation Data","doc132":"Second Generation Data","doc133":"Third Generation Data","doc134":"Number of Users","doc135":"Withdrawal Amount","doc136":"Today","doc137":"Last 7 days","doc138":"Last 30 days","doc139":"Last 60 days","doc140":"Task Earnings","doc141":"Quantitative Income","doc142":"Recommended quantitative reward","doc143":"Invalid User","doc144":"Completed","doc145":"In progress","doc146":"Receive rewards","doc147":"Daily tasks","doc148":"Growth task","doc149":"Select time","doc150":"Investment Amount ","doc151":"Profit","doc152":"Buy platform","doc153":"Sell platform","doc154":"Buy Price","doc155":"Ask price","doc156":"Cryptocurrency","doc157":"Complete Time","doc158":"Quantitative records","doc159":"Today\'s earnings","doc160":"Revenue in the last 7 days","doc161":"Number of starts remaining today","doc162":"Revenue","doc163":"Single start TTMD quantization","doc164":"TTMD run panel process","doc165":"Gender","doc166":"Male","doc167":"Female","doc168":"Nationality","doc169":"Please enter nationality","doc170":"Document type","doc171":"Document number","doc172":"Please enter the document number","doc173":"Document photo upload","doc174":"Select document","doc175":"ID card","doc176":"Passport","doc177":"Please upload a frontal photo of your ID card","doc178":"Please upload your passport","doc179":"Please upload a photo of the reverse side of your ID card","doc180":"Nickname","doc181":"Mobile phone number","doc182":"Mailbox number","doc183":"Real-name authentication","doc184":"De-authenticate","doc185":"Failed","doc186":"Pending review","doc187":"Authenticated","doc188":"Save","doc189":"Update successful","doc190":"Current level","doc191":"Next membership level","doc192":"Valid amount","doc193":"Valid member","doc194":"Class list","doc195":"Grade","doc196":"The TTMD robot can be used every day","doc197":"Please enter the verification code","doc198":"Old password","doc199":"Please enter your old transaction password","doc200":"Funding password","doc201":"Please enter the transaction password","doc202":"Enter the password again to confirm","doc203":"1. Your fund password is used for trading, withdrawal and account security settings. It is recommended not to be the same as the login password. This site is not responsible for the theft of the account generated by this;","doc204":"2. After changing the fund password, you cannot withdraw within 48 hours.","doc205":"Modify transaction password","doc206":"Reset transaction password","doc207":"Set transaction password","doc208":"Incorrect password format","doc209":"Please enter the old password","doc210":"Please enter your old login password","doc211":"New password","doc212":"New login password, 6-20 numbers and letters","doc213":"Set successfully","doc214":"Invitation link","doc215":"Copy invitation link","doc216":"Invitation Code","doc217":"Copy invitation code","doc218":"Not certified","doc219":"Your document review failed","doc220":"Your document is under review","doc221":"Personal privacy information security assurance","doc222":"Improve identity information and experience more services","doc223":"To perfect","doc224":"Currently opening the highest discount channel","doc225":"Ordinary user","doc226":"Channel","doc227":"Upgrade","doc228":"Asset overview","doc229":"Sign Out","doc230":"Customer Service","doc231":"Transaction Password","doc232":"Clear Cache","doc233":"Exit successfully","doc234":"Clear successfully","doc235":"Please enter your comments","doc236":"Submit","doc237":"Software function problem","doc238":"Complaints and suggestions","doc239":"Bug report","doc240":"Other","doc241":"Please enter your feedback","doc242":"Photo/Upload your second-generation ID card","doc243":"Photo/Upload your passport","doc244":"Click to shoot/upload portrait faces","doc245":"Click to shoot/upload Guowei Noodles","doc246":"Confirm upload","doc247":"TTMD Wallet","doc248":"Times","doc249":"Users","doc250":"If you haven\'t invited friends for a long time, your assets will not be able to be withdrawn. You can resume the withdrawal by inviting friends","doc251":"Split ratio","doc252":"Today\'s currency holding income","doc254":"Platform Introduction","doc255":"Introduction to Intelligent Quantification of Human Resources","doc256":"There are many digital currency exchanges in the world, and each exchange has the function of exchanging fiat currency for digital currency. The price of exchanging fiat currency for digital currency is different for each exchange, and people can buy it at a low price buy in, sell at a high price, and earn exchange rate differences","doc257":"The process of manually buying low and selling high on multiple exchanges is very time-consuming. When prices change, operations and trading will take too long and will miss the best exchange rates, resulting in lower trading profits .","doc258":"Therefore, TTMD automatic quantification system seems to avoid manual problems and improve the profit margin of quantitative trading.<br>TTMD automatic quantification system can automatically search for BTC, ETH, USDT and other digital currencies on major exchanges Lowest sale price and buy fast in seconds.<br/><br/>When the currency price reaches the system, it will be fast sold in seconds when the sale price is set automatically.<br/ ><br/>In just a few minutes, the process of buying at a low price and selling at a high price can be completed automatically<br/><br/>Quantitative transactions can be completed quickly.24 hours of uninterrupted data collection, no need to manually observe the market , You can earn income efficiently and stably, this is the TTMD automatic quantification system.","doc259":"How to make money","doc260":"Click the button to start the automatic quantitative transaction, and the automatic quantitative transaction will be completed within 3-5 minutes.<br/>50% of the income from completing the automatic quantitative transaction is the profit earned by the platform, and the remaining 50% is earned by the platform The profit taken. The profit belongs to the user.","doc261":"Example: Buy BTC at 5000USDT on Binance, sell BTC at 5050USDT on Ouyi, <br/>earn 50USDT profit.<br/>The platform will get 25 USDT profit, keep The next 25USDT profit belongs to the user.","doc262":"Introduction to VIP Level Earnings","doc2633":"Level operation amount 1-500<br/>You can make 3 automatic quantitative transactions per day, and the rate of return for each quantitative transaction is 2.0%-3.0%. 500USDT can earn 10USDT- 15USDT.","doc263":"Level operation amount is 500-4999<br/>You can make 3 automatic quantitative transactions per day, and the rate of return for each quantitative transaction is 2.0%-3.0%. 1000USDT can earn 20USDT- 30USDT.","doc264":"Level operation amount 3000-9999<br/>You can make 4 automatic quantitative transactions per day, and the rate of return for each quantitative transaction is 2.5%-3.5%. 1000USDT can earn 25USDT- 35USDT.","doc2644":"Level operation amount 5000-99999<br/>You can make 5 automatic quantitative transactions per day, and the rate of return for each quantitative transaction is 3.0%-4.0%. 1000USDT can earn 30USDT- 40USDT.","doc2645":"Level operation amount 10000-999999<br/>You can make 6 automatic quantitative transactions per day, and the rate of return for each quantitative transaction is 3.5%-4.5%. 1000USDT can earn 35USDT- 45USDT.","doc2646":"Amount of level operation 20000-999999<br/>You can make 7 automatic quantitative transactions per day, and the rate of return for each quantitative transaction is 3.5%-4.5%. 1000USDT can earn 35USDT- 45USDT.","doc265":"Withdrawal fee for each VIP level","doc2655":"When you are VIP0, you will be charged 3% for withdrawal procedures<br/>When you are VIP1, you will be charged 3% for withdrawal procedures<br/>When you are VIP2, you will be charged 2% for withdrawal procedures<br/>When you are VIP3, you will be charged for withdrawal procedures 2% charge<br/>1.5% when you are VIP4 withdrawal procedure<br/>1% when you are VIP5 withdrawal procedure","doc2656":"Introduce/Invite Level 3 Delegation","doc266":"In order to quickly promote the TTMD automatic quantitative trading APP, increase the popularity of the platform, and allow more investors to join TTMD. TTMD decided to adopt a three-tier distribution model for promotion and quickly accumulate platform users.","doc267":"Three-level distribution is the fastest way to develop users in all marketing models. In order to improve development speed and agency benefits, TTMD has established the following three-level distribution mechanism.","doc268":"1. Use your own invitation code to invite friend A around you to join TTMD, and you can get 18% of friend A\'s daily automatic quantitative trading income","doc269":"2. Your friend A uses his invitation code to invite his friend B to join TTMD, and you can get 6% of friend B\'s daily automatic quantitative trading income","doc270":"3. Friend B uses his invitation code to invite his friend C to join TTMD, and you can get 3% of friend C\'s daily automatic quantitative trading income.","doc271":"If you form your own team, your friend A invites friend B to join, and friend B invites friend C to join, then you will form a complete tertiary distribution team.<br/><br/>When When your friend A, friend B, and friend C complete today\'s automatic quantitative transaction, you can get 18+6+3=27% of their income as a team commission on the agency commission day.","doc2657":"How to Calculate Your Team Commission","doc2658":"All your subordinates are 10A+100B+1000C=1110 people<br/>Assuming all your subordinates earn $100 per day in their accounts,<br/>Your A-level agency team commission Income=100*18%*10 people=$180,<br/>Your B-level agency team commission income=100*6%*100 people=$600,<br/>Your C-level agency team commission income= 100*3%*1000 people=$3000,<br/>Your daily team income is A100+B180+C3000=$3780,<br/>Your monthly team income is 3780*30 days=$113400,< br/>Your annual team income is 3780*365 days = $1379700,<br/><br/>This is a very important income","doc272":"Earn interest","doc273":"Earning interest","doc274":"Deposit to earn interest income","doc275":"Contact us","doc276":"Invalid","doc277":"Rejected","doc278":"Under review","doc279":"Surname","doc280":"Name","doc281":"Please enter your last name","doc282":"Please enter your first name","doc283":"Withdrawal will arrive within 72 hours","doc284":"VIP1: Level operation amount 35-500<br>You can make 3 automatic quantitative transactions per day, and the daily rate of return for quantitative trading is 1.7%-1.9%.<br>500USDT can earn 3 automatic quantitative transactions per day Take 8USDT-10USDT.<br><br>VIP2: Level operation amount 500-3000<br>You can make 4 automatic quantitative transactions per day, and the daily rate of return for quantitative transactions is 2.1%-2.3%.<br>3000USDT per day 4 times of automatic quantification can earn 60USDT-70USDT.<br><br>Withdrawal fee for each VIP level<br>In order to quickly promote the TTMD automatic quantitative payment APP, increase the popularity of the platform, and allow more investors< br>Join TTMD. TTMD decided to use a three-tier distribution model for promotion, and quickly accumulate platform users.<br><br>Three-tier distribution is the fastest way to develop users in all marketing models, in order to improve development speed and agency<br >Welfare, TTMD has established the following three-level distribution system.<br><br>1. Use your invitation code to invite friend A around you to join TTMD, you can get 21% of friend A\'s daily<br>automatic quantified trading income %.<br>2. Your friend A uses his invitation code to invite his friend B to join TTMD, you can activate friend B<br>7% of the daily automatic quantitative trading income.<br><br>3. Friend B uses his invitation code to invite his friend C to join TTMD, you can activate Friend C\'s daily<br>3% of the trading income automatically quantified.<br><br>If you form your own team, your friend A Invite friend B to join, friend B invites friend C to join,<br>then you will form a complete three-level distribution team.<br><br>When your friend A, friend B, and friend C complete today\'s automatic quantitative transaction , you can get 21+7+3=31% team commission of their income on the agent commission day<br>.","doc285":"Experience days","doc286":"Profit percentage","doc287":"Commission percentage","doc288":"Please enter the correct mobile phone number to register. If you log in with an unverifiable mobile phone, you will not be able to change your password","doc289":"Please enter the correct email to register. If you use an unverifiable email to register and log in, you will not be able to change your password","doc290":"Order number","doc291":"Amount to Account","doc292":"Status","doc293":"Deposit Address","doc294":"Date created","doc295":"return","doc296":"Minimum deposit: 1 USDT less than the minimum amount will not be credited to the account<br>For each deposit, you need to obtain the latest deposit address, the deposit address will expire after ten minutes, and the transfer of expired address accounts and non-USDT assets caused by the loss of funds will not be found. Go back, TTMD is not responsible!","doc306":"Bind mobile phone number","doc307":"Bind Email","doc308":"No mobile phone number is bound","doc309":"Please bind your mailbox first","doc310":"Area code","doc311":"Please fill in the international mobile code","doc312":"To further protect account security, you need to complete mailbox binding authentication before logging in","doc313":"User ID","doc314":"Wheel of Fortune ","doc315":"There are","doc316":"Lucky draw opportunity ","doc317":"My prize ","doc318":"Rules","doc319":"Draws invited to valid members","doc320":"Lucky\\ndraw","doc321":"Get it now","doc322":"time","doc323":"prize","doc324":"Insufficient raffle times, please go to invite friends","doc325":"exchange rate","doc326":"Rotate","doc327":"Piggy bank","doc328":"Flash","doc329":"Electronic wallet","doc330":"Flexible wallet","doc331":"Piggy bank","doc332":"Quantitative income","doc333":"Receive the deposit tank","doc334":"Piggy bank tank level","doc335":"When the user level is the same as the savings tank level, you can receive the balance of the deposit tank. After a period of time, the money tank will be upgraded automatically.","doc336":"The balance of money for money","doc337":"Receive","doc338":"Upgrade days","doc339":"Piggy bank record","doc340":"Transfer currency","doc341":"balance","doc342":"Rotate the number","doc343":"Please enter the number of transferring","doc344":"OK to transfer","doc345":"The number of transfer cannot be greater than","doc346":"The number of transfer cannot be less than 1","doc347":"Cong","doc348":"to","doc349":"Exchange quantity","doc350":"Please enter the exchange quantity","doc351":"OK Flash","doc352":"The number of flashing cannot be greater than","doc353":"Please enter the number of flashing","doc354":"The number of flashing cannot be less than 1","doc355":"Direct push member","doc356":"Teammitglied","doc357":"The number of quantified times per day","doc358":"1. In order to prevent illegal money laundering activities, users of the first deposit need to be quantified daily to make withdrawal. BR> 3. In order to strictly ensure the security of account funds, the account will automatically trigger the funding system protection mechanism after changing the mailbox or TRC20 USDT withdrawal address and withdrawal password. > Each VIP -level withdrawal fee <br> VIP1 withdrawal fee 5.0%<br> VIP2 withdrawal fee 4.0%<br> VIP3 withdrawal fee 3.0%<br> VIP4 withdrawal fee 2.0% <br> VIP5 withdrawal fee 1.0%<br> VIP6 withdrawal fee 0.0%","doc359":"Next","doc360":"Yesterday\'s benefits","doc361":"General Team Commission","doc362":"Yesterday team commission","doc363":"Today\'s team commission","doc364":"More event information","doc365":"News Information","doc366":"Contract Pledge","doc367":"Rejection reason","doc7222222":"","doc72222222":""},"page2":{"doc1":"Flexible Fund","doc2":"To release funds","doc3":"Welcome to ITP","doc4":"Mobile Number","doc5":"Password","doc6":"Several times today","doc7":"Total income","doc8":"Total income of holding currency","doc9":"To release record","doc10":"VIP level","doc11":"Upgrade condition","doc12":"Equity","doc13":"Minimum quantification amount","doc14":"Maximum quantitative amount","doc15":"Daily quantified times","doc16":"daily chemical yield","doc17":"Absolute safety mechanism","doc18":"Achievements in quantitative trading","doc19":"Rigorous policy parameters","doc20":"Automatic arbitrage ideas","doc21":"Sustainable development","doc22":"The TTMD intelligent quantitative system calculates open positions very accurately.Automatically trades on your account and works 24*365.We set up AI quantitative trading in 2016.It makes every effort to steadily increase its monthly profits","doc23":"TTMD provides a large amount of transaction data for intelligent AI learning.After millions of rehearsals and manoeuvres.Disciplined decision making and implementation skills already in place.Goes live with a remarkable record of no failures or losses","doc24":"Based on the results of quantitative AI intelligence running decisions.The Quantitative Trading Intelligence system automatically selects growth compared to this phase.Valuation.Funding.Comprehensive assessment of favourable trading opportunities.Then make precise action strategies.Can avoid most“rack your brains”The decision of","doc25":"The quantification system scans opportunities through a comprehensive.Completely automated with a single click.Quickly lock in the profit spread between token products.By buying at low prices.Sell high to develop a strategy and make a profit","doc26":"Digital currency trading will be a long standing market.The TTMD quantitative intelligence system will continue to optimise performance.Latest digital algorithm.Providing you with more wealth enhancement","doc27":"Partner","doc28":"Share the Media","doc29":"Document front","doc30":"Reverse side of ID","doc31":"Handheld documents","doc32":"Submit review","doc33":"Unreal name","doc34":"Real -name certification failed","doc35":"Real -name to be reviewed","doc36":"Real -name certification","doc37":"Please authenticate first","doc38":"1.To prevent illegal money laundering activities.First time depositors need to complete 3 days of quantification before they can withdraw<br>2.Complete all quantified counts for the day and withdraw at least 39 USDT<br>3.The amount of each withdrawal is subject to the actual rules of the platform.and a fee is charged for each withdrawal as a maintenance fee for the platform change login password.Trading password.The funds security protection mechanism will be triggered<br>After 48 hours, the system will automatically release the funds protection status.Start the normal withdrawal process<br><br>Withdrawal Fee Rules<br>VIP1 Withdrawal fee 5.0%<br>VIP2 Withdrawal fee 4.0%<br>VIP3 Withdrawal fee 3.0%<br>VIP4 Withdrawal fee 2.0%<br>VIP5 Withdrawal fee 1.0%<br>VIP6 Withdrawal fee 0.0%","doc39":"Withdrawal Address","doc40":"Please enter the transaction password","doc41":"Please enter the withdrawal address","doc42":"Novice task","doc43":"Advanced Mission","doc44":"Please set the trading password first","doc45":"Cumulative effective members","doc46":"Effective balance","doc47":"Effective recharge","doc48":"Feedback type","doc49":"Your feedback","doc51":"Total {k1} people","doc52":"Friends level","doc53":"Total of the amount of commission the commission","doc54":"Total two -layer commission amount","doc55":"Total three -layer commission amount","doc56":"Effective","doc57":"Inferred","doc58":"One layer","doc59":"Two layers","doc60":"Three layers","doc61":"Select the level","doc62":"List of Assets","doc63":"TTMD Digital Technology","doc64":"Global Blockchain Ecology Construction","doc65":"AI hosting","doc66":"Trusted Details","doc67":"Cardiac income details","doc68":"Successful hosting","doc69":"Each quantification yield","doc70":"Flexible Funds","doc71":"Frozen assets","doc72":"You can get more rewards to complete the task","doc73":"Treating amount","doc74":"You have {i1} a robot is quantifying the operating operation of the hosting","doc75":"Daily yield (floating)","doc76":"Input range","doc77":"Treasury period","doc78":"Host","doc79":"End","doc80":"Daily income","doc81":"(floating)","doc82":"Starting Time","doc83":"The end time of the hosting","doc84":"Income Details","doc85":"AI hosting quantification","doc86":"In progress","doc87":"History Host","doc88":"Hosting Even","doc89":"Host Havage","doc90":"There is also {i1} Tian when the custody expires ","doc91":"Host History","doc92":"End","doc93":"Robots are working hard","doc94":"A reciprocity","doc95":"My hosting","doc96":"Daily yield","doc97":"Organize the opportunity to enter and exit through AI data, and add logic such as moving average filtering at the same time to reduce artificial emotional impacts. While improving the returns while ensuring the safety of the principal, the accuracy rate of the entry and exit is greatly improved.","doc98":"Treating cycle","doc99":"Trading Type","doc100":"Smart Selection","doc101":"Trading currency","doc102":"Smart Token Combination","doc103":"Smart token combination selects multiple transaction pairs based on AI big data, lower risks and higher income","doc104":"Input amount","doc105":"Custard to confirm","doc106":"OK to host","doc107":"Input quota","doc108":"The input limit cannot be smaller than","doc109":"The input limit cannot be greater than","doc110":"Smart Select","doc111":"Start your community team journey","doc112":"White Paper","doc113":"Financial","doc114":"Financial Area","doc115":"Financial Amount","doc116":"Total wealth management income","doc117":"Hold order","doc118":"Blind box lottery","doc119":"Blind box recording","doc120":"Mine","doc121":"Order History","doc122":"Yesterday\'s earnings","doc123":"Investment Amount ","doc124":"Management fee","doc125":"Income tax","doc126":"The term","doc127":"Daily rate of return","doc128":"Total yield","doc129":"Put in","doc130":"Invest in financial management","doc131":"Financial details","doc132":"Daily rate","doc133":"Investment period","doc134":"Management costs","doc135":"Investment income tax","doc136":"Day","doc137":"Interest calculation","doc138":"Daily income, due repayment","doc139":"Daily income","doc140":"Estimated total benefit","doc141":"Level","doc142":"Investment Amount ","doc143":"Balance","doc144":"Vouchers","doc145":"No voucher available","doc146":"Deductible amount","doc147":"Please select a voucher","doc148":"The purchase amount cannot exceed the balance","doc149":"The investment amount needs to be in","doc150":"Investment Products","doc151":"Starting time","doc152":"End Time","doc153":"Coupon deduction","doc154":"Actual payment","doc155":"None","doc156":"The information is correct and the investment is confirmed","doc157":"Confirm investment","doc158":"Determination of financial investment","doc159":"Financial success","doc160":"Working hard","doc161":"Put in another","doc162":"Managed successfully","doc163":"Financial order","doc164":"No more","doc165":"All","doc166":"Hold","doc167":"Maturity","doc168":"Expired","doc169":"Rate of return","doc170":"Management fee","doc171":"Estimated income","doc172":"Available coupons","doc173":"Unavailable coupons","doc174":"Wealth management cash voucher","doc175":"Use immediately","doc176":"Coupon unavailable reason: ","doc177":"My discount coupon","doc178":"Open the blind box to draw cash rewards","doc179":"Currency market","doc180":"Community Rewards","doc181":"Team Members","doc182":"","doc183":"Upgrade","doc184":"My discount coupons","doc185":"Congratulations","doc186":"When conducting \\"financial management and investment\\", you can use cash coupons to deduct","doc187":"Put in another","doc188":"Financial income","doc189":"Referral rewards","doc190":"Team benefits","doc191":"Membership level analysis (Three generations)","doc192":"Number of people","doc193":"Direct push member","doc194":"Buy product","doc195":"Minimum financial amount","doc196":"Maximum financial management amount","doc197":"Products","doc198":"First Gen","doc199":"Second Gen","doc200":"Third Gen","doc201":"Invested amount","doc202":"Activity period","doc203":"Change the login password, and the transaction password will trigger the fund protection mechanism. After 48 hours, the fund protection status will be automatically released and the normal withdrawal process will start","doc204":"1. In order to prevent illegal money laundering activities, users cannot withdraw cash without purchasing wealth management products","doc205":"2. A fixed fee will be charged for each withdrawal","doc206":"u Handling fee is used as platform operating funds","doc207":"3. The amount of each withdrawal is subject to the actual fixed amount of the platform, and the corresponding income tax will be deducted for each level. The higher the level, the lower the income tax rate","doc208":"Income tax rules","doc209":"Class Income Tax Rate","doc210":"Your new password must be different from your old password","doc211":"Verify","doc212":"Delete Account","doc213":"Confirm to delete TTMD account","doc214":"Please read the following rules before deleting your TTMD account:","doc215":"After deleting the account, all transaction records, user assets, income generated from investment, identity verification information and bank account binding in the account will be cleared and reset to zero.","doc216":"In order to avoid the loss of your assets, please make sure that there is no balance in the account:","doc217":"Click the OK button below, which means you have read and agree","doc218":"Confirm delete","doc219":"Rules","doc220":"Record","doc221":"Remaining","doc222":"Invite friends to get","doc223":"Blind box","doc224":"Extract","doc225":"Do not allow minors to use or experience under the supervision and guidance of guardians","doc226":"Expired","doc227":"Used","doc228":"Daily income, due repayment","doc229":"Return of capital and interest at maturity","doc230":"Remember account password","doc231":"Tax rate","doc232":"Fourth Generation","doc233":"Fifth Generation","doc234":"Sixth Generation","doc235":"Seventh Generation","doc236":"Eighth Generation","doc237":"Ninth Generation","doc238":"Tenth Generation"},"page3":{"doc1":"Google Authenticator","doc2":"Security verification","doc3":"Google verification code","doc4":"Please enter the Google verification code","doc5":"Confirm","doc6":"Google verification switch","doc7":"Not authenticated","doc8":"Authenticated","doc9":"Google verification switch","doc10":"Please bind Google Authenticator first","doc11":"First step","doc12":"Please download Google Authenticator from the mobile app store","doc13":"Step 2","doc14":"Scan the QR code to bind through Google Authenticator","doc15":"Copy key","doc16":"Step 3","doc17":"Please enter the Google verification code","doc18":"Confirm binding","doc19":"Hot predictions","doc20":"View more","doc21":"Unlocked","doc22":"{K}Unlocked","doc23":"Return rate past7days","doc24":"custody period","doc25":"Number of trustees","doc26":"Total custody income","doc27":"{k} days","doc28":"Gainers","doc29":"24h Vol","doc30":"24h change","doc31":"24H turnover","doc32":"Partner","doc33":"Invitation rebate","doc34":"Get profits quickly","doc35":"Member level","doc36":"Start transactions","doc37":"grid","doc38":"quantification","doc39":"Quantitative order","doc40":"Strategic income","doc41":"Unlockable","doc42":"Investment Amount ","doc43":"Investment Scope","doc44":"Investment Funds","doc45":"Investment Amount"},"page4":{"doc1":"current","doc2":"High","doc3":"low","doc4":"Opening price","doc5":"Transaction volume","doc6":"1 minute","doc7":"5 minutes","doc8":"15 minutes","doc9":"30 minutes","doc10":"1 hour","doc11":"1 day","doc12":"1 week","doc13":"Security verification (choose one of the following two)","doc14":"Send","doc15":"Please enter a new password","doc16":"Please enter the new password again","doc17":"Arrival Amount","doc18":"Withdraw Process Fee","doc19":"Limited time privilege","doc20":"Day-free currency handling fee","doc21":"Minimum Withdrawal Amount","doc22":"Maximum Withdrawal Amount","doc23":"You already have free withdrawals","doc24":"Quantity","doc25":"Address","doc26":"Date","doc27":"Details","doc28":"Available amount","doc29":"Frozen amount","doc30":"Asset details","doc31":"Video tutorial","doc32":"Experience","doc33":"Online Earning","doc34":"Intelligent Strategy","doc35":"Price Range ","doc36":"View trading rules","doc37":"Deposit ETH from the Ethereum main network to the zkSync Era network through the cross-chain bridge, and you can experience DApp interaction as network fees","doc38":"Intelligent Settings ","doc39":"Grid Type","doc40":"Please select","doc41":"type","doc42":"Investment Amount ","doc43":"Usable information","doc44":"Amount that can be invested","doc45":"To Be Released Details","doc46":"Order History","doc47":"Create Order","doc48":"Intelligent strategy is starting","doc49":"Select a strategy","doc50":"Intelligent Strategy","doc51":"Deposit ETH from the Ethereum mainnet to the zkSync Era network through the cross-chain bridge","doc52":"Opened","doc53":"Accumulated amount to be released","doc54":"Accumulation has been released","doc55":"Accumulated amount to be released","doc56":"Today\'s strategy income","doc57":"Record to be released","doc58":"type","doc59":"all","doc60":"all","doc61":"Select","doc62":"No data yet!","doc63":"Investment Amount ","doc64":"Profit amount","doc65":"Purchase Platform","doc66":"Sales Platform","doc67":"Buy Price","doc68":"Market price","doc69":"Output Currency","doc70":"Completion Time ","doc71":"Choose","doc72":"Order History","doc73":"Deposit to be released","doc74":"Strategic return funds to be released","doc75":"Select","doc76":"Total revenue","doc77":"Handling fee","doc78":"Upgrade requirements","doc79":"Achieved","doc80":"Effective funds","doc81":"First generation users","doc82":"Second generation users","doc83":"Third generation users","doc84":"Equity","doc85":"Investment Amount ","doc86":"Operating time","doc87":"minutes","doc88":"Number of times per day","doc89":"times","doc90":"Profit ratio","doc91":"Withdraw Process Fee","doc92":"Free withdrawal","doc93":"Once every {k} days","doc94":"With free withdrawals","doc95":"To be opened","doc96":"Strategy","doc97":"Profit Amount","doc98":"Buy platform","doc99":"Sell Platform","doc100":"Sell Price","doc101":"Cryptocurrency","doc102":"Please invest the amount","doc103":"Quantifiable funds","doc104":"Your account currently does not have any assets","doc105":"Deposit now","doc106":"Days to Free Withdrawal","doc108":"To Be Released","doc107":"days","doc109":"hours","doc110":"minutes","doc111":"second","doc112":"Community","doc113":"I have read the privacy agreement","doc114":"Reset login password","doc115":"Google verification code","doc116":"Reminder","doc117":"To ensure the security of your account, you can withdraw money only 48 hours after resetting your login password","doc118":"1. You can withdraw money after completing the transaction password setting for the first time<br>2. The transaction password is only used for transactions. It is recommended not to be consistent with the login password<br>3. To ensure the security of funds, the transaction password can be changed 48 hours after Withdrawal<br>4. The transaction password can only be any 6-digit combination of 0-9, and no symbols or letters can be entered.","doc119":"Terms of Use","doc120":"Invitations","doc121":"Invitation to get earnings","doc122":"brings you closer to AI","doc123":"Community team","doc124":"Mission Centre","doc125":"Up to $10000","doc126":"Rank","doc127":"This level has been unlocked","doc128":"This level is locked","doc129":"video tutorial","doc130":"Deposit Details","doc131":"Miner Fee","belge1":"","doc9999":""},"page5":{"doc1":"Reward records","doc2":"Grid Upgrade Bonus","doc3":"Note","doc4":"Community teams with 100 or more members can apply for community team building funds","doc5":"1st Generation Member Rebate","doc6":"2nd Generation Member Rebate","doc7":"3rd Generation Member Rebate","doc8":"Invite Friends","doc9":"Record of invitations","doc10":"Copy Success","doc11":"Doing tasks and receiving benefits","doc12":"The intercept is currently collecting the total reward:","doc13":"Proceed","doc14":"Pending","doc15":"Claim","doc16":"Congratulations on the completion of the mission reward","doc17":"View Rewards","doc18":"Long-Term Missions","doc19":"Daily Missions","doc20":"active user","doc21":"invalid user","doc22":"Invite friends and earn more","doc23":"Invite Now","doc24":"Claim your rewards as soon as your invitation is successful","doc25":"Effective and successful invitations","doc26":"man","doc26-1":"Participation","doc27":"Send invitation","doc28":"Friends Registration Deposit","doc29":"Click to claim your reward","doc30":"Description of activities","doc31":"1. Invite x number of valid users after top-up reaches xx amount;","doc32":"2. Your friend is a valid user if he/she downloads and logs in for the first time through your invitation and tops up his/her account.","doc33":"3.Inviting people to make a first charge xx","doc34":"Begin your journey as a community team","doc35":"invitation code","doc36":"Share to","doc37":"Save Picture","doc38":"Facebook","doc39":"Whatsapp","doc40":"Telegram","doc41":"Copy link","doc42":"cancellations","doc43":"clarification","doc44":"Please look forward to","doc45":"NEWS","doc46":"More","doc47":"View Settings","doc48":"Font size","doc49":"Small","doc50":"Middle","doc51":"Big","doc52":"Dark mode","doc53":"Confirm","doc54":"Last 7 days","doc55":"Last 30 days","doc56":"Last 60 days","doc57":"Nearly 90 days","doc58":"No data yet"},"kLine":{"doc1":"Time","doc2":"Open","doc3":"High","doc4":"Low","doc5":"Close"},"page6":{"doc1":"No account","doc2":"Register now","doc3":"Hello","doc4":"Welcome","doc5":"Already have an account","doc6":"Log in now","doc7":"Assets","doc8":"All quantities","doc9":"Menu","doc10":"Time filter","doc11":"{n} years","doc12":"{n} months","doc13":"{n} day","doc14":"The start time cannot be greater than the end time","doc15":"APP download","doc16":"TTMD world-class strategic products","doc17":"Free and open to the public","doc18":"Invitation link","doc19":"Invitation code","doc20":"Help","doc21":"Community Team","doc22":"Effective number of second generation + third generation","doc23":"Receipt Record","doc24":"Amount received","doc25":"Piggy Bank Proceeds","doc26":"First Generation","doc27":"Second Generation","doc28":"Third Generation","doc29":"four generations","doc30":"Fifth Generation","doc31":"Commission Rate","doc32":"Cumulative Income","doc33":"Sistema Punti TTMD","doc34":"Partner","doc35":"Current Points","doc36":"Promotion Reward","doc37":"Weekly Salary","doc38":"{n} Points","doc39":"Weekly Task","doc40":"Excess quantity","doc41":"Increase total quantitative funds","doc42":"Points record","doc43":"Increase points","doc44":"Deduct points","doc45":"Filter","doc46":"TTMD Points System","doc47":"Weekly bonus","doc48":"Smart Search","doc49":"Search","doc50":"This level is full","doc51":"Add Address","doc52":"Please select address","doc53":"Estimated Arrival Time ≈ {n} minutes","doc54":"Minimum Deposit","doc55":"Minimum Withdrawal Amount","doc56":"Total number of platform users","doc57":"Total transaction volume of the platform","doc58":"Average profit of platform","doc59":"Registered User","doc60":"24-hour trading volume","doc61":"Monthly rate of return","doc62":"Event Overview","doc63":"Sixth Generation","doc64":"Seventh Generation","doc65":"Eighth Generation","doc66":"Ninth Generation","doc67":"Tenth Generation","doc68":"Official certification","doc69":"Authentication method","doc70":"Please enter Telegram","doc71":"Please enter whatsapp","doc72":"Authentication passed","doc73":"Authentication failed","doc74":"Re-authentication","doc75":"Got it","doc76":"Stay tuned","doc77":"Cancel withdrawal","doc78":"Confirm to cancel withdrawal"},"tpage":{"doc1":"Technology Empower","doc2":"the World is at Your Fingertips","doc3":"Intelligent Settings ","doc4":"Levels","doc5":"Getting Higher Returns","doc6":"Click OK below","doc7":"Delete button","doc8":"It means you have read and agreed"},"app":{"text":"Note: During the download and installation process, there are abnormal situations such as download failure, failure to parse the installation package, and installation failure, please download and install again.","downs":"Downloads","cs":""},"lucky":{"doc1":"My Prizes","doc2":"Draw Rules","doc3":"Luck Value","doc4":"Draw Times","doc5":"There are {n} more draw opportunities","doc6":"Cumulative Draw Times","doc7":"Get Draw Times","doc8":"In order to give back to users for their firm support and love for CoinPlex, we have launched the 2023 Grand Prize G2 Lottery. At the same time, in order to enhance the user\'s lottery experience, we have added a points system. The more you draw, the higher the reward points. The more draws you make, the higher the reward points, and the higher the chance of winning rich prizes. More prizes are waiting for you to win! ","doc9":"Unboxing","doc10":"Congratulations, you won the prize","doc11":"Insufficient draw times, please go and invite friends","doc12":"My Prizes","doc13":"Draw Again","doc14":"Remaining Draw Times","doc15":"Prizes","doc16":"Time","doc17":"Issuance Status","doc18":"Issued","doc19":"Contact Manager","doc20":"Not Received","doc21":"Draw Type","doc22":"Bonus Draw {n} Times","doc23":"Received {n} Times","doc24":"Lucky Wheel","doc25":"Draw Results","doc26":"Rules","doc27":"Open Treasure Box","doc28":"Blind Box Record","doc29":"When doing \\"Team Profits\\", you can use the Accelerator Pack to get more profits","doc30":"Draw Times Record","doc31":"Surprise Blind Box","doc32":"Prizes are waiting for you","doc33":"Failed","doc34":"Prize preview","doc35":"Invite friends","doc36":"Get more draw times"},"new":{"doc1":"Bind email","doc2":"If you don\'t receive the email, please check your spam email","doc3":"Old Email","doc4":"New Email","doc5":"Change email","doc6":"Please enter your email address","doc7":"Please enter the verification code","doc8":"Email verification","doc9":"hint","doc10":"The account is not bound to an email address and the password cannot be reset through the email address. Please contact customer service to change the login password.","doc11":"No contact yet","doc12":"Contact customer service","doc13":"Growth ratio in the last week","doc14":"Current Week Growth","doc15":"System prompt","doc16":"Contact customer service manager","doc17":"Order matching failed, please try again after {n} days, if you need more details, please contact customer service manager.","doc18":"Order matching, strategy orders only, estimated completion time {n} minutes","doc19":"Please input","doc20":"Send","doc21":"Thinking...","doc22":"wss connection timed out","doc23":"TCP connection has timed out, automatically refresh the page after 3 seconds","doc24":"AI conversation history","doc25":"Clear conversation history","doc26":"Create a new conversation","doc27":"The current conversation has not ended, and new ones cannot be added","doc28":"Talk to the AI ​​robot","doc29":"Modify","doc30":"Modify address","doc31":"Please enter the email verification code","doc32":"You have a withdrawal application","doc33":"Are you sure you want to cancel the withdrawal","doc34":"Yes","doc35":"No","doc36":"Go to bind email","doc37":"Contract pledge","doc38":"financial products","doc39":"My financial","doc40":"User ID: {n1} in {n2} pledge {n3}USDT","doc41":"Please select the pledge area","doc42":"Please select the pledge area","doc43":"Please select the pledge period","doc44":"Staking Area","doc45":"participation funds","doc46":"Available","doc47":"Total lock-up expected reward","doc48":"Daily rate of return","doc49":"Buy time","doc50":"Start interest calculation","doc51":"first profit","doc52":"Last profit","doc53":"Red to account","doc54":"Readed and agreed","doc55":"Confirm to buy","doc56":"Overview","doc57":"financial rules","doc58":"Serial investment","doc59":"Total pledge amount","doc60":"Total historical income","doc61":"Today\'s earnings","doc62":"Reden","doc63":"Staking","doc64":"Expired","doc65":"Buy time","doc66":"Redeemable time","doc67":"Pledge Days","doc68":"Pledge amount","doc69":"Cumulative income","doc70":"Today\'s earnings","doc71":"Redification confirmation","doc72":"Reden amount","doc73":"Cumulative income","doc74":"Transaction fee","doc75":"To be redeemed","doc76":"Expiration","doc77":"Account login","doc78":"Account Registration","doc79":"About","doc80":"Social Media","doc81":"My income","doc82":"Invite friends","doc83":"Invite friends and earn coins together","doc84":"Go to invite","doc85":"My level","doc86":"Edit","doc87":"Account Information","doc88":"Invite friends, <span>ear money together</span>","doc89":"Invite friends to be members of your community","doc90":"Invite friends for income","doc91":"Invitation method","doc92":"VIP level","doc93":"Invitation record","doc94":"Invitation List","doc95":"Register time","doc96":"Account","doc97":"Revenue distribution","doc98":"Release record","doc99":"Certificate Information","doc100":"front photo of ID card","doc101":"Reverse photo of ID card","doc102":"Handheld ID photo","doc103":"After the certification is submitted, it needs to wait for manual review, and the review time is completed within 72 hours.","doc104":"Please upload JPG, JPEG, PNG format files less than 10MB","doc105":"Submitted successfully","doc106":"Real-name authentication is submitted successfully! After the authentication is submitted, you need to wait for manual review. The review time is completed within 72 hours. Please wait patiently.","doc107":"I got it","doc108":"To modify or delete the address, please contact customer service","doc109":"Resubmit","doc110":"Certification information has been submitted and the administrator is under review. The review is expected to be completed within <span>72</span> hours.","doc111":"<span>Reason for rejection:</span>{n1}","doc112":"You have completed real-name authentication.","doc113":"Awaiting for review","doc114":"Disapped","doc115":"Certification is successful","doc116":"About us","doc117":"Follow us","doc118":"Get first-hand information of the project and get real-time online customer service support","doc119":"Hello!","doc120":"We are here to help you","doc121":"My team","doc122":"Intelligent AI Quantification","doc123":"Standing at the forefront of technology and finance, achieving steady multiplication of assets","doc124":"View details","doc125":"Hot News","doc126":"Team Information","doc127":"{n1} generation","doc128":"cryptocurrency market","doc129":"market","doc130":"Bill","doc131":"Please select the main network","doc132":"This address only supports {n2} of recharge {n1}","doc133":"The email address has been bound, please contact the official customer service to handle the email address if you have changed or deleted the email address","doc134":"The mobile phone has been bound, if you change the mobile phone or delete it, contact the official customer service to deal with it","doc135":"Open Authenticator App","doc136":"Please download the authenticator app (such as \\"Google\\n authenticator\\") in the mobile app store.","doc137":"Binding key","doc138":"Click the \\"+\\" icon in the Authenticator App, enter the key below or bind the key by scanning the code.","doc139":"Open the authenticator app, scan the code to bind","doc140":"It has reached this level","doc141":"Unlocked","doc142":"Levels are met","doc143":"USDT balance","doc144":"{n1} generation valid users","doc145":"Not achieved","doc146":"Level Rights and Equity","doc147":"Team Revenue Algebra","doc148":"{n1} generation","doc149":"Strategic trading","doc150":"Account Balance","doc151":"Bill details","doc152":"Waiting for appointment results","doc153":"Reservation not won","doc154":"Order full, try again tomorrow","doc155":"Confirmed","doc156":"Congratulations on the successful appointment","doc157":"Appointment is successful, please keep your wallet balance sufficient","doc158":"Appointment Policy Name","doc159":"Strategic lock-in amount","doc160":"Strategies are expected to earn","doc161":"Execute policy","doc162":"If the Ai policy is not executed, the system will automatically match the Ai policy and execute it in 5 minutes","doc163":"Cash withdrawal cannot be initiated at the moment","doc164":"Binding mailbox","doc165":"Accumulated recharge of 35USDT","doc166":"Cash withdrawal can be initiated after 3 hours of policy execution","doc167":"The next withdrawal can be initiated after 48 hours after the previous withdrawal is successful","doc168":"A reviewed withdrawal order","doc169":"Dobind","doc170":"Go to recharge","doc171":"No more prompt","doc172":"I got it","doc173":"Experience Gold","doc174":"Number of new teams today","doc175":"New team revenue today","doc176":"This level condition does not meet","doc177":"Accumulated trading income","doc178":"Today\'s trading income","doc179":"Cumulative community income","doc180":"Today\'s community income","doc181":"To be released","doc182":"Released","doc183":"Revenue Record","doc184":"Yes","doc185":"No","doc186":"Total Asset Valuation","doc187":"Execution policy amount","doc188":"Policy Name","doc189":"Policy creation date","doc190":"Strategic Execution Platform","doc191":"Trading pair","doc192":"Policy Type","doc193":"Strategic execution cycle","doc194":"Appointment","doc195":"Appointment failed","doc196":"Can make an appointment again later","doc197":"Execution completed","doc198":"Policy execution","doc199":"After execution ends","doc200":"Amount of income","doc201":"hour","doc202":"Revenue distribution time","doc203":"Execution amount release time","doc204":"OTC Market Maker (Mean Reversion)","doc205":"Execution end","doc206":"Unclosed","doc207":"Cleared","doc208":"Execution status","doc209":"Order number","doc210":"The balance is insufficient, please recharge first","doc211":"1st generation team income","doc212":"2nd generation team income","doc213":"3rd generation team profit","doc214":"Runnable","doc215":"AI Strategy","doc216":"Strategy Bill","doc217":"Today\'s new","doc218":"2 generation + 3 generations effectively boost the number of users","doc219":"Not reached this level","doc220":"Number of effective users for 1 generation","doc221":"Record","doc222":"My community","doc223":"Community List","doc224":"First level agent","doc225":"Second Level Agent","doc226":"third-level agent","doc227":"Total Assets","doc228":"Level","doc229":"market","doc230":"Level 1 Agent","doc231":"Second-level agent","doc232":"Level 3 Agent","doc233":"Filter","doc234":"Appointment Amount","doc235":"Estimated earnings","doc236":"Strategic amount","doc237":"Appointment Amount","doc238":"The condition is not met","doc239":"{n1} generation{n2} user","doc240":"minutes","doc241":"LumeX Academy","doc242":"Algorithm order","doc243":"Number of people in the community","doc244":"Community income","doc245":"Community members","doc246":"Community income","doc247":"Today\'s community dynamics","doc248":"Today\'s community income","doc249":"Recommendation rewards","doc250":"Community Information","doc251":"Number of effective users of M1","doc252":"Number of effective users boosted by M2+M3","doc253":"algorithmTransactionHistory","doc254":"Operation rules","doc255":"Video tutorial","doc256":"Number of people in the community","doc257":"Community income","doc258":"Today\'s community dynamics","doc259":"Today\'s community income","doc260":"Community members","doc261":"Transaction amount","doc262":"Daily scheduled transactions","doc263":"Gas fee for withdrawal","doc264":"Single withdrawal","doc265":"Community rewards","doc266":"Token Volume","doc267":"Asset-Sperre","doc268":"To be unlocked","doc269":"Online Customer Service","doc270":"Available funds","doc271":"In operation","doc272":"Wallet balance","doc273":"Level does not meet the conditions","doc274":"Appointment time","doc275":"Trading","doc276":"Order price","doc277":"Expected income","doc278":"Execution cycle","doc279":"Remaining time","doc280":"Appointment scope","doc281":"Profit settlement","doc283":"No trial money available for trading","doc284":"Trading without appointment","doc285":"Achieved","doc286":"Not Achieved","doc287":"Next Reservation Time","doc288":"{n}{n1}{n2} members","doc289":"Transaction Amount","doc290":"Trading three parties","doc291":"Appointment price","doc292":"Transaction price","doc293":"OTC market maker","doc294":"Transaction amount","doc295":"Transaction amount","doc296":"Highest price","doc297":"Transaction amount","doc298":"Team size","doc299":"Total rewards","doc300":"Today\'s income","doc301":"This month\'s income","doc303":"Team data","doc304":"Your order","doc305":"Appointment in progress"},"new1":{"doc0":"Order number","doc1":"Start time","doc2":"Execution status","doc3":"Strategy Platform","doc4":"Trading currency","doc5":"Strategy type","doc6":"Execution cycle","doc7":"Amount range available for reservation","doc8":"Actual reservation amount","doc9":"Order income","doc10":"Fund release time"}}')
    },
    2235: function(e, o, i) {
        "use strict";
        o.__esModule = !0, o.default = void 0;
        var a = {
            name: "név",
            tel: "Telefon",
            save: "tartósítás",
            confirm: "meghatározza",
            cancel: "törlés",
            delete: "törlés",
            complete: "Bezárás",
            loading: "Betöltés...",
            telEmpty: "请填写电话",
            nameEmpty: "请填写姓名",
            nameInvalid: "请输入正确的姓名",
            confirmDelete: "确定要删除吗",
            telInvalid: "请输入正确的手机号",
            vanCalendar: {
                end: "vége",
                start: "indítás",
                title: "Dátum kiválasztása",
                confirm: "meghatározza",
                startEnd: "Indítás vége",
                weekdays: ["Nap", "Egy", "Kettő", "Három", "Négy", "Öt", "Hat"],
                monthTitle: function(e, o) {
                    return e + "/" + o
                },
                rangePrompt: function(e) {
                    return "选择天数不能超过 " + e + " 天"
                }
            },
            vanCascader: {
                select: "Válassza ki"
            },
            vanContactCard: {
                addText: "添加联系人"
            },
            vanContactList: {
                addText: "新建联系人"
            },
            vanPagination: {
                prev: "上一页",
                next: "下一页"
            },
            vanPullRefresh: {
                pulling: "Legördülő frissítés...",
                loosing: "Frissítés befejezve..."
            },
            vanSubmitBar: {
                label: "合计："
            },
            vanCoupon: {
                unlimited: "无使用门槛",
                discount: function(e) {
                    return e + "折"
                },
                condition: function(e) {
                    return "满" + e + "元可用"
                }
            },
            vanCouponCell: {
                title: "优惠券",
                tips: "暂无可用",
                count: function(e) {
                    return e + "张可用"
                }
            },
            vanCouponList: {
                empty: "暂无优惠券",
                exchange: "兑换",
                close: "不使用优惠券",
                enable: "可用",
                disabled: "不可用",
                placeholder: "请输入优惠码"
            },
            vanAddressEdit: {
                area: "地区",
                postal: "邮政编码",
                areaEmpty: "请选择地区",
                addressEmpty: "请填写详细地址",
                postalEmpty: "邮政编码格式不正确",
                defaultAddress: "设为默认收货地址",
                telPlaceholder: "收货人手机号",
                namePlaceholder: "收货人姓名",
                areaPlaceholder: "选择省 / 市 / 区"
            },
            vanAddressEditDetail: {
                label: "详细地址",
                placeholder: "街道门牌、楼层房间号等信息"
            },
            vanAddressList: {
                add: "新增地址"
            }
        };
        o.default = a
    },
    "26dc": function(e, o, i) {},
    "2c2d": function(e, o, i) {
        "use strict";
        i("9fe1")
    },
    3180: function(e) {
        e.exports = JSON.parse('{"title":{"doc0":"Inicio","doc1":"TTMD Estrategia","doc2":"Estrategia","doc3":"Maximizar registros","doc4":"Equipo","doc5":"Lista de equipos","doc6":"Mis mensajes","doc7":"Centro de tareas","doc8":"Activos","doc9":"Detalles del activo","doc10":"Recarga","doc11":"Retiro","doc12":"Mío","doc13":"Nivel de actualización","doc14":"Comentarios","doc15":"Centro de ayuda","doc16":"Detalles de ayuda","doc17":"Establecer contraseña de fondo","doc18":"Cambiar idioma","doc19":"Modificar contraseña de inicio de sesión","doc20":"Restablecer contraseña de inicio de sesión","doc21":"Centro de autenticación de nombre real","doc22":"Información personal","doc23":"Autenticación","doc24":"Subir foto de identificación","doc25":"Iniciar sesión","doc26":"Registro","doc27":"Invitar amigos","doc28":"Seleccionar canal de depósito","doc29":"Seleccionar canal de retiro","doc30":"Retiro de moneda fiduciaria","doc31":"Recarga de moneda fiduciaria"},"load":{"refreshed":"Actualizado exitosamente","loosing":"Suéltelo para actualizar...","loading":"Cargando...","no_more":"No más","no_open":"Aún no abierto"},"page":{"doc1":"Resumen de activos","doc2":"Gane dinero inmediatamente a través de TTMD de forma cuantitativa","doc3":"Recargar","doc4":"Retirar","doc5":"Ventaja Cuantitativa de TTMD","doc6":"Mercados de las principales bolsas","doc7":"Moneda/Nombre","doc8":"Último precio","doc9":"Altibajos las 24 horas","doc10":"Días de operación segura","doc11":"Días","doc12":"Ingresos por producción acumulados","doc13":"Mecanismo de seguridad absoluta","doc14":"Todos los fondos del usuario están en su propio intercambio Binance. La plataforma cuantitativa TTMD solo cobra tarifas de uso de tecnología de software. Binance cobra una tarifa por cada transacción. Internet funcionando.","doc15":"Mecanismos de seguridad estrictos","doc16":"Opere el arbitraje de fondos a través de la API de Exchange. Este servidor de software no almacena la clave API del usuario, solo la almacena en la computadora del usuario. No hay necesidad de preocuparse por la intrusión de piratas informáticos y la API no requiere ¡permiso de retiro!","doc17":"Parámetros de política flexibles","doc18":"¡Las estrategias comerciales casi programables hacen que los operadores se sientan más cómodos con sus manos, como Tiger Wings! El alojamiento con un solo clic puede ayudar a los nuevos usuarios a ahorrar mucho tiempo para aprender a utilizar el software","doc19":"Potente análisis inteligente","doc20":"Después de que el servidor de cotizaciones distribuido cuantitativamente pangu recopila el mercado de intercambio, utiliza la poderosa inteligencia artificial del servidor para analizar, procesar y filtrar los datos del mercado, ¡y proporcionar el mejor plan de toma de decisiones!","doc21":"Desarrollo sostenible","doc22":"¡El comercio de divisas digitales será un mercado a largo plazo, Pangu continuará mejorando y brindándole más servicios de valor agregado!","doc23":"Moneda de retiro","doc24":"Banco","doc25":"Ingrese el nombre del banco de retiro","doc26":"Monto del retiro","doc27":"Por favor ingrese el monto del retiro","doc28":"Saldo disponible","doc29":"Por favor ingrese la información de retiro","doc30":"Nombre","doc31":"Por favor ingresa tu nombre","doc32":"Número de tarjeta bancaria","doc33":"ingrese el número de la tarjeta bancaria","doc34":"Tarifa de gestión","doc35":"Llegada real","doc36":"Aceptar","doc37":"Recordatorio cálido","doc38":"Tardará aproximadamente entre 3 y 5 minutos en llegar después de que el retiro de moneda fiduciaria sea exitoso. Tenga paciencia.","doc39":"Por favor ingrese la contraseña del fondo","doc40":"Confirmar retiro","doc41":"Protección de seguridad","doc42":"Primero establezca la contraseña del fondo","doc43":"Seleccionar red","doc44":"Seleccionar moneda","doc45":"Dirección de retiro","doc46":"Monto del retiro","doc47":"Por favor ingrese el monto del retiro","doc48":"Todos","doc49":"Saldo de activos","doc50":"Cancelar","doc51":"Por favor ingrese la dirección de retiro","doc52":"Copia exitosa","doc53":"Aún no hay registros","doc54":"Moneda","doc55":"Tipo","doc56":"Fecha","doc57":"Fecha de inicio","doc58":"Fecha de finalización","doc59":"Seleccionar tipo","doc60":"Ingresos","doc61":"Gastos","doc62":"Recarga de Efectivo","doc63":"Retiro de efectivo","doc64":"Moneda de depósito","doc65":"Número de depósitos","doc66":"Por favor ingresa el monto de la recarga","doc67":"Monto de recarga","doc68":"Tardará aproximadamente de 3 a 5 minutos en llegar después de que la recarga fiat sea exitosa. Espere pacientemente. La tarifa de manejo se deducirá del monto recibido.","doc69":"Confirmar depósito","doc70":"Copiar","doc71":"Nota","doc722222":"Depósito mínimo: {i1} USDT; si es inferior al monto mínimo, no se acreditará en la cuenta. No deposite activos que no sean USDT en la dirección anterior; de lo contrario, los activos no se podrán recuperar . Su dirección de depósito no cambiará con frecuencia y podrá depositar repetidamente. Reemplazo, se lo notificaremos mediante anuncio o correo electrónico.","doc72":"Necesita obtener la última dirección de depósito para cada recarga. La dirección de depósito caducará después de diez minutos. ¡TTMD no será responsable de la pérdida de fondos causada por la transferencia de la cuenta con dirección caducada!","doc73":"Precio actual","doc74":"Historial de transacciones","doc75":"Depósito en USDT","doc76":"Pago en moneda fiduciaria vietnamita","doc77":"Retiro de USDT","doc78":"Retiro en moneda fiduciaria vietnamita","doc79":"Por favor ingresa tu número de teléfono","doc80":"Por favor ingrese su dirección de correo electrónico","doc81":"Código de verificación por SMS","doc82":"Código de verificación de correo electrónico","doc83":"Obtener código de verificación","doc84":"El código de invitación no puede estar vacío","doc85":"Por favor ingrese una contraseña (6-20 caracteres alfanuméricos)","doc86":"Por favor ingrese su contraseña nuevamente","doc87":"Leí y acepto","doc88":"Acuerdo de registro de usuario","doc89":"¿Tienes una cuenta? Inmediatamente","doc90":"descarga de la APLICACIÓN","doc91":"Elija un código de área telefónico internacional","doc92":"Buscar código de área","doc93":"Cambio de idioma","doc94":"Registro de teléfono móvil","doc95":"Registro por correo electrónico","doc96":"Operaciones frecuentes. Vuelve a intentarlo más tarde","doc97":"Por favor ingrese el número de teléfono correcto","doc98":"Por favor ingrese la dirección de correo electrónico correcta","doc99":"Enviado exitosamente","doc100":"La contraseña debe tener entre 6 y 20 caracteres alfanuméricos","doc101":"Las dos contraseñas son inconsistentes","doc102":"Por favor consulte el Acuerdo de registro de usuario","doc103":"Registro exitoso","doc104":"Por favor ingresa tu contraseña","doc105":"Olvidé mi contraseña","doc106":"¿Sin cuenta? Inmediatamente","doc107":"Inicio de sesión móvil","doc108":"Inicio de sesión por correo electrónico","doc109":"Inicio de sesión exitoso","doc110":"Teléfono móvil","doc111":"Buzón","doc112":"Contraseña de inicio de sesión","doc113":"Confirmar contraseña","doc114":"Por favor ingrese su contraseña nuevamente","doc115":"Código de verificación","doc116":"Rendimiento Total","doc117":"Recarga total","doc118":"Retiro total","doc119":"Resumen de los datos del equipo","doc120":"Personas agregadas","doc121":"Ingresos añadidos","doc122":"Agregar recarga","doc123":"Agregar retiro","doc124":"Análisis de ingresos","doc125":"Tamaño acumulado del equipo","doc126":"Ver lista del equipo","doc127":"Ganancias acumuladas","doc128":"Recarga acumulativa","doc129":"Retiro acumulativo","doc130":"Datos de tres generaciones","doc131":"Datos de primera generación","doc132":"Datos de segunda generación","doc133":"Datos de tercera generación","doc134":"Número de usuarios","doc135":"Monto del retiro","doc136":"Hoy","doc137":"Últimos 7 días","doc138":"Últimos 30 días","doc139":"Últimos 60 días","doc140":"Ganancias por tareas","doc141":"Ingresos cuantitativos","doc142":"Recompensa cuantitativa recomendada","doc143":"Usuario no válido","doc144":"Completado","doc145":"En progreso","doc146":"Recibe recompensas","doc147":"Tareas diarias","doc148":"Tarea de crecimiento","doc149":"Seleccionar hora","doc150":"Monto de la inversión","doc151":"Beneficio","doc152":"Comprar plataforma","doc153":"Plataforma de venta","doc154":"Precio de compra","doc155":"Preguntar precio","doc156":"Moneda de entrada","doc157":"Tiempo Completo","doc158":"Registros cuantitativos","doc159":"Ganancias de hoy","doc160":"Ingresos en los últimos 7 días","doc161":"Número de inicios restantes hoy","doc162":"Ingresos","doc163":"Cuantización TTMD de inicio único","doc164":"Proceso del panel de ejecución TTMD","doc165":"Género","doc166":"Hombre","doc167":"Mujer","doc168":"Nacionalidad","doc169":"Por favor ingrese la nacionalidad","doc170":"Tipo de documento","doc171":"Número de documento","doc172":"Por favor ingrese el número del documento","doc173":"Subir foto del documento","doc174":"Seleccionar documento","doc175":"DNI","doc176":"Pasaporte","doc177":"Por favor sube una foto frontal de tu documento de identidad","doc178":"Por favor cargue su pasaporte","doc179":"Por favor, sube una foto del reverso de tu documento de identidad","doc180":"Apodo","doc181":"Número de teléfono móvil","doc182":"Número de buzón","doc183":"Autenticación de nombre real","doc184":"Desautenticar","doc185":"Falló","doc186":"Pendiente de revisión","doc187":"Autenticado","doc188":"Guardar","doc189":"Actualización exitosa","doc190":"Nivel actual","doc191":"Siguiente nivel de membresía","doc192":"Cantidad válida","doc193":"Miembro válido","doc194":"Lista de clases","doc195":"Calificación","doc196":"El robot TTMD se puede utilizar todos los días","doc197":"Por favor ingresa el código de verificación","doc198":"Contraseña antigua","doc199":"Por favor ingrese su antigua contraseña de transacción","doc200":"Contraseña de financiación","doc201":"Introduzca la contraseña de la transacción","doc202":"Ingrese la contraseña nuevamente para confirmar","doc203":"1. La contraseña de su fondo se utiliza para operaciones, retiros y configuración de seguridad de la cuenta. Se recomienda que no sea la misma que la contraseña de inicio de sesión. Este sitio no es responsable del robo de la cuenta generada por esto;","doc204":"2. Después de cambiar la contraseña del fondo, no podrá retirar dinero dentro de las 48 horas.","doc205":"Modificar contraseña de transacción","doc206":"Restablecer contraseña de transacción","doc207":"Establecer contraseña de transacción","doc208":"Formato de contraseña incorrecto","doc209":"Por favor ingrese la contraseña anterior","doc210":"Ingrese su antigua contraseña de inicio de sesión","doc211":"Nueva contraseña","doc212":"Nueva contraseña de inicio de sesión, entre 6 y 20 números y letras","doc213":"Configurado correctamente","doc214":"Enlace de invitación","doc215":"Copiar enlace de invitación","doc216":"Código de invitación","doc217":"Copiar código de invitación","doc218":"No certificado","doc219":"La revisión de tu documento falló","doc220":"Su documento está bajo revisión","doc221":"Garantía de seguridad de la información de privacidad personal","doc222":"Mejore la información de identidad y experimente más servicios","doc223":"Para perfeccionar","doc224":"Actualmente abriendo el canal con mayor descuento","doc225":"Usuario normal","doc226":"Canal","doc227":"Actualizar","doc228":"Resumen de activos","doc229":"Cerrar sesión","doc230":"Contactar con servicio al cliente","doc231":"Contraseña de transacción","doc232":"Borrar caché","doc233":"Salir exitosamente","doc234":"Borrado exitoso","doc235":"Por favor ingrese sus comentarios","doc236":"Enviar","doc237":"Problema de funcionamiento del software","doc238":"Quejas y sugerencias","doc239":"Informe de error","doc240":"Otro","doc241":"Por favor, introduce tus comentarios","doc242":"Foto/Sube tu documento de identidad de segunda generación","doc243":"Foto/Sube tu pasaporte","doc244":"Haz clic para fotografiar/cargar retratos de caras","doc245":"Haga clic para grabar/cargar Guowei Noodles","doc246":"Confirmar carga","doc247":"Billetera TTMD","doc248":"Tiempos","doc249":"Personas","doc250":"Si no has invitado a amigos durante mucho tiempo, tus activos no podrán ser retirados. Puedes reanudar el retiro invitando a amigos","doc251":"Relación de división","doc252":"Ingresos por tenencia de divisas de hoy","doc254":"Introducción a la plataforma","doc255":"Introducción a la Cuantificación Inteligente de Recursos Humanos","doc256":"Hay muchas casas de cambio de moneda digital en el mundo, y cada casa de cambio tiene la función de intercambiar moneda fiduciaria por moneda digital. El precio de cambiar moneda fiduciaria por moneda digital es diferente para cada casa de cambio, y la gente puede comprarla en comprar a bajo precio, vender a un precio alto y ganar diferencias de tipo de cambio","doc257":"El proceso de comprar manualmente a precio bajo y vender a precio alto en múltiples intercambios requiere mucho tiempo. Cuando los precios cambian, las operaciones y el comercio tomarán demasiado tiempo y perderán los mejores tipos de cambio, lo que resultará en menores ganancias comerciales.","doc258":"Por lo tanto, el sistema de cuantificación automática TTMD parece evitar problemas manuales y mejorar el margen de beneficio del comercio cuantitativo.<br>El sistema de cuantificación automática TTMD puede buscar automáticamente BTC, ETH, USDT y otras monedas digitales en los principales intercambios. Venta más baja precio y compre rápidamente en segundos.<br/><br/>Cuando el precio de la moneda llegue al sistema, se venderá rápidamente en segundos cuando el precio de venta se establezca automáticamente.<br/ ><br/>En solo unos pocos En minutos, el proceso de compra a bajo precio y venta a alto precio se puede completar automáticamente<br/><br/>Las transacciones cuantitativas se pueden completar rápidamente.24 horas de recopilación de datos ininterrumpida, sin necesidad de observar manualmente el mercado. Podrás obtener ingresos de manera eficiente y estable, este es el sistema de cuantificación automática de TTMD.","doc259":"Cómo ganar dinero","doc260":"Haga clic en el botón para iniciar la transacción cuantitativa automática y la transacción cuantitativa automática se completará en 3 a 5 minutos.<br/>50% de los ingresos al completar la transacción cuantitativa automática es la ganancia obtenida por el plataforma, y el 50% restante lo gana la plataforma. Las ganancias obtenidas. Las ganancias pertenecen al usuario.","doc261":"Ejemplo: compre BTC a 5000 USDT en Binance, venda BTC a 5050 USDT en Ouyi, <br/>obtenga una ganancia de 50 USDT.<br/>La plataforma obtendrá una ganancia de 25 USDT, conserve la siguiente ganancia de 25 USDT pertenece al usuario .","doc262":"Introducción a las ganancias del nivel VIP","doc2633":"Monto de operación de nivel 1-500<br/>Puedes realizar 3 transacciones cuantitativas automáticas por día, y la tasa de retorno para cada transacción cuantitativa es 2.0%-3.0%. 500USDT pueden ganar entre 10USDT y 15USDT.","doc263":"El monto de la operación de nivel es 500-4999<br/>Puedes realizar 3 transacciones cuantitativas automáticas por día, y la tasa de retorno para cada transacción cuantitativa es 2.0%-3.0%. 1000USDT pueden ganar entre 20USDT y 30USDT.","doc264":"Monto de operación de nivel 3000-9999<br/>Puede realizar 4 transacciones cuantitativas automáticas por día, y la tasa de rendimiento para cada transacción cuantitativa es 2,5%-3,5%. 1000USDT puede ganar entre 25USDT y 35USDT.","doc2644":"Monto de operación de nivel 5000-99999<br/>Puedes realizar 5 transacciones cuantitativas automáticas por día, y la tasa de retorno para cada transacción cuantitativa es 3.0%-4.0%. 1000USDT pueden ganar entre 30USDT y 40USDT.","doc2645":"Monto de operación de nivel 10000-999999<br/>Puedes realizar 6 transacciones cuantitativas automáticas por día, y la tasa de retorno para cada transacción cuantitativa es 3.5%-4.5%. 1000USDT pueden ganar 35USDT- 45USDT.","doc2646":"Cantidad de operación de nivel 20000-999999<br/>Puede realizar 7 transacciones cuantitativas automáticas por día y la tasa de rendimiento de cada transacción cuantitativa es del 3,5% al 4,5%. 1000USDT pueden ganar entre 35USDT y 45USDT.","doc265":"Tarifa de retiro para cada nivel VIP","doc2655":"Cuando seas VIP0, se te cobrará el 3% por los procedimientos de retiro<br/>Cuando seas VIP1, se te cobrará el 3% por los procedimientos de retiro<br/>Cuando seas VIP2, se te cobrará 2% para procedimientos de retiro<br/>Cuando seas VIP3, se te cobrará por procedimientos de retiro Cargo del 2%<br/>1.5% cuando seas procedimiento de retiro VIP4<br/>1% cuando seas procedimiento de retiro VIP5","doc2656":"Presentar/invitar a la delegación de nivel 3","doc266":"Para promover rápidamente la APLICACIÓN de comercio cuantitativo automático TTMD, aumentar la popularidad de la plataforma y permitir que más inversores se unan a TTMD. TTMD decidió adoptar un modelo de distribución de tres niveles para la promoción y acumular rápidamente usuarios de la plataforma. ","doc267":"La distribución en tres niveles es la forma más rápida de desarrollar usuarios en todos los modelos de marketing. Para mejorar la velocidad de desarrollo y los beneficios de la agencia, TTMD ha establecido el siguiente mecanismo de distribución en tres niveles.","doc268":"1. Utilice su propio código de invitación para invitar al amigo A a unirse a TTMD y podrá obtener el 18% de los ingresos diarios por operaciones cuantitativas automáticas del amigo A","doc269":"2. Su amigo A usa su código de invitación para invitar a su amigo B a unirse a TTMD, y usted puede obtener el 6% de los ingresos diarios por operaciones cuantitativas automáticas del amigo B","doc270":"3. El amigo B usa su código de invitación para invitar a su amigo C a unirse a TTMD, y usted puede obtener el 3% de los ingresos diarios por operaciones cuantitativas automáticas del amigo C.","doc271":"Si forma su propio equipo, su amigo A invita a su amigo B a unirse y su amigo B invita a su amigo C a unirse, entonces formará un equipo de distribución terciario completo.<br/><br/>Cuándo Cuándo Si tu amigo A, amigo B y amigo C completan la transacción cuantitativa automática de hoy, puedes obtener 18+6+3=27% de sus ingresos como comisión de equipo el día de la comisión de agencia.","doc2657":"Cómo calcular la comisión de tu equipo","doc2658":"Todos tus subordinados son 10A+100B+1000C=1110 personas<br/>Suponiendo que todos tus subordinados ganan $100 por día en sus cuentas,<br/>La comisión del equipo de tu agencia de nivel A Ingresos=100*18% *10 personas=$180,<br/>Los ingresos por comisiones del equipo de su agencia de nivel B=100*6%*100 personas=$600,<br/>Los ingresos por comisiones del equipo de su agencia de nivel C= 100*3%*1000 personas= $3000,<br/>El ingreso diario de su equipo es A100+B180+C3000=$3780,<br/>El ingreso mensual de su equipo es 3780*30 días=$113400,< br/>El ingreso anual de su equipo es 3780*365 días = $1379700 ,<br/><br/>Este es un ingreso muy importante","doc272":"Gana intereses","doc273":"Ganando intereses","doc274":"Depósito para obtener ingresos por intereses","doc275":"Contáctanos","doc276":"No válido","doc277":"Rechazado","doc278":"En revisión","doc279":"Apellido","doc280":"Nombre","doc281":"Por favor ingresa tu apellido","doc282":"Por favor ingresa tu nombre","doc283":"El retiro llegará dentro de 72 horas","doc284":"VIP1: Monto de operación de nivel 35-500<br>Puede realizar 3 transacciones cuantitativas automáticas por día, y la tasa de rendimiento diaria para el comercio cuantitativo es 1,7%-1,9%.<br>500USDT pueden ganar 3 transacciones automáticas transacciones cuantitativas por día Tome 8USDT-10USDT.<br><br>VIP2: monto de operación de nivel 500-3000<br>Puede realizar 4 transacciones cuantitativas automáticas por día, y la tasa de rendimiento diaria para transacciones cuantitativas es 2.1%-2.3 %.<br>3000USDT por día 4 veces de cuantificación automática pueden ganar entre 60USDT y 70USDT.<br><br>Tarifa de retiro para cada nivel VIP<br>Para promocionar rápidamente la APLICACIÓN de pago cuantitativo automático TTMD, aumente la popularidad de la plataforma y permitir que más inversores< br>Únase a TTMD. TTMD decidió utilizar un modelo de distribución de tres niveles para la promoción y acumular rápidamente usuarios de la plataforma.<br><br>La distribución de tres niveles es la forma más rápida de desarrollar usuarios en todos los modelos de marketing, con el fin de mejorar la velocidad de desarrollo y el bienestar de la agencia, TTMD ha establecido el siguiente sistema de distribución de tres niveles.<br><br>1. Utilice su código de invitación para invitar al amigo A a su alrededor a unirse a TTMD, puede obtener el 21% del % de ingresos comerciales cuantificados automáticamente y diarios del amigo A.<br>2. Su amigo A usa su código de invitación para invitar a su amigo B a unirse a TTMD. Puede activar al amigo B<br>7% de los ingresos diarios por operaciones cuantitativas automáticas.<br><br>3. El amigo B usa su código de invitación para invitar a su amigo C a unirse a TTMD. Puede activar el 3% diario del amigo C de los ingresos comerciales cuantificados automáticamente. <br><br>Si forma su propio equipo, su amigo A invita el amigo B se une, el amigo B invita al amigo C a unirse,<br>entonces formará un equipo de distribución completo de tres niveles.<br><br>Cuando su amigo A, su amigo B y su amigo C completen la transacción cuantitativa automática de hoy , puedes obtener 21+7+3=31% de comisión de equipo de sus ingresos el día de la comisión del agente<br>.","doc285":"Días de experiencia","doc286":"Porcentaje de ganancia","doc287":"Porcentaje de comisión","doc288":"Ingrese el número de teléfono móvil correcto para registrarse. Si inicia sesión con un teléfono móvil no verificable, no podrá cambiar su contraseña","doc289":"Por favor ingrese el correo electrónico correcto para registrarse. Si utiliza un correo electrónico no verificable para registrarse e iniciar sesión, no podrá cambiar su contraseña","doc290":"Número de pedido","doc291":"Importe a la cuenta","doc292":"Estado","doc293":"Dirección de depósito","doc294":"Fecha de creación","doc295":"regresar","doc296":"Depósito mínimo: 1 USDT menos que el monto mínimo no se acreditará en la cuenta<br>Para cada depósito, debe obtener la dirección de depósito más reciente, la dirección de depósito caducará después de diez minutos y la transferencia No se encontrarán cuentas de direcciones vencidas ni activos que no sean USDT causados por la pérdida de fondos. ¡Regrese, TTMD no es responsable!","doc306":"Vincular número de teléfono móvil","doc307":"Vincular correo electrónico","doc308":"Ningún número de teléfono móvil está vinculado","doc309":"Primero vincule su buzón","doc310":"Código de área","doc311":"Por favor complete el código móvil internacional","doc312":"Para proteger aún más la seguridad de la cuenta, debe completar la autenticación de enlace del buzón antes de iniciar sesión","doc313":"ID de usuario","doc314":"Rueda de la Fortuna","doc315":"Hay","doc316":"Oportunidad de sorteo","doc317":"Mi premio","doc318":"Reglas","doc319":"Sorteos invitados a miembros válidos","doc320":"Afortunado\\ndraw","doc321":"Consíguelo ahora","doc322":"hora","doc323":"premio","doc324":"Tiempos de rifa insuficientes, por favor vaya a invitar amigos","doc325":"tipo de cambio","doc326":"Rotar","doc327":"Alcancía","doc328":"Destello","doc329":"Monedero electrónico","doc330":"Monedero flexible","doc331":"Alcancía","doc332":"Ingresos cuantitativos","doc333":"Recibe el tanque de depósito","doc334":"Nivel del tanque de la alcancía","doc335":"Cuando el nivel de usuario es el mismo que el nivel del tanque de ahorro, puedes recibir el saldo del tanque de depósito. Después de un período de tiempo, el tanque de dinero se actualizará automáticamente.","doc336":"El saldo de dinero por dinero","doc337":"Recibir","doc338":"Días de actualización","doc339":"Registro de la alcancía","doc340":"Transferir moneda","doc341":"equilibrio","doc342":"Rotar el número","doc343":"Por favor ingrese el número de transferencia","doc344":"Aceptar para transferir","doc345":"El número de transferencias no puede ser mayor que","doc346":"El número de transferencia no puede ser inferior a 1","doc347":"Cong","doc348":"a","doc349":"Cantidad de cambio","doc350":"Por favor ingrese la cantidad de cambio","doc351":"Aceptar Flash","doc352":"El número de parpadeos no puede ser mayor que","doc353":"Por favor ingrese el número de flasheos","doc354":"El número de parpadeos no puede ser inferior a 1","doc355":"Miembro de envío directo","doc356":"Trabajando en equipo","doc357":"El número de veces cuantificadas por día","doc358":"1. Para prevenir actividades ilegales de lavado de dinero, los usuarios del primer depósito deben ser cuantificados diariamente para realizar retiros. BR> 3. Para garantizar estrictamente la seguridad de los fondos de la cuenta, la cuenta activará automáticamente el mecanismo de protección del sistema de financiación después de cambiar el buzón o la dirección de retiro TRC20 USDT y la contraseña de retiro. > Cada tarifa de retiro de nivel VIP <br> Tarifa de retiro VIP1 5.0%<br> Tarifa de retiro VIP2 4.0%<br> Tarifa de retiro VIP3 3.0%< br> Tarifa de retiro VIP4 2.0% <br> Tarifa de retiro VIP5 1.0%<br> Tarifa de retiro VIP6 0.0%","doc359":"Siguiente","doc360":"Beneficios de ayer","doc361":"Comisión General del Equipo","doc362":"Comisión del equipo de ayer","doc363":"La comisión del equipo de hoy","doc364":"Más información del evento","doc365":"Información de noticias","doc366":"Promesa de contrato","doc367":"Motivo del rechazo"},"page2":{"doc1":"Fondo Flexible","doc2":"Para liberar fondos","doc3":"Bienvenido a ITP","doc4":"Número de móvil","doc5":"Contraseña","doc6":"Varias veces hoy","doc7":"Ingresos totales","doc8":"Ingresos totales de la tenencia de moneda","doc9":"Para publicar el registro","doc10":"Nivel VIP","doc11":"Condición de actualización","doc12":"Equidad","doc13":"Cantidad mínima de cuantificación","doc14":"Cantidad cuantitativa máxima","doc15":"Tiempos diarios cuantificados","doc16":"rendimiento químico diario","doc17":"Mecanismo de seguridad absoluta","doc18":"Logros en el comercio cuantitativo","doc19":"Parámetros de política rigurosos","doc20":"Ideas de arbitraje automático","doc21":"Desarrollo sostenible","doc22":"El sistema cuantitativo inteligente TTMD calcula las posiciones abiertas con mucha precisión. Negocia automáticamente en su cuenta y funciona las 24 horas del día, los 365 días del año. Configuramos el comercio cuantitativo con IA en 2016. Hace todo lo posible para aumentar constantemente sus ganancias mensuales","doc23":"TTMD proporciona una gran cantidad de datos de transacciones para el aprendizaje inteligente de la IA. Después de millones de ensayos y maniobras. Ya se han implementado habilidades de implementación y toma de decisiones disciplinadas. Se pone en marcha con un historial notable sin fallas ni pérdidas","doc24":"Basado en los resultados de las decisiones de ejecución de inteligencia cuantitativa de IA. El sistema de inteligencia comercial cuantitativa selecciona automáticamente el crecimiento en comparación con esta fase. Valoración. Financiación. Evaluación integral de oportunidades comerciales favorables. Luego, establezca estrategias de acción precisas. Puede evitar la mayoría. devuélvete los sesos La decisión de","doc25":"El sistema de cuantificación analiza las oportunidades de forma integral. Completamente automatizado con un solo clic. Bloquea rápidamente el diferencial de beneficios entre productos simbólicos. Comprando a precios bajos. Vende caro para desarrollar una estrategia y obtener ganancias","doc26":"El comercio de divisas digitales será un mercado de larga data. El sistema de inteligencia cuantitativa TTMD seguirá optimizando el rendimiento. El último algoritmo digital. Proporcionándole una mayor mejora de su riqueza","doc27":"Socio","doc28":"Compartir los medios","doc29":"anverso del documento","doc30":"Control del certificado","doc31":"documentos de mano","doc32":"Enviar reseña","doc33":"Nombre irreal","doc34":"Error en la certificación del nombre real","doc35":"Nombre real a revisar","doc36":"Certificación de nombre real","doc37":"Por favor autentíquese primero","doc38":"1.Para prevenir actividades ilegales de lavado de dinero. Los depositantes por primera vez deben completar 3 días de cuantificación antes de poder retirar<br>2.Completar todos los recuentos cuantificados del día y retirar al menos 39 USDT<br>3 .El monto de cada retiro está sujeto a las reglas reales de la plataforma.Y se cobra una tarifa por cada retiro como tarifa de mantenimiento para el cambio de contraseña de inicio de sesión de la plataforma.Contraseña comercial.El mecanismo de protección de seguridad de los fondos se activará<br>Después 48 horas, el sistema liberará automáticamente el estado de protección de fondos. Inicie el proceso de retiro normal<br><br>Reglas de tarifas de retiro<br>Tarifa de retiro VIP1 5,0 %<br>Tarifa de retiro VIP2 4,0 %<br>Tarifa de retiro VIP3 3,0 %<br>VIP4 Tarifa de retiro 2.0%<br>VIP5 Tarifa de retiro 1.0%<br>VIP6 Tarifa de retiro 0.0%","doc39":"Dirección de retiro","doc40":"Por favor ingrese la contraseña de la transacción","doc41":"Introduzca la dirección de retirada","doc42":"Tarea de principiante","doc43":"Misión Avanzada","doc44":"Primero establezca la contraseña comercial","doc45":"Miembros efectivos acumulativos","doc46":"Saldo efectivo","doc47":"Recarga efectiva","doc48":"Tipo de comentarios","doc49":"Tus comentarios","doc51":"Total {k1} personas","doc52":"Nivel de amigos","doc53":"Total del monto de la comisión la comisión","doc54":"Monto total de la comisión de dos capas","doc55":"Monto total de la comisión de tres niveles","doc56":"Eficaz","doc57":"Inferido","doc58":"Una capa","doc59":"Dos capas","doc60":"Tres capas","doc61":"Seleccione el nivel","doc62":"Lista de Activos","doc63":"Tecnología Digital TTMD","doc64":"Construcción ecológica global Blockchain","doc65":"Hospedaje de IA","doc66":"Detalles confiables","doc67":"Detalles de ingresos cardíacos","doc68":"Hospedaje exitoso","doc69":"Cada cuantificación produce","doc70":"Fondos flexibles","doc71":"Activos congelados","doc72":"Puedes obtener más recompensas por completar la tarea","doc73":"Cantidad a tratar","doc74":"Tienes {i1} un robot está cuantificando el funcionamiento operativo del hosting","doc75":"Rendimiento diario (flotante)","doc76":"Rango de entrada","doc77":"Período de tesorería","doc78":"Anfitrión","doc79":"Fin","doc80":"Ingreso diario","doc81":"(flotante)","doc82":"Hora de inicio","doc83":"La hora de finalización del hosting","doc84":"Detalles de ingresos","doc85":"Cuantificación del alojamiento de IA","doc86":"En progreso","doc87":"Anfitrión del historial","doc88":"Alojamiento uniforme","doc89":"Host Malvage","doc90":"También está {i1} Tian cuando expire la custodia","doc91":"Historial del host","doc92":"Fin","doc93":"Los robots están trabajando duro","doc94":"Una reciprocidad","doc95":"Mi alojamiento","doc96":"Rendimiento diario","doc97":"Organiza la oportunidad de entrar y salir a través de datos de IA y agrega lógica como el filtrado de promedio móvil al mismo tiempo para reducir los impactos emocionales artificiales. Mientras mejora los rendimientos y garantiza la seguridad del principal, la tasa de precisión de la entrada y salida ha mejorado mucho.","doc98":"Ciclo de tratamiento","doc99":"Tipo de negociación","doc100":"Selección inteligente","doc101":"Moneda comercial","doc102":"Combinación de tokens inteligentes","doc103":"La combinación de token inteligente selecciona múltiples pares de transacciones basándose en big data de IA, menores riesgos y mayores ingresos","doc104":"Cantidad ingresada","doc105":"Natillas para confirmar","doc106":"Aceptar para hospedar","doc107":"Cuota de entrada","doc108":"El límite de entrada no puede ser menor que","doc109":"El límite de entrada no puede ser mayor que","doc110":"Selección inteligente","doc111":"Comienza tu andadura como equipo comunitario.","doc112":"Libro blanco","doc113":"Financiero","doc114":"Área Financiera","doc115":"Monto financiero","doc116":"Ingresos totales por gestión patrimonial","doc117":"Retener orden","doc118":"Lotería de caja ciega","doc119":"Grabación en caja ciega","doc120":"Mío","doc121":"Mis pedidos","doc122":"Ganancias de ayer","doc123":"Monto de la inversión","doc124":"Tarifa de gestión","doc125":"Impuesto sobre la renta","doc126":"El término","doc127":"Tasa de rendimiento diaria","doc128":"Rendimiento total","doc129":"Introducir","doc130":"Invertir en gestión financiera","doc131":"Detalles financieros","doc132":"Tarifa diaria","doc133":"Período de inversión","doc134":"Costos de gestión","doc135":"Impuesto sobre la renta de inversiones","doc136":"Día","doc137":"Cálculo de intereses","doc138":"Ingreso diario, pago pendiente","doc139":"Ingreso diario","doc140":"Beneficio total estimado","doc141":"Nivel","doc142":"Monto de la inversión","doc143":"Saldo","doc144":"Vales","doc145":"No hay vale disponible","doc146":"Monto deducible","doc147":"Por favor seleccione un cupón","doc148":"El monto de la compra no puede exceder el saldo","doc149":"El monto de la inversión debe estar dentro","doc150":"Productos de Inversión","doc151":"Hora de inicio","doc152":"Hora de finalización","doc153":"Deducción del cupón","doc154":"Pago real","doc155":"Ninguno","doc156":"La información es correcta y la inversión está confirmada","doc157":"Confirmar inversión","doc158":"Determinación de la inversión financiera","doc159":"Éxito financiero","doc160":"Trabajando duro","doc161":"Pon otro","doc162":"Gestionado exitosamente","doc163":"Orden financiera","doc164":"No más","doc165":"Todos","doc166":"Espera","doc167":"Madurez","doc168":"Caducado","doc169":"Tasa de retorno","doc170":"Tarifa de gestión","doc171":"Ingresos estimados","doc172":"Cupones disponibles","doc173":"Cupones no disponibles","doc174":"Vale en efectivo de gestión patrimonial","doc175":"Usar inmediatamente","doc176":"Motivo del cupón no disponible: ","doc177":"Mi cupón de descuento","doc178":"Abre la caja ciega para obtener recompensas en efectivo","doc179":"Mercado de divisas","doc180":"Recompensas de la comunidad","doc181":"Miembros del equipo","doc182":"Área especial","doc183":"nivel de actualización","doc184":"Mis cupones de descuento","doc185":"Felicitaciones","doc186":"Al realizar \\"gestión financiera e inversiones\\", puede utilizar cupones en efectivo para deducir","doc187":"Pon otro","doc188":"Ingresos financieros","doc189":"Recompensas por recomendación","doc190":"Beneficios del equipo","doc191":"Análisis del nivel de membresía (Tres generaciones)","doc192":"Número de personas","doc193":"Miembro de envío directo","doc194":"Comprar producto","doc195":"Monto financiero mínimo","doc196":"Monto máximo de gestión financiera","doc197":"Productos","doc198":"Primera generación","doc199":"Segunda generación","doc200":"Tercera generación","doc201":"Cantidad invertida","doc202":"Período de actividad","doc203":"Cambie la contraseña de inicio de sesión y la contraseña de la transacción activará el mecanismo de protección de fondos. Después de 48 horas, el estado de protección de fondos se liberará automáticamente y comenzará el proceso de retiro normal","doc204":"1. Para prevenir actividades ilegales de lavado de dinero, los usuarios no pueden retirar efectivo sin comprar productos de gestión patrimonial","doc205":"2. Se cobrará una tarifa fija por cada retiro","doc206":"u La tarifa de gestión se utiliza como fondos operativos de la plataforma","doc207":"3. El monto de cada retiro está sujeto al monto fijo real de la plataforma, y se deducirá el impuesto a la renta correspondiente a cada nivel. Cuanto mayor sea el nivel, menor será la tasa del impuesto a la renta","doc208":"Reglas del impuesto sobre la renta","doc209":"Tasa de impuesto sobre la renta de clase","doc210":"Su nueva contraseña debe ser diferente de su antigua contraseña","doc211":"Verificado","doc212":"Eliminar cuenta","doc213":"Confirmar para eliminar la cuenta TTMD","doc214":"Lea las siguientes reglas antes de eliminar su cuenta TTMD:","doc215":"Después de eliminar la cuenta, todos los registros de transacciones, activos de usuario, ingresos generados por inversiones, información de verificación de identidad y vinculación de cuentas bancarias en la cuenta se borrarán y se restablecerán a cero.","doc216":"Para evitar la pérdida de sus activos, asegúrese de que no haya saldo en la cuenta:","doc217":"Haga clic en el botón Aceptar a continuación, lo que significa que ha leído y está de acuerdo","doc218":"Confirmar eliminación","doc219":"Reglas","doc220":"Grabar","doc221":"Restante","doc222":"Invitar a amigos a obtener","doc223":"Caja ciega","doc224":"Extracto","doc225":"No permitir que menores de edad utilicen o experimenten bajo la supervisión y guía de tutores","doc226":"Caducado","doc227":"Usado","doc228":"Ingreso diario, pago pendiente","doc229":"Retorno de capital e intereses al vencimiento","doc230":"Recordar la contraseña de la cuenta","doc231":"Tasa impositiva","doc232":"Cuarta Generación","doc233":"Quinta Generación","doc234":"Sexta Generación","doc235":"Séptima Generación","doc236":"Octava Generación","doc237":"Novena Generación","doc238":"Décima generación"},"page3":{"doc1":"Autenticador de Google","doc2":"Verificación de seguridad","doc3":"Código de verificación de Google","doc4":"Por favor ingresa el código de verificación de Google","doc5":"Aceptar","doc6":"Cambio de verificación de Google","doc7":"No autenticado","doc8":"Autenticado","doc9":"Cambio de verificación de Google","doc10":"Primero vincule Google Authenticator","doc11":"Primer paso","doc12":"Descargue Google Authenticator desde la tienda de aplicaciones móviles","doc13":"Paso 2","doc14":"Escanee el código QR para vincularlo a través de Google Authenticator","doc15":"Copiar clave","doc16":"Paso 3","doc17":"Por favor ingresa el código de verificación de Google","doc18":"Confirmar enlace","doc19":"Predicciones candentes","doc20":"Ver más","doc21":"Desbloqueado","doc22":"{K}Desbloqueado","doc23":"Tasa de retorno después de 7 días","doc24":"período de custodia","doc25":"Número de fideicomisarios","doc26":"Ingresos totales por custodia","doc27":"{k} días","doc28":"Ganadores","doc29":"24h Vol","doc30":"Cambio 24h","doc31":"volumen de negocios 24 horas","doc32":"Socio","doc33":"Reembolso por invitación","doc34":"Obtenga ganancias rápidamente","doc35":"Nivel de miembro","doc36":"Iniciar transacciones","doc37":"cuadrícula","doc38":"cuantificación","doc39":"Orden cuantitativo","doc40":"Ingresos estratégicos","doc41":"Desbloqueable","doc42":"Monto de la inversión","doc43":"Alcance de la inversión","doc44":"Fondos de Inversión","doc45":"Monto de la inversión"},"page4":{"doc1":"actual","doc2":"Alto","doc3":"bajo","doc4":"Precio de apertura","doc5":"Volumen de transacciones","doc6":"1 minuto","doc7":"5 minutos","doc8":"15 minutos","doc9":"30 minutos","doc10":"1 hora","doc11":"1 día","doc12":"1 semana","doc13":"Verificación de seguridad (elija una de las dos siguientes)","doc14":"Enviar","doc15":"Por favor ingrese una nueva contraseña","doc16":"Por favor ingrese la nueva contraseña nuevamente","doc17":"Cantidad llegada","doc18":"Comisión de retiro","doc19":"Privilegio de tiempo limitado","doc20":"Tarifa por manejo de moneda sin día","doc21":"Monto mínimo de retiro","doc22":"Monto máximo de retiro","doc23":"Ya tienes retiros gratis","doc24":"Cantidad","doc25":"Dirección","doc26":"Fecha","doc27":"Detalles","doc28":"Cantidad disponible","doc29":"Cantidad congelada","doc30":"Detalles del activo","doc31":"Videotutorial","doc32":"Experiencia","doc33":"Ganancias en línea","doc34":"Estrategia inteligente","doc35":"Rango de precios","doc36":"Ver reglas comerciales","doc37":"Recargue ETH desde la red principal de Ethereum a la red zkSync Era a través del puente entre cadenas, y podrá experimentar la interacción de DApp como tarifas de red","doc38":"Configuraciones inteligentes","doc39":"Tipo de cuadrícula","doc40":"Por favor seleccione","doc41":"tipo","doc42":"Monto de la inversión","doc43":"Información utilizable","doc44":"Cantidad que se puede invertir","doc45":"Detalles por publicar","doc46":"Registro de pedido","doc47":"Crear orden","doc48":"La estrategia inteligente está comenzando","doc49":"Seleccione una estrategia","doc50":"Estrategia Inteligente","doc51":"Deposita ETH desde la red principal de Ethereum a la red zkSync Era a través del puente entre cadenas","doc52":"Abierto","doc53":"Monto acumulado a liberar","doc54":"La acumulación ha sido liberada","doc55":"Monto acumulado a liberar","doc56":"Ingresos de la estrategia actual","doc57":"Registro por publicar","doc58":"tipo","doc59":"todos","doc60":"todos","doc61":"Seleccionar","doc62":"¡Aún no hay datos!","doc63":"Monto de la inversión","doc64":"Monto de la ganancia","doc65":"Plataforma de compra","doc66":"Plataforma de ventas","doc67":"Precio de compra","doc68":"Precio de mercado","doc69":"Moneda de salida","doc70":"Tiempo de finalización","doc71":"Elegir","doc72":"Grabar","doc73":"Recarga por liberar","doc74":"Fondos de retorno estratégico","doc75":"Seleccionar","doc76":"Ingresos totales","doc77":"Tarifa de gestión","doc78":"Requisitos de actualización","doc79":"Logrado","doc80":"Fondos efectivos","doc81":"Usuarios de primera generación","doc82":"Usuarios de segunda generación","doc83":"Usuarios de tercera generación","doc84":"Equidad","doc85":"Monto de la inversión","doc86":"Tiempo de funcionamiento","doc87":"minutos","doc88":"Número de veces por día","doc89":"veces","doc90":"Relación de beneficio","doc91":"Comisión de retiro","doc92":"Retiro gratuito","doc93":"Una vez cada {k} días","doc94":"Con retiros gratis","doc95":"Por abrir","doc96":"Estrategia","doc97":"Monto de la ganancia","doc98":"Comprar plataforma","doc99":"Plataforma de venta","doc100":"precio de venta","doc101":"Moneda de entrada","doc102":"Por favor invierta el monto","doc103":"Fondos cuantificables","doc104":"Su cuenta actualmente no tiene ningún activo","doc105":"Recarga ahora","doc106":"Días para la retirada libre","doc108":"Por publicar","doc107":"días","doc109":"horas","doc110":"minutos","doc111":"segundos","doc112":"Comunidad","doc113":"He leído el acuerdo de privacidad","doc114":"Restablecer contraseña de inicio de sesión","doc115":"Código de verificación de Google","doc116":"Recordatorio","doc117":"Para garantizar la seguridad de su cuenta, puede retirar dinero sólo 48 horas después de restablecer su contraseña de inicio de sesión","doc118":"1. Puede retirar dinero después de completar la configuración de la contraseña de transacción por primera vez<br>2. La contraseña de transacción solo se usa para transacciones. Se recomienda no ser coherente con la contraseña de inicio de sesión<br>3 . Para garantizar la seguridad de los fondos, la contraseña de la transacción se puede cambiar 48 horas después del retiro<br>4. La contraseña de la transacción solo puede ser cualquier combinación de 6 dígitos del 0 al 9, y no se pueden ingresar símbolos ni letras.","doc119":"Términos de uso","doc120":"Invitaciones","doc121":"Invitación para obtener ganancias","doc122":"te acerca a la IA","doc123":"Equipo de la comunidad","doc124":"Centro de Misión","doc125":"Hasta $10000","doc126":"Rango","doc127":"Este nivel ha sido desbloqueado","doc128":"Este nivel está bloqueado","doc129":"tutorial de vídeo","doc130":"Detalles de la recarga","doc131":"Tarifa de minero"},"page5":{"doc1":"Registros de recompensas","doc2":"Bonificación por actualización de parrilla","doc3":"Indicar claramente","doc4":"Los equipos comunitarios con 100 o más miembros pueden solicitar fondos para la creación de equipos comunitarios","doc5":"Reembolso para miembros de 1.ª generación","doc6":"Reembolso para miembros de segunda generación","doc7":"Reembolso para miembros de 3.ª generación","doc8":"Invitar a amigos","doc9":"Registro de invitaciones","doc10":"Copia éxito","doc11":"Realización de tareas y recepción de beneficios","doc12":"La intercepción está cobrando actualmente la recompensa total:","doc13":"hacia","doc14":"pendiente","doc15":"hecho","doc16":"Enhorabuena por haber completado la recompensa de la misión","doc17":"Ver recompensas","doc18":"Mandato a largo plazo","doc19":"rutina","doc20":"usuario activo","doc21":"usuario inválido","doc22":"Invita a amigos y gana más","doc23":"Invita ahora","doc24":"Reclama tus recompensas en cuanto tu invitación tenga éxito","doc25":"Invitaciones efectivas y exitosas","doc26":"hombre","doc26-1":"Participación","doc27":"Enviar invitación","doc28":"Recarga inscripción amigos","doc29":"Haz clic para reclamar tu recompensa","doc30":"Descripción de las actividades","doc31":"1. Invita a x número de usuarios válidos después de que la recarga alcance la cantidad xx;","doc32":"2. Tu amigo es un usuario válido si descarga e inicia sesión por primera vez a través de tu invitación y recarga su cuenta;","doc33":"3.Invitar a la gente a hacer un primer cargo xx","doc34":"Comienza tu andadura como equipo comunitario","doc35":"código de invitación","doc36":"Comparte a","doc37":"Guardar imagen","doc38":"Facebook","doc39":"Whatsapp","doc40":"Telegram","doc41":"Copiar enlace","doc42":"cancelaciones","doc43":"aclaración","doc44":"Esperamos","doc45":"NOTICIAS","doc46":"Más","doc47":"Ver configuración","doc48":"Tamaño de fuente","doc49":"Pequeño","doc50":"Medio","doc51":"Grande","doc52":"Modo oscuro","doc53":"Confirmar","doc54":"Últimos 7 días","doc55":"Últimos 30 días","doc56":"Últimos 60 días","doc57":"Casi 90 días","doc58":"Aún no hay datos"},"kLine":{"doc1":"Hora","doc2":"Apertura","doc3":"Máximo","doc4":"Mínimo","doc5":"Cierre"},"page6":{"doc1":"Sin cuenta","doc2":"Regístrese ahora","doc3":"Hola","doc4":"Bienvenido","doc5":"Ya tengo una cuenta","doc6":"Iniciar sesión ahora","doc7":"activos TTMD","doc8":"Todas las cantidades","doc9":"Funciones comunes","doc10":"Filtro de tiempo","doc11":"{n} años","doc12":"{n} meses","doc13":"{n} día","doc14":"La hora de inicio no puede ser mayor que la hora de finalización","doc15":"descarga de la APLICACIÓN","doc16":"Productos estratégicos de clase mundial TTMD","doc17":"Gratis y abierto al público","doc18":"Enlace de invitación","doc19":"Código de invitación","doc20":"Ayuda","doc21":"Equipo comunitario","doc22":"Número efectivo de segunda generación + tercera generación","doc23":"Registro de recibo","doc24":"Cantidad recibida","doc25":"Ingresos de la alcancía","doc26":"Prima Generazione","doc27":"Seconda Generazione","doc28":"Terza Generazione","doc29":"cuatro generaciones","doc30":"Quinta Generación","doc31":"tasso di commissione","doc32":"Devolución de ingresos","doc33":"Sistema de Puntos TTMD","doc34":"Socio","doc35":"Puntos","doc36":"Recompensa por promoción","doc37":"Salario semanal","doc38":"{n} Puntos","doc39":"Tarea semanal","doc40":"Exceso de cantidad","doc41":"Aumentar los fondos cuantitativos totales","doc42":"Registro de puntos","doc43":"Aumentar puntos","doc44":"Deducir puntos","doc45":"Filtro","doc46":"Sistema de Puntos TTMD","doc47":"Bono semanal","doc48":"Búsqueda Inteligente","doc49":"Buscar","doc50":"Este nivel está lleno","doc51":"Agregar dirección","doc52":"Seleccione la dirección","doc53":"Tiempo estimado de llegada ≈ {n} minutos","doc54":"Depósito mínimo","doc55":"Monto mínimo de retiro","doc56":"Número total de usuarios de la plataforma","doc57":"Volumen total de transacciones de la plataforma","doc58":"Beneficio medio de la plataforma","doc59":"Usuario registrado","doc60":"volumen de operaciones en 24 horas","doc61":"Tasa de rendimiento mensual","doc62":"Resumen de la actividad","doc63":"Sexta generación","doc64":"Séptima generación","doc65":"Octava generación","doc66":"Novena generación","doc67":"Décima generación","doc68":"Certificación oficial","doc69":"Método de autenticación","doc70":"Por favor ingresa Telegram","doc71":"Por favor ingresa whatsapp","doc72":"Certificación aprobada","doc73":"Error de autenticación","doc74":"Reautenticación","doc75":"Entendido","doc76":"Estén atentos","doc77":"Cancelar retiro","doc78":"¿Está seguro de cancelar el retiro?"},"tpage":{"doc1":"Acercándote","doc2":"inteligencia artificial","doc3":"Configuración inteligente","doc4":"Poziomy","doc5":"Uzyskiwanie wyższych zysków","doc6":"Kliknij OK poniżej","doc7":"Przycisk Usuń","doc8":"Oznacza to, że przeczytałeś i zgodziłeś się","doc999":""},"app":{"text":"Nota: Durante el proceso de descarga e instalación, existen situaciones anormales, como fallas en la descarga, fallas al analizar el paquete de instalación y fallas en la instalación; descargue e instale nuevamente.","downs":"Descargas","cs":""},"lucky":{"doc1":"Mi premio","doc2":"Reglas de la lotería","doc3":"Valor de la suerte","doc4":"Número de sorteos","doc5":"Hay {n} más oportunidades de lotería","doc6":"Número acumulado de sorteos","doc7":"Obtener el número de sorteos","doc8":"Para agradecer a los usuarios por su firme apoyo y amor por CoinPlex, hemos lanzado la Lotería G2 del Gran Premio 2023. Al mismo tiempo, para mejorar la experiencia de lotería de los usuarios, hemos agregado un sistema de puntos. Cuanto mayor sea el número, mayores serán los puntos de recompensa de la Lotería. ¡Cuanto más veces, mayores serán los puntos de recompensa, mayores serán las posibilidades de ganar premios generosos y más premios le esperan!","doc9":"Desembalaje","doc10":"Felicitaciones, ganaste el premio","doc11":"Número insuficiente de sorteos, por favor invite a amigos","doc12":"Mi premio","doc13":"Lotería otra vez","doc14":"Número de sorteos restantes","doc15":"Premio","doc16":"hora","doc17":"Estado de emisión","doc18":"Emitido","doc19":"Administrador de contactos","doc20":"No recibido","doc21":"Tipo de lotería","doc22":"Recompensa sorteada {n} veces","doc23":"Obtenido {n} veces","doc24":"Rueda de la suerte","doc25":"Lotería anunciada","doc26":"Descripción de la regla","doc27":"Abre el cofre del tesoro","doc28":"Grabación en caja ciega","doc29":"Al realizar \\"beneficios de equipo\\", puedes utilizar el paquete de aceleración para obtener más beneficios","doc30":"Registro de tiempos de lotería","doc31":"Caja sorpresa sorpresa","doc32":"Los premios te están esperando","doc33":"Error","doc34":"Vista previa del premio","doc35":"Invitar amigos","doc36":"Obtenga más horarios de lotería"},"new":{"doc1":"Vincular correo electrónico","doc2":"Si no recibe el correo electrónico, revise su correo electrónico no deseado","doc3":"Correo electrónico antiguo","doc4":"Nuevo correo electrónico","doc5":"Cambiar correo electrónico","doc6":"Por favor ingrese su dirección de correo electrónico","doc7":"Por favor ingresa el código de verificación","doc8":"Verificación de correo electrónico","doc9":"pista","doc10":"La cuenta no está vinculada a una dirección de correo electrónico y la contraseña no se puede restablecer a través de la dirección de correo electrónico. Comuníquese con el servicio de atención al cliente para cambiar la contraseña de inicio de sesión.","doc11":"Aún no hay contacto","doc12":"Contactar con servicio al cliente","doc13":"Ratio de crecimiento de la semana pasada","doc14":"Crecimiento semanal actual","doc15":"Mensaje del sistema","doc16":"Comuníquese con el gerente de servicio al cliente","doc17":"Error en la coincidencia del pedido. Vuelva a intentarlo en {n} días. Para obtener más detalles, comuníquese con el gerente de servicio al cliente.","doc18":"Coincidencia de órdenes, solo órdenes de estrategia, tiempo de finalización estimado {n} minutos","doc19":"Por favor, introduzca","doc20":"Enviar","doc21":"Pensando...","doc22":"tiempo de espera del enlace wss","doc23":"Se agotó el tiempo de espera de la conexión TCP, la página se actualizará automáticamente después de 3 segundos","doc24":"Historial de diálogo de IA","doc25":"Borrar registros de sesión","doc26":"Crear una nueva sesión","doc27":"La sesión actual aún no ha finalizado, no se pueden realizar nuevas incorporaciones","doc28":"Diálogo con un robot inteligente de IA","doc29":"Modificar","doc30":"Modificar dirección","doc31":"Por favor, introduzca el código de verificación del correo electrónico","doc32":"Tienes una solicitud de retiro","doc33":"¿Está seguro de que desea cancelar el retiro?","doc34":"Sí","doc35":"No","doc36":"Ir al buzón de enlace","doc37":"Compromiso de contrato","doc38":"Productos financieros","doc39":"My Financial","doc40":"ID de usuario: {n1} en {n2} compromiso {n3} USDT","doc41":"Seleccione el área de compromiso","doc42":"Seleccione el área de compromiso","doc43":"Seleccione el período de compromiso","doc44":"Área de apuestas","doc45":"Fondos de participación","doc46":"Disponible","doc47":"Recompensa esperada total de bloqueo","doc48":"Tasa de retorno diaria","doc49":"Tiempo de compra","doc50":"Comienzo de cálculo de interés","doc51":"Primera ganancia","doc52":"Última ganancia","doc53":"Red para dar cuenta","doc54":"Lectado y acordado","doc55":"Confirmar para comprar","doc56":"Descripción general","doc57":"Reglas financieras","doc58":"Inversión en serie","doc59":"Cantidad total de compromiso","doc60":"Ingresos históricos totales","doc61":"Ganancias de hoy","doc62":"Reden","doc63":"Repartir","doc64":"expirado","doc65":"Tiempo de compra","doc66":"Tiempo redimible","doc67":"Días de compromiso","doc68":"Cantidad de compromiso","doc69":"Ingresos acumulativos","doc70":"Ganancias de hoy","doc71":"Confirmación de Redificación","doc72":"Cantidad de Reden","doc73":"Ingresos acumulativos","doc74":"Tarifa de transacción","doc75":"ser redimido","doc76":"Vestible","doc77":"Inicio de sesión de cuenta ","doc78":"Registro de cuenta","doc79":"Acerca de","doc80":"Medias sociales","doc81":"mis ingresos","doc82":"Invitar amigos","doc83":"Invite a sus amigos y gana monedas juntas","doc84":"Ve a invitar","doc85":"mi nivel","doc86":"editar","doc87":"Información de la cuenta","doc88":"Invitar amigos, <span> Ear Money juntos </span>","doc89":"Invite a amigos a ser miembros de su comunidad","doc90":"Invitar amigos para obtener ingresos","doc91":"Método de invitación","doc92":"Nivel VIP","doc93":"Registro de invitación","doc94":"Lista de invitaciones","doc95":"Registro de tiempo","doc96":"Cuenta","doc97":"Distribución de ingresos","doc98":"Release Record","doc99":"Información del certificado","doc100":"Foto delantera de la tarjeta de identificación","doc101":"Foto inversa de la tarjeta de identificación","doc102":"Foto de identificación de mano","doc103":"Después de enviar la certificación, debe esperar la revisión manual, y el tiempo de revisión se completa dentro de las 72 horas","doc104":"Por favor, suba JPG, JPEG, PNG Formato archivos de menos de 10 MB","doc105":"Presentado con éxito","doc106":"La autenticación de nombre real se envía correctamente! Después de enviar la autenticación, debe esperar la revisión manual. El tiempo de revisión se completa dentro de las 72 horas. Espere pacientemente","doc107":"Lo tengo","doc108":"Para modificar o eliminar la dirección, comuníquese con el servicio al cliente","doc109":"Reenventar","doc110":"Se ha enviado información de certificación y el administrador está en revisión. Se espera que la revisión se complete dentro de <span> 72 </span> horas","doc111":"<span> razón para el rechazo: </span> {n1}","doc112":"Has completado la autenticación de nombre real","doc113":"Esperando la revisión","doc114":"desapareció","doc115":"La certificación es exitosa","doc116":"Acerca de nosotros","doc117":"Síganos","doc118":"Obtenga información de primera mano del proyecto y obtenga el soporte de servicio al cliente en línea en tiempo real","doc119":"¡Hola!","doc120":"Estamos aquí para ayudarte","doc121":"Mi equipo","doc122":"Cuantificación inteligente de IA","doc123":"De pie a la vanguardia de la tecnología y las finanzas, logrando una multiplicación constante de los activos","doc124":"Ver detalles","doc125":"Hot News","doc126":"Información del equipo","doc127":"{n1} generación","doc128":"Mercado de criptomonedas","doc129":"Mercado","doc130":"Bill","doc131":"Seleccione la red principal","doc132":"Esta dirección solo admite {n2} de recarga {n1}","doc133":"La dirección de correo electrónico ha estado obligada, comuníquese con el servicio oficial al cliente para manejar la dirección de correo electrónico si ha cambiado o eliminado la dirección de correo electrónico","doc134":"El teléfono móvil se ha unido, si cambia el teléfono móvil o lo elimina, comuníquese con el servicio al cliente oficial para tratarlo","doc135":"Abra la aplicación Authenticator","doc136":"Descargue la aplicación Authenticator (como\\" Google \\n Authenticator \\") en la tienda de aplicaciones móviles","doc137":"Clave vinculante","doc138":"Haga clic en el icono\\"+\\"en la aplicación Authenticator, ingrese la clave a continuación o vincule la clave escaneando el código.","doc139":"Abra la aplicación Authenticator, escanee el código para que se vaya","doc140":"Ha alcanzado este nivel","doc141":"desbloqueado","doc142":"Se cumplen los niveles","doc143":"Balance de USDT","doc144":"{N1} Generación Usuarios válidos","doc145":"No logrado","doc146":"Derechos de nivel y equidad","doc147":"Álgebra de ingresos del equipo","doc148":"{n1} generación","doc149":"Comercio estratégico","doc150":"Saldo de la cuenta","doc151":"Detalles de la factura","doc152":"Esperando los resultados de la cita","doc153":"Cita no ganada","doc154":"El pedido está completo, inténtalo de nuevo mañana","doc155":"OK","doc156":"Felicitaciones por el nombramiento exitoso","doc157":"La cita es exitosa, mantenga el equilibrio de su billetera suficiente","doc158":"Nombre de la política de nombramiento","doc159":"Cantidad estratégica de bloqueo","doc160":"Se espera que las estrategias ganen","doc161":"Ejecutar la Política","doc162":"Si la Política de AI no se ejecuta, el sistema coincidirá automáticamente con la Política de AI y la ejecutará en 5 minutos","doc163":"El retiro de efectivo no se puede iniciar en este momento","doc164":"Buzón vinculante","doc165":"Recarga acumulada de 35USDT","doc166":"El retiro de efectivo se puede iniciar después de 3 horas de ejecución de políticas","doc167":"El siguiente retiro se puede iniciar después de 48 horas después de que el retiro anterior sea exitoso","doc168":"Una orden de retiro revisada","doc169":"Dobind","doc170":"Vaya a recarga","doc171":"No más inmediato","doc172":"Lo tengo","doc173":"Experience de oro","doc174":"Número de nuevos equipos hoy","doc175":"Nuevo ingresos del equipo hoy","doc176":"Esta condición de nivel no se cumple","doc177":"Ingresos comerciales acumulados","doc178":"Ingresos comerciales de hoy","doc179":"Beneficios comunitarios acumulados","doc180":"Ingresos comunitarios de hoy","doc181":"para ser lanzado","doc182":"Lanzado","doc183":"Registro de ingresos","doc184":"SÍ","doc185":"No","doc186":"Valoración total de activos","doc187":"Monto de la política de ejecución","doc188":"Nombre de la política","doc189":"Fecha de creación de políticas","doc190":"Plataforma de ejecución estratégica","doc191":"par de comercio","doc192":"Tipo de política","doc193":"Ciclo de ejecución estratégica","doc194":"Nombramiento","doc195":"cita fallida","doc196":"Puede hacer una cita nuevamente más tarde","doc197":"Ejecución completada","doc198":"Ejecución de política","doc199":"Después de que termina la ejecución","doc200":"Cantidad de ingresos","doc201":"Hora","doc202":"Tiempo de distribución de ingresos","doc203":"Monto de ejecución Tiempo de liberación","doc204":"Creador de mercado OTC (Reversión a la media)","doc205":"ENDACIÓN DE EJECUCIÓN","doc206":"No cerrado","doc207":"despejado","doc208":"Estado de ejecución","doc209":"Número de pedido","doc210":"El equilibrio es insuficiente, por favor recarga primero","doc211":"Ingreso del equipo de primera generación","doc212":"Ingreso del equipo de segunda generación","doc213":"Beneficio del equipo de tercera generación","doc214":"Ejecutable","doc215":"Estrategia de IA","doc216":"Factura de estrategia","doc217":"Nuevo hoy","doc218":"2 generación + 3 generaciones aumentan efectivamente el número de usuarios ","doc219":"No alcanzó este nivel","doc220":"Número de usuarios efectivos para 1 generación","doc221":"Registro","doc222":"Mi comunidad","doc223":"Lista comunitaria","doc224":"Agente de primer nivel","doc225":"Agente de segundo nivel","doc226":"Agente de tercer nivel","doc227":"Activos totales","doc228":"Nivel","doc229":"Mercado","doc230":"Agente de nivel 1","doc231":"Agente de segundo nivel","doc232":"Agente de nivel 3","doc233":"Filtro","doc234":"Cantidad de nombramiento","doc235":"Ganancias estimadas","doc236":"Cantidad estratégica","doc237":"Cantidad de nombramiento","doc238":"La condición no se cumple","doc239":"{n1} generación {n2} usuario","doc240":"minutos","doc241":"Academia Lumex","doc242":"Orden del algoritmo","doc243":"Número de comunidad","doc244":"Beneficios comunitarios","doc245":"Miembros de la comunidad","doc246":"Renta comunitaria","doc247":"Actualizaciones de la comunidad de hoy","doc248":"Ingresos comunitarios de hoy","doc249":"Recompensa por recomendación","doc250":"Información de la comunidad","doc251":"Número de usuarios efectivos de M1","doc252":"M2+M3 aumenta eficazmente el número de usuarios","doc253":"Historial de transacciones de algoritmo","doc254":"Reglas de ejecución","doc255":"Videotutorial","doc256":"Número de personas en la comunidad","doc257":"Beneficios comunitarios","doc258":"Actualizaciones de la comunidad de hoy","doc259":"Ingresos comunitarios de hoy","doc260":"Miembros de la comunidad","doc261":"Monto de la transacción","doc262":"Transacciones programadas diarias","doc263":"Tarifa de gas por retiro","doc264":"Retiro único","doc265":"Recompensas de la comunidad","doc266":"Volume du jeton","doc267":"Bloqueo de activos","doc268":"Por desbloquear","doc269":"Servicio de atención al cliente en línea","doc270":"Se pueden reservar fondos","doc271":"En ejecución","doc272":"Saldo de la billetera","doc273":"El nivel no cumple las condiciones","doc274":"Hora de la cita","doc275":"Transacción en curso","doc276":"Precio del pedido","doc277":"Rendimiento esperado","doc278":"Ciclo de ejecución","doc279":"Tiempo restante","doc280":"Alcance del nombramiento","doc281":"Liquidación de beneficios","doc283":"No hay oro de experiencia disponible para intercambiar","doc284":"No se requiere cita previa","doc285":"Logrado","doc286":"No alcanzado","doc287":"Próxima reserva","doc288":"{n}{n2} miembros de {n1}","doc289":"Importe de la transacción","doc290":"Transacción entre tres partes","doc291":"Precio de la cita","doc292":"Precio de la transacción","doc293":"Creador de mercado OTC","doc294":"Importe de la transacción","doc295":"Monto de la transacción","doc296":"Precio más alto","doc297":"Monto de la transacción","doc298":"Tamaño del equipo","doc299":"Recompensa total","doc300":"Ingresos de hoy","doc301":"Ingresos de este mes","doc303":"Datos del equipo","doc304":"Su pedido","doc305":"Cita en curso"},"new1":{"doc0":"Número de pedido","doc1":"Tiempo de inicio","doc2":"Estado de ejecución","doc3":"Plataforma de estrategia","doc4":"Moneda de la transacción","doc5":"Tipo de política","doc6":"Ciclo de ejecución","doc7":"Rango de importe disponible para reserva","doc8":"Importe real de la reserva","doc9":"Ingresos por pedidos","doc10":"Tiempo de liberación de fondos"}}')
    },
    4360: function(e, o, i) {
        "use strict";
        var a = i("2b0e"),
            n = i("2f62"),
            t = {
                isLogin: !1,
                token: "",
                mobile: "",
                email: "",
                userData: {},
                isApp: !1,
                appToken: "",
                h5Url: {},
                is_assets: !0,
                lang: "",
                areaId: "",
                productId: null,
                levelInfo: {},
                useCouponInfo: null,
                keepAlive: !0,
                luckyInfo: null
            },
            d = i("751a"),
            c = i("4b90"),
            r = i("d399"),
            s = (i("a18c"), {
                Get_H5Url({
                    commit: e
                }) {
                    Object(d["c"])("" + c["a"].member.url, {}).then(o => {
                        0 == o.code && e("SET_H5URL", o.data)
                    })
                },
                Get_userData({
                    commit: e
                }) {
                    return new Promise((o, i) => {
                        Object(d["c"])("" + c["a"].member.personal, {}).then(a => {
                            0 == a.code ? (e("SET_USERDATA", a.data), o(a)) : (Object(r["a"])(a.message), i(a))
                        })
                    })
                },
                resetVuex({
                    commit: e
                }) {
                    e("SET_USERDATA", {}), e("SET_TOKEN", ""), e("SET_LOGIN", !1), localStorage.removeItem("gender"), localStorage.removeItem("identityNumber"), localStorage.removeItem("type"), localStorage.removeItem("countryName"), localStorage.removeItem("name"), localStorage.removeItem("hz"), localStorage.removeItem("sfz2"), localStorage.removeItem("sfz1")
                },
                UpadteHtml5Tags({
                    commit: e
                }) {
                    Object(d["c"])(c["a"].common.h5page_list, {}).then(o => {
                        0 == o.code ? e("SET_HTML5TAGS", o.data) : Object(r["a"])(o.message)
                    })
                },
                SetWelfareEyes_2({
                    commit: e
                }, o) {
                    e("SET_WELFAREEYES_2", o)
                }
            }),
            l = {
                SET_LUCKY_INFO(e, o) {
                    e.luckyInfo = o, localStorage.luckyInfo = JSON.stringify(o)
                },
                SET_USERDATA(e, o) {
                    e.userData = o
                },
                SET_TOKEN(e, o) {
                    e.token = o
                },
                SET_LOGIN(e, o) {
                    e.isLogin = o
                },
                SET_EMAIL(e, o) {
                    e.email = o
                },
                SET_MOBILE(e, o) {
                    e.mobile = o
                },
                SET_ISAPPINFO(e, o) {
                    e.isApp = o, e.appToken = o
                },
                SET_ISASSETS(e, o) {
                    e.is_assets = o
                },
                SET_LANG(e, o) {
                    e.lang = o
                },
                SET_H5URL(e, o) {
                    e.h5Url = o
                },
                SET_AREAID(e, o) {
                    e.areaId = o
                },
                SET_PRODUCTID(e, o) {
                    e.productId = o
                },
                SET_LEVELINFO(e, o) {
                    e.levelInfo = o
                },
                SET_USECOUPONINFO(e, o) {
                    e.useCouponInfo = o
                },
                SET_KEEPALIVE(e, o) {
                    e.keepAlive = o
                }
            },
            u = {},
            m = i("0e44");
        a["a"].use(n["a"]);
        const p = new n["a"].Store({
            plugins: [Object(m["a"])({})],
            state: { ...t
            },
            mutations: { ...l
            },
            actions: { ...s
            },
            getters: { ...u
            }
        });
        o["a"] = p
    },
    "4b90": function(e, o, i) {
        "use strict";
        o["a"] = {
            home: {
                platform_list: "/market/platform/list",
                mark_list: "/market/list",
                markDataAll: "/market/data/all",
                system: "/index/system/data",
                income: "/index/income/info",
                article: "/system/article/detail",
                ads: "/publicity/list",
                interest: "/user/check/interest",
                interest_open: "/user/open/interest",
                transferInfo: "/wallet/asset/transfer/view",
                transferBtn: "/wallet/asset/transfer",
                addressUp: "/wallet/withdraw/address/update",
                klineData: "/market/kline/data",
                klineInfo: "/market/info",
                financial_overview: "/financial/overview",
                marquee: "/index/marquee/record",
                config_group: "/url/config/group",
                ads_list: "/ads/list"
            },
            quantify: {
                view: "/quantify/view",
                execute: "/quantify/execute",
                console: "/quantify/console",
                record: "/quantify/record",
                coinlist: "/quantify/coin/list",
                check: "/user/check/interest",
                reserve: "/quantify/reserve",
                proList: "/quantify/products",
                detail: "/quantify/detail",
                dataNew: "/income/my/data/new",
                trend: "/quantify/trend",
                levelCheck: "/quantify/level/check"
            },
            team: {
                index: "/income/team/data",
                teamData: "/income/my/data",
                data: "/income/analyse",
                generationsData: "/income/generations/data",
                generationsDataNew: "/income/generations/dataNew",
                list: "/team/list",
                info: "/team/info",
                level: "/income/analyse/level",
                incomeNew: "/income/my/data/new"
            },
            task: {
                list: "/task/list",
                overview: "/task/overview",
                receive: "/task/receive",
                record: "/task/receive/record",
                invite_overview: "/invite/overview",
                activityList: "/activity/list"
            },
            wallet: {
                create: "/wallet/recharge/create",
                detail: "/wallet/asset/detail",
                info: "/wallet/asset/list",
                assets: "/wallet/asset/overview",
                view: "/wallet/asset",
                priceData: "/wallet/asset/price/data",
                record: "/wallet/record",
                type: "/wallet/record/type/list",
                coinList: "/coin/list",
                view2: "/wallet/record/detail",
                cash: "/cash/config",
                cash_sell: "/cash/sell",
                cash_buy: "/cash/buy",
                cash_list: "/cash/currency/list",
                exchCoinList: "/wallet/exchange/coin/list",
                exchConfig: "/wallet/exchange/config",
                exchBtn: "/wallet/exchange",
                cqgInfo: "/piggy/bank/info",
                cqgRecevie: "/piggy/bank/receive",
                cqgRecord: "/piggy/bank/record",
                googleMake: "/user/google/make",
                googleSet: "/user/google/set",
                googleRandom: "/user/google/random",
                googleInfo: "/user/google/bind/info",
                addressList: "/wallet/withdraw/address/list",
                addressCreate: "/wallet/withdraw/address/create",
                check: "/wallet/withdraw/check"
            },
            user: {
                reg: "/user/register",
                regNew: "/user/register",
                regCheck: "/user/register/check",
                accountBind: "/user/info/account/bind",
                newReg: "/user/register",
                registerNew: "/user/registerNew",
                cancel: "/user/cancel",
                login: "/user/loginNew",
                code_send: "/verify/code/send",
                code_check: "/verify/code/check",
                country_list: "/country/list",
                lang: "/language/list",
                forget: "/user/password/login/forget",
                upPw: "/user/password/login/update",
                jymm: "/user/password/transaction/update",
                bind_address: "/user/bind/address",
                wallet_config: "/wallet/withdraw/config",
                wallet_btn: "/wallet/withdraw",
                wallet_withdraw_cancel: "/wallet/withdraw/cancel",
                wallet_record: "/wallet/record",
                wallet_type: "/wallet/record/type/list",
                wallet_address: "/wallet/recharge/address",
                upimg: "/upload/img",
                identity: "/user/identity/submit",
                inentInfo: "/user/identity/info",
                version: "/version/list",
                urlGroup: "/url/config/urlGroup",
                piggyPersonal: "/user/piggy/personal",
                piggyReceive: "/user/piggy/receive",
                piggyReceiveList: "/user/piggy/receiveList",
                bindEmail: "/user/info/account/bind",
                upBindEmail: "/user/info/account/update",
                getEmail: "/user/password/login/forget/account/check",
                officialVerify: "/verify/official/contact"
            },
            article: {
                category: "/article/category/list",
                list: "/article/list",
                search: "/article/search",
                detail: "/article/detail",
                follow: "/article/follow",
                like: "/article/like",
                commentCreate: "/article/comment/create",
                commentList: "/article/comment/list",
                replyList: "/article/reply/list",
                replyCreate: "/article/reply/create",
                read: "/article/read",
                systemDetail: "/system/article/detail",
                systemCategory: "/system/article/category/list",
                systemList: "/system/article/list"
            },
            member: {
                personal: "/user/info/personal",
                profile: "/user/info/profile",
                help_sub: "/system/article/category/list",
                help_list: "/system/article/list",
                message_type: "/message/type/list",
                message_list: "/message/list",
                level_info: "/level/info",
                url: "/url/config/list",
                infoUp: "/user/info/profile/update",
                feedback: "/feedback/create"
            },
            lucky: {
                coupon: "/coupon/record",
                create: "/luck/create",
                reward: "/luck/reward",
                receive: "/luck/receive",
                record: "/luck/record",
                switch: "/luck/switch",
                luckConfigList: "/luck/config/list"
            },
            ai: {
                info: "/financial/view",
                proList: "/financial/product/list",
                proView: "/financial/product/item/detail",
                buy: "/financial/buy",
                orderRecord: "/financial/order/record",
                orderView: "/financial/order/detail",
                incomeRecord: "/financial/order/income/record"
            },
            financial: {
                proList: "/financial/product/list",
                proDetail: "/financial/product/detail",
                buy: "/financial/buy",
                buyView: "/financial/buy/view",
                orderRecord: "/financial/order/record",
                redeem: "/financial/redeem",
                orderRecordView: "/financial/order/detail",
                marquee: "/financial/marquee/record",
                info: "/financial/view",
                open: "/financial/isOpen"
            },
            level: {
                overview: "/level/overview",
                list: "/level/list"
            },
            coupon: {
                record: "/coupon/record"
            },
            config: {
                url: "/url/config/url"
            },
            grid: {
                quantify_execute: "quantify/execute",
                wallet_list: "wallet/quota/record/list",
                quantify_record: "quantify/record",
                quantify_view: "quantify/pending/overview",
                quantify_view_funds: "quantify/view"
            },
            integral: {
                levelInfo: "/integral/level/info",
                levelConfig: "/integral/levelConfig/List",
                taskInfo: "/integral/week/task/info",
                record: "/integral/record/list"
            },
            income: {
                data: "/income/analyse",
                orderLease: "/income/orderLease"
            },
            chat: {
                chatQuickQs: "/common/chat/quick/qs",
                chatModal: "/common/chat/model",
                chatAnswerGroup: "/common/chat/answer/group",
                chatAnswerGroupDel: "/common/chat/answer/group/del",
                chatAnswerGroupItems: "/common/chat/answer/group/items"
            }
        }
    },
    "51dc": function(e) {
        e.exports = JSON.parse('{"title":{"doc0":"Casa","doc1":"Strategia TTMD","doc2":"Strategia","doc3":"Massimizza i record","doc4":"Squadra","doc5":"Lista Squadre","doc6":"I miei messaggi","doc7":"Centro Missionario","doc8":"Asset","doc9":"Dettagli Asset","doc10":"Deposito","doc11":"Prelievo","doc12":"Mio","doc13":"Livello di aggiornamento","doc14":"Commenti","doc15":"Centro Assistenza","doc16":"Dettagli di aiuto","doc17":"Imposta password fondo","doc18":"Cambia Lingua","doc19":"Modifica password di accesso","doc20":"Reimposta password di accesso","doc21":"Centro di autenticazione del nome reale","doc22":"Informazioni personali","doc23":"Autenticazione","doc24":"Carica foto identificativa","doc25":"Accedi","doc26":"Registrazione","doc27":"Invita amici","doc28":"Seleziona il canale di deposito","doc29":"Seleziona il canale di prelievo","doc30":"Ritiro di valuta fiat","doc31":"Deposito valuta Fiat"},"load":{"refreshed":"Aggiornato con successo","loosing":"Rilascia per aggiornare...","loading":"Caricamento...","no_more":"Non più","no_open":"Non ancora aperto"},"page":{"doc1":"Asset Totali","doc2":"Guadagna subito in modo quantitativo con TTMD","doc3":"Deposito","doc4":"Prelievo","doc5":"Vantaggio quantitativo TTMD","doc6":"Mercati delle principali borse","doc7":"Valuta/Nome","doc8":"Ultimo prezzo","doc9":"Alti e bassi 24 ore su 24","doc10":"Giorni di funzionamento sicuro","doc11":"Giorni","doc12":"Reddito cumulativo della produzione","doc13":"Meccanismo di sicurezza assoluta","doc14":"Tutti i fondi dell\'utente sono nel proprio exchange Binance. La piattaforma quantitativa TTMD addebita solo commissioni per l\'utilizzo della tecnologia software. Binance addebita una commissione per ogni transazione. Internet funzionante.","doc15":"Meccanismi di sicurezza rigorosi","doc16":"Gestisce l\'arbitraggio dei fondi tramite l\'API di scambio. Questo server server software non memorizza la chiave API dell\'utente, ma la memorizza solo nel computer dell\'utente. Non è necessario preoccuparsi dell\'intrusione di hacker e l\'API non richiede permesso di ritiro!","doc17":"Parametri di policy flessibili","doc18":"Le strategie di trading quasi programmabili mettono i trader più a loro agio con le loro mani, come Tiger Wings! L\'hosting con un clic può aiutare i nuovi utenti a risparmiare molto tempo per imparare il software","doc19":"Potente analisi intelligente","doc20":"Dopo che il server delle quote distribuite quantitative Pangu ha raccolto il mercato degli scambi, utilizza la potente intelligenza artificiale del server per analizzare, elaborare e filtrare i dati di mercato e fornire il miglior piano decisionale!","doc21":"Sviluppo sostenibile","doc22":"Il trading di valuta digitale sarà un mercato a lungo termine, Pangu continuerà a migliorare e a fornirti servizi a maggior valore aggiunto!","doc23":"Valuta di prelievo","doc24":"Banca","doc25":"Inserisci il nome della banca che effettua il prelievo","doc26":"Importo Prelievo","doc27":"Inserisci l\'importo del prelievo","doc28":"Saldo disponibile","doc29":"Inserisci le informazioni sul prelievo","doc30":"Nome","doc31":"Per favore inserisci il tuo nome","doc32":"Numero della carta bancaria","doc33":"inserisci il numero della carta bancaria","doc34":"Commissione di gestione","doc35":"Arrivo effettivo","doc36":"Conferma","doc37":"Promemoria caldo","doc38":"Ci vorranno circa 3-5 minuti per arrivare dopo che il prelievo di valuta fiat ha avuto successo, per favore sii paziente.","doc39":"Inserisci la password del fondo","doc40":"Conferma ritiro","doc41":"Protezione della sicurezza","doc42":"Per favore imposta prima la password del fondo","doc43":"Seleziona Rete","doc44":"Seleziona Valuta","doc45":"Indirizzo Prelievo","doc46":"Importo Prelievo","doc47":"Inserisci l\'importo del prelievo","doc48":"Tutti","doc49":"Saldo patrimoniale","doc50":"Annulla","doc51":"Inserisci l\'indirizzo di ritiro","doc52":"Copia riuscita","doc53":"Ancora nessuna registrazione","doc54":"Valuta","doc55":"Tipo","doc56":"Data","doc57":"Data di inizio","doc58":"Data di fine","doc59":"Seleziona tipo","doc60":"Reddito","doc61":"Spese","doc62":"Deposito contanti","doc63":"Prelievo di contanti","doc64":"Valuta del deposito","doc65":"Numero di depositi","doc66":"Inserisci l\'importo della ricarica","doc67":"Importo di ricarica","doc68":"Ci vorranno circa 3-5 minuti per arrivare dopo che la ricarica fiat è andata a buon fine. Per favore attendi pazientemente. Le spese di gestione verranno detratte dall\'importo ricevuto.","doc69":"Conferma deposito","doc70":"Copia","doc71":"Nota","doc722222":"Deposito minimo: {i1} USDT, se è inferiore all\'importo minimo, non verrà accreditato sul conto. Si prega di non depositare asset non USDT all\'indirizzo sopra indicato, altrimenti gli asset non potranno essere recuperati . Il tuo indirizzo di deposito non cambierà frequentemente e potrai depositare ripetutamente. Sostituzione, ti informeremo tramite annuncio o e-mail.","doc72":"Devi ottenere l\'ultimo indirizzo di deposito per ogni ricarica. L\'indirizzo di deposito scadrà dopo dieci minuti. TTMD non sarà responsabile per la perdita di fondi causata dal trasferimento dell\'indirizzo scaduto sul conto!","doc73":"Prezzo attuale","doc74":"Cronologia transazioni","doc75":"Deposito USDT","doc76":"Pagamento in valuta fiat vietnamita","doc77":"Prelievo USDT","doc78":"Ritiro in valuta vietnamita","doc79":"Per favore inserisci il tuo numero di telefono","doc80":"Per favore inserisci il tuo indirizzo email","doc81":"Codice di verifica SMS","doc82":"Codice di verifica e-mail","doc83":"Ottieni il codice di verifica","doc84":"Il codice di invito non può essere vuoto","doc85":"Inserisci una password (6-20 caratteri alfanumerici)","doc86":"Per favore inserisci di nuovo la tua password","doc87":"Ho letto e accetto","doc88":"Contratto di registrazione utente","doc89":"Hai un account? Immediatamente","doc90":"Scarica l\'APP","doc91":"Scegli un prefisso telefonico internazionale","doc92":"Cerca prefisso","doc93":"Cambio lingua","doc94":"Registrazione del cellulare","doc95":"Registrazione e-mail","doc96":"Operazioni frequenti. Riprova più tardi","doc97":"Per favore inserisci il numero di telefono corretto","doc98":"Per favore inserisci l\'indirizzo email corretto","doc99":"Inviato con successo","doc100":"La password deve contenere da 6 a 20 caratteri alfanumerici","doc101":"Le due password non sono coerenti","doc102":"Per favore controlla l\'accordo di registrazione dell\'utente","doc103":"Registrazione avvenuta con successo","doc104":"Per favore inserisci la tua password","doc105":"Password dimenticata","doc106":"Nessun account? Immediatamente","doc107":"Accesso mobile","doc108":"Accesso e-mail","doc109":"Accesso riuscito","doc110":"Telefono cellulare","doc111":"Cassetta postale","doc112":"Password Accesso","doc113":"Conferma password","doc114":"Per favore inserisci nuovamente la tua password","doc115":"Codice di verifica","doc116":"Entrate Totale","doc117":"Deposito Totale","doc118":"Prelievo Totale","doc119":"Panoramica Dati Team","doc120":"Nuovi Utenti","doc121":"Entrate Oggi","doc122":"Aggiungi ricarica","doc123":"Aggiungi ritiro","doc124":"Analisi dei ricavi","doc125":"Dimensione Squadra","doc126":"Visualizza Elenco Squadra","doc127":"Entrate Cumulative","doc128":"Depositi Cumulativi","doc129":"Prelievi Cumulativi","doc130":"Dati Tre Generazioni","doc131":"Dati Prima Generazione","doc132":"Dati Seconda Generazione","doc133":"Dati Terza Generazione","doc134":"Numero Utenti","doc135":"Importo Prelievo","doc136":"Oggi","doc137":"Ultimi 7 giorni","doc138":"Ultimi 30 giorni","doc139":"Ultimi 60 giorni","doc140":"Guadagni per attività","doc141":"Reddito quantitativo","doc142":"Ricompensa quantitativa raccomandata","doc143":"Utente non valido","doc144":"Completato","doc145":"In corso","doc146":"Ricevi premi","doc147":"Attività quotidiane","doc148":"Compito di crescita","doc149":"Seleziona l\'ora","doc150":"Importo Investimento","doc151":"Profitto","doc152":"Acquista piattaforma","doc153":"Vendi piattaforma","doc154":"Prezzo Acquisto","doc155":"Prezzo richiesto","doc156":"Valuta","doc157":"Tempo completo","doc158":"Record quantitativi","doc159":"Guadagni di oggi","doc160":"Entrate negli ultimi 7 giorni","doc161":"Numero di partenze rimanenti oggi","doc162":"Entrate","doc163":"Quantizzazione TTMD ad avvio singolo","doc164":"Esegui il processo del pannello TTMD","doc165":"Sesso","doc166":"Maschio","doc167":"Femmina","doc168":"Nazionalità","doc169":"Inserisci la nazionalità","doc170":"Tipo di documento","doc171":"Numero del documento","doc172":"Inserisci il numero del documento","doc173":"Caricamento foto del documento","doc174":"Seleziona documento","doc175":"Carta d\'identità","doc176":"Passaporto","doc177":"Per favore carica una foto frontale della tua carta d\'identità","doc178":"Per favore carica il tuo passaporto","doc179":"Per favore carica una foto del retro della tua carta d\'identità","doc180":"Soprannome","doc181":"Numero di cellulare","doc182":"Numero della casella di posta","doc183":"Autenticazione del nome reale","doc184":"De-autenticazione","doc185":"Non riuscito","doc186":"Revisione in attesa","doc187":"Autenticato","doc188":"Salva","doc189":"Aggiornamento riuscito","doc190":"Livello attuale","doc191":"Livello di iscrizione successivo","doc192":"Importo valido","doc193":"Membro valido","doc194":"Elenco delle classi","doc195":"Voto","doc196":"Il robot TTMD può essere utilizzato tutti i giorni","doc197":"Per favore inserisci il codice di verifica","doc198":"Vecchia password","doc199":"Per favore inserisci la tua vecchia password di transazione","doc200":"Password finanziamento","doc201":"Per favore inserisci la password della transazione","doc202":"Inserisci nuovamente la password per confermare","doc203":"1. La password del tuo fondo viene utilizzata per il trading, i prelievi e le impostazioni di sicurezza del conto. Si consiglia di non coincidere con la password di accesso. Questo sito non è responsabile del furto del conto generato da questo;","doc204":"2. Dopo aver modificato la password del fondo, non puoi prelevare entro 48 ore.","doc205":"Modifica la password della transazione","doc206":"Reimposta la password della transazione","doc207":"Imposta la password della transazione","doc208":"Formato password errato","doc209":"Per favore inserisci la vecchia password","doc210":"Per favore inserisci la tua vecchia password di accesso","doc211":"Nuova password","doc212":"Nuova password di accesso, 6-20 numeri e lettere","doc213":"Impostazione riuscita","doc214":"Link di invito","doc215":"Copia il link dell\'invito","doc216":"Codice Invito","doc217":"Copia il codice di invito","doc218":"Non certificato","doc219":"La revisione del tuo documento non è riuscita","doc220":"Il tuo documento è in fase di revisione","doc221":"Garanzia di sicurezza delle informazioni sulla privacy personale","doc222":"Migliora le informazioni sull\'identità e sperimenta più servizi","doc223":"Perfezionare","doc224":"Attualmente sto aprendo il canale con gli sconti più alti","doc225":"Utente ordinario","doc226":"Canale","doc227":"Aggiorna","doc228":"Panoramica delle risorse","doc229":"Esci","doc230":"Servizio Clienti","doc231":"Password Transazione","doc232":"Pulisci Cache","doc233":"Uscita riuscita","doc234":"Cancella con successo","doc235":"Inserisci i tuoi commenti","doc236":"Invia","doc237":"Problema di funzionamento del software","doc238":"Reclami e suggerimenti","doc239":"Segnalazione di bug","doc240":"Altro","doc241":"Inserisci il tuo feedback","doc242":"Foto/Carica la tua carta d\'identità di seconda generazione","doc243":"Foto/Carica il tuo passaporto","doc244":"Fai clic per scattare/caricare i volti con ritratto","doc245":"Fai clic per scattare/caricare i Guowei Noodles","doc246":"Conferma caricamento","doc247":"Portafoglio TTMD","doc248":"Tempi","doc249":"Utenti","doc250":"Se non inviti amici da molto tempo, i tuoi beni non potranno essere ritirati. Puoi riprendere il ritiro invitando gli amici","doc251":"Rapporto di divisione","doc252":"Reddito odierno in valuta detenuta","doc254":"Introduzione alla piattaforma","doc255":"Introduzione alla quantificazione intelligente delle risorse umane","doc256":"Ci sono molti scambi di valuta digitale nel mondo e ogni scambio ha la funzione di scambiare valuta fiat con valuta digitale. Il prezzo dello scambio di valuta fiat con valuta digitale è diverso per ogni scambio e le persone possono acquistarlo su acquistare a basso prezzo, vendere a prezzo elevato e guadagnare differenze di cambio","doc257":"Il processo di acquisto manuale a basso prezzo e di vendita a prezzo alto su più borse richiede molto tempo. Quando i prezzi cambiano, le operazioni e il trading richiederanno troppo tempo e perderanno i migliori tassi di cambio, con conseguente riduzione dei profitti di trading.","doc258":"Pertanto, il sistema di quantificazione automatica di TTMD sembra evitare problemi manuali e migliorare il margine di profitto del trading quantitativo.<br>Il sistema di quantificazione automatica di TTMD può cercare automaticamente BTC, ETH, USDT e altre valute digitali sui principali scambi Vendita più bassa prezzo e acquista velocemente in pochi secondi.<br/><br/>Quando il prezzo in valuta raggiunge il sistema, verrà venduto velocemente in pochi secondi quando il prezzo di vendita viene impostato automaticamente.<br/ ><br/>In pochi secondi minuti, il processo di acquisto a basso prezzo e di vendita a prezzo elevato può essere completato automaticamente<br/><br/>Le transazioni quantitative possono essere completate rapidamente.24 ore di raccolta dati ininterrotta, nessuna necessità di osservare manualmente il mercato, Puoi guadagnare entrate in modo efficiente e stabile, questo è il sistema di quantificazione automatica TTMD.","doc259":"Come guadagnare soldi","doc260":"Fai clic sul pulsante per avviare la transazione quantitativa automatica, e la transazione quantitativa automatica sarà completata entro 3-5 minuti.<br/>Il 50% del reddito derivante dal completamento della transazione quantitativa automatica è il profitto guadagnato dal piattaforma, e il restante 50% viene guadagnato dalla piattaforma. Il profitto è stato preso. Il profitto appartiene all\'utente.","doc261":"Esempio: acquista BTC a 5000USDT su Binance, vendi BTC a 5050USDT su Ouyi, <br/>guadagna 50USDT di profitto.<br/>La piattaforma otterrà 25 USDT di profitto, mantieni il successivo profitto di 25USDT appartiene all\'utente .","doc262":"Introduzione ai guadagni di livello VIP","doc2633":"Importo operazione di livello 1-500<br/>Puoi effettuare 3 transazioni quantitative automatiche al giorno e il tasso di rendimento per ciascuna transazione quantitativa è del 2,0%-3,0%. 500USDT possono guadagnare 10USDT-15USDT.","doc263":"L\'importo dell\'operazione di livello è 500-4999<br/>Puoi effettuare 3 transazioni quantitative automatiche al giorno e il tasso di rendimento per ciascuna transazione quantitativa è del 2,0%-3,0%. 1000USDT possono guadagnare 20USDT- 30USDT.","doc264":"Importo operazione di livello 3000-9999<br/>Puoi effettuare 4 transazioni quantitative automatiche al giorno e il tasso di rendimento per ciascuna transazione quantitativa è del 2,5%-3,5%. 1000USDT possono guadagnare 25USDT- 35USDT.","doc2644":"Importo operazione di livello 5000-99999<br/>Puoi effettuare 5 transazioni quantitative automatiche al giorno e il tasso di rendimento per ciascuna transazione quantitativa è del 3,0%-4,0%. 1000USDT possono guadagnare 30USDT-40USDT.","doc2645":"Importo operazione di livello 10000-999999<br/>Puoi effettuare 6 transazioni quantitative automatiche al giorno e il tasso di rendimento per ciascuna transazione quantitativa è del 3,5%-4,5%. 1000USDT possono guadagnare 35USDT- 45USDT.","doc2646":"Importo delle operazioni di livello 20000-999999<br/>Puoi effettuare 7 transazioni quantitative automatiche al giorno e il tasso di rendimento per ciascuna transazione quantitativa è del 3,5%-4,5%. 1000USDT possono guadagnare 35USDT- 45USDT.","doc265":"Commissione di prelievo per ogni livello VIP","doc2655":"Quando sei VIP0, ti verrà addebitato il 3% per le procedure di prelievo<br/>Quando sei VIP1, ti verrà addebitato il 3% per le procedure di prelievo<br/>Quando sei VIP2, ti verrà addebitato 2% per le procedure di prelievo<br/>Quando sei VIP3, ti verrà addebitato il 2% per le procedure di prelievo<br/>1,5% quando sei VIP4 per la procedura di prelievo<br/>1% quando sei VIP5 per la procedura di prelievo","doc2656":"Presenta/invita la delegazione di livello 3","doc266":"Al fine di promuovere rapidamente l\'APP di trading quantitativo automatico di TTMD, aumentare la popolarità della piattaforma e consentire a più investitori di unirsi a TTMD. TTMD ha deciso di adottare un modello di distribuzione a tre livelli per la promozione e accumulare rapidamente utenti della piattaforma. ","doc267":"La distribuzione a tre livelli è il modo più veloce per sviluppare gli utenti in tutti i modelli di marketing. Per migliorare la velocità di sviluppo e i vantaggi dell\'agenzia, TTMD ha stabilito il seguente meccanismo di distribuzione a tre livelli.","doc268":"1. Usa il tuo codice di invito per invitare l\'amico A intorno a te a unirsi a TTMD, e potrai ottenere il 18% del reddito giornaliero di trading quantitativo automatico dell\'amico A","doc269":"2. Il tuo amico A usa il suo codice di invito per invitare il suo amico B a unirsi a TTMD, e tu puoi ottenere il 6% del reddito giornaliero di trading quantitativo automatico dell\'amico B","doc270":"3. L\'amico B usa il suo codice di invito per invitare il suo amico C a unirsi a TTMD, e tu puoi ottenere il 3% del reddito giornaliero di trading quantitativo automatico dell\'amico C.","doc271":"Se formi la tua squadra, il tuo amico A invita l\'amico B a unirsi e l\'amico B invita l\'amico C a unirsi, allora formerai un team di distribuzione terziario completo.<br/><br/>Quando Quando il tuo amico A, l\'amico B e l\'amico C completano la transazione quantitativa automatica di oggi, puoi ottenere il 18+6+3=27% del loro reddito come commissione di squadra nel giorno della commissione dell\'agenzia.","doc2657":"Come calcolare la commissione del tuo team","doc2658":"Tutti i tuoi subordinati sono 10A+100B+1000C=1110 persone<br/>Supponendo che tutti i tuoi subordinati guadagnino $ 100 al giorno nei loro conti,<br/>Il tuo reddito da commissione del team di agenzia di livello A = 100*18% *10 persone=$180,<br/>Le commissioni del tuo team dell\'agenzia di livello B=100*6%*100 persone=$600,<br/>Le tue commissioni del team dell\'agenzia di livello C= 100*3%*1000 persone= $ 3000,<br/>Il tuo reddito giornaliero di squadra è A100+B180+C3000=$3780,<br/>Il tuo reddito mensile di squadra è 3780*30 giorni=$113400,< br/>Il tuo reddito annuale di squadra è 3780*365 giorni = $1379700 ,<br/><br/>Si tratta di un reddito molto importante","doc272":"Guadagna interessi","doc273":"Guadagnare interessi","doc274":"Deposito per guadagnare interessi attivi","doc275":"Contattaci","doc276":"Non valido","doc277":"Rifiutato","doc278":"In corso di revisione","doc279":"Cognome","doc280":"Nome","doc281":"Per favore inserisci il tuo cognome","doc282":"Per favore inserisci il tuo nome","doc283":"Il ritiro arriverà entro 72 ore","doc284":"VIP1: importo dell\'operazione di livello 35-500<br>Puoi effettuare 3 transazioni quantitative automatiche al giorno e il tasso di rendimento giornaliero per il trading quantitativo è dell\'1,7%-1,9%.<br>500USDT possono guadagnare 3 transazioni automatiche transazioni quantitative al giorno Prendi 8USDT-10USDT.<br><br>VIP2: importo dell\'operazione di livello 500-3000<br>È possibile effettuare 4 transazioni quantitative automatiche al giorno e il tasso di rendimento giornaliero per le transazioni quantitative è del 2,1%-2,3 %.<br>3000USDT al giorno 4 volte di quantificazione automatica possono guadagnare 60USDT-70USDT.<br><br>Commissione di prelievo per ogni livello VIP<br>Per promuovere rapidamente l\'APP di pagamento quantitativo automatico TTMD, aumentare la popolarità di la piattaforma e consentire a più investitori< br>Unisciti a TTMD. TTMD ha deciso di utilizzare un modello di distribuzione a tre livelli per la promozione e accumulare rapidamente utenti della piattaforma.<br><br>La distribuzione a tre livelli è il modo più veloce per sviluppare utenti in tutti i modelli di marketing, al fine di migliorare la velocità di sviluppo e l\'agenzia<br>Welfare, TTMD ha stabilito il seguente sistema di distribuzione a tre livelli.<br><br>1. Utilizza il tuo codice di invito per invitare l\'amico A intorno a te a unirsi a TTMD, puoi ottenere il 21% del <br>reddito di trading quantificato automaticamente giornaliero dell\'amico A.<br>2. Il tuo amico A utilizza il suo codice di invito per invitare il suo amico B a unirsi a TTMD, puoi attivare l\'amico B<br>7% del reddito di trading quantitativo automatico giornaliero.<br><br>3. L\'amico B utilizza il suo codice di invito per invitare il suo amico C a unirsi a TTMD, puoi attivare il quotidiano dell\'amico C<br>3% del reddito di scambio quantificato automaticamente.<br><br>Se formi la tua squadra, il tuo amico A invita l\'amico B si unisce, l\'amico B invita l\'amico C a unirsi,<br>allora formerai un team di distribuzione completo a tre livelli.<br><br>Quando il tuo amico A, l\'amico B e l\'amico C completano la transazione quantitativa automatica di oggi , puoi ottenere una commissione di squadra del 21+7+3=31% sul loro reddito nel giorno della commissione dell\'agente<br>.","doc285":"Giorni di esperienza","doc286":"Percentuale di profitto","doc287":"Percentuale di commissione","doc288":"Per favore inserisci il numero di cellulare corretto per registrarti. Se accedi con un cellulare non verificabile, non sarai in grado di cambiare la tua password","doc289":"Per favore inserisci l\'e-mail corretta per registrarti. Se utilizzi un\'e-mail non verificabile per registrarti ed accedere, non sarai in grado di cambiare la tua password","doc290":"Numero ordine","doc291":"Importo sul conto","doc292":"Stato","doc293":"Indirizzo di deposito","doc294":"Data di creazione","doc295":"ritorno","doc296":"Deposito minimo: 1 USDT in meno rispetto all\'importo minimo non verrà accreditato sul conto<br>Per ogni deposito, è necessario ottenere l\'ultimo indirizzo di deposito, l\'indirizzo di deposito scadrà dopo dieci minuti e il trasferimento dei conti con indirizzo scaduto e degli asset non USDT causati dalla perdita di fondi non verranno trovati. Torna indietro, TTMD non è responsabile!","doc306":"Associa il numero di cellulare","doc307":"Lega email","doc308":"Nessun numero di cellulare è vincolato","doc309":"Per favore, prima associa la tua casella di posta","doc310":"Prefisso","doc311":"Per favore inserisci il codice mobile internazionale","doc312":"Per proteggere ulteriormente la sicurezza dell\'account, è necessario completare l\'autenticazione vincolante della casella di posta prima di accedere","doc313":"ID utente","doc314":"Ruota della fortuna","doc315":"Ci sono","doc316":"Opportunità di estrazione fortunata","doc317":"Il mio premio","doc318":"Regole","doc319":"Estrazioni invitate a membri validi","doc320":"Fortuna\\ndisegna","doc321":"Ricevilo adesso","doc322":"ora","doc323":"premio","doc324":"Tempi della lotteria insufficienti, per favore vai a invitare gli amici","doc325":"tasso di cambio","doc326":"Ruota","doc327":"Salvadanaio","doc328":"Flash","doc329":"Portafoglio elettronico","doc330":"Portafoglio flessibile","doc331":"Salvadanaio","doc332":"Reddito quantitativo","doc333":"Ricevi il serbatoio di deposito","doc334":"Livello serbatoio salvadanaio","doc335":"Quando il livello dell\'utente è uguale al livello del serbatoio di risparmio, puoi ricevere il saldo del serbatoio di deposito. Dopo un periodo di tempo, il serbatoio del denaro verrà aggiornato automaticamente.","doc336":"L\'equilibrio tra denaro e denaro","doc337":"Ricevi","doc338":"Giorni di aggiornamento","doc339":"Record del salvadanaio","doc340":"Trasferisci valuta","doc341":"saldo","doc342":"Ruota il numero","doc343":"Inserisci il numero del trasferimento","doc344":"OK per trasferire","doc345":"Il numero di trasferimenti non può essere maggiore di","doc346":"Il numero di trasferimenti non può essere inferiore a 1","doc347":"Cong","doc348":"a","doc349":"Scambia quantità","doc350":"Per favore inserisci la quantità da scambiare","doc351":"OK Flash","doc352":"Il numero di lampeggi non può essere maggiore di","doc353":"Per favore inserisci il numero di lampeggi","doc354":"Il numero di lampeggi non può essere inferiore a 1","doc355":"Membro push diretto","doc356":"Teammitglied","doc357":"Il numero di volte quantificate al giorno","doc358":"1. Al fine di prevenire attività illegali di riciclaggio di denaro, gli utenti del primo deposito devono essere quantificati quotidianamente per effettuare il prelievo. BR> 3. Al fine di garantire rigorosamente la sicurezza dei fondi del conto, il conto si attiverà automaticamente il meccanismo di protezione del sistema di finanziamento dopo aver modificato la casella di posta o l\'indirizzo di prelievo USDT TRC20 e la password di prelievo. > Ogni commissione di prelievo di livello VIP <br> Commissione di prelievo VIP1 5,0%<br> Commissione di prelievo VIP2 4,0%<br> Commissione di prelievo VIP3 3,0%< br> Commissione di prelievo VIP4 2,0% <br> Commissione di prelievo VIP5 1,0%<br> Commissione di prelievo VIP6 0,0%","doc359":"Avanti","doc360":"I vantaggi di ieri","doc361":"Commissione generale della squadra","doc362":"Commissione di squadra di ieri","doc363":"Commissione di squadra di oggi","doc364":"Ulteriori informazioni sull\'evento","doc365":"Informazioni sulle notizie","doc366":"Impegno contrattuale","doc367":"Motivo del rifiuto"},"page2":{"doc1":"Fondo flessibile","doc2":"Per sbloccare i fondi","doc3":"Benvenuti in ITP","doc4":"Numero di cellulare","doc5":"Password","doc6":"Diverse volte oggi","doc7":"Reddito totale","doc8":"Reddito totale della valuta detenuta","doc9":"Per rilasciare la registrazione","doc10":"Livello VIP","doc11":"Condizione di aggiornamento","doc12":"Patrimonio netto","doc13":"Importo minimo di quantificazione","doc14":"Quantitativo massimo","doc15":"Tempi quantificati giornalieri","doc16":"resa chimica giornaliera","doc17":"Meccanismo di sicurezza assoluta","doc18":"Risultati nel trading quantitativo","doc19":"Parametri di policy rigorosi","doc20":"Idee per l\'arbitraggio automatico","doc21":"Sviluppo sostenibile","doc22":"Il sistema quantitativo intelligente TTMD calcola le posizioni aperte in modo molto accurato. Negozia automaticamente sul tuo conto e funziona 24 ore su 24, 365 giorni all\'anno. Abbiamo impostato il trading quantitativo con intelligenza artificiale nel 2016. Fa ogni sforzo per aumentare costantemente i suoi profitti mensili","doc23":"TTMD fornisce una grande quantità di dati sulle transazioni per l\'apprendimento intelligente dell\'intelligenza artificiale. Dopo milioni di prove e manovre. Processo decisionale disciplinato e capacità di implementazione già in atto. Diventa operativo con un notevole record di assenza di guasti o perdite","doc24":"Sulla base dei risultati delle decisioni prese dall\'intelligenza artificiale quantitativa.Il sistema Quantitative Trading Intelligence seleziona automaticamente la crescita rispetto a questa fase.Valutazione.Finanziamento.Valutazione completa delle opportunità di trading favorevoli.Quindi elaborare strategie d\'azione precise.Si può evitare la maggior parte scervellatevi La decisione di","doc25":"Il sistema di quantificazione analizza le opportunità in modo completo. Completamente automatizzato con un solo clic. Blocca rapidamente lo spread di profitto tra i prodotti token. Acquistando a prezzi bassi. Vendi a prezzi alti per sviluppare una strategia e realizzare un profitto","doc26":"Il trading di valuta digitale sarà un mercato di lunga data. Il sistema di intelligenza quantitativa TTMD continuerà a ottimizzare le prestazioni. L\'ultimo algoritmo digitale. Fornirti un maggiore miglioramento della ricchezza","doc27":"Socio","doc28":"Condividi i media","doc29":"Fronte del documento","doc30":"Lato opposto del documento d\'identità","doc31":"documenti tenuti in mano","doc32":"Invia recensione","doc33":"Nome irreale","doc34":"Certificazione del nome reale fallita","doc35":"Nome reale da rivedere","doc36":"Certificazione con nome reale","doc37":"Per favore autenticati prima","doc38":"1.Per prevenire attività illegali di riciclaggio di denaro.I depositanti per la prima volta devono completare 3 giorni di quantificazione prima di poter prelevare<br>2.Completa tutti i conteggi quantificati per la giornata e ritira almeno 39 USDT<br>3 .L\'importo di ciascun prelievo è soggetto alle regole effettive della piattaforma. Per ogni prelievo viene addebitata una commissione come commissione di manutenzione per la modifica della password di accesso alla piattaforma. Password di trading. Verrà attivato il meccanismo di protezione della sicurezza dei fondi<br>Dopo Dopo 48 ore, il sistema rilascerà automaticamente lo stato di protezione dei fondi. Avvia il normale processo di prelievo<br><br>Regole sulle commissioni di prelievo<br>Commissione di prelievo VIP1 5,0%<br>Commissione di prelievo VIP2 4,0%<br>Commissione di prelievo VIP3 3,0 %<br>Commissione di prelievo VIP4 2.0%<br>Commissione di prelievo VIP5 1.0%<br>Commissione di prelievo VIP6 0.0%","doc39":"Indirizzo Prelievo","doc40":"Inserisci la password della transazione","doc41":"Inserisci l\'indirizzo di ritiro","doc42":"Compito per principianti","doc43":"Missione avanzata","doc44":"Per favore imposta prima la password di trading","doc45":"Membri effettivi cumulativi","doc46":"Bilanciamento effettivo","doc47":"Deposito efficace","doc48":"Tipo di feedback","doc49":"Il tuo feedback","doc51":"Totale {k1} persone","doc52":"Livello amici","doc53":"Totale dell\'importo della commissione la commissione","doc54":"Importo totale della commissione a due livelli","doc55":"Importo totale della commissione su tre livelli","doc56":"Efficace","doc57":"Dedotto","doc58":"Un livello","doc59":"Due livelli","doc60":"Tre livelli","doc61":"Seleziona il livello","doc62":"Elenco delle risorse","doc63":"Tecnologia digitale TTMD","doc64":"Costruzione ecologica globale della blockchain","doc65":"Hosting AI","doc66":"Dettagli attendibili","doc67":"Dettagli reddito cardiaco","doc68":"Hosting riuscito","doc69":"Ogni resa di quantificazione","doc70":"Fondi Flessibili","doc71":"Beni congelati","doc72":"Puoi ottenere più ricompense per completare l\'attività","doc73":"Importo da trattare","doc74":"Hai {i1} un robot che quantifica il funzionamento dell\'hosting","doc75":"Rendimento giornaliero (variabile)","doc76":"Intervallo di input","doc77":"Periodo di tesoreria","doc78":"Ospite","doc79":"Fine","doc80":"Reddito giornaliero","doc81":"(mobile)","doc82":"Ora di inizio","doc83":"L\'ora di fine dell\'hosting","doc84":"Dettagli sul reddito","doc85":"Quantificazione dell\'hosting AI","doc86":"In corso","doc87":"Host della cronologia","doc88":"Anche hosting","doc89":"Host Havage","doc90":"C\'è anche {i1} Tian quando scade la custodia ","doc91":"Cronologia dell\'host","doc92":"Fine","doc93":"I robot stanno lavorando sodo","doc94":"Una reciprocità","doc95":"Il mio hosting","doc96":"Rendimento giornaliero","doc97":"Organizza l\'opportunità di entrare e uscire attraverso i dati AI e allo stesso tempo aggiungere logica come il filtraggio della media mobile per ridurre gli impatti emotivi artificiali. Migliorando i rendimenti e garantendo la sicurezza del principale, il tasso di accuratezza di l\'entrata e l\'uscita sono notevolmente migliorate.","doc98":"Ciclo di trattamento","doc99":"Tipo di scambio","doc100":"Selezione intelligente","doc101":"Valuta di scambio","doc102":"Combinazione di token intelligenti","doc103":"La combinazione di token intelligenti seleziona più coppie di transazioni in base ai big data dell\'intelligenza artificiale, rischi inferiori e entrate più elevate","doc104":"Inserisci importo","doc105":"Crema pasticcera per confermare","doc106":"OK per ospitare","doc107":"Quota di input","doc108":"Il limite di input non può essere inferiore a","doc109":"Il limite di input non può essere maggiore di","doc110":"Selezione intelligente","doc111":"Inizia il viaggio del tuo team nella comunità","doc112":"Libro bianco","doc113":"Finanziario","doc114":"Area finanziaria","doc115":"Importo finanziario","doc116":"Totale proventi da gestione patrimoniale","doc117":"Blocca l\'ordine","doc118":"Lotteria a scatola cieca","doc119":"Registrazione blind box","doc120":"Il mio","doc121":"Cronologia Ordini","doc122":"Guadagni di ieri","doc123":"Importo Investimento","doc124":"Commissione di gestione","doc125":"Imposta sul reddito","doc126":"Il termine","doc127":"Tasso di rendimento giornaliero","doc128":"Entrate Totale","doc129":"Inserisci","doc130":"Investire nella gestione finanziaria","doc131":"Dettagli finanziari","doc132":"Tariffa giornaliera","doc133":"Periodo di investimento","doc134":"Costi di gestione","doc135":"Imposta sul reddito da investimenti","doc136":"Giorno","doc137":"Calcolo degli interessi","doc138":"Reddito giornaliero, rimborso dovuto","doc139":"Reddito giornaliero","doc140":"Beneficio totale stimato","doc141":"Livello","doc142":"Importo Investimento","doc143":"Saldo","doc144":"Buoni","doc145":"Nessun voucher disponibile","doc146":"Importo deducibile","doc147":"Seleziona un buono","doc148":"L\'importo dell\'acquisto non può superare il saldo","doc149":"L\'importo dell\'investimento deve essere compreso","doc150":"Prodotti di investimento","doc151":"Ora di inizio","doc152":"Ora di fine","doc153":"Detrazione del buono","doc154":"Pagamento effettivo","doc155":"Nessuno","doc156":"Le informazioni sono corrette e l\'investimento è confermato","doc157":"Conferma investimento","doc158":"Determinazione dell\'investimento finanziario","doc159":"Successo finanziario","doc160":"Lavorare sodo","doc161":"Mettine un altro","doc162":"Gestito con successo","doc163":"Ordine finanziario","doc164":"Non più","doc165":"Tutti","doc166":"Tieni premuto","doc167":"Maturità","doc168":"Scaduto","doc169":"Tasso di rendimento","doc170":"Commissione di gestione","doc171":"Reddito stimato","doc172":"Coupon disponibili","doc173":"Coupon non disponibili","doc174":"Buono contante per la gestione patrimoniale","doc175":"Utilizzare immediatamente","doc176":"Motivo del buono non disponibile: ","doc177":"Il mio buono sconto","doc178":"Apri la scatola cieca per ottenere premi in denaro","doc179":"Mercato valutario","doc180":"Ricompense Comunitarie","doc181":"Membri Squadra","doc182":"","doc183":"Aggiornamento","doc184":"I miei buoni sconto","doc185":"Congratulazioni","doc186":"Quando conduci \\"gestione finanziaria e investimenti\\", puoi utilizzare i buoni in contanti per detrarre","doc187":"Mettine un altro","doc188":"Proventi finanziari","doc189":"Premi per i referral","doc190":"Vantaggi per la squadra","doc191":"Analisi del livello di appartenenza (tre generazioni)","doc192":"Numero di persone","doc193":"Membro push diretto","doc194":"Acquista prodotto","doc195":"Importo finanziario minimo","doc196":"Importo massimo di gestione finanziaria","doc197":"Prodotti","doc198":"Prima Gen","doc199":"Seconda Gen","doc200":"Terza Gen","doc201":"Importo investito","doc202":"Periodo di attività","doc203":"Cambia la password di accesso e la password della transazione attiverà il meccanismo di protezione del fondo. Dopo 48 ore, lo stato di protezione del fondo verrà automaticamente rilasciato e inizierà il normale processo di prelievo","doc204":"1. Al fine di prevenire attività illegali di riciclaggio di denaro, gli utenti non possono prelevare contanti senza acquistare prodotti di gestione patrimoniale","doc205":"2. Verrà addebitata una commissione fissa per ogni prelievo","doc206":"u La commissione di gestione viene utilizzata come fondi operativi della piattaforma","doc207":"3. L\'importo di ciascun prelievo è soggetto all\'effettivo importo fisso della piattaforma e l\'imposta sul reddito corrispondente verrà detratta per ciascun livello. Più alto è il livello, minore sarà l\'aliquota dell\'imposta sul reddito","doc208":"Norme sull\'imposta sul reddito","doc209":"Aliquota imposta sul reddito della classe","doc210":"La tua nuova password deve essere diversa dalla vecchia password","doc211":"Verifica","doc212":"Elimina Account","doc213":"Conferma per eliminare l\'account TTMD","doc214":"Leggi le seguenti regole prima di eliminare il tuo account TTMD:","doc215":"Dopo aver eliminato l\'account, tutti i record delle transazioni, i beni dell\'utente, il reddito generato dagli investimenti, le informazioni sulla verifica dell\'identità e i vincoli del conto bancario nel conto verranno cancellati e azzerati.","doc216":"Per evitare la perdita dei tuoi beni, assicurati che non ci sia saldo nel conto:","doc217":"Fai clic sul pulsante OK qui sotto, il che significa che hai letto e accettato","doc218":"Conferma l\'eliminazione","doc219":"Regole","doc220":"Cronologia Ordini","doc221":"Rimanente","doc222":"Invita gli amici a ricevere","doc223":"Scatola cieca","doc224":"Estrai","doc225":"Non consentire ai minori di utilizzare o sperimentare sotto la supervisione e la guida di tutori","doc226":"Scaduto","doc227":"Usato","doc228":"Reddito giornaliero, rimborso dovuto","doc229":"Restituzione del capitale e degli interessi alla scadenza","doc230":"Ricorda la password dell\'account","doc231":"Aliquota fiscale","doc232":"Quarta generazione","doc233":"Quinta generazione","doc234":"Sesta generazione","doc235":"Settima generazione","doc236":"Ottava generazione","doc237":"Nona generazione","doc238":"Decima generazione"},"page3":{"doc1":"Google Authenticator","doc2":"Verifica di sicurezza","doc3":"Codice di verifica di Google","doc4":"Inserisci il codice di verifica di Google","doc5":"Conferma","doc6":"Cambia verifica Google","doc7":"Non autenticato","doc8":"Autenticato","doc9":"Cambia verifica Google","doc10":"Per favore, collega prima Google Authenticator","doc11":"Primo passo","doc12":"Scarica Google Authenticator dall\'app store mobile","doc13":"Passaggio 2","doc14":"Scansiona il codice QR per associarlo tramite Google Authenticator","doc15":"Copia chiave","doc16":"Passaggio 3","doc17":"Inserisci il codice di verifica di Google","doc18":"Conferma associazione","doc19":"Previsioni importanti","doc20":"Visualizza altro","doc21":"Sbloccato","doc22":"{K}sbloccato","doc23":"Tasso di restituzione negli ultimi 7 giorni","doc24":"periodo di custodia","doc25":"Numero di fiduciari","doc26":"Reddito di custodia totale","doc27":"{k} giorni","doc28":"Guadagni","doc29":"Volume 24 ore","doc30":"Cambio 24 ore","doc31":"Fatturato 24 ore su 24","doc32":"Compagno","doc33":"Rimborso per invito","doc34":"Ottieni profitti rapidamente","doc35":"Livello membro","doc36":"Avvia transazioni","doc37":"griglia","doc38":"quantificazione","doc39":"Ordine quantitativo","doc40":"Reddito strategico","doc41":"Sbloccabile","doc42":"Importo Investimento","doc43":"Ambito dell\'investimento","doc44":"Fondi di investimento","doc45":"Importo Investimento"},"page4":{"doc1":"corrente","doc2":"Alto","doc3":"basso","doc4":"Prezzo di apertura","doc5":"Volume delle transazioni","doc6":"1 minuto","doc7":"5 minuti","doc8":"15 minuti","doc9":"30 minuti","doc10":"1 ora","doc11":"1 giorno","doc12":"1 settimana","doc13":"Verifica di sicurezza (scegli una delle due seguenti)","doc14":"Invia","doc15":"Inserisci una nuova password","doc16":"Inserisci nuovamente la nuova password","doc17":"Quantità Arrivata","doc18":"Commissione Prelievo","doc19":"Privilegio di tempo limitato","doc20":"Commissione per la gestione della valuta in un giorno libero","doc21":"Importo Minimo Prelievo","doc22":"Importo Massimo Prelievo","doc23":"Hai già prelievi gratuiti","doc24":"Quantità","doc25":"Indirizzo","doc26":"Data","doc27":"Dettagli","doc28":"Importo disponibile","doc29":"Quantità congelata","doc30":"Dettagli Asset","doc31":"Video tutorial","doc32":"Esperienza","doc33":"Guadagna online","doc34":"Strategia Intelligente","doc35":"Fascia di Prezzo","doc36":"Visualizza le regole di trading","doc37":"Deposito ETH dalla rete principale Ethereum alla rete zkSync Era attraverso il cross-chain bridge e potrai sperimentare l\'interazione DApp come tariffa di rete","doc38":"Impostazioni intelligenti","doc39":"Tipo Griglia","doc40":"Seleziona","doc41":"tipo","doc42":"Importo Investimento","doc43":"Informazioni utilizzabili","doc44":"Importo che può essere investito","doc45":"Dettagli da Rilasciare","doc46":"Cronologia Ordini","doc47":"Creare Ordine","doc48":"La strategia intelligente sta iniziando","doc49":"Seleziona una strategia","doc50":"Strategia Intelligente","doc51":"Deposita ETH dalla rete principale di Ethereum alla rete zkSync Era attraverso il cross-chain bridge","doc52":"Aperto","doc53":"Importo accumulato da rilasciare","doc54":"L\'accumulo è stato rilasciato","doc55":"Importo accumulato da rilasciare","doc56":"La strategia di reddito di oggi","doc57":"Record da rilasciare","doc58":"tipo","doc59":"tutti","doc60":"tutti","doc61":"Seleziona","doc62":"Ancora nessun dato!","doc63":"Importo Investimento","doc64":"Importo Profitto","doc65":"Piattaforma di acquisto","doc66":"Piattaforma di vendita","doc67":"Prezzo Acquisto","doc68":"Prezzo di mercato","doc69":"Valuta di uscita","doc70":"Tempo Completamento","doc71":"Scegli","doc72":"Cronologia Ordini","doc73":"Deposito da rilasciare","doc74":"Fondi di ritorno strategico da sbloccare","doc75":"Seleziona","doc76":"Entrate totali","doc77":"Commissione di gestione","doc78":"Requisiti di aggiornamento","doc79":"Raggiunta","doc80":"Fondi effettivi","doc81":"Utenti di prima generazione","doc82":"Utenti di seconda generazione","doc83":"Utenti di terza generazione","doc84":"Patrimonio netto","doc85":"Importo Investimento","doc86":"Tempo di funzionamento","doc87":"minuti","doc88":"Numero di volte al giorno","doc89":"volte","doc90":"Rapporto di profitto","doc91":"Commissione Prelievo","doc92":"Ritiro gratuito","doc93":"Una volta ogni {k} giorni","doc94":"Con prelievi gratuiti","doc95":"Da aprire","doc96":"Strategia","doc97":"Importo Profitto","doc98":"Acquista piattaforma","doc99":"Piattaforma di vendita","doc100":"Prezzo Vendita","doc101":"Valuta","doc102":"Per favore, investi l\'importo","doc103":"Fondi quantificabili","doc104":"Il tuo account attualmente non ha risorse","doc105":"Deposito ora","doc106":"Giorni Prelievo Gratuito","doc108":"Da Rilasciare","doc107":"giorni","doc109":"ore","doc110":"minuti","doc111":"secondo","doc112":"Comunità","doc113":"Ho letto l\'accordo sulla privacy","doc114":"Reimposta la password di accesso","doc115":"Codice di verifica Google","doc116":"Promemoria","doc117":"Per garantire la sicurezza del tuo conto, puoi prelevare denaro solo 48 ore dopo aver reimpostato la password di accesso","doc118":"1. Puoi prelevare denaro dopo aver completato l\'impostazione della password di transazione per la prima volta<br>2. La password di transazione viene utilizzata solo per le transazioni. Si consiglia di non essere coerente con la password di accesso<br>3 . Per garantire la sicurezza dei fondi, la password della transazione può essere modificata 48 ore dopo il prelievo<br>4. La password della transazione può essere solo una combinazione di 6 cifre da 0 a 9 e non è possibile inserire simboli o lettere.","doc119":"Termini d\'Uso","doc120":"Inviti","doc121":"Invito per ottenere guadagni","doc122":"ti avvicina all\'intelligenza artificiale","doc123":"Team della comunità","doc124":"Centro Missionario","doc125":"Fino a $ 10000","doc126":"Classifica","doc127":"Questo livello è stato sbloccato","doc128":"Questo livello è bloccato","doc129":"videotutorial","doc130":"Dettagli ricarica","doc131":"Tassa del minatore"},"page5":{"doc1":"Record dei premi","doc2":"Bonus aggiornamento rete","doc3":"Nota","doc4":"Le squadre comunitarie con 100 o più membri possono richiedere i fondi per la costruzione della squadra comunitaria.","doc5":"Sconto per i membri di prima generazione","doc6":"Sconto per i membri di seconda generazione","doc7":"Sconto per i membri di terza generazione","doc8":"Invita amici","doc9":"Registro degli inviti","doc10":"Copia riuscita","doc11":"Svolgere compiti e ricevere benefici","doc12":"L\'intercettazione sta attualmente raccogliendo la ricompensa totale:","doc13":"Procedi","doc14":"In sospeso","doc15":"Richiedi","doc16":"Congratulazioni per il completamento della ricompensa della missione","doc17":"Visualizza premi","doc18":"Missioni Lungo Termine","doc19":"Missioni Quotidiane","doc20":"utente attivo","doc21":"utente non valido","doc22":"Invita amici e guadagna di più","doc23":"Invita ora","doc24":"Richiedi i tuoi premi non appena il tuo invito ha avuto successo","doc25":"Inviti efficaci e di successo","doc26":"uomo","doc26-1":"Partecipazione","doc27":"Invia invito","doc28":"Deposito registrazione amici","doc29":"Fai clic per richiedere il tuo premio","doc30":"Descrizione delle attività","doc31":"1. Invita un numero x di utenti validi dopo che la ricarica ha raggiunto l\'importo xx;","doc32":"2. Il tuo amico è un utente valido se scarica e accede per la prima volta tramite il tuo invito e ricarica il suo account.","doc33":"3.Invito ad effettuare un primo addebito xx","doc34":"Inizia il tuo viaggio come team della comunità","doc35":"codice invito","doc36":"Condividi con","doc37":"Salva immagine","doc38":"Facebook","doc39":"WhatsApp","doc40":"Telegramma","doc41":"Copia collegamento","doc42":"cancellazioni","doc43":"chiarimento","doc44":"Per favore, attendi con ansia","doc45":"NOVITÀ","doc46":"Altro","doc47":"Visualizza impostazioni","doc48":"Dimensione carattere","doc49":"Piccolo","doc50":"Medio","doc51":"Grande","doc52":"Modalità oscura","doc53":"Conferma","doc54":"Ultimi 7 giorni","doc55":"Ultimi 30 giorni","doc56":"Ultimi 60 giorni","doc57":"Quasi 90 giorni","doc58":"Ancora nessun dato"},"kLine":{"doc1":"Ora","doc2":"Apri","doc3":"Alto","doc4":"Basso","doc5":"Chiudi"},"page6":{"doc1":"Nessun account","doc2":"Registrati ora","doc3":"Ciao","doc4":"Benvenuto","doc5":"Disponi già di un account","doc6":"Accedi ora","doc7":"Asset","doc8":"Tutte le quantità","doc9":"Menu","doc10":"Filtro temporale","doc11":"{n} anni","doc12":"{n} mesi","doc13":"{n} giorno","doc14":"L\'ora di inizio non può essere maggiore dell\'ora di fine","doc15":"Scarica l\'APP","doc16":"Prodotti strategici di livello mondiale TTMD","doc17":"Gratuito e aperto al pubblico","doc18":"Link di invito","doc19":"Codice invito","doc20":"Aiuto","doc21":"Team Comunità","doc22":"Numero effettivo di seconda generazione + terza generazione","doc23":"Registro della ricevuta","doc24":"Importo ricevuto","doc25":"Proventi del salvadanaio","doc26":"Prima Generazione","doc27":"Seconda Generazione","doc28":"Terza Generazione","doc29":"quattro generazioni","doc30":"Quinta generazione","doc31":"Tariffa Commissione","doc32":"Entrate Cumulative","doc33":"Sistema Punti TTMD","doc34":"Partner","doc35":"Punti","doc36":"Ricompensa di promozione","doc37":"Salario settimanale","doc38":"{n} Punti","doc39":"Compito settimanale","doc40":"Quantità in eccesso","doc41":"Aumenta i fondi quantitativi totali","doc42":"Registrazione dei punti","doc43":"Aumenta punti","doc44":"Detrai punti","doc45":"Filtro","doc46":"Sistema di punti TTMD","doc47":"Bonus settimanale","doc48":"Ricerca Intelligente","doc49":"Cerca","doc50":"Questo livello è pieno","doc51":"Aggiungi indirizzo","doc52":"Seleziona indirizzo","doc53":"Tempo di arrivo stimato ≈ {n} minuti","doc54":"Deposito minimo","doc55":"Importo minimo di prelievo","doc56":"Numero totale di utenti della piattaforma","doc57":"Volume totale delle transazioni della piattaforma","doc58":"Profitto medio della piattaforma","doc59":"Utente registrato","doc60":"Volume degli scambi nelle 24 ore","doc61":"Tasso di rendimento mensile","doc62":"Panoramica delle attività","doc63":"Sesta generazione","doc64":"Settima generazione","doc65":"Ottava generazione","doc66":"Nona generazione","doc67":"Decima generazione","doc68":"Certificazione ufficiale","doc69":"Metodo di autenticazione","doc70":"Per favore inserisci Telegram","doc71":"Per favore inserisci whatsapp","doc72":"Certificazione superata","doc73":"Autenticazione fallita","doc74":"Riautenticazione","doc75":"Capito","doc76":"Resta sintonizzato","doc77":"Annulla prelievo","doc78":"Sei sicuro di voler annullare il prelievo?"},"tpage":{"doc1":"Potenzia la tecnologia","doc2":"il mondo è a portata di mano","doc3":"Impostazioni intelligenti","doc4":"Livelli","doc5":"Ottenere rendimenti più elevati","doc6":"Fai clic su Conferma qui sotto","doc7":"Pulsante Elimina","doc8":"Significa che hai letto e accettato","doc999":""},"app":{"text":"Nota: durante il processo di download e installazione, si verificano situazioni anomale come errore di download, errore nell\'analisi del pacchetto di installazione ed errore di installazione, scaricare e installare di nuovo.","downs":"Download","cs":""},"lucky":{"doc1":"Il mio premio","doc2":"Regole della lotteria","doc3":"Valore fortunato","doc4":"Numero di estrazioni","doc5":"Ci sono {n} altre opportunità di lotteria","doc6":"Numero cumulativo di estrazioni","doc7":"Ottieni il numero di estrazioni","doc8":"Per ripagare gli utenti per il loro fermo supporto e amore per CoinPlex, abbiamo lanciato la lotteria G2 del Gran Premio 2023. Allo stesso tempo, per migliorare l\'esperienza della lotteria degli utenti, abbiamo aggiunto un sistema di punti. Maggiore è il numero, più alti sono i punti premio della lotteria. Più volte, più alti sono i punti premio, maggiore è la possibilità di vincere premi generosi e più premi ti aspettano per vincere ","doc9":"Unboxing","doc10":"Congratulazioni, hai vinto il premio","doc11":"Numero di estrazioni insufficiente, invita gli amici","doc12":"Il mio premio","doc13":"Ancora lotteria","doc14":"Numero di estrazioni rimanenti","doc15":"Premio","doc16":"ora","doc17":"Stato di emissione","doc18":"Rilasciato","doc19":"Gestione contatti","doc20":"Non ricevuto","doc21":"Tipo di lotteria","doc22":"Estrai premi {n} volte","doc23":"Ottenuto {n} volte","doc24":"Ruota della fortuna","doc25":"Lotteria annunciata","doc26":"Descrizione della regola","doc27":"Apri lo scrigno del tesoro","doc28":"Registrazione blind box","doc29":"Quando esegui \\"vantaggi per il team\\", puoi utilizzare il pacchetto di accelerazione per ottenere ulteriori vantaggi","doc30":"Registrazione dei tempi della lotteria","doc31":"Scatola cieca a sorpresa","doc32":"I premi ti aspettano","doc33":"Non riuscito","doc34":"Anteprima del premio","doc35":"Invita amici","doc36":"Ottieni più tempi della lotteria"},"new":{"doc1":"Lega email","doc2":"Se non ricevi l\'email, controlla la tua email di spam","doc3":"Vecchia e-mail","doc4":"Nuova email","doc5":"Cambia email","doc6":"Inserisci il tuo indirizzo email","doc7":"Inserisci il codice di verifica","doc8":"Verifica e-mail","doc9":"suggerimento","doc10":"L\'account non è vincolato a un indirizzo email e la password non può essere reimpostata tramite l\'indirizzo email. Contatta il servizio clienti per cambiare la password di accesso.","doc11":"Ancora nessun contatto","doc12":"Contatta il servizio clienti","doc13":"Tasso di crescita della scorsa settimana","doc14":"Crescita settimanale attuale","doc15":"Prompt di sistema","doc16":"Contatta il responsabile del servizio clienti","doc17":"Abbinamento dell\'ordine fallito, riprova tra {n} giorni. Per ulteriori dettagli, contatta il responsabile del servizio clienti.","doc18":"Corrispondenza degli ordini, solo ordini strategici, tempo di completamento stimato {n} minuti","doc19":"Inserisci","doc20":"Invia","doc21":"Pensando...","doc22":"timeout collegamento wss","doc23":"La connessione TCP è scaduta, la pagina verrà aggiornata automaticamente dopo 3 secondi","doc24":"Cronologia dei dialoghi dell\'IA","doc25":"Cancella i record della sessione","doc26":"Crea una nuova sessione","doc27":"La sessione corrente non è ancora terminata, non è possibile effettuare nuove aggiunte","doc28":"Dialogo con il robot intelligente AI","doc29":"Modifica","doc30":"Modifica indirizzo","doc31":"Inserisci il codice di verifica e-mail","doc32":"Hai una domanda di recesso","doc33":"Sei sicuro di voler annullare il prelievo?","doc34":"Sì","doc35":"Non","doc36":"Vai alla casella di posta associata","doc37":"Pledge a contratto","doc38":"Financial Products","doc39":"La mia gestione finanziaria","doc40":"ID utente: {n1} in {n2} Pledge {n3} USDT","doc41":"Seleziona l\'area di impegno","doc42":"Seleziona l\'area di impegno","doc43":"Seleziona il periodo di impegno","doc44":"Area di collocazione","doc45":"Fondi di partecipazione","doc46":"disponibile","doc47":"Premio previsto per il blocco totale","doc48":"Tasso di rendimento giornaliero","doc49":"Acquista tempo","doc50":"Avvia calcolo degli interessi","doc51":"First Profit","doc52":"Last Profit","doc53":"Red to Account","doc54":"letto e concordato","doc55":"Conferma da acquistare","doc56":"Panoramica","doc57":"Regole finanziarie","doc58":"investimento seriale","doc59":"Importo di impegno totale","doc60":"Reddito storico totale","doc61":"Utile di oggi","doc62":"Reden","doc63":"Piegatura","doc64":"scaduto","doc65":"Acquista tempo","doc66":"Tempo riscattabile","doc67":"Pledge Days","doc68":"Impegno","doc69":"reddito cumulativo","doc70":"Utile di oggi","doc71":"Conferma di redazione","doc72":"Reden Importo","doc73":"reddito cumulativo","doc74":"tassa di transazione","doc75":"per essere riscattato","doc76":"Epirazione","doc77":"Accesso dell\'account","doc78":"Registrazione dell\'account","doc79":"About","doc80":"Social media","doc81":"Il mio reddito","doc82":"Invita amici","doc83":"Invita amici e guadagna monete insieme","doc84":"Vai a invito","doc85":"Il mio livello","doc86":"Edit","doc87":"Informazioni sull\'account","doc88":"Invita gli amici, <span> ear money insieme </span>","doc89":"Invita gli amici ad essere membri della tua comunità","doc90":"Invita amici per il reddito","doc91":"Metodo di invito","doc92":"Livello VIP","doc93":"record di invito","doc94":"Elenco degli inviti","doc95":"Tempo di registrazione","doc96":"account","doc97":"Distribuzione delle entrate","doc98":"record di rilascio","doc99":"Informazioni sul certificato","doc100":"Front Photo di ID Card","doc101":"Foto inversa della carta d\'identità","doc102":"Foto dell\'ID portatile","doc103":"Dopo aver inviato la certificazione, deve attendere la revisione manuale e il tempo di revisione è completato entro 72 ore.","doc104":"Carica i file di formato JPG, JPEG, PNG inferiori a 10 MB","doc105":"inviato con successo","doc106":"L\'autenticazione del nome reale viene inviata correttamente! Dopo che l\'autenticazione è stata presentata, è necessario attendere la revisione manuale. Il tempo di revisione è completato entro 72 ore. Attendere pazientemente.","doc107":"L\'ho preso","doc108":"Per modificare o eliminare l\'indirizzo, contattare il servizio clienti","doc109":"Reinubmit","doc110":"Sono state inviate le informazioni sulla certificazione e l\'amministratore è in fase di revisione. La revisione dovrebbe essere completata entro <Pan> 72 </span>","doc111":"<span> Motivo del rifiuto: </span> {n1}","doc112":"Hai completato l\'autenticazione reale.","doc113":"In attesa di recensione","doc114":"Dished","doc115":"La certificazione ha successo","doc116":"About Us","doc117":"Seguici","doc118":"Ottieni informazioni di prima mano sul progetto e ottieni supporto al servizio clienti online in tempo reale","doc119":"Ciao!","doc120":"Siamo qui per aiutarti","doc121":"La mia squadra","doc122":"Quantificazione intelligente AI","doc123":"in prima linea nella tecnologia e nella finanza, raggiungendo una moltiplicazione costante delle attività","doc124":"Visualizza i dettagli","doc125":"Hot News","doc126":"Informazioni sul team","doc127":"{n1} generazione","doc128":"Mercato delle criptovalute","doc129":"Market","doc130":"Bill","doc131":"Seleziona la rete principale","doc132":"Questo indirizzo supporta solo {n2} di richarge {n1}","doc133":"L\'indirizzo e -mail è stato vincolato, si prega di contattare il servizio clienti ufficiale per gestire l\'indirizzo e -mail se si è modificato o eliminato l\'indirizzo e -mail","doc134":"Il telefono cellulare è stato vincolato, se si cambia il telefono cellulare o lo elimina, contatta il servizio clienti ufficiale per affrontarlo","doc135":"Apri App Authenticator","doc136":"Scarica l\'app Authenticator (come\\" Google \\n Authenticator \\") nell\'app mobile.","doc137":"Key binding","doc138":"Fare clic sull\'icona\\"+\\"nell\'app di Autenticatore, immettere la chiave sotto o legare la chiave scansionando il codice.","doc139":"Apri l\'app Authenticator, scansiona il codice per vincolare","doc140":"Ha raggiunto questo livello","doc141":"sbloccato","doc142":"I livelli sono soddisfatti","doc143":"Bilancia USDT","doc144":"{N1} Generation Valide Users","doc145":"Non raggiunto","doc146":"Diritti di livello ed equità","doc147":"Algebra delle entrate del team","doc148":"{n1} generazione","doc149":"Strategic Trading","doc150":"Bilancia del conto","doc151":"Bill Details","doc152":"in attesa di risultati dell\'appuntamento","doc153":"Nomina non ottenuta","doc154":"L\'ordine è completo, riprova domani","doc155":"OK","doc156":"Congratulazioni per l\'appuntamento di successo","doc157":"L\'appuntamento ha successo, per favore mantieni il saldo del portafoglio sufficiente","doc158":"Nome della politica di appuntamento","doc159":"Importo di blocco strategico","doc160":"Le strategie dovrebbero guadagnare","doc161":"Esegui la politica di","doc162":"Se la politica di intelligenza artificiale non viene eseguita, il sistema corrisponderà automaticamente alla politica di intelligenza artificiale ed lo eseguirà in 5 minuti","doc163":"Il prelievo di contanti non può essere avviato al momento","doc164":"Binding Mailbox","doc165":"Ricarica accumulata di 35usdt","doc166":"Il prelievo di contanti può essere avviato dopo 3 ore di esecuzione delle politiche","doc167":"Il prossimo ritiro può essere avviato dopo 48 ore dopo il successo del ritiro precedente","doc168":"Un ordine di prelievo rivisto","doc169":"Dobind","doc170":"Vai a ricarica","doc171":"Non più prompt","doc172":"L\'ho preso","doc173":"Experience Gold","doc174":"Numero di nuove squadre oggi","doc175":"Nuova squadra di team oggi","doc176":"Questa condizione di livello non si incontra","doc177":"Reddito commerciale accumulato","doc178":"Reddito commerciale di oggi","doc179":"Benefici comunitari accumulati","doc180":"Reddito comunitario odierno","doc181":"per essere rilasciato","doc182":"rilasciato","doc183":"Registrazione delle entrate","doc184":"Sì","doc185":"No","doc186":"Valutazione totale delle attività","doc187":"Importo della politica di esecuzione","doc188":"Nome politico","doc189":"Data di creazione di politiche","doc190":"Piattaforma di esecuzione strategica","doc191":"Coppia di trading","doc192":"Tipo di politica","doc193":"Ciclo di esecuzione strategica","doc194":"appuntamento","doc195":"Appuntamento non riuscito","doc196":"Può fissare un appuntamento più tardi","doc197":"Execution Completed","doc198":"Esecuzione politica","doc199":"Dopo l\'esecuzione termina","doc200":"importo del reddito","doc201":"Hour","doc202":"Tempo di distribuzione delle entrate","doc203":"Tempo di rilascio dell\'importo dell\'esecuzione","doc204":"OTC Market Maker (reversione media)","doc205":"Execution End","doc206":"Unclosed","doc207":"Cleard","doc208":"stato di esecuzione","doc209":"Numero ordine","doc210":"L\'equilibrio è insufficiente, si prega di ricaricare prima","doc211":"Reddito del team di 1a generazione","doc212":"Reddito del team di 2a generazione","doc213":"Profitto del team di terza generazione","doc214":"Eseguibile","doc215":"Strategia AI","doc216":"Fattura strategica","doc217":"Nuovo oggi","doc218":"2 generazioni + 3 generazioni aumentano efficacemente il numero di utenti ","doc219":"Non ha raggiunto questo livello","doc220":"Numero di utenti efficaci per 1 generazione","doc221":"Record","doc222":"My Community","doc223":"Elenco della comunità","doc224":"Agente di primo livello","doc225":"Agente di secondo livello","doc226":"Agente di terzo livello","doc227":"Attività totali","doc228":"Livello","doc229":"Market","doc230":"Agente di livello 1","doc231":"Agente di secondo livello","doc232":"Agente di livello 3","doc233":"filtro","doc234":"importo della nomina","doc235":"guadagni stimati","doc236":"Importo strategico","doc237":"importo della nomina","doc238":"La condizione non è soddisfatta","doc239":"{n1} generazione {n2} utente","doc240":"minuti","doc241":"Lumex Academy","doc242":"Ordine dell\'algoritmo","doc243":"Numero della comunità","doc244":"Benefici per la comunità","doc245":"Membri della comunità","doc246":"Reddito comunitario","doc247":"Aggiornamenti della comunità di oggi","doc248":"Reddito comunitario odierno","doc249":"Ricompensa per raccomandazione","doc250":"Informazioni sulla comunità","doc251":"Numero di utenti effettivi di M1","doc252":"M2+M3 aumenta efficacemente il numero di utenti","doc253":"Storia delle transazioni dell\'algoritmo","doc254":"Esecuzione delle regole","doc255":"Videotutorial","doc256":"Numero di persone nella comunità","doc257":"Benefici per la comunità","doc258":"Aggiornamenti della comunità di oggi","doc259":"Reddito comunitario odierno","doc260":"Membri della comunità","doc261":"Importo della transazione","doc262":"Transazioni programmate giornaliere","doc263":"Commissione Gas per Prelievo","doc264":"Prelievo singolo","doc265":"Premi della comunità","doc266":"Volume del token","doc267":"Blocco delle risorse","doc268":"Da sbloccare","doc269":"Servizio clienti online","doc270":"I fondi possono essere riservati","doc271":"In esecuzione","doc272":"Saldo del portafoglio","doc273":"Il livello non soddisfa le condizioni","doc274":"Orario dell\'appuntamento","doc275":"Transazione in corso","doc276":"Prezzo ordine","doc277":"Rendimento atteso","doc278":"Ciclo di esecuzione","doc279":"Tempo rimanente","doc280":"Ambito della nomina","doc281":"Regolamento degli utili","doc283":"Nessuna esperienza di oro disponibile per il trading","doc284":"Non è richiesto alcun appuntamento","doc285":"Raggiunto","doc286":"Non raggiunto","doc287":"Ora prossima prenotazione","doc288":"{n}{n2} membri di {n1}","doc289":"Importo della transazione","doc290":"Transazione tre parti","doc291":"Prezzo dell\'appuntamento","doc292":"Prezzo della transazione","doc293":"Operatore di mercato OTC","doc294":"Importo della transazione","doc295":"Importo della transazione","doc296":"Prezzo più alto","doc297":"Importo della transazione","doc298":"Dimensioni del team","doc299":"Ricompensa totale","doc300":"Reddito odierno","doc301":"Reddito di questo mese","doc303":"Dati della squadra","doc304":"Il tuo ordine","doc305":"Appuntamento in corso"},"new1":{"doc0":"Numero ordine","doc1":"Tempo di avvio","doc2":"Stato di esecuzione","doc3":"Piattaforma strategica","doc4":"Valuta di transazione","doc5":"Tipo di politica","doc6":"Ciclo di esecuzione","doc7":"Intervallo di importi disponibili per la prenotazione","doc8":"Importo effettivo della prenotazione","doc9":"Entrate dell\'ordine","doc10":"Tempo di rilascio del fondo"}}')
    },
    "53e9": function(e, o) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfsSURBVHgB7d3ZVttIFIXhwmAIkwnQoe+ycpf3f69mHmzmru120YWQtiU5IBn+by1fEIxtcO0aTpWclZ+/fj8HAKUGAUAlAgIYBAQwCAhgEBDAICCAQUAAg4AABgEBDAICGAQEMAgIYBAQwCAggEFAAIOAAAYBAQwCAhgEBDAICGAQEMAgIIBBQACDgAAGAQEMAgIYBAQwCAhgEBDAICCAQUAAg4AABgEBDAICGAQEMAgIYBAQwCAggEFAAIOAAAYBAQwCAhgEBDAICGAQEMAgIIBBQACDgAAGAQEMAgIYBAQwCAhgEBDAICCAQUAAg4AABgEBDAICGAQEMAgIYBAQwCAggEFAAIOAAAYBAQwCAhgEBDAICGAQEMAgIIBBQACDgAAGAQEMAgIYBAQwCAhgEBDAICCAQUAAg4AAxlroia2trbCxsRHWh8M333t4eAiT29twfX0dFpWeZ3V1dfr189NTGE8m4ebmJgBFvQjI9vZ22Im3Kmtra2En3tbX18Pp6WloazQahc1v317/42AQdnd2wtbmZjiJj/0UAwMknU+x1Ju7cOQ0utS9b5GC8SYcGY0oCgmQ6zwgrtGW2Wh4/0RTqzr3GQxYluF/nbeGlYYNciW0o2na3MdeWZnegITuEjC+TEAeHx9r3e/5+TkAydIFRIvpNuuESSzlznN/f08VC68s5QhSZz1RdB33OR5N49fIcX5xEYBc5wF5iL12U9q3aDqKKADaQykbSTRyHJ+c1J6G4etY+fnrd6eTbk2ZDg8OGleP1JhPz85aNWqFK41C+nmCgSqdB0Q24wbdaHc3tKFjKE+FhbUavI6l0PCxqF4cNRmPx+Hu7u6/jbpsJJkuyONt1UynStcjccddG5BXMSR/4vxWlWF8njTyaQp332C6mP9s3VFMR20SdQyyyEhYHEn1O7RZ31U9v96/dOYt0ftc9zVVPe5H6s1hRf0RLi8vS7+n4yXbLY6Y6OfUaOe9KW3txLVQOlyptc15g4DsjUYvjeciFgfGcxqB7rv//fvL1/8cH7/6NzXupuuog/39V69BRYz8OZoo+x1UEfy+t/eqwbtOK/0+6TWpE9A0uktLUcVaZCSoc8TkM9BopMZYt3ihDqfYu/9pCq0OgKbRTqo6O73usnB0XXbvzQgyj0Kixt50Mb/2zo2gT9RTq/FVjcSJpp91Dn02KYJUbbCmkGi0SiNJeu6808vDoZHs7Py8F3tSS7UPcnt7G+DpRLIbNdUId2sWRNL8v87tac4eU9lIsjk7Pa3LEF7WQvFxVI7vS4FlqQJCVapa3nmo8Q1LLjwT9dQahdUQ71vsQbWVQpJv1qpyqWlhOtHdt3DI0kyx4Kl31k1TLAVARYDiBWDaYE3TGF1BOYy9dlWQpvePDbhsZNDz5FdgTtc/FYv7cbzfZBbetFm7r+LAbK2k64Gkj+GQpQpImxLkV7q+Q+u0YSwFq7KmIOzF3jldgalpV5p6TWaXGCtEzkZWVs5p5MkDor/xekXQJoU143SDN76m4uawRsA+zhCWqvW0CYjehPWKN/ozSuVaUaNN1aq0MNb3Lq+uaj2WRgqF4c0tW0u08S1OqYrFFq2d2pTy39vSjCCLlCU1tehDyfAjqBdWSNJ+xrSsmlX/Thtcd69KUp1eXffRvkyZYnVLo1heQVNg03SrrLrVtd6PIIPZhyrsLNC7aOTJN8U+O22M5o0shUMjx3tNY+pUtzRy6L1M9HqOY7Dq7JN0pfMRRNMf/eHKGu/qnGMmTeix/jo8fHN2Sz3cbZyTj2tcL7JM8vWITDr+aCN1UvmaRwFOr6fOPklXOg3IvI/7qUMNPh/G9Ud2m4ll6xgtRtWYLha4HkTVoNGcRW8yGY9ffa0OYjhnnTRoca38dKoVG57UXXfkqqpYZbTIrtqnUud0MHsdchN//6us8ev903Qur271JSSdBaTubm4VLRZ1gVPZlKHNMK3X8xQf66rlG6JGsFlzCncfp0DTuffs/k2LCPpZ/d7zpoypYiRt1l8bDV6X/nZlAUnnq1KnpQ6tbKc/vda+haSzNcgiZ6TUQE5Mzbzt2a2PPLel3r3NRp0aWJORrsvTsMXDh+kISZUUknwzses1SWfXg/x9dBTaUkWqzgndox8/Gp/dUjWGHXskS7eLpvlq3ePrnN3CopYuIHzqCD4SHxwHGAQEMD51QNqcGWKBjtynDog+DKLJR4lOPtluOhbXWUDafgZuk5/Sc9TdQVbt/apHh+TQD53tpKt3b7Mx1/STGNNHCu3NLuss7ouoKqb76PgDFTIUdRYQ9db6z3CaHEZs28trXXGywH/dhq+r0ylW1WflltGm3wmfn4sP1ulpXjV2HTjUOsEdCVGYmP6gC724opDGj75ioxAwCAhgEBDAICCAQUAAg4AABgEBDAICGAQEMAgIYBAQwCAggEFAAIOAAAYBAQwCAhgEBDAICGAQEMAgIIBBQACDgAAGAQEMAgIYBAQwCAhgEBDAICCAQUAAg4AABgEBDAICGAQEMAgIYBAQwCAggEFAAIOAAAYBAQwCAhgEBDAICGAQEMAgIIBBQACDgAAGAQEMAgIYBAQwCAhgEBDAICCAQUAAg4AABgEBDAICGAQEMAgIYBAQwCAggEFAAIOAAAYBAQwCAhgEBDAICGAQEMAgIIBBQACDgAAGAQEMAgIYBAQwCAhgEBDAICCAQUAAg4AABgEBjH8BUtBq9IaLgfAAAAAASUVORK5CYII="
    },
    "56d7": function(e, o, i) {
        "use strict";
        i.r(o);
        var a = i("2b0e"),
            n = function() {
                var e = this,
                    o = e._self._c;
                return o("div", {
                    class: {
                        applang: "zh_TW" !== e.lang
                    },
                    attrs: {
                        id: "app"
                    }
                }, [o("transition", {
                    attrs: {
                        name: "page"
                    }
                }, [e.keepAlive ? o("keep-alive", {
                    attrs: {
                        exclude: e.exclude
                    }
                }, [o("router-view")], 1) : o("router-view")], 1), o("loading", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showloading,
                        expression: "showloading"
                    }]
                })], 1)
            },
            t = [],
            d = i("751a"),
            c = i("2f62"),
            r = {
                name: "App",
                data() {
                    return {
                        listTop: !1,
                        showloading: !1,
                        channelList: [],
                        lang: this.$store.state.lang,
                        times: 3,
                        timer: null,
                        transitionName: "slide-right",
                        exclude: ["GirdRecord2", "WalletRecord", "MyHelp", "LuckyGo"]
                    }
                },
                created() {
                    void 0 != localStorage.getItem("language") ? this.$i18n.locale = localStorage.getItem("language") : this.$i18n.locale = "en_US"
                },
                methods: { ...Object(c["c"])(["SET_ISAPPINFO"]),
                    ClickTop() {
                        document.documentElement.scrollTop = 0, document.body.scrollTop = document.documentElement.scrollTop = 0
                    },
                    handleScroll() {
                        let e = document.documentElement.scrollTop || document.body.scrollTop;
                        this.listTop = e > 2e3
                    }
                },
                mounted() {
                    let e = this;
                    window.addEventListener("resize", (function() {
                        e.$route.meta.h5 ? e.common.scale(2) : e.common.scale(1)
                    })), window.addEventListener("scroll", this.handleScroll, !0)
                },
                computed: {
                    keepAlive() {
                        return this.$store.state.keepAlive
                    }
                },
                watch: {
                    $route(e, o) {
                        "" != this.$route.meta.title && (this.lang = this.$store.state.lang, document.title = this.$t(this.$route.meta.title) || "TTMD");
                        let i = this;
                        if (window.onresize = function() {
                                i.$route.meta.h5 ? i.common.scale(2) : i.common.scale(1)
                            }, this.$route.meta.h5 ? this.common.scale(2) : this.common.scale(1), this.$route.meta.isUS) {
                            var a = this;
                            d["a"].$on("showloading", (function() {
                                a.showloading = !1
                            })), d["a"].$on("closeLoading", (function() {
                                a.showloading = !1
                            }))
                        } else {
                            a = this;
                            d["a"].$on("showloading", (function() {
                                a.showloading = !0
                            })), d["a"].$on("closeLoading", (function() {
                                a.showloading = !1
                            }))
                        }
                    }
                }
            },
            s = r,
            l = (i("2c2d"), i("2877")),
            u = Object(l["a"])(s, n, t, !1, null, null, null),
            m = u.exports,
            p = i("a18c"),
            g = (i("26dc"), i("157a"), i("4360")),
            h = (i("b749"), i("bc3a")),
            f = i.n(h),
            v = {
                install(e) {
                    e.directive("no-space", {
                        bind(e) {
                            e.addEventListener("input", () => {
                                const o = e.value,
                                    i = o.replace(/\s/g, "");
                                o !== i && (e.value = i, e.dispatchEvent(new Event("input")))
                            })
                        }
                    }), e.directive("password", {
                        bind(e) {
                            e.oninput = () => {
                                e.value = e.value.replace(/[^A-Za-z0-9]+/g, "")
                            }
                        }
                    }), e.directive("NumberOnly", {
                        bind(e) {
                            e.oninput = () => {
                                e.value = e.value.replace(/[^0-9]/g, "")
                            }
                        }
                    })
                }
            },
            b = i("d399"),
            z = i("e41f"),
            A = i("ad06"),
            y = i("543e"),
            w = i("ee83"),
            S = i("8ad4"),
            k = i("1a23"),
            P = i("2bb1"),
            T = i("5596"),
            I = i("8f80"),
            C = i("ab2c"),
            D = i("417e"),
            E = i("3acc"),
            q = i("f0ca"),
            L = i("473d"),
            B = i("5e46"),
            R = i("f253"),
            M = i("c41f"),
            x = i("7bd9"),
            V = i("7a82"),
            N = i("0b33"),
            U = i("e27c"),
            G = i("9f14"),
            F = i("a37c"),
            j = i("20fb"),
            O = i("34e9"),
            X = i("58e6"),
            H = i("2bdd"),
            W = i("7744"),
            _ = i("2241"),
            Q = i("f600"),
            K = i("7d5e"),
            Y = i("3104"),
            Z = i("343b"),
            J = i("8237"),
            $ = i.n(J),
            ee = i("4b90"),
            oe = (i("9ce2"), i("cf45")),
            ie = {
                install(e) {
                    e.directive("preventReClick", {
                        inserted(e, o) {
                            e.addEventListener("click", () => {
                                e.disabled || (e.disabled = !0, setTimeout(() => {
                                    e.disabled = !1
                                }, o.value || 1e3))
                            })
                        }
                    })
                }
            };
        i("05a2");
        const ae = () => i.e("chunk-a7d8f170").then(i.bind(null, "6968")),
            ne = () => i.e("chunk-00b1464f").then(i.bind(null, "076e")),
            te = () => i.e("chunk-5576a184").then(i.bind(null, "c428")),
            de = () => i.e("chunk-67912ed2").then(i.bind(null, "1346")),
            ce = () => i.e("chunk-60c8a75a").then(i.bind(null, "9b23")),
            re = () => i.e("chunk-60a045bc").then(i.bind(null, "ac68")),
            se = () => i.e("chunk-5f936813").then(i.bind(null, "3076")),
            le = () => i.e("chunk-747287e5").then(i.bind(null, "ad05")),
            ue = () => i.e("chunk-5b5516a4").then(i.bind(null, "29b9"));
        var me = {
                install(e) {
                    e.component("myIndex", de), e.component("gltitle", ae), e.component("loading", te), e.component("glFooter", ne), e.component("PageScroll", ce), e.component("ComList", re), e.component("ModalPop", se), e.component("BtnBottom", le), e.component("EmptyData", ue)
                }
            },
            pe = i("4eb5"),
            ge = i.n(pe);
        i("0643"), i("4e3e");

        function he(e) {
            this[e] = this[e].toString().replace(/\s+/g, "")
        }
        const fe = {
                globalInputFIlter: he
            },
            ve = {
                install(e) {
                    Object.keys(fe).forEach(o => {
                        e.prototype[o] = fe[o]
                    })
                }
            };
        var be = ve,
            ze = i("da19"),
            Ae = i("3c69"),
            ye = i("b459"),
            we = i.n(ye),
            Se = i("db49"),
            ke = i.n(Se),
            Pe = i("91f4"),
            Te = i.n(Pe),
            Ie = i("c6e7"),
            Ce = i.n(Ie),
            De = i("fb40"),
            Ee = i.n(De),
            qe = i("788a"),
            Le = i.n(qe),
            Be = i("b71f"),
            Re = i.n(Be),
            Me = i("c551"),
            xe = i.n(Me),
            Ve = i("8b89"),
            Ne = i.n(Ve),
            Ue = i("d328"),
            Ge = i.n(Ue),
            Fe = i("6477"),
            je = i.n(Fe),
            Oe = i("9068"),
            Xe = i.n(Oe),
            He = i("f448"),
            We = i.n(He),
            _e = i("fbe1"),
            Qe = i.n(_e),
            Ke = i("030a"),
            Ye = i.n(Ke),
            Ze = i("2235"),
            Je = i.n(Ze),
            $e = i("c5d3"),
            eo = i.n($e),
            oo = i("842f"),
            io = i.n(oo);

        function ao(e) {
            "no_NO" == e && Ae["a"].use("no_NO", Te.a), "nl_NL" == e && Ae["a"].use("nl_NL", Te.a), "sv_SE" == e && Ae["a"].use("sv_SE", Te.a), "vi_VN" == e && Ae["a"].use("vi_VN", Ye.a), "ja_JP" == e && Ae["a"].use("ja_JP", ke.a), "it_IT" == e && Ae["a"].use("it_IT", We.a), "pt_PT" == e && Ae["a"].use("pt_PT", Qe.a), "tr_TR" == e && Ae["a"].use("tr_TR", Re.a), "es_ES" == e && Ae["a"].use("es_ES", Le.a), "ko_KR" == e && Ae["a"].use("ko_KR", Xe.a), "zh_CN" == e && Ae["a"].use("zh_CN", we.a), "ar_AE" == e && Ae["a"].use("ar_AE", je.a), "de_DE" == e && Ae["a"].use("de_DE", Ee.a), "fr_FR" == e && Ae["a"].use("fr_FR", Ge.a), "ru_RU" == e && Ae["a"].use("ru_RU", Ne.a), "en_US" == e && Ae["a"].use("en_US", Te.a), "zh_TW" == e && Ae["a"].use("zh_TW", Ce.a), "ro_RO" == e && Ae["a"].use("ro_RO", xe.a), "hu_HU" == e && Ae["a"].use("hu_HU", Je.a), "mi_MZ" == e && Ae["a"].use("mi_MZ", mi_MZ), "mn_MN" == e && Ae["a"].use("mn_MN", eo.a), "cs_CZ" == e && Ae["a"].use("cs_CZ", io.a)
        }
        var no = i("8c2c"),
            to = i("a925");
        a["a"].config.productionTip = !1, a["a"].prototype.$axios = f.a, a["a"].use(v), a["a"].use(b["a"]).use(z["a"]).use(A["a"]).use(y["a"]).use(w["a"]).use(S["a"]).use(k["a"]).use(P["a"]).use(T["a"]).use(I["a"]).use(C["a"]).use(D["a"]).use(E["a"]).use(q["a"]).use(L["a"]).use(B["a"]).use(R["a"]).use(M["a"]).use(x["a"]).use(V["a"]).use(N["a"]).use(U["a"]).use(G["a"]).use(F["a"]).use(j["a"]).use(O["a"]).use(X["a"]).use(H["a"]).use(W["a"]).use(_["a"]).use(V["a"]).use(Q["a"]).use(K["a"]).use(Y["a"]).use(Z["a"], {
            preLoad: 1.3,
            error: i("53e9"),
            loading: i("53e9"),
            attempt: 1
        }), a["a"].prototype.Dialog = _["a"], a["a"].prototype.Toast = b["a"], a["a"].prototype.$md5 = $.a, a["a"].prototype.URL = ee["a"], a["a"].prototype.common = oe["a"], a["a"].use(ie), a["a"].prototype.$post = d["c"], a["a"].prototype.$get = d["b"], a["a"].use(me), a["a"].use(ge.a), a["a"].use(be), a["a"].use(ze["a"]), a["a"].prototype.$Local = ao;
        let co = null == localStorage.getItem("language") ? "en_US" : localStorage.getItem("language");
        ao(co), a["a"].component("lottie", no["a"]), a["a"].use(to["a"]);
        const ro = new to["a"]({
            locale: localStorage.getItem("language") || "en_US",
            messages: {
                de_DE: i("8bdd"),
                en_US: i("13d5"),
                es_ES: i("3180"),
                fr_FR: i("b147"),
                it_IT: i("51dc"),
                zh_CN: i("dd7f")
            }
        });
        p["a"].beforeEach((e, o, i) => {
            document.title = e.meta.title || "TTMD", i()
        });
        const so = new a["a"]({
            router: p["a"],
            i18n: ro,
            store: g["a"],
            render: e => e(m)
        }).$mount("#app");
        window.app = so
    },
    6477: function(e, o, i) {
        "use strict";
        o.__esModule = !0, o.default = void 0;
        var a = {
            name: "اسم",
            tel: "هاتف",
            save: "حفظ",
            confirm: "تأكيد",
            cancel: "إلغاء",
            delete: "حذف",
            complete: "مكتمل",
            loading: "جار التحميل...",
            telEmpty: "الرجاء إدخال رقم الهاتف",
            nameEmpty: "الرجاء كتابة اسمك",
            nameInvalid: "الرجاء إدخال الاسم الصحيح",
            ConfirmDelete: "هل أنت متأكد أنك تريد حذف",
            telInvalid: "الرجاء إدخال رقم هاتف محمول صحيح",
            vanCalendar: {
                end: "نهاية",
                start: "يبدأ",
                title: "اختيار التاريخ",
                confirm: "بالتأكيد",
                startEnd: "بداية النهاية",
                weekdays: ["يوم", "واحد", "اثنين", "ثلاثة", "أربعة", "الخمسات", "ستة"],
                monthTitle: function(e, o) {
                    return e + "年" + o + "月"
                },
                rangePrompt: function(e) {
                    return "选择天数不能超过 " + e + " 天"
                }
            },
            vanCascader: {
                select: "اختر من فضلك"
            },
            vanContactCard: {
                addText: "اضف جهات اتصال"
            },
            vanContactList: {
                addText: "جهة اتصال جديدة"
            },
            vanPagination: {
                prev: "الصفحة السابقة",
                next: "الصفحة التالية"
            },
            vanPullRefresh: {
                pulling: "للتحديث اسحب للأسفل...",
                loosing: "حرر للتحديث..."
            },
            vanSubmitBar: {
                label: "المجموع："
            },
            vanCoupon: {
                unlimited: "لا يوجد حد للاستخدام",
                discount: function(e) {
                    return e + "折"
                },
                condition: function(e) {
                    return "满" + e + "元可用"
                }
            },
            vanCouponCell: {
                title: "优惠券",
                tips: "暂无可用",
                count: function(e) {
                    return e + "张可用"
                }
            },
            vanCouponList: {
                empty: "暂无优惠券",
                exchange: "兑换",
                close: "不使用优惠券",
                enable: "可用",
                disabled: "不可用",
                placeholder: "请输入优惠码"
            },
            vanAddressEdit: {
                area: "地区",
                postal: "邮政编码",
                areaEmpty: "请选择地区",
                addressEmpty: "请填写详细地址",
                postalEmpty: "邮政编码格式不正确",
                defaultAddress: "设为默认收货地址",
                telPlaceholder: "收货人手机号",
                namePlaceholder: "收货人姓名",
                areaPlaceholder: "选择省 / 市 / 区"
            },
            vanAddressEditDetail: {
                label: "详细地址",
                placeholder: "街道门牌、楼层房间号等信息"
            },
            vanAddressList: {
                add: "新增地址"
            }
        };
        o.default = a
    },
    "751a": function(e, o, i) {
        "use strict";
        i.d(o, "d", (function() {
            return b
        })), i.d(o, "b", (function() {
            return z
        })), i.d(o, "c", (function() {
            return A
        })), i.d(o, "a", (function() {
            return y
        }));
        i("14d9");
        var a = i("2b0e"),
            n = i("bc3a"),
            t = i.n(n),
            d = i("a18c"),
            c = i("4360"),
            r = i("cf45"),
            s = i("d399"),
            l = (i("a573"), i("3452")),
            u = i.n(l),
            m = i("9816"),
            p = i("143d"),
            g = {
                privateKey: "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMnobdlsbevAtCpS6GktlxN+Taoyb+3qDnDR60tjsw41KalL/NwgCqCB1NLPm6UWJlRn7GAmVh0GOFef7NRs7yBtTgkaK7dbwalbmiaDS63sHgbaDLUpnYA4IhDouQLpzVScKZzM+uHFaLrVdVx1MOH0sOyXMclFcC8V66BnIZblAgMBAAECgYBKY7plSw/MtnkqxtUeO0/YPMa8mEyo6X1cj9sTMa5845Vv7LFDIQMJVAxnh1ofHuQMYSWz3ywHEY2cqy2EroYDUqMK8iXuCxl2Diktd2nI9+5D+bOOlEshjqBEtcv0f+LVgOjNFbpxEx/s/YLGDt8cISyP1q3srSUr21xoeQfHmQJBAPJcfKdAdvbg24K3uYiYRPLu4BOjS9yRxz4SKmUrgHM3YtNN/sn7JMdAEyLPVf1D5BPqaJupXYey8EBz0Lv4S8MCQQDVRSlpeUazuJwQPGZQm4eouMoyfshG23EeLMms33uCh+R4kzRYSbDDMzwc7Vx6Hl2yiuuuCJYzvjXQ/bfnjHA3AkBLUpMrJ83RTHDsX006Npi3J6ZcdBPPqT7S+7JRXwO8yynbohHdlEAJ7NAFsYp3+/GWfvOj7S80TVh9r4Df6nshAkAQmlfE/EoCx8ZuhSU59UG0Yt5q2+/fhEnkHXx91tAYs1eYA225ydLW/3AYmGnwn9iPg70hSU3YLWCnKnlcr1Q1AkEAsLjQenVEG1JRISG0EWTnQBXsDg5ACqE2NCaeDXkLKj7LynBmj8ewoMS38cpQco9eDNnEFUSx3na1KhTGVj3hag==",
                MAX_DECRYPT_BLOCK: 128
            },
            h = {
                localEncrypted(e, o = g.apiSecret) {
                    const i = u.a.AES.encrypt(e, o);
                    return i.toString()
                },
                localDecrypt(e, o = g.apiSecret) {
                    const i = u.a.AES.decrypt(e, o),
                        a = i.toString(u.a.enc.Utf8);
                    return a
                },
                adse(e) {
                    let o = JSON.stringify(e),
                        i = "a4bcabc3fc22a1ee1a1155d696741a44",
                        a = "a4bcabc3fc22a1ee1a1155d696741a44",
                        n = u.a.enc.Utf8.parse(i),
                        t = u.a.enc.Utf8.parse(a),
                        d = u.a.enc.Utf8.parse(o),
                        c = u.a.AES.encrypt(d, n, {
                            iv: t,
                            mode: u.a.mode.CBC,
                            padding: u.a.pad.Pkcs7
                        });
                    return c.toString(u.a.format.Hex)
                },
                decrypt(e, o = g.MAX_DECRYPT_BLOCK) {
                    const i = new m["a"];
                    i.setPublicKey(g.privateKey);
                    let a = i.getKey();
                    try {
                        let i = Object(p["a"])(e);
                        if (i.length > 2 * o) {
                            let e = i.match(/.{1,256}/g);
                            const o = e.map(e => a.decrypt(e)).join("");
                            let n = decodeURIComponent(o);
                            return n.indexOf("base64") < 0 && (n = n.replace(/\+/g, " ")), JSON.parse(n)
                        } {
                            let e = decodeURIComponent(a.decrypt(i));
                            return e.indexOf("base64") < 0 && (e = e.replace(/\+/g, " ")), JSON.parse(e)
                        }
                    } catch (n) {
                        return null
                    }
                },
                sign(e, o) {
                    let i = [];
                    for (let n in e) i.push(n);
                    i.sort();
                    let a = "";
                    for (let n in i) {
                        let o = e[i[n]];
                        "string" != typeof o && (o = JSON.stringify(o)), a += i[n] + "=" + o + "&"
                    }
                    return a = a.replace(/&$/, ""), u.a.HmacSHA256(a, o).toString()
                },
                mdPsd(e) {
                    return u.a.MD5(e).toString()
                },
                hashPsd(e) {
                    return u.a.SHA256(e).toString()
                }
            };
        a["a"].use(s["a"]);
        t.a.defaults.timeout = 3e5, t.a.defaults.baseURL = "https://api.stratoslumex.com/api/", t.a.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        var f = new a["a"],
            v = 0;
        t.a.interceptors.request.use(e => {
            let o = c["a"].state.token,
                i = "https://api.stratoslumex.com/api/",
                a = window.location.origin,
                n = window.location.hostname;
            if (!["dev"].includes("production")) {
                let o = i;
                o = -1 != n.indexOf("www") ? a.replace("www", "api") : -1 != n.indexOf("h5") ? a.replace("h5", "api") : "https://api." + n, e.baseURL = o + "/api"
            }
            let t = "en_US",
                d = localStorage.getItem("language") || "en_US";
            t = d;
            let s = (new Date).getTime(),
                l = e.isUpload ? {} : Object.assign({}, e.data);
            for (var u in l.timestamp = s, l.apiKey = "LeWjTDb1fRFmCEHy", l) "" !== l[u] && void 0 !== l[u] && null !== l[u] || delete l[u];
            if (l.sign = r["a"].sign(l), o) {
                if (e.isUpload) {
                    let i = new FormData;
                    i.append("file", e.data.file), i.append("sign", l.sign), i.append("timestamp", l.timestamp), i.append("apiKey", l.apiKey), e.data = i, e.headers = {
                        "Content-Type": "multipart/form-data",
                        system: "android",
                        token: o,
                        lang: t
                    }
                } else e.data = l, e.data = JSON.stringify(e.data), e.headers = {
                    "Content-Type": "application/json",
                    system: "android",
                    token: o,
                    lang: t
                };
                v++, f.$emit("showloading")
            } else e.data = l, e.headers = {
                "Content-Type": "application/json",
                system: "android",
                lang: t
            };
            return e
        }, e => Promise.reject(e)), t.a.interceptors.response.use(e => (e.data.data && (e.data.data = h.decrypt(e.data.data)), v--, v <= 0 ? f.$emit("closeLoading") : f.$emit("showloading"), 401 === e.data.code ? (c["a"].dispatch("resetVuex"), d["a"].push({
            path: "/user/login",
            querry: {
                redirect: d["a"].currentRoute.fullPath
            }
        }), e) : e), e => (v--, f.$emit("closeLoading"), "ECONNABORTED" === e.code && -1 !== e.message.indexOf("timeout") && Object(s["a"])({
            message: "Error:500",
            timeout: 1500
        }), Promise.reject(e)));
        let b = t.a;

        function z(e, o = {}, i = {}) {
            return new Promise((a, n) => {
                t.a.get(e, {
                    params: o,
                    headers: i
                }).then(e => {
                    a(e.data)
                }).catch(e => {
                    n(e)
                })
            })
        }

        function A(e, o = {}, i = {
            isUpload: !1
        }) {
            return new Promise((a, n) => {
                t.a.post(e, o, i).then(e => {
                    a(e.data)
                }, e => {
                    n(e)
                })
            })
        }
        var y = f
    },
    "842f": function(e, o, i) {
        "use strict";
        o.__esModule = !0, o.default = void 0;
        var a = {
            name: "Jméno",
            tel: "Telefonní číslo",
            save: "Uložit",
            confirm: "Potvrdit",
            cancel: "Zrušit",
            delete: "Smazat",
            complete: "Dokončit",
            loading: "Načítání...",
            telEmpty: "Prosím vyplňte telefonní číslo",
            nameEmpty: "Prosím vyplňte jméno",
            nameInvalid: "Chybně zadané jméno",
            confirmDelete: "Opravdu chcete smazat?",
            telInvalid: "Chybně zadané telefonní číslo",
            vanCalendar: {
                end: "Konec",
                start: "Začátek",
                title: "Kalendář",
                startEnd: "Začátek/Konec",
                weekdays: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
                monthTitle: function(e, o) {
                    return e + "/" + o
                },
                rangePrompt: function(e) {
                    return "Vyberte nejvíce " + e + " dní"
                }
            },
            vanCascader: {
                select: "Vybrat"
            },
            vanContactCard: {
                addText: "Přidat kontaktní informace"
            },
            vanContactList: {
                addText: "Přidat nový kontakt"
            },
            vanPagination: {
                prev: "Předchozí",
                next: "Další"
            },
            vanPullRefresh: {
                pulling: "Táhněte pro obnovení...",
                loosing: "Pusťte pro obnovení..."
            },
            vanSubmitBar: {
                label: "Celkem: "
            },
            vanCoupon: {
                unlimited: "Neomezený",
                discount: function(e) {
                    return 10 * e + "% sleva"
                },
                condition: function(e) {
                    return "Alespoň " + e
                }
            },
            vanCouponCell: {
                title: "Kupón",
                tips: "Žádné kupóny",
                count: function(e) {
                    return "Máte " + e + " kupónů"
                }
            },
            vanCouponList: {
                empty: "Žádné kupóny",
                exchange: "Vyměnit",
                close: "Zavřít",
                enable: "Dostupné",
                disabled: "Nedostupné",
                placeholder: "Kód kupónu"
            },
            vanAddressEdit: {
                area: "Oblast",
                postal: "PSČ",
                areaEmpty: "Vyberte prosím oblast doručení",
                addressEmpty: "Adresa nesmí být prázdná",
                postalEmpty: "Chybné PSČ",
                defaultAddress: "Nastavit jako výchozí adresu",
                telPlaceholder: "Telefonní číslo",
                namePlaceholder: "Jméno",
                areaPlaceholder: "Oblast"
            },
            vanAddressEditDetail: {
                label: "Adresa",
                placeholder: "Adresa"
            },
            vanAddressList: {
                add: "Přidat novou adresu"
            }
        };
        o.default = a
    },
    "8b89": function(e, o, i) {
        "use strict";
        o.__esModule = !0, o.default = void 0;
        var a = {
            name: "Имя",
            tel: "телефон",
            save: "спасти",
            confirm: "подтверждать",
            cancel: "Отмена",
            delete: "удалять",
            complete: "Заканчивать",
            loading: "Загрузка...",
            telEmpty: "请填写电话",
            nameEmpty: "请填写姓名",
            nameInvalid: "请输入正确的姓名",
            confirmDelete: "确定要删除吗",
            telInvalid: "请输入正确的手机号",
            vanCalendar: {
                end: "конец",
                start: "Начинать",
                title: "выбор даты",
                confirm: "Конечно",
                startEnd: "начать конец",
                weekdays: ["Воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
                monthTitle: function(e, o) {
                    return e + "年" + o + "月"
                },
                rangePrompt: function(e) {
                    return "选择天数不能超过 " + e + " 天"
                }
            },
            vanCascader: {
                select: "пожалуйста, выберите"
            },
            vanContactCard: {
                addText: "添加联系人"
            },
            vanContactList: {
                addText: "新建联系人"
            },
            vanPagination: {
                prev: "上一页",
                next: "下一页"
            },
            vanPullRefresh: {
                pulling: "Потяните вниз, чтобы обновить...",
                loosing: "Отпустите, чтобы обновить..."
            },
            vanSubmitBar: {
                label: "合计："
            },
            vanCoupon: {
                unlimited: "无使用门槛",
                discount: function(e) {
                    return e + "折"
                },
                condition: function(e) {
                    return "满" + e + "元可用"
                }
            },
            vanCouponCell: {
                title: "优惠券",
                tips: "暂无可用",
                count: function(e) {
                    return e + "张可用"
                }
            },
            vanCouponList: {
                empty: "暂无优惠券",
                exchange: "兑换",
                close: "不使用优惠券",
                enable: "可用",
                disabled: "不可用",
                placeholder: "请输入优惠码"
            },
            vanAddressEdit: {
                area: "地区",
                postal: "邮政编码",
                areaEmpty: "请选择地区",
                addressEmpty: "请填写详细地址",
                postalEmpty: "邮政编码格式不正确",
                defaultAddress: "设为默认收货地址",
                telPlaceholder: "收货人手机号",
                namePlaceholder: "收货人姓名",
                areaPlaceholder: "选择省 / 市 / 区"
            },
            vanAddressEditDetail: {
                label: "详细地址",
                placeholder: "街道门牌、楼层房间号等信息"
            },
            vanAddressList: {
                add: "新增地址"
            }
        };
        o.default = a
    },
    "8bdd": function(e) {
        e.exports = JSON.parse('{"title":{"doc0":"Startseite","doc1":"TTMD-Quantifizierung","doc2":"Strategie","doc3":"Maximaler Rekord","doc4":"Team","doc5":"Teamliste","doc6":"meine Neuigkeiten","doc7":"Missionszentrum","doc8":"Vermögen","doc9":"Asset-Details","doc10":"aufladen","doc11":"zurückziehen","doc12":"Mein","doc13":"Upgrade-Level","doc14":"Rückmeldung","doc15":"Hilfezentrum","doc16":"Hilfedetails","doc17":"Legen Sie ein Fondspasswort fest","doc18":"Sprache wechseln","doc19":"Login-Passwort ändern","doc20":"Login-Passwort zurücksetzen","doc21":"Authentifizierungszentrum mit echtem Namen","doc22":"Persönliche Angaben","doc23":"Authentifizierung","doc24":"Ausweisfoto hochladen","doc25":"Anmeldung","doc26":"registrieren","doc27":"Freunde einladen","doc28":"Wählen Sie den Aufladekanal","doc29":"Wählen Sie den Auszahlungskanal","doc30":"Abhebung der Fiat-Währung","doc31":"Aufladen der Fiat-Währung"},"load":{"refreshed":"Erfolgreich aktualisieren","loosing":"Zum Aktualisieren loslassen...","loading":"Wird geladen...","no_more":"nicht mehr","no_open":"Noch nicht geöffnet"},"page":{"doc1":"Überblick über Vermögenswerte","doc2":"Verdienen Sie sofort quantitatives Geld mit TTMD","doc3":"aufladen","doc4":"zurückziehen","doc5":"Quantitative Vorteile von TTMD","doc6":"Kurse der wichtigsten Börsen","doc7":"Währung/Name","doc8":"letzter Preis","doc9":"24 Stunden lang Höhen und Tiefen","doc10":"Tage sicheren Betriebs","doc11":"Himmel","doc12":"kumulativer Leistungsgewinn","doc13":"Absoluter Sicherheitsmechanismus","doc14":"Alle Gelder des Benutzers befinden sich in ihrer eigenen Binance-Börse. Die quantitative Plattform TTMD erhebt nur Nutzungsgebühren für Softwaretechnologie, und Binance erhebt eine Transaktionsgebühr für jede Transaktion. Das einzige Risiko besteht darin, dass Bitcoin auf Null geht und Binance davonläuft.","doc15":"Strenger Sicherheitsmechanismus","doc16":"Die Fondsarbitrage wird über die Börsen-API betrieben. Der Server dieser Software speichert den API-Schlüssel des Benutzers nicht, sondern nur auf dem Computer des Benutzers. Machen Sie sich keine Sorgen über Hackerangriffe, und die API benötigt keine Erlaubnis zum Abheben von Münzen!","doc17":"Flexible Richtlinienparameter","doc18":"Nahezu programmierbare Handelsstrategien ermöglichen es Händlern, ihre Hände einfacher zu nutzen, wie Tigerflügel! One-Click-Hosting hilft neuen Benutzern, Zeit und Kosten für umfangreiche Lernsoftware zu sparen","doc19":"Leistungsstarke intelligente Analyse","doc20":"Nachdem der quantitative verteilte Marktserver TTMD den Börsenmarkt erfasst hat, nutzt er die leistungsstarke künstliche Intelligenz auf der Serverseite, um die Marktdaten zu analysieren, zu verarbeiten und zu überprüfen, um die beste Entscheidungslösung bereitzustellen!","doc21":"nachhaltige Entwicklung","doc22":"Der Handel mit digitalen Währungen wird ein langjähriger Markt sein, und der Währungsspekulationsroboter TTMD wird sich weiter verbessern und Ihnen mehr Mehrwertdienste bieten!","doc23":"Auszahlungswährung","doc24":"Bank","doc25":"Bitte geben Sie den Namen der Auszahlungsbank ein","doc26":"Auszahlungsbetrag","doc27":"Bitte geben Sie den Auszahlungsbetrag ein","doc28":"Verfügbares Guthaben","doc29":"Bitte geben Sie die Auszahlungsinformationen ein","doc30":"Name","doc31":"Bitte geben Sie Ihren Namen ein","doc32":"Bankkartennummer","doc33":"Bitte geben Sie die Bankkartennummer ein","doc34":"Bearbeitungsgebühr","doc35":"Tatsächliches Konto","doc36":"Sicher","doc37":"Freundliche Tipps","doc38":"Nach erfolgreicher Auszahlung dauert es ca. 3-5 Minuten, bis die Fiat-Währung gutgeschrieben wird. Bitte warten Sie geduldig.","doc39":"Bitte geben Sie das Fondspasswort ein","doc40":"Auszahlung bestätigen","doc41":"unter Sicherheitsschutz","doc42":"Bitte legen Sie zunächst das Fondspasswort fest","doc43":"Wählen Sie Mainnet aus","doc44":"Währung wählen","doc45":"Auszahlungsadresse","doc46":"Auszahlungsbetrag","doc47":"Bitte geben Sie den Auszahlungsbetrag ein","doc48":"alle","doc49":"Vermögenssaldo","doc50":"Stornieren","doc51":"Bitte geben Sie die Auszahlungsadresse ein","doc52":"erfolgreich kopiert","doc53":"Keine Aufzeichnungen","doc54":"Währung","doc55":"Typ","doc56":"Datum","doc57":"Startdatum","doc58":"Endtermin","doc59":"Wählen Sie einen Typ","doc60":"Einkommen","doc61":"Ausgaben","doc62":"Bargeldaufladung","doc63":"Bargeldabhebung","doc64":"Währung aufladen","doc65":"Aufladebetrag","doc66":"Bitte geben Sie den Aufladebetrag ein","doc67":"Aufladebetrag","doc68":"Es dauert ca. 3–5 Minuten, bis die Aufladezahlung in Fiat-Währung dem Konto gutgeschrieben wird. Bitte warten Sie geduldig. Die Bearbeitungsgebühr wird vom gutgeschriebenen Betrag abgezogen.","doc69":"Bestätigen Sie das Aufladen","doc70":"Kopieren","doc71":"Notiz","doc7222222":"Mindestaufladung: {i1} USDT, weniger als der Mindestbetrag kann nicht eintreffen. Bitte laden Sie keine Nicht-USDT-Guthaben an die oben genannte Adresse auf, da die Guthaben sonst nicht abgerufen werden. Ihre Aufladeadresse ändert sich nicht häufig Sie können wiederholt aufladen. Sollte sich eine Änderung ergeben, werden wir diese weiterleiten. Sie werden per Bulletin oder E-Mail benachrichtigt.","doc72":"Bei jedem Aufladen müssen Sie die letzte Einzahlungsadresse abrufen. Die Einzahlungsadresse läuft nach zehn Minuten ab. TTMD übernimmt keine Verantwortung für den Geldverlust, der durch die Übertragung des abgelaufenen Adresskontos verursacht wird!","doc73":"Derzeitiger Preis","doc74":"Transaktionen Aufzeichnung","doc75":"USDT-Aufladung","doc76":"Zahlung in vietnamesischer Währung","doc77":"USDT-Abhebung","doc78":"Abzug der vietnamesischen gesetzlichen Währung","doc79":"Bitte geben Sie die Telefonnummer ein","doc80":"Bitte geben Sie Ihre E-Mail-Adresse ein","doc81":"SMS-Bestätigungscode","doc82":"E-Mail-Bestätigungscode","doc83":"Holen Sie sich den Bestätigungscode","doc84":"Der Einladungscode darf nicht leer sein","doc85":"Bitte geben Sie ein Passwort ein (6-20 Buchstaben, Zahlen kombinierte Zeichen)","doc86":"Bitte geben Sie das Passwort erneut ein","doc87":"Ich habe gelesen und stimme zu","doc88":"Benutzerregistrierungsvereinbarung","doc89":"Ein Konto haben? sofort","doc90":"APP-Download","doc91":"Wählen Sie eine internationale Mobiltelefonvorwahl aus","doc92":"Vorwahl suchen","doc93":"Sprachumschaltung","doc94":"Registrieren Sie Ihr Telefon","doc95":"E-Mail Registrierung","doc96":"Häufiger Vorgang. Versuchen Sie es später noch einmal","doc97":"Bitte geben Sie eine gültige Telefonnummer ein","doc98":"Bitte geben Sie Ihre gültige E-Mail-Adresse ein","doc99":"Erfolgreich gesendet","doc100":"Das Passwort sollte eine Kombination aus 6–20 Buchstaben und Zahlen sein","doc101":"Die beiden eingegebenen Passwörter sind inkonsistent","doc102":"Bitte überprüfen Sie die Benutzerregistrierungsvereinbarung","doc103":"Registrierung erfolgreich","doc104":"Bitte Passwort eingeben","doc105":"vergessen Sie das Passwort","doc106":"Sie haben noch kein Konto? sofort","doc107":"Melden Sie sich mit dem Telefon an","doc108":"E-Mail-Login","doc109":"Anmeldung erfolgreich","doc110":"Handy","doc111":"Post","doc112":"Passwort","doc113":"Bestätige das Passwort","doc114":"Bitte geben Sie das Passwort erneut ein","doc115":"Bestätigungs-Code","doc116":"Gesamtumsatz","doc117":"Vollständige Aufladung","doc118":"totaler Rückzug","doc119":"Teamdatenübersicht","doc120":"neue Personenzahl","doc121":"Neue Einnahmen","doc122":"Neue Aufladung","doc123":"Neuer Rückzug","doc124":"Einkommensanalyse","doc125":"Kumulierte Teamgröße","doc126":"Teamliste anzeigen","doc127":"Kumuliertes Einkommen","doc128":"Kumulative Aufladung","doc129":"Kumulierter Rückzug","doc130":"Die letzten drei Generationen von Daten","doc131":"Generierungsdaten","doc132":"Daten der zweiten Generation","doc133":"Drei Generationen von Daten","doc134":"Teamgröße","doc135":"Auszahlungsbetrag","doc136":"Heute","doc137":"Letzten 7 Tage","doc138":"letzte 30 Tage","doc139":"Fast 60 Tage","doc140":"Aufgabeneinkommen","doc141":"Quantitative Vorteile","doc142":"Empfohlene quantifizierte Belohnungen","doc143":"ungültiger Benutzer","doc144":"vollendet","doc145":"im Gange","doc146":"Auszeichnung erhalten","doc147":"tägliche Aufgaben","doc148":"Wachstumsaufgabe","doc149":"Auswahlzeitraum","doc150":"Anlagebetrag","doc151":"profitieren","doc152":"Plattform kaufen","doc153":"Verkaufsplattform","doc154":"Kaufpreis","doc155":"Verkaufspreis","doc156":"Eingabewährung","doc157":"Komplette Zeit","doc158":"quantitative Aufzeichnung","doc159":"Das heutige Ergebnis","doc160":"Verdienst in den letzten 7 Tagen","doc161":"Die verbleibenden Aktivierungen von heute","doc162":"Einkommen","doc163":"Einzelstart der TTMD-Quantifizierung","doc164":"TTMD führt den Panel-Prozess aus","doc165":"Geschlecht","doc166":"männlich","doc167":"weiblich","doc168":"Staatsbürgerschaftsland","doc169":"Bitte geben Sie Ihre Nationalität ein","doc170":"Art des Zertifikats","doc171":"amtliches Kennzeichen","doc172":"Bitte geben Sie die Zertifikatsnummer ein","doc173":"Hochladen eines Ausweisfotos","doc174":"Zertifikat auswählen","doc175":"Ausweis","doc176":"Reisepass","doc177":"Bitte laden Sie ein Foto von der Vorderseite Ihres Personalausweises hoch","doc178":"Bitte laden Sie Ihren Reisepass hoch","doc179":"Bitte laden Sie die Rückseite Ihres Personalausweises hoch","doc180":"Spitzname","doc181":"Telefonnummer","doc182":"Postfachnummer","doc183":"Verifiziert","doc184":"Gehen Sie zur Authentifizierung","doc185":"Nicht bestanden","doc186":"überprüft werden","doc187":"zertifiziert","doc188":"speichern","doc189":"Update abgeschlossen","doc190":"Aktuelles Level","doc191":"nächste Mitgliedschaftsstufe","doc192":"effektive Menge","doc193":"gültiges Mitglied","doc194":"Notenliste","doc195":"Grad","doc196":"Tägliche Nutzung des TTMD-Roboters","doc197":"Bitte geben Sie den Bestätigungscode ein","doc198":"Altes Passwort","doc199":"Bitte geben Sie Ihr altes Transaktionspasswort ein","doc200":"Passwort für den Fonds","doc201":"Bitte legen Sie ein Transaktionspasswort mit 6 numerischen Zeichen fest","doc202":"Geben Sie das Passwort zur Bestätigung erneut ein","doc203":"1. Ihr Fondspasswort wird für Transaktionen, Bargeldabhebungen und Kontosicherheitseinstellungen verwendet. Es wird empfohlen, nicht mit dem Login-Passwort übereinzustimmen. Das daraus resultierende Konto wird gestohlen und diese Website übernimmt keine Verantwortung;","doc204":"2. Nach der Änderung des Fondspassworts sind innerhalb von 48 Stunden keine Auszahlungen mehr möglich.","doc205":"Transaktionspasswort ändern","doc206":"Transaktionspasswort zurücksetzen","doc207":"Transaktionspasswort festlegen","doc208":"Das Passwortformat ist falsch","doc209":"Bitte geben Sie das alte Passwort ein","doc210":"Bitte geben Sie Ihr altes Login-Passwort ein","doc211":"Neues Kennwort","doc212":"Neues Login-Passwort, Kombination aus 6–20 Zahlen und Buchstaben","doc213":"erfolgreich eingestellt","doc214":"Einladungslink","doc215":"Einladungslink kopieren","doc216":"Einladungscode","doc217":"Einladungscode kopieren","doc218":"nicht zertifiziert","doc219":"Ihre Zertifikatsprüfung ist fehlgeschlagen","doc220":"Ihr Zertifikat wird derzeit überprüft","doc221":"Schutz personenbezogener Daten","doc222":"Verbessern Sie Identitätsinformationen und erleben Sie mehr Dienste","doc223":"perfekt sein","doc224":"Öffnen Sie derzeit den Kanal mit dem höchsten Rabatt","doc225":"allgemeiner Benutzer","doc226":"Gang","doc227":"Aktualisierung","doc228":"Vermögensübersicht","doc229":"austragen","doc230":"Kontaktieren Sie den Kundendienst","doc231":"Transaktions Passwort","doc232":"Cache leeren","doc233":"erfolgreich beenden","doc234":"Erfolgreich gelöscht","doc235":"Bitte geben Sie Ihre Meinung ein","doc236":"einreichen","doc237":"Software-Funktionsproblem","doc238":"Beschwerden und Vorschläge","doc239":"Seitenabstürze und Instabilität","doc240":"andere","doc241":"Bitte geben Sie Ihr Feedback ein","doc242":"Nehmen Sie Ihren Personalausweis der zweiten Generation mit bzw. laden Sie ihn hoch","doc243":"Nehmen Sie Ihren Reisepass mit bzw. laden Sie ihn hoch","doc244":"Klicken Sie hier, um ein Porträt aufzunehmen/hochzuladen","doc245":"Klicken Sie hier, um das Guowei-Gesicht aufzunehmen/hochzuladen","doc246":"OK zum Hochladen","doc247":"TTMDWallet","doc248":"Mal","doc249":"Menschen","doc250":"Wenn Sie längere Zeit keine Freunde eingeladen haben, kann Ihr Guthaben nicht abgehoben werden. Sie können die Abhebung fortsetzen, indem Sie Freunde einladen","doc251":"Proportional teilen","doc252":"Heutiges Währungseinkommen","doc254":"Plattformeinführung","doc255":"Einführung in die intelligente Quantifizierung von Humanressourcen","doc256":"Es gibt viele Börsen für digitale Währungen auf der Welt, und jede Börse hat die Funktion, Fiat-Währung in digitale Währung umzuwandeln. Jede Börse hat einen anderen Preis für den Umtausch von Fiat-Währung in digitale Währung. Menschen können zu einem niedrigen Preis kaufen und zu einem hohen Preis verkaufen, um Wechselkursdifferenzen zu erzielen.","doc257":"Der Prozess des manuellen Kaufs zu einem niedrigen Preis und Verkauf zu einem hohen Preis an mehreren Börsen ist zeitaufwändig. Wenn sich der Preis ändert, dauert der Vorgang und die Transaktion zu lange und der beste Wechselkurs wird verpasst, was zu einem Rückgang der Handelsgewinne führt.","doc258":"Daher scheint das automatische Quantifizierungssystem TTMD manuelle Probleme zu vermeiden und die Gewinnspanne des quantitativen Handels zu verbessern. Das automatische Quantifizierungssystem TTMD kann automatisch nach dem niedrigsten Verkaufspreis von BTC, ETH, USDT und anderen digitalen Währungen an wichtigen Börsen suchen und innerhalb von Sekunden schnell kaufen. <br/><br/>Wenn der Währungspreis im System eintrifft, wird er innerhalb von Sekunden schnell verkauft, wenn der Verkaufspreis automatisch festgelegt wird. <br/><br/>In nur wenigen Minuten kann der Kauf zu einem niedrigen Preis und der Verkauf zu einem hohen Preis automatisch abgeschlossen werden<br/><br/>Die quantitative Transaktion kann schnell abgeschlossen werden. 24 Stunden ununterbrochene Datenerfassung, keine Notwendigkeit, den Markt manuell zu beobachten und effizient und stabil Einnahmen zu erzielen. Das ist das automatische Quantifizierungssystem TTMD.","doc259":"wie man Geld macht","doc260":"Klicken Sie auf die Schaltfläche, um den automatischen quantitativen Handel zu starten. Der automatische quantitative Handel wird innerhalb von 3-5 Minuten abgeschlossen. <br/>50 % der Einnahmen aus der Durchführung automatischer quantitativer Transaktionen sind der von der Plattform erzielte Gewinn und die restlichen 50 % sind der von der Plattform erzielte Gewinn. Der Gewinn gehört dem Nutzer.","doc261":"Beispiel: Kaufen Sie BTC für 5000 USDT auf Binance, verkaufen Sie BTC für 5050 USDT auf Ouyi und erzielen Sie einen Gewinn von 50 USDT. <br/>Die Plattform erhält einen Gewinn von 25 USDT, sodass dem Benutzer ein Gewinn von 25 USDT verbleibt.","doc262":"Einführung in die VIP-Level-Vorteile","doc2633":"Level-Operationsbetrag 1–500<br/>Sie können dreimal täglich automatische quantitative Transaktionen durchführen, und die Rendite für jede quantitative Transaktion beträgt 2,0 %–3,0 %. 500USDT können automatisch dreimal täglich quantifiziert werden, um 10USDT-15USDT zu verdienen.","doc263":"Level-Operationsbetrag 500–4999<br/>Sie können dreimal täglich automatische quantitative Transaktionen durchführen, und die Rendite für jede quantitative Transaktion beträgt 2,0 %–3,0 %. 1000USDT können automatisch dreimal täglich quantifiziert werden, um 20USDT-30USDT zu verdienen.","doc264":"Level-Operationsbetrag 3000–9999<br/>Sie können viermal täglich automatische quantitative Transaktionen durchführen, und die Rendite für jede quantitative Transaktion beträgt 2,5 %–3,5 %. 1000 USDT können automatisch viermal am Tag quantifiziert werden, um 25 USDT-35 USDT zu verdienen.","doc2644":"Level-Operationsbetrag 5000–99999<br/>Sie können fünfmal täglich automatische quantitative Transaktionen durchführen, und die Rendite für jede quantitative Transaktion beträgt 3,0 %–4,0 %. 1000 USDT können automatisch fünfmal am Tag quantifiziert werden, um 30 USDT-40 USDT zu verdienen.","doc2645":"Level-Operationsbetrag 10000–999999<br/>Sie können 6 automatische quantitative Transaktionen pro Tag durchführen, und die Rendite jeder quantitativen Transaktion beträgt 3,5 %–4,5 %. 1000USDT können automatisch 6-mal täglich quantifiziert werden, um 35USDT-45USDT zu verdienen.","doc2646":"Level-Operationsbetrag 20000-999999<br/>Sie können siebenmal am Tag automatische quantitative Transaktionen durchführen, und die Rücklaufquote jeder quantitativen Transaktion beträgt 3,5 % bis 4,5 %. 1000 USDT können siebenmal am Tag automatisch quantifiziert werden, um 35 USDT-45 USDT zu verdienen.","doc265":"Auszahlungsgebühr für jedes VIP-Level","doc2655":"Wenn Sie VIP0 sind, kostet das Auszahlungsverfahren 3 %<br/>Wenn Sie VIP1 sind, kostet das Auszahlungsverfahren 3 %<br/>Wenn Sie VIP2 sind, kostet das Auszahlungsverfahren 2 %<br/>Wenn Sie VIP3 sind, Die Auszahlungsgebühr beträgt 2 %.<br/> /> Wenn Sie VIP4 sind, beträgt die Gebühr 1,5 %.<br/> Wenn Sie VIP5 sind, beträgt die Gebühr 1 %.","doc2656":"Dreistufige Betrauung des Einführers/Einladenden","doc266":"Um die App für den automatischen quantitativen Handel TTMD schnell zu bewerben, die Popularität der Plattform zu steigern und mehr Anlegern den Beitritt zu TTMD zu ermöglichen. TTMD hat sich für die Einführung eines dreistufigen Vertriebsmodells für die Werbung entschieden, um schnell Plattformnutzer zu gewinnen.","doc267":"Der dreistufige Vertrieb ist in allen Marketingmodellen der schnellste Weg, Benutzer zu gewinnen. Um die Entwicklungsgeschwindigkeit und das Wohlergehen der Agenten zu verbessern, hat TTMD den folgenden dreistufigen Verteilungsmechanismus eingerichtet.","doc268":"1. Verwenden Sie Ihren eigenen Einladungscode, um Freund A in Ihrer Nähe einzuladen, sich TTMD anzuschließen, und Sie können 18 % des täglichen automatischen quantitativen Handelseinkommens von Freund A erhalten","doc269":"2. Ihr Freund A nutzt seinen Einladungscode, um seinen Freund B zum Beitritt zu TTMD einzuladen, und Sie können 6 % des täglichen automatischen quantitativen Handelseinkommens von Freund B erhalten","doc270":"3. Freund B nutzt seinen Einladungscode, um seinen Freund C zum Beitritt zu TTMD einzuladen, und Sie können 3 % des täglichen automatischen quantitativen Handelseinkommens von Freund C erhalten.","doc271":"Wenn Sie Ihr eigenes Team bilden, Ihr Freund A Freund B zum Beitritt einlädt und Freund B Freund C zum Beitritt einlädt, bilden Sie ein vollständiges dreistufiges Vertriebsteam. <br/><br/>Wenn Ihr Freund A, Freund B und Freund C die heutige automatische quantitative Transaktion abschließen, können Sie am Tag der Agenturprovision eine Teamprovision von 18+6+3=27 % ihres Einkommens erhalten.","doc2657":"So berechnen Sie Ihre Teamprovision","doc2658":"Alle Ihre Untergebenen sind 10A+100B+1000C=1110 Personen.<br/>Angenommen, alle Ihre Untergebenen verdienen jeden Tag 100 $ auf ihren Konten.<br/>Das Provisionseinkommen Ihres A-Level-Agenturteams beträgt 100*18 %*10 Personen=180 USD,<br/>Provisionseinkommen Ihres B-Level-Agenturteams = 100 * 6 % * 100 Personen = 600 US-Dollar,<br/>Provisionseinkommen Ihres C-Level-Agenturteams = 100 * 3 % * 1000 Personen = 3000 US-Dollar Dollar, <br/>Ihr tägliches Teameinkommen beträgt A100+B180+C3000=3780 US-Dollar,<br/>Ihr monatliches Teameinkommen beträgt 3780*30 Tage=113400 US-Dollar,<br/>Ihr jährliches Teameinkommen beträgt 3780 *365 Tage=1379700 US-Dollar,<br/><br/>Dies ist ein sehr wichtiges Einkommen","doc272":"Beginnen Sie mit der Einzahlung und dem Verdienen von Zinsen","doc273":"Zinsen abwerfen","doc274":"Einlagenzinserträge","doc275":"kontaktiere uns","doc276":"scheitern","doc277":"abdrehen","doc278":"in Prüfung","doc279":"Nachname","doc280":"Name","doc281":"Bitte geben Sie ihren Nachnamen ein","doc282":"Bitte geben Sie Ihren Namen ein","doc283":"Die Bargeldabhebung erfolgt innerhalb von 72 Stunden","doc284":"VIP1: Level-Operationsbetrag 35–500<br>Sie können dreimal täglich automatischen quantitativen Handel durchführen, und die Rendite des täglichen quantitativen Handels beträgt 1,7 %–1,9 %. <br>500USDT können automatisch dreimal täglich quantifiziert werden, um 8USDT-10USDT zu verdienen. <br><br>VIP2: Level-Operationsbetrag 500–3000<br>Sie können viermal täglich automatische quantitative Transaktionen durchführen, und die tägliche Rendite quantitativer Transaktionen beträgt 2,1 %–2,3 %. <br>3000USDT können viermal am Tag automatisch quantifiziert werden, um 60USDT-70USDT zu verdienen. <br><br>Auszahlungsgebühr für jede VIP-Stufe<br>Um schnell für die automatische quantitative Zahlungs-App TTMD zu werben, die Popularität der Plattform zu steigern und mehr Anlegern den Beitritt zu TTMD zu ermöglichen. TTMD hat sich für die Einführung eines dreistufigen Vertriebsmodells für die Werbung entschieden, um schnell Plattformnutzer zu gewinnen. <br><br>Die dreistufige Verteilung ist der schnellste Weg, Benutzer in allen Marketingmodellen zu entwickeln. Um die Entwicklungsgeschwindigkeit und das Wohlergehen der Agenten zu verbessern, hat TTMD das folgende dreistufige Verteilungssystem eingerichtet. <br><br>1. Verwenden Sie Ihren Einladungscode, um Freund A in Ihrer Nähe einzuladen, sich TTMD anzuschließen, und Sie können 21 % des täglichen<br>automatischen quantitativen Handelseinkommens von Freund A erhalten. <br>2. Ihr Freund A nutzt seinen Einladungscode, um seinen Freund B zum Beitritt zu TTMD einzuladen, und Sie können Freund B<br>7 % des täglichen automatischen quantitativen Handelseinkommens aktivieren. <br><br>3. Freund B nutzt seinen Einladungscode, um seinen Freund C zum Beitritt zu TTMD einzuladen. Sie können 3 % des täglichen, automatisch quantifizierten Transaktionseinkommens von Freund C aktivieren. <br><br>Wenn Sie Ihr eigenes Team bilden, Ihr Freund A Freund B zum Beitritt einlädt und Freund B Freund C zum Beitritt einlädt,<br>dann bilden Sie ein vollständiges dreistufiges Vertriebsteam. <br><br>Wenn Ihr Freund A, Freund B und Freund C die heutige automatische quantitative Transaktion abschließen, können Sie am Tag der Agenturprovision eine Teamprovision von 21+7+3=31 % ihres Einkommens erhalten .","doc285":"Erlebnistage","doc286":"Ertragsprozentsatz","doc287":"Provisionsprozentsatz","doc288":"Bitte geben Sie zur Registrierung die korrekte Mobiltelefonnummer ein. Wenn Sie zur Registrierung und Anmeldung ein nicht verifiziertes Mobiltelefon verwenden, können Sie Ihr Passwort nicht ändern","doc289":"Bitte geben Sie zur Registrierung die korrekte E-Mail-Adresse ein. Wenn Sie sich mit einer E-Mail-Adresse registrieren und anmelden, die nicht verifiziert werden kann, können Sie Ihr Passwort nicht ändern.","doc290":"Bestellnummer","doc291":"Ankunftsbetrag","doc292":"Zustand","doc293":"Aufladeadresse","doc294":"Erstellungsdatum","doc295":"zurückkehren","doc296":"Mindestaufladung: 1 USDT weniger als der Mindestbetrag werden dem Konto nicht gutgeschrieben<br>Bei jeder Aufladung muss die neueste Einzahlungsadresse abgerufen werden, die Einzahlungsadresse wird nach zehn Minuten ungültig und die Übertragung abgelaufener Adresskonten und nicht- USDT-Vermögenswerte führen zum Verlust von Geldern und werden nicht wiederhergestellt. TTMD ist wahrscheinlich unverantwortlich！","doc306":"Mobiltelefonnummer binden","doc307":"Postfach binden","doc308":"Ungebundene Mobiltelefonnummer","doc309":"Bitte binden Sie zuerst die E-Mail","doc310":"Vorwahl","doc311":"Bitte geben Sie die internationale Mobilfunkvorwahl ein","doc312":"Um die Sicherheit Ihres Kontos weiter zu schützen, müssen Sie vor der Anmeldung die Überprüfung der E-Mail-Bindung abschließen","doc313":"Benutzer-ID","doc314":"Schicksalsrad","doc315":"neben","doc316":"Chance auf eine Verlosung","doc317":"mein Preis","doc318":"Regel","doc319":"Laden Sie gültige Mitglieder ein, um glückliche Ziehungszeiten zu erhalten","doc320":"Klicken Sie auf\\nZeichnen","doc321":"Holen Sie es sich sofort","doc322":"Zeit","doc323":"Preis","doc324":"Es gibt nicht genügend Verlosungen, bitte laden Sie Freunde ein","doc325":"Tauschrate","doc326":"überweisen","doc327":"Sparschwein","doc328":"Blinken","doc329":"elektronische Geldbörse","doc330":"flexibles Portemonnaie","doc331":"Sparschwein","doc332":"Quantitative Vorteile","doc333":"Erhalten Sie ein Sparschwein","doc334":"Sparschwein-Ebene","doc335":"Wenn die Benutzerebene mit der des Sparschweins übereinstimmt, kann das Guthaben des Sparschweins beansprucht werden und das Sparschwein wird nach einer gewissen Zeit automatisch aktualisiert","doc336":"Sparschwein-Guthaben","doc337":"erhalten","doc338":"Upgrade-Tage","doc339":"Sparschwein-Aufzeichnungen","doc340":"Währung überweisen","doc341":"Gleichgewicht","doc342":"Überweisungsbetrag","doc343":"Bitte geben Sie den Überweisungsbetrag ein","doc344":"Bestätigen Sie die Übertragung","doc345":"Der Überweisungsbetrag darf nicht größer sein als","doc346":"Der Überweisungsbetrag darf nicht kleiner als 1 sein","doc347":"aus","doc348":"ankommen","doc349":"Umtauschbetrag","doc350":"Bitte geben Sie den Umtauschbetrag ein","doc351":"Blitz bestätigen","doc352":"Der Flash-Austauschbetrag darf nicht größer sein als","doc353":"Bitte geben Sie den Blitzbetrag ein","doc354":"Die Anzahl der Flash-Swaps darf nicht weniger als 1 betragen","doc355":"direkte Push-Mitglieder","doc356":"Teammitglied","doc357":"Quantifizierbare Zeiten pro Tag","doc358":"1. Um illegale Geldwäscheaktivitäten zu verhindern, müssen Benutzer, die zum ersten Mal einzahlen, die Quantifizierung jeden Tag abschließen, bevor sie Geld abheben.<br>2. Nach dem Ende der täglichen Quantifizierung des Tages müssen sie auf 3 warten Stunden vor der Beantragung einer Auszahlung<br>3. Gewährleisten Sie strikt die Sicherheit des Kontoguthabens. Nachdem das Konto die E-Mail-Adresse oder die TRC20 USDT-Auszahlungsadresse und das Auszahlungskennwort geändert hat, wird der Schutzmechanismus des Fondssystems automatisch ausgelöst. Nach 48 Stunden hebt das System automatisch den Fondsschutzstatus auf und startet den normalen Auszahlungsprozess<br>Abhebungsgebühr für jede VIP-Stufe<br>VIP1-Abhebungsgebühr 5,0 %<br>VIP2-Abhebungsgebühr 4,0 %<br>VIP3-Abhebungsgebühr 3,0 %<br>VIP4-Auszahlungsgebühr 2,0 %<br>VIP5-Auszahlungsgebühr 1,0 %<br>VIP6-Auszahlungsgebühr 0,0 %","doc359":"Nächster Schritt","doc360":"Die Einnahmen von gestern","doc361":"gesamte Teamprovision","doc362":"Die Mannschaftsprovision von gestern","doc363":"Teamkommission heute","doc364":"Aktivitätsinformationen","doc365":"Nachrichteninformationen","doc366":"Vertragsversprechen","doc367":"Ablehnungsgrund","doc301":"","doc302":"","doc303":"","doc304":"","doc305":""},"page2":{"doc1":"flexible Fonds","doc2":"Mittel freizugeben","doc3":"Willkommen bei ITP","doc4":"Telefonnummer","doc5":"Passwort","doc6":"Quantifizierbare Zeiten heute","doc7":"Quantifizieren Sie den Gesamtnutzen","doc8":"Gesamtgewinn der Währungshaltung","doc9":"Zu veröffentlichende Platten","doc10":"VIP-Level","doc11":"Upgrade-Bedingungen","doc12":"Rechte und Interessen","doc13":"Mindestquantifizierter Betrag","doc14":"Maximaler quantitativer Betrag","doc15":"Quantifizierbare Zeiten pro Tag","doc16":"tägliche Rendite","doc17":"Absoluter Sicherheitsmechanismus","doc18":"Quantifizierte tatsächliche Kampferfolge","doc19":"strenge Richtlinienparameter","doc20":"Automatisierte Arbitrage-Ideen","doc21":"nachhaltige Entwicklung","doc22":"Das intelligente quantitative System TTMD berechnet die Eröffnungssituation sehr genau, handelt automatisch auf Ihrem Konto und arbeitet ununterbrochen rund um die Uhr. Wir haben 2016 den quantitativen KI-Handel eingeführt. Es unternimmt alle Anstrengungen, um die monatlichen Gewinne stetig zu steigern","doc23":"TTMD bietet eine große Menge an Transaktionsdaten für intelligentes KI-Lernen. Nach zig Millionen Übungen und tatsächlichen Kämpfen verfügt es über disziplinierte Entscheidungs- und Ausführungsfähigkeiten und wurde ohne Fehler oder Verluste gestartet.","doc24":"Basierend auf den Ergebnissen der quantitativen KI-Intelligenz-Betriebsentscheidung wählt das quantitative Handelsintelligenzsystem automatisch die Handelsmöglichkeiten mit günstigem Wachstum in Bezug auf Bewertung, Kapital und umfassende Bewertung im Vergleich zu dieser Phase aus und erstellt dann präzise Betriebsstrategien, die kann den Großteil der \\"verdrehten\\" Brainstorming-Entscheidung vermeiden","doc25":"Das Quantifizierungssystem scannt Chancen umfassend, automatisiert die Ein-Klick-Vervollständigung vollständig, sperrt schnell die Gewinndifferenz zwischen Token-Produkten und formuliert Strategien und Gewinne durch den Kauf zu niedrigen Preisen und den Verkauf zu hohen Preisen","doc26":"Der Handel mit digitalen Währungen wird ein langjähriger Markt sein. Das quantitative Intelligenzsystem TTMD wird die Leistung und die neuesten digitalen Algorithmen weiterhin optimieren, um Ihnen mehr vermögenssteigernde Dienste zu bieten","doc27":"Partner","doc28":"Medien teilen","doc29":"Ausweis vorne","doc30":"Die Rückseite des Dokuments","doc31":"Dokumente aufbewahren","doc32":"Bewertung abschicken","doc33":"Kein richtiger Name","doc34":"Die Echtnamenauthentifizierung ist fehlgeschlagen","doc35":"Echter Name, Überprüfung ausstehend","doc36":"Echter Name bestätigt","doc37":"Bitte bestätigen Sie zunächst Ihren echten Namen","doc38":"Nach dem Ändern des Login-Passworts und des Transaktionspassworts wird der Fondssicherheitsschutzmechanismus ausgelöst. <br>Nach 48 Stunden gibt das System automatisch den Fondsschutzstatus frei und startet den normalen Auszahlungsprozess.<br>Die Mindestauszahlung beträgt 39 USDT und a Für die Auszahlung ist eine bestimmte Bearbeitungsgebühr erforderlich! <br><br>\\n1. Um illegale Geldwäscheaktivitäten zu verhindern, müssen Benutzer, die zum ersten Mal einzahlen, eine dreitägige Quantifizierung durchführen, bevor sie eine Auszahlung vornehmen können.<br>2. Füllen Sie alle Quantifizierungszeiten des Tages aus und nehmen Sie eine Auszahlung vor mindestens 39USDT<br>3. Jedes Mal Der Auszahlungsbetrag unterliegt den tatsächlichen Vorschriften der Plattform, und für jede Auszahlung wird eine bestimmte Bearbeitungsgebühr als Wartungsgebühr der Plattform erhoben<br><br>Regeln für die Bearbeitungsgebühr für Auszahlungen <br>Abhebungsgebühr für VIP1 5,0 %<br>Abhebungsgebühr für VIP2 4,0 %<br>\\nAbhebungsgebühr für VIP3 3,0 %<br>Abhebungsgebühr für VIP4 2,0 ​​%<br>Abhebungsgebühr für VIP5 1,0 %<br>Abhebungsgebühr für VIP6 0,0 %","doc39":"Auszahlungsadresse","doc40":"Bitte geben Sie das Transaktionspasswort ein","doc41":"Bitte geben Sie die Auszahlungsadresse ein","doc42":"Anfängeraufgabe","doc43":"fortgeschrittene Aufgabe","doc44":"Bitte legen Sie zuerst das Transaktionspasswort fest","doc45":"Kumulierte aktive Mitglieder","doc46":"wirksames Gleichgewicht","doc47":"Effektives Aufladen","doc48":"Fragetyp","doc49":"Meinung","doc51":"Insgesamt {k1} Personen","doc52":"Freundesebene","doc53":"Der Gesamtrückerstattungsbetrag der ersten Ebene","doc54":"Der Gesamtrückerstattungsbetrag der zweiten Ebene","doc55":"Der Gesamtrückerstattungsbetrag der drei Stufen","doc56":"effizient","doc57":"ungültig","doc58":"Schicht","doc59":"zweiter Stock","doc60":"drei Etagen","doc61":"Stufe auswählen","doc62":"Vermögensliste","doc63":"TTMDDigital-Technologie","doc64":"Globaler ökologischer Blockchain-Aufbau","doc65":"KI-Hosting","doc66":"Hosting-Details","doc67":"Details zum verwalteten Einkommen","doc68":"Erfolgreich gemanagt","doc69":"Ausbeute pro Quantifizierung","doc70":"Flexible Fonds","doc71":"Vermögenswerte einfrieren","doc72":"Erledige Aufgaben, um mehr Belohnungen zu erhalten","doc73":"Treuhandbetrag","doc74":"Sie haben {i1} Bots, die die Quantisierung auf dem Hosting ausführen","doc75":"Tägliche Rendite (variabel)","doc76":"Eingabebereich","doc77":"Treuhandzeitraum","doc78":"Hosting","doc79":"ist beendet","doc80":"Tägliches Einkommen","doc81":"(schweben)","doc82":"Startzeit des Hostings","doc83":"Endzeit des Treuhandkontos","doc84":"Einkommensdetails","doc85":"KI-gestützte Quantifizierung","doc86":"im Gange","doc87":"Historisches Hosting","doc88":"Verwaltetes Einkommen","doc89":"Managed Yield","doc90":"{i1} Tage bis zum Ablauf des Treuhandkontos","doc91":"Treuhandunterlagen","doc92":"über","doc93":"Der Roboter arbeitet hart","doc94":"Noch eine Anzahlung","doc95":"mein Hosting","doc96":"Tägliche Rendite","doc97":"Analysieren Sie die Ein- und Ausstiegsmöglichkeiten mithilfe von KI-Daten und fügen Sie Logik wie die Filterung des gleitenden Durchschnitts hinzu, um die künstlichen emotionalen Auswirkungen zu reduzieren, das Einkommen zu erhöhen und gleichzeitig die Sicherheit des Auftraggebers zu gewährleisten und die korrekte Ein- und Ausstiegsrate erheblich zu verbessern","doc98":"Treuhandzyklus","doc99":"Art der Transaktion","doc100":"kluge Auswahl","doc101":"Transaktionswährung","doc102":"Intelligente Token-Kombination","doc103":"Die intelligente Token-Kombination wählt mehrere Handelspaarkombinationen basierend auf KI-Big-Data aus, mit geringeren Risiken und höheren Renditen","doc104":"Anlagebetrag","doc105":"Treuhandbestätigung","doc106":"Bestätigen Sie das Hosting","doc107":"Anlagebetrag","doc108":"Der Investitionsbetrag darf nicht geringer sein als","doc109":"Der Investitionsbetrag darf nicht größer sein als","doc110":"kluge Auswahl","doc111":"TTMD bietet erstklassige quantitative Produkte, kostenlos und für die Öffentlichkeit zugänglich","doc112":"weißes Papier","doc113":"Finanziell","doc114":"Finanzbereich","doc115":"Finanzieller Betrag","doc116":"Gesamtertrag aus der Vermögensverwaltung","doc117":"Ordnung halten","doc118":"Blindbox-Lotterie","doc119":"Blindbox-Aufnahme","doc120":"Mine","doc121":"Meine Bestellung","doc122":"Die Einnahmen von gestern","doc123":"Anlagebetrag","doc124":"Verwaltungsgebühr","doc125":"Einkommenssteuer","doc126":"der Begriff","doc127":"Tägliche Rendite","doc128":"Gesamtertrag","doc129":"einstellen","doc130":"Investieren Sie in das Finanzmanagement","doc131":"Finanzielle Details","doc132":"Tagesrate","doc133":"Investitionszeitraum","doc134":"Verwaltungskosten","doc135":"Kapitalertragsteuer","doc136":"Himmel","doc137":"Zinsberechnungsmethode","doc138":"Tägliches Einkommen, das Kapital wird automatisch zurückgegeben, wenn es abläuft","doc139":"tägliches Einkommen","doc140":"Geschätzter Gesamtnutzen","doc141":"Finanzmanagementebene","doc142":"Anlagebetrag","doc143":"Gleichgewicht","doc144":"Gutscheine","doc145":"Kein Gutschein verfügbar","doc146":"Abzugsfähiger Betrag","doc147":"Bitte wählen Sie einen Gutschein aus","doc148":"Der Kaufbetrag darf den Restbetrag nicht überschreiten","doc149":"Der Investitionsbetrag muss vorhanden sein","doc150":"Anlageprodukte","doc151":"Anfangszeit","doc152":"Endzeit","doc153":"Couponabzug","doc154":"tatsächliche Zahlung","doc155":"keiner","doc156":"Die Angaben sind korrekt und die Investition ist bestätigt","doc157":"Investition bestätigen","doc158":"Bestimmung der finanziellen Investition","doc159":"finanzieller Erfolg","doc160":"Hart Arbeiten","doc161":"ein anderes reinstecken","doc162":"Erfolgreich gemanagt","doc163":"Finanzielle Ordnung","doc164":"nicht mehr","doc165":"alle","doc166":"halten","doc167":"Reife","doc168":"Abgelaufen","doc169":"Rendite","doc170":"Verwaltungsgebühr","doc171":"Geschätztes Einkommen","doc172":"Verfügbare Gutscheine","doc173":"Nicht verfügbare Gutscheine","doc174":"Bargeldgutschein für die Vermögensverwaltung","doc175":"sofort verwenden","doc176":"Coupon nicht verfügbar, Grund:","doc177":"mein Rabattgutschein","doc178":"Öffnen Sie die Blindbox, um Geldprämien zu erhalten","doc179":"Währungsmarkt","doc180":"Community-Belohnungen","doc181":"Teammitglied","doc182":"Sondergebiet","doc183":"Upgrade-Level","doc184":"mein Rabattgutschein","doc185":"Glückwunsch","doc186":"Bei der Durchführung von \\"Finanzmanagement und Investitionen\\" können Sie Bargeldgutscheine zum Abzug verwenden","doc187":"ein anderes reinstecken","doc188":"finanzielles Einkommen","doc189":"Empfehlungsprämien","doc190":"Teamvorteile","doc191":"Analyse des Mitgliederstands (drei Generationen)","doc192":"Anzahl der Personen","doc193":"direkte Push-Mitglieder","doc194":"Produkt kaufen","doc195":"Mindestfinanzbetrag","doc196":"Maximaler Finanzverwaltungsbetrag","doc197":"Produkte","doc198":"Erste Gen","doc199":"Zweite Gen","doc200":"Dritte Gen","doc201":"Investierter Betrag","doc202":"Aktivitätszeitraum","doc203":"Ändern Sie das Login-Passwort und das Transaktionspasswort löst den Fondsschutzmechanismus aus. Nach 48 Stunden wird der Fondsschutzstatus automatisch freigegeben und der normale Auszahlungsprozess beginnt","doc204":"1. Um illegale Geldwäscheaktivitäten zu verhindern, können Benutzer kein Bargeld abheben, ohne Vermögensverwaltungsprodukte zu kaufen","doc205":"2. Für jede Auszahlung wird eine feste Gebühr erhoben","doc206":"u Die Bearbeitungsgebühr wird als Mittel für den Plattformbetrieb verwendet","doc207":"3. Der Betrag jeder Auszahlung richtet sich nach dem tatsächlichen Festbetrag der Plattform, und für jede Stufe wird die entsprechende Einkommenssteuer abgezogen. Je höher die Stufe, desto niedriger der Einkommensteuersatz","doc208":"Einkommensteuerregeln","doc209":"Einkommensteuersatz der Klasse","doc210":"Ihr neues Passwort muss sich von Ihrem alten Passwort unterscheiden","doc211":"Verifiziert","doc212":"Konto löschen","doc213":"Bestätigen Sie, um das TTMD-Konto zu löschen","doc214":"Bitte lesen Sie die folgenden Regeln, bevor Sie Ihr TTMD-Konto löschen:","doc215":"Nach dem Löschen des Kontos werden alle Transaktionsdatensätze, Benutzervermögen, Erträge aus Investitionen, Informationen zur Identitätsprüfung und Bankkontobindung im Konto gelöscht und auf Null zurückgesetzt.","doc216":"Um den Verlust Ihres Vermögens zu vermeiden, stellen Sie bitte sicher, dass sich kein Guthaben auf dem Konto befindet:","doc217":"Klicken Sie unten auf die Schaltfläche \\"OK\\". Dies bedeutet, dass Sie die Informationen gelesen haben und damit einverstanden sind","doc218":"Löschen bestätigen","doc219":"Regel","doc220":"Aufzeichnen","doc221":"Rest","doc222":"Laden Sie Freunde ein","doc223":"Blindbox","doc224":"Extrakt","doc225":"Erlauben Sie Minderjährigen nicht, das Gerät unter der Aufsicht und Anleitung eines Erziehungsberechtigten zu nutzen oder zu nutzen","doc226":"Abgelaufen","doc227":"Gebraucht","doc228":"Tägliches Einkommen, fällige Rückzahlung","doc229":"Kapitalrückzahlung und Zinsen bei Fälligkeit","doc230":"Kontopasswort merken","doc231":"Steuersatz","doc232":"Vierte Generation","doc233":"Fünfte Generation","doc234":"Sechste Generation","doc235":"Siebte Generation","doc236":"Achte Generation","doc237":"Neunte Generation","doc238":"Zehnte Generation"},"page3":{"doc1":"Google Authenticator","doc2":"Sicherheitsüberprüfung","doc3":"Google-Bestätigungscode","doc4":"Bitte geben Sie den Google-Bestätigungscode ein","doc5":"OK","doc6":"Google-Bestätigungsschalter","doc7":"Nicht authentifiziert","doc8":"Authentifiziert","doc9":"Google-Bestätigungsschalter","doc10":"Bitte binden Sie zuerst Google Authenticator","doc11":"Erster Schritt","doc12":"Bitte laden Sie Google Authenticator aus dem Mobile App Store herunter","doc13":"Schritt 2","doc14":"Scannen Sie den QR-Code zur Bindung über Google Authenticator","doc15":"Schlüssel kopieren","doc16":"Schritt 3","doc17":"Bitte geben Sie den Google-Bestätigungscode ein","doc18":"Bindung bestätigen","doc19":"Heiße Vorhersagen","doc20":"Mehr anzeigen","doc21":"Entsperrt","doc22":"{K}Freigeschaltet","doc23":"Rücklaufquote in den letzten 7 Tagen","doc24":"Gewahrsamszeitraum","doc25":"Anzahl der Treuhänder","doc26":"Gesamtverwahrungsertrag","doc27":"{k} Tage","doc28":"Gewinner","doc29":"24h Vol","doc30":"24h-Änderung","doc31":"24H-Umsatz","doc32":"Begleiter","doc33":"Einladungsrabatt","doc34":"Schnell Gewinne erzielen","doc35":"Mitgliedsebene","doc36":"Transaktionen starten","doc37":"Gitter","doc38":"Quantifizierung","doc39":"Quantitative Reihenfolge","doc40":"Strategisches Einkommen","doc41":"Freischaltbar","doc42":"Investitionsbetrag","doc43":"Investitionsumfang","doc44":"Investmentfonds","doc45":"Investitionsbetrag"},"page4":{"doc1":"aktuell","doc2":"Hoch","doc3":"niedrig","doc4":"Eröffnungspreis","doc5":"Transaktionsvolumen","doc6":"1 Minute","doc7":"5 Minuten","doc8":"15 Minuten","doc9":"30 Minuten","doc10":"1 Stunde","doc11":"1 Tag","doc12":"1 Woche","doc13":"Sicherheitsüberprüfung (wählen Sie eine der folgenden beiden)","doc14":"Senden","doc15":"Bitte geben Sie ein neues Passwort ein","doc16":"Bitte geben Sie das neue Passwort erneut ein","doc17":"Angekommene Menge","doc18":"Auszahlungsgebühr","doc19":"Zeitlich begrenztes Privileg","doc20":"Tagesfreie Währungsbearbeitungsgebühr","doc21":"Mindestauszahlungsbetrag","doc22":"Maximaler Auszahlungsbetrag","doc23":"Sie haben bereits kostenlose Abhebungen","doc24":"Menge","doc25":"Adresse","doc26":"Datum","doc27":"Details","doc28":"Verfügbarer Betrag","doc29":"Eingefrorener Betrag","doc30":"Asset-Details","doc31":"Video-Tutorial","doc32":"Erfahrung","doc33":"Online-Verdienen","doc34":"Intelligente Strategie","doc35":"Preisspanne","doc36":"Handelsregeln anzeigen","doc37":"Laden Sie ETH über die Cross-Chain-Brücke vom Ethereum-Hauptnetzwerk in das zkSync Era-Netzwerk auf, und Sie können die DApp-Interaktion als Netzwerkgebühren erleben","doc38":"Intelligente Einstellungen","doc39":"Gittertyp","doc40":"Bitte auswählen","doc41":"Typ","doc42":"Investitionsbetrag","doc43":"Nutzbare Informationen","doc44":"Betrag, der investiert werden kann","doc45":"Details werden veröffentlicht","doc46":"Bestelldatensatz","doc47":"Bestellung erstellen","doc48":"Intelligente Strategie startet","doc49":"Wählen Sie eine Strategie","doc50":"Intelligente Strategie","doc51":"ETH vom Ethereum-Mainnet über die Cross-Chain-Brücke in das zkSync Era-Netzwerk einzahlen","doc52":"Geöffnet","doc53":"Kumulierter Betrag, der freigegeben werden soll","doc54":"Akkumulation wurde freigegeben","doc55":"Kumulierter Betrag, der freigegeben werden soll","doc56":"Tagesstrategieertrag","doc57":"Datensatz soll veröffentlicht werden","doc58":"Typ","doc59":"alle","doc60":"alle","doc61":"Auswählen","doc62":"Noch keine Daten!","doc63":"Investitionsbetrag","doc64":"Gewinnbetrag","doc65":"Kaufplattform","doc66":"Verkaufsplattform","doc67":"Preis kaufen","doc68":"Marktpreis","doc69":"Ausgabewährung","doc70":"Abschlusszeit","doc71":"Auswählen","doc72":"Aufzeichnen","doc73":"Aufladen wird freigegeben","doc74":"Strategische Rückführungsgelder werden freigegeben","doc75":"Auswählen","doc76":"Gesamtumsatz","doc77":"Bearbeitungsgebühr","doc78":"Upgrade-Anforderungen","doc79":"Erreicht","doc80":"Effektive Mittel","doc81":"Benutzer der ersten Generation","doc82":"Benutzer der zweiten Generation","doc83":"Benutzer der dritten Generation","doc84":"Eigenkapital","doc85":"Investitionsbetrag","doc86":"Betriebszeit","doc87":"Minuten","doc88":"Anzahl der Male pro Tag","doc89":"times","doc90":"Gewinnquote","doc91":"Auszahlungsgebühr","doc92":"Kostenlose Auszahlung","doc93":"Einmal alle {k} Tage","doc94":"Mit kostenlosen Abhebungen","doc95":"Zu öffnen","doc96":"Strategie","doc97":"Gewinnbetrag","doc98":"Plattform kaufen","doc99":"Plattform verkaufen","doc100":"Verkaufspreis","doc101":"Eingabewährung","doc102":"Bitte investieren Sie den Betrag","doc103":"Quantifizierbare Mittel","doc104":"Ihr Konto verfügt derzeit über kein Guthaben","doc105":"Jetzt aufladen","doc106":"Tage bis zur kostenlosen Auszahlung","doc108":"Freizugebende","doc107":"Tage","doc109":"Stunden","doc110":"Minuten","doc111":"zweite","doc112":"Community","doc113":"Ich habe die Datenschutzvereinbarung gelesen","doc114":"Login-Passwort zurücksetzen","doc115":"Google-Bestätigungscode","doc116":"Erinnerung","doc117":"Um die Sicherheit Ihres Kontos zu gewährleisten, können Sie Geld erst 48 Stunden nach dem Zurücksetzen Ihres Login-Passworts abheben","doc118":"1. Sie können Geld abheben, nachdem Sie die Einstellung des Transaktionspassworts zum ersten Mal abgeschlossen haben<br>2. Das Transaktionspasswort wird nur für Transaktionen verwendet. Es wird empfohlen, nicht mit dem Anmeldepasswort übereinzustimmen<br>3 . Um die Sicherheit der Gelder zu gewährleisten, kann das Transaktionspasswort 48 Stunden nach der Auszahlung geändert werden<br>4. Das Transaktionspasswort darf nur eine beliebige 6-stellige Kombination von 0-9 sein und es können keine Symbole oder Buchstaben eingegeben werden.","doc119":"Nutzungsbedingungen","doc120":"Einladungen","doc121":"Einladung zum Erhalt von Einnahmen","doc122":"Bringt Sie der KI näher","doc123":"Community-Team","doc124":"Missionszentrum","doc125":"Bis zu 10000 $","doc126":"Rang","doc127":"Dieses Level wurde freigeschaltet","doc128":"Diese Ebene ist gesperrt","doc129":"Video-Tutorial","doc130":"Aufladedetails","doc131":"Bergarbeiter-Gebühr"},"page5":{"doc1":"Belohnungsdatensätze","doc2":"Grid-Upgrade-Bonus","doc3":"deutlich angeben","doc4":"Community-Teams mit 100 oder mehr Mitgliedern können Community-Teambuilding-Fonds beantragen","doc5":"Rabatt für Mitglieder der 1. Generation","doc6":"Rabatt für Mitglieder der 2. Generation","doc7":"Rabatt für Mitglieder der 3. Generation","doc8":"Freunde einladen","doc9":"Aufzeichnung der Einladungen","doc10":"Kopieren erfolgreich","doc11":"Aufgaben erledigen und Leistungen erhalten","doc12":"Der Intercept kassiert derzeit die Gesamtbelohnung:","doc13":"Fortfahren","doc14":"Ausstehend","doc15":"Einlösen","doc16":"Herzlichen Glückwunsch zum Abschluss der Missionsbelohnung","doc17":"Belohnungen anzeigen","doc18":"Langzeitmissionen","doc19":"Tägliche Missionen","doc20":"aktiver Benutzer","doc21":"ungültiger Benutzer","doc22":"Freunde einladen und mehr verdienen","doc23":"Jetzt einladen","doc24":"Fordern Sie Ihre Prämien an, sobald Ihre Einladung erfolgreich ist","doc25":"Effektive und erfolgreiche Einladungen","doc26":"man","doc26-1":"Teilnahme","doc27":"Einladung senden","doc28":"Freunde-Registrierung aufladen","doc29":"Klicken Sie hier, um Ihre Prämie einzufordern","doc30":"Beschreibung der Aktivitäten","doc31":"1. Laden Sie x Anzahl gültiger Benutzer ein, nachdem die Aufladung den xx-Betrag erreicht hat;","doc32":"2. Ihr Freund ist ein gültiger Benutzer, wenn er/sie über Ihre Einladung das erste Mal herunterlädt, sich anmeldet und sein/ihr Konto auflädt.","doc33":"3. Personen zu einer ersten Ladung einladen xx","doc34":"Beginnen Sie Ihre Reise als Community-Team","doc35":"Einladungscode","doc36":"Teilen an","doc37":"Bild speichern","doc38":"Facebook","doc39":"WhatsApp","doc40":"Telegramm","doc41":"Link kopieren","doc42":"Stornierungen","doc43":"Klarstellung","doc44":"Bitte freuen Sie sich auf","doc45":"NEWS","doc46":"Mehr","doc47":"Einstellungen anzeigen","doc48":"Schriftgröße","doc49":"Klein","doc50":"Mitte","doc51":"Groß","doc52":"Dunkler Modus","doc53":"Bestätigen","doc54":"Letzte 7 Tage","doc55":"Letzte 30 Tage","doc56":"Letzte 60 Tage","doc57":"Fast 90 Tage","doc58":"Noch keine Daten"},"kLine":{"doc1":"Zeit","doc2":"Eröffnung","doc3":"Höchststand","doc4":"Tiefststand","doc5":"Schlusskurs"},"page6":{"doc1":"Kein Konto","doc2":"Jetzt registrieren","doc3":"Hallo","doc4":"Willkommen","doc5":"Haben Sie bereits ein Konto","doc6":"Jetzt anmelden","doc7":"TTMD-Assets","doc8":"Alle Mengen","doc9":"Gemeinsame Funktionen","doc10":"Zeitfilter","doc11":"{n} Jahre","doc12":"{n} Monate","doc13":"{n} Tag","doc14":"Die Startzeit darf nicht größer als die Endzeit sein","doc15":"APP-Download","doc16":"TTMD erstklassige strategische Produkte","doc17":"Kostenlos und für die Öffentlichkeit zugänglich","doc18":"Einladungslink","doc19":"Einladungscode","doc20":"Hilfe","doc21":"Community-Team","doc22":"Effektive Anzahl der zweiten Generation + dritten Generation","doc23":"Quittungsdatensatz","doc24":"Eingegangener Betrag","doc25":"Sparschweinerlös","doc26":"Erste Generation","doc27":"Zweite Generation","doc28":"Dritte Generation","doc29":"vier Generationen","doc30":"Fünfte Generation","doc31":"Provisionssatz","doc32":"Kumulatives Einkommen","doc33":"TTMD-Punktesystem","doc34":"Partner","doc35":"Punkte","doc36":"Beförderungsprämie","doc37":"Wöchentlicher Lohn","doc38":"{n} Punkte","doc39":"Wöchentliche Aufgabe","doc40":"Übermenge","doc41":"Gesamtquantitative Mittel erhöhen","doc42":"Punkterekord","doc43":"Punkte erhöhen","doc44":"Punkte abziehen","doc45":"Filter","doc46":"TTMD-Punktesystem","doc47":"Wöchentlicher Bonus","doc48":"Intelligente Suche","doc49":"Suche","doc50":"Dieses Level ist voll","doc51":"Adresse hinzufügen","doc52":"Bitte Adresse auswählen","doc53":"Geschätzte Ankunftszeit ≈ {n} Minuten","doc54":"Mindestaufzahlung","doc55":"Mindestabhebebetrag","doc56":"Gesamtzahl der Plattformbenutzer","doc57":"Gesamttransaktionsvolumen der Plattform","doc58":"Durchschnittlicher Gewinn der Plattform","doc59":"Registrierter Benutzer","doc60":"24-Stunden-Handelsvolumen","doc61":"Monatliche Rendite","doc62":"Aktivitätsübersicht","doc63":"Sechste Generation","doc64":"Siebte Generation","doc65":"Achte Generation","doc66":"Neunte Generation","doc67":"Zehnte Generation","doc68":"Offizielle Zertifizierung","doc69":"Authentifizierungsmethode","doc70":"Bitte geben Sie Telegram ein","doc71":"Bitte geben Sie whatsapp ein","doc72":"Zertifizierung bestanden","doc73":"Authentifizierung fehlgeschlagen","doc74":"Erneute Authentifizierung","doc75":"Verstanden","doc76":"Bleiben Sie dran","doc77":"Auszahlung stornieren","doc78":"Möchten Sie die Auszahlung wirklich stornieren?"},"tpage":{"doc1":"Technology Empower","doc2":"Die Welt ist zum Greifen nah","doc3":"Intelligente Einstellungen","doc4":"Stufen","doc5":"Höhere Renditen erzielen","doc6":"Klicken Sie unten auf OK","doc7":"Schaltfläche Löschen","doc8":"Das bedeutet, dass Sie gelesen und zugestimmt haben","doc999":""},"app":{"text":"Hinweis: Während des Download- und Installationsvorgangs kommt es zu ungewöhnlichen Situationen wie Downloadfehlern, Installationspaketfehlern und Installationsfehlern. Bitte laden Sie den Download herunter und installieren Sie ihn erneut.","downs":"herunterladen","cs":""},"lucky":{"doc1":"Mein Preis","doc2":"Lotterieregeln","doc3":"Glückswert","doc4":"Anzahl der Ziehungen","doc5":"Es gibt {n} weitere Lotteriemöglichkeiten","doc6":"Kumulative Anzahl der Ziehungen","doc7":"Ermitteln Sie die Anzahl der Ziehungen","doc8":"Um den Nutzern ihre feste Unterstützung und Liebe zu CoinPlex zu danken, haben wir die G2-Lotterie für den Hauptpreis 2023 ins Leben gerufen. Gleichzeitig haben wir ein Punktesystem hinzugefügt, um das Lotterieerlebnis der Nutzer zu verbessern. Je größer die Zahl, desto höher die Belohnungspunkte. Je höher die Belohnungspunkte, desto höher ist die Chance, großzügige Preise zu gewinnen, und es warten mehr Preise auf Sie!","doc9":"Unboxing","doc10":"Herzlichen Glückwunsch, Sie haben den Preis gewonnen","doc11":"Unzureichende Anzahl an Ziehungen, bitte Freunde einladen","doc12":"Mein Preis","doc13":"Schon wieder Lotterie","doc14":"Anzahl der verbleibenden Ziehungen","doc15":"Preis","doc16":"time","doc17":"Ausstellungsstatus","doc18":"Ausgestellt","doc19":"Manager kontaktieren","doc20":"Nicht empfangen","doc21":"Lotterietyp","doc22":"Belohnung wird {n} Mal verlost","doc23":"{n} Mal erhalten","doc24":"Glücksrad","doc25":"Lotterie angekündigt","doc26":"Regelbeschreibung","doc27":"Öffne die Schatztruhe","doc28":"Blindbox-Aufnahme","doc29":"Bei der Durchführung von \\"Teamvorteilen\\" können Sie das Beschleunigungspaket verwenden, um weitere Vorteile zu erhalten","doc30":"Aufzeichnung der Lotteriezeiten","doc31":"Überraschungs-Blindbox","doc32":"Die Preise warten auf Sie","doc33":"Fehlgeschlagen","doc34":"Preisvorschau","doc35":"Freunde einladen","doc36":"Erhalten Sie mehr Lotteriezeiten"},"new":{"doc1":"E-Mail binden","doc2":"Wenn Sie die E-Mail nicht erhalten, überprüfen Sie bitte Ihre Spam-E-Mail","doc3":"Alte E-Mail","doc4":"Neue E-Mail","doc5":"E-Mail ändern","doc6":"Bitte geben Sie Ihre E-Mail-Adresse ein","doc7":"Bitte geben Sie den Bestätigungscode ein","doc8":"E-Mail-Bestätigung","doc9":"Hinweis","doc10":"Das Konto ist nicht an eine E-Mail-Adresse gebunden und das Passwort kann nicht über die E-Mail-Adresse zurückgesetzt werden. Bitte wenden Sie sich an den Kundendienst, um das Login-Passwort zu ändern.","doc11":"Noch kein Kontakt","doc12":"Kundendienst kontaktieren","doc13":"Wachstumsverhältnis der letzten Woche","doc14":"Aktuelles wöchentliches Wachstum","doc15":"Systemaufforderung","doc16":"Kundendienstmanager kontaktieren","doc17":"Auftragsabgleich fehlgeschlagen, bitte versuchen Sie es in {n} Tagen erneut. Für weitere Informationen wenden Sie sich bitte an den Kundendienstleiter.","doc18":"Auftragsabgleich, nur Strategieaufträge, geschätzte Fertigstellungszeit {n} Minuten","doc19":"Bitte eingeben","doc20":"Senden","doc21":"Denken...","doc22":"Zeitüberschreitung der WSS-Verbindung","doc23":"Bei der TCP-Verbindung ist eine Zeitüberschreitung aufgetreten. Die Seite wird nach 3 Sekunden automatisch aktualisiert","doc24":"KI-Dialogverlauf","doc25":"Sitzungsaufzeichnungen löschen","doc26":"Neue Sitzung erstellen","doc27":"Die aktuelle Sitzung ist noch nicht beendet, es können keine neuen Einträge vorgenommen werden","doc28":"Dialog mit KI-intelligentem Roboter","doc29":"Ändern","doc30":"Adresse ändern","doc31":"Bitte geben Sie den E-Mail-Bestätigungscode ein","doc32":"Sie haben einen Auszahlungsantrag","doc33":"Möchten Sie die Auszahlung wirklich stornieren?","doc34":"Ja","doc35":"Nein","doc36":"Gehe zum Bind-Postfach","doc37":"Vertragsversprechen","doc38":"Finanzprodukte","doc39":"Mein Finanzmanagement","doc40":"Benutzer -ID: {N1} in {N2} Pledge {N3} USDT","doc41":"Bitte wählen Sie den Versprechensbereich","doc42":"Bitte wählen Sie den Versprechensbereich","doc43":"Bitte wählen Sie die Versprechenszeit","doc44":"Stakelebereich","doc45":"Teilnahmefonds","doc46":"verfügbar","doc47":"Total Lock-up erwartete Belohnung","doc48":"Tägliche Rendite","doc49":"Kaufen Sie Zeit","doc50":"Start Interesseberechnung","doc51":"Erster Gewinn","doc52":"Letzter Gewinn","doc53":"Rot zum Konto","doc54":"gelesen und vereinbart","doc55":"Bestätigen Sie zu kaufen","doc56":"Übersicht","doc57":"Finanzregeln","doc58":"Serieninvestition","doc59":"Total Versprechen","doc60":"Total Historical Income","doc61":"Das heutige Einkommen","doc62":"Redten","doc63":"Stakeln","doc64":"Abgelaufen","doc65":"Kaufen Sie Zeit","doc66":"Einlösbare Zeit","doc67":"Versprechen","doc68":"Versprechensmenge","doc69":"Kumulatives Einkommen","doc70":"Das heutige Einkommen","doc71":"REDIFICATION -Bestätigung","doc72":"REDEN VORBESTELLUNG","doc73":"Kumulatives Einkommen","doc74":"Transaktionsgebühr","doc75":"Einlöste","doc76":"Ablauf","doc77":"Konto Login","doc78":"Kontoregistrierung","doc79":"Über","doc80":"Social Media","doc81":"Mein Einkommen","doc82":"Laden Sie Freunde ein","doc83":"Lade Freunde ein und verdiente zusammen Münzen","doc84":"Geh zur Einladung","doc85":"Mein Level","doc86":"Bearbeiten","doc87":"Kontoinformationen","doc88":"Friends einladen, <spannung> Ohrgeld zusammen </span>","doc89":"Lade Freunde ein, Mitglieder deiner Community zu sein","doc90":"Friends zum Einkommen einladen","doc91":"Einladungsmethode","doc92":"VIP -Ebene","doc93":"Einladungsaufzeichnung","doc94":"Einladungsliste","doc95":"Zeit registrieren","doc96":"Konto","doc97":"Umsatzverteilung","doc98":"Release -Datensatz","doc99":"Zertifikatsinformationen","doc100":"Frontfoto der ID -Karte","doc101":"Umgekehrter Foto der ID -Karte","doc102":"Handheld -ID -Foto","doc103":"Nach der Einreichung der Zertifizierung muss es auf eine manuelle Überprüfung warten und die Überprüfungszeit innerhalb von 72 Stunden abgeschlossen wird.","doc104":"Bitte laden Sie JPG, JPEG, PNG -Formatdateien weniger als 10 MB hoch","doc105":"erfolgreich eingereicht","doc106":"Die echte Authentifizierung wird erfolgreich eingereicht! Nachdem die Authentifizierung eingereicht wurde, müssen Sie auf die manuelle Überprüfung warten. Die Überprüfungszeit ist innerhalb von 72 Stunden abgeschlossen. Bitte warten Sie geduldig.","doc107":"Ich habe es","doc108":"Um die Adresse zu ändern oder zu löschen, wenden Sie sich bitte an den Kundendienst","doc109":"Wiederauf belebt","doc110":"Die Zertifizierungsinformationen wurden eingereicht und der Administrator wird überprüft. Die Überprüfung wird voraussichtlich innerhalb von <span> 72 </span> Stunden abgeschlossen sein.","doc111":"<Pan> Grund zur Ablehnung: </span> {n1}","doc112":"Sie haben die echte Authentifizierung abgeschlossen.","doc113":"Warten auf die Überprüfung","doc114":"Verschwinden","doc115":"Zertifizierung ist erfolgreich","doc116":"Über uns","doc117":"Folge uns","doc118":"Erhalten Sie Informationen aus erster Hand über das Projekt und erhalten Sie in Echtzeit-Online-Kundendienstunterstützung","doc119":"Hallo!","doc120":"Wir sind hier, um Ihnen zu helfen","doc121":"Mein Team","doc122":"Intelligente AI -Quantifizierung","doc123":"An der Spitze der Technologie und der Finanzierung steht und eine stetige Multiplikation von Vermögenswerten erreichen","doc124":"Details anzeigen","doc125":"Hot News","doc126":"Teaminformationen","doc127":"{N1} Generation","doc128":"Kryptowährungsmarkt","doc129":"Markt","doc130":"Bill","doc131":"Bitte wählen Sie das Hauptnetzwerk","doc132":"Diese Adresse unterstützt nur {N2} von Wiederaufnahmen {n1}","doc133":"Die E -Mail -Adresse wurde gebunden. Bitte wenden Sie sich an den offiziellen Kundendienst, um die E -Mail -Adresse zu verarbeiten, wenn Sie die E -Mail -Adresse geändert oder gelöscht haben","doc134":"Das Mobiltelefon wurde gebunden.","doc135":"Open Authenticator App","doc136":"Bitte laden Sie die Authenticator -App (z. B. Google \\n Authenticator ) im mobilen App Store herunter.","doc137":"Bindungsschlüssel","doc138":"Klicken Sie auf das Symbol\\"+\\"in der Authenticator -App, geben Sie den folgenden Schlüssel ein oder binden Sie den Schlüssel, indem Sie den Code scannen.","doc139":"Öffnen Sie die Authenticator -App, scannen Sie den Code, um zu binden","doc140":"Es hat dieses Level erreicht","doc141":"Unlocked","doc142":"Levels sind erfüllt","doc143":"USDT Balance","doc144":"{N1} Generation Gültige Benutzer","doc145":"Nicht erreicht","doc146":"Level Rights and Equity","doc147":"Team Revenue Algebra","doc148":"{N1} Generation","doc149":"Strategischer Handel","doc150":"Kontosaldo","doc151":"Bill Details","doc152":"Warten auf Terminergebnisse","doc153":"Termin nicht gewonnen","doc154":"Bestellung ist voll, versuchen Sie es morgen erneut","doc155":"OK","doc156":"Herzlichen Glückwunsch zur erfolgreichen Ernennung","doc157":"Termin ist erfolgreich, bitte halten Sie Ihr Brieftaschenbalance ausreichend","doc158":"Name der Terminpolitik","doc159":"Strategische Lock-In-Menge","doc160":"Strategien werden voraussichtlich verdienen","doc161":"Richtlinie ausführen","doc162":"Wenn die KI -Richtlinie nicht ausgeführt wird, stimmt das System automatisch mit der KI -Richtlinie überein und führt sie in 5 Minuten aus","doc163":"Die Barauszahlung kann momentan nicht eingeleitet werden","doc164":"Binding Mailbox","doc165":"Akkumulierte Aufladung von 35USDT","doc166":"Die Barauszahlung kann nach 3 Stunden Politikausführung eingeleitet werden","doc167":"Der nächste Rückzug kann nach 48 Stunden nach dem vorherigen Rückzug initiiert werden","doc168":"Eine überprüfte Auszahlungsanordnung","doc169":"Dobind","doc170":"Gehen Sie zur Aufladung","doc171":"Keine Aufforderung mehr","doc172":"Ich habe es verstanden","doc173":"Erleben Sie Gold","doc174":"Anzahl der neuen Teams heute","doc175":"Neue Teameinnahmen heute","doc176":"Diese Ebene der Ebene trifft sich nicht","doc177":"Angesammelte Handelseinkommen","doc178":"Das heutige Handelseinkommen","doc179":"Aufgelaufene Gemeinschaftsleistungen","doc180":"Heutiges Gemeinschaftseinkommen","doc181":"Veröffentlicht werden","doc182":"veröffentlicht","doc183":"Einnahmenaufzeichnung","doc184":"Ja","doc185":"Nein","doc186":"Total Asset Bewertung","doc187":"Ausführungsrichtlinienbetrag","doc188":"Richtlinienname","doc189":"Datum der Erstellung von Richtlinien","doc190":"Strategische Ausführungsplattform","doc191":"Handelspaar","doc192":"Richtlinientyp","doc193":"Strategischer Ausführungszyklus","doc194":"Termin","doc195":"Termin fehlgeschlagen","doc196":"Kann später wieder einen Termin vereinbaren","doc197":"Ausführung abgeschlossen","doc198":"Richtlinienausführung","doc199":"Nach enden Ausführung","doc200":"Betrag des Einkommens","doc201":"Stunde","doc202":"Umsatzverteilungszeit","doc203":"Ausführungsbetrag Release -Zeit","doc204":"OTC Market Maker (Mittelwertumkehr)","doc205":"Ausführungsende","doc206":"nicht abgelehnt","doc207":"Cleared","doc208":"Ausführungsstatus","doc209":"Bestellnummer","doc210":"Der Restbetrag ist unzureichend, bitte zuerst aufladen","doc211":"Teameinkommen der 1. Generation","doc212":"Teameinkommen der 2. Generation","doc213":"Team Profit der 3. Generation","doc214":"Laufend","doc215":"KI-Strategie","doc216":"Strategie-Rechnung","doc217":"Neu heute","doc218":"2. Generation + 3. Generation Effektive Anzahl der Benutzer","doc219":"Nicht dieses Level erreicht","doc220":"Anzahl effektiver Benutzer für 1 Generation","doc221":"Aufzeichnen","doc222":"Meine Gemeinschaft","doc223":"Community List","doc224":"Erststufer Agent","doc225":"Zweiter Agent","doc226":"Agent der dritten Ebene","doc227":"Gesamtvermögen","doc228":"Level","doc229":"Markt","doc230":"Stufe 1 Agent","doc231":"Agent der zweiten Ebene","doc232":"Stufe 3 Agent","doc233":"Filter","doc234":"Terminbetrag","doc235":"Geschätzte Einkommen","doc236":"Strategischer Betrag","doc237":"Terminbetrag","doc238":"Die Bedingung ist nicht erfüllt","doc239":"{N1} Generation {N2} Benutzer","doc240":"Minuten","doc241":"Lumex Academy","doc242":"Algorithmusreihenfolge","doc243":"Gemeindenummer","doc244":"Gemeinschaftsvorteile","doc245":"Community-Mitglieder","doc246":"Gemeinschaftseinkommen","doc247":"Heutige Community-Updates","doc248":"Heutiges Gemeinschaftseinkommen","doc249":"Empfehlungsbelohnung","doc250":"Community-Informationen","doc251":"Anzahl der effektiven M1-Benutzer","doc252":"M2+M3 steigert effektiv die Anzahl der Benutzer","doc253":"Algorithmus -Transaktionsgeschichte","doc254":"Laufende Regeln","doc255":"Video-Tutorial","doc256":"Anzahl der Personen in der Community","doc257":"Gemeinschaftsvorteile","doc258":"Heutige Community-Updates","doc259":"Heutiges Gemeinschaftseinkommen","doc260":"Community-Mitglieder","doc261":"Transaktionsbetrag","doc262":"Täglich geplante Transaktionen","doc263":"Gasgebühr für Abhebung","doc264":"Einzelabhebung","doc265":"Community-Belohnungen","doc266":"Token-Volumen","doc267":"Asset-Sperre","doc268":"Zu entsperren","doc269":"Online-Kundenservice","doc270":"Gelder können reserviert werden","doc271":"Läuft","doc272":"Wallet-Guthaben","doc273":"Level erfüllt nicht die Bedingungen","doc274":"Terminzeit","doc275":"Transaktion läuft","doc276":"Bestellpreis","doc277":"Erwartete Rendite","doc278":"Ausführungszyklus","doc279":"Verbleibende Zeit","doc280":"Bestellungsumfang","doc281":"Gewinnabrechnung","doc283":"Kein Erfahrungsgold zum Handeln verfügbar","doc284":"Kein Termin erforderlich","doc285":"Erreicht","doc286":"Nicht erreicht","doc287":"Nächste Buchungszeit","doc288":"{n}{n2} Mitglieder von {n1}","doc289":"Transaktionsbetrag","doc290":"Transaktion drei Parteien","doc291":"Terminpreis","doc292":"Transaktionspreis","doc293":"OTC-Market-Maker","doc294":"Transaktionsbetrag","doc295":"Transaktionsbetrag","doc296":"Höchster Preis","doc297":"Transaktionsbetrag","doc298":"Teamgröße","doc299":"Gesamtbelohnung","doc300":"Heutiges Einkommen","doc301":"Einkommen dieses Monats","doc303":"Teamdaten","doc304":"Ihre Bestellung","doc305":"Termin läuft"},"new1":{"doc0":"Bestellnummer","doc1":"Startzeit","doc2":"Ausführungsstatus","doc3":"Strategieplattform","doc4":"Transaktionswährung","doc5":"Richtlinientyp","doc6":"Ausführungszyklus","doc7":"Für Reservierungen verfügbarer Betragsbereich","doc8":"Tatsächlicher Reservierungsbetrag","doc9":"Bestellumsatz","doc10":"Zeitpunkt der Mittelfreigabe"}}')
    },
    9068: function(e, o, i) {
        "use strict";
        o.__esModule = !0, o.default = void 0;
        var a = {
            name: "이름",
            tel: "전화",
            save: "저장",
            confirm: "확인하다",
            cancel: "취소",
            delete: "삭제",
            complete: "마치다",
            loading: "로딩 중...",
            telEmpty: "请填写电话",
            nameEmpty: "请填写姓名",
            nameInvalid: "请输入正确的姓名",
            confirmDelete: "确定要删除吗",
            telInvalid: "请输入正确的手机号",
            vanCalendar: {
                end: "끝",
                start: "시작",
                title: "날짜 선택",
                confirm: "확신하는",
                startEnd: "시작 끝",
                weekdays: ["일", "월", "화", "수", " 목", "금", "토요일"],
                monthTitle: function(e, o) {
                    return e + "年" + o + "月"
                },
                rangePrompt: function(e) {
                    return "选择天数不能超过 " + e + " 天"
                }
            },
            vanCascader: {
                select: "선택해주세요"
            },
            vanContactCard: {
                addText: "添加联系人"
            },
            vanContactList: {
                addText: "新建联系人"
            },
            vanPagination: {
                prev: "上一页",
                next: "下一页"
            },
            vanPullRefresh: {
                pulling: "아래로 당겨 새로 고침...",
                loosing: "새로고침하려면 해제..."
            },
            vanSubmitBar: {
                label: "合计："
            },
            vanCoupon: {
                unlimited: "无使用门槛",
                discount: function(e) {
                    return e + "折"
                },
                condition: function(e) {
                    return "满" + e + "元可用"
                }
            },
            vanCouponCell: {
                title: "优惠券",
                tips: "暂无可用",
                count: function(e) {
                    return e + "张可用"
                }
            },
            vanCouponList: {
                empty: "暂无优惠券",
                exchange: "兑换",
                close: "不使用优惠券",
                enable: "可用",
                disabled: "不可用",
                placeholder: "请输入优惠码"
            },
            vanAddressEdit: {
                area: "地区",
                postal: "邮政编码",
                areaEmpty: "请选择地区",
                addressEmpty: "请填写详细地址",
                postalEmpty: "邮政编码格式不正确",
                defaultAddress: "设为默认收货地址",
                telPlaceholder: "收货人手机号",
                namePlaceholder: "收货人姓名",
                areaPlaceholder: "选择省 / 市 / 区"
            },
            vanAddressEditDetail: {
                label: "详细地址",
                placeholder: "街道门牌、楼层房间号等信息"
            },
            vanAddressList: {
                add: "新增地址"
            }
        };
        o.default = a
    },
    "9ce2": function(e, o, i) {
        i("d9e2"), i("14d9"),
            function(e) {
                "use strict";
                if ("undefined" === typeof e) throw new Error("Geetest requires browser environment");
                var o = e.document,
                    i = e.Math,
                    a = o.getElementsByTagName("head")[0];

                function n(e) {
                    this._obj = e
                }

                function t(e) {
                    var o = this;
                    new n(e)._each((function(e, i) {
                        o[e] = i
                    }))
                }
                n.prototype = {
                    _each: function(e) {
                        var o = this._obj;
                        for (var i in o) o.hasOwnProperty(i) && e(i, o[i]);
                        return this
                    }
                }, t.prototype = {
                    api_server: "api.geetest.com",
                    protocol: "http://",
                    typePath: "/gettype.php",
                    fallback_config: {
                        slide: {
                            static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
                            type: "slide",
                            slide: "/static/js/geetest.0.0.0.js"
                        },
                        fullpage: {
                            static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
                            type: "fullpage",
                            fullpage: "/static/js/fullpage.0.0.0.js"
                        }
                    },
                    _get_fallback_config: function() {
                        var e = this;
                        return c(e.type) ? e.fallback_config[e.type] : e.new_captcha ? e.fallback_config.fullpage : e.fallback_config.slide
                    },
                    _extend: function(e) {
                        var o = this;
                        new n(e)._each((function(e, i) {
                            o[e] = i
                        }))
                    }
                };
                var d = function(e) {
                        return "number" === typeof e
                    },
                    c = function(e) {
                        return "string" === typeof e
                    },
                    r = function(e) {
                        return "boolean" === typeof e
                    },
                    s = function(e) {
                        return "object" === typeof e && null !== e
                    },
                    l = function(e) {
                        return "function" === typeof e
                    },
                    u = /Mobi/i.test(navigator.userAgent),
                    m = u ? 3 : 0,
                    p = {},
                    g = {},
                    h = function() {
                        var e = new Date,
                            o = e.getFullYear(),
                            i = e.getMonth() + 1,
                            a = e.getDate(),
                            n = e.getHours(),
                            t = e.getMinutes(),
                            d = e.getSeconds();
                        i >= 1 && i <= 9 && (i = "0" + i), a >= 0 && a <= 9 && (a = "0" + a), n >= 0 && n <= 9 && (n = "0" + n), t >= 0 && t <= 9 && (t = "0" + t), d >= 0 && d <= 9 && (d = "0" + d);
                        var c = o + "-" + i + "-" + a + " " + n + ":" + t + ":" + d;
                        return c
                    },
                    f = function() {
                        return parseInt(1e4 * i.random()) + (new Date).valueOf()
                    },
                    v = function(e, i) {
                        var n = o.createElement("script");
                        n.charset = "UTF-8", n.async = !0, /static\.geetest\.com/g.test(e) && (n.crossOrigin = "anonymous"), n.onerror = function() {
                            i(!0)
                        };
                        var t = !1;
                        n.onload = n.onreadystatechange = function() {
                            t || n.readyState && "loaded" !== n.readyState && "complete" !== n.readyState || (t = !0, setTimeout((function() {
                                i(!1)
                            }), 0))
                        }, n.src = e, a.appendChild(n)
                    },
                    b = function(e) {
                        return e.replace(/^https?:\/\/|\/$/g, "")
                    },
                    z = function(e) {
                        return e = e.replace(/\/+/g, "/"), 0 !== e.indexOf("/") && (e = "/" + e), e
                    },
                    A = function(e) {
                        if (!e) return "";
                        var o = "?";
                        return new n(e)._each((function(e, i) {
                            (c(i) || d(i) || r(i)) && (o = o + encodeURIComponent(e) + "=" + encodeURIComponent(i) + "&")
                        })), "?" === o && (o = ""), o.replace(/&$/, "")
                    },
                    y = function(e, o, i, a) {
                        o = b(o);
                        var n = z(i) + A(a);
                        return o && (n = e + o + n), n
                    },
                    w = function(e, o, i, a, n, t, d) {
                        var c = function(r) {
                            var s = y(i, a[r], n, t);
                            v(s, (function(t) {
                                if (t)
                                    if (r >= a.length - 1) {
                                        if (d(!0), o) {
                                            e.error_code = 508;
                                            var s = i + a[r] + n;
                                            k(e, s)
                                        }
                                    } else c(r + 1);
                                else d(!1)
                            }))
                        };
                        c(0)
                    },
                    S = function(o, i, a, n) {
                        if (s(a.getLib)) return a._extend(a.getLib), void n(a);
                        if (a.offline) n(a._get_fallback_config());
                        else {
                            var t = "geetest_" + f();
                            e[t] = function(o) {
                                "success" == o.status ? n(o.data) : o.status ? n(a._get_fallback_config()) : n(o), e[t] = void 0;
                                try {
                                    delete e[t]
                                } catch (i) {}
                            }, w(a, !0, a.protocol, o, i, {
                                gt: a.gt,
                                callback: t
                            }, (function(e) {
                                e && n(a._get_fallback_config())
                            }))
                        }
                    },
                    k = function(e, o) {
                        w(e, !1, e.protocol, ["monitor.geetest.com"], "/monitor/send", {
                            time: h(),
                            captcha_id: e.gt,
                            challenge: e.challenge,
                            pt: m,
                            exception_url: o,
                            error_code: e.error_code
                        }, (function(e) {}))
                    },
                    P = function(e, o) {
                        var i = {
                            networkError: "网络错误",
                            gtTypeError: "gt字段不是字符串类型"
                        };
                        if ("function" !== typeof o.onError) throw new Error(i[e]);
                        o.onError(i[e])
                    },
                    T = function() {
                        return e.Geetest || o.getElementById("gt_lib")
                    };
                T() && (g.slide = "loaded"), e.initGeetest = function(o, i) {
                    var a = new t(o);
                    o.https ? a.protocol = "https://" : o.protocol || (a.protocol = e.location.protocol + "//"), "050cffef4ae57b5d5e529fea9540b0d1" !== o.gt && "3bd38408ae4af923ed36e13819b14d42" !== o.gt || (a.apiserver = "yumchina.geetest.com/", a.api_server = "yumchina.geetest.com"), o.gt && (e.GeeGT = o.gt), o.challenge && (e.GeeChallenge = o.challenge), s(o.getType) && a._extend(o.getType), S([a.api_server || a.apiserver], a.typePath, a, (function(o) {
                        var n = o.type,
                            t = function() {
                                a._extend(o), i(new e.Geetest(a))
                            };
                        p[n] = p[n] || [];
                        var d = g[n] || "init";
                        "init" === d ? (g[n] = "loading", p[n].push(t), w(a, !0, a.protocol, o.static_servers || o.domains, o[n] || o.path, null, (function(e) {
                            if (e) g[n] = "fail", P("networkError", a);
                            else {
                                g[n] = "loaded";
                                for (var o = p[n], i = 0, t = o.length; i < t; i += 1) {
                                    var d = o[i];
                                    l(d) && d()
                                }
                                p[n] = []
                            }
                        }))) : "loaded" === d ? t() : "fail" === d ? P("networkError", a) : "loading" === d && p[n].push(t)
                    }))
                }
            }(window)
    },
    "9fe1": function(e, o, i) {},
    a18c: function(e, o, i) {
        "use strict";
        var a = i("2b0e"),
            n = i("4360"),
            t = i("8c4f");
        a["a"].use(t["a"]);
        const d = new t["a"]({
            mode: "history",
            scrollBehavior(e, o, i) {
                return i || {
                    x: 0,
                    y: 0
                }
            },
            routes: [{
                path: "/",
                redirect: "/home"
            }, {
                path: "/home",
                component: () => Promise.all([i.e("core-js"), i.e("vue"), i.e("chunk-bcc45786")]).then(i.bind(null, "7abe")),
                meta: {
                    title: "title.doc1",
                    isUS: !0,
                    index: 1,
                    auth: !0
                }
            }, {
                path: "/task/index",
                component: () => Promise.all([i.e("core-js"), i.e("chunk-223d9f74"), i.e("chunk-2ce17b60")]).then(i.bind(null, "c430b")),
                meta: {
                    title: "title.doc7",
                    auth: !0
                }
            }, {
                path: "/task/record",
                component: () => i.e("chunk-56fc5a82").then(i.bind(null, "914e")),
                meta: {
                    title: "page5.doc1",
                    auth: !0
                }
            }, {
                path: "/chatai",
                component: () => Promise.all([i.e("chunk-1fa2c62c"), i.e("chunk-612bc8a5")]).then(i.bind(null, "6f29")),
                meta: {
                    title: "Lume X",
                    auth: !0
                }
            }, {
                path: "/task/Invite_friends",
                component: () => Promise.all([i.e("core-js"), i.e("qrcodejs2"), i.e("html2canvas"), i.e("chunk-4352c730")]).then(i.bind(null, "71be")),
                meta: {
                    title: "page5.doc8",
                    auth: !0
                }
            }, {
                path: "/task/invitation_record",
                component: () => i.e("chunk-0a2276bd").then(i.bind(null, "73d0")),
                meta: {
                    title: "page5.doc9",
                    auth: !0
                }
            }, {
                path: "/my",
                component: () => i.e("chunk-7f362702").then(i.bind(null, "9639")),
                meta: {
                    title: "title.doc12",
                    auth: !0
                }
            }, {
                path: "/my/address",
                component: () => i.e("chunk-6b11ef3e").then(i.bind(null, "085e")),
                meta: {
                    title: "page2.doc39",
                    auth: !0
                }
            }, {
                path: "/my/biAddress",
                component: () => Promise.all([i.e("core-js"), i.e("chunk-3553982a")]).then(i.bind(null, "510a")),
                meta: {
                    title: "page2.doc39",
                    auth: !0
                }
            }, {
                path: "/my/upVip",
                component: () => Promise.all([i.e("core-js"), i.e("vue"), i.e("chunk-0dfccd70")]).then(i.bind(null, "71f4")),
                meta: {
                    title: "title.doc13",
                    auth: !0
                }
            }, {
                path: "/my/feedback",
                component: () => i.e("chunk-b2c9775c").then(i.bind(null, "0e5e")),
                meta: {
                    title: "title.doc14",
                    auth: !0
                }
            }, {
                path: "/my/help",
                component: () => i.e("chunk-37b0eb9c").then(i.bind(null, "ca2b")),
                meta: {
                    title: "title.doc15",
                    keepAlive: !0
                }
            }, {
                path: "/my/help_view",
                component: () => i.e("chunk-fbb0ddbe").then(i.bind(null, "d9b6")),
                meta: {
                    title: "title.doc16"
                }
            }, {
                path: "/my/password_trade",
                component: () => i.e("chunk-17ff7542").then(i.bind(null, "ebb0")),
                meta: {
                    title: "title.doc17",
                    auth: !0
                }
            }, {
                path: "/my/lang",
                component: () => i.e("chunk-11f54b20").then(i.bind(null, "a8e5")),
                meta: {
                    title: "title.doc18",
                    index: 2
                }
            }, {
                path: "/my/password_login",
                component: () => i.e("chunk-b5658432").then(i.bind(null, "6b3d")),
                meta: {
                    title: "title.doc19"
                }
            }, {
                path: "/my/info",
                component: () => i.e("chunk-0a9d4c1a").then(i.bind(null, "48d3")),
                meta: {
                    title: "title.doc21",
                    auth: !0
                }
            }, {
                path: "/my/userinfo",
                component: () => i.e("chunk-179a3425").then(i.bind(null, "b59c")),
                meta: {
                    title: "new.doc87",
                    auth: !0
                }
            }, {
                path: "/my/Verified",
                component: () => i.e("chunk-55778048").then(i.bind(null, "3e12")),
                meta: {
                    title: "page.doc183",
                    auth: !0
                }
            }, {
                path: "/my/document_up",
                component: () => i.e("chunk-11cbeef1").then(i.bind(null, "6f7d")),
                meta: {
                    title: "title.doc24"
                }
            }, {
                path: "/user/login",
                component: () => Promise.all([i.e("core-js"), i.e("chunk-6f896b4e")]).then(i.bind(null, "71a8")),
                meta: {
                    title: "title.doc25"
                }
            }, {
                path: "/user/reg",
                component: () => Promise.all([i.e("core-js"), i.e("chunk-6486eece")]).then(i.bind(null, "4ac0")),
                meta: {
                    title: "title.doc26"
                }
            }, {
                path: "/user/reg2",
                component: () => Promise.all([i.e("core-js"), i.e("chunk-41993a66")]).then(i.bind(null, "6e17")),
                meta: {
                    title: "title.doc26"
                }
            }, {
                path: "/user/delete_account",
                component: () => i.e("chunk-4e5443b7").then(i.bind(null, "ddce")),
                meta: {
                    title: "page2.doc212"
                }
            }, {
                path: "/notice/index",
                component: () => i.e("chunk-06db75b0").then(i.bind(null, "ab431")),
                meta: {
                    title: "title.doc6"
                }
            }, {
                path: "/notice/list",
                component: () => i.e("chunk-2a63ff99").then(i.bind(null, "e12a")),
                meta: {
                    title: "title.doc6"
                }
            }, {
                path: "/notice/view",
                component: () => i.e("chunk-a93d254e").then(i.bind(null, "78f0")),
                meta: {
                    title: "title.doc6"
                }
            }, {
                path: "/my/invate",
                component: () => Promise.all([i.e("core-js"), i.e("qrcodejs2"), i.e("chunk-55bf73f6")]).then(i.bind(null, "584d")),
                meta: {
                    title: "title.doc27",
                    auth: !0
                }
            }, {
                path: "/user/forget_password",
                component: () => Promise.all([i.e("core-js"), i.e("chunk-709c9e2a")]).then(i.bind(null, "9f0a")),
                meta: {
                    title: "title.doc20"
                }
            }, {
                path: "/user/forget_password1",
                component: () => Promise.all([i.e("core-js"), i.e("chunk-2ad5cbd6")]).then(i.bind(null, "88f2")),
                meta: {
                    title: "title.doc20"
                }
            }, {
                path: "/downApp",
                component: () => i.e("chunk-358132a8").then(i.bind(null, "e78f")),
                meta: {
                    title: "page.doc90"
                }
            }, {
                path: "/about",
                component: () => i.e("chunk-4a5a5d5c").then(i.bind(null, "754b")),
                meta: {
                    title: "page.doc254"
                }
            }, {
                path: "/article",
                component: () => i.e("chunk-39d146b7").then(i.bind(null, "72e1")),
                meta: {
                    title: "page.doc254"
                }
            }, {
                path: "/videoList",
                component: () => Promise.all([i.e("core-js"), i.e("chunk-5913b628")]).then(i.bind(null, "befc")),
                meta: {
                    title: "page.doc254"
                }
            }, {
                path: "/my/kf",
                component: () => i.e("chunk-3cf9912c").then(i.bind(null, "30ee")),
                meta: {
                    title: "page.doc275"
                }
            }, {
                path: "/quant",
                component: () => Promise.all([i.e("core-js"), i.e("vue"), i.e("chunk-353b28dc")]).then(i.bind(null, "ed92")),
                meta: {
                    title: "title.doc2",
                    isUS: !0
                }
            }, {
                path: "/quant/topic",
                component: () => i.e("chunk-3f8e14ab").then(i.bind(null, "2480")),
                meta: {
                    title: "title.doc2",
                    isUS: !0
                }
            }, {
                path: "/quant/detail",
                component: () => i.e("chunk-5469d51a").then(i.bind(null, "ea66")),
                meta: {
                    title: "new.doc151",
                    isUS: !0
                }
            }, {
                path: "/team",
                component: () => Promise.all([i.e("echarts"), i.e("chunk-0119f9da"), i.e("chunk-bb17762c")]).then(i.bind(null, "9813")),
                meta: {
                    title: "title.doc4"
                }
            }, {
                path: "/team/record",
                component: () => i.e("chunk-27780c3e").then(i.bind(null, "6b1a")),
                meta: {
                    title: "new.doc223"
                }
            }, {
                path: "/wallet/index",
                component: () => Promise.all([i.e("echarts"), i.e("chunk-0119f9da"), i.e("chunk-0b116a05")]).then(i.bind(null, "98db")),
                meta: {
                    title: "title.doc8",
                    auth: !0
                }
            }, {
                path: "/wallet/transfer",
                component: () => i.e("chunk-8608e1ee").then(i.bind(null, "1226")),
                meta: {
                    title: "page.doc326",
                    auth: !0
                }
            }, {
                path: "/wallet/piggyBank",
                component: () => i.e("chunk-05cf8a80").then(i.bind(null, "e23c")),
                meta: {
                    title: "page.doc331",
                    auth: !0
                }
            }, {
                path: "/wallet/piggyBank/record",
                component: () => i.e("chunk-5e0ab739").then(i.bind(null, "998e")),
                meta: {
                    title: "page6.doc23",
                    auth: !0
                }
            }, {
                path: "/wallet/exchange",
                component: () => i.e("chunk-7f5eb6f1").then(i.bind(null, "c944")),
                meta: {
                    title: "page.doc328"
                }
            }, {
                path: "/wallet/aisle",
                component: () => i.e("chunk-367626f4").then(i.bind(null, "8c90")),
                meta: {
                    title: "title.doc28",
                    auth: !0
                }
            }, {
                path: "/wallet/detail",
                component: () => Promise.all([i.e("echarts"), i.e("chunk-0119f9da"), i.e("chunk-28a1e141")]).then(i.bind(null, "6418")),
                meta: {
                    title: "title.doc8",
                    auth: !0
                }
            }, {
                path: "/wallet/record",
                component: () => i.e("chunk-5412a522").then(i.bind(null, "62b8")),
                meta: {
                    title: "title.doc9"
                }
            }, {
                path: "/wallet/recharge",
                component: () => Promise.all([i.e("core-js"), i.e("qrcodejs2"), i.e("chunk-0d09da43")]).then(i.bind(null, "607d")),
                meta: {
                    title: "title.doc10",
                    auth: !0
                }
            }, {
                path: "/wallet/withdraw",
                component: () => Promise.all([i.e("core-js"), i.e("chunk-115aa5d8")]).then(i.bind(null, "6b47")),
                meta: {
                    title: "title.doc11",
                    auth: !0
                }
            }, {
                path: "/wallet/view",
                component: () => i.e("chunk-d8c53f1e").then(i.bind(null, "1cc9")),
                meta: {
                    title: "title.doc8",
                    auth: !0
                }
            }, {
                path: "/moneyManagement",
                component: () => Promise.all([i.e("echarts"), i.e("chunk-0119f9da"), i.e("chunk-7f6f1de4")]).then(i.bind(null, "95b7")),
                meta: {
                    title: "page2.doc113"
                }
            }, {
                path: "/moneyManagement/zoneDetails",
                name: "zoneDetails",
                component: () => i.e("chunk-150efc72").then(i.bind(null, "15ad"))
            }, {
                path: "/moneyManagement/financialDetails",
                name: "financialDetails",
                component: () => i.e("chunk-22ed309e").then(i.bind(null, "b0d3")),
                meta: {
                    title: "page2.doc113"
                }
            }, {
                path: "/moneyManagement/coupon",
                name: "coupon",
                component: () => i.e("chunk-3d8be4d2").then(i.bind(null, "2473"))
            }, {
                path: "/moneyManagement/investmentFinance",
                name: "investmentFinance",
                component: () => i.e("chunk-d442c3f6").then(i.bind(null, "3950"))
            }, {
                path: "/moneyManagement/financialSuccess",
                name: "financialSuccess",
                component: () => i.e("chunk-784bd9e6").then(i.bind(null, "1dfe")),
                meta: {
                    title: "page2.doc113"
                }
            }, {
                path: "/moneyManagement/financialOrder",
                name: "financialOrder",
                component: () => i.e("chunk-655f6f38").then(i.bind(null, "710a")),
                meta: {
                    title: "page2.doc113"
                }
            }, {
                path: "/blindBox/",
                component: () => i.e("chunk-56c2ea94").then(i.bind(null, "b177")),
                meta: {
                    title: "page2.doc118"
                }
            }, {
                path: "/blindBox/prize",
                component: () => i.e("chunk-3ba32d0e").then(i.bind(null, "ad7a")),
                meta: {
                    title: "page2.doc118"
                }
            }, {
                path: "/blindBox/record",
                component: () => i.e("chunk-b9b99008").then(i.bind(null, "d5ae")),
                meta: {
                    title: "page2.doc119"
                }
            }, {
                path: "/my/google",
                component: () => i.e("chunk-a0d2fdee").then(i.bind(null, "4a5f")),
                meta: {
                    title: "page3.doc1",
                    auth: !0
                }
            }, {
                path: "/my/googleView",
                component: () => Promise.all([i.e("qrcodejs2"), i.e("chunk-28129af0")]).then(i.bind(null, "7b37")),
                meta: {
                    title: "page3.doc1",
                    auth: !0
                }
            }, {
                path: "/contract/",
                component: () => Promise.all([i.e("echarts"), i.e("chunk-0119f9da"), i.e("chunk-72096956")]).then(i.bind(null, "7ffa")),
                meta: {
                    title: "page3.doc1",
                    auth: !0
                }
            }, {
                path: "/contract/list",
                component: () => Promise.all([i.e("core-js"), i.e("chunk-b01a6a6a")]).then(i.bind(null, "fa6a")),
                meta: {
                    title: "new.doc129",
                    auth: !0
                }
            }, {
                path: "/grid",
                component: () => Promise.all([i.e("core-js"), i.e("chunk-778cd5af")]).then(i.bind(null, "2419")),
                meta: {
                    title: "",
                    keepAlive: !0
                }
            }, {
                path: "/grid/record1",
                component: () => Promise.all([i.e("echarts"), i.e("chunk-0119f9da"), i.e("chunk-cc890d58")]).then(i.bind(null, "4e53")),
                meta: {
                    title: ""
                }
            }, {
                path: "/grid/record2",
                component: () => Promise.all([i.e("core-js"), i.e("chunk-1d75aade")]).then(i.bind(null, "d8d2")),
                meta: {
                    title: "new.doc253"
                }
            }, {
                path: "/activity",
                component: () => i.e("chunk-0467bfef").then(i.bind(null, "7a17")),
                meta: {
                    title: ""
                }
            }, {
                path: "/partner",
                name: "Partner",
                meta: {
                    title: "page6.doc34",
                    isLogin: !0,
                    keepAlive: !0,
                    isBack: !1
                },
                component: () => Promise.all([i.e("core-js"), i.e("chunk-223d9f74"), i.e("chunk-2d0e44a1"), i.e("chunk-e73ceb0c")]).then(i.bind(null, "943b"))
            }, {
                path: "/partner/record",
                name: "PartnerRecord",
                meta: {
                    title: "page6.doc34",
                    isLogin: !0,
                    keepAlive: !0,
                    isBack: !1
                },
                component: () => i.e("chunk-13bbd6ca").then(i.bind(null, "a4c2"))
            }, {
                path: "/news",
                name: "news",
                meta: {
                    title: "page5.doc45",
                    isLogin: !0,
                    keepAlive: !0,
                    isBack: !1
                },
                component: () => i.e("chunk-24e28c7e").then(i.bind(null, "7c64"))
            }, {
                path: "/news/report",
                name: "",
                meta: {
                    title: "page.doc327"
                },
                component: () => i.e("chunk-cff1fc4a").then(i.bind(null, "cdae"))
            }, {
                path: "/news/search",
                name: "search",
                meta: {
                    title: "page.doc324",
                    keepAlive: !0,
                    isBack: !1
                },
                component: () => Promise.all([i.e("core-js"), i.e("chunk-65fa755e")]).then(i.bind(null, "a3d4"))
            }, {
                path: "/news/view",
                name: "view",
                meta: {
                    title: ""
                },
                component: () => i.e("chunk-0a6fdc28").then(i.bind(null, "5aa0"))
            }, {
                path: "/lucky",
                name: "Lucky",
                component: () => Promise.all([i.e("vue"), i.e("chunk-16177448")]).then(i.bind(null, "bfd5")),
                meta: {
                    title: "lucky.doc24",
                    keepAlive: !1
                }
            }, {
                path: "/lucky/go",
                name: "LuckyGo",
                component: () => i.e("chunk-12bf2108").then(i.bind(null, "f9ba")),
                meta: {
                    title: "lucky.doc25",
                    keepAlive: !1
                }
            }, {
                path: "/lucky/record",
                name: "LuckyRecord",
                component: () => i.e("chunk-02571e75").then(i.bind(null, "4038")),
                meta: {
                    title: "lucky.doc30"
                }
            }, {
                path: "/my/bindEmail",
                name: "LuckyGo",
                component: () => i.e("chunk-2f63d074").then(i.bind(null, "fcf6")),
                meta: {
                    title: "new.doc1",
                    keepAlive: !1
                }
            }, {
                path: "/my/official",
                name: "official",
                component: () => Promise.all([i.e("core-js"), i.e("chunk-6ce7d076")]).then(i.bind(null, "d63e")),
                meta: {
                    title: "page6.doc68"
                }
            }, {
                path: "/user/forget_account",
                component: () => Promise.all([i.e("core-js"), i.e("chunk-7486a5bb")]).then(i.bind(null, "12a9")),
                meta: {
                    title: "page.doc105"
                }
            }, {
                path: "/staking/index",
                component: () => i.e("chunk-fe2cb7fa").then(i.bind(null, "209c")),
                meta: {
                    title: "new.doc37"
                }
            }, {
                path: "/my/invateRecord",
                component: () => i.e("chunk-0fc1ae1a").then(i.bind(null, "a6e8")),
                meta: {
                    title: "new.doc93"
                }
            }, {
                path: "/my/income",
                component: () => i.e("chunk-05e98ee6").then(i.bind(null, "684d")),
                meta: {
                    title: "new.doc81"
                }
            }, {
                path: "/my/VerifiedStatus",
                component: () => i.e("chunk-457ffc6a").then(i.bind(null, "eb85")),
                meta: {
                    title: "page.doc183"
                }
            }, {
                path: "/my/link",
                component: () => i.e("chunk-46a98347").then(i.bind(null, "9a5a")),
                meta: {
                    title: "new.doc116"
                }
            }, {
                path: "/my/bind",
                component: () => i.e("chunk-75ff273e").then(i.bind(null, "abb8")),
                meta: {
                    title: "page.doc110"
                }
            }, {
                path: "*",
                redirect: "/home"
            }]
        });
        d.beforeEach((e, o, i) => {
            let a = n["a"].state.isLogin;
            !e.meta.auth || a ? i() : i("/user/login?status=1")
        }), o["a"] = d
    },
    b147: function(e) {
        e.exports = JSON.parse('{"title":{"doc0":"Accueil","doc1":"TTMD Stratégie","doc2":"Stratégie","doc3":"Maximiser les enregistrements","doc4":"Équipe","doc5":"Liste d\'équipe","doc6":"Mes messages","doc7":"Centre des tâches","doc8":"Actifs","doc9":"Détails de l\'actif","doc10":"Recharger","doc11":"Retrait","doc12":"le mien","doc13":"Niveau de mise à niveau","doc14":"Commentaires","doc15":"Centre d\'aide","doc16":"Détails de l\'aide","doc17":"Définir le mot de passe du fonds","doc18":"Changer de langue","doc19":"Modifier le mot de passe de connexion","doc20":"Réinitialiser le mot de passe de connexion","doc21":"Centre d\'authentification par nom réel","doc22":"Informations personnelles","doc23":"Authentification","doc24":"Télécharger une photo d\'identité","doc25":"Connexion","doc26":"Enregistrement","doc27":"Inviter des amis","doc28":"Sélectionner le canal de dépôt","doc29":"Sélectionner le canal de retrait","doc30":"Retrait de monnaie fiduciaire","doc31":"Rechargement en monnaie fiduciaire"},"load":{"refreshed":"Rafraîchir avec succès","loosing":"Relâcher pour rafraîchir...","loading":"Chargement...","no_more":"Pas plus","no_open":"Pas encore ouvert"},"page":{"doc1":"TTMD en quantification","doc2":"Gagnez de l\'argent immédiatement grâce à TTMD quantitativement","doc3":"Recharger","doc4":"Se retirer","doc5":"Avantage quantitatif TTMD","doc6":"Marchés des principales places boursières","doc7":"Devise/Nom","doc8":"Dernier prix","doc9":"24H hauts et bas","doc10":"Journées de fonctionnement en toute sécurité","doc11":"Jours","doc12":"Revenu de sortie cumulé","doc13":"Mécanisme de sécurité absolu","doc14":"Tous les fonds de l\'utilisateur sont dans leur propre échange Binance. La plate-forme quantitative TTMD ne facture que des frais d\'utilisation de la technologie logicielle. Binance facture des frais pour chaque transaction. Internet fonctionne.","doc15":"Mécanismes de sécurité stricts","doc16":"Opérez l\'arbitrage de fonds via l\'API d\'échange. Ce serveur de serveur logiciel ne stocke pas la clé API de l\'utilisateur, mais la stocke uniquement dans l\'ordinateur de l\'utilisateur. Il n\'y a pas besoin de s\'inquiéter de l\'intrusion de pirates, et l\'API ne nécessite pas autorisation de retrait !","doc17":"Paramètres de politique flexibles","doc18":"Des stratégies de trading presque programmables rendent les traders plus à l\'aise avec leurs mains, comme Tiger Wings ! L\'hébergement en un clic peut aider les nouveaux utilisateurs à gagner beaucoup de temps pour apprendre les logiciels","doc19":"Analyse intelligente puissante","doc20":"Après que le Pangu Quantitative Distributed Quote Server collecte le marché d\'échange, il utilise la puissante intelligence artificielle du serveur pour analyser, traiter et filtrer les données du marché, et fournir le meilleur plan de prise de décision !","doc21":"Développement durable","doc22":"Le trading de devises numériques sera un marché à long terme, Pangu continuera à s\'améliorer et à vous fournir davantage de services à valeur ajoutée !","doc23":"Devise de retrait","doc24":"Banque","doc25":"Veuillez entrer le nom de la banque de retrait","doc26":"Montant du retrait","doc27":"Veuillez entrer le montant du retrait","doc28":"Solde disponible","doc29":"Veuillez entrer les informations de retrait","doc30":"Nom","doc31":"Veuillez saisir votre nom","doc32":"Numéro de carte bancaire","doc33":"Veuillez entrer le numéro de carte bancaire","doc34":"Frais de traitement","doc35":"Arrivée réelle","doc36":"D\'accord","doc37":"Rappel chaleureux","doc38":"Cela prendra environ 3 à 5 minutes pour arriver une fois le retrait de la monnaie fiduciaire réussi, veuillez patienter.","doc39":"Veuillez entrer le mot de passe du fonds","doc40":"Confirmer le retrait","doc41":"Protection de sécurité","doc42":"Veuillez d\'abord définir le mot de passe du fonds","doc43":"Sélectionner le réseau","doc44":"Sélectionner la devise","doc45":"Adresse de retrait","doc46":"Montant du retrait","doc47":"Veuillez entrer le montant du retrait","doc48":"Tous","doc49":"Solde de l\'actif","doc50":"Annuler","doc51":"Veuillez saisir l\'adresse de retrait","doc52":"Copie réussie","doc53":"Aucun enregistrement pour le moment","doc54":"Devise","doc55":"Tapez","doc56":"Date","doc57":"Date de début","doc58":"Date de fin","doc59":"Sélectionner le type","doc60":"Revenu","doc61":"Dépenses","doc62":"Recharge en espèces","doc63":"Retrait d\'espèces","doc64":"Devise de dépôt","doc65":"Nombre de dépôts","doc66":"Veuillez saisir le montant de la recharge","doc67":"Montant de la recharge","doc68":"Il faudra environ 3 à 5 minutes pour arriver une fois la recharge fiat réussie. Veuillez patienter. Les frais de traitement seront déduits du montant reçu.","doc69":"Confirmer le dépôt","doc70":"Copier","doc71":"Remarque","doc72222222":"Dépôt minimum : {i1} USDT, s\'il est inférieur au montant minimum, il ne sera pas crédité sur le compte. Veuillez ne pas déposer d\'actifs non USDT à l\'adresse ci-dessus, sinon les actifs ne pourront pas être récupérés . Votre adresse de dépôt ne changera pas fréquemment et vous pourrez déposer à plusieurs reprises. Remplacement, nous vous en informerons par annonce ou par e-mail.","doc72":"Vous devez obtenir la dernière adresse de dépôt pour chaque recharge. L\'adresse de dépôt expirera après dix minutes. TTMD n\'est pas responsable de la perte de fonds causée par le transfert du compte d\'adresse expirée !","doc73":"Prix actuel","doc74":"Historique des transactions","doc75":"Dépôt USDT","doc76":"Paiement en fiat vietnamien","doc77":"Retrait USDT","doc78":"Retrait en fiat vietnamien","doc79":"Veuillez saisir votre numéro de téléphone","doc80":"Veuillez saisir votre adresse e-mail","doc81":"Code de SMS","doc82":"Code de l\'e-mail","doc83":"Obtenir","doc84":"Le code d\'invitation ne peut pas être vide","doc85":"Veuillez entrer un mot de passe (6-20 caractères alphanumériques)","doc86":"Veuillez saisir à nouveau votre mot de passe","doc87":"J\'ai lu et j\'accepte","doc88":"Contrat d\'enregistrement de l\'utilisateur","doc89":"Avez-vous un compte ? Immédiatement","doc90":"Téléchargement de l\'application","doc91":"Choisir un indicatif téléphonique international","doc92":"Rechercher l\'indicatif régional","doc93":"Changement de langue","doc94":"Enregistrement du téléphone portable","doc95":"Enregistrement par e-mail","doc96":"Opérations fréquentes. Réessayez plus tard","doc97":"Veuillez saisir le bon numéro de téléphone","doc98":"Veuillez saisir la bonne adresse e-mail","doc99":"Envoyé avec succès","doc100":"Le mot de passe doit être composé de 6 à 20 caractères alphanumériques","doc101":"Les deux mots de passe sont incohérents","doc102":"Veuillez vérifier le contrat d\'enregistrement de l\'utilisateur","doc103":"Enregistrement réussi","doc104":"Veuillez entrer votre mot de passe","doc105":"Mot de passe oublié","doc106":"Pas de compte ? Immédiatement","doc107":"Connexion mobile","doc108":"Connexion par e-mail","doc109":"Connexion réussie","doc110":"Téléphone portable","doc111":"Boîte aux lettres","doc112":"Mot de passe de connexion","doc113":"Confirmer le mot de passe","doc114":"Veuillez saisir à nouveau votre mot de passe","doc115":"Code de vérification","doc116":"Rendement total","doc117":"Recharge totale","doc118":"Retrait total","doc119":"Aperçu des données de l\'équipe","doc120":"Personnes ajoutées","doc121":"Revenu supplémentaire","doc122":"Ajouter une recharge","doc123":"Ajouter un retrait","doc124":"Analyse des revenus","doc125":"Taille d\'équipe cumulée","doc126":"Afficher la liste des équipes","doc127":"Revenus cumulés","doc128":"Recharge cumulée","doc129":"Retrait cumulé","doc130":"Données sur trois générations","doc131":"Données de première génération","doc132":"Données de deuxième génération","doc133":"Données de troisième génération","doc134":"Nombre d\'utilisateurs","doc135":"Montant du retrait","doc136":"Aujourd\'hui","doc137":"7 derniers jours","doc138":"30 derniers jours","doc139":"60 derniers jours","doc140":"Revenus de la tâche","doc141":"Revenu quantitatif","doc142":"Récompense quantitative recommandée","doc143":"Utilisateur invalide","doc144":"Terminé","doc145":"En cours","doc146":"Recevoir des récompenses","doc147":"Tâches quotidiennes","doc148":"Tâche de croissance","doc149":"Sélectionner l\'heure","doc150":"Montant de l\'investissement","doc151":"Bénéfice","doc152":"Acheter la plate-forme","doc153":"Plateforme de vente","doc154":"Prix d\'achat","doc155":"Prix demandé","doc156":"Devise d\'entrée","doc157":"Temps complet","doc158":"Enregistrements quantitatifs","doc159":"Gains jour","doc160":"Revenus des 7 derniers jours","doc161":"Nombre de démarrages restant aujourd\'hui","doc162":"Revenu","doc163":"Quantification TTMD à démarrage unique","doc164":"Processus du panneau d\'exécution TTMD","doc165":"Sexe","doc166":"Homme","doc167":"Femme","doc168":"Nationalité","doc169":"Veuillez entrer la nationalité","doc170":"Type de document","doc171":"numéro de document","doc172":"Veuillez saisir le numéro du document","doc173":"Téléchargement de photos de documents","doc174":"Sélectionner un document","doc175":"Carte d\'identité","doc176":"Passeport","doc177":"Veuillez télécharger une photo frontale de votre carte d\'identité","doc178":"Veuillez télécharger votre passeport","doc179":"Veuillez télécharger une photo du verso de votre carte d\'identité","doc180":"Pseudo","doc181":"Numéro de téléphone portable","doc182":"Numéro de boîte aux lettres","doc183":"Authentification par nom réel","doc184":"Désauthentifier","doc185":"Échec","doc186":"En attente de révision","doc187":"Authentifié","doc188":"Enregistrer","doc189":"Mise à jour réussie","doc190":"Niveau actuel","doc191":"Niveau d\'adhésion suivant","doc192":"Montant valide","doc193":"Membre valide","doc194":"Liste des classes","doc195":"Note","doc196":"Le robot TTMD peut être utilisé tous les jours","doc197":"Veuillez entrer le code de vérification","doc198":"Ancien mot de passe","doc199":"Veuillez entrer votre ancien mot de passe de transaction","doc200":"Mot de passe de financement","doc201":"Veuillez saisir le mot de passe de la transaction","doc202":"Entrez à nouveau le mot de passe pour confirmer","doc203":"1. Votre mot de passe de fonds est utilisé pour les paramètres de négociation, de retrait et de sécurité du compte. Il est recommandé de ne pas être le même que le mot de passe de connexion. Ce site n\'est pas responsable du vol du compte généré par cela ;","doc204":"2. Après avoir changé le mot de passe du fonds, vous ne pouvez pas effectuer de retrait dans les 24 heures.","doc205":"Modifier le mot de passe de la transaction","doc206":"Réinitialiser le mot de passe de la transaction","doc207":"Définir le mot de passe de la transaction","doc208":"Format de mot de passe incorrect","doc209":"Veuillez saisir l\'ancien mot de passe","doc210":"Veuillez entrer votre ancien mot de passe de connexion","doc211":"Nouveau mot de passe","doc212":"Nouveau mot de passe de connexion, 6-20 chiffres et lettres","doc213":"Réglé avec succès","doc214":"Lien d\'invitation","doc215":"Copier le lien d\'invitation","doc216":"Code d\'invitation","doc217":"Copier le code d\'invitation","doc218":"Non certifié","doc219":"La révision de votre document a échoué","doc220":"Votre document est en cours de révision","doc221":"Assurance de la sécurité des informations personnelles","doc222":"Améliorez les informations d\'identité et profitez de plus de services","doc223":"Parfaire","doc224":"Ouvre actuellement le canal de réduction le plus élevé","doc225":"Utilisateur ordinaire","doc226":"Canal","doc227":"Mettre à jour","doc228":"Aperçu des actifs","doc229":"Déconnexion","doc230":"Contacter le service client","doc231":"Mot de passe de transaction","doc232":"Vider le cache","doc233":"Quitter avec succès","doc234":"Effacer avec succès","doc235":"Veuillez entrer vos commentaires","doc236":"Soumettre","doc237":"Problème de fonctionnement du logiciel","doc238":"Réclamations et suggestions","doc239":"Rapport de bug","doc240":"Autre","doc241":"Veuillez entrer vos commentaires","doc242":"Photo/Téléchargez votre carte d\'identité de deuxième génération","doc243":"Photo/Téléchargez votre passeport","doc244":"Cliquez pour prendre/télécharger des portraits de visages","doc245":"Cliquez pour filmer/télécharger les nouilles Guowei","doc246":"Confirmer le téléchargement","doc247":"Portefeuille TTMD","doc248":"fois","doc249":"Personnes","doc250":"Si vous n\'avez pas invité d\'amis depuis longtemps, vos avoirs ne pourront pas être retirés. Vous pouvez reprendre le retrait en invitant des amis","doc251":"Rapport de fractionnement","doc252":"Gains de détention aujourd’hui","doc254":"Présentation de la plate-forme","doc255":"Introduction à la quantification intelligente des ressources humaines","doc256":"Il existe de nombreux échanges de devises numériques dans le monde, et chaque échange a pour fonction d\'échanger de la monnaie fiduciaire contre de la monnaie numérique. Le prix de l\'échange de monnaie fiduciaire contre de la monnaie numérique est différent pour chaque échange, et les gens peuvent l\'acheter à acheter à bas prix, vendre à un prix élevé et gagner des différences de taux de change ","doc257":"Le processus d\'achat manuel à bas prix et de vente à prix élevé sur plusieurs bourses prend beaucoup de temps. Lorsque les prix changent, les opérations et les échanges prendront trop de temps et manqueront les meilleurs taux de change, ce qui entraînera une baisse des bénéfices commerciaux .","doc258":"Par conséquent, le système de quantification automatique TTMD semble éviter les problèmes manuels et améliorer la marge bénéficiaire du trading quantitatif.<br>Le système de quantification automatique TTMD peut automatiquement rechercher BTC, ETH, USDT et d\'autres devises numériques sur les principales bourses Vente la plus basse prix et achetez rapidement en quelques secondes.<br/><br/>Lorsque le prix de la devise atteint le système, il sera rapidement vendu en quelques secondes lorsque le prix de vente est défini automatiquement.<br/ ><br/>En quelques minutes, le processus d\'achat à bas prix et de vente à prix élevé peut être complété automatiquement<br/><br/>Les transactions quantitatives peuvent être complétées rapidement.24 heures de collecte de données ininterrompue, pas besoin d\'observer manuellement le marché, Vous pouvez gagner un revenu de manière efficace et stable, c\'est le système de quantification automatique TTMD.","doc259":"Comment gagner de l\'argent","doc260":"Cliquez sur le bouton pour démarrer la transaction quantitative automatique, et la transaction quantitative automatique sera terminée dans les 3 à 5 minutes.<br/>50 % du revenu résultant de la transaction quantitative automatique correspond au bénéfice réalisé par le plate-forme, et les 50 % restants sont gagnés par la plate-forme Le profit réalisé. Le profit appartient à l\'utilisateur.","doc261":"Exemple : Achetez du BTC à 5 000 USDT sur Binance, vendez du BTC à 5 050 USDT sur Ouyi, <br/>gagnez un bénéfice de 50 USDT.<br/>La plateforme obtiendra un bénéfice de 25 USDT, conservez le bénéfice suivant de 25 USDT appartenant à l\'utilisateur .","doc262":"Introduction aux gains de niveau VIP","doc2633":"Montant de l\'opération de niveau 1-500<br/>Vous pouvez effectuer 3 transactions quantitatives automatiques par jour, et le taux de rendement pour chaque transaction quantitative est de 2,0 % à 3,0 %. 500 USDT peuvent rapporter 10 USDT à 15 USDT.","doc263":"Le montant de l\'opération de niveau est de 500 à 4999<br/>Vous pouvez effectuer 3 transactions quantitatives automatiques par jour, et le taux de rendement pour chaque transaction quantitative est de 2,0 % à 3,0 %. 1 000 USDT peuvent rapporter 20 USDT à 30 USDT.","doc264":"Montant de l\'opération de niveau 3000-9999<br/>Vous pouvez effectuer 4 transactions quantitatives automatiques par jour, et le taux de rendement pour chaque transaction quantitative est de 2,5 % à 3,5 %. 1000USDT peuvent rapporter 25USDT à 35USDT.","doc2644":"Montant de l\'opération de niveau 5000-99999<br/>Vous pouvez effectuer 5 transactions quantitatives automatiques par jour, et le taux de rendement pour chaque transaction quantitative est de 3,0 % à 4,0 %. 1000USDT peuvent rapporter 30USDT à 40USDT.","doc2645":"Montant de l\'opération de niveau 10000-999999<br/>Vous pouvez effectuer 6 transactions quantitatives automatiques par jour, et le taux de rendement pour chaque transaction quantitative est de 3,5 % à 4,5 %. 1 000 USDT peuvent rapporter entre 35 USDT et 45 USDT.","doc2646":"Montant de l\'opération de niveau 20000-999999<br/>Vous pouvez effectuer 7 transactions quantitatives automatiques par jour, et le taux de rendement pour chaque transaction quantitative est de 3,5 % à 4,5 %. 1 000 USDT peuvent rapporter entre 35 USDT et 45 USDT.","doc265":"Frais de retrait pour chaque niveau VIP","doc2655":"Lorsque vous êtes VIP0, vous serez facturé 3 % pour les procédures de retrait<br/>Lorsque vous êtes VIP1, vous serez facturé 3 % pour les procédures de retrait<br/>Lorsque vous êtes VIP2, vous serez facturé 2 % pour les procédures de retrait<br/>Lorsque vous êtes VIP3, les procédures de retrait vous seront facturées 2 % de frais<br/>1,5 % lorsque vous êtes en procédure de retrait VIP4<br/>1 % lorsque vous êtes en procédure de retrait VIP5","doc2656":"Introduire/Inviter la délégation de niveau 3","doc266":"Afin de promouvoir rapidement l\'application de trading quantitatif automatique TTMD, d\'augmenter la popularité de la plateforme et de permettre à davantage d\'investisseurs de rejoindre TTMD. TTMD a décidé d\'adopter un modèle de distribution à trois niveaux pour la promotion et d\'accumuler rapidement les utilisateurs de la plateforme. ","doc267":"La distribution à trois niveaux est le moyen le plus rapide de développer des utilisateurs dans tous les modèles de marketing. Afin d\'améliorer la vitesse de développement et les avantages de l\'agence, TTMD a établi le mécanisme de distribution à trois niveaux suivant.","doc268":"1. Utilisez votre propre code d\'invitation pour inviter l\'ami A autour de vous à rejoindre TTMD, et vous pouvez obtenir 18 % du revenu de trading quantitatif automatique quotidien de l\'ami A","doc269":"2. Votre ami A utilise son code d\'invitation pour inviter son ami B à rejoindre TTMD, et vous pouvez obtenir 6 % du revenu de trading quantitatif automatique quotidien de l\'ami B","doc270":"3. L\'ami B utilise son code d\'invitation pour inviter son ami C à rejoindre TTMD, et vous pouvez obtenir 3 % du revenu de trading quantitatif automatique quotidien de l\'ami C.","doc271":"Si vous formez votre propre équipe, votre ami A invite l\'ami B à se joindre et l\'ami B invite l\'ami C à se joindre, alors vous formerez une équipe de distribution tertiaire complète.<br/><br/>Quand Quand votre ami A, votre ami B et votre ami C terminent la transaction quantitative automatique d\'aujourd\'hui, vous pouvez obtenir 18+6+3=27 % de leur revenu sous forme de commission d\'équipe le jour de la commission de l\'agence.","doc2657":"Comment calculer votre commission d\'équipe","doc2658":"Tous vos subordonnés sont 10A+100B+1000C=1110 personnes<br/>En supposant que tous vos subordonnés gagnent 100 $ par jour sur leurs comptes,<br/>Revenu de la commission de votre équipe d\'agence de niveau A=100*18 % *10 personnes = 180 $,<br/>Revenu de commission de votre équipe d\'agence de niveau B=100*6 %*100 personnes=600 $,<br/>Revenu de commission de votre équipe d\'agence de niveau C= 100*3 %*1 000 personnes= 3000 $,<br/>Votre revenu d\'équipe quotidien est de A100+B180+C3000=3780 $,<br/>Votre revenu d\'équipe mensuel est de 3780*30 jours = 113400 $,< br/>Votre revenu d\'équipe annuel est de 3780*365 jours = 1379700 $ ,<br/><br/>C\'est un revenu très important","doc272":"Activer le dépôt et gagner des intérêts","doc273":"Produire de l\'intérêt","doc274":"Dépôt pour gagner un revenu d\'intérêts","doc275":"Contactez-nous","doc276":"Non valide","doc277":"Refusé","doc278":"En cours de révision","doc279":"nom de famille","doc280":"Nom","doc281":"Veuillez entrer votre nom de famille","doc282":"Veuillez saisir votre prénom","doc283":"Le retrait arrivera dans les 72 heures","doc284":"VIP1 : Montant d\'opération de niveau 35-500<br>Vous pouvez effectuer 3 transactions quantitatives automatiques par jour, et le taux de rendement quotidien pour le trading quantitatif est de 1,7 % à 1,9 %.<br>500USDT peuvent gagner 3 transactions automatiques transactions quantitatives par jour Prenez 8USDT-10USDT.<br><br>VIP2 : Montant de l\'opération de niveau 500-3000<br>Vous pouvez effectuer 4 transactions quantitatives automatiques par jour, et le taux de rendement quotidien des transactions quantitatives est de 2,1 % à 2,3 %.<br>3000USDT par jour 4 fois de quantification automatique peuvent gagner 60USDT-70USDT.<br><br>Frais de retrait pour chaque niveau VIP<br>Afin de promouvoir rapidement l\'application de paiement quantitatif automatique TTMD, augmentez la popularité de la plate-forme et permettre à plus d\'investisseurs< br>Rejoindre TTMD. TTMD a décidé d\'utiliser un modèle de distribution à trois niveaux pour la promotion et d\'accumuler rapidement des utilisateurs de la plate-forme.<br><br>La distribution à trois niveaux est le moyen le plus rapide de développer les utilisateurs dans tous les modèles de marketing, afin d\'améliorer la vitesse de développement et le bien-être de l\'agence<br>, TTMD a établi le système de distribution à trois niveaux suivant.<br><br>1. Utilisez votre code d\'invitation pour inviter un ami A autour de vous à rejoindre TTMD, vous pouvez obtenir 21 % des revenus commerciaux quantifiés quotidiens<br>automatiques de l\'ami A %.<br>2. Votre ami A utilise son code d\'invitation pour inviter son ami B à rejoindre TTMD, vous pouvez activer l\'ami B<br>7 % de le revenu de trading quantitatif automatique quotidien.<br><br>3. L\'ami B utilise son code d\'invitation pour inviter son ami C à rejoindre TTMD, vous pouvez activer le quotidien de l\'ami C<br>3 % du revenu de trading quantifié automatiquement.<br ><br>Si vous formez votre propre équipe, votre ami A invite l\'ami B à se joindre, l\'ami B invite l\'ami C à se joindre,<br>alors vous formerez une équipe de distribution complète à trois niveaux.<br><br>Quand votre ami A, votre ami B et votre ami C effectuent la transaction quantitative automatique d\'aujourd\'hui, vous pouvez obtenir 21+7+3=31 % de commission d\'équipe sur leurs revenus le jour de la commission de l\'agent<br>.","doc285":"Journées d\'expérience","doc286":"Pourcentage de profit","doc287":"Pourcentage de commission","doc288":"Veuillez saisir le bon numéro de téléphone portable pour vous inscrire. Si vous vous connectez avec un téléphone portable non vérifiable, vous ne pourrez pas modifier votre mot de passe","doc289":"Veuillez saisir l\'adresse e-mail correcte pour vous inscrire. Si vous utilisez une adresse e-mail non vérifiable pour vous inscrire et vous connecter, vous ne pourrez pas modifier votre mot de passe","doc290":"Numéro de commande","doc291":"Montant sur le compte","doc292":"État","doc293":"Adresse de dépôt","doc294":"Date de création","doc295":"retour","doc296":"Dépôt minimum : 1 USDT de moins que le montant minimum ne sera pas crédité sur le compte<br>Pour chaque dépôt, vous devez obtenir la dernière adresse de dépôt, l\'adresse de dépôt expirera après dix minutes, et le transfert des comptes d\'adresse expirés et des actifs non USDT causés par la perte de fonds ne seront pas retrouvés. Revenez en arrière, TTMD n\'est pas responsable !","doc306":"Lier le numéro de téléphone mobile","doc307":"Lier un e-mail","doc308":"Numéro de téléphone non lié","doc309":"Veuillez d\'abord lier votre boîte aux lettres","doc310":"Région","doc311":"S’il vous plaît remplir l’indicatif téléphonique international","doc312":"Pour protéger davantage la sécurité de votre compte, vous devez compléter la vérification de connexion à la boîte aux lettres avant de vous connecter","doc313":"ID de l’utilisateur","doc314":"Grande tournante chanceuse","doc315":"Et","doc316":"tirage au sort","doc317":"Mon prix","doc318":"règles","doc319":"Nombre de tirages invités","doc320":"Cliquez\\nsur","doc321":"Retirer immédiatement","doc322":"Temps","doc323":"Prix","doc324":"Pas assez de tirages, s\'il vous plaît aller inviter des amis","doc325":"Wechselkurs","doc326":"rotation","doc327":"économiser de l\'argent","doc328":"flash","doc329":"portefeuille électronique","doc330":"portefeuille flexible","doc331":"économiser de l\'argent","doc332":"revenu quantitatif","doc333":"Recevez le réservoir de dépôt","doc334":"Économisez le niveau du réservoir","doc335":"Lorsque le niveau de l\'utilisateur est le même que le niveau du réservoir d\'épargne, vous pouvez recevoir le solde du réservoir de dépôt. Après une période de temps, le réservoir d\'argent sera mis à niveau automatiquement.","doc336":"Le solde de l\'argent pour de l\'argent","doc337":"recevoir","doc338":"Days de mise à niveau","doc339":"Sauver de l\'argent peut enregistrer","doc340":"transfert monnaie","doc341":"équilibre","doc342":"Tirate le nombre","doc343":"Veuillez saisir le nombre de transfert","doc344":"ok to transfer","doc345":"Le nombre de transfert ne peut pas être supérieur à","doc346":"Le nombre de transfert ne peut pas être inférieur à 1","doc347":"Cong","doc348":"à","doc349":"Quantité d\'échange","doc350":"Veuillez saisir la quantité d\'échange","doc351":"ok flash","doc352":"Le nombre de clignotements ne peut pas être supérieur à","doc353":"Veuillez saisir le nombre de clignotements","doc354":"Le nombre de clignotements ne peut pas être inférieur à 1","doc355":"membre de la poussée directe","doc356":"membre de l\'équipe","doc357":"Le nombre de temps quantifiés par jour","doc358":"1. Afin d\'éviter les activités illégales de blanchiment d\'argent, les utilisateurs du premier dépôt doivent être quantifiés quotidiennement pour effectuer le retrait. Br> 3. Afin de garantir strictement la sécurité des fonds de compte, le compte déclenchera automatiquement Le mécanisme de protection du système de financement après avoir modifié la boîte aux lettres ou l\'adresse de retrait TRC20 USDT et le mot de passe de retrait.> Tous les frais de retrait VIP-niveau <br> Frais de retrait VIP1 5,0% <br> Frais de retrait VIP2 4,0% <br> Frais de retrait VIP3 3,0% < Br> Frais de retrait VIP4 2,0% <br> Frais de retrait VIP5 1,0% <br> Frais de retrait VIP6 0,0% ","doc359":"Suivant","doc360":"Avantages d\'hier","doc361":"Commission générale de l\'équipe","doc362":"Hier Team Commission","doc363":"Commission d\'équipe d\'aujourd\'hui","doc364":"Plus d\'informations sur l\'événement","doc365":"Actualités","doc366":"Engagement de contrat","doc367":"Raison du rejet","doc301":"","doc302":"","doc303":"","doc304":"","doc305":""},"page2":{"doc1":"Fonds flexible","doc2":"pour libérer des fonds","doc3":"Bienvenue sur ITP","doc4":"numéro de mobile","doc5":"mot de passe","doc6":"plusieurs fois aujourd\'hui","doc7":"Revenu total","doc8":"Revenu total de la monnaie de détention","doc9":"pour sortir l\'enregistrement","doc10":"niveau VIP","doc11":"Condition de mise à niveau","doc12":"Equity","doc13":"Montant de quantification minimum","doc14":"Montant quantitatif maximum","doc15":"Temps quantifiés quotidiens","doc16":"rendement chimique quotidien","doc17":"Mécanisme de sécurité absolue","doc18":"Réalisations de combat réelles quantifiées","doc19":"paramètres de politique stricts","doc20":"Idées d\'arbitrage automatisé","doc21":"le développement durable","doc22":"Le système quantitatif intelligent TTMD calcule la situation d\'ouverture de manière très précise, négocie automatiquement sur votre compte et fonctionne sans interruption 24 heures sur 24, 365 jours par an. Nous avons mis en place le trading quantitatif AI en 2016. Il met tout en œuvre pour augmenter régulièrement les bénéfices mensuels","doc23":"TTMD fournit une grande quantité de données de transaction pour l\'apprentissage intelligent de l\'IA. Après des dizaines de millions d\'exercices et de combats réels, il a discipliné les capacités de prise de décision et d\'exécution, et a été lancé sans échec ni perte.","doc24":"Selon les résultats de la prise de décision d\'opération intelligente d\'IA quantitative, le système intelligent de trading quantitatif sélectionnera automatiquement les opportunités de trading avec une croissance favorable en termes d\'évaluation, de capital et d\'évaluation complète par rapport à cette étape, puis élaborera des stratégies d\'opération précises, qui peut éviter la plupart des \\"déformations\\" de la décision \\"Brainstorming\\"","doc25":"Le système de quantification analyse les opportunités de manière exhaustive, automatise entièrement la réalisation en un clic, verrouille rapidement la différence de profit entre les produits symboliques et formule des stratégies et des bénéfices en achetant à bas prix et en vendant à prix élevé.","doc26":"Le trading de devises numériques sera un marché de longue date. Le système d\'intelligence quantitative TTMD continuera d\'optimiser les performances et les derniers algorithmes numériques pour vous fournir davantage de services à valeur ajoutée.","doc27":"Partenaire","doc28":"partager des médias","doc29":"avant d\'identification","doc30":"Le verso du document","doc31":"détenir des documents","doc32":"Poster le commentaire","doc33":"Pas le vrai nom","doc34":"Échec de l\'authentification par nom réel","doc35":"Vrai nom en attente d\'examen","doc36":"Vrai nom vérifié","doc37":"Veuillez d\'abord vérifier votre vrai nom","doc38":"Après avoir changé le mot de passe de connexion et le mot de passe de transaction, le mécanisme de protection de la sécurité des fonds sera déclenché<br>Après 48 heures, le système libérera automatiquement le statut de protection des fonds et commencera le processus de retrait normal<br>Le retrait minimum est de 39USDT, et un certains frais de traitement sont requis pour le retrait ! <br><br>\\n1. Afin d\'empêcher les activités illégales de blanchiment d\'argent, les utilisateurs qui déposent pour la première fois doivent effectuer 3 jours de quantification avant de pouvoir retirer<br>2. Complétez toutes les heures de quantification de la journée et retirez au moins 39 USDT<br>3. Chaque fois Le montant du retrait est soumis aux réglementations en vigueur de la plateforme, et des frais de traitement sont facturés pour chaque retrait en tant que frais de maintenance de la plateforme<br><br>Règles des frais de traitement des retraits <br>Frais de traitement de retrait VIP1 5,0 %<br>Frais de retrait VIP2 4,0 %<br>\\nFrais de retrait VIP3 3,0 %<br>Frais de retrait VIP4 2,0 %<br>Frais de retrait VIP5 1,0 %<br>Frais de retrait VIP6 0,0 %","doc39":"Adresse de retrait","doc40":"Veuillez saisir le mot de passe de la transaction","doc41":"Veuillez saisir l\'adresse de retrait","doc42":"Tâche novice","doc43":"tâche avancée","doc44":"Veuillez d\'abord définir le mot de passe de la transaction","doc45":"Membres actifs cumulés","doc46":"équilibre efficace","doc47":"Recharge efficace","doc48":"Type de retour d\'information","doc49":"Votre avis","doc51":"Total de {k1} personnes","doc52":"niveau ami","doc53":"Le montant total du remboursement de la première couche","doc54":"Le montant total du remboursement de la deuxième couche","doc55":"Le montant total de la remise des trois niveaux","doc56":"efficace","doc57":"invalide","doc58":"couche","doc59":"deuxième étage","doc60":"trois étages","doc61":"Choisir le niveau","doc62":"liste d\'actifs","doc63":"Technologie TTMDDigital","doc64":"Construction écologique mondiale de la blockchain","doc65":"Hébergement IA","doc66":"Détails de l\'hébergement","doc67":"Détails du revenu géré","doc68":"Géré avec succès","doc69":"Rendement par quantification","doc70":"Fonds flexibles","doc71":"geler les avoirs","doc72":"Accomplissez des tâches pour obtenir plus de récompenses","doc73":"Montant d\'entiercement","doc74":"Vous avez {i1} bots exécutant la quantification sur l\'hébergement","doc75":"Taux de rendement quotidien (flottant)","doc76":"Plage d\'entrée","doc77":"Période d\'entiercement","doc78":"hébergement","doc79":"a fini","doc80":"Revenu quotidien","doc81":"(flotter)","doc82":"Heure de début de l\'hébergement","doc83":"Heure de fin de l\'entiercement","doc84":"Détails du revenu","doc85":"Quantification hébergée par l\'IA","doc86":"en cours","doc87":"Hébergement historique","doc88":"Revenu géré","doc89":"Rendement géré","doc90":"{i1} jours jusqu\'à l\'expiration de l\'entiercement","doc91":"Enregistrements d\'entiercement","doc92":"sur","doc93":"Le robot travaille dur","doc94":"Un autre dépôt","doc95":"mon hébergement","doc96":"Taux de rendement journalier","doc97":"Analysez les opportunités d\'entrée et de sortie grâce aux données de l\'IA et ajoutez une logique telle que le filtrage par moyenne mobile pour réduire l\'impact émotionnel artificiel, augmenter les revenus tout en garantissant la sécurité du principal et améliorer considérablement le taux correct d\'entrée et de sortie","doc98":"Cycle d\'entiercement","doc99":"Type de transaction","doc100":"sélection intelligente","doc101":"devise de la transaction","doc102":"Combinaison de jetons intelligents","doc103":"La combinaison de jetons intelligents sélectionne plusieurs combinaisons de paires de négociation basées sur les mégadonnées de l\'IA, avec des risques moindres et des rendements plus élevés","doc104":"coût d\'investissement","doc105":"Confirmation d\'entiercement","doc106":"Confirmer l\'hébergement","doc107":"Coût d\'investissement","doc108":"Le montant de l\'investissement ne peut être inférieur à","doc109":"Le montant de l\'investissement ne peut être supérieur à","doc110":"sélection intelligente","doc111":"Commencez votre voyage en tant qu\'équipe communautaire.","doc112":"papier blanc","doc113":"Financière","doc114":"Zone financière","doc115":"Montant financier","doc116":"Total des revenus de gestion de patrimoine","doc117":"tenir la commande","doc118":"Loterie à l\'aveugle","doc119":"enregistrement en boîte aveugle","doc120":"exploiter","doc121":"Mes commandes","doc122":"Les gains d\'hier","doc123":"Coût d\'investissement","doc124":"frais de gestion","doc125":"impôt sur le revenu","doc126":"le terme","doc127":"Taux de rendement journalier","doc128":"rendement total","doc129":"mettre dedans","doc130":"Investir dans la gestion financière","doc131":"Détails financiers","doc132":"taux journalier","doc133":"période d\'investissement","doc134":"Frais de gestion","doc135":"Impôt sur les revenus de placement","doc136":"ciel","doc137":"Méthode de calcul des intérêts","doc138":"Revenu quotidien, restitue automatiquement le principal à son expiration","doc139":"revenu quotidien","doc140":"Bénéfice total estimé","doc141":"Niveau gestion financière","doc142":"coût d\'investissement","doc143":"équilibre","doc144":"Pièces justificatives","doc145":"Aucun bon disponible","doc146":"montant déductible","doc147":"Veuillez sélectionner un bon","doc148":"Le montant de l\'achat ne peut pas dépasser le solde","doc149":"Le montant de l\'investissement doit être en","doc150":"Produits d\'investissement","doc151":"Heure de départ","doc152":"Heure de fin","doc153":"Déduction de coupon","doc154":"paiement réel","doc155":"aucun","doc156":"Les informations sont correctes et l\'investissement est confirmé","doc157":"Confirmer l\'investissement","doc158":"Détermination de l\'investissement financier","doc159":"succès financier","doc160":"travailler dur","doc161":"mettre un autre","doc162":"Géré avec succès","doc163":"Ordre financier","doc164":"pas plus","doc165":"tous","doc166":"prise","doc167":"maturité","doc168":"Expiré","doc169":"taux de retour","doc170":"frais de gestion","doc171":"Revenu estimé","doc172":"Coupons disponibles","doc173":"Coupons non disponibles","doc174":"Chèque de gestion de patrimoine","doc175":"utiliser immédiatement","doc176":"Raison du coupon indisponible : ","doc177":"mon bon de réduction","doc178":"Ouvrez la boîte aveugle pour tirer des récompenses en espèces","doc179":"Marché des devises","doc180":"récompenses communautaires","doc181":"Membres de l\'équipe","doc182":"zone spéciale","doc183":"niveau de mise à niveau","doc184":"mon bon de réduction","doc185":"Toutes nos félicitations","doc186":"Lors de la \\"gestion financière et des investissements\\", vous pouvez utiliser des coupons en espèces pour déduire","doc187":"mettre un autre","doc188":"revenus financiers","doc189":"Récompenses de parrainage","doc190":"avantages de l\'équipe","doc191":"Analyse du niveau d\'adhésion (trois générations)","doc192":"nombre de personnes","doc193":"membres de poussée directe","doc194":"acheter un produit","doc195":"Montant financier minimum","doc196":"Montant maximum de la gestion financière","doc197":"Des produits","doc198":"première génération","doc199":"deuxième génération","doc200":"Troisième génération","doc201":"Montant investi","doc202":"Période d\'activité","doc203":"Changez le mot de passe de connexion et le mot de passe de transaction déclenchera le mécanisme de protection des fonds Après 48 heures, le statut de protection des fonds sera automatiquement libéré et le processus de retrait normal commencera","doc204":"1. Afin de prévenir les activités illégales de blanchiment d\'argent, les utilisateurs ne peuvent pas retirer d\'argent sans acheter des produits de gestion de patrimoine","doc205":"2. Des frais fixes seront facturés pour chaque retrait","doc206":"u Les frais de gestion sont utilisés comme fonds d\'exploitation de la plateforme","doc207":"3. Le montant de chaque retrait est soumis au montant fixe réel de la plateforme, et l\'impôt sur le revenu correspondant sera déduit pour chaque niveau.Plus le niveau est élevé, plus le taux d\'imposition sur le revenu est bas","doc208":"règles de l\'impôt sur le revenu","doc209":"Taux d\'imposition sur le revenu de la catégorie","doc210":"Votre nouveau mot de passe doit être différent de votre ancien mot de passe","doc211":"Vérifié","doc212":"Supprimer le compte","doc213":"Confirmer pour supprimer le compte TTMD","doc214":"Veuillez lire les règles suivantes avant de supprimer votre compte TTMD :","doc215":"Après la suppression du compte, tous les enregistrements de transaction, les actifs de l\'utilisateur, les revenus générés par l\'investissement, les informations de vérification d\'identité et la liaison du compte bancaire dans le compte seront effacés et remis à zéro.","doc216":"Afin d\'éviter la perte de vos avoirs, veuillez vous assurer qu\'il n\'y a pas de solde sur le compte :","doc217":"Cliquez sur le bouton OK ci-dessous, ce qui signifie que vous avez lu et accepté","doc218":"Confirmation de la suppression","doc219":"règle","doc220":"Enregistrer","doc221":"restant","doc222":"Invitez des amis pour obtenir","doc223":"boîte aveugle","doc224":"extrait","doc225":"Ne laissez pas les mineurs utiliser ou expérimenter sous la surveillance et les conseils de tuteurs","doc226":"expiré","doc227":"Utilisé","doc228":"Revenu quotidien, remboursement dû","doc229":"Remboursement du capital et intérêts à l\'échéance","doc230":"Mémoriser le mot de passe du compte","doc231":"taux d\'imposition","doc232":"Quatrième génération","doc233":"Cinquième génération","doc234":"Sixième génération","doc235":"Septième génération","doc236":"Huitième génération","doc237":"Neuvième génération","doc238":"Dixième génération"},"page3":{"doc1":"Google Authenticateur","doc2":"Vérification de sécurité","doc3":"Code de vérification Google","doc4":"Veuillez saisir le code de vérification Google","doc5":"D\'accord","doc6":"Changement de vérification Google","doc7":"Non authentifié","doc8":"Authentifié","doc9":"Changement de vérification Google","doc10":"Veuillez d\'abord lier Google Authenticator","doc11":"Première étape","doc12":"Veuillez télécharger Google Authenticator depuis la boutique d\'applications mobiles","doc13":"Étape 2","doc14":"Scannez le code QR pour effectuer la liaison via Google Authenticator","doc15":"Copier la clé","doc16":"Étape 3","doc17":"Veuillez saisir le code de vérification Google","doc18":"Confirmer la liaison","doc19":"Prédictions chaudes","doc20":"Voir plus","doc21":"Débloqué","doc22":"{K}débloqué","doc23":"Taux de retour des 7 derniers jours","doc24":"durée de garde","doc25":"Nombre d\'administrateurs","doc26":"Total des revenus de garde","doc27":"{k} jours","doc28":"Gagnants","doc29":"24h Vol","doc30":"Changement en 24 heures","doc31":"CA 24H","doc32":"Partenaire","doc33":"Remise sur invitation","doc34":"Obtenez des bénéfices rapidement","doc35":"Niveau membre","doc36":"Démarrer les transactions","doc37":"grille","doc38":"quantification","doc39":"Ordre quantitatif","doc40":"Revenu stratégique","doc41":"Déverrouillable","doc42":"Coût investissement","doc43":"portée","doc44":"Fonds","doc45":"Quotas"},"page4":{"doc1":"actuel","doc2":"Élevé","doc3":"faible","doc4":"Cours d\'ouverture","doc5":"Volume des transactions","doc6":"1 minute","doc7":"5 minutes","doc8":"15 minutes","doc9":"30 minutes","doc10":"1 heure","doc11":"1 jour","doc12":"1 semaine","doc13":"Vérification de sécurité (choisissez l\'une des deux options suivantes)","doc14":"Envoyer","doc15":"Veuillez saisir un nouveau mot de passe","doc16":"Veuillez saisir à nouveau le nouveau mot de passe","doc17":"Quantité arrivée","doc18":"Frais de retrait","doc19":"Privilège d\'une durée limitée","doc20":"Frais de traitement des devises pendant un jour","doc21":"Montant minimum de retrait","doc22":"Montant maximum de retrait","doc23":"Vous disposez déjà de retraits gratuits","doc24":"Quantité","doc25":"Adresse","doc26":"Date","doc27":"Détails","doc28":"Montant disponible","doc29":"Montant gelé","doc30":"Détails de l\'actif","doc31":"Tutoriel vidéo","doc32":"Expérience","doc33":"Gains en ligne","doc34":"Stratégie intelligente","doc35":"Gamme de prix","doc36":"Afficher les règles de trading","doc37":"Rechargez l\'ETH du réseau principal Ethereum vers le réseau zkSync Era via le pont inter-chaînes, et vous pourrez profiter de l\'interaction DApp sous forme de frais de réseau","doc38":"Paramètres intelligents","doc39":"Type de grille","doc40":"Veuillez sélectionner","doc41":"type","doc42":"Montant de l\'investissement","doc43":"Informations utilisables","doc44":"Montant pouvant être investi dans le projet","doc45":"Détails à publier","doc46":"Enregistrement de commande","doc47":"Créer une commande","doc48":"La stratégie intelligente démarre","doc49":"Sélectionnez une stratégie","doc50":"Stratégie intelligente","doc51":"Dépôt d\'ETH du réseau principal Ethereum vers le réseau zkSync Era via le pont inter-chaînes","doc52":"Ouvert","doc53":"Montant accumulé à débloquer","doc54":"L\'accumulation a été libérée","doc55":"Montant accumulé à débloquer","doc56":"Revenus stratégiques d\'aujourd\'hui","doc57":"Disque à paraître","doc58":"type","doc59":"tous","doc60":"tous","doc61":"Sélectionner","doc62":"Aucune donnée pour l\'instant !","doc63":"Montant de l\'investissement","doc64":"Montant du bénéfice","doc65":"Plateforme d\'achat","doc66":"Plateforme de vente","doc67":"Prix d\'achat","doc68":"Prix du marché","doc69":"Devise de sortie","doc70":"Délai d\'achèvement","doc71":"choisir","doc72":"dossier de politique","doc73":"Recharge à publier","doc74":"Déblocage des fonds de retour stratégique","doc75":"Sélectionner","doc76":"Revenu total","doc77":"Frais de gestion","doc78":"Exigences de mise à jour","doc79":"Réalisé","doc80":"Fonds effectifs","doc81":"Utilisateurs de première génération","doc82":"Utilisateur de deuxième génération","doc83":"Utilisateurs de la troisième génération","doc84":"Actions","doc85":"Montant de l\'investissement","doc86":"Durée de fonctionnement","doc87":"minutes","doc88":"Nombre de fois par jour","doc89":"fois","doc90":"Taux de profit","doc91":"Frais de retrait","doc92":"Retrait gratuit","doc93":"Une fois tous les {k} jours","doc94":"Avec retraits gratuits","doc95":"À ouvrir","doc96":"Stratégie","doc97":"Montant du bénéfice","doc98":"Acheter la plateforme","doc99":"Vendre la plateforme","doc100":"prix de vente","doc101":"Devise d\'entrée","doc102":"Veuillez investir le montant","doc103":"Fonds quantifiables","doc104":"Votre compte ne possède actuellement aucun actif","doc105":"Recharger maintenant","doc106":"Jours avant le retrait gratuit","doc108":"À paraître","doc107":"jours","doc109":"heures","doc110":"minutes","doc111":"secondes","doc112":"Communauté","doc113":"J\'ai lu l\'accord de confidentialité","doc114":"Réinitialiser le mot de passe de connexion","doc115":"Code de vérification Google","doc116":"Rappel","doc117":"Pour assurer la sécurité de votre compte, vous ne pouvez retirer de l\'argent que 48 heures après avoir réinitialisé votre mot de passe de connexion","doc118":"1. Vous pouvez retirer de l\'argent après avoir défini le mot de passe de transaction pour la première fois<br>2. Le mot de passe de transaction n\'est utilisé que pour les transactions. Il est recommandé de ne pas être cohérent avec le mot de passe de connexion<br>3 . Pour garantir la sécurité des fonds, le mot de passe de la transaction peut être modifié 48 heures après le retrait<br>4. Le mot de passe de la transaction ne peut être constitué que d\'une combinaison de 6 chiffres de 0 à 9, et aucun symbole ou lettre ne peut être saisi.","doc119":"Conditions d\'utilisation","doc120":"Invitations","doc121":"Invitation à obtenir des gains","doc122":"vous rapproche de l\'IA","doc123":"Équipe communautaire","doc124":"Centre de mission","doc125":"Jusqu\'à $10000","doc126":"Rang","doc127":"Ce niveau a été débloqué","doc128":"Ce niveau est verrouillé","doc129":"tutoriel vidéo","doc130":"Détails de la recharge","doc131":"Frais de mineur"},"page5":{"doc1":"Fiches de récompenses","doc2":"Bonus de mise à niveau de la grille","doc3":"indiquer clairement","doc4":"Les équipes communautaires comptant 100 membres ou plus peuvent demander des fonds pour la constitution d\'équipes communautaires","doc5":"Remise aux membres de 1ère génération","doc6":"Remise aux membres de 2e génération","doc7":"Remise aux membres de 3ème génération","doc8":"Inviter des amis","doc9":"Registre des invitations","doc10":"Copie du succès","doc11":"Effectuer des tâches et recevoir des prestations","doc12":"L\'intercepteur est en train de percevoir la récompense totale :","doc13":"Vers","doc14":"En attente","doc15":"Fait","doc16":"Félicitations pour la réalisation de la récompense de la mission","doc17":"Voir les récompenses","doc18":"Mandat à long terme","doc19":"Routine","doc20":"utilisateur actif","doc21":"utilisateur non valide","doc22":"Invitez des amis et gagnez plus","doc23":"Inviter maintenant","doc24":"Réclamez vos récompenses dès que votre invitation a abouti","doc25":"Des invitations efficaces et réussies","doc26":"homme","doc26-1":"Participation","doc27":"Envoyer une invitation","doc28":"Recharge de l\'inscription des amis","doc29":"Cliquez sur votre récompense","doc30":"Description des activités","doc31":"1. inviter x nombre d\'utilisateurs valides après que la recharge a atteint xx montant ;","doc32":"2. votre ami est un utilisateur valide s\'il télécharge et se connecte pour la première fois grâce à votre invitation et recharge son compte","doc33":"3.Inviter des personnes à effectuer un premier prélèvement xx","doc34":"Commencez votre voyage en tant qu\'équipe communautaire","doc35":"code d\'invitation","doc36":"Partager avec","doc37":"Enregistrer l\'image","doc38":"Facebook","doc39":"Whatsapp","doc40":"Telegram","doc41":"Copier le lien","doc42":"annulations","doc43":"clarification","doc44":"Nous vous attendons avec impatience","doc45":"ACTUALITÉS","doc46":"Plus","doc47":"Afficher les paramètres","doc48":"Taille de police","doc49":"Petit","doc50":"Milieu","doc51":"Gros","doc52":"Mode sombre","doc53":"Confirmer","doc54":"7 derniers jours","doc55":"30 derniers jours","doc56":"60 derniers jours","doc57":"Près de 90 jours","doc58":"Aucune donnée pour l\'instant"},"kLine":{"doc1":"Temps","doc2":"Ouverture","doc3":"Haut","doc4":"Bas","doc5":"Clôture"},"page6":{"doc1":"Aucun compte","doc2":"Inscrivez-vous maintenant","doc3":"Bonjour","doc4":"Bienvenue","doc5":"Vous avez déjà un compte","doc6":"Connectez-vous maintenant","doc7":"Actifs TTMD","doc8":"Toutes les quantités","doc9":"Fonctions communes","doc10":"Filtre temporel","doc11":"{n} ans","doc12":"{n} mois","doc13":"{n} jour","doc14":"L\'heure de début ne peut pas être supérieure à l\'heure de fin","doc15":"Téléchargement de l\'application","doc16":"Produits stratégiques TTMD de classe mondiale","doc17":"Gratuit et ouvert au public","doc18":"Lien d\'invitation","doc19":"Code d\'invitation","doc20":"Aide","doc21":"Équipe communautaire","doc22":"Nombre effectif de deuxième génération + troisième génération","doc23":"Enregistrement de réception","doc24":"Montant reçu","doc25":"Produit de la tirelire","doc26":"Génération","doc27":"Deuxième génération","doc28":"Trois générations","doc29":"quatre générations","doc30":"Cinquième génération","doc31":"Taux de remise","doc32":"Retourner les revenus","doc33":"Système de points TTMD","doc34":"Partenaire","doc35":"Points","doc36":"Récompense de promotion","doc37":"Salaire hebdomadaire","doc38":"{n} Points","doc39":"Tâche hebdomadaire","doc40":"Quantité excédentaire","doc41":"Augmenter le total des fonds quantitatifs","doc42":"Enregistrement de points","doc43":"Augmenter les points","doc44":"Déduire des points","doc45":"Filtre","doc46":"Système de points TTMD","doc47":"Bonus hebdomadaire","doc48":"Recherche Intelligente","doc49":"Rechercher","doc50":"Ce niveau est complet","doc51":"Ajouter une adresse","doc52":"Veuillez sélectionner l\'adresse","doc53":"Temps d\'arrivée estimé ≈ {n} minutes","doc54":"Dépôt minimum","doc55":"Montant minimum de retrait","doc56":"Nombre total d\'utilisateurs de la plateforme","doc57":"Volume total des transactions de la plateforme","doc58":"Bénéfice moyen de la plateforme","doc59":"Utilisateur enregistré","doc60":"Volume des transactions sur 24 heures","doc61":"Taux de rendement mensuel","doc62":"Aperçu de l\'activité","doc63":"Sixième génération","doc64":"Septième génération","doc65":"Huitième génération","doc66":"Neuvième génération","doc67":"Dixième génération","doc68":"Certification officielle","doc69":"Méthode d\'authentification","doc70":"Veuillez saisir Telegram","doc71":"Veuillez saisir WhatsApp","doc72":"Certification réussie","doc73":"L\'authentification a échoué","doc74":"Réauthentification","doc75":"Compris","doc76":"Restez à l\'écoute","doc77":"Annuler le retrait","doc78":"Êtes-vous sûr de vouloir annuler le retrait ?"},"tpage":{"doc1":"Vous rapprocher","doc2":"intelligence artificielle","doc3":"Paramètres intelligents","doc4":"Niveaux","doc5":"Obtenir des rendements plus élevés","doc6":"Cliquez sur OK ci-dessous","doc7":"Bouton Supprimer","doc8":"Cela signifie que vous avez lu et accepté","doc999":""},"lucky":{"doc1":"Mon prix","doc2":"Règles de loterie","doc3":"Valeur chanceuse","doc4":"Nombre de tirages","doc5":"Il y a {n} opportunités de loterie supplémentaires","doc6":"Nombre cumulé de tirages","doc7":"Obtenir le nombre de tirages","doc8":"Afin de récompenser les utilisateurs pour leur ferme soutien et leur amour pour CoinPlex, nous avons lancé la loterie Grand Prix G2 2023. Dans le même temps, afin d\'améliorer l\'expérience de loterie des utilisateurs, nous avons ajouté un système de points. Plus le nombre est grand, plus les points de récompense sont élevés. Loterie Plus il y a de fois, plus les points de récompense sont élevés, plus les chances de gagner des prix généreux sont élevées, et plus de prix vous attendent ","doc9":"Déballage","doc10":"Félicitations, vous avez gagné le prix","doc11":"Nombre de tirages insuffisant, veuillez inviter des amis","doc12":"Mon prix","doc13":"Encore la loterie","doc14":"Nombre de tirages restants","doc15":"Prix","doc16":"heure","doc17":"Statut d\'émission","doc18":"Émis","doc19":"Gestionnaire de contacts","doc20":"Non reçu","doc21":"Type de loterie","doc22":"La récompense est tirée {n} fois","doc23":"Obtenu {n} fois","doc24":"Roue porte-bonheur","doc25":"Loterie annoncée","doc26":"Description de la règle","doc27":"Ouvrez le coffre au trésor","doc28":"Enregistrement en boîte aveugle","doc29":"Lors de l\'exécution des \\"avantages d\'équipe\\", vous pouvez utiliser le package d\'accélération pour obtenir plus d\'avantages","doc30":"Record des temps de loterie","doc31":"Boîte surprise aveugle","doc32":"Les prix vous attendent","doc33":"Échec","doc34":"Aperçu du prix","doc35":"Inviter des amis","doc36":"Obtenez plus de temps de loterie"},"app":{"text":"Remarque : pendant le processus de téléchargement et d\'installation, il existe des situations anormales telles qu\'un échec de téléchargement, un échec d\'analyse du package d\'installation et un échec d\'installation, veuillez télécharger et réinstaller.","downs":"Téléchargements","cs":""},"new":{"doc1":"Lier l\'e-mail","doc2":"Si vous ne recevez pas l\'e-mail, veuillez vérifier vos spams","doc3":"Ancien e-mail","doc4":"Nouvel e-mail","doc5":"Changer l\'e-mail","doc6":"Veuillez saisir votre adresse email","doc7":"Veuillez entrer le code de vérification","doc8":"Vérification de l\'e-mail","doc9":"indice","doc10":"Le compte n\'est pas lié à une adresse e-mail et le mot de passe ne peut pas être réinitialisé via l\'adresse e-mail. Veuillez contacter le service client pour modifier le mot de passe de connexion.","doc11":"Pas encore de contact","doc12":"Contacter le service client","doc13":"Taux de croissance de la semaine dernière","doc14":"Croissance hebdomadaire actuelle","doc15":"Invite système","doc16":"Contacter le responsable du service client","doc17":"Échec de la correspondance de commande, veuillez réessayer dans {n} jours. Pour plus de détails, veuillez contacter le responsable du service client.","doc18":"Correspondance des commandes, commandes de stratégie uniquement, temps d\'exécution estimé {n} minutes","doc19":"Veuillez saisir","doc20":"Envoyer","doc21":"Je pense...","doc22":"expiration du délai de lien wss","doc23":"La connexion TCP a expiré, la page s\'actualisera automatiquement après 3 secondes","doc24":"Historique des dialogues de l\'IA","doc25":"Effacer les enregistrements de session","doc26":"Créer une nouvelle session","doc27":"La session en cours n\'est pas encore terminée, aucun nouvel ajout ne peut être effectué","doc28":"Dialogue avec un robot intelligent IA","doc29":"Modifier","doc30":"Modifier l\'adresse","doc31":"Veuillez saisir le code de vérification de l\'e-mail","doc32":"Vous avez une demande de retrait","doc33":"Êtes-vous sûr de vouloir annuler le retrait ?","doc34":"Oui","doc35":"Non","doc36":"Accéder à la boîte aux lettres de liaison","doc37":"Contract Pledge","doc38":"produits financiers","doc39":"Ma gestion financière","doc40":"id utilisateur: {n1} dans {n2} gage {n3} usdt","doc41":"Veuillez sélectionner la zone de gage","doc42":"Veuillez sélectionner la zone de gage","doc43":"Veuillez sélectionner la période de gage","doc44":"zone de jalonnement","doc45":"Fonds de participation","doc46":"disponible","doc47":"Récompense totale de verrouillage attendu","doc48":"Taux de rendement quotidien","doc49":"Achetez le temps","doc50":"Démarrer le calcul des intérêts","doc51":"premier profit","doc52":"dernier profit","doc53":"Red to Compte","doc54":"a lu et convenu","doc55":"Confirmer à acheter","doc56":"Présentation","doc57":"règles financières","doc58":"Investissement en série","doc59":"Montant de l\'engagement total","doc60":"Revenu historique total","doc61":"Genuations d\'aujourd\'hui","doc62":"reten","doc63":"jalonner","doc64":"expiré","doc65":"Acheter le temps","doc66":"temps échangeable","doc67":"Days de gage","doc68":"Montant de gage","doc69":"revenu cumulatif","doc70":"Générations d\'aujourd\'hui","doc71":"Confirmation de rédification","doc72":"Reven Montant","doc73":"revenu cumulatif","doc74":"Frais de transaction","doc75":"à racheter","doc76":"Expiration","doc77":"Connexion du compte","doc78":"Enregistrement du compte","doc79":"À propos","doc80":"médias sociaux","doc81":"Mes revenus","doc82":"Inviter des amis","doc83":"Invitez des amis et gagnez des pièces ensemble","doc84":"Allez à Inviter","doc85":"mon niveau","doc86":"éditer","doc87":"Informations sur le compte","doc88":"Inviter des amis, <span> Ear Money Together </span>","doc89":"Invitez des amis à être membres de votre communauté","doc90":"Inviter des amis pour le revenu","doc91":"méthode d\'invitation","doc92":"niveau VIP","doc93":"enregistrement d\'invitation","doc94":"liste d\'invitation","doc95":"Enregistrer l\'heure","doc96":"compte","doc97":"Distribution des revenus","doc98":"Record de sortie","doc99":"Informations sur le certificat","doc100":"photo avant de la carte d\'identité","doc101":"photo inversée de la carte d\'identité","doc102":"photo d\'identification portable","doc103":"Une fois la certification soumise, elle doit attendre l\'examen manuel et le temps d\'examen est terminé dans les 72 heures.","doc104":"Veuillez télécharger JPG, jpeg, fichiers de format png inférieur à 10 Mo","doc105":"soumis avec succès","doc106":"L\'authentification réelle est soumise avec succès! Une fois l\'authentification soumise, vous devez attendre l\'examen manuel. Le temps de révision est terminé dans les 72 heures. Veuillez attendre patiemment.","doc107":"je l\'ai compris","doc108":"Pour modifier ou supprimer l\'adresse, veuillez contacter le service client","doc109":"remit","doc110":"Les informations de certification ont été soumises et l\'administrateur est en cours","doc111":"<span> raison du rejet: </span> {n1}","doc112":"Vous avez terminé l\'authentification réelle.","doc113":"En attente de révision","doc114":"disparu","doc115":"La certification est réussie","doc116":"About Us","doc117":"Suivez-nous","doc118":"Obtenez des informations de première main du projet et obtenez un support de service client en ligne en temps réel","doc119":"Bonjour!","doc120":"Nous sommes là pour vous aider","doc121":"mon équipe","doc122":"Quantification intelligente de l\'IA","doc123":"Se tenir à l\'avant-garde de la technologie et des finances, réalisant une multiplication régulière des actifs","doc124":"Afficher les détails","doc125":"Hot News","doc126":"Informations d\'équipe","doc127":"{n1} génération","doc128":"Marché des crypto-monnaies","doc129":"Marché","doc130":"Bill","doc131":"Veuillez sélectionner le réseau principal","doc132":"Cette adresse ne prend en charge que {n2} de recharge {n1}","doc133":"L\'adresse e-mail a été liée, veuillez contacter le service client officiel pour gérer l\'adresse e-mail si vous avez modifié ou supprimé l\'adresse e-mail","doc134":"Le téléphone mobile a été lié, si vous modifiez le téléphone mobile ou supprimez-le, contactez le service client officiel pour y faire face","doc135":"Open Authenticator App","doc136":"Veuillez télécharger l\'application Authenticator (telle que\\" Google \\n Authenticator \\") dans l\'App Store mobile.","doc137":"clé de liaison","doc138":"Cliquez sur l\'icône\\" + \\"dans l\'application Authenticator, entrez la touche ci-dessous ou liez la touche en scannant le code.","doc139":"Ouvrez l\'application Authenticator, scannez le code pour lier","doc140":"il a atteint ce niveau","doc141":"déverrouillé","doc142":"les niveaux sont remplis","doc143":"Balance USDT","doc144":"{n1} Génération des utilisateurs valides","doc145":"non réalisé","doc146":"Droits de niveau et capitaux propres","doc147":"Algèbre des revenus d\'équipe","doc148":"{n1} génération","doc149":"trading stratégique","doc150":"Balance du compte","doc151":"Détails de la facture","doc152":"en attente de résultats de rendez-vous","doc153":"Rendez-vous non gagné","doc154":"La commande est complète, réessayez demain","doc155":"OK","doc156":"Félicitations pour la nomination réussie","doc157":"Le rendez-vous réussit, veuillez garder votre solde de portefeuille suffisant","doc158":"Nom de la politique de rendez-vous","doc159":"Montant de verrouillage stratégique","doc160":"Les stratégies devraient gagner","doc161":"Exécuter la politique","doc162":"Si la stratégie AI n\'est pas exécutée, le système correspondra automatiquement à la stratégie d\'IA et l\'exécutera en 5 minutes","doc163":"Le retrait en espèces ne peut pas être initié pour le moment","doc164":"boîte aux lettres de liaison","doc165":"recharge accumulée de 35USDT","doc166":"Le retrait en espèces peut être initié après 3 heures d\'exécution de la politique","doc167":"Le retrait suivant peut être initié après 48 heures après le succès du retrait précédent","doc168":"une ordonnance de retrait examinée","doc169":"dobind","doc170":"allez à recharger","doc171":"plus d\'invite","doc172":"Je l\'ai compris","doc173":"Experience Gold","doc174":"Nombre de nouvelles équipes aujourd\'hui","doc175":"New Team Revenue Today","doc176":"Cette condition de niveau ne se rencontre pas","doc177":"Revenu de négociation accumulé","doc178":"Le revenu de négociation d\'aujourd\'hui","doc179":"Avantages communautaires accumulés","doc180":"Revenu communautaire d\'aujourd\'hui","doc181":"à être libéré","doc182":"libéré","doc183":"Revenue Record","doc184":"oui","doc185":"non","doc186":"Évaluation totale des actifs","doc187":"Montant de la politique d\'exécution","doc188":"nom de politique","doc189":"Date de création de stratégie","doc190":"plateforme d\'exécution stratégique","doc191":"paire de trading","doc192":"type de politique","doc193":"cycle d\'exécution stratégique","doc194":"nomination","doc195":"La nomination a échoué","doc196":"peut reprendre un rendez-vous plus tard","doc197":"exécution terminée","doc198":"Exécution de stratégie","doc199":"après la fin de l\'exécution","doc200":"montant de revenus","doc201":"heure","doc202":"temps de distribution des revenus","doc203":"Temps de libération du montant d\'exécution","doc204":"Titulaire de marché OTC (retour à la moyenne)","doc205":"ENDING END","doc206":"non clos","doc207":"clarifié","doc208":"statut d\'exécution","doc209":"numéro de commande","doc210":"L\'équilibre est insuffisant, veuillez vous recharger d\'abord","doc211":"Revenu de l\'équipe de 1ère génération","doc212":"Revenu de l\'équipe de 2e génération","doc213":"Profit de l\'équipe de 3e génération","doc214":"Exécutable","doc215":"Stratégie IA","doc216":"Facture de stratégie","doc217":"Nouveau aujourd\'hui","doc218":"2 génération + 3 générations augmentent efficacement le nombre d\'utilisateurs ","doc219":"pas atteint ce niveau","doc220":"Nombre d\'utilisateurs efficaces pour 1 génération","doc221":"enregistrement","doc222":"ma communauté","doc223":"Liste communautaire","doc224":"agent de premier niveau","doc225":"agent de deuxième niveau","doc226":"agent de troisième niveau","doc227":"Total Assets","doc228":"niveau","doc229":"Marché","doc230":"Agent de niveau 1","doc231":"agent de deuxième niveau","doc232":"Agent de niveau 3","doc233":"filtre","doc234":"Montant de rendez-vous","doc235":"Générations estimées","doc236":"Montant stratégique","doc237":"Montant de nomination","doc238":"La condition n\'est pas remplie","doc239":"{n1} génération {n2} utilisateur","doc240":"Minutes","doc241":"Lumex Academy","doc242":"Ordre de l\'algorithme","doc243":"Nombre de personnes dans la communauté","doc244":"Avantages communautaires","doc245":"Membres de la communauté","doc246":"Revenu communautaire","doc247":"Mises à jour de la communauté d\'aujourd\'hui","doc248":"Revenu communautaire d\'aujourd\'hui","doc249":"Récompense de recommandation","doc250":"Informations communautaires","doc251":"Nombre d\'utilisateurs M1 effectifs","doc252":"M2+M3 augmente efficacement le nombre d\'utilisateurs","doc253":"Historique des transactions d\'algorithme","doc254":"Règles d\'exécution","doc255":"Tutoriel vidéo","doc256":"Nombre de personnes dans la communauté","doc257":"Avantages communautaires","doc258":"Mises à jour de la communauté d\'aujourd\'hui","doc259":"Revenu communautaire d\'aujourd\'hui","doc260":"Membres de la communauté","doc261":"Montant de la transaction","doc262":"Transactions programmées quotidiennement","doc263":"Frais de gaz pour le retrait","doc264":"Retrait unique","doc265":"Récompenses communautaires","doc266":"Volume du jeton","doc267":"Verrouillage des actifs","doc268":"À débloquer","doc269":"Service client en ligne","doc270":"Les fonds peuvent être réservés","doc271":"En cours d\'exécution","doc272":"Solde du portefeuille","doc273":"Le niveau ne remplit pas les conditions","doc274":"Heure du rendez-vous","doc275":"Transaction en cours","doc276":"Prix de la commande","doc277":"Rendement attendu","doc278":"Cycle d\'exécution","doc279":"Temps restant","doc280":"Portée du rendez-vous","doc281":"Règlement des bénéfices","doc283":"Aucune expérience d\'or disponible pour le trading","doc284":"Aucun rendez-vous requis","doc285":"Réalisé","doc286":"Non atteint","doc287":"Prochaine réservation","doc288":"{n}{n2} membres de {n1}","doc289":"Montant de la transaction","doc290":"Transaction à trois parties","doc291":"Prix du rendez-vous","doc292":"Prix de la transaction","doc293":"Titulaire de marché OTC","doc294":"Montant de la transaction","doc295":"Montant de la transaction","doc296":"Prix le plus élevé","doc297":"Montant de la transaction","doc298":"Taille de l\'équipe","doc299":"Récompenses totales","doc300":"Revenu du jour","doc301":"Revenus de ce mois","doc303":"Données de l\'équipe","doc304":"Votre commande","doc305":"Rendez-vous en cours"},"new1":{"doc0":"Numéro de commande","doc1":"Heure de démarrage","doc2":"État d\'exécution","doc3":"Plateforme stratégique","doc4":"Devise de transaction","doc5":"Type de politique","doc6":"Cycle d\'exécution","doc7":"Plage de montants disponibles pour la réservation","doc8":"Montant réel de la réservation","doc9":"Revenus de la commande","doc10":" Heure de déblocage des fonds "}}')
    },
    c551: function(e, o, i) {
        "use strict";
        o.__esModule = !0, o.default = void 0;
        var a = {
            name: "nume",
            tel: "apel telefonic",
            save: "salva",
            confirm: "verifica",
            cancel: "anulare",
            delete: "şterge",
            complete: "termina",
            loading: "Încărcare...",
            telEmpty: "Vă rugăm să completați numărul de telefon",
            nameEmpty: "Vă rugăm să completați numele dvs",
            nameInvalid: "Vă rugăm să introduceți numele corect",
            confirmDelete: "Sigur vrei să-l ștergi?",
            telInvalid: "Vă rugăm să introduceți numărul corect de telefon mobil",
            vanCalendar: {
                end: "capăt",
                start: "Începe",
                title: "tot",
                confirm: "Eşti sigur",
                startEnd: "Începe capăt",
                weekdays: ["End", "Start", "Select Date", "Sure", "Start End"],
                monthTitle: function(e, o) {
                    return e + "/" + o
                },
                rangePrompt: function(e) {
                    return "选择天数不能超过 " + e + " 天"
                }
            },
            vanCascader: {
                select: "Vă rugăm să selectați"
            },
            vanContactCard: {
                addText: "Adăugați contact"
            },
            vanContactList: {
                addText: "Creați un contact nou"
            },
            vanPagination: {
                prev: "Pagina anterioară",
                next: "Pagina următoare"
            },
            vanPullRefresh: {
                pulling: "Trageți în jos pentru a reîmprospăta...",
                loosing: "Opriți pentru a reîmprospăta..."
            },
            vanSubmitBar: {
                label: "合计："
            },
            vanCoupon: {
                unlimited: "无使用门槛",
                discount: function(e) {
                    return e + "折"
                },
                condition: function(e) {
                    return "满" + e + "元可用"
                }
            },
            vanCouponCell: {
                title: "优惠券",
                tips: "暂无可用",
                count: function(e) {
                    return e + "张可用"
                }
            },
            vanCouponList: {
                empty: "暂无优惠券",
                exchange: "兑换",
                close: "不使用优惠券",
                enable: "可用",
                disabled: "不可用",
                placeholder: "请输入优惠码"
            },
            vanAddressEdit: {
                area: "地区",
                postal: "邮政编码",
                areaEmpty: "请选择地区",
                addressEmpty: "请填写详细地址",
                postalEmpty: "邮政编码格式不正确",
                defaultAddress: "设为默认收货地址",
                telPlaceholder: "收货人手机号",
                namePlaceholder: "收货人姓名",
                areaPlaceholder: "选择省 / 市 / 区"
            },
            vanAddressEditDetail: {
                label: "详细地址",
                placeholder: "街道门牌、楼层房间号等信息"
            },
            vanAddressList: {
                add: "新增地址"
            }
        };
        o.default = a
    },
    c5d3: function(e, o, i) {
        "use strict";
        o.__esModule = !0, o.default = void 0;
        var a = {
            name: "Нэр",
            tel: "Утас",
            save: "хадгалах",
            confirm: "батлах",
            cancel: "Цуцлах",
            delete: "устгах",
            complete: "Дуусга",
            loading: "Ачааж байна...",
            telEmpty: "Утсаа бөглөнө үү",
            nameEmpty: "Нэрээ бичнэ үү",
            nameInvalid: "Зөв нэрийг оруулна уу",
            confirmDelete: "Та үүнийг устгахдаа итгэлтэй байна",
            telInvalid: "",
            vanCalendar: {
                end: "Дуусга",
                start: "эхлэх",
                title: "огнооны сонголт",
                confirm: "Мэдээж",
                startEnd: "эхлэл төгсгөл",
                weekdays: ["өдөр", "нэг", "хоёр", "гурав", "Дөрөв", "тав", "зургаа"],
                monthTitle: function(e, o) {
                    return e + "年" + o + "月"
                },
                rangePrompt: function(e) {
                    return "选择天数不能超过 " + e + " 天"
                }
            },
            vanCascader: {
                select: "сонгоно уу"
            },
            vanContactCard: {
                addText: "Харилцагч нэмэх"
            },
            vanContactList: {
                addText: "шинэ холбоо барих"
            },
            vanPagination: {
                prev: "өмнөх хуудас",
                next: "дараагийн хуудас"
            },
            vanPullRefresh: {
                pulling: "Сэргээхийн тулд доош татна уу...",
                loosing: "Сэргээхийн тулд суллана уу..."
            },
            vanSubmitBar: {
                label: "нийт："
            },
            vanCoupon: {
                unlimited: "Ашиглалтын босго байхгүй",
                discount: function(e) {
                    return e + "折"
                },
                condition: function(e) {
                    return "满" + e + "元可用"
                }
            },
            vanCouponCell: {
                title: "优惠券",
                tips: "暂无可用",
                count: function(e) {
                    return e + "张可用"
                }
            },
            vanCouponList: {
                empty: "Одоогоор купон байхгүй",
                exchange: "солилцох",
                close: "Купон бүү ашигла",
                enable: "боломжтой",
                disabled: "боломжгүй",
                placeholder: "Сурталчилгааны кодыг оруулна уу"
            },
            vanAddressEdit: {
                area: "талбай",
                postal: "бүсийн код",
                areaEmpty: "бүс нутгийг сонгоно уу",
                addressEmpty: "Та дэлгэрэнгүй хаягийг бөглөнө үү",
                postalEmpty: "Шуудангийн кодын буруу формат",
                defaultAddress: "Өгөгдмөл хүргэлтийн хаягаар тохируулна уу",
                telPlaceholder: "хүлээн авагчийн утасны дугаар",
                namePlaceholder: "Хүлээн авагчийн нэр",
                areaPlaceholder: "Муж/Хот/Дүүрэг сонгоно уу"
            },
            vanAddressEditDetail: {
                label: "Хаяг",
                placeholder: "Гудамжны байшингийн дугаар, давхарын өрөөний дугаар болон бусад мэдээлэл"
            },
            vanAddressList: {
                add: "хаяг нэмэх"
            }
        };
        o.default = a
    },
    cf45: function(e, o, i) {
        "use strict";
        i("14d9"), i("2c66"), i("249d"), i("40e9"), i("907a"), i("986a"), i("1d02"), i("3c5d"), i("6ce5"), i("2834"), i("4ea1"), i("b7ef");
        var a = i("3452"),
            n = i.n(a),
            t = (i("8237"), i("7c8d")),
            d = i.n(t),
            c = function(e) {
                var o = 0;
                try {
                    e = Number(e);
                    var i = e.toString().toUpperCase();
                    if (2 === i.split("E").length) {
                        var a = !1;
                        2 === i.split(".").length && (i = i.split(".")[1], 0 !== parseInt(i.split("E")[0]) && (a = !0));
                        let e = i.split("E");
                        a && (o = e[0].length), o -= parseInt(e[1])
                    } else 2 === i.split(".").length && 0 !== parseInt(i.split(".")[1]) && (o = i.split(".")[1].length)
                } catch (n) {
                    throw n
                } finally {
                    return (isNaN(o) || o < 0) && (o = 0), o
                }
            },
            r = function(e) {
                e = Number(e);
                var o = e,
                    i = c(e),
                    a = e.toString().toUpperCase();
                return o = 2 === a.split("E").length ? Math.round(e * Math.pow(10, i)) : Number(a.replace(".", "")), o
            },
            s = function(e, o, i, a) {
                var n = 0;
                switch (e) {
                    case "add":
                        n = o + i;
                        break;
                    case "sub":
                        n = o - i;
                        break;
                    case "div":
                        n = o / i;
                        break;
                    case "mul":
                        n = o * i;
                        break
                }
                return Math.abs(a - n) > 1 ? n : a
            };
        o["a"] = {
            getMainDomain() {
                return window.location.hostname.split(".").slice(-2).join(".")
            },
            amountFloat(e, o) {
                let i = e.toString();
                return 0 == i.indexOf(".") && (i = "0" + i), i = i.replace(/[^\d.]/g, ""), i = i.replace(/\.{2,}/g, "."), i = i.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), i = 2 == o ? i.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3") : i.replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, "$1$2.$3"), i.indexOf(".") < 0 && "" != i && (i = parseFloat(i)), i
            },
            decal2(e) {
                if (void 0 != e) {
                    let o = Math.floor(100 * e) / 100;
                    return o
                }
            },
            decal4(e) {
                e = Number(e);
                var o = 0,
                    i = e.toString();
                try {
                    o += c(i)
                } catch (n) {}
                var a = 1e4 * r(i) / Math.pow(10, o);
                if (void 0 != e) {
                    let e = Math.floor(a) / 1e4;
                    return e
                }
            },
            formatName(e) {
                return e.substr(0, 3) + "*******" + e.substring(10, 14)
            },
            scale(e) {
                if (1 == e) {
                    window.devicePixelRatio;
                    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + "px", "en_US" == localStorage.getItem("language") ? document.getElementsByTagName("body")[0].className = "main_en" : document.getElementsByTagName("body")[0].className = "mein_cn", window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? (document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + "px", document.getElementsByTagName("body")[0].className = "w856") : document.documentElement.style.fontSize = "50px"
                } else document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + "px", window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + "px" : document.documentElement.style.fontSize = "50px"
            },
            countDecimalPlaces(e) {
                var o;
                return Math.floor(e) === e ? 0 : (null === (o = e.toString().split(".")[1]) || void 0 === o ? void 0 : o.length) || 0
            },
            toFixed(e, o = 2) {
                let i = this.countDecimalPlaces(e);
                return o = o > i ? i : o, parseFloat(e).toFixed(o)
            },
            accAdd(e, o) {
                var i, a, n;
                e = Number(e), o = Number(o);
                try {
                    i = c(e) + 1
                } catch (d) {
                    i = 0
                }
                try {
                    a = c(o) + 1
                } catch (d) {
                    a = 0
                }
                n = Math.pow(10, Math.max(i, a));
                var t = (this.accMul(e, n) + this.accMul(o, n)) / n;
                return s("add", e, o, t)
            },
            accSub(e, o) {
                var i, a, n;
                e = Number(e), o = Number(o);
                try {
                    i = c(e) + 1
                } catch (d) {
                    i = 0
                }
                try {
                    a = c(o) + 1
                } catch (d) {
                    a = 0
                }
                n = Math.pow(10, Math.max(i, a));
                var t = Number((this.accMul(e, n) - this.accMul(o, n)) / n);
                return s("sub", e, o, t)
            },
            accDiv(e, o) {
                e = Number(e), o = Number(o);
                var i, a, n = 0,
                    t = 0;
                try {
                    n = c(e)
                } catch (l) {}
                try {
                    t = c(o)
                } catch (l) {}
                i = r(e), a = r(o);
                var d = this.accMul(i / a, Math.pow(10, t - n));
                return s("div", e, o, d)
            },
            accMul(e, o) {
                e = Number(e), o = Number(o);
                var i = 0,
                    a = e.toString(),
                    n = o.toString();
                try {
                    i += c(a)
                } catch (d) {}
                try {
                    i += c(n)
                } catch (d) {}
                var t = r(a) * r(n) / Math.pow(10, i);
                return s("mul", e, o, t)
            },
            getPlatform1() {
                let e = navigator.platform,
                    o = navigator.userAgent,
                    i = o.indexOf("Android") > -1 || o.indexOf("Linux") > -1,
                    a = !!o.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                return "Win32" == e || "Win64" == e || "MacPPC" == e || "MacIntel" == e || "X11" == e || "Linux i686" == e || "Linux aarch64" == e ? "PC" : i ? "ANDROID" : a ? "IOS" : void 0
            },
            getPlatform() {
                navigator.platform;
                let e = navigator.userAgent,
                    o = e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,
                    i = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                return o ? "ANDROID" : i ? "IOS" : "pc"
            },
            callBackApp(e) {
                let o = this.getPlatform();
                localStorage.setItem("environmentVal", "PC"), "ANDROID" == o ? window.Android && window.Android.callApp && (localStorage.setItem("environmentVal", "ANDROID"), window.Android.callApp(JSON.stringify(e))) : "IOS" == o && window.webkit && window.webkit.messageHandlers && (localStorage.setItem("environmentVal", "IOS"), window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(e)))
            },
            sign(e) {
                let o = "MBVL3yZRyPh8FDV62yekk";
                var i = [];
                for (let n in e) i.push(n);
                i.sort();
                let a = "";
                for (let n in i) {
                    let o = e[i[n]];
                    "string" != typeof o && (o = JSON.stringify(o)), a += i[n] + "=" + o + "&"
                }
                return a = a.replace(/&$/, ""), n.a.HmacSHA256(a, o).toString()
            },
            GetRandomNum(e, o) {
                var i = o - e,
                    a = Math.random();
                return e + Math.round(a * i)
            },
            base64ToBlob(e) {
                const o = e.match(/data:(.*?);/)[1],
                    i = e.split(",")[1],
                    a = window.atob(i),
                    n = new ArrayBuffer(a.length),
                    t = new Uint8Array(n);
                for (let d = 0; d < a.length; d++) t[d] = a.charCodeAt(d);
                return new Blob([n], {
                    type: o
                })
            },
            compressor(e, o, i = "files") {
                return new Promise((a, n) => {
                    let t = null;
                    if ("files" === i) {
                        if (t = e.target.files[0], !t) return void n("Please re-upload")
                    } else "bolb" === i && (t = e);
                    new d.a(t, {
                        quality: .6,
                        ...o,
                        success(e) {
                            const o = e.type.split("/")[1],
                                i = new File([e], e.name || "img." + (o || "png"), {
                                    type: e.type || "application/octet-stream"
                                });
                            a(i)
                        },
                        error(e) {
                            n(e)
                        }
                    })
                })
            }
        }
    },
    d328: function(e, o, i) {
        "use strict";
        o.__esModule = !0, o.default = void 0;
        var a = {
            name: "Nom",
            tel: "Téléphone",
            save: "enregistrer",
            confirm: "confirmer",
            cancel: "Annuler",
            delete: "effacer",
            complete: "Finir",
            loading: "Chargement...",
            telEmpty: "Veuillez remplir le numéro de téléphone",
            nameEmpty: "Veuillez remplir votre nom",
            nameInvalid: "Veuillez entrer le nom correct",
            confirmDelete: "Vous êtes sûr de vouloir le supprimer",
            telInvalid: "s'il vous plaît entrer un numéro de téléphone valide",
            vanCalendar: {
                end: "finir",
                start: "Démarrer",
                title: "sélection des dates",
                confirm: "Sûr",
                startEnd: "début Fin",
                weekdays: ["journée", "un", "deux", "trois", "quatre", "cinq", "six"],
                monthTitle: function(e, o) {
                    return e + "年" + o + "月"
                },
                rangePrompt: function(e) {
                    return "选择天数不能超过 " + e + " 天"
                }
            },
            vanCascader: {
                select: "Choisissez s'il vous plaît"
            },
            vanContactCard: {
                addText: "添加联系人"
            },
            vanContactList: {
                addText: "新建联系人"
            },
            vanPagination: {
                prev: "上一页",
                next: "下一页"
            },
            vanPullRefresh: {
                pulling: "Déroulez pour rafraîchir...",
                loosing: "Relâcher pour rafraîchir..."
            },
            vanSubmitBar: {
                label: "合计："
            },
            vanCoupon: {
                unlimited: "无使用门槛",
                discount: function(e) {
                    return e + "折"
                },
                condition: function(e) {
                    return "满" + e + "元可用"
                }
            },
            vanCouponCell: {
                title: "优惠券",
                tips: "暂无可用",
                count: function(e) {
                    return e + "张可用"
                }
            },
            vanCouponList: {
                empty: "暂无优惠券",
                exchange: "兑换",
                close: "不使用优惠券",
                enable: "可用",
                disabled: "不可用",
                placeholder: "请输入优惠码"
            },
            vanAddressEdit: {
                area: "地区",
                postal: "邮政编码",
                areaEmpty: "请选择地区",
                addressEmpty: "请填写详细地址",
                postalEmpty: "邮政编码格式不正确",
                defaultAddress: "设为默认收货地址",
                telPlaceholder: "收货人手机号",
                namePlaceholder: "收货人姓名",
                areaPlaceholder: "选择省 / 市 / 区"
            },
            vanAddressEditDetail: {
                label: "详细地址",
                placeholder: "街道门牌、楼层房间号等信息"
            },
            vanAddressList: {
                add: "新增地址"
            }
        };
        o.default = a
    },
    dd7f: function(e) {
        e.exports = JSON.parse('{"title":{"doc0":"首页","doc1":"TTMD策略","doc2":"策略","doc3":"最化记录","doc4":"团队","doc5":"团队列表","doc6":"我的消息","doc7":"任务中心","doc8":"资产","doc9":"资产明细","doc10":"充值","doc11":"提现","doc12":"我的","doc13":"升级等级","doc14":"意见反馈","doc15":"帮助中心","doc16":"帮助详情","doc17":"设置资金密码","doc18":"切换语言","doc19":"修改登录密码","doc20":"重置登录密码","doc21":"实名认证中心","doc22":"个人信息","doc23":"身份认证","doc24":"上传证件照","doc25":"登录","doc26":"注册","doc27":"邀请好友","doc28":"选择充值通道","doc29":"选择提现通道","doc30":"法币提现","doc31":"法币充值"},"load":{"refreshed":"刷新成功","loosing":"释放即可刷新...","loading":"加载中...","no_more":"没有更多了","no_open":"暂未开放","no_data":"暂无数据"},"page":{"doc1":"总览资产","doc2":"马上通过TTMD进行策略赚钱","doc3":"充值","doc4":"提现","doc5":"TTMD策略优势","doc6":"各大交易所行情","doc7":"币种/名称","doc8":"最新价格","doc9":"24H涨跌","doc10":"安全运行天数","doc11":"天","doc12":"累计产出收益","doc13":"绝对的安全机制","doc14":"用户所有的资金，都在自己的币安 交易所，TTMD策略平台只收取软件 技术使用费，币安收取每笔交易手续 费，唯一的风险就是，比特币归零， 币安网跑路。","doc15":"严格的安全机制","doc16":"通过交易所API操作资金套利，本软 件服务器服务器不存储用户API密钥 只储存在用户电脑中，不用担心黑客 入侵，API无需提币权限！","doc17":"灵活的策略参数","doc18":"近乎可编程的交易策略，让交易员更 加得心用手，如虎翼！一键托管可帮 助新用户省区繁多的学习软件的时间 成本","doc19":"强大的智能分析","doc20":"TTMD策略分布式行情服务器对交易所 行情进行采集后，使用服务端强大的 人工智能，对行情数据进行分析、处 理和筛选，提供最佳决策方案！","doc21":"可持续发展","doc22":"数字货币交易将会是一个长期存在的 市场，TTMD炒币机器人将不断精进为 您提供更多增值服务！","doc23":"提现币种","doc24":"银行","doc25":"请输入提现银行名称","doc26":"提现数量","doc27":"请输入提现数量","doc28":"可用余额","doc29":"请输入提现信息","doc30":"姓名","doc31":"请输入姓名","doc32":"银行卡号","doc33":"请输入银行卡卡号","doc34":"手续费","doc35":"实际到账","doc36":"确定","doc37":"温馨提示","doc38":"法币提现成功后大致需要3-5分钟到账，请耐心等待。","doc39":"请输入资金密码","doc40":"确认提现","doc41":"安全保护中","doc42":"请先设置资金密码","doc43":"选择主网","doc44":"选择币种","doc45":"提现地址","doc46":"提币数量","doc47":"请输入提币数量","doc48":"全部","doc49":"资产余额","doc50":"取消","doc51":"请输入提现地址","doc52":"复制成功","doc53":"暂无记录","doc54":"币种","doc55":"类型","doc56":"日期","doc57":"开始日期","doc58":"结束日期","doc59":"选择类型","doc60":"收入","doc61":"支出","doc62":"现金充值","doc63":"现金提现","doc64":"充值币种","doc65":"充值数量","doc66":"请输入充值数量","doc67":"充值金额","doc68":"法币充值支付成功后大致需要3-5分钟到账，请耐心等待， 手续费将在到账金额里扣除。","doc69":"确认充值","doc70":"复制","doc71":"注意","doc7222222":"最小充值：{i1} USDT,小于最小金额将无法到账 请勿向上述地址充值非USDT 资产，否则资产无法找回 您的充值地址不会经常变动，可以重复充值，如有更换，我 们会通过公告或邮件通知您。","doc72":"每次充值需要获取最新存款地址，存款地址十分钟之后失效，转移过期地址账户造成资金损失TTMD概不负责！","doc73":"当前价格","doc74":"交易记录","doc75":"USDT充值","doc76":"越南法币支付","doc77":"USDT提现","doc78":"越南法币提现","doc79":"请输入手机号码","doc80":"请输入邮箱","doc81":"短信验证码","doc82":"邮箱验证码","doc83":"获取验证码","doc84":"邀请码不能为空","doc85":"请输入密码(6-20位字母、數字組合字符)","doc86":"请再次输入密码","doc87":"我己阅读并同意","doc88":"用户注册协议","doc89":"己有账户？立即","doc90":"APP下载","doc91":"选择国际手机区号","doc92":"搜索区号","doc93":"语言切换","doc94":"手机注册","doc95":"邮箱注册","doc96":"操作频繁.晚点再试","doc97":"请输入正确的手机号","doc98":"请输入正确的邮箱","doc99":"发送成功","doc100":"密码应为6-20位字母、数字组合字符","doc101":"两次密码输入不一致","doc102":"请勾选用户注册协议","doc103":"注册成功","doc104":"请输入密码","doc105":"忘记密码","doc106":"没有账户？立即","doc107":"手机登录","doc108":"邮箱登录","doc109":"登录成功","doc110":"手机","doc111":"邮箱","doc112":"登录密码","doc113":"确认密码","doc114":"请再次输入密码","doc115":"验证码","doc116":"总收益","doc117":"总充值","doc118":"总提现","doc119":"团队数据总览","doc120":"新增人数","doc121":"新增收益","doc122":"新增充值","doc123":"新增提现","doc124":"收益分析","doc125":"累计团队人数","doc126":"查看团队列表","doc127":"累计收益","doc128":"累计充值","doc129":"累计提现","doc130":"最近三代数据","doc131":"一代数据","doc132":"二代数据","doc133":"三代数据","doc134":"团队人数","doc135":"提现金额","doc136":"今日","doc137":"近7天","doc138":"近30天","doc139":"近60天","doc140":"任务收益","doc141":"策略收益","doc142":"推荐策略奖励","doc143":"无效用户","doc144":"已完成","doc145":"正在进行","doc146":"领取奖励","doc147":"每日任务","doc148":"成长任务","doc149":"选择时间","doc150":"投资金额","doc151":"利润","doc152":"买入平台","doc153":"卖出平台","doc154":"买入价格","doc155":"卖出价格","doc156":"投入币种","doc157":"完成时间","doc158":"策略记录","doc159":"今日收益","doc160":"近7天收益","doc161":"今日剩余启动次数","doc162":"收益","doc163":"单次启动TTMD策略","doc164":"TTMD运行面板流程","doc165":"性别","doc166":"男","doc167":"女","doc168":"国籍","doc169":"请输入国籍","doc170":"证件类型","doc171":"证件号","doc172":"请输入证件号","doc173":"证件照上传","doc174":"选择证件","doc175":"身份证","doc176":"护照","doc177":"请上传身份证正面照","doc178":"请上传护照","doc179":"请上传身份证反面照","doc180":"昵称","doc181":"手机号","doc182":"邮箱号","doc183":"实名认证","doc184":"去认证","doc185":"未通过","doc186":"待审核","doc187":"己认证","doc188":"保存","doc189":"更新成功","doc190":"当前等级","doc191":"下一级会员等级","doc192":"有效金额","doc193":"有效会员","doc194":"等级列表","doc195":"等级","doc196":"每天可使用TTMD机器人","doc197":"请输入验证码","doc198":"旧密码","doc199":"请输入您的旧交易密码","doc200":"资金密码","doc201":"请输入交易密码","doc202":"再次输入密码进行确认","doc203":"1、您的资金密码是用来交易，提现喝账户安全设置，建议不 要与登录密码一样，由此生产的账户被盗，本站概不负责；","doc204":"2、修改资金密码之后，48小时之内不能提现。","doc205":"修改交易密码","doc206":"重置交易密码","doc207":"设置交易密码","doc208":"密码格式不正确","doc209":"请输入旧密码","doc210":"请输入您的旧登录密码","doc211":"新密码","doc212":"新的登录密码，6-20数字、字母组合","doc213":"设置成功","doc214":"邀请链接","doc215":"复制邀请链接","doc216":"邀请码","doc217":"复制邀请码","doc218":"未认证","doc219":"您的证件审核未通过","doc220":"您的证件正在审核中","doc221":"个人隐私信息安全保障中","doc222":"完善身份信息，体验更多服务","doc223":"去完善","doc224":"当前开通最高优惠通道","doc225":"普通用户","doc226":"通道","doc227":"升级","doc228":"资产总览","doc229":"退出登录","doc230":"联系客服","doc231":"交易密码","doc232":"清除缓存","doc233":"退出成功","doc234":"清除成功","doc235":"请输入你的意见","doc236":"提交","doc237":"软件功能问题","doc238":"投诉与建议","doc239":"页面奔溃与不稳定","doc240":"其他","doc241":"请输入您的反馈意见","doc242":"拍摄/上传您的二代身份证","doc243":"拍摄/上传您护照","doc244":"点击拍摄/上传人像面","doc245":"点击拍摄/上传国微面","doc246":"确定上传","doc247":"TTMD钱包","doc248":"次","doc249":"人","doc250":"如果长时间未邀请好友，会导致你的资产无法提现，你可通过邀请好友恢复提现","doc251":"分成比例","doc252":"今日持币收益","doc254":"平台介绍","doc255":"人力资源智能策略简介","doc256":"世界上有许多数字货币交易所,每个交易所都有将法定货币兑换为数字货币的功能。每种交易所将法定货币换成数字货币的价格不同,人们可以低价买入,卖得高价,赚取汇率差异","doc257":"在多个交易所手动低价买入和高价出售的过程非常耗时。当价格发生变化时,运营和交易将花费太长时间, 并且会错过最佳汇率,导致交易利润下降。","doc258":"因此,TTMD自动策略系统似乎避免了手动问题,并提高了定量交易的利润率。<br>TTMD自动策略系统可以在主要交易所自动搜索BTC，ETH，USDT和其他数字货币的最低销售价格,并在几 秒钟内快速买入。<br/><br/>当货币价格到达系统时,当销售价格自动设置时,它将在几秒钟内快速售出。<br/><br/>在短短几分钟内,低价购买和高价销售的过程可以自动<br/><br/>完成,定量交易可以快速完成。24小时不间断的数据收集,无需手动观察市场,高效稳 定即可赚取收入,这是TTMD自动策略系统。","doc259":"如何赚钱","doc260":"单击按钮开始自动定量交易,自动定量交易将在3—5分钟内完成。<br/>完成自动定量交易收入的50%是平台赚取的利润,其余50%是平台赚取的利润。利润属于用户。","doc261":"例如:在Binance上以5000USDT的价格购买BTC,在Ouyi上以5050USDT的价格出售BTC,<br/>赚取50USDT的利润。<br/>该平台将获得25 USDT利润,留下25USDT利润归用户所有。","doc262":"VIP级别收益简介","doc2633":"等级操作金额1-500<br/>您可以每天进行3次自动定量交易,每笔定量交易的回报率为2.0%-3.0%。 500USDT每天3次自动策略可以赚取10USDT-15USDT。","doc263":"等级操作金额 500-4999<br/>您可以每天进行3次自动定量交易,每笔定量交易的回报率为2.0%-3.0%。 1000USDT每天3次自动策略可以赚取20USDT-30USDT。 ","doc264":"等级操作金额3000-9999<br/>您可以每天进行4次自动定量交易,每笔定量交易的回报率为2.5%-3.5%。1000USDT每天4次自动策略可以赚取25USDT-35USDT。","doc2644":"等级操作金额5000-99999<br/>您可以每天进行5次自动定量交易,每笔定量交易的回报率为3.0%-4.0%。 1000USDT每天5次自动策略可以赚取30USDT-40USDT。","doc2645":"等级操作金额10000-999999<br/>您可以每天进行6次自动定量交易,每笔定量交易的回报率为3.5%-4.5%。 1000USDT每天6次自动策略可以赚取35USDT-45USDT。","doc2646":"等级操作金额20000-999999<br/>您可以每天进行7次自动定量交易,每笔定量交易的回报率为3.5%-4.5%。 1000USDT每天7次自动策略可以赚取35USDT-45USDT。","doc265":"每个VIP等级的提现手续费","doc2655":"当你是VIP0 提现手续收取3%<br/>当你是VIP1 提现手续收取3%<br/>当你是VIP2 提现手续收取2%<br/>当你是VIP3 提现手续收取2%<br/>当你是VIP4 提现手续收取1.5%<br/>当你是VIP5 提现手续收取1%","doc2656":"介绍/邀请人三级委托","doc266":"为了快速推广TTMD自动定量交易APP,提高平台的知名度,并允许更多投资者加入TTMD。TTMD决定采用三层分发模型进行推广,并快速积累平台用户。","doc267":"三级分发是在所有营销模式中开发用户的最快方式。为了提高发展速度和代理福利,TTMD建立了以下三级分配机制。","doc268":"1。使用您自己的邀请代码邀请您周围的朋友A加入TTMD,您可以获得朋友A每日自动策略交易收入的 18%","doc269":"2。你的朋友A使用他的邀请代码邀请他的朋友B加入TTMD,你可以获得朋友B每日自动策略交易收入的 6%","doc270":"3。朋友B使用他的邀请代码邀请他的朋友C加入TTMD, 您可以获得朋友C每日自动策略交易收入的3%。","doc271":"如果您组建自己的团队,您的朋友A邀请朋友B加入,朋友B邀请朋友C加入,那么您就会组建一个完整的三级分销团队。<br/><br/>当您的朋友A、朋友B，朋友C完成今天的自动定量交易时,您可以在代理佣金当天获得他们收入的 18+6+3=27%的团队佣金 。","doc2657":"如何计算你的团队佣金","doc2658":"你所有的下属都是10A+100B+1000C=1110人<br/>假设你所有的下属每天在他们的账户中赚取 100   美元，<br/>你的A级代理团队佣金收入=100*18%*10 人=180  美元，<br/>你的B级代理团队佣金收入=100*6%*100 人=600  美元，<br/>你的C级代理团队佣金收入=100*3%*1000人=3000 美元，<br/>你每天的团队收入是A100+B180+C3000=3780 美元，<br/>你每月的团队收入是 3780*30  天 =113400   美元，<br/>你每年的团队收入是 3780*365 天 =1379700  美元，<br/><br/>这是一项非常重要的收入","doc272":"开启存币生息","doc273":"正在产出利息","doc274":"存幣生息收益","doc275":"联系我们","doc276":"失效","doc277":"驳回","doc278":"审核中","doc279":"姓","doc280":"名","doc281":"请输入您的姓氏","doc282":"请输入您的名","doc283":"提现72小时内到账","doc284":"VIP1: 等级操作金额 35-500<br>您可以每天进行3次自动定量交易，每天定量交易的回报率为1.7%-1.9%。<br>500USDT每天3次自动策略可以赚取8USDT-10USDT。<br><br>VIP2: 等级操作金额500-3000<br>您可以每天进行4次自动定量交易，每天定量交易的回报率为2.1%-2.3%。<br>3000USDT每天4次自动策略可以赚取60USDT-70USDT。<br><br>每个VIP等级的提款手续费<br>为了快速推广TTMD自动定量交APP，提高平台的知名度，并允许更多投资者<br>加入TTMD。TTMD决定采用三层分发模型进行推广，并快速积累平台用户。<br><br>三级分发是在所有营销模式中开发用户最快方式，为了提高发展速度和代理<br>福利，TTMD建立了以下三级分配制度。<br><br>1. 使用您的邀请代码邀请您周围的朋友A加入TTMD,您可以获得朋友A每日<br>自动策略交易收入的21%。<br>2. 您的朋友A使用他的邀请代码邀请他的朋友B加入TTMD,你可以活动朋友B<br>每日自动策略交易收入的7%。<br><br>3. 朋友B使用他的邀请代码邀请他的朋友C加入TTMD,你可以活动朋友C每日<br>自动策略交易收入的3%。<br><br>如果您组建自己的团队，您的朋友A邀请朋友B加入，朋友B邀请朋友C加入，<br>那么您会组建一个完整的三级分销团队。<br><br>当您的朋友A,朋友B,朋友C完成今日的自动定量交易时，您可以在代理佣金当日<br>获得他们收入的21+7+3=31%的团队佣金。","doc285":"体验天数","doc286":"收益百分比","doc287":"佣金百分比","doc288":"请输入正确的手机号注册，使用无法验证的手机注册登录将无法更改密码","doc289":"请输入正确的邮箱注册，使用无法验证的邮箱注册登录将无法更改密码","doc290":"订单号","doc291":"到账数量","doc292":"状态","doc293":"充值地址","doc294":"创建日期","doc295":"返回","doc296":"最小充值：1 USDT 小于最小金额将无法到账<br>每次充值需要获取最新存款地址，存款地址十分钟之后失效，转移过期地址账户以及非USDT资产造成资金损失将无法找回，TTMD概不负责！","doc306":"绑定手机号","doc307":"绑定邮箱","doc308":"未绑定手机号","doc309":"请先绑定邮箱","doc310":"区号","doc311":"请填写国际手机区号","doc312":"为了进一步保护账户安全，您需要先完成邮箱绑定验证再进行登录","doc313":"用户ID","doc314":"幸运大转盘","doc315":"还有","doc316":"次抽奖机会","doc317":"我的奖品","doc318":"规则","doc319":"邀请有效会员获取抽奖次数","doc320":"点击\\n抽奖","doc321":"立即领取","doc322":"时间","doc323":"奖品","doc324":"抽奖次数不足，请前往邀请好友","doc325":"汇率","doc326":"划转","doc327":"存钱罐","doc328":"闪兑","doc329":"电子钱包","doc330":"灵活钱包","doc331":"存钱罐","doc332":"策略收益","doc333":"领取存钱罐","doc334":"存钱罐等级","doc335":"当用户等级与存钱罐等级相同时，可领取存钱罐的余额，一段时间之后存钱罐会自动升级","doc336":"存钱罐余额","doc337":"领取","doc338":"升级天数","doc339":"存钱罐记录","doc340":"划转币种","doc341":"余额","doc342":"划转数量","doc343":"请输入划转数量","doc344":"确定划转","doc345":"划转数量不能大于","doc346":"划转数量不能小于1","doc347":"从","doc348":"到","doc349":"兑换数量","doc350":"请输入兑换数量","doc351":"确定闪兑","doc352":"闪兑数量不能大于","doc353":"请输入闪兑数量","doc354":"闪兑数量不能小于1","doc355":"直推会员","doc356":"團隊會員","doc357":"每天可策略次数","doc358":"1.为防止不法洗钱活动，第一次存款的用户需要每天完成策略后才能进行提款<br>2. 每日策略当天次数结束之后需要等待3小时后才能申请提款<br>3.为严格保证账户资金安全，账户在更改邮箱或TRC20 USDT提现地址和提现密码后，将自动触发资金系统保护机制。 48小时后，系统自动解除资金保护状态，开始正常提现流程<br>每个VIP等级的提款手续费<br>VIP1 提款手续费 5.0%<br>VIP2 提款手续费 4.0%<br>VIP3 提款手续费 3.0%<br>VIP4 提款手续费 2.0%<br>VIP5 提款手续费 1.0%<br>VIP6 提款手续费 0.0%","doc359":"下一步","doc360":"昨日收益","doc361":"总团队佣金","doc362":"昨日团队佣金","doc363":"今日团队佣金","doc364":"更多活动信息","doc365":"新闻资讯","doc366":"合约质押","doc367":"驳回原因"},"page2":{"doc1":"灵活资金","doc2":"待释放资金","doc3":"欢迎来到ITP","doc4":"手机号码","doc5":"密码","doc6":"今日可策略次数","doc7":"策略总收益","doc8":"持币总收益","doc9":"待释放记录","doc10":"VIP等级","doc11":"升级条件","doc12":"权益","doc13":"最低策略金额","doc14":"最高策略金额","doc15":"每日可策略次数","doc16":"日化收益率","doc17":"绝对的安全机制","doc18":"策略的实战成绩","doc19":"严格的策略参数","doc20":"自动化套利思路","doc21":"可持续发展","doc22":"TTMD智能策略系统非常准确地计算出开仓情况，自动在您的账户上交易并24*365不间断工作，我们在2016年设置了AI策略交易，它尽一切努力稳定的提升每月利润","doc23":"TTMD提供大量交易数据供给智能AI学习，经过千万次演练和实战，已具备纪律性决策和执行能力，以无任何失败和亏损的卓越成绩上线","doc24":"根据策略AI智能运行决策的结果，策略交易智能系统会自动选择增长与本阶段相比，估值、资金、综合评估有利的交易机会，然后做出精准的操作策略，可以避免大部分的“绞尽脑汁”的决定","doc25":"策略系统通过全面的扫描机会，完全自动化一键完成，快速锁定代币产品之间利润差价，通过低价买入、高价卖出来制定策略并获利","doc26":"数字货币交易将会是一个长期存在的市场，TTMD策略智能系统将不断优化性能，最新数字算法，为您提供更多财富增值服务","doc27":"合作伙伴","doc28":"分享媒体","doc29":"证件正面","doc30":"证件反面","doc31":"手持证件","doc32":"提交审核","doc33":"未实名","doc34":"实名认证失败","doc35":"实名待审核","doc36":"实名已认证","doc37":"请先实名认证","doc38":"更改登入密码，交易密码后，将触发资金安全保护机制 <br>48小时后系统将自动解除资金保护状态，开始正常提现流程<br>最低提取39USDT，提现需要收取一定的手续费！<br><br>\\n1.为防止非法洗钱活动，首次存款的用户需要完成3天的策略才可以提取<br>2.完成当日所有策略次数，并至少提取39USDT<br>3.每次提现的额度以平台实际规定为准，且每次提现需要收取一定的手续费作为平台的维护费<br><br>提现手续费规则<br>G1 提款手续费 5.0%<br>G2 提款手续费 4.0%<br>\\nG3 提款手续费 3.0%<br>G4 提款手续费 2.0%<br>G5 提款手续费 1.0%<br>G6 提款手续费 0.0%","doc39":"提币地址","doc40":"请输入交易密码","doc41":"请输入取款地址","doc42":"新手任务","doc43":"进阶任务","doc44":"请先设置交易密码","doc45":"累计有效会员","doc46":"有效余额","doc47":"有效充值","doc48":"问题类型","doc49":"意见","doc51":"共 {k1} 人","doc52":"好友层级","doc53":"一层返佣金额总计","doc54":"二层返佣金额总计","doc55":"三层返佣金额总计","doc56":"有效","doc57":"无效","doc58":"一层","doc59":"二层","doc60":"三层","doc61":"选择层级","doc62":"资产列表","doc63":"TTMD数字科技","doc64":"全球区块链生态建设","doc65":"AI托管","doc66":"托管详情","doc67":"托管收益明细","doc68":"托管成功","doc69":"每次策略收益率","doc70":"可用资产","doc71":"冻结资产","doc72":"完成任务可获得更多奖励","doc73":"托管金额","doc74":"你有{i1}个机器人 在托管运行策略","doc75":"日收益率(浮动)","doc76":"投入范围","doc77":"托管期限","doc78":"托管中","doc79":"己结束","doc80":"日收益","doc81":"(浮动)","doc82":"托管开始时间","doc83":"托管结束时间","doc84":"收入明细","doc85":"AI托管策略","doc86":"进行中","doc87":"历史托管","doc88":"托管收益","doc89":"托管收益率","doc90":"距离托管到期还有{i1}天","doc91":"托管记录","doc92":"已结束","doc93":"机器人正在努力工作","doc94":"再托管一笔","doc95":"我的托管","doc96":"日收益率","doc97":"通过AI数据分析出入场机会，同时增设均线过滤等逻辑，减少人为的情绪影响，在提高收益的同时保证本金的安全，使得出入场的正确率大大提升","doc98":"托管周期","doc99":"交易类型","doc100":"智能选取","doc101":"交易币种","doc102":"智能token组合","doc103":"智能token组合根据AI大数据选取多个交易对组合，风险更低，收益更高","doc104":"投入金额","doc105":"托管确认","doc106":"确定托管","doc107":"投入额度","doc108":"投入额度不能小于","doc109":"投入额度不能大于","doc110":"智能选取","doc111":"TTMD世界级策略产品 <br>免费对外开放使用","doc112":"白皮书","doc113":"理财","doc114":"理财专区","doc115":"理财金额","doc116":"理财总收益","doc117":"持有订单","doc118":"盲盒开奖","doc119":"盲盒记录","doc120":"我的","doc121":"我的订单","doc122":"昨日收益","doc123":"投资额度","doc124":"管理费","doc125":"所得税","doc126":"期限","doc127":"日收益率","doc128":"总收益率","doc129":"投入","doc130":"投入理财","doc131":"理财详情","doc132":"每日利率","doc133":"投资期限","doc134":"管理费用","doc135":"投资所得税","doc136":"天","doc137":"计息方式","doc138":"每日收益，到期自动归还本金","doc139":"每日收益","doc140":"预计总收益","doc141":"理财等级","doc142":"投资金额","doc143":"余额","doc144":"代金卷","doc145":"无可用代金券","doc146":"抵扣金额","doc147":"请选择代金券","doc148":"购买金额不能超过余额","doc149":"投资金额需在","doc150":"投资产品","doc151":"开始时间","doc152":"结束时间","doc153":"代金卷抵扣","doc154":"实际支付","doc155":"无","doc156":"信息无误，确认投资","doc157":"确定投资","doc158":"理财投资确定","doc159":"理财成功","doc160":"正在努力工作中","doc161":"再投入一笔","doc162":"托管成功","doc163":"理财订单","doc164":"没有更多了","doc165":"全部","doc166":"持有","doc167":"到期","doc168":"过期","doc169":"收益率","doc170":"管理费","doc171":"预估收益","doc172":"可使用的优惠券","doc173":"不可使用的优惠券","doc174":"理财现金抵用卷","doc175":"立即使用","doc176":"优惠券不可用的原因：","doc177":"我的优惠券","doc178":"开启盲盒抽取代金奖励","doc179":"币种行情","doc180":"社区奖励","doc181":"团队成员","doc182":"专区","doc183":"升级等级","doc184":"我的优惠券","doc185":"恭喜开出","doc186":"进行“理财投资”时，可使用代金券抵扣","doc187":"再投入一笔","doc188":"理财收益","doc189":"推荐奖励","doc190":"团队收益","doc191":"会员等级分析（三代）","doc192":"人数","doc193":"直推会员","doc194":"购买产品","doc195":"最低理财金额","doc196":"最高理财金额","doc197":"专区产品","doc198":"第一代","doc199":"第二代","doc200":"第三代","doc201":"已投资金额","doc202":"活动期限","doc203":"更改登录密码，交易密码将触发资金保护机制.48小时后将自动解除资金保护状态，开始正常提现流程","doc204":"1.为防止非法洗钱活动，用户未购买理财产品无法进行提现","doc205":"2.每笔提现将固定收取","doc206":"u手续费作为平台运营资金","doc207":"3.每次提现的额度以平台实际固定的为准，每个等级都将扣除对应的所得税，等级越高，所得税费率越低","doc208":"所得税率规则","doc209":"等级所得税率","doc210":"您的新密码必须与旧密码不同","doc211":"实名认证","doc212":"删除账号","doc213":"确定删除TTMD 账号","doc214":"删除TTMD账号前请阅读以下条例:","doc215":"删除账号后，该账号内的所有交易记录，用户资产，投入产生的收益、身份验证信息以及银行帐号的绑定都会进行清空和归零，","doc216":"为避免你的资产损失，请先确定账户内没有余额:","doc217":"点击下方的确定即“删除按钮”，即代表你已阅读并同意","doc218":"确定删除","doc219":"抽取规则","doc220":"盲盒记录","doc221":"剩余","doc222":"邀请好友获取","doc223":"盲盒","doc224":"立即抽取","doc225":"谢绝未成年人使用或在监护人的监督指导下体验","doc226":"已过期","doc227":"已使用","doc228":"每日收入，到期还本","doc229":"到期返本返息","doc230":"记住账号密码","doc231":"税收比例","doc232":"第四代","doc233":"第五代","doc234":"第六代","doc235":"第七代","doc236":"第八代","doc237":"第九代","doc238":"第十代"},"page3":{"doc1":"谷歌验证器","doc2":"安全验证","doc3":"谷歌验证码","doc4":"请输入谷歌验证码","doc5":"确定","doc6":"谷歌验证开关","doc7":"未认证","doc8":"已认证","doc9":"谷歌验证开关","doc10":"请先绑定谷歌验证器","doc11":"第一步","doc12":"请在手机应用商店下载 Google身份验证器","doc13":"第二步","doc14":"通过谷歌身份验证器，扫描二维码绑定","doc15":"复制密钥","doc16":"第三步","doc17":"请输入谷歌验证码","doc18":"确认绑定","doc19":"热门预测","doc20":"查看更多","doc21":"已解锁","doc22":"{K}可解锁","doc23":"近7天收益率","doc24":"托管期限","doc25":"托管人数","doc26":"托管总收益","doc27":"{k}天","doc28":"涨幅榜","doc29":"成交额榜","doc30":"24H涨跌","doc31":"24H成交额","doc32":"合作伙伴","doc33":"邀请返佣","doc34":"极速获取收益","doc35":"会员等级","doc36":"开启趣味交易","doc37":"网格","doc38":"策略","doc39":"策略订单","doc40":"策略收益","doc41":"可解锁","doc42":"可投金额","doc43":"投资范围","doc44":"投资资金","doc45":"投资额度"},"page4":{"doc1":"当前","doc2":"高","doc3":"低","doc4":"开盘价","doc5":"成交额","doc6":"1分钟","doc7":"5分钟","doc8":"15分钟","doc9":"30分钟","doc10":"1小时","doc11":"1天","doc12":"1周","doc13":"安全验证(以下二选一)","doc14":"发送","doc15":"请输入新密码","doc16":"请再次输入新密码","doc17":"到账数量","doc18":"提现手续费","doc19":"限时特权","doc20":"天免提币手续费","doc21":"最小提现数量","doc22":"最大提现数量","doc23":"您已具备免费取款","doc24":"数量","doc25":"地址","doc26":"日期","doc27":"详情","doc28":"可用金额","doc29":"冻结金额","doc30":"资产明细","doc31":"视频教程","doc32":"体验","doc33":"网赚","doc34":"智能策略","doc35":"价格区间","doc36":"查看交易规则","doc37":"通过跨链桥将以太坊主网 ETH 充值至 zkSync Era 网络，即可作为网络费用体验DApp交互","doc38":"智能设定","doc39":"网格类型","doc40":"请选择","doc41":"类型","doc42":"投入金额","doc43":"可使用资","doc44":"项目可投入金额","doc45":"待释放明细","doc46":"订单记录","doc47":"创建订单","doc48":"智能策略启动中","doc49":"选择策略","doc50":"智能策略","doc51":"通过跨链桥将以太坊主网 ETH 充值至 zkSync Era 网络","doc52":"已开放","doc53":"累积待释放金额","doc54":"累积已释放","doc55":"累积待释放金额","doc56":"今日策略收益","doc57":"待释放记录","doc58":"类型","doc59":"全部","doc60":"全部","doc61":"选择","doc62":"暂无数据！","doc63":"投资金额","doc64":"盈利金额","doc65":"购买平台","doc66":"销售平台","doc67":"买入价格","doc68":"市场价格","doc69":"产出货币","doc70":"完成时间","doc71":"选择年月日","doc72":"智能策略记录","doc73":"充值待释放","doc74":"策略返回资金待释放","doc75":"选订","doc76":"策略总收益","doc77":"手续费率","doc78":"升级条件","doc79":"已达到","doc80":"有效资金","doc81":"一代推荐有效用户","doc82":"二代推荐有效用户","doc83":"三代推荐有效用户","doc84":"权益","doc85":"投资金额","doc86":"策略时长","doc87":"分钟","doc88":"每天智能策略次数","doc89":"次","doc90":"收益率","doc91":"提币手续费","doc92":"限时特权","doc93":"{k}天免提币手续费","doc94":"您已具备免费取款","doc95":"待开放","doc96":"策略","doc97":"盈利金额","doc98":"买入平台","doc99":"卖出平台","doc100":"卖出价格","doc101":"投入币种","doc102":"请投入金额","doc103":"可策略资金","doc104":"您的账户暂时没有任何资产","doc105":"立即充值","doc106":"距离免费提款","doc108":"待释放","doc107":"天","doc109":"时","doc110":"分","doc111":"秒","doc112":"社区","doc113":"我已阅读隐私协议","doc114":"重置登录密码","doc115":"谷歌验证码","doc116":"温馨提示","doc118":"1.首次完成交易密码设置即可提现<br>2.交易密码仅用于交易，建议勿与登录密码一致 <br>3.为确保资金安全，修改交易密码后48小时才能提现 <br>4.交易密码只能是0-9的任意6位数字组合，不能输入任何符号或字母","doc117":"为确保账户安全，重置登录密码后48小时才能提现","doc119":"运作规则","doc120":"邀请","doc121":"邀请获得收益","doc122":"让您更接近人工智能","doc123":"社区团队","doc124":"任务中心","doc125":"最高可获得 $10000","doc126":"等级","doc127":"已解锁该等级","doc128":"未解锁该等级","doc129":"策略视频教程","doc130":"充值明细","doc9999":"我已阅读隐私协议","doc131":"矿工费"},"page5":{"doc1":"奖励记录","doc2":"网格升级奖励","doc3":"注明","doc4":"社区团队达到100名以上可申请社区团队建设资金","doc5":"一代成员返利","doc6":"二代成员返利","doc7":"三代成员返利","doc8":"邀请好友","doc9":"邀请记录(直邀成员)","doc10":"复制成功","doc11":"做任务 领福利","doc12":"截取目前领取总奖励：","doc13":"进行中","doc14":"待领取","doc15":"已完成","doc16":"恭喜完成任务奖励","doc17":"查看奖励","doc18":"长期任务","doc19":"日常任务","doc20":"有效用户","doc21":"无效用户","doc22":"邀请好友，赚取更多收益","doc23":"立即邀请","doc24":"邀请成功后，马上领取奖励","doc25":"有效成功邀请","doc26":"人","doc26-1":"参与方式","doc27":"发送邀请","doc28":"好友注册充值","doc29":"点击领取奖励","doc30":"活动说明","doc31":"1.充值达到xx金额后邀请x位有效用户；","doc32":"2.好友通过你的邀请首次下载并登录且充值，是有效用户，","doc33":"3.邀请人首充xx","doc34":"开始你的社区团队之旅","doc35":"邀请码","doc36":"分享至","doc37":"保存图片","doc38":"Facebook","doc39":"Whatsapp","doc40":"Telegram","doc41":"复制链接","doc42":"取消","doc43":"规则","doc44":"敬请期待","doc45":"新闻","doc46":"更多","doc47":"查看设置","doc48":"字体大小","doc49":"小","doc50":"中","doc51":"大","doc52":"深色模式","doc53":"确认","doc54":"近7天","doc55":"近30天","doc56":"近60天","doc57":"近90天","doc58":"暂无数据"},"kLine":{"doc1":"时间","doc2":"开盘价","doc3":"最高价","doc4":"最低价","doc5":"收盘价"},"page6":{"doc1":"没有账号","doc2":"立即注册","doc3":"你好","doc4":"欢迎来到","doc5":"已有账号","doc6":"立即登录","doc7":"TTMD资产","doc8":"全部数量","doc9":"常用功能","doc10":"时间筛选","doc11":"{n}年","doc12":"{n}月","doc13":"{n}日","doc14":"开始时间不能大于结束时间","doc15":"APP下载","doc16":"TTMD世界级策略产品","doc17":"免费对外开放使用","doc18":"邀请链接","doc19":"邀请码","doc20":"帮助","doc21":"社区团队","doc22":"二代+三代有效人数","doc23":"领取记录","doc24":"领取金额","doc25":"存钱罐收益","doc26":"一代","doc27":"二代","doc28":"三代","doc29":"四代","doc30":"五代","doc31":"返佣比例","doc32":"返拥收益","doc33":"TTMD积分系统","doc34":"合作伙伴","doc35":"当前积分","doc36":"晋升奖励","doc37":"周薪","doc38":"{n}积分","doc39":"周任务","doc40":"超额数量","doc41":"增加量化总资金","doc42":"积分记录","doc43":"增加积分","doc44":"扣除积分","doc45":"筛选","doc46":"TTMD积分系统","doc47":"周奖金","doc48":"智能搜索","doc49":"搜索","doc50":"此等级已满额","doc51":"新增地址","doc52":"请选择地址","doc53":"预计到账时间≈{n}分钟","doc54":"最小充值","doc55":"最小提币额度","doc56":"平台总用户数","doc57":"平台总交易额","doc58":"平台平均盈利","doc59":"注册用户","doc60":"24小时交易量","doc61":"月收益率","doc62":"活动总览","doc63":"六代","doc64":"七代","doc65":"八代","doc66":"九代","doc67":"十代","doc68":"官方认证","doc69":"认证方式","doc70":"请输入Telegram","doc71":"请输入whatsapp","doc72":"认证通过","doc73":"认证失败","doc74":"重新认证","doc75":"知道了","doc76":"敬请期待","doc77":"取消提现","doc78":"是否确认取消提币","doc79":""},"tpage":{"doc1":"让您更接近","doc2":"人工智能","doc3":"智能设定","doc4":"级别","doc5":"获得更高的回报","doc6":"点击下方的确定即","doc7":"删除按钮","doc8":"即代表你已阅读并同意","doc999":"智能设定"},"lucky":{"doc1":"我的奖品","doc2":"抽奖规则","doc3":"幸运值","doc4":"抽奖次数","doc5":"还有{n}次抽奖机会","doc6":"累计抽奖次数","doc7":"获取抽奖次数","doc8":"为了回馈用户对CoinPlex的坚定支持和厚爱，我们特推出2023年度大奖G2彩票，同时，为了提升用户的彩票体验，我们特增加积分制度，数量越多，奖励积分越高。抽奖次数越多，奖励积分越高，获得丰厚奖品的机会就越高，更多奖品等你来赢取！ ","doc9":"开箱","doc10":"祝贺你，你中奖了","doc11":"抽奖次数不足，请前往邀请好友","doc12":"我的奖品","doc13":"再次抽奖","doc14":"剩余抽奖次数","doc15":"奖品","doc16":"时间","doc17":"发放状态","doc18":"已发放","doc19":"联系经理","doc20":"未领取","doc21":"抽奖类型","doc22":"奖励抽奖{n}次","doc23":"已获得{n}次","doc24":"幸运大转盘","doc25":"抽奖揭晓","doc26":"规则说明","doc27":"打开宝箱","doc28":"盲盒记录","doc29":"进行\\"团队收益\\"时，可使用加速包获取更多收益","doc30":"抽奖次数记录","doc31":"惊喜盲盒","doc32":"奖品等你来拿","doc33":"不通过","doc34":"奖品预览","doc35":"邀请好友","doc36":"获取更多抽奖次数"},"new":{"doc1":"绑定邮箱","doc2":"如果没有收到邮件，请到垃圾邮件查找","doc3":"旧邮箱","doc4":"新邮箱","doc5":"更换邮箱","doc6":"请输入邮箱号","doc7":"请输入验证码","doc8":"邮箱验证","doc9":"提示","doc10":"账号未绑定邮箱,无法通过邮箱重置密码，请联系客服修改登录密码。","doc11":"暂不联系","doc12":"联系客服","doc13":"近上周增长比","doc14":"当前周增长","doc15":"系统提示","doc16":"联系客服经理","doc17":"订单匹配失败, 请在{n}天后重试, 如需了解更多详情, 请联系客服经理。","doc18":"订单匹配中, 仅限策略订单, 预计完成时间{n}分钟","doc19":"请输入","doc20":"发送","doc21":"正在思考...","doc22":"wss連結逾時","doc23":"TCP連線已逾時,3秒後自動刷新頁面","doc24":"AI对话历史","doc25":"清空会话记录","doc26":"创建新的会话","doc27":"目前會話尚未結束，不可新增","doc28":"与AI智能机器人对话","doc29":"修改","doc30":"修改地址","doc31":"请输入邮箱验证码","doc32":"您有一笔提款申请","doc33":"是否确定取消提币","doc34":"是","doc35":"否","doc36":"前往绑定邮箱","doc37":"合约质押","doc38":"理财产品","doc39":"我的理财","doc40":"用户ID：{n1}在{n2}中 质押{n3}USDT","doc41":"请选择质押区域","doc42":"请选择质押区域","doc43":"请选择质押周期","doc44":"质押区域","doc45":"参与资金","doc46":"可用","doc47":"总锁仓预计奖励","doc48":"日收益率","doc49":"买入时间","doc50":"开始计息","doc51":"第一笔收益","doc52":"最后一笔收益","doc53":"赎回到账","doc54":"已阅读并同意","doc55":"确定购买","doc56":"概览","doc57":"理财规则","doc58":"最少可投入","doc59":"质押总金额","doc60":"历史总收益","doc61":"今日收益","doc62":"赎回","doc63":"质押中","doc64":"已到期","doc65":"买入时间","doc66":"可赎回时间","doc67":"质押天数","doc68":"质押金额","doc69":"累计收益","doc70":"今日收益","doc71":"赎回确认","doc72":"赎回金额","doc73":"累计收益","doc74":"交易手续费","doc75":"待赎回","doc76":"到期","doc77":"账号登录","doc78":"账号注册","doc79":"关于","doc80":"社媒","doc81":"我的收益","doc82":"邀请好友","doc83":"邀请好友，一起赚币","doc84":"去邀请","doc85":"我的等级","doc86":"编辑","doc87":"账户信息","doc88":"邀请好友，<span>一起赚币</span>","doc89":"邀请好友成为你的社区成员","doc90":"邀请好友收益","doc91":"邀请方式","doc92":"VIP等级","doc93":"邀请记录","doc94":"邀请列表","doc95":"注册时间","doc96":"账号","doc97":"收益发放","doc98":"释放记录","doc99":"证件信息","doc100":"身份证正面照","doc101":"身份证反面照","doc102":"手持证件照","doc103":"认证提交后需要等待人工审核，审核时间在 72 小时内完成。","doc104":"请上传小于10MB的JPG、JPEG、PNG 格式文件","doc105":"提交成功","doc106":"实名认证提交成功！认证提交后需要等待人工审核，审核时间在72小时内完成,请耐心等待。","doc107":"我知道了","doc108":"修改或删除地址，请联系客服","doc109":"重新提交","doc110":"认证信息已提交，管理人员正在审核中，审核预计在 <span>72</span> 小时内完成。","doc111":"<span>驳回理由：</span>{n1}","doc112":"您已完成实名认证。","doc113":"等待审核","doc114":"已驳回","doc115":"认证成功","doc116":"关于我们","doc117":"关注我们","doc118":"获取项目一手资讯，且可获得实时在线客服支持","doc119":"你好！","doc120":"我们随时为您提供帮助","doc121":"我的团队","doc122":"智能AI量化","doc123":"站在科技与金融的前沿，实现资产的稳健倍增","doc124":"查看详情","doc125":"热门资讯","doc126":"团队信息","doc127":"{n1}代","doc128":"加密货币市场","doc129":"行情","doc130":"账单","doc131":"请选择主网","doc132":"该地址仅支持充值{n1}的{n2}","doc133":"邮箱已绑定，换绑或者删除邮箱地址联系官方客服处理","doc134":"手机已绑定，换绑或者删除手机联系官方客服处理","doc135":"打开身份验证器App","doc136":"请在手机应用商店下载身份验证器App（如“Google\\n身份验证器”）。","doc137":"绑定密钥","doc138":"在身份验证器 App 中点击“+”图标，输入下方密钥或者通过扫码的方式绑定密钥。","doc139":"打开身份验证器App，扫码绑定","doc140":"已达到该等级","doc141":"未解锁","doc142":"等级达成条件","doc143":"USDT余额","doc144":"{n1}代有效用户数","doc145":"未达到","doc146":"等级权益","doc147":"团队收益代数","doc148":"{n1}代","doc149":"策略交易","doc150":"账户余额","doc151":"账单详情","doc152":"等待预约结果","doc153":"预约未赢得","doc154":"订单已满，明日再试","doc155":"确定","doc156":"恭喜预约成功","doc157":"预约成功，请保持钱包余额充足","doc158":"预约策略名称","doc159":"策略锁仓金额","doc160":"策略预计收益","doc161":"执行策略","doc162":"如若不执行Ai策略，系统5分钟后会自动帮您匹配Ai策略并执行","doc163":"当前暂不可发起提现","doc164":"绑定邮箱","doc165":"累计充值满35USDT","doc166":"策略执行结束 3 小时后可发起提现","doc167":"上一笔提款成功 48 小时后可发起下一笔提现","doc168":"有审核中的提现订单","doc169":"去绑定","doc170":"去充值","doc171":"不再提示","doc172":"我知道了","doc173":"体验金","doc174":"今日新增团队人数","doc175":"今日新增团队收益","doc176":"不满足该等级条件","doc177":"累计交易收益","doc178":"今日交易收益","doc179":"累计社区收益","doc180":"今日社区收益","doc181":"待释放","doc182":"已释放","doc183":"收益记录","doc184":"是","doc185":"否","doc186":"总资产估值","doc187":"执行策略金额","doc188":"策略名称","doc189":"策略创建日期","doc190":"策略执行平台","doc191":"交易对","doc192":"策略类型","doc193":"策略执行周期","doc194":"预约","doc195":"预约失败","doc196":"后可再次预约","doc197":"执行完成","doc198":"策略执行中","doc199":"后执行结束","doc200":"收益金额","doc201":"小时","doc202":"收益发放时间","doc203":"执行金额释放时间","doc204":"OTC市商 (均值回归)","doc205":"执行结束","doc206":"未结算","doc207":"已经结算","doc208":"执行状态","doc209":"订单编号","doc210":"余额不足，请先充值","doc211":"1代团队收益 ","doc212":"2代团队收益 ","doc213":"3代团队收益 ","doc214":"可运行","doc215":"Ai策略","doc216":"策略账单","doc217":"今日新增","doc218":"2代+3代有效助推用户数","doc219":"未达到该等级","doc220":"1代有效助推用户数","doc221":"记录","doc222":"我的社区","doc223":"社区列表","doc224":"第一级代理","doc225":"第二级代理","doc226":"第三级代理","doc227":"总资产","doc228":"等级","doc229":"市场","doc230":"一级代理","doc231":"二级代理","doc232":"三级代理","doc233":"筛选","doc234":"预约金额","doc235":"预计收益","doc236":"策略金额","doc237":"可预约金额","doc238":"不满足条件","doc239":"{n1}代{n2}用户","doc240":"分钟","doc241":"LumeX 学院","doc242":"算法约单","doc243":"社区人数","doc244":"社区收益","doc245":"社区成员","doc246":"社区收入","doc247":"今日社区动态","doc248":"今日社区收入","doc249":"推荐奖励","doc250":"社区信息","doc251":"M1有效用户数","doc252":"M2+M3有效助推用户数","doc253":"算法交易记录","doc254":"运行规则","doc255":"视频教程","doc256":"社区人数","doc257":"社区收益","doc258":"今日社区动态","doc259":"今日社区收入","doc260":"社区成员","doc261":"交易额度","doc262":"每日可预约交易","doc263":"提币Gas费","doc264":"单次提币","doc265":"社区奖励","doc266":"代币卷","doc267":"资产锁定","doc268":"待解锁","doc269":"在线客服","doc270":"可预约资金","doc271":"运行中","doc272":"钱包余额","doc273":"等级不满足条件","doc274":"预约时间","doc275":"交易中","doc276":"订单价格","doc277":"预期收益","doc278":"执行周期","doc279":"剩余时间","doc280":"预约范围","doc281":"收益结算","doc283":"没有可交易的体验金","doc284":"免预约交易","doc285":"已达成","doc286":"未达成","doc287":"下一轮预约","doc288":"{n}名{n1}的直推成员","doc289":"成交额","doc290":"交易三方","doc291":"预约价格","doc292":"成交价格","doc293":"成交价格","doc294":"OTC市商","doc295":"成交金额","doc296":"最高价","doc297":"交易额","doc298":"团队人数","doc299":"总奖励","doc300":"今日收入","doc301":"本月收入","doc303":"团队数据","doc304":"你的订单","doc305":"预约中","doc306":"","doc307":"","doc308":"","doc309":""},"new1":{"doc0":"订单编号","doc1":"启动时间","doc2":"执行状态","doc3":"策略平台","doc4":"交易币种","doc5":"策略类型","doc6":"执行周期","doc7":"可预约金额范围","doc8":"实际预约金额","doc9":"订单收益","doc10":"资金释放时间"},"app":{"text":"注：在下载安装过程中出现下载失败、解析安装包失败、安 装失败等异常情况，请您重新下载安装。","downs":"下载","cs":""}}')
    },
    f448: function(e, o, i) {
        "use strict";
        o.__esModule = !0, o.default = void 0;
        var a = {
            name: "姓名",
            tel: "telefono",
            save: "Salva",
            confirm: "Confermare",
            cancel: "Annulla",
            delete: "eliminare",
            complete: "Fine",
            loading: "Caricamento in corso...",
            telEmpty: "请填写电话",
            nameEmpty: "请填写姓名",
            nameInvalid: "请输入正确的姓名",
            confirmDelete: "确定要删除吗",
            telInvalid: "请输入正确的手机号",
            vanCalendar: {
                end: "fine",
                start: "Cominciare",
                title: "selezione della data",
                confirm: "Sicuro",
                startEnd: "Cominciare/fine",
                weekdays: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
                monthTitle: function(e, o) {
                    return e + "年" + o + "月"
                },
                rangePrompt: function(e) {
                    return "选择天数不能超过 " + e + " 天"
                }
            },
            vanCascader: {
                select: "si prega di scegliere"
            },
            vanContactCard: {
                addText: "添加联系人"
            },
            vanContactList: {
                addText: "新建联系人"
            },
            vanPagination: {
                prev: "上一页",
                next: "下一页"
            },
            vanPullRefresh: {
                pulling: "Scorri verso il basso per rinfrescarti...",
                loosing: "Rilascia per aggiornare..."
            },
            vanSubmitBar: {
                label: "合计："
            },
            vanCoupon: {
                unlimited: "无使用门槛",
                discount: function(e) {
                    return e + "折"
                },
                condition: function(e) {
                    return "满" + e + "元可用"
                }
            },
            vanCouponCell: {
                title: "优惠券",
                tips: "暂无可用",
                count: function(e) {
                    return e + "张可用"
                }
            },
            vanCouponList: {
                empty: "暂无优惠券",
                exchange: "兑换",
                close: "不使用优惠券",
                enable: "可用",
                disabled: "不可用",
                placeholder: "请输入优惠码"
            },
            vanAddressEdit: {
                area: "地区",
                postal: "邮政编码",
                areaEmpty: "请选择地区",
                addressEmpty: "请填写详细地址",
                postalEmpty: "邮政编码格式不正确",
                defaultAddress: "设为默认收货地址",
                telPlaceholder: "收货人手机号",
                namePlaceholder: "收货人姓名",
                areaPlaceholder: "选择省 / 市 / 区"
            },
            vanAddressEditDetail: {
                label: "详细地址",
                placeholder: "街道门牌、楼层房间号等信息"
            },
            vanAddressList: {
                add: "新增地址"
            }
        };
        o.default = a
    },
    fbe1: function(e, o, i) {
        "use strict";
        o.__esModule = !0, o.default = void 0;
        var a = {
            name: "姓名",
            tel: "电话",
            save: "salvar",
            confirm: "confirme",
            cancel: "Cancelar",
            delete: "excluir",
            complete: "Terminar",
            loading: "Carregando...",
            telEmpty: "请填写电话",
            nameEmpty: "请填写姓名",
            nameInvalid: "Por favor, digite o nome correto",
            confirmDelete: "Tem certeza de que deseja excluí-lo",
            telInvalid: "请输入正确的手机号",
            vanCalendar: {
                end: "fim",
                start: "Começar",
                title: "seleção de data",
                confirm: "Certo",
                startEnd: "Começar/fim",
                weekdays: ["dia", "一", "二", "三", "四", "五", "六"],
                monthTitle: function(e, o) {
                    return e + "年" + o + "月"
                },
                rangePrompt: function(e) {
                    return "选择天数不能超过 " + e + " 天"
                }
            },
            vanCascader: {
                select: "por favor escolha"
            },
            vanContactCard: {
                addText: "添加联系人"
            },
            vanContactList: {
                addText: "新建联系人"
            },
            vanPagination: {
                prev: "上一页",
                next: "下一页"
            },
            vanPullRefresh: {
                pulling: "Puxe para baixo para atualizar...",
                loosing: "Solte para atualizar..."
            },
            vanSubmitBar: {
                label: "合计："
            },
            vanCoupon: {
                unlimited: "无使用门槛",
                discount: function(e) {
                    return e + "折"
                },
                condition: function(e) {
                    return "满" + e + "元可用"
                }
            },
            vanCouponCell: {
                title: "优惠券",
                tips: "暂无可用",
                count: function(e) {
                    return e + "张可用"
                }
            },
            vanCouponList: {
                empty: "暂无优惠券",
                exchange: "兑换",
                close: "不使用优惠券",
                enable: "可用",
                disabled: "不可用",
                placeholder: "请输入优惠码"
            },
            vanAddressEdit: {
                area: "地区",
                postal: "邮政编码",
                areaEmpty: "请选择地区",
                addressEmpty: "请填写详细地址",
                postalEmpty: "邮政编码格式不正确",
                defaultAddress: "设为默认收货地址",
                telPlaceholder: "收货人手机号",
                namePlaceholder: "收货人姓名",
                areaPlaceholder: "选择省 / 市 / 区"
            },
            vanAddressEditDetail: {
                label: "详细地址",
                placeholder: "街道门牌、楼层房间号等信息"
            },
            vanAddressList: {
                add: "新增地址"
            }
        };
        o.default = a
    }
});