import{H as v,I as _,a as r,d as w}from"./chunk-PRFEE4R6.js";var c=[],d=-1,n=null,f=null,k=!1,C=[],h=null,P=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),I=t=>localStorage.setItem("kanaVol",String(t)),y=t=>t===0?"\u{1F507}":t<50?"\u{1F509}":"\u{1F50A}";function R(){k=!0,C.splice(0).forEach(t=>t())}function q(t){h=t}function E(t){if(k&&window.YT?.Player){t();return}C.push(t)}function z(){if(r("#music-bar"))return;let t=document.createElement("div");t.id="music-bar",t.hidden=!0,t.innerHTML=`
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
    </div>`,document.body.appendChild(t),r("#mbar-play").addEventListener("click",$),r("#mbar-prev").addEventListener("click",T),r("#mbar-next").addEventListener("click",V),r("#mbar-close").addEventListener("click",M);let a=r("#mbar-vol-slider"),e=r("#mbar-vol-btn");if(a){let i=P();a.value=i,a.style.setProperty("--pct",`${i}%`),e&&(e.textContent=y(i)),a.addEventListener("input",o=>{let l=parseInt(o.target.value);if(o.target.style.setProperty("--pct",`${l}%`),I(l),e&&(e.textContent=y(l)),n)try{n.setVolume(l)}catch{}})}if(e){let i=80;e.addEventListener("click",()=>{if(!a)return;let o=parseInt(a.value),l=o>0?0:i||80;if(o>0&&(i=o),a.value=l,a.style.setProperty("--pct",`${l}%`),e.textContent=y(l),n)try{n.setVolume(l)}catch{}})}let s=()=>{let i=c[d];if(!i?.url)return;let o=0;try{o=n?.getCurrentTime?.()||0}catch{}let l=i._stream||{url:i.url,title:i.title,isMv:!0};B({hideBar:!0}),window.__openStreamViewer?.(l,o)};r("#mbar-expand").addEventListener("click",s),r("#mbar-thumb-overlay").addEventListener("click",s),r("#mbar-track-info-btn").addEventListener("click",s),r("#mbar-progress-track").addEventListener("click",i=>{if(!n)return;let o=i.currentTarget.getBoundingClientRect(),l=Math.max(0,Math.min(1,(i.clientX-o.left)/o.width));try{let u=n.getDuration?.()||0;u>0&&n.seekTo(l*u,!0)}catch{}}),document.addEventListener("keydown",i=>{if(i.key!=="Escape")return;let o=document.getElementById("stream-viewer");o&&!o.hidden||r("#music-bar")?.hidden||M()})}function D(t,a=0){t?.length&&(c=t.slice(),d=Math.max(0,Math.min(a,c.length-1)),p(d))}function V(){c.length&&(d=(d+1)%c.length,p(d))}function T(){c.length&&(d=(d-1+c.length)%c.length,p(d))}function M(){let t=r("#music-bar");if(!t)return;if(t.hidden=!0,document.body.classList.remove("has-music-bar"),g(),n){try{n.destroy()}catch{}n=null}c=[],d=-1;let a=r("#mbar-video-wrap");a&&(a.innerHTML="")}function N(){if(n)try{n.pauseVideo()}catch{}}function B(t={}){if(g(),n){try{n.destroy()}catch{}n=null}let a=r("#mbar-video-wrap");if(a){a.innerHTML="";let e=c[d],s=e?v(e.url):"";s&&(a.innerHTML=`<img src="${w(_(s))}" alt="" style="width:100%;height:100%;object-fit:cover;">`)}if(r("#mbar-play")?.setAttribute("data-playing","0"),t.hideBar){let e=r("#music-bar");e&&(e.hidden=!0),document.body.classList.remove("has-music-bar")}}function G(){return!r("#music-bar")?.hidden}function Q(t,a=0){if(!t?.url)return;let e=c.findIndex(s=>s.url===t.url);if(e>=0){d=e,p(e,a);return}c=[t],d=0,p(0,a)}function p(t,a=0){let e=c[t];if(!e)return;S(e),Y();let s=v(e.url);if(!s)return;h&&h();let i=Math.max(0,Math.floor(a));E(()=>{let o=r("#mbar-video-wrap");if(!o)return;if(n)try{n.loadVideoById({videoId:s,startSeconds:i});return}catch{}o.innerHTML="";let l=document.createElement("div");o.appendChild(l);try{n=new window.YT.Player(l,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...i>1?{start:i}:{}},events:{onReady:u=>{let b=P();try{u.target.setVolume(b)}catch{}let m=r("#mbar-vol-slider");m&&(m.value=b,m.style.setProperty("--pct",`${b}%`));let x=r("#mbar-vol-btn");x&&(x.textContent=y(b)),L()},onStateChange:u=>{let b=u.data===window.YT?.PlayerState?.PLAYING,m=r("#mbar-play");m&&m.setAttribute("data-playing",b?"1":"0"),b&&L(),u.data===window.YT?.PlayerState?.ENDED&&V()}}})}catch{}})}function S(t){let a=r("#mbar-title"),e=r("#mbar-sub"),s=r("#mbar-type-badge"),i=r("#mbar-queue-info"),o=r("#mbar-prev"),l=r("#mbar-next");if(a&&(a.textContent=t.title||"\u2014"),e&&(t.sub?e.textContent=t.sub:t.type==="cover"?e.textContent=t.originalArtist||"\u30AB\u30D0\u30FC\u66F2":t.type==="office"?e.textContent="Re:AcT":t.type==="character"?e.textContent=t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3":e.textContent="\u304B\u306A\u3046\u30AA\u30EA\u30B8\u30CA\u30EB"),s){let u={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9",cover:"\u30AB\u30D0\u30FC",stream:"\u6B4C\u67A0"};s.textContent=u[t.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB",s.dataset.type=t.type}i&&(i.textContent=c.length>1?`${d+1} / ${c.length}`:""),o&&(o.disabled=c.length<=1),l&&(l.disabled=c.length<=1)}function Y(){let t=r("#music-bar");t&&(t.hidden=!1,document.body.classList.add("has-music-bar"))}function $(){if(!n){d>=0&&c.length&&p(d);return}try{n.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?n.pauseVideo():n.playVideo()}catch{}}function L(){g(),f=setInterval(()=>{if(n)try{let t=n.getDuration?.()||0,a=n.getCurrentTime?.()||0,e=t>0?Math.min(a/t*100,100):0,s=r("#mbar-progress-fill");s&&(s.style.width=`${e}%`)}catch{}},500)}function g(){f&&(clearInterval(f),f=null)}export{M as closeMusicPlayer,z as initMusicPlayer,G as isMusicBarVisible,R as notifyYtReady,N as pauseMusicPlayer,Q as playMusicBarVideo,D as playMusicQueue,V as playNext,T as playPrev,B as releaseMusicPlayerVideo,q as setApiLoader};
