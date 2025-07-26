import type { AssetValue } from '@/src/shared/types/assetValue.type.ts';

export interface Mer {
  category: string;
  cost: AssetValue;
  effect: MerchandiseDispatch | AssetValue[] | string[];
  available: boolean;
  quantity: number;
  requirement?: AssetValue | string;
}

export type Merchandise = Record<string, Mer>;

export type MerchandiseDispatch =
  | { type: 'LOAD'; merchandise: Merchandise }
  | { type: 'BUY_MERCHANDISE'; merchandise: string }
  | { type: 'AUTO_BUY_WIRE' } // TODO
  | { type: 'ALLOCATE_TRUST' }; // TODO
