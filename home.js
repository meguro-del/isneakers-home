/* iSNEAKERS 首頁（由 官網首頁改版/build_shopline.py 產生，請勿手改） */
(function(){
var d=document,h=d.head;
[['preconnect','https://fonts.googleapis.com'],['preconnect','https://fonts.gstatic.com',1],['stylesheet',"https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=JetBrains+Mono:wght@500;700&family=Noto+Sans+TC:wght@400;500;700;900&display=swap"]].forEach(function(x){var l=d.createElement('link');l.rel=x[0];l.href=x[1];if(x[2])l.crossOrigin='';h.appendChild(l);});
var st=d.createElement('style');st.id='isnCss';st.textContent="body.isn-home{\n  --ink:#0B0B0B; --ink-2:#161616; --ink-3:#262626; --bone:#EDEBE6;\n  --mute:#8C8A85; --signal:#FF3D14; --glow:#B39DDB;\n  --cond:\"Archivo\",sans-serif; --tc:\"Noto Sans TC\",sans-serif; --mono:\"JetBrains Mono\",monospace;\n}\n:is(#isn,#isnTicker) *{box-sizing:border-box;margin:0;padding:0}\nbody.isn-home{background:var(--ink);color:var(--bone);font-family:var(--tc);-webkit-font-smoothing:antialiased;overflow-x:hidden}\nbody.isn-home::after{content:\"\";position:fixed;inset:0;pointer-events:none;z-index:99;opacity:.07;mix-blend-mode:overlay;\n  background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")}\n:is(#isn,#isnTicker) img{display:block;max-width:100%}\n:is(#isn,#isnTicker) button{font:inherit;cursor:pointer;border:0;background:none;color:inherit}\n:is(#isn,#isnTicker) a{color:inherit;text-decoration:none}\n:is(#isn,#isnTicker) .wrap{max-width:1840px;margin:0 auto;padding:0 clamp(24px,4vw,80px)}\n:is(#isn,#isnTicker) .display{font-family:var(--cond);font-stretch:62%;font-weight:900;text-transform:uppercase;line-height:.84;letter-spacing:-.015em}\n:is(#isn,#isnTicker) .outline{color:transparent;-webkit-text-stroke:1.5px currentColor}\n:is(#isn,#isnTicker) .mono{font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.08em;text-transform:uppercase}\n:is(#isn,#isnTicker) .ticker{background:var(--signal);color:#000;overflow:hidden;white-space:nowrap;height:32px;display:flex;align-items:center}\n:is(#isn,#isnTicker) .ticker-track{display:inline-flex;gap:40px;animation:tick 30s linear infinite;padding-left:40px}\n:is(#isn,#isnTicker) .ticker span{font-size:13px;font-weight:700;display:inline-flex;gap:8px;align-items:center}\n:is(#isn,#isnTicker) .ticker span i{font-style:normal;font-family:var(--cond);font-stretch:62%;font-weight:900;font-size:16px}\n@keyframes tick{to{transform:translateX(-50%)}}\n:is(#isn,#isnTicker) .hero{position:relative;overflow:hidden}\n:is(#isn,#isnTicker) .hero-glow{position:absolute;inset:-20%;background:radial-gradient(38% 42% at 68% 50%,var(--glow) 0%,transparent 70%);opacity:.4;transition:background .8s;pointer-events:none}\n:is(#isn,#isnTicker) .hero-word{position:absolute;right:-2%;top:50%;transform:translateY(-50%);font-size:clamp(160px,26vw,420px);color:transparent;-webkit-text-stroke:1px rgba(237,235,230,.13);white-space:nowrap;pointer-events:none}\n:is(#isn,#isnTicker) .hero .wrap{position:relative;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:40px;align-items:center;min-height:min(calc(100vh - 94px),820px);padding-top:28px;padding-bottom:28px}\n:is(#isn,#isnTicker) .tag-row{display:flex;gap:8px;align-items:center;margin-bottom:22px;flex-wrap:wrap}\n:is(#isn,#isnTicker) .tag{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--ink-3);padding:6px 10px;font-family:var(--mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase}\n:is(#isn,#isnTicker) .tag.hot{background:var(--signal);border-color:var(--signal);color:#000;font-weight:700}\n:is(#isn,#isnTicker) .dot{width:7px;height:7px;border-radius:50%;background:var(--signal);animation:pulse 1.6s infinite}\n@keyframes pulse{0%,100%{opacity:1}50%{opacity:.25}}\n:is(#isn,#isnTicker) .hero h1{font-size:clamp(64px,7.4vw,128px);white-space:nowrap}\n:is(#isn,#isnTicker) .hero h1 .outline{-webkit-text-stroke:2px var(--bone)}\n:is(#isn,#isnTicker) .cw-line{display:flex;align-items:baseline;gap:12px;margin-top:20px;flex-wrap:wrap}\n:is(#isn,#isnTicker) .cw-line b{font-size:22px;font-weight:900}\n:is(#isn,#isnTicker) .cw-line .mono{color:var(--mute)}\n:is(#isn,#isnTicker) .price-row{display:flex;align-items:baseline;gap:16px;margin:14px 0 24px;flex-wrap:wrap}\n:is(#isn,#isnTicker) .price{font-family:var(--cond);font-stretch:70%;font-weight:800;font-size:48px;letter-spacing:-.01em}\n:is(#isn,#isnTicker) .inst{font-size:14px;color:var(--mute)}\n:is(#isn,#isnTicker) .inst b{color:var(--bone)}\n:is(#isn,#isnTicker) .sw-head{display:flex;justify-content:space-between;margin-bottom:10px;color:var(--mute)}\n:is(#isn,#isnTicker) .swatches{display:flex;flex-wrap:wrap;gap:6px}\n:is(#isn,#isnTicker) .sw{width:46px;height:46px;overflow:hidden;position:relative;border:1px solid var(--ink-3);opacity:.5;transition:all .2s;border-radius:2px}\n:is(#isn,#isnTicker) .sw img{width:100%;height:100%;object-fit:cover}\n:is(#isn,#isnTicker) .sw:hover{opacity:1}\n:is(#isn,#isnTicker) .sw.on{opacity:1;border-color:var(--bone);box-shadow:0 0 0 2px var(--ink),0 0 0 3px var(--bone)}\n:is(#isn,#isnTicker) .cta-row{display:flex;gap:10px;margin-top:26px;flex-wrap:wrap}\n:is(#isn,#isnTicker) .btn{height:58px;padding:0 30px;font-weight:900;font-size:16px;display:inline-flex;align-items:center;justify-content:center;gap:12px;border-radius:2px;transition:all .2s;letter-spacing:.02em}\n:is(#isn,#isnTicker) .btn .arr{transition:transform .2s}\n:is(#isn,#isnTicker) .btn:hover .arr{transform:translateX(5px)}\n:is(#isn,#isnTicker) .btn-main{background:var(--bone);color:var(--ink)}\n:is(#isn,#isnTicker) .btn-main:hover{background:var(--signal);color:#000}\n:is(#isn,#isnTicker) .btn-line{border:1px solid var(--bone)}\n:is(#isn,#isnTicker) .btn-line:hover{background:var(--bone);color:var(--ink)}\n:is(#isn,#isnTicker) .perks{display:flex;gap:20px;margin-top:22px;color:var(--mute);font-size:12.5px;flex-wrap:wrap}\n:is(#isn,#isnTicker) .perks span::before{content:\"■ \";color:var(--signal);font-size:9px;vertical-align:2px}\n:is(#isn,#isnTicker) .stage{position:relative;height:min(74vh,660px);display:grid;place-items:center}\n:is(#isn,#isnTicker) .stage-card{position:relative;height:88%;aspect-ratio:4/5;overflow:hidden;border-radius:3px;box-shadow:0 60px 120px -40px rgba(0,0,0,.9);transition:opacity .35s,transform .6s cubic-bezier(.2,.8,.2,1);transform:rotate(-2deg)}\n:is(#isn,#isnTicker) .stage-card img{width:100%;height:100%;object-fit:cover;transition:transform .8s}\n:is(#isn,#isnTicker) .stage-card:hover img{transform:scale(1.04)}\n:is(#isn,#isnTicker) .stage-card.out{opacity:0;transform:translateX(60px) rotate(3deg) scale(.94)}\n:is(#isn,#isnTicker) .sticker{position:absolute;z-index:3;background:var(--signal);color:#000;font-family:var(--cond);font-stretch:62%;font-weight:900;font-size:26px;line-height:.9;padding:12px 14px;text-transform:uppercase;transform:rotate(8deg);box-shadow:0 10px 30px rgba(0,0,0,.4)}\n:is(#isn,#isnTicker) .sticker.s1{right:3%;top:1%}\n:is(#isn,#isnTicker) .sticker.s2{left:3%;bottom:5%;background:var(--bone);transform:rotate(-5deg);font-size:14px;font-family:var(--mono);font-weight:700;letter-spacing:.04em}\n:is(#isn,#isnTicker) .stage-ui{position:absolute;right:8%;bottom:0;display:flex;align-items:center;gap:12px;z-index:3}\n:is(#isn,#isnTicker) .stage-ui .count{font-family:var(--mono);font-size:13px;margin-right:4px}\n:is(#isn,#isnTicker) .stage-ui button{width:46px;height:46px;border:1px solid var(--bone);display:grid;place-items:center;font-size:18px;border-radius:2px;transition:all .2s;background:rgba(11,11,11,.5)}\n:is(#isn,#isnTicker) .stage-ui button:hover{background:var(--bone);color:var(--ink)}\n:is(#isn,#isnTicker) .tape{background:var(--bone);color:var(--ink);overflow:hidden;white-space:nowrap;transform:rotate(-1.4deg);margin:10px -20px -14px;border-top:2px solid var(--ink);border-bottom:2px solid var(--ink);position:relative;z-index:2}\n:is(#isn,#isnTicker) .tape-track{display:inline-flex;gap:30px;padding:10px 0;animation:tick 34s linear infinite reverse}\n:is(#isn,#isnTicker) .tape-track span{font-family:var(--cond);font-stretch:62%;font-weight:900;font-size:32px;text-transform:uppercase;display:inline-flex;gap:30px;align-items:center}\n:is(#isn,#isnTicker) .tape-track span::after{content:\"✦\";color:var(--signal);font-size:22px}\n:is(#isn,#isnTicker) .sec{padding:84px 0}\n:is(#isn,#isnTicker) .sec.light{background:var(--bone);color:var(--ink)}\n:is(#isn,#isnTicker) .sec-head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;margin-bottom:34px;flex-wrap:wrap}\n:is(#isn,#isnTicker) .sec-head h2{font-size:clamp(72px,10vw,168px)}\n:is(#isn,#isnTicker) .sec-head h2 small{display:block;font-family:var(--tc);font-size:20px;font-weight:900;letter-spacing:0;margin-top:14px;text-transform:none;line-height:1.3}\n:is(#isn,#isnTicker) .sec-head .side{max-width:380px;font-size:14.5px;line-height:1.7}\n:is(#isn,#isnTicker) .sec-head .side p{opacity:.72}\n:is(#isn,#isnTicker) .sec-head .side .mono{display:block;margin-bottom:8px;color:var(--signal);font-weight:700}\n:is(#isn,#isnTicker) .view-all{display:inline-flex;align-items:center;gap:10px;font-weight:900;border-bottom:2px solid currentColor;padding-bottom:4px;margin-top:14px;transition:gap .2s}\n:is(#isn,#isnTicker) .view-all:hover{gap:16px}\n:is(#isn,#isnTicker) .grid{display:grid;grid-template-columns:repeat(5,1fr);gap:2px;background:var(--ink);border:2px solid var(--ink)}\n:is(#isn,#isnTicker) .card{position:relative;background:var(--bone);display:flex;flex-direction:column;overflow:hidden;color:var(--ink)}\n:is(#isn,#isnTicker) .card .ph{aspect-ratio:4/5;overflow:hidden;position:relative;background:#ccc}\n:is(#isn,#isnTicker) .card .ph img{width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.2,.8,.2,1)}\n:is(#isn,#isnTicker) .card:hover .ph img{transform:scale(1.05)}\n:is(#isn,#isnTicker) .card .hover{position:absolute;inset:0;background:rgba(11,11,11,.5);display:grid;place-items:center;opacity:0;transition:opacity .3s}\n:is(#isn,#isnTicker) .card .hover span{background:var(--bone);color:var(--ink);font-weight:900;padding:12px 18px;font-size:14px;transform:translateY(10px);transition:transform .3s}\n:is(#isn,#isnTicker) .card:hover .hover{opacity:1}\n:is(#isn,#isnTicker) .card:hover .hover span{transform:none}\n:is(#isn,#isnTicker) .card .badges{position:absolute;left:0;top:12px;display:flex;flex-direction:column;gap:4px;align-items:flex-start}\n:is(#isn,#isnTicker) .bdg{font-family:var(--mono);font-size:10.5px;font-weight:700;padding:5px 8px;background:var(--ink);color:var(--bone);letter-spacing:.05em}\n:is(#isn,#isnTicker) .bdg.new{background:var(--signal);color:#000}\n:is(#isn,#isnTicker) .card .info{padding:14px 16px 18px;border-top:2px solid var(--ink)}\n:is(#isn,#isnTicker) .card .row1{display:flex;justify-content:space-between}\n:is(#isn,#isnTicker) .card .row1 .mono{color:#6d6a64}\n:is(#isn,#isnTicker) .card .nm{font-size:14.5px;font-weight:700;line-height:1.35;margin-top:6px;height:39px;overflow:hidden}\n:is(#isn,#isnTicker) .card .pr{display:flex;flex-direction:column;align-items:flex-start;margin-top:10px;gap:2px}\n:is(#isn,#isnTicker) .card .pr b{white-space:nowrap}\n:is(#isn,#isnTicker) .card .pr b{font-family:var(--cond);font-stretch:70%;font-weight:800;font-size:24px}\n:is(#isn,#isnTicker) .card .pr small{font-size:11.5px;color:#6d6a64;white-space:nowrap}\n:is(#isn,#isnTicker) .tl{position:relative}\n:is(#isn,#isnTicker) .tl-stage{position:relative;height:760px;overflow:hidden;background:radial-gradient(120% 90% at 50% 20%,#f1f0ee 0%,#dedcd8 70%,#cfccc7 100%);color:var(--ink)}\n:is(#isn,#isnTicker) .tl-head{position:absolute;left:24px;right:24px;top:20px;display:flex;justify-content:space-between;z-index:5;color:#6d6a64}\n:is(#isn,#isnTicker) .tl-floor{position:absolute;left:0;right:0;bottom:0;height:16%;background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.06));pointer-events:none}\n:is(#isn,#isnTicker) .tl-model{position:absolute;bottom:6%;height:80%;aspect-ratio:1532/2048;left:var(--x);transform:translateX(-50%);cursor:pointer;z-index:2;outline:none;\n  transition:left .8s cubic-bezier(.7,0,.2,1),height .8s cubic-bezier(.7,0,.2,1),bottom .8s cubic-bezier(.7,0,.2,1),opacity .5s,filter .4s,transform .8s cubic-bezier(.7,0,.2,1)}\n:is(#isn,#isnTicker) .tl-model img{height:100%;width:100%;object-fit:contain;display:block;filter:drop-shadow(0 30px 30px rgba(0,0,0,.18));transform-origin:50% 100%;transition:transform .35s}\n:is(#isn,#isnTicker) .tl-model::after{content:\"\";position:absolute;left:18%;right:18%;bottom:-1.5%;height:3%;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.28),transparent);z-index:-1}\n:is(#isn,#isnTicker) .tl-model .lbl{position:absolute;left:50%;bottom:-34px;transform:translateX(-50%);white-space:nowrap;font-family:var(--mono);font-size:11px;letter-spacing:.08em;color:#55534e;transition:opacity .3s}\n:is(#isn,#isnTicker) .tl-model .lbl b{color:var(--signal)}\n:is(#isn,#isnTicker) .tl-model .lbl i{font-style:normal}\n:is(#isn,#isnTicker) .tl-model .cta{position:absolute;left:50%;top:-6px;transform:translate(-50%,-100%);background:var(--ink);color:var(--bone);font-size:12px;font-weight:700;padding:7px 10px;white-space:nowrap;opacity:0;transition:opacity .25s,transform .25s}\n:is(#isn,#isnTicker) .tl:not(.open) .tl-stage:hover .tl-model{filter:saturate(.3) opacity(.55)}\n:is(#isn,#isnTicker) .tl:not(.open) .tl-stage .tl-model:hover{filter:none}\n:is(#isn,#isnTicker) .tl:not(.open) .tl-model:hover .cta{opacity:1;transform:translate(-50%,-115%)}\n:is(#isn,#isnTicker) .tl.open .tl-model{opacity:0;pointer-events:none;left:110%}\n:is(#isn,#isnTicker) .tl.open .tl-model.sel{opacity:1;pointer-events:auto;left:30%;height:96%;bottom:2%;cursor:default;filter:none}\n:is(#isn,#isnTicker) .tl.open .tl-model .lbl,:is(#isn,#isnTicker) .tl.open .tl-model .cta{opacity:0}\n@keyframes breathe{0%,100%{transform:scale(1) translateY(0)}50%{transform:scale(1.008,1.012) translateY(-2px)}}\n:is(#isn,#isnTicker) .tl-hot{position:absolute;left:var(--hx);top:var(--hy);width:22px;height:22px;margin:-11px 0 0 -11px;border-radius:50%;background:var(--signal);border:3px solid #fff;box-shadow:0 0 0 0 rgba(255,61,20,.6);animation:hotp 1.6s infinite;opacity:0;transition:opacity .4s .6s;z-index:3}\n:is(#isn,#isnTicker) .tl.open .tl-model.sel .tl-hot{opacity:1}\n@keyframes hotp{70%{box-shadow:0 0 0 16px rgba(255,61,20,0)}100%{box-shadow:0 0 0 0 rgba(255,61,20,0)}}\n:is(#isn,#isnTicker) .tl-hot span{position:absolute;left:24px;top:50%;transform:translateY(-50%);background:var(--ink);color:var(--bone);font-size:12px;font-weight:700;padding:6px 9px;white-space:nowrap;opacity:0;transition:opacity .2s;pointer-events:none}\n:is(#isn,#isnTicker) .tl-hot:hover span{opacity:1}\n:is(#isn,#isnTicker) .tl-back,:is(#isn,#isnTicker) .tl-nav{position:absolute;z-index:5;opacity:0;pointer-events:none;transition:opacity .4s .3s}\n:is(#isn,#isnTicker) .tl.open .tl-back,:is(#isn,#isnTicker) .tl.open .tl-nav{opacity:1;pointer-events:auto}\n:is(#isn,#isnTicker) .tl-back{left:24px;top:52px;background:var(--ink);color:var(--bone);padding:9px 12px;font-size:12px}\n:is(#isn,#isnTicker) .tl-nav{left:24px;bottom:24px;display:flex;gap:6px}\n:is(#isn,#isnTicker) .tl-nav button{width:44px;height:44px;border:1px solid var(--ink);color:var(--ink);font-size:18px;background:rgba(255,255,255,.4)}\n:is(#isn,#isnTicker) .tl-nav button:hover{background:var(--ink);color:var(--bone)}\n:is(#isn,#isnTicker) .tl-ai{position:absolute;right:24px;bottom:22px;z-index:5;color:#8a877f;font-size:10px}\n:is(#isn,#isnTicker) .tl-panel{position:absolute;top:0;right:0;bottom:0;width:44%;z-index:6;background:rgba(11,11,11,.96);color:var(--bone);padding:34px 32px;display:flex;flex-direction:column;transform:translateX(102%);transition:transform .7s cubic-bezier(.7,0,.2,1);overflow:auto}\n:is(#isn,#isnTicker) .tl.open .tl-panel{transform:none}\n:is(#isn,#isnTicker) .tl-panel .k{color:var(--signal);font-weight:700}\n:is(#isn,#isnTicker) .tl-panel h3{font-size:clamp(48px,4.6vw,76px);margin:10px 0 6px}\n:is(#isn,#isnTicker) .tl-panel .sub{color:#9a968d;font-size:13.5px;margin-bottom:22px}\n:is(#isn,#isnTicker) .tl-item{display:grid;grid-template-columns:86px 1fr auto;gap:14px;align-items:center;padding:12px 0;border-top:1px solid var(--ink-3);opacity:0;transform:translateX(20px);transition:opacity .4s,transform .4s}\n:is(#isn,#isnTicker) .tl.open .tl-item{opacity:1;transform:none}\n:is(#isn,#isnTicker) .tl-item img{width:86px;aspect-ratio:4/5;object-fit:cover}\n:is(#isn,#isnTicker) .tl-item .tag{display:inline-block;font-family:var(--mono);font-size:10px;font-weight:700;padding:3px 6px;background:var(--signal);color:#000;margin-bottom:6px}\n:is(#isn,#isnTicker) .tl-item .tag.rec{background:var(--ink-3);color:var(--bone)}\n:is(#isn,#isnTicker) .tl-item .nm{font-size:14px;font-weight:700;line-height:1.35}\n:is(#isn,#isnTicker) .tl-item .br{font-family:var(--mono);font-size:11px;color:var(--mute)}\n:is(#isn,#isnTicker) .tl-item .pr{font-family:var(--cond);font-stretch:70%;font-weight:800;font-size:22px;margin-top:4px}\n:is(#isn,#isnTicker) .tl-item .go{width:44px;height:44px;border:1px solid var(--bone);display:grid;place-items:center;font-weight:900;transition:all .2s}\n:is(#isn,#isnTicker) .tl-item .go:hover{background:var(--signal);border-color:var(--signal);color:#000}\n:is(#isn,#isnTicker) .tl-panel .btn{margin-top:auto;width:100%}\n:is(#isn,#isnTicker) .tl-stage{--px:0;--py:0;perspective:1600px}\n:is(#isn,#isnTicker) .tl-grid{position:absolute;left:-10%;right:-10%;bottom:-2%;height:42%;transform:perspective(600px) rotateX(62deg);transform-origin:50% 100%;\n  background-image:linear-gradient(rgba(255,61,20,.22) 1px,transparent 1px),linear-gradient(90deg,rgba(255,61,20,.22) 1px,transparent 1px);background-size:60px 60px;\n  -webkit-mask-image:linear-gradient(0deg,#000 10%,transparent 85%);mask-image:linear-gradient(0deg,#000 10%,transparent 85%);animation:gridrun 6s linear infinite;pointer-events:none;opacity:.55}\n@keyframes gridrun{to{background-position:0 60px,0 0}}\n:is(#isn,#isnTicker) .tl-bgword{position:absolute;left:0;top:50%;white-space:nowrap;font-size:clamp(140px,17vw,260px);color:transparent;-webkit-text-stroke:1.5px rgba(17,17,16,.09);pointer-events:none;\n  transform:translate(calc(var(--px)*-30px),calc(-50% + var(--py)*-20px));transition:transform .5s ease-out}\n:is(#isn,#isnTicker) .tl-bgword span{display:inline-block;animation:bgrun 40s linear infinite}\n@keyframes bgrun{to{transform:translateX(-100%)}}\n:is(#isn,#isnTicker) .tl.open .tl-bgword{-webkit-text-stroke-color:rgba(255,61,20,.18)}\n:is(#isn,#isnTicker) .tl-flash{position:absolute;inset:0;z-index:7;pointer-events:none;opacity:0;\n  background:linear-gradient(180deg,transparent 0 48%,rgba(255,61,20,.95) 48% 49.2%,#fff 49.2% 50%,transparent 50%),rgba(255,255,255,.0);background-size:100% 260%;background-position:0 130%}\n:is(#isn,#isnTicker) .tl-flash.go{animation:tlflash .7s cubic-bezier(.7,0,.2,1)}\n@keyframes tlflash{0%{opacity:1;background-color:rgba(255,255,255,.7);background-position:0 130%}35%{background-color:rgba(255,255,255,0)}100%{opacity:1;background-color:rgba(255,255,255,0);background-position:0 -30%}}\n:is(#isn,#isnTicker) .tl-model:not(.rev) img{clip-path:inset(0 0 100% 0)}\n:is(#isn,#isnTicker) .tl.inview .tl-model:not(.rev) img{animation:materialize 1.1s cubic-bezier(.7,0,.2,1) forwards;animation-delay:calc(var(--n)*.22s + .1s)}\n:is(#isn,#isnTicker) .tl-model.rev img{clip-path:none}\n@keyframes materialize{0%{clip-path:inset(0 0 100% 0);filter:brightness(2.2) saturate(0)}60%{filter:brightness(1.4) saturate(.4)}100%{clip-path:inset(0 0 0 0);filter:drop-shadow(0 30px 30px rgba(0,0,0,.18))}}\n:is(#isn,#isnTicker) .tl-model .scanl{position:absolute;left:-8%;right:-8%;height:2px;top:0;background:var(--signal);box-shadow:0 0 18px 4px rgba(255,61,20,.7);opacity:0;pointer-events:none}\n:is(#isn,#isnTicker) .tl.inview .tl-model:not(.rev) .scanl{animation:scanl 1.1s cubic-bezier(.7,0,.2,1);animation-delay:calc(var(--n)*.22s + .1s)}\n@keyframes scanl{0%{top:0;opacity:1}95%{opacity:1}100%{top:100%;opacity:0}}\n:is(#isn,#isnTicker) .tl-model .brk{position:absolute;inset:-4% -10% -2%;pointer-events:none;opacity:0;transform:scale(1.08);transition:opacity .25s,transform .35s cubic-bezier(.2,1.4,.4,1)}\n:is(#isn,#isnTicker) .tl-model .brk i{position:absolute;width:20px;height:20px;border:2px solid var(--signal)}\n:is(#isn,#isnTicker) .tl-model .brk i:nth-child(1){left:0;top:0;border-right:0;border-bottom:0}\n:is(#isn,#isnTicker) .tl-model .brk i:nth-child(2){right:0;top:0;border-left:0;border-bottom:0}\n:is(#isn,#isnTicker) .tl-model .brk i:nth-child(3){left:0;bottom:0;border-right:0;border-top:0}\n:is(#isn,#isnTicker) .tl-model .brk i:nth-child(4){right:0;bottom:0;border-left:0;border-top:0}\n:is(#isn,#isnTicker) .tl:not(.open) .tl-model:hover .brk{opacity:1;transform:none}\n:is(#isn,#isnTicker) .tl-model.rev img{transition:transform .7s cubic-bezier(.16,1,.3,1),filter .7s cubic-bezier(.16,1,.3,1)}\n:is(#isn,#isnTicker) .tl:not(.open) .tl-model.rev:hover img{transform:translateY(-12px) scale(1.025);filter:drop-shadow(0 40px 34px rgba(0,0,0,.22)) drop-shadow(0 0 26px rgba(255,61,20,.32))}\n:is(#isn,#isnTicker) .tl-model .spot{position:absolute;left:50%;top:-18%;width:160%;height:130%;transform:translateX(-50%);pointer-events:none;opacity:0;transition:opacity .4s;\n  background:conic-gradient(from 180deg at 50% 0%,transparent 160deg,rgba(255,255,255,.55) 172deg,rgba(255,255,255,.55) 188deg,transparent 200deg);-webkit-mask-image:linear-gradient(180deg,#000,transparent 90%);mask-image:linear-gradient(180deg,#000,transparent 90%);z-index:-1}\n:is(#isn,#isnTicker) .tl:not(.open) .tl-model:hover .spot,:is(#isn,#isnTicker) .tl.open .tl-model.sel .spot{opacity:1}\n:is(#isn,#isnTicker) .tl-model .sheen{position:absolute;inset:0;pointer-events:none;z-index:1;-webkit-mask:var(--cut) center/contain no-repeat;mask:var(--cut) center/contain no-repeat;\n  background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.55) 48%,rgba(255,180,140,.35) 52%,transparent 65%);background-size:250% 100%;background-position:120% 0;opacity:0;\n  transition:transform .7s cubic-bezier(.16,1,.3,1)}\n:is(#isn,#isnTicker) .tl:not(.open) .tl-model.rev:hover .sheen{opacity:1;animation:sheen 1.1s cubic-bezier(.16,1,.3,1) forwards;transform:translateY(-12px) scale(1.025)}\n@keyframes sheen{from{background-position:120% 0}to{background-position:-20% 0}}\n:is(#isn,#isnTicker) .tl-model .brk{transition:opacity .5s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}\n:is(#isn,#isnTicker) .tl:not(.open) .tl-stage:hover .tl-model{transition:filter .6s cubic-bezier(.16,1,.3,1),left .8s cubic-bezier(.7,0,.2,1),height .8s,bottom .8s,opacity .5s,transform .8s}\n:is(#isn,#isnTicker) .tl-model .cta{transition:opacity .5s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}\n:is(#isn,#isnTicker) .tl:not(.open) .tl-model.off{opacity:0;pointer-events:none;filter:blur(4px)}\n:is(#isn,#isnTicker) .tl-pg{position:absolute;left:24px;top:52px;display:flex;gap:6px;z-index:5;transition:opacity .4s}\n:is(#isn,#isnTicker) .tl-pg button{width:44px;height:44px;border:1px solid var(--ink);color:var(--ink);font-size:18px;background:rgba(255,255,255,.5);transition:background .3s,color .3s,opacity .3s}\n:is(#isn,#isnTicker) .tl-pg button:hover{background:var(--ink);color:var(--bone)}\n:is(#isn,#isnTicker) .tl-pg button:disabled{opacity:.25;pointer-events:none}\n:is(#isn,#isnTicker) .tl.open .tl-pg,:is(#isn,#isnTicker) .tl.single .tl-pg{opacity:0;pointer-events:none}\n:is(#isn,#isnTicker) .tl-stage{touch-action:pan-y}\n:is(#isn,#isnTicker) .tl-stage.dragging{cursor:grabbing}\n:is(#isn,#isnTicker) .fx-head{display:flex;justify-content:space-between;align-items:flex-end;margin:56px 0 20px;gap:16px}\n:is(#isn,#isnTicker) .fx-head h3{font-size:clamp(44px,5vw,78px)}\n:is(#isn,#isnTicker) .fx-head h3 small{display:block;font-family:var(--tc);font-size:16px;font-weight:900;margin-top:10px;text-transform:none;letter-spacing:0}\n:is(#isn,#isnTicker) .fx-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:14px}\n:is(#isn,#isnTicker) .fx-card{display:block;position:relative;opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}\n:is(#isn,#isnTicker) .fx-grid.in .fx-card{opacity:1;transform:none;transition-delay:calc(var(--n)*.05s)}\n:is(#isn,#isnTicker) .fx-card .ph{aspect-ratio:4/5;overflow:hidden;background:var(--ink-2);position:relative}\n:is(#isn,#isnTicker) .fx-card .ph img{width:100%;height:100%;object-fit:cover;transition:transform .9s cubic-bezier(.16,1,.3,1),filter .6s}\n:is(#isn,#isnTicker) .fx-card:hover .ph img{transform:scale(1.06)}\n:is(#isn,#isnTicker) .fx-card .ph::after{content:\"\";position:absolute;inset:0;border:2px solid var(--signal);opacity:0;transition:opacity .4s}\n:is(#isn,#isnTicker) .fx-card:hover .ph::after{opacity:1}\n:is(#isn,#isnTicker) .fx-card .no{position:absolute;left:8px;top:6px;font-family:var(--cond);font-stretch:62%;font-weight:900;font-size:32px;color:transparent;-webkit-text-stroke:1px #fff;line-height:1}\n:is(#isn,#isnTicker) .fx-card .go{position:absolute;right:8px;bottom:8px;width:34px;height:34px;background:var(--bone);color:var(--ink);display:grid;place-items:center;font-weight:900;transform:translateY(8px);opacity:0;transition:all .5s cubic-bezier(.16,1,.3,1)}\n:is(#isn,#isnTicker) .fx-card:hover .go{transform:none;opacity:1}\n:is(#isn,#isnTicker) .fx-card .bdg{position:absolute;left:0;bottom:10px}\n:is(#isn,#isnTicker) .fx-card .info{padding:10px 2px 0}\n:is(#isn,#isnTicker) .fx-card .mono{color:var(--mute);font-size:10px}\n:is(#isn,#isnTicker) .fx-card .nm{font-size:13px;font-weight:700;margin-top:4px;line-height:1.35;height:35px;overflow:hidden}\n:is(#isn,#isnTicker) .fx-card .pr{font-family:var(--cond);font-stretch:70%;font-weight:800;font-size:19px;margin-top:6px}\n:is(#isn,#isnTicker) .tl.open .tl-model:not(.sel){filter:blur(6px);transition-delay:calc(var(--n)*.06s)}\n:is(#isn,#isnTicker) .tl.open .tl-model.sel{transform:translateX(-50%) rotateY(calc(var(--px)*8deg)) rotateX(calc(var(--py)*-3deg))}\n:is(#isn,#isnTicker) .tl.open .tl-model.sel img{animation:breathe 4.2s ease-in-out infinite;clip-path:none}\n:is(#isn,#isnTicker) .tl.open .tl-model.sel .tl-hot span{opacity:1;left:34px}\n:is(#isn,#isnTicker) .tl-hot span::before{content:\"\";position:absolute;right:100%;top:50%;width:0;height:1.5px;background:var(--ink);transition:width .5s .9s}\n:is(#isn,#isnTicker) .tl.open .tl-model.sel .tl-hot span::before{width:22px}\n:is(#isn,#isnTicker) .tl.open .tl-model.sel .tl-hot span{animation:callin .5s .8s both}\n@keyframes callin{from{opacity:0;transform:translate(-8px,-50%)}to{opacity:1;transform:translate(0,-50%)}}\n:is(#isn,#isnTicker) .tl-panel h3{min-height:1em}\n:is(#isn,#isnTicker) .tl-panel .bar{height:2px;background:var(--signal);width:0;margin:6px 0 18px;transition:width .9s .3s cubic-bezier(.7,0,.2,1)}\n:is(#isn,#isnTicker) .tl.open .tl-panel .bar{width:100%}\n:is(#isn,#isnTicker) .tl-item{transition:opacity .45s,transform .55s cubic-bezier(.2,1.2,.4,1)}\n:is(#isn,#isnTicker) .tl-item:hover img{transform:scale(1.06)}\n:is(#isn,#isnTicker) .tl-item img{transition:transform .4s}\n:is(#isn,#isnTicker) .tl.swap .tl-model.sel img{animation:swapin .6s cubic-bezier(.2,.8,.2,1),breathe 4.2s ease-in-out .6s infinite}\n@keyframes swapin{0%{clip-path:inset(0 0 100% 0);filter:brightness(2) saturate(0)}100%{clip-path:inset(0);filter:none}}\n@media (prefers-reduced-motion:reduce){:is(#isn,#isnTicker) .tl *{animation:none!important;transition:none!important}:is(#isn,#isnTicker) .tl-model img{clip-path:none}}\n:is(#isn,#isnTicker) .brand-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;perspective:1400px}\n:is(#isn,#isnTicker) .bcard{--rx:0deg;--ry:0deg;--mx:50%;--my:50%;position:relative;display:block;aspect-ratio:4/5;overflow:hidden;background:var(--ink);color:var(--bone);transform:rotateX(var(--rx)) rotateY(var(--ry));transition:transform .25s ease-out,box-shadow .4s;transform-style:preserve-3d;clip-path:inset(100% 0 0 0);will-change:transform}\n:is(#isn,#isnTicker) .bcard.in{animation:reveal 1s cubic-bezier(.7,0,.2,1) forwards;animation-delay:var(--d)}\n@keyframes reveal{to{clip-path:inset(0 0 0 0)}}\n:is(#isn,#isnTicker) .bcard img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.1) brightness(.75);transform:scale(1.15);transition:filter .6s,transform 1.2s cubic-bezier(.2,.8,.2,1)}\n:is(#isn,#isnTicker) .bcard.in img{transform:scale(1)}\n:is(#isn,#isnTicker) .bcard:hover img{filter:none;transform:scale(1.06)}\n:is(#isn,#isnTicker) .bcard::before{content:\"\";position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(11,11,11,0) 40%,rgba(11,11,11,.85) 100%)}\n:is(#isn,#isnTicker) .bcard::after{content:\"\";position:absolute;inset:0;z-index:3;pointer-events:none;background:radial-gradient(500px circle at var(--mx) var(--my),rgba(255,255,255,.18),transparent 45%);opacity:0;transition:opacity .3s}\n:is(#isn,#isnTicker) .bcard:hover::after{opacity:1}\n:is(#isn,#isnTicker) .bcard:hover{box-shadow:0 40px 80px -30px rgba(0,0,0,.6)}\n:is(#isn,#isnTicker) .bcard .no{position:absolute;left:12px;top:10px;z-index:2;font-family:var(--mono);font-size:12px}\n:is(#isn,#isnTicker) .bcard .tagb{position:absolute;right:10px;top:10px;z-index:2;background:var(--signal);color:#000;font-family:var(--mono);font-size:11px;font-weight:700;padding:5px 8px;transform:translateY(-60px);transition:transform .4s cubic-bezier(.2,.8,.2,1)}\n:is(#isn,#isnTicker) .bcard:hover .tagb{transform:none}\n:is(#isn,#isnTicker) .bcard .name{position:absolute;left:12px;right:12px;bottom:12px;z-index:2;transform:translateZ(40px)}\n:is(#isn,#isnTicker) .bcard .name .display{display:block;font-size:clamp(26px,2.7vw,44px);color:transparent;-webkit-text-stroke:1.5px var(--bone);transition:color .4s}\n:is(#isn,#isnTicker) .bcard:hover .name .display{color:var(--bone)}\n:is(#isn,#isnTicker) .bcard .run{position:absolute;left:0;right:0;top:46%;z-index:2;background:var(--signal);color:#000;white-space:nowrap;overflow:hidden;transform:scaleY(0);transition:transform .35s cubic-bezier(.7,0,.2,1)}\n:is(#isn,#isnTicker) .bcard:hover .run{transform:scaleY(1)}\n:is(#isn,#isnTicker) .bcard .run span{display:inline-block;padding:5px 0;font-family:var(--cond);font-stretch:62%;font-weight:900;font-size:15px;text-transform:uppercase;animation:tick 6s linear infinite}\n:is(#isn,#isnTicker) .service{position:relative;background:#060606;overflow:hidden;border-top:1px solid var(--ink-3);isolation:isolate}\n:is(#isn,#isnTicker) .service #cubeCanvas{position:absolute;inset:0;width:100%;height:100%;display:block;z-index:0}\n:is(#isn,#isnTicker) .service::after{content:\"\";position:absolute;inset:0;z-index:1;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(255,255,255,.025) 0 1px,transparent 1px 3px);mix-blend-mode:overlay}\n:is(#isn,#isnTicker) .service .wrap{position:relative;z-index:2;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:24px;align-items:center;min-height:780px;padding-top:40px;padding-bottom:40px;pointer-events:none}\n:is(#isn,#isnTicker) .service .wrap > *{pointer-events:auto}\n:is(#isn,#isnTicker) .service h2{font-size:clamp(76px,8.6vw,146px)}\n:is(#isn,#isnTicker) .service h2 em{font-style:normal;color:var(--signal);text-shadow:0 0 40px rgba(255,61,20,.45)}\n:is(#isn,#isnTicker) .service p{font-size:16px;line-height:1.75;color:#bdb9b0;margin:22px 0 28px;max-width:440px}\n:is(#isn,#isnTicker) .facts{display:grid;grid-template-columns:repeat(4,1fr);margin-top:40px;border-top:1px solid var(--ink-3)}\n:is(#isn,#isnTicker) .fact{padding:18px 14px 0 0}\n:is(#isn,#isnTicker) .fact b{font-family:var(--cond);font-stretch:62%;font-size:44px;font-weight:900;display:block;line-height:.9}\n:is(#isn,#isnTicker) .fact small{font-size:12px;color:var(--mute)}\n:is(#isn,#isnTicker) .sv-stage{position:relative;height:700px;cursor:pointer}\n:is(#isn,#isnTicker) .hud{position:absolute;inset:28px;pointer-events:none;font-family:var(--mono);font-size:10.5px;letter-spacing:.12em;color:rgba(237,235,230,.55);text-transform:uppercase}\n:is(#isn,#isnTicker) .hud i{position:absolute;width:22px;height:22px;border:1.5px solid rgba(255,61,20,.8)}\n:is(#isn,#isnTicker) .hud i:nth-child(1){left:0;top:0;border-right:0;border-bottom:0}\n:is(#isn,#isnTicker) .hud i:nth-child(2){right:0;top:0;border-left:0;border-bottom:0}\n:is(#isn,#isnTicker) .hud i:nth-child(3){left:0;bottom:0;border-right:0;border-top:0}\n:is(#isn,#isnTicker) .hud i:nth-child(4){right:0;bottom:0;border-left:0;border-top:0}\n:is(#isn,#isnTicker) .hud span{position:absolute;white-space:nowrap}\n:is(#isn,#isnTicker) .hud .tl{left:32px;top:4px}\n:is(#isn,#isnTicker) .hud .tr{right:32px;top:4px;text-align:right}\n:is(#isn,#isnTicker) .hud .bl{left:32px;bottom:4px}\n:is(#isn,#isnTicker) .hud .br{right:32px;bottom:4px;text-align:right}\n:is(#isn,#isnTicker) .hud b{color:var(--signal);font-weight:700}\n:is(#isn,#isnTicker) .hud .live::before{content:\"\";display:inline-block;width:6px;height:6px;border-radius:50%;background:#2BFF88;margin-right:8px;box-shadow:0 0 8px #2BFF88;animation:pulse 1.2s infinite}\n:is(#isn,#isnTicker) .sv-hint{position:absolute;left:50%;bottom:56px;transform:translateX(-50%);color:var(--mute);display:flex;gap:10px;align-items:center;white-space:nowrap;transition:opacity .3s}\n:is(#isn,#isnTicker) .sv-hint i{width:6px;height:6px;border-radius:50%;background:var(--signal);animation:pulse 1.4s infinite}\n:is(#isn,#isnTicker) .egg{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) scale(.9);text-align:center;pointer-events:none;opacity:0;transition:opacity .25s,transform .4s cubic-bezier(.2,1.6,.4,1);width:max-content;max-width:92%;padding:22px 30px 20px;background:rgba(6,6,6,.62);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,61,20,.55);clip-path:polygon(14px 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%,0 14px)}\n:is(#isn,#isnTicker) .egg.on{transform:translate(-50%,-50%) scale(1)}\n:is(#isn,#isnTicker) .egg.on{opacity:1}\n:is(#isn,#isnTicker) .egg .k{font-family:var(--mono);font-size:11px;letter-spacing:.2em;color:#2BFF88;margin-bottom:12px;text-shadow:0 0 12px rgba(43,255,136,.6)}\n:is(#isn,#isnTicker) .egg .t{font-family:var(--cond),var(--tc);font-stretch:62%;font-weight:900;font-size:clamp(44px,5.4vw,84px);line-height:.95;color:#fff;text-transform:uppercase;text-shadow:0 0 30px rgba(255,61,20,.9),-3px 0 0 rgba(0,240,255,.55),3px 0 0 rgba(255,0,90,.55);animation:glitch .9s steps(2) infinite}\n@keyframes glitch{0%,90%,100%{transform:none}92%{transform:translate(2px,-1px) skewX(-6deg)}95%{transform:translate(-3px,1px)}}\n:is(#isn,#isnTicker) .egg .s{font-size:13px;color:#cfccc6;margin-top:12px}\n:is(#isn,#isnTicker) .sv-fallback{position:absolute;inset:0;display:none;place-items:center;font-size:120px;color:var(--signal)}\n:is(#isn,#isnTicker) .shades{position:relative;overflow:hidden;background:radial-gradient(90% 70% at 78% 0%,rgba(255,138,61,.16) 0%,rgba(11,11,11,0) 60%),radial-gradient(60% 50% at 10% 100%,rgba(255,61,20,.07) 0%,rgba(11,11,11,0) 70%),var(--ink);border-top:1px solid var(--ink-3)}\n:is(#isn,#isnTicker) .sh-bgword{position:absolute;right:-1vw;top:24px;font-size:clamp(150px,24vw,420px);color:transparent;-webkit-text-stroke:1px rgba(237,235,230,.07);pointer-events:none;white-space:nowrap;line-height:.8}\n:is(#isn,#isnTicker) .shades .wrap{position:relative}\n:is(#isn,#isnTicker) .shades .sec-head .side b{color:var(--signal);font-weight:900}\n:is(#isn,#isnTicker) .sec .display .outline{-webkit-text-stroke:1.5px var(--bone)}\n:is(#isn,#isnTicker) .sec.light .display .outline{-webkit-text-stroke:1.5px var(--ink)}\n:is(#isn,#isnTicker) .sh-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:14px}\n:is(#isn,#isnTicker) .sh-card{position:relative;display:flex;flex-direction:column;background:#131313;border:1px solid #222;overflow:hidden;opacity:0;transform:translateY(26px);transition:opacity .8s cubic-bezier(.2,.8,.2,1) calc(var(--n)*70ms),transform .8s cubic-bezier(.2,.8,.2,1) calc(var(--n)*70ms),border-color .3s}\n:is(#isn,#isnTicker) .sh-grid.in .sh-card{opacity:1;transform:none}\n:is(#isn,#isnTicker) .sh-grid.in .sh-card:hover{transform:translateY(-4px);transition-delay:0s;border-color:#3b3b3b}\n:is(#isn,#isnTicker) .sh-card.big{grid-column:span 2;grid-row:span 2}\n:is(#isn,#isnTicker) .sh-card .ph{position:relative;aspect-ratio:4/5;overflow:hidden;background:#1a1a1a}\n:is(#isn,#isnTicker) .sh-card.big .ph{position:absolute;inset:0;aspect-ratio:auto}\n:is(#isn,#isnTicker) .sh-card .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .6s ease,transform 1s cubic-bezier(.2,.8,.2,1)}\n:is(#isn,#isnTicker) .sh-card .ph img.b{opacity:0;transform:scale(1.58);transform-origin:50% 8%}\n:is(#isn,#isnTicker) .sh-card:hover .ph img.a{opacity:0;transform:scale(1.05)}\n:is(#isn,#isnTicker) .sh-card:hover .ph img.b{opacity:1;transform:scale(1.5)}\n:is(#isn,#isnTicker) .sh-card .glare{position:absolute;inset:-20%;background:linear-gradient(115deg,transparent 38%,rgba(255,255,255,.32) 47%,rgba(255,255,255,.06) 52%,transparent 60%);transform:translateX(-110%);pointer-events:none}\n:is(#isn,#isnTicker) .sh-card:hover .glare{transform:translateX(110%);transition:transform 1s cubic-bezier(.2,.8,.2,1)}\n:is(#isn,#isnTicker) .sh-card .star{position:absolute;left:12px;top:12px;max-width:calc(100% - 90px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:7px 12px;font-size:12px;font-weight:700;color:#fff;background:rgba(18,18,18,.36);-webkit-backdrop-filter:blur(10px) saturate(150%);backdrop-filter:blur(10px) saturate(150%);border:1px solid rgba(255,255,255,.2);border-radius:999px}\n:is(#isn,#isnTicker) .sh-card .star::before{content:\"\";display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--signal);margin-right:7px;vertical-align:1px}\n:is(#isn,#isnTicker) .sh-card .off{position:absolute;right:0;top:12px;background:var(--signal);color:#000;font-family:var(--cond);font-stretch:70%;font-weight:900;font-size:19px;line-height:1;padding:6px 10px 5px}\n:is(#isn,#isnTicker) .sh-card .info{position:relative;padding:14px 16px 16px;border-top:1px solid #222}\n:is(#isn,#isnTicker) .sh-card .row1{display:flex;justify-content:space-between;color:var(--mute)}\n:is(#isn,#isnTicker) .sh-card .row1 .mono:first-child{color:var(--bone)}\n:is(#isn,#isnTicker) .sh-card .nm{font-size:14px;font-weight:700;line-height:1.4;margin-top:6px;height:39px;overflow:hidden;color:#d9d6cf}\n:is(#isn,#isnTicker) .sh-card .pr{display:flex;align-items:baseline;gap:10px;margin-top:10px;flex-wrap:wrap}\n:is(#isn,#isnTicker) .sh-card .pr b{font-family:var(--cond);font-stretch:70%;font-weight:800;font-size:24px;color:var(--bone)}\n:is(#isn,#isnTicker) .sh-card .pr s{font-size:12.5px;color:var(--mute)}\n:is(#isn,#isnTicker) .sh-card.big .info{position:absolute;left:0;right:0;bottom:0;border:0;padding:90px 28px 26px;background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.82) 55%)}\n:is(#isn,#isnTicker) .sh-card.big .nm{font-size:22px;height:auto;max-height:62px;color:var(--bone)}\n:is(#isn,#isnTicker) .sh-card.big .pr b{font-size:44px}\n:is(#isn,#isnTicker) .sh-card.big .pr s{font-size:15px}\n:is(#isn,#isnTicker) .sh-card.big .star{font-size:14px;padding:9px 15px;left:18px;top:18px}\n:is(#isn,#isnTicker) .sh-card.big .off{font-size:26px;top:18px;padding:8px 14px 7px}\n:is(#isn,#isnTicker) .sh-card.big .go{position:absolute;right:28px;bottom:30px;width:52px;height:52px;display:grid;place-items:center;background:var(--bone);color:var(--ink);font-size:20px;font-weight:900;transition:transform .3s}\n:is(#isn,#isnTicker) .sh-card.big:hover .go{transform:translateX(4px)}\n@media (max-width:1000px){:is(#isn,#isnTicker) .sh-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}:is(#isn,#isnTicker) .sh-card.big{grid-column:span 2;grid-row:auto}:is(#isn,#isnTicker) .sh-card.big .ph{position:relative;inset:auto;aspect-ratio:4/5}:is(#isn,#isnTicker) .sh-card.big .info{padding:70px 18px 18px}:is(#isn,#isnTicker) .sh-card.big .nm{font-size:17px}:is(#isn,#isnTicker) .sh-card.big .pr b{font-size:34px}:is(#isn,#isnTicker) .sh-card.big .go{right:18px;bottom:20px;width:44px;height:44px}:is(#isn,#isnTicker) .sh-card .off{font-size:16px}:is(#isn,#isnTicker) .sh-card .info{padding:12px 12px 14px}:is(#isn,#isnTicker) .sh-card .star{font-size:11px;padding:6px 9px;left:8px;top:8px;max-width:calc(100% - 64px)}:is(#isn,#isnTicker) .sh-card .off{top:8px}}\n:is(#isn,#isnTicker) .rank{border-top:1px solid var(--ink-3)}\n:is(#isn,#isnTicker) .rk-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:30px 16px}\n:is(#isn,#isnTicker) .rk-card{position:relative;display:flex;flex-direction:column;padding-top:38px}\n:is(#isn,#isnTicker) .rk-no{position:absolute;left:-4px;top:0;z-index:2;font-family:var(--cond);font-stretch:62%;font-weight:900;font-size:clamp(64px,6.2vw,108px);line-height:.8;letter-spacing:-.02em;color:transparent;-webkit-text-stroke:1.5px var(--bone);pointer-events:none;text-shadow:0 6px 24px rgba(0,0,0,.35)}\n:is(#isn,#isnTicker) .rk-card.top .rk-no{color:var(--signal);-webkit-text-stroke:0}\n:is(#isn,#isnTicker) .rk-card .ph{position:relative;aspect-ratio:4/5;overflow:hidden;background:#1a1a1a;border:1px solid #222}\n:is(#isn,#isnTicker) .rk-card .ph img{width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.2,.8,.2,1)}\n:is(#isn,#isnTicker) .rk-card:hover .ph img{transform:scale(1.05)}\n:is(#isn,#isnTicker) .rk-card .info{padding:12px 2px 0}\n:is(#isn,#isnTicker) .rk-card .info .mono{color:var(--mute)}\n:is(#isn,#isnTicker) .rk-card .nm{font-size:14px;font-weight:700;line-height:1.4;margin-top:4px;height:39px;overflow:hidden;color:#d9d6cf}\n:is(#isn,#isnTicker) .rk-card b{display:block;margin-top:8px;font-family:var(--cond);font-stretch:70%;font-weight:800;font-size:22px;color:var(--bone)}\n@media (max-width:1000px){:is(#isn,#isnTicker) .rk-grid{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:14px;margin:0 -16px;padding:0 16px 8px;scrollbar-width:none}:is(#isn,#isnTicker) .rk-grid::-webkit-scrollbar{display:none}:is(#isn,#isnTicker) .rk-card{flex:0 0 44%;scroll-snap-align:start}:is(#isn,#isnTicker) .rk-no{font-size:68px}}\n@media (max-width:1000px){:is(#isn,#isnTicker) .grid .card:nth-child(n+9){display:none}:is(#isn,#isnTicker) .hero .wrap{display:flex;flex-direction:column;align-items:stretch;gap:0;padding-top:14px;padding-bottom:26px}:is(#isn,#isnTicker) .hero .wrap>div:first-child{display:contents}:is(#isn,#isnTicker) .hero .tag-row{order:1;margin-bottom:10px}:is(#isn,#isnTicker) .hero h1{order:2;font-size:clamp(40px,12vw,64px);line-height:.9;white-space:nowrap}:is(#isn,#isnTicker) .hero h1 br{display:none}:is(#isn,#isnTicker) .hero h1 .outline{margin-left:.22em}:is(#isn,#isnTicker) .hero .stage{order:3;height:auto;margin:10px 0 2px}:is(#isn,#isnTicker) .hero .stage-card{height:min(35vh,300px);width:auto;margin:0 auto;transform:rotate(-1.5deg)}:is(#isn,#isnTicker) .hero .sticker.s1{font-size:16px;padding:8px 10px;right:4%;top:-4px}:is(#isn,#isnTicker) .hero .sticker.s2{font-size:11px;padding:6px 8px;left:2%;bottom:6%}:is(#isn,#isnTicker) .hero .stage-ui{right:0;bottom:4%}:is(#isn,#isnTicker) .hero .stage-ui .count{display:none}:is(#isn,#isnTicker) .hero .stage-ui button{width:38px;height:38px;font-size:15px}:is(#isn,#isnTicker) .hero .cw-line{order:4;margin-top:10px;gap:8px}:is(#isn,#isnTicker) .hero .cw-line b{font-size:18px}:is(#isn,#isnTicker) .hero .price-row{order:5;margin:4px 0 10px;gap:10px}:is(#isn,#isnTicker) .hero .price{font-size:38px}:is(#isn,#isnTicker) .hero .sw-head{order:6;margin-bottom:6px}:is(#isn,#isnTicker) .hero .swatches{order:7;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;padding:3px 3px 4px;margin:0 -3px}:is(#isn,#isnTicker) .hero .swatches::-webkit-scrollbar{display:none}:is(#isn,#isnTicker) .hero .sw{flex:0 0 42px;width:42px;height:42px}:is(#isn,#isnTicker) .hero .cta-row{order:8;margin-top:14px}:is(#isn,#isnTicker) .hero .cta-row .btn{flex:1;height:50px;padding:0 12px}:is(#isn,#isnTicker) .hero .perks{display:none}:is(#isn,#isnTicker) .hero-word{font-size:42vw;top:42%}}\n:is(#isn,#isnTicker) .buybar{position:fixed;left:0;right:0;bottom:0;z-index:60;background:rgba(11,11,11,.94);backdrop-filter:blur(12px);border-top:1px solid var(--ink-3);padding:10px 14px calc(10px + env(safe-area-inset-bottom));display:none;align-items:center;gap:12px;transform:translateY(110%);transition:transform .35s}\n:is(#isn,#isnTicker) .buybar.on{transform:none}\n:is(#isn,#isnTicker) .buybar img{width:48px;height:48px;object-fit:cover;object-position:50% 0}\n:is(#isn,#isnTicker) .buybar .t{flex:1;min-width:0}\n:is(#isn,#isnTicker) .buybar .t b{display:block;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n:is(#isn,#isnTicker) .buybar .t span{font-family:var(--cond);font-weight:800;font-size:18px}\n:is(#isn,#isnTicker) .buybar .btn{height:46px;padding:0 20px;font-size:14px}\n@media (max-width:1000px){:is(#isn,#isnTicker) .hero .wrap{grid-template-columns:1fr;min-height:0}:is(#isn,#isnTicker) .stage{order:-1;height:auto}:is(#isn,#isnTicker) .stage-card{height:auto;width:78%;margin:24px 0 56px}:is(#isn,#isnTicker) .grid{grid-template-columns:repeat(2,1fr)}:is(#isn,#isnTicker) .brand-grid{grid-template-columns:repeat(3,1fr);gap:10px}:is(#isn,#isnTicker) .ap-grid{grid-template-columns:repeat(2,1fr)}:is(#isn,#isnTicker) .service .wrap{grid-template-columns:1fr;min-height:0}:is(#isn,#isnTicker) .sv-stage{height:480px;order:-1}:is(#isn,#isnTicker) .hud{inset:10px}:is(#isn,#isnTicker) .facts{grid-template-columns:repeat(2,1fr)}:is(#isn,#isnTicker) .buybar{display:flex}}\n@media (max-width:600px){:is(#isn,#isnTicker) .wrap{padding:0 16px}:is(#isn,#isnTicker) .sec{padding:56px 0}:is(#isn,#isnTicker) .stage-card{width:84%}:is(#isn,#isnTicker) .sticker.s1{font-size:20px}:is(#isn,#isnTicker) .bcard .name .display{font-size:30px;color:var(--bone)}:is(#isn,#isnTicker) .bcard img{filter:none}:is(#isn,#isnTicker) .sec-head h2{font-size:64px}:is(#isn,#isnTicker) .card .pr{flex-direction:column;gap:2px}:is(#isn,#isnTicker) .tl-stage{height:560px}:is(#isn,#isnTicker) .fx-grid{grid-template-columns:repeat(3,1fr);gap:10px}:is(#isn,#isnTicker) .fx-card .go{opacity:1;transform:none}:is(#isn,#isnTicker) .tl-model .lbl{font-size:10px;bottom:-24px}:is(#isn,#isnTicker) .tl-model .lbl .lb{display:none}:is(#isn,#isnTicker) .tl-model{height:74%;bottom:8%}:is(#isn,#isnTicker) .tl.open .tl-model.sel{left:50%;height:92%}:is(#isn,#isnTicker) .tl-panel{position:static;width:auto;transform:none;max-height:0;padding:0 18px;overflow:hidden;transition:max-height .6s,padding .6s}:is(#isn,#isnTicker) .tl.open .tl-panel{max-height:1400px;padding:26px 18px 30px}:is(#isn,#isnTicker) .tl-nav{left:auto;right:16px;bottom:16px}:is(#isn,#isnTicker) .tl-ai{left:24px;right:auto;top:42px;bottom:auto}:is(#isn,#isnTicker) .cta-row .btn{flex:1;padding:0 16px}:is(#isn,#isnTicker) .fx-grid{grid-template-columns:repeat(2,1fr)}:is(#isn,#isnTicker) .fx-head{flex-direction:column;align-items:flex-start}:is(#isn,#isnTicker) .tape-track span{font-size:24px}}\n/* ===== SHOPLINE 整合（只在首頁：body.isn-home） ===== */\nbody.isn-home{background:#0B0B0B!important}\nbody.isn-home #Content,body.isn-home .CustomPage{background:#0B0B0B}\n.isn{background:var(--ink);color:var(--bone);font-family:var(--tc);-webkit-font-smoothing:antialiased;overflow-x:hidden}\n.isn.isn-tk{overflow:hidden}\nbody.isn-home #shopline-section-isnplpre,body.isn-home #shopline-section-isnplsg,body.isn-home #shopline-section-isnplfx,body.isn-home #shopline-section-isnplhero,body.isn-home #shopline-section-isnplrank{display:none!important}\nbody.isn-home #shopline-section-announcement{display:none!important}\nbody.isn-home #shopline-section-isnhome,body.isn-home #shopline-section-isnhome .section-width{max-width:none!important;width:100%!important;padding:0!important;margin:0!important}\n\n/* --- 頁首：黑底、白字、橘色 hover --- */\nbody.isn-home #shopline-section-header .header.nav-bg-color{background:rgba(11,11,11,.86)!important;border-bottom:1px solid #262626!important;box-shadow:none!important}\nbody.isn-home #shopline-section-header .nav-color,\nbody.isn-home #shopline-section-header .nav-color a,\nbody.isn-home #shopline-section-header .NavigationBar-actionMenu-button{color:#EDEBE6!important}\nbody.isn-home #shopline-section-header .navigation-menu-top-layer>.navigation-menu-item>a,\nbody.isn-home #shopline-section-header .navigation-menu-top-layer>.navigation-menu-item>span,\nbody.isn-home #shopline-section-header .navigation-menu-top-layer>.navigation-menu-item>div{color:#cfccc6!important;font-family:\"Noto Sans TC\",sans-serif;font-size:13.5px;font-weight:500;letter-spacing:.02em;transition:color .2s}\nbody.isn-home #shopline-section-header .navigation-menu-top-layer>.navigation-menu-item:hover>a,\nbody.isn-home #shopline-section-header .navigation-menu-top-layer>.navigation-menu-item:hover>span{color:#fff!important}\nbody.isn-home #shopline-section-header .navigation-menu-top-layer>.navigation-menu-item:first-child>a{color:#FF3D14!important}\nbody.isn-home #shopline-section-header .Product-searchField input{background:transparent!important;color:#EDEBE6!important;border-color:#262626!important}\nbody.isn-home #shopline-section-header .sl-cart-count{background:#FF3D14!important;color:#000!important}\n\n/* --- 頁尾：黑底、等寬字標題、橘色 hover，不顯示 Powered by --- */\nbody.isn-home #shopline-section-footer{background:#0B0B0B!important;color:#8C8A85;border-top:1px solid #262626;font-family:\"Noto Sans TC\",sans-serif}\nbody.isn-home #shopline-section-footer *{background-color:transparent}\nbody.isn-home #shopline-section-footer .text-title{font-family:\"JetBrains Mono\",monospace!important;font-size:11px!important;letter-spacing:.16em;color:#FF3D14!important;font-weight:700;margin-bottom:20px}\nbody.isn-home #shopline-section-footer p,body.isn-home #shopline-section-footer span{color:#8C8A85}\nbody.isn-home #shopline-section-footer a{color:#cfccc6!important;transition:color .2s}\nbody.isn-home #shopline-section-footer a:hover{color:#FF3D14!important}\nbody.isn-home #shopline-section-footer .footer-grid-items{gap:48px}\nbody.isn-home #shopline-section-footer .footer-wrapper::before{content:\"iSneakers\";display:block;font-family:\"Archivo\",sans-serif;font-stretch:62%;font-weight:900;text-transform:uppercase;line-height:.8;letter-spacing:-.015em;font-size:clamp(80px,15vw,240px);color:transparent;-webkit-text-stroke:1px #2c2c2c;margin:24px 0 56px}\nbody.isn-home #shopline-section-footer .footer-copyright{display:none!important}\nbody.isn-home #shopline-section-footer .footer-decor-bar{display:none}\nbody.isn-home #shopline-section-footer .dropdown-toggle{color:#cfccc6!important}\n/* 頁尾排版對齊初稿：品牌欄在前、MENU 兩欄、潮流速報整列兩欄 */\nbody.isn-home #shopline-section-footer .footer-grid-items{display:grid!important;grid-template-columns:1.1fr 1.3fr 1.2fr;gap:48px 64px}\nbody.isn-home #shopline-section-footer .footer-grid-item{width:auto!important;max-width:none!important;padding:0!important;margin:0!important;font-size:14px;line-height:2}\nbody.isn-home #shopline-section-footer .footer-grid-item:nth-child(2){grid-column:1;grid-row:1}\nbody.isn-home #shopline-section-footer .footer-grid-item:nth-child(1){grid-column:2;grid-row:1;display:grid;grid-template-columns:1fr 1fr;column-gap:32px;align-content:start}\nbody.isn-home #shopline-section-footer .footer-grid-item:nth-child(1) .text-title{grid-column:1/-1}\nbody.isn-home #shopline-section-footer .footer-grid-item:nth-child(3){grid-column:3;grid-row:1}\nbody.isn-home #shopline-section-footer .footer-grid-item:nth-child(4){grid-column:1/-1;border-top:1px solid #262626;padding-top:40px!important}\nbody.isn-home #shopline-section-footer .footer-grid-item:nth-child(4) p:not(.text-title){column-count:2;column-gap:64px;line-height:2.2}\nbody.isn-home #shopline-section-footer .footer-grid-item:nth-child(2) .text-title{font-size:0!important}\nbody.isn-home #shopline-section-footer .footer-grid-item:nth-child(2) .text-title::after{content:\"iSNEAKERS\";font-size:11px}\nbody.isn-home #shopline-section-footer .footer-grid-item:nth-child(2) .social-content::before{content:\"日韓美潮流球鞋與服飾，100% 正品。\\A尺寸問題歡迎 LINE 詢問，刷卡分期 3–24 期。\";white-space:pre-line;display:block;font-size:15px;line-height:1.8;color:#bdb9b0;max-width:300px;margin-bottom:24px}\nbody.isn-home #shopline-section-footer .footer-social-icon-wrapper a{width:46px;height:46px;border:1px solid #262626;display:inline-grid!important;place-items:center;margin-right:10px;transition:all .25s}\nbody.isn-home #shopline-section-footer .footer-social-icon-wrapper a:hover{background:#EDEBE6;border-color:#EDEBE6}\nbody.isn-home #shopline-section-footer .footer-payment-icons,body.isn-home #shopline-section-footer .footer-selector{border-top:1px solid #262626;padding-top:24px;margin-top:40px}\n@media (max-width:767px){\n body.isn-home #shopline-section-footer .footer-grid-items{grid-template-columns:1fr;gap:40px}\n body.isn-home #shopline-section-footer .footer-grid-item:nth-child(n){grid-column:1;grid-row:auto}\n body.isn-home #shopline-section-footer .footer-grid-item:nth-child(2){order:-1}\n body.isn-home #shopline-section-footer .footer-grid-item:nth-child(4) p:not(.text-title){column-count:1}\n body.isn-home #shopline-section-footer .footer-wrapper::before{margin:8px 0 32px}\n}\nbody.isn-home #shopline-section-header svg.icons,body.isn-home #shopline-section-header svg.icons *{fill:#EDEBE6!important}\nbody.isn-home #shopline-section-footer .footer-grid-item:nth-child(1){display:block!important;column-count:2;column-gap:32px}\nbody.isn-home #shopline-section-footer .footer-grid-item:nth-child(1) .text-title{column-span:all}\nbody.isn-home #shopline-section-footer .footer-grid-item:nth-child(1) p{margin:0;break-inside:auto}\n/* 頁尾寬度跟首頁內容一樣自適應 */\nbody.isn-home #shopline-section-footer .section-width{max-width:1840px!important;padding-left:clamp(24px,4vw,80px)!important;padding-right:clamp(24px,4vw,80px)!important}\n@media (max-width:600px){body.isn-home #shopline-section-footer .section-width{padding-left:16px!important;padding-right:16px!important}}\n/* 頁首：霧面噴砂玻璃（半透黑＋模糊＋細顆粒），文字加陰影保持清楚 */\nbody.isn-home #shopline-section-header .header.nav-bg-color{background:linear-gradient(180deg,rgba(22,22,22,.62),rgba(11,11,11,.5))!important;-webkit-backdrop-filter:blur(22px) saturate(160%) brightness(.8)!important;backdrop-filter:blur(22px) saturate(160%) brightness(.8)!important;border-bottom:1px solid rgba(255,255,255,.09)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.06),0 12px 32px rgba(0,0,0,.28)!important}\nbody.isn-home #shopline-section-header .header.nav-bg-color::before{content:\"\";position:absolute;inset:0;z-index:-1;pointer-events:none;opacity:.22;mix-blend-mode:overlay;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")}\nbody.isn-home #shopline-section-header .navigation-menu-top-layer>.navigation-menu-item>a,body.isn-home #shopline-section-header .navigation-menu-top-layer>.navigation-menu-item>span,body.isn-home #shopline-section-header .NavigationBar-actionMenu-button{text-shadow:0 1px 3px rgba(0,0,0,.65)}\nbody.isn-home #shopline-section-header svg.icons{filter:drop-shadow(0 1px 2px rgba(0,0,0,.6))}\n/* 下拉選單（品牌總覽等）：跟原本官網首頁一模一樣（白底、深色字、一欄 8 個），全部直接展開不用左右捲\n   因為頁首有模糊效果，SHOPLINE 原本用 position:fixed 排版會失效，所以這裡直接用 CSS 排成多欄 */\nbody.isn-home #shopline-section-header .navigation-menu-top-layer>.navigation-menu-item>.navigation-menu-second-layer{position:absolute!important;top:100%!important;left:var(--isn-dx,0px)!important;right:auto!important;width:max-content!important;max-width:calc(100vw - 32px)!important;max-height:none!important;grid-template-rows:repeat(8,auto);grid-auto-flow:column;grid-auto-columns:220px}\nbody.isn-home #shopline-section-header .navigation-menu-top-layer>.navigation-menu-item:hover>.navigation-menu-second-layer{display:grid!important}\nbody.isn-home #shopline-section-header .second-layer-scroll-buttons{display:none!important}\nbody.isn-home #shopline-section-header .navigation-menu-second-layer a,body.isn-home #shopline-section-header .navigation-menu-second-layer span,body.isn-home #shopline-section-header .navigation-menu-third-layer a,body.isn-home #shopline-section-header .navigation-menu-third-layer span,body.isn-home #shopline-section-header .dropdown-menu a{color:#2c2c2c!important;text-shadow:none!important}\n/* Logo：初稿的文字 Logo，S 為橘色 */\nbody.isn-home #shopline-section-header .header__logo img{display:none!important}\nbody.isn-home .isn-logo{display:inline-block;font-family:\"Archivo\",sans-serif;font-stretch:62%;font-weight:900;font-size:40px;line-height:1;letter-spacing:-.02em;color:#EDEBE6;text-transform:none;text-shadow:0 1px 3px rgba(0,0,0,.5);white-space:nowrap}\nbody.isn-home .isn-logo i{font:inherit!important;font-family:\"Archivo\",sans-serif!important;font-weight:900!important;font-stretch:62%!important;font-style:normal!important;color:#FF3D14}\nbody.isn-home nav.header--mobile .isn-logo{font-size:30px}\n";h.appendChild(st);
var host=d.getElementById('isn');
if(!host){host=d.createElement('div');host.id='isn';var cs=d.currentScript;cs.parentNode.insertBefore(host,cs);}
host.className='isn';host.innerHTML="\n\n\n\n<!-- HERO：本週主打 -->\n<section class=\"hero\">\n  <div class=\"hero-glow\"></div>\n  <div class=\"hero-word display\" id=\"heroWord\">SMOKE</div>\n  <div class=\"wrap\">\n    <div>\n      <div class=\"tag-row\"><span class=\"tag hot\">🔥 本週熱銷 No.1</span><span class=\"tag\"><span class=\"dot\"></span><span id=\"cwTotal\">4 色</span></span></div>\n      <h1 class=\"display\">Asics<br><span class=\"outline\">Kahana</span> 8</h1>\n      <div class=\"cw-line\"><b id=\"cwZh\">煙紫</b><span class=\"mono\" id=\"cwEn\">Light Smoke Purple / HQ4307-500</span></div>\n      <div class=\"price-row\">\n        <span class=\"price\" id=\"hPrice\">NT$4,980</span>\n        <span class=\"inst\">刷卡分期 <b id=\"hInst\">每期 $208 起</b>・3–24 期</span>\n      </div>\n      <div class=\"sw-head\"><span class=\"mono\">選配色</span><span class=\"mono\" id=\"cwCount\">01 / 10</span></div>\n      <div class=\"swatches\" id=\"swatches\"></div>\n      <div class=\"cta-row\">\n        <a class=\"btn btn-main\" id=\"heroLink\" href=\"#\">查看這雙 <span class=\"arr\">→</span></a>\n        <a class=\"btn btn-line\" href=\"https://www.isneakers171.com/products?query=Gel-Kahana%208\">全部 Kahana 8</a>\n      </div>\n      <div class=\"perks\"><span>100% 正品</span><span>刷卡分期 3–24 期</span><span>新會員 $300 購物金</span></div>\n    </div>\n    <div class=\"stage\">\n      <a class=\"stage-card\" id=\"stageCard\" href=\"#\"><img id=\"stageImg\" alt=\"Asics Gel-Kahana 8\"></a>\n      <div class=\"sticker s1\">New<br>Color</div>\n      <div class=\"sticker s2\" id=\"skuSticker\">HQ4307-500</div>\n      <div class=\"stage-ui\"><span class=\"count\" id=\"stageCount\">01 / 10</span><button onclick=\"stepCw(-1)\" aria-label=\"上一個\">←</button><button onclick=\"stepCw(1)\" aria-label=\"下一個\">→</button></div>\n    </div>\n  </div>\n</section>\n\n<div class=\"tape\"><div class=\"tape-track\" id=\"tape\"></div></div>\n\n<!-- 熱銷排行 TOP 10 -->\n<section class=\"sec rank\" id=\"rank\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\">\n      <h2 class=\"display\">Hot <span class=\"outline\">10</span><small>熱銷排行</small></h2>\n    </div>\n    <div class=\"rk-grid\" id=\"rkGrid\"></div>\n  </div>\n</section>\n\n<!-- 限時預購 -->\n<section class=\"sec light\" id=\"drop\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\">\n      <h2 class=\"display\">Pre-<span class=\"outline\">Order</span><small>限時預購</small></h2>\n      <div class=\"side\"><span class=\"mono\">● 上架即時更新</span><a class=\"view-all\" href=\"https://www.isneakers171.com/categories/%E9%99%90%E6%99%82%E9%A0%90%E8%B3%BC\">看全部預購 →</a></div>\n    </div>\n    <div class=\"grid\" id=\"dropGrid\"></div>\n  </div>\n</section>\n\n<!-- 精品墨鏡 -->\n<section class=\"sec shades\" id=\"shades\">\n  <div class=\"sh-bgword display\" aria-hidden=\"true\">Shades</div>\n  <div class=\"wrap\">\n    <div class=\"sec-head\">\n      <h2 class=\"display\">Designer<br><span class=\"outline\">Shades</span><small>精品墨鏡・明星同款</small></h2>\n      <div class=\"side\"><span class=\"mono\">● 本店熱銷品類</span><p>Dior、Celine、Prada、Miu Miu 正品墨鏡，官網價比原價最多省 <b id=\"shMax\">40%</b>。</p><a class=\"view-all\" href=\"https://www.isneakers171.com/categories/httpswwwisneakers171comcollectionsdesigner-sunglasses\">看全部精品墨鏡 →</a></div>\n    </div>\n    <div class=\"sh-grid\" id=\"shGrid\"></div>\n  </div>\n</section>\n\n<!-- 服飾 -->\n<section class=\"sec\" id=\"apparel\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\">\n      <h2 class=\"display\">Appa<span class=\"outline\">rel</span><small>服飾專區・帽T／外套／短T</small></h2>\n      <div class=\"side\"><span class=\"mono\">● Drew House / Bape / Off-White / Undefeated</span><p>日韓美街頭品牌，本季新款。</p><a class=\"view-all\" href=\"https://www.isneakers171.com/categories/%E6%9C%8D%E9%A3%BE%E7%B3%BB%E5%88%97\">看全部服飾 →</a></div>\n    </div>\n    <div class=\"tl\" id=\"tl\">\n      <div class=\"tl-stage\" id=\"tlStage\">\n        <div class=\"tl-head\"><span class=\"mono\">Try the look · 點模特兒看穿搭</span><span class=\"mono\" id=\"tlCount\"></span></div>\n        <div class=\"tl-grid\"></div>\n        <div class=\"tl-bgword display\" id=\"tlWord\"><span>Try the look ✦ Try the look ✦ Try the look ✦ </span><span>Try the look ✦ Try the look ✦ Try the look ✦ </span></div>\n        <div class=\"tl-floor\"></div>\n        <div class=\"tl-flash\" id=\"tlFlash\"></div>\n        <div id=\"tlModels\"></div>\n        <button class=\"tl-back mono\" id=\"tlBack\">← 全部造型</button>\n        <div class=\"tl-nav\"><button id=\"tlPrev\" aria-label=\"上一個\">←</button><button id=\"tlNext\" aria-label=\"下一個\">→</button></div>\n        <span class=\"tl-ai mono\">AI 穿搭示意・以商品頁實品為準</span>\n        <div class=\"tl-pg\"><button id=\"tlPgPrev\" aria-label=\"前面的造型\">←</button><button id=\"tlPgNext\" aria-label=\"後面的造型\">→</button></div>\n      </div>\n      <aside class=\"tl-panel\" id=\"tlPanel\"></aside>\n    </div>\n    <div class=\"fx-head\"><h3 class=\"display\">Featured <span class=\"outline\">Apparel</span><small>精選服飾</small></h3><a class=\"view-all\" href=\"https://www.isneakers171.com/categories/%E6%9C%8D%E9%A3%BE%E7%B3%BB%E5%88%97\">看全部服飾 →</a></div>\n    <div class=\"fx-grid\" id=\"fxGrid\"></div>\n  </div>\n</section>\n\n<!-- 品牌 -->\n<section class=\"sec light\" id=\"brands\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\">\n      <h2 class=\"display\">Brands<small>從你熟的牌子開始逛</small></h2>\n      <div class=\"side\"><a class=\"view-all\" href=\"https://www.isneakers171.com/categories/%E5%93%81%E7%89%8C%E7%B8%BD%E8%A6%BD\">全部品牌 →</a></div>\n    </div>\n    <div class=\"brand-grid\" id=\"brandList\"></div>\n  </div>\n</section>\n\n<!-- 服務 -->\n<section class=\"service\" id=\"ask\">\n  <canvas id=\"cubeCanvas\"></canvas>\n  <div class=\"wrap\">\n    <div>\n      <span class=\"mono\" style=\"color:var(--signal);font-weight:700\">● Online Store · LINE 客服 15:00–21:00</span>\n      <h2 class=\"display\" style=\"margin-top:18px\">尺寸<br>不確定？<br><em>先問再買</em></h2>\n      <p>傳型號給我們，幫你比對平常穿的尺寸再下單。預購到貨會主動通知，不用自己追進度。</p>\n      <div class=\"cta-row\">\n        <a class=\"btn btn-main\" href=\"https://lin.ee/VCacket\">LINE 詢問尺寸 <span class=\"arr\">→</span></a>\n        <a class=\"btn btn-line\" href=\"https://www.isneakers171.com/about/delivery-policy\">預購說明</a>\n      </div>\n      <div class=\"facts\">\n        <div class=\"fact\"><b>100%</b><small>正品保證</small></div>\n        <div class=\"fact\"><b>3–24</b><small>期刷卡分期</small></div>\n        <div class=\"fact\"><b>$300</b><small>新會員購物金</small></div>\n        <div class=\"fact\"><b>LINE</b><small>尺寸即時諮詢</small></div>\n      </div>\n    </div>\n    <div class=\"sv-stage\" id=\"cubeStage\">\n      <div class=\"hud\"><i></i><i></i><i></i><i></i>\n        <span class=\"tl\">IS—CUBE // SYS.<b>v26</b></span>\n        <span class=\"tr live\" id=\"hudStatus\">Solved</span>\n        <span class=\"bl\">Moves <b id=\"hudMoves\">000</b></span>\n        <span class=\"br\">Easter eggs <b id=\"hudFound\">0/6</b></span>\n      </div>\n      <div class=\"egg\" id=\"egg\"><div class=\"k\" id=\"eggK\">// EASTER EGG FOUND</div><div class=\"t\" id=\"eggT\"></div><div class=\"s\" id=\"eggS\"></div></div>\n      <div class=\"sv-fallback display\">iS</div>\n      <div class=\"sv-hint mono\" id=\"svHint\"><i></i>點方塊，有彩蛋</div>\n    </div>\n  </div>\n</section>\n\n<div class=\"buybar\" id=\"buybar\">\n  <img id=\"bbImg\" alt=\"\">\n  <div class=\"t\"><b id=\"bbName\">Asics Gel-Kahana 8</b><span id=\"bbPrice\">NT$4,980</span></div>\n  <a class=\"btn btn-main\" id=\"bbLink\" href=\"#\">查看這雙 →</a>\n</div>\n\n";
var tk=d.createElement('div');tk.className='isn isn-tk';tk.id='isnTicker';tk.innerHTML="<div class=\"ticker\"><div class=\"ticker-track\" id=\"ticker\"></div></div>";host.parentNode.insertBefore(tk,host);
})();
/* SHOPLINE 整合：盡早標記首頁、把跑馬燈移到最上面 */
document.body.classList.add('isn-home');
(function(){var tk=document.getElementById('isnTicker'),a=document.getElementById('shopline-section-announcement')||document.getElementById('shopline-section-header');if(tk&&a)a.parentNode.insertBefore(tk,a);})();
function isnReady(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){fn();},{once:true}); else fn(); }
/* 頁首換成初稿的文字 Logo（S 橘色） */
document.querySelectorAll('#shopline-section-header .header__logo').forEach(function(a){if(!a.querySelector('.isn-logo'))a.insertAdjacentHTML('beforeend','<span class="isn-logo">i<i>S</i>NEAKERS</span>');});
/* 下拉選單超出畫面右邊時自動往左移 */
(function(){var hd=document.getElementById('shopline-section-header');if(!hd)return;hd.querySelectorAll('.navigation-menu-top-layer>.navigation-menu-item').forEach(function(li){li.addEventListener('mouseenter',function(){var s=li.querySelector(':scope>.navigation-menu-second-layer');if(!s)return;s.style.setProperty('--isn-dx','0px');requestAnimationFrame(function(){var r=s.getBoundingClientRect(),over=r.right-(document.documentElement.clientWidth-16);if(over>0)s.style.setProperty('--isn-dx',(-Math.min(over,r.left-16))+'px');});});});})();

