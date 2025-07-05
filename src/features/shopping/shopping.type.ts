import type { Dispatch } from 'react';
// import type { NumberKey } from '@/src/shared/types/numberKey.type.ts';
// import type { FactoryState } from '@/src/features/factory/factory.type.ts';

interface ShoppingCost {
  // asset: NumberKey<FactoryState>;
  asset:
    | 'clip'
    | 'clipper'
    | 'clipperBonus'
    | 'creativity'
    | 'funds'
    | 'marketingBonus'
    | 'operation'
    | 'trust'
    | 'yomi';
  cost: number;
}

interface ShoppingItem {
  category?: string;
  requirement?: ShoppingCost[] | string;
  effect?: ShoppingAction | ShoppingCost[] | string[];
  quantity?: number;
  cost?: ShoppingCost[];
  available: boolean;
  active: boolean;
}

export type ShoppingState = Record<string, ShoppingItem>;

export type ShoppingAction =
  | { type: 'BUY_FEATURE'; feature: string }
  | { type: 'UPDATE_FEATURE'; feature: string; available: boolean; active: boolean };

export type Shopping = { state: ShoppingState; dispatch: Dispatch<ShoppingAction> };
