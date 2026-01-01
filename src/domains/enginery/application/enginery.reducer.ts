import type { EngineryDispatchType, EngineryType } from '@/src/domains/enginery/application/enginery.type.ts';

export const engineryReducer = (state: EngineryType, action: EngineryDispatchType): EngineryType => {
  switch (action.type) {
    case 'BUY_AUTO_CLIPPER':
      return {
        ...state,
        autoClipper: {
          ...state.autoClipper,
          cost: {
            ...state.autoClipper.cost,
            value: state.autoClipper.cost.value + (Math.random() * 10 + 10), // 0|1 0|10 10|20
          },
          quantity: state.autoClipper.quantity + 1,
        },
      };
    case 'BUY_MEGA_CLIPPER':
      return {
        ...state,
        megaClipper: {
          ...state.megaClipper,
          cost: {
            ...state.megaClipper.cost,
            value: state.megaClipper.cost.value + 1e3,
          },
          quantity: state.megaClipper.quantity + 1,
        },
      };
    case 'BUY_PAPERCLIP_FACTORY':
      return {
        ...state,
        paperclipFactory: {
          ...state.paperclipFactory,
          cost: {
            ...state.paperclipFactory.cost,
            value: state.paperclipFactory.cost.value + (Math.random() * 5e5 + 5e5), // 0|1 0|5e5 5e5|1e6
          },
          quantity: state.paperclipFactory.quantity + 1,
        },
      };
    case 'BUY_BATTERY_TOWER':
      return {
        ...state,
        batteryTower: {
          ...state.batteryTower,
          quantity: state.batteryTower.quantity + 1,
        },
      };
    case 'BUY_SOLAR_FARM':
      return {
        ...state,
        solarFarm: {
          ...state.solarFarm,
          quantity: state.solarFarm.quantity + 1,
        },
      };
    case 'BUY_FRAMER_DRONE':
      return {
        ...state,
        farmerDrone: {
          ...state.farmerDrone,
          cost: {
            ...state.farmerDrone.cost,
            value: state.farmerDrone.cost.value + (Math.random() * 4e6 + 5e6), // 0|1 0|4e6 5e6|9e6
          },
          quantity: state.farmerDrone.quantity + 1,
        },
      };
    case 'BUY_HARVESTER_DRONE':
      return {
        ...state,
        harvesterDrone: {
          ...state.harvesterDrone,
          cost: {
            ...state.harvesterDrone.cost,
            value: state.harvesterDrone.cost.value + (Math.random() * 4e6 + 5e6), // 0|1 0|4e6 5e6|9e6
          },
          quantity: state.harvesterDrone.quantity + action.quantity,
        },
      };
    case 'BUY_FIGHTER_DRONE':
      return {
        ...state,
        fighterDrone: {
          ...state.fighterDrone,
          cost: {
            ...state.fighterDrone.cost,
            value: state.fighterDrone.cost.value + (Math.random() * 4e6 + 5e6), // 0|1 0|4e6 5e6|9e6
          },
          quantity: state.fighterDrone.quantity + action.quantity,
        },
      };
    case 'UPDATE_AUTO_CLIPPER_BONUS':
      return {
        ...state,
        autoClipper: {
          ...state.autoClipper,
          bonus: action.bonus,
        },
      };
    case 'UPDATE_MEGA_CLIPPER_BONUS':
      return {
        ...state,
        megaClipper: {
          ...state.megaClipper,
          bonus: action.bonus,
        },
      };
    case 'UPDATE_PAPERCLIP_FACTORY_BONUS':
      return {
        ...state,
        paperclipFactory: {
          ...state.paperclipFactory,
          bonus: action.bonus,
        },
      };
    case 'UPDATE_BATTERY_TOWER_BONUS':
      return {
        ...state,
        batteryTower: {
          ...state.batteryTower,
          bonus: action.bonus,
        },
      };
    case 'UPDATE_SOLAR_FARM_BONUS':
      return {
        ...state,
        solarFarm: {
          ...state.solarFarm,
          bonus: action.bonus,
        },
      };
    case 'UPDATE_FRAMER_DRONE_BONUS':
      return {
        ...state,
        farmerDrone: {
          ...state.farmerDrone,
          bonus: action.bonus,
        },
      };
    case 'UPDATE_HARVESTER_DRONE_BONUS':
      return {
        ...state,
        harvesterDrone: {
          ...state.harvesterDrone,
          bonus: action.bonus,
        },
      };
    case 'UPDATE_FIGHTER_DRONE_BONUS':
      return {
        ...state,
        fighterDrone: {
          ...state.fighterDrone,
          bonus: action.bonus,
        },
      };
    default:
      return state;
  }
};
