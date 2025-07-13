// import { type FC, useReducer, useEffect } from 'react';
// import { ResoContext, ResoDisContext } from './reso.context';
// import { resoReducer } from '@/src/domains/test/resources/reso.reducer.ts';
// import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
// import { useFirstRender } from '@/src/shared/hooks/useFirstRender.ts';
// import { RESO_KEY } from '@/src/domains/test/resources/reso.key.ts';
// import { RESO_STATE } from '@/src/domains/test/resources/reso.state.ts';
// import type { Children } from '@/src/shared/types/children.type.ts';
//
// export const ResoProvider: FC<{ children: Children }> = ({ children }) => {
//   const resoStorage = useLocalStorage(RESO_KEY, RESO_STATE);
//   const [state, dispatch] = useReducer(resoReducer, RESO_STATE);
//
//   useEffect(() => {
//     const payload = resoStorage.get();
//     if (payload !== null) dispatch({ type: 'LOAD', payload });
//   }, []);
//
//   useFirstRender(() => {
//     resoStorage.set(state);
//   }, [state]);
//
//   return (
//     <ResoContext.Provider value={state}>
//       <ResoDisContext.Provider value={dispatch}>{children}</ResoDisContext.Provider>
//     </ResoContext.Provider>
//   );
// };
