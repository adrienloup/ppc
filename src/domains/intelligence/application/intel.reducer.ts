import type {
  Intelligence,
  IntelligenceDispatch,
} from '@/src/domains/intelligence/domaine/intel.type.ts';

export const intelReducer = (state: Intelligence, action: IntelligenceDispatch): Intelligence => {
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
      if (state.memory > 100) return state;
      return {
        ...state,
        operationMax: (state.memory + 1) * 900,
        memory: Math.min(state.memory + 1, 100),
        trust: Math.max(0, state.trust - 1),
      };
    }
    case 'INCREASE_PROCESSOR': {
      if (state.processor > 100) return state;
      return {
        ...state,
        processor: Math.min(state.processor + 1, 100),
        trust: Math.max(0, state.trust - 1),
      };
    }
    default:
      return state;
  }
};
