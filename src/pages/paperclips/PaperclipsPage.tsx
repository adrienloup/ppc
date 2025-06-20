import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { fallback } from '@/src/common/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/common/components/loader/LoaderComponent.tsx';
import { PageNavigator } from '@/src/components/PageNavigator.tsx';

const LayoutComponent = lazy(() => fallback(import('@/src/common/components/layout/LayoutComponent.tsx'), 15e2));

function PaperclipsPage() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<LoaderComponent aria-label={t('app.loading')} />}>
      <LayoutComponent>
        <PageNavigator />
      </LayoutComponent>
    </Suspense>
  );
}

export default PaperclipsPage;
