import{b as Kt,c as zt,d as Gt,i as Qt,k as N,l as Z}from"./chunk-TKHIMASD.js";import{a as Jt,b as Xt,e as Tt,f as Zt}from"./chunk-SIADDXVK.js";import{a as X}from"./chunk-MKJIXTK4.js";import{a as jt,b as St,c as Ft,e as c}from"./chunk-RBEKY5OM.js";import{D as xt,E as x,G as O,L as U,M as Ot,a as l,b as _,d as f}from"./chunk-PRFEE4R6.js";var L=-1,B=[],_t=null;function ee(t){_t=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",a=>{a.target===e&&W()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>ie(s.value)),s.addEventListener("keydown",Te),document.getElementById("omni-listbox").addEventListener("click",a=>{let n=a.target.closest("[data-omni-idx]");n&&ne(Number(n.dataset.omniIdx))})}function se(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,L=-1,B=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),ie("")}function W(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),L=-1}function ae(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Te(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),L=Math.min(L+1,e.length-1),Wt(e)):t.key==="ArrowUp"?(t.preventDefault(),L=Math.max(L-1,-1),Wt(e)):t.key==="Enter"?(t.preventDefault(),L>=0&&B[L]&&ne(L)):t.key==="Escape"&&(t.preventDefault(),W())}function Wt(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===L),e.setAttribute("aria-selected",String(s===L))}),L>=0&&t[L]?.scrollIntoView({block:"nearest"})}function ne(t){let e=B[t];!e||!_t||(W(),_t(e))}function ie(t){let e=document.getElementById("omni-listbox");if(!e)return;L=-1,B=[];let s=c.data?.songs||[],a=c.data?.streams||[],n=t.trim().toLowerCase(),i="",r=0;if(!c.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!n){let o=s.slice(0,8);if(o.length){i+=vt("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let p of o)B.push({type:"song",song:p}),i+=te(p,r++,"")}e.innerHTML=i||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let v=s.filter(o=>K(o.title).includes(n)||K(o.artist).includes(n)).slice(0,8);if(v.length){i+=vt("\u{1F3B5} \u66F2");for(let o of v)B.push({type:"song",song:o}),i+=te(o,r++,n)}let d=new Set,u=[];for(let o of s)if(K(o.artist).includes(n)&&!d.has(o.artist)&&(d.add(o.artist),u.push(o.artist),u.length>=4))break;if(u.length){i+=vt("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let o of u){let p=s.filter(m=>m.artist===o).length;B.push({type:"artist",artist:o}),i+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${pt(f(o),n)}</span>
          <span class="omni-item-meta">${p}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(a.length){let o=a.filter(p=>K(p.title).includes(n)||p.songs?.some(m=>K(m.title).includes(n)||K(m.artist).includes(n))).slice(0,5);if(o.length){i+=vt("\u{1F4C5} \u914D\u4FE1\u67A0");for(let p of o){B.push({type:"stream",stream:p});let m=p.channel==="new"?"\u65B0ch":p.channel==="old"?"\u65E7ch":"";i+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${pt(f(p.title||"\u914D\u4FE1"),n)}</span>
            <span class="omni-item-meta">${x(p.date)}${m?" \xB7 "+m:""} \xB7 ${p.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}i||(i=`<div class="omni-empty">\u300C${f(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=i}function vt(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function te(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${pt(f(t.title),s)}</span>
      <span class="omni-item-meta">${pt(f(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function K(t){return String(t||"").toLowerCase()}function pt(t,e){if(!e)return t;let a=t.toLowerCase().indexOf(e);return a<0?t:t.slice(0,a)+'<mark class="hl">'+t.slice(a,a+e.length)+"</mark>"+t.slice(a+e.length)}Xt();Ft();var de={dashboard:()=>import("./chunk-MEU45MEY.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-IOZDXE7K.js").then(t=>t.renderRanking),songs:()=>import("./chunk-4MYYEN4P.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-SZMDTMET.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-KSSYRF3L.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-UF24RHGN.js").then(t=>t.renderPlaylists)},mt=new Map,le=0,G=null;function gt(t){return Object.prototype.hasOwnProperty.call(de,t)}async function _e(t){mt.has(t)||mt.set(t,de[t]());try{return await mt.get(t)}catch(e){throw mt.delete(t),e}}function ue(t){return["dashboard","timeline","analytics"].includes(t)}function Ee(t,e={}){let s=l(`#panel-${t}`);if(!s)return;let a={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${f(a[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function Me(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function Ce(t){if(c.channelData?.fullLoaded)return;c.channelData=t;let e=q(c.channel)?c.channel:X,s=q(e);s&&(c.data=s),!ue(c.activeTab)&&c.data&&j(c.activeTab,{autoLoad:!1})}function Pe(t){c.channelData=t,c.channelData.fullLoaded=!0;let e=q(c.channel)?c.channel:X;$t(e,{resetSearch:!1,updateUrl:!1,render:!1}),j(c.activeTab,{autoLoad:!1})}function ve(){return G=zt({meta:c.channelData,onSongsReady:Ce}).then(Pe).finally(()=>{G=null}),G}async function Ct(){c.channelData?.fullLoaded||(G||ve(),await G)}async function j(t=c.activeTab,e={}){if(t!=="playlists"&&(!c.data||!gt(t))||!gt(t))return;let s=c.channelData?.partialLoaded||c.channelData?.fullLoaded,a=c.channelData?.fullLoaded;if(t==="playlists"?!1:ue(t)?!a:!s)if(e.autoLoad){Me(t);try{await Ct()}catch(r){console.error("[data] full load failed",r);let v=l(`#panel-${t}`);v&&(v.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${f(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${f(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,v.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{j(t,{autoLoad:!0})}));return}}else{Ee(t,{initial:e.initial});return}let i=++le;try{let r=await _e(t);if(i!==le||t!==c.activeTab||!c.data)return;t==="songs"&&Qt(c.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let v=l(`#panel-${t}`);v&&(v.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${f(r?.message||String(r))}</div>
        </div>
      `)}}function H(t,e={}){gt(t)||(t="dashboard");let s=l("#stream-viewer");if(t!=="player"&&s&&!s.hidden&&!M&&!R(s)){dt=t,kt=e,rt();return}c.activeTab=t,pe(t),e.updateUrl!==!1&&Z({tab:t}),j(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function pe(t){_(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),_(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function q(t){return c.channelData?t==="all"?c.channelData.combined:c.channelData.channels[t]||null:null}function $t(t,e={}){let s=q(t);s&&(c.channel=t,fs(t),c.data=s,c.timelineFilter=null,c.timelineFocus=null,c.timelineLimit=12,c.songsLimit=100,e.resetSearch!==!1&&(c.songsQuery="",c.songsGenre="all"),Tt(),_("#channel-switch [data-channel]").forEach(a=>a.classList.toggle("active",a.dataset.channel===t)),Pt(),e.updateUrl!==!1&&Z({tab:c.activeTab,channel:t,q:c.songsQuery}),us(),e.render!==!1&&j(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function Ie(t,e={}){c.audience=t==="singer"?"singer":"listener",c.singerMode=c.audience==="singer",c.singerMode||(c.singerPreset="all"),_(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===c.audience)}),document.body.dataset.audience=c.audience,Pt(),c.audience==="singer"?(c.songsLimit=100,H("songs",{autoLoad:e.autoLoad!==!1})):c.data&&j(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Pt(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",s=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${s}`}function De(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),s=l("#topbar-actions");if(!t||!e||!s)return;let a=i=>{e.checked=i,s.classList.toggle("is-open",i),t.setAttribute("aria-expanded",String(i))},n=()=>{a(!1),t.focus()};t.addEventListener("click",i=>{i.stopPropagation(),requestAnimationFrame(()=>a(e.checked))}),t.addEventListener("keydown",i=>{i.key!=="Enter"&&i.key!==" "||(i.preventDefault(),a(!e.checked))}),e.addEventListener("change",()=>{a(e.checked)}),document.addEventListener("click",i=>{s.classList.contains("is-open")&&(i.target.closest("#topbar-actions")||i.target.closest("#mobile-menu-toggle")||i.target.closest("#mobile-menu-state")||n())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&n()}),s.addEventListener("click",i=>{i.stopPropagation()}),Pt()}function Ae(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,a=420,n=()=>{!e||e.src||(e.src=e.dataset.src||"")},i=()=>{s=!1;let v=window.scrollY>a;v&&n(),t.hidden=!v,t.classList.toggle("is-visible",v),t.setAttribute("aria-hidden",String(!v)),t.tabIndex=v?0:-1},r=()=>{s||(s=!0,requestAnimationFrame(i))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),i()}function Ve(){if(c.channelData)for(let t of _("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!c.channelData.combined:!!(c.channelData.channels&&c.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function He({key:t,title:e,artist:s}){c.timelineFilter&&c.timelineFilter.key===t&&c.activeTab==="timeline"?c.timelineFilter=null:c.timelineFilter={key:t,title:e,artist:s},c.timelineFocus=null,c.timelineLimit=12,H("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Ne(t,e){c.timelineFilter={key:t.key,title:t.title,artist:t.artist},c.timelineFocus=O(e),c.timelineLimit=9999,H("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Be(t){It(t.artist||"")}function It(t){let e=String(t||"").replace(/"/g,"");c.songsQuery=e?`artist:"${e}"`:"",c.songsLimit=100,Z({tab:"songs",q:c.songsQuery}),H("songs",{updateUrl:!1})}function ht(t){return(c.data?.songs||[]).find(e=>e.key===t)||null}function S(t){let e=String(t||""),s=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let a of s){let n=e.match(a);if(n)return n[1]}return""}function at(t){let e=S(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function qe(t){let e=S(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function Re(t){let e=S(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function ot(){bt&&(clearInterval(bt),bt=null)}function Dt(){ot(),bt=setInterval(()=>{if($(),!!w)try{let t=w.getDuration?.()||0,e=w.getCurrentTime?.()||0,s=t>0?Math.min(e/t*100,100):0,a=l("#yt-mini-progress-fill");a&&(a.style.width=`${s}%`);let i=w.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,r=l("#yt-mini-play");r&&r.setAttribute("data-playing",i?"1":"0")}catch{}},400)}function ct(){if(ot(),w){try{w.destroy()}catch{}w=null}let t=l("#yt-player-container");t&&(t.innerHTML="")}function Ue(){if(w?.getCurrentTime)try{return w.getCurrentTime()}catch{}return Math.max(0,it+(Date.now()-Bt)/1e3)}function R(t=l("#stream-viewer")){return!!t&&(t.classList.contains("sv-minified")||t.classList.contains("sv-music-minified"))}function $(){let t=l("#stream-viewer");if(!R(t))return;let e=l("#sv-player-wrap"),s=t.classList.contains("sv-music-minified")?document.querySelector("#music-bar .mbar-video-wrap"):document.querySelector("#yt-player-panel .yt-mini-video-wrap");if(!e||!s)return;let a=s.getBoundingClientRect();e.style.left=`${a.left}px`,e.style.top=`${a.top}px`,e.style.width=`${a.width}px`,e.style.height=`${a.height}px`}function Ye(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||!e||!g)return!1;Ht();let s=l("#yt-player-panel");if(!s)return!1;E=e;try{it=Math.floor(g.getCurrentTime?.()??0)}catch{it=0}Bt=Date.now();let a=l("#yt-mini-title");a&&(a.textContent=e.title||"");let n=l("#yt-mini-hint");n&&(n.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),s.classList.add("has-stream"),s.hidden=!1,w=g,g=null,t.classList.add("sv-minified"),document.body.classList.add("has-sv-mini"),document.body.style.overflow="",Lt(),P(),$(),requestAnimationFrame($),setTimeout($,120),setTimeout($,400),window.addEventListener("resize",$),Dt();try{let i=w.getPlayerState?.();l("#yt-mini-play")?.setAttribute("data-playing",i===window.YT?.PlayerState?.PLAYING?"1":"0")}catch{}return Q(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,Y()),!0}function me(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",$),ot(),t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini");let e=l("#sv-player-wrap");e&&(e.style.cssText=""),g=w,w=null;let s=l("#yt-player-panel");return s&&(s.hidden=!0),qt(),P(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function fe(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",$),ot(),t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music");let e=l("#sv-player-wrap");return e&&(e.style.cssText=""),g=w,w=null,qt(),P(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function he(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",$),ot(),J(),++I,t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");return e&&(e.style.cssText="",e.innerHTML=""),ct(),E=null,P(),!0}function je(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||t.hidden||!e?.url)return;let s=Vt(N().t),a={...e,title:e.title||(e.isMv?"\u52D5\u753B":"\u6B4C\u67A0"),type:e.isMv?e.type||"original":"stream",sub:e.isMv?e.originalArtist||e.character||e.sub||"":`${x(e.date)} \u7B2C${e.index}\u67A0`,_stream:e};if(!g){import("./chunk-JRCBHL36.js").then(i=>i.playMusicBarVideo?.(a,s)).catch(()=>{});return}try{it=Math.floor(g.getCurrentTime?.()??s)}catch{it=s}Bt=Date.now(),w=g,g=null,E=null,M=!1,t.classList.remove("sv-fullscreen","sv-minified"),t.classList.add("sv-music-minified"),document.body.classList.remove("has-sv-fullscreen","has-sv-mini"),document.body.classList.add("has-sv-music"),document.body.style.overflow="",t.hidden=!1;let n=l("#yt-player-panel");n&&(n.hidden=!0),Lt(),P(),$(),requestAnimationFrame($),setTimeout($,120),setTimeout($,400),window.addEventListener("resize",$),Dt(),import("./chunk-JRCBHL36.js").then(i=>i.adoptExternalPlayer?.(a,w,{restore:fe,close:he})).catch(()=>{})}function At(){let t=l("#stream-viewer");if(t?.classList.contains("sv-music-minified"))return he();if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",$),J(),++I,t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");e&&(e.style.cssText="",e.innerHTML=""),ct();let s=l("#yt-player-panel");return s&&(s.hidden=!0),E=null,P(),!0}var tt=null;function Vt(t=0){let e=[g,w];for(let s of e)try{let a=s?.getCurrentTime?.();if(Number.isFinite(a))return Math.max(0,Math.floor(a))}catch{}return Math.max(0,Math.floor(Number(t)||0))}function Fe(t,e=0,s={}){if(!t)return"";let a=N(),n=new URLSearchParams,i=a.channel||c.channel;return i&&i!=="new"&&n.set("ch",i),n.set("v",t),s.includeTime!==!1&&e>5&&n.set("t",String(Math.floor(e))),`${location.origin}${location.pathname}?${n}`}function P(){let t=l("#stream-viewer"),s=t&&!t.hidden&&!R(t)&&t._currentStream?.url?S(t._currentStream.url):"",a=s?Vt(N().t):0;Z({v:s||"",t:a>5?a:0},{replace:!0}),s&&!tt&&(tt=setInterval(P,5e3)),!s&&tt&&(clearInterval(tt),tt=null)}function Oe(){if(l("#sv-share-modal"))return;let t=document.createElement("div");t.id="sv-share-modal",t.hidden=!0,t.innerHTML=`
    <div class="sv-share-backdrop"></div>
    <div class="sv-share-dialog" role="dialog" aria-modal="true" aria-label="\u52D5\u753B\u3092\u5171\u6709">
      <div class="sv-share-head">
        <span class="sv-share-head-icon">\u2661</span>
        <span class="sv-share-head-title">\u3053\u306E\u6B4C\u67A0\u3092\u304A\u3059\u305D\u308F\u3051</span>
        <button class="sv-share-close" id="sv-share-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <div class="sv-share-charm" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="sv-share-video">
        <span class="sv-share-video-icon">\u266A</span>
        <span class="sv-share-video-title" id="sv-share-video-title"></span>
      </div>
      <label class="sv-share-ts" id="sv-share-ts-row">
        <input type="checkbox" id="sv-share-ts-check">
        <span class="sv-share-ts-toggle" aria-hidden="true"></span>
        <span class="sv-share-ts-text"><strong id="sv-share-ts-label">0:00</strong> \u304B\u3089\u8074\u3044\u3066\u3082\u3089\u3046</span>
      </label>
      <div class="sv-share-url-row">
        <input class="sv-share-url" id="sv-share-url" type="text" readonly aria-label="\u5171\u6709\u30EA\u30F3\u30AF">
        <button class="sv-share-copy" id="sv-share-copy" type="button">\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC</button>
      </div>
      <div class="sv-share-sns">
        <a class="sv-share-sns-btn sv-share-x" id="sv-share-x" href="#" target="_blank" rel="noopener">X\u306B\u306E\u305B\u308B</a>
        <a class="sv-share-sns-btn sv-share-line" id="sv-share-line" href="#" target="_blank" rel="noopener">LINE\u3067\u9001\u308B</a>
        <button class="sv-share-sns-btn sv-share-native" id="sv-share-native" type="button" hidden>\u307B\u304B\u306B\u3082\u5171\u6709</button>
      </div>
      <div class="sv-share-foot">\u597D\u304D\u306A\u3068\u3053\u308D\u304B\u3089\u3001\u305D\u3063\u3068\u5C4A\u3051\u3089\u308C\u307E\u3059</div>
    </div>`,document.body.appendChild(t);let e=()=>{t.hidden=!0};t.querySelector(".sv-share-backdrop").addEventListener("click",e),l("#sv-share-close").addEventListener("click",e),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&(n.preventDefault(),n.stopPropagation(),e())},{capture:!0});let s=()=>{let n=t._shareState;if(!n)return;let i=l("#sv-share-ts-check")?.checked&&n.t>0,r=Fe(n.id,n.t,{includeTime:i}),v=l("#sv-share-url");v&&(v.value=r);let d=n.title?`${n.title}`:"\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9",u=l("#sv-share-x");u&&(u.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(d)}&url=${encodeURIComponent(r)}`);let o=l("#sv-share-line");return o&&(o.href=`https://line.me/R/share?text=${encodeURIComponent(`${d}
${r}`)}`),r};l("#sv-share-ts-check").addEventListener("change",s),t._rebuild=s,l("#sv-share-url").addEventListener("focus",n=>n.target.select()),l("#sv-share-copy").addEventListener("click",async()=>{let n=l("#sv-share-url")?.value;if(!n)return;let i=!1;try{await navigator.clipboard.writeText(n),i=!0}catch{try{l("#sv-share-url").select(),i=document.execCommand("copy")}catch{}}let r=l("#sv-share-copy");r&&(r.textContent=i?"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",r.classList.add("copied"),setTimeout(()=>{r.textContent="\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",r.classList.remove("copied")},1600))});let a=l("#sv-share-native");navigator.share&&a&&(a.hidden=!1,a.addEventListener("click",async()=>{let n=t._shareState,i=l("#sv-share-url")?.value;if(i)try{await navigator.share({title:n?.title||"",url:i})}catch{}}))}function Ke(){let e=l("#stream-viewer")?._currentStream;if(!e?.url)return;let s=S(e.url);if(!s)return;Oe();let a=l("#sv-share-modal"),n=Vt(N().t);a._shareState={id:s,t:n,title:e.title||""};let i=l("#sv-share-video-title");i&&(i.textContent=e.title||"(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)");let r=l("#sv-share-ts-row"),v=l("#sv-share-ts-check"),d=l("#sv-share-ts-label");r&&(r.hidden=n<=5),v&&(v.checked=n>5),d&&(d.textContent=V(n)),a._rebuild?.(),a.hidden=!1}async function ze(){let t=N();if(!t.v)return!1;let e=t.v,s=t.t;try{await Ct()}catch{}let a=[];c.channelData?.combined&&a.push(c.channelData.combined),Object.values(c.channelData?.channels||{}).forEach(n=>{n&&a.push(n)});for(let n of a){let i=(n.streams||[]).find(r=>S(r.url)===e);if(i)return T(i,s),!0}try{let r=((await(await fetch("data/music.json")).json())?.videos||[]).find(v=>S(v.url)===e);if(r)return T({url:r.url,title:r.title,isMv:!0},s),!0}catch{}return T({url:`https://www.youtube.com/watch?v=${e}`,title:"",isMv:!0},s),!0}function wt(t,e=0,s=""){let a=S(t);if(!a)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}{let d=l("#stream-viewer");if(d&&!d.hidden&&!M)if(R(d))At();else{++I,d.hidden=!0,d._currentStream=null,g=null;let u=l("#sv-player-wrap");u&&(u.innerHTML=""),document.body.style.overflow="",E=null,kt={},Lt(),P()}}Nt(),Ht();let n=l("#yt-player-container"),i=l("#yt-player-panel");if(!n||!i)return;ct();let r=l("#yt-mini-title");r&&(r.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let v=l("#yt-mini-hint");v&&(v.textContent=E?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),i.classList.toggle("has-stream",!!E),i.hidden=!1,ge(()=>{let d=document.createElement("div");n.appendChild(d);try{w=new window.YT.Player(d,{videoId:a,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:u=>{let o=Y();try{u.target.setVolume(o)}catch{}if(Q(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,o),e>5)try{u.target.seekTo(e,!0)}catch{}Dt()},onStateChange:u=>{let o=u.data===window.YT.PlayerState.PLAYING,p=l("#yt-mini-play");p&&p.setAttribute("data-playing",o?"1":"0")}}})}catch{let o=e>0?`&start=${Math.floor(e)}`:"";n.innerHTML=`<iframe src="https://www.youtube.com/embed/${a}?autoplay=1&playsinline=1${o}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function Ht(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,!At()&&(ct(),E=null)}),l("#yt-mini-play").addEventListener("click",()=>{if(w)try{w.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?w.pauseVideo():w.playVideo()}catch{}}),l("#yt-mini-restore").addEventListener("click",()=>{me()||E&&T(E,Ue())}),l("#yt-mini-progress-bar").addEventListener("click",a=>{if(!w)return;let i=a.currentTarget.getBoundingClientRect(),r=Math.max(0,Math.min(1,(a.clientX-i.left)/i.width));try{let v=w.getDuration?.()||0;v>0&&w.seekTo(r*v,!0)}catch{}});let e=l("#yt-mini-vol-slider"),s=l("#yt-mini-vol-btn");if(e){let a=Y();e.value=a,e.style.setProperty("--pct",`${a}%`),s&&(s.textContent=nt(a)),e.addEventListener("input",n=>{let i=parseInt(n.target.value);if(n.target.style.setProperty("--pct",`${i}%`),Mt(i),s&&(s.textContent=nt(i)),w)try{w.setVolume(i)}catch{}})}if(s){let a=80;s.addEventListener("click",()=>{if(!e)return;let n=parseInt(e.value),i=n>0?0:a||80;n>0&&(a=n),Q(e,s,w,i)})}}var be=!1,ye=[];window.onYouTubeIframeAPIReady=()=>{be=!0,ye.splice(0).forEach(t=>t()),import("./chunk-JRCBHL36.js").then(t=>t.notifyYtReady()).catch(()=>{})};function Nt(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function ge(t){if(be&&window.YT?.Player){t();return}ye.push(t)}var Y=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),Mt=t=>localStorage.setItem("kanaVol",String(t)),nt=t=>t===0?"\u{1F507}":t<50?"\u{1F509}":"\u{1F50A}";function Q(t,e,s,a){if(t&&(t.value=a,t.style.setProperty("--pct",`${a}%`)),e&&(e.textContent=nt(a)),s)try{s.setVolume(a)}catch{}}var g=null,I=0,E=null,it=0,Bt=0,M=!1,dt="timeline",kt={},C={},D=!1,A=!1,w=null,bt=null,yt=null;function qt(){dt=c.activeTab||"timeline",c.activeTab="player",_(".tab-btn").forEach(t=>t.classList.remove("active")),_(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function Lt(){let t=kt;kt={},H(dt||"timeline",t)}function Ge(){M=!0;let t=l("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=l("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function V(t){let e=Math.floor(t),s=Math.floor(e/3600),a=Math.floor(e%3600/60),n=e%60;return s>0?`${s}:${String(a).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${a}:${String(n).padStart(2,"0")}`}function we(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function lt(t){try{return JSON.parse(localStorage.getItem(we(t))||"null")||{}}catch{return{}}}function Et(t,e){try{localStorage.setItem(we(t),JSON.stringify(e))}catch{}}function Qe(t,e,s){let a=s[e],n=a!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${f(V(a))} \u306B\u79FB\u52D5">${f(V(a))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",r=(C[e]||[]).map(u=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${u.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${f(V(u.timeSeconds))}">${f(V(u.timeSeconds))}</button>`).join(""),v=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,d=`<div class="sv-cts-row">${r}${v}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${f(t.title)}</span>
      <span class="sv-song-artist">${f(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${n}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${d}
  </div>`}async function Je(t){if(C={},!t?.channel||t?.index==null)return;try{let a=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,n=await fetch(a);if(!n.ok)return;let i=await n.json();for(let r of i.items||[])C[r.songIndex]||(C[r.songIndex]=[]),C[r.songIndex].push({timeSeconds:r.timeSeconds,note:r.note??null})}catch{}let e=l("#stream-viewer");if(!e||e._currentStream!==t)return;let s=l("#sv-setlist");s&&st(s,t.songs,lt(t)),Ze(t)}function Xe(t,e,s){l("#sv-cts-modal")?.remove();let a=g?.getCurrentTime?.()??0,n=V(Math.floor(a)),i=document.createElement("div");i.id="sv-cts-modal",i.className="sv-cts-modal-overlay",i.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-cts-modal-song">${f(s)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${f(n)}" placeholder="0:00" autocomplete="off">
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
  `,document.body.appendChild(i);let r=()=>i.remove();i.querySelector(".sv-cts-modal-close").addEventListener("click",r),i.querySelector(".sv-cts-modal-cancel").addEventListener("click",r),i.addEventListener("click",v=>{v.target===i&&r()}),i.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let v=i.querySelector("#sv-cts-ts-input").value.trim(),d=i.querySelector("#sv-cts-note-input").value.trim()||null,u=Rt(v),o=i.querySelector("#sv-cts-status");if(u===null){o.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",o.className="sv-cts-modal-status error",o.hidden=!1;return}let p=i.querySelector("#sv-cts-submit");p.disabled=!0,p.textContent="\u9001\u4FE1\u4E2D\u2026";try{let m=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:u,submitterNote:d})});if(m.ok)o.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",o.className="sv-cts-modal-status success",o.hidden=!1,p.hidden=!0,i.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let h=await m.json().catch(()=>({}));o.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${h.error||m.statusText}`,o.className="sv-cts-modal-status error",o.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}catch(m){o.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${m.message}`,o.className="sv-cts-modal-status error",o.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>i.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function v(d){d.key==="Escape"&&(r(),document.removeEventListener("keydown",v))})}function Ze(t){let e=l("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let a=Object.keys(C).length>=t.songs.length;e.textContent=a?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function We(t){l("#sv-bulk-modal")?.remove();let e=lt(t),n=Object.keys(C).length>=t.songs.length,i=t.songs.map((d,u)=>{let o=e[u]!=null?V(e[u]):"",p=C[u]?.[0]?.timeSeconds!=null?V(C[u][0].timeSeconds):"",m=o||p;return`
      <div class="sv-bulk-row" data-idx="${u}">
        <span class="sv-bulk-num">${u+1}</span>
        <span class="sv-bulk-title" title="${f(d.title)}">${f(d.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${f(m)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${u}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${u}">\u23F1</button>
      </div>`}).join(""),r=document.createElement("div");r.id="sv-bulk-modal",r.className="sv-cts-modal-overlay",r.innerHTML=`
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="${n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">${n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}</span>
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
      <div class="sv-bulk-rows">${i}</div>
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
  `,document.body.appendChild(r);let v=()=>r.remove();r.querySelector(".sv-cts-modal-close").addEventListener("click",v),r.querySelector(".sv-cts-modal-cancel").addEventListener("click",v),r.addEventListener("click",d=>{d.target===r&&v()}),r.querySelector(".sv-paste-apply").addEventListener("click",()=>{let u=(r.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(m=>m.trim()).filter(Boolean),o=0;for(let m of u){let h=os(m);if(!h)continue;let y=cs(h.title,h.artist,t.songs);if(y>=0){let b=r.querySelector(`[data-bulk-ts-idx="${y}"]`);b&&(b.value=h.start,o++)}}let p=r.querySelector(".sv-paste-result");p&&(p.textContent=o>0?`${u.length}\u884C\u3092\u89E3\u6790 \u2192 ${o}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",p.hidden=!1)}),r.querySelector(".sv-bulk-rows").addEventListener("click",d=>{let u=d.target.closest("[data-bulk-now]");if(!u)return;let o=parseInt(u.dataset.bulkNow,10),p=g?.getCurrentTime?.();if(p!=null){let m=r.querySelector(`[data-bulk-ts-idx="${o}"]`);m&&(m.value=V(Math.floor(p)))}}),r.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let d=r.querySelector("#sv-bulk-note").value.trim()||null,u=r.querySelector("#sv-bulk-status"),o=r.querySelector("#sv-bulk-submit"),p=[];if(r.querySelectorAll("[data-bulk-ts-idx]").forEach(y=>{let b=parseInt(y.dataset.bulkTsIdx,10),k=Rt(y.value.trim());k!==null&&p.push({songIndex:b,timeSeconds:k})}),!p.length){u.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",u.className="sv-cts-modal-status error",u.hidden=!1;return}o.disabled=!0,o.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${p.length})`,u.hidden=!0;let m=0,h=0;await Promise.all(p.map(async y=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:y.songIndex,timeSeconds:y.timeSeconds,submitterNote:d})})).ok?m++:h++}catch{h++}o.textContent=`\u7533\u8ACB\u4E2D\u2026 (${m+h}/${p.length})`})),h===0?(u.textContent=`${m}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,u.className="sv-cts-modal-status success",o.hidden=!0,r.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(u.textContent=`${m}\u4EF6\u6210\u529F / ${h}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,u.className="sv-cts-modal-status error",o.disabled=!1,o.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),u.hidden=!1}),document.addEventListener("keydown",function d(u){u.key==="Escape"&&(v(),document.removeEventListener("keydown",d))})}function ke(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function ts(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function es(t,e){let s=ke(),a=s.find(n=>String(n.id)===String(t));return a?(a.streams||(a.streams=[]),a.streams.includes(e)||(a.streams.push(e),ts(s)),!0):!1}function ss(){let t=c.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let a=t.findIndex(n=>n.channel===s.channel&&n.index===s.index);a<0||a>=t.length-1||T(t[a+1])}async function as(t){let e=await Le(),s=S(t?.url);if(!s||!e.length)return;let a=e.findIndex(i=>S(i.url)===s);if(a<0||a>=e.length-1)return;let n=e[a+1];T({...n,isMv:!0})}function $e(t){if(!t||R(t))return;let e=g||w;if(A&&e){try{e.seekTo(0,!0),e.playVideo()}catch{}return}if(!D)return;let s=t._currentStream;s?.isMv?as(s):ss()}function J(){yt&&(clearInterval(yt),yt=null)}function ns(t,e){J();let s=!1;yt=setInterval(()=>{if(t!==I||e.hidden||!g){J();return}try{let a=g.getPlayerState?.();a===window.YT?.PlayerState?.ENDED?(s||$e(e),s=!0):a===window.YT?.PlayerState?.PLAYING&&(s=!1)}catch{}},700)}function re(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${f(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=at(t.url),a=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${f(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${f(a)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${f(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${f(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${x(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function is(t){let e=l("#sv-below-player");if(!e)return;let s=c.data?.streams||[],a=s.findIndex(o=>o.channel===t.channel&&o.index===t.index),n=a>=0&&a<s.length-1?s[a+1]:null,i=a>0?s[a-1]:null,r=new Set(t.songs.map(o=>o.title)),v=s.filter((o,p)=>p!==a).map(o=>{let p=o.songs.filter(m=>r.has(m.title));return{stream:o,overlap:p.length,sharedSongs:p.slice(0,3).map(m=>m.title)}}).filter(o=>o.overlap>0).sort((o,p)=>p.overlap-o.overlap).slice(0,8),d=ke(),u=O(t);e.innerHTML=`
    <div class="sv-bp-wrap">

      <!-- \u9023\u7D9A\u518D\u751F + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${D?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${D?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${A?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${A?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          ${n?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${f(n.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${re(n,"older")}
          ${re(i,"newer")}
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
      ${v.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u95A2\u9023\u914D\u4FE1 <span class="sv-bp-sh-sub">\uFF08\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${v.map(o=>{let p=at(o.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${f(o.stream.channel)}" data-bp-index="${o.stream.index}">
              ${p?`<img class="sv-bp-rel-thumb" src="${f(p)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${f(o.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${x(o.stream.date)}</div>
                <div class="sv-bp-rel-songs">${o.sharedSongs.map(m=>f(m)).join("\u3001")}</div>
              </div>
              <div class="sv-bp-rel-badge">${o.overlap}\u66F2</div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      <!-- \u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0 -->
      ${d.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0</div>
        <div class="sv-bp-pl-list" id="sv-bp-pl-list">
          ${d.map(o=>{let p=(o.streams||[]).includes(u);return`<button class="sv-bp-pl-btn${p?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${f(String(o.id))}"${p?" disabled":""}>
              <span class="sv-bp-pl-name">${f(o.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${p?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=o=>{let p=o.target.closest("#sv-ap-check"),m=o.target.closest("#sv-repeat-check");if(p){D=p.checked;let h=p.closest(".sv-bp-ap-switch");h&&h.classList.toggle("sv-bp-ap-switch--on",D)}if(m){A=m.checked;let h=m.closest(".sv-bp-ap-switch");h&&h.classList.toggle("sv-bp-ap-switch--on",A)}},e.onclick=o=>{let p=o.target.closest("[data-bp-action]");if(!p)return;let m=p.dataset.bpAction;if(m==="open-stream"){let h=p.dataset.bpChannel,y=parseInt(p.dataset.bpIndex,10),b=(c.data?.streams||[]).find(k=>k.channel===h&&k.index===y);b&&T(b)}else if(m==="add-pl"){let h=p.dataset.bpPlId;if(es(h,u)){p.classList.add("sv-bp-pl-btn--added"),p.disabled=!0;let y=p.querySelector(".sv-bp-pl-status");y&&(y.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}}}var et=null;async function Le(){if(et)return et;try{et=(await(await fetch("data/music.json")).json())?.videos||[]}catch{et=[]}return et}function ls(t){let e=String(t||"");return e=e.replace(/【[^】]*】/g," "),e=e.replace(/^\s*MV[⌇|｜♪♬:：\-\s]*/i," "),e=e.split(/[\/／|｜]/)[0],e=e.replace(/歌ってみた|covered?\s*(by.*)?$/gi," "),e.trim()}async function rs(t){let e=l("#sv-below-player");if(!e)return;try{await Ct()}catch{}let s=await Le();if(l("#stream-viewer")?._currentStream!==t)return;let a=c.channelData?.combined?.streams||c.data?.streams||[],n=z(ls(t.title)),i=[];if(n.length>1)for(let m of a){let h=(m.songs||[]).find(y=>{let b=z(y.title);return b===n||b.length>1&&(b.includes(n)||n.includes(b))});h&&i.push({stream:m,songTitle:h.title})}let r=i.slice(0,8),v={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9\u30BD\u30F3",cover:"\u30AB\u30D0\u30FC"},d=s.find(m=>m.url===t.url),u=s.filter(m=>m.url!==t.url).sort((m,h)=>{let y=d&&m.type===d.type?1:0,b=d&&h.type===d.type?1:0;return y!==b?b-y:(h.publishedAt||"").localeCompare(m.publishedAt||"")}).slice(0,12),o=s.findIndex(m=>S(m.url)===S(t.url)),p=o>=0&&o<s.length-1?s[o+1]:null;e.innerHTML=`
    <div class="sv-bp-wrap">
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${D?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${D?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${A?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${A?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          ${p?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${f(p.title||"\u6B21\u306E\u52D5\u753B")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u52D5\u753B\uFF09</span>'}
        </div>
      </div>
      ${r.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u{1F3A4} \u3053\u306E\u66F2\u304C\u6B4C\u308F\u308C\u305F\u6B4C\u67A0 <span class="sv-bp-sh-sub">\uFF08\u5168${i.length}\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${r.map(m=>{let h=at(m.stream.url);return`<button class="sv-bp-rel-card" type="button" data-mv-action="open-stream" data-mv-channel="${f(m.stream.channel)}" data-mv-index="${m.stream.index}">
              ${h?`<img class="sv-bp-rel-thumb" src="${f(h)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${f(m.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${x(m.stream.date)}\u3000\u7B2C${m.stream.index}\u67A0</div>
                <div class="sv-bp-rel-songs">\u{1F3B5} ${f(m.songTitle)}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      ${u.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u{1F3AC} \u307B\u304B\u306E\u52D5\u753B <button class="sv-mv-all-btn" type="button" data-mv-action="all-videos">\u3059\u3079\u3066\u898B\u308B \u2192</button></div>
        <div class="sv-mv-grid">
          ${u.map(m=>{let h=at(m.url);return`<button class="sv-mv-card" type="button" data-mv-action="open-mv" data-mv-url="${f(m.url)}" data-mv-title="${f(m.title)}">
              ${h?`<img class="sv-mv-card-thumb" src="${f(h)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-mv-card-thumb"></div>'}
              <div class="sv-mv-card-body">
                <div class="sv-mv-card-title">${f(m.title)}</div>
                <div class="sv-mv-card-type">${v[m.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB"}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}
    </div>
  `,e.onchange=m=>{let h=m.target.closest("#sv-ap-check"),y=m.target.closest("#sv-repeat-check");if(h){D=h.checked;let b=h.closest(".sv-bp-ap-switch");b&&b.classList.toggle("sv-bp-ap-switch--on",D)}if(y){A=y.checked;let b=y.closest(".sv-bp-ap-switch");b&&b.classList.toggle("sv-bp-ap-switch--on",A)}},e.onclick=m=>{let h=m.target.closest("[data-mv-action]");if(!h)return;let y=h.dataset.mvAction;if(y==="open-stream"){let b=h.dataset.mvChannel,k=parseInt(h.dataset.mvIndex,10),F=(c.channelData?.combined?.streams||c.data?.streams||[]).find(Yt=>Yt.channel===b&&Yt.index===k);F&&T(F)}else y==="open-mv"?T({url:h.dataset.mvUrl,title:h.dataset.mvTitle,isMv:!0}):y==="all-videos"&&H("playlists")}}function st(t,e,s){t.innerHTML=e.map((a,n)=>Qe(a,n,s)).join("")}function Rt(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function os(t){let e=t.match(/^(\d{1,2}:\d{2}(?::\d{2})?)[\s　]+(.+?)\s*\/\s*(.+?)[\s　]+(\d{1,2}:\d{2}(?::\d{2})?)$/);return e?{start:e[1].trim(),title:e[2].trim(),artist:e[3].trim(),end:e[4].trim()}:null}function z(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function cs(t,e,s){let a=z(t),n=z(e),i=-1,r=0;for(let v=0;v<s.length;v++){let d=z(s[v].title),u=z(s[v].artist),o=0;d===a?o+=80:a.length>1&&(d.includes(a)||a.includes(d))&&(o+=40),n&&u===n?o+=20:n&&n.length>1&&(u.includes(n)||n.includes(u))&&(o+=10),o>r&&(r=o,i=v)}return r>=40?i:-1}function Se(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
        <button class="sv-music-btn" id="sv-music-btn" type="button" title="\u73FE\u5728\u4F4D\u7F6E\u304B\u3089\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u8074\u304F">\u{1F3B5} \u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u8074\u304F</button>
        <button class="sv-share-btn" id="sv-share-btn" type="button" title="\u3053\u306E\u52D5\u753B\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">\u{1F517} \u5171\u6709</button>
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
  `,t.appendChild(e),l("#sv-close").addEventListener("click",()=>rt()),l("#sv-share-btn").addEventListener("click",Ke),l("#sv-music-btn").addEventListener("click",je),l("#sv-fullscreen-btn").addEventListener("click",Ge);let s=l("#sv-vol-slider"),a=l("#sv-vol-btn");if(s){let n=Y();s.value=n,s.style.setProperty("--pct",`${n}%`),a&&(a.textContent=nt(n)),s.addEventListener("input",i=>{let r=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${r}%`),Mt(r),a&&(a.textContent=nt(r)),g)try{g.setVolume(r)}catch{}})}if(a){let n=80;a.addEventListener("click",()=>{if(!s)return;let i=parseInt(s.value),r=i>0?0:n||80;i>0&&(n=i),Q(s,a,g,r),Mt(r)})}e.querySelectorAll("[data-bc-tab]").forEach(n=>{n.addEventListener("click",()=>{dt=n.dataset.bcTab,rt()})}),l("#sv-import-toggle").addEventListener("click",()=>{let n=l("#sv-import-area");n&&(n.hidden=!n.hidden,n.hidden||l("#sv-import-input")?.focus())}),l("#sv-import-cancel").addEventListener("click",()=>{let n=l("#sv-import-area");n&&(n.hidden=!0);let i=l("#sv-import-input");i&&(i.value="")}),l("#sv-import-apply").addEventListener("click",()=>{let n=e._currentStream;if(!n)return;let i=l("#sv-import-input");if(!i)return;let v=i.value.split(`
`).map(o=>Rt(o)).filter(o=>o!==null);if(!v.length)return;let d=lt(n);v.forEach((o,p)=>{p<n.songs.length&&(d[p]=o)}),Et(n,d),st(l("#sv-setlist"),n.songs,d);let u=l("#sv-import-area");u&&(u.hidden=!0),i.value=""}),l("#sv-cts-bulk-btn").addEventListener("click",()=>{let n=e._currentStream;n&&We(n)}),l("#sv-setlist").addEventListener("click",n=>{let i=n.target.closest("[data-action]");if(!i)return;let r=parseInt(i.dataset.idx,10),v=e._currentStream;if(!v)return;let d=lt(v);if(i.dataset.action==="seek"){if(d[r]!=null&&g?.seekTo){g.seekTo(d[r],!0);try{g.playVideo()}catch{}}}else if(i.dataset.action==="set-ts"){let u=g?.getCurrentTime?.();u!=null&&(d[r]=Math.floor(u),Et(v,d),st(l("#sv-setlist"),v.songs,d))}else if(i.dataset.action==="del-ts")delete d[r],Et(v,d),st(l("#sv-setlist"),v.songs,d);else if(i.dataset.action==="cts-seek"){let u=Number(i.dataset.ctsSeconds);if(!isNaN(u)&&g?.seekTo){g.seekTo(u,!0);try{g.playVideo()}catch{}}}else if(i.dataset.action==="cts-propose"){let u=v.songs[r];Xe(v,r,u?.title||`\u66F2 ${r+1}`)}})}function T(t,e=0){if(!t?.url)return;let s=S(t.url);if(!s){wt(t.url);return}Se(),Nt(),J();let a=l("#stream-viewer");if(R(a)){if(a._currentStream?.url===t.url){if(!me()&&!window.__restoreMusicExternalPlayer?.()&&fe(),e>0)try{g?.seekTo(Math.floor(e),!0),g?.playVideo()}catch{}return}At()}let n=window.__takeOverMusicPlayerVideo?.(t.url)||null;n||import("./chunk-JRCBHL36.js").then(b=>(b.releaseMusicPlayerVideo||b.pauseMusicPlayer)()).catch(()=>{});let i=l("#yt-player-panel");if(i&&!i.hidden){try{w?.pauseVideo()}catch{}i.hidden=!0,ct()}if(E=null,M){M=!1;let b=l("#stream-viewer");b&&b.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}M=!1,qt();let r=l("#stream-viewer");r.classList.remove("sv-fullscreen"),r.classList.toggle("sv-mv-mode",!!t.isMv),r._currentStream=t;let v=++I,d=r.querySelectorAll("[data-bc-tab]");d[1]&&(t.isMv?(d[1].dataset.bcTab="playlists",d[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(d[1].dataset.bcTab="timeline",d[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let u=l("#sv-bc-title");u&&(u.textContent=t.title||"\u914D\u4FE1");let o=l("#sv-stream-meta");o&&(o.textContent=t.isMv?"":`${x(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let p=l("#sv-yt-link");p&&(p.href=t.url);let m=l("#sv-song-count");if(m&&(m.textContent=t.isMv?"":`${t.songs.length}\u66F2`),C={},t.isMv){let b=l("#sv-setlist");b&&(b.innerHTML="");let k=l("#sv-below-player");k&&(k.innerHTML=""),rs(t)}else{let b=lt(t);st(l("#sv-setlist"),t.songs,b),Je(t),is(t)}r.hidden=!1,document.body.style.overflow="",P(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),g=null;let h=l("#sv-player-wrap");h.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let y=Math.floor(e||n?.currentTime||0);if(n?.player){h.innerHTML="",n.iframe?(n.iframe.style.width="100%",n.iframe.style.height="100%",h.appendChild(n.iframe)):h.innerHTML='<div class="sv-player-loading">\u518D\u751F\u3092\u5F15\u304D\u7D99\u304E\u307E\u3057\u305F</div>',g=n.player;try{g.setVolume?.(Y()),y>1&&g.seekTo?.(y,!0),g.playVideo?.()}catch{}Q(l("#sv-vol-slider"),l("#sv-vol-btn"),null,Y()),ns(v,r);return}ge(()=>{if(v!==I||r.hidden)return;h.innerHTML="";let b=document.createElement("div");h.appendChild(b);try{g=new window.YT.Player(b,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...y>0?{start:y}:{}},events:{onReady:k=>{let ut=Y();try{k.target.setVolume(ut)}catch{}Q(l("#sv-vol-slider"),l("#sv-vol-btn"),null,ut);try{k.target.setPlaybackQuality("hd1080")}catch{}try{k.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(y>5)try{k.target.seekTo(y,!0)}catch{}},onStateChange:k=>{if(v===I){if(k.data===window.YT.PlayerState.PLAYING)try{k.target.setPlaybackQuality("hd1080")}catch{}k.data===window.YT.PlayerState.ENDED&&$e(r)}},onError:()=>{v===I&&(h.innerHTML=`<iframe src="https://www.youtube.com/embed/${f(s)}?autoplay=1&playsinline=1&rel=0${y>0?`&start=${y}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{h.innerHTML=`<iframe src="https://www.youtube.com/embed/${f(s)}?autoplay=1&playsinline=1&rel=0${y>0?`&start=${y}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function rt(){let t=l("#stream-viewer");if(!t||t.hidden||R(t))return;if(M){M=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let s=l("#sv-close");s&&(s.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let a=l("#sv-fullscreen-btn");a&&a.setAttribute("aria-pressed","false");return}if(Ye())return;++I,t.hidden=!0,t._currentStream=null,J(),g=null;let e=l("#sv-player-wrap");e&&(e.innerHTML=""),document.body.style.overflow="",Lt(),P()}window.__openStreamViewer=T;function xe(t){let e=ht(t),s=l("#song-modal"),a=l("#song-modal-body"),n=l("#song-modal-title");if(!e||!s||!a||!n)return;Kt(e),n.textContent=e.title;let i=(e.streamRefs||[]).slice(0,8).map(d=>({...d,thumbnail:at(d.url),thumbnailFallback:qe(d.url),thumbnailTiny:Re(d.url),detailKey:O(d)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),v=St(e.key);a.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${f(e.key)}">${f(e.artist)}</button>
        <div class="song-detail-tags">${r.map(d=>`<span class="tag-badge">${f(d)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${x(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${v?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${f(e.key)}">${v?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${f(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${i.length?i.map(d=>`
        <div class="song-detail-stream">
          ${d.thumbnail&&d.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${f(d.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${f(d.thumbnail)}" data-fallback="${f(d.thumbnailFallback)}" data-tiny="${f(d.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${f(d.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${f(e.key)}" data-streamkey="${f(d.detailKey)}">
            <span>${x(d.date)}</span>
            <strong>${f(d.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,s.hidden=!1,l("#song-modal-close")?.focus()}function ds(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",a=>{a.target===t&&s();let n=a.target.closest("[data-inline-youtube]");if(n){a.preventDefault(),a.stopPropagation(),wt(n.dataset.inlineYoutube);return}let i=a.target.closest("[data-detail-action]");if(i){if(a.stopPropagation(),i.dataset.detailAction==="close"&&s(),i.dataset.detailAction==="favorite"){let r=i.dataset.songkey;jt(r);let v=St(r);i.textContent=v?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",i.classList.toggle("primary",v),i.classList.toggle("ghost",!v)}if(i.dataset.detailAction==="timeline"){let r=ht(i.dataset.songkey);s(),r&&He(r)}if(i.dataset.detailAction==="stream"){let r=ht(i.dataset.songkey),v=r?.streamRefs?.find(d=>O(d)===i.dataset.streamkey);s(),r&&v&&Ne(r,v)}if(i.dataset.detailAction==="artist"){let r=ht(i.dataset.songkey);s(),r&&Be(r)}}}),t.addEventListener("error",a=>{let n=a.target.closest?.(".song-detail-thumb");if(!n)return;let i=n.dataset.fallback||n.dataset.tiny||"";if(i&&n.src!==i){n.src=i,n.dataset.fallback===i?delete n.dataset.fallback:delete n.dataset.tiny;return}n.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&s()})}var oe=!1;function us(){if(!c.data)return;let{stats:t,streams:e=[]}=c.data,s=e[0]?.date||null,a=xt(s),n=t.dataGeneratedDate||c.channelData?.dataGeneratedDate||null,i=xt(n),r=t.channelLabel||t.channelId||"",v=r?`<span class="badge accent" style="margin-right:8px;">${f(r)}</span>`:"";l("#updated-info").innerHTML=v+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${x(n)||"\u2014"}</strong>`+(i!=null?` <span class="badge">${i}\u65E5\u524D</span>`:"");let d=l("#stats-grid");if(!oe)d.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${U(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${U(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${U(t.streams)}<span class="stat-unit">\u56DE</span></div>
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
        <div class="stat-value">${ce(c.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,oe=!0;else{let u=d.querySelectorAll(".stat-value");u.length>=6&&(u[0].textContent=U(t.total),u[0].innerHTML+='<span class="stat-unit">\u56DE</span>',u[1].textContent=U(t.repertoire),u[1].innerHTML+='<span class="stat-unit">\u66F2</span>',u[2].textContent=U(t.streams),u[2].innerHTML+='<span class="stat-unit">\u56DE</span>',u[3].textContent=t.avgPerStream,u[3].innerHTML+='<span class="stat-unit">\u66F2</span>',u[4].textContent=a??"\u2014",u[4].innerHTML+='<span class="stat-unit">\u65E5</span>',u[5].textContent=ce(c.data),u[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function ce(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,s=t.streams[0].date;return Math.floor((s-e)/864e5)+1}function vs(){l("#loading").hidden=!1,l("#error").hidden=!0}function ps(){l("#loading").hidden=!0}function ms(t){let e=l("#loading"),s=l("#error"),a=l("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),a&&(a.textContent=t&&t.message?t.message:String(t))}function fs(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let s=document.getElementById("hero-ch-bg");s&&(s.dataset.mode=t||"all")}var hs={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:"\u{1F6CD}",label:"official store",url:"https://react.booth.pm"},{icon:"\u{1F310}",label:"official site",url:"https://v-react.com"},{icon:"\u{1F3B5}",label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:"\u{1F3A7}",label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:"\u25B6",label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function ft(t){let e=hs[t];if(!e)return"";let s=e.bannerUrl?`<img class="ch-card-banner-img" src="${f(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${f(e.label)}</span>`:`<span class="ch-card-banner-label">${f(e.label)}</span>`,a=e.avatarUrl?`<img class="ch-card-avatar-img" src="${f(e.avatarUrl)}" alt="${f(e.name)}" loading="lazy" referrerpolicy="no-referrer">`:t==="new"?"\u65B0":"\u65E7",n=e.desc?`<p class="ch-card-desc">${e.desc.split(`
`).map(r=>f(r)).join("<br>")}</p>`:"",i=e.links?.length?`
    <div class="ch-card-links">
      ${e.links.map(r=>`
        <a class="ch-card-link" href="${f(r.url)}" target="_blank" rel="noopener">
          <span class="ch-card-link-icon" aria-hidden="true">${r.icon}</span>
          <span>${f(r.label)}</span>
        </a>`).join("")}
    </div>`:"";return`
    <div class="ch-card ch-card--${t}">
      <div class="ch-card-banner ch-card-banner--${t}${e.bannerUrl?" ch-card-banner--img":""}">
        ${s}
      </div>
      <div class="ch-card-body">
        <div class="ch-card-header">
          <div class="ch-card-avatar ch-card-avatar--${t}${e.avatarUrl?" ch-card-avatar--img":""}">${a}</div>
          <div class="ch-card-meta">
            <div class="ch-card-name">${f(e.name)}</div>
            <div class="ch-card-handle">${f(e.handle)}</div>
          </div>
        </div>
        ${n}
        ${i}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${f(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u3078
          </a>
        </div>
      </div>
    </div>`}function bs(t){let e=l("#ch-modal"),s=l("#ch-modal-body");if(!e||!s)return;let a="";t==="new"?a=ft("new"):t==="old"?a=ft("old"):a=ft("new")+ft("old"),s.innerHTML=a,e.hidden=!1,l("#ch-modal-close")?.focus()}function ys(){let t=l("#ch-modal"),e=l("#ch-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",a=>{a.target===t&&s()}),document.querySelectorAll("[data-ch-modal]").forEach(a=>{a.addEventListener("click",()=>bs(a.dataset.chModal))})}function gs(){let t=l("#help-modal"),e=l("#help-btn"),s=l("#help-close");if(!t||!e||!s)return;let a=()=>{t.hidden=!1,s.focus()},n=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",a),s.addEventListener("click",n),t.addEventListener("click",i=>{i.target===t&&n()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&n()})}function ws(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function Ut(){vs();try{let t=await Gt();c.channelData=t,!G&&!t.fullLoaded&&ve();let e=N(),s=!!e.v;c.songsQuery=e.q,c.activeTab=s?"player":gt(e.tab)?e.tab:"dashboard",pe(c.activeTab);let a=e.channel||c.channel||X;if(q(a)||(a=X),!q(a)){let n=Object.keys(t.channels)[0];n&&(a=n)}if(!q(a))throw new Error("No channel data could be loaded");Ve(),$t(a,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0,render:!s}),s&&(await ze()||H(e.tab,{updateUrl:!1,initial:!0})),ps()}catch(t){console.error("[init] failed:",t),ms(t)}}function ks(){if(!c.channelData)return;let t=N();c.songsQuery=t.q,t.channel!==c.channel&&q(t.channel)&&$t(t.channel,{resetSearch:!1,updateUrl:!1}),H(t.tab,{updateUrl:!1})}_(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=l("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!M&&!R(s)){dt=e,rt();return}H(e)})});_(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||$t(t.dataset.channel))})});window.addEventListener("popstate",ks);_("[data-audience]").forEach(t=>{t.addEventListener("click",()=>Ie(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),It(e.dataset.artistSearch||e.textContent||"");return}let s=t.target.closest("[data-playlist-add]");if(s){t.preventDefault(),t.stopPropagation();let r=s.dataset.playlistAdd,v=s.dataset.streamTitle||"";import("./chunk-UF24RHGN.js").then(d=>d.showAddToPlaylistModal(r,v));return}let a=t.target.closest("[data-stream-play]");if(a){t.preventDefault(),t.stopPropagation();let r=a.dataset.streamPlay,v=(c.data?.streams||[]).find(d=>O(d)===r);v?.url?T(v):a.dataset.inlineYoutube&&wt(a.dataset.inlineYoutube);return}let n=t.target.closest("[data-inline-youtube]");if(n){t.preventDefault(),t.stopPropagation(),wt(n.dataset.inlineYoutube);return}if(Ot(t.target))return;let i=t.target.closest("[data-songkey]");i&&xe(i.dataset.songkey)});l("#retry-btn").addEventListener("click",Ut);l("#reload-btn").addEventListener("click",Ut);gs();ys();Ht();Se();ds();De();Ae();ws();import("./chunk-JRCBHL36.js").then(t=>{t.setApiLoader(Nt),t.initMusicPlayer()}).catch(()=>{});ee(t=>{t.type==="song"?xe(t.song.key):t.type==="artist"?It(t.artist):t.type==="stream"&&T(t.stream)});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),se();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),Jt();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let n=l("#help-modal");n&&n.hidden&&(n.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let n=l("#stream-viewer"),i=!!l("#panel-player.active");if(n&&!n.hidden&&(M||i)){t.preventDefault(),rt();return}if(ae()){t.preventDefault(),W();return}let r=l("#song-modal");if(r&&!r.hidden)return;let v=l("#ch-modal");if(v&&!v.hidden){v.hidden=!0;return}let d=l("#help-modal");if(d&&!d.hidden){d.hidden=!0,l("#help-btn")?.focus();return}let u=l("#songs-search");u&&document.activeElement===u&&u.value&&(t.preventDefault(),u.value="",u.dispatchEvent(new Event("input",{bubbles:!0})))}});Zt(()=>{c.data&&(Tt(),(c.activeTab==="dashboard"||c.activeTab==="analytics")&&j())});function $s(){Ut()}$s();
