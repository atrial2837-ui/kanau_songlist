// 管理画面の打刻ツールで使う純粋関数のテスト。
// コメントの書式は配信の固定コメントに合わせた仕様なので、出力そのものを固定する。
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  COMMENT_TEMPLATES,
  DEFAULT_META_ROWS,
  formatSeconds,
  parseTimeInput,
  createMarks,
  setMark,
  nextUnmarkedIndex,
  endTargetIndex,
  findMarkIssues,
  predictSeek,
  nextAnchor,
  prevAnchor,
  nextJumpTarget,
  coverageState,
  streamOptionLabel,
  buildCommentText,
  buildSavePayload,
  marksFromItems,
} from '../../docs/js/admin/timestamp-marker.js';

const songs = () => [
  { title: '残酷な天使のテーゼ', artist: '高橋洋子' },
  { title: 'シリョクケンサ', artist: '40mP' },
  { title: '曲名のみ', artist: '' },
];

describe('formatSeconds', () => {
  it('1時間未満は m:ss', () => {
    assert.equal(formatSeconds(904), '15:04');
    assert.equal(formatSeconds(260), '4:20');
  });

  it('1時間以上は h:mm:ss', () => {
    assert.equal(formatSeconds(3647), '1:00:47');
    assert.equal(formatSeconds(8785), '2:26:25');
  });

  it('hms 指定なら1時間未満でも時を出す', () => {
    assert.equal(formatSeconds(904, 'hms'), '0:15:04');
  });

  it('ms 指定なら1時間を超えても分に繰り上げる', () => {
    assert.equal(formatSeconds(3647, 'ms'), '60:47');
  });

  it('未打刻は空文字', () => {
    assert.equal(formatSeconds(null), '');
    assert.equal(formatSeconds(undefined), '');
  });

  it('0秒は 0:00', () => {
    assert.equal(formatSeconds(0), '0:00');
  });
});

describe('parseTimeInput', () => {
  it('h:mm:ss / m:ss / 秒 を受け付ける', () => {
    assert.equal(parseTimeInput('1:00:47'), 3647);
    assert.equal(parseTimeInput('15:04'), 904);
    assert.equal(parseTimeInput('90'), 90);
  });

  it('前後の空白を許す', () => {
    assert.equal(parseTimeInput('  15:04 '), 904);
  });

  it('桁あふれや不正な文字は null', () => {
    assert.equal(parseTimeInput('1:75'), null);
    assert.equal(parseTimeInput('あ'), null);
    assert.equal(parseTimeInput('12:34:56:78'), null);
    assert.equal(parseTimeInput(''), null);
    assert.equal(parseTimeInput(null), null);
  });
});

describe('createMarks / setMark', () => {
  it('曲数ぶんの未打刻を作る', () => {
    assert.deepEqual(createMarks(2), [{ start: null, end: null }, { start: null, end: null }]);
    assert.deepEqual(createMarks(0), []);
  });

  it('開始と終了を別々に記録する', () => {
    let marks = createMarks(2);
    marks = setMark(marks, 0, 'start', 904);
    marks = setMark(marks, 0, 'end', 1160);
    assert.deepEqual(marks[0], { start: 904, end: 1160 });
    assert.deepEqual(marks[1], { start: null, end: null });
  });

  it('元の配列を変更しない', () => {
    const original = createMarks(1);
    setMark(original, 0, 'start', 100);
    assert.equal(original[0].start, null);
  });

  it('範囲外・不正な項目名は無視する', () => {
    const marks = createMarks(1);
    assert.equal(setMark(marks, 9, 'start', 100)[0].start, null);
    assert.equal(setMark(marks, 0, 'bogus', 100)[0].start, null);
  });

  it('null を渡すと打刻を消せる', () => {
    let marks = setMark(createMarks(1), 0, 'start', 100);
    marks = setMark(marks, 0, 'start', null);
    assert.equal(marks[0].start, null);
  });

  it('小数は切り捨て、負値は0にする', () => {
    assert.equal(setMark(createMarks(1), 0, 'start', 12.9)[0].start, 12);
    assert.equal(setMark(createMarks(1), 0, 'start', -5)[0].start, 0);
  });
});

