import { Suspense } from "react";
import { DocContainer } from "@/app/(private)/(without-header)/doc/[slug]/_components/doc-container";
import { Spinner } from "@/components/ui-parts/spinner";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<Spinner />}>
      <DocContainer id={slug} />
    </Suspense>
  );
}
