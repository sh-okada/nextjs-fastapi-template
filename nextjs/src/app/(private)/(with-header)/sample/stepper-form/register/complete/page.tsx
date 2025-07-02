import { Button } from "@/components/core/button";
import { Stepper } from "@/components/core/stepper/stepper";
import { InternalLink } from "@/components/ui-parts/internal-link";
import { PageContent } from "@/components/ui-parts/page-content";
import { paths } from "@/config/paths";

export default function Page() {
  return (
    <PageContent title={paths.stepperFormConfirm.name}>
      <div className="flex flex-col gap-8">
        <Stepper>
          <Stepper.Progress current={3} progress={3} />
          <Stepper.Header>登録完了</Stepper.Header>
        </Stepper>
        <Button className="text-center" variant="outline" asChild>
          <InternalLink href={paths.home.getHref({})}>
            トップに戻る
          </InternalLink>
        </Button>
      </div>
    </PageContent>
  );
}
