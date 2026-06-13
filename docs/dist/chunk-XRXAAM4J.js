import{d as u,e as o}from"./chunk-JT7WCFD3.js";import{D as j,E as _,F as g,I as T,a as v,d as c,o as $,p as w,q as M,r as x,s as S,t as k,u as H}from"./chunk-PRFEE4R6.js";function J(){let{songs:e,streams:t}=o.data,n=[...e].sort((h,b)=>b.count-h.count).slice(0,5),s=n[0]?.count||1,a=t.slice(0,5),r=u(),d=x(e,r),l=v("#panel-dashboard"),m=H(t,r),y=S(t).slice(-12),L=Math.max(1,...y.map(h=>h.songs)),I=`
    <div class="card dashboard-card dashboard-activity-card">
      <div class="card-title">\u{1F4C8} \u4ECA\u6708\u306E\u6D3B\u52D5</div>
      <div class="dashboard-metric-list">
        <div class="activity-row">
          <span class="a-date">\u914D\u4FE1</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u6B4C\u67A0\u6570</span>
          <strong>${w(t,r)}\u56DE</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6B4C\u5531</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u7DCF\u6B4C\u5531\u6570</span>
          <strong>${M(t,r)}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u65B0\u66F2</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u521D\u62AB\u9732\u66F2\u6570</span>
          <strong>${d}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6700\u7D42</span>
          <span class="a-meta">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</span>
          <strong>${t[0]?`${j(t[0].date)}\u65E5\u524D`:"\u2014"}</strong>
        </div>
      </div>
    </div>
  `,R=`
    <div class="card dashboard-card dashboard-top-card">
      <div class="card-title">\u{1F3C6} TOP5 \u697D\u66F2</div>
      <div class="bar-list">
        ${n.length?n.map((h,b)=>p(h,b,s)).join(""):'<div class="empty-state">\u66F2\u30C7\u30FC\u30BF\u306A\u3057</div>'}
      </div>
    </div>
  `;l.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      ${B()}
      <div class="dashboard-main-stack">
        <div class="dashboard-lead">
          ${I}
          ${R}
        </div>
        <div class="card dashboard-card dashboard-monthly-card">
          <div class="card-title">\u{1F3B6} \u6708\u5225 \u6B4C\u5531\u6570 <span class="pill">\u76F4\u8FD112\u304B\u6708</span></div>
          ${N(y,L)}
        </div>
      </div>
      <div class="card dashboard-card dashboard-side-card">
        <section class="dashboard-side-section">
          <div class="card-title">\u{1F3B8} \u30B8\u30E3\u30F3\u30EB\u5206\u5E03 <span class="pill">\u697D\u66F2\u6570</span></div>
          ${C(e)}
        </section>
        <section class="dashboard-side-section">
          <div class="card-title">\u{1F4C5} \u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7 <span class="pill">\u76F4\u8FD11\u5E74</span></div>
          ${O(m)}
        </section>
      </div>
      ${A(t,e,a)}
    </div>
  `,P()}var D="kanau-watch-history-v1";function f(){try{return JSON.parse(localStorage.getItem(D)||"[]")}catch{return[]}}function q(e){let t=Math.max(0,Math.floor(e)),i=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60;return i>0?`${i}:${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${n}:${String(s).padStart(2,"0")}`}function B(){let e=f().slice(0,6);return e.length?`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">\u23EF \u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${e.map((t,i)=>{let n=T(t.url),s=Math.floor((Date.now()-(t.updatedAt||0))/864e5),a=s<=0?"\u4ECA\u65E5":`${s}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${i}" title="${c(t.title||"")}">
            ${n?`<img class="dashboard-resume-thumb" src="${c(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${c(t.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">\u23F1 ${q(t.t)} \u304B\u3089 \u30FB ${a}</span>
          </button>`}).join("")}
      </div>
    </div>`:""}function P(){let e=v("#dashboard-resume-list");e&&(e.onclick=n=>{let s=n.target.closest("[data-resume-idx]");if(!s)return;let a=f()[Number(s.dataset.resumeIdx)];if(!a?.url)return;let r=null;a.channel!=null&&a.index!=null&&(r=(o.channelData?.combined?.streams||o.data?.streams||[]).find(l=>l.channel===a.channel&&l.index===a.index)||null),window.__openStreamViewer?.(r||{url:a.url,title:a.title,isMv:!!a.isMv},a.t)});let t=v("#dashboard-resume-clear");t&&(t.onclick=()=>{try{localStorage.removeItem(D)}catch{}v("#panel-dashboard .dashboard-resume-card")?.remove()});let i=v("#dashboard-resume-queue");i&&(i.onclick=()=>{let n=f(),s=o.channelData?.combined?.streams||o.data?.streams||[],a=n.map((r,d)=>{let l=r.channel!=null&&r.index!=null?s.find(m=>m.channel===r.channel&&m.index===r.index):null;return l?.url?{kind:"stream",key:`${l.channel}:${l.index}`,stream:l}:r.url?{kind:"mv",key:`history:${d}`,video:{url:r.url,title:r.title||"\u52D5\u753B",isMv:!!r.isMv}}:null}).filter(Boolean);a.length&&window.__playMyListInViewer?.({name:"\u8996\u8074\u5C65\u6B74",items:a,idx:0})})}function A(e,t,i){let n=t.filter(d=>d.daysSinceLast>=180).sort((d,l)=>l.count-d.count).slice(0,5),s=t.filter(d=>d.daysSinceLast!=null&&d.daysSinceLast<=30).sort((d,l)=>l.count-d.count).slice(0,5),a=$(e,"month",u()),r=$(e,"year",u());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">\u{1F5F3} \u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${a.length?a.slice(0,5).map((d,l)=>p(d,l,a[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">\u{1F5F3} \u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${r.length?r.slice(0,5).map((d,l)=>p(d,l,r[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">\u{1F4A4} \u4E45\u3057\u3076\u308A\u5019\u88DC <span class="pill">180\u65E5\u4EE5\u4E0A</span></div>
      <div class="bar-list">
        ${n.length?n.map((d,l)=>p(d,l,n[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">\u2728 \u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A <span class="pill">30\u65E5\u4EE5\u5185</span></div>
      <div class="bar-list">
        ${s.length?s.map((d,l)=>p(d,l,s[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">\u{1F4FA} \u76F4\u8FD1\u306E\u6B4C\u67A0 <span class="pill">\u6700\u65B0${i.length}\u4EF6</span></div>
      ${i.map(d=>`
        <div class="activity-row">
          <span class="a-date">${_(d.date)}</span>
          <span class="a-title">${d.url?`<a href="${c(d.url)}" target="_blank" rel="noopener">${c(d.title||"\u914D\u4FE1")}</a>`:c(d.title)}</span>
          <span class="a-meta">\u{1F3A4} ${d.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function p(e,t,i){let n=Math.round(e.count/i*100);return`
    <div class="bar-row clickable" data-songkey="${c(e.key)}" data-songtitle="${c(e.title)}" data-songartist="${c(e.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="bar-rank">${t+1}</div>
      <div class="bar-content">
        <div class="bar-label">${c(e.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${c(e.artist)}</span></div>
        <div class="bar-bar" style="width:${n}%;"></div>
      </div>
      <div class="bar-value">${e.count}</div>
    </div>
  `}function C(e){let t=new Map;for(let s of e){let a=s.genre||s.genreText||"\u672A\u5206\u985E";!a||a==="\u672A\u5206\u985E"||t.set(a,(t.get(a)||0)+1)}let i=Array.from(t.entries()).sort((s,a)=>a[1]-s[1]),n=i.reduce((s,[,a])=>s+a,0);return i.length?`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${i.map(([s,a],r)=>`
          <span class="genre-meter-segment g${r%8}" style="width:${Math.max(3,a/n*100)}%" title="${c(s)}: ${a}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${i.slice(0,8).map(([s,a],r)=>`
          <div class="genre-row">
            <span class="genre-dot g${r%8}"></span>
            <span class="genre-name">${c(s)}</span>
            <strong>${a}</strong>
          </div>
        `).join("")}
      </div>
    </div>
  `:'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>'}function N(e,t){return e.length?`
    <div class="monthly-bars" aria-label="\u6708\u5225\u6B4C\u5531\u6570">
      ${e.map(i=>{let n=Math.max(5,Math.round(i.songs/t*100));return`
          <div class="month-bar" title="${g(i.date)}: ${i.songs}\u66F2 / ${i.streams}\u67A0">
            <div class="month-bar-track"><span style="height:${n}%"></span></div>
            <div class="month-label">${g(i.date).replace(/^\d{4}\//,"")}</div>
            <strong>${i.songs}</strong>
          </div>
        `}).join("")}
    </div>
  `:'<div class="empty-state">\u6708\u5225\u30C7\u30FC\u30BF\u306A\u3057</div>'}function O(e){let i=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].map(s=>`<div>${s}</div>`).join(""),n=e.map(s=>s.inRange?`<div class="heatmap-cell ${k(s.value)}" title="${s.iso}: ${s.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("");return`
    <div class="heatmap-flex">
      <div class="heatmap-row-labels">${i}</div>
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
  `}export{J as renderDashboard};