describe('nextUnmarkedIndex', () => {
  it('開始が空の最初の位置を返す', () => {
    const marks = setMark(createMarks(3), 0, 'start', 10);
    assert.equal(nextUnmarkedIndex(marks), 1);
  });

  it('全部埋まっていれば -1', () => {
    let marks = createMarks(2);
    marks = setMark(marks, 0, 'start', 10);
    marks = setMark(marks, 1, 'start', 20);
    assert.equal(nextUnmarkedIndex(marks), -1);
  });

  it('開始位置を指定できる', () => {
    assert.equal(nextUnmarkedIndex(createMarks(3), 2), 2);
  });
});

describe('endTargetIndex', () => {
  it('開始を打った直後、対象が次に進んでいても直前の曲に入る', () => {
    // 1曲目の開始を打ち、対象は2曲目（未開始）へ進んだ状態
    const marks = setMark(createMarks(3), 0, 'start', 100);
    assert.equal(endTargetIndex(marks, 1), 0);
  });

  it('選択中の曲が開始済みならそこを対象にする', () => {
    let marks = setMark(createMarks(3), 0, 'start', 100);
    marks = setMark(marks, 1, 'start', 200);
    assert.equal(endTargetIndex(marks, 0), 0);
  });

  it('終了だけ空の曲が複数あれば最後のものを選ぶ', () => {
    let marks = setMark(createMarks(3), 0, 'start', 100);
    marks = setMark(marks, 1, 'start', 200);
    assert.equal(endTargetIndex(marks, 2), 1);
  });

  it('全部終了済みなら選択中が開始済みでない限り -1', () => {
    let marks = setMark(createMarks(2), 0, 'start', 100);
    marks = setMark(marks, 0, 'end', 150);
    assert.equal(endTargetIndex(marks, 1), -1);
  });

  it('1件も開始していなければ -1', () => {
    assert.equal(endTargetIndex(createMarks(3), 0), -1);
  });
});

describe('findMarkIssues', () => {
  it('矛盾が無ければ空', () => {
    let marks = createMarks(2);
    marks = setMark(marks, 0, 'start', 100); marks = setMark(marks, 0, 'end', 200);
    marks = setMark(marks, 1, 'start', 300); marks = setMark(marks, 1, 'end', 400);
    assert.deepEqual(findMarkIssues(marks), []);
  });

  it('開始が前の曲より早いと検出する', () => {
    let marks = createMarks(2);
    marks = setMark(marks, 0, 'start', 300);
    marks = setMark(marks, 1, 'start', 100);
    assert.deepEqual(findMarkIssues(marks), [{ index: 1, reason: '前の曲より開始が早い' }]);
  });

  it('終了が開始より前だと検出する', () => {
    let marks = setMark(createMarks(1), 0, 'start', 300);
    marks = setMark(marks, 0, 'end', 200);
    assert.deepEqual(findMarkIssues(marks), [{ index: 0, reason: '終了が開始より前' }]);
  });

  it('曲が重なっていると検出する', () => {
    let marks = createMarks(2);
    marks = setMark(marks, 0, 'start', 100); marks = setMark(marks, 0, 'end', 400);
    marks = setMark(marks, 1, 'start', 300);
    assert.deepEqual(findMarkIssues(marks), [{ index: 0, reason: '次の曲の開始より終了が遅い' }]);
  });

  it('未打刻は無視する', () => {
    assert.deepEqual(findMarkIssues(createMarks(3)), []);
  });
});

describe('predictSeek', () => {
  it('未打刻なら配信全体を曲数で割った位置', () => {
    // 3曲・3000秒 → 1曲目は 1000秒あたり
    assert.equal(predictSeek(createMarks(3), 0, 3000), 1000);
  });

  it('直前の打刻から残り時間を等分する', () => {
    // 1曲目を600秒に打刻済み、残り2曲・残り2400秒 → 2曲目は 1800秒あたり
    const marks = setMark(createMarks(3), 0, 'start', 600);
    assert.equal(predictSeek(marks, 1, 3000), 1800);
  });

  it('範囲外や長さ不明なら null', () => {
    assert.equal(predictSeek(createMarks(3), 9, 3000), null);
    assert.equal(predictSeek(createMarks(3), 0, 0), null);
    assert.equal(predictSeek(createMarks(0), 0, 3000), null);
  });
});

describe('nextAnchor / prevAnchor', () => {
  const anchors = [960, 1170, 1350, 600];

  it('現在位置より後ろの最初の山', () => {
    assert.equal(nextAnchor(anchors, 1000), 1170);
  });

  it('現在位置より前の最後の山', () => {
    assert.equal(prevAnchor(anchors, 1000), 960);
  });

  it('無ければ null', () => {
    assert.equal(nextAnchor(anchors, 9999), null);
    assert.equal(prevAnchor(anchors, 0), null);
    assert.equal(nextAnchor([], 100), null);
  });
});

