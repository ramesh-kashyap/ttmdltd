<html class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>Login</title>
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
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-3cf9912c.12730d60.css">
    <script charset="utf-8" src="/js1743619988925/chunk-3cf9912c.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-5576a184.9f52f39a.css">
    <script charset="utf-8" src="/js1743619988925/chunk-5576a184.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-60c8a75a.d6f6b692.css">
    <script charset="utf-8" src="/js1743619988925/chunk-60c8a75a.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-a7d8f170.c87a4291.css">
    <script charset="utf-8" src="/js1743619988925/chunk-a7d8f170.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-67912ed2.ae8d438d.css">
    <script charset="utf-8" src="/js1743619988925/chunk-67912ed2.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-75ff273e.12bb350e.css">
    <script charset="utf-8" src="/js1743619988925/chunk-75ff273e.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-747287e5.9009fee8.css">
    <script charset="utf-8" src="/js1743619988925/chunk-747287e5.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-7f362702.6a53b834.css">
    <script charset="utf-8" src="/js1743619988925/chunk-7f362702.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-00b1464f.674dbd13.css">
    <script charset="utf-8" src="/js1743619988925/chunk-00b1464f.d968e27a.1743619988925.js?v=1743619988925"></script>
    <script charset="utf-8" src="/js1743619988925/echarts.d968e27a.1743619988925.js?v=1743619988925"></script>
    <script charset="utf-8" src="/js1743619988925/chunk-0119f9da.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-bb17762c.89cc2aa3.css">
    <script charset="utf-8" src="/js1743619988925/chunk-bb17762c.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-05e98ee6.bea82fa2.css">
    <script charset="utf-8" src="/js1743619988925/chunk-05e98ee6.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-6b11ef3e.540ca443.css">
    <script charset="utf-8" src="/js1743619988925/chunk-6b11ef3e.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-3553982a.589d4855.css">
    <script charset="utf-8" src="/js1743619988925/chunk-3553982a.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-b2c9775c.b1e4da02.css">
    <script charset="utf-8" src="/js1743619988925/chunk-b2c9775c.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-39d146b7.e86e8ed5.css">
    <script charset="utf-8" src="/js1743619988925/chunk-39d146b7.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-6f896b4e.5bb66763.css">
    <script charset="utf-8" src="/js1743619988925/chunk-6f896b4e.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}static/css/chunk-375cccc2.6ddcb41c.css">
    <script charset="utf-8" src="/js1743619988925/chunk-375cccc2.d968e27a.1743619988925.js?v=1743619988925"></script>
</head>

