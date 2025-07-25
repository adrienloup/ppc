import type { Intel, IntelDispatch } from '@/src/domains/intelligence/domaine/intel.type.ts';

export const intelReducer = (state: Intel, action: IntelDispatch): Intel => {
  switch (action.type) {
    case 'LOAD':
      return action.intelligence;
    case 'INCREASE_TRUST': {
      return {
        ...state,
        trust: Math.max(0, Math.min(state.trust + action.trust, 100)),
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
      if (state.processor <= 0 || state.operation === state.operationMax) return state;
      return {
        ...state,
        operation: Math.min(state.operation + 10 * state.processor, state.operationMax),
      };
    }
    default:
      return state;
  }
};
