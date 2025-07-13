// Si A > B + C alors D = B + C
// Sinon (A <= B + C) alors D = A
// Si D > B, alors :
// B = B
// C = D - B
// Sinon (D <= B), alors :
// B = A
// C = 0
export function computeValues(A: number, B: number, C: number) {
  const D: number = A > B + C ? B + C : A;
  if (D > B) {
    return { D, B, C: D - B };
  } else {
    return { D, B: A, C: 0 };
  }
}
