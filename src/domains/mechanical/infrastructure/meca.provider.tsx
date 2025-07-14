import { type FC, useReducer } from 'react';
import { MecaContext, MecaDisContext } from '@/src/domains/mechanical/infrastructure/meca.context.tsx';
import { mecaReducer } from '@/src/domains/mechanical/application/meca.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { useFirstRender } from '@/src/shared/hooks/useFirstRender.ts';
import { MECA_KEY, MECA_STATE } from '@/src/domains/mechanical/infrastructure/meca.key.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const MecaProvider: FC<{ children: Children }> = ({ children }) => {
  const stored = useLocalStorage(MECA_KEY, MECA_STATE);
  const initial = stored.get() ?? MECA_STATE;
  const [state, dispatch] = useReducer(mecaReducer, initial);
  const { user } = useAuth();

  useFirstRender(() => {
    if (user === null) return;
    stored.set(state);
  }, [state]);

  return (
    <MecaContext.Provider value={state}>
      <MecaDisContext.Provider value={dispatch}>{children}</MecaDisContext.Provider>
    </MecaContext.Provider>
  );
};
