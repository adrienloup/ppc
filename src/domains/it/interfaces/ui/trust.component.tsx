import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useIT, useITDispatch } from '@/src/domains/it/interfaces/useIT.ts';
import { useMerch } from '@/src/domains/merchandise/interfaces/useMerch.ts';
import { useProd } from '@/src/domains/production/interfaces/useProd.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const TrustComponent = () => {
  const intelligenceDispatch = useITDispatch();
  const { t } = useTranslation();
  const { trust } = useIT();
  const { clip } = useProd();
  const { releaseHypnoDrone } = useMerch();
  const clipRef = useRef<number>(clip);

  useEffect(() => {
    if (clip < clipRef.current + 1e3) return;
    intelligenceDispatch({ type: 'INCREASE_TRUST', trust: 1 });
    clipRef.current = clip;
  }, [clip]);

  return (
    <DialsComponent className={classNames(releaseHypnoDrone.unlocked && styles.shutdown)}>
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
        {releaseHypnoDrone.unlocked && (
          <BadgeComponent
            className={styles.badge}
            status="warning"
            label={t('app.shutdown')}
          />
        )}
      </DialComponent>
    </DialsComponent>
  );
};
