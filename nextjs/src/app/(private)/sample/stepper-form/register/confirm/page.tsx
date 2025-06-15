import { SampleFormContainer } from "@/app/(private)/sample/stepper-form/register/_components/sample-form-container";
import { SampleConfirm } from "@/app/(private)/sample/stepper-form/register/confirm/_components/sample-confirm";
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
            <SampleConfirm
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
