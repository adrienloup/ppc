import { lazy, Suspense } from 'react';
// import ProfileComponent from '@/src/domains/profile/ui/profile/profile.component.tsx';
import { useTitle } from '@/src/shared/hooks/useTitle.ts';
// import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
import { PageComponent } from '@/src/shared/ui/page/page.component.tsx';
// import { delay } from '@/src/shared/utils/delay.ts';

// const ProfileComponent = lazy(() =>
//   delay(import('@/src/domains/profile/ui/profile/profile.component.tsx'), 5e3)
// );

const ProfileComponent = lazy(() => import('@/src/domains/profile/ui/profile/profile.component.tsx'));

function ProfilePage() {
  useTitle('profile');

  return (
    <Suspense fallback={<div>loading...</div>}>
      <PageComponent>
        <ProfileComponent />
      </PageComponent>
    </Suspense>
  );
}

export default ProfilePage;
