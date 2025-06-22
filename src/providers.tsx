import { AuthentificationProvider } from '@/src/features/authentification/infrastructure/AuthentificationProvider.tsx';
import { GameProvider } from '@/src/features/game/infrastructure/GameProvider.tsx';
import { ProfileProvider } from '@/src/features/profile/infrastructure/ProfileProvider.tsx';
import type { ComponentPropsWithoutRef, ComponentType, ElementType, FunctionComponent } from 'react';
import type { Children } from '@/src/common/shared/types/Children.ts';

type Providers = [ComponentType<{ children: Children }>, ComponentPropsWithoutRef<ElementType>?][];

const allProviders = (providers: Providers) =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      ),
    ({ children }: { children: Children }) => <>{children}</>
  );

export const Providers: FunctionComponent<{ children: Children }> = allProviders([
  [AuthentificationProvider],
  [GameProvider],
  [ProfileProvider],
]);
