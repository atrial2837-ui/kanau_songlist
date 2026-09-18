import{c as b,d as $,f as q,h as x}from"./chunk-I3TJAJ5T.js";import{a as T,b as B,l as j,o as N}from"./chunk-CTNXXBWF.js";import"./chunk-H3AHRYSK.js";import"./chunk-LXYT6HRB.js";import{e as R}from"./chunk-VSBFO2XM.js";import{d as C,e as k}from"./chunk-G6X6HETF.js";import{D as w,E as A,H as O,P as p,a as g,c as d,e as H,i as E,o as P,p as L,q as I,r as W,s as _}from"./chunk-ZX7BDGHH.js";function G(t,a,e,s,n,r=10){let i=e-t,l=s-a,o=Math.hypot(i,l);return o>0?(i/=o,l/=o):(i=0,l=-1),{ax:t+i*(n+r),ay:a+l*(n+r),dx:i,dy:l}}function Y(t,a){return`
    <div class="analytics-grid">

      <div class="card col-6">
        <div class="card-title">${p("chart")} \u6301\u3061\u66F2\u306E\u7D2F\u7A4D\u6210\u9577 <span class="pill">\u521D\u62AB\u9732\u30D9\u30FC\u30B9</span></div>
        ${x("chart-growth")}
      </div>

      <div class="card col-6">
        <div class="card-title">${p("mic")} 1\u67A0\u3042\u305F\u308A\u306E\u66F2\u6570 <span class="pill">\u6642\u7CFB\u5217</span></div>
        ${x("chart-songs-per-stream")}
      </div>

      <div class="card col-6">
        <div class="card-title">${p("calendar")} \u66DC\u65E5\u5206\u5E03 <span class="pill">\u914D\u4FE1\u65E5</span></div>
        ${x("chart-dow",{class:"short"})}
      </div>

      <div class="card col-6">
        <div class="card-title">${p("chart")} \u6B4C\u5531\u56DE\u6570\u306E\u5206\u5E03 <span class="pill">\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0</span></div>
        ${x("chart-histogram",{class:"short"})}
      </div>

      <div class="card col-12">
        <div class="card-title">${p("artist")} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u5225 \u6B4C\u5531\u5408\u8A08 <span class="pill">TOP${R}</span></div>
        <div id="artist-bar-list" class="bar-list"></div>
      </div>

      <div class="card col-6">
        <div class="card-title">${p("sparkle")} \u4E45\u3057\u3076\u308A\u306B\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u524D\u56DE\u304B\u3089\u9577\u304B\u3063\u305FTOP10</span></div>
        <div id="comeback-list"></div>
      </div>

      <div class="card col-6">
        <div class="card-title">${p("time")} 1\u56DE\u3057\u304B\u6B4C\u308F\u308C\u3066\u3044\u306A\u3044\u66F2 <span class="pill">${t.filter(e=>e.count===1).length}\u66F2</span></div>
        <div id="oneshot-list"></div>
      </div>

    </div>
  `}function J(t,a,e){at(t),et(a),st(a),nt(t),rt(e.length?e:E(t)),it(t),ot(t)}function at(t){let a=b(),e=new Map;for(let c of t){if(!c.firstSung)continue;let u=H(c.firstSung);e.set(u,(e.get(u)||0)+1)}let s=Array.from(e.keys()).sort();if(!s.length)return;let n=[],r=[],i=0,l=z(s[0]),o=z(s[s.length-1]);for(;l<=o;){let c=H(l);i+=e.get(c)||0,n.push(A(l)),r.push(i),l=new Date(l.getFullYear(),l.getMonth()+1,1)}$("chart-growth","line",{labels:n,datasets:[{label:"\u7D2F\u7A4D\u6301\u3061\u66F2\u6570",data:r,borderColor:a.primaryStrong,backgroundColor:a.primary+"33",tension:.25,fill:!0,pointRadius:2,borderWidth:2}]})}function z(t){let[a,e]=t.split("-").map(Number);return new Date(a,e-1,1)}function et(t){let a=b(),e=[...t].sort((s,n)=>s.date-n.date);$("chart-songs-per-stream","line",{labels:e.map(s=>w(s.date)),datasets:[{label:"\u66F2\u6570",data:e.map(s=>s.songs.length),borderColor:a.accentStrong,backgroundColor:a.accent+"33",tension:.2,fill:!0,pointRadius:1.5,borderWidth:1.5}]},{scales:{x:{ticks:{maxTicksLimit:8}}}})}function st(t){let a=b(),e=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],s=new Array(7).fill(0),n=new Array(7).fill(0);for(let r of t)s[r.dayOfWeek]+=1,n[r.dayOfWeek]+=r.songs.length;$("chart-dow","bar",{labels:e,datasets:[{label:"\u914D\u4FE1\u56DE\u6570",data:s,backgroundColor:a.primary+"cc",borderColor:a.primaryStrong,borderWidth:1,yAxisID:"y",borderRadius:6},{label:"\u6B4C\u5531\u6570",data:n,backgroundColor:a.accent+"cc",borderColor:a.accentStrong,borderWidth:1,yAxisID:"y2",borderRadius:6}]},{scales:{y:{position:"left",title:{display:!0,text:"\u914D\u4FE1",color:a.inkMute,font:{size:10}}},y2:{position:"right",title:{display:!0,text:"\u6B4C\u5531",color:a.inkMute,font:{size:10}},grid:{display:!1},beginAtZero:!0}}})}function nt(t){let a=b(),e=[{label:"1\u56DE",range:[1,1]},{label:"2\u56DE",range:[2,2]},{label:"3\u56DE",range:[3,3]},{label:"4-5\u56DE",range:[4,5]},{label:"6-10\u56DE",range:[6,10]},{label:"11-20\u56DE",range:[11,20]},{label:"21\u56DE\u301C",range:[21,1/0]}],s=e.map(n=>t.filter(r=>r.count>=n.range[0]&&r.count<=n.range[1]).length);$("chart-histogram","bar",{labels:e.map(n=>n.label),datasets:[{label:"\u66F2\u6570",data:s,backgroundColor:a.primary+"cc",borderColor:a.primaryStrong,borderWidth:1,borderRadius:6}]},{plugins:{legend:{display:!1}}})}function rt(t){let a=t.slice(0,R),e=g("#artist-bar-list");if(!a.length){e.innerHTML='<div class="empty-state">\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093</div>';return}let s=a[0]?.totalCount||1;e.innerHTML=a.map((n,r)=>{let i=Math.round(n.totalCount/s*100);return`
      <div class="bar-row" data-artist-search="${d(n.artist)}" style="cursor:pointer;" title="\u30AF\u30EA\u30C3\u30AF\u3067\u3053\u306E\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u306E\u66F2\u3092\u8868\u793A">
        <div class="bar-rank">${r+1}</div>
        <div class="bar-content">
          <div class="bar-label">${d(n.artist)} <span style="color:var(--ink-mute);font-size:11px;">\uFF08${n.songCount}\u66F2\uFF09</span></div>
          <div class="bar-bar accent" style="width:${i}%;"></div>
        </div>
        <div class="bar-value">${n.totalCount}</div>
      </div>
    `}).join("")}function it(t){let a=P(t,10);g("#comeback-list").innerHTML=a.length?a.map((e,s)=>`
    <div class="activity-row" data-songkey="${d(e.song.key)}" data-songtitle="${d(e.song.title)}" data-songartist="${d(e.song.artist)}" style="cursor:pointer;" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <span class="a-date">${e.maxGap}\u65E5</span>
      <span class="a-title">${d(e.song.title)} <span style="color:var(--ink-mute);">/ ${d(e.song.artist)}</span></span>
      <span class="a-meta">${w(e.gapStart)}\u2192${w(e.gapEnd)}</span>
    </div>
  `).join(""):'<div class="empty-state">\u8A72\u5F53\u30C7\u30FC\u30BF\u306A\u3057</div>'}function ot(t){let a=t.filter(e=>e.count===1).sort((e,s)=>(s.lastSung?.getTime()||0)-(e.lastSung?.getTime()||0)).slice(0,10);g("#oneshot-list").innerHTML=a.length?a.map(e=>`
    <div class="activity-row" data-songkey="${d(e.key)}" data-songtitle="${d(e.title)}" data-songartist="${d(e.artist)}" style="cursor:pointer;" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <span class="a-date">${e.lastSung?w(e.lastSung):"\u2014"}</span>
      <span class="a-title">${d(e.title)} <span style="color:var(--ink-mute);">/ ${d(e.artist)}</span></span>
      <span class="a-meta">${e.daysSinceLast!=null?e.daysSinceLast+"\u65E5\u524D":"\u2014"}</span>
    </div>
  `).join(""):'<div class="empty-state">\u8A72\u5F53\u30C7\u30FC\u30BF\u306A\u3057</div>'}function Nt(){let{songs:t,streams:a,artists:e}=k.data,n=[...t].sort((S,f)=>f.count-S.count).slice(0,5),r=n[0]?.count||1,i=a.slice(0,5),l=C(),o=g("#panel-dashboard"),c=_(a,l),u=I(a).slice(-12),h=vt(t),v=`
    <div class="card dashboard-card dashboard-top-card">
      <div class="card-title">${p("rank")} TOP5 \u697D\u66F2</div>
      <div class="bar-list">
        ${n.length?n.map((S,f)=>D(S,f,r)).join(""):'<div class="empty-state">\u66F2\u30C7\u30FC\u30BF\u306A\u3057</div>'}
      </div>
    </div>
  `;o.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-trio-grid">
        ${v}
        ${ut(a)}
        <div class="card dashboard-card dashboard-genre-card">
          <div class="card-title">${p("chart")} \u30B8\u30E3\u30F3\u30EB\u5206\u5E03 <span class="pill">${t.length}\u66F2</span></div>
          ${bt(h)}
        </div>
      </div>
      <div class="dashboard-overview-grid">
        <div class="card dashboard-card dashboard-monthly-card">
          <div class="card-title">${p("music")} \u6708\u5225 \u6B4C\u5531\u6570 <span class="pill">\u76F4\u8FD112\u304B\u6708</span></div>
          ${u.length?x("chart-monthly",{class:"short"}):'<div class="empty-state">\u6708\u5225\u30C7\u30FC\u30BF\u306A\u3057</div>'}
        </div>
        <div class="card dashboard-card dashboard-heatmap-card">
          <div class="card-title">${p("calendar")} \u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7 <span class="pill">\u76F4\u8FD11\u5E74</span></div>
          ${kt(c)}
        </div>
      </div>
      ${ht()}
      ${gt(i)}
      <div class="dashboard-analytics-section" id="dashboard-analytics">
        ${Y(t,a)}
      </div>
    </div>
  `,mt(),lt(),St(h),wt(u),J(t,a,e),Q(o);let m=o.querySelector(".heatmap-wrap");m&&(m.scrollLeft=m.scrollWidth)}function lt(){let t=g("#dashboard-hits-toggle"),a=t?.closest(".dashboard-list-card");if(!t||!a)return;let e=s=>{a.querySelectorAll("[data-hits-list]").forEach(n=>{n.hidden=n.dataset.hitsList!==s}),t.querySelectorAll("[data-hits-period]").forEach(n=>{let r=n.dataset.hitsPeriod===s;n.classList.toggle("is-active",r),n.setAttribute("aria-selected",String(r))}),t.dataset.active=s};t.addEventListener("click",s=>{let n=s.target.closest("[data-hits-period]");n&&e(n.dataset.hitsPeriod)}),e("month")}var K="(max-width: 980px)",U="dashboardCollapsed";function X(t){return Array.from(t.querySelectorAll(".dashboard-trio-grid > .card, .dashboard-overview-grid > .card, .dashboard-resume-card, .dashboard-recent-card, .dashboard-analytics-section .analytics-grid > .card"))}function dt(){try{let t=JSON.parse(localStorage.getItem(U)||"null");return Array.isArray(t)?t.filter(a=>typeof a=="string"):null}catch{return null}}function Z(t){try{localStorage.setItem(U,JSON.stringify(t))}catch{}}function V(t,a){t.classList.toggle("is-collapsed",a);let e=t.querySelector(":scope > .card-title .collapse-toggle");e&&(e.setAttribute("aria-expanded",String(!a)),e.setAttribute("aria-label",a?"\u5C55\u958B\u3059\u308B":"\u6298\u308A\u305F\u305F\u3080"),e.innerHTML=p(a?"chevronDown":"chevronUp"))}function ct(t){return X(t).filter(a=>a.classList.contains("is-collapsed")).map(a=>a.dataset.collapseId)}function Q(t){let a=X(t),e=window.matchMedia(K).matches,s=dt();!s&&e&&(s=a.slice(1).map((i,l)=>`dash-${l+1}`),Z(s));let n=new Set(s||[]);if(a.forEach((i,l)=>{let o=`dash-${l}`;i.dataset.collapseId=o;let c=i.querySelector(":scope > .card-title");if(c&&!c.querySelector(".collapse-toggle")){let u=document.createElement("button");u.type="button",u.className="collapse-toggle",u.dataset.collapseToggle=o,c.appendChild(u)}V(i,n.has(o))}),t.dataset.collapseBound)return;t.dataset.collapseBound="1",t.addEventListener("click",i=>{let l=i.target.closest("[data-collapse-toggle]");if(!l)return;let o=l.closest("[data-collapse-id]");if(!o)return;let c=!o.classList.contains("is-collapsed");if(V(o,c),Z(ct(t)),!c){q();let u=o.querySelector(".heatmap-wrap");u&&(u.scrollLeft=u.scrollWidth)}}),window.matchMedia(K).addEventListener?.("change",()=>Q(t))}function ut(t){let a=L(t,"month",C()),e=L(t,"year",C());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-hits">
      <div class="card-title">${p("rank")} \u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2
        <span class="seg-control" id="dashboard-hits-toggle" data-active="month" role="tablist" aria-label="\u671F\u9593\u5207\u66FF">
          <span class="seg-thumb" aria-hidden="true"></span>
          <button class="seg-btn is-active" type="button" role="tab" aria-selected="true" data-hits-period="month">\u4ECA\u6708</button>
          <button class="seg-btn" type="button" role="tab" aria-selected="false" data-hits-period="year">\u4ECA\u5E74</button>
        </span>
      </div>
      <div class="bar-list" data-hits-list="month">
        ${a.length?a.slice(0,5).map((s,n)=>D(s,n,a[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
      <div class="bar-list" data-hits-list="year" hidden>
        ${e.length?e.slice(0,5).map((s,n)=>D(s,n,e[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>
  `}function pt(t){let a=Math.max(0,Math.floor(t)),e=Math.floor(a/3600),s=Math.floor(a%3600/60),n=a%60;return e>0?`${e}:${String(s).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${s}:${String(n).padStart(2,"0")}`}function ht(){let t=T().slice(0,6);return t.length?`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">${p("play")} \u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${t.map((a,e)=>{let s=O(a.url),n=Math.floor((Date.now()-(a.updatedAt||0))/864e5),r=n<=0?"\u4ECA\u65E5":`${n}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${e}" title="${d(a.title||"")}">
            ${s?`<img class="dashboard-resume-thumb" src="${d(s)}" alt="" width="320" height="180" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${d(a.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">${p("time")} ${pt(a.t)} \u304B\u3089 \u30FB ${r}</span>
          </button>`}).join("")}
      </div>
    </div>`:""}function mt(){let t=g("#dashboard-resume-list");t&&(t.onclick=s=>{let n=s.target.closest("[data-resume-idx]");if(!n)return;let r=T()[Number(n.dataset.resumeIdx)];if(!r?.url)return;let i=null;r.channel!=null&&r.index!=null&&(i=(k.channelData?.combined?.streams||k.data?.streams||[]).find(o=>o.channel===r.channel&&o.index===r.index)||null),N(i||{url:r.url,title:r.title,isMv:!!r.isMv},r.t)});let a=g("#dashboard-resume-clear");a&&(a.onclick=()=>{B(),g("#panel-dashboard .dashboard-resume-card")?.remove()});let e=g("#dashboard-resume-queue");e&&(e.onclick=()=>{let s=T(),n=k.channelData?.combined?.streams||k.data?.streams||[],r=s.map((i,l)=>{let o=i.channel!=null&&i.index!=null?n.find(c=>c.channel===i.channel&&c.index===i.index):null;return o?.url?{kind:"stream",key:`${o.channel}:${o.index}`,stream:o}:i.url?{kind:"mv",key:`history:${l}`,video:{url:i.url,title:i.title||"\u52D5\u753B",isMv:!!i.isMv}}:null}).filter(Boolean);r.length&&j({name:"\u8996\u8074\u5C65\u6B74",items:r,idx:0})})}function gt(t){return`
    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">${p("video")} \u76F4\u8FD1\u306E\u6B4C\u67A0 <span class="pill">\u6700\u65B0${t.length}\u4EF6</span></div>
      ${t.map(a=>`
        <div class="activity-row">
          <span class="a-date">${w(a.date)}</span>
          <span class="a-title">${a.url?`<a href="${d(a.url)}" target="_blank" rel="noopener">${d(a.title||"\u914D\u4FE1")}</a>`:d(a.title)}</span>
          <span class="a-meta">${p("mic")} ${a.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function D(t,a,e){let s=Math.round(t.count/e*100);return`
    <div class="bar-row clickable" role="button" tabindex="0" data-songkey="${d(t.key)}" data-songtitle="${d(t.title)}" data-songartist="${d(t.artist)}">
      <div class="bar-rank">${a+1}</div>
      <div class="bar-content">
        <div class="bar-label">${d(t.title)}${t.artist?` <span class="bar-label-sep">/</span> <button class="bar-label-artist artist-search-btn" type="button" data-artist-search="${d(t.artist)}" title="\u3053\u306E\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u306E\u66F2\u3092\u7D5E\u308A\u8FBC\u3080">${d(t.artist)}</button>`:""}</div>
        <div class="bar-bar" style="width:${s}%;"></div>
      </div>
      <div class="bar-value">${t.count}</div>
    </div>
  `}function vt(t){let a=new Map;for(let r of t){let i=r.genre||r.genreText||"\u672A\u5206\u985E";!i||i==="\u672A\u5206\u985E"||a.set(i,(a.get(i)||0)+1)}let e=Array.from(a.entries()).sort((r,i)=>i[1]-r[1]);if(e.length<=6)return e;let s=e.slice(0,5),n=e.slice(5).reduce((r,[,i])=>r+i,0);return[...s,["\u305D\u306E\u4ED6",n]]}function tt(){let t=b();return[t.primary,t.accent,t.gold,t.primaryStrong,t.accentStrong,"#9b7ed9"]}function bt(t){if(!t.length)return'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>';let a=t.reduce((s,[,n])=>s+n,0),e=tt();return`
    <div class="genre-doughnut" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      ${x("chart-genre",{class:"genre-chart"})}
      <div class="genre-table">
        ${t.map(([s,n],r)=>`
          <div class="genre-trow" style="--gc:${e[r%e.length]}" title="${d(s)}: ${n}\u66F2">
            <span class="genre-tdot" aria-hidden="true"></span>
            <span class="genre-tname">${d(s)}</span>
            <span class="genre-tvals"><strong class="genre-tpct">${Math.round(n/a*100)}%</strong><span class="genre-tcount">(${n}\u66F2)</span></span>
          </div>
        `).join("")}
      </div>
    </div>
  `}function ft(t){return{id:"genre-pct",afterDatasetsDraw(a){let e=a.getDatasetMeta(0);if(!e?.data?.length)return;let s=a.data.datasets[0].data,n=s.reduce((i,l)=>i+l,0);if(!n)return;let{ctx:r}=a;r.save(),e.data.forEach((i,l)=>{let o=Math.round(s[l]/n*100),c=(i.startAngle+i.endAngle)/2,u=t[l%t.length];if(o>=4){let h=(i.innerRadius+i.outerRadius)/2,v=i.x+Math.cos(c)*h,m=i.y+Math.sin(c)*h;r.fillStyle="#fff",r.font='800 12px "Noto Sans JP", "Yu Gothic", system-ui, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(`${o}%`,v,m)}else{let h=Math.cos(c),v=Math.sin(c),m=i.x+h*i.outerRadius,S=i.y+v*i.outerRadius,f=i.x+h*(i.outerRadius+6),y=i.y+v*(i.outerRadius+6),M=f+(h>=0?12:-12);r.strokeStyle=u,r.lineWidth=1.2,r.beginPath(),r.moveTo(m,S),r.lineTo(f,y),r.lineTo(M,y),r.stroke(),r.fillStyle=u,r.font='800 11px "Noto Sans JP", "Yu Gothic", system-ui, sans-serif',r.textAlign=h>=0?"left":"right",r.textBaseline="middle",r.fillText(`${o}%`,M+(h>=0?3:-3),y)}}),r.restore()}}}function yt(t){return{id:"genre-center",afterDraw(a){let e=a.tooltip;if(e&&e.opacity!==0&&e.getActiveElements?.().length)return;let s=a.getDatasetMeta(0)?.data?.[0];if(!s)return;let n=b(),{ctx:r}=a;r.save(),r.textAlign="center",r.textBaseline="middle",r.fillStyle=n.ink,r.font='800 18px "Noto Sans JP", "Yu Gothic", system-ui, sans-serif',r.fillText(`${t}\u66F2`,s.x,s.y-9),r.fillStyle=n.inkMute,r.font='500 11px "Noto Sans JP", "Yu Gothic", system-ui, sans-serif',r.fillText("\u5168\u4F53",s.x,s.y+12),r.restore()}}}var F=!1;function $t(){if(F)return;F=!0;let t=()=>{let a=document.getElementById("chart-genre-tip");a&&(a.hidden=!0)};document.addEventListener("scroll",t,{capture:!0,passive:!0}),window.addEventListener("resize",t)}function xt(t){let{chart:a,tooltip:e}=t,s=document.getElementById("chart-genre-tip");s||(s=document.createElement("div"),s.id="chart-genre-tip",s.className="global-tip",s.setAttribute("role","tooltip"),s.hidden=!0,document.body.appendChild(s),$t());let n=e.dataPoints?.[0]?.element;if(e.opacity===0||!n||n.outerRadius==null){s.hidden=!0;return}let r=[...e.title||[]];for(let y of e.body||[])r.push(...y.lines||[]);s.innerHTML=r.map((y,M)=>M===0?`<strong>${d(y)}</strong>`:`<span>${d(y)}</span>`).join("<br>"),s.hidden=!1,s.style.visibility="hidden";let i=a.canvas.getBoundingClientRect(),{ax:l,ay:o,dx:c,dy:u}=G(i.left+n.x,i.top+n.y,i.left+e.caretX,i.top+e.caretY,n.outerRadius,12),h=s.offsetWidth,v=s.offsetHeight,m=8,S=Math.max(m,Math.min(l-h/2+c*h/2,window.innerWidth-h-m)),f=Math.max(m,Math.min(o-v/2+u*v/2,window.innerHeight-v-m));s.style.left=`${Math.round(S)}px`,s.style.top=`${Math.round(f)}px`,s.style.visibility=""}function St(t){if(!t.length)return;let a=b(),e=tt(),s=t.reduce((n,[,r])=>n+r,0);$("chart-genre","doughnut",{labels:t.map(([n])=>n),datasets:[{data:t.map(([,n])=>n),backgroundColor:t.map((n,r)=>e[r%e.length]),borderColor:a.surface,borderWidth:2}]},{cutout:"58%",layout:{padding:14},scales:{x:{display:!1},y:{display:!1}},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:xt,callbacks:{label:n=>{let r=n.dataset.data.reduce((l,o)=>l+o,0),i=r?Math.round(n.parsed/r*100):0;return` ${n.label}: ${n.parsed}\u66F2 (${i}%)`}}}}},[ft(e),yt(s)])}function wt(t){if(!t.length)return;let a=t.map(s=>A(s.date).replace(/^\d{4}\//,"")),e=b();$("chart-monthly","line",{labels:a,datasets:[{label:"\u6B4C\u5531\u6570",data:t.map(s=>s.songs),borderColor:e.primaryStrong,backgroundColor:e.primary+"30",tension:.4,fill:!0,pointRadius:3,pointHoverRadius:5,borderWidth:2},{label:"\u6B4C\u67A0\u6570",data:t.map(s=>s.streams),borderColor:e.accent,backgroundColor:"transparent",tension:.4,fill:!1,pointRadius:2,pointHoverRadius:4,borderWidth:1.5,borderDash:[4,3],yAxisID:"y2"}]},{plugins:{legend:{display:!0,position:"top",align:"end",labels:{boxWidth:10,padding:10,font:{size:10}}}},scales:{y:{beginAtZero:!0},y2:{position:"right",beginAtZero:!0,grid:{drawOnChartArea:!1},ticks:{color:e.accentStrong,font:{size:10},precision:0}}}})}function kt(t){let e=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].map(n=>`<div>${n}</div>`).join(""),s=t.map(n=>n.inRange?`<div class="heatmap-cell ${W(n.value)}" title="${n.iso}: ${n.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("");return`
    <div class="heatmap-flex">
      <div class="heatmap-row-labels">${e}</div>
      <div class="heatmap-wrap"><div class="heatmap">${s}</div></div>
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
  `}export{Nt as renderDashboard};
