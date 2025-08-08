import { useCallback, useEffect, useState } from 'react';
import { ControlsComponent } from '@/src/domains/profile/interfaces/ui/controls/controls.component.tsx';
import { SettingsComponent } from '@/src/domains/profile/interfaces/ui/settings/settings.component.tsx';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { NavigationComponent } from '@/src/shared/ui/navigation/navigation.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/menu/menu.module.scss';

export const MenuComponent = () => {
  const [open, setOpen] = useState(false);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false);
    },
    [open]
  );

  useEffect(() => {
    if (!open) return;
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onKeyDown]);

  return (
    <div
      id="menu"
      className={classNames(styles.menu, open ? styles.open : '')}
      role="menu"
      aria-labelledby="menubutton"
    >
      <ButtonComponent
        id="menubutton"
        className={styles.button}
        aria-label={open ? 'close menu' : 'open menu'}
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen(!open)}
      >
        menu
      </ButtonComponent>
      <div className={styles.inside}>
        <NavigationComponent links={['profile', 'factory', 'store', 'explore']} />
        <div className={styles.group}>
          <SettingsComponent />
          <ControlsComponent />
        </div>
      </div>
    </div>
  );
};
