import React, { useState } from "react";
import { UserContext, IUser, defaultState } from "./UserContext";

interface IProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser | null>(defaultState.user);

  const logout = () => {
    setUser(null);
  };

  const login = (user: IUser) => {
    setUser(user);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        logout,
        login,
      }}>
      {children}
    </UserContext.Provider>
  );
};
