import{a as oe,b as ce,e as It,f as de}from"./chunk-SIADDXVK.js";import{b as ne,c as ae,d as ie,i as le,j as re,k as B,l as Y}from"./chunk-FIQJD23O.js";import{a as et}from"./chunk-MKJIXTK4.js";import{a as te,b as Ct,c as ee,e as o}from"./chunk-JT7WCFD3.js";import{E as Pt,F as E,H as G,M as j,N as se,a as l,b as M,c as f}from"./chunk-T4BEBXYH.js";var x=-1,D=[],At=null,O=null,bt=null;function me(t){At=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
    <div id="omni-box">
      <div class="omni-input-row">
        <span class="omni-search-icon" aria-hidden="true">\u{1F50D}</span>
        <input
          id="omni-input"
          class="omni-input"
          type="search"
          placeholder="\u66F2\u30FB\u914D\u4FE1\u30FB\u52D5\u753B\u3092\u691C\u7D22\uFF08\u30B9\u30DA\u30FC\u30B9\u533A\u5207\u308A\u3067\u7D5E\u308A\u8FBC\u307F\uFF09"
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
  `,document.body.appendChild(e),e.addEventListener("click",n=>{n.target===e&&at()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>Dt(s.value)),s.addEventListener("keydown",Oe),document.getElementById("omni-listbox").addEventListener("click",n=>{let a=n.target.closest("[data-omni-idx]");a&&he(Number(a.dataset.omniIdx))})}function fe(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,x=-1,D=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Dt(""),Ke().then(()=>{if(!qt())return;let s=document.getElementById("omni-input")?.value||"";s.trim()&&Dt(s)})}function at(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),x=-1}function qt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Oe(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),x=Math.min(x+1,e.length-1),ue(e)):t.key==="ArrowUp"?(t.preventDefault(),x=Math.max(x-1,-1),ue(e)):t.key==="Enter"?(t.preventDefault(),x>=0&&D[x]&&he(x)):t.key==="Escape"&&(t.preventDefault(),at())}function ue(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===x),e.setAttribute("aria-selected",String(s===x))}),x>=0&&t[x]?.scrollIntoView({block:"nearest"})}function he(t){let e=D[t];!e||!At||(at(),At(e))}function Dt(t){let e=document.getElementById("omni-listbox");if(!e)return;x=-1,D=[];let s=o.data?.songs||[],n=o.data?.streams||[],a=O||[],i=Q(t),r="",u=0;if(!o.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!i){let p=s.slice(0,8);if(p.length){r+=st("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let m of p)D.push({type:"song",song:m}),r+=ve(m,u++,"")}e.innerHTML=r||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let c=[];try{c=(re(t,s).results||[]).slice(0,8)}catch{}if(c.length||(c=s.filter(p=>pe(t,`${p.title} ${p.artist}`)).slice(0,8)),c.length){r+=st("\u{1F3B5} \u66F2");for(let p of c)D.push({type:"song",song:p}),r+=ve(p,u++,i)}if(a.length){let p=a.filter(m=>ze(m,t)).slice(0,6);if(p.length){r+=st("\u{1F3AC} \u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2");for(let m of p)D.push({type:"music-video",video:m}),r+=Fe(m,u++,t)}}let d=new Set,v=[];for(let p of s)if(p.artist&&pe(t,p.artist)&&!d.has(p.artist)&&(d.add(p.artist),v.push(p.artist),v.length>=4))break;if(v.length){r+=st("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let p of v){let m=s.filter(h=>h.artist===p).length;D.push({type:"artist",artist:p}),r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${u++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${nt(f(p),i)}</span>
          <span class="omni-item-meta">${m}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(n.length){let p=n.filter(m=>{let h=Q(`${m.title||""} ${(m.songs||[]).map(b=>`${b.title||""} ${b.artist||""}`).join(" ")}`),g=yt(t);return g.length>0&&g.every(b=>h.includes(b))}).slice(0,5);if(p.length){r+=st("\u{1F4C5} \u914D\u4FE1\u67A0");for(let m of p){D.push({type:"stream",stream:m});let h=m.channel==="new"?"\u65B0ch":m.channel==="old"?"\u65E7ch":"";r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${u++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${nt(f(m.title||"\u914D\u4FE1"),i)}</span>
            <span class="omni-item-meta">${E(m.date)}${h?" \xB7 "+h:""} \xB7 ${m.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}r||(r=`<div class="omni-empty">\u300C${f(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=r}function st(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function ve(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${nt(f(t.title),s)}</span>
      <span class="omni-item-meta">${nt(f(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function Fe(t,e,s){let n=be(t),a=t.originalArtist||t.character||n;return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3AC}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${nt(f(t.title||"\u52D5\u753B"),s)}</span>
      <span class="omni-item-meta">${f(n)}${a?" \xB7 "+f(a):""} \xB7 \u52D5\u753B\u3067\u898B\u308B</span>
    </div>
  </div>`}function Ke(){return O!==null?Promise.resolve(O):bt||(bt=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>(O=Array.isArray(t?.videos)?t.videos:[],O)).catch(()=>(O=[],O)),bt)}function ze(t,e){let s=yt(e);if(!s.length)return!1;let n=Ge(t);return s.every(a=>n.includes(a))}function Ge(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(n=>n.trim()).filter(Boolean);return Q([e,...s,t.originalArtist,t.character,t.type,be(t)].filter(Boolean).join(" "))}function be(t){switch(t?.type){case"cover":return"\u6B4C\u307F\u305F";case"office":return"Re:AcT\u30AA\u30EA\u66F2";case"character":return"\u30AD\u30E3\u30E9\u30BD\u30F3";default:return"\u30AA\u30EA\u66F2"}}function yt(t){return Q(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function pe(t,e){let s=yt(t);if(!s.length)return!1;let n=Q(e);return s.every(a=>n.includes(a))}function Q(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/\s+/g," ").trim()}function nt(t,e){let n=yt(e).find(r=>r&&t.toLowerCase().includes(r))||Q(e);if(!n)return t;let i=t.toLowerCase().indexOf(n);return i<0?t:t.slice(0,i)+'<mark class="hl">'+t.slice(i,i+n.length)+"</mark>"+t.slice(i+n.length)}ce();ee();var Se={dashboard:()=>import("./chunk-XFQL67JR.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-BC2HF4LV.js").then(t=>t.renderRanking),songs:()=>import("./chunk-KVSESYJ2.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-7MX52OWV.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-5AHBOYNE.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-MBBHUGGG.js").then(t=>t.renderPlaylists)},gt=new Map,ye=0,W=null;function St(t){return Object.prototype.hasOwnProperty.call(Se,t)}async function Qe(t){gt.has(t)||gt.set(t,Se[t]());try{return await gt.get(t)}catch(e){throw gt.delete(t),e}}function _e(t){return["dashboard","timeline","analytics"].includes(t)}function Je(t,e={}){let s=l(`#panel-${t}`);if(!s)return;let n={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${f(n[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function We(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function Xe(t){if(o.channelData?.fullLoaded)return;o.channelData=t;let e=U(o.channel)?o.channel:et,s=U(e);s&&(o.data=s),!_e(o.activeTab)&&o.data&&K(o.activeTab,{autoLoad:!1})}function Ze(t){o.channelData=t,o.channelData.fullLoaded=!0;let e=U(o.channel)?o.channel:et;Tt(e,{resetSearch:!1,updateUrl:!1,render:!1}),K(o.activeTab,{autoLoad:!1})}function xe(){return W=ae({meta:o.channelData,onSongsReady:Xe}).then(Ze).finally(()=>{W=null}),W}async function Rt(){o.channelData?.fullLoaded||(W||xe(),await W)}async function K(t=o.activeTab,e={}){if(t!=="playlists"&&(!o.data||!St(t))||!St(t))return;let s=o.channelData?.partialLoaded||o.channelData?.fullLoaded,n=o.channelData?.fullLoaded;if(t==="playlists"?!1:_e(t)?!n:!s)if(e.autoLoad){We(t);try{await Rt()}catch(r){console.error("[data] full load failed",r);let u=l(`#panel-${t}`);u&&(u.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${f(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${f(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,u.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{K(t,{autoLoad:!0})}));return}}else{Je(t,{initial:e.initial});return}let i=++ye;try{let r=await Qe(t);if(i!==ye||t!==o.activeTab||!o.data)return;t==="songs"&&le(o.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let u=l(`#panel-${t}`);u&&(u.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${f(r?.message||String(r))}</div>
        </div>
      `)}}function I(t,e={}){St(t)||(t="dashboard");let s=l("#stream-viewer");if(t!=="player"&&s&&!s.hidden&&!C&&!R(s)){ft=t,_t=e,pt();return}o.activeTab=t,Te(t),e.updateUrl!==!1&&Y({tab:t}),K(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Te(t){M(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),M(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function U(t){return o.channelData?t==="all"?o.channelData.combined:o.channelData.channels[t]||null:null}function Tt(t,e={}){let s=U(t);s&&(o.channel=t,Us(t),o.data=s,o.timelineFilter=null,o.timelineFocus=null,o.timelineLimit=12,o.songsLimit=100,e.resetSearch!==!1&&(o.songsQuery="",o.songsGenre="all"),It(),M("#channel-switch [data-channel]").forEach(n=>n.classList.toggle("active",n.dataset.channel===t)),Bt(),e.updateUrl!==!1&&Y({tab:o.activeTab,channel:t,q:o.songsQuery}),Ns(),e.render!==!1&&K(o.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function ts(t,e={}){o.audience=t==="singer"?"singer":"listener",o.singerMode=o.audience==="singer",o.singerMode||(o.singerPreset="all"),M(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===o.audience)}),document.body.dataset.audience=o.audience,Bt(),o.audience==="singer"?(o.songsLimit=100,I("songs",{autoLoad:e.autoLoad!==!1})):o.data&&K(o.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Bt(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",s=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${s}`}function es(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),s=l("#topbar-actions");if(!t||!e||!s)return;let n=i=>{e.checked=i,s.classList.toggle("is-open",i),t.setAttribute("aria-expanded",String(i))},a=()=>{n(!1),t.focus()};t.addEventListener("click",i=>{i.stopPropagation(),requestAnimationFrame(()=>n(e.checked))}),t.addEventListener("keydown",i=>{i.key!=="Enter"&&i.key!==" "||(i.preventDefault(),n(!e.checked))}),e.addEventListener("change",()=>{n(e.checked)}),document.addEventListener("click",i=>{s.classList.contains("is-open")&&(i.target.closest("#topbar-actions")||i.target.closest("#mobile-menu-toggle")||i.target.closest("#mobile-menu-state")||a())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&a()}),s.addEventListener("click",i=>{i.stopPropagation()}),Bt()}function ss(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,n=420,a=()=>{!e||e.src||(e.src=e.dataset.src||"")},i=()=>{s=!1;let u=window.scrollY>n;u&&a(),t.hidden=!u,t.classList.toggle("is-visible",u),t.setAttribute("aria-hidden",String(!u)),t.tabIndex=u?0:-1},r=()=>{s||(s=!0,requestAnimationFrame(i))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),i()}function ns(){if(o.channelData)for(let t of M("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!o.channelData.combined:!!(o.channelData.channels&&o.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function as({key:t,title:e,artist:s}){o.timelineFilter&&o.timelineFilter.key===t&&o.activeTab==="timeline"?o.timelineFilter=null:o.timelineFilter={key:t,title:e,artist:s},o.timelineFocus=null,o.timelineLimit=12,I("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function is(t,e){o.timelineFilter={key:t.key,title:t.title,artist:t.artist},o.timelineFocus=G(e),o.timelineLimit=9999,I("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function ls(t){Ut(t.artist||"")}function Ut(t){let e=String(t||"").replace(/"/g,"");o.songsQuery=e?`artist:"${e}"`:"",o.songsLimit=100,Y({tab:"songs",q:o.songsQuery}),I("songs",{updateUrl:!1})}function kt(t){return(o.data?.songs||[]).find(e=>e.key===t)||null}function _(t){let e=String(t||""),s=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let n of s){let a=e.match(n);if(a)return a[1]}return""}function Ee(){return window.matchMedia("(max-width: 700px)").matches}function Me(t,e=0){let s=String(t||""),n=_(s);if(!n)return s;let a=Math.max(0,Math.floor(Number(e)||0));return`https://www.youtube.com/watch?v=${n}${a>0?`&t=${a}s`:""}`}function ot(t){let e=_(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function rs(t){let e=_(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function os(t){let e=_(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function mt(){$t&&(clearInterval($t),$t=null)}function jt(){mt(),$t=setInterval(()=>{if(L(),!!w)try{let t=w.getDuration?.()||0,e=w.getCurrentTime?.()||0;T&&ps(T,e);let s=t>0?Math.min(e/t*100,100):0,n=l("#yt-mini-progress-fill");n&&(n.style.width=`${s}%`);let i=w.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,r=l("#yt-mini-play");r&&r.setAttribute("data-playing",i?"1":"0")}catch{}},400)}function tt(){if(mt(),w){try{w.destroy()}catch{}w=null}let t=l("#yt-player-container");t&&(t.innerHTML="")}function cs(){if(w?.getCurrentTime)try{return w.getCurrentTime()}catch{}return Math.max(0,dt+(Date.now()-Kt)/1e3)}function R(t=l("#stream-viewer")){return!!t&&(t.classList.contains("sv-minified")||t.classList.contains("sv-music-minified"))}function L(){let t=l("#stream-viewer");if(!R(t))return;let e=l("#sv-player-wrap"),s=t.classList.contains("sv-music-minified")?document.querySelector("#music-bar .mbar-video-wrap"):document.querySelector("#yt-player-panel .yt-mini-video-wrap");if(!e||!s)return;let n=s.getBoundingClientRect();e.style.left=`${n.left}px`,e.style.top=`${n.top}px`,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`}function ds(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||!e||!y)return!1;Ot();let s=l("#yt-player-panel");if(!s)return!1;T=e;try{dt=Math.floor(y.getCurrentTime?.()??0)}catch{dt=0}Kt=Date.now();let n=l("#yt-mini-title");n&&(n.textContent=e.title||"");let a=l("#yt-mini-hint");a&&(a.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),s.classList.add("has-stream"),s.hidden=!1,w=y,y=null,t.classList.add("sv-minified"),document.body.classList.add("has-sv-mini"),document.body.style.overflow="",Mt(),A(),L(),requestAnimationFrame(L),setTimeout(L,120),setTimeout(L,400),window.addEventListener("resize",L),jt();try{let i=w.getPlayerState?.();l("#yt-mini-play")?.setAttribute("data-playing",i===window.YT?.PlayerState?.PLAYING?"1":"0")}catch{}return X(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,F()),!0}function Ce(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",L),mt(),t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini");let e=l("#sv-player-wrap");e&&(e.style.cssText=""),y=w,w=null;let s=l("#yt-player-panel");return s&&(s.hidden=!0),zt(),A(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function Pe(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",L),mt(),t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music");let e=l("#sv-player-wrap");return e&&(e.style.cssText=""),y=w,w=null,zt(),A(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function Ie(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",L),mt(),Z(),++q,t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");return e&&(e.style.cssText="",e.innerHTML=""),tt(),T=null,A(),!0}function us(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||t.hidden||!e?.url)return;let s=Yt(B().t),n={...e,title:e.title||(e.isMv?"\u52D5\u753B":"\u6B4C\u67A0"),type:e.isMv?e.type||"original":"stream",sub:e.isMv?e.originalArtist||e.character||e.sub||"":`${E(e.date)} \u7B2C${e.index}\u67A0`,_stream:e};if(!y){import("./chunk-7Y7QZX3A.js").then(i=>i.playMusicBarVideo?.(n,s)).catch(()=>{});return}try{dt=Math.floor(y.getCurrentTime?.()??s)}catch{dt=s}Kt=Date.now(),w=y,y=null,T=null,C=!1,t.classList.remove("sv-fullscreen","sv-minified"),t.classList.add("sv-music-minified"),document.body.classList.remove("has-sv-fullscreen","has-sv-mini"),document.body.classList.add("has-sv-music"),document.body.style.overflow="",t.hidden=!1;let a=l("#yt-player-panel");a&&(a.hidden=!0),Mt(),A(),L(),requestAnimationFrame(L),setTimeout(L,120),setTimeout(L,400),window.addEventListener("resize",L),jt(),import("./chunk-7Y7QZX3A.js").then(i=>{i.adoptExternalPlayer?.(n,w,{restore:Pe,close:Ie}),L(),requestAnimationFrame(L),setTimeout(L,120),setTimeout(L,400)}).catch(()=>{})}function Et(){let t=l("#stream-viewer");if(t?.classList.contains("sv-music-minified"))return Ie();if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",L),Z(),++q,t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");e&&(e.style.cssText="",e.innerHTML=""),tt();let s=l("#yt-player-panel");return s&&(s.hidden=!0),T=null,A(),!0}var Ae="kanau-watch-history-v1",ge=0;function vs(){try{return JSON.parse(localStorage.getItem(Ae)||"[]")}catch{return[]}}function De(t,e){if(!(!t?.url||e<10))try{let s=vs().filter(n=>n.url!==t.url);s.unshift({url:t.url,title:t.title||"",t:Math.max(0,Math.floor(e)),isMv:!!t.isMv,channel:t.channel??null,index:t.index??null,date:t.date??null,updatedAt:Date.now()}),localStorage.setItem(Ae,JSON.stringify(s.slice(0,10)))}catch{}}function ps(t,e){let s=Date.now();s-ge<5e3||(ge=s,De(t,e))}var it=null;function Yt(t=0){let e=[y,w];for(let s of e)try{let n=s?.getCurrentTime?.();if(Number.isFinite(n))return Math.max(0,Math.floor(n))}catch{}return Math.max(0,Math.floor(Number(t)||0))}function ms(t,e=0,s={}){if(!t)return"";let n=B(),a=new URLSearchParams,i=n.channel||o.channel;return i&&i!=="new"&&a.set("ch",i),a.set("v",t),s.includeTime!==!1&&e>5&&a.set("t",String(Math.floor(e))),`${location.origin}${location.pathname}?${a}`}function A(){let t=l("#stream-viewer"),s=t&&!t.hidden&&!R(t)&&t._currentStream?.url?_(t._currentStream.url):"",n=s?Yt(B().t):0;Y({v:s||"",t:n>5?n:0},{replace:!0}),s&&De(t._currentStream,n),s&&!it&&(it=setInterval(A,5e3)),!s&&it&&(clearInterval(it),it=null)}function fs(){if(l("#sv-share-modal"))return;let t=document.createElement("div");t.id="sv-share-modal",t.hidden=!0,t.innerHTML=`
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
    </div>`,document.body.appendChild(t);let e=()=>{t.hidden=!0};t.querySelector(".sv-share-backdrop").addEventListener("click",e),l("#sv-share-close").addEventListener("click",e),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&(a.preventDefault(),a.stopPropagation(),e())},{capture:!0});let s=()=>{let a=t._shareState;if(!a)return;let i=l("#sv-share-ts-check")?.checked&&a.t>0,r=ms(a.id,a.t,{includeTime:i}),u=l("#sv-share-url");u&&(u.value=r);let c=a.title?`${a.title}`:"\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9",d=l("#sv-share-x");d&&(d.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(c)}&url=${encodeURIComponent(r)}`);let v=l("#sv-share-line");return v&&(v.href=`https://line.me/R/share?text=${encodeURIComponent(`${c}
${r}`)}`),r};l("#sv-share-ts-check").addEventListener("change",s),t._rebuild=s,l("#sv-share-url").addEventListener("focus",a=>a.target.select()),l("#sv-share-copy").addEventListener("click",async()=>{let a=l("#sv-share-url")?.value;if(!a)return;let i=!1;try{await navigator.clipboard.writeText(a),i=!0}catch{try{l("#sv-share-url").select(),i=document.execCommand("copy")}catch{}}let r=l("#sv-share-copy");r&&(r.textContent=i?"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",r.classList.add("copied"),setTimeout(()=>{r.textContent="\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",r.classList.remove("copied")},1600))});let n=l("#sv-share-native");navigator.share&&n&&(n.hidden=!1,n.addEventListener("click",async()=>{let a=t._shareState,i=l("#sv-share-url")?.value;if(i)try{await navigator.share({title:a?.title||"",url:i})}catch{}}))}function hs(){let e=l("#stream-viewer")?._currentStream;if(!e?.url)return;let s=_(e.url);if(!s)return;fs();let n=l("#sv-share-modal"),a=Yt(B().t);n._shareState={id:s,t:a,title:e.title||""};let i=l("#sv-share-video-title");i&&(i.textContent=e.title||"(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)");let r=l("#sv-share-ts-row"),u=l("#sv-share-ts-check"),c=l("#sv-share-ts-label");r&&(r.hidden=a<=5),u&&(u.checked=a>5),c&&(c.textContent=H(a)),n._rebuild?.(),n.hidden=!1}var we=new URLSearchParams(location.search).get("pl");async function bs(){if(!we)return;let t=null;try{let n=we.replace(/-/g,"+").replace(/_/g,"/"),a=Uint8Array.from(atob(n),i=>i.charCodeAt(0));t=JSON.parse(new TextDecoder().decode(a))}catch{return}if(!t||typeof t.n!="string"||!Array.isArray(t.s))return;let e=t.n.slice(0,60)||"\u5171\u6709\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8",s=t.s.filter(n=>typeof n=="string"&&n.length<100).slice(0,300);if(s.length){if(!confirm(`\u5171\u6709\u3055\u308C\u305F\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u300C${e}\u300D\uFF08${s.length}\u4EF6\uFF09\u3092\u53D6\u308A\u8FBC\u307F\u307E\u3059\u304B\uFF1F`)){Y({},{replace:!0});return}try{let n=await import("./chunk-MBBHUGGG.js"),a=n.createPlaylist(e);for(let i of s)n.addStreamToPlaylist(a.id,i);Y({tab:"playlists"},{replace:!0}),I("playlists",{updateUrl:!1})}catch{}}}async function ys(){let t=B();if(!t.v)return!1;let e=t.v,s=t.t;try{await Rt()}catch{}let n=[];o.channelData?.combined&&n.push(o.channelData.combined),Object.values(o.channelData?.channels||{}).forEach(a=>{a&&n.push(a)});for(let a of n){let i=(a.streams||[]).find(r=>_(r.url)===e);if(i)return S(i,s),!0}try{let r=((await(await fetch("data/music.json")).json())?.videos||[]).find(u=>_(u.url)===e);if(r)return S({url:r.url,title:r.title,isMv:!0},s),!0}catch{}return S({url:`https://www.youtube.com/watch?v=${e}`,title:"",isMv:!0},s),!0}function gs(t,e=0,s=""){let n=_(t);if(!n)return;if(Ee()){window.open(Me(t,e),"_blank","noopener");return}{let c=l("#stream-viewer");if(c&&!c.hidden&&!C)if(R(c))Et();else{++q,c.hidden=!0,c._currentStream=null,y=null;let d=l("#sv-player-wrap");d&&(d.innerHTML=""),document.body.style.overflow="",T=null,_t={},Mt(),A()}}Ft(),Ot();let a=l("#yt-player-container"),i=l("#yt-player-panel");if(!a||!i)return;tt();let r=l("#yt-mini-title");r&&(r.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let u=l("#yt-mini-hint");u&&(u.textContent=T?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),i.classList.toggle("has-stream",!!T),i.hidden=!1,Ne(()=>{let c=document.createElement("div");a.appendChild(c);try{w=new window.YT.Player(c,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:d=>{let v=F();try{d.target.setVolume(v)}catch{}if(X(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,v),e>5)try{d.target.seekTo(e,!0)}catch{}jt()},onStateChange:d=>{let v=d.data===window.YT.PlayerState.PLAYING,p=l("#yt-mini-play");p&&p.setAttribute("data-playing",v?"1":"0")}}})}catch{let v=e>0?`&start=${Math.floor(e)}`:"";a.innerHTML=`<iframe src="https://www.youtube.com/embed/${n}?autoplay=1&playsinline=1${v}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function Ot(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,!Et()&&(tt(),T=null)}),l("#yt-mini-play").addEventListener("click",()=>{if(w)try{w.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?w.pauseVideo():w.playVideo()}catch{}}),l("#yt-mini-restore").addEventListener("click",()=>{Ce()||T&&S(T,cs())}),l("#yt-mini-progress-bar").addEventListener("click",n=>{if(!w)return;let i=n.currentTarget.getBoundingClientRect(),r=Math.max(0,Math.min(1,(n.clientX-i.left)/i.width));try{let u=w.getDuration?.()||0;u>0&&w.seekTo(r*u,!0)}catch{}});let e=l("#yt-mini-vol-slider"),s=l("#yt-mini-vol-btn");if(e){let n=F();e.value=n,e.style.setProperty("--pct",`${n}%`),s&&(s.textContent=ct(n)),e.addEventListener("input",a=>{let i=parseInt(a.target.value);if(a.target.style.setProperty("--pct",`${i}%`),Nt(i),s&&(s.textContent=ct(i)),w)try{w.setVolume(i)}catch{}})}if(s){let n=80;s.addEventListener("click",()=>{if(!e)return;let a=parseInt(e.value),i=a>0?0:n||80;a>0&&(n=a),X(e,s,w,i)})}}var qe=!1,Ve=[];window.onYouTubeIframeAPIReady=()=>{qe=!0,Ve.splice(0).forEach(t=>t()),import("./chunk-7Y7QZX3A.js").then(t=>t.notifyYtReady()).catch(()=>{})};function Ft(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function Ne(t){if(qe&&window.YT?.Player){t();return}Ve.push(t)}var F=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),Nt=t=>localStorage.setItem("kanaVol",String(t)),ct=t=>t===0?"\u{1F507}":t<50?"\u{1F509}":"\u{1F50A}";function X(t,e,s,n){if(t&&(t.value=n,t.style.setProperty("--pct",`${n}%`)),e&&(e.textContent=ct(n)),s)try{s.setVolume(n)}catch{}}var y=null,q=0,T=null,dt=0,Kt=0,C=!1,ft="timeline",_t={},P={},V=!1,N=!1,w=null,$t=null,Lt=null;function zt(){ft=o.activeTab||"timeline",o.activeTab="player",M(".tab-btn").forEach(t=>t.classList.remove("active")),M(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function Mt(){let t=_t;_t={},I(ft||"timeline",t)}function ws(){C=!0;let t=l("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=l("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function H(t){let e=Math.floor(t),s=Math.floor(e/3600),n=Math.floor(e%3600/60),a=e%60;return s>0?`${s}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${n}:${String(a).padStart(2,"0")}`}function He(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function ut(t){try{return JSON.parse(localStorage.getItem(He(t))||"null")||{}}catch{return{}}}function Vt(t,e){try{localStorage.setItem(He(t),JSON.stringify(e))}catch{}}function ks(t,e,s){let n=s[e],a=n!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${f(H(n))} \u306B\u79FB\u52D5">${f(H(n))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",r=(P[e]||[]).map(d=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${d.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${f(H(d.timeSeconds))}">${f(H(d.timeSeconds))}</button>`).join(""),u=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,c=`<div class="sv-cts-row">${r}${u}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${f(t.title)}</span>
      <span class="sv-song-artist">${f(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${a}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${c}
  </div>`}async function $s(t){if(P={},!t?.channel||t?.index==null)return;try{let n=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,a=await fetch(n);if(!a.ok)return;let i=await a.json();for(let r of i.items||[])P[r.songIndex]||(P[r.songIndex]=[]),P[r.songIndex].push({timeSeconds:r.timeSeconds,note:r.note??null})}catch{}let e=l("#stream-viewer");if(!e||e._currentStream!==t)return;let s=l("#sv-setlist");s&&rt(s,t.songs,ut(t)),Ss(t)}function Ls(t,e,s){l("#sv-cts-modal")?.remove();let n=y?.getCurrentTime?.()??0,a=H(Math.floor(n)),i=document.createElement("div");i.id="sv-cts-modal",i.className="sv-cts-modal-overlay",i.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-cts-modal-song">${f(s)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${f(a)}" placeholder="0:00" autocomplete="off">
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
  `,document.body.appendChild(i);let r=()=>i.remove();i.querySelector(".sv-cts-modal-close").addEventListener("click",r),i.querySelector(".sv-cts-modal-cancel").addEventListener("click",r),i.addEventListener("click",u=>{u.target===i&&r()}),i.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let u=i.querySelector("#sv-cts-ts-input").value.trim(),c=i.querySelector("#sv-cts-note-input").value.trim()||null,d=Wt(u),v=i.querySelector("#sv-cts-status");if(d===null){v.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",v.className="sv-cts-modal-status error",v.hidden=!1;return}let p=i.querySelector("#sv-cts-submit");p.disabled=!0,p.textContent="\u9001\u4FE1\u4E2D\u2026";try{let m=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:d,submitterNote:c})});if(m.ok)v.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",v.className="sv-cts-modal-status success",v.hidden=!1,p.hidden=!0,i.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let h=await m.json().catch(()=>({}));v.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${h.error||m.statusText}`,v.className="sv-cts-modal-status error",v.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}catch(m){v.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${m.message}`,v.className="sv-cts-modal-status error",v.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>i.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function u(c){c.key==="Escape"&&(r(),document.removeEventListener("keydown",u))})}function Ss(t){let e=l("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let n=Object.keys(P).length>=t.songs.length;e.textContent=n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function _s(t){l("#sv-bulk-modal")?.remove();let e=ut(t),a=Object.keys(P).length>=t.songs.length,i=t.songs.map((c,d)=>{let v=e[d]!=null?H(e[d]):"",p=P[d]?.[0]?.timeSeconds!=null?H(P[d][0].timeSeconds):"",m=v||p;return`
      <div class="sv-bulk-row" data-idx="${d}">
        <span class="sv-bulk-num">${d+1}</span>
        <span class="sv-bulk-title" title="${f(c.title)}">${f(c.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${f(m)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${d}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${d}">\u23F1</button>
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
  `,document.body.appendChild(r);let u=()=>r.remove();r.querySelector(".sv-cts-modal-close").addEventListener("click",u),r.querySelector(".sv-cts-modal-cancel").addEventListener("click",u),r.addEventListener("click",c=>{c.target===r&&u()}),r.querySelector(".sv-paste-apply").addEventListener("click",()=>{let d=(r.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(m=>m.trim()).filter(Boolean),v=0;for(let m of d){let h=Ds(m);if(!h)continue;let g=qs(h.title,h.artist,t.songs);if(g>=0){let b=r.querySelector(`[data-bulk-ts-idx="${g}"]`);b&&(b.value=h.start,v++)}}let p=r.querySelector(".sv-paste-result");p&&(p.textContent=v>0?`${d.length}\u884C\u3092\u89E3\u6790 \u2192 ${v}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",p.hidden=!1)}),r.querySelector(".sv-bulk-rows").addEventListener("click",c=>{let d=c.target.closest("[data-bulk-now]");if(!d)return;let v=parseInt(d.dataset.bulkNow,10),p=y?.getCurrentTime?.();if(p!=null){let m=r.querySelector(`[data-bulk-ts-idx="${v}"]`);m&&(m.value=H(Math.floor(p)))}}),r.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let c=r.querySelector("#sv-bulk-note").value.trim()||null,d=r.querySelector("#sv-bulk-status"),v=r.querySelector("#sv-bulk-submit"),p=[];if(r.querySelectorAll("[data-bulk-ts-idx]").forEach(g=>{let b=parseInt(g.dataset.bulkTsIdx,10),k=Wt(g.value.trim());k!==null&&p.push({songIndex:b,timeSeconds:k})}),!p.length){d.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",d.className="sv-cts-modal-status error",d.hidden=!1;return}v.disabled=!0,v.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${p.length})`,d.hidden=!0;let m=0,h=0;await Promise.all(p.map(async g=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:g.songIndex,timeSeconds:g.timeSeconds,submitterNote:c})})).ok?m++:h++}catch{h++}v.textContent=`\u7533\u8ACB\u4E2D\u2026 (${m+h}/${p.length})`})),h===0?(d.textContent=`${m}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,d.className="sv-cts-modal-status success",v.hidden=!0,r.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(d.textContent=`${m}\u4EF6\u6210\u529F / ${h}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,d.className="sv-cts-modal-status error",v.disabled=!1,v.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),d.hidden=!1}),document.addEventListener("keydown",function c(d){d.key==="Escape"&&(u(),document.removeEventListener("keydown",c))})}function Re(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function xs(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function Ts(t,e){let s=Re(),n=s.find(a=>String(a.id)===String(t));return n?(n.streams||(n.streams=[]),n.streams.includes(e)||(n.streams.push(e),xs(s)),!0):!1}var Gt="kanauViewerQueueCollapsed",$=null,vt=!1;function xt(t){let e=$,s=e?.items?.[t];if(s){e.idx=t,vt=!0;try{s.kind==="mv"?S({url:s.video.url,title:s.video.title,isMv:!0}):S(s.stream)}finally{vt=!1}}}window.__playMyListInViewer=t=>{t?.items?.length&&($={name:t.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:t.items,idx:0,repeat:localStorage.getItem("kanauListRepeat")==="1",collapsed:localStorage.getItem(Gt)==="1"},xt(Math.max(0,Math.min(t.idx||0,t.items.length-1))))};window.__openMusicQueueInViewer=(t,e=0,s=0)=>{if(!t?.length)return!1;let n=t.filter(i=>i?.url).map((i,r)=>i._stream?{kind:"stream",key:i._stream.url||`stream:${r}`,stream:i._stream}:{kind:"mv",key:`mv:${_(i.url)||r}`,video:{...i,isMv:!0}});if(!n.length)return!1;$={name:"\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u30AD\u30E5\u30FC",items:n,idx:Math.max(0,Math.min(e,n.length-1)),repeat:localStorage.getItem("kanauListRepeat")==="1",collapsed:localStorage.getItem(Gt)==="1"};let a=$.items[$.idx];vt=!0;try{a.kind==="mv"?S({...a.video,isMv:!0},s):S(a.stream,s)}finally{vt=!1}return!0};function Qt(){let t=$;if(!t?.items?.length)return"";let e=t.items[t.idx],s=e?.kind==="mv"?e.video?.title||"\u52D5\u753B":e?.stream?.title||"\u914D\u4FE1";return`
    <div class="sv-bp-section sv-queue-section${t.collapsed?" is-collapsed":""}">
      <div class="sv-bp-sh sv-queue-head">\u{1F4CB} ${f(t.name)}
        <span class="sv-bp-sh-sub">\uFF08${t.idx+1} / ${t.items.length}\uFF09</span>
        <span class="sv-queue-current">${f(s)}</span>
        <button class="sv-queue-toggle" type="button"
          data-svq-action="toggle" aria-expanded="${!t.collapsed}"
          title="${t.collapsed?"\u30AD\u30E5\u30FC\u3092\u958B\u304F":"\u30AD\u30E5\u30FC\u3092\u9589\u3058\u308B"}">${t.collapsed?"\u958B\u304F":"\u9589\u3058\u308B"}</button>
        <button class="sv-queue-repeat${t.repeat?" is-on":""}" type="button"
          data-svq-action="repeat" aria-pressed="${t.repeat}"
          title="\u30EA\u30B9\u30C8\u30EA\u30D4\u30FC\u30C8\uFF08ON: \u6700\u5F8C\u307E\u3067\u518D\u751F\u3057\u305F\u3089\u5148\u982D\u3078\u623B\u308B\uFF09">\u{1F501} \u30EA\u30D4\u30FC\u30C8</button>
      </div>
      <div class="sv-queue-list">
        ${t.items.map((n,a)=>{let i=n.kind==="mv"?n.video?.title||"\u52D5\u753B":n.stream?.title||"\u914D\u4FE1",r=n.kind==="mv"?"\u{1F3AC} \u52D5\u753B":`\u{1F4C5} ${E(n.stream?.date)}\u3000\u7B2C${n.stream?.index}\u67A0`;return`<button class="sv-queue-row${a===t.idx?" is-current":""}" type="button"
            data-svq-action="jump" data-svq-idx="${a}">
            <span class="sv-queue-num">${a+1}</span>
            <span class="sv-queue-title">${f(i)}</span>
            <span class="sv-queue-meta">${f(r)}</span>
          </button>`}).join("")}
      </div>
    </div>`}function Be(t){let e=t.target.closest("[data-svq-action]");if(!e||!$)return!1;if(e.dataset.svqAction==="jump"){let s=parseInt(e.dataset.svqIdx,10);return!Number.isNaN(s)&&s!==$.idx&&xt(s),!0}if(e.dataset.svqAction==="repeat"){$.repeat=!$.repeat;try{localStorage.setItem("kanauListRepeat",$.repeat?"1":"0")}catch{}return e.classList.toggle("is-on",$.repeat),e.setAttribute("aria-pressed",String($.repeat)),!0}if(e.dataset.svqAction==="toggle"){$.collapsed=!$.collapsed;try{localStorage.setItem(Gt,$.collapsed?"1":"0")}catch{}let s=e.closest(".sv-queue-section");return s&&(s.outerHTML=Qt()),Jt(l("#sv-below-player")),!0}return!1}function Jt(t){if($?.collapsed)return;let e=t?.querySelector?.(".sv-queue-list"),s=e?.querySelector(".sv-queue-row.is-current");e&&s&&(e.scrollTop=Math.max(0,s.offsetTop-e.clientHeight/2))}function Es(){let t=o.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let n=t.findIndex(a=>a.channel===s.channel&&a.index===s.index);n<0||n>=t.length-1||S(t[n+1])}async function Ms(t){let e=await je(),s=_(t?.url);if(!s||!e.length)return;let n=e.findIndex(i=>_(i.url)===s);if(n<0||n>=e.length-1)return;let a=e[n+1];S({...a,isMv:!0})}function Ue(t){if(!t||R(t))return;let e=y||w;if(N&&e){try{e.seekTo(0,!0),e.playVideo()}catch{}return}if($?.items?.length){let n=$;n.idx<n.items.length-1?xt(n.idx+1):n.repeat&&xt(0);return}if(!V)return;let s=t._currentStream;s?.isMv?Ms(s):Es()}function Z(){Lt&&(clearInterval(Lt),Lt=null)}function Cs(t,e){Z();let s=!1;Lt=setInterval(()=>{if(t!==q||e.hidden||!y){Z();return}try{let n=y.getPlayerState?.();n===window.YT?.PlayerState?.ENDED?(s||Ue(e),s=!0):n===window.YT?.PlayerState?.PLAYING&&(s=!1)}catch{}},700)}function ke(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${f(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=ot(t.url),n=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${f(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${f(n)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${f(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${f(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${E(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function Ps(t){let e=l("#sv-below-player");if(!e)return;let s=o.data?.streams||[],n=s.findIndex(v=>v.channel===t.channel&&v.index===t.index),a=n>=0&&n<s.length-1?s[n+1]:null,i=n>0?s[n-1]:null,r=new Set(t.songs.map(v=>v.title)),u=s.filter((v,p)=>p!==n).map(v=>{let p=v.songs.filter(m=>r.has(m.title));return{stream:v,overlap:p.length,sharedSongs:p.slice(0,3).map(m=>m.title)}}).filter(v=>v.overlap>0).sort((v,p)=>p.overlap-v.overlap).slice(0,8),c=Re(),d=G(t);e.innerHTML=`
    <div class="sv-bp-wrap">
      ${Qt()}

      <!-- \u9023\u7D9A\u518D\u751F + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${V?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${V?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${N?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${N?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          ${a?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${f(a.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${ke(a,"older")}
          ${ke(i,"newer")}
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
            <span class="sv-bp-stat-val">${E(t.date)}</span>
            <span class="sv-bp-stat-label">\u914D\u4FE1\u65E5</span>
          </div>
        </div>
      </div>

      <!-- \u95A2\u9023\u914D\u4FE1 -->
      ${u.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u95A2\u9023\u914D\u4FE1 <span class="sv-bp-sh-sub">\uFF08\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${u.map(v=>{let p=ot(v.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${f(v.stream.channel)}" data-bp-index="${v.stream.index}">
              ${p?`<img class="sv-bp-rel-thumb" src="${f(p)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${f(v.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${E(v.stream.date)}</div>
                <div class="sv-bp-rel-songs">${v.sharedSongs.map(m=>f(m)).join("\u3001")}</div>
              </div>
              <div class="sv-bp-rel-badge">${v.overlap}\u66F2</div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      <!-- \u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0 -->
      ${c.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0</div>
        <div class="sv-bp-pl-list" id="sv-bp-pl-list">
          ${c.map(v=>{let p=(v.streams||[]).includes(d);return`<button class="sv-bp-pl-btn${p?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${f(String(v.id))}"${p?" disabled":""}>
              <span class="sv-bp-pl-name">${f(v.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${p?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=v=>{let p=v.target.closest("#sv-ap-check"),m=v.target.closest("#sv-repeat-check");if(p){V=p.checked;let h=p.closest(".sv-bp-ap-switch");h&&h.classList.toggle("sv-bp-ap-switch--on",V)}if(m){N=m.checked;let h=m.closest(".sv-bp-ap-switch");h&&h.classList.toggle("sv-bp-ap-switch--on",N)}},e.onclick=v=>{if(Be(v))return;let p=v.target.closest("[data-bp-action]");if(!p)return;let m=p.dataset.bpAction;if(m==="open-stream"){let h=p.dataset.bpChannel,g=parseInt(p.dataset.bpIndex,10),b=(o.data?.streams||[]).find(k=>k.channel===h&&k.index===g);b&&S(b)}else if(m==="add-pl"){let h=p.dataset.bpPlId;if(Ts(h,d)){p.classList.add("sv-bp-pl-btn--added"),p.disabled=!0;let g=p.querySelector(".sv-bp-pl-status");g&&(g.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}},Jt(e)}var lt=null;async function je(){if(lt)return lt;try{lt=(await(await fetch("data/music.json")).json())?.videos||[]}catch{lt=[]}return lt}function Is(t){let e=String(t||"");return e=e.replace(/【[^】]*】/g," "),e=e.replace(/^\s*MV[⌇|｜♪♬:：\-\s]*/i," "),e=e.split(/[\/／|｜]/)[0],e=e.replace(/歌ってみた|covered?\s*(by.*)?$/gi," "),e.trim()}async function As(t){let e=l("#sv-below-player");if(!e)return;try{await Rt()}catch{}let s=await je();if(l("#stream-viewer")?._currentStream!==t)return;let n=o.channelData?.combined?.streams||o.data?.streams||[],a=J(Is(t.title)),i=[];if(a.length>1)for(let m of n){let h=(m.songs||[]).find(g=>{let b=J(g.title);return b===a||b.length>1&&(b.includes(a)||a.includes(b))});h&&i.push({stream:m,songTitle:h.title})}let r=i.slice(0,8),u={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9\u30BD\u30F3",cover:"\u30AB\u30D0\u30FC"},c=s.find(m=>m.url===t.url),d=s.filter(m=>m.url!==t.url).sort((m,h)=>{let g=c&&m.type===c.type?1:0,b=c&&h.type===c.type?1:0;return g!==b?b-g:(h.publishedAt||"").localeCompare(m.publishedAt||"")}).slice(0,12),v=s.findIndex(m=>_(m.url)===_(t.url)),p=v>=0&&v<s.length-1?s[v+1]:null;e.innerHTML=`
    <div class="sv-bp-wrap">
      ${Qt()}
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${V?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${V?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${N?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${N?" checked":""}>
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
          ${r.map(m=>{let h=ot(m.stream.url);return`<button class="sv-bp-rel-card" type="button" data-mv-action="open-stream" data-mv-channel="${f(m.stream.channel)}" data-mv-index="${m.stream.index}">
              ${h?`<img class="sv-bp-rel-thumb" src="${f(h)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${f(m.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${E(m.stream.date)}\u3000\u7B2C${m.stream.index}\u67A0</div>
                <div class="sv-bp-rel-songs">\u{1F3B5} ${f(m.songTitle)}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      ${d.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u{1F3AC} \u307B\u304B\u306E\u52D5\u753B <button class="sv-mv-all-btn" type="button" data-mv-action="all-videos">\u3059\u3079\u3066\u898B\u308B \u2192</button></div>
        <div class="sv-mv-grid">
          ${d.map(m=>{let h=ot(m.url);return`<button class="sv-mv-card" type="button" data-mv-action="open-mv" data-mv-url="${f(m.url)}" data-mv-title="${f(m.title)}">
              ${h?`<img class="sv-mv-card-thumb" src="${f(h)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-mv-card-thumb"></div>'}
              <div class="sv-mv-card-body">
                <div class="sv-mv-card-title">${f(m.title)}</div>
                <div class="sv-mv-card-type">${u[m.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB"}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}
    </div>
  `,e.onchange=m=>{let h=m.target.closest("#sv-ap-check"),g=m.target.closest("#sv-repeat-check");if(h){V=h.checked;let b=h.closest(".sv-bp-ap-switch");b&&b.classList.toggle("sv-bp-ap-switch--on",V)}if(g){N=g.checked;let b=g.closest(".sv-bp-ap-switch");b&&b.classList.toggle("sv-bp-ap-switch--on",N)}},e.onclick=m=>{if(Be(m))return;let h=m.target.closest("[data-mv-action]");if(!h)return;let g=h.dataset.mvAction;if(g==="open-stream"){let b=h.dataset.mvChannel,k=parseInt(h.dataset.mvIndex,10),z=(o.channelData?.combined?.streams||o.data?.streams||[]).find(Zt=>Zt.channel===b&&Zt.index===k);z&&S(z)}else g==="open-mv"?S({url:h.dataset.mvUrl,title:h.dataset.mvTitle,isMv:!0}):g==="all-videos"&&I("playlists")},Jt(e)}function rt(t,e,s){t.innerHTML=e.map((n,a)=>ks(n,a,s)).join("")}function Wt(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Ds(t){let e=t.match(/^(\d{1,2}:\d{2}(?::\d{2})?)[\s　]+(.+?)\s*\/\s*(.+?)[\s　]+(\d{1,2}:\d{2}(?::\d{2})?)$/);return e?{start:e[1].trim(),title:e[2].trim(),artist:e[3].trim(),end:e[4].trim()}:null}function J(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function qs(t,e,s){let n=J(t),a=J(e),i=-1,r=0;for(let u=0;u<s.length;u++){let c=J(s[u].title),d=J(s[u].artist),v=0;c===n?v+=80:n.length>1&&(c.includes(n)||n.includes(c))&&(v+=40),a&&d===a?v+=20:a&&a.length>1&&(d.includes(a)||a.includes(d))&&(v+=10),v>r&&(r=v,i=u)}return r>=40?i:-1}function Ye(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
  `,t.appendChild(e),l("#sv-close").addEventListener("click",()=>pt()),l("#sv-share-btn").addEventListener("click",hs),l("#sv-music-btn").addEventListener("click",us),l("#sv-fullscreen-btn").addEventListener("click",ws);let s=l("#sv-vol-slider"),n=l("#sv-vol-btn");if(s){let a=F();s.value=a,s.style.setProperty("--pct",`${a}%`),n&&(n.textContent=ct(a)),s.addEventListener("input",i=>{let r=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${r}%`),Nt(r),n&&(n.textContent=ct(r)),y)try{y.setVolume(r)}catch{}})}if(n){let a=80;n.addEventListener("click",()=>{if(!s)return;let i=parseInt(s.value),r=i>0?0:a||80;i>0&&(a=i),X(s,n,y,r),Nt(r)})}e.querySelectorAll("[data-bc-tab]").forEach(a=>{a.addEventListener("click",()=>{ft=a.dataset.bcTab,pt()})}),l("#sv-import-toggle").addEventListener("click",()=>{let a=l("#sv-import-area");a&&(a.hidden=!a.hidden,a.hidden||l("#sv-import-input")?.focus())}),l("#sv-import-cancel").addEventListener("click",()=>{let a=l("#sv-import-area");a&&(a.hidden=!0);let i=l("#sv-import-input");i&&(i.value="")}),l("#sv-import-apply").addEventListener("click",()=>{let a=e._currentStream;if(!a)return;let i=l("#sv-import-input");if(!i)return;let u=i.value.split(`
`).map(v=>Wt(v)).filter(v=>v!==null);if(!u.length)return;let c=ut(a);u.forEach((v,p)=>{p<a.songs.length&&(c[p]=v)}),Vt(a,c),rt(l("#sv-setlist"),a.songs,c);let d=l("#sv-import-area");d&&(d.hidden=!0),i.value=""}),l("#sv-cts-bulk-btn").addEventListener("click",()=>{let a=e._currentStream;a&&_s(a)}),l("#sv-setlist").addEventListener("click",a=>{let i=a.target.closest("[data-action]");if(!i)return;let r=parseInt(i.dataset.idx,10),u=e._currentStream;if(!u)return;let c=ut(u);if(i.dataset.action==="seek"){if(c[r]!=null&&y?.seekTo){y.seekTo(c[r],!0);try{y.playVideo()}catch{}}}else if(i.dataset.action==="set-ts"){let d=y?.getCurrentTime?.();d!=null&&(c[r]=Math.floor(d),Vt(u,c),rt(l("#sv-setlist"),u.songs,c))}else if(i.dataset.action==="del-ts")delete c[r],Vt(u,c),rt(l("#sv-setlist"),u.songs,c);else if(i.dataset.action==="cts-seek"){let d=Number(i.dataset.ctsSeconds);if(!isNaN(d)&&y?.seekTo){y.seekTo(d,!0);try{y.playVideo()}catch{}}}else if(i.dataset.action==="cts-propose"){let d=u.songs[r];Ls(u,r,d?.title||`\u66F2 ${r+1}`)}})}function S(t,e=0){if(!t?.url)return;let s=_(t.url);if(!s){gs(t.url);return}if(Ee()){window.open(Me(t.url,e),"_blank","noopener");return}Ye(),Ft(),Z(),vt||($=null);let n=l("#stream-viewer");if(R(n)){if(n._currentStream?.url===t.url){if(!Ce()&&!window.__restoreMusicExternalPlayer?.()&&Pe(),e>0)try{y?.seekTo(Math.floor(e),!0),y?.playVideo()}catch{}return}Et()}let a=window.__takeOverMusicPlayerVideo?.(t.url)||null;a||import("./chunk-7Y7QZX3A.js").then(b=>(b.releaseMusicPlayerVideo||b.pauseMusicPlayer)()).catch(()=>{});let i=l("#yt-player-panel");if(i&&!i.hidden){try{w?.pauseVideo()}catch{}i.hidden=!0,tt()}if(T=null,C){C=!1;let b=l("#stream-viewer");b&&b.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}C=!1,zt();let r=l("#stream-viewer");r.classList.remove("sv-fullscreen"),r.classList.toggle("sv-mv-mode",!!t.isMv),r._currentStream=t;let u=++q,c=r.querySelectorAll("[data-bc-tab]");c[1]&&(t.isMv?(c[1].dataset.bcTab="playlists",c[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(c[1].dataset.bcTab="timeline",c[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let d=l("#sv-bc-title");d&&(d.textContent=t.title||"\u914D\u4FE1");let v=l("#sv-stream-meta");v&&(v.textContent=t.isMv?"":`${E(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let p=l("#sv-yt-link");p&&(p.href=t.url);let m=l("#sv-song-count");if(m&&(m.textContent=t.isMv?"":`${t.songs.length}\u66F2`),P={},t.isMv){let b=l("#sv-setlist");b&&(b.innerHTML="");let k=l("#sv-below-player");k&&(k.innerHTML=""),As(t)}else{let b=ut(t);rt(l("#sv-setlist"),t.songs,b),$s(t),Ps(t)}r.hidden=!1,document.body.style.overflow="",A(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),y=null;let h=l("#sv-player-wrap");h.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let g=Math.floor(e||a?.currentTime||0);if(a?.player){h.innerHTML="",a.iframe?(a.iframe.style.width="100%",a.iframe.style.height="100%",h.appendChild(a.iframe)):h.innerHTML='<div class="sv-player-loading">\u518D\u751F\u3092\u5F15\u304D\u7D99\u304E\u307E\u3057\u305F</div>',y=a.player;try{y.setVolume?.(F()),g>1&&y.seekTo?.(g,!0),y.playVideo?.()}catch{}X(l("#sv-vol-slider"),l("#sv-vol-btn"),null,F()),Cs(u,r);return}Ne(()=>{if(u!==q||r.hidden)return;h.innerHTML="";let b=document.createElement("div");h.appendChild(b);try{y=new window.YT.Player(b,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...g>0?{start:g}:{}},events:{onReady:k=>{let ht=F();try{k.target.setVolume(ht)}catch{}X(l("#sv-vol-slider"),l("#sv-vol-btn"),null,ht);try{k.target.setPlaybackQuality("hd1080")}catch{}try{k.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(g>5)try{k.target.seekTo(g,!0)}catch{}},onStateChange:k=>{if(u===q){if(k.data===window.YT.PlayerState.PLAYING)try{k.target.setPlaybackQuality("hd1080")}catch{}k.data===window.YT.PlayerState.ENDED&&Ue(r)}},onError:()=>{u===q&&(h.innerHTML=`<iframe src="https://www.youtube.com/embed/${f(s)}?autoplay=1&playsinline=1&rel=0${g>0?`&start=${g}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{h.innerHTML=`<iframe src="https://www.youtube.com/embed/${f(s)}?autoplay=1&playsinline=1&rel=0${g>0?`&start=${g}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function pt(){let t=l("#stream-viewer");if(!t||t.hidden||R(t))return;if(C){C=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let s=l("#sv-close");s&&(s.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let n=l("#sv-fullscreen-btn");n&&n.setAttribute("aria-pressed","false");return}if(ds())return;++q,t.hidden=!0,t._currentStream=null,Z(),y=null;let e=l("#sv-player-wrap");e&&(e.innerHTML=""),document.body.style.overflow="",Mt(),A()}window.__openStreamViewer=S;window.__closeStreamMiniPlayer=()=>{let t=l("#stream-viewer");if(R(t))return Et(),!0;let e=l("#yt-player-panel");return e&&!e.hidden?(e.hidden=!0,tt(),T=null,!0):!1};function Ht(t){let e=kt(t),s=l("#song-modal"),n=l("#song-modal-body"),a=l("#song-modal-title");if(!e||!s||!n||!a)return;ne(e),a.textContent=e.title;let i=(e.streamRefs||[]).slice(0,8).map(c=>({...c,thumbnail:ot(c.url),thumbnailFallback:rs(c.url),thumbnailTiny:os(c.url),detailKey:G(c)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),u=Ct(e.key);n.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${f(e.key)}">${f(e.artist)}</button>
        <div class="song-detail-tags">${r.map(c=>`<span class="tag-badge">${f(c)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${E(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${u?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${f(e.key)}">${u?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${f(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${i.length?i.map(c=>`
        <div class="song-detail-stream">
          ${c.thumbnail&&c.url?`<a class="song-detail-thumb-link" href="${f(c.url)}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F"><img class="song-detail-thumb" src="${f(c.thumbnail)}" data-fallback="${f(c.thumbnailFallback)}" data-tiny="${f(c.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"></a>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${f(e.key)}" data-streamkey="${f(c.detailKey)}">
            <span>${E(c.date)}</span>
            <strong>${f(c.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,s.hidden=!1,l("#song-modal-close")?.focus()}function Vs(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s();let a=n.target.closest("[data-detail-action]");if(a){if(n.stopPropagation(),a.dataset.detailAction==="close"&&s(),a.dataset.detailAction==="favorite"){let i=a.dataset.songkey;te(i);let r=Ct(i);a.textContent=r?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",a.classList.toggle("primary",r),a.classList.toggle("ghost",!r)}if(a.dataset.detailAction==="timeline"){let i=kt(a.dataset.songkey);s(),i&&as(i)}if(a.dataset.detailAction==="stream"){let i=kt(a.dataset.songkey),r=i?.streamRefs?.find(u=>G(u)===a.dataset.streamkey);s(),i&&r&&is(i,r)}if(a.dataset.detailAction==="artist"){let i=kt(a.dataset.songkey);s(),i&&ls(i)}}}),t.addEventListener("error",n=>{let a=n.target.closest?.(".song-detail-thumb");if(!a)return;let i=a.dataset.fallback||a.dataset.tiny||"";if(i&&a.src!==i){a.src=i,a.dataset.fallback===i?delete a.dataset.fallback:delete a.dataset.tiny;return}a.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&s()})}var $e=!1;function Ns(){if(!o.data)return;let{stats:t,streams:e=[]}=o.data,s=e[0]?.date||null,n=Pt(s),a=t.dataGeneratedDate||o.channelData?.dataGeneratedDate||null,i=Pt(a),r=t.channelLabel||t.channelId||"",u=r?`<span class="badge accent" style="margin-right:8px;">${f(r)}</span>`:"";l("#updated-info").innerHTML=u+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${E(a)||"\u2014"}</strong>`+(i!=null?` <span class="badge">${i}\u65E5\u524D</span>`:"");let c=l("#stats-grid");if(!$e)c.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${j(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${j(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${j(t.streams)}<span class="stat-unit">\u56DE</span></div>
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
        <div class="stat-value">${Le(o.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,$e=!0;else{let d=c.querySelectorAll(".stat-value");d.length>=6&&(d[0].textContent=j(t.total),d[0].innerHTML+='<span class="stat-unit">\u56DE</span>',d[1].textContent=j(t.repertoire),d[1].innerHTML+='<span class="stat-unit">\u66F2</span>',d[2].textContent=j(t.streams),d[2].innerHTML+='<span class="stat-unit">\u56DE</span>',d[3].textContent=t.avgPerStream,d[3].innerHTML+='<span class="stat-unit">\u66F2</span>',d[4].textContent=n??"\u2014",d[4].innerHTML+='<span class="stat-unit">\u65E5</span>',d[5].textContent=Le(o.data),d[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function Le(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,s=t.streams[0].date;return Math.floor((s-e)/864e5)+1}function Hs(){l("#loading").hidden=!1,l("#error").hidden=!0}function Rs(){l("#loading").hidden=!0}function Bs(t){let e=l("#loading"),s=l("#error"),n=l("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),n&&(n.textContent=t&&t.message?t.message:String(t))}function Us(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let s=document.getElementById("hero-ch-bg");s&&(s.dataset.mode=t||"all")}var js={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:"\u{1F6CD}",label:"official store",url:"https://react.booth.pm"},{icon:"\u{1F310}",label:"official site",url:"https://v-react.com"},{icon:"\u{1F3B5}",label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:"\u{1F3A7}",label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:"\u25B6",label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function wt(t){let e=js[t];if(!e)return"";let s=e.bannerUrl?`<img class="ch-card-banner-img" src="${f(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${f(e.label)}</span>`:`<span class="ch-card-banner-label">${f(e.label)}</span>`,n=e.avatarUrl?`<img class="ch-card-avatar-img" src="${f(e.avatarUrl)}" alt="${f(e.name)}" loading="lazy" referrerpolicy="no-referrer">`:t==="new"?"\u65B0":"\u65E7",a=e.desc?`<p class="ch-card-desc">${e.desc.split(`
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
          <div class="ch-card-avatar ch-card-avatar--${t}${e.avatarUrl?" ch-card-avatar--img":""}">${n}</div>
          <div class="ch-card-meta">
            <div class="ch-card-name">${f(e.name)}</div>
            <div class="ch-card-handle">${f(e.handle)}</div>
          </div>
        </div>
        ${a}
        ${i}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${f(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u3078
          </a>
        </div>
      </div>
    </div>`}function Ys(t){let e=l("#ch-modal"),s=l("#ch-modal-body");if(!e||!s)return;let n="";t==="new"?n=wt("new"):t==="old"?n=wt("old"):n=wt("new")+wt("old"),s.innerHTML=n,e.hidden=!1,l("#ch-modal-close")?.focus()}function Os(){let t=l("#ch-modal"),e=l("#ch-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s()}),document.querySelectorAll("[data-ch-modal]").forEach(n=>{n.addEventListener("click",()=>Ys(n.dataset.chModal))})}function Fs(){let t=l("#help-modal"),e=l("#help-btn"),s=l("#help-close");if(!t||!e||!s)return;let n=()=>{t.hidden=!1,s.focus()},a=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",n),s.addEventListener("click",a),t.addEventListener("click",i=>{i.target===t&&a()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&a()})}function Ks(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function Xt(){Hs();try{let t=await ie();o.channelData=t,!W&&!t.fullLoaded&&xe();let e=B(),s=!!e.v;o.songsQuery=e.q,o.activeTab=s?"player":St(e.tab)?e.tab:"dashboard",Te(o.activeTab);let n=e.channel||o.channel||et;if(U(n)||(n=et),!U(n)){let a=Object.keys(t.channels)[0];a&&(n=a)}if(!U(n))throw new Error("No channel data could be loaded");ns(),Tt(n,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0,render:!s}),s&&(await ys()||I(e.tab,{updateUrl:!1,initial:!0})),Rs(),bs()}catch(t){console.error("[init] failed:",t),Bs(t)}}function zs(){if(!o.channelData)return;let t=B();o.songsQuery=t.q,t.channel!==o.channel&&U(t.channel)&&Tt(t.channel,{resetSearch:!1,updateUrl:!1}),I(t.tab,{updateUrl:!1})}M(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=l("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!C&&!R(s)){ft=e,pt();return}I(e)})});M(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||Tt(t.dataset.channel))})});window.addEventListener("popstate",zs);M("[data-audience]").forEach(t=>{t.addEventListener("click",()=>ts(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest(".timeline-setlist .setlist-title[data-songkey]");if(e){t.preventDefault(),t.stopPropagation(),Ht(e.dataset.songkey);return}let s=t.target.closest("[data-artist-search]");if(s){t.preventDefault(),t.stopPropagation(),Ut(s.dataset.artistSearch||s.textContent||"");return}let n=t.target.closest("[data-playlist-add]");if(n){t.preventDefault(),t.stopPropagation();let r=n.dataset.playlistAdd,u=n.dataset.streamTitle||"",c=d=>{n.classList.toggle("is-saved",d),n.classList.contains("timeline-save-btn")&&(n.textContent=d?"\u2605":"\u2606"),n.title=d?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"};import("./chunk-MBBHUGGG.js").then(d=>d.showAddToPlaylistModal(r,u,{onChange:c}));return}let a=t.target.closest("[data-stream-play]");if(a){t.preventDefault(),t.stopPropagation();let r=a.dataset.streamPlay,u=(o.data?.streams||[]).find(c=>G(c)===r);u?.url&&S(u);return}if(se(t.target))return;let i=t.target.closest("[data-songkey]");i&&Ht(i.dataset.songkey)});l("#retry-btn").addEventListener("click",Xt);l("#reload-btn").addEventListener("click",Xt);Fs();Os();Ot();Ye();Vs();es();ss();Ks();import("./chunk-7Y7QZX3A.js").then(t=>{t.setApiLoader(Ft),t.initMusicPlayer()}).catch(()=>{});me(t=>{t.type==="song"?Ht(t.song.key):t.type==="artist"?Ut(t.artist):t.type==="stream"?S(t.stream):t.type==="music-video"&&S({...t.video,isMv:!0})});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(!s&&!t.metaKey&&!t.ctrlKey&&!t.altKey){let a=l("#stream-viewer");if(a&&!a.hidden&&!a.classList.contains("sv-minified")&&!a.classList.contains("sv-music-minified")&&l("#sv-share-modal")?.hidden!==!1&&y){if(t.key===" "){t.preventDefault();try{y.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?y.pauseVideo():y.playVideo()}catch{}return}if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();try{let r=y.getCurrentTime?.()??0,u=Math.max(0,r+(t.key==="ArrowRight"?10:-10));y.seekTo(u,!0)}catch{}return}}}if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),fe();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),oe();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let a=l("#help-modal");a&&a.hidden&&(a.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let a=l("#stream-viewer"),i=!!l("#panel-player.active");if(a&&!a.hidden&&(C||i)){t.preventDefault(),pt();return}if(qt()){t.preventDefault(),at();return}let r=l("#song-modal");if(r&&!r.hidden)return;let u=l("#ch-modal");if(u&&!u.hidden){u.hidden=!0;return}let c=l("#help-modal");if(c&&!c.hidden){c.hidden=!0,l("#help-btn")?.focus();return}let d=l("#songs-search");d&&document.activeElement===d&&d.value&&(t.preventDefault(),d.value="",d.dispatchEvent(new Event("input",{bubbles:!0})))}});de(()=>{o.data&&(It(),(o.activeTab==="dashboard"||o.activeTab==="analytics")&&K())});function Gs(){Xt()}Gs();export{vs as getWatchHistory};
