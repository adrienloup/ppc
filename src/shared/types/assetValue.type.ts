import type { NumberKey } from '@/src/shared/types/numberKey.type.ts';

export interface AssetValue<T> {
  asset: NumberKey<T>;
  value: number;
}
