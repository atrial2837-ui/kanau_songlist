import{b as st,c as lt,d as ot,i as rt,k as O,l as H}from"./chunk-4TPCNLDP.js";import{a as ct,b as dt,e as V,f as ut}from"./chunk-SIADDXVK.js";import{a as _}from"./chunk-MKJIXTK4.js";import{I as N,J as w,L as $,N as T,O as it,a as nt,b as q,c as at,e as a,f as o,g,i as u}from"./chunk-5JCHYUC5.js";var v=-1,y=[],j=null;function ft(t){j=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",s=>{s.target===e&&C()});let n=document.getElementById("omni-input");n.addEventListener("input",()=>yt(n.value)),n.addEventListener("keydown",Pt),document.getElementById("omni-listbox").addEventListener("click",s=>{let l=s.target.closest("[data-omni-idx]");l&&gt(Number(l.dataset.omniIdx))})}function vt(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,v=-1,y=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),yt("")}function C(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),v=-1}function ht(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Pt(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),v=Math.min(v+1,e.length-1),mt(e)):t.key==="ArrowUp"?(t.preventDefault(),v=Math.max(v-1,-1),mt(e)):t.key==="Enter"?(t.preventDefault(),v>=0&&y[v]&&gt(v)):t.key==="Escape"&&(t.preventDefault(),C())}function mt(t){t.forEach((e,n)=>{e.classList.toggle("is-active",n===v),e.setAttribute("aria-selected",String(n===v))}),v>=0&&t[v]?.scrollIntoView({block:"nearest"})}function gt(t){let e=y[t];!e||!j||(C(),j(e))}function yt(t){let e=document.getElementById("omni-listbox");if(!e)return;v=-1,y=[];let n=a.data?.songs||[],s=a.data?.streams||[],l=t.trim().toLowerCase(),i="",r=0;if(!a.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!l){let p=n.slice(0,8);if(p.length){i+=P("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let f of p)y.push({type:"song",song:f}),i+=pt(f,r++,"")}e.innerHTML=i||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let c=n.filter(p=>S(p.title).includes(l)||S(p.artist).includes(l)).slice(0,8);if(c.length){i+=P("\u{1F3B5} \u66F2");for(let p of c)y.push({type:"song",song:p}),i+=pt(p,r++,l)}let d=new Set,m=[];for(let p of n)if(S(p.artist).includes(l)&&!d.has(p.artist)&&(d.add(p.artist),m.push(p.artist),m.length>=4))break;if(m.length){i+=P("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let p of m){let f=n.filter(h=>h.artist===p).length;y.push({type:"artist",artist:p}),i+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${F(u(p),l)}</span>
          <span class="omni-item-meta">${f}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(a.channelData?.fullLoaded&&s.length){let p=s.filter(f=>S(f.title).includes(l)||f.songs?.some(h=>S(h.title).includes(l)||S(h.artist).includes(l))).slice(0,5);if(p.length){i+=P("\u{1F4C5} \u914D\u4FE1\u67A0");for(let f of p)y.push({type:"stream",stream:f}),i+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${F(u(f.title||"\u914D\u4FE1"),l)}</span>
            <span class="omni-item-meta">${w(f.date)} \xB7 ${f.songs?.length||0}\u66F2</span>
          </div>
        </div>`}}i||(i=`<div class="omni-empty">\u300C${u(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=i}function P(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function pt(t,e,n){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${F(u(t.title),n)}</span>
      <span class="omni-item-meta">${F(u(t.artist||""),n)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function S(t){return String(t||"").toLowerCase()}function F(t,e){if(!e)return t;let s=t.toLowerCase().indexOf(e);return s<0?t:t.slice(0,s)+'<mark class="hl">'+t.slice(s,s+e.length)+"</mark>"+t.slice(s+e.length)}dt();at();var Tt={dashboard:()=>import("./chunk-HGAGP5IO.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-AMQYUYKF.js").then(t=>t.renderRanking),songs:()=>import("./chunk-QT7AEQRW.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-3H6TNNZ7.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-GLVWGAKD.js").then(t=>t.renderAnalytics)},K=new Map,bt=0,x=null;function W(t){return Object.prototype.hasOwnProperty.call(Tt,t)}async function Ft(t){K.has(t)||K.set(t,Tt[t]());try{return await K.get(t)}catch(e){throw K.delete(t),e}}function Et(t){return["dashboard","timeline","analytics"].includes(t)}function Kt(t,e={}){let n=o(`#panel-${t}`);if(!n)return;let s={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};n.innerHTML=`
    <div class="state-card">
      <div class="msg">${u(s[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function Bt(t){let e=o(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function Ut(t){if(a.channelData?.fullLoaded)return;a.channelData=t;let e=k(a.channel)?a.channel:_,n=k(e);n&&(a.data=n),!Et(a.activeTab)&&a.data&&E(a.activeTab,{autoLoad:!1})}function Yt(t){a.channelData=t,a.channelData.fullLoaded=!0;let e=k(a.channel)?a.channel:_;R(e,{resetSearch:!1,updateUrl:!1,render:!1}),E(a.activeTab,{autoLoad:!1})}function $t(){return x=lt({meta:a.channelData,onSongsReady:Ut}).then(Yt).finally(()=>{x=null}),x}async function Rt(){a.channelData?.fullLoaded||(x||$t(),await x)}async function E(t=a.activeTab,e={}){if(!a.data||!W(t))return;let n=a.channelData?.partialLoaded||a.channelData?.fullLoaded,s=a.channelData?.fullLoaded;if(Et(t)?!s:!n)if(e.autoLoad){Bt(t);try{await Rt()}catch(r){console.error("[data] full load failed",r);let c=o(`#panel-${t}`);c&&(c.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${u(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${u(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,c.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{E(t,{autoLoad:!0})}));return}}else{Kt(t,{initial:e.initial});return}let i=++bt;try{let r=await Ft(t);if(i!==bt||t!==a.activeTab||!a.data)return;t==="songs"&&rt(a.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let c=o(`#panel-${t}`);c&&(c.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${u(r?.message||String(r))}</div>
        </div>
      `)}}function L(t,e={}){W(t)||(t="dashboard"),a.activeTab=t,St(t),e.updateUrl!==!1&&H({tab:t}),E(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function St(t){g(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),g(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function k(t){return a.channelData?t==="all"?a.channelData.combined:a.channelData.channels[t]||null:null}function R(t,e={}){let n=k(t);n&&(a.channel=t,oe(t),a.data=n,a.timelineFilter=null,a.timelineFocus=null,a.timelineLimit=12,a.songsLimit=100,e.resetSearch!==!1&&(a.songsQuery="",a.songsGenre="all"),V(),g("#channel-switch [data-channel]").forEach(s=>s.classList.toggle("active",s.dataset.channel===t)),J(),e.updateUrl!==!1&&H({tab:a.activeTab,channel:t,q:a.songsQuery}),ae(),e.render!==!1&&E(a.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function qt(t,e={}){a.audience=t==="singer"?"singer":"listener",a.singerMode=a.audience==="singer",a.singerMode||(a.singerPreset="all"),g(".audience-switch [data-audience]").forEach(n=>{n.classList.toggle("active",n.dataset.audience===a.audience)}),document.body.dataset.audience=a.audience,J(),a.audience==="singer"?(a.songsLimit=100,L("songs",{autoLoad:e.autoLoad!==!1})):a.data&&E(a.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function J(){let t=o("#mobile-menu-label");if(!t)return;let e=o("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",n=o("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${n}`}function Nt(){let t=o("#mobile-menu-toggle"),e=o("#mobile-menu-state"),n=o("#topbar-actions");if(!t||!e||!n)return;let s=i=>{e.checked=i,n.classList.toggle("is-open",i),t.setAttribute("aria-expanded",String(i))},l=()=>{s(!1),t.focus()};t.addEventListener("click",i=>{i.stopPropagation(),requestAnimationFrame(()=>s(e.checked))}),t.addEventListener("keydown",i=>{i.key!=="Enter"&&i.key!==" "||(i.preventDefault(),s(!e.checked))}),e.addEventListener("change",()=>{s(e.checked)}),document.addEventListener("click",i=>{n.classList.contains("is-open")&&(i.target.closest("#topbar-actions")||i.target.closest("#mobile-menu-toggle")||i.target.closest("#mobile-menu-state")||l())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&l()}),n.addEventListener("click",i=>{i.stopPropagation()}),J()}function Vt(){let t=o("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),n=!1,s=420,l=()=>{!e||e.src||(e.src=e.dataset.src||"")},i=()=>{n=!1;let c=window.scrollY>s;c&&l(),t.hidden=!c,t.classList.toggle("is-visible",c),t.setAttribute("aria-hidden",String(!c)),t.tabIndex=c?0:-1},r=()=>{n||(n=!0,requestAnimationFrame(i))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),i()}function Ot(){if(a.channelData)for(let t of g("#channel-switch [data-channel]")){let e=t.dataset.channel,n=e==="all"?!!a.channelData.combined:!!(a.channelData.channels&&a.channelData.channels[e]);t.disabled=!n,n?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function jt({key:t,title:e,artist:n}){a.timelineFilter&&a.timelineFilter.key===t&&a.activeTab==="timeline"?a.timelineFilter=null:a.timelineFilter={key:t,title:e,artist:n},a.timelineFocus=null,a.timelineLimit=12,L("timeline"),o("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function zt(t,e){a.timelineFilter={key:t.key,title:t.title,artist:t.artist},a.timelineFocus=$(e),a.timelineLimit=9999,L("timeline"),o("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Gt(t){X(t.artist||"")}function X(t){let e=String(t||"").replace(/"/g,"");a.songsQuery=e?`artist:"${e}"`:"",a.songsLimit=100,H({tab:"songs",q:a.songsQuery}),L("songs",{updateUrl:!1})}function B(t){return(a.data?.songs||[]).find(e=>e.key===t)||null}function M(t){let e=String(t||""),n=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let s of n){let l=e.match(s);if(l)return l[1]}return""}function Qt(t){let e=M(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function Zt(t){let e=M(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function Wt(t){let e=M(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function I(t,e=0,n=""){let s=M(t);if(!s)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}xt();let l=o("#yt-player-container"),i=o("#yt-player-panel"),r=o("#yt-player-open");if(!l||!i)return;let c=e>0?`&start=${Math.floor(e)}`:"";l.innerHTML=`<iframe src="https://www.youtube.com/embed/${s}?autoplay=1&playsinline=1${c}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`,r&&(r.href=String(t||""));let d=o("#yt-mini-title");d&&(d.textContent=n||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let m=o("#yt-mini-song");m&&(m.textContent=""),i.classList.toggle("has-stream",!!D),i.hidden=!1}function xt(){if(o("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),o("#yt-player-close").addEventListener("click",()=>{t.hidden=!0;let e=o("#yt-player-container");e&&(e.innerHTML=""),D=null}),o("#yt-mini-expand").addEventListener("click",()=>{if(!D)return;let e=(Date.now()-At)/1e3,n=Math.max(0,G+e);It(D,n)})}var Dt=!1,Mt=[];window.onYouTubeIframeAPIReady=()=>{Dt=!0,Mt.splice(0).forEach(t=>t())};function Jt(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function Xt(t){if(Dt&&window.YT?.Player){t();return}Mt.push(t)}var b=null,U=0,D=null,G=0,At=0;function kt(t){let e=Math.floor(t),n=Math.floor(e/3600),s=Math.floor(e%3600/60),l=e%60;return n>0?`${n}:${String(s).padStart(2,"0")}:${String(l).padStart(2,"0")}`:`${s}:${String(l).padStart(2,"0")}`}function _t(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function Q(t){try{return JSON.parse(localStorage.getItem(_t(t))||"null")||{}}catch{return{}}}function z(t,e){try{localStorage.setItem(_t(t),JSON.stringify(e))}catch{}}function te(t,e,n){let s=n[e],l=s!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${u(kt(s))} \u306B\u79FB\u52D5">${u(kt(s))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"";return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${u(t.title)}</span>
      <span class="sv-song-artist">${u(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${l}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
  </div>`}function Y(t,e,n){t.innerHTML=e.map((s,l)=>te(s,l,n)).join("")}function ee(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Ct(){if(o("#stream-viewer"))return;let t=document.createElement("div");t.id="stream-viewer",t.hidden=!0,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),t.innerHTML=`
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
  `,document.body.appendChild(t),o("#sv-close").addEventListener("click",Z),t.querySelectorAll("[data-bc-tab]").forEach(e=>{e.addEventListener("click",()=>{Z(),L(e.dataset.bcTab)})}),o("#sv-import-toggle").addEventListener("click",()=>{let e=o("#sv-import-area");e&&(e.hidden=!e.hidden,e.hidden||o("#sv-import-input")?.focus())}),o("#sv-import-cancel").addEventListener("click",()=>{let e=o("#sv-import-area");e&&(e.hidden=!0);let n=o("#sv-import-input");n&&(n.value="")}),o("#sv-import-apply").addEventListener("click",()=>{let e=t._currentStream;if(!e)return;let n=o("#sv-import-input");if(!n)return;let l=n.value.split(`
`).map(c=>ee(c)).filter(c=>c!==null);if(!l.length)return;let i=Q(e);l.forEach((c,d)=>{d<e.songs.length&&(i[d]=c)}),z(e,i),Y(o("#sv-setlist"),e.songs,i);let r=o("#sv-import-area");r&&(r.hidden=!0),n.value=""}),o("#sv-setlist").addEventListener("click",e=>{let n=e.target.closest("[data-action]");if(!n)return;let s=parseInt(n.dataset.idx,10),l=t._currentStream;if(!l)return;let i=Q(l);if(n.dataset.action==="seek"){if(i[s]!=null&&b?.seekTo){b.seekTo(i[s],!0);try{b.playVideo()}catch{}}}else if(n.dataset.action==="set-ts"){let r=b?.getCurrentTime?.();r!=null&&(i[s]=Math.floor(r),z(l,i),Y(o("#sv-setlist"),l.songs,i))}else n.dataset.action==="del-ts"&&(delete i[s],z(l,i),Y(o("#sv-setlist"),l.songs,i))})}function It(t,e=0){if(!t?.url)return;let n=M(t.url);if(!n){I(t.url);return}Ct(),Jt();let s=o("#yt-player-panel");if(s&&!s.hidden){s.hidden=!0;let A=o("#yt-player-container");A&&(A.innerHTML="")}D=null;let l=o("#stream-viewer");l._currentStream=t;let i=++U,r=o("#sv-bc-title");r&&(r.textContent=t.title||"\u914D\u4FE1");let c=o("#sv-stream-meta");c&&(c.textContent=`${w(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let d=o("#sv-yt-link");d&&(d.href=t.url);let m=o("#sv-song-count");m&&(m.textContent=`${t.songs.length}\u66F2`);let p=Q(t);Y(o("#sv-setlist"),t.songs,p),l.hidden=!1,document.body.style.overflow="hidden",o("#sv-close")?.focus(),b=null;let f=o("#sv-player-wrap");f.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let h=Math.floor(e);Xt(()=>{if(i!==U||l.hidden)return;f.innerHTML="";let A=document.createElement("div");f.appendChild(A);try{b=new window.YT.Player(A,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...h>0?{start:h}:{}},events:{onReady:et=>{if(h>5)try{et.target.seekTo(h,!0)}catch{}},onError:()=>{i===U&&(f.innerHTML=`<iframe src="https://www.youtube.com/embed/${u(n)}?autoplay=1&playsinline=1&rel=0${h>0?`&start=${h}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{f.innerHTML=`<iframe src="https://www.youtube.com/embed/${u(n)}?autoplay=1&playsinline=1&rel=0${h>0?`&start=${h}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function Z(){let t=o("#stream-viewer");if(!t)return;let e=t._currentStream,n=b?.getCurrentTime?.()??0,s=e?.url?M(e.url):"";++U,t.hidden=!0,t._currentStream=null,b=null;let l=o("#sv-player-wrap");l&&(l.innerHTML=""),document.body.style.overflow="",s&&e?.url&&(D=e,G=Math.floor(n),At=Date.now(),I(e.url,G,e.title||""))}function Ht(t){let e=B(t),n=o("#song-modal"),s=o("#song-modal-body"),l=o("#song-modal-title");if(!e||!n||!s||!l)return;st(e),l.textContent=e.title;let i=(e.streamRefs||[]).slice(0,8).map(d=>({...d,thumbnail:Qt(d.url),thumbnailFallback:Zt(d.url),thumbnailTiny:Wt(d.url),detailKey:$(d)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),c=q(e.key);s.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${u(e.key)}">${u(e.artist)}</button>
        <div class="song-detail-tags">${r.map(d=>`<span class="tag-badge">${u(d)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${w(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
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
            <span>${w(d.date)}</span>
            <strong>${u(d.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,n.hidden=!1,o("#song-modal-close")?.focus()}function ne(){let t=o("#song-modal"),e=o("#song-modal-close");if(!t||!e)return;let n=()=>{t.hidden=!0};e.addEventListener("click",n),t.addEventListener("click",s=>{s.target===t&&n();let l=s.target.closest("[data-inline-youtube]");if(l){s.preventDefault(),s.stopPropagation(),I(l.dataset.inlineYoutube);return}let i=s.target.closest("[data-detail-action]");if(i){if(s.stopPropagation(),i.dataset.detailAction==="close"&&n(),i.dataset.detailAction==="favorite"){let r=i.dataset.songkey;nt(r);let c=q(r);i.textContent=c?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",i.classList.toggle("primary",c),i.classList.toggle("ghost",!c)}if(i.dataset.detailAction==="timeline"){let r=B(i.dataset.songkey);n(),r&&jt(r)}if(i.dataset.detailAction==="stream"){let r=B(i.dataset.songkey),c=r?.streamRefs?.find(d=>$(d)===i.dataset.streamkey);n(),r&&c&&zt(r,c)}if(i.dataset.detailAction==="artist"){let r=B(i.dataset.songkey);n(),r&&Gt(r)}}}),t.addEventListener("error",s=>{let l=s.target.closest?.(".song-detail-thumb");if(!l)return;let i=l.dataset.fallback||l.dataset.tiny||"";if(i&&l.src!==i){l.src=i,l.dataset.fallback===i?delete l.dataset.fallback:delete l.dataset.tiny;return}l.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",s=>{s.key==="Escape"&&!t.hidden&&n()})}var Lt=!1;function ae(){if(!a.data)return;let{stats:t,streams:e=[]}=a.data,n=e[0]?.date||null,s=N(n),l=t.dataGeneratedDate||a.channelData?.dataGeneratedDate||null,i=N(l),r=t.channelLabel||t.channelId||"",c=r?`<span class="badge accent" style="margin-right:8px;">${u(r)}</span>`:"";o("#updated-info").innerHTML=c+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${w(l)||"\u2014"}</strong>`+(i!=null?` <span class="badge">${i}\u65E5\u524D</span>`:"");let d=o("#stats-grid");if(!Lt)d.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${T(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${T(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${T(t.streams)}<span class="stat-unit">\u56DE</span></div>
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
        <div class="stat-value">${wt(a.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,Lt=!0;else{let m=d.querySelectorAll(".stat-value");m.length>=6&&(m[0].textContent=T(t.total),m[0].innerHTML+='<span class="stat-unit">\u56DE</span>',m[1].textContent=T(t.repertoire),m[1].innerHTML+='<span class="stat-unit">\u66F2</span>',m[2].textContent=T(t.streams),m[2].innerHTML+='<span class="stat-unit">\u56DE</span>',m[3].textContent=t.avgPerStream,m[3].innerHTML+='<span class="stat-unit">\u66F2</span>',m[4].textContent=s??"\u2014",m[4].innerHTML+='<span class="stat-unit">\u65E5</span>',m[5].textContent=wt(a.data),m[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function wt(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,n=t.streams[0].date;return Math.floor((n-e)/864e5)+1}function ie(){o("#loading").hidden=!1,o("#error").hidden=!0}function se(){o("#loading").hidden=!0}function le(t){let e=o("#loading"),n=o("#error"),s=o("#err-detail");e&&(e.hidden=!0),n&&(n.hidden=!1),s&&(s.textContent=t&&t.message?t.message:String(t))}function oe(t){let e=document.getElementById("page-title");e&&(t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"))}function re(){let t=o("#help-modal"),e=o("#help-btn"),n=o("#help-close");if(!t||!e||!n)return;let s=()=>{t.hidden=!1,n.focus()},l=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",s),n.addEventListener("click",l),t.addEventListener("click",i=>{i.target===t&&l()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&l()})}function ce(){let t=o("#welcome-tip"),e=o("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let n=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(n,{timeout:5e3}):window.setTimeout(n,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function tt(){ie();try{let t=await ot();a.channelData=t,!x&&!t.fullLoaded&&$t();let e=O();a.songsQuery=e.q,a.activeTab=W(e.tab)?e.tab:"dashboard",St(a.activeTab);let n=e.channel||a.channel||_;if(k(n)||(n=_),!k(n)){let s=Object.keys(t.channels)[0];s&&(n=s)}if(!k(n))throw new Error("No channel data could be loaded");Ot(),se(),R(n,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0})}catch(t){console.error("[init] failed:",t),le(t)}}function de(){if(!a.channelData)return;let t=O();a.songsQuery=t.q,t.channel!==a.channel&&k(t.channel)&&R(t.channel,{resetSearch:!1,updateUrl:!1}),L(t.tab,{updateUrl:!1})}g(".tab-btn").forEach(t=>{t.addEventListener("click",()=>L(t.dataset.tab))});g(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||R(t.dataset.channel))})});window.addEventListener("popstate",de);g("[data-audience]").forEach(t=>{t.addEventListener("click",()=>qt(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),X(e.dataset.artistSearch||e.textContent||"");return}let n=t.target.closest("[data-stream-play]");if(n){t.preventDefault(),t.stopPropagation();let i=n.dataset.streamPlay,r=(a.data?.streams||[]).find(c=>$(c)===i);r?.url?It(r):n.dataset.inlineYoutube&&I(n.dataset.inlineYoutube);return}let s=t.target.closest("[data-inline-youtube]");if(s){t.preventDefault(),t.stopPropagation(),I(s.dataset.inlineYoutube);return}if(it(t.target))return;let l=t.target.closest("[data-songkey]");l&&Ht(l.dataset.songkey)});o("#retry-btn").addEventListener("click",tt);o("#reload-btn").addEventListener("click",tt);re();xt();Ct();ne();Nt();Vt();ce();ft(t=>{t.type==="song"?Ht(t.song.key):t.type==="artist"?X(t.artist):t.type==="stream"&&(a.timelineFocus=$(t.stream),a.timelineFilter=null,a.timelineLimit=9999,L("timeline"),o("#panel-timeline")?.scrollIntoView({behavior:"smooth",block:"start"}))});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,n=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!n&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),vt();return}if(t.key==="t"&&!n&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),ct();return}if(t.key==="?"&&!n&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let l=o("#help-modal");l&&l.hidden&&(l.hidden=!1,o("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let l=o("#stream-viewer");if(l&&!l.hidden){t.preventDefault(),Z();return}if(ht()){t.preventDefault(),C();return}let i=o("#song-modal");if(i&&!i.hidden)return;let r=o("#help-modal");if(r&&!r.hidden){r.hidden=!0,o("#help-btn")?.focus();return}let c=o("#songs-search");c&&document.activeElement===c&&c.value&&(t.preventDefault(),c.value="",c.dispatchEvent(new Event("input",{bubbles:!0})))}});ut(()=>{a.data&&(V(),(a.activeTab==="dashboard"||a.activeTab==="analytics")&&E())});function ue(){tt()}ue();
