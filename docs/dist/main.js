import{b as It,c as At,d as Dt,i as Ht,k as mt,l as J}from"./chunk-3QAEH344.js";import{a as Nt,b as Vt,e as vt,f as qt}from"./chunk-SIADDXVK.js";import{a as B}from"./chunk-MKJIXTK4.js";import{a as Ct,b as ut,c as Mt,e as c}from"./chunk-N3S3MIXU.js";import{D as pt,E as $,G as H,L as P,M as Pt,a as l,b as L,d as m}from"./chunk-FKVR6ZKV.js";var k=-1,_=[],ft=null;function Rt(t){ft=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",n=>{n.target===e&&Y()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>Kt(s.value)),s.addEventListener("keydown",ue),document.getElementById("omni-listbox").addEventListener("click",n=>{let i=n.target.closest("[data-omni-idx]");i&&Ft(Number(i.dataset.omniIdx))})}function Ut(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,k=-1,_=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Kt("")}function Y(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),k=-1}function jt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function ue(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),k=Math.min(k+1,e.length-1),Bt(e)):t.key==="ArrowUp"?(t.preventDefault(),k=Math.max(k-1,-1),Bt(e)):t.key==="Enter"?(t.preventDefault(),k>=0&&_[k]&&Ft(k)):t.key==="Escape"&&(t.preventDefault(),Y())}function Bt(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===k),e.setAttribute("aria-selected",String(s===k))}),k>=0&&t[k]?.scrollIntoView({block:"nearest"})}function Ft(t){let e=_[t];!e||!ft||(Y(),ft(e))}function Kt(t){let e=document.getElementById("omni-listbox");if(!e)return;k=-1,_=[];let s=c.data?.songs||[],n=c.data?.streams||[],i=t.trim().toLowerCase(),a="",o=0;if(!c.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!i){let r=s.slice(0,8);if(r.length){a+=Z("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let v of r)_.push({type:"song",song:v}),a+=Yt(v,o++,"")}e.innerHTML=a||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let u=s.filter(r=>N(r.title).includes(i)||N(r.artist).includes(i)).slice(0,8);if(u.length){a+=Z("\u{1F3B5} \u66F2");for(let r of u)_.push({type:"song",song:r}),a+=Yt(r,o++,i)}let p=new Set,d=[];for(let r of s)if(N(r.artist).includes(i)&&!p.has(r.artist)&&(p.add(r.artist),d.push(r.artist),d.length>=4))break;if(d.length){a+=Z("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let r of d){let v=s.filter(f=>f.artist===r).length;_.push({type:"artist",artist:r}),a+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${o++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${X(m(r),i)}</span>
          <span class="omni-item-meta">${v}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(n.length){let r=n.filter(v=>N(v.title).includes(i)||v.songs?.some(f=>N(f.title).includes(i)||N(f.artist).includes(i))).slice(0,5);if(r.length){a+=Z("\u{1F4C5} \u914D\u4FE1\u67A0");for(let v of r){_.push({type:"stream",stream:v});let f=v.channel==="new"?"\u65B0ch":v.channel==="old"?"\u65E7ch":"";a+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${o++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${X(m(v.title||"\u914D\u4FE1"),i)}</span>
            <span class="omni-item-meta">${$(v.date)}${f?" \xB7 "+f:""} \xB7 ${v.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}a||(a=`<div class="omni-empty">\u300C${m(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=a}function Z(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function Yt(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${X(m(t.title),s)}</span>
      <span class="omni-item-meta">${X(m(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function N(t){return String(t||"").toLowerCase()}function X(t,e){if(!e)return t;let n=t.toLowerCase().indexOf(e);return n<0?t:t.slice(0,n)+'<mark class="hl">'+t.slice(n,n+e.length)+"</mark>"+t.slice(n+e.length)}Vt();Mt();var Jt={dashboard:()=>import("./chunk-NX4KOKQI.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-AOWB3BNY.js").then(t=>t.renderRanking),songs:()=>import("./chunk-EQQ27U7N.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-4GOYTJ2B.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-QEXZHCSH.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-BWTSGM2I.js").then(t=>t.renderPlaylists)},W=new Map,Ot=0,V=null;function at(t){return Object.prototype.hasOwnProperty.call(Jt,t)}async function pe(t){W.has(t)||W.set(t,Jt[t]());try{return await W.get(t)}catch(e){throw W.delete(t),e}}function Zt(t){return["dashboard","timeline","analytics"].includes(t)}function ve(t,e={}){let s=l(`#panel-${t}`);if(!s)return;let n={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${m(n[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function me(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function fe(t){if(c.channelData?.fullLoaded)return;c.channelData=t;let e=M(c.channel)?c.channel:B,s=M(e);s&&(c.data=s),!Zt(c.activeTab)&&c.data&&A(c.activeTab,{autoLoad:!1})}function he(t){c.channelData=t,c.channelData.fullLoaded=!0;let e=M(c.channel)?c.channel:B;rt(e,{resetSearch:!1,updateUrl:!1,render:!1}),A(c.activeTab,{autoLoad:!1})}function Xt(){return V=At({meta:c.channelData,onSongsReady:fe}).then(he).finally(()=>{V=null}),V}async function be(){c.channelData?.fullLoaded||(V||Xt(),await V)}async function A(t=c.activeTab,e={}){if(t!=="playlists"&&(!c.data||!at(t))||!at(t))return;let s=c.channelData?.partialLoaded||c.channelData?.fullLoaded,n=c.channelData?.fullLoaded;if(t==="playlists"?!1:Zt(t)?!n:!s)if(e.autoLoad){me(t);try{await be()}catch(o){console.error("[data] full load failed",o);let u=l(`#panel-${t}`);u&&(u.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${m(o?.message||String(o))}</div>
              <button class="btn primary" type="button" data-load-full-data="${m(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,u.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{A(t,{autoLoad:!0})}));return}}else{ve(t,{initial:e.initial});return}let a=++Ot;try{let o=await pe(t);if(a!==Ot||t!==c.activeTab||!c.data)return;t==="songs"&&Ht(c.data.songs||[]),o()}catch(o){console.error(`[${t}] render failed`,o);let u=l(`#panel-${t}`);u&&(u.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${m(o?.message||String(o))}</div>
        </div>
      `)}}function D(t,e={}){at(t)||(t="dashboard");let s=l("#stream-viewer");if(t!=="player"&&s&&!s.hidden&&!x&&!s.classList.contains("sv-minified")){Q=t,ot=e,K();return}c.activeTab=t,Wt(t),e.updateUrl!==!1&&J({tab:t}),A(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Wt(t){L(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),L(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function M(t){return c.channelData?t==="all"?c.channelData.combined:c.channelData.channels[t]||null:null}function rt(t,e={}){let s=M(t);s&&(c.channel=t,Oe(t),c.data=s,c.timelineFilter=null,c.timelineFocus=null,c.timelineLimit=12,c.songsLimit=100,e.resetSearch!==!1&&(c.songsQuery="",c.songsGenre="all"),vt(),L("#channel-switch [data-channel]").forEach(n=>n.classList.toggle("active",n.dataset.channel===t)),gt(),e.updateUrl!==!1&&J({tab:c.activeTab,channel:t,q:c.songsQuery}),Ue(),e.render!==!1&&A(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function ye(t,e={}){c.audience=t==="singer"?"singer":"listener",c.singerMode=c.audience==="singer",c.singerMode||(c.singerPreset="all"),L(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===c.audience)}),document.body.dataset.audience=c.audience,gt(),c.audience==="singer"?(c.songsLimit=100,D("songs",{autoLoad:e.autoLoad!==!1})):c.data&&A(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function gt(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",s=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${s}`}function ge(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),s=l("#topbar-actions");if(!t||!e||!s)return;let n=a=>{e.checked=a,s.classList.toggle("is-open",a),t.setAttribute("aria-expanded",String(a))},i=()=>{n(!1),t.focus()};t.addEventListener("click",a=>{a.stopPropagation(),requestAnimationFrame(()=>n(e.checked))}),t.addEventListener("keydown",a=>{a.key!=="Enter"&&a.key!==" "||(a.preventDefault(),n(!e.checked))}),e.addEventListener("change",()=>{n(e.checked)}),document.addEventListener("click",a=>{s.classList.contains("is-open")&&(a.target.closest("#topbar-actions")||a.target.closest("#mobile-menu-toggle")||a.target.closest("#mobile-menu-state")||i())}),document.addEventListener("keydown",a=>{a.key==="Escape"&&i()}),s.addEventListener("click",a=>{a.stopPropagation()}),gt()}function we(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,n=420,i=()=>{!e||e.src||(e.src=e.dataset.src||"")},a=()=>{s=!1;let u=window.scrollY>n;u&&i(),t.hidden=!u,t.classList.toggle("is-visible",u),t.setAttribute("aria-hidden",String(!u)),t.tabIndex=u?0:-1},o=()=>{s||(s=!0,requestAnimationFrame(a))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",o,{passive:!0}),a()}function ke(){if(c.channelData)for(let t of L("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!c.channelData.combined:!!(c.channelData.channels&&c.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function Le({key:t,title:e,artist:s}){c.timelineFilter&&c.timelineFilter.key===t&&c.activeTab==="timeline"?c.timelineFilter=null:c.timelineFilter={key:t,title:e,artist:s},c.timelineFocus=null,c.timelineLimit=12,D("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function $e(t,e){c.timelineFilter={key:t.key,title:t.title,artist:t.artist},c.timelineFocus=H(e),c.timelineLimit=9999,D("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Se(t){wt(t.artist||"")}function wt(t){let e=String(t||"").replace(/"/g,"");c.songsQuery=e?`artist:"${e}"`:"",c.songsLimit=100,J({tab:"songs",q:c.songsQuery}),D("songs",{updateUrl:!1})}function st(t){return(c.data?.songs||[]).find(e=>e.key===t)||null}function O(t){let e=String(t||""),s=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let n of s){let i=e.match(n);if(i)return i[1]}return""}function kt(t){let e=O(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function xe(t){let e=O(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function Te(t){let e=O(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function Lt(){nt&&(clearInterval(nt),nt=null)}function te(){Lt(),nt=setInterval(()=>{if(y)try{let t=y.getDuration?.()||0,e=y.getCurrentTime?.()||0,s=t>0?Math.min(e/t*100,100):0,n=l("#yt-mini-progress-fill");n&&(n.style.width=`${s}%`);let a=y.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,o=l("#yt-mini-play");o&&o.setAttribute("data-playing",a?"1":"0")}catch{}},400)}function ct(){if(Lt(),y){try{y.destroy()}catch{}y=null}let t=l("#yt-player-container");t&&(t.innerHTML="")}function Ee(){if(y?.getCurrentTime)try{return y.getCurrentTime()}catch{}return Math.max(0,yt+(Date.now()-ie)/1e3)}function it(){if(!l("#stream-viewer")?.classList.contains("sv-minified"))return;let e=l("#sv-player-wrap"),s=document.querySelector("#yt-player-panel .yt-mini-video-wrap");if(!e||!s)return;let n=s.getBoundingClientRect();e.style.left=`${n.left}px`,e.style.top=`${n.top}px`,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`}function _e(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||!e||!g)return!1;St();let s=l("#yt-player-panel");if(!s)return!1;E=e;try{yt=Math.floor(g.getCurrentTime?.()??0)}catch{yt=0}ie=Date.now();let n=l("#yt-mini-title");n&&(n.textContent=e.title||"");let i=l("#yt-mini-hint");i&&(i.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),s.classList.add("has-stream"),s.hidden=!1,y=g,g=null,t.classList.add("sv-minified"),document.body.classList.add("has-sv-mini"),document.body.style.overflow="",Tt(),it(),window.addEventListener("resize",it),te();try{let a=y.getPlayerState?.();l("#yt-mini-play")?.setAttribute("data-playing",a===window.YT?.PlayerState?.PLAYING?"1":"0")}catch{}return G(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,z()),!0}function ee(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",it),Lt(),t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini");let e=l("#sv-player-wrap");e&&(e.style.cssText=""),g=y,y=null;let s=l("#yt-player-panel");return s&&(s.hidden=!0),le(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function $t(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",it),++I,t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");e&&(e.style.cssText="",e.innerHTML=""),ct();let s=l("#yt-player-panel");return s&&(s.hidden=!0),E=null,!0}function lt(t,e=0,s=""){let n=O(t);if(!n)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}{let p=l("#stream-viewer");if(p&&!p.hidden&&!x)if(p.classList.contains("sv-minified"))$t();else{++I,p.hidden=!0,p._currentStream=null,g=null;let d=l("#sv-player-wrap");d&&(d.innerHTML=""),document.body.style.overflow="",E=null,ot={},Tt()}}xt(),St();let i=l("#yt-player-container"),a=l("#yt-player-panel");if(!i||!a)return;ct();let o=l("#yt-mini-title");o&&(o.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let u=l("#yt-mini-hint");u&&(u.textContent=E?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),a.classList.toggle("has-stream",!!E),a.hidden=!1,ae(()=>{let p=document.createElement("div");i.appendChild(p);try{y=new window.YT.Player(p,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:d=>{let r=z();try{d.target.setVolume(r)}catch{}if(G(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,r),e>5)try{d.target.seekTo(e,!0)}catch{}te()},onStateChange:d=>{let r=d.data===window.YT.PlayerState.PLAYING,v=l("#yt-mini-play");v&&v.setAttribute("data-playing",r?"1":"0")}}})}catch{let r=e>0?`&start=${Math.floor(e)}`:"";i.innerHTML=`<iframe src="https://www.youtube.com/embed/${n}?autoplay=1&playsinline=1${r}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function St(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,!$t()&&(ct(),E=null)}),l("#yt-mini-play").addEventListener("click",()=>{if(y)try{y.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?y.pauseVideo():y.playVideo()}catch{}}),l("#yt-mini-restore").addEventListener("click",()=>{ee()||E&&q(E,Ee())}),l("#yt-mini-progress-bar").addEventListener("click",n=>{if(!y)return;let a=n.currentTarget.getBoundingClientRect(),o=Math.max(0,Math.min(1,(n.clientX-a.left)/a.width));try{let u=y.getDuration?.()||0;u>0&&y.seekTo(o*u,!0)}catch{}});let e=l("#yt-mini-vol-slider"),s=l("#yt-mini-vol-btn");if(e){let n=z();e.value=n,e.style.setProperty("--pct",`${n}%`),s&&(s.textContent=j(n)),e.addEventListener("input",i=>{let a=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${a}%`),bt(a),s&&(s.textContent=j(a)),y)try{y.setVolume(a)}catch{}})}if(s){let n=80;s.addEventListener("click",()=>{if(!e)return;let i=parseInt(e.value),a=i>0?0:n||80;i>0&&(n=i),G(e,s,y,a)})}}var se=!1,ne=[];window.onYouTubeIframeAPIReady=()=>{se=!0,ne.splice(0).forEach(t=>t()),import("./chunk-IRKL6VIF.js").then(t=>t.notifyYtReady()).catch(()=>{})};function xt(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function ae(t){if(se&&window.YT?.Player){t();return}ne.push(t)}var z=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),bt=t=>localStorage.setItem("kanaVol",String(t)),j=t=>t===0?"\u{1F507}":t<50?"\u{1F509}":"\u{1F50A}";function G(t,e,s,n){if(t&&(t.value=n,t.style.setProperty("--pct",`${n}%`)),e&&(e.textContent=j(n)),s)try{s.setVolume(n)}catch{}}var g=null,I=0,E=null,yt=0,ie=0,x=!1,Q="timeline",ot={},S={},R=!1,y=null,nt=null;function le(){Q=c.activeTab||"timeline",c.activeTab="player",L(".tab-btn").forEach(t=>t.classList.remove("active")),L(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function Tt(){let t=ot;ot={},D(Q||"timeline",t)}function Ce(){x=!0;let t=l("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=l("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function C(t){let e=Math.floor(t),s=Math.floor(e/3600),n=Math.floor(e%3600/60),i=e%60;return s>0?`${s}:${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")}`:`${n}:${String(i).padStart(2,"0")}`}function oe(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function F(t){try{return JSON.parse(localStorage.getItem(oe(t))||"null")||{}}catch{return{}}}function ht(t,e){try{localStorage.setItem(oe(t),JSON.stringify(e))}catch{}}function Me(t,e,s){let n=s[e],i=n!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${m(C(n))} \u306B\u79FB\u52D5">${m(C(n))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",o=(S[e]||[]).map(d=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${d.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${m(C(d.timeSeconds))}">${m(C(d.timeSeconds))}</button>`).join(""),u=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,p=`<div class="sv-cts-row">${o}${u}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${m(t.title)}</span>
      <span class="sv-song-artist">${m(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${i}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${p}
  </div>`}async function Pe(t){if(S={},!t?.channel||t?.index==null)return;try{let n=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,i=await fetch(n);if(!i.ok)return;let a=await i.json();for(let o of a.items||[])S[o.songIndex]||(S[o.songIndex]=[]),S[o.songIndex].push({timeSeconds:o.timeSeconds,note:o.note??null})}catch{}let e=l("#stream-viewer");if(!e||e._currentStream!==t)return;let s=l("#sv-setlist");s&&U(s,t.songs,F(t)),Ae(t)}function Ie(t,e,s){l("#sv-cts-modal")?.remove();let n=g?.getCurrentTime?.()??0,i=C(Math.floor(n)),a=document.createElement("div");a.id="sv-cts-modal",a.className="sv-cts-modal-overlay",a.innerHTML=`
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
  `,document.body.appendChild(a);let o=()=>a.remove();a.querySelector(".sv-cts-modal-close").addEventListener("click",o),a.querySelector(".sv-cts-modal-cancel").addEventListener("click",o),a.addEventListener("click",u=>{u.target===a&&o()}),a.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let u=a.querySelector("#sv-cts-ts-input").value.trim(),p=a.querySelector("#sv-cts-note-input").value.trim()||null,d=Et(u),r=a.querySelector("#sv-cts-status");if(d===null){r.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",r.className="sv-cts-modal-status error",r.hidden=!1;return}let v=a.querySelector("#sv-cts-submit");v.disabled=!0,v.textContent="\u9001\u4FE1\u4E2D\u2026";try{let f=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:d,submitterNote:p})});if(f.ok)r.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",r.className="sv-cts-modal-status success",r.hidden=!1,v.hidden=!0,a.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let b=await f.json().catch(()=>({}));r.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${b.error||f.statusText}`,r.className="sv-cts-modal-status error",r.hidden=!1,v.disabled=!1,v.textContent="\u63D0\u6848\u3059\u308B"}}catch(f){r.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.message}`,r.className="sv-cts-modal-status error",r.hidden=!1,v.disabled=!1,v.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>a.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function u(p){p.key==="Escape"&&(o(),document.removeEventListener("keydown",u))})}function Ae(t){let e=l("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let n=Object.keys(S).length>=t.songs.length;e.textContent=n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function De(t){l("#sv-bulk-modal")?.remove();let e=F(t),i=Object.keys(S).length>=t.songs.length,a=t.songs.map((p,d)=>{let r=e[d]!=null?C(e[d]):"",v=S[d]?.[0]?.timeSeconds!=null?C(S[d][0].timeSeconds):"",f=r||v;return`
      <div class="sv-bulk-row" data-idx="${d}">
        <span class="sv-bulk-num">${d+1}</span>
        <span class="sv-bulk-title" title="${m(p.title)}">${m(p.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${m(f)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${d}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${d}">\u23F1</button>
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
  `,document.body.appendChild(o);let u=()=>o.remove();o.querySelector(".sv-cts-modal-close").addEventListener("click",u),o.querySelector(".sv-cts-modal-cancel").addEventListener("click",u),o.addEventListener("click",p=>{p.target===o&&u()}),o.querySelector(".sv-paste-apply").addEventListener("click",()=>{let d=(o.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(f=>f.trim()).filter(Boolean),r=0;for(let f of d){let b=Be(f);if(!b)continue;let h=Ye(b.title,b.artist,t.songs);if(h>=0){let w=o.querySelector(`[data-bulk-ts-idx="${h}"]`);w&&(w.value=b.start,r++)}}let v=o.querySelector(".sv-paste-result");v&&(v.textContent=r>0?`${d.length}\u884C\u3092\u89E3\u6790 \u2192 ${r}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",v.hidden=!1)}),o.querySelector(".sv-bulk-rows").addEventListener("click",p=>{let d=p.target.closest("[data-bulk-now]");if(!d)return;let r=parseInt(d.dataset.bulkNow,10),v=g?.getCurrentTime?.();if(v!=null){let f=o.querySelector(`[data-bulk-ts-idx="${r}"]`);f&&(f.value=C(Math.floor(v)))}}),o.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let p=o.querySelector("#sv-bulk-note").value.trim()||null,d=o.querySelector("#sv-bulk-status"),r=o.querySelector("#sv-bulk-submit"),v=[];if(o.querySelectorAll("[data-bulk-ts-idx]").forEach(h=>{let w=parseInt(h.dataset.bulkTsIdx,10),T=Et(h.value.trim());T!==null&&v.push({songIndex:w,timeSeconds:T})}),!v.length){d.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",d.className="sv-cts-modal-status error",d.hidden=!1;return}r.disabled=!0,r.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${v.length})`,d.hidden=!0;let f=0,b=0;await Promise.all(v.map(async h=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:h.songIndex,timeSeconds:h.timeSeconds,submitterNote:p})})).ok?f++:b++}catch{b++}r.textContent=`\u7533\u8ACB\u4E2D\u2026 (${f+b}/${v.length})`})),b===0?(d.textContent=`${f}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,d.className="sv-cts-modal-status success",r.hidden=!0,o.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(d.textContent=`${f}\u4EF6\u6210\u529F / ${b}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,d.className="sv-cts-modal-status error",r.disabled=!1,r.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),d.hidden=!1}),document.addEventListener("keydown",function p(d){d.key==="Escape"&&(u(),document.removeEventListener("keydown",p))})}function re(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function He(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function Ne(t,e){let s=re(),n=s.find(i=>String(i.id)===String(t));return n?(n.streams||(n.streams=[]),n.streams.includes(e)||(n.streams.push(e),He(s)),!0):!1}function Ve(){let t=c.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let n=t.findIndex(i=>i.channel===s.channel&&i.index===s.index);n<0||n>=t.length-1||q(t[n+1])}function zt(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${m(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=kt(t.url),n=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${m(n)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${m(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${m(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${$(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function qe(t){let e=l("#sv-below-player");if(!e)return;let s=c.data?.streams||[],n=s.findIndex(r=>r.channel===t.channel&&r.index===t.index),i=n>=0&&n<s.length-1?s[n+1]:null,a=n>0?s[n-1]:null,o=new Set(t.songs.map(r=>r.title)),u=s.filter((r,v)=>v!==n).map(r=>{let v=r.songs.filter(f=>o.has(f.title));return{stream:r,overlap:v.length,sharedSongs:v.slice(0,3).map(f=>f.title)}}).filter(r=>r.overlap>0).sort((r,v)=>v.overlap-r.overlap).slice(0,8),p=re(),d=H(t);e.innerHTML=`
    <div class="sv-bp-wrap">

      <!-- \u9023\u7D9A\u518D\u751F + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${R?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${R?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          ${i?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${m(i.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${zt(i,"older")}
          ${zt(a,"newer")}
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
      ${u.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u95A2\u9023\u914D\u4FE1 <span class="sv-bp-sh-sub">\uFF08\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${u.map(r=>{let v=kt(r.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(r.stream.channel)}" data-bp-index="${r.stream.index}">
              ${v?`<img class="sv-bp-rel-thumb" src="${m(v)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${m(r.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${$(r.stream.date)}</div>
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
          ${p.map(r=>{let v=(r.streams||[]).includes(d);return`<button class="sv-bp-pl-btn${v?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${m(String(r.id))}"${v?" disabled":""}>
              <span class="sv-bp-pl-name">${m(r.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${v?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=r=>{let v=r.target.closest("#sv-ap-check");if(!v)return;R=v.checked;let f=e.querySelector(".sv-bp-ap-switch");f&&f.classList.toggle("sv-bp-ap-switch--on",R)},e.onclick=r=>{let v=r.target.closest("[data-bp-action]");if(!v)return;let f=v.dataset.bpAction;if(f==="open-stream"){let b=v.dataset.bpChannel,h=parseInt(v.dataset.bpIndex,10),w=(c.data?.streams||[]).find(T=>T.channel===b&&T.index===h);w&&q(w)}else if(f==="add-pl"){let b=v.dataset.bpPlId;if(Ne(b,d)){v.classList.add("sv-bp-pl-btn--added"),v.disabled=!0;let h=v.querySelector(".sv-bp-pl-status");h&&(h.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}}}function U(t,e,s){t.innerHTML=e.map((n,i)=>Me(n,i,s)).join("")}function Et(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Be(t){let e=t.match(/^(\d{1,2}:\d{2}(?::\d{2})?)[\s　]+(.+?)\s*\/\s*(.+?)[\s　]+(\d{1,2}:\d{2}(?::\d{2})?)$/);return e?{start:e[1].trim(),title:e[2].trim(),artist:e[3].trim(),end:e[4].trim()}:null}function tt(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function Ye(t,e,s){let n=tt(t),i=tt(e),a=-1,o=0;for(let u=0;u<s.length;u++){let p=tt(s[u].title),d=tt(s[u].artist),r=0;p===n?r+=80:n.length>1&&(p.includes(n)||n.includes(p))&&(r+=40),i&&d===i?r+=20:i&&i.length>1&&(d.includes(i)||i.includes(d))&&(r+=10),r>o&&(o=r,a=u)}return o>=40?a:-1}function ce(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
  `,t.appendChild(e),l("#sv-close").addEventListener("click",()=>K()),l("#sv-fullscreen-btn").addEventListener("click",Ce);let s=l("#sv-vol-slider"),n=l("#sv-vol-btn");if(s){let i=z();s.value=i,s.style.setProperty("--pct",`${i}%`),n&&(n.textContent=j(i)),s.addEventListener("input",a=>{let o=parseInt(a.target.value);if(a.target.style.setProperty("--pct",`${o}%`),bt(o),n&&(n.textContent=j(o)),g)try{g.setVolume(o)}catch{}})}if(n){let i=80;n.addEventListener("click",()=>{if(!s)return;let a=parseInt(s.value),o=a>0?0:i||80;a>0&&(i=a),G(s,n,g,o),bt(o)})}e.querySelectorAll("[data-bc-tab]").forEach(i=>{i.addEventListener("click",()=>{Q=i.dataset.bcTab,K()})}),l("#sv-import-toggle").addEventListener("click",()=>{let i=l("#sv-import-area");i&&(i.hidden=!i.hidden,i.hidden||l("#sv-import-input")?.focus())}),l("#sv-import-cancel").addEventListener("click",()=>{let i=l("#sv-import-area");i&&(i.hidden=!0);let a=l("#sv-import-input");a&&(a.value="")}),l("#sv-import-apply").addEventListener("click",()=>{let i=e._currentStream;if(!i)return;let a=l("#sv-import-input");if(!a)return;let u=a.value.split(`
`).map(r=>Et(r)).filter(r=>r!==null);if(!u.length)return;let p=F(i);u.forEach((r,v)=>{v<i.songs.length&&(p[v]=r)}),ht(i,p),U(l("#sv-setlist"),i.songs,p);let d=l("#sv-import-area");d&&(d.hidden=!0),a.value=""}),l("#sv-cts-bulk-btn").addEventListener("click",()=>{let i=e._currentStream;i&&De(i)}),l("#sv-setlist").addEventListener("click",i=>{let a=i.target.closest("[data-action]");if(!a)return;let o=parseInt(a.dataset.idx,10),u=e._currentStream;if(!u)return;let p=F(u);if(a.dataset.action==="seek"){if(p[o]!=null&&g?.seekTo){g.seekTo(p[o],!0);try{g.playVideo()}catch{}}}else if(a.dataset.action==="set-ts"){let d=g?.getCurrentTime?.();d!=null&&(p[o]=Math.floor(d),ht(u,p),U(l("#sv-setlist"),u.songs,p))}else if(a.dataset.action==="del-ts")delete p[o],ht(u,p),U(l("#sv-setlist"),u.songs,p);else if(a.dataset.action==="cts-seek"){let d=Number(a.dataset.ctsSeconds);if(!isNaN(d)&&g?.seekTo){g.seekTo(d,!0);try{g.playVideo()}catch{}}}else if(a.dataset.action==="cts-propose"){let d=u.songs[o];Ie(u,o,d?.title||`\u66F2 ${o+1}`)}})}function q(t,e=0){if(!t?.url)return;let s=O(t.url);if(!s){lt(t.url);return}ce(),xt();let n=l("#stream-viewer");if(n?.classList.contains("sv-minified")){if(n._currentStream?.url===t.url){if(ee(),e>0)try{g?.seekTo(Math.floor(e),!0),g?.playVideo()}catch{}return}$t()}let i=l("#yt-player-panel");if(i&&!i.hidden){try{y?.pauseVideo()}catch{}i.hidden=!0,ct()}if(E=null,import("./chunk-IRKL6VIF.js").then(h=>h.pauseMusicPlayer()).catch(()=>{}),x){x=!1;let h=l("#stream-viewer");h&&h.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}x=!1,le();let a=l("#stream-viewer");a.classList.remove("sv-fullscreen"),a.classList.toggle("sv-mv-mode",!!t.isMv),a._currentStream=t;let o=++I,u=a.querySelectorAll("[data-bc-tab]");u[1]&&(t.isMv?(u[1].dataset.bcTab="playlists",u[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(u[1].dataset.bcTab="timeline",u[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let p=l("#sv-bc-title");p&&(p.textContent=t.title||"\u914D\u4FE1");let d=l("#sv-stream-meta");d&&(d.textContent=t.isMv?"":`${$(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let r=l("#sv-yt-link");r&&(r.href=t.url);let v=l("#sv-song-count");if(v&&(v.textContent=t.isMv?"":`${t.songs.length}\u66F2`),S={},t.isMv){let h=l("#sv-setlist");h&&(h.innerHTML="");let w=l("#sv-below-player");w&&(w.innerHTML="")}else{let h=F(t);U(l("#sv-setlist"),t.songs,h),Pe(t),qe(t)}a.hidden=!1,document.body.style.overflow="",setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),g=null;let f=l("#sv-player-wrap");f.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let b=Math.floor(e);ae(()=>{if(o!==I||a.hidden)return;f.innerHTML="";let h=document.createElement("div");f.appendChild(h);try{g=new window.YT.Player(h,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...b>0?{start:b}:{}},events:{onReady:w=>{let T=z();try{w.target.setVolume(T)}catch{}G(l("#sv-vol-slider"),l("#sv-vol-btn"),null,T);try{w.target.setPlaybackQuality("hd1080")}catch{}try{w.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(b>5)try{w.target.seekTo(b,!0)}catch{}},onStateChange:w=>{if(o===I){if(w.data===window.YT.PlayerState.PLAYING)try{w.target.setPlaybackQuality("hd1080")}catch{}w.data===window.YT.PlayerState.ENDED&&R&&!a.classList.contains("sv-minified")&&Ve()}},onError:()=>{o===I&&(f.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(s)}?autoplay=1&playsinline=1&rel=0${b>0?`&start=${b}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{f.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(s)}?autoplay=1&playsinline=1&rel=0${b>0?`&start=${b}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function K(){let t=l("#stream-viewer");if(!t||t.hidden||t.classList.contains("sv-minified"))return;if(x){x=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let s=l("#sv-close");s&&(s.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let n=l("#sv-fullscreen-btn");n&&n.setAttribute("aria-pressed","false");return}if(_e())return;++I,t.hidden=!0,t._currentStream=null,g=null;let e=l("#sv-player-wrap");e&&(e.innerHTML=""),document.body.style.overflow="",Tt()}window.__openStreamViewer=q;function de(t){let e=st(t),s=l("#song-modal"),n=l("#song-modal-body"),i=l("#song-modal-title");if(!e||!s||!n||!i)return;It(e),i.textContent=e.title;let a=(e.streamRefs||[]).slice(0,8).map(p=>({...p,thumbnail:kt(p.url),thumbnailFallback:xe(p.url),thumbnailTiny:Te(p.url),detailKey:H(p)})),o=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),u=ut(e.key);n.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${m(e.key)}">${m(e.artist)}</button>
        <div class="song-detail-tags">${o.map(p=>`<span class="tag-badge">${m(p)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${$(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${u?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${m(e.key)}">${u?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${m(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${a.length?a.map(p=>`
        <div class="song-detail-stream">
          ${p.thumbnail&&p.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${m(p.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${m(p.thumbnail)}" data-fallback="${m(p.thumbnailFallback)}" data-tiny="${m(p.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${m(p.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${m(e.key)}" data-streamkey="${m(p.detailKey)}">
            <span>${$(p.date)}</span>
            <strong>${m(p.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,s.hidden=!1,l("#song-modal-close")?.focus()}function Re(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s();let i=n.target.closest("[data-inline-youtube]");if(i){n.preventDefault(),n.stopPropagation(),lt(i.dataset.inlineYoutube);return}let a=n.target.closest("[data-detail-action]");if(a){if(n.stopPropagation(),a.dataset.detailAction==="close"&&s(),a.dataset.detailAction==="favorite"){let o=a.dataset.songkey;Ct(o);let u=ut(o);a.textContent=u?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",a.classList.toggle("primary",u),a.classList.toggle("ghost",!u)}if(a.dataset.detailAction==="timeline"){let o=st(a.dataset.songkey);s(),o&&Le(o)}if(a.dataset.detailAction==="stream"){let o=st(a.dataset.songkey),u=o?.streamRefs?.find(p=>H(p)===a.dataset.streamkey);s(),o&&u&&$e(o,u)}if(a.dataset.detailAction==="artist"){let o=st(a.dataset.songkey);s(),o&&Se(o)}}}),t.addEventListener("error",n=>{let i=n.target.closest?.(".song-detail-thumb");if(!i)return;let a=i.dataset.fallback||i.dataset.tiny||"";if(a&&i.src!==a){i.src=a,i.dataset.fallback===a?delete i.dataset.fallback:delete i.dataset.tiny;return}i.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&s()})}var Gt=!1;function Ue(){if(!c.data)return;let{stats:t,streams:e=[]}=c.data,s=e[0]?.date||null,n=pt(s),i=t.dataGeneratedDate||c.channelData?.dataGeneratedDate||null,a=pt(i),o=t.channelLabel||t.channelId||"",u=o?`<span class="badge accent" style="margin-right:8px;">${m(o)}</span>`:"";l("#updated-info").innerHTML=u+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${$(i)||"\u2014"}</strong>`+(a!=null?` <span class="badge">${a}\u65E5\u524D</span>`:"");let p=l("#stats-grid");if(!Gt)p.innerHTML=`
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
        <div class="stat-value">${n??"\u2014"}<span class="stat-unit">\u65E5</span></div>
      </div>
      <div class="stat-card gold">
        <div class="stat-label">\u6D3B\u52D5\u671F\u9593</div>
        <div class="stat-value">${Qt(c.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,Gt=!0;else{let d=p.querySelectorAll(".stat-value");d.length>=6&&(d[0].textContent=P(t.total),d[0].innerHTML+='<span class="stat-unit">\u56DE</span>',d[1].textContent=P(t.repertoire),d[1].innerHTML+='<span class="stat-unit">\u66F2</span>',d[2].textContent=P(t.streams),d[2].innerHTML+='<span class="stat-unit">\u56DE</span>',d[3].textContent=t.avgPerStream,d[3].innerHTML+='<span class="stat-unit">\u66F2</span>',d[4].textContent=n??"\u2014",d[4].innerHTML+='<span class="stat-unit">\u65E5</span>',d[5].textContent=Qt(c.data),d[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function Qt(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,s=t.streams[0].date;return Math.floor((s-e)/864e5)+1}function je(){l("#loading").hidden=!1,l("#error").hidden=!0}function Fe(){l("#loading").hidden=!0}function Ke(t){let e=l("#loading"),s=l("#error"),n=l("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),n&&(n.textContent=t&&t.message?t.message:String(t))}function Oe(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let s=document.getElementById("hero-ch-bg");s&&(s.dataset.mode=t||"all")}var ze={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:"\u{1F6CD}",label:"official store",url:"https://react.booth.pm"},{icon:"\u{1F310}",label:"official site",url:"https://v-react.com"},{icon:"\u{1F3B5}",label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:"\u{1F3A7}",label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:"\u25B6",label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function et(t){let e=ze[t];if(!e)return"";let s=e.bannerUrl?`<img class="ch-card-banner-img" src="${m(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
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
    </div>`}function Ge(t){let e=l("#ch-modal"),s=l("#ch-modal-body");if(!e||!s)return;let n="";t==="new"?n=et("new"):t==="old"?n=et("old"):n=et("new")+et("old"),s.innerHTML=n,e.hidden=!1,l("#ch-modal-close")?.focus()}function Qe(){let t=l("#ch-modal"),e=l("#ch-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s()}),document.querySelectorAll("[data-ch-modal]").forEach(n=>{n.addEventListener("click",()=>Ge(n.dataset.chModal))})}function Je(){let t=l("#help-modal"),e=l("#help-btn"),s=l("#help-close");if(!t||!e||!s)return;let n=()=>{t.hidden=!1,s.focus()},i=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",n),s.addEventListener("click",i),t.addEventListener("click",a=>{a.target===t&&i()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&i()})}function Ze(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function _t(){je();try{let t=await Dt();c.channelData=t,!V&&!t.fullLoaded&&Xt();let e=mt();c.songsQuery=e.q,c.activeTab=at(e.tab)?e.tab:"dashboard",Wt(c.activeTab);let s=e.channel||c.channel||B;if(M(s)||(s=B),!M(s)){let n=Object.keys(t.channels)[0];n&&(s=n)}if(!M(s))throw new Error("No channel data could be loaded");ke(),Fe(),rt(s,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0})}catch(t){console.error("[init] failed:",t),Ke(t)}}function Xe(){if(!c.channelData)return;let t=mt();c.songsQuery=t.q,t.channel!==c.channel&&M(t.channel)&&rt(t.channel,{resetSearch:!1,updateUrl:!1}),D(t.tab,{updateUrl:!1})}L(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=l("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!x&&!s.classList.contains("sv-minified")){Q=e,K();return}D(e)})});L(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||rt(t.dataset.channel))})});window.addEventListener("popstate",Xe);L("[data-audience]").forEach(t=>{t.addEventListener("click",()=>ye(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),wt(e.dataset.artistSearch||e.textContent||"");return}let s=t.target.closest("[data-playlist-add]");if(s){t.preventDefault(),t.stopPropagation();let o=s.dataset.playlistAdd,u=s.dataset.streamTitle||"";import("./chunk-BWTSGM2I.js").then(p=>p.showAddToPlaylistModal(o,u));return}let n=t.target.closest("[data-stream-play]");if(n){t.preventDefault(),t.stopPropagation();let o=n.dataset.streamPlay,u=(c.data?.streams||[]).find(p=>H(p)===o);u?.url?q(u):n.dataset.inlineYoutube&&lt(n.dataset.inlineYoutube);return}let i=t.target.closest("[data-inline-youtube]");if(i){t.preventDefault(),t.stopPropagation(),lt(i.dataset.inlineYoutube);return}if(Pt(t.target))return;let a=t.target.closest("[data-songkey]");a&&de(a.dataset.songkey)});l("#retry-btn").addEventListener("click",_t);l("#reload-btn").addEventListener("click",_t);Je();Qe();St();ce();Re();ge();we();Ze();import("./chunk-IRKL6VIF.js").then(t=>{t.setApiLoader(xt),t.initMusicPlayer()}).catch(()=>{});Rt(t=>{t.type==="song"?de(t.song.key):t.type==="artist"?wt(t.artist):t.type==="stream"&&q(t.stream)});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),Ut();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),Nt();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let i=l("#help-modal");i&&i.hidden&&(i.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let i=l("#stream-viewer"),a=!!l("#panel-player.active");if(i&&!i.hidden&&(x||a)){t.preventDefault(),K();return}if(jt()){t.preventDefault(),Y();return}let o=l("#song-modal");if(o&&!o.hidden)return;let u=l("#ch-modal");if(u&&!u.hidden){u.hidden=!0;return}let p=l("#help-modal");if(p&&!p.hidden){p.hidden=!0,l("#help-btn")?.focus();return}let d=l("#songs-search");d&&document.activeElement===d&&d.value&&(t.preventDefault(),d.value="",d.dispatchEvent(new Event("input",{bubbles:!0})))}});qt(()=>{c.data&&(vt(),(c.activeTab==="dashboard"||c.activeTab==="analytics")&&A())});function We(){_t()}We();
