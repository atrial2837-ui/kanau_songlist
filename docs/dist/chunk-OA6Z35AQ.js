import{a as Q,b as ut}from"./chunk-J3NRXPJ3.js";import{e as C,f as g}from"./chunk-WDLZ4FBB.js";import{G as j,I as Rt,J as L,K as nt,M as Bt,a as r,b as Ht,c as b}from"./chunk-LYEKSJR3.js";var Yt=/\b\d{1,2}:\d{2}(?::\d{2})?\b/g;function vt(t){let e=String(t||"").match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function Dt(t){let e=String(t||"").trim();if(!e)return null;let s=e.match(Yt)||[];if(!s.length)return null;let a=we(e);if(!a)return null;let{title:n,artist:i}=xe(a);return n?{start:s[0].trim(),title:n,artist:i,end:s.length>1?s[s.length-1].trim():"",raw:a}:null}function we(t){return String(t||"").replace(Yt," ").replace(/https?:\/\/\S+/gi," ").replace(/^\s*(?:\d+[\).．、:]|[#＃]\d+|[・\-*＊•▶▷♪♫🎵🎶]+)\s*/u,"").replace(/^[\s　\[\]【】()（）<>＜＞「」『』"'`]+|[\s　\[\]【】()（）<>＜＞「」『』"'`]+$/g,"").replace(/\s*(?:[-–—~〜→⇒>|｜]{2,}|[|｜])\s*$/g,"").replace(/[ \t　]+/g," ").trim()}function wt(t){return String(t||"").replace(/^[\s　\[\]【】()（）<>＜＞「」『』"'`・\-*＊•▶▷♪♫🎵🎶]+/u,"").replace(/[\s　\[\]【】()（）<>＜＞「」『』"'`]+$/g,"").trim()}function xe(t){let e=wt(t);if(!e)return{title:"",artist:""};let s=[/^(.+?)\s*(?:\/|／)\s*(.+)$/,/^(.+?)\s+(?:by|BY|By)\s+(.+)$/,/^(.+?)\s*(?:-|－|–|—|~|〜|｜|\|)\s*(.+)$/,/^(.+?)\s+(?:covered\s+by|cover\s+by|歌[:：])\s+(.+)$/i];for(let a of s){let n=e.match(a);if(!n)continue;let i=wt(n[1]),l=wt(n[2]);if(i&&l)return{title:i,artist:l}}return{title:e,artist:""}}function H(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function Ut(t,e,s){let a=H(t),n=H(e),i=-1,l=0;for(let u=0;u<s.length;u++){let d=H(s[u].title),c=H(s[u].artist),o=0;d===a?o+=80:a.length>1&&(d.includes(a)||a.includes(d))&&(o+=40),n&&c===n?o+=20:n&&n.length>1&&(c.includes(n)||n.includes(c))&&(o+=10),o>l&&(l=o,i=u)}if(l<40&&n)for(let u=0;u<s.length;u++){let d=H(s[u].title),c=H(s[u].artist),o=0;d===n?o+=70:n.length>1&&(d.includes(n)||n.includes(d))&&(o+=35),c&&c===a?o+=20:a.length>1&&(c.includes(a)||a.includes(c))&&(o+=10),o>l&&(l=o,i=u)}return l>=40?i:-1}var jt="kanau-watch-history-v1",Ot=0;function $e(){try{return JSON.parse(localStorage.getItem(jt)||"[]")}catch{return[]}}function xt(t,e){if(!(!t?.url||e<10))try{let s=$e().filter(a=>a.url!==t.url);s.unshift({url:t.url,title:t.title||"",t:Math.max(0,Math.floor(e)),isMv:!!t.isMv,channel:t.channel??null,index:t.index??null,date:t.date??null,updatedAt:Date.now()}),localStorage.setItem(jt,JSON.stringify(s.slice(0,10)))}catch{}}function zt(t,e){let s=Date.now();s-Ot<5e3||(Ot=s,xt(t,e))}function Ft(){try{return JSON.parse(localStorage.getItem("kanau-playlists")||"null")||[]}catch{return[]}}function $t(t,e=0){let s=String(t||""),a=L(s);if(!a)return s;let n=Math.max(0,Math.floor(Number(e)||0));return`https://www.youtube.com/watch?v=${a}${n>0?`&t=${n}s`:""}`}function Qt(t,e=0,s={}){if(!t)return"";let a=Q(),n=new URLSearchParams,i=a.channel||C.channel;return i&&i!=="new"&&n.set("ch",i),n.set("v",t),s.includeTime!==!1&&e>5&&n.set("t",String(Math.floor(e))),`${location.origin}${location.pathname}?${n}`}var rt="idle",_e={idle:["embedded","mini"],embedded:["fullscreen","mini","music-bar","idle"],fullscreen:["embedded","idle"],mini:["embedded","idle"],"music-bar":["embedded","idle"]};function rs(){return rt}function q(t){t!==rt&&(_e[rt]?.includes(t)||console.warn(`[player] \u4E0D\u6B63\u306A\u30E2\u30FC\u30C9\u9077\u79FB: ${rt} \u2192 ${t}`),rt=t)}var N=null;function ds(t){N=t}function us(t){yt=t}function vs(t){bt=t}function Xt(){return window.matchMedia("(max-width: 700px)").matches}function dt(){pt&&(clearInterval(pt),pt=null)}function Lt(){dt(),pt=setInterval(()=>{if(k(),!!h)try{let t=h.getDuration?.()||0,e=h.getCurrentTime?.()||0;P&&zt(P,e);let s=t>0?Math.min(e/t*100,100):0,a=r("#yt-mini-progress-fill");a&&(a.style.width=`${s}%`);let i=h.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,l=r("#yt-mini-play");l&&l.setAttribute("data-playing",i?"1":"0")}catch{}},400)}function et(){if(dt(),h){try{h.destroy()}catch{}h=null}let t=r("#yt-player-container");t&&(t.innerHTML="")}function Se(){if(h?.getCurrentTime)try{return h.getCurrentTime()}catch{}return Math.max(0,ot+(Date.now()-Et)/1e3)}function K(t=r("#stream-viewer")){return!!t&&(t.classList.contains("sv-minified")||t.classList.contains("sv-music-minified"))}function k(){let t=r("#stream-viewer");if(!K(t))return;let e=r("#sv-player-wrap"),s=t.classList.contains("sv-music-minified")?document.querySelector("#music-bar .mbar-video-wrap"):document.querySelector("#yt-player-panel .yt-mini-video-wrap");if(!e||!s)return;let a=s.getBoundingClientRect();e.style.left=`${a.left}px`,e.style.top=`${a.top}px`,e.style.width=`${a.width}px`,e.style.height=`${a.height}px`}function ke(){let t=r("#stream-viewer"),e=t?._currentStream;if(!t||!e||!p)return!1;se();let s=r("#yt-player-panel");if(!s)return!1;P=e;try{ot=Math.floor(p.getCurrentTime?.()??0)}catch{ot=0}Et=Date.now();let a=r("#yt-mini-title");a&&(a.textContent=e.title||"");let n=r("#yt-mini-hint");n&&(n.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),s.classList.add("has-stream"),s.hidden=!1,h=p,p=null,t.classList.add("sv-minified"),document.body.classList.add("has-sv-mini"),document.body.style.overflow="",q("mini"),gt(),A(),k(),requestAnimationFrame(k),setTimeout(k,120),setTimeout(k,400),window.addEventListener("resize",k),Lt();try{let i=h.getPlayerState?.();r("#yt-mini-play")?.setAttribute("data-playing",i===window.YT?.PlayerState?.PLAYING?"1":"0")}catch{}return X(r("#yt-mini-vol-slider"),r("#yt-mini-vol-btn"),null,G()),!0}function Zt(){let t=r("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",k),dt(),t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini");let e=r("#sv-player-wrap");e&&(e.style.cssText=""),p=h,h=null;let s=r("#yt-player-panel");return s&&(s.hidden=!0),Ct(),A(),setTimeout(()=>{r("#sv-close")?.focus({preventScroll:!0})},50),!0}function te(){let t=r("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",k),dt(),t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music");let e=r("#sv-player-wrap");return e&&(e.style.cssText=""),p=h,h=null,Ct(),A(),setTimeout(()=>{r("#sv-close")?.focus({preventScroll:!0})},50),!0}function ee(){let t=r("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",k),dt(),tt(),++B,t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music"),t.hidden=!0,t._currentStream=null;let e=r("#sv-player-wrap");return e&&(e.style.cssText="",e.innerHTML=""),et(),P=null,q("idle"),A(),!0}function Te(){let t=r("#stream-viewer"),e=t?._currentStream;if(!t||t.hidden||!e?.url)return;let s=Mt(Q().t),a={...e,title:e.title||(e.isMv?"\u52D5\u753B":"\u6B4C\u67A0"),type:e.isMv?e.type||"original":"stream",sub:e.isMv?e.originalArtist||e.character||e.sub||"":`${j(e.date)} \u7B2C${e.index}\u67A0`,_stream:e};if(!p){import("./chunk-6B4T4QMS.js").then(i=>i.playMusicBarVideo?.(a,s)).catch(()=>{});return}try{ot=Math.floor(p.getCurrentTime?.()??s)}catch{ot=s}Et=Date.now(),h=p,p=null,P=null,z=!1,t.classList.remove("sv-fullscreen","sv-minified"),q("music-bar"),t.classList.add("sv-music-minified"),document.body.classList.remove("has-sv-fullscreen","has-sv-mini"),document.body.classList.add("has-sv-music"),document.body.style.overflow="",t.hidden=!1;let n=r("#yt-player-panel");n&&(n.hidden=!0),gt(),A(),k(),requestAnimationFrame(k),setTimeout(k,120),setTimeout(k,400),window.addEventListener("resize",k),Lt(),import("./chunk-6B4T4QMS.js").then(i=>{i.adoptExternalPlayer?.(a,h,{restore:te,close:ee}),k(),requestAnimationFrame(k),setTimeout(k,120),setTimeout(k,400)}).catch(()=>{})}function ht(){let t=r("#stream-viewer");if(t?.classList.contains("sv-music-minified"))return ee();if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",k),tt(),++B,t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini"),t.hidden=!0,t._currentStream=null;let e=r("#sv-player-wrap");e&&(e.style.cssText="",e.innerHTML=""),et();let s=r("#yt-player-panel");return s&&(s.hidden=!0),P=null,q("idle"),N.setSidebarHidden(document.body.dataset.activeTab==="playlists"),A(),!0}var at=null;function Mt(t=0){let e=[p,h];for(let s of e)try{let a=s?.getCurrentTime?.();if(Number.isFinite(a))return Math.max(0,Math.floor(a))}catch{}return Math.max(0,Math.floor(Number(t)||0))}function A(){let t=r("#stream-viewer"),s=t&&!t.hidden&&!K(t)&&t._currentStream?.url?L(t._currentStream.url):"",a=s?Mt(Q().t):0;ut({v:s||"",t:a>5?a:0},{replace:!0}),s&&xt(t._currentStream,a),s&&!at&&(at=setInterval(A,5e3)),!s&&at&&(clearInterval(at),at=null)}function Le(){if(r("#sv-share-modal"))return;let t=document.createElement("div");t.id="sv-share-modal",t.hidden=!0,t.innerHTML=`
    <div class="sv-share-backdrop"></div>
    <div class="sv-share-dialog" role="dialog" aria-modal="true" aria-label="\u52D5\u753B\u3092\u5171\u6709">
      <div class="sv-share-head">
        <span class="sv-share-head-icon">${g("heart")}</span>
        <span class="sv-share-head-title">\u3053\u306E\u6B4C\u67A0\u3092\u304A\u3059\u305D\u308F\u3051</span>
        <button class="sv-share-close" id="sv-share-close" type="button" aria-label="\u9589\u3058\u308B">${g("close")}</button>
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
    </div>`,document.body.appendChild(t);let e=()=>{t.hidden=!0};t.querySelector(".sv-share-backdrop").addEventListener("click",e),r("#sv-share-close").addEventListener("click",e),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&(n.preventDefault(),n.stopPropagation(),e())},{capture:!0});let s=()=>{let n=t._shareState;if(!n)return;let i=r("#sv-share-ts-check")?.checked&&n.t>0,l=Qt(n.id,n.t,{includeTime:i}),u=r("#sv-share-url");u&&(u.value=l);let d=n.title?`${n.title}`:"\u5922\u5DDD\u304B\u306A\u3046 \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9",c=r("#sv-share-x");c&&(c.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(d)}&url=${encodeURIComponent(l)}`);let o=r("#sv-share-line");return o&&(o.href=`https://line.me/R/share?text=${encodeURIComponent(`${d}
${l}`)}`),l};r("#sv-share-ts-check").addEventListener("change",s),t._rebuild=s,r("#sv-share-url").addEventListener("focus",n=>n.target.select()),r("#sv-share-copy").addEventListener("click",async()=>{let n=r("#sv-share-url")?.value;if(!n)return;let i=!1;try{await navigator.clipboard.writeText(n),i=!0}catch{try{r("#sv-share-url").select(),i=document.execCommand("copy")}catch{}}let l=r("#sv-share-copy");l&&(l.textContent=i?"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",l.classList.add("copied"),setTimeout(()=>{l.textContent="\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",l.classList.remove("copied")},1600))});let a=r("#sv-share-native");navigator.share&&a&&(a.hidden=!1,a.addEventListener("click",async()=>{let n=t._shareState,i=r("#sv-share-url")?.value;if(i)try{await navigator.share({title:n?.title||"",url:i})}catch{}}))}function Me(){let e=r("#stream-viewer")?._currentStream;if(!e?.url)return;let s=L(e.url);if(!s)return;Le();let a=r("#sv-share-modal"),n=Mt(Q().t);a._shareState={id:s,t:n,title:e.title||""};let i=r("#sv-share-video-title");i&&(i.textContent=e.title||"(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)");let l=r("#sv-share-ts-row"),u=r("#sv-share-ts-check"),d=r("#sv-share-ts-label");l&&(l.hidden=n<=5),u&&(u.checked=n>5),d&&(d.textContent=U(n)),a._rebuild?.(),a.hidden=!1}var Gt=new URLSearchParams(location.search).get("pl");async function ps(){if(!Gt)return;let t=null;try{let a=Gt.replace(/-/g,"+").replace(/_/g,"/"),n=Uint8Array.from(atob(a),i=>i.charCodeAt(0));t=JSON.parse(new TextDecoder().decode(n))}catch{return}if(!t||typeof t.n!="string"||!Array.isArray(t.s))return;let e=t.n.slice(0,60)||"\u5171\u6709\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8",s=t.s.filter(a=>typeof a=="string"&&a.length<100).slice(0,300);if(s.length){if(!confirm(`\u5171\u6709\u3055\u308C\u305F\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u300C${e}\u300D\uFF08${s.length}\u4EF6\uFF09\u3092\u53D6\u308A\u8FBC\u307F\u307E\u3059\u304B\uFF1F`)){ut({},{replace:!0});return}try{let a=await import("./chunk-HO6BHBFF.js"),n=a.createPlaylist(e);for(let i of s)a.addStreamToPlaylist(n.id,i);ut({tab:"playlists"},{replace:!0}),N.activateTab("playlists",{updateUrl:!1})}catch{}}}async function ms(){let t=Q();if(!t.v)return!1;let e=t.v,s=t.t;try{await N.ensureFullData()}catch{}let a=[];C.channelData?.combined&&a.push(C.channelData.combined),Object.values(C.channelData?.channels||{}).forEach(n=>{n&&a.push(n)});for(let n of a){let i=(n.streams||[]).find(l=>L(l.url)===e);if(i)return M(i,s),!0}try{let l=((await(await fetch("data/music.json")).json())?.videos||[]).find(u=>L(u.url)===e);if(l)return M({url:l.url,title:l.title,isMv:!0},s),!0}catch{}return M({url:`https://www.youtube.com/watch?v=${e}`,title:"",isMv:!0},s),!0}function Ee(t,e=0,s=""){let a=L(t);if(!a)return;if(Xt()){window.open($t(t,e),"_blank","noopener");return}{let d=r("#stream-viewer");if(d&&!d.hidden&&!z)if(K(d))ht();else{++B,d.hidden=!0,d._currentStream=null,p=null;let c=r("#sv-player-wrap");c&&(c.innerHTML=""),document.body.style.overflow="",P=null,bt={},q("idle"),gt(),A()}}ie(),se();let n=r("#yt-player-container"),i=r("#yt-player-panel");if(!n||!i)return;et();let l=r("#yt-mini-title");l&&(l.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let u=r("#yt-mini-hint");u&&(u.textContent=P?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),i.classList.toggle("has-stream",!!P),i.hidden=!1,q("mini"),re(()=>{let d=document.createElement("div");n.appendChild(d);try{h=new window.YT.Player(d,{videoId:a,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:c=>{let o=G();try{c.target.setVolume(o)}catch{}if(X(r("#yt-mini-vol-slider"),r("#yt-mini-vol-btn"),null,o),e>5)try{c.target.seekTo(e,!0)}catch{}Lt()},onStateChange:c=>{let o=c.data===window.YT.PlayerState.PLAYING,v=r("#yt-mini-play");v&&v.setAttribute("data-playing",o?"1":"0")}}})}catch{let o=e>0?`&start=${Math.floor(e)}`:"";n.innerHTML=`<iframe src="https://www.youtube.com/embed/${a}?autoplay=1&playsinline=1${o}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function se(){if(r("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
        <button class="vol-btn" id="yt-mini-vol-btn" type="button" aria-label="\u97F3\u91CF">${g("volume")}</button>
        <input class="vol-slider" id="yt-mini-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
      </div>
      <button id="yt-player-close" type="button" class="yt-mini-close-btn" aria-label="\u9589\u3058\u308B">${g("close")}</button>
    </div>
  `,document.body.appendChild(t),r("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,!ht()&&(et(),P=null,q("idle"))}),r("#yt-mini-play").addEventListener("click",()=>{if(h)try{h.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?h.pauseVideo():h.playVideo()}catch{}}),r("#yt-mini-restore").addEventListener("click",()=>{Zt()||P&&M(P,Se())}),r("#yt-mini-progress-bar").addEventListener("click",a=>{if(!h)return;let i=a.currentTarget.getBoundingClientRect(),l=Math.max(0,Math.min(1,(a.clientX-i.left)/i.width));try{let u=h.getDuration?.()||0;u>0&&h.seekTo(l*u,!0)}catch{}});let e=r("#yt-mini-vol-slider"),s=r("#yt-mini-vol-btn");if(e){let a=G();e.value=a,e.style.setProperty("--pct",`${a}%`),s&&(s.innerHTML=lt(a)),e.addEventListener("input",n=>{let i=parseInt(n.target.value);if(n.target.style.setProperty("--pct",`${i}%`),kt(i),s&&(s.innerHTML=lt(i)),h)try{h.setVolume(i)}catch{}})}if(s){let a=80;s.addEventListener("click",()=>{if(!e)return;let n=parseInt(e.value),i=n>0?0:a||80;n>0&&(a=n),X(e,s,h,i)})}}var ne=!1,ae=[];window.onYouTubeIframeAPIReady=()=>{ne=!0,ae.splice(0).forEach(t=>t()),import("./chunk-6B4T4QMS.js").then(t=>t.notifyYtReady()).catch(()=>{})};function ie(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function re(t){if(ne&&window.YT?.Player){t();return}ae.push(t)}var G=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),kt=t=>localStorage.setItem("kanaVol",String(t)),lt=()=>g("volume");function X(t,e,s,a){if(t&&(t.value=a,t.style.setProperty("--pct",`${a}%`)),e&&(e.innerHTML=lt(a)),s)try{s.setVolume(a)}catch{}}var p=null,B=0,P=null,ot=0,Et=0,z=!1,yt="timeline",bt={},V={},_t=new Map,Y=!1,D=!1,h=null,pt=null,mt=null,le="kanauViewerSetlistCollapsed",R=!1;function Ct(){yt=C.activeTab||"timeline",q("embedded"),N.syncTabUi()}function gt(){let t=bt;bt={},N.activateTab(yt||"timeline",t)}function Ce(){z=!0,q("fullscreen");let t=r("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=r("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=r("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function U(t){let e=Math.floor(t),s=Math.floor(e/3600),a=Math.floor(e%3600/60),n=e%60;return s>0?`${s}:${String(a).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${a}:${String(n).padStart(2,"0")}`}function oe(t){return`kanau-ts-${t.channel||""}-${t.index||""}`}function W(t){try{return JSON.parse(localStorage.getItem(oe(t))||"null")||{}}catch{return{}}}function St(t,e){try{localStorage.setItem(oe(t),JSON.stringify(e))}catch{}}var F=-1;function Ie(t,e,s,a){let n=e===a,i=s[e],l=i!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${b(U(i))} \u306B\u79FB\u52D5">${b(U(i))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">${g("close")}</button>`:"",d=(V[e]||[]).map(v=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${v.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${b(U(v.timeSeconds))}">${b(U(v.timeSeconds))}</button>`).join(""),c=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,o=`<div class="sv-cts-row">${d}${c}</div>`;return`<div class="sv-song${n?" is-current":""}" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${b(t.title)}</span>
      <span class="sv-song-artist">${b(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${l}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">${g("time")} \u30E1\u30E2</button></div>
    ${o}
  </div>`}async function Pe(t){if(V={},!t?.channel||t?.index==null)return;let e=`${t.channel}:${t.index}`;if(_t.has(e)){V=_t.get(e)||{};let n=r("#stream-viewer");if(!n||n._currentStream!==t)return;let i=r("#sv-setlist");i&&J(i,t.songs,W(t),F),Wt(t);return}try{let n=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,i=await fetch(n);if(!i.ok)return;let l=await i.json();for(let u of l.items||[])V[u.songIndex]||(V[u.songIndex]=[]),V[u.songIndex].push({timeSeconds:u.timeSeconds,note:u.note??null});_t.set(e,V)}catch{}let s=r("#stream-viewer");if(!s||s._currentStream!==t)return;let a=r("#sv-setlist");a&&J(a,t.songs,W(t),F),Wt(t)}function Ve(t,e,s){r("#sv-cts-modal")?.remove();let a=p?.getCurrentTime?.()??0,n=U(Math.floor(a)),i=document.createElement("div");i.id="sv-cts-modal",i.className="sv-cts-modal-overlay",i.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">${g("close")}</button>
      </div>
      <p class="sv-cts-modal-song">${b(s)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${b(n)}" placeholder="0:00" autocomplete="off">
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
  `,document.body.appendChild(i);let l=()=>i.remove();i.querySelector(".sv-cts-modal-close").addEventListener("click",l),i.querySelector(".sv-cts-modal-cancel").addEventListener("click",l),i.addEventListener("click",u=>{u.target===i&&l()}),i.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let u=i.querySelector("#sv-cts-ts-input").value.trim(),d=i.querySelector("#sv-cts-note-input").value.trim()||null,c=vt(u),o=i.querySelector("#sv-cts-status");if(c===null){o.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",o.className="sv-cts-modal-status error",o.hidden=!1;return}let v=i.querySelector("#sv-cts-submit");v.disabled=!0,v.textContent="\u9001\u4FE1\u4E2D\u2026";try{let m=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:c,submitterNote:d})});if(m.ok)o.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",o.className="sv-cts-modal-status success",o.hidden=!1,v.hidden=!0,i.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let w=await m.json().catch(()=>({}));o.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${w.error||m.statusText}`,o.className="sv-cts-modal-status error",o.hidden=!1,v.disabled=!1,v.textContent="\u63D0\u6848\u3059\u308B"}}catch(m){o.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${m.message}`,o.className="sv-cts-modal-status error",o.hidden=!1,v.disabled=!1,v.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>i.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function u(d){d.key==="Escape"&&(l(),document.removeEventListener("keydown",u))})}function Wt(t){let e=r("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let a=Object.keys(V).length>=t.songs.length;e.textContent=a?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function qe(t){r("#sv-bulk-modal")?.remove();let e=W(t),n=Object.keys(V).length>=t.songs.length,i=t.songs.map((d,c)=>{let o=e[c]!=null?U(e[c]):"",v=V[c]?.[0]?.timeSeconds!=null?U(V[c][0].timeSeconds):"",m=o||v;return`
      <div class="sv-bulk-row" data-idx="${c}">
        <span class="sv-bulk-num">${c+1}</span>
        <span class="sv-bulk-title" title="${b(d.title)}">${b(d.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${b(m)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${c}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${c}">${g("time")}</button>
      </div>`}).join(""),l=document.createElement("div");l.id="sv-bulk-modal",l.className="sv-cts-modal-overlay",l.innerHTML=`
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="${n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">${n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">${g("close")}</button>
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
  `,document.body.appendChild(l);let u=()=>l.remove();l.querySelector(".sv-cts-modal-close").addEventListener("click",u),l.querySelector(".sv-cts-modal-cancel").addEventListener("click",u),l.addEventListener("click",d=>{d.target===l&&u()}),l.querySelector(".sv-paste-apply").addEventListener("click",()=>{let c=(l.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(m=>m.trim()).filter(Boolean),o=0;for(let m of c){let w=Dt(m);if(!w)continue;let _=Ut(w.title,w.artist,t.songs);if(_>=0){let x=l.querySelector(`[data-bulk-ts-idx="${_}"]`);x&&(x.value=w.start,o++)}}let v=l.querySelector(".sv-paste-result");v&&(v.textContent=o>0?`${c.length}\u884C\u3092\u89E3\u6790 \u2192 ${o}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",v.hidden=!1)}),l.querySelector(".sv-bulk-rows").addEventListener("click",d=>{let c=d.target.closest("[data-bulk-now]");if(!c)return;let o=parseInt(c.dataset.bulkNow,10),v=p?.getCurrentTime?.();if(v!=null){let m=l.querySelector(`[data-bulk-ts-idx="${o}"]`);m&&(m.value=U(Math.floor(v)))}}),l.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let d=l.querySelector("#sv-bulk-note").value.trim()||null,c=l.querySelector("#sv-bulk-status"),o=l.querySelector("#sv-bulk-submit"),v=[];if(l.querySelectorAll("[data-bulk-ts-idx]").forEach(_=>{let x=parseInt(_.dataset.bulkTsIdx,10),y=vt(_.value.trim());y!==null&&v.push({songIndex:x,timeSeconds:y})}),!v.length){c.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",c.className="sv-cts-modal-status error",c.hidden=!1;return}o.disabled=!0,o.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${v.length})`,c.hidden=!0;let m=0,w=0;await Promise.all(v.map(async _=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:_.songIndex,timeSeconds:_.timeSeconds,submitterNote:d})})).ok?m++:w++}catch{w++}o.textContent=`\u7533\u8ACB\u4E2D\u2026 (${m+w}/${v.length})`})),w===0?(c.textContent=`${m}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,c.className="sv-cts-modal-status success",o.hidden=!0,l.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(c.textContent=`${m}\u4EF6\u6210\u529F / ${w}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,c.className="sv-cts-modal-status error",o.disabled=!1,o.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),c.hidden=!1}),document.addEventListener("keydown",function d(c){c.key==="Escape"&&(u(),document.removeEventListener("keydown",d))})}var It="kanauViewerQueueCollapsed",S=null,ct=!1;function Z(t){let e=S,s=e?.items?.[t];if(s){e.idx=t,ct=!0;try{s.kind==="mv"?M({url:s.video.url,title:s.video.title,isMv:!0}):M(s.stream)}finally{ct=!1}}}function Ne(t){t?.items?.length&&(S={name:t.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:t.items,idx:0,repeat:localStorage.getItem("kanauListRepeat")==="1",collapsed:localStorage.getItem(It)==="1"},Z(Math.max(0,Math.min(t.idx||0,t.items.length-1))))}function bs(t,e=0,s=0){if(!t?.length)return!1;let a=t.filter(i=>i?.url).map((i,l)=>i._stream?{kind:"stream",key:i._stream.url||`stream:${l}`,stream:i._stream}:{kind:"mv",key:`mv:${L(i.url)||l}`,video:{...i,isMv:!0}});if(!a.length)return!1;S={name:"\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u30AD\u30E5\u30FC",items:a,idx:Math.max(0,Math.min(e,a.length-1)),repeat:localStorage.getItem("kanauListRepeat")==="1",collapsed:localStorage.getItem(It)==="1"};let n=S.items[S.idx];ct=!0;try{n.kind==="mv"?M({...n.video,isMv:!0},s):M(n.stream,s)}finally{ct=!1}return!0}function Pt(){let t=S;if(!t?.items?.length)return"";let e=t.items[t.idx],s=e?.kind==="mv"?e.video?.title||"\u52D5\u753B":e?.stream?.title||"\u914D\u4FE1";return`
    <div class="sv-bp-section sv-queue-section${t.collapsed?" is-collapsed":""}">
      <div class="sv-bp-sh sv-queue-head">${g("playlist")} ${b(t.name)}
        <span class="sv-bp-sh-sub">\uFF08${t.idx+1} / ${t.items.length}\uFF09</span>
        <span class="sv-queue-current">${b(s)}</span>
        <button class="sv-queue-toggle" type="button"
          data-svq-action="toggle" aria-expanded="${!t.collapsed}"
          title="${t.collapsed?"\u30AD\u30E5\u30FC\u3092\u958B\u304F":"\u30AD\u30E5\u30FC\u3092\u9589\u3058\u308B"}">${t.collapsed?"\u958B\u304F":"\u9589\u3058\u308B"}</button>
        <button class="sv-queue-repeat${t.repeat?" is-on":""}" type="button"
          data-svq-action="repeat" aria-pressed="${t.repeat}"
          title="\u30EA\u30B9\u30C8\u30EA\u30D4\u30FC\u30C8\uFF08ON: \u6700\u5F8C\u307E\u3067\u518D\u751F\u3057\u305F\u3089\u5148\u982D\u3078\u623B\u308B\uFF09">${g("repeat")} \u30EA\u30D4\u30FC\u30C8</button>
      </div>
      <div class="sv-queue-list">
        ${t.items.map((a,n)=>{let i=a.kind==="mv"?a.video?.title||"\u52D5\u753B":a.stream?.title||"\u914D\u4FE1",l=a.kind==="mv"?g("video"):g("calendar"),u=a.kind==="mv"?"\u52D5\u753B":`${j(a.stream?.date)}\u3000\u7B2C${a.stream?.index}\u67A0`;return`<button class="sv-queue-row${n===t.idx?" is-current":""}" type="button"
            data-svq-action="jump" data-svq-idx="${n}">
            <span class="sv-queue-num">${n+1}</span>
            <span class="sv-queue-title">${b(i)}</span>
            <span class="sv-queue-meta">${l} ${b(u)}</span>
          </button>`}).join("")}
      </div>
    </div>`}function ce(t){let e=t.target.closest("[data-svq-action]");if(!e||!S)return!1;if(e.dataset.svqAction==="jump"){let s=parseInt(e.dataset.svqIdx,10);return!Number.isNaN(s)&&s!==S.idx&&Z(s),!0}if(e.dataset.svqAction==="repeat"){S.repeat=!S.repeat;try{localStorage.setItem("kanauListRepeat",S.repeat?"1":"0")}catch{}return e.classList.toggle("is-on",S.repeat),e.setAttribute("aria-pressed",String(S.repeat)),!0}if(e.dataset.svqAction==="toggle"){S.collapsed=!S.collapsed;try{localStorage.setItem(It,S.collapsed?"1":"0")}catch{}let s=e.closest(".sv-queue-section");return s&&(s.outerHTML=Pt()),Vt(r("#sv-below-player")),!0}return!1}function Vt(t){if(S?.collapsed)return;let e=t?.querySelector?.(".sv-queue-list"),s=e?.querySelector(".sv-queue-row.is-current");e&&s&&(e.scrollTop=Math.max(0,s.offsetTop-e.clientHeight/2))}function de(){let t=C.data?.streams||[],s=r("#stream-viewer")?._currentStream;if(!s)return;let a=t.findIndex(n=>n.channel===s.channel&&n.index===s.index);a<0||a>=t.length-1||M(t[a+1])}async function ue(t){let e=await qt(),s=L(t?.url);if(!s||!e.length)return;let a=e.findIndex(i=>L(i.url)===s);if(a<0||a>=e.length-1)return;let n=e[a+1];M({...n,isMv:!0})}async function Ae(t){let e=await qt(),s=L(t?.url);if(!s||!e.length)return;let a=e.findIndex(n=>L(n.url)===s);a<=0||M({...e[a-1],isMv:!0})}function ve(t){if(!t||K(t))return;let e=p||h;if(D&&e){try{e.seekTo(0,!0),e.playVideo()}catch{}return}if(S?.items?.length){let a=S;a.idx<a.items.length-1?Z(a.idx+1):a.repeat&&Z(0);return}if(!Y)return;let s=t._currentStream;s?.isMv?ue(s):de()}function tt(){mt&&(clearInterval(mt),mt=null)}function He(t,e){tt();let s=!1;mt=setInterval(()=>{if(t!==B||e.hidden||!p){tt();return}try{let a=p.getPlayerState?.();a===window.YT?.PlayerState?.ENDED?(s||ve(e),s=!0):a===window.YT?.PlayerState?.PLAYING&&(s=!1);let n=p.getCurrentTime?.()??0,i=e._currentStream;if(i?.songs?.length){let l=W(i),u=-1;for(let d=0;d<i.songs.length;d++)l[d]!=null&&n>=l[d]&&(u=d);u!==F&&(F=u,Re(u))}}catch{}},700)}function Re(t){let e=r("#sv-setlist");if(!e)return;e.querySelectorAll(".sv-song").forEach((a,n)=>a.classList.toggle("is-current",n===t))}function pe(t){R=!!t;try{localStorage.setItem(le,R?"1":"0")}catch{}let e=r("#stream-viewer .sv-panel"),s=r("#sv-setlist-toggle");e&&e.classList.toggle("is-setlist-collapsed",R),s&&(s.textContent=R?"\u958B\u304F":"\u7573\u3080",s.title=R?"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u3092\u958B\u304F":"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u3092\u6298\u308A\u305F\u305F\u3080",s.setAttribute("aria-expanded",String(!R)))}function Be(){try{R=localStorage.getItem(le)==="1"}catch{}pe(R)}function Ye(){let t=C.data?.streams||[],s=r("#stream-viewer")?._currentStream;if(!s)return;let a=t.findIndex(n=>n.channel===s.channel&&n.index===s.index);a<=0||M(t[a-1])}function me(){let t=p||h;if(t)try{t.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?t.pauseVideo?.():t.playVideo?.()}catch{}}function ft(t){Ht('.sv-bp-control-btn[data-bp-action="toggle-play"]').forEach(e=>{e.innerHTML=t?g("pause"):g("play"),e.title=t?"\u4E00\u6642\u505C\u6B62":"\u518D\u751F",e.setAttribute("aria-label",t?"\u4E00\u6642\u505C\u6B62":"\u518D\u751F"),e.setAttribute("aria-pressed",String(t))})}function be(){return'<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>'}function fe(t){return Ft().some(e=>(e.streams||[]).includes(t))}function he(t,e,s){import("./chunk-HO6BHBFF.js").then(a=>{a.showAddToPlaylistModal(t,e,{onChange:n=>{s?.classList.toggle("is-saved",!!n),s?.setAttribute("aria-pressed",String(!!n)),s&&(s.title=n?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58")}})}).catch(()=>{})}function De(t){return t.length?t.map(e=>{let s=Bt(e.stream.url)||nt(e.stream.url);return`<button class="sv-side-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${b(e.stream.channel)}" data-bp-index="${e.stream.index}">
      ${s?`<img class="sv-side-rel-thumb" src="${b(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<span class="sv-side-rel-thumb sv-side-rel-thumb--empty"></span>'}
      <span class="sv-side-rel-body">
        <span class="sv-side-rel-title">${b(e.stream.title||"\u914D\u4FE1")}</span>
        <span class="sv-side-rel-meta">${j(e.stream.date)} / ${e.overlap}\u66F2\u4E00\u81F4</span>
        <span class="sv-side-rel-songs">${e.sharedSongs.map(a=>b(a)).join("\u3001")}</span>
      </span>
    </button>`}).join(""):'<div class="sv-side-empty">\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u914D\u4FE1\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>'}function Ue(t){let e=r("#sv-side-related");e&&(e.innerHTML=`
    <div class="sv-side-related-head">
      <span>\u95A2\u9023\u914D\u4FE1</span>
      <span>${t.length?`${t.length}\u4EF6`:""}</span>
    </div>
    <div class="sv-side-related-list">${De(t)}</div>
  `)}function ye(t){return/縦型|たて配信|タテ|#?shorts|ショート|vertical/i.test(t?.title||"")||/\/shorts\//.test(t?.url||"")}function Kt(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${b(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=nt(t.url),a=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card ${ye(t)?"sv-bp-nav-card--portrait":"sv-bp-nav-card--landscape"}" type="button" data-bp-action="open-stream" data-bp-channel="${b(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${b(a)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${b(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${b(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${j(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function Oe(t){let e=r("#sv-below-player");if(!e)return;let s=C.data?.streams||[],a=s.findIndex(o=>o.channel===t.channel&&o.index===t.index),n=a>=0&&a<s.length-1?s[a+1]:null,i=a>0?s[a-1]:null,l=new Set(t.songs.map(o=>o.title)),u=s.filter((o,v)=>v!==a).map(o=>{let v=o.songs.filter(m=>l.has(m.title));return{stream:o,overlap:v.length,sharedSongs:v.slice(0,3).map(m=>m.title)}}).filter(o=>o.overlap>0).sort((o,v)=>v.overlap-o.overlap).slice(0,8),d=Rt(t),c=fe(d);e.innerHTML=`
    <div class="sv-bp-wrap">
      ${Pt()}

      <!-- \u64CD\u4F5C + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-control-bar">
          <button class="sv-bp-control-btn" type="button" data-bp-action="prev-stream"
            ${i?"":"disabled"} title="\u524D\u306E\u914D\u4FE1" aria-label="\u524D\u306E\u914D\u4FE1">${g("previous")}</button>
          <button class="sv-bp-control-btn sv-bp-control-btn--play" type="button" data-bp-action="toggle-play"
            title="\u518D\u751F / \u4E00\u6642\u505C\u6B62" aria-label="\u518D\u751F / \u4E00\u6642\u505C\u6B62">${g("play")}</button>
          <button class="sv-bp-control-btn" type="button" data-bp-action="next-stream"
            ${n?"":"disabled"} title="\u6B21\u306E\u914D\u4FE1" aria-label="\u6B21\u306E\u914D\u4FE1">${g("next")}</button>
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${Y?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${Y?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${D?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${D?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          <button class="sv-bp-control-btn sv-bp-bookmark-btn${c?" is-saved":""}" type="button"
            data-bp-action="bookmark-stream" aria-pressed="${c}" title="${c?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}"
            aria-label="${c?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${be()}</button>
        </div>
        <div class="sv-bp-next-hint">
          ${n?`\u6B21\uFF1A${b(n.title||"\u6B21\u306E\u914D\u4FE1")}`:"\u6700\u5F8C\u306E\u914D\u4FE1\u3067\u3059"}
        </div>
        <div class="sv-bp-nav-cards">
          ${Kt(i,"newer")}
          ${Kt(n,"older")}
        </div>
        <div class="sv-bp-info-compact">
          <span>${j(t.date)}</span>
          <span>\u7B2C${t.index}\u67A0</span>
          <span>${t.songs.length}\u66F2</span>
        </div>
      </div>

    </div>
  `,Ue(u),e.onchange=o=>{let v=o.target.closest("#sv-ap-check"),m=o.target.closest("#sv-repeat-check");if(v){Y=v.checked;let w=v.closest(".sv-bp-ap-switch");w&&w.classList.toggle("sv-bp-ap-switch--on",Y)}if(m){D=m.checked;let w=m.closest(".sv-bp-ap-switch");w&&w.classList.toggle("sv-bp-ap-switch--on",D)}},e.onclick=o=>{if(ce(o))return;let v=o.target.closest("[data-bp-action]");if(!v)return;let m=v.dataset.bpAction;if(m==="open-stream"){let w=v.dataset.bpChannel,_=parseInt(v.dataset.bpIndex,10),x=(C.data?.streams||[]).find(y=>y.channel===w&&y.index===_);x&&M(x)}else m==="prev-stream"?Ye():m==="next-stream"?de():m==="toggle-play"?me():m==="bookmark-stream"&&he(d,t.title||"\u914D\u4FE1",v)},Vt(e);try{let o=(p||h)?.getPlayerState?.()===window.YT?.PlayerState?.PLAYING;ft(o)}catch{}}var it=null;async function qt(){if(it)return it;try{it=(await(await fetch("data/music.json")).json())?.videos||[]}catch{it=[]}return it}function je(t){let e=String(t||"");return e=e.replace(/【[^】]*】/g," "),e=e.replace(/^\s*MV[⌇|｜♪♬:：\-\s]*/i," "),e=e.split(/[\/／|｜]/)[0],e=e.replace(/歌ってみた|covered?\s*(by.*)?$/gi," "),e.trim()}async function ze(t){let e=r("#sv-below-player");if(!e)return;try{await N.ensureFullData()}catch{}let s=await qt();if(r("#stream-viewer")?._currentStream!==t)return;let a=C.channelData?.combined?.streams||C.data?.streams||[],n=H(je(t.title)),i=[];if(n.length>1)for(let f of a){let $=(f.songs||[]).find(E=>{let I=H(E.title);return I===n||I.length>1&&(I.includes(n)||n.includes(I))});$&&i.push({stream:f,songTitle:$.title})}let l=i.slice(0,8),u={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9\u30BD\u30F3",cover:"\u30AB\u30D0\u30FC"},d=s.find(f=>f.url===t.url),c=s.filter(f=>f.url!==t.url).sort((f,$)=>{let E=d&&f.type===d.type?1:0,I=d&&$.type===d.type?1:0;return E!==I?I-E:($.publishedAt||"").localeCompare(f.publishedAt||"")}).slice(0,12),o=s.findIndex(f=>L(f.url)===L(t.url)),v=o>=0&&o<s.length-1?s[o+1]:null,m=o>0?s[o-1]:null,w=d||s.find(f=>L(f.url)===L(t.url)),_=w?"mv:"+w.id:"",x=_?fe(_):!1,y=S,T=!!y?.items?.length,O=T&&y.idx>0||!!m,st=T&&y.idx<y.items.length-1||!!v;e.innerHTML=`
    <div class="sv-bp-wrap">
      ${Pt()}
      <!-- \u64CD\u4F5C\uFF08\u6B4C\u67A0\u30D3\u30E5\u30FC\u30EF\u30FC\u3068\u540C\u3058: \u524D\u3078 / \u518D\u751F\u505C\u6B62 / \u6B21\u3078 / \u9023\u7D9A\u518D\u751F / \u30EA\u30D4\u30FC\u30C8 / \u681E\uFF09-->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-control-bar">
          <button class="sv-bp-control-btn" type="button" data-mv-action="mv-prev"
            ${O?"":"disabled"} title="\u524D\u306E\u52D5\u753B" aria-label="\u524D\u306E\u52D5\u753B">${g("previous")}</button>
          <button class="sv-bp-control-btn sv-bp-control-btn--play" type="button" data-mv-action="toggle-play"
            title="\u518D\u751F / \u4E00\u6642\u505C\u6B62" aria-label="\u518D\u751F / \u4E00\u6642\u505C\u6B62">${g("play")}</button>
          <button class="sv-bp-control-btn" type="button" data-mv-action="mv-next"
            ${st?"":"disabled"} title="\u6B21\u306E\u52D5\u753B" aria-label="\u6B21\u306E\u52D5\u753B">${g("next")}</button>
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${Y?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${Y?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${D?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${D?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          <button class="sv-bp-control-btn sv-bp-bookmark-btn${x?" is-saved":""}" type="button"
            data-mv-action="bookmark-mv" data-mv-key="${b(_)}" aria-pressed="${x}"
            title="${x?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}"
            aria-label="${x?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${be()}</button>
        </div>
        <div class="sv-bp-next-hint">
          ${v?`\u6B21\uFF1A${b(v.title||"\u6B21\u306E\u52D5\u753B")}`:'<span class="sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u52D5\u753B\uFF09</span>'}
        </div>
      </div>
      ${l.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">${g("mic")} \u3053\u306E\u66F2\u304C\u6B4C\u308F\u308C\u305F\u6B4C\u67A0 <span class="sv-bp-sh-sub">\uFF08\u5168${i.length}\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${l.map(f=>{let $=nt(f.stream.url);return`<button class="sv-bp-rel-card" type="button" data-mv-action="open-stream" data-mv-channel="${b(f.stream.channel)}" data-mv-index="${f.stream.index}">
              ${$?`<img class="sv-bp-rel-thumb" src="${b($)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${b(f.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${j(f.stream.date)}\u3000\u7B2C${f.stream.index}\u67A0</div>
                <div class="sv-bp-rel-songs">${g("music")} ${b(f.songTitle)}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      ${c.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">${g("video")} \u307B\u304B\u306E\u52D5\u753B <button class="sv-mv-all-btn" type="button" data-mv-action="all-videos">\u3059\u3079\u3066\u898B\u308B \u2192</button></div>
        <div class="sv-mv-grid">
          ${c.map(f=>{let $=nt(f.url);return`<button class="sv-mv-card" type="button" data-mv-action="open-mv" data-mv-url="${b(f.url)}" data-mv-title="${b(f.title)}">
              ${$?`<img class="sv-mv-card-thumb" src="${b($)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-mv-card-thumb"></div>'}
              <div class="sv-mv-card-body">
                <div class="sv-mv-card-title">${b(f.title)}</div>
                <div class="sv-mv-card-type">${u[f.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB"}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}
    </div>
  `,e.onchange=f=>{let $=f.target.closest("#sv-ap-check"),E=f.target.closest("#sv-repeat-check");if($){Y=$.checked;let I=$.closest(".sv-bp-ap-switch");I&&I.classList.toggle("sv-bp-ap-switch--on",Y)}if(E){D=E.checked;let I=E.closest(".sv-bp-ap-switch");I&&I.classList.toggle("sv-bp-ap-switch--on",D)}},e.onclick=f=>{if(ce(f))return;let $=f.target.closest("[data-mv-action]");if(!$)return;let E=$.dataset.mvAction;if(E==="open-stream"){let I=$.dataset.mvChannel,ge=parseInt($.dataset.mvIndex,10),Nt=(C.channelData?.combined?.streams||C.data?.streams||[]).find(At=>At.channel===I&&At.index===ge);Nt&&M(Nt)}else E==="open-mv"?M({url:$.dataset.mvUrl,title:$.dataset.mvTitle,isMv:!0}):E==="all-videos"?N.activateTab("playlists"):E==="toggle-play"?me():E==="mv-prev"?T&&y.idx>0?Z(y.idx-1):Ae(t):E==="mv-next"?T&&y.idx<y.items.length-1?Z(y.idx+1):ue(t):E==="bookmark-mv"&&he($.dataset.mvKey,t.title||"\u52D5\u753B",$)},Vt(e);try{let f=(p||h)?.getPlayerState?.()===window.YT?.PlayerState?.PLAYING;ft(f)}catch{}}function J(t,e,s,a){t.innerHTML=e.map((n,i)=>Ie(n,i,s,a)).join("")}function Fe(){if(r("#stream-viewer"))return;let t=r("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
    <nav class="sv-topnav" aria-label="\u30DA\u30FC\u30B8\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3">
      <button class="sv-topnav-btn" type="button" data-bc-tab="dashboard"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13h5v7H4z"/><path d="M10 4h5v16h-5z"/><path d="M16 9h4v11h-4z"/></svg>\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9</button>
      <button class="sv-topnav-btn" type="button" data-bc-tab="ranking"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v3a4 4 0 0 1-8 0z"/><path d="M6 5H3v2a4 4 0 0 0 4 4"/><path d="M18 5h3v2a4 4 0 0 1-4 4"/><path d="M12 11v5"/><path d="M8 20h8"/><path d="M9 16h6v4H9z"/></svg>\u30E9\u30F3\u30AD\u30F3\u30B0</button>
      <button class="sv-topnav-btn" type="button" data-bc-tab="songs"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>\u5168\u66F2\u30EA\u30B9\u30C8</button>
      <button class="sv-topnav-btn" type="button" data-bc-tab="timeline"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4"/><path d="M17 3v4"/><path d="M4 8h16"/><rect x="4" y="5" width="16" height="16" rx="3"/><path d="M8 13h3"/><path d="M13 13h3"/><path d="M8 17h3"/></svg>\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3</button>
      <button class="sv-topnav-btn" type="button" data-bc-tab="analytics"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M7 15l3-4 4 2 5-7"/><circle cx="7" cy="15" r="1"/><circle cx="10" cy="11" r="1"/><circle cx="14" cy="13" r="1"/><circle cx="19" cy="6" r="1"/></svg>\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9</button>
      <button class="sv-topnav-btn" type="button" data-bc-tab="playlists"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h10"/><path d="M5 11h10"/><path d="M5 16h7"/><path d="M18 8v10l3-2 3 2V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1z"/></svg>\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</button>
    </nav>
    <div class="sv-container">
      <div class="sv-header">
        <button class="sv-close-btn" id="sv-close" type="button" title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09">
          \u2190 <span class="sv-close-label">\u623B\u308B</span><span class="sv-esc-hint">Esc</span>
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
          title="\u5927\u753B\u9762\u3067\u518D\u751F" aria-pressed="false">${g("external")}</button>
        <div class="sv-volume-wrap">
          <button class="vol-btn" id="sv-vol-btn" type="button" aria-label="\u97F3\u91CF">${g("volume")}</button>
          <input class="vol-slider" id="sv-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
        </div>
        <button class="sv-music-btn" id="sv-music-btn" type="button" title="\u73FE\u5728\u4F4D\u7F6E\u304B\u3089\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u8074\u304F">
          <span class="sv-music-icon">${g("music")}</span><span class="sv-music-label">\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u8074\u304F</span>
        </button>
        <button class="sv-share-btn" id="sv-share-btn" type="button" title="\u3053\u306E\u52D5\u753B\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">
          <span class="sv-share-icon">${g("link")}</span><span class="sv-share-label">\u5171\u6709</span>
        </button>
        <a class="sv-yt-link" id="sv-yt-link" href="#" target="_blank" rel="noopener" title="YouTube\u3067\u958B\u304F">
          <span class="sv-yt-icon">${g("external")}</span><span class="sv-yt-label">YouTube\u3067\u958B\u304F</span>
        </a>
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
              <button class="sv-setlist-toggle" id="sv-setlist-toggle" type="button" aria-expanded="true">\u7573\u3080</button>
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
      <div class="sv-panel-hint">${g("time")} \u3067\u73FE\u5728\u6642\u523B\u3092\u30E1\u30E2 \uFF0F \u30D0\u30C3\u30B8\u3092\u30BF\u30C3\u30D7\u3067\u79FB\u52D5</div>
          <div class="sv-setlist" id="sv-setlist"></div>
          <div class="sv-side-related" id="sv-side-related"></div>
        </div>
      </div>
    </div>
  `,t.appendChild(e),r("#sv-close").addEventListener("click",()=>Jt()),r("#sv-share-btn").addEventListener("click",Me),r("#sv-music-btn").addEventListener("click",Te),r("#sv-fullscreen-btn").addEventListener("click",Ce),r("#sv-setlist-toggle")?.addEventListener("click",()=>pe(!R)),r("#sv-side-related")?.addEventListener("click",n=>{let i=n.target.closest('[data-bp-action="open-stream"]');if(!i)return;let l=i.dataset.bpChannel,u=parseInt(i.dataset.bpIndex,10),d=(C.data?.streams||[]).find(c=>c.channel===l&&c.index===u);d&&M(d)});let s=r("#sv-vol-slider"),a=r("#sv-vol-btn");if(s){let n=G();s.value=n,s.style.setProperty("--pct",`${n}%`),a&&(a.innerHTML=lt(n)),s.addEventListener("input",i=>{let l=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${l}%`),kt(l),a&&(a.innerHTML=lt(l)),p)try{p.setVolume(l)}catch{}})}if(a){let n=80;a.addEventListener("click",()=>{if(!s)return;let i=parseInt(s.value),l=i>0?0:n||80;i>0&&(n=i),X(s,a,p,l),kt(l)})}e.querySelectorAll("[data-bc-tab]").forEach(n=>{n.addEventListener("click",()=>{yt=n.dataset.bcTab,Jt()})}),r("#sv-import-toggle").addEventListener("click",()=>{let n=r("#sv-import-area");n&&(n.hidden=!n.hidden,n.hidden||r("#sv-import-input")?.focus())}),r("#sv-import-cancel").addEventListener("click",()=>{let n=r("#sv-import-area");n&&(n.hidden=!0);let i=r("#sv-import-input");i&&(i.value="")}),r("#sv-import-apply").addEventListener("click",()=>{let n=e._currentStream;if(!n)return;let i=r("#sv-import-input");if(!i)return;let u=i.value.split(`
`).map(o=>vt(o)).filter(o=>o!==null);if(!u.length)return;let d=W(n);u.forEach((o,v)=>{v<n.songs.length&&(d[v]=o)}),St(n,d),J(r("#sv-setlist"),n.songs,d,F);let c=r("#sv-import-area");c&&(c.hidden=!0),i.value=""}),r("#sv-cts-bulk-btn").addEventListener("click",()=>{let n=e._currentStream;n&&qe(n)}),r("#sv-setlist").addEventListener("click",n=>{let i=n.target.closest("[data-action]");if(!i)return;let l=parseInt(i.dataset.idx,10),u=e._currentStream;if(!u)return;let d=W(u);if(i.dataset.action==="seek"){if(d[l]!=null&&p?.seekTo){p.seekTo(d[l],!0);try{p.playVideo()}catch{}}}else if(i.dataset.action==="set-ts"){let c=p?.getCurrentTime?.();c!=null&&(d[l]=Math.floor(c),St(u,d),J(r("#sv-setlist"),u.songs,d,F))}else if(i.dataset.action==="del-ts")delete d[l],St(u,d),J(r("#sv-setlist"),u.songs,d,F);else if(i.dataset.action==="cts-seek"){let c=Number(i.dataset.ctsSeconds);if(!isNaN(c)&&p?.seekTo){p.seekTo(c,!0);try{p.playVideo()}catch{}}}else if(i.dataset.action==="cts-propose"){let c=u.songs[l];Ve(u,l,c?.title||`\u66F2 ${l+1}`)}})}function M(t,e=0){if(!t?.url)return;let s=L(t.url);if(!s){Ee(t.url);return}if(Xt()){window.open($t(t.url,e),"_blank","noopener");return}Fe(),ie(),tt(),ct||(S=null);let a=r("#stream-viewer");if(K(a)){if(a._currentStream?.url===t.url){if(!Zt()&&!Tt?.restoreExternalPlayer?.()&&te(),e>0)try{p?.seekTo(Math.floor(e),!0),p?.playVideo()}catch{}return}ht()}let n=Tt?.takeOverVideo?.(t.url)||null;n||import("./chunk-6B4T4QMS.js").then(y=>(y.releaseMusicPlayerVideo||y.pauseMusicPlayer)()).catch(()=>{});let i=r("#yt-player-panel");if(i&&!i.hidden){try{h?.pauseVideo()}catch{}i.hidden=!0,et()}if(P=null,z){z=!1;let y=r("#stream-viewer");y&&y.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}z=!1,Ct();let l=r("#stream-viewer");l.classList.remove("sv-fullscreen"),l.classList.toggle("sv-mv-mode",!!t.isMv);let u=ye(t);l.classList.toggle("sv-portrait",u),l._currentStream=t,Be();let d=++B,c=l.querySelectorAll("[data-bc-tab]");c[1]&&(t.isMv?(c[1].dataset.bcTab="playlists",c[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(c[1].dataset.bcTab="timeline",c[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let o=r("#sv-bc-title");o&&(o.textContent=t.title||"\u914D\u4FE1");let v=r("#sv-stream-meta");v&&(v.innerHTML=t.isMv?"":`${j(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000${g("mic")} ${t.songs.length}\u66F2`);let m=r("#sv-yt-link");m&&(m.href=t.url);let w=r("#sv-song-count");if(w&&(w.textContent=t.isMv?"":`${t.songs.length}\u66F2`),V={},t.isMv){let y=r("#sv-setlist");y&&(y.innerHTML="");let T=r("#sv-below-player");T&&(T.innerHTML="");let O=r("#sv-side-related");O&&(O.innerHTML=""),ze(t)}else{let y=W(t);J(r("#sv-setlist"),t.songs,y,F),Pe(t),Oe(t)}l.hidden=!1,N.setSidebarHidden(!0),document.body.style.overflow="",A(),window.scrollTo({top:0,behavior:"auto"}),setTimeout(()=>{r("#sv-close")?.focus({preventScroll:!0})},50);try{p?.destroy()}catch{}p=null;let _=r("#sv-player-wrap");_.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let x=Math.floor(e||n?.currentTime||0);if(n?.player){_.innerHTML="",n.iframe?(n.iframe.style.width="100%",n.iframe.style.height="100%",_.appendChild(n.iframe)):_.innerHTML='<div class="sv-player-loading">\u518D\u751F\u3092\u5F15\u304D\u7D99\u304E\u307E\u3057\u305F</div>',p=n.player;try{p.setVolume?.(G()),x>1&&p.seekTo?.(x,!0),p.playVideo?.()}catch{}X(r("#sv-vol-slider"),r("#sv-vol-btn"),null,G()),ft(!0),He(d,l);return}re(()=>{if(d!==B||l.hidden)return;_.innerHTML="";let y=document.createElement("div");_.appendChild(y);try{p=new window.YT.Player(y,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,origin:location.origin,rel:0,modestbranding:1,...x>0?{start:x}:{}},events:{onReady:T=>{let O=G();try{T.target.setVolume(O)}catch{}X(r("#sv-vol-slider"),r("#sv-vol-btn"),null,O);try{T.target.setPlaybackQuality("hd1080")}catch{}try{T.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(x>5)try{T.target.seekTo(x,!0)}catch{}},onStateChange:T=>{if(d===B){if(ft(T.data===window.YT.PlayerState.PLAYING),T.data===window.YT.PlayerState.PLAYING)try{T.target.setPlaybackQuality("hd1080")}catch{}T.data===window.YT.PlayerState.ENDED&&ve(l)}},onError:()=>{d===B&&(_.innerHTML=`<iframe src="https://www.youtube.com/embed/${b(s)}?autoplay=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}${x>0?`&start=${x}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{_.innerHTML=`<iframe src="https://www.youtube.com/embed/${b(s)}?autoplay=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}${x>0?`&start=${x}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function Jt(){let t=r("#stream-viewer");if(!t||t.hidden||K(t))return;if(z){z=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let s=r("#sv-close");s&&(s.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let a=r("#sv-fullscreen-btn");a&&a.setAttribute("aria-pressed","false"),q("embedded");return}if(ke())return;++B,t.hidden=!0,t._currentStream=null,tt(),p=null;let e=r("#sv-player-wrap");e&&(e.innerHTML=""),document.body.style.overflow="",q("idle"),N.setSidebarHidden(document.body.dataset.activeTab==="playlists"),gt(),A()}function fs(){let t=r("#stream-viewer");if(K(t))return ht(),!0;let e=r("#yt-player-panel");return e&&!e.hidden?(e.hidden=!0,et(),P=null,q("idle"),!0):!1}var Tt=null;function hs(t){Tt=t}window.__kanauDebug={openStreamViewer:M,playMyListInViewer:Ne};export{rs as a,ds as b,us as c,vs as d,ps as e,ms as f,se as g,ie as h,p as i,Ne as j,bs as k,Fe as l,M as m,Jt as n,fs as o,hs as p};
