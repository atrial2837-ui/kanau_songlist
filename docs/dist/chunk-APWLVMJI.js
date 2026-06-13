import{e as J}from"./chunk-JT7WCFD3.js";import{E as j,G as S,H,I as T,J as D,a as y,d as o}from"./chunk-PRFEE4R6.js";var Z="kanau-playlists",X="kanau-music-videos-cache-v2",O=24,h="all-streams",L=1,F="newest",w="grid",b=null,A=null,P=!1,C="",Y=null;function g(){try{return JSON.parse(localStorage.getItem(Z)||"[]")}catch{return[]}}function I(t){try{localStorage.setItem(Z,JSON.stringify(t))}catch{}}function tt(t){let e=g(),s={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return e.unshift(s),I(e),s}function pt(t){I(g().filter(e=>e.id!==t))}function K(t,e){let s=g(),n=s.find(a=>a.id===t);return!n||n.streams.includes(e)?!1:(n.streams.push(e),I(s),!0)}function mt(t,e){let s=g(),n=s.find(a=>a.id===t);n&&(n.streams=n.streams.filter(a=>a!==e),I(s))}function Pt(t){return g().some(e=>e.streams.includes(t))}function _(){let t=y("#panel-playlists");if(!t)return;let e=J.data?.streams||[];if(h==="my-playlists"&&b===null){let a=V();a.length?b=a:nt().then(l=>{b===null&&(b=Array.isArray(l)?l:[]),h==="my-playlists"&&_()})}let s=document.activeElement?.id==="pl-music-search",n=null;if(s){try{n=document.activeElement.selectionStart}catch{}C=document.activeElement.value||""}if(t.innerHTML=`
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
          <span class="pl-subtab-count">${g().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${h==="all-streams"?et(e,L):h==="music"?vt():St(e)}
      </div>
    </div>
  `,h==="music"&&gt(),s){let a=y("#pl-music-search");if(a&&(a.focus(),n!==null))try{a.setSelectionRange(n,n)}catch{}}t.onclick=a=>{let l=a.target.closest("[data-pl-subtab]");if(l){h=l.dataset.plSubtab,h==="all-streams"&&(L=1),_();return}let c=a.target.closest("[data-pl-sort]");if(c){F=c.dataset.plSort,L=1,Q(e);return}let f=a.target.closest("[data-pl-page]");if(f&&!f.disabled){L=Number(f.dataset.plPage),Q(e);return}let r=a.target.closest("[data-music-view]");if(r){w=r.dataset.musicView,B();return}let i=a.target.closest("[data-play-music]");if(i&&b?.length){let m=Number(i.dataset.playMusic),u=E(b),$=Math.max(0,u.findIndex(({i:x})=>x===m)),M=u.length?u.map(({v:x})=>x):b;import("./chunk-RV7JB4LR.js").then(x=>x.playMusicQueue(M,$));return}let p=a.target.closest("[data-play-filtered-music]");if(p&&b?.length){let m=E(b).map(({v:M})=>M);if(!m.length)return;let u=p.dataset.playFilteredMusic==="shuffle",$=u?Math.floor(Math.random()*m.length):0;import("./chunk-RV7JB4LR.js").then(M=>M.playMusicQueue(m,$,{shuffle:u}));return}let d=a.target.closest("[data-watch-music]");if(d&&b?.length){let m=Number(d.dataset.watchMusic),u=b[m];u?.url&&window.__openStreamViewer?.({url:u.url,title:u.title,isMv:!0});return}let v=a.target.closest("[data-playlist-add-mv]");if(v){let m=v.dataset.playlistAddMv,u=v.dataset.streamTitle||"";Ct("mv:"+m,u);return}h==="my-playlists"&&It(a,e)},t.oninput=a=>{let l=a.target.closest("#pl-music-search");l&&(C=l.value||"",clearTimeout(Y),Y=setTimeout(B,100))},t.oncompositionend=a=>{let l=a.target.closest("#pl-music-search");l&&(C=l.value||"",clearTimeout(Y),B())},t.addEventListener("error",a=>{let l=a.target;if(!l.classList.contains("pl-sg-thumb"))return;let c=l.dataset.fallback;c&&l.src!==c&&(l.src=c,delete l.dataset.fallback)},!0),Et()}var ft=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function bt(t,e){let s=t.slice();return e==="oldest"?s.reverse():e==="most-songs"?s.sort((n,a)=>(a.songs?.length??0)-(n.songs?.length??0)):e==="fewest-songs"?s.sort((n,a)=>(n.songs?.length??0)-(a.songs?.length??0)):s}function et(t,e){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let s=bt(t,F),n=s.length,a=Math.max(1,Math.ceil(n/O)),l=Math.min(Math.max(1,e),a),c=(l-1)*O,r=s.slice(c,c+O).map(d=>{let v=S(d),m=T(d.url),u=D(d.url),$=d.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${o(v)}"
        title="${o(d.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${m?`<img class="pl-sg-thumb" src="${o(m)}"
                data-fallback="${o(u)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${$}<span class="pl-sg-badge-unit">\u66F2</span></span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${o(d.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${o(j(d.date)||"")}</span>
        </div>
      </button>`}).join(""),i=a>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${l-1}"
        ${l<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${l} / ${a}</span>
      <button class="pl-page-btn" data-pl-page="${l+1}"
        ${l>=a?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${ft.map(d=>`
        <button class="pl-sort-opt${F===d.key?" active":""}"
          data-pl-sort="${d.key}" type="button">${d.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${r}</div>${i}`}function Q(t){let e=y("#pl-subtab-body");if(!e){_();return}e.innerHTML=et(t,L);let s=y("#panel-playlists");s&&s.addEventListener("error",n=>{let a=n.target;if(!a.classList.contains("pl-sg-thumb"))return;let l=a.dataset.fallback;l&&a.src!==l&&(a.src=l,delete a.dataset.fallback)},{once:!0,capture:!0}),e.scrollIntoView({behavior:"smooth",block:"start"})}function vt(){if(b===null){let t=V();t.length&&(b=t)}return st(b||[])}async function gt(){if(b!==null){N();return}b=V(),P=!0,N();let t=await nt();P=!1,b=Array.isArray(t)?t:[],N()}function N(){if(h!=="music")return;let t=y("#pl-subtab-body");t&&(y("#pl-music-search")?B():t.innerHTML=st(b||[]))}function st(t){return ht(t)+`<div id="pl-music-results">${at(t)}</div>`}function ht(t){let e=q(),n=E(t).length;return`
    <div class="pl-music-viewbar">
      <label class="pl-music-search-wrap">
        <span class="pl-music-search-icon" aria-hidden="true">\u2315</span>
        <input id="pl-music-search" class="pl-music-search" type="search"
          value="${o(e)}"
          placeholder="\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3067\u691C\u7D22"
          aria-label="\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2\u3092\u691C\u7D22">
      </label>
      <span class="pl-music-count">${n}${n===t.length?"":` / ${t.length}`}\u4EF6</span>
      <div class="pl-music-play-actions">
        <button class="pl-music-play-all" data-play-filtered-music="all" type="button" ${n?"":"disabled"}>\u25B6 \u5168\u66F2\u518D\u751F</button>
        <button class="pl-music-play-all" data-play-filtered-music="shuffle" type="button" ${n?"":"disabled"}>\u{1F500} \u30B7\u30E3\u30C3\u30D5\u30EB</button>
      </div>
      <div class="pl-music-views">
        <button class="pl-music-view-btn${w==="grid"?" active":""}" data-music-view="grid"     type="button">\u30B0\u30EA\u30C3\u30C9</button>
        <button class="pl-music-view-btn${w==="list"?" active":""}" data-music-view="list"     type="button">\u30EA\u30B9\u30C8</button>
        <button class="pl-music-view-btn${w==="category"?" active":""}" data-music-view="category" type="button">\u30AB\u30C6\u30B4\u30EA</button>
      </div>
    </div>`}function at(t){let e=E(t);return P&&!t.length?'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p><p class="pl-empty-hint">\u691C\u7D22\u6B04\u306F\u3053\u306E\u307E\u307E\u5165\u529B\u3067\u304D\u307E\u3059</p></div>':t.length?e.length?w==="grid"?G(e):w==="list"?Mt(e):w==="category"?xt(e):G(e):P?`<div class="pl-empty-state"><p>\u6700\u65B0\u30C7\u30FC\u30BF\u3092\u78BA\u8A8D\u4E2D\u2026</p><p class="pl-empty-hint">\u300C${o(q())}\u300D\u306E\u5019\u88DC\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</p></div>`:'<div class="pl-empty-state"><p>\u4E00\u81F4\u3059\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093</p><p class="pl-empty-hint">\u300C\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u300D\u306E\u3088\u3046\u306B\u533A\u5207\u3063\u3066\u691C\u7D22\u3067\u304D\u307E\u3059</p></div>':'<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>'}function q(){let t=y("#pl-music-search");return t&&(C=t.value||""),C}function B(){let t=b||[],e=y(".pl-music-count");if(e){let n=E(t).length;e.textContent=`${n}${n===t.length?"":` / ${t.length}`}\u4EF6`}document.querySelectorAll("[data-music-view]").forEach(n=>{n.classList.toggle("active",n.dataset.musicView===w)});let s=y("#pl-music-results");s&&(s.innerHTML=at(t))}function V(){try{let t=JSON.parse(localStorage.getItem(X)||"null");return Array.isArray(t?.videos)?t.videos:[]}catch{return[]}}function yt(t){try{localStorage.setItem(X,JSON.stringify({videos:t,cachedAt:Date.now()}))}catch{}}async function nt(){return A||(A=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>{let e=Array.isArray(t?.videos)?t.videos:[];return yt(e),e}).catch(()=>b||V()),A)}function lt(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[‐-‒–—―ー]/g,"-").replace(/\s+/g," ").trim()}function $t(t){return lt(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function wt(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(a=>a.trim()).filter(Boolean),n=R(t).label;return lt([e,...s,t.originalArtist,t.character,t.type,n].filter(Boolean).join(" "))}function E(t){let e=$t(q()),s=t.map((n,a)=>({v:n,i:a}));return e.length?s.filter(({v:n})=>{let a=wt(n);return e.every(l=>a.includes(l))}):s}function R(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function it(t,e){let s=T(t.url),n=D(t.url),{label:a,cls:l,sub:c}=R(t);return`
    <div class="mv-card">
      <button class="mv-card-thumb-btn" type="button" data-play-music="${e}" aria-label="\u518D\u751F">
        ${s?`<img class="mv-card-thumb" src="${o(s)}" data-fallback="${o(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-play-icon">\u25B6</span>
        <span class="mv-type-badge ${l}">${a}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${o(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${o(c)}</span>
      </div>
      <div class="mv-card-actions">
        <button class="mv-watch-btn" type="button" data-watch-music="${e}" title="\u52D5\u753B\u3067\u898B\u308B">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
        </button>
        <button class="mv-add-btn" type="button"
          data-playlist-add-mv="${o(t.id)}"
          data-stream-title="${o(t.title||"")}"
          title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
      </div>
    </div>`}function _t(t,e){let{label:s,cls:n,sub:a}=R(t);return`
    <div class="mv-list-row">
      <span class="mv-list-num">${e+1}</span>
      <button class="mv-list-play" type="button" data-play-music="${e}" aria-label="\u518D\u751F">\u25B6</button>
      <div class="mv-list-info">
        <span class="mv-list-title">${o(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${o(a)}</span>
      </div>
      <span class="mv-type-badge ${n}">${s}</span>
      <button class="mv-watch-btn" type="button" data-watch-music="${e}" title="\u52D5\u753B\u3067\u898B\u308B">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
      </button>
      <button class="mv-add-btn" type="button"
        data-playlist-add-mv="${o(t.id)}"
        data-stream-title="${o(t.title||"")}"
        title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
    </div>`}function G(t){return`<div class="mv-grid">${t.map(({v:e,i:s})=>it(e,s)).join("")}</div>`}function Mt(t){return`<div class="mv-list">${t.map(({v:e,i:s})=>_t(e,s)).join("")}</div>`}function xt(t){return`
    <div class="mv-category">
      ${[{key:"original",label:"\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2\uFF08\u500B\u4EBA\uFF09"},{key:"office",label:"Re:AcT \u30AA\u30EA\u66F2"},{key:"character",label:"\u30AD\u30E3\u30E9\u30BD\u30F3 / \u58F0\u512A\u30AA\u30EA\u66F2"},{key:"cover",label:"\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09"}].map(({key:s,label:n})=>({label:n,items:t.filter(({v:a})=>a.type===s)})).filter(({items:s})=>s.length>0).map(({label:s,items:n})=>`
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">${s} <span class="mv-cat-count">${n.length}</span></h3>
        <div class="mv-grid">${n.map(({v:a,i:l})=>it(a,l)).join("")}</div>
      </div>`).join("")}
    </div>`}function Vt(){return b||[]}function rt(t){if(!t?.startsWith("mv:"))return null;let e=t.slice(3);return(b||[]).find(s=>s.id===e)||null}function St(t){let e=g();return e.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${e.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${e.map(s=>kt(s,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function kt(t,e){let s=t.streams.map(r=>{let i=r.startsWith("mv:"),p=i?rt(r):null;return{skey:r,isMv:i,mv:p,stream:i?null:e.find(d=>S(d)===r)}}),n=s.find(({stream:r,mv:i})=>r?.url||i?.url)?.stream?.url||s.find(({mv:r})=>r?.url)?.mv?.url,a=n?`<img class="pl-card-cover" src="${o(T(n))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",l=s.length,c=s.map(({skey:r,isMv:i,mv:p,stream:d})=>{let v=o(t.id+"|:|"+r),m='<span class="pl-drag-handle" aria-hidden="true" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048">\u283F</span>',u=`<button class="pl-rm-btn" data-pl-rm-stream="${v}" type="button" title="\u524A\u9664">\u2715</button>`;if(i){if(!p)return`
        <div class="pl-stream-row pl-stream-missing" data-pl-skey="${o(r)}" data-pl-id="${o(t.id)}">${m}
          <span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${u}
        </div>`;let{label:$,sub:M}=R(p),x=p.type||"original",z=(b||[]).indexOf(p);return`
        <div class="pl-stream-row" data-pl-skey="${o(r)}" data-pl-id="${o(t.id)}">
          ${m}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${x}">${$}</span></span>
            <span class="pl-stream-title">${o(p.title||"\u2014")}</span>
            <span class="pl-stream-meta">${o(M)}</span>
          </div>
          <div class="pl-stream-actions">
            ${z>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${z}" type="button" title="\u518D\u751F">\u25B6</button>`:""}
            ${u}
          </div>
        </div>`}return d?`
      <div class="pl-stream-row" data-pl-skey="${o(r)}" data-pl-id="${o(t.id)}">
        ${m}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${j(d.date)}</span>
          <span class="pl-stream-title">${o(d.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${d.index}\u67A0 \xB7 ${d.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${d.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${o(r)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          ${u}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing" data-pl-skey="${o(r)}" data-pl-id="${o(t.id)}">${m}
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${u}
      </div>`}).join(""),f=s.map(({stream:r,mv:i})=>{let p=r?.url||i?.url;return p?H(p):""}).filter(Boolean);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${a?`<div class="pl-card-cover-wrap">${a}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${o(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${o(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u4EF6</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${o(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${c||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
      ${f.length||t.streams.length?`
      <div class="pl-card-footer">
        ${f.length?`
        <button class="pl-yt-share-btn" data-pl-yt-share="${o(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${f.length}\u672C)
        </button>`:""}
        ${t.streams.length?`
        <button class="pl-yt-share-btn" data-pl-share="${o(t.id)}"
          type="button" title="\u3053\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">\u{1F517} \u30EA\u30F3\u30AF\u3092\u5171\u6709</button>`:""}
      </div>`:""}
    </div>`}function It(t,e){if(t.target.closest("#pl-new-btn")){Lt();return}let s=t.target.closest("[data-pl-share]");if(s){let i=g().find(u=>u.id===s.dataset.plShare);if(!i)return;let p=JSON.stringify({n:i.name,s:i.streams}),d=btoa(String.fromCharCode(...new TextEncoder().encode(p))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),v=`${location.origin}${location.pathname}?pl=${d}`,m=u=>{s.textContent=u?"\u2713 \u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",setTimeout(()=>{s.textContent="\u{1F517} \u30EA\u30F3\u30AF\u3092\u5171\u6709"},1600)};navigator.clipboard?.writeText(v).then(()=>m(!0)).catch(()=>{try{let u=document.createElement("textarea");u.value=v,u.style.cssText="position:fixed;opacity:0;",document.body.appendChild(u),u.select();let $=document.execCommand("copy");u.remove(),m($)}catch{m(!1)}});return}let n=t.target.closest("[data-pl-del]");if(n){let i=n.dataset.plDel,p=g().find(d=>d.id===i);p&&confirm(`\u300C${p.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(pt(i),_());return}let a=t.target.closest("[data-pl-rm-stream]");if(a){let[i,p]=a.dataset.plRmStream.split("|:|");mt(i,p),_();return}let l=t.target.closest("[data-pl-play-stream]");if(l){let i=l.closest(".pl-stream-row");if(i&&W(i,e))return;let p=l.dataset.plPlayStream,d=e.find(v=>S(v)===p);d?.url&&window.__openStreamViewer?.(d);return}let c=t.target.closest("[data-play-music-pl]");if(c){let i=c.closest(".pl-stream-row");if(i&&W(i,e))return;if(b?.length){let p=Number(c.dataset.playMusicPl);import("./chunk-RV7JB4LR.js").then(d=>d.playMusicQueue(b,p))}return}let f=t.target.closest("[data-pl-rename]");if(f){let i=f.dataset.plRename,p=g().find(v=>v.id===i);if(!p)return;let d=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",p.name)?.trim();if(d){let v=g(),m=v.find(u=>u.id===i);m&&(m.name=d,I(v),_())}return}let r=t.target.closest("[data-pl-yt-share]");if(r){let i=r.dataset.plYtShare,p=g().find(m=>m.id===i);if(!p)return;let d=p.streams.map(m=>e.find(u=>S(u)===m)).filter(m=>m?.url).map(m=>H(m.url)).filter(Boolean);if(!d.length){alert("YouTube\u306EURL\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u308B\u914D\u4FE1\u304C\u3042\u308A\u307E\u305B\u3093");return}let v=`https://www.youtube.com/watch_videos?video_ids=${d.join(",")}`;window.open(v,"_blank","noopener noreferrer");return}}function Lt(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(tt(t),_())}function Ct(t,e){let s=y("#pl-add-modal");s||(s=document.createElement("div"),s.id="pl-add-modal",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),document.body.appendChild(s));let n=g(),a=()=>{let c=g(),f=c.length?c.map(r=>{let i=r.streams.includes(t);return`
            <button class="pl-modal-item${i?" pl-modal-item--added":" pl-modal-item--free"}"
              data-pl-add="${o(r.id)}"
              ${i?'disabled aria-disabled="true"':""} type="button">
              <div class="pl-modal-item-info">
                <span class="pl-modal-item-name">${o(r.name)}</span>
                <span class="pl-modal-item-count">${r.streams.length}\u67A0</span>
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
        <div class="pl-modal-sub">${o(e||"\u914D\u4FE1")}</div>
        <div class="pl-modal-list" id="pl-modal-list">${f}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">\uFF0B</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,s.hidden=!1,s.querySelector("#pl-modal-close").addEventListener("click",l),s.querySelector("#pl-modal-backdrop").addEventListener("click",l),s.querySelector("#pl-modal-new").addEventListener("click",()=>{let r=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!r)return;let i=tt(r);K(i.id,t),l(),U(`\u300C${r}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)}),s.querySelectorAll("[data-pl-add]:not([disabled])").forEach(r=>{r.addEventListener("click",()=>{let i=r.dataset.plAdd,p=g().find(d=>d.id===i);K(i,t),a(),U(`\u300C${p?.name}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)})})},l=()=>{s.hidden=!0};a(),document.addEventListener("keydown",function c(f){f.key==="Escape"&&(l(),document.removeEventListener("keydown",c))})}function U(t){let e=y("#pl-toast");e||(e=document.createElement("div"),e.id="pl-toast",document.body.appendChild(e)),e.textContent=t,e.classList.add("pl-toast--show"),clearTimeout(e._timer),e._timer=setTimeout(()=>e.classList.remove("pl-toast--show"),2500)}function W(t,e){let s=g().find(l=>l.id===t.dataset.plId);if(!s||!window.__playMyListInViewer)return!1;let n=[];for(let l of s.streams)if(l.startsWith("mv:")){let c=rt(l);c?.url&&n.push({kind:"mv",key:l,video:c})}else{let c=e.find(f=>S(f)===l);c?.url&&n.push({kind:"stream",key:l,stream:c})}if(!n.length)return!1;let a=n.findIndex(l=>l.key===t.dataset.plSkey);return a<0&&(a=0),window.__playMyListInViewer({name:s.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:n,idx:a}),!0}function Et(){if(h!=="my-playlists")return;let t=y("#panel-playlists");t&&t.querySelectorAll(".pl-stream-list").forEach(e=>{e.addEventListener("pointerdown",Tt,{passive:!1})})}var k=null;function Tt(t){if(k)return;let e=t.target.closest(".pl-drag-handle");if(!e)return;let s=e.closest(".pl-stream-row"),n=e.closest(".pl-stream-list");if(!s||!n)return;t.preventDefault();let a=Array.from(n.querySelectorAll(".pl-stream-row")),l=a.indexOf(s);if(l<0)return;let c=a.map(r=>{let i=r.getBoundingClientRect();return i.top+i.height/2}),f=s.getBoundingClientRect();k={list:n,row:s,rows:a,mids:c,startIdx:l,targetIdx:l,startY:t.clientY,rowH:f.height+(parseFloat(getComputedStyle(n).rowGap||getComputedStyle(n).gap)||0),plId:s.dataset.plId,moved:!1},s.classList.add("is-dragging"),n.classList.add("is-drag-active");try{s.setPointerCapture(t.pointerId)}catch{}s.addEventListener("pointermove",ct,{passive:!1}),s.addEventListener("pointerup",ot),s.addEventListener("pointercancel",dt)}function ct(t){let e=k;if(!e)return;t.preventDefault();let s=t.clientY-e.startY;if(!e.moved&&Math.abs(s)<3)return;e.moved=!0,e.row.style.transform=`translateY(${s}px)`;let n=e.mids[e.startIdx]+s,a=0;for(let l=0;l<e.mids.length;l++)l!==e.startIdx&&n>e.mids[l]&&a++;a!==e.targetIdx&&(e.targetIdx=a,e.rows.forEach((l,c)=>{if(c===e.startIdx)return;let f=0;e.startIdx<a&&c>e.startIdx&&c<=a?f=-e.rowH:e.startIdx>a&&c>=a&&c<e.startIdx&&(f=e.rowH),l.style.transform=f?`translateY(${f}px)`:""}))}function ot(){let t=k;if(!t)return;let{plId:e,startIdx:s,targetIdx:n,moved:a}=t;if(ut(),!a||n===s)return;let l=g(),c=l.find(f=>f.id===e);if(c&&s<c.streams.length){let f=c.streams.slice(),[r]=f.splice(s,1);f.splice(n,0,r),c.streams=f,I(l)}_()}function dt(){ut()}function ut(){let t=k;t&&(t.rows.forEach(e=>{e.style.transform=""}),t.row.classList.remove("is-dragging"),t.list.classList.remove("is-drag-active"),t.row.removeEventListener("pointermove",ct),t.row.removeEventListener("pointerup",ot),t.row.removeEventListener("pointercancel",dt),k=null)}export{K as addStreamToPlaylist,tt as createPlaylist,pt as deletePlaylist,Vt as getMusicVideos,g as getPlaylists,Pt as isStreamInAnyPlaylist,mt as removeStreamFromPlaylist,_ as renderPlaylists,rt as resolveMusicVideoId,Ct as showAddToPlaylistModal};
