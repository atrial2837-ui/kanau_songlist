import{b as ce,c as de,d as ue,i as ve,j as pe,k as Y,l as z}from"./chunk-TKHIMASD.js";import{a as me,b as fe,e as Vt,f as he}from"./chunk-SIADDXVK.js";import{a as it}from"./chunk-MKJIXTK4.js";import{a as le,b as Dt,c as re,e as d}from"./chunk-JT7WCFD3.js";import{D as qt,E,G as W,L as O,M as oe,a as r,b as P,d as f}from"./chunk-PRFEE4R6.js";var _=-1,V=[],Nt=null,G=null,kt=null;function we(t){Nt=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
    <div id="omni-box">
      <div class="omni-input-row">
        <span class="omni-search-icon" aria-hidden="true">\u{1F50D}</span>
        <input
          id="omni-input"
          class="omni-input"
          type="search"
          placeholder="\u66F2\u30FB\u914D\u4FE1\u30FB\u52D5\u753B\u3092\u691C\u7D22\uFF08\u30B9\u30DA\u30FC\u30B9\u533A\u5207\u308A\u3067\u7D5E\u308A\u8FBC\u307F\uFF09"
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
  `,document.body.appendChild(e),e.addEventListener("click",n=>{n.target===e&&ot()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>Ht(s.value)),s.addEventListener("keydown",Ze),document.getElementById("omni-listbox").addEventListener("click",n=>{let a=n.target.closest("[data-omni-idx]");a&&$e(Number(a.dataset.omniIdx))})}function ke(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,_=-1,V=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Ht(""),es().then(()=>{if(!Bt())return;let s=document.getElementById("omni-input")?.value||"";s.trim()&&Ht(s)})}function ot(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),_=-1}function Bt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function Ze(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),_=Math.min(_+1,e.length-1),be(e)):t.key==="ArrowUp"?(t.preventDefault(),_=Math.max(_-1,-1),be(e)):t.key==="Enter"?(t.preventDefault(),_>=0&&V[_]&&$e(_)):t.key==="Escape"&&(t.preventDefault(),ot())}function be(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===_),e.setAttribute("aria-selected",String(s===_))}),_>=0&&t[_]?.scrollIntoView({block:"nearest"})}function $e(t){let e=V[t];!e||!Nt||(ot(),Nt(e))}function Ht(t){let e=document.getElementById("omni-listbox");if(!e)return;_=-1,V=[];let s=d.data?.songs||[],n=d.data?.streams||[],a=G||[],i=X(t),l="",c=0;if(!d.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!i){let p=s.slice(0,8);if(p.length){l+=lt("\u{1F3C6} \u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let m of p)V.push({type:"song",song:m}),l+=ye(m,c++,"")}e.innerHTML=l||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let o=[];try{o=(pe(t,s).results||[]).slice(0,8)}catch{}if(o.length||(o=s.filter(p=>ge(t,`${p.title} ${p.artist}`)).slice(0,8)),o.length){l+=lt("\u{1F3B5} \u66F2");for(let p of o)V.push({type:"song",song:p}),l+=ye(p,c++,i)}if(a.length){let p=a.filter(m=>ss(m,t)).slice(0,6);if(p.length){l+=lt("\u{1F3AC} \u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2");for(let m of p)V.push({type:"music-video",video:m}),l+=ts(m,c++,t)}}let v=new Set,u=[];for(let p of s)if(p.artist&&ge(t,p.artist)&&!v.has(p.artist)&&(v.add(p.artist),u.push(p.artist),u.length>=4))break;if(u.length){l+=lt("\u{1F3A4} \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let p of u){let m=s.filter(h=>h.artist===p).length;V.push({type:"artist",artist:p}),l+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${c++}">
        <span class="omni-item-icon">\u{1F3A4}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${rt(f(p),i)}</span>
          <span class="omni-item-meta">${m}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(n.length){let p=n.filter(m=>{let h=X(`${m.title||""} ${(m.songs||[]).map(b=>`${b.title||""} ${b.artist||""}`).join(" ")}`),y=$t(t);return y.length>0&&y.every(b=>h.includes(b))}).slice(0,5);if(p.length){l+=lt("\u{1F4C5} \u914D\u4FE1\u67A0");for(let m of p){V.push({type:"stream",stream:m});let h=m.channel==="new"?"\u65B0ch":m.channel==="old"?"\u65E7ch":"";l+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${c++}">
          <span class="omni-item-icon">\u{1F4C5}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${rt(f(m.title||"\u914D\u4FE1"),i)}</span>
            <span class="omni-item-meta">${E(m.date)}${h?" \xB7 "+h:""} \xB7 ${m.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}l||(l=`<div class="omni-empty">\u300C${f(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=l}function lt(t){return`<div class="omni-section-label" role="presentation">${t}</div>`}function ye(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3B5}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${rt(f(t.title),s)}</span>
      <span class="omni-item-meta">${rt(f(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function ts(t,e,s){let n=Le(t),a=t.originalArtist||t.character||n;return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">\u{1F3AC}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${rt(f(t.title||"\u52D5\u753B"),s)}</span>
      <span class="omni-item-meta">${f(n)}${a?" \xB7 "+f(a):""} \xB7 \u52D5\u753B\u3067\u898B\u308B</span>
    </div>
  </div>`}function es(){return G!==null?Promise.resolve(G):kt||(kt=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>(G=Array.isArray(t?.videos)?t.videos:[],G)).catch(()=>(G=[],G)),kt)}function ss(t,e){let s=$t(e);if(!s.length)return!1;let n=ns(t);return s.every(a=>n.includes(a))}function ns(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(n=>n.trim()).filter(Boolean);return X([e,...s,t.originalArtist,t.character,t.type,Le(t)].filter(Boolean).join(" "))}function Le(t){switch(t?.type){case"cover":return"\u6B4C\u307F\u305F";case"office":return"Re:AcT\u30AA\u30EA\u66F2";case"character":return"\u30AD\u30E3\u30E9\u30BD\u30F3";default:return"\u30AA\u30EA\u66F2"}}function $t(t){return X(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function ge(t,e){let s=$t(t);if(!s.length)return!1;let n=X(e);return s.every(a=>n.includes(a))}function X(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/\s+/g," ").trim()}function rt(t,e){let n=$t(e).find(l=>l&&t.toLowerCase().includes(l))||X(e);if(!n)return t;let i=t.toLowerCase().indexOf(n);return i<0?t:t.slice(0,i)+'<mark class="hl">'+t.slice(i,i+n.length)+"</mark>"+t.slice(i+n.length)}fe();re();var Ce={dashboard:()=>import("./chunk-OSYUAIR3.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-3IZSIC4O.js").then(t=>t.renderRanking),songs:()=>import("./chunk-S3BN7VZH.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-N5MCYEQK.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-2KXNKLY6.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-5GOOZP3X.js").then(t=>t.renderPlaylists)},Lt=new Map,Se=0,tt=null;function Et(t){return Object.prototype.hasOwnProperty.call(Ce,t)}async function as(t){Lt.has(t)||Lt.set(t,Ce[t]());try{return await Lt.get(t)}catch(e){throw Lt.delete(t),e}}function Pe(t){return["dashboard","timeline","analytics"].includes(t)}function is(t,e={}){let s=r(`#panel-${t}`);if(!s)return;let n={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${f(n[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function ls(t){let e=r(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function rs(t){if(d.channelData?.fullLoaded)return;d.channelData=t;let e=j(d.channel)?d.channel:it,s=j(e);s&&(d.data=s),!Pe(d.activeTab)&&d.data&&J(d.activeTab,{autoLoad:!1})}function os(t){d.channelData=t,d.channelData.fullLoaded=!0;let e=j(d.channel)?d.channel:it;It(e,{resetSearch:!1,updateUrl:!1,render:!1}),J(d.activeTab,{autoLoad:!1})}function Ie(){return tt=de({meta:d.channelData,onSongsReady:rs}).then(os).finally(()=>{tt=null}),tt}async function Yt(){d.channelData?.fullLoaded||(tt||Ie(),await tt)}async function J(t=d.activeTab,e={}){if(t!=="playlists"&&(!d.data||!Et(t))||!Et(t))return;let s=d.channelData?.partialLoaded||d.channelData?.fullLoaded,n=d.channelData?.fullLoaded;if(t==="playlists"?!1:Pe(t)?!n:!s)if(e.autoLoad){ls(t);try{await Yt()}catch(l){console.error("[data] full load failed",l);let c=r(`#panel-${t}`);c&&(c.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${f(l?.message||String(l))}</div>
              <button class="btn primary" type="button" data-load-full-data="${f(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,c.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{J(t,{autoLoad:!0})}));return}}else{is(t,{initial:e.initial});return}let i=++Se;try{let l=await as(t);if(i!==Se||t!==d.activeTab||!d.data)return;t==="songs"&&ve(d.data.songs||[]),l()}catch(l){console.error(`[${t}] render failed`,l);let c=r(`#panel-${t}`);c&&(c.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${f(l?.message||String(l))}</div>
        </div>
      `)}}function D(t,e={}){Et(t)||(t="dashboard");let s=r("#stream-viewer");if(t!=="player"&&s&&!s.hidden&&!I&&!F(s)){wt=t,Ct=e,bt();return}d.activeTab=t,Ae(t),e.updateUrl!==!1&&z({tab:t}),J(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Ae(t){P(".tab-btn").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),P(".panel").forEach(e=>e.classList.toggle("active",e.id===`panel-${t}`))}function j(t){return d.channelData?t==="all"?d.channelData.combined:d.channelData.channels[t]||null:null}function It(t,e={}){let s=j(t);s&&(d.channel=t,Js(t),d.data=s,d.timelineFilter=null,d.timelineFocus=null,d.timelineLimit=12,d.songsLimit=100,e.resetSearch!==!1&&(d.songsQuery="",d.songsGenre="all"),Vt(),P("#channel-switch [data-channel]").forEach(n=>n.classList.toggle("active",n.dataset.channel===t)),jt(),e.updateUrl!==!1&&z({tab:d.activeTab,channel:t,q:d.songsQuery}),Os(),e.render!==!1&&J(d.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function cs(t,e={}){d.audience=t==="singer"?"singer":"listener",d.singerMode=d.audience==="singer",d.singerMode||(d.singerPreset="all"),P(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===d.audience)}),document.body.dataset.audience=d.audience,jt(),d.audience==="singer"?(d.songsLimit=100,D("songs",{autoLoad:e.autoLoad!==!1})):d.data&&J(d.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function jt(){let t=r("#mobile-menu-label");if(!t)return;let e=r("#channel-switch [data-channel].active")?.textContent?.trim()||"\u65B0ch",s=r("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=`${e} / ${s}`}function ds(){let t=r("#mobile-menu-toggle"),e=r("#mobile-menu-state"),s=r("#topbar-actions");if(!t||!e||!s)return;let n=i=>{e.checked=i,s.classList.toggle("is-open",i),t.setAttribute("aria-expanded",String(i))},a=()=>{n(!1),t.focus()};t.addEventListener("click",i=>{i.stopPropagation(),requestAnimationFrame(()=>n(e.checked))}),t.addEventListener("keydown",i=>{i.key!=="Enter"&&i.key!==" "||(i.preventDefault(),n(!e.checked))}),e.addEventListener("change",()=>{n(e.checked)}),document.addEventListener("click",i=>{s.classList.contains("is-open")&&(i.target.closest("#topbar-actions")||i.target.closest("#mobile-menu-toggle")||i.target.closest("#mobile-menu-state")||a())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&a()}),s.addEventListener("click",i=>{i.stopPropagation()}),jt()}function us(){let t=r("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,n=420,a=()=>{!e||e.src||(e.src=e.dataset.src||"")},i=()=>{s=!1;let c=window.scrollY>n;c&&a(),t.hidden=!c,t.classList.toggle("is-visible",c),t.setAttribute("aria-hidden",String(!c)),t.tabIndex=c?0:-1},l=()=>{s||(s=!0,requestAnimationFrame(i))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",l,{passive:!0}),i()}function vs(){if(d.channelData)for(let t of P("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!d.channelData.combined:!!(d.channelData.channels&&d.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function ps({key:t,title:e,artist:s}){d.timelineFilter&&d.timelineFilter.key===t&&d.activeTab==="timeline"?d.timelineFilter=null:d.timelineFilter={key:t,title:e,artist:s},d.timelineFocus=null,d.timelineLimit=12,D("timeline"),r("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function ms(t,e){d.timelineFilter={key:t.key,title:t.title,artist:t.artist},d.timelineFocus=W(e),d.timelineLimit=9999,D("timeline"),r("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function fs(t){Ft(t.artist||"")}function Ft(t){let e=String(t||"").replace(/"/g,"");d.songsQuery=e?`artist:"${e}"`:"",d.songsLimit=100,z({tab:"songs",q:d.songsQuery}),D("songs",{updateUrl:!1})}function xt(t){return(d.data?.songs||[]).find(e=>e.key===t)||null}function T(t){let e=String(t||""),s=[/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,/youtube\.com\/live\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/];for(let n of s){let a=e.match(n);if(a)return a[1]}return""}function vt(t){let e=T(t);return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function hs(t){let e=T(t);return e?`https://i.ytimg.com/vi/${e}/mqdefault.jpg`:""}function bs(t){let e=T(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function yt(){_t&&(clearInterval(_t),_t=null)}function Kt(){yt(),_t=setInterval(()=>{if(L(),!!w)try{let t=w.getDuration?.()||0,e=w.getCurrentTime?.()||0;M&&$s(M,e);let s=t>0?Math.min(e/t*100,100):0,n=r("#yt-mini-progress-fill");n&&(n.style.width=`${s}%`);let i=w.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,l=r("#yt-mini-play");l&&l.setAttribute("data-playing",i?"1":"0")}catch{}},400)}function gt(){if(yt(),w){try{w.destroy()}catch{}w=null}let t=r("#yt-player-container");t&&(t.innerHTML="")}function ys(){if(w?.getCurrentTime)try{return w.getCurrentTime()}catch{}return Math.max(0,mt+(Date.now()-Jt)/1e3)}function F(t=r("#stream-viewer")){return!!t&&(t.classList.contains("sv-minified")||t.classList.contains("sv-music-minified"))}function L(){let t=r("#stream-viewer");if(!F(t))return;let e=r("#sv-player-wrap"),s=t.classList.contains("sv-music-minified")?document.querySelector("#music-bar .mbar-video-wrap"):document.querySelector("#yt-player-panel .yt-mini-video-wrap");if(!e||!s)return;let n=s.getBoundingClientRect();e.style.left=`${n.left}px`,e.style.top=`${n.top}px`,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`}function gs(){let t=r("#stream-viewer"),e=t?._currentStream;if(!t||!e||!g)return!1;Gt();let s=r("#yt-player-panel");if(!s)return!1;M=e;try{mt=Math.floor(g.getCurrentTime?.()??0)}catch{mt=0}Jt=Date.now();let n=r("#yt-mini-title");n&&(n.textContent=e.title||"");let a=r("#yt-mini-hint");a&&(a.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),s.classList.add("has-stream"),s.hidden=!1,w=g,g=null,t.classList.add("sv-minified"),document.body.classList.add("has-sv-mini"),document.body.style.overflow="",At(),q(),L(),requestAnimationFrame(L),setTimeout(L,120),setTimeout(L,400),window.addEventListener("resize",L),Kt();try{let i=w.getPlayerState?.();r("#yt-mini-play")?.setAttribute("data-playing",i===window.YT?.PlayerState?.PLAYING?"1":"0")}catch{}return et(r("#yt-mini-vol-slider"),r("#yt-mini-vol-btn"),null,Q()),!0}function De(){let t=r("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",L),yt(),t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini");let e=r("#sv-player-wrap");e&&(e.style.cssText=""),g=w,w=null;let s=r("#yt-player-panel");return s&&(s.hidden=!0),Wt(),q(),setTimeout(()=>{r("#sv-close")?.focus({preventScroll:!0})},50),!0}function qe(){let t=r("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",L),yt(),t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music");let e=r("#sv-player-wrap");return e&&(e.style.cssText=""),g=w,w=null,Wt(),q(),setTimeout(()=>{r("#sv-close")?.focus({preventScroll:!0})},50),!0}function Ve(){let t=r("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",L),yt(),st(),++N,t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music"),t.hidden=!0,t._currentStream=null;let e=r("#sv-player-wrap");return e&&(e.style.cssText="",e.innerHTML=""),gt(),M=null,q(),!0}function ws(){let t=r("#stream-viewer"),e=t?._currentStream;if(!t||t.hidden||!e?.url)return;let s=zt(Y().t),n={...e,title:e.title||(e.isMv?"\u52D5\u753B":"\u6B4C\u67A0"),type:e.isMv?e.type||"original":"stream",sub:e.isMv?e.originalArtist||e.character||e.sub||"":`${E(e.date)} \u7B2C${e.index}\u67A0`,_stream:e};if(!g){import("./chunk-RV7JB4LR.js").then(i=>i.playMusicBarVideo?.(n,s)).catch(()=>{});return}try{mt=Math.floor(g.getCurrentTime?.()??s)}catch{mt=s}Jt=Date.now(),w=g,g=null,M=null,I=!1,t.classList.remove("sv-fullscreen","sv-minified"),t.classList.add("sv-music-minified"),document.body.classList.remove("has-sv-fullscreen","has-sv-mini"),document.body.classList.add("has-sv-music"),document.body.style.overflow="",t.hidden=!1;let a=r("#yt-player-panel");a&&(a.hidden=!0),At(),q(),L(),requestAnimationFrame(L),setTimeout(L,120),setTimeout(L,400),window.addEventListener("resize",L),Kt(),import("./chunk-RV7JB4LR.js").then(i=>{i.adoptExternalPlayer?.(n,w,{restore:qe,close:Ve}),L(),requestAnimationFrame(L),setTimeout(L,120),setTimeout(L,400)}).catch(()=>{})}function Ot(){let t=r("#stream-viewer");if(t?.classList.contains("sv-music-minified"))return Ve();if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",L),st(),++N,t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini"),t.hidden=!0,t._currentStream=null;let e=r("#sv-player-wrap");e&&(e.style.cssText="",e.innerHTML=""),gt();let s=r("#yt-player-panel");return s&&(s.hidden=!0),M=null,q(),!0}var Ne="kanau-watch-history-v1",xe=0;function ks(){try{return JSON.parse(localStorage.getItem(Ne)||"[]")}catch{return[]}}function He(t,e){if(!(!t?.url||e<10))try{let s=ks().filter(n=>n.url!==t.url);s.unshift({url:t.url,title:t.title||"",t:Math.max(0,Math.floor(e)),isMv:!!t.isMv,channel:t.channel??null,index:t.index??null,date:t.date??null,updatedAt:Date.now()}),localStorage.setItem(Ne,JSON.stringify(s.slice(0,10)))}catch{}}function $s(t,e){let s=Date.now();s-xe<5e3||(xe=s,He(t,e))}var ct=null;function zt(t=0){let e=[g,w];for(let s of e)try{let n=s?.getCurrentTime?.();if(Number.isFinite(n))return Math.max(0,Math.floor(n))}catch{}return Math.max(0,Math.floor(Number(t)||0))}function Ls(t,e=0,s={}){if(!t)return"";let n=Y(),a=new URLSearchParams,i=n.channel||d.channel;return i&&i!=="new"&&a.set("ch",i),a.set("v",t),s.includeTime!==!1&&e>5&&a.set("t",String(Math.floor(e))),`${location.origin}${location.pathname}?${a}`}function q(){let t=r("#stream-viewer"),s=t&&!t.hidden&&!F(t)&&t._currentStream?.url?T(t._currentStream.url):"",n=s?zt(Y().t):0;z({v:s||"",t:n>5?n:0},{replace:!0}),s&&He(t._currentStream,n),s&&!ct&&(ct=setInterval(q,5e3)),!s&&ct&&(clearInterval(ct),ct=null)}function Ss(){if(r("#sv-share-modal"))return;let t=document.createElement("div");t.id="sv-share-modal",t.hidden=!0,t.innerHTML=`
    <div class="sv-share-backdrop"></div>
    <div class="sv-share-dialog" role="dialog" aria-modal="true" aria-label="\u52D5\u753B\u3092\u5171\u6709">
      <div class="sv-share-head">
        <span class="sv-share-head-icon">\u2661</span>
        <span class="sv-share-head-title">\u3053\u306E\u6B4C\u67A0\u3092\u304A\u3059\u305D\u308F\u3051</span>
        <button class="sv-share-close" id="sv-share-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <div class="sv-share-charm" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="sv-share-video">
        <span class="sv-share-video-icon">\u266A</span>
        <span class="sv-share-video-title" id="sv-share-video-title"></span>
      </div>
      <label class="sv-share-ts" id="sv-share-ts-row">
        <input type="checkbox" id="sv-share-ts-check">
        <span class="sv-share-ts-toggle" aria-hidden="true"></span>
        <span class="sv-share-ts-text"><strong id="sv-share-ts-label">0:00</strong> \u304B\u3089\u8074\u3044\u3066\u3082\u3089\u3046</span>
      </label>
      <div class="sv-share-url-row">
        <input class="sv-share-url" id="sv-share-url" type="text" readonly aria-label="\u5171\u6709\u30EA\u30F3\u30AF">
        <button class="sv-share-copy" id="sv-share-copy" type="button">\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC</button>
      </div>
      <div class="sv-share-sns">
        <a class="sv-share-sns-btn sv-share-x" id="sv-share-x" href="#" target="_blank" rel="noopener">X\u306B\u306E\u305B\u308B</a>
        <a class="sv-share-sns-btn sv-share-line" id="sv-share-line" href="#" target="_blank" rel="noopener">LINE\u3067\u9001\u308B</a>
        <button class="sv-share-sns-btn sv-share-native" id="sv-share-native" type="button" hidden>\u307B\u304B\u306B\u3082\u5171\u6709</button>
      </div>
      <div class="sv-share-foot">\u597D\u304D\u306A\u3068\u3053\u308D\u304B\u3089\u3001\u305D\u3063\u3068\u5C4A\u3051\u3089\u308C\u307E\u3059</div>
    </div>`,document.body.appendChild(t);let e=()=>{t.hidden=!0};t.querySelector(".sv-share-backdrop").addEventListener("click",e),r("#sv-share-close").addEventListener("click",e),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&(a.preventDefault(),a.stopPropagation(),e())},{capture:!0});let s=()=>{let a=t._shareState;if(!a)return;let i=r("#sv-share-ts-check")?.checked&&a.t>0,l=Ls(a.id,a.t,{includeTime:i}),c=r("#sv-share-url");c&&(c.value=l);let o=a.title?`${a.title}`:"\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9",v=r("#sv-share-x");v&&(v.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(o)}&url=${encodeURIComponent(l)}`);let u=r("#sv-share-line");return u&&(u.href=`https://line.me/R/share?text=${encodeURIComponent(`${o}
${l}`)}`),l};r("#sv-share-ts-check").addEventListener("change",s),t._rebuild=s,r("#sv-share-url").addEventListener("focus",a=>a.target.select()),r("#sv-share-copy").addEventListener("click",async()=>{let a=r("#sv-share-url")?.value;if(!a)return;let i=!1;try{await navigator.clipboard.writeText(a),i=!0}catch{try{r("#sv-share-url").select(),i=document.execCommand("copy")}catch{}}let l=r("#sv-share-copy");l&&(l.textContent=i?"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",l.classList.add("copied"),setTimeout(()=>{l.textContent="\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",l.classList.remove("copied")},1600))});let n=r("#sv-share-native");navigator.share&&n&&(n.hidden=!1,n.addEventListener("click",async()=>{let a=t._shareState,i=r("#sv-share-url")?.value;if(i)try{await navigator.share({title:a?.title||"",url:i})}catch{}}))}function xs(){let e=r("#stream-viewer")?._currentStream;if(!e?.url)return;let s=T(e.url);if(!s)return;Ss();let n=r("#sv-share-modal"),a=zt(Y().t);n._shareState={id:s,t:a,title:e.title||""};let i=r("#sv-share-video-title");i&&(i.textContent=e.title||"(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)");let l=r("#sv-share-ts-row"),c=r("#sv-share-ts-check"),o=r("#sv-share-ts-label");l&&(l.hidden=a<=5),c&&(c.checked=a>5),o&&(o.textContent=R(a)),n._rebuild?.(),n.hidden=!1}var _e=new URLSearchParams(location.search).get("pl");async function _s(){if(!_e)return;let t=null;try{let n=_e.replace(/-/g,"+").replace(/_/g,"/"),a=Uint8Array.from(atob(n),i=>i.charCodeAt(0));t=JSON.parse(new TextDecoder().decode(a))}catch{return}if(!t||typeof t.n!="string"||!Array.isArray(t.s))return;let e=t.n.slice(0,60)||"\u5171\u6709\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8",s=t.s.filter(n=>typeof n=="string"&&n.length<100).slice(0,300);if(s.length){if(!confirm(`\u5171\u6709\u3055\u308C\u305F\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u300C${e}\u300D\uFF08${s.length}\u4EF6\uFF09\u3092\u53D6\u308A\u8FBC\u307F\u307E\u3059\u304B\uFF1F`)){z({},{replace:!0});return}try{let n=await import("./chunk-5GOOZP3X.js"),a=n.createPlaylist(e);for(let i of s)n.addStreamToPlaylist(a.id,i);z({tab:"playlists"},{replace:!0}),D("playlists",{updateUrl:!1})}catch{}}}async function Ts(){let t=Y();if(!t.v)return!1;let e=t.v,s=t.t;try{await Yt()}catch{}let n=[];d.channelData?.combined&&n.push(d.channelData.combined),Object.values(d.channelData?.channels||{}).forEach(a=>{a&&n.push(a)});for(let a of n){let i=(a.streams||[]).find(l=>T(l.url)===e);if(i)return S(i,s),!0}try{let l=((await(await fetch("data/music.json")).json())?.videos||[]).find(c=>T(c.url)===e);if(l)return S({url:l.url,title:l.title,isMv:!0},s),!0}catch{}return S({url:`https://www.youtube.com/watch?v=${e}`,title:"",isMv:!0},s),!0}function Mt(t,e=0,s=""){let n=T(t);if(!n)return;if(window.matchMedia("(max-width: 600px)").matches){window.open(String(t||""),"_blank","noopener");return}{let o=r("#stream-viewer");if(o&&!o.hidden&&!I)if(F(o))Ot();else{++N,o.hidden=!0,o._currentStream=null,g=null;let v=r("#sv-player-wrap");v&&(v.innerHTML=""),document.body.style.overflow="",M=null,Ct={},At(),q()}}Qt(),Gt();let a=r("#yt-player-container"),i=r("#yt-player-panel");if(!a||!i)return;gt();let l=r("#yt-mini-title");l&&(l.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let c=r("#yt-mini-hint");c&&(c.textContent=M?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),i.classList.toggle("has-stream",!!M),i.hidden=!1,Ue(()=>{let o=document.createElement("div");a.appendChild(o);try{w=new window.YT.Player(o,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:v=>{let u=Q();try{v.target.setVolume(u)}catch{}if(et(r("#yt-mini-vol-slider"),r("#yt-mini-vol-btn"),null,u),e>5)try{v.target.seekTo(e,!0)}catch{}Kt()},onStateChange:v=>{let u=v.data===window.YT.PlayerState.PLAYING,p=r("#yt-mini-play");p&&p.setAttribute("data-playing",u?"1":"0")}}})}catch{let u=e>0?`&start=${Math.floor(e)}`:"";a.innerHTML=`<iframe src="https://www.youtube.com/embed/${n}?autoplay=1&playsinline=1${u}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function Gt(){if(r("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),r("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,!Ot()&&(gt(),M=null)}),r("#yt-mini-play").addEventListener("click",()=>{if(w)try{w.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?w.pauseVideo():w.playVideo()}catch{}}),r("#yt-mini-restore").addEventListener("click",()=>{De()||M&&S(M,ys())}),r("#yt-mini-progress-bar").addEventListener("click",n=>{if(!w)return;let i=n.currentTarget.getBoundingClientRect(),l=Math.max(0,Math.min(1,(n.clientX-i.left)/i.width));try{let c=w.getDuration?.()||0;c>0&&w.seekTo(l*c,!0)}catch{}});let e=r("#yt-mini-vol-slider"),s=r("#yt-mini-vol-btn");if(e){let n=Q();e.value=n,e.style.setProperty("--pct",`${n}%`),s&&(s.textContent=pt(n)),e.addEventListener("input",a=>{let i=parseInt(a.target.value);if(a.target.style.setProperty("--pct",`${i}%`),Ut(i),s&&(s.textContent=pt(i)),w)try{w.setVolume(i)}catch{}})}if(s){let n=80;s.addEventListener("click",()=>{if(!e)return;let a=parseInt(e.value),i=a>0?0:n||80;a>0&&(n=a),et(e,s,w,i)})}}var Be=!1,Re=[];window.onYouTubeIframeAPIReady=()=>{Be=!0,Re.splice(0).forEach(t=>t()),import("./chunk-RV7JB4LR.js").then(t=>t.notifyYtReady()).catch(()=>{})};function Qt(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function Ue(t){if(Be&&window.YT?.Player){t();return}Re.push(t)}var Q=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),Ut=t=>localStorage.setItem("kanaVol",String(t)),pt=t=>t===0?"\u{1F507}":t<50?"\u{1F509}":"\u{1F50A}";function et(t,e,s,n){if(t&&(t.value=n,t.style.setProperty("--pct",`${n}%`)),e&&(e.textContent=pt(n)),s)try{s.setVolume(n)}catch{}}var g=null,N=0,M=null,mt=0,Jt=0,I=!1,wt="timeline",Ct={},A={},H=!1,B=!1,w=null,_t=null,Tt=null;function Wt(){wt=d.activeTab||"timeline",d.activeTab="player",P(".tab-btn").forEach(t=>t.classList.remove("active")),P(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player"))}function At(){let t=Ct;Ct={},D(wt||"timeline",t)}function Es(){I=!0;let t=r("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=r("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=r("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function R(t){let e=Math.floor(t),s=Math.floor(e/3600),n=Math.floor(e%3600/60),a=e%60;return s>0?`${s}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${n}:${String(a).padStart(2,"0")}`}function Ye(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function ft(t){try{return JSON.parse(localStorage.getItem(Ye(t))||"null")||{}}catch{return{}}}function Rt(t,e){try{localStorage.setItem(Ye(t),JSON.stringify(e))}catch{}}function Ms(t,e,s){let n=s[e],a=n!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${f(R(n))} \u306B\u79FB\u52D5">${f(R(n))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">\u2715</button>`:"",l=(A[e]||[]).map(v=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${v.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${f(R(v.timeSeconds))}">${f(R(v.timeSeconds))}</button>`).join(""),c=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,o=`<div class="sv-cts-row">${l}${c}</div>`;return`<div class="sv-song" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${f(t.title)}</span>
      <span class="sv-song-artist">${f(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${a}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">\u23F1 \u30E1\u30E2</button></div>
    ${o}
  </div>`}async function Cs(t){if(A={},!t?.channel||t?.index==null)return;try{let n=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,a=await fetch(n);if(!a.ok)return;let i=await a.json();for(let l of i.items||[])A[l.songIndex]||(A[l.songIndex]=[]),A[l.songIndex].push({timeSeconds:l.timeSeconds,note:l.note??null})}catch{}let e=r("#stream-viewer");if(!e||e._currentStream!==t)return;let s=r("#sv-setlist");s&&ut(s,t.songs,ft(t)),Is(t)}function Ps(t,e,s){r("#sv-cts-modal")?.remove();let n=g?.getCurrentTime?.()??0,a=R(Math.floor(n)),i=document.createElement("div");i.id="sv-cts-modal",i.className="sv-cts-modal-overlay",i.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
      <p class="sv-cts-modal-song">${f(s)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${f(a)}" placeholder="0:00" autocomplete="off">
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
  `,document.body.appendChild(i);let l=()=>i.remove();i.querySelector(".sv-cts-modal-close").addEventListener("click",l),i.querySelector(".sv-cts-modal-cancel").addEventListener("click",l),i.addEventListener("click",c=>{c.target===i&&l()}),i.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let c=i.querySelector("#sv-cts-ts-input").value.trim(),o=i.querySelector("#sv-cts-note-input").value.trim()||null,v=ee(c),u=i.querySelector("#sv-cts-status");if(v===null){u.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",u.className="sv-cts-modal-status error",u.hidden=!1;return}let p=i.querySelector("#sv-cts-submit");p.disabled=!0,p.textContent="\u9001\u4FE1\u4E2D\u2026";try{let m=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:v,submitterNote:o})});if(m.ok)u.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",u.className="sv-cts-modal-status success",u.hidden=!1,p.hidden=!0,i.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let h=await m.json().catch(()=>({}));u.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${h.error||m.statusText}`,u.className="sv-cts-modal-status error",u.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}catch(m){u.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${m.message}`,u.className="sv-cts-modal-status error",u.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>i.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function c(o){o.key==="Escape"&&(l(),document.removeEventListener("keydown",c))})}function Is(t){let e=r("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let n=Object.keys(A).length>=t.songs.length;e.textContent=n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function As(t){r("#sv-bulk-modal")?.remove();let e=ft(t),a=Object.keys(A).length>=t.songs.length,i=t.songs.map((o,v)=>{let u=e[v]!=null?R(e[v]):"",p=A[v]?.[0]?.timeSeconds!=null?R(A[v][0].timeSeconds):"",m=u||p;return`
      <div class="sv-bulk-row" data-idx="${v}">
        <span class="sv-bulk-num">${v+1}</span>
        <span class="sv-bulk-title" title="${f(o.title)}">${f(o.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${f(m)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${v}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${v}">\u23F1</button>
      </div>`}).join(""),l=document.createElement("div");l.id="sv-bulk-modal",l.className="sv-cts-modal-overlay",l.innerHTML=`
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="${a?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">${a?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}</span>
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
      <div class="sv-bulk-rows">${i}</div>
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
  `,document.body.appendChild(l);let c=()=>l.remove();l.querySelector(".sv-cts-modal-close").addEventListener("click",c),l.querySelector(".sv-cts-modal-cancel").addEventListener("click",c),l.addEventListener("click",o=>{o.target===l&&c()}),l.querySelector(".sv-paste-apply").addEventListener("click",()=>{let v=(l.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(m=>m.trim()).filter(Boolean),u=0;for(let m of v){let h=Ys(m);if(!h)continue;let y=js(h.title,h.artist,t.songs);if(y>=0){let b=l.querySelector(`[data-bulk-ts-idx="${y}"]`);b&&(b.value=h.start,u++)}}let p=l.querySelector(".sv-paste-result");p&&(p.textContent=u>0?`${v.length}\u884C\u3092\u89E3\u6790 \u2192 ${u}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",p.hidden=!1)}),l.querySelector(".sv-bulk-rows").addEventListener("click",o=>{let v=o.target.closest("[data-bulk-now]");if(!v)return;let u=parseInt(v.dataset.bulkNow,10),p=g?.getCurrentTime?.();if(p!=null){let m=l.querySelector(`[data-bulk-ts-idx="${u}"]`);m&&(m.value=R(Math.floor(p)))}}),l.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let o=l.querySelector("#sv-bulk-note").value.trim()||null,v=l.querySelector("#sv-bulk-status"),u=l.querySelector("#sv-bulk-submit"),p=[];if(l.querySelectorAll("[data-bulk-ts-idx]").forEach(y=>{let b=parseInt(y.dataset.bulkTsIdx,10),k=ee(y.value.trim());k!==null&&p.push({songIndex:b,timeSeconds:k})}),!p.length){v.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",v.className="sv-cts-modal-status error",v.hidden=!1;return}u.disabled=!0,u.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${p.length})`,v.hidden=!0;let m=0,h=0;await Promise.all(p.map(async y=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:y.songIndex,timeSeconds:y.timeSeconds,submitterNote:o})})).ok?m++:h++}catch{h++}u.textContent=`\u7533\u8ACB\u4E2D\u2026 (${m+h}/${p.length})`})),h===0?(v.textContent=`${m}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,v.className="sv-cts-modal-status success",u.hidden=!0,l.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(v.textContent=`${m}\u4EF6\u6210\u529F / ${h}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,v.className="sv-cts-modal-status error",u.disabled=!1,u.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),v.hidden=!1}),document.addEventListener("keydown",function o(v){v.key==="Escape"&&(c(),document.removeEventListener("keydown",o))})}function je(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function Ds(t){try{localStorage.setItem("kanau-playlists",JSON.stringify(t))}catch{}}function qs(t,e){let s=je(),n=s.find(a=>String(a.id)===String(t));return n?(n.streams||(n.streams=[]),n.streams.includes(e)||(n.streams.push(e),Ds(s)),!0):!1}var Xt="kanauViewerQueueCollapsed",$=null,ht=!1;function Pt(t){let e=$,s=e?.items?.[t];if(s){e.idx=t,ht=!0;try{s.kind==="mv"?S({url:s.video.url,title:s.video.title,isMv:!0}):S(s.stream)}finally{ht=!1}}}window.__playMyListInViewer=t=>{t?.items?.length&&($={name:t.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:t.items,idx:0,repeat:localStorage.getItem("kanauListRepeat")==="1",collapsed:localStorage.getItem(Xt)==="1"},Pt(Math.max(0,Math.min(t.idx||0,t.items.length-1))))};window.__openMusicQueueInViewer=(t,e=0,s=0)=>{if(!t?.length)return!1;let n=t.filter(i=>i?.url).map((i,l)=>i._stream?{kind:"stream",key:i._stream.url||`stream:${l}`,stream:i._stream}:{kind:"mv",key:`mv:${T(i.url)||l}`,video:{...i,isMv:!0}});if(!n.length)return!1;$={name:"\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u30AD\u30E5\u30FC",items:n,idx:Math.max(0,Math.min(e,n.length-1)),repeat:localStorage.getItem("kanauListRepeat")==="1",collapsed:localStorage.getItem(Xt)==="1"};let a=$.items[$.idx];ht=!0;try{a.kind==="mv"?S({...a.video,isMv:!0},s):S(a.stream,s)}finally{ht=!1}return!0};function Zt(){let t=$;if(!t?.items?.length)return"";let e=t.items[t.idx],s=e?.kind==="mv"?e.video?.title||"\u52D5\u753B":e?.stream?.title||"\u914D\u4FE1";return`
    <div class="sv-bp-section sv-queue-section${t.collapsed?" is-collapsed":""}">
      <div class="sv-bp-sh sv-queue-head">\u{1F4CB} ${f(t.name)}
        <span class="sv-bp-sh-sub">\uFF08${t.idx+1} / ${t.items.length}\uFF09</span>
        <span class="sv-queue-current">${f(s)}</span>
        <button class="sv-queue-toggle" type="button"
          data-svq-action="toggle" aria-expanded="${!t.collapsed}"
          title="${t.collapsed?"\u30AD\u30E5\u30FC\u3092\u958B\u304F":"\u30AD\u30E5\u30FC\u3092\u9589\u3058\u308B"}">${t.collapsed?"\u958B\u304F":"\u9589\u3058\u308B"}</button>
        <button class="sv-queue-repeat${t.repeat?" is-on":""}" type="button"
          data-svq-action="repeat" aria-pressed="${t.repeat}"
          title="\u30EA\u30B9\u30C8\u30EA\u30D4\u30FC\u30C8\uFF08ON: \u6700\u5F8C\u307E\u3067\u518D\u751F\u3057\u305F\u3089\u5148\u982D\u3078\u623B\u308B\uFF09">\u{1F501} \u30EA\u30D4\u30FC\u30C8</button>
      </div>
      <div class="sv-queue-list">
        ${t.items.map((n,a)=>{let i=n.kind==="mv"?n.video?.title||"\u52D5\u753B":n.stream?.title||"\u914D\u4FE1",l=n.kind==="mv"?"\u{1F3AC} \u52D5\u753B":`\u{1F4C5} ${E(n.stream?.date)}\u3000\u7B2C${n.stream?.index}\u67A0`;return`<button class="sv-queue-row${a===t.idx?" is-current":""}" type="button"
            data-svq-action="jump" data-svq-idx="${a}">
            <span class="sv-queue-num">${a+1}</span>
            <span class="sv-queue-title">${f(i)}</span>
            <span class="sv-queue-meta">${f(l)}</span>
          </button>`}).join("")}
      </div>
    </div>`}function Fe(t){let e=t.target.closest("[data-svq-action]");if(!e||!$)return!1;if(e.dataset.svqAction==="jump"){let s=parseInt(e.dataset.svqIdx,10);return!Number.isNaN(s)&&s!==$.idx&&Pt(s),!0}if(e.dataset.svqAction==="repeat"){$.repeat=!$.repeat;try{localStorage.setItem("kanauListRepeat",$.repeat?"1":"0")}catch{}return e.classList.toggle("is-on",$.repeat),e.setAttribute("aria-pressed",String($.repeat)),!0}if(e.dataset.svqAction==="toggle"){$.collapsed=!$.collapsed;try{localStorage.setItem(Xt,$.collapsed?"1":"0")}catch{}let s=e.closest(".sv-queue-section");return s&&(s.outerHTML=Zt()),te(r("#sv-below-player")),!0}return!1}function te(t){if($?.collapsed)return;let e=t?.querySelector?.(".sv-queue-list"),s=e?.querySelector(".sv-queue-row.is-current");e&&s&&(e.scrollTop=Math.max(0,s.offsetTop-e.clientHeight/2))}function Vs(){let t=d.data?.streams||[],s=r("#stream-viewer")?._currentStream;if(!s)return;let n=t.findIndex(a=>a.channel===s.channel&&a.index===s.index);n<0||n>=t.length-1||S(t[n+1])}async function Ns(t){let e=await Oe(),s=T(t?.url);if(!s||!e.length)return;let n=e.findIndex(i=>T(i.url)===s);if(n<0||n>=e.length-1)return;let a=e[n+1];S({...a,isMv:!0})}function Ke(t){if(!t||F(t))return;let e=g||w;if(B&&e){try{e.seekTo(0,!0),e.playVideo()}catch{}return}if($?.items?.length){let n=$;n.idx<n.items.length-1?Pt(n.idx+1):n.repeat&&Pt(0);return}if(!H)return;let s=t._currentStream;s?.isMv?Ns(s):Vs()}function st(){Tt&&(clearInterval(Tt),Tt=null)}function Hs(t,e){st();let s=!1;Tt=setInterval(()=>{if(t!==N||e.hidden||!g){st();return}try{let n=g.getPlayerState?.();n===window.YT?.PlayerState?.ENDED?(s||Ke(e),s=!0):n===window.YT?.PlayerState?.PLAYING&&(s=!1)}catch{}},700)}function Te(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${f(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=vt(t.url),n=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${f(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${f(n)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${f(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${f(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${E(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function Bs(t){let e=r("#sv-below-player");if(!e)return;let s=d.data?.streams||[],n=s.findIndex(u=>u.channel===t.channel&&u.index===t.index),a=n>=0&&n<s.length-1?s[n+1]:null,i=n>0?s[n-1]:null,l=new Set(t.songs.map(u=>u.title)),c=s.filter((u,p)=>p!==n).map(u=>{let p=u.songs.filter(m=>l.has(m.title));return{stream:u,overlap:p.length,sharedSongs:p.slice(0,3).map(m=>m.title)}}).filter(u=>u.overlap>0).sort((u,p)=>p.overlap-u.overlap).slice(0,8),o=je(),v=W(t);e.innerHTML=`
    <div class="sv-bp-wrap">
      ${Zt()}

      <!-- \u9023\u7D9A\u518D\u751F + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${H?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${H?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${B?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${B?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          ${a?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${f(a.title||"\u6B21\u306E\u914D\u4FE1")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u914D\u4FE1\uFF09</span>'}
        </div>
        <div class="sv-bp-nav-cards">
          ${Te(a,"older")}
          ${Te(i,"newer")}
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
            <span class="sv-bp-stat-val">${E(t.date)}</span>
            <span class="sv-bp-stat-label">\u914D\u4FE1\u65E5</span>
          </div>
        </div>
      </div>

      <!-- \u95A2\u9023\u914D\u4FE1 -->
      ${c.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u95A2\u9023\u914D\u4FE1 <span class="sv-bp-sh-sub">\uFF08\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${c.map(u=>{let p=vt(u.stream.url);return`<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${f(u.stream.channel)}" data-bp-index="${u.stream.index}">
              ${p?`<img class="sv-bp-rel-thumb" src="${f(p)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${f(u.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${E(u.stream.date)}</div>
                <div class="sv-bp-rel-songs">${u.sharedSongs.map(m=>f(m)).join("\u3001")}</div>
              </div>
              <div class="sv-bp-rel-badge">${u.overlap}\u66F2</div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      <!-- \u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0 -->
      ${o.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3078\u8FFD\u52A0</div>
        <div class="sv-bp-pl-list" id="sv-bp-pl-list">
          ${o.map(u=>{let p=(u.streams||[]).includes(v);return`<button class="sv-bp-pl-btn${p?" sv-bp-pl-btn--added":""}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${f(String(u.id))}"${p?" disabled":""}>
              <span class="sv-bp-pl-name">${f(u.name||"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8")}</span>
              <span class="sv-bp-pl-status">${p?"\u2713 \u767B\u9332\u6E08\u307F":"\uFF0B \u8FFD\u52A0"}</span>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

    </div>
  `,e.onchange=u=>{let p=u.target.closest("#sv-ap-check"),m=u.target.closest("#sv-repeat-check");if(p){H=p.checked;let h=p.closest(".sv-bp-ap-switch");h&&h.classList.toggle("sv-bp-ap-switch--on",H)}if(m){B=m.checked;let h=m.closest(".sv-bp-ap-switch");h&&h.classList.toggle("sv-bp-ap-switch--on",B)}},e.onclick=u=>{if(Fe(u))return;let p=u.target.closest("[data-bp-action]");if(!p)return;let m=p.dataset.bpAction;if(m==="open-stream"){let h=p.dataset.bpChannel,y=parseInt(p.dataset.bpIndex,10),b=(d.data?.streams||[]).find(k=>k.channel===h&&k.index===y);b&&S(b)}else if(m==="add-pl"){let h=p.dataset.bpPlId;if(qs(h,v)){p.classList.add("sv-bp-pl-btn--added"),p.disabled=!0;let y=p.querySelector(".sv-bp-pl-status");y&&(y.textContent="\u2713 \u767B\u9332\u6E08\u307F")}}},te(e)}var dt=null;async function Oe(){if(dt)return dt;try{dt=(await(await fetch("data/music.json")).json())?.videos||[]}catch{dt=[]}return dt}function Rs(t){let e=String(t||"");return e=e.replace(/【[^】]*】/g," "),e=e.replace(/^\s*MV[⌇|｜♪♬:：\-\s]*/i," "),e=e.split(/[\/／|｜]/)[0],e=e.replace(/歌ってみた|covered?\s*(by.*)?$/gi," "),e.trim()}async function Us(t){let e=r("#sv-below-player");if(!e)return;try{await Yt()}catch{}let s=await Oe();if(r("#stream-viewer")?._currentStream!==t)return;let n=d.channelData?.combined?.streams||d.data?.streams||[],a=Z(Rs(t.title)),i=[];if(a.length>1)for(let m of n){let h=(m.songs||[]).find(y=>{let b=Z(y.title);return b===a||b.length>1&&(b.includes(a)||a.includes(b))});h&&i.push({stream:m,songTitle:h.title})}let l=i.slice(0,8),c={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9\u30BD\u30F3",cover:"\u30AB\u30D0\u30FC"},o=s.find(m=>m.url===t.url),v=s.filter(m=>m.url!==t.url).sort((m,h)=>{let y=o&&m.type===o.type?1:0,b=o&&h.type===o.type?1:0;return y!==b?b-y:(h.publishedAt||"").localeCompare(m.publishedAt||"")}).slice(0,12),u=s.findIndex(m=>T(m.url)===T(t.url)),p=u>=0&&u<s.length-1?s[u+1]:null;e.innerHTML=`
    <div class="sv-bp-wrap">
      ${Zt()}
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${H?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${H?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${B?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${B?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          ${p?`<span class="sv-bp-ap-hint">\u6B21\uFF1A${f(p.title||"\u6B21\u306E\u52D5\u753B")}</span>`:'<span class="sv-bp-ap-hint sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u52D5\u753B\uFF09</span>'}
        </div>
      </div>
      ${l.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u{1F3A4} \u3053\u306E\u66F2\u304C\u6B4C\u308F\u308C\u305F\u6B4C\u67A0 <span class="sv-bp-sh-sub">\uFF08\u5168${i.length}\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${l.map(m=>{let h=vt(m.stream.url);return`<button class="sv-bp-rel-card" type="button" data-mv-action="open-stream" data-mv-channel="${f(m.stream.channel)}" data-mv-index="${m.stream.index}">
              ${h?`<img class="sv-bp-rel-thumb" src="${f(h)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${f(m.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${E(m.stream.date)}\u3000\u7B2C${m.stream.index}\u67A0</div>
                <div class="sv-bp-rel-songs">\u{1F3B5} ${f(m.songTitle)}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      ${v.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">\u{1F3AC} \u307B\u304B\u306E\u52D5\u753B <button class="sv-mv-all-btn" type="button" data-mv-action="all-videos">\u3059\u3079\u3066\u898B\u308B \u2192</button></div>
        <div class="sv-mv-grid">
          ${v.map(m=>{let h=vt(m.url);return`<button class="sv-mv-card" type="button" data-mv-action="open-mv" data-mv-url="${f(m.url)}" data-mv-title="${f(m.title)}">
              ${h?`<img class="sv-mv-card-thumb" src="${f(h)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-mv-card-thumb"></div>'}
              <div class="sv-mv-card-body">
                <div class="sv-mv-card-title">${f(m.title)}</div>
                <div class="sv-mv-card-type">${c[m.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB"}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}
    </div>
  `,e.onchange=m=>{let h=m.target.closest("#sv-ap-check"),y=m.target.closest("#sv-repeat-check");if(h){H=h.checked;let b=h.closest(".sv-bp-ap-switch");b&&b.classList.toggle("sv-bp-ap-switch--on",H)}if(y){B=y.checked;let b=y.closest(".sv-bp-ap-switch");b&&b.classList.toggle("sv-bp-ap-switch--on",B)}},e.onclick=m=>{if(Fe(m))return;let h=m.target.closest("[data-mv-action]");if(!h)return;let y=h.dataset.mvAction;if(y==="open-stream"){let b=h.dataset.mvChannel,k=parseInt(h.dataset.mvIndex,10),C=(d.channelData?.combined?.streams||d.data?.streams||[]).find(U=>U.channel===b&&U.index===k);C&&S(C)}else y==="open-mv"?S({url:h.dataset.mvUrl,title:h.dataset.mvTitle,isMv:!0}):y==="all-videos"&&D("playlists")},te(e)}function ut(t,e,s){t.innerHTML=e.map((n,a)=>Ms(n,a,s)).join("")}function ee(t){let e=t.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Ys(t){let e=t.match(/^(\d{1,2}:\d{2}(?::\d{2})?)[\s　]+(.+?)\s*\/\s*(.+?)[\s　]+(\d{1,2}:\d{2}(?::\d{2})?)$/);return e?{start:e[1].trim(),title:e[2].trim(),artist:e[3].trim(),end:e[4].trim()}:null}function Z(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function js(t,e,s){let n=Z(t),a=Z(e),i=-1,l=0;for(let c=0;c<s.length;c++){let o=Z(s[c].title),v=Z(s[c].artist),u=0;o===n?u+=80:n.length>1&&(o.includes(n)||n.includes(o))&&(u+=40),a&&v===a?u+=20:a&&a.length>1&&(v.includes(a)||a.includes(v))&&(u+=10),u>l&&(l=u,i=c)}return l>=40?i:-1}function ze(){if(r("#stream-viewer"))return;let t=r("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
        <button class="sv-music-btn" id="sv-music-btn" type="button" title="\u73FE\u5728\u4F4D\u7F6E\u304B\u3089\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u8074\u304F">\u{1F3B5} \u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u8074\u304F</button>
        <button class="sv-share-btn" id="sv-share-btn" type="button" title="\u3053\u306E\u52D5\u753B\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">\u{1F517} \u5171\u6709</button>
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
  `,t.appendChild(e),r("#sv-close").addEventListener("click",()=>bt()),r("#sv-share-btn").addEventListener("click",xs),r("#sv-music-btn").addEventListener("click",ws),r("#sv-fullscreen-btn").addEventListener("click",Es);let s=r("#sv-vol-slider"),n=r("#sv-vol-btn");if(s){let a=Q();s.value=a,s.style.setProperty("--pct",`${a}%`),n&&(n.textContent=pt(a)),s.addEventListener("input",i=>{let l=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${l}%`),Ut(l),n&&(n.textContent=pt(l)),g)try{g.setVolume(l)}catch{}})}if(n){let a=80;n.addEventListener("click",()=>{if(!s)return;let i=parseInt(s.value),l=i>0?0:a||80;i>0&&(a=i),et(s,n,g,l),Ut(l)})}e.querySelectorAll("[data-bc-tab]").forEach(a=>{a.addEventListener("click",()=>{wt=a.dataset.bcTab,bt()})}),r("#sv-import-toggle").addEventListener("click",()=>{let a=r("#sv-import-area");a&&(a.hidden=!a.hidden,a.hidden||r("#sv-import-input")?.focus())}),r("#sv-import-cancel").addEventListener("click",()=>{let a=r("#sv-import-area");a&&(a.hidden=!0);let i=r("#sv-import-input");i&&(i.value="")}),r("#sv-import-apply").addEventListener("click",()=>{let a=e._currentStream;if(!a)return;let i=r("#sv-import-input");if(!i)return;let c=i.value.split(`
`).map(u=>ee(u)).filter(u=>u!==null);if(!c.length)return;let o=ft(a);c.forEach((u,p)=>{p<a.songs.length&&(o[p]=u)}),Rt(a,o),ut(r("#sv-setlist"),a.songs,o);let v=r("#sv-import-area");v&&(v.hidden=!0),i.value=""}),r("#sv-cts-bulk-btn").addEventListener("click",()=>{let a=e._currentStream;a&&As(a)}),r("#sv-setlist").addEventListener("click",a=>{let i=a.target.closest("[data-action]");if(!i)return;let l=parseInt(i.dataset.idx,10),c=e._currentStream;if(!c)return;let o=ft(c);if(i.dataset.action==="seek"){if(o[l]!=null&&g?.seekTo){g.seekTo(o[l],!0);try{g.playVideo()}catch{}}}else if(i.dataset.action==="set-ts"){let v=g?.getCurrentTime?.();v!=null&&(o[l]=Math.floor(v),Rt(c,o),ut(r("#sv-setlist"),c.songs,o))}else if(i.dataset.action==="del-ts")delete o[l],Rt(c,o),ut(r("#sv-setlist"),c.songs,o);else if(i.dataset.action==="cts-seek"){let v=Number(i.dataset.ctsSeconds);if(!isNaN(v)&&g?.seekTo){g.seekTo(v,!0);try{g.playVideo()}catch{}}}else if(i.dataset.action==="cts-propose"){let v=c.songs[l];Ps(c,l,v?.title||`\u66F2 ${l+1}`)}})}function S(t,e=0){if(!t?.url)return;let s=T(t.url);if(!s){Mt(t.url);return}ze(),Qt(),st(),ht||($=null);let n=r("#stream-viewer");if(F(n)){if(n._currentStream?.url===t.url){if(!De()&&!window.__restoreMusicExternalPlayer?.()&&qe(),e>0)try{g?.seekTo(Math.floor(e),!0),g?.playVideo()}catch{}return}Ot()}let a=window.__takeOverMusicPlayerVideo?.(t.url)||null;a||import("./chunk-RV7JB4LR.js").then(b=>(b.releaseMusicPlayerVideo||b.pauseMusicPlayer)()).catch(()=>{});let i=r("#yt-player-panel");if(i&&!i.hidden){try{w?.pauseVideo()}catch{}i.hidden=!0,gt()}if(M=null,I){I=!1;let b=r("#stream-viewer");b&&b.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}I=!1,Wt();let l=r("#stream-viewer");l.classList.remove("sv-fullscreen"),l.classList.toggle("sv-mv-mode",!!t.isMv),l._currentStream=t;let c=++N,o=l.querySelectorAll("[data-bc-tab]");o[1]&&(t.isMv?(o[1].dataset.bcTab="playlists",o[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(o[1].dataset.bcTab="timeline",o[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let v=r("#sv-bc-title");v&&(v.textContent=t.title||"\u914D\u4FE1");let u=r("#sv-stream-meta");u&&(u.textContent=t.isMv?"":`${E(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000\u{1F3A4} ${t.songs.length}\u66F2`);let p=r("#sv-yt-link");p&&(p.href=t.url);let m=r("#sv-song-count");if(m&&(m.textContent=t.isMv?"":`${t.songs.length}\u66F2`),A={},t.isMv){let b=r("#sv-setlist");b&&(b.innerHTML="");let k=r("#sv-below-player");k&&(k.innerHTML=""),Us(t)}else{let b=ft(t);ut(r("#sv-setlist"),t.songs,b),Cs(t),Bs(t)}l.hidden=!1,document.body.style.overflow="",q(),setTimeout(()=>{r("#sv-close")?.focus({preventScroll:!0})},50),g=null;let h=r("#sv-player-wrap");h.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let y=Math.floor(e||a?.currentTime||0);if(a?.player){h.innerHTML="",a.iframe?(a.iframe.style.width="100%",a.iframe.style.height="100%",h.appendChild(a.iframe)):h.innerHTML='<div class="sv-player-loading">\u518D\u751F\u3092\u5F15\u304D\u7D99\u304E\u307E\u3057\u305F</div>',g=a.player;try{g.setVolume?.(Q()),y>1&&g.seekTo?.(y,!0),g.playVideo?.()}catch{}et(r("#sv-vol-slider"),r("#sv-vol-btn"),null,Q()),Hs(c,l);return}Ue(()=>{if(c!==N||l.hidden)return;h.innerHTML="";let b=document.createElement("div");h.appendChild(b);try{g=new window.YT.Player(b,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,modestbranding:1,...y>0?{start:y}:{}},events:{onReady:k=>{let K=Q();try{k.target.setVolume(K)}catch{}et(r("#sv-vol-slider"),r("#sv-vol-btn"),null,K);try{k.target.setPlaybackQuality("hd1080")}catch{}try{k.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(y>5)try{k.target.seekTo(y,!0)}catch{}},onStateChange:k=>{if(c===N){if(k.data===window.YT.PlayerState.PLAYING)try{k.target.setPlaybackQuality("hd1080")}catch{}k.data===window.YT.PlayerState.ENDED&&Ke(l)}},onError:()=>{c===N&&(h.innerHTML=`<iframe src="https://www.youtube.com/embed/${f(s)}?autoplay=1&playsinline=1&rel=0${y>0?`&start=${y}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{h.innerHTML=`<iframe src="https://www.youtube.com/embed/${f(s)}?autoplay=1&playsinline=1&rel=0${y>0?`&start=${y}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function bt(){let t=r("#stream-viewer");if(!t||t.hidden||F(t))return;if(I){I=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let s=r("#sv-close");s&&(s.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let n=r("#sv-fullscreen-btn");n&&n.setAttribute("aria-pressed","false");return}if(gs())return;++N,t.hidden=!0,t._currentStream=null,st(),g=null;let e=r("#sv-player-wrap");e&&(e.innerHTML=""),document.body.style.overflow="",At(),q()}window.__openStreamViewer=S;function Fs(t){let e=t.streamRefs||[];if(e.length<=1)return"";let s=new Map;for(let x of e){if(!x.date)continue;let nt=x.date instanceof Date?x.date:new Date(x.date);if(isNaN(nt))continue;let at=`${nt.getFullYear()}-${String(nt.getMonth()+1).padStart(2,"0")}`;s.set(at,(s.get(at)||0)+1)}if(!s.size)return"";let n=[...s.keys()].sort(),a=n[n.length-1],[i,l]=a.split("-").map(Number),c=new Date(i,l-19,1),o=n[0],[v,u]=o.split("-").map(Number),p=new Date(v,u-1,1)<c?c:new Date(v,u-1,1),m=`${p.getFullYear()}-${String(p.getMonth()+1).padStart(2,"0")}`,h=[],y=new Date(p),b=new Date(i,l-1,1);for(;y<=b;){let x=`${y.getFullYear()}-${String(y.getMonth()+1).padStart(2,"0")}`;h.push({k:x,count:s.get(x)||0}),y=new Date(y.getFullYear(),y.getMonth()+1,1)}if(h.length<2)return"";let k=Math.max(1,...h.map(x=>x.count)),K=300,C=40,U=Math.max(3,Math.floor(K/h.length)-1),ne=Math.max(1,Math.floor(K/h.length)-U),Qe=h.length*(U+ne),Je=h.map((x,nt)=>{let at=x.count>0?Math.max(4,Math.round(x.count/k*(C-4))):0,ae=nt*(U+ne),We=C-at,Xe=x.count>0?1:0,ie=`${x.k} (${x.count}\u56DE)`;return x.count>0?`<rect x="${ae}" y="${We}" width="${U}" height="${at}" fill="var(--primary)" opacity="${Xe}" rx="1"><title>${f(ie)}</title></rect>`:`<rect x="${ae}" y="${C-2}" width="${U}" height="2" fill="var(--border)" opacity="0.5" rx="1"><title>${f(ie)}</title></rect>`}).join("");return`
    <div class="song-detail-spark">
      <svg class="song-detail-spark-svg" viewBox="0 0 ${Qe} ${C}" xmlns="http://www.w3.org/2000/svg" aria-label="\u6B4C\u5531\u5C65\u6B74\u30B9\u30D1\u30FC\u30AF\u30E9\u30A4\u30F3 (${h.length}\u30F6\u6708\u5206)" role="img">
        ${Je}
      </svg>
      <div class="song-detail-spark-label">${f(h[0].k.replace("-","/"))} \u301C ${f(h[h.length-1].k.replace("-","/"))}</div>
    </div>
  `}function Ge(t){let e=xt(t),s=r("#song-modal"),n=r("#song-modal-body"),a=r("#song-modal-title");if(!e||!s||!n||!a)return;ce(e),a.textContent=e.title;let i=(e.streamRefs||[]).slice(0,8).map(o=>({...o,thumbnail:vt(o.url),thumbnailFallback:hs(o.url),thumbnailTiny:bs(o.url),detailKey:W(o)})),l=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),c=Dt(e.key);n.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${f(e.key)}">${f(e.artist)}</button>
        <div class="song-detail-tags">${l.map(o=>`<span class="tag-badge">${f(o)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.displayKey||"\u2014"}</strong><span>\u30AD\u30FC</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${E(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${c?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${f(e.key)}">${c?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${f(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${Fs(e)}
      ${i.length?i.map(o=>`
        <div class="song-detail-stream">
          ${o.thumbnail&&o.url?`<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${f(o.url)}" aria-label="\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F"><img class="song-detail-thumb" src="${f(o.thumbnail)}" data-fallback="${f(o.thumbnailFallback)}" data-tiny="${f(o.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>\u518D\u751F</span></button><a class="song-detail-youtube-link" href="${f(o.url)}" target="_blank" rel="noopener">\u958B\u304F</a></span>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${f(e.key)}" data-streamkey="${f(o.detailKey)}">
            <span>${E(o.date)}</span>
            <strong>${f(o.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,s.hidden=!1,r("#song-modal-close")?.focus()}function Ks(){let t=r("#song-modal"),e=r("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s();let a=n.target.closest("[data-inline-youtube]");if(a){n.preventDefault(),n.stopPropagation(),Mt(a.dataset.inlineYoutube);return}let i=n.target.closest("[data-detail-action]");if(i){if(n.stopPropagation(),i.dataset.detailAction==="close"&&s(),i.dataset.detailAction==="favorite"){let l=i.dataset.songkey;le(l);let c=Dt(l);i.textContent=c?"\u2665 \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u2661 \u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",i.classList.toggle("primary",c),i.classList.toggle("ghost",!c)}if(i.dataset.detailAction==="timeline"){let l=xt(i.dataset.songkey);s(),l&&ps(l)}if(i.dataset.detailAction==="stream"){let l=xt(i.dataset.songkey),c=l?.streamRefs?.find(o=>W(o)===i.dataset.streamkey);s(),l&&c&&ms(l,c)}if(i.dataset.detailAction==="artist"){let l=xt(i.dataset.songkey);s(),l&&fs(l)}}}),t.addEventListener("error",n=>{let a=n.target.closest?.(".song-detail-thumb");if(!a)return;let i=a.dataset.fallback||a.dataset.tiny||"";if(i&&a.src!==i){a.src=i,a.dataset.fallback===i?delete a.dataset.fallback:delete a.dataset.tiny;return}a.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&s()})}var Ee=!1;function Os(){if(!d.data)return;let{stats:t,streams:e=[]}=d.data,s=e[0]?.date||null,n=qt(s),a=t.dataGeneratedDate||d.channelData?.dataGeneratedDate||null,i=qt(a),l=t.channelLabel||t.channelId||"",c=l?`<span class="badge accent" style="margin-right:8px;">${f(l)}</span>`:"";r("#updated-info").innerHTML=c+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${E(a)||"\u2014"}</strong>`+(i!=null?` <span class="badge">${i}\u65E5\u524D</span>`:"");let o=r("#stats-grid");if(!Ee)o.innerHTML=`
      <div class="stat-card">
        <div class="stat-label">\u7DCF\u6B4C\u5531\u6570</div>
        <div class="stat-value">${O(t.total)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6301\u3061\u66F2\u6570</div>
        <div class="stat-value">${O(t.repertoire)}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\u6B4C\u67A0\u56DE\u6570</div>
        <div class="stat-value">${O(t.streams)}<span class="stat-unit">\u56DE</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">1\u67A0\u5E73\u5747</div>
        <div class="stat-value">${t.avgPerStream}<span class="stat-unit">\u66F2</span></div>
      </div>
      <div class="stat-card accent">
        <div class="stat-label">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</div>
        <div class="stat-value">${n??"\u2014"}<span class="stat-unit">\u65E5</span></div>
      </div>
      <div class="stat-card gold">
        <div class="stat-label">\u6D3B\u52D5\u671F\u9593</div>
        <div class="stat-value">${Me(d.data)}<span class="stat-unit">\u65E5</span></div>
      </div>
    `,Ee=!0;else{let v=o.querySelectorAll(".stat-value");v.length>=6&&(v[0].textContent=O(t.total),v[0].innerHTML+='<span class="stat-unit">\u56DE</span>',v[1].textContent=O(t.repertoire),v[1].innerHTML+='<span class="stat-unit">\u66F2</span>',v[2].textContent=O(t.streams),v[2].innerHTML+='<span class="stat-unit">\u56DE</span>',v[3].textContent=t.avgPerStream,v[3].innerHTML+='<span class="stat-unit">\u66F2</span>',v[4].textContent=n??"\u2014",v[4].innerHTML+='<span class="stat-unit">\u65E5</span>',v[5].textContent=Me(d.data),v[5].innerHTML+='<span class="stat-unit">\u65E5</span>')}}function Me(t){if(!t.streams?.length)return"\u2014";let e=t.streams[t.streams.length-1].date,s=t.streams[0].date;return Math.floor((s-e)/864e5)+1}function zs(){r("#loading").hidden=!1,r("#error").hidden=!0}function Gs(){r("#loading").hidden=!0}function Qs(t){let e=r("#loading"),s=r("#error"),n=r("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),n&&(n.textContent=t&&t.message?t.message:String(t))}function Js(t){let e=document.getElementById("page-title");if(!e)return;t==="new"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65B0ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):t==="old"?(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u65E7ch \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"):(e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9");let s=document.getElementById("hero-ch-bg");s&&(s.dataset.mode=t||"all")}var Ws={new:{name:"\u5922\u5DDD\u304B\u306A\u3046 - Kanau Yumekawa",handle:"@YumekawaKanau",url:"https://www.youtube.com/@YumekawaKanau",label:"\u65B0ch",desc:`Re:AcT\u6240\u5C5E\u306E\u6D77\u306E\u304A\u59EB\u3055\u307E\u306B\u306A\u308A\u305F\u3044\u3001\u6CE1\u6CAB\u305F\u3086\u305F\u3046Vsinger \u{1F41F}
\u5922\u5DDD\u304B\u306A\u3046\u3058\u3083\u3088\u3001\u3061\u3087\u3063\u3068\u4F11\u61A9\u3057\u3066\u3044\u3053\u301C
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7\u4E00\u9B5A\u5EA7 \uFF0F \u661F\u8A00\u8449\u306F\u300C\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u80FD\u300D`,links:[{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"},{icon:"\u{1F6CD}",label:"official store",url:"https://react.booth.pm"},{icon:"\u{1F310}",label:"official site",url:"https://v-react.com"},{icon:"\u{1F3B5}",label:"Apple Music",url:"https://music.apple.com/jp/artist/1614216914"},{icon:"\u{1F3A7}",label:"Spotify",url:"https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ"}],avatarUrl:"https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo",bannerUrl:"https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},old:{name:"\u5922\u5DDD\u304B\u306A\u3046 / Kanau ch",handle:"@Kanau_Yumekawa",url:"https://www.youtube.com/@Kanau_Yumekawa",label:"\u65E7ch",desc:`\u{1F41F}\u59EB\u306B\u306A\u308A\u305F\u3044\u30A2\u30A4\u30C9\u30EBVtuber\u5922\u5DDD\u304B\u306A\u3046 \u{1F41F}
\u30A4\u30E1\u30FC\u30B8\u661F\u5EA7:\u3046\u304A\u5EA7 \uFF0F \u661F\u8A00\u8449\u300A\u9B45\u529B\u3042\u3075\u308C\u308B\u82B8\u8853\u7684\u624D\u80FD\u300B
\u6B32\u3057\u3044\u8A00\u8449\u3092\u6B32\u3057\u3044\u58F0\u3067\u5C4A\u3051\u307E\u3059*.+\u309C
\u548C\u83D3\u5B50\u304C\u5927\u597D\u7269\u306A\u3093\u3058\u3083\u3042\u301C( \u02D9\u02D9 ) \u548C\u83D3\u5B50\u60C5\u5831\u3084\u304A\u3059\u3059\u3081\u30B2\u30FC\u30E0\u306A\u3069\u4F55\u304B\u3042\u308C\u3070
#\u5922\u5DDD\u805E\u3044\u3066 \u3092\u6C17\u8EFD\u306B\u4F7F\u3063\u3066\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\uFF01\u4F55\u3067\u3082\u826F\u3044\u305E\uFF01@Re:AcT\u6240\u5C5E`,links:[{icon:"\u25B6",label:"\u65B0\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3053\u3061\u3089",url:"https://www.youtube.com/@YumekawaKanau"},{icon:"\u{1D54F}",label:"X (Twitter)",url:"https://twitter.com/Kanau_Yumekawa"}],avatarUrl:"https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function St(t){let e=Ws[t];if(!e)return"";let s=e.bannerUrl?`<img class="ch-card-banner-img" src="${f(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${f(e.label)}</span>`:`<span class="ch-card-banner-label">${f(e.label)}</span>`,n=e.avatarUrl?`<img class="ch-card-avatar-img" src="${f(e.avatarUrl)}" alt="${f(e.name)}" loading="lazy" referrerpolicy="no-referrer">`:t==="new"?"\u65B0":"\u65E7",a=e.desc?`<p class="ch-card-desc">${e.desc.split(`
`).map(l=>f(l)).join("<br>")}</p>`:"",i=e.links?.length?`
    <div class="ch-card-links">
      ${e.links.map(l=>`
        <a class="ch-card-link" href="${f(l.url)}" target="_blank" rel="noopener">
          <span class="ch-card-link-icon" aria-hidden="true">${l.icon}</span>
          <span>${f(l.label)}</span>
        </a>`).join("")}
    </div>`:"";return`
    <div class="ch-card ch-card--${t}">
      <div class="ch-card-banner ch-card-banner--${t}${e.bannerUrl?" ch-card-banner--img":""}">
        ${s}
      </div>
      <div class="ch-card-body">
        <div class="ch-card-header">
          <div class="ch-card-avatar ch-card-avatar--${t}${e.avatarUrl?" ch-card-avatar--img":""}">${n}</div>
          <div class="ch-card-meta">
            <div class="ch-card-name">${f(e.name)}</div>
            <div class="ch-card-handle">${f(e.handle)}</div>
          </div>
        </div>
        ${a}
        ${i}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${f(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u3078
          </a>
        </div>
      </div>
    </div>`}function Xs(t){let e=r("#ch-modal"),s=r("#ch-modal-body");if(!e||!s)return;let n="";t==="new"?n=St("new"):t==="old"?n=St("old"):n=St("new")+St("old"),s.innerHTML=n,e.hidden=!1,r("#ch-modal-close")?.focus()}function Zs(){let t=r("#ch-modal"),e=r("#ch-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s()}),document.querySelectorAll("[data-ch-modal]").forEach(n=>{n.addEventListener("click",()=>Xs(n.dataset.chModal))})}function tn(){let t=r("#help-modal"),e=r("#help-btn"),s=r("#help-close");if(!t||!e||!s)return;let n=()=>{t.hidden=!1,s.focus()},a=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",n),s.addEventListener("click",a),t.addEventListener("click",i=>{i.target===t&&a()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&a()})}function en(){let t=r("#welcome-tip"),e=r("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("kanau-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("kanau-welcome-tip-dismissed","1")})}async function se(){zs();try{let t=await ue();d.channelData=t,!tt&&!t.fullLoaded&&Ie();let e=Y(),s=!!e.v;d.songsQuery=e.q,d.activeTab=s?"player":Et(e.tab)?e.tab:"dashboard",Ae(d.activeTab);let n=e.channel||d.channel||it;if(j(n)||(n=it),!j(n)){let a=Object.keys(t.channels)[0];a&&(n=a)}if(!j(n))throw new Error("No channel data could be loaded");vs(),It(n,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0,render:!s}),s&&(await Ts()||D(e.tab,{updateUrl:!1,initial:!0})),Gs(),_s()}catch(t){console.error("[init] failed:",t),Qs(t)}}function sn(){if(!d.channelData)return;let t=Y();d.songsQuery=t.q,t.channel!==d.channel&&j(t.channel)&&It(t.channel,{resetSearch:!1,updateUrl:!1}),D(t.tab,{updateUrl:!1})}P(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=r("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!I&&!F(s)){wt=e,bt();return}D(e)})});P(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||It(t.dataset.channel))})});window.addEventListener("popstate",sn);P("[data-audience]").forEach(t=>{t.addEventListener("click",()=>cs(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest("[data-artist-search]");if(e){t.preventDefault(),t.stopPropagation(),Ft(e.dataset.artistSearch||e.textContent||"");return}let s=t.target.closest("[data-playlist-add]");if(s){t.preventDefault(),t.stopPropagation();let l=s.dataset.playlistAdd,c=s.dataset.streamTitle||"";import("./chunk-5GOOZP3X.js").then(o=>o.showAddToPlaylistModal(l,c));return}let n=t.target.closest("[data-stream-play]");if(n){t.preventDefault(),t.stopPropagation();let l=n.dataset.streamPlay,c=(d.data?.streams||[]).find(o=>W(o)===l);c?.url?S(c):n.dataset.inlineYoutube&&Mt(n.dataset.inlineYoutube);return}let a=t.target.closest("[data-inline-youtube]");if(a){t.preventDefault(),t.stopPropagation(),Mt(a.dataset.inlineYoutube);return}if(oe(t.target))return;let i=t.target.closest("[data-songkey]");i&&Ge(i.dataset.songkey)});r("#retry-btn").addEventListener("click",se);r("#reload-btn").addEventListener("click",se);tn();Zs();Gt();ze();Ks();ds();us();en();import("./chunk-RV7JB4LR.js").then(t=>{t.setApiLoader(Qt),t.initMusicPlayer()}).catch(()=>{});we(t=>{t.type==="song"?Ge(t.song.key):t.type==="artist"?Ft(t.artist):t.type==="stream"?S(t.stream):t.type==="music-video"&&S({...t.video,isMv:!0})});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(!s&&!t.metaKey&&!t.ctrlKey&&!t.altKey){let a=r("#stream-viewer");if(a&&!a.hidden&&!a.classList.contains("sv-minified")&&!a.classList.contains("sv-music-minified")&&r("#sv-share-modal")?.hidden!==!1&&g){if(t.key===" "){t.preventDefault();try{g.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?g.pauseVideo():g.playVideo()}catch{}return}if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();try{let l=g.getCurrentTime?.()??0,c=Math.max(0,l+(t.key==="ArrowRight"?10:-10));g.seekTo(c,!0)}catch{}return}}}if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),ke();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),me();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let a=r("#help-modal");a&&a.hidden&&(a.hidden=!1,r("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let a=r("#stream-viewer"),i=!!r("#panel-player.active");if(a&&!a.hidden&&(I||i)){t.preventDefault(),bt();return}if(Bt()){t.preventDefault(),ot();return}let l=r("#song-modal");if(l&&!l.hidden)return;let c=r("#ch-modal");if(c&&!c.hidden){c.hidden=!0;return}let o=r("#help-modal");if(o&&!o.hidden){o.hidden=!0,r("#help-btn")?.focus();return}let v=r("#songs-search");v&&document.activeElement===v&&v.value&&(t.preventDefault(),v.value="",v.dispatchEvent(new Event("input",{bubbles:!0})))}});he(()=>{d.data&&(Vt(),(d.activeTab==="dashboard"||d.activeTab==="analytics")&&J())});function nn(){se()}nn();export{ks as getWatchHistory};
