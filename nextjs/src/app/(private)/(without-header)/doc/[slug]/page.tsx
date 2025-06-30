import { Suspense } from "react";
import { DocContainer } from "@/app/(private)/(without-header)/doc/[slug]/_components/doc-container";
import { PageContent } from "@/components/ui-parts/page-content";
import { Spinner } from "@/components/ui-parts/spinner";
import { paths } from "@/config/paths";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <PageContent title={paths.doc.name}>
      <Suspense fallback={<Spinner />}>
        <DocContainer id={slug} />
      </Suspense>
    </PageContent>
  );
}
