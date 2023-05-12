import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { fetchUsers } from "../redux/features/userSlice";
import MainComponent from "../components/MainComponent";
import PaginateContainer from "./PaginateContainer";

const MainContainer = () => {
  const { users, loading, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, [dispatch, currentPage]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="main-container">
      <MainComponent data={users} loading={loading} />
      <PaginateContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default MainContainer;
