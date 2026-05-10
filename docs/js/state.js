export const state = {
  // multi-channel data
  channelData: null,  // { channels: { new, old }, combined }
  channel: 'new',     // 'new' | 'old' | 'all'
  data: null,         // currently active channel's dataset (set by main.js on switch)

  activeTab: 'dashboard',

  // timeline
  timelineLimit: 12,
  timelineFilter: null,

  // songs
  songsQuery: '',
  songsSort: 'count-desc',
  songsLimit: 100,
  songsFilter: 'all',
  songsGenre: 'all',

  // ranking
  rankingLimit: 50,
};

const listeners = new Set();
export const onStateChange = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
export const emit = (event) => { for (const fn of listeners) fn(event); };
