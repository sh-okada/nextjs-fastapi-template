import { Suspense } from "react";
import { StepperFormContainer } from "@/app/(private)/(with-header)/sample/stepper-form/register/_components/stepper-form-container";
import { StepperConfirm } from "@/app/(private)/(with-header)/sample/stepper-form/register/confirm/_components/stepper-confirm";
import { PageContent } from "@/components/ui-parts/page-content";
import { Spinner } from "@/components/ui-parts/spinner";
import { paths } from "@/config/paths";

export default function Page() {
  return (
    <PageContent title={paths.stepperFormConfirm.name}>
      <Suspense fallback={<Spinner />}>
        <StepperFormContainer>
          {(yearItems, departmentItems, gradeItems) => (
            <StepperConfirm
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
