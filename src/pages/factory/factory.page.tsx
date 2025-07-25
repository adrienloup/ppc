import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { fallback } from '@/src/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
import { DebugComponent } from '@/src/domains/debug/interfaces/debug.component.tsx';
import { FactoryComponent } from '@/src/domains/factory/interfaces/ui/factory/factory.component.tsx';

const LayoutComponent = lazy(() =>
  fallback(import('@/src/shared/ui/layout/layout.component.tsx'), 1e3)
);

function FactoryPage() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<LoaderComponent arial-label={t('app.loading')} />}>
      <LayoutComponent>
        <DebugComponent />
        <FactoryComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default FactoryPage;
