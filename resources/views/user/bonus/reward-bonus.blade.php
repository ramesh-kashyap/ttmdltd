<html class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>algorithmTransactionHistory</title>
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
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-7f362702.6a53b834.css">
    <script charset="utf-8" src="/js1743619988925/chunk-7f362702.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-5576a184.9f52f39a.css">
    <script charset="utf-8" src="/js1743619988925/chunk-5576a184.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-60c8a75a.d6f6b692.css">
    <script charset="utf-8" src="/js1743619988925/chunk-60c8a75a.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-a7d8f170.c87a4291.css">
    <script charset="utf-8" src="/js1743619988925/chunk-a7d8f170.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-00b1464f.674dbd13.css">
    <script charset="utf-8" src="/js1743619988925/chunk-00b1464f.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-67912ed2.ae8d438d.css">
    <script charset="utf-8" src="/js1743619988925/chunk-67912ed2.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-39d146b7.e86e8ed5.css">
    <script charset="utf-8" src="/js1743619988925/chunk-39d146b7.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-1d75aade.809442e7.css">
    <script charset="utf-8" src="/js1743619988925/chunk-1d75aade.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-6f896b4e.5bb66763.css">
    <script charset="utf-8" src="/js1743619988925/chunk-6f896b4e.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-375cccc2.6ddcb41c.css">
    <script charset="utf-8" src="/js1743619988925/chunk-375cccc2.d968e27a.1743619988925.js?v=1743619988925"></script>
