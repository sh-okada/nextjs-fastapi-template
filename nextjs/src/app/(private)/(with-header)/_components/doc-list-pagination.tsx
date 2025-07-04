import { getDocCount } from "@/api/docs";
import { getPaginationProps } from "@/components/core/pagination/helper/getPaginationProps";
import { Pagination } from "@/components/core/pagination/pagination";
import { paths } from "@/config/paths";

export type DocListPaginationProps = {
  currentPage: number;
};

export const DocListPagination = async ({
  currentPage,
}: DocListPaginationProps) => {
  const docCount = (await getDocCount()).data;
  const totalPages = Math.max(1, Math.ceil(docCount.count / 5));

  return (
    <Pagination
      className="justify-center"
      {...getPaginationProps(currentPage, totalPages, (page: number) =>
        paths.home.getHref({ page: String(page) }),
      )}
    />
  );
};
