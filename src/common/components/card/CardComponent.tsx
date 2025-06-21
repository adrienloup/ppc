import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Card } from '@/src/common/components/card/Card.ts';
import styles from '@/src/common/components/card/CardComponent.module.scss';

export const CardComponent = ({ children, className, ...props }: Card) => {
  return (
    <div
      className={classNames([styles.card, className])}
      {...props}
    >
      {children}
    </div>
  );
};
