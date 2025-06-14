import { SampleFormContainer } from "@/app/(private)/sample/form/_components/sample-form-container";
import { PageContent } from "@/components/ui-parts/page-content";
import { paths } from "@/config/paths";

export default function Page() {
  return (
    <PageContent title={paths.sampleForm.name}>
      <SampleFormContainer />
    </PageContent>
  );
}
