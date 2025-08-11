import type { Power } from '@/src/domains/power/domain/power.type.ts';

export const POWER_STATE: Power = {
  batteryTower: 0,
  batteryTowerBonus: 0,
  batteryTowerConsumption: 0, // +10MW * batteryTower
  batteryTowerCost: 6e3,
  clipFactoryConsumption: 0, // +200MW * clipFactory
  droneConsumption: 0, // +1MW * drone
  consumption: 0,
  production: 0,
  storage: 0,
  storageMax: 1e4,
  solarFarm: 0, // -50MW * solarFarm
  solarFarmBonus: 0,
  solarFarmCost: 3e3,
};
