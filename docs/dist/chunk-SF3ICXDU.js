import{J as h,L as g,M as w,N as E,e as P,f as u,i as r}from"./chunk-CUWLARYO.js";var L="kanau-playlists",S=24,m="all-streams",$=1;function c(){try{return JSON.parse(localStorage.getItem(L)||"[]")}catch{return[]}}function f(t){try{localStorage.setItem(L,JSON.stringify(t))}catch{}}function x(t){let a=c(),s={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return a.unshift(s),f(a),s}function I(t){f(c().filter(a=>a.id!==t))}function _(t,a){let s=c(),n=s.find(e=>e.id===t);return!n||n.streams.includes(a)?!1:(n.streams.push(a),f(s),!0)}function C(t,a){let s=c(),n=s.find(e=>e.id===t);n&&(n.streams=n.streams.filter(e=>e!==a),f(s))}function R(t){return c().some(a=>a.streams.includes(t))}function b(){let t=u("#panel-playlists");if(!t)return;let a=P.data?.streams||[];t.innerHTML=`
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u30B5\u30D6\u30BF\u30D6">
        <button class="pl-subtab${m==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${m==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${m==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${m==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${c().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${m==="all-streams"?T(a,$):B(a)}
      </div>
    </div>
  `,t.onclick=s=>{let n=s.target.closest("[data-pl-subtab]");if(n){m=n.dataset.plSubtab,m==="all-streams"&&($=1),b();return}let e=s.target.closest("[data-pl-page]");if(e&&!e.disabled){$=Number(e.dataset.plPage),j(a);return}m==="my-playlists"&&D(s,a)},t.addEventListener("error",s=>{let n=s.target;if(!n.classList.contains("pl-sg-thumb"))return;let e=n.dataset.fallback;e&&n.src!==e&&(n.src=e,delete n.dataset.fallback)},!0)}function T(t,a){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let s=t.length,n=Math.max(1,Math.ceil(s/S)),e=Math.min(Math.max(1,a),n),l=(e-1)*S,o=t.slice(l,l+S).map(d=>{let v=g(d),y=w(d.url),A=E(d.url),M=d.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${r(v)}"
        title="${r(d.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${y?`<img class="pl-sg-thumb" src="${r(y)}"
                data-fallback="${r(A)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${M}<span class="pl-sg-badge-unit">\u66F2</span></span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${r(d.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${r(h(d.date)||"")}</span>
        </div>
      </button>`}).join(""),p=n>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${e-1}"
        ${e<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${e} / ${n}</span>
      <button class="pl-page-btn" data-pl-page="${e+1}"
        ${e>=n?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`<div class="pl-stream-grid" id="pl-stream-grid">${o}</div>${p}`}function j(t){let a=u("#pl-subtab-body");if(!a){b();return}a.innerHTML=T(t,$);let s=u("#panel-playlists");s&&s.addEventListener("error",n=>{let e=n.target;if(!e.classList.contains("pl-sg-thumb"))return;let l=e.dataset.fallback;l&&e.src!==l&&(e.src=l,delete e.dataset.fallback)},{once:!0,capture:!0}),a.scrollIntoView({behavior:"smooth",block:"start"})}function B(t){let a=c();return a.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${a.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${a.map(s=>q(s,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function q(t,a){let s=t.streams.map(l=>({skey:l,stream:a.find(i=>g(i)===l)})),n=s.filter(({stream:l})=>l?.url).slice(0,1).map(({stream:l})=>{let i=w(l.url);return i?`<img class="pl-card-cover" src="${r(i)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}).join(""),e=s.map(({skey:l,stream:i})=>i?`
      <div class="pl-stream-row">
        <div class="pl-stream-info">
          <span class="pl-stream-date">${h(i.date)}</span>
          <span class="pl-stream-title">${r(i.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${i.index}\u67A0 \xB7 ${i.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${i.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${r(l)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          <button class="pl-rm-btn" data-pl-rm-stream="${r(t.id+"|:|"+l)}"
            type="button" title="\u524A\u9664">\u2715</button>
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing">
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>
        <button class="pl-rm-btn" data-pl-rm-stream="${r(t.id+"|:|"+l)}"
          type="button" title="\u524A\u9664">\u2715</button>
      </div>`).join("");return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${n?`<div class="pl-card-cover-wrap">${n}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${r(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${r(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u67A0</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${r(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${e||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
    </div>`}function D(t,a){if(t.target.closest("#pl-new-btn")){H();return}let s=t.target.closest("[data-pl-del]");if(s){let i=s.dataset.plDel,o=c().find(p=>p.id===i);o&&confirm(`\u300C${o.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(I(i),b());return}let n=t.target.closest("[data-pl-rm-stream]");if(n){let[i,o]=n.dataset.plRmStream.split("|:|");C(i,o),b();return}let e=t.target.closest("[data-pl-play-stream]");if(e){let i=e.dataset.plPlayStream,o=a.find(p=>g(p)===i);o?.url&&window.__openStreamViewer?.(o);return}let l=t.target.closest("[data-pl-rename]");if(l){let i=l.dataset.plRename,o=c().find(d=>d.id===i);if(!o)return;let p=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",o.name)?.trim();if(p){let d=c(),v=d.find(y=>y.id===i);v&&(v.name=p,f(d),b())}return}}function H(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(x(t),b())}function F(t,a){let s=u("#pl-add-modal");s||(s=document.createElement("div"),s.id="pl-add-modal",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),document.body.appendChild(s));let n=c();s.innerHTML=`
    <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
    <div class="pl-modal-box">
      <div class="pl-modal-head">
        <span>\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0</span>
        <button class="pl-modal-close" id="pl-modal-close" type="button">\u2715</button>
      </div>
      <div class="pl-modal-sub">${r(a||"\u914D\u4FE1")}</div>
      <div class="pl-modal-list">
        ${n.length?n.map(l=>`
            <button class="pl-modal-item${l.streams.includes(t)?" pl-modal-item--added":""}"
              data-pl-add="${r(l.id)}"
              ${l.streams.includes(t)?"disabled":""} type="button">
              <span class="pl-modal-item-name">${r(l.name)}</span>
              <span class="pl-modal-item-count">${l.streams.length}\u67A0</span>
              ${l.streams.includes(t)?'<span class="pl-modal-check">\u2713 \u8FFD\u52A0\u6E08\u307F</span>':"\uFF0B"}
            </button>`).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>'}
      </div>
      <button class="pl-modal-new" id="pl-modal-new" type="button">\uFF0B \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u3057\u3066\u8FFD\u52A0</button>
    </div>`,s.hidden=!1;let e=()=>{s.hidden=!0};s.querySelector("#pl-modal-close").addEventListener("click",e),s.querySelector("#pl-modal-backdrop").addEventListener("click",e),s.querySelector("#pl-modal-new").addEventListener("click",()=>{let l=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!l)return;let i=x(l);_(i.id,t),e(),k(`\u300C${l}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)}),s.querySelectorAll("[data-pl-add]").forEach(l=>{l.addEventListener("click",()=>{let i=l.dataset.plAdd,o=c().find(p=>p.id===i);_(i,t),e(),k(`\u300C${o?.name}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)})}),document.addEventListener("keydown",function l(i){i.key==="Escape"&&(e(),document.removeEventListener("keydown",l))})}function k(t){let a=u("#pl-toast");a||(a=document.createElement("div"),a.id="pl-toast",document.body.appendChild(a)),a.textContent=t,a.classList.add("pl-toast--show"),clearTimeout(a._timer),a._timer=setTimeout(()=>a.classList.remove("pl-toast--show"),2500)}export{_ as addStreamToPlaylist,x as createPlaylist,I as deletePlaylist,c as getPlaylists,R as isStreamInAnyPlaylist,C as removeStreamFromPlaylist,b as renderPlaylists,F as showAddToPlaylistModal};
