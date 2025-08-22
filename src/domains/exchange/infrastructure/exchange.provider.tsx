import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { exchangeReducer } from '@/src/domains/exchange/application/exchange.reducer.ts';
import { ExchangeContext, ExchangeDisContext } from '@/src/domains/exchange/infrastructure/exchange.context.ts';
import { EXCHANGE_KEY } from '@/src/domains/exchange/infrastructure/exchange.key.ts';
import { EXCHANGE_STATE } from '@/src/domains/exchange/infrastructure/exchange.state.ts';
import { getExchange } from '@/src/domains/exchange/interfaces/getExchange.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const ExchangeProvider: FC<{ children: Children }> = ({ children }) => {
  const exchangeStorage = useLocalStorage(EXCHANGE_KEY, EXCHANGE_STATE);
  const [state, dispatch] = useReducer(exchangeReducer, exchangeStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useProfile();

  const autoExchange = useCallback(() => {
    const exchange = getExchange(state);
    dispatch({ type: 'EXCHANGE', exchange });
  }, [state]);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      exchange: users[user].factory?.exchange ?? EXCHANGE_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    exchangeStorage.set(state);
  }, [state]);

  useInterval(autoExchange, 4e3, !!user && !pause);

  return (
    <ExchangeContext.Provider value={state}>
      <ExchangeDisContext.Provider value={dispatch}>{children}</ExchangeDisContext.Provider>
    </ExchangeContext.Provider>
  );
};
