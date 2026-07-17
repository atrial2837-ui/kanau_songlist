import{a as k,m as _,p as q}from"./chunk-3ZE2TGAY.js";import"./chunk-J3NRXPJ3.js";import{d as M,e as y,f as u}from"./chunk-WDLZ4FBB.js";import{F as B,G as P,H,K as F,a as g,c as p,p as x,q as j,r as L,s as D,t as T,u as R,v as Y}from"./chunk-LYEKSJR3.js";function na(){let{songs:a,streams:s}=y.data,r=[...a].sort((m,b)=>b.count-m.count).slice(0,5),i=r[0]?.count||1,d=s.slice(0,5),l=M(),t=D(a,l),n=g("#panel-dashboard"),o=Y(s,l),h=T(s).slice(-12),S=Math.max(1,...h.map(m=>m.songs)),$=`
    <div class="card dashboard-card dashboard-activity-card">
      <div class="card-title">${u("analytics")} \u4ECA\u6708\u306E\u6D3B\u52D5</div>
      <div class="dashboard-metric-list">
        <div class="activity-row">
          <span class="a-date">\u914D\u4FE1</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u6B4C\u67A0\u6570</span>
          <strong>${j(s,l)}\u56DE</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6B4C\u5531</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u7DCF\u6B4C\u5531\u6570</span>
          <strong>${L(s,l)}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u65B0\u66F2</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u521D\u62AB\u9732\u66F2\u6570</span>
          <strong>${t}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6700\u7D42</span>
          <span class="a-meta">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</span>
          <strong>${s[0]?`${B(s[0].date)}\u65E5\u524D`:"\u2014"}</strong>
        </div>
      </div>
    </div>
  `,f=`
    <div class="card dashboard-card dashboard-top-card">
      <div class="card-title">${u("rank")} TOP5 \u697D\u66F2</div>
      <div class="bar-list">
        ${r.length?r.map((m,b)=>w(m,b,i)).join(""):'<div class="empty-state">\u66F2\u30C7\u30FC\u30BF\u306A\u3057</div>'}
      </div>
    </div>
  `;n.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-overview-grid">
        ${$}
        ${f}
        <div class="card dashboard-card dashboard-genre-card">
          <div class="card-title">${u("chart")} \u30B8\u30E3\u30F3\u30EB\u5206\u5E03 <span class="pill">\u697D\u66F2\u6570</span></div>
          ${V(a)}
        </div>
        <div class="card dashboard-card dashboard-heatmap-card">
          <div class="card-title">${u("calendar")} \u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7 <span class="pill">\u76F4\u8FD11\u5E74</span></div>
          ${J(o)}
        </div>
        <div class="card dashboard-card dashboard-monthly-card">
          <div class="card-title">${u("music")} \u6708\u5225 \u6B4C\u5531\u6570 <span class="pill">\u76F4\u8FD112\u304B\u6708</span></div>
          ${W(h,S)}
        </div>
      </div>
      ${G()}
      ${I()}
      ${O(s,a,d)}
    </div>
  `,K(),A(s,a)}function I(){return`
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
  `}function N(a,s,e,r){let i=r.getFullYear(),d=r.getMonth();function l(c){let v=c.date instanceof Date?c.date:new Date(c.date);return e==="year"?v.getFullYear()===i:v.getFullYear()===i&&v.getMonth()===d}let t=a.filter(l);if(!t.length)return null;let n=t.length,o=t.reduce((c,v)=>c+(v.songs?.length||0),0),h=new Set;for(let c of t)for(let v of c.songs||[])v.key&&h.add(v.key);let S=h.size,$=new Map;for(let c of t)for(let v of c.songs||[]){if(!v.key)continue;let C=$.get(v.key)||{title:v.title,count:0};C.count++,$.set(v.key,C)}let f=null,m=0;for(let[,c]of $)c.count>m&&(m=c.count,f=c);let b=0;for(let c of s){if(!c.firstSung)continue;let v=c.firstSung instanceof Date?c.firstSung:new Date(c.firstSung);(e==="year"&&v.getFullYear()===i||e==="month"&&v.getFullYear()===i&&v.getMonth()===d)&&b++}return{streamCount:n,totalSongs:o,distinctCount:S,topSong:f,topCount:m,newSongCount:b}}function z(a,s){if(!a)return'<div class="empty-state">\u3053\u306E\u671F\u9593\u306E\u8A18\u9332\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>';let e=a.topSong?`${p(a.topSong.title)} <span class="recap-sub">(${a.topCount}\u56DE)</span>`:"\u2014";return`
    <div class="recap-period-label">${p(s)}</div>
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
      ${u("rank")} \u6700\u591A\u6B4C\u5531: ${e}
    </div>
  `}function A(a,s){let e=g("#dashboard-recap-body"),r=g("#recap-btn-year"),i=g("#recap-btn-month");if(!e)return;let d=M(),l="year";function t(o){l=o;let h=d.getFullYear(),S=d.getMonth(),f=o==="year"?`${h}\u5E74`:`${h}\u5E74 ${["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"][S]}`,m=N(a,s,o,d);e.innerHTML=z(m,f),r?.classList.toggle("primary",o==="year"),r?.classList.toggle("ghost",o!=="year"),i?.classList.toggle("primary",o==="month"),i?.classList.toggle("ghost",o!=="month")}t("year");let n=g("#dashboard-recap-toggle");n&&n.addEventListener("click",o=>{let h=o.target.closest("[data-recap-period]");h&&t(h.dataset.recapPeriod)})}function E(a){let s=Math.max(0,Math.floor(a)),e=Math.floor(s/3600),r=Math.floor(s%3600/60),i=s%60;return e>0?`${e}:${String(r).padStart(2,"0")}:${String(i).padStart(2,"0")}`:`${r}:${String(i).padStart(2,"0")}`}function G(){let a=k().slice(0,6);return a.length?`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">${u("play")} \u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${a.map((s,e)=>{let r=F(s.url),i=Math.floor((Date.now()-(s.updatedAt||0))/864e5),d=i<=0?"\u4ECA\u65E5":`${i}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${e}" title="${p(s.title||"")}">
            ${r?`<img class="dashboard-resume-thumb" src="${p(r)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${p(s.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">${u("time")} ${E(s.t)} \u304B\u3089 \u30FB ${d}</span>
          </button>`}).join("")}
      </div>
    </div>`:""}function K(){let a=g("#dashboard-resume-list");a&&(a.onclick=r=>{let i=r.target.closest("[data-resume-idx]");if(!i)return;let d=k()[Number(i.dataset.resumeIdx)];if(!d?.url)return;let l=null;d.channel!=null&&d.index!=null&&(l=(y.channelData?.combined?.streams||y.data?.streams||[]).find(n=>n.channel===d.channel&&n.index===d.index)||null),q(l||{url:d.url,title:d.title,isMv:!!d.isMv},d.t)});let s=g("#dashboard-resume-clear");s&&(s.onclick=()=>{try{localStorage.removeItem(WATCH_HISTORY_KEY)}catch{}g("#panel-dashboard .dashboard-resume-card")?.remove()});let e=g("#dashboard-resume-queue");e&&(e.onclick=()=>{let r=k(),i=y.channelData?.combined?.streams||y.data?.streams||[],d=r.map((l,t)=>{let n=l.channel!=null&&l.index!=null?i.find(o=>o.channel===l.channel&&o.index===l.index):null;return n?.url?{kind:"stream",key:`${n.channel}:${n.index}`,stream:n}:l.url?{kind:"mv",key:`history:${t}`,video:{url:l.url,title:l.title||"\u52D5\u753B",isMv:!!l.isMv}}:null}).filter(Boolean);d.length&&_({name:"\u8996\u8074\u5C65\u6B74",items:d,idx:0})})}function O(a,s,e){let r=s.filter(t=>t.daysSinceLast>=180).sort((t,n)=>n.count-t.count).slice(0,5),i=s.filter(t=>t.daysSinceLast!=null&&t.daysSinceLast<=30).sort((t,n)=>n.count-t.count).slice(0,5),d=x(a,"month",M()),l=x(a,"year",M());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">${u("rank")} \u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${d.length?d.slice(0,5).map((t,n)=>w(t,n,d[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">${u("rank")} \u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${l.length?l.slice(0,5).map((t,n)=>w(t,n,l[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">${u("time")} \u4E45\u3057\u3076\u308A\u5019\u88DC <span class="pill">180\u65E5\u4EE5\u4E0A</span></div>
      <div class="bar-list">
        ${r.length?r.map((t,n)=>w(t,n,r[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">${u("sparkle")} \u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A <span class="pill">30\u65E5\u4EE5\u5185</span></div>
      <div class="bar-list">
        ${i.length?i.map((t,n)=>w(t,n,i[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">${u("video")} \u76F4\u8FD1\u306E\u6B4C\u67A0 <span class="pill">\u6700\u65B0${e.length}\u4EF6</span></div>
      ${e.map(t=>`
        <div class="activity-row">
          <span class="a-date">${P(t.date)}</span>
          <span class="a-title">${t.url?`<a href="${p(t.url)}" target="_blank" rel="noopener">${p(t.title||"\u914D\u4FE1")}</a>`:p(t.title)}</span>
          <span class="a-meta">${u("mic")} ${t.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function w(a,s,e){let r=Math.round(a.count/e*100);return`
    <div class="bar-row clickable" data-songkey="${p(a.key)}" data-songtitle="${p(a.title)}" data-songartist="${p(a.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="bar-rank">${s+1}</div>
      <div class="bar-content">
        <div class="bar-label">${p(a.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${p(a.artist)}</span></div>
        <div class="bar-bar" style="width:${r}%;"></div>
      </div>
      <div class="bar-value">${a.count}</div>
    </div>
  `}function V(a){let s=new Map;for(let n of a){let o=n.genre||n.genreText||"\u672A\u5206\u985E";!o||o==="\u672A\u5206\u985E"||s.set(o,(s.get(o)||0)+1)}let e=Array.from(s.entries()).sort((n,o)=>o[1]-n[1]),r=e.reduce((n,[,o])=>n+o,0);if(!e.length)return'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>';let i=a.length||0,d=Math.max(0,i-r),l=e[0],t=i?Math.round(l[1]/i*100):0;return`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${e.map(([n,o],h)=>`
          <span class="genre-meter-segment g${h%8}" style="width:${Math.max(3,o/r*100)}%" title="${p(n)}: ${o}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${e.slice(0,8).map(([n,o],h)=>`
          <div class="genre-row">
            <span class="genre-dot g${h%8}"></span>
            <span class="genre-name">${p(n)}</span>
            <strong>${o}</strong>
          </div>
        `).join("")}
      </div>
      <div class="genre-insights" aria-label="\u30B8\u30E3\u30F3\u30EB\u96C6\u8A08">
        <div class="genre-insight">
          <span>\u5206\u985E\u6E08\u307F</span>
          <strong>${r}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u672A\u5206\u985E</span>
          <strong>${d}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u30B8\u30E3\u30F3\u30EB\u6570</span>
          <strong>${e.length}<small>\u7A2E</small></strong>
        </div>
        <div class="genre-insight">
          <span>${p(l[0])}</span>
          <strong>${t}<small>%</small></strong>
        </div>
      </div>
    </div>
  `}function W(a,s){return a.length?`
    <div class="monthly-bars" aria-label="\u6708\u5225\u6B4C\u5531\u6570">
      ${a.map(e=>{let r=Math.max(5,Math.round(e.songs/s*100));return`
          <div class="month-bar" title="${H(e.date)}: ${e.songs}\u66F2 / ${e.streams}\u67A0">
            <div class="month-bar-track"><span style="height:${r}%"></span></div>
            <div class="month-label">${H(e.date).replace(/^\d{4}\//,"")}</div>
            <strong>${e.songs}</strong>
          </div>
        `}).join("")}
    </div>
  `:'<div class="empty-state">\u6708\u5225\u30C7\u30FC\u30BF\u306A\u3057</div>'}function J(a){let e=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].map(i=>`<div>${i}</div>`).join(""),r=a.map(i=>i.inRange?`<div class="heatmap-cell ${R(i.value)}" title="${i.iso}: ${i.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("");return`
    <div class="heatmap-flex">
      <div class="heatmap-row-labels">${e}</div>
      <div class="heatmap-wrap"><div class="heatmap">${r}</div></div>
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
  `}export{na as renderDashboard};
