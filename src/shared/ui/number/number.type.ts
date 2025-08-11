export interface Number {
  className?: string;
  value?: number;
  valueMax?: number;
  decimal?: boolean;
  asset?: 'currency' | 'energy' | 'percent' | 'weight';
}
