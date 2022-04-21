import React from "react";
import { ThemeContext } from "./ThemeContext";

export const ToggleDarkMode = () => {
  const { dark, toggleDark } = React.useContext(ThemeContext);
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // toggleDark?.(); //FIXED TypeScript error -
    toggleDark && toggleDark();
  };
  return (
    <>
      <h1>{dark ? "🌙" : "🌞"}</h1>
      <button onClick={handleOnClick}>Toggle dark mode</button>
    </>
  );
};
