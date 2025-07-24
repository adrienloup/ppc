import { type FC, useCallback, useEffect, useReducer } from 'react';
import { SaleContext, SaleDispatchContext } from './sale.context';
import { saleReducer } from '@/src/domains/sale/application/sale.reducer.ts';
import { useAccount } from '@/src/domains/account/interfaces/useAccount.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { SALE_KEY } from '@/src/domains/sale/infrastructure/sale.key.ts';
import { SALE_STATE } from '@/src/domains/sale/infrastructure/sale.state.ts';
import { USER_KEY } from '@/src/domains/authentification/infrastructure/user.key.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const SaleProvider: FC<{ children: Children }> = ({ children }) => {
  const saleStorage = useLocalStorage(SALE_KEY, SALE_STATE);
  const userStorage = useLocalStorage(USER_KEY, null);
  const [state, dispatch] = useReducer(saleReducer, saleStorage.get() ?? SALE_STATE);
  const { pause } = useAccount();
  const user = userStorage.get();

  const autoSale = useCallback(() => {
    dispatch({ type: 'SELL_UNSOLD_INVENTORY' });
  }, []);

  useInterval(autoSale, 5e2, !!user && !pause);

  useEffect(() => {
    if (!user) return;
    saleStorage.set(state);
  }, [state]);

  return (
    <SaleContext.Provider value={state}>
      <SaleDispatchContext.Provider value={dispatch}>{children}</SaleDispatchContext.Provider>
    </SaleContext.Provider>
  );
};
