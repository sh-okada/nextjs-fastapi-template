"use client";

import { useRouter } from "next/navigation";
import { Pagination } from "@/components/core/pagination/pagination";
import { paths } from "@/config/paths";

export type DocListPaginationProps = {
  currentPage: number;
  totalPages: number;
};

export const DocListPagination = ({
  currentPage,
  totalPages,
}: DocListPaginationProps) => {
  const router = useRouter();

  const clickTopButton = () => {
    if (currentPage === 1) return;
    router.push(paths.home.getHref({ page: String(1) }));
  };

  const clickLastButton = () => {
    if (currentPage === totalPages) return;
    router.push(paths.home.getHref({ page: String(totalPages) }));
  };

  const clickPrevButton = () => {
    if (currentPage === 1) return;
    router.push(paths.home.getHref({ page: String(currentPage - 1) }));
  };

  const clickNextButton = () => {
    if (currentPage === totalPages) return;
    router.push(paths.home.getHref({ page: String(currentPage + 1) }));
  };

  return (
    <Pagination
      className="justify-center"
      currentPage={currentPage}
      totalPages={totalPages}
      onClickTop={clickTopButton}
      onClickLast={clickLastButton}
      onClickPrev={clickPrevButton}
      onClickNext={clickNextButton}
    />
  );
};
