export function getQuantity(paperclip: number): number {
  const quantities = [1e3, 1e4, 1e5];
  return quantities.find((quantity) => paperclip * 1e2 >= quantity) ?? 1e2;
}
