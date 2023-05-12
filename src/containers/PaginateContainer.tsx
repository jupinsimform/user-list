import PaginateComponent from "../components/PaginateComponent";
import { PaginateProps } from "../types/Types";
import { memo } from "react";

function PaginateContainer({ currentPage, setCurrentPage }: PaginateProps) {
  return (
    <PaginateComponent
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
}

export default memo(PaginateContainer);
