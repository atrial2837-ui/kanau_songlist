import{b as Dt,c as Ht,d as Nt,i as Vt,k as yt,l as X}from"./chunk-3QAEH344.js";import{a as qt,b as Bt,e as bt,f as Yt}from"./chunk-SIADDXVK.js";import{a as j}from"./chunk-MKJIXTK4.js";import{a as Pt,b as ft,c as It,e as c}from"./chunk-N3S3MIXU.js";import{D as ht,E as x,G as V,L as H,M as At,a as l,b as S,d as m}from"./chunk-FKVR6ZKV.js";var $=-1,M=[],gt=null;function jt(t){gt=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",n=>{n.target===e&&F()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>Gt(s.value)),s.addEventListener("keydown",de),document.getElementById("omni-listbox").addEventListener("click",n=>{let i=n.target.closest("[data-omni-idx]");i&&Ot(Number(i.dataset.omniIdx))})}function Ft(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,$=-1,M=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Gt("")}function F(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),$=-1}function Kt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function de(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),$=Math.min($+1,e.length-1),Rt(e)):t.key==="ArrowUp"?(t.preventDefault(),$=Math.max($-1,-1),Rt(e)):t.key==="Enter"?(t.preventDefault(),$>=0&&M[$]&&Ot($)):t.key==="Escape"&&(t.preventDefault(),F())}function Rt(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===$),e.setAttribute("aria-selected",String(s===$))}),$>=0&&t[$]?.scrollIntoView({block:"nearest"})}function Ot(t){let e=M[t];!e||!gt||(F(),gt(e))}function Gt(t){let e=document.getElementById("omni-listbox");if(!e)return;$=-1,M=[];let s=c.data?.songs||[],n=c.data?.streams||[],i=t.trim().toLowerCase(),a="",o=0;if(!c.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!i){let r=s.slice(0,8);if(r.length){a+=W("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let v of r)M.push({type:"song",song:v}),a+=Ut(v,o++,"")}e.innerHTML=a||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let d=s.filter(r=>q(r.title).includes(i)||q(r.artist).includes(i)).slice(0,8);if(d.length){a+=W("\u{1F3B5} \u66F2");for(let r of d)M.push({type:"song",song:r}),a+=Ut(r,o++,i)}let p=new Set,u=[];for(let r of s)if(q(r.artist).includes(i)&&!p.has(r.artist)&&(p.add(r.artist),u.push(r.artist),u.length>=4))break;if(u.length){a+=W("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let r of u){let v=s.filter(f=>f.artist===r).length;M.push({type:"artist",artist:r}),a+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${o++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${tt(m(r),i)}</span>
          <span class="omni-item-meta">${v}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(n.length){let r=n.filter(v=>q(v.title).includes(i)||v.songs?.some(f=>q(f.title).includes(i)||q(f.artist).includes(i))).slice(0,5);if(r.length){a+=W("\u{1F4C5} \u914D\u4FE1\u67A0");for(let v of r){M.push({type:"stream",stream:v});let f=v.channel==="new"?"\u65B0ch":v.channel==="old"?"\u65E7ch":"";a+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${o++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${tt(m(v.title||"\u914D\u4FE1"),i)}</span>
            <span class="omni-item-meta">${x(v.date)}${f?" \xB7 "+f:""} \xB7 ${v.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}a||(a=`<div class="omni-empty">\u300C${m(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=a}function W(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function Ut(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${tt(m(t.title),s)}</span>
      <span class="omni-item-meta">${tt(m(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function q(t){return String(t||"").toLowerCase()}function tt(t,e){if(!e)return t;let n=t.toLowerCase().indexOf(e);return n<0?t:t.slice(0,n)+'<mark class="hl">'+t.slice(n,n+e.length)+"</mark>"+t.slice(n+e.length)}Bt();It();var Xt={dashboard:()=>import("./chunk-NX4KOKQI.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-AOWB3BNY.js").then(t=>t.renderRanking),songs:()=>import("./chunk-EQQ27U7N.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-4GOYTJ2B.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-QEXZHCSH.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-ECCZ5EGH.js").then(t=>t.renderPlaylists)},et=new Map,zt=0,B=null;function ot(t){return Object.prototype.hasOwnProperty.call(Xt,t)}async function ue(t){et.has(t)||et.set(t,Xt[t]());try{return await et.get(t)}catch(e){throw et.delete(t),e}}function Wt(t){return["dashboard","timeline","analytics"].includes(t)}function pe(t,e={}){let s=l(`#panel-${t}`);if(!s)return;let n={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${m(n[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function ve(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function me(t){if(c.channelData?.fullLoaded)return;c.channelData=t;let e=I(c.channel)?c.channel:j,s=I(e);s&&(c.data=s),!Wt(c.activeTab)&&c.data&&N(c.activeTab,{autoLoad:!1})}function fe(t){c.channelData=t,c.channelData.fullLoaded=!0;let e=I(c.channel)?c.channel:j;dt(e,{resetSearch:!1,updateUrl:!1,render:!1}),N(c.activeTab,{autoLoad:!1})}function te(){return B=Ht({meta:c.channelData,onSongsReady:me}).then(fe).finally(()=>{B=null}),B}async function he(){c.channelData?.fullLoaded||(B||te(),await B)}async function N(t=c.activeTab,e={}){if(t!=="playlists"&&(!c.data||!ot(t))||!ot(t))return;let s=c.channelData?.partialLoaded||c.channelData?.fullLoaded,n=c.channelData?.fullLoaded;if(t==="playlists"?!1:Wt(t)?!n:!s)if(e.autoLoad){ve(t);try{await he()}catch(o){console.error("[data] full load failed",o);let d=l(`#panel-${t}`);d&&(d.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${m(o?.message||String(o))}</div>
              <button class="btn primary" type="button" data-load-full-data="${m(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,d.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{N(t,{autoLoad:!0})}));return}}else{pe(t,{initial:e.initial});return}let a=++zt;try{let o=await ue(t);if(a!==zt||t!==c.activeTab||!c.data)return;t==="songs"&&Vt(c.data.songs||[]),o()}catch(o){console.error(`[${t}] render failed`,o);let d=l(`#panel-${t}`);d&&(d.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${m(o?.message||String(o))}</div>
        </div>
      `)}}function D(t,e={}){ot(t)||(t="dashboard");let s=l("#stream-viewer");if(t!=="player"&&s&&!s.hidden&&!C){pt=t,ct=e,Q({instant:!0});return}c.activeTab=t,ee(t),e.updateUrl!==!1&&X({tab:t}),N(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function ee(t){S(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),S(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function I(t){return c.channelData?t==="all"?c.channelData.combined:c.channelData.channels[t]||null:null}function dt(t,e={}){let s=I(t);s&&(c.channel=t,Ke(t),c.data=s,c.timelineFilter=null,c.timelineFocus=null,c.timelineLimit=12,c.songsLimit=100,e.resetSearch!==!1&&(c.songsQuery="",c.songsGenre="all"),bt(),S("#channel-switch [data-channel]").forEach(n=>n.classList.toggle("active",n.dataset.channel===t)),St(),e.updateUrl!==!1&&X({tab:c.activeTab,channel:t,q:c.songsQuery}),Re(),e.render!==!1&&N(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function be(t,e={}){c.audience=t==="singer"?"singer":"listener",c.singerMode=c.audience==="singer",c.singerMode||(c.singerPreset="all"),S(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===c.audience)}),document.body.dataset.audience=c.audience,St(),c.audience==="singer"?(c.songsLimit=100,D("songs",{autoLoad:e.autoLoad!==!1})):c.data&&N(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function St(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",s=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${s}`}function ye(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),s=l("#topbar-actions");if(!t||!e||!s)return;let n=a=>{e.checked=a,s.classList.toggle("is-open",a),t.setAttribute("aria-expanded",String(a))},i=()=>{n(!1),t.focus()};t.addEventListener("click",a=>{a.stopPropagation(),requestAnimationFrame(()=>n(e.checked))}),t.addEventListener("keydown",a=>{a.key!=="Enter"&&a.key!==" "||(a.preventDefault(),n(!e.checked))}),e.addEventListener("change",()=>{n(e.checked)}),document.addEventListener("click",a=>{s.classList.contains("is-open")&&(a.target.closest("#topbar-actions")||a.target.closest("#mobile-menu-toggle")||a.target.closest("#mobile-menu-state")||i())}),document.addEventListener("keydown",a=>{a.key==="Escape"&&i()}),s.addEventListener("click",a=>{a.stopPropagation()}),St()}function ge(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,n=420,i=()=>{!e||e.src||(e.src=e.dataset.src||"")},a=()=>{s=!1;let d=window.scrollY>n;d&&i(),t.hidden=!d,t.classList.toggle("is-visible",d),t.setAttribute("aria-hidden",String(!d)),t.tabIndex=d?0:-1},o=()=>{s||(s=!0,requestAnimationFrame(a))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",o,{passive:!0}),a()}function we(){if(c.channelData)for(let t of S("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!c.channelData.combined:!!(c.channelData.channels&&c.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function ke({key:t,title:e,artist:s}){c.timelineFilter&&c.timelineFilter.key===t&&c.activeTab==="timeline"?c.timelineFilter=null:c.timelineFilter={key:t,title:e,artist:s},c.timelineFocus=null,c.timelineLimit=12,D("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function $e(t,e){c.timelineFilter={key:t.key,title:t.title,artist:t.artist},c.timelineFocus=V(e),c.timelineLimit=9999,D("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Le(t){Tt(t.artist||"")}function Tt(t){let e=String(t||"").replace(/"/g,"");c.songsQuery=e?`artist:"${e}"`:"",c.songsLimit=100,X({tab:"songs",q:c.songsQuery}),D("songs",{updateUrl:!1})}function at(t){return(c.data?.songs||[]).find(e=>e.key===t)||null}function R(t){let e=String(t||""),s=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let n of s){let i=e.match(n);if(i)return i[1]}return""}function xt(t){let e=R(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function Se(t){let e=R(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function Te(t){let e=R(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function se(){it&&(clearInterval(it),it=null)}function ne(){se(),it=setInterval(()=>{if(w)try{let t=w.getDuration?.()||0,e=w.getCurrentTime?.()||0,s=t>0?Math.min(e/t*100,100):0,n=l("#yt-mini-progress-fill");n&&(n.style.width=`${s}%`);let a=w.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,o=l("#yt-mini-play");o&&o.setAttribute("data-playing",a?"1":"0")}catch{}},400)}function Y(){if(se(),w){try{w.destroy()}catch{}w=null}let t=l("#yt-player-container");t&&(t.innerHTML="")}function xe(){if(w?.getCurrentTime)try{return w.getCurrentTime()}catch{}return Math.max(0,$t+(Date.now()-Lt)/1e3)}function rt(t,e=0,s=""){let n=R(t);if(!n)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}{let p=l("#stream-viewer");if(p&&!p.hidden&&!C){++E,p.hidden=!0,p._currentStream=null,k=null;let u=l("#sv-player-wrap");u&&(u.innerHTML=""),document.body.style.overflow="",A=null,ct={},lt()}}ut(),Et();let i=l("#yt-player-container"),a=l("#yt-player-panel");if(!i||!a)return;Y();let o=l("#yt-mini-title");o&&(o.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let d=l("#yt-mini-hint");d&&(d.textContent=A?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),a.classList.toggle("has-stream",!!A),a.hidden=!1,_t(()=>{let p=document.createElement("div");i.appendChild(p);try{w=new window.YT.Player(p,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:u=>{let r=J();try{u.target.setVolume(r)}catch{}if(Z(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,r),e>5)try{u.target.seekTo(e,!0)}catch{}ne()},onStateChange:u=>{let r=u.data===window.YT.PlayerState.PLAYING,v=l("#yt-mini-play");v&&v.setAttribute("data-playing",r?"1":"0")}}})}catch{let r=e>0?`&start=${Math.floor(e)}`:"";i.innerHTML=`<iframe src="https://www.youtube.com/embed/${n}?autoplay=1&playsinline=1${r}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function Et(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
      <div class="yt-mini-vol-wrap">
        <button class="vol-btn" id="yt-mini-vol-btn" type="button" aria-label="\u97F3\u91CF">\u{1F50A}</button>
        <input class="vol-slider" id="yt-mini-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
      </div>
      <button id="yt-player-close" type="button" class="yt-mini-close-btn" aria-label="\u9589\u3058\u308B">\u2715</button>
    </div>
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,Y(),A=null}),l("#yt-mini-play").addEventListener("click",()=>{if(w)try{w.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?w.pauseVideo():w.playVideo()}catch{}}),l("#yt-mini-restore").addEventListener("click",()=>{A&&U(A,xe())}),l("#yt-mini-progress-bar").addEventListener("click",n=>{if(!w)return;let a=n.currentTarget.getBoundingClientRect(),o=Math.max(0,Math.min(1,(n.clientX-a.left)/a.width));try{let d=w.getDuration?.()||0;d>0&&w.seekTo(o*d,!0)}catch{}});let e=l("#yt-mini-vol-slider"),s=l("#yt-mini-vol-btn");if(e){let n=J();e.value=n,e.style.setProperty("--pct",`${n}%`),s&&(s.textContent=G(n)),e.addEventListener("input",i=>{let a=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${a}%`),kt(a),s&&(s.textContent=G(a)),w)try{w.setVolume(a)}catch{}})}if(s){let n=80;s.addEventListener("click",()=>{if(!e)return;let i=parseInt(e.value),a=i>0?0:n||80;i>0&&(n=i),Z(e,s,w,a)})}}var ae=!1,ie=[];window.onYouTubeIframeAPIReady=()=>{ae=!0,ie.splice(0).forEach(t=>t()),import("./chunk-XVKQTMGG.js").then(t=>t.notifyYtReady()).catch(()=>{})};function ut(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function _t(t){if(ae&&window.YT?.Player){t();return}ie.push(t)}var J=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),kt=t=>localStorage.setItem("kanaVol",String(t)),G=t=>t===0?"\u{1F507}":t<50?"\u{1F509}":"\u{1F50A}";function Z(t,e,s,n){if(t&&(t.value=n,t.style.setProperty("--pct",`${n}%`)),e&&(e.textContent=G(n)),s)try{s.setVolume(n)}catch{}}var k=null,E=0,A=null,$t=0,Lt=0,C=!1,pt="timeline",ct={},_={},K=!1,w=null,it=null;function Ee(){pt=c.activeTab||"timeline",c.activeTab="player",S(".tab-btn").forEach(t=>t.classList.remove("active")),S(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function lt(){let t=ct;ct={},D(pt||"timeline",t)}function _e(){C=!0;let t=l("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=l("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function P(t){let e=Math.floor(t),s=Math.floor(e/3600),n=Math.floor(e%3600/60),i=e%60;return s>0?`${s}:${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")}`:`${n}:${String(i).padStart(2,"0")}`}function le(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function z(t){try{return JSON.parse(localStorage.getItem(le(t))||"null")||{}}catch{return{}}}function wt(t,e){try{localStorage.setItem(le(t),JSON.stringify(e))}catch{}}function Ce(t,e,s){let n=s[e],i=n!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${m(P(n))} \u306B\u79FB\u52D5">${m(P(n))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",o=(_[e]||[]).map(u=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${u.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${m(P(u.timeSeconds))}">${m(P(u.timeSeconds))}</button>`).join(""),d=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,p=`<div class="sv-cts-row">${o}${d}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${m(t.title)}</span>
      <span class="sv-song-artist">${m(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${i}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${p}
  </div>`}async function Me(t){if(_={},!t?.channel||t?.index==null)return;try{let n=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,i=await fetch(n);if(!i.ok)return;let a=await i.json();for(let o of a.items||[])_[o.songIndex]||(_[o.songIndex]=[]),_[o.songIndex].push({timeSeconds:o.timeSeconds,note:o.note??null})}catch{}let e=l("#stream-viewer");if(!e||e._currentStream!==t)return;let s=l("#sv-setlist");s&&O(s,t.songs,z(t)),Ie(t)}function Pe(t,e,s){l("#sv-cts-modal")?.remove();let n=k?.getCurrentTime?.()??0,i=P(Math.floor(n)),a=document.createElement("div");a.id="sv-cts-modal",a.className="sv-cts-modal-overlay",a.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-cts-modal-song">${m(s)}</p>
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
  `,document.body.appendChild(a);let o=()=>a.remove();a.querySelector(".sv-cts-modal-close").addEventListener("click",o),a.querySelector(".sv-cts-modal-cancel").addEventListener("click",o),a.addEventListener("click",d=>{d.target===a&&o()}),a.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let d=a.querySelector("#sv-cts-ts-input").value.trim(),p=a.querySelector("#sv-cts-note-input").value.trim()||null,u=Ct(d),r=a.querySelector("#sv-cts-status");if(u===null){r.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",r.className="sv-cts-modal-status error",r.hidden=!1;return}let v=a.querySelector("#sv-cts-submit");v.disabled=!0,v.textContent="\u9001\u4FE1\u4E2D\u2026";try{let f=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:u,submitterNote:p})});if(f.ok)r.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",r.className="sv-cts-modal-status success",r.hidden=!1,v.hidden=!0,a.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let h=await f.json().catch(()=>({}));r.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${h.error||f.statusText}`,r.className="sv-cts-modal-status error",r.hidden=!1,v.disabled=!1,v.textContent="\u63D0\u6848\u3059\u308B"}}catch(f){r.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.message}`,r.className="sv-cts-modal-status error",r.hidden=!1,v.disabled=!1,v.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>a.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function d(p){p.key==="Escape"&&(o(),document.removeEventListener("keydown",d))})}function Ie(t){let e=l("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let n=Object.keys(_).length>=t.songs.length;e.textContent=n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function Ae(t){l("#sv-bulk-modal")?.remove();let e=z(t),i=Object.keys(_).length>=t.songs.length,a=t.songs.map((p,u)=>{let r=e[u]!=null?P(e[u]):"",v=_[u]?.[0]?.timeSeconds!=null?P(_[u][0].timeSeconds):"",f=r||v;return`
      <div class="sv-bulk-row" data-idx="${u}">
        <span class="sv-bulk-num">${u+1}</span>
        <span class="sv-bulk-title" title="${m(p.title)}">${m(p.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${m(f)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${u}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${u}">\u23F1</button>
      </div>`}).join(""),o=document.createElement("div");o.id="sv-bulk-modal",o.className="sv-cts-modal-overlay",o.innerHTML=`
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="${i?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">${i?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <details class="sv-paste-area">
        <summary class="sv-paste-summary">\u914D\u4FE1\u30B3\u30E1\u30F3\u30C8\u304B\u3089\u4E00\u62EC\u5165\u529B</summary>
        <textarea class="sv-paste-textarea" placeholder="\u914D\u4FE1\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u30B3\u30E1\u30F3\u30C8\u3092\u8CBC\u308A\u4ED8\u3051&#10;\u4F8B: 23:16\u3000\u5FAE\u304B\u306A\u30AB\u30AA\u30EA / Perfume\u300027:58"></textarea>
        <div class="sv-paste-btns">
          <button class="sv-paste-apply btn ghost" type="button">\u89E3\u6790\u3057\u3066\u5165\u529B</button>
          <span class="sv-paste-result" hidden></span>
        </div>
      </details>
      <p class="sv-bulk-hint">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u5165\u529B\u3057\u3066\u4E00\u62EC\u7533\u8ACB\u3067\u304D\u307E\u3059\u3002\u7A7A\u6B04\u306E\u66F2\u306F\u30B9\u30AD\u30C3\u30D7\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-bulk-rows">${a}</div>
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
  `,document.body.appendChild(o);let d=()=>o.remove();o.querySelector(".sv-cts-modal-close").addEventListener("click",d),o.querySelector(".sv-cts-modal-cancel").addEventListener("click",d),o.addEventListener("click",p=>{p.target===o&&d()}),o.querySelector(".sv-paste-apply").addEventListener("click",()=>{let u=(o.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(f=>f.trim()).filter(Boolean),r=0;for(let f of u){let h=qe(f);if(!h)continue;let y=Be(h.title,h.artist,t.songs);if(y>=0){let g=o.querySelector(`[data-bulk-ts-idx="${y}"]`);g&&(g.value=h.start,r++)}}let v=o.querySelector(".sv-paste-result");v&&(v.textContent=r>0?`${u.length}\u884C\u3092\u89E3\u6790 \u2192 ${r}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",v.hidden=!1)}),o.querySelector(".sv-bulk-rows").addEventListener("click",p=>{let u=p.target.closest("[data-bulk-now]");if(!u)return;let r=parseInt(u.dataset.bulkNow,10),v=k?.getCurrentTime?.();if(v!=null){let f=o.querySelector(`[data-bulk-ts-idx="${r}"]`);f&&(f.value=P(Math.floor(v)))}}),o.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let p=o.querySelector("#sv-bulk-note").value.trim()||null,u=o.querySelector("#sv-bulk-status"),r=o.querySelector("#sv-bulk-submit"),v=[];if(o.querySelectorAll("[data-bulk-ts-idx]").forEach(y=>{let g=parseInt(y.dataset.bulkTsIdx,10),b=Ct(y.value.trim());b!==null&&v.push({songIndex:g,timeSeconds:b})}),!v.length){u.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",u.className="sv-cts-modal-status error",u.hidden=!1;return}r.disabled=!0,r.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${v.length})`,u.hidden=!0;let f=0,h=0;await Promise.all(v.map(async y=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:y.songIndex,timeSeconds:y.timeSeconds,submitterNote:p})})).ok?f++:h++}catch{h++}r.textContent=`\u7533\u8ACB\u4E2D\u2026 (${f+h}/${v.length})`})),h===0?(u.textContent=`${f}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,u.className="sv-cts-modal-status success",r.hidden=!0,o.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(u.textContent=`${f}\u4EF6\u6210\u529F / ${h}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,u.className="sv-cts-modal-status error",r.disabled=!1,r.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),u.hidden=!1}),document.addEventListener("keydown",function p(u){u.key==="Escape"&&(d(),document.removeEventListener("keydown",p))})}function oe(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function De(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function He(t,e){let s=oe(),n=s.find(i=>String(i.id)===String(t));return n?(n.streams||(n.streams=[]),n.streams.includes(e)||(n.streams.push(e),De(s)),!0):!1}function Ne(){let t=c.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let n=t.findIndex(i=>i.channel===s.channel&&i.index===s.index);n<0||n>=t.length-1||U(t[n+1])}function Qt(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${m(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=xt(t.url),n=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${m(n)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${m(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${m(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${x(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function Ve(t){let e=l("#sv-below-player");if(!e)return;let s=c.data?.streams||[],n=s.findIndex(r=>r.channel===t.channel&&r.index===t.index),i=n>=0&&n<s.length-1?s[n+1]:null,a=n>0?s[n-1]:null,o=new Set(t.songs.map(r=>r.title)),d=s.filter((r,v)=>v!==n).map(r=>{let v=r.songs.filter(f=>o.has(f.title));return{stream:r,overlap:v.length,sharedSongs:v.slice(0,3).map(f=>f.title)}}).filter(r=>r.overlap>0).sort((r,v)=>v.overlap-r.overlap).slice(0,8),p=oe(),u=V(t);e.innerHTML=`
    <div class="sv-bp-wrap">

      <!-- \u9023\u7D9A\u518D\u751F + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${K?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${K?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          ${i?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${m(i.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${Qt(i,"older")}
          ${Qt(a,"newer")}
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
            <span class="sv-bp-stat-val">${x(t.date)}</span>
            <span class="sv-bp-stat-label">\u914D\u4FE1\u65E5</span>
          </div>
        </div>
      </div>

      <!-- \u95A2\u9023\u914D\u4FE1 -->
      ${d.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u95A2\u9023\u914D\u4FE1 <span class="sv-bp-sh-sub">\uFF08\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${d.map(r=>{let v=xt(r.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(r.stream.channel)}" data-bp-index="${r.stream.index}">
              ${v?`<img class="sv-bp-rel-thumb" src="${m(v)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${m(r.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${x(r.stream.date)}</div>
                <div class="sv-bp-rel-songs">${r.sharedSongs.map(f=>m(f)).join("\u3001")}</div>
              </div>
              <div class="sv-bp-rel-badge">${r.overlap}\u66F2</div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      <!-- \u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0 -->
      ${p.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0</div>
        <div class="sv-bp-pl-list" id="sv-bp-pl-list">
          ${p.map(r=>{let v=(r.streams||[]).includes(u);return`<button class="sv-bp-pl-btn${v?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${m(String(r.id))}"${v?" disabled":""}>
              <span class="sv-bp-pl-name">${m(r.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${v?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=r=>{let v=r.target.closest("#sv-ap-check");if(!v)return;K=v.checked;let f=e.querySelector(".sv-bp-ap-switch");f&&f.classList.toggle("sv-bp-ap-switch--on",K)},e.onclick=r=>{let v=r.target.closest("[data-bp-action]");if(!v)return;let f=v.dataset.bpAction;if(f==="open-stream"){let h=v.dataset.bpChannel,y=parseInt(v.dataset.bpIndex,10),g=(c.data?.streams||[]).find(b=>b.channel===h&&b.index===y);g&&U(g)}else if(f==="add-pl"){let h=v.dataset.bpPlId;if(He(h,u)){v.classList.add("sv-bp-pl-btn--added"),v.disabled=!0;let y=v.querySelector(".sv-bp-pl-status");y&&(y.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}}}function O(t,e,s){t.innerHTML=e.map((n,i)=>Ce(n,i,s)).join("")}function Ct(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function qe(t){let e=t.match(/^(\d{1,2}:\d{2}(?::\d{2})?)[\s　]+(.+?)\s*\/\s*(.+?)[\s　]+(\d{1,2}:\d{2}(?::\d{2})?)$/);return e?{start:e[1].trim(),title:e[2].trim(),artist:e[3].trim(),end:e[4].trim()}:null}function st(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function Be(t,e,s){let n=st(t),i=st(e),a=-1,o=0;for(let d=0;d<s.length;d++){let p=st(s[d].title),u=st(s[d].artist),r=0;p===n?r+=80:n.length>1&&(p.includes(n)||n.includes(p))&&(r+=40),i&&u===i?r+=20:i&&i.length>1&&(u.includes(i)||i.includes(u))&&(r+=10),r>o&&(o=r,a=d)}return o>=40?a:-1}function re(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
        <div class="sv-volume-wrap">
          <button class="vol-btn" id="sv-vol-btn" type="button" aria-label="\u97F3\u91CF">\u{1F50A}</button>
          <input class="vol-slider" id="sv-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
        </div>
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
  `,t.appendChild(e),l("#sv-close").addEventListener("click",Q),l("#sv-fullscreen-btn").addEventListener("click",_e);let s=l("#sv-vol-slider"),n=l("#sv-vol-btn");if(s){let i=J();s.value=i,s.style.setProperty("--pct",`${i}%`),n&&(n.textContent=G(i)),s.addEventListener("input",a=>{let o=parseInt(a.target.value);if(a.target.style.setProperty("--pct",`${o}%`),kt(o),n&&(n.textContent=G(o)),k)try{k.setVolume(o)}catch{}})}if(n){let i=80;n.addEventListener("click",()=>{if(!s)return;let a=parseInt(s.value),o=a>0?0:i||80;a>0&&(i=a),Z(s,n,k,o),kt(o)})}e.querySelectorAll("[data-bc-tab]").forEach(i=>{i.addEventListener("click",()=>{Q(),D(i.dataset.bcTab)})}),l("#sv-import-toggle").addEventListener("click",()=>{let i=l("#sv-import-area");i&&(i.hidden=!i.hidden,i.hidden||l("#sv-import-input")?.focus())}),l("#sv-import-cancel").addEventListener("click",()=>{let i=l("#sv-import-area");i&&(i.hidden=!0);let a=l("#sv-import-input");a&&(a.value="")}),l("#sv-import-apply").addEventListener("click",()=>{let i=e._currentStream;if(!i)return;let a=l("#sv-import-input");if(!a)return;let d=a.value.split(`
`).map(r=>Ct(r)).filter(r=>r!==null);if(!d.length)return;let p=z(i);d.forEach((r,v)=>{v<i.songs.length&&(p[v]=r)}),wt(i,p),O(l("#sv-setlist"),i.songs,p);let u=l("#sv-import-area");u&&(u.hidden=!0),a.value=""}),l("#sv-cts-bulk-btn").addEventListener("click",()=>{let i=e._currentStream;i&&Ae(i)}),l("#sv-setlist").addEventListener("click",i=>{let a=i.target.closest("[data-action]");if(!a)return;let o=parseInt(a.dataset.idx,10),d=e._currentStream;if(!d)return;let p=z(d);if(a.dataset.action==="seek"){if(p[o]!=null&&k?.seekTo){k.seekTo(p[o],!0);try{k.playVideo()}catch{}}}else if(a.dataset.action==="set-ts"){let u=k?.getCurrentTime?.();u!=null&&(p[o]=Math.floor(u),wt(d,p),O(l("#sv-setlist"),d.songs,p))}else if(a.dataset.action==="del-ts")delete p[o],wt(d,p),O(l("#sv-setlist"),d.songs,p);else if(a.dataset.action==="cts-seek"){let u=Number(a.dataset.ctsSeconds);if(!isNaN(u)&&k?.seekTo){k.seekTo(u,!0);try{k.playVideo()}catch{}}}else if(a.dataset.action==="cts-propose"){let u=d.songs[o];Pe(d,o,u?.title||`\u66F2 ${o+1}`)}})}function U(t,e=0){if(!t?.url)return;let s=R(t.url);if(!s){rt(t.url);return}re(),ut();let n=l("#yt-player-panel"),i=!!(n&&!n.hidden&&w);if(!i&&n&&!n.hidden&&(n.hidden=!0,Y()),A=null,import("./chunk-XVKQTMGG.js").then(b=>b.pauseMusicPlayer()).catch(()=>{}),C){C=!1;let b=l("#stream-viewer");b&&b.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}C=!1,Ee();let a=l("#stream-viewer");a.classList.remove("sv-fullscreen"),a.classList.toggle("sv-mv-mode",!!t.isMv),a._currentStream=t;let o=++E,d=a.querySelectorAll("[data-bc-tab]");d[1]&&(t.isMv?(d[1].dataset.bcTab="playlists",d[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(d[1].dataset.bcTab="timeline",d[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let p=l("#sv-bc-title");p&&(p.textContent=t.title||"\u914D\u4FE1");let u=l("#sv-stream-meta");u&&(u.textContent=t.isMv?"":`${x(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let r=l("#sv-yt-link");r&&(r.href=t.url);let v=l("#sv-song-count");if(v&&(v.textContent=t.isMv?"":`${t.songs.length}\u66F2`),_={},t.isMv){let b=l("#sv-setlist");b&&(b.innerHTML="");let L=l("#sv-below-player");L&&(L.innerHTML="")}else{let b=z(t);O(l("#sv-setlist"),t.songs,b),Me(t),Ve(t)}a.hidden=!1,document.body.style.overflow="",setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),k=null;let f=l("#sv-player-wrap");f.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let h=Math.floor(e),y=null;i&&(y=setTimeout(()=>{n&&!n.hidden&&(n.hidden=!0,Y())},5e3));let g=()=>{i&&(y&&(clearTimeout(y),y=null),n&&!n.hidden&&(n.hidden=!0,Y()))};_t(()=>{if(o!==E||a.hidden)return;f.innerHTML="";let b=document.createElement("div");f.appendChild(b);let L=!1;try{k=new window.YT.Player(b,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...h>0?{start:h}:{}},events:{onReady:T=>{let vt=J();try{T.target.setVolume(vt)}catch{}Z(l("#sv-vol-slider"),l("#sv-vol-btn"),null,vt);try{T.target.setPlaybackQuality("hd1080")}catch{}try{T.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(h>5)try{T.target.seekTo(h,!0)}catch{}},onStateChange:T=>{if(o===E){if(T.data===window.YT.PlayerState.PLAYING){try{T.target.setPlaybackQuality("hd1080")}catch{}L||(L=!0,g())}T.data===window.YT.PlayerState.ENDED&&K&&Ne()}},onError:()=>{o===E&&(L||(L=!0,g()),f.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(s)}?autoplay=1&playsinline=1&rel=0${h>0?`&start=${h}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{g(),f.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(s)}?autoplay=1&playsinline=1&rel=0${h>0?`&start=${h}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function Q({instant:t=!1}={}){let e=l("#stream-viewer");if(!e||e.hidden||e.dataset.svTransitioning)return;if(C){C=!1,e.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let d=l("#sv-close");d&&(d.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let p=l("#sv-fullscreen-btn");p&&p.setAttribute("aria-pressed","false");return}if(t){e.hidden=!0,e._currentStream=null,k=null;let d=l("#sv-player-wrap");d&&(d.innerHTML=""),document.body.style.overflow="",lt();return}let s=e._currentStream,n=k?.getCurrentTime?.()??0,i=s?.url?R(s.url):"";++E;let a=E;if(i&&s?.url){A=s,$t=Math.floor(n),Lt=Date.now(),e.dataset.svTransitioning="1",e.classList.add("sv-to-mini"),ut(),Et();let d=l("#yt-player-container"),p=l("#yt-player-panel");Y();let u=l("#yt-mini-title");u&&(u.textContent=s.title||"");let r=l("#yt-mini-hint");r&&(r.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),p.classList.add("has-stream"),p.hidden=!1;let v=!1,f=()=>{if(v)return;if(v=!0,a!==E){e.classList.remove("sv-to-mini"),delete e.dataset.svTransitioning;return}e.classList.remove("sv-to-mini"),delete e.dataset.svTransitioning;let y=k;k=null,e.hidden=!0,e._currentStream=null;let g=l("#sv-player-wrap");g&&(g.innerHTML=""),document.body.style.overflow="",lt(),setTimeout(()=>{try{y?.destroy?.()}catch{}},100)},h=setTimeout(f,3e3);_t(()=>{if(a!==E){clearTimeout(h),e.classList.remove("sv-to-mini"),delete e.dataset.svTransitioning;return}let y=document.createElement("div");d.appendChild(y);try{w=new window.YT.Player(y,{videoId:i,width:"100%",height:"100%",playerVars:{autoplay:0,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1},events:{onReady:g=>{let b=$t+(Date.now()-Lt)/1e3,L=J();try{g.target.setVolume(L),g.target.seekTo(b,!0),g.target.playVideo()}catch{}Z(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,L)},onStateChange:g=>{let b=g.data===window.YT?.PlayerState?.PLAYING,L=l("#yt-mini-play");L&&L.setAttribute("data-playing",b?"1":"0"),b&&a===E&&(clearTimeout(h),f(),ne())}}})}catch{clearTimeout(h),f()}});return}e.hidden=!0,e._currentStream=null,k=null;let o=l("#sv-player-wrap");o&&(o.innerHTML=""),document.body.style.overflow="",lt()}window.__openStreamViewer=U;function ce(t){let e=at(t),s=l("#song-modal"),n=l("#song-modal-body"),i=l("#song-modal-title");if(!e||!s||!n||!i)return;Dt(e),i.textContent=e.title;let a=(e.streamRefs||[]).slice(0,8).map(p=>({...p,thumbnail:xt(p.url),thumbnailFallback:Se(p.url),thumbnailTiny:Te(p.url),detailKey:V(p)})),o=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),d=ft(e.key);n.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${m(e.key)}">${m(e.artist)}</button>
        <div class="song-detail-tags">${o.map(p=>`<span class="tag-badge">${m(p)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${x(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${d?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${m(e.key)}">${d?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${m(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${a.length?a.map(p=>`
        <div class="song-detail-stream">
          ${p.thumbnail&&p.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${m(p.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${m(p.thumbnail)}" data-fallback="${m(p.thumbnailFallback)}" data-tiny="${m(p.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${m(p.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${m(e.key)}" data-streamkey="${m(p.detailKey)}">
            <span>${x(p.date)}</span>
            <strong>${m(p.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,s.hidden=!1,l("#song-modal-close")?.focus()}function Ye(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s();let i=n.target.closest("[data-inline-youtube]");if(i){n.preventDefault(),n.stopPropagation(),rt(i.dataset.inlineYoutube);return}let a=n.target.closest("[data-detail-action]");if(a){if(n.stopPropagation(),a.dataset.detailAction==="close"&&s(),a.dataset.detailAction==="favorite"){let o=a.dataset.songkey;Pt(o);let d=ft(o);a.textContent=d?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",a.classList.toggle("primary",d),a.classList.toggle("ghost",!d)}if(a.dataset.detailAction==="timeline"){let o=at(a.dataset.songkey);s(),o&&ke(o)}if(a.dataset.detailAction==="stream"){let o=at(a.dataset.songkey),d=o?.streamRefs?.find(p=>V(p)===a.dataset.streamkey);s(),o&&d&&$e(o,d)}if(a.dataset.detailAction==="artist"){let o=at(a.dataset.songkey);s(),o&&Le(o)}}}),t.addEventListener("error",n=>{let i=n.target.closest?.(".song-detail-thumb");if(!i)return;let a=i.dataset.fallback||i.dataset.tiny||"";if(a&&i.src!==a){i.src=a,i.dataset.fallback===a?delete i.dataset.fallback:delete i.dataset.tiny;return}i.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&s()})}var Jt=!1;function Re(){if(!c.data)return;let{stats:t,streams:e=[]}=c.data,s=e[0]?.date||null,n=ht(s),i=t.dataGeneratedDate||c.channelData?.dataGeneratedDate||null,a=ht(i),o=t.channelLabel||t.channelId||"",d=o?`<span class="badge accent" style="margin-right:8px;">${m(o)}</span>`:"";l("#updated-info").innerHTML=d+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${x(i)||"\u2014"}</strong>`+(a!=null?` <span class="badge">${a}\u65E5\u524D</span>`:"");let p=l("#stats-grid");if(!Jt)p.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${H(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${H(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${H(t.streams)}<span class="stat-unit">\u56DE</span></div>
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
        <div class="stat-value">${Zt(c.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,Jt=!0;else{let u=p.querySelectorAll(".stat-value");u.length>=6&&(u[0].textContent=H(t.total),u[0].innerHTML+='<span class="stat-unit">\u56DE</span>',u[1].textContent=H(t.repertoire),u[1].innerHTML+='<span class="stat-unit">\u66F2</span>',u[2].textContent=H(t.streams),u[2].innerHTML+='<span class="stat-unit">\u56DE</span>',u[3].textContent=t.avgPerStream,u[3].innerHTML+='<span class="stat-unit">\u66F2</span>',u[4].textContent=n??"\u2014",u[4].innerHTML+='<span class="stat-unit">\u65E5</span>',u[5].textContent=Zt(c.data),u[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function Zt(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,s=t.streams[0].date;return Math.floor((s-e)/864e5)+1}function Ue(){l("#loading").hidden=!1,l("#error").hidden=!0}function je(){l("#loading").hidden=!0}function Fe(t){let e=l("#loading"),s=l("#error"),n=l("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),n&&(n.textContent=t&&t.message?t.message:String(t))}function Ke(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let s=document.getElementById("hero-ch-bg");s&&(s.dataset.mode=t||"all")}var Oe={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:"\u{1F6CD}",label:"official store",url:"https://react.booth.pm"},{icon:"\u{1F310}",label:"official site",url:"https://v-react.com"},{icon:"\u{1F3B5}",label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:"\u{1F3A7}",label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:"\u25B6",label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function nt(t){let e=Oe[t];if(!e)return"";let s=e.bannerUrl?`<img class="ch-card-banner-img" src="${m(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${m(e.label)}</span>`:`<span class="ch-card-banner-label">${m(e.label)}</span>`,n=e.avatarUrl?`<img class="ch-card-avatar-img" src="${m(e.avatarUrl)}" alt="${m(e.name)}" loading="lazy" referrerpolicy="no-referrer">`:t==="new"?"\u65B0":"\u65E7",i=e.desc?`<p class="ch-card-desc">${e.desc.split(`
`).map(o=>m(o)).join("<br>")}</p>`:"",a=e.links?.length?`
    <div class="ch-card-links">
      ${e.links.map(o=>`
        <a class="ch-card-link" href="${m(o.url)}" target="_blank" rel="noopener">
          <span class="ch-card-link-icon" aria-hidden="true">${o.icon}</span>
          <span>${m(o.label)}</span>
        </a>`).join("")}
    </div>`:"";return`
    <div class="ch-card ch-card--${t}">
      <div class="ch-card-banner ch-card-banner--${t}${e.bannerUrl?" ch-card-banner--img":""}">
        ${s}
      </div>
      <div class="ch-card-body">
        <div class="ch-card-header">
          <div class="ch-card-avatar ch-card-avatar--${t}${e.avatarUrl?" ch-card-avatar--img":""}">${n}</div>
          <div class="ch-card-meta">
            <div class="ch-card-name">${m(e.name)}</div>
            <div class="ch-card-handle">${m(e.handle)}</div>
          </div>
        </div>
        ${i}
        ${a}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${m(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u3078
          </a>
        </div>
      </div>
    </div>`}function Ge(t){let e=l("#ch-modal"),s=l("#ch-modal-body");if(!e||!s)return;let n="";t==="new"?n=nt("new"):t==="old"?n=nt("old"):n=nt("new")+nt("old"),s.innerHTML=n,e.hidden=!1,l("#ch-modal-close")?.focus()}function ze(){let t=l("#ch-modal"),e=l("#ch-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s()}),document.querySelectorAll("[data-ch-modal]").forEach(n=>{n.addEventListener("click",()=>Ge(n.dataset.chModal))})}function Qe(){let t=l("#help-modal"),e=l("#help-btn"),s=l("#help-close");if(!t||!e||!s)return;let n=()=>{t.hidden=!1,s.focus()},i=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",n),s.addEventListener("click",i),t.addEventListener("click",a=>{a.target===t&&i()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&i()})}function Je(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function Mt(){Ue();try{let t=await Nt();c.channelData=t,!B&&!t.fullLoaded&&te();let e=yt();c.songsQuery=e.q,c.activeTab=ot(e.tab)?e.tab:"dashboard",ee(c.activeTab);let s=e.channel||c.channel||j;if(I(s)||(s=j),!I(s)){let n=Object.keys(t.channels)[0];n&&(s=n)}if(!I(s))throw new Error("No channel data could be loaded");we(),je(),dt(s,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0})}catch(t){console.error("[init] failed:",t),Fe(t)}}function Ze(){if(!c.channelData)return;let t=yt();c.songsQuery=t.q,t.channel!==c.channel&&I(t.channel)&&dt(t.channel,{resetSearch:!1,updateUrl:!1}),D(t.tab,{updateUrl:!1})}S(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=l("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!C){pt=e,Q({instant:!0});return}D(e)})});S(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||dt(t.dataset.channel))})});window.addEventListener("popstate",Ze);S("[data-audience]").forEach(t=>{t.addEventListener("click",()=>be(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),Tt(e.dataset.artistSearch||e.textContent||"");return}let s=t.target.closest("[data-playlist-add]");if(s){t.preventDefault(),t.stopPropagation();let o=s.dataset.playlistAdd,d=s.dataset.streamTitle||"";import("./chunk-ECCZ5EGH.js").then(p=>p.showAddToPlaylistModal(o,d));return}let n=t.target.closest("[data-stream-play]");if(n){t.preventDefault(),t.stopPropagation();let o=n.dataset.streamPlay,d=(c.data?.streams||[]).find(p=>V(p)===o);d?.url?U(d):n.dataset.inlineYoutube&&rt(n.dataset.inlineYoutube);return}let i=t.target.closest("[data-inline-youtube]");if(i){t.preventDefault(),t.stopPropagation(),rt(i.dataset.inlineYoutube);return}if(At(t.target))return;let a=t.target.closest("[data-songkey]");a&&ce(a.dataset.songkey)});l("#retry-btn").addEventListener("click",Mt);l("#reload-btn").addEventListener("click",Mt);Qe();ze();Et();re();Ye();ye();ge();Je();import("./chunk-XVKQTMGG.js").then(t=>{t.setApiLoader(ut),t.initMusicPlayer()}).catch(()=>{});jt(t=>{t.type==="song"?ce(t.song.key):t.type==="artist"?Tt(t.artist):t.type==="stream"&&U(t.stream)});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),Ft();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),qt();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let i=l("#help-modal");i&&i.hidden&&(i.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let i=l("#stream-viewer"),a=!!l("#panel-player.active");if(i&&!i.hidden&&(C||a)){t.preventDefault(),Q();return}if(Kt()){t.preventDefault(),F();return}let o=l("#song-modal");if(o&&!o.hidden)return;let d=l("#ch-modal");if(d&&!d.hidden){d.hidden=!0;return}let p=l("#help-modal");if(p&&!p.hidden){p.hidden=!0,l("#help-btn")?.focus();return}let u=l("#songs-search");u&&document.activeElement===u&&u.value&&(t.preventDefault(),u.value="",u.dispatchEvent(new Event("input",{bubbles:!0})))}});Yt(()=>{c.data&&(bt(),(c.activeTab==="dashboard"||c.activeTab==="analytics")&&N())});function Xe(){Mt()}Xe();
