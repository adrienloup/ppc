import { useEffect } from 'react';
import { usePopin, usePopinDispatch } from '@/src/domains/popin/interfaces/usePopin.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Popin } from '@/src/domains/popin/domain/popin.type.ts';
import styles from '@/src/domains/popin/interfaces/ui/popin.module.scss';

export const PopinComponent = ({ text, button, onPopin }: Popin) => {
  const dispatch = usePopinDispatch();
  const [remove, onRemove] = usePopin();

  useEffect(() => {
    dispatch(() => {
      onPopin();
    });
  }, [dispatch]);

  return (
    <div className={styles.popin}>
      <div className={classNames(styles.content, remove ? styles.remove : '')}>
        <div className={styles.inner}>
          <div className={styles.text}>{text}</div>
          <ButtonComponent
            className={styles.button}
            onClick={() => onRemove(false)}
          >
            {button}
          </ButtonComponent>
        </div>
      </div>
      <div
        className={styles.backdrop}
        role="presentation"
        onClick={() => onRemove(false)}
      ></div>
    </div>
  );
};
