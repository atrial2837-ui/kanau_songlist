import{J as h,L as g,M as w,N as k,e as P,f,i as d}from"./chunk-CUWLARYO.js";var L="kanau-playlists",S=24,m="all-streams",$=1;function p(){try{return JSON.parse(localStorage.getItem(L)||"[]")}catch{return[]}}function y(t){try{localStorage.setItem(L,JSON.stringify(t))}catch{}}function x(t){let a=p(),s={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return a.unshift(s),y(a),s}function I(t){y(p().filter(a=>a.id!==t))}function E(t,a){let s=p(),e=s.find(l=>l.id===t);return!e||e.streams.includes(a)?!1:(e.streams.push(a),y(s),!0)}function C(t,a){let s=p(),e=s.find(l=>l.id===t);e&&(e.streams=e.streams.filter(l=>l!==a),y(s))}function R(t){return p().some(a=>a.streams.includes(t))}function v(){let t=f("#panel-playlists");if(!t)return;let a=P.data?.streams||[];t.innerHTML=`
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u30B5\u30D6\u30BF\u30D6">
        <button class="pl-subtab${m==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${m==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${m==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${m==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${p().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${m==="all-streams"?T(a,$):B(a)}
      </div>
    </div>
  `,t.onclick=s=>{let e=s.target.closest("[data-pl-subtab]");if(e){m=e.dataset.plSubtab,m==="all-streams"&&($=1),v();return}let l=s.target.closest("[data-pl-page]");if(l&&!l.disabled){$=Number(l.dataset.plPage),j(a);return}m==="my-playlists"&&q(s,a)},t.addEventListener("error",s=>{let e=s.target;if(!e.classList.contains("pl-sg-thumb"))return;let l=e.dataset.fallback;l&&e.src!==l&&(e.src=l,delete e.dataset.fallback)},!0)}function T(t,a){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let s=t.length,e=Math.max(1,Math.ceil(s/S)),l=Math.min(Math.max(1,a),e),i=(l-1)*S,c=t.slice(i,i+S).map(r=>{let u=g(r),b=w(r.url),M=k(r.url),A=r.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${d(u)}"
        title="${d(r.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${b?`<img class="pl-sg-thumb" src="${d(b)}"
                data-fallback="${d(M)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${A}<span class="pl-sg-badge-unit">\u66F2</span></span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${d(r.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${d(h(r.date)||"")}</span>
        </div>
      </button>`}).join(""),o=e>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${l-1}"
        ${l<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${l} / ${e}</span>
      <button class="pl-page-btn" data-pl-page="${l+1}"
        ${l>=e?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`<div class="pl-stream-grid" id="pl-stream-grid">${c}</div>${o}`}function j(t){let a=f("#pl-subtab-body");if(!a){v();return}a.innerHTML=T(t,$);let s=f("#panel-playlists");s&&s.addEventListener("error",e=>{let l=e.target;if(!l.classList.contains("pl-sg-thumb"))return;let i=l.dataset.fallback;i&&l.src!==i&&(l.src=i,delete l.dataset.fallback)},{once:!0,capture:!0}),a.scrollIntoView({behavior:"smooth",block:"start"})}function B(t){let a=p();return a.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${a.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${a.map(s=>H(s,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function H(t,a){let s=t.streams.map(i=>({skey:i,stream:a.find(n=>g(n)===i)})),e=s.filter(({stream:i})=>i?.url).slice(0,1).map(({stream:i})=>{let n=w(i.url);return n?`<img class="pl-card-cover" src="${d(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}).join(""),l=s.map(({skey:i,stream:n})=>n?`
      <div class="pl-stream-row">
        <div class="pl-stream-info">
          <span class="pl-stream-date">${h(n.date)}</span>
          <span class="pl-stream-title">${d(n.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${n.index}\u67A0 \xB7 ${n.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${n.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${d(i)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          <button class="pl-rm-btn" data-pl-rm-stream="${d(t.id+"|:|"+i)}"
            type="button" title="\u524A\u9664">\u2715</button>
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing">
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>
        <button class="pl-rm-btn" data-pl-rm-stream="${d(t.id+"|:|"+i)}"
          type="button" title="\u524A\u9664">\u2715</button>
      </div>`).join("");return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${e?`<div class="pl-card-cover-wrap">${e}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${d(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${d(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u67A0</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${d(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${l||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
    </div>`}function q(t,a){if(t.target.closest("#pl-new-btn")){D();return}let s=t.target.closest("[data-pl-del]");if(s){let n=s.dataset.plDel,c=p().find(o=>o.id===n);c&&confirm(`\u300C${c.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(I(n),v());return}let e=t.target.closest("[data-pl-rm-stream]");if(e){let[n,c]=e.dataset.plRmStream.split("|:|");C(n,c),v();return}let l=t.target.closest("[data-pl-play-stream]");if(l){let n=l.dataset.plPlayStream,c=a.find(o=>g(o)===n);c?.url&&window.__openStreamViewer?.(c);return}let i=t.target.closest("[data-pl-rename]");if(i){let n=i.dataset.plRename,c=p().find(r=>r.id===n);if(!c)return;let o=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",c.name)?.trim();if(o){let r=p(),u=r.find(b=>b.id===n);u&&(u.name=o,y(r),v())}return}}function D(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(x(t),v())}function z(t,a){let s=f("#pl-add-modal");s||(s=document.createElement("div"),s.id="pl-add-modal",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),document.body.appendChild(s));let e=p(),l=()=>{let n=p(),c=n.length?n.map(o=>{let r=o.streams.includes(t);return`
            <button class="pl-modal-item${r?" pl-modal-item--added":" pl-modal-item--free"}"
              data-pl-add="${d(o.id)}"
              ${r?'disabled aria-disabled="true"':""} type="button">
              <div class="pl-modal-item-info">
                <span class="pl-modal-item-name">${d(o.name)}</span>
                <span class="pl-modal-item-count">${o.streams.length}\u67A0</span>
              </div>
              <span class="pl-modal-item-status${r?" status--added":" status--free"}">
                ${r?'<span class="pl-modal-status-check">\u2713</span> \u767B\u9332\u6E08\u307F':"\uFF0B \u8FFD\u52A0"}
              </span>
            </button>`}).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u5148\u306B\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u3057\u3066\u304F\u3060\u3055\u3044</span></p>';s.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148\u3092\u9078\u629E</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
        </div>
        <div class="pl-modal-sub">${d(a||"\u914D\u4FE1")}</div>
        <div class="pl-modal-list" id="pl-modal-list">${c}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">\uFF0B</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,s.hidden=!1,s.querySelector("#pl-modal-close").addEventListener("click",i),s.querySelector("#pl-modal-backdrop").addEventListener("click",i),s.querySelector("#pl-modal-new").addEventListener("click",()=>{let o=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!o)return;let r=x(o);E(r.id,t),i(),_(`\u300C${o}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)}),s.querySelectorAll("[data-pl-add]:not([disabled])").forEach(o=>{o.addEventListener("click",()=>{let r=o.dataset.plAdd,u=p().find(b=>b.id===r);E(r,t),l(),_(`\u300C${u?.name}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)})})},i=()=>{s.hidden=!0};l(),document.addEventListener("keydown",function n(c){c.key==="Escape"&&(i(),document.removeEventListener("keydown",n))})}function _(t){let a=f("#pl-toast");a||(a=document.createElement("div"),a.id="pl-toast",document.body.appendChild(a)),a.textContent=t,a.classList.add("pl-toast--show"),clearTimeout(a._timer),a._timer=setTimeout(()=>a.classList.remove("pl-toast--show"),2500)}export{E as addStreamToPlaylist,x as createPlaylist,I as deletePlaylist,p as getPlaylists,R as isStreamInAnyPlaylist,C as removeStreamFromPlaylist,v as renderPlaylists,z as showAddToPlaylistModal};
