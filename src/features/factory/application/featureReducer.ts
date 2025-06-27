import type { Factory, FactoryDispatch } from '@/src/features/factory/domain/Factory.ts';

export const featureReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'BUY_FEATURE': {
      const featureName = action.feature;
      const feature = state.feature?.[featureName];

      if (!feature || feature.quantity === 0) {
        console.info(`Feature: you cannot buy ${featureName}`);
        return state;
      }

      const canBuy = feature.costs?.every(({ unit, value }) => {
        const available = state[unit] ?? 0;
        return available >= value;
      });

      if (!canBuy) {
        console.info(`Feature: not enough resources to buy ${featureName}`);
        return state;
      }

      const updatedFeatures = { ...state.feature };
      const updatedState: Partial<Factory> = { feature: updatedFeatures };

      feature.costs?.forEach(({ unit, value }) => {
        updatedState[unit] = (state[unit] ?? 0) - value;
      });

      if (Array.isArray(feature.effects)) {
        if (feature.effects.every((e) => typeof e === 'string')) {
          feature.effects?.forEach((f) => {
            updatedFeatures[f] = {
              ...updatedFeatures[f],
              enabled: !updatedFeatures[f].enabled,
            };
          });
        } else if (feature.effects.every((e) => typeof e === 'object')) {
          feature.effects?.forEach(({ unit, value }) => {
            updatedState[unit] = (state[unit] ?? 0) + value;
          });
        }
      } else {
        console.info(`Feature: ${featureName} has no effect`);
      }

      if (feature.quantity! <= 1) {
        updatedFeatures[featureName] = {
          ...updatedFeatures[featureName],
          quantity: 0,
          enabled: false,
        };
      } else {
        updatedFeatures[featureName] = {
          ...updatedFeatures[featureName],
          quantity: updatedFeatures[featureName].quantity! - 1,
        };
      }
      console.info(`Feature: ${featureName} purchased`);
      console.info(updatedState);

      return {
        ...state,
        ...updatedState,
      };
    }
    case 'UPDATE_FEATURE':
      return {
        ...state,
        feature: {
          ...state.feature,
          [action.feature]: {
            ...state.feature[action.feature],
            actived: action.actived,
            enabled: action.enabled,
          },
        },
      };
    default:
      return state;
  }
};
