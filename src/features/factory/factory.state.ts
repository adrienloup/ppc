import type { FactoryState } from '@/src/features/factory/factory.type.ts';
import { FEATURE_STATE } from '@/src/features/factory/feature.state.ts';

export const FACTORY_STATE: FactoryState = {
  clip: 0,
  clipFactory: 0,
  clipFactoryBonus: 0,
  clipper: 0,
  clipperBonus: 0,
  clipPerSecond: 0,
  creativity: 0,
  feature: FEATURE_STATE,
  funds: 0,
  megaClipper: 0,
  megaClipperBonus: 0,
  marketingBonus: 0,
  operation: 0,
  trust: 0,
  unsoldInventory: 0,
  unsoldInventoryBonus: 0,
  wire: 100,
  wireCost: 20,
  wireQuantity: 100,
  yomi: 0,
};
