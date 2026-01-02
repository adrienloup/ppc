import { type FC, useEffect, useReducer } from 'react';
import { AUTH_KEY } from '@/src/domains/auth/application/auth.key.ts';
import { authReducer } from '@/src/domains/auth/application/auth.reducer.ts';
import { AUTH_STATE } from '@/src/domains/auth/application/auth.state.ts';
import { AuthContext, AuthDispatchContext } from '@/src/domains/auth/interface/auth.context.tsx';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { ChildrenType } from '@/src/shared/types/children.type.ts';

export const AuthProvider: FC<{ children: ChildrenType }> = ({ children }) => {
  const authStorage = useLocalStorage(AUTH_KEY, AUTH_STATE);
  const [state, dispatch] = useReducer(authReducer, authStorage.get());

  useEffect(() => {
    authStorage.set(state);
  }, [state]);

  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};
