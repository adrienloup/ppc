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
        fundsPerSecond: state.fundsPerSecond + unsoldInventoryBonusIC * state.clipPrice,
      };
    }
    case 'PRODUCTION_PER_SECOND': {
      if (state.wire <= 0) return state;

      const clipperPPS = state.clipper * Math.max(1, state.clipperBonus);
      const megaClipperPPS = state.megaClipper * 500 * Math.max(1, state.megaClipperBonus);
      const clipFactoryPPS = state.clipFactory * 1e3 * Math.max(1, state.clipFactoryBonus);
      const clipPPS =
        (clipperPPS + megaClipperPPS + clipFactoryPPS) * Math.max(1, state.unsoldInventoryBonus);
      const wirePPS = Math.max(0, state.wire - (state.clipper + state.megaClipper + state.clipFactory));
      const fundsPPS = clipPPS * state.clipPrice;

      return {
        ...state,
        wire: wirePPS,
        clip: state.clip + clipPPS,
        unsoldInventory: state.unsoldInventory + clipPPS,
        clipPerSecond: clipPPS,
        fundsPerSecond: fundsPPS,
      };
    }
    case 'UPDATE_CLIPPER_BONUS': {
      return {
        ...state,
        clipperBonus: action.bonus,
      };
    }
    case 'UPDATE_MEGA_CLIPPER_BONUS': {
      return {
        ...state,
        megaClipperBonus: action.bonus,
      };
    }
    case 'UPDATE_CLIP_FACTORY_BONUS': {
      return {
        ...state,
        clipFactoryBonus: action.bonus,
      };
    }
    case 'UPDATE_UNSOLD_INVENTORY_BONUS': {
      return {
        ...state,
        unsoldInventoryBonus: action.bonus,
      };
    }
    case 'UPDATE_MARKETING_BONUS': {
      return {
        ...state,
        marketingBonus: action.bonus,
        clipPrice: state.clipPriceRef * Math.max(1, action.bonus),
      };
    }
    default:
      return state;
  }
};
