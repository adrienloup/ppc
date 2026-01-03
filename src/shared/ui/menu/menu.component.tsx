import { useEffect, useRef, useState } from 'react';
import menuSound from '@/src/assets/sounds/menu.mp3';
import { IconComponent } from '@/src/shared/ui/icon/icon.component.tsx';
import { NavigationComponent } from '@/src/shared/ui/navigation/navigation.component.tsx';
import { ReaderComponent } from '@/src/shared/ui/reader/reader.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/menu/menu.module.scss';

const links: { label: string; icon: string }[] = [
  {
    label: 'profile',
    icon: 'account_circle',
  },
  {
    label: 'factory',
    icon: 'factory',
  },
  {
    label: 'store',
    icon: 'storefront',
  },
  {
    label: 'explore',
    icon: 'explore',
  },
];

export const MenuComponent = () => {
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
      <ReaderComponent
        id="menubutton"
        className={styles.button}
        aria-label={open ? 'close menu' : 'open menu'}
        aria-expanded={open}
        aria-controls="menu"
        innerRef={buttonRef}
        onClick={() => setOpen(!open)}
        sound={menuSound}
      >
        <IconComponent icon={open ? 'top_panel_open' : 'top_panel_close'} />
        <span className={styles.label}>menu</span>
      </ReaderComponent>
      <div className={styles.inner}>
        <NavigationComponent links={links} />
      </div>
    </div>
  );
};
