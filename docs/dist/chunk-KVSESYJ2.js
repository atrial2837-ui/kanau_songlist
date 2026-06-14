import{a as it,e as at,f as O,g as ot,h as rt,j as lt,l as w}from"./chunk-FIQJD23O.js";import{a as tt,b as q,e}from"./chunk-JT7WCFD3.js";import{B as G,D as et,F as R,L as nt,O as j,a as u,c as l,g as st,k as Q,l as _,m as K}from"./chunk-T4BEBXYH.js";var $,M,k,Y,J,P,gt,C,vt=null,pt="kanau-setlist-v1",x=[],F=null,I=null,E=null;function z(){E&&(E.disconnect(),E=null)}function yt(t){if(z(),e.songsLimit>=t)return;let s=document.getElementById("songs-infinite-sentinel");s&&(E=new IntersectionObserver(n=>{n[0].isIntersecting&&(e.songsLimit+=100,y())},{rootMargin:"200px"}),E.observe(s))}function Jt(){z(),xt(),Tt(),it(e.data?.songs||[]);let t=e.singerMode||e.songsSort!=="count-desc"||e.songsGenre!=="all"||e.songsFilter!=="all"||e.favoritesFilter,s=u("#panel-songs");s.innerHTML=`
    <div class="section-header">
      <h2>${e.singerMode?"\u{1F399} \u9078\u66F2\u30DC\u30FC\u30C9":"\u{1F3B5} \u5168\u66F2\u30EA\u30B9\u30C8"}</h2>
      <span class="count-pill" id="songs-count">\u2014</span>
    </div>
    <div class="mobile-panel-switch">
      <button class="btn ghost active" type="button" data-mobile-panel-toggle="filters">\u7D5E\u308A\u8FBC\u307F</button>
    </div>
    <div id="songs-filter-panel" class="mobile-panel mobile-panel-filters is-open">
      <div class="songs-search-shell">
        <div class="search-input-wrap">
          <span class="songs-search-icon" aria-hidden="true">\u2315</span>
          <input id="songs-search" class="text-input songs-search-input" type="search" placeholder="\u66F2\u540D\u30FB\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u30FB\u96F0\u56F2\u6C17\u3067\u691C\u7D22" value="${l(e.songsQuery)}">
          <div id="search-history-dropdown" class="search-history-dropdown" hidden></div>
        </div>
        <button class="songs-fav-toggle ${e.favoritesFilter?"is-active":""}" type="button" data-filter="favorites" aria-pressed="${e.favoritesFilter?"true":"false"}" title="\u304A\u6C17\u306B\u5165\u308A\u3060\u3051\u8868\u793A">${e.favoritesFilter?"\u2665":"\u2661"}</button>
        ${e.singerMode?'<button class="songs-setlist-mini btn primary" id="setlist-toggle-btn" type="button" aria-controls="setlist-planner" aria-expanded="'+(e.setlistExpanded?"true":"false")+'">'+(e.setlistExpanded?"\u30BB\u30C8\u30EA\u3092\u9589\u3058\u308B":"\u30BB\u30C8\u30EA\u5236\u4F5C")+"</button>":""}
      </div>
      <!-- \u96F0\u56F2\u6C17\u30B5\u30B8\u30A7\u30B9\u30C8\u30C1\u30C3\u30D7\uFF08\u5E38\u6642\u8868\u793A\u30FB8\u7A2E\u306E\u307F\uFF09 -->
      <div id="search-suggest" class="suggest-strip songs-suggest-strip" role="group" aria-label="\u96F0\u56F2\u6C17\u3067\u7D20\u65E9\u304F\u691C\u7D22">
        ${[["chill","\u30C1\u30EB\u306A\u66F2"],["\u3042\u3064\u3044","\u3042\u3064\u3044\u66F2"],["\u3057\u3063\u3068\u308A","\u3057\u3063\u3068\u308A"],["\u30A8\u30E2\u3044","\u30A8\u30E2\u3044"],["\u304B\u308F\u3044\u3044","\u304B\u308F\u3044\u3044"]].map(([i,c])=>`<button type="button" class="suggest-chip" data-suggest="${l(c)}">${i}</button>`).join("")}
      </div>
      <details class="songs-advanced" ${t?"open":""}>
        <summary>
          <span>\u7D5E\u308A\u8FBC\u307F</span>
          <small>\u4E26\u3073\u9806\u30FB\u30B8\u30E3\u30F3\u30EB\u30FB\u72B6\u614B</small>
        </summary>
        <div class="songs-advanced-body">
          <div class="controls songs-control-grid">
        <select id="songs-sort" class="select-input">
          <option value="count-desc">\u56DE\u6570\uFF08\u591A\uFF09</option>
          <option value="count-asc">\u56DE\u6570\uFF08\u5C11\uFF09</option>
          <option value="recent">\u6700\u7D42\u62AB\u9732\uFF08\u65B0\uFF09</option>
          <option value="oldest">\u6700\u7D42\u62AB\u9732\uFF08\u53E4\uFF09</option>
          <option value="title">\u66F2\u540D\uFF08\u3042\u2192\u3093\uFF09</option>
          <option value="artist">\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8</option>
        </select>
        <select id="songs-genre" class="select-input genre-select" title="\u30B8\u30E3\u30F3\u30EB\u3067\u7D5E\u308A\u8FBC\u307F">
          ${Lt()}
        </select>
          </div>
      <!-- \u7D5E\u308A\u8FBC\u307F\u30DC\u30BF\u30F3\u884C -->
      <div class="controls songs-filter-row" id="songs-filters">
        <button class="btn ghost" data-filter="all">\u3059\u3079\u3066</button>
        <button class="btn ghost" data-filter="fresh">\u{1F7E2} \u6700\u8FD1</button>
        <button class="btn ghost" data-filter="stale">\u{1F7E0} \u4E45\u3057\u3076\u308A</button>
        <button class="btn ghost" data-filter="never">\u26AA \u672A\u78BA\u8A8D</button>
        <button class="btn ghost songs-favorites-filter" data-filter="favorites">\u2764\uFE0F \u304A\u6C17\u306B\u5165\u308A</button>
        ${e.singerMode?"":'<button class="btn ghost" id="recommend-btn" type="button">\u{1F4A1} \u304A\u3059\u3059\u3081</button><button class="btn ghost" id="todays-song-btn" type="button">\u{1F3B2} \u4ECA\u65E5\u306E\u4E00\u66F2</button>'}
      </div>
      ${e.singerMode?`
        <div class="songs-tools">
          <button class="btn ghost" data-singer-preset="keyed" type="button">\u30AD\u30FC\u78BA\u8A8D\u6E08\u307F</button>
          <button class="btn ghost" data-singer-preset="classic" type="button">\u5B9A\u756A</button>
          <button class="btn ghost" data-singer-preset="stale" type="button">\u4E45\u3057\u3076\u308A</button>
          <button class="btn ghost" data-singer-preset="rare" type="button">\u30EC\u30A2</button>
          <button class="btn ghost" data-singer-preset="chill" type="button">Chill</button>
          <button class="btn ghost" data-singer-preset="energetic" type="button">\u6FC0\u3057\u3044</button>
          <button class="btn ghost" data-singer-preset="nostalgic" type="button">\u30CE\u30B9\u30BF\u30EB\u30B8\u30C3\u30AF</button>
          <button class="btn ghost" id="compact-btn" type="button">\u8868\u793A: ${e.songsView==="compact"?"\u30B3\u30F3\u30D1\u30AF\u30C8":"\u8A73\u7D30"}</button>
          <button class="btn ghost" id="todays-song-btn" type="button">\u{1F3B2} \u4ECA\u65E5\u306E\u4E00\u66F2</button>
        </div>
      `:""}
          <div class="genre-strip" id="songs-genre-chips">${St()}</div>
        </div>
      </details>
    </div>
    ${e.singerMode?'<div id="setlist-planner" class="setlist-planner mobile-panel mobile-panel-setlist"></div>':""}
    <div id="todays-song-box" class="todays-song-box" hidden></div>
    <div id="songs-list" class="song-list"></div>
    <div class="timeline-controls" id="songs-more-wrap"></div>
  `,$=u("#songs-search"),M=u("#songs-sort"),k=u("#songs-genre"),Y=u("#songs-filters"),J=u("#songs-genre-chips"),P=u("#songs-list"),gt=u("#songs-count"),C=u("#songs-more-wrap"),M.value=e.songsSort,k.value=$t(e.songsGenre)?e.songsGenre:"all",e.songsGenre=k.value,N(),V(),U();let n=document.getElementById("search-suggest"),a=nt(()=>{e.songsQuery=$.value,e.songsLimit=100,O(e.songsQuery),H(),w({tab:"songs",q:e.songsQuery},{replace:!0}),V(),y()},120);$.addEventListener("input",()=>{a()}),$.addEventListener("focus",()=>{dt()}),$.addEventListener("blur",()=>{setTimeout(()=>{H()},200)}),n&&n.addEventListener("click",i=>{let c=i.target.closest("[data-suggest]");if(!c)return;let o=c.dataset.suggest;$.value===o?($.value="",e.songsQuery=""):($.value=o,e.songsQuery=o),e.songsLimit=100,O(e.songsQuery||o),w({tab:"songs",q:e.songsQuery},{replace:!0}),V(),y()}),M.addEventListener("change",()=>{e.songsSort=M.value,y()}),k.addEventListener("change",()=>{e.songsGenre=k.value,e.songsLimit=100,U(),y()}),Y.addEventListener("click",i=>{let c=i.target.closest("[data-filter]");c&&(c.dataset.filter==="favorites"?e.favoritesFilter=!e.favoritesFilter:(e.songsFilter=c.dataset.filter,e.favoritesFilter=!1),e.songsLimit=100,N(),y())}),s.querySelector(".songs-fav-toggle")?.addEventListener("click",()=>{e.favoritesFilter=!e.favoritesFilter,e.favoritesFilter&&(e.songsFilter="all"),e.songsLimit=100,N(),y()}),J.addEventListener("click",i=>{let c=i.target.closest("[data-genre]");c&&(e.songsGenre=c.dataset.genre,k.value=e.songsGenre,e.songsLimit=100,U(),y())});for(let i of s.querySelectorAll("[data-singer-preset]"))i.addEventListener("click",()=>{e.singerMode=!0,e.singerPreset=e.singerPreset===i.dataset.singerPreset?"all":i.dataset.singerPreset,e.songsLimit=100,y()});u("#compact-btn")?.addEventListener("click",()=>{e.songsView=e.songsView==="compact"?"comfortable":"compact",y()}),u("#setlist-toggle-btn")?.addEventListener("click",()=>bt()),u("#recommend-btn")?.addEventListener("click",()=>kt()),u("#todays-song-btn")?.addEventListener("click",()=>ct());for(let i of s.querySelectorAll("[data-mobile-panel-toggle]"))i.addEventListener("click",()=>ht(i.dataset.mobilePanelToggle));s.onclick=i=>{if(i.target.closest("#search-history-clear")){i.preventDefault(),i.stopPropagation(),rt(),H();return}let o=i.target.closest(".search-history-remove");if(o){i.preventDefault(),i.stopPropagation(),ot(o.dataset.remove),dt();return}let d=i.target.closest(".search-history-item");if(d){i.preventDefault(),i.stopPropagation();let v=d.dataset.query;e.songsQuery=v,$.value=v,e.songsLimit=100,H(),w({tab:"songs",q:v}),y();return}if(i.target.closest("[data-recommend-dismiss]")){i.preventDefault(),i.stopPropagation();let v=u("#recommend-box");v&&(v.hidden=!0,v.innerHTML="");return}if(i.target.closest("[data-todays-song-dismiss]")){i.preventDefault(),i.stopPropagation();let v=u("#todays-song-box");v&&(v.hidden=!0,v.innerHTML="");return}if(i.target.closest("[data-todays-song-reroll]")){i.preventDefault(),i.stopPropagation(),ct();return}let b=i.target.closest("[data-setlist-action]");if(b){i.stopPropagation(),It(b);return}let m=i.target.closest("[data-artist-search]");if(m){i.stopPropagation();let v=String(m.dataset.artistSearch||"").replace(/"/g,"");e.songsQuery=`artist:"${v}"`,$.value=e.songsQuery,e.songsLimit=100,w({tab:"songs",q:e.songsQuery}),y();return}let h=i.target.closest("[data-fav-toggle]");if(h){i.preventDefault(),i.stopPropagation();let v=h.dataset.favToggle;tt(v);let D=q(v);h.classList.toggle("is-active",D),h.setAttribute("aria-pressed",String(D)),h.textContent=D?"\u2665":"\u2661";return}let L=i.target.closest("[data-tag-search]");if(!L)return;i.stopPropagation();let T=L.dataset.tagType||"tag";e.songsQuery=`${T}:${L.dataset.tagSearch}`,$.value=e.songsQuery,e.songsLimit=100,w({tab:"songs",q:e.songsQuery}),y()},s.oninput=i=>{i.target.id==="setlist-theme"&&(e.setlist.theme=i.target.value,S())},s.onchange=i=>{i.target.id==="setlist-copy-format"&&(e.setlist.copyFormat=i.target.value,S())},s.onkeydown=i=>{i.key==="Enter"&&(!i.target.closest(".setlist-custom-add")&&!i.target.closest(".setlist-custom-details")||i.target.tagName!=="BUTTON"&&(i.preventDefault(),mt()))},y()}function dt(){let t=at(),s=u("#search-history-dropdown");s&&(vt=s,t.length?s.innerHTML=`
      <div class="search-history-header">
        <span>\u691C\u7D22\u5C65\u6B74</span>
        <button class="search-history-clear-btn" type="button" id="search-history-clear">\u3059\u3079\u3066\u524A\u9664</button>
      </div>
      ${t.map(n=>`
        <div class="search-history-item" data-query="${l(n)}">
          <span class="search-history-query">${l(n)}</span>
          <button class="search-history-remove" type="button" data-remove="${l(n)}" aria-label="\u524A\u9664">\xD7</button>
        </div>
      `).join("")}
    `:s.innerHTML='<div class="search-history-empty">\u691C\u7D22\u5C65\u6B74\u304C\u3042\u308A\u307E\u305B\u3093</div>',s.hidden=!1)}function H(){let t=u("#search-history-dropdown");t&&(t.hidden=!0)}function ht(t){let s=u("#songs-filter-panel"),n=u("#setlist-planner");if(t==="setlist"&&!e.singerMode){s?.classList.add("is-open"),n?.classList.remove("is-open");for(let i of document.querySelectorAll("[data-mobile-panel-toggle]"))i.classList.toggle("active",i.dataset.mobilePanelToggle==="filters");return}if(e.singerMode){s?.classList.add("is-open"),s?.scrollIntoView({behavior:"smooth",block:"start"});for(let c of document.querySelectorAll("[data-mobile-panel-toggle]"))c.classList.toggle("active",c.dataset.mobilePanelToggle==="filters");return}let a=t==="setlist";s?.classList.toggle("is-open",!a),n?.classList.toggle("is-open",a);for(let i of document.querySelectorAll("[data-mobile-panel-toggle]"))i.classList.toggle("active",i.dataset.mobilePanelToggle===t)}function bt(){if(!e.singerMode)return;e.setlistExpanded=!e.setlistExpanded,f();let t=u("#setlist-planner");e.setlistExpanded&&t?.scrollIntoView({behavior:"smooth",block:"start"})}function B(t){return String(t.genre||"\u672A\u5206\u985E").trim()||"\u672A\u5206\u985E"}function X(){let t=new Map;for(let s of e.data.songs||[]){let n=B(s);t.set(n,(t.get(n)||0)+1)}return[...t.entries()].sort((s,n)=>n[1]-s[1]||s[0].localeCompare(n[0],"ja"))}function $t(t){return t==="all"||X().some(([s])=>s===t)}function Lt(){let t=['<option value="all">\u5168\u30B8\u30E3\u30F3\u30EB</option>'];for(let[s,n]of X())t.push(`<option value="${l(s)}">${l(s)} (${n})</option>`);return t.join("")}function St(){let t=['<button class="genre-chip" type="button" data-genre="all">\u5168\u30B8\u30E3\u30F3\u30EB</button>'];for(let[s,n]of X())t.push(`
      <button class="genre-chip" type="button" data-genre="${l(s)}">
        <span>${l(s)}</span><small>${n}</small>
      </button>
    `);return t.join("")}function U(){for(let t of J.querySelectorAll("[data-genre]"))t.classList.toggle("active",t.dataset.genre===e.songsGenre)}function N(){for(let s of Y.querySelectorAll("[data-filter]"))s.dataset.filter==="favorites"?(s.classList.toggle("primary",e.favoritesFilter),s.classList.toggle("ghost",!e.favoritesFilter)):(s.classList.toggle("primary",s.dataset.filter===e.songsFilter&&!e.favoritesFilter),s.classList.toggle("ghost",s.dataset.filter!==e.songsFilter||e.favoritesFilter));let t=document.querySelector(".songs-fav-toggle");t&&(t.classList.toggle("is-active",e.favoritesFilter),t.setAttribute("aria-pressed",String(e.favoritesFilter)),t.textContent=e.favoritesFilter?"\u2665":"\u2661")}function V(){let t=document.getElementById("search-suggest");if(!t)return;let s=(e.songsQuery||"").trim();for(let n of t.querySelectorAll("[data-suggest]"))n.classList.toggle("is-active",n.dataset.suggest===s)}function y(){let{songs:t}=e.data,s=Q(t,e.songsGenre,B),n=K(s,{singerMode:e.singerMode,preset:e.singerPreset,keyPublished:e.data?.stats?.keyPublished}),a=_(n,e.songsFilter),{results:i,tokens:c}=lt(e.songsQuery,a),o=e.songsQuery.trim()?i.filter(r=>a.includes(r)):a;if(e.favoritesFilter&&(o=o.filter(r=>e.favorites.has(r.key))),o=G(o,e.songsSort,!!e.songsQuery.trim()),x=o,gt.textContent=`${o.length} / ${t.length}\u66F2`,!o.length){P.innerHTML='<div class="empty-state">\u8A72\u5F53\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>',C.innerHTML="";return}let d=o.slice(0,e.songsLimit);P.classList.toggle("compact",e.songsView==="compact");for(let r of document.querySelectorAll("[data-singer-preset]")){let g=e.singerMode&&e.singerPreset===r.dataset.singerPreset;r.classList.toggle("primary",g),r.classList.toggle("ghost",!g)}u("#compact-btn")&&(u("#compact-btn").textContent=`\u8868\u793A: ${e.songsView==="compact"?"\u30B3\u30F3\u30D1\u30AF\u30C8":"\u8A73\u7D30"}`),P.innerHTML=d.map(r=>_t(r,c)).join(""),f(),e.songsLimit<o.length?(C.innerHTML=`
      <div id="songs-infinite-sentinel" style="height:1px;width:100%;"></div>
      <button class="load-more-btn" id="songs-more">\u25BC \u3082\u3063\u3068\u8868\u793A (\u6B8B\u308A${o.length-e.songsLimit}\u66F2)</button>
    `,u("#songs-more").addEventListener("click",()=>{e.songsLimit+=200,y()}),yt(o.length)):(z(),C.innerHTML="")}function ct(){let t=u("#todays-song-box");if(!t)return;if(!x.length){t.hidden=!1,t.innerHTML='<div class="empty-state">\u6761\u4EF6\u306B\u5408\u3046\u66F2\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F3B2}</div>';return}let s=x[Math.floor(Math.random()*x.length)];t.hidden=!1,t.innerHTML=wt(s)}function wt(t){let s=t.lastSung?`${R(t.lastSung)} \xB7 ${t.daysSinceLast}\u65E5\u524D`:"\u5C65\u6B74\u672A\u78BA\u8A8D",n=t.displayKey?`<span class="todays-song-key">\u30AD\u30FC ${l(t.displayKey)}</span>`:"",a=e.singerMode?`<button class="btn primary" type="button" data-setlist-action="todays-song-add" data-songkey="${l(t.key)}">\uFF0B\u30BB\u30C8\u30EA\u306B\u8FFD\u52A0</button>`:"";return`
    <div class="todays-song-card">
      <div class="todays-song-header">
        <span class="todays-song-label">\u{1F3B2} \u4ECA\u65E5\u306E\u4E00\u66F2</span>
        <button class="todays-song-dismiss" type="button" data-todays-song-dismiss aria-label="\u9589\u3058\u308B">\xD7</button>
      </div>
      <div class="todays-song-info">
        <div class="todays-song-title">${l(t.title)}</div>
        <div class="todays-song-artist">${l(t.artist)}</div>
        <div class="todays-song-meta">
          <span class="todays-song-count">${t.count}\u56DE</span>
          <span class="todays-song-last">${s}</span>
          ${n}
        </div>
      </div>
      <div class="todays-song-actions">
        ${a}
        <button class="btn ghost" type="button" data-todays-song-reroll>\u5225\u306E\u3082\u3046\u4E00\u56DE</button>
      </div>
    </div>
  `}function kt(){let t=u("#recommend-box"),s=G(K(_(Q(e.data.songs,"all",B),e.songsFilter),{singerMode:e.singerMode,preset:e.singerPreset,keyPublished:e.data?.stats?.keyPublished}).filter(i=>i.lastSung&&(i.displayKey||!e.data.stats.keyPublished)),"oldest",!1);if(!s.length){t.hidden=!1,t.innerHTML='<div class="empty-state">\u6761\u4EF6\u306B\u5408\u3046\u304A\u3059\u3059\u3081\u5019\u88DC\u304C\u3042\u308A\u307E\u305B\u3093</div>';return}let n=s.slice(0,Math.min(80,s.length)),a=n[Math.floor(Math.random()*n.length)];t.hidden=!1,t.innerHTML=`
    <div class="recommend-card" data-songkey="${l(a.key)}" data-songtitle="${l(a.title)}" data-songartist="${l(a.artist)}">
      <div>
        <div class="recommend-label">\u4ECA\u65E5\u306E\u5019\u88DC</div>
        <strong>${l(a.title)}</strong>
        <span>/ ${l(a.artist)}</span>
      </div>
      <div class="recommend-meta">
        <span>${a.count}\u56DE</span>
        <span>${a.daysSinceLast??"\u2014"}\u65E5\u524D</span>
        ${a.displayKey?`<span>\u30AD\u30FC ${l(a.displayKey)}</span>`:""}
      </div>
      <button class="recommend-dismiss" type="button" data-recommend-dismiss aria-label="\u304A\u3059\u3059\u3081\u9078\u66F2\u3092\u9589\u3058\u308B">\xD7</button>
    </div>
  `}function xt(){try{let t=localStorage.getItem(pt);if(!t)return;let s=JSON.parse(t);e.setlist.theme=String(s.theme||""),e.setlist.copyFormat=s.copyFormat==="timestamp"?"timestamp":"simple",e.setlist.items=Array.isArray(s.items)?s.items:[]}catch{e.setlist.items=[]}}function Et(){let t=e.setlist.items;if(!t.length)return window.location.href.split("?")[0];let s=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n=new URL(window.location.href.split("?")[0]);return n.searchParams.set("setlist",s),n.toString()}function Tt(){try{let s=new URLSearchParams(window.location.search).get("setlist");if(!s)return;let n=decodeURIComponent(escape(atob(s))),a=JSON.parse(n);if(!Array.isArray(a)||!a.length)return;let i=new Set(e.setlist.items.map(o=>o.key)),c=a.filter(o=>!i.has(o.key));c.length&&(e.setlist.items=[...e.setlist.items,...c],S())}catch{}}async function Mt(){let t=Et();if(!e.setlist.items.length){f("\u5171\u6709\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093");return}try{await navigator.clipboard.writeText(t),f("\u5171\u6709URL\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F")}catch{f("\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F")}}function S(){localStorage.setItem(pt,JSON.stringify(e.setlist))}function W(t){return(e.data.songs||[]).find(s=>s.key===t)||null}function A(t){t&&(e.setlist.items.push({key:t.key,title:t.title,artist:t.artist,displayKey:t.displayKey||"",genre:t.genre||"",moodTags:t.moodTags||[],seasonTags:t.seasonTags||[],daysSinceLast:t.daysSinceLast}),S(),f("\u8FFD\u52A0\u3057\u307E\u3057\u305F"))}function mt(){let t=u("#setlist-custom-title"),s=u("#setlist-custom-artist"),n=u("#setlist-custom-key"),a=String(t?.value||"").trim(),i=String(s?.value||"").trim(),c=String(n?.value||"").trim();if(!a){f("\u66F2\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");return}e.setlist.items.push({key:`custom:${Date.now()}:${Math.random().toString(36).slice(2,8)}`,custom:!0,title:a,artist:i,displayKey:c,genre:"\u65B0\u898F",moodTags:[],seasonTags:[],daysSinceLast:null}),S(),f("\u65B0\u3057\u3044\u66F2\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F")}function Ft(t){if(t.custom)return t;let s=W(t.key);return s?{...t,...s}:t}function It(t){let s=t.dataset.setlistAction,n=Number(t.dataset.index);if(s==="add"&&A(W(t.dataset.songkey)),s==="todays-song-add"&&A(W(t.dataset.songkey)),s==="remove"&&e.setlist.items.splice(n,1),s==="up"&&n>0&&([e.setlist.items[n-1],e.setlist.items[n]]=[e.setlist.items[n],e.setlist.items[n-1]]),s==="down"&&n<e.setlist.items.length-1&&([e.setlist.items[n+1],e.setlist.items[n]]=[e.setlist.items[n],e.setlist.items[n+1]]),s==="copy-item"){Qt(n);return}if(s==="add-custom"){mt();return}if(s==="random"&&Ht(),s==="copy"&&qt(),s==="share"){Mt();return}s==="clear"&&confirm("\u30BB\u30C8\u30EA\u3092\u7A7A\u306B\u3057\u307E\u3059\u304B\uFF1F")&&(e.setlist.items=[]),S(),["add","random","copy"].includes(s)||f()}function Ht(){let t=new Set(e.setlist.items.map(a=>a.key)),s=(x.length?x:e.data.songs).filter(a=>a.key&&!t.has(a.key));if(!s.length){f("\u8FFD\u52A0\u3067\u304D\u308B\u5019\u88DC\u304C\u3042\u308A\u307E\u305B\u3093");return}let n=s[Math.floor(Math.random()*s.length)];A(n)}function Z(){return e.setlist.items.map(Ft)}function Pt(t){let s=n=>{let a=new Map;for(let i of t)for(let c of n(i))c&&a.set(c,(a.get(c)||0)+1);return[...a.entries()].sort((i,c)=>c[1]-i[1]).slice(0,3)};return{genres:s(n=>[n.genre||"\u672A\u5206\u985E"]),moods:s(n=>n.moodTags||[]),keys:t.filter(n=>n.displayKey).length,stale:t.filter(n=>n.daysSinceLast>=180).length}}function f(t=""){let s=u("#setlist-planner");if(!s)return;if(Kt(),s.hidden=!e.singerMode||!e.setlistExpanded,s.classList.toggle("is-open",e.singerMode&&e.setlistExpanded),!e.singerMode){s.innerHTML="";return}let n=Z(),a=Pt(n),i=n.length*5;s.innerHTML=`
    <div class="setlist-head">
      <div>
        <div class="recommend-label">Setlist Builder</div>
        <h3>\u4ECA\u65E5\u306E\u30BB\u30C8\u30EA</h3>
      </div>
      <div class="setlist-total">${n.length}\u66F2 / \u7D04${i}\u5206</div>
    </div>
    <input id="setlist-theme" class="text-input setlist-theme" type="text" placeholder="\u6B4C\u67A0\u30C6\u30FC\u30DE\u30E1\u30E2" value="${l(e.setlist.theme)}">
    <div class="setlist-search-add">
      <div class="setlist-search-wrap">
        <input id="setlist-search-input" class="text-input setlist-search-input"
               type="text" placeholder="\u{1F50D} \u66F2\u540D\u3092\u5165\u529B\u3057\u3066\u8FFD\u52A0\u2026" autocomplete="off" spellcheck="false">
        <div id="setlist-search-dropdown" class="setlist-search-dropdown" hidden></div>
      </div>
      <details class="setlist-custom-details">
        <summary>\u691C\u7D22\u3067\u898B\u3064\u304B\u3089\u306A\u3044\u66F2\u3092\u8FFD\u52A0\u3059\u308B</summary>
        <div class="setlist-custom-add">
          <input id="setlist-custom-title" class="text-input" type="text"
                 placeholder="\u66F2\u540D\uFF08\u4F8B\uFF1A\u30B7\u30E3\u30EB\u30EB\uFF09" autocomplete="off">
          <div class="setlist-custom-row2">
            <input id="setlist-custom-artist" class="text-input" type="text"
                   placeholder="\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u540D\uFF08\u4EFB\u610F\uFF09" autocomplete="off">
            <input id="setlist-custom-key" class="text-input setlist-custom-key-inp" type="text"
                   placeholder="\u30AD\u30FC" maxlength="5" autocomplete="off">
            <button class="btn primary" type="button" data-setlist-action="add-custom">\u8FFD\u52A0</button>
          </div>
        </div>
      </details>
    </div>
    <div class="setlist-balance">
      ${ut("\u30B8\u30E3\u30F3\u30EB",a.genres)}
      ${ut("\u96F0\u56F2\u6C17",a.moods)}
      <span>\u30AD\u30FC ${a.keys}/${n.length}</span>
      <span>\u4E45\u3057\u3076\u308A ${a.stale}</span>
    </div>
    <div class="setlist-items">
      ${n.length?n.map((c,o)=>Ct(c,o)).join(""):'<div class="setlist-empty">\u66F2\u306E\u300C\uFF0B\u30BB\u30C8\u30EA\u300D\u304B\u30E9\u30F3\u30C0\u30E0\u8FFD\u52A0\u304B\u3089\u4F5C\u308C\u307E\u3059</div>'}
    </div>
    <div class="setlist-actions">
      <select id="setlist-copy-format" class="select-input">
        <option value="simple"${e.setlist.copyFormat==="simple"?" selected":""}>\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8</option>
        <option value="timestamp"${e.setlist.copyFormat==="timestamp"?" selected":""}>\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u5165\u529B\u7528</option>
      </select>
      <button class="btn ghost" type="button" data-setlist-action="random">\u30E9\u30F3\u30C0\u30E0\u8FFD\u52A0</button>
      <button class="btn primary" type="button" data-setlist-action="copy">\u30B3\u30D4\u30FC</button>
      <button class="btn ghost" type="button" data-setlist-action="share">\u{1F517} \u5171\u6709</button>
      <button class="btn ghost" type="button" data-setlist-action="clear">\u30AF\u30EA\u30A2</button>
      ${t?`<span class="setlist-message">${l(t)}</span>`:""}
    </div>
  `,At(),Bt()}function ut(t,s){return s.length?`<span>${t} ${s.map(([n,a])=>`${l(n)} ${a}`).join(" / ")}</span>`:`<span>${t} \u2014</span>`}function Ct(t,s){return`
    <div class="setlist-item" data-index="${s}">
      <div class="setlist-drag-handle" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048" aria-label="\u30C9\u30E9\u30C3\u30B0\u30CF\u30F3\u30C9\u30EB">\u283F</div>
      <div class="setlist-no">${s+1}</div>
      <div class="setlist-info">
        <strong>${l(t.title)}</strong>
        <span>${t.artist?l(t.artist):"\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u672A\u5165\u529B"}${t.displayKey?` \xB7 key ${l(t.displayKey)}`:""}${t.custom?" \xB7 \u65B0\u898F":""}</span>
      </div>
      <div class="setlist-move">
        <button class="setlist-copy-one" type="button" data-setlist-action="copy-item" data-index="${s}" aria-label="${l(t.title)}\u3092\u30B3\u30D4\u30FC">\u29C9</button>
        <button type="button" data-setlist-action="up" data-index="${s}" aria-label="\u4E0A\u3078">\u2191</button>
        <button type="button" data-setlist-action="down" data-index="${s}" aria-label="\u4E0B\u3078">\u2193</button>
        <button type="button" data-setlist-action="remove" data-index="${s}" aria-label="\u524A\u9664">\xD7</button>
      </div>
    </div>
  `}function At(){let t=document.getElementById("setlist-search-input"),s=document.getElementById("setlist-search-dropdown");if(!t||!s)return;let n=[],a=-1;function i(d){let r=d.trim().toLowerCase();if(!r){s.hidden=!0,n=[],a=-1;return}let p=(e.data?.songs||[]).filter(m=>m.title.toLowerCase().includes(r)||(m.artist||"").toLowerCase().includes(r)).sort((m,h)=>{let L=m.title.toLowerCase().startsWith(r)?2:m.title.toLowerCase().includes(r)?1:0,T=h.title.toLowerCase().startsWith(r)?2:h.title.toLowerCase().includes(r)?1:0;return L!==T?T-L:h.count-m.count}).slice(0,8),b={_isNew:!0,title:d.trim()};p.length?(s.innerHTML=p.map((m,h)=>`
          <div class="setlist-dd-item" data-dd-idx="${h}">
            <span class="setlist-dd-icon">\u{1F3B5}</span>
            <div class="setlist-dd-body">
              <div class="setlist-dd-title">${l(m.title)}</div>
              <div class="setlist-dd-meta">${l(m.artist||"\u2014")} \xB7 ${m.count}\u56DE</div>
            </div>
          </div>`).join("")+`<div class="setlist-dd-item setlist-dd-new" data-dd-idx="${p.length}">
          <span class="setlist-dd-plus">\uFF0B</span>
          <div class="setlist-dd-body">
            <div class="setlist-dd-title">\u300C${l(d.trim())}\u300D\u3092\u65B0\u898F\u8FFD\u52A0</div>
            <div class="setlist-dd-meta">\u66F2\u30EA\u30B9\u30C8\u306B\u306A\u3044\u66F2\u3068\u3057\u3066\u8FFD\u52A0</div>
          </div>
        </div>`,n=[...p,b]):(s.innerHTML=`
        <div class="setlist-dd-item setlist-dd-new" data-dd-idx="0">
          <span class="setlist-dd-plus">\uFF0B</span>
          <div class="setlist-dd-body">
            <div class="setlist-dd-title">\u300C${l(d.trim())}\u300D\u3092\u65B0\u898F\u8FFD\u52A0</div>
            <div class="setlist-dd-meta">\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</div>
          </div>
        </div>`,n=[b]),a=-1,s.hidden=!1,c()}function c(){s.querySelectorAll("[data-dd-idx]").forEach((d,r)=>d.classList.toggle("is-selected",r===a))}function o(d){let r=n[d];if(r)if(s.hidden=!0,n=[],a=-1,r._isNew){let g=document.querySelector(".setlist-custom-details"),p=document.getElementById("setlist-custom-title");g&&p?(g.open=!0,p.value=r.title,t.value="",document.getElementById("setlist-custom-artist")?.focus()):t.value=""}else t.value="",A(r)}t.addEventListener("input",()=>i(t.value)),t.addEventListener("keydown",d=>{if(s.hidden)return;let r=n.length;d.key==="ArrowDown"?(d.preventDefault(),a=(a+1)%r,c()):d.key==="ArrowUp"?(d.preventDefault(),a=(a-1+r)%r,c()):d.key==="Enter"?(d.preventDefault(),d.stopPropagation(),o(a>=0?a:0)):d.key==="Escape"&&(s.hidden=!0,a=-1)}),s.addEventListener("mousedown",d=>{let r=d.target.closest("[data-dd-idx]");r&&(d.preventDefault(),o(Number(r.dataset.ddIdx)))}),F&&document.removeEventListener("click",F),F=d=>{!t.contains(d.target)&&!s.contains(d.target)&&(s.hidden=!0,a=-1)},document.addEventListener("click",F)}function Bt(){I&&(I(),I=null);let t=document.querySelector(".setlist-items");if(!t)return;let s=null,n=()=>{s&&(s.rows.forEach(o=>{o.style.transform=""}),s.row.classList.remove("is-dragging"),t.classList.remove("is-drag-active"),s.row.removeEventListener("pointermove",a),s.row.removeEventListener("pointerup",i),s.row.removeEventListener("pointercancel",c),s=null)};function a(o){if(!s)return;o.preventDefault();let d=o.clientY-s.startY;if(!s.moved&&Math.abs(d)<3)return;s.moved=!0,s.row.style.transform=`translateY(${d}px)`;let r=s.mids[s.startIdx]+d,g=0;for(let p=0;p<s.mids.length;p++)p!==s.startIdx&&r>s.mids[p]&&g++;g!==s.targetIdx&&(s.targetIdx=g,s.rows.forEach((p,b)=>{if(b===s.startIdx)return;let m=0;s.startIdx<g&&b>s.startIdx&&b<=g?m=-s.rowH:s.startIdx>g&&b>=g&&b<s.startIdx&&(m=s.rowH),p.style.transform=m?`translateY(${m}px)`:""}))}function i(){if(!s)return;let{startIdx:o,targetIdx:d,moved:r}=s;if(n(),!r||d===o)return;let g=e.setlist.items;if(o<g.length){let[p]=g.splice(o,1);g.splice(d,0,p),S(),f()}}function c(){n()}t.addEventListener("pointerdown",o=>{if(s||o.button!=null&&o.button!==0)return;let d=!!o.target.closest(".setlist-drag-handle");if(o.pointerType==="touch"&&!d||o.target.closest("button, a, input, select, textarea"))return;let r=o.target.closest(".setlist-item");if(!r)return;o.preventDefault();let g=Array.from(t.querySelectorAll(".setlist-item")),p=g.indexOf(r);if(p<0)return;let b=g.map(h=>{let L=h.getBoundingClientRect();return L.top+L.height/2}),m=r.getBoundingClientRect();s={rows:g,mids:b,startIdx:p,targetIdx:p,startY:o.clientY,rowH:m.height+(parseFloat(getComputedStyle(t).rowGap||getComputedStyle(t).gap)||0),row:r,moved:!1},r.classList.add("is-dragging"),t.classList.add("is-drag-active");try{r.setPointerCapture(o.pointerId)}catch{}r.addEventListener("pointermove",a,{passive:!1}),r.addEventListener("pointerup",i),r.addEventListener("pointercancel",c)}),I=n}function Dt(){let t=Z(),s=[];return e.setlist.theme&&s.push(`# ${e.setlist.theme}`,""),t.forEach(n=>{s.push(ft(n))}),s.join(`
`)}function ft(t){let s=String(t?.title||"").trim(),n=String(t?.artist||"").trim(),a=n?`${s} / ${n}`:s;return e.setlist.copyFormat==="timestamp"?`00:00\u3000${a}\u300000:00`:a}async function qt(){let t=Dt();if(!t.trim()){f("\u30B3\u30D4\u30FC\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093");return}try{await navigator.clipboard.writeText(t),f("\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F")}catch{f("\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F")}}async function Qt(t){let s=Z()[t];if(!s){f("\u30B3\u30D4\u30FC\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093");return}try{await navigator.clipboard.writeText(ft(s)),f("1\u66F2\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F")}catch{f("\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F")}}function _t(t,s){let n=t.rank===1?"r1":t.rank===2?"r2":t.rank===3?"r3":"",a=t.lastSung?`<span class="last-date">${R(t.lastSung)}</span><span class="badge ${st(t.daysSinceLast)}">${t.daysSinceLast}\u65E5\u524D</span>`:'<span class="last-date">\u5C65\u6B74\u672A\u78BA\u8A8D</span><span class="badge never">\u8981\u78BA\u8A8D</span>',i=j(t.title,s),c=j(t.artist,s),o=et(t,e.songsQuery),d=q(t.key);return`
    <div class="song-row" data-songkey="${l(t.key)}" data-songtitle="${l(t.title)}" data-songartist="${l(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u66F2\u8A73\u7D30\u3092\u8868\u793A">
      <div class="rank ${n}">${t.rank}</div>
      <div class="info">
        <div class="title song-title-line"><span class="song-title-text">${i}</span><button class="fav-btn ${d?"is-active":""}" type="button" data-fav-toggle="${l(t.key)}" aria-label="\u304A\u6C17\u306B\u5165\u308A" aria-pressed="${d?"true":"false"}" title="\u304A\u6C17\u306B\u5165\u308A">${d?"\u2665":"\u2661"}</button></div>
        <button class="artist artist-search-btn" type="button" data-artist-search="${l(t.artist)}">${c}</button>
        <div class="song-meta-line">
          <span class="genre-badge">${l(B(t))}</span>
          ${Gt(t)}
          ${o.map(r=>`<span class="match-badge">${l(r)}\u4E00\u81F4</span>`).join("")}
        </div>
        ${Rt(t)}
      </div>
      <div class="song-row-side">
        <div class="count">${t.count}<small>\u56DE</small></div>
        <div class="last">${a}</div>
      </div>
    </div>
  `}function Kt(){let t=u("#setlist-toggle-btn");if(!t)return;let s=e.setlist.items.length;t.setAttribute("aria-expanded",e.setlistExpanded?"true":"false"),t.textContent=e.setlistExpanded?`\u30BB\u30C8\u30EA\u5236\u4F5C\u3092\u9589\u3058\u308B${s?` (${s})`:""}`:`\u30BB\u30C8\u30EA\u5236\u4F5C\u3092\u958B\u304F${s?` (${s})`:""}`}function Gt(t){return[...(t.seasonTags||[]).map(n=>({tag:n,type:"season"})),...(t.moodTags||[]).map(n=>({tag:n,type:"mood"})),...e.singerMode?(t.singerTags||[]).map(n=>({tag:n,type:"tag"})):[]].slice(0,e.songsView==="compact"?2:5).map(({tag:n,type:a})=>`
    <button class="tag-badge tag-click" type="button" data-tag-type="${a}" data-tag-search="${l(n)}">${l(n)}</button>
  `).join("")}function Rt(t){if(!e.singerMode)return"";let s=`<button class="setlist-add-btn" type="button" data-setlist-action="add" data-songkey="${l(t.key)}">\uFF0B\u30BB\u30C8\u30EA</button>`;if(!e.data?.stats?.keyPublished)return`<div class="song-key-line song-key-actions">${s}</div>`;let n=String(t.displayKey||"").trim();return n?`
    <div class="song-key-line song-key-actions">
      <button type="button" class="song-key-badge" title="\u7D71\u5408\u96C6\u8A08 T/U\u5217\u306E\u30AD\u30FC">
        <span>\u30AD\u30FC</span><strong>${l(n)}</strong>
      </button>
      ${s}
    </div>
  `:`<div class="song-key-line song-key-actions"><span class="song-key-empty">\u30AD\u30FC\u672A\u767B\u9332</span>${s}</div>`}export{Jt as renderSongs};
