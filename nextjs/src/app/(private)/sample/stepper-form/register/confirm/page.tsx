import { SampleFormContainer } from "@/app/(private)/sample/stepper-form/_components/sample-form-container";
import { SampleForm } from "@/app/(private)/sample/stepper-form/register/_components/sample-form";
import { PageContent } from "@/components/ui-parts/page-content";
import { paths } from "@/config/paths";

export default function Page() {
  return (
    <PageContent title={paths.sampleStepperForm.register.confirm.name}>
      <SampleFormContainer>
        {(yearItems, departmentItems, gradeItems) => (
          <SampleForm
            yearItems={yearItems}
            departmentItems={departmentItems}
            gradeItems={gradeItems}
          />
        )}
      </SampleFormContainer>
    </PageContent>
  );
}
