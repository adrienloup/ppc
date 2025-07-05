import { classNames } from '@/src/shared/utils/classNames.ts';
import { NumberComponent } from '@/src/components/number/number.component.tsx';
import type { Badge } from '@/src/components/badge/badge.type.ts';
import styles from '@/src/components/badge/badge.module.scss';

export const BadgeComponent = ({ className, value, prefix, status = 'warning' }: Badge) => {
  return (
    <span className={classNames([styles.badge, styles[status], className])}>
      {prefix}
      <NumberComponent value={value} />
    </span>
  );
};
