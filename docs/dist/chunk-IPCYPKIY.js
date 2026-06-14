import{e as X}from"./chunk-JT7WCFD3.js";import{E as F,G as E,H as V,I as R,J as q,a as w,d as r}from"./chunk-PRFEE4R6.js";var nt="kanau-playlists",lt="kanau-music-videos-cache-v2",N=24,h="all-streams",I=1,G="newest",x="grid",b=null,H=null,j=!1,P="",O=null,L=!1,_=new Set;function $(){try{return JSON.parse(localStorage.getItem(nt)||"[]")}catch{return[]}}function B(t){try{localStorage.setItem(nt,JSON.stringify(t))}catch{}}function it(t){let s=$(),a={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return s.unshift(a),B(s),a}function yt(t){B($().filter(s=>s.id!==t))}function ht(t,s){let a=$(),n=a.find(e=>e.id===t);return!n||n.streams.includes(s)?!1:(n.streams.push(s),B(a),!0)}function $t(t,s){let a=$(),n=a.find(e=>e.id===t);n&&(n.streams=n.streams.filter(e=>e!==s),B(a))}function Ft(t){return $().some(s=>s.streams.includes(t))}function k(){let t=w("#panel-playlists");if(!t)return;let s=X.data?.streams||[];if(h==="my-playlists"&&b===null){let e=D();e.length?b=e:ot().then(l=>{b===null&&(b=Array.isArray(l)?l:[]),h==="my-playlists"&&k()})}let a=document.activeElement?.id==="pl-music-search",n=null;if(a){try{n=document.activeElement.selectionStart}catch{}P=document.activeElement.value||""}if(t.innerHTML=`
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u30B5\u30D6\u30BF\u30D6">
        <button class="pl-subtab${h==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${h==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${h==="music"?" active":""}"
          data-pl-subtab="music" role="tab"
          aria-selected="${h==="music"}">\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2</button>
        <button class="pl-subtab${h==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${h==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${$().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${h==="all-streams"?rt(s,I):h==="music"?Mt():Pt(s)}
      </div>
    </div>
  `,h==="music"&&St(),a){let e=w("#pl-music-search");if(e&&(e.focus(),n!==null))try{e.setSelectionRange(n,n)}catch{}}t.onclick=e=>{let l=e.target.closest("[data-pl-subtab]");if(l){h=l.dataset.plSubtab,h==="all-streams"&&(I=1),k();return}let o=e.target.closest("[data-pl-sort]");if(o){G=o.dataset.plSort,I=1,tt(s);return}let d=e.target.closest("[data-pl-page]");if(d&&!d.disabled){I=Number(d.dataset.plPage),tt(s);return}let u=e.target.closest("[data-music-view]:not([data-music-select-toggle])");if(u){x=u.dataset.musicView,Y();return}if(e.target.closest("[data-music-select-toggle]")){L=!L,L||_.clear(),J();return}let c=e.target.closest("[data-mv-select]");if(c){let m=c.dataset.mvSelect,v=!_.has(m);v?_.add(m):_.delete(m);let S=c.classList.contains("mv-list-row")?c:c.closest(".mv-card");S&&S.classList.toggle("is-selected",v);let M=S?.querySelector(".mv-card-checkbox, .mv-list-checkbox");M&&(M.textContent=v?"\u2713":""),c.setAttribute("aria-pressed",String(v)),Ct();return}if(e.target.closest("[data-music-select-all]")){C(b||[]).forEach(({v:m})=>_.add(m.id)),J();return}if(e.target.closest("[data-music-select-clear]")){_.clear(),J();return}if(e.target.closest("[data-music-select-add]")){if(!_.size)return;let m=[...b||[]].filter(v=>_.has(v.id)).map(v=>"mv:"+v.id);et(m);return}let p=e.target.closest("[data-play-music]");if(p&&b?.length){let m=Number(p.dataset.playMusic),v=C(b),S=Math.max(0,v.findIndex(({i:A})=>A===m)),M=v.length?v.map(({v:A})=>A):b;import("./chunk-6QQDPDZV.js").then(A=>A.playMusicQueue(M,S));return}let i=e.target.closest("[data-play-filtered-music]");if(i&&b?.length){let m=C(b).map(({v:M})=>M);if(!m.length)return;let v=i.dataset.playFilteredMusic==="shuffle",S=v?Math.floor(Math.random()*m.length):0;import("./chunk-6QQDPDZV.js").then(M=>M.playMusicQueue(m,S,{shuffle:v}));return}if(e.target.closest("[data-yt-filtered-music]")&&b?.length){let m=C(b).map(({v})=>v.url?V(v.url):"").filter(Boolean);mt(m);return}let y=e.target.closest("[data-watch-music]");if(y&&b?.length){let m=Number(y.dataset.watchMusic),v=b[m];v?.url&&window.__openStreamViewer?.({url:v.url,title:v.title,isMv:!0});return}let f=e.target.closest("[data-playlist-add-mv]");if(f){let m=f.dataset.playlistAddMv,v=f.dataset.streamTitle||"";et("mv:"+m,v);return}h==="my-playlists"&&Rt(e,s)},t.oninput=e=>{let l=e.target.closest("#pl-music-search");l&&(P=l.value||"",clearTimeout(O),O=setTimeout(Y,100))},t.oncompositionend=e=>{let l=e.target.closest("#pl-music-search");l&&(P=l.value||"",clearTimeout(O),Y())},t.addEventListener("error",e=>{let l=e.target;if(!l.classList.contains("pl-sg-thumb"))return;let o=l.dataset.fallback;o&&l.src!==o&&(l.src=o,delete l.dataset.fallback)},!0),Yt()}var wt=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function _t(t,s){let a=t.slice();return s==="oldest"?a.reverse():s==="most-songs"?a.sort((n,e)=>(e.songs?.length??0)-(n.songs?.length??0)):s==="fewest-songs"?a.sort((n,e)=>(n.songs?.length??0)-(e.songs?.length??0)):a}function rt(t,s){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let a=_t(t,G),n=a.length,e=Math.max(1,Math.ceil(n/N)),l=Math.min(Math.max(1,s),e),o=(l-1)*N,u=a.slice(o,o+N).map(i=>{let g=E(i),y=R(i.url),f=q(i.url),m=i.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${r(g)}"
        title="${r(i.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${y?`<img class="pl-sg-thumb" src="${r(y)}"
                data-fallback="${r(f)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${m}<span class="pl-sg-badge-unit">\u66F2</span></span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${r(i.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${r(F(i.date)||"")}</span>
        </div>
      </button>`}).join(""),c=e>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${l-1}"
        ${l<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${l} / ${e}</span>
      <button class="pl-page-btn" data-pl-page="${l+1}"
        ${l>=e?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${wt.map(i=>`
        <button class="pl-sort-opt${G===i.key?" active":""}"
          data-pl-sort="${i.key}" type="button">${i.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${u}</div>${c}`}function tt(t){let s=w("#pl-subtab-body");if(!s){k();return}s.innerHTML=rt(t,I);let a=w("#panel-playlists");a&&a.addEventListener("error",n=>{let e=n.target;if(!e.classList.contains("pl-sg-thumb"))return;let l=e.dataset.fallback;l&&e.src!==l&&(e.src=l,delete e.dataset.fallback)},{once:!0,capture:!0}),s.scrollIntoView({behavior:"smooth",block:"start"})}function Mt(){if(b===null){let t=D();t.length&&(b=t)}return W(b||[])}async function St(){if(b!==null){K();return}b=D(),j=!0,K();let t=await ot();j=!1,b=Array.isArray(t)?t:[],K()}function K(){if(h!=="music")return;let t=w("#pl-subtab-body");t&&(w("#pl-music-search")?Y():t.innerHTML=W(b||[]))}function W(t){return xt(t)+`<div id="pl-music-results">${ct(t)}</div>`}function xt(t){let s=U(),n=C(t).length;return`
    <div class="pl-music-viewbar">
      <label class="pl-music-search-wrap">
        <span class="pl-music-search-icon" aria-hidden="true">\u2315</span>
        <input id="pl-music-search" class="pl-music-search" type="search"
          value="${r(s)}"
          placeholder="\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3067\u691C\u7D22"
          aria-label="\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2\u3092\u691C\u7D22">
      </label>
      <span class="pl-music-count">${n}${n===t.length?"":` / ${t.length}`}\u4EF6</span>
      <div class="pl-music-play-actions">
        <button class="pl-music-play-all" data-play-filtered-music="all" type="button" ${n?"":"disabled"}>\u25B6 \u5168\u66F2\u518D\u751F</button>
        <button class="pl-music-play-all" data-play-filtered-music="shuffle" type="button" ${n?"":"disabled"}>\u{1F500} \u30B7\u30E3\u30C3\u30D5\u30EB</button>
        <button class="pl-music-play-all pl-music-yt-btn" data-yt-filtered-music="1" type="button" ${n?"":"disabled"} title="\u8868\u793A\u4E2D\u306E\u52D5\u753B\u3092 YouTube \u3067\u9023\u7D9A\u518D\u751F">\u25B6 YouTube\u3067\u9023\u7D9A\u518D\u751F</button>
      </div>
      <div class="pl-music-views">
        <button class="pl-music-view-btn${x==="grid"?" active":""}" data-music-view="grid"     type="button">\u30B0\u30EA\u30C3\u30C9</button>
        <button class="pl-music-view-btn${x==="list"?" active":""}" data-music-view="list"     type="button">\u30EA\u30B9\u30C8</button>
        <button class="pl-music-view-btn${x==="category"?" active":""}" data-music-view="category" type="button">\u30AB\u30C6\u30B4\u30EA</button>
        <button class="pl-music-view-btn pl-music-select-toggle${L?" active":""}" data-music-select-toggle="1" type="button" ${n?"":"disabled"} title="\u8907\u6570\u9078\u629E\u3057\u3066\u307E\u3068\u3081\u3066\u8FFD\u52A0">\u2611 \u9078\u629E</button>
      </div>
    </div>
    ${L?kt():""}`}function kt(){let t=_.size;return`
    <div class="pl-music-selbar">
      <span class="pl-music-selcount" id="pl-music-selcount">${t}\u66F2\u3092\u9078\u629E\u4E2D</span>
      <div class="pl-music-selactions">
        <button class="pl-sel-btn" data-music-select-all="1" type="button">\u8868\u793A\u4E2D\u3092\u3059\u3079\u3066\u9078\u629E</button>
        <button class="pl-sel-btn" data-music-select-clear="1" type="button" ${t?"":"disabled"}>\u9078\u629E\u89E3\u9664</button>
        <button class="pl-sel-btn primary" data-music-select-add="1" type="button" ${t?"":"disabled"}>\uFF0B ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0</button>
        <button class="pl-sel-btn" data-music-select-toggle="1" type="button">\u5B8C\u4E86</button>
      </div>
    </div>`}function ct(t){let s=C(t);return j&&!t.length?'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p><p class="pl-empty-hint">\u691C\u7D22\u6B04\u306F\u3053\u306E\u307E\u307E\u5165\u529B\u3067\u304D\u307E\u3059</p></div>':t.length?s.length?x==="grid"?st(s):x==="list"?At(s):x==="category"?It(s):st(s):j?`<div class="pl-empty-state"><p>\u6700\u65B0\u30C7\u30FC\u30BF\u3092\u78BA\u8A8D\u4E2D\u2026</p><p class="pl-empty-hint">\u300C${r(U())}\u300D\u306E\u5019\u88DC\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</p></div>`:'<div class="pl-empty-state"><p>\u4E00\u81F4\u3059\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093</p><p class="pl-empty-hint">\u300C\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u300D\u306E\u3088\u3046\u306B\u533A\u5207\u3063\u3066\u691C\u7D22\u3067\u304D\u307E\u3059</p></div>':'<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>'}function U(){let t=w("#pl-music-search");return t&&(P=t.value||""),P}function J(){let t=w("#pl-subtab-body");t&&(t.innerHTML=W(b||[]))}function Ct(){let t=_.size,s=w("#pl-music-selcount");s&&(s.textContent=`${t}\u66F2\u3092\u9078\u629E\u4E2D`);let a=document.querySelector("[data-music-select-add]");a&&(a.disabled=!t,a.textContent=`\uFF0B ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0`);let n=document.querySelector("[data-music-select-clear]");n&&(n.disabled=!t)}function Y(){let t=b||[],s=w(".pl-music-count");if(s){let n=C(t).length;s.textContent=`${n}${n===t.length?"":` / ${t.length}`}\u4EF6`}document.querySelectorAll("[data-music-view]").forEach(n=>{n.classList.toggle("active",n.dataset.musicView===x)});let a=w("#pl-music-results");a&&(a.innerHTML=ct(t))}function D(){try{let t=JSON.parse(localStorage.getItem(lt)||"null");return Array.isArray(t?.videos)?t.videos:[]}catch{return[]}}function Lt(t){try{localStorage.setItem(lt,JSON.stringify({videos:t,cachedAt:Date.now()}))}catch{}}async function ot(){return H||(H=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>{let s=Array.isArray(t?.videos)?t.videos:[];return Lt(s),s}).catch(()=>b||D()),H)}function dt(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/[！-～]/g,s=>String.fromCharCode(s.charCodeAt(0)-65248)).replace(/[‐-‒–—―ー]/g,"-").replace(/\s+/g," ").trim()}function Et(t){return dt(t).split(/[\/／|｜\s]+/).map(s=>s.trim()).filter(Boolean)}function Tt(t){let s=t.title||"",a=s.split(/[\/／|｜]/).map(e=>e.trim()).filter(Boolean),n=z(t).label;return dt([s,...a,t.originalArtist,t.character,t.type,n].filter(Boolean).join(" "))}function C(t){let s=Et(U()),a=t.map((n,e)=>({v:n,i:e}));return s.length?a.filter(({v:n})=>{let e=Tt(n);return s.every(l=>e.includes(l))}):a}function z(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function ut(t,s){let a=R(t.url),n=q(t.url),{label:e,cls:l,sub:o}=z(t);if(L){let d=_.has(t.id);return`
    <div class="mv-card mv-card--select${d?" is-selected":""}">
      <button class="mv-card-thumb-btn" type="button" data-mv-select="${r(t.id)}" aria-pressed="${d}">
        ${a?`<img class="mv-card-thumb" src="${r(a)}" data-fallback="${r(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-checkbox">${d?"\u2713":""}</span>
        <span class="mv-type-badge ${l}">${e}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${r(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${r(o)}</span>
      </div>
    </div>`}return`
    <div class="mv-card">
      <button class="mv-card-thumb-btn" type="button" data-play-music="${s}" aria-label="\u518D\u751F">
        ${a?`<img class="mv-card-thumb" src="${r(a)}" data-fallback="${r(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-play-icon">\u25B6</span>
        <span class="mv-type-badge ${l}">${e}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${r(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${r(o)}</span>
      </div>
      <div class="mv-card-actions">
        <button class="mv-watch-btn" type="button" data-watch-music="${s}" title="\u52D5\u753B\u3067\u898B\u308B">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
        </button>
        <button class="mv-add-btn" type="button"
          data-playlist-add-mv="${r(t.id)}"
          data-stream-title="${r(t.title||"")}"
          title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
      </div>
    </div>`}function Bt(t,s){let{label:a,cls:n,sub:e}=z(t);if(L){let l=_.has(t.id);return`
    <div class="mv-list-row mv-list-row--select${l?" is-selected":""}" data-mv-select="${r(t.id)}" role="button" aria-pressed="${l}">
      <span class="mv-list-checkbox">${l?"\u2713":""}</span>
      <div class="mv-list-info">
        <span class="mv-list-title">${r(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${r(e)}</span>
      </div>
      <span class="mv-type-badge ${n}">${a}</span>
    </div>`}return`
    <div class="mv-list-row">
      <span class="mv-list-num">${s+1}</span>
      <button class="mv-list-play" type="button" data-play-music="${s}" aria-label="\u518D\u751F">\u25B6</button>
      <div class="mv-list-info">
        <span class="mv-list-title">${r(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${r(e)}</span>
      </div>
      <span class="mv-type-badge ${n}">${a}</span>
      <button class="mv-watch-btn" type="button" data-watch-music="${s}" title="\u52D5\u753B\u3067\u898B\u308B">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
      </button>
      <button class="mv-add-btn" type="button"
        data-playlist-add-mv="${r(t.id)}"
        data-stream-title="${r(t.title||"")}"
        title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
    </div>`}function st(t){return`<div class="mv-grid">${t.map(({v:s,i:a})=>ut(s,a)).join("")}</div>`}function At(t){return`<div class="mv-list">${t.map(({v:s,i:a})=>Bt(s,a)).join("")}</div>`}function It(t){return`
    <div class="mv-category">
      ${[{key:"original",label:"\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2\uFF08\u500B\u4EBA\uFF09"},{key:"office",label:"Re:AcT \u30AA\u30EA\u66F2"},{key:"character",label:"\u30AD\u30E3\u30E9\u30BD\u30F3 / \u58F0\u512A\u30AA\u30EA\u66F2"},{key:"cover",label:"\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09"}].map(({key:a,label:n})=>({label:n,items:t.filter(({v:e})=>e.type===a)})).filter(({items:a})=>a.length>0).map(({label:a,items:n})=>`
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">${a} <span class="mv-cat-count">${n.length}</span></h3>
        <div class="mv-grid">${n.map(({v:e,i:l})=>ut(e,l)).join("")}</div>
      </div>`).join("")}
    </div>`}function qt(){return b||[]}function Z(t){if(!t?.startsWith("mv:"))return null;let s=t.slice(3);return(b||[]).find(a=>a.id===s)||null}function pt(t,s){return(t.streams||[]).map(a=>{if(a.startsWith("mv:")){let e=Z(a);return e?.url?V(e.url):""}let n=s.find(e=>E(e)===a);return n?.url?V(n.url):""}).filter(Boolean)}function mt(t){if(!t.length){alert("YouTube\u3067\u518D\u751F\u3067\u304D\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093");return}let s;if(t.length===1)s=`https://www.youtube.com/watch?v=${t[0]}`;else{let a=t.slice(0,50);t.length>50&&alert(`\u52D5\u753B\u304C${t.length}\u672C\u3042\u308A\u307E\u3059\u3002\u5148\u982D50\u672C\u3067\u9023\u7D9A\u518D\u751F\u3057\u307E\u3059\u3002`),s=`https://www.youtube.com/watch_videos?video_ids=${a.join(",")}`}window.open(s,"_blank","noopener noreferrer")}function Pt(t){let s=$();return s.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${s.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${s.map(a=>Vt(a,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function Vt(t,s){let a=t.streams.map(u=>{let c=u.startsWith("mv:"),p=c?Z(u):null;return{skey:u,isMv:c,mv:p,stream:c?null:s.find(i=>E(i)===u)}}),n=a.find(({stream:u,mv:c})=>u?.url||c?.url)?.stream?.url||a.find(({mv:u})=>u?.url)?.mv?.url,e=n?`<img class="pl-card-cover" src="${r(R(n))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",l=a.length,o=a.map(({skey:u,isMv:c,mv:p,stream:i})=>{let g=r(t.id+"|:|"+u),y='<span class="pl-drag-handle" aria-hidden="true" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048">\u283F</span>',f=`<button class="pl-rm-btn" data-pl-rm-stream="${g}" type="button" title="\u524A\u9664">\u2715</button>`;if(c){if(!p)return`
        <div class="pl-stream-row pl-stream-missing" data-pl-skey="${r(u)}" data-pl-id="${r(t.id)}">${y}
          <span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${f}
        </div>`;let{label:m,sub:v}=z(p),S=p.type||"original",M=(b||[]).indexOf(p);return`
        <div class="pl-stream-row" data-pl-skey="${r(u)}" data-pl-id="${r(t.id)}">
          ${y}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${S}">${m}</span></span>
            <span class="pl-stream-title">${r(p.title||"\u2014")}</span>
            <span class="pl-stream-meta">${r(v)}</span>
          </div>
          <div class="pl-stream-actions">
            ${M>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${M}" type="button" title="\u518D\u751F">\u25B6</button>`:""}
            ${f}
          </div>
        </div>`}return i?`
      <div class="pl-stream-row" data-pl-skey="${r(u)}" data-pl-id="${r(t.id)}">
        ${y}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${F(i.date)}</span>
          <span class="pl-stream-title">${r(i.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${i.index}\u67A0 \xB7 ${i.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${i.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${r(u)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          ${f}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing" data-pl-skey="${r(u)}" data-pl-id="${r(t.id)}">${y}
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${f}
      </div>`}).join(""),d=pt(t,s);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${e?`<div class="pl-card-cover-wrap">${e}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${r(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${r(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u4EF6</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${r(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${o||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
      ${d.length||t.streams.length?`
      <div class="pl-card-footer">
        ${d.length?`
        <button class="pl-yt-share-btn" data-pl-yt-share="${r(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${d.length}\u672C)
        </button>`:""}
        ${t.streams.length?`
        <button class="pl-yt-share-btn" data-pl-share="${r(t.id)}"
          type="button" title="\u3053\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">\u{1F517} \u30EA\u30F3\u30AF\u3092\u5171\u6709</button>`:""}
      </div>`:""}
    </div>`}function Rt(t,s){if(t.target.closest("#pl-new-btn")){Ht();return}let a=t.target.closest("[data-pl-share]");if(a){let c=$().find(f=>f.id===a.dataset.plShare);if(!c)return;let p=JSON.stringify({n:c.name,s:c.streams}),i=btoa(String.fromCharCode(...new TextEncoder().encode(p))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),g=`${location.origin}${location.pathname}?pl=${i}`,y=f=>{a.textContent=f?"\u2713 \u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",setTimeout(()=>{a.textContent="\u{1F517} \u30EA\u30F3\u30AF\u3092\u5171\u6709"},1600)};navigator.clipboard?.writeText(g).then(()=>y(!0)).catch(()=>{try{let f=document.createElement("textarea");f.value=g,f.style.cssText="position:fixed;opacity:0;",document.body.appendChild(f),f.select();let m=document.execCommand("copy");f.remove(),y(m)}catch{y(!1)}});return}let n=t.target.closest("[data-pl-del]");if(n){let c=n.dataset.plDel,p=$().find(i=>i.id===c);p&&confirm(`\u300C${p.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(yt(c),k());return}let e=t.target.closest("[data-pl-rm-stream]");if(e){let[c,p]=e.dataset.plRmStream.split("|:|");$t(c,p),k();return}let l=t.target.closest("[data-pl-play-stream]");if(l){let c=l.closest(".pl-stream-row");if(c&&at(c,s))return;let p=l.dataset.plPlayStream,i=s.find(g=>E(g)===p);i?.url&&window.__openStreamViewer?.(i);return}let o=t.target.closest("[data-play-music-pl]");if(o){let c=o.closest(".pl-stream-row");if(c&&at(c,s))return;if(b?.length){let p=Number(o.dataset.playMusicPl);import("./chunk-6QQDPDZV.js").then(i=>i.playMusicQueue(b,p))}return}let d=t.target.closest("[data-pl-rename]");if(d){let c=d.dataset.plRename,p=$().find(g=>g.id===c);if(!p)return;let i=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",p.name)?.trim();if(i){let g=$(),y=g.find(f=>f.id===c);y&&(y.name=i,B(g),k())}return}let u=t.target.closest("[data-pl-yt-share]");if(u){let c=u.dataset.plYtShare,p=$().find(i=>i.id===c);if(!p)return;mt(pt(p,s));return}}function Ht(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(it(t),k())}function et(t,s){let a=Array.isArray(t)?t.filter(Boolean):[t].filter(Boolean);if(!a.length)return;let n=a.length>1,e=w("#pl-add-modal");e||(e=document.createElement("div"),e.id="pl-add-modal",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),document.body.appendChild(e));let l=u=>{let c=0;for(let p of a)ht(u,p)&&c++;return c},o=()=>{let u=$(),c=u.length?u.map(i=>{let g=a.every(m=>i.streams.includes(m)),y=!g&&a.some(m=>i.streams.includes(m)),f=g?'<span class="pl-modal-status-check">\u2713</span> \u767B\u9332\u6E08\u307F':y?"\uFF0B \u6B8B\u308A\u3092\u8FFD\u52A0":"\uFF0B \u8FFD\u52A0";return`
            <button class="pl-modal-item${g?" pl-modal-item--added":" pl-modal-item--free"}"
              data-pl-add="${r(i.id)}"
              ${g?'disabled aria-disabled="true"':""} type="button">
              <div class="pl-modal-item-info">
                <span class="pl-modal-item-name">${r(i.name)}</span>
                <span class="pl-modal-item-count">${i.streams.length}\u67A0</span>
              </div>
              <span class="pl-modal-item-status${g?" status--added":" status--free"}">
                ${f}
              </span>
            </button>`}).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u5148\u306B\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u3057\u3066\u304F\u3060\u3055\u3044</span></p>',p=n?`${a.length}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0`:s||"\u914D\u4FE1";e.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148\u3092\u9078\u629E</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
        </div>
        <div class="pl-modal-sub">${r(p)}</div>
        <div class="pl-modal-list" id="pl-modal-list">${c}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">\uFF0B</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,e.hidden=!1,e.querySelector("#pl-modal-close").addEventListener("click",d),e.querySelector("#pl-modal-backdrop").addEventListener("click",d),e.querySelector("#pl-modal-new").addEventListener("click",()=>{let i=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!i)return;let g=it(i),y=l(g.id);d(),Q(n?`\u300C${i}\u300D\u306B${y}\u66F2\u8FFD\u52A0\u3057\u307E\u3057\u305F`:`\u300C${i}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)}),e.querySelectorAll("[data-pl-add]:not([disabled])").forEach(i=>{i.addEventListener("click",()=>{let g=i.dataset.plAdd,y=$().find(m=>m.id===g),f=l(g);n?(d(),Q(`\u300C${y?.name}\u300D\u306B${f}\u66F2\u8FFD\u52A0\u3057\u307E\u3057\u305F`)):(o(),Q(`\u300C${y?.name}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`))})})},d=()=>{e.hidden=!0};o(),document.addEventListener("keydown",function u(c){c.key==="Escape"&&(d(),document.removeEventListener("keydown",u))})}function Q(t){let s=w("#pl-toast");s||(s=document.createElement("div"),s.id="pl-toast",document.body.appendChild(s)),s.textContent=t,s.classList.add("pl-toast--show"),clearTimeout(s._timer),s._timer=setTimeout(()=>s.classList.remove("pl-toast--show"),2500)}function at(t,s){let a=$().find(l=>l.id===t.dataset.plId);if(!a||!window.__playMyListInViewer)return!1;let n=[];for(let l of a.streams)if(l.startsWith("mv:")){let o=Z(l);o?.url&&n.push({kind:"mv",key:l,video:o})}else{let o=s.find(d=>E(d)===l);o?.url&&n.push({kind:"stream",key:l,stream:o})}if(!n.length)return!1;let e=n.findIndex(l=>l.key===t.dataset.plSkey);return e<0&&(e=0),window.__playMyListInViewer({name:a.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:n,idx:e}),!0}function Yt(){if(h!=="my-playlists")return;let t=w("#panel-playlists");t&&t.querySelectorAll(".pl-stream-list").forEach(s=>{s.addEventListener("pointerdown",jt,{passive:!1})})}var T=null;function jt(t){if(T)return;let s=t.target.closest(".pl-drag-handle");if(!s)return;let a=s.closest(".pl-stream-row"),n=s.closest(".pl-stream-list");if(!a||!n)return;t.preventDefault();let e=Array.from(n.querySelectorAll(".pl-stream-row")),l=e.indexOf(a);if(l<0)return;let o=e.map(u=>{let c=u.getBoundingClientRect();return c.top+c.height/2}),d=a.getBoundingClientRect();T={list:n,row:a,rows:e,mids:o,startIdx:l,targetIdx:l,startY:t.clientY,rowH:d.height+(parseFloat(getComputedStyle(n).rowGap||getComputedStyle(n).gap)||0),plId:a.dataset.plId,moved:!1},a.classList.add("is-dragging"),n.classList.add("is-drag-active");try{a.setPointerCapture(t.pointerId)}catch{}a.addEventListener("pointermove",bt,{passive:!1}),a.addEventListener("pointerup",ft),a.addEventListener("pointercancel",vt)}function bt(t){let s=T;if(!s)return;t.preventDefault();let a=t.clientY-s.startY;if(!s.moved&&Math.abs(a)<3)return;s.moved=!0,s.row.style.transform=`translateY(${a}px)`;let n=s.mids[s.startIdx]+a,e=0;for(let l=0;l<s.mids.length;l++)l!==s.startIdx&&n>s.mids[l]&&e++;e!==s.targetIdx&&(s.targetIdx=e,s.rows.forEach((l,o)=>{if(o===s.startIdx)return;let d=0;s.startIdx<e&&o>s.startIdx&&o<=e?d=-s.rowH:s.startIdx>e&&o>=e&&o<s.startIdx&&(d=s.rowH),l.style.transform=d?`translateY(${d}px)`:""}))}function ft(){let t=T;if(!t)return;let{plId:s,startIdx:a,targetIdx:n,moved:e}=t;if(gt(),!e||n===a)return;let l=$(),o=l.find(d=>d.id===s);if(o&&a<o.streams.length){let d=o.streams.slice(),[u]=d.splice(a,1);d.splice(n,0,u),o.streams=d,B(l)}k()}function vt(){gt()}function gt(){let t=T;t&&(t.rows.forEach(s=>{s.style.transform=""}),t.row.classList.remove("is-dragging"),t.list.classList.remove("is-drag-active"),t.row.removeEventListener("pointermove",bt),t.row.removeEventListener("pointerup",ft),t.row.removeEventListener("pointercancel",vt),T=null)}export{ht as addStreamToPlaylist,it as createPlaylist,yt as deletePlaylist,qt as getMusicVideos,$ as getPlaylists,Ft as isStreamInAnyPlaylist,$t as removeStreamFromPlaylist,k as renderPlaylists,Z as resolveMusicVideoId,et as showAddToPlaylistModal};