function isnMain(){

const IMG = id => `https://shoplineimg.com/5c895a4e7f65960001080f83/${id}/540x.webp?source_format=jpg`;
const P = s => `https://www.isneakers171.com/products/${s}`;
const fmt = n => 'NT$' + n.toLocaleString('en-US');
const per = n => Math.ceil(n/24);

const tk=[['NEW','新會員加入就送 $300 購物金'],['刷卡分期','3–24 期'],['PRE-ORDER','新品每日上架'],['100%','正品保證'],['LINE','尺寸問題即時回覆']];
document.getElementById('ticker').innerHTML=[...tk,...tk].map(([a,b])=>`<span><i>${a}</i>${b}<span style="opacity:.4">✦</span></span>`).join('');
const tp=['Pre-Order','Kobe Protro','Jordan','Mind 001','New Arrivals','Bape','On Running'];
document.getElementById('tape').innerHTML=[...tp,...tp,...tp].map(t=>`<span>${t}</span>`).join('');

/* 本週主打：配色切換，點圖或按鈕進商品頁 */
const HERO_NAME='Asics Gel-Kahana 8';
/* 本週熱銷 No.1（上線後由 SHOPLINE 商品列表 isnplhero 帶入，第一個＝預設顯示） */
const CW=(function(){ const n=readNative('isnplhero'); if(!n.length) return [
  {zh:'高達配色',en:'Gundam',sku:'1203B031-104',img:'6ac89770953fd0b76c680db4',p:4280,c:'#4F7CC0',w:'GUNDAM',u:'isneakers-asics-gel-kahana-8-fl-gundam-1203b031-104'},
  {zh:'米黑',en:'Beige Black',sku:'1203B031-001',img:'6acf24b49f02e160ece138db',p:3980,c:'#C9B79C',w:'BEIGE',u:'isneakers-asics-gel-kahana-8-fl-beige-black-1203b031-001'},
  {zh:'灰黑',en:'SP Grey Black',sku:'1203B136-020',img:'6accb3810c73e68ae1529277',p:3180,c:'#9A9A95',w:'GREY',u:'isneakers-asics-gel-kahana-8-sp-grey-black-1203b136-020'},
  {zh:'灰藍',en:'Grey Blue',sku:'1203B133-022',img:'6acf227c5941975633187c48',p:3980,c:'#7FA3C8',w:'BLUE',u:'isneakers-asics-gel-kahana-8-grey-blue-1203b133-022'},
];
  const COL=[['gundam','#4F7CC0'],['blue','#7FA3C8'],['red','#E5322D'],['pink','#F48FB1'],['green','#9ED68C'],['purple','#B39DDB'],['beige','#C9B79C'],['grey','#9A9A95'],['gray','#9A9A95'],['white','#D8D2C4'],['black','#FF6A2B']];
  return n.map(d=>{ const t=d.t.replace(/^.*?｜/,''); const q=t.match(/"([^"]+)"/); let en=q?q[1]:t; if(/\bSP\b/.test(t)) en='SP '+en;
    const after=q?t.slice(t.indexOf(q[0])+q[0].length).trim().split(' ')[0]:''; const zh=/[\u4e00-\u9fff]/.test(after)?after:en;
    const sku=(t.match(/[A-Z0-9]{4,}-[A-Z0-9]{2,}/g)||['']).pop(); const lo=en.toLowerCase(); const c=(COL.find(k=>lo.includes(k[0]))||[0,'#FF3D14'])[1];
    const w=(en.replace(/^SP /,'').split(' ')[0]||'HOT').toUpperCase(); return {zh,en,sku,p:d.p,c,w,src:d.src,href:d.href}; }); })();
