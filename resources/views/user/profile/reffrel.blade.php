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

    <link href="{{ asset('') }}static/css/app.6328f701.css" rel="preload" as="style">
    <link href="{{ asset('') }}static/css/vant.d14f5539.css" rel="preload" as="style">
    <link href="{{ asset('') }}static/css/vant.d14f5539.css" rel="stylesheet">
    <link href="{{ asset('') }}static/css/app.6328f701.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-6f896b4e.5bb66763.css">
    <script charset="utf-8" src="/js1743619988925/chunk-6f896b4e.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-5576a184.9f52f39a.css">
    <script charset="utf-8" src="/js1743619988925/chunk-5576a184.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-60c8a75a.d6f6b692.css">
    <script charset="utf-8" src="/js1743619988925/chunk-60c8a75a.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-a7d8f170.c87a4291.css">
    <script charset="utf-8" src="/js1743619988925/chunk-a7d8f170.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-67912ed2.ae8d438d.css">
    <script charset="utf-8" src="/js1743619988925/chunk-67912ed2.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-375cccc2.6ddcb41c.css">
    <script charset="utf-8" src="/js1743619988925/chunk-375cccc2.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-00b1464f.674dbd13.css">
    <script charset="utf-8" src="/js1743619988925/chunk-00b1464f.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-7f362702.6a53b834.css">
    <script charset="utf-8" src="/js1743619988925/chunk-7f362702.d968e27a.1743619988925.js?v=1743619988925"></script>
    <script charset="utf-8" src="/js1743619988925/qrcodejs2.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-bc11d8ce.85a5c909.css">
    <script charset="utf-8" src="/js1743619988925/vue.d968e27a.1743619988925.js"></script>
    <link rel="icon"  href="{{ asset('static/img/logo2.png') }}">

</head>
<style>
    .home[data-v-7ca1be93] {
        width: 100%;
        background: transparent;
        background-size: 100% 16rem !important;
        height: 100vh;
        overflow: auto;
    }

    [data-v-7ca1be93] .head {
        width: 100%;
        background: transparent;
        background-size: 100% 16rem !important;
    }

    [data-v-7ca1be93] .head .name {
        color: #ffffff !important;
    }

    .shaer-box .n[data-v-7ca1be93] {
        margin-top: .2rem;
        font-size: .24rem;
        color: #ffffff;
    }

    .link-com .list .it .flex1[data-v-7ca1be93] {
        font-size: .28rem;
        font-weight: 400;
        line-height: .32rem;
        text-transform: lowercase;
    }
