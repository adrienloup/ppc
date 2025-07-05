import { useAuth } from '@/src/features/authentification/useAuth.ts';
import styles from '@/src/components/logged/logged.module.scss';

export const LoggedComponent = () => {
  const { state } = useAuth();

  return <div className={styles.logged}>{state.account}</div>;
};
