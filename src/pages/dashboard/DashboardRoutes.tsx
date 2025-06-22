import DashboardPage from '@/src/pages/dashboard/DashboardPage.tsx';
import type { RouteObject } from 'react-router-dom';

export const DashboardRoutes: RouteObject[] = [
  { path: '/ppc/dashboard', element: <DashboardPage /> },
  { path: '/ppc/dashboard/*', element: <DashboardPage /> },
];
