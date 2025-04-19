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
    <!-- Swiper CSS -->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

    <!-- Swiper JS -->
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            new Swiper('.swiper-container', {
                slidesPerView: 'auto',
                spaceBetween: 15,
                grabCursor: true,
                loop: false,
            });
        });
    </script>

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
            height: auto;
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
            height: auto;
            object-fit: cover;
        }
    </style>

    <link href="{{ asset('') }}static/js1743619988925/app.d968e27a.1743619988925.js?v=1743619988925" rel="preload"
        as="script">
    <link href="{{ asset('') }}static/js1743619988925/app.096af138.1744798709800.js?v=1743619988925" rel="preload"
        as="script">
    <link href="{{ asset('') }}static/js1743619988925/axios.d968e27a.1743619988925.js?v=1743619988925"
        rel="preload" as="script">
    <link href="{{ asset('') }}static/js1743619988925/compressorjs.d968e27a.1743619988925.js?v=1743619988925"
        rel="preload" as="script">
    <link href="{{ asset('') }}static/js1743619988925/core-js.d968e27a.1743619988925.js?v=1743619988925"
        rel="preload" as="script">
    <link href="{{ asset('') }}static/js1743619988925/crypto-js.d968e27a.1743619988925.js?v=1743619988925"
        rel="preload" as="script">
    <link href="{{ asset('') }}static/js1743619988925/vant.d968e27a.1743619988925.js?v=1743619988925" rel="preload"
        as="script">
    <link href="{{ asset('') }}static/js1743619988925/vendors~app.d968e27a.1743619988925.js?v=1743619988925"
        rel="preload" as="script">
    <link href="{{ asset('') }}static/js1743619988925/vue.d968e27a.1743619988925.js?v=1743619988925" rel="preload"
        as="script">
    <link href="{{ asset('') }}static/css/app.6328f701.css" rel="preload" as="style">
    <link href="{{ asset('') }}static/css/vant.d14f5539.css" rel="preload" as="style">
    <link href="{{ asset('') }}static/css/vant.d14f5539.css" rel="stylesheet">
    <link href="{{ asset('') }}static/css/app.6328f701.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-6f896b4e.5bb66763.css">
    <script charset="utf-8"
        src="{{ asset('') }}static/js1743619988925/chunk-6f896b4e.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-5576a184.9f52f39a.css">
    <script charset="utf-8"
        src="{{ asset('') }}static/js1743619988925/chunk-5576a184.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-60c8a75a.d6f6b692.css">
    <script charset="utf-8"
        src="{{ asset('') }}static/js1743619988925/chunk-60c8a75a.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-a7d8f170.c87a4291.css">
    <script charset="utf-8"
        src="{{ asset('') }}static/js1743619988925/chunk-a7d8f170.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-67912ed2.ae8d438d.css">

    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-00b1464f.674dbd13.css">
    <script charset="utf-8"
        src="{{ asset('') }}static/js1743619988925/chunk-00b1464f.d968e27a.1743619988925.js?v=1743619988925"></script>
    <script charset="utf-8"
        src="{{ asset('') }}static/js1743619988925/echarts.d968e27a.1743619988925.js?v=1743619988925"></script>
    <script charset="utf-8"
        src="{{ asset('') }}static/js1743619988925/chunk-0119f9da.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-0b116a05.250ed6be.css">
    <script charset="utf-8"
        src="{{ asset('') }}static/js1743619988925/chunk-0b116a05.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('') }}static/css/chunk-0dfccd70.12d33311.css">
    <script charset="utf-8"
        src="{{ asset('') }}static/js1743619988925/chunk-0dfccd70.d968e27a.1743619988925.js?v=1743619988925"></script>
</head>

<link rel="icon"  href="{{ asset('static/img/logo2.png') }}">

<style>
    .items-wrapper {
        transition: all 0.3s ease;
    }
</style>

