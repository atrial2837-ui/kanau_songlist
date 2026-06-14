import{e as F}from"./chunk-JT7WCFD3.js";import{F as N,H as E,I as K,J as T,K as P,a as w,c as r}from"./chunk-T4BEBXYH.js";var rt="kanau-playlists",it="kanau-music-videos-cache-v2",G=24,$="all-streams",I=1,Z="newest",k="grid",v=null,V=null,H=!1,B="",J=null,C=!1,_=new Set;function g(){try{return JSON.parse(localStorage.getItem(rt)||"[]")}catch{return[]}}function L(t){try{localStorage.setItem(rt,JSON.stringify(t))}catch{}}function ct(t){let e=g(),s={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return e.unshift(s),L(e),s}function $t(t){L(g().filter(e=>e.id!==t))}function wt(t,e){let s=g(),n=s.find(a=>a.id===t);return!n||n.streams.includes(e)?!1:(n.streams.push(e),L(s),!0)}function _t(t,e){let s=g(),n=s.find(a=>a.id===t);n&&(n.streams=n.streams.filter(a=>a!==e),L(s))}function Y(t){return g().some(e=>e.streams.includes(t))}function M(){let t=w("#panel-playlists");if(!t)return;let e=F.data?.streams||[];if($==="my-playlists"&&v===null){let a=D();a.length?v=a:ut().then(l=>{v===null&&(v=Array.isArray(l)?l:[]),$==="my-playlists"&&M()})}let s=document.activeElement?.id==="pl-music-search",n=null;if(s){try{n=document.activeElement.selectionStart}catch{}B=document.activeElement.value||""}if(t.innerHTML=`
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u30B5\u30D6\u30BF\u30D6">
        <button class="pl-subtab${$==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${$==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${$==="music"?" active":""}"
          data-pl-subtab="music" role="tab"
          aria-selected="${$==="music"}">\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2</button>
        <button class="pl-subtab${$==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${$==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${g().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${$==="all-streams"?ot(e,I):$==="music"?kt():Ht(e)}
      </div>
    </div>
  `,$==="music"&&Mt(),s){let a=w("#pl-music-search");if(a&&(a.focus(),n!==null))try{a.setSelectionRange(n,n)}catch{}}t.onclick=a=>{let l=a.target.closest("[data-pl-subtab]");if(l){$=l.dataset.plSubtab,$==="all-streams"&&(I=1),M();return}let i=a.target.closest("[data-pl-sort]");if(i){Z=i.dataset.plSort,I=1,st(e);return}let u=a.target.closest("[data-pl-page]");if(u&&!u.disabled){I=Number(u.dataset.plPage),st(e);return}let m=a.target.closest("[data-music-view]:not([data-music-select-toggle])");if(m){k=m.dataset.musicView,R();return}if(a.target.closest("[data-music-select-toggle]")){C=!C,C||_.clear(),U();return}let o=a.target.closest("[data-mv-select]");if(o){let c=o.dataset.mvSelect,b=!_.has(c);b?_.add(c):_.delete(c);let d=o.classList.contains("mv-list-row")?o:o.closest(".mv-card");d&&d.classList.toggle("is-selected",b);let p=d?.querySelector(".mv-card-checkbox, .mv-list-checkbox");p&&(p.textContent=b?"\u2713":""),o.setAttribute("aria-pressed",String(b)),Ct();return}if(a.target.closest("[data-music-select-all]")){q(v||[]).forEach(({v:c})=>_.add(c.id)),U();return}if(a.target.closest("[data-music-select-clear]")){_.clear(),U();return}if(a.target.closest("[data-music-select-add]")){if(!_.size)return;let c=[...v||[]].filter(b=>_.has(b.id)).map(b=>"mv:"+b.id);nt(c);return}let f=a.target.closest("[data-playlist-add-mv]");if(f){let c=f.dataset.playlistAddMv,b=f.dataset.streamTitle||"";nt("mv:"+c,b);return}$==="my-playlists"&&Yt(a,e)},t.oninput=a=>{let l=a.target.closest("#pl-music-search");l&&(B=l.value||"",clearTimeout(J),J=setTimeout(R,100))},t.oncompositionend=a=>{let l=a.target.closest("#pl-music-search");l&&(B=l.value||"",clearTimeout(J),R())},t.addEventListener("error",a=>{let l=a.target;if(!l.classList.contains("pl-sg-thumb"))return;let i=l.dataset.fallback;i&&l.src!==i&&(l.src=i,delete l.dataset.fallback)},!0),zt()}var St=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function xt(t,e){let s=t.slice();return e==="oldest"?s.reverse():e==="most-songs"?s.sort((n,a)=>(a.songs?.length??0)-(n.songs?.length??0)):e==="fewest-songs"?s.sort((n,a)=>(n.songs?.length??0)-(a.songs?.length??0)):s}function ot(t,e){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let s=xt(t,Z),n=s.length,a=Math.max(1,Math.ceil(n/G)),l=Math.min(Math.max(1,e),a),i=(l-1)*G,m=s.slice(i,i+G).map(c=>{let b=E(c),d=T(c.url),p=P(c.url),h=c.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${r(b)}"
        title="${r(c.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${d?`<img class="pl-sg-thumb" src="${r(d)}"
                data-fallback="${r(p)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${h}<span class="pl-sg-badge-unit">\u66F2</span></span>
          <span class="pl-sg-add${Y(b)?" is-saved":""}" role="button" tabindex="0"
            aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"
            data-playlist-add="${r(b)}" data-stream-title="${r(c.title||"\u914D\u4FE1")}"
            title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">${et}</span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${r(c.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${r(N(c.date)||"")}</span>
        </div>
      </button>`}).join(""),o=a>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${l-1}"
        ${l<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${l} / ${a}</span>
      <button class="pl-page-btn" data-pl-page="${l+1}"
        ${l>=a?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${St.map(c=>`
        <button class="pl-sort-opt${Z===c.key?" active":""}"
          data-pl-sort="${c.key}" type="button">${c.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${m}</div>${o}`}function st(t){let e=w("#pl-subtab-body");if(!e){M();return}e.innerHTML=ot(t,I);let s=w("#panel-playlists");s&&s.addEventListener("error",n=>{let a=n.target;if(!a.classList.contains("pl-sg-thumb"))return;let l=a.dataset.fallback;l&&a.src!==l&&(a.src=l,delete a.dataset.fallback)},{once:!0,capture:!0}),e.scrollIntoView({behavior:"smooth",block:"start"})}function kt(){if(v===null){let t=D();t.length&&(v=t)}return X(v||[])}async function Mt(){if(v!==null){W();return}v=D(),H=!0,W();let t=await ut();H=!1,v=Array.isArray(t)?t:[],W()}function W(){if($!=="music")return;let t=w("#pl-subtab-body");t&&(w("#pl-music-search")?R():t.innerHTML=X(v||[]))}function X(t){return Lt(t)+`<div id="pl-music-results">${dt(t)}</div>`}function Lt(t){let e=tt(),n=q(t).length;return`
    <div class="pl-music-viewbar">
      <label class="pl-music-search-wrap">
        <span class="pl-music-search-icon" aria-hidden="true">\u2315</span>
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
        <button class="pl-music-view-btn pl-music-select-toggle${C?" active":""}" data-music-select-toggle="1" type="button" ${n?"":"disabled"} title="\u8907\u6570\u9078\u629E\u3057\u3066\u307E\u3068\u3081\u3066\u8FFD\u52A0">\u2611 \u9078\u629E</button>
      </div>
    </div>
    ${C?Et():""}`}function Et(){let t=_.size;return`
    <div class="pl-music-selbar">
      <span class="pl-music-selcount" id="pl-music-selcount">${t}\u66F2\u3092\u9078\u629E\u4E2D</span>
      <div class="pl-music-selactions">
        <button class="pl-sel-btn" data-music-select-all="1" type="button">\u8868\u793A\u4E2D\u3092\u3059\u3079\u3066\u9078\u629E</button>
        <button class="pl-sel-btn" data-music-select-clear="1" type="button" ${t?"":"disabled"}>\u9078\u629E\u89E3\u9664</button>
        <button class="pl-sel-btn primary" data-music-select-add="1" type="button" ${t?"":"disabled"}>\uFF0B ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0</button>
        <button class="pl-sel-btn" data-music-select-toggle="1" type="button">\u5B8C\u4E86</button>
      </div>
    </div>`}function dt(t){let e=q(t);return H&&!t.length?'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p><p class="pl-empty-hint">\u691C\u7D22\u6B04\u306F\u3053\u306E\u307E\u307E\u5165\u529B\u3067\u304D\u307E\u3059</p></div>':t.length?e.length?k==="grid"?at(e):k==="list"?Pt(e):k==="category"?Vt(e):at(e):H?`<div class="pl-empty-state"><p>\u6700\u65B0\u30C7\u30FC\u30BF\u3092\u78BA\u8A8D\u4E2D\u2026</p><p class="pl-empty-hint">\u300C${r(tt())}\u300D\u306E\u5019\u88DC\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</p></div>`:'<div class="pl-empty-state"><p>\u4E00\u81F4\u3059\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093</p><p class="pl-empty-hint">\u300C\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u300D\u306E\u3088\u3046\u306B\u533A\u5207\u3063\u3066\u691C\u7D22\u3067\u304D\u307E\u3059</p></div>':'<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>'}function tt(){let t=w("#pl-music-search");return t&&(B=t.value||""),B}function U(){let t=w("#pl-subtab-body");t&&(t.innerHTML=X(v||[]))}function Ct(){let t=_.size,e=w("#pl-music-selcount");e&&(e.textContent=`${t}\u66F2\u3092\u9078\u629E\u4E2D`);let s=document.querySelector("[data-music-select-add]");s&&(s.disabled=!t,s.textContent=`\uFF0B ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0`);let n=document.querySelector("[data-music-select-clear]");n&&(n.disabled=!t)}function R(){let t=v||[],e=w(".pl-music-count");if(e){let n=q(t).length;e.textContent=`${n}${n===t.length?"":` / ${t.length}`}\u4EF6`}document.querySelectorAll("[data-music-view]").forEach(n=>{n.classList.toggle("active",n.dataset.musicView===k)});let s=w("#pl-music-results");s&&(s.innerHTML=dt(t))}function D(){try{let t=JSON.parse(localStorage.getItem(it)||"null");return Array.isArray(t?.videos)?t.videos:[]}catch{return[]}}function Tt(t){try{localStorage.setItem(it,JSON.stringify({videos:t,cachedAt:Date.now()}))}catch{}}async function ut(){return V||(V=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>{let e=Array.isArray(t?.videos)?t.videos:[];return Tt(e),e}).catch(()=>v||D()),V)}function pt(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[‐-‒–—―ー]/g,"-").replace(/\s+/g," ").trim()}function At(t){return pt(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function It(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(a=>a.trim()).filter(Boolean),n=z(t).label;return pt([e,...s,t.originalArtist,t.character,t.type,n].filter(Boolean).join(" "))}function q(t){let e=At(tt()),s=t.map((n,a)=>({v:n,i:a}));return e.length?s.filter(({v:n})=>{let a=It(n);return e.every(l=>a.includes(l))}):s}function z(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function j(t){return t.publishedAt?String(t.publishedAt).replaceAll("-","/"):"\u516C\u958B\u65E5\u672A\u767B\u9332"}function mt(t,e){let s=T(t.url),n=P(t.url),{label:a,cls:l}=z(t),i=Y("mv:"+t.id);if(C){let u=_.has(t.id);return`
    <div class="mv-card mv-card--select${u?" is-selected":""}">
      <button class="mv-card-thumb-btn" type="button" data-mv-select="${r(t.id)}" aria-pressed="${u}">
        ${s?`<img class="mv-card-thumb" src="${r(s)}" data-fallback="${r(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-checkbox">${u?"\u2713":""}</span>
        <span class="mv-type-badge ${l}">${a}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${r(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${r(j(t))}</span>
      </div>
    </div>`}return`
    <div class="mv-card">
      <a class="mv-card-thumb-btn" href="${r(t.url||"#")}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F">
        ${s?`<img class="mv-card-thumb" src="${r(s)}" data-fallback="${r(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-type-badge ${l}">${a}</span>
      </a>
      <button class="pl-sg-add mv-add-btn mv-add-btn--overlay${i?" is-saved":""}" type="button"
        data-playlist-add-mv="${r(t.id)}"
        data-stream-title="${r(t.title||"")}"
        aria-label="${i?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}"
        title="${i?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${et}</button>
      <div class="mv-card-info">
        <span class="mv-card-title">${r(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${r(j(t))}</span>
      </div>
    </div>`}function Bt(t,e){let s=T(t.url),n=P(t.url),{label:a,cls:l,sub:i}=z(t),u=Y("mv:"+t.id);if(C){let m=_.has(t.id);return`
    <div class="mv-list-row mv-list-row--select${m?" is-selected":""}" data-mv-select="${r(t.id)}" role="button" aria-pressed="${m}">
      <span class="mv-list-checkbox">${m?"\u2713":""}</span>
      <span class="mv-list-thumb">
        ${s?`<img src="${r(s)}" data-fallback="${r(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
      </span>
      <div class="mv-list-info">
        <span class="mv-list-title">${r(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${r(j(t))}</span>
      </div>
      <span class="mv-type-badge ${l}">${a}</span>
    </div>`}return`
    <div class="mv-list-row">
      <a class="mv-list-thumb" href="${r(t.url||"#")}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F">
        ${s?`<img src="${r(s)}" data-fallback="${r(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
      </a>
      <div class="mv-list-info">
        <span class="mv-list-title">${r(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${r(j(t))}</span>
      </div>
      <span class="mv-type-badge ${l}">${a}</span>
      <button class="mv-add-btn${u?" is-saved":""}" type="button"
        data-playlist-add-mv="${r(t.id)}"
        data-stream-title="${r(t.title||"")}"
        title="${u?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${u?"\u25C6":"\uFF0B"}</button>
    </div>`}function at(t){return`<div class="mv-grid">${t.map(({v:e,i:s})=>mt(e,s)).join("")}</div>`}function Pt(t){return`<div class="mv-list">${t.map(({v:e,i:s})=>Bt(e,s)).join("")}</div>`}function Vt(t){return`
    <div class="mv-category">
      ${[{key:"original",label:"\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2\uFF08\u500B\u4EBA\uFF09"},{key:"office",label:"Re:AcT \u30AA\u30EA\u66F2"},{key:"character",label:"\u30AD\u30E3\u30E9\u30BD\u30F3 / \u58F0\u512A\u30AA\u30EA\u66F2"},{key:"cover",label:"\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09"}].map(({key:s,label:n})=>({label:n,items:t.filter(({v:a})=>a.type===s)})).filter(({items:s})=>s.length>0).map(({label:s,items:n})=>`
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">${s} <span class="mv-cat-count">${n.length}</span></h3>
        <div class="mv-grid">${n.map(({v:a,i:l})=>mt(a,l)).join("")}</div>
      </div>`).join("")}
    </div>`}function Kt(){return v||[]}function O(t){if(!t?.startsWith("mv:"))return null;let e=t.slice(3);return(v||[]).find(s=>s.id===e)||null}function ft(t,e){return(t.streams||[]).map(s=>{if(s.startsWith("mv:")){let a=O(s);return a?.url?K(a.url):""}let n=e.find(a=>E(a)===s);return n?.url?K(n.url):""}).filter(Boolean)}function Rt(t){if(!t.length){alert("YouTube\u3067\u518D\u751F\u3067\u304D\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093");return}let e;if(t.length===1)e=`https://www.youtube.com/watch?v=${t[0]}`;else{let s=t.slice(0,50);t.length>50&&alert(`\u52D5\u753B\u304C${t.length}\u672C\u3042\u308A\u307E\u3059\u3002\u5148\u982D50\u672C\u3067\u9023\u7D9A\u518D\u751F\u3057\u307E\u3059\u3002`),e=`https://www.youtube.com/watch_videos?video_ids=${s.join(",")}`}window.open(e,"_blank","noopener noreferrer")}function Ht(t){let e=g();return e.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${e.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${e.map(s=>jt(s,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function jt(t,e){let s=t.streams.map(m=>{let o=m.startsWith("mv:"),f=o?O(m):null;return{skey:m,isMv:o,mv:f,stream:o?null:e.find(c=>E(c)===m)}}),n=s.find(({stream:m,mv:o})=>m?.url||o?.url)?.stream?.url||s.find(({mv:m})=>m?.url)?.mv?.url,a=n?`<img class="pl-card-cover" src="${r(T(n))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",l=s.length,i=s.map(({skey:m,isMv:o,mv:f,stream:c})=>{let b=r(t.id+"|:|"+m),d='<span class="pl-drag-handle" aria-hidden="true" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048">\u283F</span>',p=`<button class="pl-rm-btn" data-pl-rm-stream="${b}" type="button" title="\u524A\u9664">\u2715</button>`;if(o){if(!f)return`
        <div class="pl-stream-row pl-stream-missing" data-pl-skey="${r(m)}" data-pl-id="${r(t.id)}">${d}
          <div class="pl-stream-info"><span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span></div>
          <div class="pl-stream-actions">${p}</div>
        </div>`;let{label:h,sub:x}=z(f),y=f.type||"original",S=(v||[]).indexOf(f);return`
        <div class="pl-stream-row" data-pl-skey="${r(m)}" data-pl-id="${r(t.id)}">
          ${d}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${y}">${h}</span></span>
            <span class="pl-stream-title">${r(f.title||"\u2014")}</span>
            <span class="pl-stream-meta">${r(x)}</span>
          </div>
          <div class="pl-stream-actions">
            ${S>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${S}" type="button" title="\u518D\u751F">\u25B6</button>`:""}
            ${p}
          </div>
        </div>`}return c?`
      <div class="pl-stream-row" data-pl-skey="${r(m)}" data-pl-id="${r(t.id)}">
        ${d}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${N(c.date)}</span>
          <span class="pl-stream-title">${r(c.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${c.index}\u67A0 \xB7 ${c.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${c.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${r(m)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          ${p}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing" data-pl-skey="${r(m)}" data-pl-id="${r(t.id)}">${d}
        <div class="pl-stream-info"><span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span></div>
        <div class="pl-stream-actions">${p}</div>
      </div>`}).join(""),u=ft(t,e);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${a?`<div class="pl-card-cover-wrap">${a}</div>`:""}
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
      ${u.length||t.streams.length?`
      <div class="pl-card-footer">
        ${u.length?`
        <button class="pl-yt-share-btn" data-pl-yt-share="${r(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${u.length}\u672C)
        </button>`:""}
        ${t.streams.length?`
        <button class="pl-yt-share-btn" data-pl-share="${r(t.id)}"
          type="button" title="\u3053\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">\u{1F517} \u30EA\u30F3\u30AF\u3092\u5171\u6709</button>`:""}
      </div>`:""}
    </div>`}function Yt(t,e){if(t.target.closest("#pl-new-btn")){Dt();return}let s=t.target.closest("[data-pl-share]");if(s){let o=g().find(p=>p.id===s.dataset.plShare);if(!o)return;let f=JSON.stringify({n:o.name,s:o.streams}),c=btoa(String.fromCharCode(...new TextEncoder().encode(f))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),b=`${location.origin}${location.pathname}?pl=${c}`,d=p=>{s.textContent=p?"\u2713 \u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",setTimeout(()=>{s.textContent="\u{1F517} \u30EA\u30F3\u30AF\u3092\u5171\u6709"},1600)};navigator.clipboard?.writeText(b).then(()=>d(!0)).catch(()=>{try{let p=document.createElement("textarea");p.value=b,p.style.cssText="position:fixed;opacity:0;",document.body.appendChild(p),p.select();let h=document.execCommand("copy");p.remove(),d(h)}catch{d(!1)}});return}let n=t.target.closest("[data-pl-del]");if(n){let o=n.dataset.plDel,f=g().find(c=>c.id===o);f&&confirm(`\u300C${f.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&($t(o),M());return}let a=t.target.closest("[data-pl-rm-stream]");if(a){let[o,f]=a.dataset.plRmStream.split("|:|");_t(o,f),M();return}let l=t.target.closest("[data-pl-play-stream]");if(l){let o=l.closest(".pl-stream-row");if(o&&lt(o,e))return;let f=l.dataset.plPlayStream,c=e.find(b=>E(b)===f);c?.url&&window.__openStreamViewer?.(c);return}let i=t.target.closest("[data-play-music-pl]");if(i){let o=i.closest(".pl-stream-row");if(o&&lt(o,e))return;if(v?.length){let f=Number(i.dataset.playMusicPl);import("./chunk-7Y7QZX3A.js").then(c=>c.playMusicQueue(v,f))}return}let u=t.target.closest("[data-pl-rename]");if(u){let o=u.dataset.plRename,f=g().find(b=>b.id===o);if(!f)return;let c=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",f.name)?.trim();if(c){let b=g(),d=b.find(p=>p.id===o);d&&(d.name=c,L(b),M())}return}let m=t.target.closest("[data-pl-yt-share]");if(m){let o=m.dataset.plYtShare,f=g().find(c=>c.id===o);if(!f)return;Rt(ft(f,e));return}}function Dt(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(ct(t),M())}var et='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>';function qt(t){let e=F.data?.streams||[];for(let s of t.streams||[])if(s.startsWith("mv:")){let n=O(s);if(n?.url)return n.url}else{let n=e.find(a=>E(a)===s);if(n?.url)return n.url}return""}function nt(t,e,s={}){let n=Array.isArray(t)?t.filter(Boolean):[t].filter(Boolean);if(!n.length)return;let a=n.length>1,l=()=>{try{s.onChange?.(n.some(d=>Y(d)))}catch{}},i=w("#pl-add-modal");i||(i=document.createElement("div"),i.id="pl-add-modal",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),document.body.appendChild(i));let u=d=>n.every(p=>(d.streams||[]).includes(p)),m=d=>{let p=u(d),h=qt(d),x=h?T(h):"";return`
      <button class="pl-modal-item${p?" is-saved":""}" data-pl-add="${r(d.id)}"
        type="button" role="checkbox" aria-checked="${p}">
        <span class="pl-modal-item-cover">
          ${x?`<img src="${r(x)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<span class="pl-modal-item-cover--empty">\u266A</span>'}
        </span>
        <span class="pl-modal-item-info">
          <span class="pl-modal-item-name">${r(d.name)}</span>
          <span class="pl-modal-item-count">${d.streams.length}\u66F2</span>
        </span>
        <span class="pl-modal-bookmark${p?" is-saved":""}" aria-hidden="true">${et}</span>
      </button>`},o=()=>{let d=g();return d.length?d.map(m).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u4E0B\u306E\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u304B\u3089\u8FFD\u52A0\u3067\u304D\u307E\u3059</span></p>'},f=a?`${n.length}\u66F2\u3092\u307E\u3068\u3081\u3066\u4FDD\u5B58`:e||"\u914D\u4FE1",c=()=>{i.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
        </div>
        <div class="pl-modal-sub">${r(f)}</div>
        <div class="pl-modal-list" id="pl-modal-list">${o()}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">\uFF0B</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,i.hidden=!1,i.querySelector("#pl-modal-close").addEventListener("click",b),i.querySelector("#pl-modal-backdrop").addEventListener("click",b),i.querySelector("#pl-modal-new").addEventListener("click",()=>{let d=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!d)return;let p=ct(d);n.forEach(y=>wt(p.id,y)),Q(a?`\u300C${d}\u300D\u306B${n.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${d}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`);let h=i.querySelector("#pl-modal-list");h?.querySelector(".pl-modal-empty")&&(h.innerHTML=""),h&&h.insertAdjacentHTML("afterbegin",m(g().find(y=>y.id===p.id))),l()}),i.querySelector("#pl-modal-list").addEventListener("click",d=>{let p=d.target.closest("[data-pl-add]");if(!p)return;let h=p.dataset.plAdd,x=g(),y=x.find(S=>S.id===h);y&&(Array.isArray(y.streams)||(y.streams=[]),u(y)?(n.forEach(S=>{y.streams=y.streams.filter(yt=>yt!==S)}),L(x),Q(a?`${n.length}\u66F2\u3092\u524A\u9664\u3057\u307E\u3057\u305F`:"\u524A\u9664\u3057\u307E\u3057\u305F")):(n.forEach(S=>{y.streams.includes(S)||y.streams.push(S)}),L(x),Q(a?`\u300C${y.name}\u300D\u306B${n.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${y.name}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`)),p.outerHTML=m(g().find(S=>S.id===h)),l())})},b=()=>{i.hidden=!0};c(),document.addEventListener("keydown",function d(p){p.key==="Escape"&&(b(),document.removeEventListener("keydown",d))})}function Q(t){let e=w("#pl-toast");e||(e=document.createElement("div"),e.id="pl-toast",document.body.appendChild(e)),e.textContent=t,e.classList.add("pl-toast--show"),clearTimeout(e._timer),e._timer=setTimeout(()=>e.classList.remove("pl-toast--show"),2500)}function lt(t,e){let s=g().find(l=>l.id===t.dataset.plId);if(!s||!window.__playMyListInViewer)return!1;let n=[];for(let l of s.streams)if(l.startsWith("mv:")){let i=O(l);i?.url&&n.push({kind:"mv",key:l,video:i})}else{let i=e.find(u=>E(u)===l);i?.url&&n.push({kind:"stream",key:l,stream:i})}if(!n.length)return!1;let a=n.findIndex(l=>l.key===t.dataset.plSkey);return a<0&&(a=0),window.__playMyListInViewer({name:s.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:n,idx:a}),!0}function zt(){if($!=="my-playlists")return;let t=w("#panel-playlists");t&&t.querySelectorAll(".pl-stream-list").forEach(e=>{e.addEventListener("pointerdown",Ot,{passive:!1})})}var A=null;function Ot(t){if(A)return;let e=t.target.closest(".pl-drag-handle");if(!e)return;let s=e.closest(".pl-stream-row"),n=e.closest(".pl-stream-list");if(!s||!n)return;t.preventDefault();let a=Array.from(n.querySelectorAll(".pl-stream-row")),l=a.indexOf(s);if(l<0)return;let i=a.map(m=>{let o=m.getBoundingClientRect();return o.top+o.height/2}),u=s.getBoundingClientRect();A={list:n,row:s,rows:a,mids:i,startIdx:l,targetIdx:l,startY:t.clientY,rowH:u.height+(parseFloat(getComputedStyle(n).rowGap||getComputedStyle(n).gap)||0),plId:s.dataset.plId,moved:!1},s.classList.add("is-dragging"),n.classList.add("is-drag-active");try{s.setPointerCapture(t.pointerId)}catch{}s.addEventListener("pointermove",bt,{passive:!1}),s.addEventListener("pointerup",vt),s.addEventListener("pointercancel",gt)}function bt(t){let e=A;if(!e)return;t.preventDefault();let s=t.clientY-e.startY;if(!e.moved&&Math.abs(s)<3)return;e.moved=!0,e.row.style.transform=`translateY(${s}px)`;let n=e.mids[e.startIdx]+s,a=0;for(let l=0;l<e.mids.length;l++)l!==e.startIdx&&n>e.mids[l]&&a++;a!==e.targetIdx&&(e.targetIdx=a,e.rows.forEach((l,i)=>{if(i===e.startIdx)return;let u=0;e.startIdx<a&&i>e.startIdx&&i<=a?u=-e.rowH:e.startIdx>a&&i>=a&&i<e.startIdx&&(u=e.rowH),l.style.transform=u?`translateY(${u}px)`:""}))}function vt(){let t=A;if(!t)return;let{plId:e,startIdx:s,targetIdx:n,moved:a}=t;if(ht(),!a||n===s)return;let l=g(),i=l.find(u=>u.id===e);if(i&&s<i.streams.length){let u=i.streams.slice(),[m]=u.splice(s,1);u.splice(n,0,m),i.streams=u,L(l)}M()}function gt(){ht()}function ht(){let t=A;t&&(t.rows.forEach(e=>{e.style.transform=""}),t.row.classList.remove("is-dragging"),t.list.classList.remove("is-drag-active"),t.row.removeEventListener("pointermove",bt),t.row.removeEventListener("pointerup",vt),t.row.removeEventListener("pointercancel",gt),A=null)}export{g as a,ct as b,$t as c,wt as d,_t as e,Y as f,M as g,Kt as h,O as i,nt as j};
