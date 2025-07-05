import { AuthProvider } from '@/src/features/authentification/auth.provider.tsx';
import { AccountProvider } from '@/src/features/account/account.provider.tsx';
import { FactoryProvider } from '@/src/features/factory/factory.provider.tsx';
import type { ComponentPropsWithoutRef, ComponentType, ElementType, FunctionComponent } from 'react';
import type { Children } from '@/src/shared/types/children.type.ts';

type ProviderType = [ComponentType<{ children: Children }>, ComponentPropsWithoutRef<ElementType>?];

const Providers = (providers: ProviderType[]) =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      ),
    ({ children }: { children: Children }) => <>{children}</>
  );

export const Provider: FunctionComponent<{ children: Children }> = Providers([
  [AuthProvider],
  [AccountProvider],
  [FactoryProvider],
]);
