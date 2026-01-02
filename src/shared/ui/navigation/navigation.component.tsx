import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { IconComponent } from '@/src/shared/ui/icon/icon.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Navigation } from '@/src/shared/ui/navigation/navigation.type.ts';
import styles from '@/src/shared/ui/navigation/navigation.module.scss';

export const NavigationComponent = ({ className, id = 'main-navigation', links }: Navigation) => {
  return (
    <nav
      className={classNames(styles.navigation, className)}
      id={id}
      role="navigation"
    >
      {links.map((link) => (
        <ButtonComponent
          key={link}
          className={styles.link}
          to={`/ppc/${link}`}
        >
          <IconComponent icon={link} />
          {link}
        </ButtonComponent>
      ))}
    </nav>
  );
};
