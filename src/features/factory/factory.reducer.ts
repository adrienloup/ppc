import type { FactoryAction, FactoryState } from '@/src/features/factory/factory.type.ts';

export const factoryReducer = (state: FactoryState, action: FactoryAction): FactoryState => {
  switch (action.type) {
    case 'INITIALIZE': {
      return action.state;
    }
    case 'INCREMENT_CLIP': {
      return { ...state, clip: state.clip + 1 };
    }
    default:
      return state;
  }
};
