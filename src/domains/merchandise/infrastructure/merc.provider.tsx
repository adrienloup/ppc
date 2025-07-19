import { type FC, useReducer } from 'react';
import {
  MerchandiseContext,
  MerchandiseDispatchContext,
} from '@/src/domains/merchandise/infrastructure/merc.context.tsx';
import { merchandiseReducer } from '@/src/domains/merchandise/application/merc.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { MERC_KEY } from '@/src/domains/merchandise/infrastructure/merc.key.ts';
import { MERC_STATE } from '@/src/domains/merchandise/infrastructure/merc.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const MerchandiseProvider: FC<{ children: Children }> = ({ children }) => {
  const mercStorage = useLocalStorage(MERC_KEY, MERC_STATE);
  const [state, dispatch] = useReducer(merchandiseReducer, mercStorage.get() ?? MERC_STATE);

  return (
    <MerchandiseContext.Provider value={state}>
      <MerchandiseDispatchContext.Provider value={dispatch}>{children}</MerchandiseDispatchContext.Provider>
    </MerchandiseContext.Provider>
  );
};
