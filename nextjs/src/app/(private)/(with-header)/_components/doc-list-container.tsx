import { getDocs } from "@/api/docs";
import { Docs } from "@/app/(private)/(with-header)/_components/doc-list";

export type DocListContainerProps = {
  page: number;
};

export const DocListContainer = async ({ page }: DocListContainerProps) => {
  const docs = (await getDocs(page)).data;

  return <Docs docs={docs} />;
};
