import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { TradeContext, TradeDisContext } from '@/src/domains/trade/infrastructure/trade.context.ts';
import { tradeReducer } from '@/src/domains/trade/application/trade.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { getTokens } from '@/src/domains/trade/interfaces/utils/getTokens.ts';
import { TRADE_KEY } from '@/src/domains/trade/infrastructure/trade.key.ts';
import { TRADE_STATE } from '@/src/domains/trade/infrastructure/trade.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const TradeProvider: FC<{ children: Children }> = ({ children }) => {
  const tradeStorage = useLocalStorage(TRADE_KEY, TRADE_STATE);
  const [state, dispatch] = useReducer(tradeReducer, tradeStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useProfile();

  const updateToken = useCallback(() => {
    const token = getTokens(state.token);
    dispatch({ type: 'UPDATE_TOKEN', token });
  }, [state.token]);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      trade: users[user].factory?.trade ?? TRADE_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    tradeStorage.set(state);
  }, [state]);

  useInterval(updateToken, 5e3, !!user && !pause);

  return (
    <TradeContext.Provider value={state}>
      <TradeDisContext.Provider value={dispatch}>{children}</TradeDisContext.Provider>
    </TradeContext.Provider>
  );
};
