import type { Factory, FactoryDispatch } from '@/src/features/factory/domain/factory.ts';
import { mechanicPerSecond } from '@/src/features/factory/utils/mechanicPerSecond.ts';

export const productionReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'PRODUCTION_PER_SECOND': {
      // console.log('PRODUCTION_PER_SECOND');
      const mechanicPPS = mechanicPerSecond(state);
      const clipPPS = mechanicPPS.clip * Math.max(1, state.unsoldInventoryBonus);
      const fundsPPS = clipPPS * state.clipPrice;
      const operationPPS = Math.min(state.operationMax, state.operation + 10 * state.processor);
      const creativityPPS = state.creativity + 10 + Math.floor(Math.random() * 10); // 0 1, 0 10, 10 20;
      const wireDronePPS = state.wireDrone * (1 - state.swarmStrategy / 100) * (1 - state.disorganization / 100);
      const harvesterDronePPS =
        state.harvesterDrone * (1 - state.swarmStrategy / 100) * (1 - state.disorganization / 100);
      const availableMatterPPS = Math.max(0, state.availableMatter - harvesterDronePPS);
      // const acquiredMatterPPS =
      //   availableMatterPPS >= harvesterDronePPS ? state.acquiredMatter + harvesterDronePPS : state.acquiredMatter;
      const acquiredMatterPPS =
        state.acquiredMatter + (availableMatterPPS >= harvesterDronePPS ? harvesterDronePPS : 0);
      // const wirePPS = Math.max(0, state.wire + wireDronePPS - mechanicPPS.wire);
      const wireChange = acquiredMatterPPS >= wireDronePPS ? wireDronePPS : 0;
      const wirePPS = Math.max(0, state.wire + wireChange - mechanicPPS.wire);
      // const wirePPS =
      //   acquiredMatterPPS >= wireDronePPS
      //     ? Math.max(0, state.wire + wireDronePPS - mechanicPPS.wire)
      //     : Math.max(0, state.wire - mechanicPPS.wire);
      return {
        ...state,
        acquiredMatter: acquiredMatterPPS,
        availableMatter: availableMatterPPS,
        clip: state.clip + clipPPS,
        clipPerSecond: clipPPS,
        creativity: creativityPPS,
        fundsPerSecond: fundsPPS,
        operation: operationPPS,
        unsoldInventory: state.unsoldInventory + clipPPS,
        wire: wirePPS,
        wirePerSecond: wireDronePPS,
        matterPerSecond: harvesterDronePPS,
      };
    }
    case 'UNIT_PRODUCTION': {
      if (state.wire <= 0) return state;
      const unsoldInventoryBonusUP = Math.max(1, state.unsoldInventoryBonus);
      return {
        ...state,
        clip: state.clip + unsoldInventoryBonusUP,
        unsoldInventory: state.unsoldInventory + unsoldInventoryBonusUP,
        wire: state.wire - 1,
        clipPerSecond: state.clipPerSecond + unsoldInventoryBonusUP,
        fundsPerSecond: state.fundsPerSecond + unsoldInventoryBonusUP * state.clipPrice,
      };
    }
    default:
      return state;
  }
};
