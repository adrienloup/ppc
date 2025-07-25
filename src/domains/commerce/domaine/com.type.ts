import type { AssetValue } from '@/src/shared/types/assetValue.type.ts';

export interface Merchandise {
  category: string;
  cost: AssetValue;
  effect: CommerceDispatch | AssetValue[] | string[];
  available: boolean;
  quantity: number;
  requirement?: AssetValue | string;
}

export type Commerce = Record<string, Merchandise>;

export type CommerceDispatch =
  | { type: 'LOAD'; commerce: Commerce }
  | { type: 'BUY_MERCHANDISE'; merchandise: string }
  | { type: 'AUTO_BUY_WIRE' } // TODO
  | { type: 'ALLOCATE_TRUST' }; // TODO
