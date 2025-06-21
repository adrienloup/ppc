import ProfilePage from '@/src/pages/profile/ProfilePage.tsx';
import type { RouteObject } from 'react-router-dom';

export const ProfileRoutes: RouteObject[] = [
  { path: '/ppc', element: <ProfilePage /> },
  { path: '/ppc/profile', element: <ProfilePage /> },
  { path: '/ppc/profile/*', element: <ProfilePage /> },
];
