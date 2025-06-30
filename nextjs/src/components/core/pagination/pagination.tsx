"use client";

import { Button } from "@/components/core/button";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export type PaginationProps = {
  totalPages: number;
  onPageChange?: (page: number) => void;
};

export const Pagination = ({ totalPages, onPageChange }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onPageChange?.(currentPage);
  }, [currentPage]);

  const clickPrevButton = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const clickNextButton = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <nav className="flex items-center">
      <Button variant="text" onClick={clickPrevButton}>
        <FaAngleLeft />
      </Button>
      <p>
        {currentPage}/{totalPages}
      </p>
      <Button variant="text" onClick={clickNextButton}>
        <FaAngleRight />
      </Button>
    </nav>
  );
};
