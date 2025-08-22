import type { AssetValue } from '@/src/shared/types/assetValue.type.ts';

export interface Merch {
  unlocked: boolean;
  purchased?: boolean;
  category?: string;
  cost?: AssetValue;
  effect?: MerchandiseDispatch | AssetValue[] | string[];
  quantity?: number;
  requirement?: AssetValue | string;
}

export type Merchandise = Record<string, Merch>;

export type MerchandiseDispatch =
  | { type: 'LOAD'; merchandise: Merchandise }
  | { type: 'BUY_MERCHANDISE'; name: string; purchased: boolean }
  | { type: 'UNLOCKED_MERCHANDISE'; name: string; unlocked: boolean }
  | { type: 'AUTO_WIRE' } // @TODO
  | { type: 'ALLOCATE_TRUST' }; // @TODO