describe('coverageState', () => {
  it('1件も入っていなければ 未', () => {
    assert.deepEqual(coverageState(26, 0), { state: 'none', mark: '未', covered: 0, songCount: 26 });
  });

  it('全曲そろっていれば ✓', () => {
    assert.equal(coverageState(26, 26).state, 'done');
    assert.equal(coverageState(26, 26).mark, '✓');
  });

  it('一部だけなら件数を添えて △', () => {
    assert.deepEqual(coverageState(26, 12), { state: 'partial', mark: '△12/26', covered: 12, songCount: 26 });
  });

  it('曲数より多く入っていても済み扱い', () => {
    assert.equal(coverageState(26, 30).state, 'done');
  });

  it('曲数が不明でも、入っていれば済み扱い', () => {
    assert.equal(coverageState(0, 5).state, 'done');
    assert.equal(coverageState(0, 0).state, 'none');
  });

  it('不正な値は 0 として扱う', () => {
    assert.equal(coverageState(null, null).state, 'none');
    assert.equal(coverageState('x', 'y').state, 'none');
    assert.equal(coverageState(26, -3).state, 'none');
  });
});

describe('streamOptionLabel', () => {
  const stream = { streamed_on: '2026-04-29', source_index: 160, title: 'ch登録8000人耐久', song_count: 24 };

  it('未登録は先頭に 未 を置く', () => {
    assert.equal(streamOptionLabel(stream, 0), '未 2026-04-29 #160 ch登録8000人耐久（24曲）');
  });

  it('登録済みは先頭に ✓ を置く', () => {
    assert.equal(streamOptionLabel(stream, 24), '✓ 2026-04-29 #160 ch登録8000人耐久（24曲）');
  });

  it('一部は件数が分かるようにする', () => {
    assert.equal(streamOptionLabel(stream, 10), '△10/24 2026-04-29 #160 ch登録8000人耐久（24曲）');
  });

  it('covered が null なら状態を出さない（セトリ編集の選択肢）', () => {
    assert.equal(streamOptionLabel(stream, null), '2026-04-29 #160 ch登録8000人耐久（24曲）');
  });

  it('長いタイトルは40文字までに切る', () => {
    const long = { ...stream, title: 'あ'.repeat(60) };
    assert.ok(streamOptionLabel(long, 0).includes('あ'.repeat(40)));
    assert.ok(!streamOptionLabel(long, 0).includes('あ'.repeat(41)));
  });

  it('枠番号が無ければ - にする', () => {
    assert.ok(streamOptionLabel({ ...stream, source_index: null }, 0).includes('#-'));
  });

  it('項目が欠けていても壊れない', () => {
    assert.doesNotThrow(() => streamOptionLabel({}, 0));
    assert.doesNotThrow(() => streamOptionLabel(null, 0));
  });
});

describe('nextJumpTarget', () => {
  const marks = () => setMark(createMarks(4), 0, 'start', 600);

  it('チャットの山があればそこへ飛び、由来を返す', () => {
    // 10:00 で打刻した直後。余白60秒より後の山は 12:00
    assert.deepEqual(nextJumpTarget(marks(), 1, 3600, [500, 660, 720, 1500], 600), { seconds: 720, by: 'anchor' });
  });

  it('いま打った曲の中にある山は余白で飛ばす', () => {
    // 現在 600秒。guard=60 なので 610秒の山は拾わない
    assert.deepEqual(nextJumpTarget(marks(), 1, 3600, [610, 900], 600), { seconds: 900, by: 'anchor' });
  });

  it('余白は指定できる', () => {
    assert.deepEqual(nextJumpTarget(marks(), 1, 3600, [610, 900], 600, { guard: 5 }), { seconds: 610, by: 'anchor' });
  });

  it('山が無ければ残り時間の等分で当たりを付ける', () => {
    // 1曲目を600秒に打刻済み・全3600秒・残り3曲 → 2曲目は 1600秒あたり
    assert.deepEqual(nextJumpTarget(marks(), 1, 3600, [], 600), { seconds: 1600, by: 'even' });
  });

  it('現在位置より後ろに山が無ければ等分にフォールバックし、由来も even になる', () => {
    assert.deepEqual(nextJumpTarget(marks(), 1, 3600, [100, 200], 600), { seconds: 1600, by: 'even' });
  });

  it('長さが分からなければ null', () => {
    assert.equal(nextJumpTarget(marks(), 1, 0, [], 600), null);
  });
});

