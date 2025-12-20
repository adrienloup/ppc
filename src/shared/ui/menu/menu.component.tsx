import { useEffect, useRef, useState } from 'react';
import menu from '@/src/assets/sounds/menu.mp3';
import { IconComponent } from '@/src/shared/ui/icon/icon.component.tsx';
import { NavigationComponent } from '@/src/shared/ui/navigation/navigation.component.tsx';
import { ReaderComponent } from '@/src/shared/ui/reader/reader.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/menu/menu.module.scss';

export const MenuComponent = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        buttonRef.current?.click();
        //setOpen(false);
      }
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
      <ReaderComponent
        id="menubutton"
        className={styles.button}
        aria-label={open ? 'close menu' : 'open menu'}
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen(!open)}
        innerRef={buttonRef}
        sound={menu}
      >
        <IconComponent
          className={styles.icon}
          icon={open ? 'arrow_menu_open' : 'arrow_menu_close'}
        />
        menu
      </ReaderComponent>
      <div className={styles.inside}>
        <NavigationComponent links={['profile', 'factory', 'store', 'explore']} />
      </div>
    </div>
  );
};
