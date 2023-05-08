import React from "react";

const PaginateComponent = ({ currentPage, setCurrentPage }: any) => {
  let maxPages: number = 20;
  let items: JSX.Element[] = [];
  let leftSide: number = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide: number = currentPage + 2;
  if (rightSide > maxPages) rightSide = maxPages;
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number}
        className={
          number === currentPage ? "round-effect active" : "round-effect"
        }
        onClick={() => {
          setCurrentPage(number);
        }}
      >
        {number}
      </div>
    );
  }

  const nextPage = (): void => {
    setCurrentPage(Math.min(currentPage + 1, maxPages));
  };

  const prevPage = (): void => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };
  return (
    <div className="flex-container">
      <div className="paginate-ctn ">
        <div className="round-effect" onClick={prevPage}>
          &lsaquo;
        </div>
        {items}
        <div className="round-effect" onClick={nextPage}>
          &rsaquo;
        </div>
      </div>
    </div>
  );
};

export default PaginateComponent;
