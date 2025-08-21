export function getMarketingBonus(marketing: number): number {
  if (marketing < 5) return 2;
  if (marketing >= 10) return 10;
  if (marketing >= 5) return 5;
  return 0;
}
