import{H as f,I as w,a as e,d as g}from"./chunk-FKVR6ZKV.js";var s=[],u=-1,r=null,b=null,M=!1,L=[],y=null,k=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),V=t=>localStorage.setItem("kanaVol",String(t)),p=t=>t===0?"\u{1F507}":t<50?"\u{1F509}":"\u{1F50A}";function $(){M=!0,L.splice(0).forEach(t=>t())}function A(t){y=t}function C(t){if(M&&window.YT?.Player){t();return}L.push(t)}function H(){if(e("#music-bar"))return;let t=document.createElement("div");t.id="music-bar",t.hidden=!0,t.innerHTML=`
    <div class="mbar-progress-track" id="mbar-progress-track">
      <div class="mbar-progress-fill" id="mbar-progress-fill"></div>
    </div>
    <div class="mbar-body">
      <div class="mbar-track-info">
        <div class="mbar-thumb-wrap">
          <div class="mbar-video-wrap" id="mbar-video-wrap"></div>
          <button class="mbar-thumb-overlay" id="mbar-thumb-overlay" type="button" aria-label="\u52D5\u753B\u3092\u958B\u304F" title="\u52D5\u753B\u3092\u958B\u304F"></button>
        </div>
        <button class="mbar-text" id="mbar-track-info-btn" type="button" title="\u52D5\u753B\u3092\u958B\u304F">
          <span class="mbar-title" id="mbar-title">\u2014</span>
          <span class="mbar-sub"   id="mbar-sub">\u2014</span>
        </button>
        <span class="mbar-type-badge" id="mbar-type-badge"></span>
      </div>
      <div class="mbar-controls">
        <button class="mbar-ctrl-btn" id="mbar-prev" type="button" aria-label="\u524D\u306E\u66F2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/>
          </svg>
        </button>
        <button class="mbar-play-btn" id="mbar-play" type="button" data-playing="0" aria-label="\u518D\u751F/\u505C\u6B62"></button>
        <button class="mbar-ctrl-btn" id="mbar-next" type="button" aria-label="\u6B21\u306E\u66F2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18l8.5-6L6 6v12zM16 6h2v12h-2z"/>
          </svg>
        </button>
      </div>
      <div class="mbar-end">
        <div class="mbar-volume">
          <button class="vol-btn" id="mbar-vol-btn" type="button" aria-label="\u97F3\u91CF">\u{1F50A}</button>
          <input class="vol-slider" id="mbar-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
        </div>
        <button class="mbar-expand-btn" id="mbar-expand" type="button" title="\u52D5\u753B\u3067\u898B\u308B" aria-label="\u52D5\u753B\u3067\u898B\u308B">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4V6zm5.5 3.5 5 3-5 3v-6z"/></svg>
        </button>
        <span class="mbar-queue-info" id="mbar-queue-info"></span>
        <button class="mbar-close-btn" id="mbar-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
    </div>`,document.body.appendChild(t),e("#mbar-play").addEventListener("click",S),e("#mbar-prev").addEventListener("click",I),e("#mbar-next").addEventListener("click",P),e("#mbar-close").addEventListener("click",x);let a=e("#mbar-vol-slider"),n=e("#mbar-vol-btn");if(a){let l=k();a.value=l,a.style.setProperty("--pct",`${l}%`),n&&(n.textContent=p(l)),a.addEventListener("input",i=>{let o=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${o}%`),V(o),n&&(n.textContent=p(o)),r)try{r.setVolume(o)}catch{}})}if(n){let l=80;n.addEventListener("click",()=>{if(!a)return;let i=parseInt(a.value),o=i>0?0:l||80;if(i>0&&(l=i),a.value=o,a.style.setProperty("--pct",`${o}%`),n.textContent=p(o),r)try{r.setVolume(o)}catch{}})}let c=()=>{let l=s[u];l?.url&&window.__openStreamViewer?.({url:l.url,title:l.title,isMv:!0})};e("#mbar-expand").addEventListener("click",c),e("#mbar-thumb-overlay").addEventListener("click",c),e("#mbar-track-info-btn").addEventListener("click",c),e("#mbar-progress-track").addEventListener("click",l=>{if(!r)return;let i=l.currentTarget.getBoundingClientRect(),o=Math.max(0,Math.min(1,(l.clientX-i.left)/i.width));try{let d=r.getDuration?.()||0;d>0&&r.seekTo(o*d,!0)}catch{}}),document.addEventListener("keydown",l=>{if(l.key!=="Escape")return;let i=document.getElementById("stream-viewer");i&&!i.hidden||e("#music-bar")?.hidden||x()})}function R(t,a=0){t?.length&&(s=t.slice(),u=Math.max(0,Math.min(a,s.length-1)),m(u))}function P(){s.length&&(u=(u+1)%s.length,m(u))}function I(){s.length&&(u=(u-1+s.length)%s.length,m(u))}function x(){let t=e("#music-bar");if(!t)return;if(t.hidden=!0,document.body.classList.remove("has-music-bar"),v(),r){try{r.destroy()}catch{}r=null}s=[],u=-1;let a=e("#mbar-video-wrap");a&&(a.innerHTML="")}function q(){if(r)try{r.pauseVideo()}catch{}}function z(){if(v(),r){try{r.destroy()}catch{}r=null}let t=e("#mbar-video-wrap");if(t){t.innerHTML="";let a=s[u],n=a?f(a.url):"";n&&(t.innerHTML=`<img src="${g(w(n))}" alt="" style="width:100%;height:100%;object-fit:cover;">`)}e("#mbar-play")?.setAttribute("data-playing","0")}function D(){return!e("#music-bar")?.hidden}function m(t){let a=s[t];if(!a)return;E(a),T();let n=f(a.url);n&&(y&&y(),C(()=>{let c=e("#mbar-video-wrap");if(!c)return;if(r)try{r.loadVideoById({videoId:n,startSeconds:0});return}catch{}c.innerHTML="";let l=document.createElement("div");c.appendChild(l);try{r=new window.YT.Player(l,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1},events:{onReady:i=>{let o=k();try{i.target.setVolume(o)}catch{}let d=e("#mbar-vol-slider");d&&(d.value=o,d.style.setProperty("--pct",`${o}%`));let h=e("#mbar-vol-btn");h&&(h.textContent=p(o)),_()},onStateChange:i=>{let o=i.data===window.YT?.PlayerState?.PLAYING,d=e("#mbar-play");d&&d.setAttribute("data-playing",o?"1":"0"),o&&_(),i.data===window.YT?.PlayerState?.ENDED&&P()}}})}catch{}}))}function E(t){let a=e("#mbar-title"),n=e("#mbar-sub"),c=e("#mbar-type-badge"),l=e("#mbar-queue-info"),i=e("#mbar-prev"),o=e("#mbar-next");if(a&&(a.textContent=t.title||"\u2014"),n&&(t.type==="cover"?n.textContent=t.originalArtist||"\u30AB\u30D0\u30FC\u66F2":t.type==="office"?n.textContent="Re:AcT":t.type==="character"?n.textContent=t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3":n.textContent="\u304B\u306A\u3046\u30AA\u30EA\u30B8\u30CA\u30EB"),c){let d={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9",cover:"\u30AB\u30D0\u30FC"};c.textContent=d[t.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB",c.dataset.type=t.type}l&&(l.textContent=s.length>1?`${u+1} / ${s.length}`:""),i&&(i.disabled=s.length<=1),o&&(o.disabled=s.length<=1)}function T(){let t=e("#music-bar");t&&(t.hidden=!1,document.body.classList.add("has-music-bar"))}function S(){if(!r){u>=0&&s.length&&m(u);return}try{r.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?r.pauseVideo():r.playVideo()}catch{}}function _(){v(),b=setInterval(()=>{if(r)try{let t=r.getDuration?.()||0,a=r.getCurrentTime?.()||0,n=t>0?Math.min(a/t*100,100):0,c=e("#mbar-progress-fill");c&&(c.style.width=`${n}%`)}catch{}},500)}function v(){b&&(clearInterval(b),b=null)}export{x as closeMusicPlayer,H as initMusicPlayer,D as isMusicBarVisible,$ as notifyYtReady,q as pauseMusicPlayer,R as playMusicQueue,P as playNext,I as playPrev,z as releaseMusicPlayerVideo,A as setApiLoader};
