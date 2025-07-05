import { useAuth } from '@/src/features/authentification/useAuth.ts';
import styles from '@/src/components/logged/logged.module.scss';

export const LoggedComponent = () => {
  const { user } = useAuth();

  return <div className={styles.logged}>{user}</div>;
};
