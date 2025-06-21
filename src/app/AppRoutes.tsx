import { useRoutes } from 'react-router-dom';
import { FactoryRoutes } from '@/src/pages/factory/FactoryRoutes.tsx';
import { ProfileRoutes } from '@/src/pages/profile/ProfileRoutes.tsx';

export const AppRoutes = () => {
  return useRoutes([...FactoryRoutes, ...ProfileRoutes]);
};
