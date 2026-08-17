// 「確認が必要な項目」の確認済み管理のテスト。
// 状態を持ち回すので、元の配列を壊さないことと、
// 直した指摘の鍵が残り続けないこと（再発を黙って隠さない）を重点的に見る。
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  issueKey,
  partitionIssues,
  pruneIgnored,
  summarizeIssues,
  toggleIgnored,
} from '../../docs/js/admin/issue-review.js';

const issues = [
  { type: '同一枠内重複', place: 'new 第158枠', detail: '炎__lisa x2' },
  { type: '同一枠内重複', place: 'old 第66枠', detail: '花に亡霊__ヨルシカ x2' },
  { type: '曲数不一致', place: 'new 第190枠', detail: '2026-07-31: 表示21 / 記録22' },
];

describe('issueKey', () => {
  const SEP = '\u001f';

  it('種別・場所・内容で一意になる', () => {
    assert.equal(issueKey(issues[0]), ['同一枠内重複', 'new 第158枠', '炎__lisa x2'].join(SEP));
  });

  it('場所が違えば別の鍵', () => {
    assert.notEqual(issueKey(issues[0]), issueKey(issues[1]));
  });

  it('項目の切れ目が紛れないよう、本文に出ない区切りを使う', () => {
    // 空白区切りだと「A B」+「C」と「A」+「B C」が同じ鍵になりうる
    assert.notEqual(
      issueKey({ type: 'a b', place: 'c', detail: '' }),
      issueKey({ type: 'a', place: 'b c', detail: '' }),
    );
  });

  it('欠けた項目があっても落ちない', () => {
    assert.equal(issueKey({}), SEP + SEP);
    assert.equal(issueKey(null), SEP + SEP);
  });
});

describe('partitionIssues', () => {
  it('確認済みを分ける', () => {
    const r = partitionIssues(issues, [issueKey(issues[0])]);
    assert.equal(r.active.length, 2);
    assert.equal(r.ignored.length, 1);
    assert.equal(r.ignored[0].place, 'new 第158枠');
  });

  it('確認済みが無ければ全部 active', () => {
    assert.equal(partitionIssues(issues, []).active.length, 3);
  });

  it('空でも落ちない', () => {
    assert.deepEqual(partitionIssues(null, null), { active: [], ignored: [] });
  });
});

describe('summarizeIssues', () => {
  it('種別ごとに数える', () => {
    assert.deepEqual(summarizeIssues(issues), { 同一枠内重複: 2, 曲数不一致: 1 });
  });

  it('空なら空', () => {
    assert.deepEqual(summarizeIssues([]), {});
  });
});

describe('toggleIgnored', () => {
  it('無ければ足す', () => {
    assert.deepEqual(toggleIgnored([], 'a'), ['a']);
  });

  it('あれば外す', () => {
    assert.deepEqual(toggleIgnored(['a', 'b'], 'a'), ['b']);
  });

  it('元の配列を壊さない', () => {
    const before = ['a'];
    toggleIgnored(before, 'b');
    assert.deepEqual(before, ['a']);
  });
});

describe('pruneIgnored', () => {
  it('いま存在する指摘の鍵だけ残す', () => {
    const keys = [issueKey(issues[0]), '同一枠内重複 消えた枠 なにか x2'];
    assert.deepEqual(pruneIgnored(keys, issues), [issueKey(issues[0])]);
  });

  it('直したあとに同じ内容が再発したら、また出るようにする', () => {
    // いったん確認済みにする → データを直して指摘が消える → 掃除で鍵も消える
    const keys = pruneIgnored([issueKey(issues[0])], [issues[1], issues[2]]);
    assert.deepEqual(keys, []);
    // 同じ内容が再発しても隠れない
    assert.equal(partitionIssues(issues, keys).active.length, 3);
  });

  it('空でも落ちない', () => {
    assert.deepEqual(pruneIgnored(null, null), []);
  });
});
