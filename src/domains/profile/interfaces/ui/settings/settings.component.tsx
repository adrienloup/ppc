import { useProfileDis } from '@/src/domains/profile/interfaces/useProfile.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import styles from '@/src/domains/profile/interfaces/ui/settings/settings.module.scss';

export const SettingsComponent = () => {
  // console.log('SettingsComponent');
  const proDispatch = useProfileDis();

  return (
    <div className={styles.settings}>
      <div className={styles.inner}>
        mode
        <div className={styles.buttons}>
          <ButtonComponent
            className={styles.button}
            onClick={() => proDispatch({ type: 'MODE', mode: 'light' })}
          >
            light
          </ButtonComponent>
          <ButtonComponent
            className={styles.button}
            onClick={() => proDispatch({ type: 'MODE', mode: 'dark' })}
          >
            dark
          </ButtonComponent>
          <ButtonComponent
            className={styles.button}
            onClick={() => proDispatch({ type: 'MODE', mode: 'system' })}
          >
            system
          </ButtonComponent>
        </div>
      </div>
      <div className={styles.inner}>
        lang
        <div className={styles.buttons}>
          <ButtonComponent
            className={styles.button}
            onClick={() => proDispatch({ type: 'LANG', lang: 'en' })}
          >
            en
          </ButtonComponent>
          <ButtonComponent
            className={styles.button}
            onClick={() => proDispatch({ type: 'LANG', lang: 'fr' })}
          >
            fr
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};
