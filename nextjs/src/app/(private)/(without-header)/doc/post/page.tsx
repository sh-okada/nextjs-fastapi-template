import { PostDocForm } from "@/app/(private)/(without-header)/doc/post/_components/post-doc-form";
import { PageContent } from "@/components/ui-parts/page-content";
import { paths } from "@/config/paths";

export default function Page() {
  return (
    <PageContent title={paths.postDoc.name}>
      <PostDocForm />
    </PageContent>
  );
}
