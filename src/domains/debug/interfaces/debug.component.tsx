import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useFactory } from '@/src/domains/factory/interfaces/useFactory.ts';
import { DebugProductionComponent } from '@/src/domains/debug/interfaces/debugProduction.component.tsx';
import { DebugBonusComponent } from '@/src/domains/debug/interfaces/debugBonus.component.tsx';
import { DEBUG_KEY } from '@/src/domains/debug/infrastructure/debug.key.ts';
import styles from '@/src/domains/debug/interfaces/debug.module.scss';

export const DebugComponent = () => {
  const location = useLocation();
  const factory = useFactory();

  const display = useMemo(() => {
    const isDebug = location.search.split('=')[0] == '?debug' ? location.search.split('=').pop() : '';
    if (isDebug == '1') localStorage.setItem(DEBUG_KEY, JSON.stringify('available'));
    else if (isDebug == '0') localStorage.removeItem(DEBUG_KEY);
    return !!window.localStorage.getItem(DEBUG_KEY);
  }, [location.search]);

  return display ? (
    <div
      className={styles.debug}
      role="complementary"
    >
      <DebugProductionComponent factory={factory} />
      <DebugBonusComponent factory={factory} />
    </div>
  ) : null;
};
