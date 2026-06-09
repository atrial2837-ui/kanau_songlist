import{b as mt,c as ft,d as ht,i as bt,k as et,l as V}from"./chunk-JZUMKDUB.js";import{a as yt,b as gt,e as tt,f as wt}from"./chunk-SIADDXVK.js";import{a as H}from"./chunk-MKJIXTK4.js";import{I as X,J as k,L as E,P as x,Q as vt,a as ut,b as W,c as pt,e as i,f as o,g as w,i as v}from"./chunk-CUWLARYO.js";var y=-1,$=[],st=null;function $t(t){st=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
    <div id="omni-box">
      <div class="omni-input-row">
        <span class="omni-search-icon" aria-hidden="true">\u{1F50D}</span>
        <input
          id="omni-input"
          class="omni-input"
          type="search"
          placeholder="\u66F2\u540D\u30FB\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u30FB\u914D\u4FE1\u3092\u691C\u7D22\u2026"
          autocomplete="off"
          spellcheck="false"
          aria-label="\u30B5\u30A4\u30C8\u5185\u691C\u7D22"
          aria-autocomplete="list"
          aria-controls="omni-listbox"
        >
        <kbd class="omni-esc-key">Esc</kbd>
      </div>
      <div id="omni-listbox" class="omni-listbox" role="listbox" aria-label="\u691C\u7D22\u7D50\u679C"></div>
      <div class="omni-footer">
        <span><kbd>\u2191</kbd><kbd>\u2193</kbd> \u79FB\u52D5</span>
        <span><kbd>Enter</kbd> \u9078\u629E</span>
        <span><kbd>Esc</kbd> \u9589\u3058\u308B</span>
      </div>
    </div>
  `,document.body.appendChild(e),e.addEventListener("click",a=>{a.target===e&&F()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>xt(s.value)),s.addEventListener("keydown",jt),document.getElementById("omni-listbox").addEventListener("click",a=>{let l=a.target.closest("[data-omni-idx]");l&&Et(Number(l.dataset.omniIdx))})}function St(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,y=-1,$=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),xt("")}function F(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),y=-1}function Tt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function jt(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),y=Math.min(y+1,e.length-1),kt(e)):t.key==="ArrowUp"?(t.preventDefault(),y=Math.max(y-1,-1),kt(e)):t.key==="Enter"?(t.preventDefault(),y>=0&&$[y]&&Et(y)):t.key==="Escape"&&(t.preventDefault(),F())}function kt(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===y),e.setAttribute("aria-selected",String(s===y))}),y>=0&&t[y]?.scrollIntoView({block:"nearest"})}function Et(t){let e=$[t];!e||!st||(F(),st(e))}function xt(t){let e=document.getElementById("omni-listbox");if(!e)return;y=-1,$=[];let s=i.data?.songs||[],a=i.data?.streams||[],l=t.trim().toLowerCase(),n="",r=0;if(!i.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!l){let d=s.slice(0,8);if(d.length){n+=Y("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let p of d)$.push({type:"song",song:p}),n+=Lt(p,r++,"")}e.innerHTML=n||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let c=s.filter(d=>M(d.title).includes(l)||M(d.artist).includes(l)).slice(0,8);if(c.length){n+=Y("\u{1F3B5} \u66F2");for(let d of c)$.push({type:"song",song:d}),n+=Lt(d,r++,l)}let u=new Set,m=[];for(let d of s)if(M(d.artist).includes(l)&&!u.has(d.artist)&&(u.add(d.artist),m.push(d.artist),m.length>=4))break;if(m.length){n+=Y("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let d of m){let p=s.filter(f=>f.artist===d).length;$.push({type:"artist",artist:d}),n+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${j(v(d),l)}</span>
          <span class="omni-item-meta">${p}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(i.channelData?.fullLoaded&&a.length){let d=a.filter(p=>M(p.title).includes(l)||p.songs?.some(f=>M(f.title).includes(l)||M(f.artist).includes(l))).slice(0,5);if(d.length){n+=Y("\u{1F4C5} \u914D\u4FE1\u67A0");for(let p of d)$.push({type:"stream",stream:p}),n+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${j(v(p.title||"\u914D\u4FE1"),l)}</span>
            <span class="omni-item-meta">${k(p.date)} \xB7 ${p.songs?.length||0}\u66F2</span>
          </div>
        </div>`}}n||(n=`<div class="omni-empty">\u300C${v(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=n}function Y(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function Lt(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${j(v(t.title),s)}</span>
      <span class="omni-item-meta">${j(v(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function M(t){return String(t||"").toLowerCase()}function j(t,e){if(!e)return t;let a=t.toLowerCase().indexOf(e);return a<0?t:t.slice(0,a)+'<mark class="hl">'+t.slice(a,a+e.length)+"</mark>"+t.slice(a+e.length)}gt();pt();var At={dashboard:()=>import("./chunk-H2XK2RYU.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-EKPBADNT.js").then(t=>t.renderRanking),songs:()=>import("./chunk-JPW5Q7KE.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-AFGC52MQ.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-BR4FH5YN.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-OWMXHPOY.js").then(t=>t.renderPlaylists)},O=new Map,_t=0,C=null;function Q(t){return Object.prototype.hasOwnProperty.call(At,t)}async function Ot(t){O.has(t)||O.set(t,At[t]());try{return await O.get(t)}catch(e){throw O.delete(t),e}}function Pt(t){return["dashboard","timeline","analytics"].includes(t)}function zt(t,e={}){let s=o(`#panel-${t}`);if(!s)return;let a={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${v(a[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function Qt(t){let e=o(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function Gt(t){if(i.channelData?.fullLoaded)return;i.channelData=t;let e=S(i.channel)?i.channel:H,s=S(e);s&&(i.data=s),!Pt(i.activeTab)&&i.data&&_(i.activeTab,{autoLoad:!1})}function Jt(t){i.channelData=t,i.channelData.fullLoaded=!0;let e=S(i.channel)?i.channel:H;Z(e,{resetSearch:!1,updateUrl:!1,render:!1}),_(i.activeTab,{autoLoad:!1})}function It(){return C=ft({meta:i.channelData,onSongsReady:Gt}).then(Jt).finally(()=>{C=null}),C}async function Zt(){i.channelData?.fullLoaded||(C||It(),await C)}async function _(t=i.activeTab,e={}){if(t!=="playlists"&&(!i.data||!Q(t))||!Q(t))return;let s=i.channelData?.partialLoaded||i.channelData?.fullLoaded,a=i.channelData?.fullLoaded;if(t==="playlists"?!1:Pt(t)?!a:!s)if(e.autoLoad){Qt(t);try{await Zt()}catch(r){console.error("[data] full load failed",r);let c=o(`#panel-${t}`);c&&(c.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${v(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${v(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,c.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{_(t,{autoLoad:!0})}));return}}else{zt(t,{initial:e.initial});return}let n=++_t;try{let r=await Ot(t);if(n!==_t||t!==i.activeTab||!i.data)return;t==="songs"&&bt(i.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let c=o(`#panel-${t}`);c&&(c.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${v(r?.message||String(r))}</div>
        </div>
      `)}}function L(t,e={}){Q(t)||(t="dashboard"),i.activeTab=t,Ht(t),e.updateUrl!==!1&&V({tab:t}),_(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Ht(t){w(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),w(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function S(t){return i.channelData?t==="all"?i.channelData.combined:i.channelData.channels[t]||null:null}function Z(t,e={}){let s=S(t);s&&(i.channel=t,Se(t),i.data=s,i.timelineFilter=null,i.timelineFocus=null,i.timelineLimit=12,i.songsLimit=100,e.resetSearch!==!1&&(i.songsQuery="",i.songsGenre="all"),tt(),w("#channel-switch [data-channel]").forEach(a=>a.classList.toggle("active",a.dataset.channel===t)),it(),e.updateUrl!==!1&&V({tab:i.activeTab,channel:t,q:i.songsQuery}),we(),e.render!==!1&&_(i.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function Wt(t,e={}){i.audience=t==="singer"?"singer":"listener",i.singerMode=i.audience==="singer",i.singerMode||(i.singerPreset="all"),w(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===i.audience)}),document.body.dataset.audience=i.audience,it(),i.audience==="singer"?(i.songsLimit=100,L("songs",{autoLoad:e.autoLoad!==!1})):i.data&&_(i.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function it(){let t=o("#mobile-menu-label");if(!t)return;let e=o("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",s=o("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${s}`}function Xt(){let t=o("#mobile-menu-toggle"),e=o("#mobile-menu-state"),s=o("#topbar-actions");if(!t||!e||!s)return;let a=n=>{e.checked=n,s.classList.toggle("is-open",n),t.setAttribute("aria-expanded",String(n))},l=()=>{a(!1),t.focus()};t.addEventListener("click",n=>{n.stopPropagation(),requestAnimationFrame(()=>a(e.checked))}),t.addEventListener("keydown",n=>{n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),a(!e.checked))}),e.addEventListener("change",()=>{a(e.checked)}),document.addEventListener("click",n=>{s.classList.contains("is-open")&&(n.target.closest("#topbar-actions")||n.target.closest("#mobile-menu-toggle")||n.target.closest("#mobile-menu-state")||l())}),document.addEventListener("keydown",n=>{n.key==="Escape"&&l()}),s.addEventListener("click",n=>{n.stopPropagation()}),it()}function te(){let t=o("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,a=420,l=()=>{!e||e.src||(e.src=e.dataset.src||"")},n=()=>{s=!1;let c=window.scrollY>a;c&&l(),t.hidden=!c,t.classList.toggle("is-visible",c),t.setAttribute("aria-hidden",String(!c)),t.tabIndex=c?0:-1},r=()=>{s||(s=!0,requestAnimationFrame(n))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),n()}function ee(){if(i.channelData)for(let t of w("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!i.channelData.combined:!!(i.channelData.channels&&i.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function se({key:t,title:e,artist:s}){i.timelineFilter&&i.timelineFilter.key===t&&i.activeTab==="timeline"?i.timelineFilter=null:i.timelineFilter={key:t,title:e,artist:s},i.timelineFocus=null,i.timelineLimit=12,L("timeline"),o("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function ae(t,e){i.timelineFilter={key:t.key,title:t.title,artist:t.artist},i.timelineFocus=E(e),i.timelineLimit=9999,L("timeline"),o("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function ne(t){lt(t.artist||"")}function lt(t){let e=String(t||"").replace(/"/g,"");i.songsQuery=e?`artist:"${e}"`:"",i.songsLimit=100,V({tab:"songs",q:i.songsQuery}),L("songs",{updateUrl:!1})}function z(t){return(i.data?.songs||[]).find(e=>e.key===t)||null}function P(t){let e=String(t||""),s=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let a of s){let l=e.match(a);if(l)return l[1]}return""}function ot(t){let e=P(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function ie(t){let e=P(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function le(t){let e=P(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function U(t,e=0,s=""){let a=P(t);if(!a)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}Ft();let l=o("#yt-player-container"),n=o("#yt-player-panel"),r=o("#yt-player-open");if(!l||!n)return;let c=e>0?`&start=${Math.floor(e)}`:"";l.innerHTML=`<iframe src="https://www.youtube.com/embed/${a}?autoplay=1&playsinline=1${c}&vq=hd1080" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`,r&&(r.href=String(t||""));let u=o("#yt-mini-title");u&&(u.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let m=o("#yt-mini-song");m&&(m.textContent=""),n.classList.toggle("has-stream",!!A),n.hidden=!1}function Ft(){if(o("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
    <div class="yt-mini-video-wrap">
      <div id="yt-player-container"></div>
      <button class="yt-mini-expand" id="yt-mini-expand" type="button" aria-label="\u5927\u753B\u9762\u3067\u898B\u308B">
        <span class="yt-mini-expand-icon">\u26F6</span>
        <span class="yt-mini-expand-label">\u5927\u753B\u9762\u3067\u898B\u308B</span>
      </button>
    </div>
    <div class="yt-mini-bar">
      <div class="yt-mini-info">
        <span class="yt-mini-stream-title" id="yt-mini-title">\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F</span>
        <span class="yt-mini-song-name" id="yt-mini-song"></span>
      </div>
      <a id="yt-player-open" href="#" target="_blank" rel="noopener" class="yt-mini-yt-btn" title="YouTube\u3067\u958B\u304F">\u2197</a>
      <button id="yt-player-close" type="button" class="yt-mini-close-btn" aria-label="\u9589\u3058\u308B">\u2715</button>
    </div>
  `,document.body.appendChild(t),o("#yt-player-close").addEventListener("click",()=>{t.hidden=!0;let e=o("#yt-player-container");e&&(e.innerHTML=""),A=null}),o("#yt-mini-expand").addEventListener("click",()=>{if(!A)return;let e=(Date.now()-Bt)/1e3,s=Math.max(0,nt+e);K(A,s)})}var Nt=!1,qt=[];window.onYouTubeIframeAPIReady=()=>{Nt=!0,qt.splice(0).forEach(t=>t())};function oe(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function re(t){if(Nt&&window.YT?.Player){t();return}qt.push(t)}var g=null,N=0,A=null,nt=0,Bt=0,T=!1,rt="timeline",D={},q=!1;function ce(){rt=i.activeTab||"timeline",i.activeTab="player",w(".tab-btn").forEach(t=>t.classList.remove("active")),w(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function de(){L(rt||"timeline")}function ue(){T=!0;let t=o("#stream-viewer");if(!t)return;document.body.appendChild(t),t.classList.add("sv-fullscreen"),document.body.style.overflow="hidden";let e=o("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=o("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function B(t){let e=Math.floor(t),s=Math.floor(e/3600),a=Math.floor(e%3600/60),l=e%60;return s>0?`${s}:${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")}`:`${a}:${String(l).padStart(2,"0")}`}function Rt(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function G(t){try{return JSON.parse(localStorage.getItem(Rt(t))||"null")||{}}catch{return{}}}function at(t,e){try{localStorage.setItem(Rt(t),JSON.stringify(e))}catch{}}function pe(t,e,s){let a=s[e],l=a!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${v(B(a))} \u306B\u79FB\u52D5">${v(B(a))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",r=(D[e]||[]).map(m=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${m.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${v(B(m.timeSeconds))}">${v(B(m.timeSeconds))}</button>`).join(""),c=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,u=`<div class="sv-cts-row">${r}${c}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${v(t.title)}</span>
      <span class="sv-song-artist">${v(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${l}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${u}
  </div>`}async function ve(t){if(D={},!t?.channel||t?.index==null)return;try{let a=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,l=await fetch(a);if(!l.ok)return;let n=await l.json();for(let r of n.items||[])D[r.songIndex]||(D[r.songIndex]=[]),D[r.songIndex].push({timeSeconds:r.timeSeconds,note:r.note??null})}catch{}let e=o("#stream-viewer");if(!e||e._currentStream!==t)return;let s=o("#sv-setlist");s&&R(s,t.songs,G(t))}function me(t,e,s){o("#sv-cts-modal")?.remove();let a=g?.getCurrentTime?.()??0,l=B(Math.floor(a)),n=document.createElement("div");n.id="sv-cts-modal",n.className="sv-cts-modal-overlay",n.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-cts-modal-song">${v(s)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${v(l)}" placeholder="0:00" autocomplete="off">
      </label>
      <label class="sv-cts-modal-label">
        \u30B3\u30E1\u30F3\u30C8\uFF08\u4EFB\u610F\u30FB200\u6587\u5B57\u4EE5\u5185\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-note-input" type="text" maxlength="200" placeholder="">
      </label>
      <p class="sv-cts-modal-hint">\u63D0\u6848\u306F\u7BA1\u7406\u8005\u306E\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-cts-modal-btns">
        <button class="sv-cts-modal-submit" id="sv-cts-submit" type="button">\u63D0\u6848\u3059\u308B</button>
        <button class="sv-cts-modal-cancel" type="button">\u30AD\u30E3\u30F3\u30BB\u30EB</button>
      </div>
      <p class="sv-cts-modal-status" id="sv-cts-status" hidden></p>
    </div>
  `,document.body.appendChild(n);let r=()=>n.remove();n.querySelector(".sv-cts-modal-close").addEventListener("click",r),n.querySelector(".sv-cts-modal-cancel").addEventListener("click",r),n.addEventListener("click",c=>{c.target===n&&r()}),n.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let c=n.querySelector("#sv-cts-ts-input").value.trim(),u=n.querySelector("#sv-cts-note-input").value.trim()||null,m=Kt(c),d=n.querySelector("#sv-cts-status");if(m===null){d.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",d.className="sv-cts-modal-status error",d.hidden=!1;return}let p=n.querySelector("#sv-cts-submit");p.disabled=!0,p.textContent="\u9001\u4FE1\u4E2D\u2026";try{let f=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:m,submitterNote:u})});if(f.ok)d.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",d.className="sv-cts-modal-status success",d.hidden=!1,p.hidden=!0,n.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let h=await f.json().catch(()=>({}));d.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${h.error||f.statusText}`,d.className="sv-cts-modal-status error",d.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}catch(f){d.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.message}`,d.className="sv-cts-modal-status error",d.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>n.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function c(u){u.key==="Escape"&&(r(),document.removeEventListener("keydown",c))})}function Ut(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function fe(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function he(t,e){let s=Ut(),a=s.find(l=>String(l.id)===String(t));return a?(a.streams||(a.streams=[]),a.streams.includes(e)||(a.streams.push(e),fe(s)),!0):!1}function be(){let t=i.data?.streams||[],s=o("#stream-viewer")?._currentStream;if(!s)return;let a=t.findIndex(l=>l.channel===s.channel&&l.index===s.index);a<0||a>=t.length-1||K(t[a+1])}function Mt(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${v(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=ot(t.url),a=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${v(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${v(a)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${v(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${v(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${k(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function ye(t){let e=o("#sv-below-player");if(!e)return;let s=i.data?.streams||[],a=s.findIndex(d=>d.channel===t.channel&&d.index===t.index),l=a>=0&&a<s.length-1?s[a+1]:null,n=a>0?s[a-1]:null,r=new Set(t.songs.map(d=>d.title)),c=s.filter((d,p)=>p!==a).map(d=>{let p=d.songs.filter(f=>r.has(f.title));return{stream:d,overlap:p.length,sharedSongs:p.slice(0,3).map(f=>f.title)}}).filter(d=>d.overlap>0).sort((d,p)=>p.overlap-d.overlap).slice(0,8),u=Ut(),m=E(t);e.innerHTML=`
    <div class="sv-bp-wrap">

      <!-- \u9023\u7D9A\u518D\u751F + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${q?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${q?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          ${l?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${v(l.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${Mt(l,"older")}
          ${Mt(n,"newer")}
        </div>
      </div>

      <!-- \u914D\u4FE1\u7D71\u8A08 -->
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u914D\u4FE1\u60C5\u5831</div>
        <div class="sv-bp-stats">
          <div class="sv-bp-stat">
            <span class="sv-bp-stat-val">${t.songs.length}</span>
            <span class="sv-bp-stat-label">\u66F2\u6570</span>
          </div>
          <div class="sv-bp-stat">
            <span class="sv-bp-stat-val">\u7B2C${t.index}\u67A0</span>
            <span class="sv-bp-stat-label">\u914D\u4FE1\u756A\u53F7</span>
          </div>
          <div class="sv-bp-stat">
            <span class="sv-bp-stat-val">${k(t.date)}</span>
            <span class="sv-bp-stat-label">\u914D\u4FE1\u65E5</span>
          </div>
        </div>
      </div>

      <!-- \u95A2\u9023\u914D\u4FE1 -->
      ${c.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u95A2\u9023\u914D\u4FE1 <span class="sv-bp-sh-sub">\uFF08\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${c.map(d=>{let p=ot(d.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${v(d.stream.channel)}" data-bp-index="${d.stream.index}">
              ${p?`<img class="sv-bp-rel-thumb" src="${v(p)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${v(d.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${k(d.stream.date)}</div>
                <div class="sv-bp-rel-songs">${d.sharedSongs.map(f=>v(f)).join("\u3001")}</div>
              </div>
              <div class="sv-bp-rel-badge">${d.overlap}\u66F2</div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      <!-- \u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0 -->
      ${u.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0</div>
        <div class="sv-bp-pl-list" id="sv-bp-pl-list">
          ${u.map(d=>{let p=(d.streams||[]).includes(m);return`<button class="sv-bp-pl-btn${p?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${v(String(d.id))}"${p?" disabled":""}>
              <span class="sv-bp-pl-name">${v(d.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${p?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=d=>{let p=d.target.closest("#sv-ap-check");if(!p)return;q=p.checked;let f=e.querySelector(".sv-bp-ap-switch");f&&f.classList.toggle("sv-bp-ap-switch--on",q)},e.onclick=d=>{let p=d.target.closest("[data-bp-action]");if(!p)return;let f=p.dataset.bpAction;if(f==="open-stream"){let h=p.dataset.bpChannel,b=parseInt(p.dataset.bpIndex,10),I=(i.data?.streams||[]).find(dt=>dt.channel===h&&dt.index===b);I&&K(I)}else if(f==="add-pl"){let h=p.dataset.bpPlId;if(he(h,m)){p.classList.add("sv-bp-pl-btn--added"),p.disabled=!0;let b=p.querySelector(".sv-bp-pl-status");b&&(b.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}}}function R(t,e,s){t.innerHTML=e.map((a,l)=>pe(a,l,s)).join("")}function Kt(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Vt(){if(o("#stream-viewer"))return;let t=o("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
    <div class="sv-container">
      <div class="sv-header">
        <button class="sv-close-btn" id="sv-close" type="button" title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09">
          \u2190 \u623B\u308B <span class="sv-esc-hint">Esc</span>
        </button>
        <div class="sv-title-area">
          <nav class="sv-breadcrumb" aria-label="\u73FE\u5728\u5730">
            <button class="sv-bc-btn" type="button" data-bc-tab="dashboard">\u30DB\u30FC\u30E0</button>
            <span class="sv-bc-sep" aria-hidden="true">/</span>
            <button class="sv-bc-btn" type="button" data-bc-tab="timeline">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3</button>
            <span class="sv-bc-sep" aria-hidden="true">/</span>
            <span class="sv-bc-current" id="sv-bc-title"></span>
          </nav>
          <div class="sv-stream-meta" id="sv-stream-meta"></div>
        </div>
        <button class="sv-fullscreen-btn" id="sv-fullscreen-btn" type="button"
          title="\u5927\u753B\u9762\u3067\u518D\u751F" aria-pressed="false">\u26F6</button>
        <a class="sv-yt-link" id="sv-yt-link" href="#" target="_blank" rel="noopener">\u2197 YouTube\u3067\u958B\u304F</a>
      </div>
      <div class="sv-body">
        <div class="sv-player-section">
          <div class="sv-player-wrap" id="sv-player-wrap">
            <div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>
          </div>
          <div class="sv-below-player" id="sv-below-player"></div>
        </div>
        <div class="sv-panel">
          <div class="sv-panel-head">
            <span>\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8</span>
            <div class="sv-panel-head-right">
              <button class="sv-import-toggle" id="sv-import-toggle" type="button">\u4E00\u62EC\u5165\u529B</button>
              <span class="sv-song-count" id="sv-song-count"></span>
            </div>
          </div>
          <div class="sv-import-area" id="sv-import-area" hidden>
            <p class="sv-import-desc">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u30921\u884C\u306B1\u3064\u5165\u529B\uFF08\u4E0A\u304B\u3089\u9806\u306B\u66F2\u3078\u5272\u308A\u5F53\u3066\uFF09</p>
            <textarea class="sv-import-input" id="sv-import-input" rows="6"
              placeholder="\u4F8B:&#10;15:59&#10;21:12&#10;25:57&#10;1:08:13"></textarea>
            <div class="sv-import-btns">
              <button class="sv-import-apply" id="sv-import-apply" type="button">\u9069\u7528</button>
              <button class="sv-import-cancel" id="sv-import-cancel" type="button">\u30AD\u30E3\u30F3\u30BB\u30EB</button>
            </div>
          </div>
          <div class="sv-panel-hint">\u23F1 \u3067\u73FE\u5728\u6642\u523B\u3092\u30E1\u30E2 \uFF0F \u30D0\u30C3\u30B8\u3092\u30BF\u30C3\u30D7\u3067\u79FB\u52D5</div>
          <div class="sv-setlist" id="sv-setlist"></div>
        </div>
      </div>
    </div>
  `,t.appendChild(e),o("#sv-close").addEventListener("click",J),o("#sv-fullscreen-btn").addEventListener("click",ue),e.querySelectorAll("[data-bc-tab]").forEach(s=>{s.addEventListener("click",()=>{J(),L(s.dataset.bcTab)})}),o("#sv-import-toggle").addEventListener("click",()=>{let s=o("#sv-import-area");s&&(s.hidden=!s.hidden,s.hidden||o("#sv-import-input")?.focus())}),o("#sv-import-cancel").addEventListener("click",()=>{let s=o("#sv-import-area");s&&(s.hidden=!0);let a=o("#sv-import-input");a&&(a.value="")}),o("#sv-import-apply").addEventListener("click",()=>{let s=e._currentStream;if(!s)return;let a=o("#sv-import-input");if(!a)return;let n=a.value.split(`
`).map(u=>Kt(u)).filter(u=>u!==null);if(!n.length)return;let r=G(s);n.forEach((u,m)=>{m<s.songs.length&&(r[m]=u)}),at(s,r),R(o("#sv-setlist"),s.songs,r);let c=o("#sv-import-area");c&&(c.hidden=!0),a.value=""}),o("#sv-setlist").addEventListener("click",s=>{let a=s.target.closest("[data-action]");if(!a)return;let l=parseInt(a.dataset.idx,10),n=e._currentStream;if(!n)return;let r=G(n);if(a.dataset.action==="seek"){if(r[l]!=null&&g?.seekTo){g.seekTo(r[l],!0);try{g.playVideo()}catch{}}}else if(a.dataset.action==="set-ts"){let c=g?.getCurrentTime?.();c!=null&&(r[l]=Math.floor(c),at(n,r),R(o("#sv-setlist"),n.songs,r))}else if(a.dataset.action==="del-ts")delete r[l],at(n,r),R(o("#sv-setlist"),n.songs,r);else if(a.dataset.action==="cts-seek"){let c=Number(a.dataset.ctsSeconds);if(!isNaN(c)&&g?.seekTo){g.seekTo(c,!0);try{g.playVideo()}catch{}}}else if(a.dataset.action==="cts-propose"){let c=n.songs[l];me(n,l,c?.title||`\u66F2 ${l+1}`)}})}function K(t,e=0){if(!t?.url)return;let s=P(t.url);if(!s){U(t.url);return}Vt(),oe();let a=o("#yt-player-panel");if(a&&!a.hidden){a.hidden=!0;let h=o("#yt-player-container");h&&(h.innerHTML="")}if(A=null,T){T=!1;let h=o("#stream-viewer");if(h){h.classList.remove("sv-fullscreen");let b=o("#panel-player");b&&b.appendChild(h)}document.body.style.overflow=""}T=!1,ce();let l=o("#stream-viewer");l.classList.remove("sv-fullscreen"),l._currentStream=t;let n=++N,r=o("#sv-bc-title");r&&(r.textContent=t.title||"\u914D\u4FE1");let c=o("#sv-stream-meta");c&&(c.textContent=`${k(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let u=o("#sv-yt-link");u&&(u.href=t.url);let m=o("#sv-song-count");m&&(m.textContent=`${t.songs.length}\u66F2`),D={};let d=G(t);R(o("#sv-setlist"),t.songs,d),ve(t),ye(t),l.hidden=!1,document.body.style.overflow="",setTimeout(()=>{o("#sv-close")?.focus({preventScroll:!0})},50),g=null;let p=o("#sv-player-wrap");p.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let f=Math.floor(e);re(()=>{if(n!==N||l.hidden)return;p.innerHTML="";let h=document.createElement("div");p.appendChild(h);try{g=new window.YT.Player(h,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...f>0?{start:f}:{}},events:{onReady:b=>{try{b.target.setPlaybackQuality("hd1080")}catch{}try{b.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(f>5)try{b.target.seekTo(f,!0)}catch{}},onStateChange:b=>{n===N&&b.data===window.YT.PlayerState.ENDED&&q&&be()},onError:()=>{n===N&&(p.innerHTML=`<iframe src="https://www.youtube.com/embed/${v(s)}?autoplay=1&playsinline=1&rel=0${f>0?`&start=${f}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{p.innerHTML=`<iframe src="https://www.youtube.com/embed/${v(s)}?autoplay=1&playsinline=1&rel=0${f>0?`&start=${f}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function J(){let t=o("#stream-viewer");if(!t)return;if(T){T=!1,t.classList.remove("sv-fullscreen"),document.body.style.overflow="";let n=o("#panel-player");n&&n.appendChild(t);let r=o("#sv-close");r&&(r.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let c=o("#sv-fullscreen-btn");c&&c.setAttribute("aria-pressed","false");return}let e=t._currentStream,s=g?.getCurrentTime?.()??0,a=e?.url?P(e.url):"";++N,t.hidden=!0,t._currentStream=null,g=null;let l=o("#sv-player-wrap");l&&(l.innerHTML=""),document.body.style.overflow="",de(),a&&e?.url&&(A=e,nt=Math.floor(s),Bt=Date.now(),U(e.url,nt,e.title||""))}window.__openStreamViewer=K;function Yt(t){let e=z(t),s=o("#song-modal"),a=o("#song-modal-body"),l=o("#song-modal-title");if(!e||!s||!a||!l)return;mt(e),l.textContent=e.title;let n=(e.streamRefs||[]).slice(0,8).map(u=>({...u,thumbnail:ot(u.url),thumbnailFallback:ie(u.url),thumbnailTiny:le(u.url),detailKey:E(u)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),c=W(e.key);a.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${v(e.key)}">${v(e.artist)}</button>
        <div class="song-detail-tags">${r.map(u=>`<span class="tag-badge">${v(u)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${k(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${c?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${v(e.key)}">${c?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${v(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${n.length?n.map(u=>`
        <div class="song-detail-stream">
          ${u.thumbnail&&u.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${v(u.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${v(u.thumbnail)}" data-fallback="${v(u.thumbnailFallback)}" data-tiny="${v(u.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${v(u.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${v(e.key)}" data-streamkey="${v(u.detailKey)}">
            <span>${k(u.date)}</span>
            <strong>${v(u.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,s.hidden=!1,o("#song-modal-close")?.focus()}function ge(){let t=o("#song-modal"),e=o("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",a=>{a.target===t&&s();let l=a.target.closest("[data-inline-youtube]");if(l){a.preventDefault(),a.stopPropagation(),U(l.dataset.inlineYoutube);return}let n=a.target.closest("[data-detail-action]");if(n){if(a.stopPropagation(),n.dataset.detailAction==="close"&&s(),n.dataset.detailAction==="favorite"){let r=n.dataset.songkey;ut(r);let c=W(r);n.textContent=c?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",n.classList.toggle("primary",c),n.classList.toggle("ghost",!c)}if(n.dataset.detailAction==="timeline"){let r=z(n.dataset.songkey);s(),r&&se(r)}if(n.dataset.detailAction==="stream"){let r=z(n.dataset.songkey),c=r?.streamRefs?.find(u=>E(u)===n.dataset.streamkey);s(),r&&c&&ae(r,c)}if(n.dataset.detailAction==="artist"){let r=z(n.dataset.songkey);s(),r&&ne(r)}}}),t.addEventListener("error",a=>{let l=a.target.closest?.(".song-detail-thumb");if(!l)return;let n=l.dataset.fallback||l.dataset.tiny||"";if(n&&l.src!==n){l.src=n,l.dataset.fallback===n?delete l.dataset.fallback:delete l.dataset.tiny;return}l.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&s()})}var Dt=!1;function we(){if(!i.data)return;let{stats:t,streams:e=[]}=i.data,s=e[0]?.date||null,a=X(s),l=t.dataGeneratedDate||i.channelData?.dataGeneratedDate||null,n=X(l),r=t.channelLabel||t.channelId||"",c=r?`<span class="badge accent" style="margin-right:8px;">${v(r)}</span>`:"";o("#updated-info").innerHTML=c+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${k(l)||"\u2014"}</strong>`+(n!=null?` <span class="badge">${n}\u65E5\u524D</span>`:"");let u=o("#stats-grid");if(!Dt)u.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${x(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${x(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${x(t.streams)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">1\u67A0\u5E73\u5747</div>
        <div class="stat-value">${t.avgPerStream}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card accent">
        <div class="stat-label">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</div>
        <div class="stat-value">${a??"\u2014"}<span class="stat-unit">\u65E5</span></div>
      </div>
      <div class="stat-card gold">
        <div class="stat-label">\u6D3B\u52D5\u671F\u9593</div>
        <div class="stat-value">${Ct(i.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,Dt=!0;else{let m=u.querySelectorAll(".stat-value");m.length>=6&&(m[0].textContent=x(t.total),m[0].innerHTML+='<span class="stat-unit">\u56DE</span>',m[1].textContent=x(t.repertoire),m[1].innerHTML+='<span class="stat-unit">\u66F2</span>',m[2].textContent=x(t.streams),m[2].innerHTML+='<span class="stat-unit">\u56DE</span>',m[3].textContent=t.avgPerStream,m[3].innerHTML+='<span class="stat-unit">\u66F2</span>',m[4].textContent=a??"\u2014",m[4].innerHTML+='<span class="stat-unit">\u65E5</span>',m[5].textContent=Ct(i.data),m[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function Ct(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,s=t.streams[0].date;return Math.floor((s-e)/864e5)+1}function ke(){o("#loading").hidden=!1,o("#error").hidden=!0}function Le(){o("#loading").hidden=!0}function $e(t){let e=o("#loading"),s=o("#error"),a=o("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),a&&(a.textContent=t&&t.message?t.message:String(t))}function Se(t){let e=document.getElementById("page-title");e&&(t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"))}function Te(){let t=o("#help-modal"),e=o("#help-btn"),s=o("#help-close");if(!t||!e||!s)return;let a=()=>{t.hidden=!1,s.focus()},l=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",a),s.addEventListener("click",l),t.addEventListener("click",n=>{n.target===t&&l()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&l()})}function Ee(){let t=o("#welcome-tip"),e=o("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function ct(){ke();try{let t=await ht();i.channelData=t,!C&&!t.fullLoaded&&It();let e=et();i.songsQuery=e.q,i.activeTab=Q(e.tab)?e.tab:"dashboard",Ht(i.activeTab);let s=e.channel||i.channel||H;if(S(s)||(s=H),!S(s)){let a=Object.keys(t.channels)[0];a&&(s=a)}if(!S(s))throw new Error("No channel data could be loaded");ee(),Le(),Z(s,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0})}catch(t){console.error("[init] failed:",t),$e(t)}}function xe(){if(!i.channelData)return;let t=et();i.songsQuery=t.q,t.channel!==i.channel&&S(t.channel)&&Z(t.channel,{resetSearch:!1,updateUrl:!1}),L(t.tab,{updateUrl:!1})}w(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=o("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!T){rt=e,J();return}L(e)})});w(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||Z(t.dataset.channel))})});window.addEventListener("popstate",xe);w("[data-audience]").forEach(t=>{t.addEventListener("click",()=>Wt(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),lt(e.dataset.artistSearch||e.textContent||"");return}let s=t.target.closest("[data-playlist-add]");if(s){t.preventDefault(),t.stopPropagation();let r=s.dataset.playlistAdd,c=s.dataset.streamTitle||"";import("./chunk-OWMXHPOY.js").then(u=>u.showAddToPlaylistModal(r,c));return}let a=t.target.closest("[data-stream-play]");if(a){t.preventDefault(),t.stopPropagation();let r=a.dataset.streamPlay,c=(i.data?.streams||[]).find(u=>E(u)===r);c?.url?K(c):a.dataset.inlineYoutube&&U(a.dataset.inlineYoutube);return}let l=t.target.closest("[data-inline-youtube]");if(l){t.preventDefault(),t.stopPropagation(),U(l.dataset.inlineYoutube);return}if(vt(t.target))return;let n=t.target.closest("[data-songkey]");n&&Yt(n.dataset.songkey)});o("#retry-btn").addEventListener("click",ct);o("#reload-btn").addEventListener("click",ct);Te();Ft();Vt();ge();Xt();te();Ee();$t(t=>{t.type==="song"?Yt(t.song.key):t.type==="artist"?lt(t.artist):t.type==="stream"&&(i.timelineFocus=E(t.stream),i.timelineFilter=null,i.timelineLimit=9999,L("timeline"),o("#panel-timeline")?.scrollIntoView({behavior:"smooth",block:"start"}))});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),St();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),yt();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let l=o("#help-modal");l&&l.hidden&&(l.hidden=!1,o("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let l=o("#stream-viewer"),n=!!o("#panel-player.active");if(l&&!l.hidden&&(T||n)){t.preventDefault(),J();return}if(Tt()){t.preventDefault(),F();return}let r=o("#song-modal");if(r&&!r.hidden)return;let c=o("#help-modal");if(c&&!c.hidden){c.hidden=!0,o("#help-btn")?.focus();return}let u=o("#songs-search");u&&document.activeElement===u&&u.value&&(t.preventDefault(),u.value="",u.dispatchEvent(new Event("input",{bubbles:!0})))}});wt(()=>{i.data&&(tt(),(i.activeTab==="dashboard"||i.activeTab==="analytics")&&_())});function _e(){ct()}_e();
