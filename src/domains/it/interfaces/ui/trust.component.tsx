import { useEffect, useRef } from 'react';
import { useIT, useITDispatch } from '@/src/domains/it/interfaces/useIT.ts';
import { useProd } from '@/src/domains/production/interfaces/useProd.ts';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const TrustComponent = () => {
  // console.log('TrustComponent');
  const intelligenceDispatch = useITDispatch();
  const { trust } = useIT();
  const { clip } = useProd();
  const clipRef = useRef<number>(clip);

  useEffect(() => {
    if (clip < clipRef.current + 1e3) return;
    intelligenceDispatch({ type: 'INCREASE_TRUST', trust: 1 });
    clipRef.current = clip;
  }, [clip]);

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={trust}
          valueMax={100}
        />
        <LabelComponent
          className={styles.label}
          label="trust level"
        />
      </DialComponent>
    </DialsComponent>
  );
};
