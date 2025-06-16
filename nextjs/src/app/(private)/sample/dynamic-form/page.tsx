import { DynamicFormContainer } from "@/app/(private)/sample/dynamic-form/_components/dynamic-form-container";
import { PageContent } from "@/components/ui-parts/page-content";
import { Spinner } from "@/components/ui-parts/spinner";
import { paths } from "@/config/paths";
import { Suspense } from "react";

type PageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function Page({ searchParams }: PageProps) {
  // const { zipcode } = searchParams;

  return (
    <PageContent title={paths.sampleDynamicForm.name}>
      <Suspense fallback={<Spinner />}>
        <DynamicFormContainer />
      </Suspense>
    </PageContent>
  );
}
