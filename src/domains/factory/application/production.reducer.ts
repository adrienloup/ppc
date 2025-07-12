import type { FactoryState } from '@/src/domains/factory/domain/factoryState.type.ts';
import type { FactoryAction } from '@/src/domains/factory/domain/factoryAction.type.ts';

export const productionReducer = (state: FactoryState, action: FactoryAction): FactoryState => {
  switch (action.type) {
    case 'SELL_UNSOLD_INVENTORY': {
      if (state.unsoldInventory <= 0) return state;

      const unsoldInventorySUI = Math.max(0, Math.floor(state.unsoldInventory * (1 - state.publicDemand)));
      const fundsSUI = state.funds + (state.unsoldInventory - unsoldInventorySUI) * state.clipPrice;

      return {
        ...state,
        unsoldInventory: unsoldInventorySUI,
        funds: fundsSUI,
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
    case 'BUY_WIRE': {
      if (state.funds < action.cost) return state;

      const fundsBW = Math.max(0, state.funds - action.cost);

      return {
        ...state,
        wire: state.wire + state.wireQuantity,
        wireCost: action.cost,
        funds: fundsBW,
      };
    }
    case 'BUY_CLIPPER': {
      if (state.funds < state.clipperCost) return state;

      const fundsBC = Math.max(0, state.funds - action.cost);

      return {
        ...state,
        clipper: state.clipper + 1,
        clipperCost: action.cost,
        funds: fundsBC,
      };
    }
    case 'BUY_CLIP_FACTORY': {
      if (state.funds < state.clipFactoryCost) return state;

      const clipFactoryBonusBCF =
        state.clipFactory + 1 >= 20 ? 1e3 : state.clipFactory + 1 >= 10 ? 1e2 : state.clipFactoryBonus; // @TODO
      const fundsBCF = Math.max(0, state.funds - state.clipFactoryCost);

      return {
        ...state,
        clipFactory: state.clipFactory + 1,
        clipFactoryBonus: clipFactoryBonusBCF,
        clipFactoryCost: action.cost,
        funds: fundsBCF,
      };
    }
    case 'BUY_MEGA_CLIPPER': {
      if (state.funds < state.megaClipperCost) return state;

      const fundsBMC = Math.max(0, state.funds - action.cost);

      return {
        ...state,
        funds: fundsBMC,
        megaClipper: state.megaClipper + 1,
        megaClipperCost: action.cost,
      };
    }
    case 'ALLOCATE_TRUST': {
      return {
        ...state,
        memory: 0,
        processor: 0,
        trust: Math.min(state.trust + state.memory + state.processor, 100),
      };
    }
    case 'UPDATE_SHOP': {
      const key = action.model === 'product' ? 'product' : 'feature';

      return {
        ...state,
        [key]: {
          ...state[key],
          [action.name]: {
            ...state[key][action.name],
            available: action.available,
          },
        },
      };
    }
    case 'UPDATE_WIRE_COST': {
      return {
        ...state,
        wireCost: action.cost,
      };
    }
    case 'UPDATE_WIRE_QUANTITY': {
      return {
        ...state,
        wireQuantity: action.quantity,
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
    case 'UPDATE_MARKETING_BONUS': {
      return {
        ...state,
        marketingBonus: action.bonus,
        clipPrice: state.clipPriceRef * Math.max(1, action.bonus), // @TODO
      };
    }
    case 'UPDATE_UNSOLD_INVENTORY_BONUS': {
      return {
        ...state,
        unsoldInventoryBonus: action.bonus,
      };
    }
    default:
      return state;
  }
};
