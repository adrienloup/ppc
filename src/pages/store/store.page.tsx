import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { AdminComponent } from '@/src/domains/admin/interfaces/ui/admin.component.tsx';
import { StoreComponent } from '@/src/domains/factory/interfaces/ui/store/store.component.tsx';
import { useTitle } from '@/src/shared/hooks/useTitle.ts';
import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
import { fallback } from '@/src/shared/utils/fallback.ts';

const LayoutComponent = lazy(() => fallback(import('@/src/shared/ui/layout/layout.component.tsx'), 1e3));

function StorePage() {
  const { t } = useTranslation();
  useTitle(t('store.titlePage'));

  return (
    <Suspense fallback={<LoaderComponent arial-label={t('app.loading')} />}>
      <LayoutComponent>
        <AdminComponent />
        <StoreComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default StorePage;
