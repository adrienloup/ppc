import type { RouteObject } from 'react-router-dom';
import ShopPage from '@/src/pages/shop/shop.page.tsx';

export const ShopRoutes: RouteObject[] = [
  { path: '/ppc/shop', element: <ShopPage /> },
  { path: '/ppc/shop/*', element: <ShopPage /> },
];
