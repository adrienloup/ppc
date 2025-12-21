import { IconComponent } from '@/src/shared/ui/icon/icon.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { TagType } from '@/src/shared/ui/tag/tag.type.ts';
import styles from '@/src/shared/ui/tag/tag.module.scss';

export const TagComponent = ({ children, className, color = 'pink', icon }: TagType) => {
  return (
    <span className={classNames(styles.tag, styles[color], className)}>
      {icon && (
        <IconComponent
          className={styles.icon}
          icon={icon}
        />
      )}
      {children}
    </span>
  );
};
