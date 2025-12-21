import type { RouteObject } from 'react-router-dom';
import StorePage from '@/src/pages/store/store.page.tsx';

export const StoreRoutes: RouteObject[] = [
  { path: '/ppc/store', element: <StorePage /> },
  { path: '/ppc/store/*', element: <StorePage /> },
];
