import { ProfileComponent } from '@/src/domains/profile/ui/profile/profile.component.tsx';
import { useTitle } from '@/src/shared/hooks/useTitle.ts';
import { PageComponent } from '@/src/shared/ui/page/page.component.tsx';

function ProfilePage() {
  useTitle('profile');

  return (
    <PageComponent>
      <ProfileComponent />
    </PageComponent>
  );
}

export default ProfilePage;
