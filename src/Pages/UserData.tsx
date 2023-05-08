import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { fetchUsers } from "../redux/features/userSlice";
import MainComponent from "../components/MainComponent";
import { SyncLoader } from "react-spinners";
import { UserDataProps } from "../types/Types";

const UserData = ({ currentPage }: UserDataProps) => {
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
    <div>
      <MainComponent data={user.users} />
    </div>
  );
};

export default memo(UserData);
