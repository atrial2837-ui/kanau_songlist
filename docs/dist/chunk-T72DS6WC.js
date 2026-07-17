import{d as w,e as y}from"./chunk-33BPFLKT.js";import{a as u}from"./chunk-3Q4FI4S7.js";import{F as Y,G as B,H as x,K as P,a as g,c as p,p as k,q as j,r as L,s as D,t as T,u as _,v as R}from"./chunk-LYEKSJR3.js";function ta(){let{songs:a,streams:t}=y.data,i=[...a].sort((m,b)=>b.count-m.count).slice(0,5),r=i[0]?.count||1,d=t.slice(0,5),l=w(),s=D(a,l),e=g("#panel-dashboard"),o=R(t,l),h=T(t).slice(-12),S=Math.max(1,...h.map(m=>m.songs)),$=`
    <div class="card dashboard-card dashboard-activity-card">
      <div class="card-title">${u("analytics")} \u4ECA\u6708\u306E\u6D3B\u52D5</div>
      <div class="dashboard-metric-list">
        <div class="activity-row">
          <span class="a-date">\u914D\u4FE1</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u6B4C\u67A0\u6570</span>
          <strong>${j(t,l)}\u56DE</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6B4C\u5531</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u7DCF\u6B4C\u5531\u6570</span>
          <strong>${L(t,l)}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u65B0\u66F2</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u521D\u62AB\u9732\u66F2\u6570</span>
          <strong>${s}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6700\u7D42</span>
          <span class="a-meta">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</span>
          <strong>${t[0]?`${Y(t[0].date)}\u65E5\u524D`:"\u2014"}</strong>
        </div>
      </div>
    </div>
  `,f=`
    <div class="card dashboard-card dashboard-top-card">
      <div class="card-title">${u("rank")} TOP5 \u697D\u66F2</div>
      <div class="bar-list">
        ${i.length?i.map((m,b)=>M(m,b,r)).join(""):'<div class="empty-state">\u66F2\u30C7\u30FC\u30BF\u306A\u3057</div>'}
      </div>
    </div>
  `;e.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-overview-grid">
        ${$}
        ${f}
        <div class="card dashboard-card dashboard-genre-card">
          <div class="card-title">${u("chart")} \u30B8\u30E3\u30F3\u30EB\u5206\u5E03 <span class="pill">\u697D\u66F2\u6570</span></div>
          ${K(a)}
        </div>
        <div class="card dashboard-card dashboard-heatmap-card">
          <div class="card-title">${u("calendar")} \u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7 <span class="pill">\u76F4\u8FD11\u5E74</span></div>
          ${J(o)}
        </div>
        <div class="card dashboard-card dashboard-monthly-card">
          <div class="card-title">${u("music")} \u6708\u5225 \u6B4C\u5531\u6570 <span class="pill">\u76F4\u8FD112\u304B\u6708</span></div>
          ${V(h,S)}
        </div>
      </div>
      ${O()}
      ${I()}
      ${G(t,a,d)}
    </div>
  `,E(),z(t,a)}function I(){return`
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
  `}function N(a,t,n,i){let r=i.getFullYear(),d=i.getMonth();function l(c){let v=c.date instanceof Date?c.date:new Date(c.date);return n==="year"?v.getFullYear()===r:v.getFullYear()===r&&v.getMonth()===d}let s=a.filter(l);if(!s.length)return null;let e=s.length,o=s.reduce((c,v)=>c+(v.songs?.length||0),0),h=new Set;for(let c of s)for(let v of c.songs||[])v.key&&h.add(v.key);let S=h.size,$=new Map;for(let c of s)for(let v of c.songs||[]){if(!v.key)continue;let C=$.get(v.key)||{title:v.title,count:0};C.count++,$.set(v.key,C)}let f=null,m=0;for(let[,c]of $)c.count>m&&(m=c.count,f=c);let b=0;for(let c of t){if(!c.firstSung)continue;let v=c.firstSung instanceof Date?c.firstSung:new Date(c.firstSung);(n==="year"&&v.getFullYear()===r||n==="month"&&v.getFullYear()===r&&v.getMonth()===d)&&b++}return{streamCount:e,totalSongs:o,distinctCount:S,topSong:f,topCount:m,newSongCount:b}}function q(a,t){if(!a)return'<div class="empty-state">\u3053\u306E\u671F\u9593\u306E\u8A18\u9332\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>';let n=a.topSong?`${p(a.topSong.title)} <span class="recap-sub">(${a.topCount}\u56DE)</span>`:"\u2014";return`
    <div class="recap-period-label">${p(t)}</div>
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
      ${u("rank")} \u6700\u591A\u6B4C\u5531: ${n}
    </div>
  `}function z(a,t){let n=g("#dashboard-recap-body"),i=g("#recap-btn-year"),r=g("#recap-btn-month");if(!n)return;let d=w(),l="year";function s(o){l=o;let h=d.getFullYear(),S=d.getMonth(),f=o==="year"?`${h}\u5E74`:`${h}\u5E74 ${["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"][S]}`,m=N(a,t,o,d);n.innerHTML=q(m,f),i?.classList.toggle("primary",o==="year"),i?.classList.toggle("ghost",o!=="year"),r?.classList.toggle("primary",o==="month"),r?.classList.toggle("ghost",o!=="month")}s("year");let e=g("#dashboard-recap-toggle");e&&e.addEventListener("click",o=>{let h=o.target.closest("[data-recap-period]");h&&s(h.dataset.recapPeriod)})}var F="kanau-watch-history-v1";function H(){try{return JSON.parse(localStorage.getItem(F)||"[]")}catch{return[]}}function A(a){let t=Math.max(0,Math.floor(a)),n=Math.floor(t/3600),i=Math.floor(t%3600/60),r=t%60;return n>0?`${n}:${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`${i}:${String(r).padStart(2,"0")}`}function O(){let a=H().slice(0,6);return a.length?`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">${u("play")} \u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${a.map((t,n)=>{let i=P(t.url),r=Math.floor((Date.now()-(t.updatedAt||0))/864e5),d=r<=0?"\u4ECA\u65E5":`${r}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${n}" title="${p(t.title||"")}">
            ${i?`<img class="dashboard-resume-thumb" src="${p(i)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${p(t.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">${u("time")} ${A(t.t)} \u304B\u3089 \u30FB ${d}</span>
          </button>`}).join("")}
      </div>
    </div>`:""}function E(){let a=g("#dashboard-resume-list");a&&(a.onclick=i=>{let r=i.target.closest("[data-resume-idx]");if(!r)return;let d=H()[Number(r.dataset.resumeIdx)];if(!d?.url)return;let l=null;d.channel!=null&&d.index!=null&&(l=(y.channelData?.combined?.streams||y.data?.streams||[]).find(e=>e.channel===d.channel&&e.index===d.index)||null),window.__openStreamViewer?.(l||{url:d.url,title:d.title,isMv:!!d.isMv},d.t)});let t=g("#dashboard-resume-clear");t&&(t.onclick=()=>{try{localStorage.removeItem(F)}catch{}g("#panel-dashboard .dashboard-resume-card")?.remove()});let n=g("#dashboard-resume-queue");n&&(n.onclick=()=>{let i=H(),r=y.channelData?.combined?.streams||y.data?.streams||[],d=i.map((l,s)=>{let e=l.channel!=null&&l.index!=null?r.find(o=>o.channel===l.channel&&o.index===l.index):null;return e?.url?{kind:"stream",key:`${e.channel}:${e.index}`,stream:e}:l.url?{kind:"mv",key:`history:${s}`,video:{url:l.url,title:l.title||"\u52D5\u753B",isMv:!!l.isMv}}:null}).filter(Boolean);d.length&&window.__playMyListInViewer?.({name:"\u8996\u8074\u5C65\u6B74",items:d,idx:0})})}function G(a,t,n){let i=t.filter(s=>s.daysSinceLast>=180).sort((s,e)=>e.count-s.count).slice(0,5),r=t.filter(s=>s.daysSinceLast!=null&&s.daysSinceLast<=30).sort((s,e)=>e.count-s.count).slice(0,5),d=k(a,"month",w()),l=k(a,"year",w());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">${u("rank")} \u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${d.length?d.slice(0,5).map((s,e)=>M(s,e,d[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">${u("rank")} \u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${l.length?l.slice(0,5).map((s,e)=>M(s,e,l[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">${u("time")} \u4E45\u3057\u3076\u308A\u5019\u88DC <span class="pill">180\u65E5\u4EE5\u4E0A</span></div>
      <div class="bar-list">
        ${i.length?i.map((s,e)=>M(s,e,i[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">${u("sparkle")} \u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A <span class="pill">30\u65E5\u4EE5\u5185</span></div>
      <div class="bar-list">
        ${r.length?r.map((s,e)=>M(s,e,r[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">${u("video")} \u76F4\u8FD1\u306E\u6B4C\u67A0 <span class="pill">\u6700\u65B0${n.length}\u4EF6</span></div>
      ${n.map(s=>`
        <div class="activity-row">
          <span class="a-date">${B(s.date)}</span>
          <span class="a-title">${s.url?`<a href="${p(s.url)}" target="_blank" rel="noopener">${p(s.title||"\u914D\u4FE1")}</a>`:p(s.title)}</span>
          <span class="a-meta">${u("mic")} ${s.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function M(a,t,n){let i=Math.round(a.count/n*100);return`
    <div class="bar-row clickable" data-songkey="${p(a.key)}" data-songtitle="${p(a.title)}" data-songartist="${p(a.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="bar-rank">${t+1}</div>
      <div class="bar-content">
        <div class="bar-label">${p(a.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${p(a.artist)}</span></div>
        <div class="bar-bar" style="width:${i}%;"></div>
      </div>
      <div class="bar-value">${a.count}</div>
    </div>
  `}function K(a){let t=new Map;for(let e of a){let o=e.genre||e.genreText||"\u672A\u5206\u985E";!o||o==="\u672A\u5206\u985E"||t.set(o,(t.get(o)||0)+1)}let n=Array.from(t.entries()).sort((e,o)=>o[1]-e[1]),i=n.reduce((e,[,o])=>e+o,0);if(!n.length)return'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>';let r=a.length||0,d=Math.max(0,r-i),l=n[0],s=r?Math.round(l[1]/r*100):0;return`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${n.map(([e,o],h)=>`
          <span class="genre-meter-segment g${h%8}" style="width:${Math.max(3,o/i*100)}%" title="${p(e)}: ${o}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${n.slice(0,8).map(([e,o],h)=>`
          <div class="genre-row">
            <span class="genre-dot g${h%8}"></span>
            <span class="genre-name">${p(e)}</span>
            <strong>${o}</strong>
          </div>
        `).join("")}
      </div>
      <div class="genre-insights" aria-label="\u30B8\u30E3\u30F3\u30EB\u96C6\u8A08">
        <div class="genre-insight">
          <span>\u5206\u985E\u6E08\u307F</span>
          <strong>${i}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u672A\u5206\u985E</span>
          <strong>${d}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u30B8\u30E3\u30F3\u30EB\u6570</span>
          <strong>${n.length}<small>\u7A2E</small></strong>
        </div>
        <div class="genre-insight">
          <span>${p(l[0])}</span>
          <strong>${s}<small>%</small></strong>
        </div>
      </div>
    </div>
  `}function V(a,t){return a.length?`
    <div class="monthly-bars" aria-label="\u6708\u5225\u6B4C\u5531\u6570">
      ${a.map(n=>{let i=Math.max(5,Math.round(n.songs/t*100));return`
          <div class="month-bar" title="${x(n.date)}: ${n.songs}\u66F2 / ${n.streams}\u67A0">
            <div class="month-bar-track"><span style="height:${i}%"></span></div>
            <div class="month-label">${x(n.date).replace(/^\d{4}\//,"")}</div>
            <strong>${n.songs}</strong>
          </div>
        `}).join("")}
    </div>
  `:'<div class="empty-state">\u6708\u5225\u30C7\u30FC\u30BF\u306A\u3057</div>'}function J(a){let n=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].map(r=>`<div>${r}</div>`).join(""),i=a.map(r=>r.inRange?`<div class="heatmap-cell ${_(r.value)}" title="${r.iso}: ${r.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("");return`
    <div class="heatmap-flex">
      <div class="heatmap-row-labels">${n}</div>
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
  `}export{ta as renderDashboard};
