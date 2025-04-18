<html class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>Registration</title>
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/css/intlTelInput.css" />

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
    <link href="/static/css/app.6328f701.css" rel="preload" as="style">
    <link href="/static/css/vant.d14f5539.css" rel="preload" as="style">
    <link href="/static/css/vant.d14f5539.css" rel="stylesheet">
    <link href="/static/css/app.6328f701.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/static/css/chunk-6f896b4e.5bb66763.css">
    <script charset="utf-8" src="/js1743619988925/chunk-6f896b4e.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="/static/css/chunk-5576a184.9f52f39a.css">
    <script charset="utf-8" src="/js1743619988925/chunk-5576a184.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="/static/css/chunk-60c8a75a.d6f6b692.css">
    <script charset="utf-8" src="/js1743619988925/chunk-60c8a75a.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="/static/css/chunk-a7d8f170.c87a4291.css">
    <script charset="utf-8" src="/js1743619988925/chunk-a7d8f170.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="/static/css/chunk-67912ed2.ae8d438d.css">
    <script charset="utf-8" src="/js1743619988925/chunk-67912ed2.d968e27a.1743619988925.js?v=1743619988925"></script>
    <link rel="stylesheet" type="text/css" href="/static/css/chunk-41993a66.791df78f.css">
    <script charset="utf-8" src="/js1743619988925/chunk-41993a66.d968e27a.1743619988925.js?v=1743619988925"></script>
