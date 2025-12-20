export function getQuantity(paperclip: number) {
  const quantities = [1e5, 1e4, 1e3];
  return quantities.find((quantity) => paperclip >= quantity) ?? 1e2;
}
