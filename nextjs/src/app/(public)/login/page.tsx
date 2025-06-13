import { LoginForm } from "@/app/(public)/login/_components/login-form";
import { PageContent } from "@/components/ui-parts/page-content";
import { paths } from "@/config/paths";

export default function Page() {
  return (
    <PageContent title={paths.login.name}>
      <LoginForm />
    </PageContent>
  );
}
