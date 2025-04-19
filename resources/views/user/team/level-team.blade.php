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
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-353b28dc.5ad553f6.css">
    <script charset="utf-8" src="/js1743475952730/chunk-353b28dc.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-5576a184.9f52f39a.css">
    <script charset="utf-8" src="/js1743475952730/chunk-5576a184.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-60c8a75a.d6f6b692.css">
    <script charset="utf-8" src="/js1743475952730/chunk-60c8a75a.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-a7d8f170.c87a4291.css">
    <script charset="utf-8" src="/js1743475952730/chunk-a7d8f170.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-00b1464f.674dbd13.css">
    <script charset="utf-8" src="/js1743475952730/chunk-00b1464f.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-67912ed2.ae8d438d.css">
    <script charset="utf-8" src="/js1743475952730/chunk-67912ed2.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script charset="utf-8" src="/js1743475952730/echarts.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script charset="utf-8" src="/js1743475952730/chunk-0119f9da.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-bb17762c.89cc2aa3.css">
    <script charset="utf-8" src="/js1743475952730/chunk-bb17762c.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="icon" href="{{ asset('static/img/logo2.png') }}">

</head>

<style>
    .info[data-v-5105ae1a] {
        background-size: 100% 100%;
        flex-wrap: wrap;
        padding: 0 .32rem;
        margin: .32rem 0;
        background: linear-gradient(180deg, #111116, #141519);
        border: .02rem solid hsla(0, 0%, 100%, .1);
        border-radius: 10px;
    }
</style>

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-127dfd5e="" class="home">
            <div data-v-6e2d35de="" data-v-127dfd5e="" class="page">
                <div data-v-6e2d35de="" class="headers">
                    <div data-v-b73557e2="" data-v-127dfd5e="" class="head" data-v-6e2d35de="">
                        <div data-v-b73557e2="" class="safe"></div>
                        <div data-v-b73557e2="" class="container flex"><!----><!----><!---->
                            <div data-v-b73557e2="" class="myName"><img data-v-b73557e2=""
                                    src="{{ asset('') }}static/img/logo.png" style=" width: 80px; height: 37px;"
                                    alt=""></div><!----><!----><!----><!---->
                            <div data-v-b73557e2="" class="flex1"></div>

                            <div data-v-b73557e2="" class="notice" style="margin-left: 0rem; margin-right: 0.32rem;">
                                <a href="{{ route('user.notice') }}">
                                    <img data-v-b73557e2="" src="{{ asset('static/img//bell.png') }}"
                                        alt="">
                                    <span data-v-b73557e2=""> 1 </span>
                            </div>
                            </a>
                            <div data-v-b73557e2="" class="lang">
                                <a href="{{ route('user.lang') }}"> <img data-v-b73557e2=""
                                        src="{{ asset('static/img//globe.png') }}" alt="">
                            </div>
                            </a>
                            <div data-v-b73557e2="" class="notice">
                                <img data-v-b73557e2="" src="{{ asset('static/img//headphone.png') }}"
                                    alt="">
                            </div><!---->
                            <div data-v-b73557e2="" class="head_right"></div>
                        </div>
                        <div data-v-b73557e2=""><!----></div>
                    </div>
                </div>
                <div data-v-6e2d35de="" id="scroll" class="content-container" style="
">
                    <div data-v-6e2d35de="" id="content" class="content-scroll">
                        <div data-v-127dfd5e="" data-v-6e2d35de="" class="container rel">
                            <div data-v-5105ae1a="" data-v-127dfd5e="" class="info" data-v-6e2d35de=""
                                style="

                            ">
                                <ul data-v-5105ae1a="" class="flex">
                                    <li data-v-5105ae1a="">
                                        <div data-v-5105ae1a="" class="title">@lang('New Earnings')</div>
                                        <div data-v-5105ae1a="" class="val">{{ number_format($todaysIncome, 2) }}
                                        </div>
                                    </li>
                                    <li data-v-5105ae1a="">
                                        <div data-v-5105ae1a="" class="title">@lang('New Members')</div>
                                        <div data-v-5105ae1a="" class="val">{{ $todaysuser }}</div>
                                    </li>
                                    <li data-v-5105ae1a="">
                                        <div data-v-5105ae1a="" class="title">@lang('Total Recharge')</div>
                                        <div data-v-5105ae1a="" class="val">{{ number_format($totalrecharge, 2) }}
                                        </div>
                                    </li>
                                    <li data-v-5105ae1a="">
                                        <div data-v-5105ae1a="" class="title">@lang('Total Withdrawals')</div>
                                        <div data-v-5105ae1a="" class="val">
                                            {{ number_format($totalwithdrawal, 2) }}</div>
                                    </li>
                                </ul><button data-v-5105ae1a="" class="btn2"
                                    style=" background: linear-gradient(90deg, var(--token-c56d9be0-ff1a-4142-9896-10e19a52f142, rgb(255, 91, 255)) 0%, var(--token-66f80229-774a-4cca-92cb-b110eff3766a, rgb(4, 182, 216)) 48.91786%, var(--token-f05fe42a-0284-4847-be0d-a2808346fd91, rgb(11, 229, 116)) 100%);"> <a
                                        href="{{ route('user.roi-bonus') }}" style="color:black;">
                                        @lang('Revenue Record')</a></button>
                            </div>
                            <div data-v-127dfd5e="" data-v-6e2d35de="" class="itemBox">
                                <div data-v-127dfd5e="" data-v-6e2d35de="" class="com-title flex" style="      
">
                                    <div data-v-127dfd5e="" data-v-6e2d35de="" class="h3">@lang('My community')</div>
                                    <div data-v-127dfd5e="" data-v-6e2d35de="" class="str"
                                        style=" background: linear-gradient(90deg, var(--token-c56d9be0-ff1a-4142-9896-10e19a52f142, rgb(255, 91, 255)) 0%, var(--token-66f80229-774a-4cca-92cb-b110eff3766a, rgb(4, 182, 216)) 48.91786%, var(--token-f05fe42a-0284-4847-be0d-a2808346fd91, rgb(11, 229, 116)) 100%);"><a
                                            href="{{ route('user.referral-team') }}"
                                            style="color:black;">@lang('Community List') </a></div>
                                </div>
                                <div data-v-127dfd5e="" data-v-6e2d35de="" class="box">
                                    <div data-v-b96ab108="" data-v-127dfd5e="" data-v-6e2d35de="">
                                        <ul data-v-b96ab108="" class="info">
                                            <li data-v-b96ab108="">
                                                <div data-v-b96ab108="" class="title"><img data-v-b96ab108=""
                                                        src="{{ asset('') }}static/img/raj13.png"
                                                        alt="">@lang('Number of people in the community') </div>
                                                <div data-v-b96ab108="" class="val">
                                                    {{ $active_gen_team1total }}/{{ $gen_team1total }}</div>
                                                <div data-v-b96ab108="" class="add"> @lang('Today\'s new')

                                                    <span data-v-b96ab108="">+0</span>

                                                </div>

                                            </li>



                                            <li data-v-b96ab108="">
                                                <div data-v-b96ab108="" class="title"><img data-v-b96ab108=""
                                                        src="{{ asset('') }}static/img/1111.png"
                                                        alt="">Today's earnings </div>
                                                <div data-v-b96ab108="" class="val">
                                                    {{ number_format($gen_teamIncome, 2) }}</div>
                                                <div data-v-b96ab108="" class="add">

                                                    @lang('Today\'s new') <span data-v-b96ab108="">+0</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div data-v-602cab3f="" data-v-127dfd5e="" class="chart_box" data-v-6e2d35de="">


                                    </div>
                                    <a href="{{ route('user.share') }}">
                                        <div data-v-361779d3="" data-v-127dfd5e="" data-v-6e2d35de="">
                                            <div data-v-361779d3="" class="invate-com">
                                                <div data-v-361779d3="" class="com1" style="color:white;">
                                                    @lang('Invite friends') </div>
                                                <div data-v-361779d3="" class="com2" style="color:white;">
                                                    @lang('Invite friends and earn coins together')
                                                </div>
                                                <div data-v-361779d3="" class="com3" style="color:white;">
                                                    @lang('Go to invite') <a href="{{ route('user.share') }}"><img
                                                            data-v-361779d3=""
                                                            src="{{ asset('') }}static/img/ero.png
                                                    "
                                                            alt=""></a></div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            </a>
                            <div data-v-127dfd5e="" data-v-6e2d35de="" class="itemBox">
                                <div data-v-42e6b7af="" data-v-127dfd5e="" data-v-6e2d35de="">

                                    <div data-v-42e6b7af="" class="info">
                                        <ul data-v-42e6b7af="">
                                            <li data-v-42e6b7af="">
                                                <div data-v-42e6b7af="" class="title"> @lang('Gen') </div>
                                                <div data-v-42e6b7af="" class="val">1</div>
                                            </li>
                                            <li data-v-42e6b7af="">
                                                <div data-v-42e6b7af="" class="title">@lang('ValidMembers')</div>
                                                <div data-v-42e6b7af="" class="val">
                                                    {{ $active_gen_team1total }}/{{ $gen_team1total }}</div>
                                            </li>
                                            <li data-v-42e6b7af="">
                                                <div data-v-42e6b7af="" class="title">@lang('Commission')</div>
                                                <div data-v-42e6b7af="" class="val">3%</div>
                                            </li>
                                            <li data-v-42e6b7af="">
                                                <div data-v-42e6b7af="" class="title">@lang('Total Earnings')</div>
                                                <div data-v-42e6b7af="" class="val">
                                                    {{ number_format($gen_teamIncome, 2) }}</div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div data-v-127dfd5e="" data-v-6e2d35de="" class="itemBox">
                                <div data-v-42e6b7af="" data-v-127dfd5e="" data-v-6e2d35de="">

                                    <div data-v-42e6b7af="" class="info">
                                        <ul data-v-42e6b7af="">
                                            <li data-v-42e6b7af="">
                                                <div data-v-42e6b7af="" class="title">@lang(' Gen') </div>
                                                <div data-v-42e6b7af="" class="val">2</div>
                                            </li>
                                            <li data-v-42e6b7af="">
                                                <div data-v-42e6b7af="" class="title">@lang('ValidMembers')</div>
                                                <div data-v-42e6b7af="" class="val">
                                                    {{ $active_gen_team2total }}/{{ $gen_team2total }}</div>
                                            </li>
                                            <li data-v-42e6b7af="">
                                                <div data-v-42e6b7af="" class="title">@lang('Commission')</div>
                                                <div data-v-42e6b7af="" class="val">2%</div>
                                            </li>
                                            <li data-v-42e6b7af="">
                                                <div data-v-42e6b7af="" class="title">@lang(' Total Earnings')</div>
                                                <div data-v-42e6b7af="" class="val">
                                                    {{ number_format($gen_team2Income, 2) }}</div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div data-v-127dfd5e="" data-v-6e2d35de="" class="itemBox">
                                <div data-v-42e6b7af="" data-v-127dfd5e="" data-v-6e2d35de="">

                                    <div data-v-42e6b7af="" class="info">
                                        <ul data-v-42e6b7af="">
                                            <li data-v-42e6b7af="">
                                                <div data-v-42e6b7af="" class="title"> @lang('Gen') </div>
                                                <div data-v-42e6b7af="" class="val">3</div>
                                            </li>
                                            <li data-v-42e6b7af="">
                                                <div data-v-42e6b7af="" class="title">@lang('ValidMembers')</div>
                                                <div data-v-42e6b7af="" class="val">
                                                    {{ $active_gen_team1total }}/{{ $gen_team1total }}</div>
                                            </li>
                                            <li data-v-42e6b7af="">
                                                <div data-v-42e6b7af="" class="title">@lang('Commission')</div>
                                                <div data-v-42e6b7af="" class="val">1%</div>
                                            </li>
                                            <li data-v-42e6b7af="">
                                                <div data-v-42e6b7af="" class="title">@lang('Total Earnings')</div>
                                                <div data-v-42e6b7af="" class="val">
                                                    {{ number_format($gen_team3Income, 2) }}</div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div data-v-554f6835="" data-v-127dfd5e="" data-v-6e2d35de=""><!----></div>
                    </div>
                </div>
