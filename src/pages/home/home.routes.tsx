import type { RouteObject } from 'react-router-dom';
import HomePage from '@/src/pages/home/home.page.tsx';

export const HomeRoutes: RouteObject[] = [
  { path: '/ppc', element: <HomePage /> },
  { path: '/ppc/*', element: <HomePage /> },
];
