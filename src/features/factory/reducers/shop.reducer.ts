import type { FactoryAction, FactoryState } from '@/src/features/factory/factory.type.ts';

export const shopReducer = (state: FactoryState, action: FactoryAction): FactoryState => {
  switch (action.type) {
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
    default:
      return state;
  }
};
