import type { RouteObject } from 'react-router-dom';
import FactoryPage from '@/src/pages/factory/factory.page.tsx';

export const FactoryRoutes: RouteObject[] = [
  { path: '/ppc/factory', element: <FactoryPage /> },
  { path: '/ppc/factory/*', element: <FactoryPage /> },
];
