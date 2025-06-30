import { Link } from "@/components/core/link";
import { InternalLink } from "@/components/ui-parts/internal-link";
import { paths } from "@/config/paths";

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
        <InternalLink href={paths.doc.getHref(doc.id)}>
          {doc.title}
        </InternalLink>
      </Link>
    </div>
  );
};
