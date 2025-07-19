import { useCallback, useEffect, useState } from 'react';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { NavigationComponent } from '@/src/shared/ui/navigation/navigation.component.tsx';
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
      className={classNames([styles.menu, open ? styles.open : ''])}
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
        <NavigationComponent items={['profile', 'factory', 'store', 'explore']} />
        <div
          style={{
            padding: '0 var(--spacing-s)',
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-1)',
          }}
        >
          contrôle
          <div>bouton play/pause</div>
        </div>
        <div
          style={{
            padding: '0 var(--spacing-s)',
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-1)',
          }}
        >
          settings
          <div>language en/fr mode light/dark</div>
        </div>
      </div>
    </div>
  );
};
