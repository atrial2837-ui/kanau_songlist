import{J as _,L as w,M as P,N as E,O as M,e as x,f as $,i as u}from"./chunk-6YA3HG5E.js";var C="kanau-playlists",T=24,y="all-streams",S=1,L="newest";function b(){try{return JSON.parse(localStorage.getItem(C)||"[]")}catch{return[]}}function h(t){try{localStorage.setItem(C,JSON.stringify(t))}catch{}}function O(t){let a=b(),s={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return a.unshift(s),h(a),s}function R(t){h(b().filter(a=>a.id!==t))}function B(t,a){let s=b(),o=s.find(l=>l.id===t);return!o||o.streams.includes(a)?!1:(o.streams.push(a),h(s),!0)}function H(t,a){let s=b(),o=s.find(l=>l.id===t);o&&(o.streams=o.streams.filter(l=>l!==a),h(s))}function G(t){return b().some(a=>a.streams.includes(t))}function g(){let t=$("#panel-playlists");if(!t)return;let a=x.data?.streams||[];t.innerHTML=`
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u30B5\u30D6\u30BF\u30D6">
        <button class="pl-subtab${y==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${y==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${y==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${y==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${b().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${y==="all-streams"?j(a,S):q(a)}
      </div>
    </div>
  `,t.onclick=s=>{let o=s.target.closest("[data-pl-subtab]");if(o){y=o.dataset.plSubtab,y==="all-streams"&&(S=1),g();return}let l=s.target.closest("[data-pl-sort]");if(l){L=l.dataset.plSort,S=1,I(a);return}let r=s.target.closest("[data-pl-page]");if(r&&!r.disabled){S=Number(r.dataset.plPage),I(a);return}y==="my-playlists"&&V(s,a)},t.addEventListener("error",s=>{let o=s.target;if(!o.classList.contains("pl-sg-thumb"))return;let l=o.dataset.fallback;l&&o.src!==l&&(o.src=l,delete o.dataset.fallback)},!0)}var N=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function Y(t,a){let s=t.slice();return a==="oldest"?s.reverse():a==="most-songs"?s.sort((o,l)=>(l.songs?.length??0)-(o.songs?.length??0)):a==="fewest-songs"?s.sort((o,l)=>(o.songs?.length??0)-(l.songs?.length??0)):s}function j(t,a){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let s=Y(t,L),o=s.length,l=Math.max(1,Math.ceil(o/T)),r=Math.min(Math.max(1,a),l),f=(r-1)*T,e=s.slice(f,f+T).map(i=>{let m=w(i),c=E(i.url),v=M(i.url),k=i.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${u(m)}"
        title="${u(i.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${c?`<img class="pl-sg-thumb" src="${u(c)}"
                data-fallback="${u(v)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${k}<span class="pl-sg-badge-unit">\u66F2</span></span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${u(i.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${u(_(i.date)||"")}</span>
        </div>
      </button>`}).join(""),n=l>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${r-1}"
        ${r<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${r} / ${l}</span>
      <button class="pl-page-btn" data-pl-page="${r+1}"
        ${r>=l?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${N.map(i=>`
        <button class="pl-sort-opt${L===i.key?" active":""}"
          data-pl-sort="${i.key}" type="button">${i.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${e}</div>${n}`}function I(t){let a=$("#pl-subtab-body");if(!a){g();return}a.innerHTML=j(t,S);let s=$("#panel-playlists");s&&s.addEventListener("error",o=>{let l=o.target;if(!l.classList.contains("pl-sg-thumb"))return;let r=l.dataset.fallback;r&&l.src!==r&&(l.src=r,delete l.dataset.fallback)},{once:!0,capture:!0}),a.scrollIntoView({behavior:"smooth",block:"start"})}function q(t){let a=b();return a.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${a.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${a.map(s=>D(s,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function D(t,a){let s=t.streams.map(p=>({skey:p,stream:a.find(e=>w(e)===p)})),o=s.filter(({stream:p})=>p?.url).slice(0,1).map(({stream:p})=>{let e=E(p.url);return e?`<img class="pl-card-cover" src="${u(e)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}).join(""),l=s.length,r=s.map(({skey:p,stream:e},n)=>{let d=u(t.id+"|:|"+p);return e?`
      <div class="pl-stream-row">
        <div class="pl-sort-btns">
          <button class="pl-sort-btn" data-pl-move="${d}|:|up"
            type="button" title="\u4E0A\u3078" ${n===0?"disabled":""}>\u2191</button>
          <button class="pl-sort-btn" data-pl-move="${d}|:|down"
            type="button" title="\u4E0B\u3078" ${n===l-1?"disabled":""}>\u2193</button>
        </div>
        <div class="pl-stream-info">
          <span class="pl-stream-date">${_(e.date)}</span>
          <span class="pl-stream-title">${u(e.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${e.index}\u67A0 \xB7 ${e.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${e.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${u(p)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          <button class="pl-rm-btn" data-pl-rm-stream="${d}"
            type="button" title="\u524A\u9664">\u2715</button>
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing">
        <div class="pl-sort-btns">
          <button class="pl-sort-btn" data-pl-move="${d}|:|up"
            type="button" title="\u4E0A\u3078" ${n===0?"disabled":""}>\u2191</button>
          <button class="pl-sort-btn" data-pl-move="${d}|:|down"
            type="button" title="\u4E0B\u3078" ${n===l-1?"disabled":""}>\u2193</button>
        </div>
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>
        <button class="pl-rm-btn" data-pl-rm-stream="${d}"
          type="button" title="\u524A\u9664">\u2715</button>
      </div>`}).join(""),f=s.map(({stream:p})=>p?.url?P(p.url):"").filter(Boolean);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${o?`<div class="pl-card-cover-wrap">${o}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${u(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${u(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u67A0</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${u(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${r||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
      ${f.length?`
      <div class="pl-card-footer">
        <button class="pl-yt-share-btn" data-pl-yt-share="${u(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${f.length}\u672C)
        </button>
      </div>`:""}
    </div>`}function V(t,a){if(t.target.closest("#pl-new-btn")){z();return}let s=t.target.closest("[data-pl-del]");if(s){let e=s.dataset.plDel,n=b().find(d=>d.id===e);n&&confirm(`\u300C${n.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(R(e),g());return}let o=t.target.closest("[data-pl-rm-stream]");if(o){let[e,n]=o.dataset.plRmStream.split("|:|");H(e,n),g();return}let l=t.target.closest("[data-pl-play-stream]");if(l){let e=l.dataset.plPlayStream,n=a.find(d=>w(d)===e);n?.url&&window.__openStreamViewer?.(n);return}let r=t.target.closest("[data-pl-rename]");if(r){let e=r.dataset.plRename,n=b().find(i=>i.id===e);if(!n)return;let d=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",n.name)?.trim();if(d){let i=b(),m=i.find(c=>c.id===e);m&&(m.name=d,h(i),g())}return}let f=t.target.closest("[data-pl-move]");if(f){let e=f.dataset.plMove.split("|:|"),[n,d,i]=e,m=b(),c=m.find(k=>k.id===n);if(!c)return;let v=c.streams.indexOf(d);if(v<0)return;i==="up"&&v>0?([c.streams[v-1],c.streams[v]]=[c.streams[v],c.streams[v-1]],h(m),g()):i==="down"&&v<c.streams.length-1&&([c.streams[v],c.streams[v+1]]=[c.streams[v+1],c.streams[v]],h(m),g());return}let p=t.target.closest("[data-pl-yt-share]");if(p){let e=p.dataset.plYtShare,n=b().find(m=>m.id===e);if(!n)return;let d=n.streams.map(m=>a.find(c=>w(c)===m)).filter(m=>m?.url).map(m=>P(m.url)).filter(Boolean);if(!d.length){alert("YouTube\u306EURL\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u308B\u914D\u4FE1\u304C\u3042\u308A\u307E\u305B\u3093");return}let i=`https://www.youtube.com/watch_videos?video_ids=${d.join(",")}`;window.open(i,"_blank","noopener noreferrer");return}}function z(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(O(t),g())}function J(t,a){let s=$("#pl-add-modal");s||(s=document.createElement("div"),s.id="pl-add-modal",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),document.body.appendChild(s));let o=b(),l=()=>{let f=b(),p=f.length?f.map(e=>{let n=e.streams.includes(t);return`
            <button class="pl-modal-item${n?" pl-modal-item--added":" pl-modal-item--free"}"
              data-pl-add="${u(e.id)}"
              ${n?'disabled aria-disabled="true"':""} type="button">
              <div class="pl-modal-item-info">
                <span class="pl-modal-item-name">${u(e.name)}</span>
                <span class="pl-modal-item-count">${e.streams.length}\u67A0</span>
              </div>
              <span class="pl-modal-item-status${n?" status--added":" status--free"}">
                ${n?'<span class="pl-modal-status-check">\u2713</span> \u767B\u9332\u6E08\u307F':"\uFF0B \u8FFD\u52A0"}
              </span>
            </button>`}).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u5148\u306B\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u3057\u3066\u304F\u3060\u3055\u3044</span></p>';s.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148\u3092\u9078\u629E</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
        </div>
        <div class="pl-modal-sub">${u(a||"\u914D\u4FE1")}</div>
        <div class="pl-modal-list" id="pl-modal-list">${p}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">\uFF0B</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,s.hidden=!1,s.querySelector("#pl-modal-close").addEventListener("click",r),s.querySelector("#pl-modal-backdrop").addEventListener("click",r),s.querySelector("#pl-modal-new").addEventListener("click",()=>{let e=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!e)return;let n=O(e);B(n.id,t),r(),A(`\u300C${e}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)}),s.querySelectorAll("[data-pl-add]:not([disabled])").forEach(e=>{e.addEventListener("click",()=>{let n=e.dataset.plAdd,d=b().find(i=>i.id===n);B(n,t),l(),A(`\u300C${d?.name}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)})})},r=()=>{s.hidden=!0};l(),document.addEventListener("keydown",function f(p){p.key==="Escape"&&(r(),document.removeEventListener("keydown",f))})}function A(t){let a=$("#pl-toast");a||(a=document.createElement("div"),a.id="pl-toast",document.body.appendChild(a)),a.textContent=t,a.classList.add("pl-toast--show"),clearTimeout(a._timer),a._timer=setTimeout(()=>a.classList.remove("pl-toast--show"),2500)}export{B as addStreamToPlaylist,O as createPlaylist,R as deletePlaylist,b as getPlaylists,G as isStreamInAnyPlaylist,H as removeStreamFromPlaylist,g as renderPlaylists,J as showAddToPlaylistModal};
