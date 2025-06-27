import type { Factory, FactoryDispatch } from '@/src/features/factory/domain/Factory.ts';

export const resourcesReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'INCREASE_MEMORY':
      if (state.memory > 100) return state;
      return {
        ...state,
        memory: Math.min(state.memory + 1, 100),
        trust: Math.max(0, state.trust - 1),
        operationMax: (state.memory + 1) * 900,
      };
    case 'INCREASE_PROCESSOR':
      if (state.processor > 100) return state;
      return {
        ...state,
        processor: Math.min(state.processor + 1, 100),
        trust: Math.max(0, state.trust - 1),
      };
    case 'INCREASE_TRUST':
      if (state.trust > 100) return state;
      return {
        ...state,
        trust: Math.max(0, Math.min(state.trust + action.trust, 100)),
        trustRef: action.trust,
      };
    case 'ALLOCATE_TRUST': {
      // console.log('ALLOCATE_TRUST');
      return {
        ...state,
        memory: 0,
        processor: 0,
        trust: Math.min(state.trust + state.memory + state.processor, 100),
      };
    }
    case 'BUY_MARKETING':
      if (state.funds < state.marketingCost) return state;
      return {
        ...state,
        marketing: Math.max(1, Math.min(state.marketing + 1, 10)),
        marketingCost: Math.max(100, Math.min(state.marketingCost * 2.5, 25600)),
        funds: Math.max(0, state.funds - state.marketingCost),
      };
    case 'BUY_WIRE':
      if (state.funds < state.wireCost) return state;
      return {
        ...state,
        wire: state.wire + state.wireQuantity,
        wireCost: action.cost,
        funds: Math.max(0, state.funds - action.cost),
      };
    case 'UPDATE_WIRE_COST':
      // console.log('UPDATE_WIRE_COST');
      return {
        ...state,
        wireCost: action.cost,
      };
    case 'UPDATE_WIRE_QUANTITY':
      return {
        ...state,
        wireQuantity: action.quantity,
      };
    case 'UPDATE_MARKETING_BONUS':
      return {
        ...state,
        marketingBonus: action.bonus,
        clipPrice: state.clipPriceRef * Math.max(1, action.bonus),
      };
    default:
      return state;
  }
};
