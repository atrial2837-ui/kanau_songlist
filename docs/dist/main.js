import{b as Jt,c as Xt,d as Zt,i as Wt,k as q,l as W}from"./chunk-TKHIMASD.js";import{a as te,b as ee,e as Et,f as se}from"./chunk-SIADDXVK.js";import{a as Z}from"./chunk-MKJIXTK4.js";import{a as zt,b as Tt,c as Gt,e as o}from"./chunk-RBEKY5OM.js";import{D as _t,E as T,G as z,L as j,M as Qt,a as l,b as _,d as f}from"./chunk-PRFEE4R6.js";var L=-1,A=[],Mt=null,Y=null,ft=null;function ie(t){Mt=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
    <div id="omni-box">
      <div class="omni-input-row">
        <span class="omni-search-icon" aria-hidden="true">\u{1F50D}</span>
        <input
          id="omni-input"
          class="omni-input"
          type="search"
          placeholder="\u66F2\u540D\u30FB\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u30FB\u914D\u4FE1\u30FB\u52D5\u753B\u3092\u691C\u7D22\u2026"
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
  `,document.body.appendChild(e),e.addEventListener("click",n=>{n.target===e&&st()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>Ct(s.value)),s.addEventListener("keydown",Ce),document.getElementById("omni-listbox").addEventListener("click",n=>{let a=n.target.closest("[data-omni-idx]");a&&re(Number(a.dataset.omniIdx))})}function le(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,L=-1,A=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Ct(""),Ie().then(()=>{if(!Pt())return;let s=document.getElementById("omni-input")?.value||"";s.trim()&&Ct(s)})}function st(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),L=-1}function Pt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Ce(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),L=Math.min(L+1,e.length-1),ne(e)):t.key==="ArrowUp"?(t.preventDefault(),L=Math.max(L-1,-1),ne(e)):t.key==="Enter"?(t.preventDefault(),L>=0&&A[L]&&re(L)):t.key==="Escape"&&(t.preventDefault(),st())}function ne(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===L),e.setAttribute("aria-selected",String(s===L))}),L>=0&&t[L]?.scrollIntoView({block:"nearest"})}function re(t){let e=A[t];!e||!Mt||(st(),Mt(e))}function Ct(t){let e=document.getElementById("omni-listbox");if(!e)return;L=-1,A=[];let s=o.data?.songs||[],n=o.data?.streams||[],a=Y||[],i=C(t),r="",d=0;if(!o.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!i){let p=s.slice(0,8);if(p.length){r+=tt("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let m of p)A.push({type:"song",song:m}),r+=ae(m,d++,"")}e.innerHTML=r||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let c=s.filter(p=>C(p.title).includes(i)||C(p.artist).includes(i)).slice(0,8);if(c.length){r+=tt("\u{1F3B5} \u66F2");for(let p of c)A.push({type:"song",song:p}),r+=ae(p,d++,i)}if(a.length){let p=a.filter(m=>Ae(m,t)).slice(0,6);if(p.length){r+=tt("\u{1F3AC} \u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2");for(let m of p)A.push({type:"music-video",video:m}),r+=Pe(m,d++,t)}}let u=new Set,v=[];for(let p of s)if(C(p.artist).includes(i)&&!u.has(p.artist)&&(u.add(p.artist),v.push(p.artist),v.length>=4))break;if(v.length){r+=tt("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let p of v){let m=s.filter(h=>h.artist===p).length;A.push({type:"artist",artist:p}),r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${d++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${et(f(p),i)}</span>
          <span class="omni-item-meta">${m}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(n.length){let p=n.filter(m=>C(m.title).includes(i)||m.songs?.some(h=>C(h.title).includes(i)||C(h.artist).includes(i))).slice(0,5);if(p.length){r+=tt("\u{1F4C5} \u914D\u4FE1\u67A0");for(let m of p){A.push({type:"stream",stream:m});let h=m.channel==="new"?"\u65B0ch":m.channel==="old"?"\u65E7ch":"";r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${d++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${et(f(m.title||"\u914D\u4FE1"),i)}</span>
            <span class="omni-item-meta">${T(m.date)}${h?" \xB7 "+h:""} \xB7 ${m.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}r||(r=`<div class="omni-empty">\u300C${f(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=r}function tt(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function ae(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${et(f(t.title),s)}</span>
      <span class="omni-item-meta">${et(f(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function Pe(t,e,s){let n=oe(t),a=t.originalArtist||t.character||n;return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3AC}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${et(f(t.title||"\u52D5\u753B"),s)}</span>
      <span class="omni-item-meta">${f(n)}${a?" \xB7 "+f(a):""} \xB7 \u52D5\u753B\u3067\u898B\u308B</span>
    </div>
  </div>`}function Ie(){return Y!==null?Promise.resolve(Y):ft||(ft=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>(Y=Array.isArray(t?.videos)?t.videos:[],Y)).catch(()=>(Y=[],Y)),ft)}function Ae(t,e){let s=ce(e);if(!s.length)return!1;let n=De(t);return s.every(a=>n.includes(a))}function De(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(n=>n.trim()).filter(Boolean);return C([e,...s,t.originalArtist,t.character,t.type,oe(t)].filter(Boolean).join(" "))}function oe(t){switch(t?.type){case"cover":return"\u6B4C\u307F\u305F";case"office":return"Re:AcT\u30AA\u30EA\u66F2";case"character":return"\u30AD\u30E3\u30E9\u30BD\u30F3";default:return"\u30AA\u30EA\u66F2"}}function ce(t){return C(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function C(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/\s+/g," ").trim()}function et(t,e){let n=ce(e).find(r=>r&&t.toLowerCase().includes(r))||C(e);if(!n)return t;let i=t.toLowerCase().indexOf(n);return i<0?t:t.slice(0,i)+'<mark class="hl">'+t.slice(i,i+n.length)+"</mark>"+t.slice(i+n.length)}ee();Gt();var me={dashboard:()=>import("./chunk-MEU45MEY.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-IOZDXE7K.js").then(t=>t.renderRanking),songs:()=>import("./chunk-4MYYEN4P.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-SZMDTMET.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-KSSYRF3L.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-P4VA5KBC.js").then(t=>t.renderPlaylists)},ht=new Map,de=0,Q=null;function kt(t){return Object.prototype.hasOwnProperty.call(me,t)}async function Ve(t){ht.has(t)||ht.set(t,me[t]());try{return await ht.get(t)}catch(e){throw ht.delete(t),e}}function fe(t){return["dashboard","timeline","analytics"].includes(t)}function He(t,e={}){let s=l(`#panel-${t}`);if(!s)return;let n={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${f(n[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function Ne(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function Be(t){if(o.channelData?.fullLoaded)return;o.channelData=t;let e=R(o.channel)?o.channel:Z,s=R(e);s&&(o.data=s),!fe(o.activeTab)&&o.data&&O(o.activeTab,{autoLoad:!1})}function qe(t){o.channelData=t,o.channelData.fullLoaded=!0;let e=R(o.channel)?o.channel:Z;St(e,{resetSearch:!1,updateUrl:!1,render:!1}),O(o.activeTab,{autoLoad:!1})}function he(){return Q=Xt({meta:o.channelData,onSongsReady:Be}).then(qe).finally(()=>{Q=null}),Q}async function Dt(){o.channelData?.fullLoaded||(Q||he(),await Q)}async function O(t=o.activeTab,e={}){if(t!=="playlists"&&(!o.data||!kt(t))||!kt(t))return;let s=o.channelData?.partialLoaded||o.channelData?.fullLoaded,n=o.channelData?.fullLoaded;if(t==="playlists"?!1:fe(t)?!n:!s)if(e.autoLoad){Ne(t);try{await Dt()}catch(r){console.error("[data] full load failed",r);let d=l(`#panel-${t}`);d&&(d.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${f(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${f(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,d.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{O(t,{autoLoad:!0})}));return}}else{He(t,{initial:e.initial});return}let i=++de;try{let r=await Ve(t);if(i!==de||t!==o.activeTab||!o.data)return;t==="songs"&&Wt(o.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let d=l(`#panel-${t}`);d&&(d.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${f(r?.message||String(r))}</div>
        </div>
      `)}}function B(t,e={}){kt(t)||(t="dashboard");let s=l("#stream-viewer");if(t!=="player"&&s&&!s.hidden&&!M&&!U(s)){pt=t,Lt=e,dt();return}o.activeTab=t,be(t),e.updateUrl!==!1&&W({tab:t}),O(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function be(t){_(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),_(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function R(t){return o.channelData?t==="all"?o.channelData.combined:o.channelData.channels[t]||null:null}function St(t,e={}){let s=R(t);s&&(o.channel=t,Ls(t),o.data=s,o.timelineFilter=null,o.timelineFocus=null,o.timelineLimit=12,o.songsLimit=100,e.resetSearch!==!1&&(o.songsQuery="",o.songsGenre="all"),Et(),_("#channel-switch [data-channel]").forEach(n=>n.classList.toggle("active",n.dataset.channel===t)),Vt(),e.updateUrl!==!1&&W({tab:o.activeTab,channel:t,q:o.songsQuery}),gs(),e.render!==!1&&O(o.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function Re(t,e={}){o.audience=t==="singer"?"singer":"listener",o.singerMode=o.audience==="singer",o.singerMode||(o.singerPreset="all"),_(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===o.audience)}),document.body.dataset.audience=o.audience,Vt(),o.audience==="singer"?(o.songsLimit=100,B("songs",{autoLoad:e.autoLoad!==!1})):o.data&&O(o.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Vt(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",s=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${s}`}function Ue(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),s=l("#topbar-actions");if(!t||!e||!s)return;let n=i=>{e.checked=i,s.classList.toggle("is-open",i),t.setAttribute("aria-expanded",String(i))},a=()=>{n(!1),t.focus()};t.addEventListener("click",i=>{i.stopPropagation(),requestAnimationFrame(()=>n(e.checked))}),t.addEventListener("keydown",i=>{i.key!=="Enter"&&i.key!==" "||(i.preventDefault(),n(!e.checked))}),e.addEventListener("change",()=>{n(e.checked)}),document.addEventListener("click",i=>{s.classList.contains("is-open")&&(i.target.closest("#topbar-actions")||i.target.closest("#mobile-menu-toggle")||i.target.closest("#mobile-menu-state")||a())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&a()}),s.addEventListener("click",i=>{i.stopPropagation()}),Vt()}function je(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,n=420,a=()=>{!e||e.src||(e.src=e.dataset.src||"")},i=()=>{s=!1;let d=window.scrollY>n;d&&a(),t.hidden=!d,t.classList.toggle("is-visible",d),t.setAttribute("aria-hidden",String(!d)),t.tabIndex=d?0:-1},r=()=>{s||(s=!0,requestAnimationFrame(i))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),i()}function Ye(){if(o.channelData)for(let t of _("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!o.channelData.combined:!!(o.channelData.channels&&o.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function Fe({key:t,title:e,artist:s}){o.timelineFilter&&o.timelineFilter.key===t&&o.activeTab==="timeline"?o.timelineFilter=null:o.timelineFilter={key:t,title:e,artist:s},o.timelineFocus=null,o.timelineLimit=12,B("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Oe(t,e){o.timelineFilter={key:t.key,title:t.title,artist:t.artist},o.timelineFocus=z(e),o.timelineLimit=9999,B("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Ke(t){Ht(t.artist||"")}function Ht(t){let e=String(t||"").replace(/"/g,"");o.songsQuery=e?`artist:"${e}"`:"",o.songsLimit=100,W({tab:"songs",q:o.songsQuery}),B("songs",{updateUrl:!1})}function yt(t){return(o.data?.songs||[]).find(e=>e.key===t)||null}function x(t){let e=String(t||""),s=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let n of s){let a=e.match(n);if(a)return a[1]}return""}function lt(t){let e=x(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function ze(t){let e=x(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function Ge(t){let e=x(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function ut(){gt&&(clearInterval(gt),gt=null)}function Nt(){ut(),gt=setInterval(()=>{if($(),!!w)try{let t=w.getDuration?.()||0,e=w.getCurrentTime?.()||0,s=t>0?Math.min(e/t*100,100):0,n=l("#yt-mini-progress-fill");n&&(n.style.width=`${s}%`);let i=w.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,r=l("#yt-mini-play");r&&r.setAttribute("data-playing",i?"1":"0")}catch{}},400)}function vt(){if(ut(),w){try{w.destroy()}catch{}w=null}let t=l("#yt-player-container");t&&(t.innerHTML="")}function Qe(){if(w?.getCurrentTime)try{return w.getCurrentTime()}catch{}return Math.max(0,ot+(Date.now()-jt)/1e3)}function U(t=l("#stream-viewer")){return!!t&&(t.classList.contains("sv-minified")||t.classList.contains("sv-music-minified"))}function $(){let t=l("#stream-viewer");if(!U(t))return;let e=l("#sv-player-wrap"),s=t.classList.contains("sv-music-minified")?document.querySelector("#music-bar .mbar-video-wrap"):document.querySelector("#yt-player-panel .yt-mini-video-wrap");if(!e||!s)return;let n=s.getBoundingClientRect();e.style.left=`${n.left}px`,e.style.top=`${n.top}px`,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`}function Je(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||!e||!g)return!1;Rt();let s=l("#yt-player-panel");if(!s)return!1;E=e;try{ot=Math.floor(g.getCurrentTime?.()??0)}catch{ot=0}jt=Date.now();let n=l("#yt-mini-title");n&&(n.textContent=e.title||"");let a=l("#yt-mini-hint");a&&(a.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),s.classList.add("has-stream"),s.hidden=!1,w=g,g=null,t.classList.add("sv-minified"),document.body.classList.add("has-sv-mini"),document.body.style.overflow="",xt(),I(),$(),requestAnimationFrame($),setTimeout($,120),setTimeout($,400),window.addEventListener("resize",$),Nt();try{let i=w.getPlayerState?.();l("#yt-mini-play")?.setAttribute("data-playing",i===window.YT?.PlayerState?.PLAYING?"1":"0")}catch{}return J(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,F()),!0}function ye(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",$),ut(),t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini");let e=l("#sv-player-wrap");e&&(e.style.cssText=""),g=w,w=null;let s=l("#yt-player-panel");return s&&(s.hidden=!0),Yt(),I(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function ge(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",$),ut(),t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music");let e=l("#sv-player-wrap");return e&&(e.style.cssText=""),g=w,w=null,Yt(),I(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function we(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",$),ut(),X(),++D,t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");return e&&(e.style.cssText="",e.innerHTML=""),vt(),E=null,I(),!0}function Xe(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||t.hidden||!e?.url)return;let s=qt(q().t),n={...e,title:e.title||(e.isMv?"\u52D5\u753B":"\u6B4C\u67A0"),type:e.isMv?e.type||"original":"stream",sub:e.isMv?e.originalArtist||e.character||e.sub||"":`${T(e.date)} \u7B2C${e.index}\u67A0`,_stream:e};if(!g){import("./chunk-JRCBHL36.js").then(i=>i.playMusicBarVideo?.(n,s)).catch(()=>{});return}try{ot=Math.floor(g.getCurrentTime?.()??s)}catch{ot=s}jt=Date.now(),w=g,g=null,E=null,M=!1,t.classList.remove("sv-fullscreen","sv-minified"),t.classList.add("sv-music-minified"),document.body.classList.remove("has-sv-fullscreen","has-sv-mini"),document.body.classList.add("has-sv-music"),document.body.style.overflow="",t.hidden=!1;let a=l("#yt-player-panel");a&&(a.hidden=!0),xt(),I(),$(),requestAnimationFrame($),setTimeout($,120),setTimeout($,400),window.addEventListener("resize",$),Nt(),import("./chunk-JRCBHL36.js").then(i=>{i.adoptExternalPlayer?.(n,w,{restore:ge,close:we}),$(),requestAnimationFrame($),setTimeout($,120),setTimeout($,400)}).catch(()=>{})}function Bt(){let t=l("#stream-viewer");if(t?.classList.contains("sv-music-minified"))return we();if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",$),X(),++D,t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");e&&(e.style.cssText="",e.innerHTML=""),vt();let s=l("#yt-player-panel");return s&&(s.hidden=!0),E=null,I(),!0}var nt=null;function qt(t=0){let e=[g,w];for(let s of e)try{let n=s?.getCurrentTime?.();if(Number.isFinite(n))return Math.max(0,Math.floor(n))}catch{}return Math.max(0,Math.floor(Number(t)||0))}function Ze(t,e=0,s={}){if(!t)return"";let n=q(),a=new URLSearchParams,i=n.channel||o.channel;return i&&i!=="new"&&a.set("ch",i),a.set("v",t),s.includeTime!==!1&&e>5&&a.set("t",String(Math.floor(e))),`${location.origin}${location.pathname}?${a}`}function I(){let t=l("#stream-viewer"),s=t&&!t.hidden&&!U(t)&&t._currentStream?.url?x(t._currentStream.url):"",n=s?qt(q().t):0;W({v:s||"",t:n>5?n:0},{replace:!0}),s&&!nt&&(nt=setInterval(I,5e3)),!s&&nt&&(clearInterval(nt),nt=null)}function We(){if(l("#sv-share-modal"))return;let t=document.createElement("div");t.id="sv-share-modal",t.hidden=!0,t.innerHTML=`
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
    </div>`,document.body.appendChild(t);let e=()=>{t.hidden=!0};t.querySelector(".sv-share-backdrop").addEventListener("click",e),l("#sv-share-close").addEventListener("click",e),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&(a.preventDefault(),a.stopPropagation(),e())},{capture:!0});let s=()=>{let a=t._shareState;if(!a)return;let i=l("#sv-share-ts-check")?.checked&&a.t>0,r=Ze(a.id,a.t,{includeTime:i}),d=l("#sv-share-url");d&&(d.value=r);let c=a.title?`${a.title}`:"\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9",u=l("#sv-share-x");u&&(u.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(c)}&url=${encodeURIComponent(r)}`);let v=l("#sv-share-line");return v&&(v.href=`https://line.me/R/share?text=${encodeURIComponent(`${c}
${r}`)}`),r};l("#sv-share-ts-check").addEventListener("change",s),t._rebuild=s,l("#sv-share-url").addEventListener("focus",a=>a.target.select()),l("#sv-share-copy").addEventListener("click",async()=>{let a=l("#sv-share-url")?.value;if(!a)return;let i=!1;try{await navigator.clipboard.writeText(a),i=!0}catch{try{l("#sv-share-url").select(),i=document.execCommand("copy")}catch{}}let r=l("#sv-share-copy");r&&(r.textContent=i?"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",r.classList.add("copied"),setTimeout(()=>{r.textContent="\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",r.classList.remove("copied")},1600))});let n=l("#sv-share-native");navigator.share&&n&&(n.hidden=!1,n.addEventListener("click",async()=>{let a=t._shareState,i=l("#sv-share-url")?.value;if(i)try{await navigator.share({title:a?.title||"",url:i})}catch{}}))}function ts(){let e=l("#stream-viewer")?._currentStream;if(!e?.url)return;let s=x(e.url);if(!s)return;We();let n=l("#sv-share-modal"),a=qt(q().t);n._shareState={id:s,t:a,title:e.title||""};let i=l("#sv-share-video-title");i&&(i.textContent=e.title||"(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)");let r=l("#sv-share-ts-row"),d=l("#sv-share-ts-check"),c=l("#sv-share-ts-label");r&&(r.hidden=a<=5),d&&(d.checked=a>5),c&&(c.textContent=N(a)),n._rebuild?.(),n.hidden=!1}async function es(){let t=q();if(!t.v)return!1;let e=t.v,s=t.t;try{await Dt()}catch{}let n=[];o.channelData?.combined&&n.push(o.channelData.combined),Object.values(o.channelData?.channels||{}).forEach(a=>{a&&n.push(a)});for(let a of n){let i=(a.streams||[]).find(r=>x(r.url)===e);if(i)return S(i,s),!0}try{let r=((await(await fetch("data/music.json")).json())?.videos||[]).find(d=>x(d.url)===e);if(r)return S({url:r.url,title:r.title,isMv:!0},s),!0}catch{}return S({url:`https://www.youtube.com/watch?v=${e}`,title:"",isMv:!0},s),!0}function $t(t,e=0,s=""){let n=x(t);if(!n)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}{let c=l("#stream-viewer");if(c&&!c.hidden&&!M)if(U(c))Bt();else{++D,c.hidden=!0,c._currentStream=null,g=null;let u=l("#sv-player-wrap");u&&(u.innerHTML=""),document.body.style.overflow="",E=null,Lt={},xt(),I()}}Ut(),Rt();let a=l("#yt-player-container"),i=l("#yt-player-panel");if(!a||!i)return;vt();let r=l("#yt-mini-title");r&&(r.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let d=l("#yt-mini-hint");d&&(d.textContent=E?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),i.classList.toggle("has-stream",!!E),i.hidden=!1,Le(()=>{let c=document.createElement("div");a.appendChild(c);try{w=new window.YT.Player(c,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:u=>{let v=F();try{u.target.setVolume(v)}catch{}if(J(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,v),e>5)try{u.target.seekTo(e,!0)}catch{}Nt()},onStateChange:u=>{let v=u.data===window.YT.PlayerState.PLAYING,p=l("#yt-mini-play");p&&p.setAttribute("data-playing",v?"1":"0")}}})}catch{let v=e>0?`&start=${Math.floor(e)}`:"";a.innerHTML=`<iframe src="https://www.youtube.com/embed/${n}?autoplay=1&playsinline=1${v}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function Rt(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,!Bt()&&(vt(),E=null)}),l("#yt-mini-play").addEventListener("click",()=>{if(w)try{w.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?w.pauseVideo():w.playVideo()}catch{}}),l("#yt-mini-restore").addEventListener("click",()=>{ye()||E&&S(E,Qe())}),l("#yt-mini-progress-bar").addEventListener("click",n=>{if(!w)return;let i=n.currentTarget.getBoundingClientRect(),r=Math.max(0,Math.min(1,(n.clientX-i.left)/i.width));try{let d=w.getDuration?.()||0;d>0&&w.seekTo(r*d,!0)}catch{}});let e=l("#yt-mini-vol-slider"),s=l("#yt-mini-vol-btn");if(e){let n=F();e.value=n,e.style.setProperty("--pct",`${n}%`),s&&(s.textContent=rt(n)),e.addEventListener("input",a=>{let i=parseInt(a.target.value);if(a.target.style.setProperty("--pct",`${i}%`),At(i),s&&(s.textContent=rt(i)),w)try{w.setVolume(i)}catch{}})}if(s){let n=80;s.addEventListener("click",()=>{if(!e)return;let a=parseInt(e.value),i=a>0?0:n||80;a>0&&(n=a),J(e,s,w,i)})}}var ke=!1,$e=[];window.onYouTubeIframeAPIReady=()=>{ke=!0,$e.splice(0).forEach(t=>t()),import("./chunk-JRCBHL36.js").then(t=>t.notifyYtReady()).catch(()=>{})};function Ut(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function Le(t){if(ke&&window.YT?.Player){t();return}$e.push(t)}var F=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),At=t=>localStorage.setItem("kanaVol",String(t)),rt=t=>t===0?"\u{1F507}":t<50?"\u{1F509}":"\u{1F50A}";function J(t,e,s,n){if(t&&(t.value=n,t.style.setProperty("--pct",`${n}%`)),e&&(e.textContent=rt(n)),s)try{s.setVolume(n)}catch{}}var g=null,D=0,E=null,ot=0,jt=0,M=!1,pt="timeline",Lt={},P={},V=!1,H=!1,w=null,gt=null,wt=null;function Yt(){pt=o.activeTab||"timeline",o.activeTab="player",_(".tab-btn").forEach(t=>t.classList.remove("active")),_(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function xt(){let t=Lt;Lt={},B(pt||"timeline",t)}function ss(){M=!0;let t=l("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=l("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function N(t){let e=Math.floor(t),s=Math.floor(e/3600),n=Math.floor(e%3600/60),a=e%60;return s>0?`${s}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${n}:${String(a).padStart(2,"0")}`}function Se(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function ct(t){try{return JSON.parse(localStorage.getItem(Se(t))||"null")||{}}catch{return{}}}function It(t,e){try{localStorage.setItem(Se(t),JSON.stringify(e))}catch{}}function ns(t,e,s){let n=s[e],a=n!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${f(N(n))} \u306B\u79FB\u52D5">${f(N(n))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",r=(P[e]||[]).map(u=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${u.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${f(N(u.timeSeconds))}">${f(N(u.timeSeconds))}</button>`).join(""),d=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,c=`<div class="sv-cts-row">${r}${d}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${f(t.title)}</span>
      <span class="sv-song-artist">${f(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${a}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${c}
  </div>`}async function as(t){if(P={},!t?.channel||t?.index==null)return;try{let n=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,a=await fetch(n);if(!a.ok)return;let i=await a.json();for(let r of i.items||[])P[r.songIndex]||(P[r.songIndex]=[]),P[r.songIndex].push({timeSeconds:r.timeSeconds,note:r.note??null})}catch{}let e=l("#stream-viewer");if(!e||e._currentStream!==t)return;let s=l("#sv-setlist");s&&it(s,t.songs,ct(t)),ls(t)}function is(t,e,s){l("#sv-cts-modal")?.remove();let n=g?.getCurrentTime?.()??0,a=N(Math.floor(n)),i=document.createElement("div");i.id="sv-cts-modal",i.className="sv-cts-modal-overlay",i.innerHTML=`
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
  `,document.body.appendChild(i);let r=()=>i.remove();i.querySelector(".sv-cts-modal-close").addEventListener("click",r),i.querySelector(".sv-cts-modal-cancel").addEventListener("click",r),i.addEventListener("click",d=>{d.target===i&&r()}),i.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let d=i.querySelector("#sv-cts-ts-input").value.trim(),c=i.querySelector("#sv-cts-note-input").value.trim()||null,u=Ft(d),v=i.querySelector("#sv-cts-status");if(u===null){v.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",v.className="sv-cts-modal-status error",v.hidden=!1;return}let p=i.querySelector("#sv-cts-submit");p.disabled=!0,p.textContent="\u9001\u4FE1\u4E2D\u2026";try{let m=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:u,submitterNote:c})});if(m.ok)v.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",v.className="sv-cts-modal-status success",v.hidden=!1,p.hidden=!0,i.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let h=await m.json().catch(()=>({}));v.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${h.error||m.statusText}`,v.className="sv-cts-modal-status error",v.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}catch(m){v.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${m.message}`,v.className="sv-cts-modal-status error",v.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>i.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function d(c){c.key==="Escape"&&(r(),document.removeEventListener("keydown",d))})}function ls(t){let e=l("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let n=Object.keys(P).length>=t.songs.length;e.textContent=n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function rs(t){l("#sv-bulk-modal")?.remove();let e=ct(t),a=Object.keys(P).length>=t.songs.length,i=t.songs.map((c,u)=>{let v=e[u]!=null?N(e[u]):"",p=P[u]?.[0]?.timeSeconds!=null?N(P[u][0].timeSeconds):"",m=v||p;return`
      <div class="sv-bulk-row" data-idx="${u}">
        <span class="sv-bulk-num">${u+1}</span>
        <span class="sv-bulk-title" title="${f(c.title)}">${f(c.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${f(m)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${u}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${u}">\u23F1</button>
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
  `,document.body.appendChild(r);let d=()=>r.remove();r.querySelector(".sv-cts-modal-close").addEventListener("click",d),r.querySelector(".sv-cts-modal-cancel").addEventListener("click",d),r.addEventListener("click",c=>{c.target===r&&d()}),r.querySelector(".sv-paste-apply").addEventListener("click",()=>{let u=(r.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(m=>m.trim()).filter(Boolean),v=0;for(let m of u){let h=hs(m);if(!h)continue;let y=bs(h.title,h.artist,t.songs);if(y>=0){let b=r.querySelector(`[data-bulk-ts-idx="${y}"]`);b&&(b.value=h.start,v++)}}let p=r.querySelector(".sv-paste-result");p&&(p.textContent=v>0?`${u.length}\u884C\u3092\u89E3\u6790 \u2192 ${v}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",p.hidden=!1)}),r.querySelector(".sv-bulk-rows").addEventListener("click",c=>{let u=c.target.closest("[data-bulk-now]");if(!u)return;let v=parseInt(u.dataset.bulkNow,10),p=g?.getCurrentTime?.();if(p!=null){let m=r.querySelector(`[data-bulk-ts-idx="${v}"]`);m&&(m.value=N(Math.floor(p)))}}),r.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let c=r.querySelector("#sv-bulk-note").value.trim()||null,u=r.querySelector("#sv-bulk-status"),v=r.querySelector("#sv-bulk-submit"),p=[];if(r.querySelectorAll("[data-bulk-ts-idx]").forEach(y=>{let b=parseInt(y.dataset.bulkTsIdx,10),k=Ft(y.value.trim());k!==null&&p.push({songIndex:b,timeSeconds:k})}),!p.length){u.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",u.className="sv-cts-modal-status error",u.hidden=!1;return}v.disabled=!0,v.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${p.length})`,u.hidden=!0;let m=0,h=0;await Promise.all(p.map(async y=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:y.songIndex,timeSeconds:y.timeSeconds,submitterNote:c})})).ok?m++:h++}catch{h++}v.textContent=`\u7533\u8ACB\u4E2D\u2026 (${m+h}/${p.length})`})),h===0?(u.textContent=`${m}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,u.className="sv-cts-modal-status success",v.hidden=!0,r.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(u.textContent=`${m}\u4EF6\u6210\u529F / ${h}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,u.className="sv-cts-modal-status error",v.disabled=!1,v.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),u.hidden=!1}),document.addEventListener("keydown",function c(u){u.key==="Escape"&&(d(),document.removeEventListener("keydown",c))})}function xe(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function os(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function cs(t,e){let s=xe(),n=s.find(a=>String(a.id)===String(t));return n?(n.streams||(n.streams=[]),n.streams.includes(e)||(n.streams.push(e),os(s)),!0):!1}function ds(){let t=o.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let n=t.findIndex(a=>a.channel===s.channel&&a.index===s.index);n<0||n>=t.length-1||S(t[n+1])}async function us(t){let e=await _e(),s=x(t?.url);if(!s||!e.length)return;let n=e.findIndex(i=>x(i.url)===s);if(n<0||n>=e.length-1)return;let a=e[n+1];S({...a,isMv:!0})}function Te(t){if(!t||U(t))return;let e=g||w;if(H&&e){try{e.seekTo(0,!0),e.playVideo()}catch{}return}if(!V)return;let s=t._currentStream;s?.isMv?us(s):ds()}function X(){wt&&(clearInterval(wt),wt=null)}function vs(t,e){X();let s=!1;wt=setInterval(()=>{if(t!==D||e.hidden||!g){X();return}try{let n=g.getPlayerState?.();n===window.YT?.PlayerState?.ENDED?(s||Te(e),s=!0):n===window.YT?.PlayerState?.PLAYING&&(s=!1)}catch{}},700)}function ue(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${f(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=lt(t.url),n=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${f(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${f(n)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${f(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${f(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${T(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function ps(t){let e=l("#sv-below-player");if(!e)return;let s=o.data?.streams||[],n=s.findIndex(v=>v.channel===t.channel&&v.index===t.index),a=n>=0&&n<s.length-1?s[n+1]:null,i=n>0?s[n-1]:null,r=new Set(t.songs.map(v=>v.title)),d=s.filter((v,p)=>p!==n).map(v=>{let p=v.songs.filter(m=>r.has(m.title));return{stream:v,overlap:p.length,sharedSongs:p.slice(0,3).map(m=>m.title)}}).filter(v=>v.overlap>0).sort((v,p)=>p.overlap-v.overlap).slice(0,8),c=xe(),u=z(t);e.innerHTML=`
    <div class="sv-bp-wrap">

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
            <span class="sv-bp-ap-switch${H?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${H?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          ${a?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${f(a.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${ue(a,"older")}
          ${ue(i,"newer")}
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
            <span class="sv-bp-stat-val">${T(t.date)}</span>
            <span class="sv-bp-stat-label">\u914D\u4FE1\u65E5</span>
          </div>
        </div>
      </div>

      <!-- \u95A2\u9023\u914D\u4FE1 -->
      ${d.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u95A2\u9023\u914D\u4FE1 <span class="sv-bp-sh-sub">\uFF08\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${d.map(v=>{let p=lt(v.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${f(v.stream.channel)}" data-bp-index="${v.stream.index}">
              ${p?`<img class="sv-bp-rel-thumb" src="${f(p)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${f(v.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${T(v.stream.date)}</div>
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
          ${c.map(v=>{let p=(v.streams||[]).includes(u);return`<button class="sv-bp-pl-btn${p?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${f(String(v.id))}"${p?" disabled":""}>
              <span class="sv-bp-pl-name">${f(v.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${p?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=v=>{let p=v.target.closest("#sv-ap-check"),m=v.target.closest("#sv-repeat-check");if(p){V=p.checked;let h=p.closest(".sv-bp-ap-switch");h&&h.classList.toggle("sv-bp-ap-switch--on",V)}if(m){H=m.checked;let h=m.closest(".sv-bp-ap-switch");h&&h.classList.toggle("sv-bp-ap-switch--on",H)}},e.onclick=v=>{let p=v.target.closest("[data-bp-action]");if(!p)return;let m=p.dataset.bpAction;if(m==="open-stream"){let h=p.dataset.bpChannel,y=parseInt(p.dataset.bpIndex,10),b=(o.data?.streams||[]).find(k=>k.channel===h&&k.index===y);b&&S(b)}else if(m==="add-pl"){let h=p.dataset.bpPlId;if(cs(h,u)){p.classList.add("sv-bp-pl-btn--added"),p.disabled=!0;let y=p.querySelector(".sv-bp-pl-status");y&&(y.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}}}var at=null;async function _e(){if(at)return at;try{at=(await(await fetch("data/music.json")).json())?.videos||[]}catch{at=[]}return at}function ms(t){let e=String(t||"");return e=e.replace(/【[^】]*】/g," "),e=e.replace(/^\s*MV[⌇|｜♪♬:：\-\s]*/i," "),e=e.split(/[\/／|｜]/)[0],e=e.replace(/歌ってみた|covered?\s*(by.*)?$/gi," "),e.trim()}async function fs(t){let e=l("#sv-below-player");if(!e)return;try{await Dt()}catch{}let s=await _e();if(l("#stream-viewer")?._currentStream!==t)return;let n=o.channelData?.combined?.streams||o.data?.streams||[],a=G(ms(t.title)),i=[];if(a.length>1)for(let m of n){let h=(m.songs||[]).find(y=>{let b=G(y.title);return b===a||b.length>1&&(b.includes(a)||a.includes(b))});h&&i.push({stream:m,songTitle:h.title})}let r=i.slice(0,8),d={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9\u30BD\u30F3",cover:"\u30AB\u30D0\u30FC"},c=s.find(m=>m.url===t.url),u=s.filter(m=>m.url!==t.url).sort((m,h)=>{let y=c&&m.type===c.type?1:0,b=c&&h.type===c.type?1:0;return y!==b?b-y:(h.publishedAt||"").localeCompare(m.publishedAt||"")}).slice(0,12),v=s.findIndex(m=>x(m.url)===x(t.url)),p=v>=0&&v<s.length-1?s[v+1]:null;e.innerHTML=`
    <div class="sv-bp-wrap">
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
            <span class="sv-bp-ap-switch${H?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${H?" checked":""}>
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
          ${r.map(m=>{let h=lt(m.stream.url);return`<button class="sv-bp-rel-card" type="button" data-mv-action="open-stream" data-mv-channel="${f(m.stream.channel)}" data-mv-index="${m.stream.index}">
              ${h?`<img class="sv-bp-rel-thumb" src="${f(h)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${f(m.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${T(m.stream.date)}\u3000\u7B2C${m.stream.index}\u67A0</div>
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
          ${u.map(m=>{let h=lt(m.url);return`<button class="sv-mv-card" type="button" data-mv-action="open-mv" data-mv-url="${f(m.url)}" data-mv-title="${f(m.title)}">
              ${h?`<img class="sv-mv-card-thumb" src="${f(h)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-mv-card-thumb"></div>'}
              <div class="sv-mv-card-body">
                <div class="sv-mv-card-title">${f(m.title)}</div>
                <div class="sv-mv-card-type">${d[m.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB"}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}
    </div>
  `,e.onchange=m=>{let h=m.target.closest("#sv-ap-check"),y=m.target.closest("#sv-repeat-check");if(h){V=h.checked;let b=h.closest(".sv-bp-ap-switch");b&&b.classList.toggle("sv-bp-ap-switch--on",V)}if(y){H=y.checked;let b=y.closest(".sv-bp-ap-switch");b&&b.classList.toggle("sv-bp-ap-switch--on",H)}},e.onclick=m=>{let h=m.target.closest("[data-mv-action]");if(!h)return;let y=h.dataset.mvAction;if(y==="open-stream"){let b=h.dataset.mvChannel,k=parseInt(h.dataset.mvIndex,10),K=(o.channelData?.combined?.streams||o.data?.streams||[]).find(Kt=>Kt.channel===b&&Kt.index===k);K&&S(K)}else y==="open-mv"?S({url:h.dataset.mvUrl,title:h.dataset.mvTitle,isMv:!0}):y==="all-videos"&&B("playlists")}}function it(t,e,s){t.innerHTML=e.map((n,a)=>ns(n,a,s)).join("")}function Ft(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function hs(t){let e=t.match(/^(\d{1,2}:\d{2}(?::\d{2})?)[\s　]+(.+?)\s*\/\s*(.+?)[\s　]+(\d{1,2}:\d{2}(?::\d{2})?)$/);return e?{start:e[1].trim(),title:e[2].trim(),artist:e[3].trim(),end:e[4].trim()}:null}function G(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function bs(t,e,s){let n=G(t),a=G(e),i=-1,r=0;for(let d=0;d<s.length;d++){let c=G(s[d].title),u=G(s[d].artist),v=0;c===n?v+=80:n.length>1&&(c.includes(n)||n.includes(c))&&(v+=40),a&&u===a?v+=20:a&&a.length>1&&(u.includes(a)||a.includes(u))&&(v+=10),v>r&&(r=v,i=d)}return r>=40?i:-1}function Ee(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
  `,t.appendChild(e),l("#sv-close").addEventListener("click",()=>dt()),l("#sv-share-btn").addEventListener("click",ts),l("#sv-music-btn").addEventListener("click",Xe),l("#sv-fullscreen-btn").addEventListener("click",ss);let s=l("#sv-vol-slider"),n=l("#sv-vol-btn");if(s){let a=F();s.value=a,s.style.setProperty("--pct",`${a}%`),n&&(n.textContent=rt(a)),s.addEventListener("input",i=>{let r=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${r}%`),At(r),n&&(n.textContent=rt(r)),g)try{g.setVolume(r)}catch{}})}if(n){let a=80;n.addEventListener("click",()=>{if(!s)return;let i=parseInt(s.value),r=i>0?0:a||80;i>0&&(a=i),J(s,n,g,r),At(r)})}e.querySelectorAll("[data-bc-tab]").forEach(a=>{a.addEventListener("click",()=>{pt=a.dataset.bcTab,dt()})}),l("#sv-import-toggle").addEventListener("click",()=>{let a=l("#sv-import-area");a&&(a.hidden=!a.hidden,a.hidden||l("#sv-import-input")?.focus())}),l("#sv-import-cancel").addEventListener("click",()=>{let a=l("#sv-import-area");a&&(a.hidden=!0);let i=l("#sv-import-input");i&&(i.value="")}),l("#sv-import-apply").addEventListener("click",()=>{let a=e._currentStream;if(!a)return;let i=l("#sv-import-input");if(!i)return;let d=i.value.split(`
`).map(v=>Ft(v)).filter(v=>v!==null);if(!d.length)return;let c=ct(a);d.forEach((v,p)=>{p<a.songs.length&&(c[p]=v)}),It(a,c),it(l("#sv-setlist"),a.songs,c);let u=l("#sv-import-area");u&&(u.hidden=!0),i.value=""}),l("#sv-cts-bulk-btn").addEventListener("click",()=>{let a=e._currentStream;a&&rs(a)}),l("#sv-setlist").addEventListener("click",a=>{let i=a.target.closest("[data-action]");if(!i)return;let r=parseInt(i.dataset.idx,10),d=e._currentStream;if(!d)return;let c=ct(d);if(i.dataset.action==="seek"){if(c[r]!=null&&g?.seekTo){g.seekTo(c[r],!0);try{g.playVideo()}catch{}}}else if(i.dataset.action==="set-ts"){let u=g?.getCurrentTime?.();u!=null&&(c[r]=Math.floor(u),It(d,c),it(l("#sv-setlist"),d.songs,c))}else if(i.dataset.action==="del-ts")delete c[r],It(d,c),it(l("#sv-setlist"),d.songs,c);else if(i.dataset.action==="cts-seek"){let u=Number(i.dataset.ctsSeconds);if(!isNaN(u)&&g?.seekTo){g.seekTo(u,!0);try{g.playVideo()}catch{}}}else if(i.dataset.action==="cts-propose"){let u=d.songs[r];is(d,r,u?.title||`\u66F2 ${r+1}`)}})}function S(t,e=0){if(!t?.url)return;let s=x(t.url);if(!s){$t(t.url);return}Ee(),Ut(),X();let n=l("#stream-viewer");if(U(n)){if(n._currentStream?.url===t.url){if(!ye()&&!window.__restoreMusicExternalPlayer?.()&&ge(),e>0)try{g?.seekTo(Math.floor(e),!0),g?.playVideo()}catch{}return}Bt()}let a=window.__takeOverMusicPlayerVideo?.(t.url)||null;a||import("./chunk-JRCBHL36.js").then(b=>(b.releaseMusicPlayerVideo||b.pauseMusicPlayer)()).catch(()=>{});let i=l("#yt-player-panel");if(i&&!i.hidden){try{w?.pauseVideo()}catch{}i.hidden=!0,vt()}if(E=null,M){M=!1;let b=l("#stream-viewer");b&&b.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}M=!1,Yt();let r=l("#stream-viewer");r.classList.remove("sv-fullscreen"),r.classList.toggle("sv-mv-mode",!!t.isMv),r._currentStream=t;let d=++D,c=r.querySelectorAll("[data-bc-tab]");c[1]&&(t.isMv?(c[1].dataset.bcTab="playlists",c[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(c[1].dataset.bcTab="timeline",c[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let u=l("#sv-bc-title");u&&(u.textContent=t.title||"\u914D\u4FE1");let v=l("#sv-stream-meta");v&&(v.textContent=t.isMv?"":`${T(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let p=l("#sv-yt-link");p&&(p.href=t.url);let m=l("#sv-song-count");if(m&&(m.textContent=t.isMv?"":`${t.songs.length}\u66F2`),P={},t.isMv){let b=l("#sv-setlist");b&&(b.innerHTML="");let k=l("#sv-below-player");k&&(k.innerHTML=""),fs(t)}else{let b=ct(t);it(l("#sv-setlist"),t.songs,b),as(t),ps(t)}r.hidden=!1,document.body.style.overflow="",I(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),g=null;let h=l("#sv-player-wrap");h.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let y=Math.floor(e||a?.currentTime||0);if(a?.player){h.innerHTML="",a.iframe?(a.iframe.style.width="100%",a.iframe.style.height="100%",h.appendChild(a.iframe)):h.innerHTML='<div class="sv-player-loading">\u518D\u751F\u3092\u5F15\u304D\u7D99\u304E\u307E\u3057\u305F</div>',g=a.player;try{g.setVolume?.(F()),y>1&&g.seekTo?.(y,!0),g.playVideo?.()}catch{}J(l("#sv-vol-slider"),l("#sv-vol-btn"),null,F()),vs(d,r);return}Le(()=>{if(d!==D||r.hidden)return;h.innerHTML="";let b=document.createElement("div");h.appendChild(b);try{g=new window.YT.Player(b,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...y>0?{start:y}:{}},events:{onReady:k=>{let mt=F();try{k.target.setVolume(mt)}catch{}J(l("#sv-vol-slider"),l("#sv-vol-btn"),null,mt);try{k.target.setPlaybackQuality("hd1080")}catch{}try{k.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(y>5)try{k.target.seekTo(y,!0)}catch{}},onStateChange:k=>{if(d===D){if(k.data===window.YT.PlayerState.PLAYING)try{k.target.setPlaybackQuality("hd1080")}catch{}k.data===window.YT.PlayerState.ENDED&&Te(r)}},onError:()=>{d===D&&(h.innerHTML=`<iframe src="https://www.youtube.com/embed/${f(s)}?autoplay=1&playsinline=1&rel=0${y>0?`&start=${y}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{h.innerHTML=`<iframe src="https://www.youtube.com/embed/${f(s)}?autoplay=1&playsinline=1&rel=0${y>0?`&start=${y}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function dt(){let t=l("#stream-viewer");if(!t||t.hidden||U(t))return;if(M){M=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let s=l("#sv-close");s&&(s.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let n=l("#sv-fullscreen-btn");n&&n.setAttribute("aria-pressed","false");return}if(Je())return;++D,t.hidden=!0,t._currentStream=null,X(),g=null;let e=l("#sv-player-wrap");e&&(e.innerHTML=""),document.body.style.overflow="",xt(),I()}window.__openStreamViewer=S;function Me(t){let e=yt(t),s=l("#song-modal"),n=l("#song-modal-body"),a=l("#song-modal-title");if(!e||!s||!n||!a)return;Jt(e),a.textContent=e.title;let i=(e.streamRefs||[]).slice(0,8).map(c=>({...c,thumbnail:lt(c.url),thumbnailFallback:ze(c.url),thumbnailTiny:Ge(c.url),detailKey:z(c)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),d=Tt(e.key);n.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${f(e.key)}">${f(e.artist)}</button>
        <div class="song-detail-tags">${r.map(c=>`<span class="tag-badge">${f(c)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${T(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${d?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${f(e.key)}">${d?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${f(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${i.length?i.map(c=>`
        <div class="song-detail-stream">
          ${c.thumbnail&&c.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${f(c.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${f(c.thumbnail)}" data-fallback="${f(c.thumbnailFallback)}" data-tiny="${f(c.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${f(c.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${f(e.key)}" data-streamkey="${f(c.detailKey)}">
            <span>${T(c.date)}</span>
            <strong>${f(c.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,s.hidden=!1,l("#song-modal-close")?.focus()}function ys(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s();let a=n.target.closest("[data-inline-youtube]");if(a){n.preventDefault(),n.stopPropagation(),$t(a.dataset.inlineYoutube);return}let i=n.target.closest("[data-detail-action]");if(i){if(n.stopPropagation(),i.dataset.detailAction==="close"&&s(),i.dataset.detailAction==="favorite"){let r=i.dataset.songkey;zt(r);let d=Tt(r);i.textContent=d?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",i.classList.toggle("primary",d),i.classList.toggle("ghost",!d)}if(i.dataset.detailAction==="timeline"){let r=yt(i.dataset.songkey);s(),r&&Fe(r)}if(i.dataset.detailAction==="stream"){let r=yt(i.dataset.songkey),d=r?.streamRefs?.find(c=>z(c)===i.dataset.streamkey);s(),r&&d&&Oe(r,d)}if(i.dataset.detailAction==="artist"){let r=yt(i.dataset.songkey);s(),r&&Ke(r)}}}),t.addEventListener("error",n=>{let a=n.target.closest?.(".song-detail-thumb");if(!a)return;let i=a.dataset.fallback||a.dataset.tiny||"";if(i&&a.src!==i){a.src=i,a.dataset.fallback===i?delete a.dataset.fallback:delete a.dataset.tiny;return}a.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&s()})}var ve=!1;function gs(){if(!o.data)return;let{stats:t,streams:e=[]}=o.data,s=e[0]?.date||null,n=_t(s),a=t.dataGeneratedDate||o.channelData?.dataGeneratedDate||null,i=_t(a),r=t.channelLabel||t.channelId||"",d=r?`<span class="badge accent" style="margin-right:8px;">${f(r)}</span>`:"";l("#updated-info").innerHTML=d+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${T(a)||"\u2014"}</strong>`+(i!=null?` <span class="badge">${i}\u65E5\u524D</span>`:"");let c=l("#stats-grid");if(!ve)c.innerHTML=`
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
        <div class="stat-value">${pe(o.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,ve=!0;else{let u=c.querySelectorAll(".stat-value");u.length>=6&&(u[0].textContent=j(t.total),u[0].innerHTML+='<span class="stat-unit">\u56DE</span>',u[1].textContent=j(t.repertoire),u[1].innerHTML+='<span class="stat-unit">\u66F2</span>',u[2].textContent=j(t.streams),u[2].innerHTML+='<span class="stat-unit">\u56DE</span>',u[3].textContent=t.avgPerStream,u[3].innerHTML+='<span class="stat-unit">\u66F2</span>',u[4].textContent=n??"\u2014",u[4].innerHTML+='<span class="stat-unit">\u65E5</span>',u[5].textContent=pe(o.data),u[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function pe(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,s=t.streams[0].date;return Math.floor((s-e)/864e5)+1}function ws(){l("#loading").hidden=!1,l("#error").hidden=!0}function ks(){l("#loading").hidden=!0}function $s(t){let e=l("#loading"),s=l("#error"),n=l("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),n&&(n.textContent=t&&t.message?t.message:String(t))}function Ls(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let s=document.getElementById("hero-ch-bg");s&&(s.dataset.mode=t||"all")}var Ss={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:"\u{1F6CD}",label:"official store",url:"https://react.booth.pm"},{icon:"\u{1F310}",label:"official site",url:"https://v-react.com"},{icon:"\u{1F3B5}",label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:"\u{1F3A7}",label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:"\u25B6",label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function bt(t){let e=Ss[t];if(!e)return"";let s=e.bannerUrl?`<img class="ch-card-banner-img" src="${f(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
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
    </div>`}function xs(t){let e=l("#ch-modal"),s=l("#ch-modal-body");if(!e||!s)return;let n="";t==="new"?n=bt("new"):t==="old"?n=bt("old"):n=bt("new")+bt("old"),s.innerHTML=n,e.hidden=!1,l("#ch-modal-close")?.focus()}function Ts(){let t=l("#ch-modal"),e=l("#ch-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s()}),document.querySelectorAll("[data-ch-modal]").forEach(n=>{n.addEventListener("click",()=>xs(n.dataset.chModal))})}function _s(){let t=l("#help-modal"),e=l("#help-btn"),s=l("#help-close");if(!t||!e||!s)return;let n=()=>{t.hidden=!1,s.focus()},a=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",n),s.addEventListener("click",a),t.addEventListener("click",i=>{i.target===t&&a()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&a()})}function Es(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function Ot(){ws();try{let t=await Zt();o.channelData=t,!Q&&!t.fullLoaded&&he();let e=q(),s=!!e.v;o.songsQuery=e.q,o.activeTab=s?"player":kt(e.tab)?e.tab:"dashboard",be(o.activeTab);let n=e.channel||o.channel||Z;if(R(n)||(n=Z),!R(n)){let a=Object.keys(t.channels)[0];a&&(n=a)}if(!R(n))throw new Error("No channel data could be loaded");Ye(),St(n,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0,render:!s}),s&&(await es()||B(e.tab,{updateUrl:!1,initial:!0})),ks()}catch(t){console.error("[init] failed:",t),$s(t)}}function Ms(){if(!o.channelData)return;let t=q();o.songsQuery=t.q,t.channel!==o.channel&&R(t.channel)&&St(t.channel,{resetSearch:!1,updateUrl:!1}),B(t.tab,{updateUrl:!1})}_(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=l("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!M&&!U(s)){pt=e,dt();return}B(e)})});_(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||St(t.dataset.channel))})});window.addEventListener("popstate",Ms);_("[data-audience]").forEach(t=>{t.addEventListener("click",()=>Re(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),Ht(e.dataset.artistSearch||e.textContent||"");return}let s=t.target.closest("[data-playlist-add]");if(s){t.preventDefault(),t.stopPropagation();let r=s.dataset.playlistAdd,d=s.dataset.streamTitle||"";import("./chunk-P4VA5KBC.js").then(c=>c.showAddToPlaylistModal(r,d));return}let n=t.target.closest("[data-stream-play]");if(n){t.preventDefault(),t.stopPropagation();let r=n.dataset.streamPlay,d=(o.data?.streams||[]).find(c=>z(c)===r);d?.url?S(d):n.dataset.inlineYoutube&&$t(n.dataset.inlineYoutube);return}let a=t.target.closest("[data-inline-youtube]");if(a){t.preventDefault(),t.stopPropagation(),$t(a.dataset.inlineYoutube);return}if(Qt(t.target))return;let i=t.target.closest("[data-songkey]");i&&Me(i.dataset.songkey)});l("#retry-btn").addEventListener("click",Ot);l("#reload-btn").addEventListener("click",Ot);_s();Ts();Rt();Ee();ys();Ue();je();Es();import("./chunk-JRCBHL36.js").then(t=>{t.setApiLoader(Ut),t.initMusicPlayer()}).catch(()=>{});ie(t=>{t.type==="song"?Me(t.song.key):t.type==="artist"?Ht(t.artist):t.type==="stream"?S(t.stream):t.type==="music-video"&&S({...t.video,isMv:!0})});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),le();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),te();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let a=l("#help-modal");a&&a.hidden&&(a.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let a=l("#stream-viewer"),i=!!l("#panel-player.active");if(a&&!a.hidden&&(M||i)){t.preventDefault(),dt();return}if(Pt()){t.preventDefault(),st();return}let r=l("#song-modal");if(r&&!r.hidden)return;let d=l("#ch-modal");if(d&&!d.hidden){d.hidden=!0;return}let c=l("#help-modal");if(c&&!c.hidden){c.hidden=!0,l("#help-btn")?.focus();return}let u=l("#songs-search");u&&document.activeElement===u&&u.value&&(t.preventDefault(),u.value="",u.dispatchEvent(new Event("input",{bubbles:!0})))}});se(()=>{o.data&&(Et(),(o.activeTab==="dashboard"||o.activeTab==="analytics")&&O())});function Cs(){Ot()}Cs();
