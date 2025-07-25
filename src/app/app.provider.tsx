import { NotifProvider } from '@/src/domains/notification/infrastructure/notif.provider.tsx';
import { AuthProvider } from '@/src/domains/authentification/infrastructure/auth.provider.tsx';
import { SettingsProvider } from '@/src/domains/settings/infrastructure/setti.provider.tsx';
import { ProdProvider } from '@/src/domains/production/infrastructure/prod.provider.tsx';
import { SaleProvider } from '@/src/domains/sale/infrastructure/sale.provider.tsx';
import { BusinessProvider } from '@/src/domains/business/infrastructure/business.provider.tsx';
import { TradeProvider } from '@/src/domains/trade/infrastructure/trade.provider.tsx';
import { IntelligenceProvider } from '@/src/domains/intelligence/infrastructure/intel.provider.tsx';
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
  [SettingsProvider],
  [ProdProvider],
  [SaleProvider],
  [BusinessProvider],
  [TradeProvider],
  [IntelligenceProvider],
]);
