import { version } from '@/package.json';
import styles from '@/src/common/components/footer/FooterComponent.module.scss';

export const FooterComponent = () => {
  return (
    <footer
      className={styles.footer}
      role="contentinfo"
    >
      {version}
    </footer>
  );
};
