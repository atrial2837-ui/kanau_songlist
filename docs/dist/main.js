import{b as Vt,c as Nt,d as qt,i as Bt,k as Lt,l as st}from"./chunk-3QAEH344.js";import{a as Yt,b as Rt,e as $t,f as Ut}from"./chunk-SIADDXVK.js";import{a as O}from"./chunk-MKJIXTK4.js";import{a as At,b as wt,c as Dt,e as d}from"./chunk-N3S3MIXU.js";import{D as kt,E as T,G as q,L as D,M as Ht,a as l,b as S,d as m}from"./chunk-FKVR6ZKV.js";var $=-1,C=[],St=null;function Kt(t){St=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
    <div id="omni-box">
      <div class="omni-input-row">
        <span class="omni-search-icon" aria-hidden="true">\u{1F50D}</span>
        <input
          id="omni-input"
          class="omni-input"
          type="search"
          placeholder="\u66F2\u540D\u30FB\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u30FB\u914D\u4FE1\u3092\u691C\u7D22\u2026"
          autocomplete="off"
          spellcheck="false"
          aria-label="\u30B5\u30A4\u30C8\u5185\u691C\u7D22"
          aria-autocomplete="list"
          aria-controls="omni-listbox"
        >
        <kbd class="omni-esc-key">Esc</kbd>
      </div>
      <div id="omni-listbox" class="omni-listbox" role="listbox" aria-label="\u691C\u7D22\u7D50\u679C"></div>
      <div class="omni-footer">
        <span><kbd>\u2191</kbd><kbd>\u2193</kbd> \u79FB\u52D5</span>
        <span><kbd>Enter</kbd> \u9078\u629E</span>
        <span><kbd>Esc</kbd> \u9589\u3058\u308B</span>
      </div>
    </div>
  `,document.body.appendChild(e),e.addEventListener("click",s=>{s.target===e&&G()});let n=document.getElementById("omni-input");n.addEventListener("input",()=>Qt(n.value)),n.addEventListener("keydown",ue),document.getElementById("omni-listbox").addEventListener("click",s=>{let i=s.target.closest("[data-omni-idx]");i&&zt(Number(i.dataset.omniIdx))})}function Ot(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,$=-1,C=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Qt("")}function G(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),$=-1}function Gt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function ue(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),$=Math.min($+1,e.length-1),jt(e)):t.key==="ArrowUp"?(t.preventDefault(),$=Math.max($-1,-1),jt(e)):t.key==="Enter"?(t.preventDefault(),$>=0&&C[$]&&zt($)):t.key==="Escape"&&(t.preventDefault(),G())}function jt(t){t.forEach((e,n)=>{e.classList.toggle("is-active",n===$),e.setAttribute("aria-selected",String(n===$))}),$>=0&&t[$]?.scrollIntoView({block:"nearest"})}function zt(t){let e=C[t];!e||!St||(G(),St(e))}function Qt(t){let e=document.getElementById("omni-listbox");if(!e)return;$=-1,C=[];let n=d.data?.songs||[],s=d.data?.streams||[],i=t.trim().toLowerCase(),a="",o=0;if(!d.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!i){let r=n.slice(0,8);if(r.length){a+=at("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let v of r)C.push({type:"song",song:v}),a+=Ft(v,o++,"")}e.innerHTML=a||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let p=n.filter(r=>B(r.title).includes(i)||B(r.artist).includes(i)).slice(0,8);if(p.length){a+=at("\u{1F3B5} \u66F2");for(let r of p)C.push({type:"song",song:r}),a+=Ft(r,o++,i)}let u=new Set,c=[];for(let r of n)if(B(r.artist).includes(i)&&!u.has(r.artist)&&(u.add(r.artist),c.push(r.artist),c.length>=4))break;if(c.length){a+=at("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let r of c){let v=n.filter(f=>f.artist===r).length;C.push({type:"artist",artist:r}),a+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${o++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${it(m(r),i)}</span>
          <span class="omni-item-meta">${v}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(s.length){let r=s.filter(v=>B(v.title).includes(i)||v.songs?.some(f=>B(f.title).includes(i)||B(f.artist).includes(i))).slice(0,5);if(r.length){a+=at("\u{1F4C5} \u914D\u4FE1\u67A0");for(let v of r){C.push({type:"stream",stream:v});let f=v.channel==="new"?"\u65B0ch":v.channel==="old"?"\u65E7ch":"";a+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${o++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${it(m(v.title||"\u914D\u4FE1"),i)}</span>
            <span class="omni-item-meta">${T(v.date)}${f?" \xB7 "+f:""} \xB7 ${v.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}a||(a=`<div class="omni-empty">\u300C${m(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=a}function at(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function Ft(t,e,n){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${it(m(t.title),n)}</span>
      <span class="omni-item-meta">${it(m(t.artist||""),n)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function B(t){return String(t||"").toLowerCase()}function it(t,e){if(!e)return t;let s=t.toLowerCase().indexOf(e);return s<0?t:t.slice(0,s)+'<mark class="hl">'+t.slice(s,s+e.length)+"</mark>"+t.slice(s+e.length)}Rt();Dt();var te={dashboard:()=>import("./chunk-NX4KOKQI.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-AOWB3BNY.js").then(t=>t.renderRanking),songs:()=>import("./chunk-EQQ27U7N.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-4GOYTJ2B.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-QEXZHCSH.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-BWTSGM2I.js").then(t=>t.renderPlaylists)},lt=new Map,Jt=0,Y=null;function pt(t){return Object.prototype.hasOwnProperty.call(te,t)}async function pe(t){lt.has(t)||lt.set(t,te[t]());try{return await lt.get(t)}catch(e){throw lt.delete(t),e}}function ee(t){return["dashboard","timeline","analytics"].includes(t)}function ve(t,e={}){let n=l(`#panel-${t}`);if(!n)return;let s={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};n.innerHTML=`
    <div class="state-card">
      <div class="msg">${m(s[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function me(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function fe(t){if(d.channelData?.fullLoaded)return;d.channelData=t;let e=M(d.channel)?d.channel:O,n=M(e);n&&(d.data=n),!ee(d.activeTab)&&d.data&&V(d.activeTab,{autoLoad:!1})}function he(t){d.channelData=t,d.channelData.fullLoaded=!0;let e=M(d.channel)?d.channel:O;bt(e,{resetSearch:!1,updateUrl:!1,render:!1}),V(d.activeTab,{autoLoad:!1})}function ne(){return Y=Nt({meta:d.channelData,onSongsReady:fe}).then(he).finally(()=>{Y=null}),Y}async function be(){d.channelData?.fullLoaded||(Y||ne(),await Y)}async function V(t=d.activeTab,e={}){if(t!=="playlists"&&(!d.data||!pt(t))||!pt(t))return;let n=d.channelData?.partialLoaded||d.channelData?.fullLoaded,s=d.channelData?.fullLoaded;if(t==="playlists"?!1:ee(t)?!s:!n)if(e.autoLoad){me(t);try{await be()}catch(o){console.error("[data] full load failed",o);let p=l(`#panel-${t}`);p&&(p.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${m(o?.message||String(o))}</div>
              <button class="btn primary" type="button" data-load-full-data="${m(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,p.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{V(t,{autoLoad:!0})}));return}}else{ve(t,{initial:e.initial});return}let a=++Jt;try{let o=await pe(t);if(a!==Jt||t!==d.activeTab||!d.data)return;t==="songs"&&Bt(d.data.songs||[]),o()}catch(o){console.error(`[${t}] render failed`,o);let p=l(`#panel-${t}`);p&&(p.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${m(o?.message||String(o))}</div>
        </div>
      `)}}function I(t,e={}){pt(t)||(t="dashboard");let n=l("#stream-viewer");if(t!=="player"&&n&&!n.hidden&&!E){yt=t,ht=e,nt({instant:!0});return}d.activeTab=t,se(t),e.updateUrl!==!1&&st({tab:t}),V(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function se(t){S(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),S(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function M(t){return d.channelData?t==="all"?d.channelData.combined:d.channelData.channels[t]||null:null}function bt(t,e={}){let n=M(t);n&&(d.channel=t,Oe(t),d.data=n,d.timelineFilter=null,d.timelineFocus=null,d.timelineLimit=12,d.songsLimit=100,e.resetSearch!==!1&&(d.songsQuery="",d.songsGenre="all"),$t(),S("#channel-switch [data-channel]").forEach(s=>s.classList.toggle("active",s.dataset.channel===t)),_t(),e.updateUrl!==!1&&st({tab:d.activeTab,channel:t,q:d.songsQuery}),Ue(),e.render!==!1&&V(d.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function ye(t,e={}){d.audience=t==="singer"?"singer":"listener",d.singerMode=d.audience==="singer",d.singerMode||(d.singerPreset="all"),S(".audience-switch [data-audience]").forEach(n=>{n.classList.toggle("active",n.dataset.audience===d.audience)}),document.body.dataset.audience=d.audience,_t(),d.audience==="singer"?(d.songsLimit=100,I("songs",{autoLoad:e.autoLoad!==!1})):d.data&&V(d.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function _t(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",n=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${n}`}function ge(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),n=l("#topbar-actions");if(!t||!e||!n)return;let s=a=>{e.checked=a,n.classList.toggle("is-open",a),t.setAttribute("aria-expanded",String(a))},i=()=>{s(!1),t.focus()};t.addEventListener("click",a=>{a.stopPropagation(),requestAnimationFrame(()=>s(e.checked))}),t.addEventListener("keydown",a=>{a.key!=="Enter"&&a.key!==" "||(a.preventDefault(),s(!e.checked))}),e.addEventListener("change",()=>{s(e.checked)}),document.addEventListener("click",a=>{n.classList.contains("is-open")&&(a.target.closest("#topbar-actions")||a.target.closest("#mobile-menu-toggle")||a.target.closest("#mobile-menu-state")||i())}),document.addEventListener("keydown",a=>{a.key==="Escape"&&i()}),n.addEventListener("click",a=>{a.stopPropagation()}),_t()}function we(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),n=!1,s=420,i=()=>{!e||e.src||(e.src=e.dataset.src||"")},a=()=>{n=!1;let p=window.scrollY>s;p&&i(),t.hidden=!p,t.classList.toggle("is-visible",p),t.setAttribute("aria-hidden",String(!p)),t.tabIndex=p?0:-1},o=()=>{n||(n=!0,requestAnimationFrame(a))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",o,{passive:!0}),a()}function ke(){if(d.channelData)for(let t of S("#channel-switch [data-channel]")){let e=t.dataset.channel,n=e==="all"?!!d.channelData.combined:!!(d.channelData.channels&&d.channelData.channels[e]);t.disabled=!n,n?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function $e({key:t,title:e,artist:n}){d.timelineFilter&&d.timelineFilter.key===t&&d.activeTab==="timeline"?d.timelineFilter=null:d.timelineFilter={key:t,title:e,artist:n},d.timelineFocus=null,d.timelineLimit=12,I("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Le(t,e){d.timelineFilter={key:t.key,title:t.title,artist:t.artist},d.timelineFocus=q(e),d.timelineLimit=9999,I("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Se(t){Ct(t.artist||"")}function Ct(t){let e=String(t||"").replace(/"/g,"");d.songsQuery=e?`artist:"${e}"`:"",d.songsLimit=100,st({tab:"songs",q:d.songsQuery}),I("songs",{updateUrl:!1})}function ct(t){return(d.data?.songs||[]).find(e=>e.key===t)||null}function H(t){let e=String(t||""),n=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let s of n){let i=e.match(s);if(i)return i[1]}return""}function Pt(t){let e=H(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function Te(t){let e=H(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function xe(t){let e=H(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function ae(){dt&&(clearInterval(dt),dt=null)}function xt(){ae(),dt=setInterval(()=>{if(y)try{let t=y.getDuration?.()||0,e=y.getCurrentTime?.()||0,n=t>0?Math.min(e/t*100,100):0,s=l("#yt-mini-progress-fill");s&&(s.style.width=`${n}%`);let a=y.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,o=l("#yt-mini-play");o&&o.setAttribute("data-playing",a?"1":"0")}catch{}},400)}function X(){if(ae(),y){try{y.destroy()}catch{}y=null}let t=l("#yt-player-container");t&&(t.innerHTML="")}function Ee(){if(y?.getCurrentTime)try{return y.getCurrentTime()}catch{}return Math.max(0,z+(Date.now()-Q)/1e3)}function vt(t,e=0,n=""){let s=H(t);if(!s)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}{let u=l("#stream-viewer");if(u&&!u.hidden&&!E){++L,u.hidden=!0,u._currentStream=null,w=null;let c=l("#sv-player-wrap");c&&(c.innerHTML=""),document.body.style.overflow="",_=null,ht={},ut()}}W(),mt();let i=l("#yt-player-container"),a=l("#yt-player-panel");if(!i||!a)return;X();let o=l("#yt-mini-title");o&&(o.textContent=n||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let p=l("#yt-mini-hint");p&&(p.textContent=_?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),a.classList.toggle("has-stream",!!_),a.hidden=!1,ft(()=>{let u=document.createElement("div");i.appendChild(u);try{y=new window.YT.Player(u,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:c=>{let r=R();try{c.target.setVolume(r)}catch{}if(U(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,r),e>5)try{c.target.seekTo(e,!0)}catch{}xt()},onStateChange:c=>{let r=c.data===window.YT.PlayerState.PLAYING,v=l("#yt-mini-play");v&&v.setAttribute("data-playing",r?"1":"0")}}})}catch{let r=e>0?`&start=${Math.floor(e)}`:"";i.innerHTML=`<iframe src="https://www.youtube.com/embed/${s}?autoplay=1&playsinline=1${r}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function mt(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
    <div class="yt-mini-video-wrap">
      <div id="yt-player-container"></div>
    </div>
    <div class="yt-mini-progress-wrap">
      <div class="yt-mini-progress-bar" id="yt-mini-progress-bar" title="\u30AF\u30EA\u30C3\u30AF\u3067\u30B7\u30FC\u30AF">
        <div class="yt-mini-progress-fill" id="yt-mini-progress-fill"></div>
      </div>
    </div>
    <div class="yt-mini-bar">
      <button class="yt-mini-play-btn" id="yt-mini-play" type="button" data-playing="0" aria-label="\u518D\u751F/\u505C\u6B62"></button>
      <button class="yt-mini-info yt-mini-restore" id="yt-mini-restore" type="button" aria-label="\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B">
        <span class="yt-mini-stream-title" id="yt-mini-title">\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F</span>
        <span class="yt-mini-hint" id="yt-mini-hint"></span>
      </button>
      <div class="yt-mini-vol-wrap">
        <button class="vol-btn" id="yt-mini-vol-btn" type="button" aria-label="\u97F3\u91CF">\u{1F50A}</button>
        <input class="vol-slider" id="yt-mini-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
      </div>
      <button id="yt-player-close" type="button" class="yt-mini-close-btn" aria-label="\u9589\u3058\u308B">\u2715</button>
    </div>
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,X(),_=null}),l("#yt-mini-play").addEventListener("click",()=>{if(y)try{y.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?y.pauseVideo():y.playVideo()}catch{}}),l("#yt-mini-restore").addEventListener("click",()=>{_&&j(_,Ee())}),l("#yt-mini-progress-bar").addEventListener("click",s=>{if(!y)return;let a=s.currentTarget.getBoundingClientRect(),o=Math.max(0,Math.min(1,(s.clientX-a.left)/a.width));try{let p=y.getDuration?.()||0;p>0&&y.seekTo(o*p,!0)}catch{}});let e=l("#yt-mini-vol-slider"),n=l("#yt-mini-vol-btn");if(e){let s=R();e.value=s,e.style.setProperty("--pct",`${s}%`),n&&(n.textContent=tt(s)),e.addEventListener("input",i=>{let a=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${a}%`),Et(a),n&&(n.textContent=tt(a)),y)try{y.setVolume(a)}catch{}})}if(n){let s=80;n.addEventListener("click",()=>{if(!e)return;let i=parseInt(e.value),a=i>0?0:s||80;i>0&&(s=i),U(e,n,y,a)})}}var ie=!1,le=[];window.onYouTubeIframeAPIReady=()=>{ie=!0,le.splice(0).forEach(t=>t()),import("./chunk-IRKL6VIF.js").then(t=>t.notifyYtReady()).catch(()=>{})};function W(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function ft(t){if(ie&&window.YT?.Player){t();return}le.push(t)}var R=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),Et=t=>localStorage.setItem("kanaVol",String(t)),tt=t=>t===0?"\u{1F507}":t<50?"\u{1F509}":"\u{1F50A}";function U(t,e,n,s){if(t&&(t.value=s,t.style.setProperty("--pct",`${s}%`)),e&&(e.textContent=tt(s)),n)try{n.setVolume(s)}catch{}}var w=null,L=0,_=null,z=0,Q=0,E=!1,yt="timeline",ht={},x={},J=!1,y=null,dt=null;function _e(){yt=d.activeTab||"timeline",d.activeTab="player",S(".tab-btn").forEach(t=>t.classList.remove("active")),S(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function ut(){let t=ht;ht={},I(yt||"timeline",t)}function Ce(){E=!0;let t=l("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let n=l("#sv-fullscreen-btn");n&&n.setAttribute("aria-pressed","true")}function P(t){let e=Math.floor(t),n=Math.floor(e/3600),s=Math.floor(e%3600/60),i=e%60;return n>0?`${n}:${String(s).padStart(2,"0")}:${String(i).padStart(2,"0")}`:`${s}:${String(i).padStart(2,"0")}`}function oe(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function et(t){try{return JSON.parse(localStorage.getItem(oe(t))||"null")||{}}catch{return{}}}function Tt(t,e){try{localStorage.setItem(oe(t),JSON.stringify(e))}catch{}}function Pe(t,e,n){let s=n[e],i=s!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${m(P(s))} \u306B\u79FB\u52D5">${m(P(s))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",o=(x[e]||[]).map(c=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${c.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${m(P(c.timeSeconds))}">${m(P(c.timeSeconds))}</button>`).join(""),p=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,u=`<div class="sv-cts-row">${o}${p}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${m(t.title)}</span>
      <span class="sv-song-artist">${m(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${i}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${u}
  </div>`}async function Me(t){if(x={},!t?.channel||t?.index==null)return;try{let s=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,i=await fetch(s);if(!i.ok)return;let a=await i.json();for(let o of a.items||[])x[o.songIndex]||(x[o.songIndex]=[]),x[o.songIndex].push({timeSeconds:o.timeSeconds,note:o.note??null})}catch{}let e=l("#stream-viewer");if(!e||e._currentStream!==t)return;let n=l("#sv-setlist");n&&Z(n,t.songs,et(t)),Ae(t)}function Ie(t,e,n){l("#sv-cts-modal")?.remove();let s=w?.getCurrentTime?.()??0,i=P(Math.floor(s)),a=document.createElement("div");a.id="sv-cts-modal",a.className="sv-cts-modal-overlay",a.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-cts-modal-song">${m(n)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${m(i)}" placeholder="0:00" autocomplete="off">
      </label>
      <label class="sv-cts-modal-label">
        \u30B3\u30E1\u30F3\u30C8\uFF08\u4EFB\u610F\u30FB200\u6587\u5B57\u4EE5\u5185\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-note-input" type="text" maxlength="200" placeholder="">
      </label>
      <p class="sv-cts-modal-hint">\u63D0\u6848\u306F\u7BA1\u7406\u8005\u306E\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-cts-modal-btns">
        <button class="sv-cts-modal-submit" id="sv-cts-submit" type="button">\u63D0\u6848\u3059\u308B</button>
        <button class="sv-cts-modal-cancel" type="button">\u30AD\u30E3\u30F3\u30BB\u30EB</button>
      </div>
      <p class="sv-cts-modal-status" id="sv-cts-status" hidden></p>
    </div>
  `,document.body.appendChild(a);let o=()=>a.remove();a.querySelector(".sv-cts-modal-close").addEventListener("click",o),a.querySelector(".sv-cts-modal-cancel").addEventListener("click",o),a.addEventListener("click",p=>{p.target===a&&o()}),a.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let p=a.querySelector("#sv-cts-ts-input").value.trim(),u=a.querySelector("#sv-cts-note-input").value.trim()||null,c=Mt(p),r=a.querySelector("#sv-cts-status");if(c===null){r.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",r.className="sv-cts-modal-status error",r.hidden=!1;return}let v=a.querySelector("#sv-cts-submit");v.disabled=!0,v.textContent="\u9001\u4FE1\u4E2D\u2026";try{let f=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:c,submitterNote:u})});if(f.ok)r.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",r.className="sv-cts-modal-status success",r.hidden=!1,v.hidden=!0,a.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let h=await f.json().catch(()=>({}));r.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${h.error||f.statusText}`,r.className="sv-cts-modal-status error",r.hidden=!1,v.disabled=!1,v.textContent="\u63D0\u6848\u3059\u308B"}}catch(f){r.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.message}`,r.className="sv-cts-modal-status error",r.hidden=!1,v.disabled=!1,v.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>a.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function p(u){u.key==="Escape"&&(o(),document.removeEventListener("keydown",p))})}function Ae(t){let e=l("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let s=Object.keys(x).length>=t.songs.length;e.textContent=s?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function De(t){l("#sv-bulk-modal")?.remove();let e=et(t),i=Object.keys(x).length>=t.songs.length,a=t.songs.map((u,c)=>{let r=e[c]!=null?P(e[c]):"",v=x[c]?.[0]?.timeSeconds!=null?P(x[c][0].timeSeconds):"",f=r||v;return`
      <div class="sv-bulk-row" data-idx="${c}">
        <span class="sv-bulk-num">${c+1}</span>
        <span class="sv-bulk-title" title="${m(u.title)}">${m(u.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${m(f)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${c}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${c}">\u23F1</button>
      </div>`}).join(""),o=document.createElement("div");o.id="sv-bulk-modal",o.className="sv-cts-modal-overlay",o.innerHTML=`
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="${i?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">${i?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <details class="sv-paste-area">
        <summary class="sv-paste-summary">\u914D\u4FE1\u30B3\u30E1\u30F3\u30C8\u304B\u3089\u4E00\u62EC\u5165\u529B</summary>
        <textarea class="sv-paste-textarea" placeholder="\u914D\u4FE1\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u30B3\u30E1\u30F3\u30C8\u3092\u8CBC\u308A\u4ED8\u3051&#10;\u4F8B: 23:16\u3000\u5FAE\u304B\u306A\u30AB\u30AA\u30EA / Perfume\u300027:58"></textarea>
        <div class="sv-paste-btns">
          <button class="sv-paste-apply btn ghost" type="button">\u89E3\u6790\u3057\u3066\u5165\u529B</button>
          <span class="sv-paste-result" hidden></span>
        </div>
      </details>
      <p class="sv-bulk-hint">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u5165\u529B\u3057\u3066\u4E00\u62EC\u7533\u8ACB\u3067\u304D\u307E\u3059\u3002\u7A7A\u6B04\u306E\u66F2\u306F\u30B9\u30AD\u30C3\u30D7\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-bulk-rows">${a}</div>
      <label class="sv-cts-modal-label" style="margin-top:10px">
        \u5171\u901A\u30B3\u30E1\u30F3\u30C8\uFF08\u4EFB\u610F\u30FB200\u6587\u5B57\u4EE5\u5185\uFF09
        <input class="sv-cts-modal-input" id="sv-bulk-note" type="text" maxlength="200" placeholder="">
      </label>
      <p class="sv-cts-modal-hint">\u63D0\u6848\u306F\u7BA1\u7406\u8005\u306E\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-cts-modal-btns">
        <button class="sv-cts-modal-submit" id="sv-bulk-submit" type="button">\u4E00\u62EC\u7533\u8ACB\u3059\u308B</button>
        <button class="sv-cts-modal-cancel" type="button">\u30AD\u30E3\u30F3\u30BB\u30EB</button>
      </div>
      <p class="sv-cts-modal-status" id="sv-bulk-status" hidden></p>
    </div>
  `,document.body.appendChild(o);let p=()=>o.remove();o.querySelector(".sv-cts-modal-close").addEventListener("click",p),o.querySelector(".sv-cts-modal-cancel").addEventListener("click",p),o.addEventListener("click",u=>{u.target===o&&p()}),o.querySelector(".sv-paste-apply").addEventListener("click",()=>{let c=(o.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(f=>f.trim()).filter(Boolean),r=0;for(let f of c){let h=Be(f);if(!h)continue;let b=Ye(h.title,h.artist,t.songs);if(b>=0){let g=o.querySelector(`[data-bulk-ts-idx="${b}"]`);g&&(g.value=h.start,r++)}}let v=o.querySelector(".sv-paste-result");v&&(v.textContent=r>0?`${c.length}\u884C\u3092\u89E3\u6790 \u2192 ${r}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",v.hidden=!1)}),o.querySelector(".sv-bulk-rows").addEventListener("click",u=>{let c=u.target.closest("[data-bulk-now]");if(!c)return;let r=parseInt(c.dataset.bulkNow,10),v=w?.getCurrentTime?.();if(v!=null){let f=o.querySelector(`[data-bulk-ts-idx="${r}"]`);f&&(f.value=P(Math.floor(v)))}}),o.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let u=o.querySelector("#sv-bulk-note").value.trim()||null,c=o.querySelector("#sv-bulk-status"),r=o.querySelector("#sv-bulk-submit"),v=[];if(o.querySelectorAll("[data-bulk-ts-idx]").forEach(b=>{let g=parseInt(b.dataset.bulkTsIdx,10),k=Mt(b.value.trim());k!==null&&v.push({songIndex:g,timeSeconds:k})}),!v.length){c.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",c.className="sv-cts-modal-status error",c.hidden=!1;return}r.disabled=!0,r.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${v.length})`,c.hidden=!0;let f=0,h=0;await Promise.all(v.map(async b=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:b.songIndex,timeSeconds:b.timeSeconds,submitterNote:u})})).ok?f++:h++}catch{h++}r.textContent=`\u7533\u8ACB\u4E2D\u2026 (${f+h}/${v.length})`})),h===0?(c.textContent=`${f}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,c.className="sv-cts-modal-status success",r.hidden=!0,o.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(c.textContent=`${f}\u4EF6\u6210\u529F / ${h}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,c.className="sv-cts-modal-status error",r.disabled=!1,r.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),c.hidden=!1}),document.addEventListener("keydown",function u(c){c.key==="Escape"&&(p(),document.removeEventListener("keydown",u))})}function re(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function He(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function Ve(t,e){let n=re(),s=n.find(i=>String(i.id)===String(t));return s?(s.streams||(s.streams=[]),s.streams.includes(e)||(s.streams.push(e),He(n)),!0):!1}function Ne(){let t=d.data?.streams||[],n=l("#stream-viewer")?._currentStream;if(!n)return;let s=t.findIndex(i=>i.channel===n.channel&&i.index===n.index);s<0||s>=t.length-1||j(t[s+1])}function Zt(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${m(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let n=Pt(t.url),s=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${m(s)}</div>
    ${n?`<img class="sv-bp-nav-thumb" src="${m(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${m(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${T(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function qe(t){let e=l("#sv-below-player");if(!e)return;let n=d.data?.streams||[],s=n.findIndex(r=>r.channel===t.channel&&r.index===t.index),i=s>=0&&s<n.length-1?n[s+1]:null,a=s>0?n[s-1]:null,o=new Set(t.songs.map(r=>r.title)),p=n.filter((r,v)=>v!==s).map(r=>{let v=r.songs.filter(f=>o.has(f.title));return{stream:r,overlap:v.length,sharedSongs:v.slice(0,3).map(f=>f.title)}}).filter(r=>r.overlap>0).sort((r,v)=>v.overlap-r.overlap).slice(0,8),u=re(),c=q(t);e.innerHTML=`
    <div class="sv-bp-wrap">

      <!-- \u9023\u7D9A\u518D\u751F + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${J?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${J?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          ${i?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${m(i.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${Zt(i,"older")}
          ${Zt(a,"newer")}
        </div>
      </div>

      <!-- \u914D\u4FE1\u7D71\u8A08 -->
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u914D\u4FE1\u60C5\u5831</div>
        <div class="sv-bp-stats">
          <div class="sv-bp-stat">
            <span class="sv-bp-stat-val">${t.songs.length}</span>
            <span class="sv-bp-stat-label">\u66F2\u6570</span>
          </div>
          <div class="sv-bp-stat">
            <span class="sv-bp-stat-val">\u7B2C${t.index}\u67A0</span>
            <span class="sv-bp-stat-label">\u914D\u4FE1\u756A\u53F7</span>
          </div>
          <div class="sv-bp-stat">
            <span class="sv-bp-stat-val">${T(t.date)}</span>
            <span class="sv-bp-stat-label">\u914D\u4FE1\u65E5</span>
          </div>
        </div>
      </div>

      <!-- \u95A2\u9023\u914D\u4FE1 -->
      ${p.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u95A2\u9023\u914D\u4FE1 <span class="sv-bp-sh-sub">\uFF08\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${p.map(r=>{let v=Pt(r.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(r.stream.channel)}" data-bp-index="${r.stream.index}">
              ${v?`<img class="sv-bp-rel-thumb" src="${m(v)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${m(r.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${T(r.stream.date)}</div>
                <div class="sv-bp-rel-songs">${r.sharedSongs.map(f=>m(f)).join("\u3001")}</div>
              </div>
              <div class="sv-bp-rel-badge">${r.overlap}\u66F2</div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      <!-- \u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0 -->
      ${u.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0</div>
        <div class="sv-bp-pl-list" id="sv-bp-pl-list">
          ${u.map(r=>{let v=(r.streams||[]).includes(c);return`<button class="sv-bp-pl-btn${v?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${m(String(r.id))}"${v?" disabled":""}>
              <span class="sv-bp-pl-name">${m(r.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${v?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=r=>{let v=r.target.closest("#sv-ap-check");if(!v)return;J=v.checked;let f=e.querySelector(".sv-bp-ap-switch");f&&f.classList.toggle("sv-bp-ap-switch--on",J)},e.onclick=r=>{let v=r.target.closest("[data-bp-action]");if(!v)return;let f=v.dataset.bpAction;if(f==="open-stream"){let h=v.dataset.bpChannel,b=parseInt(v.dataset.bpIndex,10),g=(d.data?.streams||[]).find(k=>k.channel===h&&k.index===b);g&&j(g)}else if(f==="add-pl"){let h=v.dataset.bpPlId;if(Ve(h,c)){v.classList.add("sv-bp-pl-btn--added"),v.disabled=!0;let b=v.querySelector(".sv-bp-pl-status");b&&(b.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}}}function Z(t,e,n){t.innerHTML=e.map((s,i)=>Pe(s,i,n)).join("")}function Mt(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Be(t){let e=t.match(/^(\d{1,2}:\d{2}(?::\d{2})?)[\s　]+(.+?)\s*\/\s*(.+?)[\s　]+(\d{1,2}:\d{2}(?::\d{2})?)$/);return e?{start:e[1].trim(),title:e[2].trim(),artist:e[3].trim(),end:e[4].trim()}:null}function ot(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function Ye(t,e,n){let s=ot(t),i=ot(e),a=-1,o=0;for(let p=0;p<n.length;p++){let u=ot(n[p].title),c=ot(n[p].artist),r=0;u===s?r+=80:s.length>1&&(u.includes(s)||s.includes(u))&&(r+=40),i&&c===i?r+=20:i&&i.length>1&&(c.includes(i)||i.includes(c))&&(r+=10),r>o&&(o=r,a=p)}return o>=40?a:-1}function ce(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
    <div class="sv-container">
      <div class="sv-header">
        <button class="sv-close-btn" id="sv-close" type="button" title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09">
          \u2190 \u623B\u308B <span class="sv-esc-hint">Esc</span>
        </button>
        <div class="sv-title-area">
          <nav class="sv-breadcrumb" aria-label="\u73FE\u5728\u5730">
            <button class="sv-bc-btn" type="button" data-bc-tab="dashboard">\u30DB\u30FC\u30E0</button>
            <span class="sv-bc-sep" aria-hidden="true">/</span>
            <button class="sv-bc-btn" type="button" data-bc-tab="timeline">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3</button>
            <span class="sv-bc-sep" aria-hidden="true">/</span>
            <span class="sv-bc-current" id="sv-bc-title"></span>
          </nav>
          <div class="sv-stream-meta" id="sv-stream-meta"></div>
        </div>
        <button class="sv-fullscreen-btn" id="sv-fullscreen-btn" type="button"
          title="\u5927\u753B\u9762\u3067\u518D\u751F" aria-pressed="false">\u26F6</button>
        <div class="sv-volume-wrap">
          <button class="vol-btn" id="sv-vol-btn" type="button" aria-label="\u97F3\u91CF">\u{1F50A}</button>
          <input class="vol-slider" id="sv-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
        </div>
        <a class="sv-yt-link" id="sv-yt-link" href="#" target="_blank" rel="noopener">\u2197 YouTube\u3067\u958B\u304F</a>
      </div>
      <div class="sv-body">
        <div class="sv-player-section">
          <div class="sv-player-wrap" id="sv-player-wrap">
            <div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>
          </div>
          <div class="sv-below-player" id="sv-below-player"></div>
        </div>
        <div class="sv-panel">
          <div class="sv-panel-head">
            <span>\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8</span>
            <div class="sv-panel-head-right">
              <button class="sv-import-toggle" id="sv-import-toggle" type="button">\u4E00\u62EC\u5165\u529B</button>
              <button class="sv-cts-bulk-btn" id="sv-cts-bulk-btn" type="button" hidden>\u30BB\u30C8\u30EA\u767B\u9332</button>
              <span class="sv-song-count" id="sv-song-count"></span>
            </div>
          </div>
          <div class="sv-import-area" id="sv-import-area" hidden>
            <p class="sv-import-desc">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u30921\u884C\u306B1\u3064\u5165\u529B\uFF08\u4E0A\u304B\u3089\u9806\u306B\u66F2\u3078\u5272\u308A\u5F53\u3066\uFF09</p>
            <textarea class="sv-import-input" id="sv-import-input" rows="6"
              placeholder="\u4F8B:&#10;15:59&#10;21:12&#10;25:57&#10;1:08:13"></textarea>
            <div class="sv-import-btns">
              <button class="sv-import-apply" id="sv-import-apply" type="button">\u9069\u7528</button>
              <button class="sv-import-cancel" id="sv-import-cancel" type="button">\u30AD\u30E3\u30F3\u30BB\u30EB</button>
            </div>
          </div>
          <div class="sv-panel-hint">\u23F1 \u3067\u73FE\u5728\u6642\u523B\u3092\u30E1\u30E2 \uFF0F \u30D0\u30C3\u30B8\u3092\u30BF\u30C3\u30D7\u3067\u79FB\u52D5</div>
          <div class="sv-setlist" id="sv-setlist"></div>
        </div>
      </div>
    </div>
  `,t.appendChild(e),l("#sv-close").addEventListener("click",nt),l("#sv-fullscreen-btn").addEventListener("click",Ce);let n=l("#sv-vol-slider"),s=l("#sv-vol-btn");if(n){let i=R();n.value=i,n.style.setProperty("--pct",`${i}%`),s&&(s.textContent=tt(i)),n.addEventListener("input",a=>{let o=parseInt(a.target.value);if(a.target.style.setProperty("--pct",`${o}%`),Et(o),s&&(s.textContent=tt(o)),w)try{w.setVolume(o)}catch{}})}if(s){let i=80;s.addEventListener("click",()=>{if(!n)return;let a=parseInt(n.value),o=a>0?0:i||80;a>0&&(i=a),U(n,s,w,o),Et(o)})}e.querySelectorAll("[data-bc-tab]").forEach(i=>{i.addEventListener("click",()=>{nt(),I(i.dataset.bcTab)})}),l("#sv-import-toggle").addEventListener("click",()=>{let i=l("#sv-import-area");i&&(i.hidden=!i.hidden,i.hidden||l("#sv-import-input")?.focus())}),l("#sv-import-cancel").addEventListener("click",()=>{let i=l("#sv-import-area");i&&(i.hidden=!0);let a=l("#sv-import-input");a&&(a.value="")}),l("#sv-import-apply").addEventListener("click",()=>{let i=e._currentStream;if(!i)return;let a=l("#sv-import-input");if(!a)return;let p=a.value.split(`
`).map(r=>Mt(r)).filter(r=>r!==null);if(!p.length)return;let u=et(i);p.forEach((r,v)=>{v<i.songs.length&&(u[v]=r)}),Tt(i,u),Z(l("#sv-setlist"),i.songs,u);let c=l("#sv-import-area");c&&(c.hidden=!0),a.value=""}),l("#sv-cts-bulk-btn").addEventListener("click",()=>{let i=e._currentStream;i&&De(i)}),l("#sv-setlist").addEventListener("click",i=>{let a=i.target.closest("[data-action]");if(!a)return;let o=parseInt(a.dataset.idx,10),p=e._currentStream;if(!p)return;let u=et(p);if(a.dataset.action==="seek"){if(u[o]!=null&&w?.seekTo){w.seekTo(u[o],!0);try{w.playVideo()}catch{}}}else if(a.dataset.action==="set-ts"){let c=w?.getCurrentTime?.();c!=null&&(u[o]=Math.floor(c),Tt(p,u),Z(l("#sv-setlist"),p.songs,u))}else if(a.dataset.action==="del-ts")delete u[o],Tt(p,u),Z(l("#sv-setlist"),p.songs,u);else if(a.dataset.action==="cts-seek"){let c=Number(a.dataset.ctsSeconds);if(!isNaN(c)&&w?.seekTo){w.seekTo(c,!0);try{w.playVideo()}catch{}}}else if(a.dataset.action==="cts-propose"){let c=p.songs[o];Ie(p,o,c?.title||`\u66F2 ${o+1}`)}})}function j(t,e=0){if(!t?.url)return;let n=H(t.url);if(!n){vt(t.url);return}ce(),W();let s=l("#yt-player-panel");if(s&&!s.hidden){try{y?.pauseVideo()}catch{}s.hidden=!0,X()}if(_=null,import("./chunk-IRKL6VIF.js").then(h=>h.pauseMusicPlayer()).catch(()=>{}),E){E=!1;let h=l("#stream-viewer");h&&h.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}E=!1,_e();let i=l("#stream-viewer");i.classList.remove("sv-fullscreen"),i.classList.toggle("sv-mv-mode",!!t.isMv),i._currentStream=t;let a=++L,o=i.querySelectorAll("[data-bc-tab]");o[1]&&(t.isMv?(o[1].dataset.bcTab="playlists",o[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(o[1].dataset.bcTab="timeline",o[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let p=l("#sv-bc-title");p&&(p.textContent=t.title||"\u914D\u4FE1");let u=l("#sv-stream-meta");u&&(u.textContent=t.isMv?"":`${T(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let c=l("#sv-yt-link");c&&(c.href=t.url);let r=l("#sv-song-count");if(r&&(r.textContent=t.isMv?"":`${t.songs.length}\u66F2`),x={},t.isMv){let h=l("#sv-setlist");h&&(h.innerHTML="");let b=l("#sv-below-player");b&&(b.innerHTML="")}else{let h=et(t);Z(l("#sv-setlist"),t.songs,h),Me(t),qe(t)}i.hidden=!1,document.body.style.overflow="",setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),w=null;let v=l("#sv-player-wrap");v.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let f=Math.floor(e);ft(()=>{if(a!==L||i.hidden)return;v.innerHTML="";let h=document.createElement("div");v.appendChild(h);try{w=new window.YT.Player(h,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...f>0?{start:f}:{}},events:{onReady:b=>{let g=R();try{b.target.setVolume(g)}catch{}U(l("#sv-vol-slider"),l("#sv-vol-btn"),null,g);try{b.target.setPlaybackQuality("hd1080")}catch{}try{b.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(f>5)try{b.target.seekTo(f,!0)}catch{}},onStateChange:b=>{if(a===L){if(b.data===window.YT.PlayerState.PLAYING)try{b.target.setPlaybackQuality("hd1080")}catch{}b.data===window.YT.PlayerState.ENDED&&J&&Ne()}},onError:()=>{a===L&&(v.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(n)}?autoplay=1&playsinline=1&rel=0${f>0?`&start=${f}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{v.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(n)}?autoplay=1&playsinline=1&rel=0${f>0?`&start=${f}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function nt({instant:t=!1}={}){let e=l("#stream-viewer");if(!e||e.hidden||e.dataset.svTransitioning)return;if(E){E=!1,e.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let p=l("#sv-close");p&&(p.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let u=l("#sv-fullscreen-btn");u&&u.setAttribute("aria-pressed","false");return}if(t){let p=e._currentStream,u=p?.url?H(p.url):"",c=w?.getCurrentTime?.()??0,r=w;++L;let v=L;w=null,e.hidden=!0,e._currentStream=null;let f=l("#sv-player-wrap");if(f&&(f.innerHTML=""),document.body.style.overflow="",ut(),setTimeout(()=>{try{r?.destroy?.()}catch{}},100),u){_=p,z=Math.floor(c),Q=Date.now(),W(),mt();let h=l("#yt-player-container"),b=l("#yt-player-panel");X();let g=l("#yt-mini-title");g&&(g.textContent=p.title||"");let k=l("#yt-mini-hint");k&&(k.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),b&&(b.classList.add("has-stream"),b.hidden=!1),ft(()=>{if(v!==L||!h)return;let A=z+(Date.now()-Q)/1e3,N=document.createElement("div");h.appendChild(N);try{y=new window.YT.Player(N,{videoId:u,width:"100%",height:"100%",playerVars:{autoplay:0,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,start:Math.floor(A)},events:{onReady:F=>{let K=R();try{F.target.setVolume(K),F.target.playVideo()}catch{}U(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,K)},onStateChange:F=>{let K=F.data===window.YT?.PlayerState?.PLAYING,gt=l("#yt-mini-play");gt&&gt.setAttribute("data-playing",K?"1":"0"),K&&xt()}}})}catch{}})}return}let n=e._currentStream,s=w?.getCurrentTime?.()??0,i=n?.url?H(n.url):"";++L;let a=L;if(i&&n?.url){_=n,z=Math.floor(s),Q=Date.now(),e.dataset.svTransitioning="1",e.classList.add("sv-to-mini"),W(),mt();let p=l("#yt-player-container"),u=l("#yt-player-panel");X();let c=l("#yt-mini-title");c&&(c.textContent=n.title||"");let r=l("#yt-mini-hint");r&&(r.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),u.classList.add("has-stream"),u.hidden=!1;let v=!1,f=()=>{if(v)return;if(v=!0,a!==L){e.classList.remove("sv-to-mini"),delete e.dataset.svTransitioning;return}e.classList.remove("sv-to-mini"),delete e.dataset.svTransitioning;let b=w;w=null,e.hidden=!0,e._currentStream=null;let g=l("#sv-player-wrap");g&&(g.innerHTML=""),document.body.style.overflow="",ut(),setTimeout(()=>{try{b?.destroy?.()}catch{}},100)},h=setTimeout(f,3e3);ft(()=>{if(a!==L){clearTimeout(h),e.classList.remove("sv-to-mini"),delete e.dataset.svTransitioning;return}let b=z+(Date.now()-Q)/1e3,g=document.createElement("div");p.appendChild(g);try{y=new window.YT.Player(g,{videoId:i,width:"100%",height:"100%",playerVars:{autoplay:0,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1},events:{onReady:k=>{let A=R();try{k.target.setVolume(A),b>1&&k.target.seekTo(b,!0),k.target.playVideo()}catch{}U(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,A)},onStateChange:k=>{let A=k.data===window.YT?.PlayerState?.PLAYING,N=l("#yt-mini-play");N&&N.setAttribute("data-playing",A?"1":"0"),A&&a===L&&(clearTimeout(h),f(),xt())}}})}catch{clearTimeout(h),f()}});return}e.hidden=!0,e._currentStream=null,w=null;let o=l("#sv-player-wrap");o&&(o.innerHTML=""),document.body.style.overflow="",ut()}window.__openStreamViewer=j;function de(t){let e=ct(t),n=l("#song-modal"),s=l("#song-modal-body"),i=l("#song-modal-title");if(!e||!n||!s||!i)return;Vt(e),i.textContent=e.title;let a=(e.streamRefs||[]).slice(0,8).map(u=>({...u,thumbnail:Pt(u.url),thumbnailFallback:Te(u.url),thumbnailTiny:xe(u.url),detailKey:q(u)})),o=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),p=wt(e.key);s.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${m(e.key)}">${m(e.artist)}</button>
        <div class="song-detail-tags">${o.map(u=>`<span class="tag-badge">${m(u)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${T(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${p?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${m(e.key)}">${p?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${m(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${a.length?a.map(u=>`
        <div class="song-detail-stream">
          ${u.thumbnail&&u.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${m(u.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${m(u.thumbnail)}" data-fallback="${m(u.thumbnailFallback)}" data-tiny="${m(u.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${m(u.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${m(e.key)}" data-streamkey="${m(u.detailKey)}">
            <span>${T(u.date)}</span>
            <strong>${m(u.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,n.hidden=!1,l("#song-modal-close")?.focus()}function Re(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let n=()=>{t.hidden=!0};e.addEventListener("click",n),t.addEventListener("click",s=>{s.target===t&&n();let i=s.target.closest("[data-inline-youtube]");if(i){s.preventDefault(),s.stopPropagation(),vt(i.dataset.inlineYoutube);return}let a=s.target.closest("[data-detail-action]");if(a){if(s.stopPropagation(),a.dataset.detailAction==="close"&&n(),a.dataset.detailAction==="favorite"){let o=a.dataset.songkey;At(o);let p=wt(o);a.textContent=p?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",a.classList.toggle("primary",p),a.classList.toggle("ghost",!p)}if(a.dataset.detailAction==="timeline"){let o=ct(a.dataset.songkey);n(),o&&$e(o)}if(a.dataset.detailAction==="stream"){let o=ct(a.dataset.songkey),p=o?.streamRefs?.find(u=>q(u)===a.dataset.streamkey);n(),o&&p&&Le(o,p)}if(a.dataset.detailAction==="artist"){let o=ct(a.dataset.songkey);n(),o&&Se(o)}}}),t.addEventListener("error",s=>{let i=s.target.closest?.(".song-detail-thumb");if(!i)return;let a=i.dataset.fallback||i.dataset.tiny||"";if(a&&i.src!==a){i.src=a,i.dataset.fallback===a?delete i.dataset.fallback:delete i.dataset.tiny;return}i.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",s=>{s.key==="Escape"&&!t.hidden&&n()})}var Xt=!1;function Ue(){if(!d.data)return;let{stats:t,streams:e=[]}=d.data,n=e[0]?.date||null,s=kt(n),i=t.dataGeneratedDate||d.channelData?.dataGeneratedDate||null,a=kt(i),o=t.channelLabel||t.channelId||"",p=o?`<span class="badge accent" style="margin-right:8px;">${m(o)}</span>`:"";l("#updated-info").innerHTML=p+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${T(i)||"\u2014"}</strong>`+(a!=null?` <span class="badge">${a}\u65E5\u524D</span>`:"");let u=l("#stats-grid");if(!Xt)u.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${D(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${D(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${D(t.streams)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">1\u67A0\u5E73\u5747</div>
        <div class="stat-value">${t.avgPerStream}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card accent">
        <div class="stat-label">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</div>
        <div class="stat-value">${s??"\u2014"}<span class="stat-unit">\u65E5</span></div>
      </div>
      <div class="stat-card gold">
        <div class="stat-label">\u6D3B\u52D5\u671F\u9593</div>
        <div class="stat-value">${Wt(d.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,Xt=!0;else{let c=u.querySelectorAll(".stat-value");c.length>=6&&(c[0].textContent=D(t.total),c[0].innerHTML+='<span class="stat-unit">\u56DE</span>',c[1].textContent=D(t.repertoire),c[1].innerHTML+='<span class="stat-unit">\u66F2</span>',c[2].textContent=D(t.streams),c[2].innerHTML+='<span class="stat-unit">\u56DE</span>',c[3].textContent=t.avgPerStream,c[3].innerHTML+='<span class="stat-unit">\u66F2</span>',c[4].textContent=s??"\u2014",c[4].innerHTML+='<span class="stat-unit">\u65E5</span>',c[5].textContent=Wt(d.data),c[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function Wt(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,n=t.streams[0].date;return Math.floor((n-e)/864e5)+1}function je(){l("#loading").hidden=!1,l("#error").hidden=!0}function Fe(){l("#loading").hidden=!0}function Ke(t){let e=l("#loading"),n=l("#error"),s=l("#err-detail");e&&(e.hidden=!0),n&&(n.hidden=!1),s&&(s.textContent=t&&t.message?t.message:String(t))}function Oe(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let n=document.getElementById("hero-ch-bg");n&&(n.dataset.mode=t||"all")}var Ge={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:"\u{1F6CD}",label:"official store",url:"https://react.booth.pm"},{icon:"\u{1F310}",label:"official site",url:"https://v-react.com"},{icon:"\u{1F3B5}",label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:"\u{1F3A7}",label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:"\u25B6",label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function rt(t){let e=Ge[t];if(!e)return"";let n=e.bannerUrl?`<img class="ch-card-banner-img" src="${m(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${m(e.label)}</span>`:`<span class="ch-card-banner-label">${m(e.label)}</span>`,s=e.avatarUrl?`<img class="ch-card-avatar-img" src="${m(e.avatarUrl)}" alt="${m(e.name)}" loading="lazy" referrerpolicy="no-referrer">`:t==="new"?"\u65B0":"\u65E7",i=e.desc?`<p class="ch-card-desc">${e.desc.split(`
`).map(o=>m(o)).join("<br>")}</p>`:"",a=e.links?.length?`
    <div class="ch-card-links">
      ${e.links.map(o=>`
        <a class="ch-card-link" href="${m(o.url)}" target="_blank" rel="noopener">
          <span class="ch-card-link-icon" aria-hidden="true">${o.icon}</span>
          <span>${m(o.label)}</span>
        </a>`).join("")}
    </div>`:"";return`
    <div class="ch-card ch-card--${t}">
      <div class="ch-card-banner ch-card-banner--${t}${e.bannerUrl?" ch-card-banner--img":""}">
        ${n}
      </div>
      <div class="ch-card-body">
        <div class="ch-card-header">
          <div class="ch-card-avatar ch-card-avatar--${t}${e.avatarUrl?" ch-card-avatar--img":""}">${s}</div>
          <div class="ch-card-meta">
            <div class="ch-card-name">${m(e.name)}</div>
            <div class="ch-card-handle">${m(e.handle)}</div>
          </div>
        </div>
        ${i}
        ${a}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${m(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u3078
          </a>
        </div>
      </div>
    </div>`}function ze(t){let e=l("#ch-modal"),n=l("#ch-modal-body");if(!e||!n)return;let s="";t==="new"?s=rt("new"):t==="old"?s=rt("old"):s=rt("new")+rt("old"),n.innerHTML=s,e.hidden=!1,l("#ch-modal-close")?.focus()}function Qe(){let t=l("#ch-modal"),e=l("#ch-modal-close");if(!t||!e)return;let n=()=>{t.hidden=!0};e.addEventListener("click",n),t.addEventListener("click",s=>{s.target===t&&n()}),document.querySelectorAll("[data-ch-modal]").forEach(s=>{s.addEventListener("click",()=>ze(s.dataset.chModal))})}function Je(){let t=l("#help-modal"),e=l("#help-btn"),n=l("#help-close");if(!t||!e||!n)return;let s=()=>{t.hidden=!1,n.focus()},i=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",s),n.addEventListener("click",i),t.addEventListener("click",a=>{a.target===t&&i()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&i()})}function Ze(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let n=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(n,{timeout:5e3}):window.setTimeout(n,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function It(){je();try{let t=await qt();d.channelData=t,!Y&&!t.fullLoaded&&ne();let e=Lt();d.songsQuery=e.q,d.activeTab=pt(e.tab)?e.tab:"dashboard",se(d.activeTab);let n=e.channel||d.channel||O;if(M(n)||(n=O),!M(n)){let s=Object.keys(t.channels)[0];s&&(n=s)}if(!M(n))throw new Error("No channel data could be loaded");ke(),Fe(),bt(n,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0})}catch(t){console.error("[init] failed:",t),Ke(t)}}function Xe(){if(!d.channelData)return;let t=Lt();d.songsQuery=t.q,t.channel!==d.channel&&M(t.channel)&&bt(t.channel,{resetSearch:!1,updateUrl:!1}),I(t.tab,{updateUrl:!1})}S(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,n=l("#stream-viewer");if(e!=="player"&&n&&!n.hidden&&!E){yt=e,nt({instant:!0});return}I(e)})});S(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||bt(t.dataset.channel))})});window.addEventListener("popstate",Xe);S("[data-audience]").forEach(t=>{t.addEventListener("click",()=>ye(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),Ct(e.dataset.artistSearch||e.textContent||"");return}let n=t.target.closest("[data-playlist-add]");if(n){t.preventDefault(),t.stopPropagation();let o=n.dataset.playlistAdd,p=n.dataset.streamTitle||"";import("./chunk-BWTSGM2I.js").then(u=>u.showAddToPlaylistModal(o,p));return}let s=t.target.closest("[data-stream-play]");if(s){t.preventDefault(),t.stopPropagation();let o=s.dataset.streamPlay,p=(d.data?.streams||[]).find(u=>q(u)===o);p?.url?j(p):s.dataset.inlineYoutube&&vt(s.dataset.inlineYoutube);return}let i=t.target.closest("[data-inline-youtube]");if(i){t.preventDefault(),t.stopPropagation(),vt(i.dataset.inlineYoutube);return}if(Ht(t.target))return;let a=t.target.closest("[data-songkey]");a&&de(a.dataset.songkey)});l("#retry-btn").addEventListener("click",It);l("#reload-btn").addEventListener("click",It);Je();Qe();mt();ce();Re();ge();we();Ze();import("./chunk-IRKL6VIF.js").then(t=>{t.setApiLoader(W),t.initMusicPlayer()}).catch(()=>{});Kt(t=>{t.type==="song"?de(t.song.key):t.type==="artist"?Ct(t.artist):t.type==="stream"&&j(t.stream)});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,n=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!n&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),Ot();return}if(t.key==="t"&&!n&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),Yt();return}if(t.key==="?"&&!n&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let i=l("#help-modal");i&&i.hidden&&(i.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let i=l("#stream-viewer"),a=!!l("#panel-player.active");if(i&&!i.hidden&&(E||a)){t.preventDefault(),nt();return}if(Gt()){t.preventDefault(),G();return}let o=l("#song-modal");if(o&&!o.hidden)return;let p=l("#ch-modal");if(p&&!p.hidden){p.hidden=!0;return}let u=l("#help-modal");if(u&&!u.hidden){u.hidden=!0,l("#help-btn")?.focus();return}let c=l("#songs-search");c&&document.activeElement===c&&c.value&&(t.preventDefault(),c.value="",c.dispatchEvent(new Event("input",{bubbles:!0})))}});Ut(()=>{d.data&&($t(),(d.activeTab==="dashboard"||d.activeTab==="analytics")&&V())});function We(){It()}We();
