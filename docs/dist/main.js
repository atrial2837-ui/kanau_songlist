import{b as Nt,c as Bt,d as qt,i as Ut,k as A,l as K}from"./chunk-TKHIMASD.js";import{a as Rt,b as jt,e as wt,f as Yt}from"./chunk-SIADDXVK.js";import{a as O}from"./chunk-MKJIXTK4.js";import{a as Dt,b as yt,c as Vt,e as c}from"./chunk-RBEKY5OM.js";import{D as gt,E as L,G as R,L as B,M as Ht,a as l,b as S,d as m}from"./chunk-PRFEE4R6.js";var k=-1,D=[],kt=null;function Kt(t){kt=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",n=>{n.target===e&&z()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>Jt(s.value)),s.addEventListener("keydown",he),document.getElementById("omni-listbox").addEventListener("click",n=>{let a=n.target.closest("[data-omni-idx]");a&&Qt(Number(a.dataset.omniIdx))})}function zt(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,k=-1,D=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Jt("")}function z(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),k=-1}function Gt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function he(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),k=Math.min(k+1,e.length-1),Ft(e)):t.key==="ArrowUp"?(t.preventDefault(),k=Math.max(k-1,-1),Ft(e)):t.key==="Enter"?(t.preventDefault(),k>=0&&D[k]&&Qt(k)):t.key==="Escape"&&(t.preventDefault(),z())}function Ft(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===k),e.setAttribute("aria-selected",String(s===k))}),k>=0&&t[k]?.scrollIntoView({block:"nearest"})}function Qt(t){let e=D[t];!e||!kt||(z(),kt(e))}function Jt(t){let e=document.getElementById("omni-listbox");if(!e)return;k=-1,D=[];let s=c.data?.songs||[],n=c.data?.streams||[],a=t.trim().toLowerCase(),i="",r=0;if(!c.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!a){let o=s.slice(0,8);if(o.length){i+=it("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let p of o)D.push({type:"song",song:p}),i+=Ot(p,r++,"")}e.innerHTML=i||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let u=s.filter(o=>j(o.title).includes(a)||j(o.artist).includes(a)).slice(0,8);if(u.length){i+=it("\u{1F3B5} \u66F2");for(let o of u)D.push({type:"song",song:o}),i+=Ot(o,r++,a)}let d=new Set,v=[];for(let o of s)if(j(o.artist).includes(a)&&!d.has(o.artist)&&(d.add(o.artist),v.push(o.artist),v.length>=4))break;if(v.length){i+=it("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let o of v){let p=s.filter(f=>f.artist===o).length;D.push({type:"artist",artist:o}),i+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${lt(m(o),a)}</span>
          <span class="omni-item-meta">${p}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(n.length){let o=n.filter(p=>j(p.title).includes(a)||p.songs?.some(f=>j(f.title).includes(a)||j(f.artist).includes(a))).slice(0,5);if(o.length){i+=it("\u{1F4C5} \u914D\u4FE1\u67A0");for(let p of o){D.push({type:"stream",stream:p});let f=p.channel==="new"?"\u65B0ch":p.channel==="old"?"\u65E7ch":"";i+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${lt(m(p.title||"\u914D\u4FE1"),a)}</span>
            <span class="omni-item-meta">${L(p.date)}${f?" \xB7 "+f:""} \xB7 ${p.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}i||(i=`<div class="omni-empty">\u300C${m(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=i}function it(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function Ot(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${lt(m(t.title),s)}</span>
      <span class="omni-item-meta">${lt(m(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function j(t){return String(t||"").toLowerCase()}function lt(t,e){if(!e)return t;let n=t.toLowerCase().indexOf(e);return n<0?t:t.slice(0,n)+'<mark class="hl">'+t.slice(n,n+e.length)+"</mark>"+t.slice(n+e.length)}jt();Vt();var ee={dashboard:()=>import("./chunk-MEU45MEY.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-IOZDXE7K.js").then(t=>t.renderRanking),songs:()=>import("./chunk-4MYYEN4P.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-SZMDTMET.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-KSSYRF3L.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-C5YNPIUH.js").then(t=>t.renderPlaylists)},rt=new Map,Xt=0,F=null;function ut(t){return Object.prototype.hasOwnProperty.call(ee,t)}async function be(t){rt.has(t)||rt.set(t,ee[t]());try{return await rt.get(t)}catch(e){throw rt.delete(t),e}}function se(t){return["dashboard","timeline","analytics"].includes(t)}function ye(t,e={}){let s=l(`#panel-${t}`);if(!s)return;let n={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${m(n[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function ge(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function we(t){if(c.channelData?.fullLoaded)return;c.channelData=t;let e=H(c.channel)?c.channel:O,s=H(e);s&&(c.data=s),!se(c.activeTab)&&c.data&&q(c.activeTab,{autoLoad:!1})}function ke(t){c.channelData=t,c.channelData.fullLoaded=!0;let e=H(c.channel)?c.channel:O;mt(e,{resetSearch:!1,updateUrl:!1,render:!1}),q(c.activeTab,{autoLoad:!1})}function ne(){return F=Bt({meta:c.channelData,onSongsReady:we}).then(ke).finally(()=>{F=null}),F}async function xt(){c.channelData?.fullLoaded||(F||ne(),await F)}async function q(t=c.activeTab,e={}){if(t!=="playlists"&&(!c.data||!ut(t))||!ut(t))return;let s=c.channelData?.partialLoaded||c.channelData?.fullLoaded,n=c.channelData?.fullLoaded;if(t==="playlists"?!1:se(t)?!n:!s)if(e.autoLoad){ge(t);try{await xt()}catch(r){console.error("[data] full load failed",r);let u=l(`#panel-${t}`);u&&(u.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${m(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${m(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,u.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{q(t,{autoLoad:!0})}));return}}else{ye(t,{initial:e.initial});return}let i=++Xt;try{let r=await be(t);if(i!==Xt||t!==c.activeTab||!c.data)return;t==="songs"&&Ut(c.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let u=l(`#panel-${t}`);u&&(u.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${m(r?.message||String(r))}</div>
        </div>
      `)}}function I(t,e={}){ut(t)||(t="dashboard");let s=l("#stream-viewer");if(t!=="player"&&s&&!s.hidden&&!x&&!s.classList.contains("sv-minified")){at=t,pt=e,et();return}c.activeTab=t,ae(t),e.updateUrl!==!1&&K({tab:t}),q(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function ae(t){S(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),S(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function H(t){return c.channelData?t==="all"?c.channelData.combined:c.channelData.channels[t]||null:null}function mt(t,e={}){let s=H(t);s&&(c.channel=t,as(t),c.data=s,c.timelineFilter=null,c.timelineFocus=null,c.timelineLimit=12,c.songsLimit=100,e.resetSearch!==!1&&(c.songsQuery="",c.songsGenre="all"),wt(),S("#channel-switch [data-channel]").forEach(n=>n.classList.toggle("active",n.dataset.channel===t)),Tt(),e.updateUrl!==!1&&K({tab:c.activeTab,channel:t,q:c.songsQuery}),ts(),e.render!==!1&&q(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function $e(t,e={}){c.audience=t==="singer"?"singer":"listener",c.singerMode=c.audience==="singer",c.singerMode||(c.singerPreset="all"),S(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===c.audience)}),document.body.dataset.audience=c.audience,Tt(),c.audience==="singer"?(c.songsLimit=100,I("songs",{autoLoad:e.autoLoad!==!1})):c.data&&q(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Tt(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",s=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${s}`}function Le(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),s=l("#topbar-actions");if(!t||!e||!s)return;let n=i=>{e.checked=i,s.classList.toggle("is-open",i),t.setAttribute("aria-expanded",String(i))},a=()=>{n(!1),t.focus()};t.addEventListener("click",i=>{i.stopPropagation(),requestAnimationFrame(()=>n(e.checked))}),t.addEventListener("keydown",i=>{i.key!=="Enter"&&i.key!==" "||(i.preventDefault(),n(!e.checked))}),e.addEventListener("change",()=>{n(e.checked)}),document.addEventListener("click",i=>{s.classList.contains("is-open")&&(i.target.closest("#topbar-actions")||i.target.closest("#mobile-menu-toggle")||i.target.closest("#mobile-menu-state")||a())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&a()}),s.addEventListener("click",i=>{i.stopPropagation()}),Tt()}function Se(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,n=420,a=()=>{!e||e.src||(e.src=e.dataset.src||"")},i=()=>{s=!1;let u=window.scrollY>n;u&&a(),t.hidden=!u,t.classList.toggle("is-visible",u),t.setAttribute("aria-hidden",String(!u)),t.tabIndex=u?0:-1},r=()=>{s||(s=!0,requestAnimationFrame(i))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),i()}function xe(){if(c.channelData)for(let t of S("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!c.channelData.combined:!!(c.channelData.channels&&c.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function Te({key:t,title:e,artist:s}){c.timelineFilter&&c.timelineFilter.key===t&&c.activeTab==="timeline"?c.timelineFilter=null:c.timelineFilter={key:t,title:e,artist:s},c.timelineFocus=null,c.timelineLimit=12,I("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Ee(t,e){c.timelineFilter={key:t.key,title:t.title,artist:t.artist},c.timelineFocus=R(e),c.timelineLimit=9999,I("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function _e(t){Et(t.artist||"")}function Et(t){let e=String(t||"").replace(/"/g,"");c.songsQuery=e?`artist:"${e}"`:"",c.songsLimit=100,K({tab:"songs",q:c.songsQuery}),I("songs",{updateUrl:!1})}function ct(t){return(c.data?.songs||[]).find(e=>e.key===t)||null}function P(t){let e=String(t||""),s=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let n of s){let a=e.match(n);if(a)return a[1]}return""}function Z(t){let e=P(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function Me(t){let e=P(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function Ce(t){let e=P(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function ft(){dt&&(clearInterval(dt),dt=null)}function ie(){ft(),dt=setInterval(()=>{if(M(),!!g)try{let t=g.getDuration?.()||0,e=g.getCurrentTime?.()||0,s=t>0?Math.min(e/t*100,100):0,n=l("#yt-mini-progress-fill");n&&(n.style.width=`${s}%`);let i=g.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,r=l("#yt-mini-play");r&&r.setAttribute("data-playing",i?"1":"0")}catch{}},400)}function ht(){if(ft(),g){try{g.destroy()}catch{}g=null}let t=l("#yt-player-container");t&&(t.innerHTML="")}function Pe(){if(g?.getCurrentTime)try{return g.getCurrentTime()}catch{}return Math.max(0,St+(Date.now()-de)/1e3)}function M(){if(!l("#stream-viewer")?.classList.contains("sv-minified"))return;let e=l("#sv-player-wrap"),s=document.querySelector("#yt-player-panel .yt-mini-video-wrap");if(!e||!s)return;let n=s.getBoundingClientRect();e.style.left=`${n.left}px`,e.style.top=`${n.top}px`,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`}function Ie(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||!e||!y)return!1;Ct();let s=l("#yt-player-panel");if(!s)return!1;_=e;try{St=Math.floor(y.getCurrentTime?.()??0)}catch{St=0}de=Date.now();let n=l("#yt-mini-title");n&&(n.textContent=e.title||"");let a=l("#yt-mini-hint");a&&(a.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),s.classList.add("has-stream"),s.hidden=!1,g=y,y=null,t.classList.add("sv-minified"),document.body.classList.add("has-sv-mini"),document.body.style.overflow="",bt(),N(),M(),requestAnimationFrame(M),setTimeout(M,120),setTimeout(M,400),window.addEventListener("resize",M),ie();try{let i=g.getPlayerState?.();l("#yt-mini-play")?.setAttribute("data-playing",i===window.YT?.PlayerState?.PLAYING?"1":"0")}catch{}return nt(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,st()),!0}function le(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",M),ft(),t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini");let e=l("#sv-player-wrap");e&&(e.style.cssText=""),y=g,g=null;let s=l("#yt-player-panel");return s&&(s.hidden=!0),ue(),N(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function Ae(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||t.hidden||!e?.url)return;let s=Mt(A().t),n={...e,title:e.title||(e.isMv?"\u52D5\u753B":"\u6B4C\u67A0"),type:e.isMv?e.type||"original":"stream",sub:e.isMv?e.originalArtist||e.character||e.sub||"":`${L(e.date)} \u7B2C${e.index}\u67A0`,_stream:e};window.removeEventListener("resize",M),ft(),++V;try{y?.pauseVideo?.()}catch{}try{y?.destroy?.()}catch{}y=null,g=null,_=null,x=!1,t.classList.remove("sv-fullscreen","sv-minified"),document.body.classList.remove("has-sv-fullscreen","has-sv-mini"),document.body.style.overflow="",t.hidden=!0;let a=l("#sv-player-wrap");a&&(a.style.cssText="",a.innerHTML="");let i=l("#yt-player-panel");i&&(i.hidden=!0),bt(),N(),import("./chunk-O7NIHE7J.js").then(r=>r.playMusicBarVideo?.(n,s)).catch(()=>{})}function _t(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",M),++V,t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");e&&(e.style.cssText="",e.innerHTML=""),ht();let s=l("#yt-player-panel");return s&&(s.hidden=!0),_=null,N(),!0}var G=null;function Mt(t=0){let e=[y,g];for(let s of e)try{let n=s?.getCurrentTime?.();if(Number.isFinite(n))return Math.max(0,Math.floor(n))}catch{}return Math.max(0,Math.floor(Number(t)||0))}function De(t,e=0,s={}){if(!t)return"";let n=A(),a=new URLSearchParams,i=n.channel||c.channel;return i&&i!=="new"&&a.set("ch",i),a.set("v",t),s.includeTime!==!1&&e>5&&a.set("t",String(Math.floor(e))),`${location.origin}${location.pathname}?${a}`}function N(){let t=l("#stream-viewer"),s=t&&!t.hidden&&!t.classList.contains("sv-minified")&&t._currentStream?.url?P(t._currentStream.url):"",n=s?Mt(A().t):0;K({v:s||"",t:n>5?n:0},{replace:!0}),s&&!G&&(G=setInterval(N,5e3)),!s&&G&&(clearInterval(G),G=null)}function Ve(){if(l("#sv-share-modal"))return;let t=document.createElement("div");t.id="sv-share-modal",t.hidden=!0,t.innerHTML=`
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
    </div>`,document.body.appendChild(t);let e=()=>{t.hidden=!0};t.querySelector(".sv-share-backdrop").addEventListener("click",e),l("#sv-share-close").addEventListener("click",e),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&(a.preventDefault(),a.stopPropagation(),e())},{capture:!0});let s=()=>{let a=t._shareState;if(!a)return;let i=l("#sv-share-ts-check")?.checked&&a.t>0,r=De(a.id,a.t,{includeTime:i}),u=l("#sv-share-url");u&&(u.value=r);let d=a.title?`${a.title}`:"\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9",v=l("#sv-share-x");v&&(v.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(d)}&url=${encodeURIComponent(r)}`);let o=l("#sv-share-line");return o&&(o.href=`https://line.me/R/share?text=${encodeURIComponent(`${d}
${r}`)}`),r};l("#sv-share-ts-check").addEventListener("change",s),t._rebuild=s,l("#sv-share-url").addEventListener("focus",a=>a.target.select()),l("#sv-share-copy").addEventListener("click",async()=>{let a=l("#sv-share-url")?.value;if(!a)return;let i=!1;try{await navigator.clipboard.writeText(a),i=!0}catch{try{l("#sv-share-url").select(),i=document.execCommand("copy")}catch{}}let r=l("#sv-share-copy");r&&(r.textContent=i?"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",r.classList.add("copied"),setTimeout(()=>{r.textContent="\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",r.classList.remove("copied")},1600))});let n=l("#sv-share-native");navigator.share&&n&&(n.hidden=!1,n.addEventListener("click",async()=>{let a=t._shareState,i=l("#sv-share-url")?.value;if(i)try{await navigator.share({title:a?.title||"",url:i})}catch{}}))}function He(){let e=l("#stream-viewer")?._currentStream;if(!e?.url)return;let s=P(e.url);if(!s)return;Ve();let n=l("#sv-share-modal"),a=Mt(A().t);n._shareState={id:s,t:a,title:e.title||""};let i=l("#sv-share-video-title");i&&(i.textContent=e.title||"(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)");let r=l("#sv-share-ts-row"),u=l("#sv-share-ts-check"),d=l("#sv-share-ts-label");r&&(r.hidden=a<=5),u&&(u.checked=a>5),d&&(d.textContent=C(a)),n._rebuild?.(),n.hidden=!1}async function Ne(){let t=A();if(!t.v)return!1;let e=t.v,s=t.t;try{await xt()}catch{}let n=[];c.channelData?.combined&&n.push(c.channelData.combined),Object.values(c.channelData?.channels||{}).forEach(a=>{a&&n.push(a)});for(let a of n){let i=(a.streams||[]).find(r=>P(r.url)===e);if(i)return T(i,s),!0}try{let r=((await(await fetch("data/music.json")).json())?.videos||[]).find(u=>P(u.url)===e);if(r)return T({url:r.url,title:r.title,isMv:!0},s),!0}catch{}return T({url:`https://www.youtube.com/watch?v=${e}`,title:"",isMv:!0},s),!0}function vt(t,e=0,s=""){let n=P(t);if(!n)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}{let d=l("#stream-viewer");if(d&&!d.hidden&&!x)if(d.classList.contains("sv-minified"))_t();else{++V,d.hidden=!0,d._currentStream=null,y=null;let v=l("#sv-player-wrap");v&&(v.innerHTML=""),document.body.style.overflow="",_=null,pt={},bt(),N()}}Pt(),Ct();let a=l("#yt-player-container"),i=l("#yt-player-panel");if(!a||!i)return;ht();let r=l("#yt-mini-title");r&&(r.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let u=l("#yt-mini-hint");u&&(u.textContent=_?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),i.classList.toggle("has-stream",!!_),i.hidden=!1,ce(()=>{let d=document.createElement("div");a.appendChild(d);try{g=new window.YT.Player(d,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:v=>{let o=st();try{v.target.setVolume(o)}catch{}if(nt(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,o),e>5)try{v.target.seekTo(e,!0)}catch{}ie()},onStateChange:v=>{let o=v.data===window.YT.PlayerState.PLAYING,p=l("#yt-mini-play");p&&p.setAttribute("data-playing",o?"1":"0")}}})}catch{let o=e>0?`&start=${Math.floor(e)}`:"";a.innerHTML=`<iframe src="https://www.youtube.com/embed/${n}?autoplay=1&playsinline=1${o}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function Ct(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,!_t()&&(ht(),_=null)}),l("#yt-mini-play").addEventListener("click",()=>{if(g)try{g.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?g.pauseVideo():g.playVideo()}catch{}}),l("#yt-mini-restore").addEventListener("click",()=>{le()||_&&T(_,Pe())}),l("#yt-mini-progress-bar").addEventListener("click",n=>{if(!g)return;let i=n.currentTarget.getBoundingClientRect(),r=Math.max(0,Math.min(1,(n.clientX-i.left)/i.width));try{let u=g.getDuration?.()||0;u>0&&g.seekTo(r*u,!0)}catch{}});let e=l("#yt-mini-vol-slider"),s=l("#yt-mini-vol-btn");if(e){let n=st();e.value=n,e.style.setProperty("--pct",`${n}%`),s&&(s.textContent=W(n)),e.addEventListener("input",a=>{let i=parseInt(a.target.value);if(a.target.style.setProperty("--pct",`${i}%`),Lt(i),s&&(s.textContent=W(i)),g)try{g.setVolume(i)}catch{}})}if(s){let n=80;s.addEventListener("click",()=>{if(!e)return;let a=parseInt(e.value),i=a>0?0:n||80;a>0&&(n=a),nt(e,s,g,i)})}}var re=!1,oe=[];window.onYouTubeIframeAPIReady=()=>{re=!0,oe.splice(0).forEach(t=>t()),import("./chunk-O7NIHE7J.js").then(t=>t.notifyYtReady()).catch(()=>{})};function Pt(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function ce(t){if(re&&window.YT?.Player){t();return}oe.push(t)}var st=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),Lt=t=>localStorage.setItem("kanaVol",String(t)),W=t=>t===0?"\u{1F507}":t<50?"\u{1F509}":"\u{1F50A}";function nt(t,e,s,n){if(t&&(t.value=n,t.style.setProperty("--pct",`${n}%`)),e&&(e.textContent=W(n)),s)try{s.setVolume(n)}catch{}}var y=null,V=0,_=null,St=0,de=0,x=!1,at="timeline",pt={},E={},J=!1,g=null,dt=null;function ue(){at=c.activeTab||"timeline",c.activeTab="player",S(".tab-btn").forEach(t=>t.classList.remove("active")),S(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function bt(){let t=pt;pt={},I(at||"timeline",t)}function Be(){x=!0;let t=l("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=l("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function C(t){let e=Math.floor(t),s=Math.floor(e/3600),n=Math.floor(e%3600/60),a=e%60;return s>0?`${s}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${n}:${String(a).padStart(2,"0")}`}function ve(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function tt(t){try{return JSON.parse(localStorage.getItem(ve(t))||"null")||{}}catch{return{}}}function $t(t,e){try{localStorage.setItem(ve(t),JSON.stringify(e))}catch{}}function qe(t,e,s){let n=s[e],a=n!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${m(C(n))} \u306B\u79FB\u52D5">${m(C(n))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",r=(E[e]||[]).map(v=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${v.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${m(C(v.timeSeconds))}">${m(C(v.timeSeconds))}</button>`).join(""),u=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,d=`<div class="sv-cts-row">${r}${u}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${m(t.title)}</span>
      <span class="sv-song-artist">${m(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${a}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${d}
  </div>`}async function Ue(t){if(E={},!t?.channel||t?.index==null)return;try{let n=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,a=await fetch(n);if(!a.ok)return;let i=await a.json();for(let r of i.items||[])E[r.songIndex]||(E[r.songIndex]=[]),E[r.songIndex].push({timeSeconds:r.timeSeconds,note:r.note??null})}catch{}let e=l("#stream-viewer");if(!e||e._currentStream!==t)return;let s=l("#sv-setlist");s&&X(s,t.songs,tt(t)),je(t)}function Re(t,e,s){l("#sv-cts-modal")?.remove();let n=y?.getCurrentTime?.()??0,a=C(Math.floor(n)),i=document.createElement("div");i.id="sv-cts-modal",i.className="sv-cts-modal-overlay",i.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-cts-modal-song">${m(s)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${m(a)}" placeholder="0:00" autocomplete="off">
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
  `,document.body.appendChild(i);let r=()=>i.remove();i.querySelector(".sv-cts-modal-close").addEventListener("click",r),i.querySelector(".sv-cts-modal-cancel").addEventListener("click",r),i.addEventListener("click",u=>{u.target===i&&r()}),i.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let u=i.querySelector("#sv-cts-ts-input").value.trim(),d=i.querySelector("#sv-cts-note-input").value.trim()||null,v=It(u),o=i.querySelector("#sv-cts-status");if(v===null){o.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",o.className="sv-cts-modal-status error",o.hidden=!1;return}let p=i.querySelector("#sv-cts-submit");p.disabled=!0,p.textContent="\u9001\u4FE1\u4E2D\u2026";try{let f=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:v,submitterNote:d})});if(f.ok)o.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",o.className="sv-cts-modal-status success",o.hidden=!1,p.hidden=!0,i.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let h=await f.json().catch(()=>({}));o.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${h.error||f.statusText}`,o.className="sv-cts-modal-status error",o.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}catch(f){o.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.message}`,o.className="sv-cts-modal-status error",o.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>i.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function u(d){d.key==="Escape"&&(r(),document.removeEventListener("keydown",u))})}function je(t){let e=l("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let n=Object.keys(E).length>=t.songs.length;e.textContent=n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function Ye(t){l("#sv-bulk-modal")?.remove();let e=tt(t),a=Object.keys(E).length>=t.songs.length,i=t.songs.map((d,v)=>{let o=e[v]!=null?C(e[v]):"",p=E[v]?.[0]?.timeSeconds!=null?C(E[v][0].timeSeconds):"",f=o||p;return`
      <div class="sv-bulk-row" data-idx="${v}">
        <span class="sv-bulk-num">${v+1}</span>
        <span class="sv-bulk-title" title="${m(d.title)}">${m(d.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${m(f)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${v}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${v}">\u23F1</button>
      </div>`}).join(""),r=document.createElement("div");r.id="sv-bulk-modal",r.className="sv-cts-modal-overlay",r.innerHTML=`
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="${a?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">${a?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}</span>
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
  `,document.body.appendChild(r);let u=()=>r.remove();r.querySelector(".sv-cts-modal-close").addEventListener("click",u),r.querySelector(".sv-cts-modal-cancel").addEventListener("click",u),r.addEventListener("click",d=>{d.target===r&&u()}),r.querySelector(".sv-paste-apply").addEventListener("click",()=>{let v=(r.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(f=>f.trim()).filter(Boolean),o=0;for(let f of v){let h=Xe(f);if(!h)continue;let b=Ze(h.title,h.artist,t.songs);if(b>=0){let w=r.querySelector(`[data-bulk-ts-idx="${b}"]`);w&&(w.value=h.start,o++)}}let p=r.querySelector(".sv-paste-result");p&&(p.textContent=o>0?`${v.length}\u884C\u3092\u89E3\u6790 \u2192 ${o}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",p.hidden=!1)}),r.querySelector(".sv-bulk-rows").addEventListener("click",d=>{let v=d.target.closest("[data-bulk-now]");if(!v)return;let o=parseInt(v.dataset.bulkNow,10),p=y?.getCurrentTime?.();if(p!=null){let f=r.querySelector(`[data-bulk-ts-idx="${o}"]`);f&&(f.value=C(Math.floor(p)))}}),r.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let d=r.querySelector("#sv-bulk-note").value.trim()||null,v=r.querySelector("#sv-bulk-status"),o=r.querySelector("#sv-bulk-submit"),p=[];if(r.querySelectorAll("[data-bulk-ts-idx]").forEach(b=>{let w=parseInt(b.dataset.bulkTsIdx,10),$=It(b.value.trim());$!==null&&p.push({songIndex:w,timeSeconds:$})}),!p.length){v.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",v.className="sv-cts-modal-status error",v.hidden=!1;return}o.disabled=!0,o.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${p.length})`,v.hidden=!0;let f=0,h=0;await Promise.all(p.map(async b=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:b.songIndex,timeSeconds:b.timeSeconds,submitterNote:d})})).ok?f++:h++}catch{h++}o.textContent=`\u7533\u8ACB\u4E2D\u2026 (${f+h}/${p.length})`})),h===0?(v.textContent=`${f}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,v.className="sv-cts-modal-status success",o.hidden=!0,r.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(v.textContent=`${f}\u4EF6\u6210\u529F / ${h}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,v.className="sv-cts-modal-status error",o.disabled=!1,o.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),v.hidden=!1}),document.addEventListener("keydown",function d(v){v.key==="Escape"&&(u(),document.removeEventListener("keydown",d))})}function pe(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function Fe(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function Oe(t,e){let s=pe(),n=s.find(a=>String(a.id)===String(t));return n?(n.streams||(n.streams=[]),n.streams.includes(e)||(n.streams.push(e),Fe(s)),!0):!1}function Ke(){let t=c.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let n=t.findIndex(a=>a.channel===s.channel&&a.index===s.index);n<0||n>=t.length-1||T(t[n+1])}function Zt(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${m(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=Z(t.url),n=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${m(n)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${m(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${m(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${L(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function ze(t){let e=l("#sv-below-player");if(!e)return;let s=c.data?.streams||[],n=s.findIndex(o=>o.channel===t.channel&&o.index===t.index),a=n>=0&&n<s.length-1?s[n+1]:null,i=n>0?s[n-1]:null,r=new Set(t.songs.map(o=>o.title)),u=s.filter((o,p)=>p!==n).map(o=>{let p=o.songs.filter(f=>r.has(f.title));return{stream:o,overlap:p.length,sharedSongs:p.slice(0,3).map(f=>f.title)}}).filter(o=>o.overlap>0).sort((o,p)=>p.overlap-o.overlap).slice(0,8),d=pe(),v=R(t);e.innerHTML=`
    <div class="sv-bp-wrap">

      <!-- \u9023\u7D9A\u518D\u751F + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${J?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${J?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          ${a?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${m(a.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${Zt(a,"older")}
          ${Zt(i,"newer")}
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
      ${u.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u95A2\u9023\u914D\u4FE1 <span class="sv-bp-sh-sub">\uFF08\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${u.map(o=>{let p=Z(o.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(o.stream.channel)}" data-bp-index="${o.stream.index}">
              ${p?`<img class="sv-bp-rel-thumb" src="${m(p)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${m(o.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${L(o.stream.date)}</div>
                <div class="sv-bp-rel-songs">${o.sharedSongs.map(f=>m(f)).join("\u3001")}</div>
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
          ${d.map(o=>{let p=(o.streams||[]).includes(v);return`<button class="sv-bp-pl-btn${p?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${m(String(o.id))}"${p?" disabled":""}>
              <span class="sv-bp-pl-name">${m(o.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${p?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=o=>{let p=o.target.closest("#sv-ap-check");if(!p)return;J=p.checked;let f=e.querySelector(".sv-bp-ap-switch");f&&f.classList.toggle("sv-bp-ap-switch--on",J)},e.onclick=o=>{let p=o.target.closest("[data-bp-action]");if(!p)return;let f=p.dataset.bpAction;if(f==="open-stream"){let h=p.dataset.bpChannel,b=parseInt(p.dataset.bpIndex,10),w=(c.data?.streams||[]).find($=>$.channel===h&&$.index===b);w&&T(w)}else if(f==="add-pl"){let h=p.dataset.bpPlId;if(Oe(h,v)){p.classList.add("sv-bp-pl-btn--added"),p.disabled=!0;let b=p.querySelector(".sv-bp-pl-status");b&&(b.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}}}var Q=null;async function Ge(){if(Q)return Q;try{Q=(await(await fetch("data/music.json")).json())?.videos||[]}catch{Q=[]}return Q}function Qe(t){let e=String(t||"");return e=e.replace(/【[^】]*】/g," "),e=e.replace(/^\s*MV[⌇|｜♪♬:：\-\s]*/i," "),e=e.split(/[\/／|｜]/)[0],e=e.replace(/歌ってみた|covered?\s*(by.*)?$/gi," "),e.trim()}async function Je(t){let e=l("#sv-below-player");if(!e)return;try{await xt()}catch{}let s=await Ge();if(l("#stream-viewer")?._currentStream!==t)return;let n=c.channelData?.combined?.streams||c.data?.streams||[],a=Y(Qe(t.title)),i=[];if(a.length>1)for(let o of n){let p=(o.songs||[]).find(f=>{let h=Y(f.title);return h===a||h.length>1&&(h.includes(a)||a.includes(h))});p&&i.push({stream:o,songTitle:p.title})}let r=i.slice(0,8),u={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9\u30BD\u30F3",cover:"\u30AB\u30D0\u30FC"},d=s.find(o=>o.url===t.url),v=s.filter(o=>o.url!==t.url).sort((o,p)=>{let f=d&&o.type===d.type?1:0,h=d&&p.type===d.type?1:0;return f!==h?h-f:(p.publishedAt||"").localeCompare(o.publishedAt||"")}).slice(0,12);e.innerHTML=`
    <div class="sv-bp-wrap">
      ${r.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u{1F3A4} \u3053\u306E\u66F2\u304C\u6B4C\u308F\u308C\u305F\u6B4C\u67A0 <span class="sv-bp-sh-sub">\uFF08\u5168${i.length}\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${r.map(o=>{let p=Z(o.stream.url);return`<button class="sv-bp-rel-card" type="button" data-mv-action="open-stream" data-mv-channel="${m(o.stream.channel)}" data-mv-index="${o.stream.index}">
              ${p?`<img class="sv-bp-rel-thumb" src="${m(p)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${m(o.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${L(o.stream.date)}\u3000\u7B2C${o.stream.index}\u67A0</div>
                <div class="sv-bp-rel-songs">\u{1F3B5} ${m(o.songTitle)}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      ${v.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u{1F3AC} \u307B\u304B\u306E\u52D5\u753B <button class="sv-mv-all-btn" type="button" data-mv-action="all-videos">\u3059\u3079\u3066\u898B\u308B \u2192</button></div>
        <div class="sv-mv-grid">
          ${v.map(o=>{let p=Z(o.url);return`<button class="sv-mv-card" type="button" data-mv-action="open-mv" data-mv-url="${m(o.url)}" data-mv-title="${m(o.title)}">
              ${p?`<img class="sv-mv-card-thumb" src="${m(p)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-mv-card-thumb"></div>'}
              <div class="sv-mv-card-body">
                <div class="sv-mv-card-title">${m(o.title)}</div>
                <div class="sv-mv-card-type">${u[o.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB"}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}
    </div>
  `,e.onclick=o=>{let p=o.target.closest("[data-mv-action]");if(!p)return;let f=p.dataset.mvAction;if(f==="open-stream"){let h=p.dataset.mvChannel,b=parseInt(p.dataset.mvIndex,10),$=(c.channelData?.combined?.streams||c.data?.streams||[]).find(U=>U.channel===h&&U.index===b);$&&T($)}else f==="open-mv"?T({url:p.dataset.mvUrl,title:p.dataset.mvTitle,isMv:!0}):f==="all-videos"&&I("playlists")}}function X(t,e,s){t.innerHTML=e.map((n,a)=>qe(n,a,s)).join("")}function It(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Xe(t){let e=t.match(/^(\d{1,2}:\d{2}(?::\d{2})?)[\s　]+(.+?)\s*\/\s*(.+?)[\s　]+(\d{1,2}:\d{2}(?::\d{2})?)$/);return e?{start:e[1].trim(),title:e[2].trim(),artist:e[3].trim(),end:e[4].trim()}:null}function Y(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function Ze(t,e,s){let n=Y(t),a=Y(e),i=-1,r=0;for(let u=0;u<s.length;u++){let d=Y(s[u].title),v=Y(s[u].artist),o=0;d===n?o+=80:n.length>1&&(d.includes(n)||n.includes(d))&&(o+=40),a&&v===a?o+=20:a&&a.length>1&&(v.includes(a)||a.includes(v))&&(o+=10),o>r&&(r=o,i=u)}return r>=40?i:-1}function me(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
  `,t.appendChild(e),l("#sv-close").addEventListener("click",()=>et()),l("#sv-share-btn").addEventListener("click",He),l("#sv-music-btn").addEventListener("click",Ae),l("#sv-fullscreen-btn").addEventListener("click",Be);let s=l("#sv-vol-slider"),n=l("#sv-vol-btn");if(s){let a=st();s.value=a,s.style.setProperty("--pct",`${a}%`),n&&(n.textContent=W(a)),s.addEventListener("input",i=>{let r=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${r}%`),Lt(r),n&&(n.textContent=W(r)),y)try{y.setVolume(r)}catch{}})}if(n){let a=80;n.addEventListener("click",()=>{if(!s)return;let i=parseInt(s.value),r=i>0?0:a||80;i>0&&(a=i),nt(s,n,y,r),Lt(r)})}e.querySelectorAll("[data-bc-tab]").forEach(a=>{a.addEventListener("click",()=>{at=a.dataset.bcTab,et()})}),l("#sv-import-toggle").addEventListener("click",()=>{let a=l("#sv-import-area");a&&(a.hidden=!a.hidden,a.hidden||l("#sv-import-input")?.focus())}),l("#sv-import-cancel").addEventListener("click",()=>{let a=l("#sv-import-area");a&&(a.hidden=!0);let i=l("#sv-import-input");i&&(i.value="")}),l("#sv-import-apply").addEventListener("click",()=>{let a=e._currentStream;if(!a)return;let i=l("#sv-import-input");if(!i)return;let u=i.value.split(`
`).map(o=>It(o)).filter(o=>o!==null);if(!u.length)return;let d=tt(a);u.forEach((o,p)=>{p<a.songs.length&&(d[p]=o)}),$t(a,d),X(l("#sv-setlist"),a.songs,d);let v=l("#sv-import-area");v&&(v.hidden=!0),i.value=""}),l("#sv-cts-bulk-btn").addEventListener("click",()=>{let a=e._currentStream;a&&Ye(a)}),l("#sv-setlist").addEventListener("click",a=>{let i=a.target.closest("[data-action]");if(!i)return;let r=parseInt(i.dataset.idx,10),u=e._currentStream;if(!u)return;let d=tt(u);if(i.dataset.action==="seek"){if(d[r]!=null&&y?.seekTo){y.seekTo(d[r],!0);try{y.playVideo()}catch{}}}else if(i.dataset.action==="set-ts"){let v=y?.getCurrentTime?.();v!=null&&(d[r]=Math.floor(v),$t(u,d),X(l("#sv-setlist"),u.songs,d))}else if(i.dataset.action==="del-ts")delete d[r],$t(u,d),X(l("#sv-setlist"),u.songs,d);else if(i.dataset.action==="cts-seek"){let v=Number(i.dataset.ctsSeconds);if(!isNaN(v)&&y?.seekTo){y.seekTo(v,!0);try{y.playVideo()}catch{}}}else if(i.dataset.action==="cts-propose"){let v=u.songs[r];Re(u,r,v?.title||`\u66F2 ${r+1}`)}})}function T(t,e=0){if(!t?.url)return;let s=P(t.url);if(!s){vt(t.url);return}me(),Pt(),import("./chunk-O7NIHE7J.js").then(b=>(b.releaseMusicPlayerVideo||b.pauseMusicPlayer)()).catch(()=>{});let n=l("#stream-viewer");if(n?.classList.contains("sv-minified")){if(n._currentStream?.url===t.url){if(le(),e>0)try{y?.seekTo(Math.floor(e),!0),y?.playVideo()}catch{}return}_t()}let a=l("#yt-player-panel");if(a&&!a.hidden){try{g?.pauseVideo()}catch{}a.hidden=!0,ht()}if(_=null,x){x=!1;let b=l("#stream-viewer");b&&b.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}x=!1,ue();let i=l("#stream-viewer");i.classList.remove("sv-fullscreen"),i.classList.toggle("sv-mv-mode",!!t.isMv),i._currentStream=t;let r=++V,u=i.querySelectorAll("[data-bc-tab]");u[1]&&(t.isMv?(u[1].dataset.bcTab="playlists",u[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(u[1].dataset.bcTab="timeline",u[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let d=l("#sv-bc-title");d&&(d.textContent=t.title||"\u914D\u4FE1");let v=l("#sv-stream-meta");v&&(v.textContent=t.isMv?"":`${L(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let o=l("#sv-yt-link");o&&(o.href=t.url);let p=l("#sv-song-count");if(p&&(p.textContent=t.isMv?"":`${t.songs.length}\u66F2`),E={},t.isMv){let b=l("#sv-setlist");b&&(b.innerHTML="");let w=l("#sv-below-player");w&&(w.innerHTML=""),Je(t)}else{let b=tt(t);X(l("#sv-setlist"),t.songs,b),Ue(t),ze(t)}i.hidden=!1,document.body.style.overflow="",N(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),y=null;let f=l("#sv-player-wrap");f.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let h=Math.floor(e);ce(()=>{if(r!==V||i.hidden)return;f.innerHTML="";let b=document.createElement("div");f.appendChild(b);try{y=new window.YT.Player(b,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...h>0?{start:h}:{}},events:{onReady:w=>{let $=st();try{w.target.setVolume($)}catch{}nt(l("#sv-vol-slider"),l("#sv-vol-btn"),null,$);try{w.target.setPlaybackQuality("hd1080")}catch{}try{w.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(h>5)try{w.target.seekTo(h,!0)}catch{}},onStateChange:w=>{if(r===V){if(w.data===window.YT.PlayerState.PLAYING)try{w.target.setPlaybackQuality("hd1080")}catch{}w.data===window.YT.PlayerState.ENDED&&J&&!i.classList.contains("sv-minified")&&Ke()}},onError:()=>{r===V&&(f.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(s)}?autoplay=1&playsinline=1&rel=0${h>0?`&start=${h}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{f.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(s)}?autoplay=1&playsinline=1&rel=0${h>0?`&start=${h}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function et(){let t=l("#stream-viewer");if(!t||t.hidden||t.classList.contains("sv-minified"))return;if(x){x=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let s=l("#sv-close");s&&(s.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let n=l("#sv-fullscreen-btn");n&&n.setAttribute("aria-pressed","false");return}if(Ie())return;++V,t.hidden=!0,t._currentStream=null,y=null;let e=l("#sv-player-wrap");e&&(e.innerHTML=""),document.body.style.overflow="",bt(),N()}window.__openStreamViewer=T;function fe(t){let e=ct(t),s=l("#song-modal"),n=l("#song-modal-body"),a=l("#song-modal-title");if(!e||!s||!n||!a)return;Nt(e),a.textContent=e.title;let i=(e.streamRefs||[]).slice(0,8).map(d=>({...d,thumbnail:Z(d.url),thumbnailFallback:Me(d.url),thumbnailTiny:Ce(d.url),detailKey:R(d)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),u=yt(e.key);n.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${m(e.key)}">${m(e.artist)}</button>
        <div class="song-detail-tags">${r.map(d=>`<span class="tag-badge">${m(d)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${L(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${u?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${m(e.key)}">${u?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${m(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${i.length?i.map(d=>`
        <div class="song-detail-stream">
          ${d.thumbnail&&d.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${m(d.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${m(d.thumbnail)}" data-fallback="${m(d.thumbnailFallback)}" data-tiny="${m(d.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${m(d.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${m(e.key)}" data-streamkey="${m(d.detailKey)}">
            <span>${L(d.date)}</span>
            <strong>${m(d.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,s.hidden=!1,l("#song-modal-close")?.focus()}function We(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s();let a=n.target.closest("[data-inline-youtube]");if(a){n.preventDefault(),n.stopPropagation(),vt(a.dataset.inlineYoutube);return}let i=n.target.closest("[data-detail-action]");if(i){if(n.stopPropagation(),i.dataset.detailAction==="close"&&s(),i.dataset.detailAction==="favorite"){let r=i.dataset.songkey;Dt(r);let u=yt(r);i.textContent=u?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",i.classList.toggle("primary",u),i.classList.toggle("ghost",!u)}if(i.dataset.detailAction==="timeline"){let r=ct(i.dataset.songkey);s(),r&&Te(r)}if(i.dataset.detailAction==="stream"){let r=ct(i.dataset.songkey),u=r?.streamRefs?.find(d=>R(d)===i.dataset.streamkey);s(),r&&u&&Ee(r,u)}if(i.dataset.detailAction==="artist"){let r=ct(i.dataset.songkey);s(),r&&_e(r)}}}),t.addEventListener("error",n=>{let a=n.target.closest?.(".song-detail-thumb");if(!a)return;let i=a.dataset.fallback||a.dataset.tiny||"";if(i&&a.src!==i){a.src=i,a.dataset.fallback===i?delete a.dataset.fallback:delete a.dataset.tiny;return}a.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&s()})}var Wt=!1;function ts(){if(!c.data)return;let{stats:t,streams:e=[]}=c.data,s=e[0]?.date||null,n=gt(s),a=t.dataGeneratedDate||c.channelData?.dataGeneratedDate||null,i=gt(a),r=t.channelLabel||t.channelId||"",u=r?`<span class="badge accent" style="margin-right:8px;">${m(r)}</span>`:"";l("#updated-info").innerHTML=u+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${L(a)||"\u2014"}</strong>`+(i!=null?` <span class="badge">${i}\u65E5\u524D</span>`:"");let d=l("#stats-grid");if(!Wt)d.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${B(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${B(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${B(t.streams)}<span class="stat-unit">\u56DE</span></div>
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
        <div class="stat-value">${te(c.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,Wt=!0;else{let v=d.querySelectorAll(".stat-value");v.length>=6&&(v[0].textContent=B(t.total),v[0].innerHTML+='<span class="stat-unit">\u56DE</span>',v[1].textContent=B(t.repertoire),v[1].innerHTML+='<span class="stat-unit">\u66F2</span>',v[2].textContent=B(t.streams),v[2].innerHTML+='<span class="stat-unit">\u56DE</span>',v[3].textContent=t.avgPerStream,v[3].innerHTML+='<span class="stat-unit">\u66F2</span>',v[4].textContent=n??"\u2014",v[4].innerHTML+='<span class="stat-unit">\u65E5</span>',v[5].textContent=te(c.data),v[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function te(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,s=t.streams[0].date;return Math.floor((s-e)/864e5)+1}function es(){l("#loading").hidden=!1,l("#error").hidden=!0}function ss(){l("#loading").hidden=!0}function ns(t){let e=l("#loading"),s=l("#error"),n=l("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),n&&(n.textContent=t&&t.message?t.message:String(t))}function as(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let s=document.getElementById("hero-ch-bg");s&&(s.dataset.mode=t||"all")}var is={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:"\u{1F6CD}",label:"official store",url:"https://react.booth.pm"},{icon:"\u{1F310}",label:"official site",url:"https://v-react.com"},{icon:"\u{1F3B5}",label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:"\u{1F3A7}",label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:"\u25B6",label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function ot(t){let e=is[t];if(!e)return"";let s=e.bannerUrl?`<img class="ch-card-banner-img" src="${m(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${m(e.label)}</span>`:`<span class="ch-card-banner-label">${m(e.label)}</span>`,n=e.avatarUrl?`<img class="ch-card-avatar-img" src="${m(e.avatarUrl)}" alt="${m(e.name)}" loading="lazy" referrerpolicy="no-referrer">`:t==="new"?"\u65B0":"\u65E7",a=e.desc?`<p class="ch-card-desc">${e.desc.split(`
`).map(r=>m(r)).join("<br>")}</p>`:"",i=e.links?.length?`
    <div class="ch-card-links">
      ${e.links.map(r=>`
        <a class="ch-card-link" href="${m(r.url)}" target="_blank" rel="noopener">
          <span class="ch-card-link-icon" aria-hidden="true">${r.icon}</span>
          <span>${m(r.label)}</span>
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
        ${a}
        ${i}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${m(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u3078
          </a>
        </div>
      </div>
    </div>`}function ls(t){let e=l("#ch-modal"),s=l("#ch-modal-body");if(!e||!s)return;let n="";t==="new"?n=ot("new"):t==="old"?n=ot("old"):n=ot("new")+ot("old"),s.innerHTML=n,e.hidden=!1,l("#ch-modal-close")?.focus()}function rs(){let t=l("#ch-modal"),e=l("#ch-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s()}),document.querySelectorAll("[data-ch-modal]").forEach(n=>{n.addEventListener("click",()=>ls(n.dataset.chModal))})}function os(){let t=l("#help-modal"),e=l("#help-btn"),s=l("#help-close");if(!t||!e||!s)return;let n=()=>{t.hidden=!1,s.focus()},a=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",n),s.addEventListener("click",a),t.addEventListener("click",i=>{i.target===t&&a()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&a()})}function cs(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function At(){es();try{let t=await qt();c.channelData=t,!F&&!t.fullLoaded&&ne();let e=A(),s=!!e.v;c.songsQuery=e.q,c.activeTab=s?"player":ut(e.tab)?e.tab:"dashboard",ae(c.activeTab);let n=e.channel||c.channel||O;if(H(n)||(n=O),!H(n)){let a=Object.keys(t.channels)[0];a&&(n=a)}if(!H(n))throw new Error("No channel data could be loaded");xe(),mt(n,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0,render:!s}),s&&(await Ne()||I(e.tab,{updateUrl:!1,initial:!0})),ss()}catch(t){console.error("[init] failed:",t),ns(t)}}function ds(){if(!c.channelData)return;let t=A();c.songsQuery=t.q,t.channel!==c.channel&&H(t.channel)&&mt(t.channel,{resetSearch:!1,updateUrl:!1}),I(t.tab,{updateUrl:!1})}S(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=l("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!x&&!s.classList.contains("sv-minified")){at=e,et();return}I(e)})});S(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||mt(t.dataset.channel))})});window.addEventListener("popstate",ds);S("[data-audience]").forEach(t=>{t.addEventListener("click",()=>$e(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),Et(e.dataset.artistSearch||e.textContent||"");return}let s=t.target.closest("[data-playlist-add]");if(s){t.preventDefault(),t.stopPropagation();let r=s.dataset.playlistAdd,u=s.dataset.streamTitle||"";import("./chunk-C5YNPIUH.js").then(d=>d.showAddToPlaylistModal(r,u));return}let n=t.target.closest("[data-stream-play]");if(n){t.preventDefault(),t.stopPropagation();let r=n.dataset.streamPlay,u=(c.data?.streams||[]).find(d=>R(d)===r);u?.url?T(u):n.dataset.inlineYoutube&&vt(n.dataset.inlineYoutube);return}let a=t.target.closest("[data-inline-youtube]");if(a){t.preventDefault(),t.stopPropagation(),vt(a.dataset.inlineYoutube);return}if(Ht(t.target))return;let i=t.target.closest("[data-songkey]");i&&fe(i.dataset.songkey)});l("#retry-btn").addEventListener("click",At);l("#reload-btn").addEventListener("click",At);os();rs();Ct();me();We();Le();Se();cs();import("./chunk-O7NIHE7J.js").then(t=>{t.setApiLoader(Pt),t.initMusicPlayer()}).catch(()=>{});Kt(t=>{t.type==="song"?fe(t.song.key):t.type==="artist"?Et(t.artist):t.type==="stream"&&T(t.stream)});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),zt();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),Rt();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let a=l("#help-modal");a&&a.hidden&&(a.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let a=l("#stream-viewer"),i=!!l("#panel-player.active");if(a&&!a.hidden&&(x||i)){t.preventDefault(),et();return}if(Gt()){t.preventDefault(),z();return}let r=l("#song-modal");if(r&&!r.hidden)return;let u=l("#ch-modal");if(u&&!u.hidden){u.hidden=!0;return}let d=l("#help-modal");if(d&&!d.hidden){d.hidden=!0,l("#help-btn")?.focus();return}let v=l("#songs-search");v&&document.activeElement===v&&v.value&&(t.preventDefault(),v.value="",v.dispatchEvent(new Event("input",{bubbles:!0})))}});Yt(()=>{c.data&&(wt(),(c.activeTab==="dashboard"||c.activeTab==="analytics")&&q())});function us(){At()}us();
