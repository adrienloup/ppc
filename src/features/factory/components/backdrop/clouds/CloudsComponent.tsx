import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Clouds } from '@/src/features/factory/components/backdrop/clouds/Clouds.ts';
import styles from '@/src/features/factory/components/backdrop/clouds/CloudsComponent.module.scss';

export const CloudsComponent = ({ className, children }: Clouds) => {
  return <div className={classNames([styles.clouds, className])}>{children}</div>;
};
