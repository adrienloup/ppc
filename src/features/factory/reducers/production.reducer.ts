import type { FactoryAction, FactoryState } from '@/src/features/factory/factory.type.ts';

export const productionReducer = (state: FactoryState, action: FactoryAction): FactoryState => {
  switch (action.type) {
    case 'INCREMENT_CLIP': {
      if (state.wire <= 0) return state;
      const unsoldInventoryBonusUP = Math.max(1, state.unsoldInventoryBonus);
      return {
        ...state,
        wire: state.wire - 1,
        clip: state.clip + unsoldInventoryBonusUP,
        unsoldInventory: state.unsoldInventory + unsoldInventoryBonusUP,
        // clipPerSecond: state.clipPerSecond + unsoldInventoryBonusUP,
        // fundsPerSecond: state.fundsPerSecond + unsoldInventoryBonusUP * state.clipPrice,
      };
    }
    default:
      return state;
  }
};
