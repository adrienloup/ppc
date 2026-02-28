// import type {
//   ComponentPropsWithoutRef,
//   ComponentType,
//   ElementType,
//   FunctionComponent,
// } from "react";
// import type { ChildrenType } from "@/src/shared/type/Children.ts";
//
// type ProvidersType = [
//   ComponentType<{ children: ChildrenType }>,
//   ComponentPropsWithoutRef<ElementType>?,
// ];
//
// const Providers = (providers: ProvidersType[]) =>
//   providers.reduce(
//     (AccumulatedProviders, [Provider, props]) =>
//       ({ children }) => (
//         <AccumulatedProviders>
//           <Provider {...props}>{children}</Provider>
//         </AccumulatedProviders>
//       ),
//     ({ children }: { children: ChildrenType }) => <>{children}</>,
//   );
//
// export const provider: FunctionComponent<{ children: ChildrenType }> =
//   Providers([[ProfileProvider]]);
