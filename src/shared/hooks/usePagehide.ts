import { useEffect } from 'react';
import { useAuthDispatch } from '@/src/domains/auth/interface/useAuth.ts';

export const usePagehide = () => {
  const authDispatch = useAuthDispatch();

  useEffect(() => {
    const onPagehide = () => {
      authDispatch({ type: 'LOG_OUT' });
    };

    window.addEventListener('pagehide', onPagehide);
    return () => window.removeEventListener('pagehide', onPagehide);
  }, []);
};
