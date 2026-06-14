import{e as K}from"./chunk-JT7WCFD3.js";import{E as H,G as S,H as A,I as B,J as D,a as $,d as c}from"./chunk-PRFEE4R6.js";var X="kanau-playlists",tt="kanau-music-videos-cache-v2",F=24,y="all-streams",T=1,q="newest",_="grid",f=null,P=null,R=!1,I="",O=null;function g(){try{return JSON.parse(localStorage.getItem(X)||"[]")}catch{return[]}}function E(t){try{localStorage.setItem(X,JSON.stringify(t))}catch{}}function et(t){let e=g(),s={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return e.unshift(s),E(e),s}function ft(t){E(g().filter(e=>e.id!==t))}function Q(t,e){let s=g(),n=s.find(a=>a.id===t);return!n||n.streams.includes(e)?!1:(n.streams.push(e),E(s),!0)}function bt(t,e){let s=g(),n=s.find(a=>a.id===t);n&&(n.streams=n.streams.filter(a=>a!==e),E(s))}function Rt(t){return g().some(e=>e.streams.includes(t))}function M(){let t=$("#panel-playlists");if(!t)return;let e=K.data?.streams||[];if(y==="my-playlists"&&f===null){let a=Y();a.length?f=a:lt().then(l=>{f===null&&(f=Array.isArray(l)?l:[]),y==="my-playlists"&&M()})}let s=document.activeElement?.id==="pl-music-search",n=null;if(s){try{n=document.activeElement.selectionStart}catch{}I=document.activeElement.value||""}if(t.innerHTML=`
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
          <span class="pl-subtab-count">${g().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${y==="all-streams"?st(e,T):y==="music"?ht():Ct(e)}
      </div>
    </div>
  `,y==="music"&&yt(),s){let a=$("#pl-music-search");if(a&&(a.focus(),n!==null))try{a.setSelectionRange(n,n)}catch{}}t.onclick=a=>{let l=a.target.closest("[data-pl-subtab]");if(l){y=l.dataset.plSubtab,y==="all-streams"&&(T=1),M();return}let r=a.target.closest("[data-pl-sort]");if(r){q=r.dataset.plSort,T=1,G(e);return}let p=a.target.closest("[data-pl-page]");if(p&&!p.disabled){T=Number(p.dataset.plPage),G(e);return}let o=a.target.closest("[data-music-view]");if(o){_=o.dataset.musicView,V();return}let i=a.target.closest("[data-play-music]");if(i&&f?.length){let u=Number(i.dataset.playMusic),b=k(f),L=Math.max(0,b.findIndex(({i:w})=>w===u)),x=b.length?b.map(({v:w})=>w):f;import("./chunk-RV7JB4LR.js").then(w=>w.playMusicQueue(x,L));return}let m=a.target.closest("[data-play-filtered-music]");if(m&&f?.length){let u=k(f).map(({v:x})=>x);if(!u.length)return;let b=m.dataset.playFilteredMusic==="shuffle",L=b?Math.floor(Math.random()*u.length):0;import("./chunk-RV7JB4LR.js").then(x=>x.playMusicQueue(u,L,{shuffle:b}));return}if(a.target.closest("[data-yt-filtered-music]")&&f?.length){let u=k(f).map(({v:b})=>b.url?A(b.url):"").filter(Boolean);ot(u);return}let h=a.target.closest("[data-watch-music]");if(h&&f?.length){let u=Number(h.dataset.watchMusic),b=f[u];b?.url&&window.__openStreamViewer?.({url:b.url,title:b.title,isMv:!0});return}let v=a.target.closest("[data-playlist-add-mv]");if(v){let u=v.dataset.playlistAddMv,b=v.dataset.streamTitle||"";It("mv:"+u,b);return}y==="my-playlists"&&Lt(a,e)},t.oninput=a=>{let l=a.target.closest("#pl-music-search");l&&(I=l.value||"",clearTimeout(O),O=setTimeout(V,100))},t.oncompositionend=a=>{let l=a.target.closest("#pl-music-search");l&&(I=l.value||"",clearTimeout(O),V())},t.addEventListener("error",a=>{let l=a.target;if(!l.classList.contains("pl-sg-thumb"))return;let r=l.dataset.fallback;r&&l.src!==r&&(l.src=r,delete l.dataset.fallback)},!0),At()}var vt=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function gt(t,e){let s=t.slice();return e==="oldest"?s.reverse():e==="most-songs"?s.sort((n,a)=>(a.songs?.length??0)-(n.songs?.length??0)):e==="fewest-songs"?s.sort((n,a)=>(n.songs?.length??0)-(a.songs?.length??0)):s}function st(t,e){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let s=gt(t,q),n=s.length,a=Math.max(1,Math.ceil(n/F)),l=Math.min(Math.max(1,e),a),r=(l-1)*F,o=s.slice(r,r+F).map(d=>{let h=S(d),v=B(d.url),u=D(d.url),b=d.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${c(h)}"
        title="${c(d.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${v?`<img class="pl-sg-thumb" src="${c(v)}"
                data-fallback="${c(u)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${b}<span class="pl-sg-badge-unit">\u66F2</span></span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${c(d.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${c(H(d.date)||"")}</span>
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
      ${vt.map(d=>`
        <button class="pl-sort-opt${q===d.key?" active":""}"
          data-pl-sort="${d.key}" type="button">${d.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${o}</div>${i}`}function G(t){let e=$("#pl-subtab-body");if(!e){M();return}e.innerHTML=st(t,T);let s=$("#panel-playlists");s&&s.addEventListener("error",n=>{let a=n.target;if(!a.classList.contains("pl-sg-thumb"))return;let l=a.dataset.fallback;l&&a.src!==l&&(a.src=l,delete a.dataset.fallback)},{once:!0,capture:!0}),e.scrollIntoView({behavior:"smooth",block:"start"})}function ht(){if(f===null){let t=Y();t.length&&(f=t)}return at(f||[])}async function yt(){if(f!==null){N();return}f=Y(),R=!0,N();let t=await lt();R=!1,f=Array.isArray(t)?t:[],N()}function N(){if(y!=="music")return;let t=$("#pl-subtab-body");t&&($("#pl-music-search")?V():t.innerHTML=at(f||[]))}function at(t){return $t(t)+`<div id="pl-music-results">${nt(t)}</div>`}function $t(t){let e=z(),n=k(t).length;return`
    <div class="pl-music-viewbar">
      <label class="pl-music-search-wrap">
        <span class="pl-music-search-icon" aria-hidden="true">\u2315</span>
        <input id="pl-music-search" class="pl-music-search" type="search"
          value="${c(e)}"
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
        <button class="pl-music-view-btn${_==="grid"?" active":""}" data-music-view="grid"     type="button">\u30B0\u30EA\u30C3\u30C9</button>
        <button class="pl-music-view-btn${_==="list"?" active":""}" data-music-view="list"     type="button">\u30EA\u30B9\u30C8</button>
        <button class="pl-music-view-btn${_==="category"?" active":""}" data-music-view="category" type="button">\u30AB\u30C6\u30B4\u30EA</button>
      </div>
    </div>`}function nt(t){let e=k(t);return R&&!t.length?'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p><p class="pl-empty-hint">\u691C\u7D22\u6B04\u306F\u3053\u306E\u307E\u307E\u5165\u529B\u3067\u304D\u307E\u3059</p></div>':t.length?e.length?_==="grid"?W(e):_==="list"?St(e):_==="category"?kt(e):W(e):R?`<div class="pl-empty-state"><p>\u6700\u65B0\u30C7\u30FC\u30BF\u3092\u78BA\u8A8D\u4E2D\u2026</p><p class="pl-empty-hint">\u300C${c(z())}\u300D\u306E\u5019\u88DC\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</p></div>`:'<div class="pl-empty-state"><p>\u4E00\u81F4\u3059\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093</p><p class="pl-empty-hint">\u300C\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u300D\u306E\u3088\u3046\u306B\u533A\u5207\u3063\u3066\u691C\u7D22\u3067\u304D\u307E\u3059</p></div>':'<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>'}function z(){let t=$("#pl-music-search");return t&&(I=t.value||""),I}function V(){let t=f||[],e=$(".pl-music-count");if(e){let n=k(t).length;e.textContent=`${n}${n===t.length?"":` / ${t.length}`}\u4EF6`}document.querySelectorAll("[data-music-view]").forEach(n=>{n.classList.toggle("active",n.dataset.musicView===_)});let s=$("#pl-music-results");s&&(s.innerHTML=nt(t))}function Y(){try{let t=JSON.parse(localStorage.getItem(tt)||"null");return Array.isArray(t?.videos)?t.videos:[]}catch{return[]}}function wt(t){try{localStorage.setItem(tt,JSON.stringify({videos:t,cachedAt:Date.now()}))}catch{}}async function lt(){return P||(P=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>{let e=Array.isArray(t?.videos)?t.videos:[];return wt(e),e}).catch(()=>f||Y()),P)}function it(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[‐-‒–—―ー]/g,"-").replace(/\s+/g," ").trim()}function _t(t){return it(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function Mt(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(a=>a.trim()).filter(Boolean),n=j(t).label;return it([e,...s,t.originalArtist,t.character,t.type,n].filter(Boolean).join(" "))}function k(t){let e=_t(z()),s=t.map((n,a)=>({v:n,i:a}));return e.length?s.filter(({v:n})=>{let a=Mt(n);return e.every(l=>a.includes(l))}):s}function j(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function rt(t,e){let s=B(t.url),n=D(t.url),{label:a,cls:l,sub:r}=j(t);return`
    <div class="mv-card">
      <button class="mv-card-thumb-btn" type="button" data-play-music="${e}" aria-label="\u518D\u751F">
        ${s?`<img class="mv-card-thumb" src="${c(s)}" data-fallback="${c(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-play-icon">\u25B6</span>
        <span class="mv-type-badge ${l}">${a}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${c(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${c(r)}</span>
      </div>
      <div class="mv-card-actions">
        <button class="mv-watch-btn" type="button" data-watch-music="${e}" title="\u52D5\u753B\u3067\u898B\u308B">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
        </button>
        <button class="mv-add-btn" type="button"
          data-playlist-add-mv="${c(t.id)}"
          data-stream-title="${c(t.title||"")}"
          title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
      </div>
    </div>`}function xt(t,e){let{label:s,cls:n,sub:a}=j(t);return`
    <div class="mv-list-row">
      <span class="mv-list-num">${e+1}</span>
      <button class="mv-list-play" type="button" data-play-music="${e}" aria-label="\u518D\u751F">\u25B6</button>
      <div class="mv-list-info">
        <span class="mv-list-title">${c(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${c(a)}</span>
      </div>
      <span class="mv-type-badge ${n}">${s}</span>
      <button class="mv-watch-btn" type="button" data-watch-music="${e}" title="\u52D5\u753B\u3067\u898B\u308B">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
      </button>
      <button class="mv-add-btn" type="button"
        data-playlist-add-mv="${c(t.id)}"
        data-stream-title="${c(t.title||"")}"
        title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
    </div>`}function W(t){return`<div class="mv-grid">${t.map(({v:e,i:s})=>rt(e,s)).join("")}</div>`}function St(t){return`<div class="mv-list">${t.map(({v:e,i:s})=>xt(e,s)).join("")}</div>`}function kt(t){return`
    <div class="mv-category">
      ${[{key:"original",label:"\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2\uFF08\u500B\u4EBA\uFF09"},{key:"office",label:"Re:AcT \u30AA\u30EA\u66F2"},{key:"character",label:"\u30AD\u30E3\u30E9\u30BD\u30F3 / \u58F0\u512A\u30AA\u30EA\u66F2"},{key:"cover",label:"\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09"}].map(({key:s,label:n})=>({label:n,items:t.filter(({v:a})=>a.type===s)})).filter(({items:s})=>s.length>0).map(({label:s,items:n})=>`
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">${s} <span class="mv-cat-count">${n.length}</span></h3>
        <div class="mv-grid">${n.map(({v:a,i:l})=>rt(a,l)).join("")}</div>
      </div>`).join("")}
    </div>`}function Yt(){return f||[]}function J(t){if(!t?.startsWith("mv:"))return null;let e=t.slice(3);return(f||[]).find(s=>s.id===e)||null}function ct(t,e){return(t.streams||[]).map(s=>{if(s.startsWith("mv:")){let a=J(s);return a?.url?A(a.url):""}let n=e.find(a=>S(a)===s);return n?.url?A(n.url):""}).filter(Boolean)}function ot(t){if(!t.length){alert("YouTube\u3067\u518D\u751F\u3067\u304D\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093");return}let e;if(t.length===1)e=`https://www.youtube.com/watch?v=${t[0]}`;else{let s=t.slice(0,50);t.length>50&&alert(`\u52D5\u753B\u304C${t.length}\u672C\u3042\u308A\u307E\u3059\u3002\u5148\u982D50\u672C\u3067\u9023\u7D9A\u518D\u751F\u3057\u307E\u3059\u3002`),e=`https://www.youtube.com/watch_videos?video_ids=${s.join(",")}`}window.open(e,"_blank","noopener noreferrer")}function Ct(t){let e=g();return e.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${e.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${e.map(s=>Et(s,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function Et(t,e){let s=t.streams.map(o=>{let i=o.startsWith("mv:"),m=i?J(o):null;return{skey:o,isMv:i,mv:m,stream:i?null:e.find(d=>S(d)===o)}}),n=s.find(({stream:o,mv:i})=>o?.url||i?.url)?.stream?.url||s.find(({mv:o})=>o?.url)?.mv?.url,a=n?`<img class="pl-card-cover" src="${c(B(n))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",l=s.length,r=s.map(({skey:o,isMv:i,mv:m,stream:d})=>{let h=c(t.id+"|:|"+o),v='<span class="pl-drag-handle" aria-hidden="true" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048">\u283F</span>',u=`<button class="pl-rm-btn" data-pl-rm-stream="${h}" type="button" title="\u524A\u9664">\u2715</button>`;if(i){if(!m)return`
        <div class="pl-stream-row pl-stream-missing" data-pl-skey="${c(o)}" data-pl-id="${c(t.id)}">${v}
          <span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${u}
        </div>`;let{label:b,sub:L}=j(m),x=m.type||"original",w=(f||[]).indexOf(m);return`
        <div class="pl-stream-row" data-pl-skey="${c(o)}" data-pl-id="${c(t.id)}">
          ${v}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${x}">${b}</span></span>
            <span class="pl-stream-title">${c(m.title||"\u2014")}</span>
            <span class="pl-stream-meta">${c(L)}</span>
          </div>
          <div class="pl-stream-actions">
            ${w>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${w}" type="button" title="\u518D\u751F">\u25B6</button>`:""}
            ${u}
          </div>
        </div>`}return d?`
      <div class="pl-stream-row" data-pl-skey="${c(o)}" data-pl-id="${c(t.id)}">
        ${v}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${H(d.date)}</span>
          <span class="pl-stream-title">${c(d.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${d.index}\u67A0 \xB7 ${d.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${d.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${c(o)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          ${u}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing" data-pl-skey="${c(o)}" data-pl-id="${c(t.id)}">${v}
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${u}
      </div>`}).join(""),p=ct(t,e);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${a?`<div class="pl-card-cover-wrap">${a}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${c(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${c(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u4EF6</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${c(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${r||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
      ${p.length||t.streams.length?`
      <div class="pl-card-footer">
        ${p.length?`
        <button class="pl-yt-share-btn" data-pl-yt-share="${c(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${p.length}\u672C)
        </button>`:""}
        ${t.streams.length?`
        <button class="pl-yt-share-btn" data-pl-share="${c(t.id)}"
          type="button" title="\u3053\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">\u{1F517} \u30EA\u30F3\u30AF\u3092\u5171\u6709</button>`:""}
      </div>`:""}
    </div>`}function Lt(t,e){if(t.target.closest("#pl-new-btn")){Tt();return}let s=t.target.closest("[data-pl-share]");if(s){let i=g().find(u=>u.id===s.dataset.plShare);if(!i)return;let m=JSON.stringify({n:i.name,s:i.streams}),d=btoa(String.fromCharCode(...new TextEncoder().encode(m))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),h=`${location.origin}${location.pathname}?pl=${d}`,v=u=>{s.textContent=u?"\u2713 \u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",setTimeout(()=>{s.textContent="\u{1F517} \u30EA\u30F3\u30AF\u3092\u5171\u6709"},1600)};navigator.clipboard?.writeText(h).then(()=>v(!0)).catch(()=>{try{let u=document.createElement("textarea");u.value=h,u.style.cssText="position:fixed;opacity:0;",document.body.appendChild(u),u.select();let b=document.execCommand("copy");u.remove(),v(b)}catch{v(!1)}});return}let n=t.target.closest("[data-pl-del]");if(n){let i=n.dataset.plDel,m=g().find(d=>d.id===i);m&&confirm(`\u300C${m.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(ft(i),M());return}let a=t.target.closest("[data-pl-rm-stream]");if(a){let[i,m]=a.dataset.plRmStream.split("|:|");bt(i,m),M();return}let l=t.target.closest("[data-pl-play-stream]");if(l){let i=l.closest(".pl-stream-row");if(i&&Z(i,e))return;let m=l.dataset.plPlayStream,d=e.find(h=>S(h)===m);d?.url&&window.__openStreamViewer?.(d);return}let r=t.target.closest("[data-play-music-pl]");if(r){let i=r.closest(".pl-stream-row");if(i&&Z(i,e))return;if(f?.length){let m=Number(r.dataset.playMusicPl);import("./chunk-RV7JB4LR.js").then(d=>d.playMusicQueue(f,m))}return}let p=t.target.closest("[data-pl-rename]");if(p){let i=p.dataset.plRename,m=g().find(h=>h.id===i);if(!m)return;let d=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",m.name)?.trim();if(d){let h=g(),v=h.find(u=>u.id===i);v&&(v.name=d,E(h),M())}return}let o=t.target.closest("[data-pl-yt-share]");if(o){let i=o.dataset.plYtShare,m=g().find(d=>d.id===i);if(!m)return;ot(ct(m,e));return}}function Tt(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(et(t),M())}function It(t,e){let s=$("#pl-add-modal");s||(s=document.createElement("div"),s.id="pl-add-modal",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),document.body.appendChild(s));let n=g(),a=()=>{let r=g(),p=r.length?r.map(o=>{let i=o.streams.includes(t);return`
            <button class="pl-modal-item${i?" pl-modal-item--added":" pl-modal-item--free"}"
              data-pl-add="${c(o.id)}"
              ${i?'disabled aria-disabled="true"':""} type="button">
              <div class="pl-modal-item-info">
                <span class="pl-modal-item-name">${c(o.name)}</span>
                <span class="pl-modal-item-count">${o.streams.length}\u67A0</span>
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
        <div class="pl-modal-sub">${c(e||"\u914D\u4FE1")}</div>
        <div class="pl-modal-list" id="pl-modal-list">${p}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">\uFF0B</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,s.hidden=!1,s.querySelector("#pl-modal-close").addEventListener("click",l),s.querySelector("#pl-modal-backdrop").addEventListener("click",l),s.querySelector("#pl-modal-new").addEventListener("click",()=>{let o=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!o)return;let i=et(o);Q(i.id,t),l(),U(`\u300C${o}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)}),s.querySelectorAll("[data-pl-add]:not([disabled])").forEach(o=>{o.addEventListener("click",()=>{let i=o.dataset.plAdd,m=g().find(d=>d.id===i);Q(i,t),a(),U(`\u300C${m?.name}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)})})},l=()=>{s.hidden=!0};a(),document.addEventListener("keydown",function r(p){p.key==="Escape"&&(l(),document.removeEventListener("keydown",r))})}function U(t){let e=$("#pl-toast");e||(e=document.createElement("div"),e.id="pl-toast",document.body.appendChild(e)),e.textContent=t,e.classList.add("pl-toast--show"),clearTimeout(e._timer),e._timer=setTimeout(()=>e.classList.remove("pl-toast--show"),2500)}function Z(t,e){let s=g().find(l=>l.id===t.dataset.plId);if(!s||!window.__playMyListInViewer)return!1;let n=[];for(let l of s.streams)if(l.startsWith("mv:")){let r=J(l);r?.url&&n.push({kind:"mv",key:l,video:r})}else{let r=e.find(p=>S(p)===l);r?.url&&n.push({kind:"stream",key:l,stream:r})}if(!n.length)return!1;let a=n.findIndex(l=>l.key===t.dataset.plSkey);return a<0&&(a=0),window.__playMyListInViewer({name:s.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:n,idx:a}),!0}function At(){if(y!=="my-playlists")return;let t=$("#panel-playlists");t&&t.querySelectorAll(".pl-stream-list").forEach(e=>{e.addEventListener("pointerdown",Bt,{passive:!1})})}var C=null;function Bt(t){if(C)return;let e=t.target.closest(".pl-drag-handle");if(!e)return;let s=e.closest(".pl-stream-row"),n=e.closest(".pl-stream-list");if(!s||!n)return;t.preventDefault();let a=Array.from(n.querySelectorAll(".pl-stream-row")),l=a.indexOf(s);if(l<0)return;let r=a.map(o=>{let i=o.getBoundingClientRect();return i.top+i.height/2}),p=s.getBoundingClientRect();C={list:n,row:s,rows:a,mids:r,startIdx:l,targetIdx:l,startY:t.clientY,rowH:p.height+(parseFloat(getComputedStyle(n).rowGap||getComputedStyle(n).gap)||0),plId:s.dataset.plId,moved:!1},s.classList.add("is-dragging"),n.classList.add("is-drag-active");try{s.setPointerCapture(t.pointerId)}catch{}s.addEventListener("pointermove",dt,{passive:!1}),s.addEventListener("pointerup",ut),s.addEventListener("pointercancel",pt)}function dt(t){let e=C;if(!e)return;t.preventDefault();let s=t.clientY-e.startY;if(!e.moved&&Math.abs(s)<3)return;e.moved=!0,e.row.style.transform=`translateY(${s}px)`;let n=e.mids[e.startIdx]+s,a=0;for(let l=0;l<e.mids.length;l++)l!==e.startIdx&&n>e.mids[l]&&a++;a!==e.targetIdx&&(e.targetIdx=a,e.rows.forEach((l,r)=>{if(r===e.startIdx)return;let p=0;e.startIdx<a&&r>e.startIdx&&r<=a?p=-e.rowH:e.startIdx>a&&r>=a&&r<e.startIdx&&(p=e.rowH),l.style.transform=p?`translateY(${p}px)`:""}))}function ut(){let t=C;if(!t)return;let{plId:e,startIdx:s,targetIdx:n,moved:a}=t;if(mt(),!a||n===s)return;let l=g(),r=l.find(p=>p.id===e);if(r&&s<r.streams.length){let p=r.streams.slice(),[o]=p.splice(s,1);p.splice(n,0,o),r.streams=p,E(l)}M()}function pt(){mt()}function mt(){let t=C;t&&(t.rows.forEach(e=>{e.style.transform=""}),t.row.classList.remove("is-dragging"),t.list.classList.remove("is-drag-active"),t.row.removeEventListener("pointermove",dt),t.row.removeEventListener("pointerup",ut),t.row.removeEventListener("pointercancel",pt),C=null)}export{Q as addStreamToPlaylist,et as createPlaylist,ft as deletePlaylist,Yt as getMusicVideos,g as getPlaylists,Rt as isStreamInAnyPlaylist,bt as removeStreamFromPlaylist,M as renderPlaylists,J as resolveMusicVideoId,It as showAddToPlaylistModal};
