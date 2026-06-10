import{H as m,a as e}from"./chunk-FKVR6ZKV.js";var i=[],o=-1,r=null,b=null,h=!1,g=[];function E(){h=!0,g.splice(0).forEach(t=>t())}function x(t){if(h&&window.YT?.Player){t();return}g.push(t)}function I(){if(e("#music-bar"))return;let t=document.createElement("div");t.id="music-bar",t.hidden=!0,t.innerHTML=`
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
        <span class="mbar-queue-info" id="mbar-queue-info"></span>
        <button class="mbar-close-btn" id="mbar-close" type="button" aria-label="\u9589\u3058\u308B">\u2715</button>
      </div>
    </div>`,document.body.appendChild(t),e("#mbar-play").addEventListener("click",k),e("#mbar-prev").addEventListener("click",_),e("#mbar-next").addEventListener("click",v),e("#mbar-close").addEventListener("click",f),e("#mbar-progress-track").addEventListener("click",a=>{if(!r)return;let n=a.currentTarget.getBoundingClientRect(),s=Math.max(0,Math.min(1,(a.clientX-n.left)/n.width));try{let c=r.getDuration?.()||0;c>0&&r.seekTo(s*c,!0)}catch{}}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!e("#music-bar")?.hidden&&f()})}function Y(t,a=0){t?.length&&(i=t.slice(),o=Math.max(0,Math.min(a,i.length-1)),p(o))}function v(){i.length&&(o=(o+1)%i.length,p(o))}function _(){i.length&&(o=(o-1+i.length)%i.length,p(o))}function f(){let t=e("#music-bar");if(!t)return;if(t.hidden=!0,document.body.classList.remove("has-music-bar"),w(),r){try{r.destroy()}catch{}r=null}i=[],o=-1;let a=e("#mbar-video-wrap");a&&(a.innerHTML="")}function V(){if(r)try{r.pauseVideo()}catch{}}function B(){return!e("#music-bar")?.hidden}function p(t){let a=i[t];if(!a)return;M(a),P();let n=m(a.url);n&&x(()=>{let s=e("#mbar-video-wrap");if(!s)return;if(r)try{r.loadVideoById({videoId:n,startSeconds:0});return}catch{}s.innerHTML="";let c=document.createElement("div");s.appendChild(c);try{r=new window.YT.Player(c,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1},events:{onReady:()=>y(),onStateChange:l=>{let d=l.data===window.YT?.PlayerState?.PLAYING,u=e("#mbar-play");u&&u.setAttribute("data-playing",d?"1":"0"),d&&y(),l.data===window.YT?.PlayerState?.ENDED&&v()}}})}catch{}})}function M(t){let a=e("#mbar-title"),n=e("#mbar-sub"),s=e("#mbar-type-badge"),c=e("#mbar-queue-info"),l=e("#mbar-prev"),d=e("#mbar-next");if(a&&(a.textContent=t.title||"\u2014"),n&&(t.type==="cover"?n.textContent=t.originalArtist||"\u30AB\u30D0\u30FC\u66F2":t.type==="office"?n.textContent="\u4E8B\u52D9\u6240\u30AA\u30EA\u66F2":t.type==="character"?n.textContent=t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3":n.textContent="\u304B\u306A\u3046\u30AA\u30EA\u30B8\u30CA\u30EB"),s){let u={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"\u4E8B\u52D9\u6240",character:"\u30AD\u30E3\u30E9",cover:"\u30AB\u30D0\u30FC"};s.textContent=u[t.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB",s.dataset.type=t.type}c&&(c.textContent=i.length>1?`${o+1} / ${i.length}`:""),l&&(l.disabled=i.length<=1),d&&(d.disabled=i.length<=1)}function P(){let t=e("#music-bar");t&&(t.hidden=!1,document.body.classList.add("has-music-bar"))}function k(){if(r)try{r.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?r.pauseVideo():r.playVideo()}catch{}}function y(){w(),b=setInterval(()=>{if(r)try{let t=r.getDuration?.()||0,a=r.getCurrentTime?.()||0,n=t>0?Math.min(a/t*100,100):0,s=e("#mbar-progress-fill");s&&(s.style.width=`${n}%`)}catch{}},500)}function w(){b&&(clearInterval(b),b=null)}export{f as closeMusicPlayer,I as initMusicPlayer,B as isMusicBarVisible,E as notifyYtReady,V as pauseMusicPlayer,Y as playMusicQueue,v as playNext,_ as playPrev};
