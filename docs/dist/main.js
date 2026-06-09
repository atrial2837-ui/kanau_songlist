import{b as ut,c as mt,d as pt,i as ft,k as W,l as N}from"./chunk-JZUMKDUB.js";import{a as vt,b as ht,e as J,f as yt}from"./chunk-SIADDXVK.js";import{a as I}from"./chunk-MKJIXTK4.js";import{I as Z,J as S,L as M,P as $,Q as dt,a as rt,b as G,c as ct,e as i,f as l,g as b,i as m}from"./chunk-CUWLARYO.js";var h=-1,w=[],X=null;function kt(t){X=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",s=>{s.target===e&&H()});let n=document.getElementById("omni-input");n.addEventListener("input",()=>Et(n.value)),n.addEventListener("keydown",Rt),document.getElementById("omni-listbox").addEventListener("click",s=>{let o=s.target.closest("[data-omni-idx]");o&&Tt(Number(o.dataset.omniIdx))})}function wt(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,h=-1,w=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Et("")}function H(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),h=-1}function Lt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Rt(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),h=Math.min(h+1,e.length-1),gt(e)):t.key==="ArrowUp"?(t.preventDefault(),h=Math.max(h-1,-1),gt(e)):t.key==="Enter"?(t.preventDefault(),h>=0&&w[h]&&Tt(h)):t.key==="Escape"&&(t.preventDefault(),H())}function gt(t){t.forEach((e,n)=>{e.classList.toggle("is-active",n===h),e.setAttribute("aria-selected",String(n===h))}),h>=0&&t[h]?.scrollIntoView({block:"nearest"})}function Tt(t){let e=w[t];!e||!X||(H(),X(e))}function Et(t){let e=document.getElementById("omni-listbox");if(!e)return;h=-1,w=[];let n=i.data?.songs||[],s=i.data?.streams||[],o=t.trim().toLowerCase(),a="",r=0;if(!i.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!o){let u=n.slice(0,8);if(u.length){a+=R("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let f of u)w.push({type:"song",song:f}),a+=bt(f,r++,"")}e.innerHTML=a||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let c=n.filter(u=>D(u.title).includes(o)||D(u.artist).includes(o)).slice(0,8);if(c.length){a+=R("\u{1F3B5} \u66F2");for(let u of c)w.push({type:"song",song:u}),a+=bt(u,r++,o)}let d=new Set,p=[];for(let u of n)if(D(u.artist).includes(o)&&!d.has(u.artist)&&(d.add(u.artist),p.push(u.artist),p.length>=4))break;if(p.length){a+=R("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let u of p){let f=n.filter(v=>v.artist===u).length;w.push({type:"artist",artist:u}),a+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${U(m(u),o)}</span>
          <span class="omni-item-meta">${f}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(i.channelData?.fullLoaded&&s.length){let u=s.filter(f=>D(f.title).includes(o)||f.songs?.some(v=>D(v.title).includes(o)||D(v.artist).includes(o))).slice(0,5);if(u.length){a+=R("\u{1F4C5} \u914D\u4FE1\u67A0");for(let f of u)w.push({type:"stream",stream:f}),a+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${U(m(f.title||"\u914D\u4FE1"),o)}</span>
            <span class="omni-item-meta">${S(f.date)} \xB7 ${f.songs?.length||0}\u66F2</span>
          </div>
        </div>`}}a||(a=`<div class="omni-empty">\u300C${m(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=a}function R(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function bt(t,e,n){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${U(m(t.title),n)}</span>
      <span class="omni-item-meta">${U(m(t.artist||""),n)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function D(t){return String(t||"").toLowerCase()}function U(t,e){if(!e)return t;let s=t.toLowerCase().indexOf(e);return s<0?t:t.slice(0,s)+'<mark class="hl">'+t.slice(s,s+e.length)+"</mark>"+t.slice(s+e.length)}ht();ct();var Mt={dashboard:()=>import("./chunk-H2XK2RYU.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-EKPBADNT.js").then(t=>t.renderRanking),songs:()=>import("./chunk-JPW5Q7KE.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-AFGC52MQ.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-BR4FH5YN.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-SF3ICXDU.js").then(t=>t.renderPlaylists)},K=new Map,St=0,C=null;function j(t){return Object.prototype.hasOwnProperty.call(Mt,t)}async function Ut(t){K.has(t)||K.set(t,Mt[t]());try{return await K.get(t)}catch(e){throw K.delete(t),e}}function Dt(t){return["dashboard","timeline","analytics"].includes(t)}function Kt(t,e={}){let n=l(`#panel-${t}`);if(!n)return;let s={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};n.innerHTML=`
    <div class="state-card">
      <div class="msg">${m(s[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function Vt(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function Yt(t){if(i.channelData?.fullLoaded)return;i.channelData=t;let e=L(i.channel)?i.channel:I,n=L(e);n&&(i.data=n),!Dt(i.activeTab)&&i.data&&x(i.activeTab,{autoLoad:!1})}function jt(t){i.channelData=t,i.channelData.fullLoaded=!0;let e=L(i.channel)?i.channel:I;z(e,{resetSearch:!1,updateUrl:!1,render:!1}),x(i.activeTab,{autoLoad:!1})}function _t(){return C=mt({meta:i.channelData,onSongsReady:Yt}).then(jt).finally(()=>{C=null}),C}async function Ot(){i.channelData?.fullLoaded||(C||_t(),await C)}async function x(t=i.activeTab,e={}){if(t!=="playlists"&&(!i.data||!j(t))||!j(t))return;let n=i.channelData?.partialLoaded||i.channelData?.fullLoaded,s=i.channelData?.fullLoaded;if(t==="playlists"?!1:Dt(t)?!s:!n)if(e.autoLoad){Vt(t);try{await Ot()}catch(r){console.error("[data] full load failed",r);let c=l(`#panel-${t}`);c&&(c.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${m(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${m(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,c.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{x(t,{autoLoad:!0})}));return}}else{Kt(t,{initial:e.initial});return}let a=++St;try{let r=await Ut(t);if(a!==St||t!==i.activeTab||!i.data)return;t==="songs"&&ft(i.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let c=l(`#panel-${t}`);c&&(c.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${m(r?.message||String(r))}</div>
        </div>
      `)}}function k(t,e={}){j(t)||(t="dashboard"),i.activeTab=t,Ct(t),e.updateUrl!==!1&&N({tab:t}),x(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Ct(t){b(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),b(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function L(t){return i.channelData?t==="all"?i.channelData.combined:i.channelData.channels[t]||null:null}function z(t,e={}){let n=L(t);n&&(i.channel=t,he(t),i.data=n,i.timelineFilter=null,i.timelineFocus=null,i.timelineLimit=12,i.songsLimit=100,e.resetSearch!==!1&&(i.songsQuery="",i.songsGenre="all"),J(),b("#channel-switch [data-channel]").forEach(s=>s.classList.toggle("active",s.dataset.channel===t)),nt(),e.updateUrl!==!1&&N({tab:i.activeTab,channel:t,q:i.songsQuery}),me(),e.render!==!1&&x(i.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function Qt(t,e={}){i.audience=t==="singer"?"singer":"listener",i.singerMode=i.audience==="singer",i.singerMode||(i.singerPreset="all"),b(".audience-switch [data-audience]").forEach(n=>{n.classList.toggle("active",n.dataset.audience===i.audience)}),document.body.dataset.audience=i.audience,nt(),i.audience==="singer"?(i.songsLimit=100,k("songs",{autoLoad:e.autoLoad!==!1})):i.data&&x(i.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function nt(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",n=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${n}`}function zt(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),n=l("#topbar-actions");if(!t||!e||!n)return;let s=a=>{e.checked=a,n.classList.toggle("is-open",a),t.setAttribute("aria-expanded",String(a))},o=()=>{s(!1),t.focus()};t.addEventListener("click",a=>{a.stopPropagation(),requestAnimationFrame(()=>s(e.checked))}),t.addEventListener("keydown",a=>{a.key!=="Enter"&&a.key!==" "||(a.preventDefault(),s(!e.checked))}),e.addEventListener("change",()=>{s(e.checked)}),document.addEventListener("click",a=>{n.classList.contains("is-open")&&(a.target.closest("#topbar-actions")||a.target.closest("#mobile-menu-toggle")||a.target.closest("#mobile-menu-state")||o())}),document.addEventListener("keydown",a=>{a.key==="Escape"&&o()}),n.addEventListener("click",a=>{a.stopPropagation()}),nt()}function Gt(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),n=!1,s=420,o=()=>{!e||e.src||(e.src=e.dataset.src||"")},a=()=>{n=!1;let c=window.scrollY>s;c&&o(),t.hidden=!c,t.classList.toggle("is-visible",c),t.setAttribute("aria-hidden",String(!c)),t.tabIndex=c?0:-1},r=()=>{n||(n=!0,requestAnimationFrame(a))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),a()}function Zt(){if(i.channelData)for(let t of b("#channel-switch [data-channel]")){let e=t.dataset.channel,n=e==="all"?!!i.channelData.combined:!!(i.channelData.channels&&i.channelData.channels[e]);t.disabled=!n,n?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function Jt({key:t,title:e,artist:n}){i.timelineFilter&&i.timelineFilter.key===t&&i.activeTab==="timeline"?i.timelineFilter=null:i.timelineFilter={key:t,title:e,artist:n},i.timelineFocus=null,i.timelineLimit=12,k("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Wt(t,e){i.timelineFilter={key:t.key,title:t.title,artist:t.artist},i.timelineFocus=M(e),i.timelineLimit=9999,k("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Xt(t){at(t.artist||"")}function at(t){let e=String(t||"").replace(/"/g,"");i.songsQuery=e?`artist:"${e}"`:"",i.songsLimit=100,N({tab:"songs",q:i.songsQuery}),k("songs",{updateUrl:!1})}function V(t){return(i.data?.songs||[]).find(e=>e.key===t)||null}function P(t){let e=String(t||""),n=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let s of n){let o=e.match(s);if(o)return o[1]}return""}function te(t){let e=P(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function ee(t){let e=P(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function ne(t){let e=P(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function B(t,e=0,n=""){let s=P(t);if(!s)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}At();let o=l("#yt-player-container"),a=l("#yt-player-panel"),r=l("#yt-player-open");if(!o||!a)return;let c=e>0?`&start=${Math.floor(e)}`:"";o.innerHTML=`<iframe src="https://www.youtube.com/embed/${s}?autoplay=1&playsinline=1${c}&vq=hd1080" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`,r&&(r.href=String(t||""));let d=l("#yt-mini-title");d&&(d.textContent=n||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let p=l("#yt-mini-song");p&&(p.textContent=""),a.classList.toggle("has-stream",!!A),a.hidden=!1}function At(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0;let e=l("#yt-player-container");e&&(e.innerHTML=""),A=null}),l("#yt-mini-expand").addEventListener("click",()=>{if(!A)return;let e=(Date.now()-Ht)/1e3,n=Math.max(0,et+e);it(A,n)})}var Pt=!1,It=[];window.onYouTubeIframeAPIReady=()=>{Pt=!0,It.splice(0).forEach(t=>t())};function ae(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function se(t){if(Pt&&window.YT?.Player){t();return}It.push(t)}var y=null,Y=0,A=null,et=0,Ht=0,T=!1,st="timeline",_={};function ie(){st=i.activeTab||"timeline",i.activeTab="player",b(".tab-btn").forEach(t=>t.classList.remove("active")),b(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function le(){k(st||"timeline")}function oe(){T=!0;let t=l("#stream-viewer");if(!t)return;document.body.appendChild(t),t.classList.add("sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let n=l("#sv-fullscreen-btn");n&&n.setAttribute("aria-pressed","true")}function F(t){let e=Math.floor(t),n=Math.floor(e/3600),s=Math.floor(e%3600/60),o=e%60;return n>0?`${n}:${String(s).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${s}:${String(o).padStart(2,"0")}`}function Ft(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function O(t){try{return JSON.parse(localStorage.getItem(Ft(t))||"null")||{}}catch{return{}}}function tt(t,e){try{localStorage.setItem(Ft(t),JSON.stringify(e))}catch{}}function re(t,e,n){let s=n[e],o=s!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${m(F(s))} \u306B\u79FB\u52D5">${m(F(s))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",r=(_[e]||[]).map(p=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${p.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${m(F(p.timeSeconds))}">${m(F(p.timeSeconds))}</button>`).join(""),c=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,d=`<div class="sv-cts-row">${r}${c}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${m(t.title)}</span>
      <span class="sv-song-artist">${m(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${o}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${d}
  </div>`}async function ce(t){if(_={},!t?.channel||t?.index==null)return;try{let s=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,o=await fetch(s);if(!o.ok)return;let a=await o.json();for(let r of a.items||[])_[r.songIndex]||(_[r.songIndex]=[]),_[r.songIndex].push({timeSeconds:r.timeSeconds,note:r.note??null})}catch{}let e=l("#stream-viewer");if(!e||e._currentStream!==t)return;let n=l("#sv-setlist");n&&q(n,t.songs,O(t))}function de(t,e,n){l("#sv-cts-modal")?.remove();let s=y?.getCurrentTime?.()??0,o=F(Math.floor(s)),a=document.createElement("div");a.id="sv-cts-modal",a.className="sv-cts-modal-overlay",a.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-cts-modal-song">${m(n)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${m(o)}" placeholder="0:00" autocomplete="off">
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
  `,document.body.appendChild(a);let r=()=>a.remove();a.querySelector(".sv-cts-modal-close").addEventListener("click",r),a.querySelector(".sv-cts-modal-cancel").addEventListener("click",r),a.addEventListener("click",c=>{c.target===a&&r()}),a.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let c=a.querySelector("#sv-cts-ts-input").value.trim(),d=a.querySelector("#sv-cts-note-input").value.trim()||null,p=qt(c),u=a.querySelector("#sv-cts-status");if(p===null){u.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",u.className="sv-cts-modal-status error",u.hidden=!1;return}let f=a.querySelector("#sv-cts-submit");f.disabled=!0,f.textContent="\u9001\u4FE1\u4E2D\u2026";try{let v=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:p,submitterNote:d})});if(v.ok)u.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",u.className="sv-cts-modal-status success",u.hidden=!1,f.hidden=!0,a.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let g=await v.json().catch(()=>({}));u.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${g.error||v.statusText}`,u.className="sv-cts-modal-status error",u.hidden=!1,f.disabled=!1,f.textContent="\u63D0\u6848\u3059\u308B"}}catch(v){u.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${v.message}`,u.className="sv-cts-modal-status error",u.hidden=!1,f.disabled=!1,f.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>a.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function c(d){d.key==="Escape"&&(r(),document.removeEventListener("keydown",c))})}function q(t,e,n){t.innerHTML=e.map((s,o)=>re(s,o,n)).join("")}function qt(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Bt(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
  `,t.appendChild(e),l("#sv-close").addEventListener("click",Q),l("#sv-fullscreen-btn").addEventListener("click",oe),e.querySelectorAll("[data-bc-tab]").forEach(n=>{n.addEventListener("click",()=>{Q(),k(n.dataset.bcTab)})}),l("#sv-import-toggle").addEventListener("click",()=>{let n=l("#sv-import-area");n&&(n.hidden=!n.hidden,n.hidden||l("#sv-import-input")?.focus())}),l("#sv-import-cancel").addEventListener("click",()=>{let n=l("#sv-import-area");n&&(n.hidden=!0);let s=l("#sv-import-input");s&&(s.value="")}),l("#sv-import-apply").addEventListener("click",()=>{let n=e._currentStream;if(!n)return;let s=l("#sv-import-input");if(!s)return;let a=s.value.split(`
`).map(d=>qt(d)).filter(d=>d!==null);if(!a.length)return;let r=O(n);a.forEach((d,p)=>{p<n.songs.length&&(r[p]=d)}),tt(n,r),q(l("#sv-setlist"),n.songs,r);let c=l("#sv-import-area");c&&(c.hidden=!0),s.value=""}),l("#sv-setlist").addEventListener("click",n=>{let s=n.target.closest("[data-action]");if(!s)return;let o=parseInt(s.dataset.idx,10),a=e._currentStream;if(!a)return;let r=O(a);if(s.dataset.action==="seek"){if(r[o]!=null&&y?.seekTo){y.seekTo(r[o],!0);try{y.playVideo()}catch{}}}else if(s.dataset.action==="set-ts"){let c=y?.getCurrentTime?.();c!=null&&(r[o]=Math.floor(c),tt(a,r),q(l("#sv-setlist"),a.songs,r))}else if(s.dataset.action==="del-ts")delete r[o],tt(a,r),q(l("#sv-setlist"),a.songs,r);else if(s.dataset.action==="cts-seek"){let c=Number(s.dataset.ctsSeconds);if(!isNaN(c)&&y?.seekTo){y.seekTo(c,!0);try{y.playVideo()}catch{}}}else if(s.dataset.action==="cts-propose"){let c=a.songs[o];de(a,o,c?.title||`\u66F2 ${o+1}`)}})}function it(t,e=0){if(!t?.url)return;let n=P(t.url);if(!n){B(t.url);return}Bt(),ae();let s=l("#yt-player-panel");if(s&&!s.hidden){s.hidden=!0;let g=l("#yt-player-container");g&&(g.innerHTML="")}if(A=null,T){T=!1;let g=l("#stream-viewer");if(g){g.classList.remove("sv-fullscreen");let E=l("#panel-player");E&&E.appendChild(g)}document.body.style.overflow=""}T=!1,ie();let o=l("#stream-viewer");o.classList.remove("sv-fullscreen"),o._currentStream=t;let a=++Y,r=l("#sv-bc-title");r&&(r.textContent=t.title||"\u914D\u4FE1");let c=l("#sv-stream-meta");c&&(c.textContent=`${S(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let d=l("#sv-yt-link");d&&(d.href=t.url);let p=l("#sv-song-count");p&&(p.textContent=`${t.songs.length}\u66F2`),_={};let u=O(t);q(l("#sv-setlist"),t.songs,u),ce(t),o.hidden=!1,document.body.style.overflow="",setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),y=null;let f=l("#sv-player-wrap");f.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let v=Math.floor(e);se(()=>{if(a!==Y||o.hidden)return;f.innerHTML="";let g=document.createElement("div");f.appendChild(g);try{y=new window.YT.Player(g,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...v>0?{start:v}:{}},events:{onReady:E=>{try{E.target.setPlaybackQuality("hd1080")}catch{}try{E.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(v>5)try{E.target.seekTo(v,!0)}catch{}},onError:()=>{a===Y&&(f.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(n)}?autoplay=1&playsinline=1&rel=0${v>0?`&start=${v}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{f.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(n)}?autoplay=1&playsinline=1&rel=0${v>0?`&start=${v}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function Q(){let t=l("#stream-viewer");if(!t)return;if(T){T=!1,t.classList.remove("sv-fullscreen"),document.body.style.overflow="";let a=l("#panel-player");a&&a.appendChild(t);let r=l("#sv-close");r&&(r.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let c=l("#sv-fullscreen-btn");c&&c.setAttribute("aria-pressed","false");return}let e=t._currentStream,n=y?.getCurrentTime?.()??0,s=e?.url?P(e.url):"";++Y,t.hidden=!0,t._currentStream=null,y=null;let o=l("#sv-player-wrap");o&&(o.innerHTML=""),document.body.style.overflow="",le(),s&&e?.url&&(A=e,et=Math.floor(n),Ht=Date.now(),B(e.url,et,e.title||""))}window.__openStreamViewer=it;function Nt(t){let e=V(t),n=l("#song-modal"),s=l("#song-modal-body"),o=l("#song-modal-title");if(!e||!n||!s||!o)return;ut(e),o.textContent=e.title;let a=(e.streamRefs||[]).slice(0,8).map(d=>({...d,thumbnail:te(d.url),thumbnailFallback:ee(d.url),thumbnailTiny:ne(d.url),detailKey:M(d)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),c=G(e.key);s.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${m(e.key)}">${m(e.artist)}</button>
        <div class="song-detail-tags">${r.map(d=>`<span class="tag-badge">${m(d)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${S(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${c?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${m(e.key)}">${c?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${m(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${a.length?a.map(d=>`
        <div class="song-detail-stream">
          ${d.thumbnail&&d.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${m(d.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${m(d.thumbnail)}" data-fallback="${m(d.thumbnailFallback)}" data-tiny="${m(d.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${m(d.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${m(e.key)}" data-streamkey="${m(d.detailKey)}">
            <span>${S(d.date)}</span>
            <strong>${m(d.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,n.hidden=!1,l("#song-modal-close")?.focus()}function ue(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let n=()=>{t.hidden=!0};e.addEventListener("click",n),t.addEventListener("click",s=>{s.target===t&&n();let o=s.target.closest("[data-inline-youtube]");if(o){s.preventDefault(),s.stopPropagation(),B(o.dataset.inlineYoutube);return}let a=s.target.closest("[data-detail-action]");if(a){if(s.stopPropagation(),a.dataset.detailAction==="close"&&n(),a.dataset.detailAction==="favorite"){let r=a.dataset.songkey;rt(r);let c=G(r);a.textContent=c?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",a.classList.toggle("primary",c),a.classList.toggle("ghost",!c)}if(a.dataset.detailAction==="timeline"){let r=V(a.dataset.songkey);n(),r&&Jt(r)}if(a.dataset.detailAction==="stream"){let r=V(a.dataset.songkey),c=r?.streamRefs?.find(d=>M(d)===a.dataset.streamkey);n(),r&&c&&Wt(r,c)}if(a.dataset.detailAction==="artist"){let r=V(a.dataset.songkey);n(),r&&Xt(r)}}}),t.addEventListener("error",s=>{let o=s.target.closest?.(".song-detail-thumb");if(!o)return;let a=o.dataset.fallback||o.dataset.tiny||"";if(a&&o.src!==a){o.src=a,o.dataset.fallback===a?delete o.dataset.fallback:delete o.dataset.tiny;return}o.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",s=>{s.key==="Escape"&&!t.hidden&&n()})}var $t=!1;function me(){if(!i.data)return;let{stats:t,streams:e=[]}=i.data,n=e[0]?.date||null,s=Z(n),o=t.dataGeneratedDate||i.channelData?.dataGeneratedDate||null,a=Z(o),r=t.channelLabel||t.channelId||"",c=r?`<span class="badge accent" style="margin-right:8px;">${m(r)}</span>`:"";l("#updated-info").innerHTML=c+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${S(o)||"\u2014"}</strong>`+(a!=null?` <span class="badge">${a}\u65E5\u524D</span>`:"");let d=l("#stats-grid");if(!$t)d.innerHTML=`
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
        <div class="stat-value">${xt(i.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,$t=!0;else{let p=d.querySelectorAll(".stat-value");p.length>=6&&(p[0].textContent=$(t.total),p[0].innerHTML+='<span class="stat-unit">\u56DE</span>',p[1].textContent=$(t.repertoire),p[1].innerHTML+='<span class="stat-unit">\u66F2</span>',p[2].textContent=$(t.streams),p[2].innerHTML+='<span class="stat-unit">\u56DE</span>',p[3].textContent=t.avgPerStream,p[3].innerHTML+='<span class="stat-unit">\u66F2</span>',p[4].textContent=s??"\u2014",p[4].innerHTML+='<span class="stat-unit">\u65E5</span>',p[5].textContent=xt(i.data),p[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function xt(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,n=t.streams[0].date;return Math.floor((n-e)/864e5)+1}function pe(){l("#loading").hidden=!1,l("#error").hidden=!0}function fe(){l("#loading").hidden=!0}function ve(t){let e=l("#loading"),n=l("#error"),s=l("#err-detail");e&&(e.hidden=!0),n&&(n.hidden=!1),s&&(s.textContent=t&&t.message?t.message:String(t))}function he(t){let e=document.getElementById("page-title");e&&(t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"))}function ye(){let t=l("#help-modal"),e=l("#help-btn"),n=l("#help-close");if(!t||!e||!n)return;let s=()=>{t.hidden=!1,n.focus()},o=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",s),n.addEventListener("click",o),t.addEventListener("click",a=>{a.target===t&&o()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&o()})}function ge(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let n=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(n,{timeout:5e3}):window.setTimeout(n,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function lt(){pe();try{let t=await pt();i.channelData=t,!C&&!t.fullLoaded&&_t();let e=W();i.songsQuery=e.q,i.activeTab=j(e.tab)?e.tab:"dashboard",Ct(i.activeTab);let n=e.channel||i.channel||I;if(L(n)||(n=I),!L(n)){let s=Object.keys(t.channels)[0];s&&(n=s)}if(!L(n))throw new Error("No channel data could be loaded");Zt(),fe(),z(n,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0})}catch(t){console.error("[init] failed:",t),ve(t)}}function be(){if(!i.channelData)return;let t=W();i.songsQuery=t.q,t.channel!==i.channel&&L(t.channel)&&z(t.channel,{resetSearch:!1,updateUrl:!1}),k(t.tab,{updateUrl:!1})}b(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,n=l("#stream-viewer");if(e!=="player"&&n&&!n.hidden&&!T){st=e,Q();return}k(e)})});b(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||z(t.dataset.channel))})});window.addEventListener("popstate",be);b("[data-audience]").forEach(t=>{t.addEventListener("click",()=>Qt(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),at(e.dataset.artistSearch||e.textContent||"");return}let n=t.target.closest("[data-playlist-add]");if(n){t.preventDefault(),t.stopPropagation();let r=n.dataset.playlistAdd,c=n.dataset.streamTitle||"";import("./chunk-SF3ICXDU.js").then(d=>d.showAddToPlaylistModal(r,c));return}let s=t.target.closest("[data-stream-play]");if(s){t.preventDefault(),t.stopPropagation();let r=s.dataset.streamPlay,c=(i.data?.streams||[]).find(d=>M(d)===r);c?.url?it(c):s.dataset.inlineYoutube&&B(s.dataset.inlineYoutube);return}let o=t.target.closest("[data-inline-youtube]");if(o){t.preventDefault(),t.stopPropagation(),B(o.dataset.inlineYoutube);return}if(dt(t.target))return;let a=t.target.closest("[data-songkey]");a&&Nt(a.dataset.songkey)});l("#retry-btn").addEventListener("click",lt);l("#reload-btn").addEventListener("click",lt);ye();At();Bt();ue();zt();Gt();ge();kt(t=>{t.type==="song"?Nt(t.song.key):t.type==="artist"?at(t.artist):t.type==="stream"&&(i.timelineFocus=M(t.stream),i.timelineFilter=null,i.timelineLimit=9999,k("timeline"),l("#panel-timeline")?.scrollIntoView({behavior:"smooth",block:"start"}))});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,n=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!n&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),wt();return}if(t.key==="t"&&!n&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),vt();return}if(t.key==="?"&&!n&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let o=l("#help-modal");o&&o.hidden&&(o.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let o=l("#stream-viewer"),a=!!l("#panel-player.active");if(o&&!o.hidden&&(T||a)){t.preventDefault(),Q();return}if(Lt()){t.preventDefault(),H();return}let r=l("#song-modal");if(r&&!r.hidden)return;let c=l("#help-modal");if(c&&!c.hidden){c.hidden=!0,l("#help-btn")?.focus();return}let d=l("#songs-search");d&&document.activeElement===d&&d.value&&(t.preventDefault(),d.value="",d.dispatchEvent(new Event("input",{bubbles:!0})))}});yt(()=>{i.data&&(J(),(i.activeTab==="dashboard"||i.activeTab==="analytics")&&x())});function ke(){lt()}ke();
