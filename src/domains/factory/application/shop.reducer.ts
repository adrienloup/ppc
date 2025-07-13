import type { FactoryState } from '@/src/domains/factory/domain/factoryState.type.ts';
import type { FactoryAction } from '@/src/domains/factory/domain/factoryAction.type.ts';

export const shopReducer = (state: FactoryState, action: FactoryAction): FactoryState => {
  switch (action.type) {
    case 'BUY_PRODUCT': {
      const productName = action.product;
      const product = state.product?.[productName];

      if (!product || product.quantity === 0) {
        console.info(`Product: you cannot buy ${productName}`);
        return state;
      }

      const canBuy = product.cost?.every(({ asset, value }) => {
        const available = state[asset] ?? 0;
        return available >= value;
      });

      if (!canBuy) {
        console.info(`Product: not enough resources to buy ${productName}`);
        return state;
      }

      const updatedProducts = { ...state.product };
      const updatedState: Partial<FactoryState> = { product: updatedProducts };

      product.cost?.forEach(({ asset, value }) => {
        updatedState[asset] = (state[asset] ?? 0) - value;
      });

      if (Array.isArray(product.effects)) {
        if (product.effects.every((e) => typeof e === 'string')) {
          product.effects?.forEach((f) => {
            updatedProducts[f] = {
              ...updatedProducts[f],
              available: !updatedProducts[f].available,
            };
          });
        } else if (product.effects.every((e) => typeof e === 'object')) {
          product.effects?.forEach(({ asset, value }) => {
            updatedState[asset] = (state[asset] ?? 0) + value;
          });
        }
      } else {
        console.info(`Product: ${productName} has no effect`);
      }

      if (product.quantity! <= 1) {
        updatedProducts[productName] = {
          ...updatedProducts[productName],
          quantity: 0,
          available: false,
        };
      } else {
        updatedProducts[productName] = {
          ...updatedProducts[productName],
          quantity: updatedProducts[productName].quantity! - 1,
        };
      }
      console.info(`Product: ${productName} purchased`);
      console.info(updatedState);

      return {
        ...state,
        ...updatedState,
      };
    }
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
