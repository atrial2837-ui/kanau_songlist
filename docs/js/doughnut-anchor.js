/**
 * @module doughnut-anchor
 * @description ドーナツグラフ用ツールチップの外側配置ヘルパー (DOM 非依存の純粋関数)。
 *
 * Chart.js 既定の 'average' 配置はホバーした弧の中点を支点にするため、
 * ボックスがドーナツ内側 (中央の合計表示) に被ってしまう。
 * 中心から見たカーソル方向の単位ベクトルを求め、外半径の外側に
 * アンカーを置くことで、中央と重ならない方向へ出す。
 *
 * @副作用 なし
 */

/**
 * ドーナツ外側のアンカー位置と方向を返す。
 *
 * @param {number} cx - ドーナツ中心 x
 * @param {number} cy - ドーナツ中心 y
 * @param {number} px - 参照点 x (通常はカーソル位置)
 * @param {number} py - 参照点 y (通常はカーソル位置)
 * @param {number} outerRadius - ドーナツ外半径
 * @param {number} [gap=10] - 外半径からの余白
 * @returns {{ ax: number, ay: number, dx: number, dy: number }} アンカー座標と中心からの単位方向
 */
export function doughnutOutsideAnchor(cx, cy, px, py, outerRadius, gap = 10) {
  let dx = px - cx;
  let dy = py - cy;
  const len = Math.hypot(dx, dy);
  if (len > 0) {
    dx /= len;
    dy /= len;
  } else {
    // 中心と完全一致の縮退時は上向きに倒す
    dx = 0;
    dy = -1;
  }
  return {
    ax: cx + dx * (outerRadius + gap),
    ay: cy + dy * (outerRadius + gap),
    dx,
    dy,
  };
}
