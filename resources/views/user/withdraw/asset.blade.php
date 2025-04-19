<html class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>{{ siteName() }} </title>
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
    <link rel="icon"  href="{{ asset('static/img/logo2.png') }}">

</head>

<body class="mein_cn">

<style>
    .info-com[data-v-32fa28da] {
    background: linear-gradient(180deg, #111116, #141519);
    background-size: 100% 100%;
    margin: .32rem 0;
    padding: .32rem;
    border-radius: 15px;
    border: .02rem solid hsla(0, 0%, 100%, .1);
}
.list .item[data-v-56ab0919] {
    padding: 0.3rem 0;
}
</style>



    
    <div id="app" class="applang">
        <div data-v-6e2d35de="" data-v-32fa28da="" class="page">
            <div data-v-6e2d35de="" class="headers">
                <div data-v-b73557e2="" data-v-32fa28da="" class="head" data-v-6e2d35de="" >
                    <div data-v-b73557e2="" class="safe"></div>
                    <div data-v-b73557e2="" class="container flex"><!----><!----><!---->
                        <div data-v-b73557e2="" class="myName"><img data-v-b73557e2=""
                                src="{{ asset('') }}static/img/logo.png" style=" width: 80px; height: 37px;"
                                alt=""></div><!----><!----><!----><!---->
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
                        </div><!---->
                        <div data-v-b73557e2="" class="head_right"></div>
                    </div>
                    <div data-v-b73557e2=""><!----></div>
                </div>
            </div>
            <div data-v-6e2d35de="" id="scroll" class="content-container">
                <div data-v-6e2d35de="" id="content" class="content-scroll">
                    <div data-v-32fa28da="" data-v-6e2d35de="" class="container">
                        <div data-v-32fa28da="" data-v-6e2d35de="" class="info-com">
                            <div data-v-7e49fd41="" data-v-32fa28da="" data-v-6e2d35de="">
                                <div data-v-7e49fd41="" class="total flex">
                                    <div data-v-7e49fd41="" class="it">
                                        <div data-v-7e49fd41="" class="name"> @lang('Total Assets (USDT)') <img
                                                data-v-7e49fd41="" src="{{ asset('') }}static/img/eye.png"
                                                alt=""></div>
                                        <div data-v-7e49fd41="" class="val" style="white-space: nowrap;">
                                            ${{ number_format(Auth::user()->available_balance(), 2) }} </div>
                                    </div>
                                    <div data-v-7e49fd41="" class="it">
                                        <div data-v-7e49fd41="" class="name"> @lang('Current Package') </div>
                                        <div data-v-7e49fd41="" class="val" style="white-space: nowrap;"> ${{number_format(Auth::user()->package,2)}}
                                        </div>
                                    </div>
                                </div>
                                <ul data-v-7e49fd41="" class="flex">
                                    <li data-v-7e49fd41=""
                                        style=" color:black; background: linear-gradient(90deg, var(--token-c56d9be0-ff1a-4142-9896-10e19a52f142, rgb(62 179 209)) 0%, rgb(63 174 219) 48.91786%, var(--token-f05fe42a-0284-4847-be0d-a2808346fd91, rgb(11, 229, 116)) 100%)">
                                        <div data-v-7e49fd41="" class="title"><span data-v-7e49fd41=""
                                                style="color:black;">@lang('Flexible Funds')</span></div>
                                        <div data-v-7e49fd41="" class="val">
                                            {{ number_format(Auth::user()->available_balance(), 2) }} </div>
                                    </li>
                                    <li data-v-7e49fd41=""
                                        style=" color:black; background: linear-gradient(90deg, var(--token-c56d9be0-ff1a-4142-9896-10e19a52f142, rgb(62 179 209)) 0%, rgb(63 174 219) 48.91786%, var(--token-f05fe42a-0284-4847-be0d-a2808346fd91, rgb(11, 229, 116)) 100%)">
                                        <div data-v-7e49fd41="" class="title"><span data-v-7e49fd41=""
                                                style="color:black;">@lang('Total Withdraw')
                                            </span></div>
                                        <div data-v-7e49fd41="" class="val"> ${{number_format(Auth::user()->withdraw(),2)}} </div>
                                    </li>
                                </ul>
                            </div>
                            <ul data-v-17dc2e5d="" data-v-32fa28da="" class="tab flex" data-v-6e2d35de="">
                                <li data-v-17dc2e5d="">
                                    <a href="{{ route('user.invest') }}"><img data-v-17dc2e5d=""
                                            src="{{ asset('') }}static/img/deposit.png" alt=""></a>
                                    <a href="{{ route('user.invest') }}">
                                        <div data-v-17dc2e5d="" class="s0" style="color:#fff;">@lang('Deposit')
                                        </div>
                                    </a>
                                </li>
                                <li data-v-17dc2e5d="">
                                    <a href="{{ route('user.Withdraw') }}"> <img data-v-17dc2e5d=""
                                            src="{{ asset('') }}static/img/with.png" alt=""></a>
                                    <a href="{{ route('user.Withdraw') }}">
                                        <div data-v-17dc2e5d="" class="s1" style="color:#fff;">@lang('Withdraw')
                                        </div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                        {{-- <div data-v-32fa28da="" data-v-6e2d35de="" class="box-com">
                            <div data-v-396fd10e="" data-v-32fa28da="" class="box" data-v-6e2d35de="">
                                <div data-v-396fd10e="" class="cname"> @lang('My income')<a href="{{route('user.roi-bonus')}}"><img data-v-396fd10e=""
                                        src="{{ asset('') }}static/img/ero.png" alt=""></a></div>
                                <ul data-v-396fd10e="" class="flex">
                                    <li data-v-396fd10e="">
                                        <div data-v-396fd10e="" class="title">@lang('Total Income')</div>
                                        <div data-v-396fd10e="" class="val">{{ number_format($totalRoi, 2) }}</div>
                                    </li>
                                    <li data-v-396fd10e="">
                                        <div data-v-396fd10e="" class="title">@lang("Today's earnings")</div>
                                        <div data-v-396fd10e="" class="val">{{ number_format($todaysRoiSum, 2) }}
                                        </div>
                                    </li>
                                    <li data-v-396fd10e="">
                                        <div data-v-396fd10e="" class="title">@lang('Total team income')</div>
                                        <div data-v-396fd10e="" class="val">
                                            {{ number_format($totalLevelIncome, 2) }}</div>
                                    </li>
                                    <li data-v-396fd10e="">
                                        <div data-v-396fd10e="" class="title">@lang('Todays Quantifiable Amount')</div>
                                        <div data-v-396fd10e="" class="val">
                                            <?= Auth::user()->tradeAmt <= 0 && $todaysRoi < $quantifiable_count ? number_format($balance, 2) : number_format(Auth::user()->tradeAmt, 2) ?>
                                            / {{ number_format($balance, 2) }}</div>
                                    </li>
                                    <li data-v-396fd10e="">
                                        <div data-v-396fd10e="" class="title">@lang('Todays Quantifiable Count')</div>
                                        <div data-v-396fd10e="" class="val">
                                            {{ $todaysRoi }}/{{ $quantifiable_count }}</div>
                                    </li>
                                    <li data-v-396fd10e="">
                                        <div data-v-396fd10e="" class="title">@lang("Today's community income")</div>
                                        <div data-v-396fd10e="" class="val">
                                            {{ number_format($todaysLevelIncome, 2) }}</div>
                                    </li>
                                </ul>
                            </div>
                        </div> --}}
                        <div data-v-56ab0919="" data-v-32fa28da="" class="itemBox" data-v-6e2d35de="">
                            <div data-v-56ab0919="" class="cname">@lang('List of Assets')</div>
                            <div data-v-56ab0919="" class="list">
                                <div data-v-56ab0919="" class="item">
                                    <div data-v-56ab0919="" class="item-head flex">
                                        <div data-v-56ab0919="" class="ico"><img data-v-56ab0919=""
                                                src="{{ asset('') }}static/img/usdt.png" alt=""></div>
                                        <div data-v-56ab0919="" class="flex1">
                                            <div data-v-56ab0919=""> USDT</div>
                                            <p data-v-56ab0919=""></p>
                                        </div>
                                        <div data-v-56ab0919="" class="val">
                                            {{ number_format(Auth::user()->available_balance(), 2) }}</div>
                                        <div data-v-56ab0919="" class="arr"><img data-v-56ab0919=""
                                                src="{{ asset('') }}static/img/bb.png" alt=""
                                                class=""></div>
                                    </div>
                                    <div data-v-56ab0919="" class="com">
                                        <div data-v-56ab0919="">
                                            <ul data-v-56ab0919="" class="com-1">
                                                <li data-v-56ab0919="">
                                                    <div data-v-56ab0919="" class="title">@lang('Available')</div>
                                                    <div data-v-56ab0919="" class="val">2.43426034</div>
                                                </li>
                                                <li data-v-56ab0919="">
                                                    <div data-v-56ab0919="" class="title">@lang('Asset-Sperre')</div>
                                                    <div data-v-56ab0919="" class="val">0</div>
                                                </li>
                                                <li data-v-56ab0919="">
                                                    <div data-v-56ab0919="" class="title">@lang('To be released')</div>
                                                    <div data-v-56ab0919="" class="val">2.43426034</div>
                                                </li>
                                            </ul>
                                            <ul data-v-56ab0919="" class="com-2">
                                                <li data-v-56ab0919=""> @lang('Deposit')</li>
                                                <li data-v-56ab0919="">@lang('Withdraw')</li>
                                                <li data-v-56ab0919="">@lang('Bill')</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
