export interface Power {
  batteryTower: number;
  batteryTowerBonus: number;
  batteryTowerConsumption: number;
  batteryTowerCost: number;
  clipFactoryConsumption: number;
  droneConsumption: number;
  consumption: number;
  production: number;
  storage: number;
  storageMax: number;
  solarFarm: number;
  solarFarmBonus: number;
  solarFarmCost: number;
}

export type PowerDispatch =
  | { type: 'LOAD'; power: Power }
  | { type: 'POWER_CONSUMPTION'; clipFactory: number; drone: number }
  | { type: 'POWER_PRODUCTION' }
  | { type: 'POWER_STORAGE' }
  | { type: 'BATTERY_TOWER'; cost: number }
  | { type: 'SOLAR_FARM'; cost: number }
  | { type: 'BATTERY_TOWER_BONUS'; bonus: number }
  | { type: 'SOLAR_FARM_BONUS'; bonus: number };
