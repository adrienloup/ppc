import type { Production, ProductionDispatch } from '@/src/domains/production/domain/prod.type.ts';

export const prodReducer = (state: Production, action: ProductionDispatch): Production => {
  switch (action.type) {
    case 'LOAD':
      return action.production;
    case 'INCREASE_CLIP': {
      const clip = state.clip + action.clip;
      return {
        clip,
        clipPerSecond: action.clipPerSecond,
      };
    }
    default:
      return state;
  }
};
