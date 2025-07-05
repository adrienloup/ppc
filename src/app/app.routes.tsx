import { useRoutes } from 'react-router-dom';
import { ProfileRoutes } from '@/src/pages/profile/profile.routes.tsx';
import { DashboardRoutes } from '@/src/pages/dashboard/dashboard.routes.tsx';
import { ShopRoutes } from '@/src/pages/shop/shop.routes.tsx';

export const AppRoutes = () => {
  return useRoutes([...ProfileRoutes, ...DashboardRoutes, ...ShopRoutes]);
};
