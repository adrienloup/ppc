import type { Production, ProductionDispatch } from '@/src/domains/production/domain/prod.type.ts';

export const prodReducer = (state: Production, action: ProductionDispatch): Production => {
  switch (action.type) {
    case 'LOAD':
      return action.production;
    case 'PROD_CLIP':
      return {
        clip: state.clip + 1,
        clipPerSecond: state.clipPerSecond + 1,
      };
    case 'AUTO_PROD_CLIP':
      return {
        clip: state.clip + action.clip,
        clipPerSecond: action.clip,
      };
    default:
      return state;
  }
};
