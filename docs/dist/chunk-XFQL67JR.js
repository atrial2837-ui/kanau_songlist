import{d as S,e as $}from"./chunk-JT7WCFD3.js";import{E as R,F as Y,G as k,J as B,a as m,c as u,p as M,q as C,r as j,s as L,t as D,u as T,v as _}from"./chunk-T4BEBXYH.js";function Z(){let{songs:a,streams:e}=$.data,i=[...a].sort((h,g)=>g.count-h.count).slice(0,5),t=i[0]?.count||1,s=e.slice(0,5),r=S(),n=L(a,r),o=m("#panel-dashboard"),v=_(e,r),p=D(e).slice(-12),y=Math.max(1,...p.map(h=>h.songs)),b=`
    <div class="card dashboard-card dashboard-activity-card">
      <div class="card-title">\u{1F4C8} \u4ECA\u6708\u306E\u6D3B\u52D5</div>
      <div class="dashboard-metric-list">
        <div class="activity-row">
          <span class="a-date">\u914D\u4FE1</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u6B4C\u67A0\u6570</span>
          <strong>${C(e,r)}\u56DE</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6B4C\u5531</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u7DCF\u6B4C\u5531\u6570</span>
          <strong>${j(e,r)}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u65B0\u66F2</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u521D\u62AB\u9732\u66F2\u6570</span>
          <strong>${n}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6700\u7D42</span>
          <span class="a-meta">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</span>
          <strong>${e[0]?`${R(e[0].date)}\u65E5\u524D`:"\u2014"}</strong>
        </div>
      </div>
    </div>
  `,f=`
    <div class="card dashboard-card dashboard-top-card">
      <div class="card-title">\u{1F3C6} TOP5 \u697D\u66F2</div>
      <div class="bar-list">
        ${i.length?i.map((h,g)=>w(h,g,t)).join(""):'<div class="empty-state">\u66F2\u30C7\u30FC\u30BF\u306A\u3057</div>'}
      </div>
    </div>
  `;o.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      ${A()}
      ${F()}
      <div class="dashboard-main-stack">
        <div class="dashboard-lead">
          ${b}
          ${f}
        </div>
        <div class="card dashboard-card dashboard-monthly-card">
          <div class="card-title">\u{1F3B6} \u6708\u5225 \u6B4C\u5531\u6570 <span class="pill">\u76F4\u8FD112\u304B\u6708</span></div>
          ${V(p,y)}
        </div>
      </div>
      <div class="card dashboard-card dashboard-side-card">
        <section class="dashboard-side-section">
          <div class="card-title">\u{1F3B8} \u30B8\u30E3\u30F3\u30EB\u5206\u5E03 <span class="pill">\u697D\u66F2\u6570</span></div>
          ${K(a)}
        </section>
        <section class="dashboard-side-section">
          <div class="card-title">\u{1F4C5} \u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7 <span class="pill">\u76F4\u8FD11\u5E74</span></div>
          ${G(v)}
        </section>
      </div>
      ${E(e,a,s)}
    </div>
  `,O(),q(e,a)}function F(){return`
    <div class="card dashboard-card dashboard-recap-card" id="dashboard-recap-card">
      <div class="card-title">
        \u{1F4CA} \u304B\u306A\u3046\u306E\u307E\u3068\u3081
        <span class="dashboard-recap-toggle" id="dashboard-recap-toggle">
          <button class="btn ghost" type="button" data-recap-period="year" id="recap-btn-year">\u4ECA\u5E74</button>
          <button class="btn ghost" type="button" data-recap-period="month" id="recap-btn-month">\u4ECA\u6708</button>
        </span>
      </div>
      <div id="dashboard-recap-body"></div>
    </div>
  `}function I(a,e,d,i){let t=i.getFullYear(),s=i.getMonth();function r(l){let c=l.date instanceof Date?l.date:new Date(l.date);return d==="year"?c.getFullYear()===t:c.getFullYear()===t&&c.getMonth()===s}let n=a.filter(r);if(!n.length)return null;let o=n.length,v=n.reduce((l,c)=>l+(c.songs?.length||0),0),p=new Set;for(let l of n)for(let c of l.songs||[])c.key&&p.add(c.key);let y=p.size,b=new Map;for(let l of n)for(let c of l.songs||[]){if(!c.key)continue;let H=b.get(c.key)||{title:c.title,count:0};H.count++,b.set(c.key,H)}let f=null,h=0;for(let[,l]of b)l.count>h&&(h=l.count,f=l);let g=0;for(let l of e){if(!l.firstSung)continue;let c=l.firstSung instanceof Date?l.firstSung:new Date(l.firstSung);(d==="year"&&c.getFullYear()===t||d==="month"&&c.getFullYear()===t&&c.getMonth()===s)&&g++}return{streamCount:o,totalSongs:v,distinctCount:y,topSong:f,topCount:h,newSongCount:g}}function N(a,e){if(!a)return'<div class="empty-state">\u3053\u306E\u671F\u9593\u306E\u8A18\u9332\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>';let d=a.topSong?`${u(a.topSong.title)} <span class="recap-sub">(${a.topCount}\u56DE)</span>`:"\u2014";return`
    <div class="recap-period-label">${u(e)}</div>
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
      \u{1F3C6} \u6700\u591A\u6B4C\u5531: ${d}
    </div>
  `}function q(a,e){let d=m("#dashboard-recap-body"),i=m("#recap-btn-year"),t=m("#recap-btn-month");if(!d)return;let s=S(),r="year";function n(v){r=v;let p=s.getFullYear(),y=s.getMonth(),f=v==="year"?`${p}\u5E74`:`${p}\u5E74 ${["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"][y]}`,h=I(a,e,v,s);d.innerHTML=N(h,f),i?.classList.toggle("primary",v==="year"),i?.classList.toggle("ghost",v!=="year"),t?.classList.toggle("primary",v==="month"),t?.classList.toggle("ghost",v!=="month")}n("year");let o=m("#dashboard-recap-toggle");o&&o.addEventListener("click",v=>{let p=v.target.closest("[data-recap-period]");p&&n(p.dataset.recapPeriod)})}var P="kanau-watch-history-v1";function x(){try{return JSON.parse(localStorage.getItem(P)||"[]")}catch{return[]}}function z(a){let e=Math.max(0,Math.floor(a)),d=Math.floor(e/3600),i=Math.floor(e%3600/60),t=e%60;return d>0?`${d}:${String(i).padStart(2,"0")}:${String(t).padStart(2,"0")}`:`${i}:${String(t).padStart(2,"0")}`}function A(){let a=x().slice(0,6);return a.length?`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">\u23EF \u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${a.map((e,d)=>{let i=B(e.url),t=Math.floor((Date.now()-(e.updatedAt||0))/864e5),s=t<=0?"\u4ECA\u65E5":`${t}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${d}" title="${u(e.title||"")}">
            ${i?`<img class="dashboard-resume-thumb" src="${u(i)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${u(e.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">\u23F1 ${z(e.t)} \u304B\u3089 \u30FB ${s}</span>
          </button>`}).join("")}
      </div>
    </div>`:""}function O(){let a=m("#dashboard-resume-list");a&&(a.onclick=i=>{let t=i.target.closest("[data-resume-idx]");if(!t)return;let s=x()[Number(t.dataset.resumeIdx)];if(!s?.url)return;let r=null;s.channel!=null&&s.index!=null&&(r=($.channelData?.combined?.streams||$.data?.streams||[]).find(o=>o.channel===s.channel&&o.index===s.index)||null),window.__openStreamViewer?.(r||{url:s.url,title:s.title,isMv:!!s.isMv},s.t)});let e=m("#dashboard-resume-clear");e&&(e.onclick=()=>{try{localStorage.removeItem(P)}catch{}m("#panel-dashboard .dashboard-resume-card")?.remove()});let d=m("#dashboard-resume-queue");d&&(d.onclick=()=>{let i=x(),t=$.channelData?.combined?.streams||$.data?.streams||[],s=i.map((r,n)=>{let o=r.channel!=null&&r.index!=null?t.find(v=>v.channel===r.channel&&v.index===r.index):null;return o?.url?{kind:"stream",key:`${o.channel}:${o.index}`,stream:o}:r.url?{kind:"mv",key:`history:${n}`,video:{url:r.url,title:r.title||"\u52D5\u753B",isMv:!!r.isMv}}:null}).filter(Boolean);s.length&&window.__playMyListInViewer?.({name:"\u8996\u8074\u5C65\u6B74",items:s,idx:0})})}function E(a,e,d){let i=e.filter(n=>n.daysSinceLast>=180).sort((n,o)=>o.count-n.count).slice(0,5),t=e.filter(n=>n.daysSinceLast!=null&&n.daysSinceLast<=30).sort((n,o)=>o.count-n.count).slice(0,5),s=M(a,"month",S()),r=M(a,"year",S());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">\u{1F5F3} \u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${s.length?s.slice(0,5).map((n,o)=>w(n,o,s[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">\u{1F5F3} \u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${r.length?r.slice(0,5).map((n,o)=>w(n,o,r[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">\u{1F4A4} \u4E45\u3057\u3076\u308A\u5019\u88DC <span class="pill">180\u65E5\u4EE5\u4E0A</span></div>
      <div class="bar-list">
        ${i.length?i.map((n,o)=>w(n,o,i[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">\u2728 \u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A <span class="pill">30\u65E5\u4EE5\u5185</span></div>
      <div class="bar-list">
        ${t.length?t.map((n,o)=>w(n,o,t[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">\u{1F4FA} \u76F4\u8FD1\u306E\u6B4C\u67A0 <span class="pill">\u6700\u65B0${d.length}\u4EF6</span></div>
      ${d.map(n=>`
        <div class="activity-row">
          <span class="a-date">${Y(n.date)}</span>
          <span class="a-title">${n.url?`<a href="${u(n.url)}" target="_blank" rel="noopener">${u(n.title||"\u914D\u4FE1")}</a>`:u(n.title)}</span>
          <span class="a-meta">\u{1F3A4} ${n.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function w(a,e,d){let i=Math.round(a.count/d*100);return`
    <div class="bar-row clickable" data-songkey="${u(a.key)}" data-songtitle="${u(a.title)}" data-songartist="${u(a.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="bar-rank">${e+1}</div>
      <div class="bar-content">
        <div class="bar-label">${u(a.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${u(a.artist)}</span></div>
        <div class="bar-bar" style="width:${i}%;"></div>
      </div>
      <div class="bar-value">${a.count}</div>
    </div>
  `}function K(a){let e=new Map;for(let t of a){let s=t.genre||t.genreText||"\u672A\u5206\u985E";!s||s==="\u672A\u5206\u985E"||e.set(s,(e.get(s)||0)+1)}let d=Array.from(e.entries()).sort((t,s)=>s[1]-t[1]),i=d.reduce((t,[,s])=>t+s,0);return d.length?`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${d.map(([t,s],r)=>`
          <span class="genre-meter-segment g${r%8}" style="width:${Math.max(3,s/i*100)}%" title="${u(t)}: ${s}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${d.slice(0,8).map(([t,s],r)=>`
          <div class="genre-row">
            <span class="genre-dot g${r%8}"></span>
            <span class="genre-name">${u(t)}</span>
            <strong>${s}</strong>
          </div>
        `).join("")}
      </div>
    </div>
  `:'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>'}function V(a,e){return a.length?`
    <div class="monthly-bars" aria-label="\u6708\u5225\u6B4C\u5531\u6570">
      ${a.map(d=>{let i=Math.max(5,Math.round(d.songs/e*100));return`
          <div class="month-bar" title="${k(d.date)}: ${d.songs}\u66F2 / ${d.streams}\u67A0">
            <div class="month-bar-track"><span style="height:${i}%"></span></div>
            <div class="month-label">${k(d.date).replace(/^\d{4}\//,"")}</div>
            <strong>${d.songs}</strong>
          </div>
        `}).join("")}
    </div>
  `:'<div class="empty-state">\u6708\u5225\u30C7\u30FC\u30BF\u306A\u3057</div>'}function G(a){let d=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].map(t=>`<div>${t}</div>`).join(""),i=a.map(t=>t.inRange?`<div class="heatmap-cell ${T(t.value)}" title="${t.iso}: ${t.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("");return`
    <div class="heatmap-flex">
      <div class="heatmap-row-labels">${d}</div>
      <div class="heatmap-wrap"><div class="heatmap">${i}</div></div>
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
  `}export{Z as renderDashboard};
