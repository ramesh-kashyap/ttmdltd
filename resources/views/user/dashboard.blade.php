<html class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title> Dashboard | {{ siteName() }}

    </title>
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
    <link rel="icon" href="{{ asset('static/img/logo2.png') }}">

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
        .brand-logos {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 90px;
            margin-bottom: 10px;
            flex-wrap: wrap;
        }

        .brand-logos img {
            object-fit: contain;
            height: auto;
            max-height: 60px;
            transition: transform 0.3s ease;
        }

        / Responsive for small screens / <blade media|%20(max-width%3A%20768px)%20%7B>.brand-logos {
            gap: 40px;
            margin-top: 40px;
        }

        .brand-logos img {
            max-height: 40px;
            gap: 80px;

        }
        }

        <blade media|%20(max-width%3A%20480px)%20%7B>.brand-logos {
            gap: 40px;
        }

        .brand-logos img {
            max-height: 30px;
        }
        }
    </style>
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
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-bcc45786.50818f65.css">
    <script charset="utf-8" src="/js1743475952730/chunk-bcc45786.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-5576a184.9f52f39a.css">
    <script charset="utf-8" src="/js1743475952730/chunk-5576a184.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-60c8a75a.d6f6b692.css">
    <script charset="utf-8" src="/js1743475952730/chunk-60c8a75a.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-a7d8f170.c87a4291.css">
    <script charset="utf-8" src="/js1743475952730/chunk-a7d8f170.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-00b1464f.674dbd13.css">
    <script charset="utf-8" src="/js1743475952730/chunk-00b1464f.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-6f896b4e.5bb66763.css">
    <script charset="utf-8" src="/js1743475952730/chunk-6f896b4e.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-67912ed2.ae8d438d.css">
    <script charset="utf-8" src="/js1743475952730/chunk-67912ed2.fe8857a9.1743475952730.js?v=1743475952730"></script>
</head>

<!--
<img data-v-b73557e2="" src="{{ asset('') }}static/img/logo2.png"
style="width: 80px; height: 37px;" alt="">  -->


