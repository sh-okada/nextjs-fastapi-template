import { Button } from "@/components/core/button";
import { Section } from "@/components/core/section/section";
import { InternalLink } from "@/components/ui-parts/internal-link";
import { PageContent } from "@/components/ui-parts/page-content";
import { paths } from "@/config/paths";

export default function Page() {
  return (
    <PageContent title={paths.sampleStepperForm.register.confirm.name}>
      <Section>
        <Section.Header>登録完了しました</Section.Header>
        <Section.Content>
          <Button asChild>
            <InternalLink href={paths.home.getHref()}>
              トップに戻る
            </InternalLink>
          </Button>
        </Section.Content>
      </Section>
    </PageContent>
  );
}
