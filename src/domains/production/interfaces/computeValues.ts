// if W > M + C so W = M + C
// else (W <= M + C) so W = W
// if W > M, so :
// M = M
// C = W - M
// else (W <= M), so :
// M = W
// C = 0
export function computeValues(W: number, M: number, C: number) {
  W = W > M + C ? M + C : W;

  if (W > M) {
    return { W, M, C: W - M };
  } else {
    return { W, M: W, C: 0 };
  }
}
