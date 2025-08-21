import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ADMIN_KEY } from '@/src/domains/admin/infrastructure/admin.key.ts';
// import { AdminBusinessComponent } from '@/src/domains/admin/interfaces/ui/adminBusiness.component.tsx';
import { AdminElecComponent } from '@/src/domains/admin/interfaces/ui/adminElec.component.tsx';
import { AdminFundsComponent } from '@/src/domains/admin/interfaces/ui/adminFunds.component.tsx';
import { AdminInventoryComponent } from '@/src/domains/admin/interfaces/ui/adminInventory.component.tsx';
import { AdminITComponent } from '@/src/domains/admin/interfaces/ui/adminIt.component.tsx';
import { AdminMecaComponent } from '@/src/domains/admin/interfaces/ui/adminMeca.component.tsx';
import styles from '@/src/domains/admin/interfaces/ui/admin.module.scss';

export const AdminComponent = () => {
  const location = useLocation();

  const admin = useMemo(() => {
    const admin = location.search.split('=')[0] == '?admin' ? location.search.split('=').pop() : '';

    if (admin == '1') {
      localStorage.setItem(ADMIN_KEY, JSON.stringify('admin'));
    } else if (admin == '0') {
      localStorage.removeItem(ADMIN_KEY);
    }

    return !!window.localStorage.getItem(ADMIN_KEY);
  }, [location.search]);

  return admin ? (
    <div
      className={styles.admin}
      role="complementary"
    >
      <AdminMecaComponent />
      <AdminInventoryComponent />
      <AdminFundsComponent />
      {/*<AdminBusinessComponent />*/}
      <AdminITComponent />
      <AdminElecComponent />
    </div>
  ) : null;
};
