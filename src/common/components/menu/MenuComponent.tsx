import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/features/game/infrastructure/useGame.ts';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import type { Page } from '@/src/features/game/domain/Page.ts';
import styles from '@/src/common/components/menu/MenuComponent.module.scss';

export const MenuComponent = () => {
  const { t } = useTranslation();
  const [game, setGame] = useGame();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <div
      id="menu"
      className={classNames([styles.menu, isOpen ? styles.open : ''])}
      role="menu"
      aria-labelledby="menubutton"
    >
      <ButtonComponent
        id="menubutton"
        className={styles.button}
        aria-label={isOpen ? t('app.menu.close') : t('app.menu.open')}
        aria-expanded={isOpen}
        aria-controls="menu"
        onClick={() => setOpen(!isOpen)}
      >
        menu
      </ButtonComponent>
      <div className={styles.inside}>
        <div className={styles.nav}>
          {(['profile', 'factory', 'shop', 'explore'] as Page[]).map((page: Page) => (
            <ButtonComponent
              key={page}
              to={`/ppc/${page}`}
            >
              {page}
            </ButtonComponent>
          ))}
          <ButtonComponent onClick={() => setGame({ ...game, isPlay: !game.isPlay })}>
            {game.isPlay ? 'start' : 'pause'}
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};
