import{b as f,c as h}from"./chunk-MKJIXTK4.js";import{f as k}from"./chunk-QC5KZ26R.js";import{e as i}from"./chunk-JT7WCFD3.js";import{E as y,G as v,a as d,d as o}from"./chunk-PRFEE4R6.js";function g(){let{streams:n}=i.data,r=i.timelineFilter,s=r?n.filter(t=>t.songs.some(l=>l.key===r.key)):n,a=x(s,i.timelineSort),c=d("#panel-timeline");c.innerHTML=`
    <div class="section-header">
      <h2>\u{1F4C5} \u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3</h2>
      <span class="count-pill">${a.length}\u67A0</span>
    </div>
    <div class="timeline-tools">
      <label class="timeline-sort-field" for="timeline-sort">
        <span>\u4E26\u3073\u66FF\u3048</span>
        <select id="timeline-sort" class="select-input">
          <option value="date-desc"${i.timelineSort==="date-desc"?" selected":""}>\u914D\u4FE1\u65E5\uFF08\u65B0\u3057\u3044\u9806\uFF09</option>
          <option value="date-asc"${i.timelineSort==="date-asc"?" selected":""}>\u914D\u4FE1\u65E5\uFF08\u53E4\u3044\u9806\uFF09</option>
          <option value="songs-desc"${i.timelineSort==="songs-desc"?" selected":""}>\u66F2\u6570\uFF08\u591A\u3044\u9806\uFF09</option>
          <option value="songs-asc"${i.timelineSort==="songs-asc"?" selected":""}>\u66F2\u6570\uFF08\u5C11\u306A\u3044\u9806\uFF09</option>
          <option value="index-desc"${i.timelineSort==="index-desc"?" selected":""}>\u67A0\u756A\u53F7\uFF08\u5927\u304D\u3044\u9806\uFF09</option>
          <option value="index-asc"${i.timelineSort==="index-asc"?" selected":""}>\u67A0\u756A\u53F7\uFF08\u5C0F\u3055\u3044\u9806\uFF09</option>
          <option value="title"${i.timelineSort==="title"?" selected":""}>\u30BF\u30A4\u30C8\u30EB\u9806</option>
        </select>
      </label>
    </div>
    <div id="timeline-filter-banner"></div>
    <div id="timeline" class="timeline"></div>
    <div class="timeline-controls" id="timeline-controls"></div>
  `,d("#timeline-sort")?.addEventListener("change",t=>{i.timelineSort=t.target.value||"date-desc",i.timelineLimit=f,g()});let u=d("#timeline-filter-banner");if(r){let t=a.reduce((l,$)=>l+$.songs.filter(p=>p.key===r.key).length,0);u.innerHTML=`
      <div class="filter-banner">
        <span class="filter-icon">\u{1F50E}</span>
        <div class="filter-text">
          <strong>${o(r.title)}</strong>
          <span style="color:var(--ink-mute);"> / ${o(r.artist)}</span>
          <span class="meta">\u3053\u306E\u66F2\u3092\u6B4C\u3063\u305F\u914D\u4FE1\u306E\u307F\u8868\u793A\u4E2D\uFF08${a.length}\u67A0 / ${t}\u56DE\u6B4C\u5531\uFF09</span>
        </div>
        <button class="clear-btn" id="clear-filter">\u2715 \u7D5E\u308A\u8FBC\u307F\u3092\u89E3\u9664</button>
      </div>
    `,d("#clear-filter").addEventListener("click",()=>{i.timelineFilter=null,i.timelineLimit=f,g()})}if(!a.length){d("#timeline").innerHTML='<div class="empty-state">\u8A72\u5F53\u3059\u308B\u914D\u4FE1\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>';return}let m=a.slice(0,i.timelineLimit);if(d("#timeline").innerHTML=m.map((t,l)=>T(t,l,r)).join(""),i.timelineFocus){let l=document.querySelector(`[data-streamkey="${CSS.escape(i.timelineFocus)}"]`)?.closest(".timeline-item");l?.classList.add("focus"),l?.scrollIntoView({behavior:"smooth",block:"center"}),i.timelineFocus=null}d("#timeline").onclick=async t=>{let l=t.target.closest("[data-copy-stream]");if(!l)return;t.stopPropagation();let $=m[Number(l.dataset.copyStream)];if($)try{await navigator.clipboard.writeText(H($)),l.textContent="\u30B3\u30D4\u30FC\u6E08\u307F",setTimeout(()=>{l.textContent="\u30BB\u30C8\u30EA\u30B3\u30D4\u30FC"},1200)}catch{l.textContent="\u5931\u6557",setTimeout(()=>{l.textContent="\u30BB\u30C8\u30EA\u30B3\u30D4\u30FC"},1200)}};let e=d("#timeline-controls");i.timelineLimit<a.length&&(e.innerHTML=`<button class="load-more-btn" id="load-more">\u25BC \u3082\u3063\u3068\u898B\u308B (\u6B8B\u308A${a.length-i.timelineLimit}\u67A0)</button>`,d("#load-more").addEventListener("click",()=>{i.timelineLimit+=h,g()}))}function T(n,r,s){let a=!s&&i.timelineSort==="date-desc"&&r<3?"recent":"",c=n.songs.map((p,S)=>{let b=s&&p.key===s.key?" hit":"",L=b?"\u30AF\u30EA\u30C3\u30AF\u3067\u7D5E\u308A\u8FBC\u307F\u89E3\u9664":"\u30AF\u30EA\u30C3\u30AF\u3067\u7D5E\u308A\u8FBC\u307F";return`<span class="setlist-song${b}" data-songkey="${o(p.key)}" data-songtitle="${o(p.title)}" data-songartist="${o(p.artist)}" title="${L}"><span class="sl-num">${S+1}</span>${o(p.title)}<span style="color:var(--ink-mute);"> / ${o(p.artist)}</span></span>`}).join(""),u=n.url?`<a href="${o(n.url)}" target="_blank" rel="noopener">${o(n.title||"\u914D\u4FE1")}</a>`:o(n.title||"\u914D\u4FE1"),m=n.url?`<span class="watch-actions"><button class="watch-link" type="button" data-stream-play="${o(v(n))}" data-inline-youtube="${o(n.url)}">\u25B6 \u518D\u751F</button><a class="watch-open-link" href="${o(n.url)}" target="_blank" rel="noopener">\u2197 \u958B\u304F</a></span>`:"",e=v(n),t=k(e),l=`<button class="timeline-save-btn${t?" is-saved":""}" type="button" data-playlist-add="${o(e)}" data-stream-title="${o(n.title||"\u914D\u4FE1")}" title="${t?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${t?"\u2605":"\u2606"}</button>`,$=`<button class="timeline-copy-btn" type="button" data-copy-stream="${r}">\u30BB\u30C8\u30EA\u30B3\u30D4\u30FC</button>`;return`
    <article class="timeline-item ${a}">
      <span class="stream-anchor" data-streamkey="${o(v(n))}"></span>
      <header class="timeline-head">
        <span class="timeline-date">${y(n.date)}</span>
        <span class="timeline-stream-no">\u7B2C${n.index}\u67A0</span>
        <span class="timeline-songcount">\u{1F3A4} ${n.songs.length}\u66F2</span>
        ${l}
        ${$}
        ${m}
      </header>
      <div class="timeline-title">${u}</div>
      <div class="setlist">${c}</div>
    </article>
  `}function x(n,r){let s=[...n],a=e=>e.date instanceof Date?e.date.getTime():new Date(e.date||0).getTime(),c=e=>Number(e.index)||0,u=e=>e.songs?.length||0,m=(e,t)=>a(t)-a(e)||c(t)-c(e);switch(r){case"date-asc":s.sort((e,t)=>a(e)-a(t)||c(e)-c(t));break;case"songs-desc":s.sort((e,t)=>u(t)-u(e)||m(e,t));break;case"songs-asc":s.sort((e,t)=>u(e)-u(t)||m(e,t));break;case"index-desc":s.sort((e,t)=>c(t)-c(e)||m(e,t));break;case"index-asc":s.sort((e,t)=>c(e)-c(t)||m(e,t));break;case"title":s.sort((e,t)=>String(e.title||"").localeCompare(String(t.title||""),"ja")||m(e,t));break;case"date-desc":default:s.sort(m);break}return s}function H(n){return(n.songs||[]).map(r=>{let s=String(r?.title||"").trim(),a=String(r?.artist||"").trim();return a?`${s} / ${a}`:s}).filter(Boolean).join(`
`)}export{g as renderTimeline};