const cwImg=c=>c.src||IMG(c.img), cwHref=c=>c.href||P(c.u);
let cw=0;
const sw=document.getElementById('swatches');
sw.innerHTML=CW.map((c,i)=>`<button class="sw" data-i="${i}" title="${c.zh}"><img src="${cwImg(c)}" alt="${c.zh}" loading="lazy"></button>`).join('');
document.getElementById('cwTotal').textContent=CW.length+' 色';
sw.onclick=e=>{const b=e.target.closest('.sw'); if(b) setCw(+b.dataset.i);};
function setCw(i){
  cw=(i+CW.length)%CW.length; const c=CW[cw], n=`${String(cw+1).padStart(2,'0')} / ${CW.length}`;
  document.documentElement.style.setProperty('--glow',c.c);
  const card=document.getElementById('stageCard'), img=document.getElementById('stageImg');
  card.classList.add('out');
  setTimeout(()=>{img.onload=()=>card.classList.remove('out'); img.src=cwImg(c);},260);
  card.href=cwHref(c);
  document.getElementById('heroWord').textContent=c.w;
  document.getElementById('cwZh').textContent=c.zh;
  document.getElementById('cwEn').textContent=`${c.en} / ${c.sku}`;
  document.getElementById('skuSticker').textContent=c.sku;
  document.getElementById('hPrice').textContent=fmt(c.p);
  document.getElementById('hInst').textContent=`每期 $${per(c.p)} 起`;
  document.getElementById('cwCount').textContent=n;
  document.getElementById('stageCount').textContent=n;
  document.getElementById('heroLink').href=cwHref(c);
  document.querySelectorAll('.sw').forEach((b,j)=>b.classList.toggle('on',j===cw));
  document.getElementById('bbImg').src=cwImg(c);
  document.getElementById('bbName').textContent=`${HERO_NAME} ${c.zh}`;
  document.getElementById('bbPrice').textContent=fmt(c.p);
  document.getElementById('bbLink').href=cwHref(c);
}
function stepCw(d){setCw(cw+d);}
setCw(0);

