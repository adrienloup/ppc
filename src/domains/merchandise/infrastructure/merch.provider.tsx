import { type FC, useEffect, useReducer, useRef } from 'react';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { useFunds } from '@/src/domains/funds/interfaces/useFunds.ts';
import { useIT } from '@/src/domains/it/interfaces/useIT.ts';
import { useMeca } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import { merchReducer } from '@/src/domains/merchandise/application/merch.reducer.ts';
import { MerchContext, MerchDisContext } from '@/src/domains/merchandise/infrastructure/merch.context.tsx';
import { MERCHANDISE_KEY } from '@/src/domains/merchandise/infrastructure/merch.key.ts';
import { MERCHANDISE_STATE } from '@/src/domains/merchandise/infrastructure/merch.state.ts';
import { useNotifDispatch } from '@/src/domains/notification/interfaces/useNotif.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const MerchProvider: FC<{ children: Children }> = ({ children }) => {
  const merStorage = useLocalStorage(MERCHANDISE_KEY, MERCHANDISE_STATE);
  const [state, dispatch] = useReducer(merchReducer, merStorage.get());
  const notifDispatch = useNotifDispatch();
  const { creativity, operation, trust } = useIT();
  const { clipper } = useMeca();
  const { funds } = useFunds();
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);

  useEffect(() => {
    if (!user) return;

    const assets: Record<string, number> = {
      funds,
      trust,
      operation,
      creativity,
      clipper,
    };

    for (const name in state) {
      if (state[name].unlocked) continue;

      const requirement = state[name].requirement;
      let unlocked: boolean = state[name].unlocked ?? false;

      if (typeof requirement === 'object') {
        const { asset, value } = requirement;
        unlocked = assets[asset] >= value;
      }

      if (unlocked) {
        dispatch({ type: 'UNLOCKED_MERCHANDISE', name, unlocked });
        notifDispatch({
          type: 'ADD',
          notif: {
            id: `${name}-unlocked`,
            text: `${name} is unlocked`,
          },
        });
        console.info(`${name} is unlocked`);
      }
    }
  }, [funds, clipper, creativity, operation, trust]);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      merchandise: users[user].factory?.merchandise ?? MERCHANDISE_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    merStorage.set(state);
  }, [state]);

  return (
    <MerchContext.Provider value={state}>
      <MerchDisContext.Provider value={dispatch}>{children}</MerchDisContext.Provider>
    </MerchContext.Provider>
  );
};
