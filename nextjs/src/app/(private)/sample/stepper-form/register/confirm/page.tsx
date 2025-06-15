import { SampleFormContainer } from "@/app/(private)/sample/stepper-form/_components/sample-form-container";
import { SampleConfirm } from "@/app/(private)/sample/stepper-form/register/confirm/_components/sample-confirm";
import { PageContent } from "@/components/ui-parts/page-content";
import { paths } from "@/config/paths";

export default function Page() {
  return (
    <PageContent title={paths.sampleStepperForm.register.confirm.name}>
      <SampleFormContainer>
        {(yearItems, departmentItems, gradeItems) => (
          <SampleConfirm
            yearItems={yearItems}
            departmentItems={departmentItems}
            gradeItems={gradeItems}
          />
        )}
      </SampleFormContainer>
    </PageContent>
  );
}
