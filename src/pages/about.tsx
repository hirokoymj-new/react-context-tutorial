import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export function About() {
  const { user } = useContext(UserContext);
  console.log("About");
  console.log(user);
  if (user) {
    console.log(user.email);
  }

  return (
    <div>
      <h2>About</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {/* <div>{user?.email}</div> */}
      {user && <h1>{user.email}</h1>}
    </div>
  );
}
