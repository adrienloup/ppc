import { useRoutes } from 'react-router-dom';
import { FactoryRoutes } from '@/src/pages/factory/factory.routes.tsx';
import { HomeRoutes } from '@/src/pages/home/home.routes.tsx';
import { ProfileRoutes } from '@/src/pages/profile/profile.routes.tsx';

export const AppRoutes = () => {
  return useRoutes([...FactoryRoutes, ...HomeRoutes, ...ProfileRoutes]);
};
