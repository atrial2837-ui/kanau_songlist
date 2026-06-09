import{J as k,L as w,M as P,N as _,O as T,e as L,f as $,i as d}from"./chunk-6YA3HG5E.js";var A="kanau-playlists",E=24,y="all-streams",S=1;function m(){try{return JSON.parse(localStorage.getItem(A)||"[]")}catch{return[]}}function h(t){try{localStorage.setItem(A,JSON.stringify(t))}catch{}}function C(t){let s=m(),a={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return s.unshift(a),h(s),a}function j(t){h(m().filter(s=>s.id!==t))}function x(t,s){let a=m(),o=a.find(n=>n.id===t);return!o||o.streams.includes(s)?!1:(o.streams.push(s),h(a),!0)}function H(t,s){let a=m(),o=a.find(n=>n.id===t);o&&(o.streams=o.streams.filter(n=>n!==s),h(a))}function z(t){return m().some(s=>s.streams.includes(t))}function g(){let t=$("#panel-playlists");if(!t)return;let s=L.data?.streams||[];t.innerHTML=`
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u30B5\u30D6\u30BF\u30D6">
        <button class="pl-subtab${y==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${y==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${y==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${y==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${m().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${y==="all-streams"?I(s,S):R(s)}
      </div>
    </div>
  `,t.onclick=a=>{let o=a.target.closest("[data-pl-subtab]");if(o){y=o.dataset.plSubtab,y==="all-streams"&&(S=1),g();return}let n=a.target.closest("[data-pl-page]");if(n&&!n.disabled){S=Number(n.dataset.plPage),O(s);return}y==="my-playlists"&&q(a,s)},t.addEventListener("error",a=>{let o=a.target;if(!o.classList.contains("pl-sg-thumb"))return;let n=o.dataset.fallback;n&&o.src!==n&&(o.src=n,delete o.dataset.fallback)},!0)}function I(t,s){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let a=t.length,o=Math.max(1,Math.ceil(a/E)),n=Math.min(Math.max(1,s),o),c=(n-1)*E,r=t.slice(c,c+E).map(l=>{let i=w(l),b=_(l.url),u=T(l.url),p=l.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${d(i)}"
        title="${d(l.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${b?`<img class="pl-sg-thumb" src="${d(b)}"
                data-fallback="${d(u)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${p}<span class="pl-sg-badge-unit">\u66F2</span></span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${d(l.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${d(k(l.date)||"")}</span>
        </div>
      </button>`}).join(""),e=o>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${n-1}"
        ${n<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${n} / ${o}</span>
      <button class="pl-page-btn" data-pl-page="${n+1}"
        ${n>=o?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`<div class="pl-stream-grid" id="pl-stream-grid">${r}</div>${e}`}function O(t){let s=$("#pl-subtab-body");if(!s){g();return}s.innerHTML=I(t,S);let a=$("#panel-playlists");a&&a.addEventListener("error",o=>{let n=o.target;if(!n.classList.contains("pl-sg-thumb"))return;let c=n.dataset.fallback;c&&n.src!==c&&(n.src=c,delete n.dataset.fallback)},{once:!0,capture:!0}),s.scrollIntoView({behavior:"smooth",block:"start"})}function R(t){let s=m();return s.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${s.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${s.map(a=>Y(a,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function Y(t,s){let a=t.streams.map(r=>({skey:r,stream:s.find(e=>w(e)===r)})),o=a.filter(({stream:r})=>r?.url).slice(0,1).map(({stream:r})=>{let e=_(r.url);return e?`<img class="pl-card-cover" src="${d(e)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}).join(""),n=a.length,c=a.map(({skey:r,stream:e},l)=>{let i=d(t.id+"|:|"+r);return e?`
      <div class="pl-stream-row">
        <div class="pl-sort-btns">
          <button class="pl-sort-btn" data-pl-move="${i}|:|up"
            type="button" title="\u4E0A\u3078" ${l===0?"disabled":""}>\u2191</button>
          <button class="pl-sort-btn" data-pl-move="${i}|:|down"
            type="button" title="\u4E0B\u3078" ${l===n-1?"disabled":""}>\u2193</button>
        </div>
        <div class="pl-stream-info">
          <span class="pl-stream-date">${k(e.date)}</span>
          <span class="pl-stream-title">${d(e.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${e.index}\u67A0 \xB7 ${e.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${e.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${d(r)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          <button class="pl-rm-btn" data-pl-rm-stream="${i}"
            type="button" title="\u524A\u9664">\u2715</button>
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing">
        <div class="pl-sort-btns">
          <button class="pl-sort-btn" data-pl-move="${i}|:|up"
            type="button" title="\u4E0A\u3078" ${l===0?"disabled":""}>\u2191</button>
          <button class="pl-sort-btn" data-pl-move="${i}|:|down"
            type="button" title="\u4E0B\u3078" ${l===n-1?"disabled":""}>\u2193</button>
        </div>
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>
        <button class="pl-rm-btn" data-pl-rm-stream="${i}"
          type="button" title="\u524A\u9664">\u2715</button>
      </div>`}).join(""),f=a.map(({stream:r})=>r?.url?P(r.url):"").filter(Boolean);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${o?`<div class="pl-card-cover-wrap">${o}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${d(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${d(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u67A0</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${d(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${c||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
      ${f.length?`
      <div class="pl-card-footer">
        <button class="pl-yt-share-btn" data-pl-yt-share="${d(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${f.length}\u672C)
        </button>
      </div>`:""}
    </div>`}function q(t,s){if(t.target.closest("#pl-new-btn")){D();return}let a=t.target.closest("[data-pl-del]");if(a){let e=a.dataset.plDel,l=m().find(i=>i.id===e);l&&confirm(`\u300C${l.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(j(e),g());return}let o=t.target.closest("[data-pl-rm-stream]");if(o){let[e,l]=o.dataset.plRmStream.split("|:|");H(e,l),g();return}let n=t.target.closest("[data-pl-play-stream]");if(n){let e=n.dataset.plPlayStream,l=s.find(i=>w(i)===e);l?.url&&window.__openStreamViewer?.(l);return}let c=t.target.closest("[data-pl-rename]");if(c){let e=c.dataset.plRename,l=m().find(b=>b.id===e);if(!l)return;let i=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",l.name)?.trim();if(i){let b=m(),u=b.find(p=>p.id===e);u&&(u.name=i,h(b),g())}return}let f=t.target.closest("[data-pl-move]");if(f){let e=f.dataset.plMove.split("|:|"),[l,i,b]=e,u=m(),p=u.find(B=>B.id===l);if(!p)return;let v=p.streams.indexOf(i);if(v<0)return;b==="up"&&v>0?([p.streams[v-1],p.streams[v]]=[p.streams[v],p.streams[v-1]],h(u),g()):b==="down"&&v<p.streams.length-1&&([p.streams[v],p.streams[v+1]]=[p.streams[v+1],p.streams[v]],h(u),g());return}let r=t.target.closest("[data-pl-yt-share]");if(r){let e=r.dataset.plYtShare,l=m().find(u=>u.id===e);if(!l)return;let i=l.streams.map(u=>s.find(p=>w(p)===u)).filter(u=>u?.url).map(u=>P(u.url)).filter(Boolean);if(!i.length){alert("YouTube\u306EURL\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u308B\u914D\u4FE1\u304C\u3042\u308A\u307E\u305B\u3093");return}let b=`https://www.youtube.com/watch_videos?video_ids=${i.join(",")}`;window.open(b,"_blank","noopener noreferrer");return}}function D(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(C(t),g())}function F(t,s){let a=$("#pl-add-modal");a||(a=document.createElement("div"),a.id="pl-add-modal",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),document.body.appendChild(a));let o=m(),n=()=>{let f=m(),r=f.length?f.map(e=>{let l=e.streams.includes(t);return`
            <button class="pl-modal-item${l?" pl-modal-item--added":" pl-modal-item--free"}"
              data-pl-add="${d(e.id)}"
              ${l?'disabled aria-disabled="true"':""} type="button">
              <div class="pl-modal-item-info">
                <span class="pl-modal-item-name">${d(e.name)}</span>
                <span class="pl-modal-item-count">${e.streams.length}\u67A0</span>
              </div>
              <span class="pl-modal-item-status${l?" status--added":" status--free"}">
                ${l?'<span class="pl-modal-status-check">\u2713</span> \u767B\u9332\u6E08\u307F':"\uFF0B \u8FFD\u52A0"}
              </span>
            </button>`}).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u5148\u306B\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u3057\u3066\u304F\u3060\u3055\u3044</span></p>';a.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148\u3092\u9078\u629E</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
        </div>
        <div class="pl-modal-sub">${d(s||"\u914D\u4FE1")}</div>
        <div class="pl-modal-list" id="pl-modal-list">${r}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">\uFF0B</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,a.hidden=!1,a.querySelector("#pl-modal-close").addEventListener("click",c),a.querySelector("#pl-modal-backdrop").addEventListener("click",c),a.querySelector("#pl-modal-new").addEventListener("click",()=>{let e=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!e)return;let l=C(e);x(l.id,t),c(),M(`\u300C${e}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)}),a.querySelectorAll("[data-pl-add]:not([disabled])").forEach(e=>{e.addEventListener("click",()=>{let l=e.dataset.plAdd,i=m().find(b=>b.id===l);x(l,t),n(),M(`\u300C${i?.name}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)})})},c=()=>{a.hidden=!0};n(),document.addEventListener("keydown",function f(r){r.key==="Escape"&&(c(),document.removeEventListener("keydown",f))})}function M(t){let s=$("#pl-toast");s||(s=document.createElement("div"),s.id="pl-toast",document.body.appendChild(s)),s.textContent=t,s.classList.add("pl-toast--show"),clearTimeout(s._timer),s._timer=setTimeout(()=>s.classList.remove("pl-toast--show"),2500)}export{x as addStreamToPlaylist,C as createPlaylist,j as deletePlaylist,m as getPlaylists,z as isStreamInAnyPlaylist,H as removeStreamFromPlaylist,g as renderPlaylists,F as showAddToPlaylistModal};
