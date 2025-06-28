import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { fallback } from '@/src/common/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/common/components/loader/LoaderComponent.tsx';
import { DashboardComponent } from '@/src/features/factory/components/dashboard/DashboardComponent.tsx';
import { DebugComponent } from '@/src/features/debug/components/debug/DebugComponent.tsx';

const LayoutComponent = lazy(() =>
  fallback(import('@/src/common/components/layout/LayoutComponent.tsx'), 15e2)
);

function DashboardPage() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<LoaderComponent aria-label={t('app.loading')} />}>
      <LayoutComponent>
        <DebugComponent />
        <DashboardComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default DashboardPage;
