import{I as j,J as x,K as b,d as p,e as $,f as u,i as r,t as m,u as y,v as f,w,x as M,y as k,z as H}from"./chunk-6YA3HG5E.js";function _(){let{songs:t,streams:d}=$.data,e=[...t].sort((o,h)=>h.count-o.count).slice(0,5),s=e[0]?.count||1,i=d.slice(0,5),c=p(),a=w(t,c),n=u("#panel-dashboard"),S=H(d,c),g=M(d).slice(-12),T=Math.max(1,...g.map(o=>o.songs)),L=`
    <div class="card dashboard-card dashboard-activity-card">
      <div class="card-title">\u{1F4C8} \u4ECA\u6708\u306E\u6D3B\u52D5</div>
      <div class="dashboard-metric-list">
        <div class="activity-row">
          <span class="a-date">\u914D\u4FE1</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u6B4C\u67A0\u6570</span>
          <strong>${y(d,c)}\u56DE</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6B4C\u5531</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u7DCF\u6B4C\u5531\u6570</span>
          <strong>${f(d,c)}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u65B0\u66F2</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u521D\u62AB\u9732\u66F2\u6570</span>
          <strong>${a}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6700\u7D42</span>
          <span class="a-meta">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</span>
          <strong>${d[0]?`${j(d[0].date)}\u65E5\u524D`:"\u2014"}</strong>
        </div>
      </div>
    </div>
  `,D=`
    <div class="card dashboard-card dashboard-top-card">
      <div class="card-title">\u{1F3C6} TOP5 \u697D\u66F2</div>
      <div class="bar-list">
        ${e.length?e.map((o,h)=>v(o,h,s)).join(""):'<div class="empty-state">\u66F2\u30C7\u30FC\u30BF\u306A\u3057</div>'}
      </div>
    </div>
  `;n.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-main-stack">
        <div class="dashboard-lead">
          ${L}
          ${D}
        </div>
        <div class="card dashboard-card dashboard-monthly-card">
          <div class="card-title">\u{1F3B6} \u6708\u5225 \u6B4C\u5531\u6570 <span class="pill">\u76F4\u8FD112\u304B\u6708</span></div>
          ${C(g,T)}
        </div>
      </div>
      <div class="card dashboard-card dashboard-side-card">
        <section class="dashboard-side-section">
          <div class="card-title">\u{1F3B8} \u30B8\u30E3\u30F3\u30EB\u5206\u5E03 <span class="pill">\u697D\u66F2\u6570</span></div>
          ${B(t)}
        </section>
        <section class="dashboard-side-section">
          <div class="card-title">\u{1F4C5} \u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7 <span class="pill">\u76F4\u8FD11\u5E74</span></div>
          ${R(S)}
        </section>
      </div>
      ${P(d,t,i)}
    </div>
  `}function P(t,d,l){let e=d.filter(a=>a.daysSinceLast>=180).sort((a,n)=>n.count-a.count).slice(0,5),s=d.filter(a=>a.daysSinceLast!=null&&a.daysSinceLast<=30).sort((a,n)=>n.count-a.count).slice(0,5),i=m(t,"month",p()),c=m(t,"year",p());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">\u{1F5F3} \u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${i.length?i.slice(0,5).map((a,n)=>v(a,n,i[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">\u{1F5F3} \u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${c.length?c.slice(0,5).map((a,n)=>v(a,n,c[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">\u{1F4A4} \u4E45\u3057\u3076\u308A\u5019\u88DC <span class="pill">180\u65E5\u4EE5\u4E0A</span></div>
      <div class="bar-list">
        ${e.length?e.map((a,n)=>v(a,n,e[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">\u2728 \u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A <span class="pill">30\u65E5\u4EE5\u5185</span></div>
      <div class="bar-list">
        ${s.length?s.map((a,n)=>v(a,n,s[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">\u{1F4FA} \u76F4\u8FD1\u306E\u6B4C\u67A0 <span class="pill">\u6700\u65B0${l.length}\u4EF6</span></div>
      ${l.map(a=>`
        <div class="activity-row">
          <span class="a-date">${x(a.date)}</span>
          <span class="a-title">${a.url?`<a href="${r(a.url)}" target="_blank" rel="noopener">${r(a.title||"\u914D\u4FE1")}</a>`:r(a.title)}</span>
          <span class="a-meta">\u{1F3A4} ${a.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function v(t,d,l){let e=Math.round(t.count/l*100);return`
    <div class="bar-row clickable" data-songkey="${r(t.key)}" data-songtitle="${r(t.title)}" data-songartist="${r(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="bar-rank">${d+1}</div>
      <div class="bar-content">
        <div class="bar-label">${r(t.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${r(t.artist)}</span></div>
        <div class="bar-bar" style="width:${e}%;"></div>
      </div>
      <div class="bar-value">${t.count}</div>
    </div>
  `}function B(t){let d=new Map;for(let s of t){let i=s.genre||s.genreText||"\u672A\u5206\u985E";!i||i==="\u672A\u5206\u985E"||d.set(i,(d.get(i)||0)+1)}let l=Array.from(d.entries()).sort((s,i)=>i[1]-s[1]),e=l.reduce((s,[,i])=>s+i,0);return l.length?`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${l.map(([s,i],c)=>`
          <span class="genre-meter-segment g${c%8}" style="width:${Math.max(3,i/e*100)}%" title="${r(s)}: ${i}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${l.slice(0,8).map(([s,i],c)=>`
          <div class="genre-row">
            <span class="genre-dot g${c%8}"></span>
            <span class="genre-name">${r(s)}</span>
            <strong>${i}</strong>
          </div>
        `).join("")}
      </div>
    </div>
  `:'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>'}function C(t,d){return t.length?`
    <div class="monthly-bars" aria-label="\u6708\u5225\u6B4C\u5531\u6570">
      ${t.map(l=>{let e=Math.max(5,Math.round(l.songs/d*100));return`
          <div class="month-bar" title="${b(l.date)}: ${l.songs}\u66F2 / ${l.streams}\u67A0">
            <div class="month-bar-track"><span style="height:${e}%"></span></div>
            <div class="month-label">${b(l.date).replace(/^\d{4}\//,"")}</div>
            <strong>${l.songs}</strong>
          </div>
        `}).join("")}
    </div>
  `:'<div class="empty-state">\u6708\u5225\u30C7\u30FC\u30BF\u306A\u3057</div>'}function R(t){let l=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].map(s=>`<div>${s}</div>`).join(""),e=t.map(s=>s.inRange?`<div class="heatmap-cell ${k(s.value)}" title="${s.iso}: ${s.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("");return`
    <div class="heatmap-flex">
      <div class="heatmap-row-labels">${l}</div>
      <div class="heatmap-wrap"><div class="heatmap">${e}</div></div>
    </div>
    <div class="heatmap-legend">
      \u5C11\u306A\u3081
      <div class="scale">
        <div class="heatmap-cell"></div>
        <div class="heatmap-cell l1"></div>
        <div class="heatmap-cell l2"></div>
        <div class="heatmap-cell l3"></div>
        <div class="heatmap-cell l4"></div>
      </div>
      \u591A\u3081
    </div>
  `}export{_ as renderDashboard};
