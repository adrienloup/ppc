import type { AssetValue } from '@/src/shared/types/assetValue.type.ts';

export interface Feature {
  effect?: FactoryAction | AssetValue<FactoryState>[] | string[];
  requirement?: AssetValue<FactoryState>[] | string;
  cost?: AssetValue<FactoryState>[];
  category?: string;
  quantity?: number;
  available: boolean;
  active: boolean;
}

export type FeatureState = Record<string, Feature>;

export interface FactoryState {
  clip: number;
  clipper: number;
  clipperBonus: number;
  creativity: number;
  feature: FeatureState;
  funds: number;
  marketingBonus: number;
  operation: number;
  trust: number;
  unsoldInventory: number;
  unsoldInventoryBonus: number;
  wire: number;
  yomi: number;
}

export type FactoryAction = { type: 'INITIALIZE'; state: FactoryState } | { type: 'INCREMENT_CLIP' };