/* 限時預購／精選服飾：讀同頁的 SHOPLINE 原生商品列表，套初稿卡片樣式（商品圖用第 2 張） */
function escH(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function parseTitle(t){
  t=t.replace(/^.*?｜/,'').replace(/\s+/g,' ').trim();
  const w=t.split(' ');
  while(w.length>2&&(/^(?=.*\d)[A-Z0-9][A-Z0-9-]{4,}$/.test(w[w.length-1])||/^\d{4}年$/.test(w[w.length-1])||/^(男款|女款)$/.test(w[w.length-1]))) w.pop();
  t=w.join(' ').replace(/ x /gi,' × ');
  const rules=[[/^Bape × Adidas( Originals)?/i,'BAPE × ADIDAS',1],[/^(Nike )?Air Jordan/i,'JORDAN',0],[/^.+ × (Nike )?Air Jordan/i,'JORDAN',0],[/^Nike /i,'NIKE',1],[/^Adidas( Originals)? /i,'ADIDAS',1],[/^(Drew House|Off-White|New Balance|Onitsuka Tiger|Water The Plant) /i,'',1]];
  for(const [re,b,strip] of rules){const m=t.match(re); if(m) return {b:(b||m[1]).toUpperCase(), n:strip?t.slice(m[0].length).trim():t.replace(/^Nike /i,'')};}
  const i=t.indexOf(' '); return i<0?{b:t.toUpperCase(),n:t}:{b:t.slice(0,i).toUpperCase(),n:t.slice(i+1)};
}
function readNative(id){
  const sec=document.getElementById('shopline-section-'+id); if(!sec) return [];
  /* 用 SHOPLINE 給的完整圖片網址（含 ?source_format=…）：剛上架的商品 CDN 還沒產生縮圖，少了這個參數會讀不到 */
  const pick=im=>{ if(!im) return ''; const ss=im.getAttribute('data-srcset')||im.getAttribute('srcset')||''; const list=ss.split(',').map(x=>x.trim().split(/\s+/)).filter(x=>x[0]).map(x=>({u:x[0],w:parseInt(x[1])||0})).sort((a,b)=>a.w-b.w); const hit=list.find(x=>x.w>=540)||list[list.length-1]; return hit?hit.u:(im.getAttribute('data-src')||im.getAttribute('src')||''); };
  return [...sec.querySelectorAll('.product-list__product')].map(p=>{
    const a=p.querySelector('a[href*="/products/"]'); if(!a) return null;
    const pe=p.querySelector('.price-sale')||p.querySelector('.quick-cart-price .price:not(.price-crossed)')||p.querySelector('.quick-cart-price');
    const pt=pe?pe.textContent:''; const nums=[...pt.matchAll(/NT\$\s?([\d,]+)/g)].map(m=>+m[1].replace(/,/g,''));
    const raw=((p.querySelector('.title')||{}).textContent||'').trim(); const {b,n}=parseTitle(raw);
    const oe=p.querySelector('.price-crossed'); const o=oe?+((oe.textContent.match(/[\d,]+/)||['0'])[0].replace(/,/g,'')):0;
    return {b:escH(b),n:escH(n),href:a.getAttribute('href').replace(/[?&]draft=true/,''),src:pick(p.querySelector('.second-image img'))||pick(p.querySelector('img')),src2:pick(p.querySelector('img')),t:raw,o,p:nums[0]||0,from:/~/.test(pt)};
  }).filter(Boolean);
}
const DROP=readNative('isnplpre');
document.getElementById('dropGrid').innerHTML=DROP.map((d,i)=>`
  <a class="card" href="${d.href}">
    <div class="ph"><img src="${d.src}" alt="${d.n}" loading="lazy">
      <div class="badges">${i<3?'<span class="bdg new">NEW</span>':''}</div>
      <div class="hover"><span>查看商品 →</span></div></div>
    <div class="info"><div class="row1"><span class="mono">${d.b}</span><span class="mono">${String(i+1).padStart(2,'0')}</span></div>
      <div class="nm">${d.n}</div>
      <div class="pr"><b>${fmt(d.p)}${d.from?'<span style="font-size:.5em;font-weight:600"> 起</span>':''}</b><small>刷卡分期每期 $${per(d.p)}</small></div></div>
  </a>`).join('');

/* 精品墨鏡：明星同款（上線後由 SHOPLINE 精品墨鏡分類自動帶入） */
const SG=readNative('isnplsg');
/* 從商品名稱抓出：品牌、明星同款、短名稱 */
const SG_BRANDS=[['SAINT LAURENT','SAINT LAURENT'],['YSL','SAINT LAURENT'],['MIU MIU','MIU MIU'],['DIOR','DIOR'],['PRADA','PRADA'],['CELINE','CELINE'],['BALENCIAGA','BALENCIAGA'],['GENTLE MONSTER','GENTLE MONSTER'],['GUCCI','GUCCI'],['CHANEL','CHANEL'],['LOEWE','LOEWE'],['BOTTEGA VENETA','BOTTEGA VENETA']];
const SG_ALIAS=/繆繆|迪奧|聖羅蘭|賽琳|巴黎世家|YSL|普拉達|古馳|香奈兒/g;
function sgParse(raw){
  let t=raw.replace(/^.*?｜/,'').replace(/\s+/g,' ').trim(), star='';
  const toks=t.split(' '), drop=new Set(), STOP=/^(黑色|白色|貓眼|墨鏡|方形|圓形|女款|男款|經典|太陽眼鏡|光學眼鏡|黑框眼鏡|金色|銀色|字母)$/;
  toks.forEach((w,i)=>{ if(star) return; const m=w.match(/^(.+?)同款/); if(m&&!/^(明星|男女|情侶)$/.test(m[1])) star=m[1];
    else if(/^明星同款/.test(w)){ const names=[]; for(let j=i-1;j>=0&&/^[一-鿿]{2,3}$/.test(toks[j])&&!STOP.test(toks[j]);j--){ names.unshift(toks[j]); drop.add(j);} star=names[0]||''; } });
  t=toks.filter((w,i)=>!drop.has(i)).join(' ');
  if(!star){ const m=t.match(/(GD|Jennie|Jisoo|Lisa|Rosé)\S*款/); if(m) star=m[1]; }
  const up=t.toUpperCase(); let brand=''; for(const [k,v] of SG_BRANDS){ if(up.includes(k)){brand=v;break;} }
  let n=t.split(' ').map(w=>w.replace(/^.*同款/,'')).filter(w=>w&&!/^(?=.*\d)[A-Za-z0-9_-]{5,}$/.test(w)&&!/^\d{2}[A-Z]$/.test(w)).join(' ');
  for(const [k] of SG_BRANDS) n=n.replace(new RegExp(k.replace(' ','\\s+'),'ig'),'');
  n=n.replace(SG_ALIAS,'').replace(/\b(Dior|DIOR)\b/g,'').replace(/sunglasses/ig,'').replace(/\s+/g,' ').trim();
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  return {brand:esc(brand||t.split(' ')[0].toUpperCase()), star:esc(star), n:esc(n)};
}
function renderShades(list){
  const g=document.getElementById('shGrid'); if(!g||!list.length){ const s=document.getElementById('shades'); if(s) s.style.display='none'; return; }
  list=list.slice(0,9); let max=0;
  g.innerHTML=list.map((d,i)=>{ const x=sgParse(d.t); const off=d.o>d.p?Math.round((1-d.p/d.o)*100):0; max=Math.max(max,off);
    return `<a class="sh-card${i===0?' big':''}" href="${d.href}" style="--n:${i}">
      <div class="ph"><img class="a" src="${d.src}" alt="${x.brand} ${x.n}" loading="lazy"><img class="b" src="${d.src2||d.src}" alt="" loading="lazy"><span class="glare"></span>
        ${x.star?`<span class="star">${x.star} 同款</span>`:''}${off>=5?`<span class="off">-${off}%</span>`:''}</div>
      <div class="info"><div class="row1"><span class="mono">${x.brand}</span><span class="mono">${String(i+1).padStart(2,'0')}</span></div>
        <div class="nm">${x.n}</div>
        <div class="pr"><b>${fmt(d.p)}${d.from?' 起':''}</b>${d.o>d.p?`<s>${fmt(d.o)}</s>`:''}</div>
        ${i===0?'<span class="go">→</span>':''}</div></a>`; }).join('');
  if(max) document.getElementById('shMax').textContent=max+'%';
  const io2=new IntersectionObserver(([e],o)=>{ if(e.isIntersecting){ g.classList.add('in'); o.disconnect(); } },{threshold:.12}); io2.observe(g);
  addEventListener('scroll',function sc(){ if(g.getBoundingClientRect().top<innerHeight*.9){ g.classList.add('in'); removeEventListener('scroll',sc);} },{passive:true});
}
renderShades(SG);

/* 熱銷排行 TOP 10（上線後由 SHOPLINE 商品列表 isnplrank 帶入，順序＝排名） */
const RANK=readNative('isnplrank');
function rkParse(raw){
  const esc=v=>String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  const t=raw.replace(/^.*?｜/,'').replace(/現貨秒發/g,'').replace(/\s+/g,' ').trim();
  const BR=['ASICS','BALENCIAGA','YEEZY','XVESSEL','FERRARI','PUMA','DIOR','SALOMON','MIU MIU','BAPE','NIKE','JORDAN','ADIDAS','NEW BALANCE','CELINE','PRADA','SAINT LAURENT','VLONE','OFF-WHITE','DREW HOUSE','CONVERSE','HOKA','CROCS','ON'];
  const up=t.toUpperCase(); let best=null;
  for(const b of BR){ const m=up.match(new RegExp('(^|[^A-Z])'+b.replace(' ','\\s+')+'(?![A-Z])')); if(m&&(!best||m.index<best.i)) best={b,i:m.index}; }
  const n=t.split(' ').filter(x=>!/^(?=.*\d)[A-Za-z0-9_-]{5,}$/.test(x)).join(' ').replace(/ x /gi,' × ');
  const brand=best?best.b:t.split(' ')[0].toUpperCase(); let nm=n; if(nm.toUpperCase().startsWith(brand+' ')) nm=nm.slice(brand.length+1).replace(/^×\s*/,'');
  return {b:esc(brand), n:esc(nm)};
}
function renderRank(list){
  const g=document.getElementById('rkGrid'); if(!g) return;
  if(!list.length){ document.getElementById('rank').style.display='none'; return; }
  g.innerHTML=list.slice(0,10).map((d,i)=>{ const x=rkParse(d.t);
    return `<a class="rk-card${i<3?' top':''}" href="${d.href}"><span class="rk-no">${String(i+1).padStart(2,'0')}</span>
      <div class="ph"><img src="${d.src}" alt="${x.n}" loading="lazy"></div>
      <div class="info"><span class="mono">${x.b}</span><div class="nm">${x.n}</div><b>${fmt(d.p)}${d.from?' 起':''}</b></div></a>`; }).join('');
}
renderRank(RANK);

/* 服飾：Try the Look — 模特兒並排，點一位放大，右邊列出單品 */
const R=(b,n,img,p,u)=>({b,n,img,p,u});
const LOOKS=[
  {name:'Mascot Mood',zh:'笑臉帽T 寬褲日常',cut:'https://img.shoplineapp.com/media/image_clips/6aee1554c551b6001ff5beb8/original.png',hot:[50,30],
   main:R('DREW HOUSE','FW26 Flocking Mascot Hoodie 黑','6ae5a800225229533a40984f',4680,'isneakers-drew-house-fw26-flocking-mascot-hoodie-black-dh-hd2664'),
   rec:[R('DREW HOUSE','FW26 Mascot Hoodie 粉','6ae5ad8bc95834b044cfda11',4680,'isneakers-drew-house-fw26-flocking-mascot-hoodie-pink-dh-hd2664'),
        R('DREW HOUSE','FW26 Mascot Hoodie 藍','6ae5a8bd9dafd554e4588bf2',4680,'isneakers-drew-house-fw26-flocking-mascot-hoodie-blue-dh-hd2664')]},
  {name:'Camo Track',zh:'迷彩運動外套 工裝褲',cut:'https://img.shoplineapp.com/media/image_clips/6aee15550b8948000bf88d51/original.png',hot:[36,30],
   main:R('BAPE × ADIDAS','Shark Track Hoodie Jacket 迷彩','6aec47762b19d087faa59902',16280,'isneakers-bape-x-adidas-originals-shark-track-hoodie-jacket-camo-kf4916'),
   rec:[R('BAPE','SS26 Jersey 足球衣 黑','6aed7aea2c6ea4000f2b62be',5780,'isneakers-bape-ss26-jersey-black-0zxtem312091q'),
        R('UNDEFEATED','FW25 刷色牛仔外套','6aec194aa26ad0000e81477e',7680,'isneakers｜undefeated-fw25-denim-jacket-unisex-uc53gwj10m')]},
  {name:'Arrow Back',zh:'金屬箭頭短T 黑寬褲',cut:'https://img.shoplineapp.com/media/image_clips/6aee15564edc330018a1977a/original.png',hot:[54,28],
   main:R('OFF-WHITE','SS26 金屬箭頭 經典短T','6a5fbd7cba7a55a395306784',4980,'isneakers-off-white-ss26-1-1-8'),
   rec:[R('OFF-WHITE','SS26 櫻花刺繡 雙箭頭短T','6a5fb05c6c3dfad92b49db93',5280,'isneakers-off-white-ss26-1-1-5'),
        R('OFF-WHITE','SS26 街頭人像塗鴉 雙箭頭','6a5fbae9d8c1910014a7d942',4580,'isneakers-off-white-ss26-1-1-7')]},
];
const tl=document.getElementById('tl'), tlModels=document.getElementById('tlModels'), tlPanel=document.getElementById('tlPanel');
document.getElementById('tlCount').textContent=`${String(LOOKS.length).padStart(2,'0')} Looks`;
tlModels.innerHTML=LOOKS.map((L,i)=>{const x=50;
  return `<div class="tl-model" role="button" tabindex="0" data-i="${i}" style="--x:${x}%;--n:${i}" aria-label="LOOK ${i+1}">
    <span class="spot"></span><img src="${L.cut}" alt="${L.main.n} 穿搭"><span class="sheen" style="--cut:url(${L.cut})"></span><span class="scanl"></span><span class="brk"><i></i><i></i><i></i><i></i></span>
    <a class="tl-hot" href="${P(L.main.u)}" style="--hx:${L.hot[0]}%;--hy:${L.hot[1]}%"><span>${L.main.b}・${fmt(L.main.p)} →</span></a>
    <span class="cta">看這套穿搭 ＋</span>
    <span class="lbl"><b>LOOK ${String(i+1).padStart(2,'0')}</b><i class="lb">・${L.main.b}</i></span></div>`;}).join('');
let tlSel=-1, tlOff=0;
/* 一次最多 5 位（手機 3 位），最新的排最前面；多的往左右滑 */
const tlMax=()=>innerWidth<600?3:(innerWidth<1000?4:5);
function tlLayout(){
  const v=Math.min(tlMax(),LOOKS.length); tlOff=Math.max(0,Math.min(tlOff,LOOKS.length-v));
  tlModels.querySelectorAll('.tl-model').forEach((m,i)=>{const k=i-tlOff;
    m.style.setProperty('--x',((k+1)/(v+1)*100)+'%'); m.classList.toggle('off',k<0||k>=v); m.style.setProperty('--n',Math.max(0,k));});
  const pad=n=>String(n).padStart(2,'0');
  document.getElementById('tlCount').textContent=`LOOK ${pad(tlOff+1)}–${pad(tlOff+v)} / ${pad(LOOKS.length)}`;
  document.getElementById('tlPgPrev').disabled=tlOff<=0; document.getElementById('tlPgNext').disabled=tlOff>=LOOKS.length-v;
  tl.classList.toggle('single',LOOKS.length<=v);
}
const tlPage=d=>{ if(tl.classList.contains('open')) return; tlOff+=d; tlLayout(); };
const row=(r,tag,cls,d)=>`<div class="tl-item" style="transition-delay:${d}s"><img src="${IMG(r.img)}" alt="">
  <div><span class="tag ${cls}">${tag}</span><div class="br">${r.b}</div><div class="nm">${r.n}</div><div class="pr">${fmt(r.p)}</div></div>
  <a class="go" href="${P(r.u)}" aria-label="查看商品">→</a></div>`;
function openLook(i){
  tlSel=(i+LOOKS.length)%LOOKS.length; const L=LOOKS[tlSel];
  { const v=Math.min(tlMax(),LOOKS.length); if(tlSel<tlOff) tlOff=tlSel; else if(tlSel>=tlOff+v) tlOff=tlSel-v+1; }
  tlModels.querySelectorAll('.tl-model').forEach((m,j)=>m.classList.toggle('sel',j===tlSel));
  tlPanel.innerHTML=`<span class="mono k">LOOK ${String(tlSel+1).padStart(2,'0')} / ${String(LOOKS.length).padStart(2,'0')}</span>
    <h3 class="display" id="tlTitle"></h3><div class="sub">${L.zh}</div><div class="bar"></div>
    ${row(L.main,'身上這件','',.35)}
    ${L.rec.map((r,k)=>row(r,'同風格推薦','rec',.45+k*.08)).join('')}
    <a class="btn btn-main" href="${P(L.main.u)}">查看「${L.main.b}」商品頁 <span class="arr">→</span></a>`;
  tlPanel.scrollTop=0;
  const wasOpen=tl.classList.contains('open');
  tl.classList.add('open'); tl.classList.toggle('swap',wasOpen);
  const fl=document.getElementById('tlFlash'); fl.classList.remove('go'); void fl.offsetWidth; fl.classList.add('go');
  tlScramble(document.getElementById('tlTitle'),L.name);
  document.getElementById('tlWord').innerHTML=Array(2).fill(`<span>${Array(3).fill(L.name+' ✦ ').join('')}</span>`).join('');
  if(innerWidth<1000) setTimeout(()=>tlPanel.scrollIntoView({behavior:'smooth',block:'start'}),650);
}
function closeLook(){ tl.classList.remove('open','swap'); setTimeout(tlLayout,0); document.getElementById('tlWord').innerHTML=Array(2).fill('<span>'+Array(3).fill('Try the look ✦ ').join('')+'</span>').join(''); tlModels.querySelectorAll('.tl-model').forEach(m=>m.classList.remove('sel')); tlSel=-1; }
tlModels.addEventListener('click',e=>{ if(e.target.closest('.tl-hot')) return; const m=e.target.closest('.tl-model'); if(m && !tl.classList.contains('open')) openLook(+m.dataset.i); });
document.getElementById('tlBack').onclick=closeLook;
document.getElementById('tlPgPrev').onclick=()=>tlPage(-1);
document.getElementById('tlPgNext').onclick=()=>tlPage(1);
addEventListener('resize',tlLayout); tlLayout();
/* 手指或滑鼠拖曳翻頁 */
{ let sx=null; const st=document.getElementById('tlStage');
  st.addEventListener('pointerdown',e=>{ if(!tl.classList.contains('open')) sx=e.clientX; });
  st.addEventListener('pointerup',e=>{ if(sx===null) return; const dx=e.clientX-sx; sx=null; if(Math.abs(dx)>60){ tlPage(dx<0?1:-1); st._drag=true; setTimeout(()=>st._drag=false,50);} });
  st.addEventListener('click',e=>{ if(st._drag){ e.stopPropagation(); e.preventDefault(); } },true); }
function tlScramble(el,txt){const cs='#%&*+=<>/\\ISNEAKERS01';let f=0,n=16;clearInterval(el._t);
  el._t=setInterval(()=>{f++;el.textContent=[...txt].map((c,i)=>c===' '?' ':(i/txt.length<f/n?c:cs[Math.random()*cs.length|0])).join('');if(f>=n){clearInterval(el._t);el.textContent=txt;}},40);}
/* 捲到才開始進場顯影 */
new IntersectionObserver(([e],o)=>{if(e.isIntersecting){tl.classList.add('inview');o.disconnect();}},{threshold:.25}).observe(tl);
/* 每位模特兒顯影完成後標記 .rev；萬一動畫事件沒觸發，2.5 秒後也一律標記 */
tlModels.querySelectorAll('.tl-model').forEach(m=>{
  m.querySelector('img').addEventListener('animationend',e=>{ if(e.animationName==='materialize') m.classList.add('rev'); });
});
new MutationObserver(()=>{ if(tl.classList.contains('inview')) setTimeout(()=>tlModels.querySelectorAll('.tl-model').forEach(m=>m.classList.add('rev')),2500); }).observe(tl,{attributes:true,attributeFilter:['class']});
addEventListener('scroll',function chk(){const r=tl.getBoundingClientRect();if(r.top<innerHeight*.75){tl.classList.add('inview');removeEventListener('scroll',chk);}},{passive:true});
/* 滑鼠視差 */
const tlStage=document.getElementById('tlStage');
tlStage.addEventListener('pointermove',e=>{const r=tlStage.getBoundingClientRect();tlStage.style.setProperty('--px',((e.clientX-r.left)/r.width-.5).toFixed(3));tlStage.style.setProperty('--py',((e.clientY-r.top)/r.height-.5).toFixed(3));});
tlStage.addEventListener('pointerleave',()=>{tlStage.style.setProperty('--px',0);tlStage.style.setProperty('--py',0);});
document.getElementById('tlPrev').onclick=()=>openLook(tlSel-1);
document.getElementById('tlNext').onclick=()=>openLook(tlSel+1);
addEventListener('keydown',e=>{ if(!tl.classList.contains('open')) return; if(e.key==='Escape')closeLook(); if(e.key==='ArrowRight')openLook(tlSel+1); if(e.key==='ArrowLeft')openLook(tlSel-1); });

/* 精選服飾 6×2（上線後由 SHOPLINE 的分類商品自動帶入） */
const FX=readNative('isnplfx');
const fxGrid=document.getElementById('fxGrid');
fxGrid.innerHTML=FX.map((r,i)=>`<a class="fx-card" href="${r.href}" style="--n:${i}">
  <div class="ph"><img src="${r.src}" alt="${r.n}" loading="lazy"><span class="no">${String(i+1).padStart(2,'0')}</span>${i<2?'<span class="bdg new">NEW</span>':''}<span class="go">→</span></div>
  <div class="info"><span class="mono">${r.b}</span><div class="nm">${r.n}</div><div class="pr">${fmt(r.p)}${r.from?' 起':''}</div></div></a>`).join('');
new IntersectionObserver(([e],o)=>{ if(e.isIntersecting){ fxGrid.classList.add('in'); o.disconnect(); } },{threshold:.15}).observe(fxGrid);
addEventListener('scroll',function fc(){ if(fxGrid.getBoundingClientRect().top<innerHeight*.9){ fxGrid.classList.add('in'); removeEventListener('scroll',fc);} },{passive:true});

/* 品牌 */
const BR=[['Kobe','6ae5bc0842fabc8eee50ea89'],['Jordan','6aed8033dc92b50013062bbb'],['Mind 001','6a651744cea377315515d534'],['On Running','6aed8d4c05fb55002e2e7121'],['Bape','6aec47762b19d087faa59902'],['Off-White','6a5fbd7cba7a55a395306784']];
const BRL={"Kobe": "https://www.isneakers171.com/categories/kobe-%E7%B3%BB%E5%88%97", "Jordan": "https://www.isneakers171.com/categories/air-jordan", "Mind 001": "https://www.isneakers171.com/categories/nike-mind-001", "On Running": "https://www.isneakers171.com/categories/on%E6%98%82%E8%B7%91%E9%9E%8Bon", "Bape": "https://www.isneakers171.com/categories/6879fd17a9b01f0014346489", "Off-White": "https://www.isneakers171.com/categories/off-white"};
const bl=document.getElementById('brandList');
bl.innerHTML=BR.map(([n,img],i)=>`
  <a class="bcard" href="${BRL[n]}" style="--d:${i*0.09}s"><img src="${IMG(img)}" alt="${n}" loading="lazy">
    <span class="no">${String(i+1).padStart(2,'0')} / ${String(BR.length).padStart(2,'0')}</span><span class="tagb">SHOP NOW</span>
    <div class="run"><span>${Array(8).fill(`Shop ${n} →&nbsp;&nbsp;`).join('')}</span></div>
    <div class="name"><span class="display">${n}</span></div></a>`).join('');
/* 進場：捲到才一張張由下往上展開 */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.2});
/* 備援：捲動時直接檢查位置，確保圖卡一定會出現 */
const revealCheck=()=>bl.querySelectorAll('.bcard:not(.in)').forEach(c=>{const r=c.getBoundingClientRect(); if(r.top<innerHeight*.9&&r.bottom>0) c.classList.add('in');});
addEventListener('scroll',revealCheck,{passive:true}); revealCheck();
bl.querySelectorAll('.bcard').forEach(c=>{
  io.observe(c);
  /* 滑鼠 3D 傾斜 + 反光 */
  c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
    c.style.setProperty('--ry',`${(x-.5)*10}deg`);c.style.setProperty('--rx',`${(.5-y)*10}deg`);
    c.style.setProperty('--mx',`${x*100}%`);c.style.setProperty('--my',`${y*100}%`);});
  c.addEventListener('mouseleave',()=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg');});
});

