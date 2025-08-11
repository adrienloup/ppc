import type { IT, ITDispatch } from '@/src/domains/it/domain/it.type.ts';

export const itReducer = (state: IT, action: ITDispatch): IT => {
  switch (action.type) {
    case 'LOAD':
      return action.it;
    case 'INCREASE_TRUST': {
      return {
        ...state,
        trust: Math.max(0, Math.min(state.trust + action.trust, 100)),
      };
    }
    case 'INCREASE_GIFTS': {
      if (state.gifts > 100) return state;
      const gifts = Math.min(100, state.gifts + action.gifts);
      return {
        ...state,
        gifts,
      };
    }
    case 'INCREASE_MEMORY': {
      return {
        ...state,
        operationMax: (state.memory + 1) * 900,
        memory: Math.min(state.memory + 1, 100),
        trust: Math.max(0, state.trust - 1),
      };
    }
    case 'INCREASE_PROCESSOR': {
      return {
        ...state,
        processor: Math.min(state.processor + 1, 100),
        trust: Math.max(0, state.trust - 1),
      };
    }
    case 'INCREASE_OPERATION': {
      if (state.processor < 1 || state.operation === state.operationMax) return state;
      const operationIO = Math.min(state.operation + 10 * state.processor, state.operationMax);
      return {
        ...state,
        operation: operationIO,
      };
    }
    case 'INCREASE_CREATIVITY': {
      if (state.operation < state.operationMax) return state;
      const creativityIC = state.creativity + 10 + Math.floor(Math.random() * 10); // 0 1, 0 10, 10 20;
      return {
        ...state,
        creativity: creativityIC,
      };
    }
    default:
      return state;
  }
};
