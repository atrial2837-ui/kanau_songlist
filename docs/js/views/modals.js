// チャンネル情報・各種モーダル(ヘルプ / ウェルカムTip)
import { $, escapeHtml } from '../utils.js';

// ─── チャンネル情報モーダル ────────────────────────────────────────────────────

const CH_INFO = {
  new: {
    name: '夢川かなう - Kanau Yumekawa',
    handle: '@YumekawaKanau',
    url: 'https://www.youtube.com/@YumekawaKanau',
    label: '新ch',
    desc: 'Re:AcT所属の海のお姫さまになりたい、泡沫たゆたうVsinger🐟\n夢川かなうじゃよ、ちょっと休憩していこ～\n\nイメージ星座－魚座\n星言葉は「魅力あふれる芸術的才能」',
    links: [
      { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>', label: 'X（旧Twitter）',    url: 'https://twitter.com/Kanau_Yumekawa' },
      { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>', label: 'official store', url: 'https://react.booth.pm' },
      { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>', label: 'official site',  url: 'https://v-react.com' },
      { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>', label: 'Apple Music',    url: 'https://music.apple.com/jp/artist/1614216914' },
      { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>', label: 'Spotify',        url: 'https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ' },
    ],
    avatarUrl: 'https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo',
    bannerUrl: 'https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
  },
  old: {
    name: '夢川かなう / Kanau ch',
    handle: '@Kanau_Yumekawa',
    url: 'https://www.youtube.com/@Kanau_Yumekawa',
    label: '旧ch',
    desc: 'Re:AcT所属の海のお姫さまになりたい、泡沫たゆたうVsinger🐟\n夢川かなうじゃよ、ちょっと休憩していこう\n\nイメージ星座－魚座\n星言葉は「魅力あふれる芸術的才能」',
    links: [
      { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.58 7.17a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.4A2.51 2.51 0 0 0 2.42 7.17 26.9 26.9 0 0 0 2 12a26.9 26.9 0 0 0 .42 4.83 2.51 2.51 0 0 0 1.77 1.77c1.56.4 7.81.4 7.81.4s6.25 0 7.81-.4a2.51 2.51 0 0 0 1.77-1.77A26.9 26.9 0 0 0 22 12a26.9 26.9 0 0 0-.42-4.83ZM10 15.43V8.57L16 12l-6 3.43Z"/></svg>', label: 'YouTube新ch', url: 'https://www.youtube.com/channel/UCDQkIK-Md2XDbDWN4nKyzIQ' },
      { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>', label: 'X（旧Twitter）',          url: 'https://twitter.com/Kanau_Yumekawa' },
    ],
    avatarUrl: 'https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj',
    bannerUrl: 'https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
  },
};

function _buildChCard(key) {
  const info = CH_INFO[key];
  if (!info) return '';

  // バナー部分（画像URL があれば img、なければグラデーション）
  const bannerInner = info.bannerUrl
    ? `<img class="ch-card-banner-img" src="${escapeHtml(info.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${escapeHtml(info.label)}</span>`
    : `<span class="ch-card-banner-label">${escapeHtml(info.label)}</span>`;

  // アバター部分（画像URL があれば img、なければ文字）
  const avatarInner = info.avatarUrl
    ? `<img class="ch-card-avatar-img" src="${escapeHtml(info.avatarUrl)}" alt="${escapeHtml(info.name)}" loading="lazy" referrerpolicy="no-referrer">`
    : (key === 'new' ? '新' : '旧');

  // 説明文（改行対応）
  const descHtml = info.desc
    ? `<p class="ch-card-desc">${info.desc.split('\n').map(l => escapeHtml(l)).join('<br>')}</p>`
    : '';

  // リンク一覧
  const linksHtml = info.links?.length ? `
    <div class="ch-card-links">
      ${info.links.map(l => `
        <a class="ch-card-link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener">
          <span class="ch-card-link-icon" aria-hidden="true">${l.icon}</span>
          <span>${escapeHtml(l.label)}</span>
        </a>`).join('')}
    </div>` : '';

  return `
    <div class="ch-card ch-card--${key}">
      <div class="ch-card-banner ch-card-banner--${key}${info.bannerUrl ? ' ch-card-banner--img' : ''}">
        ${bannerInner}
      </div>
      <div class="ch-card-body">
        <div class="ch-card-header">
          <div class="ch-card-avatar ch-card-avatar--${key}${info.avatarUrl ? ' ch-card-avatar--img' : ''}">${avatarInner}</div>
          <div class="ch-card-meta">
            <div class="ch-card-name">${escapeHtml(info.name)}</div>
            <div class="ch-card-handle">${escapeHtml(info.handle)}</div>
          </div>
        </div>
        ${descHtml}
        ${linksHtml}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${escapeHtml(info.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTubeチャンネルへ
          </a>
        </div>
      </div>
    </div>`;
}

function openChannelModal(chKey) {
  const modal = $('#ch-modal');
  const body  = $('#ch-modal-body');
  if (!modal || !body) return;

  // chKey が 'new' または 'old' → 1枚、それ以外(all/undefined) → 両方
  let html = '';
  if (chKey === 'new') {
    html = _buildChCard('new');
  } else if (chKey === 'old') {
    html = _buildChCard('old');
  } else {
    html = _buildChCard('new') + _buildChCard('old');
  }

  body.innerHTML = html;
  modal.hidden = false;
  $('#ch-modal-close')?.focus();
}

export function initChannelModal() {
  const modal    = $('#ch-modal');
  const closeBtn = $('#ch-modal-close');
  if (!modal || !closeBtn) return;

  const close = () => { modal.hidden = true; };
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });

  // Official Channel ボタン
  document.querySelectorAll('[data-ch-modal]').forEach(btn => {
    btn.addEventListener('click', () => openChannelModal(btn.dataset.chModal));
  });
}

export function initHelpModal() {
  const modal = $('#help-modal');
  const openBtn = $('#help-btn');
  const closeBtn = $('#help-close');
  if (!modal || !openBtn || !closeBtn) return;

  const open = () => {
    modal.hidden = false;
    closeBtn.focus();
  };
  const close = () => {
    modal.hidden = true;
    openBtn.focus();
  };

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) close();
  });
}

export function initWelcomeTip() {
  const tip = $('#welcome-tip');
  const close = $('#welcome-close');
  if (!tip || !close) return;
  if (window.matchMedia('(max-width: 760px)').matches) return;
  if (localStorage.getItem('kanau-welcome-tip-dismissed') === '1') return;
  const show = () => { tip.hidden = false; };
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(show, { timeout: 5000 });
  } else {
    window.setTimeout(show, 2500);
  }
  close.addEventListener('click', () => {
    tip.hidden = true;
    localStorage.setItem('kanau-welcome-tip-dismissed', '1');
  });
}
