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
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-6f896b4e.5bb66763.css">
    <script charset="utf-8" src="/js1743475952730/chunk-6f896b4e.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-5576a184.9f52f39a.css">
    <script charset="utf-8" src="/js1743475952730/chunk-5576a184.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-60c8a75a.d6f6b692.css">
    <script charset="utf-8" src="/js1743475952730/chunk-60c8a75a.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-a7d8f170.c87a4291.css">
    <script charset="utf-8" src="/js1743475952730/chunk-a7d8f170.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-67912ed2.ae8d438d.css">
    <script charset="utf-8" src="/js1743475952730/chunk-67912ed2.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-bcc45786.50818f65.css">
    <script charset="utf-8" src="/js1743475952730/chunk-bcc45786.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-00b1464f.674dbd13.css">
    <script charset="utf-8" src="/js1743475952730/chunk-00b1464f.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-7f362702.6a53b834.css">
    <script charset="utf-8" src="/js1743475952730/chunk-7f362702.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script charset="utf-8" src="/js1743475952730/echarts.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script charset="utf-8" src="/js1743475952730/chunk-0119f9da.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-0b116a05.250ed6be.css">
    <script charset="utf-8" src="/js1743475952730/chunk-0b116a05.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="icon" href="{{ asset('static/img/logo2.png') }}">

