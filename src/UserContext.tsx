import { createContext } from "react";

export interface IUserContext {
  user: IUser | null;
  setUser?: (value: IUser | null) => void;
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

// export const UserContext = createContext<Partial<IUserContext>>({});
export const UserContext = createContext<IUserContext>({} as IUserContext);
