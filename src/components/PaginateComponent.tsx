import { useState } from "react";
import { PaginateProps } from "../types/Types";

const PaginateComponent = ({
  currentPage: initialPage = 1,
  setCurrentPage,
}: PaginateProps) => {
  const maxPages = 20;
  const [currentPage, setPage] = useState(initialPage);

  const prevPage = () => setPage(Math.max(currentPage - 1, 1));
  const nextPage = () => setPage(Math.min(currentPage + 1, maxPages));

  const getPageItems = () => {
    const leftSide = Math.max(currentPage - 2, 1);
    const rightSide = Math.min(currentPage + 2, maxPages);
    const items: JSX.Element[] = [];

    for (let number = leftSide; number <= rightSide; number++) {
      items.push(
        <div
          key={number}
          className={`round-effect ${number === currentPage ? "active" : ""}`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </div>
      );
    }

    return items;
  };

  return (
    <div className="flex-container">
      <div className="paginate-ctn">
        <div className="round-effect" onClick={prevPage}>
          &lsaquo;
        </div>
        {getPageItems()}
        <div className="round-effect" onClick={nextPage}>
          &rsaquo;
        </div>
      </div>
    </div>
  );
};

export default PaginateComponent;