</head>
<style>
    .top-com[data-v-184f5bd0] {
        background: linear-gradient(180deg, #111116, #141519);
        background-size: 100% 100%;
        padding: .32rem;
        margin-top: .6rem;
        margin-bottom: .32rem;
        border: .02rem solid hsla(0, 0%, 100%, .1);
        border-radius: 8px;
    }

    .invate-com .com1[data-v-0e8d00e8] {
        font-size: .28rem;
        font-weight: 600;
        line-height: .28rem;
    }

    .invate-com .com2[data-v-0e8d00e8] {
        opacity: .6;
        margin-top: .16rem;
        font-size: .24rem;
        margin-bottom: .4rem;
    }

    .invate-com .com3[data-v-0e8d00e8] {
        font-size: .24rem;
    }

    .invate-com .com3 img[data-v-0e8d00e8] {
        height: .32rem;
    }

    .invate-com[data-v-184f5bd0] {

        color: #ffffff;
        line-height: 100%;
    }

    .level-com .str[data-v-0e8d00e8] {
        border-radius: .86rem;
        background: linear-gradient(90deg, var(--token-c56d9be0-ff1a-4142-9896-10e19a52f142, rgb(62 179 209)) 0%, rgb(63 174 219) 48.91786%, var(--token-f05fe42a-0284-4847-be0d-a2808346fd91, rgb(11, 229, 116)) 100%);
        display: flex;
        height: .48rem;
        justify-content: center;
        align-items: center;
        color: #000;
        font-size: .24rem;
        padding: 0 .32rem;
    }
</style>

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-6e2d35de="" data-v-184f5bd0="" class="page">
            <div data-v-6e2d35de="" class="headers">
                <div data-v-b73557e2="" data-v-184f5bd0="" class="head" data-v-6e2d35de="">
                    <div data-v-b73557e2="" class="safe"></div>
                    <div data-v-b73557e2="" class="container flex">
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-b73557e2="" class="myName"><img data-v-b73557e2=""
                                src="{{ asset('') }}static/img/logo.png" style=" width: 80px; height: 37px;"
                                alt=""></div>
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-b73557e2="" class="flex1"></div>

                        <div data-v-b73557e2="" class="notice" style="margin-left: 0rem; margin-right: 0.32rem;">
                            <a href="{{ route('user.notice') }}">
                                <img data-v-b73557e2="" src="{{ asset('static/img//bell.png') }}" alt="">
                                <span data-v-b73557e2=""> 1 </span>
                        </div>
                        </a>
                        <div data-v-b73557e2="" class="lang">
                            <a href="{{ route('user.lang') }}"> <img data-v-b73557e2=""
                                    src="{{ asset('static/img//globe.png') }}" alt="">
                        </div>
                        </a>
                        <div data-v-b73557e2="" class="notice">
                            <img data-v-b73557e2="" src="{{ asset('static/img//headphone.png') }}" alt="">
                        </div>
                        <!---->
                        <div data-v-b73557e2="" class="head_right"></div>
                    </div>
                    <div data-v-b73557e2="">
                        <!---->
                    </div>
                </div>
            </div>
            <div data-v-6e2d35de="" id="scroll" class="content-container">
                <div data-v-6e2d35de="" id="content" class="content-scroll">
                    <div data-v-184f5bd0="" data-v-6e2d35de="" class="profile">
                        <div data-v-184f5bd0="" data-v-6e2d35de="" class="container">
                            <div data-v-184f5bd0="" data-v-6e2d35de="" class="top-com">
                                <div data-v-184f5bd0="" data-v-6e2d35de="" class="flex">
                                    <div data-v-184f5bd0="" data-v-6e2d35de="" class="ico"><img
                                            data-v-184f5bd0="" data-v-6e2d35de=""
                                            src="{{ asset('') }}static/img/logo2.png" alt=""></div>


                                    <div data-v-184f5bd0="" data-v-6e2d35de="" class="edit"><a
                                            href="{{ route('user.showinfo') }}" style="color:black;">
                                            @lang('Edit') </a></div>
                                </div>
                                <div data-v-184f5bd0="" data-v-6e2d35de="" class="name" style="color:white;">
                                    {{ Auth::user()->name }} </div>
                                <div data-v-184f5bd0="" data-v-6e2d35de="" class="str">
                                    <div data-v-184f5bd0="" data-v-6e2d35de="" class="copy" style="color:white;">
                                        @lang('UID'): <span data-v-184f5bd0="" data-v-6e2d35de="" id="code"
                                            style="color:white;">{{ Auth::user()->username }}</span><img
                                            data-v-184f5bd0="" data-v-6e2d35de=""
                                            src="{{ asset('') }}static/img/copy.png" onclick="copyById('code')">
                                    </div>
                                    <div data-v-184f5bd0="" data-v-6e2d35de="" class="copy" style="color:white;">
                                        @lang('Invitation Code'):&nbsp;
                                        <span data-v-184f5bd0="" data-v-6e2d35de="" id="code"
                                            style="color:white;">P5B6W6</span><img data-v-184f5bd0=""
                                            data-v-6e2d35de="" src="{{ asset('') }}static/img/copy.png"
                                            onclick="copyById('code')">
                                    </div>
                                </div>


                                <div id="copyToast"
                                    style="position: fixed; left: 50%; transform: translateX(-50%);margin-bottom:50px; background: black; color: white;
            padding: 10px 20px; border-radius: 5px;
            visibility: hidden; opacity: 0; transition: all 0.3s ease;">
                                </div>

                            </div>



                            <div data-v-184f5bd0="" data-v-6e2d35de="" class="level-com">
                                <div data-v-184f5bd0="" data-v-6e2d35de="" class="flex">
                                    <div data-v-184f5bd0="" data-v-6e2d35de="" class="ico">

                                        <img data-v-184f5bd0="" data-v-6e2d35de=""
                                            src="{{ asset('static/img/' . (Auth::user()->rank > 0 ? 'rank' . Auth::user()->rank : 'V0_icon.69de7dcc') . '.png') }}">
                                    </div>
                                    <div data-v-184f5bd0="" data-v-6e2d35de="" class="flex1" style="color:white;">
                                        <span data-v-184f5bd0="" data-v-6e2d35de=""
                                            style="color:white;">@lang('My level')</span>
                                        VIP {{ Auth::user()->rank }}
                                    </div>
                                    <div data-v-0e8d00e8="" data-v-887483d6="" class="str" style="color:black;">
                                        <a href="{{ route('user.share') }}"> Upgrade</a></div>


                                    <!-- <div data-v-184f5bd0="" data-v-6e2d35de="" class="str"> <a href="{{ route('user.vip') }}">@lang('Upgrade')</div> -->
                                </div>
                            </div>
                            <a href="{{ route('user.share') }}">

                                <div data-v-184f5bd0="" data-v-6e2d35de="" class="invate-com">
                                    <div data-v-0e8d00e8="" data-v-887483d6="" class="com1"> Invite friends </div>
                                    <div data-v-0e8d00e8="" data-v-887483d6="" class="com2"> Invite friends and
                                        earn
                                        coins together </div>
                                    <div data-v-0e8d00e8="" data-v-887483d6="" class="com3"> Go to invite
                                        <img data-v-0e8d00e8="" data-v-887483d6=""
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAHlBMVEUAAAA0v5MzwJM4v5czwJMywJIzwJMyv5IywJIywJI0qxk+AAAACXRSTlMAIM8Qr9+/MK9o/IQhAAAAdUlEQVQoz63QMQqEQBBE0ZFdjDU0NhAz9QSmHshDGCoozG2FrpIPxlYy8HlM0OmrFbX3hC17s0F+tlssr+A/1gjs17/ClE8FQBcBcIwRAG0RATAoAJICwAGgAHAAKAAcAAoAB0Bs0cXKAEH0NALsfwmwKn28G90HOf4DSvFJAAAAAElFTkSuQmCC"
                                            alt="">
                                    </div>

                                </div>
                        </div>
                        </a>
                        <div data-v-184f5bd0="" data-v-6e2d35de="" class="container">
                            <ul data-v-184f5bd0="" data-v-6e2d35de="" class="nav1">

                                <a href="{{ route('user.roi-bonus') }}">
                                    <li data-v-184f5bd0="" data-v-6e2d35de="">
                                        <div data-v-184f5bd0="" data-v-6e2d35de="" class="ico"><img
                                                data-v-184f5bd0="" data-v-6e2d35de=""
                                                src="{{ asset('') }}static/img/13.png" alt=""></div>
                                        <div data-v-184f5bd0="" data-v-6e2d35de="" class="n"
                                            style="color:white;">@lang('My income')</div>
                                    </li>

                                </a>

                                <li data-v-184f5bd0="" data-v-6e2d35de="">
                                    <a href="{{ route('user.about') }}">
                                        <div data-v-184f5bd0="" data-v-6e2d35de="" class="ico"><img
                                                data-v-184f5bd0="" data-v-6e2d35de=""
                                                src="{{ asset('') }}static/img/8.png" alt=""></div>
                                        <div data-v-184f5bd0="" data-v-6e2d35de="" class="n"
                                            style="color:white;">
                                            @lang('About Us')</div>
                                    </a>
                                </li>

                                <a href="{{ route('user.terms') }}">
                                    <li data-v-184f5bd0="" data-v-6e2d35de="">
                                        <div data-v-184f5bd0="" data-v-6e2d35de="" class="ico"><img
                                                data-v-184f5bd0="" data-v-6e2d35de=""
                                                src="{{ asset('') }}static/img/34.png" alt=""></div>
                                        <div data-v-184f5bd0="" data-v-6e2d35de="" class="n">@lang('Terms of Use')
                                </a>
                        </div>
                        </li>
                        </a> <a href="{{ route('user.reward-bonus') }}">
                            <li data-v-184f5bd0="" data-v-6e2d35de="">
                                <div data-v-184f5bd0="" data-v-6e2d35de="" class="ico"><img data-v-184f5bd0=""
                                        data-v-6e2d35de="" src="{{ asset('') }}static/img/34.png"
                                        alt="">

                                </div>
                                <div data-v-184f5bd0="" data-v-6e2d35de="" class="n" style="color:white;">

                                    @lang('Record')</div>
                            </li>
                        </a>
                        </ul>
                        <div data-v-184f5bd0="" data-v-6e2d35de="" class="line">
                            <ul data-v-184f5bd0="" data-v-6e2d35de="" class="ul1">


                                @if (empty(Auth::user()->email))
                                    <li data-v-184f5bd0="" data-v-6e2d35de="">

                                        <div data-v-184f5bd0="" data-v-6e2d35de="" class="ico"><img
                                                data-v-184f5bd0="" data-v-6e2d35de=""
                                                src="{{ asset('') }}static/img/122.png" alt=""></div>
                                        <a href="{{ route('user.bindMail') }}">
                                            <div data-v-184f5bd0="" data-v-6e2d35de="" class="flex1">@lang
                                                @lang('Bind Email')
                                        </a>

                        </div>


                        <div data-v-184f5bd0="" data-v-6e2d35de="" class="arr"><img data-v-184f5bd0=""
                                data-v-6e2d35de="" src="{{ asset('') }}static/img/114.png" alt="">
                        </div>


                        </li>
                    @else
                        <li data-v-184f5bd0="" data-v-6e2d35de="">

                            <div data-v-184f5bd0="" data-v-6e2d35de="" class="ico"><img data-v-184f5bd0=""
                                    data-v-6e2d35de="" src="{{ asset('') }}static/img/122.png" alt="">
                            </div>
                            <a href="{{ route('user.ChangeMail') }}">
                                <div data-v-184f5bd0="" data-v-6e2d35de="" class="flex1">@lang
                                    @lang('Change Email')
                            </a>


                    </div>


                    <div data-v-184f5bd0="" data-v-6e2d35de="" class="arr"><img data-v-184f5bd0=""
                            data-v-6e2d35de="" src="{{ asset('') }}static/img/114.png" alt="">
                    </div>

                    </li>
                    @endif

                    <li data-v-184f5bd0="" data-v-6e2d35de="">
                        <div data-v-184f5bd0="" data-v-6e2d35de="" class="ico"><img data-v-184f5bd0=""
                                data-v-6e2d35de="" src="{{ asset('') }}static/img/51.png" alt=""></div>

                        <div data-v-184f5bd0="" data-v-6e2d35de="" class="flex1"> <a
                                href="{{ route('user.ChangePass') }}">
                                @lang('Login Password')</a></div>
                        <div data-v-184f5bd0="" data-v-6e2d35de="" class="arr"><img data-v-184f5bd0=""
                                data-v-6e2d35de="" src="{{ asset('') }}static/img/114.png" alt=""></div>
                    </li>
                    <!-- <li data-v-184f5bd0="" data-v-6e2d35de="">
                                    <div data-v-184f5bd0="" data-v-6e2d35de="" class="ico"><img
                                            data-v-184f5bd0="" data-v-6e2d35de=""
                                            src="{{ asset('') }}static/img/41.png" alt=""></div>

                                    <div data-v-184f5bd0="" data-v-6e2d35de="" class="flex1"> <a
                                            href="{{ route('user.change-trx-password') }}"> @lang('Transaction Password') </a>
                                        </a>

                                    </div>
                                    <div data-v-184f5bd0="" data-v-6e2d35de="" class="arr"><img
                                            data-v-184f5bd0="" data-v-6e2d35de=""
                                            src="{{ asset('') }}static/img/114.png" alt="">
                                    </div>
                                </li> -->
                    </ul>
                    <ul data-v-184f5bd0="" data-v-6e2d35de="" class="ul1">
                        <li data-v-184f5bd0="" data-v-6e2d35de="">
                            <div data-v-184f5bd0="" data-v-6e2d35de="" class="ico"><img data-v-184f5bd0=""
                                    data-v-6e2d35de="" src="{{ asset('') }}static/img/31.png" alt="">
                            </div>
                            <div data-v-184f5bd0="" data-v-6e2d35de="" class="flex1"><a
                                    href="{{ route('user.GenerateTicket') }}">@lang('Feedback')</a>
                            </div>
                            <div data-v-184f5bd0="" data-v-6e2d35de="" class="arr"><img data-v-184f5bd0=""
                                    data-v-6e2d35de="" src="{{ asset('') }}static/img/114.png" alt="">
                            </div>
                        </li>
                        <li data-v-184f5bd0="" data-v-6e2d35de="">
                            <div data-v-184f5bd0="" data-v-6e2d35de="" class="ico"><img data-v-184f5bd0=""
                                    data-v-6e2d35de="" src="{{ asset('') }}static/img/7.png" alt="">
                            </div>
                            <div data-v-184f5bd0="" data-v-6e2d35de="" class="flex1">@lang('Help Center')
                            </div>
                            <div data-v-184f5bd0="" data-v-6e2d35de="" class="arr"><img data-v-184f5bd0=""
                                    data-v-6e2d35de="" src="{{ asset('') }}static/img/114.png" alt="">
                            </div>
                        </li>

                        <li data-v-184f5bd0="" data-v-6e2d35de="">
                            <div data-v-184f5bd0="" data-v-6e2d35de="" class="ico"><img data-v-184f5bd0=""
                                    data-v-6e2d35de="" src="{{ asset('') }}static/img/21.png" alt="">
                            </div>
                            <div data-v-184f5bd0="" data-v-6e2d35de="" class="flex1"> <a
                                    href="{{ route('user.about') }}">@lang('About')</a></div>
                            <div data-v-184f5bd0="" data-v-6e2d35de="" class="arr"><img data-v-184f5bd0=""
                                    data-v-6e2d35de="" src="{{ asset('') }}static/img/114.png" alt="">
                            </div>
                        </li>


                    </ul>
                </div>
                <div data-v-184f5bd0="" data-v-6e2d35de="" class="btn_list">
                    <div data-v-184f5bd0="" data-v-6e2d35de="" class="go"><button data-v-184f5bd0=""
                            data-v-6e2d35de=""
                            style="  color:black;  background: linear-gradient(90deg, var(--token-c56d9be0-ff1a-4142-9896-10e19a52f142, rgb(255, 91, 255)) 0%, var(--token-66f80229-774a-4cca-92cb-b110eff3766a, rgb(4, 182, 216)) 48.91786%, var(--token-f05fe42a-0284-4847-be0d-a2808346fd91, rgb(11, 229, 116)) 100%);"
                            href="{{ route('logout') }}"
                            onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">@lang('Sign Out')</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>


    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
        @csrf
    </form>


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
            toast.style.visibility = "visible";
            toast.style.opacity = "1";
            toast.style.bottom = "50px";

            setTimeout(() => {
                toast.style.visibility = "hidden";
                toast.style.opacity = "0";
                toast.style.bottom = "30px";
            }, 2000);
        }
    </script>
