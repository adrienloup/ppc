export function getSwarm(min: number, max: number, scale: number, value: number): number {
  const duration = Math.max(min, max - (Math.log10(value + 1) / scale) * (max - min));
  return Math.round(duration);
}
