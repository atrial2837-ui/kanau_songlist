import{e as F}from"./chunk-33BPFLKT.js";import{G as K,I as E,J as W,K as B,L as H,Q as h,a as _,c as r}from"./chunk-UU6CTPWE.js";var it="kanau-playlists",ct="kanau-music-videos-cache-v2",G=24,w="all-streams",I=1,X="newest",k="grid",f=null,V=null,R=!1,P="",J=null,A=!1,x=new Set;function y(){try{return JSON.parse(localStorage.getItem(it)||"[]")}catch{return[]}}function T(t){try{localStorage.setItem(it,JSON.stringify(t))}catch{}}function ot(t){let e=y(),a={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return e.unshift(a),T(e),a}function wt(t){T(y().filter(e=>e.id!==t))}function _t(t,e){let a=y(),n=a.find(s=>s.id===t);return!n||n.streams.includes(e)?!1:(n.streams.push(e),T(a),!0)}function Mt(t,e){let a=y(),n=a.find(s=>s.id===t);n&&(n.streams=n.streams.filter(s=>s!==e),T(a))}function D(t){return y().some(e=>e.streams.includes(t))}function L(){let t=_("#panel-playlists");if(!t)return;let e=F.data?.streams||[];if(w==="my-playlists"&&f===null){let s=Y();s.length?f=s:pt().then(l=>{f===null&&(f=Array.isArray(l)?l:[]),w==="my-playlists"&&L()})}let a=document.activeElement?.id==="pl-music-search",n=null;if(a){try{n=document.activeElement.selectionStart}catch{}P=document.activeElement.value||""}if(t.innerHTML=`
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
        <button class="pl-subtab${w==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${w==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${w==="music"?" active":""}"
          data-pl-subtab="music" role="tab"
          aria-selected="${w==="music"}">\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2</button>
        <button class="pl-subtab${w==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${w==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${y().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${w==="all-streams"?dt(e,I):w==="music"?kt():Rt(e)}
      </div>
    </div>
  `,w==="music"&&Lt(),a){let s=_("#pl-music-search");if(s&&(s.focus(),n!==null))try{s.setSelectionRange(n,n)}catch{}}t.onclick=s=>{let l=s.target.closest("[data-nav-tab]");if(l){document.querySelector(`[data-tab="${l.dataset.navTab}"]`)?.click();return}let i=s.target.closest("[data-pl-subtab]");if(i){w=i.dataset.plSubtab,w==="all-streams"&&(I=1),L();return}let m=s.target.closest("[data-pl-sort]");if(m){X=m.dataset.plSort,I=1,at(e);return}let u=s.target.closest("[data-pl-page]");if(u&&!u.disabled){I=Number(u.dataset.plPage),at(e);return}let p=s.target.closest("[data-music-view]:not([data-music-select-toggle])");if(p){k=p.dataset.musicView,z();return}if(s.target.closest("[data-music-select-toggle]")){A=!A,A||x.clear(),Q();return}let b=s.target.closest("[data-mv-select]");if(b){let c=b.dataset.mvSelect,o=!x.has(c);o?x.add(c):x.delete(c);let g=b.classList.contains("mv-list-row")?b:b.closest(".mv-card");g&&g.classList.toggle("is-selected",o);let M=g?.querySelector(".mv-card-checkbox, .mv-list-checkbox");M&&(M.innerHTML=o?h("check"):""),b.setAttribute("aria-pressed",String(o)),At();return}if(s.target.closest("[data-music-select-all]")){q(f||[]).forEach(({v:c})=>x.add(c.id)),Q();return}if(s.target.closest("[data-music-select-clear]")){x.clear(),Q();return}if(s.target.closest("[data-music-select-add]")){if(!x.size)return;let c=[...f||[]].filter(o=>x.has(o.id)).map(o=>"mv:"+o.id);lt(c);return}let d=s.target.closest("[data-playlist-add-mv]");if(d){let c=d.dataset.playlistAddMv,o=d.dataset.streamTitle||"";lt("mv:"+c,o);return}let v=s.target.closest("[data-mv-watch]");if(v&&f?.length){if(s.metaKey||s.ctrlKey||s.shiftKey||s.button===1)return;s.preventDefault();let c=f[Number(v.dataset.mvWatch)];c?.url&&window.__openStreamViewer?.({url:c.url,title:c.title,isMv:!0});return}w==="my-playlists"&&Dt(s,e)},t.oninput=s=>{let l=s.target.closest("#pl-music-search");l&&(P=l.value||"",clearTimeout(J),J=setTimeout(z,100))},t.oncompositionend=s=>{let l=s.target.closest("#pl-music-search");l&&(P=l.value||"",clearTimeout(J),z())},t.addEventListener("error",s=>{let l=s.target;if(!l.classList.contains("pl-sg-thumb"))return;let i=l.dataset.fallback;i&&l.src!==i&&(l.src=i,delete l.dataset.fallback)},!0),Ot()}var xt=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function St(t,e){let a=t.slice();return e==="oldest"?a.reverse():e==="most-songs"?a.sort((n,s)=>(s.songs?.length??0)-(n.songs?.length??0)):e==="fewest-songs"?a.sort((n,s)=>(n.songs?.length??0)-(s.songs?.length??0)):a}function dt(t,e){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let a=St(t,X),n=a.length,s=Math.max(1,Math.ceil(n/G)),l=Math.min(Math.max(1,e),s),i=(l-1)*G,u=a.slice(i,i+G).map(d=>{let v=E(d),c=B(d.url),o=H(d.url),g=d.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${r(v)}"
        title="${r(d.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${c?`<img class="pl-sg-thumb" src="${r(c)}"
                data-fallback="${r(o)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${g}<span class="pl-sg-badge-unit">\u66F2</span></span>
          <span class="pl-sg-add${D(v)?" is-saved":""}" role="button" tabindex="0"
            aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"
            data-playlist-add="${r(v)}" data-stream-title="${r(d.title||"\u914D\u4FE1")}"
            title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">${st}</span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${r(d.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${r(K(d.date)||"")}</span>
        </div>
      </button>`}).join(""),p=s>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${l-1}"
        ${l<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${l} / ${s}</span>
      <button class="pl-page-btn" data-pl-page="${l+1}"
        ${l>=s?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${xt.map(d=>`
        <button class="pl-sort-opt${X===d.key?" active":""}"
          data-pl-sort="${d.key}" type="button">${d.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${u}</div>${p}`}function at(t){let e=_("#pl-subtab-body");if(!e){L();return}e.innerHTML=dt(t,I);let a=_("#panel-playlists");a&&a.addEventListener("error",n=>{let s=n.target;if(!s.classList.contains("pl-sg-thumb"))return;let l=s.dataset.fallback;l&&s.src!==l&&(s.src=l,delete s.dataset.fallback)},{once:!0,capture:!0}),e.scrollIntoView({behavior:"smooth",block:"start"})}function kt(){if(f===null){let t=Y();t.length&&(f=t)}return tt(f||[])}async function Lt(){if(f!==null){U();return}f=Y(),R=!0,U();let t=await pt();R=!1,f=Array.isArray(t)?t:[],U()}function U(){if(w!=="music")return;let t=_("#pl-subtab-body");t&&(_("#pl-music-search")?z():t.innerHTML=tt(f||[]))}function tt(t){return Tt(t)+`<div id="pl-music-results">${ut(t)}</div>`}function Tt(t){let e=et(),n=q(t).length;return`
    <div class="pl-music-viewbar">
      <label class="pl-music-search-wrap">
        <span class="pl-music-search-icon" aria-hidden="true">${h("search")}</span>
        <input id="pl-music-search" class="pl-music-search" type="search"
          value="${r(e)}"
          placeholder="\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3067\u691C\u7D22"
          aria-label="\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2\u3092\u691C\u7D22">
      </label>
      <span class="pl-music-count">${n}${n===t.length?"":` / ${t.length}`}\u4EF6</span>
      <div class="pl-music-views">
        <button class="pl-music-view-btn${k==="grid"?" active":""}" data-music-view="grid"     type="button">\u30B0\u30EA\u30C3\u30C9</button>
        <button class="pl-music-view-btn${k==="list"?" active":""}" data-music-view="list"     type="button">\u30EA\u30B9\u30C8</button>
        <button class="pl-music-view-btn${k==="category"?" active":""}" data-music-view="category" type="button">\u30AB\u30C6\u30B4\u30EA</button>
        <button class="pl-music-view-btn pl-music-select-toggle${A?" active":""}" data-music-select-toggle="1" type="button" ${n?"":"disabled"} data-tooltip="\u8907\u6570\u9078\u629E\u3057\u3066\u307E\u3068\u3081\u3066\u8FFD\u52A0">${h("checkbox")} \u9078\u629E</button>
      </div>
    </div>
    ${A?Et():""}`}function Et(){let t=x.size;return`
    <div class="pl-music-selbar">
      <span class="pl-music-selcount" id="pl-music-selcount">${t}\u66F2\u3092\u9078\u629E\u4E2D</span>
      <div class="pl-music-selactions">
        <button class="pl-sel-btn" data-music-select-all="1" type="button">\u8868\u793A\u4E2D\u3092\u3059\u3079\u3066\u9078\u629E</button>
        <button class="pl-sel-btn" data-music-select-clear="1" type="button" ${t?"":"disabled"}>\u9078\u629E\u89E3\u9664</button>
        <button class="pl-sel-btn primary" data-music-select-add="1" type="button" ${t?"":"disabled"}>${h("plus")} ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0</button>
        <button class="pl-sel-btn" data-music-select-toggle="1" type="button">\u5B8C\u4E86</button>
      </div>
    </div>`}function ut(t){let e=q(t);return R&&!t.length?'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p><p class="pl-empty-hint">\u691C\u7D22\u6B04\u306F\u3053\u306E\u307E\u307E\u5165\u529B\u3067\u304D\u307E\u3059</p></div>':t.length?e.length?k==="grid"?nt(e):k==="list"?Ht(e):k==="category"?Vt(e):nt(e):R?`<div class="pl-empty-state"><p>\u6700\u65B0\u30C7\u30FC\u30BF\u3092\u78BA\u8A8D\u4E2D\u2026</p><p class="pl-empty-hint">\u300C${r(et())}\u300D\u306E\u5019\u88DC\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</p></div>`:'<div class="pl-empty-state"><p>\u4E00\u81F4\u3059\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093</p><p class="pl-empty-hint">\u300C\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u300D\u306E\u3088\u3046\u306B\u533A\u5207\u3063\u3066\u691C\u7D22\u3067\u304D\u307E\u3059</p></div>':'<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>'}function et(){let t=_("#pl-music-search");return t&&(P=t.value||""),P}function Q(){let t=_("#pl-subtab-body");t&&(t.innerHTML=tt(f||[]))}function At(){let t=x.size,e=_("#pl-music-selcount");e&&(e.textContent=`${t}\u66F2\u3092\u9078\u629E\u4E2D`);let a=document.querySelector("[data-music-select-add]");a&&(a.disabled=!t,a.innerHTML=`${h("plus")} ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0`);let n=document.querySelector("[data-music-select-clear]");n&&(n.disabled=!t)}function z(){let t=f||[],e=_(".pl-music-count");if(e){let n=q(t).length;e.textContent=`${n}${n===t.length?"":` / ${t.length}`}\u4EF6`}document.querySelectorAll("[data-music-view]").forEach(n=>{n.classList.toggle("active",n.dataset.musicView===k)});let a=_("#pl-music-results");a&&(a.innerHTML=ut(t))}function Y(){try{let t=JSON.parse(localStorage.getItem(ct)||"null");return Array.isArray(t?.videos)?t.videos:[]}catch{return[]}}function Bt(t){try{localStorage.setItem(ct,JSON.stringify({videos:t,cachedAt:Date.now()}))}catch{}}async function pt(){return V||(V=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>{let e=Array.isArray(t?.videos)?t.videos:[];return Bt(e),e}).catch(()=>f||Y()),V)}function mt(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[‐-‒–—―ー]/g,"-").replace(/\s+/g," ").trim()}function Ct(t){return mt(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function It(t){let e=t.title||"",a=e.split(/[\/／|｜]/).map(s=>s.trim()).filter(Boolean),n=O(t).label;return mt([e,...a,t.originalArtist,t.character,t.type,n].filter(Boolean).join(" "))}function q(t){let e=Ct(et()),a=t.map((n,s)=>({v:n,i:s}));return e.length?a.filter(({v:n})=>{let s=It(n);return e.every(l=>s.includes(l))}):a}function O(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function j(t){return t.publishedAt?String(t.publishedAt).replaceAll("-","/"):"\u516C\u958B\u65E5\u672A\u767B\u9332"}function bt(t,e){let a=B(t.url),n=H(t.url),{label:s,cls:l}=O(t),i=D("mv:"+t.id);if(A){let m=x.has(t.id);return`
    <div class="mv-card mv-card--select${m?" is-selected":""}">
      <button class="mv-card-thumb-btn" type="button" data-mv-select="${r(t.id)}" aria-pressed="${m}">
        ${a?`<img class="mv-card-thumb" src="${r(a)}" data-fallback="${r(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-checkbox">${m?h("check"):""}</span>
        <span class="mv-type-badge ${l}">${s}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${r(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${r(j(t))}</span>
      </div>
    </div>`}return`
    <div class="mv-card">
      <a class="mv-card-thumb-btn" href="${r(t.url||"#")}" target="_blank" rel="noopener"
        data-mv-watch="${e}" aria-label="\u52D5\u753B\u30D3\u30E5\u30FC\u30EF\u30FC\u3067\u898B\u308B">
        ${a?`<img class="mv-card-thumb" src="${r(a)}" data-fallback="${r(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-play-icon">${h("play")}</span>
        <span class="mv-type-badge ${l}">${s}</span>
      </a>
      <button class="pl-sg-add mv-add-btn mv-add-btn--overlay${i?" is-saved":""}" type="button"
        data-playlist-add-mv="${r(t.id)}"
        data-stream-title="${r(t.title||"")}"
        aria-label="${i?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}"
        title="${i?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${st}</button>
      <div class="mv-card-info">
        <span class="mv-card-title">${r(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${r(j(t))}</span>
      </div>
    </div>`}function Pt(t,e){let a=B(t.url),n=H(t.url),{label:s,cls:l,sub:i}=O(t),m=D("mv:"+t.id);if(A){let u=x.has(t.id);return`
    <div class="mv-list-row mv-list-row--select${u?" is-selected":""}" data-mv-select="${r(t.id)}" role="button" aria-pressed="${u}">
      <span class="mv-list-checkbox">${u?h("check"):""}</span>
      <span class="mv-list-thumb">
        ${a?`<img src="${r(a)}" data-fallback="${r(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
      </span>
      <div class="mv-list-info">
        <span class="mv-list-title">${r(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${r(j(t))}</span>
      </div>
      <span class="mv-type-badge ${l}">${s}</span>
    </div>`}return`
    <div class="mv-list-row">
      <a class="mv-list-thumb" href="${r(t.url||"#")}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F">
        ${a?`<img src="${r(a)}" data-fallback="${r(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
      </a>
      <div class="mv-list-info">
        <span class="mv-list-title">${r(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${r(j(t))}</span>
      </div>
      <span class="mv-type-badge ${l}">${s}</span>
      <button class="mv-add-btn${m?" is-saved":""}" type="button"
        data-playlist-add-mv="${r(t.id)}"
        data-stream-title="${r(t.title||"")}"
        title="${m?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${h("bookmark")}</button>
    </div>`}function nt(t){return`<div class="mv-grid">${t.map(({v:e,i:a})=>bt(e,a)).join("")}</div>`}function Ht(t){return`<div class="mv-list">${t.map(({v:e,i:a})=>Pt(e,a)).join("")}</div>`}function Vt(t){return`
    <div class="mv-category">
      ${[{key:"original",label:"\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2\uFF08\u500B\u4EBA\uFF09"},{key:"office",label:"Re:AcT \u30AA\u30EA\u66F2"},{key:"character",label:"\u30AD\u30E3\u30E9\u30BD\u30F3 / \u58F0\u512A\u30AA\u30EA\u66F2"},{key:"cover",label:"\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09"}].map(({key:a,label:n})=>({label:n,items:t.filter(({v:s})=>s.type===a)})).filter(({items:a})=>a.length>0).map(({label:a,items:n})=>`
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">${a} <span class="mv-cat-count">${n.length}</span></h3>
        <div class="mv-grid">${n.map(({v:s,i:l})=>bt(s,l)).join("")}</div>
      </div>`).join("")}
    </div>`}function Gt(){return f||[]}function N(t){if(!t?.startsWith("mv:"))return null;let e=t.slice(3);return(f||[]).find(a=>a.id===e)||null}function ft(t,e){return(t.streams||[]).map(a=>{if(a.startsWith("mv:")){let s=N(a);return s?.url?W(s.url):""}let n=e.find(s=>E(s)===a);return n?.url?W(n.url):""}).filter(Boolean)}function zt(t){if(!t.length){alert("YouTube\u3067\u518D\u751F\u3067\u304D\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093");return}let e;if(t.length===1)e=`https://www.youtube.com/watch?v=${t[0]}`;else{let a=t.slice(0,50);t.length>50&&alert(`\u52D5\u753B\u304C${t.length}\u672C\u3042\u308A\u307E\u3059\u3002\u5148\u982D50\u672C\u3067\u9023\u7D9A\u518D\u751F\u3057\u307E\u3059\u3002`),e=`https://www.youtube.com/watch_videos?video_ids=${a.join(",")}`}window.open(e,"_blank","noopener noreferrer")}function Rt(t){let e=y();return e.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${e.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">${h("plus")} \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${e.map(a=>jt(a,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u681E\u30DC\u30BF\u30F3</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">${h("plus")} \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function jt(t,e){let a=t.streams.map(u=>{let p=u.startsWith("mv:"),b=p?N(u):null;return{skey:u,isMv:p,mv:b,stream:p?null:e.find(d=>E(d)===u)}}),n=a.find(({stream:u,mv:p})=>u?.url||p?.url)?.stream?.url||a.find(({mv:u})=>u?.url)?.mv?.url,s=n?`<img class="pl-card-cover" src="${r(B(n))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",l=a.length,i=a.map(({skey:u,isMv:p,mv:b,stream:d})=>{let v=r(t.id+"|:|"+u),c=`<span class="pl-drag-handle" aria-hidden="true" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048">${h("drag")}</span>`,o=`<button class="pl-rm-btn" data-pl-rm-stream="${v}" type="button" title="\u524A\u9664">${h("close")}</button>`;if(p){if(!b)return`
        <div class="pl-stream-row pl-stream-missing" data-pl-skey="${r(u)}" data-pl-id="${r(t.id)}">${c}
          <div class="pl-stream-info"><span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span></div>
          <div class="pl-stream-actions">${o}</div>
        </div>`;let{label:g,sub:M}=O(b),$=b.type||"original",S=(f||[]).indexOf(b);return`
        <div class="pl-stream-row" data-pl-skey="${r(u)}" data-pl-id="${r(t.id)}">
          ${c}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${$}">${g}</span></span>
            <span class="pl-stream-title">${r(b.title||"\u2014")}</span>
            <span class="pl-stream-meta">${r(M)}</span>
          </div>
          <div class="pl-stream-actions">
            ${S>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${S}" type="button" title="\u518D\u751F">${h("play")}</button>`:""}
            ${o}
          </div>
        </div>`}return d?`
      <div class="pl-stream-row" data-pl-skey="${r(u)}" data-pl-id="${r(t.id)}">
        ${c}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${K(d.date)}</span>
          <span class="pl-stream-title">${r(d.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${d.index}\u67A0 \xB7 ${d.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${d.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${r(u)}"
                type="button" title="\u518D\u751F">${h("play")}</button>`:""}
          ${o}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing" data-pl-skey="${r(u)}" data-pl-id="${r(t.id)}">${c}
        <div class="pl-stream-info"><span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span></div>
        <div class="pl-stream-actions">${o}</div>
      </div>`}).join(""),m=ft(t,e);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${s?`<div class="pl-card-cover-wrap">${s}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${r(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${r(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u4EF6</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${r(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${i||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
      ${m.length||t.streams.length?`
      <div class="pl-card-footer">
        ${m.length?`
        <button class="pl-yt-share-btn" data-pl-yt-share="${r(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${m.length}\u672C)
        </button>`:""}
        ${t.streams.length?`
        <button class="pl-yt-share-btn" data-pl-share="${r(t.id)}"
          type="button" title="\u3053\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">${h("link")} \u30EA\u30F3\u30AF\u3092\u5171\u6709</button>`:""}
      </div>`:""}
    </div>`}function Dt(t,e){if(t.target.closest("#pl-new-btn")){Yt();return}let a=t.target.closest("[data-pl-share]");if(a){let p=y().find(o=>o.id===a.dataset.plShare);if(!p)return;let b=JSON.stringify({n:p.name,s:p.streams}),d=btoa(String.fromCharCode(...new TextEncoder().encode(b))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),v=`${location.origin}${location.pathname}?pl=${d}`,c=o=>{a.innerHTML=o?`${h("check")} \u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F`:"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",setTimeout(()=>{a.innerHTML=`${h("link")} \u30EA\u30F3\u30AF\u3092\u5171\u6709`},1600)};navigator.clipboard?.writeText(v).then(()=>c(!0)).catch(()=>{try{let o=document.createElement("textarea");o.value=v,o.style.cssText="position:fixed;opacity:0;",document.body.appendChild(o),o.select();let g=document.execCommand("copy");o.remove(),c(g)}catch{c(!1)}});return}let n=t.target.closest("[data-pl-del]");if(n){let p=n.dataset.plDel,b=y().find(d=>d.id===p);b&&confirm(`\u300C${b.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(wt(p),L());return}let s=t.target.closest("[data-pl-rm-stream]");if(s){let[p,b]=s.dataset.plRmStream.split("|:|");Mt(p,b),L();return}let l=t.target.closest("[data-pl-play-stream]");if(l){let p=l.closest(".pl-stream-row");if(p&&rt(p,e))return;let b=l.dataset.plPlayStream,d=e.find(v=>E(v)===b);d?.url&&window.__openStreamViewer?.(d);return}let i=t.target.closest("[data-play-music-pl]");if(i){let p=i.closest(".pl-stream-row");if(p&&rt(p,e))return;if(f?.length){let b=Number(i.dataset.playMusicPl);import("./chunk-T4MOKOKW.js").then(d=>d.playMusicQueue(f,b))}return}let m=t.target.closest("[data-pl-rename]");if(m){let p=m.dataset.plRename,b=y().find(v=>v.id===p);if(!b)return;let d=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",b.name)?.trim();if(d){let v=y(),c=v.find(o=>o.id===p);c&&(c.name=d,T(v),L())}return}let u=t.target.closest("[data-pl-yt-share]");if(u){let p=u.dataset.plYtShare,b=y().find(d=>d.id===p);if(!b)return;zt(ft(b,e));return}}function Yt(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(ot(t),L())}var st='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>';function qt(t){let e=F.data?.streams||[];for(let a of t.streams||[])if(a.startsWith("mv:")){let n=N(a);if(n?.url)return n.url}else{let n=e.find(s=>E(s)===a);if(n?.url)return n.url}return""}function lt(t,e,a={}){let n=Array.isArray(t)?t.filter(Boolean):[t].filter(Boolean);if(!n.length)return;let s=n.length>1,l=()=>{try{a.onChange?.(n.some(c=>D(c)))}catch{}},i=_("#pl-add-modal");i||(i=document.createElement("div"),i.id="pl-add-modal",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),document.body.appendChild(i));let m=c=>n.every(o=>(c.streams||[]).includes(o)),u=c=>{let o=m(c),g=qt(c),M=g?B(g):"";return`
      <button class="pl-modal-item${o?" is-saved":""}" data-pl-add="${r(c.id)}"
        type="button" role="checkbox" aria-checked="${o}">
        <span class="pl-modal-item-cover">
          ${M?`<img src="${r(M)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:`<span class="pl-modal-item-cover--empty">${h("music")}</span>`}
        </span>
        <span class="pl-modal-item-info">
          <span class="pl-modal-item-name">${r(c.name)}</span>
          <span class="pl-modal-item-count">${c.streams.length}\u66F2</span>
        </span>
        <span class="pl-modal-bookmark${o?" is-saved":""}" aria-hidden="true">${st}</span>
      </button>`},p=()=>{let c=y();return c.length?c.map(u).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u4E0B\u306E\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u304B\u3089\u8FFD\u52A0\u3067\u304D\u307E\u3059</span></p>'},b=s?`${n.length}\u66F2\u3092\u307E\u3068\u3081\u3066\u4FDD\u5B58`:e||"\u914D\u4FE1",d=()=>{i.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">${h("close")}</button>
        </div>
        <div class="pl-modal-sub">${r(b)}</div>
        <div class="pl-modal-list" id="pl-modal-list">${p()}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">${h("plus")}</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,i.hidden=!1,i.querySelector("#pl-modal-close").addEventListener("click",v),i.querySelector("#pl-modal-backdrop").addEventListener("click",v),i.querySelector("#pl-modal-new").addEventListener("click",()=>{let c=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!c)return;let o=ot(c);n.forEach($=>_t(o.id,$)),Z(s?`\u300C${c}\u300D\u306B${n.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${c}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`);let g=i.querySelector("#pl-modal-list");g?.querySelector(".pl-modal-empty")&&(g.innerHTML=""),g&&g.insertAdjacentHTML("afterbegin",u(y().find($=>$.id===o.id))),l()}),i.querySelector("#pl-modal-list").addEventListener("click",c=>{let o=c.target.closest("[data-pl-add]");if(!o)return;let g=o.dataset.plAdd,M=y(),$=M.find(S=>S.id===g);$&&(Array.isArray($.streams)||($.streams=[]),m($)?(n.forEach(S=>{$.streams=$.streams.filter($t=>$t!==S)}),T(M),Z(s?`${n.length}\u66F2\u3092\u524A\u9664\u3057\u307E\u3057\u305F`:"\u524A\u9664\u3057\u307E\u3057\u305F")):(n.forEach(S=>{$.streams.includes(S)||$.streams.push(S)}),T(M),Z(s?`\u300C${$.name}\u300D\u306B${n.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${$.name}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`)),o.outerHTML=u(y().find(S=>S.id===g)),l())})},v=()=>{i.hidden=!0};d(),document.addEventListener("keydown",function c(o){o.key==="Escape"&&(v(),document.removeEventListener("keydown",c))})}function Z(t){let e=_("#pl-toast");e||(e=document.createElement("div"),e.id="pl-toast",document.body.appendChild(e)),e.textContent=t,e.classList.add("pl-toast--show"),clearTimeout(e._timer),e._timer=setTimeout(()=>e.classList.remove("pl-toast--show"),2500)}function rt(t,e){let a=y().find(l=>l.id===t.dataset.plId);if(!a||!window.__playMyListInViewer)return!1;let n=[];for(let l of a.streams)if(l.startsWith("mv:")){let i=N(l);i?.url&&n.push({kind:"mv",key:l,video:i})}else{let i=e.find(m=>E(m)===l);i?.url&&n.push({kind:"stream",key:l,stream:i})}if(!n.length)return!1;let s=n.findIndex(l=>l.key===t.dataset.plSkey);return s<0&&(s=0),window.__playMyListInViewer({name:a.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:n,idx:s}),!0}function Ot(){if(w!=="my-playlists")return;let t=_("#panel-playlists");t&&t.querySelectorAll(".pl-stream-list").forEach(e=>{e.addEventListener("pointerdown",Nt,{passive:!1})})}var C=null;function Nt(t){if(C)return;let e=t.target.closest(".pl-drag-handle");if(!e)return;let a=e.closest(".pl-stream-row"),n=e.closest(".pl-stream-list");if(!a||!n)return;t.preventDefault();let s=Array.from(n.querySelectorAll(".pl-stream-row")),l=s.indexOf(a);if(l<0)return;let i=s.map(u=>{let p=u.getBoundingClientRect();return p.top+p.height/2}),m=a.getBoundingClientRect();C={list:n,row:a,rows:s,mids:i,startIdx:l,targetIdx:l,startY:t.clientY,rowH:m.height+(parseFloat(getComputedStyle(n).rowGap||getComputedStyle(n).gap)||0),plId:a.dataset.plId,moved:!1},a.classList.add("is-dragging"),n.classList.add("is-drag-active");try{a.setPointerCapture(t.pointerId)}catch{}a.addEventListener("pointermove",vt,{passive:!1}),a.addEventListener("pointerup",ht),a.addEventListener("pointercancel",gt)}function vt(t){let e=C;if(!e)return;t.preventDefault();let a=t.clientY-e.startY;if(!e.moved&&Math.abs(a)<3)return;e.moved=!0,e.row.style.transform=`translateY(${a}px)`;let n=e.mids[e.startIdx]+a,s=0;for(let l=0;l<e.mids.length;l++)l!==e.startIdx&&n>e.mids[l]&&s++;s!==e.targetIdx&&(e.targetIdx=s,e.rows.forEach((l,i)=>{if(i===e.startIdx)return;let m=0;e.startIdx<s&&i>e.startIdx&&i<=s?m=-e.rowH:e.startIdx>s&&i>=s&&i<e.startIdx&&(m=e.rowH),l.style.transform=m?`translateY(${m}px)`:""}))}function ht(){let t=C;if(!t)return;let{plId:e,startIdx:a,targetIdx:n,moved:s}=t;if(yt(),!s||n===a)return;let l=y(),i=l.find(m=>m.id===e);if(i&&a<i.streams.length){let m=i.streams.slice(),[u]=m.splice(a,1);m.splice(n,0,u),i.streams=m,T(l)}L()}function gt(){yt()}function yt(){let t=C;t&&(t.rows.forEach(e=>{e.style.transform=""}),t.row.classList.remove("is-dragging"),t.list.classList.remove("is-drag-active"),t.row.removeEventListener("pointermove",vt),t.row.removeEventListener("pointerup",ht),t.row.removeEventListener("pointercancel",gt),C=null)}export{y as a,ot as b,wt as c,_t as d,Mt as e,D as f,L as g,Gt as h,N as i,lt as j};
