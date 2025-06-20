import { useRoutes } from 'react-router-dom';
import { PaperclipsRoutes } from '@/src/pages/paperclips/PaperclipsRoutes.tsx';

export const AppRoutes = () => {
  return useRoutes([...PaperclipsRoutes]);
};
