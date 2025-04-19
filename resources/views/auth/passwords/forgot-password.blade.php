<html class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title msttexthash="95030" msthash="0">Reset login password</title>
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
    <link href="{{asset('')}}js1743961793772/app.c573b101.1743961793772.js?v=1743961793772" rel="preload" as="script">
    <link href="{{asset('')}}js1743961793772/axios.c573b101.1743961793772.js?v=1743961793772" rel="preload" as="script">
    <link href="{{asset('')}}js1743961793772/compressorjs.c573b101.1743961793772.js?v=1743961793772" rel="preload"
        as="script">
    <link href="{{asset('')}}js1743961793772/core-js.c573b101.1743961793772.js?v=1743961793772" rel="preload"
        as="script">
    <link href="{{asset('')}}js1743961793772/crypto-js.c573b101.1743961793772.js?v=1743961793772" rel="preload"
        as="script">
    <link href="{{asset('')}}js1743961793772/vant.c573b101.1743961793772.js?v=1743961793772" rel="preload" as="script">
    <link href="{{asset('')}}js1743961793772/vendors~app.c573b101.1743961793772.js?v=1743961793772" rel="preload"
        as="script">
    <link href="{{asset('')}}js1743961793772/vue.c573b101.1743961793772.js?v=1743961793772" rel="preload" as="script">
    <link href="{{asset('')}}static/css/app.6328f701.css" rel="preload" as="style">
    <link href="{{asset('')}}static/css/vant.d14f5539.css" rel="preload" as="style">
    <link href="{{asset('')}}static/css/vant.d14f5539.css" rel="stylesheet">
    <link href="{{asset('')}}static/css/app.6328f701.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-75ff273e.12bb350e.css">
    <script charset="utf-8" src="{{asset('')}}js1743961793772/chunk-75ff273e.c573b101.1743961793772.js?v=1743961793772">
    </script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-5576a184.9f52f39a.css">
    <script charset="utf-8" src="{{asset('')}}js1743961793772/chunk-5576a184.c573b101.1743961793772.js?v=1743961793772">
    </script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-2751cef0.cb723b7f.css">
    <script charset="utf-8" src="{{asset('')}}js1743961793772/chunk-2751cef0.c573b101.1743961793772.js?v=1743961793772">
    </script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-a7d8f170.c87a4291.css">
    <script charset="utf-8" src="{{asset('')}}js1743961793772/chunk-a7d8f170.c573b101.1743961793772.js?v=1743961793772">
    </script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-747287e5.9009fee8.css">
    <script charset="utf-8" src="{{asset('')}}js1743961793772/chunk-747287e5.c573b101.1743961793772.js?v=1743961793772">
    </script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-67912ed2.ae8d438d.css">
    <script charset="utf-8" src="{{asset('')}}js1743961793772/chunk-67912ed2.c573b101.1743961793772.js?v=1743961793772">
    </script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-7f362702.6a53b834.css">
    <script charset="utf-8" src="{{asset('')}}js1743961793772/chunk-7f362702.c573b101.1743961793772.js?v=1743961793772">
    </script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-00b1464f.674dbd13.css">
    <script charset="utf-8" src="{{asset('')}}js1743961793772/chunk-00b1464f.c573b101.1743961793772.js?v=1743961793772">
    </script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-6f896b4e.5bb66763.css">
    <script charset="utf-8" src="{{asset('')}}js1743961793772/chunk-6f896b4e.c573b101.1743961793772.js?v=1743961793772">
    </script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-7486a5bb.7212a656.css">
    <script charset="utf-8" src="{{asset('')}}js1743961793772/chunk-7486a5bb.c573b101.1743961793772.js?v=1743961793772">
    </script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-709c9e2a.9750666e.css">
    <script charset="utf-8" src="{{asset('')}}js1743961793772/chunk-709c9e2a.c573b101.1743961793772.js?v=1743961793772">
    </script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-41993a66.791df78f.css">
    <script charset="utf-8" src="{{asset('')}}js1743961793772/chunk-41993a66.c573b101.1743961793772.js?v=1743961793772">
    </script>
    <link rel="icon" href="{{ asset('static/img/logo2.png') }}">

