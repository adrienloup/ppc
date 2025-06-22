import ShopPage from '@/src/pages/shop/ShopPage.tsx';
import type { RouteObject } from 'react-router-dom';

export const ShopRoutes: RouteObject[] = [
  { path: '/ppc/shop', element: <ShopPage /> },
  { path: '/ppc/shop/*', element: <ShopPage /> },
];
