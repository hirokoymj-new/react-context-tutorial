import { createContext } from "react";

export interface IUserContext {
  user: IUser | null;
  logout: () => void;
  login: (user: IUser) => void;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
}

export const defaultState = {
  user: {
    id: 1,
    username: "hiroko",
    email: "hiroko@test.com",
  },
};

export const UserContext = createContext<IUserContext>({} as IUserContext);
