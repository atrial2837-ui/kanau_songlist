import{d as S,e as y}from"./chunk-JT7WCFD3.js";import{F as Y,G as B,H as x,K as P,Q as u,a as g,c as p,p as k,q as j,r as L,s as D,t as T,u as _,v as R}from"./chunk-I26RRBMD.js";function ta(){let{songs:a,streams:e}=y.data,d=[...a].sort((m,b)=>b.count-m.count).slice(0,5),t=d[0]?.count||1,s=e.slice(0,5),i=S(),n=D(a,i),o=g("#panel-dashboard"),v=R(e,i),h=T(e).slice(-12),w=Math.max(1,...h.map(m=>m.songs)),$=`
    <div class="card dashboard-card dashboard-activity-card">
      <div class="card-title">${u("analytics")} \u4ECA\u6708\u306E\u6D3B\u52D5</div>
      <div class="dashboard-metric-list">
        <div class="activity-row">
          <span class="a-date">\u914D\u4FE1</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u6B4C\u67A0\u6570</span>
          <strong>${j(e,i)}\u56DE</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6B4C\u5531</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u7DCF\u6B4C\u5531\u6570</span>
          <strong>${L(e,i)}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u65B0\u66F2</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u521D\u62AB\u9732\u66F2\u6570</span>
          <strong>${n}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6700\u7D42</span>
          <span class="a-meta">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</span>
          <strong>${e[0]?`${Y(e[0].date)}\u65E5\u524D`:"\u2014"}</strong>
        </div>
      </div>
    </div>
  `,f=`
    <div class="card dashboard-card dashboard-top-card">
      <div class="card-title">${u("rank")} TOP5 \u697D\u66F2</div>
      <div class="bar-list">
        ${d.length?d.map((m,b)=>M(m,b,t)).join(""):'<div class="empty-state">\u66F2\u30C7\u30FC\u30BF\u306A\u3057</div>'}
      </div>
    </div>
  `;o.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      ${O()}
      ${I()}
      <div class="dashboard-overview-grid">
        ${$}
        ${f}
        <div class="card dashboard-card dashboard-genre-card">
          <div class="card-title">${u("chart")} \u30B8\u30E3\u30F3\u30EB\u5206\u5E03 <span class="pill">\u697D\u66F2\u6570</span></div>
          ${V(a)}
        </div>
        <div class="card dashboard-card dashboard-heatmap-card">
          <div class="card-title">${u("calendar")} \u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7 <span class="pill">\u76F4\u8FD11\u5E74</span></div>
          ${J(v)}
        </div>
        <div class="card dashboard-card dashboard-monthly-card">
          <div class="card-title">${u("music")} \u6708\u5225 \u6B4C\u5531\u6570 <span class="pill">\u76F4\u8FD112\u304B\u6708</span></div>
          ${G(h,w)}
        </div>
      </div>
      ${K(e,a,s)}
    </div>
  `,E(),z(e,a)}function I(){return`
    <div class="card dashboard-card dashboard-recap-card" id="dashboard-recap-card">
      <div class="card-title">
        ${u("chart")} \u304B\u306A\u3046\u306E\u307E\u3068\u3081
        <span class="dashboard-recap-toggle" id="dashboard-recap-toggle">
          <button class="btn ghost" type="button" data-recap-period="year" id="recap-btn-year">\u4ECA\u5E74</button>
          <button class="btn ghost" type="button" data-recap-period="month" id="recap-btn-month">\u4ECA\u6708</button>
        </span>
      </div>
      <div id="dashboard-recap-body"></div>
    </div>
  `}function N(a,e,r,d){let t=d.getFullYear(),s=d.getMonth();function i(l){let c=l.date instanceof Date?l.date:new Date(l.date);return r==="year"?c.getFullYear()===t:c.getFullYear()===t&&c.getMonth()===s}let n=a.filter(i);if(!n.length)return null;let o=n.length,v=n.reduce((l,c)=>l+(c.songs?.length||0),0),h=new Set;for(let l of n)for(let c of l.songs||[])c.key&&h.add(c.key);let w=h.size,$=new Map;for(let l of n)for(let c of l.songs||[]){if(!c.key)continue;let C=$.get(c.key)||{title:c.title,count:0};C.count++,$.set(c.key,C)}let f=null,m=0;for(let[,l]of $)l.count>m&&(m=l.count,f=l);let b=0;for(let l of e){if(!l.firstSung)continue;let c=l.firstSung instanceof Date?l.firstSung:new Date(l.firstSung);(r==="year"&&c.getFullYear()===t||r==="month"&&c.getFullYear()===t&&c.getMonth()===s)&&b++}return{streamCount:o,totalSongs:v,distinctCount:w,topSong:f,topCount:m,newSongCount:b}}function q(a,e){if(!a)return'<div class="empty-state">\u3053\u306E\u671F\u9593\u306E\u8A18\u9332\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>';let r=a.topSong?`${p(a.topSong.title)} <span class="recap-sub">(${a.topCount}\u56DE)</span>`:"\u2014";return`
    <div class="recap-period-label">${p(e)}</div>
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
      ${u("rank")} \u6700\u591A\u6B4C\u5531: ${r}
    </div>
  `}function z(a,e){let r=g("#dashboard-recap-body"),d=g("#recap-btn-year"),t=g("#recap-btn-month");if(!r)return;let s=S(),i="year";function n(v){i=v;let h=s.getFullYear(),w=s.getMonth(),f=v==="year"?`${h}\u5E74`:`${h}\u5E74 ${["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"][w]}`,m=N(a,e,v,s);r.innerHTML=q(m,f),d?.classList.toggle("primary",v==="year"),d?.classList.toggle("ghost",v!=="year"),t?.classList.toggle("primary",v==="month"),t?.classList.toggle("ghost",v!=="month")}n("year");let o=g("#dashboard-recap-toggle");o&&o.addEventListener("click",v=>{let h=v.target.closest("[data-recap-period]");h&&n(h.dataset.recapPeriod)})}var F="kanau-watch-history-v1";function H(){try{return JSON.parse(localStorage.getItem(F)||"[]")}catch{return[]}}function A(a){let e=Math.max(0,Math.floor(a)),r=Math.floor(e/3600),d=Math.floor(e%3600/60),t=e%60;return r>0?`${r}:${String(d).padStart(2,"0")}:${String(t).padStart(2,"0")}`:`${d}:${String(t).padStart(2,"0")}`}function O(){let a=H().slice(0,6);return a.length?`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">${u("play")} \u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${a.map((e,r)=>{let d=P(e.url),t=Math.floor((Date.now()-(e.updatedAt||0))/864e5),s=t<=0?"\u4ECA\u65E5":`${t}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${r}" title="${p(e.title||"")}">
            ${d?`<img class="dashboard-resume-thumb" src="${p(d)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${p(e.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">${u("time")} ${A(e.t)} \u304B\u3089 \u30FB ${s}</span>
          </button>`}).join("")}
      </div>
    </div>`:""}function E(){let a=g("#dashboard-resume-list");a&&(a.onclick=d=>{let t=d.target.closest("[data-resume-idx]");if(!t)return;let s=H()[Number(t.dataset.resumeIdx)];if(!s?.url)return;let i=null;s.channel!=null&&s.index!=null&&(i=(y.channelData?.combined?.streams||y.data?.streams||[]).find(o=>o.channel===s.channel&&o.index===s.index)||null),window.__openStreamViewer?.(i||{url:s.url,title:s.title,isMv:!!s.isMv},s.t)});let e=g("#dashboard-resume-clear");e&&(e.onclick=()=>{try{localStorage.removeItem(F)}catch{}g("#panel-dashboard .dashboard-resume-card")?.remove()});let r=g("#dashboard-resume-queue");r&&(r.onclick=()=>{let d=H(),t=y.channelData?.combined?.streams||y.data?.streams||[],s=d.map((i,n)=>{let o=i.channel!=null&&i.index!=null?t.find(v=>v.channel===i.channel&&v.index===i.index):null;return o?.url?{kind:"stream",key:`${o.channel}:${o.index}`,stream:o}:i.url?{kind:"mv",key:`history:${n}`,video:{url:i.url,title:i.title||"\u52D5\u753B",isMv:!!i.isMv}}:null}).filter(Boolean);s.length&&window.__playMyListInViewer?.({name:"\u8996\u8074\u5C65\u6B74",items:s,idx:0})})}function K(a,e,r){let d=e.filter(n=>n.daysSinceLast>=180).sort((n,o)=>o.count-n.count).slice(0,5),t=e.filter(n=>n.daysSinceLast!=null&&n.daysSinceLast<=30).sort((n,o)=>o.count-n.count).slice(0,5),s=k(a,"month",S()),i=k(a,"year",S());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">${u("rank")} \u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${s.length?s.slice(0,5).map((n,o)=>M(n,o,s[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">${u("rank")} \u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${i.length?i.slice(0,5).map((n,o)=>M(n,o,i[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">${u("time")} \u4E45\u3057\u3076\u308A\u5019\u88DC <span class="pill">180\u65E5\u4EE5\u4E0A</span></div>
      <div class="bar-list">
        ${d.length?d.map((n,o)=>M(n,o,d[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">${u("sparkle")} \u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A <span class="pill">30\u65E5\u4EE5\u5185</span></div>
      <div class="bar-list">
        ${t.length?t.map((n,o)=>M(n,o,t[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">${u("video")} \u76F4\u8FD1\u306E\u6B4C\u67A0 <span class="pill">\u6700\u65B0${r.length}\u4EF6</span></div>
      ${r.map(n=>`
        <div class="activity-row">
          <span class="a-date">${B(n.date)}</span>
          <span class="a-title">${n.url?`<a href="${p(n.url)}" target="_blank" rel="noopener">${p(n.title||"\u914D\u4FE1")}</a>`:p(n.title)}</span>
          <span class="a-meta">${u("mic")} ${n.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function M(a,e,r){let d=Math.round(a.count/r*100);return`
    <div class="bar-row clickable" data-songkey="${p(a.key)}" data-songtitle="${p(a.title)}" data-songartist="${p(a.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="bar-rank">${e+1}</div>
      <div class="bar-content">
        <div class="bar-label">${p(a.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${p(a.artist)}</span></div>
        <div class="bar-bar" style="width:${d}%;"></div>
      </div>
      <div class="bar-value">${a.count}</div>
    </div>
  `}function V(a){let e=new Map;for(let t of a){let s=t.genre||t.genreText||"\u672A\u5206\u985E";!s||s==="\u672A\u5206\u985E"||e.set(s,(e.get(s)||0)+1)}let r=Array.from(e.entries()).sort((t,s)=>s[1]-t[1]),d=r.reduce((t,[,s])=>t+s,0);return r.length?`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${r.map(([t,s],i)=>`
          <span class="genre-meter-segment g${i%8}" style="width:${Math.max(3,s/d*100)}%" title="${p(t)}: ${s}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${r.slice(0,8).map(([t,s],i)=>`
          <div class="genre-row">
            <span class="genre-dot g${i%8}"></span>
            <span class="genre-name">${p(t)}</span>
            <strong>${s}</strong>
          </div>
        `).join("")}
      </div>
    </div>
  `:'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>'}function G(a,e){return a.length?`
    <div class="monthly-bars" aria-label="\u6708\u5225\u6B4C\u5531\u6570">
      ${a.map(r=>{let d=Math.max(5,Math.round(r.songs/e*100));return`
          <div class="month-bar" title="${x(r.date)}: ${r.songs}\u66F2 / ${r.streams}\u67A0">
            <div class="month-bar-track"><span style="height:${d}%"></span></div>
            <div class="month-label">${x(r.date).replace(/^\d{4}\//,"")}</div>
            <strong>${r.songs}</strong>
          </div>
        `}).join("")}
    </div>
  `:'<div class="empty-state">\u6708\u5225\u30C7\u30FC\u30BF\u306A\u3057</div>'}function J(a){let r=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].map(t=>`<div>${t}</div>`).join(""),d=a.map(t=>t.inRange?`<div class="heatmap-cell ${_(t.value)}" title="${t.iso}: ${t.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("");return`
    <div class="heatmap-flex">
      <div class="heatmap-row-labels">${r}</div>
      <div class="heatmap-wrap"><div class="heatmap">${d}</div></div>
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
  `}export{ta as renderDashboard};
