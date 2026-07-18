import{c as W,d as q,g as z}from"./chunk-GE7BKKXY.js";import{a as k,b as N,n as A,q as O}from"./chunk-34IYA3ES.js";import"./chunk-J3NRXPJ3.js";import{d as S,e as y}from"./chunk-33BPFLKT.js";import{F as P,G as B,H as F,K as Y,R as h,a as g,c as p,p as x,q as H,r as D,s as L,t as j,u as R,v as T}from"./chunk-JOP2O3AY.js";function la(){let{songs:a,streams:t}=y.data,e=[...a].sort((m,b)=>b.count-m.count).slice(0,5),i=e[0]?.count||1,d=t.slice(0,5),l=S(),s=L(a,l),n=g("#panel-dashboard"),o=T(t,l),u=j(t).slice(-12),M=Math.max(1,...u.map(m=>m.songs)),$=`
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
  `,f=`
    <div class="card dashboard-card dashboard-top-card">
      <div class="card-title">${h("rank")} TOP5 \u697D\u66F2</div>
      <div class="bar-list">
        ${e.length?e.map((m,b)=>w(m,b,i)).join(""):'<div class="empty-state">\u66F2\u30C7\u30FC\u30BF\u306A\u3057</div>'}
      </div>
    </div>
  `;n.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-overview-grid">
        ${$}
        ${f}
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
          ${u.length?z("chart-monthly",{class:"short"}):'<div class="empty-state">\u6708\u5225\u30C7\u30FC\u30BF\u306A\u3057</div>'}
        </div>
      </div>
      ${K()}
      ${G()}
      ${J(t,a,d)}
    </div>
  `,Z(),_(t,a),U(u)}function G(){return`
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
  `}function I(a,t,r,e){let i=e.getFullYear(),d=e.getMonth();function l(c){let v=c.date instanceof Date?c.date:new Date(c.date);return r==="year"?v.getFullYear()===i:v.getFullYear()===i&&v.getMonth()===d}let s=a.filter(l);if(!s.length)return null;let n=s.length,o=s.reduce((c,v)=>c+(v.songs?.length||0),0),u=new Set;for(let c of s)for(let v of c.songs||[])v.key&&u.add(v.key);let M=u.size,$=new Map;for(let c of s)for(let v of c.songs||[]){if(!v.key)continue;let C=$.get(v.key)||{title:v.title,count:0};C.count++,$.set(v.key,C)}let f=null,m=0;for(let[,c]of $)c.count>m&&(m=c.count,f=c);let b=0;for(let c of t){if(!c.firstSung)continue;let v=c.firstSung instanceof Date?c.firstSung:new Date(c.firstSung);(r==="year"&&v.getFullYear()===i||r==="month"&&v.getFullYear()===i&&v.getMonth()===d)&&b++}return{streamCount:n,totalSongs:o,distinctCount:M,topSong:f,topCount:m,newSongCount:b}}function V(a,t){if(!a)return'<div class="empty-state">\u3053\u306E\u671F\u9593\u306E\u8A18\u9332\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>';let r=a.topSong?`${p(a.topSong.title)} <span class="recap-sub">(${a.topCount}\u56DE)</span>`:"\u2014";return`
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
      ${h("rank")} \u6700\u591A\u6B4C\u5531: ${r}
    </div>
  `}function _(a,t){let r=g("#dashboard-recap-body"),e=g("#recap-btn-year"),i=g("#recap-btn-month");if(!r)return;let d=S(),l="year";function s(o){l=o;let u=d.getFullYear(),M=d.getMonth(),f=o==="year"?`${u}\u5E74`:`${u}\u5E74 ${["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"][M]}`,m=I(a,t,o,d);r.innerHTML=V(m,f),e?.classList.toggle("primary",o==="year"),e?.classList.toggle("ghost",o!=="year"),i?.classList.toggle("primary",o==="month"),i?.classList.toggle("ghost",o!=="month")}s("year");let n=g("#dashboard-recap-toggle");n&&n.addEventListener("click",o=>{let u=o.target.closest("[data-recap-period]");u&&s(u.dataset.recapPeriod)})}function E(a){let t=Math.max(0,Math.floor(a)),r=Math.floor(t/3600),e=Math.floor(t%3600/60),i=t%60;return r>0?`${r}:${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`:`${e}:${String(i).padStart(2,"0")}`}function K(){let a=k().slice(0,6);return a.length?`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">${h("play")} \u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${a.map((t,r)=>{let e=Y(t.url),i=Math.floor((Date.now()-(t.updatedAt||0))/864e5),d=i<=0?"\u4ECA\u65E5":`${i}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${r}" title="${p(t.title||"")}">
            ${e?`<img class="dashboard-resume-thumb" src="${p(e)}" alt="" width="320" height="180" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${p(t.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">${h("time")} ${E(t.t)} \u304B\u3089 \u30FB ${d}</span>
          </button>`}).join("")}
      </div>
    </div>`:""}function Z(){let a=g("#dashboard-resume-list");a&&(a.onclick=e=>{let i=e.target.closest("[data-resume-idx]");if(!i)return;let d=k()[Number(i.dataset.resumeIdx)];if(!d?.url)return;let l=null;d.channel!=null&&d.index!=null&&(l=(y.channelData?.combined?.streams||y.data?.streams||[]).find(n=>n.channel===d.channel&&n.index===d.index)||null),O(l||{url:d.url,title:d.title,isMv:!!d.isMv},d.t)});let t=g("#dashboard-resume-clear");t&&(t.onclick=()=>{N(),g("#panel-dashboard .dashboard-resume-card")?.remove()});let r=g("#dashboard-resume-queue");r&&(r.onclick=()=>{let e=k(),i=y.channelData?.combined?.streams||y.data?.streams||[],d=e.map((l,s)=>{let n=l.channel!=null&&l.index!=null?i.find(o=>o.channel===l.channel&&o.index===l.index):null;return n?.url?{kind:"stream",key:`${n.channel}:${n.index}`,stream:n}:l.url?{kind:"mv",key:`history:${s}`,video:{url:l.url,title:l.title||"\u52D5\u753B",isMv:!!l.isMv}}:null}).filter(Boolean);d.length&&A({name:"\u8996\u8074\u5C65\u6B74",items:d,idx:0})})}function J(a,t,r){let e=t.filter(s=>s.daysSinceLast>=180).sort((s,n)=>n.count-s.count).slice(0,5),i=t.filter(s=>s.daysSinceLast!=null&&s.daysSinceLast<=30).sort((s,n)=>n.count-s.count).slice(0,5),d=x(a,"month",S()),l=x(a,"year",S());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">${h("rank")} \u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">TOP5</span></div>
      <div class="bar-list">
        ${d.length?d.slice(0,5).map((s,n)=>w(s,n,d[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">${h("rank")} \u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">TOP5</span></div>
      <div class="bar-list">
        ${l.length?l.slice(0,5).map((s,n)=>w(s,n,l[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">${h("time")} \u4E45\u3057\u3076\u308A\u5019\u88DC <span class="pill">180\u65E5\u4EE5\u4E0A</span></div>
      <div class="bar-list">
        ${e.length?e.map((s,n)=>w(s,n,e[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">${h("sparkle")} \u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A <span class="pill">30\u65E5\u4EE5\u5185</span></div>
      <div class="bar-list">
        ${i.length?i.map((s,n)=>w(s,n,i[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">${h("video")} \u76F4\u8FD1\u306E\u6B4C\u67A0 <span class="pill">\u6700\u65B0${r.length}\u4EF6</span></div>
      ${r.map(s=>`
        <div class="activity-row">
          <span class="a-date">${B(s.date)}</span>
          <span class="a-title">${s.url?`<a href="${p(s.url)}" target="_blank" rel="noopener">${p(s.title||"\u914D\u4FE1")}</a>`:p(s.title)}</span>
          <span class="a-meta">${h("mic")} ${s.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function w(a,t,r){let e=Math.round(a.count/r*100);return`
    <div class="bar-row clickable" role="button" tabindex="0" data-songkey="${p(a.key)}" data-songtitle="${p(a.title)}" data-songartist="${p(a.artist)}" aria-label="${p(a.title)} \u2014 \u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u3067\u7D5E\u308A\u8FBC\u3080">
      <div class="bar-rank">${t+1}</div>
      <div class="bar-content">
        <div class="bar-label">${p(a.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${p(a.artist)}</span></div>
        <div class="bar-bar" style="width:${e}%;"></div>
      </div>
      <div class="bar-value">${a.count}</div>
    </div>
  `}function Q(a){let t=new Map;for(let n of a){let o=n.genre||n.genreText||"\u672A\u5206\u985E";!o||o==="\u672A\u5206\u985E"||t.set(o,(t.get(o)||0)+1)}let r=Array.from(t.entries()).sort((n,o)=>o[1]-n[1]),e=r.reduce((n,[,o])=>n+o,0);if(!r.length)return'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>';let i=a.length||0,d=Math.max(0,i-e),l=r[0],s=i?Math.round(l[1]/i*100):0;return`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${r.map(([n,o],u)=>`
          <span class="genre-meter-segment g${u%8}" style="width:${Math.max(3,o/e*100)}%" title="${p(n)}: ${o}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${r.slice(0,8).map(([n,o],u)=>`
          <div class="genre-row">
            <span class="genre-dot g${u%8}"></span>
            <span class="genre-name">${p(n)}</span>
            <strong>${o}</strong>
          </div>
        `).join("")}
      </div>
      <div class="genre-insights" aria-label="\u30B8\u30E3\u30F3\u30EB\u96C6\u8A08">
        <div class="genre-insight">
          <span>\u5206\u985E\u6E08\u307F</span>
          <strong>${e}<small>\u66F2</small></strong>
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
          <span>${p(l[0])}</span>
          <strong>${s}<small>%</small></strong>
        </div>
      </div>
    </div>
  `}function U(a){if(!a.length)return;let t=a.map(e=>F(e.date).replace(/^\d{4}\//,"")),r=W();q("chart-monthly","line",{labels:t,datasets:[{label:"\u6B4C\u5531\u6570",data:a.map(e=>e.songs),borderColor:r.primaryStrong,backgroundColor:r.primary+"30",tension:.4,fill:!0,pointRadius:3,pointHoverRadius:5,borderWidth:2},{label:"\u6B4C\u67A0\u6570",data:a.map(e=>e.streams),borderColor:r.accent,backgroundColor:"transparent",tension:.4,fill:!1,pointRadius:2,pointHoverRadius:4,borderWidth:1.5,borderDash:[4,3]}]},{plugins:{legend:{display:!0,position:"top",align:"end",labels:{boxWidth:10,padding:10,font:{size:10}}}},scales:{y:{beginAtZero:!0}}})}function X(a){let r=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].map(i=>`<div>${i}</div>`).join(""),e=a.map(i=>i.inRange?`<div class="heatmap-cell ${R(i.value)}" title="${i.iso}: ${i.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("");return`
    <div class="heatmap-flex">
      <div class="heatmap-row-labels">${r}</div>
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
  `}export{la as renderDashboard};
