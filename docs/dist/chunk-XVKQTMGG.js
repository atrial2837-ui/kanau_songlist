import{H as y,a}from"./chunk-FKVR6ZKV.js";var c=[],d=-1,r=null,b=null,x=!1,w=[],m=null,_=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),C=t=>localStorage.setItem("kanaVol",String(t)),p=t=>t===0?"\u{1F507}":t<50?"\u{1F509}":"\u{1F50A}";function $(){x=!0,w.splice(0).forEach(t=>t())}function A(t){m=t}function L(t){if(x&&window.YT?.Player){t();return}w.push(t)}function R(){if(a("#music-bar"))return;let t=document.createElement("div");t.id="music-bar",t.hidden=!0,t.innerHTML=`
    <div class="mbar-progress-track" id="mbar-progress-track">
      <div class="mbar-progress-fill" id="mbar-progress-fill"></div>
    </div>
    <div class="mbar-body">
      <div class="mbar-track-info">
        <div class="mbar-video-wrap" id="mbar-video-wrap"></div>
        <div class="mbar-text">
          <span class="mbar-title" id="mbar-title">\u2014</span>
          <span class="mbar-sub"   id="mbar-sub">\u2014</span>
        </div>
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
    </div>`,document.body.appendChild(t),a("#mbar-play").addEventListener("click",E),a("#mbar-prev").addEventListener("click",k),a("#mbar-next").addEventListener("click",M),a("#mbar-close").addEventListener("click",h);let n=a("#mbar-vol-slider"),o=a("#mbar-vol-btn");if(n){let e=_();n.value=e,n.style.setProperty("--pct",`${e}%`),o&&(o.textContent=p(e)),n.addEventListener("input",l=>{let i=parseInt(l.target.value);if(l.target.style.setProperty("--pct",`${i}%`),C(i),o&&(o.textContent=p(i)),r)try{r.setVolume(i)}catch{}})}if(o){let e=80;o.addEventListener("click",()=>{if(!n)return;let l=parseInt(n.value),i=l>0?0:e||80;if(l>0&&(e=l),n.value=i,n.style.setProperty("--pct",`${i}%`),o.textContent=p(i),r)try{r.setVolume(i)}catch{}})}a("#mbar-expand").addEventListener("click",()=>{let e=c[d];e?.url&&window.__openStreamViewer?.({url:e.url,title:e.title,isMv:!0})}),a("#mbar-progress-track").addEventListener("click",e=>{if(!r)return;let l=e.currentTarget.getBoundingClientRect(),i=Math.max(0,Math.min(1,(e.clientX-l.left)/l.width));try{let s=r.getDuration?.()||0;s>0&&r.seekTo(i*s,!0)}catch{}}),document.addEventListener("keydown",e=>{e.key==="Escape"&&!a("#music-bar")?.hidden&&h()})}function q(t,n=0){t?.length&&(c=t.slice(),d=Math.max(0,Math.min(n,c.length-1)),f(d))}function M(){c.length&&(d=(d+1)%c.length,f(d))}function k(){c.length&&(d=(d-1+c.length)%c.length,f(d))}function h(){let t=a("#music-bar");if(!t)return;if(t.hidden=!0,document.body.classList.remove("has-music-bar"),P(),r){try{r.destroy()}catch{}r=null}c=[],d=-1;let n=a("#mbar-video-wrap");n&&(n.innerHTML="")}function z(){if(r)try{r.pauseVideo()}catch{}}function H(){return!a("#music-bar")?.hidden}function f(t){let n=c[t];if(!n)return;V(n),I();let o=y(n.url);o&&(m&&m(),L(()=>{let e=a("#mbar-video-wrap");if(!e)return;if(r)try{r.loadVideoById({videoId:o,startSeconds:0});return}catch{}e.innerHTML="";let l=document.createElement("div");e.appendChild(l);try{r=new window.YT.Player(l,{videoId:o,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1},events:{onReady:i=>{let s=_();try{i.target.setVolume(s)}catch{}let u=a("#mbar-vol-slider");u&&(u.value=s,u.style.setProperty("--pct",`${s}%`));let v=a("#mbar-vol-btn");v&&(v.textContent=p(s)),g()},onStateChange:i=>{let s=i.data===window.YT?.PlayerState?.PLAYING,u=a("#mbar-play");u&&u.setAttribute("data-playing",s?"1":"0"),s&&g(),i.data===window.YT?.PlayerState?.ENDED&&M()}}})}catch{}}))}function V(t){let n=a("#mbar-title"),o=a("#mbar-sub"),e=a("#mbar-type-badge"),l=a("#mbar-queue-info"),i=a("#mbar-prev"),s=a("#mbar-next");if(n&&(n.textContent=t.title||"\u2014"),o&&(t.type==="cover"?o.textContent=t.originalArtist||"\u30AB\u30D0\u30FC\u66F2":t.type==="office"?o.textContent="Re:AcT":t.type==="character"?o.textContent=t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3":o.textContent="\u304B\u306A\u3046\u30AA\u30EA\u30B8\u30CA\u30EB"),e){let u={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9",cover:"\u30AB\u30D0\u30FC"};e.textContent=u[t.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB",e.dataset.type=t.type}l&&(l.textContent=c.length>1?`${d+1} / ${c.length}`:""),i&&(i.disabled=c.length<=1),s&&(s.disabled=c.length<=1)}function I(){let t=a("#music-bar");t&&(t.hidden=!1,document.body.classList.add("has-music-bar"))}function E(){if(r)try{r.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?r.pauseVideo():r.playVideo()}catch{}}function g(){P(),b=setInterval(()=>{if(r)try{let t=r.getDuration?.()||0,n=r.getCurrentTime?.()||0,o=t>0?Math.min(n/t*100,100):0,e=a("#mbar-progress-fill");e&&(e.style.width=`${o}%`)}catch{}},500)}function P(){b&&(clearInterval(b),b=null)}export{h as closeMusicPlayer,R as initMusicPlayer,H as isMusicBarVisible,$ as notifyYtReady,z as pauseMusicPlayer,q as playMusicQueue,M as playNext,k as playPrev,A as setApiLoader};
