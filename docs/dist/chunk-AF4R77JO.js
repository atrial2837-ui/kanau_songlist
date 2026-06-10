import{e as R}from"./chunk-N3S3MIXU.js";import{E as P,G as S,H as x,I as T,J as B,a as h,d as c}from"./chunk-FKVR6ZKV.js";var Y="kanau-playlists",E=24,g="all-streams",k=1,A="newest",_="grid",$=null;function v(){try{return JSON.parse(localStorage.getItem(Y)||"[]")}catch{return[]}}function M(t){try{localStorage.setItem(Y,JSON.stringify(t))}catch{}}function q(t){let s=v(),a={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return s.unshift(a),M(s),a}function K(t){M(v().filter(s=>s.id!==t))}function O(t,s){let a=v(),l=a.find(e=>e.id===t);return!l||l.streams.includes(s)?!1:(l.streams.push(s),M(a),!0)}function J(t,s){let a=v(),l=a.find(e=>e.id===t);l&&(l.streams=l.streams.filter(e=>e!==s),M(a))}function dt(t){return v().some(s=>s.streams.includes(t))}function w(){let t=h("#panel-playlists");if(!t)return;let s=R.data?.streams||[];t.innerHTML=`
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u30B5\u30D6\u30BF\u30D6">
        <button class="pl-subtab${g==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${g==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${g==="music"?" active":""}"
          data-pl-subtab="music" role="tab"
          aria-selected="${g==="music"}">\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2</button>
        <button class="pl-subtab${g==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${g==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${v().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${g==="all-streams"?z(s,k):g==="music"?W():et(s)}
      </div>
    </div>
  `,t.onclick=a=>{let l=a.target.closest("[data-pl-subtab]");if(l){g=l.dataset.plSubtab,g==="all-streams"&&(k=1),w(),g==="music"&&Z();return}let e=a.target.closest("[data-pl-sort]");if(e){A=e.dataset.plSort,k=1,V(s);return}let d=a.target.closest("[data-pl-page]");if(d&&!d.disabled){k=Number(d.dataset.plPage),V(s);return}let b=a.target.closest("[data-music-view]");if(b){_=b.dataset.musicView;let n=h("#pl-subtab-body");n&&$&&(n.innerHTML=D($));return}let y=a.target.closest("[data-play-music]");if(y&&$?.length){let n=Number(y.dataset.playMusic);import("./chunk-7BYEZ3JH.js").then(i=>i.playMusicQueue($,n));return}let r=a.target.closest("[data-playlist-add-mv]");if(r){let n=r.dataset.playlistAddMv,i=r.dataset.streamTitle||"";rt("mv:"+n,i);return}g==="my-playlists"&&nt(a,s)},t.addEventListener("error",a=>{let l=a.target;if(!l.classList.contains("pl-sg-thumb"))return;let e=l.dataset.fallback;e&&l.src!==e&&(l.src=e,delete l.dataset.fallback)},!0)}var Q=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function U(t,s){let a=t.slice();return s==="oldest"?a.reverse():s==="most-songs"?a.sort((l,e)=>(e.songs?.length??0)-(l.songs?.length??0)):s==="fewest-songs"?a.sort((l,e)=>(l.songs?.length??0)-(e.songs?.length??0)):a}function z(t,s){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let a=U(t,A),l=a.length,e=Math.max(1,Math.ceil(l/E)),d=Math.min(Math.max(1,s),e),b=(d-1)*E,r=a.slice(b,b+E).map(o=>{let f=S(o),u=T(o.url),p=B(o.url),m=o.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${c(f)}"
        title="${c(o.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${u?`<img class="pl-sg-thumb" src="${c(u)}"
                data-fallback="${c(p)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${m}<span class="pl-sg-badge-unit">\u66F2</span></span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${c(o.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${c(P(o.date)||"")}</span>
        </div>
      </button>`}).join(""),n=e>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${d-1}"
        ${d<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${d} / ${e}</span>
      <button class="pl-page-btn" data-pl-page="${d+1}"
        ${d>=e?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${Q.map(o=>`
        <button class="pl-sort-opt${A===o.key?" active":""}"
          data-pl-sort="${o.key}" type="button">${o.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${r}</div>${n}`}function V(t){let s=h("#pl-subtab-body");if(!s){w();return}s.innerHTML=z(t,k);let a=h("#panel-playlists");a&&a.addEventListener("error",l=>{let e=l.target;if(!e.classList.contains("pl-sg-thumb"))return;let d=e.dataset.fallback;d&&e.src!==d&&(e.src=d,delete e.dataset.fallback)},{once:!0,capture:!0}),s.scrollIntoView({behavior:"smooth",block:"start"})}function W(){return'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p></div>'}async function Z(){if($===null)try{$=(await(await fetch("/data/music.json")).json()).videos||[]}catch{$=[]}let t=h("#pl-subtab-body");t&&g==="music"&&(t.innerHTML=D($))}function D(t){let s=`
    <div class="pl-music-viewbar">
      <span class="pl-music-count">${t.length}\u4EF6</span>
      <div class="pl-music-views">
        <button class="pl-music-view-btn${_==="grid"?" active":""}" data-music-view="grid"     type="button">\u30B0\u30EA\u30C3\u30C9</button>
        <button class="pl-music-view-btn${_==="list"?" active":""}" data-music-view="list"     type="button">\u30EA\u30B9\u30C8</button>
        <button class="pl-music-view-btn${_==="category"?" active":""}" data-music-view="category" type="button">\u30AB\u30C6\u30B4\u30EA</button>
      </div>
    </div>`;return t.length?_==="grid"?s+H(t):_==="list"?s+tt(t):_==="category"?s+st(t):s+H(t):`${s}<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>`}function C(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function I(t,s){let a=T(t.url),l=B(t.url),{label:e,cls:d,sub:b}=C(t);return`
    <div class="mv-card">
      <button class="mv-card-thumb-btn" type="button" data-play-music="${s}" aria-label="\u518D\u751F">
        ${a?`<img class="mv-card-thumb" src="${c(a)}" data-fallback="${c(l)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-play-icon">\u25B6</span>
        <span class="mv-type-badge ${d}">${e}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${c(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${c(b)}</span>
      </div>
      <div class="mv-card-actions">
        <button class="mv-add-btn" type="button"
          data-playlist-add-mv="${c(t.id)}"
          data-stream-title="${c(t.title||"")}"
          title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
      </div>
    </div>`}function X(t,s){let{label:a,cls:l,sub:e}=C(t);return`
    <div class="mv-list-row">
      <span class="mv-list-num">${s+1}</span>
      <button class="mv-list-play" type="button" data-play-music="${s}" aria-label="\u518D\u751F">\u25B6</button>
      <div class="mv-list-info">
        <span class="mv-list-title">${c(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${c(e)}</span>
      </div>
      <span class="mv-type-badge ${l}">${a}</span>
      <button class="mv-add-btn" type="button"
        data-playlist-add-mv="${c(t.id)}"
        data-stream-title="${c(t.title||"")}"
        title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">\uFF0B</button>
    </div>`}function H(t){return`<div class="mv-grid">${t.map((s,a)=>I(s,a)).join("")}</div>`}function tt(t){return`<div class="mv-list">${t.map((s,a)=>X(s,a)).join("")}</div>`}function st(t){let s=t.map((l,e)=>({v:l,i:e})).filter(({v:l})=>l.type==="original"),a=t.map((l,e)=>({v:l,i:e})).filter(({v:l})=>l.type==="cover");return`
    <div class="mv-category">
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2 <span class="mv-cat-count">${s.length}</span></h3>
        ${s.length?`<div class="mv-grid">${s.map(({v:l,i:e})=>I(l,e)).join("")}</div>`:'<p class="mv-cat-empty">\u306A\u3057</p>'}
      </div>
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09 <span class="mv-cat-count">${a.length}</span></h3>
        ${a.length?`<div class="mv-grid">${a.map(({v:l,i:e})=>I(l,e)).join("")}</div>`:'<p class="mv-cat-empty">\u306A\u3057</p>'}
      </div>
    </div>`}function pt(){return $||[]}function at(t){if(!t?.startsWith("mv:"))return null;let s=t.slice(3);return($||[]).find(a=>a.id===s)||null}function et(t){let s=v();return s.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${s.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${s.map(a=>lt(a,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u2606 \u4FDD\u5B58</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">\uFF0B \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function lt(t,s){let a=t.streams.map(r=>{let n=r.startsWith("mv:"),i=n?at(r):null;return{skey:r,isMv:n,mv:i,stream:n?null:s.find(o=>S(o)===r)}}),l=a.find(({stream:r,mv:n})=>r?.url||n?.url)?.stream?.url||a.find(({mv:r})=>r?.url)?.mv?.url,e=l?`<img class="pl-card-cover" src="${c(T(l))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",d=a.length,b=a.map(({skey:r,isMv:n,mv:i,stream:o},f)=>{let u=c(t.id+"|:|"+r),p=`
      <div class="pl-sort-btns">
        <button class="pl-sort-btn" data-pl-move="${u}|:|up"
          type="button" title="\u4E0A\u3078" ${f===0?"disabled":""}>\u2191</button>
        <button class="pl-sort-btn" data-pl-move="${u}|:|down"
          type="button" title="\u4E0B\u3078" ${f===d-1?"disabled":""}>\u2193</button>
      </div>`,m=`<button class="pl-rm-btn" data-pl-rm-stream="${u}" type="button" title="\u524A\u9664">\u2715</button>`;if(n){if(!i)return`
        <div class="pl-stream-row pl-stream-missing">${p}
          <span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${m}
        </div>`;let{label:L,sub:F}=C(i),G=i.type||"original",j=($||[]).indexOf(i);return`
        <div class="pl-stream-row">
          ${p}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${G}">${L}</span></span>
            <span class="pl-stream-title">${c(i.title||"\u2014")}</span>
            <span class="pl-stream-meta">${c(F)}</span>
          </div>
          <div class="pl-stream-actions">
            ${j>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${j}" type="button" title="\u518D\u751F">\u25B6</button>`:""}
            ${m}
          </div>
        </div>`}return o?`
      <div class="pl-stream-row">
        ${p}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${P(o.date)}</span>
          <span class="pl-stream-title">${c(o.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${o.index}\u67A0 \xB7 ${o.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${o.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${c(r)}"
                type="button" title="\u518D\u751F">\u25B6</button>`:""}
          ${m}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing">${p}
        <span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span>${m}
      </div>`}).join(""),y=a.map(({stream:r,mv:n})=>{let i=r?.url||n?.url;return i?x(i):""}).filter(Boolean);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${e?`<div class="pl-card-cover-wrap">${e}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${c(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${c(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u4EF6</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${c(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${b||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
      ${y.length?`
      <div class="pl-card-footer">
        <button class="pl-yt-share-btn" data-pl-yt-share="${c(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${y.length}\u672C)
        </button>
      </div>`:""}
    </div>`}function nt(t,s){if(t.target.closest("#pl-new-btn")){it();return}let a=t.target.closest("[data-pl-del]");if(a){let n=a.dataset.plDel,i=v().find(o=>o.id===n);i&&confirm(`\u300C${i.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(K(n),w());return}let l=t.target.closest("[data-pl-rm-stream]");if(l){let[n,i]=l.dataset.plRmStream.split("|:|");J(n,i),w();return}let e=t.target.closest("[data-pl-play-stream]");if(e){let n=e.dataset.plPlayStream,i=s.find(o=>S(o)===n);i?.url&&window.__openStreamViewer?.(i);return}let d=t.target.closest("[data-play-music-pl]");if(d&&$?.length){let n=Number(d.dataset.playMusicPl);import("./chunk-7BYEZ3JH.js").then(i=>i.playMusicQueue($,n));return}let b=t.target.closest("[data-pl-rename]");if(b){let n=b.dataset.plRename,i=v().find(f=>f.id===n);if(!i)return;let o=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",i.name)?.trim();if(o){let f=v(),u=f.find(p=>p.id===n);u&&(u.name=o,M(f),w())}return}let y=t.target.closest("[data-pl-move]");if(y){let n=y.dataset.plMove.split("|:|"),[i,o,f]=n,u=v(),p=u.find(L=>L.id===i);if(!p)return;let m=p.streams.indexOf(o);if(m<0)return;f==="up"&&m>0?([p.streams[m-1],p.streams[m]]=[p.streams[m],p.streams[m-1]],M(u),w()):f==="down"&&m<p.streams.length-1&&([p.streams[m],p.streams[m+1]]=[p.streams[m+1],p.streams[m]],M(u),w());return}let r=t.target.closest("[data-pl-yt-share]");if(r){let n=r.dataset.plYtShare,i=v().find(u=>u.id===n);if(!i)return;let o=i.streams.map(u=>s.find(p=>S(p)===u)).filter(u=>u?.url).map(u=>x(u.url)).filter(Boolean);if(!o.length){alert("YouTube\u306EURL\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u308B\u914D\u4FE1\u304C\u3042\u308A\u307E\u305B\u3093");return}let f=`https://www.youtube.com/watch_videos?video_ids=${o.join(",")}`;window.open(f,"_blank","noopener noreferrer");return}}function it(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(q(t),w())}function rt(t,s){let a=h("#pl-add-modal");a||(a=document.createElement("div"),a.id="pl-add-modal",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),document.body.appendChild(a));let l=v(),e=()=>{let b=v(),y=b.length?b.map(r=>{let n=r.streams.includes(t);return`
            <button class="pl-modal-item${n?" pl-modal-item--added":" pl-modal-item--free"}"
              data-pl-add="${c(r.id)}"
              ${n?'disabled aria-disabled="true"':""} type="button">
              <div class="pl-modal-item-info">
                <span class="pl-modal-item-name">${c(r.name)}</span>
                <span class="pl-modal-item-count">${r.streams.length}\u67A0</span>
              </div>
              <span class="pl-modal-item-status${n?" status--added":" status--free"}">
                ${n?'<span class="pl-modal-status-check">\u2713</span> \u767B\u9332\u6E08\u307F':"\uFF0B \u8FFD\u52A0"}
              </span>
            </button>`}).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u5148\u306B\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u3057\u3066\u304F\u3060\u3055\u3044</span></p>';a.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148\u3092\u9078\u629E</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
        </div>
        <div class="pl-modal-sub">${c(s||"\u914D\u4FE1")}</div>
        <div class="pl-modal-list" id="pl-modal-list">${y}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">\uFF0B</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,a.hidden=!1,a.querySelector("#pl-modal-close").addEventListener("click",d),a.querySelector("#pl-modal-backdrop").addEventListener("click",d),a.querySelector("#pl-modal-new").addEventListener("click",()=>{let r=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!r)return;let n=q(r);O(n.id,t),d(),N(`\u300C${r}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)}),a.querySelectorAll("[data-pl-add]:not([disabled])").forEach(r=>{r.addEventListener("click",()=>{let n=r.dataset.plAdd,i=v().find(o=>o.id===n);O(n,t),e(),N(`\u300C${i?.name}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`)})})},d=()=>{a.hidden=!0};e(),document.addEventListener("keydown",function b(y){y.key==="Escape"&&(d(),document.removeEventListener("keydown",b))})}function N(t){let s=h("#pl-toast");s||(s=document.createElement("div"),s.id="pl-toast",document.body.appendChild(s)),s.textContent=t,s.classList.add("pl-toast--show"),clearTimeout(s._timer),s._timer=setTimeout(()=>s.classList.remove("pl-toast--show"),2500)}export{O as addStreamToPlaylist,q as createPlaylist,K as deletePlaylist,pt as getMusicVideos,v as getPlaylists,dt as isStreamInAnyPlaylist,J as removeStreamFromPlaylist,w as renderPlaylists,at as resolveMusicVideoId,rt as showAddToPlaylistModal};
