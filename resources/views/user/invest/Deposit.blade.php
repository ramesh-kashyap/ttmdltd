<html class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>{{ siteName() }}</title>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="expires" content="0">
    <meta name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="full-screen" content="true">
    <meta name="x5-fullscreen" content="true">
    <meta name="360-fullscreen" content="true">
    <meta name="renderer" content="webkit">
    <meta name="robots" content="noindex, nofollow">
    <link rel="manifest" href="/manifest.json">
    <script>
        window.addEventListener("error", function (event) {
            if (event.message.indexOf("Unexpected token '<'") > -1) {
                location.reload();
            }
        });
        if ("standalone" in window.navigator && window.navigator.standalone) {
            var noddy,
                remotes = false;
            document.addEventListener(
                "click",
                function (event) {
                    noddy = event.target;
                    while (noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
                        noddy = noddy.parentNode;
                    }
                    if (
                        "href" in noddy &&
                        noddy.href.indexOf("http") !== -1 &&
                        (noddy.href.indexOf(document.location.host) !== -1 || remotes)
                    ) {
                        event.preventDefault();
                        document.location.href = noddy.href;
                    }
                },
                false
            );
        }

    </script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html,
        body {
            width: 100%;
        }

        #startLogo {
            width: 100%;
            min-width: 7.5rem;
            height: 100vh;
            max-width: 8.5rem;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000000;
            background: #020503;
            display: flex;
            align-items: center;
            justify-content: center;
            display: none;
        }

        #startLogo img {
            width: 100%;
            height: 100vh;
            object-fit: cover;
        }

    </style>
    <link href="/js1743475952730/app.fe8857a9.1743475952730.js?v=1743475952730" rel="preload" as="script">
    <link href="/js1743475952730/axios.fe8857a9.1743475952730.js?v=1743475952730" rel="preload" as="script">
    <link href="/js1743475952730/compressorjs.fe8857a9.1743475952730.js?v=1743475952730" rel="preload" as="script">
    <link href="/js1743475952730/core-js.fe8857a9.1743475952730.js?v=1743475952730" rel="preload" as="script">
    <link href="/js1743475952730/crypto-js.fe8857a9.1743475952730.js?v=1743475952730" rel="preload" as="script">
    <link href="/js1743475952730/vant.fe8857a9.1743475952730.js?v=1743475952730" rel="preload" as="script">
    <link href="/js1743475952730/vendors~app.fe8857a9.1743475952730.js?v=1743475952730" rel="preload" as="script">
    <link href="/js1743475952730/vue.fe8857a9.1743475952730.js?v=1743475952730" rel="preload" as="script">
    <link href="{{ asset('') }}static/css/app.6328f701.css" rel="preload" as="style">
    <link href="{{ asset('') }}static/css/vant.d14f5539.css" rel="preload" as="style">
    <link href="{{ asset('') }}static/css/vant.d14f5539.css" rel="stylesheet">
    <link href="{{ asset('') }}static/css/app.6328f701.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css"
        href="{{ asset('') }}static/css/chunk-7f362702.6a53b834.css">
    <script charset="utf-8" src="/js1743475952730/chunk-7f362702.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css"
        href="{{ asset('') }}static/css/chunk-5576a184.9f52f39a.css">
    <script charset="utf-8" src="/js1743475952730/chunk-5576a184.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css"
        href="{{ asset('') }}static/css/chunk-60c8a75a.d6f6b692.css">
    <script charset="utf-8" src="/js1743475952730/chunk-60c8a75a.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css"
        href="{{ asset('') }}static/css/chunk-a7d8f170.c87a4291.css">
    <script charset="utf-8" src="/js1743475952730/chunk-a7d8f170.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css"
        href="{{ asset('') }}static/css/chunk-00b1464f.674dbd13.css">
    <script charset="utf-8" src="/js1743475952730/chunk-00b1464f.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css"
        href="{{ asset('') }}static/css/chunk-67912ed2.ae8d438d.css">
    <script charset="utf-8" src="/js1743475952730/chunk-67912ed2.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script charset="utf-8" src="/js1743475952730/echarts.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script charset="utf-8" src="/js1743475952730/chunk-0119f9da.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css"
        href="{{ asset('') }}static/css/chunk-0b116a05.250ed6be.css">
    <script charset="utf-8" src="/js1743475952730/chunk-0b116a05.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css"
        href="{{ asset('') }}static/css/chunk-367626f4.8674be05.css">
    <script charset="utf-8" src="/js1743475952730/chunk-367626f4.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script charset="utf-8" src="/js1743475952730/qrcodejs2.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css"
        href="{{ asset('') }}static/css/chunk-0d09da43.555d1171.css">
    <script charset="utf-8" src="/js1743475952730/chunk-0d09da43.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css"
        href="{{ asset('') }}static/css/chunk-115aa5d8.9d416f08.css">
    <script charset="utf-8" src="/js1743475952730/chunk-115aa5d8.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css"
        href="{{ asset('') }}static/css/chunk-5f936813.7deb1a32.css">
    <link rel="stylesheet" type="text/css"
        href="{{ asset('') }}static/css/chunk-2f63d074.281755cb.css">
    <script charset="utf-8" src="/js1743475952730/chunk-2f63d074.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css"
        href="{{ asset('') }}static/css/chunk-5412a522.b373626a.css">
    <script charset="utf-8" src="/js1743475952730/chunk-5412a522.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="icon" href="{{ asset('static/img/logo2.png') }}">

