import { type FC, useCallback, useReducer } from 'react';
import { ProdContext, ProdDisContext } from '@/src/domains/production/infrastructure/prod.context.tsx';
import { prodReducer } from '@/src/domains/production/application/prod.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useMeca } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import { useExp, useExpDis } from '@/src/domains/exploitation/interfaces/useExp.ts';
import { useFirstRender } from '@/src/shared/hooks/useFirstRender.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { PROD_KEY, PROD_STATE } from '@/src/domains/production/infrastructure/prod.key.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

// function prodPerSecond(
//   clipper: number,
//   megaClipper: number,
//   clipFactory: number,
//   wire: number
// ): { clip: number; wire: number } {
//   if (wire >= clipFactory) return { clip: clipFactory * 1e3, wire: clipFactory };
//   if (wire >= clipper + megaClipper)
//     return { clip: clipper + megaClipper * 5e2, wire: clipper + megaClipper };
//   if (wire >= megaClipper) return { clip: megaClipper * 5e2, wire: megaClipper };
//   if (wire >= clipper) return { clip: clipper, wire: clipper };
//   return { clip: 0, wire: 0 };
// }
//
// function prodPerSecond(
//   clipper: number,
//   megaClipper: number,
//   clipFactory: number,
//   wire: number
// ): { clip: number; wire: number } {
//   const factoryWireCost = clipFactory;
//   const factoryClipOutput = clipFactory * 1e3;
//   const totalMeca = clipper + megaClipper;
//   const mecaClipOutput = clipper + megaClipper * 5e2;
//
//   console.log('wire', wire);
//   console.log('factoryWireCost', factoryWireCost);
//
//   if (wire >= factoryWireCost) {
//     return { clip: factoryClipOutput, wire: factoryWireCost };
//   }
//
//   if (wire >= totalMeca) {
//     return { clip: mecaClipOutput, wire: totalMeca };
//   }
//
//   if (wire >= megaClipper) {
//     return { clip: megaClipper * 500, wire: megaClipper };
//   }
//
//   if (wire >= clipper) {
//     return { clip: clipper, wire: clipper };
//   }
//
//   return { clip: 0, wire: 0 };
// }

export const ProdProvider: FC<{ children: Children }> = ({ children }) => {
  const stored = useLocalStorage(PROD_KEY, PROD_STATE);
  const initial = stored.get() ?? PROD_STATE;
  const [state, dispatch] = useReducer(prodReducer, initial);
  const expDispatch = useExpDis();
  const { clipper, megaClipper, clipFactory } = useMeca();
  const { wire } = useExp();
  const enabled = wire > 0;

  useFirstRender(() => {
    stored.set(state);
  }, [state]);

  const autoClipProd = useCallback(() => {
    const _clip = clipper + megaClipper * 500 + clipFactory * 1e3;
    const _wire = clipper + megaClipper + clipFactory;
    dispatch({ type: 'AUTO_UPDATE_CLIP', clip: _clip });
    expDispatch({ type: 'UPDATE_WIRE', wire: _wire });
  }, [clipper, megaClipper, clipFactory]);

  useInterval(autoClipProd, 9e2, enabled);

  return (
    <ProdContext.Provider value={state}>
      <ProdDisContext.Provider value={dispatch}>{children}</ProdDisContext.Provider>
    </ProdContext.Provider>
  );
};
