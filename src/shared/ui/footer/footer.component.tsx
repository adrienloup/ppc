import { version } from '@/package.json';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import styles from '@/src/shared/ui/footer/footer.module.scss';

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
