import styles from '@/src/domains/profile/interfaces/ui/settings/settings.module.scss';

export const SettingsComponent = () => {
  console.log('SettingsComponent');
  return (
    <div className={styles.settings}>
      settings
      <div>language en/fr mode light/dark</div>
    </div>
  );
};