/* 手機：主打按鈕滑出畫面後出現底部列 */
new IntersectionObserver(([e])=>document.getElementById('buybar').classList.toggle('on',!e.isIntersecting&&e.boundingClientRect.top<0)).observe(document.getElementById('heroLink'));

window.stepCw=stepCw; window.setCw=setCw;

}
isnReady(isnMain);
isnReady(async function(){
'use strict';

const THREE=await import('https://cdn.jsdelivr.net/npm/three@0.160.0/+esm');
const {RoundedBoxGeometry}=await import('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/geometries/RoundedBoxGeometry.js/+esm');
const {RoomEnvironment}=await import('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/environments/RoomEnvironment.js/+esm');
const {EffectComposer}=await import('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/EffectComposer.js/+esm');
const {RenderPass}=await import('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/RenderPass.js/+esm');
const {UnrealBloomPass}=await import('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/UnrealBloomPass.js/+esm');
const {OutputPass}=await import('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/OutputPass.js/+esm');

const section=document.getElementById('ask'), stage=document.getElementById('cubeStage'), canvas=document.getElementById('cubeCanvas');
const $=id=>document.getElementById(id);
let renderer;
try{ renderer=new THREE.WebGLRenderer({canvas,antialias:true}); }
catch(e){ stage.querySelector('.sv-fallback').style.display='grid'; throw e; }
const mobile=matchMedia('(max-width:1000px)').matches;
renderer.setPixelRatio(Math.min(devicePixelRatio,mobile?1.5:2));
renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.25;

const scene=new THREE.Scene();
scene.background=new THREE.Color(0x060606);
scene.fog=new THREE.Fog(0x060606,14,26);
scene.environment=new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(),0.03).texture;
const camera=new THREE.PerspectiveCamera(30,1,0.1,100);

/* ---------- 背景：光球 + 科技地板網格 ---------- */
function glowTex(stops){const c=document.createElement('canvas');c.width=c.height=512;const g=c.getContext('2d');
  const r=g.createRadialGradient(256,256,0,256,256,256);stops.forEach(([o,col])=>r.addColorStop(o,col));
  g.fillStyle=r;g.fillRect(0,0,512,512);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}
const orb=new THREE.Mesh(new THREE.PlaneGeometry(9,9),new THREE.MeshBasicMaterial({map:glowTex([[0,'rgba(255,220,170,1)'],[.16,'rgba(255,120,40,1)'],[.42,'rgba(255,61,20,.5)'],[1,'rgba(255,61,20,0)']]),transparent:true,depthWrite:false,fog:false}));
orb.position.z=-5;
const grid=new THREE.GridHelper(40,40,0xff3d14,0x3a1408); grid.material.transparent=true; grid.material.opacity=.35;

/* ---------- 方塊 ---------- */
const rig=new THREE.Group(); scene.add(rig); rig.add(orb); /* 地板格線（紅線）已移除 */
const S=1.06, cube=new THREE.Group(); rig.add(cube);
const jelly=new THREE.MeshPhysicalMaterial({
  color:0xff4a1a, emissive:0xff2a00, emissiveIntensity:.16,
  roughness:.14, metalness:0, transmission:.72, thickness:1.4, ior:1.33,
  attenuationColor:new THREE.Color(0xff2a00), attenuationDistance:.75,
  clearcoat:1, clearcoatRoughness:.04, specularIntensity:1,
  iridescence:.55, iridescenceIOR:1.3, iridescenceThicknessRange:[120,420],
  sheen:.6, sheenColor:new THREE.Color(0xffb38a), sheenRoughness:.4, envMapIntensity:.45 });
const geo=new RoundedBoxGeometry(.97,.97,.97,6,.2);
const edgeMat=new THREE.LineBasicMaterial({color:0xffd2b8,transparent:true,opacity:.22});
const edges=new THREE.EdgesGeometry(new THREE.BoxGeometry(.97,.97,.97));

await document.fonts.load('900 200px Archivo').catch(()=>{});

/* 正面：發光字 iSNEAKERS */
const WORD=['i','S','N','E','A','K','E','R','S'];
function letterTex(ch){const c=document.createElement('canvas');c.width=c.height=256;const g=c.getContext('2d');
  try{g.fontStretch='condensed';}catch(e){}
  g.font='900 200px Archivo, sans-serif';g.textAlign='center';g.textBaseline='middle';
  g.shadowColor='rgba(255,120,60,.9)';g.shadowBlur=16;g.fillStyle='#fff';g.fillText(ch,128,140);g.shadowBlur=0;g.fillText(ch,128,140);
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;}

/* 其他面：凹版圖示（鞋、衣、包、配件）＋品牌字 */
const ICONS={
  sneaker:'M6 64 C6 54 12 51 20 49 L38 45 C45 41 49 30 56 30 L63 30 C65 39 71 43 79 45 L91 49 C96 51 97 57 97 63 L97 72 L6 72 Z',
  hoodie:'M30 20 L42 14 C45 23 55 23 58 14 L70 20 L89 35 L80 47 L72 41 L72 88 L28 88 L28 41 L20 47 L11 35 Z',
  tote:'M20 40 L80 40 L86 90 L14 90 Z M34 40 C34 14 66 14 66 40 L59 40 C59 24 41 24 41 40 Z',
  cap:'M12 64 C12 36 30 24 50 24 C70 24 84 36 84 58 L97 62 C97 69 90 72 84 70 L12 70 Z',
  shades:'M6 38 L46 38 L42 60 C40 67 14 67 11 60 Z M54 38 L94 38 L89 60 C86 67 60 67 58 60 Z M44 40 L56 40 L56 46 L44 46 Z',
  watch:'M38 6 L62 6 L64 26 C74 30 80 40 80 50 C80 60 74 70 64 74 L62 94 L38 94 L36 74 C26 70 20 60 20 50 C20 40 26 30 36 26 Z',
  backpack:'M32 28 C32 10 68 10 68 28 L76 32 C80 36 81 40 81 46 L81 86 C81 90 77 93 72 93 L28 93 C23 93 19 90 19 86 L19 46 C19 40 20 36 24 32 Z',
  tee:'M32 16 L44 12 C46 19 54 19 56 12 L68 16 L91 30 L82 45 L72 39 L72 89 L28 89 L28 39 L18 45 L9 30 Z',
  bolt:'M57 4 L22 55 L45 55 L38 96 L78 41 L55 41 Z',
};
const BRANDS=['NIKE','JORDAN','BAPE','KOBE','ASICS','ADIDAS','ON','DREW','OFF—WHITE','UNDFTD','PUMA','MIND'];
function engrave(drawMask){
  const N=256, M=document.createElement('canvas');M.width=M.height=N;const m=M.getContext('2d');drawMask(m,N);
  const out=document.createElement('canvas');out.width=out.height=N;const o=out.getContext('2d');
  const tint=(col,dx,dy,keep)=>{const c=document.createElement('canvas');c.width=c.height=N;const g=c.getContext('2d');
    g.fillStyle=col;g.fillRect(0,0,N,N);
    if(keep){g.globalCompositeOperation='destination-out';g.drawImage(M,dx,dy);}
    g.globalCompositeOperation='destination-in';g.drawImage(M,0,0);return c;};
  o.drawImage(tint('rgba(70,6,0,.62)',0,0,false),0,0);           // 凹下去的底
  o.filter='blur(2px)';
  o.drawImage(tint('rgba(20,0,0,.85)',7,7,true),0,0);              // 左上內壁陰影
  o.drawImage(tint('rgba(255,215,190,.55)',-4,-4,true),0,0);       // 右下內壁受光
  o.filter='none';
  const t=new THREE.CanvasTexture(out);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;}
const iconTex=Object.entries(ICONS).map(([k,d])=>engrave((g,N)=>{const p=new Path2D(d);g.save();g.translate(N*.14,N*.14);g.scale(N*.72/100,N*.72/100);g.fillStyle='#fff';g.fill(p);g.restore();}));
const brandTex=BRANDS.map(w=>engrave((g,N)=>{try{g.fontStretch='condensed';}catch(e){}
  let fs=w.length>5?78:w.length>3?104:130;g.font=`900 ${fs}px Archivo, sans-serif`;g.textAlign='center';g.textBaseline='middle';g.fillStyle='#fff';
  g.save();g.translate(N/2,N/2+6);if(w.length>5)g.rotate(-Math.PI/12);g.fillText(w,0,0);g.restore();}));
const decalPool=[];for(let i=0;i<Math.max(iconTex.length,brandTex.length);i++){if(iconTex[i])decalPool.push(iconTex[i]);if(brandTex[i])decalPool.push(brandTex[i]);}
const decalGeo=new THREE.PlaneGeometry(.8,.8);
const decalMats=decalPool.map(t=>new THREE.MeshStandardMaterial({map:t,transparent:true,depthWrite:false,roughness:.3,metalness:0,polygonOffset:true,polygonOffsetFactor:-2}));
let di=0;
const FACES=[{n:[1,0,0],r:[0,Math.PI/2,0]},{n:[-1,0,0],r:[0,-Math.PI/2,0]},{n:[0,1,0],r:[-Math.PI/2,0,0]},{n:[0,-1,0],r:[Math.PI/2,0,0]},{n:[0,0,-1],r:[0,Math.PI,0]}];

const cubies=[];
for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++)for(let z=-1;z<=1;z++){
  const holder=new THREE.Object3D(); holder.position.set(x*S,y*S,z*S);
  const mesh=new THREE.Mesh(geo,jelly); holder.add(mesh);
  mesh.add(new THREE.LineSegments(edges,edgeMat));
  if(z===1){const idx=(1-y)*3+(x+1);
    const lab=new THREE.Mesh(new THREE.PlaneGeometry(.84,.84),new THREE.MeshBasicMaterial({map:letterTex(WORD[idx]),color:0xffd9c4,transparent:true,depthWrite:false,toneMapped:false}));
    lab.position.z=.492; mesh.add(lab);}
  FACES.forEach(f=>{ if(x*f.n[0]+y*f.n[1]+z*f.n[2]!==1) return;
    const d=new THREE.Mesh(decalGeo,decalMats[di++%decalMats.length]);
    d.position.set(f.n[0]*.492,f.n[1]*.492,f.n[2]*.492); d.rotation.set(...f.r); mesh.add(d);});
  cube.add(holder);
  cubies.push({holder,mesh,s:new THREE.Vector3(),v:new THREE.Vector3(),off:new THREE.Vector3(),tgt:new THREE.Vector3(),spin:new THREE.Vector3()});
}
const core=new THREE.PointLight(0xff8a40,7,8); cube.add(core);
const key=new THREE.DirectionalLight(0xffffff,.9); key.position.set(4,6,7); scene.add(key);
const rim=new THREE.DirectionalLight(0x58e8ff,1.1); rim.position.set(-6,2,-4); scene.add(rim);

