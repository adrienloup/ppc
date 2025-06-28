import type { Space } from '@/src/common/components/space/Space.ts';
import styles from '@/src/common/components/space/SpaceComponent.module.scss';

export const SpaceComponent = ({ children }: Space) => {
  return <div className={styles.space}>{children}</div>;
};
