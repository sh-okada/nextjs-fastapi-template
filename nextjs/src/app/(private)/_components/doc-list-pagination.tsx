"use client";

import { Pagination } from "@/components/core/pagination/pagination";
import { paths } from "@/config/paths";
import { useRouter } from "next/navigation";

export type DocListPaginationProps = {
  currentPage: number;
  totalPages: number;
};

export const DocListPagination = ({
  currentPage,
  totalPages,
}: DocListPaginationProps) => {
  const router = useRouter();

  const clickPrevButton = () => {
    if (currentPage === 1) return;
    router.push(paths.home.getHref({ page: (currentPage - 1).toString() }));
  };

  const clickNextButton = () => {
    if (currentPage === totalPages) return;
    router.push(paths.home.getHref({ page: (currentPage + 1).toString() }));
  };

  return (
    <Pagination
      className="justify-center"
      currentPage={currentPage}
      totalPages={totalPages}
      onClickPrev={clickPrevButton}
      onClickNext={clickNextButton}
    />
  );
};