</head>
<style>
    .cname {
        color: white;
    }

</style>

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-7daccefc="" data-v-5745725e="" class="page">
            <div data-v-7daccefc="" class="headers">
                <div data-v-b73557e2="" data-v-5745725e="" class="head head_isModule" data-v-7daccefc="">
                    <div data-v-b73557e2="" class="safe"></div>
                    <div data-v-b73557e2="" class="container flex">
                        <div data-v-b73557e2="" class="back"> <a href="{{route('user.profile')}}">
                                <img data-v-b73557e2="" src="{{ asset('') }}static/img/eroo.png" alt=""></a></div>
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-b73557e2="" class="name tac " msttexthash="267969" msthash="54"> Forgot password
                        </div>
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-b73557e2="" class="flex1"></div>
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-b73557e2="" class="notice"><img data-v-b73557e2=""
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJNSURBVHgB7ZnRcYMwDEBFrgNkBHeC0g3SCXqdIGyQdIJ0g9IJ0g3STkA2SDKB6QTNBqoUzJ0RtkkIED767hTuQJaFZLBEImgJIk7pEBt5IFFC5UhyINmS7KMoOsIQkGMzkozkFy9jQ5JAX7BxEo3Xozt1lIwpE7FzJt4ZXX2mvoJrIANz9KcyI1mSxIHxsdHJPDbY9hLaQANXHqPrkFMBe5yJT4/N1aXGVuhOyQyuxDiqWztJigvHYL7zKXQE2yJJHfPMmwby3ck19wY9wbbFXDy3Cg3QYkAKPYP1dZn5FBOhqLtMa8DBqSMwiUtRKikYCCx2p0pwpIKM3hoGxp
                        HqmX1xc6voWT7E6FqLZg3UL9wArO44/ERPJ1CUSzbfcDvsuU/l3B39zITSnDx/puOe5IPquBx6xCynBRSBkm+N2LX+UIR5Dj2B4WKkeFixuZQKv93bO6ewuejNJmIcl+Vbktw6x2FvVxKFWUI1peXcldZAOsi9wxMdH4XiA3SPbTMnuTdz7yHg4AnT4OxhOHJfUzWBkfPv4LU4HcSizFIwHDF6Sjt28CgUeS/mckdZ5w/QPbZNdm5n5q5uvVgvu0f1oi6rmV3AuQR6Aos6NORkGhlFDnFC8myN5xSkAxULvKuUH6CUdfkFxgTesO1oBOv9+OBthxfPA6NgDGDRi2j5cMAYMGmVkdM4QD8ecorTuUT3ByQtUxtBRxjD71DvK0rK7dN3PSd56u21hud9hfWR9p5WDDdfPjJs+OZ4B93xCv70lXBh8gNFtf51zl8Tf7SnafQ0q88oAAAAAElFTkSuQmCC"
                                alt=""></div>
                        <!---->
                        <div data-v-b73557e2="" class="head_right"></div>
                    </div>
                    <div data-v-b73557e2="">
                        <!---->
                    </div>
                </div>
            </div>
            <div data-v-7daccefc="" id="scroll" class="content-container">
                <div data-v-7daccefc="" id="content" class="content-scroll">


                    <form method="post" action="{{route('forgot_submit')}}">
                        {{ csrf_field() }}
                        <div data-v-5745725e="" data-v-7daccefc="" class="container">
                            <div data-v-5745725e="" data-v-7daccefc="" class="item valMob">
                                <div data-v-5745725e="" data-v-7daccefc="" class="cname" msttexthash="95030"
                                    msthash="56" style="color:white;">Mailbox</div>
                                <div data-v-5745725e="" data-v-7daccefc="" class="val inp">
                                    <input data-v-5745725e="" data-v-7daccefc="" type="text" name="email" id="emailId"
                                        placeholder="Please enter your email address" mstplaceholder="751179"
                                        msthash="57" style="color:white;"></div>
                            </div>
                            <div data-v-5745725e="" data-v-7daccefc="" class="verify-email" mst texthash="421954"
                                mailto:msthash="58"></div>
                            <div data-v-5745725e="" data-v-7daccefc="" class="item valMob">
                                <div data-v-5745725e="" data-v-7daccefc="" class="cname" msttexthash="314899"
                                    msthash="59" style="color:white;">Verification code</div>
                                <div data-v-5745725e="" data-v-7daccefc="" class="inp val flex">
                                    <div data-v-5745725e="" data-v-7daccefc="" class="flex1">
                                        <input data-v-5745725e="" data-v-7daccefc="" type="text" name="code"
                                            placeholder="Email Verification code" style="color:white;"></div>
                                    <div data-v-5745725e="" data-v-7daccefc="" class="code-btn sendCode"
                                        msttexthash="43927" msthash="61"> Send </div>
                                    <div data-v-5745725e="" data-v-7daccefc="" class="resend-btn" _msthidden="1"
                                        style="display: none;">
                                        <div data-v-5745725e="" class="van-count-down" data-v-7daccefc="" msthidden="1">
                                            <span data-v-5745725e="" msttexthash="16328" msthidden="1" msthash="62">0
                                                <var data-v-5745725e="">s</var></span></div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-5745725e="" data-v-7daccefc="" class="item valMob">
                                <div data-v-5745725e="" data-v-7daccefc="" class="cname" msttexthash="394121"
                                    msthash="63" style="color:white;">Reset login password</div>
                                <div data-v-5745725e="" data-v-7daccefc="" class="val inp flex">
                                    <div data-v-5745725e="" data-v-7daccefc="" class="flex1">


                                        <input id="passwordInput" onclick="togglePassword()" data-v-5745725e=""
                                            data-v-7daccefc="" placeholder="Please enter a new password" name="password"
                                            type="password" mstplaceholder="582335" msthash="64" style="color:white;">
                                    </div>
                                    <div data-v-5745725e="" data-v-7daccefc="" class="yj">
                                        <img id="eyeIcon" src="{{ asset('') }}static/img/eye3.png" alt="Toggle Password"
                                            onclick="togglePassword()" style="cursor: pointer;">

                                    </div>
                                </div>
                            </div>
                            <div data-v-5745725e="" data-v-7daccefc="" class="item valMob">
                                <div data-v-5745725e="" data-v-7daccefc="" class="cname" msttexthash="295828"
                                    msthash="65" style="color:white;">Confirm password</div>
                                <div data-v-5745725e="" data-v-7daccefc="" class="flex inp val">
                                    <div data-v-5745725e="" data-v-7daccefc="" class="flex1">




                                        <input onclick="togglePassword1()" id="passwordConfirmationInput"
                                            data-v-5745725e="" data-v-7daccefc=""
                                            placeholder="Please enter the new password again"
                                            name="password_confirmation" type="password" style="color:white;">
                                    </div>
                                    <div data-v-5745725e="" data-v-7daccefc="" class="yj">
                                        <img id="eyeIconConfirmation" src="{{ asset('') }}static/img/eye3.png"
                                            alt="Toggle Password" onclick="togglePassword1()" style="cursor: pointer;">


                                    </div>
                                </div>
                            </div>
                            <div data-v-5745725e="" data-v-7daccefc="" class="err"> </div>
                            <div data-v-5745725e="" data-v-7daccefc="" class="go butgo"><button style="background: linear-gradient(90deg, var(--token-c56d9be0-ff1a-4142-9896-10e19a52f142, rgb(62 179 209)) 0%, rgb(63 174 219) 48.91786%, var(--token-f05fe42a-0284-4847-be0d-a2808346fd91, rgb(11, 229, 116)) 100%);color: black;" data-v-5745725e="" type="submit" data-v-7daccefc="" class="btn2 on" msttexthash="94991" msthash="67"> Confirm
                                </button></div>
                        </div>
                        <!---->

                    </form>
                </div>
            </div>
            <!---->
        </div>
        <div data-v-a7d12cfc="" class="global-loading default" style="display: none;">
            <div data-v-a7d12cfc="" class="global-spinner"><img data-v-a7d12cfc=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAYAAAADgWq5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNC0xMlQxNTo0MTowNiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWU0ZGQwNmEtMWExNS1kYjRmLTkyZmQtZjIzNTAwNzJkMGNmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlGMTI0NjE1NTQzQzExRThCQzhCQzEyQjVDOUMzOEJGIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OUYxMjQ2MTU1NDNDMTFFOEJDOEJDMTJCNUM5QzM4QkYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjEyNDYxMjU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjEyNDYxMzU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZTRkZDA2YS0xYTE1LWRiNGYtOTJmZC1mMjM1MDA3MmQwY2YiIHN0RXZ0OndoZW49IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hddYGwAABHhJREFUWIXN2XuoFVUUx/HPXG9WmmIPJQtNwQwqe5paEI1pCBZCRvVXDwlKCsLpIURgIZZG1KEXRVJJWPRnIv3TAw/0UCsrUlBLLQ1T01Ip6eZr+mPPOHOP56jXcz3XHxzu3nv2nv29a/bstdaeyJIXdYOG4bLs77k4AzvQFyvxKw7gJ/xZHpjGSZcmam8Csg/uxU0Yi8HHMGYz1uAtfIh/uzrp8QBPwFO4HgfR1oWx52e/CViX3ef9rkwedWFJXIQncE+da7uwHcuwF1uQClbvi1G4tMF9V+GuNE5+6C7gUzANT2Joqb0Dm/A6XsO+I9yjD/7DaMzArTi1ps/iNE6mNAvcjqfxKE4rtS/BXHxytAnqqBcuwHQ8XnNtP0amcfJLo8FHWn/98QIeK8Fuw3W48ThhCbvFBsxEhMWla+3YEFUrfbsKfDpewcOKR/e5sBssPU7QusqWwTTBurlWN+rfCHg67i7V3xasurFZwHpK42QBxmFP1jQkqlbW1utbD3g0ygt7Fe7T2QLdrjROVmBSqWlkVK28WtuvHvB7pfImXNvNbA2VxsmXeKnU9FBUrVxT7lMLHGNkVt6JO/DPiQKspzROZuC3UtM7UbVyiLMMPBDzSvWFWHFC6RprrLCbwCU4ZOUy8G24OivvxCwneN02UhonWwSD5Xo3L5SBpypii/mCu+1JzRHcOwyPqpVhFMD9MSYr78OnLUWrozRO1gk7FCE8mEwBPE7hzVbiu5bSNdabpfKkqFqJcuCr0Dsrr1ETZPegPiiVJ6dxkubAQwW/TohTTxa1K4x3IKpWLmwToqfhWWMqpDEnhdI42SrENYSYpqNN2O+uyBojfN16tPqKqpV2fJNVD+LK3MJbS/0GtRqskdI42Y+zsmob/moTlkHuVQ7qHKifDCpnJtvbBMg8XmjD2S1HaqCoWhmgCDl3o1e+S3xf6tey6OwY1K4IxrZhcw68rNRpjJNHA4WsG7ancbI7B/5CcagxCv1aTVarLKS8OaumAuMh17xFsVb64YaW0tVXO27PyvuxiAL4oJC35Xq+dVwNdbEiDv5btmzL4eXcUnmEwpn0lGYpwoVFaZykdAbeJZziEB7HG0JY13JF1crlyE+BdmQsODynm60ImkcIS6WliqqVQXhO8MCEg5Yf8+u1wFvxANbjfoUHbImiaqU3XsbErGkf5qRx0pH3qXfcOj/79YSeFXaG3JAz0zjZUO7QzIF2tymLyp7BI4oXbYVg7U7qceCoWhmKBRhfal6NKWmcHPYOdeX0/EQoxkc6wy7FxDROfq83oKcsfIvw+MfXtC8VLLuj0cBmgXsLb/RIfCVkK72FrXGfELjsEXLGFHcK580DdI5zd2F2GieVo03YLPCDwqF3nmr1Ek6N1grfN7Zn/8xenNPgHsuFbxw/H8uEzQLvVLwH+UZ/pnDOQfg0UKsD2biPMS+Nk5VdmbBZ4IVCVjtVyAXPE2LYsjqEtGs9vhWCrM8cp1NqFviA4OdzXz9ESLcGC+Abhe9yy4Vk8o8m5/M/9rYMi48jzWIAAAAASUVORK5CYII="
                    alt=""></div>
        </div>
    </div>

    <script src="https://code.jquery.com//jquery-3.3.1.min.js"></script>


    <script>
        $('.code-btn').click(function (e) {
            var ths = $(this);
            var emailId = $('#emailId').val();


            // alert(sponsor); 
            $.ajax({
                type: "POST",
                url: "{{ route('send_forgot') }}",
                data: {
                    "emailId": emailId,
                    "_token": "{{ csrf_token() }}",
                },
                success: function (response) {
                    // alert(response);      
                    if (response) {
                        // alert("hh");
                        iziToast.success({
                            message: 'Email send Successfully',
                            position: "topRight"
                        });
                    } else {
                        // alert("hi");
                        iziToast.error({
                            message: 'Error!',
                            position: "topRight"
                        });
                    }
                }
            });
        });

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


    <script>
        function togglePassword() {
            const passwordInput = document.getElementById("passwordInput");
            const eyeIcon = document.getElementById("eyeIcon");

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                eyeIcon.src = "{{ asset('') }}static/img/eye4.png"; // Eye open
            } else {
                passwordInput.type = "password";
                eyeIcon.src = "{{ asset('') }}static/img/eye3.png"; // Eye close
            }
        }

    </script>


    <script>
        function togglePassword1() {
            const passwordInput = document.getElementById("passwordConfirmationInput");
            const eyeIcon = document.getElementById("eyeIconConfirmation");

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                eyeIcon.src = "{{ asset('') }}static/img/eye4.png";
            } else {
                passwordInput.type = "password";
                eyeIcon.src = "{{ asset('') }}static/img/eye3.png";
            }
        }

    </script>




    <script>
        $(document).ready(function () {
            var countdown;
            var timer;

            $('.code-btn').click(function (e) {
                var emailId = $('#emailId').val();

                if (!emailId) {
                    iziToast.error({
                        message: 'Invalid Email!',
                        position: "topRight"
                    });
                    return false;
                }

                startTimer(); // Start the timer after sending the code
                $('.code-btn').hide();
                $('.resend-btn').show();
                $.ajax({
                    type: "POST",
                    url: "{{ route('send_forgot') }}",
                    data: {
                        "emailId": emailId,
                        "_token": "{{ csrf_token() }}"
                    },
                    success: function (response) {
                        if (response) {
                            iziToast.success({
                                message: 'Email sent Successfully',
                                position: "topRight"
                            });



                        } else {
                            iziToast.error({
                                message: 'Error!',
                                position: "topRight"
                            });
                        }
                    }
                });
            });

            function startTimer() {
                var resendButton = $('.resend-btn');
                countdown = 60; // 60 seconds
                resendButton.prop('disabled', true); // Disable the resend button
                resendButton.text('Wait ' + countdown + 's');

                timer = setInterval(function () {
                    countdown--;
                    resendButton.text('Wait ' + countdown + 's');

                    if (countdown <= 0) {
                        clearInterval(timer);
                        resendButton.prop('disabled',
                        false); // Enable the resend button after the timer ends
                        resendButton.text('Resend Code'); // Reset button text
                    }
                }, 1000);
            }

            // Optional: Handle Resend Button Click
            $('.resend-btn').click(function (e) {
                $('.code-btn').trigger('click'); // Simulate a click on the original send button
            });
        });

    </script>



    <div class="van-toast van-toast--middle van-toast--fail" style="z-index: 2004; display: none;"><i
            class="van-icon van-icon-fail van-toast__icon">
            <!----></i>
        <div class="van-toast__text" msttexthash="1046864" msthash="37">Please enter the correct email address</div>
    </div>
</body>

</html>
