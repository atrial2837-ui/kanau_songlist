import{b as W,c as X,d as tt,i as et,k as q,l as _}from"./chunk-4TPCNLDP.js";import{a as nt,b as at,e as R,f as it}from"./chunk-SIADDXVK.js";import{a as D}from"./chunk-MKJIXTK4.js";import{I as Y,J as b,L as $,N as k,O as J,a as Q,b as U,c as Z,e as a,f as l,g as v,i as d}from"./chunk-5JCHYUC5.js";var p=-1,g=[],N=null;function lt(t){N=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",s=>{s.target===e&&x()});let n=document.getElementById("omni-input");n.addEventListener("input",()=>ut(n.value)),n.addEventListener("keydown",Mt),document.getElementById("omni-listbox").addEventListener("click",s=>{let o=s.target.closest("[data-omni-idx]");o&&dt(Number(o.dataset.omniIdx))})}function rt(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,p=-1,g=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),ut("")}function x(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),p=-1}function ct(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Mt(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),p=Math.min(p+1,e.length-1),st(e)):t.key==="ArrowUp"?(t.preventDefault(),p=Math.max(p-1,-1),st(e)):t.key==="Enter"?(t.preventDefault(),p>=0&&g[p]&&dt(p)):t.key==="Escape"&&(t.preventDefault(),x())}function st(t){t.forEach((e,n)=>{e.classList.toggle("is-active",n===p),e.setAttribute("aria-selected",String(n===p))}),p>=0&&t[p]?.scrollIntoView({block:"nearest"})}function dt(t){let e=g[t];!e||!N||(x(),N(e))}function ut(t){let e=document.getElementById("omni-listbox");if(!e)return;p=-1,g=[];let n=a.data?.songs||[],s=a.data?.streams||[],o=t.trim().toLowerCase(),i="",r=0;if(!a.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!o){let m=n.slice(0,8);if(m.length){i+=C("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let h of m)g.push({type:"song",song:h}),i+=ot(h,r++,"")}e.innerHTML=i||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let c=n.filter(m=>E(m.title).includes(o)||E(m.artist).includes(o)).slice(0,8);if(c.length){i+=C("\u{1F3B5} \u66F2");for(let m of c)g.push({type:"song",song:m}),i+=ot(m,r++,o)}let u=new Set,f=[];for(let m of n)if(E(m.artist).includes(o)&&!u.has(m.artist)&&(u.add(m.artist),f.push(m.artist),f.length>=4))break;if(f.length){i+=C("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let m of f){let h=n.filter(A=>A.artist===m).length;g.push({type:"artist",artist:m}),i+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${H(d(m),o)}</span>
          <span class="omni-item-meta">${h}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(a.channelData?.fullLoaded&&s.length){let m=s.filter(h=>E(h.title).includes(o)||h.songs?.some(A=>E(A.title).includes(o)||E(A.artist).includes(o))).slice(0,5);if(m.length){i+=C("\u{1F4C5} \u914D\u4FE1\u67A0");for(let h of m)g.push({type:"stream",stream:h}),i+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${r++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${H(d(h.title||"\u914D\u4FE1"),o)}</span>
            <span class="omni-item-meta">${b(h.date)} \xB7 ${h.songs?.length||0}\u66F2</span>
          </div>
        </div>`}}i||(i=`<div class="omni-empty">\u300C${d(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=i}function C(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function ot(t,e,n){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${H(d(t.title),n)}</span>
      <span class="omni-item-meta">${H(d(t.artist||""),n)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function E(t){return String(t||"").toLowerCase()}function H(t,e){if(!e)return t;let s=t.toLowerCase().indexOf(e);return s<0?t:t.slice(0,s)+'<mark class="hl">'+t.slice(s,s+e.length)+"</mark>"+t.slice(s+e.length)}at();Z();var gt={dashboard:()=>import("./chunk-HGAGP5IO.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-AMQYUYKF.js").then(t=>t.renderRanking),songs:()=>import("./chunk-QT7AEQRW.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-3H6TNNZ7.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-GLVWGAKD.js").then(t=>t.renderAnalytics)},P=new Map,mt=0,S=null;function O(t){return Object.prototype.hasOwnProperty.call(gt,t)}async function At(t){P.has(t)||P.set(t,gt[t]());try{return await P.get(t)}catch(e){throw P.delete(t),e}}function yt(t){return["dashboard","timeline","analytics"].includes(t)}function _t(t,e={}){let n=l(`#panel-${t}`);if(!n)return;let s={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};n.innerHTML=`
    <div class="state-card">
      <div class="msg">${d(s[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function Ct(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function Ht(t){if(a.channelData?.fullLoaded)return;a.channelData=t;let e=y(a.channel)?a.channel:D,n=y(e);n&&(a.data=n),!yt(a.activeTab)&&a.data&&L(a.activeTab,{autoLoad:!1})}function Pt(t){a.channelData=t,a.channelData.fullLoaded=!0;let e=y(a.channel)?a.channel:D;B(e,{resetSearch:!1,updateUrl:!1,render:!1}),L(a.activeTab,{autoLoad:!1})}function bt(){return S=X({meta:a.channelData,onSongsReady:Ht}).then(Pt).finally(()=>{S=null}),S}async function It(){a.channelData?.fullLoaded||(S||bt(),await S)}async function L(t=a.activeTab,e={}){if(!a.data||!O(t))return;let n=a.channelData?.partialLoaded||a.channelData?.fullLoaded,s=a.channelData?.fullLoaded;if(yt(t)?!s:!n)if(e.autoLoad){Ct(t);try{await It()}catch(r){console.error("[data] full load failed",r);let c=l(`#panel-${t}`);c&&(c.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${d(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${d(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,c.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{L(t,{autoLoad:!0})}));return}}else{_t(t,{initial:e.initial});return}let i=++mt;try{let r=await At(t);if(i!==mt||t!==a.activeTab||!a.data)return;t==="songs"&&et(a.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let c=l(`#panel-${t}`);c&&(c.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${d(r?.message||String(r))}</div>
        </div>
      `)}}function T(t,e={}){O(t)||(t="dashboard"),a.activeTab=t,kt(t),e.updateUrl!==!1&&_({tab:t}),L(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function kt(t){v(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),v(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function y(t){return a.channelData?t==="all"?a.channelData.combined:a.channelData.channels[t]||null:null}function B(t,e={}){let n=y(t);n&&(a.channel=t,ee(t),a.data=n,a.timelineFilter=null,a.timelineFocus=null,a.timelineLimit=12,a.songsLimit=100,e.resetSearch!==!1&&(a.songsQuery="",a.songsGenre="all"),R(),v("#channel-switch [data-channel]").forEach(s=>s.classList.toggle("active",s.dataset.channel===t)),j(),e.updateUrl!==!1&&_({tab:a.activeTab,channel:t,q:a.songsQuery}),Jt(),e.render!==!1&&L(a.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function Ft(t,e={}){a.audience=t==="singer"?"singer":"listener",a.singerMode=a.audience==="singer",a.singerMode||(a.singerPreset="all"),v(".audience-switch [data-audience]").forEach(n=>{n.classList.toggle("active",n.dataset.audience===a.audience)}),document.body.dataset.audience=a.audience,j(),a.audience==="singer"?(a.songsLimit=100,T("songs",{autoLoad:e.autoLoad!==!1})):a.data&&L(a.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function j(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",n=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${n}`}function Kt(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),n=l("#topbar-actions");if(!t||!e||!n)return;let s=i=>{e.checked=i,n.classList.toggle("is-open",i),t.setAttribute("aria-expanded",String(i))},o=()=>{s(!1),t.focus()};t.addEventListener("click",i=>{i.stopPropagation(),requestAnimationFrame(()=>s(e.checked))}),t.addEventListener("keydown",i=>{i.key!=="Enter"&&i.key!==" "||(i.preventDefault(),s(!e.checked))}),e.addEventListener("change",()=>{s(e.checked)}),document.addEventListener("click",i=>{n.classList.contains("is-open")&&(i.target.closest("#topbar-actions")||i.target.closest("#mobile-menu-toggle")||i.target.closest("#mobile-menu-state")||o())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&o()}),n.addEventListener("click",i=>{i.stopPropagation()}),j()}function Bt(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),n=!1,s=420,o=()=>{!e||e.src||(e.src=e.dataset.src||"")},i=()=>{n=!1;let c=window.scrollY>s;c&&o(),t.hidden=!c,t.classList.toggle("is-visible",c),t.setAttribute("aria-hidden",String(!c)),t.tabIndex=c?0:-1},r=()=>{n||(n=!0,requestAnimationFrame(i))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),i()}function Ut(){if(a.channelData)for(let t of v("#channel-switch [data-channel]")){let e=t.dataset.channel,n=e==="all"?!!a.channelData.combined:!!(a.channelData.channels&&a.channelData.channels[e]);t.disabled=!n,n?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function Yt({key:t,title:e,artist:n}){a.timelineFilter&&a.timelineFilter.key===t&&a.activeTab==="timeline"?a.timelineFilter=null:a.timelineFilter={key:t,title:e,artist:n},a.timelineFocus=null,a.timelineLimit=12,T("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Rt(t,e){a.timelineFilter={key:t.key,title:t.title,artist:t.artist},a.timelineFocus=$(e),a.timelineLimit=9999,T("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function qt(t){z(t.artist||"")}function z(t){let e=String(t||"").replace(/"/g,"");a.songsQuery=e?`artist:"${e}"`:"",a.songsLimit=100,_({tab:"songs",q:a.songsQuery}),T("songs",{updateUrl:!1})}function I(t){return(a.data?.songs||[]).find(e=>e.key===t)||null}function M(t){let e=String(t||""),n=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let s of n){let o=e.match(s);if(o)return o[1]}return""}function Nt(t){let e=M(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function Vt(t){let e=M(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function Ot(t){let e=M(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function K(t){let e=M(t);if(!e)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}wt();let n=l("#yt-player-container"),s=l("#yt-player-panel"),o=l("#yt-player-open");!n||!s||(n.innerHTML=`<iframe src="https://www.youtube.com/embed/${e}?autoplay=1&playsinline=1" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`,o&&(o.href=String(t||"")),s.hidden=!1)}function wt(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
    <div class="yt-player-head">
      <span>\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F</span>
      <a id="yt-player-open" href="#" target="_blank" rel="noopener">YouTube\u3067\u958B\u304F</a>
      <button id="yt-player-close" type="button" aria-label="\u9589\u3058\u308B">\xD7</button>
    </div>
    <div id="yt-player-container"></div>
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0;let e=l("#yt-player-container");e&&(e.innerHTML="")})}var Lt=!1,Tt=[];window.onYouTubeIframeAPIReady=()=>{Lt=!0,Tt.splice(0).forEach(t=>t())};function jt(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function zt(t){if(Lt&&window.YT?.Player){t();return}Tt.push(t)}var w=null,F=0;function ft(t){let e=Math.floor(t),n=Math.floor(e/3600),s=Math.floor(e%3600/60),o=e%60;return n>0?`${n}:${String(s).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${s}:${String(o).padStart(2,"0")}`}function $t(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function Et(t){try{return JSON.parse(localStorage.getItem($t(t))||"null")||{}}catch{return{}}}function pt(t,e){try{localStorage.setItem($t(t),JSON.stringify(e))}catch{}}function Gt(t,e,n){let s=n[e],o=s!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${d(ft(s))} \u306B\u79FB\u52D5">${d(ft(s))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"";return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${d(t.title)}</span>
      <span class="sv-song-artist">${d(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${o}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30E1\u30E2">\u23F1</button></div>
  </div>`}function V(t,e,n){t.innerHTML=e.map((s,o)=>Gt(s,o,n)).join("")}function St(){if(l("#stream-viewer"))return;let t=document.createElement("div");t.id="stream-viewer",t.hidden=!0,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),t.innerHTML=`
    <div class="sv-container">
      <div class="sv-header">
        <button class="sv-close-btn" id="sv-close" type="button">\u2190 \u9589\u3058\u308B</button>
        <div class="sv-title-area">
          <div class="sv-stream-title" id="sv-stream-title"></div>
          <div class="sv-stream-meta" id="sv-stream-meta"></div>
        </div>
        <a class="sv-yt-link" id="sv-yt-link" href="#" target="_blank" rel="noopener">\u2197 YouTube\u3067\u958B\u304F</a>
      </div>
      <div class="sv-body">
        <div class="sv-player-wrap" id="sv-player-wrap">
          <div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>
        </div>
        <div class="sv-panel">
          <div class="sv-panel-head">
            <span>\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8</span>
            <span class="sv-song-count" id="sv-song-count"></span>
          </div>
          <div class="sv-panel-hint">\u23F1 \u3067\u73FE\u5728\u6642\u523B\u3092\u30E1\u30E2 \uFF0F \u30D0\u30C3\u30B8\u3092\u30BF\u30C3\u30D7\u3067\u79FB\u52D5</div>
          <div class="sv-setlist" id="sv-setlist"></div>
        </div>
      </div>
    </div>
  `,document.body.appendChild(t),l("#sv-close").addEventListener("click",Dt),l("#sv-setlist").addEventListener("click",e=>{let n=e.target.closest("[data-action]");if(!n)return;let s=parseInt(n.dataset.idx,10),o=t._currentStream;if(!o)return;let i=Et(o);if(n.dataset.action==="seek"){if(i[s]!=null&&w?.seekTo){w.seekTo(i[s],!0);try{w.playVideo()}catch{}}}else if(n.dataset.action==="set-ts"){let r=w?.getCurrentTime?.();r!=null&&(i[s]=Math.floor(r),pt(o,i),V(l("#sv-setlist"),o.songs,i))}else n.dataset.action==="del-ts"&&(delete i[s],pt(o,i),V(l("#sv-setlist"),o.songs,i))})}function Qt(t){if(!t?.url)return;let e=M(t.url);if(!e){K(t.url);return}St(),jt();let n=l("#stream-viewer");n._currentStream=t;let s=++F;l("#sv-stream-title").textContent=t.title||"\u914D\u4FE1",l("#sv-stream-meta").textContent=`${b(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`;let o=l("#sv-yt-link");o&&(o.href=t.url);let i=l("#sv-song-count");i&&(i.textContent=`${t.songs.length}\u66F2`);let r=Et(t);V(l("#sv-setlist"),t.songs,r),n.hidden=!1,document.body.style.overflow="hidden",l("#sv-close")?.focus(),w=null;let c=l("#sv-player-wrap");c.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>',zt(()=>{if(s!==F||n.hidden)return;c.innerHTML="";let u=document.createElement("div");c.appendChild(u);try{w=new window.YT.Player(u,{videoId:e,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1},events:{onError:()=>{s===F&&(c.innerHTML=`<iframe src="https://www.youtube.com/embed/${d(e)}?autoplay=1&playsinline=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{c.innerHTML=`<iframe src="https://www.youtube.com/embed/${d(e)}?autoplay=1&playsinline=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function Dt(){let t=l("#stream-viewer");if(!t)return;++F,t.hidden=!0,t._currentStream=null,w=null;let e=l("#sv-player-wrap");e&&(e.innerHTML=""),document.body.style.overflow=""}function xt(t){let e=I(t),n=l("#song-modal"),s=l("#song-modal-body"),o=l("#song-modal-title");if(!e||!n||!s||!o)return;W(e),o.textContent=e.title;let i=(e.streamRefs||[]).slice(0,8).map(u=>({...u,thumbnail:Nt(u.url),thumbnailFallback:Vt(u.url),thumbnailTiny:Ot(u.url),detailKey:$(u)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),c=U(e.key);s.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${d(e.key)}">${d(e.artist)}</button>
        <div class="song-detail-tags">${r.map(u=>`<span class="tag-badge">${d(u)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${b(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${c?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${d(e.key)}">${c?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${d(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${i.length?i.map(u=>`
        <div class="song-detail-stream">
          ${u.thumbnail&&u.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${d(u.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${d(u.thumbnail)}" data-fallback="${d(u.thumbnailFallback)}" data-tiny="${d(u.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${d(u.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${d(e.key)}" data-streamkey="${d(u.detailKey)}">
            <span>${b(u.date)}</span>
            <strong>${d(u.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,n.hidden=!1,l("#song-modal-close")?.focus()}function Zt(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let n=()=>{t.hidden=!0};e.addEventListener("click",n),t.addEventListener("click",s=>{s.target===t&&n();let o=s.target.closest("[data-inline-youtube]");if(o){s.preventDefault(),s.stopPropagation(),K(o.dataset.inlineYoutube);return}let i=s.target.closest("[data-detail-action]");if(i){if(s.stopPropagation(),i.dataset.detailAction==="close"&&n(),i.dataset.detailAction==="favorite"){let r=i.dataset.songkey;Q(r);let c=U(r);i.textContent=c?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",i.classList.toggle("primary",c),i.classList.toggle("ghost",!c)}if(i.dataset.detailAction==="timeline"){let r=I(i.dataset.songkey);n(),r&&Yt(r)}if(i.dataset.detailAction==="stream"){let r=I(i.dataset.songkey),c=r?.streamRefs?.find(u=>$(u)===i.dataset.streamkey);n(),r&&c&&Rt(r,c)}if(i.dataset.detailAction==="artist"){let r=I(i.dataset.songkey);n(),r&&qt(r)}}}),t.addEventListener("error",s=>{let o=s.target.closest?.(".song-detail-thumb");if(!o)return;let i=o.dataset.fallback||o.dataset.tiny||"";if(i&&o.src!==i){o.src=i,o.dataset.fallback===i?delete o.dataset.fallback:delete o.dataset.tiny;return}o.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",s=>{s.key==="Escape"&&!t.hidden&&n()})}var ht=!1;function Jt(){if(!a.data)return;let{stats:t,streams:e=[]}=a.data,n=e[0]?.date||null,s=Y(n),o=t.dataGeneratedDate||a.channelData?.dataGeneratedDate||null,i=Y(o),r=t.channelLabel||t.channelId||"",c=r?`<span class="badge accent" style="margin-right:8px;">${d(r)}</span>`:"";l("#updated-info").innerHTML=c+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${b(o)||"\u2014"}</strong>`+(i!=null?` <span class="badge">${i}\u65E5\u524D</span>`:"");let u=l("#stats-grid");if(!ht)u.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${k(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${k(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${k(t.streams)}<span class="stat-unit">\u56DE</span></div>
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
        <div class="stat-value">${vt(a.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,ht=!0;else{let f=u.querySelectorAll(".stat-value");f.length>=6&&(f[0].textContent=k(t.total),f[0].innerHTML+='<span class="stat-unit">\u56DE</span>',f[1].textContent=k(t.repertoire),f[1].innerHTML+='<span class="stat-unit">\u66F2</span>',f[2].textContent=k(t.streams),f[2].innerHTML+='<span class="stat-unit">\u56DE</span>',f[3].textContent=t.avgPerStream,f[3].innerHTML+='<span class="stat-unit">\u66F2</span>',f[4].textContent=s??"\u2014",f[4].innerHTML+='<span class="stat-unit">\u65E5</span>',f[5].textContent=vt(a.data),f[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function vt(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,n=t.streams[0].date;return Math.floor((n-e)/864e5)+1}function Wt(){l("#loading").hidden=!1,l("#error").hidden=!0}function Xt(){l("#loading").hidden=!0}function te(t){let e=l("#loading"),n=l("#error"),s=l("#err-detail");e&&(e.hidden=!0),n&&(n.hidden=!1),s&&(s.textContent=t&&t.message?t.message:String(t))}function ee(t){let e=document.getElementById("page-title");e&&(t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"))}function ne(){let t=l("#help-modal"),e=l("#help-btn"),n=l("#help-close");if(!t||!e||!n)return;let s=()=>{t.hidden=!1,n.focus()},o=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",s),n.addEventListener("click",o),t.addEventListener("click",i=>{i.target===t&&o()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&o()})}function ae(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let n=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(n,{timeout:5e3}):window.setTimeout(n,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function G(){Wt();try{let t=await tt();a.channelData=t,!S&&!t.fullLoaded&&bt();let e=q();a.songsQuery=e.q,a.activeTab=O(e.tab)?e.tab:"dashboard",kt(a.activeTab);let n=e.channel||a.channel||D;if(y(n)||(n=D),!y(n)){let s=Object.keys(t.channels)[0];s&&(n=s)}if(!y(n))throw new Error("No channel data could be loaded");Ut(),Xt(),B(n,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0})}catch(t){console.error("[init] failed:",t),te(t)}}function ie(){if(!a.channelData)return;let t=q();a.songsQuery=t.q,t.channel!==a.channel&&y(t.channel)&&B(t.channel,{resetSearch:!1,updateUrl:!1}),T(t.tab,{updateUrl:!1})}v(".tab-btn").forEach(t=>{t.addEventListener("click",()=>T(t.dataset.tab))});v(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||B(t.dataset.channel))})});window.addEventListener("popstate",ie);v("[data-audience]").forEach(t=>{t.addEventListener("click",()=>Ft(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),z(e.dataset.artistSearch||e.textContent||"");return}let n=t.target.closest("[data-stream-play]");if(n){t.preventDefault(),t.stopPropagation();let i=n.dataset.streamPlay,r=(a.data?.streams||[]).find(c=>$(c)===i);r?.url?Qt(r):n.dataset.inlineYoutube&&K(n.dataset.inlineYoutube);return}let s=t.target.closest("[data-inline-youtube]");if(s){t.preventDefault(),t.stopPropagation(),K(s.dataset.inlineYoutube);return}if(J(t.target))return;let o=t.target.closest("[data-songkey]");o&&xt(o.dataset.songkey)});l("#retry-btn").addEventListener("click",G);l("#reload-btn").addEventListener("click",G);ne();wt();St();Zt();Kt();Bt();ae();lt(t=>{t.type==="song"?xt(t.song.key):t.type==="artist"?z(t.artist):t.type==="stream"&&(a.timelineFocus=$(t.stream),a.timelineFilter=null,a.timelineLimit=9999,T("timeline"),l("#panel-timeline")?.scrollIntoView({behavior:"smooth",block:"start"}))});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,n=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!n&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),rt();return}if(t.key==="t"&&!n&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),nt();return}if(t.key==="?"&&!n&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let o=l("#help-modal");o&&o.hidden&&(o.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let o=l("#stream-viewer");if(o&&!o.hidden){t.preventDefault(),Dt();return}if(ct()){t.preventDefault(),x();return}let i=l("#song-modal");if(i&&!i.hidden)return;let r=l("#help-modal");if(r&&!r.hidden){r.hidden=!0,l("#help-btn")?.focus();return}let c=l("#songs-search");c&&document.activeElement===c&&c.value&&(t.preventDefault(),c.value="",c.dispatchEvent(new Event("input",{bubbles:!0})))}});it(()=>{a.data&&(R(),(a.activeTab==="dashboard"||a.activeTab==="analytics")&&L())});function se(){G()}se();
