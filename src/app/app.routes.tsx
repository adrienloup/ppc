import { useRoutes } from 'react-router-dom';
import { ExploreRoutes } from '@/src/pages/explore/explore.routes.tsx';
import { FactoryRoutes } from '@/src/pages/factory/factory.routes.tsx';
import { ProfileRoutes } from '@/src/pages/profile/profile.routes.tsx';
import { StoreRoutes } from '@/src/pages/store/store.routes.tsx';

function AppRoutes() {
  return useRoutes([...ExploreRoutes, ...FactoryRoutes, ...ProfileRoutes, ...StoreRoutes]);
}

export default AppRoutes;
