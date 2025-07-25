import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { DEBUG_KEY } from '@/src/domains/debug/infrastructure/debug.key.ts';
import { DebugProdComponent } from '@/src/domains/production/interfaces/ui/debug.component.tsx';
import { DebugIntComponent } from '@/src/domains/intelligence/interfaces/ui/debug.component.tsx';
import styles from '@/src/domains/debug/interfaces/debug.module.scss';

export const DebugComponent = () => {
  const location = useLocation();

  const isDebug = useMemo(() => {
    const isDebug =
      location.search.split('=')[0] == '?debug' ? location.search.split('=').pop() : '';

    if (isDebug == '1') {
      localStorage.setItem(DEBUG_KEY, JSON.stringify('debug'));
    } else if (isDebug == '0') {
      localStorage.removeItem(DEBUG_KEY);
    }

    return !!window.localStorage.getItem(DEBUG_KEY);
  }, [location.search]);

  return isDebug ? (
    <div
      className={styles.debug}
      role="complementary"
    >
      <DebugProdComponent />
      <DebugIntComponent />
    </div>
  ) : null;
};
