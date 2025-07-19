import { type FC, useReducer } from 'react';
import {
  MerchandisingContext,
  MerchandisingDispatchContext,
} from '@/src/domains/merchandising/infrastructure/merc.context.tsx';
import { merchandisingReducer } from '@/src/domains/merchandising/application/merc.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { MERC_KEY } from '@/src/domains/merchandising/infrastructure/merc.key.ts';
import { MERC_STATE } from '@/src/domains/merchandising/infrastructure/merc.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const MerchandisingProvider: FC<{ children: Children }> = ({ children }) => {
  const mercStorage = useLocalStorage(MERC_KEY, MERC_STATE);
  const [state, dispatch] = useReducer(merchandisingReducer, mercStorage.get() ?? MERC_STATE);

  return (
    <MerchandisingContext.Provider value={state}>
      <MerchandisingDispatchContext.Provider value={dispatch}>
        {children}
      </MerchandisingDispatchContext.Provider>
    </MerchandisingContext.Provider>
  );
};
