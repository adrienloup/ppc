import { useEffect } from 'react';
import { useAccountDispatch } from '@/src/context/account/useAccount.ts';
import { useSettings } from '@/src/context/settings/useSettings.ts';

export const usePagehide = () => {
  const accountDispatch = useAccountDispatch();
  const settings = useSettings();

  useEffect(() => {
    const onPagehide = () => {
      accountDispatch({
        type: 'LOG_OUT',
        data: { business: '' },
        settings,
      });
    };

    window.addEventListener('pagehide', onPagehide);

    return () => window.removeEventListener('pagehide', onPagehide);
  }, []);
};
