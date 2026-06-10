import{H as m,a as e}from"./chunk-FKVR6ZKV.js";var n=[],o=-1,r=null,u=null,h=!1,g=[];function C(){h=!0,g.splice(0).forEach(t=>t())}function x(t){if(h&&window.YT?.Player){t();return}g.push(t)}function I(){if(e("#music-bar"))return;let t=document.createElement("div");t.id="music-bar",t.hidden=!0,t.innerHTML=`
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
    </div>`,document.body.appendChild(t),e("#mbar-play").addEventListener("click",k),e("#mbar-prev").addEventListener("click",_),e("#mbar-next").addEventListener("click",v),e("#mbar-close").addEventListener("click",f),e("#mbar-progress-track").addEventListener("click",a=>{if(!r)return;let i=a.currentTarget.getBoundingClientRect(),s=Math.max(0,Math.min(1,(a.clientX-i.left)/i.width));try{let l=r.getDuration?.()||0;l>0&&r.seekTo(s*l,!0)}catch{}}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!e("#music-bar")?.hidden&&f()})}function Y(t,a=0){t?.length&&(n=t.slice(),o=Math.max(0,Math.min(a,n.length-1)),b(o))}function v(){n.length&&(o=(o+1)%n.length,b(o))}function _(){n.length&&(o=(o-1+n.length)%n.length,b(o))}function f(){let t=e("#music-bar");if(!t)return;if(t.hidden=!0,document.body.classList.remove("has-music-bar"),w(),r){try{r.destroy()}catch{}r=null}n=[],o=-1;let a=e("#mbar-video-wrap");a&&(a.innerHTML="")}function V(){if(r)try{r.pauseVideo()}catch{}}function B(){return!e("#music-bar")?.hidden}function b(t){let a=n[t];if(!a)return;M(a),P();let i=m(a.url);i&&x(()=>{let s=e("#mbar-video-wrap");if(!s)return;if(r)try{r.loadVideoById({videoId:i,startSeconds:0});return}catch{}s.innerHTML="";let l=document.createElement("div");s.appendChild(l);try{r=new window.YT.Player(l,{videoId:i,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1},events:{onReady:()=>y(),onStateChange:c=>{let d=c.data===window.YT?.PlayerState?.PLAYING,p=e("#mbar-play");p&&p.setAttribute("data-playing",d?"1":"0"),d&&y(),c.data===window.YT?.PlayerState?.ENDED&&v()}}})}catch{}})}function M(t){let a=e("#mbar-title"),i=e("#mbar-sub"),s=e("#mbar-type-badge"),l=e("#mbar-queue-info"),c=e("#mbar-prev"),d=e("#mbar-next");a&&(a.textContent=t.title||"\u2014"),i&&(i.textContent=t.type==="cover"&&t.originalArtist?t.originalArtist:"\u304B\u306A\u3046\u30AA\u30EA\u30B8\u30CA\u30EB"),s&&(s.textContent=t.type==="cover"?"\u30AB\u30D0\u30FC":"\u30AA\u30EA\u30B8\u30CA\u30EB",s.dataset.type=t.type),l&&(l.textContent=n.length>1?`${o+1} / ${n.length}`:""),c&&(c.disabled=n.length<=1),d&&(d.disabled=n.length<=1)}function P(){let t=e("#music-bar");t&&(t.hidden=!1,document.body.classList.add("has-music-bar"))}function k(){if(r)try{r.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?r.pauseVideo():r.playVideo()}catch{}}function y(){w(),u=setInterval(()=>{if(r)try{let t=r.getDuration?.()||0,a=r.getCurrentTime?.()||0,i=t>0?Math.min(a/t*100,100):0,s=e("#mbar-progress-fill");s&&(s.style.width=`${i}%`)}catch{}},500)}function w(){u&&(clearInterval(u),u=null)}export{f as closeMusicPlayer,I as initMusicPlayer,B as isMusicBarVisible,C as notifyYtReady,V as pauseMusicPlayer,Y as playMusicQueue,v as playNext,_ as playPrev};
