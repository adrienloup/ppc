import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Card } from '@/src/components/common/card/card.type.ts';
import styles from '@/src/components/common/card/card.module.scss';

export const CardComponent = ({ className, children }: Card) => {
  return <div className={classNames([styles.card, className])}>{children}</div>;
};
