import{d as b}from"./chunk-MKJIXTK4.js";import{e as c}from"./chunk-JT7WCFD3.js";import{E as w,a as y,d as p,h as D}from"./chunk-PRFEE4R6.js";function v(){let{songs:t,streams:r=[]}=c.data,i=c.rankingPeriod||"all",l=y("#panel-ranking");if(!l)return;let a=i==="all"?null:S(r,i),o=a?E(t,a):[...t].sort((n,s)=>s.count-n.count||n.title.localeCompare(s.title,"ja")),e=c.rankingLimit,d=o.slice(0,e),u=!!c.channelData?.fullLoaded;l.innerHTML=`
    <div class="section-header">
      <h2>\u{1F3C6} \u6B4C\u5531\u56DE\u6570\u30E9\u30F3\u30AD\u30F3\u30B0</h2>
      <span class="count-pill">${t.length}\u66F2\u4E2D</span>
    </div>
    ${C(r,i,u)}
    ${a?L(a):""}
    ${a?a.counts.size===0?`
      <div class="empty-state">\u3053\u306E\u671F\u9593\u306B\u6B4C\u5531\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>
    `:"":`
      <div class="podium">
        ${d.slice(0,3).map((n,s)=>j(n,s)).join("")}
      </div>
    `}
    ${a?.counts.size!==0||!a?`
      <div class="song-list${a?" has-delta":""}">
        ${d.map((n,s)=>I(n,s+1,a)).join("")}
      </div>
      ${e<o.length?`
        <div class="timeline-controls">
          <button class="load-more-btn" id="rank-more">\u25BC \u3082\u3063\u3068\u8868\u793A (\u6B8B\u308A${o.length-e}\u66F2)</button>
        </div>`:""}
    `:""}
  `,l.addEventListener("click",n=>{let s=n.target.closest("[data-ranking-period]");if(!s)return;let $=s.dataset.rankingPeriod;$!==i&&(c.rankingPeriod=$,c.rankingLimit=b,v())});let m=document.getElementById("ranking-month-select");m&&m.addEventListener("change",n=>{n.target.value&&(c.rankingMonth=n.target.value,c.rankingPeriod="month-select",c.rankingLimit=b,v())});let k=document.getElementById("ranking-compare-select");k&&k.addEventListener("change",n=>{c.rankingCompareMonth=n.target.value,v()});let h=document.getElementById("ranking-swap-compare");h&&h.addEventListener("click",()=>{let n=c.rankingMonth||"",s=c.rankingCompareMonth||"";!n||!s||(c.rankingMonth=s,c.rankingCompareMonth=n,c.rankingPeriod="month-select",c.rankingLimit=b,v())});let f=document.getElementById("rank-more");f&&f.addEventListener("click",()=>{c.rankingLimit+=50,v()})}function C(t,r,i){let l=[{key:"all",label:"\u5168\u671F\u9593"},{key:"month",label:"\u4ECA\u6708"},{key:"prev-month",label:"\u5148\u6708"},{key:"week",label:"\u76F4\u8FD17\u65E5"}],a=N(t),o=c.rankingMonth||"";return`
    <div class="ranking-period-selector">
      ${l.map(e=>`
        <button
          class="period-btn${r===e.key?" active":""}"
          type="button"
          data-ranking-period="${e.key}"
          ${!i&&e.key!=="all"?'disabled title="\u914D\u4FE1\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D"':""}
        >${e.key==="all"||i?e.label:e.label+" \u2026"}</button>
      `).join("")}
      ${a.length&&i?`
        <select id="ranking-month-select" class="select-input period-month-select" title="\u6708\u3092\u6307\u5B9A">
          <option value="">\u6708\u3092\u9078\u629E\u2026</option>
          ${a.map(e=>{let[d,u]=e.split("-"),m=`${d}\u5E74${Number(u)}\u6708`;return`<option value="${e}"${r==="month-select"&&o===e?" selected":""}>${m}</option>`}).join("")}
        </select>
      `:""}
      ${r!=="all"&&a.length&&i?`
        <select id="ranking-compare-select" class="select-input period-month-select" title="\u5897\u6E1B\uFF08\u2191\u2193\uFF09\u306E\u6BD4\u8F03\u5148\u3092\u9078\u3076">
          <option value="">\u6BD4\u8F03: \u76F4\u524D\u306E\u671F\u9593\uFF08\u81EA\u52D5\uFF09</option>
          ${a.map(e=>{let[d,u]=e.split("-"),m=`\u6BD4\u8F03: ${d}\u5E74${Number(u)}\u6708`;return`<option value="${e}"${(c.rankingCompareMonth||"")===e?" selected":""}>${m}</option>`}).join("")}
        </select>
        ${r==="month-select"&&o&&c.rankingCompareMonth?`
          <button id="ranking-swap-compare" class="period-btn ranking-swap-btn" type="button" title="\u8868\u793A\u6708\u3068\u6BD4\u8F03\u6708\u3092\u5165\u308C\u66FF\u3048\u308B">\u2194 \u5165\u308C\u66FF\u3048</button>
        `:""}
      `:""}
    </div>
  `}function L(t){let{label:r,prevLabel:i,counts:l,totalSongs:a}=t;return`
    <div class="ranking-period-header">
      <span class="ranking-period-label">${p(r)}</span>
      <span class="ranking-period-meta">${l.size}\u66F2\u30FB\u5408\u8A08${a}\u56DE\u6B4C\u5531
        ${i?`<span class="ranking-prev-label">\uFF08\u524D\uFF1A${p(i)}\u6BD4\uFF09</span>`:""}
      </span>
    </div>
  `}function S(t,r){let i=new Date,l,a,o,e,d,u;if(r==="week")a=new Date(i),l=new Date(i),l.setDate(i.getDate()-6),l.setHours(0,0,0,0),e=new Date(l),e.setDate(e.getDate()-1),o=new Date(e),o.setDate(e.getDate()-6),o.setHours(0,0,0,0),d="\u76F4\u8FD17\u65E5",u="\u524D\u306E7\u65E5";else if(r==="month"){let n=i.getFullYear(),s=i.getMonth();l=new Date(n,s,1),a=new Date(n,s+1,0,23,59,59),o=new Date(n,s-1,1),e=new Date(n,s,0,23,59,59),d=`${n}\u5E74${s+1}\u6708`,u=`${n}\u5E74${s||12}\u6708`}else if(r==="prev-month"){let n=i.getFullYear(),s=i.getMonth()-1,$=s<0?n-1:n,g=(s%12+12)%12;l=new Date($,g,1),a=new Date($,g+1,0,23,59,59),o=new Date($,g-1,1),e=new Date($,g,0,23,59,59),d=`${$}\u5E74${g+1}\u6708\uFF08\u5148\u6708\uFF09`,u=`${$}\u5E74${g||12}\u6708`}else if(r==="month-select"&&c.rankingMonth){let[n,s]=c.rankingMonth.split("-").map(Number);l=new Date(n,s-1,1),a=new Date(n,s,0,23,59,59),o=new Date(n,s-2,1),e=new Date(n,s-1,0,23,59,59),d=`${n}\u5E74${s}\u6708`,u=`${s===1?n-1:n}\u5E74${s===1?12:s-1}\u6708`}else return null;let m=c.rankingCompareMonth||"";if(m){let[n,s]=m.split("-").map(Number);n&&s&&(o=new Date(n,s-1,1),e=new Date(n,s,0,23,59,59),u=`${n}\u5E74${s}\u6708`)}let k=M(t,l,a),h=M(t,o,e),f=[...k.values()].reduce((n,s)=>n+s,0);return{label:d,prevLabel:u,start:l,end:a,counts:k,prevCounts:h,totalSongs:f}}function M(t,r,i){let l=new Map;for(let a of t){let o=a.date instanceof Date?a.date:new Date(a.date||0);if(o>=r&&o<=i)for(let e of a.songs||[])l.set(e.key,(l.get(e.key)||0)+1)}return l}function E(t,{counts:r,prevCounts:i}){let l=new Map(t.map(o=>[o.key,o])),a=[];for(let[o,e]of r){let d=l.get(o);if(!d)continue;let u=i.get(o)||0;a.push({...d,periodCount:e,delta:e-u,isNew:u===0})}return a.sort((o,e)=>e.periodCount-o.periodCount||o.title.localeCompare(e.title,"ja")),a.forEach((o,e)=>{o.periodRank=e+1}),a}function N(t){let r=new Set;for(let i of t){let l=i.date instanceof Date?i.date:new Date(i.date||0);isNaN(l)||r.add(`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`)}return[...r].sort().reverse()}function j(t,r){let i=["\u{1F947}","\u{1F948}","\u{1F949}"];return`
    <div class="podium-card rank-${r+1}"
      data-songkey="${p(t.key)}"
      data-songtitle="${p(t.title)}"
      data-songartist="${p(t.artist)}"
      title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="podium-medal">${i[r]}</div>
      <div class="song-title">${p(t.title)}</div>
      <button class="song-artist artist-search-btn" type="button" data-artist-search="${p(t.artist)}">${p(t.artist)}</button>
      <div class="count-big">${t.count}<small>\u56DE</small></div>
      <div class="last-sung">${t.lastSung?`\u6700\u7D42: ${w(t.lastSung)} (${t.daysSinceLast}\u65E5\u524D)`:"\u672A\u62AB\u9732"}</div>
    </div>
  `}function I(t,r,i){let l=i?t.periodCount:t.count,a=i?t.periodRank:t.rank??r,o=a===1?"r1":a===2?"r2":a===3?"r3":"",e=i?`<div class="count">${l}<small>\u56DE</small></div>
       <div class="rank-delta ${P(t)}">${H(t)}</div>`:`<div class="count">${l}<small>\u56DE</small></div>
       <div class="last">${t.lastSung?`<span class="last-date">${w(t.lastSung)}</span><span class="badge ${D(t.daysSinceLast)}">${t.daysSinceLast}\u65E5\u524D</span>`:'<span class="last-date">\u672A\u62AB\u9732</span><span class="badge never">\u2014</span>'}</div>`;return`
    <div class="song-row" data-songkey="${p(t.key)}" data-songtitle="${p(t.title)}" data-songartist="${p(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u8A73\u7D30\u3092\u8868\u793A">
      <div class="rank ${o}">${a}</div>
      <div class="info">
        <div class="title">${p(t.title)}</div>
        <button class="artist artist-search-btn" type="button" data-artist-search="${p(t.artist)}">${p(t.artist)}</button>
      </div>
      <div class="song-row-side">
        ${e}
      </div>
    </div>
  `}function P(t){return t.isNew?"new":t.delta>0?"up":t.delta<0?"down":"same"}function H(t){return t.isNew?"NEW":t.delta>0?`\u25B2${t.delta}`:t.delta<0?`\u25BC${Math.abs(t.delta)}`:"\u2014"}export{v as renderRanking};
