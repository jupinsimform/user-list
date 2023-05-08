import { useState } from "react";
import UserData from "./MainContainer";
import PaginateComponent from "../components/PaginateComponent";

function PaginateContainer({ currentPage, setCurrentPage }: any) {
  return (
    <PaginateComponent
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
}

export default PaginateContainer;
