import{G as p,R as c,a as s,c as n}from"./chunk-JOP2O3AY.js";var u="/api/song-requests";function $(){let t=s("#panel-requests");t&&(t.innerHTML=`
    <div class="req-layout">
      <div class="card req-form-card">
        <div class="req-form-head">
          <span class="help-kicker">Request</span>
          <h2 class="req-form-title">\u66F2\u30EA\u30AF\u30A8\u30B9\u30C8</h2>
          <p class="req-form-lead">\u6B4C\u3063\u3066\u307B\u3057\u3044\u66F2\u3092\u9001\u308C\u307E\u3059\u3002\u65E2\u306B\u3042\u308B\u66F2\u306F\u4E00\u89A7\u304B\u3089\u300C\u8074\u304D\u305F\u3044\u300D\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>
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
            <span class="req-submit-icon" aria-hidden="true">${c("plus")}</span>
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
  `,f(),v())}function f(){let t=s("#req-form");t&&t.addEventListener("submit",async r=>{r.preventDefault();let e=s("#req-submit"),a=s("#req-form-msg"),o=s("#req-title").value.trim();if(!o){d(a,"\u66F2\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044","error"),s("#req-title").focus();return}e.disabled=!0,e.textContent="\u9001\u4FE1\u4E2D\u2026",b(a);try{let i=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:o,artist:s("#req-artist").value.trim(),url:s("#req-url").value.trim(),requesterName:s("#req-name").value.trim()})}),l=await i.json();if(!i.ok)throw new Error(l.error||"\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F");d(a,"\u2705 \u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059","success"),t.reset(),await v()}catch(i){d(a,`\u26A0\uFE0F ${i.message}`,"error")}finally{e.disabled=!1,e.textContent="\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B"}})}async function v(){let t=s("#req-list");if(t)try{let r=await fetch(`${u}?limit=100`);if(!r.ok)throw new Error("\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F");let{items:e}=await r.json();m(t,e||[])}catch(r){t.innerHTML=`<div class="state-card"><div class="msg">\u26A0\uFE0F ${n(r.message)}</div></div>`}}function m(t,r){if(!r.length){t.innerHTML=`
      <div class="req-empty">
        <strong>\u307E\u3060\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</strong>
        <span>\u6700\u521D\u306E\u66F2\u3092\u9001\u308B\u3068\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002</span>
      </div>`;return}t.innerHTML=r.map((e,a)=>`
    <div class="req-card" data-id="${e.id}">
      <span class="req-rank">${a+1}</span>
      <div class="req-card-body">
        <div class="req-card-main">
          <span class="req-card-title">${n(e.title)}</span>
          ${e.artist?`<span class="req-card-artist">${n(e.artist)}</span>`:""}
        </div>
        <div class="req-card-meta">
          ${e.url?`<a class="req-card-url" href="${n(e.url)}" target="_blank" rel="noopener noreferrer">\u30EA\u30F3\u30AF\u3092\u958B\u304F</a>`:""}
          ${e.requesterName?`<span class="req-card-name">by ${n(e.requesterName)}</span>`:""}
          ${e.createdAt?`<span class="req-card-date">${p(e.createdAt)}</span>`:""}
        </div>
      </div>
      <button class="req-vote-btn" data-id="${e.id}" type="button" aria-label="\u8074\u304D\u305F\u3044">
        <span class="req-vote-icon" aria-hidden="true">${c("heart")}</span>
        <span class="req-vote-count">${e.voteCount??e.vote_count??0}</span>
      </button>
    </div>
  `).join(""),t.querySelectorAll(".req-vote-btn").forEach(e=>{e.addEventListener("click",()=>h(e))})}async function h(t){if(t.disabled)return;let r=t.dataset.id;t.disabled=!0;let e=t.querySelector(".req-vote-icon"),a=t.querySelector(".req-vote-count"),o=e.textContent;e.textContent="\u2665";try{let i=await fetch(`${u}/${r}/vote`,{method:"POST"}),l=await i.json();if(!i.ok)throw new Error(l.error||"\u30A8\u30E9\u30FC");let q=l.item?.voteCount??l.item?.vote_count;q!=null&&(a.textContent=q),t.classList.add("req-voted")}catch{e.textContent=o,t.disabled=!1}}function d(t,r,e){t.textContent=r,t.className=`req-msg req-msg--${e}`,t.hidden=!1}function b(t){t.hidden=!0}export{$ as renderRequests};
