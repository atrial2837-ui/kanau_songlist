import{e as D}from"./chunk-RBEKY5OM.js";import{E as P,G as S,H as V,I as A,J as I,a as $,d}from"./chunk-PRFEE4R6.js";var G="kanau-playlists",U="kanau-music-videos-cache-v2",j=24,g="all-streams",k=1,H="newest",_="grid",f=null,C=null,E=!1,T="",R=null;function h(){try{return JSON.parse(localStorage.getItem(G)||"[]")}catch{return[]}}function M(t){try{localStorage.setItem(G,JSON.stringify(t))}catch{}}function W(t){let s=h(),e={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return s.unshift(e),M(s),e}function nt(t){M(h().filter(s=>s.id!==t))}function Y(t,s){let e=h(),l=e.find(a=>a.id===t);return!l||l.streams.includes(s)?!1:(l.streams.push(s),M(e),!0)}function it(t,s){let e=h(),l=e.find(a=>a.id===t);l&&(l.streams=l.streams.filter(a=>a!==s),M(e))}function At(t){return h().some(s=>s.streams.includes(t))}function w(){let t=$("#panel-playlists");if(!t)return;let s=D.data?.streams||[],e=document.activeElement?.id==="pl-music-search",l=null;if(e){try{l=document.activeElement.selectionStart}catch{}T=document.activeElement.value||""}if(t.innerHTML=`
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u30B5\u30D6\u30BF\u30D6">
        <button class="pl-subtab${g==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${g==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${g==="music"?" active":""}"
          data-pl-subtab="music" role="tab"
          aria-selected="${g==="music"}">\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2</button>
        <button class="pl-subtab${g==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${g==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${h().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${g==="all-streams"?Z(s,k):g==="music"?ot():$t(s)}
      </div>
    </div>
  `,g==="music"&&dt(),e){let a=$("#pl-music-search");if(a&&(a.focus(),l!==null))try{a.setSelectionRange(l,l)}catch{}}t.onclick=a=>{let n=a.target.closest("[data-pl-subtab]");if(n){g=n.dataset.plSubtab,g==="all-streams"&&(k=1),w();return}let m=a.target.closest("[data-pl-sort]");if(m){H=m.dataset.plSort,k=1,K(s);return}let y=a.target.closest("[data-pl-page]");if(y&&!y.disabled){k=Number(y.dataset.plPage),K(s);return}let o=a.target.closest("[data-music-view]");if(o){_=o.dataset.musicView,B();return}let i=a.target.closest("[data-play-music]");if(i&&f?.length){let b=Number(i.dataset.playMusic);import("./chunk-JRCBHL36.js").then(u=>u.playMusicQueue(f,b));return}let c=a.target.closest("[data-watch-music]");if(c&&f?.length){let b=Number(c.dataset.watchMusic),u=f[b];u?.url&&window.__openStreamViewer?.({url:u.url,title:u.title,isMv:!0});return}let r=a.target.closest("[data-playlist-add-mv]");if(r){let b=r.dataset.playlistAddMv,u=r.dataset.streamTitle||"";St("mv:"+b,u);return}g==="my-playlists"&&_t(a,s)},t.oninput=a=>{let n=a.target.closest("#pl-music-search");n&&(T=n.value||"",clearTimeout(R),R=setTimeout(B,100))},t.oncompositionend=a=>{let n=a.target.closest("#pl-music-search");n&&(T=n.value||"",clearTimeout(R),B())},t.addEventListener("error",a=>{let n=a.target;if(!n.classList.contains("pl-sg-thumb"))return;let m=n.dataset.fallback;m&&n.src!==m&&(n.src=m,delete n.dataset.fallback)},!0)}var rt=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function ct(t,s){let e=t.slice();return s==="oldest"?e.reverse():s==="most-songs"?e.sort((l,a)=>(a.songs?.length??0)-(l.songs?.length??0)):s==="fewest-songs"?e.sort((l,a)=>(l.songs?.length??0)-(a.songs?.length??0)):e}function Z(t,s){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let e=ct(t,H),l=e.length,a=Math.max(1,Math.ceil(l/j)),n=Math.min(Math.max(1,s),a),m=(n-1)*j,o=e.slice(m,m+j).map(r=>{let b=S(r),u=A(r.url),p=I(r.url),v=r.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${d(b)}"
        title="${d(r.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${u?`<img class="pl-sg-thumb" src="${d(u)}"
                data-fallback="${d(p)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${v}<span class="pl-sg-badge-unit">\u66F2</span></span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${d(r.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${d(P(r.date)||"")}</span>
        </div>
      </button>`}).join(""),i=a>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${n-1}"
        ${n<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${n} / ${a}</span>
      <button class="pl-page-btn" data-pl-page="${n+1}"
        ${n>=a?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${rt.map(r=>`
        <button class="pl-sort-opt${H===r.key?" active":""}"
          data-pl-sort="${r.key}" type="button">${r.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${o}</div>${i}`}function K(t){let s=$("#pl-subtab-body");if(!s){w();return}s.innerHTML=Z(t,k);let e=$("#panel-playlists");e&&e.addEventListener("error",l=>{let a=l.target;if(!a.classList.contains("pl-sg-thumb"))return;let n=a.dataset.fallback;n&&a.src!==n&&(a.src=n,delete a.dataset.fallback)},{once:!0,capture:!0}),s.scrollIntoView({behavior:"smooth",block:"start"})}function ot(){if(f===null){let t=z();t.length&&(f=t)}return X(f||[])}async function dt(){if(f!==null){O();return}f=z(),E=!0,O();let t=await mt();E=!1,f=Array.isArray(t)?t:[],O()}function O(){if(g!=="music")return;let t=$("#pl-subtab-body");t&&($("#pl-music-search")?B():t.innerHTML=X(f||[]))}function X(t){return ut(t)+`<div id="pl-music-results">${tt(t)}</div>`}function ut(t){let s=N(),l=F(t).length;return`
    <div class="pl-music-viewbar">
      <label class="pl-music-search-wrap">
        <span class="pl-music-search-icon" aria-hidden="true">\u2315</span>
        <input id="pl-music-search" class="pl-music-search" type="search"
          value="${d(s)}"
          placeholder="\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3067\u691C\u7D22"
          aria-label="\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2\u3092\u691C\u7D22">
      </label>
      <span class="pl-music-count">${l}${l===t.length?"":` / ${t.length}`}\u4EF6</span>
      <div class="pl-music-views">
        <button class="pl-music-view-btn${_==="grid"?" active":""}" data-music-view="grid"     type="button">\u30B0\u30EA\u30C3\u30C9</button>
        <button class="pl-music-view-btn${_==="list"?" active":""}" data-music-view="list"     type="button">\u30EA\u30B9\u30C8</button>
        <button class="pl-music-view-btn${_==="category"?" active":""}" data-music-view="category" type="button">\u30AB\u30C6\u30B4\u30EA</button>
      </div>
    </div>`}function tt(t){let s=F(t);return E&&!t.length?'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p><p class="pl-empty-hint">\u691C\u7D22\u6B04\u306F\u3053\u306E\u307E\u307E\u5165\u529B\u3067\u304D\u307E\u3059</p></div>':t.length?s.length?_==="grid"?J(s):_==="list"?ht(s):_==="category"?yt(s):J(s):E?`<div class="pl-empty-state"><p>\u6700\u65B0\u30C7\u30FC\u30BF\u3092\u78BA\u8A8D\u4E2D\u2026</p><p class="pl-empty-hint">\u300C${d(N())}\u300D\u306E\u5019\u88DC\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</p></div>`:'<div class="pl-empty-state"><p>\u4E00\u81F4\u3059\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093</p><p class="pl-empty-hint">\u300C\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u300D\u306E\u3088\u3046\u306B\u533A\u5207\u3063\u3066\u691C\u7D22\u3067\u304D\u307E\u3059</p></div>':'<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>'}function N(){let t=$("#pl-music-search");return t&&(T=t.value||""),T}function B(){let t=f||[],s=$(".pl-music-count");if(s){let l=F(t).length;s.textContent=`${l}${l===t.length?"":` / ${t.length}`}\u4EF6`}document.querySelectorAll("[data-music-view]").forEach(l=>{l.classList.toggle("active",l.dataset.musicView===_)});let e=$("#pl-music-results");e&&(e.innerHTML=tt(t))}function z(){try{let t=JSON.parse(localStorage.getItem(U)||"null");return Array.isArray(t?.videos)?t.videos:[]}catch{return[]}}function pt(t){try{localStorage.setItem(U,JSON.stringify({videos:t,cachedAt:Date.now()}))}catch{}}async function mt(){return C||(C=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>{let s=Array.isArray(t?.videos)?t.videos:[];return pt(s),s}).catch(()=>f||z()),C)}function st(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/[！-～]/g,s=>String.fromCharCode(s.charCodeAt(0)-65248)).replace(/[‐-‒–—―ー]/g,"-").replace(/\s+/g," ").trim()}function bt(t){return st(t).split(/[\/／|｜\s]+/).map(s=>s.trim()).filter(Boolean)}function vt(t){let s=t.title||"",e=s.split(/[\/／|｜]/).map(a=>a.trim()).filter(Boolean),l=L(t).label;return st([s,...e,t.originalArtist,t.character,t.type,l].filter(Boolean).join(" "))}function F(t){let s=bt(N()),e=t.map((l,a)=>({v:l,i:a}));return s.length?e.filter(({v:l})=>{let a=vt(l);return s.every(n=>a.includes(n))}):e}function L(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function et(t,s){let e=A(t.url),l=I(t.url),{label:a,cls:n,sub:m}=L(t);return`
    <div class="mv-card">
      <button class="mv-card-thumb-btn" type="button" data-play-music="${s}" aria-label="\u518D\u751F">
        ${e?`<img class="mv-card-thumb" src="${d(e)}" data-fallback="${d(l)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-play-icon">\u25B6</span>
        <span class="mv-type-badge ${n}">${a}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${d(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${d(m)}</span>
      </div>
      <div class="mv-card-actions">
        <button class="mv-watch-btn" type="button" data-watch-music="${s}" title="\u52D5\u753B\u3067\u898B\u308B">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
        </button>
        <button class="mv-add-btn" type="button"
          data-playlist-add-mv="${d(t.id)}"
          data-stream-title="${d(t.title||"")}"
          title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
      </div>
    </div>`}function ft(t,s){let{label:e,cls:l,sub:a}=L(t);return`
    <div class="mv-list-row">
      <span class="mv-list-num">${s+1}</span>
      <button class="mv-list-play" type="button" data-play-music="${s}" aria-label="\u518D\u751F">\u25B6</button>
      <div class="mv-list-info">
        <span class="mv-list-title">${d(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${d(a)}</span>
      </div>
      <span class="mv-type-badge ${l}">${e}</span>
      <button class="mv-watch-btn" type="button" data-watch-music="${s}" title="\u52D5\u753B\u3067\u898B\u308B">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
      </button>
      <button class="mv-add-btn" type="button"
        data-playlist-add-mv="${d(t.id)}"
        data-stream-title="${d(t.title||"")}"
        title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
    </div>`}function J(t){return`<div class="mv-grid">${t.map(({v:s,i:e})=>et(s,e)).join("")}</div>`}function ht(t){return`<div class="mv-list">${t.map(({v:s,i:e})=>ft(s,e)).join("")}</div>`}function yt(t){return`
    <div class="mv-category">
      ${[{key:"original",label:"\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2\uFF08\u500B\u4EBA\uFF09"},{key:"office",label:"Re:AcT \u30AA\u30EA\u66F2"},{key:"character",label:"\u30AD\u30E3\u30E9\u30BD\u30F3 / \u58F0\u512A\u30AA\u30EA\u66F2"},{key:"cover",label:"\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09"}].map(({key:e,label:l})=>({label:l,items:t.filter(({v:a})=>a.type===e)})).filter(({items:e})=>e.length>0).map(({label:e,items:l})=>`
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">${e} <span class="mv-cat-count">${l.length}</span></h3>
        <div class="mv-grid">${l.map(({v:a,i:n})=>et(a,n)).join("")}</div>
      </div>`).join("")}
    </div>`}function Ct(){return f||[]}function gt(t){if(!t?.startsWith("mv:"))return null;let s=t.slice(3);return(f||[]).find(e=>e.id===s)||null}function $t(t){let s=h();return s.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${s.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${s.map(e=>wt(e,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function wt(t,s){let e=t.streams.map(o=>{let i=o.startsWith("mv:"),c=i?gt(o):null;return{skey:o,isMv:i,mv:c,stream:i?null:s.find(r=>S(r)===o)}}),l=e.find(({stream:o,mv:i})=>o?.url||i?.url)?.stream?.url||e.find(({mv:o})=>o?.url)?.mv?.url,a=l?`<img class="pl-card-cover" src="${d(A(l))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",n=e.length,m=e.map(({skey:o,isMv:i,mv:c,stream:r},b)=>{let u=d(t.id+"|:|"+o),p=`
      <div class="pl-sort-btns">
        <button class="pl-sort-btn" data-pl-move="${u}|:|up"
          type="button" title="\u4E0A\u3078" ${b===0?"disabled":""}>\u2191</button>
        <button class="pl-sort-btn" data-pl-move="${u}|:|down"
          type="button" title="\u4E0B\u3078" ${b===n-1?"disabled":""}>\u2193</button>
      </div>`,v=`<button class="pl-rm-btn" data-pl-rm-stream="${u}" type="button" title="\u524A\u9664">\u2715</button>`;if(i){if(!c)return`
        <div class="pl-stream-row pl-stream-missing">${p}
          <span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${v}
        </div>`;let{label:x,sub:at}=L(c),lt=c.type||"original",q=(f||[]).indexOf(c);return`
        <div class="pl-stream-row">
          ${p}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${lt}">${x}</span></span>
            <span class="pl-stream-title">${d(c.title||"\u2014")}</span>
            <span class="pl-stream-meta">${d(at)}</span>
          </div>
          <div class="pl-stream-actions">
            ${q>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${q}" type="button" title="\u518D\u751F">\u25B6</button>`:""}
            ${v}
          </div>
        </div>`}return r?`
      <div class="pl-stream-row">
        ${p}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${P(r.date)}</span>
          <span class="pl-stream-title">${d(r.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${r.index}\u67A0 \xB7 ${r.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${r.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${d(o)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          ${v}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing">${p}
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${v}
      </div>`}).join(""),y=e.map(({stream:o,mv:i})=>{let c=o?.url||i?.url;return c?V(c):""}).filter(Boolean);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${a?`<div class="pl-card-cover-wrap">${a}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${d(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${d(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u4EF6</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${d(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${m||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
      ${y.length?`
      <div class="pl-card-footer">
        <button class="pl-yt-share-btn" data-pl-yt-share="${d(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${y.length}\u672C)
        </button>
      </div>`:""}
    </div>`}function _t(t,s){if(t.target.closest("#pl-new-btn")){Mt();return}let e=t.target.closest("[data-pl-del]");if(e){let i=e.dataset.plDel,c=h().find(r=>r.id===i);c&&confirm(`\u300C${c.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(nt(i),w());return}let l=t.target.closest("[data-pl-rm-stream]");if(l){let[i,c]=l.dataset.plRmStream.split("|:|");it(i,c),w();return}let a=t.target.closest("[data-pl-play-stream]");if(a){let i=a.dataset.plPlayStream,c=s.find(r=>S(r)===i);c?.url&&window.__openStreamViewer?.(c);return}let n=t.target.closest("[data-play-music-pl]");if(n&&f?.length){let i=Number(n.dataset.playMusicPl);import("./chunk-JRCBHL36.js").then(c=>c.playMusicQueue(f,i));return}let m=t.target.closest("[data-pl-rename]");if(m){let i=m.dataset.plRename,c=h().find(b=>b.id===i);if(!c)return;let r=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",c.name)?.trim();if(r){let b=h(),u=b.find(p=>p.id===i);u&&(u.name=r,M(b),w())}return}let y=t.target.closest("[data-pl-move]");if(y){let i=y.dataset.plMove.split("|:|"),[c,r,b]=i,u=h(),p=u.find(x=>x.id===c);if(!p)return;let v=p.streams.indexOf(r);if(v<0)return;b==="up"&&v>0?([p.streams[v-1],p.streams[v]]=[p.streams[v],p.streams[v-1]],M(u),w()):b==="down"&&v<p.streams.length-1&&([p.streams[v],p.streams[v+1]]=[p.streams[v+1],p.streams[v]],M(u),w());return}let o=t.target.closest("[data-pl-yt-share]");if(o){let i=o.dataset.plYtShare,c=h().find(u=>u.id===i);if(!c)return;let r=c.streams.map(u=>s.find(p=>S(p)===u)).filter(u=>u?.url).map(u=>V(u.url)).filter(Boolean);if(!r.length){alert("YouTube\u306EURL\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u308B\u914D\u4FE1\u304C\u3042\u308A\u307E\u305B\u3093");return}let b=`https://www.youtube.com/watch_videos?video_ids=${r.join(",")}`;window.open(b,"_blank","noopener noreferrer");return}}function Mt(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(W(t),w())}function St(t,s){let e=$("#pl-add-modal");e||(e=document.createElement("div"),e.id="pl-add-modal",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),document.body.appendChild(e));let l=h(),a=()=>{let m=h(),y=m.length?m.map(o=>{let i=o.streams.includes(t);return`
            <button class="pl-modal-item${i?" pl-modal-item--added":" pl-modal-item--free"}"
              data-pl-add="${d(o.id)}"
              ${i?'disabled aria-disabled="true"':""} type="button">
              <div class="pl-modal-item-info">
                <span class="pl-modal-item-name">${d(o.name)}</span>
                <span class="pl-modal-item-count">${o.streams.length}\u67A0</span>
              </div>
              <span class="pl-modal-item-status${i?" status--added":" status--free"}">
                ${i?'<span class="pl-modal-status-check">\u2713</span> \u767B\u9332\u6E08\u307F':"\uFF0B \u8FFD\u52A0"}
              </span>
            </button>`}).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u5148\u306B\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u3057\u3066\u304F\u3060\u3055\u3044</span></p>';e.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148\u3092\u9078\u629E</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
        </div>
        <div class="pl-modal-sub">${d(s||"\u914D\u4FE1")}</div>
        <div class="pl-modal-list" id="pl-modal-list">${y}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">\uFF0B</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,e.hidden=!1,e.querySelector("#pl-modal-close").addEventListener("click",n),e.querySelector("#pl-modal-backdrop").addEventListener("click",n),e.querySelector("#pl-modal-new").addEventListener("click",()=>{let o=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!o)return;let i=W(o);Y(i.id,t),n(),Q(`\u300C${o}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)}),e.querySelectorAll("[data-pl-add]:not([disabled])").forEach(o=>{o.addEventListener("click",()=>{let i=o.dataset.plAdd,c=h().find(r=>r.id===i);Y(i,t),a(),Q(`\u300C${c?.name}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)})})},n=()=>{e.hidden=!0};a(),document.addEventListener("keydown",function m(y){y.key==="Escape"&&(n(),document.removeEventListener("keydown",m))})}function Q(t){let s=$("#pl-toast");s||(s=document.createElement("div"),s.id="pl-toast",document.body.appendChild(s)),s.textContent=t,s.classList.add("pl-toast--show"),clearTimeout(s._timer),s._timer=setTimeout(()=>s.classList.remove("pl-toast--show"),2500)}export{Y as addStreamToPlaylist,W as createPlaylist,nt as deletePlaylist,Ct as getMusicVideos,h as getPlaylists,At as isStreamInAnyPlaylist,it as removeStreamFromPlaylist,w as renderPlaylists,gt as resolveMusicVideoId,St as showAddToPlaylistModal};
