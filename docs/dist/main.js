import{b as rt,c as ct,d as dt,i as ut,k as z,l as F}from"./chunk-4TPCNLDP.js";import{a as pt,b as mt,e as Q,f as ft}from"./chunk-SIADDXVK.js";import{a as C}from"./chunk-MKJIXTK4.js";import{I as j,J as T,L as D,N as $,O as ot,a as it,b as O,c as lt,e as a,f as l,g,i as u}from"./chunk-5JCHYUC5.js";var v=-1,k=[],G=null;function gt(t){G=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",s=>{s.target===e&&I()});let n=document.getElementById("omni-input");n.addEventListener("input",()=>wt(n.value)),n.addEventListener("keydown",Kt),document.getElementById("omni-listbox").addEventListener("click",s=>{let o=s.target.closest("[data-omni-idx]");o&&kt(Number(o.dataset.omniIdx))})}function yt(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,v=-1,k=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),wt("")}function I(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),v=-1}function bt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Kt(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),v=Math.min(v+1,e.length-1),vt(e)):t.key==="ArrowUp"?(t.preventDefault(),v=Math.max(v-1,-1),vt(e)):t.key==="Enter"?(t.preventDefault(),v>=0&&k[v]&&kt(v)):t.key==="Escape"&&(t.preventDefault(),I())}function vt(t){t.forEach((e,n)=>{e.classList.toggle("is-active",n===v),e.setAttribute("aria-selected",String(n===v))}),v>=0&&t[v]?.scrollIntoView({block:"nearest"})}function kt(t){let e=k[t];!e||!G||(I(),G(e))}function wt(t){let e=document.getElementById("omni-listbox");if(!e)return;v=-1,k=[];let n=a.data?.songs||[],s=a.data?.streams||[],o=t.trim().toLowerCase(),i="",r=0;if(!a.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!o){let m=n.slice(0,8);if(m.length){i+=B("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let f of m)k.push({type:"song",song:f}),i+=ht(f,r++,"")}e.innerHTML=i||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let c=n.filter(m=>M(m.title).includes(o)||M(m.artist).includes(o)).slice(0,8);if(c.length){i+=B("\u{1F3B5} \u66F2");for(let m of c)k.push({type:"song",song:m}),i+=ht(m,r++,o)}let d=new Set,p=[];for(let m of n)if(M(m.artist).includes(o)&&!d.has(m.artist)&&(d.add(m.artist),p.push(m.artist),p.length>=4))break;if(p.length){i+=B("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let m of p){let f=n.filter(h=>h.artist===m).length;k.push({type:"artist",artist:m}),i+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${K(u(m),o)}</span>
          <span class="omni-item-meta">${f}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(a.channelData?.fullLoaded&&s.length){let m=s.filter(f=>M(f.title).includes(o)||f.songs?.some(h=>M(h.title).includes(o)||M(h.artist).includes(o))).slice(0,5);if(m.length){i+=B("\u{1F4C5} \u914D\u4FE1\u67A0");for(let f of m)k.push({type:"stream",stream:f}),i+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${K(u(f.title||"\u914D\u4FE1"),o)}</span>
            <span class="omni-item-meta">${T(f.date)} \xB7 ${f.songs?.length||0}\u66F2</span>
          </div>
        </div>`}}i||(i=`<div class="omni-empty">\u300C${u(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=i}function B(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function ht(t,e,n){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${K(u(t.title),n)}</span>
      <span class="omni-item-meta">${K(u(t.artist||""),n)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function M(t){return String(t||"").toLowerCase()}function K(t,e){if(!e)return t;let s=t.toLowerCase().indexOf(e);return s<0?t:t.slice(0,s)+'<mark class="hl">'+t.slice(s,s+e.length)+"</mark>"+t.slice(s+e.length)}mt();lt();var St={dashboard:()=>import("./chunk-HGAGP5IO.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-AMQYUYKF.js").then(t=>t.renderRanking),songs:()=>import("./chunk-QT7AEQRW.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-3GETE4YO.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-GLVWGAKD.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-ZSXWKZ7E.js").then(t=>t.renderPlaylists)},R=new Map,Lt=0,_=null;function V(t){return Object.prototype.hasOwnProperty.call(St,t)}async function Rt(t){R.has(t)||R.set(t,St[t]());try{return await R.get(t)}catch(e){throw R.delete(t),e}}function xt(t){return["dashboard","timeline","analytics"].includes(t)}function Ut(t,e={}){let n=l(`#panel-${t}`);if(!n)return;let s={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};n.innerHTML=`
    <div class="state-card">
      <div class="msg">${u(s[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function Yt(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function qt(t){if(a.channelData?.fullLoaded)return;a.channelData=t;let e=L(a.channel)?a.channel:C,n=L(e);n&&(a.data=n),!xt(a.activeTab)&&a.data&&x(a.activeTab,{autoLoad:!1})}function Vt(t){a.channelData=t,a.channelData.fullLoaded=!0;let e=L(a.channel)?a.channel:C;N(e,{resetSearch:!1,updateUrl:!1,render:!1}),x(a.activeTab,{autoLoad:!1})}function Dt(){return _=ct({meta:a.channelData,onSongsReady:qt}).then(Vt).finally(()=>{_=null}),_}async function Nt(){a.channelData?.fullLoaded||(_||Dt(),await _)}async function x(t=a.activeTab,e={}){if(t!=="playlists"&&(!a.data||!V(t))||!V(t))return;let n=a.channelData?.partialLoaded||a.channelData?.fullLoaded,s=a.channelData?.fullLoaded;if(t==="playlists"?!1:xt(t)?!s:!n)if(e.autoLoad){Yt(t);try{await Nt()}catch(r){console.error("[data] full load failed",r);let c=l(`#panel-${t}`);c&&(c.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${u(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${u(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,c.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{x(t,{autoLoad:!0})}));return}}else{Ut(t,{initial:e.initial});return}let i=++Lt;try{let r=await Rt(t);if(i!==Lt||t!==a.activeTab||!a.data)return;t==="songs"&&ut(a.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let c=l(`#panel-${t}`);c&&(c.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${u(r?.message||String(r))}</div>
        </div>
      `)}}function b(t,e={}){V(t)||(t="dashboard"),a.activeTab=t,Mt(t),e.updateUrl!==!1&&F({tab:t}),x(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Mt(t){g(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),g(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function L(t){return a.channelData?t==="all"?a.channelData.combined:a.channelData.channels[t]||null:null}function N(t,e={}){let n=L(t);n&&(a.channel=t,me(t),a.data=n,a.timelineFilter=null,a.timelineFocus=null,a.timelineLimit=12,a.songsLimit=100,e.resetSearch!==!1&&(a.songsQuery="",a.songsGenre="all"),Q(),g("#channel-switch [data-channel]").forEach(s=>s.classList.toggle("active",s.dataset.channel===t)),tt(),e.updateUrl!==!1&&F({tab:a.activeTab,channel:t,q:a.songsQuery}),ce(),e.render!==!1&&x(a.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function Ot(t,e={}){a.audience=t==="singer"?"singer":"listener",a.singerMode=a.audience==="singer",a.singerMode||(a.singerPreset="all"),g(".audience-switch [data-audience]").forEach(n=>{n.classList.toggle("active",n.dataset.audience===a.audience)}),document.body.dataset.audience=a.audience,tt(),a.audience==="singer"?(a.songsLimit=100,b("songs",{autoLoad:e.autoLoad!==!1})):a.data&&x(a.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function tt(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",n=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${n}`}function jt(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),n=l("#topbar-actions");if(!t||!e||!n)return;let s=i=>{e.checked=i,n.classList.toggle("is-open",i),t.setAttribute("aria-expanded",String(i))},o=()=>{s(!1),t.focus()};t.addEventListener("click",i=>{i.stopPropagation(),requestAnimationFrame(()=>s(e.checked))}),t.addEventListener("keydown",i=>{i.key!=="Enter"&&i.key!==" "||(i.preventDefault(),s(!e.checked))}),e.addEventListener("change",()=>{s(e.checked)}),document.addEventListener("click",i=>{n.classList.contains("is-open")&&(i.target.closest("#topbar-actions")||i.target.closest("#mobile-menu-toggle")||i.target.closest("#mobile-menu-state")||o())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&o()}),n.addEventListener("click",i=>{i.stopPropagation()}),tt()}function Qt(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),n=!1,s=420,o=()=>{!e||e.src||(e.src=e.dataset.src||"")},i=()=>{n=!1;let c=window.scrollY>s;c&&o(),t.hidden=!c,t.classList.toggle("is-visible",c),t.setAttribute("aria-hidden",String(!c)),t.tabIndex=c?0:-1},r=()=>{n||(n=!0,requestAnimationFrame(i))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),i()}function zt(){if(a.channelData)for(let t of g("#channel-switch [data-channel]")){let e=t.dataset.channel,n=e==="all"?!!a.channelData.combined:!!(a.channelData.channels&&a.channelData.channels[e]);t.disabled=!n,n?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function Gt({key:t,title:e,artist:n}){a.timelineFilter&&a.timelineFilter.key===t&&a.activeTab==="timeline"?a.timelineFilter=null:a.timelineFilter={key:t,title:e,artist:n},a.timelineFocus=null,a.timelineLimit=12,b("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Zt(t,e){a.timelineFilter={key:t.key,title:t.title,artist:t.artist},a.timelineFocus=D(e),a.timelineLimit=9999,b("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Wt(t){et(t.artist||"")}function et(t){let e=String(t||"").replace(/"/g,"");a.songsQuery=e?`artist:"${e}"`:"",a.songsLimit=100,F({tab:"songs",q:a.songsQuery}),b("songs",{updateUrl:!1})}function U(t){return(a.data?.songs||[]).find(e=>e.key===t)||null}function P(t){let e=String(t||""),n=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let s of n){let o=e.match(s);if(o)return o[1]}return""}function Jt(t){let e=P(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function Xt(t){let e=P(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function te(t){let e=P(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function H(t,e=0,n=""){let s=P(t);if(!s)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}_t();let o=l("#yt-player-container"),i=l("#yt-player-panel"),r=l("#yt-player-open");if(!o||!i)return;let c=e>0?`&start=${Math.floor(e)}`:"";o.innerHTML=`<iframe src="https://www.youtube.com/embed/${s}?autoplay=1&playsinline=1${c}&vq=hd1080" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`,r&&(r.href=String(t||""));let d=l("#yt-mini-title");d&&(d.textContent=n||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let p=l("#yt-mini-song");p&&(p.textContent=""),i.classList.toggle("has-stream",!!A),i.hidden=!1}function _t(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0;let e=l("#yt-player-container");e&&(e.innerHTML=""),A=null}),l("#yt-mini-expand").addEventListener("click",()=>{if(!A)return;let e=(Date.now()-Ct)/1e3,n=Math.max(0,W+e);nt(A,n)})}var At=!1,Pt=[];window.onYouTubeIframeAPIReady=()=>{At=!0,Pt.splice(0).forEach(t=>t())};function ee(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function ne(t){if(At&&window.YT?.Player){t();return}Pt.push(t)}var w=null,Y=0,A=null,W=0,Ct=0,S=!1,It="timeline";function ae(){It=a.activeTab||"timeline",a.activeTab="player",g(".tab-btn").forEach(t=>t.classList.remove("active")),g(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function se(){b(It||"timeline")}function ie(){S=!0;let t=l("#stream-viewer");if(!t)return;document.body.appendChild(t),t.classList.add("sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let n=l("#sv-fullscreen-btn");n&&n.setAttribute("aria-pressed","true")}function Et(t){let e=Math.floor(t),n=Math.floor(e/3600),s=Math.floor(e%3600/60),o=e%60;return n>0?`${n}:${String(s).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${s}:${String(o).padStart(2,"0")}`}function Ht(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function J(t){try{return JSON.parse(localStorage.getItem(Ht(t))||"null")||{}}catch{return{}}}function Z(t,e){try{localStorage.setItem(Ht(t),JSON.stringify(e))}catch{}}function le(t,e,n){let s=n[e],o=s!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${u(Et(s))} \u306B\u79FB\u52D5">${u(Et(s))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"";return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${u(t.title)}</span>
      <span class="sv-song-artist">${u(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${o}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
  </div>`}function q(t,e,n){t.innerHTML=e.map((s,o)=>le(s,o,n)).join("")}function oe(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Ft(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
        <div class="sv-player-wrap" id="sv-player-wrap">
          <div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>
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
  `,t.appendChild(e),l("#sv-close").addEventListener("click",X),l("#sv-fullscreen-btn").addEventListener("click",ie),e.querySelectorAll("[data-bc-tab]").forEach(n=>{n.addEventListener("click",()=>{X(),b(n.dataset.bcTab)})}),l("#sv-import-toggle").addEventListener("click",()=>{let n=l("#sv-import-area");n&&(n.hidden=!n.hidden,n.hidden||l("#sv-import-input")?.focus())}),l("#sv-import-cancel").addEventListener("click",()=>{let n=l("#sv-import-area");n&&(n.hidden=!0);let s=l("#sv-import-input");s&&(s.value="")}),l("#sv-import-apply").addEventListener("click",()=>{let n=e._currentStream;if(!n)return;let s=l("#sv-import-input");if(!s)return;let i=s.value.split(`
`).map(d=>oe(d)).filter(d=>d!==null);if(!i.length)return;let r=J(n);i.forEach((d,p)=>{p<n.songs.length&&(r[p]=d)}),Z(n,r),q(l("#sv-setlist"),n.songs,r);let c=l("#sv-import-area");c&&(c.hidden=!0),s.value=""}),l("#sv-setlist").addEventListener("click",n=>{let s=n.target.closest("[data-action]");if(!s)return;let o=parseInt(s.dataset.idx,10),i=e._currentStream;if(!i)return;let r=J(i);if(s.dataset.action==="seek"){if(r[o]!=null&&w?.seekTo){w.seekTo(r[o],!0);try{w.playVideo()}catch{}}}else if(s.dataset.action==="set-ts"){let c=w?.getCurrentTime?.();c!=null&&(r[o]=Math.floor(c),Z(i,r),q(l("#sv-setlist"),i.songs,r))}else s.dataset.action==="del-ts"&&(delete r[o],Z(i,r),q(l("#sv-setlist"),i.songs,r))})}function nt(t,e=0){if(!t?.url)return;let n=P(t.url);if(!n){H(t.url);return}Ft(),ee();let s=l("#yt-player-panel");if(s&&!s.hidden){s.hidden=!0;let y=l("#yt-player-container");y&&(y.innerHTML="")}if(A=null,S){S=!1;let y=l("#stream-viewer");if(y){y.classList.remove("sv-fullscreen");let E=l("#panel-player");E&&E.appendChild(y)}document.body.style.overflow=""}S=!1,ae();let o=l("#stream-viewer");o.classList.remove("sv-fullscreen"),o._currentStream=t;let i=++Y,r=l("#sv-bc-title");r&&(r.textContent=t.title||"\u914D\u4FE1");let c=l("#sv-stream-meta");c&&(c.textContent=`${T(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let d=l("#sv-yt-link");d&&(d.href=t.url);let p=l("#sv-song-count");p&&(p.textContent=`${t.songs.length}\u66F2`);let m=J(t);q(l("#sv-setlist"),t.songs,m),o.hidden=!1,document.body.style.overflow="",setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),w=null;let f=l("#sv-player-wrap");f.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let h=Math.floor(e);ne(()=>{if(i!==Y||o.hidden)return;f.innerHTML="";let y=document.createElement("div");f.appendChild(y);try{w=new window.YT.Player(y,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...h>0?{start:h}:{}},events:{onReady:E=>{try{E.target.setPlaybackQuality("hd1080")}catch{}try{E.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(h>5)try{E.target.seekTo(h,!0)}catch{}},onError:()=>{i===Y&&(f.innerHTML=`<iframe src="https://www.youtube.com/embed/${u(n)}?autoplay=1&playsinline=1&rel=0${h>0?`&start=${h}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{f.innerHTML=`<iframe src="https://www.youtube.com/embed/${u(n)}?autoplay=1&playsinline=1&rel=0${h>0?`&start=${h}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function X(){let t=l("#stream-viewer");if(!t)return;if(S){S=!1,t.classList.remove("sv-fullscreen"),document.body.style.overflow="";let i=l("#panel-player");i&&i.appendChild(t);let r=l("#sv-close");r&&(r.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let c=l("#sv-fullscreen-btn");c&&c.setAttribute("aria-pressed","false");return}let e=t._currentStream,n=w?.getCurrentTime?.()??0,s=e?.url?P(e.url):"";++Y,t.hidden=!0,t._currentStream=null,w=null;let o=l("#sv-player-wrap");o&&(o.innerHTML=""),document.body.style.overflow="",se(),s&&e?.url&&(A=e,W=Math.floor(n),Ct=Date.now(),H(e.url,W,e.title||""))}window.__openStreamViewer=nt;function Bt(t){let e=U(t),n=l("#song-modal"),s=l("#song-modal-body"),o=l("#song-modal-title");if(!e||!n||!s||!o)return;rt(e),o.textContent=e.title;let i=(e.streamRefs||[]).slice(0,8).map(d=>({...d,thumbnail:Jt(d.url),thumbnailFallback:Xt(d.url),thumbnailTiny:te(d.url),detailKey:D(d)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),c=O(e.key);s.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${u(e.key)}">${u(e.artist)}</button>
        <div class="song-detail-tags">${r.map(d=>`<span class="tag-badge">${u(d)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${T(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${c?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${u(e.key)}">${c?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${u(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${i.length?i.map(d=>`
        <div class="song-detail-stream">
          ${d.thumbnail&&d.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${u(d.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${u(d.thumbnail)}" data-fallback="${u(d.thumbnailFallback)}" data-tiny="${u(d.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${u(d.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${u(e.key)}" data-streamkey="${u(d.detailKey)}">
            <span>${T(d.date)}</span>
            <strong>${u(d.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,n.hidden=!1,l("#song-modal-close")?.focus()}function re(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let n=()=>{t.hidden=!0};e.addEventListener("click",n),t.addEventListener("click",s=>{s.target===t&&n();let o=s.target.closest("[data-inline-youtube]");if(o){s.preventDefault(),s.stopPropagation(),H(o.dataset.inlineYoutube);return}let i=s.target.closest("[data-detail-action]");if(i){if(s.stopPropagation(),i.dataset.detailAction==="close"&&n(),i.dataset.detailAction==="favorite"){let r=i.dataset.songkey;it(r);let c=O(r);i.textContent=c?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",i.classList.toggle("primary",c),i.classList.toggle("ghost",!c)}if(i.dataset.detailAction==="timeline"){let r=U(i.dataset.songkey);n(),r&&Gt(r)}if(i.dataset.detailAction==="stream"){let r=U(i.dataset.songkey),c=r?.streamRefs?.find(d=>D(d)===i.dataset.streamkey);n(),r&&c&&Zt(r,c)}if(i.dataset.detailAction==="artist"){let r=U(i.dataset.songkey);n(),r&&Wt(r)}}}),t.addEventListener("error",s=>{let o=s.target.closest?.(".song-detail-thumb");if(!o)return;let i=o.dataset.fallback||o.dataset.tiny||"";if(i&&o.src!==i){o.src=i,o.dataset.fallback===i?delete o.dataset.fallback:delete o.dataset.tiny;return}o.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",s=>{s.key==="Escape"&&!t.hidden&&n()})}var Tt=!1;function ce(){if(!a.data)return;let{stats:t,streams:e=[]}=a.data,n=e[0]?.date||null,s=j(n),o=t.dataGeneratedDate||a.channelData?.dataGeneratedDate||null,i=j(o),r=t.channelLabel||t.channelId||"",c=r?`<span class="badge accent" style="margin-right:8px;">${u(r)}</span>`:"";l("#updated-info").innerHTML=c+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${T(o)||"\u2014"}</strong>`+(i!=null?` <span class="badge">${i}\u65E5\u524D</span>`:"");let d=l("#stats-grid");if(!Tt)d.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${$(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${$(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${$(t.streams)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">1\u67A0\u5E73\u5747</div>
        <div class="stat-value">${t.avgPerStream}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card accent">
        <div class="stat-label">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</div>
        <div class="stat-value">${s??"\u2014"}<span class="stat-unit">\u65E5</span></div>
      </div>
      <div class="stat-card gold">
        <div class="stat-label">\u6D3B\u52D5\u671F\u9593</div>
        <div class="stat-value">${$t(a.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,Tt=!0;else{let p=d.querySelectorAll(".stat-value");p.length>=6&&(p[0].textContent=$(t.total),p[0].innerHTML+='<span class="stat-unit">\u56DE</span>',p[1].textContent=$(t.repertoire),p[1].innerHTML+='<span class="stat-unit">\u66F2</span>',p[2].textContent=$(t.streams),p[2].innerHTML+='<span class="stat-unit">\u56DE</span>',p[3].textContent=t.avgPerStream,p[3].innerHTML+='<span class="stat-unit">\u66F2</span>',p[4].textContent=s??"\u2014",p[4].innerHTML+='<span class="stat-unit">\u65E5</span>',p[5].textContent=$t(a.data),p[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function $t(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,n=t.streams[0].date;return Math.floor((n-e)/864e5)+1}function de(){l("#loading").hidden=!1,l("#error").hidden=!0}function ue(){l("#loading").hidden=!0}function pe(t){let e=l("#loading"),n=l("#error"),s=l("#err-detail");e&&(e.hidden=!0),n&&(n.hidden=!1),s&&(s.textContent=t&&t.message?t.message:String(t))}function me(t){let e=document.getElementById("page-title");e&&(t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"))}function fe(){let t=l("#help-modal"),e=l("#help-btn"),n=l("#help-close");if(!t||!e||!n)return;let s=()=>{t.hidden=!1,n.focus()},o=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",s),n.addEventListener("click",o),t.addEventListener("click",i=>{i.target===t&&o()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&o()})}function ve(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let n=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(n,{timeout:5e3}):window.setTimeout(n,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function at(){de();try{let t=await dt();a.channelData=t,!_&&!t.fullLoaded&&Dt();let e=z();a.songsQuery=e.q,a.activeTab=V(e.tab)?e.tab:"dashboard",Mt(a.activeTab);let n=e.channel||a.channel||C;if(L(n)||(n=C),!L(n)){let s=Object.keys(t.channels)[0];s&&(n=s)}if(!L(n))throw new Error("No channel data could be loaded");zt(),ue(),N(n,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0})}catch(t){console.error("[init] failed:",t),pe(t)}}function he(){if(!a.channelData)return;let t=z();a.songsQuery=t.q,t.channel!==a.channel&&L(t.channel)&&N(t.channel,{resetSearch:!1,updateUrl:!1}),b(t.tab,{updateUrl:!1})}g(".tab-btn").forEach(t=>{t.addEventListener("click",()=>b(t.dataset.tab))});g(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||N(t.dataset.channel))})});window.addEventListener("popstate",he);g("[data-audience]").forEach(t=>{t.addEventListener("click",()=>Ot(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),et(e.dataset.artistSearch||e.textContent||"");return}let n=t.target.closest("[data-playlist-add]");if(n){t.preventDefault(),t.stopPropagation();let r=n.dataset.playlistAdd,c=n.dataset.streamTitle||"";import("./chunk-ZSXWKZ7E.js").then(d=>d.showAddToPlaylistModal(r,c));return}let s=t.target.closest("[data-stream-play]");if(s){t.preventDefault(),t.stopPropagation();let r=s.dataset.streamPlay,c=(a.data?.streams||[]).find(d=>D(d)===r);c?.url?nt(c):s.dataset.inlineYoutube&&H(s.dataset.inlineYoutube);return}let o=t.target.closest("[data-inline-youtube]");if(o){t.preventDefault(),t.stopPropagation(),H(o.dataset.inlineYoutube);return}if(ot(t.target))return;let i=t.target.closest("[data-songkey]");i&&Bt(i.dataset.songkey)});l("#retry-btn").addEventListener("click",at);l("#reload-btn").addEventListener("click",at);fe();_t();Ft();re();jt();Qt();ve();gt(t=>{t.type==="song"?Bt(t.song.key):t.type==="artist"?et(t.artist):t.type==="stream"&&(a.timelineFocus=D(t.stream),a.timelineFilter=null,a.timelineLimit=9999,b("timeline"),l("#panel-timeline")?.scrollIntoView({behavior:"smooth",block:"start"}))});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,n=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!n&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),yt();return}if(t.key==="t"&&!n&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),pt();return}if(t.key==="?"&&!n&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let o=l("#help-modal");o&&o.hidden&&(o.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let o=l("#stream-viewer"),i=!!l("#panel-player.active");if(o&&!o.hidden&&(S||i)){t.preventDefault(),X();return}if(bt()){t.preventDefault(),I();return}let r=l("#song-modal");if(r&&!r.hidden)return;let c=l("#help-modal");if(c&&!c.hidden){c.hidden=!0,l("#help-btn")?.focus();return}let d=l("#songs-search");d&&document.activeElement===d&&d.value&&(t.preventDefault(),d.value="",d.dispatchEvent(new Event("input",{bubbles:!0})))}});ft(()=>{a.data&&(Q(),(a.activeTab==="dashboard"||a.activeTab==="analytics")&&x())});function ge(){at()}ge();
