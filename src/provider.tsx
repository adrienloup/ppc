import { AuthProvider } from '@/src/features/authentification/auth.provider.tsx';
import { FactoryProvider } from '@/src/features/factory/factory.provider.tsx';
import type { ComponentPropsWithoutRef, ComponentType, ElementType, FunctionComponent } from 'react';
import type { ChildrenType } from '@/src/shared/types/children.type.ts';

type ProviderType = [ComponentType<{ children: ChildrenType }>, ComponentPropsWithoutRef<ElementType>?];

const Providers = (providers: ProviderType[]) =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      ),
    ({ children }: { children: ChildrenType }) => <>{children}</>
  );

export const Provider: FunctionComponent<{ children: ChildrenType }> = Providers([[AuthProvider], [FactoryProvider]]);
