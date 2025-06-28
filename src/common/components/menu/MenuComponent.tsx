import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useProfile } from '@/src/features/profile/infrastructure/useProfile.ts';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import type { Page } from '@/src/features/game/domain/Page.ts';
import styles from '@/src/common/components/menu/MenuComponent.module.scss';

export const MenuComponent = () => {
  const { t } = useTranslation();
  const [profile, setProfile] = useProfile();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setOpen(false);
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
          {(['profile', 'dashboard', 'shop', 'explore'] as Page[]).map((page: Page) => (
            <ButtonComponent
              key={page}
              to={`/ppc/${page}`}
            >
              {page}
            </ButtonComponent>
          ))}
        </div>
        <div>
          <ButtonComponent onClick={() => setProfile({ type: 'SET_LANGUAGE', language: 'en' })}>
            {profile.language === 'en' ? <span style={{ color: 'green ' }}>en</span> : 'en'}
          </ButtonComponent>{' '}
          <ButtonComponent onClick={() => setProfile({ type: 'SET_LANGUAGE', language: 'fr' })}>
            {profile.language === 'fr' ? <span style={{ color: 'green ' }}>fr</span> : 'fr'}
          </ButtonComponent>{' '}
          <ButtonComponent onClick={() => setProfile({ type: 'SET_MODE', mode: 'dark' })}>dark</ButtonComponent>{' '}
          <ButtonComponent onClick={() => setProfile({ type: 'SET_MODE', mode: 'light' })}>light</ButtonComponent>{' '}
          <ButtonComponent onClick={() => setProfile({ type: 'SET_MODE', mode: 'system' })}>system</ButtonComponent>{' '}
          <ButtonComponent onClick={() => setProfile({ type: 'SET_THEME', theme: 'dusk' })}>dusk</ButtonComponent>{' '}
          <ButtonComponent onClick={() => setProfile({ type: 'SET_THEME', theme: 'tumult' })}>tumult</ButtonComponent>{' '}
          <ButtonComponent onClick={() => setProfile({ type: 'SET_THEME', theme: 'cataclysm' })}>
            cataclysm
          </ButtonComponent>
        </div>
        <div>
          <ButtonComponent onClick={() => setProfile({ type: 'SET_PLAY' })}>
            {profile.isPlay ? 'start' : 'pause'}
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};
