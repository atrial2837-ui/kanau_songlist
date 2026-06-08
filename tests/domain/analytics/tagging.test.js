import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  inferSeasonTags,
  inferMoodTags,
  singerTags,
  trendLabel,
} from '../../../src/domain/analytics/tagging.js';

describe('tagging', () => {
  it('inferSeasonTags: 夏キーワード', () => {
    const tags = inferSeasonTags({ title: '青と夏', artist: 'test' });
    assert.ok(tags.includes('夏'));
  });

  it('singerTags: 定番', () => {
    assert.ok(singerTags({ count: 10 }).includes('定番'));
  });

  it('trendLabel: 履歴未確認', () => {
    assert.equal(trendLabel({}), '履歴未確認');
  });

  it('trendLabel: 最近', () => {
    assert.equal(trendLabel({ lastSung: '2026-05-01', daysSinceLast: 10, count: 3 }), '最近');
  });

  it('inferMoodTags: chill', () => {
    const tags = inferMoodTags({ title: 'チルいカフェ', artist: 'Lofi Artist', genre: 'J-POP' });
    assert.ok(tags.includes('chill'));
  });

  it('inferMoodTags: 激しい', () => {
    const tags = inferMoodTags({ title: '激ロック', artist: 'Metal Band', genre: 'アニソン' });
    assert.ok(tags.includes('激しい'));
  });

  it('inferMoodTags: ノスタルジック', () => {
    const tags = inferMoodTags({ title: 'あの日の青春', artist: 'Nostalgic', genre: 'J-POP' });
    assert.ok(tags.includes('ノスタルジック'));
  });

  it('inferMoodTags: エモい', () => {
    const tags = inferMoodTags({ title: '夕焼けの別れ', artist: 'Emo Artist', genre: 'J-POP' });
    assert.ok(tags.includes('エモい'));
  });

  it('inferMoodTags: 和風', () => {
    const tags = inferMoodTags({ title: '桜の花', artist: '和風 Artist', genre: 'J-POP' });
    assert.ok(tags.includes('和風'));
  });

  it('inferMoodTags: アコースティック', () => {
    const tags = inferMoodTags({ title: 'アコースティックギター', artist: 'Acoustic', genre: 'J-POP' });
    assert.ok(tags.includes('アコースティック'));
  });
});
