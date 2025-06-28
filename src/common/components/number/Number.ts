export interface Number {
  className?: string;
  value?: number;
  valueMax?: number;
  decimal?: boolean;
  unit?: 'weight' | 'currency' | 'percent';
}
