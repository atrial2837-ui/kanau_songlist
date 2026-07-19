import{l as it,o as z}from"./chunk-HK256HZ5.js";import"./chunk-J3NRXPJ3.js";import{a as lt,b as rt,c as E}from"./chunk-LXYT6HRB.js";import{e as G}from"./chunk-33BPFLKT.js";import{G as W,I as A,J as Q,K as B,L as V,R as f,a as w,c as i}from"./chunk-J7UMASMC.js";var dt="kanau-music-videos-cache-v2",It='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>',k="grid",h=null,j=null,D=!1,q="",ct=null,C=!1,x=new Set,ut=()=>!1,Z=()=>{};function pt({isActive:t,openAddModal:e}){t&&(ut=t),e&&(Z=e)}function mt(){if(h===null){let t=K();t.length&&(h=t)}return tt(h||[])}async function bt(){if(h!==null){U();return}h=K(),D=!0,U();let t=await yt();D=!1,h=Array.isArray(t)?t:[],U()}function ft(t){if(h!==null)return!0;let e=K();return e.length?(h=e,!0):(yt().then(s=>{h===null&&(h=Array.isArray(s)?s:[]),t?.()}),!1)}function F(){return h||[]}function vt(t){q=t||""}function I(t){if(!t?.startsWith("mv:"))return null;let e=t.slice(3);return(h||[]).find(s=>s.id===e)||null}function H(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function ht(t){let e=t.target.closest("[data-music-view]:not([data-music-select-toggle])");if(e)return k=e.dataset.musicView,Y(),!0;if(t.target.closest("[data-music-select-toggle]"))return C=!C,C||x.clear(),J(),!0;let s=t.target.closest("[data-mv-select]");if(s){let l=s.dataset.mvSelect,r=!x.has(l);r?x.add(l):x.delete(l);let o=s.classList.contains("mv-list-row")?s:s.closest(".mv-card");o&&o.classList.toggle("is-selected",r);let c=o?.querySelector(".mv-card-checkbox, .mv-list-checkbox");return c&&(c.innerHTML=r?f("check"):""),s.setAttribute("aria-pressed",String(r)),Ht(),!0}if(t.target.closest("[data-music-select-all]"))return N(h||[]).forEach(({v:l})=>x.add(l.id)),J(),!0;if(t.target.closest("[data-music-select-clear]"))return x.clear(),J(),!0;if(t.target.closest("[data-music-select-add]")){if(!x.size)return!0;let l=[...h||[]].filter(r=>x.has(r.id)).map(r=>"mv:"+r.id);return Z(l),!0}let a=t.target.closest("[data-playlist-add-mv]");if(a){let l=a.dataset.playlistAddMv,r=a.dataset.streamTitle||"";return Z("mv:"+l,r),!0}let n=t.target.closest("[data-mv-watch]");if(n&&h?.length){if(t.metaKey||t.ctrlKey||t.shiftKey||t.button===1)return!0;t.preventDefault();let l=h[Number(n.dataset.mvWatch)];return l?.url&&z({url:l.url,title:l.title,isMv:!0}),!0}return!1}function X(t,{immediate:e=!1}={}){let s=t.target.closest("#pl-music-search");return s?(q=s.value||"",clearTimeout(ct),e?Y():ct=setTimeout(Y,100),!0):!1}function U(){if(!ut())return;let t=w("#pl-subtab-body");t&&(w("#pl-music-search")?Y():t.innerHTML=tt(h||[]))}function tt(t){return Pt(t)+`<div id="pl-music-results">${gt(t)}</div>`}function Pt(t){let e=et(),a=N(t).length;return`
    <div class="pl-music-viewbar">
      <label class="pl-music-search-wrap">
        <span class="pl-music-search-icon" aria-hidden="true">${f("search")}</span>
        <input id="pl-music-search" class="pl-music-search" type="search"
          value="${i(e)}"
          placeholder="\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3067\u691C\u7D22"
          aria-label="\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2\u3092\u691C\u7D22">
      </label>
      <span class="pl-music-count">${a}${a===t.length?"":` / ${t.length}`}\u4EF6</span>
      <div class="pl-music-views">
        <button class="pl-music-view-btn${k==="grid"?" active":""}" data-music-view="grid"     type="button">\u30B0\u30EA\u30C3\u30C9</button>
        <button class="pl-music-view-btn${k==="list"?" active":""}" data-music-view="list"     type="button">\u30EA\u30B9\u30C8</button>
        <button class="pl-music-view-btn${k==="category"?" active":""}" data-music-view="category" type="button">\u30AB\u30C6\u30B4\u30EA</button>
        <button class="pl-music-view-btn pl-music-select-toggle${C?" active":""}" data-music-select-toggle="1" type="button" ${a?"":"disabled"} data-tooltip="\u8907\u6570\u9078\u629E\u3057\u3066\u307E\u3068\u3081\u3066\u8FFD\u52A0">${f("checkbox")} \u9078\u629E</button>
      </div>
    </div>
    ${C?Vt():""}`}function Vt(){let t=x.size;return`
    <div class="pl-music-selbar">
      <span class="pl-music-selcount" id="pl-music-selcount">${t}\u66F2\u3092\u9078\u629E\u4E2D</span>
      <div class="pl-music-selactions">
        <button class="pl-sel-btn" data-music-select-all="1" type="button">\u8868\u793A\u4E2D\u3092\u3059\u3079\u3066\u9078\u629E</button>
        <button class="pl-sel-btn" data-music-select-clear="1" type="button" ${t?"":"disabled"}>\u9078\u629E\u89E3\u9664</button>
        <button class="pl-sel-btn primary" data-music-select-add="1" type="button" ${t?"":"disabled"}>${f("plus")} ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0</button>
        <button class="pl-sel-btn" data-music-select-toggle="1" type="button">\u5B8C\u4E86</button>
      </div>
    </div>`}function gt(t){let e=N(t);return D&&!t.length?'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p><p class="pl-empty-hint">\u691C\u7D22\u6B04\u306F\u3053\u306E\u307E\u307E\u5165\u529B\u3067\u304D\u307E\u3059</p></div>':t.length?e.length?k==="grid"?ot(e):k==="list"?qt(e):k==="category"?Yt(e):ot(e):D?`<div class="pl-empty-state"><p>\u6700\u65B0\u30C7\u30FC\u30BF\u3092\u78BA\u8A8D\u4E2D\u2026</p><p class="pl-empty-hint">\u300C${i(et())}\u300D\u306E\u5019\u88DC\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</p></div>`:'<div class="pl-empty-state"><p>\u4E00\u81F4\u3059\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093</p><p class="pl-empty-hint">\u300C\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u300D\u306E\u3088\u3046\u306B\u533A\u5207\u3063\u3066\u691C\u7D22\u3067\u304D\u307E\u3059</p></div>':'<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>'}function et(){let t=w("#pl-music-search");return t&&(q=t.value||""),q}function J(){let t=w("#pl-subtab-body");t&&(t.innerHTML=tt(h||[]))}function Ht(){let t=x.size,e=w("#pl-music-selcount");e&&(e.textContent=`${t}\u66F2\u3092\u9078\u629E\u4E2D`);let s=document.querySelector("[data-music-select-add]");s&&(s.disabled=!t,s.innerHTML=`${f("plus")} ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0`);let a=document.querySelector("[data-music-select-clear]");a&&(a.disabled=!t)}function Y(){let t=h||[],e=w(".pl-music-count");if(e){let a=N(t).length;e.textContent=`${a}${a===t.length?"":` / ${t.length}`}\u4EF6`}document.querySelectorAll("[data-music-view]").forEach(a=>{a.classList.toggle("active",a.dataset.musicView===k)});let s=w("#pl-music-results");s&&(s.innerHTML=gt(t))}function K(){try{let t=JSON.parse(localStorage.getItem(dt)||"null");return Array.isArray(t?.videos)?t.videos:[]}catch{return[]}}function Rt(t){try{localStorage.setItem(dt,JSON.stringify({videos:t,cachedAt:Date.now()}))}catch{}}async function yt(){return j||(j=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>{let e=Array.isArray(t?.videos)?t.videos:[];return Rt(e),e}).catch(()=>h||K()),j)}function $t(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[‐-‒–—―ー]/g,"-").replace(/\s+/g," ").trim()}function zt(t){return $t(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function jt(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(n=>n.trim()).filter(Boolean),a=H(t).label;return $t([e,...s,t.originalArtist,t.character,t.type,a].filter(Boolean).join(" "))}function N(t){let e=zt(et()),s=t.map((a,n)=>({v:a,i:n}));return e.length?s.filter(({v:a})=>{let n=jt(a);return e.every(l=>n.includes(l))}):s}function O(t){return t.publishedAt?String(t.publishedAt).replaceAll("-","/"):"\u516C\u958B\u65E5\u672A\u767B\u9332"}function wt(t,e){let s=B(t.url),a=V(t.url),{label:n,cls:l}=H(t),r=E("mv:"+t.id);if(C){let o=x.has(t.id);return`
    <div class="mv-card mv-card--select${o?" is-selected":""}">
      <button class="mv-card-thumb-btn" type="button" data-mv-select="${i(t.id)}" aria-pressed="${o}">
        ${s?`<img class="mv-card-thumb" src="${i(s)}" data-fallback="${i(a)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-checkbox">${o?f("check"):""}</span>
        <span class="mv-type-badge ${l}">${n}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${i(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${i(O(t))}</span>
      </div>
    </div>`}return`
    <div class="mv-card">
      <a class="mv-card-thumb-btn" href="${i(t.url||"#")}" target="_blank" rel="noopener"
        data-mv-watch="${e}" aria-label="\u52D5\u753B\u30D3\u30E5\u30FC\u30EF\u30FC\u3067\u898B\u308B">
        ${s?`<img class="mv-card-thumb" src="${i(s)}" data-fallback="${i(a)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-play-icon">${f("play")}</span>
        <span class="mv-type-badge ${l}">${n}</span>
      </a>
      <button class="pl-sg-add mv-add-btn mv-add-btn--overlay${r?" is-saved":""}" type="button"
        data-playlist-add-mv="${i(t.id)}"
        data-stream-title="${i(t.title||"")}"
        aria-label="${r?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}"
        title="${r?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${It}</button>
      <div class="mv-card-info">
        <span class="mv-card-title">${i(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${i(O(t))}</span>
      </div>
    </div>`}function Dt(t,e){let s=B(t.url),a=V(t.url),{label:n,cls:l,sub:r}=H(t),o=E("mv:"+t.id);if(C){let c=x.has(t.id);return`
    <div class="mv-list-row mv-list-row--select${c?" is-selected":""}" data-mv-select="${i(t.id)}" role="button" aria-pressed="${c}">
      <span class="mv-list-checkbox">${c?f("check"):""}</span>
      <span class="mv-list-thumb">
        ${s?`<img src="${i(s)}" data-fallback="${i(a)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
      </span>
      <div class="mv-list-info">
        <span class="mv-list-title">${i(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${i(O(t))}</span>
      </div>
      <span class="mv-type-badge ${l}">${n}</span>
    </div>`}return`
    <div class="mv-list-row">
      <a class="mv-list-thumb" href="${i(t.url||"#")}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F">
        ${s?`<img src="${i(s)}" data-fallback="${i(a)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
      </a>
      <div class="mv-list-info">
        <span class="mv-list-title">${i(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${i(O(t))}</span>
      </div>
      <span class="mv-type-badge ${l}">${n}</span>
      <button class="mv-add-btn${o?" is-saved":""}" type="button"
        data-playlist-add-mv="${i(t.id)}"
        data-stream-title="${i(t.title||"")}"
        title="${o?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${f("bookmark")}</button>
    </div>`}function ot(t){return`<div class="mv-grid">${t.map(({v:e,i:s})=>wt(e,s)).join("")}</div>`}function qt(t){return`<div class="mv-list">${t.map(({v:e,i:s})=>Dt(e,s)).join("")}</div>`}function Yt(t){return`
    <div class="mv-category">
      ${[{key:"original",label:"\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2\uFF08\u500B\u4EBA\uFF09"},{key:"office",label:"Re:AcT \u30AA\u30EA\u66F2"},{key:"character",label:"\u30AD\u30E3\u30E9\u30BD\u30F3 / \u58F0\u512A\u30AA\u30EA\u66F2"},{key:"cover",label:"\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09"}].map(({key:s,label:a})=>({label:a,items:t.filter(({v:n})=>n.type===s)})).filter(({items:s})=>s.length>0).map(({label:s,items:a})=>`
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">${s} <span class="mv-cat-count">${a.length}</span></h3>
        <div class="mv-grid">${a.map(({v:n,i:l})=>wt(n,l)).join("")}</div>
      </div>`).join("")}
    </div>`}var st=24,M="all-streams",R=1,nt="newest";function g(){return lt()}function T(t){rt(t)}function _t(t){let e=g(),s={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return e.unshift(s),T(e),s}function Ot(t){T(g().filter(e=>e.id!==t))}function Ft(t,e){let s=g(),a=s.find(n=>n.id===t);return!a||a.streams.includes(e)?!1:(a.streams.push(e),T(s),!0)}function Kt(t,e){let s=g(),a=s.find(n=>n.id===t);a&&(a.streams=a.streams.filter(n=>n!==e),T(s))}function L(){let t=w("#panel-playlists");if(!t)return;pt({isActive:()=>M==="music",openAddModal:(n,l)=>te(n,l)});let e=G.data?.streams||[];M==="my-playlists"&&ft(()=>{M==="my-playlists"&&L()});let s=document.activeElement?.id==="pl-music-search",a=null;if(s){try{a=document.activeElement.selectionStart}catch{}vt(document.activeElement.value)}if(t.innerHTML=`
    <nav class="panel-topnav" aria-label="\u30DA\u30FC\u30B8\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3">
      <button class="panel-topnav-btn" type="button" data-nav-tab="dashboard"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13h5v7H4z"/><path d="M10 4h5v16h-5z"/><path d="M16 9h4v11h-4z"/></svg>\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9</button>
      <button class="panel-topnav-btn" type="button" data-nav-tab="ranking"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v3a4 4 0 0 1-8 0z"/><path d="M6 5H3v2a4 4 0 0 0 4 4"/><path d="M18 5h3v2a4 4 0 0 1-4 4"/><path d="M12 11v5"/><path d="M8 20h8"/><path d="M9 16h6v4H9z"/></svg>\u30E9\u30F3\u30AD\u30F3\u30B0</button>
      <button class="panel-topnav-btn" type="button" data-nav-tab="songs"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>\u5168\u66F2\u30EA\u30B9\u30C8</button>
      <button class="panel-topnav-btn" type="button" data-nav-tab="timeline"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4"/><path d="M17 3v4"/><path d="M4 8h16"/><rect x="4" y="5" width="16" height="16" rx="3"/><path d="M8 13h3"/><path d="M13 13h3"/><path d="M8 17h3"/></svg>\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3</button>
      <button class="panel-topnav-btn" type="button" data-nav-tab="analytics"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M7 15l3-4 4 2 5-7"/><circle cx="7" cy="15" r="1"/><circle cx="10" cy="11" r="1"/><circle cx="14" cy="13" r="1"/><circle cx="19" cy="6" r="1"/></svg>\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9</button>
      <button class="panel-topnav-btn active" type="button" data-nav-tab="playlists"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h10"/><path d="M5 11h10"/><path d="M5 16h7"/><path d="M18 8v10l3-2 3 2V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1z"/></svg>\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</button>
    </nav>
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u30B5\u30D6\u30BF\u30D6">
        <button class="pl-subtab${M==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${M==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${M==="music"?" active":""}"
          data-pl-subtab="music" role="tab"
          aria-selected="${M==="music"}">\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2</button>
        <button class="pl-subtab${M==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${M==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${g().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${M==="all-streams"?St(e,R):M==="music"?mt():Qt(e)}
      </div>
    </div>
  `,M==="music"&&bt(),s){let n=w("#pl-music-search");if(n&&(n.focus(),a!==null))try{n.setSelectionRange(a,a)}catch{}}t.onclick=n=>{let l=n.target.closest("[data-nav-tab]");if(l){document.querySelector(`[data-tab="${l.dataset.navTab}"]`)?.click();return}let r=n.target.closest("[data-pl-subtab]");if(r){M=r.dataset.plSubtab,M==="all-streams"&&(R=1),L();return}let o=n.target.closest("[data-pl-sort]");if(o){nt=o.dataset.plSort,R=1,Mt(e);return}let c=n.target.closest("[data-pl-page]");if(c&&!c.disabled){R=Number(c.dataset.plPage),Mt(e);return}ht(n)||M==="my-playlists"&&Jt(n,e)},t.oninput=n=>{X(n)},t.oncompositionend=n=>{X(n,{immediate:!0})},t.addEventListener("error",n=>{let l=n.target;if(!l.classList.contains("pl-sg-thumb"))return;let r=l.dataset.fallback;r&&l.src!==r&&(l.src=r,delete l.dataset.fallback)},!0),ee()}var Nt=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function Gt(t,e){let s=t.slice();return e==="oldest"?s.reverse():e==="most-songs"?s.sort((a,n)=>(n.songs?.length??0)-(a.songs?.length??0)):e==="fewest-songs"?s.sort((a,n)=>(a.songs?.length??0)-(n.songs?.length??0)):s}function St(t,e){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let s=Gt(t,nt),a=s.length,n=Math.max(1,Math.ceil(a/st)),l=Math.min(Math.max(1,e),n),r=(l-1)*st,c=s.slice(r,r+st).map(d=>{let v=A(d),u=B(d.url),m=V(d.url),y=d.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${i(v)}"
        title="${i(d.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${u?`<img class="pl-sg-thumb" src="${i(u)}"
                data-fallback="${i(m)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${y}<span class="pl-sg-badge-unit">\u66F2</span></span>
          <span class="pl-sg-add${E(v)?" is-saved":""}" role="button" tabindex="0"
            aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"
            data-playlist-add="${i(v)}" data-stream-title="${i(d.title||"\u914D\u4FE1")}"
            title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">${Lt}</span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${i(d.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${i(W(d.date)||"")}</span>
        </div>
      </button>`}).join(""),p=n>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${l-1}"
        ${l<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${l} / ${n}</span>
      <button class="pl-page-btn" data-pl-page="${l+1}"
        ${l>=n?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${Nt.map(d=>`
        <button class="pl-sort-opt${nt===d.key?" active":""}"
          data-pl-sort="${d.key}" type="button">${d.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${c}</div>${p}`}function Mt(t){let e=w("#pl-subtab-body");if(!e){L();return}e.innerHTML=St(t,R);let s=w("#panel-playlists");s&&s.addEventListener("error",a=>{let n=a.target;if(!n.classList.contains("pl-sg-thumb"))return;let l=n.dataset.fallback;l&&n.src!==l&&(n.src=l,delete n.dataset.fallback)},{once:!0,capture:!0}),e.scrollIntoView({behavior:"smooth",block:"start"})}function kt(t,e){return(t.streams||[]).map(s=>{if(s.startsWith("mv:")){let n=I(s);return n?.url?Q(n.url):""}let a=e.find(n=>A(n)===s);return a?.url?Q(a.url):""}).filter(Boolean)}function Wt(t){if(!t.length){alert("YouTube\u3067\u518D\u751F\u3067\u304D\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093");return}let e;if(t.length===1)e=`https://www.youtube.com/watch?v=${t[0]}`;else{let s=t.slice(0,50);t.length>50&&alert(`\u52D5\u753B\u304C${t.length}\u672C\u3042\u308A\u307E\u3059\u3002\u5148\u982D50\u672C\u3067\u9023\u7D9A\u518D\u751F\u3057\u307E\u3059\u3002`),e=`https://www.youtube.com/watch_videos?video_ids=${s.join(",")}`}window.open(e,"_blank","noopener noreferrer")}function Qt(t){let e=g();return e.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${e.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">${f("plus")} \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${e.map(s=>Ut(s,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u681E\u30DC\u30BF\u30F3</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">${f("plus")} \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function Ut(t,e){let s=t.streams.map(c=>{let p=c.startsWith("mv:"),b=p?I(c):null;return{skey:c,isMv:p,mv:b,stream:p?null:e.find(d=>A(d)===c)}}),a=s.find(({stream:c,mv:p})=>c?.url||p?.url)?.stream?.url||s.find(({mv:c})=>c?.url)?.mv?.url,n=a?`<img class="pl-card-cover" src="${i(B(a))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",l=s.length,r=s.map(({skey:c,isMv:p,mv:b,stream:d})=>{let v=i(t.id+"|:|"+c),u=`<span class="pl-drag-handle" aria-hidden="true" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048">${f("drag")}</span>`,m=`<button class="pl-rm-btn" data-pl-rm-stream="${v}" type="button" title="\u524A\u9664">${f("close")}</button>`;if(p){if(!b)return`
        <div class="pl-stream-row pl-stream-missing" data-pl-skey="${i(c)}" data-pl-id="${i(t.id)}">${u}
          <div class="pl-stream-info"><span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span></div>
          <div class="pl-stream-actions">${m}</div>
        </div>`;let{label:y,sub:S}=H(b),$=b.type||"original",_=F().indexOf(b);return`
        <div class="pl-stream-row" data-pl-skey="${i(c)}" data-pl-id="${i(t.id)}">
          ${u}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${$}">${y}</span></span>
            <span class="pl-stream-title">${i(b.title||"\u2014")}</span>
            <span class="pl-stream-meta">${i(S)}</span>
          </div>
          <div class="pl-stream-actions">
            ${_>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${_}" type="button" title="\u518D\u751F">${f("play")}</button>`:""}
            ${m}
          </div>
        </div>`}return d?`
      <div class="pl-stream-row" data-pl-skey="${i(c)}" data-pl-id="${i(t.id)}">
        ${u}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${W(d.date)}</span>
          <span class="pl-stream-title">${i(d.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${d.index}\u67A0 \xB7 ${d.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${d.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${i(c)}"
                type="button" title="\u518D\u751F">${f("play")}</button>`:""}
          ${m}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing" data-pl-skey="${i(c)}" data-pl-id="${i(t.id)}">${u}
        <div class="pl-stream-info"><span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span></div>
        <div class="pl-stream-actions">${m}</div>
      </div>`}).join(""),o=kt(t,e);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${n?`<div class="pl-card-cover-wrap">${n}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${i(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${i(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u4EF6</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${i(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${r||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
      ${o.length||t.streams.length?`
      <div class="pl-card-footer">
        ${o.length?`
        <button class="pl-yt-share-btn" data-pl-yt-share="${i(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${o.length}\u672C)
        </button>`:""}
        ${t.streams.length?`
        <button class="pl-yt-share-btn" data-pl-share="${i(t.id)}"
          type="button" title="\u3053\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">${f("link")} \u30EA\u30F3\u30AF\u3092\u5171\u6709</button>`:""}
      </div>`:""}
    </div>`}function Jt(t,e){if(t.target.closest("#pl-new-btn")){Zt();return}let s=t.target.closest("[data-pl-share]");if(s){let p=g().find(m=>m.id===s.dataset.plShare);if(!p)return;let b=JSON.stringify({n:p.name,s:p.streams}),d=btoa(String.fromCharCode(...new TextEncoder().encode(b))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),v=`${location.origin}${location.pathname}?pl=${d}`,u=m=>{s.innerHTML=m?`${f("check")} \u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F`:"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",setTimeout(()=>{s.innerHTML=`${f("link")} \u30EA\u30F3\u30AF\u3092\u5171\u6709`},1600)};navigator.clipboard?.writeText(v).then(()=>u(!0)).catch(()=>{try{let m=document.createElement("textarea");m.value=v,m.style.cssText="position:fixed;opacity:0;",document.body.appendChild(m),m.select();let y=document.execCommand("copy");m.remove(),u(y)}catch{u(!1)}});return}let a=t.target.closest("[data-pl-del]");if(a){let p=a.dataset.plDel,b=g().find(d=>d.id===p);b&&confirm(`\u300C${b.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(Ot(p),L());return}let n=t.target.closest("[data-pl-rm-stream]");if(n){let[p,b]=n.dataset.plRmStream.split("|:|");Kt(p,b),L();return}let l=t.target.closest("[data-pl-play-stream]");if(l){let p=l.closest(".pl-stream-row");if(p&&xt(p,e))return;let b=l.dataset.plPlayStream,d=e.find(v=>A(v)===b);d?.url&&z(d);return}let r=t.target.closest("[data-play-music-pl]");if(r){let p=r.closest(".pl-stream-row");if(p&&xt(p,e))return;let b=F();if(b.length){let d=Number(r.dataset.playMusicPl);import("./chunk-VYSGJWXI.js").then(v=>v.playMusicQueue(b,d))}return}let o=t.target.closest("[data-pl-rename]");if(o){let p=o.dataset.plRename,b=g().find(v=>v.id===p);if(!b)return;let d=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",b.name)?.trim();if(d){let v=g(),u=v.find(m=>m.id===p);u&&(u.name=d,T(v),L())}return}let c=t.target.closest("[data-pl-yt-share]");if(c){let p=c.dataset.plYtShare,b=g().find(d=>d.id===p);if(!b)return;Wt(kt(b,e));return}}function Zt(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(_t(t),L())}var Lt='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>';function Xt(t){let e=G.data?.streams||[];for(let s of t.streams||[])if(s.startsWith("mv:")){let a=I(s);if(a?.url)return a.url}else{let a=e.find(n=>A(n)===s);if(a?.url)return a.url}return""}function te(t,e,s={}){let a=Array.isArray(t)?t.filter(Boolean):[t].filter(Boolean);if(!a.length)return;let n=a.length>1,l=()=>{try{s.onChange?.(a.some(u=>E(u)))}catch{}},r=w("#pl-add-modal");r||(r=document.createElement("div"),r.id="pl-add-modal",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),document.body.appendChild(r));let o=u=>a.every(m=>(u.streams||[]).includes(m)),c=u=>{let m=o(u),y=Xt(u),S=y?B(y):"";return`
      <button class="pl-modal-item${m?" is-saved":""}" data-pl-add="${i(u.id)}"
        type="button" role="checkbox" aria-checked="${m}">
        <span class="pl-modal-item-cover">
          ${S?`<img src="${i(S)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:`<span class="pl-modal-item-cover--empty">${f("music")}</span>`}
        </span>
        <span class="pl-modal-item-info">
          <span class="pl-modal-item-name">${i(u.name)}</span>
          <span class="pl-modal-item-count">${u.streams.length}\u66F2</span>
        </span>
        <span class="pl-modal-bookmark${m?" is-saved":""}" aria-hidden="true">${Lt}</span>
      </button>`},p=()=>{let u=g();return u.length?u.map(c).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u4E0B\u306E\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u304B\u3089\u8FFD\u52A0\u3067\u304D\u307E\u3059</span></p>'},b=n?`${a.length}\u66F2\u3092\u307E\u3068\u3081\u3066\u4FDD\u5B58`:e||"\u914D\u4FE1",d=()=>{r.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">${f("close")}</button>
        </div>
        <div class="pl-modal-sub">${i(b)}</div>
        <div class="pl-modal-list" id="pl-modal-list">${p()}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">${f("plus")}</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,r.hidden=!1,r.querySelector("#pl-modal-close").addEventListener("click",v),r.querySelector("#pl-modal-backdrop").addEventListener("click",v),r.querySelector("#pl-modal-new").addEventListener("click",()=>{let u=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!u)return;let m=_t(u);a.forEach($=>Ft(m.id,$)),at(n?`\u300C${u}\u300D\u306B${a.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${u}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`);let y=r.querySelector("#pl-modal-list");y?.querySelector(".pl-modal-empty")&&(y.innerHTML=""),y&&y.insertAdjacentHTML("afterbegin",c(g().find($=>$.id===m.id))),l()}),r.querySelector("#pl-modal-list").addEventListener("click",u=>{let m=u.target.closest("[data-pl-add]");if(!m)return;let y=m.dataset.plAdd,S=g(),$=S.find(_=>_.id===y);$&&(Array.isArray($.streams)||($.streams=[]),o($)?(a.forEach(_=>{$.streams=$.streams.filter(Ct=>Ct!==_)}),T(S),at(n?`${a.length}\u66F2\u3092\u524A\u9664\u3057\u307E\u3057\u305F`:"\u524A\u9664\u3057\u307E\u3057\u305F")):(a.forEach(_=>{$.streams.includes(_)||$.streams.push(_)}),T(S),at(n?`\u300C${$.name}\u300D\u306B${a.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${$.name}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`)),m.outerHTML=c(g().find(_=>_.id===y)),l())})},v=()=>{r.hidden=!0};d(),document.addEventListener("keydown",function u(m){m.key==="Escape"&&(v(),document.removeEventListener("keydown",u))})}function at(t){let e=w("#pl-toast");e||(e=document.createElement("div"),e.id="pl-toast",document.body.appendChild(e)),e.textContent=t,e.classList.add("pl-toast--show"),clearTimeout(e._timer),e._timer=setTimeout(()=>e.classList.remove("pl-toast--show"),2500)}function xt(t,e){let s=g().find(l=>l.id===t.dataset.plId);if(!s)return!1;let a=[];for(let l of s.streams)if(l.startsWith("mv:")){let r=I(l);r?.url&&a.push({kind:"mv",key:l,video:r})}else{let r=e.find(o=>A(o)===l);r?.url&&a.push({kind:"stream",key:l,stream:r})}if(!a.length)return!1;let n=a.findIndex(l=>l.key===t.dataset.plSkey);return n<0&&(n=0),it({name:s.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:a,idx:n}),!0}function ee(){if(M!=="my-playlists")return;let t=w("#panel-playlists");t&&t.querySelectorAll(".pl-stream-list").forEach(e=>{e.addEventListener("pointerdown",se,{passive:!1})})}var P=null;function se(t){if(P)return;let e=t.target.closest(".pl-drag-handle");if(!e)return;let s=e.closest(".pl-stream-row"),a=e.closest(".pl-stream-list");if(!s||!a)return;t.preventDefault();let n=Array.from(a.querySelectorAll(".pl-stream-row")),l=n.indexOf(s);if(l<0)return;let r=n.map(c=>{let p=c.getBoundingClientRect();return p.top+p.height/2}),o=s.getBoundingClientRect();P={list:a,row:s,rows:n,mids:r,startIdx:l,targetIdx:l,startY:t.clientY,rowH:o.height+(parseFloat(getComputedStyle(a).rowGap||getComputedStyle(a).gap)||0),plId:s.dataset.plId,moved:!1},s.classList.add("is-dragging"),a.classList.add("is-drag-active");try{s.setPointerCapture(t.pointerId)}catch{}s.addEventListener("pointermove",Tt,{passive:!1}),s.addEventListener("pointerup",At),s.addEventListener("pointercancel",Bt)}function Tt(t){let e=P;if(!e)return;t.preventDefault();let s=t.clientY-e.startY;if(!e.moved&&Math.abs(s)<3)return;e.moved=!0,e.row.style.transform=`translateY(${s}px)`;let a=e.mids[e.startIdx]+s,n=0;for(let l=0;l<e.mids.length;l++)l!==e.startIdx&&a>e.mids[l]&&n++;n!==e.targetIdx&&(e.targetIdx=n,e.rows.forEach((l,r)=>{if(r===e.startIdx)return;let o=0;e.startIdx<n&&r>e.startIdx&&r<=n?o=-e.rowH:e.startIdx>n&&r>=n&&r<e.startIdx&&(o=e.rowH),l.style.transform=o?`translateY(${o}px)`:""}))}function At(){let t=P;if(!t)return;let{plId:e,startIdx:s,targetIdx:a,moved:n}=t;if(Et(),!n||a===s)return;let l=g(),r=l.find(o=>o.id===e);if(r&&s<r.streams.length){let o=r.streams.slice(),[c]=o.splice(s,1);o.splice(a,0,c),r.streams=o,T(l)}L()}function Bt(){Et()}function Et(){let t=P;t&&(t.rows.forEach(e=>{e.style.transform=""}),t.row.classList.remove("is-dragging"),t.list.classList.remove("is-drag-active"),t.row.removeEventListener("pointermove",Tt),t.row.removeEventListener("pointerup",At),t.row.removeEventListener("pointercancel",Bt),P=null)}export{Ft as addStreamToPlaylist,_t as createPlaylist,Ot as deletePlaylist,F as getMusicVideos,g as getPlaylists,E as isStreamInAnyPlaylist,Kt as removeStreamFromPlaylist,L as renderPlaylists,I as resolveMusicVideoId,te as showAddToPlaylistModal};
