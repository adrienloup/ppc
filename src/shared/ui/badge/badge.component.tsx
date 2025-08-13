import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Badge } from '@/src/shared/ui/badge/badge.type.ts';
import styles from '@/src/shared/ui/badge/badge.module.scss';

export const BadgeComponent = ({ className, label, value, prefix, asset, status = 'info' }: Badge) => {
  return (
    <span className={classNames(styles.badge, className, styles[status])}>
      {prefix}
      {label}
      {value && (
        <NumberComponent
          value={value}
          asset={asset}
        />
      )}
    </span>
  );
};