</style>

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-7ca1be93="" class="home">
            <div data-v-6e2d35de="" data-v-7ca1be93="" class="page" style="background: transparent;">
                <div data-v-6e2d35de="" class="headers">
                    <div data-v-b73557e2="" data-v-7ca1be93="" class="head" data-v-6e2d35de="">
                        <div data-v-b73557e2="" class="safe"></div>
                        <div data-v-b73557e2="" class="container flex">
                            <div data-v-b73557e2="" class="back"> <a href="{{ route('user.profile') }}"><img
                                        data-v-b73557e2=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUh
                            EUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVH
                            gB7Ze9DcIwEIWf+W1ZgQ0oWIBJYBMoqekoEUJsQAsFA7ACYgCYAHNWbBGO2ICVEBf3SU9Ozufk6ZzYCSAIQrVorQekMVLEmrvqjLRMMnO6K
                            pMNRGDMUbMn9VhXH3XjqZxhhroRc7GIuVjEXCwpmVM8oP2L8JI0R7a4N1lbFGtG5Lrji1LqYG7a+tLchrQjDUkdUteqE2iL8nif71pb0gHI
                            bXUBcyvS2qTYc1d1nctRuXOeB0++r++FX/ZixY7VhxvowHgeU54xzymmOT9RFUd4r6L5QrmTFqQ2smekbcc6uXhRjOeG5HKP8BF4g6dIBTFZFm
                            KyLMRkWYjJsvinyaj/YrMtUmO2xRvrOiMlWCUnSBFrcgJBEOrhAfmtScdij3WYAAAAAElFTkSuQmCC"
                                        alt=""></a></div>
                            <div data-v-b73557e2="" class="name tac"> Invite friends </div><!----><!----><!---->
                            <div data-v-b73557e2="" class="flex1"></div><!----><!----><!----><!----><!---->
                            <div data-v-b73557e2="" class="head_right"><img data-v-7ca1be93="" data-v-b73557e2=""
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJOSURBVHgB7VjRUcMwDFV6DFA2CBMAE2AmgA3IBsAEtBNQJkjZoEyQMEHLBMkGdAMhEfdOdV07dkzLR9+dqLGlZ1WOZDUAJwwEIr7g8fDi8y9jLTgiMoJrfURSw/Hw5lP49Z6CqODwWFPwVnDCCf8cmyTJg4yyrHWt66S7I+HPnGSsl9YkKy0fxFODD0T2iuEo93AVJE0AD+sWPgejYHDkJEuMR4P7TpEWJhiOibB/IPm26FSa+55ECZnoNRPMcQ8poTe3OaZ62HLU5xb7B0gBvYEZuScIBNtYIpnDUOBuMlxBJNjW4FrCEGCXrYMiZ+E0I1lALIzolR5djk7ZZ0PcTp6G57gf5CLqyh7uOhaCRNFHJdYvXIVbb5Trf89Jd+3QVQb3LU/2qV+VIJnZ5h2bSqge+pXQn43Et3NBifGlGH9CekjOmzP6MyXh2jN2GMnOV2ZrDekhm9gcQhFxZKH6ShqM4LCoLM+3s0TFOCizcAzDcedYW8c42Ipxn9vj3bNuJpoS49UZhIMJN47d+JSp7vGtM3Gst8aU5PziQp3ToAA35hsitBTTXp1xD2hfGsltu/RtaAyiJqRYBzhY7uyJ9mbT5+BfNAuPBmfB83zEfA8/Omw5a6fmWwDsWiKZJNexbwqwa9Vki9US1wUMAaZrWM3IpWlYNXlheRzKPhtgd2NUFvutziqDgdCE3BOaRbuGriTVYo51uNlQsF3vGPwoPdPRziE19HE3GI8lpjpWj6PJf7gPPuI9jirounQ+Ts5Q+eqjhe7oF6kK/Aku/ACjNjKfXTiqlAAAAABJRU5ErkJggg=="
                                    alt="" class="headRight"></div>
                        </div>
                        <div data-v-b73557e2=""><!----></div>
                    </div>
                </div>
                <div data-v-6e2d35de="" id="scroll" class="content-container">
                    <div data-v-6e2d35de="" id="content" class="content-scroll">
                        <div data-v-7ca1be93="" data-v-6e2d35de="" class="container">
                            <div data-v-7ca1be93="" data-v-6e2d35de="" class="text_box"
                                style="margin-bottom: 0.4rem;">
                                <div data-v-7ca1be93="" data-v-6e2d35de="" class="title" style="color:white;">
                                    Invite friends, <span>ear money together</span></div>
                                <div data-v-7ca1be93="" data-v-6e2d35de="" class="text" style="color:white;">
                                    Invite friends to be members of your community</div>
                            </div>
                            <div data-v-7ca1be93="" data-v-6e2d35de="" class="box">
                                <div data-v-7ca1be93="" data-v-6e2d35de="" class="m">
                                    <div data-v-7ca1be93="" data-v-6e2d35de="" class="qrcode"
                                        title="{{ url('') }}/register?inviteCode={{ Auth::user()->username }}">
                                       <img
                                            alt="Scan me!"
                                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={{ url('') }}/register?inviteCode={{ Auth::user()->username }}"
                                            style="display: block;">
                                        </div>

                                </div>
                                <div data-v-7ca1be93="" data-v-6e2d35de="" class="link-com">
                                    <div data-v-7ca1be93="" data-v-6e2d35de="" class="name">Invitation method</div>
                                    <div data-v-7ca1be93="" data-v-6e2d35de="" class="list">
                                        <div data-v-7ca1be93="" data-v-6e2d35de="" class="it">
                                            <div data-v-7ca1be93="" data-v-6e2d35de="" class="title">Invitation link
                                            </div>
                                            <div data-v-7ca1be93="" data-v-6e2d35de="" class="flex">
                                                <div data-v-7ca1be93="" data-v-6e2d35de="" class="flex1"
                                                    id="link">
                                                    {{ url('') }}/register?inviteCode={{ Auth::user()->username }}
                                                </div>
                                                <div data-v-7ca1be93="" data-v-6e2d35de="" class="copy"
                                                    onclick="copyById('link')"><img data-v-7ca1be93=""
                                                        data-v-6e2d35de=""
                                                        src="{{ asset('') }}static/img/copy.png" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-7ca1be93="" data-v-6e2d35de="" class="it">
                                            <div data-v-7ca1be93="" data-v-6e2d35de="" class="title">Invitation code
                                            </div>
                                            <div data-v-7ca1be93="" data-v-6e2d35de="" class="flex">
                                                <div data-v-7ca1be93="" data-v-6e2d35de="" class="flex1"
                                                    id="code"> {{ Auth::user()->username }} </div>
                                                <div data-v-7ca1be93="" data-v-6e2d35de="" class="copy"
                                                    onclick="copyById('code')"><img data-v-7ca1be93=""
                                                        data-v-6e2d35de=""
                                                        src="{{ asset('') }}static/img/copy.png" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div id="copyToast"
                                            style="visibility: hidden; position: fixed;  left: 50%; transform: translate(-50%, -50%); background-color: #333; color: #0f0e11; padding: 10px 20px; border-radius: 8px; font-size: 14px; z-index: 9999; opacity: 0; transition: opacity 0.1s ease; box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2); font-family: sans-serif;">
                                            Copied to clipboard!
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div data-v-7ca1be93="" data-v-6e2d35de="" class="shaer-box">
                                <div data-v-7ca1be93="" data-v-6e2d35de="" class="name">Share the Media</div>
                                <ul data-v-7ca1be93="" data-v-6e2d35de="" class="shaer-list">
                                    <li data-v-7ca1be93="" data-v-6e2d35de="">
                                        <a href="https://web.whatsapp.com/">
                                            <img data-v-7ca1be93="" data-v-6e2d35de=""
                                                src="{{ asset('') }}static/img/whatsapp@2x.7a6878fb.png"
                                                alt="">

                                        </a>
                                        <div data-v-7ca1be93="" data-v-6e2d35de="" class="n">Whatsapp</div>
                                    </li>
                                    <li data-v-7ca1be93="" data-v-6e2d35de="">
                                        <a href="https://web.telegram.org/">
                                            <img data-v-7ca1be93="" data-v-6e2d35de=""
                                                src="{{ asset('') }}static/img/telegram@2x.87891c17.png"
                                                alt="">

                                        </a>
                                        <div data-v-7ca1be93="" data-v-6e2d35de="" class="n">Telegram</div>
                                    </li>
                                    <li data-v-7ca1be93="" data-v-6e2d35de="">
                                        <a href="https://twitter.com/login">
                                            <img data-v-7ca1be93="" data-v-6e2d35de=""
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT5SURBVHgB7V2LlZpAFL3pwA4yHWRLoARTwZIO7EA70A6wA9MBdqCpAFOBdkB4LOTgWz4zw5sZkL3n3EN2dXl4fe8yPybfEBarglFBVfBHdVTVa4q991bwUfFa8G91vFa/WwRqwfYFs4K5EC/VOSO8KKKCScE75ETrYlbFijBzULZtIZtpNmLGmBlq4Xxk28sJGSFsxs1WSFUwxXSF40zw+S4fDGtMq1xnlY3UdJiLYF3cIgDoRpFivqJxUjtSwRMUpn2jsGUGDyIqvKZ4XkRUeG3xnIqosAzxmiKuIIgLgHxhTCGELYB8odxjAN8GXo/x0WpvxWq1glKqPJrifD7DJ97e3p6u83a7ldTAz4K/YQGFAd8rLiq/3++5Dfb7vbdM2m63T7GzLMsLMXX/nnpZVn6Y6ATYbDa5LdbrdRDxiqoxPc8JhohNApxOp9wGlL0WH0ab7+/vEuLVjGCAzOTkVA50cU1Qebe9l37fxOVycSIeZbegeHmliRa2NgFMhOFlL+2H3Jvp311fqCE3GMAKIxrMJsLwspfyQ8oy3Wqw4OANJR4bRFcYXvYSftgmXhzHUuLVjNGDbGwAE2Ek/bBNPKqIsZ+nhWmXeGupIFEUPX2QNE073yvhh203sd1u50K8mlGbgIlkEF9+SOJR5noUj3jg4q1cBKLMa4IyExoZZOKHXPzD4eBaPOKnm4lY+doK0+aHQ92tJEme/uZ4PPoQr2bUFDBxFciVH9JrXHBPwtV8KmOn431j/LDtTjpycECKWS2eE//jHOOHzYaw0OCAFEsfjHwEG+OHdYZNTLy80g47XwHH+CEfd5yAeMSyb3z0GZQLQ1nV9d6uYTLXw2AGTEjA1HdgWz+sxRMcHBjLcqjf+4wb77f2lSP3w76yD8CMBAyyssp3f9mlgMEugLpdtn7YVfYBGPYC+ECAi/7ySwtIIjSbKH1+aFL2ixGQyD1uZn44jUVDvLnS54e6zSAPvE9CQN5Fm5EfUhMw7FLdLvFm4ocpCXgMELhVPBKMN20m7ocJCbjxHLRk37ILGlluom92LbAfloMJa/gLWHJo2UVbH3iifhiRgMpTsJK6yy7a2oddo84B/fD/xFLmI2Db5HdfyfFM7ROGpjI9+2F5B65xdBzMetkFv6lMyA+TpoCxw0Ct4plMfusKw+M49sN1U0CqZSfDWhLLLiboh2UPhCN1IZ7UsgsTYXjZO/DDpE3ASDiI+LKLCflhhA6IlTFfOSC17MLED3lzScgPM/RgJ/EheRdNctnFBPwwRg9G30x8LLswaR+aTBtoMIMGdpLiuWpGmPih7rSBBmNowCoLhZ/J0CIXpmu+2GTaACOzr4bRCA33Gl/LLrgwBPqZ4tfsehTNwg9jGCLVObHDZzK0yP3QBAaL0BNYQGGglE0HB1yR+6EJNL7sDD1PsA897kql3PnMLH+E9PF44Hq9IgSKLw6moOulR17p2INf+BhssQYtZc0Xyk+r8W1AKbbER/6fxvvGQmF5m04oCEPha9uT0VD42nhnNBS+tn4aDYXXEtHr5mNNvEIThz6D6C5FpqDG9hw3YLxD4xF+X1CY136CKSa0BWgTMabtjXfMYDdf8pMdpiXkvbqmoF5nCoXwGTlL4dpAs/i0fZIv0VK86L76lAkk5hGymUnnSqpze822ofFA11AF3yp+r35eNY5N3BpH4p/qeEbA/w7jH3XHzdd8swtFAAAAAElFTkSuQmCC"
                                                alt="">

                                        </a>
                                        <div data-v-7ca1be93="" data-v-6e2d35de="" class="n">X</div>
                                    </li>
                                    <li data-v-7ca1be93="" data-v-6e2d35de="">
                                        <a href="https://instagram.com/login">
                                            <img data-v-7ca1be93="" data-v-6e2d35de=""
                                                src="{{ asset('') }}static/img/Instagram.4be9bf73.png"
                                                alt="">

                                        </a>
                                        <div data-v-7ca1be93="" data-v-6e2d35de="" class="n">Instagram</div>
                                    </li>
                                    <li data-v-7ca1be93="" data-v-6e2d35de="">

                                        <a href="https://facebook.com/login">
                                            <img data-v-7ca1be93="" data-v-6e2d35de=""
                                                src="data:image/png;base64,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"
                                                alt="">

                                        </a>
                                        <div data-v-7ca1be93="" data-v-6e2d35de="" class="n">Facebook</div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div><!---->
            </div>
        </div>
        <div data-v-a7d12cfc="" class="global-loading default" style="display: none;">
            <div data-v-a7d12cfc="" class="global-spinner"><img data-v-a7d12cfc=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAYAAAADgWq5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNC0xMlQxNTo0MTowNiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWU0ZGQwNmEtMWExNS1kYjRmLTkyZmQtZjIzNTAwNzJkMGNmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlGMTI0NjE1NTQzQzExRThCQzhCQzEyQjVDOUMzOEJGIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OUYxMjQ2MTU1NDNDMTFFOEJDOEJDMTJCNUM5QzM4QkYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjEyNDYxMjU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjEyNDYxMzU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZTRkZDA2YS0xYTE1LWRiNGYtOTJmZC1mMjM1MDA3MmQwY2YiIHN0RXZ0OndoZW49IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hddYGwAABHhJREFUWIXN2XuoFVUUx/HPXG9WmmIPJQtNwQwqe5paEI1pCBZCRvVXDwlKCsLpIURgIZZG1KEXRVJJWPRnIv3TAw/0UCsrUlBLLQ1T01Ip6eZr+mPPOHOP56jXcz3XHxzu3nv2nv29a/bstdaeyJIXdYOG4bLs77k4AzvQFyvxKw7gJ/xZHpjGSZcmam8Csg/uxU0Yi8HHMGYz1uAtfIh/uzrp8QBPwFO4HgfR1oWx52e/CViX3ef9rkwedWFJXIQncE+da7uwHcuwF1uQClbvi1G4tMF9V+GuNE5+6C7gUzANT2Joqb0Dm/A6XsO+I9yjD/7DaMzArTi1ps/iNE6mNAvcjqfxKE4rtS/BXHxytAnqqBcuwHQ8XnNtP0amcfJLo8FHWn/98QIeK8Fuw3W48ThhCbvFBsxEhMWla+3YEFUrfbsKfDpewcOKR/e5sBssPU7QusqWwTTBurlWN+rfCHg67i7V3xasurFZwHpK42QBxmFP1jQkqlbW1utbD3g0ygt7Fe7T2QLdrjROVmBSqWlkVK28WtuvHvB7pfImXNvNbA2VxsmXeKnU9FBUrVxT7lMLHGNkVt6JO/DPiQKspzROZuC3UtM7UbVyiLMMPBDzSvWFWHFC6RprrLCbwCU4ZOUy8G24OivvxCwneN02UhonWwSD5Xo3L5SBpypii/mCu+1JzRHcOwyPqpVhFMD9MSYr78OnLUWrozRO1gk7FCE8mEwBPE7hzVbiu5bSNdabpfKkqFqJcuCr0Dsrr1ETZPegPiiVJ6dxkubAQwW/TohTTxa1K4x3IKpWLmwToqfhWWMqpDEnhdI42SrENYSYpqNN2O+uyBojfN16tPqKqpV2fJNVD+LK3MJbS/0GtRqskdI42Y+zsmob/moTlkHuVQ7qHKifDCpnJtvbBMg8XmjD2S1HaqCoWhmgCDl3o1e+S3xf6tey6OwY1K4IxrZhcw68rNRpjJNHA4WsG7ancbI7B/5CcagxCv1aTVarLKS8OaumAuMh17xFsVb64YaW0tVXO27PyvuxiAL4oJC35Xq+dVwNdbEiDv5btmzL4eXcUnmEwpn0lGYpwoVFaZykdAbeJZziEB7HG0JY13JF1crlyE+BdmQsODynm60ImkcIS6WliqqVQXhO8MCEg5Yf8+u1wFvxANbjfoUHbImiaqU3XsbErGkf5qRx0pH3qXfcOj/79YSeFXaG3JAz0zjZUO7QzIF2tymLyp7BI4oXbYVg7U7qceCoWhmKBRhfal6NKWmcHPYOdeX0/EQoxkc6wy7FxDROfq83oKcsfIvw+MfXtC8VLLuj0cBmgXsLb/RIfCVkK72FrXGfELjsEXLGFHcK580DdI5zd2F2GieVo03YLPCDwqF3nmr1Ek6N1grfN7Zn/8xenNPgHsuFbxw/H8uEzQLvVLwH+UZ/pnDOQfg0UKsD2biPMS+Nk5VdmbBZ4IVCVjtVyAXPE2LYsjqEtGs9vhWCrM8cp1NqFviA4OdzXz9ESLcGC+Abhe9yy4Vk8o8m5/M/9rYMi48jzWIAAAAASUVORK5CYII="
                    alt=""></div>
        </div>
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

    <script>
        window.onload = function() {
            // 禁用双指放大
            document.addEventListener("touchstart", function(event) {
                if (event.touches.length > 1) {
                    event.preventDefault();
                }
            });

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
    <div class="van-toast van-toast--middle van-toast--text" style="z-index: 2004; display: none;">
        <div class="van-toast__text">Copy successfully</div>
    </div><!---->
</body>

</html>
