import type { RouteObject } from 'react-router-dom';
import DashboardPage from '@/src/pages/dashboard/dashboard.page.tsx';

export const DashboardRoutes: RouteObject[] = [
  { path: '/ppc/dashboard', element: <DashboardPage /> },
  { path: '/ppc/dashboard/*', element: <DashboardPage /> },
];