describe('buildCommentText', () => {
  const marks = () => {
    let m = createMarks(3);
    m = setMark(m, 0, 'start', 904);  m = setMark(m, 0, 'end', 1160);   // 15:04 〜 19:20
    m = setMark(m, 1, 'start', 3647); m = setMark(m, 1, 'end', 3871);   // 1:00:47 〜 1:04:31
    return m;
  };

  it('配信の頭とセトリを1行空けて並べる（指定の書式）', () => {
    const text = buildCommentText(songs(), marks(), { meta: { start: 0, voice: 282 } });
    assert.equal(text, [
      '0:00 start',
      '4:42 声入り',
      '',
      '15:04 残酷な天使のテーゼ / 高橋洋子 19:20',
      '1:00:47 シリョクケンサ / 40mP 1:04:31',
    ].join('\n'));
  });

  it('1時間をまたぐと h:mm:ss に切り替わる', () => {
    const text = buildCommentText(songs(), marks(), {});
    assert.match(text, /^15:04 /m);
    assert.match(text, /^1:00:47 /m);
  });

  it('開始が未打刻の曲は行ごと落とす', () => {
    const text = buildCommentText(songs(), marks(), {});
    assert.ok(!text.includes('曲名のみ'));
  });

  it('終了が未打刻なら末尾の時刻を出さない', () => {
    const m = setMark(createMarks(1), 0, 'start', 904);
    assert.equal(buildCommentText([{ title: '曲', artist: '歌手' }], m, {}), '15:04 曲 / 歌手');
  });

  it('アーティストが空ならスラッシュを残さない', () => {
    let m = setMark(createMarks(1), 0, 'start', 904);
    m = setMark(m, 0, 'end', 1160);
    assert.equal(buildCommentText([{ title: '曲名のみ', artist: '' }], m, {}), '15:04 曲名のみ 19:20');
  });

  it('meta が未打刻なら見出し行を出さない', () => {
    const text = buildCommentText(songs(), marks(), { meta: {} });
    assert.ok(!text.includes('start'));
    assert.ok(text.startsWith('15:04'));
  });

  it('テンプレートを差し替えられる', () => {
    const text = buildCommentText(songs(), marks(), { template: COMMENT_TEMPLATES['artist-first'].template });
    assert.match(text, /^高橋洋子\/残酷な天使のテーゼ 15:04$/m);
  });

  it('番号付きテンプレートは1始まり', () => {
    const text = buildCommentText(songs(), marks(), { template: COMMENT_TEMPLATES['numbered'].template });
    assert.match(text, /^1\. 15:04 /m);
    assert.match(text, /^2\. 1:00:47 /m);
  });

  it('末尾に任意の行を足せる', () => {
    const text = buildCommentText(songs(), marks(), { meta: {}, footer: '#夢川かなう' });
    assert.ok(text.endsWith('\n\n#夢川かなう'));
  });

  it('打刻ゼロなら空文字', () => {
    assert.equal(buildCommentText(songs(), createMarks(3), { meta: {} }), '');
  });

  it('既定の見出し行は start と 声入り', () => {
    assert.deepEqual(DEFAULT_META_ROWS.map((r) => r.label), ['start', '声入り']);
  });
});

describe('buildSavePayload', () => {
  it('開始のみを songIndex 付きで返す', () => {
    let m = createMarks(3);
    m = setMark(m, 0, 'start', 904); m = setMark(m, 0, 'end', 1160);
    m = setMark(m, 2, 'start', 3647);
    assert.deepEqual(buildSavePayload(m), [
      { songIndex: 0, timeSeconds: 904 },
      { songIndex: 2, timeSeconds: 3647 },
    ]);
  });

  it('未打刻だけなら空配列', () => {
    assert.deepEqual(buildSavePayload(createMarks(3)), []);
  });
});

describe('marksFromItems', () => {
  it('API の形から開始を復元する', () => {
    const marks = marksFromItems([{ songIndex: 1, timeSeconds: 904 }], 3);
    assert.equal(marks[1].start, 904);
    assert.equal(marks[0].start, null);
    assert.equal(marks.length, 3);
  });

  it('範囲外や不正な値は捨てる', () => {
    const marks = marksFromItems([
      { songIndex: 9, timeSeconds: 100 },
      { songIndex: 0, timeSeconds: 'x' },
    ], 2);
    assert.deepEqual(marks, createMarks(2));
  });
});
