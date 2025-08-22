import type { Merchandise, MerchandiseDispatch } from '@/src/domains/merchandise/domain/merch.type.ts';

export const merchReducer = (state: Merchandise, action: MerchandiseDispatch): Merchandise => {
  switch (action.type) {
    case 'LOAD':
      return action.merchandise;
    case 'BUY_MERCHANDISE': {
      // const name = action.name;
      // const merchandise = state[name];
      // console.log('name', name, 'merchandise', merchandise);
      //
      // if (!merchandise || merchandise.quantity === 0) {
      //   console.info(`Merchandise: you cannot buy ${name}`);
      //   return state;
      // }

      // const canBuy = merchandise.cost?.every(({ asset, value }) => {
      //   const available = state[asset] ?? 0;
      //   return available >= value;
      // });

      //
      // if (!canBuy) {
      //   console.info(`Feature: not enough resources to buy ${name}`);
      //   return state;
      // }
      //
      // const updatedFeatures = { ...state.feature };
      // const updatedState: Partial<Factory> = { feature: updatedFeatures };
      //
      // feature.costs?.forEach(({ unit, value }) => {
      //   updatedState[unit] = (state[unit] ?? 0) - value;
      // });
      //
      // if (Array.isArray(feature.effects)) {
      //   if (feature.effects.every((e) => typeof e === 'string')) {
      //     feature.effects?.forEach((f) => {
      //       updatedFeatures[f] = {
      //         ...updatedFeatures[f],
      //         enabled: !updatedFeatures[f].enabled,
      //       };
      //     });
      //   } else if (feature.effects.every((e) => typeof e === 'object')) {
      //     feature.effects?.forEach(({ unit, value }) => {
      //       updatedState[unit] = (state[unit] ?? 0) + value;
      //     });
      //   }
      // } else {
      //   console.info(`Feature: ${name} has no effect`);
      // }
      //
      // if (feature.quantity! <= 1) {
      //   updatedFeatures[name] = {
      //     ...updatedFeatures[name],
      //     quantity: 0,
      //     enabled: false,
      //   };
      // } else {
      //   updatedFeatures[name] = {
      //     ...updatedFeatures[name],
      //     quantity: updatedFeatures[name].quantity! - 1,
      //   };
      // }
      // console.info(`Feature: ${name} purchased`);
      // console.info(updatedState);
      //
      // return {
      //   ...state,
      //   ...updatedState,
      // };
      return state;
    }
    case 'UNLOCKED_MERCHANDISE': {
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          unlocked: action.unlocked ?? state[action.name].unlocked,
        },
      };
    }
    default:
      return state;
  }
};