</head>

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-6e2d35de="" data-v-3aef8d5d="" class="page">
            <div data-v-6e2d35de="" class="headers">
                <div data-v-b73557e2="" data-v-3aef8d5d="" class="head" data-v-6e2d35de="">
                    <div data-v-b73557e2="" class="safe"></div>
                    <div data-v-b73557e2="" class="container flex">
                        <div data-v-b73557e2="" class="back"><a href="{{route('user.profile')}}">
                            <img data-v-b73557e2="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c
                        6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVHgB7Ze9DcIwEIWf+W1ZgQ0oWIBJYBMoqekoEUJsQAsFA7ACYgCYAHNWbBGO2ICVEBf3SU9Ozufk6ZzYCSA
                        IQrVorQekMVLEmrvqjLRMMnO6KpMNRGDMUbMn9VhXH3XjqZxhhroRc7GIuVjEXCwpmVM8oP2L8JI0R7a4N1lbFGtG5Lrji1LqYG7a+tLchrQjDUkdUt
                        
                        eqE2iL8nif71pb0gHIbXUBcyvS2qTYc1d1nctRuXOeB0++r++FX/ZixY7VhxvowHgeU54xzymmOT9RFUd4r6L5QrmTFqQ2smekbcc6uXhRjOeG5HKP8B
                        F4g6dIBTFZFmKyLMRkWYjJsvinyaj/YrMtUmO2xRvrOiMlWCUnSBFrcgJBEOrhAfmtScdij3WYAAAAAElFTkSuQmCC" alt=""></a></div><!----><!----><!---->
                        <div data-v-b73557e2="" class="name tac"> algorithmTransactionHistory </div><!----><!----><!---->
                        <div data-v-b73557e2="" class="flex1"></div><!----><!----><!----><!----><!---->
                        <div data-v-b73557e2="" class="head_right"></div>
                    </div>
                    <div data-v-b73557e2=""><!----></div>
                </div>
            </div>
            <div data-v-6e2d35de="" id="scroll" class="content-container">
                <div data-v-6e2d35de="" id="content" class="content-scroll">
                    <div data-v-3aef8d5d="" data-v-6e2d35de="" class="container">
                        <ul data-v-3aef8d5d="" data-v-6e2d35de="" class="setList">
                            <li data-v-3aef8d5d="" data-v-6e2d35de=""><span data-v-3aef8d5d="" data-v-6e2d35de="">Date</span><img data-v-3aef8d5d="" data-v-6e2d35de="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACQSURBVHgB7dPBEYMgFIThJRVYAqVQUkpIB0kHKcVSQgexg/U5cnB0RkUUL/vNcPHw+AcBEBGRE5H88rg3StkQz3J+bY/Hjo7OVsRx0TkXUSqdxp/5flunkBsSmC/gbDb0mRHwwlVs+OfWgElIuxLQogbbqOF46eaGbx61cPli6gZMQkIKGVbAXdKvaSAiIhX0NA2573NFoLgAAAAASUVORK5CYII=" alt=""></li>
                        </ul>
                        <div data-v-3aef8d5d="" data-v-6e2d35de="" class="bott">
                            <div data-v-3aef8d5d="" role="feed" class="van-list" data-v-6e2d35de="">
                                <div data-v-3aef8d5d="" class="list-item">
                                    <div data-v-3aef8d5d="" class="abs level"><img data-v-3aef8d5d="" src="{{asset('')}}static/img/V0_icon.69de7dcc.png" alt=""> G0 </div>
                                    <div data-v-3aef8d5d="" class="cname">
                                        <div data-v-3aef8d5d="" class="ico"><img data-v-3aef8d5d="" src="https://lumex-all.s3.ap-southeast-1.amazonaws.com/upload/20250314/10fe269767ca7ce52db7e712a2594139.png" alt=""><img data-v-3aef8d5d="" src="https://lumex-all.s3.ap-southeast-1.amazonaws.com/upload/20250314/786be6bda5165fd7d883eb3eefde3a42.png" alt=""></div>
                                        <div data-v-3aef8d5d="" class="title">ETH-BNB</div>
                                    </div>
                                    <ul data-v-3aef8d5d="">
                                        <li data-v-3aef8d5d="" class="flex">
                                            <div data-v-3aef8d5d="" class="title">Order number</div>
                                            <div data-v-3aef8d5d="" class="val">QR20250404011926826RW7LYSN5OH5 <img data-v-3aef8d5d="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAExSURBVHgB7ZYhT8NAFMf/73qXIBcS/CS49VtMIrH9BuOTVCKLhGA2RxCkDjkEhMmqCQRpMEu4tY++OhC7ZuulE/cTp17f/5fXe8kROnD+cTOG1RkBEwZGOBACz9mY69VFUpCrWMLJ6mUfwX8lULLRsXIVsjVp3+FtX+lpt5lToBnXJTwhv9Qp4BOZwqACQhDQckynV2PLVcaMCf7d+DX8oiX8p66W8LBqXVC2rtOhwlsB9rjnnQQwMEEgCASB4xdQmy184hQw62/4gpgXToHR/buXKbSP0trMnALR1wZn6QtO3j7RBxLcnDlXOl7FSaG7fCQSp7ev2Ifnp4edT/+whkchUGJAFBH2u10dYMLCVaMqihL4mULJFM1cRSp/vCtqFcXNbs7RD2Uz1Vx6Sm9X8S+Ihl6Gr4U3ogAAAABJRU5ErkJggg==" alt=""></div>
                                        </li>
                                        <li data-v-3aef8d5d="" class="flex">
                                            <div data-v-3aef8d5d="" class="title">Trading Type</div>
                                            <div data-v-3aef8d5d="" class="val">OTC market maker</div>
                                        </li>
                                        <li data-v-3aef8d5d="" class="flex">
                                            <div data-v-3aef8d5d="" class="title">Trading currency</div>
                                            <div data-v-3aef8d5d="" class="val">ETH-BNB</div>
                                        </li>
                                        <li data-v-3aef8d5d="" class="flex">
                                            <div data-v-3aef8d5d="" class="title">Trading three parties</div>
                                            <div data-v-3aef8d5d="" class="val">LumeX Algo Vault v2.1</div>
                                        </li>
                                        <li data-v-3aef8d5d="" class="flex">
                                            <div data-v-3aef8d5d="" class="title">Investment Amount </div>
                                            <div data-v-3aef8d5d="" class="val">200<img data-v-3aef8d5d="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL+SURBVHgBxZc9TBRBFMf/s7e7nkHgoBEUzGJslMLD2FAhjSQ2SqGJFZDYS2mkYOmsCPQmQIwxkUIaExs/aKQxAiYQG3UTSMDGg1Mi3LI7zpu747539877+CULezOTeR/z5r23DAExXpkR+3fiDsAGwHiUcWZw8AjNMbA9zrgFxtbg8mWtWV+yhs29IPsyX8EvTMN27IfMxWhaYCAUNq+FtCnrvmmhEgWSFtuTAB/H/6CwGa1JKFLCI0UVkFbbiff0iupgaZo+WMwbSv7A+eePo1UWTkiDaO/8iRwP1MDyfAo8caJAKspXayg8o0Sz3peOiZMjSAZczYUThn0gZUmkB1Ku/4E6Io6ih45CpR/ink96LV68+QD9Z3tQDtPrbzH95V3Jefs4Qdd7XDHmzIjIXqOoNxwjFHeKHaL02hAijkjtqshUA8IDnivNT6/RooVzx67fQm/7Ofn+8ttnLIonm+0D/1LgAgMq44hyn4Ubv3YKxuL2UUbYnxhWflYQwwxRVahh+JUksr77TBtaToURPzosnNfD6G3rTG9K54uN2A584TBUUUZLVrjupjbcvXQNK7vfPS2MJw4LBPa2d2Ko6zKefv0o50sQUeBBf0cP7l3skxbmx8CWcPt26onbuQJoLV3boQtX0KqHvUSAdS1MxDy9IFwvNxPW7KcEteqnsZ/4m7OOxqTvU8ptxnbxZmvTy3pij3U9m1jlnEdRJtnJyS/plIRhTeGuu45GwYUCoo/7gMaxrGiOviQazEANZLWh5lWxxqgu8wXUn3nqCeQ1PHbdGdQZx3Gn6L9UYHfsiSVS8mw5G1B6lglKPEHyfg4MsySTXtX0mOrqpqiMtxGwK6ICVSGWdqybGV2y6Jh7ZIRCSk2bUuH6wbT1RE4qlhMOhmkhqo/cO1s4UbQO1sATBZanKVqMaKHID33lBmZRRMDRXsWEJ6d9kN5QmCky5ggCIr+WOV9wxPUuJTizNiDUvMr+kfMbTFGuUjOR/Xku/tBVXnMhPs9Fdk0mOH/+AWc9XkXOlIh6AAAAAElFTkSuQmCC" alt=""></div>
                                        </li>
                                        <li data-v-3aef8d5d="" class="flex">
                                            <div data-v-3aef8d5d="" class="title">Order income</div>
                                            <div data-v-3aef8d5d="" class="val">2.72313538 <img data-v-3aef8d5d="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL+SURBVHgBxZc9TBRBFMf/s7e7nkHgoBEUzGJslMLD2FAhjSQ2SqGJFZDYS2mkYOmsCPQmQIwxkUIaExs/aKQxAiYQG3UTSMDGg1Mi3LI7zpu747539877+CULezOTeR/z5r23DAExXpkR+3fiDsAGwHiUcWZw8AjNMbA9zrgFxtbg8mWtWV+yhs29IPsyX8EvTMN27IfMxWhaYCAUNq+FtCnrvmmhEgWSFtuTAB/H/6CwGa1JKFLCI0UVkFbbiff0iupgaZo+WMwbSv7A+eePo1UWTkiDaO/8iRwP1MDyfAo8caJAKspXayg8o0Sz3peOiZMjSAZczYUThn0gZUmkB1Ku/4E6Io6ih45CpR/ink96LV68+QD9Z3tQDtPrbzH95V3Jefs4Qdd7XDHmzIjIXqOoNxwjFHeKHaL02hAijkjtqshUA8IDnivNT6/RooVzx67fQm/7Ofn+8ttnLIonm+0D/1LgAgMq44hyn4Ubv3YKxuL2UUbYnxhWflYQwwxRVahh+JUksr77TBtaToURPzosnNfD6G3rTG9K54uN2A584TBUUUZLVrjupjbcvXQNK7vfPS2MJw4LBPa2d2Ko6zKefv0o50sQUeBBf0cP7l3skxbmx8CWcPt26onbuQJoLV3boQtX0KqHvUSAdS1MxDy9IFwvNxPW7KcEteqnsZ/4m7OOxqTvU8ptxnbxZmvTy3pij3U9m1jlnEdRJtnJyS/plIRhTeGuu45GwYUCoo/7gMaxrGiOviQazEANZLWh5lWxxqgu8wXUn3nqCeQ1PHbdGdQZx3Gn6L9UYHfsiSVS8mw5G1B6lglKPEHyfg4MsySTXtX0mOrqpqiMtxGwK6ICVSGWdqybGV2y6Jh7ZIRCSk2bUuH6wbT1RE4qlhMOhmkhqo/cO1s4UbQO1sATBZanKVqMaKHID33lBmZRRMDRXsWEJ6d9kN5QmCky5ggCIr+WOV9wxPUuJTizNiDUvMr+kfMbTFGuUjOR/Xku/tBVXnMhPs9Fdk0mOH/+AWc9XkXOlIh6AAAAAElFTkSuQmCC" alt=""></div>
                                        </li>
                                        <li data-v-3aef8d5d="" class="flex">
                                            <div data-v-3aef8d5d="" class="title">Appointment price</div>
                                            <div data-v-3aef8d5d="" class="val">200 <img data-v-3aef8d5d="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL+SURBVHgBxZc9TBRBFMf/s7e7nkHgoBEUzGJslMLD2FAhjSQ2SqGJFZDYS2mkYOmsCPQmQIwxkUIaExs/aKQxAiYQG3UTSMDGg1Mi3LI7zpu747539877+CULezOTeR/z5r23DAExXpkR+3fiDsAGwHiUcWZw8AjNMbA9zrgFxtbg8mWtWV+yhs29IPsyX8EvTMN27IfMxWhaYCAUNq+FtCnrvmmhEgWSFtuTAB/H/6CwGa1JKFLCI0UVkFbbiff0iupgaZo+WMwbSv7A+eePo1UWTkiDaO/8iRwP1MDyfAo8caJAKspXayg8o0Sz3peOiZMjSAZczYUThn0gZUmkB1Ku/4E6Io6ih45CpR/ink96LV68+QD9Z3tQDtPrbzH95V3Jefs4Qdd7XDHmzIjIXqOoNxwjFHeKHaL02hAijkjtqshUA8IDnivNT6/RooVzx67fQm/7Ofn+8ttnLIonm+0D/1LgAgMq44hyn4Ubv3YKxuL2UUbYnxhWflYQwwxRVahh+JUksr77TBtaToURPzosnNfD6G3rTG9K54uN2A584TBUUUZLVrjupjbcvXQNK7vfPS2MJw4LBPa2d2Ko6zKefv0o50sQUeBBf0cP7l3skxbmx8CWcPt26onbuQJoLV3boQtX0KqHvUSAdS1MxDy9IFwvNxPW7KcEteqnsZ/4m7OOxqTvU8ptxnbxZmvTy3pij3U9m1jlnEdRJtnJyS/plIRhTeGuu45GwYUCoo/7gMaxrGiOviQazEANZLWh5lWxxqgu8wXUn3nqCeQ1PHbdGdQZx3Gn6L9UYHfsiSVS8mw5G1B6lglKPEHyfg4MsySTXtX0mOrqpqiMtxGwK6ICVSGWdqybGV2y6Jh7ZIRCSk2bUuH6wbT1RE4qlhMOhmkhqo/cO1s4UbQO1sATBZanKVqMaKHID33lBmZRRMDRXsWEJ6d9kN5QmCky5ggCIr+WOV9wxPUuJTizNiDUvMr+kfMbTFGuUjOR/Xku/tBVXnMhPs9Fdk0mOH/+AWc9XkXOlIh6AAAAAElFTkSuQmCC" alt=""></div>
                                        </li>
                                        <li data-v-3aef8d5d="" class="flex">
                                            <div data-v-3aef8d5d="" class="title">Transaction price</div>
                                            <div data-v-3aef8d5d="" class="val">198.0982512 <img data-v-3aef8d5d="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL+SURBVHgBxZc9TBRBFMf/s7e7nkHgoBEUzGJslMLD2FAhjSQ2SqGJFZDYS2mkYOmsCPQmQIwxkUIaExs/aKQxAiYQG3UTSMDGg1Mi3LI7zpu747539877+CULezOTeR/z5r23DAExXpkR+3fiDsAGwHiUcWZw8AjNMbA9zrgFxtbg8mWtWV+yhs29IPsyX8EvTMN27IfMxWhaYCAUNq+FtCnrvmmhEgWSFtuTAB/H/6CwGa1JKFLCI0UVkFbbiff0iupgaZo+WMwbSv7A+eePo1UWTkiDaO/8iRwP1MDyfAo8caJAKspXayg8o0Sz3peOiZMjSAZczYUThn0gZUmkB1Ku/4E6Io6ih45CpR/ink96LV68+QD9Z3tQDtPrbzH95V3Jefs4Qdd7XDHmzIjIXqOoNxwjFHeKHaL02hAijkjtqshUA8IDnivNT6/RooVzx67fQm/7Ofn+8ttnLIonm+0D/1LgAgMq44hyn4Ubv3YKxuL2UUbYnxhWflYQwwxRVahh+JUksr77TBtaToURPzosnNfD6G3rTG9K54uN2A584TBUUUZLVrjupjbcvXQNK7vfPS2MJw4LBPa2d2Ko6zKefv0o50sQUeBBf0cP7l3skxbmx8CWcPt26onbuQJoLV3boQtX0KqHvUSAdS1MxDy9IFwvNxPW7KcEteqnsZ/4m7OOxqTvU8ptxnbxZmvTy3pij3U9m1jlnEdRJtnJyS/plIRhTeGuu45GwYUCoo/7gMaxrGiOviQazEANZLWh5lWxxqgu8wXUn3nqCeQ1PHbdGdQZx3Gn6L9UYHfsiSVS8mw5G1B6lglKPEHyfg4MsySTXtX0mOrqpqiMtxGwK6ICVSGWdqybGV2y6Jh7ZIRCSk2bUuH6wbT1RE4qlhMOhmkhqo/cO1s4UbQO1sATBZanKVqMaKHID33lBmZRRMDRXsWEJ6d9kN5QmCky5ggCIr+WOV9wxPUuJTizNiDUvMr+kfMbTFGuUjOR/Xku/tBVXnMhPs9Fdk0mOH/+AWc9XkXOlIh6AAAAAElFTkSuQmCC" alt=""></div>
                                        </li>
                                        <li data-v-3aef8d5d="" class="flex">
                                            <div data-v-3aef8d5d="" class="title">Complete Time</div>
                                            <div data-v-3aef8d5d="" class="val">04/04/2025 01:22:20</div>
                                        </li>
                                    </ul>
                                </div>
                             
                                <div class="van-list__finished-text">No more</div>
                                <div class="van-list__placeholder"></div>
                            </div>
                        </div>
                    </div>
                    <div data-v-554f6835="" data-v-3aef8d5d="" data-v-6e2d35de=""><!----></div><!---->
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
    <div class="van-toast van-toast--middle van-toast--success" style="z-index: 2005; display: none;"><i class="van-icon van-icon-success van-toast__icon"><!----></i>
        <div class="van-toast__text">Login successful</div>
    </div><!---->
</body>

</html>