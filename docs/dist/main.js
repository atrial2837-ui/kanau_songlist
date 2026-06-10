import{b as gt,c as kt,d as wt,i as $t,k as it,l as V}from"./chunk-DSNH5IKV.js";import{a as Lt,b as St,e as nt,f as Tt}from"./chunk-SIADDXVK.js";import{a as Y}from"./chunk-MKJIXTK4.js";import{I as st,J as L,L as D,Q as P,R as yt,a as ht,b as at,c as bt,e as c,f as o,g as w,i as m}from"./chunk-6YA3HG5E.js";var g=-1,T=[],lt=null;function _t(t){lt=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",s=>{s.target===e&&R()});let a=document.getElementById("omni-input");a.addEventListener("input",()=>It(a.value)),a.addEventListener("keydown",Xt),document.getElementById("omni-listbox").addEventListener("click",s=>{let i=s.target.closest("[data-omni-idx]");i&&Mt(Number(i.dataset.omniIdx))})}function Ct(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,g=-1,T=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),It("")}function R(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),g=-1}function Pt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Xt(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),g=Math.min(g+1,e.length-1),Et(e)):t.key==="ArrowUp"?(t.preventDefault(),g=Math.max(g-1,-1),Et(e)):t.key==="Enter"?(t.preventDefault(),g>=0&&T[g]&&Mt(g)):t.key==="Escape"&&(t.preventDefault(),R())}function Et(t){t.forEach((e,a)=>{e.classList.toggle("is-active",a===g),e.setAttribute("aria-selected",String(a===g))}),g>=0&&t[g]?.scrollIntoView({block:"nearest"})}function Mt(t){let e=T[t];!e||!lt||(R(),lt(e))}function It(t){let e=document.getElementById("omni-listbox");if(!e)return;g=-1,T=[];let a=c.data?.songs||[],s=c.data?.streams||[],i=t.trim().toLowerCase(),n="",l=0;if(!c.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!i){let r=a.slice(0,8);if(r.length){n+=G("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let p of r)T.push({type:"song",song:p}),n+=xt(p,l++,"")}e.innerHTML=n||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let d=a.filter(r=>A(r.title).includes(i)||A(r.artist).includes(i)).slice(0,8);if(d.length){n+=G("\u{1F3B5} \u66F2");for(let r of d)T.push({type:"song",song:r}),n+=xt(r,l++,i)}let v=new Set,u=[];for(let r of a)if(A(r.artist).includes(i)&&!v.has(r.artist)&&(v.add(r.artist),u.push(r.artist),u.length>=4))break;if(u.length){n+=G("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let r of u){let p=a.filter(f=>f.artist===r).length;T.push({type:"artist",artist:r}),n+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${l++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${z(m(r),i)}</span>
          <span class="omni-item-meta">${p}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(s.length){let r=s.filter(p=>A(p.title).includes(i)||p.songs?.some(f=>A(f.title).includes(i)||A(f.artist).includes(i))).slice(0,5);if(r.length){n+=G("\u{1F4C5} \u914D\u4FE1\u67A0");for(let p of r){T.push({type:"stream",stream:p});let f=p.channel==="new"?"\u65B0ch":p.channel==="old"?"\u65E7ch":"";n+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${l++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${z(m(p.title||"\u914D\u4FE1"),i)}</span>
            <span class="omni-item-meta">${L(p.date)}${f?" \xB7 "+f:""} \xB7 ${p.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}n||(n=`<div class="omni-empty">\u300C${m(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=n}function G(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function xt(t,e,a){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${z(m(t.title),a)}</span>
      <span class="omni-item-meta">${z(m(t.artist||""),a)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function A(t){return String(t||"").toLowerCase()}function z(t,e){if(!e)return t;let s=t.toLowerCase().indexOf(e);return s<0?t:t.slice(0,s)+'<mark class="hl">'+t.slice(s,s+e.length)+"</mark>"+t.slice(s+e.length)}St();bt();var qt={dashboard:()=>import("./chunk-5PGBMNJS.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-ESHPASDY.js").then(t=>t.renderRanking),songs:()=>import("./chunk-DKUP6YRL.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-5GZHGOGX.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-3D4M2QCZ.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-7K4D2JUF.js").then(t=>t.renderPlaylists)},Q=new Map,Dt=0,N=null;function W(t){return Object.prototype.hasOwnProperty.call(qt,t)}async function Wt(t){Q.has(t)||Q.set(t,qt[t]());try{return await Q.get(t)}catch(e){throw Q.delete(t),e}}function Bt(t){return["dashboard","timeline","analytics"].includes(t)}function te(t,e={}){let a=o(`#panel-${t}`);if(!a)return;let s={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};a.innerHTML=`
    <div class="state-card">
      <div class="msg">${m(s[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function ee(t){let e=o(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function ae(t){if(c.channelData?.fullLoaded)return;c.channelData=t;let e=x(c.channel)?c.channel:Y,a=x(e);a&&(c.data=a),!Bt(c.activeTab)&&c.data&&I(c.activeTab,{autoLoad:!1})}function se(t){c.channelData=t,c.channelData.fullLoaded=!0;let e=x(c.channel)?c.channel:Y;et(e,{resetSearch:!1,updateUrl:!1,render:!1}),I(c.activeTab,{autoLoad:!1})}function Yt(){return N=kt({meta:c.channelData,onSongsReady:ae}).then(se).finally(()=>{N=null}),N}async function ne(){c.channelData?.fullLoaded||(N||Yt(),await N)}async function I(t=c.activeTab,e={}){if(t!=="playlists"&&(!c.data||!W(t))||!W(t))return;let a=c.channelData?.partialLoaded||c.channelData?.fullLoaded,s=c.channelData?.fullLoaded;if(t==="playlists"?!1:Bt(t)?!s:!a)if(e.autoLoad){ee(t);try{await ne()}catch(l){console.error("[data] full load failed",l);let d=o(`#panel-${t}`);d&&(d.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${m(l?.message||String(l))}</div>
              <button class="btn primary" type="button" data-load-full-data="${m(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,d.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{I(t,{autoLoad:!0})}));return}}else{te(t,{initial:e.initial});return}let n=++Dt;try{let l=await Wt(t);if(n!==Dt||t!==c.activeTab||!c.data)return;t==="songs"&&$t(c.data.songs||[]),l()}catch(l){console.error(`[${t}] render failed`,l);let d=o(`#panel-${t}`);d&&(d.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${m(l?.message||String(l))}</div>
        </div>
      `)}}function C(t,e={}){W(t)||(t="dashboard"),c.activeTab=t,Rt(t),e.updateUrl!==!1&&V({tab:t}),I(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Rt(t){w(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),w(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function x(t){return c.channelData?t==="all"?c.channelData.combined:c.channelData.channels[t]||null:null}function et(t,e={}){let a=x(t);a&&(c.channel=t,De(t),c.data=a,c.timelineFilter=null,c.timelineFocus=null,c.timelineLimit=12,c.songsLimit=100,e.resetSearch!==!1&&(c.songsQuery="",c.songsGenre="all"),nt(),w("#channel-switch [data-channel]").forEach(s=>s.classList.toggle("active",s.dataset.channel===t)),rt(),e.updateUrl!==!1&&V({tab:c.activeTab,channel:t,q:c.songsQuery}),Ce(),e.render!==!1&&I(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function ie(t,e={}){c.audience=t==="singer"?"singer":"listener",c.singerMode=c.audience==="singer",c.singerMode||(c.singerPreset="all"),w(".audience-switch [data-audience]").forEach(a=>{a.classList.toggle("active",a.dataset.audience===c.audience)}),document.body.dataset.audience=c.audience,rt(),c.audience==="singer"?(c.songsLimit=100,C("songs",{autoLoad:e.autoLoad!==!1})):c.data&&I(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function rt(){let t=o("#mobile-menu-label");if(!t)return;let e=o("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",a=o("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${a}`}function le(){let t=o("#mobile-menu-toggle"),e=o("#mobile-menu-state"),a=o("#topbar-actions");if(!t||!e||!a)return;let s=n=>{e.checked=n,a.classList.toggle("is-open",n),t.setAttribute("aria-expanded",String(n))},i=()=>{s(!1),t.focus()};t.addEventListener("click",n=>{n.stopPropagation(),requestAnimationFrame(()=>s(e.checked))}),t.addEventListener("keydown",n=>{n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),s(!e.checked))}),e.addEventListener("change",()=>{s(e.checked)}),document.addEventListener("click",n=>{a.classList.contains("is-open")&&(n.target.closest("#topbar-actions")||n.target.closest("#mobile-menu-toggle")||n.target.closest("#mobile-menu-state")||i())}),document.addEventListener("keydown",n=>{n.key==="Escape"&&i()}),a.addEventListener("click",n=>{n.stopPropagation()}),rt()}function oe(){let t=o("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),a=!1,s=420,i=()=>{!e||e.src||(e.src=e.dataset.src||"")},n=()=>{a=!1;let d=window.scrollY>s;d&&i(),t.hidden=!d,t.classList.toggle("is-visible",d),t.setAttribute("aria-hidden",String(!d)),t.tabIndex=d?0:-1},l=()=>{a||(a=!0,requestAnimationFrame(n))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",l,{passive:!0}),n()}function ce(){if(c.channelData)for(let t of w("#channel-switch [data-channel]")){let e=t.dataset.channel,a=e==="all"?!!c.channelData.combined:!!(c.channelData.channels&&c.channelData.channels[e]);t.disabled=!a,a?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function re({key:t,title:e,artist:a}){c.timelineFilter&&c.timelineFilter.key===t&&c.activeTab==="timeline"?c.timelineFilter=null:c.timelineFilter={key:t,title:e,artist:a},c.timelineFocus=null,c.timelineLimit=12,C("timeline"),o("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function de(t,e){c.timelineFilter={key:t.key,title:t.title,artist:t.artist},c.timelineFocus=D(e),c.timelineLimit=9999,C("timeline"),o("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function ue(t){dt(t.artist||"")}function dt(t){let e=String(t||"").replace(/"/g,"");c.songsQuery=e?`artist:"${e}"`:"",c.songsLimit=100,V({tab:"songs",q:c.songsQuery}),C("songs",{updateUrl:!1})}function Z(t){return(c.data?.songs||[]).find(e=>e.key===t)||null}function H(t){let e=String(t||""),a=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let s of a){let i=e.match(s);if(i)return i[1]}return""}function ut(t){let e=H(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function pe(t){let e=H(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function ve(t){let e=H(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function Ut(){X&&(clearInterval(X),X=null)}function me(){Ut(),X=setInterval(()=>{if(y)try{let t=y.getDuration?.()||0,e=y.getCurrentTime?.()||0,a=t>0?Math.min(e/t*100,100):0,s=o("#yt-mini-progress-fill");s&&(s.style.width=`${a}%`);let n=y.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,l=o("#yt-mini-play");l&&l.setAttribute("data-playing",n?"1":"0")}catch{}},400)}function pt(){if(Ut(),y){try{y.destroy()}catch{}y=null}let t=o("#yt-player-container");t&&(t.innerHTML="")}function fe(){if(y?.getCurrentTime)try{return y.getCurrentTime()}catch{}return Math.max(0,ct+(Date.now()-Gt)/1e3)}function K(t,e=0,a=""){let s=H(t);if(!s)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}Ot(),jt();let i=o("#yt-player-container"),n=o("#yt-player-panel");if(!i||!n)return;pt();let l=o("#yt-mini-title");l&&(l.textContent=a||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let d=o("#yt-mini-hint");d&&(d.textContent=M?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),n.classList.toggle("has-stream",!!M),n.hidden=!1,Vt(()=>{let v=document.createElement("div");i.appendChild(v);try{y=new window.YT.Player(v,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:u=>{if(e>5)try{u.target.seekTo(e,!0)}catch{}me()},onStateChange:u=>{let r=u.data===window.YT.PlayerState.PLAYING,p=o("#yt-mini-play");p&&p.setAttribute("data-playing",r?"1":"0")}}})}catch{let r=e>0?`&start=${Math.floor(e)}`:"";i.innerHTML=`<iframe src="https://www.youtube.com/embed/${s}?autoplay=1&playsinline=1${r}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function jt(){if(o("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),o("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,pt(),M=null}),o("#yt-mini-play").addEventListener("click",()=>{if(y)try{y.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?y.pauseVideo():y.playVideo()}catch{}}),o("#yt-mini-restore").addEventListener("click",()=>{M&&q(M,fe())}),o("#yt-mini-progress-bar").addEventListener("click",e=>{if(!y)return;let s=e.currentTarget.getBoundingClientRect(),i=Math.max(0,Math.min(1,(e.clientX-s.left)/s.width));try{let n=y.getDuration?.()||0;n>0&&y.seekTo(i*n,!0)}catch{}})}var Ft=!1,Kt=[];window.onYouTubeIframeAPIReady=()=>{Ft=!0,Kt.splice(0).forEach(t=>t())};function Ot(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function Vt(t){if(Ft&&window.YT?.Player){t();return}Kt.push(t)}var k=null,U=0,M=null,ct=0,Gt=0,_=!1,vt="timeline",S={},j=!1,y=null,X=null;function he(){vt=c.activeTab||"timeline",c.activeTab="player",w(".tab-btn").forEach(t=>t.classList.remove("active")),w(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function be(){C(vt||"timeline")}function ye(){_=!0;let t=o("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=o("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let a=o("#sv-fullscreen-btn");a&&a.setAttribute("aria-pressed","true")}function E(t){let e=Math.floor(t),a=Math.floor(e/3600),s=Math.floor(e%3600/60),i=e%60;return a>0?`${a}:${String(s).padStart(2,"0")}:${String(i).padStart(2,"0")}`:`${s}:${String(i).padStart(2,"0")}`}function zt(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function O(t){try{return JSON.parse(localStorage.getItem(zt(t))||"null")||{}}catch{return{}}}function ot(t,e){try{localStorage.setItem(zt(t),JSON.stringify(e))}catch{}}function ge(t,e,a){let s=a[e],i=s!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${m(E(s))} \u306B\u79FB\u52D5">${m(E(s))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",l=(S[e]||[]).map(u=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${u.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${m(E(u.timeSeconds))}">${m(E(u.timeSeconds))}</button>`).join(""),d=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,v=`<div class="sv-cts-row">${l}${d}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${m(t.title)}</span>
      <span class="sv-song-artist">${m(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${i}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${v}
  </div>`}async function ke(t){if(S={},!t?.channel||t?.index==null)return;try{let s=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,i=await fetch(s);if(!i.ok)return;let n=await i.json();for(let l of n.items||[])S[l.songIndex]||(S[l.songIndex]=[]),S[l.songIndex].push({timeSeconds:l.timeSeconds,note:l.note??null})}catch{}let e=o("#stream-viewer");if(!e||e._currentStream!==t)return;let a=o("#sv-setlist");a&&F(a,t.songs,O(t)),$e(t)}function we(t,e,a){o("#sv-cts-modal")?.remove();let s=k?.getCurrentTime?.()??0,i=E(Math.floor(s)),n=document.createElement("div");n.id="sv-cts-modal",n.className="sv-cts-modal-overlay",n.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-cts-modal-song">${m(a)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${m(i)}" placeholder="0:00" autocomplete="off">
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
  `,document.body.appendChild(n);let l=()=>n.remove();n.querySelector(".sv-cts-modal-close").addEventListener("click",l),n.querySelector(".sv-cts-modal-cancel").addEventListener("click",l),n.addEventListener("click",d=>{d.target===n&&l()}),n.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let d=n.querySelector("#sv-cts-ts-input").value.trim(),v=n.querySelector("#sv-cts-note-input").value.trim()||null,u=mt(d),r=n.querySelector("#sv-cts-status");if(u===null){r.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",r.className="sv-cts-modal-status error",r.hidden=!1;return}let p=n.querySelector("#sv-cts-submit");p.disabled=!0,p.textContent="\u9001\u4FE1\u4E2D\u2026";try{let f=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:u,submitterNote:v})});if(f.ok)r.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",r.className="sv-cts-modal-status success",r.hidden=!1,p.hidden=!0,n.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let b=await f.json().catch(()=>({}));r.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${b.error||f.statusText}`,r.className="sv-cts-modal-status error",r.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}catch(f){r.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.message}`,r.className="sv-cts-modal-status error",r.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>n.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function d(v){v.key==="Escape"&&(l(),document.removeEventListener("keydown",d))})}function $e(t){let e=o("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let s=Object.keys(S).length>=t.songs.length;e.textContent=s?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function Le(t){o("#sv-bulk-modal")?.remove();let e=O(t),i=Object.keys(S).length>=t.songs.length,n=t.songs.map((v,u)=>{let r=e[u]!=null?E(e[u]):"",p=S[u]?.[0]?.timeSeconds!=null?E(S[u][0].timeSeconds):"",f=r||p;return`
      <div class="sv-bulk-row" data-idx="${u}">
        <span class="sv-bulk-num">${u+1}</span>
        <span class="sv-bulk-title" title="${m(v.title)}">${m(v.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${m(f)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${u}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${u}">\u23F1</button>
      </div>`}).join(""),l=document.createElement("div");l.id="sv-bulk-modal",l.className="sv-cts-modal-overlay",l.innerHTML=`
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="${i?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">${i?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}</span>
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
  `,document.body.appendChild(l);let d=()=>l.remove();l.querySelector(".sv-cts-modal-close").addEventListener("click",d),l.querySelector(".sv-cts-modal-cancel").addEventListener("click",d),l.addEventListener("click",v=>{v.target===l&&d()}),l.querySelector(".sv-bulk-rows").addEventListener("click",v=>{let u=v.target.closest("[data-bulk-now]");if(!u)return;let r=parseInt(u.dataset.bulkNow,10),p=k?.getCurrentTime?.();if(p!=null){let f=l.querySelector(`[data-bulk-ts-idx="${r}"]`);f&&(f.value=E(Math.floor(p)))}}),l.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let v=l.querySelector("#sv-bulk-note").value.trim()||null,u=l.querySelector("#sv-bulk-status"),r=l.querySelector("#sv-bulk-submit"),p=[];if(l.querySelectorAll("[data-bulk-ts-idx]").forEach(h=>{let $=parseInt(h.dataset.bulkTsIdx,10),B=mt(h.value.trim());B!==null&&p.push({songIndex:$,timeSeconds:B})}),!p.length){u.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",u.className="sv-cts-modal-status error",u.hidden=!1;return}r.disabled=!0,r.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${p.length})`,u.hidden=!0;let f=0,b=0;await Promise.all(p.map(async h=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:h.songIndex,timeSeconds:h.timeSeconds,submitterNote:v})})).ok?f++:b++}catch{b++}r.textContent=`\u7533\u8ACB\u4E2D\u2026 (${f+b}/${p.length})`})),b===0?(u.textContent=`${f}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,u.className="sv-cts-modal-status success",r.hidden=!0,l.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(u.textContent=`${f}\u4EF6\u6210\u529F / ${b}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,u.className="sv-cts-modal-status error",r.disabled=!1,r.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),u.hidden=!1}),document.addEventListener("keydown",function v(u){u.key==="Escape"&&(d(),document.removeEventListener("keydown",v))})}function Qt(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function Se(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function Te(t,e){let a=Qt(),s=a.find(i=>String(i.id)===String(t));return s?(s.streams||(s.streams=[]),s.streams.includes(e)||(s.streams.push(e),Se(a)),!0):!1}function Ee(){let t=c.data?.streams||[],a=o("#stream-viewer")?._currentStream;if(!a)return;let s=t.findIndex(i=>i.channel===a.channel&&i.index===a.index);s<0||s>=t.length-1||q(t[s+1])}function At(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${m(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let a=ut(t.url),s=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${m(s)}</div>
    ${a?`<img class="sv-bp-nav-thumb" src="${m(a)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${m(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${L(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function xe(t){let e=o("#sv-below-player");if(!e)return;let a=c.data?.streams||[],s=a.findIndex(r=>r.channel===t.channel&&r.index===t.index),i=s>=0&&s<a.length-1?a[s+1]:null,n=s>0?a[s-1]:null,l=new Set(t.songs.map(r=>r.title)),d=a.filter((r,p)=>p!==s).map(r=>{let p=r.songs.filter(f=>l.has(f.title));return{stream:r,overlap:p.length,sharedSongs:p.slice(0,3).map(f=>f.title)}}).filter(r=>r.overlap>0).sort((r,p)=>p.overlap-r.overlap).slice(0,8),v=Qt(),u=D(t);e.innerHTML=`
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
          ${i?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${m(i.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${At(i,"older")}
          ${At(n,"newer")}
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
          ${d.map(r=>{let p=ut(r.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(r.stream.channel)}" data-bp-index="${r.stream.index}">
              ${p?`<img class="sv-bp-rel-thumb" src="${m(p)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
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
      ${v.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0</div>
        <div class="sv-bp-pl-list" id="sv-bp-pl-list">
          ${v.map(r=>{let p=(r.streams||[]).includes(u);return`<button class="sv-bp-pl-btn${p?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${m(String(r.id))}"${p?" disabled":""}>
              <span class="sv-bp-pl-name">${m(r.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${p?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=r=>{let p=r.target.closest("#sv-ap-check");if(!p)return;j=p.checked;let f=e.querySelector(".sv-bp-ap-switch");f&&f.classList.toggle("sv-bp-ap-switch--on",j)},e.onclick=r=>{let p=r.target.closest("[data-bp-action]");if(!p)return;let f=p.dataset.bpAction;if(f==="open-stream"){let b=p.dataset.bpChannel,h=parseInt(p.dataset.bpIndex,10),$=(c.data?.streams||[]).find(B=>B.channel===b&&B.index===h);$&&q($)}else if(f==="add-pl"){let b=p.dataset.bpPlId;if(Te(b,u)){p.classList.add("sv-bp-pl-btn--added"),p.disabled=!0;let h=p.querySelector(".sv-bp-pl-status");h&&(h.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}}}function F(t,e,a){t.innerHTML=e.map((s,i)=>ge(s,i,a)).join("")}function mt(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Jt(){if(o("#stream-viewer"))return;let t=o("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
  `,t.appendChild(e),o("#sv-close").addEventListener("click",tt),o("#sv-fullscreen-btn").addEventListener("click",ye),e.querySelectorAll("[data-bc-tab]").forEach(a=>{a.addEventListener("click",()=>{tt(),C(a.dataset.bcTab)})}),o("#sv-import-toggle").addEventListener("click",()=>{let a=o("#sv-import-area");a&&(a.hidden=!a.hidden,a.hidden||o("#sv-import-input")?.focus())}),o("#sv-import-cancel").addEventListener("click",()=>{let a=o("#sv-import-area");a&&(a.hidden=!0);let s=o("#sv-import-input");s&&(s.value="")}),o("#sv-import-apply").addEventListener("click",()=>{let a=e._currentStream;if(!a)return;let s=o("#sv-import-input");if(!s)return;let n=s.value.split(`
`).map(v=>mt(v)).filter(v=>v!==null);if(!n.length)return;let l=O(a);n.forEach((v,u)=>{u<a.songs.length&&(l[u]=v)}),ot(a,l),F(o("#sv-setlist"),a.songs,l);let d=o("#sv-import-area");d&&(d.hidden=!0),s.value=""}),o("#sv-cts-bulk-btn").addEventListener("click",()=>{let a=e._currentStream;a&&Le(a)}),o("#sv-setlist").addEventListener("click",a=>{let s=a.target.closest("[data-action]");if(!s)return;let i=parseInt(s.dataset.idx,10),n=e._currentStream;if(!n)return;let l=O(n);if(s.dataset.action==="seek"){if(l[i]!=null&&k?.seekTo){k.seekTo(l[i],!0);try{k.playVideo()}catch{}}}else if(s.dataset.action==="set-ts"){let d=k?.getCurrentTime?.();d!=null&&(l[i]=Math.floor(d),ot(n,l),F(o("#sv-setlist"),n.songs,l))}else if(s.dataset.action==="del-ts")delete l[i],ot(n,l),F(o("#sv-setlist"),n.songs,l);else if(s.dataset.action==="cts-seek"){let d=Number(s.dataset.ctsSeconds);if(!isNaN(d)&&k?.seekTo){k.seekTo(d,!0);try{k.playVideo()}catch{}}}else if(s.dataset.action==="cts-propose"){let d=n.songs[i];we(n,i,d?.title||`\u66F2 ${i+1}`)}})}function q(t,e=0){if(!t?.url)return;let a=H(t.url);if(!a){K(t.url);return}Jt(),Ot();let s=o("#yt-player-panel");if(s&&!s.hidden&&(s.hidden=!0,pt()),M=null,_){_=!1;let b=o("#stream-viewer");b&&b.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}_=!1,he();let i=o("#stream-viewer");i.classList.remove("sv-fullscreen"),i._currentStream=t;let n=++U,l=o("#sv-bc-title");l&&(l.textContent=t.title||"\u914D\u4FE1");let d=o("#sv-stream-meta");d&&(d.textContent=`${L(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let v=o("#sv-yt-link");v&&(v.href=t.url);let u=o("#sv-song-count");u&&(u.textContent=`${t.songs.length}\u66F2`),S={};let r=O(t);F(o("#sv-setlist"),t.songs,r),ke(t),xe(t),i.hidden=!1,document.body.style.overflow="",setTimeout(()=>{o("#sv-close")?.focus({preventScroll:!0})},50),k=null;let p=o("#sv-player-wrap");p.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let f=Math.floor(e);Vt(()=>{if(n!==U||i.hidden)return;p.innerHTML="";let b=document.createElement("div");p.appendChild(b);try{k=new window.YT.Player(b,{videoId:a,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...f>0?{start:f}:{}},events:{onReady:h=>{try{h.target.setPlaybackQuality("hd1080")}catch{}try{h.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(f>5)try{h.target.seekTo(f,!0)}catch{}},onStateChange:h=>{if(n===U){if(h.data===window.YT.PlayerState.PLAYING)try{h.target.setPlaybackQuality("hd1080")}catch{}h.data===window.YT.PlayerState.ENDED&&j&&Ee()}},onError:()=>{n===U&&(p.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(a)}?autoplay=1&playsinline=1&rel=0${f>0?`&start=${f}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{p.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(a)}?autoplay=1&playsinline=1&rel=0${f>0?`&start=${f}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function tt(){let t=o("#stream-viewer");if(!t)return;if(_){_=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let n=o("#sv-close");n&&(n.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let l=o("#sv-fullscreen-btn");l&&l.setAttribute("aria-pressed","false");return}let e=t._currentStream,a=k?.getCurrentTime?.()??0,s=e?.url?H(e.url):"";++U,t.hidden=!0,t._currentStream=null,k=null;let i=o("#sv-player-wrap");i&&(i.innerHTML=""),document.body.style.overflow="",be(),s&&e?.url&&(M=e,ct=Math.floor(a),Gt=Date.now(),K(e.url,ct,e.title||""))}window.__openStreamViewer=q;function Zt(t){let e=Z(t),a=o("#song-modal"),s=o("#song-modal-body"),i=o("#song-modal-title");if(!e||!a||!s||!i)return;gt(e),i.textContent=e.title;let n=(e.streamRefs||[]).slice(0,8).map(v=>({...v,thumbnail:ut(v.url),thumbnailFallback:pe(v.url),thumbnailTiny:ve(v.url),detailKey:D(v)})),l=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),d=at(e.key);s.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${m(e.key)}">${m(e.artist)}</button>
        <div class="song-detail-tags">${l.map(v=>`<span class="tag-badge">${m(v)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${L(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${d?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${m(e.key)}">${d?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${m(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${n.length?n.map(v=>`
        <div class="song-detail-stream">
          ${v.thumbnail&&v.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${m(v.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${m(v.thumbnail)}" data-fallback="${m(v.thumbnailFallback)}" data-tiny="${m(v.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${m(v.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${m(e.key)}" data-streamkey="${m(v.detailKey)}">
            <span>${L(v.date)}</span>
            <strong>${m(v.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,a.hidden=!1,o("#song-modal-close")?.focus()}function _e(){let t=o("#song-modal"),e=o("#song-modal-close");if(!t||!e)return;let a=()=>{t.hidden=!0};e.addEventListener("click",a),t.addEventListener("click",s=>{s.target===t&&a();let i=s.target.closest("[data-inline-youtube]");if(i){s.preventDefault(),s.stopPropagation(),K(i.dataset.inlineYoutube);return}let n=s.target.closest("[data-detail-action]");if(n){if(s.stopPropagation(),n.dataset.detailAction==="close"&&a(),n.dataset.detailAction==="favorite"){let l=n.dataset.songkey;ht(l);let d=at(l);n.textContent=d?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",n.classList.toggle("primary",d),n.classList.toggle("ghost",!d)}if(n.dataset.detailAction==="timeline"){let l=Z(n.dataset.songkey);a(),l&&re(l)}if(n.dataset.detailAction==="stream"){let l=Z(n.dataset.songkey),d=l?.streamRefs?.find(v=>D(v)===n.dataset.streamkey);a(),l&&d&&de(l,d)}if(n.dataset.detailAction==="artist"){let l=Z(n.dataset.songkey);a(),l&&ue(l)}}}),t.addEventListener("error",s=>{let i=s.target.closest?.(".song-detail-thumb");if(!i)return;let n=i.dataset.fallback||i.dataset.tiny||"";if(n&&i.src!==n){i.src=n,i.dataset.fallback===n?delete i.dataset.fallback:delete i.dataset.tiny;return}i.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",s=>{s.key==="Escape"&&!t.hidden&&a()})}var Nt=!1;function Ce(){if(!c.data)return;let{stats:t,streams:e=[]}=c.data,a=e[0]?.date||null,s=st(a),i=t.dataGeneratedDate||c.channelData?.dataGeneratedDate||null,n=st(i),l=t.channelLabel||t.channelId||"",d=l?`<span class="badge accent" style="margin-right:8px;">${m(l)}</span>`:"";o("#updated-info").innerHTML=d+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${L(i)||"\u2014"}</strong>`+(n!=null?` <span class="badge">${n}\u65E5\u524D</span>`:"");let v=o("#stats-grid");if(!Nt)v.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${P(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${P(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${P(t.streams)}<span class="stat-unit">\u56DE</span></div>
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
        <div class="stat-value">${Ht(c.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,Nt=!0;else{let u=v.querySelectorAll(".stat-value");u.length>=6&&(u[0].textContent=P(t.total),u[0].innerHTML+='<span class="stat-unit">\u56DE</span>',u[1].textContent=P(t.repertoire),u[1].innerHTML+='<span class="stat-unit">\u66F2</span>',u[2].textContent=P(t.streams),u[2].innerHTML+='<span class="stat-unit">\u56DE</span>',u[3].textContent=t.avgPerStream,u[3].innerHTML+='<span class="stat-unit">\u66F2</span>',u[4].textContent=s??"\u2014",u[4].innerHTML+='<span class="stat-unit">\u65E5</span>',u[5].textContent=Ht(c.data),u[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function Ht(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,a=t.streams[0].date;return Math.floor((a-e)/864e5)+1}function Pe(){o("#loading").hidden=!1,o("#error").hidden=!0}function Me(){o("#loading").hidden=!0}function Ie(t){let e=o("#loading"),a=o("#error"),s=o("#err-detail");e&&(e.hidden=!0),a&&(a.hidden=!1),s&&(s.textContent=t&&t.message?t.message:String(t))}function De(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let a=document.getElementById("hero-ch-bg");a&&(a.dataset.mode=t||"all")}var Ae={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:"\u{1F6CD}",label:"official store",url:"https://react.booth.pm"},{icon:"\u{1F310}",label:"official site",url:"https://v-react.com"},{icon:"\u{1F3B5}",label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:"\u{1F3A7}",label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:"\u25B6",label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function J(t){let e=Ae[t];if(!e)return"";let a=e.bannerUrl?`<img class="ch-card-banner-img" src="${m(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${m(e.label)}</span>`:`<span class="ch-card-banner-label">${m(e.label)}</span>`,s=e.avatarUrl?`<img class="ch-card-avatar-img" src="${m(e.avatarUrl)}" alt="${m(e.name)}" loading="lazy" referrerpolicy="no-referrer">`:t==="new"?"\u65B0":"\u65E7",i=e.desc?`<p class="ch-card-desc">${e.desc.split(`
`).map(l=>m(l)).join("<br>")}</p>`:"",n=e.links?.length?`
    <div class="ch-card-links">
      ${e.links.map(l=>`
        <a class="ch-card-link" href="${m(l.url)}" target="_blank" rel="noopener">
          <span class="ch-card-link-icon" aria-hidden="true">${l.icon}</span>
          <span>${m(l.label)}</span>
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
        ${i}
        ${n}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${m(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u3078
          </a>
        </div>
      </div>
    </div>`}function Ne(t){let e=o("#ch-modal"),a=o("#ch-modal-body");if(!e||!a)return;let s="";t==="new"?s=J("new"):t==="old"?s=J("old"):s=J("new")+J("old"),a.innerHTML=s,e.hidden=!1,o("#ch-modal-close")?.focus()}function He(){let t=o("#ch-modal"),e=o("#ch-modal-close");if(!t||!e)return;let a=()=>{t.hidden=!0};e.addEventListener("click",a),t.addEventListener("click",s=>{s.target===t&&a()}),document.querySelectorAll("[data-ch-modal]").forEach(s=>{s.addEventListener("click",()=>Ne(s.dataset.chModal))})}function qe(){let t=o("#help-modal"),e=o("#help-btn"),a=o("#help-close");if(!t||!e||!a)return;let s=()=>{t.hidden=!1,a.focus()},i=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",s),a.addEventListener("click",i),t.addEventListener("click",n=>{n.target===t&&i()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&i()})}function Be(){let t=o("#welcome-tip"),e=o("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let a=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(a,{timeout:5e3}):window.setTimeout(a,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function ft(){Pe();try{let t=await wt();c.channelData=t,!N&&!t.fullLoaded&&Yt();let e=it();c.songsQuery=e.q,c.activeTab=W(e.tab)?e.tab:"dashboard",Rt(c.activeTab);let a=e.channel||c.channel||Y;if(x(a)||(a=Y),!x(a)){let s=Object.keys(t.channels)[0];s&&(a=s)}if(!x(a))throw new Error("No channel data could be loaded");ce(),Me(),et(a,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0})}catch(t){console.error("[init] failed:",t),Ie(t)}}function Ye(){if(!c.channelData)return;let t=it();c.songsQuery=t.q,t.channel!==c.channel&&x(t.channel)&&et(t.channel,{resetSearch:!1,updateUrl:!1}),C(t.tab,{updateUrl:!1})}w(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,a=o("#stream-viewer");if(e!=="player"&&a&&!a.hidden&&!_){vt=e,tt();return}C(e)})});w(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||et(t.dataset.channel))})});window.addEventListener("popstate",Ye);w("[data-audience]").forEach(t=>{t.addEventListener("click",()=>ie(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),dt(e.dataset.artistSearch||e.textContent||"");return}let a=t.target.closest("[data-playlist-add]");if(a){t.preventDefault(),t.stopPropagation();let l=a.dataset.playlistAdd,d=a.dataset.streamTitle||"";import("./chunk-7K4D2JUF.js").then(v=>v.showAddToPlaylistModal(l,d));return}let s=t.target.closest("[data-stream-play]");if(s){t.preventDefault(),t.stopPropagation();let l=s.dataset.streamPlay,d=(c.data?.streams||[]).find(v=>D(v)===l);d?.url?q(d):s.dataset.inlineYoutube&&K(s.dataset.inlineYoutube);return}let i=t.target.closest("[data-inline-youtube]");if(i){t.preventDefault(),t.stopPropagation(),K(i.dataset.inlineYoutube);return}if(yt(t.target))return;let n=t.target.closest("[data-songkey]");n&&Zt(n.dataset.songkey)});o("#retry-btn").addEventListener("click",ft);o("#reload-btn").addEventListener("click",ft);qe();He();jt();Jt();_e();le();oe();Be();_t(t=>{t.type==="song"?Zt(t.song.key):t.type==="artist"?dt(t.artist):t.type==="stream"&&q(t.stream)});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,a=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!a&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),Ct();return}if(t.key==="t"&&!a&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),Lt();return}if(t.key==="?"&&!a&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let i=o("#help-modal");i&&i.hidden&&(i.hidden=!1,o("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let i=o("#stream-viewer"),n=!!o("#panel-player.active");if(i&&!i.hidden&&(_||n)){t.preventDefault(),tt();return}if(Pt()){t.preventDefault(),R();return}let l=o("#song-modal");if(l&&!l.hidden)return;let d=o("#ch-modal");if(d&&!d.hidden){d.hidden=!0;return}let v=o("#help-modal");if(v&&!v.hidden){v.hidden=!0,o("#help-btn")?.focus();return}let u=o("#songs-search");u&&document.activeElement===u&&u.value&&(t.preventDefault(),u.value="",u.dispatchEvent(new Event("input",{bubbles:!0})))}});Tt(()=>{c.data&&(nt(),(c.activeTab==="dashboard"||c.activeTab==="analytics")&&I())});function Re(){ft()}Re();
