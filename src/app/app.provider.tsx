import { NotifProvider } from '@/src/domains/notification/infrastructure/notif.provider.tsx';
import { AuthProvider } from '@/src/domains/auth/infrastructure/auth.provider.tsx';
import { ProfileProvider } from '@/src/domains/profile/infrastructure/profile.provider.tsx';
import { ProdProvider } from '@/src/domains/production/infrastructure/prod.provider.tsx';
import { SaleProvider } from '@/src/domains/sale/infrastructure/sale.provider.tsx';
import { BusinessProvider } from '@/src/domains/business/infrastructure/business.provider.tsx';
import { MerProvider } from '@/src/domains/merchandise/infrastructure/mer.provider.tsx';
import { ITProvider } from '@/src/domains/it/infrastructure/IT.provider.tsx';
import { TradeProvider } from '@/src/domains/trade/infrastructure/trade.provider.tsx';
import { MecaProvider } from '@/src/domains/mechanical/infrastructure/meca.provider.tsx';
import { SwarmProvider } from '@/src/domains/swarm/infrastructure/swarm.provider.tsx';
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
  [AuthProvider],
  [ProfileProvider],
  [ProdProvider],
  [SaleProvider],
  [BusinessProvider],
  [MerProvider],
  [ITProvider],
  [TradeProvider],
  [MecaProvider],
  [SwarmProvider],
]);
