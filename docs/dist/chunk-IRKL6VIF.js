import{H as y,a as e}from"./chunk-FKVR6ZKV.js";var d=[],u=-1,r=null,b=null,x=!1,w=[],m=null,_=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),M=t=>localStorage.setItem("kanaVol",String(t)),p=t=>t===0?"\u{1F507}":t<50?"\u{1F509}":"\u{1F50A}";function $(){x=!0,w.splice(0).forEach(t=>t())}function A(t){m=t}function P(t){if(x&&window.YT?.Player){t();return}w.push(t)}function R(){if(e("#music-bar"))return;let t=document.createElement("div");t.id="music-bar",t.hidden=!0,t.innerHTML=`
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
    </div>`,document.body.appendChild(t),e("#mbar-play").addEventListener("click",E),e("#mbar-prev").addEventListener("click",C),e("#mbar-next").addEventListener("click",k),e("#mbar-close").addEventListener("click",h);let a=e("#mbar-vol-slider"),o=e("#mbar-vol-btn");if(a){let i=_();a.value=i,a.style.setProperty("--pct",`${i}%`),o&&(o.textContent=p(i)),a.addEventListener("input",l=>{let n=parseInt(l.target.value);if(l.target.style.setProperty("--pct",`${n}%`),M(n),o&&(o.textContent=p(n)),r)try{r.setVolume(n)}catch{}})}if(o){let i=80;o.addEventListener("click",()=>{if(!a)return;let l=parseInt(a.value),n=l>0?0:i||80;if(l>0&&(i=l),a.value=n,a.style.setProperty("--pct",`${n}%`),o.textContent=p(n),r)try{r.setVolume(n)}catch{}})}let s=()=>{let i=d[u];i?.url&&window.__openStreamViewer?.({url:i.url,title:i.title,isMv:!0})};e("#mbar-expand").addEventListener("click",s),e("#mbar-thumb-overlay").addEventListener("click",s),e("#mbar-track-info-btn").addEventListener("click",s),e("#mbar-progress-track").addEventListener("click",i=>{if(!r)return;let l=i.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(1,(i.clientX-l.left)/l.width));try{let c=r.getDuration?.()||0;c>0&&r.seekTo(n*c,!0)}catch{}}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!e("#music-bar")?.hidden&&h()})}function q(t,a=0){t?.length&&(d=t.slice(),u=Math.max(0,Math.min(a,d.length-1)),f(u))}function k(){d.length&&(u=(u+1)%d.length,f(u))}function C(){d.length&&(u=(u-1+d.length)%d.length,f(u))}function h(){let t=e("#music-bar");if(!t)return;if(t.hidden=!0,document.body.classList.remove("has-music-bar"),L(),r){try{r.destroy()}catch{}r=null}d=[],u=-1;let a=e("#mbar-video-wrap");a&&(a.innerHTML="")}function z(){if(r)try{r.pauseVideo()}catch{}}function H(){return!e("#music-bar")?.hidden}function f(t){let a=d[t];if(!a)return;V(a),I();let o=y(a.url);o&&(m&&m(),P(()=>{let s=e("#mbar-video-wrap");if(!s)return;if(r)try{r.loadVideoById({videoId:o,startSeconds:0});return}catch{}s.innerHTML="";let i=document.createElement("div");s.appendChild(i);try{r=new window.YT.Player(i,{videoId:o,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1},events:{onReady:l=>{let n=_();try{l.target.setVolume(n)}catch{}let c=e("#mbar-vol-slider");c&&(c.value=n,c.style.setProperty("--pct",`${n}%`));let v=e("#mbar-vol-btn");v&&(v.textContent=p(n)),g()},onStateChange:l=>{let n=l.data===window.YT?.PlayerState?.PLAYING,c=e("#mbar-play");c&&c.setAttribute("data-playing",n?"1":"0"),n&&g(),l.data===window.YT?.PlayerState?.ENDED&&k()}}})}catch{}}))}function V(t){let a=e("#mbar-title"),o=e("#mbar-sub"),s=e("#mbar-type-badge"),i=e("#mbar-queue-info"),l=e("#mbar-prev"),n=e("#mbar-next");if(a&&(a.textContent=t.title||"\u2014"),o&&(t.type==="cover"?o.textContent=t.originalArtist||"\u30AB\u30D0\u30FC\u66F2":t.type==="office"?o.textContent="Re:AcT":t.type==="character"?o.textContent=t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3":o.textContent="\u304B\u306A\u3046\u30AA\u30EA\u30B8\u30CA\u30EB"),s){let c={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9",cover:"\u30AB\u30D0\u30FC"};s.textContent=c[t.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB",s.dataset.type=t.type}i&&(i.textContent=d.length>1?`${u+1} / ${d.length}`:""),l&&(l.disabled=d.length<=1),n&&(n.disabled=d.length<=1)}function I(){let t=e("#music-bar");t&&(t.hidden=!1,document.body.classList.add("has-music-bar"))}function E(){if(r)try{r.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?r.pauseVideo():r.playVideo()}catch{}}function g(){L(),b=setInterval(()=>{if(r)try{let t=r.getDuration?.()||0,a=r.getCurrentTime?.()||0,o=t>0?Math.min(a/t*100,100):0,s=e("#mbar-progress-fill");s&&(s.style.width=`${o}%`)}catch{}},500)}function L(){b&&(clearInterval(b),b=null)}export{h as closeMusicPlayer,R as initMusicPlayer,H as isMusicBarVisible,$ as notifyYtReady,z as pauseMusicPlayer,q as playMusicQueue,k as playNext,C as playPrev,A as setApiLoader};
