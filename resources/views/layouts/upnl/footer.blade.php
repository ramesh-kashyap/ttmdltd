<style>
    .footers .item div.on span[data-v-2620cc76] {
        color: #efefef;
    }
  /* From Uiverse.io by mrhyddenn */ 
  .footer .loader {
  position: relative;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 25px 25px 75px rgba(0,0,0,0.55);
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-left: 16px;
  cursor: pointer;
}

.footer  .footer.loader::before {
  content: '';
  position: absolute;
  inset: 20px;
  background: transparent;
  border: 1px dashed#444;
  border-radius: 50%;
  box-shadow: inset -5px -5px 25px rgba(0,0,0,0.25),
  inset 5px 5px 35px rgba(0,0,0,0.25);
}

.footer .loader::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px dashed#444;
  box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25), inset 5px 5px 35px rgb(11, 229, 116);
}

.footer .loader span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 100%;
  background: transparent;
  transform-origin: top left;
  animation: radar81 2s linear infinite;
  border-top: 1px dashed #fff;
}

.footer .loader span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: seagreen;
  transform-origin: top left;
  transform: rotate(-55deg);
  filter: blur(30px) drop-shadow(20px 20px 20px seagreen);
}

@keyframes radar81 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.footers[data-v-2620cc76] {
width: 100%;
min-height: auto;
border-radius: .32rem .32rem 0 0;
padding: .12rem .1rem .12rem .1rem;
display: flex;
align-items: center;
justify-content: center;
background: #111015;
border: .02rem solid hsla(0, 0%, 100%, .12);
}
</style>
<div data-v-6e2d35de="" class="footer">
    <div data-v-2620cc76="" data-v-32fa28da="" class="footers" data-v-6e2d35de="">
    <div data-v-2620cc76="" class="item">


    <a href="{{ route('user.dashboard') }}">
    <div data-v-2620cc76="">
        <img data-v-2620cc76=""
             src="{{ Request::is('user/dashboard') ? asset('static/img/i1.png') : asset('static/img/home1.png') }}"
             alt="">
        <span data-v-2620cc76="">Home</span>
    </div>


</a>
</div>

        <div data-v-2620cc76="" class="item item_active" >

        <a href="{{ route('user.asset') }}">
            <div data-v-2620cc76="" class="on">
            <img data-v-2620cc76=""
             src="{{ Request::is('user/asset') ? asset('static/img/i2.png') : asset('static/img/home2.png') }}"
             alt="">
                    <span data-v-2620cc76="">Assets</span>
            </div>
</a>
        </div>


        <div data-v-2620cc76="" class="item" onclick="window.location.href='{{ route('user.tasks') }}'">
            <div data-v-2620cc76="" class="">
                <div class="loader">
                    <span></span>
                </div>

                <span data-v-2620cc76="">TTMD </span>
            </div>
        </div>
        <div data-v-2620cc76="" class="item" >

        <a href="{{ route('user.level-team') }}">
            <div data-v-2620cc76="" class="">
                
            <img data-v-2620cc76=""
             src="{{ Request::is('user/level-team') ? asset('static/img/i3.png') : asset('static/img/home3.png') }}"
             alt="">
                    <span data-v-2620cc76="">Community</span>
                
                </div>

</a>
        </div>



        <div data-v-2620cc76="" class="item" >
        <a href="{{ route('user.profile') }}">

            <div data-v-2620cc76="" class="">
                
            
            <img data-v-2620cc76=""
             src="{{ Request::is('user/profile') ? asset('static/img/i4.png') : asset('static/img/home4.png') }}"
             alt="">
                    
                    <span data-v-2620cc76="">Mine</span>
                
                
                </div>
</a>
        </div>
    </div>