<style>
    .card {
        background: linear-gradient(to bottom, #202020, #1a1a1a);
        border: 1px solid #444;
        border-radius: 20px;
        padding: 20px;
        width: 100%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        position: relative;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-header h2 {
        font-size: 18px;
        font-weight: 600;
    }

    .circle-btn {
        width: 24px;
        height: 24px;
        border: 1px solid #ccc;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .progress-ring {
        width: 120px;
        height: 60px;
        background-color: transparent;
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        margin: 30px auto 10px;
        position: relative;
    }

    .progress-icon {
        width: 100px;
        height: 100px;
        position: absolute;
        top: -3px;
        left: 50%;
        transform: translateX(-50%);
    }

    .text-center {
        text-align: center;
        margin-bottom: 20px;
    }

    .text-muted {
        color: rgba(255, 255, 255, 0.6);
        font-size: 14px;
    }

    .stats {
        font-size: 14px;
        margin-top: 10px;
    }

    .stats-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .stats-row span:last-child {
        font-weight: bold;
    }

    .highlight {
        color: #c5ff3e;
        font-weight: bold;
    }

    .card-footer {
        margin-top: 20px;
        text-align: center;
    }

    .cta-button {
        padding: 10px 20px;
        background-color: #c5ff3e;
        color: #000;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .cta-button:hover {
        background-color: #b6ec32;
    }
    .cname .has.off[data-v-4dfcd54a] {
    color: #f75555;
}
.bann .item .abs.css4[data-v-4dfcd54a] {
    color: #ffffff;
}
.bann .item .abs.css6[data-v-4dfcd54a] {
    color: #ffffff;
}
.bann .item .abs.css7[data-v-4dfcd54a] {
    color: #ffffff;
}
.bann .item .abs.css8[data-v-4dfcd54a] {
    color: #ffffff;
}
</style>

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-6e2d35de="" data-v-4dfcd54a="" class="page">
            <div data-v-4dfcd54a="" data-v-6e2d35de="" class="bg"></div>
            <div data-v-6e2d35de="" class="headers">
                <div data-v-b73557e2="" data-v-4dfcd54a="" class="head" data-v-6e2d35de="">
                    <div data-v-b73557e2="" class="safe"></div>
                    <div data-v-b73557e2="" class="container flex">
                        <div data-v-b73557e2="" class="back">
                            <a href="{{ route('user.profile') }}">
                                <img data-v-b73557e2="" src="{{ asset('') }}static/img/eroo.png"
                                    alt=""></a>
                        </div><!----><!----><!---->
                        <div data-v-b73557e2="" class="name tac"> Upgrade Level </div><!----><!----><!---->
                        <div data-v-b73557e2="" class="flex1"></div><!----><!----><!----><!----><!---->
                        <div data-v-b73557e2="" class="head_right"></div>
                    </div>
                    <div data-v-b73557e2=""><!----></div>
                </div>
            </div>
            <div data-v-6e2d35de="" id="scroll" class="content-container">
                <div data-v-6e2d35de="" id="content" class="content-scroll">
                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="home">
                        <div data-v-4dfcd54a="" data-v-6e2d35de="" class="container">
                            <div data-v-4dfcd54a="" data-v-6e2d35de="" class="itemBox">

                                <?php
                                $balance = round(Auth::user()->available_balance(), 2);
                                
                                ?>

                            @php
                            $vipRules = [
                                1 => ['amount' => 60,   'requires' => 0],
                                2 => ['amount' => 120,  'requires' => 1],
                                3 => ['amount' => 360,  'requires' => 2],
                                4 => ['amount' => 840,  'requires' => 3],
                                5 => ['amount' => 1680, 'requires' => 4],
                                6 => ['amount' => 3600, 'requires' => 5],
                                7 => ['amount' => 7560, 'requires' => 6],
                                8 => ['amount' => 15000,'requires' => 7],
                            ];
                            @endphp

                                <div class="bann">
                                    <div class="swiper-container">
                                        <div class="swiper-wrapper" style="">
                                            <!-- Slide G0 -->
                                            <div data-v-4dfcd54a="" class="swiper-slide"
                                                style="width: 361.364px; margin-right: 15px;">
                                                <div data-v-4dfcd54a="" data-v-6e2d35de="" class="cname">
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="name">VIP 1
                                                    </div>
                                                    @if($myRank>=1)
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="has">It has
                                                        reached this
                                                        level</div>
                                                    @else
                                                    <div data-v-4dfcd54a="" data-v-887483d6="" class="has off">Not reached this level</div>
                                                    @endif
                                                  
                                                </div>
                                                <div data-v-4dfcd54a="" class="item">
                                                    <div data-v-4dfcd54a="" class="abs css0">
                                                        <div data-v-4dfcd54a="" class="name" style="color:white;">
                                                            VIP 1</div>
                                                           
                                                            
                                                        

                                                            <div data-v-4dfcd54a="" class="val" style="color:white;">
                                                                @if($myRank == 1)
                                                                    Current level
                                                                @elseif($myRank > 1)
                                                                    Unlocked
                                                                @else
                                                                    Locked
                                                                @endif
                                                            </div>

                                                    </div><img data-v-4dfcd54a=""
                                                        src="{{ asset('') }}static/img/r1.png" alt=""
                                                        style="pointer-events: none;">
                                                </div>
                                                <div data-v-4dfcd54a data-v-7daccefc class="items-wrapper items"
                                                    data-index="0">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h2>VIP 1</h2>
                                                            <div class="circle-btn">→</div>
                                                        </div>
                                                        <div class="progress-ring">
                                                            <img class="progress-icon"
                                                                src="{{ asset('static/img/rank1.png') }}"
                                                                alt="Badge">
                                                        </div>
                                                        <div class="text-center">
                                                            <div class="text-muted">VIP 1</div>
                                                        </div>
                                                        <div class="stats">
                                                            <div class="stats-row"><span>Unlock
                                                                    Balance:</span><span>60.00</span></div>
                                                            <div class="stats-row"><span>Current
                                                                    Balance:</span><span>{{ $balance }}/
                                                                    60.00</span></div>
                                                            <div class="stats-row"><span>Current Downline:
                                                                </span><span>0/0</span>
                                                            </div>
                                                            <div class="stats-row"><span>Daily profit:</span><span>2
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Daily
                                                                    Orders:</span><span>6</span></div>
                                                            <div class="stats-row"><span>Saturday/Sunday Profit:
                                                                </span><span>1
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Contract for
                                                                    Days:</span><span>365</span></div>
                                                            <div class="stats-row"><span>Team Bonus: </span><span>6% |
                                                                    2% | 1%</span></div>
                                                        </div>

                                                        <div class="card-footer">
                                                        
                                                            @php
                                                                $vipLevel = 1; // ← Change this dynamically in each card (e.g. 1 for VIP1, 2 for VIP2...)
                                                                $rule = $vipRules[$vipLevel];
                                                                $requiredAmount = $rule['amount'];
                                                                $currentPackage = $user->package ?? 0;
                                                                $amountToPay = max(0, $requiredAmount - $currentPackage);
                                                            @endphp

                                                            @if ($myRank >= $vipLevel)
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;">
                                                                    Completed
                                                                </button>
                                                            @elseif ($myRank < $rule['requires'])
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                    title="Requires VIP {{ $rule['requires'] }} to unlock this">
                                                                    Locked
                                                                </button>
                                                            @elseif ($balance >= $amountToPay && $amountToPay > 0)
                                                                <form method="POST" action="{{ route('user.fundActivation') }}">
                                                                    @csrf
                                                                    <input type="hidden" name="rank" value="{{ $vipLevel }}">
                                                                    <input type="hidden" name="amount" value="{{ $amountToPay }}">
                                                                    <button type="submit" class="cta-button">
                                                                        Upgrade VIP {{ $vipLevel }} (${{ number_format($amountToPay, 2) }})
                                                                    </button>
                                                                </form>
                                                            @else
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                    title="You need ${{ number_format($amountToPay, 2) }} to upgrade">
                                                                    Insufficient Balance
                                                                </button>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            <!-- Slide G1 -->
                                            <div data-v-4dfcd54a=""
                                                class="swiper-slide"style="width: 361.364px; margin-right: 15px;">
                                                <div data-v-4dfcd54a="" data-v-6e2d35de="" class="cname">
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="name">VIP 2
                                                    </div>
                                                  
                                                        @if($myRank>=2)
                                                        <div data-v-4dfcd54a="" data-v-6e2d35de="" class="has">It has
                                                            reached this
                                                            level</div>
                                                        @else
                                                        <div data-v-4dfcd54a="" data-v-887483d6="" class="has off">Not reached this level</div>
                                                        @endif

                                                </div>
                                                <div data-v-4dfcd54a="" class="item">
                                                    <div data-v-4dfcd54a="" class="abs css1">
                                                        <div data-v-4dfcd54a="" class="name">VIP 2</div>
                                                       

                                                        <div data-v-4dfcd54a="" class="val" >
                                                            @if($myRank == 2)
                                                                Current level
                                                            @elseif($myRank > 2)
                                                                Unlocked
                                                            @else
                                                                Locked
                                                            @endif
                                                        </div>

                                                    </div><img data-v-4dfcd54a=""
                                                        src="{{ asset('') }}static/img/r2.png" alt=""
                                                        style="pointer-events: none;">
                                                </div>


                                                <div data-v-4dfcd54a data-v-7daccefc class="items-wrapper items"
                                                    data-index="1">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h2>VIP 2</h2>
                                                            <div class="circle-btn">→</div>
                                                        </div>
                                                        <div class="progress-ring">
                                                            <img class="progress-icon"
                                                                src="{{ asset('static/img/rank2.png') }}"
                                                                alt="Badge">
                                                        </div>
                                                        <div class="text-center">
                                                            <div class="text-muted">VIP 2</div>
                                                        </div>
                                                        <div class="stats">
                                                            <div class="stats-row"><span>Unlock
                                                                    Balance:</span><span>120.00</span></div>
                                                            <div class="stats-row"><span>Current
                                                                    Balance:</span><span>{{ $balance }}/
                                                                    120.00</span></div>
                                                            <div class="stats-row"><span>Current Downline:
                                                                </span><span>0/0</span>
                                                            </div>
                                                            <div class="stats-row"><span>Daily profit:</span><span>4
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Daily
                                                                    Orders:</span><span>6</span></div>
                                                            <div class="stats-row"><span>Saturday/Sunday Profit:
                                                                </span><span>2
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Contract for
                                                                    Days:</span><span>365</span></div>
                                                            <div class="stats-row"><span>Team Bonus: </span><span>6% |
                                                                    2% | 1%</span></div>
                                                        </div>


                                                        <div class="card-footer">
                                                            
                                                            @php
                                                                $vipLevel =2; // ← Change this dynamically in each card (e.g. 1 for VIP1, 2 for VIP2...)
                                                                $rule = $vipRules[$vipLevel];
                                                                $requiredAmount = $rule['amount'];
                                                                $currentPackage = $user->package ?? 0;
                                                                $amountToPay = max(0, $requiredAmount - $currentPackage);
                                                            @endphp

                                                            @if ($myRank >= $vipLevel)
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;">
                                                                    Completed
                                                                </button>
                                                            @elseif ($myRank < $rule['requires'])
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                    title="Requires VIP {{ $rule['requires'] }} to unlock this">
                                                                    Locked
                                                                </button>
                                                            @elseif ($balance >= $amountToPay && $amountToPay > 0)
                                                                <form method="POST" action="{{ route('user.fundActivation') }}">
                                                                    @csrf
                                                                    <input type="hidden" name="rank" value="{{ $vipLevel }}">
                                                                    <input type="hidden" name="amount" value="{{ $amountToPay }}">
                                                                    <button type="submit" class="cta-button">
                                                                        Upgrade VIP {{ $vipLevel }} (${{ number_format($amountToPay, 2) }})
                                                                    </button>
                                                                </form>
                                                            @else
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                    title="You need ${{ number_format($amountToPay, 2) }} to upgrade">
                                                                    Insufficient Balance
                                                                </button>
                                                            @endif
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div data-v-4dfcd54a=""
                                                class="swiper-slide"style="width: 361.364px; margin-right: 15px;">
                                                <div data-v-4dfcd54a="" data-v-6e2d35de="" class="cname">
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="name">VIP 3
                                                    </div>
                                                    @if($myRank>=3)
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="has">It has
                                                        reached this
                                                        level</div>
                                                    @else
                                                    <div data-v-4dfcd54a="" data-v-887483d6="" class="has off">Not reached this level</div>
                                                    @endif
                                                </div>
                                                <div data-v-4dfcd54a="" class="item">
                                                    <div data-v-4dfcd54a="" class="abs css2">
                                                        <div data-v-4dfcd54a="" class="name">VIP 3</div>
                                                        <div data-v-4dfcd54a="" class="val" >
                                                            @if($myRank == 3)
                                                                Current level
                                                            @elseif($myRank > 3)
                                                                Unlocked
                                                            @else
                                                                Locked
                                                            @endif
                                                        </div>

                                                    </div><img data-v-4dfcd54a=""
                                                        src="{{ asset('') }}static/img/r3.png" alt=""
                                                        style="pointer-events: none;">
                                                </div>


                                                <div data-v-4dfcd54a data-v-7daccefc class="items-wrapper items"
                                                    data-index="1">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h2>VIP 3</h2>
                                                            <div class="circle-btn">→</div>
                                                        </div>
                                                        <div class="progress-ring">
                                                            <img class="progress-icon"
                                                                src="{{ asset('static/img/rank3.png') }}"
                                                                alt="Badge">
                                                        </div>
                                                        <div class="text-center">
                                                            <div class="text-muted">VIP 3</div>
                                                        </div>
                                                        <div class="stats">
                                                            <div class="stats-row"><span>Unlock
                                                                    Balance:</span><span>360.00</span></div>
                                                            <div class="stats-row"><span>Current
                                                                    Balance:</span><span>{{ $balance }}/
                                                                    360.00</span></div>
                                                            <div class="stats-row"><span>Current Downline:
                                                                </span><span>0/0</span>
                                                            </div>
                                                            <div class="stats-row"><span>Daily profit:</span><span>12
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Daily
                                                                    Orders:</span><span>6</span></div>
                                                            <div class="stats-row"><span>Saturday/Sunday Profit:
                                                                </span><span>6
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Contract for
                                                                    Days:</span><span>365</span></div>
                                                            <div class="stats-row"><span>Team Bonus: </span><span>8% |
                                                                    3% | 1%</span></div>
                                                        </div>

                                                        <div class="card-footer">
                                                            @php
                                                                $vipLevel =3; // ← Change this dynamically in each card (e.g. 1 for VIP1, 2 for VIP2...)
                                                                $rule = $vipRules[$vipLevel];
                                                                $requiredAmount = $rule['amount'];
                                                                $currentPackage = $user->package ?? 0;
                                                                $amountToPay = max(0, $requiredAmount - $currentPackage);
                                                            @endphp

                                                            @if ($myRank >= $vipLevel)
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;">
                                                                    Completed
                                                                </button>
                                                            @elseif ($myRank < $rule['requires'])
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                    title="Requires VIP {{ $rule['requires'] }} to unlock this">
                                                                    Locked
                                                                </button>
                                                            @elseif ($balance >= $amountToPay && $amountToPay > 0)
                                                                <form method="POST" action="{{ route('user.fundActivation') }}">
                                                                    @csrf
                                                                    <input type="hidden" name="rank" value="{{ $vipLevel }}">
                                                                    <input type="hidden" name="amount" value="{{ $amountToPay }}">
                                                                    <button type="submit" class="cta-button">
                                                                        Upgrade VIP {{ $vipLevel }} (${{ number_format($amountToPay, 2) }})
                                                                    </button>
                                                                </form>
                                                            @else
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                    title="You need ${{ number_format($amountToPay, 2) }} to upgrade">
                                                                    Insufficient Balance
                                                                </button>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-4dfcd54a=""
                                                class="swiper-slide"style="width: 361.364px; margin-right: 15px;">

                                                <div data-v-4dfcd54a="" data-v-6e2d35de="" class="cname">
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="name">VIP 4
                                                    </div>
                                                    @if($myRank>=4)
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="has">It has
                                                        reached this
                                                        level</div>
                                                    @else
                                                    <div data-v-4dfcd54a="" data-v-887483d6="" class="has off">Not reached this level</div>
                                                    @endif
                                                </div>
                                                <div data-v-4dfcd54a="" class="item">
                                                    <div data-v-4dfcd54a="" class="abs css3">
                                                        <div data-v-4dfcd54a="" class="name">VIP 4</div>
                                                        <div data-v-4dfcd54a="" class="val" >
                                                            @if($myRank == 4)
                                                                Current level
                                                            @elseif($myRank > 4)
                                                                Unlocked
                                                            @else
                                                                Locked
                                                            @endif
                                                        </div>
                                                    </div><img data-v-4dfcd54a=""
                                                        src="{{ asset('') }}static/img/r4.png" alt=""
                                                        style="pointer-events: none;">
                                                </div>


                                                <div data-v-4dfcd54a data-v-7daccefc class="items-wrapper items"
                                                    data-index="1">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h2>VIP 4</h2>
                                                            <div class="circle-btn">→</div>
                                                        </div>
                                                        <div class="progress-ring">
                                                            <img class="progress-icon"
                                                                src="{{ asset('static/img/rank4.png') }}"
                                                                alt="Badge">
                                                        </div>
                                                        <div class="text-center">
                                                            <div class="text-muted">VIP 4</div>
                                                        </div>
                                                        <div class="stats">
                                                            <div class="stats-row"><span>Unlock
                                                                    Balance:</span><span>840.00</span></div>
                                                            <div class="stats-row"><span>Current
                                                                    Balance:</span><span>{{ $balance }}/
                                                                    840.00</span></div>
                                                            <div class="stats-row"><span>Current Downline:
                                                                </span><span>L1-3,L2+L3-12 of VIP3</span>
                                                            </div>
                                                            <div class="stats-row"><span>Daily profit:</span><span>28
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Daily
                                                                    Orders:</span><span>6</span></div>
                                                            <div class="stats-row"><span>Saturday/Sunday Profit:
                                                                </span><span>14
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Contract for
                                                                    Days:</span><span>365</span></div>
                                                            <div class="stats-row"><span>Team Bonus: </span><span>8% |
                                                                    3% | 1%</span></div>
                                                        </div>
                                                        <div class="card-footer">
                                                            @php
                                                            $vipLevel = 4;
                                                            $rule = $vipRules[$vipLevel];
                                                            $amountToPay = max(0, $rule['amount'] - $currentPackage);
                                                            $totalTeam23 = $gen_team2_VIP3 + $gen_team3_VIP3;
                                                            $canUpgrade = $myRank == 3 && $gen_team1_VIP3 >= 3 && $totalTeam23 >= 12;
                                                        @endphp
                                                        
                                                        @if ($myRank >= $vipLevel)
                                                            <button class="cta-button" disabled style="background: #888;">Completed</button>
                                                        @elseif ($myRank < $rule['requires'])
                                                            <button class="cta-button" disabled style="background: #888;" title="Requires VIP {{ $rule['requires'] }}">Locked</button>
                                                        @elseif ($balance >= $amountToPay && $amountToPay > 0 && $canUpgrade)
                                                            <form method="POST" action="{{ route('user.fundActivation') }}">
                                                                @csrf
                                                                <input type="hidden" name="rank" value="{{ $vipLevel }}">
                                                                <input type="hidden" name="amount" value="{{ $amountToPay }}">
                                                                <button type="submit" class="cta-button">
                                                                    Upgrade VIP 4 (${{ number_format($amountToPay, 2) }})
                                                                </button>
                                                            </form>
                                                        @elseif (!$canUpgrade)
                                                            <button class="cta-button" disabled style="background: #888;" title="Need VIP 3 + 3 Gen1 VIP3 + 12 Gen2/3 VIP3">Team Requirements Not Met</button>
                                                        @else
                                                            <button class="cta-button" disabled style="background: #888;" title="Need ${{ number_format($amountToPay, 2) }} to upgrade">Insufficient Balance</button>
                                                        @endif
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div data-v-4dfcd54a=""
                                                class="swiper-slide"style="width: 361.364px; margin-right: 15px;">
                                                <div data-v-4dfcd54a="" data-v-6e2d35de="" class="cname">
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="name">VIP 5
                                                    </div>
                                                    @if($myRank>=5)
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="has">It has
                                                        reached this
                                                        level</div>
                                                    @else
                                                    <div data-v-4dfcd54a="" data-v-887483d6="" class="has off">Not reached this level</div>
                                                    @endif
                                                </div>
                                                <div data-v-4dfcd54a="" class="item">
                                                    <div data-v-4dfcd54a="" class="abs css4">
                                                        <div data-v-4dfcd54a="" class="name">VIP 5</div>
                                                        <div data-v-4dfcd54a="" class="val" >
                                                            @if($myRank == 5)
                                                                Current level
                                                            @elseif($myRank > 5)
                                                                Unlocked
                                                            @else
                                                                Locked
                                                            @endif
                                                        </div>
                                                    </div><img data-v-4dfcd54a=""
                                                        src="{{ asset('') }}static/img/r5.png" alt=""
                                                        style="pointer-events: none;">
                                                </div>


                                                <div data-v-4dfcd54a data-v-7daccefc class="items-wrapper items"
                                                    data-index="1">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h2>VIP 5</h2>
                                                            <div class="circle-btn">→</div>
                                                        </div>
                                                        <div class="progress-ring">
                                                            <img class="progress-icon"
                                                                src="{{ asset('static/img/rank5.png') }}"
                                                                alt="Badge">
                                                        </div>
                                                        <div class="text-center">
                                                            <div class="text-muted">VIP 5</div>
                                                        </div>
                                                        <div class="stats">
                                                            <div class="stats-row"><span>Unlock
                                                                    Balance:</span><span>1680.00</span></div>
                                                            <div class="stats-row"><span>Current
                                                                    Balance:</span><span>{{ $balance }}/
                                                                    1680.00</span></div>
                                                            <div class="stats-row"><span>Current Downline:
                                                                </span><span>L1-3,L2+L3-25 of VIP4</span>
                                                            </div>
                                                            <div class="stats-row"><span>Daily profit:</span><span>60
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Daily
                                                                    Orders:</span><span>6</span></div>
                                                            <div class="stats-row"><span>Saturday/Sunday Profit:
                                                                </span><span>30
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Contract for
                                                                    Days:</span><span>365</span></div>
                                                            <div class="stats-row"><span>Team Bonus: </span><span>10% |
                                                                    3% | 2%</span></div>
                                                        </div>
                                                        <div class="card-footer">
                                                            @php
                                                            $vipLevel = 5;
                                                            $requiredAmount = 1680;
                                                            $requiredRank = 4;
                                                            $amountToPay = max(0, $requiredAmount - ($user->package ?? 0));
                                                            $canUpgrade = $myRank == $requiredRank && $gen_team1_VIP4 >= 3 && ($gen_team2_VIP4 + $gen_team3_VIP4) >= 25;
                                                        @endphp
                                                        
                                                        @if ($myRank >= $vipLevel)
                                                            <button class="cta-button" disabled style="background: #888; cursor: not-allowed;">Completed</button>
                                                        
                                                        @elseif ($myRank < $requiredRank)
                                                            <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                title="Requires VIP {{ $requiredRank }}">Locked</button>
                                                        
                                                        @elseif ($balance >= $amountToPay && $canUpgrade)
                                                            <form method="POST" action="{{ route('user.fundActivation') }}">
                                                                @csrf
                                                                <input type="hidden" name="rank" value="{{ $vipLevel }}">
                                                                <input type="hidden" name="amount" value="{{ $amountToPay }}">
                                                                <button type="submit" class="cta-button">Upgrade VIP 5 (${{ number_format($amountToPay, 2) }})</button>
                                                            </form>
                                                        
                                                        @elseif (!$canUpgrade)
                                                            <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                title="Requires: VIP 4 + 3 Gen1 VIP4 + 25 Gen2/3 VIP4">Team Requirements Not Met</button>
                                                        
                                                        @else
                                                            <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                title="You need ${{ number_format($amountToPay, 2) }} to upgrade">Insufficient Balance</button>
                                                        @endif
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div data-v-4dfcd54a=""
                                                class="swiper-slide"style="width: 361.364px; margin-right: 15px;">
                                                <div data-v-4dfcd54a="" data-v-6e2d35de="" class="cname">
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="name">VIP 6
                                                    </div>
                                                    @if($myRank>=6)
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="has">It has
                                                        reached this
                                                        level</div>
                                                    @else
                                                    <div data-v-4dfcd54a="" data-v-887483d6="" class="has off">Not reached this level</div>
                                                    @endif
                                                </div>
                                                <div data-v-4dfcd54a="" class="item">
                                                    <div data-v-4dfcd54a="" class="abs css6">
                                                        <div data-v-4dfcd54a="" class="name">VIP 6</div>
                                                        <div data-v-4dfcd54a="" class="val" >
                                                            @if($myRank == 6)
                                                                Current level
                                                            @elseif($myRank > 6)
                                                                Unlocked
                                                            @else
                                                                Locked
                                                            @endif
                                                        </div>
                                                    </div><img data-v-4dfcd54a=""
                                                        src="{{ asset('') }}static/img/r6.png" alt=""
                                                        style="pointer-events: none;">
                                                </div>


                                                <div data-v-4dfcd54a data-v-7daccefc class="items-wrapper items"
                                                    data-index="1">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h2>VIP 6</h2>
                                                            <div class="circle-btn">→</div>
                                                        </div>
                                                        <div class="progress-ring">
                                                            <img class="progress-icon"
                                                                src="{{ asset('static/img/rank6.png') }}"
                                                                alt="Badge">
                                                        </div>
                                                        <div class="text-center">
                                                            <div class="text-muted">VIP 6</div>
                                                        </div>
                                                        <div class="stats">
                                                            <div class="stats-row"><span>Unlock
                                                                    Balance:</span><span>3600.00</span></div>
                                                            <div class="stats-row"><span>Current
                                                                    Balance:</span><span>{{ $balance }}/
                                                                    3600.00</span></div>
                                                            <div class="stats-row"><span>Current Downline:
                                                                </span><span>L1-3,L2+L3-50 of VIP5</span>
                                                            </div>
                                                            <div class="stats-row"><span>Daily profit:</span><span>120
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Daily
                                                                    Orders:</span><span>6</span></div>
                                                            <div class="stats-row"><span>Saturday/Sunday Profit:
                                                                </span><span>60
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Contract for
                                                                    Days:</span><span>365</span></div>
                                                            <div class="stats-row"><span>Team Bonus: </span><span>10% |
                                                                    3% | 2%</span></div>
                                                        </div>
                                                        <div class="card-footer">
                                                            @php
                                                            $vipLevel = 6;
                                                            $requiredAmount = 3600;
                                                            $requiredRank = 5;
                                                            $amountToPay = max(0, $requiredAmount - ($user->package ?? 0));
                                                            $canUpgrade = $myRank == $requiredRank && $gen_team1_VIP5 >= 3 && ($gen_team2_VIP5 + $gen_team3_VIP5) >= 50;
                                                        @endphp
                                                        
                                                        @if ($myRank >= $vipLevel)
                                                            <button class="cta-button" disabled style="background: #888; cursor: not-allowed;">Completed</button>
                                                        
                                                        @elseif ($myRank < $requiredRank)
                                                            <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                title="Requires VIP {{ $requiredRank }}">Locked</button>
                                                        
                                                        @elseif ($balance >= $amountToPay && $canUpgrade)
                                                            <form method="POST" action="{{ route('user.fundActivation') }}">
                                                                @csrf
                                                                <input type="hidden" name="rank" value="{{ $vipLevel }}">
                                                                <input type="hidden" name="amount" value="{{ $amountToPay }}">
                                                                <button type="submit" class="cta-button">Upgrade VIP 6 (${{ number_format($amountToPay, 2) }})</button>
                                                            </form>
                                                        
                                                        @elseif (!$canUpgrade)
                                                            <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                title="Requires: VIP 5 + 3 Gen1 VIP5 + 50 Gen2/3 VIP5">Team Requirements Not Met</button>
                                                        
                                                        @else
                                                            <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                title="You need ${{ number_format($amountToPay, 2) }} to upgrade">Insufficient Balance</button>
                                                        @endif
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                            <div data-v-4dfcd54a=""
                                                class="swiper-slide"style="width: 361.364px; margin-right: 15px;">
                                                <div data-v-4dfcd54a="" data-v-6e2d35de="" class="cname">
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="name">VIP 7
                                                    </div>
                                                    @if($myRank>=7)
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="has">It has
                                                        reached this
                                                        level</div>
                                                    @else
                                                    <div data-v-4dfcd54a="" data-v-887483d6="" class="has off">Not reached this level</div>
                                                    @endif
                                                </div>
                                                <div data-v-4dfcd54a="" class="item">
                                                    <div data-v-4dfcd54a="" class="abs css7">
                                                        <div data-v-4dfcd54a="" class="name">VIP 7</div>
                                                        <div data-v-4dfcd54a="" class="val" >
                                                            @if($myRank == 7)
                                                                Current level
                                                            @elseif($myRank > 7)
                                                                Unlocked
                                                            @else
                                                                Locked
                                                            @endif
                                                        </div>
                                                    </div><img data-v-4dfcd54a=""
                                                        src="{{ asset('') }}static/img/r7.png" alt=""
                                                        style="pointer-events: none;">
                                                </div>


                                                <div data-v-4dfcd54a data-v-7daccefc class="items-wrapper items"
                                                    data-index="1">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h2>VIP 7</h2>
                                                            <div class="circle-btn">→</div>
                                                        </div>
                                                        <div class="progress-ring">
                                                            <img class="progress-icon"
                                                                src="{{ asset('static/img/rank7.png') }}"
                                                                alt="Badge">
                                                        </div>
                                                        <div class="text-center">
                                                            <div class="text-muted">VIP 7</div>
                                                        </div>
                                                        <div class="stats">
                                                            <div class="stats-row"><span>Unlock
                                                                    Balance:</span><span>7560.00</span></div>
                                                            <div class="stats-row"><span>Current
                                                                    Balance:</span><span>{{ $balance }}/
                                                                    7560.00</span></div>
                                                            <div class="stats-row"><span>Current Downline:
                                                                </span><span>L1-3,L2+L3-100 of VIP6</span>
                                                            </div>
                                                            <div class="stats-row"><span>Daily profit:</span><span>240
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Daily
                                                                    Orders:</span><span>6</span></div>
                                                            <div class="stats-row"><span>Saturday/Sunday Profit:
                                                                </span><span>120
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Contract for
                                                                    Days:</span><span>365</span></div>
                                                            <div class="stats-row"><span>Team Bonus: </span><span>12% |
                                                                    4% | 3%</span></div>

                                                            <div class="card-footer">
                                                                @php
                                                                $vipLevel = 7;
                                                                $requiredAmount = 7560;
                                                                $requiredRank = 6;
                                                                $amountToPay = max(0, $requiredAmount - ($user->package ?? 0));
                                                                $canUpgrade = $myRank == $requiredRank && $gen_team1_VIP6 >= 3 && ($gen_team2_VIP6 + $gen_team3_VIP6) >= 100;
                                                            @endphp
                                                            
                                                            @if ($myRank >= $vipLevel)
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;">Completed</button>
                                                            
                                                            @elseif ($myRank < $requiredRank)
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;" title="Requires VIP {{ $requiredRank }}">Locked</button>
                                                            
                                                            @elseif ($balance >= $amountToPay && $canUpgrade)
                                                                <form method="POST" action="{{ route('user.fundActivation') }}">
                                                                    @csrf
                                                                    <input type="hidden" name="rank" value="{{ $vipLevel }}">
                                                                    <input type="hidden" name="amount" value="{{ $amountToPay }}">
                                                                    <button type="submit" class="cta-button">Upgrade VIP 7 (${{ number_format($amountToPay, 2) }})</button>
                                                                </form>
                                                            
                                                            @elseif (!$canUpgrade)
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;" title="Requires: VIP 6 + 3 Gen1 VIP6 + 100 Gen2/3 VIP6">Team Requirements Not Met</button>
                                                            
                                                            @else
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;" title="You need ${{ number_format($amountToPay, 2) }} to upgrade">Insufficient Balance</button>
                                                            @endif
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div data-v-4dfcd54a=""
                                                class="swiper-slide"style="width: 361.364px; margin-right: 15px;">
                                                <div data-v-4dfcd54a="" data-v-6e2d35de="" class="cname">
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="name">VIP 8
                                                    </div>
                                                    @if($myRank>=8)
                                                    <div data-v-4dfcd54a="" data-v-6e2d35de="" class="has">It has
                                                        reached this
                                                        level</div>
                                                    @else
                                                    <div data-v-4dfcd54a="" data-v-887483d6="" class="has off">Not reached this level</div>
                                                    @endif
                                                </div>
                                                <div data-v-4dfcd54a="" class="item">
                                                    <div data-v-4dfcd54a="" class="abs css8">
                                                        <div data-v-4dfcd54a="" class="name">VIP 8</div>
                                                        <div data-v-4dfcd54a="" class="val" >
                                                            @if($myRank == 8)
                                                                Current level
                                                            @elseif($myRank > 8)
                                                                Unlocked
                                                            @else
                                                                Locked
                                                            @endif
                                                        </div>
                                                    </div><img data-v-4dfcd54a=""
                                                        src="{{ asset('') }}static/img/r8.png" alt=""
                                                        style="pointer-events: none;">
                                                </div>


                                                <div data-v-4dfcd54a data-v-7daccefc class="items-wrapper items"
                                                    data-index="1">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h2>VIP 8</h2>
                                                            <div class="circle-btn">→</div>
                                                        </div>
                                                        <div class="progress-ring">
                                                            <img class="progress-icon"
                                                                src="{{ asset('static/img/rank8.png') }}"
                                                                alt="Badge">
                                                        </div>
                                                        <div class="text-center">
                                                            <div class="text-muted">VIP 8</div>
                                                        </div>
                                                        <div class="stats">
                                                            <div class="stats-row"><span>Unlock
                                                                    Balance:</span><span>15000.00</span></div>
                                                            <div class="stats-row"><span>Current
                                                                    Balance:</span><span>{{ $balance }}/
                                                                        15000.00</span></div>
                                                            <div class="stats-row"><span>Current Downline:
                                                                </span><span>L1-3,L2+L3-250 of VIP7</span>
                                                            </div>
                                                            <div class="stats-row"><span>Daily profit:</span><span>480
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Daily
                                                                    Orders:</span><span>6</span></div>
                                                            <div class="stats-row"><span>Saturday/Sunday Profit:
                                                                </span><span>240
                                                                    USDT</span></div>
                                                            <div class="stats-row"><span>Contract for
                                                                    Days:</span><span>365</span></div>
                                                            <div class="stats-row"><span>Team Bonus: </span><span>12% |
                                                                    4% | 3%</span></div>

                                                            <div class="card-footer">
                                                                @php
                                                                $vipLevel = 8;
                                                                $requiredAmount = 15000;
                                                                $requiredRank = 7;
                                                                $amountToPay = max(0, $requiredAmount - ($user->package ?? 0));
                                                                $canUpgrade = $myRank == $requiredRank && $gen_team1_VIP7 >= 3 && ($gen_team2_VIP7 + $gen_team3_VIP7) >= 250;
                                                            @endphp
                                                            
                                                            @if ($myRank >= $vipLevel)
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;">Completed</button>
                                                            
                                                            @elseif ($myRank < $requiredRank)
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                    title="Requires VIP {{ $requiredRank }}">Locked</button>
                                                            
                                                            @elseif ($balance >= $amountToPay && $canUpgrade)
                                                                <form method="POST" action="{{ route('user.fundActivation') }}">
                                                                    @csrf
                                                                    <input type="hidden" name="rank" value="{{ $vipLevel }}">
                                                                    <input type="hidden" name="amount" value="{{ $amountToPay }}">
                                                                    <button type="submit" class="cta-button">Upgrade VIP 8 (${{ number_format($amountToPay, 2) }})</button>
                                                                </form>
                                                            
                                                            @elseif (!$canUpgrade)
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                    title="Requires: VIP 7 + 3 Gen1 VIP7 + 250 Gen2/3 VIP7">Team Requirements Not Met</button>
                                                            
                                                            @else
                                                                <button class="cta-button" disabled style="background: #888; cursor: not-allowed;"
                                                                    title="You need ${{ number_format($amountToPay, 2) }} to upgrade">Insufficient Balance</button>
                                                            @endif
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>





                                </div>







                                <!-- After .swiper-container -->



                                <!-- Repeat till data-index="6" for G6 -->


                            </div>
                        </div>
                    </div>
                </div>
            </div><!---->
        </div>
        <div data-v-a7d12cfc="" class="global-loading default" style="display: none;">
            <div data-v-a7d12cfc="" class="global-spinner"><img data-v-a7d12cfc=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAYAAAADgWq5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNC0xMlQxNTo0MTowNiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWU0ZGQwNmEtMWExNS1kYjRmLTkyZmQtZjIzNTAwNzJkMGNmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlGMTI0NjE1NTQzQzExRThCQzhCQzEyQjVDOUMzOEJGIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OUYxMjQ2MTU1NDNDMTFFOEJDOEJDMTJCNUM5QzM4QkYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjEyNDYxMjU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjEyNDYxMzU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZTRkZDA2YS0xYTE1LWRiNGYtOTJmZC1mMjM1MDA3MmQwY2YiIHN0RXZ0OndoZW49IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hddYGwAABHhJREFUWIXN2XuoFVUUx/HPXG9WmmIPJQtNwQwqe5paEI1pCBZCRvVXDwlKCsLpIURgIZZG1KEXRVJJWPRnIv3TAw/0UCsrUlBLLQ1T01Ip6eZr+mPPOHOP56jXcz3XHxzu3nv2nv29a/bstdaeyJIXdYOG4bLs77k4AzvQFyvxKw7gJ/xZHpjGSZcmam8Csg/uxU0Yi8HHMGYz1uAtfIh/uzrp8QBPwFO4HgfR1oWx52e/CViX3ef9rkwedWFJXIQncE+da7uwHcuwF1uQClbvi1G4tMF9V+GuNE5+6C7gUzANT2Joqb0Dm/A6XsO+I9yjD/7DaMzArTi1ps/iNE6mNAvcjqfxKE4rtS/BXHxytAnqqBcuwHQ8XnNtP0amcfJLo8FHWn/98QIeK8Fuw3W48ThhCbvFBsxEhMWla+3YEFUrfbsKfDpewcOKR/e5sBssPU7QusqWwTTBurlWN+rfCHg67i7V3xasurFZwHpK42QBxmFP1jQkqlbW1utbD3g0ygt7Fe7T2QLdrjROVmBSqWlkVK28WtuvHvB7pfImXNvNbA2VxsmXeKnU9FBUrVxT7lMLHGNkVt6JO/DPiQKspzROZuC3UtM7UbVyiLMMPBDzSvWFWHFC6RprrLCbwCU4ZOUy8G24OivvxCwneN02UhonWwSD5Xo3L5SBpypii/mCu+1JzRHcOwyPqpVhFMD9MSYr78OnLUWrozRO1gk7FCE8mEwBPE7hzVbiu5bSNdabpfKkqFqJcuCr0Dsrr1ETZPegPiiVJ6dxkubAQwW/TohTTxa1K4x3IKpWLmwToqfhWWMqpDEnhdI42SrENYSYpqNN2O+uyBojfN16tPqKqpV2fJNVD+LK3MJbS/0GtRqskdI42Y+zsmob/moTlkHuVQ7qHKifDCpnJtvbBMg8XmjD2S1HaqCoWhmgCDl3o1e+S3xf6tey6OwY1K4IxrZhcw68rNRpjJNHA4WsG7ancbI7B/5CcagxCv1aTVarLKS8OaumAuMh17xFsVb64YaW0tVXO27PyvuxiAL4oJC35Xq+dVwNdbEiDv5btmzL4eXcUnmEwpn0lGYpwoVFaZykdAbeJZziEB7HG0JY13JF1crlyE+BdmQsODynm60ImkcIS6WliqqVQXhO8MCEg5Yf8+u1wFvxANbjfoUHbImiaqU3XsbErGkf5qRx0pH3qXfcOj/79YSeFXaG3JAz0zjZUO7QzIF2tymLyp7BI4oXbYVg7U7qceCoWhmKBRhfal6NKWmcHPYOdeX0/EQoxkc6wy7FxDROfq83oKcsfIvw+MfXtC8VLLuj0cBmgXsLb/RIfCVkK72FrXGfELjsEXLGFHcK580DdI5zd2F2GieVo03YLPCDwqF3nmr1Ek6N1grfN7Zn/8xenNPgHsuFbxw/H8uEzQLvVLwH+UZ/pnDOQfg0UKsD2biPMS+Nk5VdmbBZ4IVCVjtVyAXPE2LYsjqEtGs9vhWCrM8cp1NqFviA4OdzXz9ESLcGC+Abhe9yy4Vk8o8m5/M/9rYMi48jzWIAAAAASUVORK5CYII="
                    alt=""></div>
        </div>
    </div>

    <div class="van-toast van-toast--middle van-toast--success" style="z-index: 2001; display: none;"><i
            class="van-icon van-icon-success van-toast__icon"><!----></i>
        <div class="van-toast__text">Login successful</div>
    </div><!---->
</body>

</html>
