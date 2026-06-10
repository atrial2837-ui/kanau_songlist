import{b as wt,c as kt,d as $t,i as Lt,k as ot,l as G}from"./chunk-DSNH5IKV.js";import{a as St,b as Tt,e as lt,f as Et}from"./chunk-SIADDXVK.js";import{a as R}from"./chunk-MKJIXTK4.js";import{I as it,J as L,L as D,Q as M,R as gt,a as bt,b as nt,c as yt,e as c,f as i,g as k,i as m}from"./chunk-6YA3HG5E.js";var g=-1,E=[],ct=null;function Ct(t){ct=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",s=>{s.target===e&&U()});let a=document.getElementById("omni-input");a.addEventListener("input",()=>Dt(a.value)),a.addEventListener("keydown",te),document.getElementById("omni-listbox").addEventListener("click",s=>{let l=s.target.closest("[data-omni-idx]");l&&It(Number(l.dataset.omniIdx))})}function Pt(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,g=-1,E=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Dt("")}function U(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),g=-1}function Mt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function te(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),g=Math.min(g+1,e.length-1),xt(e)):t.key==="ArrowUp"?(t.preventDefault(),g=Math.max(g-1,-1),xt(e)):t.key==="Enter"?(t.preventDefault(),g>=0&&E[g]&&It(g)):t.key==="Escape"&&(t.preventDefault(),U())}function xt(t){t.forEach((e,a)=>{e.classList.toggle("is-active",a===g),e.setAttribute("aria-selected",String(a===g))}),g>=0&&t[g]?.scrollIntoView({block:"nearest"})}function It(t){let e=E[t];!e||!ct||(U(),ct(e))}function Dt(t){let e=document.getElementById("omni-listbox");if(!e)return;g=-1,E=[];let a=c.data?.songs||[],s=c.data?.streams||[],l=t.trim().toLowerCase(),n="",o=0;if(!c.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!l){let r=a.slice(0,8);if(r.length){n+=z("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let v of r)E.push({type:"song",song:v}),n+=_t(v,o++,"")}e.innerHTML=n||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let p=a.filter(r=>A(r.title).includes(l)||A(r.artist).includes(l)).slice(0,8);if(p.length){n+=z("\u{1F3B5} \u66F2");for(let r of p)E.push({type:"song",song:r}),n+=_t(r,o++,l)}let d=new Set,u=[];for(let r of a)if(A(r.artist).includes(l)&&!d.has(r.artist)&&(d.add(r.artist),u.push(r.artist),u.length>=4))break;if(u.length){n+=z("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let r of u){let v=a.filter(f=>f.artist===r).length;E.push({type:"artist",artist:r}),n+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${o++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${Q(m(r),l)}</span>
          <span class="omni-item-meta">${v}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(s.length){let r=s.filter(v=>A(v.title).includes(l)||v.songs?.some(f=>A(f.title).includes(l)||A(f.artist).includes(l))).slice(0,5);if(r.length){n+=z("\u{1F4C5} \u914D\u4FE1\u67A0");for(let v of r){E.push({type:"stream",stream:v});let f=v.channel==="new"?"\u65B0ch":v.channel==="old"?"\u65E7ch":"";n+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${o++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${Q(m(v.title||"\u914D\u4FE1"),l)}</span>
            <span class="omni-item-meta">${L(v.date)}${f?" \xB7 "+f:""} \xB7 ${v.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}n||(n=`<div class="omni-empty">\u300C${m(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=n}function z(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function _t(t,e,a){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${Q(m(t.title),a)}</span>
      <span class="omni-item-meta">${Q(m(t.artist||""),a)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function A(t){return String(t||"").toLowerCase()}function Q(t,e){if(!e)return t;let s=t.toLowerCase().indexOf(e);return s<0?t:t.slice(0,s)+'<mark class="hl">'+t.slice(s,s+e.length)+"</mark>"+t.slice(s+e.length)}Tt();yt();var Bt={dashboard:()=>import("./chunk-5PGBMNJS.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-ESHPASDY.js").then(t=>t.renderRanking),songs:()=>import("./chunk-DKUP6YRL.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-5GZHGOGX.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-3D4M2QCZ.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-7K4D2JUF.js").then(t=>t.renderPlaylists)},J=new Map,At=0,N=null;function tt(t){return Object.prototype.hasOwnProperty.call(Bt,t)}async function ee(t){J.has(t)||J.set(t,Bt[t]());try{return await J.get(t)}catch(e){throw J.delete(t),e}}function Yt(t){return["dashboard","timeline","analytics"].includes(t)}function ae(t,e={}){let a=i(`#panel-${t}`);if(!a)return;let s={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};a.innerHTML=`
    <div class="state-card">
      <div class="msg">${m(s[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function se(t){let e=i(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function ne(t){if(c.channelData?.fullLoaded)return;c.channelData=t;let e=_(c.channel)?c.channel:R,a=_(e);a&&(c.data=a),!Yt(c.activeTab)&&c.data&&I(c.activeTab,{autoLoad:!1})}function ie(t){c.channelData=t,c.channelData.fullLoaded=!0;let e=_(c.channel)?c.channel:R;at(e,{resetSearch:!1,updateUrl:!1,render:!1}),I(c.activeTab,{autoLoad:!1})}function Rt(){return N=kt({meta:c.channelData,onSongsReady:ne}).then(ie).finally(()=>{N=null}),N}async function le(){c.channelData?.fullLoaded||(N||Rt(),await N)}async function I(t=c.activeTab,e={}){if(t!=="playlists"&&(!c.data||!tt(t))||!tt(t))return;let a=c.channelData?.partialLoaded||c.channelData?.fullLoaded,s=c.channelData?.fullLoaded;if(t==="playlists"?!1:Yt(t)?!s:!a)if(e.autoLoad){se(t);try{await le()}catch(o){console.error("[data] full load failed",o);let p=i(`#panel-${t}`);p&&(p.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${m(o?.message||String(o))}</div>
              <button class="btn primary" type="button" data-load-full-data="${m(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,p.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{I(t,{autoLoad:!0})}));return}}else{ae(t,{initial:e.initial});return}let n=++At;try{let o=await ee(t);if(n!==At||t!==c.activeTab||!c.data)return;t==="songs"&&Lt(c.data.songs||[]),o()}catch(o){console.error(`[${t}] render failed`,o);let p=i(`#panel-${t}`);p&&(p.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${m(o?.message||String(o))}</div>
        </div>
      `)}}function P(t,e={}){tt(t)||(t="dashboard");let a=i("#stream-viewer");if(t!=="player"&&a&&!a.hidden&&!T){st=t,et=e,O();return}c.activeTab=t,Ut(t),e.updateUrl!==!1&&G({tab:t}),I(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Ut(t){k(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),k(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function _(t){return c.channelData?t==="all"?c.channelData.combined:c.channelData.channels[t]||null:null}function at(t,e={}){let a=_(t);a&&(c.channel=t,Ae(t),c.data=a,c.timelineFilter=null,c.timelineFocus=null,c.timelineLimit=12,c.songsLimit=100,e.resetSearch!==!1&&(c.songsQuery="",c.songsGenre="all"),lt(),k("#channel-switch [data-channel]").forEach(s=>s.classList.toggle("active",s.dataset.channel===t)),ut(),e.updateUrl!==!1&&G({tab:c.activeTab,channel:t,q:c.songsQuery}),Pe(),e.render!==!1&&I(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function oe(t,e={}){c.audience=t==="singer"?"singer":"listener",c.singerMode=c.audience==="singer",c.singerMode||(c.singerPreset="all"),k(".audience-switch [data-audience]").forEach(a=>{a.classList.toggle("active",a.dataset.audience===c.audience)}),document.body.dataset.audience=c.audience,ut(),c.audience==="singer"?(c.songsLimit=100,P("songs",{autoLoad:e.autoLoad!==!1})):c.data&&I(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function ut(){let t=i("#mobile-menu-label");if(!t)return;let e=i("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",a=i("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${a}`}function ce(){let t=i("#mobile-menu-toggle"),e=i("#mobile-menu-state"),a=i("#topbar-actions");if(!t||!e||!a)return;let s=n=>{e.checked=n,a.classList.toggle("is-open",n),t.setAttribute("aria-expanded",String(n))},l=()=>{s(!1),t.focus()};t.addEventListener("click",n=>{n.stopPropagation(),requestAnimationFrame(()=>s(e.checked))}),t.addEventListener("keydown",n=>{n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),s(!e.checked))}),e.addEventListener("change",()=>{s(e.checked)}),document.addEventListener("click",n=>{a.classList.contains("is-open")&&(n.target.closest("#topbar-actions")||n.target.closest("#mobile-menu-toggle")||n.target.closest("#mobile-menu-state")||l())}),document.addEventListener("keydown",n=>{n.key==="Escape"&&l()}),a.addEventListener("click",n=>{n.stopPropagation()}),ut()}function re(){let t=i("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),a=!1,s=420,l=()=>{!e||e.src||(e.src=e.dataset.src||"")},n=()=>{a=!1;let p=window.scrollY>s;p&&l(),t.hidden=!p,t.classList.toggle("is-visible",p),t.setAttribute("aria-hidden",String(!p)),t.tabIndex=p?0:-1},o=()=>{a||(a=!0,requestAnimationFrame(n))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",o,{passive:!0}),n()}function de(){if(c.channelData)for(let t of k("#channel-switch [data-channel]")){let e=t.dataset.channel,a=e==="all"?!!c.channelData.combined:!!(c.channelData.channels&&c.channelData.channels[e]);t.disabled=!a,a?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function ue({key:t,title:e,artist:a}){c.timelineFilter&&c.timelineFilter.key===t&&c.activeTab==="timeline"?c.timelineFilter=null:c.timelineFilter={key:t,title:e,artist:a},c.timelineFocus=null,c.timelineLimit=12,P("timeline"),i("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function pe(t,e){c.timelineFilter={key:t.key,title:t.title,artist:t.artist},c.timelineFocus=D(e),c.timelineLimit=9999,P("timeline"),i("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function ve(t){pt(t.artist||"")}function pt(t){let e=String(t||"").replace(/"/g,"");c.songsQuery=e?`artist:"${e}"`:"",c.songsLimit=100,G({tab:"songs",q:c.songsQuery}),P("songs",{updateUrl:!1})}function X(t){return(c.data?.songs||[]).find(e=>e.key===t)||null}function q(t){let e=String(t||""),a=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let s of a){let l=e.match(s);if(l)return l[1]}return""}function vt(t){let e=q(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function me(t){let e=q(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function fe(t){let e=q(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function jt(){W&&(clearInterval(W),W=null)}function he(){jt(),W=setInterval(()=>{if(y)try{let t=y.getDuration?.()||0,e=y.getCurrentTime?.()||0,a=t>0?Math.min(e/t*100,100):0,s=i("#yt-mini-progress-fill");s&&(s.style.width=`${a}%`);let n=y.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,o=i("#yt-mini-play");o&&o.setAttribute("data-playing",n?"1":"0")}catch{}},400)}function mt(){if(jt(),y){try{y.destroy()}catch{}y=null}let t=i("#yt-player-container");t&&(t.innerHTML="")}function be(){if(y?.getCurrentTime)try{return y.getCurrentTime()}catch{}return Math.max(0,dt+(Date.now()-zt)/1e3)}function K(t,e=0,a=""){let s=q(t);if(!s)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}{let d=i("#stream-viewer");if(d&&!d.hidden&&!T){++H,d.hidden=!0,d._currentStream=null,w=null;let u=i("#sv-player-wrap");u&&(u.innerHTML=""),document.body.style.overflow="",C=null,et={},Qt()}}Ot(),Ft();let l=i("#yt-player-container"),n=i("#yt-player-panel");if(!l||!n)return;mt();let o=i("#yt-mini-title");o&&(o.textContent=a||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let p=i("#yt-mini-hint");p&&(p.textContent=C?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),n.classList.toggle("has-stream",!!C),n.hidden=!1,Gt(()=>{let d=document.createElement("div");l.appendChild(d);try{y=new window.YT.Player(d,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:u=>{if(e>5)try{u.target.seekTo(e,!0)}catch{}he()},onStateChange:u=>{let r=u.data===window.YT.PlayerState.PLAYING,v=i("#yt-mini-play");v&&v.setAttribute("data-playing",r?"1":"0")}}})}catch{let r=e>0?`&start=${Math.floor(e)}`:"";l.innerHTML=`<iframe src="https://www.youtube.com/embed/${s}?autoplay=1&playsinline=1${r}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function Ft(){if(i("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),i("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,mt(),C=null}),i("#yt-mini-play").addEventListener("click",()=>{if(y)try{y.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?y.pauseVideo():y.playVideo()}catch{}}),i("#yt-mini-restore").addEventListener("click",()=>{C&&B(C,be())}),i("#yt-mini-progress-bar").addEventListener("click",e=>{if(!y)return;let s=e.currentTarget.getBoundingClientRect(),l=Math.max(0,Math.min(1,(e.clientX-s.left)/s.width));try{let n=y.getDuration?.()||0;n>0&&y.seekTo(l*n,!0)}catch{}})}var Kt=!1,Vt=[];window.onYouTubeIframeAPIReady=()=>{Kt=!0,Vt.splice(0).forEach(t=>t())};function Ot(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function Gt(t){if(Kt&&window.YT?.Player){t();return}Vt.push(t)}var w=null,H=0,C=null,dt=0,zt=0,T=!1,st="timeline",et={},S={},j=!1,y=null,W=null;function ye(){st=c.activeTab||"timeline",c.activeTab="player",k(".tab-btn").forEach(t=>t.classList.remove("active")),k(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function Qt(){let t=et;et={},P(st||"timeline",t)}function ge(){T=!0;let t=i("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=i("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let a=i("#sv-fullscreen-btn");a&&a.setAttribute("aria-pressed","true")}function x(t){let e=Math.floor(t),a=Math.floor(e/3600),s=Math.floor(e%3600/60),l=e%60;return a>0?`${a}:${String(s).padStart(2,"0")}:${String(l).padStart(2,"0")}`:`${s}:${String(l).padStart(2,"0")}`}function Jt(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function V(t){try{return JSON.parse(localStorage.getItem(Jt(t))||"null")||{}}catch{return{}}}function rt(t,e){try{localStorage.setItem(Jt(t),JSON.stringify(e))}catch{}}function we(t,e,a){let s=a[e],l=s!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${m(x(s))} \u306B\u79FB\u52D5">${m(x(s))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",o=(S[e]||[]).map(u=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${u.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${m(x(u.timeSeconds))}">${m(x(u.timeSeconds))}</button>`).join(""),p=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,d=`<div class="sv-cts-row">${o}${p}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${m(t.title)}</span>
      <span class="sv-song-artist">${m(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${l}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${d}
  </div>`}async function ke(t){if(S={},!t?.channel||t?.index==null)return;try{let s=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,l=await fetch(s);if(!l.ok)return;let n=await l.json();for(let o of n.items||[])S[o.songIndex]||(S[o.songIndex]=[]),S[o.songIndex].push({timeSeconds:o.timeSeconds,note:o.note??null})}catch{}let e=i("#stream-viewer");if(!e||e._currentStream!==t)return;let a=i("#sv-setlist");a&&F(a,t.songs,V(t)),Le(t)}function $e(t,e,a){i("#sv-cts-modal")?.remove();let s=w?.getCurrentTime?.()??0,l=x(Math.floor(s)),n=document.createElement("div");n.id="sv-cts-modal",n.className="sv-cts-modal-overlay",n.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-cts-modal-song">${m(a)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${m(l)}" placeholder="0:00" autocomplete="off">
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
  `,document.body.appendChild(n);let o=()=>n.remove();n.querySelector(".sv-cts-modal-close").addEventListener("click",o),n.querySelector(".sv-cts-modal-cancel").addEventListener("click",o),n.addEventListener("click",p=>{p.target===n&&o()}),n.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let p=n.querySelector("#sv-cts-ts-input").value.trim(),d=n.querySelector("#sv-cts-note-input").value.trim()||null,u=ft(p),r=n.querySelector("#sv-cts-status");if(u===null){r.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",r.className="sv-cts-modal-status error",r.hidden=!1;return}let v=n.querySelector("#sv-cts-submit");v.disabled=!0,v.textContent="\u9001\u4FE1\u4E2D\u2026";try{let f=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:u,submitterNote:d})});if(f.ok)r.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",r.className="sv-cts-modal-status success",r.hidden=!1,v.hidden=!0,n.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let b=await f.json().catch(()=>({}));r.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${b.error||f.statusText}`,r.className="sv-cts-modal-status error",r.hidden=!1,v.disabled=!1,v.textContent="\u63D0\u6848\u3059\u308B"}}catch(f){r.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.message}`,r.className="sv-cts-modal-status error",r.hidden=!1,v.disabled=!1,v.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>n.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function p(d){d.key==="Escape"&&(o(),document.removeEventListener("keydown",p))})}function Le(t){let e=i("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let s=Object.keys(S).length>=t.songs.length;e.textContent=s?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function Se(t){i("#sv-bulk-modal")?.remove();let e=V(t),l=Object.keys(S).length>=t.songs.length,n=t.songs.map((d,u)=>{let r=e[u]!=null?x(e[u]):"",v=S[u]?.[0]?.timeSeconds!=null?x(S[u][0].timeSeconds):"",f=r||v;return`
      <div class="sv-bulk-row" data-idx="${u}">
        <span class="sv-bulk-num">${u+1}</span>
        <span class="sv-bulk-title" title="${m(d.title)}">${m(d.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${m(f)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${u}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${u}">\u23F1</button>
      </div>`}).join(""),o=document.createElement("div");o.id="sv-bulk-modal",o.className="sv-cts-modal-overlay",o.innerHTML=`
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="${l?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">${l?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-bulk-hint">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u5165\u529B\u3057\u3066\u4E00\u62EC\u7533\u8ACB\u3067\u304D\u307E\u3059\u3002\u7A7A\u6B04\u306E\u66F2\u306F\u30B9\u30AD\u30C3\u30D7\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-bulk-rows">${n}</div>
      <label class="sv-cts-modal-label" style="margin-top:10px">
        \u5171\u901A\u30B3\u30E1\u30F3\u30C8\uFF08\u4EFB\u610F\u30FB200\u6587\u5B57\u4EE5\u5185\uFF09
        <input class="sv-cts-modal-input" id="sv-bulk-note" type="text" maxlength="200" placeholder="">
      </label>
      <p class="sv-cts-modal-hint">\u63D0\u6848\u306F\u7BA1\u7406\u8005\u306E\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-cts-modal-btns">
        <button class="sv-cts-modal-submit" id="sv-bulk-submit" type="button">\u4E00\u62EC\u7533\u8ACB\u3059\u308B</button>
        <button class="sv-cts-modal-cancel" type="button">\u30AD\u30E3\u30F3\u30BB\u30EB</button>
      </div>
      <p class="sv-cts-modal-status" id="sv-bulk-status" hidden></p>
    </div>
  `,document.body.appendChild(o);let p=()=>o.remove();o.querySelector(".sv-cts-modal-close").addEventListener("click",p),o.querySelector(".sv-cts-modal-cancel").addEventListener("click",p),o.addEventListener("click",d=>{d.target===o&&p()}),o.querySelector(".sv-bulk-rows").addEventListener("click",d=>{let u=d.target.closest("[data-bulk-now]");if(!u)return;let r=parseInt(u.dataset.bulkNow,10),v=w?.getCurrentTime?.();if(v!=null){let f=o.querySelector(`[data-bulk-ts-idx="${r}"]`);f&&(f.value=x(Math.floor(v)))}}),o.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let d=o.querySelector("#sv-bulk-note").value.trim()||null,u=o.querySelector("#sv-bulk-status"),r=o.querySelector("#sv-bulk-submit"),v=[];if(o.querySelectorAll("[data-bulk-ts-idx]").forEach(h=>{let $=parseInt(h.dataset.bulkTsIdx,10),Y=ft(h.value.trim());Y!==null&&v.push({songIndex:$,timeSeconds:Y})}),!v.length){u.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",u.className="sv-cts-modal-status error",u.hidden=!1;return}r.disabled=!0,r.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${v.length})`,u.hidden=!0;let f=0,b=0;await Promise.all(v.map(async h=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:h.songIndex,timeSeconds:h.timeSeconds,submitterNote:d})})).ok?f++:b++}catch{b++}r.textContent=`\u7533\u8ACB\u4E2D\u2026 (${f+b}/${v.length})`})),b===0?(u.textContent=`${f}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,u.className="sv-cts-modal-status success",r.hidden=!0,o.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(u.textContent=`${f}\u4EF6\u6210\u529F / ${b}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,u.className="sv-cts-modal-status error",r.disabled=!1,r.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),u.hidden=!1}),document.addEventListener("keydown",function d(u){u.key==="Escape"&&(p(),document.removeEventListener("keydown",d))})}function Zt(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function Te(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function Ee(t,e){let a=Zt(),s=a.find(l=>String(l.id)===String(t));return s?(s.streams||(s.streams=[]),s.streams.includes(e)||(s.streams.push(e),Te(a)),!0):!1}function xe(){let t=c.data?.streams||[],a=i("#stream-viewer")?._currentStream;if(!a)return;let s=t.findIndex(l=>l.channel===a.channel&&l.index===a.index);s<0||s>=t.length-1||B(t[s+1])}function Ht(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${m(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let a=vt(t.url),s=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${m(s)}</div>
    ${a?`<img class="sv-bp-nav-thumb" src="${m(a)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${m(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${L(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function _e(t){let e=i("#sv-below-player");if(!e)return;let a=c.data?.streams||[],s=a.findIndex(r=>r.channel===t.channel&&r.index===t.index),l=s>=0&&s<a.length-1?a[s+1]:null,n=s>0?a[s-1]:null,o=new Set(t.songs.map(r=>r.title)),p=a.filter((r,v)=>v!==s).map(r=>{let v=r.songs.filter(f=>o.has(f.title));return{stream:r,overlap:v.length,sharedSongs:v.slice(0,3).map(f=>f.title)}}).filter(r=>r.overlap>0).sort((r,v)=>v.overlap-r.overlap).slice(0,8),d=Zt(),u=D(t);e.innerHTML=`
    <div class="sv-bp-wrap">

      <!-- \u9023\u7D9A\u518D\u751F + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${j?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${j?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          ${l?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${m(l.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${Ht(l,"older")}
          ${Ht(n,"newer")}
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
      ${p.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u95A2\u9023\u914D\u4FE1 <span class="sv-bp-sh-sub">\uFF08\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${p.map(r=>{let v=vt(r.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(r.stream.channel)}" data-bp-index="${r.stream.index}">
              ${v?`<img class="sv-bp-rel-thumb" src="${m(v)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${m(r.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${L(r.stream.date)}</div>
                <div class="sv-bp-rel-songs">${r.sharedSongs.map(f=>m(f)).join("\u3001")}</div>
              </div>
              <div class="sv-bp-rel-badge">${r.overlap}\u66F2</div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      <!-- \u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0 -->
      ${d.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0</div>
        <div class="sv-bp-pl-list" id="sv-bp-pl-list">
          ${d.map(r=>{let v=(r.streams||[]).includes(u);return`<button class="sv-bp-pl-btn${v?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${m(String(r.id))}"${v?" disabled":""}>
              <span class="sv-bp-pl-name">${m(r.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${v?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=r=>{let v=r.target.closest("#sv-ap-check");if(!v)return;j=v.checked;let f=e.querySelector(".sv-bp-ap-switch");f&&f.classList.toggle("sv-bp-ap-switch--on",j)},e.onclick=r=>{let v=r.target.closest("[data-bp-action]");if(!v)return;let f=v.dataset.bpAction;if(f==="open-stream"){let b=v.dataset.bpChannel,h=parseInt(v.dataset.bpIndex,10),$=(c.data?.streams||[]).find(Y=>Y.channel===b&&Y.index===h);$&&B($)}else if(f==="add-pl"){let b=v.dataset.bpPlId;if(Ee(b,u)){v.classList.add("sv-bp-pl-btn--added"),v.disabled=!0;let h=v.querySelector(".sv-bp-pl-status");h&&(h.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}}}function F(t,e,a){t.innerHTML=e.map((s,l)=>we(s,l,a)).join("")}function ft(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Xt(){if(i("#stream-viewer"))return;let t=i("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
              <button class="sv-cts-bulk-btn" id="sv-cts-bulk-btn" type="button" hidden>\u30BB\u30C8\u30EA\u767B\u9332</button>
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
  `,t.appendChild(e),i("#sv-close").addEventListener("click",O),i("#sv-fullscreen-btn").addEventListener("click",ge),e.querySelectorAll("[data-bc-tab]").forEach(a=>{a.addEventListener("click",()=>{O(),P(a.dataset.bcTab)})}),i("#sv-import-toggle").addEventListener("click",()=>{let a=i("#sv-import-area");a&&(a.hidden=!a.hidden,a.hidden||i("#sv-import-input")?.focus())}),i("#sv-import-cancel").addEventListener("click",()=>{let a=i("#sv-import-area");a&&(a.hidden=!0);let s=i("#sv-import-input");s&&(s.value="")}),i("#sv-import-apply").addEventListener("click",()=>{let a=e._currentStream;if(!a)return;let s=i("#sv-import-input");if(!s)return;let n=s.value.split(`
`).map(d=>ft(d)).filter(d=>d!==null);if(!n.length)return;let o=V(a);n.forEach((d,u)=>{u<a.songs.length&&(o[u]=d)}),rt(a,o),F(i("#sv-setlist"),a.songs,o);let p=i("#sv-import-area");p&&(p.hidden=!0),s.value=""}),i("#sv-cts-bulk-btn").addEventListener("click",()=>{let a=e._currentStream;a&&Se(a)}),i("#sv-setlist").addEventListener("click",a=>{let s=a.target.closest("[data-action]");if(!s)return;let l=parseInt(s.dataset.idx,10),n=e._currentStream;if(!n)return;let o=V(n);if(s.dataset.action==="seek"){if(o[l]!=null&&w?.seekTo){w.seekTo(o[l],!0);try{w.playVideo()}catch{}}}else if(s.dataset.action==="set-ts"){let p=w?.getCurrentTime?.();p!=null&&(o[l]=Math.floor(p),rt(n,o),F(i("#sv-setlist"),n.songs,o))}else if(s.dataset.action==="del-ts")delete o[l],rt(n,o),F(i("#sv-setlist"),n.songs,o);else if(s.dataset.action==="cts-seek"){let p=Number(s.dataset.ctsSeconds);if(!isNaN(p)&&w?.seekTo){w.seekTo(p,!0);try{w.playVideo()}catch{}}}else if(s.dataset.action==="cts-propose"){let p=n.songs[l];$e(n,l,p?.title||`\u66F2 ${l+1}`)}})}function B(t,e=0){if(!t?.url)return;let a=q(t.url);if(!a){K(t.url);return}Xt(),Ot();let s=i("#yt-player-panel");if(s&&!s.hidden&&(s.hidden=!0,mt()),C=null,T){T=!1;let b=i("#stream-viewer");b&&b.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}T=!1,ye();let l=i("#stream-viewer");l.classList.remove("sv-fullscreen"),l._currentStream=t;let n=++H,o=i("#sv-bc-title");o&&(o.textContent=t.title||"\u914D\u4FE1");let p=i("#sv-stream-meta");p&&(p.textContent=`${L(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let d=i("#sv-yt-link");d&&(d.href=t.url);let u=i("#sv-song-count");u&&(u.textContent=`${t.songs.length}\u66F2`),S={};let r=V(t);F(i("#sv-setlist"),t.songs,r),ke(t),_e(t),l.hidden=!1,document.body.style.overflow="",setTimeout(()=>{i("#sv-close")?.focus({preventScroll:!0})},50),w=null;let v=i("#sv-player-wrap");v.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let f=Math.floor(e);Gt(()=>{if(n!==H||l.hidden)return;v.innerHTML="";let b=document.createElement("div");v.appendChild(b);try{w=new window.YT.Player(b,{videoId:a,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...f>0?{start:f}:{}},events:{onReady:h=>{try{h.target.setPlaybackQuality("hd1080")}catch{}try{h.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(f>5)try{h.target.seekTo(f,!0)}catch{}},onStateChange:h=>{if(n===H){if(h.data===window.YT.PlayerState.PLAYING)try{h.target.setPlaybackQuality("hd1080")}catch{}h.data===window.YT.PlayerState.ENDED&&j&&xe()}},onError:()=>{n===H&&(v.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(a)}?autoplay=1&playsinline=1&rel=0${f>0?`&start=${f}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{v.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(a)}?autoplay=1&playsinline=1&rel=0${f>0?`&start=${f}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function O(){let t=i("#stream-viewer");if(!t)return;if(T){T=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let n=i("#sv-close");n&&(n.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let o=i("#sv-fullscreen-btn");o&&o.setAttribute("aria-pressed","false");return}let e=t._currentStream,a=w?.getCurrentTime?.()??0,s=e?.url?q(e.url):"";++H,t.hidden=!0,t._currentStream=null,w=null;let l=i("#sv-player-wrap");l&&(l.innerHTML=""),document.body.style.overflow="",Qt(),s&&e?.url&&(C=e,dt=Math.floor(a),zt=Date.now(),K(e.url,dt,e.title||""))}window.__openStreamViewer=B;function Wt(t){let e=X(t),a=i("#song-modal"),s=i("#song-modal-body"),l=i("#song-modal-title");if(!e||!a||!s||!l)return;wt(e),l.textContent=e.title;let n=(e.streamRefs||[]).slice(0,8).map(d=>({...d,thumbnail:vt(d.url),thumbnailFallback:me(d.url),thumbnailTiny:fe(d.url),detailKey:D(d)})),o=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),p=nt(e.key);s.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${m(e.key)}">${m(e.artist)}</button>
        <div class="song-detail-tags">${o.map(d=>`<span class="tag-badge">${m(d)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${L(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${p?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${m(e.key)}">${p?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${m(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${n.length?n.map(d=>`
        <div class="song-detail-stream">
          ${d.thumbnail&&d.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${m(d.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${m(d.thumbnail)}" data-fallback="${m(d.thumbnailFallback)}" data-tiny="${m(d.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${m(d.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${m(e.key)}" data-streamkey="${m(d.detailKey)}">
            <span>${L(d.date)}</span>
            <strong>${m(d.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,a.hidden=!1,i("#song-modal-close")?.focus()}function Ce(){let t=i("#song-modal"),e=i("#song-modal-close");if(!t||!e)return;let a=()=>{t.hidden=!0};e.addEventListener("click",a),t.addEventListener("click",s=>{s.target===t&&a();let l=s.target.closest("[data-inline-youtube]");if(l){s.preventDefault(),s.stopPropagation(),K(l.dataset.inlineYoutube);return}let n=s.target.closest("[data-detail-action]");if(n){if(s.stopPropagation(),n.dataset.detailAction==="close"&&a(),n.dataset.detailAction==="favorite"){let o=n.dataset.songkey;bt(o);let p=nt(o);n.textContent=p?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",n.classList.toggle("primary",p),n.classList.toggle("ghost",!p)}if(n.dataset.detailAction==="timeline"){let o=X(n.dataset.songkey);a(),o&&ue(o)}if(n.dataset.detailAction==="stream"){let o=X(n.dataset.songkey),p=o?.streamRefs?.find(d=>D(d)===n.dataset.streamkey);a(),o&&p&&pe(o,p)}if(n.dataset.detailAction==="artist"){let o=X(n.dataset.songkey);a(),o&&ve(o)}}}),t.addEventListener("error",s=>{let l=s.target.closest?.(".song-detail-thumb");if(!l)return;let n=l.dataset.fallback||l.dataset.tiny||"";if(n&&l.src!==n){l.src=n,l.dataset.fallback===n?delete l.dataset.fallback:delete l.dataset.tiny;return}l.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",s=>{s.key==="Escape"&&!t.hidden&&a()})}var Nt=!1;function Pe(){if(!c.data)return;let{stats:t,streams:e=[]}=c.data,a=e[0]?.date||null,s=it(a),l=t.dataGeneratedDate||c.channelData?.dataGeneratedDate||null,n=it(l),o=t.channelLabel||t.channelId||"",p=o?`<span class="badge accent" style="margin-right:8px;">${m(o)}</span>`:"";i("#updated-info").innerHTML=p+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${L(l)||"\u2014"}</strong>`+(n!=null?` <span class="badge">${n}\u65E5\u524D</span>`:"");let d=i("#stats-grid");if(!Nt)d.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${M(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${M(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${M(t.streams)}<span class="stat-unit">\u56DE</span></div>
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
        <div class="stat-value">${qt(c.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,Nt=!0;else{let u=d.querySelectorAll(".stat-value");u.length>=6&&(u[0].textContent=M(t.total),u[0].innerHTML+='<span class="stat-unit">\u56DE</span>',u[1].textContent=M(t.repertoire),u[1].innerHTML+='<span class="stat-unit">\u66F2</span>',u[2].textContent=M(t.streams),u[2].innerHTML+='<span class="stat-unit">\u56DE</span>',u[3].textContent=t.avgPerStream,u[3].innerHTML+='<span class="stat-unit">\u66F2</span>',u[4].textContent=s??"\u2014",u[4].innerHTML+='<span class="stat-unit">\u65E5</span>',u[5].textContent=qt(c.data),u[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function qt(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,a=t.streams[0].date;return Math.floor((a-e)/864e5)+1}function Me(){i("#loading").hidden=!1,i("#error").hidden=!0}function Ie(){i("#loading").hidden=!0}function De(t){let e=i("#loading"),a=i("#error"),s=i("#err-detail");e&&(e.hidden=!0),a&&(a.hidden=!1),s&&(s.textContent=t&&t.message?t.message:String(t))}function Ae(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let a=document.getElementById("hero-ch-bg");a&&(a.dataset.mode=t||"all")}var He={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:"\u{1F6CD}",label:"official store",url:"https://react.booth.pm"},{icon:"\u{1F310}",label:"official site",url:"https://v-react.com"},{icon:"\u{1F3B5}",label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:"\u{1F3A7}",label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:"\u25B6",label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function Z(t){let e=He[t];if(!e)return"";let a=e.bannerUrl?`<img class="ch-card-banner-img" src="${m(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${m(e.label)}</span>`:`<span class="ch-card-banner-label">${m(e.label)}</span>`,s=e.avatarUrl?`<img class="ch-card-avatar-img" src="${m(e.avatarUrl)}" alt="${m(e.name)}" loading="lazy" referrerpolicy="no-referrer">`:t==="new"?"\u65B0":"\u65E7",l=e.desc?`<p class="ch-card-desc">${e.desc.split(`
`).map(o=>m(o)).join("<br>")}</p>`:"",n=e.links?.length?`
    <div class="ch-card-links">
      ${e.links.map(o=>`
        <a class="ch-card-link" href="${m(o.url)}" target="_blank" rel="noopener">
          <span class="ch-card-link-icon" aria-hidden="true">${o.icon}</span>
          <span>${m(o.label)}</span>
        </a>`).join("")}
    </div>`:"";return`
    <div class="ch-card ch-card--${t}">
      <div class="ch-card-banner ch-card-banner--${t}${e.bannerUrl?" ch-card-banner--img":""}">
        ${a}
      </div>
      <div class="ch-card-body">
        <div class="ch-card-header">
          <div class="ch-card-avatar ch-card-avatar--${t}${e.avatarUrl?" ch-card-avatar--img":""}">${s}</div>
          <div class="ch-card-meta">
            <div class="ch-card-name">${m(e.name)}</div>
            <div class="ch-card-handle">${m(e.handle)}</div>
          </div>
        </div>
        ${l}
        ${n}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${m(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u3078
          </a>
        </div>
      </div>
    </div>`}function Ne(t){let e=i("#ch-modal"),a=i("#ch-modal-body");if(!e||!a)return;let s="";t==="new"?s=Z("new"):t==="old"?s=Z("old"):s=Z("new")+Z("old"),a.innerHTML=s,e.hidden=!1,i("#ch-modal-close")?.focus()}function qe(){let t=i("#ch-modal"),e=i("#ch-modal-close");if(!t||!e)return;let a=()=>{t.hidden=!0};e.addEventListener("click",a),t.addEventListener("click",s=>{s.target===t&&a()}),document.querySelectorAll("[data-ch-modal]").forEach(s=>{s.addEventListener("click",()=>Ne(s.dataset.chModal))})}function Be(){let t=i("#help-modal"),e=i("#help-btn"),a=i("#help-close");if(!t||!e||!a)return;let s=()=>{t.hidden=!1,a.focus()},l=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",s),a.addEventListener("click",l),t.addEventListener("click",n=>{n.target===t&&l()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&l()})}function Ye(){let t=i("#welcome-tip"),e=i("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let a=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(a,{timeout:5e3}):window.setTimeout(a,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function ht(){Me();try{let t=await $t();c.channelData=t,!N&&!t.fullLoaded&&Rt();let e=ot();c.songsQuery=e.q,c.activeTab=tt(e.tab)?e.tab:"dashboard",Ut(c.activeTab);let a=e.channel||c.channel||R;if(_(a)||(a=R),!_(a)){let s=Object.keys(t.channels)[0];s&&(a=s)}if(!_(a))throw new Error("No channel data could be loaded");de(),Ie(),at(a,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0})}catch(t){console.error("[init] failed:",t),De(t)}}function Re(){if(!c.channelData)return;let t=ot();c.songsQuery=t.q,t.channel!==c.channel&&_(t.channel)&&at(t.channel,{resetSearch:!1,updateUrl:!1}),P(t.tab,{updateUrl:!1})}k(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,a=i("#stream-viewer");if(e!=="player"&&a&&!a.hidden&&!T){st=e,O();return}P(e)})});k(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||at(t.dataset.channel))})});window.addEventListener("popstate",Re);k("[data-audience]").forEach(t=>{t.addEventListener("click",()=>oe(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),pt(e.dataset.artistSearch||e.textContent||"");return}let a=t.target.closest("[data-playlist-add]");if(a){t.preventDefault(),t.stopPropagation();let o=a.dataset.playlistAdd,p=a.dataset.streamTitle||"";import("./chunk-7K4D2JUF.js").then(d=>d.showAddToPlaylistModal(o,p));return}let s=t.target.closest("[data-stream-play]");if(s){t.preventDefault(),t.stopPropagation();let o=s.dataset.streamPlay,p=(c.data?.streams||[]).find(d=>D(d)===o);p?.url?B(p):s.dataset.inlineYoutube&&K(s.dataset.inlineYoutube);return}let l=t.target.closest("[data-inline-youtube]");if(l){t.preventDefault(),t.stopPropagation(),K(l.dataset.inlineYoutube);return}if(gt(t.target))return;let n=t.target.closest("[data-songkey]");n&&Wt(n.dataset.songkey)});i("#retry-btn").addEventListener("click",ht);i("#reload-btn").addEventListener("click",ht);Be();qe();Ft();Xt();Ce();ce();re();Ye();Ct(t=>{t.type==="song"?Wt(t.song.key):t.type==="artist"?pt(t.artist):t.type==="stream"&&B(t.stream)});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,a=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!a&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),Pt();return}if(t.key==="t"&&!a&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),St();return}if(t.key==="?"&&!a&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let l=i("#help-modal");l&&l.hidden&&(l.hidden=!1,i("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let l=i("#stream-viewer"),n=!!i("#panel-player.active");if(l&&!l.hidden&&(T||n)){t.preventDefault(),O();return}if(Mt()){t.preventDefault(),U();return}let o=i("#song-modal");if(o&&!o.hidden)return;let p=i("#ch-modal");if(p&&!p.hidden){p.hidden=!0;return}let d=i("#help-modal");if(d&&!d.hidden){d.hidden=!0,i("#help-btn")?.focus();return}let u=i("#songs-search");u&&document.activeElement===u&&u.value&&(t.preventDefault(),u.value="",u.dispatchEvent(new Event("input",{bubbles:!0})))}});Et(()=>{c.data&&(lt(),(c.activeTab==="dashboard"||c.activeTab==="analytics")&&I())});function Ue(){ht()}Ue();
