import { useCallback, useEffect, useState } from 'react';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { ButtonComponent } from '@/src/components/button/button.component.tsx';
import styles from '@/src/components/layout/menu/menu.module.scss';

export const MenuComponent = () => {
  const [open, setOpen] = useState(false);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && open) setOpen(false);
  }, []);

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
        <div className={styles.nav}>
          {['profile', 'dashboard', 'shop', 'explore'].map((page) => (
            <ButtonComponent
              key={page}
              to={`/ppc/${page}`}
            >
              {page}
            </ButtonComponent>
          ))}
        </div>
      </div>
    </div>
  );
};
