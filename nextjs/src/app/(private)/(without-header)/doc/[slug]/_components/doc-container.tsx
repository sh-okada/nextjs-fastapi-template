import { getDoc } from "@/api/doc/doc";
import { Doc } from "@/app/(private)/(without-header)/doc/[slug]/_components/doc";

export type DocContainerProps = {
  id: string;
};

export const DocContainer = async ({ id }: DocContainerProps) => {
  const doc = (await getDoc(id)).data;

  return <Doc title={doc.title} text={doc.text} />;
};
