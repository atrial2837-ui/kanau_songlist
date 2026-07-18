import{c as F,d as Y,g as q}from"./chunk-42A47AOL.js";import{a as k,b as z,n as N,q as O}from"./chunk-B5PIMRCO.js";import"./chunk-J3NRXPJ3.js";import{d as S,e as y}from"./chunk-33BPFLKT.js";import{F as P,G as W,H as A,K as B,R as h,a as m,c as v,p as x,q as H,r as D,s as L,t as j,u as R,v as T}from"./chunk-J7UMASMC.js";function la(){let{songs:a,streams:t}=y.data,n=[...a].sort((b,c)=>c.count-b.count).slice(0,5),i=n[0]?.count||1,d=t.slice(0,5),l=S(),s=L(a,l),e=m("#panel-dashboard"),o=T(t,l),u=j(t).slice(-12),M=Math.max(1,...u.map(b=>b.songs)),f=`
    <div class="card dashboard-card dashboard-activity-card">
      <div class="card-title">${h("analytics")} \u4ECA\u6708\u306E\u6D3B\u52D5</div>
      <div class="dashboard-metric-list">
        <div class="activity-row">
          <span class="a-date">\u914D\u4FE1</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u6B4C\u67A0\u6570</span>
          <strong>${H(t,l)}\u56DE</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6B4C\u5531</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u7DCF\u6B4C\u5531\u6570</span>
          <strong>${D(t,l)}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u65B0\u66F2</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u521D\u62AB\u9732\u66F2\u6570</span>
          <strong>${s}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6700\u7D42</span>
          <span class="a-meta">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</span>
          <strong>${t[0]?`${P(t[0].date)}\u65E5\u524D`:"\u2014"}</strong>
        </div>
      </div>
    </div>
  `,$=`
    <div class="card dashboard-card dashboard-top-card">
      <div class="card-title">${h("rank")} TOP5 \u697D\u66F2</div>
      <div class="bar-list">
        ${n.length?n.map((b,c)=>w(b,c,i)).join(""):'<div class="empty-state">\u66F2\u30C7\u30FC\u30BF\u306A\u3057</div>'}
      </div>
    </div>
  `;e.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-overview-grid">
        ${f}
        ${$}
        <div class="card dashboard-card dashboard-genre-card">
          <div class="card-title">${h("chart")} \u30B8\u30E3\u30F3\u30EB\u5206\u5E03 <span class="pill">\u697D\u66F2\u6570</span></div>
          ${Q(a)}
        </div>
        <div class="card dashboard-card dashboard-heatmap-card">
          <div class="card-title">${h("calendar")} \u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7 <span class="pill">\u76F4\u8FD11\u5E74</span></div>
          ${X(o)}
        </div>
        <div class="card dashboard-card dashboard-monthly-card">
          <div class="card-title">${h("music")} \u6708\u5225 \u6B4C\u5531\u6570 <span class="pill">\u76F4\u8FD112\u304B\u6708</span></div>
          ${u.length?q("chart-monthly",{class:"short"}):'<div class="empty-state">\u6708\u5225\u30C7\u30FC\u30BF\u306A\u3057</div>'}
        </div>
      </div>
      ${E()}
      ${I()}
      ${J(t,a,d)}
    </div>
  `,K(),Z(t,a),U(u);let g=e.querySelector(".heatmap-wrap");g&&(g.scrollLeft=g.scrollWidth)}function I(){return`
    <div class="card dashboard-card dashboard-recap-card" id="dashboard-recap-card">
      <div class="card-title">
        ${h("chart")} \u304B\u306A\u3046\u306E\u307E\u3068\u3081
        <span class="dashboard-recap-toggle" id="dashboard-recap-toggle">
          <button class="btn ghost" type="button" data-recap-period="year" id="recap-btn-year">\u4ECA\u5E74</button>
          <button class="btn ghost" type="button" data-recap-period="month" id="recap-btn-month">\u4ECA\u6708</button>
        </span>
      </div>
      <div id="dashboard-recap-body"></div>
    </div>
  `}function G(a,t,r,n){let i=n.getFullYear(),d=n.getMonth();function l(c){let p=c.date instanceof Date?c.date:new Date(c.date);return r==="year"?p.getFullYear()===i:p.getFullYear()===i&&p.getMonth()===d}let s=a.filter(l);if(!s.length)return null;let e=s.length,o=s.reduce((c,p)=>c+(p.songs?.length||0),0),u=new Set;for(let c of s)for(let p of c.songs||[])p.key&&u.add(p.key);let M=u.size,f=new Map;for(let c of s)for(let p of c.songs||[]){if(!p.key)continue;let C=f.get(p.key)||{title:p.title,count:0};C.count++,f.set(p.key,C)}let $=null,g=0;for(let[,c]of f)c.count>g&&(g=c.count,$=c);let b=0;for(let c of t){if(!c.firstSung)continue;let p=c.firstSung instanceof Date?c.firstSung:new Date(c.firstSung);(r==="year"&&p.getFullYear()===i||r==="month"&&p.getFullYear()===i&&p.getMonth()===d)&&b++}return{streamCount:e,totalSongs:o,distinctCount:M,topSong:$,topCount:g,newSongCount:b}}function V(a,t){if(!a)return'<div class="empty-state">\u3053\u306E\u671F\u9593\u306E\u8A18\u9332\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>';let r=a.topSong?`${v(a.topSong.title)} <span class="recap-sub">(${a.topCount}\u56DE)</span>`:"\u2014";return`
    <div class="recap-period-label">${v(t)}</div>
    <div class="recap-tiles">
      <div class="recap-tile">
        <strong>${a.streamCount}</strong>
        <span>\u6B4C\u67A0\u6570</span>
      </div>
      <div class="recap-tile">
        <strong>${a.totalSongs}</strong>
        <span>\u7DCF\u6B4C\u5531\u6570</span>
      </div>
      <div class="recap-tile">
        <strong>${a.distinctCount}</strong>
        <span>\u66F2\u306E\u7A2E\u985E</span>
      </div>
      <div class="recap-tile">
        <strong>${a.newSongCount}</strong>
        <span>\u521D\u62AB\u9732\u66F2</span>
      </div>
    </div>
    <div class="recap-top-song">
      ${h("rank")} \u6700\u591A\u6B4C\u5531: ${r}
    </div>
  `}function Z(a,t){let r=m("#dashboard-recap-body"),n=m("#recap-btn-year"),i=m("#recap-btn-month");if(!r)return;let d=S(),l="year";function s(o){l=o;let u=d.getFullYear(),M=d.getMonth(),$=o==="year"?`${u}\u5E74`:`${u}\u5E74 ${["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"][M]}`,g=G(a,t,o,d);r.innerHTML=V(g,$),n?.classList.toggle("primary",o==="year"),n?.classList.toggle("ghost",o!=="year"),i?.classList.toggle("primary",o==="month"),i?.classList.toggle("ghost",o!=="month")}s("year");let e=m("#dashboard-recap-toggle");e&&e.addEventListener("click",o=>{let u=o.target.closest("[data-recap-period]");u&&s(u.dataset.recapPeriod)})}function _(a){let t=Math.max(0,Math.floor(a)),r=Math.floor(t/3600),n=Math.floor(t%3600/60),i=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")}`:`${n}:${String(i).padStart(2,"0")}`}function E(){let a=k().slice(0,6);return a.length?`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">${h("play")} \u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${a.map((t,r)=>{let n=B(t.url),i=Math.floor((Date.now()-(t.updatedAt||0))/864e5),d=i<=0?"\u4ECA\u65E5":`${i}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${r}" title="${v(t.title||"")}">
            ${n?`<img class="dashboard-resume-thumb" src="${v(n)}" alt="" width="320" height="180" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${v(t.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">${h("time")} ${_(t.t)} \u304B\u3089 \u30FB ${d}</span>
          </button>`}).join("")}
      </div>
    </div>`:""}function K(){let a=m("#dashboard-resume-list");a&&(a.onclick=n=>{let i=n.target.closest("[data-resume-idx]");if(!i)return;let d=k()[Number(i.dataset.resumeIdx)];if(!d?.url)return;let l=null;d.channel!=null&&d.index!=null&&(l=(y.channelData?.combined?.streams||y.data?.streams||[]).find(e=>e.channel===d.channel&&e.index===d.index)||null),O(l||{url:d.url,title:d.title,isMv:!!d.isMv},d.t)});let t=m("#dashboard-resume-clear");t&&(t.onclick=()=>{z(),m("#panel-dashboard .dashboard-resume-card")?.remove()});let r=m("#dashboard-resume-queue");r&&(r.onclick=()=>{let n=k(),i=y.channelData?.combined?.streams||y.data?.streams||[],d=n.map((l,s)=>{let e=l.channel!=null&&l.index!=null?i.find(o=>o.channel===l.channel&&o.index===l.index):null;return e?.url?{kind:"stream",key:`${e.channel}:${e.index}`,stream:e}:l.url?{kind:"mv",key:`history:${s}`,video:{url:l.url,title:l.title||"\u52D5\u753B",isMv:!!l.isMv}}:null}).filter(Boolean);d.length&&N({name:"\u8996\u8074\u5C65\u6B74",items:d,idx:0})})}function J(a,t,r){let n=t.filter(s=>s.daysSinceLast>=180).sort((s,e)=>e.count-s.count).slice(0,5),i=t.filter(s=>s.daysSinceLast!=null&&s.daysSinceLast<=30).sort((s,e)=>e.count-s.count).slice(0,5),d=x(a,"month",S()),l=x(a,"year",S());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">${h("rank")} \u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">TOP5</span></div>
      <div class="bar-list">
        ${d.length?d.slice(0,5).map((s,e)=>w(s,e,d[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">${h("rank")} \u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">TOP5</span></div>
      <div class="bar-list">
        ${l.length?l.slice(0,5).map((s,e)=>w(s,e,l[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">${h("time")} \u4E45\u3057\u3076\u308A\u5019\u88DC <span class="pill">180\u65E5\u4EE5\u4E0A</span></div>
      <div class="bar-list">
        ${n.length?n.map((s,e)=>w(s,e,n[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">${h("sparkle")} \u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A <span class="pill">30\u65E5\u4EE5\u5185</span></div>
      <div class="bar-list">
        ${i.length?i.map((s,e)=>w(s,e,i[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">${h("video")} \u76F4\u8FD1\u306E\u6B4C\u67A0 <span class="pill">\u6700\u65B0${r.length}\u4EF6</span></div>
      ${r.map(s=>`
        <div class="activity-row">
          <span class="a-date">${W(s.date)}</span>
          <span class="a-title">${s.url?`<a href="${v(s.url)}" target="_blank" rel="noopener">${v(s.title||"\u914D\u4FE1")}</a>`:v(s.title)}</span>
          <span class="a-meta">${h("mic")} ${s.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function w(a,t,r){let n=Math.round(a.count/r*100);return`
    <div class="bar-row clickable" role="button" tabindex="0" data-songkey="${v(a.key)}" data-songtitle="${v(a.title)}" data-songartist="${v(a.artist)}">
      <div class="bar-rank">${t+1}</div>
      <div class="bar-content">
        <div class="bar-label">${v(a.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${v(a.artist)}</span></div>
        <div class="bar-bar" style="width:${n}%;"></div>
      </div>
      <div class="bar-value">${a.count}</div>
    </div>
  `}function Q(a){let t=new Map;for(let e of a){let o=e.genre||e.genreText||"\u672A\u5206\u985E";!o||o==="\u672A\u5206\u985E"||t.set(o,(t.get(o)||0)+1)}let r=Array.from(t.entries()).sort((e,o)=>o[1]-e[1]),n=r.reduce((e,[,o])=>e+o,0);if(!r.length)return'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>';let i=a.length||0,d=Math.max(0,i-n),l=r[0],s=i?Math.round(l[1]/i*100):0;return`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${r.map(([e,o],u)=>`
          <span class="genre-meter-segment g${u%8}" style="width:${Math.max(3,o/n*100)}%" title="${v(e)}: ${o}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${r.slice(0,8).map(([e,o],u)=>`
          <div class="genre-row">
            <span class="genre-dot g${u%8}"></span>
            <span class="genre-name">${v(e)}</span>
            <strong>${o}</strong>
          </div>
        `).join("")}
      </div>
      <div class="genre-insights" aria-label="\u30B8\u30E3\u30F3\u30EB\u96C6\u8A08">
        <div class="genre-insight">
          <span>\u5206\u985E\u6E08\u307F</span>
          <strong>${n}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u672A\u5206\u985E</span>
          <strong>${d}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u30B8\u30E3\u30F3\u30EB\u6570</span>
          <strong>${r.length}<small>\u7A2E</small></strong>
        </div>
        <div class="genre-insight">
          <span>${v(l[0])}</span>
          <strong>${s}<small>%</small></strong>
        </div>
      </div>
    </div>
  `}function U(a){if(!a.length)return;let t=a.map(n=>A(n.date).replace(/^\d{4}\//,"")),r=F();Y("chart-monthly","line",{labels:t,datasets:[{label:"\u6B4C\u5531\u6570",data:a.map(n=>n.songs),borderColor:r.primaryStrong,backgroundColor:r.primary+"30",tension:.4,fill:!0,pointRadius:3,pointHoverRadius:5,borderWidth:2},{label:"\u6B4C\u67A0\u6570",data:a.map(n=>n.streams),borderColor:r.accent,backgroundColor:"transparent",tension:.4,fill:!1,pointRadius:2,pointHoverRadius:4,borderWidth:1.5,borderDash:[4,3],yAxisID:"y2"}]},{plugins:{legend:{display:!0,position:"top",align:"end",labels:{boxWidth:10,padding:10,font:{size:10}}}},scales:{y:{beginAtZero:!0},y2:{position:"right",beginAtZero:!0,grid:{drawOnChartArea:!1},ticks:{color:r.accentStrong,font:{size:10},precision:0}}}})}function X(a){let r=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].map(i=>`<div>${i}</div>`).join(""),n=a.map(i=>i.inRange?`<div class="heatmap-cell ${R(i.value)}" title="${i.iso}: ${i.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("");return`
    <div class="heatmap-flex">
      <div class="heatmap-row-labels">${r}</div>
      <div class="heatmap-wrap"><div class="heatmap">${n}</div></div>
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
  `}export{la as renderDashboard};
