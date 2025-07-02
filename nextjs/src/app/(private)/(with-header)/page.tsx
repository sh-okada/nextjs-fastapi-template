import { Suspense } from "react";
import { DocListContainer } from "@/app/(private)/(with-header)/_components/doc-list-container";
import { DocListPagination } from "@/app/(private)/(with-header)/_components/doc-list-pagination";
import { MarkdownEditor } from "@/components/ui-parts/markdown-editor/markdown-editor";
import { PageContent } from "@/components/ui-parts/page-content";
import { Spinner } from "@/components/ui-parts/spinner";
import { paths } from "@/config/paths";
import { getDocsQueryParams } from "@/lib/zod/schema";

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
      <DocListPagination currentPage={parzedGetDocsQueryParams.page ?? 1} />
      <MarkdownEditor doc="# Hello World" />
    </PageContent>
  );
}
