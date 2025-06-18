import { DynamicFormContainer } from "@/app/(private)/sample/dynamic-form/_components/dynamic-form-container";
import { PageContent } from "@/components/ui-parts/page-content";
import { Spinner } from "@/components/ui-parts/spinner";
import { paths } from "@/config/paths";
import { searchAddressQueryParams } from "@/lib/zod/schema";
import { Suspense } from "react";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Page({ searchParams }: PageProps) {
  const { zipcode } = await searchParams;
  const parzedSearchAddressQueryParams =
    await searchAddressQueryParams.parseAsync({
      zipcode: zipcode,
    });

  return (
    <PageContent title={paths.sampleDynamicForm.name}>
      <Suspense
        key={parzedSearchAddressQueryParams.zipcode}
        fallback={<Spinner />}
      >
        <DynamicFormContainer
          zipcode={parzedSearchAddressQueryParams.zipcode}
        />
      </Suspense>
    </PageContent>
  );
}
