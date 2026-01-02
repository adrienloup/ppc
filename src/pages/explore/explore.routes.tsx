import type { RouteObject } from 'react-router-dom';
import ExplorePage from '@/src/pages/explore/explore.page.tsx';

export const ExploreRoutes: RouteObject[] = [
  { path: '/ppc/explore', element: <ExplorePage /> },
  { path: '/ppc/explore/*', element: <ExplorePage /> },
];
