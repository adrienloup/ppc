export function getQuantity(
  wire: number,
  autoClipper: number,
  megaClipper: number,
  paperclipFactory: number
): number {
  const quantities = [
    autoClipper + megaClipper + paperclipFactory,
    autoClipper + megaClipper,
    autoClipper + paperclipFactory,
    megaClipper + paperclipFactory,
    autoClipper,
    megaClipper,
    paperclipFactory,
  ].filter((quantity) => quantity > 0);

  return quantities.find((quantity) => wire >= quantity) ?? 0;
}
