import type { Power, PowerDispatch } from '@/src/domains/power/domain/power.type.ts';

export const powerReducer = (state: Power, action: PowerDispatch): Power => {
  switch (action.type) {
    case 'LOAD':
      return action.power;
    case 'POWER_CONSUMPTION': {
      const clipFactoryConsumption = action.clipFactory * 2e8;
      const batteryTowerConsumption = state.batteryTower * 1e7;
      const droneConsumption = action.drone * 1e6;
      const consumption = clipFactoryConsumption + batteryTowerConsumption + droneConsumption;
      return {
        ...state,
        clipFactoryConsumption,
        batteryTowerConsumption,
        droneConsumption,
        consumption,
      };
    }
    case 'POWER_PRODUCTION': {
      if (state.solarFarm < 1) return state;
      const production = state.solarFarm * 5e7 * Math.max(1, state.solarFarmBonus);
      return {
        ...state,
        production,
      };
    }
    case 'POWER_STORAGE': {
      const { consumption, batteryTower, batteryTowerBonus, production, storage, storageMax } = state;
      if (batteryTower < 1 || consumption > production || storage === storageMax) return state;
      const storageMaxPS = batteryTower * 1e4;
      const storageBonusPS = Math.max(0, production - consumption) * Math.max(1, batteryTowerBonus);
      const storagePS = Math.min(storage + storageBonusPS, storageMaxPS);
      return {
        ...state,
        storageMax: storageMaxPS,
        storage: storagePS,
      };
    }
    case 'BATTERY_TOWER': {
      const batteryTower = state.batteryTower + 1;
      return {
        ...state,
        batteryTower,
        batteryTowerCost: action.cost,
      };
    }
    case 'SOLAR_FARM': {
      const solarFarm = state.solarFarm + 1;
      return {
        ...state,
        solarFarm,
        solarFarmCost: action.cost,
      };
    }
    case 'BATTERY_TOWER_BONUS':
      return {
        ...state,
        batteryTowerBonus: action.bonus,
      };
    case 'SOLAR_FARM_BONUS':
      return {
        ...state,
        solarFarmBonus: action.bonus,
      };
    default:
      return state;
  }
};
