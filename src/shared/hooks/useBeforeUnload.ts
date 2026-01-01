import { useEffect } from 'react';

export const useBeforeUnload = () => {
  useEffect(() => {
    const handleBeforeUnload = () => {
      console.log('log>logout');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);
};
