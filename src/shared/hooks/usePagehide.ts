import { useEffect } from 'react';
import { useAuthDispatch } from '@/src/domains/auth/interface/useAuth.ts';

export const usePagehide = () => {
  const AuthDispatch = useAuthDispatch();

  useEffect(() => {
    const onPagehide = () => AuthDispatch({ type: 'LOG_OUT' });

    window.addEventListener('pagehide', onPagehide);
    return () => window.removeEventListener('pagehide', onPagehide);
  }, []);
};
