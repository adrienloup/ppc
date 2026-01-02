import { useEffect } from 'react';

export const useBeforeUnload = () => {
  useEffect(() => {
    const onBeforeUnload = () => {
      console.log('log>onBeforeUnload');
    };

    window.addEventListener('beforeunload', onBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, []);
};
