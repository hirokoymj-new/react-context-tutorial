import React, { useState } from "react";
import { UserContext, IUser, defaultState } from "./UserContext";

interface IProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>(defaultState.user);
  console.log("UserProvider");
  console.log(user);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};
