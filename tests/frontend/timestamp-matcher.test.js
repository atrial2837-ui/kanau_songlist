// 固定コメントを貼り付けてセトリに開始時刻を割り当てる処理のテスト。
//
// 実データで踏んだ事故をそのまま回帰テストにしてある:
//   - 新旧chで時刻の位置が違う（前だけ / 前後 / 後ろだけ）
//   - 同名別アーティストの取り違え
//   - 短い相槌行が曲名に部分一致してしまう
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  findInversions,
  matchSetlist,
  norm,
  parseCandidates,
  stripTrackNo,
  toSeconds,
} from '../../docs/js/admin/timestamp-matcher.js';

describe('norm', () => {
  it('全角と半角、記号、空白の違いを吸収する', () => {
    assert.equal(norm('Ｃａｔｃｈ　Ｙｏｕ！'), norm('catch you'));
    assert.equal(norm('ﾏﾌｨｱ'), norm('マフィア'));
  });

  it('括弧の注記を落とす', () => {
    assert.equal(norm('天ノ弱（みきとPのアレンジ）'), norm('天ノ弱'));
  });

  it('空でも落ちない', () => {
    assert.equal(norm(null), '');
  });
});

describe('stripTrackNo', () => {
  it('行頭の曲番号を落とす', () => {
    assert.equal(stripTrackNo('1. 夜に駆ける'), '夜に駆ける');
    assert.equal(stripTrackNo('12) 炎'), '炎');
    assert.equal(stripTrackNo('3、Lemon'), 'Lemon');
  });

  it('曲名の中の数字は消さない', () => {
    assert.equal(stripTrackNo('115万キロのフィルム'), '115万キロのフィルム');
  });
});

describe('toSeconds', () => {
  it('h:mm:ss と m:ss を秒にする', () => {
    assert.equal(toSeconds('1:02:03'), 3723);
    assert.equal(toSeconds('12:34'), 754);
  });

  it('60以上の打ち間違いは無効にする', () => {
    assert.equal(toSeconds('4:60:04'), null);
    assert.equal(toSeconds('12:75'), null);
  });

  it('時刻でないものは null', () => {
    assert.equal(toSeconds('あ'), null);
    assert.equal(toSeconds(''), null);
  });
});

describe('parseCandidates', () => {
  it('新chの「時刻 曲名 / 歌手 時刻」から先頭の時刻を開始として拾う', () => {
    const [c] = parseCandidates('15:04 夜に駆ける / YOASOBI 19:20');
    assert.equal(c.seconds, 904);
    assert.ok(c.segments.includes(norm('夜に駆ける')));
    assert.ok(c.segments.includes(norm('YOASOBI')));
  });

  it('旧chの「歌手/曲名時刻」も同じように扱える', () => {
    const [c] = parseCandidates('ヨルシカ/花に亡霊12:54');
    assert.equal(c.seconds, 774);
    assert.ok(c.segments.includes(norm('花に亡霊')));
    assert.ok(c.segments.includes(norm('ヨルシカ')));
  });

  it('start や 声入り のような目印行は捨てる', () => {
    const out = parseCandidates('0:00 start\n1:20 声入り\n5:00 炎 / LiSA');
    assert.equal(out.length, 1);
    assert.ok(out[0].segments.includes(norm('炎')));
  });

  it('目印と同じ語で始まる曲名は捨てない', () => {
    // 「START:DASH!!」が start の行と見なされて消えた実例
    const out = parseCandidates("0:00 start\n1:45:03 START:DASH!! / μ's");
    assert.equal(out.length, 1);
    assert.equal(out[0].seconds, 6303);
    assert.ok(out[0].segments.includes(norm('START:DASH!!')));
  });

  it('連番付きの目印行は捨てる', () => {
    assert.equal(parseCandidates('3:00 あくび2').length, 0);
  });

  it('コメント欄ごと貼ったときのヘッダーを捨てる', () => {
    const out = parseCandidates('@someone\n3 日前\n夢川かなうさんによって固定されています\nセトリ\n5:00 炎 / LiSA');
    assert.equal(out.length, 1);
  });

  it('時刻の無い行は無視する', () => {
    assert.equal(parseCandidates('ただの感想コメント').length, 0);
  });

  it('時刻の昇順で返す', () => {
    const out = parseCandidates('20:00 B / b\n5:00 A / a');
    assert.deepEqual(out.map((c) => c.seconds), [300, 1200]);
  });

  it('空でも落ちない', () => {
    assert.deepEqual(parseCandidates(''), []);
    assert.deepEqual(parseCandidates(null), []);
  });
});

