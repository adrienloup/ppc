// import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
// import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
// import { useBusiDispatch, useBusiness } from '@/src/domains/business/interfaces/useBusiness.ts';
// import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
// import { saleReducer } from '@/src/domains/sale/application/sale.reducer.ts';
// import { SaleContext, SaleDisContext } from '@/src/domains/sale/infrastructure/sale.context.tsx';
// import { SALE_KEY } from '@/src/domains/sale/infrastructure/sale.key.ts';
// import { SALE_STATE } from '@/src/domains/sale/infrastructure/sale.state.ts';
// import { useInterval } from '@/src/shared/hooks/useInterval.ts';
// import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
// import type { Children } from '@/src/shared/types/children.type.ts';
//
// export const SaleProvider: FC<{ children: Children }> = ({ children }) => {
//   const saleStorage = useLocalStorage(SALE_KEY, SALE_STATE);
//   const [state, dispatch] = useReducer(saleReducer, saleStorage.get());
//   const { user, users } = useAuth();
//   const userRef = useRef<string | null>(user);
//   const { pause } = useProfile();
//   const businessDispatch = useBusiDispatch();
//   const { publicDemand } = useBusiness();
//
//   // const autoSale = useCallback(() => {
//   //   dispatch({ type: 'DECREASE_INVENTORY', clipPrice, funds, publicDemand });
//   // }, [clipPrice, funds, publicDemand]);
//
//   const autoSale = useCallback(() => {
//     if (state.unsoldInventory < 1) return;
//
//     const unsoldInventory = Math.max(0, Math.floor(state.unsoldInventory * (1 - publicDemand)));
//     const funds = state.unsoldInventory - unsoldInventory;
//
//     dispatch({ type: 'DECREASE_INVENTORY', unsoldInventory });
//     // businessDispatch({ type: 'INCREASE_FUNDS', funds });
//   }, [state.unsoldInventory, publicDemand]);
//
//   useEffect(() => {
//     if (!user || user === userRef.current) return;
//     dispatch({
//       type: 'LOAD',
//       sale: users[user].factory?.sale ?? SALE_STATE,
//     });
//     userRef.current = user;
//   }, [user]);
//
//   useEffect(() => {
//     saleStorage.set(state);
//   }, [state]);
//
//   useInterval(autoSale, 5e2, !!user && !pause);
//
//   return (
//     <SaleContext.Provider value={state}>
//       <SaleDisContext.Provider value={dispatch}>{children}</SaleDisContext.Provider>
//     </SaleContext.Provider>
//   );
// };
