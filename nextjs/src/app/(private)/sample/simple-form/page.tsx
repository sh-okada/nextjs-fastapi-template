import { SimpleFormContainer } from "@/app/(private)/sample/simple-form/_components/simple-form-container";
import { PageContent } from "@/components/ui-parts/page-content";
import { Spinner } from "@/components/ui-parts/spinner";
import { paths } from "@/config/paths";
import { Suspense } from "react";

export default function Page() {
  return (
    <PageContent title={paths.sampleForm.name}>
      <Suspense fallback={<Spinner />}>
        <SimpleFormContainer />
      </Suspense>
    </PageContent>
  );
}
