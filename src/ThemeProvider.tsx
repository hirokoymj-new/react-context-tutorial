import React from "react";
import { ThemeContext, defaultState } from "./ThemeContext";

interface IProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IProps) => {
  const [dark, setDark] = React.useState(defaultState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

// function App() {
//   return (
//     <ThemeProvider>
//       <ToggleDarkMode />
//     </ThemeProvider>
//   );
// }
