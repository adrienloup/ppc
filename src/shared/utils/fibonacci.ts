export const fibonacci = (max: number, fn1: number, fn2: number) => {
  const fn: number[] = [];
  let a: number = fn1,
    b: number = fn2;

  while (a <= max) {
    fn.push(a);
    [a, b] = [b, a + b];
  }

  return fn;
};
