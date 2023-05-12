import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { fetchUsers } from "../redux/features/userSlice";
import MainComponent from "../components/MainComponent";
import { SyncLoader } from "react-spinners";
import PaginateContainer from "./PaginateContainer";

const MainContainer = () => {
  const { users, loading, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, [dispatch, currentPage]);

  if (loading) {
    return <SyncLoader className="loader" color="rgb(250, 184, 61)" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="main-container">
      <MainComponent data={users} />
      <PaginateContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default MainContainer;
