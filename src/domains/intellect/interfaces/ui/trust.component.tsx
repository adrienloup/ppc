import { useEffect, useMemo } from 'react';
import { useInt, useIntDispatch } from '@/src/domains/intellect/interfaces/useInt.ts';
import { useProd } from '@/src/domains/production/interfaces/useProd.ts';
import { fibonacci } from '@/src/shared/utils/fibonacci.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const TrustComponent = () => {
  // console.log('TrustComponent');
  const intDispatch = useIntDispatch();
  const { trust } = useInt();
  const { clip } = useProd();

  const tutu1 = useMemo(() => fibonacci(clip, 1, 2), [clip]);
  console.log('tutu#1', tutu1);
  const tutu2: number = useMemo(() => tutu1.filter((t) => clip >= t).length, [tutu1, clip]);
  console.log('tutu#2', tutu2);

  // useEffect(() => {
  //   if (tutu >= 100) return;
  //   //   console.log('clip', clip);
  //   console.log('tutu#2', tutu);
  //   //   const tutu = fibonacci(clip, 1e3, 2e3);
  //   //   console.log('trust', tutu);
  //   intDispatch({ type: 'INCREASE_TRUST', trust: 0 });
  // }, [tutu]);

  return (
    <DialsComponent>
      <DialComponent>
        <div className={styles.group}>
          <NumberComponent
            className={styles.value}
            value={trust}
            valueMax={100}
          />
          <BadgeComponent
            status="warning"
            label={trust >= 100 ? 'sold out' : undefined}
          />
        </div>
        <LabelComponent
          className={styles.label}
          label="trust level"
        />
      </DialComponent>
    </DialsComponent>
  );
};
