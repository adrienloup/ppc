import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { DebugMechanicComponent } from '@/src/components/debug/debugMechanic.component.tsx';
import { DebugBonusComponent } from '@/src/components/debug/debugBonus.component.tsx';
import styles from '@/src/components/debug/debug.module.scss';

const DEBUG_KEY = 'debug_ppc_3emma_1';

export const DebugComponent = () => {
  const location = useLocation();

  const display = useMemo(() => {
    const isDebug = location.search.split('=')[0] == '?debug' ? location.search.split('=').pop() : '';
    if (isDebug == '1') {
      localStorage.setItem(DEBUG_KEY, 'true');
    } else if (isDebug == '0') {
      localStorage.removeItem(DEBUG_KEY);
    }
    return !!window.localStorage.getItem(DEBUG_KEY);
  }, [location.search]);

  return display ? (
    <div
      className={styles.debug}
      role="complementary"
    >
      <DebugMechanicComponent />
      <DebugBonusComponent />
    </div>
  ) : null;
};
