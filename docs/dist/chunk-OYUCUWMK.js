import{D as h,P as d,a as o,c as l}from"./chunk-ZX7BDGHH.js";var w={singable:{label:"\u6B4C\u3048\u308B\u66F2",cls:"req-status--singable",hint:"\u30EC\u30D1\u30FC\u30C8\u30EA\u30FC\u306B\u5165\u3063\u3066\u3044\u307E\u3059"},practicing:{label:"\u7DF4\u7FD2\u4E2D",cls:"req-status--practicing",hint:"\u6B4C\u3048\u308B\u3088\u3046\u306B\u7DF4\u7FD2\u3057\u3066\u3044\u307E\u3059"}};function g(e){let t=w[e];return t?`<span class="req-status ${t.cls}" title="${l(t.hint)}">${l(t.label)}</span>`:""}var u="/api/song-requests",y="songRequestVotes",v="songRequestOwners";function b(){try{return new Set(JSON.parse(localStorage.getItem(y)||"[]").map(String))}catch{return new Set}}function $(e){try{localStorage.setItem(y,JSON.stringify(Array.from(e)))}catch{}}function p(){try{let e=JSON.parse(localStorage.getItem(v)||"{}");return e&&typeof e=="object"?e:{}}catch{return{}}}function S(e,t){if(!e||!t)return;let s=p();s[String(e)]=t;try{localStorage.setItem(v,JSON.stringify(s))}catch{}}function k(e){let t=p();delete t[String(e)];try{localStorage.setItem(v,JSON.stringify(t))}catch{}}async function q(e){let t=await e.text();if(!t){if(!e.ok)throw new Error("\u30EA\u30AF\u30A8\u30B9\u30C8API\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093");return{}}try{return JSON.parse(t)}catch{throw new Error(e.ok?"API\u306E\u5FDC\u7B54\u3092\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3067\u3057\u305F":"\u30EA\u30AF\u30A8\u30B9\u30C8API\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093")}}function P(){let e=o("#panel-requests");e&&(e.innerHTML=`
    <div class="req-layout">
      <div class="card req-form-card">
        <div class="req-form-head">
          <span class="help-kicker">Request</span>
          <h2 class="req-form-title">\u66F2\u30EA\u30AF\u30A8\u30B9\u30C8</h2>
          <p class="req-form-lead">\u6B4C\u3063\u3066\u307B\u3057\u3044\u66F2\u3092\u3053\u306E\u30D5\u30A9\u30FC\u30E0\u304B\u3089\u9001\u308C\u307E\u3059\u3002\u540C\u3058\u66F2\u304C\u300C\u307F\u3093\u306A\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u300D\u306B\u3059\u3067\u306B\u3042\u308B\u5834\u5408\u306F\u3001\u91CD\u306D\u3066\u9001\u3089\u305A\u306B\u305D\u306E\u66F2\u306E\u300C\u8074\u304D\u305F\u3044\u300D\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>
        </div>
        <form id="req-form" class="req-form" novalidate>
          <div class="req-field">
            <label class="req-label" for="req-title">\u66F2\u540D <span class="req-required">*</span></label>
            <input class="text-input req-input" id="req-title" name="title" type="text" placeholder="\u66F2\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044" maxlength="120" autocomplete="off" required>
          </div>
          <div class="req-field">
            <label class="req-label" for="req-artist">\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8</label>
            <input class="text-input req-input" id="req-artist" name="artist" type="text" placeholder="\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u540D\uFF08\u4EFB\u610F\uFF09" maxlength="120" autocomplete="off">
          </div>
          <div class="req-field">
            <label class="req-label" for="req-url">URL</label>
            <input class="text-input req-input" id="req-url" name="url" type="url" placeholder="YouTube \u306A\u3069\u306E URL\uFF08\u4EFB\u610F\uFF09" maxlength="2000" autocomplete="off">
          </div>
          <div class="req-field">
            <label class="req-label" for="req-name">\u304A\u540D\u524D</label>
            <input class="text-input req-input" id="req-name" name="requesterName" type="text" placeholder="\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\uFF08\u4EFB\u610F\uFF09" maxlength="40" autocomplete="off">
          </div>
          <div id="req-form-msg" class="req-msg" hidden></div>
          <button class="btn primary req-submit" id="req-submit" type="submit">
            <span class="req-submit-icon" aria-hidden="true">${d("plus")}</span>
            <span>\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B</span>
          </button>
        </form>
      </div>

      <section class="card req-list-section">
        <div class="req-list-head">
          <div>
            <span class="help-kicker">Queue</span>
            <h3 class="req-list-title">\u307F\u3093\u306A\u306E\u30EA\u30AF\u30A8\u30B9\u30C8</h3>
          </div>
          <span class="req-list-note">\u6295\u7968\u6570\u9806</span>
        </div>
        <div id="req-list" class="req-list">
          <div class="state-card"><div class="spinner"></div><div class="msg">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div></div>
        </div>
      </section>

    </div>
  `,x(),m())}function x(){let e=o("#req-form");e&&e.addEventListener("submit",async t=>{t.preventDefault();let s=o("#req-submit"),a=o("#req-form-msg"),r=o("#req-title").value.trim();if(!r){f(a,"\u66F2\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044","error"),o("#req-title").focus();return}s.disabled=!0,s.textContent="\u9001\u4FE1\u4E2D\u2026",L(a);try{let n=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:r,artist:o("#req-artist").value.trim(),url:o("#req-url").value.trim(),requesterName:o("#req-name").value.trim()})}),i=await q(n);if(!n.ok)throw new Error(i.error||"\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F");S(i.item?.id,i.ownerToken),f(a,"\u2705 \u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059","success"),e.reset(),await m()}catch(n){f(a,`\u26A0\uFE0F ${n.message}`,"error")}finally{s.disabled=!1,s.textContent="\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B"}})}async function m(){let e=o("#req-list");if(e)try{let t=await fetch(`${u}?limit=100`,{cache:"no-store"}),{items:s,error:a}=await q(t);if(!t.ok)throw new Error(a||"\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F");O(e,s||[])}catch(t){e.innerHTML=`<div class="state-card"><div class="msg">\u26A0\uFE0F ${l(t.message)}</div></div>`}}function O(e,t){if(!t.length){e.innerHTML=`
      <div class="req-empty">
        <strong>\u307E\u3060\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</strong>
        <span>\u6700\u521D\u306E\u66F2\u3092\u9001\u308B\u3068\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002</span>
      </div>`;return}let s=b(),a=p();e.innerHTML=t.map((r,n)=>{let i=s.has(String(r.id)),c=!!a[String(r.id)];return`
    <div class="req-card" data-id="${r.id}">
      <span class="req-rank">${n+1}</span>
      <div class="req-card-body">
        <div class="req-card-main">
          <span class="req-card-title">${l(r.title)}</span>
          ${r.artist?`<span class="req-card-artist">${l(r.artist)}</span>`:""}
          ${g(r.status)}
          ${c?'<span class="req-card-own">\u81EA\u5206\u306E\u6295\u7A3F</span>':""}
        </div>
        <div class="req-card-meta">
          ${r.url?`<a class="req-card-url" href="${l(r.url)}" target="_blank" rel="noopener noreferrer">\u30EA\u30F3\u30AF\u3092\u958B\u304F</a>`:""}
          ${r.requesterName?`<span class="req-card-name">by ${l(r.requesterName)}</span>`:""}
          ${r.createdAt?`<span class="req-card-date">${h(r.createdAt)}</span>`:""}
        </div>
      </div>
      <div class="req-card-actions">
        ${c?`<button class="req-delete-btn" data-delete-id="${r.id}" type="button" aria-label="\u81EA\u5206\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D6\u308A\u6D88\u3059" title="\u81EA\u5206\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D6\u308A\u6D88\u3059">${d("close")}</button>`:""}
        <button class="req-vote-btn${i?" req-voted":""}" data-id="${r.id}" type="button"
          aria-label="${i?"\u8074\u304D\u305F\u3044\u3092\u53D6\u308A\u6D88\u3059":"\u8074\u304D\u305F\u3044"}"
          title="${i?"\u3082\u3046\u4E00\u5EA6\u62BC\u3059\u3068\u53D6\u308A\u6D88\u3057\u307E\u3059":"\u8074\u304D\u305F\u3044"}">
          <span class="req-vote-icon" aria-hidden="true">${d("heart")}</span>
          <span class="req-vote-label">\u8074\u304D\u305F\u3044</span>
          <span class="req-vote-count">${r.voteCount??r.vote_count??0}</span>
        </button>
      </div>
    </div>
  `}).join(""),e.querySelectorAll(".req-vote-btn").forEach(r=>{r.addEventListener("click",()=>E(r))}),e.querySelectorAll(".req-delete-btn").forEach(r=>{r.addEventListener("click",()=>T(r))})}async function T(e){if(e.disabled)return;let t=e.dataset.deleteId,s=p()[String(t)];if(!s)return;let r=e.closest(".req-card")?.querySelector(".req-card-title")?.textContent||"\u3053\u306E\u30EA\u30AF\u30A8\u30B9\u30C8";if(window.confirm(`\u300C${r}\u300D\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D6\u308A\u6D88\u3057\u307E\u3059\u304B\uFF1F`)){e.disabled=!0;try{let n=await fetch(`${u}/${t}/delete`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ownerToken:s})}),i=await q(n);if(!n.ok)throw new Error(i.error||"\u53D6\u308A\u6D88\u305B\u307E\u305B\u3093\u3067\u3057\u305F");k(t),await m()}catch(n){e.disabled=!1,window.alert(`\u26A0\uFE0F ${n.message}`)}}}async function E(e){if(e.disabled)return;let t=e.dataset.id;e.disabled=!0;let s=e.querySelector(".req-vote-count"),a=b(),r=a.has(String(t));try{let n=await fetch(`${u}/${t}/${r?"unvote":"vote"}`,{method:"POST"}),i=await q(n);if(!n.ok)throw new Error(i.error||"\u30A8\u30E9\u30FC");let c=i.item?.voteCount??i.item?.vote_count;c!=null&&(s.textContent=c),r?(a.delete(String(t)),e.classList.remove("req-voted"),e.setAttribute("aria-label","\u8074\u304D\u305F\u3044"),e.title="\u8074\u304D\u305F\u3044"):(a.add(String(t)),e.classList.add("req-voted"),e.setAttribute("aria-label","\u8074\u304D\u305F\u3044\u3092\u53D6\u308A\u6D88\u3059"),e.title="\u3082\u3046\u4E00\u5EA6\u62BC\u3059\u3068\u53D6\u308A\u6D88\u3057\u307E\u3059"),$(a)}catch{}finally{e.disabled=!1}}function f(e,t,s){e.textContent=t,e.className=`req-msg req-msg--${s}`,e.hidden=!1}function L(e){e.hidden=!0}export{P as renderRequests};
