"use client";

import {
  Pagination,
  type PaginationProps,
} from "@/components/core/pagination/pagination";
import { paths } from "@/config/paths";
import { useRouter } from "next/navigation";

export type DocListPaginationProps = Omit<PaginationProps, "onPageChange">;

export const DocListPagination = (props: DocListPaginationProps) => {
  const router = useRouter();
  const onPageChange = (page: number) => {
    router.push(paths.home.getHref({ page: page.toString() }));
  };
  return <Pagination onPageChange={onPageChange} {...props} />;
};
