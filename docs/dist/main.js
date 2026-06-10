import{b as Ct,c as Pt,d as Mt,i as It,k as pt,l as Q}from"./chunk-3QAEH344.js";import{a as Dt,b as At,e as ut,f as Ht}from"./chunk-SIADDXVK.js";import{a as j}from"./chunk-MKJIXTK4.js";import{a as xt,b as ct,c as Et,e as c}from"./chunk-N3S3MIXU.js";import{D as dt,E as S,G as N,L as A,M as _t,a as l,b as L,d as m}from"./chunk-FKVR6ZKV.js";var k=-1,C=[],vt=null;function Bt(t){vt=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",a=>{a.target===e&&F()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>jt(s.value)),s.addEventListener("keydown",ie),document.getElementById("omni-listbox").addEventListener("click",a=>{let o=a.target.closest("[data-omni-idx]");o&&Ut(Number(o.dataset.omniIdx))})}function Yt(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,k=-1,C=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),jt("")}function F(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),k=-1}function Rt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function ie(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),k=Math.min(k+1,e.length-1),Nt(e)):t.key==="ArrowUp"?(t.preventDefault(),k=Math.max(k-1,-1),Nt(e)):t.key==="Enter"?(t.preventDefault(),k>=0&&C[k]&&Ut(k)):t.key==="Escape"&&(t.preventDefault(),F())}function Nt(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===k),e.setAttribute("aria-selected",String(s===k))}),k>=0&&t[k]?.scrollIntoView({block:"nearest"})}function Ut(t){let e=C[t];!e||!vt||(F(),vt(e))}function jt(t){let e=document.getElementById("omni-listbox");if(!e)return;k=-1,C=[];let s=c.data?.songs||[],a=c.data?.streams||[],o=t.trim().toLowerCase(),n="",i=0;if(!c.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!o){let r=s.slice(0,8);if(r.length){n+=J("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let v of r)C.push({type:"song",song:v}),n+=qt(v,i++,"")}e.innerHTML=n||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let d=s.filter(r=>q(r.title).includes(o)||q(r.artist).includes(o)).slice(0,8);if(d.length){n+=J("\u{1F3B5} \u66F2");for(let r of d)C.push({type:"song",song:r}),n+=qt(r,i++,o)}let p=new Set,u=[];for(let r of s)if(q(r.artist).includes(o)&&!p.has(r.artist)&&(p.add(r.artist),u.push(r.artist),u.length>=4))break;if(u.length){n+=J("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let r of u){let v=s.filter(f=>f.artist===r).length;C.push({type:"artist",artist:r}),n+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${i++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${Z(m(r),o)}</span>
          <span class="omni-item-meta">${v}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(a.length){let r=a.filter(v=>q(v.title).includes(o)||v.songs?.some(f=>q(f.title).includes(o)||q(f.artist).includes(o))).slice(0,5);if(r.length){n+=J("\u{1F4C5} \u914D\u4FE1\u67A0");for(let v of r){C.push({type:"stream",stream:v});let f=v.channel==="new"?"\u65B0ch":v.channel==="old"?"\u65E7ch":"";n+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${i++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${Z(m(v.title||"\u914D\u4FE1"),o)}</span>
            <span class="omni-item-meta">${S(v.date)}${f?" \xB7 "+f:""} \xB7 ${v.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}n||(n=`<div class="omni-empty">\u300C${m(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=n}function J(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function qt(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${Z(m(t.title),s)}</span>
      <span class="omni-item-meta">${Z(m(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function q(t){return String(t||"").toLowerCase()}function Z(t,e){if(!e)return t;let a=t.toLowerCase().indexOf(e);return a<0?t:t.slice(0,a)+'<mark class="hl">'+t.slice(a,a+e.length)+"</mark>"+t.slice(a+e.length)}At();Et();var Gt={dashboard:()=>import("./chunk-NX4KOKQI.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-AOWB3BNY.js").then(t=>t.renderRanking),songs:()=>import("./chunk-EQQ27U7N.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-4GOYTJ2B.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-QEXZHCSH.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-RW2OMLXW.js").then(t=>t.renderPlaylists)},X=new Map,Ft=0,B=null;function at(t){return Object.prototype.hasOwnProperty.call(Gt,t)}async function le(t){X.has(t)||X.set(t,Gt[t]());try{return await X.get(t)}catch(e){throw X.delete(t),e}}function zt(t){return["dashboard","timeline","analytics"].includes(t)}function oe(t,e={}){let s=l(`#panel-${t}`);if(!s)return;let a={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${m(a[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function re(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function ce(t){if(c.channelData?.fullLoaded)return;c.channelData=t;let e=M(c.channel)?c.channel:j,s=M(e);s&&(c.data=s),!zt(c.activeTab)&&c.data&&H(c.activeTab,{autoLoad:!1})}function de(t){c.channelData=t,c.channelData.fullLoaded=!0;let e=M(c.channel)?c.channel:j;lt(e,{resetSearch:!1,updateUrl:!1,render:!1}),H(c.activeTab,{autoLoad:!1})}function Qt(){return B=Pt({meta:c.channelData,onSongsReady:ce}).then(de).finally(()=>{B=null}),B}async function ue(){c.channelData?.fullLoaded||(B||Qt(),await B)}async function H(t=c.activeTab,e={}){if(t!=="playlists"&&(!c.data||!at(t))||!at(t))return;let s=c.channelData?.partialLoaded||c.channelData?.fullLoaded,a=c.channelData?.fullLoaded;if(t==="playlists"?!1:zt(t)?!a:!s)if(e.autoLoad){re(t);try{await ue()}catch(i){console.error("[data] full load failed",i);let d=l(`#panel-${t}`);d&&(d.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${m(i?.message||String(i))}</div>
              <button class="btn primary" type="button" data-load-full-data="${m(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,d.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{H(t,{autoLoad:!0})}));return}}else{oe(t,{initial:e.initial});return}let n=++Ft;try{let i=await le(t);if(n!==Ft||t!==c.activeTab||!c.data)return;t==="songs"&&It(c.data.songs||[]),i()}catch(i){console.error(`[${t}] render failed`,i);let d=l(`#panel-${t}`);d&&(d.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${m(i?.message||String(i))}</div>
        </div>
      `)}}function D(t,e={}){at(t)||(t="dashboard");let s=l("#stream-viewer");if(t!=="player"&&s&&!s.hidden&&!E){ot=t,it=e,G();return}c.activeTab=t,Jt(t),e.updateUrl!==!1&&Q({tab:t}),H(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Jt(t){L(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),L(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function M(t){return c.channelData?t==="all"?c.channelData.combined:c.channelData.channels[t]||null:null}function lt(t,e={}){let s=M(t);s&&(c.channel=t,Re(t),c.data=s,c.timelineFilter=null,c.timelineFocus=null,c.timelineLimit=12,c.songsLimit=100,e.resetSearch!==!1&&(c.songsQuery="",c.songsGenre="all"),ut(),L("#channel-switch [data-channel]").forEach(a=>a.classList.toggle("active",a.dataset.channel===t)),yt(),e.updateUrl!==!1&&Q({tab:c.activeTab,channel:t,q:c.songsQuery}),Ne(),e.render!==!1&&H(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function pe(t,e={}){c.audience=t==="singer"?"singer":"listener",c.singerMode=c.audience==="singer",c.singerMode||(c.singerPreset="all"),L(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===c.audience)}),document.body.dataset.audience=c.audience,yt(),c.audience==="singer"?(c.songsLimit=100,D("songs",{autoLoad:e.autoLoad!==!1})):c.data&&H(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function yt(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",s=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${s}`}function ve(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),s=l("#topbar-actions");if(!t||!e||!s)return;let a=n=>{e.checked=n,s.classList.toggle("is-open",n),t.setAttribute("aria-expanded",String(n))},o=()=>{a(!1),t.focus()};t.addEventListener("click",n=>{n.stopPropagation(),requestAnimationFrame(()=>a(e.checked))}),t.addEventListener("keydown",n=>{n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),a(!e.checked))}),e.addEventListener("change",()=>{a(e.checked)}),document.addEventListener("click",n=>{s.classList.contains("is-open")&&(n.target.closest("#topbar-actions")||n.target.closest("#mobile-menu-toggle")||n.target.closest("#mobile-menu-state")||o())}),document.addEventListener("keydown",n=>{n.key==="Escape"&&o()}),s.addEventListener("click",n=>{n.stopPropagation()}),yt()}function me(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,a=420,o=()=>{!e||e.src||(e.src=e.dataset.src||"")},n=()=>{s=!1;let d=window.scrollY>a;d&&o(),t.hidden=!d,t.classList.toggle("is-visible",d),t.setAttribute("aria-hidden",String(!d)),t.tabIndex=d?0:-1},i=()=>{s||(s=!0,requestAnimationFrame(n))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",i,{passive:!0}),n()}function fe(){if(c.channelData)for(let t of L("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!c.channelData.combined:!!(c.channelData.channels&&c.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function he({key:t,title:e,artist:s}){c.timelineFilter&&c.timelineFilter.key===t&&c.activeTab==="timeline"?c.timelineFilter=null:c.timelineFilter={key:t,title:e,artist:s},c.timelineFocus=null,c.timelineLimit=12,D("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function be(t,e){c.timelineFilter={key:t.key,title:t.title,artist:t.artist},c.timelineFocus=N(e),c.timelineLimit=9999,D("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function ye(t){gt(t.artist||"")}function gt(t){let e=String(t||"").replace(/"/g,"");c.songsQuery=e?`artist:"${e}"`:"",c.songsLimit=100,Q({tab:"songs",q:c.songsQuery}),D("songs",{updateUrl:!1})}function et(t){return(c.data?.songs||[]).find(e=>e.key===t)||null}function R(t){let e=String(t||""),s=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let a of s){let o=e.match(a);if(o)return o[1]}return""}function wt(t){let e=R(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function ge(t){let e=R(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function we(t){let e=R(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function Zt(){st&&(clearInterval(st),st=null)}function Xt(){Zt(),st=setInterval(()=>{if(y)try{let t=y.getDuration?.()||0,e=y.getCurrentTime?.()||0,s=t>0?Math.min(e/t*100,100):0,a=l("#yt-mini-progress-fill");a&&(a.style.width=`${s}%`);let n=y.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,i=l("#yt-mini-play");i&&i.setAttribute("data-playing",n?"1":"0")}catch{}},400)}function Y(){if(Zt(),y){try{y.destroy()}catch{}y=null}let t=l("#yt-player-container");t&&(t.innerHTML="")}function ke(){if(y?.getCurrentTime)try{return y.getCurrentTime()}catch{}return Math.max(0,ft+(Date.now()-ht)/1e3)}function nt(t,e=0,s=""){let a=R(t);if(!a)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}{let p=l("#stream-viewer");if(p&&!p.hidden&&!E){++T,p.hidden=!0,p._currentStream=null,w=null;let u=l("#sv-player-wrap");u&&(u.innerHTML=""),document.body.style.overflow="",I=null,it={},bt()}}$t(),kt();let o=l("#yt-player-container"),n=l("#yt-player-panel");if(!o||!n)return;Y();let i=l("#yt-mini-title");i&&(i.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let d=l("#yt-mini-hint");d&&(d.textContent=I?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),n.classList.toggle("has-stream",!!I),n.hidden=!1,Lt(()=>{let p=document.createElement("div");o.appendChild(p);try{y=new window.YT.Player(p,{videoId:a,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:u=>{if(e>5)try{u.target.seekTo(e,!0)}catch{}Xt()},onStateChange:u=>{let r=u.data===window.YT.PlayerState.PLAYING,v=l("#yt-mini-play");v&&v.setAttribute("data-playing",r?"1":"0")}}})}catch{let r=e>0?`&start=${Math.floor(e)}`:"";o.innerHTML=`<iframe src="https://www.youtube.com/embed/${a}?autoplay=1&playsinline=1${r}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function kt(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
      <button id="yt-player-close" type="button" class="yt-mini-close-btn" aria-label="\u9589\u3058\u308B">\u2715</button>
    </div>
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,Y(),I=null}),l("#yt-mini-play").addEventListener("click",()=>{if(y)try{y.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?y.pauseVideo():y.playVideo()}catch{}}),l("#yt-mini-restore").addEventListener("click",()=>{I&&U(I,ke())}),l("#yt-mini-progress-bar").addEventListener("click",e=>{if(!y)return;let a=e.currentTarget.getBoundingClientRect(),o=Math.max(0,Math.min(1,(e.clientX-a.left)/a.width));try{let n=y.getDuration?.()||0;n>0&&y.seekTo(o*n,!0)}catch{}})}var Wt=!1,te=[];window.onYouTubeIframeAPIReady=()=>{Wt=!0,te.splice(0).forEach(t=>t()),import("./chunk-SHMHHHHQ.js").then(t=>t.notifyYtReady()).catch(()=>{})};function $t(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function Lt(t){if(Wt&&window.YT?.Player){t();return}te.push(t)}var w=null,T=0,I=null,ft=0,ht=0,E=!1,ot="timeline",it={},x={},V=!1,y=null,st=null;function $e(){ot=c.activeTab||"timeline",c.activeTab="player",L(".tab-btn").forEach(t=>t.classList.remove("active")),L(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function bt(){let t=it;it={},D(ot||"timeline",t)}function Le(){E=!0;let t=l("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=l("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function P(t){let e=Math.floor(t),s=Math.floor(e/3600),a=Math.floor(e%3600/60),o=e%60;return s>0?`${s}:${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${a}:${String(o).padStart(2,"0")}`}function ee(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function O(t){try{return JSON.parse(localStorage.getItem(ee(t))||"null")||{}}catch{return{}}}function mt(t,e){try{localStorage.setItem(ee(t),JSON.stringify(e))}catch{}}function Se(t,e,s){let a=s[e],o=a!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${m(P(a))} \u306B\u79FB\u52D5">${m(P(a))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",i=(x[e]||[]).map(u=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${u.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${m(P(u.timeSeconds))}">${m(P(u.timeSeconds))}</button>`).join(""),d=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,p=`<div class="sv-cts-row">${i}${d}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${m(t.title)}</span>
      <span class="sv-song-artist">${m(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${o}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${p}
  </div>`}async function Te(t){if(x={},!t?.channel||t?.index==null)return;try{let a=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,o=await fetch(a);if(!o.ok)return;let n=await o.json();for(let i of n.items||[])x[i.songIndex]||(x[i.songIndex]=[]),x[i.songIndex].push({timeSeconds:i.timeSeconds,note:i.note??null})}catch{}let e=l("#stream-viewer");if(!e||e._currentStream!==t)return;let s=l("#sv-setlist");s&&K(s,t.songs,O(t)),Ee(t)}function xe(t,e,s){l("#sv-cts-modal")?.remove();let a=w?.getCurrentTime?.()??0,o=P(Math.floor(a)),n=document.createElement("div");n.id="sv-cts-modal",n.className="sv-cts-modal-overlay",n.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-cts-modal-song">${m(s)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${m(o)}" placeholder="0:00" autocomplete="off">
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
  `,document.body.appendChild(n);let i=()=>n.remove();n.querySelector(".sv-cts-modal-close").addEventListener("click",i),n.querySelector(".sv-cts-modal-cancel").addEventListener("click",i),n.addEventListener("click",d=>{d.target===n&&i()}),n.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let d=n.querySelector("#sv-cts-ts-input").value.trim(),p=n.querySelector("#sv-cts-note-input").value.trim()||null,u=St(d),r=n.querySelector("#sv-cts-status");if(u===null){r.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",r.className="sv-cts-modal-status error",r.hidden=!1;return}let v=n.querySelector("#sv-cts-submit");v.disabled=!0,v.textContent="\u9001\u4FE1\u4E2D\u2026";try{let f=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:u,submitterNote:p})});if(f.ok)r.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",r.className="sv-cts-modal-status success",r.hidden=!1,v.hidden=!0,n.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let h=await f.json().catch(()=>({}));r.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${h.error||f.statusText}`,r.className="sv-cts-modal-status error",r.hidden=!1,v.disabled=!1,v.textContent="\u63D0\u6848\u3059\u308B"}}catch(f){r.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.message}`,r.className="sv-cts-modal-status error",r.hidden=!1,v.disabled=!1,v.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>n.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function d(p){p.key==="Escape"&&(i(),document.removeEventListener("keydown",d))})}function Ee(t){let e=l("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let a=Object.keys(x).length>=t.songs.length;e.textContent=a?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function _e(t){l("#sv-bulk-modal")?.remove();let e=O(t),o=Object.keys(x).length>=t.songs.length,n=t.songs.map((p,u)=>{let r=e[u]!=null?P(e[u]):"",v=x[u]?.[0]?.timeSeconds!=null?P(x[u][0].timeSeconds):"",f=r||v;return`
      <div class="sv-bulk-row" data-idx="${u}">
        <span class="sv-bulk-num">${u+1}</span>
        <span class="sv-bulk-title" title="${m(p.title)}">${m(p.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${m(f)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${u}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${u}">\u23F1</button>
      </div>`}).join(""),i=document.createElement("div");i.id="sv-bulk-modal",i.className="sv-cts-modal-overlay",i.innerHTML=`
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="${o?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">${o?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}</span>
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
      <div class="sv-bulk-rows">${n}</div>
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
  `,document.body.appendChild(i);let d=()=>i.remove();i.querySelector(".sv-cts-modal-close").addEventListener("click",d),i.querySelector(".sv-cts-modal-cancel").addEventListener("click",d),i.addEventListener("click",p=>{p.target===i&&d()}),i.querySelector(".sv-paste-apply").addEventListener("click",()=>{let u=(i.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(f=>f.trim()).filter(Boolean),r=0;for(let f of u){let h=De(f);if(!h)continue;let b=Ae(h.title,h.artist,t.songs);if(b>=0){let g=i.querySelector(`[data-bulk-ts-idx="${b}"]`);g&&(g.value=h.start,r++)}}let v=i.querySelector(".sv-paste-result");v&&(v.textContent=r>0?`${u.length}\u884C\u3092\u89E3\u6790 \u2192 ${r}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",v.hidden=!1)}),i.querySelector(".sv-bulk-rows").addEventListener("click",p=>{let u=p.target.closest("[data-bulk-now]");if(!u)return;let r=parseInt(u.dataset.bulkNow,10),v=w?.getCurrentTime?.();if(v!=null){let f=i.querySelector(`[data-bulk-ts-idx="${r}"]`);f&&(f.value=P(Math.floor(v)))}}),i.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let p=i.querySelector("#sv-bulk-note").value.trim()||null,u=i.querySelector("#sv-bulk-status"),r=i.querySelector("#sv-bulk-submit"),v=[];if(i.querySelectorAll("[data-bulk-ts-idx]").forEach(b=>{let g=parseInt(b.dataset.bulkTsIdx,10),$=St(b.value.trim());$!==null&&v.push({songIndex:g,timeSeconds:$})}),!v.length){u.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",u.className="sv-cts-modal-status error",u.hidden=!1;return}r.disabled=!0,r.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${v.length})`,u.hidden=!0;let f=0,h=0;await Promise.all(v.map(async b=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:b.songIndex,timeSeconds:b.timeSeconds,submitterNote:p})})).ok?f++:h++}catch{h++}r.textContent=`\u7533\u8ACB\u4E2D\u2026 (${f+h}/${v.length})`})),h===0?(u.textContent=`${f}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,u.className="sv-cts-modal-status success",r.hidden=!0,i.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(u.textContent=`${f}\u4EF6\u6210\u529F / ${h}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,u.className="sv-cts-modal-status error",r.disabled=!1,r.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),u.hidden=!1}),document.addEventListener("keydown",function p(u){u.key==="Escape"&&(d(),document.removeEventListener("keydown",p))})}function se(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function Ce(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function Pe(t,e){let s=se(),a=s.find(o=>String(o.id)===String(t));return a?(a.streams||(a.streams=[]),a.streams.includes(e)||(a.streams.push(e),Ce(s)),!0):!1}function Me(){let t=c.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let a=t.findIndex(o=>o.channel===s.channel&&o.index===s.index);a<0||a>=t.length-1||U(t[a+1])}function Vt(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${m(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=wt(t.url),a=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${m(a)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${m(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${m(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${S(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function Ie(t){let e=l("#sv-below-player");if(!e)return;let s=c.data?.streams||[],a=s.findIndex(r=>r.channel===t.channel&&r.index===t.index),o=a>=0&&a<s.length-1?s[a+1]:null,n=a>0?s[a-1]:null,i=new Set(t.songs.map(r=>r.title)),d=s.filter((r,v)=>v!==a).map(r=>{let v=r.songs.filter(f=>i.has(f.title));return{stream:r,overlap:v.length,sharedSongs:v.slice(0,3).map(f=>f.title)}}).filter(r=>r.overlap>0).sort((r,v)=>v.overlap-r.overlap).slice(0,8),p=se(),u=N(t);e.innerHTML=`
    <div class="sv-bp-wrap">

      <!-- \u9023\u7D9A\u518D\u751F + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${V?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${V?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          ${o?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${m(o.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${Vt(o,"older")}
          ${Vt(n,"newer")}
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
            <span class="sv-bp-stat-val">${S(t.date)}</span>
            <span class="sv-bp-stat-label">\u914D\u4FE1\u65E5</span>
          </div>
        </div>
      </div>

      <!-- \u95A2\u9023\u914D\u4FE1 -->
      ${d.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u95A2\u9023\u914D\u4FE1 <span class="sv-bp-sh-sub">\uFF08\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${d.map(r=>{let v=wt(r.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(r.stream.channel)}" data-bp-index="${r.stream.index}">
              ${v?`<img class="sv-bp-rel-thumb" src="${m(v)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${m(r.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${S(r.stream.date)}</div>
                <div class="sv-bp-rel-songs">${r.sharedSongs.map(f=>m(f)).join("\u3001")}</div>
              </div>
              <div class="sv-bp-rel-badge">${r.overlap}\u66F2</div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      <!-- \u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0 -->
      ${p.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0</div>
        <div class="sv-bp-pl-list" id="sv-bp-pl-list">
          ${p.map(r=>{let v=(r.streams||[]).includes(u);return`<button class="sv-bp-pl-btn${v?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${m(String(r.id))}"${v?" disabled":""}>
              <span class="sv-bp-pl-name">${m(r.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${v?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=r=>{let v=r.target.closest("#sv-ap-check");if(!v)return;V=v.checked;let f=e.querySelector(".sv-bp-ap-switch");f&&f.classList.toggle("sv-bp-ap-switch--on",V)},e.onclick=r=>{let v=r.target.closest("[data-bp-action]");if(!v)return;let f=v.dataset.bpAction;if(f==="open-stream"){let h=v.dataset.bpChannel,b=parseInt(v.dataset.bpIndex,10),g=(c.data?.streams||[]).find($=>$.channel===h&&$.index===b);g&&U(g)}else if(f==="add-pl"){let h=v.dataset.bpPlId;if(Pe(h,u)){v.classList.add("sv-bp-pl-btn--added"),v.disabled=!0;let b=v.querySelector(".sv-bp-pl-status");b&&(b.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}}}function K(t,e,s){t.innerHTML=e.map((a,o)=>Se(a,o,s)).join("")}function St(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function De(t){let e=t.match(/^(\d{1,2}:\d{2}(?::\d{2})?)[\s　]+(.+?)\s*\/\s*(.+?)[\s　]+(\d{1,2}:\d{2}(?::\d{2})?)$/);return e?{start:e[1].trim(),title:e[2].trim(),artist:e[3].trim(),end:e[4].trim()}:null}function W(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function Ae(t,e,s){let a=W(t),o=W(e),n=-1,i=0;for(let d=0;d<s.length;d++){let p=W(s[d].title),u=W(s[d].artist),r=0;p===a?r+=80:a.length>1&&(p.includes(a)||a.includes(p))&&(r+=40),o&&u===o?r+=20:o&&o.length>1&&(u.includes(o)||o.includes(u))&&(r+=10),r>i&&(i=r,n=d)}return i>=40?n:-1}function ae(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
  `,t.appendChild(e),l("#sv-close").addEventListener("click",G),l("#sv-fullscreen-btn").addEventListener("click",Le),e.querySelectorAll("[data-bc-tab]").forEach(s=>{s.addEventListener("click",()=>{G(),D(s.dataset.bcTab)})}),l("#sv-import-toggle").addEventListener("click",()=>{let s=l("#sv-import-area");s&&(s.hidden=!s.hidden,s.hidden||l("#sv-import-input")?.focus())}),l("#sv-import-cancel").addEventListener("click",()=>{let s=l("#sv-import-area");s&&(s.hidden=!0);let a=l("#sv-import-input");a&&(a.value="")}),l("#sv-import-apply").addEventListener("click",()=>{let s=e._currentStream;if(!s)return;let a=l("#sv-import-input");if(!a)return;let n=a.value.split(`
`).map(p=>St(p)).filter(p=>p!==null);if(!n.length)return;let i=O(s);n.forEach((p,u)=>{u<s.songs.length&&(i[u]=p)}),mt(s,i),K(l("#sv-setlist"),s.songs,i);let d=l("#sv-import-area");d&&(d.hidden=!0),a.value=""}),l("#sv-cts-bulk-btn").addEventListener("click",()=>{let s=e._currentStream;s&&_e(s)}),l("#sv-setlist").addEventListener("click",s=>{let a=s.target.closest("[data-action]");if(!a)return;let o=parseInt(a.dataset.idx,10),n=e._currentStream;if(!n)return;let i=O(n);if(a.dataset.action==="seek"){if(i[o]!=null&&w?.seekTo){w.seekTo(i[o],!0);try{w.playVideo()}catch{}}}else if(a.dataset.action==="set-ts"){let d=w?.getCurrentTime?.();d!=null&&(i[o]=Math.floor(d),mt(n,i),K(l("#sv-setlist"),n.songs,i))}else if(a.dataset.action==="del-ts")delete i[o],mt(n,i),K(l("#sv-setlist"),n.songs,i);else if(a.dataset.action==="cts-seek"){let d=Number(a.dataset.ctsSeconds);if(!isNaN(d)&&w?.seekTo){w.seekTo(d,!0);try{w.playVideo()}catch{}}}else if(a.dataset.action==="cts-propose"){let d=n.songs[o];xe(n,o,d?.title||`\u66F2 ${o+1}`)}})}function U(t,e=0){if(!t?.url)return;let s=R(t.url);if(!s){nt(t.url);return}ae(),$t();let a=l("#yt-player-panel"),o=!!(a&&!a.hidden&&y);if(!o&&a&&!a.hidden&&(a.hidden=!0,Y()),I=null,import("./chunk-SHMHHHHQ.js").then($=>$.pauseMusicPlayer()).catch(()=>{}),E){E=!1;let $=l("#stream-viewer");$&&$.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}E=!1,$e();let n=l("#stream-viewer");n.classList.remove("sv-fullscreen"),n._currentStream=t;let i=++T,d=l("#sv-bc-title");d&&(d.textContent=t.title||"\u914D\u4FE1");let p=l("#sv-stream-meta");p&&(p.textContent=`${S(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let u=l("#sv-yt-link");u&&(u.href=t.url);let r=l("#sv-song-count");r&&(r.textContent=`${t.songs.length}\u66F2`),x={};let v=O(t);K(l("#sv-setlist"),t.songs,v),Te(t),Ie(t),n.hidden=!1,document.body.style.overflow="",setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),w=null;let f=l("#sv-player-wrap");f.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let h=Math.floor(e),b=null;o&&(b=setTimeout(()=>{a&&!a.hidden&&(a.hidden=!0,Y())},5e3));let g=()=>{o&&(b&&(clearTimeout(b),b=null),a&&!a.hidden&&(a.hidden=!0,Y()))};Lt(()=>{if(i!==T||n.hidden)return;f.innerHTML="";let $=document.createElement("div");f.appendChild($);let z=!1;try{w=new window.YT.Player($,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...h>0?{start:h}:{}},events:{onReady:_=>{try{_.target.setPlaybackQuality("hd1080")}catch{}try{_.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(h>5)try{_.target.seekTo(h,!0)}catch{}},onStateChange:_=>{if(i===T){if(_.data===window.YT.PlayerState.PLAYING){try{_.target.setPlaybackQuality("hd1080")}catch{}z||(z=!0,g())}_.data===window.YT.PlayerState.ENDED&&V&&Me()}},onError:()=>{i===T&&(z||(z=!0,g()),f.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(s)}?autoplay=1&playsinline=1&rel=0${h>0?`&start=${h}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{g(),f.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(s)}?autoplay=1&playsinline=1&rel=0${h>0?`&start=${h}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function G(){let t=l("#stream-viewer");if(!t||t.hidden||t.dataset.svTransitioning)return;if(E){E=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let i=l("#sv-close");i&&(i.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let d=l("#sv-fullscreen-btn");d&&d.setAttribute("aria-pressed","false");return}let e=t._currentStream,s=w?.getCurrentTime?.()??0,a=e?.url?R(e.url):"";++T;let o=T;if(a&&e?.url){I=e,ft=Math.floor(s),ht=Date.now(),t.dataset.svTransitioning="1",t.classList.add("sv-to-mini"),$t(),kt();let i=l("#yt-player-container"),d=l("#yt-player-panel");Y();let p=l("#yt-mini-title");p&&(p.textContent=e.title||"");let u=l("#yt-mini-hint");u&&(u.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),d.classList.add("has-stream"),d.hidden=!1;let r=()=>{if(o!==T){t.classList.remove("sv-to-mini"),delete t.dataset.svTransitioning;return}t.classList.remove("sv-to-mini"),delete t.dataset.svTransitioning;let f=w;w=null,t.hidden=!0,t._currentStream=null;let h=l("#sv-player-wrap");h&&(h.innerHTML=""),document.body.style.overflow="",bt(),setTimeout(()=>{try{f?.destroy?.()}catch{}},100)},v=setTimeout(r,3e3);Lt(()=>{if(o!==T){clearTimeout(v),t.classList.remove("sv-to-mini"),delete t.dataset.svTransitioning;return}let f=document.createElement("div");i.appendChild(f);try{y=new window.YT.Player(f,{videoId:a,width:"100%",height:"100%",playerVars:{autoplay:0,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1},events:{onReady:h=>{let b=ft+(Date.now()-ht)/1e3;try{h.target.seekTo(b,!0),h.target.playVideo()}catch{}},onStateChange:h=>{let b=h.data===window.YT?.PlayerState?.PLAYING,g=l("#yt-mini-play");g&&g.setAttribute("data-playing",b?"1":"0"),b&&o===T&&(clearTimeout(v),r(),Xt())}}})}catch{clearTimeout(v),r()}});return}t.hidden=!0,t._currentStream=null,w=null;let n=l("#sv-player-wrap");n&&(n.innerHTML=""),document.body.style.overflow="",bt()}window.__openStreamViewer=U;function ne(t){let e=et(t),s=l("#song-modal"),a=l("#song-modal-body"),o=l("#song-modal-title");if(!e||!s||!a||!o)return;Ct(e),o.textContent=e.title;let n=(e.streamRefs||[]).slice(0,8).map(p=>({...p,thumbnail:wt(p.url),thumbnailFallback:ge(p.url),thumbnailTiny:we(p.url),detailKey:N(p)})),i=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),d=ct(e.key);a.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${m(e.key)}">${m(e.artist)}</button>
        <div class="song-detail-tags">${i.map(p=>`<span class="tag-badge">${m(p)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${S(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${d?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${m(e.key)}">${d?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${m(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${n.length?n.map(p=>`
        <div class="song-detail-stream">
          ${p.thumbnail&&p.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${m(p.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${m(p.thumbnail)}" data-fallback="${m(p.thumbnailFallback)}" data-tiny="${m(p.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${m(p.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${m(e.key)}" data-streamkey="${m(p.detailKey)}">
            <span>${S(p.date)}</span>
            <strong>${m(p.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,s.hidden=!1,l("#song-modal-close")?.focus()}function He(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",a=>{a.target===t&&s();let o=a.target.closest("[data-inline-youtube]");if(o){a.preventDefault(),a.stopPropagation(),nt(o.dataset.inlineYoutube);return}let n=a.target.closest("[data-detail-action]");if(n){if(a.stopPropagation(),n.dataset.detailAction==="close"&&s(),n.dataset.detailAction==="favorite"){let i=n.dataset.songkey;xt(i);let d=ct(i);n.textContent=d?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",n.classList.toggle("primary",d),n.classList.toggle("ghost",!d)}if(n.dataset.detailAction==="timeline"){let i=et(n.dataset.songkey);s(),i&&he(i)}if(n.dataset.detailAction==="stream"){let i=et(n.dataset.songkey),d=i?.streamRefs?.find(p=>N(p)===n.dataset.streamkey);s(),i&&d&&be(i,d)}if(n.dataset.detailAction==="artist"){let i=et(n.dataset.songkey);s(),i&&ye(i)}}}),t.addEventListener("error",a=>{let o=a.target.closest?.(".song-detail-thumb");if(!o)return;let n=o.dataset.fallback||o.dataset.tiny||"";if(n&&o.src!==n){o.src=n,o.dataset.fallback===n?delete o.dataset.fallback:delete o.dataset.tiny;return}o.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&s()})}var Kt=!1;function Ne(){if(!c.data)return;let{stats:t,streams:e=[]}=c.data,s=e[0]?.date||null,a=dt(s),o=t.dataGeneratedDate||c.channelData?.dataGeneratedDate||null,n=dt(o),i=t.channelLabel||t.channelId||"",d=i?`<span class="badge accent" style="margin-right:8px;">${m(i)}</span>`:"";l("#updated-info").innerHTML=d+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${S(o)||"\u2014"}</strong>`+(n!=null?` <span class="badge">${n}\u65E5\u524D</span>`:"");let p=l("#stats-grid");if(!Kt)p.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${A(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${A(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${A(t.streams)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">1\u67A0\u5E73\u5747</div>
        <div class="stat-value">${t.avgPerStream}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card accent">
        <div class="stat-label">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</div>
        <div class="stat-value">${a??"\u2014"}<span class="stat-unit">\u65E5</span></div>
      </div>
      <div class="stat-card gold">
        <div class="stat-label">\u6D3B\u52D5\u671F\u9593</div>
        <div class="stat-value">${Ot(c.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,Kt=!0;else{let u=p.querySelectorAll(".stat-value");u.length>=6&&(u[0].textContent=A(t.total),u[0].innerHTML+='<span class="stat-unit">\u56DE</span>',u[1].textContent=A(t.repertoire),u[1].innerHTML+='<span class="stat-unit">\u66F2</span>',u[2].textContent=A(t.streams),u[2].innerHTML+='<span class="stat-unit">\u56DE</span>',u[3].textContent=t.avgPerStream,u[3].innerHTML+='<span class="stat-unit">\u66F2</span>',u[4].textContent=a??"\u2014",u[4].innerHTML+='<span class="stat-unit">\u65E5</span>',u[5].textContent=Ot(c.data),u[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function Ot(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,s=t.streams[0].date;return Math.floor((s-e)/864e5)+1}function qe(){l("#loading").hidden=!1,l("#error").hidden=!0}function Be(){l("#loading").hidden=!0}function Ye(t){let e=l("#loading"),s=l("#error"),a=l("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),a&&(a.textContent=t&&t.message?t.message:String(t))}function Re(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let s=document.getElementById("hero-ch-bg");s&&(s.dataset.mode=t||"all")}var Ue={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:"\u{1F6CD}",label:"official store",url:"https://react.booth.pm"},{icon:"\u{1F310}",label:"official site",url:"https://v-react.com"},{icon:"\u{1F3B5}",label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:"\u{1F3A7}",label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:"\u25B6",label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function tt(t){let e=Ue[t];if(!e)return"";let s=e.bannerUrl?`<img class="ch-card-banner-img" src="${m(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${m(e.label)}</span>`:`<span class="ch-card-banner-label">${m(e.label)}</span>`,a=e.avatarUrl?`<img class="ch-card-avatar-img" src="${m(e.avatarUrl)}" alt="${m(e.name)}" loading="lazy" referrerpolicy="no-referrer">`:t==="new"?"\u65B0":"\u65E7",o=e.desc?`<p class="ch-card-desc">${e.desc.split(`
`).map(i=>m(i)).join("<br>")}</p>`:"",n=e.links?.length?`
    <div class="ch-card-links">
      ${e.links.map(i=>`
        <a class="ch-card-link" href="${m(i.url)}" target="_blank" rel="noopener">
          <span class="ch-card-link-icon" aria-hidden="true">${i.icon}</span>
          <span>${m(i.label)}</span>
        </a>`).join("")}
    </div>`:"";return`
    <div class="ch-card ch-card--${t}">
      <div class="ch-card-banner ch-card-banner--${t}${e.bannerUrl?" ch-card-banner--img":""}">
        ${s}
      </div>
      <div class="ch-card-body">
        <div class="ch-card-header">
          <div class="ch-card-avatar ch-card-avatar--${t}${e.avatarUrl?" ch-card-avatar--img":""}">${a}</div>
          <div class="ch-card-meta">
            <div class="ch-card-name">${m(e.name)}</div>
            <div class="ch-card-handle">${m(e.handle)}</div>
          </div>
        </div>
        ${o}
        ${n}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${m(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u3078
          </a>
        </div>
      </div>
    </div>`}function je(t){let e=l("#ch-modal"),s=l("#ch-modal-body");if(!e||!s)return;let a="";t==="new"?a=tt("new"):t==="old"?a=tt("old"):a=tt("new")+tt("old"),s.innerHTML=a,e.hidden=!1,l("#ch-modal-close")?.focus()}function Fe(){let t=l("#ch-modal"),e=l("#ch-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",a=>{a.target===t&&s()}),document.querySelectorAll("[data-ch-modal]").forEach(a=>{a.addEventListener("click",()=>je(a.dataset.chModal))})}function Ve(){let t=l("#help-modal"),e=l("#help-btn"),s=l("#help-close");if(!t||!e||!s)return;let a=()=>{t.hidden=!1,s.focus()},o=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",a),s.addEventListener("click",o),t.addEventListener("click",n=>{n.target===t&&o()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&o()})}function Ke(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function Tt(){qe();try{let t=await Mt();c.channelData=t,!B&&!t.fullLoaded&&Qt();let e=pt();c.songsQuery=e.q,c.activeTab=at(e.tab)?e.tab:"dashboard",Jt(c.activeTab);let s=e.channel||c.channel||j;if(M(s)||(s=j),!M(s)){let a=Object.keys(t.channels)[0];a&&(s=a)}if(!M(s))throw new Error("No channel data could be loaded");fe(),Be(),lt(s,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0})}catch(t){console.error("[init] failed:",t),Ye(t)}}function Oe(){if(!c.channelData)return;let t=pt();c.songsQuery=t.q,t.channel!==c.channel&&M(t.channel)&&lt(t.channel,{resetSearch:!1,updateUrl:!1}),D(t.tab,{updateUrl:!1})}L(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=l("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!E){ot=e,G();return}D(e)})});L(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||lt(t.dataset.channel))})});window.addEventListener("popstate",Oe);L("[data-audience]").forEach(t=>{t.addEventListener("click",()=>pe(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),gt(e.dataset.artistSearch||e.textContent||"");return}let s=t.target.closest("[data-playlist-add]");if(s){t.preventDefault(),t.stopPropagation();let i=s.dataset.playlistAdd,d=s.dataset.streamTitle||"";import("./chunk-RW2OMLXW.js").then(p=>p.showAddToPlaylistModal(i,d));return}let a=t.target.closest("[data-stream-play]");if(a){t.preventDefault(),t.stopPropagation();let i=a.dataset.streamPlay,d=(c.data?.streams||[]).find(p=>N(p)===i);d?.url?U(d):a.dataset.inlineYoutube&&nt(a.dataset.inlineYoutube);return}let o=t.target.closest("[data-inline-youtube]");if(o){t.preventDefault(),t.stopPropagation(),nt(o.dataset.inlineYoutube);return}if(_t(t.target))return;let n=t.target.closest("[data-songkey]");n&&ne(n.dataset.songkey)});l("#retry-btn").addEventListener("click",Tt);l("#reload-btn").addEventListener("click",Tt);Ve();Fe();kt();ae();He();ve();me();Ke();import("./chunk-SHMHHHHQ.js").then(t=>t.initMusicPlayer()).catch(()=>{});Bt(t=>{t.type==="song"?ne(t.song.key):t.type==="artist"?gt(t.artist):t.type==="stream"&&U(t.stream)});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),Yt();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),Dt();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let o=l("#help-modal");o&&o.hidden&&(o.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let o=l("#stream-viewer"),n=!!l("#panel-player.active");if(o&&!o.hidden&&(E||n)){t.preventDefault(),G();return}if(Rt()){t.preventDefault(),F();return}let i=l("#song-modal");if(i&&!i.hidden)return;let d=l("#ch-modal");if(d&&!d.hidden){d.hidden=!0;return}let p=l("#help-modal");if(p&&!p.hidden){p.hidden=!0,l("#help-btn")?.focus();return}let u=l("#songs-search");u&&document.activeElement===u&&u.value&&(t.preventDefault(),u.value="",u.dispatchEvent(new Event("input",{bubbles:!0})))}});Ht(()=>{c.data&&(ut(),(c.activeTab==="dashboard"||c.activeTab==="analytics")&&H())});function Ge(){Tt()}Ge();
