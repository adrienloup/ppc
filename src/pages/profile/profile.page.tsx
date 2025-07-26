import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitle } from '@/src/shared/hooks/useTitle.ts';
import { fallback } from '@/src/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
import { DebugComponent } from '@/src/domains/debug/interfaces/debug.component.tsx';
import { ProfileComponent } from '@/src/domains/profile/interfaces/ui/profile/profile.component.tsx';

const LayoutComponent = lazy(() => fallback(import('@/src/shared/ui/layout/layout.component.tsx'), 1e3));

function ProfilePage() {
  const { t } = useTranslation();
  useTitle(t('profile.titlePage'));

  return (
    <Suspense fallback={<LoaderComponent arial-label={t('app.loading')} />}>
      <LayoutComponent>
        <DebugComponent />
        <ProfileComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default ProfilePage;
