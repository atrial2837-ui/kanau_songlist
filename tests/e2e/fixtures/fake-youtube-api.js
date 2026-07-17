// YouTube IFrame API の決定論的フェイク。
// Playwright が https://www.youtube.com/iframe_api へのリクエストをこのスクリプトで
// 差し替える。実 YouTube に依存せず、プレイヤーの生成・破棄・所有権移譲を検証する。
//
// 検証用の記録は window.__fakeYT に集約される:
//   __fakeYT.summary() → { created, destroyed, live: [{id, videoId, state, t}] }
//   __fakeYT.calls     → [{id, method, args}] 全メソッド呼び出しログ
(() => {
  if (window.YT && window.YT.Player) return;

  const registry = { created: 0, destroyed: 0, instances: [], calls: [] };
  window.__fakeYT = registry;
  registry.summary = () => ({
    created: registry.created,
    destroyed: registry.destroyed,
    live: registry.instances
      .filter((p) => !p._destroyed)
      .map((p) => ({ id: p._id, videoId: p._videoId, state: p._state, t: p._currentTime })),
  });

  const PlayerState = { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 };
  let nextId = 1;

  class Player {
    constructor(el, config = {}) {
      this._id = nextId++;
      registry.created++;
      registry.instances.push(this);

      // 実APIと同じく、渡された要素を iframe で置き換える
      const target = typeof el === 'string' ? document.getElementById(el) : el;
      this._iframe = document.createElement('iframe');
      this._iframe.className = 'fake-yt-iframe';
      this._iframe.dataset.fakePlayerId = String(this._id);
      this._iframe.src = 'about:blank';
      this._iframe.style.width = '100%';
      this._iframe.style.height = '100%';
      this._iframe.style.border = '0';
      if (target && target.parentNode) target.parentNode.replaceChild(this._iframe, target);

      this._videoId = config.videoId || null;
      this._state = PlayerState.UNSTARTED;
      this._currentTime = Number(config.playerVars?.start || 0);
      this._duration = 3600;
      this._volume = 100;
      this._muted = false;
      this._destroyed = false;
      this._events = config.events || {};
      this._timer = null;

      setTimeout(() => {
        if (this._destroyed) return;
        this._fire('onReady', { target: this });
        if (config.playerVars?.autoplay) this.playVideo();
      }, 0);
    }

    _log(method, args) { registry.calls.push({ id: this._id, method, args: args ?? [] }); }
    _fire(name, ev) { try { this._events[name]?.(ev); } catch (_) {} }
    _setState(s) {
      if (this._destroyed) return;
      this._state = s;
      this._fire('onStateChange', { target: this, data: s });
    }

    playVideo() {
      this._log('playVideo');
      if (this._destroyed) return;
      if (this._timer == null) {
        this._timer = setInterval(() => { this._currentTime += 0.25; }, 250);
      }
      this._setState(PlayerState.PLAYING);
    }
    pauseVideo() {
      this._log('pauseVideo');
      if (this._destroyed) return;
      clearInterval(this._timer);
      this._timer = null;
      this._setState(PlayerState.PAUSED);
    }
    stopVideo() { this._log('stopVideo'); this.pauseVideo(); }
    seekTo(sec) { this._log('seekTo', [sec]); if (!this._destroyed) this._currentTime = Number(sec) || 0; }
    loadVideoById(arg) {
      this._log('loadVideoById', [arg]);
      if (this._destroyed) return;
      const opts = typeof arg === 'string' ? { videoId: arg } : (arg || {});
      this._videoId = opts.videoId || null;
      this._currentTime = Number(opts.startSeconds || 0);
      this.playVideo();
    }
    cueVideoById(arg) {
      this._log('cueVideoById', [arg]);
      if (this._destroyed) return;
      const opts = typeof arg === 'string' ? { videoId: arg } : (arg || {});
      this._videoId = opts.videoId || null;
      this._currentTime = Number(opts.startSeconds || 0);
      this._setState(PlayerState.CUED);
    }
    getCurrentTime() { return this._currentTime; }
    getDuration() { return this._duration; }
    getPlayerState() { return this._state; }
    setVolume(v) { this._log('setVolume', [v]); this._volume = Number(v); }
    getVolume() { return this._volume; }
    mute() { this._muted = true; }
    unMute() { this._muted = false; }
    isMuted() { return this._muted; }
    setPlaybackQuality() {}
    setPlaybackQualityRange() {}
    setPlaybackRate() {}
    getIframe() { return this._iframe; }
    getVideoData() { return { video_id: this._videoId, title: 'fake video' }; }
    getVideoUrl() { return `https://www.youtube.com/watch?v=${this._videoId || ''}`; }
    addEventListener() {}
    removeEventListener() {}
    destroy() {
      this._log('destroy');
      if (this._destroyed) return;
      this._destroyed = true;
      registry.destroyed++;
      clearInterval(this._timer);
      this._timer = null;
      this._iframe.parentNode?.removeChild(this._iframe);
    }
  }

  window.YT = { Player, PlayerState, loaded: 1 };
  if (typeof window.onYouTubeIframeAPIReady === 'function') {
    setTimeout(() => window.onYouTubeIframeAPIReady(), 0);
  }
})();
