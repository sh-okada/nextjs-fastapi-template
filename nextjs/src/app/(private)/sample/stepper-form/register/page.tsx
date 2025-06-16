import { StepperForm } from "@/app/(private)/sample/stepper-form/register/_components/stepper-form";
import { StepperFormContainer } from "@/app/(private)/sample/stepper-form/register/_components/stepper-form-container";
import { PageContent } from "@/components/ui-parts/page-content";
import { Spinner } from "@/components/ui-parts/spinner";
import { paths } from "@/config/paths";
import { Suspense } from "react";

export default function Page() {
  return (
    <PageContent title={paths.sampleStepperForm.register.confirm.name}>
      <Suspense fallback={<Spinner />}>
        <StepperFormContainer>
          {(yearItems, departmentItems, gradeItems) => (
            <StepperForm
              yearItems={yearItems}
              departmentItems={departmentItems}
              gradeItems={gradeItems}
            />
          )}
        </StepperFormContainer>
      </Suspense>
    </PageContent>
  );
}
