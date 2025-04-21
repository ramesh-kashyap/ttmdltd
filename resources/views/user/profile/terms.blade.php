<html class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>Operation Center</title>
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
    <link rel="icon"  href="{{ asset('static/img/logo2.png') }}">

</head>

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-6e2d35de="" data-v-b01bcdbc="" class="page">
            <div data-v-b01bcdbc="" data-v-6e2d35de="" class="bg"></div>
            <div data-v-6e2d35de="" class="headers">
                <div data-v-b73557e2="" data-v-b01bcdbc="" class="head" data-v-6e2d35de="">
                    <div data-v-b73557e2="" class="safe"></div>
                    <div data-v-b73557e2="" class="container flex">
                        <div data-v-b73557e2="" class="back">



                          <a href="{{route('user.profile')}}">  <img data-v-b73557e2="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVHgB7Ze9DcIwEIWf+W1ZgQ0oWIBJYBMoqekoEUJsQ
                          AsFA7ACYgCYAHNWbBGO2ICVEBf3SU9Ozufk6ZzYCSAIQrVorQekMVLEmrvqjLRMMnO6KpMNRGDMUbMn9VhXH3XjqZxhhroRc7GI
                          uVjEXCwpmVM8oP2L8JI0R7a4N1lbFGtG5Lrji1LqYG7a+tLchrQjDUkdUteqE2iL8nif71pb0gHIbXUBcyvS2qTYc1d1nctRuXOeB0++r++FX
                          /ZixY7VhxvowHgeU54xzymmOT9RFUd4r6L5QrmTFqQ2smekbcc6uXhRjOeG5HKP8BF4g6dIBTFZFmKyLMRkWYjJsvinyaj/YrMtUmO2xRvrOiMlWC
                          UnSBFrcgJBEOrhAfmtScdij3WYAAAAAElFTkSuQmCC" alt=""> </a></div><!----><!----><!---->
                        <div data-v-b73557e2="" class="name tac"> Operation Center </div><!----><!----><!---->
                        <div data-v-b73557e2="" class="flex1"></div><!----><!----><!----><!----><!---->
                        <div data-v-b73557e2="" class="head_right"></div>
                    </div>
                    <div data-v-b73557e2=""><!----></div>
                </div>
            </div>
            <div data-v-6e2d35de="" id="scroll" class="content-container">
                <div data-v-6e2d35de="" id="content" class="content-scroll">
                    <div data-v-b01bcdbc="" data-v-6e2d35de="" class="container">
                        <div data-v-b01bcdbc="" data-v-6e2d35de="" class="item">
                            <h2 data-v-b01bcdbc="" data-v-6e2d35de="" style="display: none;"> Operation Center </h2>
                            <div data-v-b01bcdbc="" data-v-6e2d35de="" class="p">
                                <p><img src="https://lumex-all.s3.ap-southeast-1.amazonaws.com/upload/20250317/9154f1658c732d489c2f099765efa353.png"><br>
                                    TTMD is a platform providing investment, team management, and cryptocurrency revenue services. The following content is based on user input to ensure clarity and compliance with policies.</p>

                                <h3>&nbsp;</h3>

                                <p><span style="color:#2ecc71"><strong>Data Collection and Usage</strong></span><br>
                                    Policies may require users to provide information such as phone numbers, usernames, and passwords to create accounts, which are used for account management, risk control, and commission calculation purposes.</p>

                                <ul>
                                    <li>Collected personal information includes contact details, identity verification, financial transaction records, and team structure.</li>
                                    <li>Purposes of use include service provision, compliance operations, and platform improvement.<br>
                                        &nbsp;</li>
                                </ul>

                                <p><span style="color:#2ecc71"><strong>Data Sharing and Security</strong></span></p>

                                <ul>
                                    <li>Security measures include SSL encryption, regular data backups, and employee confidentiality agreements.</li>
                                    <li>Cross-border data transfer declarations are required under GDPR/CCPA.<br>
                                        &nbsp;</li>
                                </ul>

                                <p><span style="color:#2ecc71"><strong>User Rights</strong></span><br>
                                    Users have the right to access, correct, or delete personal information and may revoke authorization. Contact information will be provided to users to exercise these rights.</p>

                                <h3>&nbsp;</h3>

                                <h4><span style="color:#2ecc71">Background and Policy Framework</span></h4>

                                <p>TTMD provides services such as investment, team management, and revenue calculation. The privacy policy covers key modules such as data collection scope, usage, sharing, security measures, and user rights. Additionally, special clauses on cross-border transfers and dispute resolution address complex data processing scenarios.<br>
                                    &nbsp;</p>

                                <p>According to industry research on February 25, 2025, privacy policies for investment platforms typically need to comply with regulations such as GDPR (General Data Protection Regulation) and CCPA (California Consumer Privacy Act), particularly regarding cross-border data transfers and user rights. Lazard Asset Management's policy details data collection, usage, and EU user rights, while Investor's Business Daily emphasizes user choices and data security measures.<br>
                                    <br>
                                    <img src="https://lumex-all.s3.ap-southeast-1.amazonaws.com/upload/20250317/0297d0c67bf94cac6ab8fe45901052a4.png">
                                </p>

                                <h4><span style="color:#2ecc71">Policy Details</span></h4>

                                <p>The following is a detailed privacy policy structure based on user standards:</p>

                                <h5>&nbsp;</h5>

                                <ul>
                                    <li>Welcome to TTMD products and services! We are committed to strictly adhering to relevant laws and regulations to ensure the security of personal information.</li>
                                    <li>Please read this policy carefully. By agreeing, you acknowledge that you understand the purposes of collecting and using necessary information. For additional features or non-essential information processing, we will seek separate consent.<br>
                                        &nbsp;</li>
                                </ul>

                                <h5><span style="color:#2ecc71"><span style="font-size:14px">Business Operation Rules</span></span></h5>

                                <p>1. User Eligibility: Users must be at least 18 years old, reside in supported jurisdictions, and agree to comply with local laws.</p>

                                <p><strong>2. Basic User Services</strong>: Creating an account requires providing a phone number, username, and password; otherwise, users can only browse and search.</p>

                                <p><strong>3. Service Scope</strong>: Includes features such as investment, team management, and revenue calculation, as well as buying, selling, transferring, and storing supported digital assets (e.g., Bitcoin, Ethereum), potentially including advanced trading features.</p>

                                <p><strong>4. Service Agreement</strong>: Covers service scope, user obligations (e.g., identity verification, anti-money laundering), fee descriptions (transaction fees, withdrawal limits), liability limitations (market risk disclaimers, system failure compensation), and agreement termination (account suspension for violations, account cancellation process).</p>

                                <p>5. Prohibited Activities: Users are prohibited from engaging in illegal activities such as money laundering, arbitrage, or violating platform policies. Specific terms may be detailed in separate policies.</p>

                                <p>6. Security and Privacy: Involves SSL encryption, data backups, and employee confidentiality agreements, and must comply with GDPR, CCPA, and other regulations. See the privacy policy for details.</p>

                                <p>7. Dispute Resolution: Typically resolved through arbitration, involving the selection of arbitration institutions (e.g., JAMS) and waiver of jury trials. Specific procedures are outlined in the arbitration agreement.</p>

                                <p>8. Agreement Termination: TTMD may terminate the agreement without cause, with prior notice (usually two months). Users have 90 days post-termination to transfer assets.</p>

                                <p>9. User Control and Instructions: Users control their digital asset wallets and can withdraw assets at any time, subject to downtime, agreement requirements, and other policies.</p>

                                <p>10. Risks and Disclaimers: TTMD does not guarantee the value of digital assets and is not responsible for replacing lost, stolen, or damaged digital assets or private keys.</p>

                                <p>11. Fees and Charges: Users must pay various transaction fees, which may vary depending on the type of service (e.g., advanced trading). Fees are automatically deducted from accounts.<br>
                                    &nbsp;</p>

                                <h5>&nbsp;</h5>

                                <p><span style="color:#2ecc71">The following are the core sections of the privacy policy:</span></p>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p><img src="https://lumex-all.s3.ap-southeast-1.amazonaws.com/upload/20250317/f35aac2a77bc15d1512db20a0e18f722.png"></p>

                                <h5><span style="color:#2ecc71"><span style="font-size:14px">Special Clauses</span></span></h5>

                                <ul>
                                    <li><strong>Team Data</strong>: Must declare the storage method of hierarchical relationships among team members. Commission calculation data is retained for 15 years to meet tax and audit requirements.</li>
                                    <li><strong>Cross-Border Transfers</strong>: Must comply with GDPR/CCPA cross-border data transfer declarations to ensure compliance.<br>
                                        <br>
                                        This privacy policy framework aims to ensure transparency, adhere to international regulations, and protect the company and its users in the dynamic environment of investment and digital asset services.<br>
                                        <br>
                                        <br>
                                        <br>
                                        &nbsp;
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div data-v-b01bcdbc="" data-v-6e2d35de="" class="video rel" style="margin-top: 0.2rem; display: none;">
                            <ul data-v-b01bcdbc="" data-v-6e2d35de="" class="video_ul"></ul>
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
</body>

</html>