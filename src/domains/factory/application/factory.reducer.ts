import { productionReducer } from '@/src/domains/factory/application/production.reducer.ts';
import type { FactoryAction, FactoryState } from '@/src/domains/factory/domain/factory.type.ts';

const reducers = [productionReducer];

export const factoryReducer = (state: FactoryState, action: FactoryAction): FactoryState => {
  return reducers.reduce(
    (currentState, reducer) => reducer(currentState, action) ?? currentState,
    action.type === 'INITIALIZE' ? { ...action.state } : state
  );
};
