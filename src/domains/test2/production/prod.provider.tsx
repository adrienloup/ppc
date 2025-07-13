// import { type FC, useReducer, useCallback, useEffect } from 'react';
// import { MecaContext, ProdDisContext } from '@/src/domains/production/exp.context.tsx';
// import { expReducer } from '@/src/domains/production/exp.reducer.ts';
// import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
// import { useMachinery } from '@/src/domains/test/machinery/useMachinery.ts';
// import { useReso, useResoDis } from '@/src/domains/test/resources/useReso.ts';
// import { useFirstRender } from '@/src/shared/hooks/useFirstRender.ts';
// import { useInterval } from '@/src/shared/hooks/useInterval.ts';
// import { PROD_KEY } from '@/src/domains/production/exp.key.ts';
// import { PROD_STATE } from '@/src/domains/production/prod.state.ts';
// import type { Children } from '@/src/shared/types/children.type.ts';
//
// export const ExpProvider: FC<{ children: Children }> = ({ children }) => {
//   const prodStorage = useLocalStorage(PROD_KEY, PROD_STATE);
//   const [state, dispatch] = useReducer(expReducer, PROD_STATE);
//   const rDispatch = useResoDis();
//   const { clipper, megaClipper } = useMachinery();
//   const { wire } = useReso();
//   const enabled = wire >= clipper && wire >= megaClipper;
//
//   useEffect(() => {
//     const payload = prodStorage.get();
//     if (payload !== null) dispatch({ type: 'LOAD', payload });
//   }, []);
//
//   useFirstRender(() => {
//     prodStorage.set(state);
//   }, [state]);
//
//   const autoClipProd = useCallback(() => {
//     const clip = clipper + megaClipper * 500;
//     const wire = clipper + megaClipper;
//     dispatch({ type: 'AUTO_CLIP_PRODUCTION', clip });
//     rDispatch({ type: 'DECREASE_WIRE_STOCK', wire });
//   }, [clipper, megaClipper]);
//
//   useInterval(autoClipProd, 1e3, enabled);
//
//   return (
//     <MecaContext.Provider value={state}>
//       <ProdDisContext.Provider value={dispatch}>{children}</ProdDisContext.Provider>
//     </MecaContext.Provider>
//   );
// };
