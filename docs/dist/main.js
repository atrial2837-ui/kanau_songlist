import{b as bt,c as yt,d as gt,i as wt,k as nt,l as K}from"./chunk-JZUMKDUB.js";import{a as kt,b as Lt,e as at,f as $t}from"./chunk-SIADDXVK.js";import{a as N}from"./chunk-MKJIXTK4.js";import{I as et,J as L,L as x,P as _,Q as ht,a as mt,b as tt,c as ft,e as o,f as l,g as k,i as v}from"./chunk-CUWLARYO.js";var y=-1,S=[],st=null;function Et(t){st=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",n=>{n.target===e&&F()});let a=document.getElementById("omni-input");a.addEventListener("input",()=>Mt(a.value)),a.addEventListener("keydown",Zt),document.getElementById("omni-listbox").addEventListener("click",n=>{let i=n.target.closest("[data-omni-idx]");i&&Pt(Number(i.dataset.omniIdx))})}function xt(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,y=-1,S=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Mt("")}function F(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),y=-1}function _t(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Zt(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),y=Math.min(y+1,e.length-1),St(e)):t.key==="ArrowUp"?(t.preventDefault(),y=Math.max(y-1,-1),St(e)):t.key==="Enter"?(t.preventDefault(),y>=0&&S[y]&&Pt(y)):t.key==="Escape"&&(t.preventDefault(),F())}function St(t){t.forEach((e,a)=>{e.classList.toggle("is-active",a===y),e.setAttribute("aria-selected",String(a===y))}),y>=0&&t[y]?.scrollIntoView({block:"nearest"})}function Pt(t){let e=S[t];!e||!st||(F(),st(e))}function Mt(t){let e=document.getElementById("omni-listbox");if(!e)return;y=-1,S=[];let a=o.data?.songs||[],n=o.data?.streams||[],i=t.trim().toLowerCase(),s="",r=0;if(!o.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!i){let c=a.slice(0,8);if(c.length){s+=j("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let p of c)S.push({type:"song",song:p}),s+=Tt(p,r++,"")}e.innerHTML=s||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let d=a.filter(c=>C(c.title).includes(i)||C(c.artist).includes(i)).slice(0,8);if(d.length){s+=j("\u{1F3B5} \u66F2");for(let c of d)S.push({type:"song",song:c}),s+=Tt(c,r++,i)}let u=new Set,m=[];for(let c of a)if(C(c.artist).includes(i)&&!u.has(c.artist)&&(u.add(c.artist),m.push(c.artist),m.length>=4))break;if(m.length){s+=j("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let c of m){let p=a.filter(f=>f.artist===c).length;S.push({type:"artist",artist:c}),s+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${O(v(c),i)}</span>
          <span class="omni-item-meta">${p}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(o.channelData?.fullLoaded&&n.length){let c=n.filter(p=>C(p.title).includes(i)||p.songs?.some(f=>C(f.title).includes(i)||C(f.artist).includes(i))).slice(0,5);if(c.length){s+=j("\u{1F4C5} \u914D\u4FE1\u67A0");for(let p of c)S.push({type:"stream",stream:p}),s+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${O(v(p.title||"\u914D\u4FE1"),i)}</span>
            <span class="omni-item-meta">${L(p.date)} \xB7 ${p.songs?.length||0}\u66F2</span>
          </div>
        </div>`}}s||(s=`<div class="omni-empty">\u300C${v(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=s}function j(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function Tt(t,e,a){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${O(v(t.title),a)}</span>
      <span class="omni-item-meta">${O(v(t.artist||""),a)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function C(t){return String(t||"").toLowerCase()}function O(t,e){if(!e)return t;let n=t.toLowerCase().indexOf(e);return n<0?t:t.slice(0,n)+'<mark class="hl">'+t.slice(n,n+e.length)+"</mark>"+t.slice(n+e.length)}Lt();ft();var Ht={dashboard:()=>import("./chunk-H2XK2RYU.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-EKPBADNT.js").then(t=>t.renderRanking),songs:()=>import("./chunk-JPW5Q7KE.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-AFGC52MQ.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-BR4FH5YN.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-OWMXHPOY.js").then(t=>t.renderPlaylists)},G=new Map,Ct=0,I=null;function J(t){return Object.prototype.hasOwnProperty.call(Ht,t)}async function Wt(t){G.has(t)||G.set(t,Ht[t]());try{return await G.get(t)}catch(e){throw G.delete(t),e}}function Nt(t){return["dashboard","timeline","analytics"].includes(t)}function Xt(t,e={}){let a=l(`#panel-${t}`);if(!a)return;let n={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};a.innerHTML=`
    <div class="state-card">
      <div class="msg">${v(n[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function te(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function ee(t){if(o.channelData?.fullLoaded)return;o.channelData=t;let e=T(o.channel)?o.channel:N,a=T(e);a&&(o.data=a),!Nt(o.activeTab)&&o.data&&M(o.activeTab,{autoLoad:!1})}function ae(t){o.channelData=t,o.channelData.fullLoaded=!0;let e=T(o.channel)?o.channel:N;X(e,{resetSearch:!1,updateUrl:!1,render:!1}),M(o.activeTab,{autoLoad:!1})}function Ft(){return I=yt({meta:o.channelData,onSongsReady:ee}).then(ae).finally(()=>{I=null}),I}async function ne(){o.channelData?.fullLoaded||(I||Ft(),await I)}async function M(t=o.activeTab,e={}){if(t!=="playlists"&&(!o.data||!J(t))||!J(t))return;let a=o.channelData?.partialLoaded||o.channelData?.fullLoaded,n=o.channelData?.fullLoaded;if(t==="playlists"?!1:Nt(t)?!n:!a)if(e.autoLoad){te(t);try{await ne()}catch(r){console.error("[data] full load failed",r);let d=l(`#panel-${t}`);d&&(d.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${v(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${v(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,d.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{M(t,{autoLoad:!0})}));return}}else{Xt(t,{initial:e.initial});return}let s=++Ct;try{let r=await Wt(t);if(s!==Ct||t!==o.activeTab||!o.data)return;t==="songs"&&wt(o.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let d=l(`#panel-${t}`);d&&(d.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${v(r?.message||String(r))}</div>
        </div>
      `)}}function $(t,e={}){J(t)||(t="dashboard"),o.activeTab=t,Bt(t),e.updateUrl!==!1&&K({tab:t}),M(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Bt(t){k(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),k(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function T(t){return o.channelData?t==="all"?o.channelData.combined:o.channelData.channels[t]||null:null}function X(t,e={}){let a=T(t);a&&(o.channel=t,Me(t),o.data=a,o.timelineFilter=null,o.timelineFocus=null,o.timelineLimit=12,o.songsLimit=100,e.resetSearch!==!1&&(o.songsQuery="",o.songsGenre="all"),at(),k("#channel-switch [data-channel]").forEach(n=>n.classList.toggle("active",n.dataset.channel===t)),ot(),e.updateUrl!==!1&&K({tab:o.activeTab,channel:t,q:o.songsQuery}),Ee(),e.render!==!1&&M(o.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function se(t,e={}){o.audience=t==="singer"?"singer":"listener",o.singerMode=o.audience==="singer",o.singerMode||(o.singerPreset="all"),k(".audience-switch [data-audience]").forEach(a=>{a.classList.toggle("active",a.dataset.audience===o.audience)}),document.body.dataset.audience=o.audience,ot(),o.audience==="singer"?(o.songsLimit=100,$("songs",{autoLoad:e.autoLoad!==!1})):o.data&&M(o.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function ot(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",a=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${a}`}function ie(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),a=l("#topbar-actions");if(!t||!e||!a)return;let n=s=>{e.checked=s,a.classList.toggle("is-open",s),t.setAttribute("aria-expanded",String(s))},i=()=>{n(!1),t.focus()};t.addEventListener("click",s=>{s.stopPropagation(),requestAnimationFrame(()=>n(e.checked))}),t.addEventListener("keydown",s=>{s.key!=="Enter"&&s.key!==" "||(s.preventDefault(),n(!e.checked))}),e.addEventListener("change",()=>{n(e.checked)}),document.addEventListener("click",s=>{a.classList.contains("is-open")&&(s.target.closest("#topbar-actions")||s.target.closest("#mobile-menu-toggle")||s.target.closest("#mobile-menu-state")||i())}),document.addEventListener("keydown",s=>{s.key==="Escape"&&i()}),a.addEventListener("click",s=>{s.stopPropagation()}),ot()}function le(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),a=!1,n=420,i=()=>{!e||e.src||(e.src=e.dataset.src||"")},s=()=>{a=!1;let d=window.scrollY>n;d&&i(),t.hidden=!d,t.classList.toggle("is-visible",d),t.setAttribute("aria-hidden",String(!d)),t.tabIndex=d?0:-1},r=()=>{a||(a=!0,requestAnimationFrame(s))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),s()}function oe(){if(o.channelData)for(let t of k("#channel-switch [data-channel]")){let e=t.dataset.channel,a=e==="all"?!!o.channelData.combined:!!(o.channelData.channels&&o.channelData.channels[e]);t.disabled=!a,a?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function re({key:t,title:e,artist:a}){o.timelineFilter&&o.timelineFilter.key===t&&o.activeTab==="timeline"?o.timelineFilter=null:o.timelineFilter={key:t,title:e,artist:a},o.timelineFocus=null,o.timelineLimit=12,$("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function ce(t,e){o.timelineFilter={key:t.key,title:t.title,artist:t.artist},o.timelineFocus=x(e),o.timelineLimit=9999,$("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function de(t){rt(t.artist||"")}function rt(t){let e=String(t||"").replace(/"/g,"");o.songsQuery=e?`artist:"${e}"`:"",o.songsLimit=100,K({tab:"songs",q:o.songsQuery}),$("songs",{updateUrl:!1})}function z(t){return(o.data?.songs||[]).find(e=>e.key===t)||null}function A(t){let e=String(t||""),a=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let n of a){let i=e.match(n);if(i)return i[1]}return""}function ct(t){let e=A(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function ue(t){let e=A(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function pe(t){let e=A(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function qt(){Q&&(clearInterval(Q),Q=null)}function ve(){qt(),Q=setInterval(()=>{if(h)try{let t=h.getDuration?.()||0,e=h.getCurrentTime?.()||0,a=t>0?Math.min(e/t*100,100):0,n=l("#yt-mini-progress-fill");n&&(n.style.width=`${a}%`);let s=h.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,r=l("#yt-mini-play");r&&r.setAttribute("data-playing",s?"1":"0")}catch{}},400)}function dt(){if(qt(),h){try{h.destroy()}catch{}h=null}let t=l("#yt-player-container");t&&(t.innerHTML="")}function me(){if(h?.getCurrentTime)try{return h.getCurrentTime()}catch{}return Math.max(0,lt+(Date.now()-jt)/1e3)}function V(t,e=0,a=""){let n=A(t);if(!n)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}Ut(),Rt();let i=l("#yt-player-container"),s=l("#yt-player-panel");if(!i||!s)return;dt();let r=l("#yt-mini-title");r&&(r.textContent=a||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let d=l("#yt-mini-hint");d&&(d.textContent=P?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),s.classList.toggle("has-stream",!!P),s.hidden=!1,Kt(()=>{let u=document.createElement("div");i.appendChild(u);try{h=new window.YT.Player(u,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:m=>{if(e>5)try{m.target.seekTo(e,!0)}catch{}ve()},onStateChange:m=>{let c=m.data===window.YT.PlayerState.PLAYING,p=l("#yt-mini-play");p&&p.setAttribute("data-playing",c?"1":"0")}}})}catch{let c=e>0?`&start=${Math.floor(e)}`:"";i.innerHTML=`<iframe src="https://www.youtube.com/embed/${n}?autoplay=1&playsinline=1${c}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function Rt(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
    <div class="yt-mini-video-wrap">
      <div id="yt-player-container"></div>
    </div>
    <div class="yt-mini-progress-wrap">
      <div class="yt-mini-progress-bar" id="yt-mini-progress-bar" title="\u30AF\u30EA\u30C3\u30AF\u3067\u30B7\u30FC\u30AF">
        <div class="yt-mini-progress-fill" id="yt-mini-progress-fill"></div>
      </div>
    </div>
    <div class="yt-mini-bar">
      <button class="yt-mini-play-btn" id="yt-mini-play" type="button" data-playing="0" aria-label="\u518D\u751F/\u505C\u6B62"></button>
      <button class="yt-mini-info yt-mini-restore" id="yt-mini-restore" type="button" aria-label="\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B">
        <span class="yt-mini-stream-title" id="yt-mini-title">\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F</span>
        <span class="yt-mini-hint" id="yt-mini-hint"></span>
      </button>
      <button id="yt-player-close" type="button" class="yt-mini-close-btn" aria-label="\u9589\u3058\u308B">\u2715</button>
    </div>
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,dt(),P=null}),l("#yt-mini-play").addEventListener("click",()=>{if(h)try{h.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?h.pauseVideo():h.playVideo()}catch{}}),l("#yt-mini-restore").addEventListener("click",()=>{P&&U(P,me())}),l("#yt-mini-progress-bar").addEventListener("click",e=>{if(!h)return;let n=e.currentTarget.getBoundingClientRect(),i=Math.max(0,Math.min(1,(e.clientX-n.left)/n.width));try{let s=h.getDuration?.()||0;s>0&&h.seekTo(i*s,!0)}catch{}})}var Yt=!1,Vt=[];window.onYouTubeIframeAPIReady=()=>{Yt=!0,Vt.splice(0).forEach(t=>t())};function Ut(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function Kt(t){if(Yt&&window.YT?.Player){t();return}Vt.push(t)}var w=null,B=0,P=null,lt=0,jt=0,E=!1,ut="timeline",D={},q=!1,h=null,Q=null;function fe(){ut=o.activeTab||"timeline",o.activeTab="player",k(".tab-btn").forEach(t=>t.classList.remove("active")),k(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function he(){$(ut||"timeline")}function be(){E=!0;let t=l("#stream-viewer");if(!t)return;document.body.appendChild(t),t.classList.add("sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let a=l("#sv-fullscreen-btn");a&&a.setAttribute("aria-pressed","true")}function R(t){let e=Math.floor(t),a=Math.floor(e/3600),n=Math.floor(e%3600/60),i=e%60;return a>0?`${a}:${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")}`:`${n}:${String(i).padStart(2,"0")}`}function Ot(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function Z(t){try{return JSON.parse(localStorage.getItem(Ot(t))||"null")||{}}catch{return{}}}function it(t,e){try{localStorage.setItem(Ot(t),JSON.stringify(e))}catch{}}function ye(t,e,a){let n=a[e],i=n!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${v(R(n))} \u306B\u79FB\u52D5">${v(R(n))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",r=(D[e]||[]).map(m=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${m.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${v(R(m.timeSeconds))}">${v(R(m.timeSeconds))}</button>`).join(""),d=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,u=`<div class="sv-cts-row">${r}${d}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${v(t.title)}</span>
      <span class="sv-song-artist">${v(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${i}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${u}
  </div>`}async function ge(t){if(D={},!t?.channel||t?.index==null)return;try{let n=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,i=await fetch(n);if(!i.ok)return;let s=await i.json();for(let r of s.items||[])D[r.songIndex]||(D[r.songIndex]=[]),D[r.songIndex].push({timeSeconds:r.timeSeconds,note:r.note??null})}catch{}let e=l("#stream-viewer");if(!e||e._currentStream!==t)return;let a=l("#sv-setlist");a&&Y(a,t.songs,Z(t))}function we(t,e,a){l("#sv-cts-modal")?.remove();let n=w?.getCurrentTime?.()??0,i=R(Math.floor(n)),s=document.createElement("div");s.id="sv-cts-modal",s.className="sv-cts-modal-overlay",s.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-cts-modal-song">${v(a)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${v(i)}" placeholder="0:00" autocomplete="off">
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
  `,document.body.appendChild(s);let r=()=>s.remove();s.querySelector(".sv-cts-modal-close").addEventListener("click",r),s.querySelector(".sv-cts-modal-cancel").addEventListener("click",r),s.addEventListener("click",d=>{d.target===s&&r()}),s.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let d=s.querySelector("#sv-cts-ts-input").value.trim(),u=s.querySelector("#sv-cts-note-input").value.trim()||null,m=zt(d),c=s.querySelector("#sv-cts-status");if(m===null){c.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",c.className="sv-cts-modal-status error",c.hidden=!1;return}let p=s.querySelector("#sv-cts-submit");p.disabled=!0,p.textContent="\u9001\u4FE1\u4E2D\u2026";try{let f=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:m,submitterNote:u})});if(f.ok)c.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",c.className="sv-cts-modal-status success",c.hidden=!1,p.hidden=!0,s.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let g=await f.json().catch(()=>({}));c.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${g.error||f.statusText}`,c.className="sv-cts-modal-status error",c.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}catch(f){c.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.message}`,c.className="sv-cts-modal-status error",c.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>s.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function d(u){u.key==="Escape"&&(r(),document.removeEventListener("keydown",d))})}function Gt(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function ke(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function Le(t,e){let a=Gt(),n=a.find(i=>String(i.id)===String(t));return n?(n.streams||(n.streams=[]),n.streams.includes(e)||(n.streams.push(e),ke(a)),!0):!1}function $e(){let t=o.data?.streams||[],a=l("#stream-viewer")?._currentStream;if(!a)return;let n=t.findIndex(i=>i.channel===a.channel&&i.index===a.index);n<0||n>=t.length-1||U(t[n+1])}function Dt(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${v(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let a=ct(t.url),n=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${v(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${v(n)}</div>
    ${a?`<img class="sv-bp-nav-thumb" src="${v(a)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${v(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${L(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function Se(t){let e=l("#sv-below-player");if(!e)return;let a=o.data?.streams||[],n=a.findIndex(c=>c.channel===t.channel&&c.index===t.index),i=n>=0&&n<a.length-1?a[n+1]:null,s=n>0?a[n-1]:null,r=new Set(t.songs.map(c=>c.title)),d=a.filter((c,p)=>p!==n).map(c=>{let p=c.songs.filter(f=>r.has(f.title));return{stream:c,overlap:p.length,sharedSongs:p.slice(0,3).map(f=>f.title)}}).filter(c=>c.overlap>0).sort((c,p)=>p.overlap-c.overlap).slice(0,8),u=Gt(),m=x(t);e.innerHTML=`
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
          ${i?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${v(i.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${Dt(i,"older")}
          ${Dt(s,"newer")}
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
            <span class="sv-bp-stat-val">${L(t.date)}</span>
            <span class="sv-bp-stat-label">\u914D\u4FE1\u65E5</span>
          </div>
        </div>
      </div>

      <!-- \u95A2\u9023\u914D\u4FE1 -->
      ${d.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u95A2\u9023\u914D\u4FE1 <span class="sv-bp-sh-sub">\uFF08\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${d.map(c=>{let p=ct(c.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${v(c.stream.channel)}" data-bp-index="${c.stream.index}">
              ${p?`<img class="sv-bp-rel-thumb" src="${v(p)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${v(c.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${L(c.stream.date)}</div>
                <div class="sv-bp-rel-songs">${c.sharedSongs.map(f=>v(f)).join("\u3001")}</div>
              </div>
              <div class="sv-bp-rel-badge">${c.overlap}\u66F2</div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      <!-- \u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0 -->
      ${u.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0</div>
        <div class="sv-bp-pl-list" id="sv-bp-pl-list">
          ${u.map(c=>{let p=(c.streams||[]).includes(m);return`<button class="sv-bp-pl-btn${p?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${v(String(c.id))}"${p?" disabled":""}>
              <span class="sv-bp-pl-name">${v(c.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${p?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=c=>{let p=c.target.closest("#sv-ap-check");if(!p)return;q=p.checked;let f=e.querySelector(".sv-bp-ap-switch");f&&f.classList.toggle("sv-bp-ap-switch--on",q)},e.onclick=c=>{let p=c.target.closest("[data-bp-action]");if(!p)return;let f=p.dataset.bpAction;if(f==="open-stream"){let g=p.dataset.bpChannel,b=parseInt(p.dataset.bpIndex,10),H=(o.data?.streams||[]).find(vt=>vt.channel===g&&vt.index===b);H&&U(H)}else if(f==="add-pl"){let g=p.dataset.bpPlId;if(Le(g,m)){p.classList.add("sv-bp-pl-btn--added"),p.disabled=!0;let b=p.querySelector(".sv-bp-pl-status");b&&(b.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}}}function Y(t,e,a){t.innerHTML=e.map((n,i)=>ye(n,i,a)).join("")}function zt(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Qt(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
  `,t.appendChild(e),l("#sv-close").addEventListener("click",W),l("#sv-fullscreen-btn").addEventListener("click",be),e.querySelectorAll("[data-bc-tab]").forEach(a=>{a.addEventListener("click",()=>{W(),$(a.dataset.bcTab)})}),l("#sv-import-toggle").addEventListener("click",()=>{let a=l("#sv-import-area");a&&(a.hidden=!a.hidden,a.hidden||l("#sv-import-input")?.focus())}),l("#sv-import-cancel").addEventListener("click",()=>{let a=l("#sv-import-area");a&&(a.hidden=!0);let n=l("#sv-import-input");n&&(n.value="")}),l("#sv-import-apply").addEventListener("click",()=>{let a=e._currentStream;if(!a)return;let n=l("#sv-import-input");if(!n)return;let s=n.value.split(`
`).map(u=>zt(u)).filter(u=>u!==null);if(!s.length)return;let r=Z(a);s.forEach((u,m)=>{m<a.songs.length&&(r[m]=u)}),it(a,r),Y(l("#sv-setlist"),a.songs,r);let d=l("#sv-import-area");d&&(d.hidden=!0),n.value=""}),l("#sv-setlist").addEventListener("click",a=>{let n=a.target.closest("[data-action]");if(!n)return;let i=parseInt(n.dataset.idx,10),s=e._currentStream;if(!s)return;let r=Z(s);if(n.dataset.action==="seek"){if(r[i]!=null&&w?.seekTo){w.seekTo(r[i],!0);try{w.playVideo()}catch{}}}else if(n.dataset.action==="set-ts"){let d=w?.getCurrentTime?.();d!=null&&(r[i]=Math.floor(d),it(s,r),Y(l("#sv-setlist"),s.songs,r))}else if(n.dataset.action==="del-ts")delete r[i],it(s,r),Y(l("#sv-setlist"),s.songs,r);else if(n.dataset.action==="cts-seek"){let d=Number(n.dataset.ctsSeconds);if(!isNaN(d)&&w?.seekTo){w.seekTo(d,!0);try{w.playVideo()}catch{}}}else if(n.dataset.action==="cts-propose"){let d=s.songs[i];we(s,i,d?.title||`\u66F2 ${i+1}`)}})}function U(t,e=0){if(!t?.url)return;let a=A(t.url);if(!a){V(t.url);return}Qt(),Ut();let n=l("#yt-player-panel");if(n&&!n.hidden&&(n.hidden=!0,dt()),P=null,E){E=!1;let g=l("#stream-viewer");if(g){g.classList.remove("sv-fullscreen");let b=l("#panel-player");b&&b.appendChild(g)}document.body.style.overflow=""}E=!1,fe();let i=l("#stream-viewer");i.classList.remove("sv-fullscreen"),i._currentStream=t;let s=++B,r=l("#sv-bc-title");r&&(r.textContent=t.title||"\u914D\u4FE1");let d=l("#sv-stream-meta");d&&(d.textContent=`${L(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let u=l("#sv-yt-link");u&&(u.href=t.url);let m=l("#sv-song-count");m&&(m.textContent=`${t.songs.length}\u66F2`),D={};let c=Z(t);Y(l("#sv-setlist"),t.songs,c),ge(t),Se(t),i.hidden=!1,document.body.style.overflow="",setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),w=null;let p=l("#sv-player-wrap");p.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let f=Math.floor(e);Kt(()=>{if(s!==B||i.hidden)return;p.innerHTML="";let g=document.createElement("div");p.appendChild(g);try{w=new window.YT.Player(g,{videoId:a,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...f>0?{start:f}:{}},events:{onReady:b=>{try{b.target.setPlaybackQuality("hd1080")}catch{}try{b.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(f>5)try{b.target.seekTo(f,!0)}catch{}},onStateChange:b=>{s===B&&b.data===window.YT.PlayerState.ENDED&&q&&$e()},onError:()=>{s===B&&(p.innerHTML=`<iframe src="https://www.youtube.com/embed/${v(a)}?autoplay=1&playsinline=1&rel=0${f>0?`&start=${f}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{p.innerHTML=`<iframe src="https://www.youtube.com/embed/${v(a)}?autoplay=1&playsinline=1&rel=0${f>0?`&start=${f}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function W(){let t=l("#stream-viewer");if(!t)return;if(E){E=!1,t.classList.remove("sv-fullscreen"),document.body.style.overflow="";let s=l("#panel-player");s&&s.appendChild(t);let r=l("#sv-close");r&&(r.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let d=l("#sv-fullscreen-btn");d&&d.setAttribute("aria-pressed","false");return}let e=t._currentStream,a=w?.getCurrentTime?.()??0,n=e?.url?A(e.url):"";++B,t.hidden=!0,t._currentStream=null,w=null;let i=l("#sv-player-wrap");i&&(i.innerHTML=""),document.body.style.overflow="",he(),n&&e?.url&&(P=e,lt=Math.floor(a),jt=Date.now(),V(e.url,lt,e.title||""))}window.__openStreamViewer=U;function Jt(t){let e=z(t),a=l("#song-modal"),n=l("#song-modal-body"),i=l("#song-modal-title");if(!e||!a||!n||!i)return;bt(e),i.textContent=e.title;let s=(e.streamRefs||[]).slice(0,8).map(u=>({...u,thumbnail:ct(u.url),thumbnailFallback:ue(u.url),thumbnailTiny:pe(u.url),detailKey:x(u)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),d=tt(e.key);n.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${v(e.key)}">${v(e.artist)}</button>
        <div class="song-detail-tags">${r.map(u=>`<span class="tag-badge">${v(u)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${L(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${d?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${v(e.key)}">${d?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${v(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${s.length?s.map(u=>`
        <div class="song-detail-stream">
          ${u.thumbnail&&u.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${v(u.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${v(u.thumbnail)}" data-fallback="${v(u.thumbnailFallback)}" data-tiny="${v(u.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${v(u.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${v(e.key)}" data-streamkey="${v(u.detailKey)}">
            <span>${L(u.date)}</span>
            <strong>${v(u.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,a.hidden=!1,l("#song-modal-close")?.focus()}function Te(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let a=()=>{t.hidden=!0};e.addEventListener("click",a),t.addEventListener("click",n=>{n.target===t&&a();let i=n.target.closest("[data-inline-youtube]");if(i){n.preventDefault(),n.stopPropagation(),V(i.dataset.inlineYoutube);return}let s=n.target.closest("[data-detail-action]");if(s){if(n.stopPropagation(),s.dataset.detailAction==="close"&&a(),s.dataset.detailAction==="favorite"){let r=s.dataset.songkey;mt(r);let d=tt(r);s.textContent=d?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",s.classList.toggle("primary",d),s.classList.toggle("ghost",!d)}if(s.dataset.detailAction==="timeline"){let r=z(s.dataset.songkey);a(),r&&re(r)}if(s.dataset.detailAction==="stream"){let r=z(s.dataset.songkey),d=r?.streamRefs?.find(u=>x(u)===s.dataset.streamkey);a(),r&&d&&ce(r,d)}if(s.dataset.detailAction==="artist"){let r=z(s.dataset.songkey);a(),r&&de(r)}}}),t.addEventListener("error",n=>{let i=n.target.closest?.(".song-detail-thumb");if(!i)return;let s=i.dataset.fallback||i.dataset.tiny||"";if(s&&i.src!==s){i.src=s,i.dataset.fallback===s?delete i.dataset.fallback:delete i.dataset.tiny;return}i.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&a()})}var It=!1;function Ee(){if(!o.data)return;let{stats:t,streams:e=[]}=o.data,a=e[0]?.date||null,n=et(a),i=t.dataGeneratedDate||o.channelData?.dataGeneratedDate||null,s=et(i),r=t.channelLabel||t.channelId||"",d=r?`<span class="badge accent" style="margin-right:8px;">${v(r)}</span>`:"";l("#updated-info").innerHTML=d+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${L(i)||"\u2014"}</strong>`+(s!=null?` <span class="badge">${s}\u65E5\u524D</span>`:"");let u=l("#stats-grid");if(!It)u.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${_(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${_(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${_(t.streams)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">1\u67A0\u5E73\u5747</div>
        <div class="stat-value">${t.avgPerStream}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card accent">
        <div class="stat-label">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</div>
        <div class="stat-value">${n??"\u2014"}<span class="stat-unit">\u65E5</span></div>
      </div>
      <div class="stat-card gold">
        <div class="stat-label">\u6D3B\u52D5\u671F\u9593</div>
        <div class="stat-value">${At(o.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,It=!0;else{let m=u.querySelectorAll(".stat-value");m.length>=6&&(m[0].textContent=_(t.total),m[0].innerHTML+='<span class="stat-unit">\u56DE</span>',m[1].textContent=_(t.repertoire),m[1].innerHTML+='<span class="stat-unit">\u66F2</span>',m[2].textContent=_(t.streams),m[2].innerHTML+='<span class="stat-unit">\u56DE</span>',m[3].textContent=t.avgPerStream,m[3].innerHTML+='<span class="stat-unit">\u66F2</span>',m[4].textContent=n??"\u2014",m[4].innerHTML+='<span class="stat-unit">\u65E5</span>',m[5].textContent=At(o.data),m[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function At(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,a=t.streams[0].date;return Math.floor((a-e)/864e5)+1}function xe(){l("#loading").hidden=!1,l("#error").hidden=!0}function _e(){l("#loading").hidden=!0}function Pe(t){let e=l("#loading"),a=l("#error"),n=l("#err-detail");e&&(e.hidden=!0),a&&(a.hidden=!1),n&&(n.textContent=t&&t.message?t.message:String(t))}function Me(t){let e=document.getElementById("page-title");e&&(t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"))}function Ce(){let t=l("#help-modal"),e=l("#help-btn"),a=l("#help-close");if(!t||!e||!a)return;let n=()=>{t.hidden=!1,a.focus()},i=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",n),a.addEventListener("click",i),t.addEventListener("click",s=>{s.target===t&&i()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&!t.hidden&&i()})}function De(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let a=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(a,{timeout:5e3}):window.setTimeout(a,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function pt(){xe();try{let t=await gt();o.channelData=t,!I&&!t.fullLoaded&&Ft();let e=nt();o.songsQuery=e.q,o.activeTab=J(e.tab)?e.tab:"dashboard",Bt(o.activeTab);let a=e.channel||o.channel||N;if(T(a)||(a=N),!T(a)){let n=Object.keys(t.channels)[0];n&&(a=n)}if(!T(a))throw new Error("No channel data could be loaded");oe(),_e(),X(a,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0})}catch(t){console.error("[init] failed:",t),Pe(t)}}function Ie(){if(!o.channelData)return;let t=nt();o.songsQuery=t.q,t.channel!==o.channel&&T(t.channel)&&X(t.channel,{resetSearch:!1,updateUrl:!1}),$(t.tab,{updateUrl:!1})}k(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,a=l("#stream-viewer");if(e!=="player"&&a&&!a.hidden&&!E){ut=e,W();return}$(e)})});k(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||X(t.dataset.channel))})});window.addEventListener("popstate",Ie);k("[data-audience]").forEach(t=>{t.addEventListener("click",()=>se(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),rt(e.dataset.artistSearch||e.textContent||"");return}let a=t.target.closest("[data-playlist-add]");if(a){t.preventDefault(),t.stopPropagation();let r=a.dataset.playlistAdd,d=a.dataset.streamTitle||"";import("./chunk-OWMXHPOY.js").then(u=>u.showAddToPlaylistModal(r,d));return}let n=t.target.closest("[data-stream-play]");if(n){t.preventDefault(),t.stopPropagation();let r=n.dataset.streamPlay,d=(o.data?.streams||[]).find(u=>x(u)===r);d?.url?U(d):n.dataset.inlineYoutube&&V(n.dataset.inlineYoutube);return}let i=t.target.closest("[data-inline-youtube]");if(i){t.preventDefault(),t.stopPropagation(),V(i.dataset.inlineYoutube);return}if(ht(t.target))return;let s=t.target.closest("[data-songkey]");s&&Jt(s.dataset.songkey)});l("#retry-btn").addEventListener("click",pt);l("#reload-btn").addEventListener("click",pt);Ce();Rt();Qt();Te();ie();le();De();Et(t=>{t.type==="song"?Jt(t.song.key):t.type==="artist"?rt(t.artist):t.type==="stream"&&(o.timelineFocus=x(t.stream),o.timelineFilter=null,o.timelineLimit=9999,$("timeline"),l("#panel-timeline")?.scrollIntoView({behavior:"smooth",block:"start"}))});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,a=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!a&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),xt();return}if(t.key==="t"&&!a&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),kt();return}if(t.key==="?"&&!a&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let i=l("#help-modal");i&&i.hidden&&(i.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let i=l("#stream-viewer"),s=!!l("#panel-player.active");if(i&&!i.hidden&&(E||s)){t.preventDefault(),W();return}if(_t()){t.preventDefault(),F();return}let r=l("#song-modal");if(r&&!r.hidden)return;let d=l("#help-modal");if(d&&!d.hidden){d.hidden=!0,l("#help-btn")?.focus();return}let u=l("#songs-search");u&&document.activeElement===u&&u.value&&(t.preventDefault(),u.value="",u.dispatchEvent(new Event("input",{bubbles:!0})))}});$t(()=>{o.data&&(at(),(o.activeTab==="dashboard"||o.activeTab==="analytics")&&M())});function Ae(){pt()}Ae();
