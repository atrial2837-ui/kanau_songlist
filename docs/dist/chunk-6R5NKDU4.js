import{e as F}from"./chunk-JT7WCFD3.js";import{E as O,G as E,H,I,J as N,a as w,d as r}from"./chunk-PRFEE4R6.js";var nt="kanau-playlists",lt="kanau-music-videos-cache-v2",K=24,$="all-streams",P=1,U="newest",x="grid",v=null,R=null,Y=!1,V="",G=null,T=!1,_=new Set;function y(){try{return JSON.parse(localStorage.getItem(nt)||"[]")}catch{return[]}}function L(t){try{localStorage.setItem(nt,JSON.stringify(t))}catch{}}function it(t){let s=y(),a={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return s.unshift(a),L(s),a}function yt(t){L(y().filter(s=>s.id!==t))}function $t(t,s){let a=y(),n=a.find(e=>e.id===t);return!n||n.streams.includes(s)?!1:(n.streams.push(s),L(a),!0)}function wt(t,s){let a=y(),n=a.find(e=>e.id===t);n&&(n.streams=n.streams.filter(e=>e!==s),L(a))}function rt(t){return y().some(s=>s.streams.includes(t))}function k(){let t=w("#panel-playlists");if(!t)return;let s=F.data?.streams||[];if($==="my-playlists"&&v===null){let e=z();e.length?v=e:dt().then(l=>{v===null&&(v=Array.isArray(l)?l:[]),$==="my-playlists"&&k()})}let a=document.activeElement?.id==="pl-music-search",n=null;if(a){try{n=document.activeElement.selectionStart}catch{}V=document.activeElement.value||""}if(t.innerHTML=`
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
          <span class="pl-subtab-count">${y().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${$==="all-streams"?ct(s,P):$==="music"?Mt():Vt(s)}
      </div>
    </div>
  `,$==="music"&&xt(),a){let e=w("#pl-music-search");if(e&&(e.focus(),n!==null))try{e.setSelectionRange(n,n)}catch{}}t.onclick=e=>{let l=e.target.closest("[data-pl-subtab]");if(l){$=l.dataset.plSubtab,$==="all-streams"&&(P=1),k();return}let c=e.target.closest("[data-pl-sort]");if(c){U=c.dataset.plSort,P=1,tt(s);return}let m=e.target.closest("[data-pl-page]");if(m&&!m.disabled){P=Number(m.dataset.plPage),tt(s);return}let p=e.target.closest("[data-music-view]:not([data-music-select-toggle])");if(p){x=p.dataset.musicView,j();return}if(e.target.closest("[data-music-select-toggle]")){T=!T,T||_.clear(),Q();return}let o=e.target.closest("[data-mv-select]");if(o){let d=o.dataset.mvSelect,u=!_.has(d);u?_.add(d):_.delete(d);let S=o.classList.contains("mv-list-row")?o:o.closest(".mv-card");S&&S.classList.toggle("is-selected",u);let M=S?.querySelector(".mv-card-checkbox, .mv-list-checkbox");M&&(M.textContent=u?"\u2713":""),o.setAttribute("aria-pressed",String(u)),Et();return}if(e.target.closest("[data-music-select-all]")){C(v||[]).forEach(({v:d})=>_.add(d.id)),Q();return}if(e.target.closest("[data-music-select-clear]")){_.clear(),Q();return}if(e.target.closest("[data-music-select-add]")){if(!_.size)return;let d=[...v||[]].filter(u=>_.has(u.id)).map(u=>"mv:"+u.id);et(d);return}let f=e.target.closest("[data-play-music]");if(f&&v?.length){let d=Number(f.dataset.playMusic),u=C(v),S=Math.max(0,u.findIndex(({i:A})=>A===d)),M=u.length?u.map(({v:A})=>A):v;import("./chunk-6QQDPDZV.js").then(A=>A.playMusicQueue(M,S));return}let i=e.target.closest("[data-play-filtered-music]");if(i&&v?.length){let d=C(v).map(({v:M})=>M);if(!d.length)return;let u=i.dataset.playFilteredMusic==="shuffle",S=u?Math.floor(Math.random()*d.length):0;import("./chunk-6QQDPDZV.js").then(M=>M.playMusicQueue(d,S,{shuffle:u}));return}if(e.target.closest("[data-yt-filtered-music]")&&v?.length){let d=C(v).map(({v:u})=>u.url?H(u.url):"").filter(Boolean);ft(d);return}let h=e.target.closest("[data-watch-music]");if(h&&v?.length){let d=Number(h.dataset.watchMusic),u=v[d];u?.url&&window.__openStreamViewer?.({url:u.url,title:u.title,isMv:!0});return}let b=e.target.closest("[data-playlist-add-mv]");if(b){let d=b.dataset.playlistAddMv,u=b.dataset.streamTitle||"";et("mv:"+d,u);return}$==="my-playlists"&&Rt(e,s)},t.oninput=e=>{let l=e.target.closest("#pl-music-search");l&&(V=l.value||"",clearTimeout(G),G=setTimeout(j,100))},t.oncompositionend=e=>{let l=e.target.closest("#pl-music-search");l&&(V=l.value||"",clearTimeout(G),j())},t.addEventListener("error",e=>{let l=e.target;if(!l.classList.contains("pl-sg-thumb"))return;let c=l.dataset.fallback;c&&l.src!==c&&(l.src=c,delete l.dataset.fallback)},!0),qt()}var _t=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function St(t,s){let a=t.slice();return s==="oldest"?a.reverse():s==="most-songs"?a.sort((n,e)=>(e.songs?.length??0)-(n.songs?.length??0)):s==="fewest-songs"?a.sort((n,e)=>(n.songs?.length??0)-(e.songs?.length??0)):a}function ct(t,s){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let a=St(t,U),n=a.length,e=Math.max(1,Math.ceil(n/K)),l=Math.min(Math.max(1,s),e),c=(l-1)*K,p=a.slice(c,c+K).map(i=>{let g=E(i),h=I(i.url),b=N(i.url),d=i.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${r(g)}"
        title="${r(i.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${h?`<img class="pl-sg-thumb" src="${r(h)}"
                data-fallback="${r(b)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${d}<span class="pl-sg-badge-unit">\u66F2</span></span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${r(i.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${r(O(i.date)||"")}</span>
        </div>
      </button>`}).join(""),o=e>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${l-1}"
        ${l<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${l} / ${e}</span>
      <button class="pl-page-btn" data-pl-page="${l+1}"
        ${l>=e?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${_t.map(i=>`
        <button class="pl-sort-opt${U===i.key?" active":""}"
          data-pl-sort="${i.key}" type="button">${i.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${p}</div>${o}`}function tt(t){let s=w("#pl-subtab-body");if(!s){k();return}s.innerHTML=ct(t,P);let a=w("#panel-playlists");a&&a.addEventListener("error",n=>{let e=n.target;if(!e.classList.contains("pl-sg-thumb"))return;let l=e.dataset.fallback;l&&e.src!==l&&(e.src=l,delete e.dataset.fallback)},{once:!0,capture:!0}),s.scrollIntoView({behavior:"smooth",block:"start"})}function Mt(){if(v===null){let t=z();t.length&&(v=t)}return Z(v||[])}async function xt(){if(v!==null){J();return}v=z(),Y=!0,J();let t=await dt();Y=!1,v=Array.isArray(t)?t:[],J()}function J(){if($!=="music")return;let t=w("#pl-subtab-body");t&&(w("#pl-music-search")?j():t.innerHTML=Z(v||[]))}function Z(t){return kt(t)+`<div id="pl-music-results">${ot(t)}</div>`}function kt(t){let s=X(),n=C(t).length;return`
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
        <button class="pl-music-view-btn pl-music-select-toggle${T?" active":""}" data-music-select-toggle="1" type="button" ${n?"":"disabled"} title="\u8907\u6570\u9078\u629E\u3057\u3066\u307E\u3068\u3081\u3066\u8FFD\u52A0">\u2611 \u9078\u629E</button>
      </div>
    </div>
    ${T?Lt():""}`}function Lt(){let t=_.size;return`
    <div class="pl-music-selbar">
      <span class="pl-music-selcount" id="pl-music-selcount">${t}\u66F2\u3092\u9078\u629E\u4E2D</span>
      <div class="pl-music-selactions">
        <button class="pl-sel-btn" data-music-select-all="1" type="button">\u8868\u793A\u4E2D\u3092\u3059\u3079\u3066\u9078\u629E</button>
        <button class="pl-sel-btn" data-music-select-clear="1" type="button" ${t?"":"disabled"}>\u9078\u629E\u89E3\u9664</button>
        <button class="pl-sel-btn primary" data-music-select-add="1" type="button" ${t?"":"disabled"}>\uFF0B ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0</button>
        <button class="pl-sel-btn" data-music-select-toggle="1" type="button">\u5B8C\u4E86</button>
      </div>
    </div>`}function ot(t){let s=C(t);return Y&&!t.length?'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p><p class="pl-empty-hint">\u691C\u7D22\u6B04\u306F\u3053\u306E\u307E\u307E\u5165\u529B\u3067\u304D\u307E\u3059</p></div>':t.length?s.length?x==="grid"?st(s):x==="list"?It(s):x==="category"?Pt(s):st(s):Y?`<div class="pl-empty-state"><p>\u6700\u65B0\u30C7\u30FC\u30BF\u3092\u78BA\u8A8D\u4E2D\u2026</p><p class="pl-empty-hint">\u300C${r(X())}\u300D\u306E\u5019\u88DC\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</p></div>`:'<div class="pl-empty-state"><p>\u4E00\u81F4\u3059\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093</p><p class="pl-empty-hint">\u300C\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u300D\u306E\u3088\u3046\u306B\u533A\u5207\u3063\u3066\u691C\u7D22\u3067\u304D\u307E\u3059</p></div>':'<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>'}function X(){let t=w("#pl-music-search");return t&&(V=t.value||""),V}function Q(){let t=w("#pl-subtab-body");t&&(t.innerHTML=Z(v||[]))}function Et(){let t=_.size,s=w("#pl-music-selcount");s&&(s.textContent=`${t}\u66F2\u3092\u9078\u629E\u4E2D`);let a=document.querySelector("[data-music-select-add]");a&&(a.disabled=!t,a.textContent=`\uFF0B ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0`);let n=document.querySelector("[data-music-select-clear]");n&&(n.disabled=!t)}function j(){let t=v||[],s=w(".pl-music-count");if(s){let n=C(t).length;s.textContent=`${n}${n===t.length?"":` / ${t.length}`}\u4EF6`}document.querySelectorAll("[data-music-view]").forEach(n=>{n.classList.toggle("active",n.dataset.musicView===x)});let a=w("#pl-music-results");a&&(a.innerHTML=ot(t))}function z(){try{let t=JSON.parse(localStorage.getItem(lt)||"null");return Array.isArray(t?.videos)?t.videos:[]}catch{return[]}}function Ct(t){try{localStorage.setItem(lt,JSON.stringify({videos:t,cachedAt:Date.now()}))}catch{}}async function dt(){return R||(R=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>{let s=Array.isArray(t?.videos)?t.videos:[];return Ct(s),s}).catch(()=>v||z()),R)}function ut(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/[！-～]/g,s=>String.fromCharCode(s.charCodeAt(0)-65248)).replace(/[‐-‒–—―ー]/g,"-").replace(/\s+/g," ").trim()}function Tt(t){return ut(t).split(/[\/／|｜\s]+/).map(s=>s.trim()).filter(Boolean)}function Bt(t){let s=t.title||"",a=s.split(/[\/／|｜]/).map(e=>e.trim()).filter(Boolean),n=q(t).label;return ut([s,...a,t.originalArtist,t.character,t.type,n].filter(Boolean).join(" "))}function C(t){let s=Tt(X()),a=t.map((n,e)=>({v:n,i:e}));return s.length?a.filter(({v:n})=>{let e=Bt(n);return s.every(l=>e.includes(l))}):a}function q(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function pt(t,s){let a=I(t.url),n=N(t.url),{label:e,cls:l,sub:c}=q(t),m=rt("mv:"+t.id);if(T){let p=_.has(t.id);return`
    <div class="mv-card mv-card--select${p?" is-selected":""}">
      <button class="mv-card-thumb-btn" type="button" data-mv-select="${r(t.id)}" aria-pressed="${p}">
        ${a?`<img class="mv-card-thumb" src="${r(a)}" data-fallback="${r(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-checkbox">${p?"\u2713":""}</span>
        <span class="mv-type-badge ${l}">${e}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${r(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${r(c)}</span>
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
        <span class="mv-card-sub">${r(c)}</span>
      </div>
      <div class="mv-card-actions">
        <button class="mv-watch-btn" type="button" data-watch-music="${s}" title="\u52D5\u753B\u3067\u898B\u308B">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
        </button>
        <button class="mv-add-btn${m?" is-saved":""}" type="button"
          data-playlist-add-mv="${r(t.id)}"
          data-stream-title="${r(t.title||"")}"
          title="${m?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${m?"\u25C6":"\uFF0B"}</button>
      </div>
    </div>`}function At(t,s){let{label:a,cls:n,sub:e}=q(t),l=rt("mv:"+t.id);if(T){let c=_.has(t.id);return`
    <div class="mv-list-row mv-list-row--select${c?" is-selected":""}" data-mv-select="${r(t.id)}" role="button" aria-pressed="${c}">
      <span class="mv-list-checkbox">${c?"\u2713":""}</span>
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
      <button class="mv-add-btn${l?" is-saved":""}" type="button"
        data-playlist-add-mv="${r(t.id)}"
        data-stream-title="${r(t.title||"")}"
        title="${l?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${l?"\u25C6":"\uFF0B"}</button>
    </div>`}function st(t){return`<div class="mv-grid">${t.map(({v:s,i:a})=>pt(s,a)).join("")}</div>`}function It(t){return`<div class="mv-list">${t.map(({v:s,i:a})=>At(s,a)).join("")}</div>`}function Pt(t){return`
    <div class="mv-category">
      ${[{key:"original",label:"\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2\uFF08\u500B\u4EBA\uFF09"},{key:"office",label:"Re:AcT \u30AA\u30EA\u66F2"},{key:"character",label:"\u30AD\u30E3\u30E9\u30BD\u30F3 / \u58F0\u512A\u30AA\u30EA\u66F2"},{key:"cover",label:"\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09"}].map(({key:a,label:n})=>({label:n,items:t.filter(({v:e})=>e.type===a)})).filter(({items:a})=>a.length>0).map(({label:a,items:n})=>`
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">${a} <span class="mv-cat-count">${n.length}</span></h3>
        <div class="mv-grid">${n.map(({v:e,i:l})=>pt(e,l)).join("")}</div>
      </div>`).join("")}
    </div>`}function Nt(){return v||[]}function D(t){if(!t?.startsWith("mv:"))return null;let s=t.slice(3);return(v||[]).find(a=>a.id===s)||null}function mt(t,s){return(t.streams||[]).map(a=>{if(a.startsWith("mv:")){let e=D(a);return e?.url?H(e.url):""}let n=s.find(e=>E(e)===a);return n?.url?H(n.url):""}).filter(Boolean)}function ft(t){if(!t.length){alert("YouTube\u3067\u518D\u751F\u3067\u304D\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093");return}let s;if(t.length===1)s=`https://www.youtube.com/watch?v=${t[0]}`;else{let a=t.slice(0,50);t.length>50&&alert(`\u52D5\u753B\u304C${t.length}\u672C\u3042\u308A\u307E\u3059\u3002\u5148\u982D50\u672C\u3067\u9023\u7D9A\u518D\u751F\u3057\u307E\u3059\u3002`),s=`https://www.youtube.com/watch_videos?video_ids=${a.join(",")}`}window.open(s,"_blank","noopener noreferrer")}function Vt(t){let s=y();return s.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${s.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${s.map(a=>Ht(a,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function Ht(t,s){let a=t.streams.map(p=>{let o=p.startsWith("mv:"),f=o?D(p):null;return{skey:p,isMv:o,mv:f,stream:o?null:s.find(i=>E(i)===p)}}),n=a.find(({stream:p,mv:o})=>p?.url||o?.url)?.stream?.url||a.find(({mv:p})=>p?.url)?.mv?.url,e=n?`<img class="pl-card-cover" src="${r(I(n))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",l=a.length,c=a.map(({skey:p,isMv:o,mv:f,stream:i})=>{let g=r(t.id+"|:|"+p),h='<span class="pl-drag-handle" aria-hidden="true" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048">\u283F</span>',b=`<button class="pl-rm-btn" data-pl-rm-stream="${g}" type="button" title="\u524A\u9664">\u2715</button>`;if(o){if(!f)return`
        <div class="pl-stream-row pl-stream-missing" data-pl-skey="${r(p)}" data-pl-id="${r(t.id)}">${h}
          <span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${b}
        </div>`;let{label:d,sub:u}=q(f),S=f.type||"original",M=(v||[]).indexOf(f);return`
        <div class="pl-stream-row" data-pl-skey="${r(p)}" data-pl-id="${r(t.id)}">
          ${h}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${S}">${d}</span></span>
            <span class="pl-stream-title">${r(f.title||"\u2014")}</span>
            <span class="pl-stream-meta">${r(u)}</span>
          </div>
          <div class="pl-stream-actions">
            ${M>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${M}" type="button" title="\u518D\u751F">\u25B6</button>`:""}
            ${b}
          </div>
        </div>`}return i?`
      <div class="pl-stream-row" data-pl-skey="${r(p)}" data-pl-id="${r(t.id)}">
        ${h}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${O(i.date)}</span>
          <span class="pl-stream-title">${r(i.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${i.index}\u67A0 \xB7 ${i.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${i.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${r(p)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          ${b}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing" data-pl-skey="${r(p)}" data-pl-id="${r(t.id)}">${h}
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${b}
      </div>`}).join(""),m=mt(t,s);return`
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
        ${c||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
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
          type="button" title="\u3053\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">\u{1F517} \u30EA\u30F3\u30AF\u3092\u5171\u6709</button>`:""}
      </div>`:""}
    </div>`}function Rt(t,s){if(t.target.closest("#pl-new-btn")){jt();return}let a=t.target.closest("[data-pl-share]");if(a){let o=y().find(b=>b.id===a.dataset.plShare);if(!o)return;let f=JSON.stringify({n:o.name,s:o.streams}),i=btoa(String.fromCharCode(...new TextEncoder().encode(f))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),g=`${location.origin}${location.pathname}?pl=${i}`,h=b=>{a.textContent=b?"\u2713 \u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",setTimeout(()=>{a.textContent="\u{1F517} \u30EA\u30F3\u30AF\u3092\u5171\u6709"},1600)};navigator.clipboard?.writeText(g).then(()=>h(!0)).catch(()=>{try{let b=document.createElement("textarea");b.value=g,b.style.cssText="position:fixed;opacity:0;",document.body.appendChild(b),b.select();let d=document.execCommand("copy");b.remove(),h(d)}catch{h(!1)}});return}let n=t.target.closest("[data-pl-del]");if(n){let o=n.dataset.plDel,f=y().find(i=>i.id===o);f&&confirm(`\u300C${f.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(yt(o),k());return}let e=t.target.closest("[data-pl-rm-stream]");if(e){let[o,f]=e.dataset.plRmStream.split("|:|");wt(o,f),k();return}let l=t.target.closest("[data-pl-play-stream]");if(l){let o=l.closest(".pl-stream-row");if(o&&at(o,s))return;let f=l.dataset.plPlayStream,i=s.find(g=>E(g)===f);i?.url&&window.__openStreamViewer?.(i);return}let c=t.target.closest("[data-play-music-pl]");if(c){let o=c.closest(".pl-stream-row");if(o&&at(o,s))return;if(v?.length){let f=Number(c.dataset.playMusicPl);import("./chunk-6QQDPDZV.js").then(i=>i.playMusicQueue(v,f))}return}let m=t.target.closest("[data-pl-rename]");if(m){let o=m.dataset.plRename,f=y().find(g=>g.id===o);if(!f)return;let i=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",f.name)?.trim();if(i){let g=y(),h=g.find(b=>b.id===o);h&&(h.name=i,L(g),k())}return}let p=t.target.closest("[data-pl-yt-share]");if(p){let o=p.dataset.plYtShare,f=y().find(i=>i.id===o);if(!f)return;ft(mt(f,s));return}}function jt(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(it(t),k())}var Yt='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>';function zt(t){let s=F.data?.streams||[];for(let a of t.streams||[])if(a.startsWith("mv:")){let n=D(a);if(n?.url)return n.url}else{let n=s.find(e=>E(e)===a);if(n?.url)return n.url}return""}function et(t,s){let a=Array.isArray(t)?t.filter(Boolean):[t].filter(Boolean);if(!a.length)return;let n=a.length>1,e=w("#pl-add-modal");e||(e=document.createElement("div"),e.id="pl-add-modal",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),document.body.appendChild(e));let l=i=>a.every(g=>(i.streams||[]).includes(g)),c=i=>{let g=l(i),h=zt(i),b=h?I(h):"";return`
      <button class="pl-modal-item${g?" is-saved":""}" data-pl-add="${r(i.id)}"
        type="button" role="checkbox" aria-checked="${g}">
        <span class="pl-modal-item-cover">
          ${b?`<img src="${r(b)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<span class="pl-modal-item-cover--empty">\u266A</span>'}
        </span>
        <span class="pl-modal-item-info">
          <span class="pl-modal-item-name">${r(i.name)}</span>
          <span class="pl-modal-item-count">${i.streams.length}\u66F2</span>
        </span>
        <span class="pl-modal-bookmark${g?" is-saved":""}" aria-hidden="true">${Yt}</span>
      </button>`},m=()=>{let i=y();return i.length?i.map(c).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u4E0B\u306E\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u304B\u3089\u8FFD\u52A0\u3067\u304D\u307E\u3059</span></p>'},p=n?`${a.length}\u66F2\u3092\u307E\u3068\u3081\u3066\u4FDD\u5B58`:s||"\u914D\u4FE1",o=()=>{e.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
        </div>
        <div class="pl-modal-sub">${r(p)}</div>
        <div class="pl-modal-list" id="pl-modal-list">${m()}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">\uFF0B</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,e.hidden=!1,e.querySelector("#pl-modal-close").addEventListener("click",f),e.querySelector("#pl-modal-backdrop").addEventListener("click",f),e.querySelector("#pl-modal-new").addEventListener("click",()=>{let i=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!i)return;let g=it(i);a.forEach(d=>$t(g.id,d)),W(n?`\u300C${i}\u300D\u306B${a.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${i}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`);let h=e.querySelector("#pl-modal-list");h?.querySelector(".pl-modal-empty")&&(h.innerHTML=""),h&&h.insertAdjacentHTML("afterbegin",c(y().find(d=>d.id===g.id)))}),e.querySelector("#pl-modal-list").addEventListener("click",i=>{let g=i.target.closest("[data-pl-add]");if(!g)return;let h=g.dataset.plAdd,b=y(),d=b.find(u=>u.id===h);d&&(Array.isArray(d.streams)||(d.streams=[]),l(d)?(a.forEach(u=>{d.streams=d.streams.filter(S=>S!==u)}),L(b),W(n?`${a.length}\u66F2\u3092\u524A\u9664\u3057\u307E\u3057\u305F`:"\u524A\u9664\u3057\u307E\u3057\u305F")):(a.forEach(u=>{d.streams.includes(u)||d.streams.push(u)}),L(b),W(n?`\u300C${d.name}\u300D\u306B${a.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${d.name}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`)),g.outerHTML=c(y().find(u=>u.id===h)))})},f=()=>{e.hidden=!0};o(),document.addEventListener("keydown",function i(g){g.key==="Escape"&&(f(),document.removeEventListener("keydown",i))})}function W(t){let s=w("#pl-toast");s||(s=document.createElement("div"),s.id="pl-toast",document.body.appendChild(s)),s.textContent=t,s.classList.add("pl-toast--show"),clearTimeout(s._timer),s._timer=setTimeout(()=>s.classList.remove("pl-toast--show"),2500)}function at(t,s){let a=y().find(l=>l.id===t.dataset.plId);if(!a||!window.__playMyListInViewer)return!1;let n=[];for(let l of a.streams)if(l.startsWith("mv:")){let c=D(l);c?.url&&n.push({kind:"mv",key:l,video:c})}else{let c=s.find(m=>E(m)===l);c?.url&&n.push({kind:"stream",key:l,stream:c})}if(!n.length)return!1;let e=n.findIndex(l=>l.key===t.dataset.plSkey);return e<0&&(e=0),window.__playMyListInViewer({name:a.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:n,idx:e}),!0}function qt(){if($!=="my-playlists")return;let t=w("#panel-playlists");t&&t.querySelectorAll(".pl-stream-list").forEach(s=>{s.addEventListener("pointerdown",Dt,{passive:!1})})}var B=null;function Dt(t){if(B)return;let s=t.target.closest(".pl-drag-handle");if(!s)return;let a=s.closest(".pl-stream-row"),n=s.closest(".pl-stream-list");if(!a||!n)return;t.preventDefault();let e=Array.from(n.querySelectorAll(".pl-stream-row")),l=e.indexOf(a);if(l<0)return;let c=e.map(p=>{let o=p.getBoundingClientRect();return o.top+o.height/2}),m=a.getBoundingClientRect();B={list:n,row:a,rows:e,mids:c,startIdx:l,targetIdx:l,startY:t.clientY,rowH:m.height+(parseFloat(getComputedStyle(n).rowGap||getComputedStyle(n).gap)||0),plId:a.dataset.plId,moved:!1},a.classList.add("is-dragging"),n.classList.add("is-drag-active");try{a.setPointerCapture(t.pointerId)}catch{}a.addEventListener("pointermove",bt,{passive:!1}),a.addEventListener("pointerup",vt),a.addEventListener("pointercancel",gt)}function bt(t){let s=B;if(!s)return;t.preventDefault();let a=t.clientY-s.startY;if(!s.moved&&Math.abs(a)<3)return;s.moved=!0,s.row.style.transform=`translateY(${a}px)`;let n=s.mids[s.startIdx]+a,e=0;for(let l=0;l<s.mids.length;l++)l!==s.startIdx&&n>s.mids[l]&&e++;e!==s.targetIdx&&(s.targetIdx=e,s.rows.forEach((l,c)=>{if(c===s.startIdx)return;let m=0;s.startIdx<e&&c>s.startIdx&&c<=e?m=-s.rowH:s.startIdx>e&&c>=e&&c<s.startIdx&&(m=s.rowH),l.style.transform=m?`translateY(${m}px)`:""}))}function vt(){let t=B;if(!t)return;let{plId:s,startIdx:a,targetIdx:n,moved:e}=t;if(ht(),!e||n===a)return;let l=y(),c=l.find(m=>m.id===s);if(c&&a<c.streams.length){let m=c.streams.slice(),[p]=m.splice(a,1);m.splice(n,0,p),c.streams=m,L(l)}k()}function gt(){ht()}function ht(){let t=B;t&&(t.rows.forEach(s=>{s.style.transform=""}),t.row.classList.remove("is-dragging"),t.list.classList.remove("is-drag-active"),t.row.removeEventListener("pointermove",bt),t.row.removeEventListener("pointerup",vt),t.row.removeEventListener("pointercancel",gt),B=null)}export{y as a,it as b,yt as c,$t as d,wt as e,rt as f,k as g,Nt as h,D as i,et as j};
