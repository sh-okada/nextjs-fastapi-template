import { getDocs } from "@/api/doc/doc";
import { Docs } from "@/app/(private)/_components/doc-list";

export type DocListContainerProps = {
  page?: number;
};

export const DocListContainer = async ({ page }: DocListContainerProps) => {
  const docs = await getDocs(page);

  return <Docs docs={docs.data} />;
};
