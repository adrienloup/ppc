import { classNames } from '@/src/shared/utils/classNames.ts';
import { NumberComponent } from '@/src/components/common/number/number.component.tsx';
import type { Badge } from '@/src/components/common/badge/badge.type.ts';
import styles from '@/src/components/common/badge/badge.module.scss';

export const BadgeComponent = ({ className, label, value, prefix, asset, status = 'warning' }: Badge) => {
  return (
    <span className={classNames([styles.badge, styles[status], className])}>
      {prefix}
      {label}
      <NumberComponent
        value={value}
        asset={asset}
      />
    </span>
  );
};
