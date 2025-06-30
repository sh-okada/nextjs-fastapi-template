import { getDocCount, getDocs } from "@/api/doc/doc";
import { Docs } from "@/app/(private)/_components/doc-list";
import { DocListPagination } from "@/app/(private)/_components/doc-list-pagination";

export type DocListContainerProps = {
  page: number;
};

export const DocListContainer = async ({ page }: DocListContainerProps) => {
  const docs = (await getDocs(page)).data;
  const docCount = (await getDocCount()).data;
  const totalPages = Math.ceil(docCount.count / 5);

  return (
    <>
      <Docs docs={docs} />
      <DocListPagination currentPage={page} totalPages={totalPages} />
    </>
  );
};
