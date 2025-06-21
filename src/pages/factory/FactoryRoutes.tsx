import FactoryPage from '@/src/pages/factory/FactoryPage.tsx';
import type { RouteObject } from 'react-router-dom';

export const FactoryRoutes: RouteObject[] = [
  { path: '/ppc/factory', element: <FactoryPage /> },
  { path: '/ppc/factory/*', element: <FactoryPage /> },
];
