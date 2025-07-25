import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { SaleContext, SaleDisContext } from '@/src/domains/sale/infrastructure/sale.context.tsx';
import { saleReducer } from '@/src/domains/sale/application/sale.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { useSetti } from '@/src/domains/settings/interfaces/useSetti.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { SALE_KEY } from '@/src/domains/sale/infrastructure/sale.key.ts';
import { SALE_STATE } from '@/src/domains/sale/infrastructure/sale.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const SaleProvider: FC<{ children: Children }> = ({ children }) => {
  const saleStorage = useLocalStorage(SALE_KEY, SALE_STATE);
  const [state, dispatch] = useReducer(saleReducer, saleStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useSetti();

  const autoSale = useCallback(() => {
    dispatch({ type: 'DECREASE_INVENTORY' });
  }, []);

  useEffect(() => {
    if (!user || user == userRef.current) return;
    dispatch({ type: 'LOAD', sale: users[user].factory?.sale ?? SALE_STATE });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    saleStorage.set(state);
  }, [state]);

  useInterval(autoSale, 5e2, !!user && !pause);

  return (
    <SaleContext.Provider value={state}>
      <SaleDisContext.Provider value={dispatch}>{children}</SaleDisContext.Provider>
    </SaleContext.Provider>
  );
};
