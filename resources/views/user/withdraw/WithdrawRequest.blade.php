<html class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>{{siteName()}}</title>
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
    <script>window.addEventListener("error", function (event) {
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
        }</script>
    
    <link href="/js1743961793772/app.c573b101.1743961793772.js?v=1743961793772" rel="preload" as="script">
    <link href="/js1743961793772/axios.c573b101.1743961793772.js?v=1743961793772" rel="preload" as="script">
    <link href="/js1743961793772/compressorjs.c573b101.1743961793772.js?v=1743961793772" rel="preload" as="script">
    <link href="/js1743961793772/core-js.c573b101.1743961793772.js?v=1743961793772" rel="preload" as="script">
    <link href="/js1743961793772/crypto-js.c573b101.1743961793772.js?v=1743961793772" rel="preload" as="script">
    <link href="/js1743961793772/vant.c573b101.1743961793772.js?v=1743961793772" rel="preload" as="script">
    <link href="/js1743961793772/vendors~app.c573b101.1743961793772.js?v=1743961793772" rel="preload" as="script">
    <link href="/js1743961793772/vue.c573b101.1743961793772.js?v=1743961793772" rel="preload" as="script">
    <link href="/static/css/app.6328f701.css" rel="preload" as="style">
    <link href="/static/css/vant.d14f5539.css" rel="preload" as="style">
    <link href="/static/css/vant.d14f5539.css" rel="stylesheet">
    <link href="/static/css/app.6328f701.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/static/css/chunk-082d71fa.25d37f03.css">
    <script charset="utf-8" src="/js1743961793772/chunk-082d71fa.c573b101.1743961793772.js?v=1743961793772"></script>
   <link href="{{asset('')}}static/css/app.6328f701.css" rel="preload" as="style">
    <link href="{{asset('')}}static/css/vant.d14f5539.css" rel="preload" as="style">
    <link href="{{asset('')}}static/css/vant.d14f5539.css" rel="stylesheet">
    <link href="{{asset('')}}static/css/app.6328f701.css" rel="stylesheet">
    <script charset="utf-8" src="/js1743619988925/qrcodejs2.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-bc11d8ce.85a5c909.css">
    <script charset="utf-8" src="/js1743619988925/chunk-bc11d8ce.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-5576a184.9f52f39a.css">
    <script charset="utf-8" src="/js1743619988925/chunk-5576a184.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-60c8a75a.d6f6b692.css">
    <script charset="utf-8" src="/js1743619988925/chunk-60c8a75a.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-a7d8f170.c87a4291.css">
    <script charset="utf-8" src="/js1743619988925/chunk-a7d8f170.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-67912ed2.ae8d438d.css">
    <script charset="utf-8" src="/js1743619988925/chunk-67912ed2.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-7f362702.6a53b834.css">
    <script charset="utf-8" src="/js1743619988925/chunk-7f362702.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-00b1464f.674dbd13.css">
    <script charset="utf-8" src="/js1743619988925/chunk-00b1464f.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-375cccc2.6ddcb41c.css">
    <script charset="utf-8" src="/js1743619988925/chunk-375cccc2.d968e27a.1743619988925.js?v=1743619988925"></script>
    <script charset="utf-8" src="/js1743619988925/echarts.d968e27a.1743619988925.js?v=1743619988925"></script>
    <script charset="utf-8" src="/js1743619988925/chunk-0119f9da.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-0b116a05.250ed6be.css">
    <script charset="utf-8" src="/js1743619988925/chunk-0b116a05.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-115aa5d8.9d416f08.css">
    <script charset="utf-8" src="/js1743619988925/chunk-115aa5d8.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-5f936813.7deb1a32.css">
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-17ff7542.34892cae.css">
    <script charset="utf-8" src="/js1743619988925/chunk-17ff7542.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-747287e5.9009fee8.css">
    <script charset="utf-8" src="/js1743619988925/chunk-747287e5.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-6b11ef3e.540ca443.css">

    <link rel="icon"  href="{{ asset('static/img/logo2.png') }}">


    <style>
    .cnames {
        color: white;
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
            overflow: hidden; /* Prevents double scroll */
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
       
        .container {
    padding: 0 .26rem;
    background-color: #0f0e11;
}
 .flex{
    background: #0f0e11
}
.cname[data-v-c0dba864] {
    display: flex
;
    align-items: center;
    justify-content: space-between;
    color:    #96c906;
}
.blue[data-v-c0dba864] {
    color:    #96c906; ;
}
.str[data-v-c0dba864] {
    color:    #96c906; ;
    text-align: right;
    font-family: PingFang SC;
    font-size: .28rem;
}
.btn2 {
    height: .96rem;
    background:  #96c906; 
    border-radius: .2rem;
    color: var(--COcolor4);
    font-weight: 500;
    font-size: .32rem;
    width: 100%;
    border: 0;
}

    </style>
</head>

<body class="mein_cn">
    <div id="app" class="applang" style=" overflow-y: auto;  height: 100vh;">
        <div data-v-7daccefc="" data-v-c0dba864="" class="page">
            <div data-v-7daccefc="" class="headers">
                <div data-v-b73557e2="" data-v-c0dba864="" class="head" data-v-7daccefc="">
                    <div data-v-b73557e2="" class="safe"></div>
                    <div data-v-b73557e2="" class="container flex">
                        <div data-v-b73557e2="" class="back"><a href="{{route('user.asset')}}"><img data-v-b73557e2=""
                                src="{{ asset('') }}static/img/eroo.png"
                                alt=""></a></div><!----><!----><!---->
                        <div data-v-b73557e2="" class="name tac"style="color:white;" > @lang('Withdrawal') </div><!----><!----><!---->
                        <div data-v-b73557e2="" class="flex1"></div><!----><!----><!----><!----><!---->
                        <div data-v-b73557e2="" class="head_right"><a  href="{{route('user.Withdraw-History')}}"><img data-v-c0dba864="" data-v-b73557e2=""
                                src="{{ asset('') }}static/img/invest.png"
                                alt="" class="record_icon"></a></div>
                    </div>
                    <div data-v-b73557e2=""><!----></div>
                </div>
            </div>
            <form action="{{ route('user.Withdraw-Request') }}" methode="post"data-v-7daccefc="" id="scroll" class="content-container">
            {{ csrf_field() }}
            
            <div data-v-7daccefc="" id="content" class="content-scroll">
                    <div data-v-c0dba864="" data-v-7daccefc="" class="container"><!---->
                        <div data-v-c0dba864="" data-v-7daccefc="" class="item valMob">
                            <div data-v-c0dba864="" data-v-7daccefc="" class="cname" style="color:white;">@lang('Select Currency')</div>
                            <div data-v-c0dba864="" data-v-7daccefc="" class="inp flex">
                                <div data-v-c0dba864="" data-v-7daccefc="" class="icon"><img data-v-c0dba864=""
                                        data-v-7daccefc=""
                                        src="{{ asset('') }}static/img/usdt.png"
                                        alt=""></div>
                                <div data-v-c0dba864="" data-v-7daccefc="" class="flex1">
                                
                                <input data-v-c0dba864=""  value="USDT"
                                        data-v-7daccefc="" type="text" readonly="readonly"  style="color:white;"></div>
                                <div data-v-c0dba864="" data-v-7daccefc="" class="">
                             
                                        </div>
                            </div>
                        </div>
                        <div data-v-c0dba864="" data-v-7daccefc="" class="item valMob">
                            <div data-v-c0dba864="" data-v-7daccefc="" class="cname" style="color:white;">@lang('Select Network')</div>
                            <div data-v-c0dba864="" data-v-7daccefc="" class="inp flex">
                                <div data-v-c0dba864="" data-v-7daccefc="" class="icon"><img data-v-c0dba864=""
                                        data-v-7daccefc=""
                                        src="{{ asset('') }}static/img/wallet.png"
                                        alt=""></div>
                                <div data-v-c0dba864="" data-v-7daccefc="" class="flex1">
                                
                                <input    value="USDT" style="color:white;" data-v-c0dba864=""
                                        data-v-7daccefc="" type="text" readonly="readonly" style="color:white;"></div>
                                <div data-v-c0dba864="" data-v-7daccefc="" class="arr">
                                
                              
                                        
                                        </div>
                            </div>
                        </div>
                        <div data-v-c0dba864="" data-v-7daccefc="" class="item valMob">
                            <div data-v-c0dba864="" data-v-7daccefc="" class="cname" style="color:white;">@lang('Withdrawal Address')</div>
                            <div data-v-c0dba864="" data-v-7daccefc="" class="val inp flex">
                                <div data-v-c0dba864="" data-v-7daccefc="" class="flex1"><input data-v-c0dba864="" id="walletAddress"
                                        data-v-7daccefc="" type="text"  name="walletAddress"   value="{{Auth::user()->usdtBep20}}" 
                                        readonly="readonly" style="color:white;"></div>
                            </div>
                        </div>
                        <div data-v-c0dba864="" data-v-7daccefc="" class="item valMob">
                            <div data-v-c0dba864="" data-v-7daccefc="" class="cname" style="color:white;"> @lang('Withdrawal Amount') <div
                                    data-v-c0dba864="" data-v-7daccefc="" class="balance blue" style="color:white;">@lang('Available Balance'):
                                    {{ number_format(Auth::user()->available_balance(), 2) }} USDT</div>
                            </div>
                            <div data-v-c0dba864="" data-v-7daccefc="" class="inp val flex">
                                <div data-v-c0dba864="" data-v-7daccefc="" class="flex1"><input data-v-c0dba864=""
                                        data-v-7daccefc="" type="text"  min="20" name="amount" placeholder="Please enter the withdrawal amount"
                                        ></div>
                                
                            </div>
                        </div>
                        <div data-v-c0dba864="" data-v-7daccefc="" class="item valMob">
                            <div data-v-c0dba864="" data-v-7daccefc="" class="cname" style="color:white;">@lang('Verification Code')
                            </div>
                            <div data-v-c0dba864="" data-v-7daccefc="" class="inp val flex">
                            <input type="hidden" name="" id="emailId" value="{{ Auth::user()->email }}">
                                <div data-v-c0dba864="" data-v-7daccefc="" class="flex1"><input data-v-c0dba864=""
                                        data-v-7daccefc="" type="text" placeholder="Please enter the verfication code"
                                        name="code"></div>
                                <div data-v-c0dba864="" data-v-7daccefc="" class=" code-btn str"  class="">@lang('Get Code')</div>
                            </div>
                        </div>
                        <div data-v-c0dba864="" data-v-7daccefc="" class="item valMob">
                            <div data-v-c0dba864="" data-v-7daccefc="" class="cname" style="color:white;">@lang('Transaction Password')
                            </div>
                            <div data-v-c0dba864="" data-v-7daccefc="" class="inp val flex">
                                <div data-v-c0dba864="" data-v-7daccefc="" class="flex1"><input data-v-c0dba864=""
                                        data-v-7daccefc="" type="text" name="transaction_password" id="test-input" type="password" placeholder="Please enter the transaction password"
                                       ></div>
                               
                            </div>
                        </div>
                        <div data-v-c0dba864="" data-v-7daccefc="" class="item valMob">
                            <div data-v-c0dba864="" data-v-7daccefc="" class="tips">
                                <ul data-v-c0dba864="" data-v-7daccefc="">
                                    <li data-v-c0dba864="" data-v-7daccefc="" class="wrap bet">
                                        <div data-v-c0dba864="" data-v-7daccefc="" class="n"  >@lang('Arrival Amount')</div>
                                        <div data-v-c0dba864="" data-v-7daccefc="" class="s blue">NaN USDT</div>
                                    </li>
                                    <li data-v-c0dba864="" data-v-7daccefc="" class="wrap bet">
                                        <div data-v-c0dba864="" data-v-7daccefc="" class="n"> @lang('Withdraw Process Fee') 10 %
                                        </div>
                                        <div data-v-c0dba864="" data-v-7daccefc="" class="s">0 USDT</div>
                                    </li>
                                    <li data-v-c0dba864="" data-v-7daccefc="" class="wrap bet">
                                        <div data-v-c0dba864="" data-v-7daccefc="" class="n">@lang('Days to Free Withdrawal')
                                        </div><!---->
                                        <div data-v-c0dba864="" data-v-7daccefc=""><!---->
                                            <div data-v-c0dba864="" data-v-7daccefc="" class="s"> 15 days </div><!---->
                                        </div>
                                    </li>
                                    <li data-v-c0dba864="" data-v-7daccefc="" class="wrap bet">
                                        <div data-v-c0dba864="" data-v-7daccefc="" class="n">@lang('Minimum Withdrawal Amount')
                                        </div>
                                        <div data-v-c0dba864="" data-v-7daccefc="" class="s">100 USDT</div>
                                    </li>
                                    <li data-v-c0dba864="" data-v-7daccefc="" class="wrap bet">
                                        <div data-v-c0dba864="" data-v-7daccefc="" class="n">@lang('Maximum Withdrawal Amount')
                                        </div>
                                        <div data-v-c0dba864="" data-v-7daccefc="" class="s">500 USDT</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div data-v-c0dba864="" data-v-7daccefc="" class="item"><button data-v-c0dba864=""
                                data-v-7daccefc="" class="btn2"  type="submit"> @lang('Confirm')</button></div>
                        <div data-v-c0dba864="" data-v-7daccefc="" class="item">
                            <div data-v-58b133cc="" data-v-c0dba864="" class="tips">
                                <div data-v-58b133cc="" class="n" style="color:#96c906">@lang('Withdrawal Rules')</div>
                                <div data-v-58b133cc="" class="p">
                                    <p><span style="color:#96c906"><strong>@lang('Gas Fee Rate')</strong>:</span><br>
                                    @lang(' Withdrawal transactions require verification and processing by miners in the blockchain network, with Gas fees ranging from 3% to 7% of the transaction amount.')</p>
                                    <p><span style="color:#96c906"><strong>@lang('Free Withdrawal Benefit')</strong>:</span><br>
                                       @lang('Active users who have not initiated a withdrawal for 15 consecutive days will enjoy a one-time free withdrawal benefit.')</p>
                                    <p><span style="color:#96c906"><strong>@lang('Withdrawal Interval')</strong>:</span><br>
                                       @lang('After each withdrawal is credited, you must wait 24 hours before initiating the next withdrawal.')</p>
                                    <p><span style="color:#96c906"><strong>@lang('Processing Time')</strong>:</span><br>
                                       @lang ('Withdrawals will be processed according to the international blockchain T 4 rule, usually completed within 96 hours.')</p>
                                    <p><span style="color:#96c906"><strong>@lang('Minimum Withdrawal Amount')</strong>:</span><br> ('The amount for a single withdrawal must not be less than 50 USD.')</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-2ca52d3c="" data-v-c0dba864="" data-v-7daccefc=""><!----></div><!----><!---->
                    <div data-v-09790a45="" data-v-c0dba864="" data-v-7daccefc=""></div>
                </div>
            </form><!---->
        </div>
        <div data-v-a7d12cfc="" class="global-loading default" style="display: none;">
            <div data-v-a7d12cfc="" class="global-spinner"><img data-v-a7d12cfc=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAYAAAADgWq5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6
                    WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiP
                    z4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOT
                    I0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMD
                    IvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZ
                    S5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0
                    cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20
                    veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWx
                    
                    uczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvd
                    G9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNC0xMlQxNTo0MTowNiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWU0ZGQwNmEtMWExNS1kYjRmLTkyZmQtZjIzNTAwNzJkMGNmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlGMTI0NjE1NTQzQzExRThCQzhCQzEyQjVDOUMzOEJGIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OUYxMjQ2MTU1NDNDMTFFOEJDOEJDMTJCNUM5QzM4QkYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjEyNDYxMjU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjEyNDYxMzU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZTRkZDA2YS0xYTE1LWRiNGYtOTJmZC1mMjM1MDA3MmQwY2YiIHN0RXZ0OndoZW49IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hddYGwAABHhJREFUWIXN2XuoFVUUx/HPXG9WmmIPJQtNwQwqe5paEI1pCBZCRvVXDwlKCsLpIURgIZZG1KEXRVJJWPRnIv3TAw/0UCsrUlBLLQ1T01Ip6eZr+mPPOHOP56jXcz3XHxzu3nv2nv29a/bstdaeyJIXdYOG4bLs77k4AzvQFyvxKw7gJ/xZHpjGSZcmam8Csg/uxU0Yi8HHMGYz1uAtfIh/uzrp8QBPwFO4HgfR1oWx52e/CViX3ef9rkwedWFJXIQncE+da7uwHcuwF1uQClbvi1G4tMF9V+GuNE5+6C7gUzANT2Joqb0Dm/A6XsO+I9yjD/7DaMzArTi1ps/iNE6mNAvcjqfxKE4rtS/BXHxytAnqqBcuwHQ8XnNtP0amcfJLo8FHWn/98QIeK8Fuw3W48ThhCbvFBsxEhMWla+3YEFUrfbsKfDpewcOKR/e5sBssPU7QusqWwTTBurlWN+rfCHg67i7V3xasurFZwHpK42QBxmFP1jQkqlbW1utbD3g0ygt7Fe7T2QLdrjROVmBSqWlkVK28WtuvHvB7pfImXNvNbA2VxsmXeKnU9FBUrVxT7lMLHGNkVt6JO/DPiQKspzROZuC3UtM7UbVyiLMMPBDzSvWFWHFC6RprrLCbwCU4ZOUy8G24OivvxCwneN02UhonWwSD5Xo3L5SBpypii/mCu+1JzRHcOwyPqpVhFMD9MSYr78OnLUWrozRO1gk7FCE8mEwBPE7hzVbiu5bSNdabpfKkqFqJcuCr0Dsrr1ETZPegPiiVJ6dxkubAQwW/TohTTxa1K4x3IKpWLmwToqfhWWMqpDEnhdI42SrENYSYpqNN2O+uyBojfN16tPqKqpV2fJNVD+LK3MJbS/0GtRqskdI42Y+zsmob/moTlkHuVQ7qHKifDCpnJtvbBMg8XmjD2S1HaqCoWhmgCDl3o1e+S3xf6tey6OwY1K4IxrZhcw68rNRpjJNHA4WsG7ancbI7B/5CcagxCv1aTVarLKS8OaumAuMh17xFsVb64YaW0tVXO27PyvuxiAL4oJC35Xq+dVwNdbEiDv5btmzL4eXcUnmEwpn0lGYpwoVFaZykdAbeJZziEB7HG0JY13JF1crlyE+BdmQsODynm60ImkcIS6WliqqVQXhO8MCEg5Yf8+u1wFvxANbjfoUHbImiaqU3XsbErGkf5qRx0pH3qXfcOj/79YSeFXaG3JAz0zjZUO7QzIF2tymLyp7BI4oXbYVg7U7qceCoWhmKBRhfal6NKWmcHPYOdeX0/EQoxkc6wy7FxDROfq83oKcsfIvw+MfXtC8VLLuj0cBmgXsLb/RIfCVkK72FrXGfELjsEXLGFHcK580DdI5zd2F2GieVo03YLPCDwqF3nmr1Ek6N1grfN7Zn/8xenNPgHsuFbxw/H8uEzQLvVLwH+UZ/pnDOQfg0UKsD2biPMS+Nk5VdmbBZ4IVCVjtVyAXPE2LYsjqEtGs9vhWCrM8cp1NqFviA4OdzXz9ESLcGC+Abhe9yy4Vk8o8m5/M/9rYMi48jzWIAAAAASUVORK5CYII="
                    alt=""></div>
        </div><!---->
    </div>
    <script src="/js1743961793772/core-js.c573b101.1743961793772.js?v=1743961793772"></script>
    <script src="/js1743961793772/vue.c573b101.1743961793772.js?v=1743961793772"></script>
    <script src="/js1743961793772/vant.c573b101.1743961793772.js?v=1743961793772"></script>
    <script src="/js1743961793772/crypto-js.c573b101.1743961793772.js?v=1743961793772"></script>
    <script src="/js1743961793772/axios.c573b101.1743961793772.js?v=1743961793772"></script>
    <script src="/js1743961793772/compressorjs.c573b101.1743961793772.js?v=1743961793772"></script>
    <script src="/js1743961793772/vendors~app.c573b101.1743961793772.js?v=1743961793772"></script>
    <script src="/js1743961793772/app.c573b101.1743961793772.js?v=1743961793772"></script>
    <script>window.onload = function () {
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
        };</script><!----><!----><!---->
        <script src="https://code.jquery.com//jquery-3.3.1.min.js"></script>

            <script>
                $(function(){
                    $('input[name="amount"]').on('change keyup',function () {
                        let str = $(this).val();
                        str = str.replace(',','.');
                        $(this).val(str);
                        let min =  $('#min_withdrawal').val();
                        let max =  $('#max_withdrawal').val();

                        let charge = $('#chargeAmt').val();
                  
                        let amount = parseFloat(str);
                    
                    
                      
                     
                        if (amount>=min && amount<=max) 
                        {
                           
                        $(".submit-btn").prop("disabled", false);
                        $('.submit-btn').removeClass('van-button van-button--default van-button--disabled van-button--normal com-btn on');         
                        $('.submit-btn').addClass('van-button van-button--default  van-button--normal com-btn on');         
                        }
                        else
                        {
            
                        $(".submit-btn").prop("disabled", true);  
                        $('.submit-btn').removeClass('van-button van-button--default van-button--normal com-btn on');         
                        $('.submit-btn').addClass('van-button van-button--default van-button--disabled van-button--normal com-btn on');         
                        }
                        
                        if(amount<=10)
                        {
                              $('#ActualAmount').html(amount-amount*50/100+" USDT");  
                              $('#chargefee').html("5 USDT");  
                        }
                        else
                        {
                         $('#ActualAmount').html(amount-amount*charge/100+" USDT");
                            $('#chargefee').html(charge+" %");  
                        }
                      
                        
                    
                        //console.log(summ_usd);
                    });
            
                    $('input[name="PSys"]').change(function () {
                       
                        let icon = $(this).data('icon');
                        if (icon=="usdtTrc20") {
                            $('#walletAddress').val('{{Auth::user()->usdtTrc20}}');
                            
                        }else{
                            $('#walletAddress').val('{{Auth::user()->usdtBep20}}');
                        }
                        
                    });

                    $('.code-btn').click(function(e) {
            var ths = $(this);
            var emailId = $('#emailId').val();
       
            if (!emailId) 
            {
                iziToast.error({
            			message: 'Invalid Email!',
            			position: "topRight"
            		});
                    return false;
            }
            // alert(sponsor); 
            $.ajax({
                type: "POST"
                , url: "{{ route('user.send_code') }}"
                , data: {
                    "emailId": emailId
                    , "_token": "{{ csrf_token() }}"
                , }
                , success: function(response) {
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
            
            
                })
            
            </script>
            
            <script>
      $(document).ready(function() {
  
  $('#check').click(function(){
       
        if($(this).hasClass('fa-eye-slash')){
           
          $(this).removeClass('fa-eye-slash');
          
          $(this).addClass('fa-eye');
          
          $('#test-input').attr('type','text');
            
        }else{
         
          $(this).removeClass('fa-eye');
          
          $(this).addClass('fa-eye-slash');  
          
          $('#test-input').attr('type','password');
        }
    });
    
});
    </script>

    <div class="van-toast van-toast--middle van-toast--text" style="z-index: 2007; display: none;">
        <div class="van-toast__text">success</div>
    </div><!----><!---->
</body>

</html>