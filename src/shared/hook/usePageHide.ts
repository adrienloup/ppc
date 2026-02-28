import { useEffect } from 'react';

export const usePageHide = () => {
  useEffect(() => {
    const onPageHide = () => {
      console.log('log>logout');
    };

    window.addEventListener('pagehide', onPageHide);

    return () => window.removeEventListener('pagehide', onPageHide);
  }, []);
};