</head>

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-6e2d35de="" data-v-679886a1="" class="page">
            <div data-v-6e2d35de="" class="headers">
                <div data-v-b73557e2="" data-v-679886a1="" class="head" style="background: #0f0e11" data-v-6e2d35de="">
                    <div data-v-b73557e2="" class="safe"></div>
                    <div data-v-b73557e2="" class="container flex">
                        <div data-v-b73557e2="" class="back"><a href="{{ route('user.asset') }}"><img
                                    data-v-b73557e2="" src="{{ asset('') }}static/img/eroo.png"
                                    alt=""></a></div>
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-b73557e2="" class="name tac"> @lang('Deposit') </div>
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-b73557e2="" class="flex1"></div>
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-b73557e2="" class="head_right"><a
                                href="{{ route('user.records') }}"><img data-v-679886a1=""
                                    data-v-b73557e2="" src="{{ asset('') }}static/img/invest.png"
                                    alt="" class="headRight"></a></div>
                    </div>
                    <div data-v-b73557e2="">
                        <!---->
                    </div>
                </div>
            </div>
            <div data-v-6e2d35de="" id="scroll" class="content-container">
                <div data-v-6e2d35de="" id="content" class="content-scroll">
                    <div data-v-679886a1="" data-v-6e2d35de="" class="container">
                        <div data-v-679886a1="" data-v-6e2d35de="" class="item valMob">
                            <div data-v-679886a1="" data-v-6e2d35de="" class="cname">@lang('Select Currency')</div>
                            <div data-v-679886a1="" data-v-6e2d35de="" class="inp" style="background: #0f0e11">
                                <div data-v-679886a1="" data-v-6e2d35de="" class="icon"><img data-v-679886a1=""
                                        data-v-6e2d35de=""
                                        src="https://lumex-all.s3.ap-southeast-1.amazonaws.com/upload/20250303/f710b0ea16ca629941e92e00e453fd1b.png"
                                        alt=""></div>


                                <input data-v-679886a1="" data-v-6e2d35de="" type="text" value="USDT"
                                    readonly="readonly" style="color:white;">
                                <div data-v-679886a1="" data-v-6e2d35de="" class="arr">
                                </div>
                            </div>
                        </div>
                        <div data-v-679886a1="" data-v-887483d6="" class="item valMob">
                            <div data-v-679886a1="" data-v-887483d6="" class="cname" style="color:white;">Select Network
                            </div>
                            <div data-v-679886a1="" data-v-887483d6="" class="inp">
                                <div data-v-679886a1="" data-v-887483d6="" class="icon"><img data-v-679886a1=""
                                        data-v-887483d6=""
                                        src="https://lumex-all.s3.ap-southeast-1.amazonaws.com/upload/20250303/f710b0ea16ca629941e92e00e453fd1b.png"
                                        alt=""></div>



                                <input data-v-679886a1="" data-v-887483d6="" style="color:white;" Value="USDT(BEP20)"
                                    type="text" onclick="showPopup()">
                                <div data-v-679886a1="" data-v-887483d6="" class="arr"><img data-v-679886a1=""
                                        data-v-887483d6=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACQSURBVHgB7dPBEYMgFIThJRVYAqVQUkpIB0kHKcVSQgexg/U5cnB0RkUUL/vNcPHw+AcBEBGRE5H88rg3StkQz3J+bY/Hjo7OVsRx0TkXUSqdxp/5flunkBsSmC/gbDb0mRHwwlVs+OfWgElIuxLQogbbqOF46eaGbx61cPli6gZMQkIKGVbAXdKvaSAiIhX0NA2573NFoLgAAAAASUVORK5CYII="
                                        alt=""></div>
                            </div>


                        </div>
                        <div data-v-679886a1="" data-v-6e2d35de="" class="itemBox">
                            <div data-v-679886a1="" data-v-6e2d35de="" class="mbox">
                                <div data-v-679886a1="" data-v-6e2d35de="" id="qrcode" title="{{ $address_in }}"><canvas
                                        width="185" height="185" style="display: none;"></canvas><img alt="Scan me!"
                                        src="{{ $qrCodeLink }}"></div>

                            </div>
                            <div data-v-679886a1="" data-v-6e2d35de="" class="mtext"> @lang('This address only supports
                                USDT of recharge TRX')</div>
                        </div>
                        <div data-v-679886a1="" data-v-6e2d35de="" class="valMob">
                            <div data-v-679886a1="" data-v-6e2d35de="" class="cname">@lang('Deposit Address')</div>
                            <div data-v-679886a1="" data-v-6e2d35de="" class="inp" style="background: #0f0e11">
                                <div data-v-679886a1="" data-v-6e2d35de="" class="address_text" id="address">
                                    {{ $address_in }}</div>
                                <div data-v-679886a1="" data-v-6e2d35de="" class="copy_address" onclick="copyAddress()">
                                    <img data-v-679886a1="" data-v-6e2d35de=""
                                        src="{{ asset('') }}static/img/copy.png" alt=""></div>
                            </div>
                        </div>
                        <div data-v-679886a1="" data-v-6e2d35de="" class="itemBox">
                            <div data-v-58b133cc="" data-v-679886a1="" class="tips">
                                <div data-v-58b133cc="" class="p">


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="van-overlay" style="z-index: 2003; display: none;"></div>

                </div>
            </div>
            <div data-v-6e2d35de="" class="footer"></div>
        </div>
        <div data-v-a7d12cfc="" class="global-loading default" style="display: none;">
            <div data-v-a7d12cfc="" class="global-spinner"><img data-v-a7d12cfc=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAYAAAADgWq5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNC0xMlQxNTo0MTowNiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWU0ZGQwNmEtMWExNS1kYjRmLTkyZmQtZjIzNTAwNzJkMGNmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlGMTI0NjE1NTQzQzExRThCQzhCQzEyQjVDOUMzOEJGIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OUYxMjQ2MTU1NDNDMTFFOEJDOEJDMTJCNUM5QzM4QkYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjEyNDYxMjU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjEyNDYxMzU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZTRkZDA2YS0xYTE1LWRiNGYtOTJmZC1mMjM1MDA3MmQwY2YiIHN0RXZ0OndoZW49IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hddYGwAABHhJREFUWIXN2XuoFVUUx/HPXG9WmmIPJQtNwQwqe5paEI1pCBZCRvVXDwlKCsLpIURgIZZG1KEXRVJJWPRnIv3TAw/0UCsrUlBLLQ1T01Ip6eZr+mPPOHOP56jXcz3XHxzu3nv2nv29a/bstdaeyJIXdYOG4bLs77k4AzvQFyvxKw7gJ/xZHpjGSZcmam8Csg/uxU0Yi8HHMGYz1uAtfIh/uzrp8QBPwFO4HgfR1oWx52e/CViX3ef9rkwedWFJXIQncE+da7uwHcuwF1uQClbvi1G4tMF9V+GuNE5+6C7gUzANT2Joqb0Dm/A6XsO+I9yjD/7DaMzArTi1ps/iNE6mNAvcjqfxKE4rtS/BXHxytAnqqBcuwHQ8XnNtP0amcfJLo8FHWn/98QIeK8Fuw3W48ThhCbvFBsxEhMWla+3YEFUrfbsKfDpewcOKR/e5sBssPU7QusqWwTTBurlWN+rfCHg67i7V3xasurFZwHpK42QBxmFP1jQkqlbW1utbD3g0ygt7Fe7T2QLdrjROVmBSqWlkVK28WtuvHvB7pfImXNvNbA2VxsmXeKnU9FBUrVxT7lMLHGNkVt6JO/DPiQKspzROZuC3UtM7UbVyiLMMPBDzSvWFWHFC6RprrLCbwCU4ZOUy8G24OivvxCwneN02UhonWwSD5Xo3L5SBpypii/mCu+1JzRHcOwyPqpVhFMD9MSYr78OnLUWrozRO1gk7FCE8mEwBPE7hzVbiu5bSNdabpfKkqFqJcuCr0Dsrr1ETZPegPiiVJ6dxkubAQwW/TohTTxa1K4x3IKpWLmwToqfhWWMqpDEnhdI42SrENYSYpqNN2O+uyBojfN16tPqKqpV2fJNVD+LK3MJbS/0GtRqskdI42Y+zsmob/moTlkHuVQ7qHKifDCpnJtvbBMg8XmjD2S1HaqCoWhmgCDl3o1e+S3xf6tey6OwY1K4IxrZhcw68rNRpjJNHA4WsG7ancbI7B/5CcagxCv1aTVarLKS8OaumAuMh17xFsVb64YaW0tVXO27PyvuxiAL4oJC35Xq+dVwNdbEiDv5btmzL4eXcUnmEwpn0lGYpwoVFaZykdAbeJZziEB7HG0JY13JF1crlyE+BdmQsODynm60ImkcIS6WliqqVQXhO8MCEg5Yf8+u1wFvxANbjfoUHbImiaqU3XsbErGkf5qRx0pH3qXfcOj/79YSeFXaG3JAz0zjZUO7QzIF2tymLyp7BI4oXbYVg7U7qceCoWhmKBRhfal6NKWmcHPYOdeX0/EQoxkc6wy7FxDROfq83oKcsfIvw+MfXtC8VLLuj0cBmgXsLb/RIfCVkK72FrXGfELjsEXLGFHcK580DdI5zd2F2GieVo03YLPCDwqF3nmr1Ek6N1grfN7Zn/8xenNPgHsuFbxw/H8uEzQLvVLwH+UZ/pnDOQfg0UKsD2biPMS+Nk5VdmbBZ4IVCVjtVyAXPE2LYsjqEtGs9vhWCrM8cp1NqFviA4OdzXz9ESLcGC+Abhe9yy4Vk8o8m5/M/9rYMi48jzWIAAAAASUVORK5CYII="
                    alt=""></div>
        </div>
    </div>





    <div data-v-28f4094c="" data-v-679886a1="" id="popupBox" class="popup van-popup van-popup--round van-popup--bottom"
        style="z-index: 2004; display: none;">
        <div data-v-28f4094c="" class="popup-head" style="color:white;">Select Network</div>
        <div data-v-28f4094c="" class="popup-con">
            <div data-v-28f4094c="" class="coins">
                <div data-v-28f4094c="" class="van-tabs van-tabs--line">






                    <div data-v-28f4094c="" class="chains">
                        <div data-v-28f4094c="" class="item on">
                            <div data-v-28f4094c="" class="item-left"><img data-v-28f4094c=""
							src="https://tux-all.s3.ap-southeast-1.amazonaws.com/upload/20240723/bcabd0a39b535b0c04e14dc6b5f16bdd.png">
                            </div>
                            <div data-v-28f4094c="" class="item-right">
                                <h2 data-v-28f4094c="" style="color:white;">BNB SMART CHAIN(BEP20)</h2>
                                <div data-v-28f4094c="" class="text">
                                    <p data-v-28f4094c=""> Estimated Arrival Time ≈ 8 minutes </p>
                                    <p data-v-28f4094c=""> Minimum Deposit≥ 1 USDT </p>
                                </div>
                            </div>
                            <div data-v-28f4094c="" class="check"><img data-v-28f4094c=""
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOFSURBVHgBzZnPaxNBFMffbFKF0kJoFQoVuxVRPDW29QeCNHvzIhaPXppeKiJtLf4BjX9AKbWI2EvTf0AQr8Ju6cUfJaQg+AOVLXgpKtS2F226z/c22bibX7ub7Cb5QJjZySz73Tczb968FVAnV9Wn8l84HBdCGgLAOALGqFm2ddEFCF0IkUUD17uhS9OUyV2oA+Gnc0Jdje3BfpIefItEJcAnAqS0QFzbVKY1f/d5ZHh9eR4QH1A1Bg1CFtY6MDr5Wrmne+vvwiX1SdwQxipZLg5BI0QqMzb9yLVbrT9H1pdnETEFAVivBvox7FBqWbWqyMLwpqA51BRaUWSTBVpUFVomclh9nKTWVWgNuoFHF7PKnMNVSfYL9n0kcBFahxwRHWXPd4g8FDnuEOYicQXBSI6qywl7W1EkDzO5mXFoAwyBjun235IC5qF9kM21UcAUWTCvDG0Ebb0TVt0UibaGMLnTH4eVodtwd+CKa1+ODay5Gc03GKHPRRY2JV826yOxfhYBK9tva95jgJGgQpMKakNd0XaBFjf7LrjeR2HgGJeSEUbgYKOSQEb79c31XiuooeFG2U9YyfOKrfDp4AcsfN2A/dwf8Cvw5c4HWPiyAR6IxdVFOUomHeD54QUW9/DsdbN+rusEnO86CVNbzysKrSUw9fEVeCUKUZlXt+f5mOg947hmobxau6PHIQyBFpKfzpu/v5e1lQoNWiAT6Zu4oZDj9LR43u/tmNN3NHbK0d57rBOu9QzAYGcPJE+PQJAC6aixFqVn+jrBreh531bqkNmi/AtSIJODnE7DLXTwCQt9tv3GtV+jAhmKLXUpAhEN6sBNaBAC+VTJpfROuZ8Fn0NuUU1oEAIZRGOLy3yAgfgC6qRUaFACGdq701yaWw3v3xRoqtAA1qL5fPATAkLPJGYGuWJaktMe1vjXC4sLUCBv3MWkQdGZC1tjG6BnlJm0dVEUGYQ1A6PEYI5t8Qhzk1DnSg+QtN2KjEMkO056izloHZwcKHt+WYBhvgViK+YnC1RKsxdM9YSVupSi+L1Zx1xLoF7pz6qhWkaZTTVj6GmxZmsJzPdxgcN3SUTY0csQNIhLtKukKg2xHe/p6Hy2jYdfhgZhV8d+2Wvu3Fdin6wakyBCXxzEbB3p6d2CuKXQEvulmNMAIgn+EkGXMpqnTsd5iT+RZCmS2aavDtoR5DS3Ya3GPxj6fpXGuuLNAAAAAElFTkSuQmCC"
                                    alt=""></div>
                        </div>


						<div data-v-28f4094c="" class="item on">
                            <div data-v-28f4094c="" class="item-left"><img data-v-28f4094c=""
                                    src="https://tux-all.s3.ap-southeast-1.amazonaws.com/upload/20240723/284411f22a828b42a327a5a8586fae88.png">
                            </div>
                            <div data-v-28f4094c="" class="item-right">
                                <h2 data-v-28f4094c="" style="color:white;">BNB SMART CHAIN(BEP20)</h2>
                                <div data-v-28f4094c="" class="text">
                                    <p data-v-28f4094c=""> Estimated Arrival Time ≈ 1 minutes </p>
                                    <p data-v-28f4094c=""> Minimum Deposit≥ 1 USDC </p>
                                </div>
                            </div>
                            <div data-v-28f4094c="" class="check">
								
							
							<img data-v-28f4094c=""
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOFSURBVHgBzZnPaxNBFMffbFKF0kJoFQoVuxVRPDW29QeCNHvzIhaPXppeKiJtLf4BjX9AKbWI2EvTf0AQr8Ju6cUfJaQg+AOVLXgpKtS2F226z/c22bibX7ub7Cb5QJjZySz73Tczb968FVAnV9Wn8l84HBdCGgLAOALGqFm2ddEFCF0IkUUD17uhS9OUyV2oA+Gnc0Jdje3BfpIefItEJcAnAqS0QFzbVKY1f/d5ZHh9eR4QH1A1Bg1CFtY6MDr5Wrmne+vvwiX1SdwQxipZLg5BI0QqMzb9yLVbrT9H1pdnETEFAVivBvox7FBqWbWqyMLwpqA51BRaUWSTBVpUFVomclh9nKTWVWgNuoFHF7PKnMNVSfYL9n0kcBFahxwRHWXPd4g8FDnuEOYicQXBSI6qywl7W1EkDzO5mXFoAwyBjun235IC5qF9kM21UcAUWTCvDG0Ebb0TVt0UibaGMLnTH4eVodtwd+CKa1+ODay5Gc03GKHPRRY2JV826yOxfhYBK9tva95jgJGgQpMKakNd0XaBFjf7LrjeR2HgGJeSEUbgYKOSQEb79c31XiuooeFG2U9YyfOKrfDp4AcsfN2A/dwf8Cvw5c4HWPiyAR6IxdVFOUomHeD54QUW9/DsdbN+rusEnO86CVNbzysKrSUw9fEVeCUKUZlXt+f5mOg947hmobxau6PHIQyBFpKfzpu/v5e1lQoNWiAT6Zu4oZDj9LR43u/tmNN3NHbK0d57rBOu9QzAYGcPJE+PQJAC6aixFqVn+jrBreh531bqkNmi/AtSIJODnE7DLXTwCQt9tv3GtV+jAhmKLXUpAhEN6sBNaBAC+VTJpfROuZ8Fn0NuUU1oEAIZRGOLy3yAgfgC6qRUaFACGdq701yaWw3v3xRoqtAA1qL5fPATAkLPJGYGuWJaktMe1vjXC4sLUCBv3MWkQdGZC1tjG6BnlJm0dVEUGYQ1A6PEYI5t8Qhzk1DnSg+QtN2KjEMkO056izloHZwcKHt+WYBhvgViK+YnC1RKsxdM9YSVupSi+L1Zx1xLoF7pz6qhWkaZTTVj6GmxZmsJzPdxgcN3SUTY0csQNIhLtKukKg2xHe/p6Hy2jYdfhgZhV8d+2Wvu3Fdin6wakyBCXxzEbB3p6d2CuKXQEvulmNMAIgn+EkGXMpqnTsd5iT+RZCmS2aavDtoR5DS3Ya3GPxj6fpXGuuLNAAAAAElFTkSuQmCC"
                                    alt="">
								
								
								</div>
                        </div>
                    </div>
					






                    <div class="van-tabs__content">
                        <div data-v-28f4094c="" role="tabpanel" class="van-tab__pane" style="">

                        </div><button data-v-28f4094c="" class="btn2"> Confirm </button>
                    </div>
                    <div data-v-28f4094c="" role="tabpanel" class="van-tab__pane" style="display: none;">
                        <!---->
                    </div>
                </div>
            </div>
        </div>
    </div><i role="button" tabindex="0" onclick="hidePopup()"
        class="van-icon van-icon-cross van-popup__close-icon van-popup__close-icon--top-right">
        <!----></i>
    </div>


    <!-- <script>
    function changeTab(type) {
        const h2 = document.getElementById('networkText');
        const tabs = document.querySelectorAll('.van-tab');

        tabs.forEach(tab => tab.classList.remove('van-tab--active'));

        if (type === 'usdt') {
            h2.textContent = 'USDT(BEP20)';
            tabs[0].classList.add('van-tab--active');
        } else if (type === 'usdc') {
            h2.textContent = 'USDT(TRC20)';
            tabs[1].classList.add('van-tab--active');
        }
    }
</script> -->


    <script>
        function showPopup() {
            document.getElementById('popupBox').style.display = 'block';
        }

        function hidePopup() {
            document.getElementById('popupBox').style.display = 'none';
        }

        function changeTab(type) {
            const h2 = document.getElementById('networkText');
            const tabs = document.querySelectorAll('.van-tab');

            tabs.forEach(tab => tab.classList.remove('van-tab--active'));

            if (type === 'usdt') {
                h2.textContent = 'USDT(BEP20)';
                tabs[0].classList.add('van-tab--active');
            } else if (type === 'usdc') {
                h2.textContent = 'USDT(TRC20)';
                tabs[1].classList.add('van-tab--active');
            }
        }

    </script>


    <script src="/js1743475952730/core-js.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script src="/js1743475952730/vue.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script src="/js1743475952730/vant.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script src="/js1743475952730/crypto-js.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script src="/js1743475952730/axios.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script src="/js1743475952730/compressorjs.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script src="/js1743475952730/vendors~app.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script src="/js1743475952730/app.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script>
        //   async function fetchAddress() {
        //             try {
        //                 const response = await fetch('/user/create-address');
        //                 const data = await response.json();
        //                 document.getElementById('address').innerText = data.address;
        // 				document.getElementById('qr_code').src = data.qr_code;
        //             } catch (error) {
        //                 console.error('Error fetching address:', error);
        //                 document.getElementById('address').innerText = 'Error loading address';
        //             }
        //         }

        function copyAddress() {
            const address = document.getElementById('address').innerText;
            navigator.clipboard.writeText(address).then(() => {
                alert('Address copied to clipboard');
            }).catch(() => {
                alert('Failed to copy address');
            });
        }

        window.onload = fetchAddress;

    </script>
    <script>
        window.onload = function () {
            // 禁用双指放大
            document.addEventListener("touchstart", function (event) {
                if (event.touches.length > 1) {
                    event.preventDefault();
                }
            });
            // 禁用双击放大
            let lastTouchEnd = 0;
            document.addEventListener(
                "touchend",
                function (event) {
                    const now = new Date().getTime();
                    if (now - lastTouchEnd <= 300) {
                        event.preventDefault();
                    }
                    lastTouchEnd = now;
                },
                false
            );
            document.addEventListener("gesturestart", function (event) {
                event.preventDefault();
            });
        };

    </script>
    <!---->
</body>

</html>
