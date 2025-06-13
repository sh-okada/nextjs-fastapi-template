import { SignUpForm } from "@/app/(public)/signup/_components/signup-form";
import { PageContent } from "@/components/ui-parts/page-content";
import { paths } from "@/config/paths";

export default function Page() {
  return (
    <PageContent title={paths.signup.name}>
      <SignUpForm />
    </PageContent>
  );
}
