import { useEffect, useRef, useState } from 'react';
import menuSound from '@/src/assets/sounds/menu.mp3';
import { Icon } from '@/src/shared/ui/icon/Icon.tsx';
import { Navigation } from '@/src/shared/ui/navigation/Navigation.tsx';
import { Reader } from '@/src/shared/ui/reader/Reader.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/menu/Menu.module.scss';

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') buttonRef.current?.click();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div
      id="menu"
      className={classNames(styles.menu, open ? styles.open : '')}
      role="menu"
      aria-labelledby="menubutton"
    >
      <Reader
        id="menubutton"
        className={styles.button}
        aria-label={open ? 'close menu' : 'open menu'}
        aria-expanded={open}
        aria-controls="menu"
        innerRef={buttonRef}
        onClick={() => setOpen(!open)}
        sound={menuSound}
      >
        <Icon icon={open ? 'menu_open' : 'menu'} />
        <span className={styles.label}>menu</span>
      </Reader>
      <div className={styles.inner}>
        <Navigation />
      </div>
    </div>
  );
};
