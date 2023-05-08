import { memo, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { fetchUsers } from "../redux/features/userSlice";
import MainComponent from "../components/MainComponent";
import { SyncLoader } from "react-spinners";

import PaginateContainer from "./PaginateContainer";

const MainContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, [dispatch, currentPage]);

  if (user?.loading) {
    return <SyncLoader className="loader" color="rgb(250, 184, 61)" />;
  }
  if (!user?.loading && user?.error) {
    return <div>Error:{user.error}</div>;
  }
  if (user?.users?.length === 0) {
    return <div>No users found.</div>;
  }
  return (
    <div className="main-container">
      <MainComponent data={user.users} />
      <PaginateContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default memo(MainContainer);
