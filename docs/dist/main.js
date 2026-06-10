import{b as yt,c as gt,d as wt,i as kt,k as st,l as R}from"./chunk-DSNH5IKV.js";import{a as $t,b as Lt,e as nt,f as St}from"./chunk-SIADDXVK.js";import{a as Y}from"./chunk-MKJIXTK4.js";import{I as at,J as $,L as C,Q as x,R as bt,a as ft,b as et,c as ht,e as o,f as i,g as k,i as u}from"./chunk-6YA3HG5E.js";var y=-1,L=[],it=null;function xt(t){it=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",n=>{n.target===e&&B()});let a=document.getElementById("omni-input");a.addEventListener("input",()=>Ct(a.value)),a.addEventListener("keydown",Xt),document.getElementById("omni-listbox").addEventListener("click",n=>{let l=n.target.closest("[data-omni-idx]");l&&Mt(Number(l.dataset.omniIdx))})}function _t(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,y=-1,L=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Ct("")}function B(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),y=-1}function Pt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Xt(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),y=Math.min(y+1,e.length-1),Tt(e)):t.key==="ArrowUp"?(t.preventDefault(),y=Math.max(y-1,-1),Tt(e)):t.key==="Enter"?(t.preventDefault(),y>=0&&L[y]&&Mt(y)):t.key==="Escape"&&(t.preventDefault(),B())}function Tt(t){t.forEach((e,a)=>{e.classList.toggle("is-active",a===y),e.setAttribute("aria-selected",String(a===y))}),y>=0&&t[y]?.scrollIntoView({block:"nearest"})}function Mt(t){let e=L[t];!e||!it||(B(),it(e))}function Ct(t){let e=document.getElementById("omni-listbox");if(!e)return;y=-1,L=[];let a=o.data?.songs||[],n=o.data?.streams||[],l=t.trim().toLowerCase(),s="",r=0;if(!o.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!l){let c=a.slice(0,8);if(c.length){s+=V("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let p of c)L.push({type:"song",song:p}),s+=Et(p,r++,"")}e.innerHTML=s||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let d=a.filter(c=>D(c.title).includes(l)||D(c.artist).includes(l)).slice(0,8);if(d.length){s+=V("\u{1F3B5} \u66F2");for(let c of d)L.push({type:"song",song:c}),s+=Et(c,r++,l)}let v=new Set,m=[];for(let c of a)if(D(c.artist).includes(l)&&!v.has(c.artist)&&(v.add(c.artist),m.push(c.artist),m.length>=4))break;if(m.length){s+=V("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let c of m){let p=a.filter(f=>f.artist===c).length;L.push({type:"artist",artist:c}),s+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${O(u(c),l)}</span>
          <span class="omni-item-meta">${p}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(n.length){let c=n.filter(p=>D(p.title).includes(l)||p.songs?.some(f=>D(f.title).includes(l)||D(f.artist).includes(l))).slice(0,5);if(c.length){s+=V("\u{1F4C5} \u914D\u4FE1\u67A0");for(let p of c){L.push({type:"stream",stream:p});let f=p.channel==="new"?"\u65B0ch":p.channel==="old"?"\u65E7ch":"";s+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${O(u(p.title||"\u914D\u4FE1"),l)}</span>
            <span class="omni-item-meta">${$(p.date)}${f?" \xB7 "+f:""} \xB7 ${p.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}s||(s=`<div class="omni-empty">\u300C${u(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=s}function V(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function Et(t,e,a){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${O(u(t.title),a)}</span>
      <span class="omni-item-meta">${O(u(t.artist||""),a)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function D(t){return String(t||"").toLowerCase()}function O(t,e){if(!e)return t;let n=t.toLowerCase().indexOf(e);return n<0?t:t.slice(0,n)+'<mark class="hl">'+t.slice(n,n+e.length)+"</mark>"+t.slice(n+e.length)}Lt();ht();var Nt={dashboard:()=>import("./chunk-5PGBMNJS.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-ESHPASDY.js").then(t=>t.renderRanking),songs:()=>import("./chunk-DKUP6YRL.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-5GZHGOGX.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-3D4M2QCZ.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-PWLV57AH.js").then(t=>t.renderPlaylists)},G=new Map,Dt=0,A=null;function Z(t){return Object.prototype.hasOwnProperty.call(Nt,t)}async function Wt(t){G.has(t)||G.set(t,Nt[t]());try{return await G.get(t)}catch(e){throw G.delete(t),e}}function Yt(t){return["dashboard","timeline","analytics"].includes(t)}function te(t,e={}){let a=i(`#panel-${t}`);if(!a)return;let n={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};a.innerHTML=`
    <div class="state-card">
      <div class="msg">${u(n[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function ee(t){let e=i(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function ae(t){if(o.channelData?.fullLoaded)return;o.channelData=t;let e=S(o.channel)?o.channel:Y,a=S(e);a&&(o.data=a),!Yt(o.activeTab)&&o.data&&P(o.activeTab,{autoLoad:!1})}function ne(t){o.channelData=t,o.channelData.fullLoaded=!0;let e=S(o.channel)?o.channel:Y;tt(e,{resetSearch:!1,updateUrl:!1,render:!1}),P(o.activeTab,{autoLoad:!1})}function Bt(){return A=gt({meta:o.channelData,onSongsReady:ae}).then(ne).finally(()=>{A=null}),A}async function se(){o.channelData?.fullLoaded||(A||Bt(),await A)}async function P(t=o.activeTab,e={}){if(t!=="playlists"&&(!o.data||!Z(t))||!Z(t))return;let a=o.channelData?.partialLoaded||o.channelData?.fullLoaded,n=o.channelData?.fullLoaded;if(t==="playlists"?!1:Yt(t)?!n:!a)if(e.autoLoad){ee(t);try{await se()}catch(r){console.error("[data] full load failed",r);let d=i(`#panel-${t}`);d&&(d.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${u(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${u(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,d.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{P(t,{autoLoad:!0})}));return}}else{te(t,{initial:e.initial});return}let s=++Dt;try{let r=await Wt(t);if(s!==Dt||t!==o.activeTab||!o.data)return;t==="songs"&&kt(o.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let d=i(`#panel-${t}`);d&&(d.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${u(r?.message||String(r))}</div>
        </div>
      `)}}function E(t,e={}){Z(t)||(t="dashboard"),o.activeTab=t,Ut(t),e.updateUrl!==!1&&R({tab:t}),P(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Ut(t){k(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),k(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function S(t){return o.channelData?t==="all"?o.channelData.combined:o.channelData.channels[t]||null:null}function tt(t,e={}){let a=S(t);a&&(o.channel=t,Ce(t),o.data=a,o.timelineFilter=null,o.timelineFocus=null,o.timelineLimit=12,o.songsLimit=100,e.resetSearch!==!1&&(o.songsQuery="",o.songsGenre="all"),nt(),k("#channel-switch [data-channel]").forEach(n=>n.classList.toggle("active",n.dataset.channel===t)),rt(),e.updateUrl!==!1&&R({tab:o.activeTab,channel:t,q:o.songsQuery}),xe(),e.render!==!1&&P(o.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function ie(t,e={}){o.audience=t==="singer"?"singer":"listener",o.singerMode=o.audience==="singer",o.singerMode||(o.singerPreset="all"),k(".audience-switch [data-audience]").forEach(a=>{a.classList.toggle("active",a.dataset.audience===o.audience)}),document.body.dataset.audience=o.audience,rt(),o.audience==="singer"?(o.songsLimit=100,E("songs",{autoLoad:e.autoLoad!==!1})):o.data&&P(o.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function rt(){let t=i("#mobile-menu-label");if(!t)return;let e=i("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",a=i("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${a}`}function le(){let t=i("#mobile-menu-toggle"),e=i("#mobile-menu-state"),a=i("#topbar-actions");if(!t||!e||!a)return;let n=s=>{e.checked=s,a.classList.toggle("is-open",s),t.setAttribute("aria-expanded",String(s))},l=()=>{n(!1),t.focus()};t.addEventListener("click",s=>{s.stopPropagation(),requestAnimationFrame(()=>n(e.checked))}),t.addEventListener("keydown",s=>{s.key!=="Enter"&&s.key!==" "||(s.preventDefault(),n(!e.checked))}),e.addEventListener("change",()=>{n(e.checked)}),document.addEventListener("click",s=>{a.classList.contains("is-open")&&(s.target.closest("#topbar-actions")||s.target.closest("#mobile-menu-toggle")||s.target.closest("#mobile-menu-state")||l())}),document.addEventListener("keydown",s=>{s.key==="Escape"&&l()}),a.addEventListener("click",s=>{s.stopPropagation()}),rt()}function oe(){let t=i("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),a=!1,n=420,l=()=>{!e||e.src||(e.src=e.dataset.src||"")},s=()=>{a=!1;let d=window.scrollY>n;d&&l(),t.hidden=!d,t.classList.toggle("is-visible",d),t.setAttribute("aria-hidden",String(!d)),t.tabIndex=d?0:-1},r=()=>{a||(a=!0,requestAnimationFrame(s))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),s()}function re(){if(o.channelData)for(let t of k("#channel-switch [data-channel]")){let e=t.dataset.channel,a=e==="all"?!!o.channelData.combined:!!(o.channelData.channels&&o.channelData.channels[e]);t.disabled=!a,a?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function ce({key:t,title:e,artist:a}){o.timelineFilter&&o.timelineFilter.key===t&&o.activeTab==="timeline"?o.timelineFilter=null:o.timelineFilter={key:t,title:e,artist:a},o.timelineFocus=null,o.timelineLimit=12,E("timeline"),i("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function de(t,e){o.timelineFilter={key:t.key,title:t.title,artist:t.artist},o.timelineFocus=C(e),o.timelineLimit=9999,E("timeline"),i("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function ue(t){ct(t.artist||"")}function ct(t){let e=String(t||"").replace(/"/g,"");o.songsQuery=e?`artist:"${e}"`:"",o.songsLimit=100,R({tab:"songs",q:o.songsQuery}),E("songs",{updateUrl:!1})}function Q(t){return(o.data?.songs||[]).find(e=>e.key===t)||null}function H(t){let e=String(t||""),a=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let n of a){let l=e.match(n);if(l)return l[1]}return""}function dt(t){let e=H(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function pe(t){let e=H(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function ve(t){let e=H(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function Ft(){J&&(clearInterval(J),J=null)}function me(){Ft(),J=setInterval(()=>{if(h)try{let t=h.getDuration?.()||0,e=h.getCurrentTime?.()||0,a=t>0?Math.min(e/t*100,100):0,n=i("#yt-mini-progress-fill");n&&(n.style.width=`${a}%`);let s=h.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,r=i("#yt-mini-play");r&&r.setAttribute("data-playing",s?"1":"0")}catch{}},400)}function ut(){if(Ft(),h){try{h.destroy()}catch{}h=null}let t=i("#yt-player-container");t&&(t.innerHTML="")}function fe(){if(h?.getCurrentTime)try{return h.getCurrentTime()}catch{}return Math.max(0,ot+(Date.now()-Ot)/1e3)}function q(t,e=0,a=""){let n=H(t);if(!n)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}Rt(),Kt();let l=i("#yt-player-container"),s=i("#yt-player-panel");if(!l||!s)return;ut();let r=i("#yt-mini-title");r&&(r.textContent=a||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let d=i("#yt-mini-hint");d&&(d.textContent=_?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),s.classList.toggle("has-stream",!!_),s.hidden=!1,Vt(()=>{let v=document.createElement("div");l.appendChild(v);try{h=new window.YT.Player(v,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:m=>{if(e>5)try{m.target.seekTo(e,!0)}catch{}me()},onStateChange:m=>{let c=m.data===window.YT.PlayerState.PLAYING,p=i("#yt-mini-play");p&&p.setAttribute("data-playing",c?"1":"0")}}})}catch{let c=e>0?`&start=${Math.floor(e)}`:"";l.innerHTML=`<iframe src="https://www.youtube.com/embed/${n}?autoplay=1&playsinline=1${c}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function Kt(){if(i("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),i("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,ut(),_=null}),i("#yt-mini-play").addEventListener("click",()=>{if(h)try{h.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?h.pauseVideo():h.playVideo()}catch{}}),i("#yt-mini-restore").addEventListener("click",()=>{_&&N(_,fe())}),i("#yt-mini-progress-bar").addEventListener("click",e=>{if(!h)return;let n=e.currentTarget.getBoundingClientRect(),l=Math.max(0,Math.min(1,(e.clientX-n.left)/n.width));try{let s=h.getDuration?.()||0;s>0&&h.seekTo(l*s,!0)}catch{}})}var jt=!1,qt=[];window.onYouTubeIframeAPIReady=()=>{jt=!0,qt.splice(0).forEach(t=>t())};function Rt(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function Vt(t){if(jt&&window.YT?.Player){t();return}qt.push(t)}var w=null,U=0,_=null,ot=0,Ot=0,T=!1,pt="timeline",I={},F=!1,h=null,J=null;function he(){pt=o.activeTab||"timeline",o.activeTab="player",k(".tab-btn").forEach(t=>t.classList.remove("active")),k(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function be(){E(pt||"timeline")}function ye(){T=!0;let t=i("#stream-viewer");if(!t)return;document.body.appendChild(t),t.classList.add("sv-fullscreen"),document.body.style.overflow="hidden";let e=i("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let a=i("#sv-fullscreen-btn");a&&a.setAttribute("aria-pressed","true")}function K(t){let e=Math.floor(t),a=Math.floor(e/3600),n=Math.floor(e%3600/60),l=e%60;return a>0?`${a}:${String(n).padStart(2,"0")}:${String(l).padStart(2,"0")}`:`${n}:${String(l).padStart(2,"0")}`}function Gt(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function X(t){try{return JSON.parse(localStorage.getItem(Gt(t))||"null")||{}}catch{return{}}}function lt(t,e){try{localStorage.setItem(Gt(t),JSON.stringify(e))}catch{}}function ge(t,e,a){let n=a[e],l=n!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${u(K(n))} \u306B\u79FB\u52D5">${u(K(n))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",r=(I[e]||[]).map(m=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${m.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${u(K(m.timeSeconds))}">${u(K(m.timeSeconds))}</button>`).join(""),d=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,v=`<div class="sv-cts-row">${r}${d}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${u(t.title)}</span>
      <span class="sv-song-artist">${u(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${l}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${v}
  </div>`}async function we(t){if(I={},!t?.channel||t?.index==null)return;try{let n=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,l=await fetch(n);if(!l.ok)return;let s=await l.json();for(let r of s.items||[])I[r.songIndex]||(I[r.songIndex]=[]),I[r.songIndex].push({timeSeconds:r.timeSeconds,note:r.note??null})}catch{}let e=i("#stream-viewer");if(!e||e._currentStream!==t)return;let a=i("#sv-setlist");a&&j(a,t.songs,X(t))}function ke(t,e,a){i("#sv-cts-modal")?.remove();let n=w?.getCurrentTime?.()??0,l=K(Math.floor(n)),s=document.createElement("div");s.id="sv-cts-modal",s.className="sv-cts-modal-overlay",s.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-cts-modal-song">${u(a)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${u(l)}" placeholder="0:00" autocomplete="off">
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
  `,document.body.appendChild(s);let r=()=>s.remove();s.querySelector(".sv-cts-modal-close").addEventListener("click",r),s.querySelector(".sv-cts-modal-cancel").addEventListener("click",r),s.addEventListener("click",d=>{d.target===s&&r()}),s.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let d=s.querySelector("#sv-cts-ts-input").value.trim(),v=s.querySelector("#sv-cts-note-input").value.trim()||null,m=Qt(d),c=s.querySelector("#sv-cts-status");if(m===null){c.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",c.className="sv-cts-modal-status error",c.hidden=!1;return}let p=s.querySelector("#sv-cts-submit");p.disabled=!0,p.textContent="\u9001\u4FE1\u4E2D\u2026";try{let f=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:m,submitterNote:v})});if(f.ok)c.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",c.className="sv-cts-modal-status success",c.hidden=!1,p.hidden=!0,s.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let g=await f.json().catch(()=>({}));c.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${g.error||f.statusText}`,c.className="sv-cts-modal-status error",c.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}catch(f){c.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.message}`,c.className="sv-cts-modal-status error",c.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>s.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function d(v){v.key==="Escape"&&(r(),document.removeEventListener("keydown",d))})}function zt(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function $e(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function Le(t,e){let a=zt(),n=a.find(l=>String(l.id)===String(t));return n?(n.streams||(n.streams=[]),n.streams.includes(e)||(n.streams.push(e),$e(a)),!0):!1}function Se(){let t=o.data?.streams||[],a=i("#stream-viewer")?._currentStream;if(!a)return;let n=t.findIndex(l=>l.channel===a.channel&&l.index===a.index);n<0||n>=t.length-1||N(t[n+1])}function It(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${u(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let a=dt(t.url),n=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${u(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${u(n)}</div>
    ${a?`<img class="sv-bp-nav-thumb" src="${u(a)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${u(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${$(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function Te(t){let e=i("#sv-below-player");if(!e)return;let a=o.data?.streams||[],n=a.findIndex(c=>c.channel===t.channel&&c.index===t.index),l=n>=0&&n<a.length-1?a[n+1]:null,s=n>0?a[n-1]:null,r=new Set(t.songs.map(c=>c.title)),d=a.filter((c,p)=>p!==n).map(c=>{let p=c.songs.filter(f=>r.has(f.title));return{stream:c,overlap:p.length,sharedSongs:p.slice(0,3).map(f=>f.title)}}).filter(c=>c.overlap>0).sort((c,p)=>p.overlap-c.overlap).slice(0,8),v=zt(),m=C(t);e.innerHTML=`
    <div class="sv-bp-wrap">

      <!-- \u9023\u7D9A\u518D\u751F + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${F?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${F?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          ${l?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${u(l.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${It(l,"older")}
          ${It(s,"newer")}
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
          ${d.map(c=>{let p=dt(c.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${u(c.stream.channel)}" data-bp-index="${c.stream.index}">
              ${p?`<img class="sv-bp-rel-thumb" src="${u(p)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${u(c.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${$(c.stream.date)}</div>
                <div class="sv-bp-rel-songs">${c.sharedSongs.map(f=>u(f)).join("\u3001")}</div>
              </div>
              <div class="sv-bp-rel-badge">${c.overlap}\u66F2</div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      <!-- \u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0 -->
      ${v.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0</div>
        <div class="sv-bp-pl-list" id="sv-bp-pl-list">
          ${v.map(c=>{let p=(c.streams||[]).includes(m);return`<button class="sv-bp-pl-btn${p?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${u(String(c.id))}"${p?" disabled":""}>
              <span class="sv-bp-pl-name">${u(c.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${p?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=c=>{let p=c.target.closest("#sv-ap-check");if(!p)return;F=p.checked;let f=e.querySelector(".sv-bp-ap-switch");f&&f.classList.toggle("sv-bp-ap-switch--on",F)},e.onclick=c=>{let p=c.target.closest("[data-bp-action]");if(!p)return;let f=p.dataset.bpAction;if(f==="open-stream"){let g=p.dataset.bpChannel,b=parseInt(p.dataset.bpIndex,10),M=(o.data?.streams||[]).find(mt=>mt.channel===g&&mt.index===b);M&&N(M)}else if(f==="add-pl"){let g=p.dataset.bpPlId;if(Le(g,m)){p.classList.add("sv-bp-pl-btn--added"),p.disabled=!0;let b=p.querySelector(".sv-bp-pl-status");b&&(b.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}}}function j(t,e,a){t.innerHTML=e.map((n,l)=>ge(n,l,a)).join("")}function Qt(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Jt(){if(i("#stream-viewer"))return;let t=i("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
  `,t.appendChild(e),i("#sv-close").addEventListener("click",W),i("#sv-fullscreen-btn").addEventListener("click",ye),e.querySelectorAll("[data-bc-tab]").forEach(a=>{a.addEventListener("click",()=>{W(),E(a.dataset.bcTab)})}),i("#sv-import-toggle").addEventListener("click",()=>{let a=i("#sv-import-area");a&&(a.hidden=!a.hidden,a.hidden||i("#sv-import-input")?.focus())}),i("#sv-import-cancel").addEventListener("click",()=>{let a=i("#sv-import-area");a&&(a.hidden=!0);let n=i("#sv-import-input");n&&(n.value="")}),i("#sv-import-apply").addEventListener("click",()=>{let a=e._currentStream;if(!a)return;let n=i("#sv-import-input");if(!n)return;let s=n.value.split(`
`).map(v=>Qt(v)).filter(v=>v!==null);if(!s.length)return;let r=X(a);s.forEach((v,m)=>{m<a.songs.length&&(r[m]=v)}),lt(a,r),j(i("#sv-setlist"),a.songs,r);let d=i("#sv-import-area");d&&(d.hidden=!0),n.value=""}),i("#sv-setlist").addEventListener("click",a=>{let n=a.target.closest("[data-action]");if(!n)return;let l=parseInt(n.dataset.idx,10),s=e._currentStream;if(!s)return;let r=X(s);if(n.dataset.action==="seek"){if(r[l]!=null&&w?.seekTo){w.seekTo(r[l],!0);try{w.playVideo()}catch{}}}else if(n.dataset.action==="set-ts"){let d=w?.getCurrentTime?.();d!=null&&(r[l]=Math.floor(d),lt(s,r),j(i("#sv-setlist"),s.songs,r))}else if(n.dataset.action==="del-ts")delete r[l],lt(s,r),j(i("#sv-setlist"),s.songs,r);else if(n.dataset.action==="cts-seek"){let d=Number(n.dataset.ctsSeconds);if(!isNaN(d)&&w?.seekTo){w.seekTo(d,!0);try{w.playVideo()}catch{}}}else if(n.dataset.action==="cts-propose"){let d=s.songs[l];ke(s,l,d?.title||`\u66F2 ${l+1}`)}})}function N(t,e=0){if(!t?.url)return;let a=H(t.url);if(!a){q(t.url);return}Jt(),Rt();let n=i("#yt-player-panel");if(n&&!n.hidden&&(n.hidden=!0,ut()),_=null,T){T=!1;let g=i("#stream-viewer");if(g){g.classList.remove("sv-fullscreen");let b=i("#panel-player");b&&b.appendChild(g)}document.body.style.overflow=""}T=!1,he();let l=i("#stream-viewer");l.classList.remove("sv-fullscreen"),l._currentStream=t;let s=++U,r=i("#sv-bc-title");r&&(r.textContent=t.title||"\u914D\u4FE1");let d=i("#sv-stream-meta");d&&(d.textContent=`${$(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let v=i("#sv-yt-link");v&&(v.href=t.url);let m=i("#sv-song-count");m&&(m.textContent=`${t.songs.length}\u66F2`),I={};let c=X(t);j(i("#sv-setlist"),t.songs,c),we(t),Te(t),l.hidden=!1,document.body.style.overflow="",setTimeout(()=>{i("#sv-close")?.focus({preventScroll:!0})},50),w=null;let p=i("#sv-player-wrap");p.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let f=Math.floor(e);Vt(()=>{if(s!==U||l.hidden)return;p.innerHTML="";let g=document.createElement("div");p.appendChild(g);try{w=new window.YT.Player(g,{videoId:a,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...f>0?{start:f}:{}},events:{onReady:b=>{try{b.target.setPlaybackQuality("hd1080")}catch{}try{b.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(f>5)try{b.target.seekTo(f,!0)}catch{}},onStateChange:b=>{if(s===U){if(b.data===window.YT.PlayerState.PLAYING)try{b.target.setPlaybackQuality("hd1080")}catch{}b.data===window.YT.PlayerState.ENDED&&F&&Se()}},onError:()=>{s===U&&(p.innerHTML=`<iframe src="https://www.youtube.com/embed/${u(a)}?autoplay=1&playsinline=1&rel=0${f>0?`&start=${f}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{p.innerHTML=`<iframe src="https://www.youtube.com/embed/${u(a)}?autoplay=1&playsinline=1&rel=0${f>0?`&start=${f}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function W(){let t=i("#stream-viewer");if(!t)return;if(T){T=!1,t.classList.remove("sv-fullscreen"),document.body.style.overflow="";let s=i("#panel-player");s&&s.appendChild(t);let r=i("#sv-close");r&&(r.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let d=i("#sv-fullscreen-btn");d&&d.setAttribute("aria-pressed","false");return}let e=t._currentStream,a=w?.getCurrentTime?.()??0,n=e?.url?H(e.url):"";++U,t.hidden=!0,t._currentStream=null,w=null;let l=i("#sv-player-wrap");l&&(l.innerHTML=""),document.body.style.overflow="",be(),n&&e?.url&&(_=e,ot=Math.floor(a),Ot=Date.now(),q(e.url,ot,e.title||""))}window.__openStreamViewer=N;function Zt(t){let e=Q(t),a=i("#song-modal"),n=i("#song-modal-body"),l=i("#song-modal-title");if(!e||!a||!n||!l)return;yt(e),l.textContent=e.title;let s=(e.streamRefs||[]).slice(0,8).map(v=>({...v,thumbnail:dt(v.url),thumbnailFallback:pe(v.url),thumbnailTiny:ve(v.url),detailKey:C(v)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),d=et(e.key);n.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${u(e.key)}">${u(e.artist)}</button>
        <div class="song-detail-tags">${r.map(v=>`<span class="tag-badge">${u(v)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${$(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${d?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${u(e.key)}">${d?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${u(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${s.length?s.map(v=>`
        <div class="song-detail-stream">
          ${v.thumbnail&&v.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${u(v.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${u(v.thumbnail)}" data-fallback="${u(v.thumbnailFallback)}" data-tiny="${u(v.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${u(v.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${u(e.key)}" data-streamkey="${u(v.detailKey)}">
            <span>${$(v.date)}</span>
            <strong>${u(v.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,a.hidden=!1,i("#song-modal-close")?.focus()}function Ee(){let t=i("#song-modal"),e=i("#song-modal-close");if(!t||!e)return;let a=()=>{t.hidden=!0};e.addEventListener("click",a),t.addEventListener("click",n=>{n.target===t&&a();let l=n.target.closest("[data-inline-youtube]");if(l){n.preventDefault(),n.stopPropagation(),q(l.dataset.inlineYoutube);return}let s=n.target.closest("[data-detail-action]");if(s){if(n.stopPropagation(),s.dataset.detailAction==="close"&&a(),s.dataset.detailAction==="favorite"){let r=s.dataset.songkey;ft(r);let d=et(r);s.textContent=d?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",s.classList.toggle("primary",d),s.classList.toggle("ghost",!d)}if(s.dataset.detailAction==="timeline"){let r=Q(s.dataset.songkey);a(),r&&ce(r)}if(s.dataset.detailAction==="stream"){let r=Q(s.dataset.songkey),d=r?.streamRefs?.find(v=>C(v)===s.dataset.streamkey);a(),r&&d&&de(r,d)}if(s.dataset.detailAction==="artist"){let r=Q(s.dataset.songkey);a(),r&&ue(r)}}}),t.addEventListener("error",n=>{let l=n.target.closest?.(".song-detail-thumb");if(!l)return;let s=l.dataset.fallback||l.dataset.tiny||"";if(s&&l.src!==s){l.src=s,l.dataset.fallback===s?delete l.dataset.fallback:delete l.dataset.tiny;return}l.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&a()})}var At=!1;function xe(){if(!o.data)return;let{stats:t,streams:e=[]}=o.data,a=e[0]?.date||null,n=at(a),l=t.dataGeneratedDate||o.channelData?.dataGeneratedDate||null,s=at(l),r=t.channelLabel||t.channelId||"",d=r?`<span class="badge accent" style="margin-right:8px;">${u(r)}</span>`:"";i("#updated-info").innerHTML=d+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${$(l)||"\u2014"}</strong>`+(s!=null?` <span class="badge">${s}\u65E5\u524D</span>`:"");let v=i("#stats-grid");if(!At)v.innerHTML=`
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
        <div class="stat-value">${n??"\u2014"}<span class="stat-unit">\u65E5</span></div>
      </div>
      <div class="stat-card gold">
        <div class="stat-label">\u6D3B\u52D5\u671F\u9593</div>
        <div class="stat-value">${Ht(o.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,At=!0;else{let m=v.querySelectorAll(".stat-value");m.length>=6&&(m[0].textContent=x(t.total),m[0].innerHTML+='<span class="stat-unit">\u56DE</span>',m[1].textContent=x(t.repertoire),m[1].innerHTML+='<span class="stat-unit">\u66F2</span>',m[2].textContent=x(t.streams),m[2].innerHTML+='<span class="stat-unit">\u56DE</span>',m[3].textContent=t.avgPerStream,m[3].innerHTML+='<span class="stat-unit">\u66F2</span>',m[4].textContent=n??"\u2014",m[4].innerHTML+='<span class="stat-unit">\u65E5</span>',m[5].textContent=Ht(o.data),m[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function Ht(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,a=t.streams[0].date;return Math.floor((a-e)/864e5)+1}function _e(){i("#loading").hidden=!1,i("#error").hidden=!0}function Pe(){i("#loading").hidden=!0}function Me(t){let e=i("#loading"),a=i("#error"),n=i("#err-detail");e&&(e.hidden=!0),a&&(a.hidden=!1),n&&(n.textContent=t&&t.message?t.message:String(t))}function Ce(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let a=document.getElementById("hero-ch-bg");a&&(a.dataset.mode=t||"all")}var De={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:"\u{1F6CD}",label:"official store",url:"https://react.booth.pm"},{icon:"\u{1F310}",label:"official site",url:"https://v-react.com"},{icon:"\u{1F3B5}",label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:"\u{1F3A7}",label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:"\u25B6",label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function z(t){let e=De[t];if(!e)return"";let a=e.bannerUrl?`<img class="ch-card-banner-img" src="${u(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${u(e.label)}</span>`:`<span class="ch-card-banner-label">${u(e.label)}</span>`,n=e.avatarUrl?`<img class="ch-card-avatar-img" src="${u(e.avatarUrl)}" alt="${u(e.name)}" loading="lazy" referrerpolicy="no-referrer">`:t==="new"?"\u65B0":"\u65E7",l=e.desc?`<p class="ch-card-desc">${e.desc.split(`
`).map(r=>u(r)).join("<br>")}</p>`:"",s=e.links?.length?`
    <div class="ch-card-links">
      ${e.links.map(r=>`
        <a class="ch-card-link" href="${u(r.url)}" target="_blank" rel="noopener">
          <span class="ch-card-link-icon" aria-hidden="true">${r.icon}</span>
          <span>${u(r.label)}</span>
        </a>`).join("")}
    </div>`:"";return`
    <div class="ch-card ch-card--${t}">
      <div class="ch-card-banner ch-card-banner--${t}${e.bannerUrl?" ch-card-banner--img":""}">
        ${a}
      </div>
      <div class="ch-card-body">
        <div class="ch-card-header">
          <div class="ch-card-avatar ch-card-avatar--${t}${e.avatarUrl?" ch-card-avatar--img":""}">${n}</div>
          <div class="ch-card-meta">
            <div class="ch-card-name">${u(e.name)}</div>
            <div class="ch-card-handle">${u(e.handle)}</div>
          </div>
        </div>
        ${l}
        ${s}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${u(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u3078
          </a>
        </div>
      </div>
    </div>`}function Ie(t){let e=i("#ch-modal"),a=i("#ch-modal-body");if(!e||!a)return;let n="";t==="new"?n=z("new"):t==="old"?n=z("old"):n=z("new")+z("old"),a.innerHTML=n,e.hidden=!1,i("#ch-modal-close")?.focus()}function Ae(){let t=i("#ch-modal"),e=i("#ch-modal-close");if(!t||!e)return;let a=()=>{t.hidden=!0};e.addEventListener("click",a),t.addEventListener("click",n=>{n.target===t&&a()}),document.querySelectorAll("[data-ch-modal]").forEach(n=>{n.addEventListener("click",()=>Ie(n.dataset.chModal))})}function He(){let t=i("#help-modal"),e=i("#help-btn"),a=i("#help-close");if(!t||!e||!a)return;let n=()=>{t.hidden=!1,a.focus()},l=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",n),a.addEventListener("click",l),t.addEventListener("click",s=>{s.target===t&&l()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&!t.hidden&&l()})}function Ne(){let t=i("#welcome-tip"),e=i("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let a=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(a,{timeout:5e3}):window.setTimeout(a,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function vt(){_e();try{let t=await wt();o.channelData=t,!A&&!t.fullLoaded&&Bt();let e=st();o.songsQuery=e.q,o.activeTab=Z(e.tab)?e.tab:"dashboard",Ut(o.activeTab);let a=e.channel||o.channel||Y;if(S(a)||(a=Y),!S(a)){let n=Object.keys(t.channels)[0];n&&(a=n)}if(!S(a))throw new Error("No channel data could be loaded");re(),Pe(),tt(a,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0})}catch(t){console.error("[init] failed:",t),Me(t)}}function Ye(){if(!o.channelData)return;let t=st();o.songsQuery=t.q,t.channel!==o.channel&&S(t.channel)&&tt(t.channel,{resetSearch:!1,updateUrl:!1}),E(t.tab,{updateUrl:!1})}k(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,a=i("#stream-viewer");if(e!=="player"&&a&&!a.hidden&&!T){pt=e,W();return}E(e)})});k(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||tt(t.dataset.channel))})});window.addEventListener("popstate",Ye);k("[data-audience]").forEach(t=>{t.addEventListener("click",()=>ie(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),ct(e.dataset.artistSearch||e.textContent||"");return}let a=t.target.closest("[data-playlist-add]");if(a){t.preventDefault(),t.stopPropagation();let r=a.dataset.playlistAdd,d=a.dataset.streamTitle||"";import("./chunk-PWLV57AH.js").then(v=>v.showAddToPlaylistModal(r,d));return}let n=t.target.closest("[data-stream-play]");if(n){t.preventDefault(),t.stopPropagation();let r=n.dataset.streamPlay,d=(o.data?.streams||[]).find(v=>C(v)===r);d?.url?N(d):n.dataset.inlineYoutube&&q(n.dataset.inlineYoutube);return}let l=t.target.closest("[data-inline-youtube]");if(l){t.preventDefault(),t.stopPropagation(),q(l.dataset.inlineYoutube);return}if(bt(t.target))return;let s=t.target.closest("[data-songkey]");s&&Zt(s.dataset.songkey)});i("#retry-btn").addEventListener("click",vt);i("#reload-btn").addEventListener("click",vt);He();Ae();Kt();Jt();Ee();le();oe();Ne();xt(t=>{t.type==="song"?Zt(t.song.key):t.type==="artist"?ct(t.artist):t.type==="stream"&&N(t.stream)});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,a=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!a&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),_t();return}if(t.key==="t"&&!a&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),$t();return}if(t.key==="?"&&!a&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let l=i("#help-modal");l&&l.hidden&&(l.hidden=!1,i("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let l=i("#stream-viewer"),s=!!i("#panel-player.active");if(l&&!l.hidden&&(T||s)){t.preventDefault(),W();return}if(Pt()){t.preventDefault(),B();return}let r=i("#song-modal");if(r&&!r.hidden)return;let d=i("#ch-modal");if(d&&!d.hidden){d.hidden=!0;return}let v=i("#help-modal");if(v&&!v.hidden){v.hidden=!0,i("#help-btn")?.focus();return}let m=i("#songs-search");m&&document.activeElement===m&&m.value&&(t.preventDefault(),m.value="",m.dispatchEvent(new Event("input",{bubbles:!0})))}});St(()=>{o.data&&(nt(),(o.activeTab==="dashboard"||o.activeTab==="analytics")&&P())});function Be(){vt()}Be();
