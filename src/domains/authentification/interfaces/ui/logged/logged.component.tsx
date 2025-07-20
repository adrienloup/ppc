import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import styles from '@/src/domains/authentification/interfaces/ui/logged/logged.module.scss';

export const LoggedComponent = () => {
  const { user } = useAuth();

  return <div className={styles.logged}>{user} connected</div>;
};
