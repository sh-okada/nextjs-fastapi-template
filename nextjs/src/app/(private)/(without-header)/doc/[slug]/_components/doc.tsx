import { Section } from "@/components/core/section/section";
import { Markdown } from "@/components/ui-parts/markdown/markdown";

export type DocProps = {
  title: string;
  text: string;
};

export const Doc = ({ title, text }: DocProps) => {
  return (
    <Section>
      <Section.Header>{title}</Section.Header>
      <Section.Content>
        <Markdown body={text} />
      </Section.Content>
    </Section>
  );
};
