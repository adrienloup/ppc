import { NavLink } from "react-router-dom";
import { Icon } from "@/src/shared/ui/icon/Icon.tsx";
import type { NavigationType } from "@/src/shared/ui/navigation/Navigation.ts";
import { classNames } from "@/src/shared/utils/classNames.ts";
import styles from "@/src/shared/ui/navigation/Navigation.module.scss";

export const Navigation = ({
  className,
  id = "main-navigation",
  links,
}: NavigationType) => {
  return (
    <nav
      className={classNames(styles.navigation, className)}
      id={id}
      role="navigation"
    >
      {links.map((link) => (
        <NavLink
          key={link.page}
          className={({ isActive }) =>
            [styles.button, isActive && styles.active].filter(Boolean).join(" ")
          }
          to={"/" + link.page}
        >
          <Icon className={styles.icon} icon={link.icon} />
          <span className={styles.label}>{link.page}</span>
        </NavLink>
      ))}
    </nav>
  );
};
