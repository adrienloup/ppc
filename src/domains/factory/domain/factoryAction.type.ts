import type { FactoryState } from '@/src/domains/factory/domain/factoryState.type.ts';

export type FactoryAction =
  | { type: 'INITIALIZE'; state: FactoryState }
  | { type: 'SELL_UNSOLD_INVENTORY' }
  | { type: 'PRODUCTION_PER_SECOND' }
  | { type: 'INCREMENT_CLIP' }
  | { type: 'BUY_WIRE'; cost: number }
  | { type: 'BUY_CLIPPER'; cost: number }
  | { type: 'BUY_CLIP_FACTORY'; cost: number }
  | { type: 'BUY_MEGA_CLIPPER'; cost: number }
  | { type: 'ALLOCATE_TRUST' }
  // | { type: 'DECREASE_CLIP_SELLING_PRICE' }
  // | { type: 'INCREASE_CLIP_SELLING_PRICE' }
  // | { type: 'BUY_MARKETING' }
  // | { type: 'BUY_CLIPPER'; cost: number }
  // | { type: 'BUY_MEGA_CLIPPER'; cost: number }
  // | { type: 'BUY_CLIP_FACTORY'; cost: number }
  // | { type: 'BUY_WIRE_AUTOMATICALLY' }
  // | { type: 'BUY_WIRE'; cost: number }
  // | { type: 'UPDATE_SHOP'; name: string; model: string; available: boolean }
  // | { type: 'UPDATE_WIRE_COST'; cost: number }
  | { type: 'UPDATE_WIRE_COST'; cost: number }
  | { type: 'UPDATE_WIRE_QUANTITY'; quantity: number }
  | { type: 'UPDATE_CLIPPER_BONUS'; bonus: number }
  | { type: 'UPDATE_MEGA_CLIPPER_BONUS'; bonus: number }
  | { type: 'UPDATE_CLIP_FACTORY_BONUS'; bonus: number }
  | { type: 'UPDATE_MARKETING_BONUS'; bonus: number }
  | { type: 'UPDATE_UNSOLD_INVENTORY_BONUS'; bonus: number };
