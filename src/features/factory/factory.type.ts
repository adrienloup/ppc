import type { FeatureState } from '@/src/features/factory/feature.type.ts';
import type { ProductState } from '@/src/features/factory/product.type.ts';

export interface FactoryState {
  clip: number;
  clipFactory: number;
  clipFactoryBonus: number;
  clipper: number;
  clipperBonus: number;
  clipPerSecond: number;
  creativity: number;
  feature: FeatureState;
  funds: number;
  megaClipper: number;
  megaClipperBonus: number;
  marketingBonus: number;
  operation: number;
  product: ProductState;
  trust: number;
  unsoldInventory: number;
  unsoldInventoryBonus: number;
  wire: number;
  wireCost: number;
  wireQuantity: number;
  yomi: number;
}

export type FactoryAction =
  | { type: 'INITIALIZE'; state: FactoryState }
  | { type: 'INCREMENT_CLIP' }
  | { type: 'PRODUCTION_PER_SECOND' }
  | { type: 'ALLOCATE_TRUST' }
  | { type: 'UPDATE_SHOP'; name: string; model: string; available: boolean }
  | { type: 'BUY_WIRE_AUTOMATICALLY' }
  | { type: 'UPDATE_WIRE_COST'; cost: number }
  | { type: 'BUY_WIRE'; cost: number };
