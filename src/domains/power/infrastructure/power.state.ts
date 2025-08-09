import type { Power } from '@/src/domains/power/domain/power.type.ts';

export const POWER_STATE: Power = {
  clipFactoryConsumption: 0, // 200MW * clipFactory
  droneConsumption: 0, // 1MW * drone
  powerConsumption: 0, // clipFactoryConsumption + droneConsumption
  solarFarm: 0, // 50MW * solarFarm
  solarFarmCost: 4e4,
  powerProduction: 0, // solarFarm
  batteryTower: 0,
  batteryTowerCost: 1e7,
  powerStorage: 0, // powerConsumption - batteryTower
};
