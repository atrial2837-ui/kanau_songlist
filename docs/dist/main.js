import{b as yt,c as gt,d as wt,i as kt,k as nt,l as U}from"./chunk-JZUMKDUB.js";import{a as $t,b as Lt,e as st,f as St}from"./chunk-SIADDXVK.js";import{a as N}from"./chunk-MKJIXTK4.js";import{I as at,J as $,L as _,P as S,Q as bt,a as ft,b as et,c as ht,e as o,f as i,g as k,i as v}from"./chunk-CUWLARYO.js";var y=-1,T=[],it=null;function xt(t){it=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",s=>{s.target===e&&B()});let a=document.getElementById("omni-input");a.addEventListener("input",()=>Pt(a.value)),a.addEventListener("keydown",Wt),document.getElementById("omni-listbox").addEventListener("click",s=>{let l=s.target.closest("[data-omni-idx]");l&&Mt(Number(l.dataset.omniIdx))})}function _t(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,y=-1,T=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Pt("")}function B(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),y=-1}function Ct(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Wt(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),y=Math.min(y+1,e.length-1),Tt(e)):t.key==="ArrowUp"?(t.preventDefault(),y=Math.max(y-1,-1),Tt(e)):t.key==="Enter"?(t.preventDefault(),y>=0&&T[y]&&Mt(y)):t.key==="Escape"&&(t.preventDefault(),B())}function Tt(t){t.forEach((e,a)=>{e.classList.toggle("is-active",a===y),e.setAttribute("aria-selected",String(a===y))}),y>=0&&t[y]?.scrollIntoView({block:"nearest"})}function Mt(t){let e=T[t];!e||!it||(B(),it(e))}function Pt(t){let e=document.getElementById("omni-listbox");if(!e)return;y=-1,T=[];let a=o.data?.songs||[],s=o.data?.streams||[],l=t.trim().toLowerCase(),n="",c=0;if(!o.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!l){let r=a.slice(0,8);if(r.length){n+=j("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let p of r)T.push({type:"song",song:p}),n+=Et(p,c++,"")}e.innerHTML=n||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let d=a.filter(r=>P(r.title).includes(l)||P(r.artist).includes(l)).slice(0,8);if(d.length){n+=j("\u{1F3B5} \u66F2");for(let r of d)T.push({type:"song",song:r}),n+=Et(r,c++,l)}let u=new Set,m=[];for(let r of a)if(P(r.artist).includes(l)&&!u.has(r.artist)&&(u.add(r.artist),m.push(r.artist),m.length>=4))break;if(m.length){n+=j("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let r of m){let p=a.filter(f=>f.artist===r).length;T.push({type:"artist",artist:r}),n+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${c++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${O(v(r),l)}</span>
          <span class="omni-item-meta">${p}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(o.channelData?.fullLoaded&&s.length){let r=s.filter(p=>P(p.title).includes(l)||p.songs?.some(f=>P(f.title).includes(l)||P(f.artist).includes(l))).slice(0,5);if(r.length){n+=j("\u{1F4C5} \u914D\u4FE1\u67A0");for(let p of r)T.push({type:"stream",stream:p}),n+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${c++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${O(v(p.title||"\u914D\u4FE1"),l)}</span>
            <span class="omni-item-meta">${$(p.date)} \xB7 ${p.songs?.length||0}\u66F2</span>
          </div>
        </div>`}}n||(n=`<div class="omni-empty">\u300C${v(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=n}function j(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function Et(t,e,a){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${O(v(t.title),a)}</span>
      <span class="omni-item-meta">${O(v(t.artist||""),a)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function P(t){return String(t||"").toLowerCase()}function O(t,e){if(!e)return t;let s=t.toLowerCase().indexOf(e);return s<0?t:t.slice(0,s)+'<mark class="hl">'+t.slice(s,s+e.length)+"</mark>"+t.slice(s+e.length)}Lt();ht();var Nt={dashboard:()=>import("./chunk-H2XK2RYU.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-EKPBADNT.js").then(t=>t.renderRanking),songs:()=>import("./chunk-JPW5Q7KE.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-AFGC52MQ.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-BR4FH5YN.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-OWMXHPOY.js").then(t=>t.renderPlaylists)},G=new Map,Dt=0,I=null;function J(t){return Object.prototype.hasOwnProperty.call(Nt,t)}async function Xt(t){G.has(t)||G.set(t,Nt[t]());try{return await G.get(t)}catch(e){throw G.delete(t),e}}function Bt(t){return["dashboard","timeline","analytics"].includes(t)}function te(t,e={}){let a=i(`#panel-${t}`);if(!a)return;let s={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};a.innerHTML=`
    <div class="state-card">
      <div class="msg">${v(s[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function ee(t){let e=i(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function ae(t){if(o.channelData?.fullLoaded)return;o.channelData=t;let e=E(o.channel)?o.channel:N,a=E(e);a&&(o.data=a),!Bt(o.activeTab)&&o.data&&M(o.activeTab,{autoLoad:!1})}function se(t){o.channelData=t,o.channelData.fullLoaded=!0;let e=E(o.channel)?o.channel:N;tt(e,{resetSearch:!1,updateUrl:!1,render:!1}),M(o.activeTab,{autoLoad:!1})}function Ft(){return I=gt({meta:o.channelData,onSongsReady:ae}).then(se).finally(()=>{I=null}),I}async function ne(){o.channelData?.fullLoaded||(I||Ft(),await I)}async function M(t=o.activeTab,e={}){if(t!=="playlists"&&(!o.data||!J(t))||!J(t))return;let a=o.channelData?.partialLoaded||o.channelData?.fullLoaded,s=o.channelData?.fullLoaded;if(t==="playlists"?!1:Bt(t)?!s:!a)if(e.autoLoad){ee(t);try{await ne()}catch(c){console.error("[data] full load failed",c);let d=i(`#panel-${t}`);d&&(d.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${v(c?.message||String(c))}</div>
              <button class="btn primary" type="button" data-load-full-data="${v(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,d.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{M(t,{autoLoad:!0})}));return}}else{te(t,{initial:e.initial});return}let n=++Dt;try{let c=await Xt(t);if(n!==Dt||t!==o.activeTab||!o.data)return;t==="songs"&&kt(o.data.songs||[]),c()}catch(c){console.error(`[${t}] render failed`,c);let d=i(`#panel-${t}`);d&&(d.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${v(c?.message||String(c))}</div>
        </div>
      `)}}function L(t,e={}){J(t)||(t="dashboard"),o.activeTab=t,Yt(t),e.updateUrl!==!1&&U({tab:t}),M(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Yt(t){k(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),k(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function E(t){return o.channelData?t==="all"?o.channelData.combined:o.channelData.channels[t]||null:null}function tt(t,e={}){let a=E(t);a&&(o.channel=t,Pe(t),o.data=a,o.timelineFilter=null,o.timelineFocus=null,o.timelineLimit=12,o.songsLimit=100,e.resetSearch!==!1&&(o.songsQuery="",o.songsGenre="all"),st(),k("#channel-switch [data-channel]").forEach(s=>s.classList.toggle("active",s.dataset.channel===t)),ct(),e.updateUrl!==!1&&U({tab:o.activeTab,channel:t,q:o.songsQuery}),xe(),e.render!==!1&&M(o.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function ie(t,e={}){o.audience=t==="singer"?"singer":"listener",o.singerMode=o.audience==="singer",o.singerMode||(o.singerPreset="all"),k(".audience-switch [data-audience]").forEach(a=>{a.classList.toggle("active",a.dataset.audience===o.audience)}),document.body.dataset.audience=o.audience,ct(),o.audience==="singer"?(o.songsLimit=100,L("songs",{autoLoad:e.autoLoad!==!1})):o.data&&M(o.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function ct(){let t=i("#mobile-menu-label");if(!t)return;let e=i("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",a=i("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${a}`}function le(){let t=i("#mobile-menu-toggle"),e=i("#mobile-menu-state"),a=i("#topbar-actions");if(!t||!e||!a)return;let s=n=>{e.checked=n,a.classList.toggle("is-open",n),t.setAttribute("aria-expanded",String(n))},l=()=>{s(!1),t.focus()};t.addEventListener("click",n=>{n.stopPropagation(),requestAnimationFrame(()=>s(e.checked))}),t.addEventListener("keydown",n=>{n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),s(!e.checked))}),e.addEventListener("change",()=>{s(e.checked)}),document.addEventListener("click",n=>{a.classList.contains("is-open")&&(n.target.closest("#topbar-actions")||n.target.closest("#mobile-menu-toggle")||n.target.closest("#mobile-menu-state")||l())}),document.addEventListener("keydown",n=>{n.key==="Escape"&&l()}),a.addEventListener("click",n=>{n.stopPropagation()}),ct()}function oe(){let t=i("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),a=!1,s=420,l=()=>{!e||e.src||(e.src=e.dataset.src||"")},n=()=>{a=!1;let d=window.scrollY>s;d&&l(),t.hidden=!d,t.classList.toggle("is-visible",d),t.setAttribute("aria-hidden",String(!d)),t.tabIndex=d?0:-1},c=()=>{a||(a=!0,requestAnimationFrame(n))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",c,{passive:!0}),n()}function ce(){if(o.channelData)for(let t of k("#channel-switch [data-channel]")){let e=t.dataset.channel,a=e==="all"?!!o.channelData.combined:!!(o.channelData.channels&&o.channelData.channels[e]);t.disabled=!a,a?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function re({key:t,title:e,artist:a}){o.timelineFilter&&o.timelineFilter.key===t&&o.activeTab==="timeline"?o.timelineFilter=null:o.timelineFilter={key:t,title:e,artist:a},o.timelineFocus=null,o.timelineLimit=12,L("timeline"),i("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function de(t,e){o.timelineFilter={key:t.key,title:t.title,artist:t.artist},o.timelineFocus=_(e),o.timelineLimit=9999,L("timeline"),i("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function ue(t){rt(t.artist||"")}function rt(t){let e=String(t||"").replace(/"/g,"");o.songsQuery=e?`artist:"${e}"`:"",o.songsLimit=100,U({tab:"songs",q:o.songsQuery}),L("songs",{updateUrl:!1})}function Q(t){return(o.data?.songs||[]).find(e=>e.key===t)||null}function A(t){let e=String(t||""),a=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let s of a){let l=e.match(s);if(l)return l[1]}return""}function dt(t){let e=A(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function pe(t){let e=A(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function ve(t){let e=A(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function qt(){Z&&(clearInterval(Z),Z=null)}function me(){qt(),Z=setInterval(()=>{if(h)try{let t=h.getDuration?.()||0,e=h.getCurrentTime?.()||0,a=t>0?Math.min(e/t*100,100):0,s=i("#yt-mini-progress-fill");s&&(s.style.width=`${a}%`);let n=h.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,c=i("#yt-mini-play");c&&c.setAttribute("data-playing",n?"1":"0")}catch{}},400)}function ut(){if(qt(),h){try{h.destroy()}catch{}h=null}let t=i("#yt-player-container");t&&(t.innerHTML="")}function fe(){if(h?.getCurrentTime)try{return h.getCurrentTime()}catch{}return Math.max(0,ot+(Date.now()-Ot)/1e3)}function K(t,e=0,a=""){let s=A(t);if(!s)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}Ut(),Rt();let l=i("#yt-player-container"),n=i("#yt-player-panel");if(!l||!n)return;ut();let c=i("#yt-mini-title");c&&(c.textContent=a||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let d=i("#yt-mini-hint");d&&(d.textContent=C?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),n.classList.toggle("has-stream",!!C),n.hidden=!1,jt(()=>{let u=document.createElement("div");l.appendChild(u);try{h=new window.YT.Player(u,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:m=>{if(e>5)try{m.target.seekTo(e,!0)}catch{}me()},onStateChange:m=>{let r=m.data===window.YT.PlayerState.PLAYING,p=i("#yt-mini-play");p&&p.setAttribute("data-playing",r?"1":"0")}}})}catch{let r=e>0?`&start=${Math.floor(e)}`:"";l.innerHTML=`<iframe src="https://www.youtube.com/embed/${s}?autoplay=1&playsinline=1${r}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function Rt(){if(i("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),i("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,ut(),C=null}),i("#yt-mini-play").addEventListener("click",()=>{if(h)try{h.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?h.pauseVideo():h.playVideo()}catch{}}),i("#yt-mini-restore").addEventListener("click",()=>{C&&V(C,fe())}),i("#yt-mini-progress-bar").addEventListener("click",e=>{if(!h)return;let s=e.currentTarget.getBoundingClientRect(),l=Math.max(0,Math.min(1,(e.clientX-s.left)/s.width));try{let n=h.getDuration?.()||0;n>0&&h.seekTo(l*n,!0)}catch{}})}var Kt=!1,Vt=[];window.onYouTubeIframeAPIReady=()=>{Kt=!0,Vt.splice(0).forEach(t=>t())};function Ut(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function jt(t){if(Kt&&window.YT?.Player){t();return}Vt.push(t)}var w=null,F=0,C=null,ot=0,Ot=0,x=!1,pt="timeline",D={},Y=!1,h=null,Z=null;function he(){pt=o.activeTab||"timeline",o.activeTab="player",k(".tab-btn").forEach(t=>t.classList.remove("active")),k(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function be(){L(pt||"timeline")}function ye(){x=!0;let t=i("#stream-viewer");if(!t)return;document.body.appendChild(t),t.classList.add("sv-fullscreen"),document.body.style.overflow="hidden";let e=i("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let a=i("#sv-fullscreen-btn");a&&a.setAttribute("aria-pressed","true")}function q(t){let e=Math.floor(t),a=Math.floor(e/3600),s=Math.floor(e%3600/60),l=e%60;return a>0?`${a}:${String(s).padStart(2,"0")}:${String(l).padStart(2,"0")}`:`${s}:${String(l).padStart(2,"0")}`}function Gt(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function W(t){try{return JSON.parse(localStorage.getItem(Gt(t))||"null")||{}}catch{return{}}}function lt(t,e){try{localStorage.setItem(Gt(t),JSON.stringify(e))}catch{}}function ge(t,e,a){let s=a[e],l=s!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${v(q(s))} \u306B\u79FB\u52D5">${v(q(s))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",c=(D[e]||[]).map(m=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${m.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${v(q(m.timeSeconds))}">${v(q(m.timeSeconds))}</button>`).join(""),d=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,u=`<div class="sv-cts-row">${c}${d}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${v(t.title)}</span>
      <span class="sv-song-artist">${v(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${l}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${u}
  </div>`}async function we(t){if(D={},!t?.channel||t?.index==null)return;try{let s=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,l=await fetch(s);if(!l.ok)return;let n=await l.json();for(let c of n.items||[])D[c.songIndex]||(D[c.songIndex]=[]),D[c.songIndex].push({timeSeconds:c.timeSeconds,note:c.note??null})}catch{}let e=i("#stream-viewer");if(!e||e._currentStream!==t)return;let a=i("#sv-setlist");a&&R(a,t.songs,W(t))}function ke(t,e,a){i("#sv-cts-modal")?.remove();let s=w?.getCurrentTime?.()??0,l=q(Math.floor(s)),n=document.createElement("div");n.id="sv-cts-modal",n.className="sv-cts-modal-overlay",n.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-cts-modal-song">${v(a)}</p>
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
  `,document.body.appendChild(n);let c=()=>n.remove();n.querySelector(".sv-cts-modal-close").addEventListener("click",c),n.querySelector(".sv-cts-modal-cancel").addEventListener("click",c),n.addEventListener("click",d=>{d.target===n&&c()}),n.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let d=n.querySelector("#sv-cts-ts-input").value.trim(),u=n.querySelector("#sv-cts-note-input").value.trim()||null,m=Qt(d),r=n.querySelector("#sv-cts-status");if(m===null){r.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",r.className="sv-cts-modal-status error",r.hidden=!1;return}let p=n.querySelector("#sv-cts-submit");p.disabled=!0,p.textContent="\u9001\u4FE1\u4E2D\u2026";try{let f=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:m,submitterNote:u})});if(f.ok)r.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",r.className="sv-cts-modal-status success",r.hidden=!1,p.hidden=!0,n.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let g=await f.json().catch(()=>({}));r.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${g.error||f.statusText}`,r.className="sv-cts-modal-status error",r.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}catch(f){r.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.message}`,r.className="sv-cts-modal-status error",r.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>n.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function d(u){u.key==="Escape"&&(c(),document.removeEventListener("keydown",d))})}function zt(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function $e(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function Le(t,e){let a=zt(),s=a.find(l=>String(l.id)===String(t));return s?(s.streams||(s.streams=[]),s.streams.includes(e)||(s.streams.push(e),$e(a)),!0):!1}function Se(){let t=o.data?.streams||[],a=i("#stream-viewer")?._currentStream;if(!a)return;let s=t.findIndex(l=>l.channel===a.channel&&l.index===a.index);s<0||s>=t.length-1||V(t[s+1])}function It(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${v(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let a=dt(t.url),s=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${v(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${v(s)}</div>
    ${a?`<img class="sv-bp-nav-thumb" src="${v(a)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${v(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${$(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function Te(t){let e=i("#sv-below-player");if(!e)return;let a=o.data?.streams||[],s=a.findIndex(r=>r.channel===t.channel&&r.index===t.index),l=s>=0&&s<a.length-1?a[s+1]:null,n=s>0?a[s-1]:null,c=new Set(t.songs.map(r=>r.title)),d=a.filter((r,p)=>p!==s).map(r=>{let p=r.songs.filter(f=>c.has(f.title));return{stream:r,overlap:p.length,sharedSongs:p.slice(0,3).map(f=>f.title)}}).filter(r=>r.overlap>0).sort((r,p)=>p.overlap-r.overlap).slice(0,8),u=zt(),m=_(t);e.innerHTML=`
    <div class="sv-bp-wrap">

      <!-- \u9023\u7D9A\u518D\u751F + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${Y?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${Y?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          ${l?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${v(l.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${It(l,"older")}
          ${It(n,"newer")}
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
            <span class="sv-bp-stat-val">${$(t.date)}</span>
            <span class="sv-bp-stat-label">\u914D\u4FE1\u65E5</span>
          </div>
        </div>
      </div>

      <!-- \u95A2\u9023\u914D\u4FE1 -->
      ${d.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u95A2\u9023\u914D\u4FE1 <span class="sv-bp-sh-sub">\uFF08\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${d.map(r=>{let p=dt(r.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${v(r.stream.channel)}" data-bp-index="${r.stream.index}">
              ${p?`<img class="sv-bp-rel-thumb" src="${v(p)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${v(r.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${$(r.stream.date)}</div>
                <div class="sv-bp-rel-songs">${r.sharedSongs.map(f=>v(f)).join("\u3001")}</div>
              </div>
              <div class="sv-bp-rel-badge">${r.overlap}\u66F2</div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      <!-- \u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0 -->
      ${u.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0</div>
        <div class="sv-bp-pl-list" id="sv-bp-pl-list">
          ${u.map(r=>{let p=(r.streams||[]).includes(m);return`<button class="sv-bp-pl-btn${p?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${v(String(r.id))}"${p?" disabled":""}>
              <span class="sv-bp-pl-name">${v(r.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${p?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=r=>{let p=r.target.closest("#sv-ap-check");if(!p)return;Y=p.checked;let f=e.querySelector(".sv-bp-ap-switch");f&&f.classList.toggle("sv-bp-ap-switch--on",Y)},e.onclick=r=>{let p=r.target.closest("[data-bp-action]");if(!p)return;let f=p.dataset.bpAction;if(f==="open-stream"){let g=p.dataset.bpChannel,b=parseInt(p.dataset.bpIndex,10),H=(o.data?.streams||[]).find(mt=>mt.channel===g&&mt.index===b);H&&V(H)}else if(f==="add-pl"){let g=p.dataset.bpPlId;if(Le(g,m)){p.classList.add("sv-bp-pl-btn--added"),p.disabled=!0;let b=p.querySelector(".sv-bp-pl-status");b&&(b.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}}}function R(t,e,a){t.innerHTML=e.map((s,l)=>ge(s,l,a)).join("")}function Qt(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Zt(){if(i("#stream-viewer"))return;let t=i("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
  `,t.appendChild(e),i("#sv-close").addEventListener("click",X),i("#sv-fullscreen-btn").addEventListener("click",ye),e.querySelectorAll("[data-bc-tab]").forEach(a=>{a.addEventListener("click",()=>{X(),L(a.dataset.bcTab)})}),i("#sv-import-toggle").addEventListener("click",()=>{let a=i("#sv-import-area");a&&(a.hidden=!a.hidden,a.hidden||i("#sv-import-input")?.focus())}),i("#sv-import-cancel").addEventListener("click",()=>{let a=i("#sv-import-area");a&&(a.hidden=!0);let s=i("#sv-import-input");s&&(s.value="")}),i("#sv-import-apply").addEventListener("click",()=>{let a=e._currentStream;if(!a)return;let s=i("#sv-import-input");if(!s)return;let n=s.value.split(`
`).map(u=>Qt(u)).filter(u=>u!==null);if(!n.length)return;let c=W(a);n.forEach((u,m)=>{m<a.songs.length&&(c[m]=u)}),lt(a,c),R(i("#sv-setlist"),a.songs,c);let d=i("#sv-import-area");d&&(d.hidden=!0),s.value=""}),i("#sv-setlist").addEventListener("click",a=>{let s=a.target.closest("[data-action]");if(!s)return;let l=parseInt(s.dataset.idx,10),n=e._currentStream;if(!n)return;let c=W(n);if(s.dataset.action==="seek"){if(c[l]!=null&&w?.seekTo){w.seekTo(c[l],!0);try{w.playVideo()}catch{}}}else if(s.dataset.action==="set-ts"){let d=w?.getCurrentTime?.();d!=null&&(c[l]=Math.floor(d),lt(n,c),R(i("#sv-setlist"),n.songs,c))}else if(s.dataset.action==="del-ts")delete c[l],lt(n,c),R(i("#sv-setlist"),n.songs,c);else if(s.dataset.action==="cts-seek"){let d=Number(s.dataset.ctsSeconds);if(!isNaN(d)&&w?.seekTo){w.seekTo(d,!0);try{w.playVideo()}catch{}}}else if(s.dataset.action==="cts-propose"){let d=n.songs[l];ke(n,l,d?.title||`\u66F2 ${l+1}`)}})}function V(t,e=0){if(!t?.url)return;let a=A(t.url);if(!a){K(t.url);return}Zt(),Ut();let s=i("#yt-player-panel");if(s&&!s.hidden&&(s.hidden=!0,ut()),C=null,x){x=!1;let g=i("#stream-viewer");if(g){g.classList.remove("sv-fullscreen");let b=i("#panel-player");b&&b.appendChild(g)}document.body.style.overflow=""}x=!1,he();let l=i("#stream-viewer");l.classList.remove("sv-fullscreen"),l._currentStream=t;let n=++F,c=i("#sv-bc-title");c&&(c.textContent=t.title||"\u914D\u4FE1");let d=i("#sv-stream-meta");d&&(d.textContent=`${$(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let u=i("#sv-yt-link");u&&(u.href=t.url);let m=i("#sv-song-count");m&&(m.textContent=`${t.songs.length}\u66F2`),D={};let r=W(t);R(i("#sv-setlist"),t.songs,r),we(t),Te(t),l.hidden=!1,document.body.style.overflow="",setTimeout(()=>{i("#sv-close")?.focus({preventScroll:!0})},50),w=null;let p=i("#sv-player-wrap");p.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let f=Math.floor(e);jt(()=>{if(n!==F||l.hidden)return;p.innerHTML="";let g=document.createElement("div");p.appendChild(g);try{w=new window.YT.Player(g,{videoId:a,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...f>0?{start:f}:{}},events:{onReady:b=>{try{b.target.setPlaybackQuality("hd1080")}catch{}try{b.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(f>5)try{b.target.seekTo(f,!0)}catch{}},onStateChange:b=>{n===F&&b.data===window.YT.PlayerState.ENDED&&Y&&Se()},onError:()=>{n===F&&(p.innerHTML=`<iframe src="https://www.youtube.com/embed/${v(a)}?autoplay=1&playsinline=1&rel=0${f>0?`&start=${f}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{p.innerHTML=`<iframe src="https://www.youtube.com/embed/${v(a)}?autoplay=1&playsinline=1&rel=0${f>0?`&start=${f}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function X(){let t=i("#stream-viewer");if(!t)return;if(x){x=!1,t.classList.remove("sv-fullscreen"),document.body.style.overflow="";let n=i("#panel-player");n&&n.appendChild(t);let c=i("#sv-close");c&&(c.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let d=i("#sv-fullscreen-btn");d&&d.setAttribute("aria-pressed","false");return}let e=t._currentStream,a=w?.getCurrentTime?.()??0,s=e?.url?A(e.url):"";++F,t.hidden=!0,t._currentStream=null,w=null;let l=i("#sv-player-wrap");l&&(l.innerHTML=""),document.body.style.overflow="",be(),s&&e?.url&&(C=e,ot=Math.floor(a),Ot=Date.now(),K(e.url,ot,e.title||""))}window.__openStreamViewer=V;function Jt(t){let e=Q(t),a=i("#song-modal"),s=i("#song-modal-body"),l=i("#song-modal-title");if(!e||!a||!s||!l)return;yt(e),l.textContent=e.title;let n=(e.streamRefs||[]).slice(0,8).map(u=>({...u,thumbnail:dt(u.url),thumbnailFallback:pe(u.url),thumbnailTiny:ve(u.url),detailKey:_(u)})),c=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),d=et(e.key);s.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${v(e.key)}">${v(e.artist)}</button>
        <div class="song-detail-tags">${c.map(u=>`<span class="tag-badge">${v(u)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${$(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${d?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${v(e.key)}">${d?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${v(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${n.length?n.map(u=>`
        <div class="song-detail-stream">
          ${u.thumbnail&&u.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${v(u.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${v(u.thumbnail)}" data-fallback="${v(u.thumbnailFallback)}" data-tiny="${v(u.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${v(u.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${v(e.key)}" data-streamkey="${v(u.detailKey)}">
            <span>${$(u.date)}</span>
            <strong>${v(u.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,a.hidden=!1,i("#song-modal-close")?.focus()}function Ee(){let t=i("#song-modal"),e=i("#song-modal-close");if(!t||!e)return;let a=()=>{t.hidden=!0};e.addEventListener("click",a),t.addEventListener("click",s=>{s.target===t&&a();let l=s.target.closest("[data-inline-youtube]");if(l){s.preventDefault(),s.stopPropagation(),K(l.dataset.inlineYoutube);return}let n=s.target.closest("[data-detail-action]");if(n){if(s.stopPropagation(),n.dataset.detailAction==="close"&&a(),n.dataset.detailAction==="favorite"){let c=n.dataset.songkey;ft(c);let d=et(c);n.textContent=d?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",n.classList.toggle("primary",d),n.classList.toggle("ghost",!d)}if(n.dataset.detailAction==="timeline"){let c=Q(n.dataset.songkey);a(),c&&re(c)}if(n.dataset.detailAction==="stream"){let c=Q(n.dataset.songkey),d=c?.streamRefs?.find(u=>_(u)===n.dataset.streamkey);a(),c&&d&&de(c,d)}if(n.dataset.detailAction==="artist"){let c=Q(n.dataset.songkey);a(),c&&ue(c)}}}),t.addEventListener("error",s=>{let l=s.target.closest?.(".song-detail-thumb");if(!l)return;let n=l.dataset.fallback||l.dataset.tiny||"";if(n&&l.src!==n){l.src=n,l.dataset.fallback===n?delete l.dataset.fallback:delete l.dataset.tiny;return}l.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",s=>{s.key==="Escape"&&!t.hidden&&a()})}var At=!1;function xe(){if(!o.data)return;let{stats:t,streams:e=[]}=o.data,a=e[0]?.date||null,s=at(a),l=t.dataGeneratedDate||o.channelData?.dataGeneratedDate||null,n=at(l),c=t.channelLabel||t.channelId||"",d=c?`<span class="badge accent" style="margin-right:8px;">${v(c)}</span>`:"";i("#updated-info").innerHTML=d+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${$(l)||"\u2014"}</strong>`+(n!=null?` <span class="badge">${n}\u65E5\u524D</span>`:"");let u=i("#stats-grid");if(!At)u.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${S(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${S(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${S(t.streams)}<span class="stat-unit">\u56DE</span></div>
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
        <div class="stat-value">${Ht(o.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,At=!0;else{let m=u.querySelectorAll(".stat-value");m.length>=6&&(m[0].textContent=S(t.total),m[0].innerHTML+='<span class="stat-unit">\u56DE</span>',m[1].textContent=S(t.repertoire),m[1].innerHTML+='<span class="stat-unit">\u66F2</span>',m[2].textContent=S(t.streams),m[2].innerHTML+='<span class="stat-unit">\u56DE</span>',m[3].textContent=t.avgPerStream,m[3].innerHTML+='<span class="stat-unit">\u66F2</span>',m[4].textContent=s??"\u2014",m[4].innerHTML+='<span class="stat-unit">\u65E5</span>',m[5].textContent=Ht(o.data),m[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function Ht(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,a=t.streams[0].date;return Math.floor((a-e)/864e5)+1}function _e(){i("#loading").hidden=!1,i("#error").hidden=!0}function Ce(){i("#loading").hidden=!0}function Me(t){let e=i("#loading"),a=i("#error"),s=i("#err-detail");e&&(e.hidden=!0),a&&(a.hidden=!1),s&&(s.textContent=t&&t.message?t.message:String(t))}function Pe(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let a=document.getElementById("hero-ch-bg");a&&(a.dataset.mode=t||"all")}var De={new:{name:"\u5922\u5DDD\u304B\u306A\u3046",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:"\u5922\u5DDD\u304B\u306A\u3046\u306E\u73FE\u884C\u30C1\u30E3\u30F3\u30CD\u30EB\u3002\u6B4C\u67A0\u3092\u4E2D\u5FC3\u306B\u6D3B\u52D5\u4E2D\u3002"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:"\u5922\u5DDD\u304B\u306A\u3046\u306E\u65E7\u30C1\u30E3\u30F3\u30CD\u30EB\uFF08\u301C2024\u5E749\u6708\uFF09\u3002\u6B4C\u67A0\u30A2\u30FC\u30AB\u30A4\u30D6\u591A\u6570\u3002"}};function z(t){let e=De[t];if(!e)return"";let a=o.channelData?.channels?.[t]||null,s=a?`
    <div class="ch-card-stats">
      <div class="ch-card-stat"><span class="ch-card-stat-val">${a.streams}</span><span class="ch-card-stat-lbl">\u6B4C\u67A0</span></div>
      <div class="ch-card-stat"><span class="ch-card-stat-val">${a.repertoire}</span><span class="ch-card-stat-lbl">\u66F2\u76EE</span></div>
      <div class="ch-card-stat"><span class="ch-card-stat-val">${S(a.total)}</span><span class="ch-card-stat-lbl">\u6B4C\u5531\u56DE\u6570</span></div>
      <div class="ch-card-stat"><span class="ch-card-stat-val">${a.updateDate?.slice(0,7)||"\u2014"}</span><span class="ch-card-stat-lbl">\u6700\u7D42\u66F4\u65B0</span></div>
    </div>`:"";return`
    <div class="ch-card ch-card--${t}">
      <div class="ch-card-banner ch-card-banner--${t}">
        <span class="ch-card-banner-label">${v(e.label)}</span>
      </div>
      <div class="ch-card-body">
        <div class="ch-card-header">
          <div class="ch-card-avatar ch-card-avatar--${t}">${t==="new"?"\u65B0":"\u65E7"}</div>
          <div class="ch-card-meta">
            <div class="ch-card-name">${v(e.name)}</div>
            <div class="ch-card-handle">${v(e.handle)}</div>
          </div>
        </div>
        ${s}
        <p class="ch-card-desc">${v(e.desc)}</p>
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${v(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u3067\u958B\u304F
          </a>
        </div>
      </div>
    </div>`}function Ie(t){let e=i("#ch-modal"),a=i("#ch-modal-body");if(!e||!a)return;let s="";t==="new"?s=z("new"):t==="old"?s=z("old"):s=z("new")+z("old"),a.innerHTML=s,e.hidden=!1,i("#ch-modal-close")?.focus()}function Ae(){let t=i("#ch-modal"),e=i("#ch-modal-close");if(!t||!e)return;let a=()=>{t.hidden=!0};e.addEventListener("click",a),t.addEventListener("click",s=>{s.target===t&&a()}),document.querySelectorAll("[data-ch-modal]").forEach(s=>{s.addEventListener("click",()=>Ie(s.dataset.chModal))})}function He(){let t=i("#help-modal"),e=i("#help-btn"),a=i("#help-close");if(!t||!e||!a)return;let s=()=>{t.hidden=!1,a.focus()},l=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",s),a.addEventListener("click",l),t.addEventListener("click",n=>{n.target===t&&l()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&l()})}function Ne(){let t=i("#welcome-tip"),e=i("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let a=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(a,{timeout:5e3}):window.setTimeout(a,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function vt(){_e();try{let t=await wt();o.channelData=t,!I&&!t.fullLoaded&&Ft();let e=nt();o.songsQuery=e.q,o.activeTab=J(e.tab)?e.tab:"dashboard",Yt(o.activeTab);let a=e.channel||o.channel||N;if(E(a)||(a=N),!E(a)){let s=Object.keys(t.channels)[0];s&&(a=s)}if(!E(a))throw new Error("No channel data could be loaded");ce(),Ce(),tt(a,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0})}catch(t){console.error("[init] failed:",t),Me(t)}}function Be(){if(!o.channelData)return;let t=nt();o.songsQuery=t.q,t.channel!==o.channel&&E(t.channel)&&tt(t.channel,{resetSearch:!1,updateUrl:!1}),L(t.tab,{updateUrl:!1})}k(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,a=i("#stream-viewer");if(e!=="player"&&a&&!a.hidden&&!x){pt=e,X();return}L(e)})});k(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||tt(t.dataset.channel))})});window.addEventListener("popstate",Be);k("[data-audience]").forEach(t=>{t.addEventListener("click",()=>ie(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),rt(e.dataset.artistSearch||e.textContent||"");return}let a=t.target.closest("[data-playlist-add]");if(a){t.preventDefault(),t.stopPropagation();let c=a.dataset.playlistAdd,d=a.dataset.streamTitle||"";import("./chunk-OWMXHPOY.js").then(u=>u.showAddToPlaylistModal(c,d));return}let s=t.target.closest("[data-stream-play]");if(s){t.preventDefault(),t.stopPropagation();let c=s.dataset.streamPlay,d=(o.data?.streams||[]).find(u=>_(u)===c);d?.url?V(d):s.dataset.inlineYoutube&&K(s.dataset.inlineYoutube);return}let l=t.target.closest("[data-inline-youtube]");if(l){t.preventDefault(),t.stopPropagation(),K(l.dataset.inlineYoutube);return}if(bt(t.target))return;let n=t.target.closest("[data-songkey]");n&&Jt(n.dataset.songkey)});i("#retry-btn").addEventListener("click",vt);i("#reload-btn").addEventListener("click",vt);He();Ae();Rt();Zt();Ee();le();oe();Ne();xt(t=>{t.type==="song"?Jt(t.song.key):t.type==="artist"?rt(t.artist):t.type==="stream"&&(o.timelineFocus=_(t.stream),o.timelineFilter=null,o.timelineLimit=9999,L("timeline"),i("#panel-timeline")?.scrollIntoView({behavior:"smooth",block:"start"}))});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,a=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!a&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),_t();return}if(t.key==="t"&&!a&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),$t();return}if(t.key==="?"&&!a&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let l=i("#help-modal");l&&l.hidden&&(l.hidden=!1,i("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let l=i("#stream-viewer"),n=!!i("#panel-player.active");if(l&&!l.hidden&&(x||n)){t.preventDefault(),X();return}if(Ct()){t.preventDefault(),B();return}let c=i("#song-modal");if(c&&!c.hidden)return;let d=i("#ch-modal");if(d&&!d.hidden){d.hidden=!0;return}let u=i("#help-modal");if(u&&!u.hidden){u.hidden=!0,i("#help-btn")?.focus();return}let m=i("#songs-search");m&&document.activeElement===m&&m.value&&(t.preventDefault(),m.value="",m.dispatchEvent(new Event("input",{bubbles:!0})))}});St(()=>{o.data&&(st(),(o.activeTab==="dashboard"||o.activeTab==="analytics")&&M())});function Fe(){vt()}Fe();
