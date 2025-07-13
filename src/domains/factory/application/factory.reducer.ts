import { productionReducer } from '@/src/domains/factory/application/production.reducer.ts';
import { shopReducer } from '@/src/domains/factory/application/shop.reducer.ts';
import type { FactoryState } from '@/src/domains/factory/domain/factoryState.type.ts';
import type { FactoryAction } from '@/src/domains/factory/domain/factoryAction.type.ts';

const reducers = [productionReducer, shopReducer];

export const factoryReducer = (state: FactoryState, action: FactoryAction): FactoryState => {
  return reducers.reduce(
    (currentState, reducer) => reducer(currentState, action) ?? currentState,
    action.type === 'INITIALIZE' ? { ...action.state } : state
  );
};
