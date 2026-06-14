import{b as f,c as h}from"./chunk-MKJIXTK4.js";import{f as S}from"./chunk-POPWVR7L.js";import{e as n}from"./chunk-JT7WCFD3.js";import{F as k,H as g,a as d,c}from"./chunk-T4BEBXYH.js";function y(){let{streams:i}=n.data,o=n.timelineFilter,s=o?i.filter(t=>t.songs.some(l=>l.key===o.key)):i,a=H(s,n.timelineSort),r=d("#panel-timeline");r.innerHTML=`
    <div class="section-header">
      <h2>\u{1F4C5} \u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3</h2>
      <span class="count-pill">${a.length}\u67A0</span>
    </div>
    <div class="timeline-tools">
      <label class="timeline-sort-field" for="timeline-sort">
        <span>\u4E26\u3073\u66FF\u3048</span>
        <select id="timeline-sort" class="select-input">
          <option value="date-desc"${n.timelineSort==="date-desc"?" selected":""}>\u914D\u4FE1\u65E5\uFF08\u65B0\u3057\u3044\u9806\uFF09</option>
          <option value="date-asc"${n.timelineSort==="date-asc"?" selected":""}>\u914D\u4FE1\u65E5\uFF08\u53E4\u3044\u9806\uFF09</option>
          <option value="songs-desc"${n.timelineSort==="songs-desc"?" selected":""}>\u66F2\u6570\uFF08\u591A\u3044\u9806\uFF09</option>
          <option value="songs-asc"${n.timelineSort==="songs-asc"?" selected":""}>\u66F2\u6570\uFF08\u5C11\u306A\u3044\u9806\uFF09</option>
          <option value="index-desc"${n.timelineSort==="index-desc"?" selected":""}>\u67A0\u756A\u53F7\uFF08\u5927\u304D\u3044\u9806\uFF09</option>
          <option value="index-asc"${n.timelineSort==="index-asc"?" selected":""}>\u67A0\u756A\u53F7\uFF08\u5C0F\u3055\u3044\u9806\uFF09</option>
          <option value="title"${n.timelineSort==="title"?" selected":""}>\u30BF\u30A4\u30C8\u30EB\u9806</option>
        </select>
      </label>
    </div>
    <div id="timeline-filter-banner"></div>
    <div id="timeline" class="timeline"></div>
    <div class="timeline-controls" id="timeline-controls"></div>
  `,d("#timeline-sort")?.addEventListener("change",t=>{n.timelineSort=t.target.value||"date-desc",n.timelineLimit=f,y()});let p=d("#timeline-filter-banner");if(o){let t=a.reduce((l,u)=>l+u.songs.filter(v=>v.key===o.key).length,0);p.innerHTML=`
      <div class="filter-banner">
        <span class="filter-icon">\u{1F50E}</span>
        <div class="filter-text">
          <strong>${c(o.title)}</strong>
          <span style="color:var(--ink-mute);"> / ${c(o.artist)}</span>
          <span class="meta">\u3053\u306E\u66F2\u3092\u6B4C\u3063\u305F\u914D\u4FE1\u306E\u307F\u8868\u793A\u4E2D\uFF08${a.length}\u67A0 / ${t}\u56DE\u6B4C\u5531\uFF09</span>
        </div>
        <button class="clear-btn" id="clear-filter">\u2715 \u7D5E\u308A\u8FBC\u307F\u3092\u89E3\u9664</button>
      </div>
    `,d("#clear-filter").addEventListener("click",()=>{n.timelineFilter=null,n.timelineLimit=f,y()})}if(!a.length){d("#timeline").innerHTML='<div class="empty-state">\u8A72\u5F53\u3059\u308B\u914D\u4FE1\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>';return}let m=a.slice(0,n.timelineLimit);if(d("#timeline").innerHTML=m.map((t,l)=>x(t,l,o)).join(""),n.timelineFocus){let l=document.querySelector(`[data-streamkey="${CSS.escape(n.timelineFocus)}"]`)?.closest(".timeline-item");l?.classList.add("focus"),l?.scrollIntoView({behavior:"smooth",block:"center"}),n.timelineFocus=null}d("#timeline").onclick=async t=>{let l=t.target.closest("[data-copy-stream]");if(!l)return;t.preventDefault(),t.stopPropagation();let u=m[Number(l.dataset.copyStream)];if(u)try{await navigator.clipboard.writeText(I(u)),l.textContent="\u30B3\u30D4\u30FC\u6E08\u307F",setTimeout(()=>{l.textContent="\u30BB\u30C8\u30EA\u30B3\u30D4\u30FC"},1200)}catch{l.textContent="\u5931\u6557",setTimeout(()=>{l.textContent="\u30BB\u30C8\u30EA\u30B3\u30D4\u30FC"},1200)}};let e=d("#timeline-controls");n.timelineLimit<a.length&&(e.innerHTML=`<button class="load-more-btn" id="load-more">\u25BC \u3082\u3063\u3068\u898B\u308B (\u6B8B\u308A${a.length-n.timelineLimit}\u67A0)</button>`,d("#load-more").addEventListener("click",()=>{n.timelineLimit+=h,y()}))}function x(i,o,s){let a=!s&&n.timelineSort==="date-desc"&&o<3?"recent":"",r=i.songs.map(($,L)=>{let b=s&&$.key===s.key?" hit":"",T=b?"\u30AF\u30EA\u30C3\u30AF\u3067\u7D5E\u308A\u8FBC\u307F\u89E3\u9664":"\u30AF\u30EA\u30C3\u30AF\u3067\u7D5E\u308A\u8FBC\u307F";return`<span class="setlist-song${b}" data-songkey="${c($.key)}" data-songtitle="${c($.title)}" data-songartist="${c($.artist)}" title="${T}"><span class="sl-num">${L+1}</span>${c($.title)}<span style="color:var(--ink-mute);"> / ${c($.artist)}</span></span>`}).join(""),p=i.url?`<a href="${c(i.url)}" target="_blank" rel="noopener">${c(i.title||"\u914D\u4FE1")}</a>`:c(i.title||"\u914D\u4FE1"),m=i.url?`<span class="watch-actions"><a class="watch-open-link" href="${c(i.url)}" target="_blank" rel="noopener">YouTube</a></span>`:"",e=g(i),t=S(e),l=`<button class="timeline-save-btn${t?" is-saved":""}" type="button" data-playlist-add="${c(e)}" data-stream-title="${c(i.title||"\u914D\u4FE1")}" title="${t?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${t?"\u2605":"\u2606"}</button>`,u=`<button class="timeline-copy-btn" type="button" data-copy-stream="${o}">\u30BB\u30C8\u30EA\u30B3\u30D4\u30FC</button>`;return`
    <details class="timeline-item ${a}"${o===0||s?" open":""}>
      <span class="stream-anchor" data-streamkey="${c(g(i))}"></span>
      <summary class="timeline-summary">
        <span class="timeline-date-badge">${k(i.date).replace(/^\d{4}\//,"")}</span>
        <span class="timeline-summary-main">
          <span class="timeline-head">
            <span class="timeline-stream-no">\u7B2C${i.index}\u67A0</span>
            <span class="timeline-songcount">\u2713 ${i.songs.length}\u66F2</span>
          </span>
          <span class="timeline-title">${p}</span>
        </span>
        <span class="timeline-actions">
          ${l}
          ${u}
          ${m}
        </span>
      </summary>
      <div class="setlist timeline-setlist">${r}</div>
    </details>
  `}function H(i,o){let s=[...i],a=e=>e.date instanceof Date?e.date.getTime():new Date(e.date||0).getTime(),r=e=>Number(e.index)||0,p=e=>e.songs?.length||0,m=(e,t)=>a(t)-a(e)||r(t)-r(e);switch(o){case"date-asc":s.sort((e,t)=>a(e)-a(t)||r(e)-r(t));break;case"songs-desc":s.sort((e,t)=>p(t)-p(e)||m(e,t));break;case"songs-asc":s.sort((e,t)=>p(e)-p(t)||m(e,t));break;case"index-desc":s.sort((e,t)=>r(t)-r(e)||m(e,t));break;case"index-asc":s.sort((e,t)=>r(e)-r(t)||m(e,t));break;case"title":s.sort((e,t)=>String(e.title||"").localeCompare(String(t.title||""),"ja")||m(e,t));break;case"date-desc":default:s.sort(m);break}return s}function I(i){return(i.songs||[]).map(o=>{let s=String(o?.title||"").trim(),a=String(o?.artist||"").trim();return a?`${s} / ${a}`:s}).filter(Boolean).join(`
`)}export{y as renderTimeline};
