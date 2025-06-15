import { SampleForm } from "@/app/(private)/sample/stepper-form/register/_components/sample-form";
import { SampleFormContainer } from "@/app/(private)/sample/stepper-form/register/_components/sample-form-container";
import { PageContent } from "@/components/ui-parts/page-content";
import { Spinner } from "@/components/ui-parts/spinner";
import { paths } from "@/config/paths";
import { Suspense } from "react";

export default function Page() {
  return (
    <PageContent title={paths.sampleStepperForm.register.confirm.name}>
      <Suspense fallback={<Spinner />}>
        <SampleFormContainer>
          {(yearItems, departmentItems, gradeItems) => (
            <SampleForm
              yearItems={yearItems}
              departmentItems={departmentItems}
              gradeItems={gradeItems}
            />
          )}
        </SampleFormContainer>
      </Suspense>
    </PageContent>
  );
}
