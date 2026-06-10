import{e as I}from"./chunk-N3S3MIXU.js";import{E as x,G as k,H as L,I as T,J as P,a as $,d}from"./chunk-FKVR6ZKV.js";var z="kanau-playlists",E=24,h="all-streams",S=1,A="newest",M="grid",v=null;function f(){try{return JSON.parse(localStorage.getItem(z)||"[]")}catch{return[]}}function _(t){try{localStorage.setItem(z,JSON.stringify(t))}catch{}}function N(t){let s=f(),a={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return s.unshift(a),_(s),a}function K(t){_(f().filter(s=>s.id!==t))}function V(t,s){let a=f(),l=a.find(e=>e.id===t);return!l||l.streams.includes(s)?!1:(l.streams.push(s),_(a),!0)}function J(t,s){let a=f(),l=a.find(e=>e.id===t);l&&(l.streams=l.streams.filter(e=>e!==s),_(a))}function dt(t){return f().some(s=>s.streams.includes(t))}function w(){let t=$("#panel-playlists");if(!t)return;let s=I.data?.streams||[];t.innerHTML=`
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
        ${h==="all-streams"?Y(s,S):h==="music"?W():et(s)}
      </div>
    </div>
  `,t.onclick=a=>{let l=a.target.closest("[data-pl-subtab]");if(l){h=l.dataset.plSubtab,h==="all-streams"&&(S=1),w(),h==="music"&&Z();return}let e=a.target.closest("[data-pl-sort]");if(e){A=e.dataset.plSort,S=1,R(s);return}let c=a.target.closest("[data-pl-page]");if(c&&!c.disabled){S=Number(c.dataset.plPage),R(s);return}let m=a.target.closest("[data-music-view]");if(m){M=m.dataset.musicView;let r=$("#pl-subtab-body");r&&v&&(r.innerHTML=q(v));return}let g=a.target.closest("[data-play-music]");if(g&&v?.length){let r=Number(g.dataset.playMusic);import("./chunk-XVKQTMGG.js").then(n=>n.playMusicQueue(v,r));return}let o=a.target.closest("[data-watch-music]");if(o&&v?.length){let r=Number(o.dataset.watchMusic),n=v[r];n?.url&&window.__openStreamViewer?.({url:n.url,title:n.title,isMv:!0});return}let i=a.target.closest("[data-playlist-add-mv]");if(i){let r=i.dataset.playlistAddMv,n=i.dataset.streamTitle||"";rt("mv:"+r,n);return}h==="my-playlists"&&nt(a,s)},t.addEventListener("error",a=>{let l=a.target;if(!l.classList.contains("pl-sg-thumb"))return;let e=l.dataset.fallback;e&&l.src!==e&&(l.src=e,delete l.dataset.fallback)},!0)}var Q=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function U(t,s){let a=t.slice();return s==="oldest"?a.reverse():s==="most-songs"?a.sort((l,e)=>(e.songs?.length??0)-(l.songs?.length??0)):s==="fewest-songs"?a.sort((l,e)=>(l.songs?.length??0)-(e.songs?.length??0)):a}function Y(t,s){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let a=U(t,A),l=a.length,e=Math.max(1,Math.ceil(l/E)),c=Math.min(Math.max(1,s),e),m=(c-1)*E,o=a.slice(m,m+E).map(n=>{let y=k(n),u=T(n.url),p=P(n.url),b=n.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${d(y)}"
        title="${d(n.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${u?`<img class="pl-sg-thumb" src="${d(u)}"
                data-fallback="${d(p)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${b}<span class="pl-sg-badge-unit">\u66F2</span></span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${d(n.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${d(x(n.date)||"")}</span>
        </div>
      </button>`}).join(""),i=e>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${c-1}"
        ${c<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${c} / ${e}</span>
      <button class="pl-page-btn" data-pl-page="${c+1}"
        ${c>=e?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${Q.map(n=>`
        <button class="pl-sort-opt${A===n.key?" active":""}"
          data-pl-sort="${n.key}" type="button">${n.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${o}</div>${i}`}function R(t){let s=$("#pl-subtab-body");if(!s){w();return}s.innerHTML=Y(t,S);let a=$("#panel-playlists");a&&a.addEventListener("error",l=>{let e=l.target;if(!e.classList.contains("pl-sg-thumb"))return;let c=e.dataset.fallback;c&&e.src!==c&&(e.src=c,delete e.dataset.fallback)},{once:!0,capture:!0}),s.scrollIntoView({behavior:"smooth",block:"start"})}function W(){return'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p></div>'}async function Z(){if(v===null)try{v=(await(await fetch("/data/music.json")).json()).videos||[]}catch{v=[]}let t=$("#pl-subtab-body");t&&h==="music"&&(t.innerHTML=q(v))}function q(t){let s=`
    <div class="pl-music-viewbar">
      <span class="pl-music-count">${t.length}\u4EF6</span>
      <div class="pl-music-views">
        <button class="pl-music-view-btn${M==="grid"?" active":""}" data-music-view="grid"     type="button">\u30B0\u30EA\u30C3\u30C9</button>
        <button class="pl-music-view-btn${M==="list"?" active":""}" data-music-view="list"     type="button">\u30EA\u30B9\u30C8</button>
        <button class="pl-music-view-btn${M==="category"?" active":""}" data-music-view="category" type="button">\u30AB\u30C6\u30B4\u30EA</button>
      </div>
    </div>`;return t.length?M==="grid"?s+H(t):M==="list"?s+tt(t):M==="category"?s+st(t):s+H(t):`${s}<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>`}function C(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function D(t,s){let a=T(t.url),l=P(t.url),{label:e,cls:c,sub:m}=C(t);return`
    <div class="mv-card">
      <button class="mv-card-thumb-btn" type="button" data-play-music="${s}" aria-label="\u518D\u751F">
        ${a?`<img class="mv-card-thumb" src="${d(a)}" data-fallback="${d(l)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-play-icon">\u25B6</span>
        <span class="mv-type-badge ${c}">${e}</span>
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
    </div>`}function X(t,s){let{label:a,cls:l,sub:e}=C(t);return`
    <div class="mv-list-row">
      <span class="mv-list-num">${s+1}</span>
      <button class="mv-list-play" type="button" data-play-music="${s}" aria-label="\u518D\u751F">\u25B6</button>
      <div class="mv-list-info">
        <span class="mv-list-title">${d(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${d(e)}</span>
      </div>
      <span class="mv-type-badge ${l}">${a}</span>
      <button class="mv-watch-btn" type="button" data-watch-music="${s}" title="\u52D5\u753B\u3067\u898B\u308B">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
      </button>
      <button class="mv-add-btn" type="button"
        data-playlist-add-mv="${d(t.id)}"
        data-stream-title="${d(t.title||"")}"
        title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
    </div>`}function H(t){return`<div class="mv-grid">${t.map((s,a)=>D(s,a)).join("")}</div>`}function tt(t){return`<div class="mv-list">${t.map((s,a)=>X(s,a)).join("")}</div>`}function st(t){let s=t.map((l,e)=>({v:l,i:e}));return`
    <div class="mv-category">
      ${[{key:"original",label:"\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2\uFF08\u500B\u4EBA\uFF09"},{key:"office",label:"Re:AcT \u30AA\u30EA\u66F2"},{key:"character",label:"\u30AD\u30E3\u30E9\u30BD\u30F3 / \u58F0\u512A\u30AA\u30EA\u66F2"},{key:"cover",label:"\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09"}].map(({key:l,label:e})=>({label:e,items:s.filter(({v:c})=>c.type===l)})).filter(({items:l})=>l.length>0).map(({label:l,items:e})=>`
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">${l} <span class="mv-cat-count">${e.length}</span></h3>
        <div class="mv-grid">${e.map(({v:c,i:m})=>D(c,m)).join("")}</div>
      </div>`).join("")}
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
      </div>`}function lt(t,s){let a=t.streams.map(o=>{let i=o.startsWith("mv:"),r=i?at(o):null;return{skey:o,isMv:i,mv:r,stream:i?null:s.find(n=>k(n)===o)}}),l=a.find(({stream:o,mv:i})=>o?.url||i?.url)?.stream?.url||a.find(({mv:o})=>o?.url)?.mv?.url,e=l?`<img class="pl-card-cover" src="${d(T(l))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",c=a.length,m=a.map(({skey:o,isMv:i,mv:r,stream:n},y)=>{let u=d(t.id+"|:|"+o),p=`
      <div class="pl-sort-btns">
        <button class="pl-sort-btn" data-pl-move="${u}|:|up"
          type="button" title="\u4E0A\u3078" ${y===0?"disabled":""}>\u2191</button>
        <button class="pl-sort-btn" data-pl-move="${u}|:|down"
          type="button" title="\u4E0B\u3078" ${y===c-1?"disabled":""}>\u2193</button>
      </div>`,b=`<button class="pl-rm-btn" data-pl-rm-stream="${u}" type="button" title="\u524A\u9664">\u2715</button>`;if(i){if(!r)return`
        <div class="pl-stream-row pl-stream-missing">${p}
          <span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${b}
        </div>`;let{label:B,sub:F}=C(r),G=r.type||"original",j=(v||[]).indexOf(r);return`
        <div class="pl-stream-row">
          ${p}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${G}">${B}</span></span>
            <span class="pl-stream-title">${d(r.title||"\u2014")}</span>
            <span class="pl-stream-meta">${d(F)}</span>
          </div>
          <div class="pl-stream-actions">
            ${j>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${j}" type="button" title="\u518D\u751F">\u25B6</button>`:""}
            ${b}
          </div>
        </div>`}return n?`
      <div class="pl-stream-row">
        ${p}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${x(n.date)}</span>
          <span class="pl-stream-title">${d(n.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${n.index}\u67A0 \xB7 ${n.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${n.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${d(o)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          ${b}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing">${p}
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${b}
      </div>`}).join(""),g=a.map(({stream:o,mv:i})=>{let r=o?.url||i?.url;return r?L(r):""}).filter(Boolean);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${e?`<div class="pl-card-cover-wrap">${e}</div>`:""}
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
      ${g.length?`
      <div class="pl-card-footer">
        <button class="pl-yt-share-btn" data-pl-yt-share="${d(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${g.length}\u672C)
        </button>
      </div>`:""}
    </div>`}function nt(t,s){if(t.target.closest("#pl-new-btn")){it();return}let a=t.target.closest("[data-pl-del]");if(a){let i=a.dataset.plDel,r=f().find(n=>n.id===i);r&&confirm(`\u300C${r.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(K(i),w());return}let l=t.target.closest("[data-pl-rm-stream]");if(l){let[i,r]=l.dataset.plRmStream.split("|:|");J(i,r),w();return}let e=t.target.closest("[data-pl-play-stream]");if(e){let i=e.dataset.plPlayStream,r=s.find(n=>k(n)===i);r?.url&&window.__openStreamViewer?.(r);return}let c=t.target.closest("[data-play-music-pl]");if(c&&v?.length){let i=Number(c.dataset.playMusicPl);import("./chunk-XVKQTMGG.js").then(r=>r.playMusicQueue(v,i));return}let m=t.target.closest("[data-pl-rename]");if(m){let i=m.dataset.plRename,r=f().find(y=>y.id===i);if(!r)return;let n=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",r.name)?.trim();if(n){let y=f(),u=y.find(p=>p.id===i);u&&(u.name=n,_(y),w())}return}let g=t.target.closest("[data-pl-move]");if(g){let i=g.dataset.plMove.split("|:|"),[r,n,y]=i,u=f(),p=u.find(B=>B.id===r);if(!p)return;let b=p.streams.indexOf(n);if(b<0)return;y==="up"&&b>0?([p.streams[b-1],p.streams[b]]=[p.streams[b],p.streams[b-1]],_(u),w()):y==="down"&&b<p.streams.length-1&&([p.streams[b],p.streams[b+1]]=[p.streams[b+1],p.streams[b]],_(u),w());return}let o=t.target.closest("[data-pl-yt-share]");if(o){let i=o.dataset.plYtShare,r=f().find(u=>u.id===i);if(!r)return;let n=r.streams.map(u=>s.find(p=>k(p)===u)).filter(u=>u?.url).map(u=>L(u.url)).filter(Boolean);if(!n.length){alert("YouTube\u306EURL\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u308B\u914D\u4FE1\u304C\u3042\u308A\u307E\u305B\u3093");return}let y=`https://www.youtube.com/watch_videos?video_ids=${n.join(",")}`;window.open(y,"_blank","noopener noreferrer");return}}function it(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(N(t),w())}function rt(t,s){let a=$("#pl-add-modal");a||(a=document.createElement("div"),a.id="pl-add-modal",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),document.body.appendChild(a));let l=f(),e=()=>{let m=f(),g=m.length?m.map(o=>{let i=o.streams.includes(t);return`
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
            </button>`}).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u5148\u306B\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u3057\u3066\u304F\u3060\u3055\u3044</span></p>';a.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148\u3092\u9078\u629E</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
        </div>
        <div class="pl-modal-sub">${d(s||"\u914D\u4FE1")}</div>
        <div class="pl-modal-list" id="pl-modal-list">${g}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">\uFF0B</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,a.hidden=!1,a.querySelector("#pl-modal-close").addEventListener("click",c),a.querySelector("#pl-modal-backdrop").addEventListener("click",c),a.querySelector("#pl-modal-new").addEventListener("click",()=>{let o=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!o)return;let i=N(o);V(i.id,t),c(),O(`\u300C${o}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)}),a.querySelectorAll("[data-pl-add]:not([disabled])").forEach(o=>{o.addEventListener("click",()=>{let i=o.dataset.plAdd,r=f().find(n=>n.id===i);V(i,t),e(),O(`\u300C${r?.name}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)})})},c=()=>{a.hidden=!0};e(),document.addEventListener("keydown",function m(g){g.key==="Escape"&&(c(),document.removeEventListener("keydown",m))})}function O(t){let s=$("#pl-toast");s||(s=document.createElement("div"),s.id="pl-toast",document.body.appendChild(s)),s.textContent=t,s.classList.add("pl-toast--show"),clearTimeout(s._timer),s._timer=setTimeout(()=>s.classList.remove("pl-toast--show"),2500)}export{V as addStreamToPlaylist,N as createPlaylist,K as deletePlaylist,pt as getMusicVideos,f as getPlaylists,dt as isStreamInAnyPlaylist,J as removeStreamFromPlaylist,w as renderPlaylists,at as resolveMusicVideoId,rt as showAddToPlaylistModal};
