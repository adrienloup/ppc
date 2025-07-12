import { version } from '@/package.json';
import styles from '@/src/shared/components/footer/footer.module.scss';

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
