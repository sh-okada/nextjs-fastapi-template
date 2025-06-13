import { ConfirmProfile } from "@/app/(private)/profile/confirm/_components/confirm-profile";
import { InternalLink } from "@/components/ui-parts/internal-link";
import { PageContent } from "@/components/ui-parts/page-content";
import { paths } from "@/config/paths";

export default function Page() {
  return (
    <PageContent title={paths.confirmProfile.name}>
      <ConfirmProfile />
    </PageContent>
  );
}