/* ---------- 衝擊波 + 火花 ---------- */
const ring=new THREE.Mesh(new THREE.RingGeometry(.9,1,96),new THREE.MeshBasicMaterial({color:0xff6a2b,transparent:true,opacity:0,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));
cube.add(ring);
const ring2=ring.clone(); ring2.material=ring.material.clone(); ring2.material.color.set(0x58e8ff); ring2.rotation.x=Math.PI/2; cube.add(ring2);
const NS=260, sparkPos=new Float32Array(NS*3), sparkVel=[];
const sparkGeo=new THREE.BufferGeometry(); sparkGeo.setAttribute('position',new THREE.BufferAttribute(sparkPos,3));
const sparkMat=new THREE.PointsMaterial({color:0xffb070,size:.07,transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false});
const sparks=new THREE.Points(sparkGeo,sparkMat); cube.add(sparks);
for(let i=0;i<NS;i++)sparkVel.push(new THREE.Vector3());

/* ---------- 後製：光暈 ---------- */
const composer=new EffectComposer(renderer);
composer.addPass(new RenderPass(scene,camera));
const bloom=new UnrealBloomPass(new THREE.Vector2(1,1),.35,.45,.92); composer.addPass(bloom);
composer.addPass(new OutputPass());

/* ---------- 位置：方塊對齊右欄 ---------- */
function layout(){
  const w=section.clientWidth,h=section.clientHeight; renderer.setSize(w,h,false); composer.setSize(w,h);
  camera.aspect=w/h;
  const tanH=Math.tan(THREE.MathUtils.degToRad(camera.fov/2));
  // 方塊要能完整放進右欄（手機是整個寬度）：依舞台寬度回推鏡頭距離
  const stageW=stage.clientWidth/w, fitZ=(6.4/stageW)/(2*tanH*camera.aspect);
  const camZ=Math.max(14.5,fitZ); camera.position.set(0,0,camZ); camera.updateProjectionMatrix();
  scene.fog.near=camZ-.5; scene.fog.far=camZ+12;
  const sr=stage.getBoundingClientRect(), cr=section.getBoundingClientRect();
  const cx=(sr.left+sr.width/2-cr.left)/w-.5, cy=(sr.top+sr.height/2-cr.top)/h-.5;
  const vh=2*camera.position.z*Math.tan(THREE.MathUtils.degToRad(camera.fov/2)), vw=vh*camera.aspect;
  rig.position.set(cx*vw,-cy*vh,0);
  grid.position.set(0,-2.9,0);
}
new ResizeObserver(layout).observe(section); layout();

/* ---------- 轉層 ---------- */
const pivot=new THREE.Object3D(); cube.add(pivot);
const axes=['x','y','z'];
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const backOut=t=>{const c1=1.9,c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);};
let queue=[], move=null, moves=0;
function plan(){const seq=[];let last='';for(let i=0;i<6;i++){let a;do{a=axes[Math.random()*3|0]}while(a===last);last=a;
  seq.push({axis:a,layer:[-1,0,1][Math.random()*3|0],dir:Math.random()<.5?1:-1});}
  queue=[{status:'Scrambling'},...seq,{status:'Solving'},...seq.slice().reverse().map(m=>({...m,dir:-m.dir})),{status:'Solved'},{hold:2.4}];}
