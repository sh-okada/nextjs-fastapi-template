import { DocContainer } from "@/app/(private)/doc/[slug]/_components/doc-container";
import { PageContent } from "@/components/ui-parts/page-content";

export type DocPageContent = {
  slug: string;
};

export const DocPageContent = ({ slug }: DocPageContent) => {
  return (
    <DocContainer id={slug}>
      {(title) => <PageContent title={title} />}
    </DocContainer>
  );
};
