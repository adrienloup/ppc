import type { CostType } from '@/src/shared/types/cost.type.ts';

export type EngineryType = Record<
  string,
  {
    bonus: number;
    consumption: CostType;
    cost: CostType;
    production: CostType;
    quantity: number;
  }
>;

export type EngineryDispatchType =
  | { type: 'BUY_AUTO_CLIPPER' }
  | { type: 'BUY_MEGA_CLIPPER' }
  | { type: 'BUY_PAPERCLIP_FACTORY' }
  | { type: 'BUY_BATTERY_TOWER' }
  | { type: 'BUY_SOLAR_FARM' }
  | { type: 'BUY_FRAMER_DRONE'; quantity: number }
  | { type: 'BUY_HARVESTER_DRONE'; quantity: number }
  | { type: 'BUY_FIGHTER_DRONE'; quantity: number }
  | { type: 'UPDATE_AUTO_CLIPPER_BONUS'; bonus: number }
  | { type: 'UPDATE_MEGA_CLIPPER_BONUS'; bonus: number }
  | { type: 'UPDATE_PAPERCLIP_FACTORY_BONUS'; bonus: number }
  | { type: 'UPDATE_BATTERY_TOWER_BONUS'; bonus: number }
  | { type: 'UPDATE_SOLAR_FARM_BONUS'; bonus: number }
  | { type: 'UPDATE_FRAMER_DRONE_BONUS'; bonus: number }
  | { type: 'UPDATE_HARVESTER_DRONE_BONUS'; bonus: number }
  | { type: 'UPDATE_FIGHTER_DRONE_BONUS'; bonus: number };
