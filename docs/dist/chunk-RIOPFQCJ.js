import{e as O}from"./chunk-JT7WCFD3.js";import{E as N,G as E,H,I,J as K,a as S,d as r}from"./chunk-PRFEE4R6.js";var lt="kanau-playlists",it="kanau-music-videos-cache-v2",G=24,_="all-streams",P=1,Z="newest",x="grid",g=null,R=null,Y=!1,V="",J=null,B=!1,M=new Set;function w(){try{return JSON.parse(localStorage.getItem(lt)||"[]")}catch{return[]}}function L(t){try{localStorage.setItem(lt,JSON.stringify(t))}catch{}}function rt(t){let s=w(),e={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return s.unshift(e),L(s),e}function $t(t){L(w().filter(s=>s.id!==t))}function wt(t,s){let e=w(),n=e.find(a=>a.id===t);return!n||n.streams.includes(s)?!1:(n.streams.push(s),L(e),!0)}function _t(t,s){let e=w(),n=e.find(a=>a.id===t);n&&(n.streams=n.streams.filter(a=>a!==s),L(e))}function z(t){return w().some(s=>s.streams.includes(t))}function k(){let t=S("#panel-playlists");if(!t)return;let s=O.data?.streams||[];if(_==="my-playlists"&&g===null){let a=q();a.length?g=a:dt().then(l=>{g===null&&(g=Array.isArray(l)?l:[]),_==="my-playlists"&&k()})}let e=document.activeElement?.id==="pl-music-search",n=null;if(e){try{n=document.activeElement.selectionStart}catch{}V=document.activeElement.value||""}if(t.innerHTML=`
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u30B5\u30D6\u30BF\u30D6">
        <button class="pl-subtab${_==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${_==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${_==="music"?" active":""}"
          data-pl-subtab="music" role="tab"
          aria-selected="${_==="music"}">\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2</button>
        <button class="pl-subtab${_==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${_==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${w().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${_==="all-streams"?ct(s,P):_==="music"?xt():Ht(s)}
      </div>
    </div>
  `,_==="music"&&kt(),e){let a=S("#pl-music-search");if(a&&(a.focus(),n!==null))try{a.setSelectionRange(n,n)}catch{}}t.onclick=a=>{let l=a.target.closest("[data-pl-subtab]");if(l){_=l.dataset.plSubtab,_==="all-streams"&&(P=1),k();return}let i=a.target.closest("[data-pl-sort]");if(i){Z=i.dataset.plSort,P=1,st(s);return}let b=a.target.closest("[data-pl-page]");if(b&&!b.disabled){P=Number(b.dataset.plPage),st(s);return}let p=a.target.closest("[data-music-view]:not([data-music-select-toggle])");if(p){x=p.dataset.musicView,j();return}if(a.target.closest("[data-music-select-toggle]")){B=!B,B||M.clear(),W();return}let c=a.target.closest("[data-mv-select]");if(c){let m=c.dataset.mvSelect,f=!M.has(m);f?M.add(m):M.delete(m);let h=c.classList.contains("mv-list-row")?c:c.closest(".mv-card");h&&h.classList.toggle("is-selected",f);let $=h?.querySelector(".mv-card-checkbox, .mv-list-checkbox");$&&($.textContent=f?"\u2713":""),c.setAttribute("aria-pressed",String(f)),Et();return}if(a.target.closest("[data-music-select-all]")){T(g||[]).forEach(({v:m})=>M.add(m.id)),W();return}if(a.target.closest("[data-music-select-clear]")){M.clear(),W();return}if(a.target.closest("[data-music-select-add]")){if(!M.size)return;let m=[...g||[]].filter(f=>M.has(f.id)).map(f=>"mv:"+f.id);at(m);return}let v=a.target.closest("[data-play-music]");if(v&&g?.length){let m=Number(v.dataset.playMusic),f=T(g),h=Math.max(0,f.findIndex(({i:C})=>C===m)),$=f.length?f.map(({v:C})=>C):g;import("./chunk-6QQDPDZV.js").then(C=>C.playMusicQueue($,h));return}let o=a.target.closest("[data-play-filtered-music]");if(o&&g?.length){let m=T(g).map(({v:$})=>$);if(!m.length)return;let f=o.dataset.playFilteredMusic==="shuffle",h=f?Math.floor(Math.random()*m.length):0;import("./chunk-6QQDPDZV.js").then($=>$.playMusicQueue(m,h,{shuffle:f}));return}if(a.target.closest("[data-yt-filtered-music]")&&g?.length){let m=T(g).map(({v:f})=>f.url?H(f.url):"").filter(Boolean);ft(m);return}let d=a.target.closest("[data-watch-music]");if(d&&g?.length){let m=Number(d.dataset.watchMusic),f=g[m];f?.url&&window.__openStreamViewer?.({url:f.url,title:f.title,isMv:!0});return}let u=a.target.closest("[data-playlist-add-mv]");if(u){let m=u.dataset.playlistAddMv,f=u.dataset.streamTitle||"";at("mv:"+m,f);return}_==="my-playlists"&&jt(a,s)},t.oninput=a=>{let l=a.target.closest("#pl-music-search");l&&(V=l.value||"",clearTimeout(J),J=setTimeout(j,100))},t.oncompositionend=a=>{let l=a.target.closest("#pl-music-search");l&&(V=l.value||"",clearTimeout(J),j())},t.addEventListener("error",a=>{let l=a.target;if(!l.classList.contains("pl-sg-thumb"))return;let i=l.dataset.fallback;i&&l.src!==i&&(l.src=i,delete l.dataset.fallback)},!0),qt()}var St=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function Mt(t,s){let e=t.slice();return s==="oldest"?e.reverse():s==="most-songs"?e.sort((n,a)=>(a.songs?.length??0)-(n.songs?.length??0)):s==="fewest-songs"?e.sort((n,a)=>(n.songs?.length??0)-(a.songs?.length??0)):e}function ct(t,s){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let e=Mt(t,Z),n=e.length,a=Math.max(1,Math.ceil(n/G)),l=Math.min(Math.max(1,s),a),i=(l-1)*G,p=e.slice(i,i+G).map(o=>{let y=E(o),d=I(o.url),u=K(o.url),m=o.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${r(y)}"
        title="${r(o.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${d?`<img class="pl-sg-thumb" src="${r(d)}"
                data-fallback="${r(u)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${m}<span class="pl-sg-badge-unit">\u66F2</span></span>
          <span class="pl-sg-add${z(y)?" is-saved":""}" role="button" tabindex="0"
            aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"
            data-playlist-add="${r(y)}" data-stream-title="${r(o.title||"\u914D\u4FE1")}"
            title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">${bt}</span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${r(o.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${r(N(o.date)||"")}</span>
        </div>
      </button>`}).join(""),c=a>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${l-1}"
        ${l<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${l} / ${a}</span>
      <button class="pl-page-btn" data-pl-page="${l+1}"
        ${l>=a?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${St.map(o=>`
        <button class="pl-sort-opt${Z===o.key?" active":""}"
          data-pl-sort="${o.key}" type="button">${o.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${p}</div>${c}`}function st(t){let s=S("#pl-subtab-body");if(!s){k();return}s.innerHTML=ct(t,P);let e=S("#panel-playlists");e&&e.addEventListener("error",n=>{let a=n.target;if(!a.classList.contains("pl-sg-thumb"))return;let l=a.dataset.fallback;l&&a.src!==l&&(a.src=l,delete a.dataset.fallback)},{once:!0,capture:!0}),s.scrollIntoView({behavior:"smooth",block:"start"})}function xt(){if(g===null){let t=q();t.length&&(g=t)}return X(g||[])}async function kt(){if(g!==null){Q();return}g=q(),Y=!0,Q();let t=await dt();Y=!1,g=Array.isArray(t)?t:[],Q()}function Q(){if(_!=="music")return;let t=S("#pl-subtab-body");t&&(S("#pl-music-search")?j():t.innerHTML=X(g||[]))}function X(t){return Lt(t)+`<div id="pl-music-results">${ot(t)}</div>`}function Lt(t){let s=tt(),n=T(t).length;return`
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
        <button class="pl-music-view-btn pl-music-select-toggle${B?" active":""}" data-music-select-toggle="1" type="button" ${n?"":"disabled"} title="\u8907\u6570\u9078\u629E\u3057\u3066\u307E\u3068\u3081\u3066\u8FFD\u52A0">\u2611 \u9078\u629E</button>
      </div>
    </div>
    ${B?Ct():""}`}function Ct(){let t=M.size;return`
    <div class="pl-music-selbar">
      <span class="pl-music-selcount" id="pl-music-selcount">${t}\u66F2\u3092\u9078\u629E\u4E2D</span>
      <div class="pl-music-selactions">
        <button class="pl-sel-btn" data-music-select-all="1" type="button">\u8868\u793A\u4E2D\u3092\u3059\u3079\u3066\u9078\u629E</button>
        <button class="pl-sel-btn" data-music-select-clear="1" type="button" ${t?"":"disabled"}>\u9078\u629E\u89E3\u9664</button>
        <button class="pl-sel-btn primary" data-music-select-add="1" type="button" ${t?"":"disabled"}>\uFF0B ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0</button>
        <button class="pl-sel-btn" data-music-select-toggle="1" type="button">\u5B8C\u4E86</button>
      </div>
    </div>`}function ot(t){let s=T(t);return Y&&!t.length?'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p><p class="pl-empty-hint">\u691C\u7D22\u6B04\u306F\u3053\u306E\u307E\u307E\u5165\u529B\u3067\u304D\u307E\u3059</p></div>':t.length?s.length?x==="grid"?et(s):x==="list"?Pt(s):x==="category"?Vt(s):et(s):Y?`<div class="pl-empty-state"><p>\u6700\u65B0\u30C7\u30FC\u30BF\u3092\u78BA\u8A8D\u4E2D\u2026</p><p class="pl-empty-hint">\u300C${r(tt())}\u300D\u306E\u5019\u88DC\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</p></div>`:'<div class="pl-empty-state"><p>\u4E00\u81F4\u3059\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093</p><p class="pl-empty-hint">\u300C\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u300D\u306E\u3088\u3046\u306B\u533A\u5207\u3063\u3066\u691C\u7D22\u3067\u304D\u307E\u3059</p></div>':'<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>'}function tt(){let t=S("#pl-music-search");return t&&(V=t.value||""),V}function W(){let t=S("#pl-subtab-body");t&&(t.innerHTML=X(g||[]))}function Et(){let t=M.size,s=S("#pl-music-selcount");s&&(s.textContent=`${t}\u66F2\u3092\u9078\u629E\u4E2D`);let e=document.querySelector("[data-music-select-add]");e&&(e.disabled=!t,e.textContent=`\uFF0B ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0`);let n=document.querySelector("[data-music-select-clear]");n&&(n.disabled=!t)}function j(){let t=g||[],s=S(".pl-music-count");if(s){let n=T(t).length;s.textContent=`${n}${n===t.length?"":` / ${t.length}`}\u4EF6`}document.querySelectorAll("[data-music-view]").forEach(n=>{n.classList.toggle("active",n.dataset.musicView===x)});let e=S("#pl-music-results");e&&(e.innerHTML=ot(t))}function q(){try{let t=JSON.parse(localStorage.getItem(it)||"null");return Array.isArray(t?.videos)?t.videos:[]}catch{return[]}}function Tt(t){try{localStorage.setItem(it,JSON.stringify({videos:t,cachedAt:Date.now()}))}catch{}}async function dt(){return R||(R=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>{let s=Array.isArray(t?.videos)?t.videos:[];return Tt(s),s}).catch(()=>g||q()),R)}function ut(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/[！-～]/g,s=>String.fromCharCode(s.charCodeAt(0)-65248)).replace(/[‐-‒–—―ー]/g,"-").replace(/\s+/g," ").trim()}function Bt(t){return ut(t).split(/[\/／|｜\s]+/).map(s=>s.trim()).filter(Boolean)}function At(t){let s=t.title||"",e=s.split(/[\/／|｜]/).map(a=>a.trim()).filter(Boolean),n=D(t).label;return ut([s,...e,t.originalArtist,t.character,t.type,n].filter(Boolean).join(" "))}function T(t){let s=Bt(tt()),e=t.map((n,a)=>({v:n,i:a}));return s.length?e.filter(({v:n})=>{let a=At(n);return s.every(l=>a.includes(l))}):e}function D(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function pt(t,s){let e=I(t.url),n=K(t.url),{label:a,cls:l,sub:i}=D(t),b=z("mv:"+t.id);if(B){let p=M.has(t.id);return`
    <div class="mv-card mv-card--select${p?" is-selected":""}">
      <button class="mv-card-thumb-btn" type="button" data-mv-select="${r(t.id)}" aria-pressed="${p}">
        ${e?`<img class="mv-card-thumb" src="${r(e)}" data-fallback="${r(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-checkbox">${p?"\u2713":""}</span>
        <span class="mv-type-badge ${l}">${a}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${r(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${r(i)}</span>
      </div>
    </div>`}return`
    <div class="mv-card">
      <button class="mv-card-thumb-btn" type="button" data-play-music="${s}" aria-label="\u518D\u751F">
        ${e?`<img class="mv-card-thumb" src="${r(e)}" data-fallback="${r(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-play-icon">\u25B6</span>
        <span class="mv-type-badge ${l}">${a}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${r(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${r(i)}</span>
      </div>
      <div class="mv-card-actions">
        <button class="mv-watch-btn" type="button" data-watch-music="${s}" title="\u52D5\u753B\u3067\u898B\u308B">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
        </button>
        <button class="mv-add-btn${b?" is-saved":""}" type="button"
          data-playlist-add-mv="${r(t.id)}"
          data-stream-title="${r(t.title||"")}"
          title="${b?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${b?"\u25C6":"\uFF0B"}</button>
      </div>
    </div>`}function It(t,s){let{label:e,cls:n,sub:a}=D(t),l=z("mv:"+t.id);if(B){let i=M.has(t.id);return`
    <div class="mv-list-row mv-list-row--select${i?" is-selected":""}" data-mv-select="${r(t.id)}" role="button" aria-pressed="${i}">
      <span class="mv-list-checkbox">${i?"\u2713":""}</span>
      <div class="mv-list-info">
        <span class="mv-list-title">${r(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${r(a)}</span>
      </div>
      <span class="mv-type-badge ${n}">${e}</span>
    </div>`}return`
    <div class="mv-list-row">
      <span class="mv-list-num">${s+1}</span>
      <button class="mv-list-play" type="button" data-play-music="${s}" aria-label="\u518D\u751F">\u25B6</button>
      <div class="mv-list-info">
        <span class="mv-list-title">${r(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${r(a)}</span>
      </div>
      <span class="mv-type-badge ${n}">${e}</span>
      <button class="mv-watch-btn" type="button" data-watch-music="${s}" title="\u52D5\u753B\u3067\u898B\u308B">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
      </button>
      <button class="mv-add-btn${l?" is-saved":""}" type="button"
        data-playlist-add-mv="${r(t.id)}"
        data-stream-title="${r(t.title||"")}"
        title="${l?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${l?"\u25C6":"\uFF0B"}</button>
    </div>`}function et(t){return`<div class="mv-grid">${t.map(({v:s,i:e})=>pt(s,e)).join("")}</div>`}function Pt(t){return`<div class="mv-list">${t.map(({v:s,i:e})=>It(s,e)).join("")}</div>`}function Vt(t){return`
    <div class="mv-category">
      ${[{key:"original",label:"\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2\uFF08\u500B\u4EBA\uFF09"},{key:"office",label:"Re:AcT \u30AA\u30EA\u66F2"},{key:"character",label:"\u30AD\u30E3\u30E9\u30BD\u30F3 / \u58F0\u512A\u30AA\u30EA\u66F2"},{key:"cover",label:"\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09"}].map(({key:e,label:n})=>({label:n,items:t.filter(({v:a})=>a.type===e)})).filter(({items:e})=>e.length>0).map(({label:e,items:n})=>`
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">${e} <span class="mv-cat-count">${n.length}</span></h3>
        <div class="mv-grid">${n.map(({v:a,i:l})=>pt(a,l)).join("")}</div>
      </div>`).join("")}
    </div>`}function Nt(){return g||[]}function F(t){if(!t?.startsWith("mv:"))return null;let s=t.slice(3);return(g||[]).find(e=>e.id===s)||null}function mt(t,s){return(t.streams||[]).map(e=>{if(e.startsWith("mv:")){let a=F(e);return a?.url?H(a.url):""}let n=s.find(a=>E(a)===e);return n?.url?H(n.url):""}).filter(Boolean)}function ft(t){if(!t.length){alert("YouTube\u3067\u518D\u751F\u3067\u304D\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093");return}let s;if(t.length===1)s=`https://www.youtube.com/watch?v=${t[0]}`;else{let e=t.slice(0,50);t.length>50&&alert(`\u52D5\u753B\u304C${t.length}\u672C\u3042\u308A\u307E\u3059\u3002\u5148\u982D50\u672C\u3067\u9023\u7D9A\u518D\u751F\u3057\u307E\u3059\u3002`),s=`https://www.youtube.com/watch_videos?video_ids=${e.join(",")}`}window.open(s,"_blank","noopener noreferrer")}function Ht(t){let s=w();return s.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${s.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${s.map(e=>Rt(e,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function Rt(t,s){let e=t.streams.map(p=>{let c=p.startsWith("mv:"),v=c?F(p):null;return{skey:p,isMv:c,mv:v,stream:c?null:s.find(o=>E(o)===p)}}),n=e.find(({stream:p,mv:c})=>p?.url||c?.url)?.stream?.url||e.find(({mv:p})=>p?.url)?.mv?.url,a=n?`<img class="pl-card-cover" src="${r(I(n))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",l=e.length,i=e.map(({skey:p,isMv:c,mv:v,stream:o})=>{let y=r(t.id+"|:|"+p),d='<span class="pl-drag-handle" aria-hidden="true" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048">\u283F</span>',u=`<button class="pl-rm-btn" data-pl-rm-stream="${y}" type="button" title="\u524A\u9664">\u2715</button>`;if(c){if(!v)return`
        <div class="pl-stream-row pl-stream-missing" data-pl-skey="${r(p)}" data-pl-id="${r(t.id)}">${d}
          <span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${u}
        </div>`;let{label:m,sub:f}=D(v),h=v.type||"original",$=(g||[]).indexOf(v);return`
        <div class="pl-stream-row" data-pl-skey="${r(p)}" data-pl-id="${r(t.id)}">
          ${d}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${h}">${m}</span></span>
            <span class="pl-stream-title">${r(v.title||"\u2014")}</span>
            <span class="pl-stream-meta">${r(f)}</span>
          </div>
          <div class="pl-stream-actions">
            ${$>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${$}" type="button" title="\u518D\u751F">\u25B6</button>`:""}
            ${u}
          </div>
        </div>`}return o?`
      <div class="pl-stream-row" data-pl-skey="${r(p)}" data-pl-id="${r(t.id)}">
        ${d}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${N(o.date)}</span>
          <span class="pl-stream-title">${r(o.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${o.index}\u67A0 \xB7 ${o.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${o.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${r(p)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          ${u}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing" data-pl-skey="${r(p)}" data-pl-id="${r(t.id)}">${d}
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${u}
      </div>`}).join(""),b=mt(t,s);return`
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
      ${b.length||t.streams.length?`
      <div class="pl-card-footer">
        ${b.length?`
        <button class="pl-yt-share-btn" data-pl-yt-share="${r(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${b.length}\u672C)
        </button>`:""}
        ${t.streams.length?`
        <button class="pl-yt-share-btn" data-pl-share="${r(t.id)}"
          type="button" title="\u3053\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">\u{1F517} \u30EA\u30F3\u30AF\u3092\u5171\u6709</button>`:""}
      </div>`:""}
    </div>`}function jt(t,s){if(t.target.closest("#pl-new-btn")){Yt();return}let e=t.target.closest("[data-pl-share]");if(e){let c=w().find(u=>u.id===e.dataset.plShare);if(!c)return;let v=JSON.stringify({n:c.name,s:c.streams}),o=btoa(String.fromCharCode(...new TextEncoder().encode(v))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),y=`${location.origin}${location.pathname}?pl=${o}`,d=u=>{e.textContent=u?"\u2713 \u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",setTimeout(()=>{e.textContent="\u{1F517} \u30EA\u30F3\u30AF\u3092\u5171\u6709"},1600)};navigator.clipboard?.writeText(y).then(()=>d(!0)).catch(()=>{try{let u=document.createElement("textarea");u.value=y,u.style.cssText="position:fixed;opacity:0;",document.body.appendChild(u),u.select();let m=document.execCommand("copy");u.remove(),d(m)}catch{d(!1)}});return}let n=t.target.closest("[data-pl-del]");if(n){let c=n.dataset.plDel,v=w().find(o=>o.id===c);v&&confirm(`\u300C${v.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&($t(c),k());return}let a=t.target.closest("[data-pl-rm-stream]");if(a){let[c,v]=a.dataset.plRmStream.split("|:|");_t(c,v),k();return}let l=t.target.closest("[data-pl-play-stream]");if(l){let c=l.closest(".pl-stream-row");if(c&&nt(c,s))return;let v=l.dataset.plPlayStream,o=s.find(y=>E(y)===v);o?.url&&window.__openStreamViewer?.(o);return}let i=t.target.closest("[data-play-music-pl]");if(i){let c=i.closest(".pl-stream-row");if(c&&nt(c,s))return;if(g?.length){let v=Number(i.dataset.playMusicPl);import("./chunk-6QQDPDZV.js").then(o=>o.playMusicQueue(g,v))}return}let b=t.target.closest("[data-pl-rename]");if(b){let c=b.dataset.plRename,v=w().find(y=>y.id===c);if(!v)return;let o=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",v.name)?.trim();if(o){let y=w(),d=y.find(u=>u.id===c);d&&(d.name=o,L(y),k())}return}let p=t.target.closest("[data-pl-yt-share]");if(p){let c=p.dataset.plYtShare,v=w().find(o=>o.id===c);if(!v)return;ft(mt(v,s));return}}function Yt(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(rt(t),k())}var bt='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>';function zt(t){let s=O.data?.streams||[];for(let e of t.streams||[])if(e.startsWith("mv:")){let n=F(e);if(n?.url)return n.url}else{let n=s.find(a=>E(a)===e);if(n?.url)return n.url}return""}function at(t,s,e={}){let n=Array.isArray(t)?t.filter(Boolean):[t].filter(Boolean);if(!n.length)return;let a=n.length>1,l=()=>{try{e.onChange?.(n.some(d=>z(d)))}catch{}},i=S("#pl-add-modal");i||(i=document.createElement("div"),i.id="pl-add-modal",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),document.body.appendChild(i));let b=d=>n.every(u=>(d.streams||[]).includes(u)),p=d=>{let u=b(d),m=zt(d),f=m?I(m):"";return`
      <button class="pl-modal-item${u?" is-saved":""}" data-pl-add="${r(d.id)}"
        type="button" role="checkbox" aria-checked="${u}">
        <span class="pl-modal-item-cover">
          ${f?`<img src="${r(f)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<span class="pl-modal-item-cover--empty">\u266A</span>'}
        </span>
        <span class="pl-modal-item-info">
          <span class="pl-modal-item-name">${r(d.name)}</span>
          <span class="pl-modal-item-count">${d.streams.length}\u66F2</span>
        </span>
        <span class="pl-modal-bookmark${u?" is-saved":""}" aria-hidden="true">${bt}</span>
      </button>`},c=()=>{let d=w();return d.length?d.map(p).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u4E0B\u306E\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u304B\u3089\u8FFD\u52A0\u3067\u304D\u307E\u3059</span></p>'},v=a?`${n.length}\u66F2\u3092\u307E\u3068\u3081\u3066\u4FDD\u5B58`:s||"\u914D\u4FE1",o=()=>{i.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
        </div>
        <div class="pl-modal-sub">${r(v)}</div>
        <div class="pl-modal-list" id="pl-modal-list">${c()}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">\uFF0B</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,i.hidden=!1,i.querySelector("#pl-modal-close").addEventListener("click",y),i.querySelector("#pl-modal-backdrop").addEventListener("click",y),i.querySelector("#pl-modal-new").addEventListener("click",()=>{let d=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!d)return;let u=rt(d);n.forEach(h=>wt(u.id,h)),U(a?`\u300C${d}\u300D\u306B${n.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${d}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`);let m=i.querySelector("#pl-modal-list");m?.querySelector(".pl-modal-empty")&&(m.innerHTML=""),m&&m.insertAdjacentHTML("afterbegin",p(w().find(h=>h.id===u.id))),l()}),i.querySelector("#pl-modal-list").addEventListener("click",d=>{let u=d.target.closest("[data-pl-add]");if(!u)return;let m=u.dataset.plAdd,f=w(),h=f.find($=>$.id===m);h&&(Array.isArray(h.streams)||(h.streams=[]),b(h)?(n.forEach($=>{h.streams=h.streams.filter(C=>C!==$)}),L(f),U(a?`${n.length}\u66F2\u3092\u524A\u9664\u3057\u307E\u3057\u305F`:"\u524A\u9664\u3057\u307E\u3057\u305F")):(n.forEach($=>{h.streams.includes($)||h.streams.push($)}),L(f),U(a?`\u300C${h.name}\u300D\u306B${n.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${h.name}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`)),u.outerHTML=p(w().find($=>$.id===m)),l())})},y=()=>{i.hidden=!0};o(),document.addEventListener("keydown",function d(u){u.key==="Escape"&&(y(),document.removeEventListener("keydown",d))})}function U(t){let s=S("#pl-toast");s||(s=document.createElement("div"),s.id="pl-toast",document.body.appendChild(s)),s.textContent=t,s.classList.add("pl-toast--show"),clearTimeout(s._timer),s._timer=setTimeout(()=>s.classList.remove("pl-toast--show"),2500)}function nt(t,s){let e=w().find(l=>l.id===t.dataset.plId);if(!e||!window.__playMyListInViewer)return!1;let n=[];for(let l of e.streams)if(l.startsWith("mv:")){let i=F(l);i?.url&&n.push({kind:"mv",key:l,video:i})}else{let i=s.find(b=>E(b)===l);i?.url&&n.push({kind:"stream",key:l,stream:i})}if(!n.length)return!1;let a=n.findIndex(l=>l.key===t.dataset.plSkey);return a<0&&(a=0),window.__playMyListInViewer({name:e.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:n,idx:a}),!0}function qt(){if(_!=="my-playlists")return;let t=S("#panel-playlists");t&&t.querySelectorAll(".pl-stream-list").forEach(s=>{s.addEventListener("pointerdown",Dt,{passive:!1})})}var A=null;function Dt(t){if(A)return;let s=t.target.closest(".pl-drag-handle");if(!s)return;let e=s.closest(".pl-stream-row"),n=s.closest(".pl-stream-list");if(!e||!n)return;t.preventDefault();let a=Array.from(n.querySelectorAll(".pl-stream-row")),l=a.indexOf(e);if(l<0)return;let i=a.map(p=>{let c=p.getBoundingClientRect();return c.top+c.height/2}),b=e.getBoundingClientRect();A={list:n,row:e,rows:a,mids:i,startIdx:l,targetIdx:l,startY:t.clientY,rowH:b.height+(parseFloat(getComputedStyle(n).rowGap||getComputedStyle(n).gap)||0),plId:e.dataset.plId,moved:!1},e.classList.add("is-dragging"),n.classList.add("is-drag-active");try{e.setPointerCapture(t.pointerId)}catch{}e.addEventListener("pointermove",vt,{passive:!1}),e.addEventListener("pointerup",gt),e.addEventListener("pointercancel",ht)}function vt(t){let s=A;if(!s)return;t.preventDefault();let e=t.clientY-s.startY;if(!s.moved&&Math.abs(e)<3)return;s.moved=!0,s.row.style.transform=`translateY(${e}px)`;let n=s.mids[s.startIdx]+e,a=0;for(let l=0;l<s.mids.length;l++)l!==s.startIdx&&n>s.mids[l]&&a++;a!==s.targetIdx&&(s.targetIdx=a,s.rows.forEach((l,i)=>{if(i===s.startIdx)return;let b=0;s.startIdx<a&&i>s.startIdx&&i<=a?b=-s.rowH:s.startIdx>a&&i>=a&&i<s.startIdx&&(b=s.rowH),l.style.transform=b?`translateY(${b}px)`:""}))}function gt(){let t=A;if(!t)return;let{plId:s,startIdx:e,targetIdx:n,moved:a}=t;if(yt(),!a||n===e)return;let l=w(),i=l.find(b=>b.id===s);if(i&&e<i.streams.length){let b=i.streams.slice(),[p]=b.splice(e,1);b.splice(n,0,p),i.streams=b,L(l)}k()}function ht(){yt()}function yt(){let t=A;t&&(t.rows.forEach(s=>{s.style.transform=""}),t.row.classList.remove("is-dragging"),t.list.classList.remove("is-drag-active"),t.row.removeEventListener("pointermove",vt),t.row.removeEventListener("pointerup",gt),t.row.removeEventListener("pointercancel",ht),A=null)}export{w as a,rt as b,$t as c,wt as d,_t as e,z as f,k as g,Nt as h,F as i,at as j};
