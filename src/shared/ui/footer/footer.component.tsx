import { version } from '@/package.json';
import styles from '@/src/shared/ui/footer/footer.module.scss';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';

export const FooterComponent = () => {
  return (
    <footer
      className={styles.footer}
      role="contentinfo"
    >
      <ButtonComponent
        className={styles.button}
        href="https://github.com/adrienloup/ppc"
      >
        {version}
      </ButtonComponent>
    </footer>
  );
};
