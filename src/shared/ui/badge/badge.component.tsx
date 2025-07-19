import { classNames } from '@/src/shared/utils/classNames.ts';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import type { Badge } from '@/src/shared/ui/badge/badge.type.ts';
import styles from '@/src/shared/ui/badge/badge.module.scss';

export const BadgeComponent = ({ className, label, value, prefix, asset, status = 'success' }: Badge) => {
  return value ? (
    <span className={classNames([styles.badge, styles[status], className])}>
      {prefix}
      {label}
      {value && (
        <NumberComponent
          value={value}
          asset={asset}
        />
      )}
    </span>
  ) : null;
};
