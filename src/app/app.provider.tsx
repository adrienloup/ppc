import type { ComponentPropsWithoutRef, ComponentType, ElementType, FunctionComponent } from 'react';
import { BusinessProvider } from '@/src/domains/business/interface/business.provider.tsx';
import { EngineryProvider } from '@/src/domains/enginery/interface/enginery.provider.tsx';
import { NoticeProvider } from '@/src/domains/notice/interface/notice.provider.tsx';
import { SupplyProvider } from '@/src/domains/supply/interface/supply.provider.tsx';
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

export const AppProvider: FunctionComponent<{ children: ChildrenType }> = Providers([
  [NoticeProvider],
  [BusinessProvider],
  [EngineryProvider],
  [SupplyProvider],
]);
