export type User = {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  active: boolean;
  owner: boolean;
  role: string;
  __v: number;
};

export type InitialState = {
  loading: boolean;
  users: User[];
  error: string;
};

export type CardProps = {
  hoverdata: User | null;
};

export type UserDataProps = {
  currentPage: number;
};

export type HoverdataState = {
  hoverdata: User | null;
};

export type MainComponentProps = {
  data: User[];
  loading: boolean;
};

export type PaginateProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