function startMove(m){pivot.rotation.set(0,0,0);pivot.updateMatrixWorld();
  m.items=cubies.filter(c=>Math.round(c.holder.position[m.axis]/S)===m.layer);
  m.items.forEach(c=>pivot.attach(c.holder)); m.t=0; move=m;}
function endMove(){const ax=move.axis;
  move.items.forEach(c=>{cube.attach(c.holder);
    c.holder.position.set(Math.round(c.holder.position.x/S)*S,Math.round(c.holder.position.y/S)*S,Math.round(c.holder.position.z/S)*S);
    const e=new THREE.Euler().setFromQuaternion(c.holder.quaternion),q=Math.PI/2;
    c.holder.rotation.set(Math.round(e.x/q)*q,Math.round(e.y/q)*q,Math.round(e.z/q)*q);
    // 果凍：停下來時沿轉軸方向 Q 彈一下
    const kick=new THREE.Vector3(ax==='x'?.22:-.1,ax==='y'?.22:-.1,ax==='z'?.22:-.1).applyQuaternion(c.holder.quaternion.clone().invert());
    c.v.add(kick.multiplyScalar(6));});
  pivot.rotation.set(0,0,0); move=null; moves++; $('hudMoves').textContent=String(moves).padStart(3,'0');}

/* ---------- 彩蛋 ---------- */
const EGGS=[
  ['WEAR THE<br>HYPE.','穿上就是態度'],
  ['正品才是<br>本體','每一雙都是 100% 正品'],
  ['NEW DROP<br>INCOMING','限時預購每天都在上新'],
  ['加入會員<br>送 $300','新會員購物金，結帳直接折'],
  ['刷卡分期<br>3–24 期','想要的鞋，現在就帶回家'],
  ['尺寸問我<br>就對了','LINE 傳型號，幫你比對尺寸'],
];
const found=new Set(); let eggIdx=-1;
function scramble(el,html,dur=520){const target=html.replace(/<br>/g,'\n');const chars='!<>-_\\/[]{}=+*^?#ISNEAKERS01';let f=0;const total=Math.round(dur/30);
  clearInterval(el._t);el._t=setInterval(()=>{f++;const p=f/total;let s='';
    for(let i=0;i<target.length;i++){const ch=target[i];s+=(ch==='\n'||ch===' '||i/target.length<p)?ch:chars[Math.random()*chars.length|0];}
    el.innerHTML=s.replace(/\n/g,'<br>');if(f>=total){clearInterval(el._t);el.innerHTML=html;}},30);}
