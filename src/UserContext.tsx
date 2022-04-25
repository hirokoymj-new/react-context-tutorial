import { createContext } from "react";

export interface IUser {
  id: number;
  username: string;
  email: string;
  token: string;
}

export interface IUserContext {
  user: IUser | null;
  logout: () => void;
  login: (user: IUser) => void;
}

// export const UserContext = createContext<IUserContext | null>(null);
export const UserContext = createContext({} as IUserContext);
