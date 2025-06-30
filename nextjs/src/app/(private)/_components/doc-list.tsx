import {
  type Doc,
  DocListItem,
} from "@/app/(private)/_components/doc-list-item";
import { Section } from "@/components/core/section/section";

export type DocListProps = {
  docs: Doc[];
};

export const Docs = ({ docs }: DocListProps) => {
  return (
    <Section>
      <Section.Content>
        {docs.length === 0 && (
          <p className="text-center">ドキュメントはありません</p>
        )}
        {docs.map((doc) => (
          <DocListItem key={doc.id} doc={doc} />
        ))}
      </Section.Content>
    </Section>
  );
};
