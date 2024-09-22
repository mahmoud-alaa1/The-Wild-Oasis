import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setisDarkMode] = useLocalStorageState(false, "isDarkMode");

  function toggleDarkMode() {
    setisDarkMode((mode) => !mode);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context == undefined) {
    console.error("Dark Mode Context is used outside the provider");
    throw new Error("Dark Mode Context is used outside the provider");
  }

  return context;
}
export { DarkModeProvider, useDarkMode };
