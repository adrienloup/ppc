import { useEffect } from 'react';
// import { usePopin, usePopinDispatch, usePopinAction } from '@/src/domains/popin/interfaces/usePopin.ts';
import { usePopin, usePopinAction } from '@/src/domains/popin/interfaces/usePopin.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/domains/popin/interfaces/ui/popin.module.scss';

export const PopinComponent = ({
  text,
  button,
  utututututut,
}: {
  text: string;
  button: string;
  utututututut: () => void;
}) => {
  // const onRemove = usePopinDispatch();
  // const onPopin = usePopinAction();
  // const remove = usePopin();
  const [remove, onRemove] = usePopin();
  const onPopin = usePopinAction();

  useEffect(() => {
    onPopin(() => {
      utututututut();
    });
  }, [onPopin]);

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
