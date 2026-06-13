import{d as w}from"./chunk-MKJIXTK4.js";import{e as c}from"./chunk-MWWFVXIN.js";import{E as b,a as y,d as $,h as D}from"./chunk-PRFEE4R6.js";function h(){let{songs:t,streams:r=[]}=c.data,a=c.rankingPeriod||"all",i=y("#panel-ranking");if(!i)return;let n=a==="all"?null:C(r,a),o=n?N(t,n):[...t].sort((p,s)=>s.count-p.count||p.title.localeCompare(s.title,"ja")),e=c.rankingLimit,d=o.slice(0,e),u=!!c.channelData?.fullLoaded;i.innerHTML=`
    <div class="section-header">
      <h2>\u{1F3C6} \u6B4C\u5531\u56DE\u6570\u30E9\u30F3\u30AD\u30F3\u30B0</h2>
      <span class="count-pill">${t.length}\u66F2\u4E2D</span>
    </div>
    ${S(r,a,u)}
    ${n?L(n):""}
    ${n?n.counts.size===0?`
      <div class="empty-state">\u3053\u306E\u671F\u9593\u306B\u6B4C\u5531\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>
    `:"":`
      <div class="podium">
        ${d.slice(0,3).map((p,s)=>j(p,s)).join("")}
      </div>
    `}
    ${n?.counts.size!==0||!n?`
      <div class="song-list${n?" has-delta":""}">
        ${d.map((p,s)=>I(p,s+1,n)).join("")}
      </div>
      ${e<o.length?`
        <div class="timeline-controls">
          <button class="load-more-btn" id="rank-more">\u25BC \u3082\u3063\u3068\u8868\u793A (\u6B8B\u308A${o.length-e}\u66F2)</button>
        </div>`:""}
    `:""}
  `,i.addEventListener("click",p=>{let s=p.target.closest("[data-ranking-period]");if(!s)return;let l=s.dataset.rankingPeriod;l!==a&&(c.rankingPeriod=l,c.rankingLimit=w,h())});let m=document.getElementById("ranking-month-select");m&&m.addEventListener("change",p=>{p.target.value&&(c.rankingMonth=p.target.value,c.rankingPeriod="month-select",c.rankingLimit=w,h())});let k=document.getElementById("ranking-compare-select");k&&k.addEventListener("change",p=>{c.rankingCompareMonth=p.target.value,h()});let f=document.getElementById("rank-more");f&&f.addEventListener("click",()=>{c.rankingLimit+=50,h()})}function S(t,r,a){let i=[{key:"all",label:"\u5168\u671F\u9593"},{key:"month",label:"\u4ECA\u6708"},{key:"prev-month",label:"\u5148\u6708"},{key:"week",label:"\u76F4\u8FD17\u65E5"}],n=E(t),o=c.rankingMonth||"";return`
    <div class="ranking-period-selector">
      ${i.map(e=>`
        <button
          class="period-btn${r===e.key?" active":""}"
          type="button"
          data-ranking-period="${e.key}"
          ${!a&&e.key!=="all"?'disabled title="\u914D\u4FE1\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D"':""}
        >${e.key==="all"||a?e.label:e.label+" \u2026"}</button>
      `).join("")}
      ${n.length&&a?`
        <select id="ranking-month-select" class="select-input period-month-select" title="\u6708\u3092\u6307\u5B9A">
          <option value="">\u6708\u3092\u9078\u629E\u2026</option>
          ${n.map(e=>{let[d,u]=e.split("-"),m=`${d}\u5E74${Number(u)}\u6708`;return`<option value="${e}"${r==="month-select"&&o===e?" selected":""}>${m}</option>`}).join("")}
        </select>
      `:""}
      ${r!=="all"&&n.length&&a?`
        <select id="ranking-compare-select" class="select-input period-month-select" title="\u5897\u6E1B\uFF08\u2191\u2193\uFF09\u306E\u6BD4\u8F03\u5148\u3092\u9078\u3076">
          <option value="">\u6BD4\u8F03: \u76F4\u524D\u306E\u671F\u9593\uFF08\u81EA\u52D5\uFF09</option>
          ${n.map(e=>{let[d,u]=e.split("-"),m=`\u6BD4\u8F03: ${d}\u5E74${Number(u)}\u6708`;return`<option value="${e}"${(c.rankingCompareMonth||"")===e?" selected":""}>${m}</option>`}).join("")}
        </select>
      `:""}
    </div>
  `}function L(t){let{label:r,prevLabel:a,counts:i,totalSongs:n}=t;return`
    <div class="ranking-period-header">
      <span class="ranking-period-label">${$(r)}</span>
      <span class="ranking-period-meta">${i.size}\u66F2\u30FB\u5408\u8A08${n}\u56DE\u6B4C\u5531
        ${a?`<span class="ranking-prev-label">\uFF08\u524D\uFF1A${$(a)}\u6BD4\uFF09</span>`:""}
      </span>
    </div>
  `}function C(t,r){let a=new Date,i,n,o,e,d,u;if(r==="week")n=new Date(a),i=new Date(a),i.setDate(a.getDate()-6),i.setHours(0,0,0,0),e=new Date(i),e.setDate(e.getDate()-1),o=new Date(e),o.setDate(e.getDate()-6),o.setHours(0,0,0,0),d="\u76F4\u8FD17\u65E5",u="\u524D\u306E7\u65E5";else if(r==="month"){let s=a.getFullYear(),l=a.getMonth();i=new Date(s,l,1),n=new Date(s,l+1,0,23,59,59),o=new Date(s,l-1,1),e=new Date(s,l,0,23,59,59),d=`${s}\u5E74${l+1}\u6708`,u=`${s}\u5E74${l||12}\u6708`}else if(r==="prev-month"){let s=a.getFullYear(),l=a.getMonth()-1,v=l<0?s-1:s,g=(l%12+12)%12;i=new Date(v,g,1),n=new Date(v,g+1,0,23,59,59),o=new Date(v,g-1,1),e=new Date(v,g,0,23,59,59),d=`${v}\u5E74${g+1}\u6708\uFF08\u5148\u6708\uFF09`,u=`${v}\u5E74${g||12}\u6708`}else if(r==="month-select"&&c.rankingMonth){let[s,l]=c.rankingMonth.split("-").map(Number);i=new Date(s,l-1,1),n=new Date(s,l,0,23,59,59),o=new Date(s,l-2,1),e=new Date(s,l-1,0,23,59,59),d=`${s}\u5E74${l}\u6708`,u=`${l===1?s-1:s}\u5E74${l===1?12:l-1}\u6708`}else return null;let m=c.rankingCompareMonth||"";if(m){let[s,l]=m.split("-").map(Number);s&&l&&(o=new Date(s,l-1,1),e=new Date(s,l,0,23,59,59),u=`${s}\u5E74${l}\u6708`)}let k=M(t,i,n),f=M(t,o,e),p=[...k.values()].reduce((s,l)=>s+l,0);return{label:d,prevLabel:u,start:i,end:n,counts:k,prevCounts:f,totalSongs:p}}function M(t,r,a){let i=new Map;for(let n of t){let o=n.date instanceof Date?n.date:new Date(n.date||0);if(o>=r&&o<=a)for(let e of n.songs||[])i.set(e.key,(i.get(e.key)||0)+1)}return i}function N(t,{counts:r,prevCounts:a}){let i=new Map(t.map(o=>[o.key,o])),n=[];for(let[o,e]of r){let d=i.get(o);if(!d)continue;let u=a.get(o)||0;n.push({...d,periodCount:e,delta:e-u,isNew:u===0})}return n.sort((o,e)=>e.periodCount-o.periodCount||o.title.localeCompare(e.title,"ja")),n.forEach((o,e)=>{o.periodRank=e+1}),n}function E(t){let r=new Set;for(let a of t){let i=a.date instanceof Date?a.date:new Date(a.date||0);isNaN(i)||r.add(`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`)}return[...r].sort().reverse()}function j(t,r){let a=["\u{1F947}","\u{1F948}","\u{1F949}"];return`
    <div class="podium-card rank-${r+1}"
      data-songkey="${$(t.key)}"
      data-songtitle="${$(t.title)}"
      data-songartist="${$(t.artist)}"
      title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="podium-medal">${a[r]}</div>
      <div class="song-title">${$(t.title)}</div>
      <button class="song-artist artist-search-btn" type="button" data-artist-search="${$(t.artist)}">${$(t.artist)}</button>
      <div class="count-big">${t.count}<small>\u56DE</small></div>
      <div class="last-sung">${t.lastSung?`\u6700\u7D42: ${b(t.lastSung)} (${t.daysSinceLast}\u65E5\u524D)`:"\u672A\u62AB\u9732"}</div>
    </div>
  `}function I(t,r,a){let i=a?t.periodCount:t.count,n=a?t.periodRank:t.rank??r,o=n===1?"r1":n===2?"r2":n===3?"r3":"",e=a?`<div class="count">${i}<small>\u56DE</small></div>
       <div class="rank-delta ${P(t)}">${H(t)}</div>`:`<div class="count">${i}<small>\u56DE</small></div>
       <div class="last">${t.lastSung?`<span class="last-date">${b(t.lastSung)}</span><span class="badge ${D(t.daysSinceLast)}">${t.daysSinceLast}\u65E5\u524D</span>`:'<span class="last-date">\u672A\u62AB\u9732</span><span class="badge never">\u2014</span>'}</div>`;return`
    <div class="song-row" data-songkey="${$(t.key)}" data-songtitle="${$(t.title)}" data-songartist="${$(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u8A73\u7D30\u3092\u8868\u793A">
      <div class="rank ${o}">${n}</div>
      <div class="info">
        <div class="title">${$(t.title)}</div>
        <button class="artist artist-search-btn" type="button" data-artist-search="${$(t.artist)}">${$(t.artist)}</button>
      </div>
      <div class="song-row-side">
        ${e}
      </div>
    </div>
  `}function P(t){return t.isNew?"new":t.delta>0?"up":t.delta<0?"down":"same"}function H(t){return t.isNew?"NEW":t.delta>0?`\u25B2${t.delta}`:t.delta<0?`\u25BC${Math.abs(t.delta)}`:"\u2014"}export{h as renderRanking};
