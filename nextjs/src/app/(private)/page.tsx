import { DocListContainer } from "@/app/(private)/_components/doc-list-container";
import { PageContent } from "@/components/ui-parts/page-content";
import { Spinner } from "@/components/ui-parts/spinner";
import { paths } from "@/config/paths";
import { getDocsQueryParams } from "@/lib/zod/schema";
import { Suspense } from "react";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Page({ searchParams }: PageProps) {
  const { page } = await searchParams;
  const parzedGetDocsQueryParams = await getDocsQueryParams.parseAsync({
    page: page,
  });

  return (
    <PageContent title={paths.home.name}>
      <Suspense key={parzedGetDocsQueryParams.page} fallback={<Spinner />}>
        <DocListContainer page={parzedGetDocsQueryParams.page ?? 1} />
      </Suspense>
    </PageContent>
  );
}
