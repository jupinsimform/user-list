import PaginateComponent from "../components/PaginateComponent";
import { PaginateProps } from "../types/Types";

function PaginateContainer({ currentPage, setCurrentPage }: PaginateProps) {
  return (
    <PaginateComponent
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
}

export default PaginateContainer;
