import { SampleFormContainer } from "@/app/(private)/sample/stepper-form/register/_components/sample-form-container";
import { PageContent } from "@/components/ui-parts/page-content";
import { paths } from "@/config/paths";

export default function Page() {
  return (
    <PageContent title={paths.sampleStepperFormRegister.name}>
      <SampleFormContainer />
    </PageContent>
  );
}