function showEgg(){eggIdx=(eggIdx+1)%EGGS.length;const [t,sub]=EGGS[eggIdx];found.add(eggIdx);
  $('eggK').textContent=`// EASTER EGG ${String(eggIdx+1).padStart(2,'0')} UNLOCKED`;
  scramble($('eggT'),t);$('eggS').textContent=sub;$('egg').classList.add('on');$('hudFound').textContent=`${found.size}/${EGGS.length}`;
  if(found.size===EGGS.length)$('eggK').textContent='// ALL EGGS FOUND — 你是真愛粉';}
function hideEgg(){$('egg').classList.remove('on');}

/* ---------- 爆炸流程：壓扁 → 炸開(衝擊波) → 漂浮(彩蛋) → 果凍彈回 ---------- */
let phase='idle', pt=0, pendingBurst=false;
stage.addEventListener('click',()=>{ if(phase==='idle') pendingBurst=true; else if(phase==='float') {phase='in';pt=0;hideEgg();} });
function beginBurst(){phase='squash';pt=0;$('hudStatus').textContent='Overload';$('svHint').style.opacity=0;
  cubies.forEach(c=>{const inv=c.holder.quaternion.clone().invert();
    const dir=c.holder.position.clone().applyQuaternion(inv);
    if(dir.lengthSq()<.01)dir.set(Math.random()-.5,Math.random()-.5,Math.random()-.5);
    c.tgt.copy(dir.normalize().multiplyScalar(.8+Math.random()*.45)).add(new THREE.Vector3((Math.random()-.5)*.35,(Math.random()-.5)*.35,(Math.random()-.5)*.35));
    c.spin.set((Math.random()-.5)*5,(Math.random()-.5)*5,(Math.random()-.5)*5);});
  for(let i=0;i<NS;i++){sparkPos[i*3]=sparkPos[i*3+1]=sparkPos[i*3+2]=0;
    sparkVel[i].set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(3+Math.random()*6);}
}

/* ---------- 互動 ---------- */
let mx=0,my=0,pmx=0,pmy=0;
stage.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect();mx=(e.clientX-r.left)/r.width-.5;my=(e.clientY-r.top)/r.height-.5;});
stage.addEventListener('pointerleave',()=>{mx=my=0;});

let visible=true;
new IntersectionObserver(([e])=>{visible=e.isIntersecting;},{rootMargin:'200px'}).observe(section);
const clock=new THREE.Clock(); let T=0; plan();
renderer.setAnimationLoop(()=>{
  const dt=Math.min(clock.getDelta(),.05); if(!visible) return; T+=dt;

  // 光球升起循環
  const k=(T*.05)%1; orb.position.y=-4+k*5.2; orb.material.opacity=Math.min(1,Math.sin(k*Math.PI)*1.5);
  orb.scale.setScalar(1+.05*Math.sin(T*1.4));

  // 整顆：擺動 + 跟滑鼠，滑鼠甩動時給果凍彈力
  cube.rotation.y+=((-.5+Math.sin(T*.45)*.2+mx*.7)-cube.rotation.y)*.06;
  cube.rotation.x+=((.36+Math.sin(T*.33)*.08+my*.5)-cube.rotation.x)*.06;
  const fling=Math.hypot(mx-pmx,my-pmy); pmx=mx;pmy=my;
  if(fling>.01) cubies.forEach(c=>c.v.addScalar(fling*(Math.random()*.8)));

  // 轉層（只在 idle 時）
  if(phase==='idle'){
    if(move&&move.hold===undefined){move.t=Math.min(1,move.t+dt/.5);pivot.rotation[move.axis]=backOut(move.t)*move.dir*Math.PI/2;if(move.t>=1)endMove();}
    else if(pendingBurst){pendingBurst=false;move=null;beginBurst();}
    else if(move){move.t+=dt;if(move.t>=move.hold)move=null;}
    else{if(!queue.length)plan();const m=queue.shift();
      if(m.status){$('hudStatus').textContent=m.status;} else if(m.hold!==undefined)move={hold:m.hold,t:0}; else startMove(m);}
  }

  // 爆炸各階段
  if(phase!=='idle'){pt+=dt;
    if(phase==='squash'){const p=Math.min(1,pt/.16);cube.scale.set(1+.12*p,1-.18*p,1+.12*p);if(p>=1){phase='out';pt=0;cube.scale.set(1,1,1);
      ring.material.opacity=1;ring2.material.opacity=1;sparkMat.opacity=1;showEgg();}}
    else if(phase==='out'){const p=Math.min(1,pt/.55),e=1-Math.pow(1-p,4);
      cubies.forEach(c=>{c.off.copy(c.tgt).multiplyScalar(e);c.mesh.rotation.set(c.spin.x*e,c.spin.y*e,c.spin.z*e);});
      if(p>=1){phase='float';pt=0;}}
    else if(phase==='float'){
      cubies.forEach((c,i)=>{c.off.copy(c.tgt).multiplyScalar(1+.06*Math.sin(T*2+i));c.mesh.rotation.x+=dt*c.spin.x*.12;c.mesh.rotation.y+=dt*c.spin.y*.12;});
      if(pt>3.2){phase='in';pt=0;hideEgg();}}
    else if(phase==='in'){const p=Math.min(1,pt/.7),e=backOut(p);
      cubies.forEach(c=>{c.off.copy(c.tgt).multiplyScalar(1-e);c.mesh.rotation.x*=.86;c.mesh.rotation.y*=.86;c.mesh.rotation.z*=.86;});
      if(p>=1){phase='idle';cubies.forEach(c=>{c.off.set(0,0,0);c.mesh.rotation.set(0,0,0);c.v.set(.5,-.6,.5).multiplyScalar(1.4);});
        $('hudStatus').textContent='Rebuilt';$('svHint').style.opacity=1;}}
  }
  // 衝擊波 / 火花
  if(ring.material.opacity>0){const s=Math.min(7,ring.scale.x+dt*9);ring.scale.setScalar(s);ring2.scale.setScalar(s*.8);
    ring.material.opacity=Math.max(0,ring.material.opacity-dt*1.6);ring2.material.opacity=ring.material.opacity;
    ring.lookAt(camera.position);} else {ring.scale.setScalar(.6);ring2.scale.setScalar(.6);}
  if(sparkMat.opacity>0){for(let i=0;i<NS;i++){sparkPos[i*3]+=sparkVel[i].x*dt;sparkPos[i*3+1]+=sparkVel[i].y*dt;sparkPos[i*3+2]+=sparkVel[i].z*dt;sparkVel[i].multiplyScalar(.96);}
    sparkGeo.attributes.position.needsUpdate=true;sparkMat.opacity=Math.max(0,sparkMat.opacity-dt*.7);}
  core.intensity=phase==='float'?22:7;
  bloom.strength=phase==='out'?.8:(phase==='float'?.45:.32);

  // 果凍彈簧：每顆的縮放
  cubies.forEach(c=>{c.v.addScaledVector(c.s,-180*dt).multiplyScalar(Math.pow(.02,dt));c.s.addScaledVector(c.v,dt);
    const b=1+.025*Math.sin(T*2.2);
    c.mesh.scale.set(b*(1+c.s.x),b*(1+c.s.y),b*(1+c.s.z));c.mesh.position.copy(c.off);});

  composer.render(dt);
});
});
