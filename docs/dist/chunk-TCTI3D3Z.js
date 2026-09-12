import{c as b,d as $,g as x}from"./chunk-2UBP6M7Y.js";import{a as T,b as G,l as O,o as N}from"./chunk-CTNXXBWF.js";import"./chunk-H3AHRYSK.js";import"./chunk-LXYT6HRB.js";import{e as P}from"./chunk-MKJIXTK4.js";import{d as C,e as S}from"./chunk-G6X6HETF.js";import{D as M,E as A,H as B,P as c,a as m,c as l,e as H,i as L,o as W,p as R,q as j,r as E,s as I}from"./chunk-ZX7BDGHH.js";function q(a,e,t,n,s,i=10){let r=t-a,o=n-e,d=Math.hypot(r,o);return d>0?(r/=d,o/=d):(r=0,o=-1),{ax:a+r*(s+i),ay:e+o*(s+i),dx:r,dy:o}}function _(a,e){return`
    <div class="analytics-grid">

      <div class="card col-6">
        <div class="card-title">${c("chart")} \u6301\u3061\u66F2\u306E\u7D2F\u7A4D\u6210\u9577 <span class="pill">\u521D\u62AB\u9732\u30D9\u30FC\u30B9</span></div>
        ${x("chart-growth")}
      </div>

      <div class="card col-6">
        <div class="card-title">${c("mic")} 1\u67A0\u3042\u305F\u308A\u306E\u66F2\u6570 <span class="pill">\u6642\u7CFB\u5217</span></div>
        ${x("chart-songs-per-stream")}
      </div>

      <div class="card col-6">
        <div class="card-title">${c("calendar")} \u66DC\u65E5\u5206\u5E03 <span class="pill">\u914D\u4FE1\u65E5</span></div>
        ${x("chart-dow",{class:"short"})}
      </div>

      <div class="card col-6">
        <div class="card-title">${c("chart")} \u6B4C\u5531\u56DE\u6570\u306E\u5206\u5E03 <span class="pill">\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0</span></div>
        ${x("chart-histogram",{class:"short"})}
      </div>

      <div class="card col-12">
        <div class="card-title">${c("artist")} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u5225 \u6B4C\u5531\u5408\u8A08 <span class="pill">TOP${P}</span></div>
        <div id="artist-bar-list" class="bar-list"></div>
      </div>

      <div class="card col-6">
        <div class="card-title">${c("sparkle")} \u4E45\u3057\u3076\u308A\u306B\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u524D\u56DE\u304B\u3089\u9577\u304B\u3063\u305FTOP10</span></div>
        <div id="comeback-list"></div>
      </div>

      <div class="card col-6">
        <div class="card-title">${c("time")} 1\u56DE\u3057\u304B\u6B4C\u308F\u308C\u3066\u3044\u306A\u3044\u66F2 <span class="pill">${a.filter(t=>t.count===1).length}\u66F2</span></div>
        <div id="oneshot-list"></div>
      </div>

    </div>
  `}function Y(a,e,t){K(a),V(e),F(e),X(a),Q(t.length?t:L(a)),U(a),tt(a)}function K(a){let e=b(),t=new Map;for(let u of a){if(!u.firstSung)continue;let v=H(u.firstSung);t.set(v,(t.get(v)||0)+1)}let n=Array.from(t.keys()).sort();if(!n.length)return;let s=[],i=[],r=0,o=z(n[0]),d=z(n[n.length-1]);for(;o<=d;){let u=H(o);r+=t.get(u)||0,s.push(A(o)),i.push(r),o=new Date(o.getFullYear(),o.getMonth()+1,1)}$("chart-growth","line",{labels:s,datasets:[{label:"\u7D2F\u7A4D\u6301\u3061\u66F2\u6570",data:i,borderColor:e.primaryStrong,backgroundColor:e.primary+"33",tension:.25,fill:!0,pointRadius:2,borderWidth:2}]})}function z(a){let[e,t]=a.split("-").map(Number);return new Date(e,t-1,1)}function V(a){let e=b(),t=[...a].sort((n,s)=>n.date-s.date);$("chart-songs-per-stream","line",{labels:t.map(n=>M(n.date)),datasets:[{label:"\u66F2\u6570",data:t.map(n=>n.songs.length),borderColor:e.accentStrong,backgroundColor:e.accent+"33",tension:.2,fill:!0,pointRadius:1.5,borderWidth:1.5}]},{scales:{x:{ticks:{maxTicksLimit:8}}}})}function F(a){let e=b(),t=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],n=new Array(7).fill(0),s=new Array(7).fill(0);for(let i of a)n[i.dayOfWeek]+=1,s[i.dayOfWeek]+=i.songs.length;$("chart-dow","bar",{labels:t,datasets:[{label:"\u914D\u4FE1\u56DE\u6570",data:n,backgroundColor:e.primary+"cc",borderColor:e.primaryStrong,borderWidth:1,yAxisID:"y",borderRadius:6},{label:"\u6B4C\u5531\u6570",data:s,backgroundColor:e.accent+"cc",borderColor:e.accentStrong,borderWidth:1,yAxisID:"y2",borderRadius:6}]},{scales:{y:{position:"left",title:{display:!0,text:"\u914D\u4FE1",color:e.inkMute,font:{size:10}}},y2:{position:"right",title:{display:!0,text:"\u6B4C\u5531",color:e.inkMute,font:{size:10}},grid:{display:!1},beginAtZero:!0}}})}function X(a){let e=b(),t=[{label:"1\u56DE",range:[1,1]},{label:"2\u56DE",range:[2,2]},{label:"3\u56DE",range:[3,3]},{label:"4-5\u56DE",range:[4,5]},{label:"6-10\u56DE",range:[6,10]},{label:"11-20\u56DE",range:[11,20]},{label:"21\u56DE\u301C",range:[21,1/0]}],n=t.map(s=>a.filter(i=>i.count>=s.range[0]&&i.count<=s.range[1]).length);$("chart-histogram","bar",{labels:t.map(s=>s.label),datasets:[{label:"\u66F2\u6570",data:n,backgroundColor:e.primary+"cc",borderColor:e.primaryStrong,borderWidth:1,borderRadius:6}]},{plugins:{legend:{display:!1}}})}function Q(a){let e=a.slice(0,P),t=m("#artist-bar-list");if(!e.length){t.innerHTML='<div class="empty-state">\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093</div>';return}let n=e[0]?.totalCount||1;t.innerHTML=e.map((s,i)=>{let r=Math.round(s.totalCount/n*100);return`
      <div class="bar-row" data-artist-search="${l(s.artist)}" style="cursor:pointer;" title="\u30AF\u30EA\u30C3\u30AF\u3067\u3053\u306E\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u306E\u66F2\u3092\u8868\u793A">
        <div class="bar-rank">${i+1}</div>
        <div class="bar-content">
          <div class="bar-label">${l(s.artist)} <span style="color:var(--ink-mute);font-size:11px;">\uFF08${s.songCount}\u66F2\uFF09</span></div>
          <div class="bar-bar accent" style="width:${r}%;"></div>
        </div>
        <div class="bar-value">${s.totalCount}</div>
      </div>
    `}).join("")}function U(a){let e=W(a,10);m("#comeback-list").innerHTML=e.length?e.map((t,n)=>`
    <div class="activity-row" data-songkey="${l(t.song.key)}" data-songtitle="${l(t.song.title)}" data-songartist="${l(t.song.artist)}" style="cursor:pointer;" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <span class="a-date">${t.maxGap}\u65E5</span>
      <span class="a-title">${l(t.song.title)} <span style="color:var(--ink-mute);">/ ${l(t.song.artist)}</span></span>
      <span class="a-meta">${M(t.gapStart)}\u2192${M(t.gapEnd)}</span>
    </div>
  `).join(""):'<div class="empty-state">\u8A72\u5F53\u30C7\u30FC\u30BF\u306A\u3057</div>'}function tt(a){let e=a.filter(t=>t.count===1).sort((t,n)=>(n.lastSung?.getTime()||0)-(t.lastSung?.getTime()||0)).slice(0,10);m("#oneshot-list").innerHTML=e.length?e.map(t=>`
    <div class="activity-row" data-songkey="${l(t.key)}" data-songtitle="${l(t.title)}" data-songartist="${l(t.artist)}" style="cursor:pointer;" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <span class="a-date">${t.lastSung?M(t.lastSung):"\u2014"}</span>
      <span class="a-title">${l(t.title)} <span style="color:var(--ink-mute);">/ ${l(t.artist)}</span></span>
      <span class="a-meta">${t.daysSinceLast!=null?t.daysSinceLast+"\u65E5\u524D":"\u2014"}</span>
    </div>
  `).join(""):'<div class="empty-state">\u8A72\u5F53\u30C7\u30FC\u30BF\u306A\u3057</div>'}function Lt(){let{songs:a,streams:e,artists:t}=S.data,s=[...a].sort((k,f)=>f.count-k.count).slice(0,5),i=s[0]?.count||1,r=e.slice(0,5),o=C(),d=m("#panel-dashboard"),u=I(e,o),v=j(e).slice(-12),p=lt(a),g=`
    <div class="card dashboard-card dashboard-top-card">
      <div class="card-title">${c("rank")} TOP5 \u697D\u66F2</div>
      <div class="bar-list">
        ${s.length?s.map((k,f)=>D(k,f,i)).join(""):'<div class="empty-state">\u66F2\u30C7\u30FC\u30BF\u306A\u3057</div>'}
      </div>
    </div>
  `;d.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-trio-grid">
        ${g}
        ${et(e)}
        <div class="card dashboard-card dashboard-genre-card">
          <div class="card-title">${c("chart")} \u30B8\u30E3\u30F3\u30EB\u5206\u5E03 <span class="pill">${a.length}\u66F2</span></div>
          ${ot(p)}
        </div>
      </div>
      <div class="dashboard-overview-grid">
        <div class="card dashboard-card dashboard-monthly-card">
          <div class="card-title">${c("music")} \u6708\u5225 \u6B4C\u5531\u6570 <span class="pill">\u76F4\u8FD112\u304B\u6708</span></div>
          ${v.length?x("chart-monthly",{class:"short"}):'<div class="empty-state">\u6708\u5225\u30C7\u30FC\u30BF\u306A\u3057</div>'}
        </div>
        <div class="card dashboard-card dashboard-heatmap-card">
          <div class="card-title">${c("calendar")} \u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7 <span class="pill">\u76F4\u8FD11\u5E74</span></div>
          ${vt(u)}
        </div>
      </div>
      ${nt()}
      ${rt(r)}
      <div class="dashboard-analytics-section" id="dashboard-analytics">
        ${_(a,e)}
      </div>
    </div>
  `,it(),at(),ht(p),mt(v),Y(a,e,t);let h=d.querySelector(".heatmap-wrap");h&&(h.scrollLeft=h.scrollWidth)}function at(){let a=m("#dashboard-hits-toggle"),e=a?.closest(".dashboard-list-card");if(!a||!e)return;let t=n=>{e.querySelectorAll("[data-hits-list]").forEach(s=>{s.hidden=s.dataset.hitsList!==n}),a.querySelectorAll("[data-hits-period]").forEach(s=>{let i=s.dataset.hitsPeriod===n;s.classList.toggle("is-active",i),s.setAttribute("aria-selected",String(i))}),a.dataset.active=n};a.addEventListener("click",n=>{let s=n.target.closest("[data-hits-period]");s&&t(s.dataset.hitsPeriod)}),t("month")}function et(a){let e=R(a,"month",C()),t=R(a,"year",C());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-hits">
      <div class="card-title">${c("rank")} \u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2
        <span class="seg-control" id="dashboard-hits-toggle" data-active="month" role="tablist" aria-label="\u671F\u9593\u5207\u66FF">
          <span class="seg-thumb" aria-hidden="true"></span>
          <button class="seg-btn is-active" type="button" role="tab" aria-selected="true" data-hits-period="month">\u4ECA\u6708</button>
          <button class="seg-btn" type="button" role="tab" aria-selected="false" data-hits-period="year">\u4ECA\u5E74</button>
        </span>
      </div>
      <div class="bar-list" data-hits-list="month">
        ${e.length?e.slice(0,5).map((n,s)=>D(n,s,e[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
      <div class="bar-list" data-hits-list="year" hidden>
        ${t.length?t.slice(0,5).map((n,s)=>D(n,s,t[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>
  `}function st(a){let e=Math.max(0,Math.floor(a)),t=Math.floor(e/3600),n=Math.floor(e%3600/60),s=e%60;return t>0?`${t}:${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${n}:${String(s).padStart(2,"0")}`}function nt(){let a=T().slice(0,6);return a.length?`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">${c("play")} \u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${a.map((e,t)=>{let n=B(e.url),s=Math.floor((Date.now()-(e.updatedAt||0))/864e5),i=s<=0?"\u4ECA\u65E5":`${s}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${t}" title="${l(e.title||"")}">
            ${n?`<img class="dashboard-resume-thumb" src="${l(n)}" alt="" width="320" height="180" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${l(e.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">${c("time")} ${st(e.t)} \u304B\u3089 \u30FB ${i}</span>
          </button>`}).join("")}
      </div>
    </div>`:""}function it(){let a=m("#dashboard-resume-list");a&&(a.onclick=n=>{let s=n.target.closest("[data-resume-idx]");if(!s)return;let i=T()[Number(s.dataset.resumeIdx)];if(!i?.url)return;let r=null;i.channel!=null&&i.index!=null&&(r=(S.channelData?.combined?.streams||S.data?.streams||[]).find(d=>d.channel===i.channel&&d.index===i.index)||null),N(r||{url:i.url,title:i.title,isMv:!!i.isMv},i.t)});let e=m("#dashboard-resume-clear");e&&(e.onclick=()=>{G(),m("#panel-dashboard .dashboard-resume-card")?.remove()});let t=m("#dashboard-resume-queue");t&&(t.onclick=()=>{let n=T(),s=S.channelData?.combined?.streams||S.data?.streams||[],i=n.map((r,o)=>{let d=r.channel!=null&&r.index!=null?s.find(u=>u.channel===r.channel&&u.index===r.index):null;return d?.url?{kind:"stream",key:`${d.channel}:${d.index}`,stream:d}:r.url?{kind:"mv",key:`history:${o}`,video:{url:r.url,title:r.title||"\u52D5\u753B",isMv:!!r.isMv}}:null}).filter(Boolean);i.length&&O({name:"\u8996\u8074\u5C65\u6B74",items:i,idx:0})})}function rt(a){return`
    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">${c("video")} \u76F4\u8FD1\u306E\u6B4C\u67A0 <span class="pill">\u6700\u65B0${a.length}\u4EF6</span></div>
      ${a.map(e=>`
        <div class="activity-row">
          <span class="a-date">${M(e.date)}</span>
          <span class="a-title">${e.url?`<a href="${l(e.url)}" target="_blank" rel="noopener">${l(e.title||"\u914D\u4FE1")}</a>`:l(e.title)}</span>
          <span class="a-meta">${c("mic")} ${e.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function D(a,e,t){let n=Math.round(a.count/t*100);return`
    <div class="bar-row clickable" role="button" tabindex="0" data-songkey="${l(a.key)}" data-songtitle="${l(a.title)}" data-songartist="${l(a.artist)}">
      <div class="bar-rank">${e+1}</div>
      <div class="bar-content">
        <div class="bar-label">${l(a.title)}${a.artist?` <span class="bar-label-sep">/</span> <button class="bar-label-artist artist-search-btn" type="button" data-artist-search="${l(a.artist)}" title="\u3053\u306E\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u306E\u66F2\u3092\u7D5E\u308A\u8FBC\u3080">${l(a.artist)}</button>`:""}</div>
        <div class="bar-bar" style="width:${n}%;"></div>
      </div>
      <div class="bar-value">${a.count}</div>
    </div>
  `}function lt(a){let e=new Map;for(let i of a){let r=i.genre||i.genreText||"\u672A\u5206\u985E";!r||r==="\u672A\u5206\u985E"||e.set(r,(e.get(r)||0)+1)}let t=Array.from(e.entries()).sort((i,r)=>r[1]-i[1]);if(t.length<=6)return t;let n=t.slice(0,5),s=t.slice(5).reduce((i,[,r])=>i+r,0);return[...n,["\u305D\u306E\u4ED6",s]]}function Z(){let a=b();return[a.primary,a.accent,a.gold,a.primaryStrong,a.accentStrong,"#9b7ed9"]}function ot(a){if(!a.length)return'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>';let e=a.reduce((n,[,s])=>n+s,0),t=Z();return`
    <div class="genre-doughnut" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      ${x("chart-genre",{class:"genre-chart"})}
      <div class="genre-table">
        ${a.map(([n,s],i)=>`
          <div class="genre-trow" style="--gc:${t[i%t.length]}" title="${l(n)}: ${s}\u66F2">
            <span class="genre-tdot" aria-hidden="true"></span>
            <span class="genre-tname">${l(n)}</span>
            <span class="genre-tvals"><strong class="genre-tpct">${Math.round(s/e*100)}%</strong><span class="genre-tcount">(${s}\u66F2)</span></span>
          </div>
        `).join("")}
      </div>
    </div>
  `}function dt(a){return{id:"genre-pct",afterDatasetsDraw(e){let t=e.getDatasetMeta(0);if(!t?.data?.length)return;let n=e.data.datasets[0].data,s=n.reduce((r,o)=>r+o,0);if(!s)return;let{ctx:i}=e;i.save(),t.data.forEach((r,o)=>{let d=Math.round(n[o]/s*100),u=(r.startAngle+r.endAngle)/2,v=a[o%a.length];if(d>=4){let p=(r.innerRadius+r.outerRadius)/2,g=r.x+Math.cos(u)*p,h=r.y+Math.sin(u)*p;i.fillStyle="#fff",i.font='800 12px "Noto Sans JP", "Yu Gothic", system-ui, sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(`${d}%`,g,h)}else{let p=Math.cos(u),g=Math.sin(u),h=r.x+p*r.outerRadius,k=r.y+g*r.outerRadius,f=r.x+p*(r.outerRadius+6),y=r.y+g*(r.outerRadius+6),w=f+(p>=0?12:-12);i.strokeStyle=v,i.lineWidth=1.2,i.beginPath(),i.moveTo(h,k),i.lineTo(f,y),i.lineTo(w,y),i.stroke(),i.fillStyle=v,i.font='800 11px "Noto Sans JP", "Yu Gothic", system-ui, sans-serif',i.textAlign=p>=0?"left":"right",i.textBaseline="middle",i.fillText(`${d}%`,w+(p>=0?3:-3),y)}}),i.restore()}}}function ct(a){return{id:"genre-center",afterDraw(e){let t=e.tooltip;if(t&&t.opacity!==0&&t.getActiveElements?.().length)return;let n=e.getDatasetMeta(0)?.data?.[0];if(!n)return;let s=b(),{ctx:i}=e;i.save(),i.textAlign="center",i.textBaseline="middle",i.fillStyle=s.ink,i.font='800 18px "Noto Sans JP", "Yu Gothic", system-ui, sans-serif',i.fillText(`${a}\u66F2`,n.x,n.y-9),i.fillStyle=s.inkMute,i.font='500 11px "Noto Sans JP", "Yu Gothic", system-ui, sans-serif',i.fillText("\u5168\u4F53",n.x,n.y+12),i.restore()}}}var J=!1;function ut(){if(J)return;J=!0;let a=()=>{let e=document.getElementById("chart-genre-tip");e&&(e.hidden=!0)};document.addEventListener("scroll",a,{capture:!0,passive:!0}),window.addEventListener("resize",a)}function pt(a){let{chart:e,tooltip:t}=a,n=document.getElementById("chart-genre-tip");n||(n=document.createElement("div"),n.id="chart-genre-tip",n.className="global-tip",n.setAttribute("role","tooltip"),n.hidden=!0,document.body.appendChild(n),ut());let s=t.dataPoints?.[0]?.element;if(t.opacity===0||!s||s.outerRadius==null){n.hidden=!0;return}let i=[...t.title||[]];for(let y of t.body||[])i.push(...y.lines||[]);n.innerHTML=i.map((y,w)=>w===0?`<strong>${l(y)}</strong>`:`<span>${l(y)}</span>`).join("<br>"),n.hidden=!1,n.style.visibility="hidden";let r=e.canvas.getBoundingClientRect(),{ax:o,ay:d,dx:u,dy:v}=q(r.left+s.x,r.top+s.y,r.left+t.caretX,r.top+t.caretY,s.outerRadius,12),p=n.offsetWidth,g=n.offsetHeight,h=8,k=Math.max(h,Math.min(o-p/2+u*p/2,window.innerWidth-p-h)),f=Math.max(h,Math.min(d-g/2+v*g/2,window.innerHeight-g-h));n.style.left=`${Math.round(k)}px`,n.style.top=`${Math.round(f)}px`,n.style.visibility=""}function ht(a){if(!a.length)return;let e=b(),t=Z(),n=a.reduce((s,[,i])=>s+i,0);$("chart-genre","doughnut",{labels:a.map(([s])=>s),datasets:[{data:a.map(([,s])=>s),backgroundColor:a.map((s,i)=>t[i%t.length]),borderColor:e.surface,borderWidth:2}]},{cutout:"58%",layout:{padding:14},scales:{x:{display:!1},y:{display:!1}},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:pt,callbacks:{label:s=>{let i=s.dataset.data.reduce((o,d)=>o+d,0),r=i?Math.round(s.parsed/i*100):0;return` ${s.label}: ${s.parsed}\u66F2 (${r}%)`}}}}},[dt(t),ct(n)])}function mt(a){if(!a.length)return;let e=a.map(n=>A(n.date).replace(/^\d{4}\//,"")),t=b();$("chart-monthly","line",{labels:e,datasets:[{label:"\u6B4C\u5531\u6570",data:a.map(n=>n.songs),borderColor:t.primaryStrong,backgroundColor:t.primary+"30",tension:.4,fill:!0,pointRadius:3,pointHoverRadius:5,borderWidth:2},{label:"\u6B4C\u67A0\u6570",data:a.map(n=>n.streams),borderColor:t.accent,backgroundColor:"transparent",tension:.4,fill:!1,pointRadius:2,pointHoverRadius:4,borderWidth:1.5,borderDash:[4,3],yAxisID:"y2"}]},{plugins:{legend:{display:!0,position:"top",align:"end",labels:{boxWidth:10,padding:10,font:{size:10}}}},scales:{y:{beginAtZero:!0},y2:{position:"right",beginAtZero:!0,grid:{drawOnChartArea:!1},ticks:{color:t.accentStrong,font:{size:10},precision:0}}}})}function vt(a){let t=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].map(s=>`<div>${s}</div>`).join(""),n=a.map(s=>s.inRange?`<div class="heatmap-cell ${E(s.value)}" title="${s.iso}: ${s.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("");return`
    <div class="heatmap-flex">
      <div class="heatmap-row-labels">${t}</div>
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
  `}export{Lt as renderDashboard};
