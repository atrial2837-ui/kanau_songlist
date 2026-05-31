export const state = {
  // multi-channel data
  channelData: null,  // { channels: { new, old }, combined }
  channel: 'new',     // 'new' | 'old' | 'all'
  data: null,         // currently active channel's dataset (set by main.js on switch)

  activeTab: 'dashboard',
  audience: 'listener',

  // timeline
  timelineLimit: 12,
  timelineFilter: null,
  timelineFocus: null,
  timelineSort: 'date-desc',

  // songs
  songsQuery: '',
  songsSort: 'count-desc',
  songsLimit: 100,
  songsFilter: 'all',
  songsGenre: 'all',
  songsSeason: 'all',
  songsView: 'comfortable',
  singerMode: false,
  singerPreset: 'all',
  setlist: {
    theme: '',
    copyFormat: 'simple',
    items: [],
  },
  setlistExpanded: false,

  // ranking
  rankingLimit: 50,
};

const listeners = new Set();
export const onStateChange = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
export const emit = (event) => { for (const fn of listeners) fn(event); };
