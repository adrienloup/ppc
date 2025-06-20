import PaperclipsPage from '@/src/pages/paperclips/PaperclipsPage.tsx';
import type { RouteObject } from 'react-router-dom';

export const PaperclipsRoutes: RouteObject[] = [
  { path: '/', element: <PaperclipsPage /> },
  { path: '/*', element: <PaperclipsPage /> },
];
