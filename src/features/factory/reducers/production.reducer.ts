import type { FactoryAction, FactoryState } from '@/src/features/factory/factory.type.ts';

export const productionReducer = (state: FactoryState, action: FactoryAction): FactoryState => {
  switch (action.type) {
    case 'INCREMENT_CLIP': {
      if (state.wire <= 0) return state;

      const unsoldInventoryBonusIC = Math.max(1, state.unsoldInventoryBonus);

      return {
        ...state,
        wire: state.wire - 1,
        clip: state.clip + unsoldInventoryBonusIC,
        unsoldInventory: state.unsoldInventory + unsoldInventoryBonusIC,
        clipPerSecond: state.clipPerSecond + unsoldInventoryBonusIC,
        // fundsPerSecond: state.fundsPerSecond + unsoldInventoryBonusIC * state.clipPrice,
      };
    }
    case 'PRODUCTION_PER_SECOND': {
      // function mechanicPerSecond(state: Factory): { clip: number; wire: number } {
      //   const { wire, feature, clipFactory, clipFactoryBonus, megaClipper, clipper, clipperBonus, megaClipperBonus } = state;
      //   const clipFactoryPS = Math.min(clipFactory * 1e3 * Math.max(1, clipFactoryBonus), 1e11);
      //
      //   if (feature.clipFactory.enabled) {
      //     return wire >= clipFactory ? { clip: clipFactoryPS, wire: clipFactory } : { clip: 0, wire: 0 };
      //   }

      // const wirePPS = 0 + 0 + state.clipFactory;

      //return wire: state.wire - wirePPS

      //   const totalClipper = megaClipper + clipper;
      //
      //   if (wire >= totalClipper) return { clip: megaClipperPS + clipperPS, wire: totalClipper };
      //   if (wire >= megaClipper) return { clip: megaClipperPS, wire: megaClipper };
      //   if (wire >= clipper) return { clip: clipperPS, wire: clipper };
      //
      //   return { clip: 0, wire: 0 };
      // }
      // const mechanicPPS = mechanicPerSecond(state);
      // const clipperPPS = state.clipper * Math.max(1, state.clipperBonus);
      // const megaClipperPPS = state.megaClipper * 500 * Math.max(1, state.megaClipperBonus);
      // const clipFactoryPPS = state.clipFactory * 1e3 * Math.max(1, state.clipFactoryBonus);
      // const clipPPS = (clipperPPS + megaClipperPPS + clipFactoryPPS) * Math.max(1, state.unsoldInventoryBonus);
      // const wirePPS = Math.max(0, state.wire - (state.clipper + state.megaClipper + state.clipFactory));
      // const fundsPPS = clipPPS * state.clipPrice;
      // const operationPPS = state.feature.resources.enabled
      //   ? Math.min(state.operationMax, state.operation + 10 * state.processor)
      //   : 0;
      // const creativityPPS = Math.min(
      //   operationPPS === state.operationMax ? state.creativity + 100 : state.creativity,
      //   Math.floor(state.operationMax * 1.2)
      // );
      // const wireDronePPS = state.wireDrone * (1 - state.swarmStrategy / 100) * (1 - state.disorganization / 100);
      // const harvesterDronePPS =
      //   state.harvesterDrone * (1 - state.swarmStrategy / 100) * (1 - state.disorganization / 100);
      // const availableMatterPPS = Math.max(0, state.availableMatter - harvesterDronePPS);
      // // const acquiredMatterPPS =
      // //   availableMatterPPS >= harvesterDronePPS ? state.acquiredMatter + harvesterDronePPS : state.acquiredMatter;
      // const acquiredMatterPPS =
      //   state.acquiredMatter + (availableMatterPPS >= harvesterDronePPS ? harvesterDronePPS : 0);
      // const wireChange = acquiredMatterPPS >= wireDronePPS ? wireDronePPS : 0;
      // //   acquiredMatterPPS >= wireDronePPS
      // //     ? Math.max(0, state.wire + wireDronePPS - mechanicPPS.wire)
      // //     : Math.max(0, state.wire - mechanicPPS.wire);
      // const wirePPS = Math.max(0, state.wire + wireChange - mechanicPPS.wire);
      const clipperPPS = state.clipper * Math.max(1, state.clipperBonus);
      const megaClipperPPS = state.megaClipper * 500 * Math.max(1, state.megaClipperBonus);
      const clipFactoryPPS = state.clipFactory * 1e3 * Math.max(1, state.clipFactoryBonus);
      const clipPPS = (clipperPPS + megaClipperPPS + clipFactoryPPS) * Math.max(1, state.unsoldInventoryBonus);
      const wirePPS = Math.max(0, state.wire - (state.clipper + state.megaClipper + state.clipFactory));

      return {
        ...state,
        wire: wirePPS,
        clip: state.clip + clipPPS,
        unsoldInventory: state.unsoldInventory + clipPPS,
        clipPerSecond: clipPPS,
        // acquiredMatter: acquiredMatterPPS,
        // availableMatter: availableMatterPPS,
        // creativity: creativityPPS,
        // fundsPerSecond: fundsPPS,
        // operation: operationPPS,
        // wirePerSecond: wireDronePPS,
        // matterPerSecond: harvesterDronePPS,
      };
    }
    default:
      return state;
  }
};
