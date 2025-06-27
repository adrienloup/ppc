import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { fallback } from '@/src/common/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/common/components/loader/LoaderComponent.tsx';
import { ProfileComponent } from '@/src/features/profile/components/profile/ProfileComponent.tsx';

const LayoutComponent = lazy(() =>
  fallback(import('@/src/common/components/layout/LayoutComponent.tsx'), 15e2)
);

function ProfilePage() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<LoaderComponent aria-label={t('app.loading')} />}>
      <LayoutComponent>
        <ProfileComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default ProfilePage;
