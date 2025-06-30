import { Link } from "@/components/core/link";
import { InternalLink } from "@/components/ui-parts/internal-link";

export type Doc = {
  id: string;
  title: string;
};

export type DocProps = {
  doc: Doc;
};

export const DocListItem = ({ doc }: DocProps) => {
  return (
    <div className="py-2">
      <Link asChild>
        <InternalLink href={`/doc/${doc.id}`}>{doc.title}</InternalLink>
      </Link>
    </div>
  );
};
