import type { FeatureState } from '@/src/features/factory/feature.type.ts';
import type { ProductState } from '@/src/features/factory/product.type.ts';

export interface FactoryState {
  clip: number;
  clipFactory: number;
  clipFactoryBonus: number;
  clipFactoryCost: number;
  clipper: number;
  clipperBonus: number;
  clipperCost: number;
  clipPerSecond: number;
  clipPrice: number;
  clipPriceRef: number;
  creativity: number;
  feature: FeatureState;
  funds: number;
  fundsPerSecond: number;
  megaClipper: number;
  megaClipperBonus: number;
  megaClipperCost: number;
  marketing: number;
  marketingBonus: number;
  marketingCost: number;
  operation: number;
  product: ProductState;
  publicDemand: number;
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
  | { type: 'SELL_UNSOLD_INVENTORY' }
  | { type: 'INCREMENT_CLIP' }
  | { type: 'PRODUCTION_PER_SECOND' }
  | { type: 'ALLOCATE_TRUST' }
  | { type: 'DECREASE_CLIP_SELLING_PRICE' }
  | { type: 'INCREASE_CLIP_SELLING_PRICE' }
  | { type: 'BUY_MARKETING' }
  | { type: 'BUY_CLIPPER'; cost: number }
  | { type: 'BUY_MEGA_CLIPPER'; cost: number }
  | { type: 'BUY_CLIP_FACTORY'; cost: number }
  | { type: 'BUY_WIRE_AUTOMATICALLY' }
  | { type: 'BUY_WIRE'; cost: number }
  | { type: 'UPDATE_SHOP'; name: string; model: string; available: boolean }
  | { type: 'UPDATE_WIRE_COST'; cost: number }
  | { type: 'UPDATE_WIRE_QUANTITY'; quantity: number }
  | { type: 'UPDATE_CLIPPER_BONUS'; bonus: number }
  | { type: 'UPDATE_MEGA_CLIPPER_BONUS'; bonus: number }
  | { type: 'UPDATE_CLIP_FACTORY_BONUS'; bonus: number }
  | { type: 'UPDATE_MARKETING_BONUS'; bonus: number }
  | { type: 'UPDATE_UNSOLD_INVENTORY_BONUS'; bonus: number };
