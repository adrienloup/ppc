import type { Factory, FactoryDispatch } from '@/src/features/factory/domain/Factory.ts';

function mechanicPerSecond(state: Factory): { clip: number; wire: number } {
  const { wire, feature, clipFactory, clipFactoryBonus, megaClipper, clipper, clipperBonus, megaClipperBonus } = state;
  const clipFactoryPS = Math.min(clipFactory * 1e3 * Math.max(1, clipFactoryBonus), 1e11);

  if (feature.clipFactory.enabled) {
    return wire >= clipFactory ? { clip: clipFactoryPS, wire: clipFactory } : { clip: 0, wire: 0 };
  }

  const megaClipperPS = megaClipper * 500 * Math.max(1, megaClipperBonus);
  const clipperPS = clipper * Math.max(1, clipperBonus);
  const totalClipper = megaClipper + clipper;

  if (wire >= totalClipper) return { clip: megaClipperPS + clipperPS, wire: totalClipper };
  if (wire >= megaClipper) return { clip: megaClipperPS, wire: megaClipper };
  if (wire >= clipper) return { clip: clipperPS, wire: clipper };

  return { clip: 0, wire: 0 };
}

export const productionReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'PRODUCTION_PER_SECOND': {
      const mechanicPPS = mechanicPerSecond(state);
      const clipPPS = mechanicPPS.clip * Math.max(1, state.unsoldInventoryBonus);
      const fundsPPS = clipPPS * state.clipPrice;
      const operationPPS = state.feature.resources.enabled
        ? Math.min(state.operationMax, state.operation + 10 * state.processor)
        : 0;
      const creativityPPS = Math.min(
        operationPPS === state.operationMax ? state.creativity + 100 : state.creativity,
        Math.floor(state.operationMax * 1.2)
      );
      const wireDronePPS = state.wireDrone * (1 - state.swarmStrategy / 100) * (1 - state.disorganization / 100);
      const harvesterDronePPS =
        state.harvesterDrone * (1 - state.swarmStrategy / 100) * (1 - state.disorganization / 100);
      const availableMatterPPS = Math.max(0, state.availableMatter - harvesterDronePPS);
      // const acquiredMatterPPS =
      //   availableMatterPPS >= harvesterDronePPS ? state.acquiredMatter + harvesterDronePPS : state.acquiredMatter;
      const acquiredMatterPPS =
        state.acquiredMatter + (availableMatterPPS >= harvesterDronePPS ? harvesterDronePPS : 0);
      const wireChange = acquiredMatterPPS >= wireDronePPS ? wireDronePPS : 0;
      // const wirePPS =
      //   acquiredMatterPPS >= wireDronePPS
      //     ? Math.max(0, state.wire + wireDronePPS - mechanicPPS.wire)
      //     : Math.max(0, state.wire - mechanicPPS.wire);
      const wirePPS = Math.max(0, state.wire + wireChange - mechanicPPS.wire);
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
