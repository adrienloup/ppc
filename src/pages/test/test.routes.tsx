import type { RouteObject } from 'react-router-dom';
import TestPage from '@/src/pages/test/test.page.tsx';

export const TestRoutes: RouteObject[] = [
  { path: '/ppc/test', element: <TestPage /> },
  { path: '/ppc/test/*', element: <TestPage /> },
];
