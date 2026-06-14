import{a as pe,b as me,e as Vt,f as fe}from"./chunk-75LO2NW7.js";import{b as oe,c as ce,d as de,i as ue,j as ve,k as O,l as G}from"./chunk-I3NVQXRL.js";import{a as ot}from"./chunk-MKJIXTK4.js";import{a as ie,b as Dt,c as le,e as d}from"./chunk-JT7WCFD3.js";import{E as Ht,F as C,H as tt,M as z,N as re,P as g,a as l,b as P,c as f}from"./chunk-XREH2M7C.js";var E=-1,q=[],qt=null,Q=null,kt=null;function ge(t){qt=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
    <div id="omni-box">
      <div class="omni-input-row">
        <span class="omni-search-icon" aria-hidden="true">${g("search")}</span>
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
  `,document.body.appendChild(e),e.addEventListener("click",n=>{n.target===e&&ut()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>Nt(s.value)),s.addEventListener("keydown",Xe),document.getElementById("omni-listbox").addEventListener("click",n=>{let a=n.target.closest("[data-omni-idx]");a&&ke(Number(a.dataset.omniIdx))})}function we(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,E=-1,q=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Nt(""),es().then(()=>{if(!Bt())return;let s=document.getElementById("omni-input")?.value||"";s.trim()&&Nt(s)})}function ut(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),E=-1}function Bt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Xe(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),E=Math.min(E+1,e.length-1),he(e)):t.key==="ArrowUp"?(t.preventDefault(),E=Math.max(E-1,-1),he(e)):t.key==="Enter"?(t.preventDefault(),E>=0&&q[E]&&ke(E)):t.key==="Escape"&&(t.preventDefault(),ut())}function he(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===E),e.setAttribute("aria-selected",String(s===E))}),E>=0&&t[E]?.scrollIntoView({block:"nearest"})}function ke(t){let e=q[t];!e||!qt||(ut(),qt(e))}function Nt(t){let e=document.getElementById("omni-listbox");if(!e)return;E=-1,q=[];let s=d.data?.songs||[],n=d.data?.streams||[],a=Q||[],i=et(t),r="",u=0;if(!d.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!i){let m=s.slice(0,8);if(m.length){r+=ct("rank","\u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let v of m)q.push({type:"song",song:v}),r+=be(v,u++,"")}e.innerHTML=r||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let o=[];try{o=(ve(t,s).results||[]).slice(0,8)}catch{}if(o.length||(o=s.filter(m=>ye(t,`${m.title} ${m.artist}`)).slice(0,8)),o.length){r+=ct("music","\u66F2");for(let m of o)q.push({type:"song",song:m}),r+=be(m,u++,i)}if(a.length){let m=a.filter(v=>ss(v,t)).slice(0,6);if(m.length){r+=ct("video","\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2");for(let v of m)q.push({type:"music-video",video:v}),r+=ts(v,u++,t)}}let c=new Set,p=[];for(let m of s)if(m.artist&&ye(t,m.artist)&&!c.has(m.artist)&&(c.add(m.artist),p.push(m.artist),p.length>=4))break;if(p.length){r+=ct("artist","\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let m of p){let v=s.filter(h=>h.artist===m).length;q.push({type:"artist",artist:m}),r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${u++}">
        <span class="omni-item-icon">${g("artist")}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${dt(f(m),i)}</span>
          <span class="omni-item-meta">${v}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(n.length){let m=n.filter(v=>{let h=et(`${v.title||""} ${(v.songs||[]).map(y=>`${y.title||""} ${y.artist||""}`).join(" ")}`),w=$t(t);return w.length>0&&w.every(y=>h.includes(y))}).slice(0,5);if(m.length){r+=ct("calendar","\u914D\u4FE1\u67A0");for(let v of m){q.push({type:"stream",stream:v});let h=v.channel==="new"?"\u65B0ch":v.channel==="old"?"\u65E7ch":"";r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${u++}">
          <span class="omni-item-icon">${g("calendar")}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${dt(f(v.title||"\u914D\u4FE1"),i)}</span>
            <span class="omni-item-meta">${C(v.date)}${h?" \xB7 "+h:""} \xB7 ${v.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}r||(r=`<div class="omni-empty">\u300C${f(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=r}function ct(t,e){return`<div class="omni-section-label" role="presentation">${g(t)} ${e}</div>`}function be(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">${g("music")}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${dt(f(t.title),s)}</span>
      <span class="omni-item-meta">${dt(f(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function ts(t,e,s){let n=$e(t),a=t.originalArtist||t.character||n;return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">${g("video")}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${dt(f(t.title||"\u52D5\u753B"),s)}</span>
      <span class="omni-item-meta">${f(n)}${a?" \xB7 "+f(a):""} \xB7 \u52D5\u753B\u3067\u898B\u308B</span>
    </div>
  </div>`}function es(){return Q!==null?Promise.resolve(Q):kt||(kt=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>(Q=Array.isArray(t?.videos)?t.videos:[],Q)).catch(()=>(Q=[],Q)),kt)}function ss(t,e){let s=$t(e);if(!s.length)return!1;let n=ns(t);return s.every(a=>n.includes(a))}function ns(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(n=>n.trim()).filter(Boolean);return et([e,...s,t.originalArtist,t.character,t.type,$e(t)].filter(Boolean).join(" "))}function $e(t){switch(t?.type){case"cover":return"\u6B4C\u307F\u305F";case"office":return"Re:AcT\u30AA\u30EA\u66F2";case"character":return"\u30AD\u30E3\u30E9\u30BD\u30F3";default:return"\u30AA\u30EA\u66F2"}}function $t(t){return et(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function ye(t,e){let s=$t(t);if(!s.length)return!1;let n=et(e);return s.every(a=>n.includes(a))}function et(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/\s+/g," ").trim()}function dt(t,e){let n=$t(e).find(r=>r&&t.toLowerCase().includes(r))||et(e);if(!n)return t;let i=t.toLowerCase().indexOf(n);return i<0?t:t.slice(0,i)+'<mark class="hl">'+t.slice(i,i+n.length)+"</mark>"+t.slice(i+n.length)}me();le();var Ce={dashboard:()=>import("./chunk-WLWGNTXO.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-5FKEGC64.js").then(t=>t.renderRanking),songs:()=>import("./chunk-GA2FXYAC.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-6XM64PFG.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-OMGOESDR.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-PUFWCSCY.js").then(t=>t.renderPlaylists)},Lt=new Map,Le=0,nt=null;function Et(t){return Object.prototype.hasOwnProperty.call(Ce,t)}async function as(t){Lt.has(t)||Lt.set(t,Ce[t]());try{return await Lt.get(t)}catch(e){throw Lt.delete(t),e}}function Pe(t){return["dashboard","timeline","analytics"].includes(t)}function is(t,e={}){let s=l(`#panel-${t}`);if(!s)return;let n={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${f(n[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function ls(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function rs(t){if(d.channelData?.fullLoaded)return;d.channelData=t;let e=F(d.channel)?d.channel:ot,s=F(e);s&&(d.data=s),!Pe(d.activeTab)&&d.data&&Z(d.activeTab,{autoLoad:!1})}function os(t){d.channelData=t,d.channelData.fullLoaded=!0;let e=F(d.channel)?d.channel:ot;Pt(e,{resetSearch:!1,updateUrl:!1,render:!1}),Z(d.activeTab,{autoLoad:!1})}function Ie(){return nt=ce({meta:d.channelData,onSongsReady:rs}).then(os).finally(()=>{nt=null}),nt}async function Ft(){d.channelData?.fullLoaded||(nt||Ie(),await nt)}async function Z(t=d.activeTab,e={}){if(t!=="playlists"&&(!d.data||!Et(t))||!Et(t))return;let s=d.channelData?.partialLoaded||d.channelData?.fullLoaded,n=d.channelData?.fullLoaded;if(t==="playlists"?!1:Pe(t)?!n:!s)if(e.autoLoad){ls(t);try{await Ft()}catch(r){console.error("[data] full load failed",r);let u=l(`#panel-${t}`);u&&(u.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${f(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${f(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,u.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{Z(t,{autoLoad:!0})}));return}}else{is(t,{initial:e.initial});return}let i=++Le;try{let r=await as(t);if(i!==Le||t!==d.activeTab||!d.data)return;t==="songs"&&ue(d.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let u=l(`#panel-${t}`);u&&(u.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${f(r?.message||String(r))}</div>
        </div>
      `)}}function D(t,e={}){Et(t)||(t="dashboard");let s=l("#stream-viewer");if(t!=="player"&&s&&!s.hidden&&!A&&!j(s)){wt=t,Mt=e,yt();return}d.activeTab=t,Ae(t),e.updateUrl!==!1&&G({tab:t}),Z(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Ae(t){P(".tab-btn").forEach(e=>{let s=e.dataset.tab===t;e.classList.toggle("active",s),e.setAttribute("aria-selected",s?"true":"false")}),P(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`)),document.body.dataset.activeTab=t}function F(t){return d.channelData?t==="all"?d.channelData.combined:d.channelData.channels[t]||null:null}function Pt(t,e={}){let s=F(t);s&&(d.channel=t,en(t),d.data=s,d.timelineFilter=null,d.timelineFocus=null,d.timelineLimit=12,d.songsLimit=100,e.resetSearch!==!1&&(d.songsQuery="",d.songsGenre="all"),Vt(),P("#channel-switch [data-channel]").forEach(n=>n.classList.toggle("active",n.dataset.channel===t)),Kt(),e.updateUrl!==!1&&G({tab:d.activeTab,channel:t,q:d.songsQuery}),Ws(),e.render!==!1&&Z(d.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function cs(t,e={}){d.audience=t==="singer"?"singer":"listener",d.singerMode=d.audience==="singer",d.singerMode||(d.singerPreset="all"),P(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===d.audience)}),document.body.dataset.audience=d.audience,Kt(),d.audience==="singer"?(d.songsLimit=100,D("songs",{autoLoad:e.autoLoad!==!1})):d.data&&Z(d.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Kt(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",s=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${s}`}function ds(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),s=l("#topbar-actions");if(!t||!e||!s)return;let n=i=>{e.checked=i,s.classList.toggle("is-open",i),t.setAttribute("aria-expanded",String(i))},a=()=>{n(!1),t.focus()};t.addEventListener("click",i=>{i.stopPropagation(),requestAnimationFrame(()=>n(e.checked))}),t.addEventListener("keydown",i=>{i.key!=="Enter"&&i.key!==" "||(i.preventDefault(),n(!e.checked))}),e.addEventListener("change",()=>{n(e.checked)}),document.addEventListener("click",i=>{s.classList.contains("is-open")&&(i.target.closest("#topbar-actions")||i.target.closest("#mobile-menu-toggle")||i.target.closest("#mobile-menu-state")||a())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&a()}),s.addEventListener("click",i=>{i.stopPropagation()}),Kt()}function us(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,n=420,a=()=>{!e||e.src||(e.src=e.dataset.src||"")},i=()=>{s=!1;let u=window.scrollY>n;u&&a(),t.hidden=!u,t.classList.toggle("is-visible",u),t.setAttribute("aria-hidden",String(!u)),t.tabIndex=u?0:-1},r=()=>{s||(s=!0,requestAnimationFrame(i))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),i()}function vs(){if(d.channelData)for(let t of P("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!d.channelData.combined:!!(d.channelData.channels&&d.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function ps({key:t,title:e,artist:s}){d.timelineFilter&&d.timelineFilter.key===t&&d.activeTab==="timeline"?d.timelineFilter=null:d.timelineFilter={key:t,title:e,artist:s},d.timelineFocus=null,d.timelineLimit=12,D("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function ms(t,e){d.timelineFilter={key:t.key,title:t.title,artist:t.artist},d.timelineFocus=tt(e),d.timelineLimit=9999,D("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function fs(t){zt(t.artist||"")}function zt(t){let e=String(t||"").replace(/"/g,"");d.songsQuery=e?`artist:"${e}"`:"",d.songsLimit=100,G({tab:"songs",q:d.songsQuery}),D("songs",{updateUrl:!1})}function _t(t){return(d.data?.songs||[]).find(e=>e.key===t)||null}function x(t){let e=String(t||""),s=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let n of s){let a=e.match(n);if(a)return a[1]}return""}function De(){return window.matchMedia("(max-width: 700px)").matches}function He(t,e=0){let s=String(t||""),n=x(s);if(!n)return s;let a=Math.max(0,Math.floor(Number(e)||0));return`https://www.youtube.com/watch?v=${n}${a>0?`&t=${a}s`:""}`}function mt(t){let e=x(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function hs(t){let e=x(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function Ve(t){let e=x(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function gt(){xt&&(clearInterval(xt),xt=null)}function Gt(){gt(),xt=setInterval(()=>{if(S(),!!k)try{let t=k.getDuration?.()||0,e=k.getCurrentTime?.()||0;M&&ks(M,e);let s=t>0?Math.min(e/t*100,100):0,n=l("#yt-mini-progress-fill");n&&(n.style.width=`${s}%`);let i=k.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,r=l("#yt-mini-play");r&&r.setAttribute("data-playing",i?"1":"0")}catch{}},400)}function rt(){if(gt(),k){try{k.destroy()}catch{}k=null}let t=l("#yt-player-container");t&&(t.innerHTML="")}function bs(){if(k?.getCurrentTime)try{return k.getCurrentTime()}catch{}return Math.max(0,ht+(Date.now()-Zt)/1e3)}function j(t=l("#stream-viewer")){return!!t&&(t.classList.contains("sv-minified")||t.classList.contains("sv-music-minified"))}function S(){let t=l("#stream-viewer");if(!j(t))return;let e=l("#sv-player-wrap"),s=t.classList.contains("sv-music-minified")?document.querySelector("#music-bar .mbar-video-wrap"):document.querySelector("#yt-player-panel .yt-mini-video-wrap");if(!e||!s)return;let n=s.getBoundingClientRect();e.style.left=`${n.left}px`,e.style.top=`${n.top}px`,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`}function ys(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||!e||!b)return!1;Jt();let s=l("#yt-player-panel");if(!s)return!1;M=e;try{ht=Math.floor(b.getCurrentTime?.()??0)}catch{ht=0}Zt=Date.now();let n=l("#yt-mini-title");n&&(n.textContent=e.title||"");let a=l("#yt-mini-hint");a&&(a.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),s.classList.add("has-stream"),s.hidden=!1,k=b,b=null,t.classList.add("sv-minified"),document.body.classList.add("has-sv-mini"),document.body.style.overflow="",At(),H(),S(),requestAnimationFrame(S),setTimeout(S,120),setTimeout(S,400),window.addEventListener("resize",S),Gt();try{let i=k.getPlayerState?.();l("#yt-mini-play")?.setAttribute("data-playing",i===window.YT?.PlayerState?.PLAYING?"1":"0")}catch{}return it(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,J()),!0}function qe(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",S),gt(),t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini");let e=l("#sv-player-wrap");e&&(e.style.cssText=""),b=k,k=null;let s=l("#yt-player-panel");return s&&(s.hidden=!0),Xt(),H(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function Ne(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",S),gt(),t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music");let e=l("#sv-player-wrap");return e&&(e.style.cssText=""),b=k,k=null,Xt(),H(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function Be(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",S),gt(),lt(),++B,t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");return e&&(e.style.cssText="",e.innerHTML=""),rt(),M=null,H(),!0}function gs(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||t.hidden||!e?.url)return;let s=Qt(O().t),n={...e,title:e.title||(e.isMv?"\u52D5\u753B":"\u6B4C\u67A0"),type:e.isMv?e.type||"original":"stream",sub:e.isMv?e.originalArtist||e.character||e.sub||"":`${C(e.date)} \u7B2C${e.index}\u67A0`,_stream:e};if(!b){import("./chunk-OEM5VAYO.js").then(i=>i.playMusicBarVideo?.(n,s)).catch(()=>{});return}try{ht=Math.floor(b.getCurrentTime?.()??s)}catch{ht=s}Zt=Date.now(),k=b,b=null,M=null,A=!1,t.classList.remove("sv-fullscreen","sv-minified"),t.classList.add("sv-music-minified"),document.body.classList.remove("has-sv-fullscreen","has-sv-mini"),document.body.classList.add("has-sv-music"),document.body.style.overflow="",t.hidden=!1;let a=l("#yt-player-panel");a&&(a.hidden=!0),At(),H(),S(),requestAnimationFrame(S),setTimeout(S,120),setTimeout(S,400),window.addEventListener("resize",S),Gt(),import("./chunk-OEM5VAYO.js").then(i=>{i.adoptExternalPlayer?.(n,k,{restore:Ne,close:Be}),S(),requestAnimationFrame(S),setTimeout(S,120),setTimeout(S,400)}).catch(()=>{})}function It(){let t=l("#stream-viewer");if(t?.classList.contains("sv-music-minified"))return Be();if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",S),lt(),++B,t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");e&&(e.style.cssText="",e.innerHTML=""),rt();let s=l("#yt-player-panel");return s&&(s.hidden=!0),M=null,H(),!0}var Re="kanau-watch-history-v1",Se=0;function ws(){try{return JSON.parse(localStorage.getItem(Re)||"[]")}catch{return[]}}function Ue(t,e){if(!(!t?.url||e<10))try{let s=ws().filter(n=>n.url!==t.url);s.unshift({url:t.url,title:t.title||"",t:Math.max(0,Math.floor(e)),isMv:!!t.isMv,channel:t.channel??null,index:t.index??null,date:t.date??null,updatedAt:Date.now()}),localStorage.setItem(Re,JSON.stringify(s.slice(0,10)))}catch{}}function ks(t,e){let s=Date.now();s-Se<5e3||(Se=s,Ue(t,e))}var vt=null;function Qt(t=0){let e=[b,k];for(let s of e)try{let n=s?.getCurrentTime?.();if(Number.isFinite(n))return Math.max(0,Math.floor(n))}catch{}return Math.max(0,Math.floor(Number(t)||0))}function $s(t,e=0,s={}){if(!t)return"";let n=O(),a=new URLSearchParams,i=n.channel||d.channel;return i&&i!=="new"&&a.set("ch",i),a.set("v",t),s.includeTime!==!1&&e>5&&a.set("t",String(Math.floor(e))),`${location.origin}${location.pathname}?${a}`}function H(){let t=l("#stream-viewer"),s=t&&!t.hidden&&!j(t)&&t._currentStream?.url?x(t._currentStream.url):"",n=s?Qt(O().t):0;G({v:s||"",t:n>5?n:0},{replace:!0}),s&&Ue(t._currentStream,n),s&&!vt&&(vt=setInterval(H,5e3)),!s&&vt&&(clearInterval(vt),vt=null)}function Ls(){if(l("#sv-share-modal"))return;let t=document.createElement("div");t.id="sv-share-modal",t.hidden=!0,t.innerHTML=`
    <div class="sv-share-backdrop"></div>
    <div class="sv-share-dialog" role="dialog" aria-modal="true" aria-label="\u52D5\u753B\u3092\u5171\u6709">
      <div class="sv-share-head">
        <span class="sv-share-head-icon">${g("heart")}</span>
        <span class="sv-share-head-title">\u3053\u306E\u6B4C\u67A0\u3092\u304A\u3059\u305D\u308F\u3051</span>
        <button class="sv-share-close" id="sv-share-close" type="button" aria-label="\u9589\u3058\u308B">${g("close")}</button>
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
    </div>`,document.body.appendChild(t);let e=()=>{t.hidden=!0};t.querySelector(".sv-share-backdrop").addEventListener("click",e),l("#sv-share-close").addEventListener("click",e),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&(a.preventDefault(),a.stopPropagation(),e())},{capture:!0});let s=()=>{let a=t._shareState;if(!a)return;let i=l("#sv-share-ts-check")?.checked&&a.t>0,r=$s(a.id,a.t,{includeTime:i}),u=l("#sv-share-url");u&&(u.value=r);let o=a.title?`${a.title}`:"\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9",c=l("#sv-share-x");c&&(c.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(o)}&url=${encodeURIComponent(r)}`);let p=l("#sv-share-line");return p&&(p.href=`https://line.me/R/share?text=${encodeURIComponent(`${o}
${r}`)}`),r};l("#sv-share-ts-check").addEventListener("change",s),t._rebuild=s,l("#sv-share-url").addEventListener("focus",a=>a.target.select()),l("#sv-share-copy").addEventListener("click",async()=>{let a=l("#sv-share-url")?.value;if(!a)return;let i=!1;try{await navigator.clipboard.writeText(a),i=!0}catch{try{l("#sv-share-url").select(),i=document.execCommand("copy")}catch{}}let r=l("#sv-share-copy");r&&(r.textContent=i?"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",r.classList.add("copied"),setTimeout(()=>{r.textContent="\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",r.classList.remove("copied")},1600))});let n=l("#sv-share-native");navigator.share&&n&&(n.hidden=!1,n.addEventListener("click",async()=>{let a=t._shareState,i=l("#sv-share-url")?.value;if(i)try{await navigator.share({title:a?.title||"",url:i})}catch{}}))}function Ss(){let e=l("#stream-viewer")?._currentStream;if(!e?.url)return;let s=x(e.url);if(!s)return;Ls();let n=l("#sv-share-modal"),a=Qt(O().t);n._shareState={id:s,t:a,title:e.title||""};let i=l("#sv-share-video-title");i&&(i.textContent=e.title||"(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)");let r=l("#sv-share-ts-row"),u=l("#sv-share-ts-check"),o=l("#sv-share-ts-label");r&&(r.hidden=a<=5),u&&(u.checked=a>5),o&&(o.textContent=Y(a)),n._rebuild?.(),n.hidden=!1}var _e=new URLSearchParams(location.search).get("pl");async function _s(){if(!_e)return;let t=null;try{let n=_e.replace(/-/g,"+").replace(/_/g,"/"),a=Uint8Array.from(atob(n),i=>i.charCodeAt(0));t=JSON.parse(new TextDecoder().decode(a))}catch{return}if(!t||typeof t.n!="string"||!Array.isArray(t.s))return;let e=t.n.slice(0,60)||"\u5171\u6709\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8",s=t.s.filter(n=>typeof n=="string"&&n.length<100).slice(0,300);if(s.length){if(!confirm(`\u5171\u6709\u3055\u308C\u305F\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u300C${e}\u300D\uFF08${s.length}\u4EF6\uFF09\u3092\u53D6\u308A\u8FBC\u307F\u307E\u3059\u304B\uFF1F`)){G({},{replace:!0});return}try{let n=await import("./chunk-PUFWCSCY.js"),a=n.createPlaylist(e);for(let i of s)n.addStreamToPlaylist(a.id,i);G({tab:"playlists"},{replace:!0}),D("playlists",{updateUrl:!1})}catch{}}}async function xs(){let t=O();if(!t.v)return!1;let e=t.v,s=t.t;try{await Ft()}catch{}let n=[];d.channelData?.combined&&n.push(d.channelData.combined),Object.values(d.channelData?.channels||{}).forEach(a=>{a&&n.push(a)});for(let a of n){let i=(a.streams||[]).find(r=>x(r.url)===e);if(i)return _(i,s),!0}try{let r=((await(await fetch("data/music.json")).json())?.videos||[]).find(u=>x(u.url)===e);if(r)return _({url:r.url,title:r.title,isMv:!0},s),!0}catch{}return _({url:`https://www.youtube.com/watch?v=${e}`,title:"",isMv:!0},s),!0}function Ts(t,e=0,s=""){let n=x(t);if(!n)return;if(De()){window.open(He(t,e),"_blank","noopener");return}{let o=l("#stream-viewer");if(o&&!o.hidden&&!A)if(j(o))It();else{++B,o.hidden=!0,o._currentStream=null,b=null;let c=l("#sv-player-wrap");c&&(c.innerHTML=""),document.body.style.overflow="",M=null,Mt={},At(),H()}}Wt(),Jt();let a=l("#yt-player-container"),i=l("#yt-player-panel");if(!a||!i)return;rt();let r=l("#yt-mini-title");r&&(r.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let u=l("#yt-mini-hint");u&&(u.textContent=M?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),i.classList.toggle("has-stream",!!M),i.hidden=!1,Oe(()=>{let o=document.createElement("div");a.appendChild(o);try{k=new window.YT.Player(o,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:c=>{let p=J();try{c.target.setVolume(p)}catch{}if(it(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,p),e>5)try{c.target.seekTo(e,!0)}catch{}Gt()},onStateChange:c=>{let p=c.data===window.YT.PlayerState.PLAYING,m=l("#yt-mini-play");m&&m.setAttribute("data-playing",p?"1":"0")}}})}catch{let p=e>0?`&start=${Math.floor(e)}`:"";a.innerHTML=`<iframe src="https://www.youtube.com/embed/${n}?autoplay=1&playsinline=1${p}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function Jt(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
        <button class="vol-btn" id="yt-mini-vol-btn" type="button" aria-label="\u97F3\u91CF">${g("volume")}</button>
        <input class="vol-slider" id="yt-mini-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
      </div>
      <button id="yt-player-close" type="button" class="yt-mini-close-btn" aria-label="\u9589\u3058\u308B">${g("close")}</button>
    </div>
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,!It()&&(rt(),M=null)}),l("#yt-mini-play").addEventListener("click",()=>{if(k)try{k.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?k.pauseVideo():k.playVideo()}catch{}}),l("#yt-mini-restore").addEventListener("click",()=>{qe()||M&&_(M,bs())}),l("#yt-mini-progress-bar").addEventListener("click",n=>{if(!k)return;let i=n.currentTarget.getBoundingClientRect(),r=Math.max(0,Math.min(1,(n.clientX-i.left)/i.width));try{let u=k.getDuration?.()||0;u>0&&k.seekTo(r*u,!0)}catch{}});let e=l("#yt-mini-vol-slider"),s=l("#yt-mini-vol-btn");if(e){let n=J();e.value=n,e.style.setProperty("--pct",`${n}%`),s&&(s.innerHTML=ft(n)),e.addEventListener("input",a=>{let i=parseInt(a.target.value);if(a.target.style.setProperty("--pct",`${i}%`),Yt(i),s&&(s.innerHTML=ft(i)),k)try{k.setVolume(i)}catch{}})}if(s){let n=80;s.addEventListener("click",()=>{if(!e)return;let a=parseInt(e.value),i=a>0?0:n||80;a>0&&(n=a),it(e,s,k,i)})}}var Ye=!1,je=[];window.onYouTubeIframeAPIReady=()=>{Ye=!0,je.splice(0).forEach(t=>t()),import("./chunk-OEM5VAYO.js").then(t=>t.notifyYtReady()).catch(()=>{})};function Wt(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function Oe(t){if(Ye&&window.YT?.Player){t();return}je.push(t)}var J=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),Yt=t=>localStorage.setItem("kanaVol",String(t)),ft=()=>g("volume");function it(t,e,s,n){if(t&&(t.value=n,t.style.setProperty("--pct",`${n}%`)),e&&(e.innerHTML=ft(n)),s)try{s.setVolume(n)}catch{}}var b=null,B=0,M=null,ht=0,Zt=0,A=!1,wt="timeline",Mt={},I={},Rt=new Map,R=!1,U=!1,k=null,xt=null,Tt=null,Fe="kanauViewerSetlistCollapsed",N=!1;function Xt(){wt=d.activeTab||"timeline",d.activeTab="player",P(".tab-btn").forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-selected","false")}),P(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player")),document.body.dataset.activeTab="player"}function At(){let t=Mt;Mt={},D(wt||"timeline",t)}function Es(){A=!0;let t=l("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=l("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function Y(t){let e=Math.floor(t),s=Math.floor(e/3600),n=Math.floor(e%3600/60),a=e%60;return s>0?`${s}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${n}:${String(a).padStart(2,"0")}`}function Ke(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function W(t){try{return JSON.parse(localStorage.getItem(Ke(t))||"null")||{}}catch{return{}}}function Ut(t,e){try{localStorage.setItem(Ke(t),JSON.stringify(e))}catch{}}var K=-1;function Ms(t,e,s,n){let a=e===n,i=s[e],r=i!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${f(Y(i))} \u306B\u79FB\u52D5">${f(Y(i))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">${g("close")}</button>`:"",o=(I[e]||[]).map(m=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${m.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${f(Y(m.timeSeconds))}">${f(Y(m.timeSeconds))}</button>`).join(""),c=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,p=`<div class="sv-cts-row">${o}${c}</div>`;return`<div class="sv-song${a?" is-current":""}" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${f(t.title)}</span>
      <span class="sv-song-artist">${f(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${r}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">${g("time")} \u30E1\u30E2</button></div>
    ${p}
  </div>`}async function Cs(t){if(I={},!t?.channel||t?.index==null)return;let e=`${t.channel}:${t.index}`;if(Rt.has(e)){I=Rt.get(e)||{};let a=l("#stream-viewer");if(!a||a._currentStream!==t)return;let i=l("#sv-setlist");i&&at(i,t.songs,W(t),K),xe(t);return}try{let a=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,i=await fetch(a);if(!i.ok)return;let r=await i.json();for(let u of r.items||[])I[u.songIndex]||(I[u.songIndex]=[]),I[u.songIndex].push({timeSeconds:u.timeSeconds,note:u.note??null});Rt.set(e,I)}catch{}let s=l("#stream-viewer");if(!s||s._currentStream!==t)return;let n=l("#sv-setlist");n&&at(n,t.songs,W(t),K),xe(t)}function Ps(t,e,s){l("#sv-cts-modal")?.remove();let n=b?.getCurrentTime?.()??0,a=Y(Math.floor(n)),i=document.createElement("div");i.id="sv-cts-modal",i.className="sv-cts-modal-overlay",i.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">${g("close")}</button>
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
  `,document.body.appendChild(i);let r=()=>i.remove();i.querySelector(".sv-cts-modal-close").addEventListener("click",r),i.querySelector(".sv-cts-modal-cancel").addEventListener("click",r),i.addEventListener("click",u=>{u.target===i&&r()}),i.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let u=i.querySelector("#sv-cts-ts-input").value.trim(),o=i.querySelector("#sv-cts-note-input").value.trim()||null,c=ne(u),p=i.querySelector("#sv-cts-status");if(c===null){p.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",p.className="sv-cts-modal-status error",p.hidden=!1;return}let m=i.querySelector("#sv-cts-submit");m.disabled=!0,m.textContent="\u9001\u4FE1\u4E2D\u2026";try{let v=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:c,submitterNote:o})});if(v.ok)p.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",p.className="sv-cts-modal-status success",p.hidden=!1,m.hidden=!0,i.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let h=await v.json().catch(()=>({}));p.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${h.error||v.statusText}`,p.className="sv-cts-modal-status error",p.hidden=!1,m.disabled=!1,m.textContent="\u63D0\u6848\u3059\u308B"}}catch(v){p.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${v.message}`,p.className="sv-cts-modal-status error",p.hidden=!1,m.disabled=!1,m.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>i.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function u(o){o.key==="Escape"&&(r(),document.removeEventListener("keydown",u))})}function xe(t){let e=l("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let n=Object.keys(I).length>=t.songs.length;e.textContent=n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function Is(t){l("#sv-bulk-modal")?.remove();let e=W(t),a=Object.keys(I).length>=t.songs.length,i=t.songs.map((o,c)=>{let p=e[c]!=null?Y(e[c]):"",m=I[c]?.[0]?.timeSeconds!=null?Y(I[c][0].timeSeconds):"",v=p||m;return`
      <div class="sv-bulk-row" data-idx="${c}">
        <span class="sv-bulk-num">${c+1}</span>
        <span class="sv-bulk-title" title="${f(o.title)}">${f(o.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${f(v)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${c}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${c}">${g("time")}</button>
      </div>`}).join(""),r=document.createElement("div");r.id="sv-bulk-modal",r.className="sv-cts-modal-overlay",r.innerHTML=`
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="${a?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">${a?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">${g("close")}</button>
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
  `,document.body.appendChild(r);let u=()=>r.remove();r.querySelector(".sv-cts-modal-close").addEventListener("click",u),r.querySelector(".sv-cts-modal-cancel").addEventListener("click",u),r.addEventListener("click",o=>{o.target===r&&u()}),r.querySelector(".sv-paste-apply").addEventListener("click",()=>{let c=(r.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(v=>v.trim()).filter(Boolean),p=0;for(let v of c){let h=Gs(v);if(!h)continue;let w=Qs(h.title,h.artist,t.songs);if(w>=0){let y=r.querySelector(`[data-bulk-ts-idx="${w}"]`);y&&(y.value=h.start,p++)}}let m=r.querySelector(".sv-paste-result");m&&(m.textContent=p>0?`${c.length}\u884C\u3092\u89E3\u6790 \u2192 ${p}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",m.hidden=!1)}),r.querySelector(".sv-bulk-rows").addEventListener("click",o=>{let c=o.target.closest("[data-bulk-now]");if(!c)return;let p=parseInt(c.dataset.bulkNow,10),m=b?.getCurrentTime?.();if(m!=null){let v=r.querySelector(`[data-bulk-ts-idx="${p}"]`);v&&(v.value=Y(Math.floor(m)))}}),r.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let o=r.querySelector("#sv-bulk-note").value.trim()||null,c=r.querySelector("#sv-bulk-status"),p=r.querySelector("#sv-bulk-submit"),m=[];if(r.querySelectorAll("[data-bulk-ts-idx]").forEach(w=>{let y=parseInt(w.dataset.bulkTsIdx,10),$=ne(w.value.trim());$!==null&&m.push({songIndex:y,timeSeconds:$})}),!m.length){c.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",c.className="sv-cts-modal-status error",c.hidden=!1;return}p.disabled=!0,p.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${m.length})`,c.hidden=!0;let v=0,h=0;await Promise.all(m.map(async w=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:w.songIndex,timeSeconds:w.timeSeconds,submitterNote:o})})).ok?v++:h++}catch{h++}p.textContent=`\u7533\u8ACB\u4E2D\u2026 (${v+h}/${m.length})`})),h===0?(c.textContent=`${v}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,c.className="sv-cts-modal-status success",p.hidden=!0,r.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(c.textContent=`${v}\u4EF6\u6210\u529F / ${h}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,c.className="sv-cts-modal-status error",p.disabled=!1,p.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),c.hidden=!1}),document.addEventListener("keydown",function o(c){c.key==="Escape"&&(u(),document.removeEventListener("keydown",o))})}function As(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}var te="kanauViewerQueueCollapsed",L=null,bt=!1;function Ct(t){let e=L,s=e?.items?.[t];if(s){e.idx=t,bt=!0;try{s.kind==="mv"?_({url:s.video.url,title:s.video.title,isMv:!0}):_(s.stream)}finally{bt=!1}}}window.__playMyListInViewer=t=>{t?.items?.length&&(L={name:t.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:t.items,idx:0,repeat:localStorage.getItem("kanauListRepeat")==="1",collapsed:localStorage.getItem(te)==="1"},Ct(Math.max(0,Math.min(t.idx||0,t.items.length-1))))};window.__openMusicQueueInViewer=(t,e=0,s=0)=>{if(!t?.length)return!1;let n=t.filter(i=>i?.url).map((i,r)=>i._stream?{kind:"stream",key:i._stream.url||`stream:${r}`,stream:i._stream}:{kind:"mv",key:`mv:${x(i.url)||r}`,video:{...i,isMv:!0}});if(!n.length)return!1;L={name:"\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u30AD\u30E5\u30FC",items:n,idx:Math.max(0,Math.min(e,n.length-1)),repeat:localStorage.getItem("kanauListRepeat")==="1",collapsed:localStorage.getItem(te)==="1"};let a=L.items[L.idx];bt=!0;try{a.kind==="mv"?_({...a.video,isMv:!0},s):_(a.stream,s)}finally{bt=!1}return!0};function ee(){let t=L;if(!t?.items?.length)return"";let e=t.items[t.idx],s=e?.kind==="mv"?e.video?.title||"\u52D5\u753B":e?.stream?.title||"\u914D\u4FE1";return`
    <div class="sv-bp-section sv-queue-section${t.collapsed?" is-collapsed":""}">
      <div class="sv-bp-sh sv-queue-head">${g("playlist")} ${f(t.name)}
        <span class="sv-bp-sh-sub">\uFF08${t.idx+1} / ${t.items.length}\uFF09</span>
        <span class="sv-queue-current">${f(s)}</span>
        <button class="sv-queue-toggle" type="button"
          data-svq-action="toggle" aria-expanded="${!t.collapsed}"
          title="${t.collapsed?"\u30AD\u30E5\u30FC\u3092\u958B\u304F":"\u30AD\u30E5\u30FC\u3092\u9589\u3058\u308B"}">${t.collapsed?"\u958B\u304F":"\u9589\u3058\u308B"}</button>
        <button class="sv-queue-repeat${t.repeat?" is-on":""}" type="button"
          data-svq-action="repeat" aria-pressed="${t.repeat}"
          title="\u30EA\u30B9\u30C8\u30EA\u30D4\u30FC\u30C8\uFF08ON: \u6700\u5F8C\u307E\u3067\u518D\u751F\u3057\u305F\u3089\u5148\u982D\u3078\u623B\u308B\uFF09">${g("repeat")} \u30EA\u30D4\u30FC\u30C8</button>
      </div>
      <div class="sv-queue-list">
        ${t.items.map((n,a)=>{let i=n.kind==="mv"?n.video?.title||"\u52D5\u753B":n.stream?.title||"\u914D\u4FE1",r=n.kind==="mv"?`${g("video")} \u52D5\u753B`:`${g("calendar")} ${C(n.stream?.date)}\u3000\u7B2C${n.stream?.index}\u67A0`;return`<button class="sv-queue-row${a===t.idx?" is-current":""}" type="button"
            data-svq-action="jump" data-svq-idx="${a}">
            <span class="sv-queue-num">${a+1}</span>
            <span class="sv-queue-title">${f(i)}</span>
            <span class="sv-queue-meta">${f(r)}</span>
          </button>`}).join("")}
      </div>
    </div>`}function ze(t){let e=t.target.closest("[data-svq-action]");if(!e||!L)return!1;if(e.dataset.svqAction==="jump"){let s=parseInt(e.dataset.svqIdx,10);return!Number.isNaN(s)&&s!==L.idx&&Ct(s),!0}if(e.dataset.svqAction==="repeat"){L.repeat=!L.repeat;try{localStorage.setItem("kanauListRepeat",L.repeat?"1":"0")}catch{}return e.classList.toggle("is-on",L.repeat),e.setAttribute("aria-pressed",String(L.repeat)),!0}if(e.dataset.svqAction==="toggle"){L.collapsed=!L.collapsed;try{localStorage.setItem(te,L.collapsed?"1":"0")}catch{}let s=e.closest(".sv-queue-section");return s&&(s.outerHTML=ee()),se(l("#sv-below-player")),!0}return!1}function se(t){if(L?.collapsed)return;let e=t?.querySelector?.(".sv-queue-list"),s=e?.querySelector(".sv-queue-row.is-current");e&&s&&(e.scrollTop=Math.max(0,s.offsetTop-e.clientHeight/2))}function Ge(){let t=d.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let n=t.findIndex(a=>a.channel===s.channel&&a.index===s.index);n<0||n>=t.length-1||_(t[n+1])}async function Ds(t){let e=await We(),s=x(t?.url);if(!s||!e.length)return;let n=e.findIndex(i=>x(i.url)===s);if(n<0||n>=e.length-1)return;let a=e[n+1];_({...a,isMv:!0})}function Qe(t){if(!t||j(t))return;let e=b||k;if(U&&e){try{e.seekTo(0,!0),e.playVideo()}catch{}return}if(L?.items?.length){let n=L;n.idx<n.items.length-1?Ct(n.idx+1):n.repeat&&Ct(0);return}if(!R)return;let s=t._currentStream;s?.isMv?Ds(s):Ge()}function lt(){Tt&&(clearInterval(Tt),Tt=null)}function Hs(t,e){lt();let s=!1;Tt=setInterval(()=>{if(t!==B||e.hidden||!b){lt();return}try{let n=b.getPlayerState?.();n===window.YT?.PlayerState?.ENDED?(s||Qe(e),s=!0):n===window.YT?.PlayerState?.PLAYING&&(s=!1);let a=b.getCurrentTime?.()??0,i=e._currentStream;if(i?.songs?.length){let r=W(i),u=-1;for(let o=0;o<i.songs.length;o++)r[o]!=null&&a>=r[o]&&(u=o);u!==K&&(K=u,Vs(u))}}catch{}},700)}function Vs(t){let e=l("#sv-setlist");if(!e)return;e.querySelectorAll(".sv-song").forEach((n,a)=>n.classList.toggle("is-current",a===t))}function Je(t){N=!!t;try{localStorage.setItem(Fe,N?"1":"0")}catch{}let e=l("#stream-viewer .sv-panel"),s=l("#sv-setlist-toggle");e&&e.classList.toggle("is-setlist-collapsed",N),s&&(s.textContent=N?"\u958B\u304F":"\u7573\u3080",s.title=N?"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u3092\u958B\u304F":"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u3092\u6298\u308A\u305F\u305F\u3080",s.setAttribute("aria-expanded",String(!N)))}function qs(){try{N=localStorage.getItem(Fe)==="1"}catch{}Je(N)}function Ns(){let t=d.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let n=t.findIndex(a=>a.channel===s.channel&&a.index===s.index);n<=0||_(t[n-1])}function Bs(){let t=b||k;if(t)try{t.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?t.pauseVideo?.():t.playVideo?.()}catch{}}function jt(t){P('.sv-bp-control-btn[data-bp-action="toggle-play"]').forEach(e=>{e.innerHTML=t?g("pause"):g("play"),e.title=t?"\u4E00\u6642\u505C\u6B62":"\u518D\u751F",e.setAttribute("aria-label",t?"\u4E00\u6642\u505C\u6B62":"\u518D\u751F"),e.setAttribute("aria-pressed",String(t))})}function Rs(){return'<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>'}function Us(t){return As().some(e=>(e.streams||[]).includes(t))}function Ys(t,e,s){import("./chunk-PUFWCSCY.js").then(n=>{n.showAddToPlaylistModal(t,e,{onChange:a=>{s?.classList.toggle("is-saved",!!a),s?.setAttribute("aria-pressed",String(!!a)),s&&(s.title=a?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58")}})}).catch(()=>{})}function js(t){return t.length?t.map(e=>{let s=Ve(e.stream.url)||mt(e.stream.url);return`<button class="sv-side-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${f(e.stream.channel)}" data-bp-index="${e.stream.index}">
      ${s?`<img class="sv-side-rel-thumb" src="${f(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<span class="sv-side-rel-thumb sv-side-rel-thumb--empty"></span>'}
      <span class="sv-side-rel-body">
        <span class="sv-side-rel-title">${f(e.stream.title||"\u914D\u4FE1")}</span>
        <span class="sv-side-rel-meta">${C(e.stream.date)} / ${e.overlap}\u66F2\u4E00\u81F4</span>
        <span class="sv-side-rel-songs">${e.sharedSongs.map(n=>f(n)).join("\u3001")}</span>
      </span>
    </button>`}).join(""):'<div class="sv-side-empty">\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u914D\u4FE1\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>'}function Os(t){let e=l("#sv-side-related");e&&(e.innerHTML=`
    <div class="sv-side-related-head">
      <span>\u95A2\u9023\u914D\u4FE1</span>
      <span>${t.length?`${t.length}\u4EF6`:""}</span>
    </div>
    <div class="sv-side-related-list">${js(t)}</div>
  `)}function Te(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${f(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=mt(t.url),n=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${f(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${f(n)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${f(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${f(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${C(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function Fs(t){let e=l("#sv-below-player");if(!e)return;let s=d.data?.streams||[],n=s.findIndex(p=>p.channel===t.channel&&p.index===t.index),a=n>=0&&n<s.length-1?s[n+1]:null,i=n>0?s[n-1]:null,r=new Set(t.songs.map(p=>p.title)),u=s.filter((p,m)=>m!==n).map(p=>{let m=p.songs.filter(v=>r.has(v.title));return{stream:p,overlap:m.length,sharedSongs:m.slice(0,3).map(v=>v.title)}}).filter(p=>p.overlap>0).sort((p,m)=>m.overlap-p.overlap).slice(0,8),o=tt(t),c=Us(o);e.innerHTML=`
    <div class="sv-bp-wrap">
      ${ee()}

      <!-- \u64CD\u4F5C + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-control-bar">
          <button class="sv-bp-control-btn" type="button" data-bp-action="prev-stream"
            ${i?"":"disabled"} title="\u524D\u306E\u914D\u4FE1" aria-label="\u524D\u306E\u914D\u4FE1">${g("previous")}</button>
          <button class="sv-bp-control-btn sv-bp-control-btn--play" type="button" data-bp-action="toggle-play"
            title="\u518D\u751F / \u4E00\u6642\u505C\u6B62" aria-label="\u518D\u751F / \u4E00\u6642\u505C\u6B62">${g("play")}</button>
          <button class="sv-bp-control-btn" type="button" data-bp-action="next-stream"
            ${a?"":"disabled"} title="\u6B21\u306E\u914D\u4FE1" aria-label="\u6B21\u306E\u914D\u4FE1">${g("next")}</button>
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${R?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${R?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${U?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${U?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          <button class="sv-bp-control-btn sv-bp-bookmark-btn${c?" is-saved":""}" type="button"
            data-bp-action="bookmark-stream" aria-pressed="${c}" title="${c?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}"
            aria-label="${c?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${Rs()}</button>
        </div>
        <div class="sv-bp-next-hint">
          ${a?`\u6B21\uFF1A${f(a.title||"\u6B21\u306E\u914D\u4FE1")}`:"\u6700\u5F8C\u306E\u914D\u4FE1\u3067\u3059"}
        </div>
        <div class="sv-bp-nav-cards">
          ${Te(i,"newer")}
          ${Te(a,"older")}
        </div>
        <div class="sv-bp-info-compact">
          <span>${C(t.date)}</span>
          <span>\u7B2C${t.index}\u67A0</span>
          <span>${t.songs.length}\u66F2</span>
        </div>
      </div>

    </div>
  `,Os(u),e.onchange=p=>{let m=p.target.closest("#sv-ap-check"),v=p.target.closest("#sv-repeat-check");if(m){R=m.checked;let h=m.closest(".sv-bp-ap-switch");h&&h.classList.toggle("sv-bp-ap-switch--on",R)}if(v){U=v.checked;let h=v.closest(".sv-bp-ap-switch");h&&h.classList.toggle("sv-bp-ap-switch--on",U)}},e.onclick=p=>{if(ze(p))return;let m=p.target.closest("[data-bp-action]");if(!m)return;let v=m.dataset.bpAction;if(v==="open-stream"){let h=m.dataset.bpChannel,w=parseInt(m.dataset.bpIndex,10),y=(d.data?.streams||[]).find($=>$.channel===h&&$.index===w);y&&_(y)}else v==="prev-stream"?Ns():v==="next-stream"?Ge():v==="toggle-play"?Bs():v==="bookmark-stream"&&Ys(o,t.title||"\u914D\u4FE1",m)},se(e);try{let p=(b||k)?.getPlayerState?.()===window.YT?.PlayerState?.PLAYING;jt(p)}catch{}}var pt=null;async function We(){if(pt)return pt;try{pt=(await(await fetch("data/music.json")).json())?.videos||[]}catch{pt=[]}return pt}function Ks(t){let e=String(t||"");return e=e.replace(/【[^】]*】/g," "),e=e.replace(/^\s*MV[⌇|｜♪♬:：\-\s]*/i," "),e=e.split(/[\/／|｜]/)[0],e=e.replace(/歌ってみた|covered?\s*(by.*)?$/gi," "),e.trim()}async function zs(t){let e=l("#sv-below-player");if(!e)return;try{await Ft()}catch{}let s=await We();if(l("#stream-viewer")?._currentStream!==t)return;let n=d.channelData?.combined?.streams||d.data?.streams||[],a=st(Ks(t.title)),i=[];if(a.length>1)for(let v of n){let h=(v.songs||[]).find(w=>{let y=st(w.title);return y===a||y.length>1&&(y.includes(a)||a.includes(y))});h&&i.push({stream:v,songTitle:h.title})}let r=i.slice(0,8),u={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9\u30BD\u30F3",cover:"\u30AB\u30D0\u30FC"},o=s.find(v=>v.url===t.url),c=s.filter(v=>v.url!==t.url).sort((v,h)=>{let w=o&&v.type===o.type?1:0,y=o&&h.type===o.type?1:0;return w!==y?y-w:(h.publishedAt||"").localeCompare(v.publishedAt||"")}).slice(0,12),p=s.findIndex(v=>x(v.url)===x(t.url)),m=p>=0&&p<s.length-1?s[p+1]:null;e.innerHTML=`
    <div class="sv-bp-wrap">
      ${ee()}
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${R?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${R?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${U?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${U?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          ${m?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${f(m.title||"\u6B21\u306E\u52D5\u753B")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u52D5\u753B\uFF09</span>'}
        </div>
      </div>
      ${r.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">${g("mic")} \u3053\u306E\u66F2\u304C\u6B4C\u308F\u308C\u305F\u6B4C\u67A0 <span class="sv-bp-sh-sub">\uFF08\u5168${i.length}\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${r.map(v=>{let h=mt(v.stream.url);return`<button class="sv-bp-rel-card" type="button" data-mv-action="open-stream" data-mv-channel="${f(v.stream.channel)}" data-mv-index="${v.stream.index}">
              ${h?`<img class="sv-bp-rel-thumb" src="${f(h)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${f(v.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${C(v.stream.date)}\u3000\u7B2C${v.stream.index}\u67A0</div>
                <div class="sv-bp-rel-songs">${g("music")} ${f(v.songTitle)}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      ${c.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">${g("video")} \u307B\u304B\u306E\u52D5\u753B <button class="sv-mv-all-btn" type="button" data-mv-action="all-videos">\u3059\u3079\u3066\u898B\u308B \u2192</button></div>
        <div class="sv-mv-grid">
          ${c.map(v=>{let h=mt(v.url);return`<button class="sv-mv-card" type="button" data-mv-action="open-mv" data-mv-url="${f(v.url)}" data-mv-title="${f(v.title)}">
              ${h?`<img class="sv-mv-card-thumb" src="${f(h)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-mv-card-thumb"></div>'}
              <div class="sv-mv-card-body">
                <div class="sv-mv-card-title">${f(v.title)}</div>
                <div class="sv-mv-card-type">${u[v.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB"}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}
    </div>
  `,e.onchange=v=>{let h=v.target.closest("#sv-ap-check"),w=v.target.closest("#sv-repeat-check");if(h){R=h.checked;let y=h.closest(".sv-bp-ap-switch");y&&y.classList.toggle("sv-bp-ap-switch--on",R)}if(w){U=w.checked;let y=w.closest(".sv-bp-ap-switch");y&&y.classList.toggle("sv-bp-ap-switch--on",U)}},e.onclick=v=>{if(ze(v))return;let h=v.target.closest("[data-mv-action]");if(!h)return;let w=h.dataset.mvAction;if(w==="open-stream"){let y=h.dataset.mvChannel,$=parseInt(h.dataset.mvIndex,10),V=(d.channelData?.combined?.streams||d.data?.streams||[]).find(X=>X.channel===y&&X.index===$);V&&_(V)}else w==="open-mv"?_({url:h.dataset.mvUrl,title:h.dataset.mvTitle,isMv:!0}):w==="all-videos"&&D("playlists")},se(e)}function at(t,e,s,n){t.innerHTML=e.map((a,i)=>Ms(a,i,s,n)).join("")}function ne(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Gs(t){let e=t.match(/^(\d{1,2}:\d{2}(?::\d{2})?)[\s　]+(.+?)\s*\/\s*(.+?)[\s　]+(\d{1,2}:\d{2}(?::\d{2})?)$/);return e?{start:e[1].trim(),title:e[2].trim(),artist:e[3].trim(),end:e[4].trim()}:null}function st(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function Qs(t,e,s){let n=st(t),a=st(e),i=-1,r=0;for(let u=0;u<s.length;u++){let o=st(s[u].title),c=st(s[u].artist),p=0;o===n?p+=80:n.length>1&&(o.includes(n)||n.includes(o))&&(p+=40),a&&c===a?p+=20:a&&a.length>1&&(c.includes(a)||a.includes(c))&&(p+=10),p>r&&(r=p,i=u)}return r>=40?i:-1}function Ze(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
    <div class="sv-container">
      <div class="sv-header">
        <button class="sv-close-btn" id="sv-close" type="button" title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09">
          \u2190 <span class="sv-close-label">\u623B\u308B</span><span class="sv-esc-hint">Esc</span>
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
          title="\u5927\u753B\u9762\u3067\u518D\u751F" aria-pressed="false">${g("external")}</button>
        <div class="sv-volume-wrap">
          <button class="vol-btn" id="sv-vol-btn" type="button" aria-label="\u97F3\u91CF">${g("volume")}</button>
          <input class="vol-slider" id="sv-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
        </div>
        <button class="sv-music-btn" id="sv-music-btn" type="button" title="\u73FE\u5728\u4F4D\u7F6E\u304B\u3089\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u8074\u304F">
          <span class="sv-music-icon">${g("music")}</span><span class="sv-music-label">\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u8074\u304F</span>
        </button>
        <button class="sv-share-btn" id="sv-share-btn" type="button" title="\u3053\u306E\u52D5\u753B\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">
          <span class="sv-share-icon">${g("link")}</span><span class="sv-share-label">\u5171\u6709</span>
        </button>
        <a class="sv-yt-link" id="sv-yt-link" href="#" target="_blank" rel="noopener" title="YouTube\u3067\u958B\u304F">
          <span class="sv-yt-icon">${g("external")}</span><span class="sv-yt-label">YouTube\u3067\u958B\u304F</span>
        </a>
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
              <button class="sv-setlist-toggle" id="sv-setlist-toggle" type="button" aria-expanded="true">\u7573\u3080</button>
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
      <div class="sv-panel-hint">${g("time")} \u3067\u73FE\u5728\u6642\u523B\u3092\u30E1\u30E2 \uFF0F \u30D0\u30C3\u30B8\u3092\u30BF\u30C3\u30D7\u3067\u79FB\u52D5</div>
          <div class="sv-setlist" id="sv-setlist"></div>
          <div class="sv-side-related" id="sv-side-related"></div>
        </div>
      </div>
    </div>
  `,t.appendChild(e),l("#sv-close").addEventListener("click",()=>yt()),l("#sv-share-btn").addEventListener("click",Ss),l("#sv-music-btn").addEventListener("click",gs),l("#sv-fullscreen-btn").addEventListener("click",Es),l("#sv-setlist-toggle")?.addEventListener("click",()=>Je(!N)),l("#sv-side-related")?.addEventListener("click",a=>{let i=a.target.closest('[data-bp-action="open-stream"]');if(!i)return;let r=i.dataset.bpChannel,u=parseInt(i.dataset.bpIndex,10),o=(d.data?.streams||[]).find(c=>c.channel===r&&c.index===u);o&&_(o)});let s=l("#sv-vol-slider"),n=l("#sv-vol-btn");if(s){let a=J();s.value=a,s.style.setProperty("--pct",`${a}%`),n&&(n.innerHTML=ft(a)),s.addEventListener("input",i=>{let r=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${r}%`),Yt(r),n&&(n.innerHTML=ft(r)),b)try{b.setVolume(r)}catch{}})}if(n){let a=80;n.addEventListener("click",()=>{if(!s)return;let i=parseInt(s.value),r=i>0?0:a||80;i>0&&(a=i),it(s,n,b,r),Yt(r)})}e.querySelectorAll("[data-bc-tab]").forEach(a=>{a.addEventListener("click",()=>{wt=a.dataset.bcTab,yt()})}),l("#sv-import-toggle").addEventListener("click",()=>{let a=l("#sv-import-area");a&&(a.hidden=!a.hidden,a.hidden||l("#sv-import-input")?.focus())}),l("#sv-import-cancel").addEventListener("click",()=>{let a=l("#sv-import-area");a&&(a.hidden=!0);let i=l("#sv-import-input");i&&(i.value="")}),l("#sv-import-apply").addEventListener("click",()=>{let a=e._currentStream;if(!a)return;let i=l("#sv-import-input");if(!i)return;let u=i.value.split(`
`).map(p=>ne(p)).filter(p=>p!==null);if(!u.length)return;let o=W(a);u.forEach((p,m)=>{m<a.songs.length&&(o[m]=p)}),Ut(a,o),at(l("#sv-setlist"),a.songs,o,K);let c=l("#sv-import-area");c&&(c.hidden=!0),i.value=""}),l("#sv-cts-bulk-btn").addEventListener("click",()=>{let a=e._currentStream;a&&Is(a)}),l("#sv-setlist").addEventListener("click",a=>{let i=a.target.closest("[data-action]");if(!i)return;let r=parseInt(i.dataset.idx,10),u=e._currentStream;if(!u)return;let o=W(u);if(i.dataset.action==="seek"){if(o[r]!=null&&b?.seekTo){b.seekTo(o[r],!0);try{b.playVideo()}catch{}}}else if(i.dataset.action==="set-ts"){let c=b?.getCurrentTime?.();c!=null&&(o[r]=Math.floor(c),Ut(u,o),at(l("#sv-setlist"),u.songs,o,K))}else if(i.dataset.action==="del-ts")delete o[r],Ut(u,o),at(l("#sv-setlist"),u.songs,o,K);else if(i.dataset.action==="cts-seek"){let c=Number(i.dataset.ctsSeconds);if(!isNaN(c)&&b?.seekTo){b.seekTo(c,!0);try{b.playVideo()}catch{}}}else if(i.dataset.action==="cts-propose"){let c=u.songs[r];Ps(u,r,c?.title||`\u66F2 ${r+1}`)}})}function _(t,e=0){if(!t?.url)return;let s=x(t.url);if(!s){Ts(t.url);return}if(De()){window.open(He(t.url,e),"_blank","noopener");return}Ze(),Wt(),lt(),bt||(L=null);let n=l("#stream-viewer");if(j(n)){if(n._currentStream?.url===t.url){if(!qe()&&!window.__restoreMusicExternalPlayer?.()&&Ne(),e>0)try{b?.seekTo(Math.floor(e),!0),b?.playVideo()}catch{}return}It()}let a=window.__takeOverMusicPlayerVideo?.(t.url)||null;a||import("./chunk-OEM5VAYO.js").then($=>($.releaseMusicPlayerVideo||$.pauseMusicPlayer)()).catch(()=>{});let i=l("#yt-player-panel");if(i&&!i.hidden){try{k?.pauseVideo()}catch{}i.hidden=!0,rt()}if(M=null,A){A=!1;let $=l("#stream-viewer");$&&$.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}A=!1,Xt();let r=l("#stream-viewer");r.classList.remove("sv-fullscreen"),r.classList.toggle("sv-mv-mode",!!t.isMv);let u=/縦型|たて配信|タテ|#?shorts|ショート|vertical/i.test(t.title||"")||/\/shorts\//.test(t.url||"");r.classList.toggle("sv-portrait",u),r._currentStream=t,qs();let o=++B,c=r.querySelectorAll("[data-bc-tab]");c[1]&&(t.isMv?(c[1].dataset.bcTab="playlists",c[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(c[1].dataset.bcTab="timeline",c[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let p=l("#sv-bc-title");p&&(p.textContent=t.title||"\u914D\u4FE1");let m=l("#sv-stream-meta");m&&(m.innerHTML=t.isMv?"":`${C(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000${g("mic")} ${t.songs.length}\u66F2`);let v=l("#sv-yt-link");v&&(v.href=t.url);let h=l("#sv-song-count");if(h&&(h.textContent=t.isMv?"":`${t.songs.length}\u66F2`),I={},t.isMv){let $=l("#sv-setlist");$&&($.innerHTML="");let T=l("#sv-below-player");T&&(T.innerHTML="");let V=l("#sv-side-related");V&&(V.innerHTML=""),zs(t)}else{let $=W(t);at(l("#sv-setlist"),t.songs,$,K),Cs(t),Fs(t)}r.hidden=!1,document.body.style.overflow="",H(),window.scrollTo({top:0,behavior:"auto"}),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),b=null;let w=l("#sv-player-wrap");w.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let y=Math.floor(e||a?.currentTime||0);if(a?.player){w.innerHTML="",a.iframe?(a.iframe.style.width="100%",a.iframe.style.height="100%",w.appendChild(a.iframe)):w.innerHTML='<div class="sv-player-loading">\u518D\u751F\u3092\u5F15\u304D\u7D99\u304E\u307E\u3057\u305F</div>',b=a.player;try{b.setVolume?.(J()),y>1&&b.seekTo?.(y,!0),b.playVideo?.()}catch{}it(l("#sv-vol-slider"),l("#sv-vol-btn"),null,J()),jt(!0),Hs(o,r);return}Oe(()=>{if(o!==B||r.hidden)return;w.innerHTML="";let $=document.createElement("div");w.appendChild($);try{b=new window.YT.Player($,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,origin:location.origin,rel:0,modestbranding:1,...y>0?{start:y}:{}},events:{onReady:T=>{let V=J();try{T.target.setVolume(V)}catch{}it(l("#sv-vol-slider"),l("#sv-vol-btn"),null,V);try{T.target.setPlaybackQuality("hd1080")}catch{}try{T.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(y>5)try{T.target.seekTo(y,!0)}catch{}},onStateChange:T=>{if(o===B){if(jt(T.data===window.YT.PlayerState.PLAYING),T.data===window.YT.PlayerState.PLAYING)try{T.target.setPlaybackQuality("hd1080")}catch{}T.data===window.YT.PlayerState.ENDED&&Qe(r)}},onError:()=>{o===B&&(w.innerHTML=`<iframe src="https://www.youtube.com/embed/${f(s)}?autoplay=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}${y>0?`&start=${y}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{w.innerHTML=`<iframe src="https://www.youtube.com/embed/${f(s)}?autoplay=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}${y>0?`&start=${y}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function yt(){let t=l("#stream-viewer");if(!t||t.hidden||j(t))return;if(A){A=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let s=l("#sv-close");s&&(s.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let n=l("#sv-fullscreen-btn");n&&n.setAttribute("aria-pressed","false");return}if(ys())return;++B,t.hidden=!0,t._currentStream=null,lt(),b=null;let e=l("#sv-player-wrap");e&&(e.innerHTML=""),document.body.style.overflow="",At(),H()}window.__openStreamViewer=_;window.__closeStreamMiniPlayer=()=>{let t=l("#stream-viewer");if(j(t))return It(),!0;let e=l("#yt-player-panel");return e&&!e.hidden?(e.hidden=!0,rt(),M=null,!0):!1};function Ot(t){let e=_t(t),s=l("#song-modal"),n=l("#song-modal-body"),a=l("#song-modal-title");if(!e||!s||!n||!a)return;oe(e),a.textContent=e.title;let i=(e.streamRefs||[]).slice(0,8).map(o=>({...o,thumbnail:mt(o.url),thumbnailFallback:hs(o.url),thumbnailTiny:Ve(o.url),detailKey:tt(o)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),u=Dt(e.key);n.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${f(e.key)}">${f(e.artist)}</button>
        <div class="song-detail-tags">${r.map(o=>`<span class="tag-badge">${f(o)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${C(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${u?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${f(e.key)}">${g("heart")} ${u?"\u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${f(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${i.length?i.map(o=>`
        <div class="song-detail-stream">
          ${o.thumbnail&&o.url?`<a class="song-detail-thumb-link" href="${f(o.url)}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F"><img class="song-detail-thumb" src="${f(o.thumbnail)}" data-fallback="${f(o.thumbnailFallback)}" data-tiny="${f(o.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"></a>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${f(e.key)}" data-streamkey="${f(o.detailKey)}">
            <span>${C(o.date)}</span>
            <strong>${f(o.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,s.hidden=!1,l("#song-modal-close")?.focus()}function Js(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s();let a=n.target.closest("[data-detail-action]");if(a){if(n.stopPropagation(),a.dataset.detailAction==="close"&&s(),a.dataset.detailAction==="favorite"){let i=a.dataset.songkey;ie(i);let r=Dt(i);a.innerHTML=`${g("heart")} ${r?"\u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}`,a.classList.toggle("primary",r),a.classList.toggle("ghost",!r)}if(a.dataset.detailAction==="timeline"){let i=_t(a.dataset.songkey);s(),i&&ps(i)}if(a.dataset.detailAction==="stream"){let i=_t(a.dataset.songkey),r=i?.streamRefs?.find(u=>tt(u)===a.dataset.streamkey);s(),i&&r&&ms(i,r)}if(a.dataset.detailAction==="artist"){let i=_t(a.dataset.songkey);s(),i&&fs(i)}}}),t.addEventListener("error",n=>{let a=n.target.closest?.(".song-detail-thumb");if(!a)return;let i=a.dataset.fallback||a.dataset.tiny||"";if(i&&a.src!==i){a.src=i,a.dataset.fallback===i?delete a.dataset.fallback:delete a.dataset.tiny;return}a.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&s()})}var Ee=!1;function Ws(){if(!d.data)return;let{stats:t,streams:e=[]}=d.data,s=e[0]?.date||null,n=Ht(s),a=t.dataGeneratedDate||d.channelData?.dataGeneratedDate||null,i=Ht(a),r=t.channelLabel||t.channelId||"",u=r?`<span class="badge accent" style="margin-right:8px;">${f(r)}</span>`:"";l("#updated-info").innerHTML=u+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${C(a)||"\u2014"}</strong>`+(i!=null?` <span class="badge">${i}\u65E5\u524D</span>`:"");let o=l("#stats-grid");if(!Ee)o.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${z(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${z(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${z(t.streams)}<span class="stat-unit">\u56DE</span></div>
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
        <div class="stat-value">${Me(d.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,Ee=!0;else{let c=o.querySelectorAll(".stat-value");c.length>=6&&(c[0].textContent=z(t.total),c[0].innerHTML+='<span class="stat-unit">\u56DE</span>',c[1].textContent=z(t.repertoire),c[1].innerHTML+='<span class="stat-unit">\u66F2</span>',c[2].textContent=z(t.streams),c[2].innerHTML+='<span class="stat-unit">\u56DE</span>',c[3].textContent=t.avgPerStream,c[3].innerHTML+='<span class="stat-unit">\u66F2</span>',c[4].textContent=n??"\u2014",c[4].innerHTML+='<span class="stat-unit">\u65E5</span>',c[5].textContent=Me(d.data),c[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function Me(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,s=t.streams[0].date;return Math.floor((s-e)/864e5)+1}function Zs(){l("#loading").hidden=!1,l("#error").hidden=!0}function Xs(){l("#loading").hidden=!0}function tn(t){let e=l("#loading"),s=l("#error"),n=l("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),n&&(n.textContent=t&&t.message?t.message:String(t))}function en(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let s=document.getElementById("hero-ch-bg");s&&(s.dataset.mode=t||"all")}var sn={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.58 7.17a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.4A2.51 2.51 0 0 0 2.42 7.17 26.9 26.9 0 0 0 2 12a26.9 26.9 0 0 0 .42 4.83 2.51 2.51 0 0 0 1.77 1.77c1.56.4 7.81.4 7.81.4s6.25 0 7.81-.4a2.51 2.51 0 0 0 1.77-1.77A26.9 26.9 0 0 0 22 12a26.9 26.9 0 0 0-.42-4.83ZM10 15.43V8.57L16 12l-6 3.43Z"/></svg>',label:"YouTube",url:"https://www.youtube.com/@YumekawaKanau"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',label:"official store",url:"https://react.booth.pm"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>',label:"official site",url:"https://v-react.com"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.58 7.17a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.4A2.51 2.51 0 0 0 2.42 7.17 26.9 26.9 0 0 0 2 12a26.9 26.9 0 0 0 .42 4.83 2.51 2.51 0 0 0 1.77 1.77c1.56.4 7.81.4 7.81.4s6.25 0 7.81-.4a2.51 2.51 0 0 0 1.77-1.77A26.9 26.9 0 0 0 22 12a26.9 26.9 0 0 0-.42-4.83ZM10 15.43V8.57L16 12l-6 3.43Z"/></svg>',label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function St(t){let e=sn[t];if(!e)return"";let s=e.bannerUrl?`<img class="ch-card-banner-img" src="${f(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
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
    </div>`}function nn(t){let e=l("#ch-modal"),s=l("#ch-modal-body");if(!e||!s)return;let n="";t==="new"?n=St("new"):t==="old"?n=St("old"):n=St("new")+St("old"),s.innerHTML=n,e.hidden=!1,l("#ch-modal-close")?.focus()}function an(){let t=l("#ch-modal"),e=l("#ch-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s()}),document.querySelectorAll("[data-ch-modal]").forEach(n=>{n.addEventListener("click",()=>nn(n.dataset.chModal))})}function ln(){let t=l("#help-modal"),e=l("#help-btn"),s=l("#help-close");if(!t||!e||!s)return;let n=()=>{t.hidden=!1,s.focus()},a=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",n),s.addEventListener("click",a),t.addEventListener("click",i=>{i.target===t&&a()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&a()})}function rn(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function ae(){Zs();try{let t=await de();d.channelData=t,!nt&&!t.fullLoaded&&Ie();let e=O(),s=!!e.v;d.songsQuery=e.q,d.activeTab=s?"player":Et(e.tab)?e.tab:"dashboard",Ae(d.activeTab);let n=e.channel||d.channel||ot;if(F(n)||(n=ot),!F(n)){let a=Object.keys(t.channels)[0];a&&(n=a)}if(!F(n))throw new Error("No channel data could be loaded");vs(),Pt(n,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0,render:!s}),s&&(await xs()||D(e.tab,{updateUrl:!1,initial:!0})),Xs(),_s()}catch(t){console.error("[init] failed:",t),tn(t)}}function on(){if(!d.channelData)return;let t=O();d.songsQuery=t.q,t.channel!==d.channel&&F(t.channel)&&Pt(t.channel,{resetSearch:!1,updateUrl:!1}),D(t.tab,{updateUrl:!1})}P(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=l("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!A&&!j(s)){wt=e,yt();return}D(e)})});P(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||Pt(t.dataset.channel))})});window.addEventListener("popstate",on);P("[data-audience]").forEach(t=>{t.addEventListener("click",()=>cs(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest(".timeline-setlist .setlist-title[data-songkey]");if(e){t.preventDefault(),t.stopPropagation(),Ot(e.dataset.songkey);return}let s=t.target.closest("[data-artist-search]");if(s){t.preventDefault(),t.stopPropagation(),zt(s.dataset.artistSearch||s.textContent||"");return}let n=t.target.closest("[data-playlist-add]");if(n){t.preventDefault(),t.stopPropagation();let r=n.dataset.playlistAdd,u=n.dataset.streamTitle||"",o=c=>{n.classList.toggle("is-saved",c),n.classList.contains("timeline-save-btn")&&(n.innerHTML=g("bookmark")),n.title=c?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"};import("./chunk-PUFWCSCY.js").then(c=>c.showAddToPlaylistModal(r,u,{onChange:o}));return}let a=t.target.closest("[data-stream-play]");if(a){t.preventDefault(),t.stopPropagation();let r=a.dataset.streamPlay,u=(d.data?.streams||[]).find(o=>tt(o)===r);u?.url&&_(u);return}if(re(t.target))return;let i=t.target.closest("[data-songkey]");i&&Ot(i.dataset.songkey)});l("#retry-btn").addEventListener("click",ae);l("#reload-btn").addEventListener("click",ae);ln();an();Jt();Ze();Js();ds();us();rn();import("./chunk-OEM5VAYO.js").then(t=>{t.setApiLoader(Wt),t.initMusicPlayer()}).catch(()=>{});ge(t=>{t.type==="song"?Ot(t.song.key):t.type==="artist"?zt(t.artist):t.type==="stream"?_(t.stream):t.type==="music-video"&&_({...t.video,isMv:!0})});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(!s&&!t.metaKey&&!t.ctrlKey&&!t.altKey){let a=l("#stream-viewer");if(a&&!a.hidden&&!a.classList.contains("sv-minified")&&!a.classList.contains("sv-music-minified")&&l("#sv-share-modal")?.hidden!==!1&&b){if(t.key===" "){t.preventDefault();try{b.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?b.pauseVideo():b.playVideo()}catch{}return}if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();try{let r=b.getCurrentTime?.()??0,u=Math.max(0,r+(t.key==="ArrowRight"?10:-10));b.seekTo(u,!0)}catch{}return}}}if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),we();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),pe();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let a=l("#help-modal");a&&a.hidden&&(a.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let a=l("#stream-viewer"),i=!!l("#panel-player.active");if(a&&!a.hidden&&(A||i)){t.preventDefault(),yt();return}if(Bt()){t.preventDefault(),ut();return}let r=l("#song-modal");if(r&&!r.hidden)return;let u=l("#ch-modal");if(u&&!u.hidden){u.hidden=!0;return}let o=l("#help-modal");if(o&&!o.hidden){o.hidden=!0,l("#help-btn")?.focus();return}let c=l("#songs-search");c&&document.activeElement===c&&c.value&&(t.preventDefault(),c.value="",c.dispatchEvent(new Event("input",{bubbles:!0})))}});fe(()=>{d.data&&(Vt(),(d.activeTab==="dashboard"||d.activeTab==="analytics")&&Z())});function cn(){ae()}cn();export{ws as getWatchHistory};
