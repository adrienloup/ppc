import type { ComponentPropsWithoutRef, ComponentType, ElementType, FunctionComponent } from 'react';
import { AuthProvider } from '@/src/domains/auth/infrastructure/auth.provider.tsx';
import { BusinessProvider } from '@/src/domains/business/infrastructure/business.provider.tsx';
import { ExchangeProvider } from '@/src/domains/exchange/infrastructure/exchange.provider.tsx';
import { FundsProvider } from '@/src/domains/funds/infrastructure/funds.provider.tsx';
import { InventoryProvider } from '@/src/domains/inventory/infrastructure/inventory.provider.tsx';
import { ITProvider } from '@/src/domains/it/infrastructure/IT.provider.tsx';
import { MecaProvider } from '@/src/domains/machine/infrastructure/meca.provider.tsx';
import { MerchProvider } from '@/src/domains/merchandise/infrastructure/merch.provider.tsx';
import { NotifProvider } from '@/src/domains/notification/infrastructure/notif.provider.tsx';
import { PopinProvider } from '@/src/domains/popin/infrastructure/popin.provider.tsx';
import { PowerProvider } from '@/src/domains/power/infrastructure/power.provider.tsx';
import { ProdProvider } from '@/src/domains/production/infrastructure/prod.provider.tsx';
import { ProfileProvider } from '@/src/domains/profile/infrastructure/profile.provider.tsx';
import { ResourcesProvider } from '@/src/domains/resources/infrastructure/resources.provider.tsx';
import { SwarmProvider } from '@/src/domains/swarm/infrastructure/swarm.provider.tsx';
import { TradeProvider } from '@/src/domains/trade/infrastructure/trade.provider.tsx';
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
  [PopinProvider],
  [AuthProvider],
  [ProfileProvider],
  [BusinessProvider],
  [FundsProvider],
  [InventoryProvider],
  [ResourcesProvider],
  [MecaProvider],
  [ProdProvider],
  [MerchProvider],
  [ITProvider],
  [ExchangeProvider],
  [TradeProvider],
  [SwarmProvider],
  [PowerProvider],
]);
