import type { RouteObject } from 'react-router-dom';
import ProfilePage from '@/src/pages/profile/profile.page.tsx';

export const ProfileRoutes: RouteObject[] = [
  { path: '/ppc', element: <ProfilePage /> },
  { path: '/ppc/profile', element: <ProfilePage /> },
  { path: '/ppc/profile/*', element: <ProfilePage /> },
];
