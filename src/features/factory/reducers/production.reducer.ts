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
      if (state.wire <= 0) return state;

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
