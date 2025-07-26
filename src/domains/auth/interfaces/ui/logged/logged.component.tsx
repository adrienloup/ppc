import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import styles from '@/src/domains/auth/interfaces/ui/logged/logged.module.scss';

export const LoggedComponent = () => {
  const { user } = useAuth();

  return <div className={styles.logged}>{user} connected</div>;
};