describe('matchSetlist', () => {
  it('曲名で照合して開始秒を割り当てる', () => {
    const songs = [{ title: '花に亡霊', artist: 'ヨルシカ' }, { title: '炎', artist: 'LiSA' }];
    const out = matchSetlist(songs, '5:00 花に亡霊 / ヨルシカ\n12:30 炎 / LiSA');
    assert.deepEqual(out.map((m) => m.seconds), [300, 750]);
    assert.equal(out[0].how, '曲名+歌手');
  });

  it('セトリと違う順で書かれていても曲名で正しく結びつける', () => {
    const songs = [{ title: '炎', artist: 'LiSA' }, { title: '花に亡霊', artist: 'ヨルシカ' }];
    const out = matchSetlist(songs, '5:00 花に亡霊 / ヨルシカ\n12:30 炎 / LiSA');
    assert.deepEqual(out.map((m) => m.seconds), [750, 300]);
  });

  it('同名別アーティストはアーティストで取り違えを防ぐ', () => {
    const songs = [{ title: 'プロポーズ', artist: 'なとり' }, { title: 'プロポーズ', artist: 'ClariS' }];
    const out = matchSetlist(songs, '10:00 プロポーズ / ClariS\n20:00 プロポーズ / なとり');
    assert.equal(out[0].seconds, 1200);
    assert.equal(out[1].seconds, 600);
  });

  it('表記ゆれは部分一致で拾う', () => {
    const songs = [{ title: '天ノ弱 -みきとPのアレンジ-', artist: '164' }];
    const out = matchSetlist(songs, '8:00 天ノ弱 / 164');
    assert.equal(out[0].seconds, 480);
  });

  it('短い相槌行に横取りさせない（部分一致の下限）', () => {
    // 「ん？」が「高嶺の花子さん」に部分一致で刺さった実例。
    // 正しい行が後ろにあるので、そちらが選ばれないといけない。
    const songs = [{ title: '高嶺の花子さん', artist: 'back number' }];
    const out = matchSetlist(songs, '5:21 ん？\n30:00 高嶺の花子さん / back number');
    assert.equal(out[0].seconds, 1800);
    assert.equal(out[0].how, '曲名+歌手');
  });

  it('長さ比が離れすぎる断片は部分一致にしない', () => {
    const songs = [{ title: 'あいことば', artist: '' }, { title: '炎', artist: 'LiSA' }];
    // 「あ」始まりの長い別曲名に部分一致で吸われないこと
    const out = matchSetlist(songs, '2:00 あいことばのながいべつのきょくめい\n9:00 炎 / LiSA');
    assert.equal(out[1].seconds, 540);
  });

  it('照合できなかった曲は前後に挟まれた候補で埋める', () => {
    const songs = [
      { title: 'A', artist: 'a' },
      { title: '書き間違えた曲名', artist: '' },
      { title: 'C', artist: 'c' },
    ];
    const out = matchSetlist(songs, '1:00 A / a\n2:00 まったく違う表記\n3:00 C / c');
    assert.deepEqual(out.map((m) => m.seconds), [60, 120, 180]);
    assert.equal(out[1].how, '並び順');
  });

  it('同じ候補を2曲に使い回さない', () => {
    const songs = [{ title: '炎', artist: 'LiSA' }, { title: '炎', artist: 'LiSA' }];
    const out = matchSetlist(songs, '5:00 炎 / LiSA\n40:00 炎 / LiSA');
    assert.deepEqual(out.map((m) => m.seconds).sort((a, b) => a - b), [300, 2400]);
  });

  it('候補が足りなければ null のまま残す', () => {
    const songs = [{ title: 'A', artist: 'a' }, { title: 'B', artist: 'b' }];
    const out = matchSetlist(songs, '1:00 A / a');
    assert.equal(out[1].seconds, null);
  });

  it('セトリが空でも落ちない', () => {
    assert.deepEqual(matchSetlist([], '1:00 A / a'), []);
    assert.deepEqual(matchSetlist(null, '1:00 A / a'), []);
  });
});

describe('findInversions', () => {
  it('時刻が巻き戻っている箇所を返す', () => {
    const out = findInversions([{ seconds: 100 }, { seconds: 300 }, { seconds: 200 }]);
    assert.deepEqual(out, [{ index: 2, prevIndex: 1 }]);
  });

  it('未割当は飛ばして前後を比べる', () => {
    const out = findInversions([{ seconds: 100 }, { seconds: null }, { seconds: 50 }]);
    assert.deepEqual(out, [{ index: 2, prevIndex: 0 }]);
  });

  it('単調なら空', () => {
    assert.deepEqual(findInversions([{ seconds: 1 }, { seconds: 2 }, { seconds: 3 }]), []);
    assert.deepEqual(findInversions([]), []);
  });
});
