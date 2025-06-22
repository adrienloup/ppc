import { useRoutes } from 'react-router-dom';
import { DashboardRoutes } from '@/src/pages/dashboard/DashboardRoutes.tsx';
import { ProfileRoutes } from '@/src/pages/profile/ProfileRoutes.tsx';
import { ShopRoutes } from '@/src/pages/shop/ShopRoutes.tsx';

export const AppRoutes = () => {
  return useRoutes([...DashboardRoutes, ...ProfileRoutes, ...ShopRoutes]);
};
