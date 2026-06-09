import{J as g,L as y,e as h,f as v,i as d}from"./chunk-5JCHYUC5.js";var E="kanau-playlists";function o(){try{return JSON.parse(localStorage.getItem(E)||"[]")}catch{return[]}}function m(t){try{localStorage.setItem(E,JSON.stringify(t))}catch{}}function x(t){let s=o(),e={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return s.unshift(e),m(s),e}function P(t){m(o().filter(s=>s.id!==t))}function w(t,s){let e=o(),n=e.find(l=>l.id===t);return!n||n.streams.includes(s)?!1:(n.streams.push(s),m(e),!0)}function _(t,s){let e=o(),n=e.find(l=>l.id===t);n&&(n.streams=n.streams.filter(l=>l!==s),m(e))}function C(t){return o().some(s=>s.streams.includes(t))}function b(){let t=v("#panel-playlists");if(!t)return;let s=h.data?.streams||[],e=o();t.innerHTML=`
    <div class="pl-wrap">
      <div class="section-header">
        <h2>\u{1F4CB} \u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</h2>
        <span class="count-pill">${e.length}\u4EF6</span>
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>

      ${e.length?`
        <div class="pl-grid">
          ${e.map(n=>A(n,s)).join("")}
        </div>
      `:`
        <div class="pl-empty-state">
          <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
          <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
        </div>
      `}
    </div>
  `,t.addEventListener("click",n=>{if(n.target.closest("#pl-new-btn")){T();return}let l=n.target.closest("[data-pl-del]");if(l){let i=l.dataset.plDel,r=o().find(p=>p.id===i);r&&confirm(`\u300C${r.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(P(i),b());return}let a=n.target.closest("[data-pl-rm-stream]");if(a){let[i,r]=a.dataset.plRmStream.split("|:|");_(i,r),b();return}let c=n.target.closest("[data-pl-play-stream]");if(c){let i=c.dataset.plPlayStream,r=s.find(p=>y(p)===i);r?.url&&window.__openStreamViewer?.(r);return}let u=n.target.closest("[data-pl-rename]");if(u){let i=u.dataset.plRename,r=o().find(f=>f.id===i);if(!r)return;let p=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",r.name)?.trim();if(p){let f=o(),$=f.find(L=>L.id===i);$&&($.name=p,m(f),b())}return}},{once:!1})}function A(t,s){let n=t.streams.map(l=>({skey:l,stream:s.find(a=>y(a)===l)})).map(({skey:l,stream:a})=>a?`
      <div class="pl-stream-row">
        <div class="pl-stream-info">
          <span class="pl-stream-date">${g(a.date)}</span>
          <span class="pl-stream-title">${d(a.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${a.index}\u67A0 \xB7 ${a.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${a.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${d(l)}" title="\u518D\u751F">\u25B6</button>`:""}
          <button class="pl-rm-btn" data-pl-rm-stream="${d(t.id+"|:|"+l)}" title="\u524A\u9664">\u2715</button>
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing">
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>
        <button class="pl-rm-btn" data-pl-rm-stream="${d(t.id+"|:|"+l)}" title="\u524A\u9664">\u2715</button>
      </div>`).join("");return`
    <div class="pl-card">
      <div class="pl-card-head">
        <button class="pl-card-name" data-pl-rename="${d(t.id)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${d(t.name)}</button>
        <span class="pl-card-count">${t.streams.length}\u67A0</span>
        <button class="pl-del-btn" data-pl-del="${d(t.id)}" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${n||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
    </div>
  `}function T(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(x(t),b())}function q(t,s){let e=v("#pl-add-modal");e||(e=document.createElement("div"),e.id="pl-add-modal",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),document.body.appendChild(e));let n=o();e.innerHTML=`
    <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
    <div class="pl-modal-box">
      <div class="pl-modal-head">
        <span>\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0</span>
        <button class="pl-modal-close" id="pl-modal-close" type="button">\u2715</button>
      </div>
      <div class="pl-modal-sub">${d(s||"\u914D\u4FE1")}</div>
      <div class="pl-modal-list">
        ${n.length?n.map(a=>`
            <button class="pl-modal-item ${a.streams.includes(t)?"pl-modal-item--added":""}"
              data-pl-add="${d(a.id)}"
              ${a.streams.includes(t)?"disabled":""}>
              <span class="pl-modal-item-name">${d(a.name)}</span>
              <span class="pl-modal-item-count">${a.streams.length}\u67A0</span>
              ${a.streams.includes(t)?'<span class="pl-modal-check">\u2713 \u8FFD\u52A0\u6E08\u307F</span>':"\uFF0B"}
            </button>
          `).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>'}
      </div>
      <button class="pl-modal-new" id="pl-modal-new" type="button">\uFF0B \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u3057\u3066\u8FFD\u52A0</button>
    </div>
  `,e.hidden=!1;let l=()=>{e.hidden=!0};e.querySelector("#pl-modal-close").addEventListener("click",l),e.querySelector("#pl-modal-backdrop").addEventListener("click",l),e.querySelector("#pl-modal-new").addEventListener("click",()=>{let a=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!a)return;let c=x(a);w(c.id,t),l(),S(`\u300C${a}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)}),e.querySelectorAll("[data-pl-add]").forEach(a=>{a.addEventListener("click",()=>{let c=a.dataset.plAdd,u=o().find(i=>i.id===c);w(c,t),l(),S(`\u300C${u?.name}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)})}),document.addEventListener("keydown",function a(c){c.key==="Escape"&&(l(),document.removeEventListener("keydown",a))})}function S(t){let s=v("#pl-toast");s||(s=document.createElement("div"),s.id="pl-toast",document.body.appendChild(s)),s.textContent=t,s.classList.add("pl-toast--show"),clearTimeout(s._timer),s._timer=setTimeout(()=>s.classList.remove("pl-toast--show"),2500)}export{w as addStreamToPlaylist,x as createPlaylist,P as deletePlaylist,o as getPlaylists,C as isStreamInAnyPlaylist,_ as removeStreamFromPlaylist,b as renderPlaylists,q as showAddToPlaylistModal};
