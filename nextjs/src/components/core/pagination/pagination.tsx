import type { ComponentProps } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";
import { Button } from "@/components/core/button";

export type PaginationProps = ComponentProps<"nav"> & {
  currentPage: number;
  totalPages: number;
  onClickTop?: () => void;
  onClickLast?: () => void;
  onClickPrev?: () => void;
  onClickNext?: () => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onClickTop,
  onClickLast,
  onClickPrev,
  onClickNext,
  className = "",
  ...rest
}: PaginationProps) => {
  return (
    <nav className={`flex items-center gap-2 ${className}`} {...rest}>
      <div className="flex">
        <Button variant="text" onClick={onClickTop}>
          <FaAnglesLeft />
        </Button>
        <Button variant="text" onClick={onClickPrev}>
          <FaAngleLeft />
        </Button>
      </div>
      <p>
        {currentPage}/{totalPages}
      </p>
      <div className="flex">
        <Button variant="text" onClick={onClickNext}>
          <FaAngleRight />
        </Button>
        <Button variant="text" onClick={onClickLast}>
          <FaAnglesRight />
        </Button>
      </div>
    </nav>
  );
};
