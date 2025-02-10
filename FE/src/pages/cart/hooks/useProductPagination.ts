import { useState } from "react";

export const useProductPagination = (
  totalItems: number,
  itemsPerPage: number
) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageNavigation = (newPage: number) => {
    const maxPage = Math.ceil(totalItems / itemsPerPage);
    setCurrentPage(Math.max(1, Math.min(newPage, maxPage)));
  };

  const handleNextPage = () => handlePageNavigation(currentPage + 1);
  const handlePrevPage = () => handlePageNavigation(currentPage - 1);

  return {
    currentPage,
    handleNextPage,
    handlePrevPage,
  };
};
