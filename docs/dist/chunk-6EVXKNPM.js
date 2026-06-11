import{e as N}from"./chunk-RBEKY5OM.js";import{E as x,G as S,H as A,I as C,J as P,a as $,d as o}from"./chunk-PRFEE4R6.js";var K="kanau-playlists",J="kanau-music-videos-cache-v1",E=24,y="all-streams",k=1,I="newest",_="grid",v=null,L=null,j="",V=!1;function f(){try{return JSON.parse(localStorage.getItem(K)||"[]")}catch{return[]}}function M(t){try{localStorage.setItem(K,JSON.stringify(t))}catch{}}function G(t){let a=f(),s={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return a.unshift(s),M(a),s}function et(t){M(f().filter(a=>a.id!==t))}function O(t,a){let s=f(),e=s.find(l=>l.id===t);return!e||e.streams.includes(a)?!1:(e.streams.push(a),M(s),!0)}function lt(t,a){let s=f(),e=s.find(l=>l.id===t);e&&(e.streams=e.streams.filter(l=>l!==a),M(s))}function kt(t){return f().some(a=>a.streams.includes(t))}function w(){let t=$("#panel-playlists");if(!t)return;let a=N.data?.streams||[];t.innerHTML=`
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u30B5\u30D6\u30BF\u30D6">
        <button class="pl-subtab${y==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${y==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${y==="music"?" active":""}"
          data-pl-subtab="music" role="tab"
          aria-selected="${y==="music"}">\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2</button>
        <button class="pl-subtab${y==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${y==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${f().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${y==="all-streams"?Q(a,k):y==="music"?rt():yt(a)}
      </div>
    </div>
  `,t.onclick=s=>{let e=s.target.closest("[data-pl-subtab]");if(e){y=e.dataset.plSubtab,y==="all-streams"&&(k=1),w(),y==="music"&&ct();return}let l=s.target.closest("[data-pl-sort]");if(l){I=l.dataset.plSort,k=1,F(a);return}let d=s.target.closest("[data-pl-page]");if(d&&!d.disabled){k=Number(d.dataset.plPage),F(a);return}let b=s.target.closest("[data-music-view]");if(b){_=b.dataset.musicView,W();return}let h=s.target.closest("[data-play-music]");if(h&&v?.length){let r=Number(h.dataset.playMusic);import("./chunk-JRCBHL36.js").then(n=>n.playMusicQueue(v,r));return}let c=s.target.closest("[data-watch-music]");if(c&&v?.length){let r=Number(c.dataset.watchMusic),n=v[r];n?.url&&window.__openStreamViewer?.({url:n.url,title:n.title,isMv:!0});return}let i=s.target.closest("[data-playlist-add-mv]");if(i){let r=i.dataset.playlistAddMv,n=i.dataset.streamTitle||"";_t("mv:"+r,n);return}y==="my-playlists"&&$t(s,a)},t.oncompositionstart=s=>{s.target.closest("#pl-music-search")&&(V=!0)},t.oncompositionend=s=>{let e=s.target.closest("#pl-music-search");e&&(V=!1,z(e))},t.oninput=s=>{let e=s.target.closest("#pl-music-search");!e||V||s.isComposing||z(e)},t.addEventListener("error",s=>{let e=s.target;if(!e.classList.contains("pl-sg-thumb"))return;let l=e.dataset.fallback;l&&e.src!==l&&(e.src=l,delete e.dataset.fallback)},!0)}function z(t){j=t.value||"",W()}var nt=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function it(t,a){let s=t.slice();return a==="oldest"?s.reverse():a==="most-songs"?s.sort((e,l)=>(l.songs?.length??0)-(e.songs?.length??0)):a==="fewest-songs"?s.sort((e,l)=>(e.songs?.length??0)-(l.songs?.length??0)):s}function Q(t,a){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let s=it(t,I),e=s.length,l=Math.max(1,Math.ceil(e/E)),d=Math.min(Math.max(1,a),l),b=(d-1)*E,c=s.slice(b,b+E).map(n=>{let g=S(n),p=C(n.url),u=P(n.url),m=n.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${o(g)}"
        title="${o(n.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${p?`<img class="pl-sg-thumb" src="${o(p)}"
                data-fallback="${o(u)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${m}<span class="pl-sg-badge-unit">\u66F2</span></span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${o(n.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${o(x(n.date)||"")}</span>
        </div>
      </button>`}).join(""),i=l>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${d-1}"
        ${d<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${d} / ${l}</span>
      <button class="pl-page-btn" data-pl-page="${d+1}"
        ${d>=l?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${nt.map(n=>`
        <button class="pl-sort-opt${I===n.key?" active":""}"
          data-pl-sort="${n.key}" type="button">${n.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${c}</div>${i}`}function F(t){let a=$("#pl-subtab-body");if(!a){w();return}a.innerHTML=Q(t,k);let s=$("#panel-playlists");s&&s.addEventListener("error",e=>{let l=e.target;if(!l.classList.contains("pl-sg-thumb"))return;let d=l.dataset.fallback;d&&l.src!==d&&(l.src=d,delete l.dataset.fallback)},{once:!0,capture:!0}),a.scrollIntoView({behavior:"smooth",block:"start"})}function rt(){return'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p></div>'}async function ct(){if(v===null){let a=Z();if(a.length){v=a;let s=$("#pl-subtab-body");s&&y==="music"&&(s.innerHTML=Y(v))}v=await ut()}let t=$("#pl-subtab-body");t&&y==="music"&&(t.innerHTML=Y(v))}function Y(t){return ot(t)+`<div id="pl-music-results">${U(t)}</div>`}function ot(t){let s=R(t).length;return`
    <div class="pl-music-viewbar">
      <label class="pl-music-search-wrap">
        <span class="pl-music-search-icon" aria-hidden="true">\u2315</span>
        <input id="pl-music-search" class="pl-music-search" type="search"
          value="${o(j)}"
          placeholder="\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3067\u691C\u7D22"
          aria-label="\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2\u3092\u691C\u7D22">
      </label>
      <span class="pl-music-count">${s}${s===t.length?"":` / ${t.length}`}\u4EF6</span>
      <div class="pl-music-views">
        <button class="pl-music-view-btn${_==="grid"?" active":""}" data-music-view="grid"     type="button">\u30B0\u30EA\u30C3\u30C9</button>
        <button class="pl-music-view-btn${_==="list"?" active":""}" data-music-view="list"     type="button">\u30EA\u30B9\u30C8</button>
        <button class="pl-music-view-btn${_==="category"?" active":""}" data-music-view="category" type="button">\u30AB\u30C6\u30B4\u30EA</button>
      </div>
    </div>`}function U(t){let a=R(t);return t.length?a.length?_==="grid"?q(a):_==="list"?vt(a):_==="category"?ft(a):q(a):'<div class="pl-empty-state"><p>\u4E00\u81F4\u3059\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093</p><p class="pl-empty-hint">\u300C\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u300D\u306E\u3088\u3046\u306B\u533A\u5207\u3063\u3066\u691C\u7D22\u3067\u304D\u307E\u3059</p></div>':'<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>'}function W(){let t=v||[],a=$(".pl-music-count");if(a){let e=R(t).length;a.textContent=`${e}${e===t.length?"":` / ${t.length}`}\u4EF6`}document.querySelectorAll("[data-music-view]").forEach(e=>{e.classList.toggle("active",e.dataset.musicView===_)});let s=$("#pl-music-results");s&&(s.innerHTML=U(t))}function Z(){try{let t=JSON.parse(localStorage.getItem(J)||"null");return Array.isArray(t?.videos)?t.videos:[]}catch{return[]}}function dt(t){try{localStorage.setItem(J,JSON.stringify({videos:t,cachedAt:Date.now()}))}catch{}}async function ut(){return L||(L=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>{let a=Array.isArray(t?.videos)?t.videos:[];return dt(a),a}).catch(()=>v||Z()),L)}function X(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/[！-～]/g,a=>String.fromCharCode(a.charCodeAt(0)-65248)).replace(/[‐-‒–—―ー]/g,"-").replace(/\s+/g," ").trim()}function pt(t){return X(t).split(/[\/／|｜\s]+/).map(a=>a.trim()).filter(Boolean)}function mt(t){let a=t.title||"",s=a.split(/[\/／|｜]/).map(l=>l.trim()).filter(Boolean),e=T(t).label;return X([a,...s,t.originalArtist,t.character,t.type,e].filter(Boolean).join(" "))}function R(t){let a=pt(j),s=t.map((e,l)=>({v:e,i:l}));return a.length?s.filter(({v:e})=>{let l=mt(e);return a.every(d=>l.includes(d))}):s}function T(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function tt(t,a){let s=C(t.url),e=P(t.url),{label:l,cls:d,sub:b}=T(t);return`
    <div class="mv-card">
      <button class="mv-card-thumb-btn" type="button" data-play-music="${a}" aria-label="\u518D\u751F">
        ${s?`<img class="mv-card-thumb" src="${o(s)}" data-fallback="${o(e)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-play-icon">\u25B6</span>
        <span class="mv-type-badge ${d}">${l}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${o(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${o(b)}</span>
      </div>
      <div class="mv-card-actions">
        <button class="mv-watch-btn" type="button" data-watch-music="${a}" title="\u52D5\u753B\u3067\u898B\u308B">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
        </button>
        <button class="mv-add-btn" type="button"
          data-playlist-add-mv="${o(t.id)}"
          data-stream-title="${o(t.title||"")}"
          title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
      </div>
    </div>`}function bt(t,a){let{label:s,cls:e,sub:l}=T(t);return`
    <div class="mv-list-row">
      <span class="mv-list-num">${a+1}</span>
      <button class="mv-list-play" type="button" data-play-music="${a}" aria-label="\u518D\u751F">\u25B6</button>
      <div class="mv-list-info">
        <span class="mv-list-title">${o(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${o(l)}</span>
      </div>
      <span class="mv-type-badge ${e}">${s}</span>
      <button class="mv-watch-btn" type="button" data-watch-music="${a}" title="\u52D5\u753B\u3067\u898B\u308B">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
      </button>
      <button class="mv-add-btn" type="button"
        data-playlist-add-mv="${o(t.id)}"
        data-stream-title="${o(t.title||"")}"
        title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
    </div>`}function q(t){return`<div class="mv-grid">${t.map(({v:a,i:s})=>tt(a,s)).join("")}</div>`}function vt(t){return`<div class="mv-list">${t.map(({v:a,i:s})=>bt(a,s)).join("")}</div>`}function ft(t){return`
    <div class="mv-category">
      ${[{key:"original",label:"\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2\uFF08\u500B\u4EBA\uFF09"},{key:"office",label:"Re:AcT \u30AA\u30EA\u66F2"},{key:"character",label:"\u30AD\u30E3\u30E9\u30BD\u30F3 / \u58F0\u512A\u30AA\u30EA\u66F2"},{key:"cover",label:"\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09"}].map(({key:s,label:e})=>({label:e,items:t.filter(({v:l})=>l.type===s)})).filter(({items:s})=>s.length>0).map(({label:s,items:e})=>`
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">${s} <span class="mv-cat-count">${e.length}</span></h3>
        <div class="mv-grid">${e.map(({v:l,i:d})=>tt(l,d)).join("")}</div>
      </div>`).join("")}
    </div>`}function Ct(){return v||[]}function gt(t){if(!t?.startsWith("mv:"))return null;let a=t.slice(3);return(v||[]).find(s=>s.id===a)||null}function yt(t){let a=f();return a.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${a.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${a.map(s=>ht(s,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function ht(t,a){let s=t.streams.map(c=>{let i=c.startsWith("mv:"),r=i?gt(c):null;return{skey:c,isMv:i,mv:r,stream:i?null:a.find(n=>S(n)===c)}}),e=s.find(({stream:c,mv:i})=>c?.url||i?.url)?.stream?.url||s.find(({mv:c})=>c?.url)?.mv?.url,l=e?`<img class="pl-card-cover" src="${o(C(e))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",d=s.length,b=s.map(({skey:c,isMv:i,mv:r,stream:n},g)=>{let p=o(t.id+"|:|"+c),u=`
      <div class="pl-sort-btns">
        <button class="pl-sort-btn" data-pl-move="${p}|:|up"
          type="button" title="\u4E0A\u3078" ${g===0?"disabled":""}>\u2191</button>
        <button class="pl-sort-btn" data-pl-move="${p}|:|down"
          type="button" title="\u4E0B\u3078" ${g===d-1?"disabled":""}>\u2193</button>
      </div>`,m=`<button class="pl-rm-btn" data-pl-rm-stream="${p}" type="button" title="\u524A\u9664">\u2715</button>`;if(i){if(!r)return`
        <div class="pl-stream-row pl-stream-missing">${u}
          <span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${m}
        </div>`;let{label:B,sub:st}=T(r),at=r.type||"original",H=(v||[]).indexOf(r);return`
        <div class="pl-stream-row">
          ${u}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${at}">${B}</span></span>
            <span class="pl-stream-title">${o(r.title||"\u2014")}</span>
            <span class="pl-stream-meta">${o(st)}</span>
          </div>
          <div class="pl-stream-actions">
            ${H>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${H}" type="button" title="\u518D\u751F">\u25B6</button>`:""}
            ${m}
          </div>
        </div>`}return n?`
      <div class="pl-stream-row">
        ${u}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${x(n.date)}</span>
          <span class="pl-stream-title">${o(n.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${n.index}\u67A0 \xB7 ${n.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${n.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${o(c)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          ${m}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing">${u}
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${m}
      </div>`}).join(""),h=s.map(({stream:c,mv:i})=>{let r=c?.url||i?.url;return r?A(r):""}).filter(Boolean);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${l?`<div class="pl-card-cover-wrap">${l}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${o(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${o(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u4EF6</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${o(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${b||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
      ${h.length?`
      <div class="pl-card-footer">
        <button class="pl-yt-share-btn" data-pl-yt-share="${o(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${h.length}\u672C)
        </button>
      </div>`:""}
    </div>`}function $t(t,a){if(t.target.closest("#pl-new-btn")){wt();return}let s=t.target.closest("[data-pl-del]");if(s){let i=s.dataset.plDel,r=f().find(n=>n.id===i);r&&confirm(`\u300C${r.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(et(i),w());return}let e=t.target.closest("[data-pl-rm-stream]");if(e){let[i,r]=e.dataset.plRmStream.split("|:|");lt(i,r),w();return}let l=t.target.closest("[data-pl-play-stream]");if(l){let i=l.dataset.plPlayStream,r=a.find(n=>S(n)===i);r?.url&&window.__openStreamViewer?.(r);return}let d=t.target.closest("[data-play-music-pl]");if(d&&v?.length){let i=Number(d.dataset.playMusicPl);import("./chunk-JRCBHL36.js").then(r=>r.playMusicQueue(v,i));return}let b=t.target.closest("[data-pl-rename]");if(b){let i=b.dataset.plRename,r=f().find(g=>g.id===i);if(!r)return;let n=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",r.name)?.trim();if(n){let g=f(),p=g.find(u=>u.id===i);p&&(p.name=n,M(g),w())}return}let h=t.target.closest("[data-pl-move]");if(h){let i=h.dataset.plMove.split("|:|"),[r,n,g]=i,p=f(),u=p.find(B=>B.id===r);if(!u)return;let m=u.streams.indexOf(n);if(m<0)return;g==="up"&&m>0?([u.streams[m-1],u.streams[m]]=[u.streams[m],u.streams[m-1]],M(p),w()):g==="down"&&m<u.streams.length-1&&([u.streams[m],u.streams[m+1]]=[u.streams[m+1],u.streams[m]],M(p),w());return}let c=t.target.closest("[data-pl-yt-share]");if(c){let i=c.dataset.plYtShare,r=f().find(p=>p.id===i);if(!r)return;let n=r.streams.map(p=>a.find(u=>S(u)===p)).filter(p=>p?.url).map(p=>A(p.url)).filter(Boolean);if(!n.length){alert("YouTube\u306EURL\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u308B\u914D\u4FE1\u304C\u3042\u308A\u307E\u305B\u3093");return}let g=`https://www.youtube.com/watch_videos?video_ids=${n.join(",")}`;window.open(g,"_blank","noopener noreferrer");return}}function wt(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(G(t),w())}function _t(t,a){let s=$("#pl-add-modal");s||(s=document.createElement("div"),s.id="pl-add-modal",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),document.body.appendChild(s));let e=f(),l=()=>{let b=f(),h=b.length?b.map(c=>{let i=c.streams.includes(t);return`
            <button class="pl-modal-item${i?" pl-modal-item--added":" pl-modal-item--free"}"
              data-pl-add="${o(c.id)}"
              ${i?'disabled aria-disabled="true"':""} type="button">
              <div class="pl-modal-item-info">
                <span class="pl-modal-item-name">${o(c.name)}</span>
                <span class="pl-modal-item-count">${c.streams.length}\u67A0</span>
              </div>
              <span class="pl-modal-item-status${i?" status--added":" status--free"}">
                ${i?'<span class="pl-modal-status-check">\u2713</span> \u767B\u9332\u6E08\u307F':"\uFF0B \u8FFD\u52A0"}
              </span>
            </button>`}).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u5148\u306B\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u3057\u3066\u304F\u3060\u3055\u3044</span></p>';s.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148\u3092\u9078\u629E</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
        </div>
        <div class="pl-modal-sub">${o(a||"\u914D\u4FE1")}</div>
        <div class="pl-modal-list" id="pl-modal-list">${h}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">\uFF0B</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,s.hidden=!1,s.querySelector("#pl-modal-close").addEventListener("click",d),s.querySelector("#pl-modal-backdrop").addEventListener("click",d),s.querySelector("#pl-modal-new").addEventListener("click",()=>{let c=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!c)return;let i=G(c);O(i.id,t),d(),D(`\u300C${c}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)}),s.querySelectorAll("[data-pl-add]:not([disabled])").forEach(c=>{c.addEventListener("click",()=>{let i=c.dataset.plAdd,r=f().find(n=>n.id===i);O(i,t),l(),D(`\u300C${r?.name}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)})})},d=()=>{s.hidden=!0};l(),document.addEventListener("keydown",function b(h){h.key==="Escape"&&(d(),document.removeEventListener("keydown",b))})}function D(t){let a=$("#pl-toast");a||(a=document.createElement("div"),a.id="pl-toast",document.body.appendChild(a)),a.textContent=t,a.classList.add("pl-toast--show"),clearTimeout(a._timer),a._timer=setTimeout(()=>a.classList.remove("pl-toast--show"),2500)}export{O as addStreamToPlaylist,G as createPlaylist,et as deletePlaylist,Ct as getMusicVideos,f as getPlaylists,kt as isStreamInAnyPlaylist,lt as removeStreamFromPlaylist,w as renderPlaylists,gt as resolveMusicVideoId,_t as showAddToPlaylistModal};
