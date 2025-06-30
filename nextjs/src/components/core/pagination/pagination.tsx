import { Button } from "@/components/core/button";
import type { ComponentProps } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export type PaginationProps = ComponentProps<"nav"> & {
  currentPage: number;
  totalPages: number;
  onClickPrev?: () => void;
  onClickNext?: () => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onClickPrev,
  onClickNext,
  className = "",
  ...rest
}: PaginationProps) => {
  return (
    <nav className={`flex items-center gap-2 ${className}`} {...rest}>
      <Button variant="text" onClick={onClickPrev}>
        <FaAngleLeft />
      </Button>
      <p>
        {currentPage}/{totalPages}
      </p>
      <Button variant="text" onClick={onClickNext}>
        <FaAngleRight />
      </Button>
    </nav>
  );
};
