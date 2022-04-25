# React Context with TypeScript

## Create Context with empty object as default value

```js
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

export const UserContext = createContext({} as IUserContext);
// Usage
const { user, login, logout } = useContext(UserContext);
```

## Create Context with null as default value

```js
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

export const UserContext = createContext<IUserContext | null> null);
// Usage: Has to cast as IUserContext to avoid Typescript error
const { user, login, logout } = useContext(UserContext) as IUserContext; // Cast as IUserContext
```

<hr />

## Set up your Context in App so that any component can use the values.

```js
ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
```

## Use login/logout in a component

- Calls login and logout functions from UserContext

```js
export const Index = () => {
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
};
```

**About.js**

- Display `user` from UserContext

```js
export const About = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>About</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user && <h1>{user.email}</h1>}
    </div>
  );
};
```

## References:

- [YouTube: React Hooks useContext Tutorial](https://www.youtube.com/watch?v=lhMKvyLRWo0)
- [How to use React Context with TypeScript](https://felixgerschau.com/react-typescript-context/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/)
- [React Router V5 vs V6](https://dev.to/arunavamodak/react-router-v5-vs-v6-dp0)

[Cannot invoke an object which is possibly undefined in TS](<https://bobbyhadz.com/blog/typescript-cannot-invoke-an-object-which-is-possibly-undefined#:~:text=The%20error%20%22Cannot%20invoke%20an,(%3F.)%2C%20e.g.%20employee.>)
