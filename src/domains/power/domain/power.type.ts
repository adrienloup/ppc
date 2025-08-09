export interface Power {
  batteryTower: number;
  batteryTowerCost: number;
  clipFactoryConsumption: number;
  droneConsumption: number;
  powerConsumption: number;
  powerProduction: number;
  powerStorage: number;
  solarFarm: number;
  solarFarmCost: number;
}

export type PowerDispatch = { type: 'LOAD'; power: Power };
