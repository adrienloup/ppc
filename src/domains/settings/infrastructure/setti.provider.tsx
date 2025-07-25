import { type FC, useEffect, useReducer } from 'react';
import { createPortal } from 'react-dom';
import { AccContext, AccDispatchContext } from '@/src/domains/settings/infrastructure/account.context.ts';
import { settReducer } from '@/src/domains/settings/application/sett.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { PauseComponent } from '@/src/domains/settings/interfaces/ui/play/pause.component.tsx';
import { ACCOUNT_KEY } from '@/src/domains/settings/infrastructure/account.key.ts';
import { ACCOUNT_STATE } from '@/src/domains/settings/infrastructure/account.state.ts';
// import { USER_KEY } from '@/src/domains/authentification/infrastructure/user.key.ts';
// import type { Mode } from '@/src/domains/account/domain/mode.type.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const AccountProvider: FC<{ children: Children }> = ({ children }) => {
  const accStorage = useLocalStorage(ACCOUNT_KEY, ACCOUNT_STATE);
  const { user, users } = useAuth();

  const [state, dispatch] = useReducer(settReducer, accStorage.get());
  console.log('ACC#1 >', 'state', state.mode, 'user', user, 'users', users);

  // const update = useCallback((mode: Mode) => {
  //   const isDark = mode === 'dark' || mode === 'system';
  //   document.body.classList.toggle('_dark_emma0_1', isDark);
  // }, []);
  //
  // useEffect(() => {
  //   const media = window.matchMedia('(prefers-color-scheme: dark)');
  //   const onChange = (event: MediaQueryListEvent) => {
  //     dispatch({ type: 'SET_MODE', mode: event.matches ? 'dark' : 'light' });
  //   };
  //   media.addEventListener('change', onChange);
  //   return () => media.removeEventListener('change', onChange);
  // }, []);

  // useEffect(() => {
  //   if (!userStorage.get()) return;
  //   update(state.mode);
  //   accStorage.set(state);
  // }, [state]);

  useEffect(() => {
    if (!user) return;
    dispatch({ type: 'LOAD', state: users[user].account ?? ACCOUNT_STATE });
    console.log('ACC#3 >', 'state', state.mode, 'user', user, 'users', users);
  }, [user]);

  useEffect(() => {
    console.log('ACC#2 >', 'state', state.mode, 'user', user, 'users', users);
    accStorage.set(state);
  }, [state]);

  return (
    <AccContext.Provider value={state}>
      <AccDispatchContext.Provider value={dispatch}>
        {children}
        {state.pause && createPortal(<PauseComponent />, document.getElementById('_app_emma0_1')!)}
      </AccDispatchContext.Provider>
    </AccContext.Provider>
  );
};