<style>
    ul li[data-v-2b218ac2] {
        background: linear-gradient(180deg, #111116, #141519) !important;

    }

    ul li .title[data-v-2b218ac2] {

        color: #ffffff !important;

    }

    ul li .val[data-v-2b218ac2] {

        color: #fff !important;
    }

    .info[data-v-d59d9098] {
        background: url(../../static/img/pic-quant.28d6d208.png) no-repeat;
        background-size: 100% 100%;
        padding: .32rem 2.6rem .32rem .32rem;
        line-height: 100%;
        margin: .32rem 0;
        box-shadow: 0 4px 12px rgb(116 116 116 / 30%);
        border-radius: 10px;
    }

    .info h3[data-v-d59d9098] {
        color: #ffffff;
        font-size: .32rem;
        font-weight: 600;
        line-height: .44rem;
    }

    .com-title .left[data-v-6b16f068] {
        color: #ffffff;
        font-size: .32rem;
        font-weight: 600;
    }

    .quotes table[data-v-fa2b04fa] {
        width: 100%;
        margin: .2rem 0;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .quotes table tr[data-v-fa2b04fa] {
        margin-bottom: .34rem;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .quotes table th[data-v-fa2b04fa] {
        font-size: .22rem;
        font-weight: 400;
        color: #909c96;
    }

    .quotes table td[data-v-fa2b04fa],
    .quotes table th[data-v-fa2b04fa] {
        padding: .14rem .1rem;
    }

    caption,
    th {
        text-align: left;
    }

    .quotes table th[data-v-fa2b04fa] {
        font-size: .22rem;
        font-weight: 400;
        color: #909c96;
    }

    .quotes table tr[data-v-fa2b04fa] {
        margin-bottom: .34rem;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .quotes table td[data-v-fa2b04fa] {
        font-weight: 500;
        color: #fff;
    }

    .banner[data-v-cd710fca] {
        position: relative;
        height: fit-content;
    }

    .partners-section {
        padding: 30px 11px;
        text-align: center;
    }

    .partners-title {
        font-size: 24px;
        font-weight: bold;
        position: relative;
        display: inline-block;
        margin-bottom: 30px;
    }

    .partners-title::after {
        content: '';
        display: block;
        width: 40%;
        height: 2px;
        background: #00ffaa;
        margin: 6px auto 0 auto;
    }

    .partners-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(92px, 1fr));
        gap: 30px;
        max-width: 900px;
        margin: auto;
        align-items: center;
        justify-items: center;
    }

    .partner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        opacity: 0.85;
        transition: opacity 0.3s ease;
    }

    .partner:hover {
        opacity: 1;
    }

    .partner img {
        max-width: 102px;
        max-height: 60px;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }

    .info p[data-v-d59d9098] {
        margin: .16rem 14px .4rem 0px;
        color: #848489;
        font-size: .24rem;
    }
</style>
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-6e2d35de="" data-v-6b16f068="" class="page">
            <div data-v-6e2d35de="" class="headers">
                <div data-v-b73557e2="" data-v-6b16f068="" class="head" data-v-6e2d35de="">
                    <div data-v-b73557e2="" class="safe"></div>
                    <div data-v-b73557e2="" class="container flex">
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-b73557e2="" class="myName">
                            <a href="{{ route('user.dashboard') }}">

                                <img data-v-b73557e2="" src="{{ asset('') }}static/img/logo.png"
                                    style="width: 80px; height: 37px;" alt=""> </a>
                        </div>
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-b73557e2="" class="flex1">

                        </div>

                        <div data-v-b73557e2="" class="notice" style="margin-left: 0rem; margin-right: 0.32rem;">
                            <a href="{{ route('user.notice') }}">
                                <img data-v-b73557e2="" src="{{ asset('static/img//bell.png') }}" alt="">
                                @if ($notificationCount > 0)
                                    <span data-v-b73557e2=""> {{ $notificationCount ?? 0 }}</span>
                                @endif
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
                    <!---->
                    <div data-v-6b16f068="" data-v-6e2d35de="" class="home" style="">


                        <div data-v-6b16f068="" data-v-6e2d35de="" class="container">


                            <div data-v-cd710fca="" data-v-6b16f068="" class="banner" data-v-6e2d35de="">


                                <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <!-- Slide 1 -->
                                        <div class="swiper-slide">
                                            <div class="item">
                                                <img src="{{ asset('') }}static/img/12.png" alt="">
                                            </div>
                                        </div>
                                        <!-- Slide 2 -->
                                        <div class="swiper-slide">
                                            <div class="item">
                                                <img src="{{ asset('') }}static/img/12.png" alt="">
                                            </div>
                                        </div>
                                        <!-- Slide 3 -->
                                        <div class="swiper-slide">
                                            <div class="item">
                                                <img src="{{ asset('') }}static/img/12.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <span class="swiper-notification" aria-live="assertive"
                                        aria-atomic="true"></span>
                                </div>







                            </div>
                            <ul data-v-2b218ac2="" data-v-6b16f068="" class="flex list" data-v-6e2d35de="">


                                <li data-v-2b218ac2="">
                                    <a href="{{ route('user.asset') }}">
                                        <div data-v-2b218ac2="" class="title" style="">@lang('Total Assets')
                                            <img data-v-2b218ac2="" src="{{ asset('') }}static/img/10.png"
                                                style="filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(245deg) brightness(104%) contrast(104%)"
                                                alt="">
                                        </div>
                                        <div data-v-2b218ac2="" class="val" style="">

                                            ${{ number_format(Auth::user()->available_balance(), 2) }}</div>
                                    </a>
                                </li>

                                <li data-v-2b218ac2="">
                                    <a href="{{ route('user.vip') }}">
                                        <div data-v-2b218ac2="" class="title" style="">@lang('Level')
                                            <img data-v-2b218ac2="" src="{{ asset('') }}static/img/10.png"
                                                style="filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(245deg) brightness(104%) contrast(104%)"
                                                alt="">
                                        </div>


                                        <div data-v-2b218ac2="" class="val" style=""><img
                                                style="width: 23px;height: 22px;"
                                                src="{{ asset('static/img/' . (Auth::user()->rank > 0 ? 'rank' . Auth::user()->rank : 'V0_icon.69de7dcc') . '.png') }}"
                                                alt="User Rank Icon"> VIP {{ Auth::user()->rank }}</div>
                                    </a>
                                </li>

                            </ul>
                            <div data-v-6b16f068="" data-v-6e2d35de="" class="notice_bar">
                                <div data-v-6b16f068="" role="alert" class="van-notice-bar" data-v-6e2d35de=""
                                    style="color: rgb(255, 255, 255); background: none;">
                                    <i class="van-icon van-notice-bar__left-icon"><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOHSURBVHgB7ZdBaxNBFMffJCtUUEg/gdOD0B5sNp+gKfgB1LskgVq82X6CpJ+g9SBCLaTePGlFPXgygicFTYulFaTZgqV4sq0VY5tkfG8zm7zZbNPsshaE/uEls9mZeb+ZeTPzAnCu/0wCzkBKqdTY5yUbCxKEcDav3anAWQGRc/yytaVrR/t26ds7+/2vXe7WgQvJyc2xggNxAikacdvxBJpXlt77g+YR3Pr6FHaODgNaB0NZMJjjFHOYhu4MpPq1e/D94wkwbq8SjhtlLEwamNAf4h5aVlsoEcj1L0+4oz38LCjVmsc4kuzFJI+pBATDEEgNrRQCBh1CFe0+2uzd7dcVs1OY2xifWoGEKPh+L/JHEQBT1CCnOa+gbWuIisDdwyuMri3igIRsd4o7Kz010n336A2wgdYvW8POSIH6NGMIYfIBMFRxBW0VzdHO96CPrq4v2tDUMCThwnNPj/HHrPd08aCRx68FA0jvmKKvb2wIM6cB+GU1RFbxuRcE0NVQ88JKPekGdNu3EGmvzGMoC2zLopYRJB8WRhNI/lS/ZFX5czVDy6OcTm2l7CCgnNkpzEFEKaE6I6bd5cWHUQcS1W59kQoCslm5J0gjS7lx1yOclX1WSUIAED/kHIhJKuSScyDecBjikwxTmQPxwJvQJ3UkKRhgVgRc6Ra7k8GB3rIywRQhovzxIWvlnsEJFsg8zjgQHUx8ZDP61A4PZM42DB02+IYB+1M5pdhWR6LtHiB93vi3egkb1tAILjvoMqqECQQt8z6sWyYgeq94JePqQKgFTc7PJIk233Gm3AONjJaYHDvYzpyRhlX9k2zsKW/nCjdfYsQiR+vkKdFSlQ4DBAidliBcDHk3PZl7542tLeWx9+7AdJoxuvEQ8yCrxuCMi7dfPnQDv55BRFHKmtt6xX4RTjLZutloibJQ/BBWhc3x6eVBgCS0cyJPNHpaJi9jPDWeCMjMpf1OzNnpC6ShCEjqR1qWEe+y1bEmwcypJW9PWWNu6yXsHAenscmmyqxnpqthgEpgxtICAs32qc//cbiQCGX7oeggVKBm+VKxd32ByAHNEl+eEkKFygQ+/NzN3q69kLifJvDQXP3dspadTCFCWtOGojPIr7KOsdg10P+yE44BL7V9DuYJz1WNluANCKXC64d5RcQPlddXSRiV4V+KYickWD5M/3H8t/csSHTPVeBcMeov73EzyLp14JsAAAAASUVORK5CYII="
                                            class="van-icon__image">
                                        <!----></i>
                                    <marquee behavior="scroll" direction="left" scrollamount="4">
                                        We’re thrilled to have you on board as part of this exciting journey. TTMD isn’t
                                        just a project — it’s a vision driven by innovation, collaboration, and purpose.
                                    </marquee>

                                </div>
                            </div>

                            <a href="{{ route('user.tasks') }}">
                                <div data-v-d59d9098="" data-v-6b16f068="" class="info" data-v-6e2d35de="">
                                    <h3 data-v-d59d9098="">@lang(' Campaigns Order
                                                                                                                                                                                                        ')</h3>
                                    <p data-v-d59d9098="">@lang('Invite your friends to join TTMD and start building your dream team today. The more your team grows, the more rewards and benefits you unlock.')</p>

                                </div>
                            </a>
                            <div data-v-6b16f068="" data-v-6e2d35de="" class="itemBox">
                                <div data-v-6b16f068="" data-v-6e2d35de="" class="com-title flex">
                                    <div data-v-6b16f068="" data-v-6e2d35de="" class="left">@lang('Partners')</div>
                                </div>
                                <section class="partners-section">

                                    <div class="partners-grid">
                                        <div class="partner"><img src="{{ asset('') }}static/img/fb.png"
                                                alt="FB"></div>
                                        <div class="partner"><img src="{{ asset('') }}static/img/insta.png"
                                                alt="Insta Face"></div>
                                        <div class="partner"><img src="{{ asset('') }}static/img/youtube.png"
                                                alt="Youtube"></div>
                                        <div class="partner"><img src="{{ asset('') }}static/img/meta.png"
                                                alt="Meta"></div>
                                        <div class="partner"><img src="{{ asset('') }}static/img/OpenAI-Logo.png"
                                                alt="OpenAi"></div>
                                        <div class="partner"><img src="{{ asset('') }}static/img/google.png"
                                                alt="google"></div>



                                    </div>
                                </section>



                            </div>



                            <style>
                                .logo-wrapper {
                                    display: flex;
                                    justify-content: center;
                                    margin-bottom: 20px;
                                }

                                .logo-row {
                                    display: flex;
                                    align-items: center;
                                    gap: 40px;
                                }

                                .logo-row img {
                                    width: 80px;
                                    height: 80px;
                                    object-fit: contain;
                                }
                            </style>

                            {{-- <div class="logo-wrapper">
                                <div class="logo-row">
                                    <img src="{{ asset('') }}static/img/a2.png" alt="Logo A2">
                                    <img src="{{ asset('') }}static/img/a2.png" alt="Logo F5">
                                    <img src="{{ asset('') }}static/img/a2.png" alt="Logo F5 Duplicate">
                                </div>
                            </div>
                            --}}




                            <div data-v-4e3fe4c4="" data-v-6b16f068="" class="teaminfo">
                                <div data-v-4e3fe4c4="" class="cname" style=""> @lang('Community
                                                                                                                                                                                                    Information') </div>
                                <ul data-v-4e3fe4c4="" class="flex">
                                    <li data-v-4e3fe4c4="">
                                        <div data-v-4e3fe4c4="" class="val" style="">
                                            {{ $active_gen_team1total }}/{{ $gen_team1total }}</div>
                                        <div data-v-4e3fe4c4="" class="title" style="">@lang('M1')
                                        </div>
                                    </li>
                                    <li data-v-4e3fe4c4="">
                                        <div data-v-4e3fe4c4="" class="val" style="">
                                            {{ $active_gen_team2total }}/{{ $gen_team2total }}</div>
                                        <div data-v-4e3fe4c4="" class="title" style="">@lang('M2')
                                        </div>
                                    </li>
                                    <li data-v-4e3fe4c4="">
                                        <div data-v-4e3fe4c4="" class="val" style="">
                                            {{ $active_gen_team3total }}/{{ $gen_team3total }}</div>
                                        <div data-v-4e3fe4c4="" class="title" style="">@lang('M3')
                                        </div>
                                    </li>
                                </ul>
                            </div>


                        </div>


                        <div data-v-d496beb0="" data-v-6b16f068="" data-v-6e2d35de=""></div>
                    </div>
                </div>
            </div>
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

            <!-- Swiper Init Script -->
            <script>
                var swiper = new Swiper('.swiper-container', {
                    loop: true,
                    autoplay: {
                        delay: 1000, // 10 seconds
                        disableOnInteraction: false,
                    },
                    speed: 800,
                    slidesPerView: 1,
                });
            </script>

            <!-- Optional CSS to Style Swiper -->
            <style>
                .swiper-container {
                    width: 100%;
                    margin-bottom: 20px;
                }

                .swiper-slide .item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .swiper-slide .item img {
                    max-width: 100%;
                    height: auto;
                    object-fit: contain;
                }
            </style>
