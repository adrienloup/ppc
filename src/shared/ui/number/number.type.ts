export interface Number {
  className?: string;
  value?: number;
  valueMax?: number;
  asset?: 'currency' | 'energy' | 'percent' | 'weight';
}
