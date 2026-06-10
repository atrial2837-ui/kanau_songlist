import{e as V}from"./chunk-N3S3MIXU.js";import{E as L,G as S,H as P,I as B,J as x,a as $,d as c}from"./chunk-FKVR6ZKV.js";var N="kanau-playlists",E=24,h="all-streams",k=1,C="newest",M="grid",v=null;function f(){try{return JSON.parse(localStorage.getItem(N)||"[]")}catch{return[]}}function _(t){try{localStorage.setItem(N,JSON.stringify(t))}catch{}}function Y(t){let s=f(),a={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return s.unshift(a),_(s),a}function K(t){_(f().filter(s=>s.id!==t))}function R(t,s){let a=f(),l=a.find(e=>e.id===t);return!l||l.streams.includes(s)?!1:(l.streams.push(s),_(a),!0)}function J(t,s){let a=f(),l=a.find(e=>e.id===t);l&&(l.streams=l.streams.filter(e=>e!==s),_(a))}function dt(t){return f().some(s=>s.streams.includes(t))}function w(){let t=$("#panel-playlists");if(!t)return;let s=V.data?.streams||[];t.innerHTML=`
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
          <span class="pl-subtab-count">${f().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${h==="all-streams"?q(s,k):h==="music"?W():et(s)}
      </div>
    </div>
  `,t.onclick=a=>{let l=a.target.closest("[data-pl-subtab]");if(l){h=l.dataset.plSubtab,h==="all-streams"&&(k=1),w(),h==="music"&&Z();return}let e=a.target.closest("[data-pl-sort]");if(e){C=e.dataset.plSort,k=1,H(s);return}let d=a.target.closest("[data-pl-page]");if(d&&!d.disabled){k=Number(d.dataset.plPage),H(s);return}let b=a.target.closest("[data-music-view]");if(b){M=b.dataset.musicView;let r=$("#pl-subtab-body");r&&v&&(r.innerHTML=D(v));return}let y=a.target.closest("[data-play-music]");if(y&&v?.length){let r=Number(y.dataset.playMusic);import("./chunk-XVKQTMGG.js").then(n=>n.playMusicQueue(v,r));return}let o=a.target.closest("[data-watch-music]");if(o&&v?.length){let r=Number(o.dataset.watchMusic),n=v[r];n?.url&&window.__openStreamViewer?.({url:n.url,title:n.title,isMv:!0});return}let i=a.target.closest("[data-playlist-add-mv]");if(i){let r=i.dataset.playlistAddMv,n=i.dataset.streamTitle||"";rt("mv:"+r,n);return}h==="my-playlists"&&nt(a,s)},t.addEventListener("error",a=>{let l=a.target;if(!l.classList.contains("pl-sg-thumb"))return;let e=l.dataset.fallback;e&&l.src!==e&&(l.src=e,delete l.dataset.fallback)},!0)}var Q=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function U(t,s){let a=t.slice();return s==="oldest"?a.reverse():s==="most-songs"?a.sort((l,e)=>(e.songs?.length??0)-(l.songs?.length??0)):s==="fewest-songs"?a.sort((l,e)=>(l.songs?.length??0)-(e.songs?.length??0)):a}function q(t,s){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let a=U(t,C),l=a.length,e=Math.max(1,Math.ceil(l/E)),d=Math.min(Math.max(1,s),e),b=(d-1)*E,o=a.slice(b,b+E).map(n=>{let g=S(n),u=B(n.url),p=x(n.url),m=n.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${c(g)}"
        title="${c(n.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${u?`<img class="pl-sg-thumb" src="${c(u)}"
                data-fallback="${c(p)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${m}<span class="pl-sg-badge-unit">\u66F2</span></span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${c(n.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${c(L(n.date)||"")}</span>
        </div>
      </button>`}).join(""),i=e>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${d-1}"
        ${d<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${d} / ${e}</span>
      <button class="pl-page-btn" data-pl-page="${d+1}"
        ${d>=e?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${Q.map(n=>`
        <button class="pl-sort-opt${C===n.key?" active":""}"
          data-pl-sort="${n.key}" type="button">${n.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${o}</div>${i}`}function H(t){let s=$("#pl-subtab-body");if(!s){w();return}s.innerHTML=q(t,k);let a=$("#panel-playlists");a&&a.addEventListener("error",l=>{let e=l.target;if(!e.classList.contains("pl-sg-thumb"))return;let d=e.dataset.fallback;d&&e.src!==d&&(e.src=d,delete e.dataset.fallback)},{once:!0,capture:!0}),s.scrollIntoView({behavior:"smooth",block:"start"})}function W(){return'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p></div>'}async function Z(){if(v===null)try{v=(await(await fetch("/data/music.json")).json()).videos||[]}catch{v=[]}let t=$("#pl-subtab-body");t&&h==="music"&&(t.innerHTML=D(v))}function D(t){let s=`
    <div class="pl-music-viewbar">
      <span class="pl-music-count">${t.length}\u4EF6</span>
      <div class="pl-music-views">
        <button class="pl-music-view-btn${M==="grid"?" active":""}" data-music-view="grid"     type="button">\u30B0\u30EA\u30C3\u30C9</button>
        <button class="pl-music-view-btn${M==="list"?" active":""}" data-music-view="list"     type="button">\u30EA\u30B9\u30C8</button>
        <button class="pl-music-view-btn${M==="category"?" active":""}" data-music-view="category" type="button">\u30AB\u30C6\u30B4\u30EA</button>
      </div>
    </div>`;return t.length?M==="grid"?s+O(t):M==="list"?s+tt(t):M==="category"?s+st(t):s+O(t):`${s}<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>`}function j(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function A(t,s){let a=B(t.url),l=x(t.url),{label:e,cls:d,sub:b}=j(t);return`
    <div class="mv-card">
      <button class="mv-card-thumb-btn" type="button" data-play-music="${s}" aria-label="\u518D\u751F">
        ${a?`<img class="mv-card-thumb" src="${c(a)}" data-fallback="${c(l)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-play-icon">\u25B6</span>
        <span class="mv-type-badge ${d}">${e}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${c(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${c(b)}</span>
      </div>
      <div class="mv-card-actions">
        <button class="mv-watch-btn" type="button" data-watch-music="${s}" title="\u52D5\u753B\u3067\u898B\u308B">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
        </button>
        <button class="mv-add-btn" type="button"
          data-playlist-add-mv="${c(t.id)}"
          data-stream-title="${c(t.title||"")}"
          title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
      </div>
    </div>`}function X(t,s){let{label:a,cls:l,sub:e}=j(t);return`
    <div class="mv-list-row">
      <span class="mv-list-num">${s+1}</span>
      <button class="mv-list-play" type="button" data-play-music="${s}" aria-label="\u518D\u751F">\u25B6</button>
      <div class="mv-list-info">
        <span class="mv-list-title">${c(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${c(e)}</span>
      </div>
      <span class="mv-type-badge ${l}">${a}</span>
      <button class="mv-watch-btn" type="button" data-watch-music="${s}" title="\u52D5\u753B\u3067\u898B\u308B">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
      </button>
      <button class="mv-add-btn" type="button"
        data-playlist-add-mv="${c(t.id)}"
        data-stream-title="${c(t.title||"")}"
        title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
    </div>`}function O(t){return`<div class="mv-grid">${t.map((s,a)=>A(s,a)).join("")}</div>`}function tt(t){return`<div class="mv-list">${t.map((s,a)=>X(s,a)).join("")}</div>`}function st(t){let s=t.map((l,e)=>({v:l,i:e})).filter(({v:l})=>l.type==="original"),a=t.map((l,e)=>({v:l,i:e})).filter(({v:l})=>l.type==="cover");return`
    <div class="mv-category">
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2 <span class="mv-cat-count">${s.length}</span></h3>
        ${s.length?`<div class="mv-grid">${s.map(({v:l,i:e})=>A(l,e)).join("")}</div>`:'<p class="mv-cat-empty">\u306A\u3057</p>'}
      </div>
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09 <span class="mv-cat-count">${a.length}</span></h3>
        ${a.length?`<div class="mv-grid">${a.map(({v:l,i:e})=>A(l,e)).join("")}</div>`:'<p class="mv-cat-empty">\u306A\u3057</p>'}
      </div>
    </div>`}function pt(){return v||[]}function at(t){if(!t?.startsWith("mv:"))return null;let s=t.slice(3);return(v||[]).find(a=>a.id===s)||null}function et(t){let s=f();return s.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${s.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${s.map(a=>lt(a,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function lt(t,s){let a=t.streams.map(o=>{let i=o.startsWith("mv:"),r=i?at(o):null;return{skey:o,isMv:i,mv:r,stream:i?null:s.find(n=>S(n)===o)}}),l=a.find(({stream:o,mv:i})=>o?.url||i?.url)?.stream?.url||a.find(({mv:o})=>o?.url)?.mv?.url,e=l?`<img class="pl-card-cover" src="${c(B(l))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",d=a.length,b=a.map(({skey:o,isMv:i,mv:r,stream:n},g)=>{let u=c(t.id+"|:|"+o),p=`
      <div class="pl-sort-btns">
        <button class="pl-sort-btn" data-pl-move="${u}|:|up"
          type="button" title="\u4E0A\u3078" ${g===0?"disabled":""}>\u2191</button>
        <button class="pl-sort-btn" data-pl-move="${u}|:|down"
          type="button" title="\u4E0B\u3078" ${g===d-1?"disabled":""}>\u2193</button>
      </div>`,m=`<button class="pl-rm-btn" data-pl-rm-stream="${u}" type="button" title="\u524A\u9664">\u2715</button>`;if(i){if(!r)return`
        <div class="pl-stream-row pl-stream-missing">${p}
          <span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${m}
        </div>`;let{label:T,sub:F}=j(r),G=r.type||"original",I=(v||[]).indexOf(r);return`
        <div class="pl-stream-row">
          ${p}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${G}">${T}</span></span>
            <span class="pl-stream-title">${c(r.title||"\u2014")}</span>
            <span class="pl-stream-meta">${c(F)}</span>
          </div>
          <div class="pl-stream-actions">
            ${I>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${I}" type="button" title="\u518D\u751F">\u25B6</button>`:""}
            ${m}
          </div>
        </div>`}return n?`
      <div class="pl-stream-row">
        ${p}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${L(n.date)}</span>
          <span class="pl-stream-title">${c(n.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${n.index}\u67A0 \xB7 ${n.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${n.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${c(o)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          ${m}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing">${p}
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${m}
      </div>`}).join(""),y=a.map(({stream:o,mv:i})=>{let r=o?.url||i?.url;return r?P(r):""}).filter(Boolean);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${e?`<div class="pl-card-cover-wrap">${e}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${c(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${c(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u4EF6</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${c(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${b||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
      ${y.length?`
      <div class="pl-card-footer">
        <button class="pl-yt-share-btn" data-pl-yt-share="${c(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${y.length}\u672C)
        </button>
      </div>`:""}
    </div>`}function nt(t,s){if(t.target.closest("#pl-new-btn")){it();return}let a=t.target.closest("[data-pl-del]");if(a){let i=a.dataset.plDel,r=f().find(n=>n.id===i);r&&confirm(`\u300C${r.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(K(i),w());return}let l=t.target.closest("[data-pl-rm-stream]");if(l){let[i,r]=l.dataset.plRmStream.split("|:|");J(i,r),w();return}let e=t.target.closest("[data-pl-play-stream]");if(e){let i=e.dataset.plPlayStream,r=s.find(n=>S(n)===i);r?.url&&window.__openStreamViewer?.(r);return}let d=t.target.closest("[data-play-music-pl]");if(d&&v?.length){let i=Number(d.dataset.playMusicPl);import("./chunk-XVKQTMGG.js").then(r=>r.playMusicQueue(v,i));return}let b=t.target.closest("[data-pl-rename]");if(b){let i=b.dataset.plRename,r=f().find(g=>g.id===i);if(!r)return;let n=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",r.name)?.trim();if(n){let g=f(),u=g.find(p=>p.id===i);u&&(u.name=n,_(g),w())}return}let y=t.target.closest("[data-pl-move]");if(y){let i=y.dataset.plMove.split("|:|"),[r,n,g]=i,u=f(),p=u.find(T=>T.id===r);if(!p)return;let m=p.streams.indexOf(n);if(m<0)return;g==="up"&&m>0?([p.streams[m-1],p.streams[m]]=[p.streams[m],p.streams[m-1]],_(u),w()):g==="down"&&m<p.streams.length-1&&([p.streams[m],p.streams[m+1]]=[p.streams[m+1],p.streams[m]],_(u),w());return}let o=t.target.closest("[data-pl-yt-share]");if(o){let i=o.dataset.plYtShare,r=f().find(u=>u.id===i);if(!r)return;let n=r.streams.map(u=>s.find(p=>S(p)===u)).filter(u=>u?.url).map(u=>P(u.url)).filter(Boolean);if(!n.length){alert("YouTube\u306EURL\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u308B\u914D\u4FE1\u304C\u3042\u308A\u307E\u305B\u3093");return}let g=`https://www.youtube.com/watch_videos?video_ids=${n.join(",")}`;window.open(g,"_blank","noopener noreferrer");return}}function it(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(Y(t),w())}function rt(t,s){let a=$("#pl-add-modal");a||(a=document.createElement("div"),a.id="pl-add-modal",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),document.body.appendChild(a));let l=f(),e=()=>{let b=f(),y=b.length?b.map(o=>{let i=o.streams.includes(t);return`
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
            </button>`}).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u5148\u306B\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u3057\u3066\u304F\u3060\u3055\u3044</span></p>';a.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148\u3092\u9078\u629E</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
        </div>
        <div class="pl-modal-sub">${c(s||"\u914D\u4FE1")}</div>
        <div class="pl-modal-list" id="pl-modal-list">${y}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">\uFF0B</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,a.hidden=!1,a.querySelector("#pl-modal-close").addEventListener("click",d),a.querySelector("#pl-modal-backdrop").addEventListener("click",d),a.querySelector("#pl-modal-new").addEventListener("click",()=>{let o=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!o)return;let i=Y(o);R(i.id,t),d(),z(`\u300C${o}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)}),a.querySelectorAll("[data-pl-add]:not([disabled])").forEach(o=>{o.addEventListener("click",()=>{let i=o.dataset.plAdd,r=f().find(n=>n.id===i);R(i,t),e(),z(`\u300C${r?.name}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)})})},d=()=>{a.hidden=!0};e(),document.addEventListener("keydown",function b(y){y.key==="Escape"&&(d(),document.removeEventListener("keydown",b))})}function z(t){let s=$("#pl-toast");s||(s=document.createElement("div"),s.id="pl-toast",document.body.appendChild(s)),s.textContent=t,s.classList.add("pl-toast--show"),clearTimeout(s._timer),s._timer=setTimeout(()=>s.classList.remove("pl-toast--show"),2500)}export{R as addStreamToPlaylist,Y as createPlaylist,K as deletePlaylist,pt as getMusicVideos,f as getPlaylists,dt as isStreamInAnyPlaylist,J as removeStreamFromPlaylist,w as renderPlaylists,at as resolveMusicVideoId,rt as showAddToPlaylistModal};
