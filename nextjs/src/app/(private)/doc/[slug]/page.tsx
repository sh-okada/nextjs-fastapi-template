import { DocPageContent } from "@/app/(private)/doc/[slug]/_components/doc-page-content";
import { Spinner } from "@/components/ui-parts/spinner";
import { Suspense } from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<Spinner />}>
      <DocPageContent slug={slug} />
    </Suspense>
  );
}
