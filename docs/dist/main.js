import{a as ve,b as pe,e as Vt,f as me}from"./chunk-SIADDXVK.js";import{b as re,c as oe,d as ce,i as de,j as ue,k as j,l as z}from"./chunk-FIQJD23O.js";import{a as rt}from"./chunk-MKJIXTK4.js";import{a as ae,b as At,c as ie,e as d}from"./chunk-JT7WCFD3.js";import{E as Dt,F as M,H as X,M as K,N as le,a as l,b as C,c as f}from"./chunk-T4BEBXYH.js";var T=-1,H=[],Ht=null,G=null,wt=null;function ye(t){Ht=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",n=>{n.target===e&&dt()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>qt(s.value)),s.addEventListener("keydown",Ze),document.getElementById("omni-listbox").addEventListener("click",n=>{let a=n.target.closest("[data-omni-idx]");a&&we(Number(a.dataset.omniIdx))})}function ge(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,T=-1,H=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),qt(""),ts().then(()=>{if(!Nt())return;let s=document.getElementById("omni-input")?.value||"";s.trim()&&qt(s)})}function dt(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),T=-1}function Nt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Ze(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),T=Math.min(T+1,e.length-1),fe(e)):t.key==="ArrowUp"?(t.preventDefault(),T=Math.max(T-1,-1),fe(e)):t.key==="Enter"?(t.preventDefault(),T>=0&&H[T]&&we(T)):t.key==="Escape"&&(t.preventDefault(),dt())}function fe(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===T),e.setAttribute("aria-selected",String(s===T))}),T>=0&&t[T]?.scrollIntoView({block:"nearest"})}function we(t){let e=H[t];!e||!Ht||(dt(),Ht(e))}function qt(t){let e=document.getElementById("omni-listbox");if(!e)return;T=-1,H=[];let s=d.data?.songs||[],n=d.data?.streams||[],a=G||[],i=tt(t),r="",u=0;if(!d.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!i){let m=s.slice(0,8);if(m.length){r+=ot("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let v of m)H.push({type:"song",song:v}),r+=he(v,u++,"")}e.innerHTML=r||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let o=[];try{o=(ue(t,s).results||[]).slice(0,8)}catch{}if(o.length||(o=s.filter(m=>be(t,`${m.title} ${m.artist}`)).slice(0,8)),o.length){r+=ot("\u{1F3B5} \u66F2");for(let m of o)H.push({type:"song",song:m}),r+=he(m,u++,i)}if(a.length){let m=a.filter(v=>es(v,t)).slice(0,6);if(m.length){r+=ot("\u{1F3AC} \u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2");for(let v of m)H.push({type:"music-video",video:v}),r+=Xe(v,u++,t)}}let c=new Set,p=[];for(let m of s)if(m.artist&&be(t,m.artist)&&!c.has(m.artist)&&(c.add(m.artist),p.push(m.artist),p.length>=4))break;if(p.length){r+=ot("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let m of p){let v=s.filter(h=>h.artist===m).length;H.push({type:"artist",artist:m}),r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${u++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${ct(f(m),i)}</span>
          <span class="omni-item-meta">${v}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(n.length){let m=n.filter(v=>{let h=tt(`${v.title||""} ${(v.songs||[]).map(y=>`${y.title||""} ${y.artist||""}`).join(" ")}`),g=kt(t);return g.length>0&&g.every(y=>h.includes(y))}).slice(0,5);if(m.length){r+=ot("\u{1F4C5} \u914D\u4FE1\u67A0");for(let v of m){H.push({type:"stream",stream:v});let h=v.channel==="new"?"\u65B0ch":v.channel==="old"?"\u65E7ch":"";r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${u++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${ct(f(v.title||"\u914D\u4FE1"),i)}</span>
            <span class="omni-item-meta">${M(v.date)}${h?" \xB7 "+h:""} \xB7 ${v.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}r||(r=`<div class="omni-empty">\u300C${f(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=r}function ot(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function he(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${ct(f(t.title),s)}</span>
      <span class="omni-item-meta">${ct(f(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function Xe(t,e,s){let n=ke(t),a=t.originalArtist||t.character||n;return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3AC}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${ct(f(t.title||"\u52D5\u753B"),s)}</span>
      <span class="omni-item-meta">${f(n)}${a?" \xB7 "+f(a):""} \xB7 \u52D5\u753B\u3067\u898B\u308B</span>
    </div>
  </div>`}function ts(){return G!==null?Promise.resolve(G):wt||(wt=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>(G=Array.isArray(t?.videos)?t.videos:[],G)).catch(()=>(G=[],G)),wt)}function es(t,e){let s=kt(e);if(!s.length)return!1;let n=ss(t);return s.every(a=>n.includes(a))}function ss(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(n=>n.trim()).filter(Boolean);return tt([e,...s,t.originalArtist,t.character,t.type,ke(t)].filter(Boolean).join(" "))}function ke(t){switch(t?.type){case"cover":return"\u6B4C\u307F\u305F";case"office":return"Re:AcT\u30AA\u30EA\u66F2";case"character":return"\u30AD\u30E3\u30E9\u30BD\u30F3";default:return"\u30AA\u30EA\u66F2"}}function kt(t){return tt(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function be(t,e){let s=kt(t);if(!s.length)return!1;let n=tt(e);return s.every(a=>n.includes(a))}function tt(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/\s+/g," ").trim()}function ct(t,e){let n=kt(e).find(r=>r&&t.toLowerCase().includes(r))||tt(e);if(!n)return t;let i=t.toLowerCase().indexOf(n);return i<0?t:t.slice(0,i)+'<mark class="hl">'+t.slice(i,i+n.length)+"</mark>"+t.slice(i+n.length)}pe();ie();var Me={dashboard:()=>import("./chunk-XFQL67JR.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-BC2HF4LV.js").then(t=>t.renderRanking),songs:()=>import("./chunk-3V7AABB2.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-OL6KKVHC.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-5AHBOYNE.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-2BRYFZJR.js").then(t=>t.renderPlaylists)},$t=new Map,$e=0,st=null;function Tt(t){return Object.prototype.hasOwnProperty.call(Me,t)}async function ns(t){$t.has(t)||$t.set(t,Me[t]());try{return await $t.get(t)}catch(e){throw $t.delete(t),e}}function Ce(t){return["dashboard","timeline","analytics"].includes(t)}function as(t,e={}){let s=l(`#panel-${t}`);if(!s)return;let n={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${f(n[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function is(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function ls(t){if(d.channelData?.fullLoaded)return;d.channelData=t;let e=O(d.channel)?d.channel:rt,s=O(e);s&&(d.data=s),!Ce(d.activeTab)&&d.data&&W(d.activeTab,{autoLoad:!1})}function rs(t){d.channelData=t,d.channelData.fullLoaded=!0;let e=O(d.channel)?d.channel:rt;Ct(e,{resetSearch:!1,updateUrl:!1,render:!1}),W(d.activeTab,{autoLoad:!1})}function Pe(){return st=oe({meta:d.channelData,onSongsReady:ls}).then(rs).finally(()=>{st=null}),st}async function Ot(){d.channelData?.fullLoaded||(st||Pe(),await st)}async function W(t=d.activeTab,e={}){if(t!=="playlists"&&(!d.data||!Tt(t))||!Tt(t))return;let s=d.channelData?.partialLoaded||d.channelData?.fullLoaded,n=d.channelData?.fullLoaded;if(t==="playlists"?!1:Ce(t)?!n:!s)if(e.autoLoad){is(t);try{await Ot()}catch(r){console.error("[data] full load failed",r);let u=l(`#panel-${t}`);u&&(u.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${f(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${f(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,u.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{W(t,{autoLoad:!0})}));return}}else{as(t,{initial:e.initial});return}let i=++$e;try{let r=await ns(t);if(i!==$e||t!==d.activeTab||!d.data)return;t==="songs"&&de(d.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let u=l(`#panel-${t}`);u&&(u.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${f(r?.message||String(r))}</div>
        </div>
      `)}}function A(t,e={}){Tt(t)||(t="dashboard");let s=l("#stream-viewer");if(t!=="player"&&s&&!s.hidden&&!I&&!Y(s)){gt=t,Et=e,bt();return}d.activeTab=t,Ie(t),e.updateUrl!==!1&&z({tab:t}),W(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Ie(t){C(".tab-btn").forEach(e=>{let s=e.dataset.tab===t;e.classList.toggle("active",s),e.setAttribute("aria-selected",s?"true":"false")}),C(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`)),document.body.dataset.activeTab=t}function O(t){return d.channelData?t==="all"?d.channelData.combined:d.channelData.channels[t]||null:null}function Ct(t,e={}){let s=O(t);s&&(d.channel=t,tn(t),d.data=s,d.timelineFilter=null,d.timelineFocus=null,d.timelineLimit=12,d.songsLimit=100,e.resetSearch!==!1&&(d.songsQuery="",d.songsGenre="all"),Vt(),C("#channel-switch [data-channel]").forEach(n=>n.classList.toggle("active",n.dataset.channel===t)),Ft(),e.updateUrl!==!1&&z({tab:d.activeTab,channel:t,q:d.songsQuery}),Js(),e.render!==!1&&W(d.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function os(t,e={}){d.audience=t==="singer"?"singer":"listener",d.singerMode=d.audience==="singer",d.singerMode||(d.singerPreset="all"),C(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===d.audience)}),document.body.dataset.audience=d.audience,Ft(),d.audience==="singer"?(d.songsLimit=100,A("songs",{autoLoad:e.autoLoad!==!1})):d.data&&W(d.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Ft(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",s=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${s}`}function cs(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),s=l("#topbar-actions");if(!t||!e||!s)return;let n=i=>{e.checked=i,s.classList.toggle("is-open",i),t.setAttribute("aria-expanded",String(i))},a=()=>{n(!1),t.focus()};t.addEventListener("click",i=>{i.stopPropagation(),requestAnimationFrame(()=>n(e.checked))}),t.addEventListener("keydown",i=>{i.key!=="Enter"&&i.key!==" "||(i.preventDefault(),n(!e.checked))}),e.addEventListener("change",()=>{n(e.checked)}),document.addEventListener("click",i=>{s.classList.contains("is-open")&&(i.target.closest("#topbar-actions")||i.target.closest("#mobile-menu-toggle")||i.target.closest("#mobile-menu-state")||a())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&a()}),s.addEventListener("click",i=>{i.stopPropagation()}),Ft()}function ds(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,n=420,a=()=>{!e||e.src||(e.src=e.dataset.src||"")},i=()=>{s=!1;let u=window.scrollY>n;u&&a(),t.hidden=!u,t.classList.toggle("is-visible",u),t.setAttribute("aria-hidden",String(!u)),t.tabIndex=u?0:-1},r=()=>{s||(s=!0,requestAnimationFrame(i))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),i()}function us(){if(d.channelData)for(let t of C("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!d.channelData.combined:!!(d.channelData.channels&&d.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function vs({key:t,title:e,artist:s}){d.timelineFilter&&d.timelineFilter.key===t&&d.activeTab==="timeline"?d.timelineFilter=null:d.timelineFilter={key:t,title:e,artist:s},d.timelineFocus=null,d.timelineLimit=12,A("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function ps(t,e){d.timelineFilter={key:t.key,title:t.title,artist:t.artist},d.timelineFocus=X(e),d.timelineLimit=9999,A("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function ms(t){Kt(t.artist||"")}function Kt(t){let e=String(t||"").replace(/"/g,"");d.songsQuery=e?`artist:"${e}"`:"",d.songsLimit=100,z({tab:"songs",q:d.songsQuery}),A("songs",{updateUrl:!1})}function St(t){return(d.data?.songs||[]).find(e=>e.key===t)||null}function x(t){let e=String(t||""),s=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let n of s){let a=e.match(n);if(a)return a[1]}return""}function Ae(){return window.matchMedia("(max-width: 700px)").matches}function De(t,e=0){let s=String(t||""),n=x(s);if(!n)return s;let a=Math.max(0,Math.floor(Number(e)||0));return`https://www.youtube.com/watch?v=${n}${a>0?`&t=${a}s`:""}`}function pt(t){let e=x(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function fs(t){let e=x(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function Ve(t){let e=x(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function yt(){xt&&(clearInterval(xt),xt=null)}function zt(){yt(),xt=setInterval(()=>{if(L(),!!w)try{let t=w.getDuration?.()||0,e=w.getCurrentTime?.()||0;E&&ws(E,e);let s=t>0?Math.min(e/t*100,100):0,n=l("#yt-mini-progress-fill");n&&(n.style.width=`${s}%`);let i=w.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,r=l("#yt-mini-play");r&&r.setAttribute("data-playing",i?"1":"0")}catch{}},400)}function lt(){if(yt(),w){try{w.destroy()}catch{}w=null}let t=l("#yt-player-container");t&&(t.innerHTML="")}function hs(){if(w?.getCurrentTime)try{return w.getCurrentTime()}catch{}return Math.max(0,ft+(Date.now()-Wt)/1e3)}function Y(t=l("#stream-viewer")){return!!t&&(t.classList.contains("sv-minified")||t.classList.contains("sv-music-minified"))}function L(){let t=l("#stream-viewer");if(!Y(t))return;let e=l("#sv-player-wrap"),s=t.classList.contains("sv-music-minified")?document.querySelector("#music-bar .mbar-video-wrap"):document.querySelector("#yt-player-panel .yt-mini-video-wrap");if(!e||!s)return;let n=s.getBoundingClientRect();e.style.left=`${n.left}px`,e.style.top=`${n.top}px`,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`}function bs(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||!e||!b)return!1;Qt();let s=l("#yt-player-panel");if(!s)return!1;E=e;try{ft=Math.floor(b.getCurrentTime?.()??0)}catch{ft=0}Wt=Date.now();let n=l("#yt-mini-title");n&&(n.textContent=e.title||"");let a=l("#yt-mini-hint");a&&(a.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),s.classList.add("has-stream"),s.hidden=!1,w=b,b=null,t.classList.add("sv-minified"),document.body.classList.add("has-sv-mini"),document.body.style.overflow="",It(),D(),L(),requestAnimationFrame(L),setTimeout(L,120),setTimeout(L,400),window.addEventListener("resize",L),zt();try{let i=w.getPlayerState?.();l("#yt-mini-play")?.setAttribute("data-playing",i===window.YT?.PlayerState?.PLAYING?"1":"0")}catch{}return at(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,Q()),!0}function He(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",L),yt(),t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini");let e=l("#sv-player-wrap");e&&(e.style.cssText=""),b=w,w=null;let s=l("#yt-player-panel");return s&&(s.hidden=!0),Zt(),D(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function qe(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",L),yt(),t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music");let e=l("#sv-player-wrap");return e&&(e.style.cssText=""),b=w,w=null,Zt(),D(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function Ne(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",L),yt(),it(),++N,t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");return e&&(e.style.cssText="",e.innerHTML=""),lt(),E=null,D(),!0}function ys(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||t.hidden||!e?.url)return;let s=Gt(j().t),n={...e,title:e.title||(e.isMv?"\u52D5\u753B":"\u6B4C\u67A0"),type:e.isMv?e.type||"original":"stream",sub:e.isMv?e.originalArtist||e.character||e.sub||"":`${M(e.date)} \u7B2C${e.index}\u67A0`,_stream:e};if(!b){import("./chunk-4A2ZIOPU.js").then(i=>i.playMusicBarVideo?.(n,s)).catch(()=>{});return}try{ft=Math.floor(b.getCurrentTime?.()??s)}catch{ft=s}Wt=Date.now(),w=b,b=null,E=null,I=!1,t.classList.remove("sv-fullscreen","sv-minified"),t.classList.add("sv-music-minified"),document.body.classList.remove("has-sv-fullscreen","has-sv-mini"),document.body.classList.add("has-sv-music"),document.body.style.overflow="",t.hidden=!1;let a=l("#yt-player-panel");a&&(a.hidden=!0),It(),D(),L(),requestAnimationFrame(L),setTimeout(L,120),setTimeout(L,400),window.addEventListener("resize",L),zt(),import("./chunk-4A2ZIOPU.js").then(i=>{i.adoptExternalPlayer?.(n,w,{restore:qe,close:Ne}),L(),requestAnimationFrame(L),setTimeout(L,120),setTimeout(L,400)}).catch(()=>{})}function Pt(){let t=l("#stream-viewer");if(t?.classList.contains("sv-music-minified"))return Ne();if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",L),it(),++N,t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");e&&(e.style.cssText="",e.innerHTML=""),lt();let s=l("#yt-player-panel");return s&&(s.hidden=!0),E=null,D(),!0}var Be="kanau-watch-history-v1",Le=0;function gs(){try{return JSON.parse(localStorage.getItem(Be)||"[]")}catch{return[]}}function Re(t,e){if(!(!t?.url||e<10))try{let s=gs().filter(n=>n.url!==t.url);s.unshift({url:t.url,title:t.title||"",t:Math.max(0,Math.floor(e)),isMv:!!t.isMv,channel:t.channel??null,index:t.index??null,date:t.date??null,updatedAt:Date.now()}),localStorage.setItem(Be,JSON.stringify(s.slice(0,10)))}catch{}}function ws(t,e){let s=Date.now();s-Le<5e3||(Le=s,Re(t,e))}var ut=null;function Gt(t=0){let e=[b,w];for(let s of e)try{let n=s?.getCurrentTime?.();if(Number.isFinite(n))return Math.max(0,Math.floor(n))}catch{}return Math.max(0,Math.floor(Number(t)||0))}function ks(t,e=0,s={}){if(!t)return"";let n=j(),a=new URLSearchParams,i=n.channel||d.channel;return i&&i!=="new"&&a.set("ch",i),a.set("v",t),s.includeTime!==!1&&e>5&&a.set("t",String(Math.floor(e))),`${location.origin}${location.pathname}?${a}`}function D(){let t=l("#stream-viewer"),s=t&&!t.hidden&&!Y(t)&&t._currentStream?.url?x(t._currentStream.url):"",n=s?Gt(j().t):0;z({v:s||"",t:n>5?n:0},{replace:!0}),s&&Re(t._currentStream,n),s&&!ut&&(ut=setInterval(D,5e3)),!s&&ut&&(clearInterval(ut),ut=null)}function $s(){if(l("#sv-share-modal"))return;let t=document.createElement("div");t.id="sv-share-modal",t.hidden=!0,t.innerHTML=`
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
    </div>`,document.body.appendChild(t);let e=()=>{t.hidden=!0};t.querySelector(".sv-share-backdrop").addEventListener("click",e),l("#sv-share-close").addEventListener("click",e),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&(a.preventDefault(),a.stopPropagation(),e())},{capture:!0});let s=()=>{let a=t._shareState;if(!a)return;let i=l("#sv-share-ts-check")?.checked&&a.t>0,r=ks(a.id,a.t,{includeTime:i}),u=l("#sv-share-url");u&&(u.value=r);let o=a.title?`${a.title}`:"\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9",c=l("#sv-share-x");c&&(c.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(o)}&url=${encodeURIComponent(r)}`);let p=l("#sv-share-line");return p&&(p.href=`https://line.me/R/share?text=${encodeURIComponent(`${o}
${r}`)}`),r};l("#sv-share-ts-check").addEventListener("change",s),t._rebuild=s,l("#sv-share-url").addEventListener("focus",a=>a.target.select()),l("#sv-share-copy").addEventListener("click",async()=>{let a=l("#sv-share-url")?.value;if(!a)return;let i=!1;try{await navigator.clipboard.writeText(a),i=!0}catch{try{l("#sv-share-url").select(),i=document.execCommand("copy")}catch{}}let r=l("#sv-share-copy");r&&(r.textContent=i?"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",r.classList.add("copied"),setTimeout(()=>{r.textContent="\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",r.classList.remove("copied")},1600))});let n=l("#sv-share-native");navigator.share&&n&&(n.hidden=!1,n.addEventListener("click",async()=>{let a=t._shareState,i=l("#sv-share-url")?.value;if(i)try{await navigator.share({title:a?.title||"",url:i})}catch{}}))}function Ls(){let e=l("#stream-viewer")?._currentStream;if(!e?.url)return;let s=x(e.url);if(!s)return;$s();let n=l("#sv-share-modal"),a=Gt(j().t);n._shareState={id:s,t:a,title:e.title||""};let i=l("#sv-share-video-title");i&&(i.textContent=e.title||"(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)");let r=l("#sv-share-ts-row"),u=l("#sv-share-ts-check"),o=l("#sv-share-ts-label");r&&(r.hidden=a<=5),u&&(u.checked=a>5),o&&(o.textContent=U(a)),n._rebuild?.(),n.hidden=!1}var Se=new URLSearchParams(location.search).get("pl");async function Ss(){if(!Se)return;let t=null;try{let n=Se.replace(/-/g,"+").replace(/_/g,"/"),a=Uint8Array.from(atob(n),i=>i.charCodeAt(0));t=JSON.parse(new TextDecoder().decode(a))}catch{return}if(!t||typeof t.n!="string"||!Array.isArray(t.s))return;let e=t.n.slice(0,60)||"\u5171\u6709\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8",s=t.s.filter(n=>typeof n=="string"&&n.length<100).slice(0,300);if(s.length){if(!confirm(`\u5171\u6709\u3055\u308C\u305F\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u300C${e}\u300D\uFF08${s.length}\u4EF6\uFF09\u3092\u53D6\u308A\u8FBC\u307F\u307E\u3059\u304B\uFF1F`)){z({},{replace:!0});return}try{let n=await import("./chunk-2BRYFZJR.js"),a=n.createPlaylist(e);for(let i of s)n.addStreamToPlaylist(a.id,i);z({tab:"playlists"},{replace:!0}),A("playlists",{updateUrl:!1})}catch{}}}async function xs(){let t=j();if(!t.v)return!1;let e=t.v,s=t.t;try{await Ot()}catch{}let n=[];d.channelData?.combined&&n.push(d.channelData.combined),Object.values(d.channelData?.channels||{}).forEach(a=>{a&&n.push(a)});for(let a of n){let i=(a.streams||[]).find(r=>x(r.url)===e);if(i)return S(i,s),!0}try{let r=((await(await fetch("data/music.json")).json())?.videos||[]).find(u=>x(u.url)===e);if(r)return S({url:r.url,title:r.title,isMv:!0},s),!0}catch{}return S({url:`https://www.youtube.com/watch?v=${e}`,title:"",isMv:!0},s),!0}function _s(t,e=0,s=""){let n=x(t);if(!n)return;if(Ae()){window.open(De(t,e),"_blank","noopener");return}{let o=l("#stream-viewer");if(o&&!o.hidden&&!I)if(Y(o))Pt();else{++N,o.hidden=!0,o._currentStream=null,b=null;let c=l("#sv-player-wrap");c&&(c.innerHTML=""),document.body.style.overflow="",E=null,Et={},It(),D()}}Jt(),Qt();let a=l("#yt-player-container"),i=l("#yt-player-panel");if(!a||!i)return;lt();let r=l("#yt-mini-title");r&&(r.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let u=l("#yt-mini-hint");u&&(u.textContent=E?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),i.classList.toggle("has-stream",!!E),i.hidden=!1,je(()=>{let o=document.createElement("div");a.appendChild(o);try{w=new window.YT.Player(o,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:c=>{let p=Q();try{c.target.setVolume(p)}catch{}if(at(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,p),e>5)try{c.target.seekTo(e,!0)}catch{}zt()},onStateChange:c=>{let p=c.data===window.YT.PlayerState.PLAYING,m=l("#yt-mini-play");m&&m.setAttribute("data-playing",p?"1":"0")}}})}catch{let p=e>0?`&start=${Math.floor(e)}`:"";a.innerHTML=`<iframe src="https://www.youtube.com/embed/${n}?autoplay=1&playsinline=1${p}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function Qt(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,!Pt()&&(lt(),E=null)}),l("#yt-mini-play").addEventListener("click",()=>{if(w)try{w.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?w.pauseVideo():w.playVideo()}catch{}}),l("#yt-mini-restore").addEventListener("click",()=>{He()||E&&S(E,hs())}),l("#yt-mini-progress-bar").addEventListener("click",n=>{if(!w)return;let i=n.currentTarget.getBoundingClientRect(),r=Math.max(0,Math.min(1,(n.clientX-i.left)/i.width));try{let u=w.getDuration?.()||0;u>0&&w.seekTo(r*u,!0)}catch{}});let e=l("#yt-mini-vol-slider"),s=l("#yt-mini-vol-btn");if(e){let n=Q();e.value=n,e.style.setProperty("--pct",`${n}%`),s&&(s.textContent=mt(n)),e.addEventListener("input",a=>{let i=parseInt(a.target.value);if(a.target.style.setProperty("--pct",`${i}%`),Ut(i),s&&(s.textContent=mt(i)),w)try{w.setVolume(i)}catch{}})}if(s){let n=80;s.addEventListener("click",()=>{if(!e)return;let a=parseInt(e.value),i=a>0?0:n||80;a>0&&(n=a),at(e,s,w,i)})}}var Ue=!1,Ye=[];window.onYouTubeIframeAPIReady=()=>{Ue=!0,Ye.splice(0).forEach(t=>t()),import("./chunk-4A2ZIOPU.js").then(t=>t.notifyYtReady()).catch(()=>{})};function Jt(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function je(t){if(Ue&&window.YT?.Player){t();return}Ye.push(t)}var Q=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),Ut=t=>localStorage.setItem("kanaVol",String(t)),mt=t=>t===0?"\u{1F507}":t<50?"\u{1F509}":"\u{1F50A}";function at(t,e,s,n){if(t&&(t.value=n,t.style.setProperty("--pct",`${n}%`)),e&&(e.textContent=mt(n)),s)try{s.setVolume(n)}catch{}}var b=null,N=0,E=null,ft=0,Wt=0,I=!1,gt="timeline",Et={},P={},Bt=new Map,B=!1,R=!1,w=null,xt=null,_t=null,Oe="kanauViewerSetlistCollapsed",q=!1;function Zt(){gt=d.activeTab||"timeline",d.activeTab="player",C(".tab-btn").forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-selected","false")}),C(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player")),document.body.dataset.activeTab="player"}function It(){let t=Et;Et={},A(gt||"timeline",t)}function Ts(){I=!0;let t=l("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=l("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function U(t){let e=Math.floor(t),s=Math.floor(e/3600),n=Math.floor(e%3600/60),a=e%60;return s>0?`${s}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${n}:${String(a).padStart(2,"0")}`}function Fe(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function J(t){try{return JSON.parse(localStorage.getItem(Fe(t))||"null")||{}}catch{return{}}}function Rt(t,e){try{localStorage.setItem(Fe(t),JSON.stringify(e))}catch{}}var F=-1;function Es(t,e,s,n){let a=e===n,i=s[e],r=i!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${f(U(i))} \u306B\u79FB\u52D5">${f(U(i))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",o=(P[e]||[]).map(m=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${m.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${f(U(m.timeSeconds))}">${f(U(m.timeSeconds))}</button>`).join(""),c=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,p=`<div class="sv-cts-row">${o}${c}</div>`;return`<div class="sv-song${a?" is-current":""}" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${f(t.title)}</span>
      <span class="sv-song-artist">${f(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${r}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${p}
  </div>`}async function Ms(t){if(P={},!t?.channel||t?.index==null)return;let e=`${t.channel}:${t.index}`;if(Bt.has(e)){P=Bt.get(e)||{};let a=l("#stream-viewer");if(!a||a._currentStream!==t)return;let i=l("#sv-setlist");i&&nt(i,t.songs,J(t),F),xe(t);return}try{let a=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,i=await fetch(a);if(!i.ok)return;let r=await i.json();for(let u of r.items||[])P[u.songIndex]||(P[u.songIndex]=[]),P[u.songIndex].push({timeSeconds:u.timeSeconds,note:u.note??null});Bt.set(e,P)}catch{}let s=l("#stream-viewer");if(!s||s._currentStream!==t)return;let n=l("#sv-setlist");n&&nt(n,t.songs,J(t),F),xe(t)}function Cs(t,e,s){l("#sv-cts-modal")?.remove();let n=b?.getCurrentTime?.()??0,a=U(Math.floor(n)),i=document.createElement("div");i.id="sv-cts-modal",i.className="sv-cts-modal-overlay",i.innerHTML=`
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
  `,document.body.appendChild(i);let r=()=>i.remove();i.querySelector(".sv-cts-modal-close").addEventListener("click",r),i.querySelector(".sv-cts-modal-cancel").addEventListener("click",r),i.addEventListener("click",u=>{u.target===i&&r()}),i.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let u=i.querySelector("#sv-cts-ts-input").value.trim(),o=i.querySelector("#sv-cts-note-input").value.trim()||null,c=se(u),p=i.querySelector("#sv-cts-status");if(c===null){p.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",p.className="sv-cts-modal-status error",p.hidden=!1;return}let m=i.querySelector("#sv-cts-submit");m.disabled=!0,m.textContent="\u9001\u4FE1\u4E2D\u2026";try{let v=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:c,submitterNote:o})});if(v.ok)p.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",p.className="sv-cts-modal-status success",p.hidden=!1,m.hidden=!0,i.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let h=await v.json().catch(()=>({}));p.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${h.error||v.statusText}`,p.className="sv-cts-modal-status error",p.hidden=!1,m.disabled=!1,m.textContent="\u63D0\u6848\u3059\u308B"}}catch(v){p.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${v.message}`,p.className="sv-cts-modal-status error",p.hidden=!1,m.disabled=!1,m.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>i.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function u(o){o.key==="Escape"&&(r(),document.removeEventListener("keydown",u))})}function xe(t){let e=l("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let n=Object.keys(P).length>=t.songs.length;e.textContent=n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function Ps(t){l("#sv-bulk-modal")?.remove();let e=J(t),a=Object.keys(P).length>=t.songs.length,i=t.songs.map((o,c)=>{let p=e[c]!=null?U(e[c]):"",m=P[c]?.[0]?.timeSeconds!=null?U(P[c][0].timeSeconds):"",v=p||m;return`
      <div class="sv-bulk-row" data-idx="${c}">
        <span class="sv-bulk-num">${c+1}</span>
        <span class="sv-bulk-title" title="${f(o.title)}">${f(o.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${f(v)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${c}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${c}">\u23F1</button>
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
  `,document.body.appendChild(r);let u=()=>r.remove();r.querySelector(".sv-cts-modal-close").addEventListener("click",u),r.querySelector(".sv-cts-modal-cancel").addEventListener("click",u),r.addEventListener("click",o=>{o.target===r&&u()}),r.querySelector(".sv-paste-apply").addEventListener("click",()=>{let c=(r.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(v=>v.trim()).filter(Boolean),p=0;for(let v of c){let h=zs(v);if(!h)continue;let g=Gs(h.title,h.artist,t.songs);if(g>=0){let y=r.querySelector(`[data-bulk-ts-idx="${g}"]`);y&&(y.value=h.start,p++)}}let m=r.querySelector(".sv-paste-result");m&&(m.textContent=p>0?`${c.length}\u884C\u3092\u89E3\u6790 \u2192 ${p}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",m.hidden=!1)}),r.querySelector(".sv-bulk-rows").addEventListener("click",o=>{let c=o.target.closest("[data-bulk-now]");if(!c)return;let p=parseInt(c.dataset.bulkNow,10),m=b?.getCurrentTime?.();if(m!=null){let v=r.querySelector(`[data-bulk-ts-idx="${p}"]`);v&&(v.value=U(Math.floor(m)))}}),r.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let o=r.querySelector("#sv-bulk-note").value.trim()||null,c=r.querySelector("#sv-bulk-status"),p=r.querySelector("#sv-bulk-submit"),m=[];if(r.querySelectorAll("[data-bulk-ts-idx]").forEach(g=>{let y=parseInt(g.dataset.bulkTsIdx,10),k=se(g.value.trim());k!==null&&m.push({songIndex:y,timeSeconds:k})}),!m.length){c.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",c.className="sv-cts-modal-status error",c.hidden=!1;return}p.disabled=!0,p.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${m.length})`,c.hidden=!0;let v=0,h=0;await Promise.all(m.map(async g=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:g.songIndex,timeSeconds:g.timeSeconds,submitterNote:o})})).ok?v++:h++}catch{h++}p.textContent=`\u7533\u8ACB\u4E2D\u2026 (${v+h}/${m.length})`})),h===0?(c.textContent=`${v}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,c.className="sv-cts-modal-status success",p.hidden=!0,r.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(c.textContent=`${v}\u4EF6\u6210\u529F / ${h}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,c.className="sv-cts-modal-status error",p.disabled=!1,p.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),c.hidden=!1}),document.addEventListener("keydown",function o(c){c.key==="Escape"&&(u(),document.removeEventListener("keydown",o))})}function Is(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}var Xt="kanauViewerQueueCollapsed",$=null,ht=!1;function Mt(t){let e=$,s=e?.items?.[t];if(s){e.idx=t,ht=!0;try{s.kind==="mv"?S({url:s.video.url,title:s.video.title,isMv:!0}):S(s.stream)}finally{ht=!1}}}window.__playMyListInViewer=t=>{t?.items?.length&&($={name:t.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:t.items,idx:0,repeat:localStorage.getItem("kanauListRepeat")==="1",collapsed:localStorage.getItem(Xt)==="1"},Mt(Math.max(0,Math.min(t.idx||0,t.items.length-1))))};window.__openMusicQueueInViewer=(t,e=0,s=0)=>{if(!t?.length)return!1;let n=t.filter(i=>i?.url).map((i,r)=>i._stream?{kind:"stream",key:i._stream.url||`stream:${r}`,stream:i._stream}:{kind:"mv",key:`mv:${x(i.url)||r}`,video:{...i,isMv:!0}});if(!n.length)return!1;$={name:"\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u30AD\u30E5\u30FC",items:n,idx:Math.max(0,Math.min(e,n.length-1)),repeat:localStorage.getItem("kanauListRepeat")==="1",collapsed:localStorage.getItem(Xt)==="1"};let a=$.items[$.idx];ht=!0;try{a.kind==="mv"?S({...a.video,isMv:!0},s):S(a.stream,s)}finally{ht=!1}return!0};function te(){let t=$;if(!t?.items?.length)return"";let e=t.items[t.idx],s=e?.kind==="mv"?e.video?.title||"\u52D5\u753B":e?.stream?.title||"\u914D\u4FE1";return`
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
        ${t.items.map((n,a)=>{let i=n.kind==="mv"?n.video?.title||"\u52D5\u753B":n.stream?.title||"\u914D\u4FE1",r=n.kind==="mv"?"\u{1F3AC} \u52D5\u753B":`\u{1F4C5} ${M(n.stream?.date)}\u3000\u7B2C${n.stream?.index}\u67A0`;return`<button class="sv-queue-row${a===t.idx?" is-current":""}" type="button"
            data-svq-action="jump" data-svq-idx="${a}">
            <span class="sv-queue-num">${a+1}</span>
            <span class="sv-queue-title">${f(i)}</span>
            <span class="sv-queue-meta">${f(r)}</span>
          </button>`}).join("")}
      </div>
    </div>`}function Ke(t){let e=t.target.closest("[data-svq-action]");if(!e||!$)return!1;if(e.dataset.svqAction==="jump"){let s=parseInt(e.dataset.svqIdx,10);return!Number.isNaN(s)&&s!==$.idx&&Mt(s),!0}if(e.dataset.svqAction==="repeat"){$.repeat=!$.repeat;try{localStorage.setItem("kanauListRepeat",$.repeat?"1":"0")}catch{}return e.classList.toggle("is-on",$.repeat),e.setAttribute("aria-pressed",String($.repeat)),!0}if(e.dataset.svqAction==="toggle"){$.collapsed=!$.collapsed;try{localStorage.setItem(Xt,$.collapsed?"1":"0")}catch{}let s=e.closest(".sv-queue-section");return s&&(s.outerHTML=te()),ee(l("#sv-below-player")),!0}return!1}function ee(t){if($?.collapsed)return;let e=t?.querySelector?.(".sv-queue-list"),s=e?.querySelector(".sv-queue-row.is-current");e&&s&&(e.scrollTop=Math.max(0,s.offsetTop-e.clientHeight/2))}function ze(){let t=d.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let n=t.findIndex(a=>a.channel===s.channel&&a.index===s.index);n<0||n>=t.length-1||S(t[n+1])}async function As(t){let e=await Je(),s=x(t?.url);if(!s||!e.length)return;let n=e.findIndex(i=>x(i.url)===s);if(n<0||n>=e.length-1)return;let a=e[n+1];S({...a,isMv:!0})}function Ge(t){if(!t||Y(t))return;let e=b||w;if(R&&e){try{e.seekTo(0,!0),e.playVideo()}catch{}return}if($?.items?.length){let n=$;n.idx<n.items.length-1?Mt(n.idx+1):n.repeat&&Mt(0);return}if(!B)return;let s=t._currentStream;s?.isMv?As(s):ze()}function it(){_t&&(clearInterval(_t),_t=null)}function Ds(t,e){it();let s=!1;_t=setInterval(()=>{if(t!==N||e.hidden||!b){it();return}try{let n=b.getPlayerState?.();n===window.YT?.PlayerState?.ENDED?(s||Ge(e),s=!0):n===window.YT?.PlayerState?.PLAYING&&(s=!1);let a=b.getCurrentTime?.()??0,i=e._currentStream;if(i?.songs?.length){let r=J(i),u=-1;for(let o=0;o<i.songs.length;o++)r[o]!=null&&a>=r[o]&&(u=o);u!==F&&(F=u,Vs(u))}}catch{}},700)}function Vs(t){let e=l("#sv-setlist");if(!e)return;e.querySelectorAll(".sv-song").forEach((n,a)=>n.classList.toggle("is-current",a===t))}function Qe(t){q=!!t;try{localStorage.setItem(Oe,q?"1":"0")}catch{}let e=l("#stream-viewer .sv-panel"),s=l("#sv-setlist-toggle");e&&e.classList.toggle("is-setlist-collapsed",q),s&&(s.textContent=q?"\u958B\u304F":"\u7573\u3080",s.title=q?"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u3092\u958B\u304F":"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u3092\u6298\u308A\u305F\u305F\u3080",s.setAttribute("aria-expanded",String(!q)))}function Hs(){try{q=localStorage.getItem(Oe)==="1"}catch{}Qe(q)}function qs(){let t=d.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let n=t.findIndex(a=>a.channel===s.channel&&a.index===s.index);n<=0||S(t[n-1])}function Ns(){let t=b||w;if(t)try{t.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?t.pauseVideo?.():t.playVideo?.()}catch{}}function Yt(t){C('.sv-bp-control-btn[data-bp-action="toggle-play"]').forEach(e=>{e.textContent=t?"\u23F8":"\u25B6",e.title=t?"\u4E00\u6642\u505C\u6B62":"\u518D\u751F",e.setAttribute("aria-label",t?"\u4E00\u6642\u505C\u6B62":"\u518D\u751F"),e.setAttribute("aria-pressed",String(t))})}function Bs(){return'<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>'}function Rs(t){return Is().some(e=>(e.streams||[]).includes(t))}function Us(t,e,s){import("./chunk-2BRYFZJR.js").then(n=>{n.showAddToPlaylistModal(t,e,{onChange:a=>{s?.classList.toggle("is-saved",!!a),s?.setAttribute("aria-pressed",String(!!a)),s&&(s.title=a?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58")}})}).catch(()=>{})}function Ys(t){return t.length?t.map(e=>{let s=Ve(e.stream.url)||pt(e.stream.url);return`<button class="sv-side-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${f(e.stream.channel)}" data-bp-index="${e.stream.index}">
      ${s?`<img class="sv-side-rel-thumb" src="${f(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<span class="sv-side-rel-thumb sv-side-rel-thumb--empty"></span>'}
      <span class="sv-side-rel-body">
        <span class="sv-side-rel-title">${f(e.stream.title||"\u914D\u4FE1")}</span>
        <span class="sv-side-rel-meta">${M(e.stream.date)} / ${e.overlap}\u66F2\u4E00\u81F4</span>
        <span class="sv-side-rel-songs">${e.sharedSongs.map(n=>f(n)).join("\u3001")}</span>
      </span>
    </button>`}).join(""):'<div class="sv-side-empty">\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u914D\u4FE1\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>'}function js(t){let e=l("#sv-side-related");e&&(e.innerHTML=`
    <div class="sv-side-related-head">
      <span>\u95A2\u9023\u914D\u4FE1</span>
      <span>${t.length?`${t.length}\u4EF6`:""}</span>
    </div>
    <div class="sv-side-related-list">${Ys(t)}</div>
  `)}function _e(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${f(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=pt(t.url),n=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${f(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${f(n)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${f(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${f(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${M(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function Os(t){let e=l("#sv-below-player");if(!e)return;let s=d.data?.streams||[],n=s.findIndex(p=>p.channel===t.channel&&p.index===t.index),a=n>=0&&n<s.length-1?s[n+1]:null,i=n>0?s[n-1]:null,r=new Set(t.songs.map(p=>p.title)),u=s.filter((p,m)=>m!==n).map(p=>{let m=p.songs.filter(v=>r.has(v.title));return{stream:p,overlap:m.length,sharedSongs:m.slice(0,3).map(v=>v.title)}}).filter(p=>p.overlap>0).sort((p,m)=>m.overlap-p.overlap).slice(0,8),o=X(t),c=Rs(o);e.innerHTML=`
    <div class="sv-bp-wrap">
      ${te()}

      <!-- \u64CD\u4F5C + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-control-bar">
          <button class="sv-bp-control-btn" type="button" data-bp-action="prev-stream"
            ${i?"":"disabled"} title="\u524D\u306E\u914D\u4FE1" aria-label="\u524D\u306E\u914D\u4FE1">\u23EE</button>
          <button class="sv-bp-control-btn sv-bp-control-btn--play" type="button" data-bp-action="toggle-play"
            title="\u518D\u751F / \u4E00\u6642\u505C\u6B62" aria-label="\u518D\u751F / \u4E00\u6642\u505C\u6B62">\u25B6</button>
          <button class="sv-bp-control-btn" type="button" data-bp-action="next-stream"
            ${a?"":"disabled"} title="\u6B21\u306E\u914D\u4FE1" aria-label="\u6B21\u306E\u914D\u4FE1">\u23ED</button>
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${B?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${B?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${R?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${R?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          <button class="sv-bp-control-btn sv-bp-bookmark-btn${c?" is-saved":""}" type="button"
            data-bp-action="bookmark-stream" aria-pressed="${c}" title="${c?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}"
            aria-label="${c?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${Bs()}</button>
        </div>
        <div class="sv-bp-next-hint">
          ${a?`\u6B21\uFF1A${f(a.title||"\u6B21\u306E\u914D\u4FE1")}`:"\u6700\u5F8C\u306E\u914D\u4FE1\u3067\u3059"}
        </div>
        <div class="sv-bp-nav-cards">
          ${_e(i,"newer")}
          ${_e(a,"older")}
        </div>
        <div class="sv-bp-info-compact">
          <span>${M(t.date)}</span>
          <span>\u7B2C${t.index}\u67A0</span>
          <span>${t.songs.length}\u66F2</span>
        </div>
      </div>

    </div>
  `,js(u),e.onchange=p=>{let m=p.target.closest("#sv-ap-check"),v=p.target.closest("#sv-repeat-check");if(m){B=m.checked;let h=m.closest(".sv-bp-ap-switch");h&&h.classList.toggle("sv-bp-ap-switch--on",B)}if(v){R=v.checked;let h=v.closest(".sv-bp-ap-switch");h&&h.classList.toggle("sv-bp-ap-switch--on",R)}},e.onclick=p=>{if(Ke(p))return;let m=p.target.closest("[data-bp-action]");if(!m)return;let v=m.dataset.bpAction;if(v==="open-stream"){let h=m.dataset.bpChannel,g=parseInt(m.dataset.bpIndex,10),y=(d.data?.streams||[]).find(k=>k.channel===h&&k.index===g);y&&S(y)}else v==="prev-stream"?qs():v==="next-stream"?ze():v==="toggle-play"?Ns():v==="bookmark-stream"&&Us(o,t.title||"\u914D\u4FE1",m)},ee(e);try{let p=(b||w)?.getPlayerState?.()===window.YT?.PlayerState?.PLAYING;Yt(p)}catch{}}var vt=null;async function Je(){if(vt)return vt;try{vt=(await(await fetch("data/music.json")).json())?.videos||[]}catch{vt=[]}return vt}function Fs(t){let e=String(t||"");return e=e.replace(/【[^】]*】/g," "),e=e.replace(/^\s*MV[⌇|｜♪♬:：\-\s]*/i," "),e=e.split(/[\/／|｜]/)[0],e=e.replace(/歌ってみた|covered?\s*(by.*)?$/gi," "),e.trim()}async function Ks(t){let e=l("#sv-below-player");if(!e)return;try{await Ot()}catch{}let s=await Je();if(l("#stream-viewer")?._currentStream!==t)return;let n=d.channelData?.combined?.streams||d.data?.streams||[],a=et(Fs(t.title)),i=[];if(a.length>1)for(let v of n){let h=(v.songs||[]).find(g=>{let y=et(g.title);return y===a||y.length>1&&(y.includes(a)||a.includes(y))});h&&i.push({stream:v,songTitle:h.title})}let r=i.slice(0,8),u={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9\u30BD\u30F3",cover:"\u30AB\u30D0\u30FC"},o=s.find(v=>v.url===t.url),c=s.filter(v=>v.url!==t.url).sort((v,h)=>{let g=o&&v.type===o.type?1:0,y=o&&h.type===o.type?1:0;return g!==y?y-g:(h.publishedAt||"").localeCompare(v.publishedAt||"")}).slice(0,12),p=s.findIndex(v=>x(v.url)===x(t.url)),m=p>=0&&p<s.length-1?s[p+1]:null;e.innerHTML=`
    <div class="sv-bp-wrap">
      ${te()}
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${B?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${B?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${R?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${R?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          ${m?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${f(m.title||"\u6B21\u306E\u52D5\u753B")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u52D5\u753B\uFF09</span>'}
        </div>
      </div>
      ${r.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u{1F3A4} \u3053\u306E\u66F2\u304C\u6B4C\u308F\u308C\u305F\u6B4C\u67A0 <span class="sv-bp-sh-sub">\uFF08\u5168${i.length}\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${r.map(v=>{let h=pt(v.stream.url);return`<button class="sv-bp-rel-card" type="button" data-mv-action="open-stream" data-mv-channel="${f(v.stream.channel)}" data-mv-index="${v.stream.index}">
              ${h?`<img class="sv-bp-rel-thumb" src="${f(h)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${f(v.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${M(v.stream.date)}\u3000\u7B2C${v.stream.index}\u67A0</div>
                <div class="sv-bp-rel-songs">\u{1F3B5} ${f(v.songTitle)}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      ${c.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u{1F3AC} \u307B\u304B\u306E\u52D5\u753B <button class="sv-mv-all-btn" type="button" data-mv-action="all-videos">\u3059\u3079\u3066\u898B\u308B \u2192</button></div>
        <div class="sv-mv-grid">
          ${c.map(v=>{let h=pt(v.url);return`<button class="sv-mv-card" type="button" data-mv-action="open-mv" data-mv-url="${f(v.url)}" data-mv-title="${f(v.title)}">
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
  `,e.onchange=v=>{let h=v.target.closest("#sv-ap-check"),g=v.target.closest("#sv-repeat-check");if(h){B=h.checked;let y=h.closest(".sv-bp-ap-switch");y&&y.classList.toggle("sv-bp-ap-switch--on",B)}if(g){R=g.checked;let y=g.closest(".sv-bp-ap-switch");y&&y.classList.toggle("sv-bp-ap-switch--on",R)}},e.onclick=v=>{if(Ke(v))return;let h=v.target.closest("[data-mv-action]");if(!h)return;let g=h.dataset.mvAction;if(g==="open-stream"){let y=h.dataset.mvChannel,k=parseInt(h.dataset.mvIndex,10),V=(d.channelData?.combined?.streams||d.data?.streams||[]).find(Z=>Z.channel===y&&Z.index===k);V&&S(V)}else g==="open-mv"?S({url:h.dataset.mvUrl,title:h.dataset.mvTitle,isMv:!0}):g==="all-videos"&&A("playlists")},ee(e)}function nt(t,e,s,n){t.innerHTML=e.map((a,i)=>Es(a,i,s,n)).join("")}function se(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function zs(t){let e=t.match(/^(\d{1,2}:\d{2}(?::\d{2})?)[\s　]+(.+?)\s*\/\s*(.+?)[\s　]+(\d{1,2}:\d{2}(?::\d{2})?)$/);return e?{start:e[1].trim(),title:e[2].trim(),artist:e[3].trim(),end:e[4].trim()}:null}function et(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function Gs(t,e,s){let n=et(t),a=et(e),i=-1,r=0;for(let u=0;u<s.length;u++){let o=et(s[u].title),c=et(s[u].artist),p=0;o===n?p+=80:n.length>1&&(o.includes(n)||n.includes(o))&&(p+=40),a&&c===a?p+=20:a&&a.length>1&&(c.includes(a)||a.includes(c))&&(p+=10),p>r&&(r=p,i=u)}return r>=40?i:-1}function We(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
          title="\u5927\u753B\u9762\u3067\u518D\u751F" aria-pressed="false">\u26F6</button>
        <div class="sv-volume-wrap">
          <button class="vol-btn" id="sv-vol-btn" type="button" aria-label="\u97F3\u91CF">\u{1F50A}</button>
          <input class="vol-slider" id="sv-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
        </div>
        <button class="sv-music-btn" id="sv-music-btn" type="button" title="\u73FE\u5728\u4F4D\u7F6E\u304B\u3089\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u8074\u304F">
          <span class="sv-music-icon">\u{1F3B5}</span><span class="sv-music-label">\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u8074\u304F</span>
        </button>
        <button class="sv-share-btn" id="sv-share-btn" type="button" title="\u3053\u306E\u52D5\u753B\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">
          <span class="sv-share-icon">\u{1F517}</span><span class="sv-share-label">\u5171\u6709</span>
        </button>
        <a class="sv-yt-link" id="sv-yt-link" href="#" target="_blank" rel="noopener" title="YouTube\u3067\u958B\u304F">
          <span class="sv-yt-icon">\u2197</span><span class="sv-yt-label">YouTube\u3067\u958B\u304F</span>
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
          <div class="sv-panel-hint">\u23F1 \u3067\u73FE\u5728\u6642\u523B\u3092\u30E1\u30E2 \uFF0F \u30D0\u30C3\u30B8\u3092\u30BF\u30C3\u30D7\u3067\u79FB\u52D5</div>
          <div class="sv-setlist" id="sv-setlist"></div>
          <div class="sv-side-related" id="sv-side-related"></div>
        </div>
      </div>
    </div>
  `,t.appendChild(e),l("#sv-close").addEventListener("click",()=>bt()),l("#sv-share-btn").addEventListener("click",Ls),l("#sv-music-btn").addEventListener("click",ys),l("#sv-fullscreen-btn").addEventListener("click",Ts),l("#sv-setlist-toggle")?.addEventListener("click",()=>Qe(!q)),l("#sv-side-related")?.addEventListener("click",a=>{let i=a.target.closest('[data-bp-action="open-stream"]');if(!i)return;let r=i.dataset.bpChannel,u=parseInt(i.dataset.bpIndex,10),o=(d.data?.streams||[]).find(c=>c.channel===r&&c.index===u);o&&S(o)});let s=l("#sv-vol-slider"),n=l("#sv-vol-btn");if(s){let a=Q();s.value=a,s.style.setProperty("--pct",`${a}%`),n&&(n.textContent=mt(a)),s.addEventListener("input",i=>{let r=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${r}%`),Ut(r),n&&(n.textContent=mt(r)),b)try{b.setVolume(r)}catch{}})}if(n){let a=80;n.addEventListener("click",()=>{if(!s)return;let i=parseInt(s.value),r=i>0?0:a||80;i>0&&(a=i),at(s,n,b,r),Ut(r)})}e.querySelectorAll("[data-bc-tab]").forEach(a=>{a.addEventListener("click",()=>{gt=a.dataset.bcTab,bt()})}),l("#sv-import-toggle").addEventListener("click",()=>{let a=l("#sv-import-area");a&&(a.hidden=!a.hidden,a.hidden||l("#sv-import-input")?.focus())}),l("#sv-import-cancel").addEventListener("click",()=>{let a=l("#sv-import-area");a&&(a.hidden=!0);let i=l("#sv-import-input");i&&(i.value="")}),l("#sv-import-apply").addEventListener("click",()=>{let a=e._currentStream;if(!a)return;let i=l("#sv-import-input");if(!i)return;let u=i.value.split(`
`).map(p=>se(p)).filter(p=>p!==null);if(!u.length)return;let o=J(a);u.forEach((p,m)=>{m<a.songs.length&&(o[m]=p)}),Rt(a,o),nt(l("#sv-setlist"),a.songs,o,F);let c=l("#sv-import-area");c&&(c.hidden=!0),i.value=""}),l("#sv-cts-bulk-btn").addEventListener("click",()=>{let a=e._currentStream;a&&Ps(a)}),l("#sv-setlist").addEventListener("click",a=>{let i=a.target.closest("[data-action]");if(!i)return;let r=parseInt(i.dataset.idx,10),u=e._currentStream;if(!u)return;let o=J(u);if(i.dataset.action==="seek"){if(o[r]!=null&&b?.seekTo){b.seekTo(o[r],!0);try{b.playVideo()}catch{}}}else if(i.dataset.action==="set-ts"){let c=b?.getCurrentTime?.();c!=null&&(o[r]=Math.floor(c),Rt(u,o),nt(l("#sv-setlist"),u.songs,o,F))}else if(i.dataset.action==="del-ts")delete o[r],Rt(u,o),nt(l("#sv-setlist"),u.songs,o,F);else if(i.dataset.action==="cts-seek"){let c=Number(i.dataset.ctsSeconds);if(!isNaN(c)&&b?.seekTo){b.seekTo(c,!0);try{b.playVideo()}catch{}}}else if(i.dataset.action==="cts-propose"){let c=u.songs[r];Cs(u,r,c?.title||`\u66F2 ${r+1}`)}})}function S(t,e=0){if(!t?.url)return;let s=x(t.url);if(!s){_s(t.url);return}if(Ae()){window.open(De(t.url,e),"_blank","noopener");return}We(),Jt(),it(),ht||($=null);let n=l("#stream-viewer");if(Y(n)){if(n._currentStream?.url===t.url){if(!He()&&!window.__restoreMusicExternalPlayer?.()&&qe(),e>0)try{b?.seekTo(Math.floor(e),!0),b?.playVideo()}catch{}return}Pt()}let a=window.__takeOverMusicPlayerVideo?.(t.url)||null;a||import("./chunk-4A2ZIOPU.js").then(k=>(k.releaseMusicPlayerVideo||k.pauseMusicPlayer)()).catch(()=>{});let i=l("#yt-player-panel");if(i&&!i.hidden){try{w?.pauseVideo()}catch{}i.hidden=!0,lt()}if(E=null,I){I=!1;let k=l("#stream-viewer");k&&k.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}I=!1,Zt();let r=l("#stream-viewer");r.classList.remove("sv-fullscreen"),r.classList.toggle("sv-mv-mode",!!t.isMv);let u=/縦型|たて配信|タテ|#?shorts|ショート|vertical/i.test(t.title||"")||/\/shorts\//.test(t.url||"");r.classList.toggle("sv-portrait",u),r._currentStream=t,Hs();let o=++N,c=r.querySelectorAll("[data-bc-tab]");c[1]&&(t.isMv?(c[1].dataset.bcTab="playlists",c[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(c[1].dataset.bcTab="timeline",c[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let p=l("#sv-bc-title");p&&(p.textContent=t.title||"\u914D\u4FE1");let m=l("#sv-stream-meta");m&&(m.textContent=t.isMv?"":`${M(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let v=l("#sv-yt-link");v&&(v.href=t.url);let h=l("#sv-song-count");if(h&&(h.textContent=t.isMv?"":`${t.songs.length}\u66F2`),P={},t.isMv){let k=l("#sv-setlist");k&&(k.innerHTML="");let _=l("#sv-below-player");_&&(_.innerHTML="");let V=l("#sv-side-related");V&&(V.innerHTML=""),Ks(t)}else{let k=J(t);nt(l("#sv-setlist"),t.songs,k,F),Ms(t),Os(t)}r.hidden=!1,document.body.style.overflow="",D(),window.scrollTo({top:0,behavior:"auto"}),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),b=null;let g=l("#sv-player-wrap");g.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let y=Math.floor(e||a?.currentTime||0);if(a?.player){g.innerHTML="",a.iframe?(a.iframe.style.width="100%",a.iframe.style.height="100%",g.appendChild(a.iframe)):g.innerHTML='<div class="sv-player-loading">\u518D\u751F\u3092\u5F15\u304D\u7D99\u304E\u307E\u3057\u305F</div>',b=a.player;try{b.setVolume?.(Q()),y>1&&b.seekTo?.(y,!0),b.playVideo?.()}catch{}at(l("#sv-vol-slider"),l("#sv-vol-btn"),null,Q()),Yt(!0),Ds(o,r);return}je(()=>{if(o!==N||r.hidden)return;g.innerHTML="";let k=document.createElement("div");g.appendChild(k);try{b=new window.YT.Player(k,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,origin:location.origin,rel:0,modestbranding:1,...y>0?{start:y}:{}},events:{onReady:_=>{let V=Q();try{_.target.setVolume(V)}catch{}at(l("#sv-vol-slider"),l("#sv-vol-btn"),null,V);try{_.target.setPlaybackQuality("hd1080")}catch{}try{_.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(y>5)try{_.target.seekTo(y,!0)}catch{}},onStateChange:_=>{if(o===N){if(Yt(_.data===window.YT.PlayerState.PLAYING),_.data===window.YT.PlayerState.PLAYING)try{_.target.setPlaybackQuality("hd1080")}catch{}_.data===window.YT.PlayerState.ENDED&&Ge(r)}},onError:()=>{o===N&&(g.innerHTML=`<iframe src="https://www.youtube.com/embed/${f(s)}?autoplay=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}${y>0?`&start=${y}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{g.innerHTML=`<iframe src="https://www.youtube.com/embed/${f(s)}?autoplay=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}${y>0?`&start=${y}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function bt(){let t=l("#stream-viewer");if(!t||t.hidden||Y(t))return;if(I){I=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let s=l("#sv-close");s&&(s.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let n=l("#sv-fullscreen-btn");n&&n.setAttribute("aria-pressed","false");return}if(bs())return;++N,t.hidden=!0,t._currentStream=null,it(),b=null;let e=l("#sv-player-wrap");e&&(e.innerHTML=""),document.body.style.overflow="",It(),D()}window.__openStreamViewer=S;window.__closeStreamMiniPlayer=()=>{let t=l("#stream-viewer");if(Y(t))return Pt(),!0;let e=l("#yt-player-panel");return e&&!e.hidden?(e.hidden=!0,lt(),E=null,!0):!1};function jt(t){let e=St(t),s=l("#song-modal"),n=l("#song-modal-body"),a=l("#song-modal-title");if(!e||!s||!n||!a)return;re(e),a.textContent=e.title;let i=(e.streamRefs||[]).slice(0,8).map(o=>({...o,thumbnail:pt(o.url),thumbnailFallback:fs(o.url),thumbnailTiny:Ve(o.url),detailKey:X(o)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),u=At(e.key);n.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${f(e.key)}">${f(e.artist)}</button>
        <div class="song-detail-tags">${r.map(o=>`<span class="tag-badge">${f(o)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${M(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${u?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${f(e.key)}">${u?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${f(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${i.length?i.map(o=>`
        <div class="song-detail-stream">
          ${o.thumbnail&&o.url?`<a class="song-detail-thumb-link" href="${f(o.url)}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F"><img class="song-detail-thumb" src="${f(o.thumbnail)}" data-fallback="${f(o.thumbnailFallback)}" data-tiny="${f(o.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"></a>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${f(e.key)}" data-streamkey="${f(o.detailKey)}">
            <span>${M(o.date)}</span>
            <strong>${f(o.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,s.hidden=!1,l("#song-modal-close")?.focus()}function Qs(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s();let a=n.target.closest("[data-detail-action]");if(a){if(n.stopPropagation(),a.dataset.detailAction==="close"&&s(),a.dataset.detailAction==="favorite"){let i=a.dataset.songkey;ae(i);let r=At(i);a.textContent=r?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",a.classList.toggle("primary",r),a.classList.toggle("ghost",!r)}if(a.dataset.detailAction==="timeline"){let i=St(a.dataset.songkey);s(),i&&vs(i)}if(a.dataset.detailAction==="stream"){let i=St(a.dataset.songkey),r=i?.streamRefs?.find(u=>X(u)===a.dataset.streamkey);s(),i&&r&&ps(i,r)}if(a.dataset.detailAction==="artist"){let i=St(a.dataset.songkey);s(),i&&ms(i)}}}),t.addEventListener("error",n=>{let a=n.target.closest?.(".song-detail-thumb");if(!a)return;let i=a.dataset.fallback||a.dataset.tiny||"";if(i&&a.src!==i){a.src=i,a.dataset.fallback===i?delete a.dataset.fallback:delete a.dataset.tiny;return}a.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&s()})}var Te=!1;function Js(){if(!d.data)return;let{stats:t,streams:e=[]}=d.data,s=e[0]?.date||null,n=Dt(s),a=t.dataGeneratedDate||d.channelData?.dataGeneratedDate||null,i=Dt(a),r=t.channelLabel||t.channelId||"",u=r?`<span class="badge accent" style="margin-right:8px;">${f(r)}</span>`:"";l("#updated-info").innerHTML=u+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${M(a)||"\u2014"}</strong>`+(i!=null?` <span class="badge">${i}\u65E5\u524D</span>`:"");let o=l("#stats-grid");if(!Te)o.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${K(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${K(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${K(t.streams)}<span class="stat-unit">\u56DE</span></div>
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
        <div class="stat-value">${Ee(d.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,Te=!0;else{let c=o.querySelectorAll(".stat-value");c.length>=6&&(c[0].textContent=K(t.total),c[0].innerHTML+='<span class="stat-unit">\u56DE</span>',c[1].textContent=K(t.repertoire),c[1].innerHTML+='<span class="stat-unit">\u66F2</span>',c[2].textContent=K(t.streams),c[2].innerHTML+='<span class="stat-unit">\u56DE</span>',c[3].textContent=t.avgPerStream,c[3].innerHTML+='<span class="stat-unit">\u66F2</span>',c[4].textContent=n??"\u2014",c[4].innerHTML+='<span class="stat-unit">\u65E5</span>',c[5].textContent=Ee(d.data),c[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function Ee(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,s=t.streams[0].date;return Math.floor((s-e)/864e5)+1}function Ws(){l("#loading").hidden=!1,l("#error").hidden=!0}function Zs(){l("#loading").hidden=!0}function Xs(t){let e=l("#loading"),s=l("#error"),n=l("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),n&&(n.textContent=t&&t.message?t.message:String(t))}function tn(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let s=document.getElementById("hero-ch-bg");s&&(s.dataset.mode=t||"all")}var en={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.58 7.17a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.4A2.51 2.51 0 0 0 2.42 7.17 26.9 26.9 0 0 0 2 12a26.9 26.9 0 0 0 .42 4.83 2.51 2.51 0 0 0 1.77 1.77c1.56.4 7.81.4 7.81.4s6.25 0 7.81-.4a2.51 2.51 0 0 0 1.77-1.77A26.9 26.9 0 0 0 22 12a26.9 26.9 0 0 0-.42-4.83ZM10 15.43V8.57L16 12l-6 3.43Z"/></svg>',label:"YouTube",url:"https://www.youtube.com/@YumekawaKanau"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',label:"official store",url:"https://react.booth.pm"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>',label:"official site",url:"https://v-react.com"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.58 7.17a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.4A2.51 2.51 0 0 0 2.42 7.17 26.9 26.9 0 0 0 2 12a26.9 26.9 0 0 0 .42 4.83 2.51 2.51 0 0 0 1.77 1.77c1.56.4 7.81.4 7.81.4s6.25 0 7.81-.4a2.51 2.51 0 0 0 1.77-1.77A26.9 26.9 0 0 0 22 12a26.9 26.9 0 0 0-.42-4.83ZM10 15.43V8.57L16 12l-6 3.43Z"/></svg>',label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function Lt(t){let e=en[t];if(!e)return"";let s=e.bannerUrl?`<img class="ch-card-banner-img" src="${f(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
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
    </div>`}function sn(t){let e=l("#ch-modal"),s=l("#ch-modal-body");if(!e||!s)return;let n="";t==="new"?n=Lt("new"):t==="old"?n=Lt("old"):n=Lt("new")+Lt("old"),s.innerHTML=n,e.hidden=!1,l("#ch-modal-close")?.focus()}function nn(){let t=l("#ch-modal"),e=l("#ch-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s()}),document.querySelectorAll("[data-ch-modal]").forEach(n=>{n.addEventListener("click",()=>sn(n.dataset.chModal))})}function an(){let t=l("#help-modal"),e=l("#help-btn"),s=l("#help-close");if(!t||!e||!s)return;let n=()=>{t.hidden=!1,s.focus()},a=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",n),s.addEventListener("click",a),t.addEventListener("click",i=>{i.target===t&&a()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&a()})}function ln(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function ne(){Ws();try{let t=await ce();d.channelData=t,!st&&!t.fullLoaded&&Pe();let e=j(),s=!!e.v;d.songsQuery=e.q,d.activeTab=s?"player":Tt(e.tab)?e.tab:"dashboard",Ie(d.activeTab);let n=e.channel||d.channel||rt;if(O(n)||(n=rt),!O(n)){let a=Object.keys(t.channels)[0];a&&(n=a)}if(!O(n))throw new Error("No channel data could be loaded");us(),Ct(n,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0,render:!s}),s&&(await xs()||A(e.tab,{updateUrl:!1,initial:!0})),Zs(),Ss()}catch(t){console.error("[init] failed:",t),Xs(t)}}function rn(){if(!d.channelData)return;let t=j();d.songsQuery=t.q,t.channel!==d.channel&&O(t.channel)&&Ct(t.channel,{resetSearch:!1,updateUrl:!1}),A(t.tab,{updateUrl:!1})}C(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=l("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!I&&!Y(s)){gt=e,bt();return}A(e)})});C(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||Ct(t.dataset.channel))})});window.addEventListener("popstate",rn);C("[data-audience]").forEach(t=>{t.addEventListener("click",()=>os(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest(".timeline-setlist .setlist-title[data-songkey]");if(e){t.preventDefault(),t.stopPropagation(),jt(e.dataset.songkey);return}let s=t.target.closest("[data-artist-search]");if(s){t.preventDefault(),t.stopPropagation(),Kt(s.dataset.artistSearch||s.textContent||"");return}let n=t.target.closest("[data-playlist-add]");if(n){t.preventDefault(),t.stopPropagation();let r=n.dataset.playlistAdd,u=n.dataset.streamTitle||"",o=c=>{n.classList.toggle("is-saved",c),n.classList.contains("timeline-save-btn")&&(n.textContent=c?"\u2605":"\u2606"),n.title=c?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"};import("./chunk-2BRYFZJR.js").then(c=>c.showAddToPlaylistModal(r,u,{onChange:o}));return}let a=t.target.closest("[data-stream-play]");if(a){t.preventDefault(),t.stopPropagation();let r=a.dataset.streamPlay,u=(d.data?.streams||[]).find(o=>X(o)===r);u?.url&&S(u);return}if(le(t.target))return;let i=t.target.closest("[data-songkey]");i&&jt(i.dataset.songkey)});l("#retry-btn").addEventListener("click",ne);l("#reload-btn").addEventListener("click",ne);an();nn();Qt();We();Qs();cs();ds();ln();import("./chunk-4A2ZIOPU.js").then(t=>{t.setApiLoader(Jt),t.initMusicPlayer()}).catch(()=>{});ye(t=>{t.type==="song"?jt(t.song.key):t.type==="artist"?Kt(t.artist):t.type==="stream"?S(t.stream):t.type==="music-video"&&S({...t.video,isMv:!0})});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(!s&&!t.metaKey&&!t.ctrlKey&&!t.altKey){let a=l("#stream-viewer");if(a&&!a.hidden&&!a.classList.contains("sv-minified")&&!a.classList.contains("sv-music-minified")&&l("#sv-share-modal")?.hidden!==!1&&b){if(t.key===" "){t.preventDefault();try{b.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?b.pauseVideo():b.playVideo()}catch{}return}if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();try{let r=b.getCurrentTime?.()??0,u=Math.max(0,r+(t.key==="ArrowRight"?10:-10));b.seekTo(u,!0)}catch{}return}}}if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),ge();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),ve();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let a=l("#help-modal");a&&a.hidden&&(a.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let a=l("#stream-viewer"),i=!!l("#panel-player.active");if(a&&!a.hidden&&(I||i)){t.preventDefault(),bt();return}if(Nt()){t.preventDefault(),dt();return}let r=l("#song-modal");if(r&&!r.hidden)return;let u=l("#ch-modal");if(u&&!u.hidden){u.hidden=!0;return}let o=l("#help-modal");if(o&&!o.hidden){o.hidden=!0,l("#help-btn")?.focus();return}let c=l("#songs-search");c&&document.activeElement===c&&c.value&&(t.preventDefault(),c.value="",c.dispatchEvent(new Event("input",{bubbles:!0})))}});me(()=>{d.data&&(Vt(),(d.activeTab==="dashboard"||d.activeTab==="analytics")&&W())});function on(){ne()}on();export{gs as getWatchHistory};
