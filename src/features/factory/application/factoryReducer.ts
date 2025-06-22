import type { Factory } from '@/src/features/factory/domain/factory.ts';
import type { FactoryDispatch } from '@/src/features/factory/domain/factory.ts';
import { businessReducer } from '@/src/features/factory/application/businessReducer.ts';
import { featureReducer } from '@/src/features/factory/application/featureReducer.ts';
import { mechanicReducer } from '@/src/features/factory/application/mechanicReducer.ts';
import { productionReducer } from '@/src/features/factory/application/productionReducer.ts';
import { resourcesReducer } from '@/src/features/factory/application/resourcesReducer.ts';
import { swarmReducer } from '@/src/features/factory/application/swarmReducer.ts';

const reducers = [businessReducer, featureReducer, mechanicReducer, productionReducer, resourcesReducer, swarmReducer];

export const factoryReducer = (state: Factory, action: FactoryDispatch): Factory => {
  return reducers.reduce(
    (currentState, reducer) => {
      const nextState = reducer(currentState, action);
      return nextState ?? currentState;
    },
    action.type === 'INITIALIZE' ? { ...action.state } : state
  );
};
