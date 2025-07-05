import { productionReducer } from '@/src/features/factory/reducers/production.reducer.ts';
import type { FactoryAction, FactoryState } from '@/src/features/factory/factory.type.ts';

const reducers = [productionReducer];

export const factoryReducer = (state: FactoryState, action: FactoryAction): FactoryState => {
  return reducers.reduce(
    (currentState, reducer) => reducer(currentState, action) ?? currentState,
    action.type === 'INITIALIZE' ? { ...action.state } : state
  );
};
