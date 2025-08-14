import { useTranslation } from 'react-i18next';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const WireMatterComponent = () => {
  const { t } = useTranslation();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={0}
        />
        <LabelComponent
          className={styles.label}
          label="wire stock"
        />
        <BadgeComponent
          className={styles.badge}
          status="error"
          label={t('app.stockOut')}
        />
      </DialComponent>
    </DialsComponent>
  );
};
