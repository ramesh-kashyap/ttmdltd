<html class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>{{siteName()}}</title>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="expires" content="0">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="full-screen" content="true">
    <meta name="x5-fullscreen" content="true">
    <meta name="360-fullscreen" content="true">
    <meta name="renderer" content="webkit">
    <meta name="robots" content="noindex, nofollow">
    <!-- <link rel="manifest" href="/manifest.json"> -->
    <script>
        window.addEventListener("error", function(event) {
            if (event.message.indexOf("Unexpected token '<'") > -1) {
                location.reload();
            }
        });
        if ("standalone" in window.navigator && window.navigator.standalone) {
            var noddy,
                remotes = false;
            document.addEventListener(
                "click",
                function(event) {
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
    <link href="/js1743619988925/app.d968e27a.1743619988925.js?v=1743619988925" rel="preload" as="script">
    <link href="/js1743619988925/axios.d968e27a.1743619988925.js?v=1743619988925" rel="preload" as="script">
    <link href="/js1743619988925/compressorjs.d968e27a.1743619988925.js?v=1743619988925" rel="preload" as="script">
    <link href="/js1743619988925/core-js.d968e27a.1743619988925.js?v=1743619988925" rel="preload" as="script">
    <link href="/js1743619988925/crypto-js.d968e27a.1743619988925.js?v=1743619988925" rel="preload" as="script">
    <link href="/js1743619988925/vant.d968e27a.1743619988925.js?v=1743619988925" rel="preload" as="script">
    <link href="/js1743619988925/vendors~app.d968e27a.1743619988925.js?v=1743619988925" rel="preload" as="script">
    <link href="/js1743619988925/vue.d968e27a.1743619988925.js?v=1743619988925" rel="preload" as="script">
    <link href="{{asset('')}}static/css/app.6328f701.css" rel="preload" as="style">
    <link href="{{asset('')}}static/css/vant.d14f5539.css" rel="preload" as="style">
    <link href="{{asset('')}}static/css/vant.d14f5539.css" rel="stylesheet">
    <link href="{{asset('')}}static/css/app.6328f701.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-41993a66.791df78f.css">
    <script charset="utf-8" src="/js1743619988925/chunk-41993a66.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-5576a184.9f52f39a.css">
    <script charset="utf-8" src="/js1743619988925/chunk-5576a184.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-60c8a75a.d6f6b692.css">
    <script charset="utf-8" src="/js1743619988925/chunk-60c8a75a.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-a7d8f170.c87a4291.css">
    <script charset="utf-8" src="/js1743619988925/chunk-a7d8f170.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-67912ed2.ae8d438d.css">
    <script charset="utf-8" src="/js1743619988925/chunk-67912ed2.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-6f896b4e.5bb66763.css">
    <script charset="utf-8" src="/js1743619988925/chunk-6f896b4e.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-375cccc2.6ddcb41c.css">
    <script charset="utf-8" src="/js1743619988925/chunk-375cccc2.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-00b1464f.674dbd13.css">
    <script charset="utf-8" src="/js1743619988925/chunk-00b1464f.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-7f362702.6a53b834.css">
    <script charset="utf-8" src="/js1743619988925/chunk-7f362702.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-179a3425.d4b887a4.css">
    <script charset="utf-8" src="/js1743619988925/chunk-179a3425.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="icon"  href="{{ asset('static/img/logo2.png') }}">

</head>

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-6e2d35de="" data-v-c66de3ba="" class="page">
            <div data-v-6e2d35de="" class="headers">
                <div data-v-b73557e2="" data-v-c66de3ba="" class="head" data-v-6e2d35de="">
                    <div data-v-b73557e2="" class="safe"></div>
                    <div data-v-b73557e2="" class="container flex">
                        <div data-v-b73557e2="" class="back">
                        <a href="{{route('user.profile')}}"><img data-v-b73557e2="" src="{{ asset('') }}static/img/eroo.png" alt=""></a></div><!----><!----><!---->
                        <div data-v-b73557e2="" class="name tac"> @lang('Account Information') </div><!----><!----><!---->
                        <div data-v-b73557e2="" class="flex1"></div><!----><!----><!----><!----><!---->
                        <div data-v-b73557e2="" class="head_right"></div>
                    </div>
                    <div data-v-b73557e2=""><!----></div>
                </div>
            </div>
            <div data-v-6e2d35de="" id="scroll" class="content-container">
                <div data-v-6e2d35de="" id="content" class="content-scroll">
                    <div data-v-c66de3ba="" data-v-6e2d35de="" class="container">
                        <div data-v-c66de3ba="" data-v-6e2d35de="" class="photo">
                            <div data-v-c66de3ba="" data-v-6e2d35de="" class="pic rel"><img data-v-c66de3ba="" data-v-6e2d35de="" alt="" src="{{ asset('') }}static/img/logo2.png">
                                <div data-v-c66de3ba="" data-v-6e2d35de="" class="file" style="opacity: 0;"><input data-v-c66de3ba="" data-v-6e2d35de="" type="file" accept="image/*" class="file"></div>
                                <div data-v-c66de3ba="" data-v-6e2d35de="" class="abs"><img data-v-c66de3ba="" data-v-6e2d35de="" src="data:image/png;base64,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" alt=""></div>
                            </div>
                        </div>
                        <div data-v-c66de3ba="" data-v-6e2d35de="" class="item">
                            <div data-v-c66de3ba="" data-v-6e2d35de="" class="it db">
                                <div data-v-c66de3ba="" data-v-6e2d35de="" class="flexs">@lang('Nickname')</div>
                                <div data-v-c66de3ba="" data-v-6e2d35de="" class="str"><input data-v-c66de3ba="" data-v-6e2d35de="" type="text" placeholder="{{ Auth::user()->nickname }}"></div>
                            </div>
                            <div data-v-c66de3ba="" data-v-6e2d35de="" class="it db">
                                <div data-v-c66de3ba="" data-v-6e2d35de="" class="flexs">@lang('Member level')</div>
                                <div data-v-c66de3ba="" data-v-6e2d35de="" class="str" style="color:white;">{{ Auth::user()->level }}</div>
                            </div>
                            <div data-v-c66de3ba="" data-v-6e2d35de="" class="it db">
                                <div data-v-c66de3ba="" data-v-6e2d35de="" class="flexs">@lang('Mailbox')</div>
                                <div data-v-c66de3ba="" data-v-6e2d35de="" class="str" id="email" style="color:white;">pashutosh563@gmail.com</div>
                                <div data-v-c66de3ba="" data-v-6e2d35de="" class="img" onclick="copyById('email')"><img data-v-c66de3ba="" data-v-6e2d35de="" src="{{ asset('') }}static/img/copy.png"></div>
                            </div>
                            <div data-v-c66de3ba="" data-v-6e2d35de="" class="it db">
                                <div data-v-c66de3ba="" data-v-6e2d35de="" class="flexs">@lang('Mobile phone number')</div>

                                <div data-v-c66de3ba="" data-v-6e2d35de="" class="str" id="phone" style="color:white;">7071579847</div>

                                <div data-v-c66de3ba="" data-v-6e2d35de="" class="img" onclick="copyById('phone')">
                                    <img data-v-c66de3ba="" data-v-6e2d35de=""
                                        src="{{ asset('') }}static/img/copy.png"
                                        alt="Copy" style="cursor: pointer;">
                                </div>
                            </div>

                            <div id="copyToast"
                                style="visibility: hidden; position: fixed;  left: 50%; transform: translate(-50%, -50%); background-color: #333; color: #0f0e11; padding: 10px 20px; border-radius: 8px; font-size: 14px; z-index: 9999; opacity: 0; transition: opacity 0.5s ease; box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2); font-family: sans-serif;">
                                Copied to clipboard!
                            </div>

                            <script>
                                function copyById(elementId) {
                                    const text = document.getElementById(elementId)?.innerText?.trim();
                                    if (!text) return;

                                    navigator.clipboard.writeText(text)
                                        .then(() => {
                                            showToast("Copied: " + text);
                                        })
                                        .catch(() => {
                                            showToast("Failed to copy");
                                        });
                                }

                                function showToast(message) {
                                    const toast = document.getElementById("copyToast");
                                    toast.innerText = message;

                                    // Apply inline show styles
                                    toast.style.visibility = "visible";
                                    toast.style.opacity = "1";
                                    toast.style.bottom = "50px";

                                    // Hide after 2 seconds
                                    setTimeout(() => {
                                        toast.style.visibility = "hidden";
                                        toast.style.opacity = "0";
                                        toast.style.bottom = "30px";
                                    }, 2000);
                                }
                            </script>

                        </div>

                        <div data-v-d8bb9fe2="" data-v-c66de3ba="" data-v-6e2d35de="" style="height: 1.4rem;">
                            <div data-v-d8bb9fe2="" class="big_btn_box">
                                <div data-v-d8bb9fe2="" class="btn_box"><button data-v-d8bb9fe2="" class="btn on">@lang('Save')</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!---->
        </div>
        <div data-v-a7d12cfc="" class="global-loading default" style="display: none;">
            <div data-v-a7d12cfc="" class="global-spinner"><img data-v-a7d12cfc="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAYAAAADgWq5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNC0xMlQxNTo0MTowNiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWU0ZGQwNmEtMWExNS1kYjRmLTkyZmQtZjIzNTAwNzJkMGNmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlGMTI0NjE1NTQzQzExRThCQzhCQzEyQjVDOUMzOEJGIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OUYxMjQ2MTU1NDNDMTFFOEJDOEJDMTJCNUM5QzM4QkYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjEyNDYxMjU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjEyNDYxMzU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZTRkZDA2YS0xYTE1LWRiNGYtOTJmZC1mMjM1MDA3MmQwY2YiIHN0RXZ0OndoZW49IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hddYGwAABHhJREFUWIXN2XuoFVUUx/HPXG9WmmIPJQtNwQwqe5paEI1pCBZCRvVXDwlKCsLpIURgIZZG1KEXRVJJWPRnIv3TAw/0UCsrUlBLLQ1T01Ip6eZr+mPPOHOP56jXcz3XHxzu3nv2nv29a/bstdaeyJIXdYOG4bLs77k4AzvQFyvxKw7gJ/xZHpjGSZcmam8Csg/uxU0Yi8HHMGYz1uAtfIh/uzrp8QBPwFO4HgfR1oWx52e/CViX3ef9rkwedWFJXIQncE+da7uwHcuwF1uQClbvi1G4tMF9V+GuNE5+6C7gUzANT2Joqb0Dm/A6XsO+I9yjD/7DaMzArTi1ps/iNE6mNAvcjqfxKE4rtS/BXHxytAnqqBcuwHQ8XnNtP0amcfJLo8FHWn/98QIeK8Fuw3W48ThhCbvFBsxEhMWla+3YEFUrfbsKfDpewcOKR/e5sBssPU7QusqWwTTBurlWN+rfCHg67i7V3xasurFZwHpK42QBxmFP1jQkqlbW1utbD3g0ygt7Fe7T2QLdrjROVmBSqWlkVK28WtuvHvB7pfImXNvNbA2VxsmXeKnU9FBUrVxT7lMLHGNkVt6JO/DPiQKspzROZuC3UtM7UbVyiLMMPBDzSvWFWHFC6RprrLCbwCU4ZOUy8G24OivvxCwneN02UhonWwSD5Xo3L5SBpypii/mCu+1JzRHcOwyPqpVhFMD9MSYr78OnLUWrozRO1gk7FCE8mEwBPE7hzVbiu5bSNdabpfKkqFqJcuCr0Dsrr1ETZPegPiiVJ6dxkubAQwW/TohTTxa1K4x3IKpWLmwToqfhWWMqpDEnhdI42SrENYSYpqNN2O+uyBojfN16tPqKqpV2fJNVD+LK3MJbS/0GtRqskdI42Y+zsmob/moTlkHuVQ7qHKifDCpnJtvbBMg8XmjD2S1HaqCoWhmgCDl3o1e+S3xf6tey6OwY1K4IxrZhcw68rNRpjJNHA4WsG7ancbI7B/5CcagxCv1aTVarLKS8OaumAuMh17xFsVb64YaW0tVXO27PyvuxiAL4oJC35Xq+dVwNdbEiDv5btmzL4eXcUnmEwpn0lGYpwoVFaZykdAbeJZziEB7HG0JY13JF1crlyE+BdmQsODynm60ImkcIS6WliqqVQXhO8MCEg5Yf8+u1wFvxANbjfoUHbImiaqU3XsbErGkf5qRx0pH3qXfcOj/79YSeFXaG3JAz0zjZUO7QzIF2tymLyp7BI4oXbYVg7U7qceCoWhmKBRhfal6NKWmcHPYOdeX0/EQoxkc6wy7FxDROfq83oKcsfIvw+MfXtC8VLLuj0cBmgXsLb/RIfCVkK72FrXGfELjsEXLGFHcK580DdI5zd2F2GieVo03YLPCDwqF3nmr1Ek6N1grfN7Zn/8xenNPgHsuFbxw/H8uEzQLvVLwH+UZ/pnDOQfg0UKsD2biPMS+Nk5VdmbBZ4IVCVjtVyAXPE2LYsjqEtGs9vhWCrM8cp1NqFviA4OdzXz9ESLcGC+Abhe9yy4Vk8o8m5/M/9rYMi48jzWIAAAAASUVORK5CYII=" alt=""></div>
        </div>
    </div>

    <script>
        window.onload = function() {
            // 禁用双指放大
            document.addEventListener("touchstart", function(event) {
                if (event.touches.length > 1) {
                    event.preventDefault();
                }
            });
            // 禁用双击放大
            let lastTouchEnd = 0;
            document.addEventListener(
                "touchend",
                function(event) {
                    const now = new Date().getTime();
                    if (now - lastTouchEnd <= 300) {
                        event.preventDefault();
                    }
                    lastTouchEnd = now;
                },
                false
            );
            document.addEventListener("gesturestart", function(event) {
                event.preventDefault();
            });
        };
    </script>
    <script>
        function copyImageURL() {
            const img = document.getElementById("base64Image");
            navigator.clipboard.writeText(div.str)
                .then(() => console.log("Image copied to clipboard!success"))
                .catch(err => console.error("Copy failed: " + err));
        }

        copyImageURL();
    </script>
    <div class="van-toast van-toast--middle van-toast--success" style="z-index: 2003; display: none;"><i class="van-icon van-icon-success van-toast__icon"><!----></i>
        <div class="van-toast__text">Login successful</div>
    </div><!---->
</body>

</html>