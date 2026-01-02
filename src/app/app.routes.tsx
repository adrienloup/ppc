import { useRoutes } from 'react-router-dom';
import { ExploreRoutes } from '@/src/pages/explore/explore.routes.tsx';
import { FactoryRoutes } from '@/src/pages/factory/factory.routes.tsx';
import { HomeRoutes } from '@/src/pages/home/home.routes.tsx';
import { ProfileRoutes } from '@/src/pages/profile/profile.routes.tsx';
import { StoreRoutes } from '@/src/pages/store/store.routes.tsx';

export const AppRoutes = () => {
  return useRoutes([...ExploreRoutes, ...FactoryRoutes, ...HomeRoutes, ...ProfileRoutes, ...StoreRoutes]);
};
