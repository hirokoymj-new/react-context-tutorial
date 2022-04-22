import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { loginUser } from "../utils/loginUser";

export function Index() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={() => {
            logout();
          }}>
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await loginUser();
            login(user);
          }}>
          login
        </button>
      )}
    </div>
  );
}
