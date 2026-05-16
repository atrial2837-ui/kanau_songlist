const VALID_TABS = new Set(['dashboard', 'ranking', 'songs', 'timeline', 'analytics']);
const VALID_CHANNELS = new Set(['new', 'old', 'all']);
const DEFAULTS = {
  tab: 'dashboard',
  channel: 'new',
  q: '',
  title: '',
  artist: '',
};

export function readUrlState() {
  const params = new URLSearchParams(window.location.search);
  const rawTab = params.get('tab');
  const rawChannel = params.get('ch');
  return {
    tab: VALID_TABS.has(rawTab) ? rawTab : DEFAULTS.tab,
    channel: VALID_CHANNELS.has(rawChannel) ? rawChannel : DEFAULTS.channel,
    q: params.get('q') || DEFAULTS.q,
    title: params.get('title') || DEFAULTS.title,
    artist: params.get('artist') || DEFAULTS.artist,
  };
}

export function writeUrlState(next = {}, options = {}) {
  const merged = { ...readUrlState(), ...next };
  const params = new URLSearchParams();
  if (merged.tab !== DEFAULTS.tab) params.set('tab', merged.tab);
  if (merged.channel !== DEFAULTS.channel) params.set('ch', merged.channel);
  if (merged.q) params.set('q', merged.q);
  if (merged.title) params.set('title', merged.title);
  if (merged.artist) params.set('artist', merged.artist);
  const search = params.toString();
  const url = search ? `${window.location.pathname}?${search}` : window.location.pathname;
  const method = options.replace ? 'replaceState' : 'pushState';
  window.history[method](null, '', url);
  return merged;
}
