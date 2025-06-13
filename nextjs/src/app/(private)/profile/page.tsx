import { ProfileFormContainer } from "@/app/(private)/profile/_components/profile-form-container";
import { PageContent } from "@/components/ui-parts/page-content";
import { paths } from "@/config/paths";

export default function Page() {
  return (
    <PageContent title={paths.profile.name}>
      <ProfileFormContainer />
    </PageContent>
  );
}
