import { type FC, useEffect, useReducer } from 'react';
import {
  AuthContext,
  AuthDispatchContext,
} from '@/src/domains/authentification/infrastructure/auth.context.ts';
import { authReducer } from '@/src/domains/authentification/application/auth.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAccountDispatch } from '@/src/domains/account/interfaces/useAccount.ts';
import { useExpDispatch } from '@/src/domains/exploitation/interfaces/useExp.ts';
import { useMecaDispatch } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import { useSaleDispatch } from '@/src/domains/sale/interfaces/useSale.ts';
import { useProdDispatch } from '@/src/domains/production/interfaces/useProd.ts';
import { useMercDispatch } from '@/src/domains/merchandising/interfaces/useMerc.ts';
import { USERS_KEY } from '@/src/domains/authentification/infrastructure/users.key.ts';
import { USER_KEY } from '@/src/domains/authentification/infrastructure/user.key.ts';
import { ACCOUNT_KEY } from '@/src/domains/account/infrastructure/account.key.ts';
import { ACCOUNT_STATE } from '@/src/domains/account/infrastructure/account.state.ts';
import { EXP_KEY } from '@/src/domains/exploitation/infrastructure/exp.key.ts';
import { EXP_STATE } from '@/src/domains/exploitation/infrastructure/exp.state.ts';
import { MECA_KEY } from '@/src/domains/mechanical/infrastructure/meca.key.ts';
import { MECA_STATE } from '@/src/domains/mechanical/infrastructure/meca.state.ts';
import { PROD_KEY } from '@/src/domains/production/infrastructure/prod.key.ts';
import { PROD_STATE } from '@/src/domains/production/infrastructure/prod.state.ts';
import { SALE_KEY } from '@/src/domains/sale/infrastructure/sale.key.ts';
import { SALE_STATE } from '@/src/domains/sale/infrastructure/sale.state.ts';
import { MERC_KEY } from '@/src/domains/merchandising/infrastructure/merc.key.ts';
import { MERC_STATE } from '@/src/domains/merchandising/infrastructure/merc.state.ts';
import type { Users } from '@/src/domains/authentification/domain/users.type.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const AuthProvider: FC<{ children: Children }> = ({ children }) => {
  const usersStorage = useLocalStorage<Users>(USERS_KEY, {});
  const userStorage = useLocalStorage<string | null>(USER_KEY, null);
  const accStorage = useLocalStorage(ACCOUNT_KEY, ACCOUNT_STATE);
  const expStorage = useLocalStorage(EXP_KEY, EXP_STATE);
  const mecaStorage = useLocalStorage(MECA_KEY, MECA_STATE);
  const saleStorage = useLocalStorage(SALE_KEY, SALE_STATE);
  const prodStorage = useLocalStorage(PROD_KEY, PROD_STATE);
  const mercStorage = useLocalStorage(MERC_KEY, MERC_STATE);
  const accDispatch = useAccountDispatch();
  const expDispatch = useExpDispatch();
  const mecaDispatch = useMecaDispatch();
  const saleDispatch = useSaleDispatch();
  const prodDispatch = useProdDispatch();
  const mercDispatch = useMercDispatch();

  const [state, dispatch] = useReducer(authReducer, {
    users: usersStorage.get(),
    user: userStorage.get(),
    load: null,
    save: null,
  });

  useEffect(() => {
    usersStorage.set(state.users);
  }, [state.users]);

  useEffect(() => {
    if (!state.load) return;
    userStorage.set(state.load);

    accDispatch({ type: 'LOAD', state: state.users[state.load].account });
    expDispatch({ type: 'LOAD', state: state.users[state.load].exploitation });
    mecaDispatch({ type: 'LOAD', state: state.users[state.load].mechanical });
    saleDispatch({ type: 'LOAD', state: state.users[state.load].sale });
    prodDispatch({ type: 'LOAD', state: state.users[state.load].production });
    mercDispatch({ type: 'LOAD', state: state.users[state.load].merchandising });

    dispatch({ type: 'LOAD', username: state.load });
  }, [state.load]);

  useEffect(() => {
    if (!state.save) return;

    state.users[state.save].account = accStorage.get();
    state.users[state.save].exploitation = expStorage.get();
    state.users[state.save].mechanical = mecaStorage.get();
    state.users[state.save].sale = saleStorage.get();
    state.users[state.save].production = prodStorage.get();
    state.users[state.save].merchandising = mercStorage.get();
    usersStorage.set(state.users);

    userStorage.remove();
    accStorage.remove();
    expStorage.remove();
    mecaStorage.remove();
    saleStorage.remove();
    prodStorage.remove();
    mercStorage.remove();

    dispatch({ type: 'SAVE' });
  }, [state.save]);

  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};
