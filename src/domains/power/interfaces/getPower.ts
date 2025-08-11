export const getPower = (consumption: number, production: number): number => {
  if (consumption === 0) {
    return production > 0 ? 100 : 0;
  }
  return Math.min(100, (production / consumption) * 100) / 100;
};
