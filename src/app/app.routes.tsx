import { useRoutes } from 'react-router-dom';
import { ProfileRoutes } from '@/src/pages/profile/profile.routes.tsx';
import { FactoryRoutes } from '@/src/pages/factory/factory.routes.tsx';
import { StoreRoutes } from '@/src/pages/store/store.routes.tsx';
import { ExploreRoutes } from '@/src/pages/explore/explore.routes.tsx';

export const AppRoutes = () => {
  return useRoutes([...ProfileRoutes, ...FactoryRoutes, ...StoreRoutes, ...ExploreRoutes]);
};
