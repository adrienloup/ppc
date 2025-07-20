import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { DEBUG_KEY } from '@/src/domains/debug/infrastructure/debug.key.ts';
import { DebugProdComponent } from '@/src/domains/production/interfaces/ui/debug.component.tsx';
import { DebugSaleComponent } from '@/src/domains/sale/interfaces/ui/debug.component.tsx';
import { DebugMecaComponent } from '@/src/domains/mechanical/interfaces/ui/debug.component.tsx';
import styles from '@/src/domains/debug/interfaces/debug.module.scss';

export const DebugComponent = () => {
  const location = useLocation();

  const display = useMemo(() => {
    const isDebug = location.search.split('=')[0] == '?debug' ? location.search.split('=').pop() : '';
    if (isDebug == '1') localStorage.setItem(DEBUG_KEY, JSON.stringify('debug'));
    else if (isDebug == '0') localStorage.removeItem(DEBUG_KEY);
    return !!window.localStorage.getItem(DEBUG_KEY);
  }, [location.search]);

  return display ? (
    <div
      className={styles.debug}
      role="complementary"
    >
      <DebugProdComponent />
      <DebugSaleComponent />
      <DebugMecaComponent />
    </div>
  ) : null;
};
