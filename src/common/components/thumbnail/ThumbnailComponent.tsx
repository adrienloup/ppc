import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { NumberComponent } from '@/src/common/components/number/NumberComponent.tsx';
import type { Thumbnail } from '@/src/common/components/thumbnail/Thumbnail.ts';
import styles from '@/src/common/components/thumbnail/ThumbnailComponent.module.scss';

export const ThumbnailComponent = ({ className, value, label, status = 'warning' }: Thumbnail) => {
  return (
    <span className={classNames([styles.thumbnail, styles[status], className])}>
      {label}
      {value ? <NumberComponent value={value} /> : null}
    </span>
  );
};
