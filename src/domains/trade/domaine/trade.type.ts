import type { AssetValue } from '@/src/shared/types/assetValue.type.ts';

export interface Merchandise {
  category: string;
  cost: AssetValue;
  effect: TradeDispatch | AssetValue[] | string[];
  available: boolean;
  quantity: number;
  requirement?: AssetValue | string;
}

export type Trade = Record<string, Merchandise>;

export type TradeDispatch =
  | { type: 'LOAD'; trade: Trade }
  | { type: 'BUY_MERCHANDISE'; merchandise: string }
  | { type: 'AUTO_BUY_WIRE' } // TODO
  | { type: 'ALLOCATE_TRUST' }; // TODO