</div>
</div>
<div data-v-a7d12cfc="" class="global-loading default" style="display: none;">
    <div data-v-a7d12cfc="" class="global-spinner"><img data-v-a7d12cfc=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAYAAAADgWq5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNC0xMlQxNTo0MTowNiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWU0ZGQwNmEtMWExNS1kYjRmLTkyZmQtZjIzNTAwNzJkMGNmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlGMTI0NjE1NTQzQzExRThCQzhCQzEyQjVDOUMzOEJGIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OUYxMjQ2MTU1NDNDMTFFOEJDOEJDMTJCNUM5QzM4QkYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjEyNDYxMjU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjEyNDYxMzU0M0MxMUU4QkM4QkMxMkI1QzlDMzhCRiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZTRkZDA2YS0xYTE1LWRiNGYtOTJmZC1mMjM1MDA3MmQwY2YiIHN0RXZ0OndoZW49IjIwMjItMDQtMTJUMTU6NDM6MTQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hddYGwAABHhJREFUWIXN2XuoFVUUx/HPXG9WmmIPJQtNwQwqe5paEI1pCBZCRvVXDwlKCsLpIURgIZZG1KEXRVJJWPRnIv3TAw/0UCsrUlBLLQ1T01Ip6eZr+mPPOHOP56jXcz3XHxzu3nv2nv29a/bstdaeyJIXdYOG4bLs77k4AzvQFyvxKw7gJ/xZHpjGSZcmam8Csg/uxU0Yi8HHMGYz1uAtfIh/uzrp8QBPwFO4HgfR1oWx52e/CViX3ef9rkwedWFJXIQncE+da7uwHcuwF1uQClbvi1G4tMF9V+GuNE5+6C7gUzANT2Joqb0Dm/A6XsO+I9yjD/7DaMzArTi1ps/iNE6mNAvcjqfxKE4rtS/BXHxytAnqqBcuwHQ8XnNtP0amcfJLo8FHWn/98QIeK8Fuw3W48ThhCbvFBsxEhMWla+3YEFUrfbsKfDpewcOKR/e5sBssPU7QusqWwTTBurlWN+rfCHg67i7V3xasurFZwHpK42QBxmFP1jQkqlbW1utbD3g0ygt7Fe7T2QLdrjROVmBSqWlkVK28WtuvHvB7pfImXNvNbA2VxsmXeKnU9FBUrVxT7lMLHGNkVt6JO/DPiQKspzROZuC3UtM7UbVyiLMMPBDzSvWFWHFC6RprrLCbwCU4ZOUy8G24OivvxCwneN02UhonWwSD5Xo3L5SBpypii/mCu+1JzRHcOwyPqpVhFMD9MSYr78OnLUWrozRO1gk7FCE8mEwBPE7hzVbiu5bSNdabpfKkqFqJcuCr0Dsrr1ETZPegPiiVJ6dxkubAQwW/TohTTxa1K4x3IKpWLmwToqfhWWMqpDEnhdI42SrENYSYpqNN2O+uyBojfN16tPqKqpV2fJNVD+LK3MJbS/0GtRqskdI42Y+zsmob/moTlkHuVQ7qHKifDCpnJtvbBMg8XmjD2S1HaqCoWhmgCDl3o1e+S3xf6tey6OwY1K4IxrZhcw68rNRpjJNHA4WsG7ancbI7B/5CcagxCv1aTVarLKS8OaumAuMh17xFsVb64YaW0tVXO27PyvuxiAL4oJC35Xq+dVwNdbEiDv5btmzL4eXcUnmEwpn0lGYpwoVFaZykdAbeJZziEB7HG0JY13JF1crlyE+BdmQsODynm60ImkcIS6WliqqVQXhO8MCEg5Yf8+u1wFvxANbjfoUHbImiaqU3XsbErGkf5qRx0pH3qXfcOj/79YSeFXaG3JAz0zjZUO7QzIF2tymLyp7BI4oXbYVg7U7qceCoWhmKBRhfal6NKWmcHPYOdeX0/EQoxkc6wy7FxDROfq83oKcsfIvw+MfXtC8VLLuj0cBmgXsLb/RIfCVkK72FrXGfELjsEXLGFHcK580DdI5zd2F2GieVo03YLPCDwqF3nmr1Ek6N1grfN7Zn/8xenNPgHsuFbxw/H8uEzQLvVLwH+UZ/pnDOQfg0UKsD2biPMS+Nk5VdmbBZ4IVCVjtVyAXPE2LYsjqEtGs9vhWCrM8cp1NqFviA4OdzXz9ESLcGC+Abhe9yy4Vk8o8m5/M/9rYMi48jzWIAAAAASUVORK5CYII="
            alt=""></div>
</div>
@include('partials.notify')
</div>

<script src="/js1743475952730/core-js.fe8857a9.1743475952730.js?v=1743475952730"></script>
<script src="/js1743475952730/vue.fe8857a9.1743475952730.js?v=1743475952730"></script>
<script src="/js1743475952730/vant.fe8857a9.1743475952730.js?v=1743475952730"></script>
<script src="/js1743475952730/crypto-js.fe8857a9.1743475952730.js?v=1743475952730"></script>
<script src="/js1743475952730/axios.fe8857a9.1743475952730.js?v=1743475952730"></script>
<script src="/js1743475952730/compressorjs.fe8857a9.1743475952730.js?v=1743475952730"></script>
<script src="/js1743475952730/vendors~app.fe8857a9.1743475952730.js?v=1743475952730"></script>
<script src="/js1743475952730/app.fe8857a9.1743475952730.js?v=1743475952730"></script>
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
    function changeHomeImage(el) {
        const img = el.querySelector("img");
        img.src = "{{ asset('') }}static/img/i1.png";

        // Delay the redirect slightly so image update shows
        setTimeout(function() {
            window.location.href = "{{ route('user.dashboard') }}";
        }, 300); // 300 milliseconds
    }
</script>


<div class="van-toast van-toast--middle van-toast--success" style="z-index: 2001; display: none;"><i
        class="van-icon van-icon-success van-toast__icon"><!----></i>
    <div class="van-toast__text">Login successful</div>
</div><!---->
</body>

</html>
