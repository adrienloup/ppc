import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { MechanicDComponent } from '@/src/features/debug/components/debug/MechanicDComponent.tsx';
import { FeatureDComponent } from '@/src/features/debug/components/debug/FeatureDComponent.tsx';
import { DEBUG_KEY } from '@/src/features/debug/infrastructure/debugKey.ts';
import styles from '@/src/features/debug/components/debug/DebugComponent.module.scss';

export const DebugComponent = () => {
  const location = useLocation();

  const display = useMemo(() => {
    const isDebug =
      location.search.split('=')[0] == '?debug' ? location.search.split('=').pop() : '';
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
      <MechanicDComponent />
      <FeatureDComponent />
    </div>
  ) : null;
};