</head>
<style>
    /* Country dropdown list text color (black) */
    .iti__country-list {
        color: black !important;
    }

    /* Optional: highlight color on hover */
    .iti__country:hover {
        background-color: #f0f0f0;
        color: black !important;
    }

    .page[data-v-792679aa] {
        background: none;
        background-size: 100% 100% !important;
    }

    .item[data-v-792679aa] {
        width:7.7rem;
        background: linear-gradient(180deg, #111116, #141519);
        padding: .48rem .28rem;
        border-radius: .32rem;
        padding-bottom: 1rem;
        background-size: 100% 100%;
        margin: 0 auto;
        border: .02rem solid hsla(0, 0%, 100%, .1);
    }

    .valMob .cname,
    .valMob .n {
        color: #ffffff;
        margin-bottom: .2rem;
    }
    .area_pop {
    color: #ffffff;
    background: #17181d;
}
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icons/6.6.6/css/flag-icons.min.css">
<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-6e2d35de="" data-v-792679aa="" class="page">
            <div data-v-6e2d35de="" class="headers">
                <div data-v-b73557e2="" data-v-792679aa="" class="head head_isModule" data-v-6e2d35de="">
                    <div data-v-b73557e2="" class="safe"></div>
                    <div data-v-b73557e2="" class="container flex"><!---->
                        <div data-v-b73557e2="" class="back"><img data-v-b73557e2=""
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVHgB7Ze9DcIwEIWf+W1ZgQ0oWIBJYBMoqekoEUJsQAsFA7ACYgCYAHNWbBGO2ICVEBf3SU9Ozufk6ZzYCSAIQrVorQekMVLEmrvqjLRMMnO6KpMNRGDMUbMn9VhXH3XjqZxhhroRc7GIuVjEXCwpmVM8oP2L8JI0R7a4N1lbFGtG5Lrji1LqYG7a+tLchrQjDUkdUteqE2iL8nif71pb0gHIbXUBcyvS2qTYc1d1nctRuXOeB0++r++FX/ZixY7VhxvowHgeU54xzymmOT9RFUd4r6L5QrmTFqQ2smekbcc6uXhRjOeG5HKP8BF4g6dIBTFZFmKyLMRkWYjJsvinyaj/YrMtUmO2xRvrOiMlWCUnSBFrcgJBEOrhAfmtScdij3WYAAAAAElFTkSuQmCC"
                                alt=""></div><!----><!----><!----><!----><!----><!---->
                        <div data-v-b73557e2="" class="flex1"></div><!----><!---->
                        <div data-v-b73557e2="" class="lang"><img data-v-b73557e2=""
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANtSURBVHgBxVmBcdswDIRzHUCdoOwE9QZlNsgI2iDpBM4GdieQO0GzAd0J5E5AZQJ5A5QIqRqCQFmylcvf4SSLJPAEQRKkV3AlENGGxzrI9/QskhBOQZokf4McVqvVAd4bgVQRZBOkxfnwQaogBpZGIrbF5VAtRjQoesRpHnNBHoLYIPWE+j5ICbcAda+1CoG90navdMAr+rYwFxiH1CnEnlMZN+RHdNTCY0XSIUH1ijkEpYdIuUllpSgzI3qsqFum7waH3nQwBTgcVsd7J8hXE/Q5jQTqo7S9pKwc61X4vRblFi4TtGNtFJJPOUXS7R5FXITfO14OEyH0PosyGdMtavGIcW3iMEodGfQuPT0O0c12J8pdxjl8KdtqFVDrJcYh2uBwKG4BEadYXzM7cnYXOe95jG4vFyaFI2TLZJN78c1Jqy5GwsMkvof0biAPSgZegrxCTAhOSSRMkm9BLJyTCQ1N0tF59RQSjM/aLNPgsR9HLzAT2N9ZpL4c7F3qWQ6HIPehJ19TDzscYT4a/p503gf5NdJmTT37jXpcWF4T+zO4hJnA/hrrRZnJePRF29ZoKArFAA9gCzOBMdNRCbI6e8HFS8P1iAG8kWAv1kfqOVatpRjk3voBH4+f7L24E4XTU573Q2+5uhMfHuHjwbe5kyRIcZJLoRr2fqunB4s6xp2EbK+5TSIo17QSWYKawTUEDTcMfXI2PCiJKEWbVyL4B3RlRLJiM7YR5bcQPHXEMGY3JGulzfETjO8KJUSPNuL7F5iPb+zdYH//z+HQJQstnIftmN7HGpMHDhBvDRoQQ5ZQMD3UoQe4nCyQ2O532g4HuViL53Rryvn2Vjg8p1uefT9P1lTI8czK6ByyW5isw+gUy+xsRB3T8y/2zxst6im/Y3V8+l2jfvPgsX8s6FAremVGP1zqcJjRklJ5aOKhcO2haafY9cKuySl6Ej2Rx06Z3Fq4TE62WYtyJ8rLSwp3kiT2D+4u14GMvorVr9l37eC+gylQGnrMX33YET1G8w7qCWoNU4HDi58OGxzGTPbiB5WLANQvQB3OuTxiBnYKSY9DD1dK20rUyc32acM6QrJLHi7h7RyDMbV3E+oT2SdYAhhjZo/LgUZm+eSYEfU4H/8vQOfYXMGVwDh7SShLMUn43xAklHhQOne89m+If/+wcMgdl847AAAAAElFTkSuQmCC"
                                alt=""></div>
                        <div data-v-b73557e2="" class="notice"><img data-v-b73557e2=""
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJNSURBVHgB7ZnRcYMwDEBFrgNkBHeC0g3SCXqdIGyQdIJ0g9IJ0g3STkA2SDKB6QTNBqoUzJ0RtkkIED767hTuQJaFZLBEImgJIk7pEBt5IFFC5UhyINmS7KMoOsIQkGMzkozkFy9jQ5JAX7BxEo3Xozt1lIwpE7FzJt4ZXX2mvoJrIANz9KcyI1mSxIHxsdHJPDbY9hLaQANXHqPrkFMBe5yJT4/N1aXGVuhOyQyuxDiqWztJigvHYL7zKXQE2yJJHfPMmwby3ck19wY9wbbFXDy3Cg3QYkAKPYP1dZn5FBOhqLtMa8DBqSMwiUtRKikYCCx2p0pwpIKM3hoGxpHqmX1xc6voWT7E6FqLZg3UL9wArO44/ERPJ1CUSzbfcDvsuU/l3B39zITSnDx/puOe5IPquBx6xCynBRSBkm+N2LX+UIR5Dj2B4WKkeFixuZQKv93bO6ewuejNJmIcl+Vbktw6x2FvVxKFWUI1peXcldZAOsi9wxMdH4XiA3SPbTMnuTdz7yHg4AnT4OxhOHJfUzWBkfPv4LU4HcSizFIwHDF6Sjt28CgUeS/mckdZ5w/QPbZNdm5n5q5uvVgvu0f1oi6rmV3AuQR6Aos6NORkGhlFDnFC8myN5xSkAxULvKuUH6CUdfkFxgTesO1oBOv9+OBthxfPA6NgDGDRi2j5cMAYMGmVkdM4QD8ecorTuUT3ByQtUxtBRxjD71DvK0rK7dN3PSd56u21hud9hfWR9p5WDDdfPjJs+OZ4B93xCv70lXBh8gNFtf51zl8Tf7SnafQ0q88oAAAAAElFTkSuQmCC"
                                alt=""></div><!---->
                        <div data-v-b73557e2="" class="head_right"></div>
                    </div>
                    <div data-v-b73557e2=""><!----></div>
                </div>
            </div>
            <div data-v-6e2d35de="" id="scroll" class="content-container">
                <div data-v-6e2d35de="" id="content" class="content-scroll">
                    <div data-v-792679aa="" data-v-6e2d35de="" class="container">
                        <form action="{{ route('registers') }}" method="POST" id="form-id">
                            {{ csrf_field() }}
                            <div data-v-792679aa="" data-v-6e2d35de="" class="logo flex">
                                <div data-v-792679aa="" data-v-6e2d35de="" class="icon"><img data-v-792679aa=""
                                        data-v-6e2d35de="" src="/static/img/logo.png" alt=""></div>
                                <div data-v-792679aa="" data-v-6e2d35de="" class="flex1">
                                    <div data-v-792679aa="" data-v-6e2d35de="" class="n">Hello,</div>
                                    <div data-v-366decca="" data-v-6e2d35de="" class="s">Welcome ttmdltd.com</div>
                                </div>
                            </div>
                            <div data-v-792679aa="" data-v-6e2d35de="" class="item valMob">
                                {{-- <div data-v-792679aa="" data-v-6e2d35de="" class="cname">Create Account</div> --}}
                                <div data-v-792679aa="" data-v-6e2d35de="" class="it">
                                    <div data-v-792679aa="" data-v-6e2d35de="" class="n">Name</div>
                                    <div data-v-792679aa="" data-v-6e2d35de="" class="val inp flex">
                                        <div data-v-792679aa="" data-v-6e2d35de="" class="ico"></div>
                                        <div data-v-792679aa="" data-v-6e2d35de="" class="flex1">
                                            <input data-v-792679aa="" name="name" data-v-6e2d35de=""
                                                type="text" placeholder="Enter your name"
                                                onkeyup="this.value=this.value.replace(/[ ]/g,'')"
                                                style="color:white;">
                                        </div>
                                    </div>
                                </div>
                                <div data-v-792679aa="" data-v-6e2d35de="" class="it">
                                    <div data-v-792679aa="" data-v-6e2d35de="" class="n">Mobile phone</div>
                                    <div data-v-792679aa="" data-v-6e2d35de="" class="val flex inp">
                                        <div data-v-39429002="" class="set_area" class="phone_code" id="phone_code"
                                            style="padding-left: 10px">
                                            <input type="hidden" id="country-name" name="country" value="CANADA">
                                            <input type="hidden" id="dial-code" name="dialCode" value="1">
                                            <input type="hidden" id="country_iso" name="country_iso"
                                                value="CA">
                                            <span data-v-39429002="" style="display: none;"></span><span
                                                data-v-39429002="">+1</span><!----><!----><!---->
                                            <img data-v-afb5025a="" class="icon" style="filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(245deg) brightness(104%) contrast(104%)"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADwSURBVHgB3ZI9CsJAEIXfbC6glT9Y6A2iIFpqZ+sN9AjeQG/gDfQmWgaFuDcwjZIydoKw465RCSHBJDbiB4HJ7M7HwFvg16FX0en0VgyeoAAEXrrufhbWGtvuN0moI76AlWhJ6Xgi/L0GYHgoip41MlM+hFLKgFkMdRkgL1r2nMVbGEodj5UaIyfMavrazmBFD33/7FUrjQsRRsgAAwt52K+jPSt+yfdPTrVWLxOoj08ydzeP9yltoN3ubkA0SJQxb/Vmw6QzgbQN+DZOTN702JqmzaUKE5N/JhoNIbMwlL6T1++Ug3iihbHtQcl8+AvuSPhz6vUs/okAAAAASUVORK5CYII="
                                                alt="">
                                        </div>
                                        <div data-v-792679aa="" data-v-6e2d35de="" class="flex flex1">
                                            <div data-v-792679aa="" data-v-6e2d35de="" class="ico"></div>
                                            <div data-v-792679aa="" data-v-6e2d35de="" class="flex1"><input
                                                    data-v-792679aa="" data-v-6e2d35de="" id="phone"
                                                    name="phone" type="tel" class="form-control"
                                                    placeholder="Enter phone number"
                                                    onkeyup="this.value=this.value.replace(/[ ]/g,'')"
                                                    style="color:white;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-792679aa="" data-v-6e2d35de="" class="it">
                                    <div data-v-792679aa="" data-v-6e2d35de="" class="n">invitation code</div>
                                    <div data-v-792679aa="" data-v-6e2d35de="" class="val inp flex">
                                        <div data-v-792679aa="" data-v-6e2d35de="" class="ico"></div>
                                        <div data-v-792679aa="" data-v-6e2d35de="" class="flex1"><input
                                                data-v-792679aa="" name="sponsor" data-v-6e2d35de="" type="text"
                                                placeholder="Invitation code cannot be empty"
                                                onkeyup="this.value=this.value.replace(/[ ]/g,'')"
                                                style="color:white;"></div>
                                    </div>
                                </div>
                                <div data-v-792679aa="" data-v-6e2d35de="" class="it">
                                    <div data-v-792679aa="" data-v-6e2d35de="" class="n">Login Password</div>
                                    <div data-v-792679aa="" data-v-6e2d35de="" class="flex inp val">
                                        <div data-v-792679aa="" data-v-6e2d35de="" class="ico"></div>
                                        <div data-v-792679aa="" data-v-6e2d35de="" class="flex1">
                                            <input id="password" data-v-792679aa="" name="password"
                                                data-v-6e2d35de=""
                                                placeholder="Please enter a password (6-20 alphanumeric characters)"
                                                onkeyup="this.value=this.value.replace(/[ ]/g,'')" type="password"
                                                style="color:white;">
                                        </div>
                                        <div style="color:#fff"data-v-792679aa="" data-v-6e2d35de="" class="yj"
                                            onclick="togglePassword('password')">
                                        </div>
                                    </div>
                                </div>


                                <div data-v-792679aa="" data-v-6e2d35de="" class="it">
                                    <div data-v-792679aa="" data-v-6e2d35de="" class="n">Confirm password</div>
                                    <div data-v-792679aa="" data-v-6e2d35de="" class="inp val flex">
                                        <div data-v-792679aa="" data-v-6e2d35de="" class="ico"></div>
                                        <div data-v-792679aa="" data-v-6e2d35de="" class="flex1">
                                            <input id="password_confirmation" data-v-792679aa=""
                                                name="password_confirmation" data-v-6e2d35de=""
                                                placeholder="Please enter your password again"
                                                onkeyup="this.value=this.value.replace(/[ ]/g,'')" type="password"
                                                style="color:white;">
                                        </div>
                                        <div data-v-792679aa="" data-v-6e2d35de="" class="yj"
                                            onclick="togglePassword('password_confirmation')">
                                        </div>
                                    </div>
                                </div>


                                <div data-v-792679aa="" data-v-6e2d35de="" class="box3">
                                    <div data-v-792679aa="" data-v-6e2d35de="" class="cache_account"
                                        style="display: flex; align-items: center;">
                                        <div data-v-792679aa="" role="" tabindex="0" aria-checked="true"
                                            class="" data-v-6e2d35de="">
                                            <div
                                                class="van-checkbox__icon van-checkbox__icon--square van-checkbox__icon--checked">
                                                <input type="checkbox" id="rememberPassword" name="rememberPassword"
                                                    data-v-336fb872>
                                            </div>
                                        </div><span data-v-792679aa="" data-v-6e2d35de=""
                                            style="margin-left: 0.14rem;">I have read the privacy agreement</span>
                                    </div>
                                </div>
                            </div>
                            <div data-v-792679aa="" data-v-6e2d35de="" class="go">
                                <div data-v-792679aa="" data-v-6e2d35de="" class="submit">
                                    <button data-v-366decca="" data-v-6e2d35de=""><img data-v-366decca=""
                                            data-v-6e2d35de="" src="/static/img/icon-go-on.310400ce.png"
                                            alt=""></button>
                                </div>
                            </div>

                            <div class="van-overlay" style="z-index: 2005;  display: none" id="overlay">
                            </div>
                            <div data-v-a84105cc="" class="van-popup van-popup--round van-popup--bottom"
                                style="z-index: 2010; display: none" id="popup">
                                <div data-v-a84105cc="" class="area_pop">
                                    <div data-v-a84105cc="" class="title rel"> Choose the international area
                                        code <div data-v-a84105cc="" class="abs"><i data-v-a84105cc=""
                                                id="cancel"
                                                class="fa-solid fa-xmark van-icon van-icon-cross"><!----></i>
                                        </div>
                                    </div>
                                    <div data-v-a84105cc="" class="so db">
                                        <div data-v-a84105cc="" class="ico"></div>
                                        <div data-v-a84105cc="" class="flexs"><input data-v-a84105cc=""
                                                type="text" placeholder="Area Code Search"
                                                id="country-search"autocomplete="off">
                                        </div><!---->

                                    </div>
                                    <ul data-v-a84105cc="">
                                        <div class="country-list" id="country-list"></div>
                                    </ul>

                                </div>
                            </div>

                            <p data-v-792679aa="" data-v-6e2d35de=""> Already have an account? <span
                                    data-v-792679aa="" data-v-6e2d35de=""><a href="{{ route('login') }}">Log in
                                        now</a></span></p>
                            {{-- <div data-v-792679aa="" data-v-6e2d35de="" class="dow_com">
                                <div data-v-792679aa="" data-v-6e2d35de="" class="download"><img data-v-792679aa=""
                                        data-v-6e2d35de=""
                                        src="data:image/png;base64,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"
                                        alt=""> APP download </div>
                            </div> --}}
                       
                    </div>
                    </form>
                    @include('partials.notify')

                </div><!---->
            </div>
        </div><!---->
    </div>
    <div data-v-a7d12cfc="" class="global-loading default" style="display: none;">
        <div data-v-a7d12cfc="" class="global-spinner"><img data-v-a7d12cfc=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAYAAAADgWq5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNC0xMlQxNTo0MTowNiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWU0ZGQwNmEtMWExNS1kYjRmLTkyZmQtZjIzNTAwNzJkMGNmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlGMTI0NjE1NTQzQzExRThCQzhCQzEyQjVDOUMzOEJGIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OUYxMjQ2MTU1NDNDMTFFOEJDOEJDMTJCNUM5QzM4QkYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjEyNDYxMjU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjEyNDYxMzU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZTRkZDA2YS0xYTE1LWRiNGYtOTJmZC1mMjM1MDA3MmQwY2YiIHN0RXZ0OndoZW49IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hddYGwAABHhJREFUWIXN2XuoFVUUx/HPXG9WmmIPJQtNwQwqe5paEI1pCBZCRvVXDwlKCsLpIURgIZZG1KEXRVJJWPRnIv3TAw/0UCsrUlBLLQ1T01Ip6eZr+mPPOHOP56jXcz3XHxzu3nv2nv29a/bstdaeyJIXdYOG4bLs77k4AzvQFyvxKw7gJ/xZHpjGSZcmam8Csg/uxU0Yi8HHMGYz1uAtfIh/uzrp8QBPwFO4HgfR1oWx52e/CViX3ef9rkwedWFJXIQncE+da7uwHcuwF1uQClbvi1G4tMF9V+GuNE5+6C7gUzANT2Joqb0Dm/A6XsO+I9yjD/7DaMzArTi1ps/iNE6mNAvcjqfxKE4rtS/BXHxytAnqqBcuwHQ8XnNtP0amcfJLo8FHWn/98QIeK8Fuw3W48ThhCbvFBsxEhMWla+3YEFUrfbsKfDpewcOKR/e5sBssPU7QusqWwTTBurlWN+rfCHg67i7V3xasurFZwHpK42QBxmFP1jQkqlbW1utbD3g0ygt7Fe7T2QLdrjROVmBSqWlkVK28WtuvHvB7pfImXNvNbA2VxsmXeKnU9FBUrVxT7lMLHGNkVt6JO/DPiQKspzROZuC3UtM7UbVyiLMMPBDzSvWFWHFC6RprrLCbwCU4ZOUy8G24OivvxCwneN02UhonWwSD5Xo3L5SBpypii/mCu+1JzRHcOwyPqpVhFMD9MSYr78OnLUWrozRO1gk7FCE8mEwBPE7hzVbiu5bSNdabpfKkqFqJcuCr0Dsrr1ETZPegPiiVJ6dxkubAQwW/TohTTxa1K4x3IKpWLmwToqfhWWMqpDEnhdI42SrENYSYpqNN2O+uyBojfN16tPqKqpV2fJNVD+LK3MJbS/0GtRqskdI42Y+zsmob/moTlkHuVQ7qHKifDCpnJtvbBMg8XmjD2S1HaqCoWhmgCDl3o1e+S3xf6tey6OwY1K4IxrZhcw68rNRpjJNHA4WsG7ancbI7B/5CcagxCv1aTVarLKS8OaumAuMh17xFsVb64YaW0tVXO27PyvuxiAL4oJC35Xq+dVwNdbEiDv5btmzL4eXcUnmEwpn0lGYpwoVFaZykdAbeJZziEB7HG0JY13JF1crlyE+BdmQsODynm60ImkcIS6WliqqVQXhO8MCEg5Yf8+u1wFvxANbjfoUHbImiaqU3XsbErGkf5qRx0pH3qXfcOj/79YSeFXaG3JAz0zjZUO7QzIF2tymLyp7BI4oXbYVg7U7qceCoWhmKBRhfal6NKWmcHPYOdeX0/EQoxkc6wy7FxDROfq83oKcsfIvw+MfXtC8VLLuj0cBmgXsLb/RIfCVkK72FrXGfELjsEXLGFHcK580DdI5zd2F2GieVo03YLPCDwqF3nmr1Ek6N1grfN7Zn/8xenNPgHsuFbxw/H8uEzQLvVLwH+UZ/pnDOQfg0UKsD2biPMS+Nk5VdmbBZ4IVCVjtVyAXPE2LYsjqEtGs9vhWCrM8cp1NqFviA4OdzXz9ESLcGC+Abhe9yy4Vk8o8m5/M/9rYMi48jzWIAAAAASUVORK5CYII="
                alt=""></div>
    </div>
    </div>
    <script src="https://code.jquery.com//jquery-3.3.1.min.js"></script>


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


    <script>
        $(document).ready(function() {

            $("#phone_code").click(function() {
                $("#popup").show();
                $("#overlay").show();
            });
            $("#cancel").click(function() {
                $("#popup").hide();
                $("#overlay").hide();
            });
        });
    </script>
    <?php
    $countries = \DB::table('country')
        ->select('phonecode as code', 'name', 'iso as flag')
        ->get()
        ->map(function ($country) {
            return [
                'code' => '+' . ltrim($country->code, '+'),
                'name' => $country->name,
                'flag' => strtolower($country->flag),
            ];
        })
        ->toArray();
    ?>
    <script>
        const countries = <?php echo json_encode($countries, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>;
    </script>
    <script>
        (function($) {
            function populateList(filteredCountries) {
                const $list = $('#country-list');
                $list.empty();
                filteredCountries.forEach(country => {
                    $list.append(`
                
                                                <li data-v-a84105cc="" class="db">
                    <div class="db" data-code="${country.code}" data-flag="${country.flag}">
                        <span class="fi fi-${country.flag}"></span>
                        ${country.name} (${country.code})
                    </div>
                    </li>
                    
                `);
                });
            }

            $(document).ready(function() {
                const $popup = $('#popup');
                const $overlay = $('#overlay');
                const $search = $('#country-search');
                const $countryList = $('#country-list');
                const $phone_code = $('#phone_code');
                const $country_iso = $('#country_iso');
                populateList(countries); // Initial population of the list

                // Show popup when input is focused
                $search.on('focus', function() {
                    $popup.show();
                    $overlay.show();
                });

                // Hide popup when clicking outside
                $overlay.on('click', function() {
                    $popup.hide();
                    $overlay.hide();
                });

                // Filter the list based on search input
                $search.on('input', function() {
                    const searchTerm = $(this).val().toLowerCase();
                    const filteredCountries = countries.filter(country =>
                        country.name.toLowerCase().includes(searchTerm) || country.code.includes(
                            searchTerm)
                    );
                    populateList(filteredCountries);
                });

                // Handle country selection
                $countryList.on('click', 'div', function() {
                    const countryCode = $(this).data('code');
                    const countryIso = $(this).data('flag'); // Correct way to get the ISO code
                    $phone_code.find('span').text(countryCode);
                    $('#country-name').val($(this).text().split('(')[0].trim());
                    $('#dial-code').val(countryCode.replace('+', ''));
                    $('#country_iso').val(countryIso.toUpperCase()); // Set the ISO code correctly
                    $popup.hide();
                    $overlay.hide();
                });
                // Hide popup when the close icon is clicked
                $('#cancel').on('click', function() {
                    $popup.hide();
                    $overlay.hide();
                });
            });
        }(jQuery));
    </script>
    <script>
        document.getElementById('form-id').addEventListener('submit', function(e) {
            const checkboxIcon = document.getElementById('checkbox-icon');

            // Check if the checkbox is in the checked state
            if (!checkboxIcon.classList.contains('van-checkbox__icon--checked')) {
                e.preventDefault(); // Prevent form submission
                iziToast.error({
                    message: 'Please check the box to continue.',
                    position: "topRight"
                });
            }
        });

        // Toggle checkbox state on click
        document.getElementById('checkbox').addEventListener('click', function() {
            const checkboxIcon = document.getElementById('checkbox-icon');
            checkboxIcon.classList.toggle('van-checkbox__icon--checked');
            checkboxIcon.classList.toggle('van-checkbox__icon--unchecked');
        });
    </script>


    <script>
        var input = document.querySelector('#phone');
        var info = document.querySelector('#info');
        var status = document.getElementById('status');
        var iti = window.intlTelInput(input, {
            initialCountry: "auto",
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // Load the utilities script
        });

        input.addEventListener('blur', function() {
            if (iti.isValidNumber()) {
                status.textContent = 'Valid number';
                status.className = 'valid-number';
            } else {
                status.textContent = 'Invalid number';
                status.className = 'invalid-number';
            }
        });

        input.addEventListener('countrychange', function() {
            updateCountryInfo(); // Update the information displayed when the country changes
        });

        function updateCountryInfo() {
            var countryData = iti.getSelectedCountryData();
            console.log(countryData)

            $('#country-name').val(countryData.name)
            $('#dial-code').val(countryData.dialCode)
            $('#country_iso').val(countryData.iso2)

        }

        // Initialize with the current selected country's info
        document.addEventListener('DOMContentLoaded', updateCountryInfo);
    </script>

    <script>
        function togglePassword(inputId) {
            const input = document.getElementById(inputId);
            input.type = input.type === "password" ? "text" : "password";
        }
    </script>



</body>

</html>