<style>
    .item[data-v-366decca] {
    width: 7rem;
    background: linear-gradient(180deg, #111116, #141519);
    background-size: 100% 100%;
    padding: .48rem .28rem;
    border-radius: .32rem;
    padding-bottom: 1rem;
    margin: 0 auto;
    border: .02rem solid hsla(0, 0%, 100%, .1);
}
.valMob .cname, .valMob .n {
    color: #ffffff;
    margin-bottom: .2rem;
}
[data-v-366decca] .cache_account .van-checkbox__label {
    color: #ffffff;
}
.page[data-v-366decca] {
    height: 100vh;
    background: none;
    background-size: 100% 100% !important;
    position: relative;
    z-index: 100;
}
.valMob .inp input {
    height: .48rem;
    background: none;
    border: 0;
    width: 100%;
    color: #ffffff;
}
.go .wrap .wr[data-v-366decca] {
    color: #ffffff;
}
    </style>
<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-6e2d35de="" data-v-366decca="" class="page">
            <div data-v-6e2d35de="" class="headers">
                <div data-v-b73557e2="" data-v-366decca="" class="head head_isModule" data-v-6e2d35de="">
                    <div data-v-b73557e2="" class="safe"></div>
                    <div data-v-b73557e2="" class="container flex"><!---->
                        <div data-v-b73557e2="" class="back"><img data-v-b73557e2="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVHgB7Ze9DcIwEIWf+W1ZgQ0oWIBJYBMoqekoEUJsQAsFA7ACYgCYAHNWbBGO2ICVEBf3SU9Ozufk6ZzYCSAIQrVorQekMVLEmrvqjLRMMnO6KpMNRGDMUbMn9VhXH3XjqZxhhroRc7GIuVjEXCwpmVM8oP2L8JI0R7a4N1lbFGtG5Lrji1LqYG7a+tLchrQjDUkdUteqE2iL8nif71pb0gHIbXUBcyvS2qTYc1d1nctRuXOeB0++r++FX/ZixY7VhxvowHgeU54xzymmOT9RFUd4r6L5QrmTFqQ2smekbcc6uXhRjOeG5HKP8BF4g6dIBTFZFmKyLMRkWYjJsvinyaj/YrMtUmO2xRvrOiMlWCUnSBFrcgJBEOrhAfmtScdij3WYAAAAAElFTkSuQmCC" alt=""></div><!----><!----><!----><!----><!----><!---->
                        <div data-v-b73557e2="" class="flex1"></div><!----><!---->
                        <div data-v-b73557e2="" class="lang"><img data-v-b73557e2="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANtSURBVHgBxVmBcdswDIRzHUCdoOwE9QZlNsgI2iDpBM4GdieQO0GzAd0J5E5AZQJ5A5QIqRqCQFmylcvf4SSLJPAEQRKkV3AlENGGxzrI9/QskhBOQZokf4McVqvVAd4bgVQRZBOkxfnwQaogBpZGIrbF5VAtRjQoesRpHnNBHoLYIPWE+j5ICbcAda+1CoG90navdMAr+rYwFxiH1CnEnlMZN+RHdNTCY0XSIUH1ijkEpYdIuUllpSgzI3qsqFum7waH3nQwBTgcVsd7J8hXE/Q5jQTqo7S9pKwc61X4vRblFi4TtGNtFJJPOUXS7R5FXITfO14OEyH0PosyGdMtavGIcW3iMEodGfQuPT0O0c12J8pdxjl8KdtqFVDrJcYh2uBwKG4BEadYXzM7cnYXOe95jG4vFyaFI2TLZJN78c1Jqy5GwsMkvof0biAPSgZegrxCTAhOSSRMkm9BLJyTCQ1N0tF59RQSjM/aLNPgsR9HLzAT2N9ZpL4c7F3qWQ6HIPehJ19TDzscYT4a/p503gf5NdJmTT37jXpcWF4T+zO4hJnA/hrrRZnJePRF29ZoKArFAA9gCzOBMdNRCbI6e8HFS8P1iAG8kWAv1kfqOVatpRjk3voBH4+f7L24E4XTU573Q2+5uhMfHuHjwbe5kyRIcZJLoRr2fqunB4s6xp2EbK+5TSIo17QSWYKawTUEDTcMfXI2PCiJKEWbVyL4B3RlRLJiM7YR5bcQPHXEMGY3JGulzfETjO8KJUSPNuL7F5iPb+zdYH//z+HQJQstnIftmN7HGpMHDhBvDRoQQ5ZQMD3UoQe4nCyQ2O532g4HuViL53Rryvn2Vjg8p1uefT9P1lTI8czK6ByyW5isw+gUy+xsRB3T8y/2zxst6im/Y3V8+l2jfvPgsX8s6FAremVGP1zqcJjRklJ5aOKhcO2haafY9cKuySl6Ej2Rx06Z3Fq4TE62WYtyJ8rLSwp3kiT2D+4u14GMvorVr9l37eC+gylQGnrMX33YET1G8w7qCWoNU4HDi58OGxzGTPbiB5WLANQvQB3OuTxiBnYKSY9DD1dK20rUyc32acM6QrJLHi7h7RyDMbV3E+oT2SdYAhhjZo/LgUZm+eSYEfU4H/8vQOfYXMGVwDh7SShLMUn43xAklHhQOne89m+If/+wcMgdl847AAAAAElFTkSuQmCC" alt=""></div>
                        <div data-v-b73557e2="" class="notice"><img data-v-b73557e2="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJNSURBVHgB7ZnRcYMwDEBFrgNkBHeC0g3SCXqdIGyQdIJ0g9IJ0g3STkA2SDKB6QTNBqoUzJ0RtkkIED767hTuQJaFZLBEImgJIk7pEBt5IFFC5UhyINmS7KMoOsIQkGMzkozkFy9jQ5JAX7BxEo3Xozt1lIwpE7FzJt4ZXX2mvoJrIANz9KcyI1mSxIHxsdHJPDbY9hLaQANXHqPrkFMBe5yJT4/N1aXGVuhOyQyuxDiqWztJigvHYL7zKXQE2yJJHfPMmwby3ck19wY9wbbFXDy3Cg3QYkAKPYP1dZn5FBOhqLtMa8DBqSMwiUtRKikYCCx2p0pwpIKM3hoGxpHqmX1xc6voWT7E6FqLZg3UL9wArO44/ERPJ1CUSzbfcDvsuU/l3B39zITSnDx/puOe5IPquBx6xCynBRSBkm+N2LX+UIR5Dj2B4WKkeFixuZQKv93bO6ewuejNJmIcl+Vbktw6x2FvVxKFWUI1peXcldZAOsi9wxMdH4XiA3SPbTMnuTdz7yHg4AnT4OxhOHJfUzWBkfPv4LU4HcSizFIwHDF6Sjt28CgUeS/mckdZ5w/QPbZNdm5n5q5uvVgvu0f1oi6rmV3AuQR6Aos6NORkGhlFDnFC8myN5xSkAxULvKuUH6CUdfkFxgTesO1oBOv9+OBthxfPA6NgDGDRi2j5cMAYMGmVkdM4QD8ecorTuUT3ByQtUxtBRxjD71DvK0rK7dN3PSd56u21hud9hfWR9p5WDDdfPjJs+OZ4B93xCv70lXBh8gNFtf51zl8Tf7SnafQ0q88oAAAAAElFTkSuQmCC" alt=""></div><!---->
                        <div data-v-b73557e2="" class="head_right"></div>
                    </div>
                    <div data-v-b73557e2=""><!----></div>
                </div>
            </div>
            <div data-v-6e2d35de="" id="scroll" class="content-container">
                <div data-v-6e2d35de="" id="content" class="content-scroll">
                    <div data-v-366decca="" data-v-6e2d35de="" class="container">
                        <div data-v-366decca="" data-v-6e2d35de="" class="logo flex">
                            <div data-v-366decca="" data-v-6e2d35de="" class="icon"><img data-v-366decca="" data-v-6e2d35de="" src="{{asset('')}}static/img/logo.png" alt=""></div>
                            <div data-v-366decca="" data-v-6e2d35de="" class="flex1">
                                <div data-v-366decca="" data-v-6e2d35de="" class="n">Hello,</div>
                                <div data-v-366decca="" data-v-6e2d35de="" class="s">Welcome ttmdltd.com</div>
                            </div>
                        </div>
                        <form action="{{ route('loginAction') }}" method="POST" name="login_frm" id="form-id">
                            {{ csrf_field() }}
                            <div data-v-366decca="" data-v-6e2d35de="" class="item valMob">
                                <div data-v-366decca="" data-v-6e2d35de="" class="it">
                                    <div data-v-366decca="" data-v-6e2d35de="" class="n">Mobile phone</div>
                                    <div data-v-366decca="" data-v-6e2d35de="" class="val flex inp">
                                        <!-- <div data-v-366decca="" data-v-6e2d35de="" class="area"><span data-v-366decca="" data-v-6e2d35de="">+1</span><img data-v-366decca="" data-v-6e2d35de="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABHSURBVHgBzdA5DgAgCERR9OTjyZFEGxNBlsZfy4vQWKJCnYr9AQzKt2bljuB4OKgggut/nAjMpR4IXJdREN+wgoAybQTWmwn60N02tYiHWQAAAABJRU5ErkJggg==" alt=""></div> -->
                                        <div data-v-366decca="" data-v-6e2d35de="" class="flex1 rel flex">
                                            <div data-v-366decca="" data-v-6e2d35de="" class="ico"></div>
                                            <div data-v-366decca="" data-v-6e2d35de="" class="flex1"><input data-v-366decca="" name="phone" data-v-6e2d35de="" type="text" onkeyup="this.value=this.value.replace(/[ ]/g,'')" placeholder="Please enter your phone number"></div>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-366decca="" data-v-6e2d35de="" class="it">
                                    <div data-v-366decca="" data-v-6e2d35de="" class="n">Password</div>
                                    <div data-v-366decca="" data-v-6e2d35de="" class="flex inp val">
                                        <div data-v-366decca="" data-v-6e2d35de="" class="ico"></div>
                                        <div data-v-366decca="" data-v-6e2d35de="" class="flex1"><input data-v-366decca="" name="password" data-v-6e2d35de="" placeholder="Please enter your password" onkeyup="this.value=this.value.replace(/[ ]/g,'')" type="password"></div>
                                        <div data-v-366decca="" data-v-6e2d35de="" class="yj"><img data-v-366decca="" data-v-6e2d35de="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgB7ZjRUcMwDIaVHo8wAAxQBugAdAAYIAwQ3mEA4J0OQAYgA5QB4J0OAAPQAcJ70Q8KBGNZSmmvvSPfnS40je0vcSSbEvX0/GMWi8UBxxXHHm0bIjfleOK40yQHtAEgx4dbjn05NZT4xQ79baCRdHwggzVPoeaYc7xyvGRZNkvIgev2NW0y6i6FAXKO45aQBWQhMOW4ishNtYZuQXlHLkRsVSTlgEuQ5cZ8uCT/E/NgygFTkOUKPhS0Wj7kMCt8rFMXJrN4zXJ4l+9kDBU1i7lh7pTDE6joMwmQDLv0mdV4V8ekyzWZXPDnms9X5BWUDi7I5p5jEk4Tt3/jw6FDrgGSM/7+JRwgUwSnQQcxKu5wEmmr1TlNrgH18jQ8OYgMUJAth6ksaXVyYBh7HweRAXKyKSPTqsrJ3+dk33gersnhE8QdeGrdM3WTAzOywdh5SvCIHLRfZqccmJOPpGAnOsiBmpYgFKw8jWQv10UODMnHIxmCnjstOsqBMdlg7FIVlMz0PMXjLnKy2RiRDWrr6w8npUNPofbKWfWvYc79nIQntSTBMueZaktu5JQDZ7GT0bUYZYQ7Lym9HrdXCJSGB/ouJUiI2GZBYxJO7ZdLqlViu+VdvjxgVSq1L606iN1KvSk5kNoPNgJ7a5Crpa8H68LMkFtmV2IR3UNq7HSRa33Gwj8iv2QtYpWWDBpZRPCGfmafWkoS/7jPRQoy0Z3y0mA/Jr+V4DeTE9pGRNKzNPX09Gyad5wORBOvkbr0AAAAAElFTkSuQmCC"></div>
                                    </div>
                                </div>
                                <div data-v-366decca="" data-v-6e2d35de="" class="box3">
                                    <div data-v-366decca="" data-v-6e2d35de="" class="cache_account">
                                        <div data-v-366decca="" role="checkbox" tabindex="0" aria-checked="false" class="van-checkbox" data-v-6e2d35de="">
                                            <div class="van-checkbox__icon van-checkbox__icon--square">
                                            <input type="checkbox" name="" id="">    
                                            </div><span class="van-checkbox__label">Remember account password </span>
                                        </div>
                                    </div>
                                    <div data-v-366decca="" data-v-6e2d35de="" class="kfBox"> <a href="{{route('forgot-password')}}">Forgot password?</a> </div>
                                </div>
                            </div>
                     

                        <div data-v-366decca="" data-v-6e2d35de="" class="go">
                            <div data-v-366decca="" data-v-6e2d35de="" class="submit">
                                <button data-v-366decca="" data-v-6e2d35de=""><img data-v-366decca="" data-v-6e2d35de="" src="{{asset('')}}static/img/icon-go-on.310400ce.png" alt=""></button></div>
                            <div data-v-366decca="" data-v-6e2d35de="" class="wrap bet">
                                <div data-v-366decca="" data-v-6e2d35de="" class="wr"> No account <span data-v-366decca="" data-v-6e2d35de=""><a href="{{route('register')}}">
                                Register now
                                </a></span></div>
                            </div>
                        </div>
                        </form>
                        @include('partials.notify')
                    </div>
                    <div class="van-overlay" style="z-index: 2002; display: none;"></div>
                    <div data-v-366decca="" class="van-popup van-popup--round van-popup--bottom" style="z-index: 2003; display: none;">
                        <div data-v-366decca="" class="area_pop">
                            <div data-v-366decca="" class="title rel"> Choose an international phone area code <div data-v-366decca="" class="abs"><i data-v-366decca="" class="van-icon van-icon-cross"><!----></i></div>
                            </div>
                            <div data-v-366decca="" class="so db">
                                <div data-v-366decca="" class="ico"></div>
                                <div data-v-366decca="" class="flexs"><input data-v-366decca="" type="text" placeholder="Search area code"></div>
                                <div data-v-366decca="" class="closes"><img data-v-366decca="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACnUlEQVRYR82XMYwSQRSG/zewUnjamVxjY+yMsVM7RLK7BGys1PYiRs+YWGlnYXdWJuZOvTO22tkcCDNEpEM7Y+yMjY3R7o5L5IB5Zrhdwq3A7nFc9ujIvvnfN2/m/TNDiPir1+tzvV6vwMyXmfkcgFMAjnvDNwD8IKIvRPQhkUiUMplMK4o0hQVVKpXTQoiHAG4AOBoW733fAvBGa72Uy+W+TxozFqBcLqeSyeRjAPcBHImYOBi2DeBpt9t9lM/n26M0RgLU6/X5TqfzDsDFKRMHhzUty7qayWR+BT/8B9BoNM622+0SgJMzSu7L/EylUoV0Ov11WHcXgDfzzweQfABhWdb54UoMALw1/zjDso8rYLPb7V7y98QAQEq5BODBjMs+Tu6J4zims9AH8Frt2z52+165t7XWZ0yL9gGklGsAboapMPMmER2b2NdELWaeC9MC8MpxnCIZh+t0OqY9xpoMEbEQopDNZt9LKW8z8zIRieEkzKwB3HNdd0UpZRxzPQRiy7KsearVate01m8nBZuZu67r2y6UUgta6zUfwiQXQhRt237t6yilNsMqIYS4Tkqpl8x8K6xkRLRo2/bzoQR9CPM/mLxarS4S0XIEzVWSUjYBXAgLHjPLBTMuMPNd1QnR/WQAfgM4EQZgvo+CGB4XXJoImn8MwF8AqQjB/ZBxEFMkN3LtqQAAFF3XHWw4o7QfgNiXIN5NeBBtqJS6w8wrYfuKiFYjGRGAluM4AwuOYkTVanUjzLb7RhTFivunFtEV27ZLxmQAPBtlxUR013GcF1LKPBGtM/OkO+eOFe/lMDKVADDxoIlyYHlLs3MYHYrj2KtCfBcSAxD7lcxAxHop9Xs21mu5DxHrw8SHiPVpNmyhsT1Ogz5+UM/zf2S1w9S9MUNVAAAAAElFTkSuQmCC" alt=""></div>
                            </div>
                            <ul data-v-366decca="">
                                <li data-v-366decca="" class="db">
                                    <div data-v-366decca="" class="ico"><img data-v-366decca="" src="https://imgurl-all.s3.ap-east-1.amazonaws.com/country_url/IND.png" alt=""></div>
                                    <div data-v-366decca="" class="flexs txt"> India（+91） </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div><!---->
        </div>
        <div data-v-a7d12cfc="" class="global-loading default" style="display: none;">
            <div data-v-a7d12cfc="" class="global-spinner"><img data-v-a7d12cfc="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAYAAAADgWq5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNC0xMlQxNTo0MTowNiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWU0ZGQwNmEtMWExNS1kYjRmLTkyZmQtZjIzNTAwNzJkMGNmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlGMTI0NjE1NTQzQzExRThCQzhCQzEyQjVDOUMzOEJGIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OUYxMjQ2MTU1NDNDMTFFOEJDOEJDMTJCNUM5QzM4QkYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjEyNDYxMjU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjEyNDYxMzU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZTRkZDA2YS0xYTE1LWRiNGYtOTJmZC1mMjM1MDA3MmQwY2YiIHN0RXZ0OndoZW49IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hddYGwAABHhJREFUWIXN2XuoFVUUx/HPXG9WmmIPJQtNwQwqe5paEI1pCBZCRvVXDwlKCsLpIURgIZZG1KEXRVJJWPRnIv3TAw/0UCsrUlBLLQ1T01Ip6eZr+mPPOHOP56jXcz3XHxzu3nv2nv29a/bstdaeyJIXdYOG4bLs77k4AzvQFyvxKw7gJ/xZHpjGSZcmam8Csg/uxU0Yi8HHMGYz1uAtfIh/uzrp8QBPwFO4HgfR1oWx52e/CViX3ef9rkwedWFJXIQncE+da7uwHcuwF1uQClbvi1G4tMF9V+GuNE5+6C7gUzANT2Joqb0Dm/A6XsO+I9yjD/7DaMzArTi1ps/iNE6mNAvcjqfxKE4rtS/BXHxytAnqqBcuwHQ8XnNtP0amcfJLo8FHWn/98QIeK8Fuw3W48ThhCbvFBsxEhMWla+3YEFUrfbsKfDpewcOKR/e5sBssPU7QusqWwTTBurlWN+rfCHg67i7V3xasurFZwHpK42QBxmFP1jQkqlbW1utbD3g0ygt7Fe7T2QLdrjROVmBSqWlkVK28WtuvHvB7pfImXNvNbA2VxsmXeKnU9FBUrVxT7lMLHGNkVt6JO/DPiQKspzROZuC3UtM7UbVyiLMMPBDzSvWFWHFC6RprrLCbwCU4ZOUy8G24OivvxCwneN02UhonWwSD5Xo3L5SBpypii/mCu+1JzRHcOwyPqpVhFMD9MSYr78OnLUWrozRO1gk7FCE8mEwBPE7hzVbiu5bSNdabpfKkqFqJcuCr0Dsrr1ETZPegPiiVJ6dxkubAQwW/TohTTxa1K4x3IKpWLmwToqfhWWMqpDEnhdI42SrENYSYpqNN2O+uyBojfN16tPqKqpV2fJNVD+LK3MJbS/0GtRqskdI42Y+zsmob/moTlkHuVQ7qHKifDCpnJtvbBMg8XmjD2S1HaqCoWhmgCDl3o1e+S3xf6tey6OwY1K4IxrZhcw68rNRpjJNHA4WsG7ancbI7B/5CcagxCv1aTVarLKS8OaumAuMh17xFsVb64YaW0tVXO27PyvuxiAL4oJC35Xq+dVwNdbEiDv5btmzL4eXcUnmEwpn0lGYpwoVFaZykdAbeJZziEB7HG0JY13JF1crlyE+BdmQsODynm60ImkcIS6WliqqVQXhO8MCEg5Yf8+u1wFvxANbjfoUHbImiaqU3XsbErGkf5qRx0pH3qXfcOj/79YSeFXaG3JAz0zjZUO7QzIF2tymLyp7BI4oXbYVg7U7qceCoWhmKBRhfal6NKWmcHPYOdeX0/EQoxkc6wy7FxDROfq83oKcsfIvw+MfXtC8VLLuj0cBmgXsLb/RIfCVkK72FrXGfELjsEXLGFHcK580DdI5zd2F2GieVo03YLPCDwqF3nmr1Ek6N1grfN7Zn/8xenNPgHsuFbxw/H8uEzQLvVLwH+UZ/pnDOQfg0UKsD2biPMS+Nk5VdmbBZ4IVCVjtVyAXPE2LYsjqEtGs9vhWCrM8cp1NqFviA4OdzXz9ESLcGC+Abhe9yy4Vk8o8m5/M/9rYMi48jzWIAAAAASUVORK5CYII=" alt=""></div>
        </div>
    </div>
    <script src="/js1743619988925/core-js.d968e27a.1743619988925.js?v=1743619988925"></script>
    <script src="/js1743619988925/vue.d968e27a.1743619988925.js?v=1743619988925"></script>
    <script src="/js1743619988925/vant.d968e27a.1743619988925.js?v=1743619988925"></script>
    <script src="/js1743619988925/crypto-js.d968e27a.1743619988925.js?v=1743619988925"></script>
    <script src="/js1743619988925/axios.d968e27a.1743619988925.js?v=1743619988925"></script>
    <script src="/js1743619988925/compressorjs.d968e27a.1743619988925.js?v=1743619988925"></script>
    <script src="/js1743619988925/vendors~app.d968e27a.1743619988925.js?v=1743619988925"></script>
    <script src="/js1743619988925/app.d968e27a.1743619988925.js?v=1743619988925"></script>
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
    <div class="van-toast van-toast--middle van-toast--text" style="z-index: 2005; display: none;">
        <div class="van-toast__text">Exit successfully</div>
    </div><!---->
</body>

</html>