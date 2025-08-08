import type { Production, ProductionDispatch } from '@/src/domains/production/domain/prod.type.ts';

export const prodReducer = (state: Production, action: ProductionDispatch): Production => {
  switch (action.type) {
    case 'LOAD':
      return action.production;
    case 'INCREASE_CLIP':
      return {
        clip: state.clip + 1,
        clipPerSecond: state.clipPerSecond + 1,
      };
    case 'AUTO_INCREASE_CLIP':
      return {
        clip: state.clip + action.clip,
        clipPerSecond: action.clip,
      };
    default:
      return state;
  }
};
