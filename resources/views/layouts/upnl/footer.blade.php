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
  box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25), inset 5px 5px 35px rgb(185 229 64);
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
</style>
<div data-v-6e2d35de="" class="footer">
    <div data-v-2620cc76="" data-v-32fa28da="" class="footers" data-v-6e2d35de="">
        <div data-v-2620cc76="" class="item" href="{{ route('user.dashboard') }}">
            <div data-v-2620cc76="" class="" onclick="window.location.href='{{ route('user.dashboard') }}'">
                <img data-v-2620cc76=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARMSURBVHgB7VhdUuNGEP5G8m6lkkqVj6CcIPgxC1thAptXvCcInGDxCYAT2JwAOAE8J5Axgd082jeIjuCHsA9gabbbkqzRz9qSRuy+7Ffl8rg9M/rc7v6me4BveF4ItASl7rZDuHsCYV8DXrz5VENMHTgnUv7iowVYE1Zq0gUejkLgcPVMce7gcSClnMECVoSV+tcLEFzSJhsVl/gOXGnjbQcNodT7jRCBypH16TUIIHohtCR/HMS2BB6v+ZPWoiEaeVipD+9ChCPTphFeuPjxUMpe4S+/VncjAfEuZx7syK0RaqI2YaXuh/l4JW+evJGvj1et+0vdHTsQR6aNPh9LuXmCGqhMmJNL4+GSFGA7teqZhnuwK19dVdnjWv3TF3DOaNg1CIwF7VE1risR5uTi2EMsVzEaJZDtXmuTLtLX+cR8AHvFwQ+9JtnOa5gc72GY+UdM+B9Yt16sJluWXPp0V75eo7nV0CSuP0u4PLkweNMgs1fhRt3zM4ZZqzPaka8GZfNFkeikG+Ahp696RmTfkhKM8QxgXXahL5ENu6nAk8yfjIUYDvHxLH8YOOj0noss43e5OeW4hnHIkBptaLy4zM/NEL5R7/dpahr4Qlw1Ta66iJLxqUcPXUokS2jEKUUmJK7V/cTwrk8n0U/4Cvhb3atE71lNfpNbMvlu6WHWRzMU6PQ6wFdCQCdnMmbizC353EmnzT3D4bMmMcsJG+Jhn/b5OTbdUi08rhtS/GxSD062xYk4X3CL4nvpYfKoZ6ypXbNGmv3/f1hIlN6PX2d8qsXSVRdLDvSjvXTcAqjUPIoOGNEt+dqj17Ah6QKsCUe1gT5OLVwQiVOKvYvc1CMzFpvCmjB51jxaF5q9KzcPd+XWPmkrq0zy11J8z6293EJIGLoNkWk2o7E+Nb7/A5awIqyiVqebbvZ4VXxA59z42LUNC0sPh5kkK+uIi5IWliVmZVgSdtbKn1KqW3fNyifCCo+++Ynq2+38jABuxmZbl1gR5hAwOwc3V4wzqIcbpuNMl9EI1ipBmnuRjrm6+rAkyE0AjBrXnNsU1oR35OZ51nPhIcdtdKAYHYsQ5zwXlmjlaKbO4C2Ms3+OzkaAJ7MJmDn6+wFaQCuEge9YCVbJVbdBPVWKVgjnvcnloYtgbM5hr6MFtBQS7l4ypsS75fe8gtCD1t45VEFLIaG3k5HI9GT6Nh2LX9ECWigvF/WEZ2w4Tcah4WFuv4qnXn046UD4hr1bdfMwdyVAtzZLwnGbNUvnvqwUFnGB5KXrQj8Zmz0dPehF0kdR7fryjO7VqDTs+FhJOFzGL2ntuDiDbcsSdI/IjLESc77VH5rtfGfBLRnH4CS5WRBMjlfdDyH6rAGVoXFbYmRbP90zWONlkbl74Ls8swrMxLCD+UgYMVgX3CEXbe4VGoJVJn/xmCHMv4QuLfj25aAucb6FL6vE2KYzXUcloj7vZ16gfMOXwie5ich23HUcAQAAAABJRU5ErkJggg=="
                    alt=""><span data-v-2620cc76="" style="">Home</span>
            </div>
        </div>

        <div data-v-2620cc76="" class="item item_active" onclick="window.location.href='{{ route('user.asset') }}'">
            <div data-v-2620cc76="" class="on">
                <img data-v-2620cc76=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMKSURBVHgB7Zm9bhNBEMdnNiYFld/g8gYRokAQS/Gd09DgIj2RSA9S6F24J0V6kKCncOr4zg52UIoI/AZ2T+GGFP7YYebsO985Z5QD39og/6Tk7Fl//D07O7M7B7AhW3DRgHt5tU8jXQYFu2CePhGcH9iFj/MDdwR73tcdjeP3QLAPq4agp3CrZNtPu4FJRcd9sTSur4VYAcHynRczRXAbrc88FeX4m6jH/7pgkjmHEcBxEB65wOjH7FiHYomop2DrlWM/a4JhXPd6l3B4EzxHhBd88QXPQkLrmGcVqBPHMS9WcJwnHSDsREx5CHVNYbeH2UC86zh7taQPc79c78psQMagotn3awjFq+QXJ8csx3iFRsMbDp36RaP9GjLEKRaqSHgofyWncBLYc2k+hGch9CxqfcSXM8iQpFlWkI5++AiVJWkQDJPKwwjYJKDp4qS85Ox6o/Wd7X1YLh0kdR4tGAHpBNPgk6bcG0S0JgawOE4skmBZMgTj04tGq3rAsRy1pwoJ27b7QxyVJIuAAZCgwqIrUVsqDwvPbbvred5jou2XpPyFl4dlQtPZmyKiXfeqGdSE1IIF8TRMMkQmWcJ1OX0ihJ5lx8i68QWnzRJGcByJ29hCDovaWgr2QeokmddX8AL+OcF/tOj+Bs/7lqfcwMLRds+2H6UuOMY8LELlgKDh5w/ZQMl1PsfeB2OCCW/fzZ9mJoUh3a7PiGAuNHmujkdJY4pg/QRT7qG1cAxoB1JgRDCObnuwaEdHyfl2EUYESynng2Q1aYwQU5V3Y4vOKe6d8SKrhjs9hKbm409Sd+d3GM3Dkz1Csqfvy6Y0Z81GcNb8H4Jx7ly1EjTsJJlDwdx3DSuOlEs++K2sR+xetst+C2FGQm9Nq1hbiEB/cN12GQwzuVVBp1EbRrTFGtrcxbnbfee2Pf+sLhiBN0Lz4YhQKxULh8HTWKUb0PD4AeXqYWdn8ga/uwNGiN9ykTI+hNHbqC226KRJIp0d+VWwanivIVpEU9y8AFl0HMfmb3tx8xpB1VbV/d/wC3Y/QT6f+EbqAAAAAElFTkSuQmCC"
                    alt=""><span data-v-2620cc76="">Assets</span>
            </div>
        </div>
        <div data-v-2620cc76="" class="item" onclick="window.location.href='{{ route('user.quality') }}'">
            <div data-v-2620cc76="" class="">
                <!-- From Uiverse.io by Smit-Prajapati -->
                <div class="loader">
                    <span></span>
                </div>

                <span data-v-2620cc76="">TTMD </span>
            </div>
        </div>
        <div data-v-2620cc76="" class="item" onclick="window.location.href='{{ route('user.level-team') }}'">
            <div data-v-2620cc76="" class=""><img data-v-2620cc76=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATTSURBVHgB7VlBcts2FP2A5C7azFQ3KHsC28vETWOO42yrnMDSCSKfwPIJJJ/A0gmirhOXytiJllFOYB7BnYk708YC+iCSEgiCAOWEk43fjMci+PDxBHz8/wERPaBeMLoHouhyX1DjDyIZMJKtrF2SfMeJpmH4dEo1YSPBSqgkdiKJ9j3UGKZPD8K9UdHGLJC0OMfHFmyd2TguVBIcRR8xi7cDQdShjcCHnP49DcPwJmu5iN6/xlq0NQkjTv8d6xynRR9BiV3QbWQXK2/wjWP8zdXn4nvRk7QVASu3gQv9bdjomBwXmj6CoH8GELSjt+F5uiB5emj46hu4DCPWwfujlRz0lfTDAB+7Sd9GX9CCTA7RFmaeQp8ep0tg+Towd663YajuC4/fXURXPfwb6G2SxMvn4e8Tw7bi6DN7fBD+NnTZ9riEPNGf4BbHLypskmRQ1tXbGPFBnrM3wpfoGl1PyINSwSoi4F+wHpGNDj3f3hSkXEdrCt4kNldQMw53GGtNLZNTWTBms50jSjqjDaH83BisbXIaxHKTwBk/IgdKBWPzbGuPcRjuzWlDpJtyFT0QdwOTk9qNVxwpd1w2SwVLzR2YZnBTSK0v7GzbOCzPcYY3bxz+WvDcDFOl5OCxZ4fMDxTQPSG1GM5LBAttVn2r6fBh+U57DHy714Yoeq/E6sXRpyJnFuiJSTIWu2y6osQkT3Tv3hIbr1w2kzaRi71Ssj/JAU+mu7omzR04b3TCZ4/HVAFR9OEVxOghK0ZC+VXnvI0+tBmJ1y6OCc+mY7k4KsRilKZdj9jZkSG2YEtxWFJmlnKsinyEYjm47IaSUIzNQr2sXobvnj0Pn/ZSoct6uFBTMzY52N97SR54qzXUql2Uf4HMVWyyI1CVXUSXKC+XmwTFuGyhrRBD0W/eoEf97Dn12f0CR/7YpQrwxmFVWDP6Eho5PwVrJeWj8nObWDFu0E8wsauHszwPM2vhlGKjI1JaEqoZCjxGrfWygnZEwmxzuMqTCW2Aex1CVUzG0qhi/VnWBt+9wXKrODs9rPEQ+oC6sbFLJHcSDBGDbSN9B/o7uYwY8hMnOa/rbqLiMX8WYIuoZNCzRYMSxOBOkdJxzH8cu+1/XNqsEimY39DtCWoAb3bzDDMqE56kZxU11ESU8zKUxmFlSNDna5fY7E4i/YupFCrRLKIkLJo25NF61cp52phFoCzErMq+ZeAbSXyMhDBp0qO5uYRqRe7o8056N6FCXmBa4MT6OBatagbblYCNVyo4iq7Oi7c8EjGWziByWDUjJWLKEg0fHoRPjv08NsLp27guyIsdFFwAqZMjz28iNG9zFixo0ddvemyiy3l50WzdoegGIkmvffoGQHbsY5nNi5LCTY+Np7sHS8TOAjj7NdUk1iUG44SWO7pS3lKwebKoQ2yGt9HlEJtSPzrFnL7smtetFtFLHk9DSJC1qtq0LrEKqpA3r7AEbXVMntJQ5DV7PImDazSo4a36vxa4clWbSL9G2K/GYztNVRYuu6waF+d/RVdUJzCGShSrFI/s9bP+PtlTYmDj4YikaljWXhvz/n7xzYFJy51mBN2pmqUtLTzO6W6YXPl/H6g9U+WHmYzXTHfnrtp8pj/XieyEorKn+Y5Tc4gk0oIL/OLiPaAO/A9SeEvsCZPJUAAAAABJRU5ErkJggg=="
                    alt=""><span data-v-2620cc76="">Community</span></div>
        </div>
        <div data-v-2620cc76="" class="item" onclick="window.location.href='{{ route('user.profile') }}'">
            <div data-v-2620cc76="" class=""><img data-v-2620cc76=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPNSURBVHgB7VhLUtwwEG3ZpCpVYTFH8A0Ylgn5jIvANuQEDCcAToC5QTgBcAJgm4RokkCynOEE8RG8SKqywOp0l+Yjf0eWZ8KGt8F4pPZT66k/AnjEciFgQZDye0+BtysAewgQjI2PEMTIg/QqDF9fwgLQmrCUPwOE9JRI9uYMjT3wwzB8HkMLtCIs5W1XgZJkpmM5JUlBhNvhxggc4UyYPavgfpgnO5GBfsYueb6bm5qQp9ddPb0CjlCQ5j0bK8C9rfDVwBynF8Zjta4JHZYQ/Q3BAU4e/iy/7QjwLoxXpM9n5LX1pGy8lLKj4AntxpQ0LRjD/OJs4IEDBPjvskb4MJWTZdCPCXs/M0d4u+AAJ8JI2pw9w8hGj+xNHjszgj1wgKOHZwdJCGF94uljd8a/ATjAifBDwpVwPHlAxK7tJAWwNp1nyqMBXCXx1XjufqK0PG8OhzdXKZlwIpwCnmWNiFMOXVXjpRx2xrF4CkRxBQ5wIswnnrw1MF4FHGfZi/mxuij6k4nBhPht+MKpGHLOdBSL9yhjMZGJZzmj/foibzKpWRVSM1JqXnHKctpmC3yk4scH5K22LH6YrEd5xL34aRXWuOriQgaMqFEFlhB5dr0N2bGdxYDrC1r/DnlgbVKhkfGY5DGgEvTcpW54xEOgsSR0mOJqDSkRoG2nUQCCN+71mknFmjATJT0eWfRuTUE69w5t47JVlKDe7UiBkEsgy6CdUhf8DZvBcz2syWJU/AUTASKmhwQaQtfTxcaVUnxEYe+4bm4t4Wt52yfzp7kJA6oljtuGKS6YaMF9spfvPA43w5cfquZVEi5pHrkPY6IRLBBEPCLPmnKo7aorNUzBno0E0xdCnC2aLINtkkROjFeTrroUpYTHUugbr2IPvVpttYEP9xGYTQEd7mt5c1A2tiCJ8gsSsbcZbpzBEsGaJmmYNXOpNAoe1tsxI8vbtWyyDN1Vz5dGhrCUP/ZzsTb2YTWC/wQbaWQIU1SIimb+Oqff5nha9q1MQslJwjvMDebQNqw6AIsE764+O2YrhXzbmeFUOHRVXQS35T7479ve7xaJVtUo5d2JKDdSTBrGlEsP1EnYMtPNKaYqL79rMp3spLASUfrcrxgS03Rqe9Q5wOqo7jJQ2xvSjv3u6tI07VddgnOk4INeZc+m+KGPIF+tBnXjhL7JSVAXRMZ75HkBzp9vVaNY18Oc/ejj+yU36q3QtJhq3HHwofQAD2jiG3C8geQDRUX7OYK63FpWx1GGcUThwxPQIviir7D1QieCRF+u4B2FqcF2y1b/EcvEP8NktFV4O+9UAAAAAElFTkSuQmCC"
                    alt=""><span data-v-2620cc76="">Mine</span></div>
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
<div class="van-toast van-toast--middle van-toast--success" style="z-index: 2001; display: none;"><i
        class="van-icon van-icon-success van-toast__icon"><!----></i>
    <div class="van-toast__text">Login successful</div>
</div><!---->
</body>

</html>
