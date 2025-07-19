import { NotifProvider } from '@/src/domains/notification/infrastructure/notif.provider.tsx';
import { AccountProvider } from '@/src/domains/account/infrastructure/account.provider.tsx';
import { AuthProvider } from '@/src/domains/authentification/infrastructure/auth.provider.tsx';
import { MecaProvider } from '@/src/domains/mechanical/infrastructure/meca.provider.tsx';
import { ExpProvider } from '@/src/domains/exploitation/infrastructure/exp.provider.tsx';
import { ProdProvider } from '@/src/domains/production/infrastructure/prod.provider.tsx';
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

export const AppProvider: FunctionComponent<{ children: Children }> = Providers([
  [NotifProvider],
  [AccountProvider],
  [AuthProvider],
  [MecaProvider],
  [ExpProvider],
  [ProdProvider],
]);
