import type { Feature } from '@/src/features/factory/domain/Feature.ts';
import type { Wallet } from '@/src/features/factory/domain/Wallet.ts';

export interface Factory {
  acquiredMatter: number;
  availableMatter: number;
  cash: number;
  cashRef: number;
  clip: number;
  clipFactory: number;
  clipFactoryBonus: number;
  clipFactoryCost: number;
  clipPerSecond: number;
  clipPrice: number;
  clipPriceRef: number;
  creativity: number;
  clipper: number;
  clipperBonus: number;
  clipperCost: number;
  disorganization: number;
  entertainment: number;
  entertainmentCost: number;
  feature: Feature;
  funds: number;
  fundsPerSecond: number;
  harvesterDrone: number;
  harvesterDroneCost: number;
  matterPerSecond: number;
  marketing: number;
  marketingBonus: number;
  marketingCost: number;
  megaClipper: number;
  megaClipperBonus: number;
  megaClipperCost: number;
  memory: number;
  operation: number;
  operationMax: number;
  processor: number;
  publicDemand: number;
  synchronizationCost: number;
  swarmGifts: number;
  swarmStrategy: number;
  trust: number;
  trustRef: number;
  universeMatter: number;
  unsoldInventory: number;
  unsoldInventoryBonus: number;
  wallet: Wallet;
  wire: number;
  wireCost: number;
  wireDrone: number;
  wireDroneCost: number;
  wirePerSecond: number;
  wireQuantity: number;
  yomi: number;
}

export type FactoryDispatch =
  | { type: 'PRODUCTION_PER_SECOND' }
  | { type: 'UNIT_PRODUCTION' }
  | { type: 'SELL_UNSOLD_INVENTORY' }
  | { type: 'DECREASE_CLIP_SELLING_PRICE' }
  | { type: 'INCREASE_CLIP_SELLING_PRICE' }
  | { type: 'INCREASE_CASH' }
  | { type: 'DECREASE_CASH' }
  | { type: 'WITHDRAW_CASH' }
  | { type: 'INCREASE_MEMORY' }
  | { type: 'INCREASE_PROCESSOR' }
  | { type: 'ALLOCATE_TRUST' }
  | { type: 'INCREASE_DISORGANIZATION_SWARM' }
  | { type: 'SYNCHRONIZE_SWARM' }
  | { type: 'ENTERTAIN_SWARM' }
  | { type: 'BORED_SWARM' }
  | { type: 'BUY_MARKETING' }
  | { type: 'BUY_HARVESTER_DRONE'; harvesterDrone: number }
  | { type: 'BUY_WIRE_DRONE'; wireDrone: number }
  | { type: 'BUY_CLIP_FACTORY'; cost: number }
  | { type: 'BUY_MEGA_CLIPPER'; cost: number }
  | { type: 'BUY_WIRE'; cost: number }
  | { type: 'BUY_CLIPPER'; cost: number }
  | { type: 'BUY_FEATURE'; feature: string }
  | { type: 'INCREASE_WALLET'; symbol: string; price: number }
  | { type: 'DECREASE_WALLET'; symbol: string; price: number }
  | { type: 'INCREASE_TRUST'; trust: number }
  | { type: 'UPDATE_SWARM_GIFTS'; swarmGifts: number }
  | { type: 'UPDATE_MARKETING_BONUS'; bonus: number }
  | { type: 'UPDATE_CLIPPER_BONUS'; bonus: number }
  | { type: 'UPDATE_MEGA_CLIPPER_BONUS'; bonus: number }
  | { type: 'UPDATE_UNSOLD_INVENTORY_BONUS'; bonus: number }
  | { type: 'UPDATE_WIRE_QUANTITY'; quantity: number }
  | { type: 'UPDATE_SWARM_STRATEGY'; strategy: number }
  | { type: 'UPDATE_WIRE_COST'; cost: number }
  | { type: 'UPDATE_FEATURE'; feature: string; actived: boolean; enabled: boolean }
  | { type: 'INITIALIZE'; state: Factory };
