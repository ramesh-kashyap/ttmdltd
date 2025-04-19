<html class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>Strategy</title>
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
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-353b28dc.5ad553f6.css">
    <script charset="utf-8" src="/js1743475952730/chunk-353b28dc.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <script charset="utf-8" src="/js1743475952730/chunk-5b5516a4.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-bb17762c.89cc2aa3.css">
    <script charset="utf-8" src="/js1743475952730/chunk-bb17762c.fe8857a9.1743475952730.js?v=1743475952730"></script>
    <link rel="icon"  href="{{ asset('static/img/logo2.png') }}">

</head>
<style>
    .btn_box .btn[data-v-c95fb5c2] {
        height: .88rem;
        line-height: .88rem;
        text-align: center;
        color: #ffffff;
        font-size: .28rem;
        border-radius: .16rem !important;
        background: #212423 !important;
    }

    .info-com[data-v-73226123] {
        display: flex;
        margin-bottom: .32rem;
        flex-wrap: wrap;
        background: linear-gradient(180deg, #111116, #141519);
        border: .02rem solid hsla(0, 0%, 100%, .1);
        padding: 13px;
        border-radius: 11px;
    }

    .info-com li.on .val[data-v-73226123] {
        color: #f5e1e1;
    }

    .tab li[data-v-427eef2e] {
        color: #ffffff;
        padding: .18rem;
        flex: 1;
        text-align: center;
    }

    .card {
        background-color: #e4ad53;
        padding: 20px;
        border-radius: 12px;
        width: 100%;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .header {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        margin-bottom: 10px;
        color: #000;
    }

    .progress-bar {
        height: 10px;
        background-color: #96c907;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 20px;
    }

    .progress-fill {
        width: 50%;
        /* 3 out of 6 = 50% */
        height: 100%;
        background-color: #96c907;
        border-radius: 10px 0 0 10px;
    }

    .button {
        background-color: #96c907;
        color: black;
        border: none;
        padding: 10px;
        width: 100%;
        border-radius: 10px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 10px;
    }

    .button:hover {
        background-color: #96c907;
    }



        .card {
            background-color: #2b2b2b;
            border: 1px solid #444;
        }

        .header {
            color: #fff;
        }

        .progress-bar {
            background-color: #444;
        }

        .progress-fill {
            background-color: #96c907;
        }

        .button {
            background-color: #96c907;
            color: #000;
        }

        .button:hover {
            background-color: #96c907;
        }


    .order-box {
        background-color: #e4ad53;
        border-radius: 12px;
        padding: 20px;
        width: 100%;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .order-box h3 {
        margin-top: 0;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        color: #000;
        margin-bottom: 15px;
    }

    .order-box p {
        font-size: 14px;
        color: #000;
        margin: 0 0 10px 0;
        line-height: 1.5;
    }


        .order-box {
            background-color: #2b2b2b;
            border: 1px solid #444;
        }

        .order-box h3,
        .order-box p {
            color: #fff;
        }
    


    /* From Uiverse.io by ZacharyCrespin */
    @keyframes square-animation {
        0% {
            left: 0;
            top: 0;
        }

        10.5% {
            left: 0;
            top: 0;
        }

        12.5% {
            left: 32px;
            top: 0;
        }

        23% {
            left: 32px;
            top: 0;
        }

        25% {
            left: 64px;
            top: 0;
        }

        35.5% {
            left: 64px;
            top: 0;
        }

        37.5% {
            left: 64px;
            top: 32px;
        }

        48% {
            left: 64px;
            top: 32px;
        }

        50% {
            left: 32px;
            top: 32px;
        }

        60.5% {
            left: 32px;
            top: 32px;
        }

        62.5% {
            left: 32px;
            top: 64px;
        }

        73% {
            left: 32px;
            top: 64px;
        }

        75% {
            left: 0;
            top: 64px;
        }

        85.5% {
            left: 0;
            top: 64px;
        }

        87.5% {
            left: 0;
            top: 32px;
        }

        98% {
            left: 0;
            top: 32px;
        }

        100% {
            left: 0;
            top: 0;
        }
    }

    .loader {
        position: relative;
        width: 96px;
        height: 96px;
        transform: rotate(45deg);
    }

    .loader-square {
        position: absolute;
        top: 0;
        left: 0;
        width: 28px;
        height: 28px;
        margin: 2px;
        border-radius: 0px;
        background: #96c907;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        animation: square-animation 10s ease-in-out infinite both;
    }

    .loader-square:nth-of-type(0) {
        animation-delay: 0s;
    }

    .loader-square:nth-of-type(1) {
        animation-delay: -1.4285714286s;
    }

    .loader-square:nth-of-type(2) {
        animation-delay: -2.8571428571s;
    }

    .loader-square:nth-of-type(3) {
        animation-delay: -4.2857142857s;
    }

    .loader-square:nth-of-type(4) {
        animation-delay: -5.7142857143s;
    }

    .loader-square:nth-of-type(5) {
        animation-delay: -7.1428571429s;
    }

    .loader-square:nth-of-type(6) {
        animation-delay: -8.5714285714s;
    }

    .loader-square:nth-of-type(7) {
        animation-delay: -10s;
    }

    .global-loading.default[data-v-a7d12cfc] {
        /* width: 1.2rem; */
        /* height: 1.2rem; */
        top: 50%;
        left: 43%;
        transform: translate(-50%, -50%);
    }

    .modal {
        background-color: #e4ad53;
        border-radius: 12px;
        padding: 24px;
        width: 100%;
        max-width: 400px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        position: relative;
    }

    .modal h2 {
        margin-top: 0;
        font-size: 20px;
    }

    .modal p {
        margin: 8px 0;
        font-size: 14px;
    }

    .modal img {
        height: 50px;
        width: 50px;
        margin-right: 10px;
        vertical-align: middle;
        border-radius: 8px;
    }

    .payment-info {
        display: flex;
        align-items: center;
        margin: 12px 0;
    }

    .commission {
        font-weight: bold;
        margin-top: 10px;
    }

    .commission span {
        color: red;
        float: right;
    }

    .modal-footer {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .modal-footer button {
        flex: 1;
        margin: 0 5px;
        padding: 10px 15px;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        background: linear-gradient(to bottom right, #e48f53, #e4ad53);
        color: black;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .modal-footer button:hover {
        background: linear-gradient(to bottom right, #d5773f, #db9947);
    }

    .close-btn {
        position: absolute;
        top: 12px;
        right: 16px;
        font-size: 20px;
        cursor: pointer;
    }

    /* === DARK MODE === */
    @media (prefers-color-scheme: dark) {
        body {
            background-color: #1a1a1a;
        }

        .modal {
            background-color: #2b2b2b;
            color: white;
            border: 1px solid #444;
        }

        .modal-footer button {
            background: linear-gradient(to bottom right, #ff7f50, #ffaa33);
            color: black;
        }

        .modal-footer button:hover {
            background: linear-gradient(to bottom right, #e67340, #ff9933);
        }

        .commission span {
            color: #ff6b6b;
        }

        .close-btn {
            color: white;
        }
    }

    .button {
        --black-700: hsla(0 0% 12% / 1);
        /* --border_radius: 9999px; */
        --transtion: 0.3s ease-in-out;
        --offset: 2px;
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        gap: 0px;
        transform-origin: center;
        padding: 15px;
        background-color: transparent;
        border: none;
        border-radius: var(--border_radius);
        transform: scale(calc(1 + (var(--active, 0) * 0.1)));
        transition: transform var(--transtion);
    }

    .button::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 100%;
        height: 100%;
        background-color: var(--black-700);

        border-radius: var(--border_radius);
        box-shadow: inset 0 0.5px hsl(0, 0%, 100%), inset 0 -1px 2px 0 hsl(0, 0%, 0%),
            0px 4px 10px -4px hsla(0 0% 0% / calc(1 - var(--active, 0))),
            0 0 0 calc(var(--active, 0) * 0.375rem) hsl(260 97% 50% / 0.75);

        transition: all var(--transtion);
        z-index: 0;
    }

    .button::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 100%;
        height: 100%;
        background-color: hsla(260 97% 61% / 0.75);
        background-image: radial-gradient(at 51% 89%,
                hsla(266, 45%, 74%, 1) 0px,
                transparent 50%),
            radial-gradient(at 100% 100%, hsla(266, 36%, 60%, 1) 0px, transparent 50%),
            radial-gradient(at 22% 91%, hsla(266, 36%, 60%, 1) 0px, transparent 50%);
        background-position: top;

        opacity: var(--active, 0);
        border-radius: var(--border_radius);
        transition: opacity var(--transtion);
        z-index: 2;
    }

    /* .button:is(:hover, :focus-visible) {
  --active: 1;
} */
    .button:active {
        transform: scale(1);
    }

    .button .dots_border {
        --size_border: calc(100% + 2px);

        overflow: hidden;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: var(--size_border);
        height: var(--size_border);
        background-color: transparent;

        border-radius: var(--border_radius);
        z-index: -10;
    }

    .button .dots_border::before {
        content: "";
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        transform-origin: left;
        transform: rotate(0deg);

        width: 100%;
        height: 2rem;
        background-color: white;

        mask: linear-gradient(transparent 0%, white 120%);
        animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }

    .button .sparkle {
        position: relative;
        z-index: 10;
        margin: -8px auto;
        width: 0.75rem;
    }

    .button .sparkle .path {
        fill: currentColor;
        stroke: currentColor;

        transform-origin: center;

        color: hsl(0, 0%, 100%);
    }

    .button:is(:hover, :focus) .sparkle .path {
        animation: path 1.5s linear 0.5s infinite;
    }

    .button .sparkle .path:nth-child(1) {
        --scale_path_1: 1.2;
    }

    .button .sparkle .path:nth-child(2) {
        --scale_path_2: 1.2;
    }

    .button .sparkle .path:nth-child(3) {
        --scale_path_3: 1.2;
    }

    @keyframes path {

        0%,
        34%,
        71%,
        100% {
            transform: scale(1);
        }

        17% {
            transform: scale(var(--scale_path_1, 1));
        }

        49% {
            transform: scale(var(--scale_path_2, 1));
        }

        83% {
            transform: scale(var(--scale_path_3, 1));
        }
    }

    .button .text_button {
        position: relative;
        z-index: 10;
        background-image: linear-gradient(90deg, hsla(0 0% 100% / 1) 0%, hsla(0 0% 100% / var(--active, 0)) 120%);
        background-clip: text;
        font-size: 20px;
        color: transparent;
        margin: 0px auto;
    }
</style>

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-6e2d35de="" data-v-427eef2e="" class="page">
            <div data-v-6e2d35de="" class="headers">
                <div data-v-b73557e2="" data-v-427eef2e="" class="head" data-v-6e2d35de="">
                    <div data-v-b73557e2="" class="safe"></div>
                    <div data-v-b73557e2="" class="container flex" style=" background: #0f0e11=">

                        <!---->
                        <!---->
                        <!---->
                        <div data-v-b73557e2="" class="name tac"> Marketing traffic</div>
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-b73557e2="" class="flex1"></div>
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-b73557e2="" class="head_right"><img data-v-427eef2e="" data-v-b73557e2=""
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA30Ag73AQz59gf7+QUDCwoI/U2H/IAAABWElEQVQ4y7VUQYLDIAhcFcVEk7T+/7ErWhaidnsqJwMDw0wSf74dzkcDpQBe3v0D21JRgdsbmDVlCLOChmerQfSHtdY/etczTMsh5ZNVBI821A04Q0l7T55mQgZKPSaakEmTTtN++0rgTnsqW+pjFsZts39TaFHZqBIbLh14kxuopgeewtUDWXw9s511RmT1zcpsVDVV17goa+TuR4BSLjWyW+TVFuk1PKtcbfLtcFFRtthfuaSE9zpyR5sObvBLGEE75ULHUQMbVh/aQbRIpQD5JWqWQAddugYy9aGBkf1gIFMbFjNYpMSglq/f/D4wXNwBtwmYhFkzulFNkKO8QnntMhGMuzOjfGZ6JN53PKFsw4crXxBVBIl6DS384PFz5Hc/19gScHkrhMjtwwVwzpfRGlmiVbBEmRkZckub6K21h4/QYavlN1PWMcvc8CNSruYLYYX8QvwC0IwcS/jNkO0AAAAASUVORK5CYII="
                                alt="" class="headRight"></div>
                    </div>
                    <div data-v-b73557e2="">
                        <!---->
                    </div>
                </div>
            </div>


            <?php
            
            $quantifiable_count = 0;
            if ($balance >= 30 && $balance < 500) {
                $quantifiable_count = 6;
            } elseif ($balance >= 500 && $balance < 2999 && $userDirect >= 5) {
                $quantifiable_count = 6;
            } elseif ($balance >= 3000 && $userDirect >= 10) {
                $quantifiable_count = 6;
            } else {
                $quantifiable_count = 6;
            }
            // dd($userDirect);
            ?>


            <div data-v-6e2d35de="" id="scroll" class="content-container">
                <div data-v-6e2d35de="" id="content" class="content-scroll">
                    <div data-v-427eef2e="" data-v-6e2d35de="" class="main">
                        <div data-v-427eef2e="" data-v-6e2d35de="" class="container">
                            <ul data-v-73226123="" data-v-427eef2e="" class="info-com" data-v-6e2d35de="">
                                <li data-v-73226123="">
                                    <div data-v-73226123="" class="title">My level</div>
                                    <div data-v-73226123="" class="val"><img data-v-73226123=""
                                            src="{{ asset('static/img/' . (Auth::user()->rank > 0 ? 'rank' . Auth::user()->rank : 'V0_icon.69de7dcc') . '.png') }}" alt="">VIP{{Auth::user()->rank}} </div>
                                </li>
                                <li data-v-73226123="">
                                    <div data-v-73226123="" class="title">Wallet balance(USDT)</div>
                                    <div data-v-73226123="" class="val">
                                        {{ number_format(Auth::user()->available_balance(), 2) }} USDT </div>
                                </li>
                                <li data-v-73226123="">
                                    <div data-v-73226123="" class="title">Current Package</div>
                                    <div data-v-73226123="" class="val">{{number_format(Auth::user()->package,2)}} USDT</div>
                                </li>
                                <li data-v-73226123="" class="on">
                                    <div data-v-73226123="" class="title">Today's earnings</div>
                                    <div data-v-73226123="" class="val">{{ number_format($todaysLevelIncome, 2) }}
                                    </div>
                                </li>
                                <li data-v-73226123="">
                                    <div data-v-73226123="" class="title">Cumulative Income</div>
                                    <div data-v-73226123="" class="val">
                                        <?= Auth::user()->tradeAmt <= 0 && $todaysRoi < $quantifiable_count ? number_format($balance, 2) : number_format(Auth::user()->tradeAmt, 2) ?>
                                        / {{ number_format($balance, 2) }}
                                    </div>
                                </li>
                                <li data-v-73226123="">
                                    <div data-v-73226123="" class="title">Team benefits(USDT)</div>
                                    <div data-v-73226123="" class="val">{{ number_format($totalLevelIncome, 2) }}
                                    </div>
                                </li>
                            </ul>
                            <ul data-v-427eef2e="" data-v-6e2d35de="" class="tab flex">
                                <li data-v-427eef2e="" data-v-6e2d35de="" class="on" id="strategyButton"
                                    id="strategyButton"> Strategy </li>
                                <li data-v-427eef2e="" data-v-6e2d35de="" class="" id="todayButton"> Today
                                </li>
                                <li data-v-427eef2e="" data-v-6e2d35de="" class="" id="billButton"> Bill </li>
                            </ul>

                            <div id="defaultContent" style="display: block;">
                                <div data-v-427eef2e="" data-v-6e2d35de="" class="select-level-tab">
                                    <div data-v-427eef2e="" data-v-6e2d35de="" class="ico"><img data-v-427eef2e=""
                                            data-v-6e2d35de="" src="{{ asset('static/img/' . (Auth::user()->rank > 0 ? 'rank' . Auth::user()->rank : 'V0_icon.69de7dcc') . '.png') }}"
                                            alt="">
                                    </div>
                                    <div data-v-427eef2e="" data-v-6e2d35de="" class="flex1">
                                        <div data-v-427eef2e="" data-v-6e2d35de="" class="title">VIP{{Auth::user()->rank}}</div>
                                        <div data-v-427eef2e="" data-v-6e2d35de="" class="rate">Reward: {{ number_format(getPackageRoi(Auth::user()->package), 2) }}</div>
                                    </div>
                                    <div data-v-427eef2e="" data-v-6e2d35de="" class="val">{{number_format(Auth::user()->package,2)}} USDT </div><i
                                        data-v-427eef2e="" data-v-6e2d35de="" class="van-icon van-icon-arrow">
                                        <!---->
                                    </i>
                                </div>
                               

                                {{-- loader --}}

                                <div id="loader-overlay" class="van-overlay" style="z-index: 2001; display:none">
                                </div>
                                <div id="loader" data-v-a7d12cfc="" class="global-loading default"
                                    style="display: none;">
                                    <div data-v-a7d12cfc="" class="global-spinner">
                                        <div class="loader">
                                            <div class="loader-square"></div>
                                            <div class="loader-square"></div>
                                            <div class="loader-square"></div>
                                            <div class="loader-square"></div>
                                            <div class="loader-square"></div>
                                            <div class="loader-square"></div>
                                            <div class="loader-square"></div>
                                        </div>


                                    </div>
                                </div>





                                {{-- end loader --}}



                                {{-- model popup --}}
                                <div id="modal-overlay" class="van-overlay" style="z-index: 2001; display:none;">
                                </div>
                                <div id="modal" data-v-a7d12cfc="" class="van-popup van-popup--round"
                                    style="display: none; z-index: 2003;    width: 94%;    top: 4rem;">

                                    <div class="modal">
                                        <div class="close-btn" onclick="hideModal()">&times;</div>
                                        <h2>Submit order</h2>
                                        <p><strong>Submit order time:</strong> <span id="modalTime">--</span></p>
                                        <p><strong>Order Number:</strong> <span id="modalOrderNo">--</span></p>

                                        <div class="payment-info">
                                            <img id="modalCompanyLogo" src="" alt="Company Logo" />
                                            <span id="modalCompanyName">--</span>
                                        </div>

                                        <div class="commission">
                                            Commission:
                                            <span id="modalROI">--</span>
                                        </div>
                                    </div>


                                </div>


                                {{-- end model popup --}}

                                <div class="card">
                                    <div class="header">
                                        <span>Starting</span>
                                        <span id="progressText">{{ $todaysRoi }}/{{ $quantifiable_count }}</span>
                                    </div>

                                    <?php 
                                     $quantifiableCount = 6;
                                      $completedtask = $todaysRoi;
                                      $process = ($completedtask / $quantifiableCount) * 100;
                                    ?>
                                    <div class="progress-bar">
                                        <div class="progress-fill" id="progressFill" style="width: {{$process}}%"></div>
                                    </div>



                                    @php
                                    $hourdiff = round((strtotime(date('Y-m-d H:i:s')) -
                                    strtotime(Auth::user()->last_trade)) / 3600);
                                    @endphp

                                    @if ($hourdiff >= 24)
                                    <button class="button" id="submitOrderBtn" onclick="submitOrder()">
                                        <div class="dots_border"></div>

                                        <p class="text_button"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" class="sparkle">
                                                <path class="path" stroke-linejoin="round" stroke-linecap="round"
                                                    stroke="black" fill="black"
                                                    d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z">
                                                </path>
                                                <path class="path" stroke-linejoin="round" stroke-linecap="round"
                                                    stroke="black" fill="black"
                                                    d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z">
                                                </path>
                                                <path class="path" stroke-linejoin="round" stroke-linecap="round"
                                                    stroke="black" fill="black"
                                                    d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z">
                                                </path>

                                            </svg> GET TO WORK</p>

                                    </button>

                                    @else
                                    <script src="https://code.jquery.com//jquery-3.3.1.min.js"></script>


                                    <?php
                                        
                                        $date1 = Auth::user()->last_trade;
                                        $date1 = strtotime($date1);
                                        $date1 = strtotime(' + 24 hours', $date1);
                                        $new_date1 = date('Y-m-d H:i:s', $date1);
                                        
                                        //   echo $new_date1;
                                        
                                        ?>

                                    <script>
                                        // Set the date we're counting down to
                                            timer = setInterval(function() {
                                                countdownTimeStart();

                                            }, 1000);


                                            function countdownTimeStart() {

                                                var countDownDate = new Date("{{ $new_date1 }}").getTime();

                                                // Get todays date and time
                                                // var now = new Date().getTime();
                                                var now = new Date(new Date().toLocaleString('en-US', {
                                                    timeZone: 'Asia/Kolkata'
                                                }))

                                                // Find the distance between now an the count down date
                                                var distance = countDownDate - now;

                                                // Time calculations for days, hours, minutes and seconds
                                                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                                                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                                                // Output the result in an element with id="demo"



                                                document.getElementById("tiles").innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" +
                                                    seconds + "</span>";
                                                //   $('#left_time').html('Hello');

                                                // If the count down is over, write some text 
                                                if (distance < 0) {
                                                    clearInterval(timer);
                                                    document.getElementById("tiles").innerHTML = "EXPIRED";
                                                }

                                            }
                                    </script>

                                    <button class="button" >
                                        <div class="dots_border"></div>

                                      <p class="text_button" >   Next Task : <span  id='tiles'>---</span></p>

                                    </button>
                                    @endif




                                </div>
                                <br>

                                <div class="order-box">
                                    <h3>ORDER DESCRIPTION</h3>
                                    <p>Task orders are intelligently matched through TTMD’s cloud system, based on your current VIP level.</p>
                                    <p>Receive commissions that align with your VIP tier — the higher your level, the greater your earnings.</p>
                                </div>


                                <!---->
                                <div data-v-4dc539c5="" data-v-427eef2e="" class="list" data-v-6e2d35de="">
                                    <div data-v-4dc539c5=""
                                        class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-autoheight">

                                    </div>
                                    <div data-v-4dc539c5="">
                                        <div data-v-4dc539c5="" class="swiper-prev my-button-disabled" tabindex="0"
                                            role="button" aria-label="Previous slide" aria-disabled="true"
                                            style="display: none;"><img data-v-4dc539c5=""
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAxlBMVEUAAABVVVlTU1dYWFhWVllSUVRSUVRUVFdUU1dVVFdSUlRUU1dQUFBQUFhVVVpSUVRTU1ZWVlpXV1lVVFZQUFBWVlhSUVRTU1ZUVFlUVFonJikrKy8sLDAoJyoqKi7///8pKCtSUVQqKSxVVVlWVllTU1Y2NTkyMTVGRklQUFMwMDNCQkU/PkJNTE85OTzl5eVLS048Oz+VlZdPTlGwsLGIiIpISExHR0ry8vLY2NjKysvx8fG9vb57e33X19eioqR5eHpubnE+vFK4AAAAGnRSTlMA348g7+/fz2Cvf0AQIJ+fv39wUCCAcG9wgNK0k0kAAARfSURBVFjDlVdpY9owDA2BlhRG1667cRyM7ZyQQemx+/j/f2qWXVt2EsqmtkA/vJenJ8nI0bEYJ/HFdMSFEKPpxfXNOPqvmMfnjEkVXNgYXc7/Ff1idsYYO5SbtqjpkpAib5ud5FyMkvG/wSWr9sXHj+lqvQYCHcu8qYSYxCcp3qmnPxYfFTwFgiUllmFJ8x3no+RZ+OKKsRLgEOlaETgFOuoHRTF+9vHbIjVwmwIK0CT7ik9eHcPHjG1WIN4RoAQAU/inLjm/Hsa/lFULwECBIyBAoGPDxeUQfsqqOrXYfgrq10ZR8enA89l26Z5tq4AKQAAogD9SV30NM8CnBq4CPmoPEA9YG7UUccd/Jmv7ePRgtabUJ9BOEJ0F50EtFmesdbgUCWwKyGC92PCJ3w/nrMFHIxMQkNCDpZXRiCvEJ76B7l3hvRRsEeDdGIlJLM5l7uOxlVEBwu2HnE9euA4sERaWEYfBwrEaO37tHCSpRWKEKVg4thNKSFAAEnSrgDhMZieun0pQHCcAvHzE1L0XkosJ4OdsG2SfdhXcZdm9kkB1IwRZSD7XQ7h5wqUWDi+ulW+zLPuCIKJ5TFINj00GaagdFdA1vc9U3FkTqH63QnIxiqLX8mDFh61splEC/lOJuVPfRynG0Q3WoNMI4EH5SeE/A97MgXYBc3ngiZrjvUb0ORRBDniwED3wy0AaNdUXLPfhyAUKvgP+NpwFX8KeX0RTViAmrOfqFvDfAY9DFMgo+FQVYdlXb97utYEtaCWIN3WEHyAYRYwBoguHwlZPBdBhoD0hggMBik59iq9AwIgvoGclR4JeL6dA8FlqdJeBGgYk0K3Y7eXqm04B0GhBJ7gAEwE+ICP9ncEYtNYE14RoZ61MnEriIzEDW8a7wAKoAHVicj6FRsLMDRSH6Q4bKfCOEDNYrWqkmG0C9fBjcoJW/gkMPwY9NPP8JkpYc6SVV2s7TDJ0D7Xs+E20YAdsA4vGcWamFIEL1DHAOKsy1EMlsKfyD0jiK/FmGD/mfKS/FfY9A/FM7B5pQS0bcakP1YNrfwxvwfiVZX+06/jVYrqAVlwvn2dwrPfQ/rHeElc7NNBkADGTZYgd3NL6nUx2IjG7qZaQhpNkPdCjD0F7X461WxFm7LGvIA23NFcG5HmAbwWU0Av0wITF4XmIO+tbuV2HpewTYBmpSaDi3tp8hQOBsdIEJgdzBvpRqhJgvNZLVupP1LACMDNYslwS7FD3TmWFdwTBeU5hzXvfXbQPxCV/asGgyoAPQ6tu6lZVeA0XTd0PuCxfDi3bWwK44TIimtJc4rIdamBtfxodmtgSbmT/+bYjWbN8dskCnoZDBw7HW3Xlye25hMPkb3o5G7zy4M6qRBBcNLubKtzbrp6/+SXncO3zGwkfn+8En7yPTsTr+Iyx7abuNlKuvBOTN7CbnqQAFawq93lBgKAo9s2DFALhp2P+0l2+OVdQ9TeK59F/xeJmpq7/kuvrf3z82v0XzBlpna+fUZ4AAAAASUVORK5CYII="
                                                alt=""></div>
                                        <div data-v-4dc539c5="" class="swiper-next my-button-disabled" tabindex="0"
                                            role="button" aria-label="Next slide" aria-disabled="true"
                                            style="display: none;"><img data-v-4dc539c5=""
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAz1BMVEUAAAArKy8nJilWVllYWFhVVVpSUVVUU1dUVFdSUVRVVVlSUVRVVlhVU1ZUUFhQUFRTUVVSUlVVVVlSUlRSUVRXV1lTU1ZSUVRVVllTU1ZVVVhTU1NXV1pWVllUVFonJikrLC8oJyorKy5VVVlSUVT///8pKSwpKCsqKi0xMTRUU1Y2NTlQT1NMS05HR0o5OTxAQEPl5eVDQ0YvLjFEREc9PUA8Oz/X19iwsLGWlpfy8vLKysqIiIp6enzx8fG9vb6UlJaioqSGhYdtbnA6Oj4tygV+AAAAH3RSTlMA/v7fIO/fz6+Qj4B/QCAQ759gX+9vv3Cfb59Qn1BPommcMgAABTVJREFUWMOVVwlb2lAQbKItArWl1draixyLkBMERXuf//83dfbikarULjYUP2cyO/Pe8vLgrtp/Pjjo7eWovd7B8M2TB/9VhwNArUoUET16dnhf9NPHDxnXLC+rIsmys1VVrduaOY727wsvF1WESlDZ7Oxsmsbj4rIhGvX/2coLwJsqy5KIC1cQTEEQj8fjomUVO+H7JwpHJYngTQHgMV7RBSj2d96+rqAaFYEAxR4IAUouVUOj07vwgzxfJhn6FgHaRJbNZtM0jUUCSNJoSTS8Hf8qLy8ZmpmCRGyccQvAgkQ1xHOiZ7fhe3mJ1LSgI0qCBdyCqICXuK4a6t3Ev87rInO8puAKptaDtgEhUXNTw2Pgo0ThKLmAwFNQ8XhpZTX1//I/zwvGuAeJp+DrYKw5uBEroped/B/ml8AIgbF4CjNRwHcHUrwQK+Y02l4Pe3mbOAGC21bABG6BhMkycFnQScA/hwFsuriXqYqo00LK95cYgJYFcdbQ6aaBvfy3CIBlah+AHgMEqIKYlct/1I6Cjp9uVmAbiWRlAMz1ozQEQwEd0mhpuHGwiCBfKLgi+9EWWAGQZn9wAxJGT82BhgFcwhMpkXvgu9G0OwGYIMEiqJwg8DB8XuKzmoj+GaZW2iWFBJl/ea0gcQ5IJ/o1mfxIMlNgIaTahSVSE8/Jt9jDaphwBCFXk8nkgyvgkgDFzxSFX6yprx0ojvFGISyfJqgvPhM9vtib4DlJj5BBXm6sj+yqibTnIPhY2l7Sm6e6HlxMTfsP3msGHqHZIYzlVzCcX2gKMcNTlaB0eLugI+zjBZvnYMVmyvKFm7iq4IGaoDS+IuDEAiYc5POgwP+5pR+Y4VoUCBLFXNIE76mKDjDJKsG6if5BP18zw3cjYNyWnTIWegihEIiXa1Cy+ZVEAbTi3IRUXuMIMeS5/PFGgsOFwKOo0byF5wEoJREIQu8d+VJZRBzFJwvOYCEGJwgecAUKvNOECQDolvjhBC7csXzxbtACqjaMKQ97k0hMdPkZXi5A+eaC/2mexaoeF/Mkg4k9TyGsAy5r5pvHaGUGgkiCKaiHhbTmv1ZsZlI8A1lI32QioXw76ZpmJl5IA+xm92CTn3XwmfHnvJRVvNNIJLqfhxhorakWuERnjrYfZTPNptM4SAhXULT0BtuZ5LvQt3PYDhpAyQMlNgkBrQw1PdGRuKUgRCD74HN3qNoXhEaqAwUmLIAKxrkZOtJkJkKB37kzmxf0TIZqaSjH2kSChdcyVDUFT18qlZ+G5PD5ED34nSVLl9OWeOOhqiM0nDJsKqIDO1s03ZVkMWplMlMVinedicrR0pGeTSHB4Vn325H1zGSiyTZ2K5QmomNkYBIA8/IOpNwDQK15188TtQ+wSxDZQOs89UCVABLCLIIOzbCiRxCgdZrXqyhsI1HhVmiMdrDZGilRww54neRLRlvZN1Q4oaSioMuxtAjCIUtl+1Z2Gv9ytaW8Oe/NzcFwzCsLRvnpTFj8kCWbyVw0C/2YF2ogDD7QDO8mpuGAsTFgeMtR1xi6CjwFZOCH9tiPut3qCQPKDdAxySdNRm6dFVc19W4/7ueXmyyMCCn6ZtrMxXl98/6+IvO2CCbYMrAW/GQ1XRD1dz3yrLF/ghUhxlhVFA0dv9zx0LXHIpgik2XQSSHW57aT3U9+z0HRVDacpYXw0MXwkd1+h4gBnhxpCQ4uTwE3X9dEx0M7Hu+mYBV52SzmVcErcVXMFxdA0wjwe9bhq5sP3/3De4Jdx7vH+vhf4vG/f3Snc38AAz1KiX9XW74AAAAASUVORK5CYII="
                                                alt=""></div>
                                    </div>
                                </div>
                            </div>







                            <div data-v-68c18260="" class="list" id="billContent" style="display: none;">
                                @if (is_array($level_income) || $level_income)
                                @foreach ($level_income as $value)
                                <div data-v-68c18260="" class="list-item">
                                    <div data-v-68c18260="" class="com1">
                                        <div data-v-68c18260="" class="left">
                                            <div data-v-68c18260="" class="title"></div>
                                            <div data-v-68c18260="" class="time">
                                                {{ date('D, d M Y', strtotime($value->created_at)) }}</div>
                                        </div>
                                        <div data-v-68c18260="" class="right">
                                            <div data-v-68c18260=""></div>
                                            <span data-v-68c18260="">Completed</span>
                                            <i data-v-68c18260="" class="van-icon van-icon-arrow"></i>
                                        </div>
                                    </div>
                                    <ul data-v-68c18260="" class="flex">
                                        <li data-v-68c18260="">
                                            <img style="    width: 40px;height: 40px;    margin-left: 41px;"
                                                src="{{ $value->company_logo }}" alt="Company Logo"
                                                class="w-12 h-12 rounded-xl object-cover" />
                                            <div class="font-semibold" style="margin:10px">{{ $value->company_name }}
                                            </div>
                                        </li>

                                        <li data-v-68c18260="">
                                            <div data-v-68c18260="" class="title">Commission</div>
                                            <div data-v-68c18260="" class="val">
                                                {{ $value->roi ?? '0' }} USDT</div>
                                        </li>
                                    </ul>
                                </div>
                                @endforeach
                                @else
                                <p style="color: #000;">No bill history available.</p>
                                @endif
                            </div>




                            <div data-v-68c18260="" class="list" id="todayContent" style="display: none;">

                                @if (is_array($todaysTrade) || $todaysTrade)
                                @foreach ($todaysTrade as $value)
                                <div data-v-68c18260="" class="list-item">
                                    <div data-v-68c18260="" class="com1">
                                        <div data-v-68c18260="" class="left">
                                            <div data-v-68c18260="" class="title"></div>
                                            <div data-v-68c18260="" class="time">
                                                {{ date('D, d M Y', strtotime($value->created_at)) }}</div>
                                        </div>
                                        <div data-v-68c18260="" class="right">
                                            <div data-v-68c18260=""></div>
                                            <span data-v-68c18260="">Completed</span>
                                            <i data-v-68c18260="" class="van-icon van-icon-arrow"></i>
                                        </div>
                                    </div>
                                    <ul data-v-68c18260="" class="flex">
                                        <li data-v-68c18260="">
                                            <img style="    width: 40px;height: 40px;    margin-left: 41px;"
                                                src="{{ $value->company_logo }}" alt="Company Logo"
                                                class="w-12 h-12 rounded-xl object-cover" />
                                            <div class="font-semibold" style="margin:10px">{{ $value->company_name }}
                                            </div>
                                        </li>

                                        <li data-v-68c18260="">
                                            <div data-v-68c18260="" class="title">Commission</div>
                                            <div data-v-68c18260="" class="val">
                                                {{ $value->roi ?? '0' }} USDT</div>
                                        </li>
                                    </ul>
                                </div>
                                @endforeach
                                @else
                                <p style="color: #000;">No bill history available.</p>
                                @endif

                            </div>


                            <!---->
                        </div>
                    </div>
                    <style>
                        .van-popup--center.van-popup--round {
                            border-radius: .42667rem;
                        }

                        .van-overlay,
                        .van-popup {
                            position: absolute;
                        }

                        .van-popup--center {
                            top: 50%;
                            left: 50%;
                            -webkit-transform: translate3d(-50%, -50%, 0);
                            transform: translate3d(-50%, -50%, 0);
                        }

                        .van-popup {
                            position: fixed;
                            max-height: 100%;
                            overflow-y: auto;
                            background-color: linear-gradient(180deg, #111116, #141519);
                            -webkit-transition: -webkit-transform .3s;
                            transition: -webkit-transform .3s;
                            transition: transform .3s;
                            transition: transform .3s, -webkit-transform .3s;
                            -webkit-overflow-scrolling: touch;
                            border: .02rem solid hsla(0, 0%, 100%, .1);
                        }

                        .tw-text-center {
                            text-align: center;
                        }

                        .tw-p-16px {
                            padding: .42667rem;
                        }

                        .tw-w-32 {
                            width: 8rem;
                        }

                        .tw-text-16px {
                            font-size: .42667rem;
                        }

                        .tw-mb-16px {
                            margin-bottom: .42667rem;
                        }

                        .tw-w-140px {
                            width: 3.73333rem;
                        }

                        .tw-mx-auto {
                            margin-left: auto;
                            margin-right: auto;
                        }

                        img {
                            max-width: 100%;
                            max-height: 100%;
                            vertical-align: top;
                        }

                        .tw-mt-16px {
                            margin-top: .42667rem;
                        }

                        .tw-text-14px {
                            font-size: .37333rem;
                        }

                        .tw-mb-16px {
                            margin-bottom: .42667rem;
                        }

                        .tw-mt-10px {
                            margin-top: .26667rem;
                        }

                        .tw-items-center {
                            align-items: center;
                        }

                        .tw-flex {
                            display: flex;
                        }

                        .btn1[data-v-29a06c8f] {
                            border-radius: .26667rem;
                            border: .03733rem solid #96c907;
                            background: linear-gradient(180deg, #111116, #141519);
                            color: #96c907;
                        }

                        .tw-text-14px {
                            font-size: .37333rem;
                        }

                        .btn2 {
                            height: .86rem;
                            background: var(--CObackgroundLinear2);
                            border-radius: .2rem;
                            color: var(--COcolor4);
                            font-weight: 500;
                            font-size: 0.32rem;
                            width: 100%;
                            border: 0;
                            margin: 5px;
                        }
                    </style>
                    <div class="van-overlay" style="z-index: 2009;display:none"></div>
                    <div data-v-29a06c8f="" class="van-popup van-popup--round van-popup--center"
                        style="z-index: 2010; display:none">
                        <div data-v-29a06c8f="" class="tw-w-32 tw-text-center tw-p-16px">
                            <div data-v-29a06c8f="" class="tw-mb-16px tw-text-16px">Strategy Complete</div><img
                                data-v-29a06c8f="" src="{{ asset('') }}static/img/icon_13.bf296378.png" alt=""
                                class="tw-mx-auto tw-w-140px">
                            <div data-v-29a06c8f="" class="tw-mt-16px">Congratulations to get</div>
                            <div data-v-29a06c8f="" class="tw-mt-10px tw-mb-16px tw-text-14px">
                                <div data-v-29a06c8f=""> 0.0951 USDT </div>
                                <!---->
                            </div>
                            <div data-v-29a06c8f="" class="tw-flex tw-items-center"
                                style="justify-content: space-between;"><button data-v-29a06c8f=""
                                    class="btn1 btns tw-text-14px"> View Order </button><button data-v-29a06c8f=""
                                    class="btn2 btns"> Confirm </button></div>
                        </div><i role="button" tabindex="0"
                            class="van-icon van-icon-cross van-popup__close-icon van-popup__close-icon--top-right">
                            <!---->
                        </i>
                    </div>

                    <div data-v-22717aba="" data-v-427eef2e="" data-v-6e2d35de=""></div>
                    <div data-v-11b54ad9="" data-v-427eef2e="" info="[object Object]" data-v-6e2d35de=""></div>
                    <div data-v-52c6a81e="" data-v-427eef2e="" data-v-6e2d35de=""></div>
                    <!---->









                </div>
            </div>
            <script>
                async function submitOrder() {
                    // Show loader
                    document.getElementById('loader-overlay').style.display = 'block';
                    document.getElementById('loader').style.display = 'block';

                    // Wait 10 seconds
                    setTimeout(async () => {
                        try {
                            // Hide loader
                            document.getElementById('loader-overlay').style.display = 'none';
                            document.getElementById('loader').style.display = 'none';

                            // Make API call (example using Fetch)
                            const response = await fetch('/user/tradeOn', {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            });

                            const result = await response.json();
                            console.log("API Result:", result);
                            // Show modal popup
                            if (result.status) {
                                const quantifiableCount = 6;
                                const tradesCompleted = result.data.totalTask;
                                // Populate modal with data
                                document.getElementById('modalTime').innerText = result.data.dateTime;
                                document.getElementById('modalOrderNo').innerText = result.data.orderNo;
                                document.getElementById('modalCompanyName').innerText = result.data.company;
                                document.getElementById('modalCompanyLogo').src = result.data.logo;
                                document.getElementById('modalROI').innerText = result.data.roi_amount;
                                const progress = (tradesCompleted / quantifiableCount) * 100;
                                document.getElementById('progressFill').style.width = `${progress}%`;
                                document.getElementById('progressText').innerText = `${tradesCompleted}/6`;
                                // Show modal

                                if (tradesCompleted >= 6) {
                                    const submitBtn = document.getElementById('submitOrderBtn');
                                    submitBtn.disabled = true;
                                    submitBtn.innerText = "ALL TASKS COMPLETED";
                                    submitBtn.style.backgroundColor = "#999";
                                    submitBtn.style.cursor = "not-allowed";
                                    
                                        // ✅ Reload page after 5 seconds
                                        setTimeout(() => {
                                            location.reload();
                                        }, 5000);

                                }

                                document.getElementById('modal-overlay').style.display = 'block';
                                document.getElementById('modal').style.display = 'block';
                                
                            } else {
                                alert(result.message);

                            }


                        } catch (error) {
                            console.error("Error submitting order:", error);
                        }
                    }, 10000); // 10 seconds
                }

                function hideModal() {
                    document.getElementById('modal-overlay').style.display = 'none';
                    document.getElementById('modal').style.display = 'none';
                }
            </script>
            <script>
                // Button IDs and corresponding content IDs
                const tabs = {
                    strategyButton: "defaultContent",
                    billButton: "billContent",
                    todayButton: "todayContent",
                };

                // Loop through each button
                window.addEventListener("DOMContentLoaded", () => {
                    // Attach click listeners after DOM is fully loaded
                    Object.keys(tabs).forEach((buttonId) => {
                        const btn = document.getElementById(buttonId);
                        if (btn) {
                            btn.addEventListener("click", () => {
                                Object.values(tabs).forEach((contentId) => {
                                    document.getElementById(contentId).style.display = "none";
                                });

                                Object.keys(tabs).forEach((btnId) => {
                                    document.getElementById(btnId).classList.remove("on");
                                });

                                document.getElementById(tabs[buttonId]).style.display = "block";
                                console.log("check:", tabs[buttonId]);

                                btn.classList.add("on");
                            });
                        }
                    });

                    // Show Strategy tab by default
                    document.getElementById("defaultContent").style.display = "block";
                    document.getElementById("strategyButton").classList.add("on");
                });
            </script>